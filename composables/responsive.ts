import { Device } from "~~/types/devices";
export function useResponsive() {
  const device = (): Device | undefined => {
    if (window.innerWidth < 560) {
      return "mobile";
    }
    if (window.innerWidth < 1279 && window.innerWidth > 560) {
      return "tablet";
    }

    if (window.innerWidth > 1279) {
      return "desktop";
    }
  };
  return { device };
}
