import React from "react";
import "./SignUpModal.css";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const signUpModal=(props)=>(

    <div className="Modal fade-in">
        <Form>
        <FormGroup>
          <Label tag="h4" for="exampleEmail">Sign Up</Label>
          
        </FormGroup>
        <br></br>
        <FormGroup>
          <Label for="Username">Username</Label>
          <Input
            type="name"
            name="username"
            placeholder="Enter username"
          />
        </FormGroup>
        <FormGroup>
          <Label for="Email">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="please enter valid email"
          />
          <FormText>
          We'll never share your email with anyone else.
          </FormText>
        </FormGroup>
        <FormGroup>
          <Label for="Password">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="Enter password "
          />
          <FormText className="text-muted">
            Password must contain more than 8 words
          </FormText>
        </FormGroup>
        <br></br>
        <Button className="btn-block btn-success">Sign Up</Button>
        <Button className="btn-block btn-danger" onClick={props.closeSignUpModal}>cancel</Button>
        
        </Form>
      
    </div>
)

export default signUpModal;
