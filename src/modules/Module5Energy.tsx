import { Zap, Sun, TrendingUp } from 'lucide-react';

export default function Module5Energy() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Zap className="w-7 h-7 text-blue-600" />
          Energía y sostenibilidad
        </h2>

        <div className="border border-green-200 rounded-xl p-5 bg-gradient-to-br from-green-50 to-emerald-50 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <Sun className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-green-900">RURAL-GOV-ENERGY</h3>
              <p className="text-xs text-green-700">Prefactibilidad — MONTEMOLIN-AIHUB</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 border border-green-100 text-center">
              <Sun className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
              <p className="text-xs text-slate-500 mb-1">Escenario fotovoltaico</p>
              <p className="text-2xl font-bold text-green-700">25 MWp</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-green-100 text-center">
              <TrendingUp className="w-8 h-8 text-blue-500 mx-auto mb-2" />
              <p className="text-xs text-slate-500 mb-1">Producción modelizada</p>
              <p className="text-2xl font-bold text-blue-700">41.250 MWh/año</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-green-100 text-center">
              <Zap className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <p className="text-xs text-slate-500 mb-1">Inversión estimada</p>
              <p className="text-2xl font-bold text-purple-700">22,24 M€</p>
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <div className="bg-slate-100 px-4 py-3 border-b border-gray-200">
            <h4 className="text-sm font-bold text-slate-700">Parámetros del modelo</h4>
          </div>
          <div className="divide-y divide-gray-100">
            {[
              { param: 'Potencia pico', value: '25 MWp' },
              { param: 'Horas sol equivalentes', value: '~1.650 h/año' },
              { param: 'Factor rendimiento (PR)', value: '~80%' },
              { param: 'Producción neta', value: '41.250 MWh/año' },
              { param: 'CAPEX', value: '22,24 M€' },
              { param: 'OPEX', value: '~0,4-0,6% CAPEX/año' },
              { param: 'Vida útil', value: '25-30 años' },
            ].map((row, i) => (
              <div key={i} className="flex items-center justify-between px-4 py-3 text-sm">
                <span className="text-slate-700">{row.param}</span>
                <span className="font-mono font-bold text-slate-800">{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
