import React from "react";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';
import "./Homepage.css";
import SignUpModal from "../../Components/SignUpModal/SignUpModal" ;
import LogInModal from "../../Components/LogInModal/LoginModal";
import axios from "axios";





class Homepage extends React.Component{

    state={
        showSignUp: false,
        showLogIn: false,
        username:"",
        email:"",
        password:""
    }

    closeSignUpModal=()=>{
        this.setState({showSignUp:!this.state.showSignUp})
    }

    closeLogInModal=()=>{
        this.setState({showLogIn:!this.state.showLogIn})
    }

    nameInputHandler =(event)=>{
        this.setState({username:event.target.value})
      }
  
    emailInputHandler =(event)=>{
    this.setState({email:event.target.value})
    }
  
    passwordInputHandler =(event)=>{
    this.setState({password: event.target.value})
    }

    signUpHandler=(event)=>{
      const validateEmail = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)
      const validatePassword = /^[\dA-Za-z]\w{8,}$/.test(this.state.password)
      const inputIsNotEmpty = this.state.email.length !== 0 && this.state.username.length !== 0 && this.state.password.length !== 0
      

      if(validateEmail === false){
        alert("please enter valid email address")
      }

      if(validatePassword ===false){
        alert("password format does not match!")
      }

      if(this.state.email.length === 0 ){
        alert("please enter your email address!")
      }

      if(this.state.password.lenth === 0){
        alert("please enter your password!")
      }

      if(this.state.username.lenth === 0){
        alert("please enter your username!")
      }

      if (validatePassword && validateEmail && inputIsNotEmpty){
        alert('Successfully Sign up! ');
        event.preventDefault();
        const data ={
          username: this.state.username,
          email: this.state.email,
          password:this.state.password,
          
        }
        axios.post(`http://localhost:5000/api/v1/users/`, data)
        .then((response) => {
          console.log(response)
          localStorage.setItem('username', response.data.user.username)
          localStorage.setItem('user_id', response.data.user.id)
          localStorage.setItem('JWT', response.data.access_token)

                 
        })
        .catch(function (error) {
          console.log(error);
        });
      }
    }

    render(){
        return(
            <div>
                    <Navbar className="Navbar" light expand="md">
                        <NavbarBrand href="/"><strong className="NavbarTitle">RUNaZ</strong></NavbarBrand>
                        
                            <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink style={{cursor:"pointer"}} onClick={()=>this.setState({showLogIn:!this.state.showLogIn, showSignUp:false})}>Log In</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{cursor:"pointer"}} onClick={()=>this.setState({showSignUp:!this.state.showSignUp, showLogIn:false})}>Sign Up</NavLink>
                            </NavItem>
                            
                            </Nav>
                        
                    </Navbar>
                    <div style={{backgroundColor:"#232222", height:"92.9vh"}}>
                        { 
                            this.state.showSignUp===true
                            ?<SignUpModal closeSignUpModal={this.closeSignUpModal} nameInputHandler={this.nameInputHandler} emailInputHandler={this.emailInputHandler} passwordInputHandler={this.passwordInputHandler} signUpHandler={this.signUpHandler}></SignUpModal>
                            :null
                        }
                        { 
                            this.state.showLogIn===true
                            ?<LogInModal closeLogInModal={this.closeLogInModal}></LogInModal>
                            :null
                        }

                        
                    </div>
                
                
            </div>
        )
    }
}

export default Homepage;