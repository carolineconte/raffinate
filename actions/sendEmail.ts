'use server'
import React from "react"
import { Resend } from "resend"
import ContactFormEmail from "../email/contact-form"

const resend = new Resend(process.env.RESEND_API_KEY)

const validateString = (value: unknown) => {
  if (!value || typeof value !== 'string') {
    return false
  }
  return true
}

const getErrorMessage = (error: unknown): string => {
  let message: string;

  if (error instanceof Error) {
    message = error.message
  } else if (error && typeof error === 'object' && 'message' in error) {
    message = String(error.message)
  } else if (typeof error === 'string') {
    message = error
  } else {
    message = 'Something went wrong!'
  }
  return message;
}

export const sendEmail = async (formData: FormData) => {
  const senderName = formData.get('senderName')
  const senderEmail = formData.get('senderEmail')
  const message = formData.get('message')

  if (!validateString(senderEmail)) {
    return {
      error: 'Invalid sender email'
    }
  }

  if (!validateString(message)) {
    return {
      error: 'Invalid message'
    }
  }
let data;
  try {
    data = await resend.emails.send({
      from: 'Contato site <onboarding@resend.dev>',
      to: 'mailto:raffinateodontologia@gmail.com',
      subject: `Contato de: ${senderName}`,
      reply_to: senderEmail as string,
      // text: `Nome: ${senderName} - ${message}`,
      react: React.createElement(ContactFormEmail,{
        message: message as string,
        senderEmail: senderEmail as string
      }) 
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error)
    }
  }
  return{data}
}
