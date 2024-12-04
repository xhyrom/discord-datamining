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
      var a = t(200651),
        i = t(192379),
        n = t(120356),
        r = t.n(n),
        l = t(481060),
        o = t(53281),
        d = t(14943);
      function c(e) {
        let {
            filename: s,
            className: t,
            filters: n,
            buttonText: c,
            placeholder: u,
            onFileSelect: m,
          } = e,
          g = i.useRef(null);
        return (0, a.jsxs)("div", {
          className: r()(t, d.fileUpload),
          children: [
            (0, a.jsx)("input", {
              className: d.fileUploadInput,
              tabIndex: -1,
              readOnly: !0,
              placeholder: u,
              type: "text",
              value: s,
            }),
            (0, a.jsxs)(l.Button, {
              size: l.Button.Sizes.MIN,
              className: d.fileUploadButton,
              children: [
                c,
                (0, a.jsx)(o.Z, {
                  ref: g,
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
                  filters: n,
                }),
              ],
            }),
          ],
        });
      }
    },
    478977: function (e, s, t) {
      var a = t(200651);
      t(192379);
      var i = t(866442),
        n = t(481060),
        r = t(102787);
      s.Z = function (e) {
        let { colorKey: s, value: t, onChange: l, title: o } = e;
        return (0, a.jsxs)(n.FormItem, {
          children: [
            (0, a.jsx)(n.FormTitle, { tag: n.FormTitleTags.H5, children: o }),
            (0, a.jsx)(n.Popout, {
              renderPopout: (e) =>
                (0, a.jsx)(n.CustomColorPicker, {
                  ...e,
                  value: t,
                  onChange: (e) => l(s, (0, i.Rf)(e)),
                }),
              children: (e) =>
                (0, a.jsx)(n.Clickable, {
                  ...e,
                  tag: "span",
                  "aria-label": "Select a color",
                  className: r.swatchContainer,
                  style: { backgroundColor: t },
                  children: (0, a.jsx)(n.EyeDropperIcon, {
                    size: "xs",
                    color: "currentColor",
                    className: r.swatchIcon,
                  }),
                }),
            }),
          ],
        });
      };
    },
    456799: function (e, s, t) {
      var a = t(200651);
      t(192379);
      var i = t(120356),
        n = t.n(i),
        r = t(481060),
        l = t(102787);
      s.Z = function (e) {
        let { children: s, withBorder: t = !1 } = e;
        return (0, a.jsx)(r.FocusBlock, {
          children: (0, a.jsx)(r.Card, {
            className: n()(l.componentPreviewWrapper, {
              [l.componentPreviewWrapperBordered]: t,
            }),
            outline: t,
            children: (0, a.jsx)("div", {
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
      var a = t(200651),
        i = t(192379),
        n = t(481060),
        r = t(763610),
        l = t(102787);
      s.Z = function (e) {
        var s, t;
        let {
            assetKey: o,
            filters: d,
            initialValue: c,
            onFileChange: u,
            title: m,
          } = e,
          [g, h] = i.useState(null),
          f = i.useRef(null);
        return (
          i.useEffect(
            () => () => {
              null != f.current && URL.revokeObjectURL(f.current);
            },
            [],
          ),
          (0, a.jsxs)(n.FormItem, {
            children: [
              (0, a.jsx)(n.FormTitle, {
                tag: n.FormTitleTags.H5,
                children: (0, a.jsxs)("div", {
                  className: l.headingWithTooltip,
                  children: [
                    m,
                    (0, a.jsx)(n.Tooltip, {
                      text: "Supported asset formats: ".concat(d.join(", ")),
                      children: (e) =>
                        (0, a.jsx)(n.CircleInformationIcon, {
                          size: "xs",
                          ...e,
                        }),
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(r.Z, {
                filename:
                  null !==
                    (t =
                      null !== (s = null == g ? void 0 : g.name) && void 0 !== s
                        ? s
                        : c) && void 0 !== t
                    ? t
                    : "",
                filters: [{ name: m, extensions: d }],
                buttonText: "Browse",
                placeholder: "Select an asset",
                onFileSelect: function (e) {
                  if ((h(null != e ? e : null), null == e)) return;
                  let s = URL.createObjectURL(e);
                  f.current = s;
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
      var a = t(200651),
        i = t(192379),
        n = t(481060);
      s.Z = function (e) {
        let { assetKey: s, initialValue: t, onMessageChange: r, title: l } = e,
          [o, d] = i.useState("");
        return (
          i.useEffect(() => {
            d(null != t ? t : "");
          }, [t]),
          (0, a.jsxs)(n.FormItem, {
            children: [
              (0, a.jsx)(n.FormTitle, { tag: n.FormTitleTags.H5, children: l }),
              (0, a.jsx)(n.FormText, {
                children: (0, a.jsx)(n.TextInput, {
                  value: o,
                  onChange: function (e) {
                    d(e), r(s, e);
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
      var a = t(200651);
      t(192379);
      var i = t(481060),
        n = t(113434);
      s.Z = function (e) {
        let { onSelect: s, quest: t } = e,
          { quests: r } = (0, n.J2)({ fetchPolicy: "cache-and-network" }),
          l = [
            { label: "NONE", value: null },
            ...r.map((e) => ({ label: e.config.messages.questName, value: e })),
          ];
        return (0, a.jsxs)(i.FormItem, {
          children: [
            (0, a.jsx)(i.FormTitle, {
              tag: i.FormTitleTags.H5,
              children: "Prefill with Quest",
            }),
            (0, a.jsx)(i.FormText, {
              children: (0, a.jsx)(i.Select, {
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
          return M;
        },
      }),
        t(47120),
        t(627341);
      var a = t(200651),
        i = t(192379),
        n = t(278074),
        r = t(754700),
        l = t(887003),
        o = t(742635),
        d = t(458708),
        c = t(481060),
        u = t(70956),
        m = t(497505),
        g = t(918701),
        h = t(210724),
        f = t(130653),
        v = t(415104),
        x = t(78826),
        T = t(37303),
        j = t(134483),
        p = t(683650),
        S = t(920916),
        C = t(341907),
        P = t(478977),
        E = t(456799),
        O = t(210851),
        N = t(602683),
        w = t(916028),
        I = t(749912),
        b = t(815183),
        y = t(899457),
        A = t(102787);
      function _(e, s, t) {
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
      let D = ["png", "gif", "webp"],
        L = [...D, "jpg", "jpeg"],
        F = Array.from(new Set([...L, "gif", "mp4", "webm"]));
      function M(e) {
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
      function k() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          {
            streamProgressSeconds: s = 0,
            completedAt: t = null,
            enrolledAt: a = null,
            claimedAt: i = null,
          } = e;
        return {
          userId: "123",
          questId: "1193992107035983872",
          enrolledAt: a,
          completedAt: t,
          claimedAt: i,
          claimedTier: null,
          lastStreamHeartbeatAt: null,
          streamProgressSeconds: s,
          dismissedQuestContent: 0,
          progress: {},
        };
      }
      let R = "1193992107035983872",
        V = {
          id: R,
          preview: !0,
          config: {
            id: R,
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
                [r.X.PLAY_ON_DESKTOP]: {
                  eventName: r.X.PLAY_ON_DESKTOP,
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
      function Z() {
        var e, s, t, l, o, d, _, M, R, Z;
        let [B, H] = i.useState(V),
          [K, Y] = i.useState(y.a.UNENROLLED),
          [q, U] = i.useState(!1),
          [X, Q] = i.useState(!1),
          [W, G] = i.useState(null);
        let z =
          ((Z = B.config),
          (0, n.EQ)(Z)
            .with({ configVersion: 2 }, (e) => e.rewardsConfig.rewards)
            .exhaustive());
        function J(e, s) {
          var t, a;
          if (
            "hero" === e ||
            "questBarHero" === e ||
            "gameTile" === e ||
            "logotype" === e ||
            "heroVideo" === e ||
            "questBarHeroVideo" === e
          )
            H({
              ...B,
              config:
                ((t = B.config),
                (a = { [e]: s }),
                (0, n.EQ)(t)
                  .with({ configVersion: 2 }, (e) => ({
                    ...e,
                    assets: { ...e.assets, ...a },
                  }))
                  .exhaustive()),
            });
        }
        function $(e, s) {
          var t, a, i;
          H({
            ...B,
            config: {
              ...B.config,
              videoMetadata: {
                ...B.config.videoMetadata,
                messages:
                  null !==
                    (i =
                      null === (t = B.config.videoMetadata) || void 0 === t
                        ? void 0
                        : t.messages) && void 0 !== i
                    ? i
                    : {},
                assets: {
                  ...(null === (a = B.config.videoMetadata) || void 0 === a
                    ? void 0
                    : a.assets),
                  [e]: s,
                },
              },
            },
          });
        }
        function ee(e, s) {
          var t, a;
          if ("questName" === e || "gameTitle" === e || "gamePublisher" === e)
            H({
              ...B,
              config:
                ((t = B.config),
                (a = { [e]: s }),
                (0, n.EQ)(t)
                  .with({ configVersion: 2 }, (e) => ({
                    ...e,
                    messages: { ...e.messages, ...a },
                  }))
                  .exhaustive()),
            });
        }
        function es(e, s, t) {
          var a, i, r;
          if ("name" === e || "nameWithArticle" === e)
            H({
              ...B,
              config:
                ((a = B.config),
                (i = { [e]: s }),
                (r = t),
                (0, n.EQ)(a)
                  .with({ configVersion: 2 }, (e) => ({
                    ...e,
                    rewardsConfig: {
                      ...e.rewardsConfig,
                      rewards: e.rewardsConfig.rewards.map((e, s) =>
                        s === r
                          ? { ...e, messages: { ...e.messages, ...i } }
                          : e,
                      ),
                    },
                  }))
                  .exhaustive()),
            });
        }
        function et(e, s) {
          H({
            ...B,
            config: { ...B.config, colors: { ...B.config.colors, [e]: s } },
          });
        }
        function ea() {
          (0, g.Xv)(B.config)
            ? (0, S.openCollectibleRewardModal)(
                B,
                m.jn.GIFT_INVENTORY_FOR_YOU,
                !0,
              )
            : (0, C.openQuestsRewardCodeModal)({
                questId: B.id,
                location: m.jn.GIFT_INVENTORY_FOR_YOU,
                preview: !0,
              });
        }
        let ei = i.useMemo(() => {
            for (let [e, s] of Object.entries(B.config.taskConfig.tasks))
              if (null != s.target) return s.target;
            return 10 * u.Z.Seconds.MINUTE;
          }, [B.config.taskConfig.tasks]),
          en = i.useMemo(
            () => r.X.WATCH_VIDEO in B.config.taskConfig.tasks,
            [B.config.taskConfig.tasks],
          );
        return (0, a.jsxs)("div", {
          children: [
            (0, a.jsx)(c.Heading, {
              variant: "heading-lg/bold",
              className: A.heading,
              children: "Quest Preview Tool",
            }),
            (0, a.jsx)("div", {
              className: A.fields,
              children: (0, a.jsx)(w.Z, {
                onSelect: function (e) {
                  if ((G(e), null != e)) H(e);
                },
                quest: W,
              }),
            }),
            (0, a.jsx)(c.Heading, {
              variant: "heading-md/semibold",
              className: A.subheading,
              children: "Task Config",
            }),
            (0, a.jsx)("div", {
              className: A.fields,
              children: (0, a.jsx)(I.Z, {
                taskDuration: ei,
                taskConfig: B.config.taskConfig,
                onSelect: function (e) {
                  H({ ...B, config: { ...B.config, taskConfig: e } });
                },
              }),
            }),
            (0, a.jsx)(c.Heading, {
              variant: "heading-md/semibold",
              className: A.subheading,
              children: "Messages",
            }),
            (0, a.jsxs)("div", {
              className: A.fields,
              children: [
                (0, a.jsx)(N.Z, {
                  title: "Quest Name",
                  assetKey: "questName",
                  onMessageChange: ee,
                  initialValue: B.config.messages.questName,
                }),
                (0, a.jsx)(N.Z, {
                  title: "Game Title",
                  assetKey: "gameTitle",
                  onMessageChange: ee,
                  initialValue: B.config.messages.gameTitle,
                }),
                (0, a.jsx)(N.Z, {
                  title: "Game Publisher",
                  assetKey: "gamePublisher",
                  onMessageChange: ee,
                  initialValue: B.config.messages.gamePublisher,
                }),
                en &&
                  (0, a.jsx)(a.Fragment, {
                    children: (0, a.jsx)(N.Z, {
                      title: "Video Title",
                      assetKey: "videoTitle",
                      onMessageChange: function (e, s) {
                        var t, a, i;
                        H({
                          ...B,
                          config: {
                            ...B.config,
                            videoMetadata: {
                              ...B.config.videoMetadata,
                              assets:
                                null !==
                                  (i =
                                    null === (t = B.config.videoMetadata) ||
                                    void 0 === t
                                      ? void 0
                                      : t.assets) && void 0 !== i
                                  ? i
                                  : {},
                              messages: {
                                ...(null === (a = B.config.videoMetadata) ||
                                void 0 === a
                                  ? void 0
                                  : a.messages),
                                [e]: s,
                              },
                            },
                          },
                        });
                      },
                      initialValue:
                        null === (e = B.config.videoMetadata) || void 0 === e
                          ? void 0
                          : e.messages.videoTitle,
                    }),
                  }),
              ],
            }),
            (0, a.jsx)(c.Heading, {
              variant: "heading-md/semibold",
              className: A.subheading,
              children: "Assets",
            }),
            (0, a.jsxs)("div", {
              className: A.fields,
              children: [
                (0, a.jsx)(O.Z, {
                  title: "Hero",
                  assetKey: "hero",
                  onFileChange: J,
                  filters: F,
                  initialValue: B.config.assets.hero,
                }),
                (0, a.jsx)(O.Z, {
                  title: "Hero Video (optional)",
                  assetKey: "heroVideo",
                  onFileChange: J,
                  filters: F,
                  initialValue:
                    null !== (M = B.config.assets.heroVideo) && void 0 !== M
                      ? M
                      : void 0,
                }),
                (0, a.jsx)(O.Z, {
                  title: "Quest Bar Hero",
                  assetKey: "questBarHero",
                  onFileChange: J,
                  filters: F,
                  initialValue: B.config.assets.questBarHero,
                }),
                (0, a.jsx)(O.Z, {
                  title: "Quest Bar Hero Video (optional)",
                  assetKey: "questBarHeroVideo",
                  onFileChange: J,
                  filters: F,
                  initialValue:
                    null !== (R = B.config.assets.questBarHeroVideo) &&
                    void 0 !== R
                      ? R
                      : void 0,
                }),
                (0, a.jsx)(O.Z, {
                  title: "Game Tile",
                  assetKey: "gameTile",
                  onFileChange: J,
                  filters: [...L, "svg"],
                  initialValue: B.config.assets.gameTile,
                }),
                (0, a.jsx)(O.Z, {
                  title: "Logotype",
                  assetKey: "logotype",
                  onFileChange: J,
                  filters: [...D, "svg"],
                  initialValue: B.config.assets.logotype,
                }),
                en &&
                  (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsx)(O.Z, {
                        title: "Video Player Thumbnail (optional)",
                        assetKey: "videoPlayerThumbnail",
                        onFileChange: $,
                        filters: L,
                        initialValue:
                          null === (t = B.config.videoMetadata) || void 0 === t
                            ? void 0
                            : null === (s = t.assets) || void 0 === s
                              ? void 0
                              : s.videoPlayerThumbnail,
                      }),
                      (0, a.jsx)(O.Z, {
                        title: "Quest Bar Preview Video (optional)",
                        assetKey: "questBarPreviewVideo",
                        onFileChange: $,
                        filters: F,
                        initialValue:
                          null === (l = B.config.videoMetadata) || void 0 === l
                            ? void 0
                            : l.assets.questBarPreviewVideo,
                      }),
                      (0, a.jsx)(O.Z, {
                        title: "Quest Home Video (optional)",
                        assetKey: "questHomeVideo",
                        onFileChange: $,
                        filters: F,
                        initialValue:
                          null === (o = B.config.videoMetadata) || void 0 === o
                            ? void 0
                            : o.assets.questHomeVideo,
                      }),
                    ],
                  }),
              ],
            }),
            z.map((e, s) =>
              (0, a.jsxs)(
                "div",
                {
                  children: [
                    (0, a.jsxs)(c.Heading, {
                      variant: "heading-md/semibold",
                      className: A.subheading,
                      children: ["Reward #", s + 1],
                    }),
                    (0, a.jsxs)("div", {
                      className: A.fields,
                      children: [
                        (0, a.jsx)(N.Z, {
                          title: "Name",
                          assetKey: "name",
                          onMessageChange: (e, t) => es(e, t, s),
                          initialValue: e.messages.name,
                        }),
                        (0, a.jsx)(N.Z, {
                          title: "Name With Article",
                          assetKey: "nameWithArticle",
                          onMessageChange: (e, t) => es(e, t, s),
                          initialValue: e.messages.nameWithArticle,
                        }),
                        (0, a.jsx)(O.Z, {
                          title: "Asset",
                          assetKey: "asset",
                          onFileChange: (e, t) =>
                            (function (e, s, t) {
                              var a, i, r;
                              if ("asset" === e)
                                H({
                                  ...B,
                                  config:
                                    ((a = B.config),
                                    (i = s),
                                    (r = t),
                                    (0, n.EQ)(a)
                                      .with({ configVersion: 2 }, (e) => ({
                                        ...e,
                                        rewardsConfig: {
                                          ...e.rewardsConfig,
                                          rewards: e.rewardsConfig.rewards.map(
                                            (e, s) =>
                                              s === r ? { ...e, asset: i } : e,
                                          ),
                                        },
                                      }))
                                      .exhaustive()),
                                });
                            })(e, t, s),
                          filters: F,
                          initialValue: e.asset,
                        }),
                        (0, a.jsxs)(c.FormItem, {
                          children: [
                            (0, a.jsx)(c.FormTitle, {
                              children: "Claim Modal",
                            }),
                            (0, a.jsx)(c.Button, {
                              color: c.ButtonColors.BRAND,
                              onClick: ea,
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
            (0, a.jsx)(c.Heading, {
              variant: "heading-md/semibold",
              className: A.subheading,
              children: "Colors & Quest States",
            }),
            (0, a.jsxs)("div", {
              className: A.fields,
              children: [
                (0, a.jsxs)("div", {
                  className: A.fields,
                  style: { marginBottom: 0 },
                  children: [
                    (0, a.jsx)(P.Z, {
                      title: "Primary",
                      colorKey: "primary",
                      onChange: et,
                      value: B.config.colors.primary,
                    }),
                    (0, a.jsx)(P.Z, {
                      title: "Secondary",
                      colorKey: "secondary",
                      onChange: et,
                      value: B.config.colors.secondary,
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: A.fields,
                  children: (0, a.jsx)(b.Z, {}),
                }),
                (0, a.jsx)(y.Z, {
                  onChange: function (e) {
                    switch ((Y(e), e)) {
                      case y.a.UNENROLLED:
                        H({ ...B, userStatus: null });
                        break;
                      case y.a.ENROLLED:
                        H({
                          ...B,
                          userStatus: k({
                            enrolledAt: new Date().toISOString(),
                          }),
                        });
                        break;
                      case y.a.COMPLETED_25:
                        H({
                          ...B,
                          userStatus: k({
                            enrolledAt: new Date().toISOString(),
                            streamProgressSeconds:
                              ei * u.Z.Seconds.MINUTE * 0.25,
                          }),
                        });
                        break;
                      case y.a.COMPLETED_50:
                        H({
                          ...B,
                          userStatus: k({
                            enrolledAt: new Date().toISOString(),
                            streamProgressSeconds:
                              ei * u.Z.Seconds.MINUTE * 0.5,
                          }),
                        });
                        break;
                      case y.a.COMPLETED_75:
                        H({
                          ...B,
                          userStatus: k({
                            enrolledAt: new Date().toISOString(),
                            streamProgressSeconds:
                              ei * u.Z.Seconds.MINUTE * 0.75,
                          }),
                        });
                        break;
                      case y.a.COMPLETED_100:
                        H({
                          ...B,
                          userStatus: k({
                            completedAt: new Date().toISOString(),
                            enrolledAt: new Date().toISOString(),
                            streamProgressSeconds: ei * u.Z.Seconds.MINUTE,
                          }),
                        });
                        break;
                      case y.a.CLAIMED:
                        H({
                          ...B,
                          userStatus: k({
                            claimedAt: new Date().toISOString(),
                            completedAt: new Date().toISOString(),
                            enrolledAt: new Date().toISOString(),
                            streamProgressSeconds: ei * u.Z.Seconds.MINUTE,
                          }),
                        });
                    }
                  },
                  value: K,
                }),
              ],
            }),
            (0, a.jsx)(c.Heading, {
              variant: "heading-lg/bold",
              className: A.heading,
              children: "Component Previews",
            }),
            (0, a.jsxs)("div", {
              className: A.componentPreviews,
              children: [
                (0, a.jsxs)(E.Z, {
                  withBorder: !0,
                  children: [
                    (0, a.jsx)(c.FormTitle, { children: "Quest Bar" }),
                    (0, a.jsxs)("div", {
                      className: A.questBarPreviewWrapper,
                      children: [
                        (null === (d = B.userStatus) || void 0 === d
                          ? void 0
                          : d.claimedAt) != null &&
                          (0, a.jsx)(c.Text, {
                            color: "text-secondary",
                            variant: "text-sm/normal",
                            children:
                              "The Quest Bar is hidden when the user has claimed the reward.",
                          }),
                        (0, a.jsx)("div", {
                          className: A.questBarPreview,
                          children: (0, a.jsx)(x.p, {
                            isPreview: !0,
                            source: "preview",
                            questId: "0",
                            children: (0, a.jsx)(f.Z, {
                              children: (0, a.jsx)(h.P, { quest: B }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)(E.Z, {
                  withBorder: !0,
                  children: [
                    (0, a.jsx)(c.FormTitle, { children: "Quest Home Card" }),
                    (0, a.jsx)(x.p, {
                      isPreview: !0,
                      source: "preview",
                      questId: "0",
                      children: (0, a.jsx)(v.Z, {
                        quest: B,
                        className: A.questTile,
                        questContent: m.jn.QUEST_HOME_DESKTOP,
                        contentPosition: 0,
                        rowIndex: 0,
                      }),
                    }),
                  ],
                }),
                (0, a.jsxs)(E.Z, {
                  withBorder: !0,
                  children: [
                    (0, a.jsx)(c.FormTitle, {
                      children: "Channel Call Header",
                    }),
                    (null === (_ = B.userStatus) || void 0 === _
                      ? void 0
                      : _.claimedAt) != null &&
                      (0, a.jsx)(c.Text, {
                        color: "text-secondary",
                        variant: "text-sm/normal",
                        children:
                          "The Quest Channel Call Header is hidden when the user has claimed the reward.",
                      }),
                    (0, a.jsx)("div", {
                      className: A.questBarPreviewWrapper,
                      children: (0, a.jsx)(x.p, {
                        isPreview: !0,
                        source: "preview",
                        questId: "0",
                        children: (0, a.jsx)("div", {
                          className: A.questChannelCallHeaderPreview,
                          children: (0, a.jsx)(j.Z, {
                            channelId: "123",
                            previewQuest: B,
                            isParticipatingOverride: q,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: A.toggleSwitch,
                  children: (0, a.jsx)(c.FormItem, {
                    children: (0, a.jsx)(c.FormSwitch, {
                      value: q,
                      onChange: function (e) {
                        U(e);
                      },
                      hideBorder: !0,
                      children: "Is Participating:",
                    }),
                  }),
                }),
                (0, a.jsxs)(E.Z, {
                  withBorder: !0,
                  children: [
                    (0, a.jsx)(c.FormTitle, { children: "Quest Card Embed" }),
                    X
                      ? (0, a.jsx)(p.o, {})
                      : (0, a.jsx)(
                          T.Z,
                          { quest: B, location: m.jn.QUESTS_EMBED },
                          B.id,
                        ),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: A.toggleSwitch,
                  children: (0, a.jsx)(c.FormItem, {
                    children: (0, a.jsx)(c.FormSwitch, {
                      value: X,
                      onChange: Q,
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
      class B extends i.Component {
        componentDidCatch(e) {
          this.setState({ error: e });
        }
        render() {
          let { error: e, renderKey: s } = this.state;
          return null != e
            ? (0, a.jsxs)("div", {
                className: A.errorBoundary,
                children: [
                  (0, a.jsx)(c.CircleWarningIcon, {
                    className: A.errorBoundaryIcon,
                  }),
                  (0, a.jsx)(c.Heading, {
                    variant: "heading-lg/semibold",
                    children: "Something broke in the Quest preview tool :(",
                  }),
                  (0, a.jsx)(c.Button, {
                    color: c.ButtonColors.PRIMARY,
                    onClick: this.handleResetState,
                    children: "Reset",
                  }),
                  null != e.message &&
                    (0, a.jsx)(c.Card, {
                      className: A.errorMessageWrapper,
                      children: (0, a.jsx)("code", {
                        className: A.errorMessage,
                        children: e.message,
                      }),
                    }),
                ],
              })
            : (0, a.jsx)(Z, {}, s);
        }
        constructor(...e) {
          super(...e),
            _(this, "state", { error: null, renderKey: 0 }),
            _(this, "handleResetState", () => {
              this.setState((e) => ({
                error: null,
                renderKey: e.renderKey + 1,
              }));
            });
        }
      }
      s.Z = B;
    },
    749912: function (e, s, t) {
      t(47120);
      var a,
        i,
        n = t(200651);
      t(192379);
      var r = t(754700),
        l = t(481060),
        o = t(70956),
        d = t(416457);
      ((i = a || (a = {}))[(i.PLAY_DESKTOP = 0)] = "PLAY_DESKTOP"),
        (i[(i.STREAM_DESKTOP = 1)] = "STREAM_DESKTOP"),
        (i[(i.WATCH_VIDEO = 2)] = "WATCH_VIDEO"),
        (i[(i.PLAY_CONSOLE = 3)] = "PLAY_CONSOLE"),
        (i[(i.PLAY_DESKTOP_CONSOLE = 4)] = "PLAY_DESKTOP_CONSOLE"),
        (i[(i.PLAY_ACTIVITY = 5)] = "PLAY_ACTIVITY");
      let c = [
        { value: 1, label: "Stream Desktop" },
        { value: 0, label: "Play Desktop" },
        { value: 3, label: "Play Console" },
        { value: 4, label: "Play Desktop & Console" },
        { value: 2, label: "Watch Video" },
        { value: 5, label: "Play Activity" },
      ];
      s.Z = function (e) {
        let { onSelect: s, taskDuration: t = 10, taskConfig: a } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)(l.FormItem, {
              children: [
                (0, n.jsx)(l.FormTitle, {
                  tag: l.FormTitleTags.H5,
                  children: "Task Type(s)",
                }),
                (0, n.jsx)(l.FormText, {
                  children: (0, n.jsx)(l.Select, {
                    className: d.taskPresetSelect,
                    placeholder: "Select Task Preset",
                    options: c,
                    renderOptionValue: (e) =>
                      e.map((e) =>
                        (0, n.jsx)("div", { children: e.label }, e.value),
                      ),
                    renderOptionLabel: (e) =>
                      (0, n.jsx)("div", { children: e.label }),
                    isSelected: (e) =>
                      e ===
                      (function (e) {
                        let s =
                            r.X.PLAY_ON_PLAYSTATION in e ||
                            r.X.PLAY_ON_XBOX in e,
                          t =
                            r.X.PLAY_ON_DESKTOP in e ||
                            r.X.PLAY_ON_DESKTOP_V2 in e,
                          a = r.X.STREAM_ON_DESKTOP in e,
                          i = r.X.WATCH_VIDEO in e,
                          n = r.X.PLAY_ACTIVITY in e;
                        return s && t
                          ? 4
                          : s
                            ? 3
                            : t
                              ? 0
                              : a
                                ? 1
                                : i
                                  ? 2
                                  : n
                                    ? 5
                                    : void 0;
                      })(a.tasks),
                    select: (e) => {
                      s({
                        ...a,
                        tasks: (function (e, s) {
                          let t = [];
                          switch (e) {
                            case 1:
                              t = [r.X.STREAM_ON_DESKTOP];
                              break;
                            case 0:
                              t = [r.X.PLAY_ON_DESKTOP];
                              break;
                            case 3:
                              t = [r.X.PLAY_ON_PLAYSTATION, r.X.PLAY_ON_XBOX];
                              break;
                            case 4:
                              t = [
                                r.X.PLAY_ON_DESKTOP,
                                r.X.PLAY_ON_PLAYSTATION,
                                r.X.PLAY_ON_XBOX,
                              ];
                              break;
                            case 2:
                              t = [r.X.WATCH_VIDEO];
                              break;
                            case 5:
                              t = [r.X.PLAY_ACTIVITY];
                          }
                          let a = {};
                          for (let e of t)
                            a[e] = { eventName: e, target: s, externalIds: [] };
                          return a;
                        })(e, t),
                      });
                    },
                    serialize: String,
                  }),
                }),
              ],
            }),
            (0, n.jsxs)(l.FormItem, {
              children: [
                (0, n.jsx)(l.FormTitle, {
                  tag: l.FormTitleTags.H5,
                  children: "Task Duration",
                }),
                (0, n.jsx)(l.FormText, {
                  children: (0, n.jsx)(l.TextInput, {
                    value: String(t / o.Z.Seconds.MINUTE),
                    onChange: function (e) {
                      let t = Number(e);
                      if (isNaN(t)) return;
                      t *= o.Z.Seconds.MINUTE;
                      let i = { ...a.tasks };
                      for (let [e, s] of Object.entries(i))
                        i[e] = { ...s, target: t };
                      s({ ...a, tasks: i });
                    },
                  }),
                }),
              ],
            }),
          ],
        });
      };
    },
    815183: function (e, s, t) {
      var a = t(200651);
      t(192379);
      var i = t(481060),
        n = t(153867),
        r = t(410030),
        l = t(583901),
        o = t(231338);
      s.Z = function () {
        let e = (0, r.ZP)();
        return (0, a.jsxs)(i.FormItem, {
          children: [
            (0, a.jsx)(i.FormTitle, {
              tag: i.FormTitleTags.H5,
              children: "Theme",
            }),
            (0, a.jsxs)("div", {
              style: { display: "flex", justifyContent: "space-between" },
              children: [
                (0, a.jsx)(l.bD, {
                  theme: o.BR.LIGHT,
                  isSelected: e === o.BR.LIGHT,
                  onSelect: () => (0, n.ZI)({ theme: o.BR.LIGHT }),
                }),
                (0, a.jsx)(l.bD, {
                  theme: o.BR.DARK,
                  isSelected: e === o.BR.DARK,
                  onSelect: () => (0, n.ZI)({ theme: o.BR.DARK }),
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
          return i;
        },
      });
      var a,
        i,
        n = t(200651);
      t(192379);
      var r = t(481060);
      ((a = i || (i = {}))[(a.UNENROLLED = 0)] = "UNENROLLED"),
        (a[(a.ENROLLED = 1)] = "ENROLLED"),
        (a[(a.COMPLETED_25 = 2)] = "COMPLETED_25"),
        (a[(a.COMPLETED_50 = 3)] = "COMPLETED_50"),
        (a[(a.COMPLETED_75 = 4)] = "COMPLETED_75"),
        (a[(a.COMPLETED_100 = 5)] = "COMPLETED_100"),
        (a[(a.CLAIMED = 6)] = "CLAIMED");
      s.Z = function (e) {
        let { onChange: s, value: t } = e;
        return (0, n.jsxs)(r.FormItem, {
          children: [
            (0, n.jsx)(r.FormTitle, {
              tag: r.FormTitleTags.H5,
              children: "User State",
            }),
            (0, n.jsx)(r.FormText, {
              children: (0, n.jsx)(r.Select, {
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
      var a, i;
      t.d(s, {
        r: function () {
          return a;
        },
      }),
        ((i = a || (a = {})).AND = "and"),
        (i.OR = "or");
    },
  },
]);
//# sourceMappingURL=76648a94a09bf23655f6.js.map
