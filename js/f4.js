const { form } = document.forms
function isCheck(type) {
    return ["checkbox"].includes(type)
}
const handForm = (e) => {
    e.preventDefault()
    const { elements } = form
    const values = {}

    for (let i = 0; i < elements.length; i++) {
        const elementForm = elements[i]
        const { name } = elementForm
        if (name) {
            const { value, type, checked } = elementForm
            values[name] = isCheck(type) ? checked : value
        }
    }
    console.log(values)
}
form.addEventListener("submit", handForm)
