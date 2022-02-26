import React, { ReactNode } from 'react';
import { useProfileForm } from './useProfileForm';

export const ProfileForm: ReactNode = ({ navigate }) => {
  const { form, changeValue, submit, errors } = useProfileForm(navigate);

  return (
    <main>
      <div>
        <b>Username </b>
        <input
          value={form.username}
          onChange={(e) => changeValue('username', e.currentTarget.value)}
        />
        {errors?.username}
      </div>
      <div>
        <b>Email </b>
        <input
          value={form.content}
          onChange={(e) => changeValue('email', e.currentTarget.value)}
        />
        {errors?.email}
      </div>

      <button onClick={submit}>Editar</button>
    </main>
  );
};
