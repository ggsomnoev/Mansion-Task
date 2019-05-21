(() => {
    //We have two user-data-containers from whom we can send data to the server.
    const userDataContainers = $(".user-data__container");
    let isSignUpValid = false;
    $(userDataContainers).each((index, userDataContainer) => {
        const signUpForm = $(userDataContainer).find(".user-data__form.sign-up-form");
        //Two time validation - onsubmit and when the input field loses focus.
        const errors = {};
        //OnFocusOut Handler
        $(signUpForm).find(".user-data__input-wrapper input").each((index, inputField) => {
            $(inputField).on("focusout", () => {
                //on focusout validate the input field and display the appropriate error message
                validate(inputField, errors);
                //console.log(errors);
                displayErrorMessage(inputField, errors[inputField.name]);
            });
            $(inputField).on("focusin", () => {
                //on focusin clear the error box
                displayErrorMessage(inputField, '');
            });
        });
        //OnSubmit Handler
        const signUpBtn = $(signUpForm).find('input[type=submit]');
        $(signUpBtn).click(e => {
            e.preventDefault();

            //Validates all sign up form fields and displays any errors.
            $(signUpForm).find(".user-data__input-wrapper input").each((key, inputField) => {
                validate(inputField, errors);
                displayErrorMessage(inputField, errors[inputField.name]);
            });
            isSignUpValid = (Object.keys(errors).length === 0) ? true : false;
        });
        //Select all steps containers inside the user-data-container and animate them on submit
        $(userDataContainer).find(".user-data--step").each((index, step) => {
            const submitBtns = $(step).find('input[type=submit]');
            $(submitBtns).click(e => {
                e.preventDefault();
                //proceed only if sign up form is valid 
                if (isSignUpValid) {
                    const nextStepCon = $(step).next();
                    nextStep(step, nextStepCon);
                }
            });
        });
    });

    function validate(field, errors) {
        const validation = {
            email: (field) => { return regexValidation(field) },
            username: (field) => { return regexValidation(field) },
            password: (field) => { return regexValidation(field) },
            repwd: (field) => { return repeatPasswordValidation(field) },
            terms: (field) => { return termsValidation(field) }
        }
        const errorMsgs = {
            email: "Invalid email format.",
            username: "Must be between 4 and 12 characters long.",
            password: "Must be between 6 and 12 characters long. Contain 1 lowercase, 1 uppercase letters and 1 number or special char.",
            repwd: "Passwords must match and be valid.",
            terms: "You must agree with terms and services."
        }
        //Check the corresponding input field with it's correct validation function. Populate the errors object.
        if (!validation[field.name](field)) {
            errors[field.name] = errorMsgs[field.name];
        } else {
            //If the field is valid remove the error msg from the object
            delete errors[field.name];
        }
    }

    function displayErrorMessage(field, message) {
        //TODO: I should change this selector to more adequate one!!!
        const errorBox = $(field).parent().next();
        if (message) {
            $(errorBox).text(message);
        } else {
            $(errorBox).text("");
        }
    }

    function regexValidation(inputField) {
        const regExps = {
            email: new RegExp("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$"),
            username: new RegExp("^[a-zA-Z0-9]{4,12}$"),
            password: new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9!@#\$%\^&\*])(?=.{6,12})")
        }
        return regExps[inputField.name].test(inputField.value);
    }
    //Check if both fields are equal, not empty and the password is valid
    function repeatPasswordValidation(repwd) {
        const password = $(repwd).closest(".sign-up-form").find("input[name=password]");
        return (
            $(password).val() === $(repwd).val() &&
            $(password).val().length > 0 &&
            regexValidation(password[0])
        )
    }

    function termsValidation(inputField) {
        return ($(inputField).is(':checked'));
    }

    function nextStep(currentForm, nextForm) {
        setTimeout(() => {
            $(currentForm).toggleClass('hidden');
            $(nextForm).toggleClass('hidden');
        }, 1000)

        $(currentForm).addClass('animate-out');
    }
    //Show/Hide bonus container
    $(".bonus").click(() => {
        $(".bonus").parent().next().toggleClass("hidden");
    })
})();