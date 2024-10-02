"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["44797"],
  {
    7225: function (a, t, e) {
      e.r(t),
        e.d(t, {
          default: function () {
            return h;
          },
        }),
        e(47120);
      var o,
        s,
        n = e(735250),
        c = e(470079),
        r = e(442837),
        i = e(481060),
        l = e(728345),
        d = e(812206),
        u = e(886176),
        p = e(572004),
        f = e(504211),
        m = e(283836),
        N = e(507608),
        T = e(981631),
        _ = e(272242),
        C = e(689938),
        E = e(213891);
      function h(a) {
        let { onClose: t, transitionState: e, appId: o, guildId: s } = a,
          h = (0, r.e7)([d.Z], () => d.Z.getApplication(o), [o]),
          [S, R] = c.useState(() =>
            d.Z.isFetchingApplication(o) ? { status: 1 } : { status: 0 },
          ),
          g = c.useRef(null),
          [x, I] = c.useState(!0),
          O = () => {
            var a;
            (null === (a = g.current) || void 0 === a
              ? void 0
              : a.isScrolledToBottom()) === !0
              ? I(!1)
              : I(!0);
          };
        c.useEffect(() => {
          0 === S.status &&
            (R({ status: 1 }),
            l.ZP.fetchApplication(o)
              .then(() => {
                R({ status: 2 });
              })
              .catch((a) => {
                R({ status: 3, error: a.message });
              }));
        }, [o, S.status]);
        let { subscriptions: b, otps: j } = (0, m.q)(o);
        if (null == h) return null;
        let k = C.Z.Messages.STOREFRONT_TITLE.format({ appName: h.name });
        return (0, n.jsxs)(i.ModalRoot, {
          transitionState: e,
          "aria-label": k,
          size: i.ModalSize.DYNAMIC,
          className: E.modal,
          children: [
            (0, n.jsxs)(i.ModalHeader, {
              className: E.modalHeader,
              children: [
                (0, n.jsxs)("div", {
                  className: E.modalTitle,
                  children: [
                    (0, n.jsx)(u.Z, {}),
                    (0, n.jsx)(i.Heading, {
                      variant: "heading-md/semibold",
                      children: k,
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: E.modalHeaderLinks,
                  children: [
                    p.wS &&
                      (0, n.jsx)(i.Button, {
                        look: i.ButtonLooks.BLANK,
                        size: i.ButtonSizes.ICON,
                        color: i.ButtonColors.TRANSPARENT,
                        "aria-label": C.Z.Messages.COPY_LINK,
                        onClick: () => {
                          let a = ""
                            .concat(location.protocol, "//")
                            .concat(location.host)
                            .concat(
                              T.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                                o,
                                _.ApplicationDirectoryProfileSections.STORE,
                              ),
                            );
                          (0, p.JG)(a),
                            (0, i.showToast)(
                              (0, i.createToast)(
                                C.Z.Messages.COPIED_LINK,
                                i.ToastType.SUCCESS,
                              ),
                            ),
                            (0, f.X)(o, f.B.STORE_MODAL);
                        },
                        children: (0, n.jsx)(i.LinkIcon, { size: "sm" }),
                      }),
                    (0, n.jsx)(i.ModalCloseButton, {
                      onClick: t,
                      className: E.modalCloseBtn,
                    }),
                  ],
                }),
              ],
            }),
            (0, n.jsx)(i.ModalContent, {
              scrollerRef: (a) => {
                null != a && ((g.current = a), O());
              },
              onScroll: O,
              children: (0, n.jsx)(N.AF, {
                app: h,
                guildId: s,
                subscriptions: b,
                otps: j,
              }),
            }),
            (0, n.jsx)("div", {
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
    335567: function (a, t, e) {
      a.exports = {
        wrapper: "wrapper_bfa0f5",
        productSection: "productSection_bfa0f5",
        productList: "productList_bfa0f5",
        legalText: "legalText_bfa0f5",
      };
    },
    529079: function (a, t, e) {
      a.exports = {
        wrapper: "wrapper_c01868",
        image: "image_c01868",
        content: "content_c01868",
        icon: "icon_c01868",
        background: "background_c01868",
      };
    },
    147333: function (a, t, e) {
      a.exports = {
        wrapper: "wrapper_a8220a",
        cardHeaderImg: "cardHeaderImg_a8220a",
        details: "details_a8220a",
        description: "description_a8220a",
        footer: "footer_a8220a",
      };
    },
  },
]);
//# sourceMappingURL=08de7358b057d5d8b21b.js.map
