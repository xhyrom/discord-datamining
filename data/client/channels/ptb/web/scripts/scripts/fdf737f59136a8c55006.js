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
        o = t(883385),
        a = t(108843),
        d = t(947440),
        c = t(100527),
        s = t(299206),
        Z = t(916069),
        h = t(895563),
        f = t(212205),
        x = t(478035),
        g = t(62420),
        M = t(420529),
        p = t(554747),
        C = t(924952),
        v = t(423589),
        j = t(427679),
        E = t(398048),
        G = t(109764),
        _ = t(3689),
        m = t(323597),
        N = t(852245),
        P = t(493802),
        T = t(367722),
        L = t(461535),
        S = t(776568),
        I = t(218035),
        b = t(775666),
        O = t(442754),
        V = t(333805),
        A = t(567521),
        y = t(624514),
        U = t(917327),
        X = t(381924),
        q = t(601274),
        R = t(981631),
        Y = t(388032);
      function k(n) {
        let { channel: e, guild: t, onSelect: o } = n,
          a = e.isGuildStageVoice(),
          c = (0, l.e7)(
            [j.Z],
            () => (a ? j.Z.getStageInstanceByChannel(e.id) : void 0),
            [a, e.id],
          ),
          Z = (0, G.Z)(e),
          M = (0, p.qY)(e.id),
          E = (0, C.Z)(null == M ? void 0 : M.id, t, e),
          _ = (0, A.Z)(e, c),
          m = (0, h.l)(e),
          T = (0, h.P)(e),
          L = (0, f.Z)(e),
          S = (0, x.Z)(e),
          O = (0, g.Z)(e),
          U = (0, P.Z)(e),
          X = (0, I.Z)(e),
          R = (0, N.Z)(e),
          k = (0, q.Z)(e, t),
          D = (0, s.Z)({ id: e.id, label: Y.intl.string(Y.t.gFHI3t) }),
          F = (0, V.Z)(e),
          H = (0, d.Z)(e),
          W = (0, v.Mn)("ChannelListVoiceContextMenuFavorite"),
          z = (0, b.ZP)(e),
          w = (0, y.Z)();
        return (0, i.jsxs)(r.Menu, {
          navId: "channel-context",
          onClose: u.Zy,
          "aria-label": Y.intl.string(Y.t.Xm41aW),
          onSelect: o,
          children: [
            (0, i.jsx)(r.MenuGroup, { children: null != M ? E : _ }),
            (0, i.jsxs)(r.MenuGroup, { children: [S, O, L, m] }),
            (0, i.jsxs)(r.MenuGroup, { children: [U, W ? z : X, R] }),
            (0, i.jsx)(r.MenuGroup, { children: H }),
            (0, i.jsx)(r.MenuGroup, { children: T }),
            (0, i.jsxs)(r.MenuGroup, { children: [k, Z] }),
            (0, i.jsx)(r.MenuGroup, { children: F }),
            (0, i.jsxs)(r.MenuGroup, { children: [D, w] }),
          ],
        });
      }
      function D(n) {
        let { channel: e, guild: t, onSelect: o } = n,
          a = e.isGuildStageVoice(),
          c = (0, l.e7)(
            [j.Z],
            () => (a ? j.Z.getStageInstanceByChannel(e.id) : void 0),
            [a, e.id],
          ),
          Z = (0, L.Z)(e),
          f = (0, G.Z)(e),
          x = (0, p.qY)(e.id),
          g = (0, C.Z)(null == x ? void 0 : x.id, t, e),
          R = (0, A.Z)(e, c),
          k = (0, h.l)(e),
          D = (0, h.P)(e),
          F = (0, P.Z)(e),
          H = (0, I.Z)(e),
          W = (0, N.Z)(e),
          z = (0, T.Z)(e, t, c),
          w = (0, q.Z)(e, t),
          K = (0, U.Z)(e, t),
          B = (0, X.Z)(e, t.id),
          J = (0, E.Z)(e, t),
          Q = (0, _.Z)(e, t),
          $ = (0, m.Z)(e),
          nn = (0, s.Z)({ id: e.id, label: Y.intl.string(Y.t.gFHI3t) }),
          ne = (0, V.Z)(e),
          nt = (0, d.Z)(e),
          ni = (0, O.Z)(e),
          nl = (0, M.Z)(e),
          nr = (0, S.ZP)(e),
          nu = (0, v.Mn)("ChannelListVoiceContextMenuNormal"),
          no = (0, b.ZP)(e),
          na = (0, y.Z)();
        return (0, i.jsxs)(r.Menu, {
          navId: "channel-context",
          onClose: u.Zy,
          "aria-label": Y.intl.string(Y.t.Xm41aW),
          onSelect: o,
          children: [
            (0, i.jsx)(r.MenuGroup, { children: null != x ? g : R }),
            (0, i.jsxs)(
              r.MenuGroup,
              { children: [Z, k] },
              "mark-as-read-or-favorite",
            ),
            (0, i.jsxs)(
              r.MenuGroup,
              { children: [z, nt, ni, f] },
              "channel-actions",
            ),
            (0, i.jsxs)(
              r.MenuGroup,
              { children: [B, w, K, F, nl, ne] },
              "voice-actions",
            ),
            (0, i.jsxs)(
              r.MenuGroup,
              { children: [nr, nu ? no : H] },
              "notifications",
            ),
            (0, i.jsx)(r.MenuGroup, { children: D }),
            (0, i.jsxs)(
              r.MenuGroup,
              { children: [W, J, Q, $] },
              "admin-actions",
            ),
            (0, i.jsxs)(
              r.MenuGroup,
              { children: [nn, na] },
              "developer-actions",
            ),
          ],
        });
      }
      e.default = (0, a.Z)(
        (0, o.Z)(
          function (n) {
            return (0, Z.Z)()
              ? (0, i.jsx)(k, { ...n })
              : (0, i.jsx)(D, { ...n });
          },
          { object: R.qAy.CONTEXT_MENU },
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
        o = t(58468),
        a = t(388032);
      function d(n) {
        let e = (0, l.e7)([o.Z], () => o.Z.isCollapsed(n.id), [n.id]);
        return __OVERLAY__
          ? null
          : (0, i.jsx)(r.MenuCheckboxItem, {
              id: "hide-voice-names",
              label: a.intl.string(a.t.LxzNio),
              action: () => u.Z.update(n.id),
              checked: e,
            });
      }
    },
    333805: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return a;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(481060),
        r = t(726521),
        u = t(427679),
        o = t(388032);
      function a(n) {
        let e = u.Z.isLive(n.id);
        return n.isGuildStageVoice() && e
          ? (0, i.jsx)(l.MenuItem, {
              id: "report-stage",
              label: o.intl.string(o.t.JGj6Cg),
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
        o = t(146085),
        a = t(496675),
        d = t(388032);
      function c(n, e) {
        let t = (0, l.e7)([a.Z], () => a.Z.can(o.yP, n), [n]);
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
    624514: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return o;
        },
      }),
        t(200651),
        t(192379);
      var i = t(442837);
      t(481060);
      var l = t(615287),
        r = t(32300),
        u = t(371651);
      function o() {
        (0, r.XE)("channel_context_menu");
        let n = (0, i.e7)([u.Z], () => u.Z.getForcedRenderMode());
        return n === l.R5.OUT_OF_PROCESS_V2 || l.R5.OUT_OF_PROCESS_V3, null;
      }
      t(388627);
    },
    917327: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return f;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(481060),
        u = t(787014),
        o = t(362721),
        a = t(339340),
        d = t(869768),
        c = t(496675),
        s = t(12498),
        Z = t(981631),
        h = t(388032);
      function f(n, e) {
        let f = (0, l.e7)([c.Z], () => c.Z.can(Z.Plq.MANAGE_CHANNELS, e)),
          x = (0, o.ZP)(n),
          g = (0, d.W)(n),
          M = (0, l.e7)([s.Z], () => s.Z.getChannelStatus(n)),
          p = null != M && M.length > 0;
        return n.isGuildVoice() && (f || x)
          ? !g && f && p
            ? (0, i.jsx)(r.MenuItem, {
                id: "clear-status",
                label: h.intl.string(h.t["22CYiY"]),
                action: () => {
                  u.ZP.updateVoiceChannelStatus(n.id, "");
                },
              })
            : g && x
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
                      { modalKey: a.VOICE_CHANNEL_STATUS_MODAL_KEY },
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
        o = t(208049),
        a = t(893663),
        d = t(496675),
        c = t(944486),
        s = t(981631),
        Z = t(388032);
      function h(n, e) {
        let t = (0, l.e7)([d.Z], () => d.Z.can(s.Plq.CONNECT, n), [n]),
          h = (0, l.e7)([c.Z], () => c.Z.getVoiceChannelId()),
          f = (0, a.tT)(e),
          x = h === n.id;
        return n.isGuildVocal() && t && null != f && !x
          ? (0, i.jsx)(r.sN, {
              id: "join-muted-custom-join-sound",
              label: Z.intl.string(Z.t.saLMWV),
              action: () => {
                (0, o.Db)(n.id), u.default.selectVoiceChannel(n.id);
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
        o = t(703656),
        a = t(496675),
        d = t(981631),
        c = t(388032);
      function s(n, e) {
        return (0, l.e7)([a.Z], () => a.Z.can(d.Plq.CONNECT, n), [n]) &&
          n.isGuildVocal()
          ? (0, i.jsx)(r.MenuItem, {
              id: "open-chat",
              label: c.intl.string(c.t.ZXxLQk),
              action: () => {
                u.Z.updateChatOpen(n.id, !0), (0, o.XU)(e.id, n.id);
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
        o = t(471253),
        a = t(924301),
        d = t(482241),
        c = t(765305),
        s = t(388032);
      function Z(n, e, t) {
        let { canManageGuildEvent: Z } = (0, u.XJ)(null != t ? t : e),
          h = (0, l.e7)([a.ZP], () => a.ZP.isActive(n)),
          f = (0, l.e7)([a.ZP], () => a.ZP.getGuildScheduledEvent(n), [n]),
          x = Z(f);
        if (
          null == n ||
          !x ||
          !h ||
          (null == f ? void 0 : f.entity_type) === c.WX.EXTERNAL
        )
          return null;
        let g = () => {
          if (null == t ? void 0 : t.isGuildStageVoice()) {
            (0, o.NZ)(t);
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
                onConfirm: g,
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
//# sourceMappingURL=fdf737f59136a8c55006.js.map
