var ORMCONFIG ={
   "type": "mysql",
   "host": process.env.DB_HOST,
   "port": process.env.DB_PORT,
   "username": process.env.DB_USER_NAME,
   "password": process.env.DB_PASSWORD,
   "database": process.env.DB_NAME,
   "synchronize": true,
   "logging": false,
   
   "migrations": [
      "src/migration/**/*.ts"
   ],
   "subscribers": [
      "src/subscriber/**/*.ts"
   ],
   "cli": {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}
if(process.env.SERVICE_TYPE == 'DEVELOP'){
   console.log("Test Server Start")
   ORMCONFIG.entities = [
      "src/model/entity/**/*.ts",
   ]
}else if(process.env.SERVICE_TYPE == 'MASTER'){
   console.log("Real Server Start")
   ORMCONFIG.entities = [
      "dist/model/entity/**/*.js"
   ]
}

module.exports = ORMCONFIG