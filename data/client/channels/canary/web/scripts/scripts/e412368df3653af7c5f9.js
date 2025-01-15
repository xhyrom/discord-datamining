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
          return s;
        },
      });
      var o = e(200651);
      e(192379);
      var i = e(585183),
        r = e(728151),
        c = e(981631);
      function s(n) {
        let { authToken: t, onContinue: e, onError: s, onClose: l } = n;
        return (0, o.jsx)(i.h, {
          platformType: c.ABu.CRUNCHYROLL,
          clientId: r.sp,
          scopes: r.Ii,
          authToken: t,
          onContinue: e,
          onError: s,
          onClose: l,
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
          return d;
        },
      });
      var o = e(200651),
        i = e(192379),
        r = e(481060),
        c = e(63063),
        s = e(921869),
        l = e(981631),
        a = e(388032),
        u = e(233820);
      function d(n) {
        let { onContinue: t, onClose: e } = n,
          d = c.Z.getArticleURL(l.BhN.CRUNCHYROLL_CONNECTION),
          C = i.useMemo(
            () => [{ label: a.intl.string(a.t["2TXHQU"]), icon: r.TvIcon }],
            [],
          );
        return (0, o.jsx)(s.m, {
          platformType: l.ABu.CRUNCHYROLL,
          headerConnect: a.intl.string(a.t["Da+3ND"]),
          body: a.intl.string(a.t.MaPpPD),
          learnMoreLink: d,
          onClose: e,
          onContinue: t,
          img: (0, o.jsx)("img", { src: u, width: 234, height: 152, alt: "" }),
          valueProps: C,
        });
      }
    },
    745367: function (n, t, e) {
      e.r(t),
        e.d(t, {
          default: function () {
            return p;
          },
        });
      var o = e(200651);
      e(192379);
      var i = e(481060),
        r = e(864762),
        c = e(779341),
        s = e(642566),
        l = e(742699),
        a = e(686494),
        u = e(573703),
        d = e(798930),
        C = e(981631),
        h = e(337530);
      function p(n) {
        let { transitionState: t, onClose: e, analyticsLocation: p } = n,
          {
            slide: x,
            gotoNext: f,
            gotoError: g,
            handleWaitingForConnection: v,
            handleAuthToken: _,
            expectedCallbackState: j,
            callbackData: N,
          } = (0, r.k)(p, C.ABu.CRUNCHYROLL);
        return (0, o.jsx)(i.ModalRoot, {
          className: h.modal,
          transitionState: t,
          disableTrack: !0,
          children: (0, o.jsxs)(i.Slides, {
            activeSlide: x,
            width: 408,
            children: [
              (0, o.jsx)(i.Slide, {
                id: d.O.LANDING,
                children: (0, o.jsx)(l.Z, { onContinue: f, onClose: e }),
              }),
              (0, o.jsx)(i.Slide, {
                id: d.O.PRE_CONNECT,
                children: (0, o.jsx)(a.Z, {
                  isWaitingForConnection: !1,
                  onWaitingForConnection: v,
                  onAuthToken: _,
                  onError: g,
                  onClose: e,
                }),
              }),
              (0, o.jsx)(i.Slide, {
                id: d.O.PRE_CONNECT_WAITING,
                children: (0, o.jsx)(a.Z, {
                  isWaitingForConnection: !0,
                  expectedCallbackState: j,
                  onAuthToken: _,
                  onError: g,
                  onClose: e,
                }),
              }),
              (0, o.jsx)(i.Slide, {
                id: d.O.DISCORD_CONSENT,
                children: (0, o.jsx)(c.Z, {
                  authToken: N,
                  onContinue: f,
                  onError: g,
                  onClose: e,
                }),
              }),
              (0, o.jsx)(i.Slide, {
                id: d.O.ERROR,
                children: (0, o.jsx)(s.Z, { onContinue: f, onClose: e }),
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
        s = e(388032),
        l = e(344595),
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
          p = t
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
          x = t ? s.intl.string(s.t.tZ6ze3) : s.intl.string(s.t.siPkNj),
          f = t ? s.intl.string(s.t.VgWnwM) : s.intl.string(s.t.oS4NEB);
        return (0, o.jsx)(i.t, {
          platformType: c.ABu.CRUNCHYROLL,
          isWaitingForConnection: t,
          onWaitingForConnection: e,
          expectedCallbackState: u,
          onAuthToken: d,
          onError: C,
          onClose: h,
          img: p,
          title: x,
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
        s = e(981631),
        l = e(388032),
        a = e(319594),
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
                href: r.Z.getArticleURL(s.BhN.CRUNCHYROLL_CONNECTION),
                children: l.intl.string(l.t.hvVgAQ),
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
          title: l.intl.string(l.t.Fnvxvr),
          body: l.intl.string(l.t.YwXcen),
          content: (0, o.jsx)(d, {}),
          onClose: t,
        });
      }
    },
    337530: function (n, t, e) {
      n.exports = {
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
    319594: function (n, t, e) {
      n.exports = {};
    },
  },
]);
//# sourceMappingURL=e412368df3653af7c5f9.js.map
