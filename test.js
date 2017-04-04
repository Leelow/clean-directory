/* eslint-env mocha */
const path = require('path')
const assert = require('assert')
const mock = require('mock-require')

var items = []
function getRemovedItems () {
  var tmp = items
  items = []
  return tmp
}

mock('fs-extra', {
  remove: function (item, next) {
    items.push(item)
    next(null, item)
  },
  removeSync: function (item) {
    items.push(item)
  }
})

var clean = require('./clean-directory.js')
const dir = path.join(__dirname, 'files')

describe('clean-directory (async)', function () {
  it('should empty a directory', function (done) {
    clean(dir, function (err, paths) {
      if (err) return done(err)
      assert.deepEqual(paths, getRemovedItems())
      done()
    })
  })

  it('should allow parallelRemove option', function (done) {
    clean(dir, {parallelRemove: 5}, function (err, paths) {
      if (err) return done(err)
      assert.deepEqual(paths, getRemovedItems())
      done()
    })
  })

  it('should use a filter', function (done) {
    clean(dir, 'x', {parallelRemove: 5}, function (err, paths) {
      if (err) return done(err)
      assert.deepEqual(paths, getRemovedItems())
      done()
    })
  })

  it('should capture glob error', function (done) {
    mock('glob-ignore', function (pattern, filter, options, callback) {
      callback(new Error('test'))
    })
    clean = mock.reRequire('./clean-directory.js')

    clean(dir, 'x', {parallelRemove: 5}, function (err, paths) {
      assert.equal(err.message, 'test')
      assert.equal(paths, undefined)
      mock.stop('glob-ignore')
      clean = mock.reRequire('./clean-directory.js')
      done()
    })
  })
})

describe('clean-directory (sync)', function () {
  it('should empty a directory', function () {
    assert.deepEqual(clean.sync(dir), getRemovedItems())
  })

  it('should use a filter', function () {
    assert.deepEqual(clean.sync(dir, 'x'), getRemovedItems())
  })
})
