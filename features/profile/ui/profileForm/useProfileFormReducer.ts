import { useReducer } from 'react';
import { UserModel } from '../../domain/UserModel';

export const useProfileFormReducer = () => {
  const reducer = (state, action) => {
    return { ...state, [action.key]: action.value };
  };

  const initForm = { username: '', email: '' };

  const [form, dispatch] = useReducer(reducer, initForm);

  const changeValue = (key: UserModel.key, value: any) => {
    dispatch({ key, value });
  };

  return {
    form,
    dispatch,
    changeValue,
  };
};
