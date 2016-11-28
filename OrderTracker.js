$(document).ready(function(){

$('.addItem').click(function(){

      //add new lines for additional items on additem button
    $('<input></input').addClass("bottomSpace items").appendTo('.item');
    $('<input></input').addClass("bottomSpace vendorCompany").appendTo('.vendor');
      $('<input></input').addClass("bottomSpace catalogue").appendTo('.catNo');
    $('<input></input').addClass("bottomSpace quantity").appendTo('.qty');
    $('<input></input').addClass("bottomSpace priceEa").appendTo('.price');

});


$('.cancel').click(function(){
  //clears contents of all input fields on click.
  $('input').val("");
})
//arrays to hold data of the same category but different line entries
var items=[];
var vendors=[];
var catologues=[];
var quants = [];
var prices =[];
$('.Submit').click(function(){


//clicking get the data into the holding arrays.
$('.items').each(function(){
    items.push($(this).val());
});
$('.vendorCompany').each(function(){
    vendors.push($(this).val());

});

$('.catologue').each(function(){
    catologues.push($(this).val());

});


$('.quantity').each(function(){
    quants.push($(this).val());

});
$('.priceEa').each(function(){
    prices.push($(this).val());

});
console.log(items);
console.log(vendors);
console.log(quants);
console.log(prices);

//keeps track of how long the holding arrays are.Essentially, how many line items there are.
var count = items.length;

//sets user name and contact input to variables. This remain the same for each submission
var name = $('.name').val();
var email = $('.email').val();
/*var item = $('.items').val();
var vendor = $('.vendorCompany').val();
var catologueNo = $('.catologue').val();
var quantity = $('.quantity').val();
var price = $('.priceEa').val();*/




for(var i=0;i<count; i++){
  /*uses those input variables into the function to create the object
    this is making a new object for each item line, tied to the same user*/
  newObject(name,email,items[i],vendors[i],catologues[i],quants[i],prices[i]);


}

console.log(orders);
//clears the inputs after submission.
$('input').val("");
});



//array to hold each line item. Each item will be an object.

var orders=[];

function newObject(name,email,items,vendor,catNo,quant,price){
  //object created for each line.(only does the first line right now)
  var orderLine = {
    "name":name,
    "email":email,
    "items":items,
    "vendor":vendor,
    "catNo":catNo,
    "quant":quant,
    "price":price

  }
    //adds object to orders array
     orders.push(orderLine);

}






});
