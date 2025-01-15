"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["95883"],
  {
    83521: function (e, l, n) {
      n.r(l),
        n.d(l, {
          default: function () {
            return j;
          },
        }),
        n(47120);
      var i = n(200651),
        a = n(192379),
        t = n(481060),
        o = n(442837),
        r = n(410030),
        s = n(430824),
        d = n(594174),
        c = n(931240),
        u = n(645896),
        m = n(603368),
        v = n(353093),
        x = n(114487),
        g = n(380365),
        h = n(981631),
        f = n(921944),
        C = n(388032),
        N = n(587405);
      function j(e) {
        var l, n;
        let { guildId: j, transitionState: S, onClose: p } = e,
          _ = (0, o.e7)([s.Z], () => s.Z.getGuild(j), [j]),
          k = (0, u.Cc)(null != j ? j : null),
          b = (0, o.e7)([d.default], () => d.default.getCurrentUser(), []),
          [T, w] = a.useState(!0),
          M = (0, r.ZP)(),
          P = a.useCallback(async () => {
            T && (await (0, c.nE)(j, !0, h.Sbl.CLAN_ADOPT_IDENTITY_MODAL)),
              p(f.L.PRIMARY);
          }, [T, p, j]),
          Z = a.useCallback(() => {
            p(f.L.DISMISS);
          }, [p]);
        a.useEffect(
          () => ((null == _ || null == b) && p(f.L.AUTO_DISMISS), () => {}),
          [b, _, j, p],
        );
        let A = (0, m.nP)(
            null == k
              ? void 0
              : null === (l = k.branding) || void 0 === l
                ? void 0
                : l.primaryColor,
            [t.tokens.colors.BG_BRAND, 0.7],
          ),
          I = t.tokens.colors.BG_SURFACE_OVERLAY.resolve({
            theme: M,
            saturation: 1,
          }).hex(),
          L = (0, m.nj)(A, I, "top center"),
          y = (0, m.nP)(
            null == k
              ? void 0
              : null === (n = k.branding) || void 0 === n
                ? void 0
                : n.primaryColor,
            [t.tokens.colors.BG_BRAND, 1],
          ),
          B = (0, m.$0)(A).hex(),
          R = (0, v.Zp)(_, null == b ? void 0 : b.primaryGuild);
        if (null == _ || null == b) return null;
        let D = R
            ? C.intl.format(C.t["hyP/19"], { guildName: _.name })
            : C.intl.format(C.t.h1CclZ, { guildName: _.name }),
          E = R
            ? C.intl.formatToPlainString(C.t["x+B7c3"], { guildName: _.name })
            : C.intl.formatToPlainString(C.t.kPJowM, { guildName: _.name }),
          U = C.intl.string(C.t.re8ZPj);
        return (0, i.jsxs)(t.ModalRoot, {
          transitionState: S,
          size: t.ModalSize.SMALL,
          className: N.modal,
          children: [
            (0, i.jsx)(t.ModalContent, {
              style: L,
              children: (0, i.jsxs)("div", {
                className: N.mainContainer,
                children: [
                  (0, i.jsxs)("div", {
                    className: N.infoContainer,
                    children: [
                      (0, i.jsx)(x.Z, { guild: _, iconSize: 64 }),
                      (0, i.jsxs)("div", {
                        className: N.headerTextContainer,
                        children: [
                          (0, i.jsx)(t.Heading, {
                            variant: "heading-xl/normal",
                            color: "header-primary",
                            children: D,
                          }),
                          (0, i.jsx)(t.Text, {
                            variant: "text-sm/normal",
                            color: "text-secondary",
                            children: E,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)(g.Z, {
                    guildId: j,
                    isTagAdopted: T,
                    onChangeUseTag: w,
                  }),
                ],
              }),
            }),
            (0, i.jsxs)(t.ModalFooter, {
              className: N.modalFooter,
              children: [
                (0, i.jsx)(t.Button, {
                  onClick: P,
                  color: t.Button.Colors.CUSTOM,
                  look: t.Button.Looks.FILLED,
                  style: { backgroundColor: y, color: B },
                  children: U,
                }),
                (0, i.jsx)(t.Button, {
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
    380365: function (e, l, n) {
      var i = n(200651),
        a = n(192379),
        t = n(442837),
        o = n(481060),
        r = n(271383),
        s = n(430824),
        d = n(594174),
        c = n(5192),
        u = n(645896),
        m = n(979264),
        v = n(308083),
        x = n(388032),
        g = n(896177);
      l.Z = a.memo(function (e) {
        var l, n, a, h, f, C;
        let { guildId: N, isTagAdopted: j, onChangeUseTag: S } = e,
          p = (0, u.Cc)(N),
          _ = (0, t.e7)([s.Z], () => s.Z.getGuild(N)),
          k =
            null !==
              (h =
                null == p
                  ? void 0
                  : null === (l = p.badge) || void 0 === l
                    ? void 0
                    : l.imageHash) && void 0 !== h
              ? h
              : null == _
                ? void 0
                : null === (n = _.profile) || void 0 === n
                  ? void 0
                  : n.badge,
          b =
            null !== (f = null == p ? void 0 : p.tag) && void 0 !== f
              ? f
              : null == _
                ? void 0
                : null === (a = _.profile) || void 0 === a
                  ? void 0
                  : a.tag,
          T = (0, t.e7)([d.default], () => d.default.getCurrentUser()),
          w = (0, t.e7)([r.ZP], () =>
            null != T ? r.ZP.getMember(N, T.id) : null,
          );
        return null == _ || null == T || null == w || null == k
          ? null
          : (0, i.jsxs)("div", {
              className: g.previewSection,
              children: [
                (0, i.jsxs)("div", {
                  className: g.chatPreview,
                  children: [
                    (0, i.jsx)(o.Avatar, {
                      src: T.getAvatarURL(N, 40),
                      size: o.AvatarSizes.SIZE_40,
                      "aria-hidden": !0,
                    }),
                    (0, i.jsxs)("div", {
                      className: g.previewText,
                      children: [
                        (0, i.jsxs)("div", {
                          className: g.userName,
                          children: [
                            (0, i.jsx)(o.NameWithRole, {
                              className: g.userName,
                              name: c.ZP.getName(N, null, T),
                              color:
                                null !== (C = w.colorString) && void 0 !== C
                                  ? C
                                  : void 0,
                            }),
                            j &&
                              (0, i.jsx)(m.aG, {
                                guildId: N,
                                clanBadge: k,
                                clanTag: b,
                                badgeSize: v.NC.SIZE_12,
                                textVariant: "text-xs/semibold",
                              }),
                          ],
                        }),
                        (0, i.jsx)("div", {
                          className: g.fakeMessage,
                          style: { width: "80%" },
                        }),
                        (0, i.jsx)("div", {
                          className: g.fakeMessage,
                          style: { width: "50%" },
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)("div", { className: g.divider }),
                (0, i.jsxs)("div", {
                  className: g.settingSection,
                  children: [
                    (0, i.jsxs)("div", {
                      children: [
                        (0, i.jsx)(o.Text, {
                          variant: "text-md/normal",
                          color: "header-primary",
                          children: x.intl.string(x.t.nwNzVV),
                        }),
                        (0, i.jsx)(o.Text, {
                          variant: "text-xs/normal",
                          color: "text-muted",
                          children: x.intl.string(x.t.Dpl68P),
                        }),
                      ],
                    }),
                    (0, i.jsx)(o.Switch, { onChange: S, checked: j }),
                  ],
                }),
              ],
            });
      });
    },
    587405: function (e, l, n) {
      e.exports = {
        mainContainer: "mainContainer_e13d39",
        modal: "modal_e13d39",
        infoContainer: "infoContainer_e13d39",
        modalFooter: "modalFooter_e13d39",
        headerTextContainer: "headerTextContainer_e13d39",
      };
    },
    896177: function (e, l, n) {
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
//# sourceMappingURL=6de06281927fc779cd06.js.map
