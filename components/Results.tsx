
import React from 'react';
import { Persona, AxisResult, AxisID } from '../types';
import { PERSONAS, QUESTIONS, AXIS_INFO } from '../constants';
import { generateSpiritualInsight } from '../geminiService';

interface ResultsProps {
  answers: Record<number, number>;
}

const Results: React.FC<ResultsProps> = ({ answers }) => {
  const [insight, setInsight] = React.useState<string | null>(null);
  const [loadingInsight, setLoadingInsight] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  const calculateResults = (): { persona: Persona; axes: Record<AxisID, AxisResult> } => {
    const scores: Record<AxisID, number[]> = { source: [], language: [], style: [], growth: [] };

    QUESTIONS.forEach(q => {
      let val = answers[q.id] || 3;
      let normalized = (val - 1) * 25;
      if (q.invert) normalized = 100 - normalized;
      scores[q.axis].push(normalized);
    });

    const axisAverages: Record<AxisID, number> = {
      source: scores.source.reduce((a, b) => a + b, 0) / scores.source.length,
      language: scores.language.reduce((a, b) => a + b, 0) / scores.language.length,
      style: scores.style.reduce((a, b) => a + b, 0) / scores.style.length,
      growth: scores.growth.reduce((a, b) => a + b, 0) / scores.growth.length,
    };

    const axes: Record<AxisID, AxisResult> = {} as any;
    (Object.keys(axisAverages) as AxisID[]).forEach(id => {
      const score = axisAverages[id];
      axes[id] = {
        leftLabel: AXIS_INFO[id].left,
        rightLabel: AXIS_INFO[id].right,
        percentageLeft: Math.round(100 - score),
        percentageRight: Math.round(score),
        score
      };
    });

    const persona = PERSONAS.find(p => p.matchCriteria(axisAverages)) || PERSONAS[0];
    return { persona, axes };
  };

  const { persona, axes } = calculateResults();
  const axisArray = Object.entries(axes);

  const handleGetInsight = async () => {
    setLoadingInsight(true);
    const text = await generateSpiritualInsight(persona, Object.values(axes));
    setInsight(text);
    setLoadingInsight(false);
  };

  const handleShare = () => {
    const text = `Moim stylem duchowości jest: ${persona.name}. Odkryj swój na dominikanki.pl!`;
    if (navigator.share) {
      navigator.share({ title: 'dominikanki.pl - Mój Styl Duchowości', text, url: window.location.href });
    } else {
      navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 animate-fade-in">
      {/* Hero Header */}
      <div className="relative h-[400px] rounded-3xl overflow-hidden mb-12 shadow-2xl group">
        <img 
          src={persona.imageUrl} 
          alt={persona.name} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/40 to-transparent"></div>
        <div className="absolute bottom-0 left-0 p-8 md:p-12">
          <p className="text-amber-400 font-bold uppercase tracking-[0.3em] mb-4 text-xs md:text-sm">Twoja ścieżka to:</p>
          <h1 className="text-4xl md:text-7xl font-serif text-white mb-6 leading-none">{persona.name}</h1>
          <p className="text-lg md:text-xl text-stone-200 max-w-2xl font-light italic leading-relaxed">
            "{persona.description}"
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Main Stats column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Strengths & Shadows */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100">
              <h3 className="text-lg font-black text-emerald-800 mb-6 uppercase tracking-wider flex items-center gap-2">
                <span className="p-1 bg-emerald-100 rounded">✨</span> Blaski
              </h3>
              <ul className="space-y-4">
                {persona.strengths.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-700 font-medium">
                    <span className="text-emerald-500 mt-1">✓</span> {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-stone-100">
              <h3 className="text-lg font-black text-rose-800 mb-6 uppercase tracking-wider flex items-center gap-2">
                <span className="p-1 bg-rose-100 rounded">🌑</span> Cienie
              </h3>
              <ul className="space-y-4">
                {persona.shadows.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-700 font-medium">
                    <span className="text-rose-500 mt-1">!</span> {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Detailed Axes */}
          <div className="bg-stone-50 rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-serif text-stone-900 mb-12 text-center">Analiza Twoich Osób Duchowych</h2>
            <div className="space-y-16">
              {axisArray.map(([id, axis], idx) => (
                <div key={id} className="group">
                  <div className="flex justify-between items-center mb-4">
                    <div className={`text-sm font-black uppercase tracking-widest ${axis.percentageLeft > axis.percentageRight ? 'text-amber-700' : 'text-stone-400'}`}>
                      {axis.leftLabel}
                    </div>
                    <div className={`text-sm font-black uppercase tracking-widest ${axis.percentageRight > axis.percentageLeft ? 'text-amber-700' : 'text-stone-400'}`}>
                      {axis.rightLabel}
                    </div>
                  </div>
                  <div className="w-full bg-stone-200 h-6 rounded-full overflow-hidden flex shadow-inner relative">
                    <div 
                      className={`h-full transition-all duration-1000 ease-out flex items-center justify-end px-4 ${axis.percentageLeft > axis.percentageRight ? 'bg-amber-500' : 'bg-stone-300'}`}
                      style={{ width: `${axis.percentageLeft}%` }}
                    >
                      {axis.percentageLeft > 20 && <span className="text-[10px] font-black text-white">{axis.percentageLeft}%</span>}
                    </div>
                    <div 
                      className={`h-full transition-all duration-1000 ease-out flex items-center justify-start px-4 ${axis.percentageRight > axis.percentageLeft ? 'bg-amber-500' : 'bg-stone-300'}`}
                      style={{ width: `${axis.percentageRight}%` }}
                    >
                      {axis.percentageRight > 20 && <span className="text-[10px] font-black text-white">{axis.percentageRight}%</span>}
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-white rounded-xl border border-stone-100 opacity-80 group-hover:opacity-100 transition-opacity">
                    <p className="text-xs text-stone-600 leading-relaxed italic">
                      <strong>{AXIS_INFO[id as AxisID].desc}</strong> – {AXIS_INFO[id as AxisID].longDesc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Saints & Share */}
        <div className="space-y-8">
          {/* Saints */}
          <div className="bg-amber-50 rounded-3xl p-8 border border-amber-100 shadow-sm">
            <h3 className="text-xl font-serif text-amber-900 mb-6 flex items-center gap-2">
              <span className="text-2xl">🕊️</span> Twoi Patronowie
            </h3>
            <div className="space-y-6">
              {persona.saints.map((saint, i) => (
                <div key={i} className="border-l-2 border-amber-300 pl-4 py-1">
                  <div className="font-bold text-amber-900">{saint.name}</div>
                  <div className="text-xs text-amber-700/80 leading-snug mt-1">{saint.note}</div>
                </div>
              ))}
            </div>
          </div>

          {/* AI Insight */}
          <div className="bg-stone-900 rounded-3xl p-8 text-white shadow-xl">
            <h3 className="text-lg font-serif mb-4 flex items-center gap-2">
              <span className="text-amber-400">✧</span> Przesłanie AI
            </h3>
            {!insight ? (
              <button 
                onClick={handleGetInsight}
                disabled={loadingInsight}
                className="w-full py-4 bg-amber-600 hover:bg-amber-500 disabled:opacity-50 text-white rounded-2xl font-bold transition-all"
              >
                {loadingInsight ? 'Słucham ducha...' : 'Generuj Słowo na drogę'}
              </button>
            ) : (
              <div className="text-sm font-light leading-relaxed whitespace-pre-wrap text-stone-300">
                {insight}
              </div>
            )}
          </div>

          {/* Social Share */}
          <div className="bg-white rounded-3xl p-8 border border-stone-100 text-center">
            <h3 className="text-sm font-black uppercase tracking-widest text-stone-400 mb-6">Podziel się</h3>
            <div className="flex justify-center gap-4">
              <button 
                onClick={handleShare}
                className={`p-4 rounded-full transition-all ${copied ? 'bg-emerald-500 text-white' : 'bg-stone-100 text-stone-600 hover:bg-stone-200'}`}
              >
                {copied ? '✓ Skopiowano' : '🔗 Link'}
              </button>
              <button className="p-4 rounded-full bg-stone-900 text-white hover:opacity-90">𝕏</button>
              <button className="p-4 rounded-full bg-[#1877F2] text-white hover:opacity-90">f</button>
            </div>
          </div>

          <button 
            onClick={() => window.location.reload()}
            className="w-full py-4 text-stone-400 hover:text-stone-800 transition-colors text-sm font-bold uppercase tracking-widest"
          >
            ↺ Powtórz test
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
