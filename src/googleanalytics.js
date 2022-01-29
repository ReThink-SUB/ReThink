import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

const usePageTracking = () => {
    const location = useLocation();
    const [initialized, setInitialized] = useState(false);
    const TRACKING_ID = process.env.GOOGLE_ANALYTICS_TRACKING_ID;

    useEffect(() => {
        ReactGA.initialize(TRACKING_ID);    
        setInitialized(true);
    }, []);
  
    useEffect(() => {
        if (initialized) {
            console.log('sent pageview', location.pathname + location.search);   
            ReactGA.pageview(location.pathname + location.search);
        }
    }, [initialized, location]);
};
  
export default usePageTracking;