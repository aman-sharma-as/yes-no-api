const inputField = document.querySelector('input');
const buttonInput = document.querySelector('button');
const heading = document.querySelector('.heading');
const image = document.querySelector('img');

let inputString = "Party today?";

inputField.value = inputString;

async function getData(){
    let data = await fetch("https://yesno.wtf/api");
    let output = await data.json();
    return output;
}

async function printData(){
    let response = await getData();
    heading.innerText = response.answer;
    image.src = response.image;
    console.log(response);
}

printData();