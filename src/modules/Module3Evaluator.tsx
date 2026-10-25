import { useState } from 'react';
import { ClipboardCheck, Plus, Trash2, AlertCircle } from 'lucide-react';

type Status = 'sin_evaluar' | 'pendiente' | 'verificado';

interface Integrator {
  id: string;
  name: string;
  criteria: Record<string, Status>;
}

const criteriaList = [
  { id: 'necesidad', label: 'Necesidad identificada', desc: 'Existe una necesidad clara y documentada' },
  { id: 'interlocutor', label: 'Interlocutor responsable', desc: 'Persona de contacto identificada y con capacidad de decisión' },
  { id: 'capacidades', label: 'Capacidades técnicas demostrables', desc: 'Evidencia de experiencia y competencias técnicas' },
  { id: 'seguridad', label: 'Seguridad y permisos', desc: 'Cumplimiento de requisitos de seguridad y autorizaciones' },
  { id: 'viabilidad', label: 'Viabilidad económica', desc: 'Modelo económico viable y sostenible' },
  { id: 'encaje', label: 'Encaje confirmado por MERLIN–Edged', desc: 'Validación formal por parte del equipo de MERLIN-Edged' },
  { id: 'proximo_paso', label: 'Próximo paso acordado', desc: 'Acción siguiente definida y aceptada por ambas partes' },
];

const statusConfig: Record<Status, { label: string; color: string; bg: string }> = {
  sin_evaluar: { label: 'Sin evaluar', color: 'text-slate-600', bg: 'bg-slate-100 border-slate-300' },
  pendiente: { label: 'Pendiente de evidencias', color: 'text-yellow-700', bg: 'bg-yellow-50 border-yellow-300' },
  verificado: { label: 'Verificado', color: 'text-green-700', bg: 'bg-green-50 border-green-300' },
};

const initialIntegrators: Integrator[] = [
  {
    id: '1',
    name: 'Integrador DEMO Alpha',
    criteria: { necesidad: 'pendiente', interlocutor: 'sin_evaluar', capacidades: 'pendiente', seguridad: 'sin_evaluar', viabilidad: 'sin_evaluar', encaje: 'sin_evaluar', proximo_paso: 'sin_evaluar' },
  },
  {
    id: '2',
    name: 'Integrador DEMO Beta',
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
        <h2 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-2">
          <ClipboardCheck className="w-7 h-7 text-blue-600" />
          Módulo 3 — Evaluador de Integradores
        </h2>
        <p className="text-slate-600 mb-4">
          Siete criterios para evaluar la cualificación de integradores tecnológicos.
          Ninguna oportunidad se considera cualificada sin evidencias verificables.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6">
          <div className="flex items-start gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
            <p className="text-xs text-amber-700">
              <strong>Importante:</strong> Un integrador solo se considera cualificado cuando los 7 criterios están en estado «Verificado».
              Los ejemplos iniciales están etiquetados como DEMO.
            </p>
          </div>
        </div>

        {/* Add integrator */}
        <div className="flex gap-2 mb-6">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="Nombre del integrador (ej: Integrador DEMO Gamma)"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
            aria-label="Nombre del nuevo integrador"
            onKeyDown={(e) => e.key === 'Enter' && addIntegrator()}
          />
          <button
            onClick={addIntegrator}
            className="flex items-center gap-1 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" /> Añadir
          </button>
        </div>

        {/* Integrators */}
        <div className="space-y-6">
          {integrators.map(int => (
            <div key={int.id} className="border border-gray-200 rounded-xl p-5 bg-gray-50">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-slate-800">{int.name}</h3>
                    <span className="demo-badge">DEMO</span>
                  </div>
                  <div className="flex items-center gap-3 mt-1">
                    <div className="flex-1 bg-gray-200 rounded-full h-2 w-32">
                      <div
                        className="bg-green-500 h-2 rounded-full transition-all"
                        style={{ width: `${getProgress(int)}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium text-slate-600">{getProgress(int)}% verificado</span>
                  </div>
                </div>
                <button
                  onClick={() => removeIntegrator(int.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  aria-label={`Eliminar ${int.name}`}
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

              <div className="grid gap-2">
                {criteriaList.map(crit => (
                  <div key={crit.id} className="flex items-center justify-between bg-white rounded-lg p-3 border border-gray-100">
                    <div className="flex-1">
                      <p className="text-sm font-medium text-slate-700">{crit.label}</p>
                      <p className="text-xs text-slate-500">{crit.desc}</p>
                    </div>
                    <div className="flex gap-1 ml-3">
                      {(['sin_evaluar', 'pendiente', 'verificado'] as Status[]).map(status => (
                        <button
                          key={status}
                          onClick={() => updateStatus(int.id, crit.id, status)}
                          className={`px-2 py-1 text-xs rounded border transition-all ${
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
