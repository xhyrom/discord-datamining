"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54310"],
  {
    207035: function (n, e, t) {
      t.d(e, {
        P: function () {
          return u;
        },
      });
      let o = (0, t(818083).B)({
        kind: "user",
        id: "2023-08-30_open-in-popout",
        label: "Open Channel in Popout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function u(n) {
        return o.useExperiment({ location: n }, { autoTrackExposure: !1 })
          .enabled;
      }
    },
    373651: function (n, e, t) {
      t.r(e);
      var o = t(735250);
      t(470079);
      var u = t(481060),
        i = t(239091),
        l = t(883385),
        r = t(108843),
        a = t(947440),
        s = t(100527),
        c = t(299206),
        d = t(916069),
        p = t(895563),
        Z = t(212205),
        h = t(478035),
        x = t(62420),
        M = t(423589),
        C = t(398048),
        _ = t(109764),
        N = t(3689),
        j = t(323597),
        f = t(852245),
        E = t(367722),
        b = t(461535),
        P = t(776568),
        G = t(218035),
        A = t(775666),
        L = t(593589),
        T = t(442754),
        v = t(981631),
        O = t(689938);
      function m(n) {
        let { channel: e, onSelect: t } = n,
          l = (0, b.Z)(e),
          r = (0, _.Z)(e),
          s = (0, p.l)(e),
          d = (0, p.P)(e),
          C = (0, Z.Z)(e),
          N = (0, h.Z)(e),
          j = (0, x.Z)(e),
          E = (0, P.ZP)(e),
          L = (0, G.Z)(e),
          T = (0, f.Z)(e),
          v = (0, c.Z)({ id: e.id, label: O.Z.Messages.COPY_ID_CHANNEL }),
          m = (0, a.Z)(e),
          I = (0, A.ZP)(e),
          g = (0, M.Mn)("ChannelContextFavoritesMenu");
        return (0, o.jsxs)(u.Menu, {
          navId: "channel-context",
          onClose: i.Zy,
          "aria-label": O.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: t,
          children: [
            (0, o.jsx)(u.MenuGroup, { children: l }),
            (0, o.jsxs)(u.MenuGroup, { children: [N, j, C, s] }),
            (0, o.jsxs)(u.MenuGroup, { children: [E, g ? I : L] }),
            (0, o.jsx)(u.MenuGroup, { children: T }),
            (0, o.jsx)(u.MenuGroup, { children: m }),
            (0, o.jsx)(u.MenuGroup, { children: d }),
            (0, o.jsx)(u.MenuGroup, { children: r }),
            (0, o.jsx)(u.MenuGroup, { children: v }),
          ],
        });
      }
      function I(n) {
        let { channel: e, guild: t, onSelect: l } = n,
          r = (0, b.Z)(e),
          a = (0, _.Z)(e),
          s = (0, p.l)(e),
          d = (0, p.P)(e),
          Z = (0, T.Z)(e),
          h = (0, P.ZP)(e),
          x = (0, f.Z)(e),
          v = (0, E.Z)(e, t),
          m = (0, C.Z)(e, t),
          I = (0, N.Z)(e, t),
          g = (0, j.Z)(e),
          k = (0, c.Z)({ id: e.id, label: O.Z.Messages.COPY_ID_CHANNEL }),
          H = (0, L.Z)(e, "list_text_channel_context_menu"),
          w = (0, G.Z)(e),
          U = (0, A.ZP)(e),
          y = (0, M.Mn)("ChannelContextMenuNormal");
        return (0, o.jsxs)(u.Menu, {
          navId: "channel-context",
          onClose: i.Zy,
          "aria-label": O.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: l,
          children: [
            (0, o.jsxs)(
              u.MenuGroup,
              { children: [r, s] },
              "mark-as-read-or-favorite",
            ),
            (0, o.jsxs)(
              u.MenuGroup,
              { children: [v, Z, a, H] },
              "channel-actions",
            ),
            (0, o.jsxs)(
              u.MenuGroup,
              { children: [h, y ? U : w] },
              "notifications",
            ),
            (0, o.jsxs)(
              u.MenuGroup,
              { children: [x, m, I, g] },
              "admin-actions",
            ),
            (0, o.jsx)(u.MenuGroup, { children: d }),
            (0, o.jsx)(u.MenuGroup, { children: k }, "developer-actions"),
          ],
        });
      }
      e.default = (0, r.Z)(
        (0, l.Z)(
          function (n) {
            return (0, d.Z)()
              ? (0, o.jsx)(m, { ...n })
              : (0, o.jsx)(I, { ...n });
          },
          { object: v.qAy.CONTEXT_MENU },
        ),
        [s.Z.CONTEXT_MENU, s.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU],
      );
    },
    593589: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return h;
        },
      });
      var o = t(735250),
        u = t(470079),
        i = t(481060),
        l = t(372900),
        r = t(238246),
        a = t(788983),
        s = t(207035),
        c = t(823748),
        d = t(981631),
        p = t(405601);
      function Z(n) {
        let { windowKey: e, channel: t } = n;
        return (0, o.jsx)(r.Z, {
          withTitleBar: !0,
          windowKey: e,
          title: t.name,
          channelId: t.id,
          contentClassName: p.popoutContent,
          children: (0, o.jsx)(l.Z.Provider, {
            value: t.guild_id,
            children: (0, o.jsx)(c.Z, { providedChannel: t }),
          }),
        });
      }
      function h(n, e) {
        let t = (0, s.P)(e),
          l = u.useCallback(() => {
            a.bA(
              "".concat(d.KJ3.CHANNEL_POPOUT, "-").concat(n.id),
              (e) => (0, o.jsx)(Z, { windowKey: e, channel: n }),
              { defaultWidth: 854, defaultHeight: 480 },
            );
          }, [n]);
        return t
          ? (0, o.jsx)(i.MenuItem, {
              id: "channel-pop-out",
              label: "Open in Popout",
              action: () => l(),
            })
          : null;
      }
    },
    405601: function (n, e, t) {
      n.exports = { popoutContent: "popoutContent_fc32a6" };
    },
  },
]);
//# sourceMappingURL=57bffa5edc9ca4e4d841.js.map
