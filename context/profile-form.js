import { createContext, useContext, useState } from 'react';
import { useForm } from 'react-hook-form';

const Context = createContext({
  isLoading: false,
  setIsLoading: () => {},
  register: () => {},
  reset: () => {},
  handleSubmit: () => {},
  getValues: () => {},
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
