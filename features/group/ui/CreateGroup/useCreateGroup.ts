import { useState } from 'react';
import { useFormReducer, ErrorTypes } from '../../../../shared';
import { Group, ValidatorGroup, GroupController } from '../..';

export const useCreateGroup = () => {
  const [errors, setErrors] = useState<any>({});

  const { form, changeValue } = useFormReducer<Group.createRequest>({
    name: '',
  });

  const submit = () => {
    try {
      new GroupController().create(form);
    } catch (e: any) {
      if (e.type === ErrorTypes.invalidDataExecption) {
        setErrors(e.errors);
      }
    }
  };

  const validateValue = (key: keyof Group.model) => {
    const _errors = { ...errors };
    const validator = new ValidatorGroup(form);
    delete _errors[key];
    if (validator.validations[key]) {
      validator.validations[key]();
      setErrors({ ..._errors, ...validator.getErrors() });
    }
  };

  return {
    form,
    changeValue,
    submit,
    validateValue,
    errors,
  };
};
