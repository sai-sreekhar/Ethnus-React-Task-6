import React from 'react';

const Projects = () => {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {/* Add your project components or details here */}
      <h2>Experience</h2>
      <p><strong>Samsung R&D Institute</strong> | December 2022 - August 2023</p>
      <p><strong>Prism Developer</strong> | Remote</p>
      <ul>
        <li>Developed a Bixby feature with Natural Language Processing (NLP) for users to instruct Bixby to store information and set task reminders.</li>
        <li>Enhanced Bixby’s functionality, allowing it to retrieve and provide stored information upon user requests.</li>
        <li>Utilized the Bert model for accurate relation extraction and Neo4j for efficient data storage, facilitating the creation of a knowledge graph.</li>
      </ul>

      <h2>Projects</h2>
      <p><strong>FuturePreneurs Project, E-Cell VIT</strong> | August 2022 - October 2022</p>
      <p><strong>GitHub Repository</strong> | [Insert Repository Link]</p>
      <ul>
        <li>Tools & Technologies used: NodeJS, ExpressJS, MongoDB, AWS, JMeter</li>
        <li>Designed and developed the entire Backend module for FuturePreneurs project with NodeJS/ExpressJS and MongoDB.</li>
        <li>This FuturePreneurs is deployed on Amazon EC2 instances. Amazon CloudFront is used for SSL termination and faster site loading. Route53 is used as DNS Server.</li>
        <li>FuturePreneurs features include Authentication and Authorization module, Quiz module, and Team module.</li>
        <li>Performance testing is done using JMeter tool.</li>
      </ul>
    </section>
  );
}

export default Projects;