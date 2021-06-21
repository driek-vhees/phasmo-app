import React, { useState, useEffect } from 'react';
import { Evidence, EVIDENCES, EvidenceType, Ghost, GHOSTS } from './data';

interface AppProps {}

type EvidenceButtonType = {
  evidence: Evidence;
  onAdd: (evidenceType: EvidenceType) => void;
  onRemove: (evidenceType: EvidenceType) => void;
};

const evidenceTypeMapping: Partial<Record<EvidenceType, Evidence>> = EVIDENCES.reduce((agg: Partial<Record<EvidenceType, Evidence>>, evidence: Evidence) => {
  agg[evidence.evidenceType] = evidence; 
  return agg;
}, {});

const EvidenceButton = ({evidence: { evidenceName, evidenceType }, onAdd, onRemove}: EvidenceButtonType) => {
  return (
    <div className="inline-flex flex-row w-60 text-center rounded-full justify-center overflow-hidden bg-gray-800 border-2 border-gray-800">
      <button onClick={() => onRemove(evidenceType)} className="bg-red-600 p-1 px-6 text-white text-xl">
        -
      </button>
      <div className="flex-1 pt-2 justify-center bg-gray-100">
        {evidenceName}
      </div>
      <button onClick={() => onAdd(evidenceType)} className="bg-green-600 py-1 px-6 text-white text-xl">
        +
      </button>
    </div>
  );
}

function App({}: AppProps) {
  const [positiveEvidences, setPositiveEvidences] = useState<ReadonlyArray<EvidenceType>>([]);

  const addPositiveType = (evidenceType: EvidenceType) => {
    if (!positiveEvidences.includes(evidenceType)) {
      setPositiveEvidences([...positiveEvidences, evidenceType]);
    }
  };

  const removePositiveType = (evidenceType: EvidenceType) => {
    setPositiveEvidences(positiveEvidences.filter((currentEvidenceType) => currentEvidenceType !== evidenceType));
  };

  // Return the App component.
  return (
    <div className="App font-sans min-h-screen flex flex-col bg-gray-100">
      <header className="flex flex-col justify-center text-gray-100 bg-gray-800">
        <div className="relative py-3 mx-auto">
          <h1 className="text-4xl">Phasmophobia Ghost Evidence Matcher</h1>
        </div>
      </header>
      <main className="flex-grow md:container bg-white md:my-5 md:mx-auto filter drop-shadow p-3">
        {positiveEvidences.length > 0 ? (
          <>
            <p>Possible ghosts</p>
            <ul>
            {
              GHOSTS
              .filter((ghost) => {
                return positiveEvidences.every((foundEvidenceType) => {
                  return ghost.evidences.includes(foundEvidenceType);
                })
              })
              .map(ghost => {
                return (
                  <li>
                    {ghost.name}
                    {positiveEvidences.length > 0 && positiveEvidences.length < 3 ? (
                      <span> [{ghost.evidences.filter((evidenceType) => !positiveEvidences.includes(evidenceType)).map(evidenceType => evidenceTypeMapping[evidenceType]?.evidenceName).join(", ")}]</span>
                    ) : null}
                  </li>
                );
              })
            }
            </ul>
            <br />
          </>
        ) : null}
        <p>Found evidences</p>
        <ul>
        {EVIDENCES
        .filter(({evidenceType}) => positiveEvidences.includes(evidenceType))
        .map((evidence) => {
          return <li key={evidence.evidenceType}><EvidenceButton evidence={evidence} onAdd={addPositiveType} onRemove={removePositiveType} /></li>
        })}
        </ul>
        {positiveEvidences.length < 3 ?
        (
          <>
          <p>New evidence</p>
          <ul>
            {EVIDENCES
            .filter(({evidenceType}) => !positiveEvidences.includes(evidenceType))
            .map((evidence) => {
              return <li key={evidence.evidenceType}><EvidenceButton evidence={evidence} onAdd={addPositiveType} onRemove={removePositiveType} /></li>
            })}
          </ul>
          </>
        ): null}
      </main>
      <footer className="bg-gray-800 text-gray-100">
        2021
      </footer>
    </div>
  );
}

export default App;
