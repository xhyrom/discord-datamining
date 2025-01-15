"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["22818"],
  {
    129512: function (e) {
      e.exports = "/assets/04f1e61a6726a54518ee.svg";
    },
    330065: function (e) {
      e.exports = "/assets/4c698a6babb08607f4af.svg";
    },
    852860: function (e, n, t) {
      t(47120);
      var o = t(200651),
        r = t(192379),
        i = t(476183),
        a = t(692547),
        s = t(481060),
        l = t(585483),
        d = t(981631),
        c = t(388032),
        u = t(565232);
      n.Z = function (e) {
        var n;
        let {
            message: t,
            errorMessage: m,
            submitting: _,
            onReset: h,
            onSave: b,
            onSaveText: p,
            onResetText: f,
            onSaveButtonColor: x,
            disabled: g,
            saveButtonTooltip: C,
          } = e,
          E = r.useRef(null),
          [{ spring: N }, v] = (0, s.useSpring)(() => ({ spring: 0 }));
        r.useEffect(() => {
          function e() {
            v({ spring: 1, config: i.config.gentle }),
              v({ spring: 0, config: i.config.gentle, delay: 1e3 });
          }
          return (
            l.S.subscribe(d.CkL.EMPHASIZE_NOTICE, e),
            () => {
              l.S.unsubscribe(d.CkL.EMPHASIZE_NOTICE, e);
            }
          );
        }, [v]);
        let I = N.to({
            range: [0, 1],
            output: [
              (0, s.useToken)(a.Z.colors.TEXT_NORMAL).hex(),
              (0, s.useToken)(a.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          }),
          S = N.to({
            range: [0, 1],
            output: [
              (0, s.useToken)(a.Z.colors.BACKGROUND_FLOATING).hex(),
              (0, s.useToken)(a.Z.colors.STATUS_DANGER).hex(),
            ],
          }),
          T = N.to({
            range: [0, 1],
            output: [
              (0, s.useToken)(a.Z.colors.TEXT_DANGER).hex(),
              (0, s.useToken)(a.Z.unsafe_rawColors.WHITE_500).hex(),
            ],
          });
        return (0, o.jsx)(i.animated.div, {
          className: u.container,
          style: { backgroundColor: S },
          children: (0, o.jsx)("div", {
            className: u.flexContainer,
            ref: E,
            children: (0, o.jsxs)(s.FocusRingScope, {
              containerRef: E,
              children: [
                (0, o.jsx)("div", {
                  className: u.shrinkingContainer,
                  children: (0, o.jsx)(i.animated.div, {
                    className: u.message,
                    style: { color: null != m ? T : I },
                    children:
                      null !== (n = null != m ? m : t) && void 0 !== n
                        ? n
                        : c.intl.string(c.t.GP7JLC),
                  }),
                }),
                (0, o.jsxs)("div", {
                  className: u.actions,
                  children: [
                    null != h &&
                      (0, o.jsx)(s.Button, {
                        className: u.resetButton,
                        size: s.Button.Sizes.SMALL,
                        color: s.Button.Colors.PRIMARY,
                        look: s.Button.Looks.LINK,
                        onClick: h,
                        children: (0, o.jsx)(i.animated.span, {
                          style: { color: I },
                          children: null != f ? f : c.intl.string(c.t.yBZMsb),
                        }),
                      }),
                    null != b
                      ? (0, o.jsx)(s.Tooltip, {
                          text: C,
                          children: (e) =>
                            (0, o.jsx)(s.Button, {
                              size: s.Button.Sizes.SMALL,
                              color: null != x ? x : s.Button.Colors.GREEN,
                              submitting: _,
                              disabled: g,
                              onClick: b,
                              ...e,
                              children:
                                null != p ? p : c.intl.string(c.t.K344S0),
                            }),
                        })
                      : null,
                  ],
                }),
              ],
            }),
          }),
        });
      };
    },
    309135: function (e, n, t) {
      t.r(n);
      var o = t(200651),
        r = t(192379),
        i = t(442837),
        a = t(215569),
        s = t(481060),
        l = t(852860),
        d = t(313201),
        c = t(944163),
        u = t(266395),
        m = t(577809),
        _ = t(592286),
        h = t(388032),
        b = t(10178);
      let p = () =>
        (0, o.jsx)(l.Z, {
          submitting: !1,
          message: h.intl.string(h.t["8g514e"]),
          onReset: () => {
            (0, u.PE)(!1);
          },
          onResetText: h.intl.string(h.t["ETE/oK"]),
          onSave: () => {
            (0, u.PE)(!1), (0, s.closeModal)(_.Pn);
          },
          onSaveText: h.intl.string(h.t["Xt+UaW"]),
          onSaveButtonColor: s.ButtonColors.RED,
        });
      n.default = (e) => {
        let {
            transitionState: n,
            guildId: t,
            onClose: l,
            onComplete: _,
            isPreview: h = !1,
          } = e,
          f = (0, u.rb)((e) => e.shouldShowWarning),
          x = (0, i.e7)([c.Z], () => c.Z.get(t)),
          g = (0, d.Dt)();
        return (r.useEffect(() => {
          x === c.t && l();
        }, [l, x]),
        x === c.t)
          ? null
          : (0, o.jsxs)(o.Fragment, {
              children: [
                (0, o.jsxs)(s.ModalRoot, {
                  transitionState: n,
                  "aria-labelledby": g,
                  size: s.ModalSize.DYNAMIC,
                  className: b.container,
                  hideShadow: !0,
                  children: [
                    (0, o.jsx)(s.ModalCloseButton, {
                      onClick: () => l(!1),
                      className: b.closeButton,
                    }),
                    (0, o.jsx)(m.Z, {
                      headerId: g,
                      guildId: t,
                      onClose: l,
                      onComplete: _,
                      isPreview: h,
                    }),
                  ],
                }),
                (0, o.jsx)(a.W, {
                  children:
                    !0 === f &&
                    (0, o.jsx)(s.SlideIn, {
                      className: b.notice,
                      children: (0, o.jsx)(p, {}),
                    }),
                }),
              ],
            });
      };
    },
    166184: function (e, n, t) {
      t(47120);
      var o = t(200651),
        r = t(192379),
        i = t(120356),
        a = t.n(i),
        s = t(780384),
        l = t(481060),
        d = t(410030),
        c = t(686546),
        u = t(372769),
        m = t(134432),
        _ = t(768581),
        h = t(624138),
        b = t(388032),
        p = t(834044),
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
            presenceCount: S,
            className: T,
          } = e,
          j = (0, d.ZP)(),
          [P, R] = r.useState(!1);
        if (null == i || N)
          return (0, o.jsx)("div", {
            className: a()(T, p.card, p.cardPlaceholder, {
              [p.cardSmall]: E,
              [p.cardDisabled]: C,
            }),
          });
        let { name: y } = i,
          k =
            null != i.discoverySplash && /^data:/.test(i.discoverySplash)
              ? i.discoverySplash
              : _.ZP.getGuildDiscoverySplashURL({
                  id: i.id,
                  splash: i.discoverySplash,
                  size: 240 * (0, m.x_)(),
                }),
          F = (0, s.wj)(j) ? f : x,
          O =
            null !==
              (n = _.ZP.getGuildIconURL({
                id: i.id,
                icon: i.icon,
                size: 40,
              })) && void 0 !== n
              ? n
              : void 0,
          B = null != i.description ? i.description : v,
          A = null != I ? I : null == i ? void 0 : i.memberCount,
          M = null != S ? S : null == i ? void 0 : i.presenceCount,
          q = null;
        if (null != O)
          q = (0, o.jsx)("img", { src: O, alt: "", className: p.avatar });
        else {
          let e = (0, h.Zg)(i.name);
          q = (0, o.jsx)("div", {
            className: p.defaultIcon,
            children: (0, o.jsx)(l.Text, {
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
        return (0, o.jsxs)("div", {
          className: a()(T, p.card, {
            [p.cardSmall]: E,
            [p.cardDisabled]: C,
            [p.splashLoaded]: P,
          }),
          children: [
            (0, o.jsxs)("div", {
              className: p.cardHeader,
              children: [
                (0, o.jsx)("div", {
                  className: p.splash,
                  children: (0, o.jsx)("img", {
                    src: null != k ? k : F,
                    alt: "",
                    className: p.splashImage,
                    onLoad: () => R(!0),
                  }),
                }),
                (0, o.jsx)("div", {
                  className: p.guildIcon,
                  children: (0, o.jsx)(c.ZP, {
                    mask: c.ZP.Masks.SQUIRCLE,
                    width: 48,
                    height: 48,
                    children: (0, o.jsx)("div", {
                      className: p.iconMask,
                      children: (0, o.jsx)(c.ZP, {
                        mask: c.ZP.Masks.SQUIRCLE,
                        width: 40,
                        height: 40,
                        children: null != q ? q : null,
                      }),
                    }),
                  }),
                }),
              ],
            }),
            (0, o.jsxs)("div", {
              className: p.guildInfo,
              children: [
                (0, o.jsxs)("div", {
                  className: p.title,
                  children: [
                    (0, o.jsx)(u.Z, {
                      className: p.verifiedIcon,
                      guild: i,
                      tooltipColor: l.Tooltip.Colors.PRIMARY,
                    }),
                    (0, o.jsx)(l.Text, {
                      className: p.guildName,
                      variant: "text-md/normal",
                      children: (0, o.jsx)("span", { children: y }),
                    }),
                  ],
                }),
                (0, o.jsx)(l.Text, {
                  className: p.description,
                  variant: "text-sm/normal",
                  children: (0, o.jsx)("span", { children: B }),
                }),
                (0, o.jsxs)("div", {
                  className: p.memberInfo,
                  children: [
                    null != M &&
                      (0, o.jsxs)("div", {
                        className: p.memberCount,
                        children: [
                          (0, o.jsx)("div", { className: p.dotOnline }),
                          (0, o.jsx)(l.Text, {
                            variant: "text-xs/normal",
                            children: E
                              ? b.intl.formatToPlainString(b.t.YMor7u, {
                                  count: M,
                                })
                              : b.intl.formatToPlainString(b.t["LC+S+v"], {
                                  membersOnline: M,
                                }),
                          }),
                        ],
                      }),
                    null != A &&
                      (0, o.jsxs)("div", {
                        className: p.memberCount,
                        children: [
                          (0, o.jsx)("div", { className: p.dotOffline }),
                          (0, o.jsx)(l.Text, {
                            variant: "text-xs/normal",
                            children: E
                              ? b.intl.formatToPlainString(b.t.YMor7u, {
                                  count: A,
                                })
                              : b.intl.formatToPlainString(b.t.zRl6XV, {
                                  count: A,
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
          return r;
        },
      });
      var o,
        r,
        i = t(990547),
        a = t(544891),
        s = t(570140),
        l = t(314897),
        d = t(573261),
        c = t(815660),
        u = t(981631);
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
              o =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              r = {},
              a = l.default.getFingerprint();
            null != a && "" !== a && (r["X-Fingerprint"] = a),
              o && (r.authorization = "");
            let m = await d.Z.post({
              url: u.ANM.VERIFY_PHONE,
              headers: r,
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
          return o;
        },
        z: function () {
          return r;
        },
      });
      let o = "PHONE_VERIFICATION_MODAL_KEY",
        r = 6;
    },
    565232: function (e, n, t) {
      e.exports = {
        container: "container_b6cd66",
        flexContainer: "flexContainer_b6cd66",
        shrinkingContainer: "shrinkingContainer_b6cd66",
        actions: "actions_b6cd66",
        resetButton: "resetButton_b6cd66",
        message: "message_b6cd66",
      };
    },
    295691: function (e, n, t) {
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
    376150: function (e, n, t) {
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
    655640: function (e, n, t) {
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
    182227: function (e, n, t) {
      e.exports = {
        termsRow: "termsRow_fb1388",
        termsRowContent: "termsRowContent_fb1388",
        checkbox: "checkbox_fb1388",
        verifyConfirmText: "verifyConfirmText_fb1388",
        disabledFieldBackground: "disabledFieldBackground_fb1388",
        termsFieldBody: "termsFieldBody_fb1388",
        paragraphFieldBody: "paragraphFieldBody_fb1388",
        multipleChoiceIcon: "multipleChoiceIcon_fb1388",
      };
    },
    10178: function (e, n, t) {
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
    834044: function (e, n, t) {
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
//# sourceMappingURL=f3ce7a82cfb805cb2ae5.js.map
