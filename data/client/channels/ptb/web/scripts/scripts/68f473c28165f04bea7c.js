"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["83331"],
  {
    5036: function (e, n, i) {
      var t = i(570140),
        l = i(149071),
        s = i(9156);
      n.Z = {
        update(e) {
          t.Z.dispatch({ type: "CHANNEL_COLLAPSE", channelId: e });
        },
        toggleCollapseGuild(e) {
          l.Z.saveUserGuildSettings(e, {
            hide_muted_channels: !s.ZP.isGuildCollapsed(e),
          }),
            t.Z.dispatch({ type: "GUILD_TOGGLE_COLLAPSE_MUTED", guildId: e });
        },
      };
    },
    213202: function (e, n, i) {
      i.r(n);
      var t = i(735250);
      i(470079);
      var l = i(442837),
        s = i(481060),
        a = i(239091),
        u = i(883385),
        o = i(108843),
        r = i(947440),
        d = i(100527),
        c = i(299206),
        Z = i(916069),
        E = i(895563),
        M = i(212205),
        _ = i(478035),
        N = i(62420),
        C = i(420529),
        h = i(554747),
        T = i(924952),
        f = i(423589),
        x = i(427679),
        g = i(398048),
        p = i(109764),
        A = i(3689),
        L = i(323597),
        v = i(852245),
        G = i(493802),
        I = i(367722),
        j = i(461535),
        S = i(776568),
        O = i(218035),
        P = i(775666),
        m = i(442754),
        V = i(333805),
        D = i(567521),
        U = i(917327),
        b = i(381924),
        H = i(601274),
        y = i(981631),
        R = i(689938);
      function X(e) {
        let { channel: n, guild: i, onSelect: u } = e,
          o = n.isGuildStageVoice(),
          d = (0, l.e7)(
            [x.Z],
            () => (o ? x.Z.getStageInstanceByChannel(n.id) : void 0),
            [o, n.id],
          ),
          Z = (0, p.Z)(n),
          C = (0, h.qY)(n.id),
          g = (0, T.Z)(null == C ? void 0 : C.id, i, n),
          A = (0, D.Z)(n, d),
          L = (0, E.l)(n),
          I = (0, E.P)(n),
          j = (0, M.Z)(n),
          S = (0, _.Z)(n),
          m = (0, N.Z)(n),
          U = (0, G.Z)(n),
          b = (0, O.Z)(n),
          y = (0, v.Z)(n),
          X = (0, H.Z)(n, i),
          k = (0, c.Z)({ id: n.id, label: R.Z.Messages.COPY_ID_CHANNEL }),
          q = (0, V.Z)(n),
          Y = (0, r.Z)(n),
          B = (0, f.Mn)("ChannelListVoiceContextMenuFavorite"),
          w = (0, P.ZP)(n);
        return (0, t.jsxs)(s.Menu, {
          navId: "channel-context",
          onClose: a.Zy,
          "aria-label": R.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: u,
          children: [
            (0, t.jsx)(s.MenuGroup, { children: null != C ? g : A }),
            (0, t.jsxs)(s.MenuGroup, { children: [S, m, j, L] }),
            (0, t.jsxs)(s.MenuGroup, { children: [U, B ? w : b, y] }),
            (0, t.jsx)(s.MenuGroup, { children: Y }),
            (0, t.jsx)(s.MenuGroup, { children: I }),
            (0, t.jsxs)(s.MenuGroup, { children: [X, Z] }),
            (0, t.jsx)(s.MenuGroup, { children: q }),
            (0, t.jsx)(s.MenuGroup, { children: k }),
          ],
        });
      }
      function k(e) {
        let { channel: n, guild: i, onSelect: u } = e,
          o = n.isGuildStageVoice(),
          d = (0, l.e7)(
            [x.Z],
            () => (o ? x.Z.getStageInstanceByChannel(n.id) : void 0),
            [o, n.id],
          ),
          Z = (0, j.Z)(n),
          M = (0, p.Z)(n),
          _ = (0, h.qY)(n.id),
          N = (0, T.Z)(null == _ ? void 0 : _.id, i, n),
          y = (0, D.Z)(n, d),
          X = (0, E.l)(n),
          k = (0, E.P)(n),
          q = (0, G.Z)(n),
          Y = (0, O.Z)(n),
          B = (0, v.Z)(n),
          w = (0, I.Z)(n, i, d),
          F = (0, H.Z)(n, i),
          W = (0, U.Z)(n, i),
          J = (0, b.Z)(n, i.id),
          K = (0, g.Z)(n, i),
          z = (0, A.Z)(n, i),
          Q = (0, L.Z)(n),
          $ = (0, c.Z)({ id: n.id, label: R.Z.Messages.COPY_ID_CHANNEL }),
          ee = (0, V.Z)(n),
          en = (0, r.Z)(n),
          ei = (0, m.Z)(n),
          et = (0, C.Z)(n),
          el = (0, S.ZP)(n),
          es = (0, f.Mn)("ChannelListVoiceContextMenuNormal"),
          ea = (0, P.ZP)(n);
        return (0, t.jsxs)(s.Menu, {
          navId: "channel-context",
          onClose: a.Zy,
          "aria-label": R.Z.Messages.CHANNEL_ACTIONS_MENU_LABEL,
          onSelect: u,
          children: [
            (0, t.jsx)(s.MenuGroup, { children: null != _ ? N : y }),
            (0, t.jsxs)(
              s.MenuGroup,
              { children: [Z, X] },
              "mark-as-read-or-favorite",
            ),
            (0, t.jsxs)(
              s.MenuGroup,
              { children: [w, en, ei, M] },
              "channel-actions",
            ),
            (0, t.jsxs)(
              s.MenuGroup,
              { children: [J, F, W, q, et, ee] },
              "voice-actions",
            ),
            (0, t.jsxs)(
              s.MenuGroup,
              { children: [el, es ? ea : Y] },
              "notifications",
            ),
            (0, t.jsx)(s.MenuGroup, { children: k }),
            (0, t.jsxs)(
              s.MenuGroup,
              { children: [B, K, z, Q] },
              "admin-actions",
            ),
            (0, t.jsx)(s.MenuGroup, { children: $ }, "developer-actions"),
          ],
        });
      }
      n.default = (0, o.Z)(
        (0, u.Z)(
          function (e) {
            return (0, Z.Z)()
              ? (0, t.jsx)(X, { ...e })
              : (0, t.jsx)(k, { ...e });
          },
          { object: y.qAy.CONTEXT_MENU },
        ),
        [d.Z.CONTEXT_MENU, d.Z.CHANNEL_LIST_VOICE_CHANNEL_MENU],
      );
    },
    493802: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return r;
        },
      });
      var t = i(735250);
      i(470079);
      var l = i(442837),
        s = i(481060),
        a = i(5036),
        u = i(58468),
        o = i(689938);
      function r(e) {
        let n = (0, l.e7)([u.Z], () => u.Z.isCollapsed(e.id), [e.id]);
        return __OVERLAY__
          ? null
          : (0, t.jsx)(s.MenuCheckboxItem, {
              id: "hide-voice-names",
              label: o.Z.Messages.VOICE_CHANNEL_HIDE_NAMES,
              action: () => a.Z.update(e.id),
              checked: n,
            });
      }
    },
    333805: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return o;
        },
      });
      var t = i(735250);
      i(470079);
      var l = i(481060),
        s = i(726521),
        a = i(427679),
        u = i(689938);
      function o(e) {
        let n = a.Z.isLive(e.id);
        return e.isGuildStageVoice() && n
          ? (0, t.jsx)(l.MenuItem, {
              id: "report-stage",
              label: u.Z.Messages.REPORT_MODAL_REPORT_STAGE_MENU_ITEM,
              action: () => (0, s.ic)(e),
              icon: l.FlagIcon,
              color: "danger",
            })
          : null;
      }
    },
    567521: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return d;
        },
      });
      var t = i(735250);
      i(470079);
      var l = i(442837),
        s = i(481060),
        a = i(471253),
        u = i(146085),
        o = i(496675),
        r = i(689938);
      function d(e, n) {
        let i = (0, l.e7)([o.Z], () => o.Z.can(u.yP, e), [e]);
        return null != n && i
          ? (0, t.jsx)(s.MenuItem, {
              id: "end-stage",
              label: r.Z.Messages.END_STAGE,
              color: "danger",
              action: function () {
                (0, s.openModal)((n) =>
                  (0, t.jsx)(s.ConfirmModal, {
                    ...n,
                    header: r.Z.Messages.END_STAGE_TITLE,
                    confirmText: r.Z.Messages.END_STAGE,
                    cancelText: r.Z.Messages.CANCEL,
                    onConfirm: () => (0, a.NZ)(e),
                    children: (0, t.jsx)(s.Text, {
                      variant: "text-md/normal",
                      color: "header-secondary",
                      children: r.Z.Messages.EXPLICIT_END_STAGE_SUBTITLE,
                    }),
                  }),
                );
              },
            })
          : null;
      }
    },
    917327: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return M;
        },
      });
      var t = i(735250);
      i(470079);
      var l = i(442837),
        s = i(481060),
        a = i(787014),
        u = i(362721),
        o = i(339340),
        r = i(869768),
        d = i(496675),
        c = i(12498),
        Z = i(981631),
        E = i(689938);
      function M(e, n) {
        let M = (0, l.e7)([d.Z], () => d.Z.can(Z.Plq.MANAGE_CHANNELS, n)),
          _ = (0, u.Z)(e),
          N = (0, r.W)(e),
          C = (0, l.e7)([c.Z], () => c.Z.getChannelStatus(e)),
          h = null != C && C.length > 0;
        return e.isGuildVoice() && (M || _)
          ? !N && M && h
            ? (0, t.jsx)(s.MenuItem, {
                id: "clear-status",
                label: E.Z.Messages.VOICE_CHANNEL_CLEAR_STATUS,
                action: () => {
                  a.ZP.updateVoiceChannelStatus(e.id, "");
                },
              })
            : N && _
              ? (0, t.jsx)(s.MenuItem, {
                  id: "set-status",
                  label: E.Z.Messages.VOICE_CHANNEL_SET_STATUS,
                  action: () => {
                    (0, s.openModalLazy)(
                      async () => {
                        let { default: n } = await Promise.resolve().then(
                          i.bind(i, 339340),
                        );
                        return (i) => (0, t.jsx)(n, { channel: e, ...i });
                      },
                      { modalKey: o.VOICE_CHANNEL_STATUS_MODAL_KEY },
                    );
                  },
                })
              : null
          : null;
      }
    },
    381924: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return E;
        },
      });
      var t = i(735250);
      i(470079);
      var l = i(442837),
        s = i(828214),
        a = i(287734),
        u = i(208049),
        o = i(893663),
        r = i(496675),
        d = i(944486),
        c = i(981631),
        Z = i(689938);
      function E(e, n) {
        let i = (0, l.e7)([r.Z], () => r.Z.can(c.Plq.CONNECT, e), [e]),
          E = (0, l.e7)([d.Z], () => d.Z.getVoiceChannelId()),
          M = (0, o.tT)(n),
          _ = E === e.id;
        return e.isGuildVocal() && i && null != M && !_
          ? (0, t.jsx)(s.sN, {
              id: "join-muted-custom-join-sound",
              label: Z.Z.Messages.VOICE_CHANNEL_MUTED_CUSTOM_JOIN_SOUND,
              action: () => {
                (0, u.Db)(e.id), a.default.selectVoiceChannel(e.id);
              },
            })
          : null;
      }
    },
    601274: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return c;
        },
      });
      var t = i(735250);
      i(470079);
      var l = i(442837),
        s = i(481060),
        a = i(475179),
        u = i(703656),
        o = i(496675),
        r = i(981631),
        d = i(689938);
      function c(e, n) {
        return (0, l.e7)([o.Z], () => o.Z.can(r.Plq.CONNECT, e), [e]) &&
          e.isGuildVocal()
          ? (0, t.jsx)(s.MenuItem, {
              id: "open-chat",
              label: d.Z.Messages.OPEN_CHAT,
              action: () => {
                a.Z.updateChatOpen(e.id, !0), (0, u.XU)(n.id, e.id);
              },
            })
          : null;
      }
    },
    924952: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return Z;
        },
      });
      var t = i(735250);
      i(470079);
      var l = i(442837),
        s = i(481060),
        a = i(357156),
        u = i(471253),
        o = i(924301),
        r = i(482241),
        d = i(765305),
        c = i(689938);
      function Z(e, n, i) {
        let { canManageGuildEvent: Z } = (0, a.XJ)(null != i ? i : n),
          E = (0, l.e7)([o.ZP], () => o.ZP.isActive(e)),
          M = (0, l.e7)([o.ZP], () => o.ZP.getGuildScheduledEvent(e), [e]),
          _ = Z(M);
        if (
          null == e ||
          !_ ||
          !E ||
          (null == M ? void 0 : M.entity_type) === d.WX.EXTERNAL
        )
          return null;
        let N = () => {
          if (null == i ? void 0 : i.isGuildStageVoice()) {
            (0, u.NZ)(i);
            return;
          }
          null != e && r.Z.endEvent(e, n.id), (0, s.closeAllModals)();
        };
        return (0, t.jsx)(s.MenuItem, {
          id: c.Z.Messages.END_EVENT,
          label: c.Z.Messages.END_EVENT,
          action: function () {
            (0, s.openModal)((e) =>
              (0, t.jsx)(s.ConfirmModal, {
                ...e,
                header: c.Z.Messages.END_EVENT,
                confirmText: c.Z.Messages.GUILD_EVENT_END_PROMPT_CONFIRM,
                cancelText: c.Z.Messages.CANCEL,
                onConfirm: N,
                children: (0, t.jsx)(s.Text, {
                  variant: "text-md/normal",
                  children: c.Z.Messages.GUILD_EVENT_EXTERNAL_END_PROMPT_TITLE,
                }),
              }),
            );
          },
          color: "danger",
        });
      }
    },
    869768: function (e, n, i) {
      i.d(n, {
        W: function () {
          return a;
        },
      });
      var t = i(442837),
        l = i(314897),
        s = i(979651);
      function a(e) {
        return (function (e) {
          return (0, t.e7)([s.Z, l.default], () =>
            s.Z.isInChannel(e, l.default.getId()),
          );
        })(null == e ? void 0 : e.id);
      }
    },
  },
]);
//# sourceMappingURL=68f473c28165f04bea7c.js.map
