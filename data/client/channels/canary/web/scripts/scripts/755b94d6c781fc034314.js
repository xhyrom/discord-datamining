"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["63461"],
  {
    1964: function (E, e, _) {
      var n = _(392711),
        I = _.n(n),
        R = _(981631),
        o = _(689938);
      let {
          CAPTCHA: t,
          EMAIL: i,
          PHONE: r,
          REVERIFY_EMAIL: c,
          REVERIFY_PHONE: a,
        } = R.PUi,
        s = {
          [R.c2C.REQUIRE_VERIFIED_EMAIL]: [i],
          [R.c2C.REQUIRE_VERIFIED_PHONE]: [r],
          [R.c2C.REQUIRE_REVERIFIED_EMAIL]: [c],
          [R.c2C.REQUIRE_REVERIFIED_PHONE]: [a],
          [R.c2C.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [i, r],
          [R.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [r, c],
          [R.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [i, a],
          [R.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [c, a],
          [R.c2C.REQUIRE_CAPTCHA]: [t],
          [R.c2C.AGREEMENTS]: [],
        };
      e.Z = {
        isPhoneReverification: (E, e) =>
          void 0 !== E &&
          E.isPhoneVerified() &&
          (e === R.c2C.REQUIRE_REVERIFIED_PHONE ||
            e === R.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
            e === R.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
        isEmailReverification: (E) =>
          E === R.c2C.REQUIRE_REVERIFIED_EMAIL ||
          E === R.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
          E === R.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
        getVerificationTypes: (E) =>
          null == E || "symbol" == typeof E ? [] : s[E],
        getButtonTitle(E) {
          switch (E) {
            case R.PUi.EMAIL:
              return o.Z.Messages.VERIFY_BY_EMAIL;
            case R.PUi.PHONE:
              return o.Z.Messages.START_PHONE_VERIFICATION_BUTTON;
            case R.PUi.REVERIFY_EMAIL:
              return o.Z.Messages.START_EMAIL_REVERIFICATION_BUTTON;
            case R.PUi.REVERIFY_PHONE:
              return o.Z.Messages.START_PHONE_REVERIFICATION_BUTTON;
            default:
              return o.Z.Messages.START_VERIFICATION_BUTTON;
          }
        },
        areVerificationTypesEqual: (E, e) => I().isEqual(E, e),
      };
    },
    600899: function (E, e, _) {
      E.exports = {
        spacing: "spacing_a2ce87",
        card: "card_a2ce87",
        error: "error_a2ce87",
        warning: "warning_a2ce87",
      };
    },
    680924: function (E, e, _) {
      E.exports = { spacer: "spacer_b0944f", input: "input_b0944f" };
    },
    553258: function (E, e, _) {
      E.exports = {
        phoneFieldPopout: "phoneFieldPopout_ff761b",
        phoneFieldScroller: "phoneFieldScroller_ff761b",
        countryItem: "countryItem_ff761b",
        countryName: "countryName_ff761b",
        countryCode: "countryCode_ff761b",
      };
    },
    951046: function (E, e, _) {
      E.exports = {
        phoneField: "phoneField_f26de7",
        countryButton: "countryButton_f26de7",
        countryButtonInner: "countryButtonInner_f26de7",
        countryCodeContainer: "countryCodeContainer_f26de7",
        plusSign: "plusSign_f26de7",
        countryCode: "countryCode_f26de7",
        phoneFieldExpand: "phoneFieldExpand_f26de7",
        inputField: "inputField_f26de7",
        sendButton: "sendButton_f26de7",
      };
    },
    656215: function (E, e, _) {
      E.exports = {
        phoneVerificationModal: "phoneVerificationModal_fb9bea",
        animationContainer: "animationContainer_fb9bea",
        title: "title_fb9bea",
        description: "description_fb9bea",
        error: "error_fb9bea",
        field: "field_fb9bea",
      };
    },
  },
]);
//# sourceMappingURL=755b94d6c781fc034314.js.map
