'use client'

import { useForm, ValidationError } from '@formspree/react'
import Button from '../Button'

const Form = () => {
  const [state, handleSubmit] = useForm('mgejaeoe')
  if (state.succeeded) {
    return <p>Thanks for the message!</p>
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto">
      <div className="relative grid grid-cols-3 gap-4">
        {/* Name */}
        <div className="flex flex-col col-span-full lg:col-span-1">
          <label
            htmlFor="name"
            className="relative text-lg font-medium text-white leading-8 capitalize z-10"
          >
            Name
          </label>
          <input
            id="name"
            type="name"
            name="name"
            className="block w-full border-2 border-night-dark px-3.5 py-2 text-white bg-night rounded-lg mt-1"
          />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        {/* Email */}
        <div className="flex flex-col col-span-full lg:col-span-2">
          <label
            htmlFor="email"
            className="relative text-lg font-medium text-white leading-8 capitalize z-10"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="block w-full border-2 border-night-dark px-3.5 py-2 text-white bg-night rounded-lg mt-1"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        {/* Subject */}
        <div className="flex flex-col col-span-full">
          <label
            htmlFor="subject"
            className="relative text-lg font-medium text-white leading-8 capitalize z-10"
          >
            Subject
          </label>
          <input
            id="subject"
            type="subject"
            name="subject"
            className="block w-full border-2 border-night-dark px-3.5 py-2 text-white bg-night rounded-lg mt-1"
          />
          <ValidationError
            prefix="Subject"
            field="subject"
            errors={state.errors}
          />
        </div>

        {/* Message */}
        <div className="flex flex-col col-span-full">
          <label
            htmlFor="message"
            className="relative text-lg font-medium text-white leading-8 capitalize z-10"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="block w-full border-2 border-night-dark px-3.5 py-2 text-white bg-night rounded-lg mt-1"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>
      </div>
      {/* Submit */}
      <div className="flex justify-center mx-auto mt-8">
        <Button
          label="Send message"
          mode="primary"
          size="large"
          type="submit"
          disabled={state.submitting}
        />
      </div>
    </form>
  )
}

export default Form
