"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["10667"],
  {
    283554: function (e) {
      e.exports = "/assets/8d02f2df490fc033b322.svg";
    },
    124248: function (e) {
      e.exports = "/assets/245a150855a3afd36238.svg";
    },
    913045: function (e) {
      e.exports = "/assets/3b5b0c07ee8a7d0d8e7f.svg";
    },
    290661: function (e) {
      e.exports = "/assets/71f85d57bed43f14b7ac.svg";
    },
    428681: function (e, n, t) {
      t.d(n, {
        E: function () {
          return a;
        },
      });
      var o = t(735250);
      t(470079);
      var i = t(421580),
        s = t(159277),
        r = t(585183),
        l = t(981631),
        c = t(927923);
      function a(e) {
        let {
            platformType: n,
            authToken: t,
            onContinue: a,
            onError: C,
            onClose: u,
          } = e,
          d =
            n === l.ABu.PLAYSTATION_STAGING
              ? s.t.PLAYSTATION_STAGING_APPLICATION_ID
              : s.t.PLAYSTATION_APPLICATION_ID,
          _ =
            n === l.ABu.PLAYSTATION_STAGING
              ? i.x.PLAYSTATION_STAGING
              : i.x.PLAYSTATION;
        return (0, o.jsx)(r.h, {
          platformType: n,
          clientId: d,
          scopes: c.KL,
          authToken: t,
          onContinue: a,
          onError: C,
          onClose: u,
          redirectUri: _,
        });
      }
    },
    42338: function (e, n, t) {
      t.d(n, {
        X: function () {
          return l;
        },
      });
      var o = t(735250);
      t(470079);
      var i = t(859097),
        s = t(981631),
        r = t(689938);
      function l(e) {
        let { onContinue: n, onClose: t, errorCode: l } = e,
          c =
            l === s.evJ.UNDER_MINIMUM_AGE
              ? r.Z.Messages
                  .CONNECTED_ACCOUNT_VERIFY_FAILURE_PSN_CHILD_ACCOUNT_DETAILS
              : r.Z.Messages.CONNECT_PS_ERROR_BODY;
        return (0, o.jsx)(i.C, {
          title: r.Z.Messages.CONNECT_CONSOLE_ERROR_TITLE,
          body: c,
          onClose: t,
          onContinue: n,
        });
      }
    },
    569932: function (e, n, t) {
      t.d(n, {
        A: function () {
          return _;
        },
      });
      var o = t(735250);
      t(470079);
      var i = t(362470),
        s = t(961842),
        r = t(63063),
        l = t(921869),
        c = t(514161),
        a = t(981631),
        C = t(689938),
        u = t(913045);
      function d() {
        let e = [
            C.Z.Messages.PS_VALUE_PROP_VOICE,
            C.Z.Messages.PS_VALUE_PROP_GAME,
          ],
          n = [C.Z.Messages.PS_VALUE_PROP_GAME];
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(c.yC, {
              children: (0, o.jsx)(c.pT, {
                icon: (0, o.jsx)(s.Z, {}),
                title: C.Z.Messages.PS5,
                bulletPoints: e,
              }),
            }),
            (0, o.jsx)(c.yC, {
              children: (0, o.jsx)(c.pT, {
                icon: (0, o.jsx)(i.Z, {}),
                title: C.Z.Messages.PS4,
                bulletPoints: n,
              }),
            }),
          ],
        });
      }
      function _(e) {
        let { platformType: n, onContinue: t, onClose: i } = e;
        return (0, o.jsx)(l.m, {
          platformType: n,
          headerConnect: C.Z.Messages.CONNECT_PS_LANDING_TITLE,
          headerReconnect: C.Z.Messages.RECONNECT_PS_LANDING_TITLE,
          body: C.Z.Messages.CONNECT_PS_LANDING_BODY,
          onClose: i,
          onContinue: t,
          img: (0, o.jsx)("img", { src: u, width: 230, height: 138, alt: "" }),
          valueProps: (0, o.jsx)(d, {}),
          learnMoreLink: r.Z.getArticleURL(a.BhN.PS_CONNECTION),
        });
      }
    },
    253762: function (e, n, t) {
      t.r(n),
        t.d(n, {
          default: function () {
            return _;
          },
        });
      var o = t(735250);
      t(470079);
      var i = t(481060),
        s = t(864762),
        r = t(428681),
        l = t(42338),
        c = t(569932),
        a = t(555638),
        C = t(42011),
        u = t(798930),
        d = t(879137);
      function _(e) {
        let {
            transitionState: n,
            onClose: t,
            analyticsLocation: _,
            platformType: T,
          } = e,
          {
            slide: N,
            gotoNext: P,
            gotoError: A,
            handleWaitingForConnection: I,
            handleAuthToken: f,
            expectedCallbackState: S,
            callbackData: h,
            errorCode: O,
          } = (0, s.k)(_, T);
        return (0, o.jsx)(i.ModalRoot, {
          className: d.modal,
          transitionState: n,
          disableTrack: !0,
          children: (0, o.jsxs)(i.Slides, {
            activeSlide: N,
            width: 408,
            children: [
              (0, o.jsx)(i.Slide, {
                id: u.O.LANDING,
                children: (0, o.jsx)(c.A, {
                  platformType: T,
                  onContinue: P,
                  onClose: t,
                }),
              }),
              (0, o.jsx)(i.Slide, {
                id: u.O.PRE_CONNECT,
                children: (0, o.jsx)(a.A, {
                  platformType: T,
                  isWaitingForConnection: !1,
                  onWaitingForConnection: I,
                  onAuthToken: f,
                  onError: A,
                  onClose: t,
                }),
              }),
              (0, o.jsx)(i.Slide, {
                id: u.O.PRE_CONNECT_WAITING,
                children: (0, o.jsx)(a.A, {
                  platformType: T,
                  isWaitingForConnection: !0,
                  expectedCallbackState: S,
                  onAuthToken: f,
                  onError: A,
                  onClose: t,
                }),
              }),
              (0, o.jsx)(i.Slide, {
                id: u.O.DISCORD_CONSENT,
                children: (0, o.jsx)(r.E, {
                  platformType: T,
                  authToken: h,
                  onContinue: P,
                  onError: A,
                  onClose: t,
                }),
              }),
              (0, o.jsx)(i.Slide, {
                id: u.O.ERROR,
                children: (0, o.jsx)(l.X, {
                  onContinue: P,
                  onClose: t,
                  errorCode: O,
                }),
              }),
              (0, o.jsx)(i.Slide, {
                id: u.O.SUCCESS,
                children: (0, o.jsx)(C.W, { onClose: t }),
              }),
            ],
          }),
        });
      }
    },
    555638: function (e, n, t) {
      t.d(n, {
        A: function () {
          return a;
        },
      });
      var o = t(735250);
      t(470079);
      var i = t(212598),
        s = t(927923),
        r = t(689938),
        l = t(283554),
        c = t(124248);
      function a(e) {
        let {
            platformType: n,
            isWaitingForConnection: t,
            onWaitingForConnection: a,
            expectedCallbackState: C,
            onAuthToken: u,
            onError: d,
            onClose: _,
          } = e,
          T = t
            ? (0, o.jsx)("img", {
                src: c,
                width: "180",
                height: "125",
                alt: "",
              })
            : (0, o.jsx)("img", {
                src: l,
                width: "180",
                height: "111",
                alt: "",
              }),
          N = t
            ? r.Z.Messages.CONSOLE_PRECONNECT_TITLE_WAITING
            : r.Z.Messages.PS_PRECONNECT_TITLE,
          P = t
            ? r.Z.Messages.PS_PRECONNECT_BODY_WAITING
            : r.Z.Messages.PS_PRECONNECT_BODY;
        return (0, o.jsx)(i.t, {
          platformType: n,
          isWaitingForConnection: t,
          onWaitingForConnection: a,
          expectedCallbackState: C,
          onAuthToken: u,
          onError: d,
          onClose: _,
          img: T,
          title: N,
          body: P,
          redirectDestination: s.uu,
        });
      }
    },
    42011: function (e, n, t) {
      t.d(n, {
        W: function () {
          return l;
        },
      });
      var o = t(735250);
      t(470079);
      var i = t(376340),
        s = t(689938),
        r = t(290661);
      function l(e) {
        let { onClose: n } = e;
        return (0, o.jsx)(i.L, {
          img: (0, o.jsx)("img", {
            src: r,
            width: "241 ",
            height: "118",
            alt: "",
          }),
          title: s.Z.Messages.PS_LINK_SUCCESS_TITLE,
          body: s.Z.Messages.PS_LINK_SUCCESS_BODY,
          onClose: n,
        });
      }
    },
    362470: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var o = t(735250);
      t(470079);
      var i = t(325767);
      function s(e) {
        let {
          width: n = 24,
          height: t = 24,
          color: s = "currentColor",
          foreground: r,
          ...l
        } = e;
        return (0, o.jsx)("svg", {
          ...(0, i.Z)(l),
          width: n,
          height: t,
          viewBox: "0 0 24 25",
          children: (0, o.jsx)("path", {
            className: r,
            fill: s,
            fillRule: "evenodd",
            clipRule: "evenodd",
            d: "M17.9598 11.9353C17.4729 11.6167 16.8191 11.2112 15.9803 11.2112C14.5817 11.2112 13.3483 12.1684 12.932 13.4612H0.525391L3.90301 7.61133H23.4748L21.3882 11.2261C21.2883 11.2162 21.1876 11.2112 21.0863 11.2112C20.2471 11.2112 19.5928 11.6167 19.1063 11.9353H17.9598ZM15.7138 18.3989C16.2002 17.8094 16.5066 17.2843 16.8108 16.7205H20.2546C20.5588 17.2843 20.8657 17.8094 21.3517 18.3989C21.6203 18.7193 22.1464 18.8611 22.4731 18.8611C22.7232 18.8611 23.5251 18.8611 23.4725 18.025C23.423 17.233 22.9077 14.1051 22.9041 14.0862C22.7421 13.2312 21.9515 12.5612 21.0862 12.5612C20.6117 12.5612 20.1933 12.8362 19.7794 13.1083C19.6878 13.1686 19.5963 13.2287 19.5045 13.2857H17.561C17.469 13.2287 17.3775 13.1684 17.2857 13.1081C16.872 12.8361 16.454 12.5612 15.9793 12.5612C15.1139 12.5612 14.3237 13.2312 14.1613 14.0862C14.1582 14.1051 13.6429 17.233 13.5934 18.025C13.5403 18.8611 14.3426 18.8611 14.5924 18.8611C14.9191 18.8611 15.446 18.7193 15.7138 18.3989Z",
            "aria-hidden": !0,
          }),
        });
      }
    },
    961842: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return s;
        },
      });
      var o = t(735250);
      t(470079);
      var i = t(325767);
      function s(e) {
        let {
          width: n = 24,
          height: t = 24,
          color: s = "currentColor",
          foreground: r,
          ...l
        } = e;
        return (0, o.jsxs)("svg", {
          ...(0, i.Z)(l),
          width: n,
          height: t,
          viewBox: "0 0 24 25",
          children: [
            (0, o.jsx)("path", {
              className: r,
              fill: s,
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7.72934 2.36505C7.91813 1.79235 8.34289 1.84008 8.76766 1.8878C9.99478 2.03098 11.2219 2.2696 12.449 2.41277C13.1098 2.50822 13.3457 2.84229 13.3929 3.51044C13.4873 7.66249 13.4873 11.8145 13.9593 15.9189C14.0065 16.2529 14.1009 16.6824 13.6289 16.8256C11.7882 17.446 11.3635 19.1164 10.9859 20.739C10.4195 23.2685 10.4667 23.2685 8.01252 23.698C5.93587 24.032 5.93587 24.032 6.03026 21.9322C6.36064 15.5371 6.97419 9.18968 7.68214 2.84229C7.58775 2.69912 7.58775 2.55595 7.72934 2.36505Z",
              "aria-hidden": !0,
            }),
            (0, o.jsx)("path", {
              className: r,
              fill: s,
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M21 22.2862C21 22.4246 21 22.7474 20.9042 23.0703C20.8083 23.5316 20.4729 23.7622 19.9937 23.8545C19.4667 23.9006 19.1312 23.7161 19.0354 23.2548C18.7479 21.9633 17.7896 21.8249 16.5916 21.8249C15.3937 21.8249 14.2437 21.7788 13.9562 23.2548C13.8604 23.67 13.6208 23.9006 13.0937 23.8545C12.5666 23.8083 12.1354 23.5777 12.0874 23.0703C11.7999 21.3637 12.2312 19.7493 13.2374 18.3194C13.5729 17.8582 14.1958 17.7659 14.7229 17.9504C15.8729 18.2733 17.0229 18.2733 18.2208 17.9504C19.1792 17.6737 19.8021 18.181 20.1854 18.9652C20.7125 19.9338 21 20.9486 21 22.2862Z",
              "aria-hidden": !0,
            }),
            (0, o.jsx)("path", {
              className: r,
              fill: s,
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M7 2.14794C7 2.28884 7 2.47672 7 2.61763C4.78283 2.57066 3.89596 3.4161 3.9403 5.81153C4.02899 11.0721 4.20636 16.2856 4.29505 21.5462C4.29505 21.9689 4.42808 22.4386 4.11767 22.8613C3.80727 22.6265 3.89596 22.3447 3.89596 22.1098C3.85161 15.8629 3.67424 9.61603 3.05343 3.36913C2.9204 1.81915 2.9204 1.77218 4.47242 1.91309C5.31495 2.00703 6.15747 2.10097 7 2.14794Z",
              "aria-hidden": !0,
            }),
          ],
        });
      }
    },
    421580: function (e, n, t) {
      var o, i;
      t.d(n, {
        x: function () {
          return o;
        },
      }),
        t(47120),
        ((i = o || (o = {})).PLAYSTATION =
          "https://discord.com/connections/playstation/link"),
        (i.PLAYSTATION_STAGING =
          "https://discord.com/connections/playstation-stg/link");
    },
    159277: function (e, n, t) {
      var o, i;
      t.d(n, {
        M: function () {
          return s;
        },
        t: function () {
          return o;
        },
      }),
        t(47120),
        ((i = o || (o = {})).XBOX_APPLICATION_ID = "622174530214821906"),
        (i.PLAYSTATION_APPLICATION_ID = "1008890872156405890"),
        (i.PLAYSTATION_STAGING_APPLICATION_ID = "984193235868065795");
      let s = {
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
  },
]);
//# sourceMappingURL=d4a397f85c13c6f28d21.js.map
