import { registerAs } from '@nestjs/config';

// all third-party services' configurations to go here
export default registerAs('services', () => ({
    meilisearch: {
        host: process.env.MEILISEARCH_HOST || '', //Meilisearch deployed url_
        apiKey: process.env.MEILISEARCH_APIKEY || '',// Use private key and not masterkey
    }
}));
