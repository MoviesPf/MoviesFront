export const validations = ({ password, confirm, email, nickname, name }) => {
  const pass = password;
  const conf = confirm;

  const regex = new RegExp(
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  );
  const error = {};
  if (email) {
    if (!regex.test(email)) {
      error.email = 'Email incorrecto';
    }
  }
  if (nickname) {
    if (nickname.length <= 1) {
      error.nickname = 'Minimum 1 character';
    }
  }
  if (name) {
    if (name.length <= 1) {
      error.name = 'Minimum 1 character';
    }
  }
  if (password) {
    if (password.length < 8) {
      error.password = 'Minimum 8 characters';
    }
  }
  if (confirm) {
    if (pass !== conf) {
      error.confirm = 'Passwords do not match';
    }
  }

  return error;
};
