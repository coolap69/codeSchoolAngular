/* global $ * angular */ 

(function(){
    var app = angular.module('rental', [ ]);
    
    app.controller('RentalController', function(){
        this.products = LAPcars;
    });
    
    //   app.controller('RentController', function(){
    //   this.renta = {};
       
    //   this.addReview = function(product) {
    //       product.rentaCar.push(this.renta);
    //       this.renta = {};
    //   };
    // });
    
    
    app.controller('PanelController', function(){
        this.tab = 1;
        
        this.selectTab = function(setTab) {
            this.tab = setTab;
        };
        
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });
    
    app.controller('ReviewController', function(){
       this.review = {};
       
       this.addReview = function(product) {
           product.reviews.push(this.review);
           this.review = {};
       };
    });
    
    
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
         available: 5,
         images: [
             {
                 full: 'images/2017-Audi-R8-V10-Plus-1-min.png',
                //  thumb: 'images/2017-Audi-R8-V10-Plus-2-min.png',
             }
             ], 
         reviews: [
             {
                 stars: "*****",
                 body: "I Adore this Sweet Ride",
                 author: "coolap69@aol.com",
                 
             },
             
               {
                 stars: "*",
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
                 full: 'images/Lamborghini-Centenario1small.png',
                //  thumb: 'images/2017-Audi-R8-V10-Plus-2-min.png',
             }
             ],
         reviews: [
             {
                 stars: "****",
                 body: "Sweet Ride",
                 author: "coolap69@aol.com",
                 
             },
             
               {
                 stars: "***",
                 body: "Alright",
                 author: "coolap69@aol.com",
                 
             },
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
         reviews: [
             {
                 stars: "**",
                 body: "OK",
                 author: "coolap69@aol.com",
                 
             },
             ],
         booked: 0,
         price: 4500,
         rentaCar: true,
         soldOut: false,

      }];
      
})();
