import { registerAs } from '@nestjs/config';
import { basePath } from '@libs/core';

export default registerAs('db', () => ({
  type: process.env.DB_TYPE || 'mongodb',
  host: process.env.DB_HOST || '',//'mongodb+srv://dbmitesh:81cPPOpTJVMeqpYN@cluster0.iofqb.mongodb.net/',
  port: process.env.DB_PORT || 27017,
  uri: process.env.DB_HOST || 'mongodb://localhost:27017/oslash',//'mongodb+srv://dbmitesh:81cPPOpTJVMeqpYN@cluster0.iofqb.mongodb.net/',
  username: process.env.DB_USER || '',//'dbmitesh',
  password: process.env.DB_PASSWORD || '',//'81cPPOpTJVMeqpYN',
  database: process.env.DB_DATABASE || '',//'database',
}));
