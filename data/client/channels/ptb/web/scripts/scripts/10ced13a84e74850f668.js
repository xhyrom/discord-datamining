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
        E = n(19780),
        f = n(959457),
        _ = n(630759),
        S = n(729303),
        I = n(651941),
        R = n(981631);
      let C = new Map(),
        g = new Map(),
        h = !1,
        m = null;
      function Z() {
        return f.Z.getAllActiveStreamKeys().reduce((e, t) => {
          let { ownerId: n } = (0, c.my)(t),
            r = !0 === C.get(n),
            l = g.get(t) !== r;
          return g.set(t, r), !!l || e;
        }, !1);
      }
      function T() {
        var e;
        let t = null !== (e = E.Z.getUserIds()) && void 0 !== e ? e : new Set(),
          n = d.default.getId(),
          r = !0;
        for (let e of t)
          if (n !== e && !0 !== C.get(e)) {
            r = !1;
            break;
          }
        let l = r !== h;
        return (h = r), l;
      }
      function N(e) {
        let { userId: t } = e;
        if (d.default.getId() === t) return !1;
        let n = (function (e) {
            let t = E.Z.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let n = new Uint8Array(t),
              r = I.Z.isKeyVerified(e, n) || S.Z.isKeyVerified(e, n),
              l = (0, _.MA)(e, [E.Z, f.Z]),
              i = r && l,
              u = i !== C.get(e);
            return C.set(e, i), u;
          })(t),
          r = Z(),
          l = T();
        return n || r || l;
      }
      function A() {
        C.clear(), g.clear(), (h = !1);
      }
      class v extends (r = s.ZP.Store) {
        initialize() {
          this.waitFor(S.Z, I.Z, E.Z, f.Z);
        }
        isCallVerified() {
          return h;
        }
        isStreamVerified(e) {
          return g.get(e);
        }
        isUserVerified(e) {
          return C.get(e);
        }
      }
      (u = "SecureFramesVerifiedStore"),
        (i = "displayName") in (l = v)
          ? Object.defineProperty(l, i, {
              value: u,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[i] = u),
        (t.Z = new v(a.Z, {
          CONNECTION_OPEN: A,
          VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            if (t === m) return !1;
            (m = t), A();
          },
          RTC_CONNECTION_STATE: function (e) {
            let { streamKey: t, state: n, context: r } = e;
            if (n !== R.hes.DISCONNECTED) return !1;
            switch (r) {
              case o.Yn.STREAM:
                if (null == t) return !1;
                return g.delete(t), T();
              case o.Yn.DEFAULT:
                A();
            }
          },
          RTC_CONNECTION_ROSTER_MAP_UPDATE: function (e) {
            let { userIds: t } = e,
              n = d.default.getId(),
              r = t.reduce(
                (e, t) => (n === t ? e : !!N({ userId: t }) || e),
                !1,
              ),
              l = Z(),
              i = T();
            return r || l || i;
          },
          SECURE_FRAMES_TRANSIENT_KEY_CREATE: N,
          SECURE_FRAMES_TRANSIENT_KEY_DELETE: N,
          SECURE_FRAMES_VERIFIED_KEY_CREATE: N,
          SECURE_FRAMES_VERIFIED_KEY_DELETE: N,
          SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: N,
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
    539067: function (e, t, n) {
      n.d(t, {
        y: function () {
          return a;
        },
      }),
        n(47120);
      var r = n(470079),
        l = n(442837),
        i = n(19780),
        u = n(615830),
        s = n(630759),
        o = n(760373);
      function a(e) {
        let { userId: t } = e,
          n = (0, l.e7)([i.Z], () => i.Z.getSecureFramesRosterMapEntry(t)),
          a = (0, l.e7)([u.Z], () => u.Z.getPersistentCodesEnabled()),
          [c, d] = r.useState(!0),
          [E, f] = r.useState(!1),
          [_, S] = r.useState(!1),
          I = r.useCallback(async (e, t) => {
            d(!0);
            try {
              let n = o.GB,
                r = await (0, s.uX)(n),
                l = await (0, s.J6)(e, t, n);
              f(r), S(l);
            } catch (e) {
              f(!1), S(!1);
            } finally {
              d(!1);
            }
          }, []);
        return (
          r.useEffect(() => {
            a && null != n ? I(t, n) : (f(!1), S(!1), d(!1));
          }, [a, n, I, t]),
          {
            loading: c,
            isCurrentUserKeyPersistent: E,
            isOtherUserKeyPersistent: _,
          }
        );
      }
    },
    12786: function (e, t, n) {
      n.d(t, {
        R: function () {
          return o;
        },
        i: function () {
          return a;
        },
      });
      var r = n(470079),
        l = n(442837),
        i = n(19780),
        u = n(959457),
        s = n(630759);
      function o(e) {
        let { userId: t } = e;
        return (0, l.e7)([i.Z, u.Z], () => (0, s.MA)(t, [i.Z, u.Z]));
      }
      function a(e) {
        let {
            isKeyConsistent: t,
            channelId: n,
            userId: l,
            nickname: i,
            onAlertOpen: u,
          } = e,
          o = r.useRef(null);
        r.useEffect(() => {
          t || null != o.current
            ? (clearTimeout(o.current), (o.current = null))
            : (o.current = setTimeout(() => {
                u(), (0, s.lg)({ userId: l, channelId: n, nickname: i });
              }, 1e3));
          let e = o.current;
          return () => {
            clearTimeout(e);
          };
        }, [n, t, i, u, l]);
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
          { enabled: o } = u.c.useExperiment({ location: n });
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
              return null != a && a > s.HK;
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
          return d;
        },
        zU: function () {
          return E;
        },
      });
      var r = n(442837),
        l = n(569545),
        i = n(314897),
        u = n(19780),
        s = n(959457),
        o = n(98369),
        a = n(441894);
      function c(e, t) {
        return 0 === e.size || (1 === e.size && e.has(t));
      }
      function d(e) {
        let { userId: t, channelId: n, location: l } = e,
          s = (0, a.J)({ channelId: n, location: l });
        return (0, r.e7)(
          [o.Z, i.default, u.Z],
          () =>
            null != t &&
            s &&
            u.Z.isUserConnected(t) &&
            i.default.getId() !== t &&
            o.Z.isUserVerified(t),
          [s, t],
        );
      }
      function E(e) {
        let { streamKey: t, channelId: n, location: u } = e,
          d = (0, a.J)({ channelId: n, location: u });
        return (0, r.e7)(
          [o.Z, s.Z, i.default],
          () => {
            if (!d || null == t) return !1;
            let e = s.Z.getUserIds(t),
              n = i.default.getId();
            if (null == e || c(e, n)) return !1;
            let { ownerId: r } = (0, l.my)(t);
            return r !== n && o.Z.isStreamVerified(t);
          },
          [d, t],
        );
      }
      function f(e) {
        let { channelId: t, location: n } = e,
          l = (0, a.J)({ channelId: t, location: n });
        return (0, r.e7)(
          [o.Z, u.Z, i.default],
          () => {
            if (!l) return !1;
            let e = u.Z.getUserIds(),
              t = i.default.getId();
            return !(null == e || c(e, t)) && o.Z.isCallVerified();
          },
          [l],
        );
      }
    },
    301107: function (e, t, n) {
      n.d(t, {
        W: function () {
          return u;
        },
      }),
        n(411104);
      var r = n(470079),
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
          return E;
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
      var r = n(470079),
        l = n(250683),
        i = n(512722),
        u = n.n(i),
        s = n(442837),
        o = n(253135),
        a = n(314897),
        c = n(19780),
        d = n(760373);
      function E(e) {
        let { userId: t } = e,
          n = (0, s.e7)([a.default], () => a.default.getId());
        u()(
          n !== t,
          "[useSecureFramesPairwiseFingerprint] Should not pass current user id.",
        );
        let [i, E] = r.useState(null),
          [f, _] = r.useState(!1),
          S = (0, s.e7)([c.Z], () => c.Z.getSecureFramesRosterMapEntry(t)),
          I = (0, s.e7)([c.Z], () => c.Z.getSecureFramesRosterMapEntry(n)),
          R = r.useCallback(async (e, t, n, r) => {
            _(!0);
            let i = await (0, o.Il)(
              d.Xj,
              new Uint8Array(t),
              e,
              new Uint8Array(r),
              n,
            );
            E(l.fromByteArray(i)), _(!1);
          }, []);
        return (
          r.useEffect(() => {
            null != S && null != I && R(n, I, t, S);
          }, [n, I, R, t, S]),
          r.useMemo(
            () => ({ fingerprint: i, userKey: S, loading: f }),
            [i, f, S],
          )
        );
      }
    },
    785792: function (e, t, n) {
      n.d(t, {
        b: function () {
          return a;
        },
      });
      var r = n(735250),
        l = n(470079),
        i = n(120356),
        u = n.n(i),
        s = n(481060),
        o = n(481022);
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
      var r = n(735250),
        l = n(470079),
        i = n(120356),
        u = n.n(i),
        s = n(481060),
        o = n(572004),
        a = n(689938),
        c = n(205962);
      function d(e) {
        let { chunks: t, className: n, onCopy: i, ...d } = e,
          E = l.useMemo(() => (null == t ? void 0 : t.join(" ")), [t]),
          [f, _] = l.useState(!1),
          S = l.useCallback(() => {
            _(!0), (0, o.JG)(E), null == i || i();
          }, [i, E]),
          I = f ? s.CircleCheckIcon : s.CopyIcon;
        return (0, r.jsx)(s.Clickable, {
          className: u()(c.container, n),
          onClick: S,
          children: (0, r.jsx)(s.Tooltip, {
            text: f ? a.Z.Messages.COPIED : a.Z.Messages.COPY,
            children: (e) =>
              (0, r.jsx)(I, {
                ...d,
                ...e,
                size: "xxs",
                color: f
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
            return v;
          },
        }),
        n(47120);
      var r = n(735250),
        l = n(470079),
        i = n(442837),
        u = n(481060),
        s = n(377171),
        o = n(592125),
        a = n(594174),
        c = n(5192),
        d = n(571826),
        E = n(630759),
        f = n(539067),
        _ = n(12786),
        S = n(210975),
        I = n(301107),
        R = n(65692),
        C = n(785792),
        g = n(190054),
        h = n(245581),
        m = n(760373),
        Z = n(981631),
        T = n(689938),
        N = n(756843);
      function A(e) {
        let { badgeText: t, badgeColor: n } = e,
          i = l.useRef(t),
          s = l.useRef(n);
        return (0, r.jsx)(u.TextBadge, { text: i.current, color: s.current });
      }
      function v(e) {
        let { transitionState: t, userId: n, channelId: v, onClose: y } = e,
          x = (0, i.e7)([a.default], () => a.default.getUser(n)),
          M = (0, i.e7)([o.Z], () => {
            var e;
            return null === (e = o.Z.getChannel(v)) || void 0 === e
              ? void 0
              : e.getGuildId();
          }),
          p = c.ZP.useName(M, null, x),
          { fingerprint: b, userKey: k, loading: F } = (0, R.q)({ userId: n }),
          U = (0, I.W)({
            fingerprintBase64: b,
            chunkSize: m.iQ,
            desiredLength: m.KN,
          }),
          V = l.useCallback(() => {
            (0, d.s$)({ userId: n, channelId: v });
          }, [v, n]),
          D = (0, S.wV)({
            userId: n,
            channelId: v,
            location: "WebSecureFramesUserVerificationModal",
          }),
          j = (0, _.R)({ userId: n });
        (0, _.i)({
          isKeyConsistent: j,
          channelId: v,
          userId: n,
          nickname: p,
          onAlertOpen: y,
        });
        let {
            isCurrentUserKeyPersistent: O,
            isOtherUserKeyPersistent: w,
            loading: K,
          } = (0, f.y)({ userId: n }),
          L = l.useCallback(() => {
            null != k &&
              ((0, E.TQ)(n, k, w, v, Z.Sbl.E2EE_USER_VERIFY_MODAL), y());
          }, [k, n, w, v, y]),
          B = l.useCallback(() => {
            null != k && ((0, E.LO)(n, k, w), y());
          }, [k, n, w, y]),
          [P, Y] = l.useMemo(
            () =>
              D
                ? [T.Z.Messages.E2EE_VERIFIED, s.Z.BG_BRAND]
                : [T.Z.Messages.NEW, s.Z.STATUS_DANGER],
            [D],
          ),
          z = l.useMemo(
            () =>
              (0, E.kK)({
                isCurrentUserKeyPersistent: O,
                isOtherUserKeyPersistent: w,
                otherUserNickname: p,
              }),
            [O, w, p],
          );
        return (
          l.useEffect(() => {
            (0, d.Rq)({ userId: n, channelId: v });
          }, [v, n]),
          (0, r.jsxs)(h.Z, {
            transitionState: t,
            title: T.Z.Messages.E2EE_VERIFICATION_CODE,
            subtitle: T.Z.Messages.E2EE_USER_VERIFICATION_SUBTITLE.format({
              username: p,
            }),
            children: [
              (0, r.jsxs)("div", {
                className: N.verification,
                children: [
                  (0, r.jsxs)("div", {
                    className: N.header,
                    children: [
                      (0, r.jsx)(u.Heading, {
                        variant: "text-sm/bold",
                        color: "header-primary",
                        children: T.Z.Messages.E2EE_VERIFICATION_CODE,
                      }),
                      null != U &&
                        (0, r.jsx)(g.H, {
                          className: N.copyIcon,
                          chunks: U,
                          color: u.tokens.colors.INTERACTIVE_NORMAL,
                          onCopy: V,
                        }),
                      K || F
                        ? (0, r.jsx)(u.Spinner, {
                            className: N.spinner,
                            type: u.SpinnerTypes.SPINNING_CIRCLE,
                          })
                        : (0, r.jsx)(A, { badgeText: P, badgeColor: Y }),
                    ],
                  }),
                  (0, r.jsx)(C.b, {
                    className: N.code,
                    chunks: U,
                    columns: m.ak,
                  }),
                ],
              }),
              (0, r.jsx)(u.Text, {
                className: N.footer,
                variant: "text-sm/normal",
                color: "text-muted",
                children: z,
              }),
              (0, r.jsx)(u.Button, {
                fullWidth: !0,
                className: N.verifiedButton,
                color: u.ButtonColors.BRAND,
                size: u.ButtonSizes.MEDIUM,
                look: u.ButtonLooks.FILLED,
                disabled: null == b || K || F,
                onClick: D ? B : L,
                children: D
                  ? T.Z.Messages.E2EE_CLEAR_VERIFICATION
                  : T.Z.Messages.E2EE_MARK_AS_VERIFIED,
              }),
              (0, r.jsx)(u.Button, {
                fullWidth: !0,
                color: u.ButtonColors.PRIMARY,
                size: u.ButtonSizes.MEDIUM,
                look: u.ButtonLooks.FILLED,
                onClick: y,
                children: T.Z.Messages.CANCEL,
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
      var r = n(735250);
      n(470079);
      var l = n(481060),
        i = n(313201),
        u = n(756843);
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
    481022: function (e, t, n) {
      e.exports = {
        code: "code_e9fe13",
        chunk: "chunk_e9fe13",
        divider: "divider_e9fe13",
        codeText: "codeText_e9fe13",
        loading: "loading_e9fe13",
      };
    },
    205962: function (e, t, n) {
      e.exports = { container: "container_a7c5d3" };
    },
    756843: function (e, t, n) {
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
        spinner: "spinner_efee60",
      };
    },
  },
]);
//# sourceMappingURL=10ced13a84e74850f668.js.map
