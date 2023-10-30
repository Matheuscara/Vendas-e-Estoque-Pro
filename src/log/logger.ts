const winston = require('winston');
require('winston-daily-rotate-file');
const { Logtail } = require('@logtail/node');
const { LogtailTransport } = require('@logtail/winston');
const logtail = new Logtail('Nymf5obAtNmnB9A6LyHKBRc4');

const { combine, timestamp, printf, colorize, align, json, errors } =
  winston.format;

export class Logger {
  logger: any;
  childLogger: any;

  constructor() {
    require('dotenv').config();
    const fileRotateTransport = new winston.transports.DailyRotateFile({
      filename: 'combined-%DATE%.log',
      datePattern: 'YYYY-MM-DD',
      maxFiles: '14d',
    });

    let transports = [new winston.transports.Console()];
    let format = combine(
      colorize({ all: true }),
      timestamp({
        format: 'YYYY-MM-DD hh:mm:ss.SSS A',
      }),
      align(),

      printf((info) => `[${info.timestamp}] - ${info.level}: ${info.message}`),
    );

    if (process.env.STAGE !== 'DEV') {
      transports = [
        ...transports,
        new winston.transports.File({
          filename: 'app-error.log',
          level: 'warn',
        }),
        new LogtailTransport(logtail),
        fileRotateTransport,
      ];
      format = combine(errors({ stack: true }), timestamp(), json());
    }

    this.logger = winston.loggers.add('logger', {
      level: 'info',
      // defaultMeta: {
      //   service: Math.random() + 1,
      // },
      format: format,
      transports: transports,
      // exceptionHandlers: [
      //   new winston.transports.File({ filename: 'exception.log' }),
      // ],
      // rejectionHandlers: [
      //   new winston.transports.File({ filename: 'rejections.log' }),
      // ],
    });

    this.childLogger = this.logger.child({
      service: Logger.name,
    });
  }
}
