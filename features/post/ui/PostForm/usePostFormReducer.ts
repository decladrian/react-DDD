import { useReducer } from 'react';
//import { PostEntity } from '../../domain/PostEntity';
import { PostModels } from '../../domain/PostModels';

export const usePostFormReducer = () => {
  const reducer = (state, action) => {
    const newstate = {
      ...state,
      [action.key]: action.value,
      created_at: new Date(),
    };
    return newstate;
  };

  const initForm = { title: '', content: '', created_at: new Date() };

  const [form, dispatch] = useReducer(reducer, initForm);

  const changeValue = (key: PostModels.key, value: any) => {
    dispatch({ key, value });
  };

  return {
    form,
    dispatch,
    changeValue,
  };
};
