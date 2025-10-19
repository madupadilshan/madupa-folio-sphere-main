/**
 * Get the correct asset path for GitHub Pages deployment
 * @param path - The path relative to the public folder (e.g., "/images/photo.jpg")
 * @returns The full path including the base URL
 */
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Get base URL from Vite config
  const baseUrl = import.meta.env.BASE_URL || '/';
  // Combine base URL with path, ensuring no double slashes
  return `${baseUrl}${cleanPath}`.replace(/\/\//g, '/');
};
