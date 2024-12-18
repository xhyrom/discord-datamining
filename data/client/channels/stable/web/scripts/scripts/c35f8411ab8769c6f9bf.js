"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["11441"],
  {
    723795: function (e, t, n) {
      n.r(t), n(47120), n(653041);
      var o = n(200651),
        i = n(192379),
        r = n(752877),
        a = n(481060),
        l = n(442837),
        c = n(607070),
        s = n(313201),
        d = n(863249),
        u = n(944163),
        m = n(246364),
        f = n(983736),
        p = n(937111),
        _ = n(200305),
        b = n(271383),
        h = n(594174),
        x = n(970606),
        C = n(900681),
        g = n(308083),
        E = n(388032),
        y = n(687651);
      let N = { mass: 1, tension: 600, friction: 60 },
        v = { mass: 1, tension: 300, friction: 25 },
        I = 2300,
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
            children: t,
            containerRef: n,
            faderSize: r,
            faderEdgeThreshold: l,
          } = e,
          c = i.useRef(null),
          [s, d] = i.useState(0),
          [u, m] = i.useState(0),
          [f, p] = i.useState(0),
          _ = i.useCallback(() => {
            null != c.current &&
              (d(c.current.getDistanceFromTop()),
              m(c.current.getDistanceFromBottom()),
              p(c.current.getScrollerState().offsetHeight));
          }, []);
        i.useEffect(() => {
          if ((_(), null == n.current)) return;
          let e = new ResizeObserver(() => {
            _();
          });
          return (
            e.observe(n.current),
            () => {
              e.disconnect();
            }
          );
        }, [c, n, _]);
        let b = i.useMemo(() => {
          if (0 === s && 0 === u) return {};
          let e = [];
          if ((e.push("to bottom"), s > 0)) {
            let t = l > 0 ? 1 - Math.min(l, s) / l : 1;
            for (let n = 0; n < T.length; n++) {
              let { position: o, alpha: i } = T[n],
                a = (o * r).toFixed(2);
              e.push(
                "hsla(0, 0%, 0%, "
                  .concat(t + i * (1 - t), ") ")
                  .concat(a, "px"),
              );
            }
          }
          if (u > 0) {
            let t = f - r,
              n = l > 0 ? 1 - Math.min(l, u) / l : 1;
            for (let o = T.length - 1; o >= 0; o--) {
              let { position: i, alpha: a } = T[o],
                l = (t + (1 - i) * r).toFixed(2);
              e.push(
                "hsla(0, 0%, 0%, "
                  .concat(n + a * (1 - n), ") ")
                  .concat(l, "px"),
              );
            }
          }
          return { maskImage: "linear-gradient(".concat(e.join(","), ")") };
        }, [u, s, l, r, f]);
        return (0, o.jsx)(a.AdvancedScrollerNone, {
          ref: c,
          style: b,
          className: y.scroller,
          onScroll: _,
          children: t,
        });
      }
      function F(e) {
        let { guildId: t, formState: n, updateFormState: i } = e;
        return (0, o.jsxs)("div", {
          className: y.verificationForm,
          children: [
            (0, o.jsx)(a.Heading, {
              variant: "heading-xxl/normal",
              color: "header-primary",
              children: E.intl.string(E.t.xsSj6e),
            }),
            (0, o.jsx)(a.Text, {
              variant: "text-md/normal",
              color: "header-secondary",
              children: E.intl.string(E.t["1VDDMT"]),
            }),
            (0, o.jsx)(_.Y, {
              guildId: t,
              formState: n,
              updateFormState: i,
              disableVerification: !0,
            }),
          ],
        });
      }
      t.default = function (e) {
        var t, n, _;
        let {
            clan: T,
            prioritizedGameIds: R,
            position: S,
            transitionState: B,
            onClose: k,
          } = e,
          P = (0, s.Dt)(),
          M = (0, l.e7)([u.Z], () => u.Z.get(T.id)),
          [O, A] = i.useState(
            null !== (n = null == M ? void 0 : M.formFields) && void 0 !== n
              ? n
              : [],
          ),
          [w, D] = i.useState(!1),
          [q, H] = i.useState(!1),
          [Y, Z] = i.useState(!1),
          U = (0, l.e7)([h.default], () => h.default.getCurrentUser()),
          W = (0, l.e7)(
            [b.ZP],
            () => b.ZP.isMember(T.id, null == U ? void 0 : U.id),
            [T, U],
          ),
          V = (0, l.e7)([p.Z], () => {
            var e;
            return (
              (null === (e = p.Z.getRequest(T.id)) || void 0 === e
                ? void 0
                : e.applicationStatus) === m.wB.SUBMITTED
            );
          }),
          [z, L] = i.useState(""),
          X = i.useRef(() => (0, x._v)({ guildId: T.id, position: S }));
        i.useEffect(
          () => (
            d.ZP.fetchVerificationForm(T.id),
            () => {
              X.current();
            }
          ),
          [T.id, X],
        ),
          i.useEffect(() => {
            null != M && A(M.formFields);
          }, [M]);
        let G = i.useCallback(
            (e) => {
              !w &&
                (D(!0),
                (X.current = () => !1),
                (0, x.r)({ guildId: T.id, position: S })),
                A(e);
            },
            [A, w, D, T.id, S],
          ),
          Q = i.useCallback(
            async (e) => {
              await d.ZP.submitVerificationForm(T.id, e, d.q0);
            },
            [T.id],
          ),
          K = i.useCallback(async () => {
            try {
              H(!0);
              let e = Date.now();
              await Q({ ...(null != M ? M : u.t), formFields: O });
              let t = () => {
                  Z(!0), setTimeout(k, 1300), H(!1), setTimeout(d.xo, I);
                },
                n = Date.now();
              n - e > 1e3 ? t() : setTimeout(t, 1e3 - (n - e));
            } catch (e) {
              L(null == e ? void 0 : e.message), H(!1);
            }
          }, [Q, k, M, O]),
          J = O.some((e) => !(0, f.OA)(e)),
          $ =
            (null !==
              (_ =
                null == M
                  ? void 0
                  : null === (t = M.guild) || void 0 === t
                    ? void 0
                    : t.approximate_member_count) && void 0 !== _
              ? _
              : 0) >= g.Du,
          ee = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
          et = (0, a.useSpring)(
            {
              from: {
                opacity: 0,
                transform: "translateY(".concat(ee ? 0 : 40, "px)"),
              },
              to: { opacity: 1, transform: "translateY(0px)" },
              config: N,
              delay: 500,
            },
            "animate-always",
          ),
          en = (0, a.useTransition)(Y, {
            from: { opacity: 0, scale: 0 },
            enter: { opacity: 1, scale: 1 },
            leave: { opacity: 0, scale: 0 },
            config: v,
          }),
          eo = i.useRef(null);
        return (0, o.jsxs)(a.ModalRoot, {
          transitionState: B,
          "aria-labelledby": P,
          size: a.ModalSize.DYNAMIC,
          className: y.container,
          hideShadow: !0,
          children: [
            (0, o.jsxs)(r.animated.div, {
              className: y.body,
              style: et,
              children: [
                (0, o.jsx)("div", {
                  className: y.applicationContainer,
                  ref: eo,
                  children: (0, o.jsx)(j, {
                    containerRef: eo,
                    faderSize: 180,
                    faderEdgeThreshold: 48,
                    children: (0, o.jsx)(F, {
                      guildId: T.id,
                      formState: O,
                      updateFormState: G,
                    }),
                  }),
                }),
                (0, o.jsx)("div", { className: y.verticalRule }),
                (0, o.jsxs)("div", {
                  className: y.clanContainer,
                  children: [
                    (0, o.jsx)(C.xV, {
                      clan: T,
                      className: y.profileCard,
                      prioritizedGameIds: R,
                      expanded: !0,
                      isMember: W,
                      hasPendingJoinRequest: V,
                      atMaxMemberCapacity: $,
                    }),
                    (0, o.jsxs)("div", {
                      className: y.applyButtonContainer,
                      children: [
                        (0, o.jsxs)(a.Button, {
                          type: "submit",
                          onClick: Y ? void 0 : K,
                          submitting: q,
                          fullWidth: !0,
                          disabled: J || null == M,
                          innerClassName: y.applyButtonInner,
                          children: [
                            $ &&
                              (0, o.jsx)(a.WarningIcon, {
                                size: "custom",
                                color: "white",
                                width: 20,
                                height: 20,
                              }),
                            !Y && E.intl.string(E.t["1Qm829"]),
                            en(
                              (e, t) =>
                                t &&
                                (0, o.jsx)(r.animated.div, {
                                  style: e,
                                  className: y.successCheckmark,
                                  children: (0, o.jsx)(
                                    a.CheckmarkLargeBoldIcon,
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
                          (0, o.jsx)(a.Text, {
                            variant: "text-sm/normal",
                            color: "text-danger",
                            children: z,
                          }),
                      ],
                    }),
                    $ &&
                      (0, o.jsxs)(o.Fragment, {
                        children: [
                          (0, o.jsx)(a.Text, {
                            variant: "text-xs/medium",
                            color: "text-warning",
                            className: y.maxCapacityText,
                            children: E.intl.string(E.t.GNPXdX),
                          }),
                          (0, o.jsx)("hr", { className: y.separator }),
                        ],
                      }),
                    (0, o.jsx)(a.Text, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: y.noticeText,
                      children: E.intl.string(E.t.FwXzw8),
                    }),
                    (0, o.jsx)(a.Text, {
                      variant: "text-xs/medium",
                      color: "text-muted",
                      className: y.noticeText,
                      children: E.intl.string(E.t["+fPCTU"]),
                    }),
                  ],
                }),
              ],
            }),
            (0, o.jsx)("div", {
              className: y.closeButtonContainer,
              children: (0, o.jsx)(a.Button, {
                onClick: k,
                look: a.ButtonLooks.OUTLINED,
                color: a.ButtonColors.PRIMARY,
                children: E.intl.string(E.t.cpT0Cg),
              }),
            }),
          ],
        });
      };
    },
    144114: function (e, t, n) {
      n.d(t, {
        L: function () {
          return i;
        },
      });
      var o,
        i,
        r = n(990547),
        a = n(544891),
        l = n(570140),
        c = n(314897),
        s = n(573261),
        d = n(815660),
        u = n(981631);
      ((o = i || (i = {})).USER_ACTION_REQUIRED = "user_action_required"),
        (o.USER_SETTINGS_UPDATE = "user_settings_update"),
        (o.GUILD_PHONE_REQUIRED = "guild_phone_required"),
        (o.MFA_PHONE_UPDATE = "mfa_phone_update"),
        (o.CONTACT_SYNC = "contact_sync"),
        (t.Z = {
          setCountryCode(e) {
            l.Z.dispatch({ type: "PHONE_SET_COUNTRY_CODE", countryCode: e });
          },
          removePhone: (e, t) =>
            a.tn.del({
              url: u.ANM.PHONE,
              body: { password: e, change_phone_reason: t },
              oldFormErrors: !0,
              rejectWithError: !1,
            }),
          resendCode(e) {
            let t = {},
              n = c.default.getFingerprint();
            return (
              null != n && "" !== n && (t["X-Fingerprint"] = n),
              a.tn.post({
                url: u.ANM.RESEND_PHONE,
                headers: t,
                body: { phone: e },
                rejectWithError: !1,
              })
            );
          },
          beginAddPhone: (e, t) =>
            a.tn.post({
              url: u.ANM.PHONE,
              body: { phone: e, change_phone_reason: t },
              rejectWithError: !1,
            }),
          addPhone: (e, t, n) =>
            a.tn.post({
              url: u.ANM.PHONE,
              body: { phone_token: e, password: t, change_phone_reason: n },
              oldFormErrors: !0,
              rejectWithError: !1,
            }),
          addPhoneWithoutPassword: (e) =>
            a.tn.post({
              url: u.ANM.PHONE_VERIFY_NO_PASSWORD,
              body: { code: e },
              rejectWithError: !1,
            }),
          beginReverifyPhone: (e, t) =>
            a.tn.post({
              url: u.ANM.PHONE_REVERIFY,
              body: { phone: e, change_phone_reason: t },
              rejectWithError: !1,
            }),
          reverifyPhone: (e, t, n) =>
            a.tn.post({
              url: u.ANM.PHONE_REVERIFY,
              body: { phone_token: e, password: t, change_phone_reason: n },
              oldFormErrors: !0,
              rejectWithError: !1,
            }),
          validatePhoneForSupport: (e) =>
            a.tn.post({
              url: u.ANM.VERIFY_PHONE_FOR_TICKET,
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
              i = {},
              a = c.default.getFingerprint();
            null != a && "" !== a && (i["X-Fingerprint"] = a),
              o && (i.authorization = "");
            let m = await s.Z.post({
              url: u.ANM.VERIFY_PHONE,
              headers: i,
              body: { phone: e, code: t },
              oldFormErrors: !0,
              trackedActionData: {
                event: r.NetworkActionNames.USER_VERIFY_PHONE,
              },
              rejectWithError: !1,
            });
            return n && l.Z.dispatch({ type: "MODAL_POP", key: d.M }), m.body;
          },
        });
    },
    815660: function (e, t, n) {
      n.d(t, {
        M: function () {
          return o;
        },
        z: function () {
          return i;
        },
      });
      let o = "PHONE_VERIFICATION_MODAL_KEY",
        i = 6;
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
//# sourceMappingURL=c35f8411ab8769c6f9bf.js.map
