"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["41763"],
  {
    902294: function (e) {
      e.exports = "/assets/82e4627b29fa4e594d1d.svg";
    },
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
    887706: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var i = n(399606),
        a = n(314897);
      function l() {
        return (0, i.e7)([a.default], () => a.default.isAuthenticated());
      }
    },
    4461: function (e, t, n) {
      n.d(t, {
        P: function () {
          return l;
        },
      });
      var i = n(192379),
        a = n(135431);
      function l(e, t) {
        let n = i.useMemo(
          () =>
            null != e &&
            (0, a.Eb)({
              customInstallUrl: e.custom_install_url,
              installParams: e.install_params,
              integrationTypesConfig: e.integration_types_config,
            }),
          [e],
        );
        return {
          canInstall: n,
          install: i.useCallback(
            (n) => {
              if (null != e)
                (0, a.LO)({
                  applicationId: e.id,
                  customInstallUrl: e.custom_install_url,
                  installParams: e.install_params,
                  integrationTypesConfig: e.integration_types_config,
                  guildId: null != t ? t : void 0,
                  source: n,
                });
            },
            [e, t],
          ),
        };
      }
    },
    170771: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return p;
        },
      });
      var i = n(200651),
        a = n(192379),
        l = n(120356),
        r = n.n(l),
        c = n(91192),
        o = n(481060),
        s = n(768581),
        d = n(4461),
        u = n(924489),
        m = n(824606),
        g = n(388032),
        f = n(102969);
      function p(e) {
        var t, n, l, p;
        let {
            application: h,
            className: _,
            childrenClassName: x,
            showAdd: C,
            showMutualGuilds: v,
            showPrimaryCategory: b,
            children: j,
            onView: I,
            guildCountPosition: N = "top",
            subheaderTextVariant: S = "text-sm/normal",
            mutualGuildShownMax: y,
            guildIconSize: A,
            source: T,
          } = e,
          L = (0, c.JA)(h.id),
          R = s.ZP.getApplicationIconURL({ id: h.id, icon: h.icon, size: 48 }),
          { canInstall: P, install: E } = (0, d.P)(h),
          Z = (0, m.Z)({ application: h, showMutualGuilds: v }),
          M = a.useCallback(
            (e) => {
              e.stopPropagation(), E(T);
            },
            [E, T],
          ),
          k = null === (t = h.categories) || void 0 === t ? void 0 : t[0],
          w =
            (null !==
              (l =
                null === (n = h.directory_entry) || void 0 === n
                  ? void 0
                  : n.guild_count) && void 0 !== l
              ? l
              : 0) > 0 || Z.length > 0,
          G = (0, i.jsx)(u.Z, {
            application: h,
            textVariant: S,
            mutualGuilds: Z,
            mutualGuildShownMax: y,
            guildIconSize: A,
            compact: !0,
          }),
          O = b && null != k,
          D = w && "top" === N,
          U = w && "bottom" === N,
          B = null !== (p = h.storefront_available) && void 0 !== p && p,
          H = (0, i.jsxs)("article", {
            children: [
              (0, i.jsxs)("div", {
                className: f.topWrapper,
                children: [
                  (0, i.jsx)("img", {
                    className: f.icon,
                    alt: "",
                    "aria-hidden": !0,
                    src: R,
                    width: 48,
                    height: 48,
                  }),
                  (0, i.jsxs)("div", {
                    className: f.info,
                    children: [
                      (0, i.jsx)(o.Heading, {
                        variant: "heading-md/medium",
                        children: h.name,
                      }),
                      (O || D) &&
                        (0, i.jsxs)("div", {
                          className: f.details,
                          children: [
                            O
                              ? (0, i.jsx)(o.Text, {
                                  tag: "span",
                                  color: "header-secondary",
                                  variant: S,
                                  children: k.name,
                                })
                              : null,
                            D
                              ? (0, i.jsxs)(i.Fragment, {
                                  children: [
                                    O
                                      ? (0, i.jsx)("span", {
                                          className: f.bullet,
                                          children: "•",
                                        })
                                      : null,
                                    G,
                                    B
                                      ? (0, i.jsxs)("div", {
                                          className: f.premiumContainer,
                                          children: [
                                            (0, i.jsx)("span", {
                                              className: f.bullet,
                                              children: "•",
                                            }),
                                            (0, i.jsx)(o.TicketIcon, {
                                              size: "xs",
                                              color: "currentColor",
                                            }),
                                            (0, i.jsx)(o.Text, {
                                              variant: "text-sm/medium",
                                              className: f.premiumText,
                                              children: g.intl.string(
                                                g.t["19wGKi"],
                                              ),
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
                  C
                    ? (0, i.jsx)(o.Button, {
                        size: o.Button.Sizes.SMALL,
                        onClick: M,
                        disabled: !P,
                        children: g.intl.string(g.t.qRZ35u),
                      })
                    : null,
                ],
              }),
              null != j || null != x
                ? (0, i.jsx)("div", {
                    className: r()(x, f.__invalid_children),
                    children: j,
                  })
                : null,
              U
                ? (0, i.jsx)("div", {
                    className: f.bottomGuildCountContainer,
                    children: G,
                  })
                : null,
            ],
          });
        return null != I
          ? (0, i.jsx)(o.Clickable, {
              tag: "li",
              onClick: () => I({ mutualGuilds: Z }),
              className: r()(_, f.listing, f.clickable),
              ...L,
              children: H,
            })
          : (0, i.jsx)(o.FocusRing, {
              children: (0, i.jsx)("li", {
                className: r()(_, f.listing),
                ...L,
                children: H,
              }),
            });
      }
    },
    33146: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      }),
        n(411104);
      var i = n(200651);
      n(192379);
      var a = n(481060),
        l = n(34674),
        r = n(927356),
        c = n(388032);
      function o(e) {
        let t,
          n,
          { category: o, className: s, onViewAll: d } = e;
        return (
          null == o || (0, l.m0)(o)
            ? ((t = c.intl.string(c.t.fAW3z8)), (n = c.intl.string(c.t.NrZdiY)))
            : ((t = c.intl.formatToPlainString(c.t["9wDqBA"], {
                categoryName: o.name,
              })),
              (n = c.intl.format(c.t.iN55IS, {
                viewAllHook: (e, t) =>
                  (0, i.jsx)(a.Anchor, { onClick: d, children: e }, t),
              }))),
          (0, i.jsx)(r.Z, { className: s, heading: t, body: n })
        );
      }
    },
    927356: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(200651),
        a = n(192379),
        l = n(120356),
        r = n.n(l),
        c = n(481060),
        o = n(388032),
        s = n(216453),
        d = n(902294);
      function u(e) {
        let {
          heading: t = o.intl.string(o.t.NGw8v7),
          body: n = o.intl.string(o.t["1XZRY2"]),
          className: l,
        } = e;
        return (0, i.jsxs)("div", {
          className: r()(s.container, l),
          children: [
            (0, i.jsx)("img", {
              className: s.image,
              src: d,
              alt: o.intl.string(o.t["/UJaIy"]),
            }),
            (0, i.jsxs)(a.Fragment, {
              children: [
                (0, i.jsx)(c.Heading, {
                  className: s.header,
                  variant: "heading-xl/semibold",
                  children: t,
                }),
                (0, i.jsx)(c.Text, { variant: "text-md/normal", children: n }),
              ],
            }),
          ],
        });
      }
    },
    924489: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return v;
        },
        x: function () {
          return i;
        },
      }),
        n(653041);
      var i,
        a,
        l = n(200651),
        r = n(192379),
        c = n(120356),
        o = n.n(c),
        s = n(442837),
        d = n(477690),
        u = n(481060),
        m = n(686546),
        g = n(706454),
        f = n(768581),
        p = n(624138),
        h = n(388032),
        _ = n(405958);
      ((a = i || (i = {}))[
        (a.SMALL = (0, p.Mg)(d.Z.GUILD_COUNT_SMALL_ICON_SIZE))
      ] = "SMALL"),
        (a[(a.LARGE = (0, p.Mg)(d.Z.GUILD_COUNT_LARGE_ICON_SIZE))] = "LARGE");
      let x = { [i.SMALL]: _.moreGuildsSmall, [i.LARGE]: _.moreGuildsLarge },
        C = { [i.SMALL]: _.iconSmall, [i.LARGE]: _.iconLarge };
      function v(e) {
        var t, n, a;
        let {
            application: c,
            mutualGuilds: d,
            mutualGuildShownMax: p = 4,
            className: v,
            textVariant: b = "text-sm/normal",
            compact: j,
            guildIconSize: I = i.LARGE,
            guildsClassName: N,
          } = e,
          S = (0, s.e7)([g.default], () => g.default.locale),
          y = new Intl.ListFormat(S),
          A =
            null !==
              (n =
                null === (t = c.directory_entry) || void 0 === t
                  ? void 0
                  : t.guild_count) && void 0 !== n
              ? n
              : 0,
          T =
            null !== (a = null == d ? void 0 : d.length) && void 0 !== a
              ? a
              : 0,
          L = Math.max(0, A - T),
          { shownMutualGuilds: R, hiddenMutualGuilds: P } = r.useMemo(() => {
            let e = [],
              t = [];
            return (
              null == d ||
                d.forEach((n) => {
                  e.length < p && null != n.icon ? e.push(n) : t.push(n);
                }),
              e.length === p &&
                t.length > 0 &&
                (t.push(e[p - 1]), (e = e.slice(0, p - 1))),
              { shownMutualGuilds: e, hiddenMutualGuilds: t }
            );
          }, [d, p]),
          E = P.length,
          Z = (function (e, t, n, i, a) {
            if (0 === t && 0 === e) return null;
            if (t > 0 && 0 === n)
              return h.intl.formatToPlainString(h.t.pnzE1t, {
                mutualGuildCount: t,
              });
            let l = t > 0 ? h.t.YR8PSE : h.t.GQjq6e,
              r = new Intl.NumberFormat(i, {
                notation: a ? "compact" : "standard",
                compactDisplay: "short",
              });
            return h.intl.formatToPlainString(l, {
              guildCount: r.format(e),
              mutualGuildCount: t,
              nonMutualGuildCount: r.format(n),
            });
          })(A, T, L, S, j);
        return 0 === R.length && null == Z
          ? null
          : (0, l.jsxs)("div", {
              className: o()(v, _.wrapper),
              children: [
                (0, l.jsx)("div", {
                  className: o()(_.icons, N),
                  children:
                    R.length > 0
                      ? (0, l.jsxs)(l.Fragment, {
                          children: [
                            R.map((e, t) => {
                              let n = t === R.length - 1 && 0 === E,
                                i = f.ZP.getGuildIconURL({
                                  id: e.id,
                                  icon: e.icon,
                                  size: I,
                                  canAnimate: !1,
                                }),
                                a = (0, l.jsx)(u.Tooltip, {
                                  text: e.name,
                                  position: "top",
                                  children: (e) =>
                                    (0, l.jsx)("img", {
                                      ...e,
                                      className: o()(_.icon, C[I]),
                                      src: i,
                                      alt: "",
                                    }),
                                });
                              return n
                                ? (0, l.jsx)(r.Fragment, { children: a }, e.id)
                                : (0, l.jsx)(
                                    m.ZP,
                                    {
                                      className: _.iconMask,
                                      height: I,
                                      width: I,
                                      mask: m.ZP.Masks.VOICE_USER_SUMMARY_ITEM,
                                      children: a,
                                    },
                                    e.id,
                                  );
                            }),
                            E > 0
                              ? (0, l.jsx)(u.Tooltip, {
                                  text: h.intl.formatToPlainString(h.t.m6oRrK, {
                                    appNames: y.format(P.map((e) => e.name)),
                                  }),
                                  position: "top",
                                  children: (e) =>
                                    (0, l.jsxs)("div", {
                                      ...e,
                                      className: o()(_.moreGuilds, x[I]),
                                      children: ["+", E],
                                    }),
                                })
                              : null,
                          ],
                        })
                      : (0, l.jsx)(u.ServerIcon, {
                          size: "custom",
                          color: "currentColor",
                          width: I,
                          height: I,
                          className: _.defaultIcon,
                        }),
                }),
                null != Z
                  ? (0, l.jsx)(u.Text, {
                      variant: b,
                      color: "header-secondary",
                      children: Z,
                    })
                  : null,
              ],
            });
      }
    },
    125909: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var i = n(200651);
      n(192379);
      var a = n(120356),
        l = n.n(a),
        r = n(481060),
        c = n(939700);
      function o(e) {
        let { loading: t, children: n } = e;
        return (0, i.jsxs)("div", {
          className: c.container,
          children: [
            t
              ? (0, i.jsx)("div", {
                  className: c.spinnerContainer,
                  children: (0, i.jsx)(r.Spinner, {
                    className: c.spinner,
                    type: r.Spinner.Type.SPINNING_CIRCLE,
                  }),
                })
              : null,
            (0, i.jsx)("div", {
              className: l()({ [c.loading]: t }),
              children: n,
            }),
          ],
        });
      }
    },
    190733: function (e, t, n) {
      n(47120);
      var i = n(200651),
        a = n(192379),
        l = n(120356),
        r = n.n(l),
        c = n(481060),
        o = n(981631),
        s = n(388032),
        d = n(875794);
      t.Z = a.forwardRef(function (e, t) {
        let {
            query: n,
            canShowCta: l = !1,
            onChange: u,
            onSubmit: m,
            className: g,
          } = e,
          [f, p] = a.useState(!1);
        return (0, i.jsx)(c.SearchBox, {
          ref: t,
          className: r()(d.search, g),
          label: s.intl.string(s.t.APrAU1),
          placeholder: s.intl.string(s.t.APrAU1),
          searchTerm: n,
          cta: l && f && n.length > 0 ? s.intl.string(s.t["CU+6oK"]) : null,
          onChange: u,
          onClear: () => u(""),
          onFocus: () => p(!0),
          onBlur: () => p(!1),
          onKeyPress: (e) => {
            e.charCode === o.yXg.ENTER && (null == m || m());
          },
          autoFocus: !0,
        });
      });
    },
    112884: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(200651);
      n(192379);
      var a = n(481060),
        l = n(388032),
        r = n(186160);
      function c(e) {
        let {} = e;
        return (0, i.jsxs)("div", {
          className: r.container,
          children: [
            (0, i.jsxs)("div", {
              className: r.content,
              children: [
                (0, i.jsx)(a.Text, {
                  variant: "text-sm/semibold",
                  className: r.title,
                  children: l.intl.string(l.t["83ymX1"]),
                }),
                (0, i.jsx)(a.Heading, {
                  variant: "heading-xxl/medium",
                  children: l.intl.string(l.t.Wim6am),
                }),
                (0, i.jsx)(a.Text, {
                  variant: "text-md/normal",
                  children: l.intl.string(l.t.W0LV1N),
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: r.imageContainer,
              children: (0, i.jsx)("img", {
                className: r.image,
                src: n(723067),
                alt: "",
              }),
            }),
          ],
        });
      }
    },
    639002: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return u;
        },
      });
      var i = n(200651);
      n(192379);
      var a = n(481060),
        l = n(782568),
        r = n(626135),
        c = n(132871),
        o = n(981631),
        s = n(388032),
        d = n(197341);
      function u(e) {
        let { guildId: t } = e;
        return (0, i.jsxs)("div", {
          className: d.container,
          children: [
            (0, i.jsx)("img", { className: d.image, src: n(731914), alt: "" }),
            (0, i.jsxs)("div", {
              className: d.content,
              children: [
                (0, i.jsx)(a.Heading, {
                  variant: "heading-md/extrabold",
                  children: s.intl.string(s.t.xu0raG),
                }),
                (0, i.jsx)(a.Text, {
                  variant: "text-sm/medium",
                  children: s.intl.string(s.t.oz7e8v),
                }),
              ],
            }),
            (0, i.jsx)(a.Button, {
              size: a.Button.Sizes.SMALL,
              onClick: function () {
                r.default.track(o.rMx.APP_DIRECTORY_CTA_CLICKED, {
                  cta: "submit_music_app",
                  current_page: c.ApplicationDirectoryViews.SEARCH,
                  guild_id: t,
                }),
                  (0, l.Z)("https://dis.gd/music-search-page-inclusion");
              },
              color: a.Button.Colors.TRANSPARENT,
              className: d.button,
              children: s.intl.string(s.t.WJAXoq),
            }),
          ],
        });
      }
    },
    781627: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var i = n(200651);
      n(192379);
      var a = n(481060),
        l = n(388032),
        r = n(44020);
      function c(e) {
        let {
            imageSrc: t,
            header: n,
            description: c,
            secondaryInfo: o,
            mutualGuildCount: s,
            ctaLabel: d,
            onCtaClick: u,
            children: m,
          } = e,
          g = (0, i.jsx)(i.Fragment, {
            children: (0, i.jsxs)("div", {
              className: r.topWrapper,
              children: [
                (0, i.jsx)("div", {
                  className: r.__invalid_imageContainer,
                  children: (0, i.jsx)("img", {
                    alt: "",
                    className: r.image,
                    src: t,
                  }),
                }),
                (0, i.jsxs)("div", {
                  className: r.content,
                  children: [
                    (0, i.jsxs)("div", {
                      className: r.header,
                      children: [
                        (0, i.jsxs)("div", {
                          className: r.info,
                          children: [
                            (0, i.jsx)(a.Heading, {
                              className: r.name,
                              variant: "heading-md/semibold",
                              children: n,
                            }),
                            null != s
                              ? s
                              : (0, i.jsx)(i.Fragment, {
                                  children: (0, i.jsxs)("div", {
                                    className: r.details,
                                    children: [
                                      (0, i.jsx)(a.Text, {
                                        tag: "span",
                                        color: "header-secondary",
                                        variant: "text-sm/medium",
                                        children: l.intl.string(l.t["xp3V9/"]),
                                      }),
                                      null != o
                                        ? (0, i.jsxs)(i.Fragment, {
                                            children: [
                                              (0, i.jsx)(a.Text, {
                                                tag: "span",
                                                color: "interactive-muted",
                                                variant: "text-sm/normal",
                                                className: r.bullet,
                                                children: "•",
                                              }),
                                              (0, i.jsx)(a.Text, {
                                                tag: "span",
                                                color: "header-secondary",
                                                variant: "text-sm/medium",
                                                children: o,
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
                          ? (0, i.jsx)(a.Button, {
                              size: a.Button.Sizes.SMALL,
                              onClick: u,
                              className: r.__invalid_button,
                              children: d,
                            })
                          : null,
                      ],
                    }),
                    null != c
                      ? (0, i.jsx)(a.Text, {
                          className: r.listingDescription,
                          variant: "text-md/normal",
                          children: c,
                        })
                      : null,
                    (0, i.jsx)("div", { className: r.children, children: m }),
                  ],
                }),
              ],
            }),
          });
        return (0, i.jsx)(a.FocusRing, {
          children: (0, i.jsx)("div", { className: r.listing, children: g }),
        });
      }
    },
    101741: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return I;
        },
      }),
        n(47120);
      var i = n(200651);
      n(192379);
      var a = n(209173),
        l = n(782568),
        r = n(626135),
        c = n(924489),
        o = n(132871),
        s = n(147890),
        d = n(824606),
        u = n(112884),
        m = n(639002),
        g = n(781627),
        f = n(981631),
        p = n(388032),
        h = n(686795);
      let _ = new Map([["890343617762304070", { imageSrc: n(336662) }]]),
        x = new Map(),
        C = new Map([[f.ABu.SPOTIFY, { imageSrc: n(655130) }]]);
      function v(e) {
        var t, n;
        let { result: a } = e,
          l = a.data,
          r = (0, d.Z)({ application: l }),
          o = _.get(a.data.id);
        if (null == o) return null;
        let u =
            r.length > 0
              ? (0, i.jsx)(c.Z, {
                  application: a.data,
                  textVariant: "text-sm/semibold",
                  mutualGuilds: r,
                  mutualGuildShownMax: 3,
                  guildIconSize: c.x.SMALL,
                  compact: !0,
                })
              : null,
          m =
            null !==
              (n =
                null === (t = l.directory_entry) || void 0 === t
                  ? void 0
                  : t.guild_count) && void 0 !== n
              ? n
              : 0,
          f =
            m > 0
              ? p.intl.formatToPlainString(p.t["eoUw+v"], { guildCount: m })
              : void 0;
        return (0, i.jsx)(g.Z, {
          imageSrc: o.imageSrc,
          header: a.data.name,
          description: a.data.description,
          secondaryInfo: f,
          ctaLabel: p.intl.string(p.t.NgXl3N),
          mutualGuildCount: u,
          onCtaClick: () => (0, s.goToApplication)({ applicationId: l.id }),
        });
      }
      function b(e) {
        let { result: t } = e,
          n = x.get(t.data.id);
        return null == n
          ? null
          : (0, i.jsx)(g.Z, {
              imageSrc: n.imageSrc,
              header: t.data.name,
              description: t.data.description,
              secondaryInfo: p.intl.string(p.t.fhY6s7),
            });
      }
      function j(e) {
        let t,
          n,
          a,
          { result: c, guildId: s } = e,
          d = C.get(c.data.name);
        return null == d
          ? null
          : (c.data.name === f.ABu.SPOTIFY &&
                ((t = p.intl.string(p.t.LcNDLS)),
                (n = p.intl.format(p.t["8JiYOT"], {})),
                (a = () => {
                  r.default.track(f.rMx.APP_DIRECTORY_CTA_CLICKED, {
                    current_page: o.ApplicationDirectoryViews.SEARCH,
                    cta: "spotify",
                    guild_id: s,
                  }),
                    (0, l.Z)(
                      "https://support.discord.com/hc/en-us/articles/360000167212-Discord-Spotify-Connection",
                    );
                })),
              null == t || null == n || null == a)
            ? null
            : (0, i.jsx)(g.Z, {
                imageSrc: d.imageSrc,
                header: t,
                description: n,
                ctaLabel: p.intl.string(p.t.hvVgAQ),
                onCtaClick: a,
                secondaryInfo: p.intl.string(p.t["tF+47u"]),
              });
      }
      function I(e) {
        let { results: t, guildId: n } = e;
        return (0, i.jsxs)("div", {
          className: h.container,
          children: [
            (0, i.jsx)(u.Z, {}),
            (0, i.jsx)("div", {
              className: h.list,
              children: t.map((e, t) => {
                let l = "".concat(t).concat(e.type);
                if (e.type === a.s.APPLICATION)
                  return (0, i.jsx)(v, { result: e }, l);
                if (e.type === a.s.ACTIVITY_APPLICATION)
                  return (0, i.jsx)(b, { result: e }, l);
                if (e.type === a.s.CONNECTION)
                  return (0, i.jsx)(j, { guildId: n, result: e }, l);
              }),
            }),
            (0, i.jsx)(m.Z, { guildId: n }),
          ],
        });
      }
    },
    675869: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return k;
          },
        }),
        n(610138),
        n(216116),
        n(78328),
        n(815648),
        n(47120);
      var i = n(200651),
        a = n(192379),
        l = n(392711),
        r = n.n(l),
        c = n(991637),
        o = n.n(c),
        s = n(512969),
        d = n(91192),
        u = n(209173),
        m = n(375051),
        g = n(399606),
        f = n(481060),
        p = n(211266),
        h = n(209613),
        _ = n(626135),
        x = n(674588),
        C = n(463571),
        v = n(894653),
        b = n(809547),
        j = n(738130),
        I = n(34674),
        N = n(170771),
        S = n(33146),
        y = n(125909),
        A = n(190733),
        T = n(101741),
        L = n(132871),
        R = n(147890),
        P = n(166996),
        E = n(981631),
        Z = n(741186),
        M = n(878428);
      function k() {
        var e;
        let t;
        let n = (0, L.useApplicationDirectoryHistory)((e) => e.guildId),
          l = (0, g.e7)([v.Z], () => v.Z.getCategories()),
          c = (0, s.TH)(),
          {
            queryParam: o,
            pageParam: d,
            categoryIdParam: f,
          } = (0, p.Z)(() => {
            let e = new URLSearchParams(c.search);
            return {
              queryParam: e.get("q"),
              pageParam: e.get("page"),
              categoryIdParam: e.get("category_id"),
            };
          }),
          [h, C] = a.useState(null != d ? Number(d) : 1),
          [N, k] = a.useState(null != o ? o : ""),
          [G, O] = a.useState(
            null !== (e = Number(f)) && void 0 !== e ? e : I.MU,
          ),
          D = a.useMemo(
            () => (null == l ? void 0 : l.find((e) => e.id === G)),
            [l, G],
          ),
          U = a.useCallback((e) => {
            O(e.id), C(1);
          }, []),
          B = a.useCallback((e) => {
            k(e), C(1), 0 === e.length && O(I.MU);
          }, []),
          H = a.useCallback(
            (e) => {
              var t, n;
              let { query: i, categoryId: a, page: l } = e,
                r = new URLSearchParams(c.search);
              "" === i ? r.delete("q") : r.set("q", i),
                a === I.MU
                  ? r.delete("category_id")
                  : r.set(
                      "category_id",
                      null !== (t = null == a ? void 0 : a.toString()) &&
                        void 0 !== t
                        ? t
                        : "",
                    ),
                1 === l
                  ? r.delete("page")
                  : r.set(
                      "page",
                      null !== (n = null == l ? void 0 : l.toString()) &&
                        void 0 !== n
                        ? n
                        : "",
                    ),
                (0, R.replaceAppDirectoryURLWith)(
                  ""
                    .concat(E.Z5c.APPLICATION_DIRECTORY_SEARCH, "?")
                    .concat(r.toString()),
                );
            },
            [c.search],
          ),
          z = a.useMemo(() => r().debounce(H, 400), [H]);
        a.useEffect(() => {
          z({ query: N, categoryId: G, page: h });
        }, [z, N, G, h]);
        let F = (0, g.e7)([b.Z], () =>
            b.Z.getFetchState({
              query: N,
              guildId: n,
              page: h,
              pageSize: 7,
              categoryId: G,
            }),
          ),
          Y = a.useRef({
            query: "",
            guildId: void 0,
            page: void 0,
            pageSize: void 0,
            categoryId: void 0,
          }),
          V = (0, g.cj)([b.Z], () => {
            let e = b.Z.getSearchResults({ query: N, guildId: n });
            return null != e
              ? { [I.MU]: e.totalCount, ...e.countsByCategory }
              : {};
          }),
          {
            pageResults: W,
            pageCount: q,
            searchResultsType: K,
            loadId: J,
          } = (0, g.cj)([b.Z], () => {
            var e, t;
            let i = {
                query: N,
                guildId: n,
                page: h,
                pageSize: 7,
                categoryId: G,
              },
              a = b.Z.getSearchResults(i);
            return (
              null == a
                ? (a = b.Z.getSearchResults(Y.current))
                : (Y.current = i),
              {
                pageResults: null == a ? void 0 : a.results,
                pageCount:
                  null !== (e = null == a ? void 0 : a.totalPages) &&
                  void 0 !== e
                    ? e
                    : 0,
                searchResultsType:
                  null !== (t = null == a ? void 0 : a.type) && void 0 !== t
                    ? t
                    : m.c.SEARCH_RESULTS,
                loadId: null == a ? void 0 : a.loadId,
              }
            );
          }),
          X = a.useMemo(
            () =>
              null == W
                ? void 0
                : W.filter(
                    (e) =>
                      !(K === m.c.SEARCH_RESULTS && e.type !== u.s.APPLICATION),
                  ),
            [W, K],
          ),
          Q = a.useRef(null),
          $ = (0, L.getCurrentView)(),
          ee = a.useCallback(
            (e) => {
              _.default.track(E.rMx.APP_DIRECTORY_SEARCHED, {
                search_term: N,
                num_results: e,
                current_page: null == $ ? void 0 : $.type,
                result_page: h,
                category: null == D ? void 0 : D.name,
                category_id: null == D ? void 0 : D.id,
                guild_id: n,
              });
            },
            [
              null == D ? void 0 : D.id,
              null == D ? void 0 : D.name,
              h,
              n,
              N,
              $,
            ],
          ),
          et = a.useCallback((e) => {
            let {
              query: t,
              page: n,
              activeCategoryId: i,
              onSuccessCallback: a,
              guildId: l,
              fetchCounts: r,
            } = e;
            r && x.yC({ query: t, guildId: l }),
              x.yC({
                query: t,
                guildId: l,
                options: { page: n, pageSize: 7, categoryId: i },
                onSuccessCallback: a,
              }),
              (Q.current = t);
          }, []),
          [en] = a.useState(() =>
            r().debounce(et, 400, { leading: !1, trailing: !0 }),
          ),
          ei = a.useCallback(
            (e) => {
              C(e);
            },
            [C],
          ),
          ea = a.useCallback(
            (e) => {
              let { application: t, mutualGuilds: i } = e;
              _.default.track(E.rMx.APP_DIRECTORY_SEARCH_RESULT_CLICKED, {
                current_page: L.ApplicationDirectoryViews.SEARCH,
                application_id: t.id,
                load_id: J,
                search_term: N,
                guild_id: n,
                shown_mutual_guilds_count: i.length,
              }),
                (0, R.goToApplication)({ applicationId: t.id });
            },
            [J, N, n],
          ),
          el = {
            categoryId: G,
            query: N,
            trackAppDirectorySearched: ee,
            guildId: n,
            page: h,
          },
          er = a.useRef(el);
        a.useEffect(() => {
          er.current = el;
        }),
          a.useEffect(() => {
            let {
              categoryId: e,
              query: t,
              trackAppDirectorySearched: i,
            } = er.current;
            et({
              query: t,
              page: h,
              activeCategoryId: e,
              guildId: n,
              fetchCounts: t !== Q.current,
              onSuccessCallback: i,
            });
          }, [et, D, n, h]),
          a.useEffect(() => {
            let {
              categoryId: e,
              query: t,
              trackAppDirectorySearched: n,
              guildId: i,
              page: a,
            } = er.current;
            en({
              query: t,
              page: a,
              activeCategoryId: e,
              guildId: i,
              fetchCounts: t !== Q.current,
              onSuccessCallback: n,
            });
          }, [N, en]);
        let ec = a.useMemo(() => Object.keys(V).length > 0, [V]);
        return (
          (null != X && 0 === q) || F === b.M.ERROR
            ? (t = (0, i.jsx)(S.Z, {
                category: D,
                onViewAll: () => {
                  C(1), O(I.MU);
                },
              }))
            : null != X && X.length > 0 && K === m.c.SEARCH_RESULTS
              ? (t = (0, i.jsx)(w, {
                  items: X,
                  pageCount: q,
                  currentPage: h,
                  showPrimaryCategory: G === I.MU,
                  onItemClick: ea,
                  onChangePage: ei,
                }))
              : null != X &&
                X.length > 0 &&
                K === m.c.MUSIC &&
                (t = (0, i.jsx)(T.Z, { guildId: n, results: X })),
          (0, i.jsx)(j.Z, {
            children: (0, i.jsxs)("div", {
              className: Z.page,
              children: [
                (0, i.jsxs)("div", {
                  className: Z.sidebar,
                  children: [
                    (0, i.jsx)("img", {
                      src: M,
                      alt: "",
                      className: Z.sidebarImage,
                    }),
                    (0, i.jsx)(P.Z, {
                      className: Z.categoryList,
                      countsByCategory: ec ? V : void 0,
                      currentCategoryId: G,
                      onView: U,
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: Z.content,
                  children: [
                    (0, i.jsx)(A.Z, { query: N, onChange: B }),
                    (0, i.jsx)(y.Z, {
                      loading: F === b.M.FETCHING,
                      children: (0, i.jsx)("div", {
                        className: Z.contentContainer,
                        children: t,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      function w(e) {
        let {
            items: t,
            currentPage: n,
            pageCount: l,
            showPrimaryCategory: r,
            onItemClick: c,
            onChangePage: o,
          } = e,
          s = (0, h.Z)("application-directory-search");
        return (0, i.jsxs)(a.Fragment, {
          children: [
            (0, i.jsx)(d.bG, {
              navigator: s,
              children: (0, i.jsx)(d.SJ, {
                children: (e) => {
                  let { ref: n, ...a } = e;
                  return (0, i.jsx)("ul", {
                    ref: n,
                    ...a,
                    children: t.map((e) => {
                      if (e.type === u.s.APPLICATION) {
                        var t;
                        let n;
                        let a = e.data;
                        return (
                          (null === (t = a.directory_entry) || void 0 === t
                            ? void 0
                            : t.short_description) != null &&
                          a.directory_entry.short_description.length > 0
                            ? (n = a.directory_entry.short_description)
                            : null != a.description &&
                              a.description.length > 0 &&
                              (n = a.description),
                          (0, i.jsx)(
                            C.Z,
                            {
                              href: E.Z5c.APPLICATION_DIRECTORY_PROFILE(a.id),
                              children: (0, i.jsx)(N.Z, {
                                className: Z.listing,
                                childrenClassName: Z.listingDetails,
                                application: a,
                                onView: (e) => {
                                  let { mutualGuilds: t } = e;
                                  return c({ application: a, mutualGuilds: t });
                                },
                                showMutualGuilds: !0,
                                showPrimaryCategory: r,
                                source: "search",
                                children:
                                  null != n
                                    ? (0, i.jsx)(f.Text, {
                                        className: Z.listingDescription,
                                        variant: "text-md/normal",
                                        lineClamp: 3,
                                        children: n,
                                      })
                                    : null,
                              }),
                            },
                            a.id,
                          )
                        );
                      }
                    }),
                  });
                },
              }),
            }),
            (0, i.jsx)(f.Paginator, {
              currentPage: n,
              totalCount: Math.min(7 * l, 700),
              pageSize: 7,
              onPageChange: o,
              disablePaginationGap: !0,
            }),
          ],
        });
      }
      o().shim();
    },
    166996: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return h;
        },
      }),
        n(47120),
        n(610138),
        n(216116),
        n(78328),
        n(815648);
      var i = n(200651),
        a = n(192379),
        l = n(120356),
        r = n.n(l),
        c = n(399606),
        o = n(481060),
        s = n(626135),
        d = n(463571),
        u = n(894653),
        m = n(34674),
        g = n(132871),
        f = n(981631),
        p = n(155356);
      function h(e) {
        let {
            currentCategoryId: t,
            className: n,
            countsByCategory: l,
            onView: h,
          } = e,
          _ = (0, g.useApplicationDirectoryHistory)((e) => e.guildId),
          x = (0, c.e7)([u.Z], () => u.Z.getCategories()),
          C = a.useMemo(() => [(0, m.KQ)(), ...x], [x]),
          v = (0, g.getCurrentView)();
        return (0, i.jsx)(o.TabBar, {
          className: r()(p.container, n),
          selectedItem: t,
          type: "top-pill",
          onItemSelect: (e) => {
            if (e === t) return;
            let n = C.find((t) => t.id === e);
            s.default.track(f.rMx.APP_DIRECTORY_CATEGORY_CLICKED, {
              category: n.name,
              category_id: n.id,
              current_page: null == v ? void 0 : v.type,
              guild_id: _,
            }),
              h(n);
          },
          orientation: "vertical",
          children: C.map((e) => {
            var n;
            let a = e.id,
              c = e.name,
              s = (0, m.tu)(e),
              u = r()(p.category, { [p.activeCategory]: t === a }),
              g = new URLSearchParams();
            return (
              g.set("category_id", a.toString()),
              (0, i.jsx)(
                o.TabBar.Item,
                {
                  id: a,
                  "aria-label": c,
                  disableItemStyles: !0,
                  children: (0, i.jsxs)(d.Z, {
                    href: ""
                      .concat(f.Z5c.APPLICATION_DIRECTORY_SEARCH, "?")
                      .concat(g),
                    className: u,
                    children: [
                      (0, i.jsx)(s, {
                        className: p.icon,
                        color: "currentColor",
                      }),
                      (0, i.jsx)(o.Text, {
                        variant: "text-md/normal",
                        children: c,
                      }),
                      null != l
                        ? (0, i.jsx)(o.Text, {
                            className: p.count,
                            variant: "text-md/normal",
                            color: "text-muted",
                            children:
                              null !== (n = null == l ? void 0 : l[a]) &&
                              void 0 !== n
                                ? n
                                : 0,
                          })
                        : null,
                    ],
                  }),
                },
                a,
              )
            );
          }),
        });
      }
    },
    209173: function (e, t, n) {
      var i, a;
      n.d(t, {
        s: function () {
          return i;
        },
      }),
        ((a = i || (i = {}))[(a.APPLICATION = 1)] = "APPLICATION"),
        (a[(a.ACTIVITY_APPLICATION = 2)] = "ACTIVITY_APPLICATION"),
        (a[(a.CONNECTION = 3)] = "CONNECTION");
    },
    375051: function (e, t, n) {
      var i, a;
      n.d(t, {
        c: function () {
          return i;
        },
      }),
        ((a = i || (i = {}))[(a.SEARCH_RESULTS = 1)] = "SEARCH_RESULTS"),
        (a[(a.MUSIC = 2)] = "MUSIC");
    },
    681230: function (e, t, n) {
      e.exports = {
        closeButton: "closeButton_e3c9f3",
        description: "description_e3c9f3",
        conflictButton: "conflictButton_e3c9f3",
        linkButtonSize: "linkButtonSize_e3c9f3",
        linkButton: "linkButton_e3c9f3",
        retryButton: "retryButton_e3c9f3",
        conflictButtonInner: "conflictButtonInner_e3c9f3",
        buttonBody: "buttonBody_e3c9f3",
        timestamp: "timestamp_e3c9f3",
        choiceWrapper: "choiceWrapper_e3c9f3",
        choiceLine: "choiceLine_e3c9f3",
        choiceTitle: "choiceTitle_e3c9f3 title_e3c9f3",
        conflictTitle: "conflictTitle_e3c9f3 title_e3c9f3",
        conflictUploadArt:
          "conflictUploadArt_e3c9f3 conflictArt_e3c9f3 art_e3c9f3",
        conflictDownloadArt:
          "conflictDownloadArt_e3c9f3 conflictArt_e3c9f3 art_e3c9f3",
        errorArt: "errorArt_e3c9f3 art_e3c9f3",
        modal: "modal_e3c9f3",
      };
    },
    480705: function (e, t, n) {
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
    102969: function (e, t, n) {
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
    216453: function (e, t, n) {
      e.exports = {
        container: "container_b9f1af",
        image: "image_b9f1af",
        header: "header_b9f1af",
      };
    },
    405958: function (e, t, n) {
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
    939700: function (e, t, n) {
      e.exports = {
        container: "container_da6719",
        spinnerContainer: "spinnerContainer_da6719",
        spinner: "spinner_da6719",
        loading: "loading_da6719",
      };
    },
    875794: function (e, t, n) {
      e.exports = { search: "search_aabd24" };
    },
    186160: function (e, t, n) {
      e.exports = {
        container: "container_cb22b2",
        content: "content_cb22b2",
        title: "title_cb22b2",
        imageContainer: "imageContainer_cb22b2",
        image: "image_cb22b2",
      };
    },
    197341: function (e, t, n) {
      e.exports = {
        container: "container_bf1c84",
        content: "content_bf1c84",
        button: "button_bf1c84",
        image: "image_bf1c84",
      };
    },
    44020: function (e, t, n) {
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
    686795: function (e, t, n) {
      e.exports = { list: "list_f6c49d", container: "container_f6c49d" };
    },
    741186: function (e, t, n) {
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
    155356: function (e, t, n) {
      e.exports = {
        container: "container_fa8ebf",
        category: "category_fa8ebf",
        icon: "icon_fa8ebf",
        activeCategory: "activeCategory_fa8ebf",
        count: "count_fa8ebf",
      };
    },
    377702: function (e, t, n) {
      e.exports = {
        logo: "logo_b0f834",
        title: "title_b0f834",
        header: "header_b0f834",
      };
    },
    2980: function (e, t, n) {
      e.exports = {
        left: "left_c48316",
        right: "right_c48316",
        down: "down_c48316",
        downRight: "downRight_c48316",
        upLeft: "upLeft_c48316",
      };
    },
  },
]);
//# sourceMappingURL=cf7ec31447633a47dee5.js.map
