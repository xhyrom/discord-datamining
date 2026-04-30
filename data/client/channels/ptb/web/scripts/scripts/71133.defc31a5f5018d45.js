"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["71133"],
  {
    713804(e, t, r) {
      r.r(t),
        r.d(t, {
          getOrParseBioAST: () => B,
          parseBioReact: () => k,
          parseBioReactWithCachedAST: () => O,
          parseBioReactWithoutScrolling: () => R,
        });
      var i = r(735438),
        n = r.n(i),
        a = r(635377),
        u = r.n(a),
        l = r(791332),
        o = r.n(l),
        c = r(436857),
        s = r(365347),
        m = r(29814);
      r(46054);
      var p = r(551965);
      let d = (0, p.A)([
          m.A.PROFILE_BIO_RULES,
          (0, s.A)({ enableBuildOverrides: !1, mustConfirmExternalLink: !0 }),
        ]),
        h = new (u())({ max: 2e3 }),
        k = c.aV(d),
        A;
      function B(e) {
        let t = h.get(e);
        return null != t || ((t = A(e, !0)), h.set(e, t)), t;
      }
      function O(e) {
        if (0 === e.trim().length) return null;
        let t = B(e);
        return o().reactFor(o().ruleOutput(d, "react"))(t);
      }
      let R = c.aV(
        (0, p.A)([
          n().omit(d, [
            "link",
            "url",
            "autolink",
            "customEmoji",
            "emoji",
            "commandMention",
          ]),
          { emoji: { react: () => null } },
        ]),
      );
    },
  },
]);
//# sourceMappingURL=71133.defc31a5f5018d45.js.map
