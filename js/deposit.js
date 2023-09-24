document.getElementById('btn-deposit').addEventListener('click', function () {
    // console.log('c');
    const depositFild = document.getElementById('deposit-field');
    const depositAmount = depositFild.value;

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = depositTotalElement.innerText;
    const currentDepositTotal = parseFloat(previousDepositTotal) + parseFloat(depositAmount);
    depositTotalElement.innerText = currentDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = balanceTotalElement.innerText;
    const currentBalanceTotal = parseFloat(previousBalanceTotal) + parseFloat(depositAmount);
    balanceTotalElement.innerText = currentBalanceTotal;

    depositFild.value = '';
})