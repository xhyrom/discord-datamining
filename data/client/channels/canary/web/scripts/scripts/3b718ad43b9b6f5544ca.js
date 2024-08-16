"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["8926"],
  {
    156673: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return d;
          },
        });
      var r = t(735250);
      t(470079);
      var u = t(481060),
        i = t(239091),
        l = t(637853),
        s = t(434404),
        a = t(837949),
        o = t(981631),
        c = t(689938);
      function d(e) {
        let { guild: n, onSelect: t } = e,
          d = (0, a.Z)(n.id),
          f = (0, l.wC)(n.id);
        return (0, r.jsx)(u.Menu, {
          onSelect: t,
          navId: "guild-browse-channels-context-menu",
          "aria-label": c.Z.Messages.GENERIC_ACTIONS_MENU_LABEL,
          onClose: i.Zy,
          children: (0, r.jsxs)(u.MenuGroup, {
            children: [
              f &&
                (0, r.jsx)(u.MenuItem, {
                  id: "go-to-settings",
                  label: c.Z.Messages.EDIT_ONBOARDING,
                  action: () => {
                    s.Z.open(n.id, o.pNK.ONBOARDING);
                  },
                }),
              d,
            ],
          }),
        });
      }
    },
    724213: function (e, n, t) {
      t.d(n, {
        hi: function () {
          return d;
        },
        kH: function () {
          return f;
        },
        rz: function () {
          return h;
        },
      }),
        t(789020),
        t(47120),
        t(653041),
        t(524437);
      var r = t(549817);
      t(581883);
      var u = t(984933),
        i = t(271383),
        l = t(9156),
        s = t(630388),
        a = t(152376),
        o = t(398758),
        c = t(372897);
      function d(e) {
        var n, t;
        let r = (0, o.r1)(e),
          u =
            null !==
              (t =
                null === (n = i.ZP.getSelfMember(e)) || void 0 === n
                  ? void 0
                  : n.flags) && void 0 !== t
              ? t
              : 0,
          a = (0, s.yE)(u, c.q.COMPLETED_ONBOARDING),
          d = l.ZP.getOptedInChannels(e).size > 0;
        return !r && !a && !d;
      }
      function f(e) {
        if (d(e)) {
          h(e);
          return;
        }
        {
          let n = (0, o.r1)(e);
          (0, a.QG)(e, !n);
        }
      }
      function h(e) {
        let { include: n = new Set(), exclude: t = new Set() } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          i = u.ZP.getChannels(e),
          l = [...i[u.sH], ...i[u.Zb]]
            .filter((e) => {
              let { channel: n } = e;
              return !n.isThread() && !t.has(n.id);
            })
            .map((e) => {
              let { channel: n } = e;
              return n.id;
            });
        n.forEach((e) => l.push(e)), r.Z.onboardExistingMember(e, new Set(l));
      }
    },
    837949: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return f;
        },
      });
      var r = t(735250);
      t(470079);
      var u = t(442837),
        i = t(481060),
        l = t(430824),
        s = t(594174),
        a = t(724213),
        o = t(398758),
        c = t(981631),
        d = t(689938);
      function f(e) {
        let n = (0, o.DM)(e),
          t = (0, u.e7)([l.Z], () => l.Z.getGuild(e)),
          f = (0, u.e7)([s.default], () => s.default.getCurrentUser());
        return null != f &&
          null != t &&
          (t.hasFeature(c.oNc.COMMUNITY) || f.isStaff())
          ? (0, r.jsx)(i.MenuCheckboxItem, {
              id: "opt-in",
              label: d.Z.Messages.GUILD_CHANNEL_OPT_IN,
              checked: !n,
              action: () => {
                (0, a.kH)(e);
              },
            })
          : null;
      }
    },
  },
]);
//# sourceMappingURL=3b718ad43b9b6f5544ca.js.map
