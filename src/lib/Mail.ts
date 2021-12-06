import nodemailer from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import mail from "~/config/mail";

export default nodemailer.createTransport(mail);