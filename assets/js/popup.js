var popup = document.querySelector('#popup-welcome')


function togglePopup(el) {
    el.classList.toggle('active')
}


window.addEventListener('DOMContentLoaded', function() {
    var cookie = sessionStorage.getItem('popState')
    setTimeout(function(){

    // turn this on for live
    if (cookie != 'launched') {
        if (popup) togglePopup(popup)
        sessionStorage.setItem('popState','launched')
    }
    if (popup) {
        //togglePopup(popup) // hide this when live
        //popup.onclick = function(e) {togglePopup(popup)} // causes any user click to dismiss popup
        close.addEventListener('click',function(e) {
            togglePopup(popup)
        })
    }
},10000);
})
