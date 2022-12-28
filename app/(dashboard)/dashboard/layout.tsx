import { notFound } from 'next/navigation'
import { getCurrentUser } from '../../../lib/session'

export default async function DashboardLayout({
  children
}: {
  children?: React.ReactNode
}) {
  const user = await getCurrentUser()

  if (!user) {
    return notFound()
  }

  return <div>{children}</div>
}
