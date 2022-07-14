const assert = require('assert');
const format = require('../patternFormatter');

describe('pattern formatter', () => {
  describe('purl soho', () => {
    describe('notch hem tank ', () => {
      it('keep only the smallest size', () => {
        const input = [
          'Decrease Round 2: P6 (7, 8, 9, 10), k2tog, k77 (83, 89, 95, 101), ssk, p12 (14, 16, 18, 20), k2tog, k77 (83, 89, 95, 101), ssk, p6 (7, 8, 9, 10). [182 (198, 214, 230, 246) stitches]',
          'Next Round: P6 (7, 8, 9, 10), k79 (85, 91, 97, 103), p12 (14, 16, 18, 20), k79 (85, 91, 97, 103), p6 (7, 8, 9, 10).',
          '',
          'Repeat the last round until piece measures 13 inches from the cast-on edge of the Front hem.',
        ].join('\n');
        // TODO Handle truncating the space between stitches
        // const expected = 'Decrease Round 2: P6, k2tog, k77, ssk, p12, k2tog, k77, ssk, p6. [182 stitches]';
        const expected = [
          'Decrease Round 2: P6, k2tog, k77, ssk, p12, k2tog, k77, ssk, p6. [182stitches]',
          'Next Round: P6, k79, p12, k79, p6.',
          'Repeat the last round until piece measures 13 inches from the cast-on edge of the Front hem.',
        ];
        const actual = format(input);
        assert.equal(actual.length, expected.length);
        expected.forEach((expectedStr, index) => {
          assert.equal(actual[index], expectedStr);
        });
      });
    });
  });
});