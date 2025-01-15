"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["44011"],
  {
    207035: function (n, e, t) {
      t.d(e, {
        P: function () {
          return u;
        },
      });
      let i = (0, t(818083).B)({
        kind: "user",
        id: "2023-08-30_open-in-popout",
        label: "Open Channel in Popout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function u(n) {
        return i.useExperiment({ location: n }, { autoTrackExposure: !1 })
          .enabled;
      }
    },
    373651: function (n, e, t) {
      t.r(e);
      var i = t(200651);
      t(192379);
      var u = t(481060),
        l = t(239091),
        o = t(883385),
        r = t(108843),
        c = t(947440),
        a = t(100527),
        d = t(299206),
        s = t(916069),
        p = t(895563),
        h = t(212205),
        Z = t(478035),
        x = t(62420),
        M = t(423589),
        f = t(398048),
        j = t(109764),
        C = t(3689),
        E = t(323597),
        N = t(852245),
        _ = t(367722),
        b = t(461535),
        G = t(776568),
        P = t(218035),
        v = t(775666),
        g = t(593589),
        m = t(442754),
        A = t(981631),
        T = t(388032);
      function k(n) {
        let { channel: e, onSelect: t } = n,
          o = (0, b.Z)(e),
          r = (0, j.Z)(e),
          a = (0, p.l)(e),
          s = (0, p.P)(e),
          f = (0, h.Z)(e),
          C = (0, Z.Z)(e),
          E = (0, x.Z)(e),
          _ = (0, G.ZP)(e),
          g = (0, P.Z)(e),
          m = (0, N.Z)(e),
          A = (0, d.Z)({ id: e.id, label: T.intl.string(T.t.gFHI3t) }),
          k = (0, c.Z)(e),
          H = (0, v.ZP)(e),
          I = (0, M.Mn)("ChannelContextFavoritesMenu");
        return (0, i.jsxs)(u.Menu, {
          navId: "channel-context",
          onClose: l.Zy,
          "aria-label": T.intl.string(T.t.Xm41aW),
          onSelect: t,
          children: [
            (0, i.jsx)(u.MenuGroup, { children: o }),
            (0, i.jsxs)(u.MenuGroup, { children: [C, E, f, a] }),
            (0, i.jsxs)(u.MenuGroup, { children: [_, I ? H : g] }),
            (0, i.jsx)(u.MenuGroup, { children: m }),
            (0, i.jsx)(u.MenuGroup, { children: k }),
            (0, i.jsx)(u.MenuGroup, { children: s }),
            (0, i.jsx)(u.MenuGroup, { children: r }),
            (0, i.jsx)(u.MenuGroup, { children: A }),
          ],
        });
      }
      function H(n) {
        let { channel: e, guild: t, onSelect: o } = n,
          r = (0, b.Z)(e),
          a = (0, j.Z)(e),
          s = (0, p.l)(e),
          h = (0, p.P)(e),
          Z = (0, m.Z)(e),
          x = (0, G.ZP)(e),
          A = (0, N.Z)(e),
          k = (0, _.Z)(e, t),
          H = (0, f.Z)(e, t),
          I = (0, C.Z)(e, t),
          S = (0, E.Z)(e),
          w = (0, d.Z)({ id: e.id, label: T.intl.string(T.t.gFHI3t) }),
          L = (0, c.Z)(e),
          y = (0, g.Z)(e, "list_text_channel_context_menu"),
          O = (0, P.Z)(e),
          X = (0, v.ZP)(e),
          q = (0, M.Mn)("ChannelContextMenuNormal");
        return (0, i.jsxs)(u.Menu, {
          navId: "channel-context",
          onClose: l.Zy,
          "aria-label": T.intl.string(T.t.Xm41aW),
          onSelect: o,
          children: [
            (0, i.jsxs)(
              u.MenuGroup,
              { children: [r, s] },
              "mark-as-read-or-favorite",
            ),
            (0, i.jsxs)(
              u.MenuGroup,
              { children: [k, Z, a, y] },
              "channel-actions",
            ),
            (0, i.jsxs)(
              u.MenuGroup,
              { children: [x, q ? X : O] },
              "notifications",
            ),
            (0, i.jsxs)(
              u.MenuGroup,
              { children: [A, H, I, S] },
              "admin-actions",
            ),
            (0, i.jsx)(u.MenuGroup, { children: L }),
            (0, i.jsx)(u.MenuGroup, { children: h }),
            (0, i.jsx)(u.MenuGroup, { children: w }, "developer-actions"),
          ],
        });
      }
      e.default = (0, r.Z)(
        (0, o.Z)(
          function (n) {
            return (0, s.Z)()
              ? (0, i.jsx)(k, { ...n })
              : (0, i.jsx)(H, { ...n });
          },
          { object: A.qAy.CONTEXT_MENU },
        ),
        [a.Z.CONTEXT_MENU, a.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU],
      );
    },
    593589: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return Z;
        },
      });
      var i = t(200651),
        u = t(192379),
        l = t(481060),
        o = t(372900),
        r = t(238246),
        c = t(788983),
        a = t(207035),
        d = t(823748),
        s = t(981631),
        p = t(410451);
      function h(n) {
        let { windowKey: e, channel: t } = n;
        return (0, i.jsx)(r.Z, {
          withTitleBar: !0,
          windowKey: e,
          title: t.name,
          channelId: t.id,
          contentClassName: p.popoutContent,
          children: (0, i.jsx)(o.Z.Provider, {
            value: t.guild_id,
            children: (0, i.jsx)(d.Z, { providedChannel: t }),
          }),
        });
      }
      function Z(n, e) {
        let t = (0, a.P)(e),
          o = u.useCallback(() => {
            c.bA(
              "".concat(s.KJ3.CHANNEL_POPOUT, "-").concat(n.id),
              (e) => (0, i.jsx)(h, { windowKey: e, channel: n }),
              { defaultWidth: 854, defaultHeight: 480 },
            );
          }, [n]);
        return t
          ? (0, i.jsx)(l.MenuItem, {
              id: "channel-pop-out",
              label: "Open in Popout",
              action: () => o(),
            })
          : null;
      }
    },
    685929: function (n, e, t) {
      t.d(e, {
        C: function () {
          return o;
        },
        Y: function () {
          return r;
        },
      });
      var i = t(442837),
        u = t(496675),
        l = t(981631);
      function o(n) {
        let e =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : u.Z;
        return (
          null != n &&
          null != n.linkedLobby &&
          e.can(l.Plq.MANAGE_CHANNELS, n) &&
          e.can(l.Plq.VIEW_CHANNEL, n) &&
          e.can(l.Plq.SEND_MESSAGES, n)
        );
      }
      function r(n) {
        return (0, i.e7)([u.Z], () => o(n, u.Z));
      }
    },
    410451: function (n, e, t) {
      n.exports = { popoutContent: "popoutContent_fc32a6" };
    },
  },
]);
//# sourceMappingURL=0003bbd8fb16007ec1c4.js.map
