"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["61366"],
  {
    515695: function (e) {
      e.exports = "/assets/450a761db3bfe89ca9b9.png";
    },
    198993: function (e, n, t) {
      t.d(n, {
        c2: function () {
          return b;
        },
        cK: function () {
          return i;
        },
      });
      var o,
        i,
        r,
        c,
        s = t(200651),
        a = t(192379),
        l = t(120356),
        d = t.n(l),
        u = t(882989),
        f = t(60847);
      function p(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      ((o = i || (i = {})).SIZE_40 = "SIZE_40"), (o.SIZE_60 = "SIZE_60");
      let x = Object.freeze({ SIZE_40: "size-40", SIZE_60: "size-60" }),
        C = t(515695);
      class g extends (r = a.PureComponent) {
        render() {
          let { className: e, text: n, ...t } = this.props;
          return (0, s.jsx)("div", {
            style: {
              width: t.size,
              height: t.size,
              backgroundColor: t.bgColor,
            },
            className: d()(f.qrCodeContainer, e),
            children: (0, s.jsx)(u.default, { value: n, level: "M", ...t }),
          });
        }
      }
      p(g, "defaultProps", {
        size: 128,
        bgColor: "#ffffff",
        fgColor: "#000000",
      });
      class b extends (c = a.PureComponent) {
        render() {
          let { overlaySize: e } = this.props,
            n = x[null != e ? e : "SIZE_40"];
          return (0, s.jsxs)("div", {
            className: f.qrCodeOverlayContainer,
            children: [
              (0, s.jsx)(g, { ...this.props }),
              (0, s.jsx)("div", {
                className: f.qrCodeOverlay,
                children: (0, s.jsx)("img", {
                  className: f[n],
                  src: C,
                  alt: "",
                }),
              }),
            ],
          });
        }
      }
      p(b, "defaultProps", {
        size: 144,
        bgColor: "#ffffff",
        fgColor: "#000000",
      }),
        (n.ZP = g);
    },
    509340: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return a;
        },
      });
      var o = t(200651);
      t(192379);
      var i = t(159277),
        r = t(585183),
        c = t(981631),
        s = t(927923);
      function a(e) {
        let { authToken: n, onContinue: t, onError: a, onClose: l } = e;
        return (0, o.jsx)(r.h, {
          platformType: c.ABu.XBOX,
          clientId: i.t.XBOX_APPLICATION_ID,
          scopes: s.tA,
          authToken: n,
          onContinue: t,
          onError: a,
          onClose: l,
        });
      }
    },
    135184: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var o = t(200651);
      t(192379);
      var i = t(859097),
        r = t(388032);
      function c(e) {
        let { onContinue: n, onClose: t } = e;
        return (0, o.jsx)(i.C, {
          title: r.intl.string(r.t.INwPCQ),
          body: r.intl.string(r.t.GyXRR0),
          onClose: t,
          onContinue: n,
        });
      }
    },
    409553: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var o = t(200651),
        i = t(192379),
        r = t(481060),
        c = t(63063),
        s = t(921869),
        a = t(981631),
        l = t(388032),
        d = t(493358);
      function u(e) {
        let { onContinue: n, onClose: t } = e,
          u = c.Z.getArticleURL(a.BhN.XBOX_CONNECTION),
          f = l.intl.format(l.t.CIc3IC, { helpdeskArticleUrl: u }),
          p = i.useMemo(
            () => [
              { label: l.intl.string(l.t.ihQXsb), icon: r.VoiceNormalIcon },
              { label: l.intl.string(l.t.Xt1n4O), icon: r.ScreenStreamIcon },
              { label: l.intl.string(l.t.xqVY3t), icon: r.GroupIcon },
              { label: l.intl.string(l.t.iQsKVV), icon: r.GameControllerIcon },
            ],
            [],
          );
        return (0, o.jsx)(s.m, {
          platformType: a.ABu.XBOX,
          headerConnect: l.intl.string(l.t.m8aaho),
          headerReconnect: l.intl.string(l.t.z3rAho),
          body: f,
          onClose: t,
          onContinue: n,
          img: (0, o.jsx)("img", {
            src: d.Z,
            width: 230,
            height: 160,
            alt: "",
          }),
          valueProps: p,
        });
      }
    },
    598576: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return x;
          },
        });
      var o = t(200651);
      t(192379);
      var i = t(481060),
        r = t(864762),
        c = t(509340),
        s = t(135184),
        a = t(409553),
        l = t(494801),
        d = t(319392),
        u = t(798930),
        f = t(981631),
        p = t(337530);
      function x(e) {
        let { transitionState: n, onClose: t, analyticsLocation: x } = e,
          {
            slide: C,
            gotoNext: g,
            gotoError: b,
            handleWaitingForConnection: h,
            handleAuthToken: _,
            expectedCallbackState: m,
            callbackData: v,
          } = (0, r.k)(x, f.ABu.XBOX);
        return (0, o.jsx)(i.ModalRoot, {
          className: p.modal,
          transitionState: n,
          disableTrack: !0,
          children: (0, o.jsxs)(i.Slides, {
            activeSlide: C,
            width: 408,
            children: [
              (0, o.jsx)(i.Slide, {
                id: u.O.LANDING,
                children: (0, o.jsx)(a.Z, { onContinue: g, onClose: t }),
              }),
              (0, o.jsx)(i.Slide, {
                id: u.O.PRE_CONNECT,
                children: (0, o.jsx)(l.Z, {
                  isWaitingForConnection: !1,
                  onWaitingForConnection: h,
                  onAuthToken: _,
                  onError: b,
                  onClose: t,
                }),
              }),
              (0, o.jsx)(i.Slide, {
                id: u.O.PRE_CONNECT_WAITING,
                children: (0, o.jsx)(l.Z, {
                  isWaitingForConnection: !0,
                  expectedCallbackState: m,
                  onAuthToken: _,
                  onError: b,
                  onClose: t,
                }),
              }),
              (0, o.jsx)(i.Slide, {
                id: u.O.DISCORD_CONSENT,
                children: (0, o.jsx)(c.Z, {
                  authToken: v,
                  onContinue: g,
                  onError: b,
                  onClose: t,
                }),
              }),
              (0, o.jsx)(i.Slide, {
                id: u.O.ERROR,
                children: (0, o.jsx)(s.Z, { onContinue: g, onClose: t }),
              }),
              (0, o.jsx)(i.Slide, {
                id: u.O.SUCCESS,
                children: (0, o.jsx)(d.Z, { onClose: t }),
              }),
            ],
          }),
        });
      }
    },
    494801: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return l;
        },
      });
      var o = t(200651);
      t(192379);
      var i = t(212598),
        r = t(981631),
        c = t(388032),
        s = t(250331),
        a = t(300778);
      function l(e) {
        let {
            isWaitingForConnection: n,
            onWaitingForConnection: t,
            expectedCallbackState: l,
            onAuthToken: d,
            onError: u,
            onClose: f,
          } = e,
          p = n
            ? (0, o.jsx)("img", {
                src: a.Z,
                width: "231",
                height: "172",
                alt: "",
              })
            : (0, o.jsx)("img", {
                src: s.Z,
                width: "231",
                height: "160",
                alt: "",
              }),
          x = n ? c.intl.string(c.t.EuwcxM) : c.intl.string(c.t["e/z3nZ"]),
          C = n ? c.intl.string(c.t["1GjS/f"]) : c.intl.string(c.t["7tXu0t"]);
        return (0, o.jsx)(i.t, {
          platformType: r.ABu.XBOX,
          isWaitingForConnection: n,
          onWaitingForConnection: t,
          expectedCallbackState: l,
          onAuthToken: d,
          onError: u,
          onClose: f,
          img: p,
          title: x,
          body: C,
        });
      }
    },
    319392: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return C;
        },
      });
      var o = t(200651);
      t(192379);
      var i = t(481060),
        r = t(726542),
        c = t(198993),
        s = t(63063),
        a = t(376340),
        l = t(981631),
        d = t(927923),
        u = t(388032),
        f = t(816860),
        p = t(629582);
      function x() {
        return (0, o.jsxs)("div", {
          className: f.getXboxApp,
          children: [
            (0, o.jsxs)("div", {
              className: f.getXboxAppBody,
              children: [
                (0, o.jsxs)(i.Heading, {
                  className: f.getXboxAppHeading,
                  variant: "text-lg/semibold",
                  children: [
                    (0, o.jsx)("div", {
                      className: f.xboxLogoBox,
                      children: (0, o.jsx)("img", {
                        src: r.Z.get(l.ABu.XBOX).icon.whiteSVG,
                        alt: "",
                      }),
                    }),
                    u.intl.string(u.t["12Kx2t"]),
                  ],
                }),
                (0, o.jsx)(i.Text, {
                  tag: "p",
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: u.intl.string(u.t.M5yEcX),
                }),
                (0, o.jsx)(i.Text, {
                  variant: "text-sm/medium",
                  color: "header-secondary",
                  children: (0, o.jsx)(i.Anchor, {
                    href: s.Z.getArticleURL(l.BhN.XBOX_CONNECTION),
                    children: u.intl.string(u.t.hvVgAQ),
                  }),
                }),
              ],
            }),
            (0, o.jsx)(c.ZP, {
              className: f.getXboxAppQR,
              text: d.X3,
              size: 90,
            }),
          ],
        });
      }
      function C(e) {
        let { onClose: n } = e;
        return (0, o.jsx)(a.L, {
          img: (0, o.jsx)("img", {
            src: p.Z,
            width: "124",
            height: "160",
            alt: "",
          }),
          title: u.intl.string(u.t["7QsHmp"]),
          body: u.intl.string(u.t.byYNPT),
          content: (0, o.jsx)(x, {}),
          onClose: n,
        });
      }
    },
    159277: function (e, n, t) {
      var o, i;
      t.d(n, {
        M: function () {
          return r;
        },
        t: function () {
          return o;
        },
      }),
        t(47120),
        ((i = o || (o = {})).XBOX_APPLICATION_ID = "622174530214821906"),
        (i.PLAYSTATION_APPLICATION_ID = "1008890872156405890"),
        (i.PLAYSTATION_STAGING_APPLICATION_ID = "984193235868065795");
      let r = {
        PLAYSTATION_APPLICATION_IDS: new Set([
          "984193235868065795",
          "1008890872156405890",
        ]),
        ALL: new Set([
          "622174530214821906",
          "984193235868065795",
          "1008890872156405890",
        ]),
      };
    },
    60847: function (e, n, t) {
      t.r(
        (e.exports = {
          qrCodeOverlay: "qrCodeOverlay_bcfb9d",
          "size-40": "size-40_bcfb9d",
          "size-60": "size-60_bcfb9d",
          qrCodeOverlayContainer: "qrCodeOverlayContainer_bcfb9d",
          qrCodeContainer: "qrCodeContainer_bcfb9d",
        }),
      );
    },
    337530: function (e, n, t) {
      e.exports = {
        modal: "modal_cc2278",
        header: "header_cc2278",
        stepHeader: "stepHeader_cc2278",
        title: "title_cc2278",
        closeButton: "closeButton_cc2278",
        illustration: "illustration_cc2278",
        consentContent: "consentContent_cc2278",
        body: "body_cc2278",
        footer: "footer_cc2278",
        footerButton: "footerButton_cc2278",
        launchIcon: "launchIcon_cc2278",
        valueProps: "valueProps_cc2278",
        valueProp: "valueProp_cc2278",
        valuePropIconContainer: "valuePropIconContainer_cc2278",
        valuePropText: "valuePropText_cc2278",
        valuePropDivider: "valuePropDivider_cc2278",
        slideContainer: "slideContainer_cc2278",
      };
    },
    816860: function (e, n, t) {
      e.exports = {
        getXboxApp: "getXboxApp_c502c2",
        getXboxAppBody: "getXboxAppBody_c502c2",
        getXboxAppHeading: "getXboxAppHeading_c502c2",
        getXboxAppQR: "getXboxAppQR_c502c2",
        xboxLogoBox: "xboxLogoBox_c502c2",
      };
    },
    629582: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/78f63623b9a823fb08b553c956ad16d032c46e4375c55f374e1e6bc791b8a1a7.png";
    },
    250331: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/abb7826c12c091e08c0ad121b2a6ab48fce6ffd2123f1219b8ef58399908f3ff.png";
    },
    300778: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/2cf087a7f12e3d1d09c0c9416169f2b67f08a27a8642aef5635519900f3e904b.png";
    },
    493358: function (e, n) {
      n.Z =
        "https://cdn.discordapp.com/assets/content/87626cb25be78ee682ab4ee85e63b0680a5d90f8a5e6f8d469ffb6889d7959e3.png";
    },
  },
]);
//# sourceMappingURL=391d37cfab358ecc43bb.js.map
