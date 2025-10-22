import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Custom smooth scroll with speed control
export function smoothScrollTo(targetY: number, duration: number = 1000) {
  const startY = window.pageYOffset;
  const distance = targetY - startY;
  const startTime = performance.now();

  function easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  }

  function animation(currentTime: number) {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);
    
    window.scrollTo(0, startY + distance * ease);
    
    if (progress < 1) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

// Scroll to element with custom speed
export function scrollToElement(elementId: string, duration: number = 1000) {
  const element = document.getElementById(elementId);
  if (element) {
    const targetY = element.offsetTop - 80; // Account for fixed header
    smoothScrollTo(targetY, duration);
  }
}

// Scroll to top with custom speed
export function scrollToTop(duration: number = 1000) {
  smoothScrollTo(0, duration);
}
