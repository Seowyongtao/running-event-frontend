import React from "react";
import "./ShowMyEvent.css";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    Row,Col, Button
    } from 'reactstrap';
import {Link} from "react-router-dom";
import axios from "axios"


class ShowMyEvent extends React.Component{

    state={
        events:[]
    }

    componentDidMount(){

        this.fetchEvent()
    }


    fetchEvent= ()=>{
        
        axios.get(`http://localhost:5000/api/v1/event/show/${this.props.match.params.id}`,{
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

    render(){

        
        
            
        return(
            <div>
                <Navbar className="Navbar " light expand="md" sticky="top">
                        <NavbarBrand href="/"><strong className="NavbarTitle">RUN<strong style={{color:"#F0E68C"}}>a`Z</strong></strong></NavbarBrand>
                        
                            <Nav className="ml-auto" navbar>
                            
                            <NavItem>
                                        <Link to="/event" style={{cursor:"pointer", color:"black"}}>Go Back</Link> 
                            </NavItem>      
                            
                                                    
                            </Nav>
                        
                </Navbar>
                <Row style={{backgroundColor:"#232222", minHeight:"130%vh"}}>

                {
                    this.state.events.length===0
                    ?<Col>
                        <div style={{height:"100vh", textAlign:"center"}}>
                          <p style={{color:"white", }}>YOU HAVE NO EVENT</p>
                        </div>
                        
                    </Col>
                    :<Col style={{minHeight:"130%vh"}}>
                     <Row >
                        {this.state.events.map((event, index)=>{
                            return(
                                

                                        <Col  md={{ size: 8, offset: 2 }} style={{ height:"330px", backgroundColor:"white", position:"relative", marginTop:"100px", marginBottom:"50px"}} className="event" key={index} onClick={()=>this.setState({registerModal:true})}>
                                        
                                        
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
                                            <Button className="btn-danger btn-block mt-3">Delete</Button>
                                            </Row>
                                        
                            
                                            
                                        </Col>
                                        
                                        
                                    
                                



                                )
                                    
                        })}
                        </Row>
                        </Col>
        
                }

                
                

                

                


                
                </Row>
            </div>
            
        )
    }
}

export default ShowMyEvent;