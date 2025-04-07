import { hexToRgb } from './hexToRgb';

// Делает цвет темнее на заданное значение (0-255)
export function darkenColor(hex: string, amount: number): string {
    const rgb = hexToRgb(hex);
    if (!rgb) return '#333';

    const r = Math.max(rgb.r - amount, 0);
    const g = Math.max(rgb.g - amount, 0);
    const b = Math.max(rgb.b - amount, 0);

    return `rgb(${r}, ${g}, ${b})`;
  }

  // Определяет, светлый ли цвет (для выбора цвета текста)
  // Значение 186 выбрано эмпирически, чтобы обеспечить хороший контраст между текстом и фоном
  // https://www.w3.org/WAI/GL/WCAG21/quickref/#contrast-minimum

  export function isLightColor(hex: string): boolean {
    const rgb = hexToRgb(hex);
    if (!rgb) return false;
    const luminance = 0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b;
    return luminance > 186;
  }
