import React, { forwardRef } from 'react'
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom'

const AdapterLink = forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props
  return <RouterLink ref={ref} to={href} {...other} />
})

AdapterLink.displayName = 'AdapterLink'

export default AdapterLink
