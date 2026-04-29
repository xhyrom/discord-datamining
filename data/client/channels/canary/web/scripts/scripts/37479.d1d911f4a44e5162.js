"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["37479"],
  {
    557722(r, e, o) {
      o.d(e, { A: () => p, d: () => a });
      var t,
        n = o(110259),
        h = o(636537),
        E = o(228366),
        _ = o(495544),
        s = o(499785),
        d = o(53516),
        i = o(652215),
        a =
          (((t = {}).USER_ACTION_REQUIRED = "user_action_required"),
          (t.USER_SETTINGS_UPDATE = "user_settings_update"),
          (t.GUILD_PHONE_REQUIRED = "guild_phone_required"),
          (t.MFA_PHONE_UPDATE = "mfa_phone_update"),
          (t.CONTACT_SYNC = "contact_sync"),
          t);
      let p = {
        setCountryCode(r) {
          E.h.dispatch({ type: "PHONE_SET_COUNTRY_CODE", countryCode: r });
        },
        removePhone: (r, e) =>
          h.Bo.del({
            url: i.Rsh.PHONE,
            body: { password: r, change_phone_reason: e },
            oldFormErrors: !0,
            rejectWithError: !1,
          }),
        resendCode(r) {
          let e = {},
            o = _.default.getFingerprint();
          return (
            null != o && "" !== o && (e["X-Fingerprint"] = o),
            h.Bo.post({
              url: i.Rsh.RESEND_PHONE,
              headers: e,
              body: { phone: r },
              rejectWithError: !1,
            })
          );
        },
        beginAddPhone: (r, e) =>
          h.Bo.post({
            url: i.Rsh.PHONE,
            body: { phone: r, change_phone_reason: e },
            rejectWithError: !1,
          }),
        addPhone: (r, e, o) =>
          h.Bo.post({
            url: i.Rsh.PHONE,
            body: { phone_token: r, password: e, change_phone_reason: o },
            oldFormErrors: !0,
            rejectWithError: !1,
          }),
        addPhoneWithoutPassword: (r) =>
          h.Bo.post({
            url: i.Rsh.PHONE_VERIFY_NO_PASSWORD,
            body: { code: r },
            rejectWithError: !1,
          }),
        beginReverifyPhone: (r, e) =>
          h.Bo.post({
            url: i.Rsh.PHONE_REVERIFY,
            body: { phone: r, change_phone_reason: e },
            rejectWithError: !1,
          }),
        reverifyPhone: (r, e, o) =>
          h.Bo.post({
            url: i.Rsh.PHONE_REVERIFY,
            body: { phone_token: r, password: e, change_phone_reason: o },
            oldFormErrors: !0,
            rejectWithError: !1,
          }),
        validatePhoneForSupport: (r) =>
          h.Bo.post({
            url: i.Rsh.VERIFY_PHONE_FOR_TICKET,
            body: { token: r },
            oldFormErrors: !0,
            rejectWithError: !1,
          }),
        async verifyPhone(r, e) {
          let o =
              !(arguments.length > 2) ||
              void 0 === arguments[2] ||
              arguments[2],
            t = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
            h = {},
            a = _.default.getFingerprint();
          null != a && "" !== a && (h["X-Fingerprint"] = a),
            t && (h.authorization = "");
          let p = await s.A.post({
            url: i.Rsh.VERIFY_PHONE,
            headers: h,
            body: { phone: r, code: e },
            oldFormErrors: !0,
            trackedActionData: {
              event: n.NetworkActionNames.USER_VERIFY_PHONE,
            },
            rejectWithError: !1,
          });
          return o && E.h.dispatch({ type: "MODAL_POP", key: d.V }), p.body;
        },
      };
    },
  },
]);
//# sourceMappingURL=37479.d1d911f4a44e5162.js.map
