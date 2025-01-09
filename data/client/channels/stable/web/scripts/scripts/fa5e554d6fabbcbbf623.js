"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["55774"],
  {
    44272: function (e, t, l) {
      l.d(t, {
        Z: function () {
          return a;
        },
      }),
        l(47120),
        l(653041);
      var n = l(200651),
        i = l(192379),
        r = l(481060);
      let s = [
        { position: 0, alpha: 0 },
        { position: 0.19, alpha: 0.262 },
        { position: 0.34, alpha: 0.459 },
        { position: 0.47, alpha: 0.618 },
        { position: 0.57, alpha: 0.722 },
        { position: 0.65, alpha: 0.806 },
        { position: 0.73, alpha: 0.874 },
        { position: 0.8, alpha: 0.925 },
        { position: 0.86, alpha: 0.958 },
        { position: 0.91, alpha: 0.979 },
        { position: 0.95, alpha: 0.992 },
        { position: 0.98, alpha: 0.998 },
        { position: 1, alpha: 1 },
      ];
      function a(e) {
        let {
            className: t,
            children: l,
            containerRef: a,
            faderSize: o,
            faderEdgeThreshold: d,
          } = e,
          u = i.useRef(null),
          [c, m] = i.useState(0),
          [h, x] = i.useState(0),
          [v, p] = i.useState(0),
          g = i.useCallback(() => {
            null != u.current &&
              (m(u.current.getDistanceFromTop()),
              x(u.current.getDistanceFromBottom()),
              p(u.current.getScrollerState().offsetHeight));
          }, []);
        i.useEffect(() => {
          if ((g(), null == a.current)) return;
          let e = new ResizeObserver(() => {
            g();
          });
          return (
            e.observe(a.current),
            () => {
              e.disconnect();
            }
          );
        }, [u, a, g]);
        let f = i.useMemo(() => {
          if (0 === c && 0 === h) return {};
          let e = [];
          if ((e.push("to bottom"), c > 0)) {
            let t = d > 0 ? 1 - Math.min(d, c) / d : 1;
            for (let l = 0; l < s.length; l++) {
              let { position: n, alpha: i } = s[l],
                r = (n * o).toFixed(2);
              e.push(
                "hsla(0, 0%, 0%, "
                  .concat(t + i * (1 - t), ") ")
                  .concat(r, "px"),
              );
            }
          }
          if (h > 0) {
            let t = v - o,
              l = d > 0 ? 1 - Math.min(d, h) / d : 1;
            for (let n = s.length - 1; n >= 0; n--) {
              let { position: i, alpha: r } = s[n],
                a = (t + (1 - i) * o).toFixed(2);
              e.push(
                "hsla(0, 0%, 0%, "
                  .concat(l + r * (1 - l), ") ")
                  .concat(a, "px"),
              );
            }
          }
          return { maskImage: "linear-gradient(".concat(e.join(","), ")") };
        }, [h, c, d, o, v]);
        return (0, n.jsx)(r.AdvancedScrollerNone, {
          ref: u,
          style: f,
          className: t,
          onScroll: g,
          children: l,
        });
      }
    },
    577809: function (e, t, l) {
      l(47120);
      var n = l(200651),
        i = l(192379),
        r = l(442837),
        s = l(481060),
        a = l(893776),
        o = l(809206),
        d = l(607070),
        u = l(44272),
        c = l(166184),
        m = l(650774),
        h = l(271383),
        x = l(594174),
        v = l(626135),
        p = l(944163),
        g = l(246364),
        f = l(983736),
        N = l(187565),
        I = l(990488),
        j = l(592286),
        C = l(981631),
        F = l(388032),
        M = l(145638),
        b = l(419851),
        S = l(246403);
      let O = (e) => {
          let {
            headerId: t,
            email: l,
            password: i,
            setEmail: r,
            setPassword: a,
            emailError: o,
            passwordError: d,
          } = e;
          return (0, n.jsxs)("div", {
            className: M.content,
            children: [
              (0, n.jsx)("div", {
                className: M.applicationIconContainer,
                children: (0, n.jsx)("img", {
                  alt: F.intl.string(F.t.ewGfjo),
                  src: b,
                  className: M.applicationIcon,
                }),
              }),
              (0, n.jsx)(s.Heading, {
                id: t,
                variant: "heading-xl/semibold",
                className: M.header,
                children: F.intl.string(F.t.MhcDLy),
              }),
              (0, n.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                children: F.intl.string(F.t.SPlaR0),
              }),
              (0, n.jsx)("hr", { className: M.divider }),
              (0, n.jsx)(s.FormItem, {
                title: F.intl.string(F.t.dI4d4e),
                className: M.formItem,
                children: (0, n.jsx)(s.TextInput, {
                  value: l,
                  error: o,
                  onChange: r,
                  autoFocus: !0,
                }),
              }),
              (0, n.jsx)(s.FormItem, {
                title: F.intl.string(F.t["CIGa+/"]),
                className: M.formItem,
                children: (0, n.jsx)(s.TextInput, {
                  type: "password",
                  value: i,
                  error: d,
                  onChange: a,
                }),
              }),
            ],
          });
        },
        T = (e) => {
          let { headerId: t, email: l } = e;
          return (0, n.jsxs)("div", {
            className: M.content,
            children: [
              (0, n.jsx)("img", {
                alt: F.intl.string(F.t.wNAbl5),
                src: S,
                className: M.applicationIcon,
              }),
              (0, n.jsx)(s.Heading, {
                id: t,
                variant: "heading-xl/semibold",
                className: M.header,
                children: F.intl.format(F.t.v01XgI, { email: l }),
              }),
              (0, n.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                children: F.intl.string(F.t["/Hw5aW"]),
              }),
              (0, n.jsx)(s.Button, {
                className: M.resendButton,
                size: s.Button.Sizes.NONE,
                look: s.Button.Looks.LINK,
                onClick: () => a.Z.verifyResend(),
                children: F.intl.string(F.t["MLk/mJ"]),
              }),
            ],
          });
        },
        y = (e) => {
          var t;
          let {
              guildId: l,
              formState: i,
              updateFormState: s,
              isPreview: a = !1,
              disableVerification: o = !1,
            } = e,
            d = (0, r.e7)([p.Z], () => p.Z.get(l));
          if (null == d) return null;
          let u =
              null !==
                (t = null != i ? i : null == d ? void 0 : d.formFields) &&
              void 0 !== t
                ? t
                : [],
            c = a ? I.W : I.r;
          return (0, n.jsx)(c, {
            guildId: l,
            formFields: u,
            updateFormFields: s,
            disableVerification: o,
          });
        },
        E = (e) => {
          let {
            guildId: t,
            headerId: l,
            formState: i,
            updateFormState: r,
            guildName: a,
            hasManualFormFields: o,
            isPreview: d = !1,
          } = e;
          return (0, n.jsxs)("div", {
            className: M.content,
            children: [
              (0, n.jsx)(s.Heading, {
                id: l,
                variant: "heading-xxl/normal",
                className: M.header,
                children: o
                  ? F.intl.format(F.t.cgX47e, { guildName: a })
                  : F.intl.string(F.t.DrEECw),
              }),
              (0, n.jsx)(s.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                children: o
                  ? F.intl.string(F.t["3smSPD"])
                  : F.intl.string(F.t["7D3C5u"]),
              }),
              (0, n.jsx)(y, {
                guildId: t,
                formState: i,
                updateFormState: r,
                isPreview: d,
              }),
            ],
          });
        };
      t.Z = (e) => {
        var t, l, a;
        let {
            headerId: I,
            guildId: b,
            onClose: S,
            onComplete: y,
            inviteCode: R,
            isPreview: A = !1,
            disableVerification: _ = !1,
          } = e,
          w = (0, N.ng)(b, R, A),
          k = (0, N.N0)(b, null == w ? void 0 : w.guild),
          L =
            null == w
              ? void 0
              : w.formFields.some((e) => e.field_type !== g.QJ.TERMS),
          [P, Z] = i.useState(
            null !== (a = null == w ? void 0 : w.formFields) && void 0 !== a
              ? a
              : [],
          ),
          [J, K] = i.useState(!1),
          [B, D] = i.useState(null),
          [H, V] = i.useState(""),
          [z, G] = i.useState(""),
          [U, X] = i.useState(null),
          [q, W] = i.useState(null),
          { storeMemberCount: Q, storeOnlineCount: Y } = (0, r.cj)(
            [m.Z],
            () => ({
              storeMemberCount: m.Z.getMemberCount(b),
              storeOnlineCount: m.Z.getOnlineCount(b),
            }),
          ),
          $ =
            null != Y
              ? Y
              : null == w
                ? void 0
                : null === (t = w.guild) || void 0 === t
                  ? void 0
                  : t.approximate_presence_count,
          ee =
            null != Q
              ? Q
              : null == w
                ? void 0
                : null === (l = w.guild) || void 0 === l
                  ? void 0
                  : l.approximate_member_count;
        i.useEffect(() => {
          null != w && Z(w.formFields);
        }, [w]),
          i.useEffect(() => {
            null != b &&
              v.default.track(C.rMx.OPEN_MODAL, { type: j.N4, guild_id: b });
          }, [b]);
        let et = (0, r.e7)([x.default], () => x.default.getCurrentUser()),
          { currentStep: el, setCurrentStep: en } = (0, N.k3)(b, et, _);
        (0, N.lk)(P);
        let ei = null == et ? void 0 : et.verified,
          er = null == et ? void 0 : et.isPhoneVerified(),
          es = i.useMemo(
            () =>
              !(
                _ ||
                (((null == k ? void 0 : k.verificationLevel) !==
                  C.sFg.VERY_HIGH ||
                  (null == et ? void 0 : et.isStaff())) &&
                  ei) ||
                er
              ) || P.some((e) => !(0, f.OA)(e)),
            [P, k, er, ei, et, _],
          ),
          ea = (0, r.e7)([d.Z], () => d.Z.useReducedMotion),
          eo = i.useRef(null);
        if (null == k) return null;
        let ed = async () => {
            K(!0), X(null), W(null);
            try {
              await (0, o.S2)({ email: H, password: z }),
                K(!1),
                en(N.KJ.EMAIL_CONFIRMATION);
            } catch (l) {
              var e, t;
              X(
                null == l
                  ? void 0
                  : null === (e = l.body) || void 0 === e
                    ? void 0
                    : e.email,
              ),
                W(
                  null == l
                    ? void 0
                    : null === (t = l.body) || void 0 === t
                      ? void 0
                      : t.password,
                );
            } finally {
              K(!1);
            }
          },
          eu = async () => {
            K(!0), D(null);
            let e = null != et ? h.ZP.getMember(b, et.id) : null;
            if (null != e && !e.isPending) {
              null == S || S(!0);
              return;
            }
            try {
              await (null == y
                ? void 0
                : y({ ...(null != w ? w : p.t), formFields: P })),
                null == S || S(!0);
            } catch (n) {
              var t, l;
              let e = null == n ? void 0 : n.body;
              (null == e
                ? void 0
                : null === (t = e.errors) || void 0 === t
                  ? void 0
                  : t.version) != null ||
              (null == e
                ? void 0
                : null === (l = e.errors) || void 0 === l
                  ? void 0
                  : l.form_fields) != null
                ? D(F.intl.string(F.t.PD09Sk))
                : D(null == e ? void 0 : e.message);
            } finally {
              K(!1);
            }
          };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("div", {
              className: M.guildSidebar,
              children: (0, n.jsx)("div", {
                className: M.sidebarCard,
                children: (0, n.jsx)(c.Z, {
                  className: M.guildProfile,
                  guild: k,
                  presenceCount: $,
                  memberCount: ee,
                }),
              }),
            }),
            (0, n.jsxs)("div", {
              className: M.modal,
              ref: eo,
              children: [
                (0, n.jsx)(u.Z, {
                  className: M.modalContent,
                  containerRef: eo,
                  faderSize: 180,
                  faderEdgeThreshold: 48,
                  children: (0, n.jsx)(s.Sequencer, {
                    className: M.sequencer,
                    steps: [
                      N.KJ.CLAIM_ACCOUNT,
                      N.KJ.EMAIL_CONFIRMATION,
                      N.KJ.VERIFICATION_FORM,
                    ],
                    step: el,
                    children: (() => {
                      switch (el) {
                        case N.KJ.CLAIM_ACCOUNT:
                          return (0, n.jsx)(O, {
                            headerId: I,
                            email: H,
                            password: z,
                            setEmail: V,
                            setPassword: G,
                            emailError: U,
                            passwordError: q,
                          });
                        case N.KJ.EMAIL_CONFIRMATION:
                          return (0, n.jsx)(T, { headerId: I, email: H });
                        case N.KJ.VERIFICATION_FORM:
                          return (0, n.jsx)(E, {
                            headerId: I,
                            guildId: b,
                            guildName: k.name,
                            formState: P,
                            updateFormState: Z,
                            isPreview: A,
                            useReducedMotion: ea,
                            hasManualFormFields: L,
                          });
                      }
                    })(),
                  }),
                }),
                (() => {
                  switch (el) {
                    case N.KJ.CLAIM_ACCOUNT:
                      return (0, n.jsxs)("div", {
                        className: M.footer,
                        children: [
                          (0, n.jsx)(s.Button, {
                            className: M.submitButton,
                            type: "submit",
                            submitting: J,
                            onClick: ed,
                            disabled: 0 === H.length || 0 === z.length,
                            children: F.intl.string(F.t.PDTjLC),
                          }),
                          (0, n.jsx)(s.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: F.intl.string(F.t["9GPiR0"]),
                          }),
                        ],
                      });
                    case N.KJ.EMAIL_CONFIRMATION:
                      return null;
                    case N.KJ.VERIFICATION_FORM:
                      return (0, n.jsxs)("div", {
                        className: M.footer,
                        children: [
                          (0, n.jsx)(s.Button, {
                            className: M.submitButton,
                            type: "submit",
                            submitting: J,
                            onClick: eu,
                            color: s.Button.Colors.GREEN,
                            disabled: null == y || es,
                            children: F.intl.string(F.t.geKm7u),
                          }),
                          null != B &&
                            (0, n.jsx)(s.Text, {
                              variant: "text-xs/normal",
                              color: "text-danger",
                              children: B,
                            }),
                          null == B &&
                            L &&
                            (0, n.jsxs)("div", {
                              className: M.disclaimerFooter,
                              children: [
                                (0, n.jsx)(s.Text, {
                                  color: "header-secondary",
                                  variant: "text-xs/normal",
                                  children: F.intl.string(F.t["+fPCTU"]),
                                }),
                                (0, n.jsx)(s.Text, {
                                  color: "header-secondary",
                                  variant: "text-xs/normal",
                                  children: F.intl.string(F.t.FwXzw8),
                                }),
                              ],
                            }),
                        ],
                      });
                  }
                })(),
              ],
            }),
          ],
        });
      };
    },
  },
]);
//# sourceMappingURL=fa5e554d6fabbcbbf623.js.map
