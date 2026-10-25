import { useState } from 'react';
import { Brain, FileText, Eye, AlertTriangle, Info } from 'lucide-react';

interface Metric {
  label: string;
  value: string;
  note: string;
}

export default function Module4AICases() {
  const [activeCase, setActiveCase] = useState<'A' | 'B'>('A');

  const caseA: { title: string; desc: string; metrics: Metric[]; dataReqs: string[]; risks: string[]; costs: { label: string; range: string }[] } = {
    title: 'Caso A: Inteligencia documental para procesos industriales',
    desc: 'Sistema de procesamiento inteligente de documentación técnica, normativa y administrativa mediante NLP y LLMs. Extracción automática de datos clave, clasificación y generación de resúmenes ejecutivos.',
    metrics: [
      { label: 'Precisión estimada en extracción', value: '85-92%', note: 'Sin pruebas en datos reales del entorno' },
      { label: 'Tiempo de procesamiento por documento', value: '2-8 seg', note: 'Estimación basada en benchmarks públicos' },
      { label: 'Reducción estimada de tiempo manual', value: '60-70%', note: 'Proyección teórica, no verificada' },
      { label: 'Documentos procesables/día', value: '500-2000', note: 'Dependiente de infraestructura disponible' },
    ],
    dataReqs: [
      'Acceso a documentación técnica (planos, fichas, manuales)',
      'Documentación normativa y de cumplimiento aplicable',
      'Registros administrativos y actas',
      'Formato: PDF, DOCX, imágenes escaneadas',
      'Volumen estimado: 10.000-50.000 documentos',
    ],
    risks: [
      'Alucinaciones del modelo en datos críticos',
      'Sesgos en documentación heredada',
      'Dependencia de calidad de OCR para documentos escaneados',
      'Riesgo regulatorio si se usa en decisiones vinculantes',
      'Necesidad de validación humana en resultados',
    ],
    costs: [
      { label: 'Desarrollo e integración', range: '40.000 – 80.000 €' },
      { label: 'Infraestructura cloud (anual)', range: '12.000 – 24.000 €/año' },
      { label: 'Licencias de modelos (anual)', range: '8.000 – 20.000 €/año' },
      { label: 'Mantenimiento y mejora continua', range: '6.000 – 12.000 €/año' },
    ],
  };

  const caseB: { title: string; desc: string; metrics: Metric[]; dataReqs: string[]; risks: string[]; costs: { label: string; range: string }[] } = {
    title: 'Caso B: Visión artificial para operaciones industriales',
    desc: 'Sistema de inspección visual automatizada mediante cámaras y modelos de deep learning para detección de defectos, control de calidad y monitorización de seguridad en entornos industriales.',
    metrics: [
      { label: 'Tasa de detección estimada', value: '94-98%', note: 'Sin pruebas en condiciones reales de planta' },
      { label: 'Falsos positivos estimados', value: '2-5%', note: 'Variable según entorno y iluminación' },
      { label: 'Tiempo de inferencia por imagen', value: '50-200 ms', note: 'Dependiente del hardware de inferencia' },
      { label: 'Cámaras soportadas simultáneamente', value: '4-16', note: 'Según arquitectura de procesamiento' },
    ],
    dataReqs: [
      'Conjunto de imágenes etiquetadas (mínimo 1.000-5.000 por categoría)',
      'Acceso físico para instalación de cámaras',
      'Conectividad de red para transmisión de video',
      'Espacio de procesamiento (edge o cloud)',
      'Documentación de defectos/tipos a detectar',
    ],
    risks: [
      'Variabilidad de condiciones de iluminación',
      'Necesidad de recalibración periódica',
      'Dependencia de dataset de entrenamiento representativo',
      'Integración compleja con líneas de producción existentes',
      'Coste de hardware especializado (GPUs, cámaras industriales)',
    ],
    costs: [
      { label: 'Desarrollo de modelo y entrenamiento', range: '50.000 – 120.000 €' },
      { label: 'Hardware (cámaras, edge computing)', range: '30.000 – 80.000 €' },
      { label: 'Instalación y puesta en marcha', range: '15.000 – 35.000 €' },
      { label: 'Mantenimiento anual', range: '10.000 – 25.000 €/año' },
    ],
  };

  const activeData = activeCase === 'A' ? caseA : caseB;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-2">
          <Brain className="w-7 h-7 text-blue-600" />
          Módulo 4 — Dos Casos de IA
        </h2>
        <p className="text-slate-600 mb-4">
          Escenarios ilustrativos de aplicación de inteligencia artificial en contextos industriales.
          Las métricas son estimaciones teóricas. No se han realizado pruebas en entornos reales.
        </p>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 mb-6">
          <div className="flex items-start gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
            <p className="text-xs text-amber-700">
              <strong>Aviso:</strong> No se han realizado pruebas reales. No se asume acceso a sistemas de MERLIN–Edged.
              Todos los datos son estimaciones basadas en benchmarks públicos de la industria.
            </p>
          </div>
        </div>

        {/* Case selector */}
        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setActiveCase('A')}
            className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 transition-all flex-1 ${
              activeCase === 'A' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 bg-white text-slate-600 hover:bg-gray-50'
            }`}
          >
            <FileText className="w-5 h-5" />
            <div className="text-left">
              <p className="text-sm font-bold">Caso A</p>
              <p className="text-xs">Inteligencia documental</p>
            </div>
          </button>
          <button
            onClick={() => setActiveCase('B')}
            className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 transition-all flex-1 ${
              activeCase === 'B' ? 'border-purple-500 bg-purple-50 text-purple-700' : 'border-gray-200 bg-white text-slate-600 hover:bg-gray-50'
            }`}
          >
            <Eye className="w-5 h-5" />
            <div className="text-left">
              <p className="text-sm font-bold">Caso B</p>
              <p className="text-xs">Visión artificial</p>
            </div>
          </button>
        </div>

        {/* Active case content */}
        <div className="space-y-6">
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <h3 className="text-lg font-bold text-slate-800 mb-2">{activeData.title}</h3>
            <p className="text-sm text-slate-600">{activeData.desc}</p>
          </div>

          {/* Metrics */}
          <div>
            <h4 className="text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
              <Info className="w-4 h-4 text-blue-500" /> Métricas de evaluación (estimadas)
            </h4>
            <div className="grid md:grid-cols-2 gap-3">
              {activeData.metrics.map((m, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-lg p-3">
                  <p className="text-xs text-slate-500 mb-1">{m.label}</p>
                  <p className="text-xl font-bold text-slate-800">{m.value}</p>
                  <p className="text-xs text-amber-600 mt-1 italic">{m.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Data requirements */}
          <div>
            <h4 className="text-sm font-bold text-slate-700 mb-3">Requisitos de datos</h4>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <ul className="space-y-2">
                {activeData.dataReqs.map((req, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-blue-800">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0" />
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Risks */}
          <div>
            <h4 className="text-sm font-bold text-slate-700 mb-3">Riesgos identificados</h4>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <ul className="space-y-2">
                {activeData.risks.map((risk, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-red-800">
                    <AlertTriangle className="w-3.5 h-3.5 text-red-500 mt-0.5 shrink-0" />
                    {risk}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Costs */}
          <div>
            <h4 className="text-sm font-bold text-slate-700 mb-3">Costes estimados (orientativos)</h4>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <div className="space-y-2">
                {activeData.costs.map((cost, i) => (
                  <div key={i} className="flex items-center justify-between text-sm">
                    <span className="text-green-800">{cost.label}</span>
                    <span className="font-mono font-bold text-green-700">{cost.range}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
