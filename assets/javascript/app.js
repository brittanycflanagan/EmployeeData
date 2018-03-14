var name = "";
var role = "";
var date = "";
var rate = "";

//$("#submit").on("click", function() 
function putOnPage() {
    event.preventDefault();
    name = $("#name").val().trim();
    role = $("#role").val().trim();
    date = parseInt($("#date").val().trim());
    rate = parseInt($("#rate").val().trim());
    console.log(name);
    console.log(role);
    console.log(date);
    console.log(rate);
    var tr = $("<tr>")
    var tdName = $("<td>").text(name);
    var tdRole = $("<td>").text(role);
    var tdDate = $("<td>").text(date);
    var tdWorked = $("<td>");
    var tdRate = $("<td>").text(rate);
    var tdBilled = $("<td>");
    tr.append(tdName).append(tdRole).append(tdDate).append(tdWorked).append(tdRate).append(tdBilled);
    $("#newRow").append(tr);

    $("#name").empty();
    $("#role").empty();
    $("#date").empty();
    $("#rate").empty();
        
};






// Initialize Firebase
var config = {
    apiKey: "AIzaSyCcPVCxkJ8y2UTq7WEAlM36UXBb5uFZtac",
    authDomain: "employee-data-30fb2.firebaseapp.com",
    databaseURL: "https://employee-data-30fb2.firebaseio.com",
    projectId: "employee-data-30fb2",
    storageBucket: "employee-data-30fb2.appspot.com",
    messagingSenderId: "841144224128"
  };
  firebase.initializeApp(config);