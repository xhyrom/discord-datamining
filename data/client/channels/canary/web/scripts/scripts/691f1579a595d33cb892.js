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
      var l = i(200651),
        o = i(192379),
        a = i(442837),
        c = i(481060),
        t = i(596454),
        s = i(471445),
        r = i(686546),
        d = i(313201),
        u = i(339085),
        m = i(633302),
        h = i(565138),
        p = i(372769),
        _ = i(703656),
        f = i(592125),
        j = i(430824),
        x = i(496675),
        N = i(259580),
        C = i(626135),
        g = i(524329),
        k = i(995532),
        E = i(845606),
        I = i(981631),
        Z = i(231338),
        v = i(388032),
        S = i(189374);
      let T = (e) => {
        var n;
        let { channelData: i, onClose: o, trackOptionClick: r } = e,
          d = (0, a.e7)([f.Z], () => f.Z.getChannel(i.channel_id)),
          h = (0, a.e7)(
            [x.Z],
            () => null != d && x.Z.can(Z.Pl.VIEW_CHANNEL, d),
          ),
          p = (0, a.e7)(
            [u.ZP],
            () =>
              null != i.emoji_id ? u.ZP.getCustomEmojiById(i.emoji_id) : null,
            [i.emoji_id],
          ),
          j =
            null != i.emoji_name
              ? m.ZP.getByName(m.ZP.convertSurrogateToName(i.emoji_name, !1))
              : null,
          C = null !== (n = (0, s.KS)(d)) && void 0 !== n ? n : c.TextIcon;
        return null != d && h
          ? (0, l.jsxs)(c.Clickable, {
              className: S.optionContainer,
              onClick: () => {
                r(), o(), (0, _.XU)(d.guild_id, d.id);
              },
              children: [
                null != p || null != j
                  ? (0, l.jsx)(t.Z, {
                      emojiName:
                        null != i.emoji_id
                          ? null == p
                            ? void 0
                            : p.name
                          : i.emoji_name,
                      animated: null != p && p.animated,
                      emojiId: null == p ? void 0 : p.id,
                      autoplay: !0,
                      className: S.optionEmoji,
                    })
                  : (0, l.jsx)(C, { className: S.channelIcon }),
                (0, l.jsxs)("div", {
                  className: S.optionTextContainer,
                  children: [
                    (0, l.jsx)(c.Text, {
                      variant: "text-md/normal",
                      className: S.channelDescription,
                      children: i.description,
                    }),
                    (0, l.jsxs)(c.Text, {
                      variant: "text-xs/normal",
                      color: "header-secondary",
                      children: [
                        (0, l.jsx)(C, {
                          className: S.channelTitleIcon,
                          size: "xxs",
                          color: "currentColor",
                        }),
                        (0, l.jsx)("span", { children: d.name }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsx)(N.Z, {
                  direction: N.Z.Directions.RIGHT,
                  className: S.optionArrow,
                }),
              ],
            })
          : null;
      };
      n.default = (e) => {
        var n;
        let { onClose: i, transitionState: t, guildId: s, isPreview: u } = e,
          m = (0, a.e7)([j.Z], () => j.Z.getGuild(s)),
          {
            welcomeScreen: _,
            fetching: f,
            hasError: x,
          } = (0, a.cj)([k.Z], () => ({
            welcomeScreen: k.Z.get(s),
            fetching: k.Z.isFetching(),
            hasError: k.Z.hasError(),
          })),
          N = (0, d.Dt)();
        o.useEffect(() => {
          null == _ && (0, g.RM)(s);
        }, [s, _]),
          o.useEffect(() => {
            !1 === f && !0 === x && null == _ && i();
          }, [f, x, i, _]),
          o.useEffect(() => {
            _ === k.a && !1 === f && i();
          }, [i, _, f]),
          o.useEffect(() => {
            !0 !== u &&
              C.default.track(I.rMx.OPEN_MODAL, { type: E._, guild_id: s });
          }, [s, u]);
        let Z = o.useCallback(
          (e) => {
            var n;
            if (null == _ || !0 === u) return;
            let i = [],
              l = [],
              o = !1;
            null === (n = _.welcome_channels) ||
              void 0 === n ||
              n.forEach((e) => {
                i.push(e.description),
                  l.push(e.channel_id),
                  null != e.emoji_id && (o = !0);
              }),
              C.default.track(I.rMx.GUILD_WELCOME_SCREEN_OPTION_SELECTED, {
                index: e,
                guild_id: s,
                options: i,
                options_channel_ids: l,
                guild_description: _.description,
                has_custom_emojis: o,
              });
          },
          [s, u, _],
        );
        return null == m
          ? null
          : null == _
            ? (0, l.jsx)(c.ModalRoot, {
                transitionState: t,
                className: S.main,
                "aria-label": v.intl.string(v.t.ZTNur6),
                children: (0, l.jsx)(c.Spinner, {
                  type: c.Spinner.Type.SPINNING_CIRCLE,
                }),
              })
            : (0, l.jsxs)(c.ModalRoot, {
                transitionState: t,
                className: S.main,
                "aria-labelledby": N,
                children: [
                  (0, l.jsx)(c.ModalCloseButton, {
                    onClick: i,
                    className: S.close,
                  }),
                  (0, l.jsx)(r.ZP, {
                    mask: r.ZP.Masks.SQUIRCLE,
                    width: 64,
                    height: 64,
                    className: S.guildIcon,
                    children: (0, l.jsx)(h.Z, {
                      size: h.Z.Sizes.LARGER,
                      guild: m,
                      active: !0,
                      animate: !0,
                      tabIndex: -1,
                    }),
                  }),
                  (0, l.jsx)(c.Heading, {
                    variant: "heading-xl/semibold",
                    className: S.header,
                    id: N,
                    children: v.intl.format(v.t["0aydCA"], {
                      guildName: m.name,
                      guildNameHook: (e, n) =>
                        (0, l.jsxs)(
                          "span",
                          {
                            children: [
                              (0, l.jsx)(p.Z, {
                                guild: m,
                                className: S.headerGuildBadge,
                                flowerStarClassName: S.flowerStar,
                                tooltipColor: c.Tooltip.Colors.PRIMARY,
                              }),
                              (0, l.jsx)("strong", {
                                className: S.headerGuildName,
                                children: e,
                              }),
                            ],
                          },
                          n,
                        ),
                    }),
                  }),
                  null != _.description
                    ? (0, l.jsx)(c.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        className: S.guildDescription,
                        children: _.description,
                      })
                    : null,
                  (0, l.jsx)(c.FormTitle, {
                    className: S.choiceHeader,
                    children: v.intl.string(v.t["haj5+v"]),
                  }),
                  (0, l.jsx)("div", {
                    className: S.options,
                    children:
                      null === (n = _.welcome_channels) || void 0 === n
                        ? void 0
                        : n.map((e, n) =>
                            (0, l.jsx)(
                              T,
                              {
                                channelData: e,
                                trackOptionClick: () => Z(n),
                                onClose: i,
                              },
                              "".concat(e.channel_id, "-").concat(n),
                            ),
                          ),
                  }),
                  (0, l.jsx)(c.Button, {
                    look: c.Button.Looks.LINK,
                    color: S.skipColor,
                    className: S.skip,
                    onClick: i,
                    children: v.intl.string(v.t["jizr8/"]),
                  }),
                ],
              });
      };
    },
    189374: function (e, n, i) {
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
//# sourceMappingURL=691f1579a595d33cb892.js.map
