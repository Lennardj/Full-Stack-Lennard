
// 1) select the input element and save it's value as a number

const lengthEl = document.getElementById("length-El");
const volumeEl = document.getElementById("volume-El");
const massEl = document.getElementById("mass-El");
const convertBtn = document.getElementById("convert-btn");

//2) create three function one for each of the conversions

convertBtn.addEventListener('click',calLength )

const lengthConversion = 3.281;
const volumeConversion = 0.264;
const massConversion = 2.204;

function returnString (inputEl, unitOne, unitTwo, type ) {

    console.log(`${inputEl} ${unitOne} = ${(inputEl * type).toFixed(2)} ${unitTwo} | ${inputEl} ${unitTwo} ${(inputEl/type).toFixed(2)} ${unitOne}`);
    return `${inputEl} ${unitOne} = ${(inputEl * type).toFixed(2)} ${unitTwo} | ${inputEl} ${unitTwo} ${(inputEl/type).toFixed(2)} ${unitOne}`;

}

function calLength (lengthValue){

    const inputEl = document.getElementById("input-El").value;
    // lengthEl.textContent = `${inputEl} meters = ${(inputEl*3.281).toFixed(2)} feet | ${inputEl} feet = ${(inputEl/3.281).toFixed(2)} meters`;
    // volumeEl.textContent = `${inputEl} liters = ${(inputEl*0.264).toFixed(2)} gallons | ${inputEl} gallons = ${(inputEl/0.264).toFixed(2)} liters`;
    // massEl.textContent = `${inputEl} kilos = ${(inputEl*2.204).toFixed(2)} pounds | ${inputEl} pounds = ${(inputEl/2.204).toFixed(2)} kilos`;
    
    lengthEl.textContent = returnString(inputEl, 'meters', 'feet', lengthConversion);
    volumeEl.textContent = returnString(inputEl, 'meters', 'feet', lengthConversion);
    massEl.textContent = returnString(inputEl, 'meters', 'feet', lengthConversion);
}

const checkbox = document.getElementById('checkbox')
checkbox.addEventListener('change', ()=>{

document.body.classList.toggle('light')
});