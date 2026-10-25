import { Users, Target, Search, Package, Scale, Clock } from 'lucide-react';

export default function Module9Commercial() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <Users className="w-7 h-7 text-blue-600" />
          Propuesta
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="border border-blue-200 rounded-xl p-5 bg-blue-50">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-5 h-5 text-blue-600" />
              <h3 className="text-base font-bold text-blue-900">Propuesta</h3>
            </div>
            <ul className="space-y-2 text-sm text-blue-800">
              <li>• Piloto exploratorio de 90 días</li>
              <li>• Mapa de integradores y necesidades</li>
              <li>• Hasta dos demostradores autorizados</li>
              <li>• Análisis de viabilidad</li>
              <li>• Dossier ejecutivo final</li>
            </ul>
          </div>

          <div className="border border-amber-200 rounded-xl p-5 bg-amber-50">
            <div className="flex items-center gap-2 mb-3">
              <Search className="w-5 h-5 text-amber-600" />
              <h3 className="text-base font-bold text-amber-900">Verificaciones</h3>
            </div>
            <ul className="space-y-2 text-sm text-amber-800">
              <li>• Interés de MERLIN-Edged</li>
              <li>• Estado administrativo de proyectos</li>
              <li>• Necesidades de integración</li>
              <li>• Interlocutores con capacidad de decisión</li>
            </ul>
          </div>

          <div className="border border-green-200 rounded-xl p-5 bg-green-50">
            <div className="flex items-center gap-2 mb-3">
              <Package className="w-5 h-5 text-green-600" />
              <h3 className="text-base font-bold text-green-900">Entregables</h3>
            </div>
            <ul className="space-y-2 text-sm text-green-800">
              <li>• Mapa de oportunidades e integradores</li>
              <li>• Resultados de demostradores</li>
              <li>• Análisis de viabilidad</li>
              <li>• Dossier ejecutivo con recomendación</li>
            </ul>
          </div>

          <div className="border border-purple-200 rounded-xl p-5 bg-purple-50">
            <div className="flex items-center gap-2 mb-3">
              <Scale className="w-5 h-5 text-purple-600" />
              <h3 className="text-base font-bold text-purple-900">Decisiones MERLIN–Edged</h3>
            </div>
            <ul className="space-y-2 text-sm text-purple-800">
              <li>• Autorización de demostradores</li>
              <li>• Validación de integradores</li>
              <li>• Continuación, pivotar o cerrar</li>
              <li>• Aprobación de fases posteriores</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 text-white">
          <div className="flex items-center gap-3 mb-3">
            <Clock className="w-6 h-6" />
            <h3 className="text-lg font-bold">Reunión exploratoria</h3>
          </div>
          <p className="text-blue-100 text-sm">
            Duración propuesta: <strong className="text-white">20–30 minutos</strong>
          </p>
        </div>
      </div>
    </div>
  );
}
