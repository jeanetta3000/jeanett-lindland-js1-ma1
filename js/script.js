
//question1

var cat = {
    complain: function() {
        console.log("meow");
    }
}

cat.complain();




//question2

const heading = document.querySelector("h3");

heading.innerHTML = `
<h3>Updated heading</h3>`;



//question3

heading.style.fontSize= "2em";




//question4

heading.className = "subheading";



//question5


const paragraphs = document.querySelectorAll("p");

console.log(paragraphs)

for (let i = 0; i < paragraphs.length; i++){

    paragraphs[i].style.color = "red";
}


//question6


var resultsContainer = document.querySelector(".results")

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";



//question7


const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


function catNames(list) {


    for(let i = 0; i < list.length; i++){
        console.log(cats[i].name)

    }
    
}
  
 catNames(cats);


//question8

const catss = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
       
    },
    {
        name: "Blurt",
        age: 21
    }
];


function createCats (cats) {

    console.log(cats)

    for (let i = 0; i < catss.length; i++) {
        console.log(catss[i])
    }

}

createCats (catss)

const container = document.querySelector(".cat-container")

console.log(container)

let html = "";
let catAge = "Unknown";

if (catss.age !== undefined){
    catAge = catss.age;
}



for (let i = 0; i < catss.length; i++){

    html = html + "<h5>" + catss[i].name + "</h5>";
    html = html + "<p>" + catss[i].age + "</p>";

    console.log(html)
    
}

container.innerHTML = html;