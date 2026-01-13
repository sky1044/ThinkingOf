import {
  AnyEmotionDetail,
  EMOTION_DETAILS,
  EmotionDetail,
  EmotionType,
} from './types';

type BaseHsl = { h: number; s: number; l: number };

export type HslTriplet = `${number} ${number}% ${number}%`;

export type EmotionCssVars = {
  '--emotion-main': HslTriplet;
  '--emotion-soft': HslTriplet;
  '--emotion-border': HslTriplet;
  '--emotion-text': HslTriplet;
};

export type EmotionDetailCssVars = {
  '--emotion-detail': HslTriplet;
};

const clamp = (n: number, min: number, max: number) =>
  Math.min(max, Math.max(min, n));
const toTriplet = (h: number, s: number, l: number): HslTriplet =>
  `${Math.round(h)} ${Math.round(s)}% ${Math.round(l)}%`;

const pickText = (base: BaseHsl): HslTriplet => {
  return base.l < 51 ? toTriplet(0, 0, 98) : toTriplet(0, 0, 10);
}; // 밝기가 낮으면 밝은 텍스트, 높으면 어두운 텍스트

export const EMOTION_BASE_HSL: Record<EmotionType, BaseHsl> = {
  happiness: { h: 50, s: 90, l: 55 }, // yellow
  love: { h: 345, s: 80, l: 55 }, // pink
  anger: { h: 5, s: 85, l: 52 }, // red
  disgust: { h: 92, s: 55, l: 42 }, // olive
  envy: { h: 128, s: 55, l: 42 }, // green
  jealousy: { h: 140, s: 55, l: 40 }, // dark green
  sadness: { h: 210, s: 45, l: 45 }, // blue
  fear: { h: 220, s: 15, l: 18 }, // black
  shame: { h: 350, s: 35, l: 32 }, // burgundy
  guilt: { h: 270, s: 18, l: 28 }, // gray purple
};

export const getEmotionTypeVars = (type: EmotionType): EmotionCssVars => {
  const base = EMOTION_BASE_HSL[type];

  const main = toTriplet(base.h, base.s, base.l);
  const soft = toTriplet(
    base.h,
    clamp(base.s - 35, 10, 90),
    clamp(base.l + 35, 80, 96),
  );
  const border = toTriplet(
    base.h,
    clamp(base.s - 20, 10, 90),
    clamp(base.l + 10, 65, 90),
  );
  const text = pickText(base);

  return {
    '--emotion-main': main,
    '--emotion-soft': soft,
    '--emotion-border': border,
    '--emotion-text': text,
  };
};

const makeDetailTriplet = (base: BaseHsl, index: number): HslTriplet => {
  const lightnessWave = [-10, -6, -2, 2, 6, 10, 12, 8, 4, 0];
  const saturationWave = [-8, -4, -2, 0, 2, 4, 6, 3, 1, -1];

  const dl = lightnessWave[index % lightnessWave.length] ?? 0;
  const ds = saturationWave[index % saturationWave.length] ?? 0;

  const s = clamp(base.s + ds, 10, 92);
  const l = clamp(base.l + dl, 28, 78);

  return toTriplet(base.h, s, l);
};

const EMOTION_DETAIL_TRIPLETS: Record<
  EmotionType,
  Record<string, HslTriplet>
> = Object.fromEntries(
  (Object.keys(EMOTION_DETAILS) as EmotionType[]).map((type) => {
    const base = EMOTION_BASE_HSL[type];
    const details = EMOTION_DETAILS[type];

    const map = Object.fromEntries(
      details.map(
        (detail, idx) => [detail, makeDetailTriplet(base, idx)] as const,
      ),
    );
    return [type, map] as const;
  }),
) as Record<EmotionType, Record<string, HslTriplet>>;

export const getEmotionDetailVars = <T extends EmotionType>(
  type: T,
  detail: EmotionDetail<T>,
): EmotionDetailCssVars => {
  const triplet =
    EMOTION_DETAIL_TRIPLETS[type]?.[detail as unknown as AnyEmotionDetail] ??
    getEmotionTypeVars(type)['--emotion-main'];

  return { '--emotion-detail': triplet };
};

export const EMOTION_TOKEN_CLASSES =
  'border border-[hsl(--emotion-border)] ' +
  'bg-[hsl(--emotion-soft)]' +
  'text-[hsl(--emotion-text)]';

export const EMOTION_MAIN_TEXT_CLASSES = 'text-[hsl(--emotion-main)]';
export const EMOTION_DETAIL_BG_CLASSES = 'bg-[hsl(--emotion-detail)]';
