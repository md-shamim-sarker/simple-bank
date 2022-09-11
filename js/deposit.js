document.getElementById('deposit-button').addEventListener('click', () => {

    const depositInput = document.getElementById('deposit-input');
    const depositValue = Number(depositInput.value);

    const previousDeposit = document.getElementById('deposit');
    const previousDepositValue = Number(previousDeposit.innerText);

    const previousBalance = document.getElementById('balance');
    const previousBalanceValue = Number(previousBalance.innerText);

    const presentDeposit = previousDepositValue + depositValue;
    const presentBalance = previousBalanceValue + depositValue;

    if(depositValue <= 50) {
        alert('Please deposit more than $50');
        depositInput.value = '';
        return;
    }

    // data send to localstorage
    document.getElementById('deposit').innerText = presentDeposit;
    const previousWithdraw = document.getElementById('withdraw').innerText;
    document.getElementById('balance').innerText = presentBalance;
    updateLocalStorage(presentDeposit, previousWithdraw, presentBalance);

    depositInput.value = '';
});