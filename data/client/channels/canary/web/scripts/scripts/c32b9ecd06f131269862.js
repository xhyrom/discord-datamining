"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90460"],
  {
    816782: function (n, e, t) {
      var l = t(570140);
      e.Z = {
        toggleMembersSection() {
          l.Z.dispatch({ type: "CHANNEL_TOGGLE_MEMBERS_SECTION" });
        },
        toggleProfilePanelSection() {
          l.Z.dispatch({ type: "PROFILE_PANEL_TOGGLE_SECTION" });
        },
        toggleSummariesSection() {
          l.Z.dispatch({ type: "CHANNEL_TOGGLE_SUMMARIES_SECTION" });
        },
      };
    },
    475468: function (n, e, t) {
      t.d(e, {
        K: function () {
          return o;
        },
        z: function () {
          return d;
        },
      });
      var l = t(481060),
        i = t(475179),
        a = t(925549),
        u = t(905423),
        r = t(981631);
      function o(n, e) {
        let t =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!(0, l.hasAnyModalOpen)())
          t && a.Z.channelListScrollTo(n, e),
            o && null != e && i.Z.updateChatOpen(e, !0),
            u.Z.getState().updatePath(r.Z5c.CHANNEL(n, e));
      }
      function d(n) {
        if (!(0, l.hasAnyModalOpen)()) u.Z.getState().updatePath(n);
      }
    },
    207035: function (n, e, t) {
      t.d(e, {
        P: function () {
          return i;
        },
      });
      let l = (0, t(818083).B)({
        kind: "user",
        id: "2023-08-30_open-in-popout",
        label: "Open Channel in Popout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled", config: { enabled: !0 } }],
      });
      function i(n) {
        return l.useExperiment({ location: n }, { autoTrackExposure: !1 })
          .enabled;
      }
    },
    373651: function (n, e, t) {
      t.r(e);
      var l = t(200651);
      t(192379);
      var i = t(481060),
        a = t(239091),
        u = t(883385),
        r = t(108843),
        o = t(947440),
        d = t(100527),
        c = t(299206),
        s = t(916069),
        h = t(895563),
        p = t(212205),
        Z = t(478035),
        f = t(62420),
        C = t(423589),
        x = t(398048),
        m = t(109764),
        g = t(3689),
        E = t(323597),
        _ = t(852245),
        M = t(367722),
        I = t(461535),
        G = t(776568),
        P = t(218035),
        T = t(775666),
        j = t(593589),
        L = t(442754),
        N = t(981631),
        O = t(388032);
      function S(n) {
        let { channel: e, onSelect: t } = n,
          u = (0, I.Z)(e),
          r = (0, m.Z)(e),
          d = (0, h.l)(e),
          s = (0, h.P)(e),
          x = (0, p.Z)(e),
          g = (0, Z.Z)(e),
          E = (0, f.Z)(e),
          M = (0, G.ZP)(e),
          j = (0, P.Z)(e),
          L = (0, _.Z)(e),
          N = (0, c.Z)({ id: e.id, label: O.intl.string(O.t.gFHI3t) }),
          S = (0, o.Z)(e),
          b = (0, T.ZP)(e),
          v = (0, C.Mn)("ChannelContextFavoritesMenu");
        return (0, l.jsxs)(i.Menu, {
          navId: "channel-context",
          onClose: a.Zy,
          "aria-label": O.intl.string(O.t.Xm41aW),
          onSelect: t,
          children: [
            (0, l.jsx)(i.MenuGroup, { children: u }),
            (0, l.jsxs)(i.MenuGroup, { children: [g, E, x, d] }),
            (0, l.jsxs)(i.MenuGroup, { children: [M, v ? b : j] }),
            (0, l.jsx)(i.MenuGroup, { children: L }),
            (0, l.jsx)(i.MenuGroup, { children: S }),
            (0, l.jsx)(i.MenuGroup, { children: s }),
            (0, l.jsx)(i.MenuGroup, { children: r }),
            (0, l.jsx)(i.MenuGroup, { children: N }),
          ],
        });
      }
      function b(n) {
        let { channel: e, guild: t, onSelect: u } = n,
          r = (0, I.Z)(e),
          d = (0, m.Z)(e),
          s = (0, h.l)(e),
          p = (0, h.P)(e),
          Z = (0, L.Z)(e),
          f = (0, G.ZP)(e),
          N = (0, _.Z)(e),
          S = (0, M.Z)(e, t),
          b = (0, x.Z)(e, t),
          v = (0, g.Z)(e, t),
          U = (0, E.Z)(e),
          A = (0, c.Z)({ id: e.id, label: O.intl.string(O.t.gFHI3t) }),
          y = (0, o.Z)(e),
          V = (0, j.Z)(e, "list_text_channel_context_menu"),
          H = (0, P.Z)(e),
          w = (0, T.ZP)(e),
          k = (0, C.Mn)("ChannelContextMenuNormal");
        return (0, l.jsxs)(i.Menu, {
          navId: "channel-context",
          onClose: a.Zy,
          "aria-label": O.intl.string(O.t.Xm41aW),
          onSelect: u,
          children: [
            (0, l.jsxs)(
              i.MenuGroup,
              { children: [r, s] },
              "mark-as-read-or-favorite",
            ),
            (0, l.jsxs)(
              i.MenuGroup,
              { children: [S, Z, d, V] },
              "channel-actions",
            ),
            (0, l.jsxs)(
              i.MenuGroup,
              { children: [f, k ? w : H] },
              "notifications",
            ),
            (0, l.jsxs)(
              i.MenuGroup,
              { children: [N, b, v, U] },
              "admin-actions",
            ),
            (0, l.jsx)(i.MenuGroup, { children: y }),
            (0, l.jsx)(i.MenuGroup, { children: p }),
            (0, l.jsx)(i.MenuGroup, { children: A }, "developer-actions"),
          ],
        });
      }
      e.default = (0, r.Z)(
        (0, u.Z)(
          function (n) {
            return (0, s.Z)()
              ? (0, l.jsx)(S, { ...n })
              : (0, l.jsx)(b, { ...n });
          },
          { object: N.qAy.CONTEXT_MENU },
        ),
        [d.Z.CONTEXT_MENU, d.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU],
      );
    },
    593589: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return Z;
        },
      });
      var l = t(200651),
        i = t(192379),
        a = t(481060),
        u = t(372900),
        r = t(238246),
        o = t(788983),
        d = t(207035),
        c = t(823748),
        s = t(981631),
        h = t(410451);
      function p(n) {
        let { windowKey: e, channel: t } = n;
        return (0, l.jsx)(r.Z, {
          withTitleBar: !0,
          windowKey: e,
          title: t.name,
          channelId: t.id,
          contentClassName: h.popoutContent,
          children: (0, l.jsx)(u.Z.Provider, {
            value: t.guild_id,
            children: (0, l.jsx)(c.Z, { providedChannel: t }),
          }),
        });
      }
      function Z(n, e) {
        let t = (0, d.P)(e),
          u = i.useCallback(() => {
            o.bA(
              "".concat(s.KJ3.CHANNEL_POPOUT, "-").concat(n.id),
              (e) => (0, l.jsx)(p, { windowKey: e, channel: n }),
              { defaultWidth: 854, defaultHeight: 480 },
            );
          }, [n]);
        return t
          ? (0, l.jsx)(a.MenuItem, {
              id: "channel-pop-out",
              label: "Open in Popout",
              action: () => u(),
            })
          : null;
      }
    },
    905423: function (n, e, t) {
      var l = t(512969),
        i = t(65400),
        a = t(731965),
        u = t(893607),
        r = t(981631);
      function o(n) {
        let e = (0, l.LX)(null != n ? n : "", {
          path: r.Z5c.CHANNEL(
            u.Hw.guildId(),
            u.Hw.channelId({ optional: !0 }),
            ":messageId?",
          ),
        });
        if (null != e) {
          let { guildId: n, channelId: t } = e.params;
          return {
            guildId: n === r.ME ? null : n,
            channelId: null != t ? t : null,
          };
        }
        let t = (0, l.LX)(null != n ? n : "", {
          path: r.Z5c.GUILD_BOOSTING_MARKETING(u.Hw.guildId()),
        });
        return null != t
          ? { guildId: t.params.guildId, channelId: null }
          : { guildId: null, channelId: null };
      }
      e.Z = (0, i.F)((n) => ({
        path: null,
        basePath: "/",
        guildId: null,
        channelId: null,
        updatePath(e) {
          let { guildId: t, channelId: l } = o(e);
          (0, a.j)(() => n({ path: e, guildId: t, channelId: l }));
        },
        resetPath(e) {
          let { guildId: t, channelId: l } = o(e);
          (0, a.j)(() =>
            n({ path: null, guildId: t, channelId: l, basePath: e }),
          );
        },
      }));
    },
    977059: function (n, e, t) {
      t.d(e, {
        R: function () {
          return a;
        },
        S: function () {
          return i;
        },
      });
      let l = (0, t(987170).Z)({
        kind: "user",
        id: "2024-05_secure_frames_ui_rollout",
        label: "Secure Frames Rollout",
        defaultConfig: { enabled: !1 },
        treatments: [{ id: 1, label: "Enabled.", config: { enabled: !0 } }],
      });
      function i(n) {
        let { location: e } = n;
        return l.useExperiment({ location: e }, { autoTrackExposure: !0 });
      }
      function a(n) {
        let { location: e } = n;
        return l.getCurrentConfig({ location: e }, { autoTrackExposure: !0 });
      }
    },
    829750: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return r;
        },
        t: function () {
          return o;
        },
      });
      var l = t(442837),
        i = t(430824),
        a = t(938475),
        u = t(981631);
      function r(n) {
        return (0, l.cj)(
          [a.ZP, i.Z],
          () => {
            let e = a.ZP.countVoiceStatesForChannel(n.id),
              t = i.Z.getGuild(n.getGuildId());
            return null == t
              ? { reachedLimit: !1, limit: -1 }
              : n.type === u.d4z.GUILD_STAGE_VOICE
                ? {
                    reachedLimit: e > t.maxStageVideoChannelUsers,
                    limit: t.maxStageVideoChannelUsers,
                  }
                : {
                    reachedLimit:
                      t.maxVideoChannelUsers > 0 && e > t.maxVideoChannelUsers,
                    limit: t.maxVideoChannelUsers,
                  };
          },
          [n],
        );
      }
      function o(n) {
        let e = a.ZP.countVoiceStatesForChannel(n.id),
          t = i.Z.getGuild(n.getGuildId());
        return null == t
          ? { reachedLimit: !1, limit: -1 }
          : n.type === u.d4z.GUILD_STAGE_VOICE
            ? {
                reachedLimit: e > t.maxStageVideoChannelUsers,
                limit: t.maxStageVideoChannelUsers,
              }
            : {
                reachedLimit:
                  t.maxVideoChannelUsers > 0 && e > t.maxVideoChannelUsers,
                limit: t.maxVideoChannelUsers,
              };
      }
    },
    173507: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return r;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(481060),
        a = t(695346),
        u = t(981631);
      function r(n, e) {
        a.qF.getSetting()
          ? (0, i.openModalLazy)(
              async () => {
                let { default: e } = await Promise.all([
                  t.e("8821"),
                  t.e("99073"),
                ]).then(t.bind(t, 601572));
                return (t) =>
                  (0, l.jsx)(e, { ...t, onEnable: n, videoEnabled: !1 });
              },
              {
                modalKey: "camera-preview",
                contextKey:
                  e === u.IlC.POPOUT
                    ? i.POPOUT_MODAL_CONTEXT
                    : i.DEFAULT_MODAL_CONTEXT,
              },
            )
          : null == n || n();
      }
    },
    410451: function (n, e, t) {
      n.exports = { popoutContent: "popoutContent_fc32a6" };
    },
  },
]);
//# sourceMappingURL=c32b9ecd06f131269862.js.map
