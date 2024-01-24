console.log("Script Running")
let listItems = document.querySelector('#listItems')
console.log(listItems.innerHTML)


// if (listItems.innerHTML) {
//     console.log("blank");
// }
getData()
function addTodoItem(userInput) {

    listItems.innerHTML += `<li>

    <input type="checkbox" name="completed" id="" class ="isChecked">
    <p>${userInput.value}</p>
    <i class="fa-solid fa-xmark"></i>
</li>`
    // console.log(userInput)
    userInput.value = ''

    saveData()


}


document.querySelector('#submit').addEventListener('click', (event) => {
    let userInput = document.querySelector('#todoItem');
    console.log("button clicked")
    // event.preventDefault()
    // event.stopImmediatePropagation()
    // event.preventDefault ? event.preventDefault() : (event.returnValue = false);
    //    userInput = document.querySelector('#todoItem')
    // console.log(userInput.value)
    // console.log(userInput.value.length)
    if (userInput.value.length) {

        addTodoItem(userInput)
    }
    else {
        alert("Please enter task to ADD")
    }
})

listItems.addEventListener('click', (elem) => {

    console.log("clicked on : ", elem.target.tagName)
    if (elem.target.tagName == 'P' || elem.target.tagName == 'LI' || elem.target.tagName == 'INPUT') {
        elem.srcElement.parentNode.firstElementChild.toggleAttribute('checked')
        saveData()

    }
    else if (elem.target.tagName == 'I') {
        // console.log(elem.srcElement.parentNode)
        elem.srcElement.parentNode.outerHTML = ""
        saveData()
    }
})


function saveData() {
    // console.log(listItems.innerHTML)
    localStorage.setItem("data", listItems.innerHTML);
    // console.log()
    // console.log(localStorage.getItem("data"))
    console.log('saving data')
    // localStorage.clear
    // console.log(localStorage.getItem("data"))
}
function getData() {
    listItems.innerHTML = localStorage.getItem('data');

    // console.log(listItems.querySelector('p').innerText)


    if (!listItems.innerHTML && listItems.querySelector('p') != null) {
        addTodoItem(listItems.querySelector('p').innerText)
    }

    console.log(listItems.innerHTML)

}


