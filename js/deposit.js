document.getElementById('btn-deposit').addEventListener('click', function () {
    // const depositFild = document.getElementById('deposit-field');
    // const depositAmount = depositFild.value;
    // const depositTotalElement = document.getElementById('deposit-total');
    // const previousDepositTotal = depositTotalElement.innerText;
    // const currentDepositTotal = parseFloat(previousDepositTotal) + parseFloat(depositAmount);
    // depositTotalElement.innerText = currentDepositTotal;
    // const balanceTotalElement = document.getElementById('balance-total');
    // const previousBalanceTotal = balanceTotalElement.innerText;
    // const currentBalanceTotal = parseFloat(previousBalanceTotal) + parseFloat(depositAmount);
    // balanceTotalElement.innerText = currentBalanceTotal;
    // depositFild.value = '';

    // get new deposit amount by id
    const newDepositAmount = getInputFieldById('deposit-field');
    // get previous deposit total by id
    const previousDepositTotal = getTextElementValueById('deposit-total');
    // calculate new deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    // set deposit total value
    setTextElementValueById('deposit-total', newDepositTotal);
    // get previous balance by using the function
    const previousBalanceTotal = getTextElementValueById('balance-total')
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
})