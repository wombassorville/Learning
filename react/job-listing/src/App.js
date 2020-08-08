import React, { useEffect, useState } from 'react';
import JobBoard from './components/JobBoard'
import data from './APi/data.json';

import './App.css';

function App() {

  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {setJobs(data)}, [])

  // const filterFunc = ({ job }) => {

  //   if (filters.length === 0) {
  //       return true;
  //   }

  //   const tags = [job.role, job.level];

  //   if (job.tools) {
  //       tags.push(...job.tools)
  //   }

  //   if (job.languages) {
  //       tags.push(...job.languages)
  //   }

  //   return tags.some(tag => filters.includes(tag));  
  // }

  const handleTagClick = (tag) => {
    console.log(tag)
    setFilters([...filters, tag]);
    console.log(jobs)
  }

  //const filteredJobs = jobs.filter(filterFunc);

  return (
    <div className="App">
        <div>
          {/* {
            filters.length > 0 && filters.map (
              filter => <span> {filter} </span>
            )
          } */}
        </div>

        { jobs.length 
        ? 
        (
          jobs.map((job) => (
            <JobBoard 
            key={job.id} 
            job={job}
            handleTagClick={handleTagClick}
            />
          ))
        )
        : null}  
    </div>
  );
}

export default App;
