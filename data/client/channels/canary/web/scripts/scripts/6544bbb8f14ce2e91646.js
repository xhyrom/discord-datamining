"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["3708"],
  {
    718629: function (e, t, n) {
      var r = n(570140),
        E = n(668781),
        i = n(287734),
        s = n(881052),
        u = n(314897),
        a = n(592125),
        l = n(979651),
        o = n(352954),
        c = n(630759),
        _ = n(760373),
        d = n(981631),
        f = n(689938);
      async function S(e, t) {
        if (e) {
          r.Z.dispatch({
            type: "SECURE_FRAMES_SETTINGS_UPDATE",
            persistentCodesEnabled: e,
          });
          try {
            await (0, c.om)(_.GB), null == t || t();
          } catch (t) {
            var n;
            let e = new s.Hx(t);
            r.Z.dispatch({
              type: "SECURE_FRAMES_SETTINGS_UPDATE",
              persistentCodesEnabled: !1,
            }),
              E.Z.show({
                title: f.Z.Messages.ERROR_GENERIC_TITLE,
                body:
                  null !== (n = e.getAnyErrorMessage()) && void 0 !== n
                    ? n
                    : f.Z.Messages.GENERIC_ERROR_BODY,
              });
          }
        } else
          r.Z.dispatch({
            type: "SECURE_FRAMES_SETTINGS_UPDATE",
            persistentCodesEnabled: e,
          }),
            null == t || t();
      }
      async function I(e) {
        let t = (function () {
          let e = l.Z.getVoiceStateForUser(u.default.getId()),
            t = a.Z.getChannel(null == e ? void 0 : e.channelId);
          return u.default.getSessionId() ===
            (null == e ? void 0 : e.sessionId) &&
            null != t &&
            t.type !== d.d4z.GUILD_STAGE_VOICE
            ? t.id
            : null;
        })();
        null != t
          ? o.Z.openSecureFramesUpdateConfirmation({
              title: e
                ? f.Z.Messages
                    .E2EE_ENABLE_PERSISTENT_KEYS_RECONNECT_CONFIRM_TITLE
                : f.Z.Messages
                    .E2EE_DISABLE_PERSISTENT_KEYS_RECONNECT_CONFIRM_TITLE,
              subtitle: e
                ? f.Z.Messages
                    .E2EE_ENABLE_PERSISTENT_KEYS_RECONNECT_CONFIRM_SUBTITLE
                : f.Z.Messages
                    .E2EE_DISABLE_PERSISTENT_KEYS_RECONNECT_CONFIRM_SUBTITLE,
              confirmText: f.Z.Messages.E2EE_PERSISTENT_KEYS_RECONNECT_CONFIRM,
              onConfirm: async () => {
                await S(e, () => {
                  i.default.disconnect(), i.default.selectVoiceChannel(t);
                });
              },
            })
          : await S(e);
      }
      t.Z = {
        updatePersistentCodesEnabled: I,
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
          return O;
        },
        LO: function () {
          return y;
        },
        TQ: function () {
          return g;
        },
        ZU: function () {
          return M;
        },
        Zn: function () {
          return U;
        },
        bo: function () {
          return F;
        },
        kK: function () {
          return p;
        },
        om: function () {
          return K;
        },
        uX: function () {
          return v;
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
        E = n(512722),
        i = n.n(E),
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
        T = n(571826),
        Z = n(760373),
        A = n(981631),
        N = n(689938);
      function g(e, t, n, r, E) {
        n
          ? I.Z.createSecureFramesVerifiedKey(e, t)
          : I.Z.createSecureFramesTransientKey(e, t),
          (0, T.M1)({ channelId: r, userId: e, analyticsLocation: E });
      }
      function y(e, t, n) {
        if (n) {
          let n = (0, l.MK)(new Uint8Array(t));
          I.Z.deleteSecureFramesVerifiedKey(e, n);
        } else I.Z.deleteSecureFramesTransientKey(e);
      }
      function M(e, t) {
        C.Z.openSecureFramesUpdateConfirmation({
          title: N.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_TITLE,
          subtitle: N.Z.Messages.E2EE_CLEAR_VERIFICATION_CONFIRM_SUBTITLE,
          onConfirm: () => {
            I.Z.deleteSecureFramesVerifiedKey(e, t), (0, T.Pn)();
          },
        });
      }
      function U(e) {
        let t = _.default.getUser(e),
          n = S.ZP.getName(t);
        C.Z.openSecureFramesUpdateConfirmation({
          title: N.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_TITLE.format(
            { username: n },
          ),
          subtitle: N.Z.Messages.E2EE_CLEAR_USER_VERIFICATION_CONFIRM_SUBTITLE,
          onConfirm: () => {
            I.Z.deleteSecureFramesUserVerifiedKeys(e), (0, T.DF)();
          },
        });
      }
      function F(e) {
        let t = u()(e),
          n = u()().diff(t, "s");
        if (n > 12 * d.Z.Seconds.DAYS_30) {
          let e = Math.round(n / (12 * d.Z.Seconds.DAYS_30));
          return N.Z.Messages.E2EE_USER_VERIFIED_YEARS_AGO.format({ count: e });
        }
        if (n > d.Z.Seconds.DAYS_30) {
          let e = Math.round(n / d.Z.Seconds.DAYS_30);
          return N.Z.Messages.E2EE_USER_VERIFIED_MONTHS_AGO.format({
            count: e,
          });
        }
        if (n > 7 * d.Z.Seconds.DAY) {
          let e = Math.round(n / (7 * d.Z.Seconds.DAY));
          return N.Z.Messages.E2EE_USER_VERIFIED_WEEKS_AGO.format({ count: e });
        } else if (n > d.Z.Seconds.DAY) {
          let e = Math.round(n / d.Z.Seconds.DAY);
          return N.Z.Messages.E2EE_USER_VERIFIED_DAYS_AGO.format({ count: e });
        } else if (n > d.Z.Seconds.HOUR) {
          let e = Math.round(n / d.Z.Seconds.HOUR);
          return N.Z.Messages.E2EE_USER_VERIFIED_HOURS_AGO.format({ count: e });
        } else {
          if (!(n > d.Z.Seconds.MINUTE))
            return N.Z.Messages.E2EE_USER_VERIFIED_SECONDS_AGO.format({
              count: n,
            });
          let e = Math.round(n / d.Z.Seconds.MINUTE);
          return N.Z.Messages.E2EE_USER_VERIFIED_MINUTES_AGO.format({
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
          return N.Z.Messages.E2EE_PERSISTENT_VERIFICATION_DESC.format({
            helpArticle: Z.l4,
          });
        if (t)
          return N.Z.Messages.E2EE_OTHER_USER_TRANSIENT_VERIFICATION_DESC.format(
            { username: r, helpArticle: Z.l4 },
          );
        if (n)
          return N.Z.Messages.E2EE_CURRENT_USER_TRANSIENT_VERIFICATION_DESC.format(
            { helpArticle: Z.l4 },
          );
        else
          return N.Z.Messages.E2EE_TRANSIENT_VERIFICATION_DESC.format({
            helpArticle: Z.l4,
          });
      }
      async function m(e) {
        let t = o.default.getStaticAuthSessionId();
        return (
          i()(
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
      async function O(e, t, n) {
        try {
          return (
            await a.tn.post({
              url: A.ANM.VOICE_MATCH_PUBLIC_KEY(e),
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
            url: A.ANM.VOICE_PUBLIC_KEYS(),
            body: { public_key: h(t), signature: h(n), key_version: e },
          }),
            I.Z.addCurrentUserUploadedKeyVersionCached(e);
        } catch (e) {
          throw (f.Z.captureException(e), e);
        }
      }
      function D(e) {
        return R.Z.getUploadedKeyVersionsCached().includes(e);
      }
      async function K(e) {
        !D(e) && (await V(e));
      }
      async function v(e) {
        if (!D(e)) return await V(e), !0;
        let t = o.default.getId(),
          { key: n } = await m(e),
          r = await O(t, n, e);
        return !r && (0, T.KA)(e), r;
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
        E,
        i,
        s,
        u = n(442837),
        a = n(46973),
        l = n(570140),
        o = n(569545),
        c = n(314897),
        _ = n(19780),
        d = n(959457),
        f = n(729303),
        S = n(651941),
        I = n(981631);
      let R = new Map(),
        C = new Map(),
        T = !1,
        Z = null;
      function A() {
        return d.Z.getAllActiveStreamKeys().reduce((e, t) => {
          let { ownerId: n } = (0, o.my)(t),
            r = !0 === R.get(n),
            E = C.get(t) !== r;
          return C.set(t, r), !!E || e;
        }, !1);
      }
      function N() {
        var e;
        let t = null !== (e = _.Z.getUserIds()) && void 0 !== e ? e : new Set(),
          n = c.default.getId(),
          r = !0;
        for (let e of t)
          if (n !== e && !0 !== R.get(e)) {
            r = !1;
            break;
          }
        let E = r !== T;
        return (T = r), E;
      }
      function g(e) {
        let { userId: t } = e;
        if (c.default.getId() === t) return !1;
        let n = (function (e) {
            let t = _.Z.getSecureFramesRosterMapEntry(e);
            if (null == t) return !1;
            let n = new Uint8Array(t),
              r = S.Z.isKeyVerified(e, n) || f.Z.isKeyVerified(e, n),
              E = d.Z.getAllActiveStreamKeys()
                .filter((t) => d.Z.isUserConnected(t, e))
                .every((t) => {
                  let r = d.Z.getSecureFramesRosterMapEntry(t, e);
                  if (null == r) return !1;
                  let E = new Uint8Array(r);
                  for (let e = 0; e < n.length; e++)
                    if (n[e] !== E[e]) return !1;
                  return !0;
                }),
              i = r && E,
              s = i !== R.get(e);
            return R.set(e, i), s;
          })(t),
          r = A(),
          E = N();
        return n || r || E;
      }
      function y() {
        R.clear(), C.clear(), (T = !1);
      }
      class M extends (r = u.ZP.Store) {
        initialize() {
          this.waitFor(f.Z, S.Z, _.Z, d.Z);
        }
        isCallVerified() {
          return T;
        }
        isStreamVerified(e) {
          return C.get(e);
        }
        isUserVerified(e) {
          return R.get(e);
        }
      }
      (s = "SecureFramesVerifiedStore"),
        (i = "displayName") in (E = M)
          ? Object.defineProperty(E, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (E[i] = s),
        (t.Z = new M(l.Z, {
          CONNECTION_OPEN: y,
          VOICE_CHANNEL_SELECT: function (e) {
            let { channelId: t } = e;
            if (t === Z) return !1;
            (Z = t), y();
          },
          RTC_CONNECTION_STATE: function (e) {
            let { streamKey: t, state: n, context: r } = e;
            if (n !== I.hes.DISCONNECTED) return !1;
            switch (r) {
              case a.Yn.STREAM:
                if (null == t) return !1;
                return C.delete(t), N();
              case a.Yn.DEFAULT:
                y();
            }
          },
          RTC_CONNECTION_ROSTER_MAP_UPDATE: function (e) {
            let { userIds: t } = e,
              n = c.default.getId(),
              r = t.reduce(
                (e, t) => (n === t ? e : !!g({ userId: t }) || e),
                !1,
              ),
              E = A(),
              i = N();
            return r || E || i;
          },
          SECURE_FRAMES_TRANSIENT_KEY_CREATE: g,
          SECURE_FRAMES_TRANSIENT_KEY_DELETE: g,
          SECURE_FRAMES_VERIFIED_KEY_CREATE: g,
          SECURE_FRAMES_VERIFIED_KEY_DELETE: g,
          SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: g,
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
        E,
        i,
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
        (i = "displayName") in (E = o)
          ? Object.defineProperty(E, i, {
              value: s,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (E[i] = s),
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
        E = n(442837),
        i = n(253135),
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
      class o extends (r = E.ZP.PersistedStore) {
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
          let r = (0, i.MK)(t);
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
              E = new Uint8Array(n);
            r[(0, i.MK)(E)] = Date.now();
          },
          SECURE_FRAMES_VERIFIED_KEY_DELETE: function (e) {
            let { userId: t, serializedKey: n } = e,
              r = l[t];
            if (null == r) return !1;
            let E = delete r[n],
              i = !1;
            return (
              0 === Object.keys(r).length && (delete l[t], (i = !0)), E || i
            );
          },
          SECURE_FRAMES_USER_VERIFIED_KEYS_DELETE: function (e) {
            let { userId: t } = e;
            return null != l[t] && delete l[t];
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
        E = n(442837),
        i = n(19780),
        s = n(615830),
        u = n(630759),
        a = n(760373);
      function l(e) {
        let { userId: t } = e,
          n = (0, E.e7)([i.Z], () => i.Z.getSecureFramesRosterMapEntry(t)),
          l = (0, E.e7)([s.Z], () => s.Z.getPersistentCodesEnabled()),
          [o, c] = r.useState(!0),
          [_, d] = r.useState(!1),
          [f, S] = r.useState(!1),
          I = r.useCallback(async (e, t) => {
            c(!0);
            try {
              let n = a.GB,
                r = await (0, u.uX)(n),
                E = await (0, u.J6)(e, t, n);
              d(r), S(E);
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
        E = n(592125),
        i = n(19780),
        s = n(977059),
        u = n(760373);
      function a(e) {
        let { channelId: t, location: n } = e,
          { enabled: a } = s.c.useExperiment({ location: n });
        return (0, r.e7)(
          [i.Z, E.Z],
          () =>
            (function (e, t) {
              var n;
              let [r, s] =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [i.Z, E.Z];
              if (!t || null == e || r.getChannelId() !== e) return !1;
              let a = s.getChannel(e);
              if (null == a || a.isGuildStageVoice()) return !1;
              let l =
                null === (n = r.getSecureFramesState()) || void 0 === n
                  ? void 0
                  : n.version;
              return null != l && l > u.HK;
            })(t, a, [i.Z, E.Z]),
          [t, a],
        );
      }
    },
    210975: function (e, t, n) {
      n.d(t, {
        m$: function () {
          return d;
        },
        wV: function () {
          return c;
        },
        zU: function () {
          return _;
        },
      });
      var r = n(442837),
        E = n(569545),
        i = n(314897),
        s = n(19780),
        u = n(959457),
        a = n(98369),
        l = n(441894);
      function o(e, t) {
        return 0 === e.size || (1 === e.size && e.has(t));
      }
      function c(e) {
        let { userId: t, channelId: n, location: E } = e,
          u = (0, l.J)({ channelId: n, location: E });
        return (0, r.e7)(
          [a.Z, i.default, s.Z],
          () =>
            null != t &&
            u &&
            s.Z.isUserConnected(t) &&
            i.default.getId() !== t &&
            a.Z.isUserVerified(t),
          [u, t],
        );
      }
      function _(e) {
        let { streamKey: t, channelId: n, location: s } = e,
          c = (0, l.J)({ channelId: n, location: s });
        return (0, r.e7)(
          [a.Z, u.Z, i.default],
          () => {
            if (!c || null == t) return !1;
            let e = u.Z.getUserIds(t),
              n = i.default.getId();
            if (null == e || o(e, n)) return !1;
            let { ownerId: r } = (0, E.my)(t);
            return r !== n && a.Z.isStreamVerified(t);
          },
          [c, t],
        );
      }
      function d(e) {
        let { channelId: t, location: n } = e,
          E = (0, l.J)({ channelId: t, location: n });
        return (0, r.e7)(
          [a.Z, s.Z, i.default],
          () => {
            if (!E) return !1;
            let e = s.Z.getUserIds(),
              t = i.default.getId();
            return !(null == e || o(e, t)) && a.Z.isCallVerified();
          },
          [E],
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
        E = n(250683),
        i = n(512722),
        s = n.n(i),
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
        let [i, _] = r.useState(null),
          [d, f] = r.useState(!1),
          S = (0, u.e7)([o.Z], () => o.Z.getSecureFramesRosterMapEntry(t)),
          I = (0, u.e7)([o.Z], () => o.Z.getSecureFramesRosterMapEntry(n)),
          R = r.useCallback(async (e, t, n, r) => {
            f(!0);
            let i = await (0, a.Il)(
              c.Xj,
              new Uint8Array(t),
              e,
              new Uint8Array(r),
              n,
            );
            _(E.fromByteArray(i)), f(!1);
          }, []);
        return (
          r.useEffect(() => {
            null != S && null != I && R(n, I, t, S);
          }, [n, I, R, t, S]),
          r.useMemo(
            () => ({ fingerprint: i, userKey: S, loading: d }),
            [i, d, S],
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
        E = n(470079),
        i = n(442837),
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
        T = n(245581),
        Z = n(760373),
        A = n(981631),
        N = n(689938),
        g = n(756843);
      function y(e) {
        let { badgeText: t, badgeColor: n } = e,
          i = E.useRef(t),
          u = E.useRef(n);
        return (0, r.jsx)(s.TextBadge, { text: i.current, color: u.current });
      }
      function M(e) {
        let { transitionState: t, userId: n, channelId: M, onClose: U } = e,
          F = (0, i.e7)([l.default], () => l.default.getUser(n)),
          p = (0, i.e7)([a.Z], () => {
            var e;
            return null === (e = a.Z.getChannel(M)) || void 0 === e
              ? void 0
              : e.getGuildId();
          }),
          m = o.ZP.useName(p, null, F),
          { fingerprint: h, userKey: O, loading: V } = (0, I.q)({ userId: n }),
          D = (0, S.W)({
            fingerprintBase64: h,
            chunkSize: Z.iQ,
            desiredLength: Z.KN,
          }),
          K = E.useCallback(() => {
            (0, c.s$)({ userId: n, channelId: M });
          }, [M, n]),
          v = (0, f.wV)({
            userId: n,
            channelId: M,
            location: "WebSecureFramesUserVerificationModal",
          }),
          {
            isCurrentUserKeyPersistent: L,
            isOtherUserKeyPersistent: b,
            loading: w,
          } = (0, d.y)({ userId: n }),
          Y = E.useCallback(() => {
            null != O &&
              ((0, _.TQ)(n, O, b, M, A.Sbl.E2EE_USER_VERIFY_MODAL), U());
          }, [O, n, b, M, U]),
          k = E.useCallback(() => {
            null != O && ((0, _.LO)(n, O, b), U());
          }, [O, n, b, U]),
          [B, x] = E.useMemo(
            () =>
              v
                ? [N.Z.Messages.E2EE_VERIFIED, u.Z.BG_BRAND]
                : [N.Z.Messages.NEW, u.Z.STATUS_DANGER],
            [v],
          ),
          P = E.useMemo(
            () =>
              (0, _.kK)({
                isCurrentUserKeyPersistent: L,
                isOtherUserKeyPersistent: b,
                otherUserNickname: m,
              }),
            [L, b, m],
          );
        return (
          E.useEffect(() => {
            (0, c.Rq)({ userId: n, channelId: M });
          }, [M, n]),
          (0, r.jsxs)(T.Z, {
            transitionState: t,
            title: N.Z.Messages.E2EE_VERIFICATION_CODE,
            subtitle: N.Z.Messages.E2EE_USER_VERIFICATION_SUBTITLE.format({
              username: m,
            }),
            children: [
              (0, r.jsxs)("div", {
                className: g.verification,
                children: [
                  (0, r.jsxs)("div", {
                    className: g.header,
                    children: [
                      (0, r.jsx)(s.Heading, {
                        variant: "text-sm/bold",
                        color: "header-primary",
                        children: N.Z.Messages.E2EE_VERIFICATION_CODE,
                      }),
                      null != D &&
                        (0, r.jsx)(C.H, {
                          className: g.copyIcon,
                          chunks: D,
                          color: s.tokens.colors.INTERACTIVE_NORMAL,
                          onCopy: K,
                        }),
                      w || V
                        ? (0, r.jsx)(s.Spinner, {
                            className: g.spinner,
                            type: s.SpinnerTypes.SPINNING_CIRCLE,
                          })
                        : (0, r.jsx)(y, { badgeText: B, badgeColor: x }),
                    ],
                  }),
                  (0, r.jsx)(R.b, {
                    className: g.code,
                    chunks: D,
                    columns: Z.ak,
                  }),
                ],
              }),
              (0, r.jsx)(s.Text, {
                className: g.footer,
                variant: "text-sm/normal",
                color: "text-muted",
                children: P,
              }),
              (0, r.jsx)(s.Button, {
                fullWidth: !0,
                className: g.verifiedButton,
                color: s.ButtonColors.BRAND,
                size: s.ButtonSizes.MEDIUM,
                look: s.ButtonLooks.FILLED,
                disabled: null == h || w || V,
                onClick: v ? k : Y,
                children: v
                  ? N.Z.Messages.E2EE_CLEAR_VERIFICATION
                  : N.Z.Messages.E2EE_MARK_AS_VERIFIED,
              }),
              (0, r.jsx)(s.Button, {
                fullWidth: !0,
                color: s.ButtonColors.PRIMARY,
                size: s.ButtonSizes.MEDIUM,
                look: s.ButtonLooks.FILLED,
                onClick: U,
                children: N.Z.Messages.CANCEL,
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
//# sourceMappingURL=6544bbb8f14ce2e91646.js.map
