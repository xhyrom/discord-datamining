"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["56049"],
  {
    338991: function (n, t, e) {
      e.r(t),
        e.d(t, {
          default: function () {
            return s;
          },
        });
      var l = e(200651);
      e(192379);
      var r = e(481060),
        u = e(239091),
        i = e(714447),
        a = e(439827),
        o = e(388032);
      function s(n) {
        let { guildId: t, onSelect: e, onPickerClose: s } = n,
          c = (0, a.Z)(t, s),
          d = (0, i.Z)();
        return (0, l.jsx)(r.Menu, {
          navId: "user-context",
          onClose: u.Zy,
          "aria-label": o.intl.string(o.t.liqwPD),
          className: "context-menu",
          onSelect: e,
          children: (0, l.jsxs)(r.MenuGroup, { children: [d, c] }),
        });
      }
    },
    714447: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return s;
        },
      });
      var l = e(200651);
      e(192379);
      var r = e(481060),
        u = e(36703),
        i = e(208049),
        a = e(242291),
        o = e(388032);
      function s() {
        let n = (0, a.pI)();
        return (0, l.jsx)(r.MenuControlItem, {
          id: "user-volume",
          "aria-haspopup": !0,
          label: o.intl.string(o.t.kbFsAA),
          control: (t, e) =>
            (0, l.jsx)(r.MenuSliderControl, {
              ...t,
              ref: e,
              value: (0, u.P)(n),
              maxValue: 100,
              onChange: (n) => (0, i.xz)((0, u.A)(n)),
              "aria-label": o.intl.string(o.t.kbFsAA),
            }),
        });
      }
    },
    439827: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return d;
        },
      });
      var l = e(200651);
      e(192379);
      var r = e(442837),
        u = e(481060),
        i = e(434404),
        a = e(357156),
        o = e(430824),
        s = e(981631),
        c = e(388032);
      function d(n, t) {
        let e = (0, r.e7)([o.Z], () => (null != n ? o.Z.getGuild(n) : null)),
          { canCreateExpressions: d, canManageAllExpressions: p } = (0, a.XJ)(
            e,
          );
        return null != n && d && p
          ? (0, l.jsx)(u.MenuItem, {
              id: c.intl.string(c.t["154/bG"]),
              label: c.intl.string(c.t["154/bG"]),
              action: () => {
                i.Z.open(n, s.pNK.SOUNDBOARD), null == t || t();
              },
            })
          : null;
      }
    },
  },
]);
//# sourceMappingURL=e8aae00ab7204c2ec73a.js.map
