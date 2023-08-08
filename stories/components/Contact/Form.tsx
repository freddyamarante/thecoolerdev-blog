'use client'

import { useForm, ValidationError } from '@formspree/react'
import Button from '../Button'

const Form = () => {
  const [state, handleSubmit] = useForm('mgejaeoe')
  if (state.succeeded) {
    return <p>Thanks for the message!</p>
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-4xl">
      <div className="grid grid-cols-3 gap-4">
        {/* Name */}
        <div className="flex flex-col col-span-full lg:col-span-1">
          <label
            htmlFor="name"
            className="text-lg font-medium text-white leading-8 capitalize"
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
            className="text-lg font-medium text-white leading-8 capitalize"
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
            className="text-lg font-medium text-white leading-8 capitalize"
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
            className="text-lg font-medium text-white leading-8 capitalize"
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

        {/* Submit */}
        <div className="flex justify-start col-start-1 mt-2">
          <Button
            label="Send message"
            mode="primary"
            size="large"
            type="submit"
            disabled={state.submitting}
          />
        </div>
      </div>
    </form>
  )
}

export default Form
