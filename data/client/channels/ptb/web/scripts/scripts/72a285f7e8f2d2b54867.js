"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["4419"],
  {
    344595: function (n) {
      n.exports = "/assets/78bbf493c57d061d5054.png";
    },
    322539: function (n) {
      n.exports = "/assets/d8c1874996b33c21102b.png";
    },
    233820: function (n) {
      n.exports = "/assets/b1f5b6a02d05ba087659.png";
    },
    38920: function (n) {
      n.exports = "/assets/efda212f90bebc3b6ba7.png";
    },
    779341: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return l;
        },
      });
      var o = e(200651);
      e(192379);
      var i = e(585183),
        r = e(728151),
        c = e(981631);
      function l(n) {
        let { authToken: t, onContinue: e, onError: l, onClose: s } = n;
        return (0, o.jsx)(i.h, {
          platformType: c.ABu.CRUNCHYROLL,
          clientId: r.sp,
          scopes: r.Ii,
          authToken: t,
          onContinue: e,
          onError: l,
          onClose: s,
        });
      }
    },
    642566: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return c;
        },
      });
      var o = e(200651);
      e(192379);
      var i = e(859097),
        r = e(388032);
      function c(n) {
        let { onContinue: t, onClose: e } = n;
        return (0, o.jsx)(i.C, {
          title: r.intl.string(r.t["8YK70d"]),
          body: r.intl.string(r.t.moyYLS),
          onClose: e,
          onContinue: t,
        });
      }
    },
    742699: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return C;
        },
      });
      var o = e(200651);
      e(192379);
      var i = e(481060),
        r = e(63063),
        c = e(921869),
        l = e(514161),
        s = e(981631),
        a = e(388032),
        u = e(233820);
      function d() {
        return (0, o.jsx)(l.yC, {
          children: (0, o.jsx)(l.Ux, {
            text: a.intl.string(a.t["2TXHQU"]),
            children: (0, o.jsx)(i.TvIcon, {
              size: "md",
              color: "currentColor",
            }),
          }),
        });
      }
      function C(n) {
        let { onContinue: t, onClose: e } = n,
          i = r.Z.getArticleURL(s.BhN.CRUNCHYROLL_CONNECTION);
        return (0, o.jsx)(c.m, {
          platformType: s.ABu.CRUNCHYROLL,
          headerConnect: a.intl.string(a.t["Da+3ND"]),
          body: a.intl.string(a.t.MaPpPD),
          learnMoreLink: i,
          onClose: e,
          onContinue: t,
          img: (0, o.jsx)("img", { src: u, width: 234, height: 152, alt: "" }),
          valueProps: (0, o.jsx)(d, {}),
        });
      }
    },
    745367: function (n, t, e) {
      e.r(t),
        e.d(t, {
          default: function () {
            return x;
          },
        });
      var o = e(200651);
      e(192379);
      var i = e(481060),
        r = e(864762),
        c = e(779341),
        l = e(642566),
        s = e(742699),
        a = e(686494),
        u = e(573703),
        d = e(798930),
        C = e(981631),
        h = e(101319);
      function x(n) {
        let { transitionState: t, onClose: e, analyticsLocation: x } = n,
          {
            slide: p,
            gotoNext: f,
            gotoError: g,
            handleWaitingForConnection: _,
            handleAuthToken: j,
            expectedCallbackState: b,
            callbackData: v,
          } = (0, r.k)(x, C.ABu.CRUNCHYROLL);
        return (0, o.jsx)(i.ModalRoot, {
          className: h.modal,
          transitionState: t,
          disableTrack: !0,
          children: (0, o.jsxs)(i.Slides, {
            activeSlide: p,
            width: 408,
            children: [
              (0, o.jsx)(i.Slide, {
                id: d.O.LANDING,
                children: (0, o.jsx)(s.Z, { onContinue: f, onClose: e }),
              }),
              (0, o.jsx)(i.Slide, {
                id: d.O.PRE_CONNECT,
                children: (0, o.jsx)(a.Z, {
                  isWaitingForConnection: !1,
                  onWaitingForConnection: _,
                  onAuthToken: j,
                  onError: g,
                  onClose: e,
                }),
              }),
              (0, o.jsx)(i.Slide, {
                id: d.O.PRE_CONNECT_WAITING,
                children: (0, o.jsx)(a.Z, {
                  isWaitingForConnection: !0,
                  expectedCallbackState: b,
                  onAuthToken: j,
                  onError: g,
                  onClose: e,
                }),
              }),
              (0, o.jsx)(i.Slide, {
                id: d.O.DISCORD_CONSENT,
                children: (0, o.jsx)(c.Z, {
                  authToken: v,
                  onContinue: f,
                  onError: g,
                  onClose: e,
                }),
              }),
              (0, o.jsx)(i.Slide, {
                id: d.O.ERROR,
                children: (0, o.jsx)(l.Z, { onContinue: f, onClose: e }),
              }),
              (0, o.jsx)(i.Slide, {
                id: d.O.SUCCESS,
                children: (0, o.jsx)(u.Z, { onClose: e }),
              }),
            ],
          }),
        });
      }
    },
    686494: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return u;
        },
      });
      var o = e(200651);
      e(192379);
      var i = e(212598),
        r = e(728151),
        c = e(981631),
        l = e(388032),
        s = e(344595),
        a = e(322539);
      function u(n) {
        let {
            isWaitingForConnection: t,
            onWaitingForConnection: e,
            expectedCallbackState: u,
            onAuthToken: d,
            onError: C,
            onClose: h,
          } = n,
          x = t
            ? (0, o.jsx)("img", {
                src: a,
                width: "168",
                height: "124",
                alt: "",
              })
            : (0, o.jsx)("img", {
                src: s,
                width: "152",
                height: "123",
                alt: "",
              }),
          p = t ? l.intl.string(l.t.tZ6ze3) : l.intl.string(l.t.siPkNj),
          f = t ? l.intl.string(l.t.VgWnwM) : l.intl.string(l.t.oS4NEB);
        return (0, o.jsx)(i.t, {
          platformType: c.ABu.CRUNCHYROLL,
          isWaitingForConnection: t,
          onWaitingForConnection: e,
          expectedCallbackState: u,
          onAuthToken: d,
          onError: C,
          onClose: h,
          img: x,
          title: p,
          body: f,
          redirectDestination: r.pY,
        });
      }
    },
    573703: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return C;
        },
      });
      var o = e(200651);
      e(192379);
      var i = e(481060),
        r = e(63063),
        c = e(376340),
        l = e(981631),
        s = e(388032),
        a = e(668776),
        u = e(38920);
      function d() {
        return (0, o.jsx)("div", {
          className: a.__invalid_getCrunchyrollApp,
          children: (0, o.jsx)("div", {
            className: a.__invalid_getCrunchyrollAppBody,
            children: (0, o.jsx)(i.Text, {
              variant: "text-sm/medium",
              color: "header-secondary",
              children: (0, o.jsx)(i.Anchor, {
                href: r.Z.getArticleURL(l.BhN.CRUNCHYROLL_CONNECTION),
                children: s.intl.string(s.t.hvVgAQ),
              }),
            }),
          }),
        });
      }
      function C(n) {
        let { onClose: t } = n;
        return (0, o.jsx)(c.L, {
          img: (0, o.jsx)("img", {
            src: u,
            width: "224",
            height: "104",
            alt: "",
          }),
          title: s.intl.string(s.t.Fnvxvr),
          body: s.intl.string(s.t.YwXcen),
          content: (0, o.jsx)(d, {}),
          onClose: t,
        });
      }
    },
    101319: function (n, t, e) {
      n.exports = {
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
    668776: function (n, t, e) {
      n.exports = {};
    },
  },
]);
//# sourceMappingURL=72a285f7e8f2d2b54867.js.map
