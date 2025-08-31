import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800">Welcome to the Alumni Portal</h1>
          <p className="mt-4 text-lg text-gray-600">
            Reconnect with classmates, expand your professional network, and stay engaged with your alma mater.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800">Alumni Directory</h2>
            <p className="mt-2 text-gray-600">Find and connect with fellow alumni from various batches and departments.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800">Events</h2>
            <p className="mt-2 text-gray-600">Stay updated on the latest alumni events, reunions, and workshops.</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800">Mentorship</h2>
            <p className="mt-2 text-gray-600">Guide current students and recent graduates in their career paths.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
