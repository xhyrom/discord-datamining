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
    779341: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return c;
        },
      });
      var o = t(735250);
      t(470079);
      var i = t(585183),
        r = t(728151),
        s = t(981631);
      function c(e) {
        let { authToken: n, onContinue: t, onError: c, onClose: l } = e;
        return (0, o.jsx)(i.h, {
          platformType: s.ABu.CRUNCHYROLL,
          clientId: r.sp,
          scopes: r.Ii,
          authToken: n,
          onContinue: t,
          onError: c,
          onClose: l,
        });
      }
    },
    642566: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var o = t(735250);
      t(470079);
      var i = t(859097),
        r = t(689938);
      function s(e) {
        let { onContinue: n, onClose: t } = e;
        return (0, o.jsx)(i.C, {
          title: r.Z.Messages.CONNECT_CRUNCHYROLL_ERROR_TITLE,
          body: r.Z.Messages.CONNECT_CRUNCHYROLL_ERROR_BODY,
          onClose: t,
          onContinue: n,
        });
      }
    },
    742699: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var o = t(735250);
      t(470079);
      var i = t(481060),
        r = t(63063),
        s = t(921869),
        c = t(514161),
        l = t(981631),
        a = t(689938),
        C = t(233820);
      function u() {
        return (0, o.jsx)(c.yC, {
          children: (0, o.jsx)(c.Ux, {
            text: a.Z.Messages.CONNECT_CRUNCHYROLL_DISPLAY_SHOW_VALUE_PROP,
            children: (0, o.jsx)(i.TvIcon, {
              size: "md",
              color: "currentColor",
            }),
          }),
        });
      }
      function d(e) {
        let { onContinue: n, onClose: t } = e,
          i = r.Z.getArticleURL(l.BhN.CRUNCHYROLL_CONNECTION);
        return (0, o.jsx)(s.m, {
          platformType: l.ABu.CRUNCHYROLL,
          headerConnect: a.Z.Messages.CONNECT_CRUNCHYROLL_LANDING_TITLE,
          body: a.Z.Messages.CONNECT_CRUNCHYROLL_LANDING_BODY,
          learnMoreLink: i,
          onClose: t,
          onContinue: n,
          img: (0, o.jsx)("img", { src: C, width: 234, height: 152, alt: "" }),
          valueProps: (0, o.jsx)(u, {}),
        });
      }
    },
    745367: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return N;
          },
        });
      var o = t(735250);
      t(470079);
      var i = t(481060),
        r = t(864762),
        s = t(779341),
        c = t(642566),
        l = t(742699),
        a = t(686494),
        C = t(573703),
        u = t(798930),
        d = t(981631),
        _ = t(879137);
      function N(e) {
        let { transitionState: n, onClose: t, analyticsLocation: N } = e,
          {
            slide: L,
            gotoNext: R,
            gotoError: h,
            handleWaitingForConnection: O,
            handleAuthToken: x,
            expectedCallbackState: p,
            callbackData: T,
          } = (0, r.k)(N, d.ABu.CRUNCHYROLL);
        return (0, o.jsx)(i.ModalRoot, {
          className: _.modal,
          transitionState: n,
          disableTrack: !0,
          children: (0, o.jsxs)(i.Slides, {
            activeSlide: L,
            width: 408,
            children: [
              (0, o.jsx)(i.Slide, {
                id: u.O.LANDING,
                children: (0, o.jsx)(l.Z, { onContinue: R, onClose: t }),
              }),
              (0, o.jsx)(i.Slide, {
                id: u.O.PRE_CONNECT,
                children: (0, o.jsx)(a.Z, {
                  isWaitingForConnection: !1,
                  onWaitingForConnection: O,
                  onAuthToken: x,
                  onError: h,
                  onClose: t,
                }),
              }),
              (0, o.jsx)(i.Slide, {
                id: u.O.PRE_CONNECT_WAITING,
                children: (0, o.jsx)(a.Z, {
                  isWaitingForConnection: !0,
                  expectedCallbackState: p,
                  onAuthToken: x,
                  onError: h,
                  onClose: t,
                }),
              }),
              (0, o.jsx)(i.Slide, {
                id: u.O.DISCORD_CONSENT,
                children: (0, o.jsx)(s.Z, {
                  authToken: T,
                  onContinue: R,
                  onError: h,
                  onClose: t,
                }),
              }),
              (0, o.jsx)(i.Slide, {
                id: u.O.ERROR,
                children: (0, o.jsx)(c.Z, { onContinue: R, onClose: t }),
              }),
              (0, o.jsx)(i.Slide, {
                id: u.O.SUCCESS,
                children: (0, o.jsx)(C.Z, { onClose: t }),
              }),
            ],
          }),
        });
      }
    },
    686494: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return C;
        },
      });
      var o = t(735250);
      t(470079);
      var i = t(212598),
        r = t(728151),
        s = t(981631),
        c = t(689938),
        l = t(344595),
        a = t(322539);
      function C(e) {
        let {
            isWaitingForConnection: n,
            onWaitingForConnection: t,
            expectedCallbackState: C,
            onAuthToken: u,
            onError: d,
            onClose: _,
          } = e,
          N = n
            ? (0, o.jsx)("img", {
                src: a,
                width: "168",
                height: "124",
                alt: "",
              })
            : (0, o.jsx)("img", {
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
        return (0, o.jsx)(i.t, {
          platformType: s.ABu.CRUNCHYROLL,
          isWaitingForConnection: n,
          onWaitingForConnection: t,
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
    573703: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return d;
        },
      });
      var o = t(735250);
      t(470079);
      var i = t(481060),
        r = t(63063),
        s = t(376340),
        c = t(981631),
        l = t(689938),
        a = t(623022),
        C = t(38920);
      function u() {
        return (0, o.jsx)("div", {
          className: a.__invalid_getCrunchyrollApp,
          children: (0, o.jsx)("div", {
            className: a.__invalid_getCrunchyrollAppBody,
            children: (0, o.jsx)(i.Text, {
              variant: "text-sm/medium",
              color: "header-secondary",
              children: (0, o.jsx)(i.Anchor, {
                href: r.Z.getArticleURL(c.BhN.CRUNCHYROLL_CONNECTION),
                children: l.Z.Messages.LEARN_MORE,
              }),
            }),
          }),
        });
      }
      function d(e) {
        let { onClose: n } = e;
        return (0, o.jsx)(s.L, {
          img: (0, o.jsx)("img", {
            src: C,
            width: "224",
            height: "104",
            alt: "",
          }),
          title: l.Z.Messages.CONNECT_CRUNCHYROLL_SUCCESS_TITLE,
          body: l.Z.Messages.CONNECT_CRUNCHYROLL_SUCCESS_BODY,
          content: (0, o.jsx)(u, {}),
          onClose: n,
        });
      }
    },
    879137: function (e, n, t) {
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
    623022: function (e, n, t) {
      e.exports = {};
    },
  },
]);
//# sourceMappingURL=8ae0df89092cc2388c45.js.map
