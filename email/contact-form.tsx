import React from 'react'
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text
} from '@react-email/components'
import { Tailwind } from '@react-email/tailwind'

type ContactFormProps = {
  message: string;
  senderEmail: string;
}

export default function ContactFormEmail({ message, senderEmail }: ContactFormProps) {
  return (
    <Html>
      <Head />
      <Preview>Mensagem de um cliente através do site</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Section>
              <Heading>
                Voce recebeu a seguinte mensagem através do site:
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>O email do cliente: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}