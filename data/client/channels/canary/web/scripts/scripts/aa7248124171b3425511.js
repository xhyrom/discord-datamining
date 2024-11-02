"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["8926"],
  {
    156673: function (n, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return d;
          },
        });
      var r = t(200651);
      t(192379);
      var i = t(481060),
        u = t(239091),
        l = t(637853),
        o = t(434404),
        a = t(837949),
        s = t(981631),
        c = t(388032);
      function d(n) {
        let { guild: e, onSelect: t } = n,
          d = (0, a.Z)(e.id),
          f = (0, l.wC)(e.id);
        return (0, r.jsx)(i.Menu, {
          onSelect: t,
          navId: "guild-browse-channels-context-menu",
          "aria-label": c.intl.string(c.t.ogxXGh),
          onClose: u.Zy,
          children: (0, r.jsxs)(i.MenuGroup, {
            children: [
              f &&
                (0, r.jsx)(i.MenuItem, {
                  id: "go-to-settings",
                  label: c.intl.string(c.t.X70lV1),
                  action: () => {
                    o.Z.open(e.id, s.pNK.ONBOARDING);
                  },
                }),
              d,
            ],
          }),
        });
      }
    },
    724213: function (n, e, t) {
      t.d(e, {
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
      var i = t(984933),
        u = t(271383),
        l = t(9156),
        o = t(630388),
        a = t(152376),
        s = t(398758),
        c = t(372897);
      function d(n) {
        var e, t;
        let r = (0, s.r1)(n),
          i =
            null !==
              (t =
                null === (e = u.ZP.getSelfMember(n)) || void 0 === e
                  ? void 0
                  : e.flags) && void 0 !== t
              ? t
              : 0,
          a = (0, o.yE)(i, c.q.COMPLETED_ONBOARDING),
          d = l.ZP.getOptedInChannels(n).size > 0;
        return !r && !a && !d;
      }
      function f(n) {
        if (d(n)) {
          h(n);
          return;
        }
        {
          let e = (0, s.r1)(n);
          (0, a.QG)(n, !e);
        }
      }
      function h(n) {
        let { include: e = new Set(), exclude: t = new Set() } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          u = i.ZP.getChannels(n),
          l = [...u[i.sH], ...u[i.Zb]]
            .filter((n) => {
              let { channel: e } = n;
              return !e.isThread() && !t.has(e.id);
            })
            .map((n) => {
              let { channel: e } = n;
              return e.id;
            });
        e.forEach((n) => l.push(n)), r.Z.onboardExistingMember(n, new Set(l));
      }
    },
    837949: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return f;
        },
      });
      var r = t(200651);
      t(192379);
      var i = t(442837),
        u = t(481060),
        l = t(430824),
        o = t(594174),
        a = t(724213),
        s = t(398758),
        c = t(981631),
        d = t(388032);
      function f(n) {
        let e = (0, s.DM)(n),
          t = (0, i.e7)([l.Z], () => l.Z.getGuild(n)),
          f = (0, i.e7)([o.default], () => o.default.getCurrentUser());
        return null != f &&
          null != t &&
          (t.hasFeature(c.oNc.COMMUNITY) || f.isStaff())
          ? (0, r.jsx)(u.MenuCheckboxItem, {
              id: "opt-in",
              label: d.intl.string(d.t.FB2ZZW),
              checked: !e,
              action: () => {
                (0, a.kH)(n);
              },
            })
          : null;
      }
    },
  },
]);
//# sourceMappingURL=aa7248124171b3425511.js.map
