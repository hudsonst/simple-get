'use strict';

function getDogImage(dogNum) {
    const url=`https://dog.ceo/api/breeds/image/random/${dogNum}`
    fetch(url)
      .then(response => response.json())
      .then(responseJson => results(responseJson))
     .catch(error => alert("Sorry, not working!"));
  };

function results(dogs) {
 const dogArray = dogs.message;
  dogArray.forEach(function (dog) {
    const dogdiv = `<section class="result">
    <p>
    <img src="${dog}" alt="A random dog"/>
    </p>
    </section>`;
    const main = document.querySelector('.main');
    main.innerHTML += dogdiv;
  })
};


function submit_form() {
    event.preventDefault();
    const dogNum = document.getElementById("number_dogs").value;
    getDogImage(dogNum);
};