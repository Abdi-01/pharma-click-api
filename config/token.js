const jwt = require('jsonwebtoken')

module.exports = {
    createToken: (payload) => {
        return jwt.sign(payload, "ikea$", {
            expiresIn: '12h'
        })
    },
    readToken: (req, res, next) => {
        jwt.verify(req.token, "ikea$", (err, decoded) => {
            if (err) {
                return res.status(401).send("User not authorized")
            }
            req.user = decoded
            next()
        })
    }
}