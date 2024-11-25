"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["33397"],
  {
    98369: function (e, t, n) {
      n(47120),
        n(518263),
        n(970173),
        n(520712),
        n(268111),
        n(941497),
        n(32026),
        n(480839),
        n(744285),
        n(492257),
        n(873817),
        n(724458);
      var r,
        l,
        i,
        u,
        s = n(442837),
        o = n(46973),
        a = n(570140),
        c = n(569545),
        d = n(314897),
        f = n(19780),
        E = n(959457),
        S = n(630759),
        _ = n(729303),
        g = n(651941),
        m = n(981631);
      let h = new Map(),
        R = new Map(),
        I = !1,
        C = null;
      function N() {
        return E.Z.getAllActiveStreamKeys().reduce((e, t) => {
          let { ownerId: n } = (0, c.my)(t),
            r = !0 === h.get(n),
            l = R.get(t) !== r;
          return R.set(t, r), !!l || e;
        }, !1);
      }
      function T() {
        var e;
        let t = null !== (e = f.Z.getUserIds()) && void 0 !== e ? e : new Set(),
          n = d.default.getId(),
          r = !0;
        for (let e of t)
          if (n !== e && !0 !== h.get(e)) {
            r = !1;
            break;
          }
        let l = r !== I;
        return (I = r), l;
      }
      function v(e) {
        let { userId: t } = e;
        if (d.default.getId() === t) return !1;
        let n = (function (e) {
            let t = f.Z.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let n = new Uint8Array(t),
              r = g.Z.isKeyVerified(e, n) || _.Z.isKeyVerified(e, n),
              l = (0, S.UB)(e, [f.Z, E.Z]),
              i = r && !l,
              u = i !== h.get(e);
            return h.set(e, i), u;
          })(t),
          r = N(),
          l = T();
        return n || r || l;
      }
      function y() {
        h.clear(), R.clear(), (I = !1);
      }
      class Z extends (r = s.ZP.Store) {
        initialize() {
          this.waitFor(_.Z, g.Z, f.Z, E.Z);
        }
        isCallVerified() {
          return I;
        }
        isStreamVerified(e) {
          return R.get(e);
        }
        isUserVerified(e) {
          return h.get(e);
        }
      }
      (u = "SecureFramesVerifiedStore"),
        (i = "displayName") in (l = Z)
          ? Object.defineProperty(l, i, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[i] = u),
        (t.Z = new Z(a.Z, {
          CONNECTION_OPEN: y,
          VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            if (t === C) return !1;
            (C = t), y();
          },
          RTC_CONNECTION_STATE: function (e) {
            let { streamKey: t, state: n, context: r } = e;
            if (n !== m.hes.DISCONNECTED) return !1;
            switch (r) {
              case o.Yn.STREAM:
                if (null == t) return !1;
                return R.delete(t), T();
              case o.Yn.DEFAULT:
                y();
            }
          },
          RTC_CONNECTION_ROSTER_MAP_UPDATE: function (e) {
            let { userIds: t } = e,
              n = d.default.getId(),
              r = t.reduce(
                (e, t) => (n === t ? e : !!v({ userId: t }) || e),
                !1,
              ),
              l = N(),
              i = T();
            return r || l || i;
          },
          SECURE_FRAMES_TRANSIENT_KEY_CREATE: v,
          SECURE_FRAMES_TRANSIENT_KEY_DELETE: v,
          SECURE_FRAMES_VERIFIED_KEY_CREATE: v,
          SECURE_FRAMES_VERIFIED_KEY_DELETE: v,
          SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: v,
        }));
    },
    729303: function (e, t, n) {
      n(47120),
        n(518263),
        n(970173),
        n(520712),
        n(268111),
        n(941497),
        n(32026),
        n(480839),
        n(744285),
        n(492257),
        n(873817);
      var r,
        l,
        i,
        u,
        s = n(442837),
        o = n(570140);
      let a = new Map();
      class c extends (r = s.ZP.Store) {
        getUsers() {
          return a;
        }
        isKeyVerified(e, t) {
          let n = a.get(e);
          if (null == t || null == n || n.length !== t.length) return !1;
          for (let e = 0; e < t.length; e++) if (t[e] !== n[e]) return !1;
          return !0;
        }
      }
      (u = "TransientKeyStore"),
        (i = "displayName") in (l = c)
          ? Object.defineProperty(l, i, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[i] = u),
        (t.Z = new c(o.Z, {
          CONNECTION_OPEN: function () {
            a.clear();
          },
          SECURE_FRAMES_TRANSIENT_KEY_CREATE: function (e) {
            let { userId: t, key: n } = e,
              r = new Uint8Array(n);
            a.set(t, r);
          },
          SECURE_FRAMES_TRANSIENT_KEY_DELETE: function (e) {
            let { userId: t } = e;
            return a.delete(t);
          },
        }));
    },
    651941: function (e, t, n) {
      n(518263),
        n(970173),
        n(520712),
        n(268111),
        n(941497),
        n(32026),
        n(480839),
        n(744285),
        n(492257),
        n(873817),
        n(47120);
      var r,
        l = n(442837),
        i = n(253135),
        u = n(570140),
        s = n(709054);
      function o(e, t, n) {
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
      let a = {};
      class c extends (r = l.ZP.PersistedStore) {
        initialize(e) {
          var t;
          a =
            null !== (t = null == e ? void 0 : e.users) && void 0 !== t
              ? t
              : {};
        }
        getState() {
          return { users: a };
        }
        getKeyTrustedAt(e, t) {
          var n;
          let r = (0, i.MK)(t);
          return null === (n = a[e]) || void 0 === n ? void 0 : n[r];
        }
        isKeyVerified(e, t) {
          return null != this.getKeyTrustedAt(e, t);
        }
        getUserIds() {
          return s.default.keys(a);
        }
        getUserVerifiedKeys(e) {
          return a[e];
        }
      }
      o(c, "displayName", "VerifiedKeyStore"),
        o(c, "persistKey", "VerifiedKeyStore"),
        (t.Z = new c(u.Z, {
          SECURE_FRAMES_VERIFIED_KEY_CREATE: function (e) {
            let { userId: t, key: n } = e,
              r = (function (e) {
                var t;
                let n = null !== (t = a[e]) && void 0 !== t ? t : {};
                return (a[e] = n), n;
              })(t),
              l = new Uint8Array(n);
            r[(0, i.MK)(l)] = Date.now();
          },
          SECURE_FRAMES_VERIFIED_KEY_DELETE: function (e) {
            let { userId: t, serializedKey: n } = e,
              r = a[t];
            if (null == r) return !1;
            let l = delete r[n],
              i = !1;
            return (
              0 === Object.keys(r).length && (delete a[t], (i = !0)), l || i
            );
          },
          SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function (e) {
            let { userId: t } = e;
            return null != a[t] && delete a[t];
          },
        }));
    },
    277642: function (e, t, n) {
      n.d(t, {
        r: function () {
          return a;
        },
        t: function () {
          return o;
        },
      });
      var r = n(442837),
        l = n(314897),
        i = n(19780),
        u = n(959457);
      function s(e, t) {
        return 0 === e.size || (1 === e.size && e.has(t));
      }
      function o(e) {
        return (0, r.e7)([u.Z, l.default], () => {
          if (null == e) return !0;
          let t = u.Z.getUserIds(e);
          return null == t || s(t, l.default.getId());
        });
      }
      function a() {
        return (0, r.e7)([i.Z, l.default], () => {
          let e = i.Z.getUserIds();
          return null == e || s(e, l.default.getId());
        });
      }
    },
    539067: function (e, t, n) {
      n.d(t, {
        y: function () {
          return o;
        },
      }),
        n(47120);
      var r = n(192379),
        l = n(442837),
        i = n(19780),
        u = n(630759),
        s = n(760373);
      function o(e) {
        let { userId: t } = e,
          n = (0, l.e7)([i.Z], () => i.Z.getSecureFramesRosterMapEntry(t)),
          [o, a] = r.useState(!0),
          [c, d] = r.useState(!1),
          [f, E] = r.useState(!1),
          S = r.useCallback(async (e, t) => {
            a(!0);
            try {
              let n = s.GB,
                r = await (0, u.uX)(n),
                l = await (0, u.J6)(e, t, n);
              d(r), E(l);
            } catch (e) {
              d(!1), E(!1);
            } finally {
              a(!1);
            }
          }, []);
        return (
          r.useEffect(() => {
            null == n ? (d(!1), E(!1), a(!1)) : S(t, n);
          }, [n, S, t]),
          {
            loading: o,
            isCurrentUserKeyPersistent: c,
            isOtherUserKeyPersistent: f,
          }
        );
      }
    },
    802063: function (e, t, n) {
      n.d(t, {
        i: function () {
          return o;
        },
      });
      var r = n(192379),
        l = n(442837),
        i = n(19780),
        u = n(959457),
        s = n(630759);
      function o(e) {
        let { channelId: t, userId: n, nickname: o, onAlertOpen: a } = e,
          c = (function (e) {
            let { userId: t } = e;
            return (0, l.e7)([i.Z, u.Z], () => (0, s.UB)(t, [i.Z, u.Z]));
          })({ userId: n }),
          d = r.useRef(null);
        r.useEffect(() => {
          c && null == d.current
            ? (d.current = setTimeout(() => {
                a(), (0, s.lg)({ userId: n, channelId: t, nickname: o });
              }, 1e3))
            : (clearTimeout(d.current), (d.current = null));
          let e = d.current;
          return () => {
            clearTimeout(e);
          };
        }, [t, c, o, a, n]);
      }
    },
    441894: function (e, t, n) {
      n.d(t, {
        J: function () {
          return o;
        },
      }),
        n(47120);
      var r = n(442837),
        l = n(592125),
        i = n(19780),
        u = n(977059),
        s = n(760373);
      function o(e) {
        let { channelId: t, location: n } = e,
          { enabled: o } = (0, u.S)({ location: n });
        return (0, r.e7)(
          [i.Z, l.Z],
          () =>
            (function (e, t) {
              var n;
              let [r, u] =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [i.Z, l.Z];
              if (!t || null == e || r.getChannelId() !== e) return !1;
              let o = u.getChannel(e);
              if (null == o || o.isGuildStageVoice()) return !1;
              let a =
                null === (n = r.getSecureFramesState()) || void 0 === n
                  ? void 0
                  : n.version;
              return null != a && a !== s.Eg;
            })(t, o, [i.Z, l.Z]),
          [t, o],
        );
      }
    },
    210975: function (e, t, n) {
      n.d(t, {
        m$: function () {
          return f;
        },
        wV: function () {
          return c;
        },
        zU: function () {
          return d;
        },
      });
      var r = n(442837),
        l = n(569545),
        i = n(314897),
        u = n(19780),
        s = n(98369),
        o = n(277642),
        a = n(441894);
      function c(e) {
        let { userId: t, channelId: n, location: l } = e,
          o = (0, a.J)({ channelId: n, location: l });
        return (0, r.e7)(
          [s.Z, i.default, u.Z],
          () =>
            null != t &&
            o &&
            u.Z.isUserConnected(t) &&
            i.default.getId() !== t &&
            s.Z.isUserVerified(t),
          [o, t],
        );
      }
      function d(e) {
        let { streamKey: t, channelId: n, location: u } = e,
          c = (0, a.J)({ channelId: n, location: u }),
          d = (0, o.t)(t);
        return (0, r.e7)(
          [s.Z, i.default],
          () => {
            if (!c || d || null == t) return !1;
            let e = i.default.getId(),
              { ownerId: n } = (0, l.my)(t);
            return n !== e && s.Z.isStreamVerified(t);
          },
          [d, c, t],
        );
      }
      function f(e) {
        let { channelId: t, location: n } = e,
          l = (0, a.J)({ channelId: t, location: n }),
          i = (0, o.r)();
        return (0, r.e7)([s.Z], () => !!l && !i && s.Z.isCallVerified(), [
          i,
          l,
        ]);
      }
    },
    301107: function (e, t, n) {
      n.d(t, {
        W: function () {
          return u;
        },
      }),
        n(411104);
      var r = n(192379),
        l = n(250683),
        i = n(253135);
      function u(e) {
        let { fingerprintBase64: t, chunkSize: n, desiredLength: u } = e,
          s = r.useMemo(() => {
            if (null == t || "" === t) return null;
            let e = l.toByteArray(t),
              r = (0, i.Dq)(e, u, n);
            if (null == r) return null;
            let s = RegExp(".{1,".concat(n, "}"), "g"),
              o = r.match(s);
            return null == o ? null : Array.from(o);
          }, [n, t, u]);
        if (null != t && "" !== t && null == s)
          throw Error(
            "[useReadableSecureFramesCode] Failed to parse base 64 code.",
          );
        return s;
      }
    },
    65692: function (e, t, n) {
      n.d(t, {
        q: function () {
          return S;
        },
      }),
        n(47120),
        n(518263),
        n(970173),
        n(520712),
        n(268111),
        n(941497),
        n(32026),
        n(480839),
        n(744285),
        n(492257),
        n(873817);
      var r = n(192379),
        l = n(250683),
        i = n(512722),
        u = n.n(i),
        s = n(442837),
        o = n(253135),
        a = n(314897),
        c = n(131951),
        d = n(19780),
        f = n(760373),
        E = n(65154);
      function S(e) {
        let { userId: t } = e,
          n = (0, s.e7)([a.default], () => a.default.getId());
        u()(
          n !== t,
          "[useSecureFramesPairwiseFingerprint] Should not pass current user id.",
        );
        let [i, S] = r.useState(null),
          [_, g] = r.useState(!1),
          m = (0, s.e7)([d.Z], () => d.Z.getSecureFramesRosterMapEntry(t)),
          h = (0, s.e7)([d.Z], () => d.Z.getSecureFramesRosterMapEntry(n)),
          R = r.useCallback((e) => {
            S(l.fromByteArray(e)), g(!1);
          }, []),
          I = r.useCallback(
            async (e, t, n, r) => {
              if (c.Z.supports(E.AN.MLS_PAIRWISE_FINGERPRINTS)) {
                var l;
                null === (l = d.Z.getRTCConnection()) ||
                  void 0 === l ||
                  l.getMLSPairwiseFingerprint(f.Xj, n, (e) => {
                    R(new Uint8Array(e));
                  });
              } else
                R(
                  await (0, o.Il)(
                    f.Xj,
                    new Uint8Array(t),
                    e,
                    new Uint8Array(r),
                    n,
                  ),
                );
            },
            [R],
          ),
          C = r.useRef(null);
        return (
          r.useEffect(() => {
            null != m &&
              null != h &&
              null == C.current &&
              (g(!0), (C.current = setTimeout(() => I(n, h, t, m), 0)));
            let e = C.current;
            return () => {
              null != e && clearTimeout(e);
            };
          }, [n, h, I, t, m]),
          r.useMemo(
            () => ({ fingerprint: i, userKey: m, loading: _ }),
            [i, _, m],
          )
        );
      }
    },
    540247: function (e, t, n) {
      n.d(t, {
        P: function () {
          return s;
        },
      }),
        n(518263),
        n(970173),
        n(520712),
        n(268111),
        n(941497),
        n(32026),
        n(480839),
        n(744285),
        n(492257),
        n(873817);
      var r = n(192379),
        l = n(442837),
        i = n(253135),
        u = n(651941);
      function s(e) {
        let { userId: t, keyToOmit: n } = e,
          s = r.useMemo(() => {
            if (null == n) return null;
            let e = new Uint8Array(n);
            return (0, i.MK)(e);
          }, [n]);
        return (0, l.e7)(
          [u.Z],
          () => {
            let e = u.Z.getUserVerifiedKeys(t);
            return null == e ? 0 : Object.keys(e).filter((e) => e !== s).length;
          },
          [s, t],
        );
      }
    },
    785792: function (e, t, n) {
      n.d(t, {
        b: function () {
          return a;
        },
      });
      var r = n(200651),
        l = n(192379),
        i = n(120356),
        u = n.n(i),
        s = n(481060),
        o = n(797448);
      function a(e) {
        let { chunks: t, columns: n, className: i } = e,
          a = l.useMemo(() => ({ "--secure-frames-columns": n }), [n]);
        return null == t
          ? (0, r.jsx)("div", {
              className: o.loading,
              children: (0, r.jsx)(s.Spinner, {}),
            })
          : (0, r.jsx)("div", {
              style: a,
              className: u()(o.code, i),
              children: t.map((e, t) =>
                (0, r.jsx)(
                  "div",
                  {
                    className: u()(o.chunk, { [o.divider]: t > n - 1 }),
                    children: (0, r.jsx)(s.Text, {
                      className: o.codeText,
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
    190054: function (e, t, n) {
      n.d(t, {
        H: function () {
          return d;
        },
      }),
        n(47120);
      var r = n(200651),
        l = n(192379),
        i = n(120356),
        u = n.n(i),
        s = n(481060),
        o = n(572004),
        a = n(388032),
        c = n(66050);
      function d(e) {
        let { chunks: t, className: n, onCopy: i, ...d } = e,
          f = l.useMemo(() => (null == t ? void 0 : t.join(" ")), [t]),
          [E, S] = l.useState(!1),
          _ = l.useCallback(() => {
            S(!0), (0, o.JG)(f), null == i || i();
          }, [i, f]),
          g = E ? s.CircleCheckIcon : s.CopyIcon;
        return (0, r.jsx)(s.Clickable, {
          className: u()(c.container, n),
          onClick: _,
          children: (0, r.jsx)(s.Tooltip, {
            text: E ? a.intl.string(a.t["t5VZ8/"]) : a.intl.string(a.t.OpuAlJ),
            children: (e) =>
              (0, r.jsx)(g, {
                ...d,
                ...e,
                size: "xxs",
                color: E
                  ? s.tokens.colors.TEXT_POSITIVE
                  : s.tokens.colors.INTERACTIVE_NORMAL,
              }),
          }),
        });
      }
    },
    963410: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return p;
          },
        }),
        n(47120);
      var r = n(200651),
        l = n(192379),
        i = n(442837),
        u = n(481060),
        s = n(377171),
        o = n(592125),
        a = n(594174),
        c = n(5192),
        d = n(571826),
        f = n(630759),
        E = n(539067),
        S = n(802063),
        _ = n(210975),
        g = n(301107),
        m = n(65692),
        h = n(540247),
        R = n(785792),
        I = n(190054),
        C = n(245581),
        N = n(760373),
        T = n(981631),
        v = n(388032),
        y = n(822466);
      function Z(e) {
        let { badgeText: t, badgeColor: n } = e,
          i = l.useRef(t),
          s = l.useRef(n);
        return (0, r.jsx)(u.TextBadge, { text: i.current, color: s.current });
      }
      function p(e) {
        let { transitionState: t, userId: n, channelId: p, onClose: A } = e,
          x = (0, i.e7)([a.default], () => a.default.getUser(n)),
          M = (0, i.e7)([o.Z], () => {
            var e;
            return null === (e = o.Z.getChannel(p)) || void 0 === e
              ? void 0
              : e.getGuildId();
          }),
          b = c.ZP.useName(M, null, x),
          { fingerprint: k, userKey: U } = (0, m.q)({ userId: n }),
          j = (0, g.W)({
            fingerprintBase64: k,
            chunkSize: N.iQ,
            desiredLength: N.KN,
          }),
          F = l.useCallback(() => {
            (0, d.s$)({ userId: n, channelId: p });
          }, [p, n]),
          w = (0, _.wV)({
            userId: n,
            channelId: p,
            location: "WebSecureFramesUserVerificationModal",
          });
        (0, S.i)({ channelId: p, userId: n, nickname: b, onAlertOpen: A });
        let {
            isCurrentUserKeyPersistent: V,
            isOtherUserKeyPersistent: D,
            loading: K,
          } = (0, E.y)({ userId: n }),
          O = l.useCallback(() => {
            null != U &&
              ((0, f.TQ)(n, U, D, p, T.Sbl.E2EE_USER_VERIFY_MODAL), A());
          }, [U, n, D, p, A]),
          L = l.useCallback(() => {
            null != U && ((0, f.LO)(n, U, D), A());
          }, [U, n, D, A]),
          [P, B] = l.useMemo(
            () =>
              w
                ? [v.intl.string(v.t.UNUuen), s.Z.BG_BRAND]
                : [v.intl.string(v.t.y2b7CA), s.Z.STATUS_DANGER],
            [w],
          ),
          Y = l.useMemo(
            () =>
              (0, f.kK)({
                isCurrentUserKeyPersistent: V,
                isOtherUserKeyPersistent: D,
                otherUserNickname: b,
              }),
            [V, D, b],
          ),
          z = (0, h.P)({ userId: n, keyToOmit: U });
        return (
          l.useEffect(() => {
            (0, d.Rq)({ userId: n, channelId: p });
          }, [p, n]),
          (0, r.jsxs)(C.Z, {
            transitionState: t,
            title: v.intl.string(v.t["/WPGnJ"]),
            subtitle: v.intl.format(v.t.oc2kcX, { username: b }),
            children: [
              (0, r.jsxs)("div", {
                className: y.verification,
                children: [
                  z > 0 &&
                    (0, r.jsx)(u.HelpMessage, {
                      messageType: u.HelpMessageTypes.INFO,
                      className: y.helpMessage,
                      children: v.intl.format(v.t.uZDkz8, { count: z }),
                    }),
                  (0, r.jsxs)("div", {
                    className: y.header,
                    children: [
                      (0, r.jsx)(u.Heading, {
                        variant: "text-sm/bold",
                        color: "header-primary",
                        children: v.intl.string(v.t["/WPGnJ"]),
                      }),
                      null != j &&
                        (0, r.jsx)(I.H, {
                          className: y.copyIcon,
                          chunks: j,
                          color: u.tokens.colors.INTERACTIVE_NORMAL,
                          onCopy: F,
                        }),
                      (0, r.jsx)("div", {
                        className: y.codeStatus,
                        children:
                          null == j
                            ? (0, r.jsx)(u.Spinner, {
                                className: y.spinner,
                                type: u.SpinnerTypes.SPINNING_CIRCLE,
                              })
                            : (0, r.jsx)(Z, { badgeText: P, badgeColor: B }),
                      }),
                    ],
                  }),
                  (0, r.jsx)(R.b, {
                    className: y.code,
                    chunks: j,
                    columns: N.ak,
                  }),
                ],
              }),
              (0, r.jsx)(u.Text, {
                className: y.footer,
                variant: "text-sm/normal",
                color: "text-muted",
                children: Y,
              }),
              (0, r.jsx)(u.Button, {
                fullWidth: !0,
                className: y.verifiedButton,
                color: u.ButtonColors.BRAND,
                size: u.ButtonSizes.MEDIUM,
                look: u.ButtonLooks.FILLED,
                disabled: null == j || K,
                onClick: w ? L : O,
                children: w
                  ? v.intl.string(v.t["Osb+/v"])
                  : v.intl.string(v.t["0tvNAg"]),
              }),
              (0, r.jsx)(u.Button, {
                fullWidth: !0,
                color: u.ButtonColors.PRIMARY,
                size: u.ButtonSizes.MEDIUM,
                look: u.ButtonLooks.FILLED,
                onClick: A,
                children: v.intl.string(v.t["ETE/oK"]),
              }),
            ],
          })
        );
      }
    },
    245581: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return s;
        },
      });
      var r = n(200651);
      n(192379);
      var l = n(481060),
        i = n(313201),
        u = n(822466);
      function s(e) {
        let { transitionState: t, title: n, subtitle: s, children: o } = e,
          a = (0, i.Dt)();
        return (0, r.jsxs)(l.ModalRoot, {
          transitionState: t,
          "aria-labelledby": a,
          children: [
            (0, r.jsx)("div", {
              className: u.shieldIconContainer,
              children: (0, r.jsx)("div", {
                className: u.shieldIcon,
                children: (0, r.jsx)(l.ShieldLockIcon, {
                  size: "custom",
                  width: 55,
                  height: 55,
                  color: l.tokens.colors.HEADER_SECONDARY,
                }),
              }),
            }),
            (0, r.jsxs)(l.ModalContent, {
              className: u.content,
              children: [
                (0, r.jsx)(l.Heading, {
                  className: u.title,
                  variant: "heading-lg/bold",
                  color: "header-primary",
                  children: n,
                }),
                (0, r.jsx)(l.Text, {
                  className: u.subtitle,
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: s,
                }),
                o,
              ],
            }),
          ],
        });
      }
    },
    797448: function (e, t, n) {
      e.exports = {
        code: "code_e9fe13",
        chunk: "chunk_e9fe13",
        divider: "divider_e9fe13",
        codeText: "codeText_e9fe13",
        loading: "loading_e9fe13",
      };
    },
    66050: function (e, t, n) {
      e.exports = { container: "container_a7c5d3" };
    },
    822466: function (e, t, n) {
      e.exports = {
        content: "content_efee60",
        title: "title_efee60",
        subtitle: "subtitle_efee60",
        shieldIconContainer: "shieldIconContainer_efee60",
        shieldIcon: "shieldIcon_efee60",
        verification: "verification_efee60",
        header: "header_efee60",
        copyIcon: "copyIcon_efee60",
        code: "code_efee60",
        footer: "footer_efee60",
        verifiedButton: "verifiedButton_efee60",
        codeStatus: "codeStatus_efee60",
        spinner: "spinner_efee60",
        helpMessage: "helpMessage_efee60",
      };
    },
  },
]);
//# sourceMappingURL=99be2242c218875c982e.js.map
