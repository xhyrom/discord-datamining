"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["68820"],
  {
    878428: function (e) {
      e.exports = "/assets/0b1b4e8a32c83af543b2.svg";
    },
    731914: function (e) {
      e.exports = "/assets/d48e39cc8f01a27dd104.png";
    },
    336662: function (e) {
      e.exports = "/assets/2de36fcf9a161ee2b678.png";
    },
    655130: function (e) {
      e.exports = "/assets/f3ddd6b40f3f92dea250.png";
    },
    723067: function (e) {
      e.exports = "/assets/1b135af3de3877fac1ff.svg";
    },
    4461: function (e, n, t) {
      t.d(n, {
        P: function () {
          return l;
        },
      });
      var a = t(470079),
        i = t(135431);
      function l(e, n) {
        let t = a.useMemo(
          () =>
            null != e &&
            (0, i.E)({
              customInstallUrl: e.custom_install_url,
              installParams: e.install_params,
              integrationTypesConfig: e.integration_types_config,
            }),
          [e],
        );
        return {
          canInstall: t,
          install: a.useCallback(
            (t) => {
              if (null != e)
                (0, i.L)({
                  applicationId: e.id,
                  customInstallUrl: e.custom_install_url,
                  installParams: e.install_params,
                  integrationTypesConfig: e.integration_types_config,
                  guildId: null != n ? n : void 0,
                  source: t,
                });
            },
            [e, n],
          ),
        };
      }
    },
    465082: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return C;
        },
      });
      var a = t(735250),
        i = t(470079),
        l = t(120356),
        s = t.n(l),
        r = t(91192),
        c = t(481060),
        o = t(768581),
        d = t(4461),
        u = t(924489),
        _ = t(491576),
        g = t(689938),
        m = t(734888);
      function C(e) {
        var n, t, l, C;
        let {
            application: p,
            className: f,
            childrenClassName: h,
            showAdd: x,
            showMutualGuilds: I,
            showPrimaryCategory: R,
            children: T,
            onView: b,
            guildCountPosition: A = "top",
            subheaderTextVariant: v = "text-sm/normal",
            mutualGuildShownMax: E,
            guildIconSize: P,
            source: N,
          } = e,
          j = (0, r.JA)(p.id),
          S = o.ZP.getApplicationIconURL({ id: p.id, icon: p.icon, size: 48 }),
          { canInstall: y, install: O } = (0, d.P)(p),
          M = (0, _.Z)({ application: p, showMutualGuilds: I }),
          D = i.useCallback(
            (e) => {
              e.stopPropagation(), O(N);
            },
            [O, N],
          ),
          Z = null === (n = p.categories) || void 0 === n ? void 0 : n[0],
          L =
            (null !==
              (l =
                null === (t = p.directory_entry) || void 0 === t
                  ? void 0
                  : t.guild_count) && void 0 !== l
              ? l
              : 0) > 0 || M.length > 0,
          Y = (0, a.jsx)(u.Z, {
            application: p,
            textVariant: v,
            mutualGuilds: M,
            mutualGuildShownMax: E,
            guildIconSize: P,
            compact: !0,
          }),
          k = R && null != Z,
          H = L && "top" === A,
          U = L && "bottom" === A,
          G = null !== (C = p.storefront_available) && void 0 !== C && C,
          w = (0, a.jsxs)("article", {
            children: [
              (0, a.jsxs)("div", {
                className: m.topWrapper,
                children: [
                  (0, a.jsx)("img", {
                    className: m.icon,
                    alt: "",
                    "aria-hidden": !0,
                    src: S,
                    width: 48,
                    height: 48,
                  }),
                  (0, a.jsxs)("div", {
                    className: m.info,
                    children: [
                      (0, a.jsx)(c.Heading, {
                        variant: "heading-md/medium",
                        children: p.name,
                      }),
                      (k || H) &&
                        (0, a.jsxs)("div", {
                          className: m.details,
                          children: [
                            k
                              ? (0, a.jsx)(c.Text, {
                                  tag: "span",
                                  color: "header-secondary",
                                  variant: v,
                                  children: Z.name,
                                })
                              : null,
                            H
                              ? (0, a.jsxs)(a.Fragment, {
                                  children: [
                                    k
                                      ? (0, a.jsx)("span", {
                                          className: m.bullet,
                                          children: "•",
                                        })
                                      : null,
                                    Y,
                                    G
                                      ? (0, a.jsxs)("div", {
                                          className: m.premiumContainer,
                                          children: [
                                            (0, a.jsx)("span", {
                                              className: m.bullet,
                                              children: "•",
                                            }),
                                            (0, a.jsx)(c.TicketIcon, {
                                              size: "xs",
                                              color: "currentColor",
                                            }),
                                            (0, a.jsx)(c.Text, {
                                              variant: "text-sm/medium",
                                              className: m.premiumText,
                                              children:
                                                g.Z.Messages
                                                  .APPLICATION_DIRECTORY_LISTING_TOOLTIP_PREMIUM,
                                            }),
                                          ],
                                        })
                                      : null,
                                  ],
                                })
                              : null,
                          ],
                        }),
                    ],
                  }),
                  x
                    ? (0, a.jsx)(c.Button, {
                        size: c.Button.Sizes.SMALL,
                        onClick: D,
                        disabled: !y,
                        children: g.Z.Messages.APP_DIRECTORY_LISTING_ADD_BUTTON,
                      })
                    : null,
                ],
              }),
              null != T || null != h
                ? (0, a.jsx)("div", {
                    className: s()(h, m.__invalid_children),
                    children: T,
                  })
                : null,
              U
                ? (0, a.jsx)("div", {
                    className: m.bottomGuildCountContainer,
                    children: Y,
                  })
                : null,
            ],
          });
        return null != b
          ? (0, a.jsx)(c.Clickable, {
              tag: "li",
              onClick: () => b({ mutualGuilds: M }),
              className: s()(f, m.listing, m.clickable),
              ...j,
              children: w,
            })
          : (0, a.jsx)(c.FocusRing, {
              children: (0, a.jsx)("li", {
                className: s()(f, m.listing),
                ...j,
                children: w,
              }),
            });
      }
    },
    33146: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      }),
        t(411104);
      var a = t(735250);
      t(470079);
      var i = t(481060),
        l = t(34674),
        s = t(927356),
        r = t(689938);
      function c(e) {
        let n,
          t,
          { category: c, className: o, onViewAll: d } = e;
        return (
          null == c || (0, l.m0)(c)
            ? ((n = r.Z.Messages.APP_DIRECTORY_EMPTY_SEARCH_HEADING),
              (t = r.Z.Messages.APP_DIRECTORY_EMPTY_SEARCH_SUBHEADING))
            : ((n =
                r.Z.Messages.APP_DIRECTORY_EMPTY_CATEGORY_SEARCH_HEADING.format(
                  { categoryName: c.name },
                )),
              (t =
                r.Z.Messages.APP_DIRECTORY_EMPTY_CATEGORY_SEARCH_SUBHEADING.format(
                  {
                    viewAllHook: (e, n) =>
                      (0, a.jsx)(i.Anchor, { onClick: d, children: e }, n),
                  },
                ))),
          (0, a.jsx)(s.Z, { className: o, heading: n, body: t })
        );
      }
    },
    927356: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var a = t(735250),
        i = t(470079),
        l = t(120356),
        s = t.n(l),
        r = t(481060),
        c = t(689938),
        o = t(202371),
        d = t(902294);
      function u(e) {
        let {
          heading: n = c.Z.Messages.APP_DIRECTORY_ERROR_HEADING,
          body: t = c.Z.Messages.APP_DIRECTORY_ERROR_BODY,
          className: l,
        } = e;
        return (0, a.jsxs)("div", {
          className: s()(o.container, l),
          children: [
            (0, a.jsx)("img", {
              className: o.image,
              src: d,
              alt: c.Z.Messages.APP_DIRECTORY_CONFUSED_CLYDE_IMAGE_ALT,
            }),
            (0, a.jsxs)(i.Fragment, {
              children: [
                (0, a.jsx)(r.Heading, {
                  className: o.header,
                  variant: "heading-xl/semibold",
                  children: n,
                }),
                (0, a.jsx)(r.Text, { variant: "text-md/normal", children: t }),
              ],
            }),
          ],
        });
      }
    },
    190733: function (e, n, t) {
      t(47120);
      var a = t(735250),
        i = t(470079),
        l = t(120356),
        s = t.n(l),
        r = t(481060),
        c = t(981631),
        o = t(689938),
        d = t(794920);
      n.Z = i.forwardRef(function (e, n) {
        let {
            query: t,
            canShowCta: l = !1,
            onChange: u,
            onSubmit: _,
            className: g,
          } = e,
          [m, C] = i.useState(!1);
        return (0, a.jsx)(r.SearchBox, {
          ref: n,
          className: s()(d.search, g),
          label: o.Z.Messages.APP_DIRECTORY_SEARCH_PLACEHOLDER,
          placeholder: o.Z.Messages.APP_DIRECTORY_SEARCH_PLACEHOLDER,
          searchTerm: t,
          cta:
            l && m && t.length > 0
              ? o.Z.Messages.GUILD_DISCOVERY_SEARCH_ENTER_CTA
              : null,
          onChange: u,
          onClear: () => u(""),
          onFocus: () => C(!0),
          onBlur: () => C(!1),
          onKeyPress: (e) => {
            e.charCode === c.yXg.ENTER && (null == _ || _());
          },
          autoFocus: !0,
        });
      });
    },
    112884: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(481060),
        l = t(689938),
        s = t(977993);
      function r(e) {
        let {} = e;
        return (0, a.jsxs)("div", {
          className: s.container,
          children: [
            (0, a.jsxs)("div", {
              className: s.content,
              children: [
                (0, a.jsx)(i.Text, {
                  variant: "text-sm/semibold",
                  className: s.title,
                  children: l.Z.Messages.APP_DIRECTORY_MUSIC_BANNER_TITLE,
                }),
                (0, a.jsx)(i.Heading, {
                  variant: "heading-xxl/medium",
                  children: l.Z.Messages.APP_DIRECTORY_MUSIC_BANNER_HEADER,
                }),
                (0, a.jsx)(i.Text, {
                  variant: "text-md/normal",
                  children: l.Z.Messages.APP_DIRECTORY_MUSIC_BANNER_CONTENT,
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: s.imageContainer,
              children: (0, a.jsx)("img", {
                className: s.image,
                src: t(723067),
                alt: "",
              }),
            }),
          ],
        });
      }
    },
    639002: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(481060),
        l = t(782568),
        s = t(626135),
        r = t(132871),
        c = t(981631),
        o = t(689938),
        d = t(862661);
      function u(e) {
        let { guildId: n } = e;
        return (0, a.jsxs)("div", {
          className: d.container,
          children: [
            (0, a.jsx)("img", { className: d.image, src: t(731914), alt: "" }),
            (0, a.jsxs)("div", {
              className: d.content,
              children: [
                (0, a.jsx)(i.Heading, {
                  variant: "heading-md/extrabold",
                  children: o.Z.Messages.APP_DIRECTORY_MUSIC_FOOTER_HEADER,
                }),
                (0, a.jsx)(i.Text, {
                  variant: "text-sm/medium",
                  children: o.Z.Messages.APP_DIRECTORY_MUSIC_FOOTER_CONTENT,
                }),
              ],
            }),
            (0, a.jsx)(i.Button, {
              size: i.Button.Sizes.SMALL,
              onClick: function () {
                s.default.track(c.rMx.APP_DIRECTORY_CTA_CLICKED, {
                  cta: "submit_music_app",
                  current_page: r.ApplicationDirectoryViews.SEARCH,
                  guild_id: n,
                }),
                  (0, l.Z)("https://dis.gd/music-search-page-inclusion");
              },
              color: i.Button.Colors.TRANSPARENT,
              className: d.button,
              children: o.Z.Messages.APP_DIRECTORY_MUSIC_FOOTER_CTA,
            }),
          ],
        });
      }
    },
    781627: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return r;
        },
      });
      var a = t(735250);
      t(470079);
      var i = t(481060),
        l = t(689938),
        s = t(57778);
      function r(e) {
        let {
            imageSrc: n,
            header: t,
            description: r,
            secondaryInfo: c,
            mutualGuildCount: o,
            ctaLabel: d,
            onCtaClick: u,
            children: _,
          } = e,
          g = (0, a.jsx)(a.Fragment, {
            children: (0, a.jsxs)("div", {
              className: s.topWrapper,
              children: [
                (0, a.jsx)("div", {
                  className: s.__invalid_imageContainer,
                  children: (0, a.jsx)("img", {
                    alt: "",
                    className: s.image,
                    src: n,
                  }),
                }),
                (0, a.jsxs)("div", {
                  className: s.content,
                  children: [
                    (0, a.jsxs)("div", {
                      className: s.header,
                      children: [
                        (0, a.jsxs)("div", {
                          className: s.info,
                          children: [
                            (0, a.jsx)(i.Heading, {
                              className: s.name,
                              variant: "heading-md/semibold",
                              children: t,
                            }),
                            null != o
                              ? o
                              : (0, a.jsx)(a.Fragment, {
                                  children: (0, a.jsxs)("div", {
                                    className: s.details,
                                    children: [
                                      (0, a.jsx)(i.Text, {
                                        tag: "span",
                                        color: "header-secondary",
                                        variant: "text-sm/medium",
                                        children:
                                          l.Z.Messages
                                            .APP_DIRECTORY_MUSIC_CATEGORY,
                                      }),
                                      null != c
                                        ? (0, a.jsxs)(a.Fragment, {
                                            children: [
                                              (0, a.jsx)(i.Text, {
                                                tag: "span",
                                                color: "interactive-muted",
                                                variant: "text-sm/normal",
                                                className: s.bullet,
                                                children: "•",
                                              }),
                                              (0, a.jsx)(i.Text, {
                                                tag: "span",
                                                color: "header-secondary",
                                                variant: "text-sm/medium",
                                                children: c,
                                              }),
                                            ],
                                          })
                                        : null,
                                    ],
                                  }),
                                }),
                          ],
                        }),
                        null != u && null != d
                          ? (0, a.jsx)(i.Button, {
                              size: i.Button.Sizes.SMALL,
                              onClick: u,
                              className: s.__invalid_button,
                              children: d,
                            })
                          : null,
                      ],
                    }),
                    null != r
                      ? (0, a.jsx)(i.Text, {
                          className: s.listingDescription,
                          variant: "text-md/normal",
                          children: r,
                        })
                      : null,
                    (0, a.jsx)("div", { className: s.children, children: _ }),
                  ],
                }),
              ],
            }),
          });
        return (0, a.jsx)(i.FocusRing, {
          children: (0, a.jsx)("div", { className: s.listing, children: g }),
        });
      }
    },
    101741: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return b;
        },
      }),
        t(47120);
      var a = t(735250);
      t(470079);
      var i = t(209173),
        l = t(782568),
        s = t(626135),
        r = t(924489),
        c = t(132871),
        o = t(147890),
        d = t(491576),
        u = t(112884),
        _ = t(639002),
        g = t(781627),
        m = t(981631),
        C = t(689938),
        p = t(40694);
      let f = new Map([["890343617762304070", { imageSrc: t(336662) }]]),
        h = new Map(),
        x = new Map([[m.ABu.SPOTIFY, { imageSrc: t(655130) }]]);
      function I(e) {
        var n, t;
        let { result: i } = e,
          l = i.data,
          s = (0, d.Z)({ application: l }),
          c = f.get(i.data.id);
        if (null == c) return null;
        let u =
            s.length > 0
              ? (0, a.jsx)(r.Z, {
                  application: i.data,
                  textVariant: "text-sm/semibold",
                  mutualGuilds: s,
                  mutualGuildShownMax: 3,
                  guildIconSize: r.x.SMALL,
                  compact: !0,
                })
              : null,
          _ =
            null !==
              (t =
                null === (n = l.directory_entry) || void 0 === n
                  ? void 0
                  : n.guild_count) && void 0 !== t
              ? t
              : 0,
          m =
            _ > 0
              ? C.Z.Messages.APP_DIRECTORY_SHORT_GUILD_COUNT.format({
                  guildCount: _,
                })
              : void 0;
        return (0, a.jsx)(g.Z, {
          imageSrc: c.imageSrc,
          header: i.data.name,
          description: i.data.description,
          secondaryInfo: m,
          ctaLabel: C.Z.Messages.APPLICATION_ADD_BUTTON,
          mutualGuildCount: u,
          onCtaClick: () => (0, o.goToApplication)({ applicationId: l.id }),
        });
      }
      function R(e) {
        let { result: n } = e,
          t = h.get(n.data.id);
        return null == t
          ? null
          : (0, a.jsx)(g.Z, {
              imageSrc: t.imageSrc,
              header: n.data.name,
              description: n.data.description,
              secondaryInfo: C.Z.Messages.APP_DIRECTORY_ACTIVITY_LABEL,
            });
      }
      function T(e) {
        let n,
          t,
          i,
          { result: r, guildId: o } = e,
          d = x.get(r.data.name);
        return null == d
          ? null
          : (r.data.name === m.ABu.SPOTIFY &&
                ((n = C.Z.Messages.APP_DIRECTORY_SPOTIFY_TITLE),
                (t = C.Z.Messages.APP_DIRECTORY_SPOTIFY_DESCRIPTION.format()),
                (i = () => {
                  s.default.track(m.rMx.APP_DIRECTORY_CTA_CLICKED, {
                    current_page: c.ApplicationDirectoryViews.SEARCH,
                    cta: "spotify",
                    guild_id: o,
                  }),
                    (0, l.Z)(
                      "https://support.discord.com/hc/en-us/articles/360000167212-Discord-Spotify-Connection",
                    );
                })),
              null == n || null == t || null == i)
            ? null
            : (0, a.jsx)(g.Z, {
                imageSrc: d.imageSrc,
                header: n,
                description: t,
                ctaLabel: C.Z.Messages.LEARN_MORE,
                onCtaClick: i,
                secondaryInfo: C.Z.Messages.APP_DIRECTORY_CONNECTION_LABEL,
              });
      }
      function b(e) {
        let { results: n, guildId: t } = e;
        return (0, a.jsxs)("div", {
          className: p.container,
          children: [
            (0, a.jsx)(u.Z, {}),
            (0, a.jsx)("div", {
              className: p.list,
              children: n.map((e, n) => {
                let l = "".concat(n).concat(e.type);
                if (e.type === i.s.APPLICATION)
                  return (0, a.jsx)(I, { result: e }, l);
                if (e.type === i.s.ACTIVITY_APPLICATION)
                  return (0, a.jsx)(R, { result: e }, l);
                if (e.type === i.s.CONNECTION)
                  return (0, a.jsx)(T, { guildId: t, result: e }, l);
              }),
            }),
            (0, a.jsx)(_.Z, { guildId: t }),
          ],
        });
      }
    },
    675869: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return D;
          },
        }),
        t(610138),
        t(216116),
        t(78328),
        t(815648),
        t(47120);
      var a = t(735250),
        i = t(470079),
        l = t(392711),
        s = t.n(l),
        r = t(991637),
        c = t.n(r),
        o = t(266067),
        d = t(91192),
        u = t(209173),
        _ = t(375051),
        g = t(399606),
        m = t(481060),
        C = t(209613),
        p = t(626135),
        f = t(674588),
        h = t(463571),
        x = t(894653),
        I = t(809547),
        R = t(738130),
        T = t(34674),
        b = t(465082),
        A = t(33146),
        v = t(125909),
        E = t(190733),
        P = t(101741),
        N = t(132871),
        j = t(147890),
        S = t(166996),
        y = t(981631),
        O = t(609368),
        M = t(878428);
      function D() {
        var e;
        let n;
        let t = (0, N.useApplicationDirectoryHistory)((e) => e.guildId),
          l = (0, g.e7)([x.Z], () => x.Z.getCategories()),
          r = (0, o.TH)(),
          {
            queryParam: c,
            pageParam: d,
            categoryIdParam: m,
          } = i.useMemo(() => {
            let e = new URLSearchParams(r.search);
            return {
              queryParam: e.get("q"),
              pageParam: e.get("page"),
              categoryIdParam: e.get("category_id"),
            };
          }, []),
          [C, h] = i.useState(null != d ? Number(d) : 1),
          [b, D] = i.useState(null != c ? c : ""),
          [L, Y] = i.useState(
            null !== (e = Number(m)) && void 0 !== e ? e : T.MU,
          ),
          k = i.useMemo(
            () => (null == l ? void 0 : l.find((e) => e.id === L)),
            [l, L],
          ),
          H = i.useCallback((e) => {
            Y(e.id), h(1);
          }, []),
          U = i.useCallback((e) => {
            D(e), h(1), 0 === e.length && Y(T.MU);
          }, []),
          G = i.useCallback(
            (e) => {
              var n, t;
              let { query: a, categoryId: i, page: l } = e,
                s = new URLSearchParams(r.search);
              "" === a ? s.delete("q") : s.set("q", a),
                i === T.MU
                  ? s.delete("category_id")
                  : s.set(
                      "category_id",
                      null !== (n = null == i ? void 0 : i.toString()) &&
                        void 0 !== n
                        ? n
                        : "",
                    ),
                1 === l
                  ? s.delete("page")
                  : s.set(
                      "page",
                      null !== (t = null == l ? void 0 : l.toString()) &&
                        void 0 !== t
                        ? t
                        : "",
                    ),
                (0, j.replaceAppDirectoryURLWith)(
                  ""
                    .concat(y.Z5c.APPLICATION_DIRECTORY_SEARCH, "?")
                    .concat(s.toString()),
                );
            },
            [r.search],
          ),
          w = i.useMemo(() => s().debounce(G, 400), [G]);
        i.useEffect(() => {
          w({ query: b, categoryId: L, page: C });
        }, [w, b, L, C]);
        let B = (0, g.e7)([I.Z], () =>
            I.Z.getFetchState({ query: b, guildId: t, page: C, categoryId: L }),
          ),
          F = i.useRef({
            query: "",
            guildId: void 0,
            page: void 0,
            categoryId: void 0,
          }),
          V = (0, g.cj)([I.Z], () => {
            let e = I.Z.getSearchResults({ query: b, guildId: t });
            return null != e
              ? { [T.MU]: e.totalCount, ...e.countsByCategory }
              : {};
          }),
          {
            pageResults: z,
            pageCount: W,
            searchResultsType: q,
            loadId: K,
          } = (0, g.cj)([I.Z], () => {
            var e, n;
            let a = { query: b, guildId: t, page: C, categoryId: L },
              i = I.Z.getSearchResults(a);
            return (
              null == i
                ? (i = I.Z.getSearchResults(F.current))
                : (F.current = a),
              {
                pageResults: null == i ? void 0 : i.results,
                pageCount:
                  null !== (e = null == i ? void 0 : i.totalPages) &&
                  void 0 !== e
                    ? e
                    : 0,
                searchResultsType:
                  null !== (n = null == i ? void 0 : i.type) && void 0 !== n
                    ? n
                    : _.c.SEARCH_RESULTS,
                loadId: null == i ? void 0 : i.loadId,
              }
            );
          }),
          J = i.useMemo(
            () =>
              null == z
                ? void 0
                : z.filter(
                    (e) =>
                      !(q === _.c.SEARCH_RESULTS && e.type !== u.s.APPLICATION),
                  ),
            [z, q],
          ),
          Q = i.useRef(null),
          X = (0, N.getCurrentView)(),
          $ = i.useCallback(
            (e) => {
              p.default.track(y.rMx.APP_DIRECTORY_SEARCHED, {
                search_term: b,
                num_results: e,
                current_page: null == X ? void 0 : X.type,
                result_page: C,
                category: null == k ? void 0 : k.name,
                category_id: null == k ? void 0 : k.id,
                guild_id: t,
              });
            },
            [
              null == k ? void 0 : k.id,
              null == k ? void 0 : k.name,
              C,
              t,
              b,
              X,
            ],
          ),
          ee = i.useCallback((e) => {
            let {
              query: n,
              page: t,
              activeCategoryId: a,
              onSuccessCallback: i,
              guildId: l,
              fetchCounts: s,
            } = e;
            s && f.yC({ query: n, guildId: l }),
              f.yC({
                query: n,
                guildId: l,
                options: { page: t, categoryId: a },
                onSuccessCallback: i,
              }),
              (Q.current = n);
          }, []),
          [en] = i.useState(() =>
            s().debounce(ee, 400, { leading: !1, trailing: !0 }),
          ),
          et = i.useCallback(
            (e) => {
              h(e);
            },
            [h],
          ),
          ea = i.useCallback(
            (e) => {
              let { application: n, mutualGuilds: a } = e;
              p.default.track(y.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                current_page: N.ApplicationDirectoryViews.SEARCH,
                application_id: n.id,
                load_id: K,
                search_term: b,
                guild_id: t,
                shown_mutual_guilds_count: a.length,
              }),
                (0, j.goToApplication)({ applicationId: n.id });
            },
            [K, b, t],
          );
        i.useEffect(() => {
          ee({
            query: b,
            page: C,
            activeCategoryId: L,
            guildId: t,
            fetchCounts: b !== Q.current,
            onSuccessCallback: $,
          });
        }, [ee, k, t, C]),
          i.useEffect(() => {
            en({
              query: b,
              page: C,
              activeCategoryId: L,
              guildId: t,
              fetchCounts: b !== Q.current,
              onSuccessCallback: $,
            });
          }, [b, en]);
        let ei = i.useMemo(() => Object.keys(V).length > 0, [V]);
        return (
          (null != J && 0 === W) || B === I.M.ERROR
            ? (n = (0, a.jsx)(A.Z, {
                category: k,
                onViewAll: () => {
                  h(1), Y(T.MU);
                },
              }))
            : null != J && J.length > 0 && q === _.c.SEARCH_RESULTS
              ? (n = (0, a.jsx)(Z, {
                  items: J,
                  pageCount: W,
                  currentPage: C,
                  showPrimaryCategory: L === T.MU,
                  onItemClick: ea,
                  onChangePage: et,
                }))
              : null != J &&
                J.length > 0 &&
                q === _.c.MUSIC &&
                (n = (0, a.jsx)(P.Z, { guildId: t, results: J })),
          (0, a.jsx)(R.Z, {
            children: (0, a.jsxs)("div", {
              className: O.page,
              children: [
                (0, a.jsxs)("div", {
                  className: O.sidebar,
                  children: [
                    (0, a.jsx)("img", {
                      src: M,
                      alt: "",
                      className: O.sidebarImage,
                    }),
                    (0, a.jsx)(S.Z, {
                      className: O.categoryList,
                      countsByCategory: ei ? V : void 0,
                      currentCategoryId: L,
                      onView: H,
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className: O.content,
                  children: [
                    (0, a.jsx)(E.Z, { query: b, onChange: U }),
                    (0, a.jsx)(v.Z, {
                      loading: B === I.M.FETCHING,
                      children: (0, a.jsx)("div", {
                        className: O.contentContainer,
                        children: n,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      function Z(e) {
        let {
            items: n,
            currentPage: t,
            pageCount: l,
            showPrimaryCategory: s,
            onItemClick: r,
            onChangePage: c,
          } = e,
          o = (0, C.Z)("application-directory-search");
        return (0, a.jsxs)(i.Fragment, {
          children: [
            (0, a.jsx)(d.bG, {
              navigator: o,
              children: (0, a.jsx)(d.SJ, {
                children: (e) => {
                  let { ref: t, ...i } = e;
                  return (0, a.jsx)("ul", {
                    ref: t,
                    ...i,
                    children: n.map((e) => {
                      if (e.type === u.s.APPLICATION) {
                        var n;
                        let t;
                        let i = e.data;
                        return (
                          (null === (n = i.directory_entry) || void 0 === n
                            ? void 0
                            : n.short_description) != null &&
                          i.directory_entry.short_description.length > 0
                            ? (t = i.directory_entry.short_description)
                            : null != i.description &&
                              i.description.length > 0 &&
                              (t = i.description),
                          (0, a.jsx)(
                            h.Z,
                            {
                              href: y.Z5c.APPLICATION_DIRECTORY_PROFILE(i.id),
                              children: (0, a.jsx)(b.Z, {
                                className: O.listing,
                                childrenClassName: O.listingDetails,
                                application: i,
                                onView: (e) => {
                                  let { mutualGuilds: n } = e;
                                  return r({ application: i, mutualGuilds: n });
                                },
                                showMutualGuilds: !0,
                                showPrimaryCategory: s,
                                source: "search",
                                children:
                                  null != t
                                    ? (0, a.jsx)(m.Text, {
                                        className: O.listingDescription,
                                        variant: "text-md/normal",
                                        lineClamp: 3,
                                        children: t,
                                      })
                                    : null,
                              }),
                            },
                            i.id,
                          )
                        );
                      }
                    }),
                  });
                },
              }),
            }),
            (0, a.jsx)(m.Paginator, {
              currentPage: t,
              totalCount: Math.min(7 * l, 700),
              pageSize: 7,
              onPageChange: c,
              disablePaginationGap: !0,
            }),
          ],
        });
      }
      c().shim();
    },
    166996: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return p;
        },
      }),
        t(47120),
        t(610138),
        t(216116),
        t(78328),
        t(815648);
      var a = t(735250),
        i = t(470079),
        l = t(120356),
        s = t.n(l),
        r = t(399606),
        c = t(481060),
        o = t(626135),
        d = t(463571),
        u = t(894653),
        _ = t(34674),
        g = t(132871),
        m = t(981631),
        C = t(37381);
      function p(e) {
        let {
            currentCategoryId: n,
            className: t,
            countsByCategory: l,
            onView: p,
          } = e,
          f = (0, g.useApplicationDirectoryHistory)((e) => e.guildId),
          h = (0, r.e7)([u.Z], () => u.Z.getCategories()),
          x = i.useMemo(() => [(0, _.KQ)(), ...h], [h]),
          I = (0, g.getCurrentView)();
        return (0, a.jsx)(c.TabBar, {
          className: s()(C.container, t),
          selectedItem: n,
          type: "top-pill",
          onItemSelect: (e) => {
            if (e === n) return;
            let t = x.find((n) => n.id === e);
            o.default.track(m.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
              category: t.name,
              category_id: t.id,
              current_page: null == I ? void 0 : I.type,
              guild_id: f,
            }),
              p(t);
          },
          orientation: "vertical",
          children: x.map((e) => {
            var t;
            let i = e.id,
              r = e.name,
              o = (0, _.tu)(e),
              u = s()(C.category, { [C.activeCategory]: n === i }),
              g = new URLSearchParams();
            return (
              g.set("category_id", i.toString()),
              (0, a.jsx)(
                c.TabBar.Item,
                {
                  id: i,
                  "aria-label": r,
                  disableItemStyles: !0,
                  children: (0, a.jsxs)(d.Z, {
                    href: ""
                      .concat(m.Z5c.APPLICATION_DIRECTORY_SEARCH, "?")
                      .concat(g),
                    className: u,
                    children: [
                      (0, a.jsx)(o, {
                        className: C.icon,
                        color: "currentColor",
                      }),
                      (0, a.jsx)(c.Text, {
                        variant: "text-md/normal",
                        children: r,
                      }),
                      null != l
                        ? (0, a.jsx)(c.Text, {
                            className: C.count,
                            variant: "text-md/normal",
                            color: "text-muted",
                            children:
                              null !== (t = null == l ? void 0 : l[i]) &&
                              void 0 !== t
                                ? t
                                : 0,
                          })
                        : null,
                    ],
                  }),
                },
                i,
              )
            );
          }),
        });
      }
    },
    209173: function (e, n, t) {
      var a, i;
      t.d(n, {
        s: function () {
          return a;
        },
      }),
        ((i = a || (a = {}))[(i.APPLICATION = 1)] = "APPLICATION"),
        (i[(i.ACTIVITY_APPLICATION = 2)] = "ACTIVITY_APPLICATION"),
        (i[(i.CONNECTION = 3)] = "CONNECTION");
    },
    375051: function (e, n, t) {
      var a, i;
      t.d(n, {
        c: function () {
          return a;
        },
      }),
        ((i = a || (a = {}))[(i.SEARCH_RESULTS = 1)] = "SEARCH_RESULTS"),
        (i[(i.MUSIC = 2)] = "MUSIC");
    },
    433027: function (e, n, t) {
      e.exports = {
        directoryContainer: "directoryContainer_da3f59",
        directoryContainerMobile: "directoryContainerMobile_da3f59",
        directoryContainerTablet: "directoryContainerTablet_da3f59",
        content: "content_da3f59",
        closeWrapper: "closeWrapper_da3f59",
        closeContent: "closeContent_da3f59",
        closeIcon: "closeIcon_da3f59",
        header: "header_da3f59",
        titleContainer: "titleContainer_da3f59",
        clickable: "clickable_da3f59",
        back: "back_da3f59",
        backIcon: "backIcon_da3f59",
        backHeader: "backHeader_da3f59",
      };
    },
    734888: function (e, n, t) {
      e.exports = {
        listing: "listing_a97e58",
        clickable: "clickable_a97e58",
        topWrapper: "topWrapper_a97e58",
        icon: "icon_a97e58",
        info: "info_a97e58",
        details: "details_a97e58",
        bullet: "bullet_a97e58",
        bottomGuildCountContainer: "bottomGuildCountContainer_a97e58",
        premiumText: "premiumText_a97e58",
        premiumContainer: "premiumContainer_a97e58",
      };
    },
    202371: function (e, n, t) {
      e.exports = {
        container: "container_b9f1af",
        image: "image_b9f1af",
        header: "header_b9f1af",
      };
    },
    488107: function (e, n, t) {
      e.exports = {
        wrapper: "wrapper_b3d866",
        icons: "icons_b3d866",
        iconMask: "iconMask_b3d866",
        icon: "icon_b3d866",
        iconSmall: "iconSmall_b3d866",
        iconLarge: "iconLarge_b3d866",
        moreGuilds: "moreGuilds_b3d866",
        moreGuildsSmall: "moreGuildsSmall_b3d866",
        moreGuildsLarge: "moreGuildsLarge_b3d866",
        defaultIcon: "defaultIcon_b3d866",
      };
    },
    507716: function (e, n, t) {
      e.exports = {
        container: "container_da6719",
        spinnerContainer: "spinnerContainer_da6719",
        spinner: "spinner_da6719",
        loading: "loading_da6719",
      };
    },
    794920: function (e, n, t) {
      e.exports = { search: "search_aabd24" };
    },
    977993: function (e, n, t) {
      e.exports = {
        container: "container_cb22b2",
        content: "content_cb22b2",
        title: "title_cb22b2",
        imageContainer: "imageContainer_cb22b2",
        image: "image_cb22b2",
      };
    },
    862661: function (e, n, t) {
      e.exports = {
        container: "container_bf1c84",
        content: "content_bf1c84",
        button: "button_bf1c84",
        image: "image_bf1c84",
      };
    },
    57778: function (e, n, t) {
      e.exports = {
        listing: "listing_fe5708",
        content: "content_fe5708",
        header: "header_fe5708",
        topWrapper: "topWrapper_fe5708",
        image: "image_fe5708",
        info: "info_fe5708",
        name: "name_fe5708",
        details: "details_fe5708",
        bullet: "bullet_fe5708",
        listingDescription: "listingDescription_fe5708",
        children: "children_fe5708",
      };
    },
    40694: function (e, n, t) {
      e.exports = { list: "list_f6c49d", container: "container_f6c49d" };
    },
    609368: function (e, n, t) {
      e.exports = {
        page: "page_c0b10b",
        contentContainer: "contentContainer_c0b10b",
        content: "content_c0b10b",
        sidebar: "sidebar_c0b10b",
        sidebarImage: "sidebarImage_c0b10b",
        categoryList: "categoryList_c0b10b",
        listing: "listing_c0b10b",
        listingDetails: "listingDetails_c0b10b",
        listingDescription: "listingDescription_c0b10b",
      };
    },
    37381: function (e, n, t) {
      e.exports = {
        container: "container_fa8ebf",
        category: "category_fa8ebf",
        icon: "icon_fa8ebf",
        activeCategory: "activeCategory_fa8ebf",
        count: "count_fa8ebf",
      };
    },
    985312: function (e, n, t) {
      e.exports = {
        logo: "logo_b0f834",
        title: "title_b0f834",
        header: "header_b0f834",
      };
    },
  },
]);
//# sourceMappingURL=524c0b25d3aa1eaf563c.js.map
