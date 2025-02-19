function bmi(){
    const h= document.getElementById("height").value;
    const w= document.getElementById("weight").value;
    const height=parseFloat(h);
    const weight=parseFloat(w);
    console.log(h);
    console.log(w);

    const BMI = (weight*10000)/(height*height);
    
    let category=""; 
    if (BMI< 18.5){
        category ="Underweight";
        }
        else if (BMI >= 18.5 && BMI <25){
            category="Normal";
        }
        else if (BMI >= 25 && BMI <30){
            category="Over Weight";
        }
        else if (BMI >= 30 && BMI <35){
            category="Obese";
        }
        else{
            category="Extremely Obese";
        }
    document.getElementById("res").innerHTML= `<h3>Your BMI: ${BMI.toFixed(2)}</h3><p>Category: ${category}</p>`;
    document.getElementById('height').value="";
    document.getElementById('weight').value="";


}



