import { EmotionDetail, EmotionType } from '@/entities/emotion/model/types';

export type EmotionPhase = {
  [K in EmotionType]: {
    type: K;
    detail: EmotionDetail<K>;
    timestamp?: string;
    note?: string;
  };
}[EmotionType];

export interface Log {
  id: string;
  personId: string;
  situation: string;
  emotionPhases: EmotionPhase[];
  date: Date;
  createdAt: Date;
}
