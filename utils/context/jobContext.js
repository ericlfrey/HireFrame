/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import React, {
  createContext, useState, useContext, useEffect,
} from 'react';
import { getAllFilteredJobs } from '../data/jobData';
import { useAuth } from './authContext';

const JobContext = createContext();

export function JobProvider({ children }) {
  const [filteredJobs, setFilteredJobs] = useState([]);
  const { user } = useAuth();

  const getFilteredJobs = () => getAllFilteredJobs(user.uid).then(setFilteredJobs);

  useEffect(() => {
    getFilteredJobs();
  }, []);

  return (
    <JobContext.Provider value={{ filteredJobs, getFilteredJobs }}>
      {children}
    </JobContext.Provider>
  );
}

export function useJobContext() {
  return useContext(JobContext);
}
