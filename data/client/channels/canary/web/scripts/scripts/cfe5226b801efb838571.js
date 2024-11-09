"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["92886"],
  {
    1964: function (e, E, n) {
      var t = n(392711),
        i = n.n(t),
        o = n(981631),
        r = n(388032);
      let {
          CAPTCHA: _,
          EMAIL: R,
          PHONE: I,
          REVERIFY_EMAIL: c,
          REVERIFY_PHONE: a,
        } = o.PUi,
        u = {
          [o.c2C.REQUIRE_VERIFIED_EMAIL]: [R],
          [o.c2C.REQUIRE_VERIFIED_PHONE]: [I],
          [o.c2C.REQUIRE_REVERIFIED_EMAIL]: [c],
          [o.c2C.REQUIRE_REVERIFIED_PHONE]: [a],
          [o.c2C.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [R, I],
          [o.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [I, c],
          [o.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [R, a],
          [o.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [c, a],
          [o.c2C.REQUIRE_CAPTCHA]: [_],
          [o.c2C.AGREEMENTS]: [],
        };
      E.Z = {
        isPhoneReverification: (e, E) =>
          void 0 !== e &&
          e.isPhoneVerified() &&
          (E === o.c2C.REQUIRE_REVERIFIED_PHONE ||
            E === o.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
            E === o.c2C.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
        isEmailReverification: (e) =>
          e === o.c2C.REQUIRE_REVERIFIED_EMAIL ||
          e === o.c2C.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
          e === o.c2C.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
        getVerificationTypes: (e) =>
          null == e || "symbol" == typeof e ? [] : u[e],
        getButtonTitle(e) {
          switch (e) {
            case o.PUi.EMAIL:
              return r.intl.string(r.t["1MPz29"]);
            case o.PUi.PHONE:
              return r.intl.string(r.t.mjJecn);
            case o.PUi.REVERIFY_EMAIL:
              return r.intl.string(r.t.nmdPFR);
            case o.PUi.REVERIFY_PHONE:
              return r.intl.string(r.t.of2129);
            default:
              return r.intl.string(r.t["oF6+W1"]);
          }
        },
        areVerificationTypesEqual: (e, E) => i().isEqual(e, E),
      };
    },
    23434: function (e, E, n) {
      var t,
        i,
        o,
        r,
        _ = n(442837),
        R = n(570140);
      let I = null;
      class c extends (r = _.ZP.Store) {
        hasAction() {
          return null != I;
        }
        getAction() {
          return I;
        }
      }
      function a(e) {
        I = e.requiredAction;
      }
      (o = "UserRequiredActionStore"),
        (i = "displayName") in (t = c)
          ? Object.defineProperty(t, i, {
              value: o,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[i] = o),
        (E.Z = new c(R.Z, {
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
//# sourceMappingURL=cfe5226b801efb838571.js.map
