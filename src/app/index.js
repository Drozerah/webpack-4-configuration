/**
 * MODULES
 */
import { log } from './utils/lib.js'
/**
 * Run the application
 */
const run = () => {

    const msg = 'Hello from lib.js!'
    log(msg)
    
    // Drozerah
    [1, 2, 3].map(n => n ** 2)
}

export { run }