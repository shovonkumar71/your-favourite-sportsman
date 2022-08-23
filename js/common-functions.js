// common function for input field value .
function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const inputFieldValueString = inputField.value;
    const inputFieldAmount = parseFloat(inputFieldValueString);
    return inputFieldAmount;
}



//  common function for value from  from Text element
function getTextElementValueById(elementId) {
    const textElement = document.getElementById(elementId);
    const textElementValueString = textElement.value;
    const textElementValue = parseFloat(textElementValueString);
    return textElementValue;
}

// Setting new value in text element

function setTextElementValueById(elementId, newValue) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}




// 4.  ------- Calculating all player expense together ---------- //

function playerTotalExpense() {
    // per player expense from input  field
    const perPlayerExpense = getInputFieldValueById("per-player-expense-field");

    // Total player number from list
    const selectedPlayers = document.getElementById("selected-players");
    const totalSelectedPlayers = selectedPlayers.children;
    const allSelectedPlayers = totalSelectedPlayers.length;

    // player expense calculation
    const totalPlayerExpense = perPlayerExpense * allSelectedPlayers;
    return totalPlayerExpense;
}
