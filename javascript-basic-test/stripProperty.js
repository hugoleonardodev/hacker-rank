function stripProperty(obj, prop) {
  delete obj[prop];

  return obj;
}

console.log(stripProperty({foo: 2, bar: 3, baz: 3}, 'foo'));
