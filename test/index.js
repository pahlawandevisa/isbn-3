var expect = require('chai').expect;
var isbn = require('../src/index.js');

describe('ISBN: ', function() {
  describe('isValidIsbn: ', function() {
    it('return true when input 9780061122415', function(done) {
      isbn.isValidIsbn('9780061122415', function(err, s) {
        expect(err).to.equal(null);
        expect(s).to.equal(true);
        done();
      });
    });

    it('return false when input 9780061122416', function(done) {
      isbn.isValidIsbn('9780061122416', function(err, s) {
        expect(err).to.equal(null);
        expect(s).to.equal(false);
        done();
      });
    });
  });
});