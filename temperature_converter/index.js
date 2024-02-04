let cInput=document.querySelector(".firstrow input");
let cbtn=document.querySelector(".cbtn");
let fbtn=document.querySelector(".fbtn");
let convert=document.querySelector(".convert");
let output=document.querySelector(".output");

let cflag=false;
let fflag=false;
cbtn.addEventListener("click",(event)=>
{
    cflag=true;
    fflag=false;
})
fbtn.addEventListener("click",(evnt)=>{
    fflag=true;
    cflag=false;
})
convert.addEventListener("click",(event)=>{
    let val=cInput.value;
    if(val==="" || val==="isNan"||val===null)
    {
                 //please enter valid input
    }
    else{
       
        if(cflag===true)
        {
            
            let cTemp=(val-32)*5/9;
            let ans=cTemp.toFixed(2);
            output.innerHTML=ans;
        }
        else if(fflag===true)
        {
            let fTemp=((9/5*val)+32);
            let ans=fTemp.toFixed(2);
            output.innerHTML=ans;
        }
    }
})
