"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["10667"],
  {
    283554: function (n) {
      n.exports = "/assets/8d02f2df490fc033b322.svg";
    },
    124248: function (n) {
      n.exports = "/assets/245a150855a3afd36238.svg";
    },
    913045: function (n) {
      n.exports = "/assets/3b5b0c07ee8a7d0d8e7f.svg";
    },
    290661: function (n) {
      n.exports = "/assets/71f85d57bed43f14b7ac.svg";
    },
    428681: function (n, t, e) {
      e.d(t, {
        E: function () {
          return a;
        },
      });
      var i = e(200651);
      e(192379);
      var o = e(421580),
        r = e(159277),
        l = e(585183),
        c = e(981631),
        s = e(927923);
      function a(n) {
        let {
            platformType: t,
            authToken: e,
            onContinue: a,
            onError: d,
            onClose: u,
          } = n,
          C =
            t === c.ABu.PLAYSTATION_STAGING
              ? r.t.PLAYSTATION_STAGING_APPLICATION_ID
              : r.t.PLAYSTATION_APPLICATION_ID,
          f =
            t === c.ABu.PLAYSTATION_STAGING
              ? o.x.PLAYSTATION_STAGING
              : o.x.PLAYSTATION;
        return (0, i.jsx)(l.h, {
          platformType: t,
          clientId: C,
          scopes: s.KL,
          authToken: e,
          onContinue: a,
          onError: d,
          onClose: u,
          redirectUri: f,
        });
      }
    },
    42338: function (n, t, e) {
      e.d(t, {
        X: function () {
          return c;
        },
      });
      var i = e(200651);
      e(192379);
      var o = e(859097),
        r = e(981631),
        l = e(388032);
      function c(n) {
        let { onContinue: t, onClose: e, errorCode: c } = n,
          s =
            c === r.evJ.UNDER_MINIMUM_AGE
              ? l.intl.string(l.t["3dIn2N"])
              : l.intl.string(l.t.qE9nqK);
        return (0, i.jsx)(o.C, {
          title: l.intl.string(l.t.eY3qHR),
          body: s,
          onClose: e,
          onContinue: t,
        });
      }
    },
    569932: function (n, t, e) {
      e.d(t, {
        A: function () {
          return f;
        },
      });
      var i = e(200651);
      e(192379);
      var o = e(362470),
        r = e(961842),
        l = e(63063),
        c = e(921869),
        s = e(514161),
        a = e(981631),
        d = e(388032),
        u = e(913045);
      function C() {
        let n = [d.intl.string(d.t.xBZGTE), d.intl.string(d.t.z8Ude3)],
          t = [d.intl.string(d.t.z8Ude3)];
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(s.yC, {
              children: (0, i.jsx)(s.pT, {
                icon: (0, i.jsx)(r.Z, {}),
                title: d.intl.string(d.t.oElqNz),
                bulletPoints: n,
              }),
            }),
            (0, i.jsx)(s.yC, {
              children: (0, i.jsx)(s.pT, {
                icon: (0, i.jsx)(o.Z, {}),
                title: d.intl.string(d.t.fJyyQk),
                bulletPoints: t,
              }),
            }),
          ],
        });
      }
      function f(n) {
        let { platformType: t, onContinue: e, onClose: o } = n;
        return (0, i.jsx)(c.m, {
          platformType: t,
          headerConnect: d.intl.string(d.t.n2I5mJ),
          headerReconnect: d.intl.string(d.t["ZJ/vBg"]),
          body: d.intl.string(d.t.EVyQLS),
          onClose: o,
          onContinue: e,
          img: (0, i.jsx)("img", { src: u, width: 230, height: 138, alt: "" }),
          valueProps: (0, i.jsx)(C, {}),
          learnMoreLink: l.Z.getArticleURL(a.BhN.PS_CONNECTION),
        });
      }
    },
    253762: function (n, t, e) {
      e.r(t),
        e.d(t, {
          default: function () {
            return f;
          },
        });
      var i = e(200651);
      e(192379);
      var o = e(481060),
        r = e(864762),
        l = e(428681),
        c = e(42338),
        s = e(569932),
        a = e(555638),
        d = e(42011),
        u = e(798930),
        C = e(101319);
      function f(n) {
        let {
            transitionState: t,
            onClose: e,
            analyticsLocation: f,
            platformType: h,
          } = n,
          {
            slide: T,
            gotoNext: A,
            gotoError: p,
            handleWaitingForConnection: x,
            handleAuthToken: I,
            expectedCallbackState: P,
            callbackData: _,
            errorCode: v,
          } = (0, r.k)(f, h);
        return (0, i.jsx)(o.ModalRoot, {
          className: C.modal,
          transitionState: t,
          disableTrack: !0,
          children: (0, i.jsxs)(o.Slides, {
            activeSlide: T,
            width: 408,
            children: [
              (0, i.jsx)(o.Slide, {
                id: u.O.LANDING,
                children: (0, i.jsx)(s.A, {
                  platformType: h,
                  onContinue: A,
                  onClose: e,
                }),
              }),
              (0, i.jsx)(o.Slide, {
                id: u.O.PRE_CONNECT,
                children: (0, i.jsx)(a.A, {
                  platformType: h,
                  isWaitingForConnection: !1,
                  onWaitingForConnection: x,
                  onAuthToken: I,
                  onError: p,
                  onClose: e,
                }),
              }),
              (0, i.jsx)(o.Slide, {
                id: u.O.PRE_CONNECT_WAITING,
                children: (0, i.jsx)(a.A, {
                  platformType: h,
                  isWaitingForConnection: !0,
                  expectedCallbackState: P,
                  onAuthToken: I,
                  onError: p,
                  onClose: e,
                }),
              }),
              (0, i.jsx)(o.Slide, {
                id: u.O.DISCORD_CONSENT,
                children: (0, i.jsx)(l.E, {
                  platformType: h,
                  authToken: _,
                  onContinue: A,
                  onError: p,
                  onClose: e,
                }),
              }),
              (0, i.jsx)(o.Slide, {
                id: u.O.ERROR,
                children: (0, i.jsx)(c.X, {
                  onContinue: A,
                  onClose: e,
                  errorCode: v,
                }),
              }),
              (0, i.jsx)(o.Slide, {
                id: u.O.SUCCESS,
                children: (0, i.jsx)(d.W, { onClose: e }),
              }),
            ],
          }),
        });
      }
    },
    555638: function (n, t, e) {
      e.d(t, {
        A: function () {
          return a;
        },
      });
      var i = e(200651);
      e(192379);
      var o = e(212598),
        r = e(927923),
        l = e(388032),
        c = e(283554),
        s = e(124248);
      function a(n) {
        let {
            platformType: t,
            isWaitingForConnection: e,
            onWaitingForConnection: a,
            expectedCallbackState: d,
            onAuthToken: u,
            onError: C,
            onClose: f,
          } = n,
          h = e
            ? (0, i.jsx)("img", {
                src: s,
                width: "180",
                height: "125",
                alt: "",
              })
            : (0, i.jsx)("img", {
                src: c,
                width: "180",
                height: "111",
                alt: "",
              }),
          T = e ? l.intl.string(l.t.TTIocn) : l.intl.string(l.t.LDTnRk),
          A = e ? l.intl.string(l.t.MNmoKC) : l.intl.string(l.t.JA1He3);
        return (0, i.jsx)(o.t, {
          platformType: t,
          isWaitingForConnection: e,
          onWaitingForConnection: a,
          expectedCallbackState: d,
          onAuthToken: u,
          onError: C,
          onClose: f,
          img: h,
          title: T,
          body: A,
          redirectDestination: r.uu,
        });
      }
    },
    42011: function (n, t, e) {
      e.d(t, {
        W: function () {
          return c;
        },
      });
      var i = e(200651);
      e(192379);
      var o = e(376340),
        r = e(388032),
        l = e(290661);
      function c(n) {
        let { onClose: t } = n;
        return (0, i.jsx)(o.L, {
          img: (0, i.jsx)("img", {
            src: l,
            width: "241 ",
            height: "118",
            alt: "",
          }),
          title: r.intl.string(r.t.e6SOl5),
          body: r.intl.string(r.t.QjAZAQ),
          onClose: t,
        });
      }
    },
    362470: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = e(200651);
      e(192379);
      var o = e(325767);
      function r(n) {
        let {
          width: t = 24,
          height: e = 24,
          color: r = "currentColor",
          foreground: l,
          ...c
        } = n;
        return (0, i.jsx)("svg", {
          ...(0, o.Z)(c),
          width: t,
          height: e,
          viewBox: "0 0 24 25",
          children: (0, i.jsx)("path", {
            className: l,
            fill: r,
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M17.9598 11.9353C17.4729 11.6167 16.8191 11.2112 15.9803 11.2112C14.5817 11.2112 13.3483 12.1684 12.932 13.4612H0.525391L3.90301 7.61133H23.4748L21.3882 11.2261C21.2883 11.2162 21.1876 11.2112 21.0863 11.2112C20.2471 11.2112 19.5928 11.6167 19.1063 11.9353H17.9598ZM15.7138 18.3989C16.2002 17.8094 16.5066 17.2843 16.8108 16.7205H20.2546C20.5588 17.2843 20.8657 17.8094 21.3517 18.3989C21.6203 18.7193 22.1464 18.8611 22.4731 18.8611C22.7232 18.8611 23.5251 18.8611 23.4725 18.025C23.423 17.233 22.9077 14.1051 22.9041 14.0862C22.7421 13.2312 21.9515 12.5612 21.0862 12.5612C20.6117 12.5612 20.1933 12.8362 19.7794 13.1083C19.6878 13.1686 19.5963 13.2287 19.5045 13.2857H17.561C17.469 13.2287 17.3775 13.1684 17.2857 13.1081C16.872 12.8361 16.454 12.5612 15.9793 12.5612C15.1139 12.5612 14.3237 13.2312 14.1613 14.0862C14.1582 14.1051 13.6429 17.233 13.5934 18.025C13.5403 18.8611 14.3426 18.8611 14.5924 18.8611C14.9191 18.8611 15.446 18.7193 15.7138 18.3989Z",
            "aria-hidden": !0,
          }),
        });
      }
    },
    961842: function (n, t, e) {
      e.d(t, {
        Z: function () {
          return r;
        },
      });
      var i = e(200651);
      e(192379);
      var o = e(325767);
      function r(n) {
        let {
          width: t = 24,
          height: e = 24,
          color: r = "currentColor",
          foreground: l,
          ...c
        } = n;
        return (0, i.jsxs)("svg", {
          ...(0, o.Z)(c),
          width: t,
          height: e,
          viewBox: "0 0 24 25",
          children: [
            (0, i.jsx)("path", {
              className: l,
              fill: r,
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7.72934 2.36505C7.91813 1.79235 8.34289 1.84008 8.76766 1.8878C9.99478 2.03098 11.2219 2.2696 12.449 2.41277C13.1098 2.50822 13.3457 2.84229 13.3929 3.51044C13.4873 7.66249 13.4873 11.8145 13.9593 15.9189C14.0065 16.2529 14.1009 16.6824 13.6289 16.8256C11.7882 17.446 11.3635 19.1164 10.9859 20.739C10.4195 23.2685 10.4667 23.2685 8.01252 23.698C5.93587 24.032 5.93587 24.032 6.03026 21.9322C6.36064 15.5371 6.97419 9.18968 7.68214 2.84229C7.58775 2.69912 7.58775 2.55595 7.72934 2.36505Z",
              "aria-hidden": !0,
            }),
            (0, i.jsx)("path", {
              className: l,
              fill: r,
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M21 22.2862C21 22.4246 21 22.7474 20.9042 23.0703C20.8083 23.5316 20.4729 23.7622 19.9937 23.8545C19.4667 23.9006 19.1312 23.7161 19.0354 23.2548C18.7479 21.9633 17.7896 21.8249 16.5916 21.8249C15.3937 21.8249 14.2437 21.7788 13.9562 23.2548C13.8604 23.67 13.6208 23.9006 13.0937 23.8545C12.5666 23.8083 12.1354 23.5777 12.0874 23.0703C11.7999 21.3637 12.2312 19.7493 13.2374 18.3194C13.5729 17.8582 14.1958 17.7659 14.7229 17.9504C15.8729 18.2733 17.0229 18.2733 18.2208 17.9504C19.1792 17.6737 19.8021 18.181 20.1854 18.9652C20.7125 19.9338 21 20.9486 21 22.2862Z",
              "aria-hidden": !0,
            }),
            (0, i.jsx)("path", {
              className: l,
              fill: r,
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7 2.14794C7 2.28884 7 2.47672 7 2.61763C4.78283 2.57066 3.89596 3.4161 3.9403 5.81153C4.02899 11.0721 4.20636 16.2856 4.29505 21.5462C4.29505 21.9689 4.42808 22.4386 4.11767 22.8613C3.80727 22.6265 3.89596 22.3447 3.89596 22.1098C3.85161 15.8629 3.67424 9.61603 3.05343 3.36913C2.9204 1.81915 2.9204 1.77218 4.47242 1.91309C5.31495 2.00703 6.15747 2.10097 7 2.14794Z",
              "aria-hidden": !0,
            }),
          ],
        });
      }
    },
    421580: function (n, t, e) {
      var i, o;
      e.d(t, {
        x: function () {
          return i;
        },
      }),
        e(47120),
        ((o = i || (i = {})).PLAYSTATION =
          "https://discord.com/connections/playstation/link"),
        (o.PLAYSTATION_STAGING =
          "https://discord.com/connections/playstation-stg/link");
    },
    159277: function (n, t, e) {
      var i, o;
      e.d(t, {
        M: function () {
          return r;
        },
        t: function () {
          return i;
        },
      }),
        e(47120),
        ((o = i || (i = {})).XBOX_APPLICATION_ID = "622174530214821906"),
        (o.PLAYSTATION_APPLICATION_ID = "1008890872156405890"),
        (o.PLAYSTATION_STAGING_APPLICATION_ID = "984193235868065795");
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
  },
]);
//# sourceMappingURL=f99a5c5528d02e1ff34a.js.map
