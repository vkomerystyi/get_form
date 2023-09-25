const { form } = document.forms

function handForm(e) {
    e.preventDefault()
    const formData = new FormData(form)
    const values = Object.fromEntries(formData.entries())

    console.log(values)
}
form.addEventListener("submit", handForm)
