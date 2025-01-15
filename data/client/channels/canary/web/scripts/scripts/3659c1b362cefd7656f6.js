"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["82935"],
  {
    769377: function (e) {
      e.exports = "/assets/1c6d93c002cd9eccafd8.svg";
    },
    132642: function (e) {
      e.exports = "/assets/8cb0243cca07ceea4c6f.svg";
    },
    340600: function (e) {
      e.exports = "/assets/8be08bf8c396b792c9c7.svg";
    },
    114693: function (e) {
      e.exports = "/assets/1bf35dbca4be747e6f1d.svg";
    },
    564120: function (e) {
      e.exports = "/assets/2d16589039d5ca8772da.svg";
    },
    57089: function (e) {
      e.exports = "/assets/cd9c4c5c8b0630e34c34.svg";
    },
    850852: function (e) {
      e.exports = "/assets/2727e3e57604c3ad9f28.svg";
    },
    231679: function (e) {
      e.exports = "/assets/543331b4d79877bce75c.svg";
    },
    9569: function (e) {
      e.exports = "/assets/37e23bfcc73c946c7742.svg";
    },
    473071: function (e) {
      e.exports = "/assets/062705a7ea7396ee6a07.svg";
    },
    431583: function (e, t, s) {
      s.r(t),
        s.d(t, {
          default: function () {
            return W;
          },
        }),
        s(47120);
      var n,
        a,
        r = s(200651),
        l = s(192379),
        i = s(120356),
        o = s.n(i),
        c = s(525654),
        d = s.n(c),
        f = s(873546),
        u = s(213919),
        p = s(442837),
        m = s(481060),
        x = s(391650),
        g = s(313201),
        h = s(314897),
        v = s(594174),
        N = s(626135),
        j = s(361207),
        _ = s(981631),
        w = s(388032),
        b = s(771451);
      ((a = n || (n = {}))[(a.OSX = 0)] = "OSX"),
        (a[(a.WINDOWS = 1)] = "WINDOWS"),
        (a[(a.LINUX = 2)] = "LINUX"),
        (a[(a.IOS = 3)] = "IOS"),
        (a[(a.ANDROID = 4)] = "ANDROID");
      let O = [
          {
            getOs: () => w.intl.string(w.t.NK5ySE),
            icon: b.apple,
            url: () => (0, j.w4)("osx", !1),
            platformKey: 0,
          },
          {
            getOs: () => w.intl.string(w.t.OvKGEx),
            icon: b.windows,
            url: () => (0, j.w4)("win", !1),
            platformKey: 1,
          },
          {
            getOs: () => w.intl.string(w.t.dJB4PD),
            icon: b.linux,
            url: [
              {
                url: () => (0, j.w4)("linux", !1, "deb"),
                getText: () => w.intl.string(w.t.Sodsur),
              },
              {
                url: () => (0, j.w4)("linux", !1, "tar.gz"),
                getText: () => w.intl.string(w.t.G3U6IS),
              },
            ],
            platformKey: 2,
          },
        ],
        y = [
          {
            getOs: () => w.intl.string(w.t.wCVyNT),
            icon: b.ios,
            url: () => _.fzT.IOS,
            platformKey: 3,
          },
          {
            getOs: () => w.intl.string(w.t.wuQpJC),
            icon: b.android,
            url: () => _.fzT.ANDROID,
            platformKey: 4,
          },
        ],
        S = (e) => {
          let { url: t, text: s, onClick: n } = e;
          return (0, r.jsx)(m.Anchor, {
            useDefaultUnderlineStyles: !1,
            href: t,
            className: b.downloadButton,
            onClick: n,
            children: s,
          });
        },
        A = (e) => {
          let t,
            {
              platform: s,
              onClick: n,
              onMouseEnter: a,
              isActive: l,
              claimed: i,
            } = e,
            { getOs: c, icon: d, url: f, platformKey: u } = s,
            p = c(),
            x = o()(b.icon, d);
          if (Array.isArray(f))
            t = f.map((e, t) => {
              let s = i ? e.url() : "";
              return (0, r.jsx)(
                S,
                { url: s, onClick: () => n(p), text: e.getText() },
                "".concat(s, "-").concat(t),
              );
            });
          else {
            let e = i ? f() : void 0;
            t = (0, r.jsx)(S, {
              url: e,
              onClick: () => n(p),
              text: w.intl.string(w.t["1WjMbG"]),
            });
          }
          return (0, r.jsx)("li", {
            className: o()(b.platform, { [b.active]: l }),
            onMouseEnter: () => a(u),
            children: (0, r.jsxs)("div", {
              className: b.contentWrapper,
              children: [
                (0, r.jsxs)("div", {
                  className: b.iconWrap,
                  children: [
                    (0, r.jsx)("div", { className: x }),
                    (0, r.jsx)("div", { className: o()(b.active, x) }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  children: [
                    (0, r.jsx)(m.Heading, {
                      className: b.platformName,
                      variant: "heading-lg/semibold",
                      children: p,
                    }),
                    (0, r.jsx)("div", {
                      className: o()(b.downloadButtons, {
                        [b.list]: Array.isArray(t),
                      }),
                      children: t,
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      function W(e) {
        let { source: t, onClose: s, transitionState: n } = e,
          a = (0, p.e7)([v.default], () => v.default.getCurrentUser()),
          i = (0, p.e7)([h.default], () => h.default.getFingerprint()),
          c = null == a || a.isClaimed(),
          [j, S] = l.useState(
            (function () {
              var e;
              switch (
                null === (e = d().os) || void 0 === e ? void 0 : e.family
              ) {
                case "OS X":
                  return 0;
                case "Windows":
                  return 1;
                case "Ubuntu":
                case "Debian":
                case "Fedora":
                case "Red Hat":
                case "SuSE":
                case "Linux":
                  return 2;
                case "iOS":
                  return 3;
                case "Android":
                  return 4;
                default:
                  return;
              }
            })(),
          );
        function W(e) {
          (null != u.getToken() || null != i) &&
            N.default.track(_.rMx.DOWNLOAD_APP, {
              platform: e,
              ptb: !1,
              released: !0,
              has_e_mail: c,
              referring_location: t,
              qr_code: !1,
            }),
            !c && (s(), x.j());
        }
        function C(e) {
          S(e);
        }
        l.useEffect(() => {
          N.default.track(_.rMx.OPEN_MODAL, {
            type: "Download App",
            source: { location: t },
          });
        }, [t]);
        let D = (0, g.Dt)();
        return (0, r.jsx)(m.ThemeProvider, {
          theme: _.BRd.LIGHT,
          children: (e) =>
            (0, r.jsxs)(m.ModalRoot, {
              className: o()(b.downloadApps, e),
              transitionState: n,
              "aria-labelledby": D,
              children: [
                (0, r.jsx)(m.ModalCloseButton, {
                  onClick: s,
                  className: b.modalCloseButton,
                }),
                (0, r.jsx)("div", {
                  className: b.inner,
                  children: (0, r.jsxs)(m.HeadingLevel, {
                    component: (0, r.jsx)(m.HiddenVisually, {
                      children: (0, r.jsx)(m.H, {
                        id: D,
                        children: w.intl.string(w.t.BK8LKy),
                      }),
                    }),
                    children: [
                      !f.tq &&
                        (0, r.jsx)("div", {
                          className: b.platformsWrap,
                          children: (0, r.jsx)(m.HeadingLevel, {
                            component: (0, r.jsx)(m.Heading, {
                              variant: "heading-lg/semibold",
                              className: b.header,
                              children: w.intl.string(w.t["0KK0bG"]),
                            }),
                            children: (0, r.jsx)("ul", {
                              className: b.platforms,
                              children: O.map((e) =>
                                (0, r.jsx)(
                                  A,
                                  {
                                    isActive: j === e.platformKey,
                                    platform: e,
                                    onClick: W,
                                    onMouseEnter: C,
                                    claimed: c,
                                  },
                                  e.platformKey,
                                ),
                              ),
                            }),
                          }),
                        }),
                      (0, r.jsx)("div", {
                        className: b.platformsWrap,
                        children: (0, r.jsxs)(m.HeadingLevel, {
                          component: (0, r.jsx)(r.Fragment, {
                            children:
                              !f.tq &&
                              (0, r.jsx)(m.Heading, {
                                variant: "heading-lg/semibold",
                                className: b.header,
                                children: w.intl.string(w.t.RdSNWV),
                              }),
                          }),
                          children: [
                            (0, r.jsx)("ul", {
                              className: b.platforms,
                              children: y.map((e) =>
                                (0, r.jsx)(
                                  A,
                                  {
                                    isActive: j === e.platformKey,
                                    platform: e,
                                    onClick: W,
                                    onMouseEnter: C,
                                    claimed: c,
                                  },
                                  e.platformKey,
                                ),
                              ),
                            }),
                            (0, r.jsx)(m.Text, {
                              className: b.footer,
                              variant: "text-sm/normal",
                              children: w.intl.format(w.t["RJS+1N"], {}),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            }),
        });
      }
    },
    771451: function (e, t, s) {
      e.exports = {
        downloadApps: "downloadApps_f82819",
        contentWrapper: "contentWrapper_f82819",
        inner: "inner_f82819",
        header: "header_f82819",
        footer: "footer_f82819",
        platformsWrap: "platformsWrap_f82819",
        platforms: "platforms_f82819",
        platform: "platform_f82819",
        active: "active_f82819",
        icon: "icon_f82819",
        downloadButton: "downloadButton_f82819",
        platformName: "platformName_f82819",
        iconWrap: "iconWrap_f82819",
        apple: "apple_f82819",
        android: "android_f82819",
        windows: "windows_f82819",
        linux: "linux_f82819",
        ios: "ios_f82819",
        downloadButtons: "downloadButtons_f82819",
        list: "list_f82819",
        modalCloseButton: "modalCloseButton_f82819",
      };
    },
  },
]);
//# sourceMappingURL=3659c1b362cefd7656f6.js.map
