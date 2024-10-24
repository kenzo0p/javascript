//for each loop

const coding = ["java", "pyhton", "cpp", "js"]
coding.forEach(function (item) { //there is no name for this function because its a callback function
    // console.log(item)
});


coding.forEach((e) => {
    // console.log(e)
})
coding.forEach((item, index, arr) => {
    console.log(item, index, arr);
})

function printMe(item) {
    // console.log(item);
}

coding.forEach(printMe);

const myCoding = [
    {
        languageName: "javascript",
        languageFile: "js"

    },
    {
        languageName: "java",
        languageFile: "java"

    },
    {
        languageName: "python",
        languageFile: "py"

    }
]
myCoding.forEach((e)=>{
    console.log(e.languageName)
})