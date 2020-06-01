import React from 'react'

import { MenuItem } from '@material-ui/core'

import { Field } from 'formik'
import { TextField } from 'formik-material-ui'
import { Option } from './types'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const select = (
  id: string,
  options: Option[],
  { label = undefined }: { label?: string } = {}
) => (
  <Field
    id={id}
    name={id}
    label={label || id}
    type="text"
    variant="outlined"
    fullWidth
    component={TextField}
    select
  >
    {options.map((option) => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </Field>
)

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
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
    autoComplete="off"
    component={TextField}
  />
)

export default field
