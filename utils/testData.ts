import { faker } from '@faker-js/faker';

export function getRandomUsername() {
  return faker.internet.userName();
}

export function getRandomPassword() {
  return faker.internet.password();
} 