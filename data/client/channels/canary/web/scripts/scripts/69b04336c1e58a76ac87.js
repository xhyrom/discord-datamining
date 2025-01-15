"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["10756"],
  {
    462991: function (t) {
      t.exports = "/assets/1a8b06e1c2b7a9bb1946.svg";
    },
    746882: function (t, e, n) {
      n.r(e),
        n.d(e, {
          default: function () {
            return T;
          },
        }),
        n(47120);
      var a,
        r,
        i = n(200651),
        l = n(192379),
        o = n(512722),
        s = n.n(o),
        c = n(913527),
        u = n.n(c),
        d = n(442837),
        f = n(481060),
        h = n(749210),
        m = n(600164),
        _ = n(313201),
        b = n(592125),
        E = n(944486),
        g = n(594174),
        A = n(626135),
        x = n(63063),
        C = n(771308),
        N = n(758119),
        R = n(13430),
        y = n(723359),
        M = n(981631),
        L = n(388032),
        j = n(564842);
      function T(t) {
        let { transitionState: e, source: a } = t,
          r = (0, d.e7)([g.default], () => g.default.getCurrentUser()),
          o = (0, d.e7)([E.Z, b.Z], () => b.Z.getChannel(E.Z.getChannelId())),
          [c, T] = l.useState(null),
          [p, S] = l.useState(null),
          [v, B] = l.useState(!1),
          [k, F] = l.useState(0),
          G = l.createRef(),
          I = l.createRef(),
          w = (0, _.Dt)(),
          Z = null != c ? u()().diff(c, "years") : null;
        function z() {
          if (a === y.L0.NSFW_SERVER_INVITE_EMBED) {
            (0, N.qV)(a);
            return;
          }
          let t = null == o ? void 0 : o.getGuildId();
          h.Z.nsfwReturnToSafety(t), (0, N.qV)(a);
        }
        async function O() {
          s()(null != c, "Cannot submit null birthday.");
          try {
            return S(null), B(!0), await (0, C.Av)(c, a);
          } catch (e) {
            if (null != e.body && null != e.body.date_of_birth)
              (0, N.C8)(a, e.body.date_of_birth);
            else {
              var t;
              (null == e
                ? void 0
                : null === (t = e.body) || void 0 === t
                  ? void 0
                  : t.username) != null
                ? S(L.intl.string(L.t["TGg/2t"]))
                : S(null == e ? void 0 : e.body.message),
                B(!1);
            }
          }
        }
        async function D() {
          if (
            (s()(
              null != Z,
              "Cannot submit if we haven't been able to calculate age.",
            ),
            Z < 18)
          ) {
            F(1);
            return;
          }
          await O();
        }
        async function U(t) {
          t.preventDefault(), !v && null != c && (await D());
        }
        async function P() {
          null == (await O()) && F(0);
        }
        l.useEffect(() => {
          null != r && null != r.nsfwAllowed && (0, N.qq)(a);
        }),
          l.useEffect(() => {
            A.default.track(M.rMx.AGE_GATE_ACTION, {
              source: a,
              action: y.Al.AGE_GATE_OPEN,
            });
          }, [a]);
        let q = l.useCallback(
            (t) => {
              T(t);
            },
            [T],
          ),
          K = l.useCallback(() => {
            var t;
            null === (t = I.current) || void 0 === t || t.focus();
          }, [I]);
        return 0 === k
          ? (function () {
              let t = (() => {
                  if (a === y.L0.FAMILY_CENTER)
                    return L.intl.string(L.t.M7mt7u);
                  return L.intl.string(L.t.F8otRk);
                })(),
                r = (() => {
                  switch (a) {
                    case y.L0.FAMILY_CENTER:
                      return L.intl.string(L.t.mhUrKS);
                    case y.L0.DEEP_LINK_PROMPT:
                      return L.intl.format(L.t.iyhg2t, {
                        helpURL: x.Z.getArticleURL(M.BhN.AGE_GATE),
                      });
                    default:
                      return L.intl.format(L.t.n3QjDA, {
                        helpURL: x.Z.getArticleURL(M.BhN.AGE_GATE),
                      });
                  }
                })();
              return (0, i.jsxs)(f.ModalRoot, {
                transitionState: e,
                size: f.ModalSize.SMALL,
                "aria-labelledby": w,
                children: [
                  (0, i.jsxs)(f.ModalContent, {
                    children: [
                      (0, i.jsxs)("div", {
                        className: j.container,
                        children: [
                          (0, i.jsx)("img", {
                            alt: "",
                            src: n(462991),
                            className: j.img,
                          }),
                          (0, i.jsx)(f.Heading, {
                            variant: "heading-xl/semibold",
                            className: j.title,
                            id: w,
                            children: t,
                          }),
                          (0, i.jsx)(f.Text, {
                            color: "header-secondary",
                            variant: "text-sm/normal",
                            children: r,
                          }),
                        ],
                      }),
                      (0, i.jsx)("form", {
                        onSubmit: U,
                        children: (0, i.jsx)(R.Z, {
                          label: L.intl.string(L.t.rhBeKS),
                          wrapperClassName: j.birthday,
                          name: "date_of_birth",
                          onChange: q,
                          onPopulated: K,
                          error: p,
                          value: c,
                          ref: G,
                          autoFocus: !0,
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsxs)(f.ModalFooter, {
                    justify: m.Z.Justify.BETWEEN,
                    children: [
                      (0, i.jsx)(f.Button, {
                        buttonRef: I,
                        submitting: v,
                        disabled: null == c,
                        size: f.ButtonSizes.SMALL,
                        onClick: D,
                        children: L.intl.string(L.t.uBFuoq),
                      }),
                      (0, i.jsx)(f.Button, {
                        look: f.Button.Looks.LINK,
                        size: f.Button.Sizes.NONE,
                        color: f.Button.Colors.PRIMARY,
                        onClick: z,
                        children: L.intl.string(L.t["1MrpWF"]),
                      }),
                    ],
                  }),
                ],
              });
            })()
          : (0, i.jsxs)(f.ModalRoot, {
              transitionState: f.ModalTransitionState.ENTERED,
              size: f.ModalSize.SMALL,
              "aria-labelledby": w,
              children: [
                (0, i.jsx)(f.ModalContent, {
                  children: (0, i.jsxs)("div", {
                    className: j.confirmContainer,
                    children: [
                      (0, i.jsx)(f.Heading, {
                        variant: "heading-xl/semibold",
                        className: j.confirmTitle,
                        id: w,
                        children: L.intl.format(L.t.wumolZ, { age: Z }),
                      }),
                      (0, i.jsx)(f.Text, {
                        color: "header-secondary",
                        variant: "text-sm/normal",
                        children: L.intl.format(L.t.n3QjDA, {
                          helpURL: x.Z.getArticleURL(M.BhN.AGE_GATE),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, i.jsxs)(f.ModalFooter, {
                  className: j.confirmFooter,
                  children: [
                    (0, i.jsx)(f.Button, {
                      look: f.Button.Looks.LINK,
                      size: f.Button.Sizes.NONE,
                      color: f.Button.Colors.PRIMARY,
                      onClick: () => F(0),
                      children: L.intl.string(L.t.cfYCra),
                    }),
                    (0, i.jsx)(f.Button, {
                      color: f.Button.Colors.BRAND,
                      onClick: P,
                      children: L.intl.string(L.t["6tahio"]),
                    }),
                  ],
                }),
              ],
            });
      }
      ((r = a || (a = {}))[(r.AGE_GATE_FORM = 0)] = "AGE_GATE_FORM"),
        (r[(r.CONFIRM = 1)] = "CONFIRM");
    },
    342746: function (t, e, n) {
      n.r(
        (t.exports = {
          container: "container_a57e6a",
          title: "title_a57e6a",
          inputs: "inputs_a57e6a",
          day: "day_a57e6a",
          month: "month_a57e6a",
          year: "year_a57e6a",
          errors: "errors_a57e6a",
        }),
      );
    },
    564842: function (t, e, n) {
      t.exports = {
        container: "container_ac53d0",
        title: "title_ac53d0",
        img: "img_ac53d0",
        birthday: "birthday_ac53d0",
        confirmContainer: "confirmContainer_ac53d0",
        confirmTitle: "confirmTitle_ac53d0",
        confirmFooter: "confirmFooter_ac53d0",
      };
    },
    55161: function (t, e, n) {
      t.exports = {
        select: "select_fbe7b1",
        error: "error_fbe7b1",
        errorMessage: "errorMessage_fbe7b1",
      };
    },
  },
]);
//# sourceMappingURL=69b04336c1e58a76ac87.js.map
