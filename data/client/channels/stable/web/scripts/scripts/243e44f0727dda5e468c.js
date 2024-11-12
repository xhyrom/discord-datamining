"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["63461"],
  {
    1964: function (E, e, n) {
      var t = n(392711),
        i = n.n(t),
        o = n(981631),
        _ = n(388032);
      let {
          CAPTCHA: R,
          EMAIL: I,
          PHONE: r,
          REVERIFY_EMAIL: c,
          REVERIFY_PHONE: a,
        } = o.PUi,
        u = {
          [o.c2C.REQUIRE_VERIFIED_EMAIL]: [I],
          [o.c2C.REQUIRE_VERIFIED_PHONE]: [r],
          [o.c2C.REQUIRE_REVERIFIED_EMAIL]: [c],
          [o.c2C.REQUIRE_REVERIFIED_PHONE]: [a],
          [o.c2C.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [I, r],
          [o.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [r, c],
          [o.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [I, a],
          [o.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [c, a],
          [o.c2C.REQUIRE_CAPTCHA]: [R],
          [o.c2C.AGREEMENTS]: [],
        };
      e.Z = {
        isPhoneReverification: (E, e) =>
          void 0 !== E &&
          E.isPhoneVerified() &&
          (e === o.c2C.REQUIRE_REVERIFIED_PHONE ||
            e === o.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
            e === o.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
        isEmailReverification: (E) =>
          E === o.c2C.REQUIRE_REVERIFIED_EMAIL ||
          E === o.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
          E === o.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
        getVerificationTypes: (E) =>
          null == E || "symbol" == typeof E ? [] : u[E],
        getButtonTitle(E) {
          switch (E) {
            case o.PUi.EMAIL:
              return _.intl.string(_.t["1MPz29"]);
            case o.PUi.PHONE:
              return _.intl.string(_.t.mjJecn);
            case o.PUi.REVERIFY_EMAIL:
              return _.intl.string(_.t.nmdPFR);
            case o.PUi.REVERIFY_PHONE:
              return _.intl.string(_.t.of2129);
            default:
              return _.intl.string(_.t["oF6+W1"]);
          }
        },
        areVerificationTypesEqual: (E, e) => i().isEqual(E, e),
      };
    },
    600899: function (E, e, n) {
      E.exports = {
        spacing: "spacing_a2ce87",
        card: "card_a2ce87",
        error: "error_a2ce87",
        warning: "warning_a2ce87",
      };
    },
    680924: function (E, e, n) {
      E.exports = { spacer: "spacer_b0944f", input: "input_b0944f" };
    },
    553258: function (E, e, n) {
      E.exports = {
        phoneFieldPopout: "phoneFieldPopout_ff761b",
        phoneFieldScroller: "phoneFieldScroller_ff761b",
        countryItem: "countryItem_ff761b",
        countryName: "countryName_ff761b",
        countryCode: "countryCode_ff761b",
      };
    },
    951046: function (E, e, n) {
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
    656215: function (E, e, n) {
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
//# sourceMappingURL=243e44f0727dda5e468c.js.map
