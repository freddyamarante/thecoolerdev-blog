import { NextApiRequest, NextApiResponse } from 'next'
import { mailOptions, transporter } from './nodemailer-utils'

const CONTACT_MESSAGE_FIELDS: { [key: string]: string } = {
  name: 'Name',
  email: 'Email',
  subject: 'Subject',
  message: 'Message',
}

interface ContactData {
  name: string
  email: string
  subject: string
  message: string
}

const generateEmailContent = (data: ContactData) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) =>
      (str += `${CONTACT_MESSAGE_FIELDS[key]}: \n${val} \n \n`),
    ''
  )
  const htmlData = Object.entries(data).reduce((str, [key, val]) => {
    return (str += `<h3 class="form-heading" align="left">${CONTACT_MESSAGE_FIELDS[key]}</h3><p class="form-answer" align="left">${val}</p>`)
  }, '')

  return {
    text: stringData,
    html: `<!DOCTYPE html> ...`, // Your HTML content here
  }
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const data: ContactData = req.body
    if (!data || !data.name || !data.email || !data.subject || !data.message) {
      return res.status(400).send({ message: 'Bad request' })
    }

    try {
      await transporter.sendMail({
        ...mailOptions,
        ...generateEmailContent(data),
        subject: data.subject,
      })

      return res.status(200).json({ success: true })
    } catch (err: any) {
      console.log(err)
      return res.status(400).json({ message: err.message })
    }
  }
  return res.status(400).json({ message: 'Bad request' })
}

export default handler
