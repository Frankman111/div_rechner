const formEl = document.getElementById("form"); // Zugriff auf Formular
const resetBtn = document.getElementById("reset"); // Zugriff auf den Zurücksetzen Knopf
const submitBtn = document.getElementById("submit"); // Zugriff auf den Berechnen Knopf
const weightInput = document.getElementById("weight"); // Eingabefeld Gewicht
const calorieInput = document.getElementById("calorieIntake"); // Eingabefeld Kalorien
const proteinInput = document.getElementById("gramsProtein"); // Eingabefeld Eiweiß
const fatInput = document.getElementById("gramsFat");// Eingabefeld Fett
const resultsEl = document.querySelector(".results"); // Container wo das Fromular und das Ergebnis angezeigt wird

const radioBtnMale = document.getElementById("male");
const radioBtnFemale = document.getElementById("female");



submitBtn.addEventListener("click", function(event){
    event.preventDefault(); //übliches Verhalten des Formulares ausschalten
    resultsEl.classList.remove("form-hide"); //bei einer erneuten Berechnung das Formularfeld wieder anzeigen lassen
    calculateCarbs(); // löst die Funktion für die Berechnungen aus
})


function calculateCarbs(){
    // Variablen innerhalb der Funktion um die Berechnung immer weider zu wiederholen
    let weight = weightInput.value;
    let calorie = calorieInput.value;
    let protein = proteinInput.value;
    let fat = fatInput.value;
    //einzelne Berechnungen
    let proteinInGrams = protein * weight;
    let sumProteinCalorie = (protein * weight) * 4.2;
    let fatInGrams = fat * weight
    let sumFatCalorie = (fat * weight) * 9;
    let sumOpenCalories = calorie - (sumProteinCalorie + sumFatCalorie);
    let carbsInGrams = sumOpenCalories / 4.2;
    // Anzeige der Berechnung anstatt des Formularfeldes
    resultsEl.innerHTML = ` 
            <p>${proteinInGrams.toFixed(2)} Gramm Protein am Tag, dies entspricht ${sumProteinCalorie.toFixed(2)} kcal</p>
            <p>${fatInGrams.toFixed(2)} Gramm Fett pro Tag, dies entspricht ${sumFatCalorie.toFixed(2)} kcal</p>
           <p>Es sind jetzt noch ca. ${Math.round(sumOpenCalories)} kcal offen für Kohlenhydrate, das entspicht ca. ${Math.round(carbsInGrams)} Gramm KH</p>
    `
    // Anzeige des Zurücksetzen Knopfes nach der Berechnung
    resetBtn.classList.remove("form-hide");
    // Formular verdekcen und Berechnung anzeigen lassen
    formEl.classList.add("form-hide");
}
// Zurücksetzen Knopf Funktionalität
resetBtn.addEventListener("click", resetFormular);

function simpleCalories(){

}

// Funktion für das erneute Anzeigen des Formulares nach einer Berechnung
function resetFormular(){
    resultsEl.classList.add("form-hide");
    formEl.classList.remove("form-hide");
    resetBtn.classList.add("form-hide");
    form.reset();
}
