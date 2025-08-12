
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { PredictionChart } from '@/components/PredictionChart';
import { HistoricalTrends } from '@/components/HistoricalTrends';
import { AirQualityMeter } from '@/components/AirQualityMeter';
import { PreviousDataMatches } from '@/components/PreviousDataMatches';
import { Cloud, Thermometer, Droplets, Wind, Activity, MapPin } from 'lucide-react';

const Index = () => {
  const [formData, setFormData] = useState({
    temperature: '',
    humidity: '',
    windSpeed: '',
    pressure: '',
    pm25: '',
    pm10: ''
  });
  
  const [prediction, setPrediction] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const simulatePrediction = () => {
    setIsLoading(true);
    
    // Simulate ML prediction based on Chennai's typical air quality patterns
    setTimeout(() => {
      const temp = parseFloat(formData.temperature) || 30;
      const humidity = parseFloat(formData.humidity) || 70;
      const windSpeed = parseFloat(formData.windSpeed) || 5;
      const pm25 = parseFloat(formData.pm25) || 50;
      const pm10 = parseFloat(formData.pm10) || 80;
      
      // Simple prediction algorithm considering Chennai's climate
      let aqi = 50;
      
      // Temperature impact (Chennai is hot and humid)
      if (temp > 35) aqi += 20;
      else if (temp < 25) aqi += 10;
      
      // Humidity impact
      if (humidity > 80) aqi += 15;
      else if (humidity < 50) aqi += 25;
      
      // Wind speed impact (disperses pollutants)
      if (windSpeed < 3) aqi += 30;
      else if (windSpeed > 10) aqi -= 20;
      
      // PM values direct impact
      aqi += (pm25 * 1.5) + (pm10 * 0.8);
      
      // Random variation
      aqi += Math.random() * 20 - 10;
      
      setPrediction(Math.max(0, Math.min(500, Math.round(aqi))));
      setIsLoading(false);
    }, 2000);
  };

  const getAirQualityCategory = (aqi: number) => {
    if (aqi <= 50) return { category: 'Good', color: 'bg-green-500', textColor: 'text-green-700' };
    if (aqi <= 100) return { category: 'Moderate', color: 'bg-yellow-500', textColor: 'text-yellow-700' };
    if (aqi <= 150) return { category: 'Unhealthy for Sensitive Groups', color: 'bg-orange-500', textColor: 'text-orange-700' };
    if (aqi <= 200) return { category: 'Unhealthy', color: 'bg-red-500', textColor: 'text-red-700' };
    if (aqi <= 300) return { category: 'Very Unhealthy', color: 'bg-purple-500', textColor: 'text-purple-700' };
    return { category: 'Hazardous', color: 'bg-red-800', textColor: 'text-red-900' };
  };

  const isFormValid = Object.values(formData).every(value => value !== '');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="h-8 w-8 text-blue-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Chennai Air Quality Predictor
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Advanced machine learning system for predicting air quality in Chennai using real-time environmental parameters
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Input Panel */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-green-500 text-white rounded-t-lg">
                <CardTitle className="flex items-center gap-2">
                  <Activity className="h-5 w-5" />
                  Environmental Parameters
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Enter current conditions for Chennai
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 p-6">
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="temperature" className="flex items-center gap-2">
                      <Thermometer className="h-4 w-4 text-red-500" />
                      Temperature (°C)
                    </Label>
                    <Input
                      id="temperature"
                      type="number"
                      placeholder="e.g., 32"
                      value={formData.temperature}
                      onChange={(e) => handleInputChange('temperature', e.target.value)}
                      className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="humidity" className="flex items-center gap-2">
                      <Droplets className="h-4 w-4 text-blue-500" />
                      Humidity (%)
                    </Label>
                    <Input
                      id="humidity"
                      type="number"
                      placeholder="e.g., 75"
                      value={formData.humidity}
                      onChange={(e) => handleInputChange('humidity', e.target.value)}
                      className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="windSpeed" className="flex items-center gap-2">
                      <Wind className="h-4 w-4 text-gray-500" />
                      Wind Speed (km/h)
                    </Label>
                    <Input
                      id="windSpeed"
                      type="number"
                      placeholder="e.g., 8"
                      value={formData.windSpeed}
                      onChange={(e) => handleInputChange('windSpeed', e.target.value)}
                      className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pressure" className="flex items-center gap-2">
                      <Cloud className="h-4 w-4 text-indigo-500" />
                      Pressure (hPa)
                    </Label>
                    <Input
                      id="pressure"
                      type="number"
                      placeholder="e.g., 1013"
                      value={formData.pressure}
                      onChange={(e) => handleInputChange('pressure', e.target.value)}
                      className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <Separator className="my-4" />

                  <div className="space-y-2">
                    <Label htmlFor="pm25" className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-red-500"></div>
                      PM2.5 (µg/m³)
                    </Label>
                    <Input
                      id="pm25"
                      type="number"
                      placeholder="e.g., 45"
                      value={formData.pm25}
                      onChange={(e) => handleInputChange('pm25', e.target.value)}
                      className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="pm10" className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-orange-500"></div>
                      PM10 (µg/m³)
                    </Label>
                    <Input
                      id="pm10"
                      type="number"
                      placeholder="e.g., 85"
                      value={formData.pm10}
                      onChange={(e) => handleInputChange('pm10', e.target.value)}
                      className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <Button 
                  onClick={simulatePrediction}
                  disabled={!isFormValid || isLoading}
                  className="w-full bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 transition-all duration-300"
                  size="lg"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Predicting...
                    </div>
                  ) : (
                    'Predict Air Quality'
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-2 space-y-6">
            {prediction !== null && (
              <>
                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="text-2xl">Prediction Results</CardTitle>
                    <CardDescription>
                      Air Quality Index (AQI) prediction for Chennai
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-center mb-6">
                      <AirQualityMeter aqi={prediction} />
                    </div>
                    
                    <div className="text-center space-y-4">
                      <div className="text-6xl font-bold text-gray-800">
                        {prediction}
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={`${getAirQualityCategory(prediction).color} text-white text-lg px-6 py-2`}
                      >
                        {getAirQualityCategory(prediction).category}
                      </Badge>
                      
                      <Alert className="text-left">
                        <Activity className="h-4 w-4" />
                        <AlertDescription>
                          {prediction <= 50 && "Air quality is satisfactory and poses little risk."}
                          {prediction > 50 && prediction <= 100 && "Air quality is acceptable for most people. Sensitive individuals should consider reducing outdoor activities."}
                          {prediction > 100 && prediction <= 150 && "Members of sensitive groups may experience health effects. General public is not likely to be affected."}
                          {prediction > 150 && prediction <= 200 && "Health effects may occur for sensitive individuals. General public may experience mild symptoms."}
                          {prediction > 200 && prediction <= 300 && "Health alert: everyone may experience serious health effects."}
                          {prediction > 300 && "Health warnings of emergency conditions. Everyone is likely to be affected."}
                        </AlertDescription>
                      </Alert>
                    </div>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <PredictionChart currentAqi={prediction} />
                  <HistoricalTrends />
                </div>
                
                <PreviousDataMatches 
                  currentTemperature={formData.temperature}
                  currentHumidity={formData.humidity}
                />
              </>
            )}
            
            {prediction === null && (
              <>
                <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
                  <CardContent className="flex items-center justify-center py-12">
                    <div className="text-center space-y-4">
                      <Activity className="h-16 w-16 text-gray-400 mx-auto" />
                      <h3 className="text-xl font-semibold text-gray-600">
                        Ready for Prediction
                      </h3>
                      <p className="text-gray-500">
                        Fill in all environmental parameters and click predict to see the air quality forecast for Chennai
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <PreviousDataMatches 
                  currentTemperature={formData.temperature}
                  currentHumidity={formData.humidity}
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
