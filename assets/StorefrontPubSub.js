!(function (t, n) {
  typeof exports == 'object' && typeof module == 'object' ? (module.exports = n()) : typeof define == 'function' && define.amd ? define([], n) : typeof exports == 'object' ? (exports.StorefrontPubSub = n()) : (t.StorefrontPubSub = n())
})(window, function () {
  return (function (t) {
    var n = {}
    function e (r) {
      if (n[r]) return n[r].exports
      var o = (n[r] = { i: r, l: !1, exports: {} })
      return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports
    }
    return (
      (e.m = t),
      (e.c = n),
      (e.d = function (t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r })
      }),
      (e.r = function (t) {
        typeof Symbol != 'undefined' && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(t, '__esModule', { value: !0 })
      }),
      (e.t = function (t, n) {
        if ((1 & n && (t = e(t)), 8 & n)) return t
        if (4 & n && typeof t == 'object' && t && t.__esModule) return t
        var r = Object.create(null)
        if ((e.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: t }), 2 & n && typeof t != 'string')) {
          for (var o in t) {
            e.d(
              r,
              o,
              function (n) {
                return t[n]
              }.bind(null, o)
            )
          }
        }
        return r
      }),
      (e.n = function (t) {
        var n =
          t && t.__esModule
            ? function () {
              return t.default
            }
            : function () {
              return t
            }
        return e.d(n, 'a', n), n
      }),
      (e.o = function (t, n) {
        return Object.prototype.hasOwnProperty.call(t, n)
      }),
      (e.p = ''),
      e((e.s = 2))
    )
  })([
    function (t, n, e) {
      ;(function (t) {
        !(function (e, r) {
          'use strict'
          var o = {}
          e.PubSub = o
          var i = e.define
          !(function (t) {
            var n = {},
              e = -1
            function r (t) {
              var n
              for (n in t) if (t.hasOwnProperty(n)) return !0
              return !1
            }
            function o (t, n, e) {
              try {
                t(n, e)
              } catch (t) {
                setTimeout(
                  (function (t) {
                    return function () {
                      throw t
                    }
                  })(t),
                  0
                )
              }
            }
            function i (t, n, e) {
              t(n, e)
            }
            function u (t, e, r, u) {
              var c,
                f = n[e],
                a = u ? i : o
              if (n.hasOwnProperty(e)) for (c in f) f.hasOwnProperty(c) && a(f[c], t, r)
            }
            function c (t, e, o, i) {
              var c = (function (t, n, e) {
                  return function () {
                    var r = String(t),
                      o = r.lastIndexOf('.')
                    for (u(t, t, n, e); o !== -1;) (r = r.substr(0, o)), (o = r.lastIndexOf('.')), u(t, r, n, e)
                  }
                })((t = typeof t == 'symbol' ? t.toString() : t), e, i),
                f = (function (t) {
                  var e = String(t),
                    o = Boolean(n.hasOwnProperty(e) && r(n[e])),
                    i = e.lastIndexOf('.')
                  for (; !o && i !== -1;) (e = e.substr(0, i)), (i = e.lastIndexOf('.')), (o = Boolean(n.hasOwnProperty(e) && r(n[e])))
                  return o
                })(t)
              return !!f && (!0 === o ? c() : setTimeout(c, 0), !0)
            }
            ;(t.publish = function (n, e) {
              return c(n, e, !1, t.immediateExceptions)
            }),
            (t.publishSync = function (n, e) {
              return c(n, e, !0, t.immediateExceptions)
            }),
            (t.subscribe = function (t, r) {
              if (typeof r != 'function') return !1
              ;(t = typeof t == 'symbol' ? t.toString() : t), n.hasOwnProperty(t) || (n[t] = {})
              var o = 'uid_' + String(++e)
              return (n[t][o] = r), o
            }),
            (t.subscribeOnce = function (n, e) {
              var r = t.subscribe(n, function () {
                t.unsubscribe(r), e.apply(this, arguments)
              })
              return t
            }),
            (t.clearAllSubscriptions = function () {
              n = {}
            }),
            (t.clearSubscriptions = function (t) {
              var e
              for (e in n) n.hasOwnProperty(e) && e.indexOf(t) === 0 && delete n[e]
            }),
            (t.unsubscribe = function (e) {
              var r,
                o,
                i,
                u =
                    typeof e == 'string' &&
                    (n.hasOwnProperty(e) ||
                      (function (t) {
                        var e
                        for (e in n) if (n.hasOwnProperty(e) && e.indexOf(t) === 0) return !0
                        return !1
                      })(e)),
                c = !u && typeof e == 'string',
                f = typeof e == 'function',
                a = !1
              if (!u) {
                for (r in n) {
                  if (n.hasOwnProperty(r)) {
                    if (((o = n[r]), c && o[e])) {
                      delete o[e], (a = e)
                      break
                    }
                    if (f) for (i in o) o.hasOwnProperty(i) && o[i] === e && (delete o[i], (a = !0))
                  }
                }
                return a
              }
              t.clearSubscriptions(e)
            })
          })(o),
          typeof i == 'function' && i.amd
            ? i(function () {
              return o
            })
            : (void 0 !== t && t.exports && (n = t.exports = o), (n.PubSub = o), (t.exports = n = o))
        })((typeof window == 'object' && window) || this)
      }.call(this, e(1)(t)))
    },
    function (t, n) {
      t.exports = function (t) {
        return (
          t.webpackPolyfill ||
            ((t.deprecate = function () {}),
            (t.paths = []),
            t.children || (t.children = []),
            Object.defineProperty(t, 'loaded', {
              enumerable: !0,
              get: function () {
                return t.l
              }
            }),
            Object.defineProperty(t, 'id', {
              enumerable: !0,
              get: function () {
                return t.i
              }
            }),
            (t.webpackPolyfill = 1)),
          t
        )
      }
    },
    function (t, n, e) {
      'use strict'
      e.r(n)
      var r = e(0),
        o = e.n(r)
      function i (t, n, e) {
        return n in t ? Object.defineProperty(t, n, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : (t[n] = e), t
      }
      var u = function t (n) {
        var e = this,
          r = n.actions
        !(function (t, n) {
          if (!(t instanceof n)) throw new TypeError('Cannot call a class as a function')
        })(this, t),
        i(this, 'subscribe', function (t, n) {
          return e.actions[t] ? o.a.subscribe(t, n) : console.error("PubSubManager couldn't subscribe to ".concat(t, ", this topic probably don't exist."))
        }),
        i(this, 'publish', function (t, n) {
          return e.actions[t] ? o.a.publish(t, n) : console.error("PubSubManager couldn't publish to ".concat(t, ", this topic probably don't exist."))
        }),
        (this.actions = r)
      }
      function c (t) {
        return (c =
          typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
            ? function (t) {
              return typeof t
            }
            : function (t) {
              return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t
            })(t)
      }
      function f (t) {
        return (f = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
            return t.__proto__ || Object.getPrototypeOf(t)
          })(t)
      }
      function a (t) {
        if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return t
      }
      function s (t, n) {
        return (s =
          Object.setPrototypeOf ||
          function (t, n) {
            return (t.__proto__ = n), t
          })(t, n)
      }
      function l (t, n, e) {
        return n in t ? Object.defineProperty(t, n, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : (t[n] = e), t
      }
      var p = new ((function (t) {
        function n () {
          var t, e, r, o
          !(function (t, n) {
            if (!(t instanceof n)) throw new TypeError('Cannot call a class as a function')
          })(this, n)
          for (var i = arguments.length, u = new Array(i), s = 0; s < i; s++) u[s] = arguments[s]
          return (
            (r = this),
            (o = (t = f(n)).call.apply(t, [this].concat(u))),
            (e = !o || (c(o) !== 'object' && typeof o != 'function') ? a(r) : o),
            l(a(e), 'addToCart', function (t) {
              e.publish('ADD_TO_CART', t)
            }),
            l(a(e), 'updateCart', function (t) {
              e.publish('UPDATE_CART', { item: t })
            }),
            l(a(e), 'updateCartQuantity', function (t) {
              e.publish('UPDATE_QUANTITY', { quantity: t })
            }),
            l(a(e), 'removeFromCart', function (t) {
              e.publish('REMOVE_FROM_CART', { item: t })
            }),
            e
          )
        }
        return (
          (function (t, n) {
            if (typeof n != 'function' && n !== null) throw new TypeError('Super expression must either be null or a function')
            ;(t.prototype = Object.create(n && n.prototype, { constructor: { value: t, writable: !0, configurable: !0 } })), n && s(t, n)
          })(n, u),
          n
        )
      })())({ actions: { ADD_TO_CART: 'ADD_TO_CART', UPDATE_CART: 'UPDATE_CART', REMOVE_FROM_CART: 'REMOVE_FROM_CART', UPDATE_QUANTITY: 'UPDATE_QUANTITY' } })
      n.default = p
    }
  ]).default
})
