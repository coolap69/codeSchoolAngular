/* global $ angular */

(function(){
    var app = angular.module('rental', [ ]);
    
    app.controller('RentalController', function(){
        this.product = LAPcars;
    });

    
// Car image
// Car type
// Car description
// Daily rental price: add a filter to print as currency
// Rent now button
// Add something else of your own choosing
    
    var LAPcars = [
        {
//   type: [{

    //      model: "Choose",
    //      available: "",
    //      booked: "",
    //      price: "",

    //   },
      

         make: 'Audi',
         model: "R8 V10 Plus",
         year: 2017,
         description: 'Sport, 2 door, all wheel drive, Power comes from a 610-horsepower, 5.2-liter V10 engine.',
         available: 10,
         booked: 0,
         price: 560,
         canPurchase: true,
      },

      {
         make: 'dodge',
         model: "R8 V10 Plus",
         year: 2017,
         description: "Sport, 2 door, all wheel drive, Power comes from a 610-horsepower, 5.2-liter V10 engine.",
         available: 10,
         booked: 0,
         price: 560,
         canPurchase: false,
      },

      {
         make: "Audi",
         model: "R8 V10 Plus",
         year: 2017,
         description: "Sport, 2 door, all wheel drive, Power comes from a 610-horsepower, 5.2-liter V10 engine.",
         available: 10,
         booked: 0,
         price: 560,
         canPurchase: true,
      },
  ];
})();
// };

// for (var i = 0; i < cars.type.length; i++) {
//   var options = document.createElement("OPTION");
//   options.innerHTML = cars.type[i].model;
//   document.getElementById("optionTags").appendChild(options);

//   options.setAttribute("value", i);
//   document.getElementById("available").innerHTML = cars.type[0].available;
//   document.getElementById("price").innerHTML = cars.type[0].price;
// }


// document.getElementById("optionTags").onchange = function() {
//   var val = document.getElementById("optionTags").value;
//   val = parseInt(val);
//   document.getElementById("available").innerHTML = cars.type[val].available;
//   document.getElementById("price").innerHTML = cars.type[val].price;

// };

// // function rent() {
// //    var renterName = document.getElementById("fname").value;
// //    var typeCar = document.getElementById("optionTags") cars.type[].;

// // }

// document.getElementById("rentCar").onsubmit = function(event) {
//   // console.log ("submit")
//   event.preventDefault();

// };