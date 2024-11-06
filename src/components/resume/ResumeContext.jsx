import { createContext, useState } from 'react';

const CvContext = createContext();

export function CvProvider({ children }) {
  const [cvData, setCvData] = useState({});

  return (
    <CvContext.Provider value={{ cvData, setCvData }}>
      {children}
    </CvContext.Provider>
  );
}

export default CvContext;