
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { BarChart3 } from 'lucide-react';

export const HistoricalTrends = () => {
  // Simulated historical data for Chennai
  const historicalData = [
    { month: 'Jan', aqi: 85, pm25: 45, pm10: 78 },
    { month: 'Feb', aqi: 92, pm25: 52, pm10: 85 },
    { month: 'Mar', aqi: 105, pm25: 58, pm10: 92 },
    { month: 'Apr', aqi: 125, pm25: 72, pm10: 108 },
    { month: 'May', aqi: 140, pm25: 85, pm10: 125 },
    { month: 'Jun', aqi: 95, pm25: 48, pm10: 82 },
    { month: 'Jul', aqi: 78, pm25: 38, pm10: 68 },
    { month: 'Aug', aqi: 82, pm25: 42, pm10: 72 },
    { month: 'Sep', aqi: 88, pm25: 45, pm10: 78 },
    { month: 'Oct', aqi: 115, pm25: 65, pm10: 98 },
    { month: 'Nov', aqi: 135, pm25: 78, pm10: 118 },
    { month: 'Dec', aqi: 98, pm25: 55, pm10: 88 }
  ];

  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BarChart3 className="h-5 w-5 text-green-500" />
          Historical Trends
        </CardTitle>
        <CardDescription>
          Average monthly AQI for Chennai (2024)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={historicalData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="month" 
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
            <Line
              type="monotone"
              dataKey="aqi"
              stroke="#10b981"
              strokeWidth={3}
              dot={{ fill: '#10b981', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#10b981', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="mt-4 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-sm text-gray-500">Best Month</p>
            <p className="font-semibold text-green-600">July (78)</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Worst Month</p>
            <p className="font-semibold text-red-600">May (140)</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Average</p>
            <p className="font-semibold text-blue-600">101</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
