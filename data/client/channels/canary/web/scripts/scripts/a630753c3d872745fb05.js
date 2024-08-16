"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["23835"],
  {
    108843: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var r = t(735250);
      t(470079);
      var s = t(906732);
      function u(e, n) {
        return function (t) {
          let { analyticsLocations: u } = (0, s.ZP)(n);
          return (0, r.jsx)(s.Gt, {
            value: u,
            children: (0, r.jsx)(e, { ...t }),
          });
        };
      }
    },
    768079: function (e, n, t) {
      t.r(n);
      var r = t(735250);
      t(470079);
      var s = t(481060),
        u = t(239091),
        i = t(410575),
        a = t(108843),
        c = t(100527),
        l = t(299206),
        o = t(88966),
        d = t(725119),
        Z = t(981631),
        E = t(689938);
      n.default = (0, a.Z)(
        function (e) {
          let { user: n, analyticsContext: t, onSelect: a } = e,
            c = (0, d.Z)({ userId: n.id }),
            _ = (0, l.Z)({ id: n.id, label: E.Z.Messages.COPY_ID_USER }),
            f = (0, o.Z)(n.id),
            M = n.isNonUserBot();
          return (0, r.jsx)(i.Z, {
            context: t,
            object: Z.qAy.CONTEXT_MENU,
            children: (0, r.jsxs)(s.Menu, {
              navId: "user-context",
              onClose: u.Zy,
              "aria-label": E.Z.Messages.USER_ACTIONS_MENU_LABEL,
              onSelect: a,
              children: [
                (0, r.jsxs)(s.MenuGroup, { children: [!M && c, !M && f] }),
                (0, r.jsx)(s.MenuGroup, { children: _ }),
              ],
            }),
          });
        },
        [c.Z.CONTEXT_MENU, c.Z.BANNED_USER_MENU],
      );
    },
    88966: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return o;
        },
      });
      var r = t(735250);
      t(470079);
      var s = t(481060),
        u = t(493683),
        i = t(37234),
        a = t(314897),
        c = t(981631),
        l = t(689938);
      function o(e, n) {
        let t = a.default.getId(),
          o = n === c.IlC.POPOUT;
        return t === e || o
          ? null
          : (0, r.jsx)(s.MenuItem, {
              id: "message-user",
              label: l.Z.Messages.USER_POPOUT_MESSAGE,
              action: () => {
                u.Z.openPrivateChannel(e), (0, i.xf)();
              },
            });
      }
    },
  },
]);
//# sourceMappingURL=a630753c3d872745fb05.js.map
