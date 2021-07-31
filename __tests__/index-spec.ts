import * as index from '../src/index';

test('Should have asio available', () => {
  expect(index.asio).toBeTruthy();
});
