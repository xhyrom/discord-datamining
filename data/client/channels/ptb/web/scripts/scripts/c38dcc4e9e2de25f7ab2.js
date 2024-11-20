"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["59458"],
  {
    976192: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return N;
        },
      });
      var i = l(200651),
        t = l(192379),
        r = l(442837),
        a = l(481060),
        u = l(616780),
        d = l(40851),
        s = l(300284),
        o = l(484459),
        c = l(314897),
        Z = l(271383),
        M = l(430824),
        p = l(496675),
        h = l(594174),
        g = l(981631),
        C = l(388032),
        E = l(22675);
      function N(e) {
        let {
            guildId: n,
            userId: N,
            analyticsLocation: x,
            analyticsLocations: _,
            context: f,
            icon: U,
          } = e,
          G = M.Z.getGuild(n),
          P = c.default.getId(),
          b = (0, r.e7)([h.default], () => h.default.getUser(N)),
          j = (0, r.e7)([Z.ZP], () => Z.ZP.isGuestOrLurker(n, N), [n, N]);
        (0, r.e7)([p.Z], () => p.Z.getGuildVersion(n), [n]);
        let A = t.useMemo(() => ({ [n]: [N] }), [n, N]);
        (0, u.$)(A);
        let I = f === g.IlC.POPOUT,
          v = (0, s.Z)({ guild: G, analyticsLocation: x }),
          T = (0, d.Aq)();
        if (null == G || I) return null;
        let m =
            P === N &&
            (p.Z.can(g.Plq.CHANGE_NICKNAME, G) ||
              p.Z.can(g.Plq.MANAGE_NICKNAMES, G)),
          y = P === N,
          L = p.Z.canManageUser(g.Plq.MANAGE_NICKNAMES, N, G);
        if (!(m || L || y) || null == b || j) return null;
        let O = G.hasFeature(g.oNc.HUB)
            ? C.intl.string(C.t["+MWrWl"])
            : C.intl.string(C.t["PKQB/P"]),
          S = y ? O : C.intl.string(C.t.dilOFx);
        return (0, i.jsx)(a.MenuItem, {
          id: "change-nickname",
          label: (0, i.jsx)("div", {
            className: E.labelWrapper,
            children: (0, i.jsx)("span", { className: E.label, children: S }),
          }),
          icon: U,
          action: () => {
            y
              ? ((0, o.Z)(b.id, b.getAvatarURL(n, 80), { guildId: n }),
                v(),
                T.dispatch(g.CkL.POPOUT_CLOSE),
                (0, a.closeAllModals)())
              : (0, a.openModalLazy)(async () => {
                  let { default: e } = await l
                    .e("17712")
                    .then(l.bind(l, 620021));
                  return (l) =>
                    (0, i.jsx)(e, {
                      ...l,
                      guildId: n,
                      user: b,
                      analyticsSource: x,
                      analyticsLocations: _,
                    });
                });
          },
        });
      }
    },
    286694: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return p;
        },
      });
      var i = l(200651);
      l(192379);
      var t = l(442837),
        r = l(481060),
        a = l(592125),
        u = l(430824),
        d = l(496675),
        s = l(594174),
        o = l(471253),
        c = l(88751),
        Z = l(981631),
        M = l(388032);
      function p(e, n, l) {
        var p;
        let h = a.Z.getChannel(l),
          g = (0, t.e7)([u.Z], () => u.Z.getGuild(n), [n]),
          C = (0, t.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, l), [
            l,
            e.id,
          ]),
          E =
            (null === (p = s.default.getCurrentUser()) || void 0 === p
              ? void 0
              : p.id) === e.id,
          N = (0, t.e7)(
            [d.Z],
            () =>
              null != l &&
              d.Z.canWithPartialContext(Z.Plq.MUTE_MEMBERS, { channelId: l }),
            [l],
          );
        return null != h && null != g && (N || E) && C.speaker
          ? (0, i.jsx)(r.MenuItem, {
              id: "audience",
              label: E
                ? M.intl.string(M.t["6C6PJy"])
                : M.intl.string(M.t.VK3vQ0),
              action: () => {
                E ? (0, o.yi)(h) : (0, o.hz)(e, h);
              },
            })
          : null;
      }
    },
    757387: function (e, n, l) {
      l.r(n);
      var i = l(200651);
      l(192379);
      var t = l(442837),
        r = l(481060),
        a = l(239091),
        u = l(883385),
        d = l(108843),
        s = l(911969),
        o = l(947440),
        c = l(100527),
        Z = l(441061),
        M = l(167675),
        p = l(737013),
        h = l(607783),
        g = l(299206),
        C = l(976192),
        E = l(819403),
        N = l(286694),
        x = l(592125),
        _ = l(777658),
        f = l(858488),
        U = l(185457),
        G = l(933409),
        P = l(570870),
        b = l(389052),
        j = l(24311),
        A = l(332576),
        I = l(158508),
        v = l(710631),
        T = l(297047),
        m = l(88966),
        y = l(712301),
        L = l(991307),
        O = l(37258),
        S = l(931617),
        k = l(700994),
        q = l(332031),
        w = l(981631),
        R = l(388032);
      n.default = (0, d.Z)(
        (0, u.Z)(
          function (e) {
            let {
                user: n,
                guildId: l,
                channel: u,
                showMediaItems: d = !1,
                showChatItems: c = !0,
                showChannelCallItems: W = !1,
                showModalItems: B = !0,
                showStageChannelItems: D = !1,
                context: H,
                onSelect: K,
                onHeightUpdate: X,
                viewingChannelId: F,
              } = e,
              z = u.id,
              J = {
                page: w.ZY5.GUILD_CHANNEL,
                section: w.jXE.CHAT_USERNAME,
                object: w.qAy.CONTEXT_MENU_ITEM,
              },
              Q = (0, O.Z)({ userId: n.id, guildId: l, channelId: z }),
              V = (0, T.Z)(n, l, H),
              Y = (0, m.Z)(n.id, H),
              $ = (0, q.Z)(n.id),
              ee = (0, j.Z)({ user: n, context: H }),
              en = (0, U.Z)({ user: n, guildId: l, channelId: z, context: H }),
              el = (0, f.Z)({ user: n }),
              ei = (0, k.Z)(n.id),
              et = (0, L.Z)(n.id),
              er = (0, h.B)({
                userId: n.id,
                channelId: z,
                guildId: u.getGuildId(),
                location: "GuildChannelUserContextMenu",
              }),
              ea = (0, C.Z)({
                guildId: l,
                userId: n.id,
                analyticsLocation: J,
                context: H,
              }),
              eu = (0, v.Z)({ user: n, guildId: l }),
              ed = (0, o.Z)(null, n),
              es = (0, _.Z)(n),
              eo = (0, b.Z)({ user: n, guildId: l, channelId: z }),
              ec = (0, I.Z)({ user: n, guildId: l, channelId: z }),
              eZ = (0, G.Z)(n, l, z),
              eM = (0, S.Z)(n.id, l),
              ep = (0, y.Z)(n, l),
              eh = (0, g.Z)({ id: n.id, label: R.intl.string(R.t["/AXYnJ"]) }),
              eg = (0, A.Z)(n.id, z),
              eC = (0, M.Z)(n.id),
              eE = (0, Z.Z)(z),
              eN = (0, E.Z)(n),
              ex = (0, N.Z)(n, l, z),
              e_ = (0, t.e7)([x.Z], () =>
                null != F ? x.Z.getChannel(F) : null,
              ),
              ef = (0, P.Z)({
                commandType: s.yU.USER,
                commandTargetId: n.id,
                channel: null != e_ ? e_ : u,
                guildId: l,
                onHeightUpdate: X,
                context: H,
              }),
              eU = (0, p.Z)(n.id),
              eG = n.isNonUserBot();
            return (0, i.jsxs)(r.Menu, {
              navId: "user-context",
              onClose: a.Zy,
              "aria-label": R.intl.string(R.t.liqwPD),
              onSelect: K,
              children: [
                !eG &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsxs)(r.MenuGroup, { children: [eN, D && ex] }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [B && Q, c && V, Y, ee, B && en, B && el, $],
                      }),
                      d && (0, i.jsx)(r.MenuGroup, { children: ei }),
                      (0, i.jsx)(r.MenuGroup, { children: B && ed }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [
                          d && et,
                          d && er,
                          d && eg,
                          B && ea,
                          ef,
                          B && eu,
                          es,
                          B && ec,
                          B && eo,
                          W && eU,
                        ],
                      }),
                      (0, i.jsx)(r.MenuGroup, { children: eZ }),
                      (0, i.jsxs)(r.MenuGroup, { children: [eM, ep] }),
                      W && (0, i.jsxs)(r.MenuGroup, { children: [eE, eC] }),
                    ],
                  }),
                (0, i.jsx)(r.MenuGroup, { children: eh }),
              ],
            });
          },
          { object: w.qAy.CONTEXT_MENU },
        ),
        [c.Z.CONTEXT_MENU, c.Z.GUILD_CHANNEL_USER_MENU],
      );
    },
    22675: function (e, n, l) {
      e.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    407475: function (e, n, l) {
      e.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
    361916: function (e, n, l) {
      e.exports = { roleRow: "roleRow_b4ace3", roleDot: "roleDot_b4ace3" };
    },
  },
]);
//# sourceMappingURL=c38dcc4e9e2de25f7ab2.js.map
