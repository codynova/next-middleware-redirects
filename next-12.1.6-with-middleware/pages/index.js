import { useRouter } from "next/router"
import Link from "next/link"

export default function Home() {
  const router = useRouter()

  return (
    <>
      <h1>Next 12.1.6 with middleware</h1>

      <Link href="/test1">
        Go to Test1
      </Link>

      <br /><br />

      <button onClick={() => router.push('/test1')}>
        Go to Test1
      </button>
    </>
  )
}
