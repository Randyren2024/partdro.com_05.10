// Analytics utility functions
export const trackPageView = (path: string) => {
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: path,
    });
  }
};

export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, params);
  }
};