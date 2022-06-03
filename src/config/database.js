require('dotenv').config()

//TO SQL LOCAL
/* module.exports = {
    dialect: 'sqlite', 
    storage: './DB_SERVER.SQL',
    define:{
        timestamps: true,
        underscored: true,
       
    },
    logging: false,
}; */


//TO SQL HEROKU POSTGRES
module.exports = {
    dialect: 'postgres',
    database: process.env.DATABASE,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    port: 5432,
    dialectOptions: {
        ssl: { rejectUnauthorized: false }
    },
    define: {
        timestamps: true,
        underscored: true,
    },
    logging: false,
};

/* module.exports = {
    dialect: 'mysql',
    database: process.env.DATABASE,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    host: process.env.DB_HOST,
    define: {
        timestamps: true,
        underscored: true,
    },
    logging: false,
}; */