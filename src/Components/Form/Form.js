import React from 'react';

import Input from '../Input/Input';
import wrapper from '../Wrapper/Wrapper';

const fields =[{
    name: 'email',
    type: 'email',
    label: 'Введите e-mail'
  },
  {
    name: 'userName',
    label: 'Введите имя'
  },
  {
    name: 'password',
    type: 'password',
    label: 'Введите пароль'
  },
  {
    name: 'confirmPassword',
    type: 'password',
    label: 'Повторите пароль'
  }
];


function Form({onChange, onBlur, data, errors, onSubmit}) {

  const createFields = () => {
    return fields.map((field)=>{
      return (
        <Input
          key={field.name}
          value={data[field.name]}
          error={errors[field.name]}
          onChange={onChange}
          onBlur={onBlur}
          {...field} />
      )
    })
  }

  return (
    <form action="" onSubmit={onSubmit} className='form'>
      {createFields()}
      <button className='btn' type='submit'>Отправить</button>
    </form>
  );
}
export default wrapper(Form);
