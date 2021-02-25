const { User } = require('../models/User')

let auth = (req, res, next) => {
    // Compute validation
    // Get token from client cookie
    let token = req.cookies.x_auth;

    // Decode token and find the user
    User.findByToken(token, (err, user) => {
        if(err) throw err;
        if(!user) return res.json({ isAuth: false, error: true })

        req.token = token;
        req.user = user;
        next()
    })

    // If user exists, validation is true
    // If user does not exist, validation is false
}

module.exports = { auth }