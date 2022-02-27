import React, { ReactNode } from 'react';
import { usePostForm } from '../PostForm/usePostForm';

export const PostForm: ReactNode = ({ navigate }) => {
  const { form, changeValue, submit, postErrors, validateValue } =
    usePostForm(navigate);

  return (
    <main>
      <div>
        <b>Título </b>
        <input
          value={form.title}
          onChange={(e) => changeValue('title', e.currentTarget.value)}
          onBlur={(e) => validateValue('title')}
        />
        {postErrors?.title}
      </div>
      <div>
        <b>Contenido </b>
        <input
          value={form.content}
          onChange={(e) => changeValue('content', e.currentTarget.value)}
          onBlur={(e) => validateValue('content')}
        />
        {postErrors?.content}
      </div>

      <button onClick={submit}>Enviar</button>
    </main>
  );
};
