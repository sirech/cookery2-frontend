import React from 'react'
import { Link as RouterLink, LinkProps } from 'react-router-dom'

const AdapterLink = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (props, ref) => <RouterLink innerRef={ref} {...props} />
)
AdapterLink.displayName = 'AdapterLink'

export default AdapterLink
