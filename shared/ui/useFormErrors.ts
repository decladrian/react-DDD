import { useState } from 'react';

export const useFormErrors = <K>(getErrors: (k?: any) => any) => {
  const [errors, setErrors] = useState<any>({});
  const validateValue = (key: K) => {
    const _errors = { ...errors };
    delete _errors[key];
    setErrors({ ..._errors, ...getErrors(key) });
  };

  return {
    validateValue,
    setErrors,
    errors,
  };
};
