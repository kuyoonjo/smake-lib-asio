import { sep, resolve } from 'path';
import { LLVM } from 'smake';

export function asio(t: LLVM) {
  Object.defineProperty(t, 'sysIncludedirs', {
    value: [
      ...t.sysIncludedirs,
      resolve(__dirname, '..', 'asio', 'asio', 'include').replace(
        new RegExp(sep, 'g'),
        '/'
      ),
    ],
    configurable: true,
  });
  Object.defineProperty(t, 'cxxflags', {
    value: [...t.cxxflags, '-DASIO_STANDALONE'],
    configurable: true,
  });
}
