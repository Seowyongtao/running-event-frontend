import React from "react";
import "./AddEventModal.css"
import { Form, FormGroup, Label, Input, Row, Col, Button} from 'reactstrap';


let location=["Kuala Lumpur",
    "Putrajaya",
    "Perlis",
    "Kedah",
    "Terengganu",
    "Pahang",
    "Perak",
    "Kelantan",
    "Penang",
    "Selangor",
    "Negeri Sembilan",
    "Johor",
    "Malacca",
]

let category=["5km", "10km", "21km", "42km"]


const AddEventModal =(props)=>(

    <div className="Modal fade-in">
    <Form>
    <FormGroup>
      <Label tag="h4" for="exampleEmail">Fill In Your Event Information</Label>
      
    </FormGroup>
    <hr></hr>
    
    <FormGroup>
          <Label for="Name">Name</Label>
          <Input
            type="text"
            name="name"
            placeholder="please enter event name"
            onChange={props.name}
          />   
    </FormGroup>
    <Row>
        <Col>
        <FormGroup>
            <Label for="File_name">File name</Label>
            <Input
                type="text"
                name="file_name"
                placeholder="please enter file_name"
                onChange={props.file_name}
            />   
        </FormGroup>
        </Col>
        <Col>
        <FormGroup>
            <Label for="Location">Location</Label>
            
            <Input
            type="select"
            name="Location"
            onChange={props.location}
            >  
            <option></option>
            {
                      location.map((o, index)=> {
                      return(<option key={index} value={o}>{o}</option>)
                      }
                    )
                  }
            
            </Input> 
            
        </FormGroup>
        </Col>
        <Col>
        <FormGroup>
          <Label for="Category">Category</Label>
          <Input
            type="select"
            name="Category"
            onChange={props.category}
            >  
            <option></option>
            {
                      category.map((o, index)=> {
                      return(<option key={index} value={o}>{o}</option>)
                      }
                    )
                  }
            
            </Input> 
    </FormGroup>
        </Col>

    </Row>
    
   
    <FormGroup>
          <Label for="Rewards">Reward</Label>
          <Input
            type="text"
            name="Rewards"
            placeholder="please enter event rewards"
            onChange={props.reward}
          />   
    </FormGroup>
    <Row>
        <Col>
        <FormGroup>
          <Label for="Event Date">Event Date</Label>
          <Input
            type="text"
            name="Event Date"
            placeholder="DD/MM/YYYY"
            onChange={props.event_date}
          />   
        </FormGroup>
        </Col>
        <Col>
        <FormGroup>
          <Label for="registration_closes_date">Registration Closes Date</Label>
          <Input
            type="text"
            name="registration closes date"
            placeholder="DD/MM/YYYY"
            onChange={props.registration_closes}
          />   
        </FormGroup>
        </Col>
        <Col>
        <FormGroup>
          <Label for="registration_fee">Registration Fee</Label>
          <Input
            type="text"
            name="registration fee"
            placeholder="RM"
            onChange={props.registration_fee}
          />   
        </FormGroup>
        </Col>
    </Row>
    
    
    <FormGroup>
          <Label for="description">Description</Label>
          <Input
            type="textarea"
            
            name="description"
            
            onChange={props.description}
          />   
    </FormGroup>
    <Button className="btn-success btn-block" onClick={props.addEvent}>Submit</Button>
    <Button className="btn-danger btn-block">Cancel</Button>
   
    
    
    </Form>
  
</div>
)

export default AddEventModal;
    