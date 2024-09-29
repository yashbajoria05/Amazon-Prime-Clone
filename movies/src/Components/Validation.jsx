export default function SignupValidation(values) {
  let error = {};
  const email_pattern = /^[a-z0-9][w.]+@w+?(.w+){1,}$/gi;

  if (!values.first_name) error.first_name = "First name shouldn't be empty";
  if (!values.last_name) error.last_name = "Last name shouldn't be empty";
  if (!values.email) error.email = "Email shouldn't be empty";
  else if (!email_pattern.test(values.email))
    error.email = "Email is Incorrect";
  if (!values.password) error.password = "Password shouldn't be empty";
  else if (values.password.length < 6)
    error.password = "Atleast 6 characters required";
  return error;
}

export function LoginValidation(values) {
  let error = {};
  const email_pattern = /^[a-z0-9][w.]+@w+?(.w+){1,}$/gi;

  if (!values.email) error.email = "Email shouldn't be empty";
  else if (!email_pattern.test(values.email))
    error.email = "Email is Incorrect";
  if (!values.password) error.password = "Password shouldn't be empty";
  else if (values.password.length < 6)
    error.password = "Atleast 6 characters required";

  return error;
}
