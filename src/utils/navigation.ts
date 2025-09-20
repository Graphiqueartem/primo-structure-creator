// Navigation utility to handle page routing and fallbacks
export const getValidRoute = (path: string): string => {
  const existingPages = [
    '/',
    '/about',
    '/vision', 
    '/impact',
    '/productions',
    '/partnerships',
    '/get-involved',
    '/news',
    '/contact'
  ];
  
  // If the path exists, return it
  if (existingPages.includes(path)) {
    return path;
  }
  
  // If path starts with an existing page (for hash navigation), return it
  const basePath = path.split('#')[0];
  if (existingPages.includes(basePath)) {
    return path;
  }
  
  // Otherwise, redirect to coming soon page
  return '/coming-soon';
};
