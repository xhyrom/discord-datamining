"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["87499"],
  {
    150414: function (t, a, e) {
      e.d(a, {
        q: function () {
          return i;
        },
      });
      var r = e(73346),
        o = e(591759);
      function i(t, a, e) {
        var i;
        return null !== (i = o.Z.toURLSafe((0, r._W)(t, a, e))) && void 0 !== i
          ? i
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
        o,
        i = e(200651),
        s = e(192379),
        n = e(541822),
        c = e(442837),
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
        C = e(981631),
        S = e(272242),
        E = e(388032),
        g = e(775012);
      function T(t) {
        let { onClose: a, transitionState: e, appId: r, guildId: o } = t,
          T = (0, c.e7)([p.Z], () => p.Z.getApplication(r), [r]),
          [j, v] = s.useState(() =>
            p.Z.isFetchingApplication(r) ? { status: 1 } : { status: 0 },
          );
        s.useEffect(() => {
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
        let { subscriptions: R, otps: O } = (0, N.q)(r);
        if (null == T) return null;
        let I = E.intl.formatToPlainString(E.t.XDRjs7, { appName: T.name });
        return (0, i.jsxs)(l.ModalRoot, {
          transitionState: e,
          "aria-label": I,
          size: l.ModalSize.DYNAMIC,
          className: g.modal,
          children: [
            (0, i.jsxs)(l.ModalHeader, {
              className: g.modalHeader,
              children: [
                (0, i.jsxs)("div", {
                  className: g.modalTitle,
                  children: [
                    (0, i.jsx)(f.Z, {}),
                    (0, i.jsx)(l.Heading, {
                      variant: "heading-md/semibold",
                      children: I,
                    }),
                  ],
                }),
                (0, i.jsxs)("div", {
                  className: g.modalHeaderLinks,
                  children: [
                    m.wS &&
                      (0, i.jsx)(l.Button, {
                        look: l.ButtonLooks.BLANK,
                        size: l.ButtonSizes.ICON,
                        color: l.ButtonColors.TRANSPARENT,
                        "aria-label": E.intl.string(E.t.WqhZsr),
                        onClick: () => {
                          let t = ""
                            .concat(location.protocol, "//")
                            .concat(location.host)
                            .concat(
                              C.Z5c.APPLICATION_DIRECTORY_PROFILE_SECTION(
                                r,
                                S.ApplicationDirectoryProfileSections.STORE,
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
                        children: (0, i.jsx)(l.LinkIcon, { size: "sm" }),
                      }),
                    (0, i.jsx)(l.ModalCloseButton, {
                      onClick: a,
                      className: g.modalCloseBtn,
                    }),
                  ],
                }),
              ],
            }),
            (0, i.jsx)("div", {
              className: g.scrollerWrapper,
              children: (0, i.jsx)(n.Z, {
                className: g.scroller,
                children: (0, i.jsx)(x.AF, {
                  app: T,
                  guildId: o,
                  subscriptions: R,
                  otps: O,
                }),
              }),
            }),
            (0, i.jsx)(l.ModalFooter, {
              justify: u.Z.Justify.END,
              children: (0, i.jsx)(l.Text, {
                variant: "text-md/normal",
                children:
                  null != T.termsOfServiceUrl || null != T.privacyPolicyUrl
                    ? (0, i.jsx)(_.Z, {
                        termsOfServiceUrl: T.termsOfServiceUrl,
                        privacyPolicyUrl: T.privacyPolicyUrl,
                      })
                    : E.intl.string(E.t["3ZY+0N"]),
              }),
            }),
          ],
        });
      }
      ((o = r || (r = {}))[(o.NONE = 0)] = "NONE"),
        (o[(o.FETCHING = 1)] = "FETCHING"),
        (o[(o.FETCHED = 2)] = "FETCHED"),
        (o[(o.ERROR = 3)] = "ERROR");
    },
    800879: function (t, a, e) {
      t.exports = {
        wrapper: "wrapper_bfa0f5",
        productsContainer: "productsContainer_bfa0f5",
        productSection: "productSection_bfa0f5",
      };
    },
    920633: function (t, a, e) {
      t.exports = { heading: "heading_fcab0f" };
    },
    13951: function (t, a, e) {
      t.exports = {
        wrapper: "wrapper_c01868",
        image: "image_c01868",
        content: "content_c01868",
        icon: "icon_c01868",
        background: "background_c01868",
      };
    },
    917626: function (t, a, e) {
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
//# sourceMappingURL=8eeee66a0d11693d9772.js.map
