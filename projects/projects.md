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