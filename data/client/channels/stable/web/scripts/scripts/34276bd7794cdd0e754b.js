"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["30634"],
  {
    692114: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return a;
        },
      }),
        n(47120);
      var r = n(298444);
      function i(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      class a {
        _load() {
          let e = r.x.get(this._key);
          null != e && (this._set = new Set(e));
        }
        _persist() {
          let e = Array.from(this._set.values());
          r.x.set(this._key, e);
        }
        add(e) {
          this._set.add(e),
            requestIdleCallback(() => {
              this._persist();
            });
        }
        has(e) {
          return this._set.has(e);
        }
        constructor(e) {
          i(this, "_key", void 0),
            i(this, "_set", void 0),
            (this._key = "$persisted-set-".concat(e)),
            (this._set = new Set()),
            this._load();
        }
      }
    },
    532810: function (e, t, n) {
      n.d(t, {
        A$: function () {
          return L;
        },
        OF: function () {
          return p;
        },
      }),
        n(47120),
        n(653041);
      var r,
        i,
        a = n(470079),
        o = n(622131),
        l = n(247123),
        u = n(350934),
        c = n(972959),
        s = n(585647),
        d = n(883349),
        f = n(993173),
        h = n(650021),
        v = n(807608);
      let b = [u.Z, c.Z, s.Z, f.Z, d.Z, v.Z, h.Z],
        p = "data-accessibility-violation",
        m =
          "function" ==
          typeof (null === (i = navigator) || void 0 === i
            ? void 0
            : null === (r = i.scheduling) || void 0 === r
              ? void 0
              : r.isInputPending),
        g = null,
        w = null,
        A = 0,
        y = 0,
        k = null,
        _ = { hash: 0, violations: new Map() },
        I = () => {},
        x = document.body;
      function N() {
        (A = 0), (y = 0), (k = null), (_ = { hash: 0, violations: new Map() });
      }
      function E() {
        w = requestIdleCallback(Z);
      }
      function M() {
        (k = null), (y = 0), A < b.length - 1 ? ((A += 1), E()) : (I(_), N());
      }
      function Z() {
        let e = b[A];
        if (
          (null == k &&
            (k =
              null != e.selector
                ? Array.from(x.querySelectorAll(e.selector))
                : e.select(x)),
          0 === k.length)
        )
          return M();
        let t = performance.now() + 16,
          n = { includeContinuous: !0 };
        for (
          ;
          y < k.length &&
          !(navigator.scheduling.isInputPending(n) || performance.now() >= t);

        ) {
          let t = k[y++],
            n = e.check(t);
          if (n !== l.w) {
            var r, i;
            let a = (0, o.P)(t),
              l = T(
                ""
                  .concat(n, "_")
                  .concat(e.id, "_")
                  .concat(
                    null == a
                      ? (function (e) {
                          let t = "",
                            n = e;
                          for (; null != n; )
                            (t += n.className), (n = n.parentElement);
                          return T(t);
                        })(t)
                      : a.join("\n"),
                  ),
              );
            _.hash = T("".concat(_.hash).concat(l));
            let u = "".concat(e.id, "_").concat(l),
              c =
                null !== (r = _.violations.get(e.id)) && void 0 !== r
                  ? r
                  : { rule: e, instances: new Map() },
              s = null !== (i = c.instances.get(u)) && void 0 !== i ? i : [];
            s.push({
              element: t,
              message: n,
              trace: null != a ? a : [],
              hash: l,
            }),
              c.instances.set(u, s),
              _.violations.set(e.id, c);
          }
        }
        if (y < k.length - 1) return E();
        M();
      }
      let S = (e) => {
        let t = e.filter(
          (e) => ("attributes" !== e.type || e.attributeName !== p) && !0,
        );
        0 !== t.length &&
          (N(),
          null != g && (clearTimeout(g), (g = null)),
          null != w && (clearTimeout(w), (w = null)),
          (g = setTimeout(E, 250)));
      };
      function L(e, t) {
        (0, a.useLayoutEffect)(() => {
          if (m && null != e) {
            (I = t), (x = e);
            let n = (function (e) {
              let t = new MutationObserver(S);
              return (
                t.observe(e, { attributes: !0, childList: !0, subtree: !0 }), t
              );
            })(e);
            return () => {
              (I = () => {}), n.disconnect();
            };
          }
        }, [e]);
      }
      function T(e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = 3735928559 ^ t,
          r = 1103547991 ^ t;
        for (let t = 0, i; t < e.length; t++)
          (n = Math.imul(n ^ (i = e.charCodeAt(t)), 2654435761)),
            (r = Math.imul(r ^ i, 1597334677));
        return (
          (n =
            Math.imul(n ^ (n >>> 16), 2246822507) ^
            Math.imul(r ^ (r >>> 13), 3266489909)),
          4294967296 *
            (2097151 &
              (r =
                Math.imul(r ^ (r >>> 16), 2246822507) ^
                Math.imul(n ^ (n >>> 13), 3266489909))) +
            (n >>> 0)
        );
      }
    },
    915312: function (e, t, n) {
      n.d(t, {
        LL: function () {
          return h;
        },
        bN: function () {
          return f;
        },
      }),
        n(47120),
        n(653041);
      var r = n(470079),
        i = n(652874),
        a = n(731965),
        o = n(692114),
        l = n(626135),
        u = n(532810),
        c = n(981631);
      let s = new o.Z("a11y_violations"),
        d = (0, i.Z)(() => ({ check: null }));
      function f(e) {
        let t = (0, r.useCallback)((e) => {
          var t;
          e.hash !==
            (null === (t = d.getState().check) || void 0 === t
              ? void 0
              : t.hash) &&
            ((0, a.j)(() => d.setState({ check: e })),
            !(function (e) {
              for (let [t, n] of e.entries())
                for (let e of n.instances.values())
                  for (let { trace: n, hash: r } of e) {
                    let e = JSON.stringify(r);
                    s.has(e) ||
                      (s.add(e),
                      l.default.track(c.rMx.A11Y_RUNTIME_VIOLATION, {
                        rule_id: t,
                        trace: n.join("\n"),
                        hash: r,
                      }));
                  }
            })(e.violations));
        }, []);
        (0, u.A$)(e, t);
      }
      function h() {
        return (function (e) {
          if (null == e) return [];
          let t = [];
          for (let { instances: n, rule: r } of e.values())
            for (let [e, i] of n.entries()) {
              let n = i.map((e) => e.element),
                a = i[0].message;
              t.push({
                key: e,
                title: r.metadata.description,
                description: r.metadata.help,
                id: r.id,
                tags: r.tags,
                elements: n,
                message: a,
              });
            }
          return t;
        })(
          d((e) => {
            var t, n;
            return null !==
              (n =
                null === (t = e.check) || void 0 === t
                  ? void 0
                  : t.violations) && void 0 !== n
              ? n
              : null;
          }),
        );
      }
    },
    247123: function (e, t, n) {
      n.d(t, {
        w: function () {
          return r;
        },
      });
      let r = Symbol.for("pass");
    },
    207662: function (e, t, n) {
      function r(e) {
        let t = e;
        for (; null != t && t !== document.body; ) {
          if ((null == t ? void 0 : t.getAttribute("aria-hidden")) === "true")
            return !0;
          t = t.parentElement;
        }
        return !1;
      }
      n.d(t, {
        J8: function () {
          return a;
        },
        Uu: function () {
          return r;
        },
        cg: function () {
          return i;
        },
      }),
        n(47120);
      let i = Array.from(n(485589).aria.keys()),
        a = i.map((e) => "[".concat(e, "]")).join(", ");
    },
    350934: function (e, t, n) {
      var r = n(424706),
        i = n(14160),
        a = n(247123),
        o = n(207662);
      t.Z = {
        id: "alt-text",
        selector: 'img, [role="img"]',
        tags: ["wcag2a", "wcag111", "section508", "section508.22.a", "ACT"],
        metadata: {
          description: "Images must have alternative text.",
          help: "",
        },
        check: function (e) {
          if ("" === (0, r.AB)(e))
            return ("IMG" === e.tagName && e.hasAttribute("alt")) ||
              (0, o.Uu)(e) ||
              !(0, i.p)(e)
              ? a.w
              : "Image has no alternative text";
          return a.w;
        },
      };
    },
    972959: function (e, t, n) {
      n(47120);
      var r = n(485589),
        i = n(424706),
        a = n(14160),
        o = n(247123),
        l = n(207662);
      let u = {
        id: "aria-allowed-attributes",
        selector: l.J8,
        tags: ["wcag2a", "wcag412"],
        metadata: {
          description: "Only use supported ARIA attributes",
          help: "Using ARIA attributes in roles where they are not allowed can interfere with the accessibility of the web page.",
        },
        check: function (e) {
          let t = (0, i.cY)(e),
            n = r.roles.get(t);
          if (null == n) return o.w;
          for (let r of l.cg)
            if (e.hasAttribute(r) && !n.props.hasOwnProperty(r)) {
              if ("aria-expanded" === r && e.hasAttribute("aria-controls"))
                continue;
              if (!(0, a.p)(e)) return o.w;
              return "'"
                .concat(t, "' does not support the ")
                .concat(r, " attribute");
            }
          return o.w;
        },
      };
      t.Z = u;
    },
    585647: function (e, t, n) {
      n(47120);
      var r = n(485589),
        i = n(14160),
        a = n(247123),
        o = n(207662);
      t.Z = {
        id: "aria-attribute-valid-value",
        selector: o.J8,
        tags: [],
        metadata: {
          description: "ARIA attributes must use valid values",
          help: "",
        },
        check: function (e) {
          let t = (function (e) {
            for (let t of o.cg)
              if (e.hasAttribute(t)) {
                let n = e.getAttribute(t),
                  i = r.aria.get(t);
                switch (i.type) {
                  case "string":
                    return a.w;
                  case "id":
                    return (function (e, t) {
                      return null == document.getElementById(t)
                        ? ""
                            .concat(e, " references #")
                            .concat(t, " which does not exist")
                        : a.w;
                    })(t, n);
                  case "idlist":
                    return (function (e, t, n) {
                      if (
                        ("aria-controls" === e &&
                          ("false" === n.getAttribute("aria-expanded") ||
                            "false" === n.getAttribute("aria-selected"))) ||
                        ("aria-owns" === e &&
                          "false" === n.getAttribute("aria-expanded"))
                      )
                        return a.w;
                      for (let n of t.split(" "))
                        if (null == document.getElementById(n))
                          return ""
                            .concat(e, " references #")
                            .concat(t, " which does not exist");
                      return a.w;
                    })(t, n, e);
                  case "integer":
                    return (function (e, t) {
                      return String(parseInt(t, 10)) !== t
                        ? ""
                            .concat(e, " requires an integer but got ")
                            .concat(t)
                        : a.w;
                    })(t, n);
                  case "number":
                    return (function (e, t) {
                      return isFinite(t)
                        ? a.w
                        : ""
                            .concat(e, " requires a numeric value but got ")
                            .concat(t);
                    })(t, n);
                  case "boolean":
                    return (function (e, t, n) {
                      return "true" === t ||
                        "false" === t ||
                        ("" === t && !0 === n.allowundefined)
                        ? a.w
                        : "".concat(e, ' must be either "true" or "false"');
                    })(t, n, i);
                  case "token":
                    return (function (e, t, n) {
                      var r, i;
                      let o = (function (e) {
                        switch (e) {
                          case "true":
                            return !0;
                          case "false":
                            return !1;
                          default:
                            return e;
                        }
                      })(t);
                      return (
                        null === (r = n.values) || void 0 === r
                          ? void 0
                          : r.includes(o)
                      )
                        ? a.w
                        : ""
                            .concat(e, " was ")
                            .concat(t, " but must be: ")
                            .concat(
                              null === (i = n.values) || void 0 === i
                                ? void 0
                                : i.join(", "),
                            );
                    })(t, n, i);
                  case "tokenlist":
                    return (function (e, t, n) {
                      for (let a of t.split(" ")) {
                        var r, i;
                        if (
                          null === (r = n.values) || void 0 === r
                            ? !void 0
                            : !r.includes(a)
                        )
                          return ""
                            .concat(e, " included ")
                            .concat(t, " but is restricted to: ")
                            .concat(
                              null === (i = n.values) || void 0 === i
                                ? void 0
                                : i.join(", "),
                            );
                      }
                      return a.w;
                    })(t, n, i);
                  case "tristate":
                    return (function (e, t) {
                      switch (t) {
                        case "true":
                        case "false":
                        case "mixed":
                          return a.w;
                        default:
                          return ""
                            .concat(
                              e,
                              ' must be "true", "false", or "mixed" not ',
                            )
                            .concat(t);
                      }
                    })(t, n);
                }
              }
            return a.w;
          })(e);
          return t !== a.w && ((0, o.Uu)(e) || !(0, i.p)(e)) ? a.w : t;
        },
      };
    },
    883349: function (e, t, n) {
      var r = n(424706),
        i = n(14160),
        a = n(247123),
        o = n(207662);
      t.Z = {
        id: "button-name",
        selector:
          'button, [role="button"], [role="link"], [role="menuitem"], [role="tab"]',
        tags: ["wcag2a", "wcag412", "section508", "section508.22.a", "ACT"],
        metadata: {
          description: "Ensures buttons have discernible text",
          help: "",
        },
        check: function (e) {
          return "" !== (0, r.AB)(e) || (0, o.Uu)(e) || !(0, i.p)(e)
            ? a.w
            : "button's accessible name is empty.";
        },
      };
    },
    993173: function (e, t, n) {
      n(47120);
      var r = n(485589),
        i = n(247123);
      let a = new Set(r.roles.keys());
      t.Z = {
        id: "aria-valid-roles",
        selector: "[role]",
        tags: ["wcag2a", "wcag412"],
        metadata: {
          description: "ARIA roles used must conform to valid values",
          help: "Ensures all elements with a role attribute use a valid value",
        },
        check: function (e) {
          for (let t of e.getAttribute("role").split(" ")) {
            if (!a.has(t))
              return "Role '".concat(t, "' is not a valid ARIA role");
          }
          return i.w;
        },
      };
    },
    650021: function (e, t, n) {
      var r = n(424706),
        i = n(14160),
        a = n(247123),
        o = n(207662);
      t.Z = {
        id: "input-label",
        selector:
          'input, textarea, select, [role="checkbox"], [role="radio"], [role="radiogroup"], [role="searchbox"], [role="slider"], [role="textbox"], [role="combobox"]',
        tags: [
          "wcag2a",
          "wcag131",
          "wcag412",
          "section508",
          "section508.22.a",
          "ACT",
        ],
        metadata: {
          description: "Form inputs require a label",
          help: "Please provide a name for this input with a HTML label, aria-label, or aria-labelledby.",
        },
        check: function (e) {
          if ("" === (0, r.AB)(e))
            return (0, o.Uu)(e) || !(0, i.p)(e)
              ? a.w
              : "Form input has no label";
          return a.w;
        },
      };
    },
    807608: function (e, t, n) {
      n(47120), n(724458), n(653041);
      var r = n(485589),
        i = n(424706),
        a = n(14160),
        o = n(247123);
      let l = "button, a, ".concat(
        Array.from(r.roles.entries())
          .reduce((e, t) => {
            let [n, r] = t;
            return (
              !0 === r.childrenPresentational &&
                e.push('[role="'.concat(n, '"]')),
              e
            );
          }, [])
          .join(", "),
      );
      t.Z = {
        id: "nested-interactive",
        selector: l,
        tags: [],
        metadata: {
          description: "Interactive controls must not be nested",
          help: "Nested focusable elements are inaccessible to screen readers",
        },
        check: function (e) {
          return !(function (e) {
            let t = document.createNodeIterator(e, NodeFilter.SHOW_ELEMENT),
              n = t.nextNode();
            for (; null !== n; ) {
              if (
                n !== e &&
                (function (e) {
                  switch (e.nodeName) {
                    case "IFRAME":
                    case "EMBED":
                    case "DETAILS":
                    case "LABEL":
                      return !0;
                    case "INPUT":
                      return "hidden" !== e.getAttribute("type");
                  }
                  return (function (e) {
                    switch ((0, i.cY)(e)) {
                      case "link":
                        return e.hasAttribute("href");
                      case "audio":
                        return e.hasAttribute("controls");
                      case "img":
                        return e.hasAttribute("usemap");
                      case "button":
                        return !0;
                      default:
                        return !1;
                    }
                  })(e);
                })(n)
              )
                return !1;
              n = t.nextNode();
            }
            return !0;
          })(e) && (0, a.p)(e)
            ? "Nested interactive element"
            : o.w;
        },
      };
    },
    622131: function (e, t, n) {
      var r, i;
      n.d(t, {
        P: function () {
          return l;
        },
      }),
        n(47120),
        n(653041),
        ((i = r || (r = {}))[(i.Unknown = 0)] = "Unknown"),
        (i[(i.Loaded = 1)] = "Loaded"),
        (i[(i.NotFound = 2)] = "NotFound");
      let a = 0,
        o = null;
      function l(e) {
        let t =
          !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        try {
          let n = (function (e) {
            if (2 === a) return null;
            0 === a &&
              !(function (e) {
                let t = e;
                for (; null != t && t !== document.body; ) {
                  for (let t of Object.keys(e))
                    if (t.startsWith("__reactFiber$")) {
                      (o = t), (a = 1);
                      return;
                    }
                  t = t.parentElement;
                }
                null == o && (a = 2);
              })(e);
            let t = o,
              n = e;
            for (; null != n && n !== document.body; ) {
              if (t in n) return n[t];
              n = n.parentElement;
            }
            return null;
          })(e);
          if (null != n)
            return (function (e, t) {
              let n = [],
                r = e;
              for (; null != r; ) {
                var i, a;
                let e =
                    null == r
                      ? void 0
                      : null === (i = r._debugSource) || void 0 === i
                        ? void 0
                        : i.fileName,
                  o =
                    null == r
                      ? void 0
                      : null === (a = r._debugSource) || void 0 === a
                        ? void 0
                        : a.lineNumber;
                if (null != e && null != o) {
                  let r = "".concat(e, ":").concat(o);
                  if (t) {
                    let e = r.split("/discord/");
                    0 !== e.length && n.push(e[e.length - 1]);
                  } else n.push(r);
                }
                r = null == r ? void 0 : r._debugOwner;
              }
              return n;
            })(n, t);
          return null;
        } catch {
          return null;
        }
      }
    },
  },
]);
//# sourceMappingURL=34276bd7794cdd0e754b.js.map
