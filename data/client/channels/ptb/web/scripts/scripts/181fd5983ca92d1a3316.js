"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["44797"],
  {
    7225: function (e, t, a) {
      a.r(t),
        a.d(t, {
          default: function () {
            return C;
          },
        }),
        a(47120);
      var o,
        s,
        r = a(735250),
        c = a(470079),
        i = a(442837),
        n = a(481060),
        l = a(728345),
        d = a(812206),
        u = a(886176),
        p = a(572004),
        f = a(504211),
        h = a(283836),
        m = a(507608),
        N = a(981631),
        S = a(272242),
        T = a(689938),
        _ = a(213891);
      function C(e) {
        let {
            onClose: t,
            transitionState: a,
            appId: o,
            onlySubscribeServerSubForGuildId: s,
          } = e,
          C = (0, i.e7)([d.Z], () => d.Z.getApplication(o), [o]),
          [E, R] = c.useState(() =>
            d.Z.isFetchingApplication(o) ? { status: 1 } : { status: 0 },
          ),
          g = c.useRef(null),
          [x, I] = c.useState(!0),
          O = () => {
            var e;
            (null === (e = g.current) || void 0 === e
              ? void 0
              : e.isScrolledToBottom()) === !0
              ? I(!1)
              : I(!0);
          };
        c.useEffect(() => {
          0 === E.status &&
            (R({ status: 1 }),
            l.Z.fetchApplication(o)
              .then(() => {
                R({ status: 2 });
              })
              .catch((e) => {
                R({ status: 3, error: e.message });
              }));
        }, [o, E.status]);
        let { subscriptions: b, otps: w } = (0, h.q)(o);
        if (null == C) return null;
        let j = T.Z.Messages.STOREFRONT_TITLE.format({ appName: C.name });
        return (0, r.jsxs)(n.ModalRoot, {
          transitionState: a,
          "aria-label": j,
          size: n.ModalSize.DYNAMIC,
          className: _.modal,
          children: [
            (0, r.jsxs)(n.ModalHeader, {
              className: _.modalHeader,
              children: [
                (0, r.jsxs)("div", {
                  className: _.modalTitle,
                  children: [
                    (0, r.jsx)(u.Z, {}),
                    (0, r.jsx)(n.Heading, {
                      variant: "heading-md/semibold",
                      children: j,
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: _.modalHeaderLinks,
                  children: [
                    p.wS &&
                      (0, r.jsx)(n.Button, {
                        look: n.ButtonLooks.BLANK,
                        size: n.ButtonSizes.ICON,
                        color: n.ButtonColors.TRANSPARENT,
                        "aria-label": T.Z.Messages.COPY_LINK,
                        onClick: () => {
                          let e = ""
                            .concat(location.protocol, "//")
                            .concat(location.host)
                            .concat(
                              N.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                                o,
                                S.ApplicationDirectoryProfileSections.STORE,
                              ),
                            );
                          (0, p.JG)(e),
                            (0, n.showToast)(
                              (0, n.createToast)(
                                T.Z.Messages.COPIED_LINK,
                                n.ToastType.SUCCESS,
                              ),
                            ),
                            (0, f.X)(o, f.B.STORE_MODAL);
                        },
                        children: (0, r.jsx)(n.LinkIcon, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: "var(--white)",
                        }),
                      }),
                    (0, r.jsx)(n.ModalCloseButton, {
                      onClick: t,
                      className: _.modalCloseBtn,
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsx)(n.ModalContent, {
              scrollerRef: (e) => {
                null != e && ((g.current = e), O());
              },
              onScroll: O,
              children: (0, r.jsx)(m.AF, {
                app: C,
                onlySubscribeServerSubForGuildId: s,
                subscriptions: b,
                otps: w,
              }),
            }),
            (0, r.jsx)("div", {
              className: _.containerScrollGradient,
              "data-shown": x,
            }),
          ],
        });
      }
      ((s = o || (o = {}))[(s.NONE = 0)] = "NONE"),
        (s[(s.FETCHING = 1)] = "FETCHING"),
        (s[(s.FETCHED = 2)] = "FETCHED"),
        (s[(s.ERROR = 3)] = "ERROR");
    },
    335567: function (e, t, a) {
      e.exports = {
        wrapper: "wrapper_bfa0f5",
        productSection: "productSection_bfa0f5",
        productList: "productList_bfa0f5",
        legalText: "legalText_bfa0f5",
      };
    },
    529079: function (e, t, a) {
      e.exports = {
        wrapper: "wrapper_c01868",
        image: "image_c01868",
        content: "content_c01868",
        icon: "icon_c01868",
        background: "background_c01868",
      };
    },
    147333: function (e, t, a) {
      e.exports = {
        wrapper: "wrapper_a8220a",
        cardHeaderImg: "cardHeaderImg_a8220a",
        details: "details_a8220a",
        description: "description_a8220a",
        footer: "footer_a8220a",
      };
    },
  },
]);
//# sourceMappingURL=181fd5983ca92d1a3316.js.map
