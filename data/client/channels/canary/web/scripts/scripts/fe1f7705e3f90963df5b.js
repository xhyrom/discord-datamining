"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["10667"],
  {
    428681: function (n, t, e) {
      e.d(t, {
        E: function () {
          return a;
        },
      });
      var o = e(200651);
      e(192379);
      var i = e(421580),
        c = e(159277),
        r = e(585183),
        s = e(981631),
        l = e(927923);
      function a(n) {
        let {
            platformType: t,
            authToken: e,
            onContinue: a,
            onError: d,
            onClose: u,
          } = n,
          p =
            t === s.ABu.PLAYSTATION_STAGING
              ? c.t.PLAYSTATION_STAGING_APPLICATION_ID
              : c.t.PLAYSTATION_APPLICATION_ID,
          A =
            t === s.ABu.PLAYSTATION_STAGING
              ? i.x.PLAYSTATION_STAGING
              : i.x.PLAYSTATION;
        return (0, o.jsx)(r.h, {
          platformType: t,
          clientId: p,
          scopes: l.KL,
          authToken: e,
          onContinue: a,
          onError: d,
          onClose: u,
          redirectUri: A,
        });
      }
    },
    42338: function (n, t, e) {
      e.d(t, {
        X: function () {
          return s;
        },
      });
      var o = e(200651);
      e(192379);
      var i = e(859097),
        c = e(981631),
        r = e(388032);
      function s(n) {
        let { onContinue: t, onClose: e, errorCode: s } = n,
          l =
            s === c.evJ.UNDER_MINIMUM_AGE
              ? r.intl.string(r.t["3dIn2N"])
              : r.intl.string(r.t.qE9nqK);
        return (0, o.jsx)(i.C, {
          title: r.intl.string(r.t.eY3qHR),
          body: l,
          onClose: e,
          onContinue: t,
        });
      }
    },
    569932: function (n, t, e) {
      e.d(t, {
        A: function () {
          return u;
        },
      });
      var o = e(200651),
        i = e(192379),
        c = e(481060),
        r = e(63063),
        s = e(921869),
        l = e(981631),
        a = e(388032),
        d = e(660025);
      function u(n) {
        let { platformType: t, onContinue: e, onClose: u } = n,
          p = i.useMemo(
            () => [
              {
                label: a.intl.string(a.t["+eJP7u"]),
                subLabel: a.intl.string(a.t["+0VIUl"]),
                icon: c.VoiceNormalIcon,
              },
              { label: a.intl.string(a.t.ZH4QFR), icon: c.GameControllerIcon },
            ],
            [],
          ),
          A = r.Z.getArticleURL(l.BhN.PS_CONNECTION),
          T = a.intl.format(a.t.kqZQNT, { helpdeskArticleUrl: A });
        return (0, o.jsx)(s.m, {
          platformType: t,
          headerConnect: a.intl.string(a.t.xAWHOz),
          headerReconnect: a.intl.string(a.t["ZJ/vBg"]),
          body: T,
          onClose: u,
          onContinue: e,
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
    253762: function (n, t, e) {
      e.r(t),
        e.d(t, {
          default: function () {
            return A;
          },
        });
      var o = e(200651);
      e(192379);
      var i = e(481060),
        c = e(864762),
        r = e(428681),
        s = e(42338),
        l = e(569932),
        a = e(555638),
        d = e(42011),
        u = e(798930),
        p = e(337530);
      function A(n) {
        let {
            transitionState: t,
            onClose: e,
            analyticsLocation: A,
            platformType: T,
          } = n,
          {
            slide: f,
            gotoNext: C,
            gotoError: I,
            handleWaitingForConnection: h,
            handleAuthToken: _,
            expectedCallbackState: N,
            callbackData: P,
            errorCode: S,
          } = (0, c.k)(A, T);
        return (0, o.jsx)(i.ModalRoot, {
          className: p.modal,
          transitionState: t,
          disableTrack: !0,
          children: (0, o.jsxs)(i.Slides, {
            activeSlide: f,
            width: 408,
            children: [
              (0, o.jsx)(i.Slide, {
                id: u.O.LANDING,
                children: (0, o.jsx)(l.A, {
                  platformType: T,
                  onContinue: C,
                  onClose: e,
                }),
              }),
              (0, o.jsx)(i.Slide, {
                id: u.O.PRE_CONNECT,
                children: (0, o.jsx)(a.A, {
                  platformType: T,
                  isWaitingForConnection: !1,
                  onWaitingForConnection: h,
                  onAuthToken: _,
                  onError: I,
                  onClose: e,
                }),
              }),
              (0, o.jsx)(i.Slide, {
                id: u.O.PRE_CONNECT_WAITING,
                children: (0, o.jsx)(a.A, {
                  platformType: T,
                  isWaitingForConnection: !0,
                  expectedCallbackState: N,
                  onAuthToken: _,
                  onError: I,
                  onClose: e,
                }),
              }),
              (0, o.jsx)(i.Slide, {
                id: u.O.DISCORD_CONSENT,
                children: (0, o.jsx)(r.E, {
                  platformType: T,
                  authToken: P,
                  onContinue: C,
                  onError: I,
                  onClose: e,
                }),
              }),
              (0, o.jsx)(i.Slide, {
                id: u.O.ERROR,
                children: (0, o.jsx)(s.X, {
                  onContinue: C,
                  onClose: e,
                  errorCode: S,
                }),
              }),
              (0, o.jsx)(i.Slide, {
                id: u.O.SUCCESS,
                children: (0, o.jsx)(d.W, { onClose: e }),
              }),
            ],
          }),
        });
      }
    },
    555638: function (n, t, e) {
      e.d(t, {
        A: function () {
          return l;
        },
      });
      var o = e(200651);
      e(192379);
      var i = e(212598),
        c = e(388032),
        r = e(436200),
        s = e(757685);
      function l(n) {
        let {
            platformType: t,
            isWaitingForConnection: e,
            onWaitingForConnection: l,
            expectedCallbackState: a,
            onAuthToken: d,
            onError: u,
            onClose: p,
          } = n,
          A = e
            ? (0, o.jsx)("img", {
                src: s.Z,
                width: "231",
                height: "172",
                alt: "",
              })
            : (0, o.jsx)("img", {
                src: r.Z,
                width: "231",
                height: "160",
                alt: "",
              }),
          T = e ? c.intl.string(c.t.TTIocn) : c.intl.string(c.t["6n+UPT"]),
          f = e ? c.intl.string(c.t.MNmoKC) : c.intl.string(c.t.JaaqIS);
        return (0, o.jsx)(i.t, {
          platformType: t,
          isWaitingForConnection: e,
          onWaitingForConnection: l,
          expectedCallbackState: a,
          onAuthToken: d,
          onError: u,
          onClose: p,
          img: A,
          title: T,
          body: f,
        });
      }
    },
    42011: function (n, t, e) {
      e.d(t, {
        W: function () {
          return s;
        },
      });
      var o = e(200651);
      e(192379);
      var i = e(376340),
        c = e(388032),
        r = e(629582);
      function s(n) {
        let { onClose: t } = n;
        return (0, o.jsx)(i.L, {
          img: (0, o.jsx)("img", {
            src: r.Z,
            width: "124 ",
            height: "160",
            alt: "",
          }),
          title: c.intl.string(c.t.e6SOl5),
          body: c.intl.string(c.t.QjAZAQ),
          onClose: t,
        });
      }
    },
    421580: function (n, t, e) {
      var o, i;
      e.d(t, {
        x: function () {
          return o;
        },
      }),
        e(47120),
        ((i = o || (o = {})).PLAYSTATION =
          "https://discord.com/connections/playstation/link"),
        (i.PLAYSTATION_STAGING =
          "https://discord.com/connections/playstation-stg/link");
    },
    159277: function (n, t, e) {
      var o, i;
      e.d(t, {
        M: function () {
          return c;
        },
        t: function () {
          return o;
        },
      }),
        e(47120),
        ((i = o || (o = {})).XBOX_APPLICATION_ID = "622174530214821906"),
        (i.PLAYSTATION_APPLICATION_ID = "1008890872156405890"),
        (i.PLAYSTATION_STAGING_APPLICATION_ID = "984193235868065795");
      let c = {
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
    629582: function (n, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/78f63623b9a823fb08b553c956ad16d032c46e4375c55f374e1e6bc791b8a1a7.png";
    },
    436200: function (n, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/e204d2bb762737c619e51cd81d31c6e7fd615fa2ddd459c52ce5fb52a86d44e8.png";
    },
    757685: function (n, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/0784339e68320272c6863d3ceb5170eba05ce95a3b5e362086da529fc3f8bfff.png";
    },
    660025: function (n, t) {
      t.Z =
        "https://cdn.discordapp.com/assets/content/09152e47812b0b36abe406a49de1cc71ebae44cd025b7f7ce471ecf1bd152285.png";
    },
  },
]);
//# sourceMappingURL=fe1f7705e3f90963df5b.js.map
