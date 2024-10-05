"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["72872"],
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
    431583: function (e, s, a) {
      a.r(s),
        a.d(s, {
          default: function () {
            return W;
          },
        }),
        a(47120);
      var t,
        n,
        o = a(735250),
        r = a(470079),
        l = a(120356),
        i = a.n(l),
        c = a(525654),
        d = a.n(c),
        f = a(873546),
        u = a(213919),
        p = a(442837),
        m = a(481060),
        x = a(391650),
        g = a(313201),
        O = a(314897),
        _ = a(594174),
        h = a(626135),
        v = a(361207),
        N = a(981631),
        A = a(689938),
        j = a(788764);
      ((n = t || (t = {}))[(n.OSX = 0)] = "OSX"),
        (n[(n.WINDOWS = 1)] = "WINDOWS"),
        (n[(n.LINUX = 2)] = "LINUX"),
        (n[(n.IOS = 3)] = "IOS"),
        (n[(n.ANDROID = 4)] = "ANDROID");
      let D = [
          {
            getOs: () => A.Z.Messages.PLATFORM_MACOS,
            icon: j.apple,
            url: () => (0, v.w4)("osx", !1),
            platformKey: 0,
          },
          {
            getOs: () => A.Z.Messages.PLATFORM_WINDOWS,
            icon: j.windows,
            url: () => (0, v.w4)("win", !1),
            platformKey: 1,
          },
          {
            getOs: () => A.Z.Messages.PLATFORM_LINUX,
            icon: j.linux,
            url: [
              {
                url: () => (0, v.w4)("linux", !1, "deb"),
                getText: () => A.Z.Messages.DEB,
              },
              {
                url: () => (0, v.w4)("linux", !1, "tar.gz"),
                getText: () => A.Z.Messages.TAR_GZ,
              },
            ],
            platformKey: 2,
          },
        ],
        M = [
          {
            getOs: () => A.Z.Messages.PLATFORM_IOS,
            icon: j.ios,
            url: () => N.fzT.IOS,
            platformKey: 3,
          },
          {
            getOs: () => A.Z.Messages.PLATFORM_ANDROID,
            icon: j.android,
            url: () => N.fzT.ANDROID,
            platformKey: 4,
          },
        ],
        w = (e) => {
          let { url: s, text: a, onClick: t } = e;
          return (0, o.jsx)(m.Anchor, {
            useDefaultUnderlineStyles: !1,
            href: s,
            className: j.downloadButton,
            onClick: t,
            children: a,
          });
        },
        L = (e) => {
          let s,
            {
              platform: a,
              onClick: t,
              onMouseEnter: n,
              isActive: r,
              claimed: l,
            } = e,
            { getOs: c, icon: d, url: f, platformKey: u } = a,
            p = c(),
            x = i()(j.icon, d);
          if (Array.isArray(f))
            s = f.map((e, s) => {
              let a = l ? e.url() : "";
              return (0, o.jsx)(
                w,
                { url: a, onClick: () => t(p), text: e.getText() },
                "".concat(a, "-").concat(s),
              );
            });
          else {
            let e = l ? f() : void 0;
            s = (0, o.jsx)(w, {
              url: e,
              onClick: () => t(p),
              text: A.Z.Messages.DOWNLOAD,
            });
          }
          return (0, o.jsx)("li", {
            className: i()(j.platform, { [j.active]: r }),
            onMouseEnter: () => n(u),
            children: (0, o.jsxs)("div", {
              className: j.contentWrapper,
              children: [
                (0, o.jsxs)("div", {
                  className: j.iconWrap,
                  children: [
                    (0, o.jsx)("div", { className: x }),
                    (0, o.jsx)("div", { className: i()(j.active, x) }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  children: [
                    (0, o.jsx)(m.Heading, {
                      className: j.platformName,
                      variant: "heading-lg/semibold",
                      children: p,
                    }),
                    (0, o.jsx)("div", {
                      className: i()(j.downloadButtons, {
                        [j.list]: Array.isArray(s),
                      }),
                      children: s,
                    }),
                  ],
                }),
              ],
            }),
          });
        };
      function W(e) {
        let { source: s, onClose: a, transitionState: t } = e,
          n = (0, p.e7)([_.default], () => _.default.getCurrentUser()),
          l = (0, p.e7)([O.default], () => O.default.getFingerprint()),
          c = null == n || n.isClaimed(),
          [v, w] = r.useState(
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
          (null != u.getToken() || null != l) &&
            h.default.track(N.rMx.DOWNLOAD_APP, {
              platform: e,
              ptb: !1,
              released: !0,
              has_e_mail: c,
              referring_location: s,
              qr_code: !1,
            }),
            !c && (a(), x.j());
        }
        function b(e) {
          w(e);
        }
        r.useEffect(() => {
          h.default.track(N.rMx.OPEN_MODAL, {
            type: "Download App",
            source: { location: s },
          });
        }, [s]);
        let T = (0, g.Dt)();
        return (0, o.jsx)(m.ThemeProvider, {
          theme: N.BRd.LIGHT,
          children: (e) =>
            (0, o.jsxs)(m.ModalRoot, {
              className: i()(j.downloadApps, e),
              transitionState: t,
              "aria-labelledby": T,
              children: [
                (0, o.jsx)(m.ModalCloseButton, {
                  onClick: a,
                  className: j.modalCloseButton,
                }),
                (0, o.jsx)("div", {
                  className: j.inner,
                  children: (0, o.jsxs)(m.HeadingLevel, {
                    component: (0, o.jsx)(m.HiddenVisually, {
                      children: (0, o.jsx)(m.H, {
                        id: T,
                        children: A.Z.Messages.DOWNLOAD_APP,
                      }),
                    }),
                    children: [
                      !f.tq &&
                        (0, o.jsx)("div", {
                          className: j.platformsWrap,
                          children: (0, o.jsx)(m.HeadingLevel, {
                            component: (0, o.jsx)(m.Heading, {
                              variant: "heading-lg/semibold",
                              className: j.header,
                              children: A.Z.Messages.DOWNLOAD_DESKTOP_TITLE,
                            }),
                            children: (0, o.jsx)("ul", {
                              className: j.platforms,
                              children: D.map((e) =>
                                (0, o.jsx)(
                                  L,
                                  {
                                    isActive: v === e.platformKey,
                                    platform: e,
                                    onClick: W,
                                    onMouseEnter: b,
                                    claimed: c,
                                  },
                                  e.platformKey,
                                ),
                              ),
                            }),
                          }),
                        }),
                      (0, o.jsx)("div", {
                        className: j.platformsWrap,
                        children: (0, o.jsxs)(m.HeadingLevel, {
                          component: (0, o.jsx)(o.Fragment, {
                            children:
                              !f.tq &&
                              (0, o.jsx)(m.Heading, {
                                variant: "heading-lg/semibold",
                                className: j.header,
                                children: A.Z.Messages.DOWNLOAD_MOBILE_TITLE,
                              }),
                          }),
                          children: [
                            (0, o.jsx)("ul", {
                              className: j.platforms,
                              children: M.map((e) =>
                                (0, o.jsx)(
                                  L,
                                  {
                                    isActive: v === e.platformKey,
                                    platform: e,
                                    onClick: W,
                                    onMouseEnter: b,
                                    claimed: c,
                                  },
                                  e.platformKey,
                                ),
                              ),
                            }),
                            (0, o.jsx)(m.Text, {
                              className: j.footer,
                              variant: "text-sm/normal",
                              children:
                                A.Z.Messages.DOWNLOAD_DESKTOP_FOOTER.format(),
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
    788764: function (e, s, a) {
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
//# sourceMappingURL=05f86250805e34b5765c.js.map
