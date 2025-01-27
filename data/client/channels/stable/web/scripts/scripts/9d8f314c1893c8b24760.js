"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["60677"],
  {
    354589: function (e, n, t) {
      t.r(n);
      var i = t(200651);
      t(192379);
      var r = t(481060),
        l = t(239091),
        s = t(883385),
        a = t(108843),
        d = t(911969),
        o = t(947440),
        u = t(100527),
        c = t(441061),
        m = t(167675),
        h = t(737013),
        Z = t(607783),
        x = t(299206),
        f = t(819403),
        g = t(777658),
        v = t(858488),
        p = t(44652),
        j = t(185457),
        M = t(570870),
        I = t(389052),
        C = t(24311),
        b = t(915193),
        N = t(332576),
        U = t(158508),
        G = t(710631),
        E = t(297047),
        T = t(88966),
        w = t(47091),
        k = t(397616),
        O = t(558924),
        S = t(991307),
        A = t(37258),
        _ = t(700994),
        z = t(332031),
        R = t(981631),
        L = t(388032);
      n.default = (0, a.Z)(
        (0, s.Z)(
          function (e) {
            var n;
            let {
                user: t,
                channel: s,
                context: a,
                showChatItems: u = !0,
                showMediaItems: R = !1,
                showChannelCallItems: P = !1,
                showModalItems: y = !0,
                onSelect: F,
                onHeightUpdate: X,
              } = e,
              D = (0, A.Z)({ userId: t.id, guildId: null }),
              q = (0, E.Z)(t, null, a),
              W = (0, O.Z)(t, s.id),
              B = (0, T.Z)(t.id, a),
              Y = (0, C.Z)({ user: t, context: a }),
              J = (0, j.Z)({ user: t, channelId: s.id, context: a }),
              K = (0, v.Z)({ user: t }),
              H = (0, _.Z)(t.id),
              Q = (0, k.Z)(t.id, s.id),
              V = (0, S.Z)(t.id),
              $ = (0, Z.B)({
                userId: t.id,
                channelId: s.id,
                guildId: s.getGuildId(),
                location: "GroupDMUserContextMenu",
              }),
              ee = (0, N.Z)(t.id, s.id),
              en = (0, G.Z)({ user: t }),
              et = (0, o.Z)(null, t),
              ei = (0, g.Z)(t),
              er = (0, p.Z)({ user: t }),
              el = (0, w.Z)({ user: t }),
              es = (0, I.Z)({ user: t, location: "GroupDMUserContextMenu" }),
              ea = (0, U.Z)({ user: t, location: "GroupDMUserContextMenu" }),
              ed = (0, x.Z)({ id: t.id, label: L.intl.string(L.t["/AXYnJ"]) }),
              eo = (0, z.Z)(t.id),
              eu = (0, m.Z)(t.id),
              ec = (0, c.Z)(s.id),
              em = (0, f.Z)(t),
              eh = (0, h.Z)(t.id),
              eZ = (0, M.Z)({
                commandType: d.yU.USER,
                commandTargetId: t.id,
                channel: s,
                guildId: void 0,
                onHeightUpdate: X,
              }),
              ex = (0, b.Z)(t, s),
              ef = t.isNonUserBot(),
              eg = s.isManaged(),
              ev =
                null === (n = s.recipients) || void 0 === n
                  ? void 0
                  : n.includes(t.id);
            return (0, i.jsxs)(r.Menu, {
              navId: "user-context",
              onClose: l.Zy,
              "aria-label": L.intl.string(L.t.liqwPD),
              onSelect: F,
              children: [
                !ef &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(r.MenuGroup, { children: em }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [
                          y && D,
                          u && q,
                          B,
                          Y,
                          !eg && W,
                          y && J,
                          y && K,
                          eo,
                        ],
                      }),
                      R && (0, i.jsx)(r.MenuGroup, { children: H }),
                      ev &&
                        (0, i.jsxs)(r.MenuGroup, { children: [!eg && Q, ex] }),
                      (0, i.jsx)(r.MenuGroup, { children: y && et }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [
                          R && V,
                          R && $,
                          R && ee,
                          eZ,
                          y && en,
                          ei,
                          er,
                          el,
                          y && ea,
                          y && es,
                          R && eh,
                        ],
                      }),
                      P && (0, i.jsxs)(r.MenuGroup, { children: [ec, eu] }),
                    ],
                  }),
                (0, i.jsx)(r.MenuGroup, { children: ed }),
              ],
            });
          },
          { object: R.qAy.CONTEXT_MENU },
        ),
        [u.Z.CONTEXT_MENU, u.Z.GROUP_DM_USER_MENU],
      );
    },
    44652: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(192379),
        r = t(442837),
        l = t(91896),
        s = t(298213),
        a = t(749302),
        d = t(981631),
        o = t(388032);
      function u(e) {
        let { user: n } = e,
          t = (0, r.Wu)([l.Z], () =>
            l.Z.getGameRelationshipsForUser(n.id, d.OGo.PENDING_INCOMING),
          ),
          u = i.useCallback(
            (e) => {
              s.Z.acceptFriendRequest({
                userId: n.id,
                applicationId: e.id,
                location: "Context Menu",
              });
            },
            [n.id],
          );
        return (0, a.Z)({
          user: n,
          gameRelationships: t,
          menuItemId: "add-game-friend",
          label: o.intl.string(o.t.X76oLC),
          onClick: u,
        });
      }
    },
    915193: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return Z;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(692547),
        s = t(481060),
        a = t(493683),
        d = t(129861),
        o = t(700582),
        u = t(594174),
        c = t(388032),
        m = t(597539);
      function h(e) {
        let { color: n, className: t } = e;
        return (0, i.jsx)("svg", {
          className: t,
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
      function Z(e, n) {
        let t = (0, r.e7)([u.default], () => u.default.getCurrentUser());
        return null == t || n.ownerId !== t.id || e.id === t.id
          ? null
          : (0, i.jsx)(s.MenuItem, {
              id: "make-dm-owner",
              color: "danger",
              label: c.intl.string(c.t["6t3CyM"]),
              action: () => {
                var r;
                return (
                  (r = t),
                  void (0, s.openModal)((t) =>
                    (0, i.jsxs)(s.ConfirmModal, {
                      bodyClassName: m.confirmModal,
                      header: c.intl.string(c.t.WZoUsr),
                      confirmText: c.intl.string(c.t["cY+Ooa"]),
                      cancelText: c.intl.string(c.t["ETE/oK"]),
                      onConfirm: () => a.Z.setDMOwner(n.id, e.id),
                      ...t,
                      children: [
                        (0, i.jsx)(h, {
                          color: l.Z.unsafe_rawColors.PRIMARY_300.css,
                        }),
                        (0, i.jsxs)("div", {
                          className: m.fromToWrapper,
                          children: [
                            (0, i.jsx)("div", {
                              className: m.from,
                              children: (0, i.jsx)(o.Z, {
                                user: r,
                                size: s.AvatarSizes.SIZE_80,
                              }),
                            }),
                            (0, i.jsx)("div", {
                              className: m.to,
                              children: (0, i.jsx)(o.Z, {
                                user: e,
                                size: s.AvatarSizes.SIZE_80,
                              }),
                            }),
                          ],
                        }),
                        (0, i.jsx)(s.Text, {
                          variant: "text-md/normal",
                          children: c.intl.format(c.t.gsBb3N, {
                            usernameHook: (n, t) =>
                              (0, i.jsx)(
                                d.Z,
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
                                t,
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
    749302: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return Z;
        },
      }),
        t(47120),
        t(653041);
      var i = t(200651),
        r = t(192379),
        l = t(442837),
        s = t(481060),
        a = t(835473),
        d = t(925329),
        o = t(372460),
        u = t(594174),
        c = t(960897);
      let m = [];
      function h(e) {
        let { application: n } = e;
        return (0, i.jsxs)("div", {
          className: c.subtext,
          children: [
            (0, i.jsx)(d.Z, { game: n, size: d.Z.Sizes.XXSMALL }),
            (0, i.jsx)("span", { children: n.name }),
          ],
        });
      }
      function Z(e) {
        let {
            menuItemId: n,
            user: t,
            label: c,
            gameRelationships: Z,
            onClick: x,
          } = e,
          { id: f, bot: g } = t,
          v = (0, l.e7)([u.default], () => {
            var e;
            return (
              (null === (e = u.default.getCurrentUser()) || void 0 === e
                ? void 0
                : e.id) === f
            );
          }),
          p = (0, o.wn)({ location: "useAcceptGameFriendRequest" }),
          j = v || g || !p,
          M = j ? m : Z,
          [I, C] = r.useState(!1),
          b = r.useCallback(() => C(!0), []),
          N = r.useMemo(
            () =>
              M.map((e) => {
                let { applicationId: n } = e;
                return n;
              }),
            [M],
          ),
          U = (function (e, n) {
            let t = (0, a.Z)(e, n);
            return r.useMemo(() => {
              let e = new Map();
              return (
                t.forEach((n) => {
                  null != n && e.set(n.id, n);
                }),
                e
              );
            }, [t]);
          })(N, I || 1 === M.length);
        if (j || 0 === M.length) return null;
        if (1 === M.length) {
          let { applicationId: e } = M[0],
            t = U.get(e);
          return null == t
            ? null
            : (0, i.jsx)(s.MenuItem, {
                id: n,
                label: c,
                subtext: (0, i.jsx)(h, { application: t }),
                onFocus: b,
                action: () => x(t),
              });
        }
        let G = [];
        return (M.forEach((e) => {
          let { applicationId: n } = e,
            t = U.get(n);
          null != t &&
            G.push(
              (0, i.jsx)(
                s.MenuItem,
                {
                  id: n,
                  label: t.name,
                  icon: (0, i.jsx)(d.Z, { game: t, size: d.Z.Sizes.XXSMALL }),
                  action: () => x(t),
                },
                n,
              ),
            );
        }),
        0 === G.length)
          ? null
          : (0, i.jsx)(s.MenuItem, {
              id: n,
              label: c,
              onFocus: b,
              children: G,
            });
      }
    },
    88966: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        s = t(493683),
        a = t(40851),
        d = t(314897),
        o = t(981631),
        u = t(388032);
      function c(e, n) {
        let t = (0, a.Aq)();
        return (0, r.e7)([d.default], () => d.default.getId() === e) ||
          n === o.IlC.POPOUT
          ? null
          : (0, i.jsx)(l.MenuItem, {
              id: "message-user",
              label: u.intl.string(u.t.OAJQlJ),
              action: () => {
                s.Z.openPrivateChannel(e),
                  t.dispatch(o.CkL.POPOUT_CLOSE),
                  (0, l.closeAllModals)();
              },
            });
      }
    },
    47091: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return m;
        },
      });
      var i = t(200651),
        r = t(192379),
        l = t(442837),
        s = t(481060),
        a = t(91896),
        d = t(298213),
        o = t(51144),
        u = t(749302),
        c = t(388032);
      function m(e) {
        let { user: n } = e,
          m = (0, l.Wu)([a.Z], () => a.Z.getGameFriendsForUser(n.id)),
          h = o.ZP.useName(n),
          Z = r.useCallback(
            (e) => {
              let { id: r, name: l } = e;
              (0, s.openModalLazy)(async () => {
                let { ConfirmModal: e } = await Promise.resolve().then(
                  t.bind(t, 481060),
                );
                return (t) =>
                  (0, i.jsx)(e, {
                    header: c.intl.formatToPlainString(c.t["GOFk9/"], {
                      name: h,
                    }),
                    confirmText: c.intl.string(c.t["cY+Ooa"]),
                    cancelText: c.intl.string(c.t["ETE/oK"]),
                    onConfirm: () =>
                      d.Z.removeFriend({
                        userId: n.id,
                        applicationId: r,
                        location: "Context Menu",
                      }),
                    ...t,
                    children: (0, i.jsx)(s.Text, {
                      variant: "text-md/normal",
                      children: c.intl.format(c.t.dsU5bm, {
                        name: h,
                        gameName: l,
                      }),
                    }),
                  });
              });
            },
            [h, n],
          );
        return (0, u.Z)({
          user: n,
          gameRelationships: m,
          menuItemId: "remove-game-friend",
          label: c.intl.string(c.t["RLcE6+"]),
          onClick: Z,
        });
      }
    },
    397616: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var i = t(200651);
      t(192379);
      var r = t(442837),
        l = t(481060),
        s = t(493683),
        a = t(592125),
        d = t(594174),
        o = t(388032);
      function u(e, n) {
        var t;
        let u = (0, r.e7)([d.default], () => d.default.getCurrentUser(), []),
          c = (0, r.e7)([a.Z], () => a.Z.getChannel(n), [n]);
        return null == c ||
          c.isOwner(e) ||
          null == u ||
          !c.isOwner(u.id) ||
          !(null === (t = c.recipients) || void 0 === t
            ? void 0
            : t.includes(e))
          ? null
          : (0, i.jsx)(l.MenuItem, {
              id: "remove",
              label: o.intl.string(o.t.n5zMIy),
              action: () => s.Z.removeRecipient(n, e),
              color: "danger",
            });
      }
    },
  },
]);
//# sourceMappingURL=9d8f314c1893c8b24760.js.map
