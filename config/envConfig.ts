type Env = 'dev' | 'qa' | 'prod';

interface EnvDetails {
  url: string;
  username: string;
  password: string;
}

const configs: Record<Env, EnvDetails> = {
  dev: {
    url: 'https://practicetestautomation.com/practice-test-login/',
    username: 'student',
    password: 'Password123',
  },
  qa: {
    url: 'https://practicetestautomation.com/practice-test-login/',
    username: 'student',
    password: 'Password123',
  },
  prod: {
    url: 'https://practicetestautomation.com/practice-test-login/',
    username: 'student',
    password: 'Password123',
  },
};

const env = (process.env.TEST_ENV as Env) || 'dev';

export const envConfig = configs[env]; 