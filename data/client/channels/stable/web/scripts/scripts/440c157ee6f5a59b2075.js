"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["74828"],
  {
    767593: function (e, t, n) {
      n.r(t), n(47120), n(653041);
      var o = n(200651),
        r = n(192379),
        a = n(100621),
        i = n(481060),
        l = n(442837),
        s = n(607070),
        c = n(970606),
        u = n(313201),
        d = n(863249),
        m = n(944163),
        f = n(246364),
        p = n(983736),
        h = n(937111),
        x = n(200305),
        b = n(271383),
        _ = n(594174),
        C = n(231467),
        g = n(308083),
        v = n(388032),
        N = n(684025);
      let I = { mass: 1, tension: 600, friction: 60 },
        j = { mass: 1, tension: 300, friction: 25 },
        y = 2300,
        T = [
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
      function E(e) {
        let {
            children: t,
            containerRef: n,
            faderSize: a,
            faderEdgeThreshold: l,
          } = e,
          s = r.useRef(null),
          [c, u] = r.useState(0),
          [d, m] = r.useState(0),
          [f, p] = r.useState(0),
          h = r.useCallback(() => {
            null != s.current &&
              (u(s.current.getDistanceFromTop()),
              m(s.current.getDistanceFromBottom()),
              p(s.current.getScrollerState().offsetHeight));
          }, []);
        r.useEffect(() => {
          if ((h(), null == n.current)) return;
          let e = new ResizeObserver(() => {
            h();
          });
          return (
            e.observe(n.current),
            () => {
              e.disconnect();
            }
          );
        }, [s, n, h]);
        let x = r.useMemo(() => {
          if (0 === c && 0 === d) return {};
          let e = [];
          if ((e.push("to bottom"), c > 0)) {
            let t = l > 0 ? 1 - Math.min(l, c) / l : 1;
            for (let n = 0; n < T.length; n++) {
              let { position: o, alpha: r } = T[n],
                i = (o * a).toFixed(2);
              e.push(
                "hsla(0, 0%, 0%, "
                  .concat(t + r * (1 - t), ") ")
                  .concat(i, "px"),
              );
            }
          }
          if (d > 0) {
            let t = f - a,
              n = l > 0 ? 1 - Math.min(l, d) / l : 1;
            for (let o = T.length - 1; o >= 0; o--) {
              let { position: r, alpha: i } = T[o],
                l = (t + (1 - r) * a).toFixed(2);
              e.push(
                "hsla(0, 0%, 0%, "
                  .concat(n + i * (1 - n), ") ")
                  .concat(l, "px"),
              );
            }
          }
          return { maskImage: "linear-gradient(".concat(e.join(","), ")") };
        }, [d, c, l, a, f]);
        return (0, o.jsx)(i.AdvancedScrollerNone, {
          ref: s,
          style: x,
          className: N.scroller,
          onScroll: h,
          children: t,
        });
      }
      function F(e) {
        let { guildId: t, formState: n, updateFormState: r } = e;
        return (0, o.jsxs)("div", {
          className: N.verificationForm,
          children: [
            (0, o.jsx)(i.Heading, {
              variant: "heading-xxl/normal",
              color: "header-primary",
              children: v.intl.string(v.t.xsSj6e),
            }),
            (0, o.jsx)(i.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              children: v.intl.string(v.t["1VDDMT"]),
            }),
            (0, o.jsx)(x.Y, {
              guildId: t,
              formState: n,
              updateFormState: r,
              disableVerification: !0,
            }),
          ],
        });
      }
      t.default = function (e) {
        var t, n, x;
        let {
            clan: T,
            prioritizedGameIds: R,
            position: k,
            transitionState: B,
            onClose: S,
          } = e,
          P = (0, u.Dt)(),
          O = (0, l.e7)([m.Z], () => m.Z.get(T.id)),
          [A, q] = r.useState(
            null !== (n = null == O ? void 0 : O.formFields) && void 0 !== n
              ? n
              : [],
          ),
          [M, w] = r.useState(!1),
          [D, H] = r.useState(!1),
          [z, Z] = r.useState(!1),
          U = (0, l.e7)([_.default], () => _.default.getCurrentUser()),
          Y = (0, l.e7)(
            [b.ZP],
            () => b.ZP.isMember(T.id, null == U ? void 0 : U.id),
            [T, U],
          ),
          V = (0, l.e7)([h.Z], () => {
            var e;
            return (
              (null === (e = h.Z.getRequest(T.id)) || void 0 === e
                ? void 0
                : e.applicationStatus) === f.wB.SUBMITTED
            );
          }),
          [L, K] = r.useState(""),
          Q = r.useRef(() => (0, c._v)({ guildId: T.id, position: k }));
        r.useEffect(
          () => (
            d.ZP.fetchVerificationForm(T.id),
            () => {
              Q.current();
            }
          ),
          [T.id, Q],
        ),
          r.useEffect(() => {
            null != O && q(O.formFields);
          }, [O]);
        let G = r.useCallback(
            (e) => {
              !M &&
                (w(!0),
                (Q.current = () => !1),
                (0, c.r)({ guildId: T.id, position: k })),
                q(e);
            },
            [q, M, w, T.id, k],
          ),
          X = r.useCallback(
            async (e) => {
              await d.ZP.submitVerificationForm(T.id, e, d.q0);
            },
            [T.id],
          ),
          W = r.useCallback(async () => {
            try {
              H(!0);
              let e = Date.now();
              await X({ ...(null != O ? O : m.t), formFields: A });
              let t = () => {
                  Z(!0), setTimeout(S, 1300), H(!1), setTimeout(d.xo, y);
                },
                n = Date.now();
              n - e > 1e3 ? t() : setTimeout(t, 1e3 - (n - e));
            } catch (e) {
              K(null == e ? void 0 : e.message), H(!1);
            }
          }, [X, S, O, A]),
          J = A.some((e) => !(0, p.OA)(e)),
          $ =
            (null !==
              (x =
                null == O
                  ? void 0
                  : null === (t = O.guild) || void 0 === t
                    ? void 0
                    : t.approximate_member_count) && void 0 !== x
              ? x
              : 0) >= g.Du,
          ee = (0, l.e7)([s.Z], () => s.Z.useReducedMotion),
          et = (0, i.useSpring)(
            {
              from: {
                opacity: 0,
                transform: "translateY(".concat(ee ? 0 : 40, "px)"),
              },
              to: { opacity: 1, transform: "translateY(0px)" },
              config: I,
              delay: 500,
            },
            "animate-always",
          ),
          en = (0, i.useTransition)(z, {
            from: { opacity: 0, scale: 0 },
            enter: { opacity: 1, scale: 1 },
            leave: { opacity: 0, scale: 0 },
            config: j,
          }),
          eo = r.useRef(null);
        return (0, o.jsxs)(i.ModalRoot, {
          transitionState: B,
          "aria-labelledby": P,
          size: i.ModalSize.DYNAMIC,
          className: N.container,
          hideShadow: !0,
          children: [
            (0, o.jsxs)(a.animated.div, {
              className: N.body,
              style: et,
              children: [
                (0, o.jsx)("div", {
                  className: N.applicationContainer,
                  ref: eo,
                  children: (0, o.jsx)(E, {
                    containerRef: eo,
                    faderSize: 180,
                    faderEdgeThreshold: 48,
                    children: (0, o.jsx)(F, {
                      guildId: T.id,
                      formState: A,
                      updateFormState: G,
                    }),
                  }),
                }),
                (0, o.jsx)("div", { className: N.verticalRule }),
                (0, o.jsxs)("div", {
                  className: N.clanContainer,
                  children: [
                    (0, o.jsx)(C.xV, {
                      clan: T,
                      className: N.profileCard,
                      prioritizedGameIds: R,
                      expanded: !0,
                      isMember: Y,
                      hasPendingJoinRequest: V,
                      atMaxMemberCapacity: $,
                    }),
                    (0, o.jsxs)("div", {
                      className: N.applyButtonContainer,
                      children: [
                        (0, o.jsxs)(i.Button, {
                          type: "submit",
                          onClick: z ? void 0 : W,
                          submitting: D,
                          fullWidth: !0,
                          disabled: J || null == O,
                          innerClassName: N.applyButtonInner,
                          children: [
                            $ &&
                              (0, o.jsx)(i.WarningIcon, {
                                size: "custom",
                                color: "white",
                                width: 20,
                                height: 20,
                              }),
                            !z && v.intl.string(v.t["1Qm829"]),
                            en(
                              (e, t) =>
                                t &&
                                (0, o.jsx)(a.animated.div, {
                                  style: e,
                                  className: N.successCheckmark,
                                  children: (0, o.jsx)(
                                    i.CheckmarkLargeBoldIcon,
                                    {
                                      size: "sm",
                                      color: "currentColor",
                                      "aria-hidden": !0,
                                    },
                                  ),
                                }),
                            ),
                          ],
                        }),
                        "" !== L &&
                          (0, o.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            color: "text-danger",
                            children: L,
                          }),
                      ],
                    }),
                    $ &&
                      (0, o.jsxs)(o.Fragment, {
                        children: [
                          (0, o.jsx)(i.Text, {
                            variant: "text-xs/medium",
                            color: "text-warning",
                            className: N.maxCapacityText,
                            children: v.intl.string(v.t.GNPXdX),
                          }),
                          (0, o.jsx)("hr", { className: N.separator }),
                        ],
                      }),
                    (0, o.jsx)(i.Text, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: N.noticeText,
                      children: v.intl.string(v.t.FwXzw8),
                    }),
                    (0, o.jsx)(i.Text, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: N.noticeText,
                      children: v.intl.string(v.t["+fPCTU"]),
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsx)("div", {
              className: N.closeButtonContainer,
              children: (0, o.jsx)(i.Button, {
                onClick: S,
                look: i.ButtonLooks.OUTLINED,
                color: i.ButtonColors.PRIMARY,
                children: v.intl.string(v.t.cpT0Cg),
              }),
            }),
          ],
        });
      };
    },
    983736: function (e, t, n) {
      n.d(t, {
        OA: function () {
          return i;
        },
        _C: function () {
          return s;
        },
        kT: function () {
          return l;
        },
      });
      var o = n(823379),
        r = n(246364),
        a = n(592286);
      let i = (e) => {
        let { required: t, response: n, field_type: a } = e;
        if (!t) return !0;
        if (null == n) return !1;
        switch (a) {
          case r.QJ.TERMS:
          case r.QJ.VERIFICATION:
            return !!n;
          case r.QJ.TEXT_INPUT:
          case r.QJ.PARAGRAPH:
            return "string" == typeof n && "" !== n.trim();
          case r.QJ.MULTIPLE_CHOICE:
            return "number" == typeof n;
          default:
            return (0, o.vE)(a);
        }
      };
      function l(e) {
        return a.lI.has(null == e ? void 0 : e.field_type);
      }
      function s(e) {
        return a.hZ.has(null == e ? void 0 : e.field_type);
      }
    },
    489813: function (e, t, n) {
      n.d(t, {
        Ih: function () {
          return s;
        },
        PU: function () {
          return c;
        },
        hK: function () {
          return l;
        },
      });
      var o = n(200651);
      n(192379);
      var r = n(692547),
        a = n(481060),
        i = n(626166);
      function l(e) {
        let { title: t, children: n } = e;
        return (0, o.jsxs)("div", {
          className: i.questionContainer,
          children: [
            (0, o.jsx)(a.Text, {
              className: i.questionTitle,
              variant: "text-md/semibold",
              color: "header-primary",
              children: t,
            }),
            n,
          ],
        });
      }
      function s(e) {
        let { icon: t, text: n, meetsRequirement: l } = e;
        return (0, o.jsxs)("div", {
          className: i.requirementContainer,
          children: [
            (0, o.jsx)(t, {
              className: i.requirementIcon,
              height: 20,
              width: 20,
              size: "custom",
              color: "currentColor",
            }),
            (0, o.jsx)(a.Text, {
              className: i.requirementText,
              variant: "text-md/normal",
              children: n,
            }),
            l
              ? (0, o.jsx)(a.CircleCheckIcon, {
                  size: "md",
                  color: "currentColor",
                  className: i.requirementSuccess,
                  secondaryColor: r.Z.colors.WHITE.css,
                })
              : (0, o.jsx)(a.CircleXIcon, {
                  size: "md",
                  color: "currentColor",
                  className: i.requirementFailure,
                  secondaryColor: r.Z.colors.WHITE.css,
                }),
          ],
        });
      }
      function c(e) {
        let {
          icon: t,
          text: n,
          footnote: l,
          meetsRequirement: s,
          children: c,
        } = e;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsxs)("div", {
              className: i.requirementContainer,
              children: [
                (0, o.jsx)(t, {
                  className: i.requirementIcon,
                  height: 20,
                  width: 20,
                  size: "custom",
                  color: "currentColor",
                }),
                (0, o.jsx)(a.Text, {
                  className: i.requirementText,
                  variant: "text-md/normal",
                  children: n,
                }),
                s
                  ? (0, o.jsx)(a.CircleCheckIcon, {
                      size: "md",
                      color: "currentColor",
                      className: i.requirementSuccess,
                      secondaryColor: r.Z.colors.WHITE.css,
                    })
                  : c,
              ],
            }),
            null != l &&
              (0, o.jsx)(a.Text, {
                color: "header-secondary",
                className: i.footnote,
                variant: "text-xs/normal",
                children: l,
              }),
          ],
        });
      }
    },
    186078: function (e, t, n) {
      n.d(t, {
        BO: function () {
          return d;
        },
        QH: function () {
          return m;
        },
        sp: function () {
          return f;
        },
      });
      var o = n(200651),
        r = n(192379),
        a = n(120356),
        i = n.n(a),
        l = n(481060),
        s = n(489813),
        c = n(707592),
        u = n(738912);
      function d(e) {
        let {
            disabled: t,
            field: n,
            value: a,
            radioItemClassName: s,
            radioItemIconClassName: c,
            onChange: d,
          } = e,
          { choices: m } = n,
          f = r.useMemo(
            () =>
              m.map((e, t) => ({
                name: e,
                value: t,
                radioItemIconClassName: i()(u.multipleChoiceIcon, c),
              })),
            [m, c],
          );
        return (0, o.jsx)(l.RadioGroup, {
          disabled: t,
          options: f,
          value: a,
          onChange: d,
          radioItemClassName: s,
          withTransparentBackground: !0,
        });
      }
      function m(e) {
        let { formField: t } = e,
          n = null != t.response ? t.choices[t.response] : "";
        return (0, o.jsx)(s.hK, {
          title: t.label,
          children: (0, o.jsx)(c.Gi, {
            className: u.fieldBackground,
            value: n,
            disabled: !0,
          }),
        });
      }
      function f(e) {
        let { formField: t, onChange: n } = e;
        return (0, o.jsx)(s.hK, {
          title: t.label,
          children: (0, o.jsx)(d, {
            radioItemClassName: u.fieldBackground,
            field: t,
            value: t.response,
            onChange: n,
          }),
        });
      }
    },
    73880: function (e, t, n) {
      n.d(t, {
        Q8: function () {
          return u;
        },
        jn: function () {
          return d;
        },
        lX: function () {
          return m;
        },
      });
      var o = n(200651);
      n(192379);
      var r = n(120356),
        a = n.n(r),
        i = n(481060),
        l = n(489813),
        s = n(592286),
        c = n(738912);
      function u(e) {
        let {
          value: t,
          placeholder: n,
          onChange: r,
          disabled: l,
          className: u,
          autofocus: d,
        } = e;
        return (0, o.jsx)(i.TextArea, {
          className: a()(c.paragraphFieldBody, u),
          maxLength: s.RS,
          value: null != t ? t : "",
          placeholder: null != n ? n : "",
          onChange: r,
          disabled: l,
          autoFocus: d,
          autosize: !0,
        });
      }
      function d(e) {
        let { formField: t } = e;
        return (0, o.jsx)(l.hK, {
          title: t.label,
          children: (0, o.jsx)(u, {
            className: c.fieldBackground,
            value: t.response,
            disabled: !0,
          }),
        });
      }
      function m(e) {
        let { formField: t, autofocus: n, onChange: r } = e;
        return (0, o.jsx)(l.hK, {
          title: t.label,
          children: (0, o.jsx)(u, {
            className: c.fieldBackground,
            value: t.response,
            onChange: r,
            autofocus: n,
          }),
        });
      }
    },
    196345: function (e, t, n) {
      n.d(t, {
        EK: function () {
          return d;
        },
        G0: function () {
          return m;
        },
        QC: function () {
          return f;
        },
        dd: function () {
          return p;
        },
      }),
        n(47120);
      var o = n(200651);
      n(192379);
      var r = n(120356),
        a = n.n(r),
        i = n(481060),
        l = n(454585),
        s = n(489813),
        c = n(388032),
        u = n(738912);
      function d(e) {
        let { terms: t, channelId: n, className: r } = e;
        return (0, o.jsx)("div", {
          className: a()(u.termsFieldBody, r),
          children: t.map((e, t) =>
            (0, o.jsxs)(
              "div",
              {
                className: u.termsRow,
                children: [
                  (0, o.jsx)(i.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: "".concat(t + 1, "."),
                  }),
                  (0, o.jsx)(i.Text, {
                    variant: "text-md/normal",
                    className: u.termsRowContent,
                    children: l.Z.parseGuildVerificationFormRule(e, !0, {
                      channelId: n,
                    }),
                  }),
                ],
              },
              "term-".concat(t),
            ),
          ),
        });
      }
      function m(e) {
        let { onChange: t, checked: n, disabled: r } = e;
        return (0, o.jsx)(i.Checkbox, {
          size: 20,
          type: i.Checkbox.Types.INVERTED,
          value: n,
          onChange: t,
          disabled: r,
          style: { borderWidth: 2 },
          className: u.checkbox,
          children: (0, o.jsx)(i.Text, {
            variant: "text-sm/normal",
            children: c.intl.string(c.t["2EXfGB"]),
          }),
        });
      }
      function f(e) {
        let { formField: t } = e;
        return (0, o.jsx)(s.Ih, {
          icon: i.BookCheckIcon,
          text: c.intl.string(c.t["2xbmoK"]),
          meetsRequirement: !!t.response,
        });
      }
      let p = (e) => {
        let { channelId: t, formField: n, onChange: r } = e;
        return (0, o.jsxs)(s.hK, {
          title: c.intl.string(c.t.Q8OFNz),
          children: [
            (0, o.jsx)(d, {
              className: u.fieldBackground,
              terms: n.values,
              channelId: t,
            }),
            (0, o.jsx)(m, { onChange: r, checked: n.response }),
          ],
        });
      };
    },
    707592: function (e, t, n) {
      n.d(t, {
        Gi: function () {
          return u;
        },
        YJ: function () {
          return d;
        },
        zY: function () {
          return m;
        },
      });
      var o = n(200651);
      n(192379);
      var r = n(120356),
        a = n.n(r),
        i = n(481060),
        l = n(489813),
        s = n(592286),
        c = n(738912);
      function u(e) {
        let {
          value: t,
          placeholder: n,
          onChange: r,
          disabled: l,
          autofocus: u,
          className: d,
        } = e;
        return (0, o.jsx)(i.TextInput, {
          inputClassName: a()(c.textInputFieldBodyInput, d),
          maxLength: s.tL,
          value: null != t ? t : "",
          placeholder: n,
          onChange: r,
          disabled: l,
          autoFocus: u,
        });
      }
      function d(e) {
        let { formField: t } = e;
        return (0, o.jsx)(l.hK, {
          title: t.label,
          children: (0, o.jsx)(i.TextArea, {
            className: a()(c.textInputFieldBodyInput, c.fieldBackground),
            value: t.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2,
          }),
        });
      }
      function m(e) {
        let { formField: t, autofocus: n, onChange: r } = e;
        return (0, o.jsx)(l.hK, {
          title: t.label,
          children: (0, o.jsx)(u, {
            className: c.fieldBackground,
            onChange: r,
            value: t.response,
            autofocus: n,
          }),
        });
      }
    },
    144114: function (e, t, n) {
      n.d(t, {
        L: function () {
          return r;
        },
      });
      var o,
        r,
        a = n(990547),
        i = n(544891),
        l = n(570140),
        s = n(314897),
        c = n(573261),
        u = n(815660),
        d = n(981631);
      ((o = r || (r = {})).USER_ACTION_REQUIRED = "user_action_required"),
        (o.USER_SETTINGS_UPDATE = "user_settings_update"),
        (o.GUILD_PHONE_REQUIRED = "guild_phone_required"),
        (o.MFA_PHONE_UPDATE = "mfa_phone_update"),
        (o.CONTACT_SYNC = "contact_sync"),
        (t.Z = {
          setCountryCode(e) {
            l.Z.dispatch({ type: "PHONE_SET_COUNTRY_CODE", countryCode: e });
          },
          removePhone: (e, t) =>
            i.tn.del({
              url: d.ANM.PHONE,
              body: { password: e, change_phone_reason: t },
              oldFormErrors: !0,
            }),
          resendCode(e) {
            let t = {},
              n = s.default.getFingerprint();
            return (
              null != n && "" !== n && (t["X-Fingerprint"] = n),
              i.tn.post({
                url: d.ANM.RESEND_PHONE,
                headers: t,
                body: { phone: e },
              })
            );
          },
          beginAddPhone: (e, t) =>
            i.tn.post({
              url: d.ANM.PHONE,
              body: { phone: e, change_phone_reason: t },
            }),
          addPhone: (e, t, n) =>
            i.tn.post({
              url: d.ANM.PHONE,
              body: { phone_token: e, password: t, change_phone_reason: n },
              oldFormErrors: !0,
            }),
          addPhoneWithoutPassword: (e) =>
            i.tn.post({
              url: d.ANM.PHONE_VERIFY_NO_PASSWORD,
              body: { code: e },
            }),
          beginReverifyPhone: (e, t) =>
            i.tn.post({
              url: d.ANM.PHONE_REVERIFY,
              body: { phone: e, change_phone_reason: t },
            }),
          reverifyPhone: (e, t, n) =>
            i.tn.post({
              url: d.ANM.PHONE_REVERIFY,
              body: { phone_token: e, password: t, change_phone_reason: n },
              oldFormErrors: !0,
            }),
          validatePhoneForSupport: (e) =>
            i.tn.post({
              url: d.ANM.VERIFY_PHONE_FOR_TICKET,
              body: { token: e },
              oldFormErrors: !0,
            }),
          async verifyPhone(e, t) {
            let n =
                !(arguments.length > 2) ||
                void 0 === arguments[2] ||
                arguments[2],
              o =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              r = {},
              i = s.default.getFingerprint();
            null != i && "" !== i && (r["X-Fingerprint"] = i),
              o && (r.authorization = "");
            let m = await c.Z.post({
              url: d.ANM.VERIFY_PHONE,
              headers: r,
              body: { phone: e, code: t },
              oldFormErrors: !0,
              trackedActionData: {
                event: a.NetworkActionNames.USER_VERIFY_PHONE,
              },
            });
            return n && l.Z.dispatch({ type: "MODAL_POP", key: u.M }), m.body;
          },
        });
    },
    815660: function (e, t, n) {
      n.d(t, {
        M: function () {
          return o;
        },
        z: function () {
          return r;
        },
      });
      let o = "PHONE_VERIFICATION_MODAL_KEY",
        r = 6;
    },
    684025: function (e, t, n) {
      e.exports = {
        container: "container_d99f08",
        closeButtonContainer: "closeButtonContainer_d99f08",
        body: "body_d99f08",
        applicationContainer: "applicationContainer_d99f08",
        scroller: "scroller_d99f08",
        verticalRule: "verticalRule_d99f08",
        clanContainer: "clanContainer_d99f08",
        applyButtonContainer: "applyButtonContainer_d99f08",
        applyButtonInner: "applyButtonInner_d99f08",
        successCheckmark: "successCheckmark_d99f08",
        verificationForm: "verificationForm_d99f08",
        profileCard: "profileCard_d99f08",
        maxCapacityText: "maxCapacityText_d99f08",
        separator: "separator_d99f08",
        noticeText: "noticeText_d99f08",
      };
    },
    27471: function (e, t, n) {
      e.exports = {
        container: "container_a74b6f",
        guildSidebar: "guildSidebar_a74b6f",
        guildDescription: "guildDescription_a74b6f",
        guildIcon: "guildIcon_a74b6f",
        guildIconNoIcon: "guildIconNoIcon_a74b6f",
        guildName: "guildName_a74b6f",
        emojisContainer: "emojisContainer_a74b6f",
        emoji: "emoji_a74b6f",
        onlineCount: "onlineCount_a74b6f",
        dotOnline: "dotOnline_a74b6f dot_a74b6f",
        dotMembers: "dotMembers_a74b6f dot_a74b6f",
        divider: "divider_a74b6f",
        modal: "modal_a74b6f",
        sequencer: "sequencer_a74b6f",
        modalContent: "modalContent_a74b6f",
        content: "content_a74b6f",
        centerContent: "centerContent_a74b6f",
        closeButton: "closeButton_a74b6f",
        applicationIconContainer: "applicationIconContainer_a74b6f",
        applicationIcon: "applicationIcon_a74b6f",
        animationAndSparklesContainer: "animationAndSparklesContainer_a74b6f",
        sparkleIcon: "sparkleIcon_a74b6f",
        sparkleTop: "sparkleTop_a74b6f",
        sparkleBottom: "sparkleBottom_a74b6f",
        animation: "animation_a74b6f",
        header: "header_a74b6f",
        subheader: "subheader_a74b6f",
        footer: "footer_a74b6f",
        submitButton: "submitButton_a74b6f",
        formItem: "formItem_a74b6f",
        resendButton: "resendButton_a74b6f",
        confirmation: "confirmation_a74b6f",
        confirmationContent: "confirmationContent_a74b6f",
        confirmationButtonRow: "confirmationButtonRow_a74b6f",
        confirmationButton: "confirmationButton_a74b6f",
        confirmationTooltipContents: "confirmationTooltipContents_a74b6f",
        confirmationButtonColumn: "confirmationButtonColumn_a74b6f",
        notice: "notice_a74b6f",
        rejectionReasonLabel: "rejectionReasonLabel_a74b6f",
        rejectionReason: "rejectionReason_a74b6f",
        disclaimerFooter: "disclaimerFooter_a74b6f",
      };
    },
    626166: function (e, t, n) {
      e.exports = {
        questionContainer: "questionContainer_b007eb",
        questionTitle: "questionTitle_b007eb",
        requirementContainer: "requirementContainer_b007eb",
        requirementIcon: "requirementIcon_b007eb",
        requirementText: "requirementText_b007eb",
        requirementSuccess: "requirementSuccess_b007eb",
        requirementFailure: "requirementFailure_b007eb",
        footnote: "footnote_b007eb",
      };
    },
    738912: function (e, t, n) {
      e.exports = {
        termsRow: "termsRow_bd5b94",
        termsRowContent: "termsRowContent_bd5b94",
        checkbox: "checkbox_bd5b94",
        verifyConfirmText: "verifyConfirmText_bd5b94",
        fieldBackground: "fieldBackground_bd5b94",
        termsFieldBody: "termsFieldBody_bd5b94",
        textInputFieldBodyInput: "textInputFieldBodyInput_bd5b94",
        paragraphFieldBody: "paragraphFieldBody_bd5b94",
        multipleChoiceIcon: "multipleChoiceIcon_bd5b94",
      };
    },
  },
]);
//# sourceMappingURL=440c157ee6f5a59b2075.js.map
