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
      var n = a(735250),
        i = a(470079),
        r = a(548668),
        l = a(231262),
        o = a(501522),
        s = a(442837),
        c = a(153867),
        d = a(706454),
        u = a(626135),
        h = a(981631),
        m = a(689938),
        p = a(256109);
      class N extends i.Component {
        shouldScrollToTop(e) {
          let { location: t } = e;
          return (
            t.pathname.startsWith(h.Z5c.APPLICATION_STORE_LISTING_SKU("")) ||
            t.pathname.startsWith(
              h.Z5c.APPLICATION_STORE_LISTING_APPLICATION(""),
            )
          );
        }
        render() {
          let { location: e, className: t, render: a, locale: s } = this.props;
          return (0, n.jsx)(o.Z, {
            className: t,
            shouldScrollToTop: this.shouldScrollToTop,
            render: (t, o) =>
              (0, n.jsxs)(i.Fragment, {
                children: [
                  (0, n.jsx)(l.h, {
                    avoidRouter: !0,
                    locale: s,
                    authRedirectTo: e.pathname,
                    track: u.default.track,
                    className: p.marketingHeader,
                    onChangeLocale: this.handleHeaderLocaleChange,
                    mobileClassName: p.marketingHeader,
                    openNavAriaLabel: m.Z.Messages.OPEN_NAVIGATION,
                    hideNavAriaLabel: m.Z.Messages.HIDE_NAVIGATION,
                    skipToContentLabel: m.Z.Messages.SKIP_TO_CONTENT,
                  }),
                  a(t, o),
                  (0, n.jsx)(r.$, {
                    locale: s,
                    authRedirectTo: e.pathname,
                    avoidRouter: !0,
                    track: u.default.track,
                    className: p.marketingFooter,
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
      t.default = s.ZP.connectStores([d.default], () => ({
        locale: d.default.locale,
      }))(N);
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
          return C;
        },
      });
      var i,
        r = a(735250),
        l = a(470079),
        o = a(557533),
        s = a.n(o),
        c = a(622535),
        d = a(213919),
        u = a(982905),
        h = a(794010),
        m = a(66037),
        p = a(231338),
        N = a(436620),
        k = a(330711),
        f = a(126839);
      function _(e, t, a) {
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
      let g = "Footer Navigation",
        I = { BLURPLE: "Blurple", PRIMARY: "Primary" },
        b = (e) => [
          {
            title: e.PRODUCT,
            routes: [
              { link: p.am.DOWNLOAD, title: e.DOWNLOAD, tracking: "download" },
              { link: p.am.BRANDING, title: e.BRANDING, tracking: "branding" },
              {
                link: p.am.NITRO,
                title: e.NITRO,
                tracking: "nitro",
                external: !0,
              },
            ],
          },
          {
            title: e.DEVELOPERS,
            routes: [
              {
                link: p.am.RICH_PRESENCE,
                title: e.RICH_PRESENCE,
                tracking: "rich_presence",
              },
              {
                link: p.am.VERIFICATION,
                title: e.VERIFICATION,
                tracking: "verification",
                external: !0,
              },
              {
                link: p.yX.DEV_PORTAL_APPLICATIONS,
                title: e.APPLICATIONS,
                tracking: "developers",
                external: !0,
              },
              {
                link: p.yX.DEV_PORTAL_DOCUMENTATION,
                title: e.DOCUMENTATION,
                tracking: "documentation",
                external: !0,
              },
            ],
          },
          {
            title: e.RESOURCES,
            routes: [
              {
                link: p.yX.HELP_AND_SUPPORT,
                title: e.HELP_AND_SUPPORT,
                tracking: "helpandsupport",
                external: !0,
              },
              {
                link: p.am.GUIDELINES,
                title: e.GUIDELINES,
                tracking: "guidelines",
                external: !0,
              },
              {
                link: p.yX.FEEDBACK,
                title: e.FEEDBACK,
                tracking: "feedback",
                external: !0,
              },
              {
                link: p.am.TERMS,
                title: e.TERMS,
                tracking: "terms",
                external: !0,
              },
              {
                link: p.am.PRIVACY,
                title: e.PRIVACY,
                tracking: "privacy",
                external: !0,
              },
              { link: p.am.SECURITY, title: e.SECURITY, tracking: "security" },
              {
                link: p.yX.STATUS,
                title: e.STATUS,
                tracking: "status",
                external: !0,
              },
              {
                link: p.am.SAFETY_LANDING,
                title: e.SAFETY_CENTER,
                tracking: "safetycenter",
                external: !0,
              },
            ],
          },
          {
            title: e.COMPANY,
            routes: [
              { link: p.am.COMPANY, title: e.ABOUT, tracking: "about" },
              {
                link: p.am.BLOG,
                title: e.BLOG,
                tracking: "blog",
                external: !0,
              },
              {
                link: p.am.JOBS,
                title: e.JOBS,
                tracking: "join",
                external: !0,
              },
            ],
          },
          {
            title: e.MORE,
            routes: [
              {
                link: p.am.PARTNERS,
                title: e.PARTNERS,
                tracking: "partners",
                external: !0,
              },
              {
                link: p.am.HYPESQUAD,
                title: e.HYPESQUAD,
                tracking: "hypesquad",
                external: !0,
              },
              {
                link: p.yX.PRESS_INQUIRIES,
                title: e.PRESS_INQUIRIES,
                tracking: "pressinquiries",
                external: !0,
              },
              {
                link: p.am.OPEN_SOURCE,
                title: e.OPEN_SOURCE,
                tracking: "open_source",
              },
            ],
          },
        ],
        v = (e) => {
          let { colorVariant: t, animate: a } = e;
          return (0, r.jsx)("svg", {
            className: (0, u.l)(f, "footerBackground", t),
            preserveAspectRatio: "none",
            width: "1920",
            height: "100%",
            viewBox: "0 0 1920 330",
            version: "1.1",
            children: (0, r.jsx)("path", {
              className: (0, u.l)(f, "footerBackground", a ? "Play" : "Paused"),
              fill: "#1a1c1e",
              fillOpacity: "0.3",
              d: "M140.881198,194.260295 C257.600568,129.32862 342.939626,119.84993 418.009939,203.154617 C493.080251,286.459305 545.728689,70.9046172 636.439626,63.9593047 C727.150564,57.0139922 768.99822,139.670242 858.802907,119.431961 C948.607595,99.1936797 1071.91228,-32.9977266 1243.91228,7.75227342 C1415.91228,48.5022734 1404.10369,208.584305 1508.27166,178.709305 C1612.43963,148.834305 1633.73291,79.913472 1711.63588,98.8569055 C1776.28676,114.577866 1819.96778,221.391836 1889.37253,185.808108 C2017.32661,120.206212 2004.01952,336.769569 2004.01952,336.769569 L271.635881,337 L-149.063338,337 C-149.063338,337 -245.850307,175.637635 -58.0633382,228.867188 C33.8652851,254.92501 64.1722713,236.933925 140.881198,194.260295 Z",
            }),
          });
        };
      class C extends (i = l.PureComponent) {
        componentDidMount() {
          this.setState({ token: (0, d.getToken)(), isAppCompatible: N.KO });
        }
        renderAppButton(e) {
          if ("STATIC_RENDERER" === this.props.platform) return null;
          let {
              downloadLink: t,
              isMobile: a,
              mobileDownloadText: i,
              platform: l,
              variant: o,
              authRedirectTo: s,
            } = this.props,
            { isAppCompatible: c } = this.state;
          if (a)
            return (0, r.jsx)(n, {
              eventName: "Download App",
              data: {
                Platform: l,
                PTB: !1,
                Released: !0,
                "Referring Location": "Footer",
              },
              alt: "Download Discord",
              target: "_blank",
              className: (0, u.l)(f, "button", o),
              href: t,
              children: i,
            });
          if (!c)
            return (0, r.jsx)(n, {
              eventName: "Download App",
              data: {
                Platform: l,
                PTB: !1,
                Released: !0,
                "Referring Location": "Footer",
              },
              alt: "Download Discord",
              className: (0, u.l)(f, "button", o),
              href: p.am.DOWNLOAD,
              children: k.Z.Messages.Navigation.DOWNLOAD,
            });
          let d = null != s ? p.$w.REGISTER_WITH_REDIRECT(s) : p.$w.REGISTER,
            h = k.Z.Messages.Common.SIGN_UP_NOW;
          return (
            e && ((d = p.$w.ME), (h = k.Z.Messages.Common.OPEN_DISCORD)),
            (0, r.jsx)(n, {
              eventName: g,
              className: (0, u.l)(f, "button", this.props.variant),
              data: { linkClicked: e ? "open" : "login", googleAnalytics: !0 },
              href: d,
              children: h,
            })
          );
        }
        render() {
          let {
              variant: e,
              style: t,
              className: i,
              avoidRouter: l,
              showWave: o,
            } = this.props,
            { animateBackground: d, token: h } = this.state,
            N = b(k.Z.Messages.Navigation).map((e) => {
              let t = e.routes.map((e, t) =>
                e.external
                  ? (0, r.jsx)(
                      n,
                      {
                        className: f.route,
                        eventName: g,
                        data: { linkClicked: e.tracking },
                        href: e.link,
                        children: e.title,
                      },
                      e.link || t,
                    )
                  : (0, r.jsx)(
                      m.Z,
                      {
                        avoidRouter: l,
                        to: e.link,
                        from: "footer_navigation",
                        className: f.route,
                        children: (0, r.jsx)(n, {
                          tag: "span",
                          eventName: g,
                          data: { linkClicked: e.tracking },
                          children: e.title,
                        }),
                      },
                      e.link,
                    ),
              );
              return (0, r.jsxs)(
                "div",
                {
                  className: f.navigationSection,
                  children: [
                    (0, r.jsx)("h3", {
                      className: f.navigationHeader,
                      children: e.title,
                    }),
                    t,
                  ],
                },
                e.title,
              );
            });
          return (0, r.jsx)(c.$, {
            onChange: this.handleVisibility,
            children: (0, r.jsxs)("footer", {
              className: s()((0, u.l)(f, "footer", e), i),
              style: t,
              children: [
                o ? (0, r.jsx)(v, { colorVariant: e, animate: d }) : null,
                (0, r.jsxs)("div", {
                  className: f.footerContent,
                  children: [
                    (0, r.jsxs)("div", {
                      className: f.navigation,
                      children: [
                        (0, r.jsx)("div", {
                          className: f.logoWrap,
                          children: (0, r.jsx)(n, {
                            className: f.logo,
                            href: p.am.INDEX,
                            eventName: g,
                            data: { linkClicked: "logo" },
                            children: (0, r.jsx)("img", {
                              alt: k.Z.Messages.Navigation.HOME,
                              src: a(131529),
                            }),
                          }),
                        }),
                        N,
                      ],
                    }),
                    (0, r.jsx)("div", { className: f.separator }),
                    (0, r.jsxs)("div", {
                      className: f.joinDiscord,
                      children: [
                        (0, r.jsxs)("div", {
                          className: f.stats,
                          children: [
                            (0, r.jsx)("h2", {
                              className: f.readyToJoin,
                              children:
                                k.Z.Messages.Footer.READY_TO_TRY_DISCORD,
                            }),
                            (0, r.jsx)("h3", {
                              className: f.joinOtherPlayers,
                              children:
                                k.Z.Messages.Footer.JOIN_OVER_PLAYERS_TODAY.format(
                                  { num: p.vS },
                                ),
                            }),
                          ],
                        }),
                        this.renderAppButton(h),
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
            _(this, "state", {
              animateBackground: !1,
              isMobile: null,
              token: null,
              isAppCompatible: !0,
            }),
            _(this, "handleVisibility", (e) => {
              this.setState({ animateBackground: e });
            }),
            null != e.locale && k.Z.setLocale(e.locale),
            (n = (t) =>
              (0, r.jsx)(h.Z, {
                track: e.track,
                trackOutboundLink: e.trackOutboundLink,
                ...t,
              }));
        }
      }
      _(C, "Variants", I),
        _(C, "defaultProps", { variant: I.PRIMARY, showWave: !0 });
    },
    653371: function (e, t, a) {
      a.d(t, {
        a: function () {
          return I;
        },
      }),
        a(47120),
        a(653041);
      var n = a(735250),
        i = a(470079),
        r = a(557533),
        l = a.n(r),
        o = a(771950),
        s = a(860911),
        c = a(66037),
        d = a(787907),
        u = a(643103),
        h = a(34211),
        m = a(231338),
        p = a(436620),
        N = a(431138),
        k = a(625797);
      function f(e, t, a) {
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
      let _ = m.j_.MAIN_NAVIGATION_MENU,
        g = () => [
          {
            route: (0, o.L)(m.RK.TWITTER),
            linkClicked: "twitter",
            alt: "Discord's Twitter",
            img: N.r.ASSET_SOCIAL_TWITTER,
          },
          {
            route: m.fK.FACEBOOK_URL,
            linkClicked: "facebook",
            alt: "Discord's Facebook",
            img: N.r.ASSET_SOCIAL_FACEBOOK,
          },
          {
            route: m.fK.INSTAGRAM_URL,
            linkClicked: "instagram",
            alt: "Discord's Instagram",
            img: N.r.ASSET_SOCIAL_INSTAGRAM,
          },
        ];
      class I extends i.PureComponent {
        componentDidMount() {
          this.setState({ isAppCompatible: p.KO });
        }
        render() {
          let {
            className: e,
            mainContentId: t,
            skipToContentLabel: a,
            NavigationMessages: i,
            onChangeLocale: r,
            TrackClick: o,
            avoidRouter: s,
          } = this.props;
          return (0, n.jsxs)("header", {
            className: l()(k.header, e),
            children: [
              (0, n.jsxs)("nav", {
                className: k.headerInner,
                children: [
                  (0, n.jsxs)("div", {
                    className: k.headerLogo,
                    children: [
                      (0, n.jsx)(o, {
                        tag: "div",
                        eventName: _,
                        data: { linkClicked: "logo" },
                        children: (0, n.jsx)(c.Z, {
                          avoidRouter: s,
                          to: m.am.INDEX,
                          from: m.j_.MAIN_NAVIGATION_MENU,
                          children: (0, n.jsx)(d.O, {}),
                        }),
                      }),
                      null != t
                        ? (0, n.jsx)("a", {
                            className: k.skipToContent,
                            href: "#".concat(t),
                            children: a,
                          })
                        : null,
                    ],
                  }),
                  (0, n.jsx)("ul", {
                    className: k.headerNav,
                    children: (0, n.jsx)(h.o, {
                      avoidRouter: s,
                      TrackClick: o,
                      styles: k,
                      NavigationMessages: i,
                    }),
                  }),
                  (0, n.jsxs)("ul", {
                    className: k.headerNavRight,
                    children: [
                      this.renderSocialMediaNav(),
                      (0, n.jsx)(u.p, { onChange: r }),
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
            f(this, "state", { isAppCompatible: !0 }),
            f(this, "getAppButton", () => {
              let {
                  token: e,
                  NavigationMessages: t,
                  TrackClick: a,
                  authRedirectTo: i,
                } = this.props,
                { isAppCompatible: r } = this.state,
                l = (0, s.Ui)(i),
                o = t.LOGIN;
              return (
                null != e && ((l = m.$w.ME), (o = t.OPEN)),
                r
                  ? (0, n.jsx)(
                      "li",
                      {
                        className: k.listItemInactive,
                        children: (0, n.jsx)(a, {
                          eventName: _,
                          className: k.appButton,
                          data: {
                            linkClicked: e ? "open" : "login",
                            googleAnalytics: !0,
                          },
                          href: l,
                          children: o,
                        }),
                      },
                      "app-button",
                    )
                  : null
              );
            }),
            f(this, "renderSocialMediaNav", () => {
              let { TrackClick: e } = this.props,
                t = g().map((t) =>
                  (0, n.jsx)(
                    "li",
                    {
                      className: l()(k.listItemInactive, k.listItemSocialMedia),
                      children: (0, n.jsx)(e, {
                        eventName: _,
                        className: k.rightNavLink,
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
          return o;
        },
      });
      var n = a(735250),
        i = a(470079),
        r = a(435935),
        l = a(440562);
      class o extends i.PureComponent {
        render() {
          return (0, n.jsxs)(r.k, {
            wrap: r.k.Wrap.NO_WRAP,
            children: [
              (0, n.jsx)(r.k.Child, {
                grow: 0,
                shrink: 0,
                children: (0, n.jsxs)("svg", {
                  className: l.clyde,
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
              (0, n.jsx)(r.k.Child, {
                grow: 0,
                shrink: 0,
                children: (0, n.jsx)("svg", {
                  className: l.type,
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
          return f;
        },
      });
      var n,
        i,
        r,
        l,
        o = a(735250),
        s = a(470079),
        c = a(476400),
        d = a.n(c),
        u = a(948789),
        h = a(982905),
        m = a(66037),
        p = a(231338),
        N = a(913835);
      let k = p.j_.MAIN_NAVIGATION_MENU;
      class f extends (l = s.PureComponent) {
        render() {
          let e = (0, u.fQ)(this.context.router),
            {
              isOpen: t,
              dropdownLinks: a,
              TrackClick: n,
              avoidRouter: i,
              id: r,
              "aria-label": l,
            } = this.props,
            s = a.map((t, a) =>
              t.divider
                ? (0, o.jsx)(
                    "hr",
                    { className: N.divider },
                    "divider-".concat(a),
                  )
                : t.external
                  ? (0, o.jsx)(
                      "li",
                      {
                        className: N.moreListItemInactive,
                        children: (0, o.jsx)(n, {
                          className: N.moreListLink,
                          eventName: k,
                          data: { linkClicked: t.linkClicked },
                          href: t.route,
                          rel: "me",
                          children: (0, o.jsx)("span", {
                            className: N.moreListLinkCopy,
                            children: t.title,
                          }),
                        }),
                      },
                      t.route,
                    )
                  : (0, o.jsx)(
                      "li",
                      {
                        className: (0, h.l)(
                          N,
                          "moreListItem",
                          e(t.route) ? "Active" : "Inactive",
                        ),
                        children: (0, o.jsx)(m.Z, {
                          avoidRouter: i,
                          className: N.moreListLink,
                          to: t.route,
                          from: p.j_.MAIN_NAVIGATION_MENU,
                          role: "menuitem",
                          children: (0, o.jsx)(n, {
                            tag: "span",
                            className: N.moreListLinkCopy,
                            eventName: k,
                            data: { linkClicked: t.linkClicked },
                            children: t.title,
                          }),
                        }),
                      },
                      t.route,
                    ),
            );
          return (0, o.jsx)("ul", {
            id: r,
            className: (0, h.l)(N, "moreList", t ? "Open" : "Closed"),
            "aria-label": l,
            children: s,
          });
        }
      }
      (n = f),
        (i = "contextTypes"),
        (r = { router: d().object.isRequired }),
        i in n
          ? Object.defineProperty(n, i, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (n[i] = r);
    },
    643103: function (e, t, a) {
      a.d(t, {
        p: function () {
          return m;
        },
      }),
        a(47120);
      var n = a(735250),
        i = a(470079),
        r = a(557533),
        l = a.n(r),
        o = a(435935),
        s = a(982905),
        c = a(431138),
        d = a(330711),
        u = a(629739);
      function h(e, t, a) {
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
      class m extends i.PureComponent {
        componentDidMount() {
          this.callChangeLocale(d.Z.getLocale());
        }
        render() {
          let { isOpen: e, languages: t, current: i } = this.state,
            { className: r } = this.props,
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
                          className: (0, s.l)(
                            u,
                            "locale",
                            null != i && e.code === i.code ? "Current" : null,
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
              className: l()(u.localePicker, r),
              onMouseEnter: this.open,
              onMouseLeave: this.close,
              onClick: this.toggle,
              children: [
                (0, n.jsxs)(o.k, {
                  align: o.k.Align.CENTER,
                  className: (0, s.l)(u, "opener", e ? "Open" : null),
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
                  className: (0, s.l)(u, "localeList", e ? "Open" : "Closed"),
                  children: d,
                }),
              ],
            })
          );
        }
        constructor(...e) {
          super(...e),
            h(this, "state", {
              languages: d.Z.getLanguages().filter((e) => e.enabled),
              current: d.Z.getLocaleInfo(),
              isOpen: !1,
            }),
            h(this, "setLocale", (e) => {
              null != d.Z && (d.Z.setLocale(e), this.callChangeLocale(e));
            }),
            h(this, "callChangeLocale", (e) => {
              let { onChange: t } = this.props;
              null != t && t(e);
            }),
            h(this, "open", () => {
              this.setState({ isOpen: !0 });
            }),
            h(this, "close", () => {
              this.setState({ isOpen: !1 });
            }),
            h(this, "toggle", () => {
              let { isOpen: e } = this.state;
              this.setState({ isOpen: !e });
            });
        }
      }
    },
    34211: function (e, t, a) {
      a.d(t, {
        o: function () {
          return p;
        },
      }),
        a(47120);
      var n,
        i = a(735250),
        r = a(470079),
        l = a(948789),
        o = a(66037),
        s = a(248108),
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
      let h = c.j_.MAIN_NAVIGATION_MENU,
        m = (e, t) => [
          { route: c.am.DOWNLOAD, linkClicked: "download", title: t.DOWNLOAD },
          {
            route: c.am.NITRO,
            linkClicked: "nitro",
            title: t.NITRO,
            external: !0,
          },
          {
            route: c.am.JOBS,
            linkClicked: "jobs",
            title: t.JOBS,
            external: !0,
          },
          {
            title: t.DEVELOPERS,
            links: [
              {
                route: c.am.RICH_PRESENCE,
                linkClicked: "rich_presence",
                title: t.RICH_PRESENCE,
              },
              {
                route: c.am.VERIFICATION,
                linkClicked: "verification",
                title: t.VERIFICATION,
                external: !0,
              },
              {
                route: c.yX.DEV_PORTAL,
                linkClicked: "developers",
                title: t.DEVELOPER_PORTAL,
                external: !0,
              },
              {
                route: c.yX.DEV_PORTAL_DOCUMENTATION,
                linkClicked: "documentation",
                title: t.DOCUMENTATION,
                external: !0,
              },
            ],
          },
          {
            title: t.COMMUNITY,
            links: [
              {
                route: c.am.OPEN_SOURCE,
                linkClicked: "open_source",
                title: t.OPEN_SOURCE,
              },
              {
                route: c.am.PARTNERS,
                linkClicked: "partners",
                title: t.PARTNERS,
                external: !0,
              },
              {
                route: c.am.HYPESQUAD,
                linkClicked: "hypesquad",
                title: t.HYPESQUAD,
                external: !0,
              },
              {
                route: c.am.GUIDELINES,
                linkClicked: "guidelines",
                title: t.GUIDELINES,
                external: !0,
              },
            ],
          },
          {
            title: t.SUPPORT,
            links: [
              {
                route: "//support.discord.com/hc/".concat(e),
                linkClicked: "helpandsupport",
                title: t.HELP_AND_SUPPORT,
                external: !0,
              },
              {
                route: c.yX.STATUS,
                linkClicked: "status",
                title: t.STATUS,
                external: !0,
              },
              {
                route: c.am.SAFETY_LANDING,
                linkClicked: "safetycenter",
                title: t.SAFETY_CENTER,
                external: !0,
              },
            ],
          },
        ];
      class p extends (n = r.PureComponent) {
        render() {
          let e = (0, l.fQ)(this.context.router),
            {
              isMobile: t,
              isVisible: a,
              styles: n,
              NavigationMessages: r,
              TrackClick: u,
              avoidRouter: p,
            } = this.props,
            { sectionShown: N } = this.state;
          return m(null != d.Z ? d.Z.getLocale().toLowerCase() : "", r).map(
            (r) => {
              if (null != r.links)
                return (0, i.jsx)(
                  s.Z,
                  {
                    title: r.title,
                    links: r.links,
                    isOpen: N === r.title,
                    isMobile: t,
                    avoidRouter: p,
                    TrackClick: u,
                    onClose: this.closeSubNav,
                    onOpen: this.openSubNav,
                  },
                  r.title,
                );
              if (r.external && null != r.route)
                return (0, i.jsx)(
                  "li",
                  {
                    className: n.listItemInactive,
                    role: "none",
                    children: (0, i.jsx)(u, {
                      className: n.mainNavLink,
                      eventName: h,
                      data: r.linkClicked ? { linkClicked: r.linkClicked } : {},
                      href: r.route,
                      rel: "me",
                      children: r.title,
                    }),
                  },
                  "external_link_".concat(r.route),
                );
              if (null != r.route)
                return (0, i.jsx)(
                  "li",
                  {
                    className: e(r.route)
                      ? n.listItemActive
                      : n.listItemInactive,
                    role: "none",
                    children: (0, i.jsx)(o.Z, {
                      avoidRouter: p,
                      to: r.route,
                      from: c.j_.MAIN_NAVIGATION_MENU,
                      tabIndex: a ? 0 : -1,
                      role: "menuitem",
                      children: (0, i.jsx)(u, {
                        tag: "span",
                        className: n.mainNavLink,
                        eventName: h,
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
      u(p, "defaultProps", { isMobile: !1, isVisible: !0 });
    },
    388755: function (e, t, a) {
      a.d(t, {
        D: function () {
          return _;
        },
      }),
        a(47120);
      var n = a(735250),
        i = a(470079),
        r = a(557533),
        l = a.n(r),
        o = a(39383),
        s = a.n(o),
        c = a(608863),
        d = a(66037),
        u = a(643103),
        h = a(34211),
        m = a(231338),
        p = a(431138),
        N = a(297785);
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
      let f = m.j_.MAIN_NAVIGATION_MENU;
      class _ extends i.PureComponent {
        componentDidMount() {
          window.addEventListener("keydown", this.handleKeyDown);
        }
        componentWillUnmount() {
          window.removeEventListener("keydown", this.handleKeyDown);
        }
        render() {
          let {
              className: e,
              NavigationMessages: t,
              TrackClick: a,
              onChangeLocale: i,
              avoidRouter: r,
              openNavAriaLabel: o,
              hideNavAriaLabel: s,
            } = this.props,
            { menuOpen: k } = this.state;
          return (0, n.jsx)("header", {
            className: l()(N.header, e),
            children: (0, n.jsxs)("nav", {
              className: N.headerInner,
              children: [
                (0, n.jsx)(a, {
                  tag: "div",
                  eventName: f,
                  className: N.headerLogo,
                  data: { linkClicked: "logo" },
                  children: (0, n.jsx)(d.Z, {
                    avoidRouter: r,
                    className: N.logoWrapper,
                    to: m.am.INDEX,
                    from: m.j_.MAIN_NAVIGATION_MENU,
                    children: (0, n.jsx)("img", {
                      className: N.logo,
                      src: p.r.ASSET_LOGO_DISCORD_SVG,
                      alt: "Discord",
                      itemProp: "logo",
                    }),
                  }),
                }),
                (0, n.jsx)(a, {
                  tag: "div",
                  className: N.hamburgerButton,
                  eventName: f,
                  data: { linkClicked: "mobile-menu" },
                  children: (0, n.jsx)(c.r, {
                    open: k,
                    "aria-haspopup": "true",
                    "aria-label": k ? s : o,
                    "aria-expanded": k,
                    "aria-controls": this._mainNavId,
                    onClick: this.toggleMenu,
                  }),
                }),
                (0, n.jsxs)("ul", {
                  className: k ? N.headerNavOpen : N.headerNav,
                  children: [
                    (0, n.jsx)(h.o, {
                      avoidRouter: r,
                      TrackClick: a,
                      styles: N,
                      isMobile: !0,
                      isVisible: k,
                      NavigationMessages: t,
                    }),
                    (0, n.jsx)(u.p, { onChange: i }),
                  ],
                }),
              ],
            }),
          });
        }
        constructor(...e) {
          super(...e),
            k(this, "_mainNavId", s()("mainNav")),
            k(this, "state", { menuOpen: !1 }),
            k(this, "toggleMenu", () => {
              this.setState({ menuOpen: !this.state.menuOpen });
            }),
            k(this, "handleKeyDown", (e) => {
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
          return k;
        },
      }),
        a(47120);
      var n,
        i = a(735250),
        r = a(470079),
        l = a(39383),
        o = a.n(l),
        s = a(948789),
        c = a(66037),
        d = a(950132),
        u = a(231338),
        h = a(431138),
        m = a(805699);
      function p(e, t, a) {
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
      let N = u.j_.MAIN_NAVIGATION_MENU;
      class k extends (n = r.PureComponent) {
        render() {
          let {
              title: e,
              links: t,
              isOpen: a,
              isMobile: n,
              TrackClick: r,
              avoidRouter: l,
            } = this.props,
            o =
              n && a
                ? (0, i.jsx)("ul", {
                    className: m.mobileSubMenuOpen,
                    id: this._dropdownId,
                    children: this.renderMobileSubMenu(),
                  })
                : null;
          return n
            ? (0, i.jsxs)(
                "li",
                {
                  className: m.__invalid_subListHeading,
                  tabIndex: -1,
                  onClick: this.toggleMenu,
                  onKeyDown: this.handleKeyDown,
                  children: [
                    (0, i.jsxs)(
                      "span",
                      {
                        className: m.mobileMenuItem,
                        "aria-label": "Open ".concat(e, " Nav"),
                        "aria-expanded": a,
                        "aria-controls": this._dropdownId,
                        "aria-haspopup": "true",
                        role: "menuitem",
                        tabIndex: 0,
                        children: [
                          e,
                          (0, i.jsx)("img", {
                            src: h.r.ICON_ARROW_DOWN,
                            className: m.iconArrow,
                            alt: "Open Nav",
                          }),
                        ],
                      },
                      "more",
                    ),
                    o,
                  ],
                },
                "dropdown_".concat(e),
              )
            : (0, i.jsxs)(
                "li",
                {
                  role: "none",
                  tabIndex: -1,
                  onFocus: this.openMenu,
                  onBlur: this.closeMenu,
                  onMouseEnter: this.openMenu,
                  onMouseLeave: this.closeMenu,
                  className: m.desktopSubMenuItem,
                  children: [
                    (0, i.jsxs)(
                      "span",
                      {
                        className: m.desktopMenuMore,
                        role: "menuitem",
                        tabIndex: 0,
                        "aria-haspopup": "true",
                        "aria-expanded": a,
                        "aria-controls": this._dropdownId,
                        children: [
                          e,
                          (0, i.jsx)("img", {
                            src: h.r.ICON_ARROW_DOWN,
                            className: m.iconArrow,
                            alt: "Open Nav",
                          }),
                        ],
                      },
                      "more",
                    ),
                    (0, i.jsx)(d.h, {
                      id: this._dropdownId,
                      avoidRouter: l,
                      TrackClick: r,
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
            p(this, "_dropdownId", o()("subMenuDropdown")),
            p(this, "closeMenu", () => {
              this.props.onClose();
            }),
            p(this, "openMenu", () => {
              let { title: e, onOpen: t } = this.props;
              t(e);
            }),
            p(this, "toggleMenu", () => {
              let { isOpen: e, title: t, onOpen: a, onClose: n } = this.props;
              e ? n() : a(t);
            }),
            p(this, "handleKeyDown", (e) => {
              ("Enter" === e.key || " " === e.key) &&
                (e.preventDefault(), this.toggleMenu());
            }),
            p(this, "renderMobileSubMenu", () => {
              let { links: e, TrackClick: t, avoidRouter: a } = this.props,
                n = (0, s.fQ)(this.context.router);
              return e.map((e) =>
                e.external
                  ? (0, i.jsx)(
                      "li",
                      {
                        className: m.subListItemInactive,
                        children: (0, i.jsx)(t, {
                          eventName: N,
                          className: m.subListItemLink,
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
                  : (0, i.jsx)(
                      "li",
                      {
                        className: n(e.route)
                          ? m.subListItemActive
                          : m.subListItemInactive,
                        children: (0, i.jsx)(c.Z, {
                          avoidRouter: a,
                          to: e.route,
                          from: u.j_.MAIN_NAVIGATION_MENU,
                          children: (0, i.jsx)(t, {
                            className: m.subListItemLink,
                            tag: "span",
                            eventName: N,
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
      p(k, "defaultProps", { isOpen: !1, isMobileMenuOpen: !1 });
    },
    231262: function (e, t, a) {
      a.d(t, {
        h: function () {
          return m;
        },
      });
      var n = a(735250),
        i = a(470079),
        r = a(557533),
        l = a.n(r),
        o = a(794010),
        s = a(653371),
        c = a(388755),
        d = a(330711),
        u = a(577597);
      let h = null;
      class m extends i.PureComponent {
        render() {
          let {
            token: e,
            className: t,
            onChangeLocale: a,
            mainContentId: r,
            mobileClassName: o,
            avoidRouter: m,
            authRedirectTo: p,
            openNavAriaLabel: N,
            hideNavAriaLabel: k,
            skipToContentLabel: f,
          } = this.props;
          return null == h
            ? null
            : (0, n.jsxs)(i.Fragment, {
                children: [
                  (0, n.jsx)(s.a, {
                    className: l()(u.desktopHeader, t),
                    TrackClick: h,
                    token: e,
                    avoidRouter: m,
                    authRedirectTo: p,
                    NavigationMessages: d.Z.Messages.Navigation,
                    onChangeLocale: a,
                    mainContentId: r,
                    skipToContentLabel: f,
                  }),
                  (0, n.jsx)(c.D, {
                    className: l()(u.mobileHeader, o),
                    token: e,
                    avoidRouter: m,
                    TrackClick: h,
                    NavigationMessages: d.Z.Messages.Navigation,
                    onChangeLocale: a,
                    openNavAriaLabel: N,
                    hideNavAriaLabel: k,
                  }),
                ],
              });
        }
        constructor(e) {
          super(e),
            null != e.locale && d.Z.setLocale(e.locale),
            (h = (t) =>
              (0, n.jsx)(o.Z, {
                track: e.track,
                trackOutboundLink: e.trackOutboundLink,
                ...t,
              }));
        }
      }
    },
    501522: function (e, t, a) {
      a(47120);
      var n = a(735250),
        i = a(470079),
        r = a(333032);
      function l(e, t, a) {
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
      class o extends i.Component {
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
            l(this, "scrollRef", i.createRef()),
            l(this, "scrollTo", (e) => {
              null != this.scrollRef.current &&
                (this.scrollRef.current.scrollTop = e);
            }),
            l(this, "getScrollTop", () =>
              null == this.scrollRef.current
                ? 0
                : this.scrollRef.current.scrollTop,
            );
        }
      }
      t.Z = (0, r.EN)(o);
    },
    794010: function (e, t, a) {
      a.d(t, {
        Z: function () {
          return o;
        },
      }),
        a(47120);
      var n,
        i = a(735250),
        r = a(470079);
      function l(e, t, a) {
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
      class o extends (n = r.PureComponent) {
        render() {
          let {
            tag: e,
            children: t,
            eventName: a,
            data: n,
            track: r,
            trackOutboundLink: l,
            ...o
          } = this.props;
          return null == e
            ? null
            : (0, i.jsx)(e, { ...o, onClick: this.handleClick, children: t });
        }
        constructor(...e) {
          super(...e),
            l(this, "handleClick", (e) => {
              let {
                eventName: t,
                data: a,
                href: n,
                onClick: i,
                trackOutboundLink: r,
                track: l,
              } = this.props;
              if (
                (a.googleAnalytics &&
                  r &&
                  (null != n
                    ? r(n)
                    : console.warn(
                        "TrackClick.handleClick: No href provided when using data.googleAnalytics",
                      )),
                i && i(e),
                !t)
              )
                return !1;
              l(t, a);
            });
        }
      }
      l(o, "defaultProps", { tag: "a", data: {} });
    },
    66037: function (e, t, a) {
      a(411104), a(47120);
      var n = a(735250),
        i = a(470079),
        r = a(539528),
        l = a(786876),
        o = a(333032);
      class s extends i.Component {
        render() {
          let {
            to: e,
            from: t,
            isNavLink: a,
            children: i,
            tabIndex: r = 0,
            role: o,
            className: s,
          } = this.props;
          if (null == e)
            throw Error("Missing 'to' route prop in TrackLink component");
          let c = "string" == typeof e ? e : e.pathname,
            d = "string" == typeof e ? "" : e.hash,
            u = "string" == typeof e ? "" : e.search;
          return a
            ? (0, n.jsx)(l.OL, {
                className: s,
                tabIndex: r,
                onClick: this.handleOnClick,
                to: {
                  pathname: c,
                  hash: d,
                  search: u,
                  state: { previousLinkLocation: t },
                },
                role: o,
                children: i,
              })
            : (0, n.jsx)(l.rU, {
                className: s,
                tabIndex: r,
                onClick: this.handleOnClick,
                to: {
                  pathname: c,
                  hash: d,
                  search: u,
                  state: { previousLinkLocation: t },
                },
                role: o,
                children: i,
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
                      ? (0, r.ob)(e, null, void 0, n.location)
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
      t.Z = (0, o.EN)(s);
    },
    771950: function (e, t, a) {
      a.d(t, {
        L: function () {
          return i;
        },
      });
      var n = a(330711);
      let i = (e) => {
        let t = n.Z.getLocale().toLowerCase();
        return t in e ? e[t] : e.default;
      };
    },
    948789: function (e, t, a) {
      let n;
      a.d(t, {
        fQ: function () {
          return o;
        },
      }),
        a(653041),
        a(757143);
      var i = a(539528),
        r = a(33382),
        l = a.n(r);
      function o(e) {
        return (t) => {
          if (null != e)
            return (
              null != l()(t, { end: !1 }).exec(e.history.location.pathname)
            );
        };
      }
      (0, i.lX)();
    },
    982905: function (e, t, a) {
      a.d(t, {
        l: function () {
          return i;
        },
      }),
        a(724458);
      var n = a(468194);
      function i(e, t) {
        for (
          var a = arguments.length, i = Array(a > 2 ? a - 2 : 0), r = 2;
          r < a;
          r++
        )
          i[r - 2] = arguments[r];
        let l = i.reduce((e, t) => e + (0, n.De)(t), ""),
          o = e["".concat(t).concat(l)];
        return null == o ? "" : o;
      }
    },
    126839: function (e, t, a) {
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
    625797: function (e, t, a) {
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
    440562: function (e, t, a) {
      e.exports = {
        clyde: "clyde_ca7c46 logo_ca7c46",
        type: "type_ca7c46 logo_ca7c46",
      };
    },
    913835: function (e, t, a) {
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
    577597: function (e, t, a) {
      e.exports = {
        mobileHeader: "mobileHeader_c8bb0d",
        desktopHeader: "desktopHeader_c8bb0d",
      };
    },
    629739: function (e, t, a) {
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
    297785: function (e, t, a) {
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
    805699: function (e, t, a) {
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
//# sourceMappingURL=c7a321872641f45b10de.js.map
