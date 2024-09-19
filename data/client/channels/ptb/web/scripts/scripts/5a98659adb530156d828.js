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
    198993: function (e, n, o) {
      o.d(n, {
        c2: function () {
          return p;
        },
        cK: function () {
          return s;
        },
      });
      var t,
        s,
        r,
        i,
        c = o(735250),
        l = o(470079),
        a = o(235167),
        d = o(458221);
      function u(e, n, o) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: o,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = o),
          e
        );
      }
      ((t = s || (s = {})).SIZE_40 = "SIZE_40"), (t.SIZE_60 = "SIZE_60");
      let _ = Object.freeze({ SIZE_40: "size-40", SIZE_60: "size-60" }),
        C = o(515695);
      class x extends (r = l.PureComponent) {
        render() {
          let { className: e, text: n, ...o } = this.props;
          return (0, c.jsx)("div", {
            style: {
              padding: 8,
              borderRadius: 4,
              width: o.size,
              height: o.size,
              backgroundColor: o.bgColor,
            },
            className: e,
            children: (0, c.jsx)(a.default, { value: n, level: "M", ...o }),
          });
        }
      }
      u(x, "defaultProps", {
        size: 128,
        bgColor: "#ffffff",
        fgColor: "#000000",
      });
      class p extends (i = l.PureComponent) {
        render() {
          let { overlaySize: e } = this.props,
            n = _[null != e ? e : "SIZE_40"];
          return (0, c.jsxs)("div", {
            className: d.qrCodeContainer,
            children: [
              (0, c.jsx)(x, { ...this.props }),
              (0, c.jsx)("div", {
                className: d.qrCodeOverlay,
                children: (0, c.jsx)("img", {
                  className: d[n],
                  src: C,
                  alt: "",
                }),
              }),
            ],
          });
        }
      }
      u(p, "defaultProps", {
        size: 144,
        bgColor: "#ffffff",
        fgColor: "#000000",
      }),
        (n.ZP = x);
    },
    509340: function (e, n, o) {
      o.d(n, {
        Z: function () {
          return l;
        },
      });
      var t = o(735250);
      o(470079);
      var s = o(159277),
        r = o(585183),
        i = o(981631),
        c = o(927923);
      function l(e) {
        let { authToken: n, onContinue: o, onError: l, onClose: a } = e;
        return (0, t.jsx)(r.h, {
          platformType: i.ABu.XBOX,
          clientId: s.t.XBOX_APPLICATION_ID,
          scopes: c.tA,
          authToken: n,
          onContinue: o,
          onError: l,
          onClose: a,
        });
      }
    },
    135184: function (e, n, o) {
      o.d(n, {
        Z: function () {
          return i;
        },
      });
      var t = o(735250);
      o(470079);
      var s = o(859097),
        r = o(689938);
      function i(e) {
        let { onContinue: n, onClose: o } = e;
        return (0, t.jsx)(s.C, {
          title: r.Z.Messages.CONNECT_XBOX_ERROR_TITLE,
          body: r.Z.Messages.CONNECT_XBOX_ERROR_BODY,
          onClose: o,
          onContinue: n,
        });
      }
    },
    409553: function (e, n, o) {
      o.d(n, {
        Z: function () {
          return _;
        },
      });
      var t = o(735250);
      o(470079);
      var s = o(481060),
        r = o(63063),
        i = o(921869),
        c = o(514161),
        l = o(981631),
        a = o(689938),
        d = o(932508);
      function u() {
        return (0, t.jsxs)(c.yC, {
          children: [
            (0, t.jsx)(c.Ux, {
              text: a.Z.Messages.CONNECT_XBOX_TRANSFER_VOICE_VALUE_PROP,
              children: (0, t.jsx)(s.VoiceNormalIcon, {
                size: "md",
                color: "currentColor",
              }),
            }),
            (0, t.jsx)(c.Ux, {
              text: a.Z.Messages.CONNECT_XBOX_DISPLAY_GAME_VALUE_PROP,
              children: (0, t.jsx)(s.GameControllerIcon, {
                size: "md",
                color: "currentColor",
              }),
            }),
          ],
        });
      }
      function _(e) {
        let { onContinue: n, onClose: o } = e,
          s = r.Z.getArticleURL(l.BhN.XBOX_CONNECTION);
        return (0, t.jsx)(i.m, {
          platformType: l.ABu.XBOX,
          headerConnect: a.Z.Messages.CONNECT_XBOX_LANDING_TITLE,
          headerReconnect: a.Z.Messages.RECONNECT_XBOX_LANDING_TITLE,
          body: a.Z.Messages.CONNECT_XBOX_LANDING_BODY,
          learnMoreLink: s,
          onClose: o,
          onContinue: n,
          img: (0, t.jsx)("img", { src: d, width: 234, height: 152, alt: "" }),
          valueProps: (0, t.jsx)(u, {}),
        });
      }
    },
    598576: function (e, n, o) {
      o.r(n),
        o.d(n, {
          default: function () {
            return x;
          },
        });
      var t = o(735250);
      o(470079);
      var s = o(481060),
        r = o(864762),
        i = o(509340),
        c = o(135184),
        l = o(409553),
        a = o(494801),
        d = o(319392),
        u = o(798930),
        _ = o(981631),
        C = o(879137);
      function x(e) {
        let { transitionState: n, onClose: o, analyticsLocation: x } = e,
          {
            slide: p,
            gotoNext: O,
            gotoError: f,
            handleWaitingForConnection: g,
            handleAuthToken: N,
            expectedCallbackState: h,
            callbackData: b,
          } = (0, r.k)(x, _.ABu.XBOX);
        return (0, t.jsx)(s.ModalRoot, {
          className: C.modal,
          transitionState: n,
          disableTrack: !0,
          children: (0, t.jsxs)(s.Slides, {
            activeSlide: p,
            width: 408,
            children: [
              (0, t.jsx)(s.Slide, {
                id: u.O.LANDING,
                children: (0, t.jsx)(l.Z, { onContinue: O, onClose: o }),
              }),
              (0, t.jsx)(s.Slide, {
                id: u.O.PRE_CONNECT,
                children: (0, t.jsx)(a.Z, {
                  isWaitingForConnection: !1,
                  onWaitingForConnection: g,
                  onAuthToken: N,
                  onError: f,
                  onClose: o,
                }),
              }),
              (0, t.jsx)(s.Slide, {
                id: u.O.PRE_CONNECT_WAITING,
                children: (0, t.jsx)(a.Z, {
                  isWaitingForConnection: !0,
                  expectedCallbackState: h,
                  onAuthToken: N,
                  onError: f,
                  onClose: o,
                }),
              }),
              (0, t.jsx)(s.Slide, {
                id: u.O.DISCORD_CONSENT,
                children: (0, t.jsx)(i.Z, {
                  authToken: b,
                  onContinue: O,
                  onError: f,
                  onClose: o,
                }),
              }),
              (0, t.jsx)(s.Slide, {
                id: u.O.ERROR,
                children: (0, t.jsx)(c.Z, { onContinue: O, onClose: o }),
              }),
              (0, t.jsx)(s.Slide, {
                id: u.O.SUCCESS,
                children: (0, t.jsx)(d.Z, { onClose: o }),
              }),
            ],
          }),
        });
      }
    },
    494801: function (e, n, o) {
      o.d(n, {
        Z: function () {
          return d;
        },
      });
      var t = o(735250);
      o(470079);
      var s = o(212598),
        r = o(981631),
        i = o(927923),
        c = o(689938),
        l = o(397995),
        a = o(848499);
      function d(e) {
        let {
            isWaitingForConnection: n,
            onWaitingForConnection: o,
            expectedCallbackState: d,
            onAuthToken: u,
            onError: _,
            onClose: C,
          } = e,
          x = n
            ? (0, t.jsx)("img", {
                src: a,
                width: "168",
                height: "124",
                alt: "",
              })
            : (0, t.jsx)("img", {
                src: l,
                width: "152",
                height: "124",
                alt: "",
              }),
          p = n
            ? c.Z.Messages.XBOX_DETAILS_TITLE_WAITING
            : c.Z.Messages.XBOX_DETAILS_TITLE,
          O = n
            ? c.Z.Messages.XBOX_DETAILS_BODY_WAITING
            : c.Z.Messages.XBOX_DETAILS_BODY;
        return (0, t.jsx)(s.t, {
          platformType: r.ABu.XBOX,
          isWaitingForConnection: n,
          onWaitingForConnection: o,
          expectedCallbackState: d,
          onAuthToken: u,
          onError: _,
          onClose: C,
          img: x,
          title: p,
          body: O,
          redirectDestination: i.zM,
        });
      }
    },
    319392: function (e, n, o) {
      o.d(n, {
        Z: function () {
          return p;
        },
      });
      var t = o(735250);
      o(470079);
      var s = o(481060),
        r = o(726542),
        i = o(198993),
        c = o(63063),
        l = o(376340),
        a = o(981631),
        d = o(927923),
        u = o(689938),
        _ = o(277379),
        C = o(418811);
      function x() {
        return (0, t.jsxs)("div", {
          className: _.getXboxApp,
          children: [
            (0, t.jsxs)("div", {
              className: _.getXboxAppBody,
              children: [
                (0, t.jsxs)(s.Heading, {
                  className: _.getXboxAppHeading,
                  variant: "text-lg/semibold",
                  children: [
                    (0, t.jsx)("div", {
                      className: _.xboxLogoBox,
                      children: (0, t.jsx)("img", {
                        src: r.Z.get(a.ABu.XBOX).icon.whiteSVG,
                        alt: "",
                      }),
                    }),
                    u.Z.Messages.GET_XBOX_APP,
                  ],
                }),
                (0, t.jsx)(s.Text, {
                  tag: "p",
                  variant: "text-md/normal",
                  color: "header-secondary",
                  children: u.Z.Messages.CONNECT_XBOX_SUCCESS_APP_BODY,
                }),
                (0, t.jsx)(s.Text, {
                  variant: "text-sm/medium",
                  color: "header-secondary",
                  children: (0, t.jsx)(s.Anchor, {
                    href: c.Z.getArticleURL(a.BhN.XBOX_CONNECTION),
                    children: u.Z.Messages.LEARN_MORE,
                  }),
                }),
              ],
            }),
            (0, t.jsx)(i.ZP, {
              className: _.getXboxAppQR,
              text: d.X3,
              size: 90,
            }),
          ],
        });
      }
      function p(e) {
        let { onClose: n } = e;
        return (0, t.jsx)(l.L, {
          img: (0, t.jsx)("img", {
            src: C,
            width: "232",
            height: "113",
            alt: "",
          }),
          title: u.Z.Messages.CONNECT_XBOX_SUCCESS_TITLE,
          body: u.Z.Messages.CONNECT_XBOX_SUCCESS_BODY,
          content: (0, t.jsx)(x, {}),
          onClose: n,
        });
      }
    },
    159277: function (e, n, o) {
      var t, s;
      o.d(n, {
        M: function () {
          return r;
        },
        t: function () {
          return t;
        },
      }),
        o(47120),
        ((s = t || (t = {})).XBOX_APPLICATION_ID = "622174530214821906"),
        (s.PLAYSTATION_APPLICATION_ID = "1008890872156405890"),
        (s.PLAYSTATION_STAGING_APPLICATION_ID = "984193235868065795");
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
    458221: function (e, n, o) {
      o.r(
        (e.exports = {
          qrCodeOverlay: "qrCodeOverlay_bcfb9d",
          "size-40": "size-40_bcfb9d",
          "size-60": "size-60_bcfb9d",
          qrCodeContainer: "qrCodeContainer_bcfb9d",
        }),
      );
    },
    879137: function (e, n, o) {
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
    277379: function (e, n, o) {
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
//# sourceMappingURL=5a98659adb530156d828.js.map
