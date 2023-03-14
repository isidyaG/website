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

    let section_menu = document.getElementsByClassName("section-menu")[0];
    let sticky = section_menu.offsetTop;
    let inner = document.getElementsByClassName("inner")[0];

    inner.addEventListener("scroll", function() {
        if (inner.scrollTop > sticky) {
            section_menu.classList.add("sticky");
            let scrollBarWidth = inner.offsetWidth - inner.clientWidth;
            section_menu.style.width = "calc(100% - " + scrollBarWidth.toString() + "px)";
            // section_menu.style.top = window.pageYOffset.toString();
        } else {
            section_menu.classList.remove("sticky");
            section_menu.style.width = "100%";
        }
     })
    
     //const btn = document.querySelector("#block-code");
     //const code = document.querySelector("#lang-js");

    let btn = document.getElementById("block-code");

    btn.addEventListener("click", function() {
        document.getElementById("contact-data").style.display = "block";
        btn.style.display = "none";
    })
}

