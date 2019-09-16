/* Add all the required libraries*/
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config');

/* Connect to your database using mongoose - remember to keep your key secret*/
//see https://mongoosejs.com/docs/connections.html
//See https://docs.atlas.mongodb.com/driver-connection/
mongoose.connect(config.db.uri, {useNewUrlParser: true}); 
/* Connect to your database using mongoose - remember to keep your key secret*/

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   // .findOne = finds one document. conditions are cast to respective schematypes before command is sent 
   Listing.findOne({name:'Library West'}, function (err,data){
	   console.log(data);
   });
	    
   
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   // .findOneAndRemove = finds a matching document, remvoes it, passing the found document to the callback 
   Listing.findOneAndRemove({code:'CABL'}, function(err,data){
	   console.log('CABL removed'); 
   }); 
   
};
var updatePhelpsLab = function() {
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
   // .findOneAndUpdaye = finds a matching document, updates it according to the update arg, passing any options, and returns found document to callback 
   Listing.findOneAndUpdate(
   {name: 'Phelps Laboratory'},
   {address: '1953 Museum Rd, Gainesville, FL 32603'},
   function(err, data){
	   console.log('Phelps Lab address updated');
   });

};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
   // .find = finds documents 
   Listing.find({}, function(err, data){
	   console.log(data);
   }); 
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
