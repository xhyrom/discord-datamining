"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["61366"],
  {
    515695: function (e) {
      e.exports = "/assets/450a761db3bfe89ca9b9.png";
    },
    397995: function (e) {
      e.exports = "/assets/cea363f48506b484f71d.png";
    },
    848499: function (e) {
      e.exports = "/assets/ce7506827cf6ed3cd84c.png";
    },
    932508: function (e) {
      e.exports = "/assets/c0c3dd13eb640465112b.png";
    },
    418811: function (e) {
      e.exports = "/assets/dabe049a9f1922014ce9.png";
    },
    198993: function (e, t, n) {
      n.d(t, {
        c2: function () {
          return C;
        },
        cK: function () {
          return r;
        },
      });
      var o,
        r,
        i,
        c,
        s = n(200651),
        l = n(192379),
        a = n(38189),
        d = n(458221);
      function u(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      ((o = r || (r = {})).SIZE_40 = "SIZE_40"), (o.SIZE_60 = "SIZE_60");
      let x = Object.freeze({ SIZE_40: "size-40", SIZE_60: "size-60" }),
        p = n(515695);
      class f extends (i = l.PureComponent) {
        render() {
          let { className: e, text: t, ...n } = this.props;
          return (0, s.jsx)("div", {
            style: {
              padding: 8,
              borderRadius: 4,
              width: n.size,
              height: n.size,
              backgroundColor: n.bgColor,
            },
            className: e,
            children: (0, s.jsx)(a.default, { value: t, level: "M", ...n }),
          });
        }
      }
      u(f, "defaultProps", {
        size: 128,
        bgColor: "#ffffff",
        fgColor: "#000000",
      });
      class C extends (c = l.PureComponent) {
        render() {
          let { overlaySize: e } = this.props,
            t = x[null != e ? e : "SIZE_40"];
          return (0, s.jsxs)("div", {
            className: d.qrCodeContainer,
            children: [
              (0, s.jsx)(f, { ...this.props }),
              (0, s.jsx)("div", {
                className: d.qrCodeOverlay,
                children: (0, s.jsx)("img", {
                  className: d[t],
                  src: p,
                  alt: "",
                }),
              }),
            ],
          });
        }
      }
      u(C, "defaultProps", {
        size: 144,
        bgColor: "#ffffff",
        fgColor: "#000000",
      }),
        (t.ZP = f);
    },
    509340: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return l;
        },
      });
      var o = n(200651);
      n(192379);
      var r = n(159277),
        i = n(585183),
        c = n(981631),
        s = n(927923);
      function l(e) {
        let { authToken: t, onContinue: n, onError: l, onClose: a } = e;
        return (0, o.jsx)(i.h, {
          platformType: c.ABu.XBOX,
          clientId: r.t.XBOX_APPLICATION_ID,
          scopes: s.tA,
          authToken: t,
          onContinue: n,
          onError: l,
          onClose: a,
        });
      }
    },
    135184: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var o = n(200651);
      n(192379);
      var r = n(859097),
        i = n(388032);
      function c(e) {
        let { onContinue: t, onClose: n } = e;
        return (0, o.jsx)(r.C, {
          title: i.intl.string(i.t.INwPCQ),
          body: i.intl.string(i.t.GyXRR0),
          onClose: n,
          onContinue: t,
        });
      }
    },
    409553: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return x;
        },
      });
      var o = n(200651);
      n(192379);
      var r = n(481060),
        i = n(63063),
        c = n(921869),
        s = n(514161),
        l = n(981631),
        a = n(388032),
        d = n(932508);
      function u() {
        return (0, o.jsxs)(s.yC, {
          children: [
            (0, o.jsx)(s.Ux, {
              text: a.intl.string(a.t["VU+McX"]),
              children: (0, o.jsx)(r.VoiceNormalIcon, {
                size: "md",
                color: "currentColor",
              }),
            }),
            (0, o.jsx)(s.Ux, {
              text: a.intl.string(a.t.zMpLER),
              children: (0, o.jsx)(r.GameControllerIcon, {
                size: "md",
                color: "currentColor",
              }),
            }),
          ],
        });
      }
      function x(e) {
        let { onContinue: t, onClose: n } = e,
          r = i.Z.getArticleURL(l.BhN.XBOX_CONNECTION);
        return (0, o.jsx)(c.m, {
          platformType: l.ABu.XBOX,
          headerConnect: a.intl.string(a.t["7FGNVF"]),
          headerReconnect: a.intl.string(a.t.z3rAho),
          body: a.intl.string(a.t.oJquQU),
          learnMoreLink: r,
          onClose: n,
          onContinue: t,
          img: (0, o.jsx)("img", { src: d, width: 234, height: 152, alt: "" }),
          valueProps: (0, o.jsx)(u, {}),
        });
      }
    },
    598576: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return f;
          },
        });
      var o = n(200651);
      n(192379);
      var r = n(481060),
        i = n(864762),
        c = n(509340),
        s = n(135184),
        l = n(409553),
        a = n(494801),
        d = n(319392),
        u = n(798930),
        x = n(981631),
        p = n(879137);
      function f(e) {
        let { transitionState: t, onClose: n, analyticsLocation: f } = e,
          {
            slide: C,
            gotoNext: g,
            gotoError: h,
            handleWaitingForConnection: b,
            handleAuthToken: _,
            expectedCallbackState: j,
            callbackData: A,
          } = (0, i.k)(f, x.ABu.XBOX);
        return (0, o.jsx)(r.ModalRoot, {
          className: p.modal,
          transitionState: t,
          disableTrack: !0,
          children: (0, o.jsxs)(r.Slides, {
            activeSlide: C,
            width: 408,
            children: [
              (0, o.jsx)(r.Slide, {
                id: u.O.LANDING,
                children: (0, o.jsx)(l.Z, { onContinue: g, onClose: n }),
              }),
              (0, o.jsx)(r.Slide, {
                id: u.O.PRE_CONNECT,
                children: (0, o.jsx)(a.Z, {
                  isWaitingForConnection: !1,
                  onWaitingForConnection: b,
                  onAuthToken: _,
                  onError: h,
                  onClose: n,
                }),
              }),
              (0, o.jsx)(r.Slide, {
                id: u.O.PRE_CONNECT_WAITING,
                children: (0, o.jsx)(a.Z, {
                  isWaitingForConnection: !0,
                  expectedCallbackState: j,
                  onAuthToken: _,
                  onError: h,
                  onClose: n,
                }),
              }),
              (0, o.jsx)(r.Slide, {
                id: u.O.DISCORD_CONSENT,
                children: (0, o.jsx)(c.Z, {
                  authToken: A,
                  onContinue: g,
                  onError: h,
                  onClose: n,
                }),
              }),
              (0, o.jsx)(r.Slide, {
                id: u.O.ERROR,
                children: (0, o.jsx)(s.Z, { onContinue: g, onClose: n }),
              }),
              (0, o.jsx)(r.Slide, {
                id: u.O.SUCCESS,
                children: (0, o.jsx)(d.Z, { onClose: n }),
              }),
            ],
          }),
        });
      }
    },
    494801: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return d;
        },
      });
      var o = n(200651);
      n(192379);
      var r = n(212598),
        i = n(981631),
        c = n(927923),
        s = n(388032),
        l = n(397995),
        a = n(848499);
      function d(e) {
        let {
            isWaitingForConnection: t,
            onWaitingForConnection: n,
            expectedCallbackState: d,
            onAuthToken: u,
            onError: x,
            onClose: p,
          } = e,
          f = t
            ? (0, o.jsx)("img", {
                src: a,
                width: "168",
                height: "124",
                alt: "",
              })
            : (0, o.jsx)("img", {
                src: l,
                width: "152",
                height: "124",
                alt: "",
              }),
          C = t ? s.intl.string(s.t.EuwcxM) : s.intl.string(s.t.a3MfQU),
          g = t ? s.intl.string(s.t["1GjS/f"]) : s.intl.string(s.t["Y+UQDg"]);
        return (0, o.jsx)(r.t, {
          platformType: i.ABu.XBOX,
          isWaitingForConnection: t,
          onWaitingForConnection: n,
          expectedCallbackState: d,
          onAuthToken: u,
          onError: x,
          onClose: p,
          img: f,
          title: C,
          body: g,
          redirectDestination: c.zM,
        });
      }
    },
    319392: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return C;
        },
      });
      var o = n(200651);
      n(192379);
      var r = n(481060),
        i = n(726542),
        c = n(198993),
        s = n(63063),
        l = n(376340),
        a = n(981631),
        d = n(927923),
        u = n(388032),
        x = n(277379),
        p = n(418811);
      function f() {
        return (0, o.jsxs)("div", {
          className: x.getXboxApp,
          children: [
            (0, o.jsxs)("div", {
              className: x.getXboxAppBody,
              children: [
                (0, o.jsxs)(r.Heading, {
                  className: x.getXboxAppHeading,
                  variant: "text-lg/semibold",
                  children: [
                    (0, o.jsx)("div", {
                      className: x.xboxLogoBox,
                      children: (0, o.jsx)("img", {
                        src: i.Z.get(a.ABu.XBOX).icon.whiteSVG,
                        alt: "",
                      }),
                    }),
                    u.intl.string(u.t["12Kx2t"]),
                  ],
                }),
                (0, o.jsx)(r.Text, {
                  tag: "p",
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: u.intl.string(u.t.M5yEcX),
                }),
                (0, o.jsx)(r.Text, {
                  variant: "text-sm/medium",
                  color: "header-secondary",
                  children: (0, o.jsx)(r.Anchor, {
                    href: s.Z.getArticleURL(a.BhN.XBOX_CONNECTION),
                    children: u.intl.string(u.t.hvVgAQ),
                  }),
                }),
              ],
            }),
            (0, o.jsx)(c.ZP, {
              className: x.getXboxAppQR,
              text: d.X3,
              size: 90,
            }),
          ],
        });
      }
      function C(e) {
        let { onClose: t } = e;
        return (0, o.jsx)(l.L, {
          img: (0, o.jsx)("img", {
            src: p,
            width: "232",
            height: "113",
            alt: "",
          }),
          title: u.intl.string(u.t["7QsHmp"]),
          body: u.intl.string(u.t.byYNPT),
          content: (0, o.jsx)(f, {}),
          onClose: t,
        });
      }
    },
    159277: function (e, t, n) {
      var o, r;
      n.d(t, {
        M: function () {
          return i;
        },
        t: function () {
          return o;
        },
      }),
        n(47120),
        ((r = o || (o = {})).XBOX_APPLICATION_ID = "622174530214821906"),
        (r.PLAYSTATION_APPLICATION_ID = "1008890872156405890"),
        (r.PLAYSTATION_STAGING_APPLICATION_ID = "984193235868065795");
      let i = {
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
    458221: function (e, t, n) {
      n.r(
        (e.exports = {
          qrCodeOverlay: "qrCodeOverlay_bcfb9d",
          "size-40": "size-40_bcfb9d",
          "size-60": "size-60_bcfb9d",
          qrCodeContainer: "qrCodeContainer_bcfb9d",
        }),
      );
    },
    879137: function (e, t, n) {
      e.exports = {
        modal: "modal_cc2278",
        header: "header_cc2278",
        stepHeader: "stepHeader_cc2278",
        title: "title_cc2278",
        closeButton: "closeButton_cc2278",
        illustration: "illustration_cc2278",
        body: "body_cc2278",
        footer: "footer_cc2278",
        footerButton: "footerButton_cc2278",
        launchIcon: "launchIcon_cc2278",
        valueProps: "valueProps_cc2278",
        valuePropContainer: "valuePropContainer_cc2278",
        valueProp: "valueProp_cc2278",
        valuePropIconContainer: "valuePropIconContainer_cc2278",
        bulletedValueProp: "bulletedValueProp_cc2278",
        bulletPointsContainer: "bulletPointsContainer_cc2278",
        bulletPoints: "bulletPoints_cc2278",
        bulletPoint: "bulletPoint_cc2278",
        bulletPointText: "bulletPointText_cc2278",
        slideContainer: "slideContainer_cc2278",
      };
    },
    277379: function (e, t, n) {
      e.exports = {
        getXboxApp: "getXboxApp_c502c2",
        getXboxAppBody: "getXboxAppBody_c502c2",
        getXboxAppHeading: "getXboxAppHeading_c502c2",
        getXboxAppQR: "getXboxAppQR_c502c2",
        xboxLogoBox: "xboxLogoBox_c502c2",
      };
    },
  },
]);
//# sourceMappingURL=86c35c7d15762c5d38fa.js.map
