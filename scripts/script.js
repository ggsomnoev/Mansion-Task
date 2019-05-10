let requiredInputFields = { 'email': false, 'usrname': false, 'pwd': false, 'repwd': false };
//Validates all input fields from the first form on focusout
$(".form-container").first().find(".input-field").each((k, v) => {
    $(v).on("focusout", () => {
        validateField(v);
    })
});

function validateField(inputField) {
    if (checkIfEmpty(inputField)) return;
    if (checkRegex(inputField)) return;
}

function checkIfEmpty(inputField) {
    if (isEmpty(inputField)) {
        validate(inputField, "Empty field");
        return true;
    } else {
        validate(inputField, "");
        return false;
    }

    function isEmpty(inputField) {
        if (inputField.value.trim() === "") {
            return true;
        } else {
            return false;
        }
    }
}

function checkRegex(inputField) {
    switch (inputField.name) {
        case "email":
            if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputField.value)) {
                validate(inputField, `Invalid email format.`);
                return false;
            } else {
                validate(inputField, "");
                return true;
            }
        case "usrname":
            if (!/^[a-zA-Z0-9]{4,12}$/.test(inputField.value)) {
                validate(inputField, `Must be between 4 and 12 characters long.`);
                return false;
            } else {
                validate(inputField, "");
                return true;
            }
        case "pwd":
            if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9!@#\$%\^&\*])(?=.{6,12})/.test(inputField.value)) {
                validate(inputField, "Must be between 6 and 12 characters long. Contain 1 lowercase, 1 uppercase letters and 1 number or special char.");
                return false;
            } else {
                validate(inputField, "");
                return true;
            }
        case "repwd":
            let password = $(".input-container input[name='pwd']");
            if ($(password).val() != inputField.value) {
                validate(inputField, "Password must match");
                return false;
            } else {
                validate(inputField, "");
                return true;
            }
        default: return false;
    }
}
//Validates the required input fields
function validate(inputField, text) {
    let validationBox = $(inputField).parent().next();
    //If any text is show then the field is invalid.
    if (!showOrHideText(validationBox, text)) {
        requiredInputFields[$(inputField).prop('name')] = true;
    } else {
        requiredInputFields[$(inputField).prop('name')] = false;
    }
}
//Show or hide validation text
function showOrHideText(validationBox, text) {
    if (text != '') {
        $(validationBox).text(text);
        $(validationBox).show();
        return true;
    } else {
        $(validationBox).text(text);
        $(validationBox).hide();
        return false;
    }
}

function inputFieldsCheck(inputField) {
    let terms = $(inputField).find(".checkbox-container input[type=checkbox]");
    let validationBox = $(terms).parent().next();
    for (let item in requiredInputFields) {
        //console.log(item +" => "+ requiredInputFields[item])  
        if (!requiredInputFields[item]) {
            return showOrHideText(validationBox, "All fields are required.");
        }
    }
    return showOrHideText(validationBox, "");
}

function termsCheck() {
    let terms = $(".checkbox-container input[type=checkbox]");
    let validationBox = $(terms).parent().next();
    if (!$(terms).is(':checked')) {
        return showOrHideText(validationBox, "You must agree with terms and services.");
    } else {
        return showOrHideText(validationBox, "");
    }
}

let submitBtns = $('input[type=submit]');

function signUpValidation(signUpBtn) {
    let signUpForm = $(signUpBtn).closest(".form-container");
    //If inputFieldsCheck or termsCheck fails return false;
    if (inputFieldsCheck(signUpForm) || termsCheck(signUpForm)) return false;
    return true;
}

//Event Handlers
submitBtns.each((key) => {
    $(submitBtns[key]).click(e => {
        e.preventDefault();

        //Do not continue if the first form is not validated correctly;
        let signUpBtn = $(submitBtns).first();
        if ($(signUpBtn).val() == $(submitBtns[key]).val()) {
            if (!signUpValidation(signUpBtn)) return;
        }

        let currentForm = $(submitBtns[key]).closest(".form-container");
        let nextForms = $(currentForm).next();
        nextForm(currentForm, nextForms);
    });

    function nextForm(currentForm, nextForm) {
        setTimeout(() => {
            $(currentForm).toggleClass('hidden');
            $(nextForm).toggleClass('hidden');
        }, 1000)

        $(currentForm).addClass('animate-out');
    }
});



//Show\Hide bonus container
$("#bonus").click(() => {
    $("#bonus").parent().next().toggleClass("hidden");
})

//Redirects
$("#skip").click(() => {
    window.location.href ="http://www.casino.com/";
})
$("#playNow").click(() => {
    window.location.href ="http://www.casino.com/casino-games/";
})
$("#promotions").click(() => {
    window.location.href ="http://www.casino.com/promotions/";
})

