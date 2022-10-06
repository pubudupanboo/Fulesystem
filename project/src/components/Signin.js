import React from 'react'
//import './content.css'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios';
import QRCode from 'qrcode';


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







class NameForm extends React.Component {

  

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


    alert('A name was submitted: ' + this.state.username);
    
    event.preventDefault();
//genarating QRcode
  
alert('A name was submitted: ' + qrvalue);

  const registered = {
    fullName:this.state.fullName,
    username:this.state.username,
    email:this.state.email,
    password:this.state.password,
    vehicalnumber:this.state.vehicalnumber,
    //qrcode:this.state.qrcode
    qrcode:qrvalue
  }

  axios.post('http://localhost:4000/app/signup',registered);
  alert('vehical number was submitted: ' + this.state.qrcode);

    this.setState ({
      fullName: '',
      username:'',
      email:'',
      password:'',
      vehicalnumber:'',
      qrcode:''

  });




  }

  render() {
    return (
        
      <div className='container'>
        <div className='form-div'>
       <form onSubmit={this.handleSubmit}> 
             
       

          <label>User Name</label>
          <input type="text" 
          value={this.state.username} 
          onChange={this.handleChangeusername} 
          className='form-control form-group' 
          />

          <label>password</label>
          <input type="text" 
          value={this.state.password} 
          onChange={this.handleChangepassword} 
          className='form-control form-group' 
          />
        <label>vehical number</label>
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


      </form>
      </div>
       </div>
    );
  }
}



export default Signin;