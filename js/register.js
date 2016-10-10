

$(function () {
    $('input[name="daterange"]').daterangepicker({

    })
});



/*
 * Add date ranges to items list
 */
document.getElementById('addDateToList').onclick = function () {
    var list = document.getElementById('availableDateList');
    var newLI = document.createElement('li');
    var newDate = document.getElementById("dateRangeInput").value;
    newLI.innerHTML = newDate;
    list.appendChild(newLI);
    setTimeout(function () {
        newLI.className = newLI.className + " show";
    }, 10);
}

