"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["47674"],
  {
    305522: function (n, t, e) {
      e.a(n, async function (n, r) {
        try {
          e.r(t),
            e.d(t, {
              __wbindgen_rethrow: function () {
                return u.nD;
              },
              __wbindgen_string_new: function () {
                return u.h4;
              },
              crop_gif: function () {
                return u.oW;
              },
            });
          var u = e(463281),
            i = n([u]);
          (u = (i.then ? (await i)() : i)[0]), r();
        } catch (n) {
          r(n);
        }
      });
    },
    463281: function (n, t, e) {
      e.a(n, async function (r, u) {
        try {
          e.d(t, {
            h4: function () {
              return _;
            },
            nD: function () {
              return d;
            },
            oW: function () {
              return f;
            },
          });
          var i = e(612580);
          n = e.hmd(n);
          var a = r([i]);
          i = (a.then ? (await a)() : a)[0];
          let l = new (
            "undefined" == typeof TextDecoder
              ? (0, n.require)("util").TextDecoder
              : TextDecoder
          )("utf-8", { ignoreBOM: !0, fatal: !0 });
          l.decode();
          let h = null;
          function o() {
            return (
              (null === h || h.buffer !== i.memory.buffer) &&
                (h = new Uint8Array(i.memory.buffer)),
              h
            );
          }
          let w = Array(32).fill(void 0);
          w.push(void 0, null, !0, !1);
          let s = w.length,
            b = 0,
            g = null;
          function c() {
            return (
              (null === g || g.buffer !== i.memory.buffer) &&
                (g = new Int32Array(i.memory.buffer)),
              g
            );
          }
          function f(n, t, e, r, u) {
            try {
              let s = i.__wbindgen_add_to_stack_pointer(-16);
              var a,
                f,
                _ = (function (n, t) {
                  let e = t(1 * n.length);
                  return o().set(n, e / 1), (b = n.length), e;
                })(n, i.__wbindgen_malloc),
                d = b;
              i.crop_gif(s, _, d, t, e, r, u);
              var l = c()[s / 4 + 0],
                h = c()[s / 4 + 1];
              var w = ((a = l),
              (f = h),
              o().subarray(a / 1, a / 1 + f)).slice();
              return i.__wbindgen_free(l, 1 * h), w;
            } finally {
              i.__wbindgen_add_to_stack_pointer(16);
            }
          }
          function _(n, t) {
            var e,
              r,
              u = ((e = n), (r = t), l.decode(o().subarray(e, e + r)));
            return (function (n) {
              s === w.length && w.push(w.length + 1);
              let t = s;
              return (s = w[t]), (w[t] = n), t;
            })(u);
          }
          function d(n) {
            throw (function (n) {
              var t;
              let e = w[n];
              return (t = n) < 36 || ((w[t] = s), (s = t)), e;
            })(n);
          }
          u();
        } catch (n) {
          u(n);
        }
      });
    },
    612580: function (n, t, e) {
      e.a(
        n,
        async function (r, u) {
          try {
            var i = e("463281"),
              a = r([i]),
              [i] = a.then ? (await a)() : a;
            await e.v(t, n.id, "aa18eee0c2e00045", {
              "./index_bg.js": {
                __wbindgen_string_new: i.h4,
                __wbindgen_rethrow: i.nD,
              },
            }),
              u();
          } catch (n) {
            u(n);
          }
        },
        1,
      );
    },
  },
]);
//# sourceMappingURL=6e8c124ef0487e50b674.js.map
