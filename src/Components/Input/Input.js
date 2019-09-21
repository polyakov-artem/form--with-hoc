import React from 'react'
import cn from 'classnames'

const Input = ({
  type='text',
  label,
  value,
  error,
  inputClasses,
  labelClasses,
  contolClasses,
  errorClasses,
  ...props }) => (
  <label className={cn('input', inputClasses)}>
    {label && <p className={cn('input__label', labelClasses)}>{label}</p>}
    <input
      className = {cn('input__control', contolClasses)}
      type = {type}
      {...props}
    />
    {<small className={cn('input__error', errorClasses)}>{error} </small>}
  </label>
);

export default Input