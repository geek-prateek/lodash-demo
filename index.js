const _ = require('lodash');

// 1. _.get and _.set
const user = {};
_.set(user, 'profile.name', 'Alice');
console.log(_.get(user, 'profile.name')); // 'Alice'
console.log(_.get(user, 'profile.age', 25)); // 25 (default value)

// 2. _.cloneDeep
const original = { a: { b: 2 } };
const clone = _.cloneDeep(original);
clone.a.b = 42;
console.log(original.a.b); // 2 (original unchanged)

// 3. _.merge
const obj1 = { name: 'Alice', address: { city: 'NY' } };
const obj2 = { age: 30, address: { zip: 10001 } };
const merged = _.merge({}, obj1, obj2);
console.log(merged); // { name: 'Alice', age: 30, address: { city: 'NY', zip: 10001 } }

// 4. _.chunk
console.log(_.chunk(['a', 'b', 'c', 'd'], 2)); // [['a', 'b'], ['c', 'd']]

// 5. _.compact
console.log(_.compact([0, 1, false, 2, '', 3])); // [1, 2, 3]

// 6. _.uniq
console.log(_.uniq([2, 1, 2])); // [2, 1]

// 7. _.difference
console.log(_.difference([2, 1], [2, 3])); // [1]

// 8. _.intersection
console.log(_.intersection([2, 1], [2, 3])); // [2]

// 9. _.keyBy
const users = [
  { id: 'a1', name: 'John' },
  { id: 'a2', name: 'Jane' }
];
console.log(_.keyBy(users, 'id'));
// { a1: { id: 'a1', name: 'John' }, a2: { id: 'a2', name: 'Jane' } }

// 10. _.groupBy
const nums = [6.1, 4.2, 6.3];
console.log(_.groupBy(nums, Math.floor)); // { '4': [4.2], '6': [6.1, 6.3] }

// 11. _.debounce
const debounced = _.debounce(() => console.log('Debounced!'), 300);
debounced(); // Won’t print unless called continuously and 300ms passes

// 12. _.throttle
const throttled = _.throttle(() => console.log('Throttled!'), 1000);
throttled(); // Will only run once per second

// 13. _.memoize
const slowAdd = (n) => n + 10;
const fastAdd = _.memoize(slowAdd);
console.log(fastAdd(5)); // 15
console.log(fastAdd(5)); // Cached result: 15

// 14. _.once
const initialize = _.once(() => console.log('Init!'));
initialize(); // 'Init!'
initialize(); // No output

// 15. _.pick and _.omit
const person = { name: 'Bob', age: 40, admin: true };
console.log(_.pick(person, ['name'])); // { name: 'Bob' }
console.log(_.omit(person, ['admin'])); // { name: 'Bob', age: 40 }

// 16. _.pickBy and _.omitBy
const cleaned = _.omitBy({ a: 1, b: null, c: undefined }, _.isNil);
console.log(cleaned); // { a: 1 }

const filtered = _.pickBy({ a: 1, b: null, c: 3 }, val => val !== null);
console.log(filtered); // { a: 1, c: 3 }

// 17. _.chain
const result = _.chain([1, 2, 3, 4])
  .map(n => n * 2)
  .filter(n => n > 4)
  .value();
console.log(result); // [6, 8]

// 18. lodash/fp (Functional Programming)
const fp = require('lodash/fp');
const addTwo = fp.flow([fp.add(2), fp.multiply(3)]);
console.log(addTwo(4)); // (4 + 2) * 3 = 18

// 19. _.flatten and _.flattenDeep
const nested = [1, [2, [3, [4]], 5]];
console.log(_.flatten(nested)); // [1, 2, [3, [4]], 5]
console.log(_.flattenDeep(nested)); // [1, 2, 3, 4, 5]

// 20. _.isEqual
const objA = { a: 1, b: { c: 2 } };
const objB = { a: 1, b: { c: 2 } };
console.log(_.isEqual(objA, objB)); // true

// 21. _.isEmpty
console.log(_.isEmpty([])); // true
console.log(_.isEmpty({})); // true
console.log(_.isEmpty({ a: 1 })); // false

// 22. _.range
console.log(_.range(5)); // [0, 1, 2, 3, 4]
console.log(_.range(1, 5)); // [1, 2, 3, 4]
console.log(_.range(0, 20, 5)); // [0, 5, 10, 15]

// 23. _.sum and _.mean
const numbers = [4, 2, 8, 6];
console.log(_.sum(numbers)); // 20
console.log(_.mean(numbers)); // 5

