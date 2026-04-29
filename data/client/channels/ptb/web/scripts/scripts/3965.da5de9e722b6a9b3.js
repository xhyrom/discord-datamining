"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["3965"],
  {
    61132(r, o, t) {
      var E = t(524152),
        c = TypeError;
      r.exports = function (r, o) {
        if (E(o, r)) return r;
        throw new c("Incorrect invocation");
      };
    },
    753609(r) {
      r.exports = {
        IndexSizeError: { s: "INDEX_SIZE_ERR", c: 1, m: 1 },
        DOMStringSizeError: { s: "DOMSTRING_SIZE_ERR", c: 2, m: 0 },
        HierarchyRequestError: { s: "HIERARCHY_REQUEST_ERR", c: 3, m: 1 },
        WrongDocumentError: { s: "WRONG_DOCUMENT_ERR", c: 4, m: 1 },
        InvalidCharacterError: { s: "INVALID_CHARACTER_ERR", c: 5, m: 1 },
        NoDataAllowedError: { s: "NO_DATA_ALLOWED_ERR", c: 6, m: 0 },
        NoModificationAllowedError: {
          s: "NO_MODIFICATION_ALLOWED_ERR",
          c: 7,
          m: 1,
        },
        NotFoundError: { s: "NOT_FOUND_ERR", c: 8, m: 1 },
        NotSupportedError: { s: "NOT_SUPPORTED_ERR", c: 9, m: 1 },
        InUseAttributeError: { s: "INUSE_ATTRIBUTE_ERR", c: 10, m: 1 },
        InvalidStateError: { s: "INVALID_STATE_ERR", c: 11, m: 1 },
        SyntaxError: { s: "SYNTAX_ERR", c: 12, m: 1 },
        InvalidModificationError: {
          s: "INVALID_MODIFICATION_ERR",
          c: 13,
          m: 1,
        },
        NamespaceError: { s: "NAMESPACE_ERR", c: 14, m: 1 },
        InvalidAccessError: { s: "INVALID_ACCESS_ERR", c: 15, m: 1 },
        ValidationError: { s: "VALIDATION_ERR", c: 16, m: 0 },
        TypeMismatchError: { s: "TYPE_MISMATCH_ERR", c: 17, m: 1 },
        SecurityError: { s: "SECURITY_ERR", c: 18, m: 1 },
        NetworkError: { s: "NETWORK_ERR", c: 19, m: 1 },
        AbortError: { s: "ABORT_ERR", c: 20, m: 1 },
        URLMismatchError: { s: "URL_MISMATCH_ERR", c: 21, m: 1 },
        QuotaExceededError: { s: "QUOTA_EXCEEDED_ERR", c: 22, m: 1 },
        TimeoutError: { s: "TIMEOUT_ERR", c: 23, m: 1 },
        InvalidNodeTypeError: { s: "INVALID_NODE_TYPE_ERR", c: 24, m: 1 },
        DataCloneError: { s: "DATA_CLONE_ERR", c: 25, m: 1 },
      };
    },
    949186(r, o, t) {
      var E = t(410323),
        c = Error,
        e = E("".replace),
        R = String(new c("zxcasd").stack),
        s = /\n\s*at [^:]*:[^\n]*/,
        n = s.test(R);
      r.exports = function (r, o) {
        if (n && "string" == typeof r && !c.prepareStackTrace)
          for (; o--; ) r = e(r, s, "");
        return r;
      };
    },
    486724(r, o, t) {
      var E = t(339626),
        c = t(598349),
        e = t(458680);
      r.exports = function (r, o, t) {
        var R, s;
        return (
          e &&
            E((R = o.constructor)) &&
            R !== t &&
            c((s = R.prototype)) &&
            s !== t.prototype &&
            e(r, s),
          r
        );
      };
    },
    862784(r, o, t) {
      var E = t(304880);
      r.exports = function (r, o) {
        return void 0 === r ? (arguments.length < 2 ? "" : o) : E(r);
      };
    },
    508300(r, o, t) {
      var E = t(557939),
        c = t(860511),
        e = t(230606),
        R = t(231977),
        s = t(4940).f,
        n = t(210140),
        a = t(61132),
        i = t(486724),
        _ = t(862784),
        I = t(753609),
        p = t(949186),
        A = t(257943),
        T = t(105712),
        m = "DOMException",
        N = e("Error"),
        u = e(m),
        D = function () {
          a(this, O);
          var r = arguments.length,
            o = _(r < 1 ? void 0 : arguments[0]),
            t = _(r < 2 ? void 0 : arguments[1], "Error"),
            E = new u(o, t),
            c = new N(o);
          return (
            (c.name = m), s(E, "stack", R(1, p(c.stack, 1))), i(E, this, D), E
          );
        },
        O = (D.prototype = u.prototype),
        d = "stack" in new N(m),
        S = "stack" in new u(1, 2),
        v = u && A && Object.getOwnPropertyDescriptor(c, m),
        l = !!v && !(v.writable && v.configurable),
        C = d && !l && !S;
      E(
        { global: !0, constructor: !0, forced: T || C },
        { DOMException: C ? D : u },
      );
      var f = e(m),
        M = f.prototype;
      if (M.constructor !== f) {
        for (var h in (T || s(M, "constructor", R(1, f)), I))
          if (n(I, h)) {
            var w = I[h],
              y = w.s;
            n(f, y) || s(f, y, R(6, w.c));
          }
      }
    },
  },
]);
//# sourceMappingURL=3965.da5de9e722b6a9b3.js.map
