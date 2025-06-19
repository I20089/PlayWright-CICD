import { Page } from '@playwright/test';

export type Role = Parameters<Page['getByRole']>[0];

export const loginLocators = {
  usernameInput: { role: 'textbox' as Role, name: 'Username' },
  passwordInput: { role: 'textbox' as Role, name: 'Password' },
  submitButton: { role: 'button' as Role, name: 'Submit' },
  logoutLink: { role: 'link' as Role, name: 'Log out' },
  loginForm: '#form',
  loginSection: '#login',
}; 