import assert from 'assert';
import OthmaneYo from '../lib';


describe('OthmaneYo', function () {
  it('should have a version number!', function () {
    assert(typeof OthmaneYo.VERSION !== 'undefined', 'The Project should have a VERSION, whatever the actual version.');
  });
});
