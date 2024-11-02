"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["91864"],
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
        d = l(58540),
        u = l(40851),
        s = l(300284),
        c = l(484459),
        o = l(314897),
        Z = l(271383),
        M = l(430824),
        h = l(496675),
        p = l(594174),
        g = l(981631),
        C = l(388032),
        E = l(745974);
      function N(e) {
        let {
            guildId: n,
            userId: N,
            analyticsLocation: x,
            analyticsLocations: _,
            context: f,
            icon: I,
          } = e,
          U = M.Z.getGuild(n),
          G = o.default.getId(),
          P = (0, r.e7)([p.default], () => p.default.getUser(N)),
          b = (0, r.e7)([Z.ZP], () => Z.ZP.isGuestOrLurker(n, N), [n, N]);
        (0, r.e7)([h.Z], () => h.Z.getGuildVersion(n), [n]);
        let j = t.useMemo(() => ({ [n]: [N] }), [n, N]);
        (0, d.$)(j);
        let A = f === g.IlC.POPOUT,
          v = (0, s.Z)({ guild: U, analyticsLocation: x }),
          T = (0, u.Aq)();
        if (null == U || A) return null;
        let m =
            G === N &&
            (h.Z.can(g.Plq.CHANGE_NICKNAME, U) ||
              h.Z.can(g.Plq.MANAGE_NICKNAMES, U)),
          y = G === N,
          L = h.Z.canManageUser(g.Plq.MANAGE_NICKNAMES, N, U);
        if (!(m || L || y) || null == P || b) return null;
        let O = U.hasFeature(g.oNc.HUB)
            ? C.intl.string(C.t["+MWrWl"])
            : C.intl.string(C.t["PKQB/P"]),
          S = y ? O : C.intl.string(C.t.dilOFx);
        return (0, i.jsx)(a.MenuItem, {
          id: "change-nickname",
          label: (0, i.jsx)("div", {
            className: E.labelWrapper,
            children: (0, i.jsx)("span", { className: E.label, children: S }),
          }),
          icon: I,
          action: () => {
            y
              ? ((0, c.Z)(P.id, P.getAvatarURL(n, 80), { guildId: n }),
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
                      user: P,
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
          return h;
        },
      });
      var i = l(200651);
      l(192379);
      var t = l(442837),
        r = l(481060),
        a = l(592125),
        d = l(430824),
        u = l(496675),
        s = l(594174),
        c = l(471253),
        o = l(88751),
        Z = l(981631),
        M = l(388032);
      function h(e, n, l) {
        var h;
        let p = a.Z.getChannel(l),
          g = (0, t.e7)([d.Z], () => d.Z.getGuild(n), [n]),
          C = (0, t.e7)([o.ZP], () => o.ZP.getPermissionsForUser(e.id, l), [
            l,
            e.id,
          ]),
          E =
            (null === (h = s.default.getCurrentUser()) || void 0 === h
              ? void 0
              : h.id) === e.id,
          N = (0, t.e7)(
            [u.Z],
            () =>
              null != l &&
              u.Z.canWithPartialContext(Z.Plq.MUTE_MEMBERS, { channelId: l }),
            [l],
          );
        return null != p && null != g && (N || E) && C.speaker
          ? (0, i.jsx)(r.MenuItem, {
              id: "audience",
              label: E
                ? M.intl.string(M.t["6C6PJy"])
                : M.intl.string(M.t.VK3vQ0),
              action: () => {
                E ? (0, c.yi)(p) : (0, c.hz)(e, p);
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
        d = l(883385),
        u = l(108843),
        s = l(911969),
        c = l(947440),
        o = l(100527),
        Z = l(441061),
        M = l(167675),
        h = l(737013),
        p = l(607783),
        g = l(299206),
        C = l(976192),
        E = l(819403),
        N = l(286694),
        x = l(592125),
        _ = l(777658),
        f = l(858488),
        I = l(185457),
        U = l(933409),
        G = l(570870),
        P = l(389052),
        b = l(24311),
        j = l(332576),
        A = l(710631),
        v = l(297047),
        T = l(88966),
        m = l(712301),
        y = l(991307),
        L = l(725119),
        O = l(931617),
        S = l(700994),
        k = l(332031),
        q = l(981631),
        w = l(388032);
      n.default = (0, u.Z)(
        (0, d.Z)(
          function (e) {
            let {
                user: n,
                guildId: l,
                channel: d,
                showMediaItems: u = !1,
                showChatItems: o = !0,
                showChannelCallItems: R = !1,
                showModalItems: W = !0,
                showStageChannelItems: B = !1,
                context: D,
                onSelect: H,
                onHeightUpdate: K,
                viewingChannelId: X,
              } = e,
              F = {
                page: q.ZY5.GUILD_CHANNEL,
                section: q.jXE.CHAT_USERNAME,
                object: q.qAy.CONTEXT_MENU_ITEM,
              },
              z = (0, L.Z)({ userId: n.id, guildId: l, channelId: d.id }),
              J = (0, v.Z)(n, l, D),
              Q = (0, T.Z)(n.id, D),
              V = (0, k.Z)(n.id),
              Y = (0, b.Z)({ user: n, context: D }),
              $ = (0, I.Z)({
                user: n,
                guildId: l,
                channelId: d.id,
                context: D,
              }),
              ee = (0, f.Z)({ user: n }),
              en = (0, S.Z)(n.id),
              el = (0, y.Z)(n.id),
              ei = (0, p.B)({
                userId: n.id,
                channelId: d.id,
                guildId: d.getGuildId(),
                location: "GuildChannelUserContextMenu",
              }),
              et = (0, C.Z)({
                guildId: l,
                userId: n.id,
                analyticsLocation: F,
                context: D,
              }),
              er = (0, A.Z)({ user: n, guildId: l }),
              ea = (0, c.Z)(null, n),
              ed = (0, _.Z)(n),
              eu = (0, P.Z)({ user: n }),
              es = (0, U.Z)(n, l, d.id),
              ec = (0, O.Z)(n.id, l),
              eo = (0, m.Z)(n, l),
              eZ = (0, g.Z)({ id: n.id, label: w.intl.string(w.t["/AXYnJ"]) }),
              eM = (0, j.Z)(n.id, d.id),
              eh = (0, M.Z)(n.id),
              ep = (0, Z.Z)(d.id),
              eg = (0, E.Z)(n),
              eC = (0, N.Z)(n, l, d.id),
              eE = (0, t.e7)([x.Z], () =>
                null != X ? x.Z.getChannel(X) : null,
              ),
              eN = (0, G.Z)({
                commandType: s.yU.USER,
                commandTargetId: n.id,
                channel: null != eE ? eE : d,
                guildId: l,
                onHeightUpdate: K,
                context: D,
              }),
              ex = (0, h.Z)(n.id),
              e_ = n.isNonUserBot();
            return (0, i.jsxs)(r.Menu, {
              navId: "user-context",
              onClose: a.Zy,
              "aria-label": w.intl.string(w.t.liqwPD),
              onSelect: H,
              children: [
                !e_ &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsxs)(r.MenuGroup, { children: [eg, B && eC] }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [W && z, o && J, Q, Y, W && $, W && ee, V],
                      }),
                      u && (0, i.jsx)(r.MenuGroup, { children: en }),
                      (0, i.jsx)(r.MenuGroup, { children: W && ea }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [
                          u && el,
                          u && ei,
                          u && eM,
                          W && et,
                          eN,
                          W && er,
                          ed,
                          W && eu,
                          R && ex,
                        ],
                      }),
                      (0, i.jsx)(r.MenuGroup, { children: es }),
                      (0, i.jsxs)(r.MenuGroup, { children: [ec, eo] }),
                      R && (0, i.jsxs)(r.MenuGroup, { children: [ep, eh] }),
                    ],
                  }),
                (0, i.jsx)(r.MenuGroup, { children: eZ }),
              ],
            });
          },
          { object: q.qAy.CONTEXT_MENU },
        ),
        [o.Z.CONTEXT_MENU, o.Z.GUILD_CHANNEL_USER_MENU],
      );
    },
    745974: function (e, n, l) {
      e.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    201683: function (e, n, l) {
      e.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
    587525: function (e, n, l) {
      e.exports = { roleRow: "roleRow_b4ace3", roleDot: "roleDot_b4ace3" };
    },
  },
]);
//# sourceMappingURL=9543a2dfd6fc2d9e4434.js.map
