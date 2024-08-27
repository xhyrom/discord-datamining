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
      var s = t(735250);
      t(470079);
      var r = t(906732);
      function u(e, n) {
        return function (t) {
          let { analyticsLocations: u } = (0, r.ZP)(n);
          return (0, s.jsx)(r.Gt, {
            value: u,
            children: (0, s.jsx)(e, { ...t }),
          });
        };
      }
    },
    768079: function (e, n, t) {
      t.r(n);
      var s = t(735250);
      t(470079);
      var r = t(481060),
        u = t(239091),
        a = t(410575),
        i = t(108843),
        l = t(100527),
        c = t(299206),
        o = t(88966),
        d = t(725119),
        E = t(981631),
        Z = t(689938);
      n.default = (0, i.Z)(
        function (e) {
          let { user: n, analyticsContext: t, onSelect: i } = e,
            l = (0, d.Z)({ userId: n.id }),
            _ = (0, c.Z)({ id: n.id, label: Z.Z.Messages.COPY_ID_USER }),
            M = (0, o.Z)(n.id),
            f = n.isNonUserBot();
          return (0, s.jsx)(a.Z, {
            context: t,
            object: E.qAy.CONTEXT_MENU,
            children: (0, s.jsxs)(r.Menu, {
              navId: "user-context",
              onClose: u.Zy,
              "aria-label": Z.Z.Messages.USER_ACTIONS_MENU_LABEL,
              onSelect: i,
              children: [
                (0, s.jsxs)(r.MenuGroup, { children: [!f && l, !f && M] }),
                (0, s.jsx)(r.MenuGroup, { children: _ }),
              ],
            }),
          });
        },
        [l.Z.CONTEXT_MENU, l.Z.BANNED_USER_MENU],
      );
    },
    88966: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var s = t(735250);
      t(470079);
      var r = t(442837),
        u = t(481060),
        a = t(493683),
        i = t(40851),
        l = t(314897),
        c = t(981631),
        o = t(689938);
      function d(e, n) {
        let t = (0, i.Aq)();
        return (0, r.e7)([l.default], () => l.default.getId() === e) ||
          n === c.IlC.POPOUT
          ? null
          : (0, s.jsx)(u.MenuItem, {
              id: "message-user",
              label: o.Z.Messages.USER_POPOUT_MESSAGE,
              action: () => {
                a.Z.openPrivateChannel(e),
                  t.dispatch(c.CkL.POPOUT_CLOSE),
                  (0, u.closeAllModals)();
              },
            });
      }
    },
  },
]);
//# sourceMappingURL=ded1a21c674037c8ca7c.js.map
