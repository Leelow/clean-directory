const path = require('path')
const glob = require('glob-ignore')
const fs = require('fs-extra')
const async = require('async')

var defaultOptions = {
  parallelRemove: 10
}

function setOptions (options) {
  var opt = {}
  Object.keys(defaultOptions).forEach(function (key) {
    if (!options[key]) opt[key] = defaultOptions[key]
    else opt[key] = options[key]
  })
  return opt
}

module.exports = function (dir, filters, options, callback) {
  callback = callback || options || filters
  options = typeof options === 'object' ? options : filters
  if (typeof options === 'function') options = {}

  var opt = setOptions(options)

  glob('**', filters, {cwd: dir}, function (err, paths) {
    if (err) return callback(err)

    async.mapLimit(paths, opt.parallelRemove, function (item, next) {
      fs.remove(path.join(dir, item), next)
    }, callback)
  })
}

module.exports.sync = function (dir, filters) {
  var paths = glob.sync('**', filters, {cwd: dir})
  paths = paths.map(function (item) {
    var full = path.join(dir, item)
    fs.removeSync(full)
    return full
  })
  return paths
}
