const form = document.querySelector("#form")

const handlerForm1 = (e) => {
    e.preventDefault()

    const name = form.querySelector('[name = "name"]')
    const age = form.querySelector('[name = "age"]')
    const one = form.querySelector('[name = "one"]')
    const two = form.querySelector('[name = "two"]')
    const three = form.querySelector('[name = "three"]')

    const valueForm = {
        name: name.value,
        age: age.value,
        one: one.checked,
        two: two.checked,
        three: three.checked,
    }
    console.log(valueForm)
}

form.addEventListener("submit", handlerForm1)
