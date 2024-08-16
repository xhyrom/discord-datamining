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
            return T;
          },
        }),
        a(47120);
      var t,
        n,
        o = a(735250),
        l = a(470079),
        r = a(120356),
        i = a.n(r),
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
        N = a(361207),
        v = a(792125),
        A = a(981631),
        D = a(689938),
        j = a(348488);
      ((n = t || (t = {}))[(n.OSX = 0)] = "OSX"),
        (n[(n.WINDOWS = 1)] = "WINDOWS"),
        (n[(n.LINUX = 2)] = "LINUX"),
        (n[(n.IOS = 3)] = "IOS"),
        (n[(n.ANDROID = 4)] = "ANDROID");
      let M = [
          {
            getOs: () => D.Z.Messages.PLATFORM_MACOS,
            icon: j.apple,
            url: () => (0, N.w4)("osx", !1),
            platformKey: 0,
          },
          {
            getOs: () => D.Z.Messages.PLATFORM_WINDOWS,
            icon: j.windows,
            url: () => (0, N.w4)("win", !1),
            platformKey: 1,
          },
          {
            getOs: () => D.Z.Messages.PLATFORM_LINUX,
            icon: j.linux,
            url: [
              {
                url: () => (0, N.w4)("linux", !1, "deb"),
                getText: () => D.Z.Messages.DEB,
              },
              {
                url: () => (0, N.w4)("linux", !1, "tar.gz"),
                getText: () => D.Z.Messages.TAR_GZ,
              },
            ],
            platformKey: 2,
          },
        ],
        w = [
          {
            getOs: () => D.Z.Messages.PLATFORM_IOS,
            icon: j.ios,
            url: () => A.fzT.IOS,
            platformKey: 3,
          },
          {
            getOs: () => D.Z.Messages.PLATFORM_ANDROID,
            icon: j.android,
            url: () => A.fzT.ANDROID,
            platformKey: 4,
          },
        ],
        L = (0, v.Q)(A.BRd.LIGHT),
        W = (e) => {
          let { url: s, text: a, onClick: t } = e;
          return (0, o.jsx)(m.Anchor, {
            useDefaultUnderlineStyles: !1,
            href: s,
            className: j.downloadButton,
            onClick: t,
            children: a,
          });
        },
        b = (e) => {
          let s,
            {
              platform: a,
              onClick: t,
              onMouseEnter: n,
              isActive: l,
              claimed: r,
            } = e,
            { getOs: c, icon: d, url: f, platformKey: u } = a,
            p = c(),
            x = i()(j.icon, d);
          if (Array.isArray(f))
            s = f.map((e, s) => {
              let a = r ? e.url() : "";
              return (0, o.jsx)(
                W,
                { url: a, onClick: () => t(p), text: e.getText() },
                "".concat(a, "-").concat(s),
              );
            });
          else {
            let e = r ? f() : void 0;
            s = (0, o.jsx)(W, {
              url: e,
              onClick: () => t(p),
              text: D.Z.Messages.DOWNLOAD,
            });
          }
          return (0, o.jsx)("li", {
            className: i()(j.platform, { [j.active]: l }),
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
      function T(e) {
        let { source: s, onClose: a, transitionState: t } = e,
          n = (0, p.e7)([_.default], () => _.default.getCurrentUser()),
          r = (0, p.e7)([O.default], () => O.default.getFingerprint()),
          c = null == n || n.isClaimed(),
          [N, v] = l.useState(
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
          (null != u.getToken() || null != r) &&
            h.default.track(A.rMx.DOWNLOAD_APP, {
              platform: e,
              ptb: !1,
              released: !0,
              has_e_mail: c,
              referring_location: s,
              qr_code: !1,
            }),
            !c && (a(), x.j());
        }
        function T(e) {
          v(e);
        }
        l.useEffect(() => {
          h.default.track(A.rMx.OPEN_MODAL, {
            type: "Download App",
            source: { location: s },
          });
        }, [s]);
        let S = (0, g.Dt)();
        return (0, o.jsx)(m.ModalRoot, {
          className: i()(j.downloadApps, L),
          transitionState: t,
          "aria-labelledby": S,
          children: (0, o.jsx)("div", {
            className: j.inner,
            children: (0, o.jsxs)(m.HeadingLevel, {
              component: (0, o.jsx)(m.HiddenVisually, {
                children: (0, o.jsx)(m.H, {
                  id: S,
                  children: D.Z.Messages.DOWNLOAD_APP,
                }),
              }),
              children: [
                (0, o.jsx)(m.ModalCloseButton, {
                  onClick: a,
                  className: j.modalCloseButton,
                }),
                !f.tq &&
                  (0, o.jsx)("div", {
                    className: j.platformsWrap,
                    children: (0, o.jsx)(m.HeadingLevel, {
                      component: (0, o.jsx)(m.Heading, {
                        variant: "heading-lg/semibold",
                        className: j.header,
                        children: D.Z.Messages.DOWNLOAD_DESKTOP_TITLE,
                      }),
                      children: (0, o.jsx)("ul", {
                        className: j.platforms,
                        children: M.map((e) =>
                          (0, o.jsx)(
                            b,
                            {
                              isActive: N === e.platformKey,
                              platform: e,
                              onClick: W,
                              onMouseEnter: T,
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
                          children: D.Z.Messages.DOWNLOAD_MOBILE_TITLE,
                        }),
                    }),
                    children: [
                      (0, o.jsx)("ul", {
                        className: j.platforms,
                        children: w.map((e) =>
                          (0, o.jsx)(
                            b,
                            {
                              isActive: N === e.platformKey,
                              platform: e,
                              onClick: W,
                              onMouseEnter: T,
                              claimed: c,
                            },
                            e.platformKey,
                          ),
                        ),
                      }),
                      (0, o.jsx)(m.Text, {
                        className: j.footer,
                        variant: "text-sm/normal",
                        children: D.Z.Messages.DOWNLOAD_DESKTOP_FOOTER.format(),
                      }),
                    ],
                  }),
                }),
              ],
            }),
          }),
        });
      }
    },
    348488: function (e, s, a) {
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
//# sourceMappingURL=9942bb812a04b2eeb2a3.js.map
