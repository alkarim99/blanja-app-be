const db = require("../database")

const getAll = async (sortType) => {
  try {
    const query = await db`SELECT * FROM users_blanja ORDER BY id ${sortType}`
    return query
  } catch (error) {
    return error
  }
}

const getById = async (id) => {
  try {
    const query = await db`SELECT * FROM users_blanja where id = ${id}`
    return query
  } catch (error) {
    return error
  }
}

const getByEmail = async (email) => {
  try {
    const query =
      await db`SELECT * FROM users_blanja where LOWER(email) = LOWER(${email})`
    return query
  } catch (error) {
    return error
  }
}

const create = async (payload) => {
  try {
    const query = await db`INSERT INTO users_blanja ${db(
      payload,
      "fullname",
      "email",
      "password"
    )} returning *`
    return query
  } catch (error) {
    return error
  }
}

const update = async (payload, id) => {
  try {
    const query = await db`UPDATE users_blanja SET ${db(
      payload,
      "fullname",
      "email",
      "password",
      "phone_number",
      "gender",
      "date_of_birth"
    )} WHERE id = ${id} returning *`
    return query
  } catch (error) {
    return error
  }
}

const updatePhoto = async (payload, id) => {
  try {
    const query = await db`UPDATE users_blanja set ${db(
      payload,
      "profile_picture"
    )} WHERE id = ${id} returning *`
    return query
  } catch (error) {
    return error
  }
}

const deleteUser = async (id) => {
  try {
    const query = await db`DELETE FROM users_blanja WHERE id = ${id} returning *`
    return query
  } catch (error) {
    return error
  }
}

module.exports = {
  getAll,
  getById,
  getByEmail,
  create,
  update,
  updatePhoto,
  deleteUser,
}
