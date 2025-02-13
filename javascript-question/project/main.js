const tabs  = document.querySelector('.tabs');
const gallery = document.querySelectorAll(".images");

tabs.addEventListener('click' , (e) => {
    console.log(e.target.dataset.category)
    if(e.target.dataset.category !== undefined){
        filterSeach(e.target.dataset.category);
    }
})

const filterSeach = (value) => {
    gallery.forEach((curElem) => {
        console.log(curElem.dataset.category);
        if(curElem.dataset.category === value){
            curElem.style.display = 'block'
        }else if(value === "All"){
            curElem.style.display = "block"
        }
        else {
            curElem.style.display = 'none'

        }
    })
}