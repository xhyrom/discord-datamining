"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90542"],
  {
    845606: function (e, l, n) {
      n.d(l, {
        S: function () {
          return i;
        },
        _: function () {
          return a;
        },
      });
      let a = "Guild Welcome Screen",
        i = "hasClickedWelcomeEmojiPicker";
    },
    184782: function (e, l, n) {
      n.r(l), n(653041);
      var a = n(735250),
        i = n(470079),
        s = n(442837),
        o = n(481060),
        t = n(596454),
        c = n(471445),
        r = n(686546),
        d = n(313201),
        u = n(339085),
        m = n(633302),
        h = n(565138),
        j = n(372769),
        x = n(703656),
        E = n(592125),
        _ = n(430824),
        p = n(496675),
        N = n(259580),
        C = n(626135),
        g = n(524329),
        Z = n(995532),
        k = n(845606),
        f = n(981631),
        I = n(231338),
        S = n(689938),
        v = n(84011);
      let M = (e) => {
        var l;
        let { channelData: n, onClose: i, trackOptionClick: r } = e,
          d = (0, s.e7)([E.Z], () => E.Z.getChannel(n.channel_id)),
          h = (0, s.e7)(
            [p.Z],
            () => null != d && p.Z.can(I.Pl.VIEW_CHANNEL, d),
          ),
          j = (0, s.e7)(
            [u.ZP],
            () =>
              null != n.emoji_id ? u.ZP.getCustomEmojiById(n.emoji_id) : null,
            [n.emoji_id],
          ),
          _ =
            null != n.emoji_name
              ? m.ZP.getByName(m.ZP.convertSurrogateToName(n.emoji_name, !1))
              : null,
          C = null !== (l = (0, c.KS)(d)) && void 0 !== l ? l : o.TextIcon;
        return null != d && h
          ? (0, a.jsxs)(o.Clickable, {
              className: v.optionContainer,
              onClick: () => {
                r(), i(), (0, x.XU)(d.guild_id, d.id);
              },
              children: [
                null != j || null != _
                  ? (0, a.jsx)(t.Z, {
                      emojiName:
                        null != n.emoji_id
                          ? null == j
                            ? void 0
                            : j.name
                          : n.emoji_name,
                      animated: null != j && j.animated,
                      emojiId: null == j ? void 0 : j.id,
                      autoplay: !0,
                      className: v.optionEmoji,
                    })
                  : (0, a.jsx)(C, { className: v.channelIcon }),
                (0, a.jsxs)("div", {
                  className: v.optionTextContainer,
                  children: [
                    (0, a.jsx)(o.Text, {
                      variant: "text-md/normal",
                      className: v.channelDescription,
                      children: n.description,
                    }),
                    (0, a.jsxs)(o.Text, {
                      variant: "text-xs/normal",
                      color: "header-secondary",
                      children: [
                        (0, a.jsx)(C, {
                          className: v.channelTitleIcon,
                          size: "xxs",
                          color: "currentColor",
                        }),
                        (0, a.jsx)("span", { children: d.name }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)(N.Z, {
                  direction: N.Z.Directions.RIGHT,
                  className: v.optionArrow,
                }),
              ],
            })
          : null;
      };
      l.default = (e) => {
        var l;
        let { onClose: n, transitionState: t, guildId: c, isPreview: u } = e,
          m = (0, s.e7)([_.Z], () => _.Z.getGuild(c)),
          {
            welcomeScreen: x,
            fetching: E,
            hasError: p,
          } = (0, s.cj)([Z.Z], () => ({
            welcomeScreen: Z.Z.get(c),
            fetching: Z.Z.isFetching(),
            hasError: Z.Z.hasError(),
          })),
          N = (0, d.Dt)();
        i.useEffect(() => {
          null == x && (0, g.RM)(c);
        }, [c, x]),
          i.useEffect(() => {
            !1 === E && !0 === p && null == x && n();
          }, [E, p, n, x]),
          i.useEffect(() => {
            x === Z.a && !1 === E && n();
          }, [n, x, E]),
          i.useEffect(() => {
            !0 !== u &&
              C.default.track(f.rMx.OPEN_MODAL, { type: k._, guild_id: c });
          }, [c, u]);
        let I = i.useCallback(
          (e) => {
            var l;
            if (null == x || !0 === u) return;
            let n = [],
              a = [],
              i = !1;
            null === (l = x.welcome_channels) ||
              void 0 === l ||
              l.forEach((e) => {
                n.push(e.description),
                  a.push(e.channel_id),
                  null != e.emoji_id && (i = !0);
              }),
              C.default.track(f.rMx.GUILD_WELCOME_SCREEN_OPTION_SELECTED, {
                index: e,
                guild_id: c,
                options: n,
                options_channel_ids: a,
                guild_description: x.description,
                has_custom_emojis: i,
              });
          },
          [c, u, x],
        );
        return null == m
          ? null
          : null == x
            ? (0, a.jsx)(o.ModalRoot, {
                transitionState: t,
                className: v.main,
                "aria-label": S.Z.Messages.LOADING,
                children: (0, a.jsx)(o.Spinner, {
                  type: o.Spinner.Type.SPINNING_CIRCLE,
                }),
              })
            : (0, a.jsxs)(o.ModalRoot, {
                transitionState: t,
                className: v.main,
                "aria-labelledby": N,
                children: [
                  (0, a.jsx)(o.ModalCloseButton, {
                    onClick: n,
                    className: v.close,
                  }),
                  (0, a.jsx)(r.ZP, {
                    mask: r.ZP.Masks.SQUIRCLE,
                    width: 64,
                    height: 64,
                    className: v.guildIcon,
                    children: (0, a.jsx)(h.Z, {
                      size: h.Z.Sizes.LARGER,
                      guild: m,
                      active: !0,
                      animate: !0,
                      tabIndex: -1,
                    }),
                  }),
                  (0, a.jsx)(o.Heading, {
                    variant: "heading-xl/semibold",
                    className: v.header,
                    id: N,
                    children: S.Z.Messages.WELCOME_SCREEN_TITLE.format({
                      guildName: m.name,
                      guildNameHook: (e, l) =>
                        (0, a.jsxs)(
                          "span",
                          {
                            children: [
                              (0, a.jsx)(j.Z, {
                                guild: m,
                                className: v.headerGuildBadge,
                                flowerStarClassName: v.flowerStar,
                                tooltipColor: o.Tooltip.Colors.PRIMARY,
                              }),
                              (0, a.jsx)("strong", {
                                className: v.headerGuildName,
                                children: e,
                              }),
                            ],
                          },
                          l,
                        ),
                    }),
                  }),
                  null != x.description
                    ? (0, a.jsx)(o.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        className: v.guildDescription,
                        children: x.description,
                      })
                    : null,
                  (0, a.jsx)(o.FormTitle, {
                    className: v.choiceHeader,
                    children: S.Z.Messages.WELCOME_SCREEN_CHOICE_HEADER,
                  }),
                  (0, a.jsx)("div", {
                    className: v.options,
                    children:
                      null === (l = x.welcome_channels) || void 0 === l
                        ? void 0
                        : l.map((e, l) =>
                            (0, a.jsx)(
                              M,
                              {
                                channelData: e,
                                trackOptionClick: () => I(l),
                                onClose: n,
                              },
                              "".concat(e.channel_id, "-").concat(l),
                            ),
                          ),
                  }),
                  (0, a.jsx)(o.Button, {
                    look: o.Button.Looks.LINK,
                    color: v.skipColor,
                    className: v.skip,
                    onClick: n,
                    children: S.Z.Messages.WELCOME_SCREEN_SKIP,
                  }),
                ],
              });
      };
    },
  },
]);
//# sourceMappingURL=07f9667c0ca0c64ebd17.js.map
