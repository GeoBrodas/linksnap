import { createContext, useContext, useState } from 'react';

const Context = createContext({
  isLoading: false,
  setIsLoading: () => {},
});

const ProfileFormProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const exposed = {
    isLoading,
    setIsLoading,
  };

  return <Context.Provider value={exposed}>{children}</Context.Provider>;
};

export const useProfileForm = () => useContext(Context);

export default ProfileFormProvider;
