$(function() {
    $('.jcarousel').jcarousel({
        wrap: 'circular'
    });
    
    $('.jcarousel').jcarouselAutoscroll({
        target: '+=1',
        autostart: true,
    });
});


// Array of phone models sold by the company 
let phones = ["2018", "2019", "2020", "2021", "2022"];
 
// Units sold in the previous quarter 
let sales = [130,167,33,95,192];

// Variable to calculate total sales 
let totalsales = 0;

// Use the foreach() method to sum the sales for each phone model and add it to the totalsales variable 
sales.forEach(addtoTotal);

// For loop to generate bar chart of phone sales
for(let i=0;i<phones.length;i++){ 

    let barChart = ""; // variable to store HTML code for table celss used to create bar chart

    // Calculate the percent of total sales for a particular phone model
    let barPercent = 100*sales[i]/totalsales;

    let cellTag; // Variable that will define the class of td elements used in creating the bar chart

    // Determine the table cell based on the value of the phone model
    switch(phones[i]){
        case "2018": 
        cellTag = "<td class='group1'>"; 
        break;
        case "2019": 
        cellTag = "<td class='group2'>"; 
        break;
        case "2020": 
        cellTag = "<td class='group3'>"; 
        break;
        case "2021": 
        cellTag = "<td class='group4'>"; 
        break;
        case "2022": 
        cellTag = "<td class='group5'>"; 
        break;
    }

    // Table cell containing information on phone and total sales (formatted using thousands)
    barChart += "<tr><th>" + phones[i] + " ("+formatNumber(sales[i]) + ")</th>";

    // For loop to create a table cell, 1 for each percentage value in the barPercent variable
    for(let j=0;j<=barPercent;j++){
        barChart += cellTag + "</td>";
    }

    barChart += "</tr>";

    // Insert the bChart HTML code into first tbody element in the web document
    document.getElementsByTagName("tbody")[0].insertAdjacentHTML("beforeEnd",barChart);
}

// Callback function that adds the value of each array element to the totalSales variable
function addtoTotal(arrValue){
    totalsales += arrValue;
}

// Function that takes a number value and returns it as a text string with a thousands separator
function formatNumber(value){
    return value.toLocaleString();
}

let currentTime = document.getElementById("currentTime");
let daysLeftBox = document.getElementById("days");
let hrsLeftBox = document.getElementById("hours");
let minsLeftBox = document.getElementById("minutes");
let secsLeftBox = document.getElementById("seconds");

//setInterval(function(){console.log("Hello")}, 1000)

let now = new Date();

currentTime.textContent = now.toLocaleString();

let newYear = new Date("June 21, 2023");
let nextYear = now.getFullYear();
newYear.setFullYear(nextYear);

let timeLeft = newYear - now;
let daysLeft = timeLeft / (1000 * 60 * 60 * 24);
let hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
let minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
let secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;

daysLeftBox.textContent = Math.floor(daysLeft);
hrsLeftBox.textContent = Math.floor(hrsLeft);
minsLeftBox.textContent = Math.floor(minsLeft);
secsLeftBox.textContent = Math.floor(secsLeft);

function countdown(){
    let now = new Date();

    currentTime.textContent = now.toLocaleString();

    let newYear = new Date("June 21, 2023");
    let nextYear = now.getFullYear();
    newYear.setFullYear(nextYear);
  
    let timeLeft = newYear - now;
    let daysLeft = timeLeft / (1000 * 60 * 60 * 24);
    let hrsLeft = (daysLeft - Math.floor(daysLeft)) * 24;
    let minsLeft = (hrsLeft - Math.floor(hrsLeft)) * 60;
    let secsLeft = (minsLeft - Math.floor(minsLeft)) * 60;
  
    daysLeftBox.textContent = Math.floor(daysLeft);
    hrsLeftBox.textContent = Math.floor(hrsLeft);
    minsLeftBox.textContent = Math.floor(minsLeft);
    secsLeftBox.textContent = Math.floor(secsLeft);
    console.log("Hello");
}

setInterval(countdown, 1000);


let homeBTN = document.querySelector("#HomeBTN");
let aboutBTN = document.querySelector("#AboutBTN");
let eventsBTN = document.querySelector("#EventsBTN");
let projectsBTN = document.querySelector("#ProjectsBTN");
let reviewsBTN = document.querySelector("#ReviewsBTN");
let contactBTN = document.querySelector("#ContactBTN");

let Home = document.querySelector("#Home");
let About = document.querySelector("#About");
let Events = document.querySelector("#Events");
let Projects = document.querySelector("#Projects");
let Review = document.querySelector("#review");
let Contact = document.querySelector("#contact");

let buttons = document.querySelectorAll(".Header")


homeBTN.addEventListener('click', function(){
    for(let button of buttons){
        button.classList.add("Hide");
    }
    Home.classList.remove("Hide");
})

aboutBTN.addEventListener('click', function(){
    for(let button of buttons){
        button.classList.add("Hide");
    }
    About.classList.remove("Hide");
})

eventsBTN.addEventListener('click', function(){
    for(let button of buttons){
        button.classList.add("Hide");
    }
    Events.classList.remove("Hide");
})

projectsBTN.addEventListener('click', function(){
    for(let button of buttons){
        button.classList.add("Hide");
    }
    Projects.classList.remove("Hide");
})

reviewsBTN.addEventListener('click', function(){
    for(let button of buttons){
        button.classList.add("Hide");
    }
    Review.classList.remove("Hide");
})

contactBTN.addEventListener('click', function(){
    for(let button of buttons){
        button.classList.add("Hide");
    }
    Contact.classList.remove("Hide");
})