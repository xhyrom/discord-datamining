"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["8634"],
  {
    354589: function (e, n, r) {
      r.r(n);
      var i = r(200651);
      r(192379);
      var a = r(481060),
        t = r(239091),
        s = r(883385),
        d = r(108843),
        o = r(911969),
        l = r(947440),
        u = r(100527),
        c = r(441061),
        m = r(167675),
        h = r(737013),
        f = r(607783),
        Z = r(299206),
        v = r(819403),
        x = r(777658),
        p = r(858488),
        g = r(185457),
        j = r(570870),
        M = r(389052),
        I = r(24311),
        C = r(915193),
        _ = r(332576),
        T = r(158508),
        w = r(710631),
        U = r(297047),
        N = r(88966),
        E = r(397616),
        G = r(558924),
        O = r(991307),
        b = r(37258),
        k = r(700994),
        A = r(332031),
        P = r(981631),
        S = r(388032);
      n.default = (0, d.Z)(
        (0, s.Z)(
          function (e) {
            var n;
            let {
                user: r,
                channel: s,
                context: d,
                showChatItems: u = !0,
                showMediaItems: P = !1,
                showChannelCallItems: y = !1,
                showModalItems: z = !0,
                onSelect: R,
                onHeightUpdate: D,
              } = e,
              L = (0, b.Z)({ userId: r.id, guildId: null }),
              W = (0, U.Z)(r, null, d),
              B = (0, G.Z)(r, s.id),
              q = (0, N.Z)(r.id, d),
              J = (0, I.Z)({ user: r, context: d }),
              X = (0, g.Z)({ user: r, channelId: s.id, context: d }),
              Y = (0, p.Z)({ user: r }),
              F = (0, k.Z)(r.id),
              H = (0, E.Z)(r.id, s.id),
              K = (0, O.Z)(r.id),
              Q = (0, f.B)({
                userId: r.id,
                channelId: s.id,
                guildId: s.getGuildId(),
                location: "GroupDMUserContextMenu",
              }),
              V = (0, _.Z)(r.id, s.id),
              $ = (0, w.Z)({ user: r }),
              ee = (0, l.Z)(null, r),
              en = (0, x.Z)(r),
              er = (0, M.Z)({ user: r, location: "GroupDMUserContextMenu" }),
              ei = (0, T.Z)({ user: r, location: "GroupDMUserContextMenu" }),
              ea = (0, Z.Z)({ id: r.id, label: S.intl.string(S.t["/AXYnJ"]) }),
              et = (0, A.Z)(r.id),
              es = (0, m.Z)(r.id),
              ed = (0, c.Z)(s.id),
              eo = (0, v.Z)(r),
              el = (0, h.Z)(r.id),
              eu = (0, j.Z)({
                commandType: o.yU.USER,
                commandTargetId: r.id,
                channel: s,
                guildId: void 0,
                onHeightUpdate: D,
              }),
              ec = (0, C.Z)(r, s),
              em = r.isNonUserBot(),
              eh = s.isManaged(),
              ef =
                null === (n = s.recipients) || void 0 === n
                  ? void 0
                  : n.includes(r.id);
            return (0, i.jsxs)(a.Menu, {
              navId: "user-context",
              onClose: t.Zy,
              "aria-label": S.intl.string(S.t.liqwPD),
              onSelect: R,
              children: [
                !em &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(a.MenuGroup, { children: eo }),
                      (0, i.jsxs)(a.MenuGroup, {
                        children: [
                          z && L,
                          u && W,
                          q,
                          J,
                          !eh && B,
                          z && X,
                          z && Y,
                          et,
                        ],
                      }),
                      P && (0, i.jsx)(a.MenuGroup, { children: F }),
                      ef &&
                        (0, i.jsxs)(a.MenuGroup, { children: [!eh && H, ec] }),
                      (0, i.jsx)(a.MenuGroup, { children: z && ee }),
                      (0, i.jsxs)(a.MenuGroup, {
                        children: [
                          P && K,
                          P && Q,
                          P && V,
                          eu,
                          z && $,
                          en,
                          z && ei,
                          z && er,
                          P && el,
                        ],
                      }),
                      y && (0, i.jsxs)(a.MenuGroup, { children: [ed, es] }),
                    ],
                  }),
                (0, i.jsx)(a.MenuGroup, { children: ea }),
              ],
            });
          },
          { object: P.qAy.CONTEXT_MENU },
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
      var i = r(200651);
      r(192379);
      var a = r(442837),
        t = r(692547),
        s = r(481060),
        d = r(493683),
        o = r(129861),
        l = r(700582),
        u = r(594174),
        c = r(388032),
        m = r(597539);
      function h(e) {
        let { color: n, className: r } = e;
        return (0, i.jsx)("svg", {
          className: r,
          height: "16",
          width: "80",
          viewBox: "0 0 80 16",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, i.jsxs)("g", {
            fill: "none",
            fillRule: "evenodd",
            opacity: ".6",
            children: [
              (0, i.jsx)("path", { d: "m0 0h80v16h-80z" }),
              (0, i.jsxs)("g", {
                stroke: n,
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: "2",
                children: [
                  (0, i.jsx)("path", { d: "m71 1h4v4.16" }),
                  (0, i.jsx)("path", {
                    d: "m2 1h4v4.16",
                    transform: "matrix(-1 0 0 1 8 0)",
                  }),
                  (0, i.jsx)("path", {
                    d: "m51 1h4m6 0h4m-24 0h4m-14 0h4m-14 0h4m-23 11v-2m9-9h4",
                  }),
                  (0, i.jsx)("path", {
                    d: "m72.13 10.474 2.869 3.12 2.631-3.12",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function f(e, n) {
        let r = (0, a.e7)([u.default], () => u.default.getCurrentUser());
        return null == r || n.ownerId !== r.id || e.id === r.id
          ? null
          : (0, i.jsx)(s.MenuItem, {
              id: "make-dm-owner",
              color: "danger",
              label: c.intl.string(c.t["6t3CyM"]),
              action: () => {
                var a;
                return (
                  (a = r),
                  void (0, s.openModal)((r) =>
                    (0, i.jsxs)(s.ConfirmModal, {
                      bodyClassName: m.confirmModal,
                      header: c.intl.string(c.t.WZoUsr),
                      confirmText: c.intl.string(c.t["cY+Ooa"]),
                      cancelText: c.intl.string(c.t["ETE/oK"]),
                      onConfirm: () => d.Z.setDMOwner(n.id, e.id),
                      ...r,
                      children: [
                        (0, i.jsx)(h, {
                          color: t.Z.unsafe_rawColors.PRIMARY_300.css,
                        }),
                        (0, i.jsxs)("div", {
                          className: m.fromToWrapper,
                          children: [
                            (0, i.jsx)("div", {
                              className: m.from,
                              children: (0, i.jsx)(l.Z, {
                                user: a,
                                size: s.AvatarSizes.SIZE_80,
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: m.to,
                              children: (0, i.jsx)(l.Z, {
                                user: e,
                                size: s.AvatarSizes.SIZE_80,
                              }),
                            }),
                          ],
                        }),
                        (0, i.jsx)(s.Text, {
                          variant: "text-md/normal",
                          children: c.intl.format(c.t.gsBb3N, {
                            usernameHook: (n, r) =>
                              (0, i.jsx)(
                                o.Z,
                                {
                                  usernameIcon: (0, i.jsx)(s.Avatar, {
                                    className: m.avatarIcon,
                                    src: e.getAvatarURL(void 0, 16),
                                    size: s.AvatarSizes.SIZE_16,
                                    "aria-hidden": !0,
                                  }),
                                  className: m.discordTag,
                                  usernameClass: m.username,
                                  discriminatorClass: m.discriminator,
                                  user: e,
                                },
                                r,
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
    88966: function (e, n, r) {
      r.d(n, {
        Z: function () {
          return c;
        },
      });
      var i = r(200651);
      r(192379);
      var a = r(442837),
        t = r(481060),
        s = r(493683),
        d = r(40851),
        o = r(314897),
        l = r(981631),
        u = r(388032);
      function c(e, n) {
        let r = (0, d.Aq)();
        return (0, a.e7)([o.default], () => o.default.getId() === e) ||
          n === l.IlC.POPOUT
          ? null
          : (0, i.jsx)(t.MenuItem, {
              id: "message-user",
              label: u.intl.string(u.t.OAJQlJ),
              action: () => {
                s.Z.openPrivateChannel(e),
                  r.dispatch(l.CkL.POPOUT_CLOSE),
                  (0, t.closeAllModals)();
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
      var i = r(200651);
      r(192379);
      var a = r(442837),
        t = r(481060),
        s = r(493683),
        d = r(592125),
        o = r(594174),
        l = r(388032);
      function u(e, n) {
        var r;
        let u = (0, a.e7)([o.default], () => o.default.getCurrentUser(), []),
          c = (0, a.e7)([d.Z], () => d.Z.getChannel(n), [n]);
        return null == c ||
          c.isOwner(e) ||
          null == u ||
          !c.isOwner(u.id) ||
          !(null === (r = c.recipients) || void 0 === r
            ? void 0
            : r.includes(e))
          ? null
          : (0, i.jsx)(t.MenuItem, {
              id: "remove",
              label: l.intl.string(l.t.n5zMIy),
              action: () => s.Z.removeRecipient(n, e),
              color: "danger",
            });
      }
    },
    597539: function (e, n, r) {
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
    705197: function (e, n, r) {
      e.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
  },
]);
//# sourceMappingURL=18464eb8b7db36459da4.js.map
