import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  name: process.env.APP_NAME || 'NestJS App',
  env: process.env.APP_ENV || 'prod',
  debug: +process.env.APP_DEBUG || 1,
  url: process.env.APP_URL || '0.0.0.0',
  port: +process.env.APP_PORT || 5000,
}));
