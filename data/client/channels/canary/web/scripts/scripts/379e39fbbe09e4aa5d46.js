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
        r = l(120356),
        s = l.n(r),
        a = l(442837),
        o = l(481060),
        d = l(893776),
        u = l(809206),
        c = l(607070),
        m = l(44272),
        h = l(910200),
        x = l(650774),
        v = l(271383),
        p = l(594174),
        g = l(626135),
        f = l(944163),
        N = l(246364),
        I = l(983736),
        j = l(187565),
        C = l(990488),
        F = l(592286),
        M = l(981631),
        S = l(388032),
        b = l(145638),
        O = l(419851),
        T = l(246403);
      let R = (e) => {
          let {
            headerId: t,
            email: l,
            password: i,
            setEmail: r,
            setPassword: s,
            emailError: a,
            passwordError: d,
          } = e;
          return (0, n.jsxs)("div", {
            className: b.content,
            children: [
              (0, n.jsx)("div", {
                className: b.applicationIconContainer,
                children: (0, n.jsx)("img", {
                  alt: S.intl.string(S.t.ewGfjo),
                  src: O,
                  className: b.applicationIcon,
                }),
              }),
              (0, n.jsx)(o.Heading, {
                id: t,
                variant: "heading-xl/semibold",
                className: b.header,
                children: S.intl.string(S.t.MhcDLy),
              }),
              (0, n.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                children: S.intl.string(S.t.SPlaR0),
              }),
              (0, n.jsx)("hr", { className: b.divider }),
              (0, n.jsx)(o.FormItem, {
                title: S.intl.string(S.t.dI4d4e),
                className: b.formItem,
                children: (0, n.jsx)(o.TextInput, {
                  value: l,
                  error: a,
                  onChange: r,
                  autoFocus: !0,
                }),
              }),
              (0, n.jsx)(o.FormItem, {
                title: S.intl.string(S.t["CIGa+/"]),
                className: b.formItem,
                children: (0, n.jsx)(o.TextInput, {
                  type: "password",
                  value: i,
                  error: d,
                  onChange: s,
                }),
              }),
            ],
          });
        },
        y = (e) => {
          let { headerId: t, email: l } = e;
          return (0, n.jsxs)("div", {
            className: b.content,
            children: [
              (0, n.jsx)("img", {
                alt: S.intl.string(S.t.wNAbl5),
                src: T,
                className: b.applicationIcon,
              }),
              (0, n.jsx)(o.Heading, {
                id: t,
                variant: "heading-xl/semibold",
                className: b.header,
                children: S.intl.format(S.t.v01XgI, { email: l }),
              }),
              (0, n.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                children: S.intl.string(S.t["/Hw5aW"]),
              }),
              (0, n.jsx)(o.Button, {
                className: b.resendButton,
                size: o.Button.Sizes.NONE,
                look: o.Button.Looks.LINK,
                onClick: () => d.Z.verifyResend(),
                children: S.intl.string(S.t["MLk/mJ"]),
              }),
            ],
          });
        },
        E = (e) => {
          var t;
          let {
              guildId: l,
              formState: i,
              updateFormState: r,
              isPreview: s = !1,
              disableVerification: o = !1,
            } = e,
            d = (0, a.e7)([f.Z], () => f.Z.get(l));
          if (null == d) return null;
          let u =
              null !==
                (t = null != i ? i : null == d ? void 0 : d.formFields) &&
              void 0 !== t
                ? t
                : [],
            c = s ? C.W : C.r;
          return (0, n.jsx)(c, {
            guildId: l,
            formFields: u,
            updateFormFields: r,
            disableVerification: o,
          });
        },
        A = (e) => {
          let {
            guildId: t,
            headerId: l,
            formState: i,
            updateFormState: r,
            guildName: s,
            hasManualFormFields: a,
            isPreview: d = !1,
          } = e;
          return (0, n.jsxs)("div", {
            className: b.content,
            children: [
              (0, n.jsx)(o.Heading, {
                id: l,
                variant: "heading-xxl/normal",
                className: b.header,
                children: a
                  ? S.intl.format(S.t.cgX47e, { guildName: s })
                  : S.intl.string(S.t.DrEECw),
              }),
              (0, n.jsx)(o.Text, {
                variant: "text-sm/normal",
                color: "header-secondary",
                children: a
                  ? S.intl.string(S.t["3smSPD"])
                  : S.intl.string(S.t["7D3C5u"]),
              }),
              (0, n.jsx)(E, {
                guildId: t,
                formState: i,
                updateFormState: r,
                isPreview: d,
              }),
            ],
          });
        };
      t.Z = (e) => {
        var t, l, r;
        let {
            headerId: d,
            guildId: C,
            onClose: O,
            onComplete: T,
            inviteCode: E,
            isPreview: w = !1,
            disableVerification: _ = !1,
          } = e,
          k = (0, j.ng)(C, E, w),
          L = (0, j.N0)(C, null == k ? void 0 : k.guild),
          P =
            null == k
              ? void 0
              : k.formFields.some((e) => e.field_type !== N.QJ.TERMS),
          [J, K] = i.useState(
            null !== (t = null == k ? void 0 : k.formFields) && void 0 !== t
              ? t
              : [],
          ),
          [Z, B] = i.useState(!1),
          [D, H] = i.useState(null),
          [V, z] = i.useState(""),
          [G, U] = i.useState(""),
          [X, q] = i.useState(null),
          [W, Q] = i.useState(null),
          { storeMemberCount: Y, storeOnlineCount: $ } = (0, a.cj)(
            [x.Z],
            () => ({
              storeMemberCount: x.Z.getMemberCount(C),
              storeOnlineCount: x.Z.getOnlineCount(C),
            }),
          );
        i.useEffect(() => {
          null != k && K(k.formFields);
        }, [k]),
          i.useEffect(() => {
            null != C &&
              g.default.track(M.rMx.OPEN_MODAL, { type: F.N4, guild_id: C });
          }, [C]);
        let ee = (0, a.e7)([p.default], () => p.default.getCurrentUser()),
          { currentStep: et, setCurrentStep: el } = (0, j.k3)(C, ee, _);
        (0, j.lk)(J);
        let en = null == ee ? void 0 : ee.verified,
          ei = null == ee ? void 0 : ee.isPhoneVerified(),
          er = i.useMemo(
            () =>
              !(
                _ ||
                (((null == L ? void 0 : L.verificationLevel) !==
                  M.sFg.VERY_HIGH ||
                  (null == ee ? void 0 : ee.isStaff())) &&
                  en) ||
                ei
              ) || J.some((e) => !(0, I.OA)(e)),
            [J, L, ei, en, ee, _],
          ),
          es = (0, a.e7)([c.Z], () => c.Z.useReducedMotion),
          ea = i.useRef(null);
        if (null == L) return null;
        let eo = {
            id: C,
            name: L.name,
            description: null !== (l = L.description) && void 0 !== l ? l : "",
            icon: null !== (r = L.icon) && void 0 !== r ? r : null,
            onlineCount: null != $ ? $ : 0,
            memberCount: null != Y ? Y : 0,
          },
          ed = async () => {
            B(!0), q(null), Q(null);
            try {
              await (0, u.S2)({ email: V, password: G }),
                B(!1),
                el(j.KJ.EMAIL_CONFIRMATION);
            } catch (l) {
              var e, t;
              q(
                null == l
                  ? void 0
                  : null === (e = l.body) || void 0 === e
                    ? void 0
                    : e.email,
              ),
                Q(
                  null == l
                    ? void 0
                    : null === (t = l.body) || void 0 === t
                      ? void 0
                      : t.password,
                );
            } finally {
              B(!1);
            }
          },
          eu = async () => {
            B(!0), H(null);
            let e = null != ee ? v.ZP.getMember(C, ee.id) : null;
            if (null != e && !e.isPending) {
              null == O || O(!0);
              return;
            }
            try {
              await (null == T
                ? void 0
                : T({ ...(null != k ? k : f.t), formFields: J })),
                null == O || O(!0);
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
                ? H(S.intl.string(S.t.PD09Sk))
                : H(null == e ? void 0 : e.message);
            } finally {
              B(!1);
            }
          };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)("div", {
              className: b.guildSidebar,
              children: (0, n.jsx)("div", {
                className: b.guildProfile,
                children: (0, n.jsx)(h.Z, { profile: eo }),
              }),
            }),
            (0, n.jsxs)("div", {
              className: b.modal,
              ref: ea,
              children: [
                (0, n.jsx)(m.Z, {
                  className: b.modalContent,
                  containerRef: ea,
                  faderSize: 180,
                  faderEdgeThreshold: 48,
                  children: (0, n.jsx)(o.Sequencer, {
                    className: s()(b.sequencer, {
                      [b.centerContent]: et !== j.KJ.VERIFICATION_FORM,
                    }),
                    steps: [
                      j.KJ.CLAIM_ACCOUNT,
                      j.KJ.EMAIL_CONFIRMATION,
                      j.KJ.VERIFICATION_FORM,
                    ],
                    step: et,
                    children: (() => {
                      switch (et) {
                        case j.KJ.CLAIM_ACCOUNT:
                          return (0, n.jsx)(R, {
                            headerId: d,
                            email: V,
                            password: G,
                            setEmail: z,
                            setPassword: U,
                            emailError: X,
                            passwordError: W,
                          });
                        case j.KJ.EMAIL_CONFIRMATION:
                          return (0, n.jsx)(y, { headerId: d, email: V });
                        case j.KJ.VERIFICATION_FORM:
                          return (0, n.jsx)(A, {
                            headerId: d,
                            guildId: C,
                            guildName: L.name,
                            formState: J,
                            updateFormState: K,
                            isPreview: w,
                            useReducedMotion: es,
                            hasManualFormFields: P,
                          });
                      }
                    })(),
                  }),
                }),
                (() => {
                  switch (et) {
                    case j.KJ.CLAIM_ACCOUNT:
                      return (0, n.jsxs)("div", {
                        className: b.footer,
                        children: [
                          (0, n.jsx)(o.Button, {
                            className: b.submitButton,
                            type: "submit",
                            submitting: Z,
                            onClick: ed,
                            disabled: 0 === V.length || 0 === G.length,
                            children: S.intl.string(S.t.PDTjLC),
                          }),
                          (0, n.jsx)(o.Text, {
                            variant: "text-xs/normal",
                            color: "header-secondary",
                            children: S.intl.string(S.t["9GPiR0"]),
                          }),
                        ],
                      });
                    case j.KJ.EMAIL_CONFIRMATION:
                      return null;
                    case j.KJ.VERIFICATION_FORM:
                      return (0, n.jsxs)("div", {
                        className: b.footer,
                        children: [
                          (0, n.jsx)(o.Button, {
                            className: b.submitButton,
                            type: "submit",
                            submitting: Z,
                            onClick: eu,
                            color: o.Button.Colors.GREEN,
                            disabled: null == T || er,
                            children: S.intl.string(S.t.geKm7u),
                          }),
                          null != D &&
                            (0, n.jsx)(o.Text, {
                              variant: "text-xs/normal",
                              color: "text-danger",
                              children: D,
                            }),
                          null == D &&
                            P &&
                            (0, n.jsxs)("div", {
                              className: b.disclaimerFooter,
                              children: [
                                (0, n.jsx)(o.Text, {
                                  color: "header-secondary",
                                  variant: "text-xs/normal",
                                  children: S.intl.string(S.t["+fPCTU"]),
                                }),
                                (0, n.jsx)(o.Text, {
                                  color: "header-secondary",
                                  variant: "text-xs/normal",
                                  children: S.intl.string(S.t.FwXzw8),
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
//# sourceMappingURL=379e39fbbe09e4aa5d46.js.map
