'use strict';


const id = document.querySelector('#id'),
      name_ =document.querySelector('#name'),
      password = document.querySelector("#password"),
      passwordConfirm = document.querySelector("#password-confirm"),
      loginBtn = document.querySelector("#button");



loginBtn.addEventListener('click',register);

function register(){
    if(!id.value)return alert('아이디를 입력하세요');
    if(password.value!==passwordConfirm.value)return alert('비밀번호가 일치하지 않습니다'); 
    
    const req ={
        name_ : name_.value,
        id : id.value,
        psword : password.value,
    };
    //console.log(req);
   // console.log(req);
    //console.log(JSON.stringify(req));
   
    
    fetch("/register",{
        method : "POST",
        headers:{
            "Content-Type": "application/json",
        },
        body : JSON.stringify(req)
    }).then((res)=>res.json())
    .then((res)=>{
       if(res.success){
           location.href ="/login";
       }else{
           alert(res.msg);
       }
    }).catch((err)=>{
        console.error('회원가입중 에러 발생');
    })
}
