document.getElementById('btn-withdraw').addEventListener('click', function () {
    // const withdrawField = document.getElementById('withdraw-field');
    // const newWithDrawAmountString = withdrawField.value;
    // const newWithdrawAmount = parseFloat(newWithDrawAmountString);
    // withdrawField.value = '';
    // if (isNaN(newWithdrawAmount) || newWithdrawAmount < 0) {
    //     alert('Please provide a valid number');
    //     return;
    // }
    // const balanceTotalElement = document.getElementById('balance-total');
    // const previousBalanceTotalString = balanceTotalElement.innerText;
    // const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    // if (newWithdrawAmount > previousBalanceTotal) {
    //     alert('Insufficient Balance');
    //     return;
    // }
    // const withdrawTotalElement = document.getElementById('withdraw-total');
    // const previousWithdrawTotalString = withdrawTotalElement.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    // const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    // withdrawTotalElement.innerText = currentWithdrawTotal;
    // const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    // balanceTotalElement.innerText = newBalanceTotal;


    const newWithdrawAmount = getInputFieldById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    if (isNaN(newWithdrawAmount) || newWithdrawAmount < 0) {
        alert('Please provide a valid number');
        return;
    }
    const previousBalanceTotal = getTextElementValueById('balance-total');
    if (newWithdrawAmount > previousBalanceTotal) {
        alert('Insufficient Balance');
        return;
    }
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})