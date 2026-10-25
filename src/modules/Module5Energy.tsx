import { Zap, AlertTriangle, Sun, TrendingUp } from 'lucide-react';

export default function Module5Energy() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-2">
          <Zap className="w-7 h-7 text-blue-600" />
          Módulo 5 — Energía y Sostenibilidad
        </h2>
        <p className="text-slate-600 mb-6">
          Análisis energético y eficiencia como componente de la propuesta exploratoria.
          RURAL-GOV-ENERGY es una iniciativa de prefactibilidad de MONTEMOLIN-AIHUB.
        </p>

        {/* Critical disclaimer */}
        <div className="bg-red-50 border-2 border-red-300 rounded-xl p-5 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-red-800 mb-2">Aviso crítico</h4>
              <ul className="space-y-1 text-sm text-red-700">
                <li>• <strong>No existe</strong> suministro eléctrico confirmado.</li>
                <li>• <strong>No existe</strong> PPA (Power Purchase Agreement) firmado.</li>
                <li>• <strong>No existe</strong> conexión acreditada a red.</li>
                <li>• <strong>No existe</strong> relación energética contractual con MERLIN–Edged.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* RURAL-GOV-ENERGY */}
        <div className="border border-green-200 rounded-xl p-5 bg-gradient-to-br from-green-50 to-emerald-50 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <Sun className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-green-900">RURAL-GOV-ENERGY</h3>
              <p className="text-xs text-green-700">Iniciativa de prefactibilidad — MONTEMOLIN-AIHUB</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 border border-green-100 text-center">
              <Sun className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <p className="text-xs text-slate-500 mb-1">Escenario fotovoltaico</p>
              <p className="text-2xl font-bold text-green-700">25 MWp</p>
              <p className="text-xs text-slate-500 mt-1">Potencia pico instalable</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-green-100 text-center">
              <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <p className="text-xs text-slate-500 mb-1">Producción modelizada</p>
              <p className="text-2xl font-bold text-blue-700">41.250 MWh/año</p>
              <p className="text-xs text-slate-500 mt-1">Estimación anual</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-green-100 text-center">
              <Zap className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <p className="text-xs text-slate-500 mb-1">Inversión estimada</p>
              <p className="text-2xl font-bold text-purple-700">22,24 M€</p>
              <p className="text-xs text-slate-500 mt-1">CAPEX orientativo</p>
            </div>
          </div>
        </div>

        {/* Additional warning */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
            <p className="text-xs text-amber-700">
              <strong>No comparar</strong> estas cifras directamente con la potencia IT de los campus sin distinguir unidades (MWp eléctricos vs. GW IT de computación),
              períodos (producción anual vs. potencia instantánea) y requisitos de suministro (factor de capacidad, redundancia, PUE).
            </p>
          </div>
        </div>

        {/* Analysis table */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-slate-100 px-4 py-3 border-b border-gray-200">
            <h4 className="text-sm font-bold text-slate-700">Parámetros del modelo energético (orientativos)</h4>
          </div>
          <div className="divide-y divide-gray-100">
            {[
              { param: 'Potencia pico', value: '25 MWp', note: 'Escenario proyectado' },
              { param: 'Horas de sol equivalentes', value: '~1.650 h/año', note: 'Zona Extremadura (estimación)' },
              { param: 'Factor de rendimiento (PR)', value: '~80%', note: 'Estándar industria' },
              { param: 'Producción neta estimada', value: '41.250 MWh/año', note: '25 × 1.650 × 0,80 ≈ 33.000 + ajustes' },
              { param: 'CAPEX estimado', value: '22,24 M€', note: '~0,89 €/Wp (referencia mercado 2024-2025)' },
              { param: 'OPEX estimado', value: '~0,4-0,6% CAPEX/año', note: 'Mantenimiento, seguros, monitorización' },
              { param: 'Vida útil esperada', value: '25-30 años', note: 'Paneles fotovoltaicos estándar' },
            ].map((row, i) => (
              <div key={i} className="flex items-center justify-between px-4 py-3 text-sm">
                <span className="text-slate-700 font-medium">{row.param}</span>
                <div className="text-right">
                  <span className="font-mono font-bold text-slate-800">{row.value}</span>
                  <p className="text-xs text-slate-400">{row.note}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
