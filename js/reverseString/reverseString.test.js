import {reverseString} from './reverseString.js';
import { expect, it } from '@jest/globals';

// test (
//   'checking the reverse of the string',
//   () => {
//     expect(reverseString('hello gyu')).toBe('uyg olleh');
//   }
// );

describe(
  'checking the reverse of the string',
  () => {
    const testCase = [
      {
        inString: 'hello',
        expected: 'olleh'
      },
      {
        inString: 'guys',
        expected: 'syug'
      },
    ];
    testCase.forEach(test => {
      it(
        `Входящая строка: ${test.inString} ожидают: ${test.expected}`,
        () => {
          const res = reverseString(test.inString);
          expect(res).toBe(test.expected);
        }
      );
    });
  }
);
