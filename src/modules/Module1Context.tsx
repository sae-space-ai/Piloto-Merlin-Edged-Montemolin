import { Building2, ExternalLink } from 'lucide-react';

export default function Module1Context() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Building2 className="w-7 h-7 text-blue-600" />
          Contexto territorial
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="border border-blue-200 rounded-xl p-5 bg-blue-50">
            <h3 className="text-lg font-bold text-blue-900 mb-3">Navalmoral de la Mata</h3>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 border border-blue-100">
                <p className="text-xs text-slate-500">Capacidad proyectada</p>
                <p className="text-2xl font-bold text-blue-700">~1 GW IT</p>
                <p className="text-xs text-slate-400 mt-1">Comunicaciones corporativas 2025</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-blue-100">
                <p className="text-xs text-slate-500">Estado administrativo</p>
                <p className="text-sm font-semibold text-slate-700">En tramitación</p>
              </div>
            </div>
          </div>

          <div className="border border-green-200 rounded-xl p-5 bg-green-50">
            <h3 className="text-lg font-bold text-green-900 mb-3">Valdecaballeros</h3>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 border border-green-100">
                <p className="text-xs text-slate-500">Capacidad proyectada</p>
                <p className="text-2xl font-bold text-green-700">~1 GW IT</p>
                <p className="text-xs text-slate-400 mt-1">Comunicaciones corporativas 2025</p>
              </div>
              <div className="bg-white rounded-lg p-3 border border-green-100">
                <p className="text-xs text-slate-500">Estado administrativo</p>
                <p className="text-sm font-semibold text-slate-700">Desarrollo anunciado</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
          <ExternalLink className="w-5 h-5 text-blue-500" />
          Fuentes
        </h3>
        <div className="space-y-2">
          {[
            { title: 'Comunicados corporativos MERLIN Properties', date: '2025' },
            { title: 'Comunicados corporativos Edged Energy', date: '2025' },
            { title: 'Registros administrativos públicos', date: 'Verificable en boletines oficiales' },
          ].map((ref, i) => (
            <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <span className="text-sm text-slate-700">{ref.title}</span>
              <span className="text-xs text-slate-400">{ref.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
