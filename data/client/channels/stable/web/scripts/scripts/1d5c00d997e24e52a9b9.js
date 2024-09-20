"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["91864"],
  {
    976192: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return p;
        },
      });
      var i = l(735250),
        a = l(470079),
        r = l(442837),
        s = l(481060),
        d = l(58540),
        u = l(40851),
        t = l(300284),
        c = l(484459),
        o = l(314897),
        Z = l(271383),
        E = l(430824),
        M = l(496675),
        _ = l(594174),
        N = l(981631),
        C = l(689938),
        h = l(745974);
      function p(e) {
        let {
            guildId: n,
            userId: p,
            analyticsLocation: I,
            analyticsLocations: U,
            context: A,
            icon: g,
          } = e,
          G = E.Z.getGuild(n),
          x = o.default.getId(),
          T = (0, r.e7)([_.default], () => _.default.getUser(p)),
          f = (0, r.e7)([Z.ZP], () => Z.ZP.isGuestOrLurker(n, p), [n, p]);
        (0, r.e7)([M.Z], () => M.Z.getGuildVersion(n), [n]);
        let b = a.useMemo(() => ({ [n]: [p] }), [n, p]);
        (0, d.$)(b);
        let j = A === N.IlC.POPOUT,
          P = (0, t.Z)({ guild: G, analyticsLocation: I }),
          O = (0, u.Aq)();
        if (null == G || j) return null;
        let S =
            x === p &&
            (M.Z.can(N.Plq.CHANGE_NICKNAME, G) ||
              M.Z.can(N.Plq.MANAGE_NICKNAMES, G)),
          L = x === p,
          v = M.Z.canManageUser(N.Plq.MANAGE_NICKNAMES, p, G);
        if (!(S || v || L) || null == T || f) return null;
        let R = G.hasFeature(N.oNc.HUB)
            ? C.Z.Messages.HUB_EDIT_PROFILE
            : C.Z.Messages.CHANGE_IDENTITY,
          m = L ? R : C.Z.Messages.CHANGE_NICKNAME;
        return (0, i.jsx)(s.MenuItem, {
          id: "change-nickname",
          label: (0, i.jsx)("div", {
            className: h.labelWrapper,
            children: (0, i.jsx)("span", { className: h.label, children: m }),
          }),
          icon: g,
          action: () => {
            L
              ? ((0, c.Z)(T.id, T.getAvatarURL(n, 80), { guildId: n }),
                P(),
                O.dispatch(N.CkL.POPOUT_CLOSE),
                (0, s.closeAllModals)())
              : (0, s.openModalLazy)(async () => {
                  let { default: e } = await l
                    .e("17712")
                    .then(l.bind(l, 620021));
                  return (l) =>
                    (0, i.jsx)(e, {
                      ...l,
                      guildId: n,
                      user: T,
                      analyticsSource: I,
                      analyticsLocations: U,
                    });
                });
          },
        });
      }
    },
    286694: function (e, n, l) {
      l.d(n, {
        Z: function () {
          return M;
        },
      });
      var i = l(735250);
      l(470079);
      var a = l(442837),
        r = l(481060),
        s = l(592125),
        d = l(430824),
        u = l(496675),
        t = l(594174),
        c = l(471253),
        o = l(88751),
        Z = l(981631),
        E = l(689938);
      function M(e, n, l) {
        var M;
        let _ = s.Z.getChannel(l),
          N = (0, a.e7)([d.Z], () => d.Z.getGuild(n), [n]),
          C = (0, a.e7)([o.ZP], () => o.ZP.getPermissionsForUser(e.id, l), [
            l,
            e.id,
          ]),
          h =
            (null === (M = t.default.getCurrentUser()) || void 0 === M
              ? void 0
              : M.id) === e.id,
          p = (0, a.e7)(
            [u.Z],
            () =>
              null != l &&
              u.Z.canWithPartialContext(Z.Plq.MUTE_MEMBERS, { channelId: l }),
            [l],
          );
        return null != _ && null != N && (p || h) && C.speaker
          ? (0, i.jsx)(r.MenuItem, {
              id: "audience",
              label: h
                ? E.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE
                : E.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
              action: () => {
                h ? (0, c.yi)(_) : (0, c.hz)(e, _);
              },
            })
          : null;
      }
    },
    757387: function (e, n, l) {
      l.r(n);
      var i = l(735250);
      l(470079);
      var a = l(442837),
        r = l(481060),
        s = l(239091),
        d = l(883385),
        u = l(108843),
        t = l(911969),
        c = l(947440),
        o = l(100527),
        Z = l(441061),
        E = l(167675),
        M = l(737013),
        _ = l(607783),
        N = l(299206),
        C = l(976192),
        h = l(819403),
        p = l(286694),
        I = l(592125),
        U = l(777658),
        A = l(858488),
        g = l(185457),
        G = l(933409),
        x = l(570870),
        T = l(389052),
        f = l(24311),
        b = l(332576),
        j = l(710631),
        P = l(297047),
        O = l(88966),
        S = l(712301),
        L = l(991307),
        v = l(725119),
        R = l(931617),
        m = l(700994),
        H = l(332031),
        y = l(981631),
        D = l(689938);
      n.default = (0, u.Z)(
        (0, d.Z)(
          function (e) {
            let {
                user: n,
                guildId: l,
                channel: d,
                showMediaItems: u = !1,
                showChatItems: o = !0,
                showChannelCallItems: k = !1,
                showModalItems: q = !0,
                showStageChannelItems: w = !1,
                context: B,
                onSelect: F,
                onHeightUpdate: K,
                viewingChannelId: W,
              } = e,
              X = {
                page: y.ZY5.GUILD_CHANNEL,
                section: y.jXE.CHAT_USERNAME,
                object: y.qAy.CONTEXT_MENU_ITEM,
              },
              V = (0, v.Z)({ userId: n.id, guildId: l, channelId: d.id }),
              Y = (0, P.Z)(n, l, B),
              z = (0, O.Z)(n.id, B),
              $ = (0, H.Z)(n.id),
              J = (0, f.Z)({ user: n, context: B }),
              Q = (0, g.Z)({
                user: n,
                guildId: l,
                channelId: d.id,
                context: B,
              }),
              ee = (0, A.Z)({ user: n }),
              en = (0, m.Z)(n.id),
              el = (0, L.Z)(n.id),
              ei = (0, _.B)({
                userId: n.id,
                channelId: d.id,
                guildId: d.getGuildId(),
                location: "GuildChannelUserContextMenu",
              }),
              ea = (0, C.Z)({
                guildId: l,
                userId: n.id,
                analyticsLocation: X,
                context: B,
              }),
              er = (0, j.Z)({ user: n, guildId: l }),
              es = (0, c.Z)(null, n),
              ed = (0, U.Z)(n),
              eu = (0, T.Z)({ user: n }),
              et = (0, G.Z)(n, l, d.id),
              ec = (0, R.Z)(n.id, l),
              eo = (0, S.Z)(n, l),
              eZ = (0, N.Z)({ id: n.id, label: D.Z.Messages.COPY_ID_USER }),
              eE = (0, b.Z)(n.id, d.id),
              eM = (0, E.Z)(n.id),
              e_ = (0, Z.Z)(d.id),
              eN = (0, h.Z)(n),
              eC = (0, p.Z)(n, l, d.id),
              eh = (0, a.e7)([I.Z], () =>
                null != W ? I.Z.getChannel(W) : null,
              ),
              ep = (0, x.Z)({
                commandType: t.yU.USER,
                commandTargetId: n.id,
                channel: null != eh ? eh : d,
                guildId: l,
                onHeightUpdate: K,
                context: B,
              }),
              eI = (0, M.Z)(n.id),
              eU = n.isNonUserBot();
            return (0, i.jsxs)(r.Menu, {
              navId: "user-context",
              onClose: s.Zy,
              "aria-label": D.Z.Messages.USER_ACTIONS_MENU_LABEL,
              onSelect: F,
              children: [
                !eU &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsxs)(r.MenuGroup, { children: [eN, w && eC] }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [q && V, o && Y, z, J, q && Q, q && ee, $],
                      }),
                      u && (0, i.jsx)(r.MenuGroup, { children: en }),
                      (0, i.jsx)(r.MenuGroup, { children: q && es }),
                      (0, i.jsxs)(r.MenuGroup, {
                        children: [
                          u && el,
                          u && ei,
                          u && eE,
                          q && ea,
                          ep,
                          q && er,
                          ed,
                          q && eu,
                          k && eI,
                        ],
                      }),
                      (0, i.jsx)(r.MenuGroup, { children: et }),
                      (0, i.jsxs)(r.MenuGroup, { children: [ec, eo] }),
                      k && (0, i.jsxs)(r.MenuGroup, { children: [e_, eM] }),
                    ],
                  }),
                (0, i.jsx)(r.MenuGroup, { children: eZ }),
              ],
            });
          },
          { object: y.qAy.CONTEXT_MENU },
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
//# sourceMappingURL=1d5c00d997e24e52a9b9.js.map
