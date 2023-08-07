'use client'

import { ChangeEvent, useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import {
  name_validation,
  email_validation,
  subject_validation,
  message_validation,
} from './utils/inputValidation'

import { sendContactForm } from '@/lib/api'
import Input from './Input'

const initValues = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

const initState = { values: initValues }

const Form = () => {
  const methods = useForm()
  const [success, setSuccess] = useState<boolean | null>(null)

  const [formState, setFormState] = useState<{
    values: { name: string; email: string; subject: string; message: string }
  }>(initState)

  const { values } = formState

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [event.target.name]: event.target.value,
      },
    }))
  }

  const onSubmit = methods.handleSubmit(async (data) => {
    await sendContactForm(data)
      .then(() => {
        methods.reset()
        setSuccess(true)
      })
      .catch(() => setSuccess(false))
  })

  return (
    <>
      <FormProvider {...methods}>
        <form
          action="#"
          method="POST"
          onSubmit={(e) => e.preventDefault()}
          className="pt-8 sm:pt-14 lg:pt-18"
        >
          <div className="grid grid-cols-3 gap-6 mx-auto">
            {/* Name */}
            <Input
              {...name_validation}
              span={1}
              value={values.name}
              handleChange={() => handleChange}
            />
            {/* Email */}
            <Input
              {...email_validation}
              span={2}
              value={values.email}
              handleChange={() => handleChange}
            />
            {/* Subject */}
            <Input
              {...subject_validation}
              span={3}
              value={values.subject}
              handleChange={() => handleChange}
            />
            {/* Message */}
            <Input
              {...message_validation}
              textarea
              span={3}
              value={values.message}
              handleChange={() => handleChange}
            />
            {/* Submit button */}
            <div className="flex flex-col justify-center sm:justify-end col-start-1 col-span-3 sm:col-start-3 sm:col-span-1">
              <button
                onClick={onSubmit}
                className="flex items-center font-semibold shadow-sm gap-2 px-6 py-2.5 text-lg justify-center bg-night dark:bg-white text-white dark:text-night hover:bg-marian dark:hover:bg-madder dark:hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-night dark:focus-visible:outline-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
                Send message
              </button>
              {success ? (
                <p className="flex justify-end gap-1 mt-3 font-semibold text-marian dark:text-white">
                  submitted!
                </p>
              ) : (
                <p className="flex justify-end gap-1 mt-3 font-semibold text-madder dark:text-white">
                  something went wrong, try again later
                </p>
              )}
            </div>
          </div>
        </form>
      </FormProvider>
    </>
  )
}

export default Form
