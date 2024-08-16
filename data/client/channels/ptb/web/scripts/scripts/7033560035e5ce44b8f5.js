"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["81975"],
  {
    484097: function (e, t, l) {
      l.r(t);
      var n = l(735250);
      l(470079);
      var i = l(593473),
        u = l(266067),
        a = l(442837),
        r = l(287734),
        o = l(703656),
        d = l(592125),
        s = l(896797),
        c = l(998502),
        h = l(981631);
      a.ZP.initialize();
      t.default = (e) => {
        var t;
        let { location: l } = e;
        return (0, n.jsx)(u.l_, {
          to:
            null !==
              (t = (function e(t) {
                let l =
                    !(arguments.length > 1) ||
                    void 0 === arguments[1] ||
                    arguments[1],
                  n = d.Z.getChannel(t);
                if (null != n) {
                  c.ZP.focus();
                  let e = n.guild_id,
                    t = n.id;
                  return (
                    n.type === h.d4z.GUILD_VOICE &&
                      (null != n.getGuildId() &&
                        r.default.selectVoiceChannel(n.id),
                      (t = e)),
                    null != t && null != e ? h.Z5c.CHANNEL(e, t) : null
                  );
                }
                if (l) {
                  let l = () => {
                    d.Z.removeChangeListener(l);
                    let n = e(t, !1);
                    null != n && (0, o.uL)(n);
                  };
                  d.Z.addChangeListener(l);
                }
                return null;
              })((0, i.parse)(l.search).channelId)) && void 0 !== t
              ? t
              : s.Z.fallbackRoute,
        });
      };
    },
    896797: function (e, t, l) {
      var n,
        i = l(442837),
        u = l(433517),
        a = l(570140),
        r = l(981631);
      function o(e, t, l) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: l,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = l),
          e
        );
      }
      let d = { lastViewedPath: null, lastViewedNonVoicePath: null },
        s = d,
        c = "LAST_VIEWED_PATH";
      class h extends (n = i.ZP.PersistedStore) {
        initialize() {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : d;
          s = null != e ? e : d;
        }
        get defaultRoute() {
          return r.Z5c.ME;
        }
        get lastNonVoiceRoute() {
          var e;
          return null !== (e = s.lastViewedNonVoicePath) && void 0 !== e
            ? e
            : r.Z5c.ME;
        }
        get fallbackRoute() {
          return r.Z5c.ME;
        }
        getState() {
          return s;
        }
      }
      o(h, "displayName", "DefaultRouteStore"),
        o(h, "persistKey", "DefaultRouteStore"),
        o(h, "migrations", [
          () => {
            let e = u.K.get(c, null);
            return u.K.remove(c), { lastViewedPath: e };
          },
        ]),
        (t.Z = new h(a.Z, {
          SAVE_LAST_ROUTE: function (e) {
            let { path: t } = e;
            return (s.lastViewedPath = t), !0;
          },
          SAVE_LAST_NON_VOICE_ROUTE: function (e) {
            let { path: t } = e;
            return (s.lastViewedNonVoicePath = t), !0;
          },
        }));
    },
  },
]);
//# sourceMappingURL=7033560035e5ce44b8f5.js.map
