var modal = document.getElementById("model");

var btn = document.getElementById("model1");
var butn = document.getElementById("model2");
var buttn = document.getElementById("model3");

var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
butn.onclick = function() {
    modal.style.display = "block";
}
buttn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}

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


                        