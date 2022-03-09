'use strict';


console.log('register');

const id = document.querySelector('#id'),
      name_ =document.querySelector('#name'),
      password = document.querySelector("#password"),
      passwordConfirm = document.querySelector("#password-confirm"),
      loginBtn = document.querySelector("#loginButton");


loginBtn.addEventListener('click',register);

function register(){
    const req ={
        name_ : name_.value,
        id : id.value,
        password : password.value,
        passwordConfirm : passwordConfirm.value
    };
    //console.log(req);
   // console.log(req);
    console.log(JSON.stringify(req));

    
    fetch("/register",{
        method : "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body : JSON.stringify(req)
    }).then((res)=>res.json())
    .then((res)=>{
       if(res.success){
           location.href ="/";
       }else{
           alert(res.msg);
       }
    }).catch((err)=>{
        console.error('로그인중 에러 발생');
    })
}
