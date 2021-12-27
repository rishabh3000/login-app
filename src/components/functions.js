import axios from 'axios';
import React from 'react';
import reactDom from "react-dom";
import constants from '../constants';
import {Nav} from 'react-bootstrap';
import renderProfile from './profile';
import Subjects from './subjects';

class Curriculum{
    constructor(){
        this.state = {
            subjects: null,

        }
    }
    
    getSubjects = (token, codename, classId) => {
        /**
         * Get subjects with the details 
         */

        axios.post('https://curriculum-django-staging.schooglink.com/version1.0/curriculum/listsubjects/', {
            token: token,
            codeName: codename,
            ipAddress: "127.0.0.1", //change ip later
            classId: classId,
        }, {headers:{
            "Content-Type": "application/json"
        }})
        .then( res => {
            if(res.status === 202){
                this.state.subjects = res.data.RV;
                Subjects(this.state);
                return res.data.RV;
                
            }
        }
        )
    }

    // getClasses = (token, codename, boardId) => {
    //     /**
    //      * Get classes with the user profile details 
    //      */

    //     axios.post('https://curriculum-django-staging.schooglink.com/version1.0/curriculum/listclasses/', {
    //         token: token,
    //         codeName: codename,
    //         ipAddress: "127.0.0.1", //change ip later
    //         boardId: boardId,
    //         /// '1' //change language later
    //     }, {headers:{
    //         "Content-Type": "application/json"
    //     }})
    //     .then( res => {
    //         if(res.status === 202){
    //             //this.state.boards = res.data.RV;
    //             return res.data.RV;
    //         }
    //     }
    //     )
    // }
}

class UserManager{
    constructor(){
        
        this.state = {
            isAuthenticated: false,
            error: null,
            token: null,
            username: '',
            password: '',
            codename: null,
            profile: null,
            boards:null,
            subjects:null,
            cid: null,
            ///curriculum: curriculum,
        }

        this.config = {
            
        }
    }

    getProfile = (token,codename) => {
        /**
         * Get the profile of the user using the token
         */
        console.log(token);
        console.log(codename);
        axios.post('https://identity-qa.schooglink.com/version1.0/auth/getprofile/', {
            Token: token,
            CodeName: codename,
            IpAddress: "127.0.0.1", //TODO: get the ip address
        }, {headers: {
            "Content-Type": "application/json"
        }}).then(res => {
            if(res.status === 202){
                if (token === this.state.token){
                    this.state.profile = res.data[0];
                }
                console.log(res.data);
                //else {return res.data[0];}
            }
        })
    }
    register = (email, password) => {
        /**
         * Login the user using username and password
         */
        axios.post('https://identity-qa.schooglink.com/version1.0/auth/registeruser/', {
            EmailId: email,
            Password: password,
            IpAddress: "127.0.0.1", //TODO: Get the IP address of the user
        },{headers: {
            "Content-Type": "application/json"
        }})
        .then(res => {
            if(res.status==201){
                this.state.token = res.data.Token;
                this.state.isAuthenticated = true;
                this.state.codename = res.data.CodeName;
                this.getProfile(this.state.token,this.state.codename);
                return {token: res.data[0]['Token'], codename: res.data[0]['CodeName']};
            }
            else{
                alert(res);
                return(false)}
            }
        )
        .catch(err => {if (!constants.DEBUG){alert("Registration failed!")}})
    }
    login = (email,password)=>{
        /**
         * Login the user using username and password
         */

         return new Promise(() => {
        axios.post('https://identity-qa.schooglink.com/version1.0/auth/loginuser/', {
            EmailId: email,
            Password: password,
            IpAddress: "127.0.0.1", //TODO: Get the IP address of the user
        },{headers: {
            "Content-Type": "application/json"
        }})
        .then(res => {
                this.state.token = res.data[0]['Token'];
                this.state.isAuthenticated = true;
                this.state.codename = res.data[0]['CodeName'];
                this.getProfile(res.data[0].Token,res.data[0].CodeName);
                console.log('success');
                let obj = {token: res.data[0]['Token'], codename: res.data[0]['CodeName']};
                this.getBoards(this.state.token,this.state.codename);
                
                console.log(this.state);
                document.cookie = "auth="+JSON.stringify({token: res.data[0]['Token'], codename: res.data[0]['CodeName']});
                renderProfile(email,this.state);
                return {token: res.data[0]['Token'], codename: res.data[0]['CodeName']};
            
            }
        ).catch(err => {console.log(err);if (!constants.DEBUG){alert('Login failed! Contact us with a screenshot of JS Console (Ctrl+shift+I)');}})})
    }
    getBoards = (token, codename) => {
        /**
         * Get board with the user profile details 
         */

        axios.post('https://curriculum-django-staging.schooglink.com/version1.0/curriculum/listboards/', {
            token: token,
            codeName: codename,
            ipAddress: "127.0.0.1", //change ip later
            /// '1' //change language later
        }, {headers:{
            "Content-Type": "application/json"
        }})
        .then( res => {
            if(res.status === 202){
                this.state.boards = res.data.RV;
                return res.data.RV;
            }
        }
        )
    }
    

   
    
}

export default UserManager;
