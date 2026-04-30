"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["21750"],
  {
    218113(t, e, n) {
      n.d(e, { Qs: () => r, Sz: () => s, aE: () => d, f7: () => u });
      var i = n(136722),
        l = n(818348),
        a = n(985018);
      let r = 2,
        u = 2,
        d = () => [
          { id: "1", value: 1, label: a.intl.string(a.t["GA/d4I"]) },
          { id: "2", value: 2, label: a.intl.string(a.t["+rHFej"]) },
          { id: "4", value: 4, label: a.intl.string(a.t["5CNt/M"]) },
          { id: "6", value: 6, label: a.intl.string(a.t.oQ4PNE) },
          { id: "12", value: 12, label: a.intl.string(a.t.LOQ0j6) },
          { id: "24", value: 24, label: a.intl.string(a.t["W0+LsV"]) },
        ],
        s = i.kg(
          l.xB.ADMINISTRATOR,
          l.xB.MANAGE_GUILD,
          l.xB.BAN_MEMBERS,
          l.xB.KICK_MEMBERS,
          l.xB.MODERATE_MEMBERS,
        );
    },
    903093(t, e, n) {
      n.d(e, {
        $5: () => o,
        P$: () => D,
        Qm: () => c,
        _J: () => A,
        di: () => E,
        fi: () => S,
        k$: () => s,
        mR: () => m,
        ql: () => f,
        r2: () => b,
        yc: () => d,
      }),
        n(321073);
      var i = n(989349),
        l = n.n(i),
        a = n(834409),
        r = n(218113),
        u = n(985018);
      let d = {
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "2-digit",
      };
      function s(t) {
        return (
          (null != t.dmSpamDetectedAt &&
            l()(t.dmSpamDetectedAt).add(r.Qs, "hours") > l()()) ||
          (null != t.raidDetectedAt &&
            l()(t.raidDetectedAt).add(r.Qs, "hours") > l()())
        );
      }
      function D(t) {
        return (
          null != t.raidDetectedAt &&
          l()(t.raidDetectedAt).add(r.Qs, "hours") > l()()
        );
      }
      function c(t) {
        return (
          null != t.dmSpamDetectedAt &&
          l()(t.dmSpamDetectedAt).add(r.Qs, "hours") > l()()
        );
      }
      function o(t) {
        return null == t ? void 0 : D(t) ? a.V.JOIN_RAID : a.V.DM_RAID;
      }
      function m(t, e) {
        let n = [];
        return (
          t && n.push(a.ZE.INVITES_DISABLED), e && n.push(a.ZE.DMS_DISABLED), n
        );
      }
      function S(t, e) {
        let n = [];
        return (
          t || n.push(a.ZE.INVITES_DISABLED), e || n.push(a.ZE.DMS_DISABLED), n
        );
      }
      function A(t) {
        return (
          (null != t.dmsDisabledUntil &&
            new Date(t.dmsDisabledUntil) > new Date()) ||
          (null != t.invitesDisabledUntil &&
            new Date(t.invitesDisabledUntil) > new Date())
        );
      }
      function E(t) {
        return (
          t?.dmsDisabledUntil != null &&
          new Date(t.dmsDisabledUntil) > new Date()
        );
      }
      function b(t) {
        return (
          t?.invitesDisabledUntil != null &&
          new Date(t.invitesDisabledUntil) > new Date()
        );
      }
      function f(t, e) {
        let n = t.dmsDisabledUntil ?? t.invitesDisabledUntil;
        if (null == n) return "";
        let i = null != t.dmsDisabledUntil,
          l = null != t.invitesDisabledUntil;
        switch (!0) {
          case i && l:
            return u.intl.formatToPlainString(u.t.hCZitf, {
              guildName: e,
              time: new Date(n).toLocaleString(u.intl.currentLocale, d),
            });
          case i:
            return u.intl.formatToPlainString(u.t["HNKxf+"], {
              guildName: e,
              time: new Date(n).toLocaleString(u.intl.currentLocale, d),
            });
          case l:
            return u.intl.formatToPlainString(u.t.M3iSyL, {
              guildName: e,
              time: new Date(n).toLocaleString(u.intl.currentLocale, d),
            });
          default:
            return "";
        }
      }
    },
  },
]);
//# sourceMappingURL=21750.3b0f7a5be37f5f5a.js.map
