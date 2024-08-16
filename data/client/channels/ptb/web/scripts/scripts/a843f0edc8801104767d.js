"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["46563"],
  {
    286694: function (e, n, i) {
      i.d(n, {
        Z: function () {
          return _;
        },
      });
      var l = i(735250);
      i(470079);
      var r = i(442837),
        d = i(481060),
        s = i(592125),
        u = i(430824),
        a = i(496675),
        o = i(594174),
        t = i(471253),
        c = i(88751),
        Z = i(981631),
        E = i(689938);
      function _(e, n, i) {
        var _;
        let M = s.Z.getChannel(i),
          p = (0, r.e7)([u.Z], () => u.Z.getGuild(n), [n]),
          h = (0, r.e7)([c.ZP], () => c.ZP.getPermissionsForUser(e.id, i), [
            i,
            e.id,
          ]),
          C =
            (null === (_ = o.default.getCurrentUser()) || void 0 === _
              ? void 0
              : _.id) === e.id,
          U = (0, r.e7)(
            [a.Z],
            () =>
              null != i &&
              a.Z.canWithPartialContext(Z.Plq.MUTE_MEMBERS, { channelId: i }),
            [i],
          );
        return null != M && null != p && (U || C) && h.speaker
          ? (0, l.jsx)(d.MenuItem, {
              id: "audience",
              label: C
                ? E.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE
                : E.Z.Messages.STAGE_CHANNEL_USER_MOVE_TO_AUDIENCE_OTHER,
              action: () => {
                C ? (0, t.yi)(M) : (0, t.hz)(e, M);
              },
            })
          : null;
      }
    },
    757387: function (e, n, i) {
      i.r(n);
      var l = i(735250);
      i(470079);
      var r = i(442837),
        d = i(481060),
        s = i(239091),
        u = i(883385),
        a = i(108843),
        o = i(911969),
        t = i(947440),
        c = i(100527),
        Z = i(441061),
        E = i(167675),
        _ = i(737013),
        M = i(145474),
        p = i(299206),
        h = i(976192),
        C = i(819403),
        U = i(286694),
        N = i(592125),
        x = i(777658),
        T = i(858488),
        I = i(185457),
        b = i(933409),
        j = i(570870),
        G = i(389052),
        g = i(24311),
        A = i(332576),
        f = i(710631),
        S = i(297047),
        R = i(88966),
        v = i(712301),
        O = i(991307),
        P = i(725119),
        L = i(931617),
        m = i(700994),
        D = i(332031),
        w = i(981631),
        y = i(689938);
      n.default = (0, a.Z)(
        (0, u.Z)(
          function (e) {
            let {
                user: n,
                guildId: i,
                channel: u,
                showMediaItems: a = !1,
                showChatItems: c = !0,
                showChannelCallItems: H = !1,
                showModalItems: k = !0,
                showStageChannelItems: X = !1,
                context: q,
                onSelect: B,
                onHeightUpdate: W,
                viewingChannelId: F,
              } = e,
              V = {
                page: w.ZY5.GUILD_CHANNEL,
                section: w.jXE.CHAT_USERNAME,
                object: w.qAy.CONTEXT_MENU_ITEM,
              },
              Y = (0, P.Z)({ userId: n.id, guildId: i, channelId: u.id }),
              z = (0, S.Z)(n, i, q),
              J = (0, R.Z)(n.id, q),
              K = (0, D.Z)(n.id),
              Q = (0, g.Z)({ user: n, context: q }),
              $ = (0, I.Z)({
                user: n,
                guildId: i,
                channelId: u.id,
                context: q,
              }),
              ee = (0, T.Z)({ user: n }),
              en = (0, m.Z)(n.id),
              ei = (0, O.Z)(n.id),
              el = (0, M.P)({
                userId: n.id,
                channelId: u.id,
                location: "GuildChannelUserContextMenu",
              }),
              er = (0, h.Z)({
                guildId: i,
                userId: n.id,
                analyticsLocation: V,
                context: q,
              }),
              ed = (0, f.Z)({ user: n, guildId: i }),
              es = (0, t.Z)(null, n),
              eu = (0, x.Z)(n),
              ea = (0, G.Z)({ user: n }),
              eo = (0, b.Z)(n, i, u.id),
              et = (0, L.Z)(n.id, i),
              ec = (0, v.Z)(n, i),
              eZ = (0, p.Z)({ id: n.id, label: y.Z.Messages.COPY_ID_USER }),
              eE = (0, A.Z)(n.id, u.id),
              e_ = (0, E.Z)(n.id),
              eM = (0, Z.Z)(u.id),
              ep = (0, C.Z)(n),
              eh = (0, U.Z)(n, i, u.id),
              eC = (0, r.e7)([N.Z], () =>
                null != F ? N.Z.getChannel(F) : null,
              ),
              eU = (0, j.Z)({
                commandType: o.yU.USER,
                commandTargetId: n.id,
                channel: null != eC ? eC : u,
                guildId: i,
                onHeightUpdate: W,
                context: q,
              }),
              eN = (0, _.Z)(n.id),
              ex = n.isNonUserBot();
            return (0, l.jsxs)(d.Menu, {
              navId: "user-context",
              onClose: s.Zy,
              "aria-label": y.Z.Messages.USER_ACTIONS_MENU_LABEL,
              onSelect: B,
              children: [
                !ex &&
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsxs)(d.MenuGroup, { children: [ep, X && eh] }),
                      (0, l.jsxs)(d.MenuGroup, {
                        children: [k && Y, c && z, J, Q, k && $, k && ee, K],
                      }),
                      a && (0, l.jsx)(d.MenuGroup, { children: en }),
                      (0, l.jsx)(d.MenuGroup, { children: k && es }),
                      (0, l.jsxs)(d.MenuGroup, {
                        children: [
                          a && ei,
                          a && el,
                          a && eE,
                          k && er,
                          eU,
                          k && ed,
                          eu,
                          k && ea,
                          H && eN,
                        ],
                      }),
                      (0, l.jsx)(d.MenuGroup, { children: eo }),
                      (0, l.jsxs)(d.MenuGroup, { children: [et, ec] }),
                      H && (0, l.jsxs)(d.MenuGroup, { children: [eM, e_] }),
                    ],
                  }),
                (0, l.jsx)(d.MenuGroup, { children: eZ }),
              ],
            });
          },
          { object: w.qAy.CONTEXT_MENU },
        ),
        [c.Z.CONTEXT_MENU, c.Z.GUILD_CHANNEL_USER_MENU],
      );
    },
    936124: function (e, n, i) {
      e.exports = {
        labelWrapper: "labelWrapper_c61a51",
        label: "label_c61a51",
      };
    },
    480881: function (e, n, i) {
      e.exports = {
        videoPaused: "videoPaused_f2b765",
        warningCircle: "warningCircle_f2b765",
      };
    },
    522425: function (e, n, i) {
      e.exports = { roleRow: "roleRow_b4ace3", roleDot: "roleDot_b4ace3" };
    },
  },
]);
//# sourceMappingURL=a843f0edc8801104767d.js.map
