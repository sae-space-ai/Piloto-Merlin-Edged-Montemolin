import { useState } from 'react';
import { Map, Filter, Tag } from 'lucide-react';

const categories = [
  { id: 'integracion', label: 'Integración tecnológica', color: 'blue', count: 4 },
  { id: 'servicios', label: 'Servicios industriales', color: 'green', count: 3 },
  { id: 'ia', label: 'Inteligencia artificial aplicada', color: 'purple', count: 5 },
  { id: 'automatizacion', label: 'Automatización', color: 'orange', count: 3 },
  { id: 'ciberseguridad', label: 'Ciberseguridad y cumplimiento', color: 'red', count: 4 },
  { id: 'formacion', label: 'Formación y capacitación', color: 'teal', count: 3 },
  { id: 'energia', label: 'Eficiencia y análisis energético', color: 'yellow', count: 3 },
];

const opportunities = [
  { id: 1, title: 'Integración de sistemas SCADA con plataformas cloud', category: 'integracion', priority: 'alta', desc: 'Conexión de sistemas de control industrial con plataformas de monitorización en la nube.' },
  { id: 2, title: 'Migración de infraestructura legacy a contenedores', category: 'integracion', priority: 'media', desc: 'Modernización de aplicaciones industriales mediante containerización.' },
  { id: 3, title: 'Interoperabilidad entre sistemas OT e IT', category: 'integracion', priority: 'alta', desc: 'Puente de comunicación entre redes operativas y corporativas.' },
  { id: 4, title: 'API Gateway para servicios industriales', category: 'integracion', priority: 'media', desc: 'Capa de gestión de APIs para servicios de planta.' },
  { id: 5, title: 'Mantenimiento predictivo de equipos críticos', category: 'servicios', priority: 'alta', desc: 'Servicio de monitorización y predicción de fallos en maquinaria industrial.' },
  { id: 6, title: 'Inspección remota con drones', category: 'servicios', priority: 'media', desc: 'Servicio de inspección visual automatizada de infraestructuras.' },
  { id: 7, title: 'Gestión de activos industriales (EAM)', category: 'servicios', priority: 'baja', desc: 'Plataforma de gestión del ciclo de vida de activos.' },
  { id: 8, title: 'Procesamiento inteligente de documentación técnica', category: 'ia', priority: 'alta', desc: 'Extracción y clasificación de datos de documentos industriales.' },
  { id: 9, title: 'Análisis de calidad con visión artificial', category: 'ia', priority: 'alta', desc: 'Detección automatizada de defectos en líneas de producción.' },
  { id: 10, title: 'Optimización de rutas logísticas con ML', category: 'ia', priority: 'media', desc: 'Algoritmos de optimización para distribución industrial.' },
  { id: 11, title: 'Asistente virtual para operadores', category: 'ia', priority: 'media', desc: 'Sistema de soporte decisional basado en LLM para personal técnico.' },
  { id: 12, title: 'Predicción de demanda energética', category: 'ia', priority: 'alta', desc: 'Modelos de forecasting para gestión de consumo.' },
  { id: 13, title: 'Control automatizado de climatización industrial', category: 'automatizacion', priority: 'media', desc: 'Sistema de regulación inteligente de condiciones ambientales.' },
  { id: 14, title: 'Robotización de tareas repetitivas en almacén', category: 'automatizacion', priority: 'alta', desc: 'Automatización de picking y clasificación.' },
  { id: 15, title: 'PLC programming y HMI modernization', category: 'automatizacion', priority: 'baja', desc: 'Actualización de lógica de control y interfaces de operador.' },
  { id: 16, title: 'Auditoría de seguridad OT (IEC 62443)', category: 'ciberseguridad', priority: 'alta', desc: 'Evaluación de cumplimiento del estándar de ciberseguridad industrial.' },
  { id: 17, title: 'Segmentación de redes industriales', category: 'ciberseguridad', priority: 'alta', desc: 'Diseño e implementación de zonas de seguridad.' },
  { id: 18, title: 'Gestión de identidades y accesos (IAM)', category: 'ciberseguridad', priority: 'media', desc: 'Sistema centralizado de autenticación y autorización.' },
  { id: 19, title: 'Cumplimiento normativo RGPD/ENS', category: 'ciberseguridad', priority: 'alta', desc: 'Adaptación a requisitos regulatorios de protección de datos.' },
  { id: 20, title: 'Programa de certificación en IA industrial', category: 'formacion', priority: 'media', desc: 'Formación especializada para técnicos en aplicaciones de IA.' },
  { id: 21, title: 'Capacitación en ciberseguridad OT', category: 'formacion', priority: 'alta', desc: 'Programa de concienciación y habilidades para personal industrial.' },
  { id: 22, title: 'Academia de automatización y robótica', category: 'formacion', priority: 'baja', desc: 'Formación práctica en sistemas de automatización.' },
  { id: 23, title: 'Auditoría energética de instalaciones', category: 'energia', priority: 'alta', desc: 'Análisis de eficiencia y propuesta de mejoras.' },
  { id: 24, title: 'Monitorización de consumo en tiempo real', category: 'energia', priority: 'media', desc: 'Sistema IoT para tracking energético.' },
  { id: 25, title: 'Estudio de viabilidad fotovoltaica', category: 'energia', priority: 'media', desc: 'Análisis de potencial de generación renovable in-situ.' },
];

