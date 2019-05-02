import React from "react";
import "./RegisterModal.css"
import { Form, FormGroup, Label, Input, Row, Col, Button} from 'reactstrap';
import axios from "axios"


class RegisterModal extends React.Component{

    state={
        registration_fee:"",
        first_name:"",
        last_name:"",
        email:"",
        date_of_birth:"",
        age:"",
        gender:"",
        nationality:"",
        nric:"",
        phone_number:"",
        address:""
    }


    registration_feeInputHandler=(event)=>{
        this.setState({registration_fee:this.props.location.state.registration_fee})
    }

    first_nameInputHandler=(event)=>{
        this.setState({first_name:event.target.value})
    }

    last_nameInputHandler=(event)=>{
        this.setState({last_name:event.target.value})
    }

    emailInputHandler=(event)=>{
        this.setState({email:event.target.value})
    }

    date_of_birthInputHandler=(event)=>{
        this.setState({date_of_birth:event.target.value})
    }

    ageInputHandler=(event)=>{
        this.setState({age:event.target.value})
    }

    genderInputHandler=(event)=>{
        this.setState({gender:event.target.value})
    }

    nationalityInputHandler=(event)=>{
        this.setState({nationality:event.target.value})
    }

    nricInputHandler=(event)=>{
        this.setState({nric:event.target.value})
    }

    phone_numberInputHandler=(event)=>{
        this.setState({phone_number:event.target.value})
    }

    addressInputHandler=(event)=>{
        this.setState({address:event.target.value})
    }

    registerHandler=()=>{

        const data ={
            event_id:this.props.match.params.id,
            registration_fee:this.props.location.state.registration_fee,
            first_name: this.state.first_name,
            last_name:this.state.last_name,
            email:this.state.email,
            date_of_birth:this.state.date_of_birth,
            age:this.state.age,
            gender:this.state.gender,
            nationality:this.state.nationality,
            nric:this.state.nric,
            phone_number:this.state.phone_number,
            address:this.state.address,

          }

        axios.post(`http://localhost:5000/api/v1/registration/new`, data,{
        headers: {
            "Authorization": "Bearer " + localStorage.getItem("JWT")
        }
        })
        .then((response) => {
          alert('Successfully register! ');
          


                 
        })
        .catch(function (error) {
          console.log(error);
        });
    }


    
    render(){

        let gender=["male", "female"]

        

        return(

            <div className="Modal fade-in">
                <Form>
                <FormGroup>
                <Label tag="h4" for="exampleEmail">Register Form</Label>
                
                </FormGroup>
                <hr></hr>
                <h5>Personal details</h5>
                
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="firstName">First Name</Label>
                            <Input
                                type="text"
                                name="firstName"
                                placeholder="please enter your first name"
                                onChange={this.first_nameInputHandler}
                            />   
                        </FormGroup>  
                    </Col>
                    <Col>
                        <FormGroup>
                                <Label for="lastName">Last Name</Label>
                                <Input
                                    type="text"
                                    name="lastName"
                                    placeholder="please enter your last name"
                                    onChange={this.last_nameInputHandler}
                                />   
                        </FormGroup>  
                    </Col>
                </Row>
                <Row>
                    <Col md="4">
                    <FormGroup>
                        <Label for="dateOfBirth">Date of Birth</Label>
                        <Input
                            type="text"
                            name="dateOfBirth"
                            placeholder="DD/MM/YYYY"
                            onChange={this.date_of_birthInputHandler}
                        />   
                    </FormGroup>
                    </Col>
                    <Col md="4">
                    <FormGroup>
                        <Label for="age">Age</Label>
                        <Input
                            type="text"
                            name="age"
                            placeholder="e.g 20"
                            onChange={this.ageInputHandler}
                        />   
                    </FormGroup>
                    </Col>
                    <Col md="4">
                    <FormGroup>
                        <Label for="gender">Gender</Label>
                        <Input
                            type="select"
                            name="gender"
                            placeholder="e.g male"
                            onChange={this.genderInputHandler}
                        >  
                        <option></option>
                        {
                                gender.map((o, index)=> {
                                return(<option key={index} value={o}>{o}</option>)
                                }
                                )
                            }
            
                         </Input>  
                    </FormGroup>
                    </Col>
                
                </Row>
                <Row>
                    <Col md="3">
                        <FormGroup>
                            <Label for="nric">NRIC</Label>
                            <Input
                                type="text"
                                name="nric"
                                placeholder="IC number"
                                onChange={this.nricInputHandler}
                            />   
                        </FormGroup>
                    
                    </Col>
                    <Col md="3">
                        <FormGroup>
                            <Label for="nationality">Nationality</Label>
                            <Input
                                type="text"
                                name="nationality"
                                placeholder="e.g Malaysia"
                                onChange={this.nationalityInputHandler}
                            />   
                        </FormGroup>
                    
                    </Col>
                    <Col md="6">
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input
                                type="text"
                                name="email"
                                placeholder="please enter valid email"
                                onChange={this.emailInputHandler}
                            />   
                        </FormGroup>
                    
                    </Col>
                </Row>
                <h5>Contact details</h5>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="mobilePhone">Mobile Phone</Label>
                            <Input
                                type="text"
                                name="mobilePhone"
                                placeholder="please enter your phone number"
                                onChange={this.phone_numberInputHandler}
                            />   
                        </FormGroup>
                    
                    </Col>
                    <Col>

                        <FormGroup>
                            <Label for="address">Residential Address</Label>
                            <Input
                                type="text"
                                name="address"
                                placeholder="please enter your residential address"
                                onChange={this.addressInputHandler}
                            />   
                        </FormGroup>
                    
                    
                    </Col>
                </Row>
                <h5>Payment detail</h5>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="registrationFee">Registration Fee</Label>
                            <Input
                                type="text"
                                name="registrationFee"
                                value={this.props.location.state.registration_fee}
                                onChange={this.registration_feeInputHandler}
                            />   
                        </FormGroup>  
                    </Col>
                </Row>
            
            
                <Button className="btn-success btn-block" onClick={this.registerHandler}> Submit</Button>
                <Button className="btn-danger btn-block" >Cancel</Button>
            
                
                
                </Form>
            
            </div>

        )
    }
}



export default RegisterModal;