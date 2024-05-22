'use server'
import React from 'react'; // Ensure React is imported
import { error } from "console"
import { Resend } from "resend"
import { renderToString } from 'react-dom/server';
import { EmailTemplate } from '@/components/email-template';


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

    const emailContent = renderToString(
      <EmailTemplate firstName={senderEmail as string} email={senderEmail as string} msg={message as string} />
    );

    data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      // to: 'raffinateoddontologia@gmail.com',
      to: 'carolinecontee@gmail.com',
      subject: `Contato de ${senderName} - SITE`,
      reply_to: senderEmail as string,
      text:  emailContent,
    })
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error)
    }
  }
  return { data }
}
