"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["41558"],
  {
    767593: function (e, n, t) {
      t.r(n), t(47120), t(653041);
      var o = t(735250),
        r = t(470079),
        a = t(567526),
        i = t(481060),
        s = t(442837),
        l = t(607070),
        c = t(970606),
        u = t(963202),
        d = t(313201),
        m = t(863249),
        f = t(944163),
        p = t(246364),
        h = t(983736),
        _ = t(937111),
        x = t(200305),
        b = t(271383),
        C = t(594174),
        I = t(231467),
        N = t(981631),
        E = t(308083),
        g = t(689938),
        v = t(133072);
      let R = { mass: 1, tension: 600, friction: 60 },
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
      function j(e) {
        let {
            children: n,
            containerRef: t,
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
          if ((h(), null == t.current)) return;
          let e = new ResizeObserver(() => {
            h();
          });
          return (
            e.observe(t.current),
            () => {
              e.disconnect();
            }
          );
        }, [l, t, h]);
        let _ = r.useMemo(() => {
          if (0 === c && 0 === d) return {};
          let e = [];
          if ((e.push("to bottom"), c > 0)) {
            let n = s > 0 ? 1 - Math.min(s, c) / s : 1;
            for (let t = 0; t < T.length; t++) {
              let { position: o, alpha: r } = T[t],
                i = (o * a).toFixed(2);
              e.push(
                "hsla(0, 0%, 0%, "
                  .concat(n + r * (1 - n), ") ")
                  .concat(i, "px"),
              );
            }
          }
          if (d > 0) {
            let n = f - a,
              t = s > 0 ? 1 - Math.min(s, d) / s : 1;
            for (let o = T.length - 1; o >= 0; o--) {
              let { position: r, alpha: i } = T[o],
                s = (n + (1 - r) * a).toFixed(2);
              e.push(
                "hsla(0, 0%, 0%, "
                  .concat(t + i * (1 - t), ") ")
                  .concat(s, "px"),
              );
            }
          }
          return { maskImage: "linear-gradient(".concat(e.join(","), ")") };
        }, [d, c, s, a, f]);
        return (0, o.jsx)(i.AdvancedScrollerNone, {
          ref: l,
          style: _,
          className: v.scroller,
          onScroll: h,
          children: n,
        });
      }
      function y(e) {
        let { guildId: n, formState: t, updateFormState: r } = e;
        return (0, o.jsxs)("div", {
          className: v.verificationForm,
          children: [
            (0, o.jsx)(i.Heading, {
              variant: "heading-xxl/normal",
              color: "header-primary",
              children: g.Z.Messages.CLAN_DISCOVERY_PROFILE_TITLE,
            }),
            (0, o.jsx)(i.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              children: g.Z.Messages.CLAN_DISCOVERY_PROFILE_SUBTITLE,
            }),
            (0, o.jsx)(x.Y, { guildId: n, formState: t, updateFormState: r }),
          ],
        });
      }
      n.default = function (e) {
        var n, t, x, T;
        let {
            clan: F,
            prioritizedGameIds: B,
            position: S,
            transitionState: A,
            onClose: M,
          } = e,
          O = (0, d.Dt)(),
          P = (0, s.e7)([f.Z], () => f.Z.get(F.id)),
          [k, q] = r.useState(
            null !== (x = null == P ? void 0 : P.formFields) && void 0 !== x
              ? x
              : [],
          ),
          [L, D] = r.useState(!1),
          Z = (0, s.e7)([C.default], () => C.default.getCurrentUser()),
          w = (0, s.e7)(
            [b.ZP],
            () => b.ZP.isMember(F.id, null == Z ? void 0 : Z.id),
            [F, Z],
          ),
          H = (0, s.e7)([_.Z], () => {
            var e;
            return (
              (null === (e = _.Z.getRequest(F.id)) || void 0 === e
                ? void 0
                : e.applicationStatus) === p.wB.SUBMITTED
            );
          }),
          V = null == Z ? void 0 : Z.verified,
          Y = null == Z ? void 0 : Z.isPhoneVerified(),
          [U, z] = r.useState(""),
          { enableApplication: G } = (0, u.Fg)("discovery");
        r.useEffect(() => {
          m.Z.fetchVerificationForm(F.id);
        }, [F.id]),
          r.useEffect(() => {
            null != P && q(P.formFields);
          }, [P]);
        let K = r.useCallback(
            (e) => {
              !L && (D(!0), (0, c.r)({ guildId: F.id, position: S })), q(e);
            },
            [q, L, D, F.id, S],
          ),
          Q = r.useCallback(
            async (e) => {
              await m.Z.submitVerificationForm(F.id, e);
            },
            [F.id],
          ),
          W = r.useCallback(async () => {
            try {
              await Q({ ...(null != P ? P : f.t), formFields: k }), M();
            } catch (e) {
              z(null == e ? void 0 : e.message);
            }
          }, [Q, M, P, k]),
          J =
            !((null == P
              ? void 0
              : null === (n = P.guild) || void 0 === n
                ? void 0
                : n.verification_level) === N.sFg.VERY_HIGH
              ? Y
              : V || Y) || k.some((e) => !(0, h.OA)(e)),
          X =
            (null !==
              (T =
                null == P
                  ? void 0
                  : null === (t = P.guild) || void 0 === t
                    ? void 0
                    : t.approximate_member_count) && void 0 !== T
              ? T
              : 0) >= E.Du,
          $ = (0, s.e7)([l.Z], () => l.Z.useReducedMotion),
          ee = (0, i.useSpring)(
            {
              from: {
                opacity: 0,
                transform: "translateY(".concat($ ? 0 : 40, "px)"),
              },
              to: { opacity: 1, transform: "translateY(0px)" },
              config: R,
              delay: 500,
            },
            "animate-always",
          ),
          en = r.useRef(null);
        return (0, o.jsxs)(i.ModalRoot, {
          transitionState: A,
          "aria-labelledby": O,
          size: i.ModalSize.DYNAMIC,
          className: v.container,
          hideShadow: !0,
          children: [
            (0, o.jsxs)(a.animated.div, {
              className: v.body,
              style: ee,
              children: [
                (0, o.jsx)("div", {
                  className: v.applicationContainer,
                  ref: en,
                  children: (0, o.jsx)(j, {
                    containerRef: en,
                    faderSize: 180,
                    faderEdgeThreshold: 48,
                    children: (0, o.jsx)(y, {
                      guildId: F.id,
                      formState: k,
                      updateFormState: K,
                    }),
                  }),
                }),
                (0, o.jsx)("div", { className: v.verticalRule }),
                (0, o.jsxs)("div", {
                  className: v.clanContainer,
                  children: [
                    (0, o.jsx)(I.xV, {
                      clan: F,
                      className: v.profileCard,
                      prioritizedGameIds: B,
                      expanded: !0,
                      isMember: w,
                      hasPendingJoinRequest: H,
                      atMaxMemberCapacity: X,
                      showFavoriteButton: !0,
                    }),
                    (0, o.jsx)(i.Tooltip, {
                      text: g.Z.Messages
                        .CLAN_DISCOVERY_APPLICATION_DISABLED_TOOLTIP,
                      shouldShow: !G,
                      children: (e) =>
                        (0, o.jsxs)("div", {
                          className: v.applyButtonContainer,
                          children: [
                            (0, o.jsxs)(i.Button, {
                              ...e,
                              type: "submit",
                              onClick: W,
                              fullWidth: !0,
                              disabled: J || !G || null == P,
                              innerClassName: v.applyButtonInner,
                              children: [
                                X &&
                                  (0, o.jsx)(i.WarningIcon, {
                                    size: "custom",
                                    color: "white",
                                    width: 20,
                                    height: 20,
                                  }),
                                g.Z.Messages.APPLY,
                              ],
                            }),
                            "" !== U &&
                              (0, o.jsx)(i.Text, {
                                variant: "text-sm/normal",
                                color: "text-danger",
                                children: U,
                              }),
                          ],
                        }),
                    }),
                    X &&
                      (0, o.jsxs)(o.Fragment, {
                        children: [
                          (0, o.jsx)(i.Text, {
                            variant: "text-xs/medium",
                            color: "text-warning",
                            className: v.maxCapacityText,
                            children:
                              g.Z.Messages
                                .CLAN_DISCOVERY_APPLICATION_MAX_MEMBERS,
                          }),
                          (0, o.jsx)("hr", { className: v.separator }),
                        ],
                      }),
                    (0, o.jsx)(i.Text, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: v.noticeText,
                      children: g.Z.Messages.CLAN_APPLICATION_GDM_CONSENT,
                    }),
                    (0, o.jsx)(i.Text, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: v.noticeText,
                      children: g.Z.Messages.MEMBER_VERIFICATION_WARNING,
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsx)("div", {
              className: v.closeButtonContainer,
              children: (0, o.jsx)(i.Button, {
                onClick: M,
                look: i.ButtonLooks.OUTLINED,
                color: i.ButtonColors.PRIMARY,
                children: g.Z.Messages.CLOSE,
              }),
            }),
          ],
        });
      };
    },
    983736: function (e, n, t) {
      t.d(n, {
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
      var o = t(823379),
        r = t(246364),
        a = t(592286);
      let i = (e) => {
        let { required: n, response: t, field_type: a } = e;
        if (!n) return !0;
        if (null == t) return !1;
        switch (a) {
          case r.QJ.TERMS:
          case r.QJ.VERIFICATION:
            return !!t;
          case r.QJ.TEXT_INPUT:
          case r.QJ.PARAGRAPH:
            return "string" == typeof t && "" !== t.trim();
          case r.QJ.MULTIPLE_CHOICE:
            return "number" == typeof t;
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
    489813: function (e, n, t) {
      t.d(n, {
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
      var o = t(735250);
      t(470079);
      var r = t(692547),
        a = t(481060),
        i = t(346485);
      function s(e) {
        let { title: n, children: t } = e;
        return (0, o.jsxs)("div", {
          className: i.questionContainer,
          children: [
            (0, o.jsx)(a.Text, {
              className: i.questionTitle,
              variant: "text-md/semibold",
              color: "header-primary",
              children: n,
            }),
            t,
          ],
        });
      }
      function l(e) {
        let { icon: n, text: t, meetsRequirement: s } = e;
        return (0, o.jsxs)("div", {
          className: i.requirementContainer,
          children: [
            (0, o.jsx)(n, {
              className: i.requirementIcon,
              height: 20,
              width: 20,
              size: "custom",
              color: "currentColor",
            }),
            (0, o.jsx)(a.Text, {
              className: i.requirementText,
              variant: "text-md/normal",
              children: t,
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
          icon: n,
          text: t,
          footnote: s,
          meetsRequirement: l,
          children: c,
        } = e;
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsxs)("div", {
              className: i.requirementContainer,
              children: [
                (0, o.jsx)(n, {
                  className: i.requirementIcon,
                  height: 20,
                  width: 20,
                  size: "custom",
                  color: "currentColor",
                }),
                (0, o.jsx)(a.Text, {
                  className: i.requirementText,
                  variant: "text-md/normal",
                  children: t,
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
    186078: function (e, n, t) {
      t.d(n, {
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
      var o = t(735250),
        r = t(470079),
        a = t(120356),
        i = t.n(a),
        s = t(481060),
        l = t(489813),
        c = t(707592),
        u = t(994735);
      function d(e) {
        let {
            disabled: n,
            field: t,
            value: a,
            radioItemClassName: l,
            radioItemIconClassName: c,
            onChange: d,
          } = e,
          { choices: m } = t,
          f = r.useMemo(
            () =>
              m.map((e, n) => ({
                name: e,
                value: n,
                radioItemIconClassName: i()(u.multipleChoiceIcon, c),
              })),
            [m, c],
          );
        return (0, o.jsx)(s.RadioGroup, {
          disabled: n,
          options: f,
          value: a,
          onChange: d,
          radioItemClassName: l,
          withTransparentBackground: !0,
        });
      }
      function m(e) {
        let { formField: n } = e,
          t = null != n.response ? n.choices[n.response] : "";
        return (0, o.jsx)(l.hK, {
          title: n.label,
          children: (0, o.jsx)(c.Gi, {
            className: u.fieldBackground,
            value: t,
            disabled: !0,
          }),
        });
      }
      function f(e) {
        let { formField: n, onChange: t } = e;
        return (0, o.jsx)(l.hK, {
          title: n.label,
          children: (0, o.jsx)(d, {
            radioItemClassName: u.fieldBackground,
            field: n,
            value: n.response,
            onChange: t,
          }),
        });
      }
    },
    73880: function (e, n, t) {
      t.d(n, {
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
      var o = t(735250);
      t(470079);
      var r = t(120356),
        a = t.n(r),
        i = t(481060),
        s = t(489813),
        l = t(592286),
        c = t(994735);
      function u(e) {
        let {
          value: n,
          placeholder: t,
          onChange: r,
          disabled: s,
          className: u,
          autofocus: d,
        } = e;
        return (0, o.jsx)(i.TextArea, {
          className: a()(c.paragraphFieldBody, u),
          maxLength: l.RS,
          value: null != n ? n : "",
          placeholder: null != t ? t : "",
          onChange: r,
          disabled: s,
          autoFocus: d,
          autosize: !0,
        });
      }
      function d(e) {
        let { formField: n } = e;
        return (0, o.jsx)(s.hK, {
          title: n.label,
          children: (0, o.jsx)(u, {
            className: c.fieldBackground,
            value: n.response,
            disabled: !0,
          }),
        });
      }
      function m(e) {
        let { formField: n, autofocus: t, onChange: r } = e;
        return (0, o.jsx)(s.hK, {
          title: n.label,
          children: (0, o.jsx)(u, {
            className: c.fieldBackground,
            value: n.response,
            onChange: r,
            autofocus: t,
          }),
        });
      }
    },
    196345: function (e, n, t) {
      t.d(n, {
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
        t(47120);
      var o = t(735250);
      t(470079);
      var r = t(120356),
        a = t.n(r),
        i = t(481060),
        s = t(454585),
        l = t(489813),
        c = t(689938),
        u = t(994735);
      function d(e) {
        let { terms: n, channelId: t, className: r } = e;
        return (0, o.jsx)("div", {
          className: a()(u.termsFieldBody, r),
          children: n.map((e, n) =>
            (0, o.jsxs)(
              "div",
              {
                className: u.termsRow,
                children: [
                  (0, o.jsx)(i.Text, {
                    variant: "text-md/normal",
                    color: "text-muted",
                    children: "".concat(n + 1, "."),
                  }),
                  (0, o.jsx)(i.Text, {
                    variant: "text-md/normal",
                    className: u.termsRowContent,
                    children: s.Z.parseGuildVerificationFormRule(e, !0, {
                      channelId: t,
                    }),
                  }),
                ],
              },
              "term-".concat(n),
            ),
          ),
        });
      }
      function m(e) {
        let { onChange: n, checked: t, disabled: r } = e;
        return (0, o.jsx)(i.Checkbox, {
          size: 20,
          type: i.Checkbox.Types.INVERTED,
          value: t,
          onChange: n,
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
        let { formField: n } = e;
        return (0, o.jsx)(l.Ih, {
          icon: i.BookCheckIcon,
          text: c.Z.Messages.MEMBER_VERIFICATION_AGREED_TO_RULES,
          meetsRequirement: !!n.response,
        });
      }
      let p = (e) => {
        let { channelId: n, formField: t, onChange: r } = e;
        return (0, o.jsxs)(l.hK, {
          title: c.Z.Messages.SERVER_DISCOVERY_AGREE_TO_RULES,
          children: [
            (0, o.jsx)(d, {
              className: u.fieldBackground,
              terms: t.values,
              channelId: n,
            }),
            (0, o.jsx)(m, { onChange: r, checked: t.response }),
          ],
        });
      };
    },
    707592: function (e, n, t) {
      t.d(n, {
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
      var o = t(735250);
      t(470079);
      var r = t(120356),
        a = t.n(r),
        i = t(481060),
        s = t(489813),
        l = t(592286),
        c = t(994735);
      function u(e) {
        let {
          value: n,
          placeholder: t,
          onChange: r,
          disabled: s,
          autofocus: u,
          className: d,
        } = e;
        return (0, o.jsx)(i.TextInput, {
          inputClassName: a()(c.textInputFieldBodyInput, d),
          maxLength: l.tL,
          value: null != n ? n : "",
          placeholder: t,
          onChange: r,
          disabled: s,
          autoFocus: u,
        });
      }
      function d(e) {
        let { formField: n } = e;
        return (0, o.jsx)(s.hK, {
          title: n.label,
          children: (0, o.jsx)(i.TextArea, {
            className: a()(c.textInputFieldBodyInput, c.fieldBackground),
            value: n.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2,
          }),
        });
      }
      function m(e) {
        let { formField: n, autofocus: t, onChange: r } = e;
        return (0, o.jsx)(s.hK, {
          title: n.label,
          children: (0, o.jsx)(u, {
            className: c.fieldBackground,
            onChange: r,
            value: n.response,
            autofocus: t,
          }),
        });
      }
    },
    144114: function (e, n, t) {
      t.d(n, {
        L: function () {
          return r;
        },
      });
      var o,
        r,
        a = t(990547),
        i = t(544891),
        s = t(570140),
        l = t(314897),
        c = t(573261),
        u = t(815660),
        d = t(981631);
      ((o = r || (r = {})).USER_ACTION_REQUIRED = "user_action_required"),
        (o.USER_SETTINGS_UPDATE = "user_settings_update"),
        (o.GUILD_PHONE_REQUIRED = "guild_phone_required"),
        (o.MFA_PHONE_UPDATE = "mfa_phone_update"),
        (o.CONTACT_SYNC = "contact_sync"),
        (n.Z = {
          setCountryCode(e) {
            s.Z.dispatch({ type: "PHONE_SET_COUNTRY_CODE", countryCode: e });
          },
          removePhone: (e, n) =>
            i.tn.del({
              url: d.ANM.PHONE,
              body: { password: e, change_phone_reason: n },
              oldFormErrors: !0,
            }),
          resendCode(e) {
            let n = {},
              t = l.default.getFingerprint();
            return (
              null != t && "" !== t && (n["X-Fingerprint"] = t),
              i.tn.post({
                url: d.ANM.RESEND_PHONE,
                headers: n,
                body: { phone: e },
              })
            );
          },
          beginAddPhone: (e, n) =>
            i.tn.post({
              url: d.ANM.PHONE,
              body: { phone: e, change_phone_reason: n },
            }),
          addPhone: (e, n, t) =>
            i.tn.post({
              url: d.ANM.PHONE,
              body: { phone_token: e, password: n, change_phone_reason: t },
              oldFormErrors: !0,
            }),
          addPhoneWithoutPassword: (e) =>
            i.tn.post({
              url: d.ANM.PHONE_VERIFY_NO_PASSWORD,
              body: { code: e },
            }),
          beginReverifyPhone: (e, n) =>
            i.tn.post({
              url: d.ANM.PHONE_REVERIFY,
              body: { phone: e, change_phone_reason: n },
            }),
          reverifyPhone: (e, n, t) =>
            i.tn.post({
              url: d.ANM.PHONE_REVERIFY,
              body: { phone_token: e, password: n, change_phone_reason: t },
              oldFormErrors: !0,
            }),
          validatePhoneForSupport: (e) =>
            i.tn.post({
              url: d.ANM.VERIFY_PHONE_FOR_TICKET,
              body: { token: e },
              oldFormErrors: !0,
            }),
          async verifyPhone(e, n) {
            let t =
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
              body: { phone: e, code: n },
              oldFormErrors: !0,
              trackedActionData: {
                event: a.NetworkActionNames.USER_VERIFY_PHONE,
              },
            });
            return t && s.Z.dispatch({ type: "MODAL_POP", key: u.M }), m.body;
          },
        });
    },
    815660: function (e, n, t) {
      t.d(n, {
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
    133072: function (e, n, t) {
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
        verificationForm: "verificationForm_d99f08",
        profileCard: "profileCard_d99f08",
        maxCapacityText: "maxCapacityText_d99f08",
        separator: "separator_d99f08",
        noticeText: "noticeText_d99f08",
      };
    },
    807907: function (e, n, t) {
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
        confirmationButtonColumn: "confirmationButtonColumn_a74b6f",
        notice: "notice_a74b6f",
        rejectionReasonLabel: "rejectionReasonLabel_a74b6f",
        rejectionReason: "rejectionReason_a74b6f",
        disclaimerFooter: "disclaimerFooter_a74b6f",
      };
    },
    346485: function (e, n, t) {
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
    994735: function (e, n, t) {
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
//# sourceMappingURL=660d126e268916fc1207.js.map
