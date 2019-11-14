// Get the modal
var modal = document.getElementById("model");

// Get the button that opens the modal
var btn = document.getElementById("model1");
var butn = document.getElementById("model2");
var buttn = document.getElementById("model3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
butn.onclick = function() {
    modal.style.display = "block";
}
buttn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == model) {
    modal.style.display = "none";
  }
}
$('#reserve').click(function() {
    alert("Willing to come to Ngong");
    var blanks = document.getElementById("spot").value;
    alert("We will be waiting for you" +" "+blanks);
});
//     var a = prompt("enter ur location");
//     alert("your order will be delivered to" + " " + a);
//   });

