
const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

function registerEmail() {
  let email = document.getElementById("email").value,
      message

  switch (true) {
    case email == "" :
      message = "Ви нічого не ввели. Введіть E-mail адресу."
    break
    case !regexp.test(email) :
      message = "E-mail адреса неправильного формату. Повторіть спробу."
    break
    default:
      message = `Ваша E-mail адреса : ${email}\nОчікуйте листа`
  }

  alert(message)
}
