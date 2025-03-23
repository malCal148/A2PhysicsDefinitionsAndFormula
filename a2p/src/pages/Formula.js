import React from 'react';
import formulasData from './formula.json';
import 'katex/dist/katex.min.css'; // Import your JSON file

const Formulas = () => {
  return (
    <div>
      {formulasData.formulas.map((bigspecGroup, index) => (
        <div key={index} className="bigspec">
          <h2>{bigspecGroup.bigspec}</h2>
          <div className="formulas-list">
            {bigspecGroup.formulas.map((formula, idx) => (
              <div key={idx} className="formula">
                <h3>{formula.title}</h3>
                <p><strong>Spec:</strong> {formula.spec}</p>
                <p><strong>Formula:</strong> {formula.formula}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Formulas;;