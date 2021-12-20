import { createClient } from 'redis';

/**
 * 
 * @param clientUrl 
 */
export async function createRedisClient(clientUrl:string = '') {
    /**
     * TODO check url parameter
     * Example from: https://www.npmjs.com/package/redis
     * 
     * createClient({
        url: 'redis://alice:foobared@awesome.redis.server:6380'
        });
     */
    const client = createClient();

    client.on('error', (err) => console.log('Redis Client Error', err));

    await client.connect();

    console.log("Redis client created and connected")
}