const { form } = document.forms

function isCheck(type) {
    return ["checkbox"].includes(type)
}
function handForm(e) {
    e.preventDefault()
    const values = {}
    for (const field of form) {
        const { name } = field
        if (name) {
            const { value, checked, type } = field
            values[name] = isCheck(type) ? checked : value
        }
    }
    console.log(values)
}

form.addEventListener("submit", handForm)
