"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["95883"],
  {
    83521: function (e, a, l) {
      l.r(a),
        l.d(a, {
          default: function () {
            return h;
          },
        }),
        l(47120);
      var n = l(735250),
        s = l(470079),
        i = l(481060),
        o = l(442837),
        t = l(410030),
        r = l(430824),
        d = l(594174),
        c = l(931240),
        u = l(645896),
        _ = l(603368),
        m = l(353093),
        v = l(114487),
        x = l(380365),
        C = l(981631),
        g = l(921944),
        A = l(689938),
        N = l(126122);
      function h(e) {
        var a, l;
        let { guildId: h, transitionState: S, onClose: T } = e,
          f = (0, o.e7)([r.Z], () => r.Z.getGuild(h), [h]),
          L = (0, u.Cc)(null != h ? h : null),
          M = (0, o.e7)([d.default], () => d.default.getCurrentUser(), []),
          [E, j] = s.useState(!0),
          D = (0, t.ZP)(),
          I = s.useCallback(async () => {
            E && (await (0, c.nE)(h, !0, C.Sbl.CLAN_ADOPT_IDENTITY_MODAL)),
              T(g.L.PRIMARY);
          }, [E, T, h]),
          p = s.useCallback(() => {
            T(g.L.DISMISS);
          }, [T]);
        s.useEffect(
          () => ((null == f || null == M) && T(g.L.AUTO_DISMISS), () => {}),
          [M, f, h, T],
        );
        let Z = (0, _.nP)(
            null == L
              ? void 0
              : null === (a = L.branding) || void 0 === a
                ? void 0
                : a.primaryColor,
            [i.tokens.colors.BG_BRAND, 0.7],
          ),
          k = i.tokens.colors.BG_SURFACE_OVERLAY.resolve({
            theme: D,
            saturation: 1,
          }).hex(),
          P = (0, _.nj)(Z, k, "top center"),
          b = (0, _.nP)(
            null == L
              ? void 0
              : null === (l = L.branding) || void 0 === l
                ? void 0
                : l.primaryColor,
            [i.tokens.colors.BG_BRAND, 1],
          ),
          O = (0, _.$0)(Z).hex(),
          R = (0, m.Zp)(f, null == M ? void 0 : M.clan);
        if (null == f || null == M) return null;
        let U = R
            ? A.Z.Messages.CLAN_USER_ADOPT_TAG_MODAL_NEW_IDENTITY_HEADING.format(
                { guildName: f.name },
              )
            : A.Z.Messages.CLAN_USER_ADOPT_TAG_MODAL_HEADING.format({
                guildName: f.name,
              }),
          G = R
            ? A.Z.Messages.CLAN_USER_ADOPT_TAG_MODAL_NEW_IDENTITY_DESCRIPTION.format(
                { guildName: f.name },
              )
            : A.Z.Messages.CLAN_USER_ADOPT_TAG_MODAL_DESCRIPTION.format({
                guildName: f.name,
              }),
          w = A.Z.Messages.CLAN_USER_ADOPT_TAG_MODAL_CTA;
        return (0, n.jsxs)(i.ModalRoot, {
          transitionState: S,
          size: i.ModalSize.SMALL,
          className: N.modal,
          children: [
            (0, n.jsx)(i.ModalContent, {
              style: P,
              children: (0, n.jsxs)("div", {
                className: N.mainContainer,
                children: [
                  (0, n.jsxs)("div", {
                    className: N.infoContainer,
                    children: [
                      (0, n.jsx)(v.Z, { guild: f, iconSize: 64 }),
                      (0, n.jsxs)("div", {
                        className: N.headerTextContainer,
                        children: [
                          (0, n.jsx)(i.Heading, {
                            variant: "heading-xl/normal",
                            color: "header-primary",
                            children: U,
                          }),
                          (0, n.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            color: "text-secondary",
                            children: G,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)(x.Z, {
                    guildId: h,
                    isTagAdopted: E,
                    onChangeUseTag: j,
                  }),
                ],
              }),
            }),
            (0, n.jsxs)(i.ModalFooter, {
              className: N.modalFooter,
              children: [
                (0, n.jsx)(i.Button, {
                  onClick: I,
                  color: i.Button.Colors.CUSTOM,
                  look: i.Button.Looks.FILLED,
                  style: { backgroundColor: b, color: O },
                  children: w,
                }),
                (0, n.jsx)(i.Button, {
                  onClick: p,
                  color: i.Button.Colors.PRIMARY,
                  look: i.Button.Looks.LINK,
                  children: A.Z.Messages.CLAN_USER_ADOPT_TAG_MODAL_CANCEL,
                }),
              ],
            }),
          ],
        });
      }
    },
    380365: function (e, a, l) {
      var n = l(735250),
        s = l(470079),
        i = l(442837),
        o = l(481060),
        t = l(271383),
        r = l(430824),
        d = l(594174),
        c = l(5192),
        u = l(645896),
        _ = l(979264),
        m = l(308083),
        v = l(689938),
        x = l(402488);
      a.Z = s.memo(function (e) {
        var a, l, s, C, g, A;
        let { guildId: N, isTagAdopted: h, onChangeUseTag: S } = e,
          T = (0, u.Cc)(N),
          f = (0, i.e7)([r.Z], () => r.Z.getGuild(N)),
          L =
            null !==
              (C =
                null == T
                  ? void 0
                  : null === (a = T.badge) || void 0 === a
                    ? void 0
                    : a.imageHash) && void 0 !== C
              ? C
              : null == f
                ? void 0
                : null === (l = f.clan) || void 0 === l
                  ? void 0
                  : l.badge,
          M =
            null !== (g = null == T ? void 0 : T.tag) && void 0 !== g
              ? g
              : null == f
                ? void 0
                : null === (s = f.clan) || void 0 === s
                  ? void 0
                  : s.tag,
          E = (0, i.e7)([d.default], () => d.default.getCurrentUser()),
          j = (0, i.e7)([t.ZP], () =>
            null != E ? t.ZP.getMember(N, E.id) : null,
          );
        return null == f || null == E || null == j || null == L
          ? null
          : (0, n.jsxs)("div", {
              className: x.previewSection,
              children: [
                (0, n.jsxs)("div", {
                  className: x.chatPreview,
                  children: [
                    (0, n.jsx)(o.Avatar, {
                      src: E.getAvatarURL(N, 40),
                      size: o.AvatarSizes.SIZE_40,
                      "aria-hidden": !0,
                    }),
                    (0, n.jsxs)("div", {
                      className: x.previewText,
                      children: [
                        (0, n.jsxs)("div", {
                          className: x.userName,
                          children: [
                            (0, n.jsx)(o.NameWithRole, {
                              className: x.userName,
                              name: c.ZP.getName(N, null, E),
                              color:
                                null !== (A = j.colorString) && void 0 !== A
                                  ? A
                                  : void 0,
                            }),
                            h &&
                              (0, n.jsx)(_.aG, {
                                guildId: N,
                                clanBadge: L,
                                clanTag: M,
                                badgeSize: m.NC.SIZE_12,
                                textVariant: "text-xs/semibold",
                              }),
                          ],
                        }),
                        (0, n.jsx)("div", {
                          className: x.fakeMessage,
                          style: { width: "80%" },
                        }),
                        (0, n.jsx)("div", {
                          className: x.fakeMessage,
                          style: { width: "50%" },
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsx)("div", { className: x.divider }),
                (0, n.jsxs)("div", {
                  className: x.settingSection,
                  children: [
                    (0, n.jsxs)("div", {
                      children: [
                        (0, n.jsx)(o.Text, {
                          variant: "text-md/normal",
                          color: "header-primary",
                          children: v.Z.Messages.CLAN_SUCCESS_USE_TAG_TEXT,
                        }),
                        (0, n.jsx)(o.Text, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: v.Z.Messages.CLAN_SUCCESS_USE_TAG_HELP,
                        }),
                      ],
                    }),
                    (0, n.jsx)(o.Switch, { onChange: S, checked: h }),
                  ],
                }),
              ],
            });
      });
    },
    126122: function (e, a, l) {
      e.exports = {
        mainContainer: "mainContainer_e13d39",
        modal: "modal_e13d39",
        infoContainer: "infoContainer_e13d39",
        modalFooter: "modalFooter_e13d39",
        headerTextContainer: "headerTextContainer_e13d39",
      };
    },
    402488: function (e, a, l) {
      e.exports = {
        previewSection: "previewSection_a7b6f0",
        chatPreview: "chatPreview_a7b6f0",
        previewText: "previewText_a7b6f0",
        userName: "userName_a7b6f0",
        fakeMessage: "fakeMessage_a7b6f0",
        divider: "divider_a7b6f0",
        settingSection: "settingSection_a7b6f0",
      };
    },
  },
]);
//# sourceMappingURL=2647e07b55fa712c5352.js.map
