import { Globe, AlertTriangle, FileText, Users, CheckCircle } from 'lucide-react';

export default function Module8European() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-2 flex items-center gap-2">
          <Globe className="w-7 h-7 text-blue-600" />
          Módulo 8 — Cooperación Europea
        </h2>
        <p className="text-slate-600 mb-6">
          Iniciativa MONTEMOLIN-AIHUB en el contexto de programas de cooperación europea.
        </p>

        {/* Critical disclaimer */}
        <div className="bg-red-50 border-2 border-red-300 rounded-xl p-5 mb-6">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-red-600 shrink-0 mt-0.5" />
            <div>
              <h4 className="font-bold text-red-800 mb-2">Estado actual — Avisos explícitos</h4>
              <ul className="space-y-2 text-sm text-red-700">
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-1.5 shrink-0" />
                  <span><strong>Propuesta documental en revisión.</strong> No ha sido presentada ni aprobada.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-1.5 shrink-0" />
                  <span><strong>Financiación no acreditada.</strong> No existe resolución de concesión.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-1.5 shrink-0" />
                  <span><strong>Consorcio no confirmado.</strong> Los socios potenciales no han formalizado participación.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-1.5 shrink-0" />
                  <span><strong>Participación de MERLIN–Edged no acordada.</strong> No existe compromiso formal.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full mt-1.5 shrink-0" />
                  <span><strong>Cualquier colaboración sujeta a elegibilidad y consentimiento.</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Reference card */}
        <div className="border border-blue-200 rounded-xl p-5 bg-blue-50 mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-blue-900">Referencia de propuesta</h3>
              <p className="text-xs text-blue-700">Programa de cooperación I3 — Innovación Industrial</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-blue-100">
              <p className="text-xs text-slate-500 mb-1">Convocatoria</p>
              <p className="text-lg font-bold text-blue-800">I3-2026-INV2a</p>
            </div>
            <div className="bg-white rounded-lg p-4 border border-blue-100">
              <p className="text-xs text-slate-500 mb-1">Referencia SEP</p>
              <p className="text-lg font-bold font-mono text-blue-800">SEP-211421662</p>
            </div>
          </div>
        </div>

        {/* Status indicators */}
        <div className="space-y-3 mb-6">
          <h3 className="text-sm font-bold text-slate-700 uppercase tracking-wide">Estado de los componentes</h3>
          {[
            { label: 'Documento de propuesta', status: 'En revisión interna', icon: FileText, color: 'yellow' },
            { label: 'Financiación', status: 'No acreditada', icon: AlertTriangle, color: 'red' },
            { label: 'Consorcio', status: 'No confirmado', icon: Users, color: 'red' },
            { label: 'Participación MERLIN-Edged', status: 'No acordada', icon: AlertTriangle, color: 'red' },
            { label: 'Elegibilidad verificada', status: 'Pendiente', icon: CheckCircle, color: 'slate' },
          ].map((item, i) => {
            const Icon = item.icon;
            const colorMap: Record<string, string> = {
              yellow: 'bg-yellow-50 border-yellow-200 text-yellow-700',
              red: 'bg-red-50 border-red-200 text-red-700',
              slate: 'bg-slate-50 border-slate-200 text-slate-600',
            };
            const iconColor: Record<string, string> = {
              yellow: 'text-yellow-500',
              red: 'text-red-500',
              slate: 'text-slate-400',
            };
            return (
              <div key={i} className={`flex items-center justify-between p-3 rounded-lg border ${colorMap[item.color]}`}>
                <div className="flex items-center gap-2">
                  <Icon className={`w-4 h-4 ${iconColor[item.color]}`} />
                  <span className="text-sm font-medium">{item.label}</span>
                </div>
                <span className="text-sm font-bold">{item.status}</span>
              </div>
            );
          })}
        </div>

        {/* Context */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-5">
          <h3 className="text-sm font-bold text-slate-700 mb-3">Contexto de la iniciativa</h3>
          <div className="space-y-2 text-sm text-slate-600">
            <p>
              MONTEMOLIN-AIHUB está explorando la posibilidad de presentar una propuesta en el marco de la convocatoria
              I3-2026-INV2a, orientada a la innovación industrial en entornos rurales y de transición energética.
            </p>
            <p>
              La referencia SEP-211421662 corresponde al registro interno de la propuesta documental que se encuentra
              en fase de revisión y no ha sido sometida a evaluación externa.
            </p>
            <p>
              Cualquier mención a potenciales socios, incluidos MERLIN Properties o Edged Energy, es exploratoria
              y no constituye compromiso, acuerdo ni solicitud de participación.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
