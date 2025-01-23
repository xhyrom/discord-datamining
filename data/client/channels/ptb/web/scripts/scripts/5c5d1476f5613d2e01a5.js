"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["64899"],
  {
    976192: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return E;
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
        h = l(496675),
        p = l(594174),
        C = l(981631),
        g = l(388032),
        x = l(497523);
      function E(e) {
        let {
            guildId: n,
            userId: E,
            analyticsLocation: N,
            analyticsLocations: G,
            context: U,
            icon: f,
          } = e,
          _ = M.Z.getGuild(n),
          P = c.default.getId(),
          b = (0, r.e7)([p.default], () => p.default.getUser(E)),
          j = (0, r.e7)([Z.ZP], () => Z.ZP.isGuestOrLurker(n, E), [n, E]);
        (0, r.e7)([h.Z], () => h.Z.getGuildVersion(n), [n]);
        let I = t.useMemo(() => ({ [n]: [E] }), [n, E]);
        (0, u.$)(I);
        let A = U === C.IlC.POPOUT,
          v = (0, s.Z)({ guild: _, analyticsLocation: N }),
          T = (0, d.Aq)();
        if (null == _ || A) return null;
        let m =
            P === E &&
            (h.Z.can(C.Plq.CHANGE_NICKNAME, _) ||
              h.Z.can(C.Plq.MANAGE_NICKNAMES, _)),
          y = P === E,
          L = h.Z.canManageUser(C.Plq.MANAGE_NICKNAMES, E, _);
        if (!(m || L || y) || null == b || j) return null;
        let O = _.hasFeature(C.oNc.HUB)
            ? g.intl.string(g.t["+MWrWl"])
            : g.intl.string(g.t["PKQB/P"]),
          w = y ? O : g.intl.string(g.t.dilOFx);
        return (0, i.jsx)(a.MenuItem, {
          id: "change-nickname",
          label: (0, i.jsx)("div", {
            className: x.labelWrapper,
            children: (0, i.jsx)("span", { className: x.label, children: w }),
          }),
          icon: f,
          action: () => {
            y
              ? ((0, o.Z)(b.id, b.getAvatarURL(n, 80), { guildId: n }),
                v(),
                T.dispatch(C.CkL.POPOUT_CLOSE),
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
                      analyticsSource: N,
                      analyticsLocations: G,
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
        u = l(430824),
        d = l(496675),
        s = l(594174),
        o = l(471253),
        c = l(88751),
        Z = l(981631),
        M = l(388032);
      function h(e, n, l) {
        var h;
        let p = a.Z.getChannel(l),
          C = (0, t.e7)([u.Z], () => u.Z.getGuild(n), [n]),
          g = (0, t.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, l), [
            l,
            e.id,
          ]),
          x =
            (null === (h = s.default.getCurrentUser()) || void 0 === h
              ? void 0
              : h.id) === e.id,
          E = (0, t.e7)(
            [d.Z],
            () =>
              null != l &&
              d.Z.canWithPartialContext(Z.Plq.MUTE_MEMBERS, { channelId: l }),
            [l],
          );
        return null != p && null != C && (E || x) && g.speaker
          ? (0, i.jsx)(r.MenuItem, {
              id: "audience",
              label: x
                ? M.intl.string(M.t["6C6PJy"])
                : M.intl.string(M.t.VK3vQ0),
              action: () => {
                x ? (0, o.yi)(p) : (0, o.hz)(e, p);
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
        h = l(737013),
        p = l(607783),
        C = l(299206),
        g = l(976192),
        x = l(819403),
        E = l(286694),
        N = l(592125),
        G = l(944486),
        U = l(777658),
        f = l(858488),
        _ = l(185457),
        P = l(933409),
        b = l(570870),
        j = l(389052),
        I = l(24311),
        A = l(332576),
        v = l(158508),
        T = l(710631),
        m = l(297047),
        y = l(88966),
        L = l(712301),
        O = l(558924),
        w = l(991307),
        S = l(37258),
        k = l(931617),
        q = l(700994),
        R = l(332031),
        W = l(981631),
        B = l(388032);
      n.default = (0, d.Z)(
        (0, u.Z)(
          function (e) {
            let {
                user: n,
                guildId: l,
                channel: u,
                showMediaItems: d = !1,
                showChatItems: c = !0,
                showChannelCallItems: D = !1,
                showModalItems: H = !0,
                showStageChannelItems: K = !1,
                context: X,
                onSelect: F,
                onHeightUpdate: V,
                viewingChannelId: z,
              } = e,
              J = u.id,
              Q = {
                page: W.ZY5.GUILD_CHANNEL,
                section: W.jXE.CHAT_USERNAME,
                object: W.qAy.CONTEXT_MENU_ITEM,
              },
              Y = (0, S.Z)({
                userId: n.id,
                guildId: l,
                channelId: J,
                showGuildProfile: !0,
              }),
              $ = (0, m.Z)(n, l, X),
              ee = (0, y.Z)(n.id, X),
              en = (0, R.Z)(n.id),
              el = (0, I.Z)({ user: n, context: X }),
              ei = (0, _.Z)({ user: n, guildId: l, channelId: J, context: X }),
              et = (0, f.Z)({ user: n }),
              er = (0, q.Z)(n.id),
              ea = (0, w.Z)(n.id),
              eu = (0, p.B)({
                userId: n.id,
                channelId: J,
                guildId: u.getGuildId(),
                location: "GuildChannelUserContextMenu",
              }),
              ed = (0, g.Z)({
                guildId: l,
                userId: n.id,
                analyticsLocation: Q,
                context: X,
              }),
              es = (0, T.Z)({ user: n, guildId: l }),
              eo = (0, o.Z)(null, n),
              ec = (0, U.Z)(n),
              eZ = (0, j.Z)({
                user: n,
                guildId: l,
                channelId: J,
                location: "GuildChannelUserContextMenu",
              }),
              eM = (0, v.Z)({
                user: n,
                guildId: l,
                channelId: J,
                location: "GuildChannelUserContextMenu",
              }),
              eh = (0, P.Z)(n, l, J),
              ep = (0, k.Z)(n.id, l),
              eC = (0, L.Z)(n, l),
              eg = (0, C.Z)({ id: n.id, label: B.intl.string(B.t["/AXYnJ"]) }),
              ex = (0, A.Z)(n.id, J),
              eE = (0, M.Z)(n.id),
              eN = (0, Z.Z)(J),
              eG = (0, x.Z)(n),
              eU = (0, E.Z)(n, l, J),
              ef = (0, t.e7)([N.Z], () =>
                null != z ? N.Z.getChannel(z) : null,
              ),
              e_ = (0, b.Z)({
                commandType: s.yU.USER,
                commandTargetId: n.id,
                channel: null != ef ? ef : u,
                guildId: l,
                onHeightUpdate: V,
                context: X,
              }),
              eP = (0, h.Z)(n.id),
              eb = (0, t.e7)([G.Z], () => G.Z.getVoiceChannelId()),
              ej = (0, O.Z)(n, eb),
              eI = n.isNonUserBot();
            return (0, i.jsxs)(r.Menu, {
              navId: "user-context",
              onClose: a.Zy,
              "aria-label": B.intl.string(B.t.liqwPD),
              onSelect: F,
              children: [
                !eI &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsxs)(r.MenuGroup, { children: [eG, K && eU] }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [
                          H && Y,
                          c && $,
                          ee,
                          el,
                          ej,
                          H && ei,
                          H && et,
                          en,
                        ],
                      }),
                      d && (0, i.jsx)(r.MenuGroup, { children: er }),
                      (0, i.jsx)(r.MenuGroup, { children: H && eo }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [
                          d && ea,
                          d && eu,
                          d && ex,
                          H && ed,
                          e_,
                          H && es,
                          ec,
                          H && eM,
                          H && eZ,
                          D && eP,
                        ],
                      }),
                      (0, i.jsx)(r.MenuGroup, { children: eh }),
                      (0, i.jsxs)(r.MenuGroup, { children: [ep, eC] }),
                      D && (0, i.jsxs)(r.MenuGroup, { children: [eN, eE] }),
                    ],
                  }),
                (0, i.jsx)(r.MenuGroup, { children: eg }),
              ],
            });
          },
          { object: W.qAy.CONTEXT_MENU },
        ),
        [c.Z.CONTEXT_MENU, c.Z.GUILD_CHANNEL_USER_MENU],
      );
    },
    497523: function (e, n, l) {
      e.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    705197: function (e, n, l) {
      e.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
    849324: function (e, n, l) {
      e.exports = { roleRow: "roleRow_b4ace3", roleDot: "roleDot_b4ace3" };
    },
  },
]);
//# sourceMappingURL=5c5d1476f5613d2e01a5.js.map
