import React from 'react'

const Wrapper = (WrappedComponent) =>(
  class Wrapper extends React.Component{
    state = {
      data: {
        userName: '',
        password: '',
        confirmPassword: '',
        email: '',
      },
      errors: {
      },
      sending: false
    }

    handleInput = ({target:{value, name}}) =>{
      this.setState(({data, errors})=>({
        data: {
          ...data,
          [name]: value
        },
        errors: {
          ...errors,
          [name]: false
        }
      }))
    }

    validateForm = (e) => {
      e.preventDefault();
      const {data} = this.state;
      const errors = {};
      let hasError = false;

      Object.keys(data).forEach((name)=>{
        const error = this.isInvalid(data[name], name);
        errors[name] = error;
        if (error) hasError = true;
      });

      if (hasError) {
        this.setState({errors: errors});
        console.log('data is invalid')
      } else {
        console.log('data is correct', data)
      }

    }

    handleBlur = ({target:{value, name}}) => {
      this.validateInput(value, name)
    }


    validateInput = (value, name) => {
      const isInvalid = this.isInvalid(value, name);
      this.setState(({errors})=>({
        errors:{
          ...errors,
          [name]: isInvalid
        }
      }))
    }

    isInvalid = (value, name) =>{
      const val= value.trim();
      if (!val.length) return 'Поле не может быть пустым';
      switch (name){
        case 'userName':
          if (val.length<3) return 'Имя должно содержать больше 2 символов';
          break;
        case 'password':
          if (val.length<6) return 'Пароль должен содержать больше 5 символов';
          break;
        case 'confirmPassword':
          if (this.state.data.password !== value || !value) return 'Введенные пароли не совпадают';
          break;
        case 'email':
          if (val.length<5) return 'E-mail должен содержать больше 4 символов';
          break;
        default:
          return false
      };
      return false
    }

    render(){
      return (
        <WrappedComponent
          onChange={this.handleInput}
          onBlur={this.handleBlur}
          onSubmit={this.validateForm}
          {...this.props} 
          {...this.state}
        />
      )
    }
  }
)


export default Wrapper