import Header from "../components/Header";

export default function EventsPage() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-800">Upcoming Events</h1>
        <p className="mt-4 text-lg text-gray-600">
          Join us for networking, workshops, and reunions.
        </p>
        <div className="mt-8">
          {/* Event listings will go here */}
          <p className="text-gray-500">Event listings coming soon...</p>
        </div>
      </main>
    </div>
  );
}
