
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { TrendingUp } from 'lucide-react';

interface PredictionChartProps {
  currentAqi: number;
}

export const PredictionChart = ({ currentAqi }: PredictionChartProps) => {
  // Generate forecast data based on current AQI
  const generateForecastData = (baseAqi: number) => {
    const data = [];
    const hours = ['Now', '1h', '2h', '3h', '4h', '5h', '6h'];
    
    for (let i = 0; i < hours.length; i++) {
      const variation = Math.random() * 40 - 20; // ±20 variation
      const trend = i * 2; // slight upward trend
      const aqi = Math.max(0, Math.min(500, baseAqi + variation + trend));
      
      data.push({
        time: hours[i],
        aqi: Math.round(aqi),
        pm25: Math.round(aqi * 0.6 + Math.random() * 10),
        pm10: Math.round(aqi * 0.8 + Math.random() * 15)
      });
    }
    
    return data;
  };

  const forecastData = generateForecastData(currentAqi);

  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5 text-blue-500" />
          6-Hour Forecast
        </CardTitle>
        <CardDescription>
          Predicted air quality trend for Chennai
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <AreaChart data={forecastData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="time" 
              stroke="#6b7280"
              fontSize={12}
            />
            <YAxis 
              stroke="#6b7280"
              fontSize={12}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Area
              type="monotone"
              dataKey="aqi"
              stroke="#3b82f6"
              fill="url(#colorAqi)"
              strokeWidth={2}
            />
            <defs>
              <linearGradient id="colorAqi" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.05}/>
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
