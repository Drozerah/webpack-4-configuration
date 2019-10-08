/**
 * MODULES
 */
import { logger } from './utils/logger.service.js'
/**
 * Files (webpack importation)
 */
import '../../favicon.png' // import favicon file
/**
 * Run the application
 */
const run = () => {
  const msg = 'Hello from logger.service.js!'
  logger(msg)
}

export { run }
