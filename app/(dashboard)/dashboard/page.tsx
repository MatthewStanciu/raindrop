import { redirect } from 'next/navigation'
import { authOptions } from '../../../lib/auth'
import { getCurrentUser } from '../../../lib/session'

export default async function DashboardPage() {
  const user = await getCurrentUser()

  if (!user) {
    //@ts-ignore
    redirect(authOptions.pages.signIn)
  }

  return (
    <div>
      <p>name: {user.name}</p>
      <p>email: {user.email}</p>
      <p>image: {user.image}</p>
    </div>
  )
}
