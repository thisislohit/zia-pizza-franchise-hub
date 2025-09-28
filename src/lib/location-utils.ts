// Location detection utilities for Zia Pizza

export interface LocationInfo {
  city: string;
  locationId: string;
  isDetected: boolean;
}

// City to location ID mapping
const CITY_TO_LOCATION: Record<string, string> = {
  'semington': 'trowbridge',
  'trowbridge': 'trowbridge',
  'westbury': 'westbury',
  'salisbury': 'salisbury'
};

// Location ID to city mapping
const LOCATION_TO_CITY: Record<string, string> = {
  'trowbridge': 'Semington',
  'westbury': 'Westbury',
  'salisbury': 'Salisbury'
};

/**
 * Detect user location based on browser geolocation and city names
 * Returns the closest location ID or null if detection fails
 */
export const detectUserLocation = (): Promise<LocationInfo | null> => {
  return new Promise((resolve) => {
    if (!navigator.geolocation) {
      resolve(null);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userLat = position.coords.latitude;
        const userLng = position.coords.longitude;
        
        // Location coordinates for each branch
        const locations = [
          { id: 'trowbridge', lat: 51.3188, lng: -2.2081, city: 'Semington' },
          { id: 'westbury', lat: 51.2604, lng: -2.1875, city: 'Westbury' },
          { id: 'salisbury', lat: 51.0693, lng: -1.7944, city: 'Salisbury' }
        ];
        
        // Calculate distances and find closest
        const locationsWithDistance = locations.map(location => {
          const distance = calculateDistance(
            userLat, userLng, 
            location.lat, location.lng
          );
          return { ...location, distance };
        });
        
        const closestLocation = locationsWithDistance.sort((a, b) => a.distance - b.distance)[0];
        
        resolve({
          city: closestLocation.city,
          locationId: closestLocation.id,
          isDetected: true
        });
      },
      () => {
        // Geolocation failed
        resolve(null);
      }
    );
  });
};

/**
 * Get location info from city name
 */
export const getLocationFromCity = (cityName: string): LocationInfo | null => {
  const normalizedCity = cityName.toLowerCase().trim();
  const locationId = CITY_TO_LOCATION[normalizedCity];
  
  if (locationId) {
    return {
      city: LOCATION_TO_CITY[locationId],
      locationId,
      isDetected: false
    };
  }
  
  return null;
};

/**
 * Get city name from location ID
 */
export const getCityFromLocationId = (locationId: string): string | null => {
  return LOCATION_TO_CITY[locationId] || null;
};

/**
 * Calculate distance between two coordinates using Haversine formula
 */
const calculateDistance = (lat1: number, lng1: number, lat2: number, lng2: number): number => {
  const R = 6371; // Radius of the Earth in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLng/2) * Math.sin(dLng/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
};

/**
 * Check if a location ID matches any of the supported cities
 */
export const isSupportedLocation = (locationId: string): boolean => {
  return Object.values(CITY_TO_LOCATION).includes(locationId);
};

/**
 * Get all supported location IDs
 */
export const getSupportedLocationIds = (): string[] => {
  return Object.values(CITY_TO_LOCATION);
};
