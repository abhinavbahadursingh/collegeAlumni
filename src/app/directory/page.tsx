import Header from "../components/Header";

export default function DirectoryPage() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-800">Alumni Directory</h1>
        <p className="mt-4 text-lg text-gray-600">
          Search and filter through the alumni network.
        </p>
        {/* Search and filter controls will go here */}
        <div className="mt-8">
          {/* Alumni cards will be rendered here */}
          <p className="text-gray-500">Directory content coming soon...</p>
        </div>
      </main>
    </div>
  );
}
