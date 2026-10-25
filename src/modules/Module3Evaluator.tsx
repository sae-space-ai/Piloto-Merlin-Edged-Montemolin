import { useState } from 'react';
import { ClipboardCheck, Plus, Trash2 } from 'lucide-react';

type Status = 'sin_evaluar' | 'pendiente' | 'verificado';

interface Integrator {
  id: string;
  name: string;
  criteria: Record<string, Status>;
}

const criteriaList = [
  { id: 'necesidad', label: 'Necesidad identificada' },
  { id: 'interlocutor', label: 'Interlocutor responsable' },
  { id: 'capacidades', label: 'Capacidades técnicas' },
  { id: 'seguridad', label: 'Seguridad y permisos' },
  { id: 'viabilidad', label: 'Viabilidad económica' },
  { id: 'encaje', label: 'Encaje MERLIN–Edged' },
  { id: 'proximo_paso', label: 'Próximo paso acordado' },
];

const statusConfig: Record<Status, { label: string; color: string; bg: string }> = {
  sin_evaluar: { label: 'Sin evaluar', color: 'text-slate-600', bg: 'bg-slate-100 border-slate-300' },
  pendiente: { label: 'Pendiente', color: 'text-yellow-700', bg: 'bg-yellow-50 border-yellow-300' },
  verificado: { label: 'Verificado', color: 'text-green-700', bg: 'bg-green-50 border-green-300' },
};

const initialIntegrators: Integrator[] = [
  {
    id: '1',
    name: 'Integrador A',
    criteria: { necesidad: 'pendiente', interlocutor: 'sin_evaluar', capacidades: 'pendiente', seguridad: 'sin_evaluar', viabilidad: 'sin_evaluar', encaje: 'sin_evaluar', proximo_paso: 'sin_evaluar' },
  },
  {
    id: '2',
    name: 'Integrador B',
    criteria: { necesidad: 'verificado', interlocutor: 'pendiente', capacidades: 'verificado', seguridad: 'pendiente', viabilidad: 'sin_evaluar', encaje: 'sin_evaluar', proximo_paso: 'sin_evaluar' },
  },
];

export default function Module3Evaluator() {
  const [integrators, setIntegrators] = useState<Integrator[]>(initialIntegrators);
  const [newName, setNewName] = useState('');

  const addIntegrator = () => {
    if (!newName.trim()) return;
    const newInt: Integrator = {
      id: Date.now().toString(),
      name: newName.trim(),
      criteria: Object.fromEntries(criteriaList.map(c => [c.id, 'sin_evaluar' as Status])) as Record<string, Status>,
    };
    setIntegrators([...integrators, newInt]);
    setNewName('');
  };

  const removeIntegrator = (id: string) => {
    setIntegrators(integrators.filter(i => i.id !== id));
  };

  const updateStatus = (intId: string, critId: string, status: Status) => {
    setIntegrators(integrators.map(i =>
      i.id === intId ? { ...i, criteria: { ...i.criteria, [critId]: status } } : i
    ));
  };

  const getProgress = (int: Integrator) => {
    const verified = Object.values(int.criteria).filter(s => s === 'verificado').length;
    return Math.round((verified / criteriaList.length) * 100);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <ClipboardCheck className="w-7 h-7 text-blue-600" />
          Evaluador de integradores
        </h2>

        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Nombre del integrador"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
            aria-label="Nombre"
            onKeyDown={(e) => e.key === 'Enter' && addIntegrator()}
          />
          <button
            onClick={addIntegrator}
            className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" /> Añadir
          </button>
        </div>

        <div className="space-y-4">
          {integrators.map(int => (
            <div key={int.id} className="border border-gray-200 rounded-xl p-4 bg-gray-50">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-base font-bold text-slate-800">{int.name}</h3>
                  <div className="flex items-center gap-2 mt-1">
                    <div className="bg-gray-200 rounded-full h-1.5 w-24">
                      <div className="bg-green-500 h-1.5 rounded-full transition-all" style={{ width: `${getProgress(int)}%` }} />
                    </div>
                    <span className="text-xs text-slate-500">{getProgress(int)}%</span>
                  </div>
                </div>
                <button
                  onClick={() => removeIntegrator(int.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  aria-label="Eliminar"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid gap-1.5">
                {criteriaList.map(crit => (
                  <div key={crit.id} className="flex items-center justify-between bg-white rounded-lg p-2.5 border border-gray-100">
                    <span className="text-sm text-slate-700">{crit.label}</span>
                    <div className="flex gap-1">
                      {(['sin_evaluar', 'pendiente', 'verificado'] as Status[]).map(status => (
                        <button
                          key={status}
                          onClick={() => updateStatus(int.id, crit.id, status)}
                          className={`px-2 py-0.5 text-xs rounded border transition-all ${
                            int.criteria[crit.id] === status
                              ? statusConfig[status].bg + ' ' + statusConfig[status].color + ' font-semibold'
                              : 'bg-white text-slate-400 border-gray-200 hover:bg-gray-50'
                          }`}
                        >
                          {statusConfig[status].label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
