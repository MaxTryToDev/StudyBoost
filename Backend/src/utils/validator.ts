const bcrypt = require('bcrypt')

export const ValidatePassword = async (password: string , cryptedPassword: string) => {
  return await bcrypt.compare(password, cryptedPassword);
}