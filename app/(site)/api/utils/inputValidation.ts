export const name_validation = {
  name: 'name',
  label: 'name',
  type: 'text',
  id: 'name',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 30,
      message: '30 characters max',
    },
  },
}

export const email_validation = {
  name: 'email',
  label: 'email',
  type: 'email',
  id: 'email',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    pattern: {
      value:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      message: 'not valid',
    },
  },
}

export const subject_validation = {
  name: 'subject',
  label: 'subject',
  type: 'text',
  id: 'subject',
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 200,
      message: '200 characters max',
    },
  },
}

export const message_validation = {
  name: 'message',
  label: 'message',
  id: 'message',
  textarea: true,
  validation: {
    required: {
      value: true,
      message: 'required',
    },
    maxLength: {
      value: 3000,
      message: '3000 characters max',
    },
  },
}
