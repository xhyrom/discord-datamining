"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["92886"],
  {
    1964: function (e, E, n) {
      var _ = n(392711),
        t = n.n(_),
        I = n(981631),
        R = n(689938);
      let {
          CAPTCHA: i,
          EMAIL: o,
          PHONE: r,
          REVERIFY_EMAIL: c,
          REVERIFY_PHONE: a,
        } = I.PUi,
        u = {
          [I.c2C.REQUIRE_VERIFIED_EMAIL]: [o],
          [I.c2C.REQUIRE_VERIFIED_PHONE]: [r],
          [I.c2C.REQUIRE_REVERIFIED_EMAIL]: [c],
          [I.c2C.REQUIRE_REVERIFIED_PHONE]: [a],
          [I.c2C.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [o, r],
          [I.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [r, c],
          [I.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [o, a],
          [I.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [c, a],
          [I.c2C.REQUIRE_CAPTCHA]: [i],
          [I.c2C.AGREEMENTS]: [],
        };
      E.Z = {
        isPhoneReverification: (e, E) =>
          void 0 !== e &&
          e.isPhoneVerified() &&
          (E === I.c2C.REQUIRE_REVERIFIED_PHONE ||
            E === I.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
            E === I.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
        isEmailReverification: (e) =>
          e === I.c2C.REQUIRE_REVERIFIED_EMAIL ||
          e === I.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
          e === I.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
        getVerificationTypes: (e) =>
          null == e || "symbol" == typeof e ? [] : u[e],
        getButtonTitle(e) {
          switch (e) {
            case I.PUi.EMAIL:
              return R.Z.Messages.VERIFY_BY_EMAIL;
            case I.PUi.PHONE:
              return R.Z.Messages.START_PHONE_VERIFICATION_BUTTON;
            case I.PUi.REVERIFY_EMAIL:
              return R.Z.Messages.START_EMAIL_REVERIFICATION_BUTTON;
            case I.PUi.REVERIFY_PHONE:
              return R.Z.Messages.START_PHONE_REVERIFICATION_BUTTON;
            default:
              return R.Z.Messages.START_VERIFICATION_BUTTON;
          }
        },
        areVerificationTypesEqual: (e, E) => t().isEqual(e, E),
      };
    },
    23434: function (e, E, n) {
      var _,
        t,
        I,
        R,
        i = n(442837),
        o = n(570140);
      let r = null;
      class c extends (R = i.ZP.Store) {
        hasAction() {
          return null != r;
        }
        getAction() {
          return r;
        }
      }
      function a(e) {
        r = e.requiredAction;
      }
      (I = "UserRequiredActionStore"),
        (t = "displayName") in (_ = c)
          ? Object.defineProperty(_, t, {
              value: I,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (_[t] = I),
        (E.Z = new c(o.Z, {
          CONNECTION_OPEN: a,
          USER_REQUIRED_ACTION_UPDATE: a,
        }));
    },
    600899: function (e, E, n) {
      e.exports = {
        spacing: "spacing_a2ce87",
        card: "card_a2ce87",
        error: "error_a2ce87",
        warning: "warning_a2ce87",
      };
    },
    680924: function (e, E, n) {
      e.exports = { spacer: "spacer_b0944f", input: "input_b0944f" };
    },
    553258: function (e, E, n) {
      e.exports = {
        phoneFieldPopout: "phoneFieldPopout_ff761b",
        phoneFieldScroller: "phoneFieldScroller_ff761b",
        countryItem: "countryItem_ff761b",
        countryName: "countryName_ff761b",
        countryCode: "countryCode_ff761b",
      };
    },
    951046: function (e, E, n) {
      e.exports = {
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
    656215: function (e, E, n) {
      e.exports = {
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
//# sourceMappingURL=7b60b3ad2a1e0a6ef534.js.map
