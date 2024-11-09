"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["78030"],
  {
    24031: function (e, t, n) {
      n.r(t),
        n.d(t, {
          openMFAModal: function () {
            return a;
          },
        }),
        n(51350);
      var r = n(658550),
        i = n(48550);
      function a(e, t, a) {
        e.methods = e.methods.filter((e) => Object.hasOwn(i.P, e.type));
        n(124860).YR(e, (e) => (0, r.P0)(e, t), a);
      }
    },
    58259: function (e, t, n) {
      e.exports = {
        header: "header_c03fd3",
        subtitle: "subtitle_c03fd3",
        closeButton: "closeButton_c03fd3",
        content: "content_c03fd3",
        smsInputContainer: "smsInputContainer_c03fd3",
        smsInput: "smsInput_c03fd3",
        error: "error_c03fd3",
        footer: "footer_c03fd3",
        listItemContainer: "listItemContainer_c03fd3",
        listItemText: "listItemText_c03fd3",
        listItemArrow: "listItemArrow_c03fd3",
      };
    },
    849055: function (e, t, n) {
      function r(e) {
        let t = "==".slice(0, (4 - (e.length % 4)) % 4),
          n = atob(e.replace(/-/g, "+").replace(/_/g, "/") + t),
          r = new ArrayBuffer(n.length),
          i = new Uint8Array(r);
        for (let e = 0; e < n.length; e++) i[e] = n.charCodeAt(e);
        return r;
      }
      function i(e) {
        let t = new Uint8Array(e),
          n = "";
        for (let e of t) n += String.fromCharCode(e);
        return btoa(n)
          .replace(/\+/g, "-")
          .replace(/\//g, "_")
          .replace(/=/g, "");
      }
      n.d(t, {
        U2: function () {
          return w;
        },
        Ue: function () {
          return _;
        },
      });
      var a = "copy",
        o = "convert";
      function c(e, t, n) {
        if (t === a) return n;
        if (t === o) return e(n);
        if (t instanceof Array) return n.map((n) => c(e, t[0], n));
        if (t instanceof Object) {
          let r = {};
          for (let [i, a] of Object.entries(t)) {
            if (a.derive) {
              let e = a.derive(n);
              void 0 !== e && (n[i] = e);
            }
            if (!(i in n)) {
              if (a.required) throw Error(`Missing key: ${i}`);
              continue;
            }
            if (null == n[i]) {
              r[i] = null;
              continue;
            }
            r[i] = c(e, a.schema, n[i]);
          }
          return r;
        }
      }
      function s(e, t) {
        return { required: !0, schema: e, derive: t };
      }
      function u(e) {
        return { required: !0, schema: e };
      }
      function l(e) {
        return { required: !1, schema: e };
      }
      var d = { type: u(a), id: u(o), transports: l(a) },
        f = { appid: l(a), appidExclude: l(a), credProps: l(a) },
        p = { appid: l(a), appidExclude: l(a), credProps: l(a) },
        h = {
          publicKey: u({
            rp: u(a),
            user: u({ id: u(o), name: u(a), displayName: u(a) }),
            challenge: u(o),
            pubKeyCredParams: u(a),
            timeout: l(a),
            excludeCredentials: l([d]),
            authenticatorSelection: l(a),
            attestation: l(a),
            extensions: l(f),
          }),
          signal: l(a),
        },
        m = {
          type: u(a),
          id: u(a),
          rawId: u(o),
          authenticatorAttachment: l(a),
          response: u({
            clientDataJSON: u(o),
            attestationObject: u(o),
            transports: s(a, (e) => {
              var t;
              return (null == (t = e.getTransports) ? void 0 : t.call(e)) || [];
            }),
          }),
          clientExtensionResults: s(p, (e) => e.getClientExtensionResults()),
        },
        g = {
          mediation: l(a),
          publicKey: u({
            challenge: u(o),
            timeout: l(a),
            rpId: l(a),
            allowCredentials: l([d]),
            userVerification: l(a),
            extensions: l(f),
          }),
          signal: l(a),
        },
        y = {
          type: u(a),
          id: u(a),
          rawId: u(o),
          authenticatorAttachment: l(a),
          response: u({
            clientDataJSON: u(o),
            authenticatorData: u(o),
            signature: u(o),
            userHandle: u(o),
          }),
          clientExtensionResults: s(p, (e) => e.getClientExtensionResults()),
        };
      async function _(e) {
        let t = await navigator.credentials.create(c(r, h, e));
        return c(i, m, t);
      }
      async function w(e) {
        let t = await navigator.credentials.get(c(r, g, e));
        return c(i, y, t);
      }
    },
  },
]);
//# sourceMappingURL=f7607962aae96dbe8f9e.js.map
