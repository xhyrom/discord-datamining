"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["3708"],
  {
    718629: function (e, t, n) {
      var r = n(570140),
        i = n(668781),
        E = n(881052),
        s = n(352954),
        u = n(630759),
        a = n(651941),
        l = n(760373),
        o = n(689938);
      async function c(e) {
        if (e) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_SETTINGS_UPDATE",
            persistentCodesEnabled: e,
          });
          try {
            await (0, u.om)(l.GB);
          } catch (n) {
            var t;
            let e = new E.Hx(n);
            r.Z.dispatch({
              type: "SECURE_FRAMES_SETTINGS_UPDATE",
              persistentCodesEnabled: !1,
            }),
              i.Z.show({
                title: o.Z.Messages.ERROR_GENERIC_TITLE,
                body:
                  null !== (t = e.getAnyErrorMessage()) && void 0 !== t
                    ? t
                    : o.Z.Messages.GENERIC_ERROR_BODY,
              });
          }
        } else {
          let t = () => {
            r.Z.dispatch({
              type: "SECURE_FRAMES_SETTINGS_UPDATE",
              persistentCodesEnabled: e,
            }),
              r.Z.dispatch({
                type: "SECURE_FRAMES_ALL_VERIFIED_KEYS_DELETE",
                userIds: a.Z.getUserIds(),
              });
          };
          a.Z.getUserIds().length > 0
            ? s.Z.openSecureFramesUpdateConfirmation({
                title: o.Z.Messages.E2EE_DISABLE_PERSISTENT_KEYS_CONFIRM_TITLE,
                subtitle:
                  o.Z.Messages.E2EE_DISABLE_PERSISTENT_KEYS_CONFIRM_SUBTITLE,
                onConfirm: t,
              })
            : t();
        }
      }
      t.Z = {
        updatePersistentCodesEnabled: c,
        addCurrentUserUploadedKeyVersionCached: function (e) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_UPLOAD_PUBLIC_KEY_SUCCESS",
            keyVersion: e,
          });
        },
        createSecureFramesVerifiedKey: function (e, t) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_VERIFIED_KEY_CREATE",
            userId: e,
            key: t,
          });
        },
        deleteSecureFramesVerifiedKey: function (e, t) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_VERIFIED_KEY_DELETE",
            userId: e,
            serializedKey: t,
          });
        },
        deleteSecureFramesUserVerifiedKeys: function (e) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE",
            userId: e,
          });
        },
        createSecureFramesTransientKey: function (e, t) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_TRANSIENT_KEY_CREATE",
            userId: e,
            key: t,
          });
        },
        deleteSecureFramesTransientKey: function (e) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_TRANSIENT_KEY_DELETE",
            userId: e,
          });
        },
      };
    },
    630759: function (e, t, n) {
      n.d(t, {
        J6: function () {
          return D;
        },
        LO: function () {
          return U;
        },
        TQ: function () {
          return y;
        },
        ZU: function () {
          return M;
        },
        Zn: function () {
          return F;
        },
        bo: function () {
          return N;
        },
        kK: function () {
          return p;
        },
        om: function () {
          return O;
        },
        uX: function () {
          return L;
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
      var r = n(250683),
        i = n(512722),
        E = n.n(i),
        s = n(913527),
        u = n.n(s),
        a = n(544891),
        l = n(253135),
        o = n(314897),
        c = n(131951),
        _ = n(594174),
        d = n(70956),
        f = n(960048),
        S = n(51144),
        I = n(718629),
        R = n(615830),
        C = n(352954),
        Z = n(571826),
        A = n(760373),
        T = n(981631),
        g = n(689938);
      function y(e, t, n, r, i) {
        n
          ? I.Z.createSecureFramesVerifiedKey(e, t)
          : I.Z.createSecureFramesTransientKey(e, t),
          (0, Z.M1)({ channelId: r, userId: e, analyticsLocation: i });
      }
      function U(e, t, n) {
        if (n) {
          let n = (0, l.MK)(new Uint8Array(t));
          I.Z.deleteSecureFramesVerifiedKey(e, n);
        } else I.Z.deleteSecureFramesTransientKey(e);
      }
      function M(e, t) {
        C.Z.openSecureFramesUpdateConfirmation({
          title: g.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_TITLE,
          subtitle: g.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_SUBTITLE,
          onConfirm: () => {
            I.Z.deleteSecureFramesVerifiedKey(e, t), (0, Z.Pn)();
          },
        });
      }
      function F(e) {
        let t = _.default.getUser(e),
          n = S.ZP.getName(t);
        C.Z.openSecureFramesUpdateConfirmation({
          title: g.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_TITLE.format(
            { username: n },
          ),
          subtitle: g.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_SUBTITLE,
          onConfirm: () => {
            I.Z.deleteSecureFramesUserVerifiedKeys(e), (0, Z.DF)();
          },
        });
      }
      function N(e) {
        let t = u()(e),
          n = u()().diff(t, "s");
        if (n > 12 * d.Z.Seconds.DAYS_30) {
          let e = Math.round(n / (12 * d.Z.Seconds.DAYS_30));
          return g.Z.Messages.E2EE_USER_VERIFIED_YEARS_AGO.format({ count: e });
        }
        if (n > d.Z.Seconds.DAYS_30) {
          let e = Math.round(n / d.Z.Seconds.DAYS_30);
          return g.Z.Messages.E2EE_USER_VERIFIED_MONTHS_AGO.format({
            count: e,
          });
        }
        if (n > 7 * d.Z.Seconds.DAY) {
          let e = Math.round(n / (7 * d.Z.Seconds.DAY));
          return g.Z.Messages.E2EE_USER_VERIFIED_WEEKS_AGO.format({ count: e });
        } else if (n > d.Z.Seconds.DAY) {
          let e = Math.round(n / d.Z.Seconds.DAY);
          return g.Z.Messages.E2EE_USER_VERIFIED_DAYS_AGO.format({ count: e });
        } else if (n > d.Z.Seconds.HOUR) {
          let e = Math.round(n / d.Z.Seconds.HOUR);
          return g.Z.Messages.E2EE_USER_VERIFIED_HOURS_AGO.format({ count: e });
        } else {
          if (!(n > d.Z.Seconds.MINUTE))
            return g.Z.Messages.E2EE_USER_VERIFIED_SECONDS_AGO.format({
              count: n,
            });
          let e = Math.round(n / d.Z.Seconds.MINUTE);
          return g.Z.Messages.E2EE_USER_VERIFIED_MINUTES_AGO.format({
            count: e,
          });
        }
      }
      function p(e) {
        let {
          isCurrentUserKeyPersistent: t,
          isOtherUserKeyPersistent: n,
          otherUserNickname: r,
        } = e;
        if (t && n)
          return g.Z.Messages.E2EE_PERSISTENT_VERIFICATION_DESC.format({
            helpArticle: A.l4,
          });
        if (t)
          return g.Z.Messages.E2EE_OTHER_USER_TRANSIENT_VERIFICATION_DESC.format(
            { username: r, helpArticle: A.l4 },
          );
        if (n)
          return g.Z.Messages.E2EE_CURRENT_USER_TRANSIENT_VERIFICATION_DESC.format(
            { helpArticle: A.l4 },
          );
        else
          return g.Z.Messages.E2EE_TRANSIENT_VERIFICATION_DESC.format({
            helpArticle: A.l4,
          });
      }
      async function m(e) {
        let t = o.default.getStaticAuthSessionId();
        return (
          E()(
            null != t,
            "[getCurrentUserPublicKey] session id should not be null",
          ),
          await c.Z.getMLSSigningKey(t, e)
        );
      }
      function h(e) {
        let t = r.fromByteArray(new Uint8Array(e));
        return "data:application/octet-stream;base64,".concat(t);
      }
      async function D(e, t, n) {
        try {
          return (
            await a.tn.post({
              url: T.ANM.VOICE_MATCH_PUBLIC_KEY(e),
              body: { public_key: h(t), key_version: n },
            })
          ).body.is_match;
        } catch (e) {
          throw (f.Z.captureException(e), e);
        }
      }
      async function V(e) {
        let { key: t, signature: n } = await m(e);
        try {
          await a.tn.put({
            url: T.ANM.VOICE_PUBLIC_KEYS(),
            body: { public_key: h(t), signature: h(n), key_version: e },
          }),
            I.Z.addCurrentUserUploadedKeyVersionCached(e);
        } catch (e) {
          throw (f.Z.captureException(e), e);
        }
      }
      function K(e) {
        return R.Z.getUploadedKeyVersionsCached().includes(e);
      }
      async function O(e) {
        !K(e) && (await V(e));
      }
      async function L(e) {
        if (!K(e)) return await V(e), !0;
        let t = o.default.getId(),
          { key: n } = await m(e),
          r = await D(t, n, e);
        return !r && (0, Z.KA)(e), r;
      }
    },
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
        i,
        E,
        s,
        u = n(442837),
        a = n(46973),
        l = n(570140),
        o = n(314897),
        c = n(19780),
        _ = n(959457),
        d = n(729303),
        f = n(651941),
        S = n(981631);
      let I = new Map(),
        R = new Map(),
        C = !1,
        Z = null;
      function A() {
        let e = _.Z.getRTCConnections(),
          t = o.default.getId();
        return Object.entries(e).reduce((e, n) => {
          let [r, i] = n,
            E = i.getUserIds();
          if (!E.has(t)) return R.delete(r), !0;
          let s = !0;
          for (let e in E)
            if (e !== t && !0 !== I.get(e)) {
              s = !1;
              break;
            }
          let u = R.get(r) !== s;
          return R.set(r, s), !!u || e;
        }, !1);
      }
      function T() {
        var e;
        let t = null !== (e = c.Z.getUserIds()) && void 0 !== e ? e : new Set(),
          n = _.Z.getAllActiveStreamKeys(),
          r = o.default.getId(),
          i = !0;
        for (let e of t)
          if (r !== e && !0 !== I.get(e)) {
            i = !1;
            break;
          }
        let E = n.every((e) => R.get(e)),
          s = i && E,
          u = s !== C;
        return (C = s), u;
      }
      function g(e) {
        let { userId: t } = e;
        if (o.default.getId() === t) return !1;
        let n = (function (e) {
            let t = c.Z.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let n = new Uint8Array(t),
              r = f.Z.isKeyVerified(e, n) || d.Z.isKeyVerified(e, n),
              i = _.Z.getAllActiveStreamKeys()
                .filter((t) => _.Z.isUserConnected(t, e))
                .every((t) => {
                  let r = _.Z.getSecureFramesRosterMapEntry(t, e);
                  if (null == r) return !1;
                  let i = new Uint8Array(r);
                  for (let e = 0; e < n.length; e++)
                    if (n[e] !== i[e]) return !1;
                  return !0;
                }),
              E = r && i,
              s = E !== I.get(e);
            return I.set(e, E), s;
          })(t),
          r = A(),
          i = T();
        return n || r || i;
      }
      function y(e) {
        let { userIds: t } = e,
          n = o.default.getId(),
          r = t.reduce((e, t) => (n === t ? e : !!g({ userId: t }) || e), !1),
          i = A(),
          E = T();
        return r || i || E;
      }
      function U() {
        I.clear(), R.clear(), (C = !1);
      }
      class M extends (r = u.ZP.Store) {
        initialize() {
          this.waitFor(d.Z, f.Z, c.Z, _.Z);
        }
        isCallVerified() {
          return C;
        }
        isStreamVerified(e) {
          return R.get(e);
        }
        isUserVerified(e) {
          return I.get(e);
        }
      }
      (s = "SecureFramesVerifiedStore"),
        (E = "displayName") in (i = M)
          ? Object.defineProperty(i, E, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[E] = s),
        (t.Z = new M(l.Z, {
          CONNECTION_OPEN: U,
          VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            if (t === Z) return !1;
            (Z = t), U();
          },
          RTC_CONNECTION_STATE: function (e) {
            let { streamKey: t, state: n, context: r } = e;
            if (n !== S.hes.DISCONNECTED) return !1;
            switch (r) {
              case a.Yn.STREAM:
                if (null == t) return !1;
                return R.delete(t), T();
              case a.Yn.DEFAULT:
                U();
            }
          },
          RTC_CONNECTION_ROSTER_MAP_UPDATE: y,
          SECURE_FRAMES_TRANSIENT_KEY_CREATE: g,
          SECURE_FRAMES_TRANSIENT_KEY_DELETE: g,
          SECURE_FRAMES_VERIFIED_KEY_CREATE: g,
          SECURE_FRAMES_VERIFIED_KEY_DELETE: g,
          SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: g,
          SECURE_FRAMES_ALL_VERIFIED_KEYS_DELETE: y,
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
        i,
        E,
        s,
        u = n(442837),
        a = n(570140);
      let l = new Map();
      class o extends (r = u.ZP.Store) {
        getUsers() {
          return l;
        }
        isKeyVerified(e, t) {
          let n = l.get(e);
          if (null == t || null == n || n.length !== t.length) return !1;
          for (let e = 0; e < t.length; e++) if (t[e] !== n[e]) return !1;
          return !0;
        }
      }
      (s = "TransientKeyStore"),
        (E = "displayName") in (i = o)
          ? Object.defineProperty(i, E, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (i[E] = s),
        (t.Z = new o(a.Z, {
          SECURE_FRAMES_TRANSIENT_KEY_CREATE: function (e) {
            let { userId: t, key: n } = e,
              r = new Uint8Array(n);
            l.set(t, r);
          },
          SECURE_FRAMES_TRANSIENT_KEY_DELETE: function (e) {
            let { userId: t } = e;
            return l.delete(t);
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
        i = n(442837),
        E = n(253135),
        s = n(570140),
        u = n(709054);
      function a(e, t, n) {
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
      let l = {};
      class o extends (r = i.ZP.PersistedStore) {
        initialize(e) {
          var t;
          l =
            null !== (t = null == e ? void 0 : e.users) && void 0 !== t
              ? t
              : {};
        }
        getState() {
          return { users: l };
        }
        getKeyTrustedAt(e, t) {
          var n;
          let r = (0, E.MK)(t);
          return null === (n = l[e]) || void 0 === n ? void 0 : n[r];
        }
        isKeyVerified(e, t) {
          return null != this.getKeyTrustedAt(e, t);
        }
        getUserIds() {
          return u.default.keys(l);
        }
        getUserVerifiedKeys(e) {
          return l[e];
        }
      }
      a(o, "displayName", "VerifiedKeyStore"),
        a(o, "persistKey", "VerifiedKeyStore"),
        (t.Z = new o(s.Z, {
          SECURE_FRAMES_VERIFIED_KEY_CREATE: function (e) {
            let { userId: t, key: n } = e,
              r = (function (e) {
                var t;
                let n = null !== (t = l[e]) && void 0 !== t ? t : {};
                return (l[e] = n), n;
              })(t),
              i = new Uint8Array(n);
            r[(0, E.MK)(i)] = Date.now();
          },
          SECURE_FRAMES_VERIFIED_KEY_DELETE: function (e) {
            let { userId: t, serializedKey: n } = e,
              r = l[t];
            if (null == r) return !1;
            let i = delete r[n],
              E = !1;
            return (
              0 === Object.keys(r).length && (delete l[t], (E = !0)), i || E
            );
          },
          SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function (e) {
            let { userId: t } = e;
            return null != l[t] && delete l[t];
          },
          SECURE_FRAMES_ALL_VERIFIED_KEYS_DELETE: function () {
            l = {};
          },
        }));
    },
    539067: function (e, t, n) {
      n.d(t, {
        y: function () {
          return l;
        },
      }),
        n(47120);
      var r = n(470079),
        i = n(442837),
        E = n(19780),
        s = n(615830),
        u = n(630759),
        a = n(760373);
      function l(e) {
        let { userId: t } = e,
          n = (0, i.e7)([E.Z], () => E.Z.getSecureFramesRosterMapEntry(t)),
          l = (0, i.e7)([s.Z], () => s.Z.getPersistentCodesEnabled()),
          [o, c] = r.useState(!0),
          [_, d] = r.useState(!1),
          [f, S] = r.useState(!1),
          I = r.useCallback(async (e, t) => {
            c(!0);
            try {
              let n = a.GB,
                r = await (0, u.uX)(n),
                i = await (0, u.J6)(e, t, n);
              d(r), S(i);
            } catch (e) {
              d(!1), S(!1);
            } finally {
              c(!1);
            }
          }, []);
        return (
          r.useEffect(() => {
            l && null != n ? I(t, n) : (d(!1), S(!1), c(!1));
          }, [l, n, I, t]),
          {
            loading: o,
            isCurrentUserKeyPersistent: _,
            isOtherUserKeyPersistent: f,
          }
        );
      }
    },
    441894: function (e, t, n) {
      n.d(t, {
        J: function () {
          return a;
        },
      }),
        n(47120);
      var r = n(442837),
        i = n(592125),
        E = n(19780),
        s = n(977059),
        u = n(760373);
      function a(e) {
        let { channelId: t, location: n } = e,
          { enabled: a } = s.c.useExperiment({ location: n });
        return (0, r.e7)(
          [E.Z, i.Z],
          () =>
            (function (e, t) {
              var n;
              let [r, s] =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [E.Z, i.Z];
              if (!t || null == e || r.getChannelId() !== e) return !1;
              let a = s.getChannel(e);
              if (null == a || a.isGuildStageVoice()) return !1;
              let l =
                null === (n = r.getSecureFramesState()) || void 0 === n
                  ? void 0
                  : n.version;
              return null != l && l > u.HK;
            })(t, a, [E.Z, i.Z]),
          [t, a],
        );
      }
    },
    210975: function (e, t, n) {
      n.d(t, {
        m$: function () {
          return _;
        },
        wV: function () {
          return o;
        },
        zU: function () {
          return c;
        },
      });
      var r = n(442837),
        i = n(314897),
        E = n(19780),
        s = n(959457),
        u = n(98369),
        a = n(441894);
      function l(e, t) {
        return 0 === e.size || (1 === e.size && e.has(t));
      }
      function o(e) {
        let { userId: t, channelId: n, location: s } = e,
          l = (0, a.J)({ channelId: n, location: s });
        return (0, r.e7)(
          [u.Z, i.default, E.Z],
          () =>
            null != t &&
            l &&
            E.Z.isUserConnected(t) &&
            i.default.getId() !== t &&
            u.Z.isUserVerified(t),
          [l, t],
        );
      }
      function c(e) {
        let { streamKey: t, channelId: n, location: E } = e,
          o = (0, a.J)({ channelId: n, location: E });
        return (0, r.e7)(
          [u.Z, s.Z, i.default],
          () => {
            if (!o || null == t) return !1;
            let e = s.Z.getUserIds(t),
              n = i.default.getId();
            return !(null == e || l(e, n)) && u.Z.isStreamVerified(t);
          },
          [o, t],
        );
      }
      function _(e) {
        let { channelId: t, location: n } = e,
          s = (0, a.J)({ channelId: t, location: n });
        return (0, r.e7)(
          [u.Z, E.Z, i.default],
          () => {
            if (!s) return !1;
            let e = E.Z.getUserIds(),
              t = i.default.getId();
            return !(null == e || l(e, t)) && u.Z.isCallVerified();
          },
          [s],
        );
      }
    },
    65692: function (e, t, n) {
      n.d(t, {
        q: function () {
          return _;
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
        i = n(250683),
        E = n(512722),
        s = n.n(E),
        u = n(442837),
        a = n(253135),
        l = n(314897),
        o = n(19780),
        c = n(760373);
      function _(e) {
        let { userId: t } = e,
          n = (0, u.e7)([l.default], () => l.default.getId());
        s()(
          n !== t,
          "[useSecureFramesPairwiseFingerprint] Should not pass current user id.",
        );
        let [E, _] = r.useState(null),
          [d, f] = r.useState(!1),
          S = (0, u.e7)([o.Z], () => o.Z.getSecureFramesRosterMapEntry(t)),
          I = (0, u.e7)([o.Z], () => o.Z.getSecureFramesRosterMapEntry(n)),
          R = r.useCallback(async (e, t, n, r) => {
            f(!0);
            let E = await (0, a.Il)(
              c.Xj,
              new Uint8Array(t),
              e,
              new Uint8Array(r),
              n,
            );
            _(i.fromByteArray(E)), f(!1);
          }, []);
        return (
          r.useEffect(() => {
            null != S && null != I && R(n, I, t, S);
          }, [n, I, R, t, S]),
          r.useMemo(
            () => ({ fingerprint: E, userKey: S, loading: d }),
            [E, d, S],
          )
        );
      }
    },
    963410: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return M;
          },
        }),
        n(47120);
      var r = n(735250),
        i = n(470079),
        E = n(442837),
        s = n(481060),
        u = n(377171),
        a = n(592125),
        l = n(594174),
        o = n(5192),
        c = n(571826),
        _ = n(630759),
        d = n(539067),
        f = n(210975),
        S = n(301107),
        I = n(65692),
        R = n(785792),
        C = n(190054),
        Z = n(245581),
        A = n(760373),
        T = n(981631),
        g = n(689938),
        y = n(756843);
      function U(e) {
        let { badgeText: t, badgeColor: n } = e,
          E = i.useRef(t),
          u = i.useRef(n);
        return (0, r.jsx)(s.TextBadge, { text: E.current, color: u.current });
      }
      function M(e) {
        let { transitionState: t, userId: n, channelId: M, onClose: F } = e,
          N = (0, E.e7)([l.default], () => l.default.getUser(n)),
          p = (0, E.e7)([a.Z], () => {
            var e;
            return null === (e = a.Z.getChannel(M)) || void 0 === e
              ? void 0
              : e.getGuildId();
          }),
          m = o.ZP.useName(p, null, N),
          { fingerprint: h, userKey: D, loading: V } = (0, I.q)({ userId: n }),
          K = (0, S.W)({
            fingerprintBase64: h,
            chunkSize: A.iQ,
            desiredLength: A.KN,
          }),
          O = i.useCallback(() => {
            (0, c.s$)({ userId: n, channelId: M });
          }, [M, n]),
          L = (0, f.wV)({
            userId: n,
            channelId: M,
            location: "WebSecureFramesUserVerificationModal",
          }),
          {
            isCurrentUserKeyPersistent: v,
            isOtherUserKeyPersistent: b,
            loading: w,
          } = (0, d.y)({ userId: n }),
          Y = i.useCallback(() => {
            null != D &&
              ((0, _.TQ)(n, D, b, M, T.Sbl.E2EE_USER_VERIFY_MODAL), F());
          }, [D, n, b, M, F]),
          k = i.useCallback(() => {
            null != D && ((0, _.LO)(n, D, b), F());
          }, [D, n, b, F]),
          [x, B] = i.useMemo(
            () =>
              L
                ? [g.Z.Messages.E2EE_VERIFIED, u.Z.BG_BRAND]
                : [g.Z.Messages.NEW, u.Z.STATUS_DANGER],
            [L],
          ),
          P = i.useMemo(
            () =>
              (0, _.kK)({
                isCurrentUserKeyPersistent: v,
                isOtherUserKeyPersistent: b,
                otherUserNickname: m,
              }),
            [v, b, m],
          );
        return (
          i.useEffect(() => {
            (0, c.Rq)({ userId: n, channelId: M });
          }, [M, n]),
          (0, r.jsxs)(Z.Z, {
            transitionState: t,
            title: g.Z.Messages.E2EE_VERIFICATION_CODE,
            subtitle: g.Z.Messages.E2EE_USER_VERIFICATION_SUBTITLE.format({
              username: m,
            }),
            children: [
              (0, r.jsxs)("div", {
                className: y.verification,
                children: [
                  (0, r.jsxs)("div", {
                    className: y.header,
                    children: [
                      (0, r.jsx)(s.Heading, {
                        variant: "text-sm/bold",
                        color: "header-primary",
                        children: g.Z.Messages.E2EE_VERIFICATION_CODE,
                      }),
                      null != K &&
                        (0, r.jsx)(C.H, {
                          className: y.copyIcon,
                          chunks: K,
                          color: s.tokens.colors.INTERACTIVE_NORMAL,
                          onCopy: O,
                        }),
                      w || V
                        ? (0, r.jsx)(s.Spinner, {
                            className: y.spinner,
                            type: s.SpinnerTypes.SPINNING_CIRCLE,
                          })
                        : (0, r.jsx)(U, { badgeText: x, badgeColor: B }),
                    ],
                  }),
                  (0, r.jsx)(R.b, {
                    className: y.code,
                    chunks: K,
                    columns: A.ak,
                  }),
                ],
              }),
              (0, r.jsx)(s.Text, {
                className: y.footer,
                variant: "text-sm/normal",
                color: "text-muted",
                children: P,
              }),
              (0, r.jsx)(s.Button, {
                fullWidth: !0,
                className: y.verifiedButton,
                color: s.ButtonColors.BRAND,
                size: s.ButtonSizes.MEDIUM,
                look: s.ButtonLooks.FILLED,
                disabled: null == h || w || V,
                onClick: L ? k : Y,
                children: L
                  ? g.Z.Messages.E2EE_CLEAR_VERIFICATION
                  : g.Z.Messages.E2EE_MARK_AS_VERIFIED,
              }),
              (0, r.jsx)(s.Button, {
                fullWidth: !0,
                color: s.ButtonColors.PRIMARY,
                size: s.ButtonSizes.MEDIUM,
                look: s.ButtonLooks.FILLED,
                onClick: F,
                children: g.Z.Messages.CANCEL,
              }),
            ],
          })
        );
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
//# sourceMappingURL=4dfcf2753d276f232542.js.map
