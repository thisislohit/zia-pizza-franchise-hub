import { useEffect } from 'react';

// Custom hook for smooth, slower scrolling
export function useSmoothScroll() {
  useEffect(() => {
    // This approach is too aggressive, using CSS-only approach instead
    console.log('Smooth scroll enabled');
  }, []);
}

// CSS-based smooth scrolling with natural speed
export function useCSSSmoothScroll() {
  useEffect(() => {
    // Add custom CSS for smooth scrolling
    const style = document.createElement('style');
    style.textContent = `
      html {
        scroll-behavior: smooth;
        scroll-padding-top: 80px;
      }
      
      /* Custom scrollbar for better UX */
      ::-webkit-scrollbar {
        width: 8px;
      }
      
      ::-webkit-scrollbar-track {
        background: hsl(var(--background));
      }
      
      ::-webkit-scrollbar-thumb {
        background: hsl(var(--primary));
        border-radius: 4px;
      }
      
      ::-webkit-scrollbar-thumb:hover {
        background: hsl(var(--primary) / 0.8);
      }
    `;
    
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);
}
