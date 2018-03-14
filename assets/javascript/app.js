
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
 



//Submit Button
$("#submit").on("click", function() {
    event.preventDefault();
    var name = $("#name").val().trim();
    var role = $("#role").val().trim();
    var date = parseInt($("#date").val().trim());
    var rate = parseInt($("#rate").val().trim());
   
    database.ref().push({
        name: name,
        role: role,
        date: date,
        rate: rate,
        dateAdded: firebase.database.ServerValue.TIMESTAMP
      });

    console.log(name);
    console.log(role);
    console.log(date);
    console.log(rate);
    var tr = $("<tr>")
    var tdName = $("<td>").text(name);
    var tdRole = $("<td>").text(role);
    var tdDate = $("<td>").text(date);
    var tdWorked = $("<td>"); // (calculate months)
    var tdRate = $("<td>").text(rate);
    var tdBilled = $("<td>"); // (rate*months)
    tr.append(tdName).append(tdRole).append(tdDate).append(tdWorked).append(tdRate).append(tdBilled);
    $("#newRow").append(tr);

    
        
});






