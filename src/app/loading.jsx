export default function Loading() {
  return (
    <main className="min-h-screen bg-[#0b1220] px-6 py-24 text-white md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl animate-pulse">
        <div className="h-4 w-32 rounded bg-white/10" />
        <div className="mt-6 h-12 w-full max-w-2xl rounded bg-white/10" />
        <div className="mt-4 h-6 w-full max-w-3xl rounded bg-white/10" />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="h-56 rounded-[28px] bg-white/10" />
          <div className="h-56 rounded-[28px] bg-white/10" />
          <div className="h-56 rounded-[28px] bg-white/10" />
          <div className="h-56 rounded-[28px] bg-white/10" />
        </div>
      </div>
    </main>
  );
}
