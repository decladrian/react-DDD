import { useState } from 'react';
import { useFormReducer, ErrorTypes, useFormErrors } from '../../../../shared';
import { Group, GroupValidator, GroupController } from '../..';

export const useCreateGroup = () => {
  const { form, changeValue } = useFormReducer<Group.createRequest>({
    name: '',
  });
  const { validateValue, errors, setErrors } = useFormErrors<
    keyof Group.createRequest
  >(() => new GroupValidator(form));

  const submit = () => {
    try {
      new GroupController().create(form);
    } catch (e: any) {
      if (e.type === ErrorTypes.invalidDataExecption) {
        setErrors(e.errors);
      } else {
        // ups...
      }
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
