import { asio } from '../src/asio';
import { LLVM_Darwin } from 'smake';
import { addLibs } from '@smake/libs';
import { resolve } from 'path';

test('asio', () => {
  class A extends LLVM_Darwin {
    files = [];
  }
  const B = addLibs(A, asio, asio, asio);
  const b = new B();
  const p = resolve(__dirname, '..', 'asio', 'asio', 'include').replace(
    /\\/g,
    '/'
  );
  expect(b.sysIncludedirs.includes(p)).toBe(true);
  expect(b.cxxflags.includes('-DASIO_STANDALONE')).toBe(true);
  expect(b.sysIncludedirs.length).toBe(3);
});
