import React from 'react'

import { IconButton, CardHeader } from '@material-ui/core'

import AddIcon from '@material-ui/icons/Add'

interface Props {
  title: string
  testid: string
  onClick: () => void
}

const HeaderWithButton = ({ title, testid, onClick }: Props) => (
  <CardHeader
    title={title}
    action={
      <IconButton
        data-testid={testid}
        edge="start"
        color="secondary"
        onClick={onClick}
      >
        <AddIcon />
      </IconButton>
    }
  />
)

export default HeaderWithButton
