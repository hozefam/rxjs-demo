import { Observable, fromEvent, interval, timer, of, from, pipe } from 'rxjs';
import { take } from 'rxjs/internal/operators/take.js';
import { switchMap } from 'rxjs/internal/operators/switchMap.js';
import { map } from 'rxjs/internal/operators/map.js';
import { toArray } from 'rxjs/internal/operators/toArray.js';
import { log, error, warning, info, success } from './log.js';
import { longRunningTask } from './util.js';
import events from 'events';

console.clear();

of(1, 2, 3)
  .pipe(map((x) => x + 1))
  .subscribe(
    (x) => log(success(x)),
    (err) => log(error(err)),
    () => log('completed')
  );

from([1, 2, 3])
  .pipe(map((x) => x + 1))
  .subscribe(
    (x) => log(success(x)),
    (err) => log(error(err)),
    () => log('completed')
  );

from('Hozefa')
  .pipe(toArray())
  .subscribe(
    (x) => log(success(x)),
    (err) => log(error(err)),
    () => log('completed')
  );
