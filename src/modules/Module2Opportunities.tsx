import { useState } from 'react';
import { Map, Filter, Tag } from 'lucide-react';

const categories = [
  { id: 'integracion', label: 'Integración tecnológica', color: 'blue' },
  { id: 'servicios', label: 'Servicios industriales', color: 'green' },
  { id: 'ia', label: 'IA aplicada', color: 'purple' },
  { id: 'automatizacion', label: 'Automatización', color: 'orange' },
  { id: 'ciberseguridad', label: 'Ciberseguridad', color: 'red' },
  { id: 'formacion', label: 'Formación', color: 'teal' },
  { id: 'energia', label: 'Eficiencia energética', color: 'yellow' },
];

const opportunities = [
  { id: 1, title: 'Integración SCADA–cloud', category: 'integracion', priority: 'alta' },
  { id: 2, title: 'Migración legacy a contenedores', category: 'integracion', priority: 'media' },
  { id: 3, title: 'Interoperabilidad OT/IT', category: 'integracion', priority: 'alta' },
  { id: 4, title: 'API Gateway industrial', category: 'integracion', priority: 'media' },
  { id: 5, title: 'Mantenimiento predictivo', category: 'servicios', priority: 'alta' },
  { id: 6, title: 'Inspección remota con drones', category: 'servicios', priority: 'media' },
  { id: 7, title: 'Gestión de activos (EAM)', category: 'servicios', priority: 'baja' },
  { id: 8, title: 'Procesamiento documental técnico', category: 'ia', priority: 'alta' },
  { id: 9, title: 'Control de calidad por visión', category: 'ia', priority: 'alta' },
  { id: 10, title: 'Optimización logística ML', category: 'ia', priority: 'media' },
  { id: 11, title: 'Asistente virtual operadores', category: 'ia', priority: 'media' },
  { id: 12, title: 'Predicción demanda energética', category: 'ia', priority: 'alta' },
  { id: 13, title: 'Climatización industrial automática', category: 'automatizacion', priority: 'media' },
  { id: 14, title: 'Robotización almacén', category: 'automatizacion', priority: 'alta' },
  { id: 15, title: 'PLC / HMI modernization', category: 'automatizacion', priority: 'baja' },
  { id: 16, title: 'Auditoría IEC 62443', category: 'ciberseguridad', priority: 'alta' },
  { id: 17, title: 'Segmentación redes OT', category: 'ciberseguridad', priority: 'alta' },
  { id: 18, title: 'IAM industrial', category: 'ciberseguridad', priority: 'media' },
  { id: 19, title: 'Cumplimiento RGPD/ENS', category: 'ciberseguridad', priority: 'alta' },
  { id: 20, title: 'Certificación IA industrial', category: 'formacion', priority: 'media' },
  { id: 21, title: 'Capacitación ciberseguridad OT', category: 'formacion', priority: 'alta' },
  { id: 22, title: 'Academia automatización', category: 'formacion', priority: 'baja' },
  { id: 23, title: 'Auditoría energética', category: 'energia', priority: 'alta' },
  { id: 24, title: 'Monitorización consumo IoT', category: 'energia', priority: 'media' },
  { id: 25, title: 'Viabilidad fotovoltaica', category: 'energia', priority: 'media' },
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
    const matchSearch = !searchTerm || opp.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Map className="w-7 h-7 text-blue-600" />
          Mapa de oportunidades
        </h2>

        <input
          type="text"
          placeholder="Buscar..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm mb-4"
          aria-label="Buscar"
        />

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

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-blue-50 rounded-lg p-3 text-center border border-blue-100">
            <p className="text-2xl font-bold text-blue-700">{filtered.length}</p>
            <p className="text-xs text-blue-600">Total</p>
          </div>
          <div className="bg-red-50 rounded-lg p-3 text-center border border-red-100">
            <p className="text-2xl font-bold text-red-700">{filtered.filter(o => o.priority === 'alta').length}</p>
            <p className="text-xs text-red-600">Alta</p>
          </div>
          <div className="bg-green-50 rounded-lg p-3 text-center border border-green-100">
            <p className="text-2xl font-bold text-green-700">{categories.length}</p>
            <p className="text-xs text-green-600">Categorías</p>
          </div>
        </div>

        <div className="space-y-2">
          {filtered.map(opp => {
            const cat = categories.find(c => c.id === opp.category);
            return (
              <div key={opp.id} className="flex items-center justify-between border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono text-slate-400 w-6">#{opp.id}</span>
                  <span className="text-sm font-medium text-slate-800">{opp.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  {cat && (
                    <span className={`text-xs px-2 py-0.5 rounded border hidden md:inline-block ${colorMap[cat.color]}`}>
                      {cat.label}
                    </span>
                  )}
                  <span className={`text-xs px-2 py-0.5 rounded ${priorityColors[opp.priority]}`}>
                    {opp.priority}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
