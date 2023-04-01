let string="";
// document.querySelector('input.screen').value="go";
let screen = document.querySelector('.screen');
let buttons= document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML== '='){
            string=eval(string);
            document.querySelector('input.screen').value=string;
        }
        else if(e.target.innerHTML== 'AC'){
            string=""
            document.querySelector('input.screen').value=string;
        }
        else if(e.target.innerHTML== 'CE'){
            string=string.slice(0,-1);
            document.querySelector('input.screen').value=string;
        }
        else{
            console.log(e.target)
            if(e.target.innerHTML== 'x'){string=string+'*';}
            else{string=string+e.target.innerHTML;}
            document.querySelector('input.screen').value=string;
        }
    })
})