"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["6368"],
  {
    987999: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return x;
          },
        });
      var i = n(200651);
      n(192379);
      var r = n(442837),
        l = n(481060),
        a = n(239091),
        o = n(100527),
        d = n(970606),
        s = n(299206),
        u = n(693546),
        c = n(246364),
        p = n(937111),
        m = n(703656),
        Z = n(914010),
        h = n(981631),
        g = n(388032);
      function x(t) {
        let { guild: e, onSelect: n } = t,
          x = e.id,
          C = (0, s.Z)({ id: e.id, label: g.intl.string(g.t["94lLDw"]) }),
          E = (0, r.e7)([p.Z], () => p.Z.getRequest(x)),
          f = () => {
            u.Z.removeGuildJoinRequest(x),
              Z.Z.getGuildId() === x && (0, m.uL)(h.Z5c.ME);
          };
        return (0, i.jsxs)(l.Menu, {
          navId: "join-request-guild-context",
          onClose: a.Zy,
          "aria-label": g.intl.string(g.t.HpQykZ),
          onSelect: n,
          children: [
            (null == E ? void 0 : E.applicationStatus) === c.wB.REJECTED &&
              (0, i.jsx)(l.MenuItem, {
                id: "reapply",
                label: g.intl.string(g.t.rpFCLi),
                action: () => {
                  e.hasFeature(h.oNc.CLAN) &&
                    (0, d.Vr)({ guildId: x, source: o.Z.CLAN_REAPPLY }),
                    u.Z.resetGuildJoinRequest(x).then(() => {
                      (0, m.uL)(h.Z5c.GUILD_MEMBER_VERIFICATION(x));
                    });
                },
                color: "default",
              }),
            (0, i.jsx)(l.MenuItem, {
              id: "withdraw",
              label: g.intl.string(g.t.mqtdmZ),
              action: () => {
                (0, l.openModal)((t) =>
                  (0, i.jsx)(l.ConfirmModal, {
                    header: g.intl.string(g.t.y0CVen),
                    confirmText: g.intl.string(g.t.mqtdmZ),
                    cancelText: g.intl.string(g.t["ETE/oK"]),
                    onConfirm: f,
                    ...t,
                    children: (0, i.jsx)(l.Text, {
                      variant: "text-md/normal",
                      children: g.intl.format(g.t["9ZezpK"], { name: e.name }),
                    }),
                  }),
                );
              },
              color: "danger",
            }),
            (0, i.jsx)(l.MenuGroup, { children: C }),
          ],
        });
      }
    },
  },
]);
//# sourceMappingURL=116368054dfa91acc3bd.js.map
