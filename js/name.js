document. addEventListener("DOMContentLoaded", function(e){

 let modify_btn = document.querySelector("#modify_btn");
 let name_modify_ok_box = document.querySelector("#name_modify_ok_box");
 let modify_ok_btn = document.querySelector("#modify_ok_btn");
 let name_box = document.querySelector("#name_box");
 let name_modify_ok_inner_text = document.querySelector("#modify_name");

 modify_btn.addEventListener("click", function(){
    name_modify_ok_box.style.display ="block";
    modify_btn.style.visibility="hidden";
 })

 modify_ok_btn.addEventListener("click", function(){
    let name = name_modify_ok_inner_text.value; 
    console.log(name);
   

    if(name === ""){
        alert("새 이름을 입력해주세요");
    }
    else{
        name_box.value = name;
        name_modify_ok_box.style.display ="none";
        modify_btn.style.visibility="visible";
    }
 })

})