const colorMap: Record<string, string> = {
  blue: 'bg-blue-100 text-blue-800 border-blue-200',
  green: 'bg-green-100 text-green-800 border-green-200',
  purple: 'bg-purple-100 text-purple-800 border-purple-200',
  orange: 'bg-orange-100 text-orange-800 border-orange-200',
  red: 'bg-red-100 text-red-800 border-red-200',
  teal: 'bg-teal-100 text-teal-800 border-teal-200',
  yellow: 'bg-yellow-100 text-yellow-800 border-yellow-200',
};

const priorityColors: Record<string, string> = {
  alta: 'bg-red-100 text-red-700',
  media: 'bg-yellow-100 text-yellow-700',
  baja: 'bg-green-100 text-green-700',
};

export default function Module2Opportunities() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = opportunities.filter(opp => {
    const matchCategory = !selectedCategory || opp.category === selectedCategory;
    const matchSearch = !searchTerm || opp.title.toLowerCase().includes(searchTerm.toLowerCase()) || opp.desc.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-2">
          <Map className="w-7 h-7 text-blue-600" />
          Módulo 2 — Mapa de Oportunidades
        </h2>
        <p className="text-slate-600 mb-4">
          Clasificación de posibles áreas de colaboración en el ecosistema de integradores tecnológicos.
          Todos los ejemplos son <span className="demo-badge">DEMO</span> y no representan contratos reales.
        </p>

        {/* Search */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Buscar oportunidades..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
            aria-label="Buscar oportunidades"
          />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
              !selectedCategory ? 'bg-slate-800 text-white border-slate-800' : 'bg-white text-slate-600 border-gray-300 hover:bg-gray-50'
            }`}
          >
            <Filter className="w-3 h-3" /> Todas
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(selectedCategory === cat.id ? null : cat.id)}
              className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                selectedCategory === cat.id ? colorMap[cat.color] : 'bg-white text-slate-600 border-gray-300 hover:bg-gray-50'
              }`}
            >
              <Tag className="w-3 h-3" /> {cat.label}
            </button>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
          <div className="bg-blue-50 rounded-lg p-3 text-center border border-blue-100">
            <p className="text-2xl font-bold text-blue-700">{filtered.length}</p>
            <p className="text-xs text-blue-600">Oportunidades visibles</p>
          </div>
          <div className="bg-red-50 rounded-lg p-3 text-center border border-red-100">
            <p className="text-2xl font-bold text-red-700">{filtered.filter(o => o.priority === 'alta').length}</p>
            <p className="text-xs text-red-600">Prioridad alta</p>
          </div>
          <div className="bg-yellow-50 rounded-lg p-3 text-center border border-yellow-100">
            <p className="text-2xl font-bold text-yellow-700">{filtered.filter(o => o.priority === 'media').length}</p>
            <p className="text-xs text-yellow-600">Prioridad media</p>
          </div>
          <div className="bg-green-50 rounded-lg p-3 text-center border border-green-100">
            <p className="text-2xl font-bold text-green-700">{categories.length}</p>
            <p className="text-xs text-green-600">Categorías</p>
          </div>
        </div>

        {/* Opportunities list */}
        <div className="space-y-3">
          {filtered.map(opp => {
            const cat = categories.find(c => c.id === opp.category);
            return (
              <div key={opp.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="text-sm font-semibold text-slate-800">{opp.title}</h4>
                      <span className="demo-badge">DEMO</span>
                    </div>
                    <p className="text-xs text-slate-500 mb-2">{opp.desc}</p>
                    <div className="flex items-center gap-2">
                      {cat && (
                        <span className={`text-xs px-2 py-0.5 rounded border ${colorMap[cat.color]}`}>
                          {cat.label}
                        </span>
                      )}
                      <span className={`text-xs px-2 py-0.5 rounded ${priorityColors[opp.priority]}`}>
                        Prioridad: {opp.priority}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          {filtered.length === 0 && (
            <div className="text-center py-8 text-slate-400">
              <p>No se encontraron oportunidades con los filtros seleccionados.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
