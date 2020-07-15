const textbox = (value) => (value != null && value != '')

const validationsByType = {
    textbox: textbox,
    dropdown: textbox
}

export const validations = (type, value) => {
    const validationType = validationsByType[type]
    return validationType ? validationType(value) : true
}