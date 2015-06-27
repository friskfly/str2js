var str2js = function(str) {
  if(typeof str !== 'string') throw new Error('param must be type string')
  return str
    .replace(/\\/g, '\\\\')
    .replace(/'/g, "\\'")
    .replace(/"/g, '\\"')
    .replace(/\r\n|\r|\n/g, "\\n")
}

module.exports = str2js
