"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["85580"],
  {
    842214: function (e) {
      e.exports = "/assets/5b0d84542e6b58da54b2.svg";
    },
    946790: function (e) {
      e.exports = "/assets/fe097467e41435d7cccf.svg";
    },
    499018: function (e) {
      e.exports = "/assets/513660557d55df58ed04.png";
    },
    824393: function (e, t, n) {
      n.r(t),
        n.d(t, {
          default: function () {
            return E;
          },
        }),
        n(47120);
      var r,
        a,
        o = n(200651),
        s = n(192379),
        C = n(120356),
        i = n.n(C),
        d = n(119617),
        l = n(442837),
        c = n(481060),
        u = n(230711),
        m = n(211266),
        h = n(607070),
        x = n(975298),
        j = n(530618),
        g = n(436774),
        p = n(688465),
        H = n(98278),
        f = n(741245),
        M = n(931331),
        N = n(55935),
        v = n(70956),
        _ = n(63063),
        L = n(74538),
        Z = n(272008),
        R = n(497505),
        B = n(981631),
        k = n(675654),
        S = n(474936),
        V = n(388032),
        T = n(959387),
        F = n(499018),
        I = n(946790);
      function A(e) {
        var t;
        let { transitionState: n, onClose: r, quest: a, location: C } = e,
          m = s.useRef(null),
          [x, g] = s.useState(null),
          p = s.useRef(new d.qA()),
          f = (0, l.e7)([h.Z], () => h.Z.useReducedMotion),
          M =
            (null === (t = a.userStatus) || void 0 === t
              ? void 0
              : t.claimedAt) != null,
          [N, v] = s.useState({ state: "loading" }),
          _ = s.useCallback(() => {
            u.Z.open(B.oAB.SUBSCRIPTIONS, null, {}), r();
          }, [r]),
          L = s.useCallback(() => {
            (0, H.$)(r);
          }, [r]);
        s.useEffect(() => {
          !M &&
            (0, Z.QB)(a.id, R.y$.CROSS_PLATFORM, C)
              .then((e) => {
                if ((null == e ? void 0 : e.claimedAt) != null) {
                  v({ state: "claimed", entitlements: e });
                  return;
                }
                v({ state: "error", errorReason: 0 });
              })
              .catch(() => {
                v({ state: "error", errorReason: 0 });
              });
        }, [a, C, M]);
        let S = "loading" === N.state,
          V = !f && !M && "claimed" === N.state,
          F =
            "claimed" === N.state &&
            null != N.entitlements &&
            N.entitlements.items.some((e) => e.consumed);
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(d.O_, {
              ref: g,
              className: T.confettiCanvas,
              environment: p.current,
            }),
            (0, o.jsx)("div", {
              ref: m,
              children: (0, o.jsx)(c.ModalRoot, {
                transitionState: n,
                size: c.ModalSize.DYNAMIC,
                className: i()(T.rootContainer, {
                  [T.rootContainerLoading]: S,
                }),
                hideShadow: !0,
                children: S
                  ? (0, o.jsx)(c.Spinner, {
                      type: c.Spinner.Type.SPINNING_CIRCLE,
                    })
                  : "error" === N.state
                    ? (0, o.jsx)(b, { errorReason: N.errorReason, onClose: r })
                    : F
                      ? (0, o.jsx)(U, {
                          entitlements: N.entitlements,
                          onClose: r,
                          onLearnMore: L,
                        })
                      : (0, o.jsx)(y, {
                          entitlements: N.entitlements,
                          onClose: r,
                          onLearnMore: _,
                        }),
              }),
            }),
            V &&
              (0, o.jsx)(j.Z, {
                confettiTarget: m.current,
                confettiCanvas: x,
                sprites: k.CA,
                colors: k.Br,
              }),
          ],
        });
      }
      function b(e) {
        let { onClose: t } = e,
          n = V.intl.string(V.t.PbaUtr);
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsxs)(c.ModalHeader, {
              separator: !1,
              className: T.errorHeader,
              children: [
                (0, o.jsx)(c.Heading, {
                  className: T.errorTitle,
                  variant: "heading-xl/medium",
                  children: V.intl.string(V.t["UleS9/"]),
                }),
                (0, o.jsx)(c.ModalCloseButton, {
                  onClick: t,
                  className: T.errorModalCloseButton,
                }),
              ],
            }),
            (0, o.jsx)(c.ModalContent, {
              className: T.errorContent,
              children: (0, o.jsx)(c.Text, {
                variant: "text-md/normal",
                children: n,
              }),
            }),
            (0, o.jsx)(c.ModalFooter, {
              className: T.errorModalFooter,
              children: (0, o.jsx)(c.Button, {
                color: c.Button.Colors.BRAND,
                size: c.Button.Sizes.MEDIUM,
                onClick: t,
                children: V.intl.string(V.t.cpT0Cg),
              }),
            }),
          ],
        });
      }
      function O(e) {
        let t = (0, L.xG)(e.map((e) => e.skuId)),
          n = { days: V.t.fYmir6, hours: V.t["C3RO+v"], minutes: V.t.r77oHR },
          r = (0, N.TD)(0, t * v.Z.Millis.HOUR);
        return (0, N.QX)(r, n);
      }
      function U(e) {
        var t;
        let { entitlements: n, onClose: r, onLearnMore: a } = e,
          { theme: s } = (0, c.useThemeContext)(),
          C = O(
            null !== (t = null == n ? void 0 : n.items) && void 0 !== t
              ? t
              : [],
          ),
          i = (0, x.Z)({ forceFetch: !0 }),
          d = (0, N.vc)(i.endsAt, "L");
        return i.fractionalState === S.a$.NONE
          ? (0, o.jsx)(c.Spinner, { type: c.Spinner.Type.SPINNING_CIRCLE })
          : (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsxs)("div", {
                  className: T.nitroHeaderContainer,
                  children: [
                    (0, o.jsx)("div", { className: T.nitroHeaderClouds }),
                    (0, o.jsx)(M.Z, { className: T.nitroHeaderWordmark }),
                    (0, o.jsx)(c.Image, {
                      src: I,
                      width: 110,
                      height: 82,
                      zoomable: !1,
                      className: T.nitroHeaderWumpus,
                    }),
                    (0, o.jsx)(c.ModalCloseButton, {
                      className: T.nitroHeaderClose,
                      onClick: r,
                    }),
                  ],
                }),
                (0, o.jsxs)(c.ModalFooter, {
                  className: T.footerContainer,
                  separator: !1,
                  children: [
                    (0, o.jsx)(p.Z, { className: T.beta }),
                    (0, o.jsx)(f.C, {
                      className: T.nitroHeading,
                      premiumType: S.p9.TIER_2,
                      type: f.C.Types.PREMIUM_ACTIVATED,
                      theme: s,
                    }),
                    (0, o.jsx)(c.Text, {
                      variant: "text-sm/normal",
                      className: T.text,
                      children: V.intl.format(V.t["jzW5/P"], {
                        helpCenterLink: _.Z.getArticleURL(B.BhN.NITRO),
                        duration: C,
                        date: d,
                      }),
                    }),
                    (0, o.jsx)(c.Button, {
                      className: T.cta,
                      onClick: a,
                      children: V.intl.string(V.t["eQX+go"]),
                    }),
                  ],
                }),
              ],
            });
      }
      function y(e) {
        var t;
        let { entitlements: n, onClose: r, onLearnMore: a } = e,
          s = O(
            null !== (t = null == n ? void 0 : n.items) && void 0 !== t
              ? t
              : [],
          );
        return (0, o.jsx)(c.ThemeProvider, {
          theme: B.BRd.DARK,
          children: (e) =>
            (0, o.jsxs)("div", {
              className: i()(T.claimedRootContainer, e),
              children: [
                (0, o.jsxs)("div", {
                  className: T.headerContainer,
                  children: [
                    (0, o.jsx)("img", {
                      className: T.headerBackground,
                      src: F,
                      alt: V.intl.string(V.t["8SsCa2"]),
                    }),
                    (0, o.jsx)(p.Z, { className: T.beta }),
                    (0, o.jsxs)("div", {
                      className: T.headerForeground,
                      children: [
                        (0, o.jsx)("div", {
                          className: T.iconBackgroundFractional,
                          children: (0, o.jsx)(c.NitroWheelIcon, {
                            size: "lg",
                            className: T.iconFractional,
                            color: g.JX.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                          }),
                        }),
                        (0, o.jsx)(c.ModalCloseButton, {
                          className: T.close,
                          withCircleBackground: !0,
                          onClick: r,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, o.jsxs)(c.ModalFooter, {
                  className: i()(T.footerContainer, T.gradient),
                  separator: !1,
                  children: [
                    (0, o.jsx)(c.Heading, {
                      variant: "heading-lg/bold",
                      className: T.heading,
                      children: V.intl.string(V.t.dOQ9RU),
                    }),
                    (0, o.jsx)(c.Text, {
                      variant: "text-sm/normal",
                      className: T.text,
                      children: V.intl.format(V.t.KnH4jo, {
                        helpCenterLink: _.Z.getArticleURL(B.BhN.NITRO),
                        duration: s,
                      }),
                    }),
                    (0, o.jsx)(c.Button, {
                      className: T.cta2,
                      onClick: a,
                      children: V.intl.string(V.t.LnsQGR),
                    }),
                  ],
                }),
              ],
            }),
        });
      }
      function E(e) {
        let { quest: t, location: n, onClose: r, transitionState: a } = e,
          C = (0, m.Z)(() => {
            var e;
            return (
              (null === (e = t.userStatus) || void 0 === e
                ? void 0
                : e.claimedAt) != null
            );
          });
        return (s.useEffect(() => {
          C && r();
        }, [r, C]),
        C)
          ? null
          : (0, o.jsx)(A, {
              onClose: r,
              transitionState: a,
              quest: t,
              location: n,
            });
      }
      (a = r || (r = {}))[(a.Other = 0)] = "Other";
    },
    931331: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var r = n(200651);
      n(192379);
      var a = n(331595);
      function o(e) {
        let {
          width: t = 106,
          height: n = 43,
          color: o = "currentColor",
          foreground: s,
          ...C
        } = e;
        return (0, r.jsx)("svg", {
          ...(0, a.Z)(C),
          width: t,
          height: n,
          viewBox: "0 0 106 43",
          children: (0, r.jsxs)("g", {
            fill: o,
            className: s,
            fillRule: "evenodd",
            "aria-hidden": !0,
            children: [
              (0, r.jsx)("path", {
                d: "M96.4373 17.6233H83.2985C82.9632 17.6233 82.6698 17.8748 82.6279 18.21L81.9992 22.5687C81.9364 22.9669 82.2507 23.3441 82.6698 23.3441H85.0796C85.3311 23.3441 85.4778 23.5955 85.394 23.8051C85.1006 24.4966 84.8701 25.2719 84.7653 26.0892L83.5499 34.5341C82.7536 40.192 87.4476 43 92.5816 43C97.9461 43 103.227 40.171 104.023 34.5341L105.239 26.0892C105.993 20.557 101.446 17.749 96.4373 17.6233ZM98.952 26.1101L97.7366 34.3665C97.4641 36.3153 95.2638 37.2164 93.2312 37.2164C91.3452 37.2164 89.5012 36.3153 89.7526 34.5341L90.968 26.0892C91.2405 24.2451 93.4408 23.3021 95.4734 23.3021C97.5061 23.3021 99.2453 24.2451 98.952 26.1101Z",
              }),
              (0, r.jsx)("path", {
                d: "M23.5344 17.6233H18.6309C18.2956 17.6233 18.0023 17.8748 17.9603 18.21L16.4516 28.96V28.981L16.5144 33.1301C16.5144 33.2139 16.4516 33.2978 16.3678 33.3187L14.9638 28.3104V28.2895L10.5841 18.0424C10.4794 17.7909 10.2279 17.6233 9.95547 17.6233H4.9891C4.65382 17.6233 4.36044 17.8748 4.31853 18.21L1.00762 41.8894C0.944753 42.3085 1.28004 42.6647 1.67818 42.6647H6.6236C6.95889 42.6647 7.25226 42.4133 7.29417 42.078L8.59339 32.6691V32.6481L8.53052 27.8285L8.67721 27.7865L10.165 32.7948V32.8158L14.2513 42.2666C14.3561 42.518 14.6075 42.6857 14.8799 42.6857H20.2445C20.5797 42.6857 20.8731 42.4342 20.915 42.0989L24.2259 18.4196C24.2888 18.0005 23.9535 17.6233 23.5344 17.6233Z",
              }),
              (0, r.jsx)("path", {
                d: "M34.2634 17.6233H29.318C28.9827 17.6233 28.6893 17.8748 28.6474 18.21L25.3365 41.8684C25.2736 42.2875 25.6089 42.6438 26.007 42.6438H30.9525C31.2877 42.6438 31.5811 42.3923 31.623 42.057L34.9339 18.3986C34.9968 18.0005 34.6825 17.6233 34.2634 17.6233Z",
              }),
              (0, r.jsx)("path", {
                d: "M57.4608 17.6233H38.9573C38.6221 17.6233 38.3287 17.8748 38.2868 18.21L37.6372 22.6316C37.5743 23.0507 37.8886 23.4069 38.3077 23.4069H43.4837C43.9028 23.4069 44.2171 23.7632 44.1542 24.1823L41.7234 41.8684C41.6606 42.2875 41.9958 42.6438 42.394 42.6438H47.4023C47.7376 42.6438 48.0309 42.3923 48.0728 42.057L50.5665 23.9937C50.6084 23.6584 50.9018 23.4069 51.2371 23.4069H56.7902C57.1255 23.4069 57.4188 23.1555 57.4608 22.8202L58.1104 18.3986C58.2151 18.0005 57.8799 17.6233 57.4608 17.6233Z",
              }),
              (0, r.jsx)("path", {
                d: "M71.6056 17.6233H62.1967C61.8615 17.6233 61.5681 17.8748 61.5262 18.21L58.2153 41.8684C58.1524 42.2875 58.4877 42.6438 58.8858 42.6438H63.8941C64.2294 42.6438 64.5228 42.3923 64.5647 42.057L65.5286 34.9951C65.5496 34.8275 65.6963 34.7018 65.8639 34.7018H66.5135C66.6392 34.7018 66.744 34.7646 66.8069 34.8694L71.5847 42.3504C71.7104 42.539 71.9199 42.6647 72.1714 42.6647H78.3741C78.919 42.6647 79.2542 42.0361 78.9399 41.596L73.9107 34.4084C73.7849 34.2407 73.8478 33.9893 74.0364 33.9055C77.2425 32.3338 79.1076 30.7412 79.7153 26.2568C80.4277 20.3894 76.7606 17.6233 71.6056 17.6233ZM73.3239 26.3616C73.1563 27.8075 72.0247 29.2534 70.0759 29.2534H67.1631C66.744 29.2534 66.4297 28.8762 66.4925 28.4781L67.1212 24.1194C67.1631 23.7841 67.4565 23.5326 67.7918 23.5326H70.9141C72.7581 23.5326 73.5125 24.8528 73.3239 26.3616Z",
              }),
              (0, r.jsx)("path", {
                d: "M23.3458 2.64035H26.9082C27.7674 2.64035 28.5008 2.76608 29.0875 3.0385C29.6324 3.26901 30.0934 3.66715 30.4287 4.17008C30.722 4.673 30.8897 5.23879 30.8687 5.80458C30.8687 6.39132 30.722 6.95711 30.4077 7.46004C30.0724 7.98392 29.5695 8.38207 29.0037 8.63353C28.3751 8.9269 27.5788 9.07359 26.6567 9.07359H23.3458V2.64035V2.64035ZM26.6358 7.41813C27.2225 7.41813 27.6626 7.27144 27.9769 6.97807C28.2912 6.66374 28.4589 6.24464 28.4379 5.78363C28.4589 5.36452 28.3122 4.96637 28.0188 4.673C27.7464 4.40058 27.3273 4.2539 26.7615 4.2539H25.6509V7.39717H26.6358V7.41813Z",
              }),
              (0, r.jsx)("path", {
                d: "M36.2331 9.05262C35.7721 8.92689 35.3111 8.7383 34.892 8.48683V6.95711C35.2482 7.22952 35.6673 7.41812 36.0864 7.5229C36.5684 7.66958 37.0504 7.73245 37.5533 7.7534C37.7209 7.7534 37.8886 7.73245 38.0562 7.66958C38.161 7.60672 38.2238 7.54385 38.2238 7.46003C38.2238 7.37621 38.2029 7.29239 38.14 7.22952C38.0352 7.1457 37.9095 7.10379 37.7838 7.08284L36.6941 6.83137C36.0655 6.68469 35.6254 6.47514 35.353 6.22368C35.0806 5.95126 34.9339 5.57407 34.9548 5.19687C34.9548 4.86159 35.0806 4.52631 35.3111 4.27484C35.5835 3.98147 35.9188 3.77192 36.296 3.66714C36.7779 3.52046 37.2809 3.43664 37.8047 3.45759C38.2867 3.45759 38.7477 3.4995 39.2087 3.62523C39.5859 3.70906 39.9422 3.85574 40.2774 4.04434V5.49024C39.9631 5.30165 39.6278 5.17592 39.2926 5.0921C38.9154 4.98732 38.5172 4.94541 38.14 4.94541C37.5742 4.94541 37.2809 5.05019 37.2809 5.23878C37.2809 5.3226 37.3228 5.40642 37.4066 5.44833C37.5533 5.5112 37.7209 5.55311 37.8886 5.59502L38.8106 5.76266C39.3973 5.86744 39.8583 6.05603 40.1517 6.3075C40.4451 6.55896 40.5918 6.95711 40.5918 7.46003C40.5918 8.00486 40.3194 8.50779 39.8583 8.78021C39.3764 9.09453 38.6849 9.26218 37.7838 9.26218C37.2599 9.24122 36.736 9.17835 36.2331 9.05262Z",
              }),
              (0, r.jsx)("path", {
                d: "M42.7294 8.86404C42.2475 8.63353 41.8284 8.2773 41.535 7.81628C41.2626 7.37622 41.1368 6.85234 41.1368 6.32847C41.1368 5.80459 41.2626 5.30166 41.5559 4.8616C41.8493 4.40059 42.2684 4.06531 42.7713 3.8348C43.379 3.58334 44.0287 3.43665 44.6783 3.45761C45.6003 3.45761 46.3547 3.6462 46.9624 4.04435V5.72077C46.7319 5.57408 46.4804 5.44835 46.208 5.36453C45.9146 5.28071 45.6003 5.21784 45.286 5.21784C44.7202 5.21784 44.2801 5.32262 43.9448 5.53217C43.4838 5.78363 43.3371 6.34942 43.5886 6.81043C43.6724 6.95712 43.7981 7.08285 43.9448 7.16667C44.2592 7.37622 44.6992 7.481 45.3069 7.481C45.6212 7.481 45.9146 7.43909 46.208 7.35527C46.4804 7.27145 46.7319 7.16667 46.9624 7.01999V8.63353C46.2499 9.05264 45.4536 9.26219 44.6364 9.24123C43.9867 9.26219 43.3162 9.13646 42.7294 8.86404Z",
              }),
              (0, r.jsx)("path", {
                d: "M49.2463 8.86402C48.7434 8.63352 48.3243 8.27728 48.0309 7.81627C47.7585 7.37621 47.6118 6.85233 47.6118 6.32845C47.6118 5.80457 47.7375 5.30165 48.0309 4.86159C48.3243 4.42153 48.7434 4.06529 49.2463 3.85574C50.4408 3.37377 51.8028 3.37377 52.9973 3.85574C53.4793 4.06529 53.8984 4.42153 54.1917 4.86159C54.4641 5.30165 54.6108 5.82552 54.6108 6.32845C54.6108 6.85233 54.4641 7.37621 54.1917 7.81627C53.8984 8.27728 53.4793 8.63352 52.9973 8.86402C51.7819 9.36695 50.4408 9.36695 49.2463 8.86402ZM52.0124 7.22952C52.2429 6.99901 52.3686 6.66373 52.3477 6.3494C52.3686 6.01412 52.2429 5.69979 52.0124 5.46929C51.7609 5.23878 51.4257 5.134 51.0904 5.134C50.7551 5.11305 50.4198 5.23878 50.1683 5.46929C49.9378 5.69979 49.8121 6.01412 49.8331 6.3494C49.8121 6.68469 49.9378 6.99901 50.1683 7.22952C50.4198 7.46003 50.7551 7.58576 51.0904 7.5648C51.4466 7.58576 51.7819 7.46003 52.0124 7.22952Z",
              }),
              (0, r.jsx)("path", {
                d: "M60.1012 3.79287V5.78361C59.8288 5.61597 59.5145 5.53215 59.2002 5.55311C58.7182 5.55311 58.341 5.69979 58.0686 5.99316C57.8171 6.28654 57.6704 6.74755 57.6704 7.3762V9.05262H55.4282V3.6881H57.6285V5.38546C57.7543 4.75681 57.9429 4.2958 58.2153 4.00242C58.4877 3.70905 58.8649 3.54141 59.263 3.56237C59.5564 3.56237 59.8498 3.64619 60.1012 3.79287Z",
              }),
              (0, r.jsx)("path", {
                d: "M67.5613 2.45178V9.05266H65.3191V7.85821C65.1514 8.27732 64.8371 8.65451 64.4599 8.88502C64.0199 9.13648 63.5379 9.26221 63.035 9.24126C62.5739 9.26221 62.1129 9.11552 61.7148 8.86406C61.3376 8.6126 61.0233 8.25636 60.8347 7.83726C60.6251 7.37625 60.5203 6.87332 60.5203 6.3704C60.4994 5.84652 60.6251 5.32264 60.8347 4.86163C61.0442 4.42157 61.3795 4.06533 61.7776 3.81387C62.1968 3.56241 62.6787 3.43667 63.1607 3.43667C64.2294 3.43667 64.9419 3.89769 65.3191 4.81972V2.45178H67.5613ZM64.9838 7.18765C65.2143 6.95714 65.34 6.64282 65.3191 6.32849C65.3191 6.01416 65.1933 5.69983 64.9838 5.49028C64.4599 5.05022 63.7055 5.05022 63.1607 5.49028C62.9302 5.72079 62.8045 6.01416 62.8254 6.32849C62.8045 6.64282 62.9302 6.95714 63.1607 7.18765C63.4121 7.41816 63.7265 7.52293 64.0618 7.52293C64.418 7.54389 64.7323 7.41816 64.9838 7.18765Z",
              }),
              (0, r.jsx)("path", {
                d: "M15.0895 1.04776C13.9999 0.565789 12.8473 0.209552 11.6529 0C11.4853 0.293372 11.3386 0.586745 11.2128 0.901072C9.95553 0.712476 8.65631 0.712476 7.399 0.901072C7.27327 0.586745 7.12659 0.293372 6.95894 0C5.78546 0.209552 4.63292 0.565789 3.5223 1.06871C1.36391 4.27485 0.77717 7.39717 1.07054 10.4985C2.34881 11.4415 3.77376 12.154 5.28253 12.615C5.61781 12.154 5.93214 11.672 6.1836 11.1691C5.70163 10.9805 5.21967 10.75 4.75865 10.4985C4.88438 10.4147 4.98916 10.3309 5.11489 10.2471C7.7762 11.5044 10.8566 11.5044 13.5389 10.2471C13.6436 10.3309 13.7694 10.4357 13.8951 10.4985C13.4341 10.771 12.9731 11.0015 12.4702 11.1691C12.7216 11.672 13.0359 12.154 13.3712 12.615C14.88 12.154 16.3049 11.4415 17.5832 10.4985C17.9185 6.9152 16.9755 3.81384 15.0895 1.04776ZM6.53984 8.59162C5.72259 8.59162 5.03107 7.83723 5.03107 6.93616C5.03107 6.03509 5.68068 5.25975 6.51889 5.25975C7.35709 5.25975 8.02766 6.01413 8.02766 6.93616C8.02766 7.85819 7.37805 8.59162 6.53984 8.59162ZM12.072 8.59162C11.2548 8.59162 10.5842 7.83723 10.5842 6.93616C10.5842 6.03509 11.2338 5.25975 12.072 5.25975C12.9102 5.25975 13.5808 6.01413 13.5598 6.93616C13.5598 7.85819 12.9102 8.59162 12.072 8.59162Z",
              }),
              (0, r.jsx)("path", {
                d: "M32.7757 4.27485C33.389 4.27485 33.8863 3.82452 33.8863 3.269C33.8863 2.71349 33.389 2.26315 32.7757 2.26315C32.1623 2.26315 31.665 2.71349 31.665 3.269C31.665 3.82452 32.1623 4.27485 32.7757 4.27485Z",
              }),
              (0, r.jsx)("path", {
                d: "M31.665 4.9664C32.3775 5.25977 33.1948 5.25977 33.9072 4.9664V9.09457H31.665V4.9664Z",
              }),
            ],
          }),
        });
      }
    },
    665167: function (e, t, n) {
      e.exports = {
        container: "container_fc2d2a",
        animationContainer: "animationContainer_fc2d2a",
        svgBorder: "svgBorder_fc2d2a",
        svgCopy: "svgCopy_fc2d2a",
        shine: "shine_fc2d2a",
      };
    },
    959387: function (e, t, n) {
      e.exports = {
        rootContainer: "rootContainer_c2d726",
        rootContainerLoading: "rootContainerLoading_c2d726",
        claimedRootContainer: "claimedRootContainer_c2d726",
        headerContainer: "headerContainer_c2d726",
        nitroHeaderContainer: "nitroHeaderContainer_c2d726",
        nitroHeaderWordmark: "nitroHeaderWordmark_c2d726",
        nitroHeaderClouds: "nitroHeaderClouds_c2d726",
        nitroHeaderClose: "nitroHeaderClose_c2d726",
        nitroHeaderWumpus: "nitroHeaderWumpus_c2d726",
        beta: "beta_c2d726",
        headerBackground: "headerBackground_c2d726",
        headerForeground: "headerForeground_c2d726",
        close: "close_c2d726",
        footerContainer: "footerContainer_c2d726",
        gradient: "gradient_c2d726",
        heading: "heading_c2d726",
        nitroHeading: "nitroHeading_c2d726",
        cta: "cta_c2d726",
        cta2: "cta2_c2d726",
        text: "text_c2d726",
        confettiCanvas: "confettiCanvas_c2d726",
        errorHeader: "errorHeader_c2d726",
        errorTitle: "errorTitle_c2d726",
        errorModalCloseButton: "errorModalCloseButton_c2d726",
        errorContent: "errorContent_c2d726",
        errorModalFooter: "errorModalFooter_c2d726",
        iconBackgroundFractional: "iconBackgroundFractional_c2d726",
        iconFractional: "iconFractional_c2d726",
      };
    },
  },
]);
//# sourceMappingURL=b7eaa7424af6352b4cab.js.map
