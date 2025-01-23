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
        s = e(591759);
      function o(t, a, e) {
        var o;
        return null !== (o = s.Z.toURLSafe((0, r._W)(t, a, e))) && void 0 !== o
          ? o
          : void 0;
      }
    },
    7225: function (t, a, e) {
      e.r(a),
        e.d(a, {
          default: function () {
            return g;
          },
        }),
        e(47120);
      var r,
        s,
        o = e(200651),
        i = e(192379),
        n = e(541822),
        c = e(442837),
        l = e(481060),
        d = e(728345),
        u = e(812206),
        p = e(600164),
        f = e(886176),
        m = e(572004),
        h = e(504211),
        S = e(283836),
        x = e(507608),
        _ = e(533159),
        N = e(981631),
        C = e(979007),
        E = e(388032),
        b = e(671702);
      function g(t) {
        let { onClose: a, transitionState: e, appId: r, guildId: s } = t,
          g = (0, c.e7)([u.Z], () => u.Z.getApplication(r), [r]),
          [j, v] = i.useState(() =>
            u.Z.isFetchingApplication(r) ? { status: 1 } : { status: 0 },
          );
        i.useEffect(() => {
          0 === j.status &&
            (v({ status: 1 }),
            d.ZP.fetchApplication(r)
              .then(() => {
                v({ status: 2 });
              })
              .catch((t) => {
                v({ status: 3, error: t.message });
              }));
        }, [r, j.status]);
        let { subscriptions: T, otps: O } = (0, S.q)(r);
        if (null == g) return null;
        let R = E.intl.formatToPlainString(E.t.XDRjs7, { appName: g.name });
        return (0, o.jsxs)(l.ModalRoot, {
          transitionState: e,
          "aria-label": R,
          size: l.ModalSize.DYNAMIC,
          className: b.modal,
          children: [
            (0, o.jsxs)(l.ModalHeader, {
              className: b.modalHeader,
              children: [
                (0, o.jsxs)("div", {
                  className: b.modalTitle,
                  children: [
                    (0, o.jsx)(f.Z, {}),
                    (0, o.jsx)(l.Heading, {
                      variant: "heading-md/semibold",
                      children: R,
                    }),
                  ],
                }),
                (0, o.jsxs)("div", {
                  className: b.modalHeaderLinks,
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
                              N.Z5c.GLOBAL_DISCOVERY_APPS_PROFILE_SECTION(
                                r,
                                C.GlobalDiscoveryAppsSections.STORE,
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
                      className: b.modalCloseBtn,
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsx)("div", {
              className: b.scrollerWrapper,
              children: (0, o.jsx)(n.Z, {
                className: b.scroller,
                children: (0, o.jsx)(x.AF, {
                  app: g,
                  guildId: s,
                  subscriptions: T,
                  otps: O,
                }),
              }),
            }),
            (0, o.jsx)(l.ModalFooter, {
              justify: p.Z.Justify.END,
              children: (0, o.jsx)(l.Text, {
                variant: "text-md/normal",
                children:
                  null != g.termsOfServiceUrl || null != g.privacyPolicyUrl
                    ? (0, o.jsx)(_.Z, {
                        termsOfServiceUrl: g.termsOfServiceUrl,
                        privacyPolicyUrl: g.privacyPolicyUrl,
                      })
                    : E.intl.string(E.t["3ZY+0N"]),
              }),
            }),
          ],
        });
      }
      ((s = r || (r = {}))[(s.NONE = 0)] = "NONE"),
        (s[(s.FETCHING = 1)] = "FETCHING"),
        (s[(s.FETCHED = 2)] = "FETCHED"),
        (s[(s.ERROR = 3)] = "ERROR");
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
//# sourceMappingURL=28bbceedc73170ace96b.js.map
