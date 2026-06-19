let inputBox = document.getElementById('inputBox')
let buttons = document.querySelectorAll('button')

let string = ''

buttons.forEach(element =>{
    element.addEventListener('click', (b)=>{
        if(b.target.innerText == '='){
         string = string == '' ? '0': string;
         try{
            string = String(eval(string))
            inputBox.value = string;
         }
         catch(error){
            string = '' // fix: reset broken expression
            inputBox.value = "Error(Press AC)"
         }
        }
        else if(b.target.innerText == 'AC'){
            string = ''
            inputBox.value = string;
        }
        else if(b.target.innerText == 'DEL'){
            // fix: handle error state cleanly
            if(inputBox.value == "Error(Press AC)"){
                string = ''
                inputBox.value = ''
            }else{
                string = string.substring(0,string.length-1)
                inputBox.value = string;
            }
        }
        else if(b.target.id == 'plusMinus'){
            // fix: avoid crash on empty/invalid string
            try{
                string = string.trim() == '' ? '0' : string
                string = String(-eval(string))
                inputBox.value = string;
            }catch(error){
                string = ''
                inputBox.value = "Error(Press AC)"
            }
        }
        else{
            // fix: if previously in error, start fresh
            if(inputBox.value == "Error(Press AC)"){
                string = ''
            }
            string += b.target.innerText
            inputBox.value = string
        }
    })
})
