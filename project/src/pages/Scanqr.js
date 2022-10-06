import React, { Component,useState } from 'react'
import QrReader from 'react-qr-scanner'
import Nav from '../components/Nav'
import axios from 'axios';


let result1 = null;
let result2 = "";
let readingData = null;
let newArr = [];


class Scanqr extends Component {

    
    
  constructor(props){
    super(props)
    this.state = {
      delay: 100,
      fullName: '',
      result: 'No result',
      vehicalnumber:'',
      quata:"",
      eight:"",
      one:"",
      common:"",
      two:"",
      three:"",
      four:"",
      five:"",
      six:"",
      seven:"",
      nine:"",
      zero:"",
      submit:"",

    }

    
    this.handleScan = this.handleScan.bind(this);
    this.handleChangeveeight = this.handleChangeveeight.bind(this);
    this.handleChangeone = this.handleChangeone.bind(this);
    this.handleChangetwo = this.handleChangetwo.bind(this);
    this.handleChangethree = this.handleChangethree.bind(this);
    this.handleChangefour = this.handleChangefour.bind(this);
    this.handleChangefive = this.handleChangefive.bind(this);
    this.handleChangesix = this.handleChangesix.bind(this);
    this.handleChangeseven = this.handleChangeseven.bind(this);
    this.handleChangenine = this.handleChangenine.bind(this);
    this.handleChangezero = this.handleChangezero.bind(this);
    this.handleclean = this.handleclean.bind(this);
    this.handlesubmit = this.handlesubmit.bind(this);



   
  }
  

handleChangeone(event) { 
    this.setState({one: event.target.value});
    console.log(this.state.one);
    newArr.push(event.target.value);
    this.setState({common: parseFloat(newArr.toString().replace(/,/g, ""))});
    console.log(newArr.toString());
   
}


handleChangetwo(event) { 
    this.setState({two: event.target.value});
    console.log(this.state.two);
    newArr.push(event.target.value);
    this.setState({common: parseFloat(newArr.toString().replace(/,/g, ""))});
    console.log(newArr.toString());
}
handleChangethree(event) { 
    this.setState({three: event.target.value});
    console.log(this.state.two);
    newArr.push(event.target.value);
    this.setState({common: parseFloat(newArr.toString().replace(/,/g, ""))});
    console.log(newArr.toString());
}
handleChangefour(event) { 
    this.setState({four: event.target.value});
    console.log(this.state.two);
    newArr.push(event.target.value);
    this.setState({common: parseFloat(newArr.toString().replace(/,/g, ""))});
    console.log(newArr.toString());
}
handleChangefive(event) { 
    this.setState({five: event.target.value});
    console.log(this.state.two);
    newArr.push(event.target.value);
    this.setState({common: parseFloat(newArr.toString().replace(/,/g, ""))});
    console.log(newArr.toString());
}
handleChangesix(event) { 
    this.setState({six: event.target.value});
    console.log(this.state.two);
    newArr.push(event.target.value);
    this.setState({common: parseFloat(newArr.toString().replace(/,/g, ""))});
    console.log(newArr.toString());
}
handleChangeseven(event) { 
    this.setState({seven: event.target.value});
    console.log(this.state.two);
    newArr.push(event.target.value);
    this.setState({common: parseFloat(newArr.toString().replace(/,/g, ""))});
    console.log(newArr.toString());
}

handleChangeseven(event) { 
    this.setState({seven: event.target.value});
    console.log(this.state.two);
    newArr.push(event.target.value);
    this.setState({common: parseFloat(newArr.toString().replace(/,/g, ""))});
    console.log(newArr.toString());
}
handleChangenine(event) { 
    this.setState({seven: event.target.value});
    console.log(this.state.two);
    newArr.push(event.target.value);
    this.setState({common: parseFloat(newArr.toString().replace(/,/g, ""))});
    console.log(newArr.toString());
}
handleChangedot(event) { 
    this.setState({seven: event.target.value});
    console.log(this.state.two);
    newArr.push(".");
    this.setState({common: newArr.toString()});
    console.log(newArr.toString());
}
handleChangezero(event) { 
    this.setState({zero: event.target.value});
    console.log(this.state.two);
    newArr.push(event.target.value);
    this.setState({common: parseFloat(newArr.toString().replace(/,/g, ""))});
    console.log(newArr.toString());
}
handleChangeveeight(event) { 
    this.setState({eight: event.target.value});
    console.log(this.state.eight);
    newArr.push(event.target.value);
    this.setState({common: parseFloat(newArr.toString().replace(/,/g, ""))});
    console.log(newArr.toString());
}
handleclean(event) { 
    this.setState({common: ""});
    newArr = [];
}

handlesubmit(event) { 
  this.setState({submit:this.state.common});


  const quata1 = {
    quata:this.state.common
  }

  axios.put('http://localhost:4000/app/update/'+this.state.vehicalnumber,quata1);


  alert("Submit "+ this.state.common);

  this.setState({common:""});

  alert("Submit "+ this.state.vehicalnumber);
}


