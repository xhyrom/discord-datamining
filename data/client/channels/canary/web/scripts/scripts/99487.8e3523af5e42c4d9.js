"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99487"],
  {
    595746(e, t, i) {
      i.d(t, { default: () => j });
      var n = i(627968),
        l = i(64700),
        r = i(132500),
        a = i(772707),
        o = i(554146),
        s = i(834730),
        E = i(123292),
        c = i(331322),
        u = i(885574),
        d = i(821609),
        _ = i(932001),
        A = i(632738),
        f = i(627575),
        m = i(393033),
        g = i(732061),
        R = i(975571),
        L = i(139716),
        S = i(847599),
        h = i(295972),
        p = i(36149),
        O = i(731738),
        T = i(17928),
        x = i(831062),
        I = i(787301);
      let v = (0, i(945810).mj)({
        kind: "user",
        name: "2026-03-age-verification-google-wallet",
        defaultConfig: { enabled: !1 },
        variations: { 1: { enabled: !0 } },
      });
      var C = i(40449),
        M = i(985018);
      let P = function (e) {
        let {
            onClose: t,
            onMethodClick: i,
            classificationId: n,
            onGoogleWalletSelect: r,
          } = e,
          { methods: a, loading: o } = (0, T.cf)([I.A], () => ({
            methods: I.A.methods,
            loading: I.A.loading,
          })),
          { initiateAgeVerification: s } = (0, p.nn)({
            onComplete: t,
            entryPoint: S.q1.EXPRESSIVE_GET_STARTED,
            shouldShowExpressiveModal: !0,
            classificationId: n,
          }),
          E = v.useConfig({ location: "age_verification_methods" }).enabled,
          [c, u] = l.useState(!1);
        return (
          l.useEffect(() => {
            E &&
              Promise.resolve(!1).then((e) => {
                x.A.increment({
                  name: O.K.GOOGLE_WALLET_AVAILABILITY_CHECK,
                  tags: [`available:${e}`],
                }),
                  u(e);
              });
          }, [E]),
          l.useEffect(() => {
            null == a && (0, h.DJ)();
          }, [a]),
          {
            ageVerificationMethods: l.useMemo(() => {
              let e =
                a
                  ?.filter((e) => e !== C.VF.GOOGLE_WALLET)
                  .map((e) => {
                    let t = C.uv[e];
                    if (null == t) return null;
                    let { title: n, description: l } = t;
                    return {
                      id: e,
                      title: M.intl.string(n),
                      description: M.intl.string(l),
                      onClick: async (t) => {
                        (0, S.St)(
                          t,
                          S.WU.EXPRESSIVE_PRIMARY,
                          S._7.METHOD_SELECT,
                          e,
                        ),
                          i?.(),
                          await s(e);
                      },
                    };
                  })
                  .filter((e) => null != e) ?? [];
              if (E && c && null != r) {
                let t = C.uv[C.VF.GOOGLE_WALLET];
                if (null != t)
                  return [
                    {
                      id: C.VF.GOOGLE_WALLET,
                      title: M.intl.string(t.title),
                      description: M.intl.string(t.description),
                      onClick: (e) => {
                        x.A.increment({
                          name: O.K.GOOGLE_WALLET_METHOD_SELECTED,
                        }),
                          (0, S.St)(
                            e,
                            S.WU.EXPRESSIVE_PRIMARY,
                            S._7.METHOD_SELECT,
                            C.VF.GOOGLE_WALLET,
                          ),
                          i?.(),
                          r();
                      },
                    },
                    ...e,
                  ];
              }
              return e;
            }, [a, E, c, r, i, s]),
            loading: o,
          }
        );
      };
      var G = i(652215),
        V = i(239093),
        W = i(516761),
        b = i(548416),
        k = i(700129);
      function U(e) {
        let { modalSessionId: t, entryPoint: i } = e;
        return (0, m.W$)()
          ? (0, n.jsx)(s.E, {
              variant: "text-xs/medium",
              children: M.intl.format(W.default.htWh1G, {
                handleOnHelpUrlHook: () => {
                  L.A.openUrl(V.d$.LEARN_MORE_UU_APPEAL_LINK),
                    (0, S.St)(t, S.WU.EXPRESSIVE_PRIMARY, S._7.LEARN_MORE);
                },
              }),
            })
          : i === S.q1.SAFETY_FLOWS
            ? (0, n.jsx)(E.Q, {
                size: "sm",
                textVariant: "text-sm/medium",
                text: M.intl.string(M.t["2jxGer"]),
                onClick: () => {
                  (0, S.St)(t, S.WU.EXPRESSIVE_PRIMARY, S._7.LOG_OUT),
                    (0, f.k)("age_verification_get_started_modal");
                },
              })
            : null;
      }
      let j = function (e) {
        let {
            transitionState: t,
            entryPoint: i,
            onClose: E,
            onComplete: f,
            dismissable: O,
            classificationId: T,
          } = e,
          [x, I] = l.useState(o.M.AGE_VERIFICATION_SURVEY_MODAL_GET_STARTED),
          v = l.useRef(x),
          [C, V] = (0, _.kn)([x], void 0, !0),
          j = l.useMemo(() => (0, r.A)(), []),
          D = l.useRef(!1),
          Y = (0, m.W$)();
        l.useEffect(() => {
          v.current = C;
        }, [C]);
        let { loading: F, ageVerificationMethods: B } = P({
          onClose: () => {
            f?.(), E();
          },
          onMethodClick: () => {
            I(o.M.AGE_VERIFICATION_SURVEY_MODAL_CLOSE);
          },
          classificationId: T,
        });
        return (
          l.useLayoutEffect(
            () => () => {
              if (D.current) return;
              let e = v.current;
              null != e &&
                ((D.current = !0),
                g.A.maybeOpenAgeVerificationUserFeedback({
                  location: "age_verification_get_started_modal",
                  visibleContent: e,
                }));
            },
            [],
          ),
          l.useEffect(() => {
            (0, S.Bs)(j, S.WU.EXPRESSIVE_PRIMARY, i);
          }, [j, i]),
          (0, n.jsx)(a.k, {
            transitionState: t,
            onClose: E,
            gradientColor: "blue",
            dismissable: O,
            graphic: { type: "image", src: k.A },
            title: (0, p.ST)(i),
            subtitle: (0, p.mK)(
              i,
              () => {
                L.A.openUrl(R.A.getArticleURL(G.MVz.TIGGER_PAWTECT_LEARN_MORE)),
                  (0, S.St)(j, S.WU.EXPRESSIVE_PRIMARY, S._7.LEARN_MORE);
              },
              Y,
            ),
            actionBarInput: (0, n.jsx)(U, { modalSessionId: j, entryPoint: i }),
            children: (0, n.jsxs)(c.B, {
              direction: "vertical",
              gap: 16,
              children: [
                (0, n.jsxs)(c.B, {
                  fullWidth: !1,
                  direction: "horizontal",
                  gap: 8,
                  padding: { top: 8, bottom: 8, left: 12, right: 12 },
                  align: "center",
                  className: b.W,
                  children: [
                    (0, n.jsx)(u.m, { size: "lg", color: "currentColor" }),
                    (0, n.jsx)(s.E, {
                      variant: "text-sm/medium",
                      color: "text-feedback-info",
                      children: M.intl.string(W.default.ar3a3q),
                    }),
                  ],
                }),
                null == B || 0 === B.length
                  ? (0, n.jsxs)(c.B, {
                      direction: "vertical",
                      align: "center",
                      gap: 16,
                      children: [
                        (0, n.jsx)(s.E, {
                          variant: "text-xs/medium",
                          color: "text-subtle",
                          children: M.intl.string(W.default.cR6336),
                        }),
                        (0, n.jsx)(d.$, {
                          variant: "primary",
                          size: "sm",
                          text: M.intl.string(W.default.hDvmYP),
                          onClick: () => {
                            (0, h.DJ)();
                          },
                        }),
                      ],
                    })
                  : (0, n.jsx)(c.B, {
                      direction: "vertical",
                      gap: 8,
                      children: B.map((e) => {
                        let { title: t, description: i, onClick: l } = e;
                        return (0, n.jsx)(
                          A.PQ,
                          {
                            variant: "clickable",
                            title: t,
                            description: i,
                            buttonDisabled: F,
                            onButtonPress: () => l(j),
                          },
                          t,
                        );
                      }),
                    }),
              ],
            }),
          })
        );
      };
    },
    627575(e, t, i) {
      i.d(t, { k: () => r });
      var n = i(192308),
        l = i(830215);
      function r(e) {
        (0, n.closeAllModals)(), l.A.logout(e);
      }
    },
  },
]);
//# sourceMappingURL=99487.8e3523af5e42c4d9.js.map
