import { redirect } from 'next/navigation'
import SignInButton from '../components/sign-in-button'
import { getCurrentUser } from '../lib/session'

async function Index() {
  const user = await getCurrentUser()
  if (user) {
    return redirect('/dashboard')
  }
  return (
    <div className="flex h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col gap-4 items-center justify-center px-20 text-center">
        <h1 className="text-4xl font-bold text-center">Raindrop 💧</h1>
        <div className="border-2 border-black bg-gray-200 p-4 rounded">
          <h1 className="text-xl text-center font-bold">What's this?</h1>
          <p>Free file storage for Purdue Hackers, powered by Cloudflare R2.</p>
        </div>
        <SignInButton />
      </main>
    </div>
  )
}

export default Index
