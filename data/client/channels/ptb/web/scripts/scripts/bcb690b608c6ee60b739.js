"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["77578"],
  {
    845606: function (e, n, i) {
      i.d(n, {
        S: function () {
          return o;
        },
        _: function () {
          return l;
        },
      });
      let l = "Guild Welcome Screen",
        o = "hasClickedWelcomeEmojiPicker";
    },
    184782: function (e, n, i) {
      i.r(n), i(653041);
      var l = i(735250),
        o = i(470079),
        a = i(442837),
        s = i(481060),
        c = i(596454),
        t = i(471445),
        r = i(686546),
        d = i(313201),
        u = i(339085),
        m = i(633302),
        h = i(565138),
        _ = i(372769),
        p = i(703656),
        f = i(592125),
        x = i(430824),
        j = i(496675),
        C = i(259580),
        E = i(626135),
        N = i(524329),
        g = i(995532),
        I = i(845606),
        k = i(981631),
        Z = i(231338),
        S = i(689938),
        T = i(84011);
      let v = (e) => {
        var n;
        let { channelData: i, onClose: o, trackOptionClick: r } = e,
          d = (0, a.e7)([f.Z], () => f.Z.getChannel(i.channel_id)),
          h = (0, a.e7)(
            [j.Z],
            () => null != d && j.Z.can(Z.Pl.VIEW_CHANNEL, d),
          ),
          _ = (0, a.e7)(
            [u.ZP],
            () =>
              null != i.emoji_id ? u.ZP.getCustomEmojiById(i.emoji_id) : null,
            [i.emoji_id],
          ),
          x =
            null != i.emoji_name
              ? m.ZP.getByName(m.ZP.convertSurrogateToName(i.emoji_name, !1))
              : null,
          E = null !== (n = (0, t.KS)(d)) && void 0 !== n ? n : s.TextIcon;
        return null != d && h
          ? (0, l.jsxs)(s.Clickable, {
              className: T.optionContainer,
              onClick: () => {
                r(), o(), (0, p.XU)(d.guild_id, d.id);
              },
              children: [
                null != _ || null != x
                  ? (0, l.jsx)(c.Z, {
                      emojiName:
                        null != i.emoji_id
                          ? null == _
                            ? void 0
                            : _.name
                          : i.emoji_name,
                      animated: null != _ && _.animated,
                      emojiId: null == _ ? void 0 : _.id,
                      autoplay: !0,
                      className: T.optionEmoji,
                    })
                  : (0, l.jsx)(E, { className: T.channelIcon }),
                (0, l.jsxs)("div", {
                  className: T.optionTextContainer,
                  children: [
                    (0, l.jsx)(s.Text, {
                      variant: "text-md/normal",
                      className: T.channelDescription,
                      children: i.description,
                    }),
                    (0, l.jsxs)(s.Text, {
                      variant: "text-xs/normal",
                      color: "header-secondary",
                      children: [
                        (0, l.jsx)(E, {
                          className: T.channelTitleIcon,
                          size: "xxs",
                          color: "currentColor",
                        }),
                        (0, l.jsx)("span", { children: d.name }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsx)(C.Z, {
                  direction: C.Z.Directions.RIGHT,
                  className: T.optionArrow,
                }),
              ],
            })
          : null;
      };
      n.default = (e) => {
        var n;
        let { onClose: i, transitionState: c, guildId: t, isPreview: u } = e,
          m = (0, a.e7)([x.Z], () => x.Z.getGuild(t)),
          {
            welcomeScreen: p,
            fetching: f,
            hasError: j,
          } = (0, a.cj)([g.Z], () => ({
            welcomeScreen: g.Z.get(t),
            fetching: g.Z.isFetching(),
            hasError: g.Z.hasError(),
          })),
          C = (0, d.Dt)();
        o.useEffect(() => {
          null == p && (0, N.RM)(t);
        }, [t, p]),
          o.useEffect(() => {
            !1 === f && !0 === j && null == p && i();
          }, [f, j, i, p]),
          o.useEffect(() => {
            p === g.a && !1 === f && i();
          }, [i, p, f]),
          o.useEffect(() => {
            !0 !== u &&
              E.default.track(k.rMx.OPEN_MODAL, { type: I._, guild_id: t });
          }, [t, u]);
        let Z = o.useCallback(
          (e) => {
            var n;
            if (null == p || !0 === u) return;
            let i = [],
              l = [],
              o = !1;
            null === (n = p.welcome_channels) ||
              void 0 === n ||
              n.forEach((e) => {
                i.push(e.description),
                  l.push(e.channel_id),
                  null != e.emoji_id && (o = !0);
              }),
              E.default.track(k.rMx.GUILD_WELCOME_SCREEN_OPTION_SELECTED, {
                index: e,
                guild_id: t,
                options: i,
                options_channel_ids: l,
                guild_description: p.description,
                has_custom_emojis: o,
              });
          },
          [t, u, p],
        );
        return null == m
          ? null
          : null == p
            ? (0, l.jsx)(s.ModalRoot, {
                transitionState: c,
                className: T.main,
                "aria-label": S.Z.Messages.LOADING,
                children: (0, l.jsx)(s.Spinner, {
                  type: s.Spinner.Type.SPINNING_CIRCLE,
                }),
              })
            : (0, l.jsxs)(s.ModalRoot, {
                transitionState: c,
                className: T.main,
                "aria-labelledby": C,
                children: [
                  (0, l.jsx)(s.ModalCloseButton, {
                    onClick: i,
                    className: T.close,
                  }),
                  (0, l.jsx)(r.ZP, {
                    mask: r.ZP.Masks.SQUIRCLE,
                    width: 64,
                    height: 64,
                    className: T.guildIcon,
                    children: (0, l.jsx)(h.Z, {
                      size: h.Z.Sizes.LARGER,
                      guild: m,
                      active: !0,
                      animate: !0,
                      tabIndex: -1,
                    }),
                  }),
                  (0, l.jsx)(s.Heading, {
                    variant: "heading-xl/semibold",
                    className: T.header,
                    id: C,
                    children: S.Z.Messages.WELCOME_SCREEN_TITLE.format({
                      guildName: m.name,
                      guildNameHook: (e, n) =>
                        (0, l.jsxs)(
                          "span",
                          {
                            children: [
                              (0, l.jsx)(_.Z, {
                                guild: m,
                                className: T.headerGuildBadge,
                                flowerStarClassName: T.flowerStar,
                                tooltipColor: s.Tooltip.Colors.PRIMARY,
                              }),
                              (0, l.jsx)("strong", {
                                className: T.headerGuildName,
                                children: e,
                              }),
                            ],
                          },
                          n,
                        ),
                    }),
                  }),
                  null != p.description
                    ? (0, l.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        className: T.guildDescription,
                        children: p.description,
                      })
                    : null,
                  (0, l.jsx)(s.FormTitle, {
                    className: T.choiceHeader,
                    children: S.Z.Messages.WELCOME_SCREEN_CHOICE_HEADER,
                  }),
                  (0, l.jsx)("div", {
                    className: T.options,
                    children:
                      null === (n = p.welcome_channels) || void 0 === n
                        ? void 0
                        : n.map((e, n) =>
                            (0, l.jsx)(
                              v,
                              {
                                channelData: e,
                                trackOptionClick: () => Z(n),
                                onClose: i,
                              },
                              "".concat(e.channel_id, "-").concat(n),
                            ),
                          ),
                  }),
                  (0, l.jsx)(s.Button, {
                    look: s.Button.Looks.LINK,
                    color: T.skipColor,
                    className: T.skip,
                    onClick: i,
                    children: S.Z.Messages.WELCOME_SCREEN_SKIP,
                  }),
                ],
              });
      };
    },
    84011: function (e, n, i) {
      e.exports = {
        headerGuildName: "headerGuildName_e3f8c2",
        headerGuildBadge: "headerGuildBadge_e3f8c2",
        flowerStar: "flowerStar_e3f8c2",
        main: "main_e3f8c2",
        close: "close_e3f8c2",
        guildIcon: "guildIcon_e3f8c2",
        header: "header_e3f8c2",
        guildDescription: "guildDescription_e3f8c2",
        choiceHeader: "choiceHeader_e3f8c2",
        options: "options_e3f8c2",
        optionContainer: "optionContainer_e3f8c2",
        optionTextContainer: "optionTextContainer_e3f8c2",
        optionArrow: "optionArrow_e3f8c2",
        optionEmoji: "optionEmoji_e3f8c2",
        channelIcon: "channelIcon_e3f8c2",
        channelTitleIcon: "channelTitleIcon_e3f8c2",
        channelDescription: "channelDescription_e3f8c2",
        skip: "skip_e3f8c2",
        skipColor: "skipColor_e3f8c2",
      };
    },
  },
]);
//# sourceMappingURL=bcb690b608c6ee60b739.js.map
