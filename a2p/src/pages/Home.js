import React from 'react';
import definitionsData from './definitions.json';
import './App.css';

function Home() {
    return (
      <div>
        {definitionsData.definitions.map((bigspecGroup, index) => (
          <div id={index} key={index} class="bigSpecPoint">
            <h2>{bigspecGroup.bigspec}</h2>
            <div className="definitions-list">
              {bigspecGroup.definitions.map((definition, idx) => (
                <div  key={idx} className="definition">
                  <h3>{definition.title}</h3>
                  <p><strong>Spec:</strong> {definition.spec}</p>
                  <p><strong>Definition:</strong> {definition.definition}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };
  
  export default Home;