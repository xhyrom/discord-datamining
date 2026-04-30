"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["62393"],
  {
    960736(e, t, i) {
      i.d(t, {
        N9: () => v,
        Z1: () => w,
        dR: () => a,
        jJ: () => h,
        lD: () => c,
        p9: () => A,
        qO: () => m,
        tJ: () => r,
        uE: () => k,
        xD: () => S,
        xP: () => g,
      });
      var d = i(353640),
        l = i(873298),
        o = i(253932),
        n = i(287809);
      let s = { nickname: void 0, dmsAllowed: !o.Zt.getSetting() };
      function u(e) {
        let t = o._Z.getSetting();
        return (
          t !== l.Qd.ACTIVITY_STATUS_ON &&
          (t !== l.Qd.ACTIVITY_STATUS_ON_FOR_LARGE_GUILDS ||
            null == e ||
            !(e > 200))
        );
      }
      let c = (0, d.v)((e) => ({
          nickname: s.nickname,
          dmsAllowed: s.dmsAllowed,
          showActivity: !0,
          inviteCode: void 0,
          guildId: void 0,
          touched: !1,
          setNickname: (t) => e((e) => ({ ...e, nickname: t, touched: !0 })),
          setDmsAllowed: (t) =>
            e((e) => ({ ...e, dmsAllowed: t, touched: !0 })),
          setShowActivity: (t) =>
            e((e) => ({ ...e, showActivity: t, touched: !0 })),
          setInviteCode: (t) =>
            e((e) => ({ ...e, inviteCode: t, touched: !0 })),
          setGuildId: (t) => e((e) => ({ ...e, guildId: t, touched: !0 })),
          initialize: (t, i, d) =>
            e((e) => ({
              ...e,
              guildSize: t,
              inviteCode: i,
              guildId: d,
              showActivity: u(t),
              dmsAllowed: !o.Zt.getSetting(),
              touched: !1,
            })),
          reset: () =>
            e((e) => ({
              nickname: s.nickname,
              dmsAllowed: s.dmsAllowed,
              showActivity: u(e.guildSize),
              inviteCode: void 0,
              guildId: void 0,
              guildSize: e.guildSize,
              touched: !1,
            })),
        })),
        a = (e, t, i) => {
          c.getState().initialize(e, t, i);
        },
        g = () => {
          c.getState().reset();
        },
        m = () => {
          let e = c.getState();
          return (
            e.nickname !== s.nickname ||
            e.dmsAllowed !== s.dmsAllowed ||
            e.showActivity !== u(e.guildSize)
          );
        },
        A = () => c.getState().inviteCode,
        S = () => c.getState().guildId,
        h = () => c.getState().touched,
        w = () => c.getState().dmsAllowed,
        r = () => c.getState().nickname,
        v = () => c.getState().showActivity,
        k = () => {
          let { nickname: e } = c();
          if (null != e && "" !== e.trim()) return e;
          let t = n.default.getCurrentUser();
          return t?.globalName ?? t?.username ?? "";
        };
    },
  },
]);
//# sourceMappingURL=62393.b6c103158070d5ce.js.map
