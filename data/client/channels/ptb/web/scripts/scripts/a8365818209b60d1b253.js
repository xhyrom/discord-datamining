"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["47988"],
  {
    7225: function (t, a, e) {
      e.r(a),
        e.d(a, {
          default: function () {
            return T;
          },
        }),
        e(47120);
      var s,
        i,
        r = e(200651),
        o = e(192379),
        c = e(541822),
        n = e(442837),
        l = e(481060),
        d = e(728345),
        p = e(812206),
        u = e(600164),
        f = e(886176),
        m = e(572004),
        h = e(504211),
        N = e(283836),
        x = e(507608),
        _ = e(533159),
        E = e(981631),
        S = e(272242),
        g = e(388032),
        C = e(213891);
      function T(t) {
        let { onClose: a, transitionState: e, appId: s, guildId: i } = t,
          T = (0, n.e7)([p.Z], () => p.Z.getApplication(s), [s]),
          [j, O] = o.useState(() =>
            p.Z.isFetchingApplication(s) ? { status: 1 } : { status: 0 },
          );
        o.useEffect(() => {
          0 === j.status &&
            (O({ status: 1 }),
            d.ZP.fetchApplication(s)
              .then(() => {
                O({ status: 2 });
              })
              .catch((t) => {
                O({ status: 3, error: t.message });
              }));
        }, [s, j.status]);
        let { subscriptions: R, otps: I } = (0, N.q)(s);
        if (null == T) return null;
        let b = g.intl.formatToPlainString(g.t.XDRjs7, { appName: T.name });
        return (0, r.jsxs)(l.ModalRoot, {
          transitionState: e,
          "aria-label": b,
          size: l.ModalSize.DYNAMIC,
          className: C.modal,
          children: [
            (0, r.jsxs)(l.ModalHeader, {
              className: C.modalHeader,
              children: [
                (0, r.jsxs)("div", {
                  className: C.modalTitle,
                  children: [
                    (0, r.jsx)(f.Z, {}),
                    (0, r.jsx)(l.Heading, {
                      variant: "heading-md/semibold",
                      children: b,
                    }),
                  ],
                }),
                (0, r.jsxs)("div", {
                  className: C.modalHeaderLinks,
                  children: [
                    m.wS &&
                      (0, r.jsx)(l.Button, {
                        look: l.ButtonLooks.BLANK,
                        size: l.ButtonSizes.ICON,
                        color: l.ButtonColors.TRANSPARENT,
                        "aria-label": g.intl.string(g.t.WqhZsr),
                        onClick: () => {
                          let t = ""
                            .concat(location.protocol, "//")
                            .concat(location.host)
                            .concat(
                              E.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                                s,
                                S.ApplicationDirectoryProfileSections.STORE,
                              ),
                            );
                          (0, m.JG)(t),
                            (0, l.showToast)(
                              (0, l.createToast)(
                                g.intl.string(g.t["L/PwZW"]),
                                l.ToastType.SUCCESS,
                              ),
                            ),
                            (0, h.X)(s, h.B.STORE_MODAL);
                        },
                        children: (0, r.jsx)(l.LinkIcon, { size: "sm" }),
                      }),
                    (0, r.jsx)(l.ModalCloseButton, {
                      onClick: a,
                      className: C.modalCloseBtn,
                    }),
                  ],
                }),
              ],
            }),
            (0, r.jsx)("div", {
              className: C.scrollerWrapper,
              children: (0, r.jsx)(c.Z, {
                className: C.scroller,
                children: (0, r.jsx)(x.AF, {
                  app: T,
                  guildId: i,
                  subscriptions: R,
                  otps: I,
                }),
              }),
            }),
            (0, r.jsx)(l.ModalFooter, {
              justify: u.Z.Justify.END,
              children: (0, r.jsx)(l.Text, {
                variant: "text-md/normal",
                children:
                  null != T.termsOfServiceUrl || null != T.privacyPolicyUrl
                    ? (0, r.jsx)(_.Z, {
                        termsOfServiceUrl: T.termsOfServiceUrl,
                        privacyPolicyUrl: T.privacyPolicyUrl,
                      })
                    : g.intl.string(g.t["3ZY+0N"]),
              }),
            }),
          ],
        });
      }
      ((i = s || (s = {}))[(i.NONE = 0)] = "NONE"),
        (i[(i.FETCHING = 1)] = "FETCHING"),
        (i[(i.FETCHED = 2)] = "FETCHED"),
        (i[(i.ERROR = 3)] = "ERROR");
    },
    335567: function (t, a, e) {
      t.exports = {
        wrapper: "wrapper_bfa0f5",
        productSection: "productSection_bfa0f5",
        productList: "productList_bfa0f5",
      };
    },
    132313: function (t, a, e) {
      t.exports = { heading: "heading_fcab0f" };
    },
    529079: function (t, a, e) {
      t.exports = {
        wrapper: "wrapper_c01868",
        image: "image_c01868",
        content: "content_c01868",
        icon: "icon_c01868",
        background: "background_c01868",
      };
    },
    147333: function (t, a, e) {
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
//# sourceMappingURL=a8365818209b60d1b253.js.map
