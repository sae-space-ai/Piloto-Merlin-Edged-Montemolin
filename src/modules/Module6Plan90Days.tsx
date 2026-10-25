import { Calendar, CheckCircle2, AlertCircle } from 'lucide-react';

const phases = [
  {
    id: 1,
    days: '1–15',
    title: 'Validación de interés y alcance',
    color: 'blue',
    deliverables: [
      'Documento de alcance preliminar',
      'Identificación de interlocutores',
      'Acuerdo de confidencialidad (si procede)',
      'Criterios de éxito iniciales',
    ],
    acceptance: [
      'Firma de acuerdo de confidencialidad',
      'Documento de alcance aprobado por ambas partes',
      'Calendario de reuniones quincenal acordado',
    ],
  },
  {
    id: 2,
    days: '16–30',
    title: 'Mapa de necesidades e integradores',
    color: 'green',
    deliverables: [
      'Mapa de necesidades del ecosistema',
      'Listado preliminar de integradores',
      'Matriz de capacidades vs. necesidades',
      'Informe de oportunidades priorizadas',
    ],
    acceptance: [
      'Mapa validado con al menos 3 fuentes',
      'Mínimo 10 integradores identificados',
      'Criterios de priorización acordados',
    ],
  },
  {
    id: 3,
    days: '31–60',
    title: 'Hasta dos demostradores autorizados',
    color: 'purple',
    deliverables: [
      'Especificaciones técnicas de demostradores',
      'Entorno de pruebas configurado',
      'Resultados preliminares documentados',
      'Informe de viabilidad técnica',
    ],
    acceptance: [
      'Autorización formal para cada demostrador',
      'Entorno aislado y seguro',
      'Métricas de evaluación definidas antes de iniciar',
      'Resultados reproducibles y documentados',
    ],
  },
  {
    id: 4,
    days: '61–75',
    title: 'Análisis de viabilidad y riesgos',
    color: 'orange',
    deliverables: [
      'Análisis DAFO del ecosistema',
      'Matriz de riesgos y mitigaciones',
      'Modelo económico preliminar',
      'Requisitos regulatorios identificados',
    ],
    acceptance: [
      'Riesgos clasificados por probabilidad e impacto',
      'Mitigaciones propuestas para riesgos críticos',
      'Modelo económico revisado por equipo financiero',
    ],
  },
  {
    id: 5,
    days: '76–90',
    title: 'Dossier ejecutivo y decisión',
    color: 'red',
    deliverables: [
      'Dossier ejecutivo completo',
      'Recomendación de continuación o no',
      'Propuesta de fases siguientes (si aplica)',
      'Lecciones aprendidas documentadas',
    ],
    acceptance: [
      'Dossier presentado a stakeholders',
      'Decisión formal documentada',
      'Plan de transición o cierre acordado',
    ],
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
        <h2 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-2">
          <Calendar className="w-7 h-7 text-blue-600" />
          Módulo 6 — Plan de 90 Días
        </h2>
        <p className="text-slate-600 mb-6">
          Cronograma estructurado en 5 fases con entregables y criterios de aceptación definidos.
        </p>

        {/* Timeline visual */}
        <div className="relative mb-8">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200" />
          <div className="space-y-4">
            {phases.map((phase) => {
              const colors = colorMap[phase.color];
              return (
                <div key={phase.id} className="relative pl-10">
                  <div className={`absolute left-2 w-5 h-5 rounded-full ${colors.badge} border-2 border-white shadow`} />
                  <div className={`${colors.bg} border ${colors.border} rounded-xl p-5`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`px-2 py-0.5 rounded text-xs font-bold text-white ${colors.badge}`}>
                        Días {phase.days}
                      </span>
                      <h3 className={`text-lg font-bold ${colors.text}`}>{phase.title}</h3>
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
                          <AlertCircle className="w-3 h-3" /> Criterios de aceptación
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
