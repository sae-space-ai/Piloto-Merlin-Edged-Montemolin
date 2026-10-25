import { useState, useMemo } from 'react';
import { Calculator, Download } from 'lucide-react';

interface CostItem {
  id: string;
  label: string;
  value: number;
  unit: string;
  category: string;
}

const initialCosts: CostItem[] = [
  { id: 'personal_tecnico', label: 'Personal técnico', value: 45000, unit: '€/mes', category: 'personal' },
  { id: 'personal_gestion', label: 'Gestión de proyecto', value: 25000, unit: '€/mes', category: 'personal' },
  { id: 'ingenieria_diseno', label: 'Ingeniería y diseño', value: 60000, unit: '€', category: 'ingenieria' },
  { id: 'ingenieria_integracion', label: 'Integración y pruebas', value: 40000, unit: '€', category: 'ingenieria' },
  { id: 'eval_proveedores', label: 'Evaluación proveedores', value: 15000, unit: '€', category: 'evaluacion' },
  { id: 'pruebas_tecnicas', label: 'Pruebas técnicas', value: 25000, unit: '€', category: 'pruebas' },
  { id: 'infra_cloud', label: 'Infraestructura cloud', value: 8000, unit: '€/mes', category: 'infra' },
  { id: 'infra_hardware', label: 'Hardware especializado', value: 35000, unit: '€', category: 'infra' },
  { id: 'seguridad_audit', label: 'Auditoría seguridad', value: 20000, unit: '€', category: 'seguridad' },
  { id: 'seguridad_cumplimiento', label: 'Cumplimiento normativo', value: 12000, unit: '€', category: 'seguridad' },
  { id: 'contingencia', label: 'Contingencia (15%)', value: 0, unit: '€', category: 'contingencia' },
];

export default function Module7Simulator() {
  const [costs, setCosts] = useState<CostItem[]>(initialCosts);
  const [precioComercial, setPrecioComercial] = useState(450000);
  const [months, setMonths] = useState(3);

  const updateCost = (id: string, value: number) => {
    setCosts(costs.map(c => c.id === id ? { ...c, value } : c));
  };

  const totals = useMemo(() => {
    const personalMonthly = costs.filter(c => c.unit === '€/mes').reduce((sum, c) => sum + c.value, 0);
    const fixedCosts = costs.filter(c => c.unit === '€').reduce((sum, c) => sum + c.value, 0);
    const totalPersonal = personalMonthly * months;
    const subtotal = totalPersonal + fixedCosts;
    const contingency = Math.round(subtotal * 0.15);
    const total = subtotal + contingency;
    const margen = precioComercial - total;
    const margenPct = precioComercial > 0 ? (margen / precioComercial) * 100 : 0;

    return { totalPersonal, fixedCosts, subtotal, contingency, total, margen, margenPct };
  }, [costs, months, precioComercial]);

  const exportCSV = () => {
    const rows = [
      ['Concepto', 'Valor', 'Unidad', 'Categoría'],
      ...costs.map(c => [c.label, c.value.toString(), c.unit, c.category]),
      ['SUBTOTAL', totals.subtotal.toString(), '€', ''],
      ['Contingencia (15%)', totals.contingency.toString(), '€', ''],
      ['TOTAL', totals.total.toString(), '€', ''],
      ['Precio comercial', precioComercial.toString(), '€', ''],
      ['Margen bruto', totals.margen.toString(), '€', ''],
      ['Margen %', totals.margenPct.toFixed(1) + '%', '', ''],
    ];
    const csv = rows.map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'simulador.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Calculator className="w-7 h-7 text-blue-600" />
          Simulador económico
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <label className="text-xs font-medium text-slate-600 block mb-1">Duración (meses)</label>
            <input
              type="number"
              min={1}
              max={12}
              value={months}
              onChange={(e) => setMonths(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <label className="text-xs font-medium text-slate-600 block mb-1">Precio comercial (€)</label>
            <input
              type="number"
              min={0}
              step={10000}
              value={precioComercial}
              onChange={(e) => setPrecioComercial(Math.max(0, parseInt(e.target.value) || 0))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="space-y-2 mb-6">
          {costs.map(cost => (
            <div key={cost.id} className="flex items-center gap-3 bg-gray-50 rounded-lg p-2.5 border border-gray-100">
              <span className="text-sm text-slate-700 flex-1">{cost.label}</span>
              <input
                type="number"
                min={0}
                step={1000}
                value={cost.value}
                onChange={(e) => updateCost(cost.id, Math.max(0, parseInt(e.target.value) || 0))}
                className="w-28 px-2 py-1 border border-gray-300 rounded text-sm text-right font-mono focus:ring-2 focus:ring-blue-500"
              />
              <span className="text-xs text-slate-400 w-12">{cost.unit}</span>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl p-6 text-white">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Personal ({months}m)</span>
                <span className="font-mono">{totals.totalPersonal.toLocaleString('es-ES')} €</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Costes fijos</span>
                <span className="font-mono">{totals.fixedCosts.toLocaleString('es-ES')} €</span>
              </div>
              <div className="flex justify-between text-sm border-t border-slate-600 pt-2">
                <span className="text-slate-300">Subtotal</span>
                <span className="font-mono">{totals.subtotal.toLocaleString('es-ES')} €</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Contingencia</span>
                <span className="font-mono">{totals.contingency.toLocaleString('es-ES')} €</span>
              </div>
              <div className="flex justify-between border-t border-slate-600 pt-2">
                <span className="font-bold">TOTAL</span>
                <span className="font-mono font-bold text-blue-300">{totals.total.toLocaleString('es-ES')} €</span>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Precio comercial</span>
                <span className="font-mono">{precioComercial.toLocaleString('es-ES')} €</span>
              </div>
              <div className="flex justify-between border-t border-slate-600 pt-2">
                <span className="text-slate-300">Margen</span>
                <span className={`font-mono font-bold ${totals.margen >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {totals.margen.toLocaleString('es-ES')} €
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-300">Margen %</span>
                <span className={`font-mono font-bold ${totals.margenPct >= 0 ? 'text-green-400' : 'text-red-400'}`}>
                  {totals.margenPct.toFixed(1)}%
                </span>
              </div>
              <div className="mt-3">
                <div className="w-full bg-slate-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full transition-all ${totals.margenPct >= 20 ? 'bg-green-500' : totals.margenPct >= 0 ? 'bg-yellow-500' : 'bg-red-500'}`}
                    style={{ width: `${Math.min(100, Math.max(0, totals.margenPct))}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-end">
          <button
            onClick={exportCSV}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            <Download className="w-4 h-4" /> Exportar CSV
          </button>
        </div>
      </div>
    </div>
  );
}
