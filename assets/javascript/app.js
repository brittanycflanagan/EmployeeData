// var name = "";
// var role = "";
// var date = "";
// var rate = "";

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
var database = firebase.database();


$("#submit").on("click", function() {

    event.preventDefault();
    var name = $("#name").val().trim();
    var role = $("#role").val().trim();
    var date = $("#date").val().trim();
    var rate = parseInt($("#rate").val().trim());
    
    console.log(name);
    console.log(role);
    console.log(moment(date));
    console.log(rate);

    database.ref().push({
        name: name,
        role: role,
        date: date,
        rate: rate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });
    
   

    
    $("#name").empty();
    $("#role").empty();
    $("#date").empty();
    $("#rate").empty();
});   

function newRow(){
    // $("#newRow").empty()

database.ref().on("child_added", function(snapshot) {
    console.log(snapshot.val().name);
    console.log(snapshot.val().role);
    console.log(snapshot.val().date);
    console.log(snapshot.val().rate);
    
    

    var newName = snapshot.val().name;
    var newRole = snapshot.val().role;
    var newDate = snapshot.val().date;
    var newRate = snapshot.val().rate;

    var worked = (moment(newDate).diff(moment(), "months"))

    function billed(x,y){
        return x*y;
    }
    billed = billed(worked*newRate);

    console.log("worked: " + worked);
    console.log("billed: " + billed);


    var tr = $("<tr>")
    var tdName = $("<td>").text(newName);
    var tdRole = $("<td>").text(newRole);
    var tdDate = $("<td>").text(moment(newDate).format("MM/YYYY"));
    var tdWorked = $("<td>").text(worked);
    var tdRate = $("<td>").text(newRate);
    var tdBilled = $("<td>").text(billed);

    tr.append(tdName).append(tdRole).append(tdDate).append(tdWorked).append(tdRate).append(tdBilled);
    $("#newRow").append(tr);

});
};


