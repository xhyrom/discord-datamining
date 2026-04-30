"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["48672"],
  {
    972387(e, t, i) {
      i.d(t, { A: () => o });
      var l = i(228366),
        d = i(376728),
        n = i(159001),
        a = i(960736),
        s = i(253932),
        u = i(954571),
        c = i(4274),
        _ = i(115063),
        g = i(652215);
      let o = {
        acceptInvite(e, t) {
          let i = d.Ay.getInviteContext("Desktop Invite Modal", e),
            u = (0, a.tJ)(),
            g = (0, a.Z1)(),
            o = (0, a.N9)();
          d.Ay.acceptInvite({
            inviteKey: e.code,
            context: { ...i, ...(null != t ? { invite_instance_id: t } : {}) },
            callback: (e) => {
              null == e ||
                null == e.guild ||
                null == e.channel ||
                __OVERLAY__ ||
                d.Ay.transitionToInvite(e);
            },
          }).then(
            () => {
              if (null != e.guild) {
                if (g) {
                  if (s.$s.getSetting().includes(e.guild.id)) {
                    let t = new Set((0, _.Tb)());
                    t.delete(e.guild.id), s.$s.updateSetting(Array.from(t));
                  }
                } else {
                  let t = new Set((0, _.Tb)());
                  t.add(e.guild?.id), s.$s.updateSetting(Array.from(t));
                }
                if (o) {
                  if (s.JG.getSetting().includes(e.guild.id)) {
                    let t = new Set((0, _.Kk)());
                    t.delete(e.guild.id), s.JG.updateSetting(Array.from(t));
                  }
                } else {
                  let t = new Set((0, _.Kk)());
                  t.add(e.guild.id), s.JG.updateSetting(Array.from(t));
                }
                null != u && u.length > 0 && (0, n.GL)(e.guild.id, { nick: u });
              }
              this.close(e.code);
            },
            (e) => {
              l.h.dispatch({
                type: "INVITE_MODAL_ERROR",
                message: (0, c.s)(e.code),
              });
            },
          );
        },
        close(e) {
          let t = e ?? (0, a.p9)(),
            i = (0, a.xD)();
          if ((0, a.jJ)()) {
            let e = (0, a.tJ)(),
              l = (0, a.Z1)(),
              d = (0, a.N9)(),
              n = (0, a.qO)();
            u.default.track(g.HAw.INVITE_ACCEPT_JOIN_SETTINGS_SET, {
              invite_code: t,
              guild_id: i,
              nickname_present: null != e && e.length > 0,
              dms_allowed: l,
              activity_status_shown: d,
              changed_from_default: n,
            });
          }
          (0, a.xP)(),
            l.h.dispatch({ type: "INVITE_MODAL_CLOSE", inviteCode: t });
        },
      };
    },
  },
]);
//# sourceMappingURL=48672.2d03807d998be977.js.map
