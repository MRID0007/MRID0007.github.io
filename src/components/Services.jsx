import React from 'react';

const Services = () => {
  return (
    <div className="container mx-auto p-4">
      <h1>Our Services</h1>
      <div className="mt-4 grid grid-cols-3 gap-4">
        <div className="p-4 shadow rounded">
          <h2>Web Development</h2>
          <p>We build custom, scalable web solutions that empower businesses to engage with their audience effectively.</p>
        </div>
        <div className="p-4 shadow rounded">
          <h2>Mobile App Development</h2>
          <p>Create dynamic mobile applications that deliver a high-quality user experience across all mobile platforms.</p>
        </div>
        <div className="p-4 shadow rounded">
          <h2>Digital Marketing</h2>
          <p>Enhance your online presence and reach more customers with our comprehensive digital marketing services.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
