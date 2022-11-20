import { useSession, signIn, signOut } from "next-auth/react"

export default function LoginBtn() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="text-white">

        <p className="text-white text-3xl">Signed in as {session.user?.email} <br /></p>
        <button onClick={() => signOut()} className="text-white bg-slate-50">Sign out</button>
      </div>
    )
  }
  return (
    <div className="flex flex-col text-white gap-4">
      <div className="text-2xl text-white">
      Not signed in <br />
      </div>
      <button onClick={() => signIn()} className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20">Sign in</button>
    </div>
  )
}