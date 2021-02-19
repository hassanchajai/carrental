console.log("%cAl rights reserved !", "color:orange");



// validation
const form = document.querySelector(".Contact-form form");
const errName = document.querySelector(".name-error"),
    errMessage = document.querySelector(".message-error"),
    errSubject = document.querySelector(".subject-error"),
    errEmail = document.querySelector(".email-error"),
    msg = document.querySelector(".message-form");


const validateEmail = value => {
    const pattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (pattern.test(value)) return true;
    return false;
}

const validateString = value => {
    var pattern = /^[a-zA-Z]+?$/;
    if (pattern.test(value)) {
        return true;
    } else {
        return false;
    }
}



const NotEmpty = value => {
    if (value != "") return true;
    return false;
}

const validateMessage = value => {

    if (value.split(" ").join("").length >= 33) return true;
    return false;
}

const initialize = () => {
    errName.innerHTML = "";

    errMessage.innerHTML = "";

    errSubject.innerHTML = "";

    errEmail.innerHTML = "";
}

const validate = e => {
    e.preventDefault();
    initialize();
    const { name, email, message, subject } = form;

    if (!NotEmpty(name.value)) {
        errName.innerHTML = "Name vide ! ";
    } else {

    }



    if (!NotEmpty(message.value)) {
        errMessage.innerHTML = "Message vide ! ";
    } else {
        if (!validateMessage(message.value)) {
            errMessage.innerHTML = "Message Invalid !";
        } else {
            errMessage.innerHTML = "";
        }

    }



    if (!NotEmpty(subject.value)) {
        errSubject.innerHTML = "Subject vide ! ";
    } else {

    }



    if (!NotEmpty(email.value)) {
        errEmail.innerHTML = "Email vide ! ";
    } else {
        if (!validateEmail(email.value)) {
            errEmail.innerHTML = "Email Invalid !"
        } else {
            errEmail.innerHTML = "";
        }
    }



    if (NotEmpty(name.value) && NotEmpty(message.value) && NotEmpty(email.value) && NotEmpty(subject.value)) {


        initialize();
        if (!validateEmail(email.value)) {
            errEmail.innerHTML = "Email Invalid !";
        } else {
            errEmail.innerHTML = "";
        }

        if (!validateMessage(message.value)) {
            errMessage.innerHTML = "Message Invalid !";
        } else {
            errMessage.innerHTML = "";
        }




        if (validateEmail(email.value) && validateMessage(message.value)) {
            initialize();
            msg.innerHTML = "Success";
            setTimeout(() => {
                window.location.href = "index.html";
            }, 2000);
        }


    }

}


form.addEventListener("submit", validate);