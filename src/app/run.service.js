/**
 * MODULES
 */
import { logger } from './utils/logger.service.js'
/**
 * Files (webpack importation)
 */
import '../../favicon.png' // import favicon file
import '../../seo/robots.txt' // import robots.txt file
import '../../seo/humans.txt' // import humans.txt file
/**
 * Run the application
 */
const run = () => {
  const msg = 'Hello from logger.service.js!'
  logger(msg)
}

export { run }
