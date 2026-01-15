
export type AxisID = 'source' | 'language' | 'style' | 'growth';

export interface Question {
  id: number;
  text: string;
  axis: AxisID;
  invert: boolean;
}

export interface AxisResult {
  leftLabel: string;
  rightLabel: string;
  percentageLeft: number;
  percentageRight: number;
  score: number;
}

export interface Saint {
  name: string;
  note: string;
}

export interface Persona {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  strengths: string[];
  shadows: string[];
  growth: string[];
  saints: Saint[];
  matchCriteria: (results: Record<AxisID, number>) => boolean;
}

export interface QuizState {
  answers: Record<number, number>;
  currentQuestionIndex: number;
}
