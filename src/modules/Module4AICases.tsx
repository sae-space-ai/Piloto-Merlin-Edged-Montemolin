import { useState } from 'react';
import { Brain, FileText, Eye } from 'lucide-react';

interface Metric { label: string; value: string; }

const caseA = {
  title: 'Inteligencia documental',
  desc: 'Procesamiento inteligente de documentación técnica, normativa y administrativa mediante NLP y LLMs.',
  metrics: [
    { label: 'Precisión extracción', value: '85–92%' },
    { label: 'Tiempo/doc', value: '2–8 s' },
    { label: 'Reducción tiempo manual', value: '60–70%' },
    { label: 'Docs/día', value: '500–2.000' },
  ],
  dataReqs: ['Documentación técnica (planos, fichas)', 'Normativa aplicable', 'Registros administrativos', 'Formato: PDF, DOCX, imágenes', 'Volumen: 10k–50k docs'],
  risks: ['Alucinaciones en datos críticos', 'Sesgos en documentación heredada', 'Calidad OCR variable', 'Validación humana necesaria'],
  costs: [
    { label: 'Desarrollo', range: '40k–80k €' },
    { label: 'Cloud (anual)', range: '12k–24k €/año' },
    { label: 'Licencias modelos (anual)', range: '8k–20k €/año' },
    { label: 'Mantenimiento', range: '6k–12k €/año' },
  ],
};

const caseB = {
  title: 'Visión artificial',
  desc: 'Inspección visual automatizada mediante cámaras y deep learning para detección de defectos y control de calidad.',
  metrics: [
    { label: 'Tasa detección', value: '94–98%' },
    { label: 'Falsos positivos', value: '2–5%' },
    { label: 'Inferencia/imagen', value: '50–200 ms' },
    { label: 'Cámaras simultáneas', value: '4–16' },
  ],
  dataReqs: ['Imágenes etiquetadas (1k–5k/cat)', 'Instalación de cámaras', 'Conectividad de red', 'Espacio edge/cloud', 'Tipología de defectos'],
  risks: ['Variabilidad de iluminación', 'Recalibración periódica', 'Dataset representativo', 'Integración con línea existente'],
  costs: [
    { label: 'Modelo y entrenamiento', range: '50k–120k €' },
    { label: 'Hardware', range: '30k–80k €' },
    { label: 'Instalación', range: '15k–35k €' },
    { label: 'Mantenimiento anual', range: '10k–25k €/año' },
  ],
};

export default function Module4AICases() {
  const [activeCase, setActiveCase] = useState<'A' | 'B'>('A');
  const data = activeCase === 'A' ? caseA : caseB;

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Brain className="w-7 h-7 text-blue-600" />
          Casos de IA
        </h2>

        <div className="flex gap-3 mb-6">
          <button
            onClick={() => setActiveCase('A')}
            className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 transition-all flex-1 ${
              activeCase === 'A' ? 'border-blue-500 bg-blue-50 text-blue-700' : 'border-gray-200 text-slate-600 hover:bg-gray-50'
            }`}
          >
            <FileText className="w-5 h-5" />
            <div className="text-left">
              <p className="text-sm font-bold">Caso A</p>
              <p className="text-xs">{caseA.title}</p>
            </div>
          </button>
          <button
            onClick={() => setActiveCase('B')}
            className={`flex items-center gap-2 px-4 py-3 rounded-lg border-2 transition-all flex-1 ${
              activeCase === 'B' ? 'border-purple-500 bg-purple-50 text-purple-700' : 'border-gray-200 text-slate-600 hover:bg-gray-50'
            }`}
          >
            <Eye className="w-5 h-5" />
            <div className="text-left">
              <p className="text-sm font-bold">Caso B</p>
              <p className="text-xs">{caseB.title}</p>
            </div>
          </button>
        </div>

        <div className="space-y-5">
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <p className="text-sm text-slate-600">{data.desc}</p>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Métricas</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {data.metrics.map((m, i) => (
                <div key={i} className="bg-white border border-gray-200 rounded-lg p-3 text-center">
                  <p className="text-xs text-slate-500 mb-1">{m.label}</p>
                  <p className="text-lg font-bold text-slate-800">{m.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Requisitos de datos</h4>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
              <ul className="space-y-1">
                {data.dataReqs.map((r, i) => (
                  <li key={i} className="text-sm text-blue-800 flex items-start gap-2">
                    <span className="w-1 h-1 bg-blue-500 rounded-full mt-2 shrink-0" /> {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Riesgos</h4>
            <div className="bg-red-50 border border-red-200 rounded-lg p-3">
              <ul className="space-y-1">
                {data.risks.map((r, i) => (
                  <li key={i} className="text-sm text-red-800 flex items-start gap-2">
                    <span className="w-1 h-1 bg-red-500 rounded-full mt-2 shrink-0" /> {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Costes estimados</h4>
            <div className="bg-green-50 border border-green-200 rounded-lg p-3">
              {data.costs.map((c, i) => (
                <div key={i} className="flex justify-between text-sm py-1">
                  <span className="text-green-800">{c.label}</span>
                  <span className="font-mono font-bold text-green-700">{c.range}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
