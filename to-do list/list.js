const a=document.querySelector("#input");
const b=document.querySelector("#list-container");

function ADDtask(){
    if(a.value===""){
        alert("enter data");
    }
    else{
        let c=document.createElement("li");
        c.innerHTML=a.value;
        b.appendChild(c);
        let span=document.createElement("span");
        span.innerHTML= "\u00d7";
        c.appendChild(span);
    }
    a.value="";
    
}
b.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
    }
},false);
