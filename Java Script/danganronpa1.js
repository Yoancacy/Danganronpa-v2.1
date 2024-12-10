let title = document.querySelector('#DarkMode')
let body = document.querySelector('body')
title.addEventListener("click", function() {
    console.log("élement cliqué")
    body.classList.toggle('clair-mode')
})