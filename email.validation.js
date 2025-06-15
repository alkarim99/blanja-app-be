const emailValidator = require("deep-email-validator")
const db = require("./database")

const isEmailValid = (email) => {
  try {
    return emailValidator.validate({ email, validateSMTP: false })
  } catch (error) {
    return error
  }
}

const isEmailUnique = async (email, id) => {
  try {
    let emails
    if (id) {
      emails = await db`SELECT email FROM users_blanja WHERE id != ${id}`
    } else {
      emails = await db`SELECT email FROM users_blanja`
    }
    const isEmailUnique = emails.find((mail) => mail.email === email) ?? false
    return isEmailUnique
  } catch (error) {
    return error
  }
}

module.exports = { isEmailValid, isEmailUnique }
