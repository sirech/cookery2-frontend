import React from 'react'

import { IconButton, CardHeader } from '@mui/material'

import { Add as AddIcon } from '@mui/icons-material'

interface Props {
  title: string
  testid: string
  onClick: () => void
}

const HeaderWithButton: React.FC<Props> = ({
  title,
  testid,
  onClick,
}: Props) => (
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
