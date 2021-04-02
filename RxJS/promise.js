import { Observable, fromEvent } from 'rxjs';
import { log, error, warning, info, success } from './log.js';
import { longRunningTask } from './util.js';

console.clear();

log('Calling the long running task ... ');
longRunningTask()
  .then(() => log(success('👍 Saved')))
  .catch(() => log(error('🔥 Not Saved')));

try {
  await longRunningTask(10000);
  log(success('👍 Saved'));
} catch (err) {
  log(error('🔥 Not Saved'));
}
