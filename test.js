import { HashMap } from './hashMap.js';
import { HashSet } from './hashSet.js';

const test = new HashMap();

console.log(test.loadLevel());

test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');

console.log(test.loadLevel());

console.log('--- After 12 items');
console.log('length:', test.length(), '| capacity:', test.capacity);

test.set('apple', 'green');
test.set('dog', 'white');
test.set('lion', 'silver');

console.log('--- after overwrite ');
console.log('length:', test.length(), '| capacity:', test.capacity);
console.log(
  'apple:',
  test.get('apple'),
  '| dog:',
  test.get('dog'),
  '| lion:',
  test.get('lion'),
);

test.set('moon', 'silver');

console.log('--- after moon, size should be grow');
console.log('length:', test.length(), '| capacity:', test.capacity);
console.log('bucket sizes:', test.buckets.map((b) => b.length).join(','));

// test.remove('hat');
test.remove('hat');

console.log(test.has('hat'));

// test.clear();

console.log(test.entries());

console.log(test.keys());
console.log(test.values());

console.log(test.loadLevel());

// ....Extra credit: hashSet testing------

console.log('--- HashSet');
const set = new HashSet();
set.add('apple');
set.add('banana');
set.add('apple'); // duplicate, ignore
console.log('length:', set.length());
console.log('keys:', set.keys());
console.log("has('banana'):", set.has('banana'));
console.log("remove('banana'):", set.remove('banana'));
console.log('keys:', set.keys());
