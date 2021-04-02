import { Observable, fromEvent, interval, timer } from 'rxjs';
import { take } from 'rxjs/internal/operators/take.js';
import { log, error, warning, info, success } from './log.js';
import { longRunningTask } from './util.js';
import events from 'events';

console.clear();

// const broadcast = interval(2000);
const broadcast = timer(1000, 5000);

const subscription = broadcast.subscribe((res) => {
  if (res < 5) log(success(res));
  else subscription.unsubscribe();
});
