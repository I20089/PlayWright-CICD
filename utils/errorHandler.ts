import logger from './logger';

export function handleError(error: Error, context?: string) {
  logger.error(`${context ? `[${context}] ` : ''}${error.message}\n${error.stack}`);
  throw error;
} 