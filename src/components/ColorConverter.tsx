import React, { useEffect, useState } from 'react';
import { hexToRgb } from '../utils/hexToRgb';
import { darkenColor, isLightColor } from '../utils/colorUtils';

interface ColorConverterProps {
  initialHex?: string;
}

export const ColorConverter: React.FC<ColorConverterProps> = () => {
// export const ColorConverter: React.FC<ColorConverterProps> = ({ initialHex = '#34495e' }) => {
  const [hexInput, setHexInput] = useState('#34495e'); // начальный цвет
  const [rgbOutput, setRgbOutput] = useState<{ r: number; g: number; b: number } | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [textColor, setTextColor] = useState<string>('white');
  const [rgbBgColor, setRgbBgColor] = useState<string>('#2c3e50'); // темнее стартового цвета

  const applyColor = (hex: string) => {
    const rgb = hexToRgb(hex);
    if (rgb) {
      setRgbOutput(rgb);
      setErrorMessage(null);

      // Меняем фон
      document.body.style.backgroundColor = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;

      // Настройка цвета фона и текста в rgb-output
      const darkened = darkenColor(hex, 20);
      setRgbBgColor(darkened);
      setTextColor(isLightColor(hex) ? '#222' : 'white');
    } else {
      setRgbOutput(null);
      setErrorMessage('Неверный формат HEX');
      document.body.style.backgroundColor = '#FFA500';
    }
  };

  useEffect(() => {
    applyColor('#34495e');
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newHex = event.target.value;
    setHexInput(newHex);
    setErrorMessage(null);

    if (newHex.length === 7) {
      applyColor(newHex);
    } else {
      setRgbOutput(null);
    }
  };

  return (
    <div className="color-converter">
      <input
        className="hex-input"
        type="text"
        placeholder="#FFFFFF"
        value={hexInput}
        onChange={handleInputChange}
        maxLength={7}
      />
      <div
        className="rgb-output"
        style={{ backgroundColor: rgbBgColor, color: textColor }}
      >
        {errorMessage ? 'Ошибка!' : (rgbOutput ? `rgb(${rgbOutput.r}, ${rgbOutput.g}, ${rgbOutput.b})` : '')}
      </div>
    </div>
  );
};
