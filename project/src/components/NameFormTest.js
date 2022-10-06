import React from 'react'
//import './content.css'
import "bootstrap/dist/css/bootstrap.min.css"


class NameForm extends React.Component {
  constructor() {
    super();
    this.state = {
      fullName:''
      // username:'',
      // email:'',
      // password:''
    };
    //this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    //this.changefullName = this.changefullName.bind();
   // this.changeusername = this.changeusername.bind();
   // this.changeemail = this.changeemail.bind();
   // this.changepassword = this.changepassword.bind();

  }

  // handleChange(event) {    this.setState({value: event.target.value});  }
  // handleSubmit(event) {
  //   alert('A name was submitted: ' + this.state.value);
  //   event.preventDefault();
  // }

changefullName(event){
    this.setState({fullName:event.target.value})
}
// changeusername(event){
//   this.setState({
//     username:event.target.value
//   })
// }
// changeemail(event){
//   this.setState({
//     email:event.target.value
//   })
// }
// changepassword(event){
//   this.setState({
//     password:event.target.value
//   })
// }



  render() {
    return (
      <div>
              <div className='container'>
                <div className='form-div'>
                  <form>
                  
                    <input type='text' 
                     placeholder='Full Name' 
                     onChange={this.changefullName} 
                     value={this.state.fullName}
                     className='form-control form-group'
                     />
                     {/* <input type = 'text' 
                     placeholder='username' 
                     onChange={this.changeusername} 
                     //value={this.state.username}
                     className='form-control form-group'
                     />
                    <input type = 'text' 
                     placeholder='email' 
                     onChange={this.changeemail} 
                     //value={this.state.email}
                     className='form-control form-group'
                     />
                    <input type = 'password' 
                     placeholder='password' 
                     onChange={this.changepassword} 
                    // value={this.state.password}
                     className='form-control form-group'
                     /> */}

                     <input type='submit' className='btn btn-danger btn-block' value='submit' />

                  </form>
                </div>

              </div>

      </div>
      
    );
  }
}

export default NameForm;