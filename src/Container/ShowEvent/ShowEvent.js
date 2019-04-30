import React from "react";
import "./ShowEvent.css";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, Row, Col} from 'reactstrap';
import {Redirect} from "react-router-dom";
import AddEventModal from "../../Components/AddEventModal/AddEventModal"
import axios from "axios"



class ShowEvent extends React.Component{

    state={
        logout:false,
        showAddItem:true,
        name:"",
        file_name:"",
        category:"",
        location:"",
        reward:"",
        event_date:"",
        registration_fee:"",
        registration_closes:"",
        description:""
    }


    logoutHandler = () =>{
        localStorage.removeItem("JWT")
        localStorage.removeItem("user_id")
        localStorage.removeItem("username")
       
        this.setState({logout: true})
      }

    nameInputHandler =(event)=>{
    this.setState({name:event.target.value})
    
    }

    file_nameInputHandler =(event)=>{
    this.setState({file_name:event.target.value})
    }

    categoryInputHandler =(event)=>{
    this.setState({category:event.target.value})
    }

    locationInputHandler =(event)=>{
    this.setState({location:event.target.value})
    console.log(this.state.location)
    }

    rewardInputHandler =(event)=>{
    this.setState({reward:event.target.value})
    }

    event_dateInputHandler =(event)=>{
    this.setState({event_date:event.target.value})
    }

    registration_feeInputHandler =(event)=>{
    this.setState({registration_fee:event.target.value})
    }

    registration_closesInputHandler =(event)=>{
    this.setState({registration_closes:event.target.value})
    }

    descriptionInputHandler =(event)=>{
    this.setState({description:event.target.value})
    }

    addEventHandler =(event)=>{
        event.preventDefault();
        const data ={
            name: this.state.name,
            file_name: this.state.file_name,
            category:this.state.category,
            location:this.state.location,
            reward:this.state.reward,
            event_date:this.state.event_date,
            registration_fee:this.state.registration_fee,
            registration_closes:this.state.registration_closes,
            description:this.state.description
          }

        axios.post(`http://localhost:5000/api/v1/event/new`, data,{
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("JWT")
        }
        })
        .then((response) => {
          alert('Successfully Add An Event! ');
         


                 
        })
        .catch(function (error) {
          console.log(error);
        });
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
                                <NavLink style={{cursor:"pointer"}} onClick={()=>this.setState({showAddItem:!this.state.showAddItem})}>Organise Event</NavLink>
                            </NavItem>
                            
                            <NavItem>
                                <NavLink style={{cursor:"pointer"}} onClick={this.logoutHandler}>Log Out</NavLink>
                            </NavItem>
                            
                            </Nav>
                        
                    </Navbar>
                    <Row style={{backgroundColor:"#232222", height:"92.9vh"}}>
                        
                        <Col  md={{ size: 8, offset: 2 }} style={{ height:"300px", backgroundColor:"white", position:"relative"}} className="mt-5 event">
                            
                            <Row className="h-100 w-100 eventOption" style={{position:"absolute"}}>
                                <Col className="h-100 p-0" md="8" ><img className="h-100 w-100" src="https://source.unsplash.com/user/erondu/654x300"></img></Col>
                                <Col className="h-100 w-100 p-2" md="4" >
                                    {/* <br></br> */}
                                    <strong style={{fontFamily:"Anton", fontSize:"x-large"}} >Run for life</strong>
                                    <hr></hr>
                                    
                                    <div>
                                    <p><strong>EVENT DATE:</strong> 12 May 2019</p>
                                    <p><strong>LOCATION:</strong> Kuala Lumpur</p>
                                    <p><strong>CATEGORIES:</strong> 5km</p>
                                    <p><strong>REWARDS:</strong> t-shirt , mouse, other</p>
                                    <p><strong>REGISTRATION CLOSES:</strong> 1 May 2019</p>
                                    </div>
                                   
                                </Col>
                            </Row>
                        </Col>
                        { 
                            this.state.showAddItem===true
                            ?<AddEventModal name={this.nameInputHandler} file_name={this.file_nameInputHandler} category={this.categoryInputHandler} location={this.locationInputHandler} reward={this.rewardInputHandler} event_date={this.event_dateInputHandler} registration_fee={this.registration_feeInputHandler} registration_closes={this.registration_closesInputHandler} description={this.descriptionInputHandler} addEvent={this.addEventHandler}></AddEventModal>
                            :null
                        }
                        
                        
                    </Row>
            </div>
        )
    }
}

export default ShowEvent;