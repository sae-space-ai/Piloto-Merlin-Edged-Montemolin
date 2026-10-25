import { Calendar, CheckCircle2, AlertCircle } from 'lucide-react';

const phases = [
  {
    id: 1,
    days: '1–15',
    title: 'Validación de interés y alcance',
    color: 'blue',
    deliverables: ['Documento de alcance', 'Identificación de interlocutores', 'Acuerdo de confidencialidad', 'Criterios de éxito'],
    acceptance: ['NDA firmado', 'Alcance aprobado', 'Calendario acordado'],
  },
  {
    id: 2,
    days: '16–30',
    title: 'Mapa de necesidades e integradores',
    color: 'green',
    deliverables: ['Mapa de necesidades', 'Listado de integradores', 'Matriz capacidades vs necesidades', 'Informe priorizado'],
    acceptance: ['Mapa con 3+ fuentes', '10+ integradores', 'Criterios acordados'],
  },
  {
    id: 3,
    days: '31–60',
    title: 'Demostradores autorizados',
    color: 'purple',
    deliverables: ['Especificaciones técnicas', 'Entorno configurado', 'Resultados documentados', 'Informe de viabilidad'],
    acceptance: ['Autorización formal', 'Entorno aislado', 'Métricas definidas'],
  },
  {
    id: 4,
    days: '61–75',
    title: 'Viabilidad y riesgos',
    color: 'orange',
    deliverables: ['Análisis DAFO', 'Matriz de riesgos', 'Modelo económico', 'Requisitos regulatorios'],
    acceptance: ['Riesgos clasificados', 'Mitigaciones propuestas', 'Modelo revisado'],
  },
  {
    id: 5,
    days: '76–90',
    title: 'Dossier ejecutivo',
    color: 'red',
    deliverables: ['Dossier completo', 'Recomendación', 'Propuesta de fases siguientes', 'Lecciones aprendidas'],
    acceptance: ['Presentación a stakeholders', 'Decisión documentada', 'Plan acordado'],
  },
];

const colorMap: Record<string, { bg: string; border: string; text: string; badge: string }> = {
  blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800', badge: 'bg-blue-600' },
  green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-800', badge: 'bg-green-600' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-800', badge: 'bg-purple-600' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-800', badge: 'bg-orange-600' },
  red: { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-800', badge: 'bg-red-600' },
};

export default function Module6Plan90Days() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Calendar className="w-7 h-7 text-blue-600" />
          Plan de 90 días
        </h2>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
          <div className="space-y-4">
            {phases.map((phase) => {
              const colors = colorMap[phase.color];
              return (
                <div key={phase.id} className="relative pl-10">
                  <div className={`absolute left-2 w-5 h-5 rounded-full ${colors.badge} border-2 border-white shadow`} />
                  <div className={`${colors.bg} border ${colors.border} rounded-xl p-4`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-2 py-0.5 rounded text-xs font-bold text-white ${colors.badge}`}>
                        Días {phase.days}
                      </span>
                      <h3 className={`text-base font-bold ${colors.text}`}>{phase.title}</h3>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2 flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Entregables
                        </h4>
                        <ul className="space-y-1">
                          {phase.deliverables.map((d, i) => (
                            <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                              <span className="w-1 h-1 bg-slate-400 rounded-full mt-2 shrink-0" />
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> Criterios
                        </h4>
                        <ul className="space-y-1">
                          {phase.acceptance.map((a, i) => (
                            <li key={i} className="text-sm text-slate-700 flex items-start gap-2">
                              <span className="w-1 h-1 bg-slate-400 rounded-full mt-2 shrink-0" />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
