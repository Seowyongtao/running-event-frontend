import React from "react";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';
import "./Homepage.css";
import SignUpModal from "../../Components/SignUpModal/SignUpModal"  





class Homepage extends React.Component{

    state={
        showSignUp: false
    }

    closeSignUpModal=()=>{
        this.setState({showSignUp:!this.state.showSignUp})
    }

    render(){
        return(
            <div>
                    <Navbar className="Navbar" light expand="md">
                        <NavbarBrand href="/"><strong>RUN</strong></NavbarBrand>
                        
                            <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/">Log In</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink style={{cursor:"pointer"}} onClick={()=>this.setState({showSignUp:!this.state.showSignUp})}>Sign Up</NavLink>
                            </NavItem>
                            
                            </Nav>
                        
                    </Navbar>
                    <div style={{backgroundColor:"#232222", height:"92.9vh"}}>
                        { 
                            this.state.showSignUp===true
                            ?<SignUpModal closeSignUpModal={this.closeSignUpModal}></SignUpModal>
                            :null
                        }
                        
                    </div>
                
                
            </div>
        )
    }
}

export default Homepage;