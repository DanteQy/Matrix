//It's case sensitive
const matrix = require('./Matrix');

var x = 1;
//that's the ES6 version
test('Matrix addition ('+x+')', () => {
  let mat = new matrix(3, 3);
	mat.value[0] = [1, 2, 3];
	mat.value[1] = [4, 5, 6];
	mat.value[2] = [7, 8, 9];
	mat.add(x);

  expect(mat).toEqual({
    value:[[2, 3, 4],
          [5, 6, 7],
          [8, 9, 10]],
    cols:3,
    rows:3
  });
});
