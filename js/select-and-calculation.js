// Funtion For adding the selected players in the list

function addToFavourites(player) {
    // Getting Player Name From Html File 
    const playerName = player.parentNode.children[0].innerText;

    // Getting the Html OL tag for storing player Names
    const playerNameList = document.getElementById("selected-players");

    // Getting the length of Selected players in OL tag
    const selectedPlayersNumber = playerNameList.children.length;

    // Condition for selecting only five players
    if (selectedPlayersNumber > 4) {
        alert("You Can't Select More Than 5 Players");
        return;
    } else {
        const li = document.createElement("li");
        li.innerText = playerName;
        playerNameList.appendChild(li);

        // Displaying Total Number Of selected players On Top
        setTextElementValueById(
            "total-selected-display",
            selectedPlayersNumber + 1
        );

        // Disabling buttons after click
        player.disabled = true;
    }
}



// ------------   Player Expense

// Adding event listener to the  calculate button 
document.getElementById("calculate-btn").addEventListener("click", function () {
    const perPlayerExpense = getInputFieldValueById("per-player-expense-field");

    if (isNaN(perPlayerExpense)) {
        alert("Please Enter A Valid Amount");
        return;
    } else if (perPlayerExpense < 0) {
        alert("Please Enter A Valid Amount");
        return;
    }
    // setting All player expense to display 
    setTextElementValueById("player-total-expense", playerTotalExpense());
});



//    -----------  Total Expense

//  Adding event listener to the Calculate total button

document.getElementById("calculate-total-btn").addEventListener("click", function () {
    // Getting value from Manager Expense Field 
    const managerExpense = getInputFieldValueById("manager-expense-field");

    // Getting value from coach expense field
    const coachExpense = getInputFieldValueById("coach-expense-field");

    // Validation and error message
    if (isNaN(managerExpense) || isNaN(coachExpense)) {
        alert("Please Enter A Valid Amount");
        return;
    } else if (managerExpense < 0 || coachExpense < 0) {
        alert("Please Enter A Valid Amount");
        return;
    }

    // Total expense calculation
    const totalExpense = playerTotalExpense() + managerExpense + coachExpense;

    // Setting Final total expense amount to display
    setTextElementValueById("all-total-expense", totalExpense);

});
