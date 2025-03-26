import React, { useState } from 'react';
import formulasData from './formula.json';
import katex from 'katex';
import 'katex/dist/katex.min.css'; // Import KaTeX CSS for proper rendering
import './App.css'; // Ensure modal styles are included

const Formulas = () => {
  const [modalContent, setModalContent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderFormula = (formula) => {
    try {
      return { __html: katex.renderToString(formula, { throwOnError: false }) };
    } catch (error) {
      console.error('Error rendering formula:', error);
      return { __html: formula };
    }
  };

  const openModal = (definitions, formula) => {
    const renderedFormula = formula
      ? <p dangerouslySetInnerHTML={renderFormula(formula)} />
      : <p>No formula available.</p>;

    const renderedDefinitions = definitions
      ? (
        <ul>
          {Object.entries(definitions).map(([symbol, meaning], idx) => (
            <li key={idx}>
              <strong dangerouslySetInnerHTML={renderFormula(symbol)}/> <strong> : </strong>{meaning}
            </li>
          ))}
        </ul>
      )
      : <p>No definitions available for this formula.</p>;

    setModalContent(
      <div>
        {renderedFormula}
        {renderedDefinitions}
      </div>
    );
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div>
      {formulasData.formulas.map((bigspecGroup, index) => (
        <div key={index} className="bigspecPoint">
          <h2>{bigspecGroup.bigspec}</h2>
          <div className="formulas-list">
            {bigspecGroup.formulas.map((formula, idx) => (
              <div 
              onClick={() => openModal(formula.definitions, formula.formula)} // Pass definitions and formula to modal              
              key={idx} className="formula">
                <h3>{formula.spec}</h3>
                {formula.formula ? (
                  <p
                  >
                    <strong class="spec">Formula:</strong>{' '}
                    <span dangerouslySetInnerHTML={renderFormula(formula.formula)} />
                  </p>
                ) : (
                  <p><strong>No Formula</strong></p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Modal */}
      {isModalOpen && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>&times;</span>
            <h3>Formula Details</h3>
            {modalContent}
            <span class = "highlightedText">Press anywhere to close</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Formulas;