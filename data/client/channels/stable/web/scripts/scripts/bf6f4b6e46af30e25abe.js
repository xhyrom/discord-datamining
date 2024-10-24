"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["47988"],
  {
    7225: function (e, a, s) {
      s.r(a),
        s.d(a, {
          default: function () {
            return x;
          },
        }),
        s(47120);
      var t,
        o,
        r = s(200651),
        i = s(192379),
        c = s(541822),
        n = s(442837),
        l = s(481060),
        d = s(728345),
        p = s(812206),
        u = s(600164),
        f = s(886176),
        _ = s(572004),
        m = s(504211),
        N = s(283836),
        T = s(507608),
        E = s(981631),
        O = s(272242),
        h = s(689938),
        S = s(213891);
      function x(e) {
        let { onClose: a, transitionState: s, appId: t, guildId: o } = e,
          x = (0, n.e7)([p.Z], () => p.Z.getApplication(t), [t]),
          [C, R] = i.useState(() =>
            p.Z.isFetchingApplication(t) ? { status: 1 } : { status: 0 },
          );
        i.useEffect(() => {
          0 === C.status &&
            (R({ status: 1 }),
            d.ZP.fetchApplication(t)
              .then(() => {
                R({ status: 2 });
              })
              .catch((e) => {
                R({ status: 3, error: e.message });
              }));
        }, [t, C.status]);
        let { subscriptions: g, otps: I } = (0, N.q)(t);
        if (null == x) return null;
        let j = h.Z.Messages.STOREFRONT_TITLE.format({ appName: x.name });
        return (0, r.jsxs)(l.ModalRoot, {
          transitionState: s,
          "aria-label": j,
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
                      children: j,
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: S.modalHeaderLinks,
                  children: [
                    _.wS &&
                      (0, r.jsx)(l.Button, {
                        look: l.ButtonLooks.BLANK,
                        size: l.ButtonSizes.ICON,
                        color: l.ButtonColors.TRANSPARENT,
                        "aria-label": h.Z.Messages.COPY_LINK,
                        onClick: () => {
                          let e = ""
                            .concat(location.protocol, "//")
                            .concat(location.host)
                            .concat(
                              E.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                                t,
                                O.ApplicationDirectoryProfileSections.STORE,
                              ),
                            );
                          (0, _.JG)(e),
                            (0, l.showToast)(
                              (0, l.createToast)(
                                h.Z.Messages.COPIED_LINK,
                                l.ToastType.SUCCESS,
                              ),
                            ),
                            (0, m.X)(t, m.B.STORE_MODAL);
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
                children: (0, r.jsx)(T.AF, {
                  app: x,
                  guildId: o,
                  subscriptions: g,
                  otps: I,
                }),
              }),
            }),
            (0, r.jsx)(l.ModalFooter, {
              justify: u.Z.Justify.END,
              children: (0, r.jsx)(l.Text, {
                variant: "text-md/normal",
                children:
                  null != x.termsOfServiceUrl && null != x.privacyPolicyUrl
                    ? h.Z.Messages.STOREFRONT_VIEW_TOS_PP.format({
                        tosUrl: x.termsOfServiceUrl,
                        ppUrl: x.privacyPolicyUrl,
                      })
                    : h.Z.Messages.STOREFRONT_NO_TOS_PP,
              }),
            }),
          ],
        });
      }
      ((o = t || (t = {}))[(o.NONE = 0)] = "NONE"),
        (o[(o.FETCHING = 1)] = "FETCHING"),
        (o[(o.FETCHED = 2)] = "FETCHED"),
        (o[(o.ERROR = 3)] = "ERROR");
    },
    335567: function (e, a, s) {
      e.exports = {
        wrapper: "wrapper_bfa0f5",
        productSection: "productSection_bfa0f5",
        productList: "productList_bfa0f5",
      };
    },
    132313: function (e, a, s) {
      e.exports = { heading: "heading_fcab0f" };
    },
    529079: function (e, a, s) {
      e.exports = {
        wrapper: "wrapper_c01868",
        image: "image_c01868",
        content: "content_c01868",
        icon: "icon_c01868",
        background: "background_c01868",
      };
    },
    147333: function (e, a, s) {
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
//# sourceMappingURL=bf6f4b6e46af30e25abe.js.map
