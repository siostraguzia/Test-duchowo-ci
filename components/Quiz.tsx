
import React from 'react';
import { QUESTIONS } from '../constants';

interface QuizProps {
  onComplete: (answers: Record<number, number>) => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [answers, setAnswers] = React.useState<Record<number, number>>({});
  const [animating, setAnimating] = React.useState(false);

  const progress = Math.round((currentIndex / QUESTIONS.length) * 100);
  const currentQuestion = QUESTIONS[currentIndex];

  const handleAnswer = (value: number) => {
    if (animating) return;
    
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);
    
    setAnimating(true);
    
    setTimeout(() => {
      if (currentIndex < QUESTIONS.length - 1) {
        setCurrentIndex(currentIndex + 1);
        setAnimating(false);
      } else {
        onComplete(newAnswers);
      }
    }, 400); // Wait for fade-out animation
  };

  const options = [
    { label: 'Zdecydowanie nie', value: 1, size: 'w-16 h-16', color: 'bg-rose-100 border-rose-400 text-rose-700' },
    { label: 'Raczej nie', value: 2, size: 'w-12 h-12', color: 'bg-rose-50 border-rose-300 text-rose-600' },
    { label: 'Trudno powiedzieć', value: 3, size: 'w-10 h-10', color: 'bg-stone-50 border-stone-300 text-stone-600' },
    { label: 'Raczej tak', value: 4, size: 'w-12 h-12', color: 'bg-emerald-50 border-emerald-300 text-emerald-600' },
    { label: 'Zdecydowanie tak', value: 5, size: 'w-16 h-16', color: 'bg-emerald-100 border-emerald-400 text-emerald-700' },
  ];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="mb-12">
        <div className="flex justify-between items-end mb-4">
          <div>
            <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">Postęp badania</span>
            <div className="text-2xl font-serif text-stone-800">{currentIndex + 1} / {QUESTIONS.length}</div>
          </div>
          <span className="text-lg font-bold text-amber-500">{progress}%</span>
        </div>
        <div className="w-full bg-stone-200 rounded-full h-3 overflow-hidden">
          <div 
            className="bg-gradient-to-r from-amber-400 to-amber-600 h-full transition-all duration-500 ease-out" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className={`
        bg-white rounded-3xl shadow-2xl p-8 md:p-16 mb-8 min-h-[400px] flex flex-col justify-center text-center
        transition-all duration-300 ease-in-out
        ${animating ? 'opacity-0 transform translate-x-4' : 'opacity-100 transform translate-x-0'}
      `}>
        <div className="mb-4 text-stone-300">
          <svg className="w-12 h-12 mx-auto opacity-20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16C10.9124 16 10.017 16.8954 10.017 18L10.017 21H4.01705C3.46477 21 3.01705 20.5523 3.01705 20V4C3.01705 3.44772 3.46477 3 4.01705 3H20.0171C20.5693 3 21.0171 3.44772 21.0171 4V20C21.0171 20.5523 20.5693 21 20.0171 21H14.017Z" />
          </svg>
        </div>
        
        <h2 className="text-2xl md:text-4xl font-serif text-stone-900 leading-tight mb-16 px-4">
          {currentQuestion.text}
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-10">
          <div className="hidden md:block text-[10px] font-black uppercase tracking-tighter text-rose-500 rotate-[-90deg]">Fałsz</div>
          <div className="flex items-center justify-center gap-3 md:gap-6">
            {options.map((opt) => (
              <button
                key={opt.value}
                onClick={() => handleAnswer(opt.value)}
                className={`
                  group relative flex flex-col items-center gap-2 focus:outline-none 
                  transition-all duration-200 hover:scale-110 active:scale-95
                `}
              >
                <div className={`
                  ${opt.size} rounded-full border-2 flex items-center justify-center shadow-sm
                  ${opt.color} cursor-pointer
                `}>
                  <div className="w-2 h-2 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <span className="absolute -bottom-10 whitespace-nowrap text-[10px] text-stone-400 font-bold opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  {opt.label}
                </span>
              </button>
            ))}
          </div>
          <div className="hidden md:block text-[10px] font-black uppercase tracking-tighter text-emerald-500 rotate-90">Prawda</div>
        </div>
      </div>

      <div className="flex justify-between items-center px-4">
        <button 
          onClick={() => currentIndex > 0 && setCurrentIndex(currentIndex - 1)}
          className={`flex items-center gap-2 text-sm font-bold text-stone-400 hover:text-amber-600 transition-colors ${currentIndex === 0 ? 'invisible' : ''}`}
        >
          <span className="text-lg">←</span> Wstecz
        </button>
        <span className="text-xs text-stone-300 font-mono">ID: {currentQuestion.id}</span>
      </div>
    </div>
  );
};

export default Quiz;
