import Header from "../components/Header";

export default function MentorshipPage() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-800">Mentorship Program</h1>
        <p className="mt-4 text-lg text-gray-600">
          Connect with students and recent graduates to offer guidance and support.
        </p>
        <div className="mt-8">
          {/* Mentorship connection UI will go here */}
          <p className="text-gray-500">Mentorship features coming soon...</p>
        </div>
      </main>
    </div>
  );
}
