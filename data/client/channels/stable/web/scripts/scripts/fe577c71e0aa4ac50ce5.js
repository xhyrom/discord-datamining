"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["7657"],
  {
    150414: function (t, a, e) {
      e.d(a, {
        q: function () {
          return o;
        },
      });
      var r = e(73346),
        i = e(591759);
      function o(t, a, e) {
        var o;
        return null !== (o = i.Z.toURLSafe((0, r._W)(t, a, e))) && void 0 !== o
          ? o
          : void 0;
      }
    },
    7225: function (t, a, e) {
      e.r(a),
        e.d(a, {
          default: function () {
            return T;
          },
        }),
        e(47120);
      var r,
        i,
        o = e(200651),
        s = e(192379),
        n = e(541822),
        c = e(442837),
        l = e(481060),
        d = e(728345),
        u = e(812206),
        p = e(600164),
        f = e(886176),
        m = e(572004),
        h = e(504211),
        x = e(283836),
        N = e(507608),
        C = e(533159),
        S = e(981631),
        _ = e(272242),
        E = e(388032),
        g = e(671702);
      function T(t) {
        let { onClose: a, transitionState: e, appId: r, guildId: i } = t,
          T = (0, c.e7)([u.Z], () => u.Z.getApplication(r), [r]),
          [b, j] = s.useState(() =>
            u.Z.isFetchingApplication(r) ? { status: 1 } : { status: 0 },
          );
        s.useEffect(() => {
          0 === b.status &&
            (j({ status: 1 }),
            d.ZP.fetchApplication(r)
              .then(() => {
                j({ status: 2 });
              })
              .catch((t) => {
                j({ status: 3, error: t.message });
              }));
        }, [r, b.status]);
        let { subscriptions: v, otps: R } = (0, x.q)(r);
        if (null == T) return null;
        let O = E.intl.formatToPlainString(E.t.XDRjs7, { appName: T.name });
        return (0, o.jsxs)(l.ModalRoot, {
          transitionState: e,
          "aria-label": O,
          size: l.ModalSize.DYNAMIC,
          className: g.modal,
          children: [
            (0, o.jsxs)(l.ModalHeader, {
              className: g.modalHeader,
              children: [
                (0, o.jsxs)("div", {
                  className: g.modalTitle,
                  children: [
                    (0, o.jsx)(f.Z, {}),
                    (0, o.jsx)(l.Heading, {
                      variant: "heading-md/semibold",
                      children: O,
                    }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  className: g.modalHeaderLinks,
                  children: [
                    m.wS &&
                      (0, o.jsx)(l.Button, {
                        look: l.ButtonLooks.BLANK,
                        size: l.ButtonSizes.ICON,
                        color: l.ButtonColors.TRANSPARENT,
                        "aria-label": E.intl.string(E.t.WqhZsr),
                        onClick: () => {
                          let t = ""
                            .concat(location.protocol, "//")
                            .concat(location.host)
                            .concat(
                              S.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                                r,
                                _.ApplicationDirectoryProfileSections.STORE,
                              ),
                            );
                          (0, m.JG)(t),
                            (0, l.showToast)(
                              (0, l.createToast)(
                                E.intl.string(E.t["L/PwZW"]),
                                l.ToastType.SUCCESS,
                              ),
                            ),
                            (0, h.X)(r, h.B.STORE_MODAL);
                        },
                        children: (0, o.jsx)(l.LinkIcon, { size: "sm" }),
                      }),
                    (0, o.jsx)(l.ModalCloseButton, {
                      onClick: a,
                      className: g.modalCloseBtn,
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsx)("div", {
              className: g.scrollerWrapper,
              children: (0, o.jsx)(n.Z, {
                className: g.scroller,
                children: (0, o.jsx)(N.AF, {
                  app: T,
                  guildId: i,
                  subscriptions: v,
                  otps: R,
                }),
              }),
            }),
            (0, o.jsx)(l.ModalFooter, {
              justify: p.Z.Justify.END,
              children: (0, o.jsx)(l.Text, {
                variant: "text-md/normal",
                children:
                  null != T.termsOfServiceUrl || null != T.privacyPolicyUrl
                    ? (0, o.jsx)(C.Z, {
                        termsOfServiceUrl: T.termsOfServiceUrl,
                        privacyPolicyUrl: T.privacyPolicyUrl,
                      })
                    : E.intl.string(E.t["3ZY+0N"]),
              }),
            }),
          ],
        });
      }
      ((i = r || (r = {}))[(i.NONE = 0)] = "NONE"),
        (i[(i.FETCHING = 1)] = "FETCHING"),
        (i[(i.FETCHED = 2)] = "FETCHED"),
        (i[(i.ERROR = 3)] = "ERROR");
    },
    941221: function (t, a, e) {
      t.exports = {
        wrapper: "wrapper_bfa0f5",
        productsContainer: "productsContainer_bfa0f5",
        productSection: "productSection_bfa0f5",
        subscriptionCardSubtext: "subscriptionCardSubtext_bfa0f5",
      };
    },
    755522: function (t, a, e) {
      t.exports = { heading: "heading_fcab0f" };
    },
    422235: function (t, a, e) {
      t.exports = {
        wrapper: "wrapper_c01868",
        image: "image_c01868",
        content: "content_c01868",
        icon: "icon_c01868",
        background: "background_c01868",
      };
    },
    134992: function (t, a, e) {
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
//# sourceMappingURL=fe577c71e0aa4ac50ce5.js.map
