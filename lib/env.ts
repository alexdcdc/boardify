import { cleanEnv, str } from 'envalid'

const env = cleanEnv(process.env, {
    MONGODB_URI: str(),
    JWT_SECRET: str(),
    NODE_ENV: str({ choices: ['development', 'test', 'production', 'staging'] })
})

export default env;