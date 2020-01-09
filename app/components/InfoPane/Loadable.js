/**
 *
 * Asynchronously loads the component for InfoPane
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
