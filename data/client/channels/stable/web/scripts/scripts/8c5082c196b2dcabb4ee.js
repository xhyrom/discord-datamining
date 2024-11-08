"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["63636"],
  {
    511385: function (e, t, a) {
      a.r(t), a(47120);
      var i = a(200651),
        s = a(192379),
        l = a(688619),
        n = a.n(l),
        r = a(442837),
        c = a(481060),
        d = a(313201),
        o = a(271383),
        x = a(430824),
        m = a(594174),
        v = a(931240),
        u = a(970606),
        g = a(979264),
        h = a(284019),
        f = a(308083),
        p = a(981631),
        N = a(388032),
        j = a(252642);
      t.default = (e) => {
        var t, a, l, S;
        let {
            guildId: _,
            tag: w,
            brandPrimaryColor: b,
            transitionState: T,
            onClose: k,
          } = e,
          C = (0, d.Dt)(),
          [P, z] = s.useState(!0),
          M = (0, r.e7)([x.Z], () => x.Z.getGuild(_)),
          Z = (0, r.e7)([m.default], () => m.default.getCurrentUser()),
          y = (0, r.e7)([o.ZP], () =>
            null != Z ? o.ZP.getMember(_, Z.id) : null,
          );
        if (
          (s.useEffect(() => {
            (0, u.dx)(_);
          }, [_]),
          null == M || null == Z || null == y)
        )
          return null;
        let A =
          null != b
            ? {
                background: "radial-gradient(circle at top, ".concat(
                  n()(b).alpha(0.3).hex(),
                  " 0%, transparent 50%)",
                ),
              }
            : void 0;
        return (0, i.jsx)(c.ModalRoot, {
          className: j.modal,
          transitionState: T,
          "aria-labelledby": C,
          size: c.ModalSize.SMALL,
          children: (0, i.jsxs)("div", {
            className: j.content,
            style: A,
            children: [
              (0, i.jsx)(g.aG, {
                guildId: _,
                clanTag: w,
                clanBadge:
                  null === (t = M.clan) || void 0 === t ? void 0 : t.badge,
                className: j.tagPreview,
                textClassName: j.tagText,
                textVariant: "heading-xxl/semibold",
                badgeSize: f.NC.SIZE_36,
              }),
              (0, i.jsx)(c.Heading, {
                variant: "heading-xxl/medium",
                children: N.intl.format(N.t.SQNe9v, { name: M.name }),
              }),
              (0, i.jsx)(c.Text, {
                className: j.subtitle,
                variant: "text-md/normal",
                children: N.intl.string(N.t.vhwmmp),
              }),
              (0, i.jsxs)("div", {
                className: j.previewSection,
                children: [
                  (0, i.jsxs)("div", {
                    className: j.chatPreview,
                    children: [
                      (0, i.jsx)(c.Avatar, {
                        src: Z.getAvatarURL(_, 40),
                        size: c.AvatarSizes.SIZE_40,
                        "aria-hidden": !0,
                      }),
                      (0, i.jsxs)("div", {
                        className: j.previewText,
                        children: [
                          (0, i.jsxs)("div", {
                            className: j.userName,
                            children: [
                              (0, i.jsx)(c.NameWithRole, {
                                className: j.userName,
                                name:
                                  null !== (l = y.nick) && void 0 !== l
                                    ? l
                                    : Z.username,
                                color:
                                  null !== (S = y.colorString) && void 0 !== S
                                    ? S
                                    : void 0,
                              }),
                              P &&
                                (0, i.jsx)(g.aG, {
                                  guildId: _,
                                  clanBadge:
                                    null === (a = M.clan) || void 0 === a
                                      ? void 0
                                      : a.badge,
                                  clanTag: w,
                                  badgeSize: f.NC.SIZE_12,
                                  textVariant: "text-xs/semibold",
                                }),
                            ],
                          }),
                          (0, i.jsx)("div", {
                            className: j.fakeMessage,
                            style: { width: "80%" },
                          }),
                          (0, i.jsx)("div", {
                            className: j.fakeMessage,
                            style: { width: "50%" },
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsx)("div", { className: j.divider }),
                  (0, i.jsxs)("div", {
                    className: j.settingSection,
                    children: [
                      (0, i.jsxs)("div", {
                        children: [
                          (0, i.jsx)(c.Text, {
                            variant: "text-md/normal",
                            color: "header-primary",
                            children: N.intl.string(N.t.nwNzVV),
                          }),
                          (0, i.jsx)(c.Text, {
                            variant: "text-xs/normal",
                            color: "text-muted",
                            children: N.intl.string(N.t.Dpl68P),
                          }),
                        ],
                      }),
                      (0, i.jsx)(c.Switch, {
                        onChange: () => z(!P),
                        checked: P,
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)(h.Z, {
                size: c.Button.Sizes.LARGE,
                themeColor: b,
                onClick: () => {
                  P && (0, v.nE)(_, P, p.Sbl.CLAN_SETUP_MODAL),
                    (0, u.B3)(_, P),
                    k();
                },
                children: (0, i.jsx)(c.Text, {
                  color: "none",
                  variant: "text-md/medium",
                  children: N.intl.string(N.t["3v6hfH"]),
                }),
              }),
              (0, i.jsx)(c.Text, {
                className: j.postscript,
                variant: "text-xs/normal",
                color: "header-secondary",
                children: N.intl.string(N.t.xs3yjY),
              }),
            ],
          }),
        });
      };
    },
    252642: function (e, t, a) {
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
//# sourceMappingURL=8c5082c196b2dcabb4ee.js.map
