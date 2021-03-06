import { useReducer } from 'react';

export const useFormReducer = <T>(
  initForm: T,
  reducer = (state, action) => {
    const newstate = {
      ...state,
      [action.key]: action.value,
    };
    return newstate;
  }
) => {
  const [form, dispatch] = useReducer(reducer, initForm);

  const changeValue = (key: keyof T, value: any) => {
    dispatch({ key, value });
  };

  return {
    form,
    dispatch,
    changeValue,
  };
};
