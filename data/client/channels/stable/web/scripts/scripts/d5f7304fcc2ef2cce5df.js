"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["4419"],
  {
    344595: function (e) {
      e.exports = "/assets/78bbf493c57d061d5054.png";
    },
    322539: function (e) {
      e.exports = "/assets/d8c1874996b33c21102b.png";
    },
    233820: function (e) {
      e.exports = "/assets/b1f5b6a02d05ba087659.png";
    },
    38920: function (e) {
      e.exports = "/assets/efda212f90bebc3b6ba7.png";
    },
    779341: function (e, n, o) {
      o.d(n, {
        Z: function () {
          return c;
        },
      });
      var t = o(735250);
      o(470079);
      var i = o(585183),
        r = o(728151),
        s = o(981631);
      function c(e) {
        let { authToken: n, onContinue: o, onError: c, onClose: l } = e;
        return (0, t.jsx)(i.h, {
          platformType: s.ABu.CRUNCHYROLL,
          clientId: r.sp,
          scopes: r.Ii,
          authToken: n,
          onContinue: o,
          onError: c,
          onClose: l,
        });
      }
    },
    642566: function (e, n, o) {
      o.d(n, {
        Z: function () {
          return s;
        },
      });
      var t = o(735250);
      o(470079);
      var i = o(859097),
        r = o(689938);
      function s(e) {
        let { onContinue: n, onClose: o } = e;
        return (0, t.jsx)(i.C, {
          title: r.Z.Messages.CONNECT_CRUNCHYROLL_ERROR_TITLE,
          body: r.Z.Messages.CONNECT_CRUNCHYROLL_ERROR_BODY,
          onClose: o,
          onContinue: n,
        });
      }
    },
    742699: function (e, n, o) {
      o.d(n, {
        Z: function () {
          return d;
        },
      });
      var t = o(735250);
      o(470079);
      var i = o(481060),
        r = o(63063),
        s = o(921869),
        c = o(514161),
        l = o(981631),
        a = o(689938),
        C = o(233820);
      function u() {
        return (0, t.jsx)(c.yC, {
          children: (0, t.jsx)(c.Ux, {
            text: a.Z.Messages.CONNECT_CRUNCHYROLL_DISPLAY_SHOW_VALUE_PROP,
            children: (0, t.jsx)(i.TvIcon, {
              size: "md",
              color: "currentColor",
            }),
          }),
        });
      }
      function d(e) {
        let { onContinue: n, onClose: o } = e,
          i = r.Z.getArticleURL(l.BhN.CRUNCHYROLL_CONNECTION);
        return (0, t.jsx)(s.m, {
          platformType: l.ABu.CRUNCHYROLL,
          headerConnect: a.Z.Messages.CONNECT_CRUNCHYROLL_LANDING_TITLE,
          body: a.Z.Messages.CONNECT_CRUNCHYROLL_LANDING_BODY,
          learnMoreLink: i,
          onClose: o,
          onContinue: n,
          img: (0, t.jsx)("img", { src: C, width: 234, height: 152, alt: "" }),
          valueProps: (0, t.jsx)(u, {}),
        });
      }
    },
    745367: function (e, n, o) {
      o.r(n),
        o.d(n, {
          default: function () {
            return N;
          },
        });
      var t = o(735250);
      o(470079);
      var i = o(481060),
        r = o(864762),
        s = o(779341),
        c = o(642566),
        l = o(742699),
        a = o(686494),
        C = o(573703),
        u = o(798930),
        d = o(981631),
        _ = o(879137);
      function N(e) {
        let { transitionState: n, onClose: o, analyticsLocation: N } = e,
          {
            slide: L,
            gotoNext: R,
            gotoError: h,
            handleWaitingForConnection: O,
            handleAuthToken: x,
            expectedCallbackState: p,
            callbackData: T,
          } = (0, r.k)(N, d.ABu.CRUNCHYROLL);
        return (0, t.jsx)(i.ModalRoot, {
          className: _.modal,
          transitionState: n,
          disableTrack: !0,
          children: (0, t.jsxs)(i.Slides, {
            activeSlide: L,
            width: 408,
            children: [
              (0, t.jsx)(i.Slide, {
                id: u.O.LANDING,
                children: (0, t.jsx)(l.Z, { onContinue: R, onClose: o }),
              }),
              (0, t.jsx)(i.Slide, {
                id: u.O.PRE_CONNECT,
                children: (0, t.jsx)(a.Z, {
                  isWaitingForConnection: !1,
                  onWaitingForConnection: O,
                  onAuthToken: x,
                  onError: h,
                  onClose: o,
                }),
              }),
              (0, t.jsx)(i.Slide, {
                id: u.O.PRE_CONNECT_WAITING,
                children: (0, t.jsx)(a.Z, {
                  isWaitingForConnection: !0,
                  expectedCallbackState: p,
                  onAuthToken: x,
                  onError: h,
                  onClose: o,
                }),
              }),
              (0, t.jsx)(i.Slide, {
                id: u.O.DISCORD_CONSENT,
                children: (0, t.jsx)(s.Z, {
                  authToken: T,
                  onContinue: R,
                  onError: h,
                  onClose: o,
                }),
              }),
              (0, t.jsx)(i.Slide, {
                id: u.O.ERROR,
                children: (0, t.jsx)(c.Z, { onContinue: R, onClose: o }),
              }),
              (0, t.jsx)(i.Slide, {
                id: u.O.SUCCESS,
                children: (0, t.jsx)(C.Z, { onClose: o }),
              }),
            ],
          }),
        });
      }
    },
    686494: function (e, n, o) {
      o.d(n, {
        Z: function () {
          return C;
        },
      });
      var t = o(735250);
      o(470079);
      var i = o(212598),
        r = o(728151),
        s = o(981631),
        c = o(689938),
        l = o(344595),
        a = o(322539);
      function C(e) {
        let {
            isWaitingForConnection: n,
            onWaitingForConnection: o,
            expectedCallbackState: C,
            onAuthToken: u,
            onError: d,
            onClose: _,
          } = e,
          N = n
            ? (0, t.jsx)("img", {
                src: a,
                width: "168",
                height: "124",
                alt: "",
              })
            : (0, t.jsx)("img", {
                src: l,
                width: "152",
                height: "123",
                alt: "",
              }),
          L = n
            ? c.Z.Messages.CRUNCHYROLL_DETAILS_TITLE_WAITING
            : c.Z.Messages.CRUNCHYROLL_DETAILS_TITLE,
          R = n
            ? c.Z.Messages.CRUNCHYROLL_DETAILS_BODY_WAITING
            : c.Z.Messages.CRUNCHYROLL_DETAILS_BODY;
        return (0, t.jsx)(i.t, {
          platformType: s.ABu.CRUNCHYROLL,
          isWaitingForConnection: n,
          onWaitingForConnection: o,
          expectedCallbackState: C,
          onAuthToken: u,
          onError: d,
          onClose: _,
          img: N,
          title: L,
          body: R,
          redirectDestination: r.pY,
        });
      }
    },
    573703: function (e, n, o) {
      o.d(n, {
        Z: function () {
          return d;
        },
      });
      var t = o(735250);
      o(470079);
      var i = o(481060),
        r = o(63063),
        s = o(376340),
        c = o(981631),
        l = o(689938),
        a = o(623022),
        C = o(38920);
      function u() {
        return (0, t.jsx)("div", {
          className: a.__invalid_getCrunchyrollApp,
          children: (0, t.jsx)("div", {
            className: a.__invalid_getCrunchyrollAppBody,
            children: (0, t.jsx)(i.Text, {
              variant: "text-sm/medium",
              color: "header-secondary",
              children: (0, t.jsx)(i.Anchor, {
                href: r.Z.getArticleURL(c.BhN.CRUNCHYROLL_CONNECTION),
                children: l.Z.Messages.LEARN_MORE,
              }),
            }),
          }),
        });
      }
      function d(e) {
        let { onClose: n } = e;
        return (0, t.jsx)(s.L, {
          img: (0, t.jsx)("img", {
            src: C,
            width: "224",
            height: "104",
            alt: "",
          }),
          title: l.Z.Messages.CONNECT_CRUNCHYROLL_SUCCESS_TITLE,
          body: l.Z.Messages.CONNECT_CRUNCHYROLL_SUCCESS_BODY,
          content: (0, t.jsx)(u, {}),
          onClose: n,
        });
      }
    },
    879137: function (e, n, o) {
      e.exports = {
        modal: "modal_cc2278",
        container: "container_cc2278",
        header: "header_cc2278",
        stepHeader: "stepHeader_cc2278",
        title: "title_cc2278",
        closeButton: "closeButton_cc2278",
        illustration: "illustration_cc2278",
        body: "body_cc2278",
        discordConsentBody: "discordConsentBody_cc2278",
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
      };
    },
    623022: function (e, n, o) {
      e.exports = {};
    },
  },
]);
//# sourceMappingURL=d5f7304fcc2ef2cce5df.js.map
