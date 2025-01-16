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
        u = l(481060),
        a = l(616780),
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
        let A = t.useMemo(() => ({ [n]: [E] }), [n, E]);
        (0, a.$)(A);
        let I = U === C.IlC.POPOUT,
          v = (0, s.Z)({ guild: _, analyticsLocation: N }),
          T = (0, d.Aq)();
        if (null == _ || I) return null;
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
        return (0, i.jsx)(u.MenuItem, {
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
                (0, u.closeAllModals)())
              : (0, u.openModalLazy)(async () => {
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
        u = l(592125),
        a = l(430824),
        d = l(496675),
        s = l(594174),
        o = l(471253),
        c = l(88751),
        Z = l(981631),
        M = l(388032);
      function h(e, n, l) {
        var h;
        let p = u.Z.getChannel(l),
          C = (0, t.e7)([a.Z], () => a.Z.getGuild(n), [n]),
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
        u = l(239091),
        a = l(883385),
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
        G = l(777658),
        U = l(858488),
        f = l(185457),
        _ = l(933409),
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
        w = l(931617),
        S = l(700994),
        k = l(332031),
        q = l(981631),
        R = l(388032);
      n.default = (0, d.Z)(
        (0, a.Z)(
          function (e) {
            let {
                user: n,
                guildId: l,
                channel: a,
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
              z = a.id,
              J = {
                page: q.ZY5.GUILD_CHANNEL,
                section: q.jXE.CHAT_USERNAME,
                object: q.qAy.CONTEXT_MENU_ITEM,
              },
              Q = (0, O.Z)({
                userId: n.id,
                guildId: l,
                channelId: z,
                showGuildProfile: !0,
              }),
              V = (0, T.Z)(n, l, H),
              Y = (0, m.Z)(n.id, H),
              $ = (0, k.Z)(n.id),
              ee = (0, j.Z)({ user: n, context: H }),
              en = (0, f.Z)({ user: n, guildId: l, channelId: z, context: H }),
              el = (0, U.Z)({ user: n }),
              ei = (0, S.Z)(n.id),
              et = (0, L.Z)(n.id),
              er = (0, p.B)({
                userId: n.id,
                channelId: z,
                guildId: a.getGuildId(),
                location: "GuildChannelUserContextMenu",
              }),
              eu = (0, g.Z)({
                guildId: l,
                userId: n.id,
                analyticsLocation: J,
                context: H,
              }),
              ea = (0, v.Z)({ user: n, guildId: l }),
              ed = (0, o.Z)(null, n),
              es = (0, G.Z)(n),
              eo = (0, b.Z)({
                user: n,
                guildId: l,
                channelId: z,
                location: "GuildChannelUserContextMenu",
              }),
              ec = (0, I.Z)({
                user: n,
                guildId: l,
                channelId: z,
                location: "GuildChannelUserContextMenu",
              }),
              eZ = (0, _.Z)(n, l, z),
              eM = (0, w.Z)(n.id, l),
              eh = (0, y.Z)(n, l),
              ep = (0, C.Z)({ id: n.id, label: R.intl.string(R.t["/AXYnJ"]) }),
              eC = (0, A.Z)(n.id, z),
              eg = (0, M.Z)(n.id),
              ex = (0, Z.Z)(z),
              eE = (0, x.Z)(n),
              eN = (0, E.Z)(n, l, z),
              eG = (0, t.e7)([N.Z], () =>
                null != F ? N.Z.getChannel(F) : null,
              ),
              eU = (0, P.Z)({
                commandType: s.yU.USER,
                commandTargetId: n.id,
                channel: null != eG ? eG : a,
                guildId: l,
                onHeightUpdate: X,
                context: H,
              }),
              ef = (0, h.Z)(n.id),
              e_ = n.isNonUserBot();
            return (0, i.jsxs)(r.Menu, {
              navId: "user-context",
              onClose: u.Zy,
              "aria-label": R.intl.string(R.t.liqwPD),
              onSelect: K,
              children: [
                !e_ &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsxs)(r.MenuGroup, { children: [eE, D && eN] }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [B && Q, c && V, Y, ee, B && en, B && el, $],
                      }),
                      d && (0, i.jsx)(r.MenuGroup, { children: ei }),
                      (0, i.jsx)(r.MenuGroup, { children: B && ed }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [
                          d && et,
                          d && er,
                          d && eC,
                          B && eu,
                          eU,
                          B && ea,
                          es,
                          B && ec,
                          B && eo,
                          W && ef,
                        ],
                      }),
                      (0, i.jsx)(r.MenuGroup, { children: eZ }),
                      (0, i.jsxs)(r.MenuGroup, { children: [eM, eh] }),
                      W && (0, i.jsxs)(r.MenuGroup, { children: [ex, eg] }),
                    ],
                  }),
                (0, i.jsx)(r.MenuGroup, { children: ep }),
              ],
            });
          },
          { object: q.qAy.CONTEXT_MENU },
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
//# sourceMappingURL=2164ceb848e92281c09c.js.map
