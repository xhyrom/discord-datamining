"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["95883"],
  {
    83521: function (e, n, l) {
      l.r(n),
        l.d(n, {
          default: function () {
            return j;
          },
        }),
        l(47120);
      var a = l(200651),
        i = l(192379),
        t = l(481060),
        o = l(442837),
        r = l(410030),
        s = l(430824),
        d = l(594174),
        c = l(931240),
        u = l(645896),
        m = l(603368),
        v = l(353093),
        x = l(114487),
        g = l(380365),
        h = l(981631),
        f = l(921944),
        C = l(388032),
        N = l(126122);
      function j(e) {
        var n, l;
        let { guildId: j, transitionState: S, onClose: _ } = e,
          p = (0, o.e7)([s.Z], () => s.Z.getGuild(j), [j]),
          k = (0, u.Cc)(null != j ? j : null),
          b = (0, o.e7)([d.default], () => d.default.getCurrentUser(), []),
          [T, w] = i.useState(!0),
          M = (0, r.ZP)(),
          P = i.useCallback(async () => {
            T && (await (0, c.nE)(j, !0, h.Sbl.CLAN_ADOPT_IDENTITY_MODAL)),
              _(f.L.PRIMARY);
          }, [T, _, j]),
          Z = i.useCallback(() => {
            _(f.L.DISMISS);
          }, [_]);
        i.useEffect(
          () => ((null == p || null == b) && _(f.L.AUTO_DISMISS), () => {}),
          [b, p, j, _],
        );
        let A = (0, m.nP)(
            null == k
              ? void 0
              : null === (n = k.branding) || void 0 === n
                ? void 0
                : n.primaryColor,
            [t.tokens.colors.BG_BRAND, 0.7],
          ),
          I = t.tokens.colors.BG_SURFACE_OVERLAY.resolve({
            theme: M,
            saturation: 1,
          }).hex(),
          L = (0, m.nj)(A, I, "top center"),
          B = (0, m.nP)(
            null == k
              ? void 0
              : null === (l = k.branding) || void 0 === l
                ? void 0
                : l.primaryColor,
            [t.tokens.colors.BG_BRAND, 1],
          ),
          y = (0, m.$0)(A).hex(),
          R = (0, v.Zp)(p, null == b ? void 0 : b.clan);
        if (null == p || null == b) return null;
        let D = R
            ? C.intl.format(C.t["hyP/19"], { guildName: p.name })
            : C.intl.format(C.t.h1CclZ, { guildName: p.name }),
          E = R
            ? C.intl.formatToPlainString(C.t["x+B7c3"], { guildName: p.name })
            : C.intl.formatToPlainString(C.t.kPJowM, { guildName: p.name }),
          U = C.intl.string(C.t.re8ZPj);
        return (0, a.jsxs)(t.ModalRoot, {
          transitionState: S,
          size: t.ModalSize.SMALL,
          className: N.modal,
          children: [
            (0, a.jsx)(t.ModalContent, {
              style: L,
              children: (0, a.jsxs)("div", {
                className: N.mainContainer,
                children: [
                  (0, a.jsxs)("div", {
                    className: N.infoContainer,
                    children: [
                      (0, a.jsx)(x.Z, { guild: p, iconSize: 64 }),
                      (0, a.jsxs)("div", {
                        className: N.headerTextContainer,
                        children: [
                          (0, a.jsx)(t.Heading, {
                            variant: "heading-xl/normal",
                            color: "header-primary",
                            children: D,
                          }),
                          (0, a.jsx)(t.Text, {
                            variant: "text-sm/normal",
                            color: "text-secondary",
                            children: E,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(g.Z, {
                    guildId: j,
                    isTagAdopted: T,
                    onChangeUseTag: w,
                  }),
                ],
              }),
            }),
            (0, a.jsxs)(t.ModalFooter, {
              className: N.modalFooter,
              children: [
                (0, a.jsx)(t.Button, {
                  onClick: P,
                  color: t.Button.Colors.CUSTOM,
                  look: t.Button.Looks.FILLED,
                  style: { backgroundColor: B, color: y },
                  children: U,
                }),
                (0, a.jsx)(t.Button, {
                  onClick: Z,
                  color: t.Button.Colors.PRIMARY,
                  look: t.Button.Looks.LINK,
                  children: C.intl.string(C.t.QMwUJy),
                }),
              ],
            }),
          ],
        });
      }
    },
    380365: function (e, n, l) {
      var a = l(200651),
        i = l(192379),
        t = l(442837),
        o = l(481060),
        r = l(271383),
        s = l(430824),
        d = l(594174),
        c = l(5192),
        u = l(645896),
        m = l(979264),
        v = l(308083),
        x = l(388032),
        g = l(402488);
      n.Z = i.memo(function (e) {
        var n, l, i, h, f, C;
        let { guildId: N, isTagAdopted: j, onChangeUseTag: S } = e,
          _ = (0, u.Cc)(N),
          p = (0, t.e7)([s.Z], () => s.Z.getGuild(N)),
          k =
            null !==
              (h =
                null == _
                  ? void 0
                  : null === (n = _.badge) || void 0 === n
                    ? void 0
                    : n.imageHash) && void 0 !== h
              ? h
              : null == p
                ? void 0
                : null === (l = p.clan) || void 0 === l
                  ? void 0
                  : l.badge,
          b =
            null !== (f = null == _ ? void 0 : _.tag) && void 0 !== f
              ? f
              : null == p
                ? void 0
                : null === (i = p.clan) || void 0 === i
                  ? void 0
                  : i.tag,
          T = (0, t.e7)([d.default], () => d.default.getCurrentUser()),
          w = (0, t.e7)([r.ZP], () =>
            null != T ? r.ZP.getMember(N, T.id) : null,
          );
        return null == p || null == T || null == w || null == k
          ? null
          : (0, a.jsxs)("div", {
              className: g.previewSection,
              children: [
                (0, a.jsxs)("div", {
                  className: g.chatPreview,
                  children: [
                    (0, a.jsx)(o.Avatar, {
                      src: T.getAvatarURL(N, 40),
                      size: o.AvatarSizes.SIZE_40,
                      "aria-hidden": !0,
                    }),
                    (0, a.jsxs)("div", {
                      className: g.previewText,
                      children: [
                        (0, a.jsxs)("div", {
                          className: g.userName,
                          children: [
                            (0, a.jsx)(o.NameWithRole, {
                              className: g.userName,
                              name: c.ZP.getName(N, null, T),
                              color:
                                null !== (C = w.colorString) && void 0 !== C
                                  ? C
                                  : void 0,
                            }),
                            j &&
                              (0, a.jsx)(m.aG, {
                                guildId: N,
                                clanBadge: k,
                                clanTag: b,
                                badgeSize: v.NC.SIZE_12,
                                textVariant: "text-xs/semibold",
                              }),
                          ],
                        }),
                        (0, a.jsx)("div", {
                          className: g.fakeMessage,
                          style: { width: "80%" },
                        }),
                        (0, a.jsx)("div", {
                          className: g.fakeMessage,
                          style: { width: "50%" },
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)("div", { className: g.divider }),
                (0, a.jsxs)("div", {
                  className: g.settingSection,
                  children: [
                    (0, a.jsxs)("div", {
                      children: [
                        (0, a.jsx)(o.Text, {
                          variant: "text-md/normal",
                          color: "header-primary",
                          children: x.intl.string(x.t.nwNzVV),
                        }),
                        (0, a.jsx)(o.Text, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: x.intl.string(x.t.Dpl68P),
                        }),
                      ],
                    }),
                    (0, a.jsx)(o.Switch, { onChange: S, checked: j }),
                  ],
                }),
              ],
            });
      });
    },
    126122: function (e, n, l) {
      e.exports = {
        mainContainer: "mainContainer_e13d39",
        modal: "modal_e13d39",
        infoContainer: "infoContainer_e13d39",
        modalFooter: "modalFooter_e13d39",
        headerTextContainer: "headerTextContainer_e13d39",
      };
    },
    402488: function (e, n, l) {
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
//# sourceMappingURL=dfbbb1f49324e093fe46.js.map
