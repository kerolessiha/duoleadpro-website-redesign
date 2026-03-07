import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0b1220] px-6 text-white">
      <div className="max-w-2xl text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-blue-400">
          404 Error
        </p>
        <h1 className="mt-4 text-5xl font-semibold tracking-tight md:text-6xl">
          Page not found
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-300">
          The page you are looking for does not exist or may have been moved.
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            href="/"
            className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-slate-200"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </main>
  )
}