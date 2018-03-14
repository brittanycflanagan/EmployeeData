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

database.ref().on("child_added", function(snapshot) {
    console.log(snapshot.val().name);
    console.log(snapshot.val().role);
    console.log(snapshot.val().date);
    console.log(snapshot.val().rate);
    
    

    var name = snapshot.val().name;
    var role = snapshot.val().role;
    var date = snapshot.val().date;
    var rate = snapshot.val().rate;


    var tr = $("<tr>")
    var tdName = $("<td>").text(name);
    var tdRole = $("<td>").text(role);
    var tdDate = $("<td>").text(moment(date).format("MM/YYYY"));
    var tdWorked = $("<td>"); // (calculate months)
    var tdRate = $("<td>").text(rate);
    var tdBilled = $("<td>"); // (rate*months)
    tr.append(tdName).append(tdRole).append(tdDate).append(tdWorked).append(tdRate).append(tdBilled);
    $("#newRow").append(tr);

});


