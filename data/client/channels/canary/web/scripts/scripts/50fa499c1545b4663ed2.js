"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["47988"],
  {
    7225: function (e, a, t) {
      t.r(a),
        t.d(a, {
          default: function () {
            return C;
          },
        }),
        t(47120);
      var s,
        o,
        r = t(200651),
        i = t(192379),
        c = t(541822),
        n = t(442837),
        l = t(481060),
        d = t(728345),
        p = t(812206),
        u = t(600164),
        f = t(886176),
        m = t(572004),
        N = t(504211),
        _ = t(283836),
        h = t(507608),
        T = t(533159),
        E = t(981631),
        O = t(272242),
        x = t(689938),
        S = t(213891);
      function C(e) {
        let { onClose: a, transitionState: t, appId: s, guildId: o } = e,
          C = (0, n.e7)([p.Z], () => p.Z.getApplication(s), [s]),
          [g, R] = i.useState(() =>
            p.Z.isFetchingApplication(s) ? { status: 1 } : { status: 0 },
          );
        i.useEffect(() => {
          0 === g.status &&
            (R({ status: 1 }),
            d.ZP.fetchApplication(s)
              .then(() => {
                R({ status: 2 });
              })
              .catch((e) => {
                R({ status: 3, error: e.message });
              }));
        }, [s, g.status]);
        let { subscriptions: I, otps: j } = (0, _.q)(s);
        if (null == C) return null;
        let P = x.Z.Messages.STOREFRONT_TITLE.format({ appName: C.name });
        return (0, r.jsxs)(l.ModalRoot, {
          transitionState: t,
          "aria-label": P,
          size: l.ModalSize.DYNAMIC,
          className: S.modal,
          children: [
            (0, r.jsxs)(l.ModalHeader, {
              className: S.modalHeader,
              children: [
                (0, r.jsxs)("div", {
                  className: S.modalTitle,
                  children: [
                    (0, r.jsx)(f.Z, {}),
                    (0, r.jsx)(l.Heading, {
                      variant: "heading-md/semibold",
                      children: P,
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: S.modalHeaderLinks,
                  children: [
                    m.wS &&
                      (0, r.jsx)(l.Button, {
                        look: l.ButtonLooks.BLANK,
                        size: l.ButtonSizes.ICON,
                        color: l.ButtonColors.TRANSPARENT,
                        "aria-label": x.Z.Messages.COPY_LINK,
                        onClick: () => {
                          let e = ""
                            .concat(location.protocol, "//")
                            .concat(location.host)
                            .concat(
                              E.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                                s,
                                O.ApplicationDirectoryProfileSections.STORE,
                              ),
                            );
                          (0, m.JG)(e),
                            (0, l.showToast)(
                              (0, l.createToast)(
                                x.Z.Messages.COPIED_LINK,
                                l.ToastType.SUCCESS,
                              ),
                            ),
                            (0, N.X)(s, N.B.STORE_MODAL);
                        },
                        children: (0, r.jsx)(l.LinkIcon, { size: "sm" }),
                      }),
                    (0, r.jsx)(l.ModalCloseButton, {
                      onClick: a,
                      className: S.modalCloseBtn,
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className: S.scrollerWrapper,
              children: (0, r.jsx)(c.Z, {
                className: S.scroller,
                children: (0, r.jsx)(h.AF, {
                  app: C,
                  guildId: o,
                  subscriptions: I,
                  otps: j,
                }),
              }),
            }),
            (0, r.jsx)(l.ModalFooter, {
              justify: u.Z.Justify.END,
              children: (0, r.jsx)(l.Text, {
                variant: "text-md/normal",
                children:
                  null != C.termsOfServiceUrl || null != C.privacyPolicyUrl
                    ? (0, r.jsx)(T.Z, {
                        termsOfServiceUrl: C.termsOfServiceUrl,
                        privacyPolicyUrl: C.privacyPolicyUrl,
                      })
                    : x.Z.Messages.STOREFRONT_NO_TOS_PP,
              }),
            }),
          ],
        });
      }
      ((o = s || (s = {}))[(o.NONE = 0)] = "NONE"),
        (o[(o.FETCHING = 1)] = "FETCHING"),
        (o[(o.FETCHED = 2)] = "FETCHED"),
        (o[(o.ERROR = 3)] = "ERROR");
    },
    335567: function (e, a, t) {
      e.exports = {
        wrapper: "wrapper_bfa0f5",
        productSection: "productSection_bfa0f5",
        productList: "productList_bfa0f5",
      };
    },
    132313: function (e, a, t) {
      e.exports = { heading: "heading_fcab0f" };
    },
    529079: function (e, a, t) {
      e.exports = {
        wrapper: "wrapper_c01868",
        image: "image_c01868",
        content: "content_c01868",
        icon: "icon_c01868",
        background: "background_c01868",
      };
    },
    147333: function (e, a, t) {
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
//# sourceMappingURL=50fa499c1545b4663ed2.js.map
