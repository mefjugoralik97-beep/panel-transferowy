import { Users, CalendarCheck, XCircle } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { title: "Kierowcy", value: 12, icon: Users, color: "bg-blue-100 text-blue-600" },
    { title: "Transfery dziś", value: 34, icon: CalendarCheck, color: "bg-green-100 text-green-600" },
    { title: "No-show (tydzień)", value: 2, icon: XCircle, color: "bg-red-100 text-red-600" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-4">
        <h1 className="text-xl font-bold mb-6">🚖 Panel Admin</h1>
        <nav className="space-y-2">
          <a href="#" className="block px-4 py-2 rounded hover:bg-blue-50">Dashboard</a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-blue-50">Transfery</a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-blue-50">Kierowcy</a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-blue-50">Pojazdy</a>
          <a href="#" className="block px-4 py-2 rounded hover:bg-blue-50">Raporty</a>
        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-semibold mb-6">Podsumowanie</h2>
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
      </main>
    </div>
  );
}
