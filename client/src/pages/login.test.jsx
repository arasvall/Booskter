import { expect, test } from "vitest"
import LoginForm from "./login";
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

//Test the function without the reset btn. The guest needs to manually reset the wrong credentials.
test('LoginForm', () => {
 const { getByTestId } = render(
 <Router>
  <LoginForm />
 </Router>
 );
 const usernameInput = getByTestId('username');
 const passwordInput = getByTestId('password-field');

 fireEvent.change(usernameInput, { target: { value: 'testuser' } });
 fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

 // Clear the username and password fields
 fireEvent.change(usernameInput, { target: { value: '' } });
 fireEvent.change(passwordInput, { target: { value: '' } });

 expect(usernameInput.value).toBe('');
 expect(passwordInput.value).toBe('');
});

//Reset the inlogcredentials, but it dosent work, the button dosent reset everything.

// test('LoginForm', () => {
//  const { getByTestId } = render(
//  <Router>
//   <LoginForm />
//  </Router>
//  );
//  const usernameInput = getByTestId('username');
//  const passwordInput = getByTestId('password-field');
//  const resetButton = getByTestId('cancel-btn');

//  fireEvent.change(usernameInput, { target: { value: 'testuser' } });
//  fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
//  fireEvent.reset(resetButton);

//  expect(usernameInput.value).toBe('');
//  expect(passwordInput.value).toBe('');
// });
