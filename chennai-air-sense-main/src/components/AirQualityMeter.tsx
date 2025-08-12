
import { useEffect, useState } from 'react';

interface AirQualityMeterProps {
  aqi: number;
}

export const AirQualityMeter = ({ aqi }: AirQualityMeterProps) => {
  const [animatedAqi, setAnimatedAqi] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedAqi(aqi);
    }, 100);
    return () => clearTimeout(timer);
  }, [aqi]);

  const getColor = (value: number) => {
    if (value <= 50) return '#22c55e'; // green
    if (value <= 100) return '#eab308'; // yellow
    if (value <= 150) return '#f97316'; // orange
    if (value <= 200) return '#ef4444'; // red
    if (value <= 300) return '#a855f7'; // purple
    return '#7f1d1d'; // dark red
  };

  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = circumference;
  const strokeDashoffset = circumference - (animatedAqi / 500) * circumference;

  return (
    <div className="relative w-32 h-32">
      <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke="#e5e7eb"
          strokeWidth="8"
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          stroke={getColor(animatedAqi)}
          strokeWidth="8"
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold text-gray-800">
          {Math.round(animatedAqi)}
        </span>
      </div>
    </div>
  );
};
