import React from "react";
import "./ShowEvent.css";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink, Row, Col,UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,DropdownItem} from 'reactstrap';
import {Redirect, Link} from "react-router-dom";
import AddEventModal from "../../Components/AddEventModal/AddEventModal";
import axios from "axios";
import Categorylogo from "../../Assets/Images/category.jpg"


// let ID =localStorage.getItem("user_id")

class ShowEvent extends React.Component{

    state={
        logout:false,
        showAddItem:false,
        name:"",
        file_name:"",
        category:"",
        location:"",
        reward:"",
        event_date:"",
        registration_fee:"",
        registration_closes:"",
        description:"",
        events:[],
        // registerModal:false

        
    }

    componentDidMount(){

        this.fetchEvent()
    }



    fetchEvent= ()=>{
        
      axios.get(`http://localhost:5000/api/v1/event/show`,{
      headers: {
        "Authorization": "Bearer " + localStorage.getItem("JWT")
      }
    })
    .then(result => {
      this.setState({events:result.data.event})
      
        
    })
    .catch(error => {
        console.log('ERROR: ', error)
    })
    }


    logoutHandler = () =>{
        localStorage.removeItem("JWT")
        localStorage.removeItem("user_id")
        localStorage.removeItem("username")
       
        this.setState({logout: true})
      }

    closeAddItem =()=>{
    this.setState({showAddItem:false})
    }

    // closeRegistration = ()=>{
    // this.setState({registerModal: false})
    // }

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
          this.setState({showAddItem:!this.state.showAddItem})
          this.fetchEvent()


                 
        })
        .catch(function (error) {
          console.log(error);
        });
    }

    
    render(){

        // console.log(localStorage.getItem("user_id"))
        if(this.state.logout ===true){
            return <Redirect to="/" />
            }
        
        return(
            <div>
                <Navbar className="Navbar " light expand="md" sticky="top">
                        <NavbarBrand href="/"><strong className="NavbarTitle">RUN<strong style={{color:"#F0E68C"}}>a`Z</strong></strong></NavbarBrand>
                        
                            <Nav className="ml-auto" navbar>
                            

                            
                            
                            

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                <img src={Categorylogo} className="categorylogo" alt='test'/>
                                <strong>More</strong>
                                </DropdownToggle>
                                <DropdownMenu right>
                                <DropdownItem>
                                    <NavItem>
                                    <NavLink style={{cursor:"pointer", color:"black"}} onClick={()=>this.setState({showAddItem:!this.state.showAddItem})}>Organise Event</NavLink>
                                    </NavItem>
                                </DropdownItem>
                                <DropdownItem>
                                    <NavItem>
                                        <Link to={{pathname:`/myevent/${localStorage.getItem("user_id")}`}} style={{cursor:"pointer", color:"black",marginLeft:"10px"}} >My events</Link> 
                                    </NavItem>      
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    <NavItem>
                                    <NavLink style={{cursor:"pointer", color:"black"}} onClick={this.logoutHandler}>Log Out</NavLink>
                                    </NavItem>
                                </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            
                            </Nav>
                        
                    </Navbar>
                    <Row style={{backgroundColor:"#232222", minHeight:"130%vh"}}>
                    
                        
                       
                        {
                                this.state.events.map((event, index)=>{
                                    return(
                                        

                                        <Col  md={{ size: 8, offset: 2 }} style={{ height:"330px", backgroundColor:"white", position:"relative", marginTop:"100px", marginBottom:"50px"}} className="event" key={index} onClick={()=>this.setState({registerModal:true})}>
                                        <Link to={{pathname:`/registration/${event.event_id}`,state:{registration_fee:event.registration_fee}}}>
                                        
                                            <Row className="h-100 w-100 eventOption" style={{position:"absolute", color:"black"}}>
                                                <Col className="h-100 p-0" md="8" ><img className="h-100 w-100" src="https://source.unsplash.com/user/erondu/654x330" alt="event"></img></Col>
                                                <Col className="h-100 w-100 p-2" md="4" >
                                                    {/* <br></br> */}
                                                    <strong style={{fontFamily:"Anton", fontSize:"x-large"}} >{event.name}</strong>
                                                    <hr></hr>
                                                    
                                                    <div>
                                                    <p><strong>EVENT DATE:</strong> {event.event_date}</p>
                                                    <p><strong>LOCATION:</strong> {event.location}</p>
                                                    <p><strong>CATEGORY:</strong> {event.category}</p>
                                                    <p><strong>REWARDS:</strong> {event.reward}</p>
                                                    <p><strong>REGISTRATION FEE:</strong> RM{event.registration_fee}</p>
                                                    <p><strong style={{color:"red"}}>REGISTRATION CLOSES:</strong> {event.registration_closes}</p>
                                                    </div>
                                                
                                                </Col>
                                            </Row>
                                        </Link>
                            
                                            {/* { 
                                                this.state.registerModal===true
                                                ?<RegisterModal   registration_fee={event.registration_fee} >
                                            
                                                </RegisterModal>
                                                :null
                                            } */}
                                        </Col>

                                        )
                                            
                                })
                        }

                        { 
                            this.state.showAddItem===true
                            ?<AddEventModal 
                            name={this.nameInputHandler} file_name={this.file_nameInputHandler} 
                            category={this.categoryInputHandler} location={this.locationInputHandler} 
                            reward={this.rewardInputHandler} event_date={this.event_dateInputHandler} registration_fee={this.registration_feeInputHandler} 
                            registration_closes={this.registration_closesInputHandler} 
                            description={this.descriptionInputHandler} 
                            addEvent={this.addEventHandler} closeAddItem={this.closeAddItem}></AddEventModal>
                            :null
                        }
                        {/* { 
                            this.state.registerModal===true
                            ?<RegisterModal closeRegistration={this.closeRegistration} >

                            </RegisterModal>
                            :null
                        } */}
                        
                        
                    </Row>
            </div>
        )
    }
}

export default ShowEvent;