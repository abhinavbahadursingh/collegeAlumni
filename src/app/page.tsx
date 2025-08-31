import Header from "./components/Header";

const DirectoryIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-5.197-5.983" />
  </svg>
);

const EventsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const MentorshipIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0v7" />
  </svg>
);


export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-6 py-12">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold text-white">
            Welcome to the <span className="text-accent">Alumni Portal</span>
          </h1>
          <p className="mt-4 text-lg text-light-text">
            Reconnect, network, and grow with your alma mater.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-card-bg rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <DirectoryIcon />
              <h2 className="ml-4 text-2xl font-bold text-white">Alumni Directory</h2>
            </div>
            <p className="text-dark-text">Find and connect with fellow alumni from various batches and departments.</p>
          </div>
          <div className="bg-card-bg rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <EventsIcon />
              <h2 className="ml-4 text-2xl font-bold text-white">Events</h2>
            </div>
            <p className="text-dark-text">Stay updated on the latest alumni events, reunions, and workshops.</p>
          </div>
          <div className="bg-card-bg rounded-lg shadow-lg p-8 transform hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <MentorshipIcon />
              <h2 className="ml-4 text-2xl font-bold text-white">Mentorship</h2>
            </div>
            <p className="text-dark-text">Guide current students and recent graduates in their career paths.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
