const redis = `redis:
    image: redislabs/redismod
    ports:
      - '6379:6379'
`;

export default redis;
