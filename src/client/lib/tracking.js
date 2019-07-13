import axios from 'axios';
import { TRACKING_API } from '../apiPaths';

export const isBrowser = typeof window !== 'undefined';

export const trackEvent = (eventName, properties) => {
  if (isBrowser) {
    const trackingData = {
      ...properties,
      eventName
    };

    axios.post(`${TRACKING_API}/trackEvent`, {
      ...trackingData
    });
  }
};
