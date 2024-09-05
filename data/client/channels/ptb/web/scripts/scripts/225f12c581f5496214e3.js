"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["21592"],
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
        n = a(470079),
        c = a(442837),
        i = a(481060),
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
      function C(e) {
        let {
            onClose: t,
            transitionState: a,
            appId: o,
            onlySubscribeServerSubForGuildId: s,
          } = e,
          C = (0, c.e7)([d.Z], () => d.Z.getApplication(o), [o]),
          [I, R] = n.useState(() =>
            d.Z.isFetchingApplication(o) ? { status: 1 } : { status: 0 },
          ),
          g = n.useRef(null),
          [x, O] = n.useState(!0),
          b = () => {
            var e;
            (null === (e = g.current) || void 0 === e
              ? void 0
              : e.isScrolledToBottom()) === !0
              ? O(!1)
              : O(!0);
          };
        n.useEffect(() => {
          0 === I.status &&
            (R({ status: 1 }),
            l.Z.fetchApplication(o)
              .then(() => {
                R({ status: 2 });
              })
              .catch((e) => {
                R({ status: 3, error: e.message });
              }));
        }, [o, I.status]);
        let { subscriptions: k, otps: w } = (0, m.q)(o);
        if (
          ((0, p.FE)(o, null == C ? void 0 : C.primarySkuId, {
            refetchOnMount: !0,
          }),
          null == C)
        )
          return null;
        let j = _.Z.Messages.STOREFRONT_TITLE.format({ appName: C.name });
        return (0, r.jsxs)(i.ModalRoot, {
          transitionState: a,
          "aria-label": j,
          size: i.ModalSize.DYNAMIC,
          className: E.modal,
          children: [
            (0, r.jsxs)(i.ModalHeader, {
              className: E.modalHeader,
              children: [
                (0, r.jsxs)("div", {
                  className: E.modalTitle,
                  children: [
                    (0, r.jsx)(u.Z, {}),
                    (0, r.jsx)(i.Heading, {
                      variant: "heading-md/semibold",
                      children: j,
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: E.modalHeaderLinks,
                  children: [
                    f.wS &&
                      (0, r.jsx)(i.Button, {
                        look: i.ButtonLooks.BLANK,
                        size: i.ButtonSizes.ICON,
                        color: i.ButtonColors.TRANSPARENT,
                        "aria-label": _.Z.Messages.COPY_LINK,
                        onClick: () => {
                          let e = ""
                            .concat(location.protocol, "//")
                            .concat(location.host)
                            .concat(
                              N.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                                o,
                                T.ApplicationDirectoryProfileSections.STORE,
                              ),
                            );
                          (0, f.JG)(e),
                            (0, i.showToast)(
                              (0, i.createToast)(
                                _.Z.Messages.COPIED_LINK,
                                i.ToastType.SUCCESS,
                              ),
                            ),
                            (0, h.X)(o, h.B.STORE_MODAL);
                        },
                        children: (0, r.jsx)(i.LinkIcon, {
                          size: "custom",
                          width: 20,
                          height: 20,
                          color: "var(--white)",
                        }),
                      }),
                    (0, r.jsx)(i.ModalCloseButton, {
                      onClick: t,
                      className: E.modalCloseBtn,
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsx)(i.ModalContent, {
              scrollerRef: (e) => {
                null != e && ((g.current = e), b());
              },
              onScroll: b,
              children: (0, r.jsx)(S.AF, {
                app: C,
                onlySubscribeServerSubForGuildId: s,
                subscriptions: k,
                otps: w,
              }),
            }),
            (0, r.jsx)("div", {
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
    637714: function (e, t, a) {
      e.exports = {
        wrapper: "wrapper_bfa0f5",
        productSection: "productSection_bfa0f5",
        productList: "productList_bfa0f5",
        legalText: "legalText_bfa0f5",
      };
    },
    393713: function (e, t, a) {
      e.exports = {
        wrapper: "wrapper_c01868",
        image: "image_c01868",
        content: "content_c01868",
        icon: "icon_c01868",
        background: "background_c01868",
      };
    },
    25378: function (e, t, a) {
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
//# sourceMappingURL=225f12c581f5496214e3.js.map
