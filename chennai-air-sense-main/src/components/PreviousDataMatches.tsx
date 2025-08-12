import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Thermometer, Droplets, Clock } from 'lucide-react';

interface PreviousDataMatchesProps {
  currentTemperature: string;
  currentHumidity: string;
}

interface HistoricalDataPoint {
  date: string;
  temperature: number;
  humidity: number;
  aqi: number;
  description: string;
}

export const PreviousDataMatches = ({ currentTemperature, currentHumidity }: PreviousDataMatchesProps) => {
  // Simulated historical data for Chennai covering last 25 years (1999-2024)
  const historicalData: HistoricalDataPoint[] = [
    // 1999 - Early data points
    { date: '1999-06-15', temperature: 28, humidity: 88, aqi: 65, description: 'Monsoon season, clean air quality' },
    { date: '1999-08-22', temperature: 29, humidity: 82, aqi: 72, description: 'Post-monsoon, moderate conditions' },
    { date: '1999-12-10', temperature: 24, humidity: 78, aqi: 68, description: 'Winter chill, good air quality' },
    
    // 2000-2004 - Early 2000s
    { date: '2000-03-18', temperature: 34, humidity: 70, aqi: 95, description: 'Spring heat, moderate pollution' },
    { date: '2000-07-05', temperature: 27, humidity: 92, aqi: 58, description: 'Heavy monsoon, excellent air' },
    { date: '2001-01-25', temperature: 26, humidity: 75, aqi: 72, description: 'Cold morning, clear skies' },
    { date: '2001-05-12', temperature: 39, humidity: 68, aqi: 125, description: 'Extreme heat, poor air quality' },
    { date: '2002-09-30', temperature: 32, humidity: 76, aqi: 88, description: 'Autumn warmth, moderate conditions' },
    { date: '2003-02-14', temperature: 31, humidity: 72, aqi: 85, description: 'Late winter, comfortable weather' },
    { date: '2003-11-08', temperature: 28, humidity: 85, aqi: 78, description: 'Pre-monsoon, humid conditions' },
    { date: '2004-04-25', temperature: 37, humidity: 65, aqi: 115, description: 'Summer peak, dry heat' },
    
    // 2005-2009 - Mid 2000s
    { date: '2005-06-20', temperature: 29, humidity: 87, aqi: 82, description: 'Monsoon onset, improving air' },
    { date: '2005-10-15', temperature: 33, humidity: 74, aqi: 95, description: 'Post-monsoon heat, moderate air' },
    { date: '2006-01-08', temperature: 25, humidity: 80, aqi: 75, description: 'Winter morning, good visibility' },
    { date: '2006-08-12', temperature: 28, humidity: 90, aqi: 68, description: 'Peak monsoon, clean atmosphere' },
    { date: '2007-03-05', temperature: 35, humidity: 72, aqi: 105, description: 'Spring heat, increasing pollution' },
    { date: '2007-12-22', temperature: 23, humidity: 76, aqi: 70, description: 'Winter solstice, clear air' },
    { date: '2008-05-18', temperature: 41, humidity: 62, aqi: 135, description: 'Record heat, very poor air' },
    { date: '2008-09-25', temperature: 31, humidity: 78, aqi: 88, description: 'Autumn transition, moderate air' },
    { date: '2009-02-11', temperature: 30, humidity: 74, aqi: 82, description: 'Late winter, comfortable conditions' },
    
    // 2010-2014 - Early 2010s
    { date: '2010-07-08', temperature: 26, humidity: 94, aqi: 62, description: 'Heavy rains, excellent air quality' },
    { date: '2010-11-30', temperature: 27, humidity: 83, aqi: 78, description: 'Late autumn, good conditions' },
    { date: '2011-04-14', temperature: 36, humidity: 68, aqi: 110, description: 'Summer heat, poor air quality' },
    { date: '2011-08-19', temperature: 27, humidity: 89, aqi: 72, description: 'Monsoon activity, clean air' },
    { date: '2012-01-03', temperature: 24, humidity: 79, aqi: 73, description: 'New year, winter clarity' },
    { date: '2012-06-28', temperature: 30, humidity: 86, aqi: 85, description: 'Monsoon preparation, moderate air' },
    { date: '2013-03-22', temperature: 33, humidity: 71, aqi: 92, description: 'Spring warmth, moderate pollution' },
    { date: '2013-10-07', temperature: 34, humidity: 73, aqi: 98, description: 'Autumn heat, declining air quality' },
    { date: '2014-05-30', temperature: 40, humidity: 64, aqi: 128, description: 'Extreme summer, very poor air' },
    { date: '2014-12-18', temperature: 22, humidity: 77, aqi: 68, description: 'Winter chill, good air quality' },
    
    // 2015-2019 - Mid 2010s
    { date: '2015-02-05', temperature: 29, humidity: 75, aqi: 80, description: 'Late winter, moderate conditions' },
    { date: '2015-07-15', temperature: 25, humidity: 93, aqi: 58, description: 'Monsoon peak, excellent air' },
    { date: '2015-11-20', temperature: 32, humidity: 76, aqi: 85, description: 'Autumn warmth, moderate air' },
    { date: '2016-04-08', temperature: 38, humidity: 66, aqi: 118, description: 'Summer onset, poor air quality' },
    { date: '2016-09-12', temperature: 30, humidity: 81, aqi: 82, description: 'Post-monsoon, improving air' },
    { date: '2017-01-28', temperature: 26, humidity: 78, aqi: 75, description: 'Winter morning, good visibility' },
    { date: '2017-06-10', temperature: 31, humidity: 84, aqi: 88, description: 'Pre-monsoon, humid conditions' },
    { date: '2017-12-05', temperature: 25, humidity: 76, aqi: 72, description: 'Early winter, clear skies' },
    { date: '2018-03-15', temperature: 34, humidity: 70, aqi: 95, description: 'Spring heat, moderate pollution' },
    { date: '2018-08-25', temperature: 28, humidity: 91, aqi: 65, description: 'Monsoon activity, clean air' },
    { date: '2019-05-22', temperature: 39, humidity: 63, aqi: 122, description: 'Summer peak, poor air quality' },
    { date: '2019-10-18', temperature: 33, humidity: 75, aqi: 92, description: 'Autumn warmth, moderate conditions' },
    
    // 2020-2024 - Recent years
    { date: '2020-01-15', temperature: 27, humidity: 77, aqi: 78, description: 'Pre-pandemic, moderate air quality' },
    { date: '2020-06-05', temperature: 29, humidity: 88, aqi: 72, description: 'Lockdown period, cleaner air' },
    { date: '2020-11-12', temperature: 31, humidity: 74, aqi: 85, description: 'Post-lockdown, returning pollution' },
    { date: '2021-02-28', temperature: 28, humidity: 76, aqi: 80, description: 'Late winter, moderate conditions' },
    { date: '2021-07-20', temperature: 26, humidity: 92, aqi: 65, description: 'Monsoon season, good air quality' },
    { date: '2021-12-10', temperature: 24, humidity: 79, aqi: 75, description: 'Winter clarity, moderate air' },
    { date: '2022-03-18', temperature: 35, humidity: 69, aqi: 98, description: 'Spring heat, declining air quality' },
    { date: '2022-08-08', temperature: 27, humidity: 90, aqi: 68, description: 'Monsoon peak, clean atmosphere' },
    { date: '2022-12-25', temperature: 23, humidity: 78, aqi: 70, description: 'Christmas day, good air quality' },
    { date: '2023-04-30', temperature: 37, humidity: 67, aqi: 112, description: 'Summer onset, poor air quality' },
    { date: '2023-09-15', temperature: 32, humidity: 77, aqi: 88, description: 'Post-monsoon, moderate conditions' },
    { date: '2023-12-31', temperature: 25, humidity: 76, aqi: 73, description: 'Year end, winter clarity' },
    
    // 2024 - Current year
    { date: '2024-01-15', temperature: 32, humidity: 75, aqi: 85, description: 'Clear morning, light breeze' },
    { date: '2024-01-22', temperature: 32, humidity: 75, aqi: 88, description: 'Partly cloudy, moderate wind' },
    { date: '2024-02-08', temperature: 30, humidity: 70, aqi: 92, description: 'Sunny day, calm conditions' },
    { date: '2024-02-15', temperature: 30, humidity: 70, aqi: 89, description: 'Clear skies, light wind' },
    { date: '2024-03-03', temperature: 35, humidity: 80, aqi: 105, description: 'Hot and humid, no wind' },
    { date: '2024-03-10', temperature: 35, humidity: 80, aqi: 108, description: 'High humidity, stagnant air' },
    { date: '2024-04-12', temperature: 38, humidity: 65, aqi: 125, description: 'Very hot, dry conditions' },
    { date: '2024-04-19', temperature: 38, humidity: 65, aqi: 122, description: 'Extreme heat, low humidity' },
    { date: '2024-05-05', temperature: 40, humidity: 70, aqi: 140, description: 'Record heat, moderate humidity' },
    { date: '2024-05-12', temperature: 40, humidity: 70, aqi: 145, description: 'Extreme temperatures, poor air' },
    { date: '2024-06-08', temperature: 28, humidity: 85, aqi: 95, description: 'Monsoon onset, high humidity' },
    { date: '2024-06-15', temperature: 28, humidity: 85, aqi: 92, description: 'Heavy rains, very humid' },
    { date: '2024-07-03', temperature: 26, humidity: 90, aqi: 78, description: 'Continuous rain, saturated air' },
    { date: '2024-07-10', temperature: 26, humidity: 90, aqi: 75, description: 'Monsoon peak, clean air' },
    { date: '2024-08-07', temperature: 27, humidity: 88, aqi: 82, description: 'Light rain, high humidity' },
    { date: '2024-08-14', temperature: 27, humidity: 88, aqi: 85, description: 'Overcast, moist conditions' },
    { date: '2024-09-05', temperature: 31, humidity: 78, aqi: 88, description: 'Post-monsoon, moderate humidity' },
    { date: '2024-09-12', temperature: 31, humidity: 78, aqi: 92, description: 'Clear weather, comfortable' },
    { date: '2024-10-08', temperature: 33, humidity: 72, aqi: 115, description: 'Warm day, moderate humidity' },
    { date: '2024-10-15', temperature: 33, humidity: 72, aqi: 118, description: 'Hot afternoon, dry air' },
    { date: '2024-11-02', temperature: 29, humidity: 82, aqi: 135, description: 'Cool morning, high humidity' },
    { date: '2024-11-09', temperature: 29, humidity: 82, aqi: 138, description: 'Foggy conditions, poor visibility' },
    { date: '2024-12-07', temperature: 25, humidity: 75, aqi: 98, description: 'Winter chill, moderate humidity' },
    { date: '2024-12-14', temperature: 25, humidity: 75, aqi: 95, description: 'Cold morning, clear skies' }
  ];

  // Find matches based on current temperature and humidity
  const findMatches = () => {
    if (!currentTemperature || !currentHumidity) return [];
    
    const temp = parseFloat(currentTemperature);
    const humidity = parseFloat(currentHumidity);
    
    if (isNaN(temp) || isNaN(humidity)) return [];
    
    // Find exact matches or close matches (within ±2°C and ±5% humidity)
    return historicalData.filter(data => 
      Math.abs(data.temperature - temp) <= 2 && 
      Math.abs(data.humidity - humidity) <= 5
    );
  };

  const matches = findMatches();

  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Get AQI category and color
  const getAQICategory = (aqi: number) => {
    if (aqi <= 50) return { category: 'Good', color: 'bg-green-500' };
    if (aqi <= 100) return { category: 'Moderate', color: 'bg-yellow-500' };
    if (aqi <= 150) return { category: 'Unhealthy for Sensitive Groups', color: 'bg-orange-500' };
    if (aqi <= 200) return { category: 'Unhealthy', color: 'bg-red-500' };
    if (aqi <= 300) return { category: 'Very Unhealthy', color: 'bg-purple-500' };
    return { category: 'Hazardous', color: 'bg-red-800' };
  };

  if (!currentTemperature || !currentHumidity) {
    return (
      <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-blue-500" />
            Previous Data Matches
          </CardTitle>
          <CardDescription>
            Enter temperature and humidity to find historical matches from 25 years of data
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center py-8">
          <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <p className="text-gray-500">
            Fill in temperature and humidity values to see when similar conditions occurred in the past 25 years (1999-2024)
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="shadow-lg border-0 bg-white/80 backdrop-blur">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-blue-500" />
          Previous Data Matches
        </CardTitle>
        <CardDescription>
          Historical dates with similar temperature and humidity conditions (25 years of data)
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="mb-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Thermometer className="h-4 w-4 text-red-500" />
              <span className="font-medium">Current: {currentTemperature}°C</span>
            </div>
            <div className="flex items-center gap-2">
              <Droplets className="h-4 w-4 text-blue-500" />
              <span className="font-medium">Current: {currentHumidity}%</span>
            </div>
          </div>
        </div>

        {matches.length === 0 ? (
          <div className="text-center py-8">
            <Clock className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 font-medium mb-2">No Historical Matches Found</p>
            <p className="text-gray-500 text-sm">
              No previous dates found with similar temperature and humidity conditions in the past 25 years.
              Try adjusting your values slightly.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-sm text-gray-600 mb-3">
              Found {matches.length} historical match{matches.length !== 1 ? 'es' : ''} from 25 years of data:
            </p>
            {matches.map((match, index) => (
              <div key={index} className="p-4 border border-gray-200 rounded-lg hover:border-blue-300 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-blue-500" />
                    <span className="font-medium text-gray-900">
                      {formatDate(match.date)}
                    </span>
                  </div>
                  <Badge 
                    variant="secondary" 
                    className={`${getAQICategory(match.aqi).color} text-white`}
                  >
                    AQI: {match.aqi}
                  </Badge>
                </div>
                
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-2">
                  <div className="flex items-center gap-2">
                    <Thermometer className="h-3 w-3 text-red-500" />
                    <span>Temp: {match.temperature}°C</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Droplets className="h-3 w-3 text-blue-500" />
                    <span>Humidity: {match.humidity}%</span>
                  </div>
                </div>
                
                <div className="text-xs text-gray-500">
                  <span className="font-medium">Conditions:</span> {match.description}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}; 