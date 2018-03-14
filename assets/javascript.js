
$("#submit").on("click", function() {
    var name = $("#name").val().trim();
    var role = $("#role").val().trim();
    var date = $("#date").val().trim();
    var rate = $("#rate").val().trim();
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
        
});
