import React from "react";
import "./ShowEvent.css";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink} from 'reactstrap';
import {Redirect} from "react-router-dom";



class ShowEvent extends React.Component{

    state={
        logout:false
    }


    logoutHandler = () =>{
        localStorage.removeItem("JWT")
        localStorage.removeItem("user_id")
        localStorage.removeItem("username")
       
        this.setState({logout: true})
      }

    
    render(){

        if(this.state.logout ===true){
            return <Redirect to="/" />
            }
        
        return(
            <div>
                <Navbar className="Navbar" light expand="md">
                        <NavbarBrand href="/"><strong className="NavbarTitle">RUN<strong style={{color:"#F0E68C"}}>a`Z</strong></strong></NavbarBrand>
                        
                            <Nav className="ml-auto" navbar>
                            
                            <NavItem>
                                <NavLink style={{cursor:"pointer"}} onClick={this.logoutHandler}>Log Out</NavLink>
                            </NavItem>
                            
                            </Nav>
                        
                    </Navbar>
            </div>
        )
    }
}

export default ShowEvent;