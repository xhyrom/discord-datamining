"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["42160"],
  {
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
        u = t(239091),
        a = t(883385),
        r = t(108843),
        o = t(947440),
        d = t(100527),
        c = t(299206),
        s = t(916069),
        h = t(895563),
        p = t(212205),
        x = t(478035),
        Z = t(62420),
        f = t(423589),
        m = t(398048),
        C = t(109764),
        g = t(3689),
        I = t(323597),
        M = t(852245),
        _ = t(367722),
        j = t(461535),
        E = t(776568),
        b = t(218035),
        G = t(775666),
        P = t(593589),
        T = t(442754),
        L = t(981631),
        U = t(388032);
      function N(e) {
        let { channel: n, onSelect: t } = e,
          a = (0, j.Z)(n),
          r = (0, C.Z)(n),
          d = (0, h.l)(n),
          s = (0, h.P)(n),
          m = (0, p.Z)(n),
          g = (0, x.Z)(n),
          I = (0, Z.Z)(n),
          _ = (0, E.ZP)(n),
          P = (0, b.Z)(n),
          T = (0, M.Z)(n),
          L = (0, c.Z)({ id: n.id, label: U.intl.string(U.t.gFHI3t) }),
          N = (0, o.Z)(n),
          O = (0, G.ZP)(n),
          v = (0, f.Mn)("ChannelContextFavoritesMenu");
        return (0, l.jsxs)(i.Menu, {
          navId: "channel-context",
          onClose: u.Zy,
          "aria-label": U.intl.string(U.t.Xm41aW),
          onSelect: t,
          children: [
            (0, l.jsx)(i.MenuGroup, { children: a }),
            (0, l.jsxs)(i.MenuGroup, { children: [g, I, m, d] }),
            (0, l.jsxs)(i.MenuGroup, { children: [_, v ? O : P] }),
            (0, l.jsx)(i.MenuGroup, { children: T }),
            (0, l.jsx)(i.MenuGroup, { children: N }),
            (0, l.jsx)(i.MenuGroup, { children: s }),
            (0, l.jsx)(i.MenuGroup, { children: r }),
            (0, l.jsx)(i.MenuGroup, { children: L }),
          ],
        });
      }
      function O(e) {
        let { channel: n, guild: t, onSelect: a } = e,
          r = (0, j.Z)(n),
          d = (0, C.Z)(n),
          s = (0, h.l)(n),
          p = (0, h.P)(n),
          x = (0, T.Z)(n),
          Z = (0, E.ZP)(n),
          L = (0, M.Z)(n),
          N = (0, _.Z)(n, t),
          O = (0, m.Z)(n, t),
          v = (0, g.Z)(n, t),
          S = (0, I.Z)(n),
          V = (0, c.Z)({ id: n.id, label: U.intl.string(U.t.gFHI3t) }),
          w = (0, o.Z)(n),
          A = (0, P.Z)(n, "list_text_channel_context_menu"),
          k = (0, b.Z)(n),
          y = (0, G.ZP)(n),
          H = (0, f.Mn)("ChannelContextMenuNormal");
        return (0, l.jsxs)(i.Menu, {
          navId: "channel-context",
          onClose: u.Zy,
          "aria-label": U.intl.string(U.t.Xm41aW),
          onSelect: a,
          children: [
            (0, l.jsxs)(
              i.MenuGroup,
              { children: [r, s] },
              "mark-as-read-or-favorite",
            ),
            (0, l.jsxs)(
              i.MenuGroup,
              { children: [N, x, d, A] },
              "channel-actions",
            ),
            (0, l.jsxs)(
              i.MenuGroup,
              { children: [Z, H ? y : k] },
              "notifications",
            ),
            (0, l.jsxs)(
              i.MenuGroup,
              { children: [L, O, v, S] },
              "admin-actions",
            ),
            (0, l.jsx)(i.MenuGroup, { children: w }),
            (0, l.jsx)(i.MenuGroup, { children: p }),
            (0, l.jsx)(i.MenuGroup, { children: V }, "developer-actions"),
          ],
        });
      }
      n.default = (0, r.Z)(
        (0, a.Z)(
          function (e) {
            return (0, s.Z)()
              ? (0, l.jsx)(N, { ...e })
              : (0, l.jsx)(O, { ...e });
          },
          { object: L.qAy.CONTEXT_MENU },
        ),
        [d.Z.CONTEXT_MENU, d.Z.CHANNEL_LIST_TEXT_CHANNEL_MENU],
      );
    },
    593589: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return x;
        },
      });
      var l = t(200651),
        i = t(192379),
        u = t(481060),
        a = t(372900),
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
          children: (0, l.jsx)(a.Z.Provider, {
            value: t.guild_id,
            children: (0, l.jsx)(c.Z, { providedChannel: t }),
          }),
        });
      }
      function x(e, n) {
        let t = (0, d.P)(n),
          a = i.useCallback(() => {
            o.bA(
              "".concat(s.KJ3.CHANNEL_POPOUT, "-").concat(e.id),
              (n) => (0, l.jsx)(p, { windowKey: n, channel: e }),
              { defaultWidth: 854, defaultHeight: 480 },
            );
          }, [e]);
        return t
          ? (0, l.jsx)(u.MenuItem, {
              id: "channel-pop-out",
              label: "Open in Popout",
              action: () => a(),
            })
          : null;
      }
    },
    905423: function (e, n, t) {
      var l = t(512969),
        i = t(65400),
        u = t(731965),
        a = t(893607),
        r = t(981631);
      function o(e) {
        let n = (0, l.LX)(null != e ? e : "", {
          path: r.Z5c.CHANNEL(
            a.Hw.guildId(),
            a.Hw.channelId({ optional: !0 }),
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
          path: r.Z5c.GUILD_BOOSTING_MARKETING(a.Hw.guildId()),
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
          (0, u.j)(() => e({ path: n, guildId: t, channelId: l }));
        },
        resetPath(n) {
          let { guildId: t, channelId: l } = o(n);
          (0, u.j)(() =>
            e({ path: null, guildId: t, channelId: l, basePath: n }),
          );
        },
      }));
    },
    977059: function (e, n, t) {
      t.d(n, {
        R: function () {
          return u;
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
      function u(e) {
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
        u = t(938475),
        a = t(981631);
      function r(e) {
        return (0, l.cj)(
          [u.ZP, i.Z],
          () => {
            let n = u.ZP.countVoiceStatesForChannel(e.id),
              t = i.Z.getGuild(e.getGuildId());
            return null == t
              ? { reachedLimit: !1, limit: -1 }
              : e.type === a.d4z.GUILD_STAGE_VOICE
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
        let n = u.ZP.countVoiceStatesForChannel(e.id),
          t = i.Z.getGuild(e.getGuildId());
        return null == t
          ? { reachedLimit: !1, limit: -1 }
          : e.type === a.d4z.GUILD_STAGE_VOICE
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
        u = t(695346),
        a = t(981631);
      function r(e, n) {
        u.qF.getSetting()
          ? (0, i.openModalLazy)(
              async () => {
                let { default: n } = await Promise.all([
                  t.e("50506"),
                  t.e("96211"),
                  t.e("23217"),
                  t.e("84605"),
                  t.e("8016"),
                  t.e("51269"),
                  t.e("22878"),
                  t.e("90508"),
                  t.e("13351"),
                  t.e("66711"),
                  t.e("17938"),
                  t.e("21628"),
                  t.e("6380"),
                  t.e("46097"),
                  t.e("76540"),
                  t.e("8739"),
                  t.e("58059"),
                  t.e("86282"),
                  t.e("18543"),
                  t.e("18895"),
                  t.e("68445"),
                  t.e("19652"),
                  t.e("99393"),
                  t.e("99008"),
                  t.e("37229"),
                  t.e("22646"),
                  t.e("95393"),
                  t.e("3940"),
                  t.e("25183"),
                  t.e("80284"),
                  t.e("81463"),
                  t.e("58191"),
                  t.e("31135"),
                  t.e("48923"),
                  t.e("30419"),
                  t.e("69174"),
                  t.e("18824"),
                  t.e("30203"),
                  t.e("25343"),
                  t.e("88455"),
                ]).then(t.bind(t, 601572));
                return (t) =>
                  (0, l.jsx)(n, { ...t, onEnable: e, videoEnabled: !1 });
              },
              {
                modalKey: "camera-preview",
                contextKey:
                  n === a.IlC.POPOUT
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
//# sourceMappingURL=2836f73ac2cb60b87332.js.map
