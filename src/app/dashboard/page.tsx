import Link from "next/link";

export default function Dashboard() {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1> This is our Dashboard page</h1>
        <Link href="/">Home</Link>
      </main>
    )
  }