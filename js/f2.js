const form = document.getElementById("form")
function isCheck(type) {
    return ["checkbox"].includes(type)
}

function handlerForm2(event) {
    event.preventDefault()

    const fields = document.querySelectorAll("input")
    const values = {}
    console.log(fields)
    fields.forEach((field) => {
        const { name, value, type, checked } = field

        values[name] = isCheck(type) ? checked : value
    })
    console.log(values)
}
form.addEventListener("submit", handlerForm2)
