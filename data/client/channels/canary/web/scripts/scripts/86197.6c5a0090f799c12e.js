"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["86197"],
  {
    446868(E, R, I) {
      I.d(R, { A: () => O });
      var _ = I(735438),
        i = I.n(_),
        a = I(652215),
        t = I(985018);
      let {
          CAPTCHA: F,
          EMAIL: e,
          PHONE: V,
          REVERIFY_EMAIL: n,
          REVERIFY_PHONE: r,
        } = a.Fz7,
        D = {
          [a.a3B.REQUIRE_VERIFIED_EMAIL]: [e],
          [a.a3B.REQUIRE_VERIFIED_PHONE]: [V],
          [a.a3B.REQUIRE_REVERIFIED_EMAIL]: [n],
          [a.a3B.REQUIRE_REVERIFIED_PHONE]: [r],
          [a.a3B.REQUIRE_VERIFIED_EMAIL_OR_VERIFIED_PHONE]: [e, V],
          [a.a3B.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE]: [V, n],
          [a.a3B.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [e, r],
          [a.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE]: [n, r],
          [a.a3B.REQUIRE_CAPTCHA]: [F],
          [a.a3B.AGREEMENTS]: [],
          [a.a3B.REQUIRE_SAFETY_FLOWS]: [],
        },
        O = {
          isPhoneReverification: (E, R) =>
            void 0 !== E &&
            E.isPhoneVerified() &&
            (R === a.a3B.REQUIRE_REVERIFIED_PHONE ||
              R === a.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
              R === a.a3B.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE),
          isEmailReverification: (E) =>
            E === a.a3B.REQUIRE_REVERIFIED_EMAIL ||
            E === a.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
            E === a.a3B.REQUIRE_REVERIFIED_EMAIL_OR_VERIFIED_PHONE,
          isFullScreenVerification(E) {
            return (
              E === a.a3B.REQUIRE_CAPTCHA ||
              E === a.a3B.REQUIRE_VERIFIED_EMAIL ||
              E === a.a3B.REQUIRE_VERIFIED_PHONE ||
              E === a.a3B.REQUIRE_REVERIFIED_PHONE ||
              E === a.a3B.REQUIRE_REVERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
              E === a.a3B.REQUIRE_VERIFIED_EMAIL_OR_REVERIFIED_PHONE ||
              this.isEmailReverification(E)
            );
          },
          getVerificationTypes: (E) =>
            null == E || "symbol" == typeof E ? [] : D[E],
          getButtonTitle(E) {
            switch (E) {
              case a.Fz7.EMAIL:
                return t.intl.string(t.t["1MPz27"]);
              case a.Fz7.PHONE:
                return t.intl.string(t.t.mjJeco);
              case a.Fz7.REVERIFY_EMAIL:
                return t.intl.string(t.t.nmdPFX);
              case a.Fz7.REVERIFY_PHONE:
                return t.intl.string(t.t.of2125);
              default:
                return t.intl.string(t.t["oF6+Ww"]);
            }
          },
          areVerificationTypesEqual: (E, R) => i().isEqual(E, R),
        };
    },
  },
]);
//# sourceMappingURL=86197.6c5a0090f799c12e.js.map
