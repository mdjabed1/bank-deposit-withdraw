document.getElementById('submit-button').addEventListener('click', function () {
    event.preventDefault();
    const depositInput = document.getElementById('deposit-inpute');
    const depositAmountText = depositInput.value;
    // get current deposit 
    const depositAmount = parseFloat(depositAmountText);
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousdepositTotal = parseFloat(depositTotalText);
    depositTotal.innerText = depositAmount + previousdepositTotal;
    // update balance //
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalaceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalaceTotal + depositAmount;
    // clear inpute field 
    depositInput.value = '';

});
// hendler withdraw button 
document.getElementById('withdraw-button').addEventListener('click', function () {
    console.log('width rdlas')
    event.preventDefault();
    const withdrawInput = document.getElementById('Withdraw-inpute');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText);
    // update withdraw total 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previouswithdrawTotalText = withdrawTotal.innerText;
    const previoustwithdrawTotal = parseFloat(previouswithdrawTotalText);
    withdrawTotal.innerText = previoustwithdrawTotal + withdrawAmount;
    // update balance after withdraw 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalaceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalaceTotal - withdrawAmount;
    // clear withdraw inpute field 
    withdrawInput.value = '';



})
