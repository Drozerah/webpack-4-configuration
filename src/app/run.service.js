/**
 * MODULES
 */
import { logger } from './utils/logger.service.js'
/**
 * Run the application
 */
const run = () => {

    const msg = 'Hello from logger.service.js!'
    logger(msg)

}

export { run }