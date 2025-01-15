"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99838"],
  {
    131529: function (e) {
      e.exports = "/assets/d6cf27f17de2f55311c0.svg";
    },
    877356: function (e) {
      e.exports = "/assets/3bad7c5acd24b6683dec.svg";
    },
    765341: function (e) {
      e.exports = "/assets/0b0b6a8f3e5311cae4ca.svg";
    },
    699828: function (e) {
      e.exports = "/assets/7aee1d9f4d2c46f1c6c0.svg";
    },
    219787: function (e) {
      e.exports = "/assets/40247afb7cbc2d750d7a.svg";
    },
    728372: function (e) {
      e.exports = "/assets/e7adeede4bc4a740d852.svg";
    },
    247479: function (e) {
      e.exports = "/assets/373fcbfd1e9cbcbab45b.svg";
    },
    647928: function (e) {
      e.exports = "/assets/99082616aedacf616a06.svg";
    },
    496691: function (e, t, a) {
      a.r(t), a(47120);
      var n = a(200651),
        s = a(192379),
        i = a(548668),
        r = a(231262),
        l = a(501522),
        o = a(442837),
        c = a(153867),
        d = a(706454),
        u = a(626135),
        N = a(981631),
        h = a(388032),
        m = a(846848);
      class p extends s.Component {
        shouldScrollToTop(e) {
          let { location: t } = e;
          return (
            t.pathname.startsWith(N.Z5c.APPLICATION_STORE_LISTING_SKU("")) ||
            t.pathname.startsWith(
              N.Z5c.APPLICATION_STORE_LISTING_APPLICATION(""),
            )
          );
        }
        render() {
          let { location: e, className: t, render: a, locale: o } = this.props;
          return (0, n.jsx)(l.Z, {
            className: t,
            shouldScrollToTop: this.shouldScrollToTop,
            render: (t, l) =>
              (0, n.jsxs)(s.Fragment, {
                children: [
                  (0, n.jsx)(r.h, {
                    avoidRouter: !0,
                    locale: o,
                    authRedirectTo: e.pathname,
                    track: u.default.track,
                    className: m.marketingHeader,
                    onChangeLocale: this.handleHeaderLocaleChange,
                    mobileClassName: m.marketingHeader,
                    openNavAriaLabel: h.intl.string(h.t.Fs9k3N),
                    hideNavAriaLabel: h.intl.string(h.t.AbfyHB),
                    skipToContentLabel: h.intl.string(h.t["18gavL"]),
                  }),
                  a(t, l),
                  (0, n.jsx)(i.$, {
                    locale: o,
                    authRedirectTo: e.pathname,
                    avoidRouter: !0,
                    track: u.default.track,
                    className: m.marketingFooter,
                  }),
                ],
              }),
          });
        }
        constructor(...e) {
          var t, a, n;
          super(...e),
            (t = this),
            (a = "handleHeaderLocaleChange"),
            (n = (e) => {
              e !== this.props.locale && c.ZP.overrideLocale(e);
            }),
            a in t
              ? Object.defineProperty(t, a, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[a] = n);
        }
      }
      t.default = o.ZP.connectStores([d.default], () => ({
        locale: d.default.locale,
      }))(p);
    },
    431138: function (e, t, a) {
      a.d(t, {
        r: function () {
          return n;
        },
      });
      let n = {
        ASSET_SOCIAL_TWITTER: a(647928),
        ASSET_SOCIAL_FACEBOOK: a(728372),
        ASSET_SOCIAL_INSTAGRAM: a(247479),
        ICON_TRANSLATE: a(765341),
        ICON_ARROW_DOWN: a(699828),
        ASSET_LOGO_DISCORD_SVG: a(219787),
      };
    },
    548668: function (e, t, a) {
      let n;
      a.d(t, {
        $: function () {
          return b;
        },
      });
      var s,
        i = a(200651),
        r = a(192379),
        l = a(557533),
        o = a.n(l),
        c = a(622535),
        d = a(213919),
        u = a(982905),
        N = a(794010),
        h = a(66037),
        m = a(231338),
        p = a(436620),
        I = a(330711),
        _ = a(110867);
      function k(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      let A = "Footer Navigation",
        g = { BLURPLE: "Blurple", PRIMARY: "Primary" },
        f = () => [
          {
            title: I.Z.Messages.NAVIGATION_PRODUCT,
            routes: [
              {
                link: m.am.DOWNLOAD,
                title: I.Z.Messages.NAVIGATION_DOWNLOAD,
                tracking: "download",
              },
              {
                link: m.am.BRANDING,
                title: I.Z.Messages.NAVIGATION_BRANDING,
                tracking: "branding",
              },
              {
                link: m.am.NITRO,
                title: I.Z.Messages.NAVIGATION_NITRO,
                tracking: "nitro",
                external: !0,
              },
            ],
          },
          {
            title: I.Z.Messages.NAVIGATION_DEVELOPERS,
            routes: [
              {
                link: m.am.RICH_PRESENCE,
                title: I.Z.Messages.NAVIGATION_RICH_PRESENCE,
                tracking: "rich_presence",
              },
              {
                link: m.am.VERIFICATION,
                title: I.Z.Messages.NAVIGATION_VERIFICATION,
                tracking: "verification",
                external: !0,
              },
              {
                link: m.yX.DEV_PORTAL_APPLICATIONS,
                title: I.Z.Messages.NAVIGATION_APPLICATIONS,
                tracking: "developers",
                external: !0,
              },
              {
                link: m.yX.DEV_PORTAL_DOCUMENTATION,
                title: I.Z.Messages.NAVIGATION_DOCUMENTATION,
                tracking: "documentation",
                external: !0,
              },
            ],
          },
          {
            title: I.Z.Messages.NAVIGATION_RESOURCES,
            routes: [
              {
                link: m.yX.HELP_AND_SUPPORT,
                title: I.Z.Messages.NAVIGATION_HELP_AND_SUPPORT,
                tracking: "helpandsupport",
                external: !0,
              },
              {
                link: m.am.GUIDELINES,
                title: I.Z.Messages.NAVIGATION_GUIDELINES,
                tracking: "guidelines",
                external: !0,
              },
              {
                link: m.yX.FEEDBACK,
                title: I.Z.Messages.NAVIGATION_FEEDBACK,
                tracking: "feedback",
                external: !0,
              },
              {
                link: m.am.TERMS,
                title: I.Z.Messages.NAVIGATION_TERMS,
                tracking: "terms",
                external: !0,
              },
              {
                link: m.am.PRIVACY,
                title: I.Z.Messages.NAVIGATION_PRIVACY,
                tracking: "privacy",
                external: !0,
              },
              {
                link: m.am.SECURITY,
                title: I.Z.Messages.NAVIGATION_SECURITY,
                tracking: "security",
              },
              {
                link: m.yX.STATUS,
                title: I.Z.Messages.NAVIGATION_STATUS,
                tracking: "status",
                external: !0,
              },
              {
                link: m.am.SAFETY_LANDING,
                title: I.Z.Messages.NAVIGATION_SAFETY_CENTER,
                tracking: "safetycenter",
                external: !0,
              },
            ],
          },
          {
            title: I.Z.Messages.NAVIGATION_COMPANY,
            routes: [
              {
                link: m.am.COMPANY,
                title: I.Z.Messages.NAVIGATION_ABOUT,
                tracking: "about",
              },
              {
                link: m.am.BLOG,
                title: I.Z.Messages.NAVIGATION_BLOG,
                tracking: "blog",
                external: !0,
              },
              {
                link: m.am.JOBS,
                title: I.Z.Messages.NAVIGATION_JOBS,
                tracking: "join",
                external: !0,
              },
            ],
          },
          {
            title: I.Z.Messages.NAVIGATION_MORE,
            routes: [
              {
                link: m.am.PARTNERS,
                title: I.Z.Messages.NAVIGATION_PARTNERS,
                tracking: "partners",
                external: !0,
              },
              {
                link: m.am.HYPESQUAD,
                title: I.Z.Messages.NAVIGATION_HYPESQUAD,
                tracking: "hypesquad",
                external: !0,
              },
              {
                link: m.yX.PRESS_INQUIRIES,
                title: I.Z.Messages.NAVIGATION_PRESS_INQUIRIES,
                tracking: "pressinquiries",
                external: !0,
              },
              {
                link: m.am.OPEN_SOURCE,
                title: I.Z.Messages.NAVIGATION_OPEN_SOURCE,
                tracking: "open_source",
              },
            ],
          },
        ],
        O = (e) => {
          let { colorVariant: t, animate: a } = e;
          return (0, i.jsx)("svg", {
            className: (0, u.l)(_, "footerBackground", t),
            preserveAspectRatio: "none",
            width: "1920",
            height: "100%",
            viewBox: "0 0 1920 330",
            version: "1.1",
            children: (0, i.jsx)("path", {
              className: (0, u.l)(_, "footerBackground", a ? "Play" : "Paused"),
              fill: "#1a1c1e",
              fillOpacity: "0.3",
              d: "M140.881198,194.260295 C257.600568,129.32862 342.939626,119.84993 418.009939,203.154617 C493.080251,286.459305 545.728689,70.9046172 636.439626,63.9593047 C727.150564,57.0139922 768.99822,139.670242 858.802907,119.431961 C948.607595,99.1936797 1071.91228,-32.9977266 1243.91228,7.75227342 C1415.91228,48.5022734 1404.10369,208.584305 1508.27166,178.709305 C1612.43963,148.834305 1633.73291,79.913472 1711.63588,98.8569055 C1776.28676,114.577866 1819.96778,221.391836 1889.37253,185.808108 C2017.32661,120.206212 2004.01952,336.769569 2004.01952,336.769569 L271.635881,337 L-149.063338,337 C-149.063338,337 -245.850307,175.637635 -58.0633382,228.867188 C33.8652851,254.92501 64.1722713,236.933925 140.881198,194.260295 Z",
            }),
          });
        };
      class b extends (s = r.PureComponent) {
        componentDidMount() {
          this.setState({ token: (0, d.getToken)(), isAppCompatible: p.KO });
        }
        renderAppButton(e) {
          if ("STATIC_RENDERER" === this.props.platform) return null;
          let {
              downloadLink: t,
              isMobile: a,
              mobileDownloadText: s,
              platform: r,
              variant: l,
              authRedirectTo: o,
            } = this.props,
            { isAppCompatible: c } = this.state;
          if (a)
            return (0, i.jsx)(n, {
              eventName: "Download App",
              data: {
                Platform: r,
                PTB: !1,
                Released: !0,
                "Referring Location": "Footer",
              },
              alt: "Download Discord",
              target: "_blank",
              className: (0, u.l)(_, "button", l),
              href: t,
              children: s,
            });
          if (!c)
            return (0, i.jsx)(n, {
              eventName: "Download App",
              data: {
                Platform: r,
                PTB: !1,
                Released: !0,
                "Referring Location": "Footer",
              },
              alt: "Download Discord",
              className: (0, u.l)(_, "button", l),
              href: m.am.DOWNLOAD,
              children: I.Z.Messages.NAVIGATION_DOWNLOAD,
            });
          let d = null != o ? m.$w.REGISTER_WITH_REDIRECT(o) : m.$w.REGISTER,
            N = I.Z.Messages.COMMON_SIGN_UP_NOW;
          return (
            e && ((d = m.$w.ME), (N = I.Z.Messages.COMMON_OPEN_DISCORD)),
            (0, i.jsx)(n, {
              eventName: A,
              className: (0, u.l)(_, "button", this.props.variant),
              data: { linkClicked: e ? "open" : "login", googleAnalytics: !0 },
              href: d,
              children: N,
            })
          );
        }
        render() {
          let {
              variant: e,
              style: t,
              className: s,
              avoidRouter: r,
              showWave: l,
            } = this.props,
            { animateBackground: d, token: N } = this.state,
            p = f().map((e) => {
              let t = e.routes.map((e, t) =>
                e.external
                  ? (0, i.jsx)(
                      n,
                      {
                        className: _.route,
                        eventName: A,
                        data: { linkClicked: e.tracking },
                        href: e.link,
                        children: e.title,
                      },
                      e.link || t,
                    )
                  : (0, i.jsx)(
                      h.Z,
                      {
                        avoidRouter: r,
                        to: e.link,
                        from: "footer_navigation",
                        className: _.route,
                        children: (0, i.jsx)(n, {
                          tag: "span",
                          eventName: A,
                          data: { linkClicked: e.tracking },
                          children: e.title,
                        }),
                      },
                      e.link,
                    ),
              );
              return (0, i.jsxs)(
                "div",
                {
                  className: _.navigationSection,
                  children: [
                    (0, i.jsx)("h3", {
                      className: _.navigationHeader,
                      children: e.title,
                    }),
                    t,
                  ],
                },
                e.title,
              );
            });
          return (0, i.jsx)(c.$, {
            onChange: this.handleVisibility,
            children: (0, i.jsxs)("footer", {
              className: o()((0, u.l)(_, "footer", e), s),
              style: t,
              children: [
                l ? (0, i.jsx)(O, { colorVariant: e, animate: d }) : null,
                (0, i.jsxs)("div", {
                  className: _.footerContent,
                  children: [
                    (0, i.jsxs)("div", {
                      className: _.navigation,
                      children: [
                        (0, i.jsx)("div", {
                          className: _.logoWrap,
                          children: (0, i.jsx)(n, {
                            className: _.logo,
                            href: m.am.INDEX,
                            eventName: A,
                            data: { linkClicked: "logo" },
                            children: (0, i.jsx)("img", {
                              alt: I.Z.Messages.NAVIGATION_HOME,
                              src: a(131529),
                            }),
                          }),
                        }),
                        p,
                      ],
                    }),
                    (0, i.jsx)("div", { className: _.separator }),
                    (0, i.jsxs)("div", {
                      className: _.joinDiscord,
                      children: [
                        (0, i.jsxs)("div", {
                          className: _.stats,
                          children: [
                            (0, i.jsx)("h2", {
                              className: _.readyToJoin,
                              children:
                                I.Z.Messages.FOOTER_READY_TO_TRY_DISCORD,
                            }),
                            (0, i.jsx)("h3", {
                              className: _.joinOtherPlayers,
                              children:
                                I.Z.Messages.FOOTER_JOIN_OVER_PLAYERS_TODAY.format(
                                  { num: m.vS },
                                ),
                            }),
                          ],
                        }),
                        this.renderAppButton(N),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        }
        constructor(e) {
          super(e),
            k(this, "state", {
              animateBackground: !1,
              isMobile: null,
              token: null,
              isAppCompatible: !0,
            }),
            k(this, "handleVisibility", (e) => {
              this.setState({ animateBackground: e });
            }),
            null != e.locale && I.Z.setLocale(e.locale),
            (n = (t) =>
              (0, i.jsx)(N.Z, {
                track: e.track,
                trackOutboundLink: e.trackOutboundLink,
                ...t,
              }));
        }
      }
      k(b, "Variants", g),
        k(b, "defaultProps", { variant: g.PRIMARY, showWave: !0 });
    },
    653371: function (e, t, a) {
      a.d(t, {
        a: function () {
          return f;
        },
      }),
        a(47120),
        a(653041);
      var n = a(200651),
        s = a(192379),
        i = a(557533),
        r = a.n(i),
        l = a(771950),
        o = a(860911),
        c = a(66037),
        d = a(787907),
        u = a(643103),
        N = a(34211),
        h = a(231338),
        m = a(436620),
        p = a(431138),
        I = a(330711),
        _ = a(546875);
      function k(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      let A = h.j_.MAIN_NAVIGATION_MENU,
        g = () => [
          {
            route: (0, l.L)(h.RK.TWITTER),
            linkClicked: "twitter",
            alt: "Discord's Twitter",
            img: p.r.ASSET_SOCIAL_TWITTER,
          },
          {
            route: h.fK.FACEBOOK_URL,
            linkClicked: "facebook",
            alt: "Discord's Facebook",
            img: p.r.ASSET_SOCIAL_FACEBOOK,
          },
          {
            route: h.fK.INSTAGRAM_URL,
            linkClicked: "instagram",
            alt: "Discord's Instagram",
            img: p.r.ASSET_SOCIAL_INSTAGRAM,
          },
        ];
      class f extends s.PureComponent {
        componentDidMount() {
          this.setState({ isAppCompatible: m.KO });
        }
        render() {
          let {
            className: e,
            mainContentId: t,
            skipToContentLabel: a,
            onChangeLocale: s,
            TrackClick: i,
            avoidRouter: l,
          } = this.props;
          return (0, n.jsxs)("header", {
            className: r()(_.header, e),
            children: [
              (0, n.jsxs)("nav", {
                className: _.headerInner,
                children: [
                  (0, n.jsxs)("div", {
                    className: _.headerLogo,
                    children: [
                      (0, n.jsx)(i, {
                        tag: "div",
                        eventName: A,
                        data: { linkClicked: "logo" },
                        children: (0, n.jsx)(c.Z, {
                          avoidRouter: l,
                          to: h.am.INDEX,
                          from: h.j_.MAIN_NAVIGATION_MENU,
                          children: (0, n.jsx)(d.O, {}),
                        }),
                      }),
                      null != t
                        ? (0, n.jsx)("a", {
                            className: _.skipToContent,
                            href: "#".concat(t),
                            children: a,
                          })
                        : null,
                    ],
                  }),
                  (0, n.jsx)("ul", {
                    className: _.headerNav,
                    children: (0, n.jsx)(N.o, {
                      avoidRouter: l,
                      TrackClick: i,
                      styles: _,
                    }),
                  }),
                  (0, n.jsxs)("ul", {
                    className: _.headerNavRight,
                    children: [
                      this.renderSocialMediaNav(),
                      (0, n.jsx)(u.p, { onChange: s }),
                    ],
                  }),
                ],
              }),
              null != t && (0, n.jsx)("div", { id: t, tabIndex: -1 }),
            ],
          });
        }
        constructor(...e) {
          super(...e),
            k(this, "state", { isAppCompatible: !0 }),
            k(this, "getAppButton", () => {
              let { token: e, TrackClick: t, authRedirectTo: a } = this.props,
                { isAppCompatible: s } = this.state,
                i = (0, o.Ui)(a),
                r = I.Z.Messages.NAVIGATION_LOGIN;
              return (
                null != e &&
                  ((i = h.$w.ME), (r = I.Z.Messages.NAVIGATION_OPEN)),
                s
                  ? (0, n.jsx)(
                      "li",
                      {
                        className: _.listItemInactive,
                        children: (0, n.jsx)(t, {
                          eventName: A,
                          className: _.appButton,
                          data: {
                            linkClicked: e ? "open" : "login",
                            googleAnalytics: !0,
                          },
                          href: i,
                          children: r,
                        }),
                      },
                      "app-button",
                    )
                  : null
              );
            }),
            k(this, "renderSocialMediaNav", () => {
              let { TrackClick: e } = this.props,
                t = g().map((t) =>
                  (0, n.jsx)(
                    "li",
                    {
                      className: r()(_.listItemInactive, _.listItemSocialMedia),
                      children: (0, n.jsx)(e, {
                        eventName: A,
                        className: _.rightNavLink,
                        data: { linkClicked: t.linkClicked },
                        href: t.route,
                        rel: "me",
                        target: "_blank",
                        children: (0, n.jsx)("img", { src: t.img, alt: t.alt }),
                      }),
                    },
                    t.route,
                  ),
                ),
                a = this.getAppButton();
              return null != a && t.push(a), t;
            });
        }
      }
    },
    787907: function (e, t, a) {
      a.d(t, {
        O: function () {
          return l;
        },
      });
      var n = a(200651),
        s = a(192379),
        i = a(435935),
        r = a(364158);
      class l extends s.PureComponent {
        render() {
          return (0, n.jsxs)(i.k, {
            wrap: i.k.Wrap.NO_WRAP,
            children: [
              (0, n.jsx)(i.k.Child, {
                grow: 0,
                shrink: 0,
                children: (0, n.jsxs)("svg", {
                  className: r.clyde,
                  viewBox: "0 0 33 36",
                  children: [
                    (0, n.jsx)("ellipse", {
                      cx: "19.6",
                      cy: "17.1",
                      rx: "1.9",
                      ry: "2",
                    }),
                    (0, n.jsx)("ellipse", {
                      cx: "12.8",
                      cy: "17.1",
                      rx: "1.9",
                      ry: "2",
                    }),
                    (0, n.jsx)("path", {
                      d: "M28.5,0H3.8A3.778,3.778,0,0,0,0,3.7V28a3.714,3.714,0,0,0,3.8,3.7h21l-1-3.3,2.4,2.1,2.2,2,4,3.4V3.7A3.937,3.937,0,0,0,28.5,0ZM21.4,23.5s-.7-.8-1.2-1.5a5.958,5.958,0,0,0,3.3-2.1A22.059,22.059,0,0,1,21.4,21a13.817,13.817,0,0,1-2.7.8,15.394,15.394,0,0,1-4.8,0,12.544,12.544,0,0,1-2.7-.8c-.4-.2-.9-.4-1.4-.6-.1,0-.1-.1-.2-.1H9.5A5.2,5.2,0,0,0,9,20a5.932,5.932,0,0,0,3.2,2.1c-.6.7-1.2,1.5-1.2,1.5-4.1-.1-5.6-2.7-5.6-2.7A23.4,23.4,0,0,1,8.1,10.4a8.948,8.948,0,0,1,5.2-1.9l.2.2A10.672,10.672,0,0,0,8.7,11s.4-.2,1.1-.5A13.33,13.33,0,0,1,14,9.4h.3a15.243,15.243,0,0,1,3.7,0,16.225,16.225,0,0,1,5.6,1.7A12.081,12.081,0,0,0,19,8.8l.3-.3a8.948,8.948,0,0,1,5.2,1.9,23.4,23.4,0,0,1,2.7,10.5A7.865,7.865,0,0,1,21.4,23.5Z",
                    }),
                  ],
                }),
              }),
              (0, n.jsx)(i.k.Child, {
                grow: 0,
                shrink: 0,
                children: (0, n.jsx)("svg", {
                  className: r.type,
                  viewBox: "0 0 98 36",
                  children: (0, n.jsx)("path", {
                    d: "M12.8,7.8H6.7v6.8l4.1,3.6V11.6H13c1.4,0,2.1.7,2.1,1.7v5c0,1-.6,1.8-2.1,1.8H6.7v3.8h6.1c3.3,0,6.4-1.6,6.4-5.3V13.2C19.2,9.4,16.1,7.8,12.8,7.8ZM45,18.6V13c0-2,3.7-2.5,4.8-.5l3.4-1.3a6.069,6.069,0,0,0-5.8-3.7c-3.3,0-6.5,1.9-6.5,5.5v5.6c0,3.7,3.2,5.5,6.5,5.5a6.611,6.611,0,0,0,5.9-3.6l-3.7-1.6C48.7,21.1,45,20.6,45,18.6ZM33.8,13.8c-1.3-.3-2.1-.7-2.2-1.5.1-1.9,3-1.9,4.7-.1l2.7-2a6.884,6.884,0,0,0-5.6-2.6c-3,0-5.9,1.7-5.9,4.8s2.4,4.7,5.1,5.1c1.3.2,2.8.7,2.8,1.6-.1,1.7-3.7,1.6-5.4-.3l-2.6,2.4A7.258,7.258,0,0,0,33,24.1c3,0,6.3-1.7,6.5-4.8C39.6,15.3,36.7,14.3,33.8,13.8ZM21.4,23.9h4.2V7.8H21.5V23.9ZM91.2,7.8H85.1v6.8l4.1,3.6V11.6h2.2c1.4,0,2.1.7,2.1,1.7v5c0,1-.6,1.8-2.1,1.8H85.1v3.8h6.1c3.3,0,6.4-1.6,6.4-5.3V13.2C97.6,9.4,94.5,7.8,91.2,7.8ZM61.1,7.6c-3.4,0-6.8,1.8-6.8,5.5v5.5c0,3.7,3.4,5.5,6.8,5.5s6.8-1.8,6.8-5.5V13.1C67.9,9.4,64.5,7.6,61.1,7.6Zm2.7,11c0,1.2-1.3,1.8-2.6,1.8s-2.7-.6-2.7-1.8V13.1c0-1.2,1.3-1.8,2.6-1.8s2.7.6,2.7,1.8Zm19-5.5c-.1-3.8-2.7-5.3-6.1-5.3H70.1V23.9h4.2V18.8H75l3.8,5.1H84l-4.5-5.5C81.6,17.8,82.8,16.1,82.8,13.1Zm-6,2.2H74.4V11.6h2.4A1.853,1.853,0,1,1,76.8,15.3Z",
                  }),
                }),
              }),
            ],
          });
        }
      }
    },
    950132: function (e, t, a) {
      a.d(t, {
        h: function () {
          return _;
        },
      });
      var n,
        s,
        i,
        r,
        l = a(200651),
        o = a(192379),
        c = a(476400),
        d = a.n(c),
        u = a(948789),
        N = a(982905),
        h = a(66037),
        m = a(231338),
        p = a(48798);
      let I = m.j_.MAIN_NAVIGATION_MENU;
      class _ extends (r = o.PureComponent) {
        render() {
          let e = (0, u.fQ)(this.context.router),
            {
              isOpen: t,
              dropdownLinks: a,
              TrackClick: n,
              avoidRouter: s,
              id: i,
              "aria-label": r,
            } = this.props,
            o = a.map((t, a) =>
              t.divider
                ? (0, l.jsx)(
                    "hr",
                    { className: p.divider },
                    "divider-".concat(a),
                  )
                : t.external
                  ? (0, l.jsx)(
                      "li",
                      {
                        className: p.moreListItemInactive,
                        children: (0, l.jsx)(n, {
                          className: p.moreListLink,
                          eventName: I,
                          data: { linkClicked: t.linkClicked },
                          href: t.route,
                          rel: "me",
                          children: (0, l.jsx)("span", {
                            className: p.moreListLinkCopy,
                            children: t.title,
                          }),
                        }),
                      },
                      t.route,
                    )
                  : (0, l.jsx)(
                      "li",
                      {
                        className: (0, N.l)(
                          p,
                          "moreListItem",
                          e(t.route) ? "Active" : "Inactive",
                        ),
                        children: (0, l.jsx)(h.Z, {
                          avoidRouter: s,
                          className: p.moreListLink,
                          to: t.route,
                          from: m.j_.MAIN_NAVIGATION_MENU,
                          role: "menuitem",
                          children: (0, l.jsx)(n, {
                            tag: "span",
                            className: p.moreListLinkCopy,
                            eventName: I,
                            data: { linkClicked: t.linkClicked },
                            children: t.title,
                          }),
                        }),
                      },
                      t.route,
                    ),
            );
          return (0, l.jsx)("ul", {
            id: i,
            className: (0, N.l)(p, "moreList", t ? "Open" : "Closed"),
            "aria-label": r,
            children: o,
          });
        }
      }
      (n = _),
        (s = "contextTypes"),
        (i = { router: d().object.isRequired }),
        s in n
          ? Object.defineProperty(n, s, {
              value: i,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (n[s] = i);
    },
    643103: function (e, t, a) {
      a.d(t, {
        p: function () {
          return h;
        },
      }),
        a(47120);
      var n = a(200651),
        s = a(192379),
        i = a(557533),
        r = a.n(i),
        l = a(435935),
        o = a(982905),
        c = a(431138),
        d = a(330711),
        u = a(209472);
      function N(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      class h extends s.PureComponent {
        componentDidMount() {
          this.callChangeLocale(d.Z.getLocale());
        }
        render() {
          let { isOpen: e, languages: t, current: s } = this.state,
            { className: i } = this.props,
            d = null;
          return (
            null != t &&
              (d = t
                .sort((e, t) =>
                  e.code < t.code ? -1 : e.code > t.code ? 1 : 0,
                )
                .map((e) => {
                  let t = (function (e) {
                    try {
                      return a(621287)("./".concat(e, ".png"));
                    } catch (e) {
                      return null;
                    }
                  })(e.code);
                  return null == t
                    ? null
                    : (0, n.jsxs)(
                        "li",
                        {
                          className: (0, o.l)(
                            u,
                            "locale",
                            null != s && e.code === s.code ? "Current" : null,
                          ),
                          onClick: () => this.setLocale(e.code),
                          children: [
                            (0, n.jsx)("img", {
                              className: u.localeImage,
                              src: t,
                              alt: e.name,
                            }),
                            e.name,
                          ],
                        },
                        e.code,
                      );
                })),
            (0, n.jsxs)("div", {
              className: r()(u.localePicker, i),
              onMouseEnter: this.open,
              onMouseLeave: this.close,
              onClick: this.toggle,
              children: [
                (0, n.jsxs)(l.k, {
                  align: l.k.Align.CENTER,
                  className: (0, o.l)(u, "opener", e ? "Open" : null),
                  children: [
                    (0, n.jsx)("span", { className: u.line }),
                    (0, n.jsx)("img", {
                      className: u.localeIcon,
                      src: c.r.ICON_TRANSLATE,
                      alt: "Choose Locale",
                    }),
                    (0, n.jsx)("img", {
                      className: u.arrowIcon,
                      src: c.r.ICON_ARROW_DOWN,
                      alt: "Open Locale",
                    }),
                  ],
                }),
                (0, n.jsx)("ul", {
                  className: (0, o.l)(u, "localeList", e ? "Open" : "Closed"),
                  children: d,
                }),
              ],
            })
          );
        }
        constructor(...e) {
          super(...e),
            N(this, "state", {
              languages: d.Z.getLanguages().filter((e) => e.enabled),
              current: d.Z.getLocaleInfo(),
              isOpen: !1,
            }),
            N(this, "setLocale", (e) => {
              null != d.Z && (d.Z.setLocale(e), this.callChangeLocale(e));
            }),
            N(this, "callChangeLocale", (e) => {
              let { onChange: t } = this.props;
              null != t && t(e);
            }),
            N(this, "open", () => {
              this.setState({ isOpen: !0 });
            }),
            N(this, "close", () => {
              this.setState({ isOpen: !1 });
            }),
            N(this, "toggle", () => {
              let { isOpen: e } = this.state;
              this.setState({ isOpen: !e });
            });
        }
      }
    },
    34211: function (e, t, a) {
      a.d(t, {
        o: function () {
          return m;
        },
      }),
        a(47120);
      var n,
        s = a(200651),
        i = a(192379),
        r = a(948789),
        l = a(66037),
        o = a(248108),
        c = a(231338),
        d = a(330711);
      function u(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      let N = c.j_.MAIN_NAVIGATION_MENU,
        h = (e) => [
          {
            route: c.am.DOWNLOAD,
            linkClicked: "download",
            title: d.Z.Messages.NAVIGATION_DOWNLOAD,
          },
          {
            route: c.am.NITRO,
            linkClicked: "nitro",
            title: d.Z.Messages.NAVIGATION_NITRO,
            external: !0,
          },
          {
            route: c.am.JOBS,
            linkClicked: "jobs",
            title: d.Z.Messages.NAVIGATION_JOBS,
            external: !0,
          },
          {
            title: d.Z.Messages.NAVIGATION_DEVELOPERS,
            links: [
              {
                route: c.am.RICH_PRESENCE,
                linkClicked: "rich_presence",
                title: d.Z.Messages.NAVIGATION_RICH_PRESENCE,
              },
              {
                route: c.am.VERIFICATION,
                linkClicked: "verification",
                title: d.Z.Messages.NAVIGATION_VERIFICATION,
                external: !0,
              },
              {
                route: c.yX.DEV_PORTAL,
                linkClicked: "developers",
                title: d.Z.Messages.NAVIGATION_DEVELOPER_PORTAL,
                external: !0,
              },
              {
                route: c.yX.DEV_PORTAL_DOCUMENTATION,
                linkClicked: "documentation",
                title: d.Z.Messages.NAVIGATION_DOCUMENTATION,
                external: !0,
              },
            ],
          },
          {
            title: d.Z.Messages.NAVIGATION_COMMUNITY,
            links: [
              {
                route: c.am.OPEN_SOURCE,
                linkClicked: "open_source",
                title: d.Z.Messages.NAVIGATION_OPEN_SOURCE,
              },
              {
                route: c.am.PARTNERS,
                linkClicked: "partners",
                title: d.Z.Messages.NAVIGATION_PARTNERS,
                external: !0,
              },
              {
                route: c.am.HYPESQUAD,
                linkClicked: "hypesquad",
                title: d.Z.Messages.NAVIGATION_HYPESQUAD,
                external: !0,
              },
              {
                route: c.am.GUIDELINES,
                linkClicked: "guidelines",
                title: d.Z.Messages.NAVIGATION_GUIDELINES,
                external: !0,
              },
            ],
          },
          {
            title: d.Z.Messages.NAVIGATION_SUPPORT,
            links: [
              {
                route: "//support.discord.com/hc/".concat(e),
                linkClicked: "helpandsupport",
                title: d.Z.Messages.NAVIGATION_HELP_AND_SUPPORT,
                external: !0,
              },
              {
                route: c.yX.STATUS,
                linkClicked: "status",
                title: d.Z.Messages.NAVIGATION_STATUS,
                external: !0,
              },
              {
                route: c.am.SAFETY_LANDING,
                linkClicked: "safetycenter",
                title: d.Z.Messages.NAVIGATION_SAFETY_CENTER,
                external: !0,
              },
            ],
          },
        ];
      class m extends (n = i.PureComponent) {
        render() {
          let e = (0, r.fQ)(this.context.router),
            {
              isMobile: t,
              isVisible: a,
              styles: n,
              TrackClick: i,
              avoidRouter: u,
            } = this.props,
            { sectionShown: m } = this.state;
          return h(null != d.Z ? d.Z.getLocale().toLowerCase() : "").map(
            (r) => {
              if (null != r.links)
                return (0, s.jsx)(
                  o.Z,
                  {
                    title: r.title,
                    links: r.links,
                    isOpen: m === r.title,
                    isMobile: t,
                    avoidRouter: u,
                    TrackClick: i,
                    onClose: this.closeSubNav,
                    onOpen: this.openSubNav,
                  },
                  r.title,
                );
              if (r.external && null != r.route)
                return (0, s.jsx)(
                  "li",
                  {
                    className: n.listItemInactive,
                    role: "none",
                    children: (0, s.jsx)(i, {
                      className: n.mainNavLink,
                      eventName: N,
                      data: r.linkClicked ? { linkClicked: r.linkClicked } : {},
                      href: r.route,
                      rel: "me",
                      children: r.title,
                    }),
                  },
                  "external_link_".concat(r.route),
                );
              if (null != r.route)
                return (0, s.jsx)(
                  "li",
                  {
                    className: e(r.route)
                      ? n.listItemActive
                      : n.listItemInactive,
                    role: "none",
                    children: (0, s.jsx)(l.Z, {
                      avoidRouter: u,
                      to: r.route,
                      from: c.j_.MAIN_NAVIGATION_MENU,
                      tabIndex: a ? 0 : -1,
                      role: "menuitem",
                      children: (0, s.jsx)(i, {
                        tag: "span",
                        className: n.mainNavLink,
                        eventName: N,
                        data: { linkClicked: r.linkClicked },
                        children: r.title,
                      }),
                    }),
                  },
                  "link_".concat(r.route),
                );
              return [];
            },
          );
        }
        constructor(...e) {
          super(...e),
            u(this, "state", { sectionShown: null }),
            u(this, "closeSubNav", () => {
              let { sectionShown: e } = this.state;
              null !== e && this.setState({ sectionShown: null });
            }),
            u(this, "openSubNav", (e) => {
              let { sectionShown: t } = this.state;
              t !== e && this.setState({ sectionShown: e });
            });
        }
      }
      u(m, "defaultProps", { isMobile: !1, isVisible: !0 });
    },
    388755: function (e, t, a) {
      a.d(t, {
        D: function () {
          return k;
        },
      }),
        a(47120);
      var n = a(200651),
        s = a(192379),
        i = a(557533),
        r = a.n(i),
        l = a(39383),
        o = a.n(l),
        c = a(608863),
        d = a(66037),
        u = a(643103),
        N = a(34211),
        h = a(231338),
        m = a(431138),
        p = a(583715);
      function I(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      let _ = h.j_.MAIN_NAVIGATION_MENU;
      class k extends s.PureComponent {
        componentDidMount() {
          window.addEventListener("keydown", this.handleKeyDown);
        }
        componentWillUnmount() {
          window.removeEventListener("keydown", this.handleKeyDown);
        }
        render() {
          let {
              className: e,
              TrackClick: t,
              onChangeLocale: a,
              avoidRouter: s,
              openNavAriaLabel: i,
              hideNavAriaLabel: l,
            } = this.props,
            { menuOpen: o } = this.state;
          return (0, n.jsx)("header", {
            className: r()(p.header, e),
            children: (0, n.jsxs)("nav", {
              className: p.headerInner,
              children: [
                (0, n.jsx)(t, {
                  tag: "div",
                  eventName: _,
                  className: p.headerLogo,
                  data: { linkClicked: "logo" },
                  children: (0, n.jsx)(d.Z, {
                    avoidRouter: s,
                    className: p.logoWrapper,
                    to: h.am.INDEX,
                    from: h.j_.MAIN_NAVIGATION_MENU,
                    children: (0, n.jsx)("img", {
                      className: p.logo,
                      src: m.r.ASSET_LOGO_DISCORD_SVG,
                      alt: "Discord",
                      itemProp: "logo",
                    }),
                  }),
                }),
                (0, n.jsx)(t, {
                  tag: "div",
                  className: p.hamburgerButton,
                  eventName: _,
                  data: { linkClicked: "mobile-menu" },
                  children: (0, n.jsx)(c.r, {
                    open: o,
                    "aria-haspopup": "true",
                    "aria-label": o ? l : i,
                    "aria-expanded": o,
                    "aria-controls": this._mainNavId,
                    onClick: this.toggleMenu,
                  }),
                }),
                (0, n.jsxs)("ul", {
                  className: o ? p.headerNavOpen : p.headerNav,
                  children: [
                    (0, n.jsx)(N.o, {
                      avoidRouter: s,
                      TrackClick: t,
                      styles: p,
                      isMobile: !0,
                      isVisible: o,
                    }),
                    (0, n.jsx)(u.p, { onChange: a }),
                  ],
                }),
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            I(this, "_mainNavId", o()("mainNav")),
            I(this, "state", { menuOpen: !1 }),
            I(this, "toggleMenu", () => {
              this.setState({ menuOpen: !this.state.menuOpen });
            }),
            I(this, "handleKeyDown", (e) => {
              let { menuOpen: t } = this.state;
              ("Escape" === e.key || "Esc" === e.key) &&
                (e.preventDefault(), t && this.toggleMenu());
            });
        }
      }
    },
    248108: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return I;
        },
      }),
        a(47120);
      var n,
        s = a(200651),
        i = a(192379),
        r = a(39383),
        l = a.n(r),
        o = a(948789),
        c = a(66037),
        d = a(950132),
        u = a(231338),
        N = a(431138),
        h = a(155348);
      function m(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      let p = u.j_.MAIN_NAVIGATION_MENU;
      class I extends (n = i.PureComponent) {
        render() {
          let {
              title: e,
              links: t,
              isOpen: a,
              isMobile: n,
              TrackClick: i,
              avoidRouter: r,
            } = this.props,
            l =
              n && a
                ? (0, s.jsx)("ul", {
                    className: h.mobileSubMenuOpen,
                    id: this._dropdownId,
                    children: this.renderMobileSubMenu(),
                  })
                : null;
          return n
            ? (0, s.jsxs)(
                "li",
                {
                  className: h.__invalid_subListHeading,
                  tabIndex: -1,
                  onClick: this.toggleMenu,
                  onKeyDown: this.handleKeyDown,
                  children: [
                    (0, s.jsxs)(
                      "span",
                      {
                        className: h.mobileMenuItem,
                        "aria-label": "Open ".concat(e, " Nav"),
                        "aria-expanded": a,
                        "aria-controls": this._dropdownId,
                        "aria-haspopup": "true",
                        role: "menuitem",
                        tabIndex: 0,
                        children: [
                          e,
                          (0, s.jsx)("img", {
                            src: N.r.ICON_ARROW_DOWN,
                            className: h.iconArrow,
                            alt: "Open Nav",
                          }),
                        ],
                      },
                      "more",
                    ),
                    l,
                  ],
                },
                "dropdown_".concat(e),
              )
            : (0, s.jsxs)(
                "li",
                {
                  role: "none",
                  tabIndex: -1,
                  onFocus: this.openMenu,
                  onBlur: this.closeMenu,
                  onMouseEnter: this.openMenu,
                  onMouseLeave: this.closeMenu,
                  className: h.desktopSubMenuItem,
                  children: [
                    (0, s.jsxs)(
                      "span",
                      {
                        className: h.desktopMenuMore,
                        role: "menuitem",
                        tabIndex: 0,
                        "aria-haspopup": "true",
                        "aria-expanded": a,
                        "aria-controls": this._dropdownId,
                        children: [
                          e,
                          (0, s.jsx)("img", {
                            src: N.r.ICON_ARROW_DOWN,
                            className: h.iconArrow,
                            alt: "Open Nav",
                          }),
                        ],
                      },
                      "more",
                    ),
                    (0, s.jsx)(d.h, {
                      id: this._dropdownId,
                      avoidRouter: r,
                      TrackClick: i,
                      isOpen: a,
                      dropdownLinks: t,
                      "aria-label": e,
                    }),
                  ],
                },
                "dropdown_".concat(e),
              );
        }
        constructor(...e) {
          super(...e),
            m(this, "_dropdownId", l()("subMenuDropdown")),
            m(this, "closeMenu", () => {
              this.props.onClose();
            }),
            m(this, "openMenu", () => {
              let { title: e, onOpen: t } = this.props;
              t(e);
            }),
            m(this, "toggleMenu", () => {
              let { isOpen: e, title: t, onOpen: a, onClose: n } = this.props;
              e ? n() : a(t);
            }),
            m(this, "handleKeyDown", (e) => {
              ("Enter" === e.key || " " === e.key) &&
                (e.preventDefault(), this.toggleMenu());
            }),
            m(this, "renderMobileSubMenu", () => {
              let { links: e, TrackClick: t, avoidRouter: a } = this.props,
                n = (0, o.fQ)(this.context.router);
              return e.map((e) =>
                e.external
                  ? (0, s.jsx)(
                      "li",
                      {
                        className: h.subListItemInactive,
                        children: (0, s.jsx)(t, {
                          eventName: p,
                          className: h.subListItemLink,
                          data: {
                            linkClicked: "mobile-".concat(e.linkClicked),
                          },
                          rel: "me",
                          href: e.route,
                          children: e.title,
                        }),
                      },
                      e.route,
                    )
                  : (0, s.jsx)(
                      "li",
                      {
                        className: n(e.route)
                          ? h.subListItemActive
                          : h.subListItemInactive,
                        children: (0, s.jsx)(c.Z, {
                          avoidRouter: a,
                          to: e.route,
                          from: u.j_.MAIN_NAVIGATION_MENU,
                          children: (0, s.jsx)(t, {
                            className: h.subListItemLink,
                            tag: "span",
                            eventName: p,
                            data: {
                              linkClicked: "mobile-".concat(e.linkClicked),
                            },
                            children: e.title,
                          }),
                        }),
                      },
                      e.route,
                    ),
              );
            });
        }
      }
      m(I, "defaultProps", { isOpen: !1, isMobileMenuOpen: !1 });
    },
    231262: function (e, t, a) {
      a.d(t, {
        h: function () {
          return h;
        },
      });
      var n = a(200651),
        s = a(192379),
        i = a(557533),
        r = a.n(i),
        l = a(794010),
        o = a(653371),
        c = a(388755),
        d = a(330711),
        u = a(957539);
      let N = null;
      class h extends s.PureComponent {
        render() {
          let {
            token: e,
            className: t,
            onChangeLocale: a,
            mainContentId: i,
            mobileClassName: l,
            avoidRouter: d,
            authRedirectTo: h,
            openNavAriaLabel: m,
            hideNavAriaLabel: p,
            skipToContentLabel: I,
          } = this.props;
          return null == N
            ? null
            : (0, n.jsxs)(s.Fragment, {
                children: [
                  (0, n.jsx)(o.a, {
                    className: r()(u.desktopHeader, t),
                    TrackClick: N,
                    token: e,
                    avoidRouter: d,
                    authRedirectTo: h,
                    onChangeLocale: a,
                    mainContentId: i,
                    skipToContentLabel: I,
                  }),
                  (0, n.jsx)(c.D, {
                    className: r()(u.mobileHeader, l),
                    token: e,
                    avoidRouter: d,
                    TrackClick: N,
                    onChangeLocale: a,
                    openNavAriaLabel: m,
                    hideNavAriaLabel: p,
                  }),
                ],
              });
        }
        constructor(e) {
          super(e),
            null != e.locale && d.Z.setLocale(e.locale),
            (N = (t) =>
              (0, n.jsx)(l.Z, {
                track: e.track,
                trackOutboundLink: e.trackOutboundLink,
                ...t,
              }));
        }
      }
    },
    501522: function (e, t, a) {
      a(47120);
      var n = a(200651),
        s = a(192379),
        i = a(332009);
      function r(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      class l extends s.Component {
        componentDidUpdate(e) {
          let {
            props: { location: t, shouldScrollToTop: a },
            scrollRef: { current: n },
          } = this;
          if (null != n)
            t !== e.location &&
              (null != a
                ? a(this.props) && (n.scrollTop = 0)
                : (n.scrollTop = 0));
        }
        render() {
          let { className: e, render: t } = this.props;
          return (0, n.jsx)("div", {
            ref: this.scrollRef,
            className: e,
            children: t(this.scrollTo, this.getScrollTop),
          });
        }
        constructor(...e) {
          super(...e),
            r(this, "scrollRef", s.createRef()),
            r(this, "scrollTo", (e) => {
              null != this.scrollRef.current &&
                (this.scrollRef.current.scrollTop = e);
            }),
            r(this, "getScrollTop", () =>
              null == this.scrollRef.current
                ? 0
                : this.scrollRef.current.scrollTop,
            );
        }
      }
      t.Z = (0, i.EN)(l);
    },
    794010: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return l;
        },
      }),
        a(47120);
      var n,
        s = a(200651),
        i = a(192379);
      function r(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      class l extends (n = i.PureComponent) {
        render() {
          let {
            tag: e,
            children: t,
            eventName: a,
            data: n,
            track: i,
            trackOutboundLink: r,
            ...l
          } = this.props;
          return null == e
            ? null
            : (0, s.jsx)(e, { ...l, onClick: this.handleClick, children: t });
        }
        constructor(...e) {
          super(...e),
            r(this, "handleClick", (e) => {
              let {
                eventName: t,
                data: a,
                href: n,
                onClick: s,
                trackOutboundLink: i,
                track: r,
              } = this.props;
              if (
                (a.googleAnalytics &&
                  i &&
                  (null != n
                    ? i(n)
                    : console.warn(
                        "TrackClick.handleClick: No href provided when using data.googleAnalytics",
                      )),
                s && s(e),
                !t)
              )
                return !1;
              r(t, a);
            });
        }
      }
      r(l, "defaultProps", { tag: "a", data: {} });
    },
    66037: function (e, t, a) {
      a(411104), a(47120);
      var n = a(200651),
        s = a(192379),
        i = a(539528),
        r = a(81415),
        l = a(332009);
      class o extends s.Component {
        render() {
          let {
            to: e,
            from: t,
            isNavLink: a,
            children: s,
            tabIndex: i = 0,
            role: l,
            className: o,
          } = this.props;
          if (null == e)
            throw Error("Missing 'to' route prop in TrackLink component");
          let c = "string" == typeof e ? e : e.pathname,
            d = "string" == typeof e ? "" : e.hash,
            u = "string" == typeof e ? "" : e.search;
          return a
            ? (0, n.jsx)(r.OL, {
                className: o,
                tabIndex: i,
                onClick: this.handleOnClick,
                to: {
                  pathname: c,
                  hash: d,
                  search: u,
                  state: { previousLinkLocation: t },
                },
                role: l,
                children: s,
              })
            : (0, n.jsx)(r.rU, {
                className: o,
                tabIndex: i,
                onClick: this.handleOnClick,
                to: {
                  pathname: c,
                  hash: d,
                  search: u,
                  state: { previousLinkLocation: t },
                },
                role: l,
                children: s,
              });
        }
        constructor(...e) {
          var t, a, n;
          super(...e),
            (t = this),
            (a = "handleOnClick"),
            (n = () => {
              let {
                to: e,
                avoidRouter: t,
                onClick: a,
                history: n,
              } = this.props;
              if (null != a) a();
              else if (t) {
                let t =
                    "string" == typeof e
                      ? (0, i.ob)(e, null, void 0, n.location)
                      : e,
                  a = n.createHref(t);
                window.location = a;
              }
            }),
            a in t
              ? Object.defineProperty(t, a, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                })
              : (t[a] = n);
        }
      }
      t.Z = (0, l.EN)(o);
    },
    771950: function (e, t, a) {
      a.d(t, {
        L: function () {
          return s;
        },
      });
      var n = a(330711);
      let s = (e) => {
        let t = n.Z.getLocale().toLowerCase();
        return t in e ? e[t] : e.default;
      };
    },
    948789: function (e, t, a) {
      let n;
      a.d(t, {
        fQ: function () {
          return l;
        },
      }),
        a(653041),
        a(757143);
      var s = a(539528),
        i = a(33382),
        r = a.n(i);
      function l(e) {
        return (t) => {
          if (null != e)
            return (
              null != r()(t, { end: !1 }).exec(e.history.location.pathname)
            );
        };
      }
      (0, s.lX)();
    },
    982905: function (e, t, a) {
      a.d(t, {
        l: function () {
          return s;
        },
      }),
        a(724458);
      var n = a(468194);
      function s(e, t) {
        for (
          var a = arguments.length, s = Array(a > 2 ? a - 2 : 0), i = 2;
          i < a;
          i++
        )
          s[i - 2] = arguments[i];
        let r = s.reduce((e, t) => e + (0, n.De)(t), ""),
          l = e["".concat(t).concat(r)];
        return null == l ? "" : l;
      }
    },
    110867: function (e, t, a) {
      a.r(
        (e.exports = {
          footer: "footer_ad7a9f",
          footerPrimary: "footerPrimary_ad7a9f footer_ad7a9f",
          footerBackgroundPrimary: "footerBackgroundPrimary_ad7a9f",
          footerBackgroundAnimate: "footerBackgroundAnimate_ad7a9f",
          "footer-blob-animation": "footer-blob-animation_ad7a9f",
          footerBackgroundPaused:
            "footerBackgroundPaused_ad7a9f footerBackgroundAnimate_ad7a9f",
          footerBackgroundPlay:
            "footerBackgroundPlay_ad7a9f footerBackgroundAnimate_ad7a9f",
          footerContent: "footerContent_ad7a9f",
          navigation: "navigation_ad7a9f",
          navigationHeader: "navigationHeader_ad7a9f",
          route: "route_ad7a9f",
          navigationSection: "navigationSection_ad7a9f",
          logoWrap: "logoWrap_ad7a9f",
          logo: "logo_ad7a9f",
          separator: "separator_ad7a9f",
          joinDiscord: "joinDiscord_ad7a9f",
          stats: "stats_ad7a9f",
          readyToJoin: "readyToJoin_ad7a9f",
          joinOtherPlayers: "joinOtherPlayers_ad7a9f",
          button: "button_ad7a9f",
          buttonPrimary: "buttonPrimary_ad7a9f button_ad7a9f",
          buttonBlurple: "buttonBlurple_ad7a9f button_ad7a9f",
          footerBackgroundBlurple:
            "footerBackgroundBlurple_ad7a9f footerBackgroundPrimary_ad7a9f",
          footerBlurple: "footerBlurple_ad7a9f footer_ad7a9f",
        }),
      );
    },
    546875: function (e, t, a) {
      a.r(
        (e.exports = {
          header: "header_e79ad1",
          headerInner: "headerInner_e79ad1",
          headerLogo: "headerLogo_e79ad1",
          skipToContent: "skipToContent_e79ad1",
          logo: "logo_e79ad1",
          headerNav: "headerNav_e79ad1",
          headerNavRight: "headerNavRight_e79ad1",
          listItem: "listItem_e79ad1",
          listItemInactive: "listItemInactive_e79ad1 listItem_e79ad1",
          listItemActive: "listItemActive_e79ad1 listItem_e79ad1",
          navLink: "navLink_e79ad1",
          mainNavLink: "mainNavLink_e79ad1 navLink_e79ad1",
          rightNavLink: "rightNavLink_e79ad1 navLink_e79ad1",
          appButton: "appButton_e79ad1",
          desktopSubMenuItem: "desktopSubMenuItem_e79ad1",
          desktopMenuMore: "desktopMenuMore_e79ad1",
          iconArrow: "iconArrow_e79ad1",
          listItemSocialMedia: "listItemSocialMedia_e79ad1",
        }),
      );
    },
    364158: function (e, t, a) {
      e.exports = {
        clyde: "clyde_ca7c46 logo_ca7c46",
        type: "type_ca7c46 logo_ca7c46",
      };
    },
    48798: function (e, t, a) {
      a.r(
        (e.exports = {
          divider: "divider_b1698d",
          moreList: "moreList_b1698d",
          moreListOpen: "moreListOpen_b1698d moreList_b1698d",
          moreListClosed: "moreListClosed_b1698d moreList_b1698d",
          moreListItem: "moreListItem_b1698d",
          moreListItemInactive:
            "moreListItemInactive_b1698d moreListItem_b1698d",
          moreListLink: "moreListLink_b1698d",
          moreListItemActive: "moreListItemActive_b1698d moreListItem_b1698d",
          moreListLinkCopy: "moreListLinkCopy_b1698d",
        }),
      );
    },
    957539: function (e, t, a) {
      e.exports = {
        mobileHeader: "mobileHeader_c8bb0d",
        desktopHeader: "desktopHeader_c8bb0d",
      };
    },
    209472: function (e, t, a) {
      a.r(
        (e.exports = {
          localePicker: "localePicker_a1e848",
          opener: "opener_a1e848",
          openerOpen: "openerOpen_a1e848",
          line: "line_a1e848",
          icon: "icon_a1e848",
          localeIcon: "localeIcon_a1e848 icon_a1e848",
          arrowIcon: "arrowIcon_a1e848 icon_a1e848",
          hr: "hr_a1e848",
          localeList: "localeList_a1e848",
          localeListClosed: "localeListClosed_a1e848 localeList_a1e848",
          localeListOpen: "localeListOpen_a1e848 localeList_a1e848",
          localeBase: "localeBase_a1e848",
          locale: "locale_a1e848 localeBase_a1e848",
          localeCurrent: "localeCurrent_a1e848 localeBase_a1e848",
          localeImage: "localeImage_a1e848",
          select: "select_a1e848",
        }),
      );
    },
    583715: function (e, t, a) {
      a.r(
        (e.exports = {
          header: "header_e3be5b",
          headerInner: "headerInner_e3be5b",
          hamburgerButton: "hamburgerButton_e3be5b",
          headerLogo: "headerLogo_e3be5b",
          logoWrapper: "logoWrapper_e3be5b",
          logo: "logo_e3be5b",
          headerNav: "headerNav_e3be5b",
          headerNavOpen: "headerNavOpen_e3be5b headerNav_e3be5b",
          headerSubNavOpen: "headerSubNavOpen_e3be5b",
          mainNavLink: "mainNavLink_e3be5b",
          localePicker: "localePicker_e3be5b",
        }),
      );
    },
    155348: function (e, t, a) {
      e.exports = {
        mobileMenuItem: "mobileMenuItem_fba5f6",
        mobileSubMenuOpen:
          "mobileSubMenuOpen_fba5f6 mobileHeaderSubMenu_fba5f6",
        subListItemLink: "subListItemLink_fba5f6",
        subListItemActive: "subListItemActive_fba5f6 subListItem_fba5f6",
        subListItemInactive: "subListItemInactive_fba5f6 subListItem_fba5f6",
        desktopSubMenuItem: "desktopSubMenuItem_fba5f6",
        desktopMenuMore: "desktopMenuMore_fba5f6",
        iconArrow: "iconArrow_fba5f6",
      };
    },
  },
]);
//# sourceMappingURL=1b4a7977ebf33aba7620.js.map
