const add = require('./index');

test('Menambahkan 1 + 2 harus menghasilkan 3', () => {
  expect(add(1, 2)).toBe(3);
});
