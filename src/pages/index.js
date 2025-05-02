export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center px-4">
      <div className="text-center text-white space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold animate-pulse">
          🚧 Site is under some serious revamp 🚀
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 max-w-xl mx-auto">
          We’re working on something amazing. Hang tight while we give this site
          a brand-new look!
        </p>
        <div className="mt-10">
          <span className="inline-block animate-bounce text-yellow-400 text-4xl">
            👷‍♂️
          </span>
        </div>
      </div>
    </main>
  );
}
