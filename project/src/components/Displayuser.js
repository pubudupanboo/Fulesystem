import React, { Component } from 'react'
//import './content.css'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import QRCode from 'qrcode';
import Nav from '../components/Nav'


let qrvalue;
let textBoxValue;
const gen = async () =>{
  try {
    const response1 = await QRCode.toDataURL(textBoxValue);
    console.log('con******'+response1);
    qrvalue = response1;
    //this.setState ({qrcode: response1});
    alert('vehical number was submitted: ' + this.state.qrcode);

  } catch (error) {
    console.log('Hi'+ error);
  }
  }



  let display = "";



class Displayuser extends React.Component {

 

  constructor(props) {
    super(props);
    this.state = {
      fullName: '',
      username:'',
      email:'',
      password:'',
      vehicalnumber:'',
      qrcode:''
  };
    this.handleChangeusername = this.handleChangeusername.bind(this);
    this.handleChangefullName = this.handleChangefullName.bind(this);
    this.handleChangeemail = this.handleChangeemail.bind(this);
    this.handleChangepassword = this.handleChangepassword.bind(this);
    this.handleChangevehicalnumber = this.handleChangevehicalnumber.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);

    
  }

  handleChangeusername(event) {    this.setState({username: event.target.value});  }
  handleChangefullName(event) {    this.setState({fullName: event.target.value});  }
  handleChangeemail(event) {       this.setState({email: event.target.value});  }
  handleChangepassword(event) {    this.setState({password: event.target.value});  }
  handleChangevehicalnumber(event) {    this.setState({vehicalnumber: event.target.value}); 
  gen();
  textBoxValue = event.target.value;
  console.log(event.target.value);
}



  handleSubmit(event) {


    //alert('A name was submitted: ' + this.state.username);
    
    event.preventDefault();
//genarating QRcode
  
alert('A name was submitted: ' + qrvalue);

  

  //axios.post('http://localhost:4000/app/signup',registered);
  //alert('vehical number was submitted: ' + this.state.qrcode);
  axios.get('http://localhost:4000/app/read/sadsad')
  .then(response => {
    //console.log(response.data);
    const getingValue = response.data;
    //console.log(getingValue[0]);
    
    const object1 = getingValue[0];

    //console.log(object1);
   
    console.log(object1.fullName);
    this.setState({username: object1.username});
    this.setState({fullName: object1.fullName});
    this.setState({vehicalnumber: object1.vehicalnumber});
    this.setState({qrcode: object1.qrcode});
   
  });




  const registered = {
    fullName:this.state.fullName,
    username:this.state.username,
    email:this.state.email,
    password:this.state.password,
    vehicalnumber:this.state.vehicalnumber,
    //qrcode:this.state.qrcode
    qrcode:qrvalue
  }


 display = "Click on the QR to download it"

  }

  render() {
    return (
        
      <div>
        <Nav/>
       <center><h1>Enter Your Details To Get QRCode</h1></center> 
      <div className='container'>
        
        <div className='form-div'>
       <form onSubmit={this.handleSubmit}> 
             
       <label>Veheical Number</label>
          <input type="text" 
          value={this.state.password} 
          onChange={this.handleChangepassword} 
          className='form-control form-group' 
          />
        <label>Password</label>
          <input type="text" 
          value={this.state.vehicalnumber} 
          onChange={this.handleChangevehicalnumber} 
          className='form-control form-group' 
          />
         
          

        <input 
         type="submit"
         value="Submit"
         className='btn btn-danger btn-block mt-2'
         
         />
         <center>
         <br></br>
        <label>{this.state.username}</label>
        <br></br>
        <label>{this.state.fullName}</label>
        
        <br></br>
        <p>{display}</p>
        <br></br>
        <a download={this.state.vehicalnumber} 
        href={this.state.qrcode} title="ImageName">
        <img alt="" src={this.state.qrcode}></img>
</a>

</center>



      </form>
      </div>
       </div>
       </div>
    );
  }
}



export default Displayuser;