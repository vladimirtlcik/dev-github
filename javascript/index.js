// conditions

var myNumber1 = 1;
var myNumber2 = 2;



if(myNumber1 < myNumber2) {
  console.log("Yea, I am smaller")
}else{
  console.log("Oh, no i am not smaller")
}

if(myNumber1 === myNumber2) {
  console.log("they are equal")
}else if(myNumber1 < myNumber2){
  console.log("is smaller")
}else if(myNumber1 -5 > myNumber2){
  console.log("number -5 is not smaller")
}


//loops

for(var i = 0; i < 3; i++) {
  
  if(i % 2 == 0) {
   console.log("i wont cheat on exam")
  
  }
}

var myFriends = ["Bill", "Joe", "Francis"]

for (var i = 0; i < myFriends.length; i++){
  console.log("Hi, " + myFriends[i])
}

for (var i = 0; i < myFriends.length; i++){
  // two ways second with function
  console.log("Hi, " + myFriends[i])

  greet(myFriends[i])
}

myFriends.forEach(function (element){
  console.log("Hello, " + element)
}
)

// function

function greet(name) {
  console.log("Greet, " + name)
}

function isEven(number){
  var even = number % 2;
  return even;
  // this returns boolean value
}



for(var i = 0; i < 3; i++) {
  if(isEven(i)) {
   console.log(i + 1 + ". I wont cheat")
   
  }
}


//jQuery

// hide images

//$("#plant-a-tree").hide();
//$("#make-friends").fadeOut(500);
//$("#make-friends").fadeOut(500).delay(1000).fadeIn(500);


$( "#close-button" ).click(function() {
  $( "#newsletter" ).hide(500);
});

// po kliknuti na button spusti tieto funkcie variables ... loots...
$( "#open-button" ).click(function() {
  $( "#newsletter" ).slideToggle(500);
});

$( ".card" ).hover(function() {
  $( ".card" ).css({ "width": "200px" });

});

var cards = ["#plant-a-tree", "#make-friends", "#money-bag"]

for (var i = 0; i < cards.length; ++i) {

//  $(cards[i]).hover(function() {
//    //$(this).css({ "width": "200px", "font-size:" "150%" }); iba to nad cim je
//    $(this).css({ "width": "300px", "font-size": "150%" });
//  })}

  $(cards[i]).mouseenter(function() { 
    $(this).css({ "width": "150%", "font-size": "150%" });
  })

  $(cards[i]).mouseleave(function() {
     $(this).css({ "width": "100%", "font-size": "100%" });
  })

}