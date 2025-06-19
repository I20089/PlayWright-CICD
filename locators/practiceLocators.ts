import { Page } from '@playwright/test';
export type Role = Parameters<Page['getByRole']>[0];

export const practiceLocators = {
  practiceLink: { role: 'link' as Role, name: 'Practice', exact: true },
  testExceptionsLink: { role: 'link' as Role, name: 'Test Exceptions' },
  editButton: { role: 'button' as Role, name: 'Edit' },
  addButton: { role: 'button' as Role, name: 'Add' },
  saveButton: { role: 'button' as Role, name: 'Save' },
  textbox: { role: 'textbox' as Role },
  coursesLink: { role: 'link' as Role, name: 'Courses' },
  copyrightText: '© Copyright 2020 Practice',
  homeLink: { role: 'link' as Role, name: 'Home' },
  contactLink: { role: 'link' as Role, name: 'Contact' },
}; 