const inputvalue = document.getElementById("inputvalue");
const list = document.getElementById("li-container");

function addtask(){
      if(inputvalue.value === ''){
        alert('You want to fill the input field....');
      }
      else{
        let li = document.createElement('li');
        li.innerHTML = inputvalue.value;
        list.appendChild(li);
        let delbtn = document.createElement("span");
        delbtn.innerHTML="\u00d7";
        li.appendChild(delbtn);
      }
      inputvalue.value = "";
      savedata();
}
list.addEventListener('click',function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
 },false);
 
 function savedata(){
    localStorage.setItem("data",list.innerHTML);
 }
 function loaddata(){
     list.innerHTML=localStorage.getItem("data");
 }
 loaddata();
