import React from 'react'

import { MenuItem } from '@material-ui/core'

import { Option } from './types'

import { Field } from 'formik'
import { TextField } from 'formik-material-ui'

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
    {options.map(option => (
      <MenuItem key={option.value} value={option.value}>
        {option.label}
      </MenuItem>
    ))}
  </Field>
)

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
