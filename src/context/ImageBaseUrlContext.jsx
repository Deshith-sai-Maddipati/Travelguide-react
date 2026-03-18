/**
 * ImageBaseUrlContext – Provides base URL for images when app runs as federated remote.
 * When embedded in host, images must load from remote origin (e.g. http://localhost:3000).
 * When standalone, empty string so paths resolve to current origin.
 */

import { createContext, useContext } from 'react';

export const ImageBaseUrlContext = createContext('');

export function useImageBaseUrl() {
  return useContext(ImageBaseUrlContext);
}

/** Returns a function that builds full image URL: baseUrl + path */
export function useImageUrl() {
  const base = useImageBaseUrl();
  return (path) => {
    if (!path) return '';
    return base ? `${base.replace(/\/$/, '')}${path}` : path;
  };
}
