import React from 'react';
import { useCreateGroup } from './useCreateGroup';

export const CreateGroup = () => {
  const { form, changeValue, validateValue, errors, submit } = useCreateGroup();

  return (
    <div>
      <h3>Create Group</h3>
      <p>
        Group:{' '}
        <input
          value={form['name']}
          onChange={(e) => changeValue('name', e.currentTarget.value)}
          onBlur={(e) => validateValue('name')}
        />{' '}
        {errors.name}
      </p>
      <button onClick={submit}>Crear grupo</button>
    </div>
  );
};
