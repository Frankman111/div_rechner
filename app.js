const submitBtn = document.getElementById("submit");
const weightInput = document.getElementById("weight");
const calorieInput = document.getElementById("calorieIntake");
const proteinInput = document.getElementById("gramsProtein");
const fatInput = document.getElementById("gramsFat");
const resultsEl = document.querySelector(".results")

let weight = weightInput.value;
let calorie = calorieInput.value;
let protein = proteinInput.value;
let  fat = fatInput.value;


submitBtn.addEventListener("click", function(event){
    event.preventDefault(); //prevent from resetting the form
    calculateCarbs();

})

function calculateCarbs(){
    let proteinInGrams = protein * weight;
    let sumProteinCalorie = (protein * weight) * 4.2;
    let fatInGrams = fat * weight
    let sumFatCalorie = (fat * weight) * 9;
    let sumOpenCalories = calorie - (sumProteinCalorie + sumFatCalorie);
    let carbsInGrams = sumOpenCalories / 4.2;
    resultsEl.innerHTML = ` 
            <p>${proteinInGrams.toFixed(2)} Gramm Protein am Tag, dies entspricht ${sumProteinCalorie.toFixed(2)} kcal</p>
            <p>${fatInGrams.toFixed(2)} Gramm Fett pro Tag, dies entspricht ${sumFatCalorie.toFixed(2)} kcal</p>
           <p>Es sind jetzt noch ca. ${Math.round(sumOpenCalories)} kcal offen für Kohlenhydrate, das entspicht ca. ${Math.round(carbsInGrams)} Gramm KH</p>
    `
}

