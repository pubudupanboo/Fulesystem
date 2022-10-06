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
   // alert('vehical number was submitted: ' + this.state.qrcode);

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
      qrcode:'',
      rmbstate:true,
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
  
 //alert('A name was submitted: ' + qrvalue);

  const registered = {
    fullName:this.state.fullName,
    username:this.state.username,
    email:this.state.email,
    password:this.state.password,
    vehicalnumber:this.state.vehicalnumber,
    //qrcode:this.state.qrcode
    qrcode:qrvalue
  }

  let object2 = "";
//check vehicle number RMB before register 
axios.get('http://localhost:4000/app/rmbsearch/GE2567')
  .then(response => {
    //console.log(response.data);
    try{
    const getingrmbvalue = response.data;
     console.log("RMB "+getingrmbvalue[0]);
     object2 = getingrmbvalue[0];

     console.log(object2.vehicalnumber);
     object2 = "";
     console.log(object2.vehicalnumber);
     this.setState({rmbstate:true});

     alert("Registration Success");
    }
      catch(error){
      console.log("Try error");
      this.setState({rmbstate:false});
      alert("Enter Correct Vehicle Number");
    }
  });

if(this.state.rmbstate == true){

  axios.post('http://localhost:4000/app/signup',registered);
  alert('vehical number was submitted: ' + this.state.qrcode);
  console.log(registered);

    this.setState ({
      fullName: '',
      username:'',
      email:'',
      password:'',
      vehicalnumber:'',
      qrcode:''

  });
}
else{
      alert("Enter Correct Vehicle Number");
}

  }

  render() {
    return (
      
      
      <div className='container'>
        <div><center><h1>Registration</h1></center></div>
        <div className='form-div'>
       <form onSubmit={this.handleSubmit}> 
             
          <label>Full Name</label>
          <input type="text" 
          value={this.state.fullName} 
          onChange={this.handleChangefullName} 
          className='form-control form-group'
          />

          <label>User Name</label>
          <input type="text" 
          value={this.state.username} 
          onChange={this.handleChangeusername} 
          className='form-control form-group' 
          />
          <label>Email</label>
          <input type="text" 
          value={this.state.email} 
          onChange={this.handleChangeemail} 
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



export default NameForm;