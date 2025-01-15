"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["90542"],
  {
    845606: function (e, l, n) {
      n.d(l, {
        S: function () {
          return a;
        },
        _: function () {
          return i;
        },
      });
      let i = "Guild Welcome Screen",
        a = "hasClickedWelcomeEmojiPicker";
    },
    184782: function (e, l, n) {
      n.r(l), n(653041);
      var i = n(200651),
        a = n(192379),
        o = n(442837),
        s = n(481060),
        t = n(596454),
        c = n(471445),
        r = n(686546),
        d = n(313201),
        u = n(339085),
        m = n(633302),
        h = n(565138),
        j = n(372769),
        x = n(703656),
        p = n(592125),
        N = n(430824),
        _ = n(496675),
        C = n(259580),
        g = n(626135),
        E = n(524329),
        Z = n(995532),
        k = n(845606),
        f = n(981631),
        v = n(231338),
        I = n(388032),
        S = n(189374);
      let T = (e) => {
        var l;
        let { channelData: n, onClose: a, trackOptionClick: r } = e,
          d = (0, o.e7)([p.Z], () => p.Z.getChannel(n.channel_id)),
          h = (0, o.e7)(
            [_.Z],
            () => null != d && _.Z.can(v.Pl.VIEW_CHANNEL, d),
          ),
          j = (0, o.e7)(
            [u.ZP],
            () =>
              null != n.emoji_id ? u.ZP.getCustomEmojiById(n.emoji_id) : null,
            [n.emoji_id],
          ),
          N =
            null != n.emoji_name
              ? m.ZP.getByName(m.ZP.convertSurrogateToName(n.emoji_name, !1))
              : null,
          g = null !== (l = (0, c.KS)(d)) && void 0 !== l ? l : s.TextIcon;
        return null != d && h
          ? (0, i.jsxs)(s.Clickable, {
              className: S.optionContainer,
              onClick: () => {
                r(), a(), (0, x.XU)(d.guild_id, d.id);
              },
              children: [
                null != j || null != N
                  ? (0, i.jsx)(t.Z, {
                      emojiName:
                        null != n.emoji_id
                          ? null == j
                            ? void 0
                            : j.name
                          : n.emoji_name,
                      animated: null != j && j.animated,
                      emojiId: null == j ? void 0 : j.id,
                      autoplay: !0,
                      className: S.optionEmoji,
                    })
                  : (0, i.jsx)(g, { className: S.channelIcon }),
                (0, i.jsxs)("div", {
                  className: S.optionTextContainer,
                  children: [
                    (0, i.jsx)(s.Text, {
                      variant: "text-md/normal",
                      className: S.channelDescription,
                      children: n.description,
                    }),
                    (0, i.jsxs)(s.Text, {
                      variant: "text-xs/normal",
                      color: "header-secondary",
                      children: [
                        (0, i.jsx)(g, {
                          className: S.channelTitleIcon,
                          size: "xxs",
                          color: "currentColor",
                        }),
                        (0, i.jsx)("span", { children: d.name }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsx)(C.Z, {
                  direction: C.Z.Directions.RIGHT,
                  className: S.optionArrow,
                }),
              ],
            })
          : null;
      };
      l.default = (e) => {
        var l;
        let { onClose: n, transitionState: t, guildId: c, isPreview: u } = e,
          m = (0, o.e7)([N.Z], () => N.Z.getGuild(c)),
          {
            welcomeScreen: x,
            fetching: p,
            hasError: _,
          } = (0, o.cj)([Z.Z], () => ({
            welcomeScreen: Z.Z.get(c),
            fetching: Z.Z.isFetching(),
            hasError: Z.Z.hasError(),
          })),
          C = (0, d.Dt)();
        a.useEffect(() => {
          null == x && (0, E.RM)(c);
        }, [c, x]),
          a.useEffect(() => {
            !1 === p && !0 === _ && null == x && n();
          }, [p, _, n, x]),
          a.useEffect(() => {
            x === Z.a && !1 === p && n();
          }, [n, x, p]),
          a.useEffect(() => {
            !0 !== u &&
              g.default.track(f.rMx.OPEN_MODAL, { type: k._, guild_id: c });
          }, [c, u]);
        let v = a.useCallback(
          (e) => {
            var l;
            if (null == x || !0 === u) return;
            let n = [],
              i = [],
              a = !1;
            null === (l = x.welcome_channels) ||
              void 0 === l ||
              l.forEach((e) => {
                n.push(e.description),
                  i.push(e.channel_id),
                  null != e.emoji_id && (a = !0);
              }),
              g.default.track(f.rMx.GUILD_WELCOME_SCREEN_OPTION_SELECTED, {
                index: e,
                guild_id: c,
                options: n,
                options_channel_ids: i,
                guild_description: x.description,
                has_custom_emojis: a,
              });
          },
          [c, u, x],
        );
        return null == m
          ? null
          : null == x
            ? (0, i.jsx)(s.ModalRoot, {
                transitionState: t,
                className: S.main,
                "aria-label": I.intl.string(I.t.ZTNur6),
                children: (0, i.jsx)(s.Spinner, {
                  type: s.Spinner.Type.SPINNING_CIRCLE,
                }),
              })
            : (0, i.jsxs)(s.ModalRoot, {
                transitionState: t,
                className: S.main,
                "aria-labelledby": C,
                children: [
                  (0, i.jsx)(s.ModalCloseButton, {
                    onClick: n,
                    className: S.close,
                  }),
                  (0, i.jsx)(r.ZP, {
                    mask: r.ZP.Masks.SQUIRCLE,
                    width: 64,
                    height: 64,
                    className: S.guildIcon,
                    children: (0, i.jsx)(h.Z, {
                      size: h.Z.Sizes.LARGER,
                      guild: m,
                      active: !0,
                      animate: !0,
                      tabIndex: -1,
                    }),
                  }),
                  (0, i.jsx)(s.Heading, {
                    variant: "heading-xl/semibold",
                    className: S.header,
                    id: C,
                    children: I.intl.format(I.t["0aydCA"], {
                      guildName: m.name,
                      guildNameHook: (e, l) =>
                        (0, i.jsxs)(
                          "span",
                          {
                            children: [
                              (0, i.jsx)(j.Z, {
                                guild: m,
                                className: S.headerGuildBadge,
                                flowerStarClassName: S.flowerStar,
                                tooltipColor: s.Tooltip.Colors.PRIMARY,
                              }),
                              (0, i.jsx)("strong", {
                                className: S.headerGuildName,
                                children: e,
                              }),
                            ],
                          },
                          l,
                        ),
                    }),
                  }),
                  null != x.description
                    ? (0, i.jsx)(s.Text, {
                        variant: "text-sm/normal",
                        color: "header-secondary",
                        className: S.guildDescription,
                        children: x.description,
                      })
                    : null,
                  (0, i.jsx)(s.FormTitle, {
                    className: S.choiceHeader,
                    children: I.intl.string(I.t["haj5+v"]),
                  }),
                  (0, i.jsx)("div", {
                    className: S.options,
                    children:
                      null === (l = x.welcome_channels) || void 0 === l
                        ? void 0
                        : l.map((e, l) =>
                            (0, i.jsx)(
                              T,
                              {
                                channelData: e,
                                trackOptionClick: () => v(l),
                                onClose: n,
                              },
                              "".concat(e.channel_id, "-").concat(l),
                            ),
                          ),
                  }),
                  (0, i.jsx)(s.Button, {
                    look: s.Button.Looks.LINK,
                    color: S.skipColor,
                    className: S.skip,
                    onClick: n,
                    children: I.intl.string(I.t["jizr8/"]),
                  }),
                ],
              });
      };
    },
  },
]);
//# sourceMappingURL=ebc43cdcfc0434cb0e51.js.map
