import React from 'react'
//import './content.css'
import "bootstrap/dist/css/bootstrap.min.css"
import Nav from '../components/Nav';
import {useNavigate} from 'react-router-dom';
import {Link} from 'react-router-dom'


import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';

class Admindataenterpage extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName:''
      // username:'',
      // email:'',
      // password:''
    };
   

  }

 

changefullName(event){
    this.setState({fullName:event.target.value})
}





  render() {
    return (
      <div>
      <Nav/>
      <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">ADD VEHICLE DETAILS</h2>
          <MDBInput  placeholder='' wrapperClass='mb-3' label='Vehical Number' size='lg' id='form1' type='text'/>
          <MDBInput  placeholder='' wrapperClass='mb-3' label='Vehical Type' size='lg' id='form2' type='email'/>
          <MDBInput  placeholder='' wrapperClass='mb-3' label='Quata' size='lg' id='form3' type='password'/>
          
         
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' >ADD VEHICLE</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>

              

      </div>
      
    );
  }
}

export default Admindataenterpage;