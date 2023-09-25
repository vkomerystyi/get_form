const { form } = document.forms

function handlerForm3(e) {
    e.preventDefault()

    const { name, age, one, two, three } = form
    const values = {
        name: name.value,
        age: age.value,
        one: one.checked,
        two: two.checked,
        three: three.checked,
    }
    console.log(values)
}

form.addEventListener("submit", handlerForm3)
