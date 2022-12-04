//LOGGING

const winston = require('winston')
require('winston-mongodb');

module.exports = function () {
    winston.add(new winston.transports.File({filename: 'logs/errors.log', level: "error"}))
    winston.add(new winston.transports.Console({format: 
        winston.format.combine(
            winston.format.colorize({all:true}),
            winston.format.simple(),
            winston.format.label({label:'[INFO]'}),
            winston.format.timestamp({format:"DD-MM-YYYY HH:mm:ss"}),
            winston.format.printf(info => 
                ` ${info.label} ${info.timestamp} : ${info.message}`
            )
      )}))
    
    winston.exceptions.handle(
        new winston.transports.File({ filename: 'logs/exceptions.log', exitOnError: true })
    );
    
    winston.add(new winston.transports.MongoDB({db: process.env.MONGO_URI, collection : 'nasaDB',
    level : 'error'}));
}