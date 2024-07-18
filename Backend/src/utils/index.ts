const bcrypt =  require("bcrypt");

const jwt = require('jsonwebtoken')
const ACCESS_TOKEN = process.env.ACCESS_TOKEN
export function GenerateSignature(payload: object) {
  try {
    return jwt.sign(payload, ACCESS_TOKEN, {expiresIn: '30d'})
  }catch (e) {
    console.log(e)
    return false
  }
}


export async function GenerateHashedPassword(password: string) {
  const salt= 10
  try {
    return bcrypt.hash(password, salt)
  }catch (error) {
    console.log(error)
    return error
  }
}