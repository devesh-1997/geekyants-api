const users = require('./../usersTable')


const controllers = {
  login: (req, res) => {
    res.send('user found')
  },
  signup: (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
      users.push({
        username,
        password
      })
      res.json({
        success: true,
        message: 'new user registered'
      })
    } else {
      res.json({
        success: false,
        message: 'missing or invalid details provided'
      })
    }
  },
  resetPassword: (req, res) => {
    const { username, newPassword } = req.body;
    let result = users.find(x => x.username === username);
    if (result) {
      result.password = newPassword;
      res.json({
        success: true,
        message: 'successfully reset password'
      })
    } else {
      res.json({
        success: false,
        message: 'no user with this username found'
      })
    }

  }
}

module.exports = controllers;