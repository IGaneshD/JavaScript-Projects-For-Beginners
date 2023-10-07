let count = 0;

const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")

btns.forEach(btn => {
    btn.addEventListener("click", e=>{
        let elementId = e.currentTarget.id;

        if(elementId == 'decrease'){
            count--;
        }
        else if(elementId=='reset'){
            count = 0;
        }
        else{
            count++;
        }
        if(count > 0){
            value.style.color ="green";
        }
        if (count < 0){
            value.style.color ="red";
        }
        if (count == 0){
            value.style.color = "#222";
        }
        value.textContent = count;
    })
})