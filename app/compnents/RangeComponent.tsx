import React, { ChangeEvent } from 'react';

interface RangeComponentProps {
  value: number;
  onChange: (newValue: number) => void;
}

 export default function RangeComponent({ value, onChange }: RangeComponentProps) {
    
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    onChange(newValue);
  };

  return (
    <input
      type="range"
      min="0"
      max="100"
      step="1"
      value={value}
      onChange={handleChange}
    />
  );
}
