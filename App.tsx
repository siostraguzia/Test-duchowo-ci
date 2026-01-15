
import React from 'react';
import Quiz from './components/Quiz';
import Results from './components/Results';

const App: React.FC = () => {
  const [stage, setStage] = React.useState<'landing' | 'quiz' | 'results'>('landing');
  const [answers, setAnswers] = React.useState<Record<number, number>>({});

  const startQuiz = () => {
    setStage('quiz');
    scrollToAppTop();
  };
  
  const handleComplete = (finalAnswers: Record<number, number>) => {
    setAnswers(finalAnswers);
    setStage('results');
    scrollToAppTop();
  };

  const scrollToAppTop = () => {
    const element = document.getElementById('dominikanki-app-root');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-col bg-[#FDFCFB] text-stone-900 w-full max-w-full">
      {/* Navigation - bardziej kompaktowa dla osadzenia */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-stone-100 px-6 py-4 flex justify-between items-center sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-stone-800 to-stone-950 rounded-xl flex items-center justify-center text-white font-bold shadow-lg shadow-stone-200">
            <span className="text-xl">D</span>
          </div>
          <div>
            <span className="font-serif text-lg md:text-xl font-bold text-stone-800 block leading-none">dominikanki.pl</span>
            <span className="text-[8px] uppercase font-black tracking-[0.2em] text-amber-600">Duchowość i Rozwój</span>
          </div>
        </div>
        <div className="hidden sm:flex gap-4 items-center">
          <div className="text-[10px] font-black text-stone-400 tracking-[0.2em] uppercase">
            Test Stylów Duchowości
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow">
        {stage === 'landing' && (
          <div className="animate-fade-in">
            {/* Hero Section */}
            <div className="max-w-5xl mx-auto px-6 pt-12 pb-20 text-center">
              <div className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                Poznaj siebie w świetle wiary
              </div>
              <h1 className="text-4xl md:text-7xl font-serif text-stone-900 mb-6 leading-tight tracking-tight">
                Poznaj swój unikalny <br/> <span className="text-amber-600 italic">styl wiary</span>.
              </h1>
              <p className="text-lg md:text-xl text-stone-500 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                Czy wiesz, że Twoja osobowość kształtuje sposób, w jaki słyszysz Boga? Wykryj swoje naturalne skłonności i dowiedz się, jak wzrastać w pełni z dominikanki.pl.
              </p>
              
              <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
                <button 
                  onClick={startQuiz}
                  className="px-10 py-5 bg-stone-900 text-white rounded-2xl text-lg font-bold shadow-2xl hover:bg-stone-800 transition-all hover:scale-105 active:scale-95 group"
                >
                  Rozpocznij badanie 
                  <span className="ml-3 group-hover:translate-x-1 transition-transform inline-block">→</span>
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-8 text-left border-t border-stone-100 pt-16">
                <div className="space-y-3 group">
                  <div className="w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center text-xl group-hover:bg-amber-100 group-hover:text-amber-600 transition-colors">⚖️</div>
                  <h3 className="text-md font-bold text-stone-800">4 Kluczowe Osie</h3>
                  <p className="text-stone-500 leading-relaxed text-sm">Zbadaj swoje Źródło, Język, Styl i Drogę Wzrostu w oparciu o modele psychologiczne.</p>
                </div>
                <div className="space-y-3 group">
                  <div className="w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center text-xl group-hover:bg-amber-100 group-hover:text-amber-600 transition-colors">🕍</div>
                  <h3 className="text-md font-bold text-stone-800">Patroni Twojej Drogi</h3>
                  <p className="text-stone-500 leading-relaxed text-sm">Odkryj świętych, którzy przeżywali wiarę podobnie do Ciebie.</p>
                </div>
                <div className="space-y-3 group">
                  <div className="w-12 h-12 bg-stone-100 rounded-2xl flex items-center justify-center text-xl group-hover:bg-amber-100 group-hover:text-amber-600 transition-colors">🧠</div>
                  <h3 className="text-md font-bold text-stone-800">Analiza AI</h3>
                  <p className="text-stone-500 leading-relaxed text-sm">Otrzymaj personalizowane słowo wsparcia od sztucznej inteligencji.</p>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-stone-900 py-16 px-6 text-white text-center rounded-3xl mx-4 mb-12">
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="text-3xl">🕯️</div>
                <h2 className="text-2xl md:text-3xl font-serif italic">"Gdzie jest Twój skarb, tam będzie i serce Twoje."</h2>
                <p className="text-stone-400 font-light text-sm">Ponad 10 000 osób odkryło już swój styl duchowości. Dołącz do nich i zacznij świadomie budować swoją relację z Bogiem.</p>
              </div>
            </div>
          </div>
        )}

        {stage === 'quiz' && <Quiz onComplete={handleComplete} />}
        {stage === 'results' && <Results answers={answers} />}
      </main>

      {/* Footer dla WordPress - uproszczony */}
      <footer className="bg-white border-t border-stone-100 py-8 px-6 text-center">
        <div className="max-w-5xl mx-auto flex flex-col items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-stone-900 rounded flex items-center justify-center text-white font-bold text-xs">D</div>
            <span className="text-[10px] font-black uppercase tracking-widest text-stone-400">dominikanki.pl &copy; 2024</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
