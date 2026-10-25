import { Globe, FileText, Users, CheckCircle } from 'lucide-react';

export default function Module8European() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Globe className="w-7 h-7 text-blue-600" />
          Cooperación europea
        </h2>

        <div className="border border-blue-200 rounded-xl p-5 bg-blue-50 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-900">MONTEMOLIN-AIHUB</h3>
              <p className="text-xs text-blue-700">Programa I3 — Innovación Industrial</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-blue-100">
              <p className="text-xs text-slate-500 mb-1">Convocatoria</p>
              <p className="text-lg font-bold text-blue-800">I3-2026-INV2a</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-blue-100">
              <p className="text-xs text-slate-500 mb-1">Referencia SEP</p>
              <p className="text-lg font-bold font-mono text-blue-800">SEP-211421662</p>
            </div>
          </div>
        </div>

        <div className="space-y-2 mb-6">
          {[
            { label: 'Documento de propuesta', status: 'En revisión', icon: FileText, color: 'yellow' },
            { label: 'Financiación', status: 'No acreditada', icon: CheckCircle, color: 'red' },
            { label: 'Consorcio', status: 'No confirmado', icon: Users, color: 'red' },
            { label: 'Participación MERLIN-Edged', status: 'No acordada', icon: Users, color: 'red' },
            { label: 'Elegibilidad', status: 'Pendiente', icon: CheckCircle, color: 'slate' },
          ].map((item, i) => {
            const Icon = item.icon;
            const colorMap: Record<string, string> = {
              yellow: 'bg-yellow-50 border-yellow-200 text-yellow-700',
              red: 'bg-red-50 border-red-200 text-red-700',
              slate: 'bg-slate-50 border-slate-200 text-slate-600',
            };
            const iconColor: Record<string, string> = {
              yellow: 'text-yellow-500',
              red: 'text-red-500',
              slate: 'text-slate-400',
            };
            return (
              <div key={i} className={`flex items-center justify-between p-3 rounded-lg border ${colorMap[item.color]}`}>
                <div className="flex items-center gap-2">
                  <Icon className={`w-4 h-4 ${iconColor[item.color]}`} />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
                <span className="text-sm font-bold">{item.status}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
