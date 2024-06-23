// selecting add-popup button,class overlay and popup box
//whenever the button can be click it change the display property as none of two classes
var overlay=document.querySelector(".overlay")
var popupbox=document.querySelector(".popupbox")
var addpopupbutton=document.getElementById("add-popup-button")
addpopupbutton.addEventListener("click",function(){
    overlay.style.display="block"
    popupbox.style.display="block"
})

//select cancel button because it automatcally close the popup so write the eventhandler to use preventdefault function 
var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    popupbox.style.display="none"
})
//select container,add-book,book-title-input,book-author-input,book-description-input
var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitle=document.getElementById("book-title-input")
var bookauthor=document.getElementById("book-author-input")
var descrip=document.getElementById("book-description-input")
addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-container")
    div.innerHTML=` <h2>${booktitle.value}</h2>
                    <h5>${bookauthor.value}</h5>
                     <p>${descrip.value}</p>
                     <button onclick="deleteitem(event)">Delete</button>`
    
    container.append(div)
    overlay.style.display="none"
    popupbox.style.display="none"

})
function deleteitem(event)
{
    event.target.parentElement.remove()
}