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
        c = t(947440),
        d = t(100527),
        s = t(299206),
        Z = t(916069),
        h = t(895563),
        f = t(212205),
        x = t(478035),
        g = t(62420),
        p = t(420529),
        M = t(554747),
        v = t(924952),
        C = t(423589),
        j = t(427679),
        G = t(398048),
        m = t(109764),
        E = t(3689),
        N = t(323597),
        _ = t(852245),
        L = t(493802),
        P = t(367722),
        T = t(461535),
        I = t(776568),
        b = t(218035),
        S = t(775666),
        A = t(442754),
        V = t(333805),
        y = t(567521),
        O = t(624514),
        U = t(917327),
        X = t(381924),
        q = t(601274),
        Y = t(981631),
        k = t(388032);
      function D(n) {
        let { channel: e, guild: t, onSelect: a } = n,
          o = e.isGuildStageVoice(),
          d = (0, l.e7)(
            [j.Z],
            () => (o ? j.Z.getStageInstanceByChannel(e.id) : void 0),
            [o, e.id],
          ),
          Z = (0, m.Z)(e),
          p = (0, M.qY)(e.id),
          G = (0, v.Z)(null == p ? void 0 : p.id, t, e),
          E = (0, y.Z)(e, d),
          N = (0, h.l)(e),
          P = (0, h.P)(e),
          T = (0, f.Z)(e),
          I = (0, x.Z)(e),
          A = (0, g.Z)(e),
          U = (0, L.Z)(e),
          X = (0, b.Z)(e),
          Y = (0, _.Z)(e),
          D = (0, q.Z)(e, t),
          H = (0, s.Z)({ id: e.id, label: k.intl.string(k.t.gFHI3t) }),
          W = (0, V.Z)(e),
          z = (0, c.Z)(e),
          w = (0, C.Mn)("ChannelListVoiceContextMenuFavorite"),
          F = (0, S.ZP)(e),
          K = (0, O.Z)();
        return (0, i.jsxs)(r.Menu, {
          navId: "channel-context",
          onClose: u.Zy,
          "aria-label": k.intl.string(k.t.Xm41aW),
          onSelect: a,
          children: [
            (0, i.jsx)(r.MenuGroup, { children: null != p ? G : E }),
            (0, i.jsxs)(r.MenuGroup, { children: [I, A, T, N] }),
            (0, i.jsxs)(r.MenuGroup, { children: [U, w ? F : X, Y] }),
            (0, i.jsx)(r.MenuGroup, { children: z }),
            (0, i.jsx)(r.MenuGroup, { children: P }),
            (0, i.jsxs)(r.MenuGroup, { children: [D, Z] }),
            (0, i.jsx)(r.MenuGroup, { children: W }),
            (0, i.jsxs)(r.MenuGroup, { children: [H, K] }),
          ],
        });
      }
      function H(n) {
        let { channel: e, guild: t, onSelect: a } = n,
          o = e.isGuildStageVoice(),
          d = (0, l.e7)(
            [j.Z],
            () => (o ? j.Z.getStageInstanceByChannel(e.id) : void 0),
            [o, e.id],
          ),
          Z = (0, T.Z)(e),
          f = (0, m.Z)(e),
          x = (0, M.qY)(e.id),
          g = (0, v.Z)(null == x ? void 0 : x.id, t, e),
          Y = (0, y.Z)(e, d),
          D = (0, h.l)(e),
          H = (0, h.P)(e),
          W = (0, L.Z)(e),
          z = (0, b.Z)(e),
          w = (0, _.Z)(e),
          F = (0, P.Z)(e, t, d),
          K = (0, q.Z)(e, t),
          R = (0, U.Z)(e, t),
          B = (0, X.Z)(e, t.id),
          J = (0, G.Z)(e, t),
          Q = (0, E.Z)(e, t),
          $ = (0, N.Z)(e),
          nn = (0, s.Z)({ id: e.id, label: k.intl.string(k.t.gFHI3t) }),
          ne = (0, V.Z)(e),
          nt = (0, c.Z)(e),
          ni = (0, A.Z)(e),
          nl = (0, p.Z)(e),
          nr = (0, I.ZP)(e),
          nu = (0, C.Mn)("ChannelListVoiceContextMenuNormal"),
          na = (0, S.ZP)(e),
          no = (0, O.Z)();
        return (0, i.jsxs)(r.Menu, {
          navId: "channel-context",
          onClose: u.Zy,
          "aria-label": k.intl.string(k.t.Xm41aW),
          onSelect: a,
          children: [
            (0, i.jsx)(r.MenuGroup, { children: null != x ? g : Y }),
            (0, i.jsxs)(
              r.MenuGroup,
              { children: [Z, D] },
              "mark-as-read-or-favorite",
            ),
            (0, i.jsxs)(
              r.MenuGroup,
              { children: [F, nt, ni, f] },
              "channel-actions",
            ),
            (0, i.jsxs)(
              r.MenuGroup,
              { children: [B, K, R, W, nl, ne] },
              "voice-actions",
            ),
            (0, i.jsxs)(
              r.MenuGroup,
              { children: [nr, nu ? na : z] },
              "notifications",
            ),
            (0, i.jsx)(r.MenuGroup, { children: H }),
            (0, i.jsxs)(
              r.MenuGroup,
              { children: [w, J, Q, $] },
              "admin-actions",
            ),
            (0, i.jsxs)(
              r.MenuGroup,
              { children: [nn, no] },
              "developer-actions",
            ),
          ],
        });
      }
      e.default = (0, o.Z)(
        (0, a.Z)(
          function (n) {
            return (0, Z.Z)()
              ? (0, i.jsx)(D, { ...n })
              : (0, i.jsx)(H, { ...n });
          },
          { object: Y.qAy.CONTEXT_MENU },
        ),
        [d.Z.CONTEXT_MENU, d.Z.CHANNEL_LIST_VOICE_CHANNEL_MENU],
      );
    },
    493802: function (n, e, t) {
      t.d(e, {
        Z: function () {
          return c;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(481060),
        u = t(5036),
        a = t(58468),
        o = t(388032);
      function c(n) {
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
          return d;
        },
      });
      var i = t(200651);
      t(192379);
      var l = t(442837),
        r = t(481060),
        u = t(471253),
        a = t(146085),
        o = t(496675),
        c = t(388032);
      function d(n, e) {
        let t = (0, l.e7)([o.Z], () => o.Z.can(a.yP, n), [n]);
        return null != e && t
          ? (0, i.jsx)(r.MenuItem, {
              id: "end-stage",
              label: c.intl.string(c.t.saZaRU),
              color: "danger",
              action: function () {
                (0, r.openModal)((e) =>
                  (0, i.jsx)(r.ConfirmModal, {
                    ...e,
                    header: c.intl.string(c.t.gW9je3),
                    confirmText: c.intl.string(c.t.saZaRU),
                    cancelText: c.intl.string(c.t["ETE/oK"]),
                    onConfirm: () => (0, u.NZ)(n),
                    children: (0, i.jsx)(r.Text, {
                      variant: "text-md/normal",
                      color: "header-secondary",
                      children: c.intl.string(c.t.mT7jwM),
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
          return l;
        },
      }),
        t(200651),
        t(192379),
        t(481060);
      var i = t(32300);
      function l() {
        return (0, i.XE)("channel_context_menu"), null;
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
        a = t(362721),
        o = t(339340),
        c = t(869768),
        d = t(496675),
        s = t(12498),
        Z = t(981631),
        h = t(388032);
      function f(n, e) {
        let f = (0, l.e7)([d.Z], () => d.Z.can(Z.Plq.MANAGE_CHANNELS, e)),
          x = (0, a.ZP)(n),
          g = (0, c.W)(n),
          p = (0, l.e7)([s.Z], () => s.Z.getChannelStatus(n)),
          M = null != p && p.length > 0;
        return n.isGuildVoice() && (f || x)
          ? !g && f && M
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
        c = t(496675),
        d = t(944486),
        s = t(981631),
        Z = t(388032);
      function h(n, e) {
        let t = (0, l.e7)([c.Z], () => c.Z.can(s.Plq.CONNECT, n), [n]),
          h = (0, l.e7)([d.Z], () => d.Z.getVoiceChannelId()),
          f = (0, o.tT)(e),
          x = h === n.id;
        return n.isGuildVocal() && t && null != f && !x
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
        c = t(981631),
        d = t(388032);
      function s(n, e) {
        return (0, l.e7)([o.Z], () => o.Z.can(c.Plq.CONNECT, n), [n]) &&
          n.isGuildVocal()
          ? (0, i.jsx)(r.MenuItem, {
              id: "open-chat",
              label: d.intl.string(d.t.ZXxLQk),
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
        c = t(482241),
        d = t(765305),
        s = t(388032);
      function Z(n, e, t) {
        let { canManageGuildEvent: Z } = (0, u.XJ)(null != t ? t : e),
          h = (0, l.e7)([o.ZP], () => o.ZP.isActive(n)),
          f = (0, l.e7)([o.ZP], () => o.ZP.getGuildScheduledEvent(n), [n]),
          x = Z(f);
        if (
          null == n ||
          !x ||
          !h ||
          (null == f ? void 0 : f.entity_type) === d.WX.EXTERNAL
        )
          return null;
        let g = () => {
          if (null == t ? void 0 : t.isGuildStageVoice()) {
            (0, a.NZ)(t);
            return;
          }
          null != n && c.Z.endEvent(n, e.id), (0, r.closeAllModals)();
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
//# sourceMappingURL=f2a31091c0c80f477e01.js.map
