const { request, response } = require('express');
const express = require('express');
const router = express.Router();
const signupTemplete = require('../models/SignUpModels');
const checkAlreadyVehical = require('../models/checkAlreadyVehicalModel');

router.post('/signup',(request,response) =>{
    const signedUpUser = new signupTemplete({
        fullName:request.body.fullName,
        username:request.body.username,
        email:request.body.email,
        password:request.body.password,
        vehicalnumber:request.body.vehicalnumber,
        qrcode:request.body.qrcode
        //added newly for quata
    })
    signedUpUser.save()
    .then(data =>{
     response.json(data)   
    })
    .catch(error =>{
        response.json(error)
    })

});

//router.get('/signin');api
router.get('/read',async(request,response) =>{
    console.log('Get request');
   // response.send("get");
  try{
        const signedUpUser = await signupTemplete.find();
    // response.send("get");
    //response.json({todos:[]});
    response.json(signedUpUser);

  }catch(errorget){
    response.send('Error',errorget);
  }
})
//take data using vehical id
router.get('/read/:id',async(request,response) =>{
    console.log('Get request');
   // response.send("get");
  try{
       // const signedUpUse = await signupTemplete.findById('632c6329e62de4b1bae18d7b');
       // const signedUpUse = await signupTemplete.find({vehicalnumber: "sadsad"});
        const signedUpUse = await signupTemplete.find({vehicalnumber: request.params.id});

    response.json(signedUpUse);
    console.log(request.params.id);


  }catch(errorget){
    response.send('Error',errorget);
  }
})

//patch mean update
router.put('/update/:id',async(request,response) =>{

console.log("put");

const signedUpUser = new signupTemplete({
  fullName:request.body.fullName,
  username:request.body.username,
  email:request.body.email,
  password:request.body.password,
  vehicalnumber:request.body.vehicalnumber,
  qrcode:request.body.qrcode
  //added newly for quata
})
const id = request.params.id;

const bodyJason = request.body.quata;
const signedUpUse = await signupTemplete.findOneAndUpdate({vehicalnumber:id}, {"quata":bodyJason}, {upsert: true});
  
console.log(signedUpUser);
console.log(request.body);
console.log(signedUpUse);

})

//admin part vehical add and check

router.post('/insertvehical',(request,response) =>{
  const VehicalModelTemplete = new checkAlreadyVehical({
    vehicalnumber:request.body.vehicalnumber,
    vehicaltype:request.body.vehicaltype,
    quata:request.body.quata,
      
  })
  VehicalModelTemplete.save()
  .then(data =>{
   response.json(data)   
  })
  .catch(error =>{
      response.json(error)
  })

}); 


router.get('/rmbsearch/:id',async(request,response) =>{
  console.log('rmb Get request');

  try{
    
   const id = request.params.id;
    const searchrmb = await checkAlreadyVehical.find({vehicalnumber: id});

    response.json(searchrmb);
    
}catch(errorget){
 response.send('Error',"Error 123");
}






});








module.exports = router;