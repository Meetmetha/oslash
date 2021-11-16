import { registerAs } from '@nestjs/config';
import { basePath } from '@libs/core';

export default registerAs('db', () => ({
  type: process.env.DB_TYPE || '',
  host: process.env.DB_HOST || '',
  port: process.env.DB_PORT || '',
  uri: process.env.DB_HOST || '',
  username: process.env.DB_USER || '',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_DATABASE || '',
}));
