// Функция для преобразования HEX-цвета в RGB-формат
// Функция hexToRgb принимает строку в формате HEX и возвращает объект с компонентами RGB или null,
// если формат неверный

export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    // Проверяем, что строка начинается с '#' и имеет длину 7 символов
    if (!(/^#[0-9A-Fa-f]{6}$/.test(hex))) {
      return null;
    }

    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return { r, g, b };
  }