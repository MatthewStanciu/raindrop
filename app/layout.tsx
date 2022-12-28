import type { PropsWithChildren } from 'react'
import '../styles/globals.css'

function Layout({ children }: PropsWithChildren<{}>) {
  return (
    <html
      lang="en-US"
      // className={clsx(relativePro.variable, relativeMono.variable)}
    >
      <head />
      <body>{children}</body>
    </html>
  )
}

export default Layout
