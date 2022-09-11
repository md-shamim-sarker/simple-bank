document.getElementById('withdraw-button').addEventListener('click', () => {

    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawValue = Number(withdrawInput.value);

    const previousWithdraw = document.getElementById('withdraw');
    const previousWithdrawValue = Number(previousWithdraw.innerText);

    const previousBalance = document.getElementById('balance');
    const previousBalanceValue = Number(previousBalance.innerText);

    const presentWithdraw = previousWithdrawValue + withdrawValue;
    const presentBalance = previousBalanceValue - withdrawValue;

    if(withdrawValue <= 50) {
        alert('Please withdraw more than $50');
        withdrawInput.value = '';
        return;
    } else if(presentBalance < 0) {
        alert('You have insufficient balance.');
        withdrawInput.value = '';
        return;
    }

    // data send to localstorage
    const previousDeposit = document.getElementById('deposit').innerText;
    document.getElementById('withdraw').innerText = presentWithdraw;
    document.getElementById('balance').innerText = presentBalance;
    updateLocalStorage(previousDeposit, presentWithdraw, presentBalance);

    withdrawInput.value = '';
});