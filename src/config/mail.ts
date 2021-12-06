import SMTPConnection from "nodemailer/lib/smtp-connection"

const Mail: SMTPConnection.Options = {
  host: process.env.MAIL_HOST,
  port: Number(process.env.MAIL_PORT),
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
}

export default Mail 