"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72239"],
  {
    769591(t, i, n) {
      n.d(i, { b8: () => g, ct: () => _, os: () => v }), n(938796);
      var e = n(665260),
        r = n(17928),
        l = n(544743),
        u = n(543465),
        o = n(935208),
        a = n(652215),
        S = n(355097),
        s = n(985018);
      function g() {
        return [
          {
            id: "15-minutes",
            label: s.intl.string(s.t["8ot6gv"]),
            value: S.Xx.MINUTES_15,
          },
          {
            id: "1-hour",
            label: s.intl.string(s.t.UMWBZr),
            value: S.Xx.HOURS_1,
          },
          {
            id: "3-hours",
            label: s.intl.string(s.t.QmYWtu),
            value: S.Xx.HOURS_3,
          },
          {
            id: "8-hours",
            label: s.intl.string(s.t.EpAXPC),
            value: S.Xx.HOURS_8,
          },
          {
            id: "24-hours",
            label: s.intl.string(s.t["755t4q"]),
            value: S.Xx.HOURS_24,
          },
          {
            id: "forever",
            label: s.intl.string(s.t.r3LawO),
            value: S.Xx.ALWAYS,
          },
        ];
      }
      let N = {
        ignoreMute: !1,
        ignoreUnreadSetting: !0,
        ignoreNotificationSetting: !1,
      };
      function _(t) {
        let i =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : N;
        return o.default.keys(t).filter((n) => {
          let r = t[n].message_notifications !== a.orn.NULL,
            u =
              e.Lt(t[n].flags ?? 0, S.vv.UNREADS_ALL_MESSAGES) ||
              e.Lt(t[n].flags ?? 0, S.vv.UNREADS_ONLY_MENTIONS);
          return (
            (!i.ignoreUnreadSetting && u) ||
            (!i.ignoreNotificationSetting && r) ||
            (!i.ignoreMute && (0, l.tG)(t[n]))
          );
        });
      }
      function v(t) {
        return (0, r.bG)([u.Ay], () => u.Ay.useNewNotifications);
      }
    },
    393432(t, i, n) {
      n.d(i, { PW: () => u, mD: () => o, md: () => l });
      var e = n(665260),
        r = n(355097);
      function l(t, i) {
        return e.UI(
          e.iE(t, r.n3.UNREADS_ALL_MESSAGES, r.n3.UNREADS_ONLY_MENTIONS),
          i,
        );
      }
      let u = (t) =>
        e.iE(t, r.vv.UNREADS_ALL_MESSAGES, r.vv.UNREADS_ONLY_MENTIONS);
      function o(t, i) {
        return e.UI(u(t), i);
      }
    },
  },
]);
//# sourceMappingURL=72239.7279b803a4526382.js.map
