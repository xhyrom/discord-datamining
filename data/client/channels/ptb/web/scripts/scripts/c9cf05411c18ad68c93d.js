"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["21592"],
  {
    7225: function (t, e, a) {
      a.r(e),
        a.d(e, {
          default: function () {
            return C;
          },
        }),
        a(47120);
      var o,
        s,
        i = a(735250),
        r = a(470079),
        n = a(442837),
        c = a(481060),
        l = a(728345),
        d = a(812206),
        u = a(886176),
        p = a(270144),
        f = a(572004),
        h = a(504211),
        m = a(283836),
        S = a(507608),
        N = a(981631),
        T = a(272242),
        _ = a(689938),
        E = a(437561);
      function C(t) {
        let {
            onClose: e,
            transitionState: a,
            appId: o,
            onlySubscribeServerSubForGuildId: s,
          } = t,
          C = (0, n.e7)([d.Z], () => d.Z.getApplication(o), [o]),
          [g, I] = r.useState(() =>
            d.Z.isFetchingApplication(o) ? { status: 1 } : { status: 0 },
          ),
          R = r.useRef(null),
          [x, O] = r.useState(!0),
          b = () => {
            var t;
            (null === (t = R.current) || void 0 === t
              ? void 0
              : t.isScrolledToBottom()) === !0
              ? O(!1)
              : O(!0);
          };
        r.useEffect(() => {
          0 === g.status &&
            (I({ status: 1 }),
            l.Z.fetchApplication(o)
              .then(() => {
                I({ status: 2 });
              })
              .catch((t) => {
                I({ status: 3, error: t.message });
              }));
        }, [o, g.status]);
        let { subs: L, otps: k, subscriptionGroupListing: w } = (0, m.q)(o, s);
        if (
          ((0, p.FE)(o, null == C ? void 0 : C.primarySkuId, {
            refetchOnMount: !0,
          }),
          null == C)
        )
          return null;
        let j = _.Z.Messages.STOREFRONT_TITLE.format({ appName: C.name });
        return (0, i.jsxs)(c.ModalRoot, {
          transitionState: a,
          "aria-label": j,
          size: c.ModalSize.DYNAMIC,
          className: E.modal,
          children: [
            (0, i.jsxs)(c.ModalHeader, {
              className: E.modalHeader,
              children: [
                (0, i.jsxs)("div", {
                  className: E.modalTitle,
                  children: [
                    (0, i.jsx)(u.Z, {}),
                    (0, i.jsx)(c.Heading, {
                      variant: "heading-md/semibold",
                      children: j,
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: E.modalHeaderLinks,
                  children: [
                    f.wS &&
                      (0, i.jsx)(c.Button, {
                        look: c.ButtonLooks.BLANK,
                        size: c.ButtonSizes.ICON,
                        color: c.ButtonColors.TRANSPARENT,
                        "aria-label": _.Z.Messages.COPY_LINK,
                        onClick: () => {
                          let t = ""
                            .concat(location.protocol, "//")
                            .concat(location.host)
                            .concat(
                              N.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                                o,
                                T.ApplicationDirectoryProfileSections.STORE,
                              ),
                            );
                          (0, f.JG)(t),
                            (0, c.showToast)(
                              (0, c.createToast)(
                                _.Z.Messages.COPIED_LINK,
                                c.ToastType.SUCCESS,
                              ),
                            ),
                            (0, h.X)(o, h.B.STORE_MODAL);
                        },
                        children: (0, i.jsx)(c.LinkIcon, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: "var(--white)",
                        }),
                      }),
                    (0, i.jsx)(c.ModalCloseButton, {
                      onClick: e,
                      className: E.modalCloseBtn,
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsx)(c.ModalContent, {
              scrollerRef: (t) => {
                null != t && ((R.current = t), b());
              },
              onScroll: b,
              children: (0, i.jsx)(S.AF, {
                app: C,
                subscriptionGroupListing: w,
                onlySubscribeServerSubForGuildId: s,
                subscriptionListings: L,
                otpListings: k,
              }),
            }),
            (0, i.jsx)("div", {
              className: E.containerScrollGradient,
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
    637714: function (t, e, a) {
      t.exports = {
        wrapper: "wrapper_bfa0f5",
        productSection: "productSection_bfa0f5",
        productList: "productList_bfa0f5",
        legalText: "legalText_bfa0f5",
      };
    },
    393713: function (t, e, a) {
      t.exports = {
        wrapper: "wrapper_c01868",
        image: "image_c01868",
        content: "content_c01868",
        icon: "icon_c01868",
        background: "background_c01868",
      };
    },
    25378: function (t, e, a) {
      t.exports = {
        wrapper: "wrapper_a8220a",
        cardHeaderImg: "cardHeaderImg_a8220a",
        details: "details_a8220a",
        description: "description_a8220a",
        footer: "footer_a8220a",
      };
    },
  },
]);
//# sourceMappingURL=c9cf05411c18ad68c93d.js.map
