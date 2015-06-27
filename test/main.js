var str2js = require('../')
var assert = require('assert')
var fs = require('fs')
describe('str2js',function(){
  it('should thorw error when passed not string type',function(){
    var error
    try{
      str2js()
    }
    catch(e){
      error = e
    }
    assert.equal(error.message,'param must be type string')
  })

  it('should work with all escape sequences',function(){
    var str = fs.readFileSync('test/example.txt','utf8')
    eval('var str2 = "' + str2js(str) + '"')
    assert.equal(str2,str)
  })
})
