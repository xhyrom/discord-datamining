"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["83331"],
  {
    5036: function (n, e, t) {
      var i = t(570140),
        l = t(149071),
        r = t(9156);
      e.Z = {
        update(n) {
          i.Z.dispatch({ type: "CHANNEL_COLLAPSE", channelId: n });
        },
        toggleCollapseGuild(n) {
          l.Z.saveUserGuildSettings(n, {
            hide_muted_channels: !r.ZP.isGuildCollapsed(n),
          }),
            i.Z.dispatch({ type: "GUILD_TOGGLE_COLLAPSE_MUTED", guildId: n });
        },
      };
    },
    213202: function (n, e, t) {
      t.r(e);
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(481060),
        u = t(239091),
        a = t(883385),
        o = t(108843),
        d = t(947440),
        c = t(100527),
        s = t(299206),
        Z = t(916069),
        h = t(895563),
        x = t(212205),
        g = t(478035),
        f = t(62420),
        p = t(420529),
        M = t(554747),
        C = t(924952),
        j = t(423589),
        v = t(427679),
        G = t(398048),
        m = t(109764),
        E = t(3689),
        N = t(323597),
        _ = t(852245),
        L = t(493802),
        T = t(367722),
        I = t(461535),
        P = t(776568),
        b = t(218035),
        S = t(775666),
        A = t(442754),
        V = t(333805),
        y = t(567521),
        O = t(917327),
        U = t(381924),
        q = t(601274),
        X = t(981631),
        Y = t(388032);
      function k(n) {
        let { channel: e, guild: t, onSelect: a } = n,
          o = e.isGuildStageVoice(),
          c = (0, l.e7)(
            [v.Z],
            () => (o ? v.Z.getStageInstanceByChannel(e.id) : void 0),
            [o, e.id],
          ),
          Z = (0, m.Z)(e),
          p = (0, M.qY)(e.id),
          G = (0, C.Z)(null == p ? void 0 : p.id, t, e),
          E = (0, y.Z)(e, c),
          N = (0, h.l)(e),
          T = (0, h.P)(e),
          I = (0, x.Z)(e),
          P = (0, g.Z)(e),
          A = (0, f.Z)(e),
          O = (0, L.Z)(e),
          U = (0, b.Z)(e),
          X = (0, _.Z)(e),
          k = (0, q.Z)(e, t),
          D = (0, s.Z)({ id: e.id, label: Y.intl.string(Y.t.gFHI3t) }),
          H = (0, V.Z)(e),
          W = (0, d.Z)(e),
          z = (0, j.Mn)("ChannelListVoiceContextMenuFavorite"),
          w = (0, S.ZP)(e);
        return (0, i.jsxs)(r.Menu, {
          navId: "channel-context",
          onClose: u.Zy,
          "aria-label": Y.intl.string(Y.t.Xm41aW),
          onSelect: a,
          children: [
            (0, i.jsx)(r.MenuGroup, { children: null != p ? G : E }),
            (0, i.jsxs)(r.MenuGroup, { children: [P, A, I, N] }),
            (0, i.jsxs)(r.MenuGroup, { children: [O, z ? w : U, X] }),
            (0, i.jsx)(r.MenuGroup, { children: W }),
            (0, i.jsx)(r.MenuGroup, { children: T }),
            (0, i.jsxs)(r.MenuGroup, { children: [k, Z] }),
            (0, i.jsx)(r.MenuGroup, { children: H }),
            (0, i.jsx)(r.MenuGroup, { children: D }),
          ],
        });
      }
      function D(n) {
        let { channel: e, guild: t, onSelect: a } = n,
          o = e.isGuildStageVoice(),
          c = (0, l.e7)(
            [v.Z],
            () => (o ? v.Z.getStageInstanceByChannel(e.id) : void 0),
            [o, e.id],
          ),
          Z = (0, I.Z)(e),
          x = (0, m.Z)(e),
          g = (0, M.qY)(e.id),
          f = (0, C.Z)(null == g ? void 0 : g.id, t, e),
          X = (0, y.Z)(e, c),
          k = (0, h.l)(e),
          D = (0, h.P)(e),
          H = (0, L.Z)(e),
          W = (0, b.Z)(e),
          z = (0, _.Z)(e),
          w = (0, T.Z)(e, t, c),
          F = (0, q.Z)(e, t),
          K = (0, O.Z)(e, t),
          R = (0, U.Z)(e, t.id),
          B = (0, G.Z)(e, t),
          J = (0, E.Z)(e, t),
          Q = (0, N.Z)(e),
          $ = (0, s.Z)({ id: e.id, label: Y.intl.string(Y.t.gFHI3t) }),
          nn = (0, V.Z)(e),
          ne = (0, d.Z)(e),
          nt = (0, A.Z)(e),
          ni = (0, p.Z)(e),
          nl = (0, P.ZP)(e),
          nr = (0, j.Mn)("ChannelListVoiceContextMenuNormal"),
          nu = (0, S.ZP)(e);
        return (0, i.jsxs)(r.Menu, {
          navId: "channel-context",
          onClose: u.Zy,
          "aria-label": Y.intl.string(Y.t.Xm41aW),
          onSelect: a,
          children: [
            (0, i.jsx)(r.MenuGroup, { children: null != g ? f : X }),
            (0, i.jsxs)(
              r.MenuGroup,
              { children: [Z, k] },
              "mark-as-read-or-favorite",
            ),
            (0, i.jsxs)(
              r.MenuGroup,
              { children: [w, ne, nt, x] },
              "channel-actions",
            ),
            (0, i.jsxs)(
              r.MenuGroup,
              { children: [R, F, K, H, ni, nn] },
              "voice-actions",
            ),
            (0, i.jsxs)(
              r.MenuGroup,
              { children: [nl, nr ? nu : W] },
              "notifications",
            ),
            (0, i.jsx)(r.MenuGroup, { children: D }),
            (0, i.jsxs)(
              r.MenuGroup,
              { children: [z, B, J, Q] },
              "admin-actions",
            ),
            (0, i.jsx)(r.MenuGroup, { children: $ }, "developer-actions"),
          ],
        });
      }
      e.default = (0, o.Z)(
        (0, a.Z)(
          function (n) {
            return (0, Z.Z)()
              ? (0, i.jsx)(k, { ...n })
              : (0, i.jsx)(D, { ...n });
          },
          { object: X.qAy.CONTEXT_MENU },
        ),
        [c.Z.CONTEXT_MENU, c.Z.CHANNEL_LIST_VOICE_CHANNEL_MENU],
      );
    },
    493802: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return d;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(481060),
        u = t(5036),
        a = t(58468),
        o = t(388032);
      function d(n) {
        let e = (0, l.e7)([a.Z], () => a.Z.isCollapsed(n.id), [n.id]);
        return __OVERLAY__
          ? null
          : (0, i.jsx)(r.MenuCheckboxItem, {
              id: "hide-voice-names",
              label: o.intl.string(o.t.LxzNio),
              action: () => u.Z.update(n.id),
              checked: e,
            });
      }
    },
    333805: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return o;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(481060),
        r = t(726521),
        u = t(427679),
        a = t(388032);
      function o(n) {
        let e = u.Z.isLive(n.id);
        return n.isGuildStageVoice() && e
          ? (0, i.jsx)(l.MenuItem, {
              id: "report-stage",
              label: a.intl.string(a.t.JGj6Cg),
              action: () => (0, r.ic)(n),
              icon: l.FlagIcon,
              color: "danger",
            })
          : null;
      }
    },
    567521: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return c;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(481060),
        u = t(471253),
        a = t(146085),
        o = t(496675),
        d = t(388032);
      function c(n, e) {
        let t = (0, l.e7)([o.Z], () => o.Z.can(a.yP, n), [n]);
        return null != e && t
          ? (0, i.jsx)(r.MenuItem, {
              id: "end-stage",
              label: d.intl.string(d.t.saZaRU),
              color: "danger",
              action: function () {
                (0, r.openModal)((e) =>
                  (0, i.jsx)(r.ConfirmModal, {
                    ...e,
                    header: d.intl.string(d.t.gW9je3),
                    confirmText: d.intl.string(d.t.saZaRU),
                    cancelText: d.intl.string(d.t["ETE/oK"]),
                    onConfirm: () => (0, u.NZ)(n),
                    children: (0, i.jsx)(r.Text, {
                      variant: "text-md/normal",
                      color: "header-secondary",
                      children: d.intl.string(d.t.mT7jwM),
                    }),
                  }),
                );
              },
            })
          : null;
      }
    },
    917327: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return x;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(481060),
        u = t(787014),
        a = t(362721),
        o = t(339340),
        d = t(869768),
        c = t(496675),
        s = t(12498),
        Z = t(981631),
        h = t(388032);
      function x(n, e) {
        let x = (0, l.e7)([c.Z], () => c.Z.can(Z.Plq.MANAGE_CHANNELS, e)),
          g = (0, a.Z)(n),
          f = (0, d.W)(n),
          p = (0, l.e7)([s.Z], () => s.Z.getChannelStatus(n)),
          M = null != p && p.length > 0;
        return n.isGuildVoice() && (x || g)
          ? !f && x && M
            ? (0, i.jsx)(r.MenuItem, {
                id: "clear-status",
                label: h.intl.string(h.t["22CYiY"]),
                action: () => {
                  u.ZP.updateVoiceChannelStatus(n.id, "");
                },
              })
            : f && g
              ? (0, i.jsx)(r.MenuItem, {
                  id: "set-status",
                  label: h.intl.string(h.t.Mgpxi4),
                  action: () => {
                    (0, r.openModalLazy)(
                      async () => {
                        let { default: e } = await Promise.resolve().then(
                          t.bind(t, 339340),
                        );
                        return (t) => (0, i.jsx)(e, { channel: n, ...t });
                      },
                      { modalKey: o.VOICE_CHANNEL_STATUS_MODAL_KEY },
                    );
                  },
                })
              : null
          : null;
      }
    },
    381924: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return h;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(828214),
        u = t(287734),
        a = t(208049),
        o = t(893663),
        d = t(496675),
        c = t(944486),
        s = t(981631),
        Z = t(388032);
      function h(n, e) {
        let t = (0, l.e7)([d.Z], () => d.Z.can(s.Plq.CONNECT, n), [n]),
          h = (0, l.e7)([c.Z], () => c.Z.getVoiceChannelId()),
          x = (0, o.tT)(e),
          g = h === n.id;
        return n.isGuildVocal() && t && null != x && !g
          ? (0, i.jsx)(r.sN, {
              id: "join-muted-custom-join-sound",
              label: Z.intl.string(Z.t.saLMWV),
              action: () => {
                (0, a.Db)(n.id), u.default.selectVoiceChannel(n.id);
              },
            })
          : null;
      }
    },
    601274: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return s;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(481060),
        u = t(475179),
        a = t(703656),
        o = t(496675),
        d = t(981631),
        c = t(388032);
      function s(n, e) {
        return (0, l.e7)([o.Z], () => o.Z.can(d.Plq.CONNECT, n), [n]) &&
          n.isGuildVocal()
          ? (0, i.jsx)(r.MenuItem, {
              id: "open-chat",
              label: c.intl.string(c.t.ZXxLQk),
              action: () => {
                u.Z.updateChatOpen(n.id, !0), (0, a.XU)(e.id, n.id);
              },
            })
          : null;
      }
    },
    924952: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return Z;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(481060),
        u = t(357156),
        a = t(471253),
        o = t(924301),
        d = t(482241),
        c = t(765305),
        s = t(388032);
      function Z(n, e, t) {
        let { canManageGuildEvent: Z } = (0, u.XJ)(null != t ? t : e),
          h = (0, l.e7)([o.ZP], () => o.ZP.isActive(n)),
          x = (0, l.e7)([o.ZP], () => o.ZP.getGuildScheduledEvent(n), [n]),
          g = Z(x);
        if (
          null == n ||
          !g ||
          !h ||
          (null == x ? void 0 : x.entity_type) === c.WX.EXTERNAL
        )
          return null;
        let f = () => {
          if (null == t ? void 0 : t.isGuildStageVoice()) {
            (0, a.NZ)(t);
            return;
          }
          null != n && d.Z.endEvent(n, e.id), (0, r.closeAllModals)();
        };
        return (0, i.jsx)(r.MenuItem, {
          id: s.intl.string(s.t.qaYzPD),
          label: s.intl.string(s.t.qaYzPD),
          action: function () {
            (0, r.openModal)((n) =>
              (0, i.jsx)(r.ConfirmModal, {
                ...n,
                header: s.intl.string(s.t.qaYzPD),
                confirmText: s.intl.string(s.t.mjB9pa),
                cancelText: s.intl.string(s.t["ETE/oK"]),
                onConfirm: f,
                children: (0, i.jsx)(r.Text, {
                  variant: "text-md/normal",
                  children: s.intl.string(s.t.bnDQ7O),
                }),
              }),
            );
          },
          color: "danger",
        });
      }
    },
    869768: function (n, e, t) {
      t.d(e, {
        W: function () {
          return u;
        },
      });
      var i = t(442837),
        l = t(314897),
        r = t(979651);
      function u(n) {
        return (function (n) {
          return (0, i.e7)([r.Z, l.default], () =>
            r.Z.isInChannel(n, l.default.getId()),
          );
        })(null == n ? void 0 : n.id);
      }
    },
  },
]);
//# sourceMappingURL=07882cc5a4a14b33edf8.js.map
