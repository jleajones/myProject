import winston from 'winston';

class Logger {
  constructor(loggerName, errorFilename, filename) {
    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.json(),
      defaultMeta: { service: loggerName },
      name: loggerName,
      transports: [
        new winston.transports.File({
          filename: errorFilename,
          level: 'error'
        }),
        new winston.transports.File({ filename }),
        new winston.transports.Console({
          json: true,
          stringify: obj => JSON.stringify(obj)
        })
      ]
    });
  }

  silly(event, obj = {}) {
    this.logger.silly(
      event,
      Object.assign(Logger.sanitizeObject(obj), {
        timestamp: new Date().toISOString()
      })
    );
  }

  debug(event, obj = {}) {
    this.logger.debug(
      event,
      Object.assign(Logger.sanitizeObject(obj), {
        timestamp: new Date().toISOString()
      })
    );
  }

  verbose(event, obj = {}) {
    this.logger.verbose(
      event,
      Object.assign(Logger.sanitizeObject(obj), {
        timestamp: new Date().toISOString()
      })
    );
  }

  info(event, obj = {}) {
    this.logger.info(
      event,
      Object.assign(Logger.sanitizeObject(obj), {
        timestamp: new Date().toISOString()
      })
    );
  }

  warn(event, obj = {}) {
    this.logger.warn(
      event,
      Object.assign(Logger.sanitizeObject(obj), {
        timestamp: new Date().toISOString()
      })
    );
  }

  error(event, obj = {}) {
    this.logger.error(
      event,
      Object.assign(Logger.sanitizeObject(obj), {
        timestamp: new Date().toISOString()
      })
    );
  }

  stream = {
    write: message => {
      this.logger.info(message);
    }
  };

  static sanitizeObject(obj) {
    return obj;
  }
}

export default (loggerName, errorFilename, filename) => {
  return new Logger(loggerName, errorFilename, filename);
};
