import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-4">
      <h1>About Us</h1>
      <p>We are a team dedicated to revolutionizing the way businesses interact with technology. Our mission is to empower our clients by providing cutting-edge solutions that drive innovation and efficiency.</p>
      <div className="mt-4">
        <h2>Our History</h2>
        <p>Founded in 2010, we've grown from a small tech startup into a leading software solutions provider in our industry.</p>
        <h2>Meet the Team</h2>
        <div className="flex justify-around">
          <div>
            <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full"/>
            <p><strong>John Doe</strong><br />Founder & CEO</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full"/>
            <p><strong>Jane Smith</strong><br />CTO</p>
          </div>
          <div>
            <img src="https://via.placeholder.com/150" alt="Team Member" className="rounded-full"/>
            <p><strong>Emily Johnson</strong><br />Lead Developer</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
