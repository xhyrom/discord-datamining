"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["98391"],
  {
    985588: function (n, e, i) {
      i.d(e, {
        s: function () {
          return s;
        },
      });
      var r = i(442837),
        t = i(314897),
        a = i(699516);
      function s(n) {
        return (0, r.e7)([a.Z, t.default], () => {
          let e = a.Z.isFriend(n.id),
            i = t.default.getId() === n.id;
          return e && !i && !n.bot && !n.system && !n.isProvisional;
        });
      }
    },
    354589: function (n, e, i) {
      i.r(e);
      var r = i(200651);
      i(192379);
      var t = i(481060),
        a = i(239091),
        s = i(883385),
        d = i(108843),
        o = i(911969),
        l = i(947440),
        u = i(100527),
        c = i(441061),
        m = i(167675),
        f = i(737013),
        Z = i(607783),
        h = i(299206),
        g = i(819403),
        v = i(777658),
        p = i(858488),
        x = i(185457),
        j = i(570870),
        M = i(389052),
        I = i(24311),
        C = i(915193),
        _ = i(332576),
        T = i(158508),
        U = i(710631),
        b = i(297047),
        w = i(88966),
        E = i(397616),
        N = i(558924),
        O = i(991307),
        G = i(37258),
        P = i(700994),
        k = i(332031),
        y = i(981631),
        A = i(388032);
      e.default = (0, d.Z)(
        (0, s.Z)(
          function (n) {
            var e;
            let {
                user: i,
                channel: s,
                context: d,
                showChatItems: u = !0,
                showMediaItems: y = !1,
                showChannelCallItems: S = !1,
                showModalItems: R = !0,
                onSelect: z,
                onHeightUpdate: D,
              } = n,
              W = (0, G.Z)({ userId: i.id, guildId: null }),
              L = (0, b.Z)(i, null, d),
              B = (0, N.Z)(i, s.id),
              J = (0, w.Z)(i.id, d),
              q = (0, I.Z)({ user: i, context: d }),
              X = (0, x.Z)({ user: i, channelId: s.id, context: d }),
              Y = (0, p.Z)({ user: i }),
              F = (0, P.Z)(i.id),
              H = (0, E.Z)(i.id, s.id),
              K = (0, O.Z)(i.id),
              Q = (0, Z.B)({
                userId: i.id,
                channelId: s.id,
                guildId: s.getGuildId(),
                location: "GroupDMUserContextMenu",
              }),
              V = (0, _.Z)(i.id, s.id),
              $ = (0, U.Z)({ user: i }),
              nn = (0, l.Z)(null, i),
              ne = (0, v.Z)(i),
              ni = (0, M.Z)({ user: i, location: "GroupDMUserContextMenu" }),
              nr = (0, T.Z)({ user: i, location: "GroupDMUserContextMenu" }),
              nt = (0, h.Z)({ id: i.id, label: A.intl.string(A.t["/AXYnJ"]) }),
              na = (0, k.Z)(i.id),
              ns = (0, m.Z)(i.id),
              nd = (0, c.Z)(s.id),
              no = (0, g.Z)(i),
              nl = (0, f.Z)(i.id),
              nu = (0, j.Z)({
                commandType: o.yU.USER,
                commandTargetId: i.id,
                channel: s,
                guildId: void 0,
                onHeightUpdate: D,
              }),
              nc = (0, C.Z)(i, s),
              nm = i.isNonUserBot(),
              nf = s.isManaged(),
              nZ =
                null === (e = s.recipients) || void 0 === e
                  ? void 0
                  : e.includes(i.id);
            return (0, r.jsxs)(t.Menu, {
              navId: "user-context",
              onClose: a.Zy,
              "aria-label": A.intl.string(A.t.liqwPD),
              onSelect: z,
              children: [
                !nm &&
                  (0, r.jsxs)(r.Fragment, {
                    children: [
                      (0, r.jsx)(t.MenuGroup, { children: no }),
                      (0, r.jsxs)(t.MenuGroup, {
                        children: [
                          R && W,
                          u && L,
                          J,
                          q,
                          !nf && B,
                          R && X,
                          R && Y,
                          na,
                        ],
                      }),
                      y && (0, r.jsx)(t.MenuGroup, { children: F }),
                      nZ &&
                        (0, r.jsxs)(t.MenuGroup, { children: [!nf && H, nc] }),
                      (0, r.jsx)(t.MenuGroup, { children: R && nn }),
                      (0, r.jsxs)(t.MenuGroup, {
                        children: [
                          y && K,
                          y && Q,
                          y && V,
                          nu,
                          R && $,
                          ne,
                          R && nr,
                          R && ni,
                          y && nl,
                        ],
                      }),
                      S && (0, r.jsxs)(t.MenuGroup, { children: [nd, ns] }),
                    ],
                  }),
                (0, r.jsx)(t.MenuGroup, { children: nt }),
              ],
            });
          },
          { object: y.qAy.CONTEXT_MENU },
        ),
        [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_USER_MENU],
      );
    },
    915193: function (n, e, i) {
      i.d(e, {
        Z: function () {
          return Z;
        },
      });
      var r = i(200651);
      i(192379);
      var t = i(442837),
        a = i(692547),
        s = i(481060),
        d = i(493683),
        o = i(129861),
        l = i(700582),
        u = i(594174),
        c = i(388032),
        m = i(985254);
      function f(n) {
        let { color: e, className: i } = n;
        return (0, r.jsx)("svg", {
          className: i,
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
                stroke: e,
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
      function Z(n, e) {
        let i = (0, t.e7)([u.default], () => u.default.getCurrentUser());
        return null == i || e.ownerId !== i.id || n.id === i.id
          ? null
          : (0, r.jsx)(s.MenuItem, {
              id: "make-dm-owner",
              color: "danger",
              label: c.intl.string(c.t["6t3CyM"]),
              action: () => {
                var t;
                return (
                  (t = i),
                  void (0, s.openModal)((i) =>
                    (0, r.jsxs)(s.ConfirmModal, {
                      bodyClassName: m.confirmModal,
                      header: c.intl.string(c.t.WZoUsr),
                      confirmText: c.intl.string(c.t["cY+Ooa"]),
                      cancelText: c.intl.string(c.t["ETE/oK"]),
                      onConfirm: () => d.Z.setDMOwner(e.id, n.id),
                      ...i,
                      children: [
                        (0, r.jsx)(f, {
                          color: a.Z.unsafe_rawColors.PRIMARY_300.css,
                        }),
                        (0, r.jsxs)("div", {
                          className: m.fromToWrapper,
                          children: [
                            (0, r.jsx)("div", {
                              className: m.from,
                              children: (0, r.jsx)(l.Z, {
                                user: t,
                                size: s.AvatarSizes.SIZE_80,
                              }),
                            }),
                            (0, r.jsx)("div", {
                              className: m.to,
                              children: (0, r.jsx)(l.Z, {
                                user: n,
                                size: s.AvatarSizes.SIZE_80,
                              }),
                            }),
                          ],
                        }),
                        (0, r.jsx)(s.Text, {
                          variant: "text-md/normal",
                          children: c.intl.format(c.t.gsBb3N, {
                            usernameHook: (e, i) =>
                              (0, r.jsx)(
                                o.Z,
                                {
                                  usernameIcon: (0, r.jsx)(s.Avatar, {
                                    className: m.avatarIcon,
                                    src: n.getAvatarURL(void 0, 16),
                                    size: s.AvatarSizes.SIZE_16,
                                    "aria-hidden": !0,
                                  }),
                                  className: m.discordTag,
                                  usernameClass: m.username,
                                  discriminatorClass: m.discriminator,
                                  user: n,
                                },
                                i,
                              ),
                          }),
                        }),
                      ],
                    }),
                  )
                );
              },
            });
      }
    },
    88966: function (n, e, i) {
      i.d(e, {
        Z: function () {
          return c;
        },
      });
      var r = i(200651);
      i(192379);
      var t = i(442837),
        a = i(481060),
        s = i(493683),
        d = i(40851),
        o = i(314897),
        l = i(981631),
        u = i(388032);
      function c(n, e) {
        let i = (0, d.Aq)();
        return (0, t.e7)([o.default], () => o.default.getId() === n) ||
          e === l.IlC.POPOUT
          ? null
          : (0, r.jsx)(a.MenuItem, {
              id: "message-user",
              label: u.intl.string(u.t.OAJQlJ),
              action: () => {
                s.Z.openPrivateChannel(n),
                  i.dispatch(l.CkL.POPOUT_CLOSE),
                  (0, a.closeAllModals)();
              },
            });
      }
    },
    397616: function (n, e, i) {
      i.d(e, {
        Z: function () {
          return u;
        },
      });
      var r = i(200651);
      i(192379);
      var t = i(442837),
        a = i(481060),
        s = i(493683),
        d = i(592125),
        o = i(594174),
        l = i(388032);
      function u(n, e) {
        var i;
        let u = (0, t.e7)([o.default], () => o.default.getCurrentUser(), []),
          c = (0, t.e7)([d.Z], () => d.Z.getChannel(e), [e]);
        return null == c ||
          c.isOwner(n) ||
          null == u ||
          !c.isOwner(u.id) ||
          !(null === (i = c.recipients) || void 0 === i
            ? void 0
            : i.includes(n))
          ? null
          : (0, r.jsx)(a.MenuItem, {
              id: "remove",
              label: l.intl.string(l.t.n5zMIy),
              action: () => s.Z.removeRecipient(e, n),
              color: "danger",
            });
      }
    },
    558924: function (n, e, i) {
      i.d(e, {
        Z: function () {
          return c;
        },
      }),
        i(47120);
      var r = i(200651);
      i(192379);
      var t = i(442837),
        a = i(481060),
        s = i(26151),
        d = i(358221),
        o = i(985588),
        l = i(354459),
        u = i(388032);
      function c(n, e) {
        let [i, c] = (0, t.Wu)(
          [d.Z],
          () => [d.Z.getParticipants(e), d.Z.getParticipant(e, n.id)],
          [e, n.id],
        );
        return (0, o.s)(n) && 0 !== i.length
          ? null == c
            ? (0, r.jsx)(a.MenuItem, {
                id: "ring",
                label: u.intl.string(u.t.bHa9kJ),
                action: () => s.Z.ring(e, [n.id]),
              })
            : c.type === l.fO.USER && c.ringing
              ? (0, r.jsx)(a.MenuItem, {
                  id: "stop-ringing",
                  label: u.intl.string(u.t.ygslb2),
                  action: () => s.Z.stopRinging(e, [n.id]),
                })
              : null
          : null;
      }
    },
    985254: function (n, e, i) {
      n.exports = {
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
    96907: function (n, e, i) {
      n.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
  },
]);
//# sourceMappingURL=8aee8bca93c0ab0530ab.js.map
