import React from 'react';
import definitionsData from './definitions.json';
import katex from 'katex';
import 'katex/dist/katex.min.css'; // Import KaTeX CSS for proper rendering

function Home() {
    const renderDefinition = (definition) => {
        try {
            return { __html: katex.renderToString(definition, { throwOnError: false }) };
        } catch (error) {
            console.error('Error rendering definition:', error);
            return { __html: definition };
        }
    };

    return (
      <div>
        {definitionsData.definitions.map((bigspecGroup, index) => (
          <div id={index} key={index} className="bigSpecPoint"> {/* Fixed class to className */}
            <h2>{bigspecGroup.bigspec}</h2>
            <div className="definitions-list">
              {bigspecGroup.definitions.map((definition, idx) => (
                <div key={idx} className="definition">
                  <h3>{definition.title}</h3>
                  <p><strong>Spec:</strong> {definition.spec}</p>
                  <p><strong>Definition:</strong> {definition.definition} </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
}

export default Home;