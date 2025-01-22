"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90460"],
  {
    816782: function (e, n, t) {
      var l = t(570140);
      n.Z = {
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
    475468: function (e, n, t) {
      t.d(n, {
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
      function o(e, n) {
        let t =
            !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
          o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        if (!(0, l.hasAnyModalOpen)())
          t && a.Z.channelListScrollTo(e, n),
            o && null != n && i.Z.updateChatOpen(n, !0),
            u.Z.getState().updatePath(r.Z5c.CHANNEL(e, n));
      }
      function d(e) {
        if (!(0, l.hasAnyModalOpen)()) u.Z.getState().updatePath(e);
      }
    },
    207035: function (e, n, t) {
      t.d(n, {
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
      function i(e) {
        return l.useExperiment({ location: e }, { autoTrackExposure: !1 })
          .enabled;
      }
    },
    373651: function (e, n, t) {
      t.r(n);
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
      function S(e) {
        let { channel: n, onSelect: t } = e,
          u = (0, I.Z)(n),
          r = (0, m.Z)(n),
          d = (0, h.l)(n),
          s = (0, h.P)(n),
          x = (0, p.Z)(n),
          g = (0, Z.Z)(n),
          E = (0, f.Z)(n),
          M = (0, G.ZP)(n),
          j = (0, P.Z)(n),
          L = (0, _.Z)(n),
          N = (0, c.Z)({ id: n.id, label: O.intl.string(O.t.gFHI3t) }),
          S = (0, o.Z)(n),
          b = (0, T.ZP)(n),
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
      function b(e) {
        let { channel: n, guild: t, onSelect: u } = e,
          r = (0, I.Z)(n),
          d = (0, m.Z)(n),
          s = (0, h.l)(n),
          p = (0, h.P)(n),
          Z = (0, L.Z)(n),
          f = (0, G.ZP)(n),
          N = (0, _.Z)(n),
          S = (0, M.Z)(n, t),
          b = (0, x.Z)(n, t),
          v = (0, g.Z)(n, t),
          U = (0, E.Z)(n),
          A = (0, c.Z)({ id: n.id, label: O.intl.string(O.t.gFHI3t) }),
          y = (0, o.Z)(n),
          V = (0, j.Z)(n, "list_text_channel_context_menu"),
          H = (0, P.Z)(n),
          w = (0, T.ZP)(n),
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
      n.default = (0, r.Z)(
        (0, u.Z)(
          function (e) {
            return (0, s.Z)()
              ? (0, l.jsx)(S, { ...e })
              : (0, l.jsx)(b, { ...e });
          },
          { object: N.qAy.CONTEXT_MENU },
        ),
        [d.Z.CONTEXT_MENU, d.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU],
      );
    },
    593589: function (e, n, t) {
      t.d(n, {
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
        h = t(157523);
      function p(e) {
        let { windowKey: n, channel: t } = e;
        return (0, l.jsx)(r.Z, {
          withTitleBar: !0,
          windowKey: n,
          title: t.name,
          channelId: t.id,
          contentClassName: h.popoutContent,
          children: (0, l.jsx)(u.Z.Provider, {
            value: t.guild_id,
            children: (0, l.jsx)(c.Z, { providedChannel: t }),
          }),
        });
      }
      function Z(e, n) {
        let t = (0, d.P)(n),
          u = i.useCallback(() => {
            o.bA(
              "".concat(s.KJ3.CHANNEL_POPOUT, "-").concat(e.id),
              (n) => (0, l.jsx)(p, { windowKey: n, channel: e }),
              { defaultWidth: 854, defaultHeight: 480 },
            );
          }, [e]);
        return t
          ? (0, l.jsx)(a.MenuItem, {
              id: "channel-pop-out",
              label: "Open in Popout",
              action: () => u(),
            })
          : null;
      }
    },
    905423: function (e, n, t) {
      var l = t(512969),
        i = t(65400),
        a = t(731965),
        u = t(893607),
        r = t(981631);
      function o(e) {
        let n = (0, l.LX)(null != e ? e : "", {
          path: r.Z5c.CHANNEL(
            u.Hw.guildId(),
            u.Hw.channelId({ optional: !0 }),
            ":messageId?",
          ),
        });
        if (null != n) {
          let { guildId: e, channelId: t } = n.params;
          return {
            guildId: e === r.ME ? null : e,
            channelId: null != t ? t : null,
          };
        }
        let t = (0, l.LX)(null != e ? e : "", {
          path: r.Z5c.GUILD_BOOSTING_MARKETING(u.Hw.guildId()),
        });
        return null != t
          ? { guildId: t.params.guildId, channelId: null }
          : { guildId: null, channelId: null };
      }
      n.Z = (0, i.F)((e) => ({
        path: null,
        basePath: "/",
        guildId: null,
        channelId: null,
        updatePath(n) {
          let { guildId: t, channelId: l } = o(n);
          (0, a.j)(() => e({ path: n, guildId: t, channelId: l }));
        },
        resetPath(n) {
          let { guildId: t, channelId: l } = o(n);
          (0, a.j)(() =>
            e({ path: null, guildId: t, channelId: l, basePath: n }),
          );
        },
      }));
    },
    977059: function (e, n, t) {
      t.d(n, {
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
      function i(e) {
        let { location: n } = e;
        return l.useExperiment({ location: n }, { autoTrackExposure: !0 });
      }
      function a(e) {
        let { location: n } = e;
        return l.getCurrentConfig({ location: n }, { autoTrackExposure: !0 });
      }
    },
    829750: function (e, n, t) {
      t.d(n, {
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
      function r(e) {
        return (0, l.cj)(
          [a.ZP, i.Z],
          () => {
            let n = a.ZP.countVoiceStatesForChannel(e.id),
              t = i.Z.getGuild(e.getGuildId());
            return null == t
              ? { reachedLimit: !1, limit: -1 }
              : e.type === u.d4z.GUILD_STAGE_VOICE
                ? {
                    reachedLimit: n > t.maxStageVideoChannelUsers,
                    limit: t.maxStageVideoChannelUsers,
                  }
                : {
                    reachedLimit:
                      t.maxVideoChannelUsers > 0 && n > t.maxVideoChannelUsers,
                    limit: t.maxVideoChannelUsers,
                  };
          },
          [e],
        );
      }
      function o(e) {
        let n = a.ZP.countVoiceStatesForChannel(e.id),
          t = i.Z.getGuild(e.getGuildId());
        return null == t
          ? { reachedLimit: !1, limit: -1 }
          : e.type === u.d4z.GUILD_STAGE_VOICE
            ? {
                reachedLimit: n > t.maxStageVideoChannelUsers,
                limit: t.maxStageVideoChannelUsers,
              }
            : {
                reachedLimit:
                  t.maxVideoChannelUsers > 0 && n > t.maxVideoChannelUsers,
                limit: t.maxVideoChannelUsers,
              };
      }
    },
    173507: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var l = t(200651);
      t(192379);
      var i = t(481060),
        a = t(695346),
        u = t(981631);
      function r(e, n) {
        a.qF.getSetting()
          ? (0, i.openModalLazy)(
              async () => {
                let { default: n } = await Promise.all([
                  t.e("50506"),
                  t.e("96211"),
                  t.e("23217"),
                  t.e("84605"),
                  t.e("6380"),
                  t.e("72181"),
                  t.e("8016"),
                  t.e("56630"),
                  t.e("51269"),
                  t.e("66711"),
                  t.e("90508"),
                  t.e("13351"),
                  t.e("86282"),
                  t.e("65840"),
                  t.e("21628"),
                  t.e("18543"),
                  t.e("17938"),
                  t.e("18101"),
                  t.e("24207"),
                  t.e("46097"),
                  t.e("76540"),
                  t.e("8739"),
                  t.e("58059"),
                  t.e("18895"),
                  t.e("68445"),
                  t.e("24391"),
                  t.e("99393"),
                  t.e("99008"),
                  t.e("37229"),
                  t.e("22646"),
                  t.e("95393"),
                  t.e("3940"),
                  t.e("25183"),
                  t.e("80284"),
                  t.e("57322"),
                  t.e("48923"),
                  t.e("27936"),
                  t.e("30419"),
                  t.e("69174"),
                  t.e("18824"),
                  t.e("30203"),
                  t.e("701"),
                ]).then(t.bind(t, 601572));
                return (t) =>
                  (0, l.jsx)(n, { ...t, onEnable: e, videoEnabled: !1 });
              },
              {
                modalKey: "camera-preview",
                contextKey:
                  n === u.IlC.POPOUT
                    ? i.POPOUT_MODAL_CONTEXT
                    : i.DEFAULT_MODAL_CONTEXT,
              },
            )
          : null == e || e();
      }
    },
    157523: function (e, n, t) {
      e.exports = { popoutContent: "popoutContent_fc32a6" };
    },
  },
]);
//# sourceMappingURL=78f990c5a3d14bc465c8.js.map
