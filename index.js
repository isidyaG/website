window.onload = function() {

    // get the modal: 
    let modals = document.getElementsByClassName("modal");

    // get the button that opens the modal:
    let btns = document.getElementsByClassName("modal_button");

    // get the <span> element that closes the modal: 
    let spans = document.getElementsByClassName("close");

    // when the user clicks the button, open the modal:
    for (let i = 0; i < modals.length; i++) {  
        btns[i].onclick = function() {           
            modals[i].style.display = "block";
        }
    }
    // when the user clicks on <span> (x), close the modal:
    for (let i = 0; i < modals.length; i++) {
        spans[i].onclick = function() {
            modals[i].style.display = "none";
        }
    }
}



























