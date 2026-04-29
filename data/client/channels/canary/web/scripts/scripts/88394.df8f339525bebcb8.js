(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["88394"],
  {
    877413(e) {
      "use strict";
      e.exports = function (e) {
        return ((e = String(e || "")), r.test(e))
          ? "rtl"
          : i.test(e)
            ? "ltr"
            : "neutral";
      };
      var t = "֑-߿יִ-﷽ﹰ-ﻼ",
        n = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
        r = RegExp("^[^" + n + "]*[" + t + "]"),
        i = RegExp("^[^" + t + "]*[" + n + "]");
    },
    294106(e, t) {
      "use strict";
      for (
        var n =
            "u" > typeof window &&
            /Mac|iPod|iPhone|iPad/.test(window.navigator.platform),
          r = {
            alt: "altKey",
            control: "ctrlKey",
            meta: "metaKey",
            shift: "shiftKey",
          },
          i = {
            add: "+",
            break: "pause",
            cmd: "meta",
            command: "meta",
            ctl: "control",
            ctrl: "control",
            del: "delete",
            down: "arrowdown",
            esc: "escape",
            ins: "insert",
            left: "arrowleft",
            mod: n ? "meta" : "control",
            opt: "alt",
            option: "alt",
            return: "enter",
            right: "arrowright",
            space: " ",
            spacebar: " ",
            up: "arrowup",
            win: "meta",
            windows: "meta",
          },
          a = {
            backspace: 8,
            tab: 9,
            enter: 13,
            shift: 16,
            control: 17,
            alt: 18,
            pause: 19,
            capslock: 20,
            escape: 27,
            " ": 32,
            pageup: 33,
            pagedown: 34,
            end: 35,
            home: 36,
            arrowleft: 37,
            arrowup: 38,
            arrowright: 39,
            arrowdown: 40,
            insert: 45,
            delete: 46,
            meta: 91,
            numlock: 144,
            scrolllock: 145,
            ";": 186,
            "=": 187,
            ",": 188,
            "-": 189,
            ".": 190,
            "/": 191,
            "`": 192,
            "[": 219,
            "\\": 220,
            "]": 221,
            "'": 222,
          },
          u = 1;
        u < 20;
        u++
      )
        a["f" + u] = 111 + u;
      function o(e) {
        return i[(e = e.toLowerCase())] || e;
      }
      t.isKeyHotkey = function (e, t) {
        var n, i, u, s, l;
        return (
          (n = e),
          (i = { byKey: !0 }),
          (u = t),
          !i || "byKey" in i || ((u = i), (i = null)),
          Array.isArray(n) || (n = [n]),
          (s = n.map(function (e) {
            return (function (e, t) {
              var n = t && t.byKey,
                i = {},
                u = (e = e.replace("++", "+add")).split("+"),
                s = u.length;
              for (var l in r) i[r[l]] = !1;
              var d = !0,
                c = !1,
                f = void 0;
              try {
                for (
                  var h, p = u[Symbol.iterator]();
                  !(d = (h = p.next()).done);
                  d = !0
                ) {
                  var m = h.value,
                    _ = m.endsWith("?") && m.length > 1;
                  _ && (m = m.slice(0, -1));
                  var v = o(m),
                    g = r[v];
                  (1 !== s && g) ||
                    (n
                      ? (i.key = v)
                      : (i.which = (function (e) {
                          return a[(e = o(e))] || e.toUpperCase().charCodeAt(0);
                        })(m))),
                    g && (i[g] = !_ || null);
                }
              } catch (e) {
                (c = !0), (f = e);
              } finally {
                try {
                  !d && p.return && p.return();
                } finally {
                  if (c) throw f;
                }
              }
              return i;
            })(e, i);
          })),
          (l = function (e) {
            return s.some(function (t) {
              return (function (e, t) {
                for (var n in e) {
                  var r = e[n],
                    i = void 0;
                  if (
                    null != r &&
                    (null !=
                      (i =
                        "key" === n && null != t.key
                          ? t.key.toLowerCase()
                          : "which" === n
                            ? 91 === r && 93 === t.which
                              ? 91
                              : t.which
                            : t[n]) ||
                      !1 !== r) &&
                    i !== r
                  )
                    return !1;
                }
                return !0;
              })(t, e);
            });
          }),
          null == u ? l : l(u)
        );
      };
    },
    108110(e) {
      e.exports = (function () {
        var e = {
            506: (e) => {
              (e.exports = function (e) {
                if (void 0 === e)
                  throw ReferenceError(
                    "this hasn't been initialised - super() hasn't been called",
                  );
                return e;
              }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
            },
            575: (e) => {
              (e.exports = function (e, t) {
                if (!(e instanceof t))
                  throw TypeError("Cannot call a class as a function");
              }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
            },
            913: (e) => {
              function t(e, t) {
                for (var n = 0; n < t.length; n++) {
                  var r = t[n];
                  (r.enumerable = r.enumerable || !1),
                    (r.configurable = !0),
                    "value" in r && (r.writable = !0),
                    Object.defineProperty(e, r.key, r);
                }
              }
              (e.exports = function (e, n, r) {
                return (
                  n && t(e.prototype, n),
                  r && t(e, r),
                  Object.defineProperty(e, "prototype", { writable: !1 }),
                  e
                );
              }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
            },
            525: (e, t, n) => {
              var r = n(331);
              function i() {
                return (
                  "u" > typeof Reflect && Reflect.get
                    ? (e.exports = i = Reflect.get)
                    : (e.exports = i =
                        function (e, t, n) {
                          var i = r(e, t);
                          if (i) {
                            var a = Object.getOwnPropertyDescriptor(i, t);
                            return a.get
                              ? a.get.call(arguments.length < 3 ? e : n)
                              : a.value;
                          }
                        }),
                  (e.exports.__esModule = !0),
                  (e.exports.default = e.exports),
                  i.apply(this, arguments)
                );
              }
              (e.exports = i),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
            },
            754: (e) => {
              function t(n) {
                return (
                  (e.exports = t =
                    Object.setPrototypeOf
                      ? Object.getPrototypeOf
                      : function (e) {
                          return e.__proto__ || Object.getPrototypeOf(e);
                        }),
                  (e.exports.__esModule = !0),
                  (e.exports.default = e.exports),
                  t(n)
                );
              }
              (e.exports = t),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
            },
            205: (e, t, n) => {
              var r = n(489);
              (e.exports = function (e, t) {
                if ("function" != typeof t && null !== t)
                  throw TypeError(
                    "Super expression must either be null or a function",
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  Object.defineProperty(e, "prototype", { writable: !1 }),
                  t && r(e, t);
              }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
            },
            318: (e) => {
              (e.exports = function (e) {
                return e && e.__esModule ? e : { default: e };
              }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
            },
            585: (e, t, n) => {
              var r = n(8).default,
                i = n(506);
              (e.exports = function (e, t) {
                if (t && ("object" === r(t) || "function" == typeof t))
                  return t;
                if (void 0 !== t)
                  throw TypeError(
                    "Derived constructors may only return object or undefined",
                  );
                return i(e);
              }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
            },
            489: (e) => {
              function t(n, r) {
                return (
                  (e.exports = t =
                    Object.setPrototypeOf ||
                    function (e, t) {
                      return (e.__proto__ = t), e;
                    }),
                  (e.exports.__esModule = !0),
                  (e.exports.default = e.exports),
                  t(n, r)
                );
              }
              (e.exports = t),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
            },
            331: (e, t, n) => {
              var r = n(754);
              (e.exports = function (e, t) {
                for (
                  ;
                  !Object.prototype.hasOwnProperty.call(e, t) &&
                  null !== (e = r(e));

                );
                return e;
              }),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
            },
            8: (e) => {
              function t(n) {
                return (
                  (e.exports = t =
                    "function" == typeof Symbol &&
                    "symbol" == typeof Symbol.iterator
                      ? function (e) {
                          return typeof e;
                        }
                      : function (e) {
                          return e &&
                            "function" == typeof Symbol &&
                            e.constructor === Symbol &&
                            e !== Symbol.prototype
                            ? "symbol"
                            : typeof e;
                        }),
                  (e.exports.__esModule = !0),
                  (e.exports.default = e.exports),
                  t(n)
                );
              }
              (e.exports = t),
                (e.exports.__esModule = !0),
                (e.exports.default = e.exports);
            },
            848: (e) => {
              window,
                (e.exports = (function (e) {
                  var t = {};
                  function n(r) {
                    if (t[r]) return t[r].exports;
                    var i = (t[r] = { i: r, l: !1, exports: {} });
                    return (
                      e[r].call(i.exports, i, i.exports, n),
                      (i.l = !0),
                      i.exports
                    );
                  }
                  return (
                    (n.m = e),
                    (n.c = t),
                    (n.d = function (e, t, r) {
                      n.o(e, t) ||
                        Object.defineProperty(e, t, { enumerable: !0, get: r });
                    }),
                    (n.r = function (e) {
                      "u" > typeof Symbol &&
                        Symbol.toStringTag &&
                        Object.defineProperty(e, Symbol.toStringTag, {
                          value: "Module",
                        }),
                        Object.defineProperty(e, "__esModule", { value: !0 });
                    }),
                    (n.t = function (e, t) {
                      if (
                        (1 & t && (e = n(e)),
                        8 & t ||
                          (4 & t && "object" == typeof e && e && e.__esModule))
                      )
                        return e;
                      var r = Object.create(null);
                      if (
                        (n.r(r),
                        Object.defineProperty(r, "default", {
                          enumerable: !0,
                          value: e,
                        }),
                        2 & t && "string" != typeof e)
                      )
                        for (var i in e)
                          n.d(
                            r,
                            i,
                            function (t) {
                              return e[t];
                            }.bind(null, i),
                          );
                      return r;
                    }),
                    (n.n = function (e) {
                      var t =
                        e && e.__esModule
                          ? function () {
                              return e.default;
                            }
                          : function () {
                              return e;
                            };
                      return n.d(t, "a", t), t;
                    }),
                    (n.o = function (e, t) {
                      return Object.prototype.hasOwnProperty.call(e, t);
                    }),
                    (n.p = ""),
                    n((n.s = 1))
                  );
                })([
                  function (e, t) {
                    function n(e, t) {
                      if (e < 1 || e !== Math.round(e))
                        throw "Invalid channel count for BufferQueue";
                      (this.channels = e), (this.bufferSize = t), this.flush();
                    }
                    (n.prototype.flush = function () {
                      (this._buffers = []),
                        (this._pendingBuffer = this.createBuffer(
                          this.bufferSize,
                        )),
                        (this._pendingPos = 0);
                    }),
                      (n.prototype.sampleCount = function () {
                        var e = 0;
                        return (
                          this._buffers.forEach(function (t) {
                            e += t[0].length;
                          }),
                          e
                        );
                      }),
                      (n.prototype.createBuffer = function (e) {
                        for (var t = [], n = 0; n < this.channels; n++)
                          t[n] = new Float32Array(e);
                        return t;
                      }),
                      (n.prototype.validate = function (e) {
                        if (e.length !== this.channels) return !1;
                        for (var t, n = 0; n < e.length; n++) {
                          var r = e[n];
                          if (!(r instanceof Float32Array)) return !1;
                          if (0 == n) t = r.length;
                          else if (r.length !== t) return !1;
                        }
                        return !0;
                      }),
                      (n.prototype.appendBuffer = function (e) {
                        if (!this.validate(e))
                          throw "Invalid audio buffer passed to BufferQueue.appendBuffer";
                        for (
                          var t = e[0].length,
                            n = this.channels,
                            r = this._pendingPos,
                            i = this._pendingBuffer,
                            a = this.bufferSize,
                            u = 0;
                          u < t;
                          u++
                        ) {
                          for (var o = 0; o < n; o++) i[o][r] = e[o][u];
                          ++r == a &&
                            (this._buffers.push(i),
                            (r = this._pendingPos = 0),
                            (i = this._pendingBuffer = this.createBuffer(a)));
                        }
                        this._pendingPos = r;
                      }),
                      (n.prototype.prependBuffer = function (e) {
                        if (!this.validate(e))
                          throw "Invalid audio buffer passed to BufferQueue.prependBuffer";
                        var t = this._buffers.slice(0);
                        t.push(
                          this.trimBuffer(
                            this._pendingBuffer,
                            0,
                            this._pendingPos,
                          ),
                        ),
                          this.flush(),
                          this.appendBuffer(e);
                        for (var n = 0; n < t.length; n++)
                          this.appendBuffer(t[n]);
                      }),
                      (n.prototype.nextBuffer = function () {
                        if (this._buffers.length) return this._buffers.shift();
                        var e = this.trimBuffer(
                          this._pendingBuffer,
                          0,
                          this._pendingPos,
                        );
                        return (
                          (this._pendingBuffer = this.createBuffer(
                            this.bufferSize,
                          )),
                          (this._pendingPos = 0),
                          e
                        );
                      }),
                      (n.prototype.trimBuffer = function (e, t, n) {
                        var r = e[0].length,
                          i = t + Math.min(n, r);
                        if (0 == t && i >= r) return e;
                        for (var a = [], u = 0; u < this.channels; u++)
                          a[u] = e[u].subarray(t, i);
                        return a;
                      }),
                      (e.exports = n);
                  },
                  function (e, t, n) {
                    n(0);
                    var r = n(2),
                      i = n(4);
                    function a(e) {
                      (this._options = e || {}),
                        (this._backend = null),
                        (this._resampleFractional = 0),
                        (this._resampleLastSampleData = void 0),
                        (this._tempoChanger = null);
                    }
                    (a.prototype.rate = 0),
                      (a.prototype.targetRate = 0),
                      (a.prototype.channels = 0),
                      (a.prototype.bufferSize = 0),
                      Object.defineProperty(a.prototype, "bufferDuration", {
                        get: function () {
                          return this.targetRate
                            ? this.bufferSize / this.targetRate
                            : 0;
                        },
                      }),
                      Object.defineProperty(a.prototype, "bufferThreshold", {
                        get: function () {
                          return this._backend
                            ? this._backend.bufferThreshold / this.targetRate
                            : 0;
                        },
                        set: function (e) {
                          if (!this._backend)
                            throw "Invalid state: AudioFeeder cannot set bufferThreshold before init";
                          this._backend.bufferThreshold = Math.round(
                            e * this.targetRate,
                          );
                        },
                      }),
                      Object.defineProperty(a.prototype, "playbackPosition", {
                        get: function () {
                          return this._backend
                            ? this.getPlaybackState().playbackPosition
                            : 0;
                        },
                      }),
                      Object.defineProperty(
                        a.prototype,
                        "outputPlaybackPosition",
                        {
                          get: function () {
                            return this._backend
                              ? this.getPlaybackState().outputPlaybackPosition
                              : 0;
                          },
                        },
                      ),
                      Object.defineProperty(a.prototype, "durationBuffered", {
                        get: function () {
                          return this._backend
                            ? this.getPlaybackState().samplesQueued /
                                this.targetRate
                            : 0;
                        },
                      }),
                      Object.defineProperty(a.prototype, "muted", {
                        get: function () {
                          if (this._backend) return this._backend.muted;
                          throw "Invalid state: cannot get mute before init";
                        },
                        set: function (e) {
                          if (!this._backend)
                            throw "Invalid state: cannot set mute before init";
                          this._backend.muted = e;
                        },
                      }),
                      (a.prototype.mute = function () {
                        this.muted = !0;
                      }),
                      (a.prototype.unmute = function () {
                        this.muted = !1;
                      }),
                      Object.defineProperty(a.prototype, "volume", {
                        get: function () {
                          if (this._backend) return this._backend.volume;
                          throw "Invalid state: cannot get volume before init";
                        },
                        set: function (e) {
                          if (!this._backend)
                            throw "Invalid state: cannot set volume before init";
                          this._backend.volume = e;
                        },
                      }),
                      Object.defineProperty(a.prototype, "tempo", {
                        get: function () {
                          if (this._tempoChanger)
                            return this._tempoChanger.getTempo();
                          throw "Invalid state: cannot get tempo before init";
                        },
                        set: function (e) {
                          if (!this._tempoChanger)
                            throw "Invalid state: cannot set tempo before init";
                          this._tempoChanger.setTempo(e);
                        },
                      }),
                      (a.prototype.init = function (e, t) {
                        if (
                          ((this.channels = e),
                          (this.rate = t),
                          this._options.backendFactory)
                        )
                          this._backend = this._options.backendFactory(
                            e,
                            t,
                            this._options,
                          );
                        else {
                          if (!r.isSupported()) throw "No supported backend";
                          this._backend = new r(e, t, this._options);
                        }
                        (this.targetRate = this._backend.rate),
                          (this.bufferSize = this._backend.bufferSize),
                          (this._tempoChanger = i({
                            sampleRate: this.targetRate,
                            numChannels: e,
                            tempo: 1,
                          })),
                          (this._backend.onstarved = function () {
                            this.onstarved && this.onstarved();
                          }.bind(this)),
                          (this._backend.onbufferlow = function () {
                            this.onbufferlow && this.onbufferlow();
                          }.bind(this));
                      }),
                      (a.prototype._resample = function (e) {
                        var t = this.rate,
                          n = this.channels,
                          r = this._backend.rate,
                          i = this._backend.channels;
                        if (t == r && n == i) return e;
                        var a,
                          u = [],
                          o = e[0].length,
                          s = this._resampleFractional,
                          l = (o * r) / t + s,
                          d = Math.floor(l),
                          c = l - d;
                        a =
                          t < r
                            ? function (e, n, i, a) {
                                for (
                                  var u = function (t) {
                                      return t < 0
                                        ? i && i.length + t > 0
                                          ? i[i.length + t]
                                          : e[0]
                                        : e[t];
                                    },
                                    o = 0;
                                  o < n.length;
                                  o++
                                ) {
                                  var l,
                                    d = ((o + 1 - s) * t) / r - 1,
                                    c = Math.floor(d),
                                    f = Math.ceil(d);
                                  (l =
                                    c == f
                                      ? u(c)
                                      : u(c) * (f - d) + u(f) * (d - c)),
                                    (n[o] = a * l);
                                }
                              }
                            : function (e, t, n, r) {
                                for (var i = 0; i < t.length; i++)
                                  t[i] = r * e[((i * e.length) / t.length) | 0];
                              };
                        var f = 1;
                        i > n && (f = Math.SQRT1_2);
                        for (var h = 0; h < i; h++) {
                          var p = h;
                          h >= n && (p = 0);
                          var m = e[p],
                            _ = new Float32Array(d);
                          a(
                            m,
                            _,
                            this._resampleLastSampleData
                              ? this._resampleLastSampleData[p]
                              : void 0,
                            f,
                          ),
                            u.push(_);
                        }
                        return (
                          (this._resampleFractional = c),
                          (this._resampleLastSampleData = e),
                          u
                        );
                      }),
                      (a.prototype.bufferData = function (e) {
                        if (!this._backend)
                          throw "Invalid state: AudioFeeder cannot bufferData before init";
                        var t = this._resample(e);
                        (t = this._tempoChanger.process(t)),
                          this._backend.appendBuffer(t);
                      }),
                      (a.prototype.getPlaybackState = function () {
                        if (this._backend) {
                          var e = this._backend.getPlaybackState();
                          return (
                            (e.outputPlaybackPosition = e.playbackPosition),
                            (e.playbackPosition =
                              this._tempoChanger.mapOutputToInputTime(
                                e.outputPlaybackPosition,
                              )),
                            e
                          );
                        }
                        throw "Invalid state: AudioFeeder cannot getPlaybackState before init";
                      }),
                      (a.prototype.waitUntilReady = function (e) {
                        if (!this._backend)
                          throw "Invalid state: AudioFeeder cannot waitUntilReady before init";
                        this._backend.waitUntilReady(e);
                      }),
                      (a.prototype.start = function () {
                        if (!this._backend)
                          throw "Invalid state: AudioFeeder cannot start before init";
                        this._backend.start();
                      }),
                      (a.prototype.stop = function () {
                        if (!this._backend)
                          throw "Invalid state: AudioFeeder cannot stop before init";
                        this._backend.stop();
                      }),
                      (a.prototype.flush = function () {
                        if (
                          ((this._resampleFractional = 0),
                          (this._resampleLastSampleData = void 0),
                          !this._backend)
                        )
                          throw "Invalid state: AudioFeeder cannot flush before init";
                        this._tempoChanger.flush(this.durationBuffered),
                          this._backend.flush();
                      }),
                      (a.prototype.close = function () {
                        this._backend &&
                          (this._backend.close(), (this._backend = null));
                      }),
                      (a.prototype.onstarved = null),
                      (a.prototype.onbufferlow = null),
                      (a.isSupported = function () {
                        return !!Float32Array && r.isSupported();
                      }),
                      (a.initSharedAudioContext = function () {
                        return r.isSupported()
                          ? r.initSharedAudioContext()
                          : null;
                      }),
                      (e.exports = a);
                  },
                  function (e, t, n) {
                    var r = window.AudioContext || window.webkitAudioContext,
                      i = n(0),
                      a = n(3);
                    function u(e, t, n) {
                      var r = n.audioContext || u.initSharedAudioContext();
                      if (
                        ((this._context = r),
                        (this.output = n.output || r.destination),
                        (this.rate = r.sampleRate),
                        (this.channels = 2),
                        n.bufferSize && (this.bufferSize = 0 | n.bufferSize),
                        (this.bufferThreshold = 2 * this.bufferSize),
                        (this._bufferQueue = new i(
                          this.channels,
                          this.bufferSize,
                        )),
                        (this._playbackTimeAtBufferTail = r.currentTime),
                        (this._queuedTime = 0),
                        (this._delayedTime = 0),
                        (this._dropped = 0),
                        (this._liveBuffer = this._bufferQueue.createBuffer(
                          this.bufferSize,
                        )),
                        r.createScriptProcessor)
                      )
                        this._node = r.createScriptProcessor(
                          this.bufferSize,
                          0,
                          this.channels,
                        );
                      else {
                        if (!r.createJavaScriptNode)
                          throw Error("Bad version of web audio API?");
                        this._node = r.createJavaScriptNode(
                          this.bufferSize,
                          0,
                          this.channels,
                        );
                      }
                    }
                    (u.prototype.bufferSize = 4096),
                      (u.prototype.bufferThreshold = 8192),
                      (u.prototype._volume = 1),
                      Object.defineProperty(u.prototype, "volume", {
                        get: function () {
                          return this._volume;
                        },
                        set: function (e) {
                          this._volume = +e;
                        },
                      }),
                      (u.prototype._muted = !1),
                      Object.defineProperty(u.prototype, "muted", {
                        get: function () {
                          return this._muted;
                        },
                        set: function (e) {
                          this._muted = !!e;
                        },
                      }),
                      (u.prototype._audioProcess = function (e) {
                        var t,
                          n,
                          r,
                          i,
                          u =
                            "number" == typeof e.playbackTime
                              ? e.playbackTime
                              : this._context.currentTime +
                                this.bufferSize / this.rate,
                          o = this._playbackTimeAtBufferTail;
                        if (
                          (o < u && (this._delayedTime += u - o),
                          this._bufferQueue.sampleCount() < this.bufferSize &&
                            this.onstarved &&
                            this.onstarved(),
                          this._bufferQueue.sampleCount() < this.bufferSize)
                        ) {
                          for (t = 0; t < this.channels; t++)
                            for (
                              r = e.outputBuffer.getChannelData(t), i = 0;
                              i < this.bufferSize;
                              i++
                            )
                              r[i] = 0;
                          this._dropped++;
                        } else {
                          var s = this.muted ? 0 : this.volume,
                            l = this._bufferQueue.nextBuffer();
                          if (l[0].length < this.bufferSize)
                            throw "Audio buffer not expected length.";
                          for (t = 0; t < this.channels; t++)
                            for (
                              n = l[t],
                                this._liveBuffer[t].set(l[t]),
                                r = e.outputBuffer.getChannelData(t),
                                i = 0;
                              i < n.length;
                              i++
                            )
                              r[i] = n[i] * s;
                          (this._queuedTime += this.bufferSize / this.rate),
                            (this._playbackTimeAtBufferTail =
                              u + this.bufferSize / this.rate),
                            this._bufferQueue.sampleCount() <
                              Math.max(this.bufferSize, this.bufferThreshold) &&
                              this.onbufferlow &&
                              a(this.onbufferlow.bind(this));
                        }
                      }),
                      (u.prototype._samplesQueued = function () {
                        return (
                          this._bufferQueue.sampleCount() +
                          Math.floor(this._timeAwaitingPlayback() * this.rate)
                        );
                      }),
                      (u.prototype._timeAwaitingPlayback = function () {
                        return Math.max(
                          0,
                          this._playbackTimeAtBufferTail -
                            this._context.currentTime,
                        );
                      }),
                      (u.prototype.getPlaybackState = function () {
                        return {
                          playbackPosition:
                            this._queuedTime - this._timeAwaitingPlayback(),
                          samplesQueued: this._samplesQueued(),
                          dropped: this._dropped,
                          delayed: this._delayedTime,
                        };
                      }),
                      (u.prototype.waitUntilReady = function (e) {
                        e();
                      }),
                      (u.prototype.appendBuffer = function (e) {
                        this._bufferQueue.appendBuffer(e);
                      }),
                      (u.prototype.start = function () {
                        (this._node.onaudioprocess =
                          this._audioProcess.bind(this)),
                          this._node.connect(this.output),
                          (this._playbackTimeAtBufferTail =
                            this._context.currentTime);
                      }),
                      (u.prototype.stop = function () {
                        if (this._node) {
                          var e = this._timeAwaitingPlayback();
                          if (e > 0) {
                            var t = Math.round(e * this.rate),
                              n = this._liveBuffer
                                ? this._liveBuffer[0].length
                                : 0;
                            t > n
                              ? (this._bufferQueue.prependBuffer(
                                  this._liveBuffer,
                                ),
                                this._bufferQueue.prependBuffer(
                                  this._bufferQueue.createBuffer(t - n),
                                ))
                              : this._bufferQueue.prependBuffer(
                                  this._bufferQueue.trimBuffer(
                                    this._liveBuffer,
                                    n - t,
                                    t,
                                  ),
                                ),
                              (this._playbackTimeAtBufferTail -= e);
                          }
                          (this._node.onaudioprocess = null),
                            this._node.disconnect();
                        }
                      }),
                      (u.prototype.flush = function () {
                        this._bufferQueue.flush();
                      }),
                      (u.prototype.close = function () {
                        this.stop(), (this._context = null);
                      }),
                      (u.prototype.onstarved = null),
                      (u.prototype.onbufferlow = null),
                      (u.isSupported = function () {
                        return !!r;
                      }),
                      (u.sharedAudioContext = null),
                      (u.initSharedAudioContext = function () {
                        if (!u.sharedAudioContext && u.isSupported()) {
                          var e,
                            t = new r();
                          if (t.createScriptProcessor)
                            e = t.createScriptProcessor(1024, 0, 2);
                          else {
                            if (!t.createJavaScriptNode)
                              throw Error("Bad version of web audio API?");
                            e = t.createJavaScriptNode(1024, 0, 2);
                          }
                          e.connect(t.destination),
                            e.disconnect(),
                            (u.sharedAudioContext = t);
                        }
                        return u.sharedAudioContext;
                      }),
                      (e.exports = u);
                  },
                  function (e, t) {
                    e.exports = (function () {
                      if (void 0 !== window.setImmediate)
                        return window.setImmediate;
                      if (window && window.postMessage) {
                        var e = [];
                        return (
                          window.addEventListener("message", function (t) {
                            if (t.source === window) {
                              var n = t.data;
                              if (
                                "object" == typeof n &&
                                n.nextTickBrowserPingMessage
                              ) {
                                var r = e.pop();
                                r && r();
                              }
                            }
                          }),
                          function (t) {
                            e.push(t),
                              window.postMessage(
                                { nextTickBrowserPingMessage: !0 },
                                document.location.toString(),
                              );
                          }
                        );
                      }
                      return function (e) {
                        setTimeout(e, 0);
                      };
                    })();
                  },
                  function (e, t, n) {
                    window,
                      (e.exports = (function () {
                        var e = [
                            function (e, t) {
                              e.exports = {
                                float_array: function (e) {
                                  return new Float32Array(e);
                                },
                                blit: function (e, t, n, r, i) {
                                  n.set(e.subarray(t, t + i), r);
                                },
                              };
                            },
                            function (e, t, n) {
                              var r, i;
                              (r = n(0)),
                                (i = n(2)),
                                (e.exports = function (e) {
                                  var t = (e = e || {}).sampleRate || 44100,
                                    n = e.wsizeLog || 11,
                                    a = e.tempo || 1,
                                    u =
                                      (e.numChannels,
                                      Math.pow(2, 50 / 1200) - 1),
                                    o = 1 << n,
                                    s = i(n),
                                    l = 1 << (n - 2);
                                  l -= l % 100;
                                  for (
                                    var d = r.float_array(o + l + 5),
                                      c = r.float_array(o + l + 5),
                                      f = l,
                                      h = l,
                                      p = r.float_array(o),
                                      m = 0;
                                    m < o;
                                    m++
                                  )
                                    p[m] =
                                      0.5 *
                                      (1 - Math.cos((2 * Math.PI * m) / o));
                                  var _ = 1 + (o >> 1),
                                    v = r.float_array(_),
                                    g = r.float_array(_),
                                    y = r.float_array(_),
                                    D = r.float_array(_),
                                    b = r.float_array(_),
                                    C = r.float_array(_),
                                    E = 1 + (_ >> 1),
                                    w = [0, 0],
                                    A = [],
                                    B = [],
                                    F = [],
                                    V = [];
                                  for (m = 0; m < 2; m++)
                                    A.push(r.float_array(E)),
                                      B.push(r.float_array(E)),
                                      F.push(r.float_array(E)),
                                      V.push(r.float_array(_));
                                  var T = r.float_array(E),
                                    k = r.float_array(E),
                                    x = 0,
                                    P = 0,
                                    O = [{ in_time: 0, out_time: 0, tempo: a }],
                                    S = 0,
                                    R = 0,
                                    M = 1,
                                    N = 0,
                                    L = 0,
                                    I = 0,
                                    j = 0,
                                    G = {
                                      mapOutputToInputTime: function (e) {
                                        for (
                                          var t = O.length - 1;
                                          e < O[t].out_time && t > 0;

                                        )
                                          t--;
                                        var n = O[t];
                                        return (
                                          n.in_time + n.tempo * (e - n.out_time)
                                        );
                                      },
                                      flush: function (e) {
                                        (N = 0),
                                          (w = [0, 0]),
                                          (R = 0),
                                          (j = 0),
                                          (I = 0);
                                        for (var t = 0; t < 2; t++)
                                          for (var n = 0; n < _; n++)
                                            V[t][n] = 0;
                                        for (t = 0; t < d.length; t++) d[t] = 0;
                                        for (t = 0; t < c.length; t++) c[t] = 0;
                                        if (e) {
                                          (P = Math.max(0, P - e)),
                                            (x = G.mapOutputToInputTime(P));
                                          for (
                                            var r = O.length - 1;
                                            P <= O[r].out_time && r >= 0;

                                          )
                                            O.pop(), r--;
                                          O.push({
                                            in_time: x,
                                            out_time: P,
                                            tempo: a,
                                          });
                                        }
                                      },
                                      getTempo: function () {
                                        return a;
                                      },
                                      setTempo: function (e) {
                                        (f = h = l),
                                          e >= 1
                                            ? (h = Math.round(f / e))
                                            : (f = Math.round(h * e)),
                                          (L = (1 / e - h / f) * f),
                                          (M = (function (e, t) {
                                            for (
                                              var n = (e.length / t) | 0,
                                                r = 0,
                                                i = 0;
                                              i < n;
                                              i++
                                            )
                                              r += e[i * t];
                                            return 0.9 / r;
                                          })(p, h)),
                                          (a = e);
                                        var t = O[O.length - 1];
                                        t.out_time == P
                                          ? (t.tempo = e)
                                          : O.push({
                                              in_time: x,
                                              out_time: P,
                                              tempo: e,
                                            });
                                      },
                                    };
                                  G.flush(0), G.setTempo(a);
                                  var W = function (e, t, n) {
                                      var r = Math.floor(n),
                                        i = r % 2 == 1 ? -1 : 1;
                                      return Math.atan2(
                                        i * (t[r] - t[r + 1]),
                                        i * (e[r] - e[r + 1]),
                                      );
                                    },
                                    K = function (e, t, n, r, i) {
                                      var a,
                                        u =
                                          ((2 * Math.PI) / o) *
                                          0.5 *
                                          (r + t) *
                                          f;
                                      return (
                                        ((a = e - n - u) -
                                          2 *
                                            Math.PI *
                                            Math.round(a / (2 * Math.PI)) +
                                          u) *
                                        i
                                      );
                                    },
                                    U = function (e, t, n, r, i, a) {
                                      for (
                                        var s = e % 2,
                                          l = 1 - s,
                                          d = V[l],
                                          c = w[l],
                                          f = A[l],
                                          h = B[l],
                                          p = F[l],
                                          m = V[s],
                                          _ = 1;
                                        _ < m.length;
                                        _++
                                      )
                                        m[_] = t[_] * t[_] + n[_] * n[_];
                                      var v = A[s],
                                        g = (w[s] = (function (e, t) {
                                          for (
                                            var n = 0, r = 0;
                                            r < e.length;
                                            r++
                                          )
                                            e[r] > n && (n = e[r]);
                                          var i = 1e-8 * n,
                                            a = 1,
                                            o = 1;
                                          for (
                                            t[0] = 1, r = 2;
                                            r < e.length;
                                            r++
                                          ) {
                                            var s = r * u;
                                            if (
                                              e[r] > i &&
                                              e[r] > e[r - 1] &&
                                              e[r] >= e[r + 1]
                                            ) {
                                              var l =
                                                r +
                                                (e[r - 1] - e[r + 1]) /
                                                  (2 *
                                                    (e[r - 1] -
                                                      2 * e[r] +
                                                      e[r + 1]));
                                              l - t[a - 1] > s
                                                ? ((t[a++] = l), (o = r))
                                                : e[r] > e[o] &&
                                                  ((t[a - 1] = l), (o = r));
                                            }
                                          }
                                          return a;
                                        })(m, v)),
                                        y = B[s],
                                        D = F[s];
                                      if (0 != e && 0 != g) {
                                        var b = 0;
                                        for (I = 0; I < g; I++) {
                                          for (
                                            j = v[I];
                                            v[I] > f[b] && b != c;

                                          )
                                            ++b;
                                          var C = b;
                                          b > 0 &&
                                            j - f[b - 1] < f[b] - j &&
                                            (C = b - 1);
                                          var E = j * u;
                                          if (
                                            Math.abs(f[C] - j) < E &&
                                            d[Math.round(f[C])] >
                                              0.1 * m[Math.round(j)]
                                          ) {
                                            var x = W(t, n, j),
                                              P =
                                                h[C] +
                                                p[C] +
                                                K(x, j, h[C], f[C], a) -
                                                x;
                                            (y[I] = x),
                                              (D[I] = P),
                                              (T[I] = Math.cos(P)),
                                              (k[I] = Math.sin(P));
                                          } else
                                            (y[I] = W(t, n, j)),
                                              (D[I] = 0),
                                              (T[I] = 1),
                                              (k[I] = 0);
                                        }
                                        v[g] = 2 * o;
                                        var O = v[(C = 0)],
                                          S = v[C + 1],
                                          R = T[C],
                                          M = k[C];
                                        for (_ = 1; _ < t.length - 1; _++) {
                                          _ >= O &&
                                            _ - O > S - _ &&
                                            ((O = v[++C]),
                                            (S = v[C + 1]),
                                            (R = T[C]),
                                            (M = k[C]));
                                          var N = t[_] * R - n[_] * M,
                                            L = t[_] * M + n[_] * R;
                                          (t[_] = N), (n[_] = L);
                                        }
                                      } else
                                        for (var I = 0; I < g; I++) {
                                          var j = v[I];
                                          h[I] = p[I] = W(t, n, j);
                                        }
                                    },
                                    H = function () {
                                      var e = 0 | (N += 2 * L);
                                      N -= e;
                                      for (var t = 0; t < o; t++)
                                        (s.m_re[t] = p[t] * d[t]),
                                          (s.m_im[t] = p[t] * d[f + t]);
                                      r.blit(d, 2 * f, d, 0, o - f),
                                        s.inplace(!1),
                                        s.unpack(v, g, y, D),
                                        U(S, v, g, 0, 0, h / f),
                                        U(S + 1, y, D, 0, 0, (h + e) / f),
                                        r.blit(y, 0, b, 0, _),
                                        r.blit(D, 0, C, 0, _),
                                        s.repack(v, g, y, D),
                                        s.inplace(!0);
                                      var n = c.length;
                                      for (
                                        r.blit(c, R, c, 0, n - R), t = n - R;
                                        t < n;
                                        t++
                                      )
                                        c[t] = 0;
                                      var i = 0,
                                        a = M;
                                      for (t = 0; t < h; t++)
                                        Math.abs(2 * s.m_re[t]) > i &&
                                          (i = Math.abs(2 * s.m_re[t]));
                                      for (t = 0; t < o - h; t++)
                                        Math.abs(
                                          s.m_re[t + h + e] + s.m_im[t],
                                        ) > i &&
                                          (i = Math.abs(
                                            s.m_re[t + h + e] + s.m_im[t],
                                          ));
                                      for (t = o - h; t < o; t++)
                                        Math.abs(2 * s.m_im[t]) > i &&
                                          (i = Math.abs(2 * s.m_im[t]));
                                      var u = 1 / Math.floor(o / (2 * h));
                                      for (
                                        a * i > u && (a = u / i), t = 0;
                                        t < o;
                                        t++
                                      )
                                        (c[t] += a * s.m_re[t]),
                                          (c[t + h + e] += a * s.m_im[t]);
                                      return (S += 2), (R = 2 * h + e);
                                    };
                                  return (
                                    (G.process = function (e) {
                                      var n = e[0].length,
                                        i = e[0];
                                      if (e.length > 1) {
                                        i = r.float_array(e[0].length);
                                        for (
                                          var u = 1 / e.length, s = 0;
                                          s < e.length;
                                          s++
                                        )
                                          for (var l = 0; l < n; l++)
                                            i[l] += u * e[s][l];
                                      }
                                      if (1 == a) {
                                        if (j + I > 0) {
                                          var p = j + I + n,
                                            m = [];
                                          for (s = 0; s < e.length; s++) {
                                            var _ = r.float_array(p);
                                            r.blit(c, 0, _, 0, j),
                                              r.blit(d, 0, _, j, I),
                                              r.blit(e[s], 0, _, j + I, n),
                                              m.push(_);
                                          }
                                          G.flush(0), (n = p), (e = m);
                                        }
                                        return (x += n / t), (P += n / t), e;
                                      }
                                      var v =
                                          2 *
                                          Math.floor(
                                            Math.max(0, I + n - (o - f)) /
                                              (2 * f),
                                          ),
                                        g = j + h * v + Math.floor(N + L * v);
                                      j > g && (g = j);
                                      var y = r.float_array(g);
                                      r.blit(c, 0, y, 0, j);
                                      for (var D = 0, b = j, C = 0, E = 0; ; ) {
                                        var w = o + f - I;
                                        if (D + w > n) {
                                          r.blit(i, D, d, I, n - D),
                                            (I += n - D),
                                            (D = n);
                                          break;
                                        }
                                        w <= 0
                                          ? (I -= 2 * f)
                                          : (r.blit(i, D, d, I, w),
                                            (D += w),
                                            (I = o - f)),
                                          (E = H()),
                                          (x += (2 * f) / t),
                                          (P += E / t),
                                          (C = b + E - g) < 0 && (C = 0),
                                          r.blit(c, 0, y, b, E - C),
                                          (b += E);
                                      }
                                      r.blit(c, E - C, c, 0, C), (j = C);
                                      var A = [];
                                      for (s = 0; s < e.length; s++) A.push(y);
                                      return A;
                                    }),
                                    G
                                  );
                                });
                            },
                            function (e, t, n) {
                              "use strict";
                              var r = n(0);
                              e.exports = function (e) {
                                for (
                                  var t = 1 << e,
                                    n = {
                                      m_logN: e,
                                      m_N: t,
                                      m_invN: 1 / t,
                                      m_re: r.float_array(t),
                                      m_im: r.float_array(t),
                                      m_revTgt: Array(t),
                                    },
                                    i = 0;
                                  i < t;
                                  i++
                                ) {
                                  for (var a = i, u = 0, o = 0; o < e; o++)
                                    (u <<= 1), (u |= 1 & a), (a >>= 1);
                                  n.m_revTgt[i] = u;
                                }
                                (n.twiddleRe = r.float_array(n.m_logN)),
                                  (n.twiddleIm = r.float_array(n.m_logN));
                                for (var s = 1, l = 0; l < n.m_logN; l++) {
                                  var d = 2 * s * Math.PI * n.m_invN;
                                  (n.twiddleRe[l] = Math.cos(d)),
                                    (n.twiddleIm[l] = Math.sin(d)),
                                    (s <<= 1);
                                }
                                n.inplace = function (e) {
                                  var t = n.m_re,
                                    r = n.m_im,
                                    i = n.m_N,
                                    a = n.m_logN,
                                    u = i >> 1,
                                    o = i >> 1,
                                    s = i;
                                  if (e)
                                    for (var l = 1 / i, d = 0; d < i; d++)
                                      (t[d] *= l), (r[d] *= l);
                                  for (var c = 0; c < a; c++) {
                                    var f = n.twiddleRe[c],
                                      h = n.twiddleIm[c];
                                    e || (h *= -1);
                                    for (var p = 0; p < i; ) {
                                      for (
                                        var m = p,
                                          _ = p + o,
                                          v = 1,
                                          g = 0,
                                          y = 0;
                                        y < u;
                                        y++
                                      ) {
                                        var D = t[m],
                                          b = r[m],
                                          C = t[_],
                                          E = r[_];
                                        (t[m] = D + C),
                                          (r[m] = b + E),
                                          (C = D - C),
                                          (E = b - E),
                                          (t[_] = C * v - E * g),
                                          (r[_] = C * g + E * v),
                                          m++,
                                          _++;
                                        var w = v;
                                        (v = v * f - g * h),
                                          (g = w * h + g * f);
                                      }
                                      p += s;
                                    }
                                    (u >>= 1), (o >>= 1), (s >>= 1);
                                  }
                                  for (
                                    var A, B, F = n.m_revTgt, V = 0;
                                    V < i;
                                    V++
                                  )
                                    F[V] > V &&
                                      ((B = t[(A = F[V])]),
                                      (t[A] = t[V]),
                                      (t[V] = B),
                                      (B = r[A]),
                                      (r[A] = r[V]),
                                      (r[V] = B));
                                };
                                var c = t >> 1;
                                return (
                                  (n.unpack = function (e, r, i, a) {
                                    (e[0] = n.m_re[0]),
                                      (i[0] = n.m_im[0]),
                                      (r[0] = a[0] = 0),
                                      (e[c] = n.m_re[c]),
                                      (i[c] = n.m_im[c]),
                                      (r[c] = a[c] = 0);
                                    for (var u = 1; u < c; u++)
                                      (e[u] = (n.m_re[u] + n.m_re[t - u]) / 2),
                                        (r[u] =
                                          (n.m_im[u] - n.m_im[t - u]) / 2),
                                        (i[u] =
                                          (n.m_im[u] + n.m_im[t - u]) / 2),
                                        (a[u] =
                                          (-n.m_re[u] + n.m_re[t - u]) / 2);
                                  }),
                                  (n.repack = function (e, r, i, a) {
                                    (n.m_re[0] = e[0]),
                                      (n.m_im[0] = i[0]),
                                      (n.m_re[c] = e[c]),
                                      (n.m_im[c] = i[c]);
                                    for (var u = 1; u < c; u++)
                                      (n.m_re[u] = e[u] - a[u]),
                                        (n.m_im[u] = r[u] + i[u]),
                                        (n.m_re[t - u] = e[u] + a[u]),
                                        (n.m_im[t - u] = -r[u] + i[u]);
                                  }),
                                  n
                                );
                              };
                            },
                          ],
                          t = {};
                        function n(r) {
                          if (t[r]) return t[r].exports;
                          var i = (t[r] = { i: r, l: !1, exports: {} });
                          return (
                            e[r].call(i.exports, i, i.exports, n),
                            (i.l = !0),
                            i.exports
                          );
                        }
                        return (
                          (n.m = e),
                          (n.c = t),
                          (n.d = function (e, t, r) {
                            n.o(e, t) ||
                              Object.defineProperty(e, t, {
                                enumerable: !0,
                                get: r,
                              });
                          }),
                          (n.r = function (e) {
                            "u" > typeof Symbol &&
                              Symbol.toStringTag &&
                              Object.defineProperty(e, Symbol.toStringTag, {
                                value: "Module",
                              }),
                              Object.defineProperty(e, "__esModule", {
                                value: !0,
                              });
                          }),
                          (n.t = function (e, t) {
                            if (
                              (1 & t && (e = n(e)),
                              8 & t ||
                                (4 & t &&
                                  "object" == typeof e &&
                                  e &&
                                  e.__esModule))
                            )
                              return e;
                            var r = Object.create(null);
                            if (
                              (n.r(r),
                              Object.defineProperty(r, "default", {
                                enumerable: !0,
                                value: e,
                              }),
                              2 & t && "string" != typeof e)
                            )
                              for (var i in e)
                                n.d(
                                  r,
                                  i,
                                  function (t) {
                                    return e[t];
                                  }.bind(null, i),
                                );
                            return r;
                          }),
                          (n.n = function (e) {
                            var t =
                              e && e.__esModule
                                ? function () {
                                    return e.default;
                                  }
                                : function () {
                                    return e;
                                  };
                            return n.d(t, "a", t), t;
                          }),
                          (n.o = function (e, t) {
                            return Object.prototype.hasOwnProperty.call(e, t);
                          }),
                          (n.p = ""),
                          n((n.s = 1))
                        );
                      })());
                  },
                ]));
            },
            893: (e, t, n) => {
              "use strict";
              var r = n(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var i = r(n(575)),
                a = r(n(913));
              t.default = (function () {
                function e(t) {
                  (0, i.default)(this, e),
                    (this.lower = t.start),
                    (this.upper = t.end),
                    (this.onprocess = t.process),
                    (this.position = 0),
                    (this.n = 0);
                }
                return (
                  (0, a.default)(e, [
                    {
                      key: "iterate",
                      value: function () {
                        return (
                          this.n++,
                          (this.position = Math.floor(
                            (this.lower + this.upper) / 2,
                          )),
                          this.onprocess(this.lower, this.upper, this.position)
                        );
                      },
                    },
                    {
                      key: "start",
                      value: function () {
                        return this.iterate(), this;
                      },
                    },
                    {
                      key: "left",
                      value: function () {
                        return (this.upper = this.position), this.iterate();
                      },
                    },
                    {
                      key: "right",
                      value: function () {
                        return (this.lower = this.position), this.iterate();
                      },
                    },
                  ]),
                  e
                );
              })();
            },
            523: (e, t, n) => {
              "use strict";
              var r = n(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var i = r(n(575)),
                a = r(n(913));
              t.default = new ((function () {
                function e() {
                  (0, i.default)(this, e);
                }
                return (
                  (0, a.default)(e, [
                    {
                      key: "hasTypedArrays",
                      value: function () {
                        return !!window.Uint32Array;
                      },
                    },
                    {
                      key: "hasWebAssembly",
                      value: function () {
                        return !!window.WebAssembly;
                      },
                    },
                    {
                      key: "hasWebAudio",
                      value: function () {
                        return !(
                          !window.AudioContext && !window.webkitAudioContext
                        );
                      },
                    },
                    {
                      key: "hasFlash",
                      value: function () {
                        return !1;
                      },
                    },
                    {
                      key: "hasAudio",
                      value: function () {
                        return this.hasWebAudio();
                      },
                    },
                    {
                      key: "isBlacklisted",
                      value: function (e) {
                        return !1;
                      },
                    },
                    {
                      key: "isSlow",
                      value: function () {
                        return !1;
                      },
                    },
                    {
                      key: "isTooSlow",
                      value: function () {
                        return !1;
                      },
                    },
                    {
                      key: "supported",
                      value: function (e) {
                        return "OGVDecoder" === e
                          ? this.hasWebAssembly()
                          : "OGVPlayer" === e &&
                              this.supported("OGVDecoder") &&
                              this.hasAudio();
                      },
                    },
                  ]),
                  e
                );
              })())();
            },
            408: (e, t, n) => {
              "use strict";
              var r = n(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var i = r(n(575)),
                a = r(n(913)),
                u = r(n(205)),
                o = r(n(585)),
                s = r(n(754));
              t.default = (function (e) {
                (0, u.default)(r, e);
                var t,
                  n =
                    ((t = (function () {
                      if (
                        "u" < typeof Reflect ||
                        !Reflect.construct ||
                        Reflect.construct.sham
                      )
                        return !1;
                      if ("function" == typeof Proxy) return !0;
                      try {
                        return (
                          Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function () {}),
                          ),
                          !0
                        );
                      } catch (e) {
                        return !1;
                      }
                    })()),
                    function () {
                      var e,
                        n = (0, s.default)(r);
                      return (
                        (e = t
                          ? Reflect.construct(
                              n,
                              arguments,
                              (0, s.default)(this).constructor,
                            )
                          : n.apply(this, arguments)),
                        (0, o.default)(this, e)
                      );
                    });
                function r() {
                  return (0, i.default)(this, r), n.apply(this, arguments);
                }
                return (
                  (0, a.default)(r, [
                    {
                      key: "init",
                      value: function (e) {
                        this.proxy("init", [], e);
                      },
                    },
                    {
                      key: "processHeader",
                      value: function (e, t) {
                        this.proxy("processHeader", [e], t, [e]);
                      },
                    },
                    {
                      key: "processAudio",
                      value: function (e, t) {
                        this.proxy("processAudio", [e], t, [e]);
                      },
                    },
                    {
                      key: "close",
                      value: function () {
                        this.terminate();
                      },
                    },
                  ]),
                  r
                );
              })(
                (0, r(n(580)).default)({
                  loadedMetadata: !1,
                  audioFormat: null,
                  audioBuffer: null,
                  cpuTime: 0,
                }),
              );
            },
            319: (e, t, n) => {
              "use strict";
              var r = n(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var i = r(n(575)),
                a = r(n(913)),
                u = r(n(205)),
                o = r(n(585)),
                s = r(n(754));
              t.default = (function (e) {
                (0, u.default)(r, e);
                var t,
                  n =
                    ((t = (function () {
                      if (
                        "u" < typeof Reflect ||
                        !Reflect.construct ||
                        Reflect.construct.sham
                      )
                        return !1;
                      if ("function" == typeof Proxy) return !0;
                      try {
                        return (
                          Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function () {}),
                          ),
                          !0
                        );
                      } catch (e) {
                        return !1;
                      }
                    })()),
                    function () {
                      var e,
                        n = (0, s.default)(r);
                      return (
                        (e = t
                          ? Reflect.construct(
                              n,
                              arguments,
                              (0, s.default)(this).constructor,
                            )
                          : n.apply(this, arguments)),
                        (0, o.default)(this, e)
                      );
                    });
                function r() {
                  return (0, i.default)(this, r), n.apply(this, arguments);
                }
                return (
                  (0, a.default)(r, [
                    {
                      key: "init",
                      value: function (e) {
                        this.proxy("init", [], e);
                      },
                    },
                    {
                      key: "processHeader",
                      value: function (e, t) {
                        this.proxy("processHeader", [e], t, [e]);
                      },
                    },
                    {
                      key: "processFrame",
                      value: function (e, t) {
                        this.proxy("processFrame", [e], t, [e]);
                      },
                    },
                    {
                      key: "close",
                      value: function () {
                        this.terminate();
                      },
                    },
                    {
                      key: "sync",
                      value: function () {
                        this.proxy("sync", [], function () {});
                      },
                    },
                    {
                      key: "recycleFrame",
                      value: function (e) {
                        this.proxy("recycleFrame", [e], function () {}, [
                          e.y.bytes.buffer,
                          e.u.bytes.buffer,
                          e.v.bytes.buffer,
                        ]);
                      },
                    },
                  ]),
                  r
                );
              })(
                (0, r(n(580)).default)({
                  loadedMetadata: !1,
                  videoFormat: null,
                  frameBuffer: null,
                  cpuTime: 0,
                }),
              );
            },
            445: (e, t, n) => {
              "use strict";
              var r = n(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var i = r(n(575)),
                a = r(n(913)),
                u = r(n(539)),
                o = "1.8.9-20220406232920-cb5f7ff",
                s = {
                  OGVDemuxerOggW: "ogv-demuxer-ogg-wasm.js",
                  OGVDemuxerWebMW: "ogv-demuxer-webm-wasm.js",
                  OGVDecoderAudioOpusW: "ogv-decoder-audio-opus-wasm.js",
                  OGVDecoderAudioVorbisW: "ogv-decoder-audio-vorbis-wasm.js",
                  OGVDecoderVideoTheoraW: "ogv-decoder-video-theora-wasm.js",
                  OGVDecoderVideoVP8W: "ogv-decoder-video-vp8-wasm.js",
                  OGVDecoderVideoVP8MTW: "ogv-decoder-video-vp8-mt-wasm.js",
                  OGVDecoderVideoVP9W: "ogv-decoder-video-vp9-wasm.js",
                  OGVDecoderVideoVP9SIMDW: "ogv-decoder-video-vp9-simd-wasm.js",
                  OGVDecoderVideoVP9MTW: "ogv-decoder-video-vp9-mt-wasm.js",
                  OGVDecoderVideoVP9SIMDMTW:
                    "ogv-decoder-video-vp9-simd-mt-wasm.js",
                  OGVDecoderVideoAV1W: "ogv-decoder-video-av1-wasm.js",
                  OGVDecoderVideoAV1SIMDW: "ogv-decoder-video-av1-simd-wasm.js",
                  OGVDecoderVideoAV1MTW: "ogv-decoder-video-av1-mt-wasm.js",
                  OGVDecoderVideoAV1SIMDMTW:
                    "ogv-decoder-video-av1-simd-mt-wasm.js",
                };
              t.default = (function () {
                function e() {
                  (0, i.default)(this, e), (this.base = this.defaultBase());
                }
                return (
                  (0, a.default)(e, [
                    { key: "defaultBase", value: function () {} },
                    {
                      key: "wasmSupported",
                      value: function () {
                        return u.default.wasmSupported();
                      },
                    },
                    {
                      key: "scriptForClass",
                      value: function (e) {
                        return s[e];
                      },
                    },
                    {
                      key: "urlForClass",
                      value: function (e) {
                        var t = this.scriptForClass(e);
                        if (t) return this.urlForScript(t);
                        throw Error("asked for URL for unknown class " + e);
                      },
                    },
                    {
                      key: "urlForScript",
                      value: function (e) {
                        if (e) {
                          var t = this.base;
                          return (
                            void 0 === t ? (t = "") : (t += "/"),
                            t + e + "?version=" + encodeURIComponent(o)
                          );
                        }
                        throw Error("asked for URL for unknown script " + e);
                      },
                    },
                    {
                      key: "loadClass",
                      value: function (e, t, n) {
                        var r = this;
                        n = n || {};
                        var i = this.getGlobal(),
                          a = this.urlForClass(e),
                          u = function (t) {
                            return (
                              ((t = t || {}).locateFile = function (e) {
                                return "data:" === e.slice(0, 5)
                                  ? e
                                  : r.urlForScript(e);
                              }),
                              (t.mainScriptUrlOrBlob =
                                r.scriptForClass(e) +
                                "?version=" +
                                encodeURIComponent(o)),
                              i[e](t)
                            );
                          };
                        "function" == typeof i[e]
                          ? t(u)
                          : this.loadScript(a, function () {
                              t(u);
                            });
                      },
                    },
                  ]),
                  e
                );
              })();
            },
            964: (e, t, n) => {
              "use strict";
              var r = n(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var i = r(n(575)),
                a = r(n(913)),
                u = r(n(525)),
                o = r(n(205)),
                s = r(n(585)),
                l = r(n(754)),
                d = r(n(408)),
                c = r(n(319)),
                f = r(n(445)),
                h = {
                  audio: { proxy: d.default, worker: "ogv-worker-audio.js" },
                  video: { proxy: c.default, worker: "ogv-worker-video.js" },
                },
                p = {
                  OGVDecoderAudioOpusW: "audio",
                  OGVDecoderAudioVorbisW: "audio",
                  OGVDecoderVideoTheoraW: "video",
                  OGVDecoderVideoVP8W: "video",
                  OGVDecoderVideoVP9W: "video",
                  OGVDecoderVideoVP9SIMDW: "video",
                  OGVDecoderVideoAV1W: "video",
                  OGVDecoderVideoAV1SIMDW: "video",
                },
                m = new ((function (e) {
                  (0, o.default)(r, e);
                  var t,
                    n =
                      ((t = (function () {
                        if (
                          "u" < typeof Reflect ||
                          !Reflect.construct ||
                          Reflect.construct.sham
                        )
                          return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                          return (
                            Boolean.prototype.valueOf.call(
                              Reflect.construct(Boolean, [], function () {}),
                            ),
                            !0
                          );
                        } catch (e) {
                          return !1;
                        }
                      })()),
                      function () {
                        var e,
                          n = (0, l.default)(r);
                        return (
                          (e = t
                            ? Reflect.construct(
                                n,
                                arguments,
                                (0, l.default)(this).constructor,
                              )
                            : n.apply(this, arguments)),
                          (0, s.default)(this, e)
                        );
                      });
                  function r() {
                    var e;
                    return (
                      (0, i.default)(this, r),
                      ((e = n.call(this)).scriptStatus = {}),
                      (e.scriptCallbacks = {}),
                      e
                    );
                  }
                  return (
                    (0, a.default)(r, [
                      {
                        key: "getGlobal",
                        value: function () {
                          return window;
                        },
                      },
                      {
                        key: "defaultBase",
                        value: function () {
                          for (
                            var e,
                              t,
                              n = document.querySelectorAll("script"),
                              r =
                                /^(?:|(.*)\/)ogv(?:-support|-es2017)?\.js(?:\?|#|$)/,
                              i = 0;
                            i < n.length;
                            i++
                          )
                            if (
                              (e = n[i].getAttribute("src")) &&
                              (t = e.match(r))
                            )
                              return t[1];
                        },
                      },
                      {
                        key: "loadClass",
                        value: function (e, t, n) {
                          (n = n || {}).worker
                            ? this.workerProxy(e, t)
                            : (0, u.default)(
                                (0, l.default)(r.prototype),
                                "loadClass",
                                this,
                              ).call(this, e, t, n);
                        },
                      },
                      {
                        key: "loadScript",
                        value: function (e, t) {
                          var n = this;
                          if ("done" == this.scriptStatus[e]) t();
                          else if ("loading" == this.scriptStatus[e])
                            this.scriptCallbacks[e].push(t);
                          else {
                            (this.scriptStatus[e] = "loading"),
                              (this.scriptCallbacks[e] = [t]);
                            var r = document.createElement("script"),
                              i = function (t) {
                                var r = n.scriptCallbacks[e];
                                delete n.scriptCallbacks[e],
                                  (n.scriptStatus[e] = "done"),
                                  r.forEach(function (e) {
                                    e();
                                  });
                              };
                            r.addEventListener("load", i),
                              r.addEventListener("error", i),
                              (r.src = e),
                              document.querySelector("head").appendChild(r);
                          }
                        },
                      },
                      {
                        key: "workerProxy",
                        value: function (e, t) {
                          var n = h[p[e]];
                          if (!n)
                            throw Error(
                              "Requested worker for class with no proxy: " + e,
                            );
                          var r,
                            i = n.proxy,
                            a = n.worker,
                            u = this.urlForScript(this.scriptForClass(e)),
                            o = this.urlForScript(a),
                            s = function (t) {
                              return new i(r, e, t);
                            };
                          if (o.match(/^https?:|\/\//i)) {
                            var l,
                              d,
                              c,
                              f,
                              _,
                              v = function () {
                                if (1 == g && 1 == y) {
                                  var e =
                                    c +
                                    " " +
                                    f +
                                    "\nOGVLoader.base = " +
                                    JSON.stringify(m.base);
                                  try {
                                    _ = new Blob([e], {
                                      type: "application/javascript",
                                    });
                                  } catch (t) {
                                    (window.BlobBuilder =
                                      window.BlobBuilder ||
                                      window.WebKitBlobBuilder ||
                                      window.MozBlobBuilder),
                                      (_ = new BlobBuilder()).append(e),
                                      (_ = _.getBlob());
                                  }
                                  (r = new Worker(URL.createObjectURL(_))),
                                    t(function (e) {
                                      return Promise.resolve(new s(e));
                                    });
                                }
                              },
                              g = !1,
                              y = !1;
                            (l = new XMLHttpRequest()).open("GET", u, !0),
                              (l.onreadystatechange = function () {
                                4 == l.readyState &&
                                  200 == l.status &&
                                  ((c = l.responseText), (g = !0), v());
                              }),
                              l.send(),
                              (d = new XMLHttpRequest()).open("GET", o, !0),
                              (d.onreadystatechange = function () {
                                4 == d.readyState &&
                                  200 == d.status &&
                                  ((f = d.responseText), (y = !0), v());
                              }),
                              d.send();
                          } else
                            (r = new Worker(o)),
                              t(function (e) {
                                return Promise.resolve(new s(e));
                              });
                        },
                      },
                    ]),
                    r
                  );
                })(f.default))();
              t.default = m;
            },
            759: (e, t, n) => {
              "use strict";
              var r = n(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var i = r(n(913)),
                a = r(n(575)),
                u = r(n(309)),
                o = {
                  MEDIA_ERR_ABORTED: 1,
                  MEDIA_ERR_NETWORK: 2,
                  MEDIA_ERR_DECODE: 3,
                  MEDIA_ERR_SRC_NOT_SUPPORTED: 4,
                },
                s = (0, i.default)(function e(t, n) {
                  (0, a.default)(this, e), (this.code = t), (this.message = n);
                });
              (0, u.default)(s, o),
                (0, u.default)(s.prototype, o),
                (t.default = s);
            },
            278: (e, t, n) => {
              "use strict";
              var r = n(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var i = r(n(913)),
                a = r(n(575));
              function u(e, t, n) {
                var r = e.split(t, n).map(function (e) {
                  return e.replace(/^\s+/, "").replace(/\s+$/, "");
                });
                if ("number" == typeof n) for (; r.length < n; ) r.push(null);
                return r;
              }
              t.default = (0, i.default)(function e(t) {
                (0, a.default)(this, e),
                  (t = String(t)),
                  (this.major = null),
                  (this.minor = null),
                  (this.codecs = null);
                var n = u(t, ";");
                if (n.length) {
                  var r = n.shift();
                  if (r) {
                    var i = u(r, "/", 2);
                    (this.major = i[0]), (this.minor = i[1]);
                  }
                  for (var o in n) {
                    var s = n[o].match(/^codecs\s*=\s*"(.*?)"$/);
                    if (s) {
                      this.codecs = u(s[1], ",");
                      break;
                    }
                  }
                }
              });
            },
            869: (e, t, n) => {
              "use strict";
              var r = n(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var i,
                a = r(n(575)),
                u = r(n(913)),
                o = r(n(506)),
                s = r(n(205)),
                l = r(n(585)),
                d = r(n(754)),
                c = r(n(8)),
                f = r(n(731)),
                h = r(n(936)),
                p = r(n(848)),
                m = r(n(964)),
                _ = r(n(893)),
                v = r(n(309)),
                g = r(n(759)),
                y = r(n(278)),
                D = r(n(168)),
                b = r(n(625)),
                C = r(n(302)),
                E = (function () {
                  if ("function" == typeof setImmediate) return setImmediate;
                  var e = new MessageChannel(),
                    t = [];
                  return (
                    (e.port1.onmessage = function (e) {
                      t.shift()();
                    }),
                    function (n) {
                      t.push(n), e.port2.postMessage({});
                    }
                  );
                })(),
                w = {
                  NETWORK_EMPTY: 0,
                  NETWORK_IDLE: 1,
                  NETWORK_LOADING: 2,
                  NETWORK_NO_SOURCE: 3,
                  HAVE_NOTHING: 0,
                  HAVE_METADATA: 1,
                  HAVE_CURRENT_DATA: 2,
                  HAVE_FUTURE_DATA: 3,
                  HAVE_ENOUGH_DATA: 4,
                },
                A = "INITIAL",
                B = "SEEKING_END",
                F = "LOADED",
                V = "PRELOAD",
                T = "READY",
                k = "PLAYING",
                x = "SEEKING",
                P = "ERROR",
                O = "NOT_SEEKING",
                S = "BISECT_TO_TARGET",
                R = "BISECT_TO_KEYPOINT",
                M = "LINEAR_TO_TARGET",
                N = "fast";
              function L() {
                var e = document.createElement("ogvjs");
                return (
                  Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, Object.getPrototypeOf(this))
                    : (e.__proto__ = this.__proto__),
                  e
                );
              }
              (i =
                "u" < typeof performance ||
                void 0 === (0, c.default)(performance.now)
                  ? Date.now
                  : performance.now.bind(performance)),
                (L.prototype = Object.create(HTMLElement.prototype, {}));
              var I = (function (e) {
                (0, s.default)(r, e);
                var t,
                  n =
                    ((t = (function () {
                      if (
                        "u" < typeof Reflect ||
                        !Reflect.construct ||
                        Reflect.construct.sham
                      )
                        return !1;
                      if ("function" == typeof Proxy) return !0;
                      try {
                        return (
                          Boolean.prototype.valueOf.call(
                            Reflect.construct(Boolean, [], function () {}),
                          ),
                          !0
                        );
                      } catch (e) {
                        return !1;
                      }
                    })()),
                    function () {
                      var e,
                        n = (0, d.default)(r);
                      return (
                        (e = t
                          ? Reflect.construct(
                              n,
                              arguments,
                              (0, d.default)(this).constructor,
                            )
                          : n.apply(this, arguments)),
                        (0, l.default)(this, e)
                      );
                    });
                function r(e) {
                  var t;
                  if (
                    ((0, a.default)(this, r),
                    (t = n.call(this)),
                    ((e = e || {}).base = e.base || m.default.base),
                    (t._options = e),
                    (t._instanceId = "ogvjs" + ++r.instanceCount),
                    void 0 !== e.worker
                      ? (t._enableWorker = !!e.worker)
                      : (t._enableWorker = !!window.Worker),
                    !m.default.wasmSupported())
                  )
                    throw Error("WebAssembly not supported");
                  return (
                    (t._enableThreading = !!e.threading),
                    (t._enableSIMD = !!e.simd),
                    (t._state = A),
                    (t._seekState = O),
                    (t._detectedType = null),
                    (t._canvas = document.createElement("canvas")),
                    (t._frameSink = null),
                    (t.className = t._instanceId),
                    (0, v.default)((0, o.default)(t), w),
                    (t._view = t._canvas),
                    (t._view.style.position = "absolute"),
                    (t._view.style.top = "0"),
                    (t._view.style.left = "0"),
                    (t._view.style.width = "100%"),
                    (t._view.style.height = "100%"),
                    (t._view.style.objectFit = "contain"),
                    t.appendChild(t._view),
                    (t._startTime = i()),
                    (t._codec = null),
                    (t._audioInfo = null),
                    (t._videoInfo = null),
                    (t._actionQueue = []),
                    (t._audioFeeder = null),
                    (t._muted = !1),
                    (t._initialPlaybackPosition = 0),
                    (t._initialPlaybackOffset = 0),
                    (t._prebufferingAudio = !1),
                    (t._initialSeekTime = 0),
                    (t._currentSrc = ""),
                    (t._crossOrigin = null),
                    (t._streamEnded = !1),
                    (t._mediaError = null),
                    (t._dataEnded = !1),
                    (t._byteLength = 0),
                    (t._duration = null),
                    (t._lastSeenTimestamp = null),
                    t._nextProcessingTimer,
                    (t._nextFrameTimer = null),
                    (t._loading = !1),
                    (t._started = !1),
                    (t._paused = !0),
                    (t._ended = !1),
                    (t._startedPlaybackInDocument = !1),
                    (t._stream = void 0),
                    (t._framesProcessed = 0),
                    (t._targetPerFrameTime = 1e3 / 60),
                    (t._actualPerFrameTime = 0),
                    (t._totalFrameTime = 0),
                    (t._totalFrameCount = 0),
                    (t._playTime = 0),
                    (t._bufferTime = 0),
                    (t._drawingTime = 0),
                    (t._proxyTime = 0),
                    (t._totalJitter = 0),
                    (t._droppedAudio = 0),
                    (t._delayedAudio = 0),
                    (t._lateFrames = 0),
                    (t._poster = ""),
                    (t._thumbnail = null),
                    (t._frameEndTimestamp = 0),
                    (t._audioEndTimestamp = 0),
                    (t._decodedFrames = []),
                    (t._pendingFrames = []),
                    (t._lastFrameDecodeTime = 0),
                    (t._lastFrameVideoCpuTime = 0),
                    (t._lastFrameAudioCpuTime = 0),
                    (t._lastFrameDemuxerCpuTime = 0),
                    (t._lastFrameDrawingTime = 0),
                    (t._lastFrameBufferTime = 0),
                    (t._lastFrameProxyTime = 0),
                    (t._lastVideoCpuTime = 0),
                    (t._lastAudioCpuTime = 0),
                    (t._lastDemuxerCpuTime = 0),
                    (t._lastBufferTime = 0),
                    (t._lastProxyTime = 0),
                    (t._lastDrawingTime = 0),
                    (t._lastFrameTimestamp = 0),
                    (t._currentVideoCpuTime = 0),
                    (t._lastTimeUpdate = 0),
                    (t._timeUpdateInterval = 250),
                    (t._seekTargetTime = 0),
                    (t._bisectTargetTime = 0),
                    (t._seekMode = null),
                    (t._lastSeekPosition = null),
                    (t._seekBisector = null),
                    (t._didSeek = null),
                    (t._depth = 0),
                    (t._needProcessing = !1),
                    (t._pendingFrame = 0),
                    (t._pendingAudio = 0),
                    (t._framePipelineDepth = 8),
                    (t._frameParallelism = t._enableThreading
                      ? Math.min(16, navigator.hardwareConcurrency) || 1
                      : 0),
                    (t._audioPipelineDepth = 12),
                    (t._videoInfo = null),
                    (t._audioInfo = null),
                    (t._width = 0),
                    (t._height = 0),
                    (t._volume = 1),
                    (t._playbackRate = 1),
                    Object.defineProperties((0, o.default)(t), {
                      src: {
                        get: function () {
                          return this.getAttribute("src") || "";
                        },
                        set: function (e) {
                          this.setAttribute("src", e),
                            (this._loading = !1),
                            this._prepForLoad("interactive");
                        },
                      },
                      buffered: {
                        get: function () {
                          var e,
                            t = this;
                          return (
                            (e =
                              this._stream && this._byteLength && this._duration
                                ? this._stream
                                    .getBufferedRanges()
                                    .map(function (e) {
                                      return e.map(function (e) {
                                        return (
                                          (e / t._stream.length) * t._duration
                                        );
                                      });
                                    })
                                : [[0, 0]]),
                            new D.default(e)
                          );
                        },
                      },
                      seekable: {
                        get: function () {
                          return new D.default(
                            this.duration < 1 / 0 &&
                            this._stream &&
                            this._stream.seekable &&
                            this._codec &&
                            this._codec.seekable
                              ? [[0, this._duration]]
                              : [],
                          );
                        },
                      },
                      currentTime: {
                        get: function () {
                          return this._state == x
                            ? this._seekTargetTime
                            : this._codec
                              ? this._state != k || this._paused
                                ? this._initialPlaybackOffset
                                : this._getPlaybackTime()
                              : this._initialSeekTime;
                        },
                        set: function (e) {
                          this._seek(e, "exact");
                        },
                      },
                      duration: {
                        get: function () {
                          return this._codec && this._codec.loadedMetadata
                            ? null !== this._duration
                              ? this._duration
                              : 1 / 0
                            : NaN;
                        },
                      },
                      paused: {
                        get: function () {
                          return this._paused;
                        },
                      },
                      ended: {
                        get: function () {
                          return this._ended;
                        },
                      },
                      seeking: {
                        get: function () {
                          return this._state == x;
                        },
                      },
                      muted: {
                        get: function () {
                          return this._muted;
                        },
                        set: function (e) {
                          (this._muted = e),
                            this._audioFeeder
                              ? (this._audioFeeder.muted = this._muted)
                              : this._started &&
                                !this._muted &&
                                this._codec &&
                                this._codec.hasAudio &&
                                (this._log(
                                  "unmuting: switching from timer to audio clock",
                                ),
                                this._initAudioFeeder(),
                                this._startPlayback(this._audioEndTimestamp)),
                            this._fireEventAsync("volumechange");
                        },
                      },
                      poster: {
                        get: function () {
                          return this._poster;
                        },
                        set: function (e) {
                          var t = this;
                          if (((this._poster = e), !this._started)) {
                            this._thumbnail &&
                              this.removeChild(this._thumbnail);
                            var n = new Image();
                            (n.crossOrigin = this.crossOrigin),
                              (n.src = this._poster),
                              (n.className = "ogvjs-poster"),
                              (n.style.position = "absolute"),
                              (n.style.top = "0"),
                              (n.style.left = "0"),
                              (n.style.width = "100%"),
                              (n.style.height = "100%"),
                              (n.style.objectFit = "contain"),
                              (n.style.visibility = "hidden"),
                              n.addEventListener("load", function () {
                                t._thumbnail === n &&
                                  (r.styleManager.appendRule(
                                    "." + t._instanceId,
                                    {
                                      width: n.naturalWidth + "px",
                                      height: n.naturalHeight + "px",
                                    },
                                  ),
                                  (n.style.visibility = "visible"));
                              }),
                              (this._thumbnail = n),
                              this.appendChild(n);
                          }
                        },
                      },
                      videoWidth: {
                        get: function () {
                          return this._videoInfo
                            ? this._videoInfo.displayWidth
                            : 0;
                        },
                      },
                      videoHeight: {
                        get: function () {
                          return this._videoInfo
                            ? this._videoInfo.displayHeight
                            : 0;
                        },
                      },
                      ogvjsVideoFrameRate: {
                        get: function () {
                          return this._videoInfo
                            ? 0 == this._videoInfo.fps
                              ? this._totalFrameCount /
                                (this._totalFrameTime / 1e3)
                              : this._videoInfo.fps
                            : 0;
                        },
                      },
                      ogvjsAudioChannels: {
                        get: function () {
                          return this._audioInfo ? this._audioInfo.channels : 0;
                        },
                      },
                      ogvjsAudioSampleRate: {
                        get: function () {
                          return this._audioInfo ? this._audioInfo.rate : 0;
                        },
                      },
                      width: {
                        get: function () {
                          return this._width;
                        },
                        set: function (e) {
                          (this._width = parseInt(e, 10)),
                            (this.style.width = this._width + "px");
                        },
                      },
                      height: {
                        get: function () {
                          return this._height;
                        },
                        set: function (e) {
                          (this._height = parseInt(e, 10)),
                            (this.style.height = this._height + "px");
                        },
                      },
                      autoplay: {
                        get: function () {
                          return !1;
                        },
                        set: function (e) {},
                      },
                      controls: {
                        get: function () {
                          return !1;
                        },
                        set: function (e) {},
                      },
                      loop: {
                        get: function () {
                          return !1;
                        },
                        set: function (e) {},
                      },
                      crossOrigin: {
                        get: function () {
                          return this._crossOrigin;
                        },
                        set: function (e) {
                          switch (e) {
                            case null:
                              (this._crossOrigin = e),
                                this.removeAttribute("crossorigin");
                              break;
                            default:
                              e = "anonymous";
                            case "":
                            case "anonymous":
                            case "use-credentials":
                              (this._crossOrigin = e),
                                this.setAttribute("crossorigin", e);
                          }
                          this._thumbnail && (this._thumbnail.crossOrigin = e);
                        },
                      },
                      currentSrc: {
                        get: function () {
                          return this._currentSrc;
                        },
                      },
                      defaultMuted: {
                        get: function () {
                          return !1;
                        },
                      },
                      defaultPlaybackRate: {
                        get: function () {
                          return 1;
                        },
                      },
                      error: {
                        get: function () {
                          return this._state === P
                            ? this._mediaError
                              ? this._mediaError
                              : new g.default(
                                  "unknown error occurred in media procesing",
                                )
                            : null;
                        },
                      },
                      preload: {
                        get: function () {
                          return this.getAttribute("preload") || "";
                        },
                        set: function (e) {
                          this.setAttribute("preload", e);
                        },
                      },
                      readyState: {
                        get: function () {
                          return this._stream &&
                            this._codec &&
                            this._codec.loadedMetadata
                            ? r.HAVE_ENOUGH_DATA
                            : r.HAVE_NOTHING;
                        },
                      },
                      networkState: {
                        get: function () {
                          return this._stream
                            ? this._stream.waiting
                              ? r.NETWORK_LOADING
                              : r.NETWORK_IDLE
                            : this.readyState == r.HAVE_NOTHING
                              ? r.NETWORK_EMPTY
                              : r.NETWORK_NO_SOURCE;
                        },
                      },
                      playbackRate: {
                        get: function () {
                          return this._playbackRate;
                        },
                        set: function (e) {
                          var t = Number(e) || 1;
                          this._audioFeeder
                            ? (this._audioFeeder.tempo = t)
                            : this._paused ||
                              ((this._initialPlaybackOffset =
                                this._getPlaybackTime()),
                              (this._initialPlaybackPosition =
                                (t * i()) / 1e3)),
                            (this._playbackRate = t),
                            this._fireEventAsync("ratechange");
                        },
                      },
                      played: {
                        get: function () {
                          return new D.default([[0, this.currentTime]]);
                        },
                      },
                      volume: {
                        get: function () {
                          return this._volume;
                        },
                        set: function (e) {
                          (this._volume = +e),
                            this._audioFeeder &&
                              (this._audioFeeder.volume = this._volume),
                            this._fireEventAsync("volumechange");
                        },
                      },
                    }),
                    (t.onframecallback = null),
                    (t.onloadstate = null),
                    (t.onprogress = null),
                    (t.onsuspend = null),
                    (t.onabort = null),
                    (t.onemptied = null),
                    (t.onstalled = null),
                    (t.onloadedmetadata = null),
                    (t.onloadeddata = null),
                    (t.oncanplay = null),
                    (t.oncanplaythrough = null),
                    (t.onplaying = null),
                    (t.onwaiting = null),
                    (t.onseeking = null),
                    (t.onseeked = null),
                    (t.onended = null),
                    (t.ondurationchange = null),
                    (t.ontimeupdate = null),
                    (t.onplay = null),
                    (t.onpause = null),
                    (t.onratechange = null),
                    (t.onresize = null),
                    (t.onvolumechange = null),
                    (t.onaudiofeedercreated = null),
                    t
                  );
                }
                return (
                  (0, u.default)(
                    r,
                    [
                      {
                        key: "_time",
                        value: function (e) {
                          var t = i();
                          e();
                          var n = i() - t;
                          return (this._lastFrameDecodeTime += n), n;
                        },
                      },
                      {
                        key: "_log",
                        value: function (e) {
                          var t = this._options;
                          if (t.debug) {
                            var n = i() - this._startTime;
                            (t.debugFilter && !e.match(t.debugFilter)) ||
                              console.log(
                                "[" + Math.round(10 * n) / 10 + "ms] " + e,
                              );
                          }
                        },
                      },
                      {
                        key: "_fireEvent",
                        value: function (e) {
                          var t =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {};
                          this._log("fireEvent " + e);
                          var n,
                            r = "function" == typeof Event;
                          for (var i in (r
                            ? (n = new CustomEvent(e))
                            : (n = document.createEvent("Event")).initEvent(
                                e,
                                !1,
                                !1,
                              ),
                          t))
                            t.hasOwnProperty(i) && (n[i] = t[i]);
                          var a = this.dispatchEvent(n);
                          !r &&
                            "resize" === e &&
                            this.onresize &&
                            a &&
                            this.onresize.call(this, n);
                        },
                      },
                      {
                        key: "_fireEventAsync",
                        value: function (e) {
                          var t = this,
                            n =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {};
                          this._log("fireEventAsync " + e),
                            E(function () {
                              t._fireEvent(e, n);
                            });
                        },
                      },
                      {
                        key: "_initAudioFeeder",
                        value: function () {
                          var e = this,
                            t = this._options,
                            n = { bufferSize: 8192 };
                          t.audioContext && (n.audioContext = t.audioContext),
                            t.audioDestination &&
                              (n.output = t.audioDestination),
                            t.audioBackendFactory &&
                              (n.backendFactory = t.audioBackendFactory);
                          var r = (this._audioFeeder = new p.default(n));
                          r.init(
                            this._audioInfo.channels,
                            this._audioInfo.rate,
                          ),
                            this.onaudiofeedercreated &&
                              this.onaudiofeedercreated(this._audioFeeder),
                            (r.bufferThreshold = 1),
                            (r.volume = this.volume),
                            (r.muted = this.muted),
                            (r.tempo = this.playbackRate),
                            (r.onbufferlow = function () {
                              e._log("onbufferlow"),
                                (e._stream &&
                                  (e._stream.buffering || e._stream.seeking)) ||
                                  e._pendingAudio ||
                                  e._pingProcessing();
                            }),
                            (r.onstarved = function () {
                              e._dataEnded
                                ? e._log(
                                    "onstarved: appear to have reached end of audio",
                                  )
                                : (e._log(
                                    "onstarved: halting audio due to starvation",
                                  ),
                                  e._stopPlayback(),
                                  (e._prebufferingAudio = !0)),
                                e._isProcessing() || e._pingProcessing(0);
                            });
                        },
                      },
                      {
                        key: "_startPlayback",
                        value: function (e) {
                          if (this._audioFeeder) {
                            this._audioFeeder.start();
                            var t = this._audioFeeder.getPlaybackState();
                            this._initialPlaybackPosition = t.playbackPosition;
                          } else
                            this._initialPlaybackPosition =
                              (this._playbackRate * i()) / 1e3;
                          void 0 !== e && (this._initialPlaybackOffset = e),
                            (this._prebufferingAudio = !1),
                            this._log(
                              "continuing at " +
                                this._initialPlaybackPosition +
                                ", " +
                                this._initialPlaybackOffset,
                            );
                        },
                      },
                      {
                        key: "_stopPlayback",
                        value: function () {
                          (this._initialPlaybackOffset =
                            this._getPlaybackTime()),
                            this._log(
                              "pausing at " + this._initialPlaybackOffset,
                            ),
                            this._audioFeeder && this._audioFeeder.stop();
                        },
                      },
                      {
                        key: "_getPlaybackTime",
                        value: function (e) {
                          return this._prebufferingAudio || this._paused
                            ? this._initialPlaybackOffset
                            : (this._audioFeeder
                                ? (e =
                                    e || this._audioFeeder.getPlaybackState())
                                    .playbackPosition
                                : (this._playbackRate * i()) / 1e3) -
                                this._initialPlaybackPosition +
                                this._initialPlaybackOffset;
                        },
                      },
                      {
                        key: "_stopVideo",
                        value: function () {
                          this._log("STOPPING"),
                            (this._state = A),
                            (this._seekState = O),
                            (this._started = !1),
                            (this._ended = !1),
                            (this._frameEndTimestamp = 0),
                            (this._audioEndTimestamp = 0),
                            (this._lastFrameDecodeTime = 0),
                            (this._prebufferingAudio = !1),
                            this._actionQueue.splice(
                              0,
                              this._actionQueue.length,
                            ),
                            this._stream &&
                              (this._stream.abort(),
                              (this._stream = null),
                              (this._streamEnded = !1)),
                            this._codec &&
                              (this._codec.close(),
                              (this._codec = null),
                              (this._pendingFrame = 0),
                              (this._pendingAudio = 0),
                              (this._dataEnded = !1)),
                            (this._videoInfo = null),
                            (this._audioInfo = null),
                            this._audioFeeder &&
                              (this._audioFeeder.close(),
                              (this._audioFeeder = null)),
                            this._nextProcessingTimer &&
                              (clearTimeout(this._nextProcessingTimer),
                              (this._nextProcessingTimer = null)),
                            this._nextFrameTimer &&
                              (clearTimeout(this._nextFrameTimer),
                              (this._nextFrameTimer = null)),
                            this._frameSink &&
                              (this._frameSink.clear(),
                              (this._frameSink = null)),
                            this._decodedFrames && (this._decodedFrames = []),
                            this._pendingFrames && (this._pendingFrames = []),
                            (this._initialSeekTime = 0),
                            (this._initialPlaybackPosition = 0),
                            (this._initialPlaybackOffset = 0),
                            (this._duration = null);
                        },
                      },
                      {
                        key: "_doFrameComplete",
                        value: function () {
                          var e = this,
                            t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : {};
                          this._startedPlaybackInDocument &&
                            !document.body.contains(this) &&
                            E(function () {
                              e.stop();
                            });
                          var n = i(),
                            r = n - this._lastFrameTimestamp,
                            a =
                              this._actualPerFrameTime -
                              this._targetPerFrameTime;
                          (this._totalJitter += Math.abs(a)),
                            (this._playTime += r);
                          var u = {
                            cpuTime: this._lastFrameDecodeTime,
                            drawingTime:
                              this._drawingTime - this._lastFrameDrawingTime,
                            bufferTime:
                              this._bufferTime - this._lastFrameBufferTime,
                            proxyTime:
                              this._proxyTime - this._lastFrameProxyTime,
                            demuxerTime: 0,
                            videoTime: 0,
                            audioTime: 0,
                            clockTime: this._actualPerFrameTime,
                            late: t.dropped,
                            dropped: t.dropped,
                          };
                          function o(e) {
                            return Math.round(10 * e) / 10;
                          }
                          this._codec &&
                            ((u.demuxerTime =
                              this._codec.demuxerCpuTime -
                              this._lastFrameDemuxerCpuTime),
                            (u.videoTime +=
                              this._currentVideoCpuTime -
                              this._lastFrameVideoCpuTime),
                            (u.audioTime +=
                              this._codec.audioCpuTime -
                              this._lastFrameAudioCpuTime)),
                            (u.cpuTime += u.demuxerTime),
                            (this._lastFrameDecodeTime = 0),
                            (this._lastFrameTimestamp = n),
                            this._codec
                              ? ((this._lastFrameVideoCpuTime =
                                  this._currentVideoCpuTime),
                                (this._lastFrameAudioCpuTime =
                                  this._codec.audioCpuTime),
                                (this._lastFrameDemuxerCpuTime =
                                  this._codec.demuxerCpuTime))
                              : ((this._lastFrameVideoCpuTime = 0),
                                (this._lastFrameAudioCpuTime = 0),
                                (this._lastFrameDemuxerCpuTime = 0)),
                            (this._lastFrameDrawingTime = this._drawingTime),
                            (this._lastFrameBufferTime = this._bufferTime),
                            (this._lastFrameProxyTime = this._proxyTime),
                            this._log(
                              "drew frame " +
                                t.frameEndTimestamp +
                                ": clock time " +
                                o(r) +
                                " (jitter " +
                                o(a) +
                                ") cpu: " +
                                o(u.cpuTime) +
                                " (mux: " +
                                o(u.demuxerTime) +
                                " buf: " +
                                o(u.bufferTime) +
                                " draw: " +
                                o(u.drawingTime) +
                                " proxy: " +
                                o(u.proxyTime) +
                                ") vid: " +
                                o(u.videoTime) +
                                " aud: " +
                                o(u.audioTime),
                            ),
                            this._fireEventAsync("framecallback", u),
                            (!this._lastTimeUpdate ||
                              n - this._lastTimeUpdate >=
                                this._timeUpdateInterval) &&
                              ((this._lastTimeUpdate = n),
                              this._fireEventAsync("timeupdate")),
                            this._codec &&
                              t.yCbCrBuffer &&
                              this._codec.recycleFrame(t.yCbCrBuffer);
                        },
                      },
                      {
                        key: "_seekStream",
                        value: function (e) {
                          var t = this;
                          this._stream.seeking && this._stream.abort(),
                            this._stream.buffering && this._stream.abort(),
                            (this._streamEnded = !1),
                            (this._dataEnded = !1),
                            (this._ended = !1),
                            this._stream
                              .seek(e)
                              .then(function () {
                                t._readBytesAndWait();
                              })
                              .catch(function (e) {
                                t._onStreamError(e);
                              });
                        },
                      },
                      {
                        key: "_onStreamError",
                        value: function (e) {
                          "AbortError" === e.name
                            ? this._log("i/o promise canceled; ignoring")
                            : (this._log("i/o error: " + e),
                              (this._mediaError = new g.default(
                                g.default.MEDIA_ERR_NETWORK,
                                String(e),
                              )),
                              (this._state = P),
                              this._stopPlayback());
                        },
                      },
                      {
                        key: "_seek",
                        value: function (e, t) {
                          var n = this;
                          if (
                            (this._log(
                              "requested seek to " + e + ", mode " + t,
                            ),
                            this.readyState == this.HAVE_NOTHING)
                          )
                            return (
                              this._log(
                                "not yet loaded; saving seek position for later",
                              ),
                              void (this._initialSeekTime = e)
                            );
                          if (this._stream && !this._stream.seekable)
                            throw Error("Cannot seek a non-seekable stream");
                          if (this._codec && !this._codec.seekable)
                            throw Error("Cannot seek in a non-seekable file");
                          var r = function (r) {
                            n._stream &&
                              n._stream.buffering &&
                              n._stream.abort(),
                              n._stream &&
                                n._stream.seeking &&
                                n._stream.abort(),
                              n._actionQueue.splice(0, n._actionQueue.length),
                              n._stopPlayback(),
                              (n._prebufferingAudio = !1),
                              n._audioFeeder && n._audioFeeder.flush(),
                              (n._state = x),
                              (n._seekTargetTime = e),
                              (n._seekMode = t),
                              n._codec ? n._codec.flush(r) : r();
                          };
                          r(function () {
                            n._isProcessing() || n._pingProcessing(0);
                          }),
                            this._actionQueue.push(function () {
                              r(function () {
                                n._doSeek(e);
                              });
                            });
                        },
                      },
                      {
                        key: "_doSeek",
                        value: function (e) {
                          var t = this;
                          (this._streamEnded = !1),
                            (this._dataEnded = !1),
                            (this._ended = !1),
                            (this._state = x),
                            (this._seekTargetTime = e),
                            (this._lastSeekPosition = -1),
                            (this._decodedFrames = []),
                            (this._pendingFrames = []),
                            (this._pendingFrame = 0),
                            (this._pendingAudio = 0),
                            (this._didSeek = !1),
                            this._codec.seekToKeypoint(e, function (n) {
                              n
                                ? ((t._seekState = M),
                                  t._fireEventAsync("seeking"),
                                  t._didSeek || t._pingProcessing())
                                : t._codec.getKeypointOffset(e, function (e) {
                                    e > 0
                                      ? ((t._seekState = M), t._seekStream(e))
                                      : ((t._seekState = S),
                                        t._startBisection(t._seekTargetTime)),
                                      t._fireEventAsync("seeking");
                                  });
                            });
                        },
                      },
                      {
                        key: "_startBisection",
                        value: function (e) {
                          var t = this,
                            n = Math.max(0, this._stream.length - 65536);
                          (this._bisectTargetTime = e),
                            (this._seekBisector = new _.default({
                              start: 0,
                              end: n,
                              process: function (e, n, r) {
                                return (
                                  r != t._lastSeekPosition &&
                                  ((t._lastSeekPosition = r),
                                  t._codec.flush(function () {
                                    t._seekStream(r);
                                  }),
                                  !0)
                                );
                              },
                            })),
                            this._seekBisector.start();
                        },
                      },
                      {
                        key: "_continueSeekedPlayback",
                        value: function () {
                          var e = this;
                          (this._seekState = O),
                            (this._state = T),
                            (this._frameEndTimestamp =
                              this._codec.frameTimestamp),
                            (this._audioEndTimestamp =
                              this._codec.audioTimestamp),
                            this._codec.hasAudio
                              ? (this._seekTargetTime =
                                  this._codec.audioTimestamp)
                              : (this._seekTargetTime =
                                  this._codec.frameTimestamp),
                            (this._initialPlaybackOffset =
                              this._seekTargetTime);
                          var t = function () {
                            (e._lastTimeUpdate = e._seekTargetTime),
                              e._fireEventAsync("timeupdate"),
                              e._fireEventAsync("seeked"),
                              e._isProcessing() || e._pingProcessing();
                          };
                          if (
                            this._codec.hasVideo &&
                            this._decodedFrames.length
                          ) {
                            var n = this._decodedFrames.shift();
                            this._drawFrame(n.yCbCrBuffer), t();
                          } else {
                            if (this._codec.hasVideo && this._codec.frameReady)
                              return (
                                this._codec.decodeFrame(function (n) {
                                  n && e._drawFrame(e._codec.frameBuffer), t();
                                }),
                                void this._codec.sync()
                              );
                            t();
                          }
                        },
                      },
                      {
                        key: "_drawFrame",
                        value: function (e) {
                          this._thumbnail &&
                            (this.removeChild(this._thumbnail),
                            (this._thumbnail = null)),
                            this._frameSink.drawFrame(e);
                        },
                      },
                      {
                        key: "_doProcessLinearSeeking",
                        value: function () {
                          var e,
                            t = this;
                          if (
                            ((e = this._codec.hasVideo
                              ? this._targetPerFrameTime / 1e3
                              : 1 / 256),
                            this._codec.hasVideo)
                          ) {
                            if (this._pendingFrame) return;
                            if (!this._codec.frameReady)
                              return void this._codec.process(function (e) {
                                e
                                  ? t._pingProcessing()
                                  : t._streamEnded
                                    ? (t._log(
                                        "stream ended during linear seeking on video",
                                      ),
                                      (t._dataEnded = !0),
                                      t._continueSeekedPlayback())
                                    : t._readBytesAndWait();
                              });
                            if (
                              this._seekMode === N &&
                              this._codec.keyframeTimestamp ==
                                this._codec.frameTimestamp
                            )
                              return void this._continueSeekedPlayback();
                            if (
                              this._codec.frameTimestamp <= this._seekTargetTime
                            ) {
                              var n = this._codec.frameTimestamp;
                              return (
                                this._pendingFrame++,
                                this._pendingFrames.push({
                                  frameEndTimestamp: n,
                                }),
                                this._decodedFrames.splice(
                                  0,
                                  this._decodedFrames.length,
                                ),
                                this._codec.decodeFrame(function (e) {
                                  t._pendingFrame--,
                                    t._pendingFrames.shift(),
                                    t._decodedFrames.push({
                                      yCbCrBuffer: t._codec.frameBuffer,
                                      videoCpuTime: t._codec.videoCpuTime,
                                      frameEndTimestamp: n,
                                    }),
                                    t._pingProcessing();
                                }),
                                void this._codec.sync()
                              );
                            }
                            if (!this._codec.hasAudio)
                              return void this._continueSeekedPlayback();
                          }
                          if (this._codec.hasAudio) {
                            if (this._pendingAudio) return;
                            return this._codec.audioReady
                              ? this._codec.audioTimestamp + e <
                                this._seekTargetTime
                                ? void this._codec.decodeAudio(function () {
                                    t._pingProcessing();
                                  })
                                : void this._continueSeekedPlayback()
                              : void this._codec.process(function (e) {
                                  e
                                    ? t._pingProcessing()
                                    : t._streamEnded
                                      ? (t._log(
                                          "stream ended during linear seeking on audio",
                                        ),
                                        (t._dataEnded = !0),
                                        t._continueSeekedPlayback())
                                      : t._readBytesAndWait();
                                });
                          }
                        },
                      },
                      {
                        key: "_doProcessBisectionSeek",
                        value: function () {
                          var e,
                            t,
                            n = this;
                          if (this._codec.hasVideo)
                            (t = this._codec.frameTimestamp),
                              (e = this._targetPerFrameTime / 1e3);
                          else {
                            if (!this._codec.hasAudio)
                              throw Error(
                                "Invalid seek state; no audio or video track available",
                              );
                            (t = this._codec.audioTimestamp), (e = 1 / 256);
                          }
                          t < 0
                            ? this._codec.process(function (e) {
                                if (e) n._pingProcessing();
                                else if (n._streamEnded) {
                                  if (
                                    (n._log(
                                      "stream ended during bisection seek",
                                    ),
                                    !n._seekBisector.right())
                                  )
                                    throw (
                                      (n._log("failed going back"),
                                      Error("not sure what to do"))
                                    );
                                } else n._readBytesAndWait();
                              })
                            : t - e / 2 > this._bisectTargetTime
                              ? this._seekBisector.left() ||
                                (this._log("close enough (left)"),
                                (this._seekTargetTime = t),
                                this._continueSeekedPlayback())
                              : t + e / 2 < this._bisectTargetTime
                                ? this._seekBisector.right() ||
                                  (this._log("close enough (right)"),
                                  (this._seekState = M),
                                  this._pingProcessing())
                                : this._seekState == S &&
                                    this._codec.hasVideo &&
                                    this._codec.keyframeTimestamp <
                                      this._codec.frameTimestamp
                                  ? (this._log("finding the keypoint now"),
                                    (this._seekState = R),
                                    this._startBisection(
                                      this._codec.keyframeTimestamp,
                                    ))
                                  : (this._log("straight seeking now"),
                                    (this._seekState = M),
                                    this._pingProcessing());
                        },
                      },
                      {
                        key: "_setupVideo",
                        value: function () {
                          this._videoInfo.fps > 0
                            ? (this._targetPerFrameTime =
                                1e3 / this._videoInfo.fps)
                            : (this._targetPerFrameTime = 16.667),
                            (this._canvas.width = this._videoInfo.displayWidth),
                            (this._canvas.height =
                              this._videoInfo.displayHeight),
                            r.styleManager.appendRule("." + this._instanceId, {
                              width: this._videoInfo.displayWidth + "px",
                              height: this._videoInfo.displayHeight + "px",
                            });
                          var e = {};
                          void 0 !== this._options.webGL &&
                            (e.webGL = this._options.webGL),
                            this._options.forceWebGL && (e.webGL = "required"),
                            (this._frameSink = f.default.attach(
                              this._canvas,
                              e,
                            ));
                        },
                      },
                      {
                        key: "_doProcessing",
                        value: function () {
                          if (
                            (this._didSeek && (this._didSeek = !1),
                            (this._nextProcessingTimer = null),
                            this._isProcessing(),
                            this._depth > 0)
                          )
                            throw Error(
                              "REENTRANCY FAIL: doProcessing recursing unexpectedly",
                            );
                          var e = 0;
                          do {
                            if (
                              ((this._needProcessing = !1),
                              this._depth++,
                              this._doProcessingLoop(),
                              this._depth--,
                              this._needProcessing && this._isProcessing())
                            )
                              throw Error(
                                "REENTRANCY FAIL: waiting on input or codec but asked to keep processing",
                              );
                            ++e > 500 &&
                              (this._log(
                                "stuck in processing loop; breaking with timer",
                              ),
                              (this._needProcessing = 0),
                              this._pingProcessing(0));
                          } while (this._needProcessing);
                        },
                      },
                      {
                        key: "_doProcessingLoop",
                        value: function () {
                          if (this._actionQueue.length)
                            this._actionQueue.shift()();
                          else if (this._state == A) this._doProcessInitial();
                          else if (this._state == B)
                            this._doProcessSeekingEnd();
                          else if (this._state == F) this._doProcessLoaded();
                          else if (this._state == V) this._doProcessPreload();
                          else if (this._state == T) this._doProcessReady();
                          else if (this._state == x) this._doProcessSeeking();
                          else if (this._state == k) this._doProcessPlay();
                          else {
                            if (this._state != P)
                              throw Error(
                                "Unexpected OGVPlayer state " + this._state,
                              );
                            this._doProcessError();
                          }
                        },
                      },
                      {
                        key: "_doProcessInitial",
                        value: function () {
                          var e = this;
                          if (this._codec.loadedMetadata) {
                            if (!this._codec.hasVideo && !this._codec.hasAudio)
                              throw Error(
                                "No audio or video found, something is wrong",
                              );
                            this._codec.hasAudio &&
                              (this._audioInfo = this._codec.audioFormat),
                              this._codec.hasVideo &&
                                ((this._videoInfo = this._codec.videoFormat),
                                this._setupVideo()),
                              isNaN(this._codec.duration) ||
                                (this._duration = this._codec.duration),
                              null === this._duration &&
                              this._stream.seekable &&
                              "video/ogg" == this._detectedType
                                ? ((this._state = B),
                                  (this._lastSeenTimestamp = -1),
                                  this._codec.flush(function () {
                                    e._seekStream(
                                      Math.max(0, e._stream.length - 131072),
                                    );
                                  }))
                                : ((this._state = F), this._pingProcessing());
                          } else
                            this._codec.process(function (t) {
                              if (t) e._pingProcessing();
                              else {
                                if (e._streamEnded)
                                  throw Error(
                                    "end of file before headers found",
                                  );
                                e._log("reading more cause we are out of data"),
                                  e._readBytesAndWait();
                              }
                            });
                        },
                      },
                      {
                        key: "_doProcessSeekingEnd",
                        value: function () {
                          var e = this;
                          this._codec.frameReady
                            ? (this._log(
                                "saw frame with " + this._codec.frameTimestamp,
                              ),
                              (this._lastSeenTimestamp = Math.max(
                                this._lastSeenTimestamp,
                                this._codec.frameTimestamp,
                              )),
                              this._codec.discardFrame(function () {
                                e._pingProcessing();
                              }))
                            : this._codec.audioReady
                              ? (this._log(
                                  "saw audio with " +
                                    this._codec.audioTimestamp,
                                ),
                                (this._lastSeenTimestamp = Math.max(
                                  this._lastSeenTimestamp,
                                  this._codec.audioTimestamp,
                                )),
                                this._codec.discardAudio(function () {
                                  e._pingProcessing();
                                }))
                              : this._codec.process(function (t) {
                                  t
                                    ? e._pingProcessing()
                                    : e._stream.eof
                                      ? (e._log(
                                          "seek-duration: we are at the end: " +
                                            e._lastSeenTimestamp,
                                        ),
                                        e._lastSeenTimestamp > 0 &&
                                          (e._duration = e._lastSeenTimestamp),
                                        (e._state = F),
                                        e._codec.flush(function () {
                                          (e._streamEnded = !1),
                                            (e._dataEnded = !1),
                                            e._seekStream(0);
                                        }))
                                      : e._readBytesAndWait();
                                });
                        },
                      },
                      {
                        key: "_doProcessLoaded",
                        value: function () {
                          (this._state = V),
                            this._fireEventAsync("loadedmetadata"),
                            this._fireEventAsync("durationchange"),
                            this._codec.hasVideo &&
                              this._fireEventAsync("resize"),
                            this._pingProcessing(0);
                        },
                      },
                      {
                        key: "_doProcessPreload",
                        value: function () {
                          var e = this;
                          (!this._codec.frameReady && this._codec.hasVideo) ||
                          (!this._codec.audioReady && this._codec.hasAudio)
                            ? this._codec.process(function (t) {
                                t
                                  ? e._pingProcessing()
                                  : e._streamEnded
                                    ? (e._ended = !0)
                                    : e._readBytesAndWait();
                              })
                            : ((this._state = T),
                              this._fireEventAsync("loadeddata"),
                              this._pingProcessing());
                        },
                      },
                      {
                        key: "_doProcessReady",
                        value: function () {
                          var e = this;
                          if (
                            (this._log(
                              "initial seek to " + this._initialSeekTime,
                            ),
                            this._initialSeekTime > 0)
                          ) {
                            var t = this._initialSeekTime;
                            (this._initialSeekTime = 0),
                              this._log("initial seek to " + t),
                              this._doSeek(t);
                          } else if (this._paused)
                            this._log("paused while in ready");
                          else {
                            var n = function () {
                              e._log("finishStartPlaying"),
                                (e._state = k),
                                (e._lastFrameTimestamp = i()),
                                e._codec.hasAudio && e._audioFeeder
                                  ? (e._prebufferingAudio = !0)
                                  : e._startPlayback(),
                                e._pingProcessing(0),
                                e._fireEventAsync("play"),
                                e._fireEventAsync("playing");
                            };
                            !this._codec.hasAudio ||
                            this._audioFeeder ||
                            this._muted
                              ? n()
                              : (this._initAudioFeeder(),
                                this._audioFeeder.waitUntilReady(n));
                          }
                        },
                      },
                      {
                        key: "_doProcessSeeking",
                        value: function () {
                          if (this._seekState == O)
                            throw Error(
                              "seeking in invalid state (not seeking?)",
                            );
                          if (this._seekState == S)
                            this._doProcessBisectionSeek();
                          else if (this._seekState == R)
                            this._doProcessBisectionSeek();
                          else {
                            if (this._seekState != M)
                              throw Error(
                                "Invalid seek state " + this._seekState,
                              );
                            this._doProcessLinearSeeking();
                          }
                        },
                      },
                      {
                        key: "_doProcessPlay",
                        value: function () {
                          var e = this,
                            t = this._codec;
                          if (this._paused)
                            this._log("paused during playback; stopping loop");
                          else if (
                            (!t.hasAudio ||
                              t.audioReady ||
                              this._pendingAudio ||
                              this._dataEnded) &&
                            (!t.hasVideo ||
                              t.frameReady ||
                              this._pendingFrame ||
                              this._decodedFrames.length ||
                              this._dataEnded)
                          ) {
                            var n,
                              r,
                              i,
                              a = null,
                              u = 0,
                              o = !1,
                              s = 0;
                            if (
                              (t.hasAudio && this._audioFeeder
                                ? ((a = this._audioFeeder.getPlaybackState()),
                                  (u = this._getPlaybackTime(a)),
                                  (o =
                                    this._dataEnded &&
                                    0 == this._audioFeeder.durationBuffered),
                                  this._prebufferingAudio &&
                                    ((this._audioFeeder.durationBuffered >=
                                      2 * this._audioFeeder.bufferThreshold &&
                                      (!t.hasVideo ||
                                        this._decodedFrames.length >=
                                          this._framePipelineDepth)) ||
                                      this._dataEnded) &&
                                    (this._log(
                                      "prebuffering audio done; buffered to " +
                                        this._audioFeeder.durationBuffered,
                                    ),
                                    this._startPlayback(u),
                                    (this._prebufferingAudio = !1)),
                                  a.dropped != this._droppedAudio &&
                                    this._log(
                                      "dropped " +
                                        (a.dropped - this._droppedAudio),
                                    ),
                                  a.delayed != this._delayedAudio &&
                                    this._log(
                                      "delayed " +
                                        (a.delayed - this._delayedAudio),
                                    ),
                                  (this._droppedAudio = a.dropped),
                                  (this._delayedAudio = a.delayed),
                                  (n =
                                    this._audioFeeder.durationBuffered <=
                                    2 * this._audioFeeder.bufferThreshold) &&
                                    (this._codec.audioReady
                                      ? this._pendingAudio >=
                                          this._audioPipelineDepth &&
                                        (this._log(
                                          "audio decode disabled: " +
                                            this._pendingAudio +
                                            " packets in flight",
                                        ),
                                        (n = !1))
                                      : (n = !1)))
                                : ((u = this._getPlaybackTime()),
                                  (n =
                                    this._codec.audioReady &&
                                    this._audioEndTimestamp < u)),
                              this._codec.hasVideo)
                            ) {
                              (r = this._decodedFrames.length > 0),
                                (i =
                                  this._pendingFrame +
                                    this._decodedFrames.length <
                                    this._framePipelineDepth +
                                      this._frameParallelism &&
                                  this._codec.frameReady),
                                r &&
                                  ((s =
                                    1e3 *
                                    (this._decodedFrames[0].frameEndTimestamp -
                                      u)),
                                  (this._actualPerFrameTime =
                                    this._targetPerFrameTime - s));
                              var l = this._targetPerFrameTime;
                              if (this._prebufferingAudio)
                                i &&
                                  this._log(
                                    "decoding a frame during prebuffering",
                                  ),
                                  (r = !1);
                              else if (r && this._dataEnded && o)
                                this._log(
                                  "audio timeline ended? ready to draw frame",
                                );
                              else if (r && -s >= l) {
                                for (
                                  var d = -1, c = 0;
                                  c < this._decodedFrames.length - 1;
                                  c++
                                )
                                  this._decodedFrames[c].frameEndTimestamp <
                                    u && (d = c - 1);
                                if (d >= 0)
                                  for (; d-- >= 0; ) {
                                    this._lateFrames++;
                                    var f = this._decodedFrames.shift();
                                    this._log(
                                      "skipping already-decoded late frame at " +
                                        f.frameEndTimestamp,
                                    ),
                                      (s = 1e3 * (f.frameEndTimestamp - u)),
                                      (this._frameEndTimestamp =
                                        f.frameEndTimestamp),
                                      (this._actualPerFrameTime =
                                        this._targetPerFrameTime - s),
                                      this._framesProcessed++,
                                      (f.dropped = !0),
                                      this._doFrameComplete(f);
                                  }
                                var h = this._codec.nextKeyframeTimestamp,
                                  p =
                                    h -
                                    (this._targetPerFrameTime / 1e3) *
                                      (this._framePipelineDepth +
                                        this._pendingFrame);
                                if (
                                  h >= 0 &&
                                  h != this._codec.frameTimestamp &&
                                  u >= p
                                ) {
                                  this._log(
                                    "skipping late frame at " +
                                      this._decodedFrames[0].frameEndTimestamp +
                                      " vs " +
                                      u +
                                      ", expect to see keyframe at " +
                                      h,
                                  );
                                  for (
                                    var m = 0;
                                    m < this._decodedFrames.length;
                                    m++
                                  ) {
                                    var _ = this._decodedFrames[m];
                                    this._lateFrames++,
                                      this._framesProcessed++,
                                      (this._frameEndTimestamp =
                                        _.frameEndTimestamp),
                                      (s = 1e3 * (_.frameEndTimestamp - u)),
                                      (this._actualPerFrameTime =
                                        this._targetPerFrameTime - s),
                                      (_.dropped = !0),
                                      this._doFrameComplete(_);
                                  }
                                  this._decodedFrames = [];
                                  for (
                                    var v = 0;
                                    v < this._pendingFrames.length;
                                    v++
                                  ) {
                                    var g = this._pendingFrames[v];
                                    this._lateFrames++,
                                      this._framesProcessed++,
                                      (this._frameEndTimestamp =
                                        g.frameEndTimestamp),
                                      (s = 1e3 * (g.frameEndTimestamp - u)),
                                      (this._actualPerFrameTime =
                                        this._targetPerFrameTime - s),
                                      (g.dropped = !0),
                                      this._doFrameComplete(g);
                                  }
                                  for (
                                    this._pendingFrames = [],
                                      this._pendingFrame = 0;
                                    this._codec.frameReady &&
                                    this._codec.frameTimestamp < h;

                                  ) {
                                    var y = {
                                      frameEndTimestamp:
                                        this._codec.frameTimestamp,
                                      dropped: !0,
                                    };
                                    (s = 1e3 * (y.frameEndTimestamp - u)),
                                      (this._actualPerFrameTime =
                                        this._targetPerFrameTime - s),
                                      this._lateFrames++,
                                      this._codec.discardFrame(function () {}),
                                      this._framesProcessed++,
                                      this._doFrameComplete(y);
                                  }
                                  return void (
                                    this._isProcessing() ||
                                    this._pingProcessing()
                                  );
                                }
                              } else (r && s <= 4) || (r = !1);
                            }
                            if (i) {
                              this._log(
                                "play loop: ready to decode frame; thread depth: " +
                                  this._pendingFrame +
                                  ", have buffered: " +
                                  this._decodedFrames.length,
                              ),
                                0 == this._videoInfo.fps &&
                                  this._codec.frameTimestamp -
                                    this._frameEndTimestamp >
                                    0 &&
                                  (this._targetPerFrameTime =
                                    1e3 *
                                    (this._codec.frameTimestamp -
                                      this._frameEndTimestamp)),
                                (this._totalFrameTime +=
                                  this._targetPerFrameTime),
                                this._totalFrameCount++;
                              var D = (this._frameEndTimestamp =
                                this._codec.frameTimestamp);
                              this._pendingFrame++,
                                this._pendingFrames.push({
                                  frameEndTimestamp: D,
                                });
                              var b = this._pendingFrames,
                                C = !1,
                                E = this._time(function () {
                                  e._codec.decodeFrame(function (t) {
                                    b === e._pendingFrames
                                      ? (e._log(
                                          "play loop callback: decoded frame",
                                        ),
                                        e._pendingFrame--,
                                        e._pendingFrames.shift(),
                                        t
                                          ? e._decodedFrames.push({
                                              yCbCrBuffer: e._codec.frameBuffer,
                                              videoCpuTime:
                                                e._codec.videoCpuTime,
                                              frameEndTimestamp: D,
                                            })
                                          : e._log(
                                              "Bad video packet or something",
                                            ),
                                        e._codec.process(function () {
                                          e._isProcessing() ||
                                            e._pingProcessing(C ? void 0 : 0);
                                        }))
                                      : e._log(
                                          "play loop callback after flush, discarding",
                                        );
                                  });
                                });
                              this._pendingFrame &&
                                ((C = !0),
                                (this._proxyTime += E),
                                this._pingProcessing(),
                                this._dataEnded && this._codec.sync());
                            } else if (n) {
                              this._log(
                                "play loop: ready for audio; depth: " +
                                  this._pendingAudio,
                              ),
                                this._pendingAudio++;
                              var w = this._codec.audioTimestamp,
                                A = this._time(function () {
                                  e._codec.decodeAudio(function (t) {
                                    if (
                                      (e._pendingAudio--,
                                      e._log(
                                        "play loop callback: decoded audio",
                                      ),
                                      (e._audioEndTimestamp = w),
                                      t)
                                    ) {
                                      var n = e._codec.audioBuffer;
                                      if (
                                        n &&
                                        ((e._bufferTime += e._time(function () {
                                          e._audioFeeder &&
                                            e._audioFeeder.bufferData(n);
                                        })),
                                        !e._codec.hasVideo)
                                      ) {
                                        e._framesProcessed++;
                                        var r = {
                                          frameEndTimestamp:
                                            e._audioEndTimestamp,
                                        };
                                        e._doFrameComplete(r);
                                      }
                                    }
                                    e._isProcessing() || e._pingProcessing();
                                  });
                                });
                              this._pendingAudio &&
                                ((this._proxyTime += A),
                                this._codec.audioReady
                                  ? this._pingProcessing()
                                  : this._doProcessPlayDemux());
                            } else if (r) {
                              this._log("play loop: ready to draw frame"),
                                this._nextFrameTimer &&
                                  (clearTimeout(this._nextFrameTimer),
                                  (this._nextFrameTimer = null)),
                                this._thumbnail &&
                                  (this.removeChild(this._thumbnail),
                                  (this._thumbnail = null));
                              var B = this._decodedFrames.shift();
                              (this._currentVideoCpuTime = B.videoCpuTime),
                                (this._drawingTime += this._time(function () {
                                  e._drawFrame(B.yCbCrBuffer);
                                })),
                                this._framesProcessed++,
                                this._doFrameComplete(B),
                                this._pingProcessing();
                            } else if (
                              !this._decodedFrames.length ||
                              this._nextFrameTimer ||
                              this._prebufferingAudio
                            )
                              if (
                                this._dataEnded &&
                                !(
                                  this._pendingAudio ||
                                  this._pendingFrame ||
                                  this._decodedFrames.length
                                )
                              ) {
                                this._log(
                                  "play loop: playback reached end of data " +
                                    [
                                      this._pendingAudio,
                                      this._pendingFrame,
                                      this._decodedFrames.length,
                                    ],
                                );
                                var F = 0;
                                this._codec.hasAudio &&
                                  this._audioFeeder &&
                                  (F =
                                    1e3 * this._audioFeeder.durationBuffered),
                                  F > 0
                                    ? (this._log(
                                        "play loop: ending pending " +
                                          F +
                                          " ms",
                                      ),
                                      this._pingProcessing(Math.max(0, F)))
                                    : (this._log(
                                        "play loop: ENDING NOW: playback time " +
                                          this._getPlaybackTime() +
                                          "; frameEndTimestamp: " +
                                          this._frameEndTimestamp,
                                      ),
                                      this._stopPlayback(),
                                      (this._prebufferingAudio = !1),
                                      (this._initialPlaybackOffset = Math.max(
                                        this._audioEndTimestamp,
                                        this._frameEndTimestamp,
                                      )),
                                      (this._ended = !0),
                                      (this._paused = !0),
                                      this._fireEventAsync("pause"),
                                      this._fireEventAsync("ended"));
                              } else
                                this._prebufferingAudio &&
                                ((t.hasVideo && !t.frameReady) ||
                                  (t.hasAudio && !t.audioReady))
                                  ? (this._log(
                                      "play loop: prebuffering demuxing",
                                    ),
                                    this._doProcessPlayDemux())
                                  : this._log(
                                      "play loop: waiting on async/timers",
                                    );
                            else {
                              var V = s;
                              this._log(
                                "play loop: setting a timer for drawing " + V,
                              ),
                                (this._nextFrameTimer = setTimeout(function () {
                                  (e._nextFrameTimer = null),
                                    e._pingProcessing();
                                }, V));
                            }
                          } else
                            this._log("play loop: demuxing"),
                              this._doProcessPlayDemux();
                        },
                      },
                      {
                        key: "_doProcessPlayDemux",
                        value: function () {
                          var e = this,
                            t = this._codec.frameReady,
                            n = this._codec.audioReady;
                          this._codec.process(function (r) {
                            (e._codec.frameReady && !t) ||
                            (e._codec.audioReady && !n)
                              ? (e._log("demuxer has packets"),
                                e._pingProcessing())
                              : r
                                ? (e._log(
                                    "demuxer processing to find more packets",
                                  ),
                                  e._pingProcessing())
                                : (e._log("demuxer ran out of data"),
                                  e._streamEnded
                                    ? (e._log(
                                        "demuxer reached end of data stream",
                                      ),
                                      (e._dataEnded = !0),
                                      e._pingProcessing())
                                    : (e._log("demuxer loading more data"),
                                      e._readBytesAndWait()));
                          });
                        },
                      },
                      { key: "_doProcessError", value: function () {} },
                      {
                        key: "_isProcessing",
                        value: function () {
                          return (
                            (this._stream &&
                              (this._stream.buffering ||
                                this._stream.seeking)) ||
                            (this._codec && this._codec.processing)
                          );
                        },
                      },
                      {
                        key: "_readBytesAndWait",
                        value: function () {
                          var e = this;
                          this._stream.buffering || this._stream.seeking
                            ? this._log("readBytesAndWait during i/o")
                            : this._stream
                                .read(32768)
                                .then(function (t) {
                                  e._log("got input " + [t.byteLength]),
                                    t.byteLength &&
                                      e._actionQueue.push(function () {
                                        e._codec.receiveInput(t, function () {
                                          e._pingProcessing();
                                        });
                                      }),
                                    e._stream.eof &&
                                      (e._log("stream is at end!"),
                                      (e._streamEnded = !0)),
                                    e._isProcessing() || e._pingProcessing();
                                })
                                .catch(function (t) {
                                  e._onStreamError(t);
                                });
                        },
                      },
                      {
                        key: "_pingProcessing",
                        value: function () {
                          var e = this,
                            t =
                              arguments.length > 0 && void 0 !== arguments[0]
                                ? arguments[0]
                                : -1;
                          this._stream && this._stream.waiting
                            ? this._log("waiting on input")
                            : (this._nextProcessingTimer &&
                                (this._log("canceling old processing timer"),
                                clearTimeout(this._nextProcessingTimer),
                                (this._nextProcessingTimer = null)),
                              t > -1 / 256
                                ? (this._nextProcessingTimer = setTimeout(
                                    function () {
                                      e._pingProcessing();
                                    },
                                    t,
                                  ))
                                : this._depth
                                  ? (this._needProcessing = !0)
                                  : this._doProcessing());
                        },
                      },
                      {
                        key: "_startProcessingVideo",
                        value: function (e) {
                          var t = this;
                          if (!this._started && !this._codec) {
                            (this._framesProcessed = 0),
                              (this._bufferTime = 0),
                              (this._drawingTime = 0),
                              (this._proxyTime = 0),
                              (this._started = !0),
                              (this._ended = !1);
                            var n = {
                              base: this._options.base,
                              worker: this._enableWorker,
                              threading: this._enableThreading,
                              simd: this._enableSIMD,
                            };
                            this._detectedType && (n.type = this._detectedType),
                              (this._codec = new b.default(n)),
                              (this._lastVideoCpuTime = 0),
                              (this._lastAudioCpuTime = 0),
                              (this._lastDemuxerCpuTime = 0),
                              (this._lastBufferTime = 0),
                              (this._lastDrawingTime = 0),
                              (this._lastProxyTime = 0),
                              (this._lastFrameVideoCpuTime = 0),
                              (this._lastFrameAudioCpuTime = 0),
                              (this._lastFrameDemuxerCpuTime = 0),
                              (this._lastFrameBufferTime = 0),
                              (this._lastFrameProxyTime = 0),
                              (this._lastFrameDrawingTime = 0),
                              (this._currentVideoCpuTime = 0),
                              (this._codec.onseek = function (e) {
                                (t._didSeek = !0),
                                  t._stream && t._seekStream(e);
                              }),
                              this._codec.init(function () {
                                t._codec.receiveInput(e, function () {
                                  t._readBytesAndWait();
                                });
                              });
                          }
                        },
                      },
                      {
                        key: "_loadCodec",
                        value: function (e) {
                          var t = this;
                          this._stream.read(1024).then(function (n) {
                            var r = new Uint8Array(n);
                            r.length > 4 &&
                            79 == r[0] &&
                            103 == r[1] &&
                            103 == r[2] &&
                            83 == r[3]
                              ? (t._detectedType = "video/ogg")
                              : r.length > 4 &&
                                  26 == r[0] &&
                                  69 == r[1] &&
                                  223 == r[2] &&
                                  163 == r[3]
                                ? (t._detectedType = "video/webm")
                                : (t._detectedType = "video/ogg"),
                              e(n);
                          });
                        },
                      },
                      {
                        key: "_prepForLoad",
                        value: function (e) {
                          var t = this;
                          this._stopVideo(),
                            (this._currentSrc = ""),
                            (this._loading = !0),
                            this._actionQueue.push(function () {
                              e && "none" === t.preload
                                ? (t._loading = !1)
                                : (t._options.stream
                                    ? (t._stream = t._options.stream)
                                    : (t._stream = new h.default({
                                        url: t.src,
                                        cacheSize: 0x1000000,
                                        progressive: !1,
                                      })),
                                  t._stream
                                    .load()
                                    .then(function () {
                                      (t._loading = !1),
                                        (t._currentSrc = t.src),
                                        (t._byteLength = t._stream.seekable
                                          ? t._stream.length
                                          : 0);
                                      var e =
                                        t._stream.headers["x-content-duration"];
                                      "string" == typeof e &&
                                        (t._duration = parseFloat(e)),
                                        t._loadCodec(function (e) {
                                          t._startProcessingVideo(e);
                                        });
                                    })
                                    .catch(function (e) {
                                      t._onStreamError(e);
                                    }));
                            }),
                            this._pingProcessing(0);
                        },
                      },
                      {
                        key: "load",
                        value: function () {
                          this._prepForLoad();
                        },
                      },
                      {
                        key: "canPlayType",
                        value: function (e) {
                          var t = new y.default(e);
                          function n(e) {
                            if (t.codecs) {
                              var n = 0,
                                r = 0;
                              return (
                                t.codecs.forEach(function (t) {
                                  e.indexOf(t) >= 0 ? n++ : r++;
                                }),
                                0 === n || r > 0 ? "" : "probably"
                              );
                            }
                            return "maybe";
                          }
                          return "ogg" !== t.minor ||
                            ("audio" !== t.major &&
                              "video" !== t.major &&
                              "application" !== t.major)
                            ? "webm" !== t.minor ||
                              ("audio" !== t.major && "video" !== t.major)
                              ? ""
                              : n(["vorbis", "opus", "vp8", "vp9"])
                            : n(["vorbis", "opus", "theora"]);
                        },
                      },
                      {
                        key: "play",
                        value: function () {
                          this._muted ||
                            this._options.audioContext ||
                            r.initSharedAudioContext(),
                            this._paused &&
                              ((this._startedPlaybackInDocument =
                                document.body.contains(this)),
                              (this._paused = !1),
                              this._state == x ||
                                (this._started &&
                                this._codec &&
                                this._codec.loadedMetadata
                                  ? (this._ended &&
                                    this._stream &&
                                    this._byteLength
                                      ? (this._log(
                                          ".play() starting over after end",
                                        ),
                                        this._seek(0))
                                      : this._log(
                                          ".play() while already started",
                                        ),
                                    (this._state = T),
                                    this._isProcessing() ||
                                      this._pingProcessing())
                                  : this._loading
                                    ? this._log(".play() while loading")
                                    : (this._log(".play() before started"),
                                      this._stream || this.load())));
                        },
                      },
                      {
                        key: "getPlaybackStats",
                        value: function () {
                          return {
                            targetPerFrameTime: this._targetPerFrameTime,
                            framesProcessed: this._framesProcessed,
                            videoBytes: this._codec
                              ? this._codec.videoBytes
                              : 0,
                            audioBytes: this._codec
                              ? this._codec.audioBytes
                              : 0,
                            playTime: this._playTime,
                            demuxingTime: this._codec
                              ? this._codec.demuxerCpuTime -
                                this._lastDemuxerCpuTime
                              : 0,
                            videoDecodingTime: this._codec
                              ? this._codec.videoCpuTime -
                                this._lastVideoCpuTime
                              : 0,
                            audioDecodingTime: this._codec
                              ? this._codec.audioCpuTime -
                                this._lastAudioCpuTime
                              : 0,
                            bufferTime: this._bufferTime - this._lastBufferTime,
                            drawingTime:
                              this._drawingTime - this._lastDrawingTime,
                            proxyTime: this._proxyTime - this._lastProxyTime,
                            droppedAudio: this._droppedAudio,
                            delayedAudio: this._delayedAudio,
                            jitter: this._totalJitter / this._framesProcessed,
                            lateFrames: this._lateFrames,
                          };
                        },
                      },
                      {
                        key: "resetPlaybackStats",
                        value: function () {
                          (this._framesProcessed = 0),
                            (this._playTime = 0),
                            this._codec &&
                              ((this._lastDemuxerCpuTime =
                                this._codec.demuxerCpuTime),
                              (this._lastVideoCpuTime =
                                this._codec.videoCpuTime),
                              (this._lastAudioCpuTime =
                                this._codec.audioCpuTime),
                              (this._codec.videoBytes = 0),
                              (this._codec.audioBytes = 0)),
                            (this._lastBufferTime = this._bufferTime),
                            (this._lastDrawingTime = this._drawingTime),
                            (this._lastProxyTime = this._proxyTime),
                            (this._totalJitter = 0),
                            (this._totalFrameTime = 0),
                            (this._totalFrameCount = 0);
                        },
                      },
                      {
                        key: "getVideoFrameSink",
                        value: function () {
                          return this._frameSink;
                        },
                      },
                      {
                        key: "getCanvas",
                        value: function () {
                          return this._canvas;
                        },
                      },
                      {
                        key: "getVideo",
                        value: function () {
                          return null;
                        },
                      },
                      {
                        key: "pause",
                        value: function () {
                          this._paused ||
                            (this._nextProcessingTimer &&
                              (clearTimeout(this._nextProcessingTimer),
                              (this._nextProcessingTimer = null)),
                            this._stopPlayback(),
                            (this._prebufferingAudio = !1),
                            (this._paused = !0),
                            this._fireEvent("pause"));
                        },
                      },
                      {
                        key: "stop",
                        value: function () {
                          this._stopVideo(), (this._paused = !0);
                        },
                      },
                      {
                        key: "fastSeek",
                        value: function (e) {
                          this._seek(+e, N);
                        },
                      },
                    ],
                    [
                      {
                        key: "initSharedAudioContext",
                        value: function () {
                          var e = document.createElement("audio");
                          (e.src = C.default),
                            e.play(),
                            p.default.initSharedAudioContext();
                        },
                      },
                    ],
                  ),
                  r
                );
              })(L);
              (0, v.default)(I, w),
                (I.instanceCount = 0),
                (I.styleManager = new (function () {
                  var e = document.createElement("style");
                  (e.type = "text/css"),
                    (e.textContent =
                      "ogvjs { display: inline-block; position: relative; -webkit-user-select: none; -webkit-tap-highlight-color: rgba(0,0,0,0); "),
                    document.head.appendChild(e);
                  var t = e.sheet;
                  this.appendRule = function (e, n) {
                    var r = [];
                    for (var i in n)
                      n.hasOwnProperty(i) && r.push(i + ":" + n[i]);
                    var a = e + "{" + r.join(";") + "}";
                    t.insertRule(a, t.cssRules.length - 1);
                  };
                })()),
                (t.default = I);
            },
            580: (e, t, n) => {
              "use strict";
              var r = n(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var i = r(n(575)),
                a = r(n(913));
              t.default = function (e) {
                function t(n, r, a) {
                  var u = this;
                  for (var o in ((0, i.default)(this, t),
                  (a = a || {}),
                  (this.worker = n),
                  (this.transferables = (function () {
                    var e = new ArrayBuffer(1024),
                      t = new Uint8Array(e);
                    try {
                      return (
                        n.postMessage({ action: "transferTest", bytes: t }, [
                          e,
                        ]),
                        !e.byteLength
                      );
                    } catch (e) {
                      return !1;
                    }
                  })()),
                  e))
                    e.hasOwnProperty(o) && (this[o] = e[o]);
                  (this.processingQueue = 0),
                    Object.defineProperty(this, "processing", {
                      get: function () {
                        return this.processingQueue > 0;
                      },
                    }),
                    (this.messageCount = 0),
                    (this.pendingCallbacks = {}),
                    this.worker.addEventListener("message", function (e) {
                      u.handleMessage(e);
                    }),
                    this.proxy("construct", [r, a], function () {});
                }
                return (
                  (0, a.default)(t, [
                    {
                      key: "proxy",
                      value: function (e, t, n) {
                        var r =
                          arguments.length > 3 && void 0 !== arguments[3]
                            ? arguments[3]
                            : [];
                        if (!this.worker)
                          throw (
                            'Tried to call "' +
                            e +
                            '" method on closed proxy object'
                          );
                        var i = "callback-" + ++this.messageCount + "-" + e;
                        n && (this.pendingCallbacks[i] = n);
                        var a = { action: e, callbackId: i, args: t || [] };
                        this.processingQueue++,
                          this.transferables
                            ? this.worker.postMessage(a, r)
                            : this.worker.postMessage(a);
                      },
                    },
                    {
                      key: "terminate",
                      value: function () {
                        this.worker &&
                          (this.worker.terminate(),
                          (this.worker = null),
                          (this.processingQueue = 0),
                          (this.pendingCallbacks = {}));
                      },
                    },
                    {
                      key: "handleMessage",
                      value: function (e) {
                        if (
                          (this.processingQueue--, "callback" === e.data.action)
                        ) {
                          var t = e.data,
                            n = t.callbackId,
                            r = t.args,
                            i = this.pendingCallbacks[n];
                          if (t.props)
                            for (var a in t.props)
                              t.props.hasOwnProperty(a) &&
                                (this[a] = t.props[a]);
                          i &&
                            (delete this.pendingCallbacks[n], i.apply(this, r));
                        }
                      },
                    },
                  ]),
                  t
                );
              };
            },
            168: (e, t, n) => {
              "use strict";
              var r = n(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var i = r(n(575)),
                a = r(n(913));
              t.default = (function () {
                function e(t) {
                  (0, i.default)(this, e),
                    (this._ranges = t),
                    (this.length = t.length);
                }
                return (
                  (0, a.default)(e, [
                    {
                      key: "start",
                      value: function (e) {
                        if (e < 0 || e > this.length || e !== (0 | e))
                          throw RangeError("Invalid index");
                        return this._ranges[e][0];
                      },
                    },
                    {
                      key: "end",
                      value: function (e) {
                        if (e < 0 || e > this.length || e !== (0 | e))
                          throw RangeError("Invalid index");
                        return this._ranges[e][1];
                      },
                    },
                  ]),
                  e
                );
              })();
            },
            625: (e, t, n) => {
              "use strict";
              var r = n(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var i = r(n(575)),
                a = r(n(913)),
                u = r(n(964));
              function o(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
                return r;
              }
              t.default = (function () {
                function e(t) {
                  return (
                    (0, i.default)(this, e),
                    (this.options = t || {}),
                    (this.demuxer = null),
                    (this.videoDecoder = null),
                    (this.audioDecoder = null),
                    (this.flushIter = 0),
                    (this.loadedMetadata = !1),
                    (this.processing = !1),
                    Object.defineProperties(this, {
                      duration: {
                        get: function () {
                          return this.loadedMetadata
                            ? this.demuxer.duration
                            : NaN;
                        },
                      },
                      hasAudio: {
                        get: function () {
                          return this.loadedMetadata && !!this.audioDecoder;
                        },
                      },
                      audioReady: {
                        get: function () {
                          return this.hasAudio && this.demuxer.audioReady;
                        },
                      },
                      audioTimestamp: {
                        get: function () {
                          return this.demuxer.audioTimestamp;
                        },
                      },
                      audioFormat: {
                        get: function () {
                          return this.hasAudio
                            ? this.audioDecoder.audioFormat
                            : null;
                        },
                      },
                      audioBuffer: {
                        get: function () {
                          return this.hasAudio
                            ? this.audioDecoder.audioBuffer
                            : null;
                        },
                      },
                      hasVideo: {
                        get: function () {
                          return this.loadedMetadata && !!this.videoDecoder;
                        },
                      },
                      frameReady: {
                        get: function () {
                          return this.hasVideo && this.demuxer.frameReady;
                        },
                      },
                      frameTimestamp: {
                        get: function () {
                          return this.demuxer.frameTimestamp;
                        },
                      },
                      keyframeTimestamp: {
                        get: function () {
                          return this.demuxer.keyframeTimestamp;
                        },
                      },
                      nextKeyframeTimestamp: {
                        get: function () {
                          return this.demuxer.nextKeyframeTimestamp;
                        },
                      },
                      videoFormat: {
                        get: function () {
                          return this.hasVideo
                            ? this.videoDecoder.videoFormat
                            : null;
                        },
                      },
                      frameBuffer: {
                        get: function () {
                          return this.hasVideo
                            ? this.videoDecoder.frameBuffer
                            : null;
                        },
                      },
                      seekable: {
                        get: function () {
                          return this.demuxer.seekable;
                        },
                      },
                      demuxerCpuTime: {
                        get: function () {
                          return this.demuxer ? this.demuxer.cpuTime : 0;
                        },
                      },
                      audioCpuTime: {
                        get: function () {
                          return this.audioDecoder
                            ? this.audioDecoder.cpuTime
                            : 0;
                        },
                      },
                      videoCpuTime: {
                        get: function () {
                          return this.videoDecoder
                            ? this.videoDecoder.cpuTime
                            : 0;
                        },
                      },
                    }),
                    (this.loadedDemuxerMetadata = !1),
                    (this.loadedAudioMetadata = !1),
                    (this.loadedVideoMetadata = !1),
                    (this.loadedAllMetadata = !1),
                    (this.onseek = null),
                    (this.videoBytes = 0),
                    (this.audioBytes = 0),
                    this
                  );
                }
                return (
                  (0, a.default)(e, [
                    {
                      key: "flushSafe",
                      value: function (e) {
                        var t = this,
                          n = this.flushIter;
                        return function (r) {
                          t.flushIter <= n && e(r);
                        };
                      },
                    },
                    {
                      key: "init",
                      value: function (e) {
                        var t,
                          n = this;
                        (this.processing = !0),
                          (t =
                            "video/webm" === this.options.type ||
                            "audio/webm" === this.options.type
                              ? "OGVDemuxerWebMW"
                              : "OGVDemuxerOggW"),
                          u.default.loadClass(t, function (t) {
                            t().then(function (t) {
                              (n.demuxer = t),
                                (t.onseek = function (e) {
                                  n.onseek && n.onseek(e);
                                }),
                                t.init(function () {
                                  (n.processing = !1), e();
                                });
                            });
                          });
                      },
                    },
                    {
                      key: "close",
                      value: function () {
                        this.demuxer &&
                          (this.demuxer.close(), (this.demuxer = null)),
                          this.videoDecoder &&
                            (this.videoDecoder.close(),
                            (this.videoDecoder = null)),
                          this.audioDecoder &&
                            (this.audioDecoder.close(),
                            (this.audioDecoder = null));
                      },
                    },
                    {
                      key: "receiveInput",
                      value: function (e, t) {
                        this.demuxer.receiveInput(e, t);
                      },
                    },
                    {
                      key: "process",
                      value: function (e) {
                        var t = this;
                        if (this.processing)
                          throw Error(
                            "reentrancy fail on OGVWrapperCodec.process",
                          );
                        this.processing = !0;
                        var n = function (n) {
                            (t.processing = !1), e(n);
                          },
                          r = function () {
                            t.demuxer.process(n);
                          };
                        this.demuxer.loadedMetadata &&
                        !this.loadedDemuxerMetadata
                          ? this.loadAudioCodec(function () {
                              t.loadVideoCodec(function () {
                                (t.loadedDemuxerMetadata = !0),
                                  (t.loadedAudioMetadata = !t.audioDecoder),
                                  (t.loadedVideoMetadata = !t.videoDecoder),
                                  (t.loadedAllMetadata =
                                    t.loadedAudioMetadata &&
                                    t.loadedVideoMetadata),
                                  n(!0);
                              });
                            })
                          : this.loadedDemuxerMetadata &&
                              !this.loadedAudioMetadata
                            ? this.audioDecoder.loadedMetadata
                              ? ((this.loadedAudioMetadata = !0),
                                (this.loadedAllMetadata =
                                  this.loadedAudioMetadata &&
                                  this.loadedVideoMetadata),
                                n(!0))
                              : this.demuxer.audioReady
                                ? this.demuxer.dequeueAudioPacket(
                                    function (e, r) {
                                      (t.audioBytes += e.byteLength),
                                        t.audioDecoder.processHeader(
                                          e,
                                          function (e) {
                                            n(!0);
                                          },
                                        );
                                    },
                                  )
                                : r()
                            : this.loadedAudioMetadata &&
                                !this.loadedVideoMetadata
                              ? this.videoDecoder.loadedMetadata
                                ? ((this.loadedVideoMetadata = !0),
                                  (this.loadedAllMetadata =
                                    this.loadedAudioMetadata &&
                                    this.loadedVideoMetadata),
                                  n(!0))
                                : this.demuxer.frameReady
                                  ? ((this.processing = !0),
                                    this.demuxer.dequeueVideoPacket(
                                      function (e) {
                                        (t.videoBytes += e.byteLength),
                                          t.videoDecoder.processHeader(
                                            e,
                                            function () {
                                              n(!0);
                                            },
                                          );
                                      },
                                    ))
                                  : r()
                              : this.loadedVideoMetadata &&
                                  !this.loadedMetadata &&
                                  this.loadedAllMetadata
                                ? ((this.loadedMetadata = !0), n(!0))
                                : this.loadedMetadata &&
                                    (!this.hasAudio ||
                                      this.demuxer.audioReady) &&
                                    (!this.hasVideo || this.demuxer.frameReady)
                                  ? n(!0)
                                  : r();
                      },
                    },
                    {
                      key: "decodeFrame",
                      value: function (e) {
                        var t = this,
                          n = this.flushSafe(e),
                          r = this.frameTimestamp,
                          i = this.keyframeTimestamp;
                        this.demuxer.dequeueVideoPacket(function (e) {
                          (t.videoBytes += e.byteLength),
                            t.videoDecoder.processFrame(e, function (e) {
                              var a = t.videoDecoder.frameBuffer;
                              a &&
                                ((a.timestamp = r), (a.keyframeTimestamp = i)),
                                n(e);
                            });
                        });
                      },
                    },
                    {
                      key: "decodeAudio",
                      value: function (e) {
                        var t = this,
                          n = this.flushSafe(e);
                        this.demuxer.dequeueAudioPacket(function (e, r) {
                          (t.audioBytes += e.byteLength),
                            t.audioDecoder.processAudio(e, function (e) {
                              if (r) {
                                var i,
                                  a = [],
                                  u = (function (e) {
                                    var t =
                                      ("u" > typeof Symbol &&
                                        e[Symbol.iterator]) ||
                                      e["@@iterator"];
                                    if (!t) {
                                      if (
                                        Array.isArray(e) ||
                                        (t = (function (e) {
                                          if (e) {
                                            if ("string" == typeof e)
                                              return o(e, void 0);
                                            var t = Object.prototype.toString
                                              .call(e)
                                              .slice(8, -1);
                                            if (
                                              ("Object" === t &&
                                                e.constructor &&
                                                (t = e.constructor.name),
                                              "Map" === t || "Set" === t)
                                            )
                                              return Array.from(e);
                                            if (
                                              "Arguments" === t ||
                                              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(
                                                t,
                                              )
                                            )
                                              return o(e, void 0);
                                          }
                                        })(e))
                                      ) {
                                        t && (e = t);
                                        var n = 0,
                                          r = function () {};
                                        return {
                                          s: r,
                                          n: function () {
                                            return n >= e.length
                                              ? { done: !0 }
                                              : { done: !1, value: e[n++] };
                                          },
                                          e: function (e) {
                                            throw e;
                                          },
                                          f: r,
                                        };
                                      }
                                      throw TypeError(
                                        "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.",
                                      );
                                    }
                                    var i,
                                      a = !0,
                                      u = !1;
                                    return {
                                      s: function () {
                                        t = t.call(e);
                                      },
                                      n: function () {
                                        var e = t.next();
                                        return (a = e.done), e;
                                      },
                                      e: function (e) {
                                        (u = !0), (i = e);
                                      },
                                      f: function () {
                                        try {
                                          a || null == t.return || t.return();
                                        } finally {
                                          if (u) throw i;
                                        }
                                      },
                                    };
                                  })(t.audioDecoder.audioBuffer);
                                try {
                                  for (u.s(); !(i = u.n()).done; ) {
                                    var s = i.value,
                                      l = Math.round(
                                        (r * t.audioFormat.rate) / 1e9,
                                      );
                                    l > 0
                                      ? a.push(
                                          s.subarray(
                                            0,
                                            s.length - Math.min(l, s.length),
                                          ),
                                        )
                                      : a.push(
                                          s.subarray(
                                            Math.min(Math.abs(l), s.length),
                                            s.length,
                                          ),
                                        );
                                  }
                                } catch (e) {
                                  u.e(e);
                                } finally {
                                  u.f();
                                }
                                t.audioDecoder.audioBuffer = a;
                              }
                              return n(e);
                            });
                        });
                      },
                    },
                    {
                      key: "discardFrame",
                      value: function (e) {
                        var t = this;
                        this.demuxer.dequeueVideoPacket(function (n) {
                          (t.videoBytes += n.byteLength), e();
                        });
                      },
                    },
                    {
                      key: "discardAudio",
                      value: function (e) {
                        var t = this;
                        this.demuxer.dequeueAudioPacket(function (n, r) {
                          (t.audioBytes += n.byteLength), e();
                        });
                      },
                    },
                    {
                      key: "flush",
                      value: function (e) {
                        this.flushIter++, this.demuxer.flush(e);
                      },
                    },
                    {
                      key: "sync",
                      value: function () {
                        this.videoDecoder && this.videoDecoder.sync();
                      },
                    },
                    {
                      key: "recycleFrame",
                      value: function (e) {
                        this.videoDecoder && this.videoDecoder.recycleFrame(e);
                      },
                    },
                    {
                      key: "getKeypointOffset",
                      value: function (e, t) {
                        this.demuxer.getKeypointOffset(e, t);
                      },
                    },
                    {
                      key: "seekToKeypoint",
                      value: function (e, t) {
                        this.demuxer.seekToKeypoint(e, this.flushSafe(t));
                      },
                    },
                    {
                      key: "loadAudioCodec",
                      value: function (e) {
                        var t = this;
                        if (this.demuxer.audioCodec) {
                          var n = {
                            vorbis: "OGVDecoderAudioVorbisW",
                            opus: "OGVDecoderAudioOpusW",
                          }[this.demuxer.audioCodec];
                          (this.processing = !0),
                            u.default.loadClass(
                              n,
                              function (n) {
                                var r = {};
                                t.demuxer.audioFormat &&
                                  (r.audioFormat = t.demuxer.audioFormat),
                                  n(r).then(function (n) {
                                    (t.audioDecoder = n),
                                      n.init(function () {
                                        (t.loadedAudioMetadata =
                                          n.loadedMetadata),
                                          (t.processing = !1),
                                          e();
                                      });
                                  });
                              },
                              { worker: this.options.worker },
                            );
                        } else e();
                      },
                    },
                    {
                      key: "loadVideoCodec",
                      value: function (e) {
                        var t = this;
                        if (this.demuxer.videoCodec) {
                          var n = !!this.options.simd,
                            r = !!this.options.threading,
                            i = {
                              theora: "OGVDecoderVideoTheoraW",
                              vp8: r
                                ? "OGVDecoderVideoVP8MTW"
                                : "OGVDecoderVideoVP8W",
                              vp9: r
                                ? n
                                  ? "OGVDecoderVideoVP9SIMDMTW"
                                  : "OGVDecoderVideoVP9MTW"
                                : n
                                  ? "OGVDecoderVideoVP9SIMDW"
                                  : "OGVDecoderVideoVP9W",
                              av1: r
                                ? n
                                  ? "OGVDecoderVideoAV1SIMDMTW"
                                  : "OGVDecoderVideoAV1MTW"
                                : n
                                  ? "OGVDecoderVideoAV1SIMDW"
                                  : "OGVDecoderVideoAV1W",
                            }[this.demuxer.videoCodec];
                          (this.processing = !0),
                            u.default.loadClass(
                              i,
                              function (n) {
                                var i = {};
                                t.demuxer.videoFormat &&
                                  (i.videoFormat = t.demuxer.videoFormat),
                                  r && delete window.ENVIRONMENT_IS_PTHREAD,
                                  n(i).then(function (n) {
                                    (t.videoDecoder = n),
                                      n.init(function () {
                                        (t.loadedVideoMetadata =
                                          n.loadedMetadata),
                                          (t.processing = !1),
                                          e();
                                      });
                                  });
                              },
                              {
                                worker:
                                  this.options.worker &&
                                  !this.options.threading,
                              },
                            );
                        } else e();
                      },
                    },
                  ]),
                  e
                );
              })();
            },
            539: (e, t, n) => {
              "use strict";
              var r = n(318);
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0);
              var i = r(n(8)),
                a = r(n(575)),
                u = r(n(913));
              t.default = new ((function () {
                function e() {
                  (0, a.default)(this, e),
                    (this.tested = !1),
                    (this.testResult = void 0);
                }
                return (
                  (0, u.default)(e, [
                    {
                      key: "wasmSupported",
                      value: function () {
                        if (!this.tested) {
                          try {
                            var e, t;
                            "object" ===
                            ("u" < typeof WebAssembly
                              ? "undefined"
                              : (0, i.default)(WebAssembly))
                              ? (this.testResult =
                                  ((e = new Uint8Array([
                                    0, 97, 115, 109, 1, 0, 0, 0, 1, 6, 1, 96, 1,
                                    127, 1, 127, 3, 2, 1, 0, 5, 3, 1, 0, 1, 7,
                                    8, 1, 4, 116, 101, 115, 116, 0, 0, 10, 16,
                                    1, 14, 0, 32, 0, 65, 1, 54, 2, 0, 32, 0, 40,
                                    2, 0, 11,
                                  ])),
                                  (t = new WebAssembly.Module(e)),
                                  0 !==
                                    new WebAssembly.Instance(
                                      t,
                                      {},
                                    ).exports.test(4)))
                              : (this.testResult = !1);
                          } catch (e) {
                            console.log(
                              "Exception while testing WebAssembly",
                              e,
                            ),
                              (this.testResult = !1);
                          }
                          this.tested = !0;
                        }
                        return this.testResult;
                      },
                    },
                  ]),
                  e
                );
              })())();
            },
            309: (e, t) => {
              "use strict";
              Object.defineProperty(t, "__esModule", { value: !0 }),
                (t.default = void 0),
                (t.default = function (e, t) {
                  for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]);
                });
            },
            431: (e, t, n) => {
              "use strict";
              var r = (function () {
                  function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var r = t[n];
                      (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r);
                    }
                  }
                  return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t;
                  };
                })(),
                i = function e(t, n, r) {
                  null === t && (t = Function.prototype);
                  var i = Object.getOwnPropertyDescriptor(t, n);
                  if (void 0 === i) {
                    var a = Object.getPrototypeOf(t);
                    return null === a ? void 0 : e(a, n, r);
                  }
                  if ("value" in i) return i.value;
                  var u = i.get;
                  return void 0 !== u ? u.call(r) : void 0;
                },
                a = n(828),
                u = "arraybuffer",
                o = (function (e) {
                  function t() {
                    return (
                      (function (e, t) {
                        if (!(e instanceof t))
                          throw TypeError("Cannot call a class as a function");
                      })(this, t),
                      (function (e, t) {
                        if (!e)
                          throw ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return t &&
                          ("object" == typeof t || "function" == typeof t)
                          ? t
                          : e;
                      })(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).apply(
                          this,
                          arguments,
                        ),
                      )
                    );
                  }
                  return (
                    (function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof t,
                        );
                      (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                          value: e,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        t &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
                    })(t, e),
                    r(t, [
                      {
                        key: "initXHR",
                        value: function () {
                          i(
                            t.prototype.__proto__ ||
                              Object.getPrototypeOf(t.prototype),
                            "initXHR",
                            this,
                          ).call(this),
                            (this.xhr.responseType = u);
                        },
                      },
                      { key: "onXHRProgress", value: function () {} },
                      {
                        key: "onXHRLoad",
                        value: function () {
                          var e = this.xhr.response;
                          (this.bytesRead += e.byteLength),
                            this.emit("buffer", e),
                            i(
                              t.prototype.__proto__ ||
                                Object.getPrototypeOf(t.prototype),
                              "onXHRLoad",
                              this,
                            ).call(this);
                        },
                      },
                    ]),
                    t
                  );
                })(a);
              (o.supported = function () {
                try {
                  var e = new XMLHttpRequest();
                  return (e.responseType = u), e.responseType === u;
                } catch (e) {
                  return !1;
                }
              }),
                (e.exports = o);
            },
            306: (e, t, n) => {
              "use strict";
              var r = (function () {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, r.key, r);
                  }
                }
                return function (t, n, r) {
                  return n && e(t.prototype, n), r && e(t, r), t;
                };
              })();
              function i(e) {
                var t = e.getResponseHeader("Content-Range");
                return t && t.match(/^bytes (\d+)-(\d+)\/(\d+)/);
              }
              e.exports = (function (e) {
                function t(e) {
                  var n = e.url,
                    r = e.offset,
                    i = e.length,
                    a = e.cachever;
                  if (!(this instanceof t))
                    throw TypeError("Cannot call a class as a function");
                  var u = (function (e, t) {
                    if (!e)
                      throw ReferenceError(
                        "this hasn't been initialised - super() hasn't been called",
                      );
                    return t && ("object" == typeof t || "function" == typeof t)
                      ? t
                      : e;
                  })(
                    this,
                    (t.__proto__ || Object.getPrototypeOf(t)).call(this),
                  );
                  return (
                    (u.url = n),
                    (u.offset = r),
                    (u.length = i),
                    (u.cachever = void 0 === a ? 0 : a),
                    (u.loaded = !1),
                    (u.seekable = !1),
                    (u.headers = {}),
                    (u.eof = !1),
                    (u.bytesRead = 0),
                    (u.xhr = new XMLHttpRequest()),
                    u
                  );
                }
                return (
                  (function (e, t) {
                    if ("function" != typeof t && null !== t)
                      throw TypeError(
                        "Super expression must either be null or a function, not " +
                          typeof t,
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                      },
                    })),
                      t &&
                        (Object.setPrototypeOf
                          ? Object.setPrototypeOf(e, t)
                          : (e.__proto__ = t));
                  })(t, e),
                  r(t, [
                    {
                      key: "load",
                      value: function () {
                        var e = this;
                        return new Promise(function (t, n) {
                          var r = null;
                          e._onAbort = function (e) {
                            r(), n(e);
                          };
                          var a = function () {
                              if (2 == e.xhr.readyState) {
                                if (206 == e.xhr.status) {
                                  var a,
                                    u,
                                    o,
                                    s = (o = i(e.xhr)) ? parseInt(o[1], 10) : 0;
                                  if (e.offset != s)
                                    return (
                                      console.log(
                                        "Expected start at " +
                                          e.offset +
                                          " but got " +
                                          s +
                                          "; working around Safari range caching bug: https://bugs.webkit.org/show_bug.cgi?id=82672",
                                      ),
                                      e.cachever++,
                                      e.emit("cachever"),
                                      e.abort(),
                                      r(),
                                      void e.load().then(t).catch(n)
                                    );
                                  e.seekable = !0;
                                }
                                e.xhr.status >= 200 && e.xhr.status < 300
                                  ? ((e.length = (function (e) {
                                      if (206 == e.status) {
                                        var t;
                                        return (t = i(e))
                                          ? parseInt(t[3], 10)
                                          : -1;
                                      }
                                      var n =
                                        e.getResponseHeader("Content-Length");
                                      return null === n || "" === n
                                        ? -1
                                        : parseInt(n, 10);
                                    })(e.xhr)),
                                    (a = e.xhr),
                                    (u = {}),
                                    a
                                      .getAllResponseHeaders()
                                      .split(/\r?\n/)
                                      .forEach(function (e) {
                                        var t = e.split(/:\s*/, 2);
                                        t.length > 1 &&
                                          (u[t[0].toLowerCase()] = t[1]);
                                      }),
                                    (e.headers = u),
                                    e.onXHRStart())
                                  : (r(),
                                    n(Error("HTTP error " + e.xhr.status)));
                              }
                            },
                            u = function () {
                              r(), n(Error("network error"));
                            },
                            o = function () {
                              r(), t();
                            };
                          (r = function () {
                            e.xhr.removeEventListener("readystatechange", a),
                              e.xhr.removeEventListener("error", u),
                              e.off("open", o),
                              (e._onAbort = null);
                          }),
                            e.initXHR(),
                            e.xhr.addEventListener("readystatechange", a),
                            e.xhr.addEventListener("error", u),
                            e.on("open", o),
                            e.xhr.send();
                        });
                      },
                    },
                    {
                      key: "bufferToOffset",
                      value: function (e) {
                        return Promise.reject(Error("abstract"));
                      },
                    },
                    {
                      key: "abort",
                      value: function () {
                        if ((this.xhr.abort(), this._onAbort)) {
                          var e = this._onAbort;
                          this._onAbort = null;
                          var t = Error("Aborted");
                          (t.name = "AbortError"), e(t);
                        }
                      },
                    },
                    {
                      key: "initXHR",
                      value: function () {
                        var e = this.url;
                        this.cachever &&
                          (e += "?buggy_cachever=" + this.cachever),
                          this.xhr.open("GET", e);
                        var t = null;
                        (this.offset || this.length) &&
                          (t = "bytes=" + this.offset + "-"),
                          this.length && (t += this.offset + this.length - 1),
                          null !== t && this.xhr.setRequestHeader("Range", t);
                      },
                    },
                    {
                      key: "onXHRStart",
                      value: function () {
                        throw Error("abstract");
                      },
                    },
                  ]),
                  t
                );
              })(n(566));
            },
            810: (e, t, n) => {
              "use strict";
              var r = (function () {
                  function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var r = t[n];
                      (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r);
                    }
                  }
                  return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t;
                  };
                })(),
                i = function e(t, n, r) {
                  null === t && (t = Function.prototype);
                  var i = Object.getOwnPropertyDescriptor(t, n);
                  if (void 0 === i) {
                    var a = Object.getPrototypeOf(t);
                    return null === a ? void 0 : e(a, n, r);
                  }
                  if ("value" in i) return i.value;
                  var u = i.get;
                  return void 0 !== u ? u.call(r) : void 0;
                },
                a = (function (e) {
                  function t() {
                    return (
                      (function (e, t) {
                        if (!(e instanceof t))
                          throw TypeError("Cannot call a class as a function");
                      })(this, t),
                      (function (e, t) {
                        if (!e)
                          throw ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return t &&
                          ("object" == typeof t || "function" == typeof t)
                          ? t
                          : e;
                      })(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).apply(
                          this,
                          arguments,
                        ),
                      )
                    );
                  }
                  return (
                    (function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof t,
                        );
                      (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                          value: e,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        t &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
                    })(t, e),
                    r(t, [
                      {
                        key: "initXHR",
                        value: function () {
                          i(
                            t.prototype.__proto__ ||
                              Object.getPrototypeOf(t.prototype),
                            "initXHR",
                            this,
                          ).call(this),
                            (this.xhr.responseType = "text"),
                            this.xhr.overrideMimeType(
                              "text/plain; charset=x-user-defined",
                            );
                        },
                      },
                      {
                        key: "onXHRProgress",
                        value: function () {
                          var e = this.xhr.responseText.slice(this.bytesRead);
                          e.length > 0 &&
                            ((this.bytesRead += e.length),
                            this.emit("buffer", e));
                        },
                      },
                      {
                        key: "onXHRLoad",
                        value: function () {
                          this.onXHRProgress(),
                            i(
                              t.prototype.__proto__ ||
                                Object.getPrototypeOf(t.prototype),
                              "onXHRLoad",
                              this,
                            ).call(this);
                        },
                      },
                    ]),
                    t
                  );
                })(n(828));
              (a.supported = function () {
                try {
                  return !!new XMLHttpRequest().overrideMimeType;
                } catch (e) {
                  return !1;
                }
              }),
                (e.exports = a);
            },
            828: (e, t, n) => {
              "use strict";
              var r = (function () {
                  function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var r = t[n];
                      (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r);
                    }
                  }
                  return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t;
                  };
                })(),
                i = function e(t, n, r) {
                  null === t && (t = Function.prototype);
                  var i = Object.getOwnPropertyDescriptor(t, n);
                  if (void 0 === i) {
                    var a = Object.getPrototypeOf(t);
                    return null === a ? void 0 : e(a, n, r);
                  }
                  if ("value" in i) return i.value;
                  var u = i.get;
                  return void 0 !== u ? u.call(r) : void 0;
                };
              e.exports = (function (e) {
                function t() {
                  return (
                    (function (e, t) {
                      if (!(e instanceof t))
                        throw TypeError("Cannot call a class as a function");
                    })(this, t),
                    (function (e, t) {
                      if (!e)
                        throw ReferenceError(
                          "this hasn't been initialised - super() hasn't been called",
                        );
                      return t &&
                        ("object" == typeof t || "function" == typeof t)
                        ? t
                        : e;
                    })(
                      this,
                      (t.__proto__ || Object.getPrototypeOf(t)).apply(
                        this,
                        arguments,
                      ),
                    )
                  );
                }
                return (
                  (function (e, t) {
                    if ("function" != typeof t && null !== t)
                      throw TypeError(
                        "Super expression must either be null or a function, not " +
                          typeof t,
                      );
                    (e.prototype = Object.create(t && t.prototype, {
                      constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0,
                      },
                    })),
                      t &&
                        (Object.setPrototypeOf
                          ? Object.setPrototypeOf(e, t)
                          : (e.__proto__ = t));
                  })(t, e),
                  r(t, [
                    {
                      key: "bufferToOffset",
                      value: function (e) {
                        var t = this;
                        return new Promise(function (n, r) {
                          if (t.eof || t.offset >= e) n();
                          else {
                            var i = null;
                            t._onAbort = function (e) {
                              i(), r(e);
                            };
                            var a = function () {
                                t.offset >= e && !t.eof && (i(), n());
                              },
                              u = function () {
                                i(), n();
                              },
                              o = function () {
                                i(), r(Error("error streaming"));
                              };
                            (i = function () {
                              (t.buffering = !1),
                                t.off("buffer", a),
                                t.off("done", u),
                                t.off("error", o),
                                (t._onAbort = null);
                            }),
                              (t.buffering = !0),
                              t.on("buffer", a),
                              t.on("done", u),
                              t.on("error", o);
                          }
                        });
                      },
                    },
                    {
                      key: "initXHR",
                      value: function () {
                        i(
                          t.prototype.__proto__ ||
                            Object.getPrototypeOf(t.prototype),
                          "initXHR",
                          this,
                        ).call(this);
                      },
                    },
                    {
                      key: "onXHRStart",
                      value: function () {
                        var e = this;
                        this.xhr.addEventListener("progress", function () {
                          return e.onXHRProgress();
                        }),
                          this.xhr.addEventListener("error", function () {
                            return e.onXHRError();
                          }),
                          this.xhr.addEventListener("load", function () {
                            return e.onXHRLoad();
                          }),
                          this.emit("open");
                      },
                    },
                    {
                      key: "onXHRProgress",
                      value: function () {
                        throw Error("abstract");
                      },
                    },
                    {
                      key: "onXHRError",
                      value: function () {
                        this.emit("error");
                      },
                    },
                    {
                      key: "onXHRLoad",
                      value: function () {
                        (this.eof = !0), this.emit("done");
                      },
                    },
                  ]),
                  t
                );
              })(n(306));
            },
            761: (e, t, n) => {
              "use strict";
              var r = n(855),
                i = n(810),
                a = n(431),
                u = null;
              e.exports = function (e) {
                if (!1 === e.progressive) return new a(e);
                if (
                  (u || (u = r.supported() ? r : i.supported() ? i : null), !u)
                )
                  throw Error("No supported backend class");
                return new u(e);
              };
            },
            855: (e, t, n) => {
              "use strict";
              var r = (function () {
                  function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var r = t[n];
                      (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r);
                    }
                  }
                  return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t;
                  };
                })(),
                i = function e(t, n, r) {
                  null === t && (t = Function.prototype);
                  var i = Object.getOwnPropertyDescriptor(t, n);
                  if (void 0 === i) {
                    var a = Object.getPrototypeOf(t);
                    return null === a ? void 0 : e(a, n, r);
                  }
                  if ("value" in i) return i.value;
                  var u = i.get;
                  return void 0 !== u ? u.call(r) : void 0;
                },
                a = n(828),
                u = "moz-chunked-arraybuffer",
                o = (function (e) {
                  function t() {
                    return (
                      (function (e, t) {
                        if (!(e instanceof t))
                          throw TypeError("Cannot call a class as a function");
                      })(this, t),
                      (function (e, t) {
                        if (!e)
                          throw ReferenceError(
                            "this hasn't been initialised - super() hasn't been called",
                          );
                        return t &&
                          ("object" == typeof t || "function" == typeof t)
                          ? t
                          : e;
                      })(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).apply(
                          this,
                          arguments,
                        ),
                      )
                    );
                  }
                  return (
                    (function (e, t) {
                      if ("function" != typeof t && null !== t)
                        throw TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof t,
                        );
                      (e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                          value: e,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        t &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(e, t)
                            : (e.__proto__ = t));
                    })(t, e),
                    r(t, [
                      {
                        key: "initXHR",
                        value: function () {
                          i(
                            t.prototype.__proto__ ||
                              Object.getPrototypeOf(t.prototype),
                            "initXHR",
                            this,
                          ).call(this),
                            (this.xhr.responseType = u);
                        },
                      },
                      {
                        key: "onXHRProgress",
                        value: function () {
                          var e = this.xhr.response;
                          (this.bytesRead += e.byteLength),
                            this.emit("buffer", e);
                        },
                      },
                    ]),
                    t
                  );
                })(a);
              (o.supported = function () {
                try {
                  var e = new XMLHttpRequest();
                  return (e.responseType = u), e.responseType === u;
                } catch (e) {
                  return !1;
                }
              }),
                (e.exports = o);
            },
            503: (e) => {
              "use strict";
              var t = (function () {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, r.key, r);
                  }
                }
                return function (t, n, r) {
                  return n && e(t.prototype, n), r && e(t, r), t;
                };
              })();
              e.exports = (function () {
                function e() {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    n = t.buffer,
                    r = void 0 === n ? void 0 : n,
                    i = t.string,
                    a = void 0 === i ? void 0 : i,
                    u = t.start,
                    o = void 0 === u ? 0 : u,
                    s = t.end,
                    l =
                      void 0 === s
                        ? o + (r ? r.byteLength : a ? a.length : 0)
                        : s,
                    d = t.prev,
                    c = t.next,
                    f = t.eof,
                    h = t.empty,
                    p = void 0 === h ? !(r || a) : h,
                    m = t.timestamp,
                    _ = void 0 === m ? Date.now() : m;
                  (function (e, t) {
                    if (!(e instanceof t))
                      throw TypeError("Cannot call a class as a function");
                  })(this, e),
                    (this.start = o),
                    (this.end = l),
                    (this.prev = void 0 === d ? null : d),
                    (this.next = void 0 === c ? null : c),
                    (this.eof = void 0 !== f && f),
                    (this.empty = p),
                    (this.timestamp = _),
                    (this.buffer = r),
                    (this.string = a),
                    Object.defineProperty(this, "length", {
                      get: function () {
                        return this.end - this.start;
                      },
                    });
                }
                return (
                  t(e, [
                    {
                      key: "contains",
                      value: function (e) {
                        return e >= this.start && (e < this.end || this.eof);
                      },
                    },
                    {
                      key: "readBytes",
                      value: function (e, t, n) {
                        var r = t - this.start,
                          i = n - t;
                        if (this.buffer) {
                          var a = new Uint8Array(this.buffer, r, i);
                          e.set(a);
                        } else {
                          if (!this.string) throw Error("invalid state");
                          for (var u = this.string, o = 0; o < i; o++)
                            e[o] = u.charCodeAt(r + o);
                        }
                        this.timestamp = Date.now();
                      },
                    },
                    {
                      key: "split",
                      value: function (t) {
                        if (!this.empty || !this.contains(t))
                          throw Error("invalid split");
                        var n = new e({ start: this.start, end: t }),
                          r = new e({
                            start: t,
                            end: this.eof ? t : this.end,
                            eof: this.eof,
                          });
                        return (n.next = r), (r.prev = n), [n, r];
                      },
                    },
                    {
                      key: "first",
                      value: function (e) {
                        for (var t = this; t; t = t.next) if (e(t)) return t;
                        return null;
                      },
                    },
                    {
                      key: "last",
                      value: function (e) {
                        for (var t = null, n = this; n && e(n); n = n.next)
                          t = n;
                        return t;
                      },
                    },
                  ]),
                  e
                );
              })();
            },
            91: (e, t, n) => {
              "use strict";
              var r = (function () {
                  function e(e, t) {
                    for (var n = 0; n < t.length; n++) {
                      var r = t[n];
                      (r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        "value" in r && (r.writable = !0),
                        Object.defineProperty(e, r.key, r);
                    }
                  }
                  return function (t, n, r) {
                    return n && e(t.prototype, n), r && e(t, r), t;
                  };
                })(),
                i = n(503);
              e.exports = (function () {
                function e() {
                  var t =
                      arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : {},
                    n = t.cacheSize;
                  if (!(this instanceof e))
                    throw TypeError("Cannot call a class as a function");
                  var r = new i({ eof: !0 });
                  (this.head = r),
                    (this.tail = r),
                    (this.readOffset = 0),
                    (this.readCursor = r),
                    (this.writeOffset = 0),
                    (this.writeCursor = r),
                    (this.cacheSize = void 0 === n ? 0 : n);
                }
                return (
                  r(e, [
                    {
                      key: "bytesReadable",
                      value: function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 1 / 0,
                          t = this.readOffset,
                          n = this.readCursor.last(function (n) {
                            return !n.empty && n.start <= t + e;
                          });
                        return n ? Math.min(e, n.end - t) : 0;
                      },
                    },
                    {
                      key: "bytesWritable",
                      value: function () {
                        var e =
                            arguments.length > 0 && void 0 !== arguments[0]
                              ? arguments[0]
                              : 1 / 0,
                          t = this.writeOffset,
                          n = this.writeCursor;
                        if (n.eof) return e;
                        var r = n.last(function (n) {
                          return n.empty && n.start <= t + e;
                        });
                        return r ? Math.min(e, r.end - t) : 0;
                      },
                    },
                    {
                      key: "seekRead",
                      value: function (e) {
                        var t = this.head.first(function (t) {
                          return t.contains(e);
                        });
                        if (!t) throw Error("read seek out of range");
                        (this.readOffset = e), (this.readCursor = t);
                      },
                    },
                    {
                      key: "seekWrite",
                      value: function (e) {
                        var t = this.head.first(function (t) {
                          return t.contains(e);
                        });
                        if (!t) throw Error("write seek out of range");
                        (this.writeOffset = e), (this.writeCursor = t);
                      },
                    },
                    {
                      key: "readBytes",
                      value: function (e) {
                        for (
                          var t = e.byteLength,
                            n = this.bytesReadable(t),
                            r = this.readOffset,
                            i = r + n,
                            a = r,
                            u = this.readCursor;
                          u && !u.empty && !(u.start >= i);
                          u = u.next
                        ) {
                          var o = Math.min(i, u.end),
                            s = e.subarray(a - r, o - r);
                          u.readBytes(s, a, o), (a = o);
                        }
                        return (
                          (this.readOffset = a),
                          (this.readCursor = this.readCursor.first(
                            function (e) {
                              return e.contains(a);
                            },
                          )),
                          n
                        );
                      },
                    },
                    {
                      key: "write",
                      value: function (e) {
                        var t = this.bufferItem(e),
                          n = this.writeCursor;
                        if (!n.empty) throw Error("write cursor not empty");
                        if (!n.contains(t.end) && n.end !== t.end)
                          throw Error("write cursor too small");
                        n.start < t.start &&
                          (this.split(n, t.start), (n = this.writeCursor)),
                          (t.end < n.end || n.eof) &&
                            (this.split(n, t.end), (n = this.writeCursor)),
                          this.splice(n, n, t, t),
                          (this.writeOffset = t.end),
                          (this.writeCursor = t.next),
                          this.gc();
                      },
                    },
                    {
                      key: "bufferItem",
                      value: function (e) {
                        if (e instanceof ArrayBuffer)
                          return new i({
                            start: this.writeOffset,
                            end: this.writeOffset + e.byteLength,
                            buffer: e,
                          });
                        if ("string" == typeof e)
                          return new i({
                            start: this.writeOffset,
                            end: this.writeOffset + e.length,
                            string: e,
                          });
                        throw Error("invalid input to write");
                      },
                    },
                    {
                      key: "split",
                      value: function (e, t) {
                        var n = e.split(t);
                        this.splice(e, e, n[0], n[1]);
                      },
                    },
                    {
                      key: "ranges",
                      value: function () {
                        for (var e = [], t = this.head; t; t = t.next)
                          if (!t.empty) {
                            var n = t;
                            (t = t.last(function (e) {
                              return !e.empty;
                            })),
                              e.push([n.start, t.end]);
                          }
                        return e;
                      },
                    },
                    {
                      key: "gc",
                      value: function () {
                        for (var e = 0, t = [], n = this.head; n; n = n.next)
                          n.empty ||
                            ((e += n.length),
                            (n.end < this.readOffset ||
                              n.start > this.readOffset + this.chunkSize) &&
                              t.push(n));
                        if (e > this.cacheSize) {
                          t.sort(function (e, t) {
                            return e.timestamp - t.timestamp;
                          });
                          for (var r = 0; r < t.length; r++) {
                            var i = t[r];
                            if (e <= this.cacheSize) break;
                            this.remove(i), (e -= i.length);
                          }
                        }
                      },
                    },
                    {
                      key: "remove",
                      value: function (e) {
                        var t = new i({ start: e.start, end: e.end });
                        this.splice(e, e, t, t),
                          (e = t).prev &&
                            e.prev.empty &&
                            (e = this.consolidate(e.prev)),
                          e.next &&
                            e.next.empty &&
                            !e.next.eof &&
                            (e = this.consolidate(e)),
                          0 === e.start && (this.head = e);
                      },
                    },
                    {
                      key: "consolidate",
                      value: function (e) {
                        var t = e.last(function (e) {
                            return e.empty && !e.eof;
                          }),
                          n = new i({ start: e.start, end: t.end });
                        return this.splice(e, t, n, n), n;
                      },
                    },
                    {
                      key: "splice",
                      value: function (e, t, n, r) {
                        var i = this;
                        if (e.start !== n.start)
                          throw Error("invalid splice head");
                        if (!(t.end === r.end || (t.eof && r.eof)))
                          throw Error("invalid splice tail");
                        var a = e.prev,
                          u = t.next;
                        (e.prev = null),
                          (t.next = null),
                          a && ((a.next = n), (n.prev = a)),
                          u && ((u.prev = r), (r.next = u)),
                          e === this.head && (this.head = n),
                          t === this.tail && (this.tail = r),
                          (this.readCursor = this.head.first(function (e) {
                            return e.contains(i.readOffset);
                          })),
                          (this.writeCursor = this.head.first(function (e) {
                            return e.contains(i.writeOffset);
                          }));
                      },
                    },
                    {
                      key: "eof",
                      get: function () {
                        return this.readCursor.eof;
                      },
                    },
                  ]),
                  e
                );
              })();
            },
            814: (e, t, n) => {
              "use strict";
              e.exports = n(91);
            },
            566: (e) => {
              "use strict";
              var t = (function () {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, r.key, r);
                  }
                }
                return function (t, n, r) {
                  return n && e(t.prototype, n), r && e(t, r), t;
                };
              })();
              e.exports = (function () {
                function e() {
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw TypeError("Cannot call a class as a function");
                  })(this, e),
                    (this._e = {});
                }
                return (
                  t(e, [
                    {
                      key: "on",
                      value: function (e, t) {
                        (this._e[e] || (this._e[e] = [])).push(t);
                      },
                    },
                    {
                      key: "off",
                      value: function (e, t) {
                        var n = this._e[e] || [],
                          r = n.indexOf(t);
                        t >= 0 && n.splice(r, 1);
                      },
                    },
                    {
                      key: "emit",
                      value: function (e, t) {
                        (this._e[e] || []).slice().forEach(function (e) {
                          return e(t);
                        });
                      },
                    },
                  ]),
                  e
                );
              })();
            },
            936: (e, t, n) => {
              "use strict";
              var r = (function () {
                function e(e, t) {
                  for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    (r.enumerable = r.enumerable || !1),
                      (r.configurable = !0),
                      "value" in r && (r.writable = !0),
                      Object.defineProperty(e, r.key, r);
                  }
                }
                return function (t, n, r) {
                  return n && e(t.prototype, n), r && e(t, r), t;
                };
              })();
              n(566);
              var i = n(814),
                a = n(761);
              e.exports = (function () {
                function e(t) {
                  var n = t.url,
                    r = t.chunkSize,
                    a = t.cacheSize,
                    u = t.progressive;
                  !(function (e, t) {
                    if (!(e instanceof t))
                      throw TypeError("Cannot call a class as a function");
                  })(this, e),
                    (this.length = -1),
                    (this.loaded = !1),
                    (this.loading = !1),
                    (this.seekable = !1),
                    (this.buffering = !1),
                    (this.seeking = !1),
                    (this.progressive = void 0 === u || u),
                    Object.defineProperties(this, {
                      offset: {
                        get: function () {
                          return this._cache.readOffset;
                        },
                      },
                      eof: {
                        get: function () {
                          return this.length === this._cache.readOffset;
                        },
                      },
                    }),
                    (this.url = void 0 === n ? "" : n),
                    (this.headers = {}),
                    (this._cache = new i({ cacheSize: void 0 === a ? 0 : a })),
                    (this._backend = null),
                    (this._cachever = 0),
                    (this._chunkSize = void 0 === r ? 1048576 : r);
                }
                return (
                  r(e, [
                    {
                      key: "load",
                      value: function () {
                        var e = this;
                        return new Promise(function (t, n) {
                          if (e.loading)
                            throw Error("cannot load when loading");
                          if (e.loaded) throw Error("cannot load when loaded");
                          (e.loading = !0),
                            e
                              ._openBackend()
                              .then(function (n) {
                                (e.seekable = n.seekable),
                                  (e.headers = n.headers),
                                  (e.length = n.length),
                                  (e.loaded = !0),
                                  (e.loading = !1),
                                  t();
                              })
                              .catch(function (t) {
                                "AbortError" !== t.name && (e.loading = !1),
                                  n(t);
                              });
                        });
                      },
                    },
                    {
                      key: "_openBackend",
                      value: function () {
                        var e = this;
                        return new Promise(function (t, n) {
                          if (e._backend) t(e._backend);
                          else if (e.eof)
                            n(Error("cannot open at end of file"));
                          else {
                            var r = e._cache,
                              i = e._chunkSize,
                              u = r.bytesReadable(i),
                              o = r.readOffset + u;
                            if (
                              (r.seekWrite(o), e.length >= 0 && o >= e.length)
                            )
                              return void t(null);
                            var s =
                              e._clampToLength(
                                r.writeOffset + r.bytesWritable(i),
                              ) - r.writeOffset;
                            if (0 === s) t(null);
                            else {
                              var l = (e._backend = new a({
                                  url: e.url,
                                  offset: e._cache.writeOffset,
                                  length: s,
                                  cachever: e._cachever,
                                  progressive: e.progressive,
                                })),
                                d = null,
                                c = function () {
                                  l !== e._backend
                                    ? (d(), n(Error("invalid state")))
                                    : (l.on("buffer", function (t) {
                                        l === e._backend && e._cache.write(t);
                                      }),
                                      l.on("done", function () {
                                        l === e._backend &&
                                          (-1 === e.length &&
                                            (e.length =
                                              e._backend.offset +
                                              e._backend.bytesRead),
                                          (e._backend = null));
                                      }),
                                      t(l));
                                },
                                f = function (t) {
                                  l !== e._backend
                                    ? n(Error("invalid state"))
                                    : ((e._backend = null), n(t));
                                };
                              (d = function () {
                                l.off("open", c), l.off("error", f);
                              }),
                                l.on("open", c),
                                l.on("error", f),
                                l.on("cachever", function () {
                                  e._cachever++;
                                }),
                                l.load();
                            }
                          }
                        });
                      },
                    },
                    {
                      key: "_readAhead",
                      value: function () {
                        var e = this;
                        return new Promise(function (t, n) {
                          e._backend || e.eof
                            ? t()
                            : e
                                ._openBackend()
                                .then(function () {
                                  t();
                                })
                                .catch(function (e) {
                                  n(e);
                                });
                        });
                      },
                    },
                    {
                      key: "seek",
                      value: function (e) {
                        var t = this;
                        return new Promise(function (n, r) {
                          if (!t.loaded || t.buffering || t.seeking)
                            throw Error("invalid state");
                          if (e !== (0 | e) || e < 0)
                            throw Error("invalid input");
                          if (t.length >= 0 && e > t.length)
                            throw Error("seek past end of file");
                          if (!t.seekable)
                            throw Error("seek on non-seekable stream");
                          t._backend && t.abort(),
                            t._cache.seekRead(e),
                            t._cache.seekWrite(e),
                            t._readAhead().then(n).catch(r);
                        });
                      },
                    },
                    {
                      key: "read",
                      value: function (e) {
                        var t = this;
                        return this.buffer(e).then(function (e) {
                          return t.readSync(e);
                        });
                      },
                    },
                    {
                      key: "readSync",
                      value: function (e) {
                        var t = this.bytesAvailable(e),
                          n = new Uint8Array(t);
                        if (this.readBytes(n) !== t)
                          throw Error("failed to read expected data");
                        return n.buffer;
                      },
                    },
                    {
                      key: "readBytes",
                      value: function (e) {
                        if (!this.loaded || this.buffering || this.seeking)
                          throw Error("invalid state");
                        if (!(e instanceof Uint8Array))
                          throw Error("invalid input");
                        var t = this._cache.readBytes(e);
                        return this._readAhead(), t;
                      },
                    },
                    {
                      key: "buffer",
                      value: function (e) {
                        var t = this;
                        return new Promise(function (n, r) {
                          if (!t.loaded || t.buffering || t.seeking)
                            throw Error("invalid state");
                          if (e !== (0 | e) || e < 0)
                            throw Error("invalid input");
                          var i = t._clampToLength(t.offset + e),
                            a = i - t.offset,
                            u = t.bytesAvailable(a);
                          u >= a
                            ? n(u)
                            : ((t.buffering = !0),
                              t
                                ._openBackend()
                                .then(function (n) {
                                  return n
                                    ? n.bufferToOffset(i).then(function () {
                                        return (t.buffering = !1), t.buffer(e);
                                      })
                                    : Promise.resolve(u);
                                })
                                .then(function (e) {
                                  (t.buffering = !1), n(e);
                                })
                                .catch(function (e) {
                                  "AbortError" !== e.name && (t.buffering = !1),
                                    r(e);
                                }));
                        });
                      },
                    },
                    {
                      key: "bytesAvailable",
                      value: function () {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 1 / 0;
                        return this._cache.bytesReadable(e);
                      },
                    },
                    {
                      key: "abort",
                      value: function () {
                        this.loading && (this.loading = !1),
                          this.buffering && (this.buffering = !1),
                          this.seeking && (this.seeking = !1),
                          this._backend &&
                            (this._backend.abort(), (this._backend = null));
                      },
                    },
                    {
                      key: "getBufferedRanges",
                      value: function () {
                        return this._cache.ranges();
                      },
                    },
                    {
                      key: "_clampToLength",
                      value: function (e) {
                        return this.length < 0 ? e : Math.min(this.length, e);
                      },
                    },
                  ]),
                  e
                );
              })();
            },
            302: (e, t, n) => {
              "use strict";
              n.r(t), n.d(t, { default: () => r });
              let r =
                "data:audio/mpeg;base64,SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU5LjE2LjEwMAAAAAAAAAAAAAAA//tQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAACAAAEEwCZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZ//////////////////////////////////////////////////////////////////8AAAAATGF2YzU5LjE4AAAAAAAAAAAAAAAAJAZAAAAAAAAABBMIw3vfAAAAAAAAAAAAAAAAAAAAAP/7kGQAD/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABExBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUxBTUUzLjEwMFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVf/7kmRAj/AAAGkAAAAIAAANIAAAAQAAAaQAAAAgAAA0gAAABFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=";
            },
            826: (e) => {
              e.exports = {
                vertex:
                  "precision mediump float;\n\nattribute vec2 aPosition;\nattribute vec2 aLumaPosition;\nattribute vec2 aChromaPosition;\nvarying vec2 vLumaPosition;\nvarying vec2 vChromaPosition;\nvoid main() {\n    gl_Position = vec4(aPosition, 0, 1);\n    vLumaPosition = aLumaPosition;\n    vChromaPosition = aChromaPosition;\n}\n",
                fragment:
                  "// inspired by https://github.com/mbebenita/Broadway/blob/master/Player/canvas.js\n\nprecision mediump float;\n\nuniform sampler2D uTextureY;\nuniform sampler2D uTextureCb;\nuniform sampler2D uTextureCr;\nvarying vec2 vLumaPosition;\nvarying vec2 vChromaPosition;\nvoid main() {\n   // Y, Cb, and Cr planes are uploaded as ALPHA textures.\n   float fY = texture2D(uTextureY, vLumaPosition).w;\n   float fCb = texture2D(uTextureCb, vChromaPosition).w;\n   float fCr = texture2D(uTextureCr, vChromaPosition).w;\n\n   // Premultipy the Y...\n   float fYmul = fY * 1.1643828125;\n\n   // And convert that to RGB!\n   gl_FragColor = vec4(\n     fYmul + 1.59602734375 * fCr - 0.87078515625,\n     fYmul - 0.39176171875 * fCb - 0.81296875 * fCr + 0.52959375,\n     fYmul + 2.017234375   * fCb - 1.081390625,\n     1\n   );\n}\n",
                vertexStripe:
                  "precision mediump float;\n\nattribute vec2 aPosition;\nattribute vec2 aTexturePosition;\nvarying vec2 vTexturePosition;\n\nvoid main() {\n    gl_Position = vec4(aPosition, 0, 1);\n    vTexturePosition = aTexturePosition;\n}\n",
                fragmentStripe:
                  "// extra 'stripe' texture fiddling to work around IE 11's poor performance on gl.LUMINANCE and gl.ALPHA textures\n\nprecision mediump float;\n\nuniform sampler2D uStripe;\nuniform sampler2D uTexture;\nvarying vec2 vTexturePosition;\nvoid main() {\n   // Y, Cb, and Cr planes are mapped into a pseudo-RGBA texture\n   // so we can upload them without expanding the bytes on IE 11\n   // which doesn't allow LUMINANCE or ALPHA textures\n   // The stripe textures mark which channel to keep for each pixel.\n   // Each texture extraction will contain the relevant value in one\n   // channel only.\n\n   float fLuminance = dot(\n      texture2D(uStripe, vTexturePosition),\n      texture2D(uTexture, vTexturePosition)\n   );\n\n   gl_FragColor = vec4(0, 0, 0, fLuminance);\n}\n",
              };
            },
            487: (e) => {
              !(function () {
                "use strict";
                function t(e, t) {
                  throw Error("abstract");
                }
                (t.prototype.drawFrame = function (e) {
                  throw Error("abstract");
                }),
                  (t.prototype.clear = function () {
                    throw Error("abstract");
                  }),
                  (e.exports = t);
              })();
            },
            926: (e, t, n) => {
              !(function () {
                "use strict";
                var t = n(487),
                  r = n(627);
                function i(e) {
                  var t = e.getContext("2d"),
                    n = null,
                    i = null,
                    a = null;
                  return (
                    (this.drawFrame = function (u) {
                      var o,
                        s,
                        l = u.format;
                      (e.width === l.displayWidth &&
                        e.height === l.displayHeight) ||
                        ((e.width = l.displayWidth),
                        (e.height = l.displayHeight)),
                        (null !== n &&
                          n.width == l.width &&
                          n.height == l.height) ||
                          (function (e, r) {
                            for (
                              var i = (n = t.createImageData(e, r)).data,
                                a = e * r * 4,
                                u = 0;
                              u < a;
                              u += 4
                            )
                              i[u + 3] = 255;
                          })(l.width, l.height),
                        r.convertYCbCr(u, n.data);
                      var d,
                        c =
                          l.cropWidth != l.displayWidth ||
                          l.cropHeight != l.displayHeight;
                      c
                        ? (i ||
                            ((o = l.cropWidth),
                            (s = l.cropHeight),
                            ((i = document.createElement("canvas")).width = o),
                            (i.height = s),
                            (a = i.getContext("2d"))),
                          (d = a))
                        : (d = t),
                        d.putImageData(
                          n,
                          -l.cropLeft,
                          -l.cropTop,
                          l.cropLeft,
                          l.cropTop,
                          l.cropWidth,
                          l.cropHeight,
                        ),
                        c &&
                          t.drawImage(i, 0, 0, l.displayWidth, l.displayHeight);
                    }),
                    (this.clear = function () {
                      t.clearRect(0, 0, e.width, e.height);
                    }),
                    this
                  );
                }
                (i.prototype = Object.create(t.prototype)), (e.exports = i);
              })();
            },
            895: (e, t, n) => {
              !(function () {
                "use strict";
                var t = n(487),
                  r = n(826);
                function i(e) {
                  var t,
                    n,
                    a = this,
                    u = i.contextForCanvas(e);
                  if (null === u) throw Error("WebGL unavailable");
                  function o(e, t) {
                    var n = u.createShader(e);
                    if (
                      (u.shaderSource(n, t),
                      u.compileShader(n),
                      !u.getShaderParameter(n, u.COMPILE_STATUS))
                    ) {
                      var r = u.getShaderInfoLog(n);
                      throw (
                        (u.deleteShader(n),
                        Error(
                          "GL shader compilation for " + e + " failed: " + r,
                        ))
                      );
                    }
                    return n;
                  }
                  var s,
                    l,
                    d,
                    c,
                    f,
                    h,
                    p,
                    m,
                    _,
                    v,
                    g = new Float32Array([
                      -1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1,
                    ]),
                    y = {},
                    D = {},
                    b = {};
                  function C(e, t) {
                    return (y[e] && !t) || (y[e] = u.createTexture()), y[e];
                  }
                  function E(e, t, n, r, a) {
                    var o = !y[e] || t,
                      s = C(e, t);
                    if ((u.activeTexture(u.TEXTURE0), i.stripe)) {
                      var l = !y[e + "_temp"] || t,
                        d = C(e + "_temp", t);
                      u.bindTexture(u.TEXTURE_2D, d),
                        l
                          ? (u.texParameteri(
                              u.TEXTURE_2D,
                              u.TEXTURE_WRAP_S,
                              u.CLAMP_TO_EDGE,
                            ),
                            u.texParameteri(
                              u.TEXTURE_2D,
                              u.TEXTURE_WRAP_T,
                              u.CLAMP_TO_EDGE,
                            ),
                            u.texParameteri(
                              u.TEXTURE_2D,
                              u.TEXTURE_MIN_FILTER,
                              u.NEAREST,
                            ),
                            u.texParameteri(
                              u.TEXTURE_2D,
                              u.TEXTURE_MAG_FILTER,
                              u.NEAREST,
                            ),
                            u.texImage2D(
                              u.TEXTURE_2D,
                              0,
                              u.RGBA,
                              n / 4,
                              r,
                              0,
                              u.RGBA,
                              u.UNSIGNED_BYTE,
                              a,
                            ))
                          : u.texSubImage2D(
                              u.TEXTURE_2D,
                              0,
                              0,
                              0,
                              n / 4,
                              r,
                              u.RGBA,
                              u.UNSIGNED_BYTE,
                              a,
                            );
                      var c = y[e + "_stripe"],
                        f = !c || t;
                      f && (c = C(e + "_stripe", t)),
                        u.bindTexture(u.TEXTURE_2D, c),
                        f &&
                          (u.texParameteri(
                            u.TEXTURE_2D,
                            u.TEXTURE_WRAP_S,
                            u.CLAMP_TO_EDGE,
                          ),
                          u.texParameteri(
                            u.TEXTURE_2D,
                            u.TEXTURE_WRAP_T,
                            u.CLAMP_TO_EDGE,
                          ),
                          u.texParameteri(
                            u.TEXTURE_2D,
                            u.TEXTURE_MIN_FILTER,
                            u.NEAREST,
                          ),
                          u.texParameteri(
                            u.TEXTURE_2D,
                            u.TEXTURE_MAG_FILTER,
                            u.NEAREST,
                          ),
                          u.texImage2D(
                            u.TEXTURE_2D,
                            0,
                            u.RGBA,
                            n,
                            1,
                            0,
                            u.RGBA,
                            u.UNSIGNED_BYTE,
                            (function (e) {
                              if (b[e]) return b[e];
                              for (
                                var t = new Uint32Array(e), n = 0;
                                n < e;
                                n += 4
                              )
                                (t[n] = 255),
                                  (t[n + 1] = 65280),
                                  (t[n + 2] = 0xff0000),
                                  (t[n + 3] = 0xff000000);
                              return (b[e] = new Uint8Array(t.buffer));
                            })(n),
                          ));
                    } else
                      u.bindTexture(u.TEXTURE_2D, s),
                        o
                          ? (u.texParameteri(
                              u.TEXTURE_2D,
                              u.TEXTURE_WRAP_S,
                              u.CLAMP_TO_EDGE,
                            ),
                            u.texParameteri(
                              u.TEXTURE_2D,
                              u.TEXTURE_WRAP_T,
                              u.CLAMP_TO_EDGE,
                            ),
                            u.texParameteri(
                              u.TEXTURE_2D,
                              u.TEXTURE_MIN_FILTER,
                              u.LINEAR,
                            ),
                            u.texParameteri(
                              u.TEXTURE_2D,
                              u.TEXTURE_MAG_FILTER,
                              u.LINEAR,
                            ),
                            u.texImage2D(
                              u.TEXTURE_2D,
                              0,
                              u.ALPHA,
                              n,
                              r,
                              0,
                              u.ALPHA,
                              u.UNSIGNED_BYTE,
                              a,
                            ))
                          : u.texSubImage2D(
                              u.TEXTURE_2D,
                              0,
                              0,
                              0,
                              n,
                              r,
                              u.ALPHA,
                              u.UNSIGNED_BYTE,
                              a,
                            );
                  }
                  function w(e, t, r, i) {
                    var a = y[e];
                    u.useProgram(n);
                    var o = D[e];
                    (o && !t) ||
                      (u.activeTexture(u.TEXTURE0),
                      u.bindTexture(u.TEXTURE_2D, a),
                      u.texParameteri(
                        u.TEXTURE_2D,
                        u.TEXTURE_WRAP_S,
                        u.CLAMP_TO_EDGE,
                      ),
                      u.texParameteri(
                        u.TEXTURE_2D,
                        u.TEXTURE_WRAP_T,
                        u.CLAMP_TO_EDGE,
                      ),
                      u.texParameteri(
                        u.TEXTURE_2D,
                        u.TEXTURE_MIN_FILTER,
                        u.LINEAR,
                      ),
                      u.texParameteri(
                        u.TEXTURE_2D,
                        u.TEXTURE_MAG_FILTER,
                        u.LINEAR,
                      ),
                      u.texImage2D(
                        u.TEXTURE_2D,
                        0,
                        u.RGBA,
                        r,
                        i,
                        0,
                        u.RGBA,
                        u.UNSIGNED_BYTE,
                        null,
                      ),
                      (o = D[e] = u.createFramebuffer())),
                      u.bindFramebuffer(u.FRAMEBUFFER, o),
                      u.framebufferTexture2D(
                        u.FRAMEBUFFER,
                        u.COLOR_ATTACHMENT0,
                        u.TEXTURE_2D,
                        a,
                        0,
                      );
                    var p = y[e + "_temp"];
                    u.activeTexture(u.TEXTURE1),
                      u.bindTexture(u.TEXTURE_2D, p),
                      u.uniform1i(h, 1);
                    var m = y[e + "_stripe"];
                    u.activeTexture(u.TEXTURE2),
                      u.bindTexture(u.TEXTURE_2D, m),
                      u.uniform1i(f, 2),
                      u.bindBuffer(u.ARRAY_BUFFER, s),
                      u.enableVertexAttribArray(l),
                      u.vertexAttribPointer(l, 2, u.FLOAT, !1, 0, 0),
                      u.bindBuffer(u.ARRAY_BUFFER, d),
                      u.enableVertexAttribArray(c),
                      u.vertexAttribPointer(c, 2, u.FLOAT, !1, 0, 0),
                      u.viewport(0, 0, r, i),
                      u.drawArrays(u.TRIANGLES, 0, g.length / 2),
                      u.bindFramebuffer(u.FRAMEBUFFER, null);
                  }
                  function A(e, n, r) {
                    u.activeTexture(n),
                      u.bindTexture(u.TEXTURE_2D, y[e]),
                      u.texParameteri(
                        u.TEXTURE_2D,
                        u.TEXTURE_WRAP_S,
                        u.CLAMP_TO_EDGE,
                      ),
                      u.texParameteri(
                        u.TEXTURE_2D,
                        u.TEXTURE_WRAP_T,
                        u.CLAMP_TO_EDGE,
                      ),
                      u.texParameteri(
                        u.TEXTURE_2D,
                        u.TEXTURE_MIN_FILTER,
                        u.LINEAR,
                      ),
                      u.texParameteri(
                        u.TEXTURE_2D,
                        u.TEXTURE_MAG_FILTER,
                        u.LINEAR,
                      ),
                      u.uniform1i(u.getUniformLocation(t, e), r);
                  }
                  function B(e, t) {
                    var n = o(u.VERTEX_SHADER, e),
                      r = o(u.FRAGMENT_SHADER, t),
                      i = u.createProgram();
                    if (
                      (u.attachShader(i, n),
                      u.attachShader(i, r),
                      u.linkProgram(i),
                      !u.getProgramParameter(i, u.LINK_STATUS))
                    ) {
                      var a = u.getProgramInfoLog(i);
                      throw (
                        (u.deleteProgram(i),
                        Error("GL program linking failed: " + a))
                      );
                    }
                    return i;
                  }
                  return (
                    (a.drawFrame = function (o) {
                      var y = o.format,
                        D =
                          !t ||
                          e.width !== y.displayWidth ||
                          e.height !== y.displayHeight;
                      if (
                        (D &&
                          ((e.width = y.displayWidth),
                          (e.height = y.displayHeight),
                          a.clear()),
                        t ||
                          (function () {
                            if (i.stripe) {
                              (n = B(r.vertexStripe, r.fragmentStripe)),
                                u.getAttribLocation(n, "aPosition"),
                                (d = u.createBuffer());
                              var e = new Float32Array([
                                0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1,
                              ]);
                              u.bindBuffer(u.ARRAY_BUFFER, d),
                                u.bufferData(u.ARRAY_BUFFER, e, u.STATIC_DRAW),
                                (c = u.getAttribLocation(
                                  n,
                                  "aTexturePosition",
                                )),
                                (f = u.getUniformLocation(n, "uStripe")),
                                (h = u.getUniformLocation(n, "uTexture"));
                            }
                            (t = B(r.vertex, r.fragment)),
                              (s = u.createBuffer()),
                              u.bindBuffer(u.ARRAY_BUFFER, s),
                              u.bufferData(u.ARRAY_BUFFER, g, u.STATIC_DRAW),
                              (l = u.getAttribLocation(t, "aPosition")),
                              (p = u.createBuffer()),
                              (m = u.getAttribLocation(t, "aLumaPosition")),
                              (_ = u.createBuffer()),
                              (v = u.getAttribLocation(t, "aChromaPosition"));
                          })(),
                        D)
                      ) {
                        var b = function (e, t, n) {
                          var r = y.cropLeft / n,
                            i = (y.cropLeft + y.cropWidth) / n,
                            a = (y.cropTop + y.cropHeight) / y.height,
                            o = y.cropTop / y.height,
                            s = new Float32Array([
                              r,
                              a,
                              i,
                              a,
                              r,
                              o,
                              r,
                              o,
                              i,
                              a,
                              i,
                              o,
                            ]);
                          u.bindBuffer(u.ARRAY_BUFFER, e),
                            u.bufferData(u.ARRAY_BUFFER, s, u.STATIC_DRAW);
                        };
                        b(p, 0, o.y.stride),
                          b(_, 0, (o.u.stride * y.width) / y.chromaWidth);
                      }
                      E("uTextureY", D, o.y.stride, y.height, o.y.bytes),
                        E(
                          "uTextureCb",
                          D,
                          o.u.stride,
                          y.chromaHeight,
                          o.u.bytes,
                        ),
                        E(
                          "uTextureCr",
                          D,
                          o.v.stride,
                          y.chromaHeight,
                          o.v.bytes,
                        ),
                        i.stripe &&
                          (w("uTextureY", D, o.y.stride, y.height),
                          w("uTextureCb", D, o.u.stride, y.chromaHeight),
                          w("uTextureCr", D, o.v.stride, y.chromaHeight)),
                        u.useProgram(t),
                        u.viewport(0, 0, e.width, e.height),
                        A("uTextureY", u.TEXTURE0, 0),
                        A("uTextureCb", u.TEXTURE1, 1),
                        A("uTextureCr", u.TEXTURE2, 2),
                        u.bindBuffer(u.ARRAY_BUFFER, s),
                        u.enableVertexAttribArray(l),
                        u.vertexAttribPointer(l, 2, u.FLOAT, !1, 0, 0),
                        u.bindBuffer(u.ARRAY_BUFFER, p),
                        u.enableVertexAttribArray(m),
                        u.vertexAttribPointer(m, 2, u.FLOAT, !1, 0, 0),
                        u.bindBuffer(u.ARRAY_BUFFER, _),
                        u.enableVertexAttribArray(v),
                        u.vertexAttribPointer(v, 2, u.FLOAT, !1, 0, 0),
                        u.drawArrays(u.TRIANGLES, 0, g.length / 2);
                    }),
                    (a.clear = function () {
                      u.viewport(0, 0, e.width, e.height),
                        u.clearColor(0, 0, 0, 0),
                        u.clear(u.COLOR_BUFFER_BIT);
                    }),
                    a.clear(),
                    a
                  );
                }
                (i.stripe = !1),
                  (i.contextForCanvas = function (e) {
                    var t = {
                      preferLowPowerToHighPerformance: !0,
                      powerPreference: "low-power",
                      failIfMajorPerformanceCaveat: !0,
                      preserveDrawingBuffer: !0,
                    };
                    return (
                      e.getContext("webgl", t) ||
                      e.getContext("experimental-webgl", t)
                    );
                  }),
                  (i.isAvailable = function () {
                    var e,
                      t = document.createElement("canvas");
                    (t.width = 1), (t.height = 1);
                    try {
                      e = i.contextForCanvas(t);
                    } catch (e) {
                      return !1;
                    }
                    if (e) {
                      var n = e.TEXTURE0,
                        r = e.createTexture(),
                        a = new Uint8Array(16),
                        u = i.stripe ? 1 : 4,
                        o = i.stripe ? e.RGBA : e.ALPHA,
                        s = i.stripe ? e.NEAREST : e.LINEAR;
                      return (
                        e.activeTexture(n),
                        e.bindTexture(e.TEXTURE_2D, r),
                        e.texParameteri(
                          e.TEXTURE_2D,
                          e.TEXTURE_WRAP_S,
                          e.CLAMP_TO_EDGE,
                        ),
                        e.texParameteri(
                          e.TEXTURE_2D,
                          e.TEXTURE_WRAP_T,
                          e.CLAMP_TO_EDGE,
                        ),
                        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MIN_FILTER, s),
                        e.texParameteri(e.TEXTURE_2D, e.TEXTURE_MAG_FILTER, s),
                        e.texImage2D(
                          e.TEXTURE_2D,
                          0,
                          o,
                          u,
                          4,
                          0,
                          o,
                          e.UNSIGNED_BYTE,
                          a,
                        ),
                        !e.getError()
                      );
                    }
                    return !1;
                  }),
                  (i.prototype = Object.create(t.prototype)),
                  (e.exports = i);
              })();
            },
            627: (e, t, n) => {
              !(function () {
                "use strict";
                var t = n(877);
                e.exports = {
                  convertYCbCr: function (e, n) {
                    var r = 0 | e.format.width,
                      i = 0 | e.format.height,
                      a = 0 | t(e.format.width / e.format.chromaWidth),
                      u = 0 | t(e.format.height / e.format.chromaHeight),
                      o = e.y.bytes,
                      s = e.u.bytes,
                      l = e.v.bytes,
                      d = 0 | e.y.stride,
                      c = 0 | e.u.stride,
                      f = 0 | e.v.stride,
                      h = r << 2,
                      p = 0,
                      m = 0,
                      _ = 0,
                      v = 0,
                      g = 0,
                      y = 0,
                      D = 0,
                      b = 0,
                      C = 0,
                      E = 0,
                      w = 0,
                      A = 0,
                      B = 0,
                      F = 0,
                      V = 0,
                      T = 0,
                      k = 0,
                      x = 0;
                    if (1 == a && 1 == u)
                      for (D = 0, b = h, x = 0, T = 0; T < i; T += 2) {
                        for (
                          _ = ((m = (T * d) | 0) + d) | 0,
                            v = (x * c) | 0,
                            g = (x * f) | 0,
                            V = 0;
                          V < r;
                          V += 2
                        )
                          (C = 0 | s[v++]),
                            (A = (((409 * (E = 0 | l[g++])) | 0) - 57088) | 0),
                            (B =
                              (((100 * C) | 0) + ((208 * E) | 0) - 34816) | 0),
                            (F = (((516 * C) | 0) - 70912) | 0),
                            (w = (298 * o[m++]) | 0),
                            (n[D] = (w + A) >> 8),
                            (n[D + 1] = (w - B) >> 8),
                            (n[D + 2] = (w + F) >> 8),
                            (D += 4),
                            (w = (298 * o[m++]) | 0),
                            (n[D] = (w + A) >> 8),
                            (n[D + 1] = (w - B) >> 8),
                            (n[D + 2] = (w + F) >> 8),
                            (D += 4),
                            (w = (298 * o[_++]) | 0),
                            (n[b] = (w + A) >> 8),
                            (n[b + 1] = (w - B) >> 8),
                            (n[b + 2] = (w + F) >> 8),
                            (b += 4),
                            (w = (298 * o[_++]) | 0),
                            (n[b] = (w + A) >> 8),
                            (n[b + 1] = (w - B) >> 8),
                            (n[b + 2] = (w + F) >> 8),
                            (b += 4);
                        (D += h), (b += h), x++;
                      }
                    else
                      for (y = 0, T = 0; T < i; T++)
                        for (
                          k = 0,
                            p = (T * d) | 0,
                            v = ((x = T >> u) * c) | 0,
                            g = (x * f) | 0,
                            V = 0;
                          V < r;
                          V++
                        )
                          (C = 0 | s[v + (k = V >> a)]),
                            (A =
                              (((409 * (E = 0 | l[g + k])) | 0) - 57088) | 0),
                            (B =
                              (((100 * C) | 0) + ((208 * E) | 0) - 34816) | 0),
                            (F = (((516 * C) | 0) - 70912) | 0),
                            (w = (298 * o[p++]) | 0),
                            (n[y] = (w + A) >> 8),
                            (n[y + 1] = (w - B) >> 8),
                            (n[y + 2] = (w + F) >> 8),
                            (y += 4);
                  },
                };
              })();
            },
            877: (e) => {
              !(function () {
                "use strict";
                e.exports = function (e) {
                  for (var t = 0, n = e >> 1; 0 != n; ) (n >>= 1), t++;
                  if (e !== 1 << t)
                    throw (
                      "chroma plane dimensions must be power of 2 ratio to luma plane dimensions; got " +
                      e
                    );
                  return t;
                };
              })();
            },
            731: (e, t, n) => {
              !(function () {
                "use strict";
                var t = n(487),
                  r = n(926),
                  i = n(895);
                e.exports = {
                  FrameSink: t,
                  SoftwareFrameSink: r,
                  WebGLFrameSink: i,
                  attach: function (e, t) {
                    return (
                      "webGL" in (t = t || {}) ? t.webGL : i.isAvailable()
                    )
                      ? new i(e, t)
                      : new r(e, t);
                  },
                };
              })();
            },
          },
          t = {};
        function n(r) {
          var i = t[r];
          if (void 0 !== i) return i.exports;
          var a = (t[r] = { exports: {} });
          return e[r](a, a.exports, n), a.exports;
        }
        (n.d = (e, t) => {
          for (var r in t)
            n.o(t, r) &&
              !n.o(e, r) &&
              Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        }),
          (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
          (n.r = (e) => {
            "u" > typeof Symbol &&
              Symbol.toStringTag &&
              Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
              Object.defineProperty(e, "__esModule", { value: !0 });
          });
        var r = {};
        return (
          (() => {
            "use strict";
            var e = n(318);
            Object.defineProperty(r, "__esModule", { value: !0 }),
              Object.defineProperty(r, "OGVCompat", {
                enumerable: !0,
                get: function () {
                  return i.default;
                },
              }),
              Object.defineProperty(r, "OGVLoader", {
                enumerable: !0,
                get: function () {
                  return a.default;
                },
              }),
              Object.defineProperty(r, "OGVMediaError", {
                enumerable: !0,
                get: function () {
                  return u.default;
                },
              }),
              Object.defineProperty(r, "OGVMediaType", {
                enumerable: !0,
                get: function () {
                  return o.default;
                },
              }),
              Object.defineProperty(r, "OGVPlayer", {
                enumerable: !0,
                get: function () {
                  return s.default;
                },
              }),
              Object.defineProperty(r, "OGVTimeRanges", {
                enumerable: !0,
                get: function () {
                  return l.default;
                },
              }),
              (r.OGVVersion = void 0);
            var t = e(n(8)),
              i = e(n(523)),
              a = e(n(964)),
              u = e(n(759)),
              o = e(n(278)),
              s = e(n(869)),
              l = e(n(168)),
              d = "1.8.9-20220406232920-cb5f7ff";
            (r.OGVVersion = d),
              "object" ===
                ("u" < typeof window ? "undefined" : (0, t.default)(window)) &&
                ((window.OGVCompat = i.default),
                (window.OGVLoader = a.default),
                (window.OGVMediaError = u.default),
                (window.OGVMediaType = o.default),
                (window.OGVTimeRanges = l.default),
                (window.OGVPlayer = s.default),
                (window.OGVVersion = d));
          })(),
          r
        );
      })();
    },
    335033(e, t, n) {
      e.exports = n(108110);
    },
    670482(e, t, n) {
      "use strict";
      n.d(t, {
        rL: () => te,
        f7: () => tg,
        RV: () => td,
        o$: () => t6,
        A: () => t5,
        Fo: () => tX,
        zL: () => t1,
      });
      var r,
        i,
        a,
        u = n(877413),
        o = n.n(u),
        s = n(805353),
        l = n.n(s),
        d = n(879378),
        c = n.n(d),
        f = n(64700);
      function h(e) {
        return "object" == typeof e && null != e && 1 === e.nodeType;
      }
      function p(e, t) {
        return (!t || "hidden" !== e) && "visible" !== e && "clip" !== e;
      }
      function m(e, t) {
        if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
          var n,
            r = getComputedStyle(e, null);
          return (
            p(r.overflowY, t) ||
            p(r.overflowX, t) ||
            (!!(n = (function (e) {
              if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
              try {
                return e.ownerDocument.defaultView.frameElement;
              } catch (e) {
                return null;
              }
            })(e)) &&
              (n.clientHeight < e.scrollHeight ||
                n.clientWidth < e.scrollWidth))
          );
        }
        return !1;
      }
      function _(e, t, n, r, i, a, u, o) {
        return (a < e && u > t) || (a > e && u < t)
          ? 0
          : (a <= e && o <= n) || (u >= t && o >= n)
            ? a - e - r
            : (u > t && o < n) || (a < e && o > n)
              ? u - t + i
              : 0;
      }
      var v = function (e, t) {
        var n = window,
          r = t.scrollMode,
          i = t.block,
          a = t.inline,
          u = t.boundary,
          o = t.skipOverflowHiddenElements,
          s =
            "function" == typeof u
              ? u
              : function (e) {
                  return e !== u;
                };
        if (!h(e)) throw TypeError("Invalid target");
        for (
          var l,
            d,
            c = document.scrollingElement || document.documentElement,
            f = [],
            p = e;
          h(p) && s(p);

        ) {
          if (
            (p =
              null == (d = (l = p).parentElement)
                ? l.getRootNode().host || null
                : d) === c
          ) {
            f.push(p);
            break;
          }
          (null != p &&
            p === document.body &&
            m(p) &&
            !m(document.documentElement)) ||
            (null != p && m(p, o) && f.push(p));
        }
        for (
          var v = n.visualViewport ? n.visualViewport.width : innerWidth,
            g = n.visualViewport ? n.visualViewport.height : innerHeight,
            y = window.scrollX || pageXOffset,
            D = window.scrollY || pageYOffset,
            b = e.getBoundingClientRect(),
            C = b.height,
            E = b.width,
            w = b.top,
            A = b.right,
            B = b.bottom,
            F = b.left,
            V =
              "start" === i || "nearest" === i
                ? w
                : "end" === i
                  ? B
                  : w + C / 2,
            T = "center" === a ? F + E / 2 : "end" === a ? A : F,
            k = [],
            x = 0;
          x < f.length;
          x++
        ) {
          var P = f[x],
            O = P.getBoundingClientRect(),
            S = O.height,
            R = O.width,
            M = O.top,
            N = O.right,
            L = O.bottom,
            I = O.left;
          if (
            "if-needed" === r &&
            w >= 0 &&
            F >= 0 &&
            B <= g &&
            A <= v &&
            w >= M &&
            B <= L &&
            F >= I &&
            A <= N
          )
            break;
          var j = getComputedStyle(P),
            G = parseInt(j.borderLeftWidth, 10),
            W = parseInt(j.borderTopWidth, 10),
            K = parseInt(j.borderRightWidth, 10),
            U = parseInt(j.borderBottomWidth, 10),
            H = 0,
            q = 0,
            z = "offsetWidth" in P ? P.offsetWidth - P.clientWidth - G - K : 0,
            X =
              "offsetHeight" in P ? P.offsetHeight - P.clientHeight - W - U : 0,
            Q =
              "offsetWidth" in P
                ? 0 === P.offsetWidth
                  ? 0
                  : R / P.offsetWidth
                : 0,
            Z =
              "offsetHeight" in P
                ? 0 === P.offsetHeight
                  ? 0
                  : S / P.offsetHeight
                : 0;
          if (c === P)
            (H =
              "start" === i
                ? V
                : "end" === i
                  ? V - g
                  : "nearest" === i
                    ? _(D, D + g, g, W, U, D + V, D + V + C, C)
                    : V - g / 2),
              (q =
                "start" === a
                  ? T
                  : "center" === a
                    ? T - v / 2
                    : "end" === a
                      ? T - v
                      : _(y, y + v, v, G, K, y + T, y + T + E, E)),
              (H = Math.max(0, H + D)),
              (q = Math.max(0, q + y));
          else {
            (H =
              "start" === i
                ? V - M - W
                : "end" === i
                  ? V - L + U + X
                  : "nearest" === i
                    ? _(M, L, S, W, U + X, V, V + C, C)
                    : V - (M + S / 2) + X / 2),
              (q =
                "start" === a
                  ? T - I - G
                  : "center" === a
                    ? T - (I + R / 2) + z / 2
                    : "end" === a
                      ? T - N + K + z
                      : _(I, N, R, G, K + z, T, T + E, E));
            var Y = P.scrollLeft,
              J = P.scrollTop;
            (V +=
              J -
              (H = Math.max(
                0,
                Math.min(J + H / Z, P.scrollHeight - S / Z + X),
              ))),
              (T +=
                Y -
                (q = Math.max(
                  0,
                  Math.min(Y + q / Q, P.scrollWidth - R / Q + z),
                )));
          }
          k.push({ el: P, top: H, left: q });
        }
        return k;
      };
      function g(e) {
        return e === Object(e) && 0 !== Object.keys(e).length;
      }
      let y = function (e, t) {
        var n = e.isConnected || e.ownerDocument.documentElement.contains(e);
        if (g(t) && "function" == typeof t.behavior)
          return t.behavior(n ? v(e, t) : []);
        if (n) {
          var r,
            i,
            a,
            u =
              !1 === t
                ? { block: "end", inline: "nearest" }
                : g(t)
                  ? t
                  : { block: "start", inline: "nearest" };
          return (
            (r = v(e, u)),
            void 0 === (i = u.behavior) && (i = "auto"),
            (a = "scrollBehavior" in document.body.style),
            void r.forEach(function (e) {
              var t = e.el,
                n = e.top,
                r = e.left;
              t.scroll && a
                ? t.scroll({ top: n, left: r, behavior: i })
                : ((t.scrollTop = n), (t.scrollLeft = r));
            })
          );
        }
      };
      var D = n(154283),
        b = [],
        C = "ResizeObserver loop completed with undelivered notifications.",
        E = function () {
          var e;
          "function" == typeof ErrorEvent
            ? (e = new ErrorEvent("error", { message: C }))
            : ((e = document.createEvent("Event")).initEvent("error", !1, !1),
              (e.message = C)),
            window.dispatchEvent(e);
        };
      ((r = i || (i = {})).BORDER_BOX = "border-box"),
        (r.CONTENT_BOX = "content-box"),
        (r.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box");
      var w = function (e) {
          return Object.freeze(e);
        },
        A = function (e, t) {
          (this.inlineSize = e), (this.blockSize = t), w(this);
        },
        B = (function () {
          function e(e, t, n, r) {
            return (
              (this.x = e),
              (this.y = t),
              (this.width = n),
              (this.height = r),
              (this.top = this.y),
              (this.left = this.x),
              (this.bottom = this.top + this.height),
              (this.right = this.left + this.width),
              w(this)
            );
          }
          return (
            (e.prototype.toJSON = function () {
              return {
                x: this.x,
                y: this.y,
                top: this.top,
                right: this.right,
                bottom: this.bottom,
                left: this.left,
                width: this.width,
                height: this.height,
              };
            }),
            (e.fromRect = function (t) {
              return new e(t.x, t.y, t.width, t.height);
            }),
            e
          );
        })(),
        F = function (e) {
          return e instanceof SVGElement && "getBBox" in e;
        },
        V = function (e) {
          if (F(e)) {
            var t = e.getBBox(),
              n = t.width,
              r = t.height;
            return !n && !r;
          }
          var i = e.offsetWidth,
            a = e.offsetHeight;
          return !(i || a || e.getClientRects().length);
        },
        T = function (e) {
          if (e instanceof Element) return !0;
          var t,
            n =
              null == (t = null == e ? void 0 : e.ownerDocument)
                ? void 0
                : t.defaultView;
          return !!(n && e instanceof n.Element);
        },
        k = function (e) {
          switch (e.tagName) {
            case "INPUT":
              if ("image" !== e.type) break;
            case "VIDEO":
            case "AUDIO":
            case "EMBED":
            case "OBJECT":
            case "CANVAS":
            case "IFRAME":
            case "IMG":
              return !0;
          }
          return !1;
        },
        x = "u" > typeof window ? window : {},
        P = new WeakMap(),
        O = /auto|scroll/,
        S = /^tb|vertical/,
        R = /msie|trident/i.test(x.navigator && x.navigator.userAgent),
        M = function (e) {
          return parseFloat(e || "0");
        },
        N = function (e, t, n) {
          return (
            void 0 === e && (e = 0),
            void 0 === t && (t = 0),
            void 0 === n && (n = !1),
            new A((n ? t : e) || 0, (n ? e : t) || 0)
          );
        },
        L = w({
          devicePixelContentBoxSize: N(),
          borderBoxSize: N(),
          contentBoxSize: N(),
          contentRect: new B(0, 0, 0, 0),
        }),
        I = function (e, t) {
          if ((void 0 === t && (t = !1), P.has(e) && !t)) return P.get(e);
          if (V(e)) return P.set(e, L), L;
          var n = getComputedStyle(e),
            r = F(e) && e.ownerSVGElement && e.getBBox(),
            i = !R && "border-box" === n.boxSizing,
            a = S.test(n.writingMode || ""),
            u = !r && O.test(n.overflowY || ""),
            o = !r && O.test(n.overflowX || ""),
            s = r ? 0 : M(n.paddingTop),
            l = r ? 0 : M(n.paddingRight),
            d = r ? 0 : M(n.paddingBottom),
            c = r ? 0 : M(n.paddingLeft),
            f = r ? 0 : M(n.borderTopWidth),
            h = r ? 0 : M(n.borderRightWidth),
            p = r ? 0 : M(n.borderBottomWidth),
            m = r ? 0 : M(n.borderLeftWidth),
            _ = c + l,
            v = s + d,
            g = m + h,
            y = f + p,
            D = o ? e.offsetHeight - y - e.clientHeight : 0,
            b = u ? e.offsetWidth - g - e.clientWidth : 0,
            C = r ? r.width : M(n.width) - (i ? _ + g : 0) - b,
            E = r ? r.height : M(n.height) - (i ? v + y : 0) - D,
            A = C + _ + b + g,
            T = E + v + D + y,
            k = w({
              devicePixelContentBoxSize: N(
                Math.round(C * devicePixelRatio),
                Math.round(E * devicePixelRatio),
                a,
              ),
              borderBoxSize: N(A, T, a),
              contentBoxSize: N(C, E, a),
              contentRect: new B(c, s, C, E),
            });
          return P.set(e, k), k;
        },
        j = function (e, t, n) {
          var r = I(e, n),
            a = r.borderBoxSize,
            u = r.contentBoxSize,
            o = r.devicePixelContentBoxSize;
          switch (t) {
            case i.DEVICE_PIXEL_CONTENT_BOX:
              return o;
            case i.BORDER_BOX:
              return a;
            default:
              return u;
          }
        },
        G = function (e) {
          var t = I(e);
          (this.target = e),
            (this.contentRect = t.contentRect),
            (this.borderBoxSize = w([t.borderBoxSize])),
            (this.contentBoxSize = w([t.contentBoxSize])),
            (this.devicePixelContentBoxSize = w([t.devicePixelContentBoxSize]));
        },
        W = function (e) {
          if (V(e)) return 1 / 0;
          for (var t = 0, n = e.parentNode; n; ) (t += 1), (n = n.parentNode);
          return t;
        },
        K = function () {
          var e = 1 / 0,
            t = [];
          b.forEach(function (n) {
            if (0 !== n.activeTargets.length) {
              var r = [];
              n.activeTargets.forEach(function (t) {
                var n = new G(t.target),
                  i = W(t.target);
                r.push(n),
                  (t.lastReportedSize = j(t.target, t.observedBox)),
                  i < e && (e = i);
              }),
                t.push(function () {
                  n.callback.call(n.observer, r, n.observer);
                }),
                n.activeTargets.splice(0, n.activeTargets.length);
            }
          });
          for (var n = 0; n < t.length; n++) (0, t[n])();
          return e;
        },
        U = function (e) {
          b.forEach(function (t) {
            t.activeTargets.splice(0, t.activeTargets.length),
              t.skippedTargets.splice(0, t.skippedTargets.length),
              t.observationTargets.forEach(function (n) {
                n.isActive() &&
                  (W(n.target) > e
                    ? t.activeTargets.push(n)
                    : t.skippedTargets.push(n));
              });
          });
        },
        H = function () {
          var e = 0;
          for (
            U(0);
            b.some(function (e) {
              return e.activeTargets.length > 0;
            });

          )
            U((e = K()));
          return (
            b.some(function (e) {
              return e.skippedTargets.length > 0;
            }) && E(),
            e > 0
          );
        },
        q = [],
        z = function (e) {
          if (!a) {
            var t = 0,
              n = document.createTextNode("");
            new MutationObserver(function () {
              return q.splice(0).forEach(function (e) {
                return e();
              });
            }).observe(n, { characterData: !0 }),
              (a = function () {
                n.textContent = "".concat(t ? t-- : t++);
              });
          }
          q.push(e), a();
        },
        X = function (e) {
          z(function () {
            requestAnimationFrame(e);
          });
        },
        Q = 0,
        Z = { attributes: !0, characterData: !0, childList: !0, subtree: !0 },
        Y = [
          "resize",
          "load",
          "transitionend",
          "animationend",
          "animationstart",
          "animationiteration",
          "keyup",
          "keydown",
          "mouseup",
          "mousedown",
          "mouseover",
          "mouseout",
          "blur",
          "focus",
        ],
        J = function (e) {
          return void 0 === e && (e = 0), Date.now() + e;
        },
        $ = !1,
        ee = new ((function () {
          function e() {
            var e = this;
            (this.stopped = !0),
              (this.listener = function () {
                return e.schedule();
              });
          }
          return (
            (e.prototype.run = function (e) {
              var t = this;
              if ((void 0 === e && (e = 250), !$)) {
                $ = !0;
                var n = J(e);
                X(function () {
                  var r = !1;
                  try {
                    r = H();
                  } finally {
                    if ((($ = !1), (e = n - J()), !Q)) return;
                    r ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
                  }
                });
              }
            }),
            (e.prototype.schedule = function () {
              this.stop(), this.run();
            }),
            (e.prototype.observe = function () {
              var e = this,
                t = function () {
                  return e.observer && e.observer.observe(document.body, Z);
                };
              document.body ? t() : x.addEventListener("DOMContentLoaded", t);
            }),
            (e.prototype.start = function () {
              var e = this;
              this.stopped &&
                ((this.stopped = !1),
                (this.observer = new MutationObserver(this.listener)),
                this.observe(),
                Y.forEach(function (t) {
                  return x.addEventListener(t, e.listener, !0);
                }));
            }),
            (e.prototype.stop = function () {
              var e = this;
              this.stopped ||
                (this.observer && this.observer.disconnect(),
                Y.forEach(function (t) {
                  return x.removeEventListener(t, e.listener, !0);
                }),
                (this.stopped = !0));
            }),
            e
          );
        })())(),
        et = function (e) {
          !Q && e > 0 && ee.start(), (Q += e) || ee.stop();
        },
        en = (function () {
          function e(e, t) {
            (this.target = e),
              (this.observedBox = t || i.CONTENT_BOX),
              (this.lastReportedSize = { inlineSize: 0, blockSize: 0 });
          }
          return (
            (e.prototype.isActive = function () {
              var e,
                t = j(this.target, this.observedBox, !0);
              return (
                F((e = this.target)) ||
                  k(e) ||
                  "inline" !== getComputedStyle(e).display ||
                  (this.lastReportedSize = t),
                this.lastReportedSize.inlineSize !== t.inlineSize ||
                  this.lastReportedSize.blockSize !== t.blockSize
              );
            }),
            e
          );
        })(),
        er = function (e, t) {
          (this.activeTargets = []),
            (this.skippedTargets = []),
            (this.observationTargets = []),
            (this.observer = e),
            (this.callback = t);
        },
        ei = new WeakMap(),
        ea = function (e, t) {
          for (var n = 0; n < e.length; n += 1) if (e[n].target === t) return n;
          return -1;
        },
        eu = (function () {
          function e() {}
          return (
            (e.connect = function (e, t) {
              var n = new er(e, t);
              ei.set(e, n);
            }),
            (e.observe = function (e, t, n) {
              var r = ei.get(e),
                i = 0 === r.observationTargets.length;
              0 > ea(r.observationTargets, t) &&
                (i && b.push(r),
                r.observationTargets.push(new en(t, n && n.box)),
                et(1),
                ee.schedule());
            }),
            (e.unobserve = function (e, t) {
              var n = ei.get(e),
                r = ea(n.observationTargets, t),
                i = 1 === n.observationTargets.length;
              r >= 0 &&
                (i && b.splice(b.indexOf(n), 1),
                n.observationTargets.splice(r, 1),
                et(-1));
            }),
            (e.disconnect = function (e) {
              var t = this,
                n = ei.get(e);
              n.observationTargets.slice().forEach(function (n) {
                return t.unobserve(e, n.target);
              }),
                n.activeTargets.splice(0, n.activeTargets.length);
            }),
            e
          );
        })(),
        eo = (function () {
          function e(e) {
            if (0 == arguments.length)
              throw TypeError(
                "Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.",
              );
            if ("function" != typeof e)
              throw TypeError(
                "Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.",
              );
            eu.connect(this, e);
          }
          return (
            (e.prototype.observe = function (e, t) {
              if (0 == arguments.length)
                throw TypeError(
                  "Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.",
                );
              if (!T(e))
                throw TypeError(
                  "Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element",
                );
              eu.observe(this, e, t);
            }),
            (e.prototype.unobserve = function (e) {
              if (0 == arguments.length)
                throw TypeError(
                  "Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.",
                );
              if (!T(e))
                throw TypeError(
                  "Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element",
                );
              eu.unobserve(this, e);
            }),
            (e.prototype.disconnect = function () {
              eu.disconnect(this);
            }),
            (e.toString = function () {
              return "function ResizeObserver () { [polyfill code] }";
            }),
            e
          );
        })(),
        es = n(294106),
        el = n(340287);
      function ed(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function ec(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              !(t.indexOf(n) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(e, n) &&
                (i[n] = e[n]);
        }
        return i;
      }
      var ef = 0;
      class eh {
        constructor() {
          this.id = "".concat(ef++);
        }
      }
      var ep = new WeakMap(),
        em = new WeakMap(),
        e_ = new WeakMap(),
        ev = new WeakMap(),
        eg = new WeakMap(),
        ey = new WeakMap(),
        eD = new WeakMap(),
        eb = new WeakMap(),
        eC = new WeakMap(),
        eE = new WeakMap(),
        ew = new WeakMap(),
        eA = new WeakMap(),
        eB = new WeakMap(),
        eF = new WeakMap(),
        eV = new WeakMap(),
        eT = new WeakMap(),
        ek = new WeakMap(),
        ex = new WeakMap(),
        eP = new WeakMap(),
        eO = new WeakMap(),
        eS = new WeakMap(),
        eR = Symbol("placeholder"),
        eM = Symbol("mark-placeholder"),
        eN = globalThis.Text,
        eL = (e) =>
          (e && e.ownerDocument && e.ownerDocument.defaultView) || null,
        eI = (e) => eG(e) && 8 === e.nodeType,
        ej = (e) => eG(e) && 1 === e.nodeType,
        eG = (e) => {
          var t = eL(e);
          return !!t && e instanceof t.Node;
        },
        eW = (e) => {
          var t = e && e.anchorNode && eL(e.anchorNode);
          return !!t && e instanceof t.Selection;
        },
        eK = (e) => eG(e) && 3 === e.nodeType,
        eU = (e, t, n) => {
          for (
            var { childNodes: r } = e, i = r[t], a = t, u = !1, o = !1;
            (eI(i) ||
              (ej(i) && 0 === i.childNodes.length) ||
              (ej(i) && "false" === i.getAttribute("contenteditable"))) &&
            (!u || !o);

          ) {
            if (a >= r.length) {
              (u = !0), (a = t - 1), (n = "backward");
              continue;
            }
            if (a < 0) {
              (o = !0), (a = t + 1), (n = "forward");
              continue;
            }
            (i = r[a]), (t = a), (a += "forward" === n ? 1 : -1);
          }
          return [i, t];
        },
        eH = (e, t, n) => {
          var [r] = eU(e, t, n);
          return r;
        },
        eq = (e) => {
          var t = "";
          if (eK(e) && e.nodeValue) return e.nodeValue;
          if (ej(e)) {
            for (var n of Array.from(e.childNodes)) t += eq(n);
            var r = getComputedStyle(e).getPropertyValue("display");
            ("block" === r || "list" === r || "BR" === e.tagName) &&
              (t += "\n");
          }
          return t;
        },
        ez = /data-slate-fragment="(.+?)"/m,
        eX = (e, t, n) => {
          var { target: r } = t;
          if (ej(r) && r.matches('[contentEditable="false"]')) return !1;
          var { document: i } = te.getWindow(e);
          if (i.contains(r)) return te.hasDOMNode(e, r, { editable: !0 });
          var a = n.find((e) => {
            var { addedNodes: t, removedNodes: n } = e;
            for (var i of t) if (i === r || i.contains(r)) return !0;
            for (var a of n) if (a === r || a.contains(r)) return !0;
          });
          return !!a && a !== t && eX(e, a, n);
        },
        eQ = parseInt(f.version.split(".")[0], 10) >= 17,
        eZ =
          "u" > typeof navigator &&
          "u" > typeof window &&
          /iPad|iPhone|iPod/.test(navigator.userAgent) &&
          !window.MSStream,
        eY = "u" > typeof navigator && /Mac OS X/.test(navigator.userAgent),
        eJ = "u" > typeof navigator && /Android/.test(navigator.userAgent),
        e$ =
          "u" > typeof navigator &&
          /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
        e0 =
          "u" > typeof navigator &&
          /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
        e1 =
          "u" > typeof navigator &&
          /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
        e2 = "u" > typeof navigator && /Chrome/i.test(navigator.userAgent),
        e3 =
          "u" > typeof navigator &&
          /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent),
        e5 =
          eJ &&
          "u" > typeof navigator &&
          /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent),
        e8 =
          "u" > typeof navigator &&
          /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(
            navigator.userAgent,
          ),
        e7 = "u" > typeof navigator && /.*UCBrowser/.test(navigator.userAgent),
        e4 = "u" > typeof navigator && /.*Wechat/.test(navigator.userAgent),
        e9 =
          "u" > typeof window &&
          void 0 !== window.document &&
          void 0 !== window.document.createElement,
        e6 =
          (!e3 || !e5) &&
          !e1 &&
          "u" > typeof globalThis &&
          globalThis.InputEvent &&
          "function" == typeof globalThis.InputEvent.prototype.getTargetRanges,
        te = {
          isComposing: (e) => !!eA.get(e),
          getWindow(e) {
            var t = e_.get(e);
            if (!t)
              throw Error(
                "Unable to find a host window element for this editor",
              );
            return t;
          },
          findKey(e, t) {
            var n = eb.get(t);
            return n || ((n = new eh()), eb.set(t, n)), n;
          },
          findPath(e, t) {
            for (var n = [], r = t; ; ) {
              var i = em.get(r);
              if (null == i)
                if (D.KE.isEditor(r)) return n;
                else break;
              var a = ep.get(r);
              if (null == a) break;
              n.unshift(a), (r = i);
            }
            throw Error(
              "Unable to find the path for Slate node: ".concat(
                D.h6.stringify(t),
              ),
            );
          },
          findDocumentOrShadowRoot(e) {
            var t = te.toDOMNode(e, e),
              n = t.getRootNode();
            return (n instanceof Document || n instanceof ShadowRoot) &&
              null != n.getSelection
              ? n
              : t.ownerDocument;
          },
          isFocused: (e) => !!ew.get(e),
          isReadOnly: (e) => !!eE.get(e),
          blur(e) {
            var t = te.toDOMNode(e, e),
              n = te.findDocumentOrShadowRoot(e);
            ew.set(e, !1), n.activeElement === t && t.blur();
          },
          focus(e) {
            var t = te.toDOMNode(e, e),
              n = te.findDocumentOrShadowRoot(e);
            ew.set(e, !0),
              n.activeElement !== t && t.focus({ preventScroll: !0 });
          },
          deselect(e) {
            var { selection: t } = e,
              n = te.findDocumentOrShadowRoot(e).getSelection();
            n && n.rangeCount > 0 && n.removeAllRanges(), t && D.gB.deselect(e);
          },
          hasDOMNode(e, t) {
            var n,
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { editable: i = !1 } = r,
              a = te.toDOMNode(e, e);
            try {
              n = ej(t) ? t : t.parentElement;
            } catch (e) {
              if (
                !e.message.includes(
                  'Permission denied to access property "nodeType"',
                )
              )
                throw e;
            }
            return (
              !!n &&
              n.closest("[data-slate-editor]") === a &&
              (!i ||
                !!n.isContentEditable ||
                ("boolean" == typeof n.isContentEditable &&
                  n.closest('[contenteditable="false"]') === a) ||
                !!n.getAttribute("data-slate-zero-width"))
            );
          },
          insertData(e, t) {
            e.insertData(t);
          },
          insertFragmentData: (e, t) => e.insertFragmentData(t),
          insertTextData: (e, t) => e.insertTextData(t),
          setFragmentData(e, t, n) {
            e.setFragmentData(t, n);
          },
          toDOMNode(e, t) {
            var n = eC.get(e),
              r = D.KE.isEditor(t)
                ? ev.get(e)
                : null == n
                  ? void 0
                  : n.get(te.findKey(e, t));
            if (!r)
              throw Error(
                "Cannot resolve a DOM node from Slate node: ".concat(
                  D.h6.stringify(t),
                ),
              );
            return r;
          },
          toDOMPoint(e, t) {
            var [n] = D.KE.node(e, t.path),
              r = te.toDOMNode(e, n);
            D.KE.void(e, { at: t }) && (t = { path: t.path, offset: 0 });
            for (
              var i = Array.from(
                  r.querySelectorAll(
                    "[data-slate-string], [data-slate-zero-width]",
                  ),
                ),
                a = 0,
                u = 0;
              u < i.length;
              u++
            ) {
              var o = i[u],
                s = o.childNodes[0];
              if (null != s && null != s.textContent) {
                var { length: l } = s.textContent,
                  d = o.getAttribute("data-slate-length"),
                  c = a + (null == d ? l : parseInt(d, 10)),
                  f = i[u + 1];
                if (
                  t.offset === c &&
                  null != f &&
                  f.hasAttribute("data-slate-mark-placeholder")
                ) {
                  var h,
                    p,
                    m = f.childNodes[0];
                  h = [
                    m instanceof eN ? m : f,
                    null != (p = f.textContent) && p.startsWith("\uFEFF")
                      ? 1
                      : 0,
                  ];
                  break;
                }
                if (t.offset <= c) {
                  h = [s, Math.min(l, Math.max(0, t.offset - a))];
                  break;
                }
                a = c;
              }
            }
            if (!h)
              throw Error(
                "Cannot resolve a DOM point from Slate point: ".concat(
                  D.h6.stringify(t),
                ),
              );
            return h;
          },
          toDOMRange(e, t) {
            var { anchor: n, focus: r } = t,
              i = D.Q6.isBackward(t),
              a = te.toDOMPoint(e, n),
              u = D.Q6.isCollapsed(t) ? a : te.toDOMPoint(e, r),
              o = te.getWindow(e).document.createRange(),
              [s, l] = i ? u : a,
              [d, c] = i ? a : u,
              f = !!(ej(s) ? s : s.parentElement).getAttribute(
                "data-slate-zero-width",
              ),
              h = !!(ej(d) ? d : d.parentElement).getAttribute(
                "data-slate-zero-width",
              );
            return o.setStart(s, f ? 1 : l), o.setEnd(d, h ? 1 : c), o;
          },
          toSlateNode(e, t) {
            var n = ej(t) ? t : t.parentElement;
            n &&
              !n.hasAttribute("data-slate-node") &&
              (n = n.closest("[data-slate-node]"));
            var r = n ? ey.get(n) : null;
            if (!r)
              throw Error(
                "Cannot resolve a Slate node from DOM node: ".concat(n),
              );
            return r;
          },
          findEventRange(e, t) {
            "nativeEvent" in t && (t = t.nativeEvent);
            var n,
              { clientX: r, clientY: i, target: a } = t;
            if (null == r || null == i)
              throw Error(
                "Cannot resolve a Slate range from a DOM event: ".concat(t),
              );
            var u = te.toSlateNode(e, t.target),
              o = te.findPath(e, u);
            if (D.Hg.isElement(u) && D.KE.isVoid(e, u)) {
              var s = a.getBoundingClientRect(),
                l = e.isInline(u)
                  ? r - s.left < s.left + s.width - r
                  : i - s.top < s.top + s.height - i,
                d = D.KE.point(e, o, { edge: l ? "start" : "end" }),
                c = l ? D.KE.before(e, d) : D.KE.after(e, d);
              if (c) return D.KE.range(e, c);
            }
            var { document: f } = te.getWindow(e);
            if (f.caretRangeFromPoint) n = f.caretRangeFromPoint(r, i);
            else {
              var h = f.caretPositionFromPoint(r, i);
              h &&
                ((n = f.createRange()).setStart(h.offsetNode, h.offset),
                n.setEnd(h.offsetNode, h.offset));
            }
            if (!n)
              throw Error(
                "Cannot resolve a Slate range from a DOM event: ".concat(t),
              );
            return te.toSlateRange(e, n, { exactMatch: !1, suppressThrow: !1 });
          },
          toSlatePoint(e, t, n) {
            var { exactMatch: r, suppressThrow: i } = n,
              [a, u] = r
                ? t
                : ((e) => {
                    var [t, n] = e;
                    if (ej(t) && t.childNodes.length) {
                      var r = n === t.childNodes.length,
                        i = r ? n - 1 : n;
                      for (
                        [t, i] = eU(t, i, r ? "backward" : "forward"),
                          r = i < n;
                        ej(t) && t.childNodes.length;

                      ) {
                        var a = r ? t.childNodes.length - 1 : 0;
                        t = eH(t, a, r ? "backward" : "forward");
                      }
                      n = r && null != t.textContent ? t.textContent.length : 0;
                    }
                    return [t, n];
                  })(t),
              o = a.parentNode,
              s = null,
              l = 0;
            if (o) {
              var d,
                c,
                f = te.toDOMNode(e, e),
                h = o.closest('[data-slate-void="true"]'),
                p = h && f.contains(h) ? h : null,
                m = o.closest("[data-slate-leaf]"),
                _ = null;
              if (m) {
                if ((s = m.closest('[data-slate-node="text"]'))) {
                  var v = te.getWindow(e).document.createRange();
                  v.setStart(s, 0), v.setEnd(a, u);
                  var g = v.cloneContents();
                  [
                    ...Array.prototype.slice.call(
                      g.querySelectorAll("[data-slate-zero-width]"),
                    ),
                    ...Array.prototype.slice.call(
                      g.querySelectorAll("[contenteditable=false]"),
                    ),
                  ].forEach((e) => {
                    if (
                      eJ &&
                      !r &&
                      e.hasAttribute("data-slate-zero-width") &&
                      e.textContent.length > 0 &&
                      "\uFEFF" !== e.textContext
                    ) {
                      e.textContent.startsWith("\uFEFF") &&
                        (e.textContent = e.textContent.slice(1));
                      return;
                    }
                    e.parentNode.removeChild(e);
                  }),
                    (l = g.textContent.length),
                    (_ = s);
                }
              } else if (p) {
                for (
                  var y = p.querySelectorAll("[data-slate-leaf]"), b = 0;
                  b < y.length;
                  b++
                ) {
                  var C = y[b];
                  if (te.hasDOMNode(e, C)) {
                    m = C;
                    break;
                  }
                }
                m
                  ? ((s = m.closest('[data-slate-node="text"]')),
                    (l = (_ = m).textContent.length),
                    _.querySelectorAll("[data-slate-zero-width]").forEach(
                      (e) => {
                        l -= e.textContent.length;
                      },
                    ))
                  : (l = 1);
              }
              _ &&
                l === _.textContent.length &&
                eJ &&
                "z" === _.getAttribute("data-slate-zero-width") &&
                null != (d = _.textContent) &&
                d.startsWith("\uFEFF") &&
                (o.hasAttribute("data-slate-zero-width") ||
                  (e$ && null != (c = _.textContent) && c.endsWith("\n\n"))) &&
                l--;
            }
            if (eJ && !s && !r) {
              var E = o.hasAttribute("data-slate-node")
                ? o
                : o.closest("[data-slate-node]");
              if (E && te.hasDOMNode(e, E, { editable: !0 })) {
                var w = te.toSlateNode(e, E),
                  { path: A, offset: B } = D.KE.start(e, te.findPath(e, w));
                return (
                  E.querySelector("[data-slate-leaf]") || (B = u),
                  { path: A, offset: B }
                );
              }
            }
            if (!s) {
              if (i) return null;
              throw Error(
                "Cannot resolve a Slate point from DOM point: ".concat(t),
              );
            }
            var F = te.toSlateNode(e, s);
            return { path: te.findPath(e, F), offset: l };
          },
          toSlateRange(e, t, n) {
            var r,
              i,
              a,
              u,
              o,
              s,
              { exactMatch: l, suppressThrow: d } = n;
            if (
              ((eW(t) ? t.anchorNode : t.startContainer) &&
                (eW(t)
                  ? ((r = t.anchorNode),
                    (i = t.anchorOffset),
                    (a = t.focusNode),
                    (u = t.focusOffset),
                    (o =
                      e2 &&
                      ((e) => {
                        for (var t = e && e.parentNode; t; ) {
                          if ("[object ShadowRoot]" === t.toString()) return !0;
                          t = t.parentNode;
                        }
                        return !1;
                      })(r)
                        ? t.anchorNode === t.focusNode &&
                          t.anchorOffset === t.focusOffset
                        : t.isCollapsed))
                  : ((r = t.startContainer),
                    (i = t.startOffset),
                    (a = t.endContainer),
                    (u = t.endOffset),
                    (o = t.collapsed))),
              null == r || null == a || null == i || null == u)
            )
              throw Error(
                "Cannot resolve a Slate range from DOM range: ".concat(t),
              );
            "getAttribute" in a &&
              "false" === a.getAttribute("contenteditable") &&
              ((a = r),
              (u = (null == (s = r.textContent) ? void 0 : s.length) || 0));
            var c = te.toSlatePoint(e, [r, i], {
              exactMatch: l,
              suppressThrow: d,
            });
            if (!c) return null;
            var f = o
              ? c
              : te.toSlatePoint(e, [a, u], { exactMatch: l, suppressThrow: d });
            if (!f) return null;
            if (e$ && !o && r !== a) {
              var h = D.KE.isEnd(e, c, c.path),
                p = D.KE.isStart(e, f, f.path);
              h && (c = D.KE.after(e, c) || c),
                p && (f = D.KE.before(e, f) || f);
            }
            var m = { anchor: c, focus: f };
            return (
              D.Q6.isExpanded(m) &&
                D.Q6.isForward(m) &&
                ej(a) &&
                D.KE.void(e, { at: m.focus, mode: "highest" }) &&
                (m = D.KE.unhangRange(e, m, { voids: !0 })),
              m
            );
          },
          hasRange(e, t) {
            var { anchor: n, focus: r } = t;
            return D.KE.hasPath(e, n.path) && D.KE.hasPath(e, r.path);
          },
          hasTarget: (e, t) => eG(t) && te.hasDOMNode(e, t),
          hasEditableTarget: (e, t) =>
            eG(t) && te.hasDOMNode(e, t, { editable: !0 }),
          hasSelectableTarget: (e, t) =>
            te.hasEditableTarget(e, t) ||
            te.isTargetInsideNonReadonlyVoid(e, t),
          isTargetInsideNonReadonlyVoid(e, t) {
            if (eE.get(e)) return !1;
            var n = te.hasTarget(e, t) && te.toSlateNode(e, t);
            return D.Hg.isElement(n) && D.KE.isVoid(e, n);
          },
          androidScheduleFlush(e) {
            var t;
            null == (t = eV.get(e)) || t();
          },
          androidPendingDiffs: (e) => ex.get(e),
        },
        tt = ["anchor", "focus"],
        tn = ["anchor", "focus"],
        tr = (e, t) => {
          var n = ec(e, tt),
            r = ec(t, tn);
          return (
            e[eR] === t[eR] &&
            Object.keys(n).length === Object.keys(r).length &&
            Object.keys(n).every((e) => r.hasOwnProperty(e) && n[e] === r[e])
          );
        },
        ti = e9 ? f.useLayoutEffect : f.useEffect,
        ta = (e) => {
          var { isLast: t, leaf: n, parent: r, text: i } = e,
            a = td(),
            u = te.findPath(a, i),
            o = D.wA.parent(u),
            s = !0 === n[eM];
          return a.isVoid(r)
            ? f.createElement(ts, { length: D.bP.string(r).length })
            : "" !== n.text ||
                r.children[r.children.length - 1] !== i ||
                a.isInline(r) ||
                "" !== D.KE.string(a, o)
              ? "" === n.text
                ? f.createElement(ts, { isMarkPlaceholder: s })
                : t && "\n" === n.text.slice(-1)
                  ? f.createElement(tu, { isTrailing: !0, text: n.text })
                  : f.createElement(tu, { text: n.text })
              : f.createElement(ts, { isLineBreak: !0, isMarkPlaceholder: s });
        },
        tu = (e) => {
          var { text: t, isTrailing: n = !1 } = e,
            r = (0, f.useRef)(null),
            i = () => "".concat(null != t ? t : "").concat(n ? "\n" : ""),
            [a] = (0, f.useState)(i);
          return (
            ti(() => {
              var e = i();
              r.current &&
                r.current.textContent !== e &&
                (r.current.textContent = e);
            }),
            f.createElement(to, { ref: r }, a)
          );
        },
        to = (0, f.memo)(
          (0, f.forwardRef)((e, t) =>
            f.createElement(
              "span",
              { "data-slate-string": !0, ref: t },
              e.children,
            ),
          ),
        ),
        ts = (e) => {
          var {
              length: t = 0,
              isLineBreak: n = !1,
              isMarkPlaceholder: r = !1,
            } = e,
            i = {
              "data-slate-zero-width": n ? "n" : "z",
              "data-slate-length": t,
            };
          return (
            r && (i["data-slate-mark-placeholder"] = !0),
            f.createElement(
              "span",
              Object.assign({}, i),
              eJ && n ? null : "\uFEFF",
              n ? f.createElement("br", null) : null,
            )
          );
        },
        tl = (0, f.createContext)(null),
        td = () => {
          var e = (0, f.useContext)(tl);
          if (!e)
            throw Error(
              "The `useSlateStatic` hook must be used inside the <Slate> component's context.",
            );
          return e;
        },
        tc = f.memo(
          (e) => {
            var {
                leaf: t,
                isLast: n,
                text: r,
                parent: i,
                renderPlaceholder: a,
                renderLeaf: u = (e) =>
                  f.createElement(tf, Object.assign({}, e)),
              } = e,
              o = (0, f.useRef)(null),
              s = (0, f.useRef)(null),
              l = td(),
              d = (0, f.useRef)(null);
            (0, f.useEffect)(
              () => () => {
                d.current && d.current.disconnect();
              },
              [],
            ),
              (0, f.useEffect)(() => {
                var e = null == s ? void 0 : s.current;
                if (
                  (e ? eg.set(l, e) : eg.delete(l),
                  d.current
                    ? (d.current.disconnect(), e && d.current.observe(e))
                    : e &&
                      ((d.current = new (window.ResizeObserver || eo)(() => {
                        var e = eS.get(l);
                        null == e || e();
                      })),
                      d.current.observe(e)),
                  !e && o.current)
                ) {
                  var t = eS.get(l);
                  null == t || t();
                }
                return (
                  (o.current = s.current),
                  () => {
                    eg.delete(l);
                  }
                );
              }, [s, t]);
            var c = f.createElement(ta, {
              isLast: n,
              leaf: t,
              parent: i,
              text: r,
            });
            if (t[eR]) {
              var h = {
                children: t.placeholder,
                attributes: {
                  "data-slate-placeholder": !0,
                  style: {
                    position: "absolute",
                    pointerEvents: "none",
                    width: "100%",
                    maxWidth: "100%",
                    display: "block",
                    opacity: "0.333",
                    userSelect: "none",
                    textDecoration: "none",
                  },
                  contentEditable: !1,
                  ref: s,
                },
              };
              c = f.createElement(f.Fragment, null, a(h), c);
            }
            return u({
              attributes: { "data-slate-leaf": !0 },
              children: c,
              leaf: t,
              text: r,
            });
          },
          (e, t) =>
            t.parent === e.parent &&
            t.isLast === e.isLast &&
            t.renderLeaf === e.renderLeaf &&
            t.renderPlaceholder === e.renderPlaceholder &&
            t.text === e.text &&
            D.EY.equals(t.leaf, e.leaf) &&
            t.leaf[eR] === e.leaf[eR],
        ),
        tf = (e) => {
          var { attributes: t, children: n } = e;
          return f.createElement("span", Object.assign({}, t), n);
        },
        th = f.memo(
          (e) => {
            for (
              var {
                  decorations: t,
                  isLast: n,
                  parent: r,
                  renderPlaceholder: i,
                  renderLeaf: a,
                  text: u,
                } = e,
                o = td(),
                s = (0, f.useRef)(null),
                l = D.EY.decorations(u, t),
                d = te.findKey(o, u),
                c = [],
                h = 0;
              h < l.length;
              h++
            ) {
              var p = l[h];
              c.push(
                f.createElement(tc, {
                  isLast: n && h === l.length - 1,
                  key: "".concat(d.id, "-").concat(h),
                  renderPlaceholder: i,
                  leaf: p,
                  text: u,
                  parent: r,
                  renderLeaf: a,
                }),
              );
            }
            var m = (0, f.useCallback)(
              (e) => {
                var t = eC.get(o);
                e
                  ? (null == t || t.set(d, e), eD.set(u, e), ey.set(e, u))
                  : (null == t || t.delete(d),
                    eD.delete(u),
                    s.current && ey.delete(s.current)),
                  (s.current = e);
              },
              [s, o, d, u],
            );
            return f.createElement(
              "span",
              { "data-slate-node": "text", ref: m },
              c,
            );
          },
          (e, t) =>
            t.parent === e.parent &&
            t.isLast === e.isLast &&
            t.renderLeaf === e.renderLeaf &&
            t.renderPlaceholder === e.renderPlaceholder &&
            t.text === e.text &&
            ((e, t) => {
              if (e.length !== t.length) return !1;
              for (var n = 0; n < e.length; n++) {
                var r = e[n],
                  i = t[n];
                if (
                  r.anchor.offset !== i.anchor.offset ||
                  r.focus.offset !== i.focus.offset ||
                  !tr(r, i)
                )
                  return !1;
              }
              return !0;
            })(t.decorations, e.decorations),
        ),
        tp = f.memo(
          (e) => {
            var {
                decorations: t,
                element: n,
                renderElement: r = (e) =>
                  f.createElement(tm, Object.assign({}, e)),
                renderPlaceholder: i,
                renderLeaf: a,
                selection: u,
              } = e,
              s = td(),
              l = tb(),
              d = s.isInline(n),
              c = te.findKey(s, n),
              h = (0, f.useCallback)(
                (e) => {
                  var t = eC.get(s);
                  e
                    ? (null == t || t.set(c, e), eD.set(n, e), ey.set(e, n))
                    : (null == t || t.delete(c), eD.delete(n));
                },
                [s, c, n],
              ),
              p = ty({
                decorations: t,
                node: n,
                renderElement: r,
                renderPlaceholder: i,
                renderLeaf: a,
                selection: u,
              }),
              m = { "data-slate-node": "element", ref: h };
            if (
              (d && (m["data-slate-inline"] = !0), !d && D.KE.hasInlines(s, n))
            ) {
              var _ = D.bP.string(n),
                v = o()(_);
              "rtl" === v && (m.dir = v);
            }
            if (D.KE.isVoid(s, n)) {
              (m["data-slate-void"] = !0), !l && d && (m.contentEditable = !1);
              var [[g]] = D.bP.texts(n);
              (p = f.createElement(
                d ? "span" : "div",
                {
                  "data-slate-spacer": !0,
                  style: {
                    height: "0",
                    color: "transparent",
                    outline: "none",
                    position: "absolute",
                  },
                },
                f.createElement(th, {
                  renderPlaceholder: i,
                  decorations: [],
                  isLast: !1,
                  parent: n,
                  text: g,
                }),
              )),
                ep.set(g, 0),
                em.set(g, n);
            }
            return r({
              attributes: m,
              children: p,
              element: n,
              decorations: t,
            });
          },
          (e, t) =>
            e.element === t.element &&
            e.renderElement === t.renderElement &&
            e.renderLeaf === t.renderLeaf &&
            e.renderPlaceholder === t.renderPlaceholder &&
            ((e, t) => {
              if (e.length !== t.length) return !1;
              for (var n = 0; n < e.length; n++) {
                var r = e[n],
                  i = t[n];
                if (!D.Q6.equals(r, i) || !tr(r, i)) return !1;
              }
              return !0;
            })(e.decorations, t.decorations) &&
            (e.selection === t.selection ||
              (!!e.selection &&
                !!t.selection &&
                D.Q6.equals(e.selection, t.selection))),
        ),
        tm = (e) => {
          var { attributes: t, children: n, element: r } = e,
            i = td().isInline(r) ? "span" : "div";
          return f.createElement(
            i,
            Object.assign({}, t, { style: { position: "relative" } }),
            n,
          );
        },
        t_ = (0, f.createContext)(() => []),
        tv = (0, f.createContext)(!1),
        tg = () => (0, f.useContext)(tv),
        ty = (e) => {
          for (
            var {
                decorations: t,
                node: n,
                renderElement: r,
                renderPlaceholder: i,
                renderLeaf: a,
                selection: u,
              } = e,
              o = (0, f.useContext)(t_),
              s = td(),
              l = te.findPath(s, n),
              d = [],
              c = D.Hg.isElement(n) && !s.isInline(n) && D.KE.hasInlines(s, n),
              h = 0;
            h < n.children.length;
            h++
          ) {
            var p = l.concat(h),
              m = n.children[h],
              _ = te.findKey(s, m),
              v = D.KE.range(s, p),
              g = u && D.Q6.intersection(v, u),
              y = o([m, p]);
            for (var b of t) {
              var C = D.Q6.intersection(b, v);
              C && y.push(C);
            }
            D.Hg.isElement(m)
              ? d.push(
                  f.createElement(
                    tv.Provider,
                    { key: "provider-".concat(_.id), value: !!g },
                    f.createElement(tp, {
                      decorations: y,
                      element: m,
                      key: _.id,
                      renderElement: r,
                      renderPlaceholder: i,
                      renderLeaf: a,
                      selection: g,
                    }),
                  ),
                )
              : d.push(
                  f.createElement(th, {
                    decorations: y,
                    key: _.id,
                    isLast: c && h === n.children.length - 1,
                    parent: n,
                    renderPlaceholder: i,
                    renderLeaf: a,
                    text: m,
                  }),
                ),
              ep.set(m, h),
              em.set(m, n);
          }
          return d;
        },
        tD = (0, f.createContext)(!1),
        tb = () => (0, f.useContext)(tD),
        tC = (0, f.createContext)(null),
        tE = {
          bold: "mod+b",
          compose: ["down", "left", "right", "up", "backspace", "enter"],
          moveBackward: "left",
          moveForward: "right",
          moveWordBackward: "ctrl+left",
          moveWordForward: "ctrl+right",
          deleteBackward: "shift?+backspace",
          deleteForward: "shift?+delete",
          extendBackward: "shift+left",
          extendForward: "shift+right",
          italic: "mod+i",
          insertSoftBreak: "shift+enter",
          splitBlock: "enter",
          undo: "mod+z",
        },
        tw = {
          moveLineBackward: "opt+up",
          moveLineForward: "opt+down",
          moveWordBackward: "opt+left",
          moveWordForward: "opt+right",
          deleteBackward: ["ctrl+backspace", "ctrl+h"],
          deleteForward: ["ctrl+delete", "ctrl+d"],
          deleteLineBackward: "cmd+shift?+backspace",
          deleteLineForward: ["cmd+shift?+delete", "ctrl+k"],
          deleteWordBackward: "opt+shift?+backspace",
          deleteWordForward: "opt+shift?+delete",
          extendLineBackward: "opt+shift+up",
          extendLineForward: "opt+shift+down",
          redo: "cmd+shift+z",
          transposeCharacter: "ctrl+t",
        },
        tA = {
          deleteWordBackward: "ctrl+shift?+backspace",
          deleteWordForward: "ctrl+shift?+delete",
          redo: ["ctrl+y", "ctrl+shift+z"],
        },
        tB = (e) => {
          var t = tE[e],
            n = tw[e],
            r = tA[e],
            i = t && (0, es.isKeyHotkey)(t),
            a = n && (0, es.isKeyHotkey)(n),
            u = r && (0, es.isKeyHotkey)(r);
          return (e) =>
            !!((i && i(e)) || (eY && a && a(e)) || (!eY && u && u(e)));
        },
        tF = {
          isBold: tB("bold"),
          isCompose: tB("compose"),
          isMoveBackward: tB("moveBackward"),
          isMoveForward: tB("moveForward"),
          isDeleteBackward: tB("deleteBackward"),
          isDeleteForward: tB("deleteForward"),
          isDeleteLineBackward: tB("deleteLineBackward"),
          isDeleteLineForward: tB("deleteLineForward"),
          isDeleteWordBackward: tB("deleteWordBackward"),
          isDeleteWordForward: tB("deleteWordForward"),
          isExtendBackward: tB("extendBackward"),
          isExtendForward: tB("extendForward"),
          isExtendLineBackward: tB("extendLineBackward"),
          isExtendLineForward: tB("extendLineForward"),
          isItalic: tB("italic"),
          isMoveLineBackward: tB("moveLineBackward"),
          isMoveLineForward: tB("moveLineForward"),
          isMoveWordBackward: tB("moveWordBackward"),
          isMoveWordForward: tB("moveWordForward"),
          isRedo: tB("redo"),
          isSoftBreak: tB("insertSoftBreak"),
          isSplitBlock: tB("splitBlock"),
          isTransposeCharacter: tB("transposeCharacter"),
          isUndo: tB("undo"),
        },
        tV = {
          subtree: !0,
          childList: !0,
          characterData: !0,
          characterDataOldValue: !0,
        };
      class tT extends f.Component {
        constructor() {
          super(...arguments),
            (this.context = null),
            (this.manager = null),
            (this.mutationObserver = null);
        }
        observe() {
          var e,
            { node: t } = this.props;
          if (!t.current)
            throw Error(
              "Failed to attach MutationObserver, `node` is undefined",
            );
          null == (e = this.mutationObserver) || e.observe(t.current, tV);
        }
        componentDidMount() {
          var e,
            t,
            { receivedUserInput: n } = this.props,
            r = this.context;
          (this.manager =
            ((e = []),
            {
              registerMutations: (t) => {
                if (n.current) {
                  var i = t.filter((e) => eX(r, e, t));
                  e.push(...i);
                }
              },
              restoreDOM: function () {
                e.length > 0 &&
                  (e.reverse().forEach((e) => {
                    "characterData" !== e.type &&
                      (e.removedNodes.forEach((t) => {
                        e.target.insertBefore(t, e.nextSibling);
                      }),
                      e.addedNodes.forEach((t) => {
                        e.target.removeChild(t);
                      }));
                  }),
                  t());
              },
              clear: (t = () => {
                e = [];
              }),
            })),
            (this.mutationObserver = new MutationObserver(
              this.manager.registerMutations,
            )),
            this.observe();
        }
        getSnapshotBeforeUpdate() {
          var e,
            t,
            n,
            r,
            i = null == (e = this.mutationObserver) ? void 0 : e.takeRecords();
          return (
            null != i &&
              i.length &&
              (null == (r = this.manager) || r.registerMutations(i)),
            null == (t = this.mutationObserver) || t.disconnect(),
            null == (n = this.manager) || n.restoreDOM(),
            null
          );
        }
        componentDidUpdate() {
          var e;
          null == (e = this.manager) || e.clear(), this.observe();
        }
        componentWillUnmount() {
          var e;
          null == (e = this.mutationObserver) || e.disconnect();
        }
        render() {
          return this.props.children;
        }
      }
      tT.contextType = tl;
      var tk = eJ
        ? tT
        : (e) => {
            var { children: t } = e;
            return f.createElement(f.Fragment, null, t);
          };
      function tx(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return n.reduce(
          (e, t) => e.slice(0, t.start) + t.text + e.slice(t.end),
          e,
        );
      }
      function tP(e, t) {
        var { start: n, end: r, text: i } = t,
          a = e.slice(n, r),
          u = (function (e, t) {
            for (var n = Math.min(e.length, t.length), r = 0; r < n; r++)
              if (e.charAt(r) !== t.charAt(r)) return r;
            return n;
          })(a, i),
          o = Math.min(a.length - u, i.length - u),
          s = (function (e, t, n) {
            for (var r = Math.min(e.length, t.length, n), i = 0; i < r; i++)
              if (e.charAt(e.length - i - 1) !== t.charAt(t.length - i - 1))
                return i;
            return r;
          })(a, i, o),
          l = { start: n + u, end: r - s, text: i.slice(u, i.length - s) };
        return l.start === l.end && 0 === l.text.length ? null : l;
      }
      function tO(e, t) {
        var { path: n, offset: r } = t;
        if (!D.KE.hasPath(e, n)) return null;
        var i = D.bP.get(e, n);
        if (!D.EY.isText(i)) return null;
        var a = D.KE.above(e, {
          match: (t) => D.Hg.isElement(t) && D.KE.isBlock(e, t),
          at: n,
        });
        if (!a) return null;
        for (; r > i.text.length; ) {
          var u = D.KE.next(e, { at: n, match: D.EY.isText });
          if (!u || !D.wA.isDescendant(u[1], a[1])) return null;
          (r -= i.text.length), (i = u[0]), (n = u[1]);
        }
        return { path: n, offset: r };
      }
      function tS(e, t) {
        var n = tO(e, t.anchor);
        if (!n) return null;
        if (D.Q6.isCollapsed(t)) return { anchor: n, focus: n };
        var r = tO(e, t.focus);
        return r ? { anchor: n, focus: r } : null;
      }
      function tR(e, t, n) {
        var r = ex.get(e),
          i =
            null == r
              ? void 0
              : r.find((e) => {
                  var { path: n } = e;
                  return D.wA.equals(n, t.path);
                });
        if (!i || t.offset <= i.diff.start)
          return D.bR.transform(t, n, { affinity: "backward" });
        var { diff: a } = i;
        if (t.offset <= a.start + a.text.length) {
          var u = { path: t.path, offset: a.start },
            o = D.bR.transform(u, n, { affinity: "backward" });
          return o
            ? { path: o.path, offset: o.offset + t.offset - a.start }
            : null;
        }
        var s = {
            path: t.path,
            offset: t.offset - a.text.length + a.end - a.start,
          },
          l = D.bR.transform(s, n, { affinity: "backward" });
        return l
          ? "split_node" === n.type &&
            D.wA.equals(n.path, t.path) &&
            s.offset < n.position &&
            a.start < n.position
            ? l
            : {
                path: l.path,
                offset: l.offset + a.text.length - a.end + a.start,
              }
          : null;
      }
      function tM(e, t, n) {
        var r = tR(e, t.anchor, n);
        if (!r) return null;
        if (D.Q6.isCollapsed(t)) return { anchor: r, focus: r };
        var i = tR(e, t.focus, n);
        return i ? { anchor: r, focus: i } : null;
      }
      function tN(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function tL(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tN(Object(n), !0).forEach(function (t) {
                ed(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tN(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var tI = function () {},
        tj = ["node"];
      function tG(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var tW = { subtree: !0, childList: !0, characterData: !0 },
        tK = [
          "autoFocus",
          "decorate",
          "onDOMBeforeInput",
          "placeholder",
          "readOnly",
          "renderElement",
          "renderLeaf",
          "renderPlaceholder",
          "scrollSelectionIntoView",
          "style",
          "as",
          "disableDefaultStyles",
        ],
        tU = ["text"];
      function tH(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function tq(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tH(Object(n), !0).forEach(function (t) {
                ed(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tH(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var tz = (e) => f.createElement(f.Fragment, null, ty(e)),
        tX = (e) => {
          var t,
            n,
            r,
            i,
            a,
            u,
            s = (0, f.useCallback)(
              (e) => f.createElement(tQ, Object.assign({}, e)),
              [],
            ),
            {
              autoFocus: d,
              decorate: h = tZ,
              onDOMBeforeInput: p,
              placeholder: m,
              readOnly: _ = !1,
              renderElement: v,
              renderLeaf: g,
              renderPlaceholder: y = s,
              scrollSelectionIntoView: b = tY,
              style: C = {},
              as: E = "div",
              disableDefaultStyles: w = !1,
            } = e,
            A = ec(e, tK),
            B = (() => {
              var e = (0, f.useContext)(tC);
              if (!e)
                throw Error(
                  "The `useSlate` hook must be used inside the <Slate> component's context.",
                );
              var { editor: t } = e;
              return t;
            })(),
            [F, V] = (0, f.useState)(!1),
            T = (0, f.useRef)(null),
            k = (0, f.useRef)([]),
            { onUserInput: x, receivedUserInput: P } =
              ((t = td()),
              (n = (0, f.useRef)(!1)),
              (r = (0, f.useRef)(0)),
              (i = (0, f.useCallback)(() => {
                if (!n.current) {
                  n.current = !0;
                  var e = te.getWindow(t);
                  e.cancelAnimationFrame(r.current),
                    (r.current = e.requestAnimationFrame(() => {
                      n.current = !1;
                    }));
                }
              }, [])),
              (0, f.useEffect)(() => () => cancelAnimationFrame(r.current), []),
              { receivedUserInput: n, onUserInput: i }),
            [, O] = (0, f.useReducer)((e) => e + 1, 0);
          eS.set(B, O), eE.set(B, _);
          var S = (0, f.useMemo)(
            () => ({
              isDraggingInternally: !1,
              isUpdatingSelection: !1,
              latestElement: null,
              hasMarkPlaceholder: !1,
            }),
            [],
          );
          (0, f.useLayoutEffect)(
            () => () => {
              null == S ||
                (null != S.latestElement &&
                  (S.latestElement.remove(), (S.latestElement = null)));
            },
            [],
          ),
            (0, f.useEffect)(() => {
              T.current && d && T.current.focus();
            }, [d]);
          var R = (0, f.useCallback)(
              c()(() => {
                if (
                  (eJ || !te.isComposing(B)) &&
                  (!S.isUpdatingSelection || (null != N && N.isFlushing())) &&
                  !S.isDraggingInternally
                ) {
                  var e = te.findDocumentOrShadowRoot(B),
                    { activeElement: t } = e,
                    n = te.toDOMNode(B, B),
                    r = e.getSelection();
                  if (
                    (t === n
                      ? ((S.latestElement = t), ew.set(B, !0))
                      : ew.delete(B),
                    !r)
                  )
                    return D.gB.deselect(B);
                  var { anchorNode: i, focusNode: a } = r,
                    u =
                      te.hasEditableTarget(B, i) ||
                      te.isTargetInsideNonReadonlyVoid(B, i),
                    o =
                      te.hasEditableTarget(B, a) ||
                      te.isTargetInsideNonReadonlyVoid(B, a);
                  if (u && o) {
                    var s = te.toSlateRange(B, r, {
                      exactMatch: !1,
                      suppressThrow: !0,
                    });
                    s &&
                      (te.isComposing(B) ||
                      (null != N && N.hasPendingChanges()) ||
                      (null != N && N.isFlushing())
                        ? null == N || N.handleUserSelect(s)
                        : D.gB.select(B, s));
                  }
                  !_ || (u && o) || D.gB.deselect(B);
                }
              }, 100),
              [_],
            ),
            M = (0, f.useMemo)(() => l()(R, 0), [R]),
            N = (function (e) {
              var t,
                { node: n } = e,
                r = ec(e, tj);
              if (!eJ) return null;
              var i = td(),
                a =
                  ((t = (0, f.useRef)(!1)),
                  (0, f.useEffect)(
                    () => (
                      (t.current = !0),
                      () => {
                        t.current = !1;
                      }
                    ),
                    [],
                  ),
                  t.current),
                [u] = (0, f.useState)(() =>
                  (function (e) {
                    var {
                        editor: t,
                        scheduleOnDOMSelectionChange: n,
                        onDOMSelectionChange: r,
                      } = e,
                      i = !1,
                      a = null,
                      u = null,
                      o = null,
                      s = 0,
                      l = !1,
                      d = () => {
                        var e = eO.get(t);
                        if ((eO.delete(t), e)) {
                          var { selection: n } = t,
                            r = tS(t, e);
                          !r || (n && D.Q6.equals(r, n)) || D.gB.select(t, r);
                        }
                      },
                      c = () => {
                        if (
                          (u && (clearTimeout(u), (u = null)),
                          o && (clearTimeout(o), (o = null)),
                          !_() && !m())
                        )
                          return void d();
                        i || ((i = !0), setTimeout(() => (i = !1))),
                          m() && (i = "action");
                        var e =
                          t.selection &&
                          D.KE.rangeRef(t, t.selection, {
                            affinity: "forward",
                          });
                        ek.set(t, t.marks), tI("flush", eP.get(t), ex.get(t));
                        for (
                          var a = _();
                          (s = null == (c = ex.get(t)) ? void 0 : c[0]);

                        ) {
                          var s,
                            c,
                            f,
                            h = eT.get(t);
                          void 0 !== h && (eT.delete(t), (t.marks = h)),
                            h && !1 === l && (l = null);
                          var p = (function (e) {
                            var { path: t, diff: n } = e;
                            return {
                              anchor: { path: t, offset: n.start },
                              focus: { path: t, offset: n.end },
                            };
                          })(s);
                          (t.selection && D.Q6.equals(t.selection, p)) ||
                            D.gB.select(t, p),
                            s.diff.text
                              ? D.KE.insertText(t, s.diff.text)
                              : D.KE.deleteFragment(t),
                            ex.set(
                              t,
                              null == (f = ex.get(t))
                                ? void 0
                                : f.filter((e) => {
                                    var { id: t } = e;
                                    return t !== s.id;
                                  }),
                            ),
                            !(function (e, t) {
                              var { path: n, diff: r } = t;
                              if (!D.KE.hasPath(e, n)) return !1;
                              var i = D.bP.get(e, n);
                              if (!D.EY.isText(i)) return !1;
                              if (
                                r.start !== i.text.length ||
                                0 === r.text.length
                              )
                                return (
                                  i.text.slice(
                                    r.start,
                                    r.start + r.text.length,
                                  ) === r.text
                                );
                              var a = D.wA.next(n);
                              if (!D.KE.hasPath(e, a)) return !1;
                              var u = D.bP.get(e, a);
                              return (
                                D.EY.isText(u) && u.text.startsWith(r.text)
                              );
                            })(t, s) &&
                              ((a = !1),
                              eP.delete(t),
                              ek.delete(t),
                              (i = "action"),
                              eO.delete(t),
                              n.cancel(),
                              r.cancel(),
                              null == e || e.unref());
                        }
                        var v = null == e ? void 0 : e.unref();
                        if (
                          (!v ||
                            eO.get(t) ||
                            (t.selection && D.Q6.equals(v, t.selection)) ||
                            D.gB.select(t, v),
                          m())
                        )
                          return void (() => {
                            var e = eP.get(t);
                            if ((eP.delete(t), e)) {
                              if (e.at) {
                                var n = D.bR.isPoint(e.at)
                                  ? tO(t, e.at)
                                  : tS(t, e.at);
                                if (!n) return;
                                var r = D.KE.range(t, n);
                                (t.selection && D.Q6.equals(t.selection, r)) ||
                                  D.gB.select(t, n);
                              }
                              e.run();
                            }
                          })();
                        a && n(), n.flush(), r.flush(), d();
                        var g = ek.get(t);
                        ek.delete(t),
                          void 0 !== g && ((t.marks = g), t.onChange());
                      },
                      f = function () {
                        var e =
                            arguments.length > 0 &&
                            void 0 !== arguments[0] &&
                            arguments[0],
                          n = eg.get(t);
                        if (n) {
                          if (_() || e) {
                            n.style.display = "none";
                            return;
                          }
                          n.style.removeProperty("display");
                        }
                      },
                      h = (e, n) => {
                        var r,
                          i,
                          a,
                          u,
                          o,
                          l,
                          d,
                          c,
                          h = null != (c = ex.get(t)) ? c : [];
                        ex.set(t, h);
                        var p = D.bP.leaf(t, e),
                          m = h.findIndex((t) => D.wA.equals(t.path, e));
                        if (m < 0) {
                          tP(p.text, n) &&
                            h.push({ path: e, diff: n, id: s++ }),
                            f();
                          return;
                        }
                        var _ =
                          ((r = p.text),
                          (i = h[m].diff),
                          (a = Math.min(i.start, n.start)),
                          (u = Math.max(
                            0,
                            Math.min(i.start + i.text.length, n.end) - n.start,
                          )),
                          (o = tx(r, i, n)),
                          (l = Math.max(
                            n.start + n.text.length,
                            i.start +
                              i.text.length +
                              (i.start + i.text.length > n.start
                                ? n.text.length
                                : 0) -
                              u,
                          )),
                          (d = o.slice(a, l)),
                          tP(r, {
                            start: a,
                            end: Math.max(
                              i.end,
                              n.end - i.text.length + (i.end - i.start),
                            ),
                            text: d,
                          }));
                        if (!_) {
                          h.splice(m, 1), f();
                          return;
                        }
                        h[m] = tL(tL({}, h[m]), {}, { diff: _ });
                      },
                      p = function (e) {
                        var { at: i } =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {};
                        (l = !1),
                          eO.delete(t),
                          n.cancel(),
                          r.cancel(),
                          m() && c(),
                          eP.set(t, { at: i, run: e }),
                          (o = setTimeout(c));
                      },
                      m = () => !!eP.get(t),
                      _ = () => {
                        var e;
                        return !!(null != (e = ex.get(t)) && e.length);
                      },
                      v = (e) => {
                        eO.set(t, e), u && (clearTimeout(u), (u = null));
                        var { selection: n } = t;
                        if (e) {
                          var r =
                              !n || !D.wA.equals(n.anchor.path, e.anchor.path),
                            i =
                              !n ||
                              !D.wA.equals(
                                n.anchor.path.slice(0, -1),
                                e.anchor.path.slice(0, -1),
                              );
                          ((r && l) || i) && (l = !1),
                            (r || _()) && (u = setTimeout(c, 200));
                        }
                      },
                      g = () => {
                        m() || (o = setTimeout(c));
                      };
                    return {
                      flush: c,
                      scheduleFlush: g,
                      hasPendingDiffs: _,
                      hasPendingAction: m,
                      hasPendingChanges: () => m() || _(),
                      isFlushing: () => i,
                      handleUserSelect: v,
                      handleCompositionEnd: (e) => {
                        a && clearTimeout(a),
                          (a = setTimeout(() => {
                            eA.set(t, !1), c();
                          }, 25));
                      },
                      handleCompositionStart: (e) => {
                        eA.set(t, !0), a && (clearTimeout(a), (a = null));
                      },
                      handleDOMBeforeInput: (e) => {
                        u && (clearTimeout(u), (u = null));
                        var { inputType: n } = e,
                          r = null,
                          i = e.dataTransfer || e.data || void 0;
                        !1 !== l &&
                          "insertText" !== n &&
                          "insertCompositionText" !== n &&
                          (l = !1);
                        var [a] = e.getTargetRanges();
                        a &&
                          (r = te.toSlateRange(t, a, {
                            exactMatch: !1,
                            suppressThrow: !0,
                          }));
                        var o = te.getWindow(t).getSelection();
                        if (
                          (!r &&
                            o &&
                            ((a = o),
                            (r = te.toSlateRange(t, o, {
                              exactMatch: !1,
                              suppressThrow: !0,
                            }))),
                          (r = null != (k = r) ? k : t.selection))
                        ) {
                          var s = !0;
                          if (n.startsWith("delete")) {
                            if (D.Q6.isExpanded(r)) {
                              var [d, c] = D.Q6.edges(r);
                              if (
                                D.bP.leaf(t, d.path).text.length === d.offset &&
                                0 === c.offset
                              ) {
                                var f = D.KE.next(t, {
                                  at: d.path,
                                  match: D.EY.isText,
                                });
                                f &&
                                  D.wA.equals(f[1], c.path) &&
                                  (r = { anchor: c, focus: c });
                              }
                            }
                            var m = n.endsWith("Backward")
                                ? "backward"
                                : "forward",
                              [_, y] = D.Q6.edges(r),
                              [b, C] = D.KE.leaf(t, _.path),
                              E = { text: "", start: _.offset, end: y.offset },
                              w = ex.get(t),
                              A =
                                null == w
                                  ? void 0
                                  : w.find((e) => D.wA.equals(e.path, C)),
                              B = A ? [A.diff, E] : [E];
                            if (
                              (0 === tx(b.text, ...B).length && (s = !1),
                              D.Q6.isExpanded(r))
                            ) {
                              if (
                                s &&
                                D.wA.equals(r.anchor.path, r.focus.path)
                              ) {
                                var F = {
                                  path: r.anchor.path,
                                  offset: _.offset,
                                };
                                return (
                                  v(D.KE.range(t, F, F)),
                                  h(r.anchor.path, {
                                    text: "",
                                    end: y.offset,
                                    start: _.offset,
                                  })
                                );
                              }
                              return p(
                                () => D.KE.deleteFragment(t, { direction: m }),
                                { at: r },
                              );
                            }
                          }
                          switch (n) {
                            case "deleteByComposition":
                            case "deleteByCut":
                            case "deleteByDrag":
                              return p(() => D.KE.deleteFragment(t), { at: r });
                            case "deleteContent":
                            case "deleteContentForward":
                              var { anchor: V } = r;
                              if (s && D.Q6.isCollapsed(r)) {
                                var T = D.bP.leaf(t, V.path);
                                if (V.offset < T.text.length)
                                  return h(V.path, {
                                    text: "",
                                    start: V.offset,
                                    end: V.offset + 1,
                                  });
                              }
                              return p(() => D.KE.deleteForward(t), { at: r });
                            case "deleteContentBackward":
                              var k,
                                x,
                                { anchor: P } = r,
                                O = eW(a)
                                  ? a.isCollapsed
                                  : !!(null != (x = a) && x.collapsed);
                              if (s && O && D.Q6.isCollapsed(r) && P.offset > 0)
                                return h(P.path, {
                                  text: "",
                                  start: P.offset - 1,
                                  end: P.offset,
                                });
                              return p(() => D.KE.deleteBackward(t), { at: r });
                            case "deleteEntireSoftLine":
                              return p(
                                () => {
                                  D.KE.deleteBackward(t, { unit: "line" }),
                                    D.KE.deleteForward(t, { unit: "line" });
                                },
                                { at: r },
                              );
                            case "deleteHardLineBackward":
                              return p(
                                () => D.KE.deleteBackward(t, { unit: "block" }),
                                { at: r },
                              );
                            case "deleteSoftLineBackward":
                              return p(
                                () => D.KE.deleteBackward(t, { unit: "line" }),
                                { at: r },
                              );
                            case "deleteHardLineForward":
                              return p(
                                () => D.KE.deleteForward(t, { unit: "block" }),
                                { at: r },
                              );
                            case "deleteSoftLineForward":
                              return p(
                                () => D.KE.deleteForward(t, { unit: "line" }),
                                { at: r },
                              );
                            case "deleteWordBackward":
                              return p(
                                () => D.KE.deleteBackward(t, { unit: "word" }),
                                { at: r },
                              );
                            case "deleteWordForward":
                              return p(
                                () => D.KE.deleteForward(t, { unit: "word" }),
                                { at: r },
                              );
                            case "insertLineBreak":
                              return p(() => D.KE.insertSoftBreak(t), {
                                at: r,
                              });
                            case "insertParagraph":
                              return p(() => D.KE.insertBreak(t), { at: r });
                            case "insertCompositionText":
                            case "deleteCompositionText":
                            case "insertFromComposition":
                            case "insertFromDrop":
                            case "insertFromPaste":
                            case "insertFromYank":
                            case "insertReplacementText":
                            case "insertText":
                              if (
                                (null == i ? void 0 : i.constructor.name) ===
                                "DataTransfer"
                              )
                                return p(() => te.insertData(t, i), { at: r });
                              var S = null != i ? i : "";
                              if (
                                (eT.get(t) && (S = S.replace("\uFEFF", "")),
                                "insertText" === n &&
                                  /.*\n.*\n$/.test(S) &&
                                  (S = S.slice(0, -1)),
                                S.includes("\n"))
                              )
                                return p(
                                  () => {
                                    var e = S.split("\n");
                                    e.forEach((n, r) => {
                                      n && D.KE.insertText(t, n),
                                        r !== e.length - 1 &&
                                          D.KE.insertSoftBreak(t);
                                    });
                                  },
                                  { at: r },
                                );
                              if (D.wA.equals(r.anchor.path, r.focus.path)) {
                                var [R, M] = D.Q6.edges(r),
                                  N = {
                                    start: R.offset,
                                    end: M.offset,
                                    text: S,
                                  };
                                if (S && l && "insertCompositionText" === n) {
                                  var L = l.start + l.text.search(/\S|$/);
                                  N.start + N.text.search(/\S|$/) === L + 1 &&
                                  N.end === l.start + l.text.length
                                    ? ((N.start -= 1), (l = null), g())
                                    : (l = !1);
                                } else
                                  l =
                                    "insertText" === n &&
                                    (null === l
                                      ? N
                                      : !!(l && D.Q6.isCollapsed(r)) &&
                                        l.end + l.text.length === R.offset &&
                                        tL(
                                          tL({}, l),
                                          {},
                                          { text: l.text + S },
                                        ));
                                if (s) return void h(R.path, N);
                              }
                              return p(() => D.KE.insertText(t, S), { at: r });
                          }
                        }
                      },
                      handleKeyDown: (e) => {
                        _() || (f(!0), setTimeout(f));
                      },
                      handleDomMutations: (e) => {
                        if (!(_() || m()) && e.some((n) => eX(t, n, e))) {
                          var n;
                          null == (n = eS.get(t)) || n();
                        }
                      },
                      handleInput: () => {
                        (m() || !_()) && c();
                      },
                    };
                  })(
                    (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2
                          ? tG(Object(n), !0).forEach(function (t) {
                              ed(e, t, n[t]);
                            })
                          : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(n),
                              )
                            : tG(Object(n)).forEach(function (t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(n, t),
                                );
                              });
                      }
                      return e;
                    })({ editor: i }, r),
                  ),
                );
              return (
                !(function (e, t, n) {
                  var [r] = (0, f.useState)(() => new MutationObserver(t));
                  ti(() => {
                    r.takeRecords();
                  }),
                    (0, f.useEffect)(() => {
                      if (!e.current)
                        throw Error(
                          "Failed to attach MutationObserver, `node` is undefined",
                        );
                      return r.observe(e.current, n), () => r.disconnect();
                    }, []);
                })(n, u.handleDomMutations, tW),
                eV.set(i, u.scheduleFlush),
                a && u.flush(),
                u
              );
            })({
              node: T,
              onDOMSelectionChange: R,
              scheduleOnDOMSelectionChange: M,
            });
          ti(() => {
            T.current && (e = eL(T.current))
              ? (e_.set(B, e),
                ev.set(B, T.current),
                eD.set(B, T.current),
                ey.set(T.current, B))
              : eD.delete(B);
            var e,
              { selection: t } = B,
              n = te.findDocumentOrShadowRoot(B).getSelection();
            if (
              !(!n || !te.isFocused(B) || (null != N && N.hasPendingAction()))
            ) {
              var r = (e) => {
                  var r = "None" !== n.type;
                  if (t || r) {
                    var i = ev.get(B),
                      a = !1;
                    if (
                      (i.contains(n.anchorNode) &&
                        i.contains(n.focusNode) &&
                        (a = !0),
                      r && a && t && !e)
                    ) {
                      var u = te.toSlateRange(B, n, {
                        exactMatch: !0,
                        suppressThrow: !0,
                      });
                      if (u && D.Q6.equals(u, t)) {
                        if (!S.hasMarkPlaceholder) return;
                        var o,
                          { anchorNode: s } = n;
                        if (
                          null != s &&
                          null != (o = s.parentElement) &&
                          o.hasAttribute("data-slate-mark-placeholder")
                        )
                          return;
                      }
                    }
                    if (t && !te.hasRange(B, t)) {
                      B.selection = te.toSlateRange(B, n, {
                        exactMatch: !1,
                        suppressThrow: !0,
                      });
                      return;
                    }
                    S.isUpdatingSelection = !0;
                    var l = t && te.toDOMRange(B, t);
                    return (
                      l
                        ? (D.Q6.isBackward(t)
                            ? n.setBaseAndExtent(
                                l.endContainer,
                                l.endOffset,
                                l.startContainer,
                                l.startOffset,
                              )
                            : n.setBaseAndExtent(
                                l.startContainer,
                                l.startOffset,
                                l.endContainer,
                                l.endOffset,
                              ),
                          b(B, l))
                        : n.removeAllRanges(),
                      l
                    );
                  }
                },
                i = r(),
                a = (null == N ? void 0 : N.isFlushing()) === "action";
              if (!eJ || !a)
                return void setTimeout(() => {
                  i && e$ && te.toDOMNode(B, B).focus(),
                    (S.isUpdatingSelection = !1);
                });
              var u = null,
                o = requestAnimationFrame(() => {
                  if (a) {
                    var e = (e) => {
                      try {
                        te.toDOMNode(B, B).focus(), r(e);
                      } catch (e) {}
                    };
                    e(),
                      (u = setTimeout(() => {
                        e(!0), (S.isUpdatingSelection = !1);
                      }));
                  }
                });
              return () => {
                cancelAnimationFrame(o), u && clearTimeout(u);
              };
            }
          });
          var L = (0, f.useCallback)(
              (e) => {
                if (
                  (x(), !_ && te.hasEditableTarget(B, e.target) && !t$(e, p))
                ) {
                  if (N) return N.handleDOMBeforeInput(e);
                  M.flush(), R.flush();
                  var { selection: t } = B,
                    { inputType: n } = e,
                    r = e.dataTransfer || e.data || void 0,
                    i =
                      "insertCompositionText" === n ||
                      "deleteCompositionText" === n;
                  if (!(i && te.isComposing(B))) {
                    var a = !1;
                    if (
                      "insertText" === n &&
                      t &&
                      D.Q6.isCollapsed(t) &&
                      e.data &&
                      1 === e.data.length &&
                      /[a-z ]/i.test(e.data) &&
                      0 !== t.anchor.offset
                    ) {
                      (a = !0), B.marks && (a = !1);
                      var { anchor: u } = t,
                        [o, s] = te.toDOMPoint(B, u),
                        l =
                          null == (f = o.parentElement)
                            ? void 0
                            : f.closest("a"),
                        d = te.getWindow(B);
                      if (a && l && te.hasDOMNode(B, l)) {
                        var c,
                          f,
                          h,
                          m,
                          v =
                            null == d
                              ? void 0
                              : d.document
                                  .createTreeWalker(l, NodeFilter.SHOW_TEXT)
                                  .lastChild();
                        v === o &&
                          (null == (m = v.textContent) ? void 0 : m.length) ===
                            s &&
                          (a = !1);
                      }
                      if (
                        a &&
                        o.parentElement &&
                        (null == d ||
                        null == (h = d.getComputedStyle(o.parentElement))
                          ? void 0
                          : h.whiteSpace) === "pre"
                      ) {
                        var g = D.KE.above(B, {
                          at: u.path,
                          match: (e) => D.Hg.isElement(e) && D.KE.isBlock(B, e),
                        });
                        g && D.bP.string(g[0]).includes("	") && (a = !1);
                      }
                    }
                    if (!n.startsWith("delete") || n.startsWith("deleteBy")) {
                      var [y] = e.getTargetRanges();
                      if (y) {
                        var b = te.toSlateRange(B, y, {
                          exactMatch: !1,
                          suppressThrow: !1,
                        });
                        if (!t || !D.Q6.equals(t, b)) {
                          a = !1;
                          var C =
                            !i && B.selection && D.KE.rangeRef(B, B.selection);
                          D.gB.select(B, b), C && eB.set(B, C);
                        }
                      }
                    }
                    if (!i) {
                      if (
                        (a || e.preventDefault(),
                        t && D.Q6.isExpanded(t) && n.startsWith("delete"))
                      ) {
                        var E = n.endsWith("Backward") ? "backward" : "forward";
                        D.KE.deleteFragment(B, { direction: E });
                        return;
                      }
                      switch (n) {
                        case "deleteByComposition":
                        case "deleteByCut":
                        case "deleteByDrag":
                          D.KE.deleteFragment(B);
                          break;
                        case "deleteContent":
                        case "deleteContentForward":
                          D.KE.deleteForward(B);
                          break;
                        case "deleteContentBackward":
                          D.KE.deleteBackward(B);
                          break;
                        case "deleteEntireSoftLine":
                          D.KE.deleteBackward(B, { unit: "line" }),
                            D.KE.deleteForward(B, { unit: "line" });
                          break;
                        case "deleteHardLineBackward":
                          D.KE.deleteBackward(B, { unit: "block" });
                          break;
                        case "deleteSoftLineBackward":
                          D.KE.deleteBackward(B, { unit: "line" });
                          break;
                        case "deleteHardLineForward":
                          D.KE.deleteForward(B, { unit: "block" });
                          break;
                        case "deleteSoftLineForward":
                          D.KE.deleteForward(B, { unit: "line" });
                          break;
                        case "deleteWordBackward":
                          D.KE.deleteBackward(B, { unit: "word" });
                          break;
                        case "deleteWordForward":
                          D.KE.deleteForward(B, { unit: "word" });
                          break;
                        case "insertLineBreak":
                          D.KE.insertSoftBreak(B);
                          break;
                        case "insertParagraph":
                          D.KE.insertBreak(B);
                          break;
                        case "insertFromComposition":
                        case "insertFromDrop":
                        case "insertFromPaste":
                        case "insertFromYank":
                        case "insertReplacementText":
                        case "insertText":
                          "insertFromComposition" === n &&
                            te.isComposing(B) &&
                            (V(!1), eA.set(B, !1)),
                            (null == r ? void 0 : r.constructor.name) ===
                            "DataTransfer"
                              ? te.insertData(B, r)
                              : "string" == typeof r &&
                                (a
                                  ? k.current.push(() => D.KE.insertText(B, r))
                                  : D.KE.insertText(B, r));
                      }
                      var w = null == (c = eB.get(B)) ? void 0 : c.unref();
                      eB.delete(B),
                        !w ||
                          (B.selection && D.Q6.equals(B.selection, w)) ||
                          D.gB.select(B, w);
                    }
                  }
                }
              },
              [_, p],
            ),
            I = (0, f.useCallback)(
              (e) => {
                null == e
                  ? (R.cancel(),
                    M.cancel(),
                    ev.delete(B),
                    eD.delete(B),
                    T.current &&
                      e6 &&
                      T.current.removeEventListener("beforeinput", L))
                  : e6 && e.addEventListener("beforeinput", L),
                  (T.current = e);
              },
              [T, L, R, M],
            );
          ti(() => {
            var e = te.getWindow(B);
            return (
              e.document.addEventListener("selectionchange", M),
              () => {
                e.document.removeEventListener("selectionchange", M);
              }
            );
          }, [M]);
          var j = h([B, []]);
          if (
            m &&
            1 === B.children.length &&
            1 === Array.from(D.bP.texts(B)).length &&
            "" === D.bP.string(B) &&
            !F
          ) {
            var G = D.KE.start(B, []);
            j.push({ [eR]: !0, placeholder: m, anchor: G, focus: G });
          }
          var { marks: W } = B;
          if (
            ((S.hasMarkPlaceholder = !1),
            B.selection && D.Q6.isCollapsed(B.selection) && W)
          ) {
            var { anchor: K } = B.selection,
              U = D.bP.leaf(B, K.path),
              H = ec(U, tU);
            if (!D.EY.equals(U, W, { loose: !0 })) {
              S.hasMarkPlaceholder = !0;
              var q = Object.fromEntries(Object.keys(H).map((e) => [e, null]));
              j.push(
                tq(tq(tq({ [eM]: !0 }, q), W), {}, { anchor: K, focus: K }),
              );
            }
          }
          (0, f.useEffect)(() => {
            setTimeout(() => {
              var { selection: e } = B;
              if (e) {
                var { anchor: t } = e,
                  n = D.bP.leaf(B, t.path);
                if (W && !D.EY.equals(n, W, { loose: !0 }))
                  return void eT.set(B, W);
              }
              eT.delete(B);
            });
          });
          var z =
            null == (a = eg.get(B)) || null == (u = a.getBoundingClientRect())
              ? void 0
              : u.height;
          return f.createElement(
            tD.Provider,
            { value: _ },
            f.createElement(
              t_.Provider,
              { value: h },
              f.createElement(
                tk,
                { node: T, receivedUserInput: P },
                f.createElement(
                  E,
                  Object.assign(
                    {
                      role: _ ? void 0 : "textbox",
                      "aria-multiline": !_ || void 0,
                    },
                    A,
                    {
                      spellCheck: (!!e6 || !e9) && A.spellCheck,
                      autoCorrect: e6 || !e9 ? A.autoCorrect : "false",
                      autoCapitalize: e6 || !e9 ? A.autoCapitalize : "false",
                      "data-slate-editor": !0,
                      "data-slate-node": "value",
                      contentEditable: !_,
                      zindex: -1,
                      suppressContentEditableWarning: !0,
                      ref: I,
                      style: tq(
                        tq(
                          {},
                          w
                            ? {}
                            : tq(
                                {
                                  position: "relative",
                                  outline: "none",
                                  whiteSpace: "pre-wrap",
                                  wordWrap: "break-word",
                                },
                                z ? { minHeight: z } : {},
                              ),
                        ),
                        C,
                      ),
                      onBeforeInput: (0, f.useCallback)(
                        (e) => {
                          if (
                            !e6 &&
                            !_ &&
                            !tJ(e, A.onBeforeInput) &&
                            te.hasSelectableTarget(B, e.target) &&
                            (e.preventDefault(), !te.isComposing(B))
                          ) {
                            var t = e.data;
                            D.KE.insertText(B, t);
                          }
                        },
                        [_],
                      ),
                      onInput: (0, f.useCallback)((e) => {
                        if (!tJ(e, A.onInput)) {
                          if (N) return void N.handleInput();
                          for (var t of k.current) t();
                          k.current = [];
                        }
                      }, []),
                      onBlur: (0, f.useCallback)(
                        (e) => {
                          if (
                            _ ||
                            S.isUpdatingSelection ||
                            !te.hasSelectableTarget(B, e.target) ||
                            tJ(e, A.onBlur)
                          )
                            return;
                          var t = te.findDocumentOrShadowRoot(B);
                          if (S.latestElement !== t.activeElement) {
                            var { relatedTarget: n } = e;
                            if (
                              n !== te.toDOMNode(B, B) &&
                              !(ej(n) && n.hasAttribute("data-slate-spacer"))
                            ) {
                              if (null != n && eG(n) && te.hasDOMNode(B, n)) {
                                var r = te.toSlateNode(B, n);
                                if (D.Hg.isElement(r) && !B.isVoid(r)) return;
                              }
                              if (e0) {
                                var i = t.getSelection();
                                null == i || i.removeAllRanges();
                              }
                              ew.delete(B);
                            }
                          }
                        },
                        [_, A.onBlur],
                      ),
                      onClick: (0, f.useCallback)(
                        (e) => {
                          if (
                            te.hasTarget(B, e.target) &&
                            !tJ(e, A.onClick) &&
                            eG(e.target)
                          ) {
                            var t = te.toSlateNode(B, e.target),
                              n = te.findPath(B, t);
                            if (D.KE.hasPath(B, n) && D.bP.get(B, n) === t) {
                              if (3 === e.detail && n.length >= 1) {
                                var r = n;
                                if (
                                  !(D.Hg.isElement(t) && D.KE.isBlock(B, t))
                                ) {
                                  var i,
                                    a = D.KE.above(B, {
                                      match: (e) =>
                                        D.Hg.isElement(e) && D.KE.isBlock(B, e),
                                      at: n,
                                    });
                                  r =
                                    null != (i = null == a ? void 0 : a[1])
                                      ? i
                                      : n.slice(0, 1);
                                }
                                var u = D.KE.range(B, r);
                                D.gB.select(B, u);
                                return;
                              }
                              if (!_) {
                                var o = D.KE.start(B, n),
                                  s = D.KE.end(B, n),
                                  l = D.KE.void(B, { at: o }),
                                  d = D.KE.void(B, { at: s });
                                if (l && d && D.wA.equals(l[1], d[1])) {
                                  var c = D.KE.range(B, o);
                                  D.gB.select(B, c);
                                }
                              }
                            }
                          }
                        },
                        [_, A.onClick],
                      ),
                      onCompositionEnd: (0, f.useCallback)(
                        (e) => {
                          if (
                            te.hasSelectableTarget(B, e.target) &&
                            (te.isComposing(B) && (V(!1), eA.set(B, !1)),
                            null == N || N.handleCompositionEnd(e),
                            !tJ(e, A.onCompositionEnd) &&
                              !eJ &&
                              !e0 &&
                              !e8 &&
                              !eZ &&
                              !e4 &&
                              !e7) &&
                            e.data
                          ) {
                            var t = eT.get(B);
                            eT.delete(B),
                              void 0 !== t &&
                                (ek.set(B, B.marks), (B.marks = t)),
                              D.KE.insertText(B, e.data);
                            var n = ek.get(B);
                            ek.delete(B), void 0 !== n && (B.marks = n);
                          }
                        },
                        [A.onCompositionEnd],
                      ),
                      onCompositionUpdate: (0, f.useCallback)(
                        (e) => {
                          !te.hasSelectableTarget(B, e.target) ||
                            tJ(e, A.onCompositionUpdate) ||
                            te.isComposing(B) ||
                            (V(!0), eA.set(B, !0));
                        },
                        [A.onCompositionUpdate],
                      ),
                      onCompositionStart: (0, f.useCallback)(
                        (e) => {
                          if (
                            te.hasSelectableTarget(B, e.target) &&
                            (null == N || N.handleCompositionStart(e),
                            !tJ(e, A.onCompositionStart) && !eJ)
                          ) {
                            V(!0);
                            var { selection: t } = B;
                            if (t) {
                              if (D.Q6.isExpanded(t))
                                return void D.KE.deleteFragment(B);
                              var n = D.KE.above(B, {
                                match: (e) =>
                                  D.Hg.isElement(e) && D.KE.isInline(B, e),
                                mode: "highest",
                              });
                              if (n) {
                                var [, r] = n;
                                if (D.KE.isEnd(B, t.anchor, r)) {
                                  var i = D.KE.after(B, r);
                                  D.gB.setSelection(B, { anchor: i, focus: i });
                                }
                              }
                            }
                          }
                        },
                        [A.onCompositionStart],
                      ),
                      onCopy: (0, f.useCallback)(
                        (e) => {
                          te.hasSelectableTarget(B, e.target) &&
                            !tJ(e, A.onCopy) &&
                            (e.preventDefault(),
                            te.setFragmentData(B, e.clipboardData, "copy"));
                        },
                        [A.onCopy],
                      ),
                      onCut: (0, f.useCallback)(
                        (e) => {
                          if (
                            !_ &&
                            te.hasSelectableTarget(B, e.target) &&
                            !tJ(e, A.onCut)
                          ) {
                            e.preventDefault(),
                              te.setFragmentData(B, e.clipboardData, "cut");
                            var { selection: t } = B;
                            if (t)
                              if (D.Q6.isExpanded(t)) D.KE.deleteFragment(B);
                              else {
                                var n = D.bP.parent(B, t.anchor.path);
                                D.KE.isVoid(B, n) && D.gB.delete(B);
                              }
                          }
                        },
                        [_, A.onCut],
                      ),
                      onDragOver: (0, f.useCallback)(
                        (e) => {
                          if (
                            te.hasTarget(B, e.target) &&
                            !tJ(e, A.onDragOver)
                          ) {
                            var t = te.toSlateNode(B, e.target);
                            D.Hg.isElement(t) &&
                              D.KE.isVoid(B, t) &&
                              e.preventDefault();
                          }
                        },
                        [A.onDragOver],
                      ),
                      onDragStart: (0, f.useCallback)(
                        (e) => {
                          if (
                            !_ &&
                            te.hasTarget(B, e.target) &&
                            !tJ(e, A.onDragStart)
                          ) {
                            var t = te.toSlateNode(B, e.target),
                              n = te.findPath(B, t);
                            if (
                              (D.Hg.isElement(t) && D.KE.isVoid(B, t)) ||
                              D.KE.void(B, { at: n, voids: !0 })
                            ) {
                              var r = D.KE.range(B, n);
                              D.gB.select(B, r);
                            }
                            (S.isDraggingInternally = !0),
                              te.setFragmentData(B, e.dataTransfer, "drag");
                          }
                        },
                        [_, A.onDragStart],
                      ),
                      onDrop: (0, f.useCallback)(
                        (e) => {
                          if (
                            !_ &&
                            te.hasTarget(B, e.target) &&
                            !tJ(e, A.onDrop)
                          ) {
                            e.preventDefault();
                            var t = B.selection,
                              n = te.findEventRange(B, e),
                              r = e.dataTransfer;
                            D.gB.select(B, n),
                              S.isDraggingInternally &&
                                t &&
                                !D.Q6.equals(t, n) &&
                                !D.KE.void(B, { at: n, voids: !0 }) &&
                                D.gB.delete(B, { at: t }),
                              te.insertData(B, r),
                              te.isFocused(B) || te.focus(B);
                          }
                          S.isDraggingInternally = !1;
                        },
                        [_, A.onDrop],
                      ),
                      onDragEnd: (0, f.useCallback)(
                        (e) => {
                          !_ &&
                            S.isDraggingInternally &&
                            A.onDragEnd &&
                            te.hasTarget(B, e.target) &&
                            A.onDragEnd(e),
                            (S.isDraggingInternally = !1);
                        },
                        [_, A.onDragEnd],
                      ),
                      onFocus: (0, f.useCallback)(
                        (e) => {
                          if (
                            !_ &&
                            !S.isUpdatingSelection &&
                            te.hasEditableTarget(B, e.target) &&
                            !tJ(e, A.onFocus)
                          ) {
                            var t = te.toDOMNode(B, B);
                            if (
                              ((S.latestElement =
                                te.findDocumentOrShadowRoot(B).activeElement),
                              e$ && e.target !== t)
                            )
                              return void t.focus();
                            ew.set(B, !0);
                          }
                        },
                        [_, A.onFocus],
                      ),
                      onKeyDown: (0, f.useCallback)(
                        (e) => {
                          if (!_ && te.hasEditableTarget(B, e.target)) {
                            null == N || N.handleKeyDown(e);
                            var { nativeEvent: t } = e;
                            if (
                              (te.isComposing(B) &&
                                !1 === t.isComposing &&
                                (eA.set(B, !1), V(!1)),
                              !(tJ(e, A.onKeyDown) || te.isComposing(B)))
                            ) {
                              var { selection: n } = B,
                                r =
                                  B.children[null !== n ? n.focus.path[0] : 0],
                                i = "rtl" === o()(D.bP.string(r));
                              if (tF.isRedo(t)) {
                                e.preventDefault(),
                                  "function" == typeof B.redo && B.redo();
                                return;
                              }
                              if (tF.isUndo(t)) {
                                e.preventDefault(),
                                  "function" == typeof B.undo && B.undo();
                                return;
                              }
                              if (tF.isMoveLineBackward(t)) {
                                e.preventDefault(),
                                  D.gB.move(B, { unit: "line", reverse: !0 });
                                return;
                              }
                              if (tF.isMoveLineForward(t)) {
                                e.preventDefault(),
                                  D.gB.move(B, { unit: "line" });
                                return;
                              }
                              if (tF.isExtendLineBackward(t)) {
                                e.preventDefault(),
                                  D.gB.move(B, {
                                    unit: "line",
                                    edge: "focus",
                                    reverse: !0,
                                  });
                                return;
                              }
                              if (tF.isExtendLineForward(t)) {
                                e.preventDefault(),
                                  D.gB.move(B, { unit: "line", edge: "focus" });
                                return;
                              }
                              if (tF.isMoveBackward(t)) {
                                e.preventDefault(),
                                  n && D.Q6.isCollapsed(n)
                                    ? D.gB.move(B, { reverse: !i })
                                    : D.gB.collapse(B, { edge: "start" });
                                return;
                              }
                              if (tF.isMoveForward(t)) {
                                e.preventDefault(),
                                  n && D.Q6.isCollapsed(n)
                                    ? D.gB.move(B, { reverse: i })
                                    : D.gB.collapse(B, { edge: "end" });
                                return;
                              }
                              if (tF.isMoveWordBackward(t)) {
                                e.preventDefault(),
                                  n &&
                                    D.Q6.isExpanded(n) &&
                                    D.gB.collapse(B, { edge: "focus" }),
                                  D.gB.move(B, { unit: "word", reverse: !i });
                                return;
                              }
                              if (tF.isMoveWordForward(t)) {
                                e.preventDefault(),
                                  n &&
                                    D.Q6.isExpanded(n) &&
                                    D.gB.collapse(B, { edge: "focus" }),
                                  D.gB.move(B, { unit: "word", reverse: i });
                                return;
                              }
                              if (e6) {
                                if (
                                  (e2 || e0) &&
                                  n &&
                                  (tF.isDeleteBackward(t) ||
                                    tF.isDeleteForward(t)) &&
                                  D.Q6.isCollapsed(n)
                                ) {
                                  var a = D.bP.parent(B, n.anchor.path);
                                  if (
                                    D.Hg.isElement(a) &&
                                    D.KE.isVoid(B, a) &&
                                    (D.KE.isInline(B, a) || D.KE.isBlock(B, a))
                                  ) {
                                    e.preventDefault(),
                                      D.KE.deleteBackward(B, { unit: "block" });
                                    return;
                                  }
                                }
                              } else {
                                if (
                                  tF.isBold(t) ||
                                  tF.isItalic(t) ||
                                  tF.isTransposeCharacter(t)
                                )
                                  return void e.preventDefault();
                                if (tF.isSoftBreak(t)) {
                                  e.preventDefault(), D.KE.insertSoftBreak(B);
                                  return;
                                }
                                if (tF.isSplitBlock(t)) {
                                  e.preventDefault(), D.KE.insertBreak(B);
                                  return;
                                }
                                if (tF.isDeleteBackward(t)) {
                                  e.preventDefault(),
                                    n && D.Q6.isExpanded(n)
                                      ? D.KE.deleteFragment(B, {
                                          direction: "backward",
                                        })
                                      : D.KE.deleteBackward(B);
                                  return;
                                }
                                if (tF.isDeleteForward(t)) {
                                  e.preventDefault(),
                                    n && D.Q6.isExpanded(n)
                                      ? D.KE.deleteFragment(B, {
                                          direction: "forward",
                                        })
                                      : D.KE.deleteForward(B);
                                  return;
                                }
                                if (tF.isDeleteLineBackward(t)) {
                                  e.preventDefault(),
                                    n && D.Q6.isExpanded(n)
                                      ? D.KE.deleteFragment(B, {
                                          direction: "backward",
                                        })
                                      : D.KE.deleteBackward(B, {
                                          unit: "line",
                                        });
                                  return;
                                }
                                if (tF.isDeleteLineForward(t)) {
                                  e.preventDefault(),
                                    n && D.Q6.isExpanded(n)
                                      ? D.KE.deleteFragment(B, {
                                          direction: "forward",
                                        })
                                      : D.KE.deleteForward(B, { unit: "line" });
                                  return;
                                }
                                if (tF.isDeleteWordBackward(t)) {
                                  e.preventDefault(),
                                    n && D.Q6.isExpanded(n)
                                      ? D.KE.deleteFragment(B, {
                                          direction: "backward",
                                        })
                                      : D.KE.deleteBackward(B, {
                                          unit: "word",
                                        });
                                  return;
                                }
                                if (tF.isDeleteWordForward(t)) {
                                  e.preventDefault(),
                                    n && D.Q6.isExpanded(n)
                                      ? D.KE.deleteFragment(B, {
                                          direction: "forward",
                                        })
                                      : D.KE.deleteForward(B, { unit: "word" });
                                  return;
                                }
                              }
                            }
                          }
                        },
                        [_, A.onKeyDown],
                      ),
                      onPaste: (0, f.useCallback)(
                        (e) => {
                          let t;
                          !_ &&
                            te.hasEditableTarget(B, e.target) &&
                            !tJ(e, A.onPaste) &&
                            (!e6 ||
                              ((t = e.nativeEvent).clipboardData &&
                                "" !== t.clipboardData.getData("text/plain") &&
                                1 === t.clipboardData.types.length) ||
                              e0) &&
                            (e.preventDefault(),
                            te.insertData(B, e.clipboardData));
                        },
                        [_, A.onPaste],
                      ),
                    },
                  ),
                  f.createElement(tz, {
                    decorations: j,
                    node: B,
                    renderElement: v,
                    renderPlaceholder: y,
                    renderLeaf: g,
                    selection: B.selection,
                  }),
                ),
              ),
            ),
          );
        },
        tQ = (e) => {
          var { attributes: t, children: n } = e;
          return f.createElement(
            "span",
            Object.assign({}, t),
            n,
            eJ && f.createElement("br", null),
          );
        },
        tZ = () => [],
        tY = (e, t) => {
          if (
            t.getBoundingClientRect &&
            (!e.selection || (e.selection && D.Q6.isCollapsed(e.selection)))
          ) {
            var n = t.startContainer.parentElement;
            (n.getBoundingClientRect = t.getBoundingClientRect.bind(t)),
              y(n, { scrollMode: "if-needed" }),
              delete n.getBoundingClientRect;
          }
        },
        tJ = (e, t) => {
          if (!t) return !1;
          var n = t(e);
          return null != n
            ? n
            : e.isDefaultPrevented() || e.isPropagationStopped();
        },
        t$ = (e, t) => {
          if (!t) return !1;
          var n = t(e);
          return null != n ? n : e.defaultPrevented;
        },
        t0 = (0, f.createContext)(!1),
        t1 = () => (0, f.useContext)(t0),
        t2 = (0, f.createContext)({}),
        t3 = ["editor", "children", "onChange", "value"],
        t5 = (e) => {
          var t,
            n,
            r,
            { editor: i, children: a, onChange: u, value: o } = e,
            s = ec(e, t3),
            l = (0, f.useRef)(!1),
            [d, c] = f.useState(() => {
              if (!D.bP.isNodeList(o))
                throw Error(
                  "[Slate] value is invalid! Expected a list of elements but got: ".concat(
                    D.h6.stringify(o),
                  ),
                );
              if (!D.KE.isEditor(i))
                throw Error(
                  "[Slate] editor is invalid! You passed: ".concat(
                    D.h6.stringify(i),
                  ),
                );
              return (i.children = o), Object.assign(i, s), { v: 0, editor: i };
            }),
            { selectorContext: h, onChange: p } =
              ((t = (0, f.useRef)([]).current),
              (n = (0, f.useRef)({ editor: i }).current),
              (r = (0, f.useCallback)((e) => {
                (n.editor = e), t.forEach((t) => t(e));
              }, [])),
              {
                selectorContext: (0, f.useMemo)(
                  () => ({
                    getSlate: () => n.editor,
                    addEventListener: (e) => (
                      t.push(e),
                      () => {
                        t.splice(t.indexOf(e), 1);
                      }
                    ),
                  }),
                  [t, n],
                ),
                onChange: r,
              }),
            m = (0, f.useCallback)(() => {
              u && u(i.children), c((e) => ({ v: e.v + 1, editor: i })), p(i);
            }, [u]);
          (0, f.useEffect)(
            () => (
              eF.set(i, m),
              () => {
                eF.set(i, () => {}), (l.current = !0);
              }
            ),
            [m],
          );
          var [_, v] = (0, f.useState)(te.isFocused(i));
          return (
            (0, f.useEffect)(() => {
              v(te.isFocused(i));
            }),
            ti(() => {
              var e = () => v(te.isFocused(i));
              return eQ
                ? (document.addEventListener("focusin", e),
                  document.addEventListener("focusout", e),
                  () => {
                    document.removeEventListener("focusin", e),
                      document.removeEventListener("focusout", e);
                  })
                : (document.addEventListener("focus", e, !0),
                  document.addEventListener("blur", e, !0),
                  () => {
                    document.removeEventListener("focus", e, !0),
                      document.removeEventListener("blur", e, !0);
                  });
            }, []),
            f.createElement(
              t2.Provider,
              { value: h },
              f.createElement(
                tC.Provider,
                { value: d },
                f.createElement(
                  tl.Provider,
                  { value: d.editor },
                  f.createElement(t0.Provider, { value: _ }, a),
                ),
              ),
            )
          );
        },
        t8 = (e, t) => {
          var n = (t.top + t.bottom) / 2;
          return e.top <= n && e.bottom >= n;
        },
        t7 = (e, t, n) => {
          var r = te.toDOMRange(e, t).getBoundingClientRect(),
            i = te.toDOMRange(e, n).getBoundingClientRect();
          return t8(r, i) && t8(i, r);
        };
      function t4(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function t9(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? t4(Object(n), !0).forEach(function (t) {
                ed(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : t4(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var t6 = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "x-slate-fragment",
            {
              apply: n,
              onChange: r,
              deleteBackward: i,
              addMark: a,
              removeMark: u,
            } = e;
          return (
            eC.set(e, new WeakMap()),
            (e.addMark = (t, n) => {
              var r, i;
              null == (r = eV.get(e)) || r(),
                !eT.get(e) &&
                  null != (i = ex.get(e)) &&
                  i.length &&
                  eT.set(e, null),
                ek.delete(e),
                a(t, n);
            }),
            (e.removeMark = (t) => {
              var n;
              !eT.get(e) &&
                null != (n = ex.get(e)) &&
                n.length &&
                eT.set(e, null),
                ek.delete(e),
                u(t);
            }),
            (e.deleteBackward = (t) => {
              if ("line" !== t) return i(t);
              if (e.selection && D.Q6.isCollapsed(e.selection)) {
                var n = D.KE.above(e, {
                  match: (t) => D.Hg.isElement(t) && D.KE.isBlock(e, t),
                  at: e.selection,
                });
                if (n) {
                  var [, r] = n,
                    a = D.KE.range(e, r, e.selection.anchor),
                    u = ((e, t) => {
                      var n = D.KE.range(e, D.Q6.end(t)),
                        r = Array.from(D.KE.positions(e, { at: t })),
                        i = 0,
                        a = r.length,
                        u = Math.floor(a / 2);
                      if (t7(e, D.KE.range(e, r[i]), n))
                        return D.KE.range(e, r[i], n);
                      if (r.length < 2)
                        return D.KE.range(e, r[r.length - 1], n);
                      for (; u !== r.length && u !== i; )
                        t7(e, D.KE.range(e, r[u]), n) ? (a = u) : (i = u),
                          (u = Math.floor((i + a) / 2));
                      return D.KE.range(e, r[a], n);
                    })(e, a);
                  D.Q6.isCollapsed(u) || D.gB.delete(e, { at: u });
                }
              }
            }),
            (e.apply = (t) => {
              var r,
                i = [],
                a = ex.get(e);
              if (null != a && a.length) {
                var u = a
                  .map((e) =>
                    (function (e, t) {
                      var { path: n, diff: r, id: i } = e;
                      switch (t.type) {
                        case "insert_text":
                          if (!D.wA.equals(t.path, n) || t.offset >= r.end)
                            return e;
                          if (t.offset <= r.start)
                            return {
                              diff: {
                                start: t.text.length + r.start,
                                end: t.text.length + r.end,
                                text: r.text,
                              },
                              id: i,
                              path: n,
                            };
                          return {
                            diff: {
                              start: r.start,
                              end: r.end + t.text.length,
                              text: r.text,
                            },
                            id: i,
                            path: n,
                          };
                        case "remove_text":
                          if (!D.wA.equals(t.path, n) || t.offset >= r.end)
                            return e;
                          if (t.offset + t.text.length <= r.start)
                            return {
                              diff: {
                                start: r.start - t.text.length,
                                end: r.end - t.text.length,
                                text: r.text,
                              },
                              id: i,
                              path: n,
                            };
                          return {
                            diff: {
                              start: r.start,
                              end: r.end - t.text.length,
                              text: r.text,
                            },
                            id: i,
                            path: n,
                          };
                        case "split_node":
                          if (!D.wA.equals(t.path, n) || t.position >= r.end)
                            return {
                              diff: r,
                              id: i,
                              path: D.wA.transform(n, t, {
                                affinity: "backward",
                              }),
                            };
                          if (t.position > r.start)
                            return {
                              diff: {
                                start: r.start,
                                end: Math.min(t.position, r.end),
                                text: r.text,
                              },
                              id: i,
                              path: n,
                            };
                          return {
                            diff: {
                              start: r.start - t.position,
                              end: r.end - t.position,
                              text: r.text,
                            },
                            id: i,
                            path: D.wA.transform(n, t, { affinity: "forward" }),
                          };
                        case "merge_node":
                          if (!D.wA.equals(t.path, n))
                            return {
                              diff: r,
                              id: i,
                              path: D.wA.transform(n, t),
                            };
                          return {
                            diff: {
                              start: r.start + t.position,
                              end: r.end + t.position,
                              text: r.text,
                            },
                            id: i,
                            path: D.wA.transform(n, t),
                          };
                      }
                      var a = D.wA.transform(n, t);
                      return a ? { diff: r, path: a, id: i } : null;
                    })(e, t),
                  )
                  .filter(Boolean);
                ex.set(e, u);
              }
              var o = eO.get(e);
              o && eO.set(e, tM(e, o, t));
              var s = eP.get(e);
              if (null != s && s.at) {
                var l = D.bR.isPoint(null == s ? void 0 : s.at)
                  ? tR(e, s.at, t)
                  : tM(e, s.at, t);
                eP.set(e, l ? t9(t9({}, s), {}, { at: l }) : null);
              }
              switch (t.type) {
                case "insert_text":
                case "remove_text":
                case "set_node":
                case "split_node":
                  i.push(...ne(e, t.path));
                  break;
                case "set_selection":
                  null == (r = eB.get(e)) || r.unref(), eB.delete(e);
                  break;
                case "insert_node":
                case "remove_node":
                  i.push(...ne(e, D.wA.parent(t.path)));
                  break;
                case "merge_node":
                  i.push(...ne(e, D.wA.previous(t.path)));
                  break;
                case "move_node":
                  i.push(
                    ...ne(
                      e,
                      D.wA.common(D.wA.parent(t.path), D.wA.parent(t.newPath)),
                    ),
                  );
              }
              for (var [d, c] of (n(t), i)) {
                var [f] = D.KE.node(e, d);
                eb.set(f, c);
              }
            }),
            (e.setFragmentData = (n) => {
              var { selection: r } = e;
              if (r) {
                var [i, a] = D.Q6.edges(r),
                  u = D.KE.void(e, { at: i.path }),
                  o = D.KE.void(e, { at: a.path });
                if (!D.Q6.isCollapsed(r) || u) {
                  var s = te.toDOMRange(e, r),
                    l = s.cloneContents(),
                    d = l.childNodes[0];
                  if (
                    (l.childNodes.forEach((e) => {
                      e.textContent && "" !== e.textContent.trim() && (d = e);
                    }),
                    o)
                  ) {
                    var [c] = o,
                      f = s.cloneRange(),
                      h = te.toDOMNode(e, c);
                    f.setEndAfter(h), (l = f.cloneContents());
                  }
                  if (
                    (u && (d = l.querySelector("[data-slate-spacer]")),
                    Array.from(
                      l.querySelectorAll("[data-slate-zero-width]"),
                    ).forEach((e) => {
                      var t = "n" === e.getAttribute("data-slate-zero-width");
                      e.textContent = t ? "\n" : "";
                    }),
                    eK(d))
                  ) {
                    var p = d.ownerDocument.createElement("span");
                    (p.style.whiteSpace = "pre"),
                      p.appendChild(d),
                      l.appendChild(p),
                      (d = p);
                  }
                  var m = JSON.stringify(e.getFragment()),
                    _ = window.btoa(encodeURIComponent(m));
                  d.setAttribute("data-slate-fragment", _),
                    n.setData("application/".concat(t), _);
                  var v = l.ownerDocument.createElement("div");
                  return (
                    v.appendChild(l),
                    v.setAttribute("hidden", "true"),
                    l.ownerDocument.body.appendChild(v),
                    n.setData("text/html", v.innerHTML),
                    n.setData("text/plain", eq(v)),
                    l.ownerDocument.body.removeChild(v),
                    n
                  );
                }
              }
            }),
            (e.insertData = (t) => {
              e.insertFragmentData(t) || e.insertTextData(t);
            }),
            (e.insertFragmentData = (n) => {
              var r =
                n.getData("application/".concat(t)) ||
                ((e) => {
                  var [, t] = e.getData("text/html").match(ez) || [];
                  return t;
                })(n);
              if (r) {
                var i = JSON.parse(decodeURIComponent(window.atob(r)));
                return e.insertFragment(i), !0;
              }
              return !1;
            }),
            (e.insertTextData = (t) => {
              var n = t.getData("text/plain");
              if (n) {
                var r = n.split(/\r\n|\r|\n/),
                  i = !1;
                for (var a of r)
                  i && D.gB.splitNodes(e, { always: !0 }),
                    e.insertText(a),
                    (i = !0);
                return !0;
              }
              return !1;
            }),
            (e.onChange = (t) => {
              el.unstable_batchedUpdates(() => {
                var n = eF.get(e);
                n && n(), r(t);
              });
            }),
            e
          );
        },
        ne = (e, t) => {
          var n = [];
          for (var [r, i] of D.KE.levels(e, { at: t })) {
            var a = te.findKey(e, r);
            n.push([i, a]);
          }
          return n;
        };
    },
    154283(e, t, n) {
      "use strict";
      function r(e) {
        return "[object Object]" === Object.prototype.toString.call(e);
      }
      function i(e) {
        var t, n;
        return (
          !1 !== r(e) &&
          (void 0 === (t = e.constructor) ||
            (!1 !== r((n = t.prototype)) &&
              !1 !== n.hasOwnProperty("isPrototypeOf")))
        );
      }
      function a(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        throw Error(
          "[Immer] minified error nr: " +
            e +
            (n.length
              ? " " +
                n
                  .map(function (e) {
                    return "'" + e + "'";
                  })
                  .join(",")
              : "") +
            ". Find the full error at: https://bit.ly/3cXEKWf",
        );
      }
      function u(e) {
        return !!e && !!e[H];
      }
      function o(e) {
        var t;
        return (
          !!e &&
          ((function (e) {
            if (!e || "object" != typeof e) return !1;
            var t = Object.getPrototypeOf(e);
            if (null === t) return !0;
            var n =
              Object.hasOwnProperty.call(t, "constructor") && t.constructor;
            return (
              n === Object ||
              ("function" == typeof n && Function.toString.call(n) === q)
            );
          })(e) ||
            Array.isArray(e) ||
            !!e[U] ||
            !!(null == (t = e.constructor) ? void 0 : t[U]) ||
            f(e) ||
            h(e))
        );
      }
      function s(e, t, n) {
        void 0 === n && (n = !1),
          0 === l(e)
            ? (n ? Object.keys : z)(e).forEach(function (r) {
                (n && "symbol" == typeof r) || t(r, e[r], e);
              })
            : e.forEach(function (n, r) {
                return t(r, n, e);
              });
      }
      function l(e) {
        var t = e[H];
        return t
          ? t.i > 3
            ? t.i - 4
            : t.i
          : Array.isArray(e)
            ? 1
            : f(e)
              ? 2
              : 3 * !!h(e);
      }
      function d(e, t) {
        return 2 === l(e)
          ? e.has(t)
          : Object.prototype.hasOwnProperty.call(e, t);
      }
      function c(e, t, n) {
        var r = l(e);
        2 === r ? e.set(t, n) : 3 === r ? e.add(n) : (e[t] = n);
      }
      function f(e) {
        return j && e instanceof Map;
      }
      function h(e) {
        return G && e instanceof Set;
      }
      function p(e) {
        return e.o || e.t;
      }
      function m(e) {
        if (Array.isArray(e)) return Array.prototype.slice.call(e);
        var t = X(e);
        delete t[H];
        for (var n = z(t), r = 0; r < n.length; r++) {
          var i = n[r],
            a = t[i];
          !1 === a.writable && ((a.writable = !0), (a.configurable = !0)),
            (a.get || a.set) &&
              (t[i] = {
                configurable: !0,
                writable: !0,
                enumerable: a.enumerable,
                value: e[i],
              });
        }
        return Object.create(Object.getPrototypeOf(e), t);
      }
      function _(e, t) {
        return (
          void 0 === t && (t = !1),
          g(e) ||
            u(e) ||
            !o(e) ||
            (l(e) > 1 && (e.set = e.add = e.clear = e.delete = v),
            Object.freeze(e),
            t &&
              s(
                e,
                function (e, t) {
                  return _(t, !0);
                },
                !0,
              )),
          e
        );
      }
      function v() {
        a(2);
      }
      function g(e) {
        return null == e || "object" != typeof e || Object.isFrozen(e);
      }
      function y(e) {
        var t = Q[e];
        return t || a(18, e), t;
      }
      n.d(t, {
        KE: () => eq,
        bP: () => eY,
        bR: () => e8,
        Q6: () => e6,
        ie: () => ef,
        gB: () => tb,
        Hg: () => ej,
        wA: () => e1,
        EY: () => ts,
        h6: () => tn,
      });
      function D(e, t) {
        t && (y("Patches"), (e.u = []), (e.s = []), (e.v = t));
      }
      function b(e) {
        C(e), e.p.forEach(w), (e.p = null);
      }
      function C(e) {
        e === L && (L = e.l);
      }
      function E(e) {
        return (L = { p: [], l: L, h: e, m: !0, _: 0 });
      }
      function w(e) {
        var t = e[H];
        0 === t.i || 1 === t.i ? t.j() : (t.g = !0);
      }
      function A(e, t) {
        t._ = t.p.length;
        var n = t.p[0],
          r = void 0 !== e && e !== n;
        return (
          t.h.O || y("ES5").S(t, e, r),
          r
            ? (n[H].P && (b(t), a(4)),
              o(e) && ((e = B(t, e)), t.l || V(t, e)),
              t.u && y("Patches").M(n[H].t, e, t.u, t.s))
            : (e = B(t, n, [])),
          b(t),
          t.u && t.v(t.u, t.s),
          e !== K ? e : void 0
        );
      }
      function B(e, t, n) {
        if (g(t)) return t;
        var r = t[H];
        if (!r)
          return (
            s(
              t,
              function (i, a) {
                return F(e, r, t, i, a, n);
              },
              !0,
            ),
            t
          );
        if (r.A !== e) return t;
        if (!r.P) return V(e, r.t, !0), r.t;
        if (!r.I) {
          (r.I = !0), r.A._--;
          var i = 4 === r.i || 5 === r.i ? (r.o = m(r.k)) : r.o,
            a = i,
            u = !1;
          3 === r.i && ((a = new Set(i)), i.clear(), (u = !0)),
            s(a, function (t, a) {
              return F(e, r, i, t, a, n, u);
            }),
            V(e, i, !1),
            n && e.u && y("Patches").N(r, n, e.u, e.s);
        }
        return r.o;
      }
      function F(e, t, n, r, i, a, s) {
        if (u(i)) {
          var l = B(
            e,
            i,
            a && t && 3 !== t.i && !d(t.R, r) ? a.concat(r) : void 0,
          );
          if ((c(n, r, l), !u(l))) return;
          e.m = !1;
        } else s && n.add(i);
        if (o(i) && !g(i)) {
          if (!e.h.D && e._ < 1) return;
          B(e, i), (t && t.A.l) || V(e, i);
        }
      }
      function V(e, t, n) {
        void 0 === n && (n = !1), !e.l && e.h.D && e.m && _(t, n);
      }
      function T(e, t) {
        var n = e[H];
        return (n ? p(n) : e)[t];
      }
      function k(e, t) {
        if (t in e)
          for (var n = Object.getPrototypeOf(e); n; ) {
            var r = Object.getOwnPropertyDescriptor(n, t);
            if (r) return r;
            n = Object.getPrototypeOf(n);
          }
      }
      function x(e) {
        e.P || ((e.P = !0), e.l && x(e.l));
      }
      function P(e) {
        e.o || (e.o = m(e.t));
      }
      function O(e, t, n) {
        var r,
          i,
          a,
          u,
          o,
          s,
          l,
          d = f(t)
            ? y("MapSet").F(t, n)
            : h(t)
              ? y("MapSet").T(t, n)
              : e.O
                ? ((a = i =
                    {
                      i: +!!(r = Array.isArray(t)),
                      A: n ? n.A : L,
                      P: !1,
                      I: !1,
                      R: {},
                      l: n,
                      t: t,
                      k: null,
                      o: null,
                      j: null,
                      C: !1,
                    }),
                  (u = Z),
                  r && ((a = [i]), (u = Y)),
                  (s = (o = Proxy.revocable(a, u)).revoke),
                  (i.k = l = o.proxy),
                  (i.j = s),
                  l)
                : y("ES5").J(t, n);
        return (n ? n.A : L).p.push(d), d;
      }
      function S(e, t) {
        switch (t) {
          case 2:
            return new Map(e);
          case 3:
            return Array.from(e);
        }
        return m(e);
      }
      var R,
        M,
        N,
        L,
        I = "u" > typeof Symbol && "symbol" == typeof Symbol("x"),
        j = "u" > typeof Map,
        G = "u" > typeof Set,
        W =
          "u" > typeof Proxy &&
          void 0 !== Proxy.revocable &&
          "u" > typeof Reflect,
        K = I
          ? Symbol.for("immer-nothing")
          : (((N = {})["immer-nothing"] = !0), N),
        U = I ? Symbol.for("immer-draftable") : "__$immer_draftable",
        H = I ? Symbol.for("immer-state") : "__$immer_state",
        q = "" + Object.prototype.constructor,
        z =
          "u" > typeof Reflect && Reflect.ownKeys
            ? Reflect.ownKeys
            : void 0 !== Object.getOwnPropertySymbols
              ? function (e) {
                  return Object.getOwnPropertyNames(e).concat(
                    Object.getOwnPropertySymbols(e),
                  );
                }
              : Object.getOwnPropertyNames,
        X =
          Object.getOwnPropertyDescriptors ||
          function (e) {
            var t = {};
            return (
              z(e).forEach(function (n) {
                t[n] = Object.getOwnPropertyDescriptor(e, n);
              }),
              t
            );
          },
        Q = {},
        Z = {
          get: function (e, t) {
            if (t === H) return e;
            var n,
              r,
              i = p(e);
            if (!d(i, t))
              return (r = k(i, t))
                ? "value" in r
                  ? r.value
                  : null == (n = r.get)
                    ? void 0
                    : n.call(e.k)
                : void 0;
            var a = i[t];
            return e.I || !o(a)
              ? a
              : a === T(e.t, t)
                ? (P(e), (e.o[t] = O(e.A.h, a, e)))
                : a;
          },
          has: function (e, t) {
            return t in p(e);
          },
          ownKeys: function (e) {
            return Reflect.ownKeys(p(e));
          },
          set: function (e, t, n) {
            var r = k(p(e), t);
            if (null == r ? void 0 : r.set) return r.set.call(e.k, n), !0;
            if (!e.P) {
              var i = T(p(e), t),
                a = null == i ? void 0 : i[H];
              if (a && a.t === n) return (e.o[t] = n), (e.R[t] = !1), !0;
              if (
                (n === i ? 0 !== n || 1 / n == 1 / i : n != n && i != i) &&
                (void 0 !== n || d(e.t, t))
              )
                return !0;
              P(e), x(e);
            }
            return (
              (e.o[t] === n && (void 0 !== n || t in e.o)) ||
                (Number.isNaN(n) && Number.isNaN(e.o[t])) ||
                ((e.o[t] = n), (e.R[t] = !0)),
              !0
            );
          },
          deleteProperty: function (e, t) {
            return (
              void 0 !== T(e.t, t) || t in e.t
                ? ((e.R[t] = !1), P(e), x(e))
                : delete e.R[t],
              e.o && delete e.o[t],
              !0
            );
          },
          getOwnPropertyDescriptor: function (e, t) {
            var n = p(e),
              r = Reflect.getOwnPropertyDescriptor(n, t);
            return r
              ? {
                  writable: !0,
                  configurable: 1 !== e.i || "length" !== t,
                  enumerable: r.enumerable,
                  value: n[t],
                }
              : r;
          },
          defineProperty: function () {
            a(11);
          },
          getPrototypeOf: function (e) {
            return Object.getPrototypeOf(e.t);
          },
          setPrototypeOf: function () {
            a(12);
          },
        },
        Y = {};
      s(Z, function (e, t) {
        Y[e] = function () {
          return (arguments[0] = arguments[0][0]), t.apply(this, arguments);
        };
      }),
        (Y.deleteProperty = function (e, t) {
          return Y.set.call(this, e, t, void 0);
        }),
        (Y.set = function (e, t, n) {
          return Z.set.call(this, e[0], t, n, e[0]);
        });
      var J = new ((function () {
          function e(e) {
            var t = this;
            (this.O = W),
              (this.D = !0),
              (this.produce = function (e, n, r) {
                if ("function" == typeof e && "function" != typeof n) {
                  var i,
                    u = n;
                  return (
                    (n = e),
                    function (e) {
                      var r = this;
                      void 0 === e && (e = u);
                      for (
                        var i = arguments.length,
                          a = Array(i > 1 ? i - 1 : 0),
                          o = 1;
                        o < i;
                        o++
                      )
                        a[o - 1] = arguments[o];
                      return t.produce(e, function (e) {
                        var t;
                        return (t = n).call.apply(t, [r, e].concat(a));
                      });
                    }
                  );
                }
                if (
                  ("function" != typeof n && a(6),
                  void 0 !== r && "function" != typeof r && a(7),
                  o(e))
                ) {
                  var s = E(t),
                    l = O(t, e, void 0),
                    d = !0;
                  try {
                    (i = n(l)), (d = !1);
                  } finally {
                    d ? b(s) : C(s);
                  }
                  return "u" > typeof Promise && i instanceof Promise
                    ? i.then(
                        function (e) {
                          return D(s, r), A(e, s);
                        },
                        function (e) {
                          throw (b(s), e);
                        },
                      )
                    : (D(s, r), A(i, s));
                }
                if (!e || "object" != typeof e) {
                  if (
                    (void 0 === (i = n(e)) && (i = e),
                    i === K && (i = void 0),
                    t.D && _(i, !0),
                    r)
                  ) {
                    var c = [],
                      f = [];
                    y("Patches").M(e, i, c, f), r(c, f);
                  }
                  return i;
                }
                a(21, e);
              }),
              (this.produceWithPatches = function (e, n) {
                if ("function" == typeof e)
                  return function (n) {
                    for (
                      var r = arguments.length,
                        i = Array(r > 1 ? r - 1 : 0),
                        a = 1;
                      a < r;
                      a++
                    )
                      i[a - 1] = arguments[a];
                    return t.produceWithPatches(n, function (t) {
                      return e.apply(void 0, [t].concat(i));
                    });
                  };
                var r,
                  i,
                  a = t.produce(e, n, function (e, t) {
                    (r = e), (i = t);
                  });
                return "u" > typeof Promise && a instanceof Promise
                  ? a.then(function (e) {
                      return [e, r, i];
                    })
                  : [a, r, i];
              }),
              "boolean" == typeof (null == e ? void 0 : e.useProxies) &&
                this.setUseProxies(e.useProxies),
              "boolean" == typeof (null == e ? void 0 : e.autoFreeze) &&
                this.setAutoFreeze(e.autoFreeze);
          }
          var t = e.prototype;
          return (
            (t.createDraft = function (e) {
              o(e) || a(8),
                u(e) &&
                  (u((t = e)) || a(22, t),
                  (e = (function e(t) {
                    if (!o(t)) return t;
                    var n,
                      r = t[H],
                      i = l(t);
                    if (r) {
                      if (!r.P && (r.i < 4 || !y("ES5").K(r))) return r.t;
                      (r.I = !0), (n = S(t, i)), (r.I = !1);
                    } else n = S(t, i);
                    return (
                      s(n, function (t, i) {
                        var a;
                        (r &&
                          ((a = r.t), (2 === l(a) ? a.get(t) : a[t]) === i)) ||
                          c(n, t, e(i));
                      }),
                      3 === i ? new Set(n) : n
                    );
                  })(t)));
              var t,
                n = E(this),
                r = O(this, e, void 0);
              return (r[H].C = !0), C(n), r;
            }),
            (t.finishDraft = function (e, t) {
              var n = (e && e[H]).A;
              return D(n, t), A(void 0, n);
            }),
            (t.setAutoFreeze = function (e) {
              this.D = e;
            }),
            (t.setUseProxies = function (e) {
              e && !W && a(20), (this.O = e);
            }),
            (t.applyPatches = function (e, t) {
              for (n = t.length - 1; n >= 0; n--) {
                var n,
                  r = t[n];
                if (0 === r.path.length && "replace" === r.op) {
                  e = r.value;
                  break;
                }
              }
              n > -1 && (t = t.slice(n + 1));
              var i = y("Patches").$;
              return u(e)
                ? i(e, t)
                : this.produce(e, function (e) {
                    return i(e, t);
                  });
            }),
            e
          );
        })())(),
        $ = J.produce,
        ee =
          (J.produceWithPatches.bind(J),
          J.setAutoFreeze.bind(J),
          J.setUseProxies.bind(J),
          J.applyPatches.bind(J),
          J.createDraft.bind(J)),
        et = J.finishDraft.bind(J);
      function en(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var er = new WeakMap(),
        ei = new WeakMap(),
        ea = new WeakMap(),
        eu = new WeakMap(),
        eo = new WeakMap(),
        es = new WeakMap(),
        el = new WeakMap();
      function ed(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ec(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ed(Object(n), !0).forEach(function (t) {
                en(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ed(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var ef = () => {
        var e = {
          children: [],
          operations: [],
          selection: null,
          marks: null,
          isInline: () => !1,
          isVoid: () => !1,
          markableVoid: () => !1,
          onChange: () => {},
          apply: (t) => {
            for (var n of eq.pathRefs(e)) e2.transform(n, t);
            for (var r of eq.pointRefs(e)) e7.transform(r, t);
            for (var i of eq.rangeRefs(e)) te.transform(i, t);
            var a,
              u,
              o = er.get(e) || [],
              s = ei.get(e) || new Set(),
              l = (e) => {
                if (e) {
                  var t = e.join(",");
                  u.has(t) || (u.add(t), a.push(e));
                }
              };
            if (e1.operationCanTransformPath(t))
              for (var d of ((a = []), (u = new Set()), o))
                l(e1.transform(d, t));
            else (a = o), (u = s);
            for (var c of e.getDirtyPaths(t)) l(c);
            er.set(e, a),
              ei.set(e, u),
              tb.transform(e, t),
              e.operations.push(t),
              eq.normalize(e, { operation: t }),
              "set_selection" === t.type && (e.marks = null),
              ea.get(e) ||
                (ea.set(e, !0),
                Promise.resolve().then(() => {
                  ea.set(e, !1),
                    e.onChange({ operation: t }),
                    (e.operations = []);
                }));
          },
          addMark: (t, n) => {
            var { selection: r, markableVoid: i } = e;
            if (r) {
              var a = (t, n) => {
                  if (!ts.isText(t)) return !1;
                  var [r, i] = eq.parent(e, n);
                  return !e.isVoid(r) || e.markableVoid(r);
                },
                u = e6.isExpanded(r),
                o = !1;
              if (!u) {
                var [s, l] = eq.node(e, r);
                if (s && a(s, l)) {
                  var [d] = eq.parent(e, l);
                  o = d && e.markableVoid(d);
                }
              }
              if (u || o)
                tb.setNodes(e, { [t]: n }, { match: a, split: !0, voids: !0 });
              else {
                var c = ec(ec({}, eq.marks(e) || {}), {}, { [t]: n });
                (e.marks = c), ea.get(e) || e.onChange();
              }
            }
          },
          deleteBackward: (t) => {
            var { selection: n } = e;
            n && e6.isCollapsed(n) && tb.delete(e, { unit: t, reverse: !0 });
          },
          deleteForward: (t) => {
            var { selection: n } = e;
            n && e6.isCollapsed(n) && tb.delete(e, { unit: t });
          },
          deleteFragment: (t) => {
            var { selection: n } = e;
            n &&
              e6.isExpanded(n) &&
              tb.delete(e, { reverse: "backward" === t });
          },
          getFragment: () => {
            var { selection: t } = e;
            return t ? eY.fragment(e, t) : [];
          },
          insertBreak: () => {
            tb.splitNodes(e, { always: !0 });
          },
          insertSoftBreak: () => {
            tb.splitNodes(e, { always: !0 });
          },
          insertFragment: (t) => {
            tb.insertFragment(e, t);
          },
          insertNode: (t) => {
            tb.insertNodes(e, t);
          },
          insertText: (t) => {
            var { selection: n, marks: r } = e;
            if (n) {
              if (r) {
                var i = ec({ text: t }, r);
                tb.insertNodes(e, i);
              } else tb.insertText(e, t);
              e.marks = null;
            }
          },
          normalizeNode: (t) => {
            var [n, r] = t;
            if (!ts.isText(n)) {
              if (ej.isElement(n) && 0 === n.children.length)
                return void tb.insertNodes(
                  e,
                  { text: "" },
                  { at: r.concat(0), voids: !0 },
                );
              for (
                var i =
                    !eq.isEditor(n) &&
                    ej.isElement(n) &&
                    (e.isInline(n) ||
                      0 === n.children.length ||
                      ts.isText(n.children[0]) ||
                      e.isInline(n.children[0])),
                  a = 0,
                  u = 0;
                u < n.children.length;
                u++, a++
              ) {
                var o = eY.get(e, r);
                if (!ts.isText(o)) {
                  var s = n.children[u],
                    l = o.children[a - 1],
                    d = u === n.children.length - 1;
                  if (
                    (ts.isText(s) || (ej.isElement(s) && e.isInline(s))) !== i
                  )
                    tb.removeNodes(e, { at: r.concat(a), voids: !0 }), a--;
                  else if (ej.isElement(s)) {
                    if (e.isInline(s))
                      if (null != l && ts.isText(l)) {
                        if (d) {
                          var c = { text: "" };
                          tb.insertNodes(e, c, {
                            at: r.concat(a + 1),
                            voids: !0,
                          }),
                            a++;
                        }
                      } else {
                        var f = { text: "" };
                        tb.insertNodes(e, f, { at: r.concat(a), voids: !0 }),
                          a++;
                      }
                  } else
                    null != l &&
                      ts.isText(l) &&
                      (ts.equals(s, l, { loose: !0 })
                        ? (tb.mergeNodes(e, { at: r.concat(a), voids: !0 }),
                          a--)
                        : "" === l.text
                          ? (tb.removeNodes(e, {
                              at: r.concat(a - 1),
                              voids: !0,
                            }),
                            a--)
                          : "" === s.text &&
                            (tb.removeNodes(e, { at: r.concat(a), voids: !0 }),
                            a--));
                }
              }
            }
          },
          removeMark: (t) => {
            var { selection: n } = e;
            if (n) {
              var r = (t, n) => {
                  if (!ts.isText(t)) return !1;
                  var [r, i] = eq.parent(e, n);
                  return !e.isVoid(r) || e.markableVoid(r);
                },
                i = e6.isExpanded(n),
                a = !1;
              if (!i) {
                var [u, o] = eq.node(e, n);
                if (u && r(u, o)) {
                  var [s] = eq.parent(e, o);
                  a = s && e.markableVoid(s);
                }
              }
              if (i || a)
                tb.unsetNodes(e, t, { match: r, split: !0, voids: !0 });
              else {
                var l = ec({}, eq.marks(e) || {});
                delete l[t], (e.marks = l), ea.get(e) || e.onChange();
              }
            }
          },
          getDirtyPaths: (e) => {
            switch (e.type) {
              case "insert_text":
              case "remove_text":
              case "set_node":
                var { path: t } = e;
                return e1.levels(t);
              case "insert_node":
                var { node: n, path: r } = e;
                return [
                  ...e1.levels(r),
                  ...(ts.isText(n)
                    ? []
                    : Array.from(eY.nodes(n), (e) => {
                        var [, t] = e;
                        return r.concat(t);
                      })),
                ];
              case "merge_node":
                var { path: i } = e;
                return [...e1.ancestors(i), e1.previous(i)];
              case "move_node":
                var { path: a, newPath: u } = e;
                if (e1.equals(a, u)) return [];
                var o = [],
                  s = [];
                for (var l of e1.ancestors(a)) {
                  var d = e1.transform(l, e);
                  o.push(d);
                }
                for (var c of e1.ancestors(u)) {
                  var f = e1.transform(c, e);
                  s.push(f);
                }
                var h = s[s.length - 1],
                  p = u[u.length - 1];
                return [...o, ...s, h.concat(p)];
              case "remove_node":
                var { path: m } = e;
                return [...e1.ancestors(m)];
              case "split_node":
                var { path: _ } = e;
                return [...e1.levels(_), e1.next(_)];
              default:
                return [];
            }
          },
          shouldNormalize: (e) => {
            var { iteration: t, initialDirtyPathsLength: n } = e,
              r = 42 * n;
            if (t > r)
              throw Error(
                "Could not completely normalize the editor after ".concat(
                  r,
                  " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state.",
                ),
              );
            return !0;
          },
        };
        return e;
      };
      function eh(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              a = Object.keys(e);
            for (r = 0; r < a.length; r++)
              (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (r = 0; r < a.length; r++)
            (n = a[r]),
              !(t.indexOf(n) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(e, n) &&
                (i[n] = e[n]);
        }
        return i;
      }
      var ep = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = !t,
            r = t ? eb(e) : e,
            i = M.None,
            a = M.None,
            u = 0,
            o = null;
          for (var s of r) {
            var l = s.codePointAt(0);
            if (!l) break;
            var d = eO(s, l);
            if (
              (([i, a] = n ? [a, d] : [d, i]),
              (i & M.ZWJ) != 0 &&
                (a & M.ExtPict) != 0 &&
                !(n ? eM(e.substring(0, u)) : eM(e.substring(0, e.length - u))))
            )
              break;
            if (
              ((i & M.RI) != 0 &&
                (a & M.RI) != 0 &&
                !(o =
                  null !== o ? !o : !!n || eL(e.substring(0, e.length - u)))) ||
              (i !== M.None &&
                a !== M.None &&
                (function (e, t) {
                  return (
                    -1 ===
                    eS.findIndex((n) => (e & n[0]) != 0 && (t & n[1]) != 0)
                  );
                })(i, a))
            )
              break;
            u += s.length;
          }
          return u || 1;
        },
        em = /\s/,
        e_ =
          /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
        ev = /['\u2018\u2019]/,
        eg = function (e) {
          for (
            var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = 0,
              r = !1;
            e.length > 0;

          ) {
            var i = ep(e, t),
              [a, u] = ey(e, i, t);
            if (eD(a, u, t)) (r = !0), (n += i);
            else if (r) break;
            else n += i;
            e = u;
          }
          return n;
        },
        ey = (e, t, n) => {
          if (n) {
            var r = e.length - t;
            return [e.slice(r, e.length), e.slice(0, r)];
          }
          return [e.slice(0, t), e.slice(t)];
        },
        eD = function e(t, n) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (em.test(t)) return !1;
          if (ev.test(t)) {
            var i = ep(n, r),
              [a, u] = ey(n, i, r);
            if (e(a, u, r)) return !0;
          }
          return !e_.test(t);
        },
        eb = function* (e) {
          for (var t = e.length - 1, n = 0; n < e.length; n++) {
            var r = e.charAt(t - n);
            if (eE(r.charCodeAt(0))) {
              var i = e.charAt(t - n - 1);
              if (eC(i.charCodeAt(0))) {
                yield i + r, n++;
                continue;
              }
            }
            yield r;
          }
        },
        eC = (e) => e >= 55296 && e <= 56319,
        eE = (e) => e >= 56320 && e <= 57343;
      ((R = M || (M = {}))[(R.None = 0)] = "None"),
        (R[(R.Extend = 1)] = "Extend"),
        (R[(R.ZWJ = 2)] = "ZWJ"),
        (R[(R.RI = 4)] = "RI"),
        (R[(R.Prepend = 8)] = "Prepend"),
        (R[(R.SpacingMark = 16)] = "SpacingMark"),
        (R[(R.L = 32)] = "L"),
        (R[(R.V = 64)] = "V"),
        (R[(R.T = 128)] = "T"),
        (R[(R.LV = 256)] = "LV"),
        (R[(R.LVT = 512)] = "LVT"),
        (R[(R.ExtPict = 1024)] = "ExtPict"),
        (R[(R.Any = 2048)] = "Any");
      var ew =
          /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/,
        eA =
          /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/,
        eB =
          /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/,
        eF = /^[\u1100-\u115F\uA960-\uA97C]$/,
        eV = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/,
        eT = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/,
        ek =
          /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/,
        ex =
          /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/,
        eP =
          /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/,
        eO = (e, t) => {
          var n = M.Any;
          return (
            -1 !== e.search(ew) && (n |= M.Extend),
            8205 === t && (n |= M.ZWJ),
            t >= 127462 && t <= 127487 && (n |= M.RI),
            -1 !== e.search(eA) && (n |= M.Prepend),
            -1 !== e.search(eB) && (n |= M.SpacingMark),
            -1 !== e.search(eF) && (n |= M.L),
            -1 !== e.search(eV) && (n |= M.V),
            -1 !== e.search(eT) && (n |= M.T),
            -1 !== e.search(ek) && (n |= M.LV),
            -1 !== e.search(ex) && (n |= M.LVT),
            -1 !== e.search(eP) && (n |= M.ExtPict),
            n
          );
        },
        eS = [
          [M.L, M.L | M.V | M.LV | M.LVT],
          [M.LV | M.V, M.V | M.T],
          [M.LVT | M.T, M.T],
          [M.Any, M.Extend | M.ZWJ],
          [M.Any, M.SpacingMark],
          [M.Prepend, M.Any],
          [M.ZWJ, M.ExtPict],
          [M.RI, M.RI],
        ],
        eR =
          /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/,
        eM = (e) => -1 !== e.search(eR),
        eN = /(?:\uD83C[\uDDE6-\uDDFF])+$/g,
        eL = (e) => {
          var t = e.match(eN);
          return null !== t && (t[0].length / 2) % 2 == 1;
        },
        eI = (e) => i(e) && eY.isNodeList(e.children) && !eq.isEditor(e),
        ej = {
          isAncestor: (e) => i(e) && eY.isNodeList(e.children),
          isElement: eI,
          isElementList: (e) =>
            Array.isArray(e) && e.every((e) => ej.isElement(e)),
          isElementProps: (e) => void 0 !== e.children,
          isElementType: function (e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "type";
            return eI(e) && e[n] === t;
          },
          matches(e, t) {
            for (var n in t) if ("children" !== n && e[n] !== t[n]) return !1;
            return !0;
          },
        },
        eG = ["text"],
        eW = ["text"];
      function eK(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function eU(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eK(Object(n), !0).forEach(function (t) {
                en(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eK(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var eH = new WeakMap(),
        eq = {
          above(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              {
                voids: n = !1,
                mode: r = "lowest",
                at: i = e.selection,
                match: a,
              } = t;
            if (i) {
              var u = eq.path(e, i);
              for (var [o, s] of eq.levels(e, {
                at: u,
                voids: n,
                match: a,
                reverse: "lowest" === r,
              }))
                if (!ts.isText(o)) {
                  if (e6.isRange(i)) {
                    if (
                      e1.isAncestor(s, i.anchor.path) &&
                      e1.isAncestor(s, i.focus.path)
                    )
                      return [o, s];
                  } else if (!e1.equals(u, s)) return [o, s];
                }
            }
          },
          addMark(e, t, n) {
            e.addMark(t, n);
          },
          after(e, t) {
            var n,
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              i = eq.point(e, t, { edge: "end" }),
              a = eq.end(e, []),
              { distance: u = 1 } = r,
              o = 0;
            for (var s of eq.positions(
              e,
              eU(eU({}, r), {}, { at: { anchor: i, focus: a } }),
            )) {
              if (o > u) break;
              0 !== o && (n = s), o++;
            }
            return n;
          },
          before(e, t) {
            var n,
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              i = eq.start(e, []),
              a = eq.point(e, t, { edge: "start" }),
              { distance: u = 1 } = r,
              o = 0;
            for (var s of eq.positions(
              e,
              eU(eU({}, r), {}, { at: { anchor: i, focus: a }, reverse: !0 }),
            )) {
              if (o > u) break;
              0 !== o && (n = s), o++;
            }
            return n;
          },
          deleteBackward(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { unit: n = "character" } = t;
            e.deleteBackward(n);
          },
          deleteForward(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { unit: n = "character" } = t;
            e.deleteForward(n);
          },
          deleteFragment(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { direction: n = "forward" } = t;
            e.deleteFragment(n);
          },
          edges: (e, t) => [eq.start(e, t), eq.end(e, t)],
          end: (e, t) => eq.point(e, t, { edge: "end" }),
          first(e, t) {
            var n = eq.path(e, t, { edge: "start" });
            return eq.node(e, n);
          },
          fragment(e, t) {
            var n = eq.range(e, t);
            return eY.fragment(e, n);
          },
          hasBlocks: (e, t) =>
            t.children.some((t) => ej.isElement(t) && eq.isBlock(e, t)),
          hasInlines: (e, t) =>
            t.children.some((t) => ts.isText(t) || eq.isInline(e, t)),
          hasTexts: (e, t) => t.children.every((e) => ts.isText(e)),
          insertBreak(e) {
            e.insertBreak();
          },
          insertSoftBreak(e) {
            e.insertSoftBreak();
          },
          insertFragment(e, t) {
            e.insertFragment(t);
          },
          insertNode(e, t) {
            e.insertNode(t);
          },
          insertText(e, t) {
            e.insertText(t);
          },
          isBlock: (e, t) => !e.isInline(t),
          isEditor(e) {
            var t = eH.get(e);
            if (void 0 !== t) return t;
            if (!i(e)) return !1;
            var n =
              "function" == typeof e.addMark &&
              "function" == typeof e.apply &&
              "function" == typeof e.deleteBackward &&
              "function" == typeof e.deleteForward &&
              "function" == typeof e.deleteFragment &&
              "function" == typeof e.insertBreak &&
              "function" == typeof e.insertSoftBreak &&
              "function" == typeof e.insertFragment &&
              "function" == typeof e.insertNode &&
              "function" == typeof e.insertText &&
              "function" == typeof e.isInline &&
              "function" == typeof e.isVoid &&
              "function" == typeof e.normalizeNode &&
              "function" == typeof e.onChange &&
              "function" == typeof e.removeMark &&
              "function" == typeof e.getDirtyPaths &&
              (null === e.marks || i(e.marks)) &&
              (null === e.selection || e6.isRange(e.selection)) &&
              eY.isNodeList(e.children) &&
              e0.isOperationList(e.operations);
            return eH.set(e, n), n;
          },
          isEnd(e, t, n) {
            var r = eq.end(e, n);
            return e8.equals(t, r);
          },
          isEdge: (e, t, n) => eq.isStart(e, t, n) || eq.isEnd(e, t, n),
          isEmpty(e, t) {
            var { children: n } = t,
              [r] = n;
            return (
              0 === n.length ||
              (1 === n.length && ts.isText(r) && "" === r.text && !e.isVoid(t))
            );
          },
          isInline: (e, t) => e.isInline(t),
          isNormalizing(e) {
            var t = eu.get(e);
            return void 0 === t || t;
          },
          isStart(e, t, n) {
            if (0 !== t.offset) return !1;
            var r = eq.start(e, n);
            return e8.equals(t, r);
          },
          isVoid: (e, t) => e.isVoid(t),
          last(e, t) {
            var n = eq.path(e, t, { edge: "end" });
            return eq.node(e, n);
          },
          leaf(e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              r = eq.path(e, t, n);
            return [eY.leaf(e, r), r];
          },
          *levels(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { at: n = e.selection, reverse: r = !1, voids: i = !1 } = t,
              { match: a } = t;
            if ((null == a && (a = () => !0), n)) {
              var u = [],
                o = eq.path(e, n);
              for (var [s, l] of eY.levels(e, o))
                if (
                  a(s, l) &&
                  (u.push([s, l]), !i && ej.isElement(s) && eq.isVoid(e, s))
                )
                  break;
              r && u.reverse(), yield* u;
            }
          },
          marks(e) {
            var { marks: t, selection: n } = e;
            if (!n) return null;
            if (t) return t;
            if (e6.isExpanded(n)) {
              var [r] = eq.nodes(e, { match: ts.isText });
              if (!r) return {};
              var [i] = r;
              return eh(i, eG);
            }
            var { anchor: a } = n,
              { path: u } = a,
              [o] = eq.leaf(e, u);
            if (0 === a.offset) {
              var s = eq.previous(e, { at: u, match: ts.isText });
              if (
                !eq.above(e, {
                  match: (t) =>
                    ej.isElement(t) && eq.isVoid(e, t) && e.markableVoid(t),
                })
              ) {
                var l = eq.above(e, {
                  match: (t) => ej.isElement(t) && eq.isBlock(e, t),
                });
                if (s && l) {
                  var [d, c] = s,
                    [, f] = l;
                  e1.isAncestor(f, c) && (o = d);
                }
              }
            }
            return eh(o, eW);
          },
          next(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { mode: n = "lowest", voids: r = !1 } = t,
              { match: i, at: a = e.selection } = t;
            if (a) {
              var u = eq.after(e, a, { voids: r });
              if (u) {
                var [, o] = eq.last(e, []),
                  s = [u.path, o];
                if (e1.isPath(a) && 0 === a.length)
                  throw Error("Cannot get the next node from the root node!");
                if (null == i)
                  if (e1.isPath(a)) {
                    var [l] = eq.parent(e, a);
                    i = (e) => l.children.includes(e);
                  } else i = () => !0;
                var [d] = eq.nodes(e, { at: s, match: i, mode: n, voids: r });
                return d;
              }
            }
          },
          node(e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              r = eq.path(e, t, n);
            return [eY.get(e, r), r];
          },
          *nodes(e) {
            var t,
              n,
              r,
              i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              {
                at: a = e.selection,
                mode: u = "all",
                universal: o = !1,
                reverse: s = !1,
                voids: l = !1,
              } = i,
              { match: d } = i;
            if ((d || (d = () => !0), a)) {
              if (ez.isSpan(a)) (t = a[0]), (n = a[1]);
              else {
                var c = eq.path(e, a, { edge: "start" }),
                  f = eq.path(e, a, { edge: "end" });
                (t = s ? f : c), (n = s ? c : f);
              }
              var h = eY.nodes(e, {
                  reverse: s,
                  from: t,
                  to: n,
                  pass: (t) => {
                    var [n] = t;
                    return !l && ej.isElement(n) && eq.isVoid(e, n);
                  },
                }),
                p = [];
              for (var [m, _] of h) {
                var v = r && 0 === e1.compare(_, r[1]);
                if ("highest" !== u || !v) {
                  if (!d(m, _))
                    if (o && !v && ts.isText(m)) return;
                    else continue;
                  if ("lowest" === u && v) {
                    r = [m, _];
                    continue;
                  }
                  var g = "lowest" === u ? r : [m, _];
                  g && (o ? p.push(g) : yield g), (r = [m, _]);
                }
              }
              "lowest" === u && r && (o ? p.push(r) : yield r), o && (yield* p);
            }
          },
          normalize(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { force: n = !1, operation: r } = t,
              i = (e) => er.get(e) || [],
              a = (e) => {
                var t = i(e).pop(),
                  n = t.join(",");
                return (ei.get(e) || new Set()).delete(n), t;
              };
            if (eq.isNormalizing(e)) {
              if (n) {
                var u = Array.from(eY.nodes(e), (e) => {
                    var [, t] = e;
                    return t;
                  }),
                  o = new Set(u.map((e) => e.join(",")));
                er.set(e, u), ei.set(e, o);
              }
              0 !== i(e).length &&
                eq.withoutNormalizing(e, () => {
                  for (var t of i(e))
                    if (eY.has(e, t)) {
                      var n = eq.node(e, t),
                        [u, o] = n;
                      ej.isElement(u) &&
                        0 === u.children.length &&
                        e.normalizeNode(n, { operation: r });
                    }
                  for (var s = i(e), l = s.length, d = 0; 0 !== s.length; ) {
                    if (
                      !e.shouldNormalize({
                        dirtyPaths: s,
                        iteration: d,
                        initialDirtyPathsLength: l,
                        operation: r,
                      })
                    )
                      return;
                    var c = a(e);
                    if (eY.has(e, c)) {
                      var f = eq.node(e, c);
                      e.normalizeNode(f, { operation: r });
                    }
                    d++, (s = i(e));
                  }
                });
            }
          },
          parent(e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              r = eq.path(e, t, n),
              i = e1.parent(r);
            return eq.node(e, i);
          },
          path(e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { depth: r, edge: i } = n;
            if (e1.isPath(t)) {
              if ("start" === i) {
                var [, a] = eY.first(e, t);
                t = a;
              } else if ("end" === i) {
                var [, u] = eY.last(e, t);
                t = u;
              }
            }
            return (
              e6.isRange(t) &&
                (t =
                  "start" === i
                    ? e6.start(t)
                    : "end" === i
                      ? e6.end(t)
                      : e1.common(t.anchor.path, t.focus.path)),
              e8.isPoint(t) && (t = t.path),
              null != r && (t = t.slice(0, r)),
              t
            );
          },
          hasPath: (e, t) => eY.has(e, t),
          pathRef(e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { affinity: r = "forward" } = n,
              i = {
                current: t,
                affinity: r,
                unref() {
                  var { current: t } = i;
                  return eq.pathRefs(e).delete(i), (i.current = null), t;
                },
              };
            return eq.pathRefs(e).add(i), i;
          },
          pathRefs(e) {
            var t = eo.get(e);
            return t || ((t = new Set()), eo.set(e, t)), t;
          },
          point(e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { edge: r = "start" } = n;
            if (e1.isPath(t)) {
              if ("end" === r) {
                var i,
                  [, a] = eY.last(e, t);
                i = a;
              } else {
                var [, u] = eY.first(e, t);
                i = u;
              }
              var o = eY.get(e, i);
              if (!ts.isText(o))
                throw Error(
                  "Cannot get the "
                    .concat(r, " point in the node at path [")
                    .concat(t, "] because it has no ")
                    .concat(r, " text node."),
                );
              return { path: i, offset: "end" === r ? o.text.length : 0 };
            }
            if (e6.isRange(t)) {
              var [s, l] = e6.edges(t);
              return "start" === r ? s : l;
            }
            return t;
          },
          pointRef(e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { affinity: r = "forward" } = n,
              i = {
                current: t,
                affinity: r,
                unref() {
                  var { current: t } = i;
                  return eq.pointRefs(e).delete(i), (i.current = null), t;
                },
              };
            return eq.pointRefs(e).add(i), i;
          },
          pointRefs(e) {
            var t = es.get(e);
            return t || ((t = new Set()), es.set(e, t)), t;
          },
          *positions(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              {
                at: n = e.selection,
                unit: r = "offset",
                reverse: i = !1,
                voids: a = !1,
              } = t;
            if (n) {
              var u = eq.range(e, n),
                [o, s] = e6.edges(u),
                l = i ? s : o,
                d = !1,
                c = "",
                f = 0,
                h = 0,
                p = 0;
              for (var [m, _] of eq.nodes(e, { at: n, reverse: i, voids: a })) {
                if (ej.isElement(m)) {
                  if (!a && e.isVoid(m)) {
                    yield eq.start(e, _);
                    continue;
                  }
                  if (e.isInline(m)) continue;
                  if (eq.hasInlines(e, m)) {
                    var v = e1.isAncestor(_, s.path) ? s : eq.end(e, _),
                      g = e1.isAncestor(_, o.path) ? o : eq.start(e, _);
                    (c = eq.string(e, { anchor: g, focus: v }, { voids: a })),
                      (d = !0);
                  }
                }
                if (ts.isText(m)) {
                  var y,
                    D,
                    b,
                    C = e1.equals(_, l.path);
                  for (
                    C
                      ? ((h = i ? l.offset : m.text.length - l.offset),
                        (p = l.offset))
                      : ((h = m.text.length), (p = i ? h : 0)),
                      (C || d || "offset" === r) &&
                        (yield { path: _, offset: p }, (d = !1));
                    ;

                  ) {
                    if (0 === f) {
                      if ("" === c) break;
                      (y = c),
                        (D = r),
                        (b = i),
                        (c = ey(
                          c,
                          (f =
                            "character" === D
                              ? ep(y, b)
                              : "word" === D
                                ? eg(y, b)
                                : "line" === D || "block" === D
                                  ? y.length
                                  : 1),
                          i,
                        )[1]);
                    }
                    if (((p = i ? p - f : p + f), (h -= f) < 0)) {
                      f = -h;
                      break;
                    }
                    (f = 0), yield { path: _, offset: p };
                  }
                }
              }
            }
          },
          previous(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { mode: n = "lowest", voids: r = !1 } = t,
              { match: i, at: a = e.selection } = t;
            if (a) {
              var u = eq.before(e, a, { voids: r });
              if (u) {
                var [, o] = eq.first(e, []),
                  s = [u.path, o];
                if (e1.isPath(a) && 0 === a.length)
                  throw Error(
                    "Cannot get the previous node from the root node!",
                  );
                if (null == i)
                  if (e1.isPath(a)) {
                    var [l] = eq.parent(e, a);
                    i = (e) => l.children.includes(e);
                  } else i = () => !0;
                var [d] = eq.nodes(e, {
                  reverse: !0,
                  at: s,
                  match: i,
                  mode: n,
                  voids: r,
                });
                return d;
              }
            }
          },
          range: (e, t, n) =>
            e6.isRange(t) && !n
              ? t
              : { anchor: eq.start(e, t), focus: eq.end(e, n || t) },
          rangeRef(e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { affinity: r = "forward" } = n,
              i = {
                current: t,
                affinity: r,
                unref() {
                  var { current: t } = i;
                  return eq.rangeRefs(e).delete(i), (i.current = null), t;
                },
              };
            return eq.rangeRefs(e).add(i), i;
          },
          rangeRefs(e) {
            var t = el.get(e);
            return t || ((t = new Set()), el.set(e, t)), t;
          },
          removeMark(e, t) {
            e.removeMark(t);
          },
          setNormalizing(e, t) {
            eu.set(e, t);
          },
          start: (e, t) => eq.point(e, t, { edge: "start" }),
          string(e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { voids: r = !1 } = n,
              i = eq.range(e, t),
              [a, u] = e6.edges(i),
              o = "";
            for (var [s, l] of eq.nodes(e, {
              at: i,
              match: ts.isText,
              voids: r,
            })) {
              var d = s.text;
              e1.equals(l, u.path) && (d = d.slice(0, u.offset)),
                e1.equals(l, a.path) && (d = d.slice(a.offset)),
                (o += d);
            }
            return o;
          },
          unhangRange(e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { voids: r = !1 } = n,
              [i, a] = e6.edges(t);
            if (
              0 !== i.offset ||
              0 !== a.offset ||
              e6.isCollapsed(t) ||
              e1.hasPrevious(a.path)
            )
              return t;
            var u = eq.above(e, {
                at: a,
                match: (t) => ej.isElement(t) && eq.isBlock(e, t),
                voids: r,
              }),
              o = u ? u[1] : [],
              s = { anchor: eq.start(e, i), focus: a },
              l = !0;
            for (var [d, c] of eq.nodes(e, {
              at: s,
              match: ts.isText,
              reverse: !0,
              voids: r,
            })) {
              if (l) {
                l = !1;
                continue;
              }
              if ("" !== d.text || e1.isBefore(c, o)) {
                a = { path: c, offset: d.text.length };
                break;
              }
            }
            return { anchor: i, focus: a };
          },
          void(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return eq.above(
              e,
              eU(
                eU({}, t),
                {},
                { match: (t) => ej.isElement(t) && eq.isVoid(e, t) },
              ),
            );
          },
          withoutNormalizing(e, t) {
            var n = eq.isNormalizing(e);
            eq.setNormalizing(e, !1);
            try {
              t();
            } finally {
              eq.setNormalizing(e, n);
            }
            eq.normalize(e);
          },
        },
        ez = {
          isSpan: (e) =>
            Array.isArray(e) && 2 === e.length && e.every(e1.isPath),
        },
        eX = ["children"],
        eQ = ["text"],
        eZ = new WeakMap(),
        eY = {
          ancestor(e, t) {
            var n = eY.get(e, t);
            if (ts.isText(n))
              throw Error(
                "Cannot get the ancestor node at path ["
                  .concat(t, "] because it refers to a text node instead: ")
                  .concat(tn.stringify(n)),
              );
            return n;
          },
          *ancestors(e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            for (var r of e1.ancestors(t, n)) {
              var i = [eY.ancestor(e, r), r];
              yield i;
            }
          },
          child(e, t) {
            if (ts.isText(e))
              throw Error(
                "Cannot get the child of a text node: ".concat(tn.stringify(e)),
              );
            var n = e.children[t];
            if (null == n)
              throw Error(
                "Cannot get child at index `"
                  .concat(t, "` in node: ")
                  .concat(tn.stringify(e)),
              );
            return n;
          },
          *children(e, t) {
            for (
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                { reverse: r = !1 } = n,
                i = eY.ancestor(e, t),
                { children: a } = i,
                u = r ? a.length - 1 : 0;
              r ? u >= 0 : u < a.length;

            ) {
              var o = eY.child(i, u),
                s = t.concat(u);
              yield [o, s], (u = r ? u - 1 : u + 1);
            }
          },
          common(e, t, n) {
            var r = e1.common(t, n);
            return [eY.get(e, r), r];
          },
          descendant(e, t) {
            var n = eY.get(e, t);
            if (eq.isEditor(n))
              throw Error(
                "Cannot get the descendant node at path ["
                  .concat(
                    t,
                    "] because it refers to the root editor node instead: ",
                  )
                  .concat(tn.stringify(n)),
              );
            return n;
          },
          *descendants(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            for (var [n, r] of eY.nodes(e, t)) 0 !== r.length && (yield [n, r]);
          },
          *elements(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            for (var [n, r] of eY.nodes(e, t))
              ej.isElement(n) && (yield [n, r]);
          },
          extractProps(e) {
            if (ej.isAncestor(e)) {
              var t = eh(e, eX);
              return t;
            }
            var t = eh(e, eQ);
            return t;
          },
          first(e, t) {
            for (var n = t.slice(), r = eY.get(e, n); r; )
              if (ts.isText(r) || 0 === r.children.length) break;
              else (r = r.children[0]), n.push(0);
            return [r, n];
          },
          fragment(e, t) {
            if (ts.isText(e))
              throw Error(
                "Cannot get a fragment starting from a root text node: ".concat(
                  tn.stringify(e),
                ),
              );
            return $({ children: e.children }, (e) => {
              var [n, r] = e6.edges(t);
              for (var [, i] of eY.nodes(e, {
                reverse: !0,
                pass: (e) => {
                  var [, n] = e;
                  return !e6.includes(t, n);
                },
              })) {
                if (!e6.includes(t, i)) {
                  var a = eY.parent(e, i),
                    u = i[i.length - 1];
                  a.children.splice(u, 1);
                }
                if (e1.equals(i, r.path)) {
                  var o = eY.leaf(e, i);
                  o.text = o.text.slice(0, r.offset);
                }
                if (e1.equals(i, n.path)) {
                  var s = eY.leaf(e, i);
                  s.text = s.text.slice(n.offset);
                }
              }
              eq.isEditor(e) && (e.selection = null);
            }).children;
          },
          get(e, t) {
            for (var n = e, r = 0; r < t.length; r++) {
              var i = t[r];
              if (ts.isText(n) || !n.children[i])
                throw Error(
                  "Cannot find a descendant at path ["
                    .concat(t, "] in node: ")
                    .concat(tn.stringify(e)),
                );
              n = n.children[i];
            }
            return n;
          },
          has(e, t) {
            for (var n = e, r = 0; r < t.length; r++) {
              var i = t[r];
              if (ts.isText(n) || !n.children[i]) return !1;
              n = n.children[i];
            }
            return !0;
          },
          isNode: (e) => ts.isText(e) || ej.isElement(e) || eq.isEditor(e),
          isNodeList(e) {
            if (!Array.isArray(e)) return !1;
            var t = eZ.get(e);
            if (void 0 !== t) return t;
            var n = e.every((e) => eY.isNode(e));
            return eZ.set(e, n), n;
          },
          last(e, t) {
            for (var n = t.slice(), r = eY.get(e, n); r; )
              if (ts.isText(r) || 0 === r.children.length) break;
              else {
                var i = r.children.length - 1;
                (r = r.children[i]), n.push(i);
              }
            return [r, n];
          },
          leaf(e, t) {
            var n = eY.get(e, t);
            if (!ts.isText(n))
              throw Error(
                "Cannot get the leaf node at path ["
                  .concat(t, "] because it refers to a non-leaf node: ")
                  .concat(tn.stringify(n)),
              );
            return n;
          },
          *levels(e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            for (var r of e1.levels(t, n)) {
              var i = eY.get(e, r);
              yield [i, r];
            }
          },
          matches: (e, t) =>
            (ej.isElement(e) && ej.isElementProps(t) && ej.matches(e, t)) ||
            (ts.isText(e) && ts.isTextProps(t) && ts.matches(e, t)),
          *nodes(e) {
            for (
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                { pass: n, reverse: r = !1 } = t,
                { from: i = [], to: a } = t,
                u = new Set(),
                o = [],
                s = e;
              !(a && (r ? e1.isBefore(o, a) : e1.isAfter(o, a)));

            ) {
              if (
                (u.has(s) || (yield [s, o]),
                !u.has(s) &&
                  !ts.isText(s) &&
                  0 !== s.children.length &&
                  (null == n || !1 === n([s, o])))
              ) {
                u.add(s);
                var l = r ? s.children.length - 1 : 0;
                e1.isAncestor(o, i) && (l = i[o.length]),
                  (o = o.concat(l)),
                  (s = eY.get(e, o));
                continue;
              }
              if (0 === o.length) break;
              if (!r) {
                var d = e1.next(o);
                if (eY.has(e, d)) {
                  (o = d), (s = eY.get(e, o));
                  continue;
                }
              }
              if (r && 0 !== o[o.length - 1]) {
                (o = e1.previous(o)), (s = eY.get(e, o));
                continue;
              }
              (o = e1.parent(o)), (s = eY.get(e, o)), u.add(s);
            }
          },
          parent(e, t) {
            var n = e1.parent(t),
              r = eY.get(e, n);
            if (ts.isText(r))
              throw Error(
                "Cannot get the parent of path [".concat(
                  t,
                  "] because it does not exist in the root.",
                ),
              );
            return r;
          },
          string: (e) =>
            ts.isText(e) ? e.text : e.children.map(eY.string).join(""),
          *texts(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            for (var [n, r] of eY.nodes(e, t)) ts.isText(n) && (yield [n, r]);
          },
        };
      function eJ(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function e$(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eJ(Object(n), !0).forEach(function (t) {
                en(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eJ(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var e0 = {
          isNodeOperation: (e) => e0.isOperation(e) && e.type.endsWith("_node"),
          isOperation(e) {
            if (!i(e)) return !1;
            switch (e.type) {
              case "insert_node":
              case "remove_node":
                return e1.isPath(e.path) && eY.isNode(e.node);
              case "insert_text":
              case "remove_text":
                return (
                  "number" == typeof e.offset &&
                  "string" == typeof e.text &&
                  e1.isPath(e.path)
                );
              case "merge_node":
                return (
                  "number" == typeof e.position &&
                  e1.isPath(e.path) &&
                  i(e.properties)
                );
              case "move_node":
                return e1.isPath(e.path) && e1.isPath(e.newPath);
              case "set_node":
                return (
                  e1.isPath(e.path) && i(e.properties) && i(e.newProperties)
                );
              case "set_selection":
                return (
                  (null === e.properties && e6.isRange(e.newProperties)) ||
                  (null === e.newProperties && e6.isRange(e.properties)) ||
                  (i(e.properties) && i(e.newProperties))
                );
              case "split_node":
                return (
                  e1.isPath(e.path) &&
                  "number" == typeof e.position &&
                  i(e.properties)
                );
              default:
                return !1;
            }
          },
          isOperationList: (e) =>
            Array.isArray(e) && e.every((e) => e0.isOperation(e)),
          isSelectionOperation: (e) =>
            e0.isOperation(e) && e.type.endsWith("_selection"),
          isTextOperation: (e) => e0.isOperation(e) && e.type.endsWith("_text"),
          inverse(e) {
            switch (e.type) {
              case "insert_node":
                return e$(e$({}, e), {}, { type: "remove_node" });
              case "insert_text":
                return e$(e$({}, e), {}, { type: "remove_text" });
              case "merge_node":
                return e$(
                  e$({}, e),
                  {},
                  { type: "split_node", path: e1.previous(e.path) },
                );
              case "move_node":
                var { newPath: t, path: n } = e;
                if (e1.equals(t, n)) return e;
                if (e1.isSibling(n, t))
                  return e$(e$({}, e), {}, { path: t, newPath: n });
                var r = e1.transform(n, e),
                  i = e1.transform(e1.next(n), e);
                return e$(e$({}, e), {}, { path: r, newPath: i });
              case "remove_node":
                return e$(e$({}, e), {}, { type: "insert_node" });
              case "remove_text":
                return e$(e$({}, e), {}, { type: "insert_text" });
              case "set_node":
                var { properties: a, newProperties: u } = e;
                return e$(e$({}, e), {}, { properties: u, newProperties: a });
              case "set_selection":
                var { properties: o, newProperties: s } = e;
                if (null == o)
                  return e$(
                    e$({}, e),
                    {},
                    { properties: s, newProperties: null },
                  );
                if (null == s)
                  return e$(
                    e$({}, e),
                    {},
                    { properties: null, newProperties: o },
                  );
                return e$(e$({}, e), {}, { properties: s, newProperties: o });
              case "split_node":
                return e$(
                  e$({}, e),
                  {},
                  { type: "merge_node", path: e1.next(e.path) },
                );
            }
          },
        },
        e1 = {
          ancestors(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { reverse: n = !1 } = t,
              r = e1.levels(e, t);
            return n ? r.slice(1) : r.slice(0, -1);
          },
          common(e, t) {
            for (var n = [], r = 0; r < e.length && r < t.length; r++) {
              var i = e[r];
              if (i !== t[r]) break;
              n.push(i);
            }
            return n;
          },
          compare(e, t) {
            for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) {
              if (e[r] < t[r]) return -1;
              if (e[r] > t[r]) return 1;
            }
            return 0;
          },
          endsAfter(e, t) {
            var n = e.length - 1,
              r = e.slice(0, n),
              i = t.slice(0, n),
              a = e[n],
              u = t[n];
            return e1.equals(r, i) && a > u;
          },
          endsAt(e, t) {
            var n = e.length,
              r = e.slice(0, n),
              i = t.slice(0, n);
            return e1.equals(r, i);
          },
          endsBefore(e, t) {
            var n = e.length - 1,
              r = e.slice(0, n),
              i = t.slice(0, n),
              a = e[n],
              u = t[n];
            return e1.equals(r, i) && a < u;
          },
          equals: (e, t) =>
            e.length === t.length && e.every((e, n) => e === t[n]),
          hasPrevious: (e) => e[e.length - 1] > 0,
          isAfter: (e, t) => 1 === e1.compare(e, t),
          isAncestor: (e, t) => e.length < t.length && 0 === e1.compare(e, t),
          isBefore: (e, t) => -1 === e1.compare(e, t),
          isChild: (e, t) =>
            e.length === t.length + 1 && 0 === e1.compare(e, t),
          isCommon: (e, t) => e.length <= t.length && 0 === e1.compare(e, t),
          isDescendant: (e, t) => e.length > t.length && 0 === e1.compare(e, t),
          isParent: (e, t) =>
            e.length + 1 === t.length && 0 === e1.compare(e, t),
          isPath: (e) =>
            Array.isArray(e) && (0 === e.length || "number" == typeof e[0]),
          isSibling(e, t) {
            if (e.length !== t.length) return !1;
            var n = e.slice(0, -1),
              r = t.slice(0, -1);
            return e[e.length - 1] !== t[t.length - 1] && e1.equals(n, r);
          },
          levels(e) {
            for (
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                { reverse: n = !1 } = t,
                r = [],
                i = 0;
              i <= e.length;
              i++
            )
              r.push(e.slice(0, i));
            return n && r.reverse(), r;
          },
          next(e) {
            if (0 === e.length)
              throw Error(
                "Cannot get the next path of a root path [".concat(
                  e,
                  "], because it has no next index.",
                ),
              );
            var t = e[e.length - 1];
            return e.slice(0, -1).concat(t + 1);
          },
          operationCanTransformPath(e) {
            switch (e.type) {
              case "insert_node":
              case "remove_node":
              case "merge_node":
              case "split_node":
              case "move_node":
                return !0;
              default:
                return !1;
            }
          },
          parent(e) {
            if (0 === e.length)
              throw Error(
                "Cannot get the parent path of the root path [".concat(e, "]."),
              );
            return e.slice(0, -1);
          },
          previous(e) {
            if (0 === e.length)
              throw Error(
                "Cannot get the previous path of a root path [".concat(
                  e,
                  "], because it has no previous index.",
                ),
              );
            var t = e[e.length - 1];
            if (t <= 0)
              throw Error(
                "Cannot get the previous path of a first child path [".concat(
                  e,
                  "] because it would result in a negative index.",
                ),
              );
            return e.slice(0, -1).concat(t - 1);
          },
          relative(e, t) {
            if (!e1.isAncestor(t, e) && !e1.equals(e, t))
              throw Error(
                "Cannot get the relative path of ["
                  .concat(e, "] inside ancestor [")
                  .concat(
                    t,
                    "], because it is not above or equal to the path.",
                  ),
              );
            return e.slice(t.length);
          },
          transform(e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            if (!e) return null;
            var r = [...e],
              { affinity: i = "forward" } = n;
            if (0 === e.length) return r;
            switch (t.type) {
              case "insert_node":
                var { path: a } = t;
                (e1.equals(a, r) ||
                  e1.endsBefore(a, r) ||
                  e1.isAncestor(a, r)) &&
                  (r[a.length - 1] += 1);
                break;
              case "remove_node":
                var { path: u } = t;
                if (e1.equals(u, r) || e1.isAncestor(u, r)) return null;
                e1.endsBefore(u, r) && (r[u.length - 1] -= 1);
                break;
              case "merge_node":
                var { path: o, position: s } = t;
                e1.equals(o, r) || e1.endsBefore(o, r)
                  ? (r[o.length - 1] -= 1)
                  : e1.isAncestor(o, r) &&
                    ((r[o.length - 1] -= 1), (r[o.length] += s));
                break;
              case "split_node":
                var { path: l, position: d } = t;
                if (e1.equals(l, r)) {
                  if ("forward" === i) r[r.length - 1] += 1;
                  else if ("backward" !== i) return null;
                } else
                  e1.endsBefore(l, r)
                    ? (r[l.length - 1] += 1)
                    : e1.isAncestor(l, r) &&
                      e[l.length] >= d &&
                      ((r[l.length - 1] += 1), (r[l.length] -= d));
                break;
              case "move_node":
                var { path: c, newPath: f } = t;
                if (e1.equals(c, f)) break;
                if (e1.isAncestor(c, r) || e1.equals(c, r)) {
                  var h = f.slice();
                  return (
                    e1.endsBefore(c, f) &&
                      c.length < f.length &&
                      (h[c.length - 1] -= 1),
                    h.concat(r.slice(c.length))
                  );
                }
                e1.isSibling(c, f) && (e1.isAncestor(f, r) || e1.equals(f, r))
                  ? e1.endsBefore(c, r)
                    ? (r[c.length - 1] -= 1)
                    : (r[c.length - 1] += 1)
                  : e1.endsBefore(f, r) ||
                      e1.equals(f, r) ||
                      e1.isAncestor(f, r)
                    ? (e1.endsBefore(c, r) && (r[c.length - 1] -= 1),
                      (r[f.length - 1] += 1))
                    : e1.endsBefore(c, r) &&
                      (e1.equals(f, r) && (r[f.length - 1] += 1),
                      (r[c.length - 1] -= 1));
            }
            return r;
          },
        },
        e2 = {
          transform(e, t) {
            var { current: n, affinity: r } = e;
            if (null != n) {
              var i = e1.transform(n, t, { affinity: r });
              (e.current = i), null == i && e.unref();
            }
          },
        };
      function e3(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function e5(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? e3(Object(n), !0).forEach(function (t) {
                en(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : e3(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var e8 = {
          compare(e, t) {
            var n = e1.compare(e.path, t.path);
            return 0 === n
              ? e.offset < t.offset
                ? -1
                : +(e.offset > t.offset)
              : n;
          },
          isAfter: (e, t) => 1 === e8.compare(e, t),
          isBefore: (e, t) => -1 === e8.compare(e, t),
          equals: (e, t) => e.offset === t.offset && e1.equals(e.path, t.path),
          isPoint: (e) =>
            i(e) && "number" == typeof e.offset && e1.isPath(e.path),
          transform(e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            return $(e, (e) => {
              if (null === e) return null;
              var { affinity: r = "forward" } = n,
                { path: i, offset: a } = e;
              switch (t.type) {
                case "insert_node":
                case "move_node":
                  e.path = e1.transform(i, t, n);
                  break;
                case "insert_text":
                  e1.equals(t.path, i) &&
                    (t.offset < a || (t.offset === a && "forward" === r)) &&
                    (e.offset += t.text.length);
                  break;
                case "merge_node":
                  e1.equals(t.path, i) && (e.offset += t.position),
                    (e.path = e1.transform(i, t, n));
                  break;
                case "remove_text":
                  e1.equals(t.path, i) &&
                    t.offset <= a &&
                    (e.offset -= Math.min(a - t.offset, t.text.length));
                  break;
                case "remove_node":
                  if (e1.equals(t.path, i) || e1.isAncestor(t.path, i))
                    return null;
                  e.path = e1.transform(i, t, n);
                  break;
                case "split_node":
                  if (e1.equals(t.path, i))
                    if (t.position === a && null == r) return null;
                    else
                      (t.position < a ||
                        (t.position === a && "forward" === r)) &&
                        ((e.offset -= t.position),
                        (e.path = e1.transform(
                          i,
                          t,
                          e5(e5({}, n), {}, { affinity: "forward" }),
                        )));
                  else e.path = e1.transform(i, t, n);
              }
            });
          },
        },
        e7 = {
          transform(e, t) {
            var { current: n, affinity: r } = e;
            if (null != n) {
              var i = e8.transform(n, t, { affinity: r });
              (e.current = i), null == i && e.unref();
            }
          },
        },
        e4 = ["anchor", "focus"];
      function e9(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var e6 = {
          edges(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { reverse: n = !1 } = t,
              { anchor: r, focus: i } = e;
            return e6.isBackward(e) === n ? [r, i] : [i, r];
          },
          end(e) {
            var [, t] = e6.edges(e);
            return t;
          },
          equals: (e, t) =>
            e8.equals(e.anchor, t.anchor) && e8.equals(e.focus, t.focus),
          includes(e, t) {
            if (e6.isRange(t)) {
              if (e6.includes(e, t.anchor) || e6.includes(e, t.focus))
                return !0;
              var [n, r] = e6.edges(e),
                [i, a] = e6.edges(t);
              return e8.isBefore(n, i) && e8.isAfter(r, a);
            }
            var [u, o] = e6.edges(e),
              s = !1,
              l = !1;
            return (
              e8.isPoint(t)
                ? ((s = e8.compare(t, u) >= 0), (l = 0 >= e8.compare(t, o)))
                : ((s = e1.compare(t, u.path) >= 0),
                  (l = 0 >= e1.compare(t, o.path))),
              s && l
            );
          },
          intersection(e, t) {
            var n = eh(e, e4),
              [r, i] = e6.edges(e),
              [a, u] = e6.edges(t),
              o = e8.isBefore(r, a) ? a : r,
              s = e8.isBefore(i, u) ? i : u;
            return e8.isBefore(s, o)
              ? null
              : (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? e9(Object(n), !0).forEach(function (t) {
                          en(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n),
                          )
                        : e9(Object(n)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t),
                            );
                          });
                  }
                  return e;
                })({ anchor: o, focus: s }, n);
          },
          isBackward(e) {
            var { anchor: t, focus: n } = e;
            return e8.isAfter(t, n);
          },
          isCollapsed(e) {
            var { anchor: t, focus: n } = e;
            return e8.equals(t, n);
          },
          isExpanded: (e) => !e6.isCollapsed(e),
          isForward: (e) => !e6.isBackward(e),
          isRange: (e) => i(e) && e8.isPoint(e.anchor) && e8.isPoint(e.focus),
          *points(e) {
            yield [e.anchor, "anchor"], yield [e.focus, "focus"];
          },
          start(e) {
            var [t] = e6.edges(e);
            return t;
          },
          transform(e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            return $(e, (e) => {
              if (null === e) return null;
              var r,
                i,
                { affinity: a = "inward" } = n;
              if ("inward" === a) {
                var u = e6.isCollapsed(e);
                e6.isForward(e)
                  ? ((r = "forward"), (i = u ? r : "backward"))
                  : ((r = "backward"), (i = u ? r : "forward"));
              } else
                "outward" === a
                  ? e6.isForward(e)
                    ? ((r = "backward"), (i = "forward"))
                    : ((r = "forward"), (i = "backward"))
                  : ((r = a), (i = a));
              var o = e8.transform(e.anchor, t, { affinity: r }),
                s = e8.transform(e.focus, t, { affinity: i });
              if (!o || !s) return null;
              (e.anchor = o), (e.focus = s);
            });
          },
        },
        te = {
          transform(e, t) {
            var { current: n, affinity: r } = e;
            if (null != n) {
              var i = e6.transform(n, t, { affinity: r });
              (e.current = i), null == i && e.unref();
            }
          },
        },
        tt = void 0,
        tn = {
          setScrubber(e) {
            tt = e;
          },
          stringify: (e) => JSON.stringify(e, tt),
        },
        tr = (e, t) => {
          for (var n in e) {
            var r = e[n],
              a = t[n];
            if (i(r) && i(a)) {
              if (!tr(r, a)) return !1;
            } else if (Array.isArray(r) && Array.isArray(a)) {
              if (r.length !== a.length) return !1;
              for (var u = 0; u < r.length; u++) if (r[u] !== a[u]) return !1;
            } else if (r !== a) return !1;
          }
          for (var o in t) if (void 0 === e[o] && void 0 !== t[o]) return !1;
          return !0;
        },
        ti = ["text"],
        ta = ["anchor", "focus"];
      function tu(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function to(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tu(Object(n), !0).forEach(function (t) {
                en(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tu(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var ts = {
        equals(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            { loose: r = !1 } = n;
          return tr(r ? eh(e, ti) : e, r ? eh(t, ti) : t);
        },
        isText: (e) => i(e) && "string" == typeof e.text,
        isTextList: (e) => Array.isArray(e) && e.every((e) => ts.isText(e)),
        isTextProps: (e) => void 0 !== e.text,
        matches(e, t) {
          for (var n in t)
            if ("text" !== n && (!e.hasOwnProperty(n) || e[n] !== t[n]))
              return !1;
          return !0;
        },
        decorations(e, t) {
          var n = [to({}, e)];
          for (var r of t) {
            var i = eh(r, ta),
              [a, u] = e6.edges(r),
              o = [],
              s = 0,
              l = a.offset,
              d = u.offset;
            for (var c of n) {
              var { length: f } = c.text,
                h = s;
              if (((s += f), l <= h && s <= d)) {
                Object.assign(c, i), o.push(c);
                continue;
              }
              if (
                (l !== d && (l === s || d === h)) ||
                l > s ||
                d < h ||
                (d === h && 0 !== h)
              ) {
                o.push(c);
                continue;
              }
              var p = c,
                m = void 0,
                _ = void 0;
              if (d < s) {
                var v = d - h;
                (_ = to(to({}, p), {}, { text: p.text.slice(v) })),
                  (p = to(to({}, p), {}, { text: p.text.slice(0, v) }));
              }
              if (l > h) {
                var g = l - h;
                (m = to(to({}, p), {}, { text: p.text.slice(0, g) })),
                  (p = to(to({}, p), {}, { text: p.text.slice(g) }));
              }
              Object.assign(p, i), m && o.push(m), o.push(p), _ && o.push(_);
            }
            n = o;
          }
          return n;
        },
      };
      function tl(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function td(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tl(Object(n), !0).forEach(function (t) {
                en(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tl(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var tc = ["text"],
        tf = ["children"];
      function th(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function tp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? th(Object(n), !0).forEach(function (t) {
                en(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : th(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var tm = (e, t) =>
          ej.isElement(t)
            ? !!eq.isVoid(e, t) ||
              (1 === t.children.length && tm(e, t.children[0]))
            : !eq.isEditor(t) && !0,
        t_ = (e, t) => {
          var [n] = eq.node(e, t);
          return (e) => e === n;
        };
      function tv(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function tg(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tv(Object(n), !0).forEach(function (t) {
                en(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tv(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function ty(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function tD(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ty(Object(n), !0).forEach(function (t) {
                en(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ty(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var tb = tD(
        tD(
          tD(
            tD(
              {},
              {
                transform(e, t) {
                  e.children = ee(e.children);
                  var n = e.selection && ee(e.selection);
                  try {
                    n = ((e, t, n) => {
                      switch (n.type) {
                        case "insert_node":
                          var { path: r, node: i } = n,
                            a = eY.parent(e, r),
                            u = r[r.length - 1];
                          if (u > a.children.length)
                            throw Error(
                              'Cannot apply an "insert_node" operation at path ['.concat(
                                r,
                                "] because the destination is past the end of the node.",
                              ),
                            );
                          if ((a.children.splice(u, 0, i), t))
                            for (var [o, s] of e6.points(t))
                              t[s] = e8.transform(o, n);
                          break;
                        case "insert_text":
                          var { path: l, offset: d, text: c } = n;
                          if (0 === c.length) break;
                          var f = eY.leaf(e, l),
                            h = f.text.slice(0, d),
                            p = f.text.slice(d);
                          if (((f.text = h + c + p), t))
                            for (var [m, _] of e6.points(t))
                              t[_] = e8.transform(m, n);
                          break;
                        case "merge_node":
                          var { path: v } = n,
                            g = eY.get(e, v),
                            y = e1.previous(v),
                            D = eY.get(e, y),
                            b = eY.parent(e, v),
                            C = v[v.length - 1];
                          if (ts.isText(g) && ts.isText(D)) D.text += g.text;
                          else if (ts.isText(g) || ts.isText(D))
                            throw Error(
                              'Cannot apply a "merge_node" operation at path ['
                                .concat(
                                  v,
                                  "] to nodes of different interfaces: ",
                                )
                                .concat(tn.stringify(g), " ")
                                .concat(tn.stringify(D)),
                            );
                          else D.children.push(...g.children);
                          if ((b.children.splice(C, 1), t))
                            for (var [E, w] of e6.points(t))
                              t[w] = e8.transform(E, n);
                          break;
                        case "move_node":
                          var { path: A, newPath: B } = n;
                          if (e1.isAncestor(A, B))
                            throw Error(
                              "Cannot move a path ["
                                .concat(A, "] to new path [")
                                .concat(
                                  B,
                                  "] because the destination is inside itself.",
                                ),
                            );
                          var F = eY.get(e, A),
                            V = eY.parent(e, A),
                            T = A[A.length - 1];
                          V.children.splice(T, 1);
                          var k = e1.transform(A, n),
                            x = eY.get(e, e1.parent(k)),
                            P = k[k.length - 1];
                          if ((x.children.splice(P, 0, F), t))
                            for (var [O, S] of e6.points(t))
                              t[S] = e8.transform(O, n);
                          break;
                        case "remove_node":
                          var { path: R } = n,
                            M = R[R.length - 1];
                          if ((eY.parent(e, R).children.splice(M, 1), t))
                            for (var [N, L] of e6.points(t)) {
                              var I = e8.transform(N, n);
                              if (null != t && null != I) t[L] = I;
                              else {
                                var j = void 0,
                                  G = void 0;
                                for (var [W, K] of eY.texts(e))
                                  if (-1 === e1.compare(K, R)) j = [W, K];
                                  else {
                                    G = [W, K];
                                    break;
                                  }
                                var U = !1;
                                j &&
                                  G &&
                                  (U = e1.equals(G[1], R)
                                    ? !e1.hasPrevious(G[1])
                                    : e1.common(j[1], R).length <
                                      e1.common(G[1], R).length),
                                  j && !U
                                    ? ((N.path = j[1]),
                                      (N.offset = j[0].text.length))
                                    : G
                                      ? ((N.path = G[1]), (N.offset = 0))
                                      : (t = null);
                              }
                            }
                          break;
                        case "remove_text":
                          var { path: H, offset: q, text: z } = n;
                          if (0 === z.length) break;
                          var X = eY.leaf(e, H),
                            Q = X.text.slice(0, q),
                            Z = X.text.slice(q + z.length);
                          if (((X.text = Q + Z), t))
                            for (var [Y, J] of e6.points(t))
                              t[J] = e8.transform(Y, n);
                          break;
                        case "set_node":
                          var {
                            path: $,
                            properties: ee,
                            newProperties: et,
                          } = n;
                          if (0 === $.length)
                            throw Error(
                              "Cannot set properties on the root node!",
                            );
                          var en = eY.get(e, $);
                          for (var er in et) {
                            if ("children" === er || "text" === er)
                              throw Error(
                                'Cannot set the "'.concat(
                                  er,
                                  '" property of nodes!',
                                ),
                              );
                            var ei = et[er];
                            null == ei ? delete en[er] : (en[er] = ei);
                          }
                          for (var ea in ee)
                            et.hasOwnProperty(ea) || delete en[ea];
                          break;
                        case "set_selection":
                          var { newProperties: eu } = n;
                          if (null == eu) t = eu;
                          else {
                            if (null == t) {
                              if (!e6.isRange(eu))
                                throw Error(
                                  'Cannot apply an incomplete "set_selection" operation properties '.concat(
                                    tn.stringify(eu),
                                    " when there is no current selection.",
                                  ),
                                );
                              t = td({}, eu);
                            }
                            for (var eo in eu) {
                              var es = eu[eo];
                              if (null == es) {
                                if ("anchor" === eo || "focus" === eo)
                                  throw Error(
                                    'Cannot remove the "'.concat(
                                      eo,
                                      '" selection property',
                                    ),
                                  );
                                delete t[eo];
                              } else t[eo] = es;
                            }
                          }
                          break;
                        case "split_node":
                          var el,
                            { path: ed, position: ec, properties: ef } = n;
                          if (0 === ed.length)
                            throw Error(
                              'Cannot apply a "split_node" operation at path ['.concat(
                                ed,
                                "] because the root node cannot be split.",
                              ),
                            );
                          var eh = eY.get(e, ed),
                            ep = eY.parent(e, ed),
                            em = ed[ed.length - 1];
                          if (ts.isText(eh)) {
                            var e_ = eh.text.slice(0, ec),
                              ev = eh.text.slice(ec);
                            (eh.text = e_),
                              (el = td(td({}, ef), {}, { text: ev }));
                          } else {
                            var eg = eh.children.slice(0, ec),
                              ey = eh.children.slice(ec);
                            (eh.children = eg),
                              (el = td(td({}, ef), {}, { children: ey }));
                          }
                          if ((ep.children.splice(em + 1, 0, el), t))
                            for (var [eD, eb] of e6.points(t))
                              t[eb] = e8.transform(eD, n);
                      }
                      return t;
                    })(e, n, t);
                  } finally {
                    (e.children = et(e.children)),
                      n
                        ? (e.selection = u(n) ? et(n) : n)
                        : (e.selection = null);
                  }
                },
              },
            ),
            {
              insertNodes(e, t) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                eq.withoutNormalizing(e, () => {
                  var {
                      hanging: r = !1,
                      voids: i = !1,
                      mode: a = "lowest",
                    } = n,
                    { at: u, match: o, select: s } = n;
                  if ((eY.isNode(t) && (t = [t]), 0 !== t.length)) {
                    var [l] = t;
                    if (
                      (u ||
                        ((u = e.selection
                          ? e.selection
                          : e.children.length > 0
                            ? eq.end(e, [])
                            : [0]),
                        (s = !0)),
                      null == s && (s = !1),
                      e6.isRange(u))
                    )
                      if (
                        (r || (u = eq.unhangRange(e, u, { voids: i })),
                        e6.isCollapsed(u))
                      )
                        u = u.anchor;
                      else {
                        var [, d] = e6.edges(u),
                          c = eq.pointRef(e, d);
                        tb.delete(e, { at: u }), (u = c.unref());
                      }
                    if (e8.isPoint(u)) {
                      null == o &&
                        (o = ts.isText(l)
                          ? (e) => ts.isText(e)
                          : e.isInline(l)
                            ? (t) => ts.isText(t) || eq.isInline(e, t)
                            : (t) => ej.isElement(t) && eq.isBlock(e, t));
                      var [f] = eq.nodes(e, {
                        at: u.path,
                        match: o,
                        mode: a,
                        voids: i,
                      });
                      if (!f) return;
                      var [, h] = f,
                        p = eq.pathRef(e, h),
                        m = eq.isEnd(e, u, h);
                      tb.splitNodes(e, { at: u, match: o, mode: a, voids: i });
                      var _ = p.unref();
                      u = m ? e1.next(_) : _;
                    }
                    var v = e1.parent(u),
                      g = u[u.length - 1];
                    if (!(!i && eq.void(e, { at: v }))) {
                      for (var y of t) {
                        var D = v.concat(g);
                        g++,
                          e.apply({ type: "insert_node", path: D, node: y }),
                          (u = e1.next(u));
                      }
                      if (((u = e1.previous(u)), s)) {
                        var b = eq.end(e, u);
                        b && tb.select(e, b);
                      }
                    }
                  }
                });
              },
              liftNodes(e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                eq.withoutNormalizing(e, () => {
                  var {
                      at: n = e.selection,
                      mode: r = "lowest",
                      voids: i = !1,
                    } = t,
                    { match: a } = t;
                  if (
                    (null == a &&
                      (a = e1.isPath(n)
                        ? t_(e, n)
                        : (t) => ej.isElement(t) && eq.isBlock(e, t)),
                    n)
                  )
                    for (var u of Array.from(
                      eq.nodes(e, { at: n, match: a, mode: r, voids: i }),
                      (t) => {
                        var [, n] = t;
                        return eq.pathRef(e, n);
                      },
                    )) {
                      var o = u.unref();
                      if (o.length < 2)
                        throw Error(
                          "Cannot lift node at a path [".concat(
                            o,
                            "] because it has a depth of less than `2`.",
                          ),
                        );
                      var [s, l] = eq.node(e, e1.parent(o)),
                        d = o[o.length - 1],
                        { length: c } = s.children;
                      if (1 === c) {
                        var f = e1.next(l);
                        tb.moveNodes(e, { at: o, to: f, voids: i }),
                          tb.removeNodes(e, { at: l, voids: i });
                      } else if (0 === d)
                        tb.moveNodes(e, { at: o, to: l, voids: i });
                      else if (d === c - 1) {
                        var h = e1.next(l);
                        tb.moveNodes(e, { at: o, to: h, voids: i });
                      } else {
                        var p = e1.next(o),
                          m = e1.next(l);
                        tb.splitNodes(e, { at: p, voids: i }),
                          tb.moveNodes(e, { at: o, to: m, voids: i });
                      }
                    }
                });
              },
              mergeNodes(e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                eq.withoutNormalizing(e, () => {
                  var n,
                    r,
                    { match: i, at: a = e.selection } = t,
                    { hanging: u = !1, voids: o = !1, mode: s = "lowest" } = t;
                  if (a) {
                    if (null == i)
                      if (e1.isPath(a)) {
                        var [l] = eq.parent(e, a);
                        i = (e) => l.children.includes(e);
                      } else i = (t) => ej.isElement(t) && eq.isBlock(e, t);
                    if (
                      (!u &&
                        e6.isRange(a) &&
                        (a = eq.unhangRange(e, a, { voids: o })),
                      e6.isRange(a))
                    )
                      if (e6.isCollapsed(a)) a = a.anchor;
                      else {
                        var [, d] = e6.edges(a),
                          c = eq.pointRef(e, d);
                        tb.delete(e, { at: a }),
                          (a = c.unref()),
                          null == t.at && tb.select(e, a);
                      }
                    var [f] = eq.nodes(e, {
                        at: a,
                        match: i,
                        voids: o,
                        mode: s,
                      }),
                      h = eq.previous(e, {
                        at: a,
                        match: i,
                        voids: o,
                        mode: s,
                      });
                    if (f && h) {
                      var [p, m] = f,
                        [_, v] = h;
                      if (0 !== m.length && 0 !== v.length) {
                        var g = e1.next(v),
                          y = e1.common(m, v),
                          D = e1.isSibling(m, v),
                          b = Array.from(eq.levels(e, { at: m }), (e) => {
                            var [t] = e;
                            return t;
                          })
                            .slice(y.length)
                            .slice(0, -1),
                          C = eq.above(e, {
                            at: m,
                            mode: "highest",
                            match: (t) => b.includes(t) && tm(e, t),
                          }),
                          E = C && eq.pathRef(e, C[1]);
                        if (ts.isText(p) && ts.isText(_)) {
                          var w = eh(p, tc);
                          (r = _.text.length), (n = w);
                        } else if (ej.isElement(p) && ej.isElement(_)) {
                          var w = eh(p, tf);
                          (r = _.children.length), (n = w);
                        } else
                          throw Error(
                            "Cannot merge the node at path ["
                              .concat(
                                m,
                                "] with the previous sibling because it is not the same kind: ",
                              )
                              .concat(tn.stringify(p), " ")
                              .concat(tn.stringify(_)),
                          );
                        D || tb.moveNodes(e, { at: m, to: g, voids: o }),
                          E && tb.removeNodes(e, { at: E.current, voids: o }),
                          (ej.isElement(_) && eq.isEmpty(e, _)) ||
                          (ts.isText(_) &&
                            "" === _.text &&
                            0 !== v[v.length - 1])
                            ? tb.removeNodes(e, { at: v, voids: o })
                            : e.apply({
                                type: "merge_node",
                                path: g,
                                position: r,
                                properties: n,
                              }),
                          E && E.unref();
                      }
                    }
                  }
                });
              },
              moveNodes(e, t) {
                eq.withoutNormalizing(e, () => {
                  var {
                      to: n,
                      at: r = e.selection,
                      mode: i = "lowest",
                      voids: a = !1,
                    } = t,
                    { match: u } = t;
                  if (r) {
                    null == u &&
                      (u = e1.isPath(r)
                        ? t_(e, r)
                        : (t) => ej.isElement(t) && eq.isBlock(e, t));
                    var o = eq.pathRef(e, n);
                    for (var s of Array.from(
                      eq.nodes(e, { at: r, match: u, mode: i, voids: a }),
                      (t) => {
                        var [, n] = t;
                        return eq.pathRef(e, n);
                      },
                    )) {
                      var l = s.unref(),
                        d = o.current;
                      0 !== l.length &&
                        e.apply({ type: "move_node", path: l, newPath: d }),
                        o.current &&
                          e1.isSibling(d, l) &&
                          e1.isAfter(d, l) &&
                          (o.current = e1.next(o.current));
                    }
                    o.unref();
                  }
                });
              },
              removeNodes(e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                eq.withoutNormalizing(e, () => {
                  var {
                      hanging: n = !1,
                      voids: r = !1,
                      mode: i = "lowest",
                    } = t,
                    { at: a = e.selection, match: u } = t;
                  if (a)
                    for (var o of (null == u &&
                      (u = e1.isPath(a)
                        ? t_(e, a)
                        : (t) => ej.isElement(t) && eq.isBlock(e, t)),
                    !n &&
                      e6.isRange(a) &&
                      (a = eq.unhangRange(e, a, { voids: r })),
                    Array.from(
                      eq.nodes(e, { at: a, match: u, mode: i, voids: r }),
                      (t) => {
                        var [, n] = t;
                        return eq.pathRef(e, n);
                      },
                    ))) {
                      var s = o.unref();
                      if (s) {
                        var [l] = eq.node(e, s);
                        e.apply({ type: "remove_node", path: s, node: l });
                      }
                    }
                });
              },
              setNodes(e, t) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                eq.withoutNormalizing(e, () => {
                  var {
                      match: r,
                      at: i = e.selection,
                      compare: a,
                      merge: u,
                    } = n,
                    {
                      hanging: o = !1,
                      mode: s = "lowest",
                      split: l = !1,
                      voids: d = !1,
                    } = n;
                  if (i) {
                    if (
                      (null == r &&
                        (r = e1.isPath(i)
                          ? t_(e, i)
                          : (t) => ej.isElement(t) && eq.isBlock(e, t)),
                      !o &&
                        e6.isRange(i) &&
                        (i = eq.unhangRange(e, i, { voids: d })),
                      l && e6.isRange(i))
                    ) {
                      if (
                        e6.isCollapsed(i) &&
                        eq.leaf(e, i.anchor)[0].text.length > 0
                      )
                        return;
                      var c = eq.rangeRef(e, i, { affinity: "inward" }),
                        [f, h] = e6.edges(i),
                        p = "lowest" === s ? "lowest" : "highest",
                        m = eq.isEnd(e, h, h.path);
                      tb.splitNodes(e, {
                        at: h,
                        match: r,
                        mode: p,
                        voids: d,
                        always: !m,
                      });
                      var _ = eq.isStart(e, f, f.path);
                      tb.splitNodes(e, {
                        at: f,
                        match: r,
                        mode: p,
                        voids: d,
                        always: !_,
                      }),
                        (i = c.unref()),
                        null == n.at && tb.select(e, i);
                    }
                    for (var [v, g] of (a || (a = (e, t) => e !== t),
                    eq.nodes(e, { at: i, match: r, mode: s, voids: d }))) {
                      var y = {},
                        D = {};
                      if (0 !== g.length) {
                        var b = !1;
                        for (var C in t)
                          "children" !== C &&
                            "text" !== C &&
                            a(t[C], v[C]) &&
                            ((b = !0),
                            v.hasOwnProperty(C) && (y[C] = v[C]),
                            u
                              ? null != t[C] && (D[C] = u(v[C], t[C]))
                              : null != t[C] && (D[C] = t[C]));
                        b &&
                          e.apply({
                            type: "set_node",
                            path: g,
                            properties: y,
                            newProperties: D,
                          });
                      }
                    }
                  }
                });
              },
              splitNodes(e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                eq.withoutNormalizing(e, () => {
                  var n,
                    r,
                    { mode: i = "lowest", voids: a = !1 } = t,
                    {
                      match: u,
                      at: o = e.selection,
                      height: s = 0,
                      always: l = !1,
                    } = t;
                  if (
                    (null == u &&
                      (u = (t) => ej.isElement(t) && eq.isBlock(e, t)),
                    e6.isRange(o) &&
                      (o = ((e, t) => {
                        if (e6.isCollapsed(t)) return t.anchor;
                        var [, n] = e6.edges(t),
                          r = eq.pointRef(e, n);
                        return tb.delete(e, { at: t }), r.unref();
                      })(e, o)),
                    e1.isPath(o))
                  ) {
                    var d = o,
                      c = eq.point(e, d),
                      [f] = eq.parent(e, d);
                    (u = (e) => e === f),
                      (s = c.path.length - d.length + 1),
                      (o = c),
                      (l = !0);
                  }
                  if (o) {
                    var h = eq.pointRef(e, o, { affinity: "backward" });
                    try {
                      var [p] = eq.nodes(e, {
                        at: o,
                        match: u,
                        mode: i,
                        voids: a,
                      });
                      if (!p) return;
                      var m = eq.void(e, { at: o, mode: "highest" });
                      if (!a && m) {
                        var [_, v] = m;
                        if (ej.isElement(_) && e.isInline(_)) {
                          var g = eq.after(e, v);
                          if (!g) {
                            var y = e1.next(v);
                            tb.insertNodes(
                              e,
                              { text: "" },
                              { at: y, voids: a },
                            ),
                              (g = eq.point(e, y));
                          }
                          (o = g), (l = !0);
                        }
                        (s = o.path.length - v.length + 1), (l = !0);
                      }
                      n = eq.pointRef(e, o);
                      var D = o.path.length - s,
                        [, b] = p,
                        C = o.path.slice(0, D),
                        E = 0 === s ? o.offset : o.path[D] + 0;
                      for (var [w, A] of eq.levels(e, {
                        at: C,
                        reverse: !0,
                        voids: a,
                      })) {
                        var B = !1;
                        if (
                          A.length < b.length ||
                          0 === A.length ||
                          (!a && ej.isElement(w) && eq.isVoid(e, w))
                        )
                          break;
                        var F = h.current,
                          V = eq.isEnd(e, F, A);
                        if (l || !h || !eq.isEdge(e, F, A)) {
                          B = !0;
                          var T = eY.extractProps(w);
                          e.apply({
                            type: "split_node",
                            path: A,
                            position: E,
                            properties: T,
                          });
                        }
                        E = A[A.length - 1] + (B || V ? 1 : 0);
                      }
                      if (null == t.at) {
                        var k = n.current || eq.end(e, []);
                        tb.select(e, k);
                      }
                    } finally {
                      h.unref(), null == (r = n) || r.unref();
                    }
                  }
                });
              },
              unsetNodes(e, t) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                Array.isArray(t) || (t = [t]);
                var r = {};
                for (var i of t) r[i] = null;
                tb.setNodes(e, r, n);
              },
              unwrapNodes(e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                eq.withoutNormalizing(e, () => {
                  var { mode: n = "lowest", split: r = !1, voids: i = !1 } = t,
                    { at: a = e.selection, match: u } = t;
                  if (a) {
                    null == u &&
                      (u = e1.isPath(a)
                        ? t_(e, a)
                        : (t) => ej.isElement(t) && eq.isBlock(e, t)),
                      e1.isPath(a) && (a = eq.range(e, a));
                    var o = e6.isRange(a) ? eq.rangeRef(e, a) : null;
                    for (var s of Array.from(
                      eq.nodes(e, { at: a, match: u, mode: n, voids: i }),
                      (t) => {
                        var [, n] = t;
                        return eq.pathRef(e, n);
                      },
                    ).reverse())
                      !(function (t) {
                        var n = t.unref(),
                          [a] = eq.node(e, n),
                          u = eq.range(e, n);
                        r && o && (u = e6.intersection(o.current, u)),
                          tb.liftNodes(e, {
                            at: u,
                            match: (e) =>
                              ej.isAncestor(a) && a.children.includes(e),
                            voids: i,
                          });
                      })(s);
                    o && o.unref();
                  }
                });
              },
              wrapNodes(e, t) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                eq.withoutNormalizing(e, () => {
                  var { mode: r = "lowest", split: i = !1, voids: a = !1 } = n,
                    { match: u, at: o = e.selection } = n;
                  if (o) {
                    if (
                      (null == u &&
                        (u = e1.isPath(o)
                          ? t_(e, o)
                          : e.isInline(t)
                            ? (t) =>
                                (ej.isElement(t) && eq.isInline(e, t)) ||
                                ts.isText(t)
                            : (t) => ej.isElement(t) && eq.isBlock(e, t)),
                      i && e6.isRange(o))
                    ) {
                      var [s, l] = e6.edges(o),
                        d = eq.rangeRef(e, o, { affinity: "inward" });
                      tb.splitNodes(e, { at: l, match: u, voids: a }),
                        tb.splitNodes(e, { at: s, match: u, voids: a }),
                        (o = d.unref()),
                        null == n.at && tb.select(e, o);
                    }
                    for (var [, c] of Array.from(
                      eq.nodes(e, {
                        at: o,
                        match: e.isInline(t)
                          ? (t) => ej.isElement(t) && eq.isBlock(e, t)
                          : (e) => eq.isEditor(e),
                        mode: "lowest",
                        voids: a,
                      }),
                    )) {
                      var f = e6.isRange(o)
                        ? e6.intersection(o, eq.range(e, c))
                        : o;
                      if (f) {
                        var h = Array.from(
                          eq.nodes(e, { at: f, match: u, mode: r, voids: a }),
                        );
                        if (
                          h.length > 0 &&
                          "continue" ===
                            (function () {
                              var [n] = h,
                                r = h[h.length - 1],
                                [, i] = n,
                                [, u] = r;
                              if (0 === i.length && 0 === u.length)
                                return "continue";
                              var o = e1.equals(i, u)
                                  ? e1.parent(i)
                                  : e1.common(i, u),
                                s = eq.range(e, i, u),
                                [l] = eq.node(e, o),
                                d = o.length + 1,
                                c = e1.next(u.slice(0, d)),
                                f = tp(tp({}, t), {}, { children: [] });
                              tb.insertNodes(e, f, { at: c, voids: a }),
                                tb.moveNodes(e, {
                                  at: s,
                                  match: (e) =>
                                    ej.isAncestor(l) && l.children.includes(e),
                                  to: c.concat(0),
                                  voids: a,
                                });
                            })()
                        )
                          continue;
                      }
                    }
                  }
                });
              },
            },
          ),
          {
            collapse(e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                { edge: n = "anchor" } = t,
                { selection: r } = e;
              if (r) {
                if ("anchor" === n) tb.select(e, r.anchor);
                else if ("focus" === n) tb.select(e, r.focus);
                else if ("start" === n) {
                  var [i] = e6.edges(r);
                  tb.select(e, i);
                } else if ("end" === n) {
                  var [, a] = e6.edges(r);
                  tb.select(e, a);
                }
              }
            },
            deselect(e) {
              var { selection: t } = e;
              t &&
                e.apply({
                  type: "set_selection",
                  properties: t,
                  newProperties: null,
                });
            },
            move(e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                { selection: n } = e,
                { distance: r = 1, unit: i = "character", reverse: a = !1 } = t,
                { edge: u = null } = t;
              if (n) {
                "start" === u && (u = e6.isBackward(n) ? "focus" : "anchor"),
                  "end" === u && (u = e6.isBackward(n) ? "anchor" : "focus");
                var { anchor: o, focus: s } = n,
                  l = { distance: r, unit: i },
                  d = {};
                if (null == u || "anchor" === u) {
                  var c = a ? eq.before(e, o, l) : eq.after(e, o, l);
                  c && (d.anchor = c);
                }
                if (null == u || "focus" === u) {
                  var f = a ? eq.before(e, s, l) : eq.after(e, s, l);
                  f && (d.focus = f);
                }
                tb.setSelection(e, d);
              }
            },
            select(e, t) {
              var { selection: n } = e;
              if (((t = eq.range(e, t)), n)) return void tb.setSelection(e, t);
              if (!e6.isRange(t))
                throw Error(
                  "When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(
                    tn.stringify(t),
                  ),
                );
              e.apply({
                type: "set_selection",
                properties: n,
                newProperties: t,
              });
            },
            setPoint(e, t) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                { selection: r } = e,
                { edge: i = "both" } = n;
              if (r) {
                "start" === i && (i = e6.isBackward(r) ? "focus" : "anchor"),
                  "end" === i && (i = e6.isBackward(r) ? "anchor" : "focus");
                var { anchor: a, focus: u } = r,
                  o = "anchor" === i ? a : u;
                tb.setSelection(e, {
                  ["anchor" === i ? "anchor" : "focus"]: tg(tg({}, o), t),
                });
              }
            },
            setSelection(e, t) {
              var { selection: n } = e,
                r = {},
                i = {};
              if (n) {
                for (var a in t)
                  (("anchor" !== a ||
                    null == t.anchor ||
                    e8.equals(t.anchor, n.anchor)) &&
                    ("focus" !== a ||
                      null == t.focus ||
                      e8.equals(t.focus, n.focus)) &&
                    ("anchor" === a || "focus" === a || t[a] === n[a])) ||
                    ((r[a] = n[a]), (i[a] = t[a]));
                Object.keys(r).length > 0 &&
                  e.apply({
                    type: "set_selection",
                    properties: r,
                    newProperties: i,
                  });
              }
            },
          },
        ),
        {
          delete(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            eq.withoutNormalizing(e, () => {
              var n,
                {
                  reverse: r = !1,
                  unit: i = "character",
                  distance: a = 1,
                  voids: u = !1,
                } = t,
                { at: o = e.selection, hanging: s = !1 } = t;
              if (o) {
                var l = !1;
                if (
                  (e6.isRange(o) &&
                    e6.isCollapsed(o) &&
                    ((l = !0), (o = o.anchor)),
                  e8.isPoint(o))
                ) {
                  var d = eq.void(e, { at: o, mode: "highest" });
                  if (!u && d) {
                    var [, c] = d;
                    o = c;
                  } else {
                    var f = { unit: i, distance: a },
                      h = r
                        ? eq.before(e, o, f) || eq.start(e, [])
                        : eq.after(e, o, f) || eq.end(e, []);
                    (o = { anchor: o, focus: h }), (s = !0);
                  }
                }
                if (e1.isPath(o))
                  return void tb.removeNodes(e, { at: o, voids: u });
                if (!e6.isCollapsed(o)) {
                  if (!s) {
                    var [, p] = e6.edges(o),
                      m = eq.end(e, []);
                    e8.equals(p, m) || (o = eq.unhangRange(e, o, { voids: u }));
                  }
                  var [_, v] = e6.edges(o),
                    g = eq.above(e, {
                      match: (t) => ej.isElement(t) && eq.isBlock(e, t),
                      at: _,
                      voids: u,
                    }),
                    y = eq.above(e, {
                      match: (t) => ej.isElement(t) && eq.isBlock(e, t),
                      at: v,
                      voids: u,
                    }),
                    D = g && y && !e1.equals(g[1], y[1]),
                    b = e1.equals(_.path, v.path),
                    C = u ? null : eq.void(e, { at: _, mode: "highest" }),
                    E = u ? null : eq.void(e, { at: v, mode: "highest" });
                  if (C) {
                    var w = eq.before(e, _);
                    w && g && e1.isAncestor(g[1], w.path) && (_ = w);
                  }
                  if (E) {
                    var A = eq.after(e, v);
                    A && y && e1.isAncestor(y[1], A.path) && (v = A);
                  }
                  var B = [];
                  for (var F of eq.nodes(e, { at: o, voids: u })) {
                    var [V, T] = F;
                    (!n || 0 !== e1.compare(T, n)) &&
                      ((!u && ej.isElement(V) && eq.isVoid(e, V)) ||
                        (!e1.isCommon(T, _.path) && !e1.isCommon(T, v.path))) &&
                      (B.push(F), (n = T));
                  }
                  var k = Array.from(B, (t) => {
                      var [, n] = t;
                      return eq.pathRef(e, n);
                    }),
                    x = eq.pointRef(e, _),
                    P = eq.pointRef(e, v),
                    O = "";
                  if (!b && !C) {
                    var S = x.current,
                      [R] = eq.leaf(e, S),
                      { path: M } = S,
                      { offset: N } = _,
                      L = R.text.slice(N);
                    L.length > 0 &&
                      (e.apply({
                        type: "remove_text",
                        path: M,
                        offset: N,
                        text: L,
                      }),
                      (O = L));
                  }
                  if (
                    (k
                      .reverse()
                      .map((e) => e.unref())
                      .filter((e) => null !== e)
                      .forEach((t) => tb.removeNodes(e, { at: t, voids: u })),
                    !E)
                  ) {
                    var I = P.current,
                      [j] = eq.leaf(e, I),
                      { path: G } = I,
                      W = b ? _.offset : 0,
                      K = j.text.slice(W, v.offset);
                    K.length > 0 &&
                      (e.apply({
                        type: "remove_text",
                        path: G,
                        offset: W,
                        text: K,
                      }),
                      (O = K));
                  }
                  !b &&
                    D &&
                    P.current &&
                    x.current &&
                    tb.mergeNodes(e, { at: P.current, hanging: !0, voids: u }),
                    l &&
                      r &&
                      "character" === i &&
                      O.length > 1 &&
                      O.match(/[\u0E00-\u0E7F]+/) &&
                      tb.insertText(e, O.slice(0, O.length - a));
                  var U = x.unref(),
                    H = P.unref(),
                    q = r ? U || H : H || U;
                  null == t.at && q && tb.select(e, q);
                }
              }
            });
          },
          insertFragment(e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            eq.withoutNormalizing(e, () => {
              var r,
                { hanging: i = !1, voids: a = !1 } = n,
                { at: u = e.selection } = n;
              if (t.length) {
                if (u) {
                  if (e6.isRange(u))
                    if (
                      (i || (u = eq.unhangRange(e, u, { voids: a })),
                      e6.isCollapsed(u))
                    )
                      u = u.anchor;
                    else {
                      var [, o] = e6.edges(u);
                      if (!a && eq.void(e, { at: o })) return;
                      var s = eq.pointRef(e, o);
                      tb.delete(e, { at: u }), (u = s.unref());
                    }
                  else e1.isPath(u) && (u = eq.start(e, u));
                  if (!(!a && eq.void(e, { at: u }))) {
                    var l = eq.above(e, {
                      at: u,
                      match: (t) => ej.isElement(t) && eq.isInline(e, t),
                      mode: "highest",
                      voids: a,
                    });
                    if (l) {
                      var [, d] = l;
                      eq.isEnd(e, u, d)
                        ? (u = eq.after(e, d))
                        : eq.isStart(e, u, d) && (u = eq.before(e, d));
                    }
                    var [, c] = eq.above(e, {
                        match: (t) => ej.isElement(t) && eq.isBlock(e, t),
                        at: u,
                        voids: a,
                      }),
                      f = eq.isStart(e, u, c),
                      h = eq.isEnd(e, u, c),
                      p = f && h,
                      m = !f || (f && h),
                      _ = !h,
                      [, v] = eY.first({ children: t }, []),
                      [, g] = eY.last({ children: t }, []),
                      y = [],
                      D = (t) => {
                        var [n, r] = t;
                        return (
                          0 !== r.length &&
                          (!!p ||
                            !(
                              (m &&
                                e1.isAncestor(r, v) &&
                                ej.isElement(n) &&
                                !e.isVoid(n) &&
                                !e.isInline(n)) ||
                              (_ &&
                                e1.isAncestor(r, g) &&
                                ej.isElement(n) &&
                                !e.isVoid(n) &&
                                !e.isInline(n))
                            ))
                        );
                      };
                    for (var b of eY.nodes({ children: t }, { pass: D }))
                      D(b) && y.push(b);
                    var C = [],
                      E = [],
                      w = [],
                      A = !0,
                      B = !1;
                    for (var [F] of y)
                      ej.isElement(F) && !e.isInline(F)
                        ? ((A = !1), (B = !0), E.push(F))
                        : A
                          ? C.push(F)
                          : w.push(F);
                    var [V] = eq.nodes(e, {
                        at: u,
                        match: (t) => ts.isText(t) || eq.isInline(e, t),
                        mode: "highest",
                        voids: a,
                      }),
                      [, T] = V,
                      k = eq.isStart(e, u, T),
                      x = eq.isEnd(e, u, T),
                      P = eq.pathRef(e, h && !w.length ? e1.next(c) : c),
                      O = eq.pathRef(e, x ? e1.next(T) : T);
                    tb.splitNodes(e, {
                      at: u,
                      match: (t) =>
                        B
                          ? ej.isElement(t) && eq.isBlock(e, t)
                          : ts.isText(t) || eq.isInline(e, t),
                      mode: B ? "lowest" : "highest",
                      always: B && (!f || C.length > 0) && (!h || w.length > 0),
                      voids: a,
                    });
                    var S = eq.pathRef(e, !k || (k && x) ? e1.next(T) : T);
                    if (
                      (tb.insertNodes(e, C, {
                        at: S.current,
                        match: (t) => ts.isText(t) || eq.isInline(e, t),
                        mode: "highest",
                        voids: a,
                      }),
                      p &&
                        !C.length &&
                        E.length &&
                        !w.length &&
                        tb.delete(e, { at: c, voids: a }),
                      tb.insertNodes(e, E, {
                        at: P.current,
                        match: (t) => ej.isElement(t) && eq.isBlock(e, t),
                        mode: "lowest",
                        voids: a,
                      }),
                      tb.insertNodes(e, w, {
                        at: O.current,
                        match: (t) => ts.isText(t) || eq.isInline(e, t),
                        mode: "highest",
                        voids: a,
                      }),
                      !n.at &&
                        (w.length > 0 && O.current
                          ? (r = e1.previous(O.current))
                          : E.length > 0 && P.current
                            ? (r = e1.previous(P.current))
                            : S.current && (r = e1.previous(S.current)),
                        r))
                    ) {
                      var R = eq.end(e, r);
                      tb.select(e, R);
                    }
                    S.unref(), P.unref(), O.unref();
                  }
                }
              }
            });
          },
          insertText(e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            eq.withoutNormalizing(e, () => {
              var { voids: r = !1 } = n,
                { at: i = e.selection } = n;
              if (i) {
                if ((e1.isPath(i) && (i = eq.range(e, i)), e6.isRange(i)))
                  if (e6.isCollapsed(i)) i = i.anchor;
                  else {
                    var a = e6.end(i);
                    if (!r && eq.void(e, { at: a })) return;
                    var u = e6.start(i),
                      o = eq.pointRef(e, u),
                      s = eq.pointRef(e, a);
                    tb.delete(e, { at: i, voids: r });
                    var l = o.unref(),
                      d = s.unref();
                    (i = l || d), tb.setSelection(e, { anchor: i, focus: i });
                  }
                if (!(!r && eq.void(e, { at: i }))) {
                  var { path: c, offset: f } = i;
                  t.length > 0 &&
                    e.apply({
                      type: "insert_text",
                      path: c,
                      offset: f,
                      text: t,
                    });
                }
              }
            });
          },
        },
      );
    },
    722872(e) {
      "use strict";
      var t = {
        linear: function (e, t, n, r) {
          return ((n - t) * e) / r + t;
        },
        easeInQuad: function (e, t, n, r) {
          return (n - t) * (e /= r) * e + t;
        },
        easeOutQuad: function (e, t, n, r) {
          return -(n - t) * (e /= r) * (e - 2) + t;
        },
        easeInOutQuad: function (e, t, n, r) {
          var i = n - t;
          return (e /= r / 2) < 1
            ? (i / 2) * e * e + t
            : (-i / 2) * (--e * (e - 2) - 1) + t;
        },
        easeInCubic: function (e, t, n, r) {
          return (n - t) * (e /= r) * e * e + t;
        },
        easeOutCubic: function (e, t, n, r) {
          return (n - t) * ((e = e / r - 1) * e * e + 1) + t;
        },
        easeInOutCubic: function (e, t, n, r) {
          var i = n - t;
          return (e /= r / 2) < 1
            ? (i / 2) * e * e * e + t
            : (i / 2) * ((e -= 2) * e * e + 2) + t;
        },
        easeInQuart: function (e, t, n, r) {
          return (n - t) * (e /= r) * e * e * e + t;
        },
        easeOutQuart: function (e, t, n, r) {
          return -(n - t) * ((e = e / r - 1) * e * e * e - 1) + t;
        },
        easeInOutQuart: function (e, t, n, r) {
          var i = n - t;
          return (e /= r / 2) < 1
            ? (i / 2) * e * e * e * e + t
            : (-i / 2) * ((e -= 2) * e * e * e - 2) + t;
        },
        easeInQuint: function (e, t, n, r) {
          return (n - t) * (e /= r) * e * e * e * e + t;
        },
        easeOutQuint: function (e, t, n, r) {
          return (n - t) * ((e = e / r - 1) * e * e * e * e + 1) + t;
        },
        easeInOutQuint: function (e, t, n, r) {
          var i = n - t;
          return (e /= r / 2) < 1
            ? (i / 2) * e * e * e * e * e + t
            : (i / 2) * ((e -= 2) * e * e * e * e + 2) + t;
        },
        easeInSine: function (e, t, n, r) {
          var i = n - t;
          return -i * Math.cos((e / r) * (Math.PI / 2)) + i + t;
        },
        easeOutSine: function (e, t, n, r) {
          return (n - t) * Math.sin((e / r) * (Math.PI / 2)) + t;
        },
        easeInOutSine: function (e, t, n, r) {
          return (-(n - t) / 2) * (Math.cos((Math.PI * e) / r) - 1) + t;
        },
        easeInExpo: function (e, t, n, r) {
          return 0 == e ? t : (n - t) * Math.pow(2, 10 * (e / r - 1)) + t;
        },
        easeOutExpo: function (e, t, n, r) {
          var i = n - t;
          return e == r ? t + i : i * (-Math.pow(2, (-10 * e) / r) + 1) + t;
        },
        easeInOutExpo: function (e, t, n, r) {
          var i = n - t;
          return 0 === e
            ? t
            : e === r
              ? t + i
              : (e /= r / 2) < 1
                ? (i / 2) * Math.pow(2, 10 * (e - 1)) + t
                : (i / 2) * (-Math.pow(2, -10 * --e) + 2) + t;
        },
        easeInCirc: function (e, t, n, r) {
          return -(n - t) * (Math.sqrt(1 - (e /= r) * e) - 1) + t;
        },
        easeOutCirc: function (e, t, n, r) {
          return (n - t) * Math.sqrt(1 - (e = e / r - 1) * e) + t;
        },
        easeInOutCirc: function (e, t, n, r) {
          var i = n - t;
          return (e /= r / 2) < 1
            ? (-i / 2) * (Math.sqrt(1 - e * e) - 1) + t
            : (i / 2) * (Math.sqrt(1 - (e -= 2) * e) + 1) + t;
        },
        easeInElastic: function (e, t, n, r) {
          var i,
            a,
            u,
            o = n - t;
          return ((u = 1.70158), (a = 0), (i = o), 0 === e)
            ? t
            : 1 == (e /= r)
              ? t + o
              : (a || (a = 0.3 * r),
                i < Math.abs(o)
                  ? ((i = o), (u = a / 4))
                  : (u = (a / (2 * Math.PI)) * Math.asin(o / i)),
                -(
                  i *
                  Math.pow(2, 10 * (e -= 1)) *
                  Math.sin((2 * Math.PI * (e * r - u)) / a)
                ) + t);
        },
        easeOutElastic: function (e, t, n, r) {
          var i,
            a,
            u,
            o = n - t;
          return ((u = 1.70158), (a = 0), (i = o), 0 === e)
            ? t
            : 1 == (e /= r)
              ? t + o
              : (a || (a = 0.3 * r),
                i < Math.abs(o)
                  ? ((i = o), (u = a / 4))
                  : (u = (a / (2 * Math.PI)) * Math.asin(o / i)),
                i *
                  Math.pow(2, -10 * e) *
                  Math.sin((2 * Math.PI * (e * r - u)) / a) +
                  o +
                  t);
        },
        easeInOutElastic: function (e, t, n, r) {
          var i,
            a,
            u,
            o = n - t;
          return ((u = 1.70158), (a = 0), (i = o), 0 === e)
            ? t
            : 2 == (e /= r / 2)
              ? t + o
              : (a || (a = 0.3 * 1.5 * r),
                  i < Math.abs(o)
                    ? ((i = o), (u = a / 4))
                    : (u = (a / (2 * Math.PI)) * Math.asin(o / i)),
                  e < 1)
                ? -0.5 *
                    (i *
                      Math.pow(2, 10 * (e -= 1)) *
                      Math.sin((2 * Math.PI * (e * r - u)) / a)) +
                  t
                : i *
                    Math.pow(2, -10 * (e -= 1)) *
                    Math.sin((2 * Math.PI * (e * r - u)) / a) *
                    0.5 +
                  o +
                  t;
        },
        easeInBack: function (e, t, n, r, i) {
          return (
            void 0 === i && (i = 1.70158),
            (n - t) * (e /= r) * e * ((i + 1) * e - i) + t
          );
        },
        easeOutBack: function (e, t, n, r, i) {
          return (
            void 0 === i && (i = 1.70158),
            (n - t) * ((e = e / r - 1) * e * ((i + 1) * e + i) + 1) + t
          );
        },
        easeInOutBack: function (e, t, n, r, i) {
          var a = n - t;
          return (void 0 === i && (i = 1.70158), (e /= r / 2) < 1)
            ? (a / 2) * (e * e * (((i *= 1.525) + 1) * e - i)) + t
            : (a / 2) * ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) + t;
        },
        easeInBounce: function (e, n, r, i) {
          var a,
            u = r - n;
          return (a = t.easeOutBounce(i - e, 0, u, i)), u - a + n;
        },
        easeOutBounce: function (e, t, n, r) {
          var i = n - t;
          return (e /= r) < 1 / 2.75
            ? 7.5625 * e * e * i + t
            : e < 2 / 2.75
              ? i * (7.5625 * (e -= 1.5 / 2.75) * e + 0.75) + t
              : e < 2.5 / 2.75
                ? i * (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375) + t
                : i * (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375) + t;
        },
        easeInOutBounce: function (e, n, r, i) {
          var a = r - n;
          return e < i / 2
            ? 0.5 * t.easeInBounce(2 * e, 0, a, i) + n
            : 0.5 * t.easeOutBounce(2 * e - i, 0, a, i) + 0.5 * a + n;
        },
      };
      e.exports = t;
    },
    469322(e, t, n) {
      "use strict";
      n.d(t, {
        BT: () => eL,
        Wt: () => ej,
        bf: () => eN,
        xC: () =>
          function e(t) {
            if ("number" == typeof t) return new eS(t);
            if ("bigint" == typeof t) return new eS(t.toString());
            if (
              ((0, eM.V1)(
                "symbol" != typeof t,
                "Symbol is not supported",
                TypeError,
              ),
              void 0 === t)
            )
              return new eS(NaN);
            if (null === t || 0 === t) return eR;
            if (!0 === t) return new eS(1);
            if ("string" == typeof t)
              try {
                return new eS(t);
              } catch {
                return new eS(NaN);
              }
            (0, eM.V1)("object" == typeof t, "object expected", TypeError);
            let n = (function (e, t) {
              if ("object" == typeof e && null != e) {
                let n,
                  r = Symbol.toPrimitive in e ? e[Symbol.toPrimitive] : void 0;
                if (void 0 !== r) {
                  void 0 === t
                    ? (n = "default")
                    : "string" === t
                      ? (n = "string")
                      : ((0, eM.V1)(
                          "number" === t,
                          'preferredType must be "string" or "number"',
                        ),
                        (n = "number"));
                  let i = r.call(e, n);
                  if ("object" != typeof i) return i;
                  throw TypeError("Cannot convert exotic object to primitive.");
                }
                for (let n of (void 0 === t && (t = "number"),
                "string" === t
                  ? ["toString", "valueOf"]
                  : ["valueOf", "toString"])) {
                  let t = e[n];
                  if (eI(t)) {
                    let n = t.call(e);
                    if ("object" != typeof n) return n;
                  }
                }
                throw TypeError("Cannot convert object to primitive value");
              }
              return e;
            })(t, "number");
            return (
              (0, eM.V1)("object" != typeof n, "object expected", TypeError),
              e(n)
            );
          },
      });
      var r,
        i,
        a = "0123456789abcdef",
        u =
          "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
        o =
          "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
        s = {
          precision: 20,
          rounding: 4,
          modulo: 1,
          toExpNeg: -7,
          toExpPos: 21,
          minE: -9e15,
          maxE: 9e15,
          crypto: !1,
        },
        l = !0,
        d = "[DecimalError] ",
        c = d + "Invalid argument: ",
        f = d + "Precision limit exceeded",
        h = d + "crypto unavailable",
        p = "[object Decimal]",
        m = Math.floor,
        _ = Math.pow,
        v = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
        g = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
        y = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
        D = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        b = u.length - 1,
        C = o.length - 1,
        E = { toStringTag: p };
      function w(e) {
        var t,
          n,
          r,
          i = e.length - 1,
          a = "",
          u = e[0];
        if (i > 0) {
          for (a += u, t = 1; t < i; t++)
            (n = 7 - (r = e[t] + "").length) && (a += R(n)), (a += r);
          (n = 7 - (r = (u = e[t]) + "").length) && (a += R(n));
        } else if (0 === u) return "0";
        for (; u % 10 == 0; ) u /= 10;
        return a + u;
      }
      function A(e, t, n) {
        if (e !== ~~e || e < t || e > n) throw Error(c + e);
      }
      function B(e, t, n, r) {
        var i, a, u, o;
        for (a = e[0]; a >= 10; a /= 10) --t;
        return (
          --t < 0
            ? ((t += 7), (i = 0))
            : ((i = Math.ceil((t + 1) / 7)), (t %= 7)),
          (a = _(10, 7 - t)),
          (o = e[i] % a | 0),
          null == r
            ? t < 3
              ? (0 == t ? (o = (o / 100) | 0) : 1 == t && (o = (o / 10) | 0),
                (u =
                  (n < 4 && 99999 == o) ||
                  (n > 3 && 49999 == o) ||
                  5e4 == o ||
                  0 == o))
              : (u =
                  (((n < 4 && o + 1 == a) || (n > 3 && o + 1 == a / 2)) &&
                    ((e[i + 1] / a / 100) | 0) == _(10, t - 2) - 1) ||
                  ((o == a / 2 || 0 == o) && ((e[i + 1] / a / 100) | 0) == 0))
            : t < 4
              ? (0 == t
                  ? (o = (o / 1e3) | 0)
                  : 1 == t
                    ? (o = (o / 100) | 0)
                    : 2 == t && (o = (o / 10) | 0),
                (u = ((r || n < 4) && 9999 == o) || (!r && n > 3 && 4999 == o)))
              : (u =
                  (((r || n < 4) && o + 1 == a) ||
                    (!r && n > 3 && o + 1 == a / 2)) &&
                  ((e[i + 1] / a / 1e3) | 0) == _(10, t - 3) - 1),
          u
        );
      }
      function F(e, t, n) {
        for (var r, i, u = [0], o = 0, s = e.length; o < s; ) {
          for (i = u.length; i--; ) u[i] *= t;
          for (u[0] += a.indexOf(e.charAt(o++)), r = 0; r < u.length; r++)
            u[r] > n - 1 &&
              (void 0 === u[r + 1] && (u[r + 1] = 0),
              (u[r + 1] += (u[r] / n) | 0),
              (u[r] %= n));
        }
        return u.reverse();
      }
      (E.absoluteValue = E.abs =
        function () {
          var e = new this.constructor(this);
          return e.s < 0 && (e.s = 1), T(e);
        }),
        (E.ceil = function () {
          return T(new this.constructor(this), this.e + 1, 2);
        }),
        (E.clampedTo = E.clamp =
          function (e, t) {
            var n = this.constructor;
            if (((e = new n(e)), (t = new n(t)), !e.s || !t.s))
              return new n(NaN);
            if (e.gt(t)) throw Error(c + t);
            return 0 > this.cmp(e) ? e : this.cmp(t) > 0 ? t : new n(this);
          }),
        (E.comparedTo = E.cmp =
          function (e) {
            var t,
              n,
              r,
              i,
              a = this.d,
              u = (e = new this.constructor(e)).d,
              o = this.s,
              s = e.s;
            if (!a || !u)
              return o && s
                ? o !== s
                  ? o
                  : a === u
                    ? 0
                    : !a ^ (o < 0)
                      ? 1
                      : -1
                : NaN;
            if (!a[0] || !u[0]) return a[0] ? o : u[0] ? -s : 0;
            if (o !== s) return o;
            if (this.e !== e.e) return (this.e > e.e) ^ (o < 0) ? 1 : -1;
            for (t = 0, n = (r = a.length) < (i = u.length) ? r : i; t < n; ++t)
              if (a[t] !== u[t]) return (a[t] > u[t]) ^ (o < 0) ? 1 : -1;
            return r === i ? 0 : (r > i) ^ (o < 0) ? 1 : -1;
          }),
        (E.cosine = E.cos =
          function () {
            var e,
              t,
              n = this,
              r = n.constructor;
            return n.d
              ? n.d[0]
                ? ((e = r.precision),
                  (t = r.rounding),
                  (r.precision = e + Math.max(n.e, n.sd()) + 7),
                  (r.rounding = 1),
                  (n = (function (e, t) {
                    var n, r, i;
                    if (t.isZero()) return t;
                    (r = t.d.length) < 32
                      ? (i = (1 / U(4, (n = Math.ceil(r / 3)))).toString())
                      : ((n = 16), (i = "2.3283064365386962890625e-10")),
                      (e.precision += n),
                      (t = K(e, 1, t.times(i), new e(1)));
                    for (var a = n; a--; ) {
                      var u = t.times(t);
                      t = u.times(u).minus(u).times(8).plus(1);
                    }
                    return (e.precision -= n), t;
                  })(r, H(r, n))),
                  (r.precision = e),
                  (r.rounding = t),
                  T(2 == i || 3 == i ? n.neg() : n, e, t, !0))
                : new r(1)
              : new r(NaN);
          }),
        (E.cubeRoot = E.cbrt =
          function () {
            var e,
              t,
              n,
              r,
              i,
              a,
              u,
              o,
              s,
              d,
              c = this.constructor;
            if (!this.isFinite() || this.isZero()) return new c(this);
            for (
              l = !1,
                (a = this.s * _(this.s * this, 1 / 3)) && Math.abs(a) != 1 / 0
                  ? (r = new c(a.toString()))
                  : ((n = w(this.d)),
                    (a = ((e = this.e) - n.length + 1) % 3) &&
                      (n += 1 == a || -2 == a ? "0" : "00"),
                    (a = _(n, 1 / 3)),
                    (e = m((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
                    ((r = new c(
                      (n =
                        a == 1 / 0
                          ? "5e" + e
                          : (n = a.toExponential()).slice(
                              0,
                              n.indexOf("e") + 1,
                            ) + e),
                    )).s = this.s)),
                u = (e = c.precision) + 3;
              ;

            )
              if (
                ((r = V(
                  (d = (s = (o = r).times(o).times(o)).plus(this))
                    .plus(this)
                    .times(o),
                  d.plus(s),
                  u + 2,
                  1,
                )),
                w(o.d).slice(0, u) === (n = w(r.d)).slice(0, u))
              ) {
                if (
                  "9999" != (n = n.slice(u - 3, u + 1)) &&
                  (i || "4999" != n)
                ) {
                  (+n && (+n.slice(1) || "5" != n.charAt(0))) ||
                    (T(r, e + 1, 1), (t = !r.times(r).times(r).eq(this)));
                  break;
                }
                if (!i && (T(o, e + 1, 0), o.times(o).times(o).eq(this))) {
                  r = o;
                  break;
                }
                (u += 4), (i = 1);
              }
            return (l = !0), T(r, e, c.rounding, t);
          }),
        (E.decimalPlaces = E.dp =
          function () {
            var e,
              t = this.d,
              n = NaN;
            if (t) {
              if (((n = ((e = t.length - 1) - m(this.e / 7)) * 7), (e = t[e])))
                for (; e % 10 == 0; e /= 10) n--;
              n < 0 && (n = 0);
            }
            return n;
          }),
        (E.dividedBy = E.div =
          function (e) {
            return V(this, new this.constructor(e));
          }),
        (E.dividedToIntegerBy = E.divToInt =
          function (e) {
            var t = this.constructor;
            return T(V(this, new t(e), 0, 1, 1), t.precision, t.rounding);
          }),
        (E.equals = E.eq =
          function (e) {
            return 0 === this.cmp(e);
          }),
        (E.floor = function () {
          return T(new this.constructor(this), this.e + 1, 3);
        }),
        (E.greaterThan = E.gt =
          function (e) {
            return this.cmp(e) > 0;
          }),
        (E.greaterThanOrEqualTo = E.gte =
          function (e) {
            var t = this.cmp(e);
            return 1 == t || 0 === t;
          }),
        (E.hyperbolicCosine = E.cosh =
          function () {
            var e,
              t,
              n,
              r,
              i,
              a = this,
              u = a.constructor,
              o = new u(1);
            if (!a.isFinite()) return new u(a.s ? 1 / 0 : NaN);
            if (a.isZero()) return o;
            (n = u.precision),
              (r = u.rounding),
              (u.precision = n + Math.max(a.e, a.sd()) + 4),
              (u.rounding = 1),
              (i = a.d.length) < 32
                ? (t = (1 / U(4, (e = Math.ceil(i / 3)))).toString())
                : ((e = 16), (t = "2.3283064365386962890625e-10")),
              (a = K(u, 1, a.times(t), new u(1), !0));
            for (var s, l = e, d = new u(8); l--; )
              (s = a.times(a)), (a = o.minus(s.times(d.minus(s.times(d)))));
            return T(a, (u.precision = n), (u.rounding = r), !0);
          }),
        (E.hyperbolicSine = E.sinh =
          function () {
            var e,
              t,
              n,
              r,
              i = this,
              a = i.constructor;
            if (!i.isFinite() || i.isZero()) return new a(i);
            if (
              ((t = a.precision),
              (n = a.rounding),
              (a.precision = t + Math.max(i.e, i.sd()) + 4),
              (a.rounding = 1),
              (r = i.d.length) < 3)
            )
              i = K(a, 2, i, i, !0);
            else {
              (e = (e = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | e),
                (i = K(a, 2, (i = i.times(1 / U(5, e))), i, !0));
              for (var u, o = new a(5), s = new a(16), l = new a(20); e--; )
                (u = i.times(i)),
                  (i = i.times(o.plus(u.times(s.times(u).plus(l)))));
            }
            return (a.precision = t), (a.rounding = n), T(i, t, n, !0);
          }),
        (E.hyperbolicTangent = E.tanh =
          function () {
            var e,
              t,
              n = this.constructor;
            return this.isFinite()
              ? this.isZero()
                ? new n(this)
                : ((e = n.precision),
                  (t = n.rounding),
                  (n.precision = e + 7),
                  (n.rounding = 1),
                  V(
                    this.sinh(),
                    this.cosh(),
                    (n.precision = e),
                    (n.rounding = t),
                  ))
              : new n(this.s);
          }),
        (E.inverseCosine = E.acos =
          function () {
            var e = this,
              t = e.constructor,
              n = e.abs().cmp(1),
              r = t.precision,
              i = t.rounding;
            return -1 !== n
              ? 0 === n
                ? e.isNeg()
                  ? O(t, r, i)
                  : new t(0)
                : new t(NaN)
              : e.isZero()
                ? O(t, r + 4, i).times(0.5)
                : ((t.precision = r + 6),
                  (t.rounding = 1),
                  (e = new t(1).minus(e).div(e.plus(1)).sqrt().atan()),
                  (t.precision = r),
                  (t.rounding = i),
                  e.times(2));
          }),
        (E.inverseHyperbolicCosine = E.acosh =
          function () {
            var e,
              t,
              n = this,
              r = n.constructor;
            return n.lte(1)
              ? new r(n.eq(1) ? 0 : NaN)
              : n.isFinite()
                ? ((e = r.precision),
                  (t = r.rounding),
                  (r.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4),
                  (r.rounding = 1),
                  (l = !1),
                  (n = n.times(n).minus(1).sqrt().plus(n)),
                  (l = !0),
                  (r.precision = e),
                  (r.rounding = t),
                  n.ln())
                : new r(n);
          }),
        (E.inverseHyperbolicSine = E.asinh =
          function () {
            var e,
              t,
              n = this,
              r = n.constructor;
            return !n.isFinite() || n.isZero()
              ? new r(n)
              : ((e = r.precision),
                (t = r.rounding),
                (r.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6),
                (r.rounding = 1),
                (l = !1),
                (n = n.times(n).plus(1).sqrt().plus(n)),
                (l = !0),
                (r.precision = e),
                (r.rounding = t),
                n.ln());
          }),
        (E.inverseHyperbolicTangent = E.atanh =
          function () {
            var e,
              t,
              n,
              r,
              i = this,
              a = i.constructor;
            return i.isFinite()
              ? i.e >= 0
                ? new a(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN)
                : ((e = a.precision),
                    (t = a.rounding),
                    Math.max((r = i.sd()), e) < -(2 * i.e) - 1)
                  ? T(new a(i), e, t, !0)
                  : ((a.precision = n = r - i.e),
                    (i = V(i.plus(1), new a(1).minus(i), n + e, 1)),
                    (a.precision = e + 4),
                    (a.rounding = 1),
                    (i = i.ln()),
                    (a.precision = e),
                    (a.rounding = t),
                    i.times(0.5))
              : new a(NaN);
          }),
        (E.inverseSine = E.asin =
          function () {
            var e,
              t,
              n,
              r,
              i = this,
              a = i.constructor;
            return i.isZero()
              ? new a(i)
              : ((t = i.abs().cmp(1)),
                  (n = a.precision),
                  (r = a.rounding),
                  -1 !== t)
                ? 0 === t
                  ? (((e = O(a, n + 4, r).times(0.5)).s = i.s), e)
                  : new a(NaN)
                : ((a.precision = n + 6),
                  (a.rounding = 1),
                  (i = i.div(new a(1).minus(i.times(i)).sqrt().plus(1)).atan()),
                  (a.precision = n),
                  (a.rounding = r),
                  i.times(2));
          }),
        (E.inverseTangent = E.atan =
          function () {
            var e,
              t,
              n,
              r,
              i,
              a,
              u,
              o,
              s,
              d = this,
              c = d.constructor,
              f = c.precision,
              h = c.rounding;
            if (d.isFinite()) {
              if (d.isZero()) return new c(d);
              else if (d.abs().eq(1) && f + 4 <= C)
                return ((u = O(c, f + 4, h).times(0.25)).s = d.s), u;
            } else {
              if (!d.s) return new c(NaN);
              if (f + 4 <= C)
                return ((u = O(c, f + 4, h).times(0.5)).s = d.s), u;
            }
            for (
              c.precision = o = f + 10,
                c.rounding = 1,
                e = n = Math.min(28, (o / 7 + 2) | 0);
              e;
              --e
            )
              d = d.div(d.times(d).plus(1).sqrt().plus(1));
            for (
              l = !1,
                t = Math.ceil(o / 7),
                r = 1,
                s = d.times(d),
                u = new c(d),
                i = d;
              -1 !== e;

            )
              if (
                ((i = i.times(s)),
                (a = u.minus(i.div((r += 2)))),
                (i = i.times(s)),
                void 0 !== (u = a.plus(i.div((r += 2)))).d[t])
              )
                for (e = t; u.d[e] === a.d[e] && e--; );
            return (
              n && (u = u.times(2 << (n - 1))),
              (l = !0),
              T(u, (c.precision = f), (c.rounding = h), !0)
            );
          }),
        (E.isFinite = function () {
          return !!this.d;
        }),
        (E.isInteger = E.isInt =
          function () {
            return !!this.d && m(this.e / 7) > this.d.length - 2;
          }),
        (E.isNaN = function () {
          return !this.s;
        }),
        (E.isNegative = E.isNeg =
          function () {
            return this.s < 0;
          }),
        (E.isPositive = E.isPos =
          function () {
            return this.s > 0;
          }),
        (E.isZero = function () {
          return !!this.d && 0 === this.d[0];
        }),
        (E.lessThan = E.lt =
          function (e) {
            return 0 > this.cmp(e);
          }),
        (E.lessThanOrEqualTo = E.lte =
          function (e) {
            return 1 > this.cmp(e);
          }),
        (E.logarithm = E.log =
          function (e) {
            var t,
              n,
              r,
              i,
              a,
              u,
              o,
              s = this.constructor,
              d = s.precision,
              c = s.rounding;
            if (null == e) (e = new s(10)), (t = !0);
            else {
              if (((n = (e = new s(e)).d), e.s < 0 || !n || !n[0] || e.eq(1)))
                return new s(NaN);
              t = e.eq(10);
            }
            if (((n = this.d), this.s < 0 || !n || !n[0] || this.eq(1)))
              return new s(
                n && !n[0] ? -1 / 0 : 1 != this.s ? NaN : n ? 0 : 1 / 0,
              );
            if (t)
              if (n.length > 1) i = !0;
              else {
                for (r = n[0]; r % 10 == 0; ) r /= 10;
                i = 1 !== r;
              }
            if (
              ((l = !1),
              B(
                (o = V(
                  (a = j(this, (u = d + 5))),
                  t ? P(s, u + 10) : j(e, u),
                  u,
                  1,
                )).d,
                (r = d),
                c,
              ))
            )
              do
                if (
                  ((u += 10),
                  (o = V((a = j(this, u)), t ? P(s, u + 10) : j(e, u), u, 1)),
                  !i)
                ) {
                  +w(o.d).slice(r + 1, r + 15) + 1 == 1e14 &&
                    (o = T(o, d + 1, 0));
                  break;
                }
              while (B(o.d, (r += 10), c));
            return (l = !0), T(o, d, c);
          }),
        (E.minus = E.sub =
          function (e) {
            var t,
              n,
              r,
              i,
              a,
              u,
              o,
              s,
              d,
              c,
              f,
              h,
              p = this.constructor;
            if (((e = new p(e)), !this.d || !e.d))
              return (
                this.s && e.s
                  ? this.d
                    ? (e.s = -e.s)
                    : (e = new p(e.d || this.s !== e.s ? this : NaN))
                  : (e = new p(NaN)),
                e
              );
            if (this.s != e.s) return (e.s = -e.s), this.plus(e);
            if (
              ((d = this.d),
              (h = e.d),
              (o = p.precision),
              (s = p.rounding),
              !d[0] || !h[0])
            ) {
              if (h[0]) e.s = -e.s;
              else {
                if (!d[0]) return new p(3 === s ? -0 : 0);
                e = new p(this);
              }
              return l ? T(e, o, s) : e;
            }
            if (
              ((n = m(e.e / 7)),
              (c = m(this.e / 7)),
              (d = d.slice()),
              (a = c - n))
            ) {
              for (
                (f = a < 0)
                  ? ((t = d), (a = -a), (u = h.length))
                  : ((t = h), (n = c), (u = d.length)),
                  a > (r = Math.max(Math.ceil(o / 7), u) + 2) &&
                    ((a = r), (t.length = 1)),
                  t.reverse(),
                  r = a;
                r--;

              )
                t.push(0);
              t.reverse();
            } else {
              for (
                (f = (r = d.length) < (u = h.length)) && (u = r), r = 0;
                r < u;
                r++
              )
                if (d[r] != h[r]) {
                  f = d[r] < h[r];
                  break;
                }
              a = 0;
            }
            for (
              f && ((t = d), (d = h), (h = t), (e.s = -e.s)),
                u = d.length,
                r = h.length - u;
              r > 0;
              --r
            )
              d[u++] = 0;
            for (r = h.length; r > a; ) {
              if (d[--r] < h[r]) {
                for (i = r; i && 0 === d[--i]; ) d[i] = 1e7 - 1;
                --d[i], (d[r] += 1e7);
              }
              d[r] -= h[r];
            }
            for (; 0 === d[--u]; ) d.pop();
            for (; 0 === d[0]; d.shift()) --n;
            return d[0]
              ? ((e.d = d), (e.e = x(d, n)), l ? T(e, o, s) : e)
              : new p(3 === s ? -0 : 0);
          }),
        (E.modulo = E.mod =
          function (e) {
            var t,
              n = this.constructor;
            return ((e = new n(e)), this.d && e.s && (!e.d || e.d[0]))
              ? e.d && (!this.d || this.d[0])
                ? ((l = !1),
                  9 == n.modulo
                    ? ((t = V(this, e.abs(), 0, 3, 1)), (t.s *= e.s))
                    : (t = V(this, e, 0, n.modulo, 1)),
                  (t = t.times(e)),
                  (l = !0),
                  this.minus(t))
                : T(new n(this), n.precision, n.rounding)
              : new n(NaN);
          }),
        (E.naturalExponential = E.exp =
          function () {
            return I(this);
          }),
        (E.naturalLogarithm = E.ln =
          function () {
            return j(this);
          }),
        (E.negated = E.neg =
          function () {
            var e = new this.constructor(this);
            return (e.s = -e.s), T(e);
          }),
        (E.plus = E.add =
          function (e) {
            var t,
              n,
              r,
              i,
              a,
              u,
              o,
              s,
              d,
              c,
              f = this.constructor;
            if (((e = new f(e)), !this.d || !e.d))
              return (
                this.s && e.s
                  ? this.d || (e = new f(e.d || this.s === e.s ? this : NaN))
                  : (e = new f(NaN)),
                e
              );
            if (this.s != e.s) return (e.s = -e.s), this.minus(e);
            if (
              ((d = this.d),
              (c = e.d),
              (o = f.precision),
              (s = f.rounding),
              !d[0] || !c[0])
            )
              return c[0] || (e = new f(this)), l ? T(e, o, s) : e;
            if (
              ((a = m(this.e / 7)),
              (r = m(e.e / 7)),
              (d = d.slice()),
              (i = a - r))
            ) {
              for (
                i < 0
                  ? ((n = d), (i = -i), (u = c.length))
                  : ((n = c), (r = a), (u = d.length)),
                  i > (u = (a = Math.ceil(o / 7)) > u ? a + 1 : u + 1) &&
                    ((i = u), (n.length = 1)),
                  n.reverse();
                i--;

              )
                n.push(0);
              n.reverse();
            }
            for (
              (u = d.length) - (i = c.length) < 0 &&
                ((i = u), (n = c), (c = d), (d = n)),
                t = 0;
              i;

            )
              (t = ((d[--i] = d[i] + c[i] + t) / 1e7) | 0), (d[i] %= 1e7);
            for (t && (d.unshift(t), ++r), u = d.length; 0 == d[--u]; ) d.pop();
            return (e.d = d), (e.e = x(d, r)), l ? T(e, o, s) : e;
          }),
        (E.precision = E.sd =
          function (e) {
            var t;
            if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e)
              throw Error(c + e);
            return (
              this.d
                ? ((t = S(this.d)), e && this.e + 1 > t && (t = this.e + 1))
                : (t = NaN),
              t
            );
          }),
        (E.round = function () {
          var e = this.constructor;
          return T(new e(this), this.e + 1, e.rounding);
        }),
        (E.sine = E.sin =
          function () {
            var e,
              t,
              n = this,
              r = n.constructor;
            return n.isFinite()
              ? n.isZero()
                ? new r(n)
                : ((e = r.precision),
                  (t = r.rounding),
                  (r.precision = e + Math.max(n.e, n.sd()) + 7),
                  (r.rounding = 1),
                  (n = (function (e, t) {
                    var n,
                      r = t.d.length;
                    if (r < 3) return t.isZero() ? t : K(e, 2, t, t);
                    (n = (n = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | n),
                      (t = K(e, 2, (t = t.times(1 / U(5, n))), t));
                    for (
                      var i, a = new e(5), u = new e(16), o = new e(20);
                      n--;

                    )
                      (i = t.times(t)),
                        (t = t.times(a.plus(i.times(u.times(i).minus(o)))));
                    return t;
                  })(r, H(r, n))),
                  (r.precision = e),
                  (r.rounding = t),
                  T(i > 2 ? n.neg() : n, e, t, !0))
              : new r(NaN);
          }),
        (E.squareRoot = E.sqrt =
          function () {
            var e,
              t,
              n,
              r,
              i,
              a,
              u = this.d,
              o = this.e,
              s = this.s,
              d = this.constructor;
            if (1 !== s || !u || !u[0])
              return new d(
                !s || (s < 0 && (!u || u[0])) ? NaN : u ? this : 1 / 0,
              );
            for (
              l = !1,
                0 == (s = Math.sqrt(+this)) || s == 1 / 0
                  ? (((t = w(u)).length + o) % 2 == 0 && (t += "0"),
                    (s = Math.sqrt(t)),
                    (o = m((o + 1) / 2) - (o < 0 || o % 2)),
                    (r = new d(
                      (t =
                        s == 1 / 0
                          ? "5e" + o
                          : (t = s.toExponential()).slice(
                              0,
                              t.indexOf("e") + 1,
                            ) + o),
                    )))
                  : (r = new d(s.toString())),
                n = (o = d.precision) + 3;
              ;

            )
              if (
                ((r = (a = r).plus(V(this, a, n + 2, 1)).times(0.5)),
                w(a.d).slice(0, n) === (t = w(r.d)).slice(0, n))
              ) {
                if (
                  "9999" != (t = t.slice(n - 3, n + 1)) &&
                  (i || "4999" != t)
                ) {
                  (+t && (+t.slice(1) || "5" != t.charAt(0))) ||
                    (T(r, o + 1, 1), (e = !r.times(r).eq(this)));
                  break;
                }
                if (!i && (T(a, o + 1, 0), a.times(a).eq(this))) {
                  r = a;
                  break;
                }
                (n += 4), (i = 1);
              }
            return (l = !0), T(r, o, d.rounding, e);
          }),
        (E.tangent = E.tan =
          function () {
            var e,
              t,
              n = this,
              r = n.constructor;
            return n.isFinite()
              ? n.isZero()
                ? new r(n)
                : ((e = r.precision),
                  (t = r.rounding),
                  (r.precision = e + 10),
                  (r.rounding = 1),
                  ((n = n.sin()).s = 1),
                  (n = V(n, new r(1).minus(n.times(n)).sqrt(), e + 10, 0)),
                  (r.precision = e),
                  (r.rounding = t),
                  T(2 == i || 4 == i ? n.neg() : n, e, t, !0))
              : new r(NaN);
          }),
        (E.times = E.mul =
          function (e) {
            var t,
              n,
              r,
              i,
              a,
              u,
              o,
              s,
              d,
              c = this.constructor,
              f = this.d,
              h = (e = new c(e)).d;
            if (((e.s *= this.s), !f || !f[0] || !h || !h[0]))
              return new c(
                !e.s || (f && !f[0] && !h) || (h && !h[0] && !f)
                  ? NaN
                  : !f || !h
                    ? e.s / 0
                    : 0 * e.s,
              );
            for (
              n = m(this.e / 7) + m(e.e / 7),
                (s = f.length) < (d = h.length) &&
                  ((a = f), (f = h), (h = a), (u = s), (s = d), (d = u)),
                a = [],
                r = u = s + d;
              r--;

            )
              a.push(0);
            for (r = d; --r >= 0; ) {
              for (t = 0, i = s + r; i > r; )
                (o = a[i] + h[r] * f[i - r - 1] + t),
                  (a[i--] = o % 1e7 | 0),
                  (t = (o / 1e7) | 0);
              a[i] = (a[i] + t) % 1e7 | 0;
            }
            for (; !a[--u]; ) a.pop();
            return (
              t ? ++n : a.shift(),
              (e.d = a),
              (e.e = x(a, n)),
              l ? T(e, c.precision, c.rounding) : e
            );
          }),
        (E.toBinary = function (e, t) {
          return q(this, 2, e, t);
        }),
        (E.toDecimalPlaces = E.toDP =
          function (e, t) {
            var n = this,
              r = n.constructor;
            return ((n = new r(n)), void 0 === e)
              ? n
              : (A(e, 0, 1e9),
                void 0 === t ? (t = r.rounding) : A(t, 0, 8),
                T(n, e + n.e + 1, t));
          }),
        (E.toExponential = function (e, t) {
          var n,
            r = this,
            i = r.constructor;
          return (
            void 0 === e
              ? (n = k(r, !0))
              : (A(e, 0, 1e9),
                void 0 === t ? (t = i.rounding) : A(t, 0, 8),
                (n = k((r = T(new i(r), e + 1, t)), !0, e + 1))),
            r.isNeg() && !r.isZero() ? "-" + n : n
          );
        }),
        (E.toFixed = function (e, t) {
          var n,
            r,
            i = this.constructor;
          return (
            void 0 === e
              ? (n = k(this))
              : (A(e, 0, 1e9),
                void 0 === t ? (t = i.rounding) : A(t, 0, 8),
                (n = k(
                  (r = T(new i(this), e + this.e + 1, t)),
                  !1,
                  e + r.e + 1,
                ))),
            this.isNeg() && !this.isZero() ? "-" + n : n
          );
        }),
        (E.toFraction = function (e) {
          var t,
            n,
            r,
            i,
            a,
            u,
            o,
            s,
            d,
            f,
            h,
            p,
            m = this.d,
            v = this.constructor;
          if (!m) return new v(this);
          if (
            ((d = n = new v(1)),
            (r = s = new v(0)),
            (u = (a = (t = new v(r)).e = S(m) - this.e - 1) % 7),
            (t.d[0] = _(10, u < 0 ? 7 + u : u)),
            null == e)
          )
            e = a > 0 ? t : d;
          else {
            if (!(o = new v(e)).isInt() || o.lt(d)) throw Error(c + o);
            e = o.gt(t) ? (a > 0 ? t : d) : o;
          }
          for (
            l = !1,
              o = new v(w(m)),
              f = v.precision,
              v.precision = a = 7 * m.length * 2;
            (h = V(o, t, 0, 1, 1)), 1 != (i = n.plus(h.times(r))).cmp(e);

          )
            (n = r),
              (r = i),
              (i = d),
              (d = s.plus(h.times(i))),
              (s = i),
              (i = t),
              (t = o.minus(h.times(i))),
              (o = i);
          return (
            (i = V(e.minus(n), r, 0, 1, 1)),
            (s = s.plus(i.times(d))),
            (n = n.plus(i.times(r))),
            (s.s = d.s = this.s),
            (p =
              1 >
              V(d, r, a, 1)
                .minus(this)
                .abs()
                .cmp(V(s, n, a, 1).minus(this).abs())
                ? [d, r]
                : [s, n]),
            (v.precision = f),
            (l = !0),
            p
          );
        }),
        (E.toHexadecimal = E.toHex =
          function (e, t) {
            return q(this, 16, e, t);
          }),
        (E.toNearest = function (e, t) {
          var n = this,
            r = n.constructor;
          if (((n = new r(n)), null == e)) {
            if (!n.d) return n;
            (e = new r(1)), (t = r.rounding);
          } else {
            if (
              ((e = new r(e)),
              void 0 === t ? (t = r.rounding) : A(t, 0, 8),
              !n.d)
            )
              return e.s ? n : e;
            if (!e.d) return e.s && (e.s = n.s), e;
          }
          return (
            e.d[0]
              ? ((l = !1), (n = V(n, e, 0, t, 1).times(e)), (l = !0), T(n))
              : ((e.s = n.s), (n = e)),
            n
          );
        }),
        (E.toNumber = function () {
          return +this;
        }),
        (E.toOctal = function (e, t) {
          return q(this, 8, e, t);
        }),
        (E.toPower = E.pow =
          function (e) {
            var t,
              n,
              r,
              i,
              a,
              u,
              o = this,
              s = o.constructor,
              d = +(e = new s(e));
            if (!o.d || !e.d || !o.d[0] || !e.d[0]) return new s(_(+o, d));
            if ((o = new s(o)).eq(1)) return o;
            if (((r = s.precision), (a = s.rounding), e.eq(1)))
              return T(o, r, a);
            if (
              (t = m(e.e / 7)) >= e.d.length - 1 &&
              (n = d < 0 ? -d : d) <= 0x1fffffffffffff
            )
              return (
                (i = M(s, o, n, r)), e.s < 0 ? new s(1).div(i) : T(i, r, a)
              );
            if ((u = o.s) < 0) {
              if (t < e.d.length - 1) return new s(NaN);
              if (
                ((1 & e.d[t]) == 0 && (u = 1),
                0 == o.e && 1 == o.d[0] && 1 == o.d.length)
              )
                return (o.s = u), o;
            }
            return (t =
              0 != (n = _(+o, d)) && isFinite(n)
                ? new s(n + "").e
                : m(d * (Math.log("0." + w(o.d)) / Math.LN10 + o.e + 1))) >
              s.maxE + 1 || t < s.minE - 1
              ? new s(t > 0 ? u / 0 : 0)
              : ((l = !1),
                (s.rounding = o.s = 1),
                (n = Math.min(12, (t + "").length)),
                (i = I(e.times(j(o, r + n)), r)).d &&
                  B((i = T(i, r + 5, 1)).d, r, a) &&
                  ((t = r + 10),
                  +w((i = T(I(e.times(j(o, t + n)), t), t + 5, 1)).d).slice(
                    r + 1,
                    r + 15,
                  ) +
                    1 ==
                    1e14 && (i = T(i, r + 1, 0))),
                (i.s = u),
                (l = !0),
                (s.rounding = a),
                T(i, r, a));
          }),
        (E.toPrecision = function (e, t) {
          var n,
            r = this,
            i = r.constructor;
          return (
            void 0 === e
              ? (n = k(r, r.e <= i.toExpNeg || r.e >= i.toExpPos))
              : (A(e, 1, 1e9),
                void 0 === t ? (t = i.rounding) : A(t, 0, 8),
                (n = k(
                  (r = T(new i(r), e, t)),
                  e <= r.e || r.e <= i.toExpNeg,
                  e,
                ))),
            r.isNeg() && !r.isZero() ? "-" + n : n
          );
        }),
        (E.toSignificantDigits = E.toSD =
          function (e, t) {
            var n = this.constructor;
            return (
              void 0 === e
                ? ((e = n.precision), (t = n.rounding))
                : (A(e, 1, 1e9), void 0 === t ? (t = n.rounding) : A(t, 0, 8)),
              T(new n(this), e, t)
            );
          }),
        (E.toString = function () {
          var e = this.constructor,
            t = k(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
          return this.isNeg() && !this.isZero() ? "-" + t : t;
        }),
        (E.truncated = E.trunc =
          function () {
            return T(new this.constructor(this), this.e + 1, 1);
          }),
        (E.valueOf = E.toJSON =
          function () {
            var e = this.constructor,
              t = k(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
            return this.isNeg() ? "-" + t : t;
          });
      var V = (function () {
        function e(e, t, n) {
          var r,
            i = 0,
            a = e.length;
          for (e = e.slice(); a--; )
            (r = e[a] * t + i), (e[a] = r % n | 0), (i = (r / n) | 0);
          return i && e.unshift(i), e;
        }
        function t(e, t, n, r) {
          var i, a;
          if (n != r) a = n > r ? 1 : -1;
          else
            for (i = a = 0; i < n; i++)
              if (e[i] != t[i]) {
                a = e[i] > t[i] ? 1 : -1;
                break;
              }
          return a;
        }
        function n(e, t, n, r) {
          for (var i = 0; n--; )
            (e[n] -= i), (i = +(e[n] < t[n])), (e[n] = i * r + e[n] - t[n]);
          for (; !e[0] && e.length > 1; ) e.shift();
        }
        return function (i, a, u, o, s, l) {
          var d,
            c,
            f,
            h,
            p,
            _,
            v,
            g,
            y,
            D,
            b,
            C,
            E,
            w,
            A,
            B,
            F,
            V,
            k,
            x,
            P = i.constructor,
            O = i.s == a.s ? 1 : -1,
            S = i.d,
            R = a.d;
          if (!S || !S[0] || !R || !R[0])
            return new P(
              !i.s || !a.s || (S ? R && S[0] == R[0] : !R)
                ? NaN
                : (S && 0 == S[0]) || !R
                  ? 0 * O
                  : O / 0,
            );
          for (
            l
              ? ((p = 1), (c = i.e - a.e))
              : ((l = 1e7), (p = 7), (c = m(i.e / p) - m(a.e / p))),
              k = R.length,
              F = S.length,
              D = (y = new P(O)).d = [],
              f = 0;
            R[f] == (S[f] || 0);
            f++
          );
          if (
            (R[f] > (S[f] || 0) && c--,
            null == u
              ? ((w = u = P.precision), (o = P.rounding))
              : (w = s ? u + (i.e - a.e) + 1 : u),
            w < 0)
          )
            D.push(1), (_ = !0);
          else {
            if (((w = (w / p + 2) | 0), (f = 0), 1 == k)) {
              for (h = 0, R = R[0], w++; (f < F || h) && w--; f++)
                (A = h * l + (S[f] || 0)),
                  (D[f] = (A / R) | 0),
                  (h = A % R | 0);
              _ = h || f < F;
            } else {
              for (
                (h = (l / (R[0] + 1)) | 0) > 1 &&
                  ((R = e(R, h, l)),
                  (S = e(S, h, l)),
                  (k = R.length),
                  (F = S.length)),
                  B = k,
                  C = (b = S.slice(0, k)).length;
                C < k;

              )
                b[C++] = 0;
              (x = R.slice()).unshift(0), (V = R[0]), R[1] >= l / 2 && ++V;
              do
                (h = 0),
                  (d = t(R, b, k, C)) < 0
                    ? ((E = b[0]),
                      k != C && (E = E * l + (b[1] || 0)),
                      (h = (E / V) | 0) > 1
                        ? (h >= l && (h = l - 1),
                          (g = (v = e(R, h, l)).length),
                          (C = b.length),
                          1 == (d = t(v, b, g, C)) &&
                            (h--, n(v, k < g ? x : R, g, l)))
                        : (0 == h && (d = h = 1), (v = R.slice())),
                      (g = v.length) < C && v.unshift(0),
                      n(b, v, C, l),
                      -1 == d &&
                        ((C = b.length),
                        (d = t(R, b, k, C)) < 1 &&
                          (h++, n(b, k < C ? x : R, C, l))),
                      (C = b.length))
                    : 0 === d && (h++, (b = [0])),
                  (D[f++] = h),
                  d && b[0] ? (b[C++] = S[B] || 0) : ((b = [S[B]]), (C = 1));
              while ((B++ < F || void 0 !== b[0]) && w--);
              _ = void 0 !== b[0];
            }
            D[0] || D.shift();
          }
          if (1 == p) (y.e = c), (r = _);
          else {
            for (f = 1, h = D[0]; h >= 10; h /= 10) f++;
            (y.e = f + c * p - 1), T(y, s ? u + y.e + 1 : u, o, _);
          }
          return y;
        };
      })();
      function T(e, t, n, r) {
        var i,
          a,
          u,
          o,
          s,
          d,
          c,
          f,
          h,
          p = e.constructor;
        e: if (null != t) {
          if (!(f = e.d)) return e;
          for (i = 1, o = f[0]; o >= 10; o /= 10) i++;
          if ((a = t - i) < 0)
            (a += 7),
              (u = t),
              (s = ((c = f[(h = 0)]) / _(10, i - u - 1)) % 10 | 0);
          else if ((h = Math.ceil((a + 1) / 7)) >= (o = f.length))
            if (r) {
              for (; o++ <= h; ) f.push(0);
              (c = s = 0), (i = 1), (a %= 7), (u = a - 7 + 1);
            } else break e;
          else {
            for (i = 1, c = o = f[h]; o >= 10; o /= 10) i++;
            (a %= 7),
              (s = (u = a - 7 + i) < 0 ? 0 : (c / _(10, i - u - 1)) % 10 | 0);
          }
          if (
            ((r =
              r ||
              t < 0 ||
              void 0 !== f[h + 1] ||
              (u < 0 ? c : c % _(10, i - u - 1))),
            (d =
              n < 4
                ? (s || r) && (0 == n || n == (e.s < 0 ? 3 : 2))
                : s > 5 ||
                  (5 == s &&
                    (4 == n ||
                      r ||
                      (6 == n &&
                        (a > 0 ? (u > 0 ? c / _(10, i - u) : 0) : f[h - 1]) %
                          10 &
                          1) ||
                      n == (e.s < 0 ? 8 : 7)))),
            t < 1 || !f[0])
          )
            return (
              (f.length = 0),
              d
                ? ((t -= e.e + 1),
                  (f[0] = _(10, (7 - (t % 7)) % 7)),
                  (e.e = -t || 0))
                : (f[0] = e.e = 0),
              e
            );
          if (
            (0 == a
              ? ((f.length = h), (o = 1), h--)
              : ((f.length = h + 1),
                (o = _(10, 7 - a)),
                (f[h] = u > 0 ? ((c / _(10, i - u)) % _(10, u) | 0) * o : 0)),
            d)
          )
            for (;;)
              if (0 == h) {
                for (a = 1, u = f[0]; u >= 10; u /= 10) a++;
                for (u = f[0] += o, o = 1; u >= 10; u /= 10) o++;
                a != o && (e.e++, 1e7 == f[0] && (f[0] = 1));
                break;
              } else {
                if (((f[h] += o), 1e7 != f[h])) break;
                (f[h--] = 0), (o = 1);
              }
          for (a = f.length; 0 === f[--a]; ) f.pop();
        }
        return (
          l &&
            (e.e > p.maxE
              ? ((e.d = null), (e.e = NaN))
              : e.e < p.minE && ((e.e = 0), (e.d = [0]))),
          e
        );
      }
      function k(e, t, n) {
        if (!e.isFinite()) return G(e);
        var r,
          i = e.e,
          a = w(e.d),
          u = a.length;
        return (
          t
            ? (n && (r = n - u) > 0
                ? (a = a.charAt(0) + "." + a.slice(1) + R(r))
                : u > 1 && (a = a.charAt(0) + "." + a.slice(1)),
              (a = a + (e.e < 0 ? "e" : "e+") + e.e))
            : i < 0
              ? ((a = "0." + R(-i - 1) + a),
                n && (r = n - u) > 0 && (a += R(r)))
              : i >= u
                ? ((a += R(i + 1 - u)),
                  n && (r = n - i - 1) > 0 && (a = a + "." + R(r)))
                : ((r = i + 1) < u && (a = a.slice(0, r) + "." + a.slice(r)),
                  n &&
                    (r = n - u) > 0 &&
                    (i + 1 === u && (a += "."), (a += R(r)))),
          a
        );
      }
      function x(e, t) {
        var n = e[0];
        for (t *= 7; n >= 10; n /= 10) t++;
        return t;
      }
      function P(e, t, n) {
        if (t > b) throw ((l = !0), n && (e.precision = n), Error(f));
        return T(new e(u), t, 1, !0);
      }
      function O(e, t, n) {
        if (t > C) throw Error(f);
        return T(new e(o), t, n, !0);
      }
      function S(e) {
        var t = e.length - 1,
          n = 7 * t + 1;
        if ((t = e[t])) {
          for (; t % 10 == 0; t /= 10) n--;
          for (t = e[0]; t >= 10; t /= 10) n++;
        }
        return n;
      }
      function R(e) {
        for (var t = ""; e--; ) t += "0";
        return t;
      }
      function M(e, t, n, r) {
        var i,
          a = new e(1),
          u = Math.ceil(r / 7 + 4);
        for (l = !1; ; ) {
          if (
            (n % 2 && z((a = a.times(t)).d, u) && (i = !0),
            0 === (n = m(n / 2)))
          ) {
            (n = a.d.length - 1), i && 0 === a.d[n] && ++a.d[n];
            break;
          }
          z((t = t.times(t)).d, u);
        }
        return (l = !0), a;
      }
      function N(e) {
        return 1 & e.d[e.d.length - 1];
      }
      function L(e, t, n) {
        for (var r, i, a = new e(t[0]), u = 0; ++u < t.length; ) {
          if (!(i = new e(t[u])).s) {
            a = i;
            break;
          }
          ((r = a.cmp(i)) === n || (0 === r && a.s === n)) && (a = i);
        }
        return a;
      }
      function I(e, t) {
        var n,
          r,
          i,
          a,
          u,
          o,
          s,
          d = 0,
          c = 0,
          f = 0,
          h = e.constructor,
          p = h.rounding,
          m = h.precision;
        if (!e.d || !e.d[0] || e.e > 17)
          return new h(
            e.d
              ? !e.d[0]
                ? 1
                : e.s < 0
                  ? 0
                  : 1 / 0
              : e.s
                ? e.s < 0
                  ? 0
                  : e
                : 0 / 0,
          );
        for (
          null == t ? ((l = !1), (s = m)) : (s = t), o = new h(0.03125);
          e.e > -2;

        )
          (e = e.times(o)), (f += 5);
        for (
          s += r = ((Math.log(_(2, f)) / Math.LN10) * 2 + 5) | 0,
            n = a = u = new h(1),
            h.precision = s;
          ;

        ) {
          if (
            ((a = T(a.times(e), s, 1)),
            (n = n.times(++c)),
            w((o = u.plus(V(a, n, s, 1))).d).slice(0, s) === w(u.d).slice(0, s))
          ) {
            for (i = f; i--; ) u = T(u.times(u), s, 1);
            if (null != t) return (h.precision = m), u;
            if (!(d < 3 && B(u.d, s - r, p, d)))
              return T(u, (h.precision = m), p, (l = !0));
            (h.precision = s += 10), (n = a = o = new h(1)), (c = 0), d++;
          }
          u = o;
        }
      }
      function j(e, t) {
        var n,
          r,
          i,
          a,
          u,
          o,
          s,
          d,
          c,
          f,
          h,
          p = 1,
          m = e,
          _ = m.d,
          v = m.constructor,
          g = v.rounding,
          y = v.precision;
        if (m.s < 0 || !_ || !_[0] || (!m.e && 1 == _[0] && 1 == _.length))
          return new v(_ && !_[0] ? -1 / 0 : 1 != m.s ? NaN : _ ? 0 : m);
        if (
          (null == t ? ((l = !1), (c = y)) : (c = t),
          (v.precision = c += 10),
          (r = (n = w(_)).charAt(0)),
          !(15e14 > Math.abs((a = m.e))))
        )
          return (
            (d = P(v, c + 2, y).times(a + "")),
            (m = j(new v(r + "." + n.slice(1)), c - 10).plus(d)),
            (v.precision = y),
            null == t ? T(m, y, g, (l = !0)) : m
          );
        for (; (r < 7 && 1 != r) || (1 == r && n.charAt(1) > 3); )
          (r = (n = w((m = m.times(e)).d)).charAt(0)), p++;
        for (
          a = m.e,
            r > 1
              ? ((m = new v("0." + n)), a++)
              : (m = new v(r + "." + n.slice(1))),
            f = m,
            s = u = m = V(m.minus(1), m.plus(1), c, 1),
            h = T(m.times(m), c, 1),
            i = 3;
          ;

        ) {
          if (
            ((u = T(u.times(h), c, 1)),
            w((d = s.plus(V(u, new v(i), c, 1))).d).slice(0, c) ===
              w(s.d).slice(0, c))
          ) {
            if (
              ((s = s.times(2)),
              0 !== a && (s = s.plus(P(v, c + 2, y).times(a + ""))),
              (s = V(s, new v(p), c, 1)),
              null != t)
            )
              return (v.precision = y), s;
            if (!B(s.d, c - 10, g, o))
              return T(s, (v.precision = y), g, (l = !0));
            (v.precision = c += 10),
              (d = u = m = V(f.minus(1), f.plus(1), c, 1)),
              (h = T(m.times(m), c, 1)),
              (i = o = 1);
          }
          (s = d), (i += 2);
        }
      }
      function G(e) {
        return String((e.s * e.s) / 0);
      }
      function W(e, t) {
        var n, r, i;
        for (
          (n = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
            (r = t.search(/e/i)) > 0
              ? (n < 0 && (n = r),
                (n += +t.slice(r + 1)),
                (t = t.substring(0, r)))
              : n < 0 && (n = t.length),
            r = 0;
          48 === t.charCodeAt(r);
          r++
        );
        for (i = t.length; 48 === t.charCodeAt(i - 1); --i);
        if ((t = t.slice(r, i))) {
          if (
            ((i -= r),
            (e.e = n = n - r - 1),
            (e.d = []),
            (r = (n + 1) % 7),
            n < 0 && (r += 7),
            r < i)
          ) {
            for (r && e.d.push(+t.slice(0, r)), i -= 7; r < i; )
              e.d.push(+t.slice(r, (r += 7)));
            r = 7 - (t = t.slice(r)).length;
          } else r -= i;
          for (; r--; ) t += "0";
          e.d.push(+t),
            l &&
              (e.e > e.constructor.maxE
                ? ((e.d = null), (e.e = NaN))
                : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
        } else (e.e = 0), (e.d = [0]);
        return e;
      }
      function K(e, t, n, r, i) {
        var a,
          u,
          o,
          s,
          d = e.precision,
          c = Math.ceil(d / 7);
        for (l = !1, s = n.times(n), o = new e(r); ; ) {
          if (
            ((u = V(o.times(s), new e(t++ * t++), d, 1)),
            (o = i ? r.plus(u) : r.minus(u)),
            (r = V(u.times(s), new e(t++ * t++), d, 1)),
            void 0 !== (u = o.plus(r)).d[c])
          ) {
            for (a = c; u.d[a] === o.d[a] && a--; );
            if (-1 == a) break;
          }
          (a = o), (o = r), (r = u), (u = a);
        }
        return (l = !0), (u.d.length = c + 1), u;
      }
      function U(e, t) {
        for (var n = e; --t; ) n *= e;
        return n;
      }
      function H(e, t) {
        var n,
          r = t.s < 0,
          a = O(e, e.precision, 1),
          u = a.times(0.5);
        if ((t = t.abs()).lte(u)) return (i = r ? 4 : 1), t;
        if ((n = t.divToInt(a)).isZero()) i = r ? 3 : 2;
        else {
          if ((t = t.minus(n.times(a))).lte(u))
            return (i = N(n) ? (r ? 2 : 3) : r ? 4 : 1), t;
          i = N(n) ? (r ? 1 : 4) : r ? 3 : 2;
        }
        return t.minus(a).abs();
      }
      function q(e, t, n, i) {
        var u,
          o,
          s,
          l,
          d,
          c,
          f,
          h,
          p,
          m = e.constructor,
          _ = void 0 !== n;
        if (
          (_
            ? (A(n, 1, 1e9), void 0 === i ? (i = m.rounding) : A(i, 0, 8))
            : ((n = m.precision), (i = m.rounding)),
          e.isFinite())
        ) {
          for (
            s = (f = k(e)).indexOf("."),
              _
                ? ((u = 2),
                  16 == t ? (n = 4 * n - 3) : 8 == t && (n = 3 * n - 2))
                : (u = t),
              s >= 0 &&
                ((f = f.replace(".", "")),
                ((p = new m(1)).e = f.length - s),
                (p.d = F(k(p), 10, u)),
                (p.e = p.d.length)),
              o = d = (h = F(f, 10, u)).length;
            0 == h[--d];

          )
            h.pop();
          if (h[0]) {
            if (
              (s < 0
                ? o--
                : (((e = new m(e)).d = h),
                  (e.e = o),
                  (h = (e = V(e, p, n, i, 0, u)).d),
                  (o = e.e),
                  (c = r)),
              (s = h[n]),
              (l = u / 2),
              (c = c || void 0 !== h[n + 1]),
              (c =
                i < 4
                  ? (void 0 !== s || c) && (0 === i || i === (e.s < 0 ? 3 : 2))
                  : s > l ||
                    (s === l &&
                      (4 === i ||
                        c ||
                        (6 === i && 1 & h[n - 1]) ||
                        i === (e.s < 0 ? 8 : 7)))),
              (h.length = n),
              c)
            )
              for (; ++h[--n] > u - 1; ) (h[n] = 0), n || (++o, h.unshift(1));
            for (d = h.length; !h[d - 1]; --d);
            for (s = 0, f = ""; s < d; s++) f += a.charAt(h[s]);
            if (_) {
              if (d > 1)
                if (16 == t || 8 == t) {
                  for (s = 16 == t ? 4 : 3, --d; d % s; d++) f += "0";
                  for (d = (h = F(f, u, t)).length; !h[d - 1]; --d);
                  for (s = 1, f = "1."; s < d; s++) f += a.charAt(h[s]);
                } else f = f.charAt(0) + "." + f.slice(1);
              f = f + (o < 0 ? "p" : "p+") + o;
            } else if (o < 0) {
              for (; ++o; ) f = "0" + f;
              f = "0." + f;
            } else if (++o > d) for (o -= d; o--; ) f += "0";
            else o < d && (f = f.slice(0, o) + "." + f.slice(o));
          } else f = _ ? "0p+0" : "0";
          f = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + f;
        } else f = G(e);
        return e.s < 0 ? "-" + f : f;
      }
      function z(e, t) {
        if (e.length > t) return (e.length = t), !0;
      }
      function X(e) {
        return new this(e).abs();
      }
      function Q(e) {
        return new this(e).acos();
      }
      function Z(e) {
        return new this(e).acosh();
      }
      function Y(e, t) {
        return new this(e).plus(t);
      }
      function J(e) {
        return new this(e).asin();
      }
      function $(e) {
        return new this(e).asinh();
      }
      function ee(e) {
        return new this(e).atan();
      }
      function et(e) {
        return new this(e).atanh();
      }
      function en(e, t) {
        (e = new this(e)), (t = new this(t));
        var n,
          r = this.precision,
          i = this.rounding,
          a = r + 4;
        return (
          e.s && t.s
            ? e.d || t.d
              ? !t.d || e.isZero()
                ? ((n = t.s < 0 ? O(this, r, i) : new this(0)).s = e.s)
                : !e.d || t.isZero()
                  ? ((n = O(this, a, 1).times(0.5)).s = e.s)
                  : t.s < 0
                    ? ((this.precision = a),
                      (this.rounding = 1),
                      (n = this.atan(V(e, t, a, 1))),
                      (t = O(this, a, 1)),
                      (this.precision = r),
                      (this.rounding = i),
                      (n = e.s < 0 ? n.minus(t) : n.plus(t)))
                    : (n = this.atan(V(e, t, a, 1)))
              : ((n = O(this, a, 1).times(t.s > 0 ? 0.25 : 0.75)).s = e.s)
            : (n = new this(NaN)),
          n
        );
      }
      function er(e) {
        return new this(e).cbrt();
      }
      function ei(e) {
        return T((e = new this(e)), e.e + 1, 2);
      }
      function ea(e, t, n) {
        return new this(e).clamp(t, n);
      }
      function eu(e) {
        if (!e || "object" != typeof e) throw Error(d + "Object expected");
        var t,
          n,
          r,
          i = !0 === e.defaults,
          a = [
            "precision",
            1,
            1e9,
            "rounding",
            0,
            8,
            "toExpNeg",
            -9e15,
            0,
            "toExpPos",
            0,
            9e15,
            "maxE",
            0,
            9e15,
            "minE",
            -9e15,
            0,
            "modulo",
            0,
            9,
          ];
        for (t = 0; t < a.length; t += 3)
          if (((n = a[t]), i && (this[n] = s[n]), void 0 !== (r = e[n])))
            if (m(r) === r && r >= a[t + 1] && r <= a[t + 2]) this[n] = r;
            else throw Error(c + n + ": " + r);
        if (((n = "crypto"), i && (this[n] = s[n]), void 0 !== (r = e[n])))
          if (!0 === r || !1 === r || 0 === r || 1 === r)
            if (r)
              if (
                "u" > typeof crypto &&
                crypto &&
                (crypto.getRandomValues || crypto.randomBytes)
              )
                this[n] = !0;
              else throw Error(h);
            else this[n] = !1;
          else throw Error(c + n + ": " + r);
        return this;
      }
      function eo(e) {
        return new this(e).cos();
      }
      function es(e) {
        return new this(e).cosh();
      }
      function el(e, t) {
        return new this(e).div(t);
      }
      function ed(e) {
        return new this(e).exp();
      }
      function ec(e) {
        return T((e = new this(e)), e.e + 1, 3);
      }
      function ef() {
        var e,
          t,
          n = new this(0);
        for (e = 0, l = !1; e < arguments.length; )
          if (((t = new this(arguments[e++])), t.d))
            n.d && (n = n.plus(t.times(t)));
          else {
            if (t.s) return (l = !0), new this(1 / 0);
            n = t;
          }
        return (l = !0), n.sqrt();
      }
      function eh(e) {
        return e instanceof eS || (e && e.toStringTag === p) || !1;
      }
      function ep(e) {
        return new this(e).ln();
      }
      function em(e, t) {
        return new this(e).log(t);
      }
      function e_(e) {
        return new this(e).log(2);
      }
      function ev(e) {
        return new this(e).log(10);
      }
      function eg() {
        return L(this, arguments, -1);
      }
      function ey() {
        return L(this, arguments, 1);
      }
      function eD(e, t) {
        return new this(e).mod(t);
      }
      function eb(e, t) {
        return new this(e).mul(t);
      }
      function eC(e, t) {
        return new this(e).pow(t);
      }
      function eE(e) {
        var t,
          n,
          r,
          i,
          a = 0,
          u = new this(1),
          o = [];
        if (
          (void 0 === e ? (e = this.precision) : A(e, 1, 1e9),
          (r = Math.ceil(e / 7)),
          this.crypto)
        )
          if (crypto.getRandomValues)
            for (t = crypto.getRandomValues(new Uint32Array(r)); a < r; )
              (i = t[a]) >= 429e7
                ? (t[a] = crypto.getRandomValues(new Uint32Array(1))[0])
                : (o[a++] = i % 1e7);
          else if (crypto.randomBytes) {
            for (t = crypto.randomBytes((r *= 4)); a < r; )
              (i =
                t[a] +
                (t[a + 1] << 8) +
                (t[a + 2] << 16) +
                ((127 & t[a + 3]) << 24)) >= 214e7
                ? crypto.randomBytes(4).copy(t, a)
                : (o.push(i % 1e7), (a += 4));
            a = r / 4;
          } else throw Error(h);
        else for (; a < r; ) o[a++] = (1e7 * Math.random()) | 0;
        for (
          r = o[--a],
            e %= 7,
            r && e && ((i = _(10, 7 - e)), (o[a] = ((r / i) | 0) * i));
          0 === o[a];
          a--
        )
          o.pop();
        if (a < 0) (n = 0), (o = [0]);
        else {
          for (n = -1; 0 === o[0]; n -= 7) o.shift();
          for (r = 1, i = o[0]; i >= 10; i /= 10) r++;
          r < 7 && (n -= 7 - r);
        }
        return (u.e = n), (u.d = o), u;
      }
      function ew(e) {
        return T((e = new this(e)), e.e + 1, this.rounding);
      }
      function eA(e) {
        return (e = new this(e)).d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
      }
      function eB(e) {
        return new this(e).sin();
      }
      function eF(e) {
        return new this(e).sinh();
      }
      function eV(e) {
        return new this(e).sqrt();
      }
      function eT(e, t) {
        return new this(e).sub(t);
      }
      function ek() {
        var e = 0,
          t = arguments,
          n = new this(t[0]);
        for (l = !1; n.s && ++e < t.length; ) n = n.plus(t[e]);
        return (l = !0), T(n, this.precision, this.rounding);
      }
      function ex(e) {
        return new this(e).tan();
      }
      function eP(e) {
        return new this(e).tanh();
      }
      function eO(e) {
        return T((e = new this(e)), e.e + 1, 1);
      }
      (E[Symbol.for("nodejs.util.inspect.custom")] = E.toString),
        (E[Symbol.toStringTag] = "Decimal");
      var eS = (E.constructor = (function e(t) {
        var n, r, i;
        function a(e) {
          var t, n, r;
          if (!(this instanceof a)) return new a(e);
          if (((this.constructor = a), eh(e))) {
            (this.s = e.s),
              l
                ? !e.d || e.e > a.maxE
                  ? ((this.e = NaN), (this.d = null))
                  : e.e < a.minE
                    ? ((this.e = 0), (this.d = [0]))
                    : ((this.e = e.e), (this.d = e.d.slice()))
                : ((this.e = e.e), (this.d = e.d ? e.d.slice() : e.d));
            return;
          }
          if ("number" == (r = typeof e)) {
            if (0 === e) {
              (this.s = 1 / e < 0 ? -1 : 1), (this.e = 0), (this.d = [0]);
              return;
            }
            if (
              (e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1),
              e === ~~e && e < 1e7)
            ) {
              for (t = 0, n = e; n >= 10; n /= 10) t++;
              l
                ? t > a.maxE
                  ? ((this.e = NaN), (this.d = null))
                  : t < a.minE
                    ? ((this.e = 0), (this.d = [0]))
                    : ((this.e = t), (this.d = [e]))
                : ((this.e = t), (this.d = [e]));
              return;
            }
            if (0 * e != 0) {
              e || (this.s = NaN), (this.e = NaN), (this.d = null);
              return;
            }
            return W(this, e.toString());
          }
          if ("string" === r)
            return (
              45 === (n = e.charCodeAt(0))
                ? ((e = e.slice(1)), (this.s = -1))
                : (43 === n && (e = e.slice(1)), (this.s = 1)),
              D.test(e)
                ? W(this, e)
                : (function (e, t) {
                    var n, r, i, a, u, o, s, d, f;
                    if (t.indexOf("_") > -1) {
                      if (((t = t.replace(/(\d)_(?=\d)/g, "$1")), D.test(t)))
                        return W(e, t);
                    } else if ("Infinity" === t || "NaN" === t)
                      return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e;
                    if (g.test(t)) (n = 16), (t = t.toLowerCase());
                    else if (v.test(t)) n = 2;
                    else if (y.test(t)) n = 8;
                    else throw Error(c + t);
                    for (
                      (a = t.search(/p/i)) > 0
                        ? ((s = +t.slice(a + 1)), (t = t.substring(2, a)))
                        : (t = t.slice(2)),
                        u = (a = t.indexOf(".")) >= 0,
                        r = e.constructor,
                        u &&
                          ((a = (o = (t = t.replace(".", "")).length) - a),
                          (i = M(r, new r(n), a, 2 * a))),
                        a = f = (d = F(t, n, 1e7)).length - 1;
                      0 === d[a];
                      --a
                    )
                      d.pop();
                    return a < 0
                      ? new r(0 * e.s)
                      : ((e.e = x(d, f)),
                        (e.d = d),
                        (l = !1),
                        u && (e = V(e, i, 4 * o)),
                        s &&
                          (e = e.times(
                            54 > Math.abs(s) ? _(2, s) : eS.pow(2, s),
                          )),
                        (l = !0),
                        e);
                  })(this, e)
            );
          if ("bigint" === r)
            return (
              e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1),
              W(this, e.toString())
            );
          throw Error(c + e);
        }
        if (
          ((a.prototype = E),
          (a.ROUND_UP = 0),
          (a.ROUND_DOWN = 1),
          (a.ROUND_CEIL = 2),
          (a.ROUND_FLOOR = 3),
          (a.ROUND_HALF_UP = 4),
          (a.ROUND_HALF_DOWN = 5),
          (a.ROUND_HALF_EVEN = 6),
          (a.ROUND_HALF_CEIL = 7),
          (a.ROUND_HALF_FLOOR = 8),
          (a.EUCLID = 9),
          (a.config = a.set = eu),
          (a.clone = e),
          (a.isDecimal = eh),
          (a.abs = X),
          (a.acos = Q),
          (a.acosh = Z),
          (a.add = Y),
          (a.asin = J),
          (a.asinh = $),
          (a.atan = ee),
          (a.atanh = et),
          (a.atan2 = en),
          (a.cbrt = er),
          (a.ceil = ei),
          (a.clamp = ea),
          (a.cos = eo),
          (a.cosh = es),
          (a.div = el),
          (a.exp = ed),
          (a.floor = ec),
          (a.hypot = ef),
          (a.ln = ep),
          (a.log = em),
          (a.log10 = ev),
          (a.log2 = e_),
          (a.max = eg),
          (a.min = ey),
          (a.mod = eD),
          (a.mul = eb),
          (a.pow = eC),
          (a.random = eE),
          (a.round = ew),
          (a.sign = eA),
          (a.sin = eB),
          (a.sinh = eF),
          (a.sqrt = eV),
          (a.sub = eT),
          (a.sum = ek),
          (a.tan = ex),
          (a.tanh = eP),
          (a.trunc = eO),
          void 0 === t && (t = {}),
          t && !0 !== t.defaults)
        )
          for (
            n = 0,
              i = [
                "precision",
                "rounding",
                "toExpNeg",
                "toExpPos",
                "maxE",
                "minE",
                "modulo",
                "crypto",
              ];
            n < i.length;

          )
            t.hasOwnProperty((r = i[n++])) || (t[r] = this[r]);
        return a.config(t), a;
      })(s));
      (u = new eS(u)), (o = new eS(o)), new eS(10);
      let eR = new eS(0);
      new eS(-0);
      var eM = n(243399);
      function eN(e) {
        if ("symbol" == typeof e)
          throw TypeError("Cannot convert a Symbol value to a string");
        return String(e);
      }
      function eL(e) {
        if (null == e)
          throw TypeError("undefined/null cannot be converted to object");
        return Object(e);
      }
      function eI(e) {
        return "function" == typeof e;
      }
      function ej(e, t, n) {
        if (!eI(e)) return !1;
        if (n?.boundTargetFunction) return t instanceof n?.boundTargetFunction;
        if ("object" != typeof t) return !1;
        let r = e.prototype;
        if ("object" != typeof r)
          throw TypeError(
            "OrdinaryHasInstance called on an object with an invalid prototype property.",
          );
        return Object.prototype.isPrototypeOf.call(r, t);
      }
    },
    842830(e, t, n) {
      "use strict";
      function r(e) {
        return Intl.getCanonicalLocales(e);
      }
      n.d(t, { N: () => r });
    },
    97626(e, t, n) {
      "use strict";
      function r(e, t, n, r, i) {
        var a = e[t];
        if (void 0 === a) return i;
        let u = Number(a);
        if (isNaN(u) || u < n || u > r)
          throw RangeError(`${u} is outside of range [${n}, ${r}]`);
        return Math.floor(u);
      }
      n.d(t, { z: () => r });
    },
    518375(e, t, n) {
      "use strict";
      n.d(t, { W: () => i });
      var r = n(469322);
      function i(e, t, n, i, a) {
        if ("object" != typeof e) throw TypeError("Options must be an object");
        let u = e[t];
        if (void 0 !== u) {
          if ("boolean" !== n && "string" !== n)
            throw TypeError("invalid type");
          if (
            ("boolean" === n && (u = !!u),
            "string" === n && (u = (0, r.bf)(u)),
            void 0 !== i && !i.filter((e) => e == u).length)
          )
            throw RangeError(`${u} is not within ${i.join(", ")}`);
          return u;
        }
        return a;
      }
    },
    29685(e, t, n) {
      "use strict";
      n.d(t, { U: () => o });
      var r = n(183580),
        i = n(26232),
        a = n(469322),
        u = n(518375);
      function o(e, t, n) {
        return (
          void 0 !== n &&
            ((n = (0, a.BT)(n)),
            (0, u.W)(
              n,
              "localeMatcher",
              "string",
              ["lookup", "best fit"],
              "best fit",
            )),
          (function (e, t) {
            let n = [];
            for (let a of t) {
              let t = a.replace(i.KB, ""),
                u = (0, r.q)(e, t);
              u && n.push(u);
            }
            return n;
          })(Array.from(e), t)
        );
      }
    },
    243399(e, t, n) {
      "use strict";
      n.d(t, { A4: () => u, Nt: () => a, V1: () => i });
      var r = n(315847);
      function i(e, t, n = Error) {
        if (!e) throw new n(t);
      }
      let a = (0, r.B)((...e) => new Intl.NumberFormat(...e), {
        strategy: r.W.variadic,
      });
      (0, r.B)((...e) => new Intl.PluralRules(...e), {
        strategy: r.W.variadic,
      }),
        (0, r.B)((...e) => new Intl.Locale(...e), { strategy: r.W.variadic });
      let u = (0, r.B)((...e) => new Intl.ListFormat(...e), {
        strategy: r.W.variadic,
      });
    },
    315847(e, t, n) {
      "use strict";
      function r(e, t) {
        let n = t && t.cache ? t.cache : s,
          r = t && t.serializer ? t.serializer : u;
        return (
          t && t.strategy
            ? t.strategy
            : function (e, t) {
                var n, r;
                let u = 1 === e.length ? i : a;
                return (
                  (n = t.cache.create()),
                  (r = t.serializer),
                  u.bind(this, e, n, r)
                );
              }
        )(e, { cache: n, serializer: r });
      }
      function i(e, t, n, r) {
        let i =
            null == r || "number" == typeof r || "boolean" == typeof r
              ? r
              : n(r),
          a = t.get(i);
        return void 0 === a && ((a = e.call(this, r)), t.set(i, a)), a;
      }
      function a(e, t, n) {
        let r = Array.prototype.slice.call(arguments, 3),
          i = n(r),
          a = t.get(i);
        return void 0 === a && ((a = e.apply(this, r)), t.set(i, a)), a;
      }
      n.d(t, { B: () => r, W: () => l });
      let u = function () {
        return JSON.stringify(arguments);
      };
      class o {
        cache;
        constructor() {
          this.cache = Object.create(null);
        }
        get(e) {
          return this.cache[e];
        }
        set(e, t) {
          this.cache[e] = t;
        }
      }
      let s = {
          create: function () {
            return new o();
          },
        },
        l = {
          variadic: function (e, t) {
            var n, r;
            return (
              (n = t.cache.create()), (r = t.serializer), a.bind(this, e, n, r)
            );
          },
          monadic: function (e, t) {
            var n, r;
            return (
              (n = t.cache.create()), (r = t.serializer), i.bind(this, e, n, r)
            );
          },
        };
    },
    439489(e, t, n) {
      "use strict";
      n.d(t, { $: () => i });
      var r = n(518375);
      function i(e, t, n, i, a, u) {
        let o = (0, r.W)(t, e, "string", i, void 0),
          s = "always";
        void 0 === o &&
          ("digital" === n
            ? ("hours" !== e &&
                "minutes" !== e &&
                "seconds" !== e &&
                (s = "auto"),
              (o = a))
            : ((s = "auto"),
              (o = "numeric" === u || "2-digit" === u ? "numeric" : n)));
        let l = `${e}Display`,
          d = (0, r.W)(t, l, "string", ["always", "auto"], s);
        if ("numeric" === u || "2-digit" === u) {
          if ("numeric" !== o && "2-digit" !== o)
            throw RangeError("Can't mix numeric and non-numeric styles");
          if (
            (("minutes" === e || "seconds" === e) && (o = "2-digit"),
            "numeric" === o &&
              "always" === d &&
              ("milliseconds" === e ||
                "microseconds" === e ||
                "nanoseconds" === e))
          )
            throw RangeError(
              "Can't display milliseconds, microseconds, or nanoseconds in numeric format",
            );
        }
        return { style: o, display: d };
      }
    },
    369364(e, t, n) {
      "use strict";
      n.d(t, { m: () => o });
      var r = n(243399),
        i = n(206311),
        a = n(411211),
        u = n(501974);
      function o(e, t) {
        let n = [],
          o = !1,
          s = !1,
          l = (0, u.n)(e),
          d = l.dataLocale,
          c = a.Y.localeData[d];
        if (!c) throw TypeError("Invalid locale");
        let f = l.numberingSystem,
          h = c.digitalFormat[f];
        for (let e = 0; e < i.u.length && !o; e++) {
          let a = i.u[e],
            u = t[a.valueField],
            d = l[a.styleSlot],
            c = l[a.displaySlot],
            { unit: f, numberFormatUnit: p } = a,
            m = Object.create(null);
          ("seconds" === f || "milliseconds" === f || "microseconds" === f) &&
            "numeric" ===
              ("seconds" === f
                ? l.milliseconds
                : "milliseconds" === f
                  ? l.microseconds
                  : l.nanoseconds) &&
            ("seconds" === f
              ? (u +=
                  t.milliseconds / 1e3 +
                  t.microseconds / 1e6 +
                  t.nanoseconds / 1e9)
              : "milliseconds" === f
                ? (u += t.microseconds / 1e3 + t.nanoseconds / 1e6)
                : (u += t.nanoseconds / 1e3),
            void 0 === l.fractionalDigits
              ? ((m.maximumFractionDigits = 9), (m.minimumFractionDigits = 0))
              : ((m.maximumFractionDigits = l.fractionalDigits),
                (m.minimumFractionDigits = l.fractionalDigits)),
            (m.roundingMode = "trunc"),
            (o = !0));
          if (0 !== u || "auto" !== c) {
            let e;
            (m.numberingSystem = l.numberingSystem),
              "2-digit" === d && (m.minimumIntegerDigits = 2),
              "2-digit" !== d &&
                "numeric" !== d &&
                ((m.style = "unit"), (m.unit = p), (m.unitDisplay = d));
            let t = (0, r.Nt)(l.locale, m);
            s
              ? (e = n[n.length - 1]).push({ type: "literal", value: h })
              : (e = []),
              t.formatToParts(u).forEach(({ type: t, value: n }) => {
                e.push({ type: t, value: n, unit: p });
              }),
              s ||
                (("2-digit" === d || "numeric" === d) && (s = !0), n.push(e));
          } else s = !1;
        }
        let p = Object.create(null);
        p.type = "unit";
        let m = l.style;
        "digital" === m && (m = "short"), (p.style = m);
        let _ = (0, r.A4)(l.locale, p),
          v = [];
        for (let e of n) {
          let t = "";
          for (let { value: n } of e) t += n;
          v.push(t);
        }
        let g = _.formatToParts(v),
          y = 0,
          D = n.length,
          b = [];
        for (let { type: e, value: t } of g)
          if ("element" === e) {
            for (let e of ((0, r.V1)(y < D, "Index out of bounds"), n[y]))
              b.push(e);
            y++;
          } else
            (0, r.V1)("literal" === e, "Type must be literal"),
              b.push({ type: "literal", value: t });
        return b;
      }
      n(632459);
    },
    727504(e, t, n) {
      "use strict";
      n.d(t, { H: () => o }), n(632459);
      var r = n(243399),
        i = n(206311),
        a = n(469322);
      function u(e) {
        let t = (0, a.xC)(e);
        return (0, r.V1)(t.isInteger(), `${e} is not an integer`), t.toNumber();
      }
      function o(e) {
        if ("object" != typeof e) {
          if ("string" == typeof e) throw RangeError("Invalid duration format");
          throw TypeError("Invalid duration");
        }
        let t = {
          years: 0,
          months: 0,
          weeks: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          milliseconds: 0,
          microseconds: 0,
          nanoseconds: 0,
        };
        if (
          (void 0 !== e.days && (t.days = u(e.days)),
          void 0 !== e.hours && (t.hours = u(e.hours)),
          void 0 !== e.microseconds && (t.microseconds = u(e.microseconds)),
          void 0 !== e.milliseconds && (t.milliseconds = u(e.milliseconds)),
          void 0 !== e.minutes && (t.minutes = u(e.minutes)),
          void 0 !== e.months && (t.months = u(e.months)),
          void 0 !== e.nanoseconds && (t.nanoseconds = u(e.nanoseconds)),
          void 0 !== e.seconds && (t.seconds = u(e.seconds)),
          void 0 !== e.weeks && (t.weeks = u(e.weeks)),
          void 0 !== e.years && (t.years = u(e.years)),
          void 0 === e.years &&
            void 0 === e.months &&
            void 0 === e.weeks &&
            void 0 === e.days &&
            void 0 === e.hours &&
            void 0 === e.minutes &&
            void 0 === e.seconds &&
            void 0 === e.milliseconds &&
            void 0 === e.microseconds &&
            void 0 === e.nanoseconds)
        )
          throw TypeError("Invalid duration format");
        if (
          !(function (e) {
            let t = (function (e) {
              for (let t of i.B) {
                if (e[t] < 0) return -1;
                if (e[t] > 0) return 1;
              }
              return 0;
            })(e);
            for (let n of i.B) {
              let i = e[n];
              if (
                ((0, r.V1)(isFinite(Number(i)), `${n} is not finite`),
                (i < 0 && t > 0) || (i > 0 && t < 0))
              )
                return !1;
            }
            return !0;
          })(t)
        )
          throw RangeError("Invalid duration format");
        return t;
      }
    },
    206311(e, t, n) {
      "use strict";
      n.d(t, { B: () => r, u: () => i }), n(632459);
      let r = [
          "years",
          "months",
          "weeks",
          "days",
          "hours",
          "minutes",
          "seconds",
          "milliseconds",
          "microseconds",
          "nanoseconds",
        ],
        i = [
          {
            valueField: "years",
            styleSlot: "years",
            displaySlot: "yearsDisplay",
            unit: "years",
            numberFormatUnit: "year",
          },
          {
            valueField: "months",
            styleSlot: "months",
            displaySlot: "monthsDisplay",
            unit: "months",
            numberFormatUnit: "month",
          },
          {
            valueField: "weeks",
            styleSlot: "weeks",
            displaySlot: "weeksDisplay",
            unit: "weeks",
            numberFormatUnit: "week",
          },
          {
            valueField: "days",
            styleSlot: "days",
            displaySlot: "daysDisplay",
            unit: "days",
            numberFormatUnit: "day",
          },
          {
            valueField: "hours",
            styleSlot: "hours",
            displaySlot: "hoursDisplay",
            unit: "hours",
            numberFormatUnit: "hour",
          },
          {
            valueField: "minutes",
            styleSlot: "minutes",
            displaySlot: "minutesDisplay",
            unit: "minutes",
            numberFormatUnit: "minute",
          },
          {
            valueField: "seconds",
            styleSlot: "seconds",
            displaySlot: "secondsDisplay",
            unit: "seconds",
            numberFormatUnit: "second",
          },
          {
            valueField: "milliseconds",
            styleSlot: "milliseconds",
            displaySlot: "millisecondsDisplay",
            unit: "milliseconds",
            numberFormatUnit: "millisecond",
          },
          {
            valueField: "microseconds",
            styleSlot: "microseconds",
            displaySlot: "microsecondsDisplay",
            unit: "microseconds",
            numberFormatUnit: "microsecond",
          },
          {
            valueField: "nanoseconds",
            styleSlot: "nanoseconds",
            displaySlot: "nanosecondsDisplay",
            unit: "nanoseconds",
            numberFormatUnit: "nanosecond",
          },
        ];
    },
    501974(e, t, n) {
      "use strict";
      n.d(t, { n: () => i });
      let r = new WeakMap();
      function i(e) {
        let t = r.get(e);
        return t || ((t = Object.create(null)), r.set(e, t)), t;
      }
    },
    225441(e, t, n) {
      "use strict";
      n.d(t, { P: () => r });
      let r = [
        "adlm",
        "ahom",
        "arab",
        "arabext",
        "armn",
        "armnlow",
        "bali",
        "beng",
        "bhks",
        "brah",
        "cakm",
        "cham",
        "cyrl",
        "deva",
        "diak",
        "ethi",
        "fullwide",
        "gara",
        "geor",
        "gong",
        "gonm",
        "grek",
        "greklow",
        "gujr",
        "gukh",
        "guru",
        "hanidays",
        "hanidec",
        "hans",
        "hansfin",
        "hant",
        "hantfin",
        "hebr",
        "hmng",
        "hmnp",
        "java",
        "jpan",
        "jpanfin",
        "jpanyear",
        "kali",
        "kawi",
        "khmr",
        "knda",
        "krai",
        "lana",
        "lanatham",
        "laoo",
        "latn",
        "lepc",
        "limb",
        "mathbold",
        "mathdbl",
        "mathmono",
        "mathsanb",
        "mathsans",
        "mlym",
        "modi",
        "mong",
        "mroo",
        "mtei",
        "mymr",
        "mymrepka",
        "mymrpao",
        "mymrshan",
        "mymrtlng",
        "nagm",
        "newa",
        "nkoo",
        "olck",
        "onao",
        "orya",
        "osma",
        "outlined",
        "rohg",
        "roman",
        "romanlow",
        "saur",
        "segment",
        "shrd",
        "sind",
        "sinh",
        "sora",
        "sund",
        "sunu",
        "takr",
        "talu",
        "taml",
        "tamldec",
        "telu",
        "thai",
        "tibt",
        "tirh",
        "tnsa",
        "tols",
        "vaii",
        "wara",
        "wcho",
      ];
    },
    762437(e, t, n) {
      "use strict";
      n.d(t, { N: () => r });
      let r = {
        default: ":",
        localeData: {
          aa: { nu: ["latn"] },
          "aa-DJ": { nu: ["latn"] },
          "aa-ER": { nu: ["latn"] },
          ab: { nu: ["latn"] },
          af: { nu: ["latn"] },
          "af-NA": { nu: ["latn"] },
          agq: { nu: ["latn"] },
          ak: { nu: ["latn"] },
          am: { nu: ["latn"] },
          an: { nu: ["latn"] },
          ann: { nu: ["latn"] },
          apc: { nu: ["latn"] },
          ar: { nu: ["latn", "latn"] },
          "ar-AE": { nu: ["latn", "latn"] },
          "ar-BH": { nu: ["arab", "latn"] },
          "ar-DJ": { nu: ["arab", "latn"] },
          "ar-DZ": { nu: ["latn", "latn"] },
          "ar-EG": { nu: ["arab", "latn"] },
          "ar-EH": { nu: ["latn", "latn"] },
          "ar-ER": { nu: ["arab", "latn"] },
          "ar-IL": { nu: ["arab", "latn"] },
          "ar-IQ": { nu: ["arab", "latn"] },
          "ar-JO": { nu: ["arab", "latn"] },
          "ar-KM": { nu: ["arab", "latn"] },
          "ar-KW": { nu: ["arab", "latn"] },
          "ar-LB": { nu: ["arab", "latn"] },
          "ar-LY": { nu: ["latn", "latn"] },
          "ar-MA": { nu: ["latn", "latn"] },
          "ar-MR": { nu: ["arab", "latn"] },
          "ar-OM": { nu: ["arab", "latn"] },
          "ar-PS": { nu: ["arab", "latn"] },
          "ar-QA": { nu: ["arab", "latn"] },
          "ar-SA": { nu: ["arab", "latn"] },
          "ar-SD": { nu: ["arab", "latn"] },
          "ar-SO": { nu: ["arab", "latn"] },
          "ar-SS": { nu: ["arab", "latn"] },
          "ar-SY": { nu: ["arab", "latn"] },
          "ar-TD": { nu: ["arab", "latn"] },
          "ar-TN": { nu: ["latn", "latn"] },
          "ar-YE": { nu: ["arab", "latn"] },
          arn: { nu: ["latn"] },
          as: { nu: ["beng"] },
          asa: { nu: ["latn"] },
          ast: { nu: ["latn"] },
          az: { nu: ["latn"] },
          "az-Arab": { nu: ["arabext"] },
          "az-Arab-IQ": { nu: ["arabext"] },
          "az-Arab-TR": { nu: ["arabext"] },
          "az-Cyrl": { nu: ["latn"] },
          "az-Latn": { nu: ["latn"] },
          ba: { nu: ["latn"] },
          bal: { nu: ["latn"] },
          "bal-Arab": { nu: ["latn"] },
          "bal-Latn": { nu: ["latn"] },
          bas: { nu: ["latn"] },
          be: { nu: ["latn"] },
          "be-tarask": { nu: ["latn"] },
          bem: { nu: ["latn"] },
          bew: { nu: ["latn"] },
          bez: { nu: ["latn"] },
          bg: { nu: ["latn"] },
          bgc: { nu: ["deva"] },
          bgn: { nu: ["arabext"] },
          "bgn-AE": { nu: ["arabext"] },
          "bgn-AF": { nu: ["arabext"] },
          "bgn-IR": { nu: ["arabext"] },
          "bgn-OM": { nu: ["arabext"] },
          bho: { nu: ["deva"] },
          blo: { nu: ["latn"] },
          blt: { nu: ["latn"] },
          bm: { nu: ["latn"] },
          "bm-Nkoo": { nu: ["latn"] },
          bn: { nu: ["beng"] },
          "bn-IN": { nu: ["beng"] },
          bo: { nu: ["latn"] },
          "bo-IN": { nu: ["latn"] },
          bqi: { nu: ["latn"] },
          br: { nu: ["latn"] },
          brx: { nu: ["latn"] },
          bs: { nu: ["latn"] },
          "bs-Cyrl": { nu: ["latn"] },
          "bs-Latn": { nu: ["latn"] },
          bss: { nu: ["latn"] },
          bua: { nu: ["latn"] },
          byn: { nu: ["latn"] },
          ca: { nu: ["latn"] },
          "ca-AD": { nu: ["latn"] },
          "ca-ES-valencia": { nu: ["latn"] },
          "ca-FR": { nu: ["latn"] },
          "ca-IT": { nu: ["latn"] },
          cad: { nu: ["latn"] },
          cch: { nu: ["latn"] },
          ccp: { nu: ["cakm"] },
          "ccp-IN": { nu: ["cakm"] },
          ce: { nu: ["latn"] },
          ceb: { nu: ["latn"] },
          cgg: { nu: ["latn"] },
          cho: { nu: ["latn"] },
          chr: { nu: ["latn"] },
          cic: { nu: ["latn"] },
          ckb: { nu: ["arab"] },
          "ckb-IR": { nu: ["arab"] },
          co: { nu: ["latn"] },
          cop: { nu: ["latn"] },
          cs: { nu: ["latn"] },
          csw: { nu: ["latn"] },
          cu: { nu: ["latn"] },
          cv: { nu: ["latn"] },
          cy: { nu: ["latn"] },
          da: { nu: ["latn"], separator: { latn: "." } },
          "da-GL": { nu: ["latn"], separator: { latn: "." } },
          dav: { nu: ["latn"] },
          de: { nu: ["latn"] },
          "de-AT": { nu: ["latn"] },
          "de-BE": { nu: ["latn"] },
          "de-CH": { nu: ["latn"] },
          "de-IT": { nu: ["latn"] },
          "de-LI": { nu: ["latn"] },
          "de-LU": { nu: ["latn"] },
          dje: { nu: ["latn"] },
          doi: { nu: ["latn"] },
          dsb: { nu: ["latn"] },
          dua: { nu: ["latn"] },
          dv: { nu: ["latn"] },
          dyo: { nu: ["latn"] },
          dz: { nu: ["tibt"] },
          ebu: { nu: ["latn"] },
          ee: { nu: ["latn"] },
          "ee-TG": { nu: ["latn"] },
          el: { nu: ["latn"] },
          "el-CY": { nu: ["latn"] },
          "el-polyton": { nu: ["latn"] },
          en: { nu: ["latn"] },
          "en-001": { nu: ["latn"] },
          "en-150": { nu: ["latn"] },
          "en-AE": { nu: ["latn"] },
          "en-AG": { nu: ["latn"] },
          "en-AI": { nu: ["latn"] },
          "en-AS": { nu: ["latn"] },
          "en-AT": { nu: ["latn"] },
          "en-AU": { nu: ["latn"] },
          "en-BB": { nu: ["latn"] },
          "en-BE": { nu: ["latn"] },
          "en-BI": { nu: ["latn"] },
          "en-BM": { nu: ["latn"] },
          "en-BS": { nu: ["latn"] },
          "en-BW": { nu: ["latn"] },
          "en-BZ": { nu: ["latn"] },
          "en-CA": { nu: ["latn"] },
          "en-CC": { nu: ["latn"] },
          "en-CH": { nu: ["latn"] },
          "en-CK": { nu: ["latn"] },
          "en-CM": { nu: ["latn"] },
          "en-CX": { nu: ["latn"] },
          "en-CY": { nu: ["latn"] },
          "en-CZ": { nu: ["latn"] },
          "en-DE": { nu: ["latn"] },
          "en-DG": { nu: ["latn"] },
          "en-DK": { nu: ["latn"], separator: { latn: "." } },
          "en-DM": { nu: ["latn"] },
          "en-Dsrt": { nu: ["latn"] },
          "en-EE": { nu: ["latn"] },
          "en-ER": { nu: ["latn"] },
          "en-ES": { nu: ["latn"] },
          "en-FI": { nu: ["latn"], separator: { latn: "." } },
          "en-FJ": { nu: ["latn"] },
          "en-FK": { nu: ["latn"] },
          "en-FM": { nu: ["latn"] },
          "en-FR": { nu: ["latn"] },
          "en-GB": { nu: ["latn"] },
          "en-GD": { nu: ["latn"] },
          "en-GE": { nu: ["latn"] },
          "en-GG": { nu: ["latn"] },
          "en-GH": { nu: ["latn"] },
          "en-GI": { nu: ["latn"] },
          "en-GM": { nu: ["latn"] },
          "en-GS": { nu: ["latn"] },
          "en-GU": { nu: ["latn"] },
          "en-GY": { nu: ["latn"] },
          "en-HK": { nu: ["latn"] },
          "en-HU": { nu: ["latn"] },
          "en-ID": { nu: ["latn"] },
          "en-IE": { nu: ["latn"] },
          "en-IL": { nu: ["latn"] },
          "en-IM": { nu: ["latn"] },
          "en-IN": { nu: ["latn"] },
          "en-IO": { nu: ["latn"] },
          "en-IT": { nu: ["latn"] },
          "en-JE": { nu: ["latn"] },
          "en-JM": { nu: ["latn"] },
          "en-JP": { nu: ["latn"] },
          "en-KE": { nu: ["latn"] },
          "en-KI": { nu: ["latn"] },
          "en-KN": { nu: ["latn"] },
          "en-KY": { nu: ["latn"] },
          "en-LC": { nu: ["latn"] },
          "en-LR": { nu: ["latn"] },
          "en-LS": { nu: ["latn"] },
          "en-LT": { nu: ["latn"] },
          "en-LV": { nu: ["latn"] },
          "en-MG": { nu: ["latn"] },
          "en-MH": { nu: ["latn"] },
          "en-MO": { nu: ["latn"] },
          "en-MP": { nu: ["latn"] },
          "en-MS": { nu: ["latn"] },
          "en-MT": { nu: ["latn"] },
          "en-MU": { nu: ["latn"] },
          "en-MV": { nu: ["latn"] },
          "en-MW": { nu: ["latn"] },
          "en-MY": { nu: ["latn"] },
          "en-NA": { nu: ["latn"] },
          "en-NF": { nu: ["latn"] },
          "en-NG": { nu: ["latn"] },
          "en-NL": { nu: ["latn"] },
          "en-NO": { nu: ["latn"] },
          "en-NR": { nu: ["latn"] },
          "en-NU": { nu: ["latn"] },
          "en-NZ": { nu: ["latn"] },
          "en-PG": { nu: ["latn"] },
          "en-PH": { nu: ["latn"] },
          "en-PK": { nu: ["latn"] },
          "en-PL": { nu: ["latn"] },
          "en-PN": { nu: ["latn"] },
          "en-PR": { nu: ["latn"] },
          "en-PT": { nu: ["latn"] },
          "en-PW": { nu: ["latn"] },
          "en-RO": { nu: ["latn"] },
          "en-RW": { nu: ["latn"] },
          "en-SB": { nu: ["latn"] },
          "en-SC": { nu: ["latn"] },
          "en-SD": { nu: ["latn"] },
          "en-SE": { nu: ["latn"] },
          "en-SG": { nu: ["latn"] },
          "en-SH": { nu: ["latn"] },
          "en-SI": { nu: ["latn"] },
          "en-SK": { nu: ["latn"] },
          "en-SL": { nu: ["latn"] },
          "en-SS": { nu: ["latn"] },
          "en-SX": { nu: ["latn"] },
          "en-SZ": { nu: ["latn"] },
          "en-Shaw": { nu: ["latn"] },
          "en-TC": { nu: ["latn"] },
          "en-TK": { nu: ["latn"] },
          "en-TO": { nu: ["latn"] },
          "en-TT": { nu: ["latn"] },
          "en-TV": { nu: ["latn"] },
          "en-TZ": { nu: ["latn"] },
          "en-UA": { nu: ["latn"] },
          "en-UG": { nu: ["latn"] },
          "en-UM": { nu: ["latn"] },
          "en-VC": { nu: ["latn"] },
          "en-VG": { nu: ["latn"] },
          "en-VI": { nu: ["latn"] },
          "en-VU": { nu: ["latn"] },
          "en-WS": { nu: ["latn"] },
          "en-ZA": { nu: ["latn"] },
          "en-ZM": { nu: ["latn"] },
          "en-ZW": { nu: ["latn"] },
          eo: { nu: ["latn"] },
          es: { nu: ["latn"] },
          "es-419": { nu: ["latn"] },
          "es-AR": { nu: ["latn"] },
          "es-BO": { nu: ["latn"] },
          "es-BR": { nu: ["latn"] },
          "es-BZ": { nu: ["latn"] },
          "es-CL": { nu: ["latn"] },
          "es-CO": { nu: ["latn"] },
          "es-CR": { nu: ["latn"] },
          "es-CU": { nu: ["latn"] },
          "es-DO": { nu: ["latn"] },
          "es-EA": { nu: ["latn"] },
          "es-EC": { nu: ["latn"] },
          "es-GQ": { nu: ["latn"] },
          "es-GT": { nu: ["latn"] },
          "es-HN": { nu: ["latn"] },
          "es-IC": { nu: ["latn"] },
          "es-MX": { nu: ["latn"] },
          "es-NI": { nu: ["latn"] },
          "es-PA": { nu: ["latn"] },
          "es-PE": { nu: ["latn"] },
          "es-PH": { nu: ["latn"] },
          "es-PR": { nu: ["latn"] },
          "es-PY": { nu: ["latn"] },
          "es-SV": { nu: ["latn"] },
          "es-US": { nu: ["latn"] },
          "es-UY": { nu: ["latn"] },
          "es-VE": { nu: ["latn"] },
          et: { nu: ["latn"] },
          eu: { nu: ["latn"] },
          ewo: { nu: ["latn"] },
          fa: { nu: ["arabext"] },
          "fa-AF": { nu: ["arabext"] },
          ff: { nu: ["latn"] },
          "ff-Adlm": { nu: ["adlm"] },
          "ff-Adlm-BF": { nu: ["adlm"] },
          "ff-Adlm-CM": { nu: ["adlm"] },
          "ff-Adlm-GH": { nu: ["adlm"] },
          "ff-Adlm-GM": { nu: ["adlm"] },
          "ff-Adlm-GW": { nu: ["adlm"] },
          "ff-Adlm-LR": { nu: ["adlm"] },
          "ff-Adlm-MR": { nu: ["adlm"] },
          "ff-Adlm-NE": { nu: ["adlm"] },
          "ff-Adlm-NG": { nu: ["adlm"] },
          "ff-Adlm-SL": { nu: ["adlm"] },
          "ff-Adlm-SN": { nu: ["adlm"] },
          "ff-Latn": { nu: ["latn"] },
          "ff-Latn-BF": { nu: ["latn"] },
          "ff-Latn-CM": { nu: ["latn"] },
          "ff-Latn-GH": { nu: ["latn"] },
          "ff-Latn-GM": { nu: ["latn"] },
          "ff-Latn-GN": { nu: ["latn"] },
          "ff-Latn-GW": { nu: ["latn"] },
          "ff-Latn-LR": { nu: ["latn"] },
          "ff-Latn-MR": { nu: ["latn"] },
          "ff-Latn-NE": { nu: ["latn"] },
          "ff-Latn-NG": { nu: ["latn"] },
          "ff-Latn-SL": { nu: ["latn"] },
          fi: { nu: ["latn"], separator: { latn: "." } },
          fil: { nu: ["latn"] },
          fo: { nu: ["latn"] },
          "fo-DK": { nu: ["latn"] },
          fr: { nu: ["latn"] },
          "fr-BE": { nu: ["latn"] },
          "fr-BF": { nu: ["latn"] },
          "fr-BI": { nu: ["latn"] },
          "fr-BJ": { nu: ["latn"] },
          "fr-BL": { nu: ["latn"] },
          "fr-CA": { nu: ["latn"] },
          "fr-CD": { nu: ["latn"] },
          "fr-CF": { nu: ["latn"] },
          "fr-CG": { nu: ["latn"] },
          "fr-CH": { nu: ["latn"] },
          "fr-CI": { nu: ["latn"] },
          "fr-CM": { nu: ["latn"] },
          "fr-DJ": { nu: ["latn"] },
          "fr-DZ": { nu: ["latn"] },
          "fr-GA": { nu: ["latn"] },
          "fr-GF": { nu: ["latn"] },
          "fr-GN": { nu: ["latn"] },
          "fr-GP": { nu: ["latn"] },
          "fr-GQ": { nu: ["latn"] },
          "fr-HT": { nu: ["latn"] },
          "fr-KM": { nu: ["latn"] },
          "fr-LU": { nu: ["latn"] },
          "fr-MA": { nu: ["latn"] },
          "fr-MC": { nu: ["latn"] },
          "fr-MF": { nu: ["latn"] },
          "fr-MG": { nu: ["latn"] },
          "fr-ML": { nu: ["latn"] },
          "fr-MQ": { nu: ["latn"] },
          "fr-MR": { nu: ["latn"] },
          "fr-MU": { nu: ["latn"] },
          "fr-NC": { nu: ["latn"] },
          "fr-NE": { nu: ["latn"] },
          "fr-PF": { nu: ["latn"] },
          "fr-PM": { nu: ["latn"] },
          "fr-RE": { nu: ["latn"] },
          "fr-RW": { nu: ["latn"] },
          "fr-SC": { nu: ["latn"] },
          "fr-SN": { nu: ["latn"] },
          "fr-SY": { nu: ["latn"] },
          "fr-TD": { nu: ["latn"] },
          "fr-TG": { nu: ["latn"] },
          "fr-TN": { nu: ["latn"] },
          "fr-VU": { nu: ["latn"] },
          "fr-WF": { nu: ["latn"] },
          "fr-YT": { nu: ["latn"] },
          frr: { nu: ["latn"] },
          fur: { nu: ["latn"] },
          fy: { nu: ["latn"] },
          ga: { nu: ["latn"] },
          "ga-GB": { nu: ["latn"] },
          gaa: { nu: ["latn"] },
          gd: { nu: ["latn"] },
          gez: { nu: ["latn"] },
          "gez-ER": { nu: ["latn"] },
          gl: { nu: ["latn"] },
          gn: { nu: ["latn"] },
          gsw: { nu: ["latn"] },
          "gsw-FR": { nu: ["latn"] },
          "gsw-LI": { nu: ["latn"] },
          gu: { nu: ["latn"] },
          guz: { nu: ["latn"] },
          gv: { nu: ["latn"] },
          ha: { nu: ["latn"] },
          "ha-Arab": { nu: ["latn"] },
          "ha-Arab-SD": { nu: ["latn"] },
          "ha-GH": { nu: ["latn"] },
          "ha-NE": { nu: ["latn"] },
          haw: { nu: ["latn"] },
          he: { nu: ["latn"] },
          hi: { nu: ["latn"] },
          "hi-Latn": { nu: ["latn"] },
          hnj: { nu: ["hmnp", "latn"] },
          "hnj-Hmnp": { nu: ["hmnp", "latn"] },
          hr: { nu: ["latn"] },
          "hr-BA": { nu: ["latn"] },
          hsb: { nu: ["latn"] },
          ht: { nu: ["latn"] },
          hu: { nu: ["latn"] },
          hy: { nu: ["latn"] },
          ia: { nu: ["latn"] },
          id: { nu: ["latn"], separator: { latn: "." } },
          ie: { nu: ["latn"] },
          ig: { nu: ["latn"] },
          ii: { nu: ["latn"] },
          io: { nu: ["latn"] },
          is: { nu: ["latn"] },
          it: { nu: ["latn"] },
          "it-CH": { nu: ["latn"] },
          "it-SM": { nu: ["latn"] },
          "it-VA": { nu: ["latn"] },
          iu: { nu: ["latn"] },
          "iu-Latn": { nu: ["latn"] },
          ja: { nu: ["latn"] },
          jbo: { nu: ["latn"] },
          jgo: { nu: ["latn"] },
          jmc: { nu: ["latn"] },
          jv: { nu: ["latn"] },
          ka: { nu: ["latn"] },
          kaa: { nu: ["latn"] },
          "kaa-Cyrl": { nu: ["latn"] },
          "kaa-Latn": { nu: ["latn"] },
          kab: { nu: ["latn"] },
          kaj: { nu: ["latn"] },
          kam: { nu: ["latn"] },
          kcg: { nu: ["latn"] },
          kde: { nu: ["latn"] },
          kea: { nu: ["latn"] },
          kek: { nu: ["latn"] },
          ken: { nu: ["latn"] },
          kgp: { nu: ["latn"] },
          khq: { nu: ["latn"] },
          ki: { nu: ["latn"] },
          kk: { nu: ["latn"] },
          "kk-Arab": { nu: ["latn"] },
          "kk-Cyrl": { nu: ["latn"] },
          "kk-KZ": { nu: ["latn"] },
          kkj: { nu: ["latn"] },
          kl: { nu: ["latn"] },
          kln: { nu: ["latn"] },
          km: { nu: ["latn"] },
          kn: { nu: ["latn"] },
          ko: { nu: ["latn"] },
          "ko-CN": { nu: ["latn"] },
          "ko-KP": { nu: ["latn"] },
          kok: { nu: ["latn"] },
          "kok-Deva": { nu: ["latn"] },
          "kok-Latn": { nu: ["latn"] },
          kpe: { nu: ["latn"] },
          "kpe-GN": { nu: ["latn"] },
          ks: { nu: ["arabext"] },
          "ks-Arab": { nu: ["arabext"] },
          "ks-Deva": { nu: ["latn"] },
          ksb: { nu: ["latn"] },
          ksf: { nu: ["latn"] },
          ksh: { nu: ["latn"] },
          ku: { nu: ["latn"] },
          "ku-Arab": { nu: ["latn"] },
          "ku-Arab-IR": { nu: ["latn"] },
          "ku-Latn": { nu: ["latn"] },
          "ku-Latn-IQ": { nu: ["latn"] },
          "ku-Latn-SY": { nu: ["latn"] },
          "ku-TR": { nu: ["latn"] },
          kw: { nu: ["latn"] },
          kxv: { nu: ["latn"] },
          "kxv-Deva": { nu: ["latn"] },
          "kxv-Latn": { nu: ["latn"] },
          "kxv-Orya": { nu: ["latn"] },
          "kxv-Telu": { nu: ["latn"] },
          ky: { nu: ["latn"] },
          la: { nu: ["latn"] },
          lag: { nu: ["latn"] },
          lb: { nu: ["latn"] },
          lg: { nu: ["latn"] },
          lij: { nu: ["latn"] },
          lkt: { nu: ["latn"] },
          lld: { nu: ["latn"] },
          lmo: { nu: ["latn"] },
          ln: { nu: ["latn"] },
          "ln-AO": { nu: ["latn"] },
          "ln-CF": { nu: ["latn"] },
          "ln-CG": { nu: ["latn"] },
          lo: { nu: ["latn"] },
          lrc: { nu: ["arabext"] },
          "lrc-IQ": { nu: ["arabext"] },
          lt: { nu: ["latn"] },
          ltg: { nu: ["latn"] },
          lu: { nu: ["latn"] },
          luo: { nu: ["latn"] },
          luy: { nu: ["latn"] },
          lv: { nu: ["latn"] },
          lzz: { nu: ["latn"] },
          mai: { nu: ["latn"] },
          mas: { nu: ["latn"] },
          "mas-TZ": { nu: ["latn"] },
          mdf: { nu: ["latn"] },
          mer: { nu: ["latn"] },
          mfe: { nu: ["latn"] },
          mg: { nu: ["latn"] },
          mgh: { nu: ["latn"] },
          mgo: { nu: ["latn"] },
          mhn: { nu: ["latn"] },
          mi: { nu: ["latn"] },
          mic: { nu: ["latn"] },
          mk: { nu: ["latn"] },
          ml: { nu: ["latn"] },
          mn: { nu: ["latn"] },
          "mn-Mong": { nu: ["latn"] },
          "mn-Mong-MN": { nu: ["latn"] },
          mni: { nu: ["beng"] },
          "mni-Beng": { nu: ["beng"] },
          "mni-Mtei": { nu: ["mtei"] },
          moh: { nu: ["latn"] },
          mr: { nu: ["deva"] },
          ms: { nu: ["latn"] },
          "ms-Arab": { nu: ["latn"] },
          "ms-Arab-BN": { nu: ["latn"] },
          "ms-BN": { nu: ["latn"] },
          "ms-ID": { nu: ["latn"], separator: { latn: "." } },
          "ms-SG": { nu: ["latn"] },
          mt: { nu: ["latn"] },
          mua: { nu: ["latn"] },
          mus: { nu: ["latn"] },
          mww: { nu: ["hmnp", "latn"] },
          "mww-Hmnp": { nu: ["hmnp", "latn"] },
          my: { nu: ["mymr"] },
          myv: { nu: ["latn"] },
          mzn: { nu: ["arabext"] },
          naq: { nu: ["latn"] },
          nb: { nu: ["latn"] },
          "nb-SJ": { nu: ["latn"] },
          nd: { nu: ["latn"] },
          nds: { nu: ["latn"] },
          "nds-NL": { nu: ["latn"] },
          ne: { nu: ["deva"] },
          "ne-IN": { nu: ["deva"] },
          nl: { nu: ["latn"] },
          "nl-AW": { nu: ["latn"] },
          "nl-BE": { nu: ["latn"] },
          "nl-BQ": { nu: ["latn"] },
          "nl-CW": { nu: ["latn"] },
          "nl-SR": { nu: ["latn"] },
          "nl-SX": { nu: ["latn"] },
          nmg: { nu: ["latn"] },
          nn: { nu: ["latn"] },
          nnh: { nu: ["latn"] },
          no: { nu: ["latn"] },
          nqo: { nu: ["nkoo"] },
          nr: { nu: ["latn"] },
          nso: { nu: ["latn"] },
          nus: { nu: ["latn"] },
          nv: { nu: ["latn"] },
          ny: { nu: ["latn"] },
          nyn: { nu: ["latn"] },
          oc: { nu: ["latn"] },
          "oc-ES": { nu: ["latn"] },
          oka: { nu: ["latn"] },
          "oka-US": { nu: ["latn"] },
          om: { nu: ["latn"] },
          "om-KE": { nu: ["latn"] },
          or: { nu: ["latn"] },
          os: { nu: ["latn"] },
          "os-RU": { nu: ["latn"] },
          osa: { nu: ["latn"] },
          pa: { nu: ["latn"] },
          "pa-Arab": { nu: ["arabext"] },
          "pa-Guru": { nu: ["latn"] },
          pap: { nu: ["latn"] },
          "pap-AW": { nu: ["latn"] },
          pcm: { nu: ["latn"] },
          pi: { nu: ["latn"] },
          "pi-Latn": { nu: ["latn"] },
          pis: { nu: ["latn"] },
          pl: { nu: ["latn"] },
          pms: { nu: ["latn"] },
          prg: { nu: ["latn"] },
          ps: { nu: ["arabext"] },
          "ps-PK": { nu: ["arabext"] },
          pt: { nu: ["latn"] },
          "pt-AO": { nu: ["latn"] },
          "pt-CH": { nu: ["latn"] },
          "pt-CV": { nu: ["latn"] },
          "pt-GQ": { nu: ["latn"] },
          "pt-GW": { nu: ["latn"] },
          "pt-LU": { nu: ["latn"] },
          "pt-MO": { nu: ["latn"] },
          "pt-MZ": { nu: ["latn"] },
          "pt-PT": { nu: ["latn"] },
          "pt-ST": { nu: ["latn"] },
          "pt-TL": { nu: ["latn"] },
          qu: { nu: ["latn"] },
          "qu-BO": { nu: ["latn"] },
          "qu-EC": { nu: ["latn"] },
          quc: { nu: ["latn"] },
          raj: { nu: ["deva"] },
          rhg: { nu: ["latn"] },
          "rhg-Rohg": { nu: ["latn"] },
          "rhg-Rohg-BD": { nu: ["latn"] },
          rif: { nu: ["latn"] },
          rm: { nu: ["latn"] },
          rn: { nu: ["latn"] },
          ro: { nu: ["latn"] },
          "ro-MD": { nu: ["latn"] },
          rof: { nu: ["latn"] },
          ru: { nu: ["latn"] },
          "ru-BY": { nu: ["latn"] },
          "ru-KG": { nu: ["latn"] },
          "ru-KZ": { nu: ["latn"] },
          "ru-MD": { nu: ["latn"] },
          "ru-UA": { nu: ["latn"] },
          rw: { nu: ["latn"] },
          rwk: { nu: ["latn"] },
          sa: { nu: ["deva"] },
          sah: { nu: ["latn"] },
          saq: { nu: ["latn"] },
          sat: { nu: ["olck"] },
          "sat-Deva": { nu: ["deva"] },
          "sat-Olck": { nu: ["olck"] },
          sbp: { nu: ["latn"] },
          sc: { nu: ["latn"] },
          scn: { nu: ["latn"] },
          sd: { nu: ["arab"] },
          "sd-Arab": { nu: ["arab"] },
          "sd-Deva": { nu: ["latn"] },
          sdh: { nu: ["arab"] },
          "sdh-IQ": { nu: ["arab"] },
          se: { nu: ["latn"] },
          "se-FI": { nu: ["latn"] },
          "se-SE": { nu: ["latn"] },
          seh: { nu: ["latn"] },
          ses: { nu: ["latn"] },
          sg: { nu: ["latn"] },
          sgs: { nu: ["latn"] },
          shi: { nu: ["latn"] },
          "shi-Latn": { nu: ["latn"] },
          "shi-Tfng": { nu: ["latn"] },
          shn: { nu: ["latn"] },
          "shn-TH": { nu: ["latn"] },
          si: { nu: ["latn"], separator: { latn: "." } },
          sid: { nu: ["latn"] },
          sk: { nu: ["latn"] },
          skr: { nu: ["latn"] },
          sl: { nu: ["latn"] },
          sma: { nu: ["latn"] },
          "sma-NO": { nu: ["latn"] },
          smj: { nu: ["latn"] },
          "smj-NO": { nu: ["latn"] },
          smn: { nu: ["latn"], separator: { latn: "." } },
          sms: { nu: ["latn"] },
          sn: { nu: ["latn"] },
          so: { nu: ["latn"] },
          "so-DJ": { nu: ["latn"] },
          "so-ET": { nu: ["latn"] },
          "so-KE": { nu: ["latn"] },
          sq: { nu: ["latn"] },
          "sq-MK": { nu: ["latn"] },
          "sq-XK": { nu: ["latn"] },
          sr: { nu: ["latn"] },
          "sr-Cyrl": { nu: ["latn"] },
          "sr-Cyrl-BA": { nu: ["latn"] },
          "sr-Cyrl-ME": { nu: ["latn"] },
          "sr-Cyrl-XK": { nu: ["latn"] },
          "sr-Latn": { nu: ["latn"] },
          "sr-Latn-BA": { nu: ["latn"] },
          "sr-Latn-ME": { nu: ["latn"] },
          "sr-Latn-XK": { nu: ["latn"] },
          ss: { nu: ["latn"] },
          "ss-SZ": { nu: ["latn"] },
          ssy: { nu: ["latn"] },
          st: { nu: ["latn"] },
          "st-LS": { nu: ["latn"] },
          su: { nu: ["latn"], separator: { latn: "." } },
          "su-Latn": { nu: ["latn"], separator: { latn: "." } },
          suz: { nu: ["latn"] },
          "suz-Deva": { nu: ["latn"] },
          "suz-Sunu": { nu: ["latn"] },
          sv: { nu: ["latn"] },
          "sv-AX": { nu: ["latn"] },
          "sv-FI": { nu: ["latn"], separator: { latn: "." } },
          sw: { nu: ["latn"] },
          "sw-CD": { nu: ["latn"] },
          "sw-KE": { nu: ["latn"] },
          "sw-UG": { nu: ["latn"] },
          syr: { nu: ["latn"] },
          "syr-SY": { nu: ["latn"] },
          szl: { nu: ["latn"] },
          ta: { nu: ["latn"] },
          "ta-LK": { nu: ["latn"] },
          "ta-MY": { nu: ["latn"] },
          "ta-SG": { nu: ["latn"] },
          te: { nu: ["latn"] },
          teo: { nu: ["latn"] },
          "teo-KE": { nu: ["latn"] },
          tg: { nu: ["latn"] },
          th: { nu: ["latn"] },
          ti: { nu: ["latn"] },
          "ti-ER": { nu: ["latn"] },
          tig: { nu: ["latn"] },
          tk: { nu: ["latn"] },
          tn: { nu: ["latn"] },
          "tn-BW": { nu: ["latn"] },
          to: { nu: ["latn"] },
          tok: { nu: ["latn"] },
          tpi: { nu: ["latn"] },
          tr: { nu: ["latn"] },
          "tr-CY": { nu: ["latn"] },
          trv: { nu: ["latn"] },
          trw: { nu: ["latn"] },
          ts: { nu: ["latn"] },
          tt: { nu: ["latn"] },
          twq: { nu: ["latn"] },
          tyv: { nu: ["latn"] },
          tzm: { nu: ["latn"] },
          ug: { nu: ["latn"] },
          uk: { nu: ["latn"] },
          und: { nu: ["latn"] },
          ur: { nu: ["latn"] },
          "ur-IN": { nu: ["arabext"], separator: { arabext: "٫" } },
          uz: { nu: ["latn"] },
          "uz-Arab": { nu: ["arabext"] },
          "uz-Cyrl": { nu: ["latn"] },
          "uz-Latn": { nu: ["latn"] },
          vai: { nu: ["latn"] },
          "vai-Latn": { nu: ["latn"] },
          "vai-Vaii": { nu: ["latn"] },
          ve: { nu: ["latn"] },
          vec: { nu: ["latn"] },
          vi: { nu: ["latn"] },
          vmw: { nu: ["latn"] },
          vo: { nu: ["latn"] },
          vun: { nu: ["latn"] },
          wa: { nu: ["latn"] },
          wae: { nu: ["latn"] },
          wal: { nu: ["latn"] },
          wbp: { nu: ["latn"] },
          wo: { nu: ["latn"] },
          xh: { nu: ["latn"] },
          xnr: { nu: ["latn"] },
          xog: { nu: ["latn"] },
          yav: { nu: ["latn"] },
          yi: { nu: ["latn"] },
          yo: { nu: ["latn"] },
          "yo-BJ": { nu: ["latn"] },
          yrl: { nu: ["latn"] },
          "yrl-CO": { nu: ["latn"] },
          "yrl-VE": { nu: ["latn"] },
          yue: { nu: ["latn"] },
          "yue-Hans": { nu: ["latn"] },
          "yue-Hant": { nu: ["latn"] },
          "yue-Hant-CN": { nu: ["latn"] },
          "yue-Hant-MO": { nu: ["latn"] },
          za: { nu: ["latn"] },
          zgh: { nu: ["latn"] },
          zh: { nu: ["latn"] },
          "zh-Hans": { nu: ["latn"] },
          "zh-Hans-HK": { nu: ["latn"] },
          "zh-Hans-MO": { nu: ["latn"] },
          "zh-Hans-MY": { nu: ["latn"] },
          "zh-Hans-SG": { nu: ["latn"] },
          "zh-Hant": { nu: ["latn"] },
          "zh-Hant-HK": { nu: ["latn"] },
          "zh-Hant-MO": { nu: ["latn"] },
          "zh-Hant-MY": { nu: ["latn"] },
          "zh-Latn": { nu: ["latn"] },
          zu: { nu: ["latn"] },
        },
      };
    },
    632459() {},
    183580(e, t, n) {
      "use strict";
      n.d(t, { q: () => i });
      let r = new WeakMap();
      function i(e, t) {
        let n = r.get(e);
        n || ((n = new Set(e)), r.set(e, n));
        let i = t;
        for (;;) {
          if (n.has(i)) return i;
          let e = i.lastIndexOf("-");
          if (!~e) return;
          e >= 2 && "-" === i[e - 2] && (e -= 2), (i = i.slice(0, e));
        }
      }
    },
    641277(e, t, n) {
      "use strict";
      n.d(t, { B: () => u });
      var r = n(26232);
      function i(e) {
        return Intl.getCanonicalLocales(e)[0];
      }
      var a = n(183580);
      function u(e, t, n, u, o, s) {
        let l, d;
        if ("lookup" === n.localeMatcher)
          l = (function (e, t, n) {
            let i = { locale: "" };
            for (let n of t) {
              let t = n.replace(r.KB, ""),
                u = (0, a.q)(e, t);
              if (u)
                return (
                  (i.locale = u),
                  n !== t && (i.extension = n.slice(t.length, n.length)),
                  i
                );
            }
            return (i.locale = n()), i;
          })(Array.from(e), t, s);
        else {
          var c;
          let n, i, a, u, o;
          (c = Array.from(e)),
            (a = []),
            (u = t.reduce((e, t) => {
              let n = t.replace(r.KB, "");
              return a.push(n), (e[n] = t), e;
            }, {})),
            (o = (0, r.B4)(a, c)).matchedSupportedLocale &&
              o.matchedDesiredLocale &&
              ((n = o.matchedSupportedLocale),
              (i =
                u[o.matchedDesiredLocale].slice(
                  o.matchedDesiredLocale.length,
                ) || void 0)),
            (l = n ? { locale: n, extension: i } : { locale: s() });
        }
        null == l && (l = { locale: s(), extension: "" });
        let f = l.locale,
          h = o[f],
          p = { locale: "en", dataLocale: f };
        d = l.extension
          ? (function (e) {
              let t;
              (0, r.V1)(
                e === e.toLowerCase(),
                "Expected extension to be lowercase",
              ),
                (0, r.V1)(
                  "-u-" === e.slice(0, 3),
                  "Expected extension to be a Unicode locale extension",
                );
              let n = [],
                i = [],
                a = e.length,
                u = 3;
              for (; u < a; ) {
                let o,
                  s = e.indexOf("-", u);
                o = -1 === s ? a - u : s - u;
                let l = e.slice(u, u + o);
                (0, r.V1)(
                  o >= 2,
                  "Expected a subtag to have at least 2 characters",
                ),
                  void 0 === t && 2 != o
                    ? -1 === n.indexOf(l) && n.push(l)
                    : 2 === o
                      ? ((t = { key: l, value: "" }),
                        void 0 === i.find((e) => e.key === t?.key) && i.push(t))
                      : t?.value === ""
                        ? (t.value = l)
                        : ((0, r.V1)(
                            void 0 !== t,
                            "Expected keyword to be defined",
                          ),
                          (t.value += "-" + l)),
                  (u += o + 1);
              }
              return { attributes: n, keywords: i };
            })(l.extension).keywords
          : [];
        let m = [];
        for (let e of u) {
          let t,
            i = h?.[e] ?? [];
          (0, r.V1)(
            Array.isArray(i),
            `keyLocaleData for ${e} must be an array`,
          );
          let a = i[0];
          (0, r.V1)(
            void 0 === a || "string" == typeof a,
            "value must be a string or undefined",
          );
          let u = d.find((t) => t.key === e);
          if (u) {
            let n = u.value;
            "" !== n
              ? i.indexOf(n) > -1 && (t = { key: e, value: (a = n) })
              : i.indexOf("true") > -1 && (t = { key: e, value: (a = "true") });
          }
          let o = n[e];
          (0, r.V1)(
            null == o || "string" == typeof o,
            "optionsValue must be a string or undefined",
          ),
            "string" == typeof o &&
              "" ===
                (o = (function (e, t) {
                  let n = t.toLowerCase();
                  return (0, r.V1)(void 0 !== e, "ukey must be defined"), n;
                })(e.toLowerCase(), o)) &&
              (o = "true"),
            o !== a && i.indexOf(o) > -1 && ((a = o), (t = void 0)),
            t && m.push(t),
            (p[e] = a);
        }
        return (
          m.length > 0 &&
            (f = (function (e, t, n) {
              (0, r.V1)(
                -1 === e.indexOf("-u-"),
                "Expected locale to not have a Unicode locale extension",
              );
              let a = "-u";
              for (let e of t) a += `-${e}`;
              for (let e of n) {
                let { key: t, value: n } = e;
                (a += `-${t}`), "" !== n && (a += `-${n}`);
              }
              if ("-u" === a) return i(e);
              let u = e.indexOf("-x-");
              return i(-1 === u ? e + a : e.slice(0, u) + a + e.slice(u));
            })(f, [], m)),
          (p.locale = f),
          p
        );
      }
    },
    26232(e, t, n) {
      "use strict";
      let r;
      n.d(t, { KB: () => o, B4: () => p, V1: () => s });
      var i = n(315847);
      let a = {
          "written-new": [
            { paradigmLocales: { _locales: "en en_GB es es_419 pt_BR pt_PT" } },
            { $enUS: { _value: "AS+CA+GU+MH+MP+PH+PR+UM+US+VI" } },
            { $cnsar: { _value: "HK+MO" } },
            { $americas: { _value: "019" } },
            { $maghreb: { _value: "MA+DZ+TN+LY+MR+EH" } },
            { no: { _desired: "nb", _distance: "1" } },
            { bs: { _desired: "hr", _distance: "4" } },
            { bs: { _desired: "sh", _distance: "4" } },
            { hr: { _desired: "sh", _distance: "4" } },
            { sr: { _desired: "sh", _distance: "4" } },
            { aa: { _desired: "ssy", _distance: "4" } },
            { de: { _desired: "gsw", _distance: "4", _oneway: "true" } },
            { de: { _desired: "lb", _distance: "4", _oneway: "true" } },
            { no: { _desired: "da", _distance: "8" } },
            { nb: { _desired: "da", _distance: "8" } },
            { ru: { _desired: "ab", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ach", _distance: "30", _oneway: "true" } },
            { nl: { _desired: "af", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ak", _distance: "30", _oneway: "true" } },
            { en: { _desired: "am", _distance: "30", _oneway: "true" } },
            { es: { _desired: "ay", _distance: "20", _oneway: "true" } },
            { ru: { _desired: "az", _distance: "30", _oneway: "true" } },
            { ur: { _desired: "bal", _distance: "20", _oneway: "true" } },
            { ru: { _desired: "be", _distance: "20", _oneway: "true" } },
            { en: { _desired: "bem", _distance: "30", _oneway: "true" } },
            { hi: { _desired: "bh", _distance: "30", _oneway: "true" } },
            { en: { _desired: "bn", _distance: "30", _oneway: "true" } },
            { zh: { _desired: "bo", _distance: "20", _oneway: "true" } },
            { fr: { _desired: "br", _distance: "20", _oneway: "true" } },
            { es: { _desired: "ca", _distance: "20", _oneway: "true" } },
            { fil: { _desired: "ceb", _distance: "30", _oneway: "true" } },
            { en: { _desired: "chr", _distance: "20", _oneway: "true" } },
            { ar: { _desired: "ckb", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "co", _distance: "20", _oneway: "true" } },
            { fr: { _desired: "crs", _distance: "20", _oneway: "true" } },
            { sk: { _desired: "cs", _distance: "20" } },
            { en: { _desired: "cy", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ee", _distance: "30", _oneway: "true" } },
            { en: { _desired: "eo", _distance: "30", _oneway: "true" } },
            { es: { _desired: "eu", _distance: "20", _oneway: "true" } },
            { da: { _desired: "fo", _distance: "20", _oneway: "true" } },
            { nl: { _desired: "fy", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ga", _distance: "20", _oneway: "true" } },
            { en: { _desired: "gaa", _distance: "30", _oneway: "true" } },
            { en: { _desired: "gd", _distance: "20", _oneway: "true" } },
            { es: { _desired: "gl", _distance: "20", _oneway: "true" } },
            { es: { _desired: "gn", _distance: "20", _oneway: "true" } },
            { hi: { _desired: "gu", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ha", _distance: "30", _oneway: "true" } },
            { en: { _desired: "haw", _distance: "20", _oneway: "true" } },
            { fr: { _desired: "ht", _distance: "20", _oneway: "true" } },
            { ru: { _desired: "hy", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ia", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ig", _distance: "30", _oneway: "true" } },
            { en: { _desired: "is", _distance: "20", _oneway: "true" } },
            { id: { _desired: "jv", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ka", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "kg", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "kk", _distance: "30", _oneway: "true" } },
            { en: { _desired: "km", _distance: "30", _oneway: "true" } },
            { en: { _desired: "kn", _distance: "30", _oneway: "true" } },
            { en: { _desired: "kri", _distance: "30", _oneway: "true" } },
            { tr: { _desired: "ku", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "ky", _distance: "30", _oneway: "true" } },
            { it: { _desired: "la", _distance: "20", _oneway: "true" } },
            { en: { _desired: "lg", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "ln", _distance: "30", _oneway: "true" } },
            { en: { _desired: "lo", _distance: "30", _oneway: "true" } },
            { en: { _desired: "loz", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "lua", _distance: "30", _oneway: "true" } },
            { hi: { _desired: "mai", _distance: "20", _oneway: "true" } },
            { en: { _desired: "mfe", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "mg", _distance: "30", _oneway: "true" } },
            { en: { _desired: "mi", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ml", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "mn", _distance: "30", _oneway: "true" } },
            { hi: { _desired: "mr", _distance: "30", _oneway: "true" } },
            { id: { _desired: "ms", _distance: "30", _oneway: "true" } },
            { en: { _desired: "mt", _distance: "30", _oneway: "true" } },
            { en: { _desired: "my", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ne", _distance: "30", _oneway: "true" } },
            { nb: { _desired: "nn", _distance: "20" } },
            { no: { _desired: "nn", _distance: "20" } },
            { en: { _desired: "nso", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ny", _distance: "30", _oneway: "true" } },
            { en: { _desired: "nyn", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "oc", _distance: "20", _oneway: "true" } },
            { en: { _desired: "om", _distance: "30", _oneway: "true" } },
            { en: { _desired: "or", _distance: "30", _oneway: "true" } },
            { en: { _desired: "pa", _distance: "30", _oneway: "true" } },
            { en: { _desired: "pcm", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ps", _distance: "30", _oneway: "true" } },
            { es: { _desired: "qu", _distance: "30", _oneway: "true" } },
            { de: { _desired: "rm", _distance: "20", _oneway: "true" } },
            { en: { _desired: "rn", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "rw", _distance: "30", _oneway: "true" } },
            { hi: { _desired: "sa", _distance: "30", _oneway: "true" } },
            { en: { _desired: "sd", _distance: "30", _oneway: "true" } },
            { en: { _desired: "si", _distance: "30", _oneway: "true" } },
            { en: { _desired: "sn", _distance: "30", _oneway: "true" } },
            { en: { _desired: "so", _distance: "30", _oneway: "true" } },
            { en: { _desired: "sq", _distance: "30", _oneway: "true" } },
            { en: { _desired: "st", _distance: "30", _oneway: "true" } },
            { id: { _desired: "su", _distance: "20", _oneway: "true" } },
            { en: { _desired: "sw", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ta", _distance: "30", _oneway: "true" } },
            { en: { _desired: "te", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "tg", _distance: "30", _oneway: "true" } },
            { en: { _desired: "ti", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "tk", _distance: "30", _oneway: "true" } },
            { en: { _desired: "tlh", _distance: "30", _oneway: "true" } },
            { en: { _desired: "tn", _distance: "30", _oneway: "true" } },
            { en: { _desired: "to", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "tt", _distance: "30", _oneway: "true" } },
            { en: { _desired: "tum", _distance: "30", _oneway: "true" } },
            { zh: { _desired: "ug", _distance: "20", _oneway: "true" } },
            { ru: { _desired: "uk", _distance: "20", _oneway: "true" } },
            { en: { _desired: "ur", _distance: "30", _oneway: "true" } },
            { ru: { _desired: "uz", _distance: "30", _oneway: "true" } },
            { fr: { _desired: "wo", _distance: "30", _oneway: "true" } },
            { en: { _desired: "xh", _distance: "30", _oneway: "true" } },
            { en: { _desired: "yi", _distance: "30", _oneway: "true" } },
            { en: { _desired: "yo", _distance: "30", _oneway: "true" } },
            { zh: { _desired: "za", _distance: "20", _oneway: "true" } },
            { en: { _desired: "zu", _distance: "30", _oneway: "true" } },
            { ar: { _desired: "aao", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "abh", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "abv", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "acm", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "acq", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "acw", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "acx", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "acy", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "adf", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "aeb", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "aec", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "afb", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ajp", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "apc", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "apd", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "arq", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ars", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ary", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "arz", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "auz", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "avl", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ayh", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ayl", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ayn", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ayp", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "bbz", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "pga", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "shu", _distance: "10", _oneway: "true" } },
            { ar: { _desired: "ssh", _distance: "10", _oneway: "true" } },
            { az: { _desired: "azb", _distance: "10", _oneway: "true" } },
            { et: { _desired: "vro", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "ffm", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fub", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fue", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fuf", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fuh", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fui", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fuq", _distance: "10", _oneway: "true" } },
            { ff: { _desired: "fuv", _distance: "10", _oneway: "true" } },
            { gn: { _desired: "gnw", _distance: "10", _oneway: "true" } },
            { gn: { _desired: "gui", _distance: "10", _oneway: "true" } },
            { gn: { _desired: "gun", _distance: "10", _oneway: "true" } },
            { gn: { _desired: "nhd", _distance: "10", _oneway: "true" } },
            { iu: { _desired: "ikt", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "enb", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "eyo", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "niq", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "oki", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "pko", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "sgc", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "tec", _distance: "10", _oneway: "true" } },
            { kln: { _desired: "tuy", _distance: "10", _oneway: "true" } },
            { kok: { _desired: "gom", _distance: "10", _oneway: "true" } },
            { kpe: { _desired: "gkp", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "ida", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lkb", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lko", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lks", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lri", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lrm", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lsm", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lto", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lts", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "lwg", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "nle", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "nyd", _distance: "10", _oneway: "true" } },
            { luy: { _desired: "rag", _distance: "10", _oneway: "true" } },
            { lv: { _desired: "ltg", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "bhr", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "bjq", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "bmm", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "bzc", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "msh", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "skg", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "tdx", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "tkg", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "txy", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "xmv", _distance: "10", _oneway: "true" } },
            { mg: { _desired: "xmw", _distance: "10", _oneway: "true" } },
            { mn: { _desired: "mvf", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "bjn", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "btj", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "bve", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "bvu", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "coa", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "dup", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "hji", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "id", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "jak", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "jax", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "kvb", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "kvr", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "kxd", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "lce", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "lcf", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "liw", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "max", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "meo", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "mfa", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "mfb", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "min", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "mqg", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "msi", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "mui", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "orn", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "ors", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "pel", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "pse", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "tmw", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "urk", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "vkk", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "vkt", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "xmm", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "zlm", _distance: "10", _oneway: "true" } },
            { ms: { _desired: "zmi", _distance: "10", _oneway: "true" } },
            { ne: { _desired: "dty", _distance: "10", _oneway: "true" } },
            { om: { _desired: "gax", _distance: "10", _oneway: "true" } },
            { om: { _desired: "hae", _distance: "10", _oneway: "true" } },
            { om: { _desired: "orc", _distance: "10", _oneway: "true" } },
            { or: { _desired: "spv", _distance: "10", _oneway: "true" } },
            { ps: { _desired: "pbt", _distance: "10", _oneway: "true" } },
            { ps: { _desired: "pst", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qub", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qud", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "quf", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qug", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "quh", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "quk", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qul", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qup", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qur", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qus", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "quw", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qux", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "quy", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qva", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvc", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qve", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvh", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvi", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvj", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvl", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvm", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvn", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvo", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvp", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvs", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvw", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qvz", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qwa", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qwc", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qwh", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qws", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxa", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxc", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxh", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxl", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxn", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxo", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxp", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxr", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxt", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxu", _distance: "10", _oneway: "true" } },
            { qu: { _desired: "qxw", _distance: "10", _oneway: "true" } },
            { sc: { _desired: "sdc", _distance: "10", _oneway: "true" } },
            { sc: { _desired: "sdn", _distance: "10", _oneway: "true" } },
            { sc: { _desired: "sro", _distance: "10", _oneway: "true" } },
            { sq: { _desired: "aae", _distance: "10", _oneway: "true" } },
            { sq: { _desired: "aat", _distance: "10", _oneway: "true" } },
            { sq: { _desired: "aln", _distance: "10", _oneway: "true" } },
            { syr: { _desired: "aii", _distance: "10", _oneway: "true" } },
            { uz: { _desired: "uzs", _distance: "10", _oneway: "true" } },
            { yi: { _desired: "yih", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "cdo", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "cjy", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "cpx", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "czh", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "czo", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "gan", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "hak", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "hsn", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "lzh", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "mnp", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "nan", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "wuu", _distance: "10", _oneway: "true" } },
            { zh: { _desired: "yue", _distance: "10", _oneway: "true" } },
            { "*": { _desired: "*", _distance: "80" } },
            {
              "en-Latn": {
                _desired: "am-Ethi",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "ru-Cyrl": {
                _desired: "az-Latn",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "bn-Beng",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "zh-Hans": {
                _desired: "bo-Tibt",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "ru-Cyrl": {
                _desired: "hy-Armn",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "ka-Geor",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "km-Khmr",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "kn-Knda",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "lo-Laoo",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "ml-Mlym",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "my-Mymr",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "ne-Deva",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "or-Orya",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "pa-Guru",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "ps-Arab",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "sd-Arab",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "si-Sinh",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "ta-Taml",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "te-Telu",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "ti-Ethi",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "ru-Cyrl": {
                _desired: "tk-Latn",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "ur-Arab",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "ru-Cyrl": {
                _desired: "uz-Latn",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "en-Latn": {
                _desired: "yi-Hebr",
                _distance: "10",
                _oneway: "true",
              },
            },
            { "sr-Cyrl": { _desired: "sr-Latn", _distance: "5" } },
            {
              "zh-Hans": {
                _desired: "za-Latn",
                _distance: "10",
                _oneway: "true",
              },
            },
            {
              "zh-Hans": {
                _desired: "zh-Hani",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "zh-Hant": {
                _desired: "zh-Hani",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "ar-Arab": {
                _desired: "ar-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "bn-Beng": {
                _desired: "bn-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "gu-Gujr": {
                _desired: "gu-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "hi-Deva": {
                _desired: "hi-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "kn-Knda": {
                _desired: "kn-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "ml-Mlym": {
                _desired: "ml-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "mr-Deva": {
                _desired: "mr-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "ta-Taml": {
                _desired: "ta-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "te-Telu": {
                _desired: "te-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "zh-Hans": {
                _desired: "zh-Latn",
                _distance: "20",
                _oneway: "true",
              },
            },
            {
              "ja-Jpan": {
                _desired: "ja-Latn",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ja-Jpan": {
                _desired: "ja-Hani",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ja-Jpan": {
                _desired: "ja-Hira",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ja-Jpan": {
                _desired: "ja-Kana",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ja-Jpan": {
                _desired: "ja-Hrkt",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ja-Hrkt": {
                _desired: "ja-Hira",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ja-Hrkt": {
                _desired: "ja-Kana",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ko-Kore": {
                _desired: "ko-Hani",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ko-Kore": {
                _desired: "ko-Hang",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ko-Kore": {
                _desired: "ko-Jamo",
                _distance: "5",
                _oneway: "true",
              },
            },
            {
              "ko-Hang": {
                _desired: "ko-Jamo",
                _distance: "5",
                _oneway: "true",
              },
            },
            { "*-*": { _desired: "*-*", _distance: "50" } },
            { "ar-*-$maghreb": { _desired: "ar-*-$maghreb", _distance: "4" } },
            {
              "ar-*-$!maghreb": { _desired: "ar-*-$!maghreb", _distance: "4" },
            },
            { "ar-*-*": { _desired: "ar-*-*", _distance: "5" } },
            { "en-*-$enUS": { _desired: "en-*-$enUS", _distance: "4" } },
            { "en-*-GB": { _desired: "en-*-$!enUS", _distance: "3" } },
            { "en-*-$!enUS": { _desired: "en-*-$!enUS", _distance: "4" } },
            { "en-*-*": { _desired: "en-*-*", _distance: "5" } },
            {
              "es-*-$americas": { _desired: "es-*-$americas", _distance: "4" },
            },
            {
              "es-*-$!americas": {
                _desired: "es-*-$!americas",
                _distance: "4",
              },
            },
            { "es-*-*": { _desired: "es-*-*", _distance: "5" } },
            {
              "pt-*-$americas": { _desired: "pt-*-$americas", _distance: "4" },
            },
            {
              "pt-*-$!americas": {
                _desired: "pt-*-$!americas",
                _distance: "4",
              },
            },
            { "pt-*-*": { _desired: "pt-*-*", _distance: "5" } },
            {
              "zh-Hant-$cnsar": { _desired: "zh-Hant-$cnsar", _distance: "4" },
            },
            {
              "zh-Hant-$!cnsar": {
                _desired: "zh-Hant-$!cnsar",
                _distance: "4",
              },
            },
            { "zh-Hant-*": { _desired: "zh-Hant-*", _distance: "5" } },
            { "*-*-*": { _desired: "*-*-*", _distance: "4" } },
          ],
        },
        u = {
          "001": [
            "001",
            "001-status-grouping",
            "002",
            "005",
            "009",
            "011",
            "013",
            "014",
            "015",
            "017",
            "018",
            "019",
            "021",
            "029",
            "030",
            "034",
            "035",
            "039",
            "053",
            "054",
            "057",
            "061",
            "142",
            "143",
            "145",
            "150",
            "151",
            "154",
            "155",
            "AC",
            "AD",
            "AE",
            "AF",
            "AG",
            "AI",
            "AL",
            "AM",
            "AO",
            "AQ",
            "AR",
            "AS",
            "AT",
            "AU",
            "AW",
            "AX",
            "AZ",
            "BA",
            "BB",
            "BD",
            "BE",
            "BF",
            "BG",
            "BH",
            "BI",
            "BJ",
            "BL",
            "BM",
            "BN",
            "BO",
            "BQ",
            "BR",
            "BS",
            "BT",
            "BV",
            "BW",
            "BY",
            "BZ",
            "CA",
            "CC",
            "CD",
            "CF",
            "CG",
            "CH",
            "CI",
            "CK",
            "CL",
            "CM",
            "CN",
            "CO",
            "CP",
            "CQ",
            "CR",
            "CU",
            "CV",
            "CW",
            "CX",
            "CY",
            "CZ",
            "DE",
            "DG",
            "DJ",
            "DK",
            "DM",
            "DO",
            "DZ",
            "EA",
            "EC",
            "EE",
            "EG",
            "EH",
            "ER",
            "ES",
            "ET",
            "EU",
            "EZ",
            "FI",
            "FJ",
            "FK",
            "FM",
            "FO",
            "FR",
            "GA",
            "GB",
            "GD",
            "GE",
            "GF",
            "GG",
            "GH",
            "GI",
            "GL",
            "GM",
            "GN",
            "GP",
            "GQ",
            "GR",
            "GS",
            "GT",
            "GU",
            "GW",
            "GY",
            "HK",
            "HM",
            "HN",
            "HR",
            "HT",
            "HU",
            "IC",
            "ID",
            "IE",
            "IL",
            "IM",
            "IN",
            "IO",
            "IQ",
            "IR",
            "IS",
            "IT",
            "JE",
            "JM",
            "JO",
            "JP",
            "KE",
            "KG",
            "KH",
            "KI",
            "KM",
            "KN",
            "KP",
            "KR",
            "KW",
            "KY",
            "KZ",
            "LA",
            "LB",
            "LC",
            "LI",
            "LK",
            "LR",
            "LS",
            "LT",
            "LU",
            "LV",
            "LY",
            "MA",
            "MC",
            "MD",
            "ME",
            "MF",
            "MG",
            "MH",
            "MK",
            "ML",
            "MM",
            "MN",
            "MO",
            "MP",
            "MQ",
            "MR",
            "MS",
            "MT",
            "MU",
            "MV",
            "MW",
            "MX",
            "MY",
            "MZ",
            "NA",
            "NC",
            "NE",
            "NF",
            "NG",
            "NI",
            "NL",
            "NO",
            "NP",
            "NR",
            "NU",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PF",
            "PG",
            "PH",
            "PK",
            "PL",
            "PM",
            "PN",
            "PR",
            "PS",
            "PT",
            "PW",
            "PY",
            "QA",
            "QO",
            "RE",
            "RO",
            "RS",
            "RU",
            "RW",
            "SA",
            "SB",
            "SC",
            "SD",
            "SE",
            "SG",
            "SH",
            "SI",
            "SJ",
            "SK",
            "SL",
            "SM",
            "SN",
            "SO",
            "SR",
            "SS",
            "ST",
            "SV",
            "SX",
            "SY",
            "SZ",
            "TA",
            "TC",
            "TD",
            "TF",
            "TG",
            "TH",
            "TJ",
            "TK",
            "TL",
            "TM",
            "TN",
            "TO",
            "TR",
            "TT",
            "TV",
            "TW",
            "TZ",
            "UA",
            "UG",
            "UM",
            "UN",
            "US",
            "UY",
            "UZ",
            "VA",
            "VC",
            "VE",
            "VG",
            "VI",
            "VN",
            "VU",
            "WF",
            "WS",
            "XK",
            "YE",
            "YT",
            "ZA",
            "ZM",
            "ZW",
          ],
          "002": [
            "002",
            "002-status-grouping",
            "011",
            "014",
            "015",
            "017",
            "018",
            "202",
            "AO",
            "BF",
            "BI",
            "BJ",
            "BW",
            "CD",
            "CF",
            "CG",
            "CI",
            "CM",
            "CV",
            "DJ",
            "DZ",
            "EA",
            "EG",
            "EH",
            "ER",
            "ET",
            "GA",
            "GH",
            "GM",
            "GN",
            "GQ",
            "GW",
            "IC",
            "IO",
            "KE",
            "KM",
            "LR",
            "LS",
            "LY",
            "MA",
            "MG",
            "ML",
            "MR",
            "MU",
            "MW",
            "MZ",
            "NA",
            "NE",
            "NG",
            "RE",
            "RW",
            "SC",
            "SD",
            "SH",
            "SL",
            "SN",
            "SO",
            "SS",
            "ST",
            "SZ",
            "TD",
            "TF",
            "TG",
            "TN",
            "TZ",
            "UG",
            "YT",
            "ZA",
            "ZM",
            "ZW",
          ],
          "003": [
            "003",
            "013",
            "021",
            "029",
            "AG",
            "AI",
            "AW",
            "BB",
            "BL",
            "BM",
            "BQ",
            "BS",
            "BZ",
            "CA",
            "CR",
            "CU",
            "CW",
            "DM",
            "DO",
            "GD",
            "GL",
            "GP",
            "GT",
            "HN",
            "HT",
            "JM",
            "KN",
            "KY",
            "LC",
            "MF",
            "MQ",
            "MS",
            "MX",
            "NI",
            "PA",
            "PM",
            "PR",
            "SV",
            "SX",
            "TC",
            "TT",
            "US",
            "VC",
            "VG",
            "VI",
          ],
          "005": [
            "005",
            "AR",
            "BO",
            "BR",
            "BV",
            "CL",
            "CO",
            "EC",
            "FK",
            "GF",
            "GS",
            "GY",
            "PE",
            "PY",
            "SR",
            "UY",
            "VE",
          ],
          "009": [
            "009",
            "053",
            "054",
            "057",
            "061",
            "AC",
            "AQ",
            "AS",
            "AU",
            "CC",
            "CK",
            "CP",
            "CX",
            "DG",
            "FJ",
            "FM",
            "GU",
            "HM",
            "KI",
            "MH",
            "MP",
            "NC",
            "NF",
            "NR",
            "NU",
            "NZ",
            "PF",
            "PG",
            "PN",
            "PW",
            "QO",
            "SB",
            "TA",
            "TK",
            "TO",
            "TV",
            "UM",
            "VU",
            "WF",
            "WS",
          ],
          "011": [
            "011",
            "BF",
            "BJ",
            "CI",
            "CV",
            "GH",
            "GM",
            "GN",
            "GW",
            "LR",
            "ML",
            "MR",
            "NE",
            "NG",
            "SH",
            "SL",
            "SN",
            "TG",
          ],
          "013": ["013", "BZ", "CR", "GT", "HN", "MX", "NI", "PA", "SV"],
          "014": [
            "014",
            "BI",
            "DJ",
            "ER",
            "ET",
            "IO",
            "KE",
            "KM",
            "MG",
            "MU",
            "MW",
            "MZ",
            "RE",
            "RW",
            "SC",
            "SO",
            "SS",
            "TF",
            "TZ",
            "UG",
            "YT",
            "ZM",
            "ZW",
          ],
          "015": ["015", "DZ", "EA", "EG", "EH", "IC", "LY", "MA", "SD", "TN"],
          "017": ["017", "AO", "CD", "CF", "CG", "CM", "GA", "GQ", "ST", "TD"],
          "018": ["018", "BW", "LS", "NA", "SZ", "ZA"],
          "019": [
            "003",
            "005",
            "013",
            "019",
            "019-status-grouping",
            "021",
            "029",
            "419",
            "AG",
            "AI",
            "AR",
            "AW",
            "BB",
            "BL",
            "BM",
            "BO",
            "BQ",
            "BR",
            "BS",
            "BV",
            "BZ",
            "CA",
            "CL",
            "CO",
            "CR",
            "CU",
            "CW",
            "DM",
            "DO",
            "EC",
            "FK",
            "GD",
            "GF",
            "GL",
            "GP",
            "GS",
            "GT",
            "GY",
            "HN",
            "HT",
            "JM",
            "KN",
            "KY",
            "LC",
            "MF",
            "MQ",
            "MS",
            "MX",
            "NI",
            "PA",
            "PE",
            "PM",
            "PR",
            "PY",
            "SR",
            "SV",
            "SX",
            "TC",
            "TT",
            "US",
            "UY",
            "VC",
            "VE",
            "VG",
            "VI",
          ],
          "021": ["021", "BM", "CA", "GL", "PM", "US"],
          "029": [
            "029",
            "AG",
            "AI",
            "AW",
            "BB",
            "BL",
            "BQ",
            "BS",
            "CU",
            "CW",
            "DM",
            "DO",
            "GD",
            "GP",
            "HT",
            "JM",
            "KN",
            "KY",
            "LC",
            "MF",
            "MQ",
            "MS",
            "PR",
            "SX",
            "TC",
            "TT",
            "VC",
            "VG",
            "VI",
          ],
          "030": ["030", "CN", "HK", "JP", "KP", "KR", "MN", "MO", "TW"],
          "034": ["034", "AF", "BD", "BT", "IN", "IR", "LK", "MV", "NP", "PK"],
          "035": [
            "035",
            "BN",
            "ID",
            "KH",
            "LA",
            "MM",
            "MY",
            "PH",
            "SG",
            "TH",
            "TL",
            "VN",
          ],
          "039": [
            "039",
            "AD",
            "AL",
            "BA",
            "ES",
            "GI",
            "GR",
            "HR",
            "IT",
            "ME",
            "MK",
            "MT",
            "PT",
            "RS",
            "SI",
            "SM",
            "VA",
            "XK",
          ],
          "053": ["053", "AU", "CC", "CX", "HM", "NF", "NZ"],
          "054": ["054", "FJ", "NC", "PG", "SB", "VU"],
          "057": ["057", "FM", "GU", "KI", "MH", "MP", "NR", "PW", "UM"],
          "061": [
            "061",
            "AS",
            "CK",
            "NU",
            "PF",
            "PN",
            "TK",
            "TO",
            "TV",
            "WF",
            "WS",
          ],
          142: [
            "030",
            "034",
            "035",
            "142",
            "143",
            "145",
            "AE",
            "AF",
            "AM",
            "AZ",
            "BD",
            "BH",
            "BN",
            "BT",
            "CN",
            "CY",
            "GE",
            "HK",
            "ID",
            "IL",
            "IN",
            "IQ",
            "IR",
            "JO",
            "JP",
            "KG",
            "KH",
            "KP",
            "KR",
            "KW",
            "KZ",
            "LA",
            "LB",
            "LK",
            "MM",
            "MN",
            "MO",
            "MV",
            "MY",
            "NP",
            "OM",
            "PH",
            "PK",
            "PS",
            "QA",
            "SA",
            "SG",
            "SY",
            "TH",
            "TJ",
            "TL",
            "TM",
            "TR",
            "TW",
            "UZ",
            "VN",
            "YE",
          ],
          143: ["143", "KG", "KZ", "TJ", "TM", "UZ"],
          145: [
            "145",
            "AE",
            "AM",
            "AZ",
            "BH",
            "CY",
            "GE",
            "IL",
            "IQ",
            "JO",
            "KW",
            "LB",
            "OM",
            "PS",
            "QA",
            "SA",
            "SY",
            "TR",
            "YE",
          ],
          150: [
            "039",
            "150",
            "151",
            "154",
            "155",
            "AD",
            "AL",
            "AT",
            "AX",
            "BA",
            "BE",
            "BG",
            "BY",
            "CH",
            "CQ",
            "CZ",
            "DE",
            "DK",
            "EE",
            "ES",
            "FI",
            "FO",
            "FR",
            "GB",
            "GG",
            "GI",
            "GR",
            "HR",
            "HU",
            "IE",
            "IM",
            "IS",
            "IT",
            "JE",
            "LI",
            "LT",
            "LU",
            "LV",
            "MC",
            "MD",
            "ME",
            "MK",
            "MT",
            "NL",
            "NO",
            "PL",
            "PT",
            "RO",
            "RS",
            "RU",
            "SE",
            "SI",
            "SJ",
            "SK",
            "SM",
            "UA",
            "VA",
            "XK",
          ],
          151: [
            "151",
            "BG",
            "BY",
            "CZ",
            "HU",
            "MD",
            "PL",
            "RO",
            "RU",
            "SK",
            "UA",
          ],
          154: [
            "154",
            "AX",
            "CQ",
            "DK",
            "EE",
            "FI",
            "FO",
            "GB",
            "GG",
            "IE",
            "IM",
            "IS",
            "JE",
            "LT",
            "LV",
            "NO",
            "SE",
            "SJ",
          ],
          155: ["155", "AT", "BE", "CH", "DE", "FR", "LI", "LU", "MC", "NL"],
          202: [
            "011",
            "014",
            "017",
            "018",
            "202",
            "AO",
            "BF",
            "BI",
            "BJ",
            "BW",
            "CD",
            "CF",
            "CG",
            "CI",
            "CM",
            "CV",
            "DJ",
            "ER",
            "ET",
            "GA",
            "GH",
            "GM",
            "GN",
            "GQ",
            "GW",
            "IO",
            "KE",
            "KM",
            "LR",
            "LS",
            "MG",
            "ML",
            "MR",
            "MU",
            "MW",
            "MZ",
            "NA",
            "NE",
            "NG",
            "RE",
            "RW",
            "SC",
            "SH",
            "SL",
            "SN",
            "SO",
            "SS",
            "ST",
            "SZ",
            "TD",
            "TF",
            "TG",
            "TZ",
            "UG",
            "YT",
            "ZA",
            "ZM",
            "ZW",
          ],
          419: [
            "005",
            "013",
            "029",
            "419",
            "AG",
            "AI",
            "AR",
            "AW",
            "BB",
            "BL",
            "BO",
            "BQ",
            "BR",
            "BS",
            "BV",
            "BZ",
            "CL",
            "CO",
            "CR",
            "CU",
            "CW",
            "DM",
            "DO",
            "EC",
            "FK",
            "GD",
            "GF",
            "GP",
            "GS",
            "GT",
            "GY",
            "HN",
            "HT",
            "JM",
            "KN",
            "KY",
            "LC",
            "MF",
            "MQ",
            "MS",
            "MX",
            "NI",
            "PA",
            "PE",
            "PR",
            "PY",
            "SR",
            "SV",
            "SX",
            "TC",
            "TT",
            "UY",
            "VC",
            "VE",
            "VG",
            "VI",
          ],
          EU: [
            "AT",
            "BE",
            "BG",
            "CY",
            "CZ",
            "DE",
            "DK",
            "EE",
            "ES",
            "EU",
            "FI",
            "FR",
            "GR",
            "HR",
            "HU",
            "IE",
            "IT",
            "LT",
            "LU",
            "LV",
            "MT",
            "NL",
            "PL",
            "PT",
            "RO",
            "SE",
            "SI",
            "SK",
          ],
          EZ: [
            "AT",
            "BE",
            "CY",
            "DE",
            "EE",
            "ES",
            "EZ",
            "FI",
            "FR",
            "GR",
            "IE",
            "IT",
            "LT",
            "LU",
            "LV",
            "MT",
            "NL",
            "PT",
            "SI",
            "SK",
          ],
          QO: ["AC", "AQ", "CP", "DG", "QO", "TA"],
          UN: [
            "AD",
            "AE",
            "AF",
            "AG",
            "AL",
            "AM",
            "AO",
            "AR",
            "AT",
            "AU",
            "AZ",
            "BA",
            "BB",
            "BD",
            "BE",
            "BF",
            "BG",
            "BH",
            "BI",
            "BJ",
            "BN",
            "BO",
            "BR",
            "BS",
            "BT",
            "BW",
            "BY",
            "BZ",
            "CA",
            "CD",
            "CF",
            "CG",
            "CH",
            "CI",
            "CL",
            "CM",
            "CN",
            "CO",
            "CR",
            "CU",
            "CV",
            "CY",
            "CZ",
            "DE",
            "DJ",
            "DK",
            "DM",
            "DO",
            "DZ",
            "EC",
            "EE",
            "EG",
            "ER",
            "ES",
            "ET",
            "FI",
            "FJ",
            "FM",
            "FR",
            "GA",
            "GB",
            "GD",
            "GE",
            "GH",
            "GM",
            "GN",
            "GQ",
            "GR",
            "GT",
            "GW",
            "GY",
            "HN",
            "HR",
            "HT",
            "HU",
            "ID",
            "IE",
            "IL",
            "IN",
            "IQ",
            "IR",
            "IS",
            "IT",
            "JM",
            "JO",
            "JP",
            "KE",
            "KG",
            "KH",
            "KI",
            "KM",
            "KN",
            "KP",
            "KR",
            "KW",
            "KZ",
            "LA",
            "LB",
            "LC",
            "LI",
            "LK",
            "LR",
            "LS",
            "LT",
            "LU",
            "LV",
            "LY",
            "MA",
            "MC",
            "MD",
            "ME",
            "MG",
            "MH",
            "MK",
            "ML",
            "MM",
            "MN",
            "MR",
            "MT",
            "MU",
            "MV",
            "MW",
            "MX",
            "MY",
            "MZ",
            "NA",
            "NE",
            "NG",
            "NI",
            "NL",
            "NO",
            "NP",
            "NR",
            "NZ",
            "OM",
            "PA",
            "PE",
            "PG",
            "PH",
            "PK",
            "PL",
            "PT",
            "PW",
            "PY",
            "QA",
            "RO",
            "RS",
            "RU",
            "RW",
            "SA",
            "SB",
            "SC",
            "SD",
            "SE",
            "SG",
            "SI",
            "SK",
            "SL",
            "SM",
            "SN",
            "SO",
            "SR",
            "SS",
            "ST",
            "SV",
            "SY",
            "SZ",
            "TD",
            "TG",
            "TH",
            "TJ",
            "TL",
            "TM",
            "TN",
            "TO",
            "TR",
            "TT",
            "TV",
            "TZ",
            "UA",
            "UG",
            "UN",
            "US",
            "UY",
            "UZ",
            "VC",
            "VE",
            "VN",
            "VU",
            "WS",
            "YE",
            "ZA",
            "ZM",
            "ZW",
          ],
        },
        o = /-u(?:-[0-9a-z]{2,8})+/gi;
      function s(e, t, n = Error) {
        if (!e) throw new n(t);
      }
      function l(e, t, n) {
        let [r, i, a] = t.split("-"),
          o = !0;
        if (a && "$" === a[0]) {
          let t = "!" !== a[1],
            r = (t ? n[a.slice(1)] : n[a.slice(2)])
              .map((e) => u[e] || [e])
              .reduce((e, t) => [...e, ...t], []);
          o &&= r.indexOf(e.region || "") > -1 == t;
        } else o &&= !e.region || "*" === a || a === e.region;
        return (
          (o &&= !e.script || "*" === i || i === e.script),
          (o &&= !e.language || "*" === r || r === e.language)
        );
      }
      function d(e) {
        return [e.language, e.script, e.region].filter(Boolean).join("-");
      }
      function c(e, t, n) {
        for (let r of n.matches) {
          let i =
            l(e, r.desired, n.matchVariables) &&
            l(t, r.supported, n.matchVariables);
          if (
            (r.oneway ||
              i ||
              (i =
                l(e, r.supported, n.matchVariables) &&
                l(t, r.desired, n.matchVariables)),
            i)
          ) {
            let i = 10 * r.distance;
            if (
              n.paradigmLocales.indexOf(d(e)) > -1 !=
              n.paradigmLocales.indexOf(d(t)) > -1
            )
              return i - 1;
            return i;
          }
        }
        throw Error("No matching distance found");
      }
      let f = (0, i.B)(
          function (e, t) {
            let n = new Intl.Locale(e).maximize(),
              i = new Intl.Locale(t).maximize(),
              u = {
                language: n.language,
                script: n.script || "",
                region: n.region || "",
              },
              o = {
                language: i.language,
                script: i.script || "",
                region: i.region || "",
              },
              s = 0,
              l = (function () {
                if (!r) {
                  let e =
                      a["written-new"]["0"]?.paradigmLocales?._locales.split(
                        " ",
                      ),
                    t = a["written-new"].slice(1, 5);
                  r = {
                    matches: a["written-new"].slice(5).map((e) => {
                      let t = Object.keys(e)[0],
                        n = e[t];
                      return {
                        supported: t,
                        desired: n._desired,
                        distance: +n._distance,
                        oneway: "true" === n.oneway,
                      };
                    }, {}),
                    matchVariables: t.reduce((e, t) => {
                      let n = Object.keys(t)[0],
                        r = t[n];
                      return (e[n.slice(1)] = r._value.split("+")), e;
                    }, {}),
                    paradigmLocales: [
                      ...e,
                      ...e.map((e) =>
                        new Intl.Locale(e.replace(/_/g, "-"))
                          .maximize()
                          .toString(),
                      ),
                    ],
                  };
                }
                return r;
              })();
            return (
              u.language !== o.language &&
                (s += c(
                  { language: n.language, script: "", region: "" },
                  { language: i.language, script: "", region: "" },
                  l,
                )),
              u.script !== o.script &&
                (s += c(
                  { language: n.language, script: u.script, region: "" },
                  { language: i.language, script: o.script, region: "" },
                  l,
                )),
              u.region !== o.region && (s += c(u, o, l)),
              s
            );
          },
          { serializer: (e) => `${e[0]}|${e[1]}` },
        ),
        h = new WeakMap();
      function p(e, t, n = 838) {
        let r = 1 / 0,
          i = { matchedDesiredLocale: "", distances: {} },
          a = h.get(t);
        a ||
          ((a = t.map((e) => {
            try {
              return Intl.getCanonicalLocales([e])[0] || e;
            } catch {
              return e;
            }
          })),
          h.set(t, a));
        let u = new Set(a);
        for (let t = 0; t < e.length; t++) {
          let n = e[t];
          if (u.has(n)) {
            let e = 0 + 40 * t;
            if (
              ((i.distances[n] = { [n]: e }),
              e < r &&
                ((r = e),
                (i.matchedDesiredLocale = n),
                (i.matchedSupportedLocale = n)),
              0 === t)
            )
              return i;
          }
        }
        for (let t = 0; t < e.length; t++) {
          let n = e[t];
          try {
            let e = new Intl.Locale(n).maximize().toString();
            if (e !== n) {
              let a = (function (e) {
                let t = [],
                  n = e;
                for (; n; ) {
                  t.push(n);
                  let e = n.lastIndexOf("-");
                  if (-1 === e) break;
                  n = n.substring(0, e);
                }
                return t;
              })(e);
              for (let o = 0; o < a.length; o++) {
                let s = a[o];
                if (s !== n && u.has(s)) {
                  let a;
                  try {
                    a =
                      new Intl.Locale(s).maximize().toString() === e
                        ? 0 + 40 * t
                        : 10 * o + 40 * t;
                  } catch {
                    a = 10 * o + 40 * t;
                  }
                  i.distances[n] || (i.distances[n] = {}),
                    (i.distances[n][s] = a),
                    a < r &&
                      ((r = a),
                      (i.matchedDesiredLocale = n),
                      (i.matchedSupportedLocale = s));
                  break;
                }
              }
            }
          } catch {}
        }
        return (
          (i.matchedSupportedLocale && 0 === r) ||
            (e.forEach((e, n) => {
              i.distances[e] || (i.distances[e] = {}),
                a.forEach((a, u) => {
                  let o = t[u],
                    s = f(e, a) + 0 + 40 * n;
                  (i.distances[e][o] = s),
                    s < r &&
                      ((r = s),
                      (i.matchedDesiredLocale = e),
                      (i.matchedSupportedLocale = o));
                });
            }),
            r >= n &&
              ((i.matchedDesiredLocale = void 0),
              (i.matchedSupportedLocale = void 0))),
          i
        );
      }
    },
  },
]);
//# sourceMappingURL=88394.df8f339525bebcb8.js.map
