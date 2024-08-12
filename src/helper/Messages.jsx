export const loginValidation = {
    emailRequired: "Please enter email",
    emailInvalid: "Email is not valid",
    passwordRequired: "Please enter password",
    passwordInvalid:
        "Minimum 8 characters, must contain one number, one special character, one capital letter",
    checkRequired: "Please check tha checkbox",
};

export const leaveValidation = {
    nameRequired: "Please enter name",
    required: 'Field is required',
    phoneRequired: 'Please enter phone number',
    phoneInvalid: 'Only 10 digit',
    checkRequired: "Please check the checkbox",
    date: 'Please select date'
};

export const regex = {
    emailRegex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
    phoneRegex: /^\d{10}$/,
};
