import React from "react";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';
import "./Homepage.css";
import SignUpModal from "../../Components/SignUpModal/SignUpModal" ;
import LogInModal from "../../Components/LogInModal/LoginModal"





class Homepage extends React.Component{

    state={
        showSignUp: false,
        showLogIn: false
    }

    closeSignUpModal=()=>{
        this.setState({showSignUp:!this.state.showSignUp})
    }

    closeLogInModal=()=>{
        this.setState({showLogIn:!this.state.showLogIn})
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
                            ?<SignUpModal closeSignUpModal={this.closeSignUpModal}></SignUpModal>
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