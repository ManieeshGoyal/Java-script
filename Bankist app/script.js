'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

console.log(account1, account2);
const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// countMovements function shows withdrawls and deposits

const countMovements = movements => {
  movements.forEach((mov, key) => {
    const type = mov < 0 ? 'withdrawal' : 'deposit';
    const movementRow = `
 <div class="movements__row">
  <div class="movements__type movements__type--${type}">${
      key + 1
    } ${type} </div>
  <div class="movements__value">${mov}€</div>  
 </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', movementRow);
  });
};

// createUserName function create username in accouts object

const createUserName = accs => {
  accs.forEach(account => {
    account.userName = account.owner
      .toLowerCase()
      .split(' ')
      .map(value => value[0])
      .join('');
  });
};

// currentBalance shows the current value of user account

const currentBalance = transaction => {
  accounts.map(
    acc =>
      (acc.currentBalance = transaction.reduce((acc, value) => acc + value, 0))
  );
  labelBalance.textContent = currentAccount.currentBalance + '€';
};

//calcDisplay shows in out

const calcDisplay = account => {
  const inComes = account.movements
    .filter(value => value > 0)
    .reduce((acc, currentValue) => acc + currentValue, 0);

  const outComes = account.movements
    .filter(value => value < 0)
    .reduce((acc, currentValue) => acc - currentValue, 0);

  const interest = account.movements
    .filter(val => val > 0)
    .map(deposit => (deposit * account.interestRate) / 100)
    .filter((int, i, arr) => int >= 1)
    .reduce((acc, int) => acc + int, 0);

  labelSumIn.textContent = `${inComes}€`;
  labelSumOut.textContent = `${Math.abs(outComes)}€`;
  labelSumInterest.textContent = `${interest}€`;
};

// logIn function

let currentAccount;

btnLogin.addEventListener('click', e => {
  // prevent for submitting
  e.preventDefault();

  currentAccount = accounts.find(
    ac =>
      ac.userName === inputLoginUsername.value &&
      ac.pin === Number(inputLoginPin.value)
  );

  if (currentAccount?.userName && currentAccount?.pin) {
    inputLoginUsername.value = inputLoginPin.value = '';
    containerApp.style.opacity = '100';

    countMovements(currentAccount.movements);
    currentBalance(currentAccount.movements);
    calcDisplay(currentAccount);
  }
});

// updateUi function upates the details

const updateUi = acc => {
  countMovements(acc.movements);
  currentBalance(acc.movements);
  calcDisplay(acc);
};

// Transfer Money Function

btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.userName === inputTransferTo.value
  );
  if (
    amount > 0 &&
    currentAccount.currentBalance >= amount &&
    receiverAcc?.userName !== currentAccount.userName
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUi(currentAccount);
  }
});

// closeAcc function
btnClose.addEventListener('click', e => {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.userName &&
    Number(inputClosePin.value) === currentAccount.userName
  ) {
  }
});
// Invoke functions
createUserName(accounts);
