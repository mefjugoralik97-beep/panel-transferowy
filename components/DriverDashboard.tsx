import { CalendarDays, MapPin, Bell } from "lucide-react";

export default function DriverDashboard() {
  const stats = [
    { title: "Dzisiejsze transfery", value: 5, icon: CalendarDays, color: "bg-blue-100 text-blue-600" },
    { title: "Wykonane", value: 3, icon: MapPin, color: "bg-green-100 text-green-600" },
    { title: "Oczekujące", value: 2, icon: Bell, color: "bg-yellow-100 text-yellow-600" },
  ];

  const upcomingTransfers = [
    { time: "10:30", from: "Lotnisko Chopina", to: "Hotel Marriott", source: "Get-e" },
    { time: "12:15", from: "Hotel Hilton", to: "Dworzec Centralny", source: "ElifeLimo" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h1 className="text-xl font-bold mb-6">🚖 Panel Kierowcy</h1>
        <nav className="space-y-2">
          <a href="#" className="block px-4 py-2 rounded hover:bg-blue-50">Dashboard</a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-blue-50">Historia</a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-blue-50">Zgłoś problem</a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-blue-50">Profil</a>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-semibold mb-6">Podsumowanie dnia</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-4 flex items-center">
              <div className={`p-3 rounded-lg ${item.color}`}>
                <item.icon className="w-6 h-6" />
              </div>
              <div className="ml-4">
                <p className="text-gray-500">{item.title}</p>
                <p className="text-2xl font-bold">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming transfers */}
        <h3 className="text-xl font-semibold mt-8 mb-4">Nadchodzące transfery</h3>
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 text-left text-gray-600">Godzina</th>
                <th className="p-3 text-left text-gray-600">Z</th>
                <th className="p-3 text-left text-gray-600">Do</th>
                <th className="p-3 text-left text-gray-600">Źródło</th>
              </tr>
            </thead>
            <tbody>
              {upcomingTransfers.map((t, idx) => (
                <tr key={idx} className="border-b hover:bg-gray-50">
                  <td className="p-3">{t.time}</td>
                  <td className="p-3">{t.from}</td>
                  <td className="p-3">{t.to}</td>
                  <td className="p-3">{t.source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
