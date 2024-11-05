"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["23835"],
  {
    108843: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return l;
        },
      });
      var r = t(200651);
      t(192379);
      var i = t(906732);
      function l(n, e) {
        return function (t) {
          let { analyticsLocations: l } = (0, i.ZP)(e);
          return (0, r.jsx)(i.Gt, {
            value: l,
            children: (0, r.jsx)(n, { ...t }),
          });
        };
      }
    },
    768079: function (n, e, t) {
      t.r(e);
      var r = t(200651);
      t(192379);
      var i = t(481060),
        l = t(239091),
        u = t(410575),
        s = t(108843),
        a = t(100527),
        c = t(299206),
        o = t(88966),
        d = t(37258),
        f = t(981631),
        h = t(388032);
      e.default = (0, s.Z)(
        function (n) {
          let { user: e, analyticsContext: t, onSelect: s } = n,
            a = (0, d.Z)({ userId: e.id }),
            Z = (0, c.Z)({ id: e.id, label: h.intl.string(h.t["/AXYnJ"]) }),
            p = (0, o.Z)(e.id),
            v = e.isNonUserBot();
          return (0, r.jsx)(u.Z, {
            context: t,
            object: f.qAy.CONTEXT_MENU,
            children: (0, r.jsxs)(i.Menu, {
              navId: "user-context",
              onClose: l.Zy,
              "aria-label": h.intl.string(h.t.liqwPD),
              onSelect: s,
              children: [
                (0, r.jsxs)(i.MenuGroup, { children: [!v && a, !v && p] }),
                (0, r.jsx)(i.MenuGroup, { children: Z }),
              ],
            }),
          });
        },
        [a.Z.CONTEXT_MENU, a.Z.BANNED_USER_MENU],
      );
    },
    88966: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return d;
        },
      });
      var r = t(200651);
      t(192379);
      var i = t(442837),
        l = t(481060),
        u = t(493683),
        s = t(40851),
        a = t(314897),
        c = t(981631),
        o = t(388032);
      function d(n, e) {
        let t = (0, s.Aq)();
        return (0, i.e7)([a.default], () => a.default.getId() === n) ||
          e === c.IlC.POPOUT
          ? null
          : (0, r.jsx)(l.MenuItem, {
              id: "message-user",
              label: o.intl.string(o.t.OAJQlJ),
              action: () => {
                u.Z.openPrivateChannel(n),
                  t.dispatch(c.CkL.POPOUT_CLOSE),
                  (0, l.closeAllModals)();
              },
            });
      }
    },
  },
]);
//# sourceMappingURL=4fb53f3fbf2976fa51c4.js.map
