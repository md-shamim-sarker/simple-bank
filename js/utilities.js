const localStorageFunc = () => {
    if(!localStorage.bankData) {
        const dataObj = {
            deposit: 0,
            withdraw: 0,
            balance: 0
        };
        const dataStr = JSON.stringify(dataObj);
        localStorage.setItem('bankData', dataStr);
    } else {
        const dataStr = localStorage.getItem('bankData');
        const dataObj = JSON.parse(dataStr);
        const {deposit, withdraw, balance} = dataObj;
        document.getElementById('deposit').innerText = deposit;
        document.getElementById('withdraw').innerText = withdraw;
        document.getElementById('balance').innerText = balance;
    }
};
const dataObj = localStorageFunc();

const updateLocalStorage = (deposit, withdraw, balance) => {
    const dataObj = {
        deposit: deposit,
        withdraw: withdraw,
        balance: balance
    };
    const dataStr = JSON.stringify(dataObj);
    localStorage.setItem('bankData', dataStr);
};

document.getElementById('clear-btn').addEventListener('click', () => {
    const confirmation = confirm('Alert! You are going to clear all data.');
    if(confirmation) {
        localStorage.removeItem('bankData');
        location.reload();
    }
});