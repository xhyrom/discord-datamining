"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["63636"],
  {
    511385: function (e, a, s) {
      s.r(a), s(47120);
      var t = s(735250),
        i = s(470079),
        l = s(688619),
        n = s.n(l),
        r = s(442837),
        c = s(481060),
        d = s(313201),
        o = s(271383),
        x = s(430824),
        m = s(594174),
        v = s(931240),
        S = s(970606),
        u = s(979264),
        g = s(284019),
        h = s(308083),
        _ = s(981631),
        C = s(689938),
        N = s(457243);
      a.default = (e) => {
        var a, s, l, f;
        let {
            guildId: T,
            tag: p,
            brandPrimaryColor: j,
            transitionState: E,
            onClose: w,
          } = e,
          b = (0, d.Dt)(),
          [A, L] = i.useState(!0),
          M = (0, r.e7)([x.Z], () => x.Z.getGuild(T)),
          Z = (0, r.e7)([m.default], () => m.default.getCurrentUser()),
          k = (0, r.e7)([o.ZP], () =>
            null != Z ? o.ZP.getMember(T, Z.id) : null,
          );
        if (
          (i.useEffect(() => {
            (0, S.dx)(T);
          }, [T]),
          null == M || null == Z || null == k)
        )
          return null;
        let P =
          null != j
            ? {
                background: "radial-gradient(circle at top, ".concat(
                  n()(j).alpha(0.3).hex(),
                  " 0%, transparent 50%)",
                ),
              }
            : void 0;
        return (0, t.jsx)(c.ModalRoot, {
          className: N.modal,
          transitionState: E,
          "aria-labelledby": b,
          size: c.ModalSize.SMALL,
          children: (0, t.jsxs)("div", {
            className: N.content,
            style: P,
            children: [
              (0, t.jsx)(u.aG, {
                guildId: T,
                clanTag: p,
                clanBadge:
                  null === (a = M.clan) || void 0 === a ? void 0 : a.badge,
                className: N.tagPreview,
                textClassName: N.tagText,
                textVariant: "heading-xxl/semibold",
                badgeSize: h.NC.SIZE_36,
              }),
              (0, t.jsx)(c.Heading, {
                variant: "heading-xxl/medium",
                children: C.Z.Messages.CLAN_SUCCESS_TITLE.format({
                  name: M.name,
                }),
              }),
              (0, t.jsx)(c.Text, {
                className: N.subtitle,
                variant: "text-md/normal",
                children: C.Z.Messages.CLAN_SUCCESS_SUBTITLE,
              }),
              (0, t.jsxs)("div", {
                className: N.previewSection,
                children: [
                  (0, t.jsxs)("div", {
                    className: N.chatPreview,
                    children: [
                      (0, t.jsx)(c.Avatar, {
                        src: Z.getAvatarURL(T, 40),
                        size: c.AvatarSizes.SIZE_40,
                        "aria-hidden": !0,
                      }),
                      (0, t.jsxs)("div", {
                        className: N.previewText,
                        children: [
                          (0, t.jsxs)("div", {
                            className: N.userName,
                            children: [
                              (0, t.jsx)(c.NameWithRole, {
                                className: N.userName,
                                name:
                                  null !== (l = k.nick) && void 0 !== l
                                    ? l
                                    : Z.username,
                                color:
                                  null !== (f = k.colorString) && void 0 !== f
                                    ? f
                                    : void 0,
                              }),
                              A &&
                                (0, t.jsx)(u.aG, {
                                  guildId: T,
                                  clanBadge:
                                    null === (s = M.clan) || void 0 === s
                                      ? void 0
                                      : s.badge,
                                  clanTag: p,
                                  badgeSize: h.NC.SIZE_12,
                                  textVariant: "text-xs/semibold",
                                }),
                            ],
                          }),
                          (0, t.jsx)("div", {
                            className: N.fakeMessage,
                            style: { width: "80%" },
                          }),
                          (0, t.jsx)("div", {
                            className: N.fakeMessage,
                            style: { width: "50%" },
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsx)("div", { className: N.divider }),
                  (0, t.jsxs)("div", {
                    className: N.settingSection,
                    children: [
                      (0, t.jsxs)("div", {
                        children: [
                          (0, t.jsx)(c.Text, {
                            variant: "text-md/normal",
                            color: "header-primary",
                            children: C.Z.Messages.CLAN_SUCCESS_USE_TAG_TEXT,
                          }),
                          (0, t.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: C.Z.Messages.CLAN_SUCCESS_USE_TAG_HELP,
                          }),
                        ],
                      }),
                      (0, t.jsx)(c.Switch, {
                        onChange: () => L(!A),
                        checked: A,
                      }),
                    ],
                  }),
                ],
              }),
              (0, t.jsx)(g.Z, {
                size: c.Button.Sizes.LARGE,
                themeColor: j,
                onClick: () => {
                  A && (0, v.nE)(T, A, _.Sbl.CLAN_SETUP_MODAL),
                    (0, S.B3)(T, A),
                    w();
                },
                children: (0, t.jsx)(c.Text, {
                  color: "none",
                  variant: "text-md/medium",
                  children: C.Z.Messages.CLAN_SUCCESS_CTA,
                }),
              }),
              (0, t.jsx)(c.Text, {
                className: N.postscript,
                variant: "text-xs/normal",
                color: "header-secondary",
                children: C.Z.Messages.CLAN_SUCCESS_POSTSCRIPT,
              }),
            ],
          }),
        });
      };
    },
    457243: function (e, a, s) {
      e.exports = {
        modal: "modal_f4666c",
        tagPreview: "tagPreview_f4666c",
        tagText: "tagText_f4666c",
        subtitle: "subtitle_f4666c",
        content: "content_f4666c",
        previewSection: "previewSection_f4666c",
        chatPreview: "chatPreview_f4666c",
        userName: "userName_f4666c",
        previewText: "previewText_f4666c",
        fakeMessage: "fakeMessage_f4666c",
        divider: "divider_f4666c",
        settingSection: "settingSection_f4666c",
        postscript: "postscript_f4666c",
      };
    },
  },
]);
//# sourceMappingURL=93e412ee5e5ed1a75a1a.js.map
