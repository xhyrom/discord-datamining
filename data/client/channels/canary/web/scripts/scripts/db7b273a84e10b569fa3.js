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
      var i = t(200651),
        a = t(192379),
        n = t(120356),
        l = t.n(n),
        r = t(481060),
        o = t(53281),
        d = t(14943);
      function c(e) {
        let {
            filename: s,
            className: t,
            filters: n,
            buttonText: c,
            placeholder: u,
            onFileSelect: g,
          } = e,
          m = a.useRef(null);
        return (0, i.jsxs)("div", {
          className: l()(t, d.fileUpload),
          children: [
            (0, i.jsx)("input", {
              className: d.fileUploadInput,
              tabIndex: -1,
              readOnly: !0,
              placeholder: u,
              type: "text",
              value: s,
            }),
            (0, i.jsxs)(r.Button, {
              size: r.Button.Sizes.MIN,
              className: d.fileUploadButton,
              children: [
                c,
                (0, i.jsx)(o.Z, {
                  ref: m,
                  tabIndex: -1,
                  onChange: (e) => {
                    var s;
                    g(
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
      var i = t(200651);
      t(192379);
      var a = t(866442),
        n = t(481060),
        l = t(102787);
      s.Z = function (e) {
        let { colorKey: s, value: t, onChange: r, title: o } = e;
        return (0, i.jsxs)(n.FormItem, {
          children: [
            (0, i.jsx)(n.FormTitle, { tag: n.FormTitleTags.H5, children: o }),
            (0, i.jsx)(n.Popout, {
              renderPopout: (e) =>
                (0, i.jsx)(n.CustomColorPicker, {
                  ...e,
                  value: t,
                  onChange: (e) => r(s, (0, a.Rf)(e)),
                }),
              children: (e) =>
                (0, i.jsx)(n.Clickable, {
                  ...e,
                  tag: "span",
                  "aria-label": "Select a color",
                  className: l.swatchContainer,
                  style: { backgroundColor: t },
                  children: (0, i.jsx)(n.EyeDropperIcon, {
                    size: "xs",
                    color: "currentColor",
                    className: l.swatchIcon,
                  }),
                }),
            }),
          ],
        });
      };
    },
    456799: function (e, s, t) {
      var i = t(200651);
      t(192379);
      var a = t(120356),
        n = t.n(a),
        l = t(481060),
        r = t(102787);
      s.Z = function (e) {
        let { allowClicks: s = !1, children: t, withBorder: a = !1 } = e;
        return (0, i.jsx)(l.FocusBlock, {
          children: (0, i.jsx)(l.Card, {
            className: n()(r.componentPreviewWrapper, {
              [r.componentPreviewWrapperBordered]: a,
            }),
            outline: a,
            children: (0, i.jsx)("div", {
              className: r.componentPreview,
              onClickCapture: s
                ? void 0
                : function (e) {
                    e.stopPropagation();
                  },
              children: t,
            }),
          }),
        });
      };
    },
    210851: function (e, s, t) {
      t(47120), t(315314), t(610138), t(216116), t(78328), t(815648);
      var i = t(200651),
        a = t(192379),
        n = t(481060),
        l = t(763610),
        r = t(102787);
      s.Z = function (e) {
        var s, t;
        let {
            assetKey: o,
            filters: d,
            initialValue: c,
            onFileChange: u,
            title: g,
          } = e,
          [m, h] = a.useState(null),
          v = a.useRef(null);
        return (
          a.useEffect(
            () => () => {
              null != v.current && URL.revokeObjectURL(v.current);
            },
            [],
          ),
          (0, i.jsxs)(n.FormItem, {
            children: [
              (0, i.jsx)(n.FormTitle, {
                tag: n.FormTitleTags.H5,
                children: (0, i.jsxs)("div", {
                  className: r.headingWithTooltip,
                  children: [
                    g,
                    (0, i.jsx)(n.Tooltip, {
                      text: "Supported asset formats: ".concat(d.join(", ")),
                      children: (e) =>
                        (0, i.jsx)(n.CircleInformationIcon, {
                          size: "xs",
                          ...e,
                        }),
                    }),
                  ],
                }),
              }),
              (0, i.jsx)(l.Z, {
                filename:
                  null !==
                    (t =
                      null !== (s = null == m ? void 0 : m.name) && void 0 !== s
                        ? s
                        : c) && void 0 !== t
                    ? t
                    : "",
                filters: [{ name: g, extensions: d }],
                buttonText: "Browse",
                placeholder: "Select an asset",
                onFileSelect: function (e) {
                  if ((h(null != e ? e : null), null == e)) return;
                  let s = URL.createObjectURL(e);
                  v.current = s;
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
      var i = t(200651),
        a = t(192379),
        n = t(481060);
      s.Z = function (e) {
        let { assetKey: s, initialValue: t, onMessageChange: l, title: r } = e,
          [o, d] = a.useState("");
        return (
          a.useEffect(() => {
            d(null != t ? t : "");
          }, [t]),
          (0, i.jsxs)(n.FormItem, {
            children: [
              (0, i.jsx)(n.FormTitle, { tag: n.FormTitleTags.H5, children: r }),
              (0, i.jsx)(n.FormText, {
                children: (0, i.jsx)(n.TextInput, {
                  value: o,
                  onChange: function (e) {
                    d(e), l(s, e);
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
      var i = t(200651);
      t(192379);
      var a = t(481060),
        n = t(113434);
      s.Z = function (e) {
        let { onSelect: s, quest: t } = e,
          { quests: l } = (0, n.J2)({ fetchPolicy: "cache-and-network" }),
          r = [
            { label: "NONE", value: null },
            ...l.map((e) => ({ label: e.config.messages.questName, value: e })),
          ];
        return (0, i.jsxs)(a.FormItem, {
          children: [
            (0, i.jsx)(a.FormTitle, {
              tag: a.FormTitleTags.H5,
              children: "Prefill with Quest",
            }),
            (0, i.jsx)(a.FormText, {
              children: (0, i.jsx)(a.Select, {
                "aria-label": "Prefill Quest",
                options: r,
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
          return V;
        },
      }),
        t(47120),
        t(627341);
      var i = t(200651),
        a = t(192379),
        n = t(278074),
        l = t(754700),
        r = t(887003),
        o = t(742635),
        d = t(458708),
        c = t(481060),
        u = t(70956),
        g = t(497505),
        m = t(918701),
        h = t(210724),
        v = t(130653),
        f = t(415104),
        x = t(78826),
        j = t(37303),
        T = t(134483),
        p = t(683650),
        C = t(920916),
        S = t(341907),
        P = t(478977),
        E = t(456799),
        O = t(210851),
        N = t(602683),
        w = t(916028),
        y = t(749912),
        I = t(815183),
        b = t(899457),
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
      let L = ["png", "gif", "webp"],
        D = [...L, "jpg", "jpeg"],
        M = Array.from(new Set([...D, "gif", "mp4", "webm"]));
      function V(e) {
        var s, t;
        return {
          code: "PREVIEW-MODE-CODE",
          tier: 0,
          platform: g.y$.CROSS_PLATFORM,
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
      function F() {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          {
            streamProgressSeconds: s = 0,
            completedAt: t = null,
            enrolledAt: i = null,
            claimedAt: a = null,
          } = e;
        return {
          userId: "123",
          questId: "1193992107035983872",
          enrolledAt: i,
          completedAt: t,
          claimedAt: a,
          claimedTier: null,
          lastStreamHeartbeatAt: null,
          streamProgressSeconds: s,
          dismissedQuestContent: 0,
          progress: {},
        };
      }
      let k = "1193992107035983872",
        R = {
          id: k,
          preview: !0,
          config: {
            id: k,
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
                  type: r.w.REWARD_CODE,
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
                [l.X.PLAY_ON_DESKTOP]: {
                  eventName: l.X.PLAY_ON_DESKTOP,
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
        var e, s, r, o, d, _, V, k, Z, B, H, K, q, Y;
        let [Q, U] = a.useState(R),
          [X, W] = a.useState(b.a.UNENROLLED),
          [z, G] = a.useState(!1),
          [J, $] = a.useState(!1),
          [ee, es] = a.useState(null);
        let et =
          ((Y = Q.config),
          (0, n.EQ)(Y)
            .with({ configVersion: 2 }, (e) => e.rewardsConfig.rewards)
            .exhaustive());
        function ei(e, s) {
          var t, i;
          if (
            "hero" === e ||
            "questBarHero" === e ||
            "gameTile" === e ||
            "logotype" === e ||
            "heroVideo" === e ||
            "questBarHeroVideo" === e
          )
            U({
              ...Q,
              config:
                ((t = Q.config),
                (i = { [e]: s }),
                (0, n.EQ)(t)
                  .with({ configVersion: 2 }, (e) => ({
                    ...e,
                    assets: { ...e.assets, ...i },
                  }))
                  .exhaustive()),
            });
        }
        function ea(e, s) {
          var t, i, a;
          U({
            ...Q,
            config: {
              ...Q.config,
              videoMetadata: {
                ...Q.config.videoMetadata,
                messages:
                  null !==
                    (a =
                      null === (t = Q.config.videoMetadata) || void 0 === t
                        ? void 0
                        : t.messages) && void 0 !== a
                    ? a
                    : {},
                assets: {
                  ...(null === (i = Q.config.videoMetadata) || void 0 === i
                    ? void 0
                    : i.assets),
                  [e]: s,
                },
              },
            },
          });
        }
        function en(e, s) {
          var t, i;
          if ("questName" === e || "gameTitle" === e || "gamePublisher" === e)
            U({
              ...Q,
              config:
                ((t = Q.config),
                (i = { [e]: s }),
                (0, n.EQ)(t)
                  .with({ configVersion: 2 }, (e) => ({
                    ...e,
                    messages: { ...e.messages, ...i },
                  }))
                  .exhaustive()),
            });
        }
        function el(e, s) {
          var t, i, a;
          U({
            ...Q,
            config: {
              ...Q.config,
              videoMetadata: {
                ...Q.config.videoMetadata,
                assets:
                  null !==
                    (a =
                      null === (t = Q.config.videoMetadata) || void 0 === t
                        ? void 0
                        : t.assets) && void 0 !== a
                    ? a
                    : {},
                messages: {
                  ...(null === (i = Q.config.videoMetadata) || void 0 === i
                    ? void 0
                    : i.messages),
                  [e]: s,
                },
              },
            },
          });
        }
        function er(e, s, t) {
          var i, a, l;
          if ("name" === e || "nameWithArticle" === e)
            U({
              ...Q,
              config:
                ((i = Q.config),
                (a = { [e]: s }),
                (l = t),
                (0, n.EQ)(i)
                  .with({ configVersion: 2 }, (e) => ({
                    ...e,
                    rewardsConfig: {
                      ...e.rewardsConfig,
                      rewards: e.rewardsConfig.rewards.map((e, s) =>
                        s === l
                          ? { ...e, messages: { ...e.messages, ...a } }
                          : e,
                      ),
                    },
                  }))
                  .exhaustive()),
            });
        }
        function eo(e, s) {
          U({
            ...Q,
            config: { ...Q.config, colors: { ...Q.config.colors, [e]: s } },
          });
        }
        function ed() {
          (0, m.Xv)(Q.config)
            ? (0, C.openCollectibleRewardModal)(
                Q,
                g.jn.GIFT_INVENTORY_FOR_YOU,
                !0,
              )
            : (0, S.openQuestsRewardCodeModal)({
                questId: Q.id,
                location: g.jn.GIFT_INVENTORY_FOR_YOU,
                preview: !0,
              });
        }
        let ec = a.useMemo(() => {
            for (let [e, s] of Object.entries(Q.config.taskConfig.tasks))
              if (null != s.target) return s.target;
            return 10 * u.Z.Seconds.MINUTE;
          }, [Q.config.taskConfig.tasks]),
          eu = a.useMemo(
            () => l.X.WATCH_VIDEO in Q.config.taskConfig.tasks,
            [Q.config.taskConfig.tasks],
          );
        return (0, i.jsxs)("div", {
          children: [
            (0, i.jsx)(c.Heading, {
              variant: "heading-lg/bold",
              className: A.heading,
              children: "Quest Preview Tool",
            }),
            (0, i.jsx)("div", {
              className: A.fields,
              children: (0, i.jsx)(w.Z, {
                onSelect: function (e) {
                  if ((es(e), null != e)) U(e);
                },
                quest: ee,
              }),
            }),
            (0, i.jsx)(c.Heading, {
              variant: "heading-md/semibold",
              className: A.subheading,
              children: "Task Config",
            }),
            (0, i.jsx)("div", {
              className: A.fields,
              children: (0, i.jsx)(y.Z, {
                taskDuration: ec,
                taskConfig: Q.config.taskConfig,
                onSelect: function (e) {
                  U({ ...Q, config: { ...Q.config, taskConfig: e } });
                },
              }),
            }),
            (0, i.jsx)(c.Heading, {
              variant: "heading-md/semibold",
              className: A.subheading,
              children: "Messages",
            }),
            (0, i.jsxs)("div", {
              className: A.fields,
              children: [
                (0, i.jsx)(N.Z, {
                  title: "Quest Name",
                  assetKey: "questName",
                  onMessageChange: en,
                  initialValue: Q.config.messages.questName,
                }),
                (0, i.jsx)(N.Z, {
                  title: "Game Title",
                  assetKey: "gameTitle",
                  onMessageChange: en,
                  initialValue: Q.config.messages.gameTitle,
                }),
                (0, i.jsx)(N.Z, {
                  title: "Game Publisher",
                  assetKey: "gamePublisher",
                  onMessageChange: en,
                  initialValue: Q.config.messages.gamePublisher,
                }),
                eu &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(N.Z, {
                        title: "Video Title",
                        assetKey: "videoTitle",
                        onMessageChange: el,
                        initialValue:
                          null === (e = Q.config.videoMetadata) || void 0 === e
                            ? void 0
                            : e.messages.videoTitle,
                      }),
                      (0, i.jsx)(N.Z, {
                        title: "End CTA Title",
                        assetKey: "videoEndCtaTitle",
                        onMessageChange: el,
                        initialValue:
                          null === (s = Q.config.videoMetadata) || void 0 === s
                            ? void 0
                            : s.messages.videoEndCtaTitle,
                      }),
                      (0, i.jsx)(N.Z, {
                        title: "End CTA Subtitle",
                        assetKey: "videoEndCtaSubtitle",
                        onMessageChange: el,
                        initialValue:
                          null === (r = Q.config.videoMetadata) || void 0 === r
                            ? void 0
                            : r.messages.videoEndCtaSubtitle,
                      }),
                    ],
                  }),
              ],
            }),
            (0, i.jsx)(c.Heading, {
              variant: "heading-md/semibold",
              className: A.subheading,
              children: "Assets",
            }),
            (0, i.jsxs)("div", {
              className: A.fields,
              children: [
                (0, i.jsx)(O.Z, {
                  title: "Hero",
                  assetKey: "hero",
                  onFileChange: ei,
                  filters: M,
                  initialValue: Q.config.assets.hero,
                }),
                (0, i.jsx)(O.Z, {
                  title: "Hero Video (optional)",
                  assetKey: "heroVideo",
                  onFileChange: ei,
                  filters: M,
                  initialValue:
                    null !== (K = Q.config.assets.heroVideo) && void 0 !== K
                      ? K
                      : void 0,
                }),
                (0, i.jsx)(O.Z, {
                  title: "Quest Bar Hero",
                  assetKey: "questBarHero",
                  onFileChange: ei,
                  filters: M,
                  initialValue: Q.config.assets.questBarHero,
                }),
                (0, i.jsx)(O.Z, {
                  title: "Quest Bar Hero Video (optional)",
                  assetKey: "questBarHeroVideo",
                  onFileChange: ei,
                  filters: M,
                  initialValue:
                    null !== (q = Q.config.assets.questBarHeroVideo) &&
                    void 0 !== q
                      ? q
                      : void 0,
                }),
                (0, i.jsx)(O.Z, {
                  title: "Game Tile",
                  assetKey: "gameTile",
                  onFileChange: ei,
                  filters: [...D, "svg"],
                  initialValue: Q.config.assets.gameTile,
                }),
                (0, i.jsx)(O.Z, {
                  title: "Logotype",
                  assetKey: "logotype",
                  onFileChange: ei,
                  filters: [...L, "svg"],
                  initialValue: Q.config.assets.logotype,
                }),
                eu &&
                  (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(O.Z, {
                        title: "Quest Video",
                        assetKey: "videoPlayerVideo",
                        onFileChange: ea,
                        filters: M,
                        initialValue:
                          null === (o = Q.config.videoMetadata) || void 0 === o
                            ? void 0
                            : o.assets.videoPlayerVideo,
                      }),
                      (0, i.jsx)(O.Z, {
                        title: "Quest Video (Low Resolution)",
                        assetKey: "videoPlayerVideoLowRes",
                        onFileChange: ea,
                        filters: M,
                        initialValue:
                          null === (d = Q.config.videoMetadata) || void 0 === d
                            ? void 0
                            : d.assets.videoPlayerVideoLowRes,
                      }),
                      (0, i.jsx)(O.Z, {
                        title: "Video Player Thumbnail (optional)",
                        assetKey: "videoPlayerThumbnail",
                        onFileChange: ea,
                        filters: D,
                        initialValue:
                          null === (V = Q.config.videoMetadata) || void 0 === V
                            ? void 0
                            : null === (_ = V.assets) || void 0 === _
                              ? void 0
                              : _.videoPlayerThumbnail,
                      }),
                      (0, i.jsx)(O.Z, {
                        title: "Quest Bar Preview Video (optional)",
                        assetKey: "questBarPreviewVideo",
                        onFileChange: ea,
                        filters: M,
                        initialValue:
                          null === (k = Q.config.videoMetadata) || void 0 === k
                            ? void 0
                            : k.assets.questBarPreviewVideo,
                      }),
                      (0, i.jsx)(O.Z, {
                        title: "Quest Home Video (optional)",
                        assetKey: "questHomeVideo",
                        onFileChange: ea,
                        filters: M,
                        initialValue:
                          null === (Z = Q.config.videoMetadata) || void 0 === Z
                            ? void 0
                            : Z.assets.questHomeVideo,
                      }),
                    ],
                  }),
              ],
            }),
            et.map((e, s) =>
              (0, i.jsxs)(
                "div",
                {
                  children: [
                    (0, i.jsxs)(c.Heading, {
                      variant: "heading-md/semibold",
                      className: A.subheading,
                      children: ["Reward #", s + 1],
                    }),
                    (0, i.jsxs)("div", {
                      className: A.fields,
                      children: [
                        (0, i.jsx)(N.Z, {
                          title: "Name",
                          assetKey: "name",
                          onMessageChange: (e, t) => er(e, t, s),
                          initialValue: e.messages.name,
                        }),
                        (0, i.jsx)(N.Z, {
                          title: "Name With Article",
                          assetKey: "nameWithArticle",
                          onMessageChange: (e, t) => er(e, t, s),
                          initialValue: e.messages.nameWithArticle,
                        }),
                        (0, i.jsx)(O.Z, {
                          title: "Asset",
                          assetKey: "asset",
                          onFileChange: (e, t) =>
                            (function (e, s, t) {
                              var i, a, l;
                              if ("asset" === e)
                                U({
                                  ...Q,
                                  config:
                                    ((i = Q.config),
                                    (a = s),
                                    (l = t),
                                    (0, n.EQ)(i)
                                      .with({ configVersion: 2 }, (e) => ({
                                        ...e,
                                        rewardsConfig: {
                                          ...e.rewardsConfig,
                                          rewards: e.rewardsConfig.rewards.map(
                                            (e, s) =>
                                              s === l ? { ...e, asset: a } : e,
                                          ),
                                        },
                                      }))
                                      .exhaustive()),
                                });
                            })(e, t, s),
                          filters: M,
                          initialValue: e.asset,
                        }),
                        (0, i.jsxs)(c.FormItem, {
                          children: [
                            (0, i.jsx)(c.FormTitle, {
                              children: "Claim Modal",
                            }),
                            (0, i.jsx)(c.Button, {
                              color: c.ButtonColors.BRAND,
                              onClick: ed,
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
            (0, i.jsx)(c.Heading, {
              variant: "heading-md/semibold",
              className: A.subheading,
              children: "Colors & Quest States",
            }),
            (0, i.jsxs)("div", {
              className: A.fields,
              children: [
                (0, i.jsxs)("div", {
                  className: A.fields,
                  style: { marginBottom: 0 },
                  children: [
                    (0, i.jsx)(P.Z, {
                      title: "Primary",
                      colorKey: "primary",
                      onChange: eo,
                      value: Q.config.colors.primary,
                    }),
                    (0, i.jsx)(P.Z, {
                      title: "Secondary",
                      colorKey: "secondary",
                      onChange: eo,
                      value: Q.config.colors.secondary,
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: A.fields,
                  children: (0, i.jsx)(I.Z, {}),
                }),
                (0, i.jsx)(b.Z, {
                  onChange: function (e) {
                    switch ((W(e), e)) {
                      case b.a.UNENROLLED:
                        U({ ...Q, userStatus: null });
                        break;
                      case b.a.ENROLLED:
                        U({
                          ...Q,
                          userStatus: F({
                            enrolledAt: new Date().toISOString(),
                          }),
                        });
                        break;
                      case b.a.COMPLETED_25:
                        U({
                          ...Q,
                          userStatus: F({
                            enrolledAt: new Date().toISOString(),
                            streamProgressSeconds:
                              ec * u.Z.Seconds.MINUTE * 0.25,
                          }),
                        });
                        break;
                      case b.a.COMPLETED_50:
                        U({
                          ...Q,
                          userStatus: F({
                            enrolledAt: new Date().toISOString(),
                            streamProgressSeconds:
                              ec * u.Z.Seconds.MINUTE * 0.5,
                          }),
                        });
                        break;
                      case b.a.COMPLETED_75:
                        U({
                          ...Q,
                          userStatus: F({
                            enrolledAt: new Date().toISOString(),
                            streamProgressSeconds:
                              ec * u.Z.Seconds.MINUTE * 0.75,
                          }),
                        });
                        break;
                      case b.a.COMPLETED_100:
                        U({
                          ...Q,
                          userStatus: F({
                            completedAt: new Date().toISOString(),
                            enrolledAt: new Date().toISOString(),
                            streamProgressSeconds: ec * u.Z.Seconds.MINUTE,
                          }),
                        });
                        break;
                      case b.a.CLAIMED:
                        U({
                          ...Q,
                          userStatus: F({
                            claimedAt: new Date().toISOString(),
                            completedAt: new Date().toISOString(),
                            enrolledAt: new Date().toISOString(),
                            streamProgressSeconds: ec * u.Z.Seconds.MINUTE,
                          }),
                        });
                    }
                  },
                  value: X,
                }),
              ],
            }),
            (0, i.jsx)(c.Heading, {
              variant: "heading-lg/bold",
              className: A.heading,
              children: "Component Previews",
            }),
            (0, i.jsxs)("div", {
              className: A.componentPreviews,
              children: [
                (0, i.jsxs)(E.Z, {
                  withBorder: !0,
                  children: [
                    (0, i.jsx)(c.FormTitle, { children: "Quest Bar" }),
                    (0, i.jsxs)("div", {
                      className: A.questBarPreviewWrapper,
                      children: [
                        (null === (B = Q.userStatus) || void 0 === B
                          ? void 0
                          : B.claimedAt) != null &&
                          (0, i.jsx)(c.Text, {
                            color: "text-secondary",
                            variant: "text-sm/normal",
                            children:
                              "The Quest Bar is hidden when the user has claimed the reward.",
                          }),
                        (0, i.jsx)("div", {
                          className: A.questBarPreview,
                          children: (0, i.jsx)(x.p, {
                            isPreview: !0,
                            source: "preview",
                            questId: "0",
                            children: (0, i.jsx)(v.Z, {
                              children: (0, i.jsx)(h.P, { quest: Q }),
                            }),
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, i.jsxs)(E.Z, {
                  withBorder: !0,
                  children: [
                    (0, i.jsx)(c.FormTitle, { children: "Quest Home Card" }),
                    (0, i.jsx)(x.p, {
                      isPreview: !0,
                      source: "preview",
                      questId: "0",
                      children: (0, i.jsx)(f.Z, {
                        quest: Q,
                        className: A.questTile,
                        questContent: g.jn.QUEST_HOME_DESKTOP,
                        contentPosition: 0,
                        rowIndex: 0,
                      }),
                    }),
                  ],
                }),
                (0, i.jsxs)(E.Z, {
                  withBorder: !0,
                  children: [
                    (0, i.jsx)(c.FormTitle, {
                      children: "Channel Call Header",
                    }),
                    (null === (H = Q.userStatus) || void 0 === H
                      ? void 0
                      : H.claimedAt) != null &&
                      (0, i.jsx)(c.Text, {
                        color: "text-secondary",
                        variant: "text-sm/normal",
                        children:
                          "The Quest Channel Call Header is hidden when the user has claimed the reward.",
                      }),
                    (0, i.jsx)("div", {
                      className: A.questBarPreviewWrapper,
                      children: (0, i.jsx)(x.p, {
                        isPreview: !0,
                        source: "preview",
                        questId: "0",
                        children: (0, i.jsx)("div", {
                          className: A.questChannelCallHeaderPreview,
                          children: (0, i.jsx)(T.Z, {
                            channelId: "123",
                            previewQuest: Q,
                            isParticipatingOverride: z,
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: A.toggleSwitch,
                  children: (0, i.jsx)(c.FormItem, {
                    children: (0, i.jsx)(c.FormSwitch, {
                      value: z,
                      onChange: function (e) {
                        G(e);
                      },
                      hideBorder: !0,
                      children: "Is Participating:",
                    }),
                  }),
                }),
                (0, i.jsxs)(E.Z, {
                  withBorder: !0,
                  children: [
                    (0, i.jsx)(c.FormTitle, { children: "Quest Card Embed" }),
                    J
                      ? (0, i.jsx)(p.o, {})
                      : (0, i.jsx)(
                          j.Z,
                          { quest: Q, location: g.jn.QUESTS_EMBED },
                          Q.id,
                        ),
                  ],
                }),
                (0, i.jsx)("div", {
                  className: A.toggleSwitch,
                  children: (0, i.jsx)(c.FormItem, {
                    children: (0, i.jsx)(c.FormSwitch, {
                      value: J,
                      onChange: $,
                      hideBorder: !0,
                      children: "Invalid Quests Embed:",
                    }),
                  }),
                }),
                eu &&
                  (0, i.jsxs)(E.Z, {
                    withBorder: !0,
                    allowClicks: !0,
                    children: [
                      (0, i.jsx)(c.FormTitle, { children: "Video Player" }),
                      (0, i.jsx)(c.Button, {
                        onClick: () => {
                          (0, c.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([
                              t.e("32249"),
                              t.e("84307"),
                            ]).then(t.bind(t, 536687));
                            return (s) => {
                              var t;
                              return (0, i.jsx)(e, {
                                ...s,
                                videoSessionId: "fake-quest-session-id",
                                questId:
                                  null !== (t = Q.id) && void 0 !== t
                                    ? t
                                    : "fake-quest-id",
                                overrideQuest: Q,
                                autoplay: !0,
                              });
                            };
                          });
                        },
                        children: "Open Video Player Modal",
                      }),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      class B extends a.Component {
        componentDidCatch(e) {
          this.setState({ error: e });
        }
        render() {
          let { error: e, renderKey: s } = this.state;
          return null != e
            ? (0, i.jsxs)("div", {
                className: A.errorBoundary,
                children: [
                  (0, i.jsx)(c.CircleWarningIcon, {
                    className: A.errorBoundaryIcon,
                  }),
                  (0, i.jsx)(c.Heading, {
                    variant: "heading-lg/semibold",
                    children: "Something broke in the Quest preview tool :(",
                  }),
                  (0, i.jsx)(c.Button, {
                    color: c.ButtonColors.PRIMARY,
                    onClick: this.handleResetState,
                    children: "Reset",
                  }),
                  null != e.message &&
                    (0, i.jsx)(c.Card, {
                      className: A.errorMessageWrapper,
                      children: (0, i.jsx)("code", {
                        className: A.errorMessage,
                        children: e.message,
                      }),
                    }),
                ],
              })
            : (0, i.jsx)(Z, {}, s);
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
      var i,
        a,
        n = t(200651);
      t(192379);
      var l = t(754700),
        r = t(481060),
        o = t(70956),
        d = t(416457);
      ((a = i || (i = {}))[(a.PLAY_DESKTOP = 0)] = "PLAY_DESKTOP"),
        (a[(a.STREAM_DESKTOP = 1)] = "STREAM_DESKTOP"),
        (a[(a.WATCH_VIDEO = 2)] = "WATCH_VIDEO"),
        (a[(a.PLAY_CONSOLE = 3)] = "PLAY_CONSOLE"),
        (a[(a.PLAY_DESKTOP_CONSOLE = 4)] = "PLAY_DESKTOP_CONSOLE"),
        (a[(a.PLAY_ACTIVITY = 5)] = "PLAY_ACTIVITY");
      let c = [
        { value: 1, label: "Stream Desktop" },
        { value: 0, label: "Play Desktop" },
        { value: 3, label: "Play Console" },
        { value: 4, label: "Play Desktop & Console" },
        { value: 2, label: "Watch Video" },
        { value: 5, label: "Play Activity" },
      ];
      s.Z = function (e) {
        let { onSelect: s, taskDuration: t = 10, taskConfig: i } = e;
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsxs)(r.FormItem, {
              children: [
                (0, n.jsx)(r.FormTitle, {
                  tag: r.FormTitleTags.H5,
                  children: "Task Type(s)",
                }),
                (0, n.jsx)(r.FormText, {
                  children: (0, n.jsx)(r.Select, {
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
                            l.X.PLAY_ON_PLAYSTATION in e ||
                            l.X.PLAY_ON_XBOX in e,
                          t =
                            l.X.PLAY_ON_DESKTOP in e ||
                            l.X.PLAY_ON_DESKTOP_V2 in e,
                          i = l.X.STREAM_ON_DESKTOP in e,
                          a = l.X.WATCH_VIDEO in e,
                          n = l.X.PLAY_ACTIVITY in e;
                        return s && t
                          ? 4
                          : s
                            ? 3
                            : t
                              ? 0
                              : i
                                ? 1
                                : a
                                  ? 2
                                  : n
                                    ? 5
                                    : void 0;
                      })(i.tasks),
                    select: (e) => {
                      s({
                        ...i,
                        tasks: (function (e, s) {
                          let t = [];
                          switch (e) {
                            case 1:
                              t = [l.X.STREAM_ON_DESKTOP];
                              break;
                            case 0:
                              t = [l.X.PLAY_ON_DESKTOP];
                              break;
                            case 3:
                              t = [l.X.PLAY_ON_PLAYSTATION, l.X.PLAY_ON_XBOX];
                              break;
                            case 4:
                              t = [
                                l.X.PLAY_ON_DESKTOP,
                                l.X.PLAY_ON_PLAYSTATION,
                                l.X.PLAY_ON_XBOX,
                              ];
                              break;
                            case 2:
                              t = [l.X.WATCH_VIDEO];
                              break;
                            case 5:
                              t = [l.X.PLAY_ACTIVITY];
                          }
                          let i = {};
                          for (let e of t)
                            i[e] = { eventName: e, target: s, externalIds: [] };
                          return i;
                        })(e, t),
                      });
                    },
                    serialize: String,
                  }),
                }),
              ],
            }),
            (0, n.jsxs)(r.FormItem, {
              children: [
                (0, n.jsx)(r.FormTitle, {
                  tag: r.FormTitleTags.H5,
                  children: "Task Duration",
                }),
                (0, n.jsx)(r.FormText, {
                  children: (0, n.jsx)(r.TextInput, {
                    value: String(t / o.Z.Seconds.MINUTE),
                    onChange: function (e) {
                      let t = Number(e);
                      if (isNaN(t)) return;
                      t *= o.Z.Seconds.MINUTE;
                      let a = { ...i.tasks };
                      for (let [e, s] of Object.entries(a))
                        a[e] = { ...s, target: t };
                      s({ ...i, tasks: a });
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
      var i = t(200651);
      t(192379);
      var a = t(481060),
        n = t(153867),
        l = t(410030),
        r = t(583901),
        o = t(231338);
      s.Z = function () {
        let e = (0, l.ZP)();
        return (0, i.jsxs)(a.FormItem, {
          children: [
            (0, i.jsx)(a.FormTitle, {
              tag: a.FormTitleTags.H5,
              children: "Theme",
            }),
            (0, i.jsxs)("div", {
              style: { display: "flex", justifyContent: "space-between" },
              children: [
                (0, i.jsx)(r.bD, {
                  theme: o.BR.LIGHT,
                  isSelected: e === o.BR.LIGHT,
                  onSelect: () => (0, n.ZI)({ theme: o.BR.LIGHT }),
                }),
                (0, i.jsx)(r.bD, {
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
          return a;
        },
      });
      var i,
        a,
        n = t(200651);
      t(192379);
      var l = t(481060);
      ((i = a || (a = {}))[(i.UNENROLLED = 0)] = "UNENROLLED"),
        (i[(i.ENROLLED = 1)] = "ENROLLED"),
        (i[(i.COMPLETED_25 = 2)] = "COMPLETED_25"),
        (i[(i.COMPLETED_50 = 3)] = "COMPLETED_50"),
        (i[(i.COMPLETED_75 = 4)] = "COMPLETED_75"),
        (i[(i.COMPLETED_100 = 5)] = "COMPLETED_100"),
        (i[(i.CLAIMED = 6)] = "CLAIMED");
      s.Z = function (e) {
        let { onChange: s, value: t } = e;
        return (0, n.jsxs)(l.FormItem, {
          children: [
            (0, n.jsx)(l.FormTitle, {
              tag: l.FormTitleTags.H5,
              children: "User State",
            }),
            (0, n.jsx)(l.FormText, {
              children: (0, n.jsx)(l.Select, {
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
      var i, a;
      t.d(s, {
        r: function () {
          return i;
        },
      }),
        ((a = i || (i = {})).AND = "and"),
        (a.OR = "or");
    },
  },
]);
//# sourceMappingURL=db7b273a84e10b569fa3.js.map
