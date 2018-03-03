/* global $ angular */

(function(){
    var app = angular.module('rental', [ ]);
    
    app.controller('RentalController', function(){
        this.products = LAPcars;
    });
    
    app.controller('PanelController', function(){
        this.tab = 1;
        
        this.selectTab = function(setTab) {
            this.tab = setTab;
        };
        
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });

    
// Car image
// Car type
// Car description
// Daily rental price: add a filter to print as currency
// Rent now button
// Add something else of your own choosing
    
    var LAPcars = [{
        
//   type: [{

//          model: "Choose",
//          available: "",
//          booked: "",
//          price: "",

//       },

         make: 'Audi',
         model: "R8 V10 Plus",
         year: 2017,
         description: 'Sport, 2 door, all wheel drive, Power comes from a 610-horsepower, 5.2-liter V10 engine.',
         available: 10,
         images: [
             {
                 full: 'images/2017-Audi-R8-V10-Plus-1-min.png',
                //  thumb: 'images/2017-Audi-R8-V10-Plus-2-min.png',
             }
             ], 
         reviews: [
             {
                 stars: 5,
                 body: "I Adore this Sweet Ride",
                 author: "coolap69@aol.com",
                 
             },
             
               {
                 stars: 1,
                 body: "Bad Experience",
                 author: "coolap69@aol.com",
                 
             },
             ],
            
         booked: 0,
         price: 860,
         rentaCar: true,
         soldOut: true,
         
      },

      {
         make: 'Lamborghini',
         model: "Centenario",
         year: 2017,
         description: "Sport, 2 door, all wheel drive, Power comes from a 759-horsepower, 6.5-liter V12 engine.",
         available: 2,
          images: [
             {
                 full: 'images/Lamborghini-Centenario1.png',
                //  thumb: 'images/2017-Audi-R8-V10-Plus-2-min.png',
             }
             ],
         booked: 0,
         price: 2560,
         rentaCar: true,
         soldOut: true,

      },

      {
         make: "Bugatti",
         model: "Chiron",
         year: 2017,
         description: "Super sport, 2 door, all wheel drive, Power comes from a 1479-horsepower, 8.0-liter V10 engine.",
         available: 2,
          images: [
             {
                 full: 'images/bugatti-chiron-price-in-india-p.jpg',
                //  thumb: 'images/2017-Audi-R8-V10-Plus-2-min.png',
             }
             ],
         booked: 0,
         price: 4500,
         rentaCar: true,
         soldOut: false,

      }]
  
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