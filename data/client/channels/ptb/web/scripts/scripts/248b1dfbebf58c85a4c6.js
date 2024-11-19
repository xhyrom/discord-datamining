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
        d = l(616780),
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
        A = l(158508),
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
      n.default = (0, u.Z)(
        (0, d.Z)(
          function (e) {
            let {
                user: n,
                guildId: l,
                channel: d,
                showMediaItems: u = !1,
                showChatItems: o = !0,
                showChannelCallItems: W = !1,
                showModalItems: B = !0,
                showStageChannelItems: D = !1,
                context: H,
                onSelect: K,
                onHeightUpdate: X,
                viewingChannelId: F,
              } = e,
              z = {
                page: w.ZY5.GUILD_CHANNEL,
                section: w.jXE.CHAT_USERNAME,
                object: w.qAy.CONTEXT_MENU_ITEM,
              },
              J = (0, O.Z)({ userId: n.id, guildId: l, channelId: d.id }),
              Q = (0, T.Z)(n, l, H),
              V = (0, m.Z)(n.id, H),
              Y = (0, q.Z)(n.id),
              $ = (0, b.Z)({ user: n, context: H }),
              ee = (0, I.Z)({
                user: n,
                guildId: l,
                channelId: d.id,
                context: H,
              }),
              en = (0, f.Z)({ user: n }),
              el = (0, k.Z)(n.id),
              ei = (0, L.Z)(n.id),
              et = (0, p.B)({
                userId: n.id,
                channelId: d.id,
                guildId: d.getGuildId(),
                location: "GuildChannelUserContextMenu",
              }),
              er = (0, C.Z)({
                guildId: l,
                userId: n.id,
                analyticsLocation: z,
                context: H,
              }),
              ea = (0, v.Z)({ user: n, guildId: l }),
              ed = (0, c.Z)(null, n),
              eu = (0, _.Z)(n),
              es = (0, P.Z)({ user: n }),
              ec = (0, A.Z)({ user: n }),
              eo = (0, U.Z)(n, l, d.id),
              eZ = (0, S.Z)(n.id, l),
              eM = (0, y.Z)(n, l),
              eh = (0, g.Z)({ id: n.id, label: R.intl.string(R.t["/AXYnJ"]) }),
              ep = (0, j.Z)(n.id, d.id),
              eg = (0, M.Z)(n.id),
              eC = (0, Z.Z)(d.id),
              eE = (0, E.Z)(n),
              eN = (0, N.Z)(n, l, d.id),
              ex = (0, t.e7)([x.Z], () =>
                null != F ? x.Z.getChannel(F) : null,
              ),
              e_ = (0, G.Z)({
                commandType: s.yU.USER,
                commandTargetId: n.id,
                channel: null != ex ? ex : d,
                guildId: l,
                onHeightUpdate: X,
                context: H,
              }),
              ef = (0, h.Z)(n.id),
              eI = n.isNonUserBot();
            return (0, i.jsxs)(r.Menu, {
              navId: "user-context",
              onClose: a.Zy,
              "aria-label": R.intl.string(R.t.liqwPD),
              onSelect: K,
              children: [
                !eI &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsxs)(r.MenuGroup, { children: [eE, D && eN] }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [B && J, o && Q, V, $, B && ee, B && en, Y],
                      }),
                      u && (0, i.jsx)(r.MenuGroup, { children: el }),
                      (0, i.jsx)(r.MenuGroup, { children: B && ed }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [
                          u && ei,
                          u && et,
                          u && ep,
                          B && er,
                          e_,
                          B && ea,
                          eu,
                          B && ec,
                          B && es,
                          W && ef,
                        ],
                      }),
                      (0, i.jsx)(r.MenuGroup, { children: eo }),
                      (0, i.jsxs)(r.MenuGroup, { children: [eZ, eM] }),
                      W && (0, i.jsxs)(r.MenuGroup, { children: [eC, eg] }),
                    ],
                  }),
                (0, i.jsx)(r.MenuGroup, { children: eh }),
              ],
            });
          },
          { object: w.qAy.CONTEXT_MENU },
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
//# sourceMappingURL=248b1dfbebf58c85a4c6.js.map
