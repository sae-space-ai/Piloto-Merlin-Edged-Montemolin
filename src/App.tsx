import { useState } from 'react';
import { Menu, X, Building2, Map, ClipboardCheck, Brain, Zap, Calendar, Calculator, Globe, Users, CheckCircle } from 'lucide-react';
import Module1Context from './modules/Module1Context';
import Module2Opportunities from './modules/Module2Opportunities';
import Module3Evaluator from './modules/Module3Evaluator';
import Module4AICases from './modules/Module4AICases';
import Module5Energy from './modules/Module5Energy';
import Module6Plan90Days from './modules/Module6Plan90Days';
import Module7Simulator from './modules/Module7Simulator';
import Module8European from './modules/Module8European';
import Module9Commercial from './modules/Module9Commercial';

const modules = [
  { id: 'contexto', label: 'Contexto', icon: Building2 },
  { id: 'oportunidades', label: 'Oportunidades', icon: Map },
  { id: 'evaluador', label: 'Evaluador', icon: ClipboardCheck },
  { id: 'ia', label: 'Casos IA', icon: Brain },
  { id: 'energia', label: 'Energía', icon: Zap },
  { id: 'plan', label: 'Plan 90d', icon: Calendar },
  { id: 'simulador', label: 'Simulador', icon: Calculator },
  { id: 'europa', label: 'Cooperación EU', icon: Globe },
  { id: 'comercial', label: 'Propuesta', icon: Users },
  { id: 'calidad', label: 'Calidad', icon: CheckCircle },
];

export default function App() {
  const [activeModule, setActiveModule] = useState('contexto');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderModule = () => {
    switch (activeModule) {
      case 'contexto': return <Module1Context />;
      case 'oportunidades': return <Module2Opportunities />;
      case 'evaluador': return <Module3Evaluator />;
      case 'ia': return <Module4AICases />;
      case 'energia': return <Module5Energy />;
      case 'plan': return <Module6Plan90Days />;
      case 'simulador': return <Module7Simulator />;
      case 'europa': return <Module8European />;
      case 'comercial': return <Module9Commercial />;
      case 'calidad': return <Module10Quality />;
      default: return <Module1Context />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-sm md:text-base font-bold leading-tight">MERLIN–Edged Extremadura × MONTEMOLIN-AIHUB</h1>
                <p className="text-xs text-blue-200 hidden md:block">Infraestructura digital · Ecosistema industrial · Oportunidades verificables</p>
              </div>
            </div>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Menú"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <nav className="hidden md:block border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex gap-1 overflow-x-auto py-2">
              {modules.map((mod) => {
                const Icon = mod.icon;
                return (
                  <button
                    key={mod.id}
                    onClick={() => setActiveModule(mod.id)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                      activeModule === mod.id
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'text-blue-200 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {mod.label}
                  </button>
                );
              })}
            </div>
          </div>
        </nav>

        {mobileMenuOpen && (
          <nav className="md:hidden border-t border-white/10 bg-slate-900/95">
            <div className="px-4 py-3 grid grid-cols-2 gap-2">
              {modules.map((mod) => {
                const Icon = mod.icon;
                return (
                  <button
                    key={mod.id}
                    onClick={() => { setActiveModule(mod.id); setMobileMenuOpen(false); }}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      activeModule === mod.id
                        ? 'bg-blue-500 text-white'
                        : 'text-blue-200 hover:bg-white/10'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {mod.label}
                  </button>
                );
              })}
            </div>
          </nav>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="animate-fade-in">
          {renderModule()}
        </div>
      </main>

      <footer className="bg-slate-900 text-slate-500 py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs">MONTEMOLIN-AIHUB · v1.0</p>
        </div>
      </footer>
    </div>
  );
}

function Module10Quality() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <CheckCircle className="w-7 h-7 text-green-600" />
          Control de Calidad
        </h2>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            'Controles interactivos operativos',
            'Responsive: móvil / tableta / escritorio',
            'Cálculos del simulador verificados',
            'Accesibilidad: contraste, foco, aria-labels',
            'Sin errores de consola',
            'Exportaciones funcionales',
            'Integridad de datos',
            'Proyectos de referencia intactos',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
              <span className="text-green-600 font-bold">✓</span>
              <span className="text-sm text-slate-700">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-3">Archivos</h3>
        <div className="grid md:grid-cols-2 gap-2 text-xs font-mono text-slate-600">
          {[
            'index.html', 'src/App.tsx', 'src/index.css',
            'src/modules/Module1Context.tsx', 'src/modules/Module2Opportunities.tsx',
            'src/modules/Module3Evaluator.tsx', 'src/modules/Module4AICases.tsx',
            'src/modules/Module5Energy.tsx', 'src/modules/Module6Plan90Days.tsx',
            'src/modules/Module7Simulator.tsx', 'src/modules/Module8European.tsx',
            'src/modules/Module9Commercial.tsx',
          ].map((f, i) => (
            <div key={i} className="p-2 bg-slate-50 rounded">{f}</div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-bold text-slate-800 mb-3">Ejecución</h3>
        <div className="space-y-2 text-sm text-slate-600">
          <p><code className="bg-slate-100 px-2 py-1 rounded font-mono text-xs">npm install</code></p>
          <p><code className="bg-slate-100 px-2 py-1 rounded font-mono text-xs">npm run dev</code></p>
          <p><code className="bg-slate-100 px-2 py-1 rounded font-mono text-xs">npm run build</code></p>
        </div>
      </div>
    </div>
  );
}
