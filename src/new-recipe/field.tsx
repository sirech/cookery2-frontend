import React from 'react'

import { Field } from 'formik'
import { TextField } from 'formik-material-ui'

const field = (
  id: string,
  { label = undefined, type = 'text' }: { label?: string; type?: string } = {}
) => (
  <Field
    id={id}
    name={id}
    label={label || id}
    type={type}
    variant="outlined"
    fullWidth
    component={TextField}
  />
)

export default field
