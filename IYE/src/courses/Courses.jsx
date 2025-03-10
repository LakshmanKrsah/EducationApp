import React, { useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
import Course from '../component/Course';
import Footer from '../component/Footer';
import axios from 'axios';

function Courses() {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/course');
        setList(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className='min-h-screen'>
        <Course list={list} />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
