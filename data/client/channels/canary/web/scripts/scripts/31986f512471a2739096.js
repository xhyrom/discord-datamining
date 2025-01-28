"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["56835"],
  {
    129512: function (e) {
      e.exports = "/assets/04f1e61a6726a54518ee.svg";
    },
    330065: function (e) {
      e.exports = "/assets/4c698a6babb08607f4af.svg";
    },
    852860: function (e, n, t) {
      t(47120);
      var r = t(200651),
        o = t(192379),
        i = t(481060),
        a = t(585483),
        s = t(981631),
        l = t(388032),
        d = t(840814);
      n.Z = function (e) {
        var n;
        let {
            message: t,
            errorMessage: c,
            submitting: u,
            onReset: m,
            onSave: _,
            onSaveText: b,
            onResetText: h,
            onSaveButtonColor: p,
            disabled: f,
            saveButtonTooltip: x,
          } = e,
          g = o.useRef(null),
          [C, E] = o.useState(!1);
        return (
          o.useEffect(() => {
            function e() {
              E(!0), setTimeout(() => E(!1), 1e3);
            }
            return (
              a.S.subscribe(s.CkL.EMPHASIZE_NOTICE, e),
              () => {
                a.S.unsubscribe(s.CkL.EMPHASIZE_NOTICE, e);
              }
            );
          }, []),
          (0, r.jsx)("div", {
            className: d.container,
            "data-emphasized": C,
            children: (0, r.jsx)("div", {
              className: d.flexContainer,
              ref: g,
              children: (0, r.jsxs)(i.FocusRingScope, {
                containerRef: g,
                children: [
                  (0, r.jsx)("div", {
                    className: d.shrinkingContainer,
                    children: (0, r.jsx)("div", {
                      className: d.message,
                      children:
                        null !== (n = null != c ? c : t) && void 0 !== n
                          ? n
                          : l.intl.string(l.t.GP7JLC),
                    }),
                  }),
                  (0, r.jsxs)("div", {
                    className: d.actions,
                    children: [
                      null != m &&
                        (0, r.jsx)(i.Button, {
                          className: d.resetButton,
                          size: i.Button.Sizes.SMALL,
                          color: i.Button.Colors.PRIMARY,
                          look: i.Button.Looks.LINK,
                          onClick: m,
                          children: (0, r.jsx)("span", {
                            children: null != h ? h : l.intl.string(l.t.yBZMsb),
                          }),
                        }),
                      null != _
                        ? (0, r.jsx)(i.Tooltip, {
                            text: x,
                            children: (e) =>
                              (0, r.jsx)(i.Button, {
                                size: i.Button.Sizes.SMALL,
                                color: null != p ? p : i.Button.Colors.GREEN,
                                submitting: u,
                                disabled: f,
                                onClick: _,
                                ...e,
                                children:
                                  null != b ? b : l.intl.string(l.t.K344S0),
                              }),
                          })
                        : null,
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      };
    },
    309135: function (e, n, t) {
      t.r(n);
      var r = t(200651),
        o = t(192379),
        i = t(442837),
        a = t(215569),
        s = t(481060),
        l = t(852860),
        d = t(313201),
        c = t(944163),
        u = t(266395),
        m = t(577809),
        _ = t(592286),
        b = t(388032),
        h = t(145638);
      let p = () =>
        (0, r.jsx)(l.Z, {
          submitting: !1,
          message: b.intl.string(b.t["8g514e"]),
          onReset: () => {
            (0, u.PE)(!1);
          },
          onResetText: b.intl.string(b.t["ETE/oK"]),
          onSave: () => {
            (0, u.PE)(!1), (0, s.closeModal)(_.Pn);
          },
          onSaveText: b.intl.string(b.t["Xt+UaW"]),
          onSaveButtonColor: s.ButtonColors.RED,
        });
      n.default = (e) => {
        let {
            transitionState: n,
            guildId: t,
            onClose: l,
            onComplete: _,
            isPreview: b = !1,
          } = e,
          f = (0, u.rb)((e) => e.shouldShowWarning),
          x = (0, i.e7)([c.Z], () => c.Z.get(t)),
          g = (0, d.Dt)();
        return (o.useEffect(() => {
          x === c.t && l();
        }, [l, x]),
        x === c.t)
          ? null
          : (0, r.jsxs)(r.Fragment, {
              children: [
                (0, r.jsxs)(s.ModalRoot, {
                  transitionState: n,
                  "aria-labelledby": g,
                  size: s.ModalSize.DYNAMIC,
                  className: h.container,
                  hideShadow: !0,
                  children: [
                    (0, r.jsx)(s.ModalCloseButton, {
                      onClick: () => l(!1),
                      className: h.closeButton,
                    }),
                    (0, r.jsx)(m.Z, {
                      headerId: g,
                      guildId: t,
                      onClose: l,
                      onComplete: _,
                      isPreview: b,
                    }),
                  ],
                }),
                (0, r.jsx)(a.W, {
                  children:
                    !0 === f &&
                    (0, r.jsx)(s.SlideIn, {
                      className: h.notice,
                      children: (0, r.jsx)(p, {}),
                    }),
                }),
              ],
            });
      };
    },
    166184: function (e, n, t) {
      t(47120);
      var r = t(200651),
        o = t(192379),
        i = t(120356),
        a = t.n(i),
        s = t(780384),
        l = t(481060),
        d = t(410030),
        c = t(686546),
        u = t(372769),
        m = t(134432),
        _ = t(768581),
        b = t(624138),
        h = t(388032),
        p = t(965624),
        f = t(129512),
        x = t(330065);
      let g = [16, 16, 14, 14, 12, 10, 8];
      n.Z = function (e) {
        var n, t;
        let {
            guild: i,
            disabled: C,
            small: E,
            loading: N = !1,
            description: v,
            memberCount: I,
            presenceCount: j,
            className: S,
          } = e,
          P = (0, d.ZP)(),
          [R, y] = o.useState(!1);
        if (null == i || N)
          return (0, r.jsx)("div", {
            className: a()(S, p.card, p.cardPlaceholder, {
              [p.cardSmall]: E,
              [p.cardDisabled]: C,
            }),
          });
        let { name: T } = i,
          F =
            null != i.discoverySplash && /^data:/.test(i.discoverySplash)
              ? i.discoverySplash
              : _.ZP.getGuildDiscoverySplashURL({
                  id: i.id,
                  splash: i.discoverySplash,
                  size: 240 * (0, m.x_)(),
                }),
          B = (0, s.wj)(P) ? f : x,
          k =
            null !==
              (n = _.ZP.getGuildIconURL({
                id: i.id,
                icon: i.icon,
                size: 40,
              })) && void 0 !== n
              ? n
              : void 0,
          q = null != i.description ? i.description : v,
          O = null != I ? I : null == i ? void 0 : i.memberCount,
          M = null != j ? j : null == i ? void 0 : i.presenceCount,
          A = null;
        if (null != k)
          A = (0, r.jsx)("img", { src: k, alt: "", className: p.avatar });
        else {
          let e = (0, b.Zg)(i.name);
          A = (0, r.jsx)("div", {
            className: p.defaultIcon,
            children: (0, r.jsx)(l.Text, {
              className: p.acronym,
              style: {
                fontSize:
                  null !== (t = g[e.length]) && void 0 !== t
                    ? t
                    : g[g.length - 1],
              },
              variant: "text-sm/normal",
              children: e,
            }),
          });
        }
        return (0, r.jsxs)("div", {
          className: a()(S, p.card, {
            [p.cardSmall]: E,
            [p.cardDisabled]: C,
            [p.splashLoaded]: R,
          }),
          children: [
            (0, r.jsxs)("div", {
              className: p.cardHeader,
              children: [
                (0, r.jsx)("div", {
                  className: p.splash,
                  children: (0, r.jsx)("img", {
                    src: null != F ? F : B,
                    alt: "",
                    className: p.splashImage,
                    onLoad: () => y(!0),
                  }),
                }),
                (0, r.jsx)("div", {
                  className: p.guildIcon,
                  children: (0, r.jsx)(c.ZP, {
                    mask: c.ZP.Masks.SQUIRCLE,
                    width: 48,
                    height: 48,
                    children: (0, r.jsx)("div", {
                      className: p.iconMask,
                      children: (0, r.jsx)(c.ZP, {
                        mask: c.ZP.Masks.SQUIRCLE,
                        width: 40,
                        height: 40,
                        children: null != A ? A : null,
                      }),
                    }),
                  }),
                }),
              ],
            }),
            (0, r.jsxs)("div", {
              className: p.guildInfo,
              children: [
                (0, r.jsxs)("div", {
                  className: p.title,
                  children: [
                    (0, r.jsx)(u.Z, {
                      className: p.verifiedIcon,
                      guild: i,
                      tooltipColor: l.Tooltip.Colors.PRIMARY,
                    }),
                    (0, r.jsx)(l.Text, {
                      className: p.guildName,
                      variant: "text-md/normal",
                      children: (0, r.jsx)("span", { children: T }),
                    }),
                  ],
                }),
                (0, r.jsx)(l.Text, {
                  className: p.description,
                  variant: "text-sm/normal",
                  children: (0, r.jsx)("span", { children: q }),
                }),
                (0, r.jsxs)("div", {
                  className: p.memberInfo,
                  children: [
                    null != M &&
                      (0, r.jsxs)("div", {
                        className: p.memberCount,
                        children: [
                          (0, r.jsx)("div", { className: p.dotOnline }),
                          (0, r.jsx)(l.Text, {
                            variant: "text-xs/normal",
                            children: E
                              ? h.intl.formatToPlainString(h.t.YMor7u, {
                                  count: M,
                                })
                              : h.intl.formatToPlainString(h.t["LC+S+v"], {
                                  membersOnline: M,
                                }),
                          }),
                        ],
                      }),
                    null != O &&
                      (0, r.jsxs)("div", {
                        className: p.memberCount,
                        children: [
                          (0, r.jsx)("div", { className: p.dotOffline }),
                          (0, r.jsx)(l.Text, {
                            variant: "text-xs/normal",
                            children: E
                              ? h.intl.formatToPlainString(h.t.YMor7u, {
                                  count: O,
                                })
                              : h.intl.formatToPlainString(h.t.zRl6XV, {
                                  count: O,
                                }),
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    144114: function (e, n, t) {
      t.d(n, {
        L: function () {
          return o;
        },
      });
      var r,
        o,
        i = t(990547),
        a = t(544891),
        s = t(570140),
        l = t(314897),
        d = t(573261),
        c = t(815660),
        u = t(981631);
      ((r = o || (o = {})).USER_ACTION_REQUIRED = "user_action_required"),
        (r.USER_SETTINGS_UPDATE = "user_settings_update"),
        (r.GUILD_PHONE_REQUIRED = "guild_phone_required"),
        (r.MFA_PHONE_UPDATE = "mfa_phone_update"),
        (r.CONTACT_SYNC = "contact_sync"),
        (n.Z = {
          setCountryCode(e) {
            s.Z.dispatch({ type: "PHONE_SET_COUNTRY_CODE", countryCode: e });
          },
          removePhone: (e, n) =>
            a.tn.del({
              url: u.ANM.PHONE,
              body: { password: e, change_phone_reason: n },
              oldFormErrors: !0,
              rejectWithError: !1,
            }),
          resendCode(e) {
            let n = {},
              t = l.default.getFingerprint();
            return (
              null != t && "" !== t && (n["X-Fingerprint"] = t),
              a.tn.post({
                url: u.ANM.RESEND_PHONE,
                headers: n,
                body: { phone: e },
                rejectWithError: !1,
              })
            );
          },
          beginAddPhone: (e, n) =>
            a.tn.post({
              url: u.ANM.PHONE,
              body: { phone: e, change_phone_reason: n },
              rejectWithError: !1,
            }),
          addPhone: (e, n, t) =>
            a.tn.post({
              url: u.ANM.PHONE,
              body: { phone_token: e, password: n, change_phone_reason: t },
              oldFormErrors: !0,
              rejectWithError: !1,
            }),
          addPhoneWithoutPassword: (e) =>
            a.tn.post({
              url: u.ANM.PHONE_VERIFY_NO_PASSWORD,
              body: { code: e },
              rejectWithError: !1,
            }),
          beginReverifyPhone: (e, n) =>
            a.tn.post({
              url: u.ANM.PHONE_REVERIFY,
              body: { phone: e, change_phone_reason: n },
              rejectWithError: !1,
            }),
          reverifyPhone: (e, n, t) =>
            a.tn.post({
              url: u.ANM.PHONE_REVERIFY,
              body: { phone_token: e, password: n, change_phone_reason: t },
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
          async verifyPhone(e, n) {
            let t =
                !(arguments.length > 2) ||
                void 0 === arguments[2] ||
                arguments[2],
              r =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              o = {},
              a = l.default.getFingerprint();
            null != a && "" !== a && (o["X-Fingerprint"] = a),
              r && (o.authorization = "");
            let m = await d.Z.post({
              url: u.ANM.VERIFY_PHONE,
              headers: o,
              body: { phone: e, code: n },
              oldFormErrors: !0,
              trackedActionData: {
                event: i.NetworkActionNames.USER_VERIFY_PHONE,
              },
              rejectWithError: !1,
            });
            return t && s.Z.dispatch({ type: "MODAL_POP", key: c.M }), m.body;
          },
        });
    },
    815660: function (e, n, t) {
      t.d(n, {
        M: function () {
          return r;
        },
        z: function () {
          return o;
        },
      });
      let r = "PHONE_VERIFICATION_MODAL_KEY",
        o = 6;
    },
    840814: function (e, n, t) {
      e.exports = {
        container: "container_b6cd66",
        flexContainer: "flexContainer_b6cd66",
        shrinkingContainer: "shrinkingContainer_b6cd66",
        actions: "actions_b6cd66",
        resetButton: "resetButton_b6cd66",
        message: "message_b6cd66",
      };
    },
    933078: function (e, n, t) {
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
    119866: function (e, n, t) {
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
    130948: function (e, n, t) {
      e.exports = {
        questionContainer: "questionContainer_cc56a8",
        disabledQuestionContainer: "disabledQuestionContainer_cc56a8",
        questionTitle: "questionTitle_cc56a8",
        requirementContainer: "requirementContainer_cc56a8",
        requirementIcon: "requirementIcon_cc56a8",
        requirementText: "requirementText_cc56a8",
        requirementSuccess: "requirementSuccess_cc56a8",
        requirementFailure: "requirementFailure_cc56a8",
        footnote: "footnote_cc56a8",
      };
    },
    484979: function (e, n, t) {
      e.exports = {
        termsRow: "termsRow_fb1388",
        termsRowContent: "termsRowContent_fb1388",
        checkbox: "checkbox_fb1388",
        verifyConfirmText: "verifyConfirmText_fb1388",
        disabledFieldBackground: "disabledFieldBackground_fb1388",
        termsFieldBody: "termsFieldBody_fb1388",
        paragraphFieldBody: "paragraphFieldBody_fb1388",
        multipleChoiceIcon: "multipleChoiceIcon_fb1388",
        editableRequirementContainer: "editableRequirementContainer_fb1388",
      };
    },
    145638: function (e, n, t) {
      e.exports = {
        container: "container_ad47cc",
        guildSidebar: "guildSidebar_ad47cc",
        sidebarCard: "sidebarCard_ad47cc",
        modal: "modal_ad47cc",
        sequencer: "sequencer_ad47cc",
        modalContent: "modalContent_ad47cc",
        content: "content_ad47cc",
        closeButton: "closeButton_ad47cc",
        applicationIconContainer: "applicationIconContainer_ad47cc",
        applicationIcon: "applicationIcon_ad47cc",
        header: "header_ad47cc",
        footer: "footer_ad47cc",
        divider: "divider_ad47cc",
        submitButton: "submitButton_ad47cc",
        formItem: "formItem_ad47cc",
        resendButton: "resendButton_ad47cc",
        notice: "notice_ad47cc",
        disclaimerFooter: "disclaimerFooter_ad47cc",
        guildProfile: "guildProfile_ad47cc",
      };
    },
    965624: function (e, n, t) {
      e.exports = {
        card: "card_e73adb",
        iconMask: "iconMask_e73adb",
        cardPlaceholder: "cardPlaceholder_e73adb",
        cardHeader: "cardHeader_e73adb",
        splash: "splash_e73adb",
        splashImage: "splashImage_e73adb",
        splashLoaded: "splashLoaded_e73adb",
        guildIcon: "guildIcon_e73adb",
        defaultIcon: "defaultIcon_e73adb",
        acronym: "acronym_e73adb",
        avatar: "avatar_e73adb",
        guildInfo: "guildInfo_e73adb",
        title: "title_e73adb",
        verifiedIcon: "verifiedIcon_e73adb",
        guildName: "guildName_e73adb",
        description: "description_e73adb",
        memberInfo: "memberInfo_e73adb",
        memberCount: "memberCount_e73adb",
        dotOnline: "dotOnline_e73adb memberDot_e73adb",
        dotOffline: "dotOffline_e73adb memberDot_e73adb",
        cardDisabled: "cardDisabled_e73adb",
        cardSmall: "cardSmall_e73adb",
      };
    },
  },
]);
//# sourceMappingURL=31986f512471a2739096.js.map
