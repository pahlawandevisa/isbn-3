let expect = require('chai').expect;
let isbn = require('../src/index.js');

describe('ISBN: ', () => {
  describe('isValidIsbn: ', () => {
    it('return true when input 9780061122415', (done) => {
      isbn.isValidIsbn('9780061122415', (err, s) => {
        expect(err).to.equal(null);
        expect(s).to.equal(true);
        done();
      });
    });

    it('return false when input 9780061122416', (done) => {
      isbn.isValidIsbn('9780061122416', (err, s) => {
        expect(err).to.equal(null);
        expect(s).to.equal(false);
        done();
      });
    });

    it('return true when input 0061122416', (done) => {
      isbn.isValidIsbn('0061122416', (err, s) => {
        expect(err).to.equal(null);
        expect(s).to.equal(true);
        done();
      });
    });

    it('return false when input 0061122415', (done) => {
      isbn.isValidIsbn('0061122415', (err, s) => {
        expect(err).to.equal(null);
        expect(s).to.equal(false);
        done();
      });
    });

    it('return false when input 97800611224', (done) => {
      isbn.isValidIsbn('97800611224', (err, s) => {
        expect(err).to.equal(null);
        expect(s).to.equal(false);
        done();
      });
    });

    it('return true when input 184146208X', (done) => {
      isbn.isValidIsbn('184146208X', (err, s) => {
        expect(err).to.equal(null);
        expect(s).to.equal(true);
        done();
      });
    });

    it('return error when input is not a string', (done) => {
      isbn.isValidIsbn(1313443454353, (err, s) => {
        expect(err).to.equal('error');
        expect(s).to.equal('Input is not a string');
        done();
      });
    });
  });
});
