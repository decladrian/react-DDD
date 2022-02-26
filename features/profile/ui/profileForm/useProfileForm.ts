import { useEffect, useState } from 'react';
import { container } from '../../../../container';
import { ErrorTypes } from '../../../../shared';
import { ProfileController } from '../../application/ProfileController';
import { useProfileFormReducer } from './useProfileFormReducer';

export const useProfileForm = (navigate) => {
  const [errors, setErrors] = useState<any>({});
  useEffect(() => {
    const subscription = container.postSubscriber.$subject.subscribe(
      (data: object) => {}
    );
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const { form, changeValue } = useProfileFormReducer();

  const submit = async () => {
    setErrors({});
    try {
      const result = await new ProfileController().edit(form);
      navigate('post');
    } catch (e: any) {
      if (e.type === ErrorTypes.invalidDataExecption) {
        setErrors(e.errors);
      }
    }
  };

  return { form, changeValue, submit, errors };
};
