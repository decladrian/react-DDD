import { useEffect, useState } from 'react';
import { container } from '../../../../container';
import { ErrorTypes } from '../../../../shared';
import { PostController, PostValidator } from '../../application';
import { PostModels } from '../../domain/PostModels';
import { usePostFormReducer } from './usePostFormReducer';

export const usePostForm = (navigate) => {
  const [errors, setErrors] = useState<any>({});
  const [postErrors, setPostErrors] = useState<PostModels.errors>({});
  useEffect(() => {
    const subscription = container.postSubscriber.$subject.subscribe(
      (data: object) => {}
    );
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const { form, changeValue } = usePostFormReducer();

  const submit = async () => {
    setErrors({});
    const validator = new PostValidator(form);
    if (!validator.validate()) {
      setPostErrors({ ...validator.getErrors() });
      return;
    }
    try {
      const result = await new PostController().save(form);
      navigate('post');
    } catch (e: any) {
      if (e.type === ErrorTypes.invalidDataExecption) {
        setErrors(e.errors);
      }
    }
  };

  const validateValue = (key: PostModels.key) => {
    const errors = { ...postErrors };
    const validator = new PostValidator(form);
    delete errors[key];
    if (validator.validations[key]) {
      validator.validations[key]();
      setPostErrors({ ...errors, ...validator.getErrors() });
    }
  };

  return {
    form,
    changeValue,
    submit,
    errors,
    postErrors,
    setPostErrors,
    validateValue,
  };
};
