import { useState } from "react";
import { CheckCircle, XCircle, Clock } from "lucide-react";

type Transfer = {
  id: number;
  source: string;
  date: string;
  status: "Wykonane" | "No-show" | "Oczekujące";
};

export default function DriverDashboard() {
  const [transfers, setTransfers] = useState<Transfer[]>([
    { id: 1, source: "Get-e", date: "2025-08-05", status: "Wykonane" },
    { id: 2, source: "ElifeLimo", date: "2025-08-06", status: "Oczekujące" },
    { id: 3, source: "Gr8way", date: "2025-08-06", status: "No-show" },
  ]);

  const updateStatus = (id: number, status: Transfer["status"]) => {
    setTransfers((prev) =>
      prev.map((t) => (t.id === id ? { ...t, status } : t))
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">🚗 Panel Kierowcy</h1>

      <div className="bg-white shadow rounded-xl p-4">
        <h2 className="text-xl font-semibold mb-4">Dzisiejsze transfery</h2>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2">ID</th>
              <th className="p-2">Źródło</th>
              <th className="p-2">Data</th>
              <th className="p-2">Status</th>
              <th className="p-2">Akcja</th>
            </tr>
          </thead>
          <tbody>
            {transfers.map((t) => (
              <tr key={t.id} className="border-b hover:bg-gray-50">
                <td className="p-2">{t.id}</td>
                <td className="p-2">{t.source}</td>
                <td className="p-2">{t.date}</td>
                <td className="p-2">
                  {t.status === "Wykonane" && (
                    <span className="flex items-center text-green-600">
                      <CheckCircle className="w-5 h-5 mr-1" /> Wykonane
                    </span>
                  )}
                  {t.status === "No-show" && (
                    <span className="flex items-center text-red-600">
                      <XCircle className="w-5 h-5 mr-1" /> No-show
                    </span>
                  )}
                  {t.status === "Oczekujące" && (
                    <span className="flex items-center text-yellow-600">
                      <Clock className="w-5 h-5 mr-1" /> Oczekujące
                    </span>
                  )}
                </td>
                <td className="p-2 space-x-2">
                  <button
                    onClick={() => updateStatus(t.id, "Wykonane")}
                    className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded"
                  >
                    ✅
                  </button>
                  <button
                    onClick={() => updateStatus(t.id, "No-show")}
                    className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded"
                  >
                    ❌
                  </button>
                  <button
                    onClick={() => updateStatus(t.id, "Oczekujące")}
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-2 py-1 rounded"
                  >
                    ⏳
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
