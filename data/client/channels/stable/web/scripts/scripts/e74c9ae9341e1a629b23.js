"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["54310"],
  {
    207035: function (n, e, t) {
      t.d(e, {
        P: function () {
          return o;
        },
      });
      let i = (0, t(818083).B)({
        kind: "user",
        id: "2023-08-30_open-in-popout",
        label: "Open Channel in Popout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function o(n) {
        return i.useExperiment({ location: n }, { autoTrackExposure: !1 })
          .enabled;
      }
    },
    373651: function (n, e, t) {
      t.r(e);
      var i = t(200651);
      t(192379);
      var o = t(481060),
        r = t(239091),
        l = t(883385),
        u = t(108843),
        a = t(947440),
        c = t(100527),
        s = t(299206),
        d = t(916069),
        p = t(895563),
        h = t(212205),
        Z = t(478035),
        x = t(62420),
        j = t(423589),
        M = t(398048),
        f = t(109764),
        C = t(3689),
        b = t(323597),
        _ = t(852245),
        G = t(367722),
        N = t(461535),
        P = t(776568),
        E = t(218035),
        m = t(775666),
        v = t(593589),
        g = t(442754),
        T = t(981631),
        k = t(388032);
      function w(n) {
        let { channel: e, onSelect: t } = n,
          l = (0, N.Z)(e),
          u = (0, f.Z)(e),
          c = (0, p.l)(e),
          d = (0, p.P)(e),
          M = (0, h.Z)(e),
          C = (0, Z.Z)(e),
          b = (0, x.Z)(e),
          G = (0, P.ZP)(e),
          v = (0, E.Z)(e),
          g = (0, _.Z)(e),
          T = (0, s.Z)({ id: e.id, label: k.intl.string(k.t.gFHI3t) }),
          w = (0, a.Z)(e),
          I = (0, m.ZP)(e),
          H = (0, j.Mn)("ChannelContextFavoritesMenu");
        return (0, i.jsxs)(o.Menu, {
          navId: "channel-context",
          onClose: r.Zy,
          "aria-label": k.intl.string(k.t.Xm41aW),
          onSelect: t,
          children: [
            (0, i.jsx)(o.MenuGroup, { children: l }),
            (0, i.jsxs)(o.MenuGroup, { children: [C, b, M, c] }),
            (0, i.jsxs)(o.MenuGroup, { children: [G, H ? I : v] }),
            (0, i.jsx)(o.MenuGroup, { children: g }),
            (0, i.jsx)(o.MenuGroup, { children: w }),
            (0, i.jsx)(o.MenuGroup, { children: d }),
            (0, i.jsx)(o.MenuGroup, { children: u }),
            (0, i.jsx)(o.MenuGroup, { children: T }),
          ],
        });
      }
      function I(n) {
        let { channel: e, guild: t, onSelect: l } = n,
          u = (0, N.Z)(e),
          c = (0, f.Z)(e),
          d = (0, p.l)(e),
          h = (0, p.P)(e),
          Z = (0, g.Z)(e),
          x = (0, P.ZP)(e),
          T = (0, _.Z)(e),
          w = (0, G.Z)(e, t),
          I = (0, M.Z)(e, t),
          H = (0, C.Z)(e, t),
          O = (0, b.Z)(e),
          y = (0, s.Z)({ id: e.id, label: k.intl.string(k.t.gFHI3t) }),
          A = (0, a.Z)(e),
          X = (0, v.Z)(e, "list_text_channel_context_menu"),
          L = (0, E.Z)(e),
          U = (0, m.ZP)(e),
          F = (0, j.Mn)("ChannelContextMenuNormal");
        return (0, i.jsxs)(o.Menu, {
          navId: "channel-context",
          onClose: r.Zy,
          "aria-label": k.intl.string(k.t.Xm41aW),
          onSelect: l,
          children: [
            (0, i.jsxs)(
              o.MenuGroup,
              { children: [u, d] },
              "mark-as-read-or-favorite",
            ),
            (0, i.jsxs)(
              o.MenuGroup,
              { children: [w, Z, c, X] },
              "channel-actions",
            ),
            (0, i.jsxs)(
              o.MenuGroup,
              { children: [x, F ? U : L] },
              "notifications",
            ),
            (0, i.jsxs)(
              o.MenuGroup,
              { children: [T, I, H, O] },
              "admin-actions",
            ),
            (0, i.jsx)(o.MenuGroup, { children: A }),
            (0, i.jsx)(o.MenuGroup, { children: h }),
            (0, i.jsx)(o.MenuGroup, { children: y }, "developer-actions"),
          ],
        });
      }
      e.default = (0, u.Z)(
        (0, l.Z)(
          function (n) {
            return (0, d.Z)()
              ? (0, i.jsx)(w, { ...n })
              : (0, i.jsx)(I, { ...n });
          },
          { object: T.qAy.CONTEXT_MENU },
        ),
        [c.Z.CONTEXT_MENU, c.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU],
      );
    },
    593589: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return Z;
        },
      });
      var i = t(200651),
        o = t(192379),
        r = t(481060),
        l = t(372900),
        u = t(238246),
        a = t(788983),
        c = t(207035),
        s = t(823748),
        d = t(981631),
        p = t(405601);
      function h(n) {
        let { windowKey: e, channel: t } = n;
        return (0, i.jsx)(u.Z, {
          withTitleBar: !0,
          windowKey: e,
          title: t.name,
          channelId: t.id,
          contentClassName: p.popoutContent,
          children: (0, i.jsx)(l.Z.Provider, {
            value: t.guild_id,
            children: (0, i.jsx)(s.Z, { providedChannel: t }),
          }),
        });
      }
      function Z(n, e) {
        let t = (0, c.P)(e),
          l = o.useCallback(() => {
            a.bA(
              "".concat(d.KJ3.CHANNEL_POPOUT, "-").concat(n.id),
              (e) => (0, i.jsx)(h, { windowKey: e, channel: n }),
              { defaultWidth: 854, defaultHeight: 480 },
            );
          }, [n]);
        return t
          ? (0, i.jsx)(r.MenuItem, {
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
//# sourceMappingURL=e74c9ae9341e1a629b23.js.map
