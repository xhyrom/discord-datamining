"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["18283"],
  {
    985588: function (e, n, a) {
      a.d(n, {
        s: function () {
          return d;
        },
      });
      var r = a(442837),
        i = a(314897),
        s = a(699516);
      function d(e) {
        return (0, r.e7)([s.Z, i.default], () => {
          let n = s.Z.isFriend(e.id),
            a = i.default.getId() === e.id;
          return n && !a && !e.bot && !e.system && !e.isProvisional();
        });
      }
    },
    354589: function (e, n, a) {
      a.r(n);
      var r = a(735250);
      a(470079);
      var i = a(481060),
        s = a(239091),
        d = a(883385),
        t = a(108843),
        o = a(911969),
        l = a(947440),
        u = a(100527),
        c = a(441061),
        m = a(167675),
        Z = a(737013),
        f = a(607783),
        h = a(299206),
        g = a(819403),
        M = a(777658),
        v = a(858488),
        x = a(185457),
        p = a(570870),
        _ = a(389052),
        j = a(24311),
        I = a(915193),
        C = a(332576),
        E = a(710631),
        N = a(297047),
        O = a(88966),
        R = a(397616),
        U = a(558924),
        T = a(991307),
        S = a(725119),
        G = a(700994),
        P = a(332031),
        w = a(981631),
        A = a(689938);
      n.default = (0, t.Z)(
        (0, d.Z)(
          function (e) {
            var n;
            let {
                user: a,
                channel: d,
                context: t,
                showChatItems: u = !0,
                showMediaItems: w = !1,
                showChannelCallItems: b = !1,
                showModalItems: k = !0,
                onSelect: y,
                onHeightUpdate: L,
              } = e,
              W = (0, S.Z)({ userId: a.id, guildId: null }),
              z = (0, N.Z)(a, null, t),
              D = (0, U.Z)(a, d.id),
              F = (0, O.Z)(a.id, t),
              B = (0, j.Z)({ user: a, context: t }),
              H = (0, x.Z)({ user: a, channelId: d.id, context: t }),
              q = (0, v.Z)({ user: a }),
              X = (0, G.Z)(a.id),
              Y = (0, R.Z)(a.id, d.id),
              V = (0, T.Z)(a.id),
              J = (0, f.B)({
                userId: a.id,
                channelId: d.id,
                guildId: d.getGuildId(),
                location: "GroupDMUserContextMenu",
              }),
              K = (0, C.Z)(a.id, d.id),
              Q = (0, E.Z)({ user: a }),
              $ = (0, l.Z)(null, a),
              ee = (0, M.Z)(a),
              en = (0, _.Z)({ user: a }),
              ea = (0, h.Z)({ id: a.id, label: A.Z.Messages.COPY_ID_USER }),
              er = (0, P.Z)(a.id),
              ei = (0, m.Z)(a.id),
              es = (0, c.Z)(d.id),
              ed = (0, g.Z)(a),
              et = (0, Z.Z)(a.id),
              eo = (0, p.Z)({
                commandType: o.yU.USER,
                commandTargetId: a.id,
                channel: d,
                guildId: void 0,
                onHeightUpdate: L,
              }),
              el = (0, I.Z)(a, d),
              eu = a.isNonUserBot(),
              ec = d.isManaged(),
              em =
                null === (n = d.recipients) || void 0 === n
                  ? void 0
                  : n.includes(a.id);
            return (0, r.jsxs)(i.Menu, {
              navId: "user-context",
              onClose: s.Zy,
              "aria-label": A.Z.Messages.USER_ACTIONS_MENU_LABEL,
              onSelect: y,
              children: [
                !eu &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(i.MenuGroup, { children: ed }),
                      (0, r.jsxs)(i.MenuGroup, {
                        children: [
                          k && W,
                          u && z,
                          F,
                          B,
                          !ec && D,
                          k && H,
                          k && q,
                          er,
                        ],
                      }),
                      w && (0, r.jsx)(i.MenuGroup, { children: X }),
                      em &&
                        (0, r.jsxs)(i.MenuGroup, { children: [!ec && Y, el] }),
                      (0, r.jsx)(i.MenuGroup, { children: k && $ }),
                      (0, r.jsxs)(i.MenuGroup, {
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
                      b && (0, r.jsxs)(i.MenuGroup, { children: [es, ei] }),
                    ],
                  }),
                (0, r.jsx)(i.MenuGroup, { children: ea }),
              ],
            });
          },
          { object: w.qAy.CONTEXT_MENU },
        ),
        [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_USER_MENU],
      );
    },
    915193: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return f;
        },
      });
      var r = a(735250);
      a(470079);
      var i = a(442837),
        s = a(692547),
        d = a(481060),
        t = a(493683),
        o = a(129861),
        l = a(700582),
        u = a(594174),
        c = a(689938),
        m = a(346411);
      function Z(e) {
        let { color: n, className: a } = e;
        return (0, r.jsx)("svg", {
          className: a,
          height: "16",
          width: "80",
          viewBox: "0 0 80 16",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, r.jsxs)("g", {
            fill: "none",
            fillRule: "evenodd",
            opacity: ".6",
            children: [
              (0, r.jsx)("path", { d: "m0 0h80v16h-80z" }),
              (0, r.jsxs)("g", {
                stroke: n,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                children: [
                  (0, r.jsx)("path", { d: "m71 1h4v4.16" }),
                  (0, r.jsx)("path", {
                    d: "m2 1h4v4.16",
                    transform: "matrix(-1 0 0 1 8 0)",
                  }),
                  (0, r.jsx)("path", {
                    d: "m51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4",
                  }),
                  (0, r.jsx)("path", {
                    d: "m72.13 10.474 2.869 3.12 2.631-3.12",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function f(e, n) {
        let a = (0, i.e7)([u.default], () => u.default.getCurrentUser());
        return null == a ||
          n.ownerId !== a.id ||
          e.id === a.id ||
          (null == n ? void 0 : n.isBroadcastChannel())
          ? null
          : (0, r.jsx)(d.MenuItem, {
              id: "make-dm-owner",
              color: "danger",
              label: c.Z.Messages.CHANGE_DM_OWNER,
              action: () => {
                var i;
                return (
                  (i = a),
                  void (0, d.openModal)((a) =>
                    (0, r.jsxs)(d.ConfirmModal, {
                      bodyClassName: m.confirmModal,
                      header: c.Z.Messages.TRANSFER_GROUP_OWNERSHIP,
                      confirmText: c.Z.Messages.CONFIRM,
                      cancelText: c.Z.Messages.CANCEL,
                      onConfirm: () => t.Z.setDMOwner(n.id, e.id),
                      ...a,
                      children: [
                        (0, r.jsx)(Z, {
                          color: s.Z.unsafe_rawColors.PRIMARY_300.css,
                        }),
                        (0, r.jsxs)("div", {
                          className: m.fromToWrapper,
                          children: [
                            (0, r.jsx)("div", {
                              className: m.from,
                              children: (0, r.jsx)(l.Z, {
                                user: i,
                                size: d.AvatarSizes.SIZE_80,
                              }),
                            }),
                            (0, r.jsx)("div", {
                              className: m.to,
                              children: (0, r.jsx)(l.Z, {
                                user: e,
                                size: d.AvatarSizes.SIZE_80,
                              }),
                            }),
                          ],
                        }),
                        (0, r.jsx)(d.Text, {
                          variant: "text-md/normal",
                          children: c.Z.Messages.CONFIRM_CHANGE_DM_OWNER.format(
                            {
                              usernameHook: (n, a) =>
                                (0, r.jsx)(
                                  o.Z,
                                  {
                                    usernameIcon: (0, r.jsx)(d.Avatar, {
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
                                  a,
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
    88966: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return c;
        },
      });
      var r = a(735250);
      a(470079);
      var i = a(442837),
        s = a(481060),
        d = a(493683),
        t = a(40851),
        o = a(314897),
        l = a(981631),
        u = a(689938);
      function c(e, n) {
        let a = (0, t.Aq)();
        return (0, i.e7)([o.default], () => o.default.getId() === e) ||
          n === l.IlC.POPOUT
          ? null
          : (0, r.jsx)(s.MenuItem, {
              id: "message-user",
              label: u.Z.Messages.USER_POPOUT_MESSAGE,
              action: () => {
                d.Z.openPrivateChannel(e),
                  a.dispatch(l.CkL.POPOUT_CLOSE),
                  (0, s.closeAllModals)();
              },
            });
      }
    },
    397616: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return u;
        },
      });
      var r = a(735250);
      a(470079);
      var i = a(442837),
        s = a(481060),
        d = a(493683),
        t = a(592125),
        o = a(594174),
        l = a(689938);
      function u(e, n) {
        let a = (0, i.e7)([o.default], () => o.default.getCurrentUser(), []),
          u = (0, i.e7)([t.Z], () => t.Z.getChannel(n), [n]);
        return null == u || u.isOwner(e) || null == a || !u.isOwner(a.id)
          ? null
          : (0, r.jsx)(s.MenuItem, {
              id: "remove",
              label: l.Z.Messages.REMOVE_FROM_GROUP,
              action: () => d.Z.removeRecipient(n, e),
              color: "danger",
            });
      }
    },
    558924: function (e, n, a) {
      a.d(n, {
        Z: function () {
          return c;
        },
      }),
        a(47120);
      var r = a(735250);
      a(470079);
      var i = a(442837),
        s = a(481060),
        d = a(26151),
        t = a(358221),
        o = a(985588),
        l = a(354459),
        u = a(689938);
      function c(e, n) {
        let [a, c] = (0, i.Wu)(
          [t.Z],
          () => [t.Z.getParticipants(n), t.Z.getParticipant(n, e.id)],
          [n, e.id],
        );
        return (0, o.s)(e) && 0 !== a.length
          ? null == c
            ? (0, r.jsx)(s.MenuItem, {
                id: "ring",
                label: u.Z.Messages.RING,
                action: () => d.Z.ring(n, [e.id]),
              })
            : c.type === l.fO.USER && c.ringing
              ? (0, r.jsx)(s.MenuItem, {
                  id: "stop-ringing",
                  label: u.Z.Messages.STOP_RINGING,
                  action: () => d.Z.stopRinging(n, [e.id]),
                })
              : null
          : null;
      }
    },
    346411: function (e, n, a) {
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
    201683: function (e, n, a) {
      e.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
  },
]);
//# sourceMappingURL=ae4ca1116f0f608cb69d.js.map
