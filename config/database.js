module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', process.env.HOSTNAME),
        database: env('DATABASE_NAME', process.env.DATABASE),
        username: env('DATABASE_USERNAME', process.env.DBUSERNAME),
		    port: env.int('DATABASE_PORT', 5432),
		    password: env('DATABASE_PASSWORD', process.env.DBPASSWORD)
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});