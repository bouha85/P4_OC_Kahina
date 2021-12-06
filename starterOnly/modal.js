function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// DOM Elements
const modalbg = document.querySelector(".bground"); //div d'arrière blan
const modalBtn = document.querySelectorAll(".modal-btn"); //boutton je m'inscris
const formData = document.querySelectorAll(".formData"); // le formulaire
const closeBtn = document.getElementById("close-button"); // Close modal button
const formBody = document.getElementById("signup-form");

let fnameId = document.getElementById("first");
let InameId = document.getElementById("last");
let emailId = document.getElementById("email");
let birthId = document.getElementById("birthdate");
let quantityId = document.getElementById("quantity");
let radioBlockId = document.getElementById("localisation");
let radioId = document.getElementsByClassName("location");
let checkbox1Id = document.getElementById("checkbox1");
let checkbox2Id = document.getElementById("checkbox2");
let formSubmitButton = document.getElementById("button-signup-submit");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form

function launchModal() {
    modalbg.style.display = "block";
};

// Close modal event

closeBtn.addEventListener("click", closeModal);

//close modal form

function closeModal() {
    modalbg.style.display = "none";
    // Suppression des messages d'erreur
     hideError(
        (firstnameErrorTag,
            lastnameErrorTag,
            emailErrorTag,
            birthdateErrorTag,
             quantityErrorTag,
           locationErrorTag)
     );
};


//Messages d'érreurs des champs de formulaire
const firstnameErrorTag = document.getElementById("firstname-error");
const lastnameErrorTag = document.getElementById("lastname-error");
const emailErrorTag = document.getElementById("email-error");
const birthdateErrorTag = document.getElementById("birthdate-error");
const quantityErrorTag = document.getElementById("quantity-error");
const locationErrorTag = document.getElementById("location-error");
const conditionUtilisationErrorTag = document.getElementById("conditions-utilisation-error");

