"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["56049"],
  {
    338991: function (e, n, u) {
      u.r(n),
        u.d(n, {
          default: function () {
            return i;
          },
        });
      var a = u(735250);
      u(470079);
      var l = u(481060),
        r = u(239091),
        t = u(714447),
        s = u(439827),
        o = u(689938);
      function i(e) {
        let { guildId: n, onSelect: u, onPickerClose: i } = e,
          c = (0, s.Z)(n, i),
          S = (0, t.Z)();
        return (0, a.jsx)(l.Menu, {
          navId: "user-context",
          onClose: r.Zy,
          "aria-label": o.Z.Messages.USER_ACTIONS_MENU_LABEL,
          className: "context-menu",
          onSelect: u,
          children: (0, a.jsxs)(l.MenuGroup, { children: [S, c] }),
        });
      }
    },
    714447: function (e, n, u) {
      u.d(n, {
        Z: function () {
          return i;
        },
      });
      var a = u(735250);
      u(470079);
      var l = u(481060),
        r = u(36703),
        t = u(208049),
        s = u(242291),
        o = u(689938);
      function i() {
        let e = (0, s.pI)();
        return (0, a.jsx)(l.MenuControlItem, {
          id: "user-volume",
          "aria-haspopup": !0,
          label: o.Z.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME,
          control: (n, u) =>
            (0, a.jsx)(l.MenuSliderControl, {
              ...n,
              ref: u,
              value: (0, r.P)(e),
              maxValue: 100,
              onChange: (e) => (0, t.xz)((0, r.A)(e)),
              "aria-label": o.Z.Messages.USER_SETTINGS_SOUNDBOARD_VOLUME,
            }),
        });
      }
    },
    439827: function (e, n, u) {
      u.d(n, {
        Z: function () {
          return S;
        },
      });
      var a = u(735250);
      u(470079);
      var l = u(442837),
        r = u(481060),
        t = u(434404),
        s = u(357156),
        o = u(430824),
        i = u(981631),
        c = u(689938);
      function S(e, n) {
        let u = (0, l.e7)([o.Z], () => (null != e ? o.Z.getGuild(e) : null)),
          { canCreateExpressions: S, canManageAllExpressions: d } = (0, s.XJ)(
            u,
          );
        return null != e && S && d
          ? (0, a.jsx)(r.MenuItem, {
              id: c.Z.Messages.SERVER_SETTINGS,
              label: c.Z.Messages.SERVER_SETTINGS,
              action: () => {
                t.Z.open(e, i.pNK.SOUNDBOARD), null == n || n();
              },
            })
          : null;
      }
    },
  },
]);
//# sourceMappingURL=53ab44ad668785795985.js.map
