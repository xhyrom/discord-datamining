"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["74828"],
  {
    767593: function (e, t, n) {
      n.r(t), n(47120), n(653041);
      var o = n(735250),
        r = n(470079),
        a = n(212433),
        i = n(481060),
        s = n(442837),
        l = n(607070),
        c = n(970606),
        u = n(313201),
        d = n(863249),
        m = n(944163),
        f = n(246364),
        p = n(983736),
        h = n(937111),
        _ = n(200305),
        x = n(271383),
        b = n(594174),
        C = n(231467),
        I = n(308083),
        N = n(689938),
        g = n(684025);
      let E = { mass: 1, tension: 600, friction: 60 },
        v = { mass: 1, tension: 300, friction: 25 },
        T = 2300,
        R = [
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
      function j(e) {
        let {
            children: t,
            containerRef: n,
            faderSize: a,
            faderEdgeThreshold: s,
          } = e,
          l = r.useRef(null),
          [c, u] = r.useState(0),
          [d, m] = r.useState(0),
          [f, p] = r.useState(0),
          h = r.useCallback(() => {
            null != l.current &&
              (u(l.current.getDistanceFromTop()),
              m(l.current.getDistanceFromBottom()),
              p(l.current.getScrollerState().offsetHeight));
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
        }, [l, n, h]);
        let _ = r.useMemo(() => {
          if (0 === c && 0 === d) return {};
          let e = [];
          if ((e.push("to bottom"), c > 0)) {
            let t = s > 0 ? 1 - Math.min(s, c) / s : 1;
            for (let n = 0; n < R.length; n++) {
              let { position: o, alpha: r } = R[n],
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
            for (let o = R.length - 1; o >= 0; o--) {
              let { position: r, alpha: i } = R[o],
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
          style: _,
          className: g.scroller,
          onScroll: h,
          children: t,
        });
      }
      function y(e) {
        let { guildId: t, formState: n, updateFormState: r } = e;
        return (0, o.jsxs)("div", {
          className: g.verificationForm,
          children: [
            (0, o.jsx)(i.Heading, {
              variant: "heading-xxl/normal",
              color: "header-primary",
              children: N.Z.Messages.CLAN_DISCOVERY_PROFILE_TITLE,
            }),
            (0, o.jsx)(i.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              children: N.Z.Messages.CLAN_DISCOVERY_PROFILE_SUBTITLE,
            }),
            (0, o.jsx)(_.Y, {
              guildId: t,
              formState: n,
              updateFormState: r,
              disableVerification: !0,
            }),
          ],
        });
      }
      t.default = function (e) {
        var t, n, _;
        let {
            clan: R,
            prioritizedGameIds: F,
            position: B,
            transitionState: S,
            onClose: k,
          } = e,
          M = (0, u.Dt)(),
          A = (0, s.e7)([m.Z], () => m.Z.get(R.id)),
          [O, P] = r.useState(
            null !== (n = null == A ? void 0 : A.formFields) && void 0 !== n
              ? n
              : [],
          ),
          [q, w] = r.useState(!1),
          [D, L] = r.useState(!1),
          [Z, H] = r.useState(!1),
          V = (0, s.e7)([b.default], () => b.default.getCurrentUser()),
          Y = (0, s.e7)(
            [x.ZP],
            () => x.ZP.isMember(R.id, null == V ? void 0 : V.id),
            [R, V],
          ),
          U = (0, s.e7)([h.Z], () => {
            var e;
            return (
              (null === (e = h.Z.getRequest(R.id)) || void 0 === e
                ? void 0
                : e.applicationStatus) === f.wB.SUBMITTED
            );
          }),
          [z, G] = r.useState(""),
          K = r.useRef(() => (0, c._v)({ guildId: R.id, position: B }));
        r.useEffect(
          () => (
            d.ZP.fetchVerificationForm(R.id),
            () => {
              K.current();
            }
          ),
          [R.id, K],
        ),
          r.useEffect(() => {
            null != A && P(A.formFields);
          }, [A]);
        let Q = r.useCallback(
            (e) => {
              !q &&
                (w(!0),
                (K.current = () => !1),
                (0, c.r)({ guildId: R.id, position: B })),
                P(e);
            },
            [P, q, w, R.id, B],
          ),
          W = r.useCallback(
            async (e) => {
              await d.ZP.submitVerificationForm(R.id, e, d.q0);
            },
            [R.id],
          ),
          J = r.useCallback(async () => {
            try {
              L(!0);
              let e = Date.now();
              await W({ ...(null != A ? A : m.t), formFields: O });
              let t = () => {
                  H(!0), setTimeout(k, 1300), L(!1), setTimeout(d.xo, T);
                },
                n = Date.now();
              n - e > 1e3 ? t() : setTimeout(t, 1e3 - (n - e));
            } catch (e) {
              G(null == e ? void 0 : e.message), L(!1);
            }
          }, [W, k, A, O]),
          X = O.some((e) => !(0, p.OA)(e)),
          $ =
            (null !==
              (_ =
                null == A
                  ? void 0
                  : null === (t = A.guild) || void 0 === t
                    ? void 0
                    : t.approximate_member_count) && void 0 !== _
              ? _
              : 0) >= I.Du,
          ee = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
          et = (0, i.useSpring)(
            {
              from: {
                opacity: 0,
                transform: "translateY(".concat(ee ? 0 : 40, "px)"),
              },
              to: { opacity: 1, transform: "translateY(0px)" },
              config: E,
              delay: 500,
            },
            "animate-always",
          ),
          en = (0, i.useTransition)(Z, {
            from: { opacity: 0, scale: 0 },
            enter: { opacity: 1, scale: 1 },
            leave: { opacity: 0, scale: 0 },
            config: v,
          }),
          eo = r.useRef(null);
        return (0, o.jsxs)(i.ModalRoot, {
          transitionState: S,
          "aria-labelledby": M,
          size: i.ModalSize.DYNAMIC,
          className: g.container,
          hideShadow: !0,
          children: [
            (0, o.jsxs)(a.animated.div, {
              className: g.body,
              style: et,
              children: [
                (0, o.jsx)("div", {
                  className: g.applicationContainer,
                  ref: eo,
                  children: (0, o.jsx)(j, {
                    containerRef: eo,
                    faderSize: 180,
                    faderEdgeThreshold: 48,
                    children: (0, o.jsx)(y, {
                      guildId: R.id,
                      formState: O,
                      updateFormState: Q,
                    }),
                  }),
                }),
                (0, o.jsx)("div", { className: g.verticalRule }),
                (0, o.jsxs)("div", {
                  className: g.clanContainer,
                  children: [
                    (0, o.jsx)(C.xV, {
                      clan: R,
                      className: g.profileCard,
                      prioritizedGameIds: F,
                      expanded: !0,
                      isMember: Y,
                      hasPendingJoinRequest: U,
                      atMaxMemberCapacity: $,
                      showFavoriteButton: !0,
                    }),
                    (0, o.jsxs)("div", {
                      className: g.applyButtonContainer,
                      children: [
                        (0, o.jsxs)(i.Button, {
                          type: "submit",
                          onClick: Z ? void 0 : J,
                          submitting: D,
                          fullWidth: !0,
                          disabled: X || null == A,
                          innerClassName: g.applyButtonInner,
                          children: [
                            $ &&
                              (0, o.jsx)(i.WarningIcon, {
                                size: "custom",
                                color: "white",
                                width: 20,
                                height: 20,
                              }),
                            !Z && N.Z.Messages.APPLY,
                            en(
                              (e, t) =>
                                t &&
                                (0, o.jsx)(a.animated.div, {
                                  style: e,
                                  className: g.successCheckmark,
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
                        "" !== z &&
                          (0, o.jsx)(i.Text, {
                            variant: "text-sm/normal",
                            color: "text-danger",
                            children: z,
                          }),
                      ],
                    }),
                    $ &&
                      (0, o.jsxs)(o.Fragment, {
                        children: [
                          (0, o.jsx)(i.Text, {
                            variant: "text-xs/medium",
                            color: "text-warning",
                            className: g.maxCapacityText,
                            children:
                              N.Z.Messages
                                .CLAN_DISCOVERY_APPLICATION_MAX_MEMBERS,
                          }),
                          (0, o.jsx)("hr", { className: g.separator }),
                        ],
                      }),
                    (0, o.jsx)(i.Text, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: g.noticeText,
                      children: N.Z.Messages.CLAN_APPLICATION_GDM_CONSENT,
                    }),
                    (0, o.jsx)(i.Text, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: g.noticeText,
                      children: N.Z.Messages.MEMBER_VERIFICATION_WARNING,
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsx)("div", {
              className: g.closeButtonContainer,
              children: (0, o.jsx)(i.Button, {
                onClick: k,
                look: i.ButtonLooks.OUTLINED,
                color: i.ButtonColors.PRIMARY,
                children: N.Z.Messages.CLOSE,
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
          return l;
        },
        kT: function () {
          return s;
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
      function s(e) {
        return a.lI.has(null == e ? void 0 : e.field_type);
      }
      function l(e) {
        return a.hZ.has(null == e ? void 0 : e.field_type);
      }
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
      var o = n(735250);
      n(470079);
      var r = n(692547),
        a = n(481060),
        i = n(626166);
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
      var o = n(735250),
        r = n(470079),
        a = n(120356),
        i = n.n(a),
        s = n(481060),
        l = n(489813),
        c = n(707592),
        u = n(738912);
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
      var o = n(735250);
      n(470079);
      var r = n(120356),
        a = n.n(r),
        i = n(481060),
        s = n(489813),
        l = n(592286),
        c = n(738912);
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
          return p;
        },
      }),
        n(47120);
      var o = n(735250);
      n(470079);
      var r = n(120356),
        a = n.n(r),
        i = n(481060),
        s = n(454585),
        l = n(489813),
        c = n(689938),
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
            children: c.Z.Messages.MEMBER_VERIFICATION_READ_RULES,
          }),
        });
      }
      function f(e) {
        let { formField: t } = e;
        return (0, o.jsx)(l.Ih, {
          icon: i.BookCheckIcon,
          text: c.Z.Messages.MEMBER_VERIFICATION_AGREED_TO_RULES,
          meetsRequirement: !!t.response,
        });
      }
      let p = (e) => {
        let { channelId: t, formField: n, onChange: r } = e;
        return (0, o.jsxs)(l.hK, {
          title: c.Z.Messages.SERVER_DISCOVERY_AGREE_TO_RULES,
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
      var o = n(735250);
      n(470079);
      var r = n(120356),
        a = n.n(r),
        i = n(481060),
        s = n(489813),
        l = n(592286),
        c = n(738912);
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
//# sourceMappingURL=306550fbeade6a29f003.js.map
