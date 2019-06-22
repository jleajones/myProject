import axios from 'axios';
import { TRACKING_API } from '../apiPaths';

const isBrowser = typeof window !== 'undefined';

export const pageView = (pageName, properties) => {
  if (isBrowser) {
    const trackingData = {
      ...properties,
      pageName,
      screenX: window.innerWidth,
      screenY: window.innerHeight
    };

    axios.post(`${TRACKING_API}/pageView`, {
      ...trackingData
    });
  }
};

export const trackEvent = (eventName, properties) => {
  if(isBrowser) {
    const trackingData = {
      ...properties,
      eventName
    };

    axios.post(`${TRACKING_API}/trackEvent`, {
      ...trackingData
    });
  }
};
