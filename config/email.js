avar nodemailer = require('nodemailer')

var email = "profaloizio.3emia@gmail.com"
var senha = "prof1234$"

var transporter = nodemailer.createTransport({
    host:'smtp.gmail.com',
    port:'587',
    auth:{user:email,pass:senha}
})

module.exports = transporter
