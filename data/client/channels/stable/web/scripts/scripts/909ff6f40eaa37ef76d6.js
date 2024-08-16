"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["9573"],
  {
    546649: function (n, e, t) {
      t.r(e),
        t.d(e, {
          default: function () {
            return u;
          },
        });
      var i = t(735250);
      t(470079);
      var a = t(481060),
        o = t(239091),
        s = t(299206),
        c = t(461757),
        r = t(689938);
      function u(n) {
        let {
            channel: e,
            channelId: t,
            originalLink: u,
            messageId: l,
            onSelect: d,
          } = n,
          p = (0, c.Z)(e, u, l),
          h = (0, s.Z)({ id: t, label: r.Z.Messages.COPY_ID_CHANNEL });
        return (0, i.jsxs)(a.Menu, {
          navId: "channel-mention-context",
          onClose: o.Zy,
          onSelect: d,
          "aria-label": r.Z.Messages.CHANNEL_MENTION_ACTIONS_MENU_LABEL,
          children: [
            (0, i.jsx)(a.MenuGroup, { children: p }, "channel-mention-actions"),
            (0, i.jsx)(a.MenuGroup, { children: h }, "developer-actions"),
          ],
        });
      }
    },
    109764: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return p;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(852229),
        o = t(399606),
        s = t(481060),
        c = t(228392),
        r = t(592125),
        u = t(934415),
        l = t(981631),
        d = t(689938);
      function p(n, e, t) {
        let p = (0, o.e7)([r.Z], () => r.Z.getChannel(n.parent_id));
        return (0, i.jsx)(s.MenuItem, {
          id: "channel-copy-link",
          label: d.Z.Messages.COPY_LINK,
          action: () => {
            n.isForumPost() &&
              (0, c.B)({
                postId: n.id,
                location: { section: l.jXE.CONTEXT_MENU },
              }),
              (0, a.J)((0, u.EO)(n, p, e, t));
          },
        });
      }
    },
    461757: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return r;
        },
      });
      var i = t(735250);
      t(470079);
      var a = t(852229),
        o = t(481060),
        s = t(109764),
        c = t(689938);
      function r(n, e, t) {
        return null != n
          ? (0, s.Z)(n, t, e)
          : (0, i.jsx)(o.MenuItem, {
              id: "channel-copy-link",
              label: c.Z.Messages.COPY_LINK,
              action: () => {
                (0, a.J)(null != e ? e : "");
              },
            });
      }
    },
  },
]);
//# sourceMappingURL=909ff6f40eaa37ef76d6.js.map