// 24. _.orderBy
const usersList = [
  { name: 'Alice', age: 34 },
  { name: 'Bob', age: 23 },
  { name: 'Charlie', age: 40 }
];
console.log(_.orderBy(usersList, ['age'], ['asc']));
// [{ name: 'Bob', ... }, { name: 'Alice', ... }, { name: 'Charlie', ... }]

// 25. _.capitalize and _.kebabCase
console.log(_.capitalize('hello world')); // 'Hello world'
console.log(_.kebabCase('Foo Bar')); // 'foo-bar'

// 26. _.defaults
const config = { env: 'prod' };
const defaultConfig = _.defaults(config, { env: 'dev', debug: true });
console.log(defaultConfig); // { env: 'prod', debug: true }

// 27. _.shuffle
console.log(_.shuffle([1, 2, 3, 4])); // [2, 4, 1, 3] (randomized)

// 28. _.times
_.times(3, i => console.log(`Iteration ${i}`)); 
// Iteration 0
// Iteration 1
// Iteration 2

// 29. _.zip and _.unzip
const zipped = _.zip(['a', 'b'], [1, 2]);
console.log(zipped); // [['a', 1], ['b', 2]]
console.log(_.unzip(zipped)); // [['a', 'b'], [1, 2]]

// 30. _.invert
const colorMap = { red: '#FF0000', green: '#00FF00' };
console.log(_.invert(colorMap)); // { '#FF0000': 'red', '#00FF00': 'green' }

// 31. _.find and _.findLast
const people = [
  { name: 'Tom', active: false },
  { name: 'Jerry', active: true },
  { name: 'Spike', active: false }
];
console.log(_.find(people, { active: true })); // { name: 'Jerry', active: true }
console.log(_.findLast(people, { active: false })); // { name: 'Spike', active: false }

// 32. _.pull and _.remove
let numbers1 = [1, 2, 3, 4, 5];
_.pull(numbers1, 2, 4);
console.log(numbers1); // [1, 3, 5]

let numbers2 = [1, 2, 3, 4, 5];
_.remove(numbers2, n => n % 2 === 0);
console.log(numbers2); // [1, 3, 5]

// 33. _.fill
let filledArray = Array(5);
_.fill(filledArray, 'X');
console.log(filledArray); // ['X', 'X', 'X', 'X', 'X']

// 34. _.reject
const mixedUsers = [
  { user: 'barney', active: false },
  { user: 'fred', active: true }
];
console.log(_.reject(mixedUsers, { active: true }));
// [{ user: 'barney', active: false }]

// 35. _.clone (shallow)
const simple = { a: 1, b: 2 };
const shallow = _.clone(simple);
shallow.b = 100;
console.log(simple.b); // 2 (not affected because shallow clone)

// 36. _.intersectionBy
console.log(_.intersectionBy([2.1, 1.2], [4.3, 2.4], Math.floor)); // [2.1]

// 37. _.sortBy
const items = [
  { name: 'banana', qty: 10 },
  { name: 'apple', qty: 5 },
  { name: 'orange', qty: 20 }
];
console.log(_.sortBy(items, ['qty']));
// [{ name: 'apple', qty: 5 }, { name: 'banana', qty: 10 }, { name: 'orange', qty: 20 }]

// 38. _.flattenDepth
const deepArray = [1, [2, [3, [4, [5]]]]];
console.log(_.flattenDepth(deepArray, 2)); // [1, 2, 3, [4, [5]]]

// 39. _.delay
_.delay(() => console.log('Delayed log after 1s'), 1000); // Logs after 1 second

// 40. _.identity
console.log(_.identity('hello')); // 'hello'

// 41. _.constant
const alwaysFive = _.constant(5);
console.log(alwaysFive()); // 5

// 42. _.noop
console.log(_.noop()); // undefined (no-operation function)

// 43. _.nth
console.log(_.nth(['a', 'b', 'c', 'd'], 2)); // 'c'
console.log(_.nth(['a', 'b', 'c', 'd'], -1)); // 'd'

// 44. _.sample and _.sampleSize
console.log(_.sample([1, 2, 3, 4])); // Random element like 3
console.log(_.sampleSize([1, 2, 3, 4], 2)); // Random 2 elements like [4, 1]

// 45. _.transform (like reduce but for objects)
const object = { a: 1, b: 2, c: 3 };
const resultObj = _.transform(object, (result, val, key) => {
  result[key] = val * 2;
}, {});
console.log(resultObj); // { a: 2, b: 4, c: 6 }

