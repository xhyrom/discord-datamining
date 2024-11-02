"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["9573"],
  {
    546649: function (n, t, e) {
      e.r(t),
        e.d(t, {
          default: function () {
            return a;
          },
        });
      var i = e(200651);
      e(192379);
      var r = e(481060),
        l = e(239091),
        o = e(299206),
        c = e(461757),
        u = e(388032);
      function a(n) {
        let {
            channel: t,
            channelId: e,
            originalLink: a,
            messageId: s,
            onSelect: d,
          } = n,
          h = (0, c.Z)(t, a, s),
          p = (0, o.Z)({ id: e, label: u.intl.string(u.t.gFHI3t) });
        return (0, i.jsxs)(r.Menu, {
          navId: "channel-mention-context",
          onClose: l.Zy,
          onSelect: d,
          "aria-label": u.intl.string(u.t.feGACA),
          children: [
            (0, i.jsx)(r.MenuGroup, { children: h }, "channel-mention-actions"),
            (0, i.jsx)(r.MenuGroup, { children: p }, "developer-actions"),
          ],
        });
      }
    },
    109764: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return h;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(852229),
        l = e(399606),
        o = e(481060),
        c = e(228392),
        u = e(592125),
        a = e(934415),
        s = e(981631),
        d = e(388032);
      function h(n, t, e) {
        let h = (0, l.e7)([u.Z], () => u.Z.getChannel(n.parent_id));
        return (0, i.jsx)(o.MenuItem, {
          id: "channel-copy-link",
          label: d.intl.string(d.t.WqhZsr),
          action: () => {
            n.isForumPost() &&
              (0, c.B)({
                postId: n.id,
                location: { section: s.jXE.CONTEXT_MENU },
              }),
              (0, r.J)((0, a.EO)(n, h, t, e));
          },
        });
      }
    },
    461757: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = e(200651);
      e(192379);
      var r = e(852229),
        l = e(481060),
        o = e(109764),
        c = e(388032);
      function u(n, t, e) {
        return null != n
          ? (0, o.Z)(n, e, t)
          : (0, i.jsx)(l.MenuItem, {
              id: "channel-copy-link",
              label: c.intl.string(c.t.WqhZsr),
              action: () => {
                (0, r.J)(null != t ? t : "");
              },
            });
      }
    },
  },
]);
//# sourceMappingURL=d2f1b126334a85c1c652.js.map
