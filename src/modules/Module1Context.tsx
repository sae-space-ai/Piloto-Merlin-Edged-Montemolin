import { Building2, AlertTriangle, Info, ExternalLink } from 'lucide-react';

export default function Module1Context() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-2">
          <Building2 className="w-7 h-7 text-blue-600" />
          Módulo 1 — Contexto
        </h2>
        <p className="text-slate-600 mb-6">
          Campus proyectados en Extremadura según comunicaciones corporativas de 2025.
          Los datos se presentan como <strong>anunciados</strong>, no como capacidad instalada ni contratada.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Navalmoral */}
          <div className="border border-blue-200 rounded-xl p-5 bg-blue-50">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-blue-900">Navalmoral de la Mata</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 border border-blue-100">
                <p className="text-sm font-medium text-slate-700">Capacidad proyectada</p>
                <p className="text-2xl font-bold text-blue-700">~1 GW IT</p>
                <p className="text-xs text-slate-500 mt-1">Según comunicaciones corporativas 2025</p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-yellow-800">Estado: En tramitación administrativa</p>
                    <p className="text-xs text-yellow-700 mt-1">
                      No es centro operativo acreditado. La madurez administrativa debe verificarse separadamente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Valdecaballeros */}
          <div className="border border-green-200 rounded-xl p-5 bg-green-50">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-green-900">Valdecaballeros</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 border border-green-100">
                <p className="text-sm font-medium text-slate-700">Capacidad proyectada</p>
                <p className="text-2xl font-bold text-green-700">~1 GW IT</p>
                <p className="text-xs text-slate-500 mt-1">Según comunicaciones corporativas 2025</p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                <div className="flex items-start gap-2">
                  <AlertTriangle className="w-4 h-4 text-yellow-600 mt-0.5 shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-yellow-800">Estado: Desarrollo anunciado</p>
                    <p className="text-xs text-yellow-700 mt-1">
                      Madurez administrativa que debe verificarse separadamente.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Avisos importantes */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h4 className="font-bold text-amber-800 mb-2">Avisos de transparencia</h4>
            <ul className="space-y-1 text-sm text-amber-700">
              <li>• La capacidad proyectada <strong>no</strong> se muestra como instalada ni contratada.</li>
              <li>• Ambos proyectos requieren verificación administrativa independiente.</li>
              <li>• MONTEMOLIN-AIHUB no acredita ni certifica el estado de estos proyectos.</li>
              <li>• Cualquier decisión de inversión requiere due diligence propio.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Fuentes */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-3 flex items-center gap-2">
          <Info className="w-5 h-5 text-blue-500" />
          Referencias y fuentes
        </h3>
        <div className="space-y-3">
          {[
            {
              title: 'Comunicados corporativos MERLIN Properties 2025',
              desc: 'Anuncios de desarrollo de campus de datos en Extremadura',
              type: 'Fuente primaria'
            },
            {
              title: 'Comunicados corporativos Edged Energy 2025',
              desc: 'Proyección de capacidad IT por emplazamiento',
              type: 'Fuente primaria'
            },
            {
              title: 'Registros administrativos públicos',
              desc: 'Tramitación de proyectos — estado verificable en boletines oficiales',
              type: 'Verificación independiente'
            },
          ].map((ref, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
              <ExternalLink className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-slate-700">{ref.title}</p>
                <p className="text-xs text-slate-500">{ref.desc}</p>
                <span className="inline-block mt-1 text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                  {ref.type}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
