function validatePIN(pin) {
    // pin can either be 4 or 6 digits
    const validatePin = /^\d{4}$|^\d{6}$/
    console.log(validatePin.test(pin))
    return validatePin.test(pin)
}

console.log(validatePIN('1234'))