  handleScan(data){   
  console.log("nice");
  console.log(this.state.result);
    this.setState({
      result: data,   
    })

    if(this.state.result != null){

        const getingValue = this.state.result;
        const object1 = getingValue["text"];
        result1 = object1;
       // let number = this.state.result;
    // alert('vehical number detected: ' + object1);

        this.setState({
        result: object1,
      })
//reading Data and get data from mongodb
      if(result1!=null){

        result2 = result1;
        alert('vehical number detected: ' + result1);
        
        axios.get('http://localhost:4000/app/read/GE-2567')
        .then(response => {
          //console.log(response.data);
          const getingValue = response.data;
          //console.log(getingValue[0]);
          
          readingData = getingValue[0];
          this.setState({fullName: readingData.fullName});
          this.setState({vehicalnumber: readingData.vehicalnumber});
          this.setState({quata: readingData.quata});
          alert('vehical number Reading  ' + readingData.fullName);

        })

      }
      
}

  }
  handleError(err){
    console.error(err)
  }
  render(){
    const previewStyle = {
      height: 240,
      width: 320,
    }

    return(
        // <h1> {this.state.result}</h1>
        <div>
        <Nav/>
        <h1 className="d-flex justify-content-center p-60">Scan QR Code</h1>
      <div className="d-flex justify-content-center p-60">
        
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
          />
        
      </div>
        {/* <p className="d-flex justify-content-center p-60">{result1}</p> */}
        <p className="d-flex justify-content-center p-60">{result2}" "{this.state.fullName}" "{this.state.vehicalnumber}" "{this.state.quata}</p>
  









        <div className="d-flex justify-content-center">
        <div className="row d-flex justify-content-center">
        <div className ="col-6">
        <div className="row">

            <input type="text" 
            onClick={this.handleChangeone}
            className="form-control btn-info btn-outline-danger col-3" 
            waves-effect value={this.state.common}>
            </input>

            <input type="button" 
            className="btn btn-info btn-outline-dark col-3" 
            waves-effect value="1"
            onClick={this.handleChangeone}
            >
                
            
            </input>

            <input type="button" 
            className="btn btn-info btn-outline-dark col-3" 
            waves-effect value="2"
            onClick={this.handleChangetwo}
            >
            </input>
            
            <input type="button" 
            className="btn btn-info btn-outline-dark col-3" 
            waves-effect value="3"
            onClick={this.handleChangethree}
            >
            </input>

            <input type="button" 
            className="btn btn-info btn-outline-dark col-3" 
            waves-effect value="4"
            onClick={this.handleChangefour}
            ></input>

            <input type="button" 
            className="btn btn-info btn-outline-dark col-3" 
            waves-effect value="5"
            onClick={this.handleChangefive}
            ></input>
           
            <input type="button" 
            className="btn btn-info btn-outline-dark col-3" 
            waves-effect value="6"
            onClick={this.handleChangesix} 
            ></input>

            <input type="button" 
            className="btn btn-info btn-outline-dark col-3" 
            waves-effect value="7"
            onClick={this.handleChangeseven}
            ></input>

            <input type="button" 
            className="btn btn-info btn-outline-dark col-3" 
            waves-effect value="8"
            onClick={this.handleChangeveeight}
            ></input>
            
            <input type="button" 
            className="btn btn btn-info btn-outline-dark col-3" 
            waves-effect value="9"
            onClick={this.handleChangenine}
            ></input>
            <input type="button" 
            className="btn btn btn-info btn-outline-dark col-3" 
            waves-effect value="0"
            onClick={this.handleChangezero}
            ></input>
            <input type="button" 

            // value={this.state.handleChangeveeight} 
        
             className="btn btn btn-info btn-outline-dark col-3"
             waves-effect 
             value="." onClick={this.handleChangeveeight}
             
             >
            </input>
            <input type="button" 
            className="btn btn btn-info btn-outline-dark col-3" 
            waves-effect value="Clear"
            onClick={this.handleclean}
            ></input>


            <input type="button" 
            onClick={this.handlesubmit}
            className="btn form-control  btn-danger btn-outline-dark col-3" 
            waves-effect 
            value="Submit"
            >
            </input>






        </div>
    </div>
</div>
</div>











        
      </div>
    
      
    )
  }
}

export default Scanqr;