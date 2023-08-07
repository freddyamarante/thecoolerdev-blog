import { motion } from 'framer-motion'

import { findInputError, isFormInvalid } from './utils'
import { useFormContext } from 'react-hook-form'

interface InputsProps {
  label: string
  type: string
  id: string
  name: string
  span: number
  textarea: boolean
  handleChange: () => void
}

const Inputs = ({
  label = 'label',
  type = 'text',
  id,
  name,
  span = 3,
  textarea = false,
  handleChange,
  ...props
}: InputsProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const inputError: any = findInputError(errors, label)
  const isInvalid = isFormInvalid(inputError)

  return (
    <div className={`col-span-${span}`} {...props}>
      <div className="flex flex-row">
        <label htmlFor={name} className="block text-md font-semibold leading-6">
          {label}
          {isInvalid && (
            <InputError
              message={inputError.error.message}
              key={inputError.error.message}
            />
          )}
        </label>
      </div>

      <div className="mt-1">
        {textarea ? (
          <textarea
            {...register(label, {
              required: {
                value: true,
                message: 'required',
              },
            })}
            name={name}
            id={id}
            onChange={handleChange}
            rows={6}
            className="block w-full border-2 border-night px-3.5 py-3 bg-transparent"
          />
        ) : (
          <input
            {...register(label, {
              required: {
                value: true,
                message: 'required',
              },
            })}
            type={type}
            name={name}
            id={id}
            onChange={handleChange}
            autoComplete="given-name"
            className="block w-full border-2 border-night px-3.5 py-3 bg-transparent shadow-sm ring-2 ring-inset ring-neutral ring-neutral-300 placeholder:text-neutral-400 sm:leading-6 "
          />
        )}
      </div>
    </div>
  )
}

const InputError = (message: any) => {
  return (
    <motion.span
      className="flex items-center ml-2 gap-1 text-red-600"
      {...framerError}
    >
      *{message}
    </motion.span>
  )
}

const framerError = {
  initial: { opacity: 0, x: 10 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 10 },
  transition: { duration: 0.2 },
}

export default Inputs
