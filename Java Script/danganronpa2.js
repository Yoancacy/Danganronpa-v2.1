let title = document.querySelector('#DarkMode')
let body = document.querySelector('body')
title.addEventListener("click", function() {
    console.log("élement cliqué")
    body.classList.toggle('clair-mode')
})



document.querySelectorAll('.tab').forEach(function(tab) {
    tab.addEventListener('click', function() {
        // Retirer la classe "tab-active" de tous les <li>
        document.querySelectorAll('.tab').forEach(function(item) {
            item.classList.remove('tab-active');
        });

        // Retirer la classe "active" de tous les contenus
        document.querySelectorAll('.content').forEach(function(content) {
            content.classList.remove('active');
            content.style.display = 'none'; // Masquer tous les contenus
        });

        // Ajouter la classe "tab-active" à l'élément cliqué
        this.classList.add('tab-active');

        // Vérifier si le <li> contient la classe "tab-nomDuContenu"
        if (this.classList.contains('tab')) {
            // Récupérer le nom du contenu correspondant
            let chapterClass = 'nom' + this.textContent.trim().replace(' ', '');
            let contentToShow = document.querySelector('.' + chapterClass);
            if (contentToShow) {
                contentToShow.classList.add('active');
                contentToShow.style.display = 'block'; // Afficher le contenu correspondant
            }
        }
    });
});