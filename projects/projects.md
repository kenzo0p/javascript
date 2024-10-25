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