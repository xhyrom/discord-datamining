"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["48923"],
  {
    763610: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return c;
        },
      });
      var n = t(735250),
        r = t(470079),
        a = t(120356),
        i = t.n(a),
        l = t(481060),
        o = t(53281),
        d = t(914530);
      function c(e) {
        let {
            filename: s,
            className: t,
            filters: a,
            buttonText: c,
            placeholder: u,
            onFileSelect: m,
          } = e,
          h = r.useRef(null);
        return (0, n.jsxs)("div", {
          className: i()(t, d.fileUpload),
          children: [
            (0, n.jsx)("input", {
              className: d.fileUploadInput,
              tabIndex: -1,
              readOnly: !0,
              placeholder: u,
              type: "text",
              value: s,
            }),
            (0, n.jsxs)(l.Button, {
              size: l.Button.Sizes.MIN,
              className: d.fileUploadButton,
              children: [
                c,
                (0, n.jsx)(o.Z, {
                  ref: h,
                  tabIndex: -1,
                  onChange: (e) => {
                    var s;
                    m(
                      null === (s = e.currentTarget.files) || void 0 === s
                        ? void 0
                        : s[0],
                    );
                  },
                  multiple: !1,
                  filters: a,
                }),
              ],
            }),
          ],
        });
      }
    },
    130653: function (e, s, t) {
      t.d(s, {
        Z: function () {
          return a;
        },
      });
      var n = t(735250);
      let r = t(470079).createContext(!1);
      function a(e) {
        return (0, n.jsx)(r.Provider, { value: !0, children: e.children });
      }
    },
    478977: function (e, s, t) {
      var n = t(735250);
      t(470079);
      var r = t(866442),
        a = t(481060),
        i = t(720778);
      s.Z = function (e) {
        let { colorKey: s, value: t, onChange: l, title: o } = e;
        return (0, n.jsxs)(a.FormItem, {
          children: [
            (0, n.jsx)(a.FormTitle, { tag: a.FormTitleTags.H5, children: o }),
            (0, n.jsx)(a.Popout, {
              renderPopout: (e) =>
                (0, n.jsx)(a.CustomColorPicker, {
                  ...e,
                  value: t,
                  onChange: (e) => l(s, (0, r.Rf)(e)),
                }),
              children: (e) =>
                (0, n.jsx)(a.Clickable, {
                  ...e,
                  tag: "span",
                  "aria-label": "Select a color",
                  className: i.swatchContainer,
                  style: { backgroundColor: t },
                  children: (0, n.jsx)(a.EyeDropperIcon, {
                    size: "xs",
                    color: "currentColor",
                    className: i.swatchIcon,
                  }),
                }),
            }),
          ],
        });
      };
    },
    456799: function (e, s, t) {
      var n = t(735250);
      t(470079);
      var r = t(120356),
        a = t.n(r),
        i = t(481060),
        l = t(720778);
      s.Z = function (e) {
        let { children: s, withBorder: t = !1 } = e;
        return (0, n.jsx)(i.FocusBlock, {
          children: (0, n.jsx)(i.Card, {
            className: a()(l.componentPreviewWrapper, {
              [l.componentPreviewWrapperBordered]: t,
            }),
            outline: t,
            children: (0, n.jsx)("div", {
              className: l.componentPreview,
              onClickCapture: function (e) {
                e.stopPropagation();
              },
              children: s,
            }),
          }),
        });
      };
    },
    210851: function (e, s, t) {
      t(47120), t(315314), t(610138), t(216116), t(78328), t(815648);
      var n = t(735250),
        r = t(470079),
        a = t(481060),
        i = t(763610),
        l = t(720778);
      s.Z = function (e) {
        var s, t;
        let {
            assetKey: o,
            filters: d,
            initialValue: c,
            onFileChange: u,
            title: m,
          } = e,
          [h, g] = r.useState(null),
          x = r.useRef(null);
        return (
          r.useEffect(
            () => () => {
              null != x.current && URL.revokeObjectURL(x.current);
            },
            [],
          ),
          (0, n.jsxs)(a.FormItem, {
            children: [
              (0, n.jsx)(a.FormTitle, {
                tag: a.FormTitleTags.H5,
                children: (0, n.jsxs)("div", {
                  className: l.headingWithTooltip,
                  children: [
                    m,
                    (0, n.jsx)(a.Tooltip, {
                      text: "Supported asset formats: ".concat(d.join(", ")),
                      children: (e) =>
                        (0, n.jsx)(a.CircleInformationIcon, {
                          size: "xs",
                          ...e,
                        }),
                    }),
                  ],
                }),
              }),
              (0, n.jsx)(i.Z, {
                filename:
                  null !==
                    (t =
                      null !== (s = null == h ? void 0 : h.name) && void 0 !== s
                        ? s
                        : c) && void 0 !== t
                    ? t
                    : "",
                filters: [{ name: m, extensions: d }],
                buttonText: "Browse",
                placeholder: "Select an asset",
                onFileSelect: function (e) {
                  if ((g(null != e ? e : null), null == e)) return;
                  let s = URL.createObjectURL(e);
                  x.current = s;
                  let t = new URL(s);
                  t.searchParams.append("mimetype", e.type),
                    t.searchParams.append("name", e.name),
                    u(o, t.toString());
                },
              }),
            ],
          })
        );
      };
    },
    602683: function (e, s, t) {
      t(47120);
      var n = t(735250),
        r = t(470079),
        a = t(481060);
      s.Z = function (e) {
        let { assetKey: s, initialValue: t, onMessageChange: i, title: l } = e,
          [o, d] = r.useState("");
        return (
          r.useEffect(() => {
            d(null != t ? t : "");
          }, [t]),
          (0, n.jsxs)(a.FormItem, {
            children: [
              (0, n.jsx)(a.FormTitle, { tag: a.FormTitleTags.H5, children: l }),
              (0, n.jsx)(a.FormText, {
                children: (0, n.jsx)(a.TextInput, {
                  value: o,
                  onChange: function (e) {
                    d(e), i(s, e);
                  },
                }),
              }),
            ],
          })
        );
      };
    },
    916028: function (e, s, t) {
      t(47120);
      var n = t(735250);
      t(470079);
      var r = t(481060),
        a = t(113434);
      s.Z = function (e) {
        let { onSelect: s, quest: t } = e,
          { quests: i } = (0, a.J2)({ fetchPolicy: "cache-and-network" }),
          l = [
            { label: "NONE", value: null },
            ...i.map((e) => ({ label: e.config.messages.questName, value: e })),
          ];
        return (0, n.jsxs)(r.FormItem, {
          children: [
            (0, n.jsx)(r.FormTitle, {
              tag: r.FormTitleTags.H5,
              children: "Prefill with Quest",
            }),
            (0, n.jsx)(r.FormText, {
              children: (0, n.jsx)(r.Select, {
                "aria-label": "Prefill Quest",
                options: l,
                isSelected: (e) =>
                  (null == e ? void 0 : e.id) === (null == t ? void 0 : t.id),
                select: s,
                serialize: String,
              }),
            }),
          ],
        });
      };
    },
    652380: function (e, s, t) {
      t.d(s, {
        b: function () {
          return Z;
        },
      }),
        t(47120),
        t(627341);
      var n = t(735250),
        r = t(470079),
        a = t(278074),
        i = t(754700),
        l = t(887003),
        o = t(742635),
        d = t(458708),
        c = t(481060),
        u = t(70956),
        m = t(497505),
        h = t(918701),
        g = t(210724),
        x = t(130653),
        f = t(415104),
        v = t(78826),
        j = t(37303),
        p = t(134483),
        C = t(683650),
        S = t(920916),
        T = t(341907),
        w = t(478977),
        E = t(456799),
        N = t(210851),
        y = t(602683),
        I = t(916028),
        P = t(815183),
        b = t(899457),
        O = t(720778);
      function R(e, s, t) {
        return (
          s in e
            ? Object.defineProperty(e, s, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[s] = t),
          e
        );
      }
      let D = ["svg", "png", "gif", "webp"],
        F = [...D, "jpg", "jpeg"],
        B = Array.from(new Set([...F, "gif", "mp4", "webm"]));
      function Z(e) {
        var s, t;
        return {
          code: "PREVIEW-MODE-CODE",
          tier: 0,
          platform: m.y$.CROSS_PLATFORM,
          userId: "123",
          questId: e.id,
          claimedAt:
            null !==
              (t =
                null === (s = e.userStatus) || void 0 === s
                  ? void 0
                  : s.claimedAt) && void 0 !== t
              ? t
              : "",
        };
      }
      function L() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          {
            streamProgressSeconds: s = 0,
            completedAt: t = null,
            enrolledAt: n = null,
            claimedAt: r = null,
          } = e;
        return {
          userId: "123",
          questId: "1193992107035983872",
          enrolledAt: n,
          completedAt: t,
          claimedAt: r,
          claimedTier: null,
          lastStreamHeartbeatAt: null,
          streamProgressSeconds: s,
          dismissedQuestContent: 0,
          progress: {},
        };
      }
      let A = "1193992107035983872",
        M = {
          id: A,
          preview: !0,
          config: {
            id: A,
            configVersion: 2,
            startsAt: "2024-01-01T00:00:00+00:00",
            expiresAt: "2030-01-01T00:00:00+00:00",
            application: {
              link: "https://discord.com/",
              id: "123",
              name: "Sky Runners",
            },
            messages: {
              questName: "Sky Runners",
              gameTitle: "Sky Runners",
              gamePublisher: "Discord",
            },
            colors: { primary: "#B377F3", secondary: "#5865F2" },
            rewardsConfig: {
              assignmentMethod: 1,
              rewards: [
                {
                  skuId: "",
                  asset: "reward.png",
                  assetVideo: null,
                  type: l.w.REWARD_CODE,
                  messages: {
                    name: "Orange Buddy Jetpack",
                    nameWithArticle: "an Orange Buddy Jetpack",
                    redemptionInstructionsByPlatform: {
                      0: "This code can be used on any platform!",
                      1: "Redeem your code on your Xbox.",
                      2: "Redeem your code on your Playstation.",
                      3: "Redeem your code on your Switch.",
                      4: "Redeem your code on your PC.",
                    },
                  },
                },
              ],
              rewardsExpireAt: "2030-01-01T00:00:00+00:00",
              platforms: [0, 4, 2, 3, 1],
            },
            assets: {
              hero: "hero.png",
              heroVideo: null,
              questBarHero: "quests_bar_hero.webm",
              questBarHeroVideo: null,
              gameTile: "game_tile.png",
              logotype: "game_logotype.png",
            },
            taskConfig: {
              type: o.L.FIRST_PARTY,
              joinOperator: d.r.AND,
              tasks: {
                [i.X.PLAY_ON_DESKTOP]: {
                  eventName: i.X.PLAY_ON_DESKTOP,
                  target: 300,
                  externalIds: [],
                },
              },
            },
            features: [],
          },
          userStatus: null,
          targetedContent: [],
        };
      function H() {
        var e, s, t, i, l;
        let [o, d] = r.useState(M),
          [R, Z] = r.useState(b.a.UNENROLLED),
          [A, H] = r.useState(!1),
          [_, V] = r.useState(!1),
          [q, k] = r.useState(null);
        let Q =
          ((l = o.config),
          (0, a.EQ)(l)
            .with({ configVersion: 2 }, (e) => e.rewardsConfig.rewards)
            .exhaustive());
        function U(e, s) {
          var t, n;
          if (
            "hero" === e ||
            "questBarHero" === e ||
            "gameTile" === e ||
            "logotype" === e ||
            "heroVideo" === e ||
            "questBarHeroVideo" === e
          )
            d({
              ...o,
              config:
                ((t = o.config),
                (n = { [e]: s }),
                (0, a.EQ)(t)
                  .with({ configVersion: 2 }, (e) => ({
                    ...e,
                    assets: { ...e.assets, ...n },
                  }))
                  .exhaustive()),
            });
        }
        function K(e, s) {
          var t, n;
          if ("questName" === e || "gameTitle" === e || "gamePublisher" === e)
            d({
              ...o,
              config:
                ((t = o.config),
                (n = { [e]: s }),
                (0, a.EQ)(t)
                  .with({ configVersion: 2 }, (e) => ({
                    ...e,
                    messages: { ...e.messages, ...n },
                  }))
                  .exhaustive()),
            });
        }
        function W(e, s, t) {
          var n, r, i;
          if ("name" === e || "nameWithArticle" === e)
            d({
              ...o,
              config:
                ((n = o.config),
                (r = { [e]: s }),
                (i = t),
                (0, a.EQ)(n)
                  .with({ configVersion: 2 }, (e) => ({
                    ...e,
                    rewardsConfig: {
                      ...e.rewardsConfig,
                      rewards: e.rewardsConfig.rewards.map((e, s) =>
                        s === i
                          ? { ...e, messages: { ...e.messages, ...r } }
                          : e,
                      ),
                    },
                  }))
                  .exhaustive()),
            });
        }
        function G(e, s) {
          d({
            ...o,
            config: { ...o.config, colors: { ...o.config.colors, [e]: s } },
          });
        }
        function Y() {
          (0, h.Xv)(o.config)
            ? (0, S.openCollectibleRewardModal)(
                o,
                m.jn.GIFT_INVENTORY_FOR_YOU,
                !0,
              )
            : (0, T.openQuestsRewardCodeModal)({
                questId: o.id,
                location: m.jn.GIFT_INVENTORY_FOR_YOU,
                preview: !0,
              });
        }
        return (0, n.jsxs)("div", {
          children: [
            (0, n.jsx)(c.Heading, {
              variant: "heading-lg/bold",
              className: O.heading,
              children: "Quest Preview Tool",
            }),
            (0, n.jsx)("div", {
              className: O.fields,
              children: (0, n.jsx)(I.Z, {
                onSelect: function (e) {
                  if ((k(e), null != e)) d(e);
                },
                quest: q,
              }),
            }),
            (0, n.jsx)(c.Heading, {
              variant: "heading-md/semibold",
              className: O.subheading,
              children: "Messages",
            }),
            (0, n.jsxs)("div", {
              className: O.fields,
              children: [
                (0, n.jsx)(y.Z, {
                  title: "Quest Name",
                  assetKey: "questName",
                  onMessageChange: K,
                  initialValue: o.config.messages.questName,
                }),
                (0, n.jsx)(y.Z, {
                  title: "Game Title",
                  assetKey: "gameTitle",
                  onMessageChange: K,
                  initialValue: o.config.messages.gameTitle,
                }),
                (0, n.jsx)(y.Z, {
                  title: "Game Publisher",
                  assetKey: "gamePublisher",
                  onMessageChange: K,
                  initialValue: o.config.messages.gamePublisher,
                }),
              ],
            }),
            (0, n.jsx)(c.Heading, {
              variant: "heading-md/semibold",
              className: O.subheading,
              children: "Assets",
            }),
            (0, n.jsxs)("div", {
              className: O.fields,
              children: [
                (0, n.jsx)(N.Z, {
                  title: "Hero",
                  assetKey: "hero",
                  onFileChange: U,
                  filters: B,
                  initialValue: o.config.assets.hero,
                }),
                (0, n.jsx)(N.Z, {
                  title: "Hero Video (optional)",
                  assetKey: "heroVideo",
                  onFileChange: U,
                  filters: B,
                  initialValue:
                    null !== (t = o.config.assets.heroVideo) && void 0 !== t
                      ? t
                      : void 0,
                }),
                (0, n.jsx)(N.Z, {
                  title: "Quest Bar Hero",
                  assetKey: "questBarHero",
                  onFileChange: U,
                  filters: B,
                  initialValue: o.config.assets.questBarHero,
                }),
                (0, n.jsx)(N.Z, {
                  title: "Quest Bar Hero Video (optional)",
                  assetKey: "questBarHeroVideo",
                  onFileChange: U,
                  filters: B,
                  initialValue:
                    null !== (i = o.config.assets.questBarHeroVideo) &&
                    void 0 !== i
                      ? i
                      : void 0,
                }),
                (0, n.jsx)(N.Z, {
                  title: "Game Tile",
                  assetKey: "gameTile",
                  onFileChange: U,
                  filters: F,
                  initialValue: o.config.assets.gameTile,
                }),
                (0, n.jsx)(N.Z, {
                  title: "Logotype",
                  assetKey: "logotype",
                  onFileChange: U,
                  filters: D,
                  initialValue: o.config.assets.logotype,
                }),
              ],
            }),
            Q.map((e, s) =>
              (0, n.jsxs)(
                "div",
                {
                  children: [
                    (0, n.jsxs)(c.Heading, {
                      variant: "heading-md/semibold",
                      className: O.subheading,
                      children: ["Reward #", s + 1],
                    }),
                    (0, n.jsxs)("div", {
                      className: O.fields,
                      children: [
                        (0, n.jsx)(y.Z, {
                          title: "Name",
                          assetKey: "name",
                          onMessageChange: (e, t) => W(e, t, s),
                          initialValue: e.messages.name,
                        }),
                        (0, n.jsx)(y.Z, {
                          title: "Name With Article",
                          assetKey: "nameWithArticle",
                          onMessageChange: (e, t) => W(e, t, s),
                          initialValue: e.messages.nameWithArticle,
                        }),
                        (0, n.jsx)(N.Z, {
                          title: "Asset",
                          assetKey: "asset",
                          onFileChange: (e, t) =>
                            (function (e, s, t) {
                              var n, r, i;
                              if ("asset" === e)
                                d({
                                  ...o,
                                  config:
                                    ((n = o.config),
                                    (r = s),
                                    (i = t),
                                    (0, a.EQ)(n)
                                      .with({ configVersion: 2 }, (e) => ({
                                        ...e,
                                        rewardsConfig: {
                                          ...e.rewardsConfig,
                                          rewards: e.rewardsConfig.rewards.map(
                                            (e, s) =>
                                              s === i ? { ...e, asset: r } : e,
                                          ),
                                        },
                                      }))
                                      .exhaustive()),
                                });
                            })(e, t, s),
                          filters: B,
                          initialValue: e.asset,
                        }),
                        (0, n.jsxs)(c.FormItem, {
                          children: [
                            (0, n.jsx)(c.FormTitle, {
                              children: "Claim Modal",
                            }),
                            (0, n.jsx)(c.Button, {
                              color: c.ButtonColors.BRAND,
                              onClick: Y,
                              children: "Open Reward Modal",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                s,
              ),
            ),
            (0, n.jsx)(c.Heading, {
              variant: "heading-md/semibold",
              className: O.subheading,
              children: "Colors & Quest States",
            }),
            (0, n.jsxs)("div", {
              className: O.fields,
              children: [
                (0, n.jsxs)("div", {
                  className: O.fields,
                  style: { marginBottom: 0 },
                  children: [
                    (0, n.jsx)(w.Z, {
                      title: "Primary",
                      colorKey: "primary",
                      onChange: G,
                      value: o.config.colors.primary,
                    }),
                    (0, n.jsx)(w.Z, {
                      title: "Secondary",
                      colorKey: "secondary",
                      onChange: G,
                      value: o.config.colors.secondary,
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: O.fields,
                  children: (0, n.jsx)(P.Z, {}),
                }),
                (0, n.jsx)(b.Z, {
                  onChange: function (e) {
                    switch ((Z(e), e)) {
                      case b.a.UNENROLLED:
                        d({ ...o, userStatus: null });
                        break;
                      case b.a.ENROLLED:
                        d({
                          ...o,
                          userStatus: L({
                            enrolledAt: new Date().toISOString(),
                          }),
                        });
                        break;
                      case b.a.COMPLETED_25:
                        d({
                          ...o,
                          userStatus: L({
                            enrolledAt: new Date().toISOString(),
                            streamProgressSeconds:
                              10 * u.Z.Seconds.MINUTE * 0.25,
                          }),
                        });
                        break;
                      case b.a.COMPLETED_50:
                        d({
                          ...o,
                          userStatus: L({
                            enrolledAt: new Date().toISOString(),
                            streamProgressSeconds:
                              10 * u.Z.Seconds.MINUTE * 0.5,
                          }),
                        });
                        break;
                      case b.a.COMPLETED_75:
                        d({
                          ...o,
                          userStatus: L({
                            enrolledAt: new Date().toISOString(),
                            streamProgressSeconds:
                              10 * u.Z.Seconds.MINUTE * 0.75,
                          }),
                        });
                        break;
                      case b.a.COMPLETED_100:
                        d({
                          ...o,
                          userStatus: L({
                            completedAt: new Date().toISOString(),
                            enrolledAt: new Date().toISOString(),
                            streamProgressSeconds: 10 * u.Z.Seconds.MINUTE,
                          }),
                        });
                        break;
                      case b.a.CLAIMED:
                        d({
                          ...o,
                          userStatus: L({
                            claimedAt: new Date().toISOString(),
                            completedAt: new Date().toISOString(),
                            enrolledAt: new Date().toISOString(),
                            streamProgressSeconds: 10 * u.Z.Seconds.MINUTE,
                          }),
                        });
                    }
                  },
                  value: R,
                }),
              ],
            }),
            (0, n.jsx)(c.Heading, {
              variant: "heading-lg/bold",
              className: O.heading,
              children: "Component Previews",
            }),
            (0, n.jsxs)("div", {
              className: O.componentPreviews,
              children: [
                (0, n.jsxs)(E.Z, {
                  withBorder: !0,
                  children: [
                    (0, n.jsx)(c.FormTitle, { children: "Quest Bar" }),
                    (0, n.jsxs)("div", {
                      className: O.questBarPreviewWrapper,
                      children: [
                        (null === (e = o.userStatus) || void 0 === e
                          ? void 0
                          : e.claimedAt) != null &&
                          (0, n.jsx)(c.Text, {
                            color: "text-secondary",
                            variant: "text-sm/normal",
                            children:
                              "The Quest Bar is hidden when the user has claimed the reward.",
                          }),
                        (0, n.jsx)("div", {
                          className: O.questBarPreview,
                          children: (0, n.jsx)(v.p, {
                            isPreview: !0,
                            source: "preview",
                            questId: "0",
                            children: (0, n.jsx)(x.Z, {
                              children: (0, n.jsx)(g.P, { quest: o }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)(E.Z, {
                  withBorder: !0,
                  children: [
                    (0, n.jsx)(c.FormTitle, { children: "Quest Home Card" }),
                    (0, n.jsx)(v.p, {
                      isPreview: !0,
                      source: "preview",
                      questId: "0",
                      children: (0, n.jsx)(f.Z, {
                        quest: o,
                        className: O.questTile,
                        questContent: m.jn.QUEST_HOME_DESKTOP,
                        contentPosition: 0,
                        rowIndex: 0,
                      }),
                    }),
                  ],
                }),
                (0, n.jsxs)(E.Z, {
                  withBorder: !0,
                  children: [
                    (0, n.jsx)(c.FormTitle, {
                      children: "Channel Call Header",
                    }),
                    (null === (s = o.userStatus) || void 0 === s
                      ? void 0
                      : s.claimedAt) != null &&
                      (0, n.jsx)(c.Text, {
                        color: "text-secondary",
                        variant: "text-sm/normal",
                        children:
                          "The Quest Channel Call Header is hidden when the user has claimed the reward.",
                      }),
                    (0, n.jsx)("div", {
                      className: O.questBarPreviewWrapper,
                      children: (0, n.jsx)(v.p, {
                        isPreview: !0,
                        source: "preview",
                        questId: "0",
                        children: (0, n.jsx)("div", {
                          className: O.questChannelCallHeaderPreview,
                          children: (0, n.jsx)(p.Z, {
                            channelId: "123",
                            previewQuest: o,
                            isParticipatingOverride: A,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: O.toggleSwitch,
                  children: (0, n.jsx)(c.FormItem, {
                    children: (0, n.jsx)(c.FormSwitch, {
                      value: A,
                      onChange: function (e) {
                        H(e);
                      },
                      hideBorder: !0,
                      children: "Is Participating:",
                    }),
                  }),
                }),
                (0, n.jsxs)(E.Z, {
                  withBorder: !0,
                  children: [
                    (0, n.jsx)(c.FormTitle, { children: "Quest Card Embed" }),
                    _
                      ? (0, n.jsx)(C.o, {})
                      : (0, n.jsx)(
                          j.Z,
                          { quest: o, location: m.jn.QUESTS_EMBED },
                          o.id,
                        ),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: O.toggleSwitch,
                  children: (0, n.jsx)(c.FormItem, {
                    children: (0, n.jsx)(c.FormSwitch, {
                      value: _,
                      onChange: V,
                      hideBorder: !0,
                      children: "Invalid Quests Embed:",
                    }),
                  }),
                }),
              ],
            }),
          ],
        });
      }
      class _ extends r.Component {
        componentDidCatch(e) {
          this.setState({ error: e });
        }
        render() {
          let { error: e, renderKey: s } = this.state;
          return null != e
            ? (0, n.jsxs)("div", {
                className: O.errorBoundary,
                children: [
                  (0, n.jsx)(c.CircleWarningIcon, {
                    className: O.errorBoundaryIcon,
                  }),
                  (0, n.jsx)(c.Heading, {
                    variant: "heading-lg/semibold",
                    children: "Something broke in the Quest preview tool :(",
                  }),
                  (0, n.jsx)(c.Button, {
                    color: c.ButtonColors.PRIMARY,
                    onClick: this.handleResetState,
                    children: "Reset",
                  }),
                  null != e.message &&
                    (0, n.jsx)(c.Card, {
                      className: O.errorMessageWrapper,
                      children: (0, n.jsx)("code", {
                        className: O.errorMessage,
                        children: e.message,
                      }),
                    }),
                ],
              })
            : (0, n.jsx)(H, {}, s);
        }
        constructor(...e) {
          super(...e),
            R(this, "state", { error: null, renderKey: 0 }),
            R(this, "handleResetState", () => {
              this.setState((e) => ({
                error: null,
                renderKey: e.renderKey + 1,
              }));
            });
        }
      }
      s.Z = _;
    },
    815183: function (e, s, t) {
      var n = t(735250);
      t(470079);
      var r = t(481060),
        a = t(153867),
        i = t(410030),
        l = t(583901),
        o = t(231338);
      s.Z = function () {
        let e = (0, i.ZP)();
        return (0, n.jsxs)(r.FormItem, {
          children: [
            (0, n.jsx)(r.FormTitle, {
              tag: r.FormTitleTags.H5,
              children: "Theme",
            }),
            (0, n.jsxs)("div", {
              style: { display: "flex", justifyContent: "space-between" },
              children: [
                (0, n.jsx)(l.bD, {
                  theme: o.BR.LIGHT,
                  isSelected: e === o.BR.LIGHT,
                  onSelect: () => (0, a.ZI)({ theme: o.BR.LIGHT }),
                }),
                (0, n.jsx)(l.bD, {
                  theme: o.BR.DARK,
                  isSelected: e === o.BR.DARK,
                  onSelect: () => (0, a.ZI)({ theme: o.BR.DARK }),
                }),
              ],
            }),
          ],
        });
      };
    },
    899457: function (e, s, t) {
      t.d(s, {
        a: function () {
          return r;
        },
      });
      var n,
        r,
        a = t(735250);
      t(470079);
      var i = t(481060);
      ((n = r || (r = {}))[(n.UNENROLLED = 0)] = "UNENROLLED"),
        (n[(n.ENROLLED = 1)] = "ENROLLED"),
        (n[(n.COMPLETED_25 = 2)] = "COMPLETED_25"),
        (n[(n.COMPLETED_50 = 3)] = "COMPLETED_50"),
        (n[(n.COMPLETED_75 = 4)] = "COMPLETED_75"),
        (n[(n.COMPLETED_100 = 5)] = "COMPLETED_100"),
        (n[(n.CLAIMED = 6)] = "CLAIMED");
      s.Z = function (e) {
        let { onChange: s, value: t } = e;
        return (0, a.jsxs)(i.FormItem, {
          children: [
            (0, a.jsx)(i.FormTitle, {
              tag: i.FormTitleTags.H5,
              children: "User State",
            }),
            (0, a.jsx)(i.FormText, {
              children: (0, a.jsx)(i.Select, {
                "aria-label": "User State",
                options: [
                  { label: "Unenrolled", value: 0 },
                  { label: "Enrolled", value: 1 },
                  { label: "25% Complete", value: 2 },
                  { label: "50% Complete", value: 3 },
                  { label: "75% Complete", value: 4 },
                  { label: "100% Complete", value: 5 },
                  { label: "Claimed", value: 6 },
                ],
                isSelected: (e) => e === t,
                select: s,
                serialize: String,
              }),
            }),
          ],
        });
      };
    },
    458708: function (e, s, t) {
      var n, r;
      t.d(s, {
        r: function () {
          return n;
        },
      }),
        ((r = n || (n = {})).AND = "and"),
        (r.OR = "or");
    },
  },
]);
//# sourceMappingURL=2a2d129a1f03f076a87c.js.map
