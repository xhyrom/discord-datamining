"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["95708"],
  {
    677623(t) {
      function i(t) {
        if (
          ((this._capacity = o(t)),
          (this._length = 0),
          (this._front = 0),
          this._makeCapacity(),
          r(t))
        ) {
          for (var i = t.length, h = 0; h < i; ++h) this[h] = t[h];
          this._length = i;
        }
      }
      (i.prototype.toArray = function () {
        for (
          var t = this._length,
            i = Array(t),
            r = this._front,
            h = this._capacity,
            o = 0;
          o < t;
          ++o
        )
          i[o] = this[(r + o) & (h - 1)];
        return i;
      }),
        (i.prototype.push = function (t) {
          var i = arguments.length,
            r = this._length;
          if (i > 1) {
            var h = this._capacity;
            if (r + i > h) {
              for (var o = 0; o < i; ++o) {
                this._checkCapacity(r + 1);
                var e = (this._front + r) & (this._capacity - 1);
                (this[e] = arguments[o]), r++, (this._length = r);
              }
              return r;
            }
            for (var e = this._front, o = 0; o < i; ++o)
              (this[(e + r) & (h - 1)] = arguments[o]), e++;
            return (this._length = r + i), r + i;
          }
          if (0 === i) return r;
          this._checkCapacity(r + 1);
          var o = (this._front + r) & (this._capacity - 1);
          return (this[o] = t), (this._length = r + 1), r + 1;
        }),
        (i.prototype.pop = function () {
          var t = this._length;
          if (0 !== t) {
            var i = (this._front + t - 1) & (this._capacity - 1),
              r = this[i];
            return (this[i] = void 0), (this._length = t - 1), r;
          }
        }),
        (i.prototype.shift = function () {
          var t = this._length;
          if (0 !== t) {
            var i = this._front,
              r = this[i];
            return (
              (this[i] = void 0),
              (this._front = (i + 1) & (this._capacity - 1)),
              (this._length = t - 1),
              r
            );
          }
        }),
        (i.prototype.unshift = function (t) {
          var i = this._length,
            r = arguments.length;
          if (r > 1) {
            var h = this._capacity;
            if (i + r > h) {
              for (var o = r - 1; o >= 0; o--) {
                this._checkCapacity(i + 1);
                var h = this._capacity,
                  e = (((this._front - 1) & (h - 1)) ^ h) - h;
                (this[e] = arguments[o]),
                  i++,
                  (this._length = i),
                  (this._front = e);
              }
              return i;
            }
            for (var n = this._front, o = r - 1; o >= 0; o--) {
              var e = (((n - 1) & (h - 1)) ^ h) - h;
              (this[e] = arguments[o]), (n = e);
            }
            return (this._front = n), (this._length = i + r), i + r;
          }
          if (0 === r) return i;
          this._checkCapacity(i + 1);
          var h = this._capacity,
            o = (((this._front - 1) & (h - 1)) ^ h) - h;
          return (
            (this[o] = t), (this._length = i + 1), (this._front = o), i + 1
          );
        }),
        (i.prototype.peekBack = function () {
          var t = this._length;
          if (0 !== t)
            return this[(this._front + t - 1) & (this._capacity - 1)];
        }),
        (i.prototype.peekFront = function () {
          if (0 !== this._length) return this[this._front];
        }),
        (i.prototype.get = function (t) {
          var i = t;
          if (i === (0 | i)) {
            var r = this._length;
            if ((i < 0 && (i += r), !(i < 0) && !(i >= r)))
              return this[(this._front + i) & (this._capacity - 1)];
          }
        }),
        (i.prototype.isEmpty = function () {
          return 0 === this._length;
        }),
        (i.prototype.clear = function () {
          (this._length = 0), (this._front = 0), this._makeCapacity();
        }),
        (i.prototype.toString = function () {
          return this.toArray().toString();
        }),
        (i.prototype.valueOf = i.prototype.toString),
        (i.prototype.removeFront = i.prototype.shift),
        (i.prototype.removeBack = i.prototype.pop),
        (i.prototype.insertFront = i.prototype.unshift),
        (i.prototype.insertBack = i.prototype.push),
        (i.prototype.enqueue = i.prototype.push),
        (i.prototype.dequeue = i.prototype.shift),
        (i.prototype.toJSON = i.prototype.toArray),
        Object.defineProperty(i.prototype, "length", {
          get: function () {
            return this._length;
          },
          set: function () {
            throw RangeError("");
          },
        }),
        (i.prototype._makeCapacity = function () {
          for (var t = this._capacity, i = 0; i < t; ++i) this[i] = void 0;
        }),
        (i.prototype._checkCapacity = function (t) {
          this._capacity < t && this._resizeTo(o(1.5 * this._capacity + 16));
        }),
        (i.prototype._resizeTo = function (t) {
          var i = this._front,
            r = this._capacity,
            o = Array(r),
            e = this._length;
          if (
            (h(this, 0, o, 0, r),
            (this._capacity = t),
            this._makeCapacity(),
            (this._front = 0),
            i + e <= r)
          )
            h(o, i, this, 0, e);
          else {
            var n = e - ((i + e) & (r - 1));
            h(o, i, this, 0, n), h(o, 0, this, n, e - n);
          }
        });
      var r = Array.isArray;
      function h(t, i, r, h, o) {
        for (var e = 0; e < o; ++e) r[e + h] = t[e + i];
      }
      function o(t) {
        var i;
        if ("number" != typeof t)
          if (!r(t)) return 16;
          else t = t.length;
        return (
          (i = (Math.min(Math.max(16, t), 0x40000000) >>> 0) - 1),
          (i |= i >> 1),
          (i |= i >> 2),
          (i |= i >> 4),
          (i |= i >> 8),
          (i |= i >> 16) + 1
        );
      }
      t.exports = i;
    },
  },
]);
//# sourceMappingURL=95708.2336099d87598b62.js.map
