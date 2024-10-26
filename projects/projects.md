# Projects realted dom

## project link
[click hre](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

### solution code

#### + project 1
```javascript
const btn = document.querySelectorAll('.button');
const body = document.querySelector('body');
btn.forEach((bt)=>{
  bt.addEventListener('click' , (e)=>{
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id;
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id;
    }
  })
})


```

### + project 2
```JavaScript
const form = document.querySelector('form');
//this use case will give you an empty value
// const height = parseInt(document.querySelector('#height').value);
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);

    //show the result 
    results.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      results.innerHTML = `underweight <span> and your bmi is : ${bmi}</span>`;
    } else if (bmi >= 18.6 && bmi <= 24.9) {//and operator is used to find the range between elements
      results.innerHTML = `Noramal Range <span> and your bmi is : ${bmi}</span>`;
    } else {
      results.innerHTML = `overweight <span> and your bmi is : ${bmi}</span>`;
  }

   
  }
});

```

### + project 3


```javascript
const clock = document.getElementById('clock');
setInterval(function(){
  let date = new Date()
  clock.innerHTML = date.toLocaleTimeString();
  // console.log(date.toLocaleTimeString());
} ,1000)

```
### + project 4


```javascript
let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;
let playGame = true;
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('please enter a valid number');
  } else if (guess < 1) {
    alert('please enter ther number the between 1 to 100');
  } else if (guess > 100) {
    alert('please enter ther number the between 1 to 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    }else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if(guess === randomNumber){
    displayMessage('You guessed it right');
    endGame();
  }else if(guess < randomNumber){
    displayMessage('Number is Too Low');
  }else if (guess > randomNumber){
    displayMessage('Number is Too High');
  }
}
function displayGuess(guess) {
  userInput.value ='';
  guessSlot.innerHTML += `${guess},`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled' , '');
  p.classList.add('button');
  p.innerHTML = `<h2 id= "newGame">start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click' ,  function() {
    randomNumber=  parseInt(Math.random() * 100 + 1);
    prevGuess =[];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame = true;
  })
}


```

### +project 5 
``` javaScript
const insert = document.getElementById('insert');

window.addEventListener('keydown', function (e) {
  insert.innerHTML = `
  <div class = "color">
  <table>
  <tr>
    <th>key</th>
    <th>keycode</th>
    <th>code</th>
  </tr>
  <tr>
    <td>${e.key === " " ? "space":e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>
  `;
});

```



### +project 6

```javaScript
//generate a random color

const randomColor = function () {
  const hex = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let intervalId;
const startChangingColor = function () {
  function changebgColor() {
    document.body.style.backgroundColor = randomColor();
  }
  if (!intervalId) {
    intervalId = setInterval(changebgColor, 1000);
  }
};
const stopChangingColor = function () {
  clearInterval(intervalId);
  intervalId = null;
};
document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);

```