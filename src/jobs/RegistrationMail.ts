import Mail from '~/lib/Mail'
import { BullJobs } from './'

interface RegistrationMailData {
  name: string
  email: string
  password: string
}

const RegistrationMail: BullJobs<{user:RegistrationMailData}> = {
  key: 'RegistrationMail',
  async handle({data}) {
    const { user } = data

    await Mail.sendMail({
      from: 'Queue test <queuelist@queue.com.br>',
      to: `${user.name} <${user.email}>`,
      subject: "Novo cadastro",
      html: `Olá, ${user.name}, bem-vindo ao sistema de filas`
    })
  }
}
export default RegistrationMail