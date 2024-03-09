let passbox = document.getElementById("passBox");
let genbtn = document.getElementById("genbtn");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("Numbers");
let symbols = document.getElementById("Symbols");
let inputslider = document.getElementById("inputslider");
let slidervalue = document.getElementById("slidervalue");
let copybtn = document.getElementById("copybtn");
slidervalue.textContent = inputslider.value;
inputslider.addEventListener('input',()=>{
    slidervalue.textContent = inputslider.value;
})
let lowercases = "abcdefghijklmnopqrstuvwxyz";
let uppercases = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let allnumbers = "0123456789";
let allsymbols="~!@#$%^&*()";
function genpassword(){
    let allchar = "";
    let genpassword = "";
    let i = 1;
    allchar += uppercase.checked ? uppercases : "";
    allchar += lowercase.checked ? lowercases : "";
    allchar += numbers.checked ? allnumbers : "";
    allchar += symbols.checked ? allsymbols : "";
    
    if(allchar==""||allchar.length==0)
    return genpassword;

    while(i<=inputslider.value){
    genpassword += allchar.charAt(Math.floor(Math.random()*allchar.length));
    i++;
}
return genpassword;
}
genbtn.addEventListener('click',()=>{
    passbox.value = genpassword();
})
copybtn.addEventListener('click',()=>{
    if(passbox.value>=1||passbox.length!="")
    navigator.clipboard.writeText(passbox.value);
    copybtn.innerText ="check";
    copybtn.title ="Password copied";
    setTimeout(() => {
        copybtn.innerHTML="content_copy";
        copybtn.title="";
    }, 3000);
});
