"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18283"],
  {
    985588: function (e, n, r) {
      r.d(n, {
        s: function () {
          return d;
        },
      });
      var a = r(442837),
        i = r(314897),
        s = r(699516);
      function d(e) {
        return (0, a.e7)([s.Z, i.default], () => {
          let n = s.Z.isFriend(e.id),
            r = i.default.getId() === e.id;
          return n && !r && !e.bot && !e.system && !e.isProvisional;
        });
      }
    },
    354589: function (e, n, r) {
      r.r(n);
      var a = r(735250);
      r(470079);
      var i = r(481060),
        s = r(239091),
        d = r(883385),
        t = r(108843),
        o = r(911969),
        l = r(947440),
        u = r(100527),
        c = r(441061),
        m = r(167675),
        Z = r(737013),
        f = r(607783),
        h = r(299206),
        g = r(819403),
        M = r(777658),
        v = r(858488),
        x = r(185457),
        p = r(570870),
        _ = r(389052),
        j = r(24311),
        I = r(915193),
        C = r(332576),
        E = r(710631),
        N = r(297047),
        O = r(88966),
        R = r(397616),
        U = r(558924),
        T = r(991307),
        S = r(725119),
        G = r(700994),
        P = r(332031),
        w = r(981631),
        A = r(689938);
      n.default = (0, t.Z)(
        (0, d.Z)(
          function (e) {
            var n;
            let {
                user: r,
                channel: d,
                context: t,
                showChatItems: u = !0,
                showMediaItems: w = !1,
                showChannelCallItems: b = !1,
                showModalItems: k = !0,
                onSelect: y,
                onHeightUpdate: L,
              } = e,
              W = (0, S.Z)({ userId: r.id, guildId: null }),
              z = (0, N.Z)(r, null, t),
              D = (0, U.Z)(r, d.id),
              F = (0, O.Z)(r.id, t),
              B = (0, j.Z)({ user: r, context: t }),
              H = (0, x.Z)({ user: r, channelId: d.id, context: t }),
              q = (0, v.Z)({ user: r }),
              X = (0, G.Z)(r.id),
              Y = (0, R.Z)(r.id, d.id),
              V = (0, T.Z)(r.id),
              J = (0, f.B)({
                userId: r.id,
                channelId: d.id,
                guildId: d.getGuildId(),
                location: "GroupDMUserContextMenu",
              }),
              K = (0, C.Z)(r.id, d.id),
              Q = (0, E.Z)({ user: r }),
              $ = (0, l.Z)(null, r),
              ee = (0, M.Z)(r),
              en = (0, _.Z)({ user: r }),
              er = (0, h.Z)({ id: r.id, label: A.Z.Messages.COPY_ID_USER }),
              ea = (0, P.Z)(r.id),
              ei = (0, m.Z)(r.id),
              es = (0, c.Z)(d.id),
              ed = (0, g.Z)(r),
              et = (0, Z.Z)(r.id),
              eo = (0, p.Z)({
                commandType: o.yU.USER,
                commandTargetId: r.id,
                channel: d,
                guildId: void 0,
                onHeightUpdate: L,
              }),
              el = (0, I.Z)(r, d),
              eu = r.isNonUserBot(),
              ec = d.isManaged(),
              em =
                null === (n = d.recipients) || void 0 === n
                  ? void 0
                  : n.includes(r.id);
            return (0, a.jsxs)(i.Menu, {
              navId: "user-context",
              onClose: s.Zy,
              "aria-label": A.Z.Messages.USER_ACTIONS_MENU_LABEL,
              onSelect: y,
              children: [
                !eu &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(i.MenuGroup, { children: ed }),
                      (0, a.jsxs)(i.MenuGroup, {
                        children: [
                          k && W,
                          u && z,
                          F,
                          B,
                          !ec && D,
                          k && H,
                          k && q,
                          ea,
                        ],
                      }),
                      w && (0, a.jsx)(i.MenuGroup, { children: X }),
                      em &&
                        (0, a.jsxs)(i.MenuGroup, { children: [!ec && Y, el] }),
                      (0, a.jsx)(i.MenuGroup, { children: k && $ }),
                      (0, a.jsxs)(i.MenuGroup, {
                        children: [
                          w && V,
                          w && J,
                          w && K,
                          eo,
                          k && Q,
                          ee,
                          k && en,
                          w && et,
                        ],
                      }),
                      b && (0, a.jsxs)(i.MenuGroup, { children: [es, ei] }),
                    ],
                  }),
                (0, a.jsx)(i.MenuGroup, { children: er }),
              ],
            });
          },
          { object: w.qAy.CONTEXT_MENU },
        ),
        [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_USER_MENU],
      );
    },
    915193: function (e, n, r) {
      r.d(n, {
        Z: function () {
          return f;
        },
      });
      var a = r(735250);
      r(470079);
      var i = r(442837),
        s = r(692547),
        d = r(481060),
        t = r(493683),
        o = r(129861),
        l = r(700582),
        u = r(594174),
        c = r(689938),
        m = r(346411);
      function Z(e) {
        let { color: n, className: r } = e;
        return (0, a.jsx)("svg", {
          className: r,
          height: "16",
          width: "80",
          viewBox: "0 0 80 16",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, a.jsxs)("g", {
            fill: "none",
            fillRule: "evenodd",
            opacity: ".6",
            children: [
              (0, a.jsx)("path", { d: "m0 0h80v16h-80z" }),
              (0, a.jsxs)("g", {
                stroke: n,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                children: [
                  (0, a.jsx)("path", { d: "m71 1h4v4.16" }),
                  (0, a.jsx)("path", {
                    d: "m2 1h4v4.16",
                    transform: "matrix(-1 0 0 1 8 0)",
                  }),
                  (0, a.jsx)("path", {
                    d: "m51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4",
                  }),
                  (0, a.jsx)("path", {
                    d: "m72.13 10.474 2.869 3.12 2.631-3.12",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function f(e, n) {
        let r = (0, i.e7)([u.default], () => u.default.getCurrentUser());
        return null == r || n.ownerId !== r.id || e.id === r.id
          ? null
          : (0, a.jsx)(d.MenuItem, {
              id: "make-dm-owner",
              color: "danger",
              label: c.Z.Messages.CHANGE_DM_OWNER,
              action: () => {
                var i;
                return (
                  (i = r),
                  void (0, d.openModal)((r) =>
                    (0, a.jsxs)(d.ConfirmModal, {
                      bodyClassName: m.confirmModal,
                      header: c.Z.Messages.TRANSFER_GROUP_OWNERSHIP,
                      confirmText: c.Z.Messages.CONFIRM,
                      cancelText: c.Z.Messages.CANCEL,
                      onConfirm: () => t.Z.setDMOwner(n.id, e.id),
                      ...r,
                      children: [
                        (0, a.jsx)(Z, {
                          color: s.Z.unsafe_rawColors.PRIMARY_300.css,
                        }),
                        (0, a.jsxs)("div", {
                          className: m.fromToWrapper,
                          children: [
                            (0, a.jsx)("div", {
                              className: m.from,
                              children: (0, a.jsx)(l.Z, {
                                user: i,
                                size: d.AvatarSizes.SIZE_80,
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: m.to,
                              children: (0, a.jsx)(l.Z, {
                                user: e,
                                size: d.AvatarSizes.SIZE_80,
                              }),
                            }),
                          ],
                        }),
                        (0, a.jsx)(d.Text, {
                          variant: "text-md/normal",
                          children: c.Z.Messages.CONFIRM_CHANGE_DM_OWNER.format(
                            {
                              usernameHook: (n, r) =>
                                (0, a.jsx)(
                                  o.Z,
                                  {
                                    usernameIcon: (0, a.jsx)(d.Avatar, {
                                      className: m.avatarIcon,
                                      src: e.getAvatarURL(void 0, 16),
                                      size: d.AvatarSizes.SIZE_16,
                                      "aria-hidden": !0,
                                    }),
                                    className: m.discordTag,
                                    usernameClass: m.username,
                                    discriminatorClass: m.discriminator,
                                    user: e,
                                  },
                                  r,
                                ),
                            },
                          ),
                        }),
                      ],
                    }),
                  )
                );
              },
            });
      }
    },
    88966: function (e, n, r) {
      r.d(n, {
        Z: function () {
          return c;
        },
      });
      var a = r(735250);
      r(470079);
      var i = r(442837),
        s = r(481060),
        d = r(493683),
        t = r(40851),
        o = r(314897),
        l = r(981631),
        u = r(689938);
      function c(e, n) {
        let r = (0, t.Aq)();
        return (0, i.e7)([o.default], () => o.default.getId() === e) ||
          n === l.IlC.POPOUT
          ? null
          : (0, a.jsx)(s.MenuItem, {
              id: "message-user",
              label: u.Z.Messages.USER_POPOUT_MESSAGE,
              action: () => {
                d.Z.openPrivateChannel(e),
                  r.dispatch(l.CkL.POPOUT_CLOSE),
                  (0, s.closeAllModals)();
              },
            });
      }
    },
    397616: function (e, n, r) {
      r.d(n, {
        Z: function () {
          return u;
        },
      });
      var a = r(735250);
      r(470079);
      var i = r(442837),
        s = r(481060),
        d = r(493683),
        t = r(592125),
        o = r(594174),
        l = r(689938);
      function u(e, n) {
        let r = (0, i.e7)([o.default], () => o.default.getCurrentUser(), []),
          u = (0, i.e7)([t.Z], () => t.Z.getChannel(n), [n]);
        return null == u || u.isOwner(e) || null == r || !u.isOwner(r.id)
          ? null
          : (0, a.jsx)(s.MenuItem, {
              id: "remove",
              label: l.Z.Messages.REMOVE_FROM_GROUP,
              action: () => d.Z.removeRecipient(n, e),
              color: "danger",
            });
      }
    },
    558924: function (e, n, r) {
      r.d(n, {
        Z: function () {
          return c;
        },
      }),
        r(47120);
      var a = r(735250);
      r(470079);
      var i = r(442837),
        s = r(481060),
        d = r(26151),
        t = r(358221),
        o = r(985588),
        l = r(354459),
        u = r(689938);
      function c(e, n) {
        let [r, c] = (0, i.Wu)(
          [t.Z],
          () => [t.Z.getParticipants(n), t.Z.getParticipant(n, e.id)],
          [n, e.id],
        );
        return (0, o.s)(e) && 0 !== r.length
          ? null == c
            ? (0, a.jsx)(s.MenuItem, {
                id: "ring",
                label: u.Z.Messages.RING,
                action: () => d.Z.ring(n, [e.id]),
              })
            : c.type === l.fO.USER && c.ringing
              ? (0, a.jsx)(s.MenuItem, {
                  id: "stop-ringing",
                  label: u.Z.Messages.STOP_RINGING,
                  action: () => d.Z.stopRinging(n, [e.id]),
                })
              : null
          : null;
      }
    },
    346411: function (e, n, r) {
      e.exports = {
        confirmModal: "confirmModal_a9fa9a",
        discordTag: "discordTag_a9fa9a",
        avatarIcon: "avatarIcon_a9fa9a",
        username: "username_a9fa9a",
        discriminator: "discriminator_a9fa9a",
        fromToWrapper: "fromToWrapper_a9fa9a",
        from: "from_a9fa9a",
        to: "to_a9fa9a",
      };
    },
    201683: function (e, n, r) {
      e.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
  },
]);
//# sourceMappingURL=d3b12eee4190f49d70aa.js.map