// Validation Email par expression régulière
function emailRegexValidation(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

//validation des noms par expression regulière

function nameRegexValidation(name) {
    const re = /^[a-z ,.'-]+$/i;
    return re.test(name);
}

//fonction permettant de valider le prenom
function validateFirstName() {
    //si la valeur du champ est inferieur à
    //2 caractères, on renvoie une erreur
    if (fnameId.value.trim().length < 2) {
        firstnameErrorTag.textContent = "Merci d'entrer au minimum deux caractères";
        firstnameErrorTag.style.display = "block";
        firstnameErrorTag.style.color = "red";
        firstnameErrorTag.style.fontSize = "12px";
        fnameId.style.border = "2px solid red";
        return false;
    } else {
        //sinon si la valeur du champ contient des chiffres
        // ou des caractères spéciaux, on renvoie une erreur
        if (nameRegexValidation(fnameId.value) == false) {
            firstnameErrorTag.textContent = "pas de chiffres ou caractère spéciaux ";
            firstnameErrorTag.style.display = "block";
            firstnameErrorTag.style.color = "red";
            firstnameErrorTag.style.fontSize = "12px";
            fnameId.style.border = "2px solid red";
            return false;
            // Sinon on valide le champ et on renvoie "true"
        } else {
            firstnameErrorTag.style.display = "none"; // On cache le bloc d'erreur s'il y en a pas
            fnameId.style.border = "none";
            return true;
        }
    }
}

// fonction permettant de valider le nom de famille c'est la ème fonction que pour le prenom

function validateLastName() {
    //si la valeur du champ est inferieur à
    //2 caractères, on renvoie une erreur
    if (InameId.value.trim().length < 2) {
        lastnameErrorTag.textContent = "Merci d'entrer au minimum deux caractères";
        lastnameErrorTag.style.display = "block";
        lastnameErrorTag.style.color = "red";
        lastnameErrorTag.style.fontSize = "12px";
        InameId.style.border = "2px solid red"
        return false;
    } else {
        //sinon si la valeur du champ contient des chiffres
        // ou des caractères spéciaux, on renvoie une erreur
        if (nameRegexValidation(InameId.value) == false) {
            lastnameErrorTag.textContent = "pas de chiffres ou caractère spéciaux ";
            lastnameErrorTag.style.display = "block";
            lastnameErrorTag.style.color = "red";
            lastnameErrorTag.style.fontSize = "12px";
            InameId.style.border = "2px solid red";
            return false;
            // Sinon on valide le champ et on renvoie "true"
        } else {
            lastnameErrorTag.style.display = "none"; // On cache le bloc d'erreur s'il n'y en a pas
            InameId.style.border = "none";
            return true;
        }
    }
}

//fonction permettant de valider l'email
//on utilise l'expression regulière pour verifier les caractères

function validateEmail() {
    if (emailRegexValidation(emailId.value) == false) {
        emailErrorTag.textContent = "Merci de saisir une adresse email valide";
        emailErrorTag.style.display = "block";
        emailErrorTag.style.color = "red";
        emailErrorTag.style.fontSize = "12px";
        emailId.style.border = "2px solid red";
        return false;
    } else {
        emailErrorTag.style.display = "none";
        emailId.style.border = "none";
        return true;
    }
}

//fonction permettant de valider la date de naissance

function validateBirthdate() {
    //si aucune valeur n'est indiquer, alors en renvoie une erreur
    if (!birthId.value) {
        birthdateErrorTag.textContent = "Merci d'indiquer votre date de naissance";
        birthdateErrorTag.style.display = "block";
        birthdateErrorTag.style.color = "red";
        birthdateErrorTag.style.fontSize = "12px";
        birthId.style.border = "2px solid red";
        return false;
    } else {
        birthdateErrorTag.style.display = "none";
        birthId.style.border = "none";
        return true;
    }
}

//fonction pour vérifier le nombre de participants passées

function validateQuantity() {
    //si aucune valeur n'est indiquer, alors en renvoie une erreur
    if (!quantityId.value) {
        quantityErrorTag.textContent = "Veuillez entrer une valeur numerique valide";
        quantityErrorTag.style.display = "block";
        quantityErrorTag.style.color = "red";
        quantityErrorTag.style.fontSize = "12px";
        quantityId.style.border = "2px solid red";
        return false;
    } else {
        //sinon vrai
        quantityErrorTag.style.display = "none";
        quantityId.style.border = "none";
        return true;
    }
}


 function validateLocation() {
    let isLocationChecked = false; // Variable permettant de savoir si une localisation est déjà sélectionnée
    if (quantityId.value > 0) {
        // Si le nombre de participations passées est supérieur à 0, alors on demande dans quelle ville elle a eu lieu
        for (let i = 0; i < radioId.length; i++) {
            // On parcourt tous les choix de ville disponibles
            if (radioId[i].checked) {
                // Si un choix est sélectionné, alors on renvoie vrai
                isLocationChecked = true;
            }
        }
        if (isLocationChecked == false) {
            // Si aucun choix n'est sélectionné, on affiche un message d'erreur
            locationErrorTag.textContent = "Merci d'indiquer dans quelle ville vous avez participé";
            locationErrorTag.style.display = "block";
            locationErrorTag.style.color = "red";
            locationErrorTag.style.fontSize = "12px";
            return false;
        } else {
            // Et sinon on cache le message d'erreur
            locationErrorTag.style.display = "none";
            return true;
        }
    } else {
        // Si le nombre de participations est égal à 0 alors on ne demande pas de préciser la localisation
        return true;
    }
} 

// Vérification de la validation des termes d'utilisation
function validateCheckbox() {
    // Si la boite n'est pas cochée, alors on envoie une erreur
    if (!checkbox1Id.checked) {
        conditionUtilisationErrorTag.textContent = "Merci d'accepter les conditions d'utilisation";
        conditionUtilisationErrorTag.style.display = "block";
        conditionUtilisationErrorTag.style.color = "red";
        conditionUtilisationErrorTag.style.fontSize = "12px";
        return false; // Et on renvoie False
    } else {
        // Sinon on cache le message d'erreur
        conditionUtilisationErrorTag.style.display = "none";
        return true;
    }
}

//création d'un bloc pour le message de success

formBody.insertAdjacentHTML(
    'afterend',
    "<div id='success' class='success-block'><h2 class='success-title'>Formulaire validé !</h2> <p class='success-text'>Merci d'avoir rempli le formulaire d'inscription</p><input class='btn-submit' type='submit' onclick='resetForm()' value='Fermer'/></div>"
);
let successMessage = document.getElementById('success');
successMessage.style.display = "none"; // On le cache par défaut

function resetForm() {
    formBody.reset();
    successMessage.style.display = "none";
    formBody.style.display = "block";
    closeModal();
}


function validate(event) {
    event.preventDefault(); // On empêche le comportement par défaut
    // On vérifie que tous les champs soient validés grâce à une variable
    /* if (validateFirstName() && validateLastName() && validateEmail() && validateBirthdate() && validateQuantity() && validateLocation() && validateCheckbox()) {
        showConfirmationModal()
    } */
    const isFirstNameValid = validateFirstName();
    const isLastNameValid = validateLastName();
    const isEmailValid = validateEmail();
    const isBirthDateValid = validateBirthdate();
    const isQuantityValid = validateQuantity();
    const isConditionsValid = validateCheckbox();
    const isLocationValid = validateLocation()

    if (isFirstNameValid && isLastNameValid && isEmailValid && isBirthDateValid && isQuantityValid && isConditionsValid && isLocationValid) {
        showConfirmationModal()
    }
}

function showConfirmationModal() {
    // Si oui on affiche le message de succès
    successMessage.style.display = "flex";
    formBody.style.display = "none"; // Affichage du bloc de succès avec le bouton fermer
    // Si besoin, on peut utiliser un timer pour réinitialiser automatiquement le formulaire
    // On attend 10 secondes avant de fermer la modale
    setTimeout(resetForm, 10000);
}