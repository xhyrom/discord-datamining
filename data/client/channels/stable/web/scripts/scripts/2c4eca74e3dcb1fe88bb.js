"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["36034"],
  {
    963458: function (e, t, r) {
      var n = r(192291),
        i = r(22092),
        o = n.aTypedArrayConstructor;
      (0, n.exportTypedArrayStaticMethod)(
        "of",
        function () {
          for (var e = 0, t = arguments.length, r = new (o(this))(t); t > e; )
            r[e] = arguments[e++];
          return r;
        },
        i,
      );
    },
    571826: function (e, t, r) {
      r.d(t, {
        DF: function () {
          return y;
        },
        KA: function () {
          return w;
        },
        M1: function () {
          return f;
        },
        PM: function () {
          return h;
        },
        Pn: function () {
          return E;
        },
        Rq: function () {
          return s;
        },
        ih: function () {
          return g;
        },
        s$: function () {
          return d;
        },
        sN: function () {
          return c;
        },
      });
      var n = r(367907),
        i = r(221292),
        o = r(592125),
        a = r(626135),
        l = r(981631);
      function u(e) {
        var t;
        return null === (t = o.Z.getChannel(e)) || void 0 === t
          ? void 0
          : t.guild_id;
      }
      function c(e) {
        let { channelId: t, selectedTab: r } = e;
        n.ZP.trackWithMetadata(l.rMx.RTC_PANEL_VIEWED, {
          channel_id: t,
          guild_id: u(t),
          selected_tab: r,
        });
      }
      function s(e) {
        let { channelId: t, userId: r } = e;
        n.ZP.trackWithMetadata(l.rMx.E2EE_USER_VERIFICATION_VIEWED, {
          channel_id: t,
          guild_id: u(t),
          ...(0, i.QN)({ userId: r }),
        });
      }
      function f(e) {
        let { channelId: t, userId: r, analyticsLocation: o } = e;
        n.ZP.trackWithMetadata(l.rMx.E2EE_USER_VERIFIED, {
          channel_id: t,
          guild_id: u(t),
          location: o,
          ...(0, i.QN)({ userId: r }),
        });
      }
      function d(e) {
        let { channelId: t, userId: r } = e;
        n.ZP.trackWithMetadata(l.rMx.E2EE_USER_VERIFICATION_CODE_COPIED, {
          channel_id: t,
          guild_id: u(t),
          ...(0, i.QN)({ userId: r }),
        });
      }
      function h(e) {
        let { channelId: t } = e;
        n.ZP.trackWithMetadata(l.rMx.E2EE_CALL_VERIFICATION_CODE_COPIED, {
          channel_id: t,
          guild_id: u(t),
        });
      }
      function g(e) {
        let { channelId: t } = e;
        n.ZP.trackWithMetadata(l.rMx.E2EE_STREAM_VERIFICATION_CODE_COPIED, {
          channel_id: t,
          guild_id: u(t),
        });
      }
      function y() {
        a.default.track(l.rMx.E2EE_SETTINGS_USER_DELETE);
      }
      function E() {
        a.default.track(l.rMx.E2EE_SETTINGS_DEVICE_DELETE);
      }
      function w(e) {
        a.default.track(l.rMx.E2EE_PUBLIC_KEY_MISMATCH, {
          key_version: "".concat(e),
        });
      }
    },
    301107: function (e, t, r) {
      r.d(t, {
        W: function () {
          return a;
        },
      }),
        r(411104);
      var n = r(470079),
        i = r(250683),
        o = r(253135);
      function a(e) {
        let { fingerprintBase64: t, chunkSize: r, desiredLength: a } = e,
          l = n.useMemo(() => {
            if (null == t || "" === t) return null;
            let e = i.toByteArray(t),
              n = (0, o.Dq)(e, a, r);
            if (null == n) return null;
            let l = RegExp(".{1,".concat(r, "}"), "g"),
              u = n.match(l);
            return null == u ? null : Array.from(u);
          }, [r, t, a]);
        if (null != t && "" !== t && null == l)
          throw Error(
            "[useReadableSecureFramesCode] Failed to parse base 64 code.",
          );
        return l;
      }
    },
    785792: function (e, t, r) {
      r.d(t, {
        b: function () {
          return c;
        },
      });
      var n = r(735250),
        i = r(470079),
        o = r(120356),
        a = r.n(o),
        l = r(481060),
        u = r(481022);
      function c(e) {
        let { chunks: t, columns: r, className: o } = e,
          c = i.useMemo(() => ({ "--secure-frames-columns": r }), [r]);
        return null == t
          ? (0, n.jsx)("div", {
              className: u.loading,
              children: (0, n.jsx)(l.Spinner, {}),
            })
          : (0, n.jsx)("div", {
              style: c,
              className: a()(u.code, o),
              children: t.map((e, t) =>
                (0, n.jsx)(
                  "div",
                  {
                    className: a()(u.chunk, { [u.divider]: t > r - 1 }),
                    children: (0, n.jsx)(l.Text, {
                      className: u.codeText,
                      variant: "code",
                      color: "text-normal",
                      children: e,
                    }),
                  },
                  "".concat(e, "-").concat(t),
                ),
              ),
            });
      }
    },
    190054: function (e, t, r) {
      r.d(t, {
        H: function () {
          return f;
        },
      }),
        r(47120);
      var n = r(735250),
        i = r(470079),
        o = r(120356),
        a = r.n(o),
        l = r(481060),
        u = r(572004),
        c = r(689938),
        s = r(205962);
      function f(e) {
        let { chunks: t, className: r, onCopy: o, ...f } = e,
          d = i.useMemo(() => (null == t ? void 0 : t.join(" ")), [t]),
          [h, g] = i.useState(!1),
          y = i.useCallback(() => {
            g(!0), (0, u.JG)(d), null == o || o();
          }, [o, d]),
          E = h ? l.CircleCheckIcon : l.CopyIcon;
        return (0, n.jsx)(l.Clickable, {
          className: a()(s.container, r),
          onClick: y,
          children: (0, n.jsx)(l.Tooltip, {
            text: h ? c.Z.Messages.COPIED : c.Z.Messages.COPY,
            children: (e) =>
              (0, n.jsx)(E, {
                ...f,
                ...e,
                size: "xxs",
                color: h
                  ? l.tokens.colors.TEXT_POSITIVE
                  : l.tokens.colors.INTERACTIVE_NORMAL,
              }),
          }),
        });
      }
    },
    245581: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return l;
        },
      });
      var n = r(735250);
      r(470079);
      var i = r(481060),
        o = r(313201),
        a = r(756843);
      function l(e) {
        let { transitionState: t, title: r, subtitle: l, children: u } = e,
          c = (0, o.Dt)();
        return (0, n.jsxs)(i.ModalRoot, {
          transitionState: t,
          "aria-labelledby": c,
          children: [
            (0, n.jsx)("div", {
              className: a.shieldIconContainer,
              children: (0, n.jsx)("div", {
                className: a.shieldIcon,
                children: (0, n.jsx)(i.ShieldLockIcon, {
                  size: "custom",
                  width: 55,
                  height: 55,
                  color: i.tokens.colors.HEADER_SECONDARY,
                }),
              }),
            }),
            (0, n.jsxs)(i.ModalContent, {
              className: a.content,
              children: [
                (0, n.jsx)(i.Heading, {
                  className: a.title,
                  variant: "heading-lg/bold",
                  color: "header-primary",
                  children: r,
                }),
                (0, n.jsx)(i.Text, {
                  className: a.subtitle,
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: l,
                }),
                u,
              ],
            }),
          ],
        });
      }
    },
    438882: function (e, t, r) {
      r.d(t, {
        D: function () {
          return n;
        },
      }),
        r(411104);
      function n(e, t, r) {
        if (e.byteLength < t)
          throw Error(
            "data.byteLength must be greater than or equal to desiredLength",
          );
        if (t % r != 0)
          throw Error("desiredLength must be a multiple of groupSize");
        if (r > 8)
          throw Error("groupSize must be less than or equal to ".concat(8));
        let n = BigInt(10 ** r),
          i = "";
        for (let o = 0; o < t; o += r) {
          let t = BigInt(0);
          for (let n = r; n > 0; --n) t = (t << 8n) | BigInt(e[o + (r - n)]);
          (t %= n), (i += t.toString().padStart(r, "0"));
        }
        return i;
      }
    },
    309651: function (e, t, r) {
      r.d(t, {
        x: function () {
          return n;
        },
      }),
        r(411104),
        r(518263),
        r(970173),
        r(520712),
        r(268111),
        r(941497),
        r(32026),
        r(480839),
        r(744285),
        r(492257),
        r(873817);
      async function n(e, t, r) {
        if (0 !== e) throw Error("unsupported fingerprint format version");
        if (0 === t.byteLength) throw Error("zero-length key");
        if (0 === r.length) throw Error("zero-length user ID");
        let n = BigInt(r);
        if (n < 0n || n >= 2n ** 64n) throw Error("user ID out of range");
        let i = new Uint8Array(),
          o = new Uint8Array(2 + t.byteLength + 8);
        o.set(t, 2);
        let a = new DataView(o.buffer);
        a.setUint16(0, e), a.setBigUint64(2 + t.byteLength, n);
        for (let e = 0; e < 5200; e++) {
          let e = o.byteLength + t.byteLength;
          i.byteLength !== e && (i = new Uint8Array(e)),
            i.set(o, 0),
            i.set(t, o.byteLength),
            (o = new Uint8Array(
              await window.crypto.subtle.digest("SHA-512", i),
            ));
        }
        return o;
      }
    },
    256147: function (e, t, r) {
      r.d(t, {
        M: function () {
          return i;
        },
      });
      var n = r(250683);
      function i(e) {
        return n.fromByteArray(e);
      }
    },
    926188: function (e, t, r) {
      r.d(t, {
        I: function () {
          return l;
        },
      }),
        r(518263),
        r(970173),
        r(520712),
        r(268111),
        r(941497),
        r(32026),
        r(480839),
        r(744285),
        r(492257),
        r(873817),
        r(963458),
        r(47120);
      var n = r(309651),
        i = r(259137);
      let o = Uint8Array.of(
          36,
          202,
          177,
          122,
          122,
          248,
          236,
          43,
          130,
          180,
          18,
          185,
          45,
          171,
          25,
          46,
        ),
        a = { N: 16384, r: 8, p: 2 };
      async function l(e, t, r, l, u) {
        let c = await Promise.all([(0, n.x)(e, t, r), (0, n.x)(e, l, u)]);
        c.sort();
        let s = new Uint8Array(c[0].byteLength + c[1].byteLength);
        return (
          s.set(c[0], 0),
          s.set(c[1], c[0].byteLength),
          new Uint8Array(await (0, i.f3)(s, o, 64, a))
        );
      }
    },
    253135: function (e, t, r) {
      r.d(t, {
        Dq: function () {
          return n.D;
        },
        Il: function () {
          return i.I;
        },
        MK: function () {
          return o.M;
        },
      });
      var n = r(438882);
      r(309651);
      var i = r(926188),
        o = r(256147);
    },
    892816: function (e, t, r) {
      r.d(t, {
        Z: function () {
          return i;
        },
      });
      let n = {
        "SHA-1": { outputLength: 20, blockSize: 64 },
        "SHA-256": { outputLength: 32, blockSize: 64 },
        "SHA-384": { outputLength: 48, blockSize: 128 },
        "SHA-512": { outputLength: 64, blockSize: 128 },
      };
      function i(e, t, r, i, a = "SHA-256") {
        return new Promise((l, u) => {
          a in n ||
            u(
              RangeError(
                `Valid hash algorithm values are any of ${Object.keys(n).toString()}`,
              ),
            ),
            "string" == typeof e
              ? (e = new TextEncoder().encode(e))
              : e instanceof ArrayBuffer
                ? (e = new Uint8Array(e))
                : ArrayBuffer.isView(e) ||
                  u(
                    RangeError(
                      "P should be string, ArrayBuffer, TypedArray, DataView",
                    ),
                  ),
            "string" == typeof t
              ? (t = new TextEncoder().encode(t))
              : t instanceof ArrayBuffer
                ? (t = new Uint8Array(t))
                : ArrayBuffer.isView(t)
                  ? (t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                  : u(
                      RangeError(
                        "S should be string, ArrayBuffer, TypedArray, DataView",
                      ),
                    ),
            crypto.subtle
              .importKey("raw", e, "PBKDF2", !1, ["deriveBits"])
              .then(
                (c) => {
                  let s = { name: "PBKDF2", hash: a, salt: t, iterations: r };
                  crypto.subtle.deriveBits(s, c, 8 * i).then(
                    (e) => l(e),
                    (c) => {
                      (async function (e, t, r, i, a) {
                        if (!(a in n))
                          throw RangeError(
                            `Valid hash algorithm values are any of ${Object.keys(n).toString()}`,
                          );
                        if (!Number.isInteger(r) || r <= 0)
                          throw RangeError("c must be a positive integer");
                        let l = n[a].outputLength;
                        if (
                          !Number.isInteger(i) ||
                          i <= 0 ||
                          i >= (4294967296 - 1) * l
                        )
                          throw RangeError(
                            "dkLen must be a positive integer < (2 ** 32 - 1) * hLen",
                          );
                        let u = Math.ceil(i / l),
                          c = i - (u - 1) * l,
                          s = Array(u);
                        0 === e.byteLength &&
                          (e = new Uint8Array(n[a].blockSize));
                        let f = await crypto.subtle.importKey(
                            "raw",
                            e,
                            { name: "HMAC", hash: { name: a } },
                            !0,
                            ["sign"],
                          ),
                          d = async function (e, t) {
                            return new Uint8Array(
                              await crypto.subtle.sign("HMAC", e, t),
                            );
                          };
                        for (let e = 0; e < u; e++)
                          s[e] = await h(f, t, r, e + 1);
                        async function h(e, t, r, n) {
                          let i = await d(
                              e,
                              o(
                                t,
                                (function (e) {
                                  let t = new ArrayBuffer(4);
                                  return (
                                    new DataView(t).setUint32(0, e, !1),
                                    new Uint8Array(t)
                                  );
                                })(n),
                              ),
                            ),
                            a = i;
                          for (let t = 1; t < r; t++)
                            (function (e, t) {
                              for (let r = 0; r < e.length; r++) e[r] ^= t[r];
                            })(i, (a = await d(e, a)));
                          return i;
                        }
                        return (
                          (s[u - 1] = s[u - 1].slice(0, c)), o(...s).buffer
                        );
                      })(e, t, r, i, a).then(
                        (e) => l(e),
                        (e) => u(e),
                      );
                    },
                  );
                },
                (e) => u(e),
              );
        });
      }
      function o(...e) {
        let t = e.reduce((e, t) => e + t.length, 0);
        if (0 === e.length) throw RangeError("Cannot concat no arrays");
        let r = new Uint8Array(t),
          n = 0;
        for (let t of e) r.set(t, n), (n += t.length);
        return r;
      }
    },
    259137: function (e, t, r) {
      r.d(t, {
        f3: function () {
          return u;
        },
      });
      var n = r(892816);
      let i = function (e) {
          function t(e, t) {
            return (e << t) | (e >>> (32 - t));
          }
          let r = e.slice(0);
          for (let e = 8; e > 0; e -= 2)
            (r[4] ^= t(r[0] + r[12], 7)),
              (r[8] ^= t(r[4] + r[0], 9)),
              (r[12] ^= t(r[8] + r[4], 13)),
              (r[0] ^= t(r[12] + r[8], 18)),
              (r[9] ^= t(r[5] + r[1], 7)),
              (r[13] ^= t(r[9] + r[5], 9)),
              (r[1] ^= t(r[13] + r[9], 13)),
              (r[5] ^= t(r[1] + r[13], 18)),
              (r[14] ^= t(r[10] + r[6], 7)),
              (r[2] ^= t(r[14] + r[10], 9)),
              (r[6] ^= t(r[2] + r[14], 13)),
              (r[10] ^= t(r[6] + r[2], 18)),
              (r[3] ^= t(r[15] + r[11], 7)),
              (r[7] ^= t(r[3] + r[15], 9)),
              (r[11] ^= t(r[7] + r[3], 13)),
              (r[15] ^= t(r[11] + r[7], 18)),
              (r[1] ^= t(r[0] + r[3], 7)),
              (r[2] ^= t(r[1] + r[0], 9)),
              (r[3] ^= t(r[2] + r[1], 13)),
              (r[0] ^= t(r[3] + r[2], 18)),
              (r[6] ^= t(r[5] + r[4], 7)),
              (r[7] ^= t(r[6] + r[5], 9)),
              (r[4] ^= t(r[7] + r[6], 13)),
              (r[5] ^= t(r[4] + r[7], 18)),
              (r[11] ^= t(r[10] + r[9], 7)),
              (r[8] ^= t(r[11] + r[10], 9)),
              (r[9] ^= t(r[8] + r[11], 13)),
              (r[10] ^= t(r[9] + r[8], 18)),
              (r[12] ^= t(r[15] + r[14], 7)),
              (r[13] ^= t(r[12] + r[15], 9)),
              (r[14] ^= t(r[13] + r[12], 13)),
              (r[15] ^= t(r[14] + r[13], 18));
          for (let t = 0; t < 16; t++) e[t] = r[t] + e[t];
        },
        o = function (e, t) {
          for (let r = 0; r < e.length; r++) e[r] ^= t[r];
        },
        a = function (e) {
          let t = e.byteLength / 128,
            r = 16 * (2 * t - 1),
            n = e.slice(r, r + 16),
            a = new Uint32Array(e.length / 2),
            l = !0;
          for (let r = 0; r < 2 * t; r++) {
            let t = 16 * r;
            o(n, e.subarray(t, t + 16)), i(n);
            let u = 16 * (r >> 1);
            if (l) for (let t = 0; t < 16; t++) e[u + t] = n[t];
            else for (let e = 0; e < 16; e++) a[u + e] = n[e];
            l = !l;
          }
          let u = 16 * t;
          for (let t = 0; t < u; t++) e[u + t] = a[t];
        },
        l = function (e, t) {
          let r = e.byteLength / 128,
            n = Array(t);
          for (let r = 0; r < t; r++) (n[r] = e.slice(0)), a(e);
          for (let i = 0; i < t; i++) {
            let i =
              new DataView(e.buffer, 64 * (2 * r - 1), 64).getUint32(0, !0) % t;
            o(e, n[i]), a(e);
          }
        },
        u = async function (e, t, r, i) {
          if ("string" == typeof e) e = new TextEncoder().encode(e);
          else if (e instanceof ArrayBuffer) e = new Uint8Array(e);
          else if (!ArrayBuffer.isView(e))
            throw RangeError(
              "P should be string, ArrayBuffer, TypedArray, DataView",
            );
          if ("string" == typeof t) t = new TextEncoder().encode(t);
          else if (t instanceof ArrayBuffer) t = new Uint8Array(t);
          else if (!ArrayBuffer.isView(t))
            throw RangeError(
              "S should be string, ArrayBuffer, TypedArray, DataView",
            );
          if (!Number.isInteger(r) || r <= 0 || r > 137438953440)
            throw RangeError(
              "dkLen is the intended output length in octets of the derived key; a positive integer less than or equal to (2^32 - 1) * hLen where hLen is 32",
            );
          let o = void 0 !== i && void 0 !== i.N ? i.N : 131072,
            a = void 0 !== i && void 0 !== i.r ? i.r : 8,
            u = void 0 !== i && void 0 !== i.p ? i.p : 1;
          if (!Number.isInteger(o) || o <= 0 || 0 != (o & (o - 1)))
            throw RangeError("N must be a power of 2");
          if (
            !Number.isInteger(a) ||
            a <= 0 ||
            !Number.isInteger(u) ||
            u <= 0 ||
            u * a > 1073741823.75
          )
            throw RangeError(
              "Parallelization parameter p and blocksize parameter r must be positive integers satisfying p ≤ (2^32− 1) * hLen / MFLen where hLen is 32 and MFlen is 128 * r.",
            );
          let c = new Uint32Array(await (0, n.Z)(e, t, 1, 128 * u * a));
          for (let e = 0; e < u; e++) {
            let t = 32 * a,
              r = e * t,
              n = c.slice(r, r + t);
            l(n, o);
            for (let e = 0; e < 32 * a; e++) c[r + e] = n[e];
          }
          return await (0, n.Z)(e, c, 1, r);
        };
    },
  },
]);
//# sourceMappingURL=2c4eca74e3dcb1fe88bb.js.map
