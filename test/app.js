const chai = require('chai')
const sum = require('./../src/')

const expect = chai.expect;

describe('Sum', function() {
	
	expect(sum([1,2,3])).to.equal(6);

});

