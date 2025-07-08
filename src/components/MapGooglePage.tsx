// --- Add this directive at the VERY TOP of the file ---
'use client';
// --- ---

import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Card, CardContent } from '@/components/ui/card'; // Adjust if your path is different

// --- Component ---
const WorkshopLocationMap = () => {
  // --- Configuration ---
  // Use NEXT_PUBLIC_ prefix for client-side environment variables in Next.js
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    console.error(
      'Error: Google Maps API key is missing. Make sure NEXT_PUBLIC_GOOGLE_MAPS_API_KEY is set in your .env.local file and the server is restarted.'
    );
  }

  const mapContainerStyle: React.CSSProperties = {
    width: '100%',
    height: '100%', // Important to fill the container div
  };

  // Coordinates for Pune, India (approximate center)
  const center = {
    lat: 18.5204,
    lng: 73.8567,
  };

  // Adjust zoom level as needed (higher number = more zoomed in)
  const zoom = 12;

  // --- Load Google Maps Script ---
  // useJsApiLoader hook handles loading the Google Maps script asynchronously
  const { isLoaded, loadError } = useJsApiLoader({
    id: 'google-map-script', // Optional: A unique ID for the script tag
    googleMapsApiKey: apiKey || '', // Pass the API key. Provide empty string if undefined
    // libraries: ['places'], // Uncomment if you need other libraries like Places API
  });

  // --- Render Logic ---
  const renderMap = () => {
    // Handle loading error
    if (loadError) {
      console.error('Error loading Google Maps:', loadError);
      return (
        <div className="flex h-full items-center justify-center bg-red-100 p-4 text-center text-red-700">
          Map cannot be loaded. Check API key, network, or browser console.
        </div>
      );
    }

    // Show message if API key is missing *before* loading attempt causes error
     if (!apiKey) {
         return <div className="flex h-full items-center justify-center bg-yellow-100 p-4 text-center text-yellow-800">Map requires API Key configuration.<br/>(Check .env.local and restart server)</div>;
    }

    // Show loading state while the script is loading
    if (!isLoaded) {
      return (
        <div className="flex h-full items-center justify-center bg-gray-200 p-4 text-center">
          Loading Map...
        </div>
      );
    }

    // Render the actual map once loaded and API key is present
    return (
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={zoom}
        options={{ // Optional: Customize map controls
          streetViewControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        {/* Add a marker at the center point (Pune) */}
        <Marker position={center} title="Workshop Location (Pune)" />
        {/* You can add more markers or map elements here */}
      </GoogleMap>
    );
  };

  // --- JSX Structure ---
  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="mb-4 font-serif text-2xl font-semibold">
          Workshop Location
        </h2>
        {/* Container div for the map */}
        <div className="aspect-video overflow-hidden rounded-md bg-muted">
          {/* Render map, loading, or error state */}
          {renderMap()}
        </div>
         <p className="mt-2 text-sm text-muted-foreground text-center">
             Pune, India
         </p>
      </CardContent>
    </Card>
  );
};

export default WorkshopLocationMap;