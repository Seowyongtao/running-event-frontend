import React from "react";
import DropIn from "braintree-web-drop-in-react";
import axios from "axios";
import {Button} from 'reactstrap';
import {Redirect} from "react-router-dom";



class Braintree extends React.Component{

    state = {
        clientToken: null,
        redirect:false
     

      };

    componentDidMount() {

        axios.get(`http://localhost:5000/api/v1/payment/new`,{
            headers: {
              "Authorization": "Bearer " + localStorage.getItem("JWT")
            }
          })
          .then(result => {
              

            this.setState({
                clientToken:result.data.client_token
            });
            
              
          })
          .catch(error => {
              console.log('ERROR: ', error)
          })
    
    
    }

    async buy (){

        let nonce = await this.instance.requestPaymentMethod(); 
        

        const data={
            nonce:nonce.nonce, 
            amount:this.props.location.state.registration_fee
        }

        const data2 ={
            event_id:this.props.location.state.data.event_id,
            registration_fee:this.props.location.state.registration_fee,
            first_name: this.props.location.state.data.first_name,
            last_name:this.props.location.state.data.last_name,
            email:this.props.location.state.data.email,
            date_of_birth:this.props.location.state.data.date_of_birth,
            age:this.props.location.state.data.age,
            gender:this.props.location.state.data.gender,
            nationality:this.props.location.state.data.nationality,
            nric:this.props.location.state.data.nric,
            phone_number:this.props.location.state.data.phone_number,
            address:this.props.location.state.data.address,

          }

        axios.post(`http://localhost:5000/api/v1/payment/checkouts`, data,{
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("JWT")
            }
            })
            .then((response) => {

                alert("Pay successfully")

                axios.post(`http://localhost:5000/api/v1/registration/new`, data2,{
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("JWT")
                }
                })
                .then((response) => {

                
                
                this.setState({redirect:true})
        
        
                        
                })
                .catch(function (error) {
                console.log(error);
                });
              
           
    
    
                     
            })
            .catch(function (error) {
              console.log(error);
            });
    }


    render(){
        

        if(this.state.redirect ===true){
            return <Redirect to="/event" />
            }
        
        
        return(
            <>
                {   
                    this.state.clientToken ?
                    <>
                        <div>

                            <DropIn
                            options={{ authorization: this.state.clientToken }}
                            onInstance={instance => (this.instance = instance)}></DropIn>

                            <p>Total Amount: RM{this.props.location.state.registration_fee}</p>

                            <Button onClick={this.buy.bind(this)} className="btn-success btn-block">PAY</Button>
                        </div>
                    </> : 
                    <h5>loading...</h5>
                }

            </>
            
        )
    }
}

export default Braintree;
