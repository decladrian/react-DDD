import { useFormReducer, ErrorTypes, useFormErrors } from '../../../../shared';
import { Group, GroupValidator, GroupController } from '../..';

export const useCreateGroup = () => {
  const { form, changeValue } = useFormReducer<Group.createRequest>({
    name: '',
  });
  const { validateValue, errors, setErrors } = useFormErrors<
    keyof Group.createRequest
  >(() => new GroupValidator(form));

  const onSubmitError = (e: any) => {
    if (e.type === ErrorTypes.invalidDataExecption) {
      setErrors(e.errors);
    } else {
      alert('UPS!!! Something went wrong...' + e.message);
    }
  };

  const submit = async () => {
    const result = await new GroupController()
      .create(form)
      .catch(onSubmitError);
    if (result) {
      alert(result.success);
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
