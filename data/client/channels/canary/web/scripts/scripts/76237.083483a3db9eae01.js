"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["76237"],
  {
    670492(e, t, n) {
      n.d(t, { A: () => a });
      var _ = n(735438),
        o = n.n(_),
        c = n(247775),
        i = n(17928),
        r = n(228366);
      let E = !1,
        S = [],
        u = "",
        s = !1,
        A = { viewNonce: "", regenerateNonce: "" };
      class C extends i.Ay.Store {
        static displayName = "MFAStore";
        getVerificationKey() {
          return u;
        }
        getBackupCodes() {
          return S;
        }
        get togglingSMS() {
          return E;
        }
        getNonces() {
          return A;
        }
        get hasSeenBackupPrompt() {
          return s;
        }
      }
      let a = new C(r.h, {
        MFA_ENABLE_SUCCESS: function (e) {
          let { token: t, codes: n } = e;
          void 0 !== t && c.setToken(t), (S = n);
        },
        MFA_DISABLE_SUCCESS: function (e) {
          let { token: t } = e;
          c.setToken(t);
        },
        MFA_SMS_TOGGLE: function () {
          E = !0;
        },
        MFA_SMS_TOGGLE_COMPLETE: function () {
          E = !1;
        },
        MFA_CLEAR_BACKUP_CODES: function () {
          S = [];
        },
        MFA_VIEW_BACKUP_CODES: function (e) {
          let { codes: t, key: n } = e;
          (S = o().sortBy(t, "code")), (u = n);
        },
        MFA_SEND_VERIFICATION_KEY: function (e) {
          let { nonces: t } = e;
          A = t;
        },
        MFA_SEEN_BACKUP_CODE_PROMPT: function () {
          s = !0;
        },
        CONNECTION_OPEN: () => {},
      });
    },
  },
]);
//# sourceMappingURL=76237.083483a3db9eae01.js.map
