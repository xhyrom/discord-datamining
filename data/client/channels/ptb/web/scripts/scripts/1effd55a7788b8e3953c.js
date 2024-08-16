"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["95437"],
  {
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
        u,
        i,
        a = n(442837),
        c = n(570140);
      let o = new Map();
      class s extends (r = a.ZP.Store) {
        getUsers() {
          return o;
        }
        isKeyVerified(e, t) {
          let n = o.get(e);
          if (null == t || null == n || n.length !== t.length) return !1;
          for (let e = 0; e < t.length; e++) if (t[e] !== n[e]) return !1;
          return !0;
        }
      }
      (i = "TransientKeyStore"),
        (u = "displayName") in (l = s)
          ? Object.defineProperty(l, u, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[u] = i),
        (t.Z = new s(c.Z, {
          SECURE_FRAMES_TRANSIENT_KEY_CREATE: function (e) {
            let { userId: t, key: n } = e,
              r = new Uint8Array(n);
            o.set(t, r);
          },
          SECURE_FRAMES_TRANSIENT_KEY_DELETE: function (e) {
            let { userId: t } = e;
            return o.delete(t);
          },
        }));
    },
    441894: function (e, t, n) {
      n.d(t, {
        J: function () {
          return c;
        },
      }),
        n(47120);
      var r = n(442837),
        l = n(592125),
        u = n(19780),
        i = n(977059),
        a = n(760373);
      function c(e) {
        let { channelId: t, location: n } = e,
          { enabled: c } = i.c.useExperiment({ location: n });
        return (0, r.e7)(
          [u.Z, l.Z],
          () =>
            (function (e, t) {
              var n;
              let [r, i] =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : [u.Z, l.Z];
              if (!t || null == e || r.getChannelId() !== e) return !1;
              let c = i.getChannel(e);
              if (null == c || c.isGuildStageVoice()) return !1;
              let o =
                null === (n = r.getSecureFramesState()) || void 0 === n
                  ? void 0
                  : n.version;
              return null != o && o > a.HK;
            })(t, c, [u.Z, l.Z]),
          [t, c],
        );
      }
    },
    210975: function (e, t, n) {
      n.d(t, {
        m$: function () {
          return g;
        },
        wV: function () {
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
        l = n(442837),
        u = n(470956),
        i = n(314897),
        a = n(19780),
        c = n(979651),
        o = n(709054),
        s = n(729303),
        d = n(651941),
        f = n(441894);
      function Z(e) {
        let { voiceStates: t, version: n } = (0, l.cj)([c.Z], () => ({
            voiceStates: c.Z.getVoiceStatesForChannel(e),
            version: c.Z.getVoiceStateVersion(),
          })),
          i = r.useMemo(() => o.default.keys(t), [t, n]);
        return (0, u.Yp)(e, i);
      }
      function C(e) {
        let [t, n, r] =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : [a.Z, d.Z, s.Z];
        if (null == e) return !1;
        let l = t.getSecureFramesRosterMapEntry(e);
        if (null == l) return !1;
        let u = new Uint8Array(l);
        return n.isKeyVerified(e, u) || r.isKeyVerified(e, u);
      }
      function E(e) {
        let { userId: t, channelId: n, location: r } = e,
          u = Z(n),
          c = (0, f.J)({ channelId: n, location: r }),
          o = (0, l.e7)([i.default], () => i.default.getId()),
          E = (0, l.e7)([a.Z, d.Z, s.Z], () => C(t, [a.Z, d.Z, s.Z])),
          g = o !== t;
        return c && g && E && u.has(o) && null != t && u.has(t);
      }
      function g(e) {
        let { channelId: t, location: n } = e,
          r = (0, f.J)({ channelId: t, location: n }),
          u = Z(t),
          c = (0, l.e7)([i.default], () => i.default.getId());
        return (0, l.e7)(
          [a.Z, d.Z, s.Z],
          () => {
            if (!r) return !1;
            for (let e of u) {
              if (e !== c) {
                if (!C(e, [a.Z, d.Z, s.Z])) return !1;
              }
            }
            return !0;
          },
          [c, r, u],
        );
      }
    },
    470956: function (e, t, n) {
      n.d(t, {
        Es: function () {
          return d;
        },
        Eu: function () {
          return C;
        },
        Yp: function () {
          return Z;
        },
        bt: function () {
          return f;
        },
      }),
        n(47120),
        n(653041);
      var r = n(470079),
        l = n(392711),
        u = n(442837),
        i = n(413523),
        a = n(314897),
        c = n(878884),
        o = n(19780),
        s = n(979651);
      function d(e, t) {
        let n = (0, u.e7)([c.Z, o.Z], () =>
          e === o.Z.getChannelId() ? c.Z.getDesyncedVoiceStates() : null,
        );
        return r.useMemo(
          () =>
            (function (e, t) {
              if (null == e || 0 === e.length) return t;
              let n = [],
                r = new Set();
              for (let e of t) n.push(e), r.add(e.user.id);
              return (
                e.forEach((e) => {
                  n.splice(
                    (0, l.sortedIndexBy)(n, e, (e) => {
                      let { comparator: t } = e;
                      return t;
                    }),
                    0,
                    e,
                  );
                }),
                n
              );
            })(n, t),
          [n, t],
        );
      }
      function f(e, t) {
        var n;
        let a =
          ((n = e),
          (0, u.e7)([c.Z, o.Z], () =>
            n === o.Z.getChannelId() ? c.Z.getDesyncedParticipants() : null,
          ));
        return r.useMemo(
          () =>
            (function (e, t) {
              if (null == e || 0 === e.length) return t;
              let n = [...t];
              return (
                e.forEach((e) => {
                  n.splice(
                    (0, l.sortedIndexBy)(n, e, (e) => (0, i.Yr)(e)),
                    0,
                    e,
                  );
                }),
                n
              );
            })(a, t),
          [a, t],
        );
      }
      function Z(e, t) {
        let n = (0, u.e7)([c.Z, o.Z], () =>
          e === o.Z.getChannelId() ? c.Z.getDesyncedUserIds() : null,
        );
        return r.useMemo(() => {
          let e = new Set();
          return (
            t.forEach((t) => e.add(t)),
            null == n || n.forEach((t) => e.add(t)),
            e
          );
        }, [n, t]);
      }
      function C(e, t) {
        let n = (0, u.e7)([a.default], () => a.default.getId() === t),
          l = (0, u.e7)([o.Z], () => o.Z.getChannelId()),
          i = r.useRef(null),
          [c, d] = r.useState(!1),
          [f, Z] = r.useState(!1),
          C = (0, u.e7)(
            [o.Z, s.Z],
            () =>
              null != t &&
              null != e &&
              o.Z.getChannelId() === e &&
              null != s.Z.isInChannel(e, t) &&
              o.Z.isUserConnected(t),
          ),
          E = (0, u.e7)(
            [o.Z, s.Z],
            () =>
              null != t &&
              null != e &&
              o.Z.getChannelId() === e &&
              null != s.Z.isInChannel(e, t) &&
              !o.Z.isUserConnected(t),
          );
        return (
          r.useEffect(() => {
            C && Z(!0);
          }, [C]),
          r.useEffect(() => {
            l !== e && Z(!1);
          }, [e, l]),
          r.useEffect(
            () => (
              E && null == i.current
                ? (i.current = setTimeout(() => {
                    (i.current = null), d(!0);
                  }, 250))
                : (clearTimeout(i.current), (i.current = null), d(!1)),
              () => {
                clearTimeout(i.current), (i.current = null);
              }
            ),
            [E],
          ),
          !n && f && c
        );
      }
    },
    878884: function (e, t, n) {
      n(47120), n(724458);
      var r,
        l,
        u,
        i,
        a = n(442837),
        c = n(570140),
        o = n(642047),
        s = n(189786),
        d = n(5192),
        f = n(592125),
        Z = n(19780),
        C = n(594174),
        E = n(979651),
        g = n(938475),
        h = n(981631),
        S = n(354459);
      let I = new o.Z(),
        N = new o.Z(),
        T = new Set();
      function y(e, t, n) {
        let r = new s.Z({ userId: e.id, channelId: n }),
          l = (0, g.PH)(r, null != t ? t : h.ME, e.id);
        I.set(e.id, l);
        let u = {
          type: S.fO.USER,
          user: e,
          id: e.id,
          streamId: null,
          voiceState: r,
          voicePlatform: null,
          speaking: !1,
          lastSpoke: 0,
          soundsharing: !1,
          ringing: !1,
          userNick: d.ZP.getName(t, n, e),
          localVideoDisabled: !1,
        };
        N.set(e.id, u);
      }
      function p(e) {
        let t = I.delete(e),
          n = N.delete(e),
          r = T.delete(e);
        return t || n || r;
      }
      function v() {
        var e;
        let t = Z.Z.getChannelId();
        if (null == t) return !1;
        let n =
            null === (e = f.Z.getChannel(t)) || void 0 === e
              ? void 0
              : e.getGuildId(),
          r = !1;
        return (
          T.forEach((e) => {
            if (null != E.Z.getVoiceStateForChannel(t, e)) {
              T.delete(e);
              return;
            }
            let l = C.default.getUser(e);
            null != l && ((r = !0), T.delete(e), y(l, n, t));
          }),
          r
        );
      }
      function _() {
        I.clear(), N.clear(), T.clear();
      }
      class m extends (r = a.ZP.Store) {
        initialize() {
          this.waitFor(E.Z, C.default, f.Z, Z.Z), this.syncWith([C.default], v);
        }
        get desyncedVoiceStatesCount() {
          return I.size();
        }
        getDesyncedUserIds() {
          return I.keys();
        }
        getDesyncedVoiceStates() {
          return I.values();
        }
        getDesyncedParticipants() {
          return N.values();
        }
      }
      (i = "RTCConnectionDesyncStore"),
        (u = "displayName") in (l = m)
          ? Object.defineProperty(l, u, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (l[u] = i),
        (t.Z = new m(c.Z, {
          CONNECTION_OPEN: function () {
            _();
          },
          VOICE_CHANNEL_SELECT: _,
          RTC_CONNECTION_STATE: function (e) {
            let { state: t } = e;
            if (t !== h.hes.DISCONNECTED) return !1;
            _();
          },
          VOICE_STATE_UPDATES: function (e) {
            let { voiceStates: t } = e,
              n = Z.Z.getChannelId();
            return (
              null != n &&
              t.reduce((e, t) => {
                let { userId: r, channelId: l } = t;
                return (l === n && !!p(r)) || e;
              }, !1)
            );
          },
          RTC_CONNECTION_CLIENT_CONNECT: function (e) {
            let { userIds: t, guildId: n, channelId: r } = e;
            return t.reduce((e, t) => {
              if (null != E.Z.getVoiceStateForChannel(r, t)) return e;
              let l = C.default.getUser(t);
              return null == l ? (T.add(t), e) : (y(l, n, r), !0);
            }, !1);
          },
          RTC_CONNECTION_CLIENT_DISCONNECT: function (e) {
            let { userId: t } = e;
            return p(t);
          },
        }));
    },
  },
]);
//# sourceMappingURL=1effd55a7788b8e3953c.js.map
