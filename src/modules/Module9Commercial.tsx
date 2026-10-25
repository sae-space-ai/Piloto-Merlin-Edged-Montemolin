import { Users, Target, Search, Package, Scale, Clock, AlertTriangle } from 'lucide-react';

export default function Module9Commercial() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-2">
          <Users className="w-7 h-7 text-blue-600" />
          Módulo 9 — Presentación Comercial
        </h2>
        <p className="text-slate-600 mb-6">
          Resumen ejecutivo de la propuesta exploratoria de 90 días entre MONTEMOLIN-AIHUB y MERLIN-Edged.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Qué proponemos */}
          <div className="border border-blue-200 rounded-xl p-5 bg-blue-50">
            <div className="flex items-center gap-2 mb-3">
              <Target className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-bold text-blue-900">Qué proponemos</h3>
            </div>
            <ul className="space-y-2 text-sm text-blue-800">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0" />
                Piloto exploratorio de 90 días para evaluar oportunidades de colaboración.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0" />
                Mapa de integradores tecnológicos y necesidades del ecosistema.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0" />
                Hasta dos demostradores técnicos autorizados.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 shrink-0" />
                Análisis de viabilidad y dossier ejecutivo final.
              </li>
            </ul>
          </div>

          {/* Qué necesitamos verificar */}
          <div className="border border-amber-200 rounded-xl p-5 bg-amber-50">
            <div className="flex items-center gap-2 mb-3">
              <Search className="w-5 h-5 text-amber-600" />
              <h3 className="text-lg font-bold text-amber-900">Qué necesitamos verificar</h3>
            </div>
            <ul className="space-y-2 text-sm text-amber-800">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 shrink-0" />
                Interés real de MERLIN-Edged en explorar colaboración.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 shrink-0" />
                Estado administrativo real de los proyectos en Extremadura.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 shrink-0" />
                Necesidades concretas de integración tecnológica.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mt-1.5 shrink-0" />
                Disponibilidad de interlocutores con capacidad de decisión.
              </li>
            </ul>
          </div>

          {/* Qué entregaría el piloto */}
          <div className="border border-green-200 rounded-xl p-5 bg-green-50">
            <div className="flex items-center gap-2 mb-3">
              <Package className="w-5 h-5 text-green-600" />
              <h3 className="text-lg font-bold text-green-900">Qué entregaría el piloto</h3>
            </div>
            <ul className="space-y-2 text-sm text-green-800">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 shrink-0" />
                Mapa completo de oportunidades e integradores potenciales.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 shrink-0" />
                Resultados documentados de demostradores (si se autorizan).
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 shrink-0" />
                Análisis de viabilidad económica y técnica.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 shrink-0" />
                Dossier ejecutivo con recomendación fundamentada.
              </li>
            </ul>
          </div>

          {/* Qué decisiones corresponderían a MERLIN-Edged */}
          <div className="border border-purple-200 rounded-xl p-5 bg-purple-50">
            <div className="flex items-center gap-2 mb-3">
              <Scale className="w-5 h-5 text-purple-600" />
              <h3 className="text-lg font-bold text-purple-900">Decisiones de MERLIN–Edged</h3>
            </div>
            <ul className="space-y-2 text-sm text-purple-800">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 shrink-0" />
                Autorización de demostradores en sus entornos.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 shrink-0" />
                Validación de integradores identificados.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 shrink-0" />
                Decisión de continuar, pivotar o cerrar la exploración.
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-1.5 shrink-0" />
                Aprobación de cualquier fase posterior al piloto.
              </li>
            </ul>
          </div>
        </div>

        {/* Meeting request */}
        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl p-6 text-white mb-6">
          <div className="flex items-center gap-3 mb-3">
            <Clock className="w-6 h-6" />
            <h3 className="text-lg font-bold">Solicitud de reunión exploratoria</h3>
          </div>
          <p className="text-blue-100 text-sm mb-4">
            Proponemos una reunión inicial de <strong className="text-white">20–30 minutos</strong> para:
          </p>
          <ul className="space-y-2 text-sm text-blue-100">
            <li>• Presentar el alcance del piloto de 90 días.</li>
            <li>• Escuchar prioridades y restricciones de MERLIN-Edged.</li>
            <li>• Identificar si existe base suficiente para avanzar.</li>
            <li>• Acordar siguientes pasos o cierre de la exploración.</li>
          </ul>
        </div>

        {/* Final disclaimer */}
        <div className="bg-slate-900 rounded-xl p-5 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
            <p className="text-sm font-bold text-white">Aviso legal</p>
          </div>
          <p className="text-sm text-slate-300">
            «Propuesta independiente de MONTEMOLIN-AIHUB. No encargada, aprobada ni patrocinada por MERLIN Properties o Edged Energy».
          </p>
        </div>
      </div>
    </div>
  );
}
