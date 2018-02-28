/* global angular */

(function(){
    var app = angular.module('store', []);
    
    app.controller('RentalController', function($scope){
        this.products = cars;
        
        $scope.cars = cars;
        $scope.decreaseNumAvail = function(product) {
            console.log(--product.numAvailable);
            if(product.numAvailable <= 0 ){
                product.unavailable = !product.unavailable;
            }
        };
    
    });
    
    app.controller('PanelController', function(){
        this.tab = 1;
        
        this.selectTab = function(setTab){
            this.tab = setTab;
        };
        
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
        
    });
    
    var cars = [
    {
        year: 2018,
        make: 'Dodge',
        model: 'Challenger',
        type: 'Coupe',
        description: 'Everyone will tell you not to mess with an icon. But the Dodge Brand has never listened to the “everyones” of the world.\nSo they took this model of muscle—the Dodge Challenger—and, in true Dodge Brand fashion, made it even better.',
        price: 69.99,
        available: true,
        unavailable: false,
        unavailableText: 'UNAVAILABLE',
        numAvailable: 10,
        numBooked: 0,
        images: [
            {
             full: 'images/Audi-R8-V10-Plus-1-min.jpg',
            },
            ],
        specs: [
            {
            transmission: 'Automatic',
            drivetrain: 'Rear Wheel Drive 3.6L',
            mpg: '19 mpg City / 30 mpg Hwy'
            }
            ]
    },
    {
        year: 2018,
        make: 'Chevy',
        model: 'Camaro',
        type: 'Coupe',
        description: 'With a profile that harkens back to the 1967 original, the all-newsixth-generation Camaro looks pleasingly familiar, marking\na subtle styling evolution over the previous model. But don’t let that fool you. The new Camaro is a delight to drive, with dynamic\nprowess that can give even snooty European sportsters a run for their money. But as a daily driver, you might want to think twice\nbecause outward visibility is atrocious.',
        price: 79.99,
        available: true,
        unavailable: false,
        unavailableText: 'UNAVAILABLE',
        numAvailable: 7,
        numBooked: 0,
        images: [
            {
                full: 'images/2017-Audi-R8-V10-Plus-1-min.jpg',
            }
            ],
        specs: [
            {
            transmission: 'Manual',
            drivetrain: 'Rear Wheel Drive 2.0L',
            mpg: '20 mpg City / 30 mpg Hwy'
            }
            ]
    }
    ];
    
})();
    
// Car image
// Car type
// Car description
// Daily rental price: add a filter to print as currency
// Rent now button
// Add something else of your own choosing
    
//     var cars = {
//   type: [{

//          model: "Choose",
//          available: "",
//          booked: "",
//          price: "",
//          images: [{
//              full: 'images/cars/2018-Dodge-Challenger.png'
//             }],

//       },
//       {

//          model: "Economy",
//          available: 30,
//          booked: 0,
//          price: "$60",
//       },

//       {
//          model: "Midsize",
//          available: 20,
//          booked: 0,
//          price: "$80",
//       },

//       {
//          model: "Luxury",
//          available: 10,
//          booked: 0,
//          price: "$120",
//       }
//   ]
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
