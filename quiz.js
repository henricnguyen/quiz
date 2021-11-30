function myBtn(){
    let element = document.body;
    element.classList.toggle("dark-mode");
}

function check(){
    let score=0;
    let q1=document.quiz.question1.value;
    let q2=document.quiz.question2.value;
    let q3=document.quiz.question3.value;
    let q4=document.quiz.question4.value;
    let q5=document.quiz.question5.value;
    let q6=document.quiz.question6.value;
    
    
    if (q1=="False") {score++}
    if (q2=="True") {score++}
    if (q3=="False") {score++}
    if (q4=="apple") {score++}
    if (q5=="california") {score++}
    if (q6=="barack obama") {score++}
    
        let checkboxes = document.getElementsByName("question7");
        let checkboxChecked = []; 
        for (let i = 0; i < checkboxes.length; i++) {
            const element = checkboxes[i];
            if (element.checked === true){
                if (element.value === "correct"){
                    score++;
                }
                else if (element.value === "wrong"){   
                score--;
            }
            }
        } 
    }

    

