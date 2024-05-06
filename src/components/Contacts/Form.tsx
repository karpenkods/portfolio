'use client'
import { FC } from 'react'
import { useFormik } from 'formik'
import { send } from '@emailjs/browser'
import { useTranslations } from 'next-intl'

import { Button, Stack, TextField } from '@mui/material'

import { IFormValues, formSchema, useAppDispatch } from '@/common'
import { pushSuccessNotification, pushDangerNotification } from '@/store'

export const Form: FC = () => {
  const t = useTranslations('contacts')
  const v = useTranslations('validation')
  const dispatch = useAppDispatch()

  const formik = useFormik<IFormValues>({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    validationSchema: formSchema(v),
    onSubmit: (values) => {
      formik.setSubmitting(true)
      sendEmail(values)
    }
  })

  const sendEmail = (values: IFormValues) => {
    send(
      process.env.NEXT_PUBLIC_SERVICE_ID ?? '',
      process.env.NEXT_PUBLIC_TEMPLATE_ID ?? '',
      {
        name: values.name,
        email: values.email,
        message: values.message
      },
      process.env.NEXT_PUBLIC_PUBLIC_KEY
    )
      .then(() => {
        formik.resetForm()
        formik.setSubmitting(false)
        dispatch(pushSuccessNotification(t('send-success')))
      })
      .catch(() => {
        formik.setSubmitting(false)
        dispatch(pushDangerNotification(t('send-error')))
      })
  }

  return (
    <Stack gap="16px">
      <TextField
        placeholder={t('name')}
        type="text"
        name="name"
        size="small"
        fullWidth
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur('name')}
        error={Boolean(formik.errors.name) && formik.touched.name}
        helperText={formik.errors.name && formik.touched.name ? formik.errors.name : ' '}
      />

      <TextField
        placeholder={t('email')}
        type="email"
        name="email"
        size="small"
        fullWidth
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur('email')}
        error={Boolean(formik.errors.email) && formik.touched.email}
        helperText={formik.errors.email && formik.touched.email ? formik.errors.email : ' '}
      />
      <TextField
        placeholder={t('message')}
        type="text"
        name="message"
        minRows={3}
        fullWidth
        multiline
        value={formik.values.message}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur('message')}
        error={Boolean(formik.errors.message) && formik.touched.message}
        helperText={formik.errors.message && formik.touched.message ? formik.errors.message : ' '}
        sx={{
          '& .MuiOutlinedInput-root': {
            p: '16px',
            height: '100%'
          }
        }}
      />
      <Button
        onClick={() => formik.submitForm()}
        disabled={formik.isSubmitting}
        sx={{
          alignSelf: 'center',
          padding: '8px 16px',
          fontSize: 18,
          border: '2px solid rgba(192, 192, 192, 0.56)',
          borderRadius: '12px',
          boxShadow: 'none'
        }}
      >
        {t('send')}
      </Button>
    </Stack>
  )
}
