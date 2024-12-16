"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["12167"],
  {
    723795: function (e, t, n) {
      n.r(t), n(47120), n(653041);
      var o = n(200651),
        r = n(192379),
        a = n(752877),
        i = n(481060),
        s = n(442837),
        l = n(607070),
        c = n(313201),
        u = n(863249),
        d = n(944163),
        m = n(246364),
        f = n(983736),
        h = n(937111),
        p = n(200305),
        x = n(271383),
        b = n(594174),
        _ = n(970606),
        C = n(900681),
        g = n(308083),
        N = n(388032),
        v = n(687651);
      let j = { mass: 1, tension: 600, friction: 60 },
        I = { mass: 1, tension: 300, friction: 25 },
        y = 2300,
        E = [
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
      function T(e) {
        let {
            children: t,
            containerRef: n,
            faderSize: a,
            faderEdgeThreshold: s,
          } = e,
          l = r.useRef(null),
          [c, u] = r.useState(0),
          [d, m] = r.useState(0),
          [f, h] = r.useState(0),
          p = r.useCallback(() => {
            null != l.current &&
              (u(l.current.getDistanceFromTop()),
              m(l.current.getDistanceFromBottom()),
              h(l.current.getScrollerState().offsetHeight));
          }, []);
        r.useEffect(() => {
          if ((p(), null == n.current)) return;
          let e = new ResizeObserver(() => {
            p();
          });
          return (
            e.observe(n.current),
            () => {
              e.disconnect();
            }
          );
        }, [l, n, p]);
        let x = r.useMemo(() => {
          if (0 === c && 0 === d) return {};
          let e = [];
          if ((e.push("to bottom"), c > 0)) {
            let t = s > 0 ? 1 - Math.min(s, c) / s : 1;
            for (let n = 0; n < E.length; n++) {
              let { position: o, alpha: r } = E[n],
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
              n = s > 0 ? 1 - Math.min(s, d) / s : 1;
            for (let o = E.length - 1; o >= 0; o--) {
              let { position: r, alpha: i } = E[o],
                s = (t + (1 - r) * a).toFixed(2);
              e.push(
                "hsla(0, 0%, 0%, "
                  .concat(n + i * (1 - n), ") ")
                  .concat(s, "px"),
              );
            }
          }
          return { maskImage: "linear-gradient(".concat(e.join(","), ")") };
        }, [d, c, s, a, f]);
        return (0, o.jsx)(i.AdvancedScrollerNone, {
          ref: l,
          style: x,
          className: v.scroller,
          onScroll: p,
          children: t,
        });
      }
      function F(e) {
        let { guildId: t, formState: n, updateFormState: r } = e;
        return (0, o.jsxs)("div", {
          className: v.verificationForm,
          children: [
            (0, o.jsx)(i.Heading, {
              variant: "heading-xxl/normal",
              color: "header-primary",
              children: N.intl.string(N.t.xsSj6e),
            }),
            (0, o.jsx)(i.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              children: N.intl.string(N.t["1VDDMT"]),
            }),
            (0, o.jsx)(p.Y, {
              guildId: t,
              formState: n,
              updateFormState: r,
              disableVerification: !0,
            }),
          ],
        });
      }
      t.default = function (e) {
        var t, n, p;
        let {
            clan: E,
            prioritizedGameIds: k,
            position: B,
            transitionState: R,
            onClose: S,
          } = e,
          P = (0, c.Dt)(),
          q = (0, s.e7)([d.Z], () => d.Z.get(E.id)),
          [O, w] = r.useState(
            null !== (n = null == q ? void 0 : q.formFields) && void 0 !== n
              ? n
              : [],
          ),
          [M, A] = r.useState(!1),
          [D, H] = r.useState(!1),
          [z, Z] = r.useState(!1),
          W = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
          Y = (0, s.e7)(
            [x.ZP],
            () => x.ZP.isMember(E.id, null == W ? void 0 : W.id),
            [E, W],
          ),
          U = (0, s.e7)([h.Z], () => {
            var e;
            return (
              (null === (e = h.Z.getRequest(E.id)) || void 0 === e
                ? void 0
                : e.applicationStatus) === m.wB.SUBMITTED
            );
          }),
          [V, K] = r.useState(""),
          L = r.useRef(() => (0, _._v)({ guildId: E.id, position: B }));
        r.useEffect(
          () => (
            u.ZP.fetchVerificationForm(E.id),
            () => {
              L.current();
            }
          ),
          [E.id, L],
        ),
          r.useEffect(() => {
            null != q && w(q.formFields);
          }, [q]);
        let G = r.useCallback(
            (e) => {
              !M &&
                (A(!0),
                (L.current = () => !1),
                (0, _.r)({ guildId: E.id, position: B })),
                w(e);
            },
            [w, M, A, E.id, B],
          ),
          X = r.useCallback(
            async (e) => {
              await u.ZP.submitVerificationForm(E.id, e, u.q0);
            },
            [E.id],
          ),
          Q = r.useCallback(async () => {
            try {
              H(!0);
              let e = Date.now();
              await X({ ...(null != q ? q : d.t), formFields: O });
              let t = () => {
                  Z(!0), setTimeout(S, 1300), H(!1), setTimeout(u.xo, y);
                },
                n = Date.now();
              n - e > 1e3 ? t() : setTimeout(t, 1e3 - (n - e));
            } catch (e) {
              K(null == e ? void 0 : e.message), H(!1);
            }
          }, [X, S, q, O]),
          J = O.some((e) => !(0, f.OA)(e)),
          $ =
            (null !==
              (p =
                null == q
                  ? void 0
                  : null === (t = q.guild) || void 0 === t
                    ? void 0
                    : t.approximate_member_count) && void 0 !== p
              ? p
              : 0) >= g.Du,
          ee = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
          et = (0, i.useSpring)(
            {
              from: {
                opacity: 0,
                transform: "translateY(".concat(ee ? 0 : 40, "px)"),
              },
              to: { opacity: 1, transform: "translateY(0px)" },
              config: j,
              delay: 500,
            },
            "animate-always",
          ),
          en = (0, i.useTransition)(z, {
            from: { opacity: 0, scale: 0 },
            enter: { opacity: 1, scale: 1 },
            leave: { opacity: 0, scale: 0 },
            config: I,
          }),
          eo = r.useRef(null);
        return (0, o.jsxs)(i.ModalRoot, {
          transitionState: R,
          "aria-labelledby": P,
          size: i.ModalSize.DYNAMIC,
          className: v.container,
          hideShadow: !0,
          children: [
            (0, o.jsxs)(a.animated.div, {
              className: v.body,
              style: et,
              children: [
                (0, o.jsx)("div", {
                  className: v.applicationContainer,
                  ref: eo,
                  children: (0, o.jsx)(T, {
                    containerRef: eo,
                    faderSize: 180,
                    faderEdgeThreshold: 48,
                    children: (0, o.jsx)(F, {
                      guildId: E.id,
                      formState: O,
                      updateFormState: G,
                    }),
                  }),
                }),
                (0, o.jsx)("div", { className: v.verticalRule }),
                (0, o.jsxs)("div", {
                  className: v.clanContainer,
                  children: [
                    (0, o.jsx)(C.xV, {
                      clan: E,
                      className: v.profileCard,
                      prioritizedGameIds: k,
                      expanded: !0,
                      isMember: Y,
                      hasPendingJoinRequest: U,
                      atMaxMemberCapacity: $,
                    }),
                    (0, o.jsxs)("div", {
                      className: v.applyButtonContainer,
                      children: [
                        (0, o.jsxs)(i.Button, {
                          type: "submit",
                          onClick: z ? void 0 : Q,
                          submitting: D,
                          fullWidth: !0,
                          disabled: J || null == q,
                          innerClassName: v.applyButtonInner,
                          children: [
                            $ &&
                              (0, o.jsx)(i.WarningIcon, {
                                size: "custom",
                                color: "white",
                                width: 20,
                                height: 20,
                              }),
                            !z && N.intl.string(N.t["1Qm829"]),
                            en(
                              (e, t) =>
                                t &&
                                (0, o.jsx)(a.animated.div, {
                                  style: e,
                                  className: v.successCheckmark,
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
                        "" !== V &&
                          (0, o.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            color: "text-danger",
                            children: V,
                          }),
                      ],
                    }),
                    $ &&
                      (0, o.jsxs)(o.Fragment, {
                        children: [
                          (0, o.jsx)(i.Text, {
                            variant: "text-xs/medium",
                            color: "text-warning",
                            className: v.maxCapacityText,
                            children: N.intl.string(N.t.GNPXdX),
                          }),
                          (0, o.jsx)("hr", { className: v.separator }),
                        ],
                      }),
                    (0, o.jsx)(i.Text, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: v.noticeText,
                      children: N.intl.string(N.t.FwXzw8),
                    }),
                    (0, o.jsx)(i.Text, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: v.noticeText,
                      children: N.intl.string(N.t["+fPCTU"]),
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsx)("div", {
              className: v.closeButtonContainer,
              children: (0, o.jsx)(i.Button, {
                onClick: S,
                look: i.ButtonLooks.OUTLINED,
                color: i.ButtonColors.PRIMARY,
                children: N.intl.string(N.t.cpT0Cg),
              }),
            }),
          ],
        });
      };
    },
    489813: function (e, t, n) {
      n.d(t, {
        Ih: function () {
          return l;
        },
        PU: function () {
          return c;
        },
        hK: function () {
          return s;
        },
      });
      var o = n(200651);
      n(192379);
      var r = n(692547),
        a = n(481060),
        i = n(933078);
      function s(e) {
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
      function l(e) {
        let { icon: t, text: n, meetsRequirement: s } = e;
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
            s
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
          footnote: s,
          meetsRequirement: l,
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
                l
                  ? (0, o.jsx)(a.CircleCheckIcon, {
                      size: "md",
                      color: "currentColor",
                      className: i.requirementSuccess,
                      secondaryColor: r.Z.colors.WHITE.css,
                    })
                  : c,
              ],
            }),
            null != s &&
              (0, o.jsx)(a.Text, {
                color: "header-secondary",
                className: i.footnote,
                variant: "text-xs/normal",
                children: s,
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
        s = n(481060),
        l = n(489813),
        c = n(707592),
        u = n(119866);
      function d(e) {
        let {
            disabled: t,
            field: n,
            value: a,
            radioItemClassName: l,
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
        return (0, o.jsx)(s.RadioGroup, {
          disabled: t,
          options: f,
          value: a,
          onChange: d,
          radioItemClassName: l,
          withTransparentBackground: !0,
        });
      }
      function m(e) {
        let { formField: t } = e,
          n = null != t.response ? t.choices[t.response] : "";
        return (0, o.jsx)(l.hK, {
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
        return (0, o.jsx)(l.hK, {
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
        s = n(489813),
        l = n(592286),
        c = n(119866);
      function u(e) {
        let {
          value: t,
          placeholder: n,
          onChange: r,
          disabled: s,
          className: u,
          autofocus: d,
        } = e;
        return (0, o.jsx)(i.TextArea, {
          className: a()(c.paragraphFieldBody, u),
          maxLength: l.RS,
          value: null != t ? t : "",
          placeholder: null != n ? n : "",
          onChange: r,
          disabled: s,
          autoFocus: d,
          autosize: !0,
          showRemainingCharacterCount: !s,
        });
      }
      function d(e) {
        let { formField: t } = e;
        return (0, o.jsx)(s.hK, {
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
        return (0, o.jsx)(s.hK, {
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
          return h;
        },
      }),
        n(47120);
      var o = n(200651);
      n(192379);
      var r = n(120356),
        a = n.n(r),
        i = n(481060),
        s = n(454585),
        l = n(489813),
        c = n(388032),
        u = n(119866);
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
                    children: s.Z.parseGuildVerificationFormRule(e, !0, {
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
        return (0, o.jsx)(l.Ih, {
          icon: i.BookCheckIcon,
          text: c.intl.string(c.t["2xbmoK"]),
          meetsRequirement: !!t.response,
        });
      }
      let h = (e) => {
        let { channelId: t, formField: n, onChange: r } = e;
        return (0, o.jsxs)(l.hK, {
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
        s = n(489813),
        l = n(592286),
        c = n(119866);
      function u(e) {
        let {
          value: t,
          placeholder: n,
          onChange: r,
          disabled: s,
          autofocus: u,
          className: d,
        } = e;
        return (0, o.jsx)(i.TextInput, {
          inputClassName: a()(c.textInputFieldBodyInput, d),
          maxLength: l.tL,
          value: null != t ? t : "",
          placeholder: n,
          onChange: r,
          disabled: s,
          autoFocus: u,
        });
      }
      function d(e) {
        let { formField: t } = e;
        return (0, o.jsx)(s.hK, {
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
        return (0, o.jsx)(s.hK, {
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
        s = n(570140),
        l = n(314897),
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
            s.Z.dispatch({ type: "PHONE_SET_COUNTRY_CODE", countryCode: e });
          },
          removePhone: (e, t) =>
            i.tn.del({
              url: d.ANM.PHONE,
              body: { password: e, change_phone_reason: t },
              oldFormErrors: !0,
              rejectWithError: !1,
            }),
          resendCode(e) {
            let t = {},
              n = l.default.getFingerprint();
            return (
              null != n && "" !== n && (t["X-Fingerprint"] = n),
              i.tn.post({
                url: d.ANM.RESEND_PHONE,
                headers: t,
                body: { phone: e },
                rejectWithError: !1,
              })
            );
          },
          beginAddPhone: (e, t) =>
            i.tn.post({
              url: d.ANM.PHONE,
              body: { phone: e, change_phone_reason: t },
              rejectWithError: !1,
            }),
          addPhone: (e, t, n) =>
            i.tn.post({
              url: d.ANM.PHONE,
              body: { phone_token: e, password: t, change_phone_reason: n },
              oldFormErrors: !0,
              rejectWithError: !1,
            }),
          addPhoneWithoutPassword: (e) =>
            i.tn.post({
              url: d.ANM.PHONE_VERIFY_NO_PASSWORD,
              body: { code: e },
              rejectWithError: !1,
            }),
          beginReverifyPhone: (e, t) =>
            i.tn.post({
              url: d.ANM.PHONE_REVERIFY,
              body: { phone: e, change_phone_reason: t },
              rejectWithError: !1,
            }),
          reverifyPhone: (e, t, n) =>
            i.tn.post({
              url: d.ANM.PHONE_REVERIFY,
              body: { phone_token: e, password: t, change_phone_reason: n },
              oldFormErrors: !0,
              rejectWithError: !1,
            }),
          validatePhoneForSupport: (e) =>
            i.tn.post({
              url: d.ANM.VERIFY_PHONE_FOR_TICKET,
              body: { token: e },
              oldFormErrors: !0,
              rejectWithError: !1,
            }),
          async verifyPhone(e, t) {
            let n =
                !(arguments.length > 2) ||
                void 0 === arguments[2] ||
                arguments[2],
              o =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              r = {},
              i = l.default.getFingerprint();
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
              rejectWithError: !1,
            });
            return n && s.Z.dispatch({ type: "MODAL_POP", key: u.M }), m.body;
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
    687651: function (e, t, n) {
      e.exports = {
        container: "container_cd16cf",
        closeButtonContainer: "closeButtonContainer_cd16cf",
        body: "body_cd16cf",
        applicationContainer: "applicationContainer_cd16cf",
        scroller: "scroller_cd16cf",
        verticalRule: "verticalRule_cd16cf",
        clanContainer: "clanContainer_cd16cf",
        applyButtonContainer: "applyButtonContainer_cd16cf",
        applyButtonInner: "applyButtonInner_cd16cf",
        successCheckmark: "successCheckmark_cd16cf",
        verificationForm: "verificationForm_cd16cf",
        profileCard: "profileCard_cd16cf",
        maxCapacityText: "maxCapacityText_cd16cf",
        separator: "separator_cd16cf",
        noticeText: "noticeText_cd16cf",
      };
    },
    832311: function (e, t, n) {
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
    933078: function (e, t, n) {
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
    119866: function (e, t, n) {
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
//# sourceMappingURL=89651befa72099104b9c.js.map
