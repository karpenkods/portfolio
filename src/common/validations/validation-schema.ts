import * as Yup from 'yup'

const name = (t: (value: string) => string) =>
  Yup.string().required(t('requered')).min(2, t('name-short')).max(200, t('name-long'))

const email = (t: (value: string) => string) =>
  Yup.string().email(t('wrong-email')).required(t('requered'))

const message = (t: (value: string) => string) =>
  Yup.string().required(t('requered')).min(2, t('message-short')).max(1000, t('message-long'))

//________________________________________________________________

export const formSchema = (t: (value: string) => string) =>
  Yup.object().shape({
    name: name(t),
    email: email(t),
    message: message(t)
  })
