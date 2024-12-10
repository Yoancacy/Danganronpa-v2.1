document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire

    // Récupération des champs
    let pseudo = document.getElementById('pseudo');
    let email = document.getElementById('email');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirmPassword');
    let age = document.getElementById('age'); 
    let message = document.getElementById('message');

    // Réinitialisation des classes de validation
    pseudo.classList.remove('valid', 'invalid');
    email.classList.remove('valid', 'invalid');
    password.classList.remove('valid', 'invalid');
    confirmPassword.classList.remove('valid', 'invalid');
    age.classList.remove('valid', 'invalid'); // Réinitialisation de la classe d'âge

    let isValid = true; // Variable pour vérifier la validité du formulaire
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Déclaration avec let

    // Validation du pseudo
    if (pseudo.value.length < 6) {
        pseudo.classList.add('invalid');
        isValid = false;
        message.innerText = "Le pseudo doit comporter au moins 6 caractères.";
    } else {
        pseudo.classList.add('valid');
    }

    // Validation de l'email
    if (!emailPattern.test(email.value)) {
        email.classList.add('invalid');
        isValid = false;
        message.innerText = "Veuillez entrer un email valide.";
    } else {
        email.classList.add('valid');
    }

    // Validation du mot de passe
    if (password.value.length < 8) {
        password.classList.add('invalid');
        isValid = false;
        message.innerText = "Le mot de passe doit comporter au moins 8 caractères.";
    } else {
        password.classList.add('valid');
    }

    // Validation de la vérification du mot de passe
    if (password.value !== confirmPassword.value) {
        confirmPassword.classList.add('invalid');
        isValid = false;
        message.innerText = "Les mots de passe ne correspondent pas.";
    } else {
        confirmPassword.classList.add('valid');
    }

    // Validation de l'âge
    if (age.value <= 16) {
        age.classList.add('invalid');
        isValid = false;
        message.innerText = "Désolé, vous devez avoir plus de 16 ans pour vous inscrire.";
    } else {
        age.classList.add('valid');
    }

    // Si tout est valide
    if (isValid) {
        message.innerText = "Inscription réussie !";
        message.style.color = "green";
    } else {
        message.style.color = "red";
    }
});