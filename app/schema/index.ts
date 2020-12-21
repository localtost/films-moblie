import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email is incorrect')
    .required('This field is required'),
  username: Yup.string()
    .min(2, 'User Name is too short')
    .required('This field is required'),
  password: Yup.string()
    .min(8, 'At least 8 characters')
    .matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
      message: 'Must contain [A-z], and [0-9]',
    })
    .required('This field is required'),
  confirm: Yup.string()
    .min(8, 'At least 8 characters')
    .matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, {
      message: 'Must contain [A-z], and [0-9]',
    })
    .required('This field is required')
    .oneOf([Yup.ref('password'), null], 'These passwords do not match'),
});
