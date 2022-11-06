import React, 
{ 
  createContext,
  useContext,
  useState,
} from 'react';

export const AppContext = createContext({});

function AppProvider({ children }) {
  const [contentType, setContentType] = useState('about');

  return (
    <AppContext.Provider value={{
      contentType,
      setContentType
    }}>
      { children }
    </AppContext.Provider>
  )
};

function useApp(){
  const context = useContext(AppContext);
  return context;
}

export {
  AppProvider,
  useApp
};
