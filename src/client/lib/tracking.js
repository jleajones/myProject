import axios from 'axios';

const isBrowser = typeof window !== 'undefined';

export const pageView = (pageName, properties) => {
  if (isBrowser) {
    const trackingData = {
      ...properties,
      pageName,
      screenX: window.innerWidth,
      screenY: window.innerHeight,
      timeStamp: Date.now()
    };

    axios.post('/api/v0/analytics/pageView', {
      ...trackingData
    });
  }
};

export const trackEvent = (eventName, properties) => {
  if(isBrowser) {
    const trackingData = {
      ...properties,
      eventName,
      timeStamp: Date.now()
    };

    axios.post('/api/v0/analytics/trackEvent', {
      ...trackingData
    });
  }
};
