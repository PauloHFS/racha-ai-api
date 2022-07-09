import * as yup from 'yup';

export const signUpSchema = yup.object({
  username: yup.string().required(),
  fullname: yup.string().required(),
  email: yup.string().required(),
  photoUrl: yup.string(),
  password: yup.string().required(),
});
