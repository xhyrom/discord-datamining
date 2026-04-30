"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["99593"],
  {
    638128(e, t, a) {
      a.d(t, { A: () => h });
      var l = a(17928),
        s = a(506774),
        d = a(228366),
        r = a(724066),
        o = a(454235);
      let n = "SpellcheckStore",
        L = !0,
        c = new Set();
      function i() {
        s.w.set(n, { enabled: L, learnedWords: c });
      }
      class C extends l.Ay.Store {
        static displayName = "SpellcheckStore";
        initialize() {
          let e = s.w.get(n);
          null != e &&
            ((L = e.enabled),
            (c = new Set(e.learnedWords)),
            (0, o.kv)(L),
            (0, o.d1)(c)),
            (0, r.I)(o.Av);
        }
        isEnabled() {
          return L;
        }
        hasLearnedWord(e) {
          return c.has(e.toLocaleLowerCase());
        }
      }
      let h = new C(d.h, {
        SPELLCHECK_TOGGLE() {
          (L = !L), (0, o.kv)(L), i();
        },
        SPELLCHECK_LEARN_WORD(e) {
          let { word: t } = e;
          c.add(t.toLocaleLowerCase()), (0, o.d1)(c), i();
        },
        SPELLCHECK_UNLEARN_WORD(e) {
          let { word: t } = e;
          c.delete(t.toLocaleLowerCase()), (0, o.d1)(c), i();
        },
      });
    },
  },
]);
//# sourceMappingURL=99593.224aacbc89e33002.js.map
