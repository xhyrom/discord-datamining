(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  [187398],
  {
    588234(e) {
      e.exports = function (e) {
        for (
          var t = -1, r = null == e ? 0 : e.length, n = 0, i = [];
          ++t < r;

        ) {
          var u = e[t];
          u && (i[n++] = u);
        }
        return i;
      };
    },
    235599(e, t, r) {
      "use strict";
      var n = r(877413),
        i = r.n(n),
        u = r(649852),
        a = r.n(u),
        o = r(64015),
        s = r.n(o),
        l = r(582128),
        c = r(79962),
        d = r(719442),
        f = r(41875),
        h = r(294106),
        p = r(333007);
      function g(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      function D(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              u = Object.keys(e);
            for (n = 0; n < u.length; n++)
              (r = u[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(e);
          for (n = 0; n < u.length; n++)
            (r = u[n]),
              !(t.indexOf(r) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(e, r) &&
                (i[r] = e[r]);
        }
        return i;
      }
      var v = 0;
      class m {
        constructor() {
          this.id = "".concat(v++);
        }
      }
      var C = new WeakMap(),
        B = new WeakMap(),
        E = new WeakMap(),
        y = new WeakMap(),
        w = new WeakMap(),
        A = new WeakMap(),
        b = new WeakMap(),
        F = new WeakMap(),
        _ = new WeakMap(),
        k = new WeakMap(),
        x = new WeakMap(),
        O = new WeakMap(),
        P = new WeakMap(),
        z = new WeakMap(),
        S = new WeakMap(),
        j = new WeakMap(),
        T = new WeakMap(),
        N = new WeakMap(),
        $ = new WeakMap(),
        R = new WeakMap(),
        M = new WeakMap(),
        I = Symbol("placeholder"),
        Z = Symbol("mark-placeholder"),
        K = globalThis.Text,
        L = (e) =>
          (e && e.ownerDocument && e.ownerDocument.defaultView) || null,
        q = (e) => U(e) && 8 === e.nodeType,
        W = (e) => U(e) && 1 === e.nodeType,
        U = (e) => {
          var t = L(e);
          return !!t && e instanceof t.Node;
        },
        V = (e) => {
          var t = e && e.anchorNode && L(e.anchorNode);
          return !!t && e instanceof t.Selection;
        },
        J = (e) => U(e) && 3 === e.nodeType,
        Q = (e, t, r) => {
          for (
            var { childNodes: n } = e, i = n[t], u = t, a = !1, o = !1;
            (q(i) ||
              (W(i) && 0 === i.childNodes.length) ||
              (W(i) && "false" === i.getAttribute("contenteditable"))) &&
            (!a || !o);

          ) {
            if (u >= n.length) {
              (a = !0), (u = t - 1), (r = "backward");
              continue;
            }
            if (u < 0) {
              (o = !0), (u = t + 1), (r = "forward");
              continue;
            }
            (i = n[u]), (t = u), (u += "forward" === r ? 1 : -1);
          }
          return [i, t];
        },
        H = (e, t, r) => {
          var [n] = Q(e, t, r);
          return n;
        },
        Y = (e) => {
          var t = "";
          if (J(e) && e.nodeValue) return e.nodeValue;
          if (W(e)) {
            for (var r of Array.from(e.childNodes)) t += Y(r);
            var n = getComputedStyle(e).getPropertyValue("display");
            ("block" === n || "list" === n || "BR" === e.tagName) &&
              (t += "\n");
          }
          return t;
        },
        X = /data-slate-fragment="(.+?)"/m,
        G = (e, t, r) => {
          var { target: n } = t;
          if (W(n) && n.matches('[contentEditable="false"]')) return !1;
          var { document: i } = eg.getWindow(e);
          if (i.contains(n)) return eg.hasDOMNode(e, n, { editable: !0 });
          var u = r.find((e) => {
            var { addedNodes: t, removedNodes: r } = e;
            for (var i of t) if (i === n || i.contains(n)) return !0;
            for (var u of r) if (u === n || u.contains(n)) return !0;
          });
          return !!u && u !== t && G(e, u, r);
        },
        ee = parseInt(l.version.split(".")[0], 10) >= 17,
        et =
          "u" > typeof navigator &&
          "u" > typeof window &&
          /iPad|iPhone|iPod/.test(navigator.userAgent) &&
          !window.MSStream,
        er = "u" > typeof navigator && /Mac OS X/.test(navigator.userAgent),
        en = "u" > typeof navigator && /Android/.test(navigator.userAgent),
        ei =
          "u" > typeof navigator &&
          /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
        eu =
          "u" > typeof navigator &&
          /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
        ea =
          "u" > typeof navigator &&
          /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
        eo = "u" > typeof navigator && /Chrome/i.test(navigator.userAgent),
        es =
          "u" > typeof navigator &&
          /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent),
        el =
          en &&
          "u" > typeof navigator &&
          /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent),
        ec =
          "u" > typeof navigator &&
          /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(
            navigator.userAgent,
          ),
        ed = "u" > typeof navigator && /.*UCBrowser/.test(navigator.userAgent),
        ef = "u" > typeof navigator && /.*Wechat/.test(navigator.userAgent),
        eh =
          "u" > typeof window &&
          void 0 !== window.document &&
          void 0 !== window.document.createElement,
        ep =
          (!es || !el) &&
          !ea &&
          "u" > typeof globalThis &&
          globalThis.InputEvent &&
          "function" == typeof globalThis.InputEvent.prototype.getTargetRanges,
        eg = {
          isComposing: (e) => !!O.get(e),
          getWindow(e) {
            var t = E.get(e);
            if (!t)
              throw Error(
                "Unable to find a host window element for this editor",
              );
            return t;
          },
          findKey(e, t) {
            var r = F.get(t);
            return r || ((r = new m()), F.set(t, r)), r;
          },
          findPath(e, t) {
            for (var r = [], n = t; ; ) {
              var i = B.get(n);
              if (null == i)
                if (d.KE.isEditor(n)) return r;
                else break;
              var u = C.get(n);
              if (null == u) break;
              r.unshift(u), (n = i);
            }
            throw Error(
              "Unable to find the path for Slate node: ".concat(
                d.h6.stringify(t),
              ),
            );
          },
          findDocumentOrShadowRoot(e) {
            var t = eg.toDOMNode(e, e),
              r = t.getRootNode();
            return (r instanceof Document || r instanceof ShadowRoot) &&
              null != r.getSelection
              ? r
              : t.ownerDocument;
          },
          isFocused: (e) => !!x.get(e),
          isReadOnly: (e) => !!k.get(e),
          blur(e) {
            var t = eg.toDOMNode(e, e),
              r = eg.findDocumentOrShadowRoot(e);
            x.set(e, !1), r.activeElement === t && t.blur();
          },
          focus(e) {
            var t = eg.toDOMNode(e, e),
              r = eg.findDocumentOrShadowRoot(e);
            x.set(e, !0),
              r.activeElement !== t && t.focus({ preventScroll: !0 });
          },
          deselect(e) {
            var { selection: t } = e,
              r = eg.findDocumentOrShadowRoot(e).getSelection();
            r && r.rangeCount > 0 && r.removeAllRanges(), t && d.gB.deselect(e);
          },
          hasDOMNode(e, t) {
            var r,
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { editable: i = !1 } = n,
              u = eg.toDOMNode(e, e);
            try {
              r = W(t) ? t : t.parentElement;
            } catch (e) {
              if (
                !e.message.includes(
                  'Permission denied to access property "nodeType"',
                )
              )
                throw e;
            }
            return (
              !!r &&
              r.closest("[data-slate-editor]") === u &&
              (!i ||
                !!r.isContentEditable ||
                ("boolean" == typeof r.isContentEditable &&
                  r.closest('[contenteditable="false"]') === u) ||
                !!r.getAttribute("data-slate-zero-width"))
            );
          },
          insertData(e, t) {
            e.insertData(t);
          },
          insertFragmentData: (e, t) => e.insertFragmentData(t),
          insertTextData: (e, t) => e.insertTextData(t),
          setFragmentData(e, t, r) {
            e.setFragmentData(t, r);
          },
          toDOMNode(e, t) {
            var r = _.get(e),
              n = d.KE.isEditor(t)
                ? y.get(e)
                : null == r
                  ? void 0
                  : r.get(eg.findKey(e, t));
            if (!n)
              throw Error(
                "Cannot resolve a DOM node from Slate node: ".concat(
                  d.h6.stringify(t),
                ),
              );
            return n;
          },
          toDOMPoint(e, t) {
            var [r] = d.KE.node(e, t.path),
              n = eg.toDOMNode(e, r);
            d.KE.void(e, { at: t }) && (t = { path: t.path, offset: 0 });
            for (
              var i = Array.from(
                  n.querySelectorAll(
                    "[data-slate-string], [data-slate-zero-width]",
                  ),
                ),
                u = 0,
                a = 0;
              a < i.length;
              a++
            ) {
              var o = i[a],
                s = o.childNodes[0];
              if (null != s && null != s.textContent) {
                var { length: l } = s.textContent,
                  c = o.getAttribute("data-slate-length"),
                  f = u + (null == c ? l : parseInt(c, 10)),
                  h = i[a + 1];
                if (
                  t.offset === f &&
                  null != h &&
                  h.hasAttribute("data-slate-mark-placeholder")
                ) {
                  var p,
                    g,
                    D = h.childNodes[0];
                  p = [
                    D instanceof K ? D : h,
                    null != (g = h.textContent) && g.startsWith("\uFEFF")
                      ? 1
                      : 0,
                  ];
                  break;
                }
                if (t.offset <= f) {
                  p = [s, Math.min(l, Math.max(0, t.offset - u))];
                  break;
                }
                u = f;
              }
            }
            if (!p)
              throw Error(
                "Cannot resolve a DOM point from Slate point: ".concat(
                  d.h6.stringify(t),
                ),
              );
            return p;
          },
          toDOMRange(e, t) {
            var { anchor: r, focus: n } = t,
              i = d.Q6.isBackward(t),
              u = eg.toDOMPoint(e, r),
              a = d.Q6.isCollapsed(t) ? u : eg.toDOMPoint(e, n),
              o = eg.getWindow(e).document.createRange(),
              [s, l] = i ? a : u,
              [c, f] = i ? u : a,
              h = !!(W(s) ? s : s.parentElement).getAttribute(
                "data-slate-zero-width",
              ),
              p = !!(W(c) ? c : c.parentElement).getAttribute(
                "data-slate-zero-width",
              );
            return o.setStart(s, h ? 1 : l), o.setEnd(c, p ? 1 : f), o;
          },
          toSlateNode(e, t) {
            var r = W(t) ? t : t.parentElement;
            r &&
              !r.hasAttribute("data-slate-node") &&
              (r = r.closest("[data-slate-node]"));
            var n = r ? A.get(r) : null;
            if (!n)
              throw Error(
                "Cannot resolve a Slate node from DOM node: ".concat(r),
              );
            return n;
          },
          findEventRange(e, t) {
            "nativeEvent" in t && (t = t.nativeEvent);
            var r,
              { clientX: n, clientY: i, target: u } = t;
            if (null == n || null == i)
              throw Error(
                "Cannot resolve a Slate range from a DOM event: ".concat(t),
              );
            var a = eg.toSlateNode(e, t.target),
              o = eg.findPath(e, a);
            if (d.Hg.isElement(a) && d.KE.isVoid(e, a)) {
              var s = u.getBoundingClientRect(),
                l = e.isInline(a)
                  ? n - s.left < s.left + s.width - n
                  : i - s.top < s.top + s.height - i,
                c = d.KE.point(e, o, { edge: l ? "start" : "end" }),
                f = l ? d.KE.before(e, c) : d.KE.after(e, c);
              if (f) return d.KE.range(e, f);
            }
            var { document: h } = eg.getWindow(e);
            if (h.caretRangeFromPoint) r = h.caretRangeFromPoint(n, i);
            else {
              var p = h.caretPositionFromPoint(n, i);
              p &&
                ((r = h.createRange()).setStart(p.offsetNode, p.offset),
                r.setEnd(p.offsetNode, p.offset));
            }
            if (!r)
              throw Error(
                "Cannot resolve a Slate range from a DOM event: ".concat(t),
              );
            return eg.toSlateRange(e, r, { exactMatch: !1, suppressThrow: !1 });
          },
          toSlatePoint(e, t, r) {
            var { exactMatch: n, suppressThrow: i } = r,
              [u, a] = n
                ? t
                : ((e) => {
                    var [t, r] = e;
                    if (W(t) && t.childNodes.length) {
                      var n = r === t.childNodes.length,
                        i = n ? r - 1 : r;
                      for (
                        [t, i] = Q(t, i, n ? "backward" : "forward"), n = i < r;
                        W(t) && t.childNodes.length;

                      ) {
                        var u = n ? t.childNodes.length - 1 : 0;
                        t = H(t, u, n ? "backward" : "forward");
                      }
                      r = n && null != t.textContent ? t.textContent.length : 0;
                    }
                    return [t, r];
                  })(t),
              o = u.parentNode,
              s = null,
              l = 0;
            if (o) {
              var c,
                f,
                h = eg.toDOMNode(e, e),
                p = o.closest('[data-slate-void="true"]'),
                g = p && h.contains(p) ? p : null,
                D = o.closest("[data-slate-leaf]"),
                v = null;
              if (D) {
                if ((s = D.closest('[data-slate-node="text"]'))) {
                  var m = eg.getWindow(e).document.createRange();
                  m.setStart(s, 0), m.setEnd(u, a);
                  var C = m.cloneContents();
                  [
                    ...Array.prototype.slice.call(
                      C.querySelectorAll("[data-slate-zero-width]"),
                    ),
                    ...Array.prototype.slice.call(
                      C.querySelectorAll("[contenteditable=false]"),
                    ),
                  ].forEach((e) => {
                    if (
                      en &&
                      !n &&
                      e.hasAttribute("data-slate-zero-width") &&
                      e.textContent.length > 0 &&
                      "\uFEFF" !== e.textContext
                    ) {
                      e.textContent.startsWith("\uFEFF") &&
                        (e.textContent = e.textContent.slice(1));
                      return;
                    }
                    e.parentNode.removeChild(e);
                  }),
                    (l = C.textContent.length),
                    (v = s);
                }
              } else if (g) {
                for (
                  var B = g.querySelectorAll("[data-slate-leaf]"), E = 0;
                  E < B.length;
                  E++
                ) {
                  var y = B[E];
                  if (eg.hasDOMNode(e, y)) {
                    D = y;
                    break;
                  }
                }
                D
                  ? ((s = D.closest('[data-slate-node="text"]')),
                    (l = (v = D).textContent.length),
                    v
                      .querySelectorAll("[data-slate-zero-width]")
                      .forEach((e) => {
                        l -= e.textContent.length;
                      }))
                  : (l = 1);
              }
              v &&
                l === v.textContent.length &&
                en &&
                "z" === v.getAttribute("data-slate-zero-width") &&
                null != (c = v.textContent) &&
                c.startsWith("\uFEFF") &&
                (o.hasAttribute("data-slate-zero-width") ||
                  (ei && null != (f = v.textContent) && f.endsWith("\n\n"))) &&
                l--;
            }
            if (en && !s && !n) {
              var w = o.hasAttribute("data-slate-node")
                ? o
                : o.closest("[data-slate-node]");
              if (w && eg.hasDOMNode(e, w, { editable: !0 })) {
                var A = eg.toSlateNode(e, w),
                  { path: b, offset: F } = d.KE.start(e, eg.findPath(e, A));
                return (
                  w.querySelector("[data-slate-leaf]") || (F = a),
                  { path: b, offset: F }
                );
              }
            }
            if (!s) {
              if (i) return null;
              throw Error(
                "Cannot resolve a Slate point from DOM point: ".concat(t),
              );
            }
            var _ = eg.toSlateNode(e, s);
            return { path: eg.findPath(e, _), offset: l };
          },
          toSlateRange(e, t, r) {
            var n,
              i,
              u,
              a,
              o,
              s,
              { exactMatch: l, suppressThrow: c } = r;
            if (
              ((V(t) ? t.anchorNode : t.startContainer) &&
                (V(t)
                  ? ((n = t.anchorNode),
                    (i = t.anchorOffset),
                    (u = t.focusNode),
                    (a = t.focusOffset),
                    (o =
                      eo &&
                      ((e) => {
                        for (var t = e && e.parentNode; t; ) {
                          if ("[object ShadowRoot]" === t.toString()) return !0;
                          t = t.parentNode;
                        }
                        return !1;
                      })(n)
                        ? t.anchorNode === t.focusNode &&
                          t.anchorOffset === t.focusOffset
                        : t.isCollapsed))
                  : ((n = t.startContainer),
                    (i = t.startOffset),
                    (u = t.endContainer),
                    (a = t.endOffset),
                    (o = t.collapsed))),
              null == n || null == u || null == i || null == a)
            )
              throw Error(
                "Cannot resolve a Slate range from DOM range: ".concat(t),
              );
            "getAttribute" in u &&
              "false" === u.getAttribute("contenteditable") &&
              ((u = n),
              (a = (null == (s = n.textContent) ? void 0 : s.length) || 0));
            var f = eg.toSlatePoint(e, [n, i], {
              exactMatch: l,
              suppressThrow: c,
            });
            if (!f) return null;
            var h = o
              ? f
              : eg.toSlatePoint(e, [u, a], { exactMatch: l, suppressThrow: c });
            if (!h) return null;
            if (ei && !o && n !== u) {
              var p = d.KE.isEnd(e, f, f.path),
                g = d.KE.isStart(e, h, h.path);
              p && (f = d.KE.after(e, f) || f),
                g && (h = d.KE.before(e, h) || h);
            }
            var D = { anchor: f, focus: h };
            return (
              d.Q6.isExpanded(D) &&
                d.Q6.isForward(D) &&
                W(u) &&
                d.KE.void(e, { at: D.focus, mode: "highest" }) &&
                (D = d.KE.unhangRange(e, D, { voids: !0 })),
              D
            );
          },
          hasRange(e, t) {
            var { anchor: r, focus: n } = t;
            return d.KE.hasPath(e, r.path) && d.KE.hasPath(e, n.path);
          },
          hasTarget: (e, t) => U(t) && eg.hasDOMNode(e, t),
          hasEditableTarget: (e, t) =>
            U(t) && eg.hasDOMNode(e, t, { editable: !0 }),
          hasSelectableTarget: (e, t) =>
            eg.hasEditableTarget(e, t) ||
            eg.isTargetInsideNonReadonlyVoid(e, t),
          isTargetInsideNonReadonlyVoid(e, t) {
            if (k.get(e)) return !1;
            var r = eg.hasTarget(e, t) && eg.toSlateNode(e, t);
            return d.Hg.isElement(r) && d.KE.isVoid(e, r);
          },
          androidScheduleFlush(e) {
            var t;
            null == (t = S.get(e)) || t();
          },
          androidPendingDiffs: (e) => N.get(e),
        },
        eD = ["anchor", "focus"],
        ev = ["anchor", "focus"],
        em = (e, t) => {
          var r = D(e, eD),
            n = D(t, ev);
          return (
            e[I] === t[I] &&
            Object.keys(r).length === Object.keys(n).length &&
            Object.keys(r).every((e) => n.hasOwnProperty(e) && r[e] === n[e])
          );
        },
        eC = eh ? l.useLayoutEffect : l.useEffect,
        eB = (e) => {
          var { isLast: t, leaf: r, parent: n, text: i } = e,
            u = eb(),
            a = eg.findPath(u, i),
            o = d.wA.parent(a),
            s = !0 === r[Z];
          return u.isVoid(n)
            ? l.createElement(ew, { length: d.bP.string(n).length })
            : "" !== r.text ||
                n.children[n.children.length - 1] !== i ||
                u.isInline(n) ||
                "" !== d.KE.string(u, o)
              ? "" === r.text
                ? l.createElement(ew, { isMarkPlaceholder: s })
                : t && "\n" === r.text.slice(-1)
                  ? l.createElement(eE, { isTrailing: !0, text: r.text })
                  : l.createElement(eE, { text: r.text })
              : l.createElement(ew, { isLineBreak: !0, isMarkPlaceholder: s });
        },
        eE = (e) => {
          var { text: t, isTrailing: r = !1 } = e,
            n = (0, l.useRef)(null),
            i = () => "".concat(null != t ? t : "").concat(r ? "\n" : ""),
            [u] = (0, l.useState)(i);
          return (
            eC(() => {
              var e = i();
              if (n.current && n.current.textContent !== e) {
                var t = n.current.firstChild;
                if (
                  t &&
                  t === n.current.lastChild &&
                  3 === t.nodeType &&
                  (t.data.startsWith(e) || e.startsWith(t.data))
                ) {
                  var r = Math.min(t.length, e.length);
                  t.replaceData(r, t.length - r, e.slice(r));
                } else n.current.textContent = e;
              }
            }),
            l.createElement(ey, { ref: n }, u)
          );
        },
        ey = (0, l.memo)(
          (0, l.forwardRef)((e, t) =>
            l.createElement(
              "span",
              { "data-slate-string": !0, ref: t },
              e.children,
            ),
          ),
        ),
        ew = (e) => {
          var {
              length: t = 0,
              isLineBreak: r = !1,
              isMarkPlaceholder: n = !1,
            } = e,
            i = {
              "data-slate-zero-width": r ? "n" : "z",
              "data-slate-length": t,
            };
          return (
            n && (i["data-slate-mark-placeholder"] = !0),
            l.createElement(
              "span",
              Object.assign({}, i),
              en && r ? null : "\uFEFF",
              r ? l.createElement("br", null) : null,
            )
          );
        },
        eA = (0, l.createContext)(null),
        eb = () => {
          var e = (0, l.useContext)(eA);
          if (!e)
            throw Error(
              "The `useSlateStatic` hook must be used inside the <Slate> component's context.",
            );
          return e;
        },
        eF = l.memo(
          (e) => {
            var {
                leaf: t,
                isLast: r,
                text: n,
                parent: i,
                renderPlaceholder: u,
                renderLeaf: a = (e) =>
                  l.createElement(e_, Object.assign({}, e)),
              } = e,
              o = (0, l.useRef)(null),
              s = (0, l.useRef)(null),
              c = eb(),
              d = (0, l.useRef)(null);
            (0, l.useEffect)(
              () => () => {
                d.current && d.current.disconnect();
              },
              [],
            ),
              (0, l.useEffect)(() => {
                var e = null == s ? void 0 : s.current;
                if (
                  (e ? w.set(c, e) : w.delete(c),
                  d.current
                    ? (d.current.disconnect(), e && d.current.observe(e))
                    : e &&
                      ((d.current = new (window.ResizeObserver || f.tb)(() => {
                        var e = M.get(c);
                        null == e || e();
                      })),
                      d.current.observe(e)),
                  !e && o.current)
                ) {
                  var t = M.get(c);
                  null == t || t();
                }
                return (
                  (o.current = s.current),
                  () => {
                    w.delete(c);
                  }
                );
              }, [s, t]);
            var h = l.createElement(eB, {
              isLast: r,
              leaf: t,
              parent: i,
              text: n,
            });
            if (t[I]) {
              var p = {
                children: t.placeholder,
                attributes: {
                  "data-slate-placeholder": !0,
                  style: {
                    position: "absolute",
                    pointerEvents: "none",
                    width: "100%",
                    maxWidth: "100%",
                    display: "block",
                    opacity: "0.333",
                    userSelect: "none",
                    textDecoration: "none",
                  },
                  contentEditable: !1,
                  ref: s,
                },
              };
              h = l.createElement(l.Fragment, null, u(p), h);
            }
            return a({
              attributes: { "data-slate-leaf": !0 },
              children: h,
              leaf: t,
              text: n,
            });
          },
          (e, t) =>
            t.parent === e.parent &&
            t.isLast === e.isLast &&
            t.renderLeaf === e.renderLeaf &&
            t.renderPlaceholder === e.renderPlaceholder &&
            t.text === e.text &&
            d.EY.equals(t.leaf, e.leaf) &&
            t.leaf[I] === e.leaf[I],
        ),
        e_ = (e) => {
          var { attributes: t, children: r } = e;
          return l.createElement("span", Object.assign({}, t), r);
        },
        ek = l.memo(
          (e) => {
            for (
              var {
                  decorations: t,
                  isLast: r,
                  parent: n,
                  renderPlaceholder: i,
                  renderLeaf: u,
                  text: a,
                } = e,
                o = eb(),
                s = (0, l.useRef)(null),
                c = d.EY.decorations(a, t),
                f = eg.findKey(o, a),
                h = [],
                p = 0;
              p < c.length;
              p++
            ) {
              var g = c[p];
              h.push(
                l.createElement(eF, {
                  isLast: r && p === c.length - 1,
                  key: "".concat(f.id, "-").concat(p),
                  renderPlaceholder: i,
                  leaf: g,
                  text: a,
                  parent: n,
                  renderLeaf: u,
                }),
              );
            }
            var D = (0, l.useCallback)(
              (e) => {
                var t = _.get(o);
                e
                  ? (null == t || t.set(f, e), b.set(a, e), A.set(e, a))
                  : (null == t || t.delete(f),
                    b.delete(a),
                    s.current && A.delete(s.current)),
                  (s.current = e);
              },
              [s, o, f, a],
            );
            return l.createElement(
              "span",
              { "data-slate-node": "text", ref: D },
              h,
            );
          },
          (e, t) =>
            t.parent === e.parent &&
            t.isLast === e.isLast &&
            t.renderLeaf === e.renderLeaf &&
            t.renderPlaceholder === e.renderPlaceholder &&
            t.text === e.text &&
            ((e, t) => {
              if (e.length !== t.length) return !1;
              for (var r = 0; r < e.length; r++) {
                var n = e[r],
                  i = t[r];
                if (
                  n.anchor.offset !== i.anchor.offset ||
                  n.focus.offset !== i.focus.offset ||
                  !em(n, i)
                )
                  return !1;
              }
              return !0;
            })(t.decorations, e.decorations),
        ),
        ex = l.memo(
          (e) => {
            var {
                decorations: t,
                element: r,
                renderElement: n = (e) =>
                  l.createElement(eO, Object.assign({}, e)),
                renderPlaceholder: u,
                renderLeaf: a,
                selection: o,
              } = e,
              s = eb(),
              c = eT(),
              f = s.isInline(r),
              h = eg.findKey(s, r),
              p = (0, l.useCallback)(
                (e) => {
                  var t = _.get(s);
                  e
                    ? (null == t || t.set(h, e), b.set(r, e), A.set(e, r))
                    : (null == t || t.delete(h), b.delete(r));
                },
                [s, h, r],
              ),
              g = eS({
                decorations: t,
                node: r,
                renderElement: n,
                renderPlaceholder: u,
                renderLeaf: a,
                selection: o,
              }),
              D = { "data-slate-node": "element", ref: p };
            if (
              (f && (D["data-slate-inline"] = !0), !f && d.KE.hasInlines(s, r))
            ) {
              var v = d.bP.string(r),
                m = i()(v);
              "rtl" === m && (D.dir = m);
            }
            if (d.KE.isVoid(s, r)) {
              (D["data-slate-void"] = !0), !c && f && (D.contentEditable = !1);
              var [[E]] = d.bP.texts(r);
              (g = l.createElement(
                f ? "span" : "div",
                {
                  "data-slate-spacer": !0,
                  style: {
                    height: "0",
                    color: "transparent",
                    outline: "none",
                    position: "absolute",
                  },
                },
                l.createElement(ek, {
                  renderPlaceholder: u,
                  decorations: [],
                  isLast: !1,
                  parent: r,
                  text: E,
                }),
              )),
                C.set(E, 0),
                B.set(E, r);
            }
            return n({
              attributes: D,
              children: g,
              element: r,
              decorations: t,
            });
          },
          (e, t) =>
            e.element === t.element &&
            e.renderElement === t.renderElement &&
            e.renderLeaf === t.renderLeaf &&
            e.renderPlaceholder === t.renderPlaceholder &&
            ((e, t) => {
              if (e.length !== t.length) return !1;
              for (var r = 0; r < e.length; r++) {
                var n = e[r],
                  i = t[r];
                if (!d.Q6.equals(n, i) || !em(n, i)) return !1;
              }
              return !0;
            })(e.decorations, t.decorations) &&
            (e.selection === t.selection ||
              (!!e.selection &&
                !!t.selection &&
                d.Q6.equals(e.selection, t.selection))),
        ),
        eO = (e) => {
          var { attributes: t, children: r, element: n } = e,
            i = eb().isInline(n) ? "span" : "div";
          return l.createElement(
            i,
            Object.assign({}, t, { style: { position: "relative" } }),
            r,
          );
        },
        eP = (0, l.createContext)(() => []),
        ez = (0, l.createContext)(!1),
        eS = (e) => {
          for (
            var {
                decorations: t,
                node: r,
                renderElement: n,
                renderPlaceholder: i,
                renderLeaf: u,
                selection: a,
              } = e,
              o = (0, l.useContext)(eP),
              s = eb(),
              c = eg.findPath(s, r),
              f = [],
              h = d.Hg.isElement(r) && !s.isInline(r) && d.KE.hasInlines(s, r),
              p =
                d.Hg.isElement(r) &&
                null != s.rendersTrailingNewline &&
                s.rendersTrailingNewline(r),
              g = 0;
            g < r.children.length;
            g++
          ) {
            var D = c.concat(g),
              v = r.children[g],
              m = eg.findKey(s, v),
              E = d.KE.range(s, D),
              y = a && d.Q6.intersection(E, a),
              w = o([v, D]);
            for (var A of t) {
              var b = d.Q6.intersection(A, E);
              b && w.push(b);
            }
            d.Hg.isElement(v)
              ? f.push(
                  l.createElement(
                    ez.Provider,
                    { key: "provider-".concat(m.id), value: !!y },
                    l.createElement(ex, {
                      decorations: w,
                      element: v,
                      key: m.id,
                      renderElement: n,
                      renderPlaceholder: i,
                      renderLeaf: u,
                      selection: y,
                    }),
                  ),
                )
              : f.push(
                  l.createElement(ek, {
                    decorations: w,
                    key: m.id,
                    isLast: (h || p) && g === r.children.length - 1,
                    parent: r,
                    renderPlaceholder: i,
                    renderLeaf: u,
                    text: v,
                  }),
                ),
              C.set(v, g),
              B.set(v, r);
          }
          return f;
        },
        ej = (0, l.createContext)(!1),
        eT = () => (0, l.useContext)(ej),
        eN = (0, l.createContext)(null),
        e$ = {
          bold: "mod+b",
          compose: ["down", "left", "right", "up", "backspace", "enter"],
          moveBackward: "left",
          moveForward: "right",
          moveWordBackward: "ctrl+left",
          moveWordForward: "ctrl+right",
          deleteBackward: "shift?+backspace",
          deleteForward: "shift?+delete",
          extendBackward: "shift+left",
          extendForward: "shift+right",
          italic: "mod+i",
          insertSoftBreak: "shift+enter",
          splitBlock: "enter",
          undo: "mod+z",
        },
        eR = {
          moveLineBackward: "opt+up",
          moveLineForward: "opt+down",
          moveWordBackward: "opt+left",
          moveWordForward: "opt+right",
          deleteBackward: ["ctrl+backspace", "ctrl+h"],
          deleteForward: ["ctrl+delete", "ctrl+d"],
          deleteLineBackward: "cmd+shift?+backspace",
          deleteLineForward: ["cmd+shift?+delete", "ctrl+k"],
          deleteWordBackward: "opt+shift?+backspace",
          deleteWordForward: "opt+shift?+delete",
          extendLineBackward: "opt+shift+up",
          extendLineForward: "opt+shift+down",
          redo: "cmd+shift+z",
          transposeCharacter: "ctrl+t",
        },
        eM = {
          deleteWordBackward: "ctrl+shift?+backspace",
          deleteWordForward: "ctrl+shift?+delete",
          redo: ["ctrl+y", "ctrl+shift+z"],
        },
        eI = (e) => {
          var t = e$[e],
            r = eR[e],
            n = eM[e],
            i = t && (0, h.Sn)(t),
            u = r && (0, h.Sn)(r),
            a = n && (0, h.Sn)(n);
          return (e) =>
            !!((i && i(e)) || (er && u && u(e)) || (!er && a && a(e)));
        },
        eZ = {
          isBold: eI("bold"),
          isCompose: eI("compose"),
          isMoveBackward: eI("moveBackward"),
          isMoveForward: eI("moveForward"),
          isDeleteBackward: eI("deleteBackward"),
          isDeleteForward: eI("deleteForward"),
          isDeleteLineBackward: eI("deleteLineBackward"),
          isDeleteLineForward: eI("deleteLineForward"),
          isDeleteWordBackward: eI("deleteWordBackward"),
          isDeleteWordForward: eI("deleteWordForward"),
          isExtendBackward: eI("extendBackward"),
          isExtendForward: eI("extendForward"),
          isExtendLineBackward: eI("extendLineBackward"),
          isExtendLineForward: eI("extendLineForward"),
          isItalic: eI("italic"),
          isMoveLineBackward: eI("moveLineBackward"),
          isMoveLineForward: eI("moveLineForward"),
          isMoveWordBackward: eI("moveWordBackward"),
          isMoveWordForward: eI("moveWordForward"),
          isRedo: eI("redo"),
          isSoftBreak: eI("insertSoftBreak"),
          isSplitBlock: eI("splitBlock"),
          isTransposeCharacter: eI("transposeCharacter"),
          isUndo: eI("undo"),
        },
        eK = {
          subtree: !0,
          childList: !0,
          characterData: !0,
          characterDataOldValue: !0,
        };
      class eL extends l.Component {
        constructor() {
          super(...arguments),
            (this.context = null),
            (this.manager = null),
            (this.mutationObserver = null);
        }
        observe() {
          var e,
            { node: t } = this.props;
          if (!t.current)
            throw Error(
              "Failed to attach MutationObserver, `node` is undefined",
            );
          null == (e = this.mutationObserver) || e.observe(t.current, eK);
        }
        componentDidMount() {
          var e,
            t,
            { receivedUserInput: r } = this.props,
            n = this.context;
          (this.manager =
            ((e = []),
            {
              registerMutations: (t) => {
                if (r.current) {
                  var i = t.filter((e) => G(n, e, t));
                  e.push(...i);
                }
              },
              restoreDOM: function () {
                e.length > 0 &&
                  (e.reverse().forEach((e) => {
                    "characterData" !== e.type &&
                      (e.removedNodes.forEach((t) => {
                        e.target.insertBefore(t, e.nextSibling);
                      }),
                      e.addedNodes.forEach((t) => {
                        e.target.removeChild(t);
                      }));
                  }),
                  t());
              },
              clear: (t = () => {
                e = [];
              }),
            })),
            (this.mutationObserver = new MutationObserver(
              this.manager.registerMutations,
            )),
            this.observe();
        }
        getSnapshotBeforeUpdate() {
          var e,
            t,
            r,
            n,
            i = null == (e = this.mutationObserver) ? void 0 : e.takeRecords();
          return (
            null != i &&
              i.length &&
              (null == (n = this.manager) || n.registerMutations(i)),
            null == (t = this.mutationObserver) || t.disconnect(),
            null == (r = this.manager) || r.restoreDOM(),
            null
          );
        }
        componentDidUpdate() {
          var e;
          null == (e = this.manager) || e.clear(), this.observe();
        }
        componentWillUnmount() {
          var e;
          null == (e = this.mutationObserver) || e.disconnect();
        }
        render() {
          return this.props.children;
        }
      }
      eL.contextType = eA;
      var eq = en
        ? eL
        : (e) => {
            var { children: t } = e;
            return l.createElement(l.Fragment, null, t);
          };
      function eW(e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1;
          n < t;
          n++
        )
          r[n - 1] = arguments[n];
        return r.reduce(
          (e, t) => e.slice(0, t.start) + t.text + e.slice(t.end),
          e,
        );
      }
      function eU(e, t) {
        var { start: r, end: n, text: i } = t,
          u = e.slice(r, n),
          a = (function (e, t) {
            for (var r = Math.min(e.length, t.length), n = 0; n < r; n++)
              if (e.charAt(n) !== t.charAt(n)) return n;
            return r;
          })(u, i),
          o = Math.min(u.length - a, i.length - a),
          s = (function (e, t, r) {
            for (var n = Math.min(e.length, t.length, r), i = 0; i < n; i++)
              if (e.charAt(e.length - i - 1) !== t.charAt(t.length - i - 1))
                return i;
            return n;
          })(u, i, o),
          l = { start: r + a, end: n - s, text: i.slice(a, i.length - s) };
        return l.start === l.end && 0 === l.text.length ? null : l;
      }
      function eV(e, t) {
        var { path: r, offset: n } = t;
        if (!d.KE.hasPath(e, r)) return null;
        var i = d.bP.get(e, r);
        if (!d.EY.isText(i)) return null;
        var u = d.KE.above(e, {
          match: (t) => d.Hg.isElement(t) && d.KE.isBlock(e, t),
          at: r,
        });
        if (!u) return null;
        for (; n > i.text.length; ) {
          var a = d.KE.next(e, { at: r, match: d.EY.isText });
          if (!a || !d.wA.isDescendant(a[1], u[1])) return null;
          (n -= i.text.length), (i = a[0]), (r = a[1]);
        }
        return { path: r, offset: n };
      }
      function eJ(e, t) {
        var r = eV(e, t.anchor);
        if (!r) return null;
        if (d.Q6.isCollapsed(t)) return { anchor: r, focus: r };
        var n = eV(e, t.focus);
        return n ? { anchor: r, focus: n } : null;
      }
      function eQ(e, t, r) {
        var n = N.get(e),
          i =
            null == n
              ? void 0
              : n.find((e) => {
                  var { path: r } = e;
                  return d.wA.equals(r, t.path);
                });
        if (!i || t.offset <= i.diff.start)
          return d.bR.transform(t, r, { affinity: "backward" });
        var { diff: u } = i;
        if (t.offset <= u.start + u.text.length) {
          var a = { path: t.path, offset: u.start },
            o = d.bR.transform(a, r, { affinity: "backward" });
          return o
            ? { path: o.path, offset: o.offset + t.offset - u.start }
            : null;
        }
        var s = {
            path: t.path,
            offset: t.offset - u.text.length + u.end - u.start,
          },
          l = d.bR.transform(s, r, { affinity: "backward" });
        return l
          ? "split_node" === r.type &&
            d.wA.equals(r.path, t.path) &&
            s.offset < r.position &&
            u.start < r.position
            ? l
            : {
                path: l.path,
                offset: l.offset + u.text.length - u.end + u.start,
              }
          : null;
      }
      function eH(e, t, r) {
        var n = eQ(e, t.anchor, r);
        if (!n) return null;
        if (d.Q6.isCollapsed(t)) return { anchor: n, focus: n };
        var i = eQ(e, t.focus, r);
        return i ? { anchor: n, focus: i } : null;
      }
      function eY(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function eX(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eY(Object(r), !0).forEach(function (t) {
                g(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eY(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      var eG = function () {},
        e0 = ["node"];
      function e1(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      var e2 = { subtree: !0, childList: !0, characterData: !0 },
        e3 = [
          "autoFocus",
          "decorate",
          "onDOMBeforeInput",
          "placeholder",
          "readOnly",
          "renderElement",
          "renderLeaf",
          "renderPlaceholder",
          "scrollSelectionIntoView",
          "style",
          "as",
          "disableDefaultStyles",
        ],
        e4 = ["text"];
      function e7(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function e9(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? e7(Object(r), !0).forEach(function (t) {
                g(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : e7(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      var e8 = (e) => l.createElement(l.Fragment, null, eS(e)),
        e6 = (e) => {
          var { attributes: t, children: r } = e;
          return l.createElement(
            "span",
            Object.assign({}, t),
            r,
            en && l.createElement("br", null),
          );
        },
        e5 = () => [],
        te = (e, t) => {
          if (
            t.getBoundingClientRect &&
            (!e.selection || (e.selection && d.Q6.isCollapsed(e.selection)))
          ) {
            var r = t.startContainer.parentElement,
              n = function (e) {
                var r = t.startContainer,
                  n = t.startOffset + e;
                if (3 !== r.nodeType || n < 0 || n + 1 > r.length) return null;
                var i = r.ownerDocument.createRange();
                return (
                  i.setStart(r, n),
                  i.setEnd(r, n + 1),
                  i.getClientRects().length > 0 ? i : null
                );
              },
              i = t;
            if (0 === t.getClientRects().length) {
              var u = n(0) || n(-1);
              if (null === u) return;
              i = u;
            }
            (r.getBoundingClientRect = i.getBoundingClientRect.bind(i)),
              (0, c.A)(r, { scrollMode: "if-needed" }),
              delete r.getBoundingClientRect;
          }
        },
        tt = (e, t) => {
          if (!t) return !1;
          var r = t(e);
          return null != r
            ? r
            : e.isDefaultPrevented() || e.isPropagationStopped();
        },
        tr = (0, l.createContext)(!1),
        tn = (0, l.createContext)({}),
        ti = ["editor", "children", "onChange", "value"],
        tu = (e, t) => {
          var r = (t.top + t.bottom) / 2;
          return e.top <= r && e.bottom >= r;
        },
        ta = (e, t, r) => {
          var n = eg.toDOMRange(e, t).getBoundingClientRect(),
            i = eg.toDOMRange(e, r).getBoundingClientRect();
          return tu(n, i) && tu(i, n);
        };
      function to(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ts(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? to(Object(r), !0).forEach(function (t) {
                g(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : to(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      var tl = (e, t) => {
        var r = [];
        for (var [n, i] of d.KE.levels(e, { at: t })) {
          var u = eg.findKey(e, n);
          r.push([i, u]);
        }
        return r;
      };
      r.d(
        t,
        {},
        {
          A: (e) => {
            var t,
              r,
              n,
              { editor: i, children: u, onChange: a, value: o } = e,
              s = D(e, ti),
              c = (0, l.useRef)(!1),
              [f, h] = l.useState(() => {
                if (!d.bP.isNodeList(o))
                  throw Error(
                    "[Slate] value is invalid! Expected a list of elements but got: ".concat(
                      d.h6.stringify(o),
                    ),
                  );
                if (!d.KE.isEditor(i))
                  throw Error(
                    "[Slate] editor is invalid! You passed: ".concat(
                      d.h6.stringify(i),
                    ),
                  );
                return (
                  (i.children = o), Object.assign(i, s), { v: 0, editor: i }
                );
              }),
              { selectorContext: p, onChange: g } =
                ((t = (0, l.useRef)([]).current),
                (r = (0, l.useRef)({ editor: i }).current),
                (n = (0, l.useCallback)((e) => {
                  (r.editor = e), t.forEach((t) => t(e));
                }, [])),
                {
                  selectorContext: (0, l.useMemo)(
                    () => ({
                      getSlate: () => r.editor,
                      addEventListener: (e) => (
                        t.push(e),
                        () => {
                          t.splice(t.indexOf(e), 1);
                        }
                      ),
                    }),
                    [t, r],
                  ),
                  onChange: n,
                }),
              v = (0, l.useCallback)(() => {
                a && a(i.children), h((e) => ({ v: e.v + 1, editor: i })), g(i);
              }, [a]);
            (0, l.useEffect)(
              () => (
                z.set(i, v),
                () => {
                  z.set(i, () => {}), (c.current = !0);
                }
              ),
              [v],
            );
            var [m, C] = (0, l.useState)(eg.isFocused(i));
            return (
              (0, l.useEffect)(() => {
                C(eg.isFocused(i));
              }),
              eC(() => {
                var e = () => C(eg.isFocused(i));
                return ee
                  ? (document.addEventListener("focusin", e),
                    document.addEventListener("focusout", e),
                    () => {
                      document.removeEventListener("focusin", e),
                        document.removeEventListener("focusout", e);
                    })
                  : (document.addEventListener("focus", e, !0),
                    document.addEventListener("blur", e, !0),
                    () => {
                      document.removeEventListener("focus", e, !0),
                        document.removeEventListener("blur", e, !0);
                    });
              }, []),
              l.createElement(
                tn.Provider,
                { value: p },
                l.createElement(
                  eN.Provider,
                  { value: f },
                  l.createElement(
                    eA.Provider,
                    { value: f.editor },
                    l.createElement(tr.Provider, { value: m }, u),
                  ),
                ),
              )
            );
          },
          Fo: (e) => {
            var t,
              r,
              n,
              u,
              o,
              c,
              f = (0, l.useCallback)(
                (e) => l.createElement(e6, Object.assign({}, e)),
                [],
              ),
              {
                autoFocus: h,
                decorate: p = e5,
                onDOMBeforeInput: v,
                placeholder: m,
                readOnly: C = !1,
                renderElement: B,
                renderLeaf: F,
                renderPlaceholder: _ = f,
                scrollSelectionIntoView: z = te,
                style: K = {},
                as: q = "div",
                disableDefaultStyles: J = !1,
              } = e,
              Q = D(e, e3),
              H = (() => {
                var e = (0, l.useContext)(eN);
                if (!e)
                  throw Error(
                    "The `useSlate` hook must be used inside the <Slate> component's context.",
                  );
                var { editor: t } = e;
                return t;
              })(),
              [Y, X] = (0, l.useState)(!1),
              ee = (0, l.useRef)(null),
              er = (0, l.useRef)([]),
              { onUserInput: ea, receivedUserInput: es } =
                ((t = eb()),
                (r = (0, l.useRef)(!1)),
                (n = (0, l.useRef)(0)),
                (u = (0, l.useCallback)(() => {
                  if (!r.current) {
                    r.current = !0;
                    var e = eg.getWindow(t);
                    e.cancelAnimationFrame(n.current),
                      (n.current = e.requestAnimationFrame(() => {
                        r.current = !1;
                      }));
                  }
                }, [])),
                (0, l.useEffect)(
                  () => () => cancelAnimationFrame(n.current),
                  [],
                ),
                { receivedUserInput: r, onUserInput: u }),
              [, el] = (0, l.useReducer)((e) => e + 1, 0);
            M.set(H, el), k.set(H, C);
            var eD = (0, l.useMemo)(
              () => ({
                isDraggingInternally: !1,
                isUpdatingSelection: !1,
                latestElement: null,
                hasMarkPlaceholder: !1,
              }),
              [],
            );
            (0, l.useLayoutEffect)(
              () => () => {
                null == eD ||
                  (null != eD.latestElement &&
                    (eD.latestElement.remove(), (eD.latestElement = null)));
              },
              [],
            ),
              (0, l.useEffect)(() => {
                ee.current && h && ee.current.focus();
              }, [h]);
            var ev = (0, l.useCallback)(
                s()(() => {
                  if (
                    (en || !eg.isComposing(H)) &&
                    (!eD.isUpdatingSelection ||
                      (null != eB && eB.isFlushing())) &&
                    !eD.isDraggingInternally
                  ) {
                    var e = eg.findDocumentOrShadowRoot(H),
                      { activeElement: t } = e,
                      r = eg.toDOMNode(H, H),
                      n = e.getSelection();
                    if (
                      (t === r
                        ? ((eD.latestElement = t), x.set(H, !0))
                        : x.delete(H),
                      !n)
                    )
                      return d.gB.deselect(H);
                    var { anchorNode: i, focusNode: u } = n,
                      a =
                        eg.hasEditableTarget(H, i) ||
                        eg.isTargetInsideNonReadonlyVoid(H, i),
                      o =
                        eg.hasEditableTarget(H, u) ||
                        eg.isTargetInsideNonReadonlyVoid(H, u);
                    if (a && o) {
                      var s = eg.toSlateRange(H, n, {
                        exactMatch: !1,
                        suppressThrow: !0,
                      });
                      s &&
                        (eg.isComposing(H) ||
                        (null != eB && eB.hasPendingChanges()) ||
                        (null != eB && eB.isFlushing())
                          ? null == eB || eB.handleUserSelect(s)
                          : d.gB.select(H, s));
                    }
                    !C || (a && o) || d.gB.deselect(H);
                  }
                }, 100),
                [C],
              ),
              em = (0, l.useMemo)(() => a()(ev, 0), [ev]),
              eB = (function (e) {
                var t,
                  { node: r } = e,
                  n = D(e, e0);
                if (!en) return null;
                var i = eb(),
                  u =
                    ((t = (0, l.useRef)(!1)),
                    (0, l.useEffect)(
                      () => (
                        (t.current = !0),
                        () => {
                          t.current = !1;
                        }
                      ),
                      [],
                    ),
                    t.current),
                  [a] = (0, l.useState)(() =>
                    (function (e) {
                      var {
                          editor: t,
                          scheduleOnDOMSelectionChange: r,
                          onDOMSelectionChange: n,
                        } = e,
                        i = !1,
                        u = null,
                        a = null,
                        o = null,
                        s = 0,
                        l = !1,
                        c = () => {
                          var e = R.get(t);
                          if ((R.delete(t), e)) {
                            var { selection: r } = t,
                              n = eJ(t, e);
                            !n || (r && d.Q6.equals(n, r)) || d.gB.select(t, n);
                          }
                        },
                        f = () => {
                          if (
                            (a && (clearTimeout(a), (a = null)),
                            o && (clearTimeout(o), (o = null)),
                            !v() && !D())
                          )
                            return void c();
                          i || ((i = !0), setTimeout(() => (i = !1))),
                            D() && (i = "action");
                          var e =
                            t.selection &&
                            d.KE.rangeRef(t, t.selection, {
                              affinity: "forward",
                            });
                          T.set(t, t.marks), eG($.get(t), N.get(t));
                          for (
                            var u = v();
                            (s = null == (f = N.get(t)) ? void 0 : f[0]);

                          ) {
                            var s,
                              f,
                              h,
                              p = j.get(t);
                            void 0 !== p && (j.delete(t), (t.marks = p)),
                              p && !1 === l && (l = null);
                            var g = (function (e) {
                              var { path: t, diff: r } = e;
                              return {
                                anchor: { path: t, offset: r.start },
                                focus: { path: t, offset: r.end },
                              };
                            })(s);
                            (t.selection && d.Q6.equals(t.selection, g)) ||
                              d.gB.select(t, g),
                              s.diff.text
                                ? d.KE.insertText(t, s.diff.text)
                                : d.KE.deleteFragment(t),
                              N.set(
                                t,
                                null == (h = N.get(t))
                                  ? void 0
                                  : h.filter((e) => {
                                      var { id: t } = e;
                                      return t !== s.id;
                                    }),
                              ),
                              !(function (e, t) {
                                var { path: r, diff: n } = t;
                                if (!d.KE.hasPath(e, r)) return !1;
                                var i = d.bP.get(e, r);
                                if (!d.EY.isText(i)) return !1;
                                if (
                                  n.start !== i.text.length ||
                                  0 === n.text.length
                                )
                                  return (
                                    i.text.slice(
                                      n.start,
                                      n.start + n.text.length,
                                    ) === n.text
                                  );
                                var u = d.wA.next(r);
                                if (!d.KE.hasPath(e, u)) return !1;
                                var a = d.bP.get(e, u);
                                return (
                                  d.EY.isText(a) && a.text.startsWith(n.text)
                                );
                              })(t, s) &&
                                ((u = !1),
                                $.delete(t),
                                T.delete(t),
                                (i = "action"),
                                R.delete(t),
                                r.cancel(),
                                n.cancel(),
                                null == e || e.unref());
                          }
                          var m = null == e ? void 0 : e.unref();
                          if (
                            (!m ||
                              R.get(t) ||
                              (t.selection && d.Q6.equals(m, t.selection)) ||
                              d.gB.select(t, m),
                            D())
                          )
                            return void (() => {
                              var e = $.get(t);
                              if (($.delete(t), e)) {
                                if (e.at) {
                                  var r = d.bR.isPoint(e.at)
                                    ? eV(t, e.at)
                                    : eJ(t, e.at);
                                  if (!r) return;
                                  var n = d.KE.range(t, r);
                                  (t.selection &&
                                    d.Q6.equals(t.selection, n)) ||
                                    d.gB.select(t, r);
                                }
                                e.run();
                              }
                            })();
                          u && r(), r.flush(), n.flush(), c();
                          var C = T.get(t);
                          T.delete(t),
                            void 0 !== C && ((t.marks = C), t.onChange());
                        },
                        h = function () {
                          var e =
                              arguments.length > 0 &&
                              void 0 !== arguments[0] &&
                              arguments[0],
                            r = w.get(t);
                          if (r) {
                            if (v() || e) {
                              r.style.display = "none";
                              return;
                            }
                            r.style.removeProperty("display");
                          }
                        },
                        p = (e, r) => {
                          var n,
                            i,
                            u,
                            a,
                            o,
                            l,
                            c,
                            f,
                            p = null != (f = N.get(t)) ? f : [];
                          N.set(t, p);
                          var g = d.bP.leaf(t, e),
                            D = p.findIndex((t) => d.wA.equals(t.path, e));
                          if (D < 0) {
                            eU(g.text, r) &&
                              p.push({ path: e, diff: r, id: s++ }),
                              h();
                            return;
                          }
                          var v =
                            ((n = g.text),
                            (i = p[D].diff),
                            (u = Math.min(i.start, r.start)),
                            (a = Math.max(
                              0,
                              Math.min(i.start + i.text.length, r.end) -
                                r.start,
                            )),
                            (o = eW(n, i, r)),
                            (l = Math.max(
                              r.start + r.text.length,
                              i.start +
                                i.text.length +
                                (i.start + i.text.length > r.start
                                  ? r.text.length
                                  : 0) -
                                a,
                            )),
                            (c = o.slice(u, l)),
                            eU(n, {
                              start: u,
                              end: Math.max(
                                i.end,
                                r.end - i.text.length + (i.end - i.start),
                              ),
                              text: c,
                            }));
                          if (!v) {
                            p.splice(D, 1), h();
                            return;
                          }
                          p[D] = eX(eX({}, p[D]), {}, { diff: v });
                        },
                        g = function (e) {
                          var { at: i } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {};
                          (l = !1),
                            R.delete(t),
                            r.cancel(),
                            n.cancel(),
                            D() && f(),
                            $.set(t, { at: i, run: e }),
                            (o = setTimeout(f));
                        },
                        D = () => !!$.get(t),
                        v = () => {
                          var e;
                          return !!(null != (e = N.get(t)) && e.length);
                        },
                        m = (e) => {
                          R.set(t, e), a && (clearTimeout(a), (a = null));
                          var { selection: r } = t;
                          if (e) {
                            var n =
                                !r ||
                                !d.wA.equals(r.anchor.path, e.anchor.path),
                              i =
                                !r ||
                                !d.wA.equals(
                                  r.anchor.path.slice(0, -1),
                                  e.anchor.path.slice(0, -1),
                                );
                            ((n && l) || i) && (l = !1),
                              (n || v()) && (a = setTimeout(f, 200));
                          }
                        },
                        C = () => {
                          D() || (o = setTimeout(f));
                        };
                      return {
                        flush: f,
                        scheduleFlush: C,
                        hasPendingDiffs: v,
                        hasPendingAction: D,
                        hasPendingChanges: () => D() || v(),
                        isFlushing: () => i,
                        handleUserSelect: m,
                        handleCompositionEnd: (e) => {
                          u && clearTimeout(u),
                            (u = setTimeout(() => {
                              O.set(t, !1), f();
                            }, 25));
                        },
                        handleCompositionStart: (e) => {
                          O.set(t, !0), u && (clearTimeout(u), (u = null));
                        },
                        handleDOMBeforeInput: (e) => {
                          a && (clearTimeout(a), (a = null));
                          var { inputType: r } = e,
                            n = null,
                            i = e.dataTransfer || e.data || void 0;
                          !1 !== l &&
                            "insertText" !== r &&
                            "insertCompositionText" !== r &&
                            (l = !1);
                          var [u] = e.getTargetRanges();
                          u &&
                            (n = eg.toSlateRange(t, u, {
                              exactMatch: !1,
                              suppressThrow: !0,
                            }));
                          var o = eg.getWindow(t).getSelection();
                          if (
                            (!n &&
                              o &&
                              ((u = o),
                              (n = eg.toSlateRange(t, o, {
                                exactMatch: !1,
                                suppressThrow: !0,
                              }))),
                            (n = null != (O = n) ? O : t.selection))
                          ) {
                            var s = !0;
                            if (r.startsWith("delete")) {
                              if (d.Q6.isExpanded(n)) {
                                var [c, f] = d.Q6.edges(n);
                                if (
                                  d.bP.leaf(t, c.path).text.length ===
                                    c.offset &&
                                  0 === f.offset
                                ) {
                                  var h = d.KE.next(t, {
                                    at: c.path,
                                    match: d.EY.isText,
                                  });
                                  h &&
                                    d.wA.equals(h[1], f.path) &&
                                    (n = { anchor: f, focus: f });
                                }
                              }
                              var D = r.endsWith("Backward")
                                  ? "backward"
                                  : "forward",
                                [v, B] = d.Q6.edges(n),
                                [E, y] = d.KE.leaf(t, v.path),
                                w = {
                                  text: "",
                                  start: v.offset,
                                  end: B.offset,
                                },
                                A = N.get(t),
                                b =
                                  null == A
                                    ? void 0
                                    : A.find((e) => d.wA.equals(e.path, y)),
                                F = b ? [b.diff, w] : [w];
                              if (
                                (0 === eW(E.text, ...F).length && (s = !1),
                                d.Q6.isExpanded(n))
                              ) {
                                if (
                                  s &&
                                  d.wA.equals(n.anchor.path, n.focus.path)
                                ) {
                                  var _ = {
                                    path: n.anchor.path,
                                    offset: v.offset,
                                  };
                                  return (
                                    m(d.KE.range(t, _, _)),
                                    p(n.anchor.path, {
                                      text: "",
                                      end: B.offset,
                                      start: v.offset,
                                    })
                                  );
                                }
                                return g(
                                  () =>
                                    d.KE.deleteFragment(t, { direction: D }),
                                  { at: n },
                                );
                              }
                            }
                            switch (r) {
                              case "deleteByComposition":
                              case "deleteByCut":
                              case "deleteByDrag":
                                return g(() => d.KE.deleteFragment(t), {
                                  at: n,
                                });
                              case "deleteContent":
                              case "deleteContentForward":
                                var { anchor: k } = n;
                                if (s && d.Q6.isCollapsed(n)) {
                                  var x = d.bP.leaf(t, k.path);
                                  if (k.offset < x.text.length)
                                    return p(k.path, {
                                      text: "",
                                      start: k.offset,
                                      end: k.offset + 1,
                                    });
                                }
                                return g(() => d.KE.deleteForward(t), {
                                  at: n,
                                });
                              case "deleteContentBackward":
                                var O,
                                  P,
                                  { anchor: z } = n,
                                  S = V(u)
                                    ? u.isCollapsed
                                    : !!(null != (P = u) && P.collapsed);
                                if (
                                  s &&
                                  S &&
                                  d.Q6.isCollapsed(n) &&
                                  z.offset > 0
                                )
                                  return p(z.path, {
                                    text: "",
                                    start: z.offset - 1,
                                    end: z.offset,
                                  });
                                return g(() => d.KE.deleteBackward(t), {
                                  at: n,
                                });
                              case "deleteEntireSoftLine":
                                return g(
                                  () => {
                                    d.KE.deleteBackward(t, { unit: "line" }),
                                      d.KE.deleteForward(t, { unit: "line" });
                                  },
                                  { at: n },
                                );
                              case "deleteHardLineBackward":
                                return g(
                                  () =>
                                    d.KE.deleteBackward(t, { unit: "block" }),
                                  { at: n },
                                );
                              case "deleteSoftLineBackward":
                                return g(
                                  () =>
                                    d.KE.deleteBackward(t, { unit: "line" }),
                                  { at: n },
                                );
                              case "deleteHardLineForward":
                                return g(
                                  () =>
                                    d.KE.deleteForward(t, { unit: "block" }),
                                  { at: n },
                                );
                              case "deleteSoftLineForward":
                                return g(
                                  () => d.KE.deleteForward(t, { unit: "line" }),
                                  { at: n },
                                );
                              case "deleteWordBackward":
                                return g(
                                  () =>
                                    d.KE.deleteBackward(t, { unit: "word" }),
                                  { at: n },
                                );
                              case "deleteWordForward":
                                return g(
                                  () => d.KE.deleteForward(t, { unit: "word" }),
                                  { at: n },
                                );
                              case "insertLineBreak":
                                return g(() => d.KE.insertSoftBreak(t), {
                                  at: n,
                                });
                              case "insertParagraph":
                                return g(() => d.KE.insertBreak(t), { at: n });
                              case "insertCompositionText":
                              case "deleteCompositionText":
                              case "insertFromComposition":
                              case "insertFromDrop":
                              case "insertFromPaste":
                              case "insertFromYank":
                              case "insertReplacementText":
                              case "insertText":
                                if (
                                  (null == i ? void 0 : i.constructor.name) ===
                                  "DataTransfer"
                                )
                                  return g(() => eg.insertData(t, i), {
                                    at: n,
                                  });
                                var T = null != i ? i : "";
                                if (
                                  (j.get(t) && (T = T.replace("\uFEFF", "")),
                                  "insertText" === r &&
                                    /.*\n.*\n$/.test(T) &&
                                    (T = T.slice(0, -1)),
                                  T.includes("\n"))
                                )
                                  return g(
                                    () => {
                                      var e = T.split("\n");
                                      e.forEach((r, n) => {
                                        r && d.KE.insertText(t, r),
                                          n !== e.length - 1 &&
                                            d.KE.insertSoftBreak(t);
                                      });
                                    },
                                    { at: n },
                                  );
                                if (d.wA.equals(n.anchor.path, n.focus.path)) {
                                  var [$, R] = d.Q6.edges(n),
                                    M = {
                                      start: $.offset,
                                      end: R.offset,
                                      text: T,
                                    };
                                  if (T && l && "insertCompositionText" === r) {
                                    var I = l.start + l.text.search(/\S|$/);
                                    M.start + M.text.search(/\S|$/) === I + 1 &&
                                    M.end === l.start + l.text.length
                                      ? ((M.start -= 1), (l = null), C())
                                      : (l = !1);
                                  } else
                                    l =
                                      "insertText" === r &&
                                      (null === l
                                        ? M
                                        : !!(l && d.Q6.isCollapsed(n)) &&
                                          l.end + l.text.length === $.offset &&
                                          eX(
                                            eX({}, l),
                                            {},
                                            { text: l.text + T },
                                          ));
                                  if (s) return void p($.path, M);
                                }
                                return g(() => d.KE.insertText(t, T), {
                                  at: n,
                                });
                            }
                          }
                        },
                        handleKeyDown: (e) => {
                          v() || (h(!0), setTimeout(h));
                        },
                        handleDomMutations: (e) => {
                          if (!(v() || D()) && e.some((r) => G(t, r, e))) {
                            var r;
                            null == (r = M.get(t)) || r();
                          }
                        },
                        handleInput: () => {
                          (D() || !v()) && f();
                        },
                      };
                    })(
                      (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var r = null != arguments[t] ? arguments[t] : {};
                          t % 2
                            ? e1(Object(r), !0).forEach(function (t) {
                                g(e, t, r[t]);
                              })
                            : Object.getOwnPropertyDescriptors
                              ? Object.defineProperties(
                                  e,
                                  Object.getOwnPropertyDescriptors(r),
                                )
                              : e1(Object(r)).forEach(function (t) {
                                  Object.defineProperty(
                                    e,
                                    t,
                                    Object.getOwnPropertyDescriptor(r, t),
                                  );
                                });
                        }
                        return e;
                      })({ editor: i }, n),
                    ),
                  );
                return (
                  !(function (e, t, r) {
                    var [n] = (0, l.useState)(() => new MutationObserver(t));
                    eC(() => {
                      n.takeRecords();
                    }),
                      (0, l.useEffect)(() => {
                        if (!e.current)
                          throw Error(
                            "Failed to attach MutationObserver, `node` is undefined",
                          );
                        return n.observe(e.current, r), () => n.disconnect();
                      }, []);
                  })(r, a.handleDomMutations, e2),
                  S.set(i, a.scheduleFlush),
                  u && a.flush(),
                  a
                );
              })({
                node: ee,
                onDOMSelectionChange: ev,
                scheduleOnDOMSelectionChange: em,
              });
            eC(() => {
              ee.current && (e = L(ee.current))
                ? (E.set(H, e),
                  y.set(H, ee.current),
                  b.set(H, ee.current),
                  A.set(ee.current, H))
                : b.delete(H);
              var e,
                { selection: t } = H,
                r = eg.findDocumentOrShadowRoot(H).getSelection();
              if (
                !(
                  !r ||
                  !eg.isFocused(H) ||
                  (null != eB && eB.hasPendingAction())
                )
              ) {
                var n = (e) => {
                    var n = "None" !== r.type;
                    if (t || n) {
                      var i = y.get(H),
                        u = !1;
                      if (
                        (i.contains(r.anchorNode) &&
                          i.contains(r.focusNode) &&
                          (u = !0),
                        n && u && t && !e)
                      ) {
                        var a = eg.toSlateRange(H, r, {
                            exactMatch: !0,
                            suppressThrow: !0,
                          }),
                          o =
                            (null == r.anchorNode ||
                              3 !== r.anchorNode.nodeType ||
                              null == r.focusNode ||
                              3 !== r.focusNode.nodeType) &&
                            !eg.isComposing(H);
                        if (a && d.Q6.equals(a, t) && !o) {
                          if (!eD.hasMarkPlaceholder) return;
                          var s,
                            { anchorNode: l } = r;
                          if (
                            null != l &&
                            null != (s = l.parentElement) &&
                            s.hasAttribute("data-slate-mark-placeholder")
                          )
                            return;
                        }
                      }
                      if (t && !eg.hasRange(H, t)) {
                        H.selection = eg.toSlateRange(H, r, {
                          exactMatch: !1,
                          suppressThrow: !0,
                        });
                        return;
                      }
                      eD.isUpdatingSelection = !0;
                      var c = t && eg.toDOMRange(H, t);
                      return (
                        c
                          ? (d.Q6.isBackward(t)
                              ? r.setBaseAndExtent(
                                  c.endContainer,
                                  c.endOffset,
                                  c.startContainer,
                                  c.startOffset,
                                )
                              : r.setBaseAndExtent(
                                  c.startContainer,
                                  c.startOffset,
                                  c.endContainer,
                                  c.endOffset,
                                ),
                            z(H, c))
                          : r.removeAllRanges(),
                        c
                      );
                    }
                  },
                  i = n(),
                  u = (null == eB ? void 0 : eB.isFlushing()) === "action";
                if (!en || !u)
                  return void setTimeout(() => {
                    i && ei && eg.toDOMNode(H, H).focus(),
                      (eD.isUpdatingSelection = !1);
                  });
                var a = null,
                  o = requestAnimationFrame(() => {
                    if (u) {
                      var e = (e) => {
                        try {
                          eg.toDOMNode(H, H).focus(), n(e);
                        } catch (e) {}
                      };
                      e(),
                        (a = setTimeout(() => {
                          e(!0), (eD.isUpdatingSelection = !1);
                        }));
                    }
                  });
                return () => {
                  cancelAnimationFrame(o), a && clearTimeout(a);
                };
              }
            });
            var eE = (0, l.useCallback)(
                (e) => {
                  if (
                    (ea(),
                    !C &&
                      eg.hasEditableTarget(H, e.target) &&
                      !((e, t) => {
                        if (!t) return !1;
                        var r = t(e);
                        return null != r ? r : e.defaultPrevented;
                      })(e, v))
                  ) {
                    if (eB) return eB.handleDOMBeforeInput(e);
                    em.flush(), ev.flush();
                    var { selection: t } = H,
                      { inputType: r } = e,
                      n = e.dataTransfer || e.data || void 0,
                      i =
                        "insertCompositionText" === r ||
                        "deleteCompositionText" === r;
                    if (!(i && eg.isComposing(H))) {
                      var u = !1;
                      if (
                        "insertText" === r &&
                        t &&
                        d.Q6.isCollapsed(t) &&
                        e.data &&
                        1 === e.data.length &&
                        /[a-z ]/i.test(e.data) &&
                        0 !== t.anchor.offset
                      ) {
                        (u = !0), H.marks && (u = !1);
                        var { anchor: a } = t,
                          [o, s] = eg.toDOMPoint(H, a),
                          l =
                            null == (h = o.parentElement)
                              ? void 0
                              : h.closest("a"),
                          c = eg.getWindow(H);
                        if (u && l && eg.hasDOMNode(H, l)) {
                          var f,
                            h,
                            p,
                            g,
                            D =
                              null == c
                                ? void 0
                                : c.document
                                    .createTreeWalker(l, NodeFilter.SHOW_TEXT)
                                    .lastChild();
                          D === o &&
                            (null == (g = D.textContent)
                              ? void 0
                              : g.length) === s &&
                            (u = !1);
                        }
                        if (
                          u &&
                          o.parentElement &&
                          (null == c ||
                          null == (p = c.getComputedStyle(o.parentElement))
                            ? void 0
                            : p.whiteSpace) === "pre"
                        ) {
                          var m = d.KE.above(H, {
                            at: a.path,
                            match: (e) =>
                              d.Hg.isElement(e) && d.KE.isBlock(H, e),
                          });
                          m && d.bP.string(m[0]).includes("	") && (u = !1);
                        }
                      }
                      if (!r.startsWith("delete") || r.startsWith("deleteBy")) {
                        var [B] = e.getTargetRanges();
                        if (B) {
                          var E = eg.toSlateRange(H, B, {
                            exactMatch: !1,
                            suppressThrow: !1,
                          });
                          if (!t || !d.Q6.equals(t, E)) {
                            u = !1;
                            var y =
                              !i &&
                              H.selection &&
                              d.KE.rangeRef(H, H.selection);
                            d.gB.select(H, E), y && P.set(H, y);
                          }
                        }
                      }
                      if (!i) {
                        if (
                          (u || e.preventDefault(),
                          t && d.Q6.isExpanded(t) && r.startsWith("delete"))
                        ) {
                          var w = r.endsWith("Backward")
                            ? "backward"
                            : "forward";
                          d.KE.deleteFragment(H, { direction: w });
                          return;
                        }
                        switch (r) {
                          case "deleteByComposition":
                          case "deleteByCut":
                          case "deleteByDrag":
                            d.KE.deleteFragment(H);
                            break;
                          case "deleteContent":
                          case "deleteContentForward":
                            d.KE.deleteForward(H);
                            break;
                          case "deleteContentBackward":
                            d.KE.deleteBackward(H);
                            break;
                          case "deleteEntireSoftLine":
                            d.KE.deleteBackward(H, { unit: "line" }),
                              d.KE.deleteForward(H, { unit: "line" });
                            break;
                          case "deleteHardLineBackward":
                            d.KE.deleteBackward(H, { unit: "block" });
                            break;
                          case "deleteSoftLineBackward":
                            d.KE.deleteBackward(H, { unit: "line" });
                            break;
                          case "deleteHardLineForward":
                            d.KE.deleteForward(H, { unit: "block" });
                            break;
                          case "deleteSoftLineForward":
                            d.KE.deleteForward(H, { unit: "line" });
                            break;
                          case "deleteWordBackward":
                            d.KE.deleteBackward(H, { unit: "word" });
                            break;
                          case "deleteWordForward":
                            d.KE.deleteForward(H, { unit: "word" });
                            break;
                          case "insertLineBreak":
                            d.KE.insertSoftBreak(H);
                            break;
                          case "insertParagraph":
                            d.KE.insertBreak(H);
                            break;
                          case "insertFromComposition":
                          case "insertFromDrop":
                          case "insertFromPaste":
                          case "insertFromYank":
                          case "insertReplacementText":
                          case "insertText":
                            "insertFromComposition" === r &&
                              eg.isComposing(H) &&
                              (X(!1), O.set(H, !1)),
                              (null == n ? void 0 : n.constructor.name) ===
                              "DataTransfer"
                                ? eg.insertData(H, n)
                                : "string" == typeof n &&
                                  (u
                                    ? er.current.push(() =>
                                        d.KE.insertText(H, n),
                                      )
                                    : d.KE.insertText(H, n));
                        }
                        var A = null == (f = P.get(H)) ? void 0 : f.unref();
                        P.delete(H),
                          !A ||
                            (H.selection && d.Q6.equals(H.selection, A)) ||
                            d.gB.select(H, A);
                      }
                    }
                  }
                },
                [C, v],
              ),
              ey = (0, l.useCallback)(
                (e) => {
                  null == e
                    ? (ev.cancel(),
                      em.cancel(),
                      y.delete(H),
                      b.delete(H),
                      ee.current &&
                        ep &&
                        ee.current.removeEventListener("beforeinput", eE))
                    : ep && e.addEventListener("beforeinput", eE),
                    (ee.current = e);
                },
                [ee, eE, ev, em],
              );
            eC(() => {
              var e = eg.getWindow(H);
              return (
                e.document.addEventListener("selectionchange", em),
                () => {
                  e.document.removeEventListener("selectionchange", em);
                }
              );
            }, [em]);
            var ew = p([H, []]);
            if (
              m &&
              1 === H.children.length &&
              1 === Array.from(d.bP.texts(H)).length &&
              "" === d.bP.string(H) &&
              !Y
            ) {
              var eA = d.KE.start(H, []);
              ew.push({ [I]: !0, placeholder: m, anchor: eA, focus: eA });
            }
            var { marks: eF } = H;
            if (
              ((eD.hasMarkPlaceholder = !1),
              H.selection && d.Q6.isCollapsed(H.selection) && eF)
            ) {
              var { anchor: e_ } = H.selection,
                ek = d.bP.leaf(H, e_.path),
                ex = D(ek, e4);
              if (!d.EY.equals(ek, eF, { loose: !0 })) {
                eD.hasMarkPlaceholder = !0;
                var eO = Object.fromEntries(
                  Object.keys(ex).map((e) => [e, null]),
                );
                ew.push(
                  e9(
                    e9(e9({ [Z]: !0 }, eO), eF),
                    {},
                    { anchor: e_, focus: e_ },
                  ),
                );
              }
            }
            (0, l.useEffect)(() => {
              setTimeout(() => {
                var { selection: e } = H;
                if (e) {
                  var { anchor: t } = e,
                    r = d.bP.leaf(H, t.path);
                  if (eF && !d.EY.equals(r, eF, { loose: !0 }))
                    return void j.set(H, eF);
                }
                j.delete(H);
              });
            });
            var ez =
              null == (o = w.get(H)) || null == (c = o.getBoundingClientRect())
                ? void 0
                : c.height;
            return l.createElement(
              ej.Provider,
              { value: C },
              l.createElement(
                eP.Provider,
                { value: p },
                l.createElement(
                  eq,
                  { node: ee, receivedUserInput: es },
                  l.createElement(
                    q,
                    Object.assign(
                      {
                        role: C ? void 0 : "textbox",
                        "aria-multiline": !C || void 0,
                      },
                      Q,
                      {
                        spellCheck: (!!ep || !eh) && Q.spellCheck,
                        autoCorrect: ep || !eh ? Q.autoCorrect : "false",
                        autoCapitalize: ep || !eh ? Q.autoCapitalize : "false",
                        "data-slate-editor": !0,
                        "data-slate-node": "value",
                        contentEditable: !C,
                        zindex: -1,
                        suppressContentEditableWarning: !0,
                        ref: ey,
                        style: e9(
                          e9(
                            {},
                            J
                              ? {}
                              : e9(
                                  {
                                    position: "relative",
                                    outline: "none",
                                    whiteSpace: "pre-wrap",
                                    wordWrap: "break-word",
                                  },
                                  ez ? { minHeight: ez } : {},
                                ),
                          ),
                          K,
                        ),
                        onBeforeInput: (0, l.useCallback)(
                          (e) => {
                            if (
                              !ep &&
                              !C &&
                              !tt(e, Q.onBeforeInput) &&
                              eg.hasSelectableTarget(H, e.target) &&
                              (e.preventDefault(), !eg.isComposing(H))
                            ) {
                              var t = e.data;
                              d.KE.insertText(H, t);
                            }
                          },
                          [C],
                        ),
                        onInput: (0, l.useCallback)((e) => {
                          if (!tt(e, Q.onInput)) {
                            if (eB) return void eB.handleInput();
                            for (var t of er.current) t();
                            er.current = [];
                          }
                        }, []),
                        onBlur: (0, l.useCallback)(
                          (e) => {
                            if (
                              C ||
                              eD.isUpdatingSelection ||
                              !eg.hasSelectableTarget(H, e.target) ||
                              tt(e, Q.onBlur)
                            )
                              return;
                            var t = eg.findDocumentOrShadowRoot(H);
                            if (eD.latestElement !== t.activeElement) {
                              var { relatedTarget: r } = e;
                              if (
                                r !== eg.toDOMNode(H, H) &&
                                !(W(r) && r.hasAttribute("data-slate-spacer"))
                              ) {
                                if (null != r && U(r) && eg.hasDOMNode(H, r)) {
                                  var n = eg.toSlateNode(H, r);
                                  if (d.Hg.isElement(n) && !H.isVoid(n)) return;
                                }
                                if (eu) {
                                  var i = t.getSelection();
                                  null == i || i.removeAllRanges();
                                }
                                x.delete(H);
                              }
                            }
                          },
                          [C, Q.onBlur],
                        ),
                        onClick: (0, l.useCallback)(
                          (e) => {
                            if (
                              eg.hasTarget(H, e.target) &&
                              !tt(e, Q.onClick) &&
                              U(e.target)
                            ) {
                              var t = eg.toSlateNode(H, e.target),
                                r = eg.findPath(H, t);
                              if (d.KE.hasPath(H, r) && d.bP.get(H, r) === t) {
                                if (3 === e.detail && r.length >= 1) {
                                  var n = r;
                                  if (
                                    !(d.Hg.isElement(t) && d.KE.isBlock(H, t))
                                  ) {
                                    var i,
                                      u = d.KE.above(H, {
                                        match: (e) =>
                                          d.Hg.isElement(e) &&
                                          d.KE.isBlock(H, e),
                                        at: r,
                                      });
                                    n =
                                      null != (i = null == u ? void 0 : u[1])
                                        ? i
                                        : r.slice(0, 1);
                                  }
                                  var a = d.KE.range(H, n);
                                  d.gB.select(H, a);
                                  return;
                                }
                                if (!C) {
                                  var o = d.KE.start(H, r),
                                    s = d.KE.end(H, r),
                                    l = d.KE.void(H, { at: o }),
                                    c = d.KE.void(H, { at: s });
                                  if (l && c && d.wA.equals(l[1], c[1])) {
                                    var f = d.KE.range(H, o);
                                    d.gB.select(H, f);
                                  }
                                }
                              }
                            }
                          },
                          [C, Q.onClick],
                        ),
                        onCompositionEnd: (0, l.useCallback)(
                          (e) => {
                            if (
                              eg.hasSelectableTarget(H, e.target) &&
                              (eg.isComposing(H) && (X(!1), O.set(H, !1)),
                              null == eB || eB.handleCompositionEnd(e),
                              !tt(e, Q.onCompositionEnd) &&
                                !en &&
                                !eu &&
                                !ec &&
                                !et &&
                                !ef &&
                                !ed) &&
                              e.data
                            ) {
                              var t = j.get(H);
                              j.delete(H),
                                void 0 !== t &&
                                  (T.set(H, H.marks), (H.marks = t)),
                                d.KE.insertText(H, e.data);
                              var r = T.get(H);
                              T.delete(H), void 0 !== r && (H.marks = r);
                            }
                          },
                          [Q.onCompositionEnd],
                        ),
                        onCompositionUpdate: (0, l.useCallback)(
                          (e) => {
                            !eg.hasSelectableTarget(H, e.target) ||
                              tt(e, Q.onCompositionUpdate) ||
                              eg.isComposing(H) ||
                              (X(!0), O.set(H, !0));
                          },
                          [Q.onCompositionUpdate],
                        ),
                        onCompositionStart: (0, l.useCallback)(
                          (e) => {
                            if (
                              eg.hasSelectableTarget(H, e.target) &&
                              (null == eB || eB.handleCompositionStart(e),
                              !tt(e, Q.onCompositionStart) && !en)
                            ) {
                              X(!0);
                              var { selection: t } = H;
                              if (t) {
                                if (d.Q6.isExpanded(t))
                                  return void d.KE.deleteFragment(H);
                                var r = d.KE.above(H, {
                                  match: (e) =>
                                    d.Hg.isElement(e) && d.KE.isInline(H, e),
                                  mode: "highest",
                                });
                                if (r) {
                                  var [, n] = r;
                                  if (d.KE.isEnd(H, t.anchor, n)) {
                                    var i = d.KE.after(H, n);
                                    d.gB.setSelection(H, {
                                      anchor: i,
                                      focus: i,
                                    });
                                  }
                                }
                              }
                            }
                          },
                          [Q.onCompositionStart],
                        ),
                        onCopy: (0, l.useCallback)(
                          (e) => {
                            eg.hasSelectableTarget(H, e.target) &&
                              !tt(e, Q.onCopy) &&
                              (e.preventDefault(),
                              eg.setFragmentData(H, e.clipboardData, "copy"));
                          },
                          [Q.onCopy],
                        ),
                        onCut: (0, l.useCallback)(
                          (e) => {
                            if (
                              !C &&
                              eg.hasSelectableTarget(H, e.target) &&
                              !tt(e, Q.onCut)
                            ) {
                              e.preventDefault(),
                                eg.setFragmentData(H, e.clipboardData, "cut");
                              var { selection: t } = H;
                              if (t)
                                if (d.Q6.isExpanded(t)) d.KE.deleteFragment(H);
                                else {
                                  var r = d.bP.parent(H, t.anchor.path);
                                  d.KE.isVoid(H, r) && d.gB.delete(H);
                                }
                            }
                          },
                          [C, Q.onCut],
                        ),
                        onDragOver: (0, l.useCallback)(
                          (e) => {
                            if (
                              eg.hasTarget(H, e.target) &&
                              !tt(e, Q.onDragOver)
                            ) {
                              var t = eg.toSlateNode(H, e.target);
                              d.Hg.isElement(t) &&
                                d.KE.isVoid(H, t) &&
                                e.preventDefault();
                            }
                          },
                          [Q.onDragOver],
                        ),
                        onDragStart: (0, l.useCallback)(
                          (e) => {
                            if (
                              !C &&
                              eg.hasTarget(H, e.target) &&
                              !tt(e, Q.onDragStart)
                            ) {
                              var t = eg.toSlateNode(H, e.target),
                                r = eg.findPath(H, t);
                              if (
                                (d.Hg.isElement(t) && d.KE.isVoid(H, t)) ||
                                d.KE.void(H, { at: r, voids: !0 })
                              ) {
                                var n = d.KE.range(H, r);
                                d.gB.select(H, n);
                              }
                              (eD.isDraggingInternally = !0),
                                eg.setFragmentData(H, e.dataTransfer, "drag");
                            }
                          },
                          [C, Q.onDragStart],
                        ),
                        onDrop: (0, l.useCallback)(
                          (e) => {
                            if (
                              !C &&
                              eg.hasTarget(H, e.target) &&
                              !tt(e, Q.onDrop)
                            ) {
                              e.preventDefault();
                              var t = H.selection,
                                r = eg.findEventRange(H, e),
                                n = e.dataTransfer;
                              d.gB.select(H, r),
                                eD.isDraggingInternally &&
                                  t &&
                                  !d.Q6.equals(t, r) &&
                                  !d.KE.void(H, { at: r, voids: !0 }) &&
                                  d.gB.delete(H, { at: t }),
                                eg.insertData(H, n),
                                eg.isFocused(H) || eg.focus(H);
                            }
                            eD.isDraggingInternally = !1;
                          },
                          [C, Q.onDrop],
                        ),
                        onDragEnd: (0, l.useCallback)(
                          (e) => {
                            !C &&
                              eD.isDraggingInternally &&
                              Q.onDragEnd &&
                              eg.hasTarget(H, e.target) &&
                              Q.onDragEnd(e),
                              (eD.isDraggingInternally = !1);
                          },
                          [C, Q.onDragEnd],
                        ),
                        onFocus: (0, l.useCallback)(
                          (e) => {
                            if (
                              !C &&
                              !eD.isUpdatingSelection &&
                              eg.hasEditableTarget(H, e.target) &&
                              !tt(e, Q.onFocus)
                            ) {
                              var t = eg.toDOMNode(H, H);
                              if (
                                ((eD.latestElement =
                                  eg.findDocumentOrShadowRoot(H).activeElement),
                                ei && e.target !== t)
                              )
                                return void t.focus();
                              x.set(H, !0);
                            }
                          },
                          [C, Q.onFocus],
                        ),
                        onKeyDown: (0, l.useCallback)(
                          (e) => {
                            if (!C && eg.hasEditableTarget(H, e.target)) {
                              null == eB || eB.handleKeyDown(e);
                              var { nativeEvent: t } = e;
                              if (
                                (eg.isComposing(H) &&
                                  !1 === t.isComposing &&
                                  (O.set(H, !1), X(!1)),
                                !(tt(e, Q.onKeyDown) || eg.isComposing(H)))
                              ) {
                                var { selection: r } = H,
                                  n =
                                    H.children[
                                      null !== r ? r.focus.path[0] : 0
                                    ],
                                  u = "rtl" === i()(d.bP.string(n));
                                if (eZ.isRedo(t)) {
                                  e.preventDefault(),
                                    "function" == typeof H.redo && H.redo();
                                  return;
                                }
                                if (eZ.isUndo(t)) {
                                  e.preventDefault(),
                                    "function" == typeof H.undo && H.undo();
                                  return;
                                }
                                if (eZ.isMoveLineBackward(t)) {
                                  e.preventDefault(),
                                    d.gB.move(H, { unit: "line", reverse: !0 });
                                  return;
                                }
                                if (eZ.isMoveLineForward(t)) {
                                  e.preventDefault(),
                                    d.gB.move(H, { unit: "line" });
                                  return;
                                }
                                if (eZ.isExtendLineBackward(t)) {
                                  e.preventDefault(),
                                    d.gB.move(H, {
                                      unit: "line",
                                      edge: "focus",
                                      reverse: !0,
                                    });
                                  return;
                                }
                                if (eZ.isExtendLineForward(t)) {
                                  e.preventDefault(),
                                    d.gB.move(H, {
                                      unit: "line",
                                      edge: "focus",
                                    });
                                  return;
                                }
                                if (eZ.isMoveBackward(t)) {
                                  e.preventDefault(),
                                    r && d.Q6.isCollapsed(r)
                                      ? d.gB.move(H, { reverse: !u })
                                      : d.gB.collapse(H, { edge: "start" });
                                  return;
                                }
                                if (eZ.isMoveForward(t)) {
                                  e.preventDefault(),
                                    r && d.Q6.isCollapsed(r)
                                      ? d.gB.move(H, { reverse: u })
                                      : d.gB.collapse(H, { edge: "end" });
                                  return;
                                }
                                if (eZ.isMoveWordBackward(t)) {
                                  e.preventDefault(),
                                    r &&
                                      d.Q6.isExpanded(r) &&
                                      d.gB.collapse(H, { edge: "focus" }),
                                    d.gB.move(H, { unit: "word", reverse: !u });
                                  return;
                                }
                                if (eZ.isMoveWordForward(t)) {
                                  e.preventDefault(),
                                    r &&
                                      d.Q6.isExpanded(r) &&
                                      d.gB.collapse(H, { edge: "focus" }),
                                    d.gB.move(H, { unit: "word", reverse: u });
                                  return;
                                }
                                if (ep) {
                                  if (
                                    (eo || eu) &&
                                    r &&
                                    (eZ.isDeleteBackward(t) ||
                                      eZ.isDeleteForward(t)) &&
                                    d.Q6.isCollapsed(r)
                                  ) {
                                    var a = d.bP.parent(H, r.anchor.path);
                                    if (
                                      d.Hg.isElement(a) &&
                                      d.KE.isVoid(H, a) &&
                                      (d.KE.isInline(H, a) ||
                                        d.KE.isBlock(H, a))
                                    ) {
                                      e.preventDefault(),
                                        d.KE.deleteBackward(H, {
                                          unit: "block",
                                        });
                                      return;
                                    }
                                  }
                                } else {
                                  if (
                                    eZ.isBold(t) ||
                                    eZ.isItalic(t) ||
                                    eZ.isTransposeCharacter(t)
                                  )
                                    return void e.preventDefault();
                                  if (eZ.isSoftBreak(t)) {
                                    e.preventDefault(), d.KE.insertSoftBreak(H);
                                    return;
                                  }
                                  if (eZ.isSplitBlock(t)) {
                                    e.preventDefault(), d.KE.insertBreak(H);
                                    return;
                                  }
                                  if (eZ.isDeleteBackward(t)) {
                                    e.preventDefault(),
                                      r && d.Q6.isExpanded(r)
                                        ? d.KE.deleteFragment(H, {
                                            direction: "backward",
                                          })
                                        : d.KE.deleteBackward(H);
                                    return;
                                  }
                                  if (eZ.isDeleteForward(t)) {
                                    e.preventDefault(),
                                      r && d.Q6.isExpanded(r)
                                        ? d.KE.deleteFragment(H, {
                                            direction: "forward",
                                          })
                                        : d.KE.deleteForward(H);
                                    return;
                                  }
                                  if (eZ.isDeleteLineBackward(t)) {
                                    e.preventDefault(),
                                      r && d.Q6.isExpanded(r)
                                        ? d.KE.deleteFragment(H, {
                                            direction: "backward",
                                          })
                                        : d.KE.deleteBackward(H, {
                                            unit: "line",
                                          });
                                    return;
                                  }
                                  if (eZ.isDeleteLineForward(t)) {
                                    e.preventDefault(),
                                      r && d.Q6.isExpanded(r)
                                        ? d.KE.deleteFragment(H, {
                                            direction: "forward",
                                          })
                                        : d.KE.deleteForward(H, {
                                            unit: "line",
                                          });
                                    return;
                                  }
                                  if (eZ.isDeleteWordBackward(t)) {
                                    e.preventDefault(),
                                      r && d.Q6.isExpanded(r)
                                        ? d.KE.deleteFragment(H, {
                                            direction: "backward",
                                          })
                                        : d.KE.deleteBackward(H, {
                                            unit: "word",
                                          });
                                    return;
                                  }
                                  if (eZ.isDeleteWordForward(t)) {
                                    e.preventDefault(),
                                      r && d.Q6.isExpanded(r)
                                        ? d.KE.deleteFragment(H, {
                                            direction: "forward",
                                          })
                                        : d.KE.deleteForward(H, {
                                            unit: "word",
                                          });
                                    return;
                                  }
                                }
                              }
                            }
                          },
                          [C, Q.onKeyDown],
                        ),
                        onPaste: (0, l.useCallback)(
                          (e) => {
                            let t;
                            !C &&
                              eg.hasEditableTarget(H, e.target) &&
                              !tt(e, Q.onPaste) &&
                              (!ep ||
                                ((t = e.nativeEvent).clipboardData &&
                                  "" !==
                                    t.clipboardData.getData("text/plain") &&
                                  1 === t.clipboardData.types.length) ||
                                eu) &&
                              (e.preventDefault(),
                              eg.insertData(H, e.clipboardData));
                          },
                          [C, Q.onPaste],
                        ),
                      },
                    ),
                    l.createElement(e8, {
                      decorations: ew,
                      node: H,
                      renderElement: B,
                      renderPlaceholder: _,
                      renderLeaf: F,
                      selection: H.selection,
                    }),
                  ),
                ),
              ),
            );
          },
          RV: eb,
          f7: () => (0, l.useContext)(ez),
          o$: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "x-slate-fragment",
              {
                apply: r,
                onChange: n,
                deleteBackward: i,
                addMark: u,
                removeMark: a,
              } = e;
            return (
              _.set(e, new WeakMap()),
              (e.addMark = (t, r) => {
                var n, i;
                null == (n = S.get(e)) || n(),
                  !j.get(e) &&
                    null != (i = N.get(e)) &&
                    i.length &&
                    j.set(e, null),
                  T.delete(e),
                  u(t, r);
              }),
              (e.removeMark = (t) => {
                var r;
                !j.get(e) &&
                  null != (r = N.get(e)) &&
                  r.length &&
                  j.set(e, null),
                  T.delete(e),
                  a(t);
              }),
              (e.deleteBackward = (t) => {
                if ("line" !== t) return i(t);
                if (e.selection && d.Q6.isCollapsed(e.selection)) {
                  var r = d.KE.above(e, {
                    match: (t) => d.Hg.isElement(t) && d.KE.isBlock(e, t),
                    at: e.selection,
                  });
                  if (r) {
                    var [, n] = r,
                      u = d.KE.range(e, n, e.selection.anchor),
                      a = ((e, t) => {
                        var r = d.KE.range(e, d.Q6.end(t)),
                          n = Array.from(d.KE.positions(e, { at: t })),
                          i = 0,
                          u = n.length,
                          a = Math.floor(u / 2);
                        if (ta(e, d.KE.range(e, n[i]), r))
                          return d.KE.range(e, n[i], r);
                        if (n.length < 2)
                          return d.KE.range(e, n[n.length - 1], r);
                        for (; a !== n.length && a !== i; )
                          ta(e, d.KE.range(e, n[a]), r) ? (u = a) : (i = a),
                            (a = Math.floor((i + u) / 2));
                        return d.KE.range(e, n[u], r);
                      })(e, u);
                    d.Q6.isCollapsed(a) || d.gB.delete(e, { at: a });
                  }
                }
              }),
              (e.apply = (t) => {
                var n,
                  i = [],
                  u = N.get(e);
                if (null != u && u.length) {
                  var a = u
                    .map((e) =>
                      (function (e, t) {
                        var { path: r, diff: n, id: i } = e;
                        switch (t.type) {
                          case "insert_text":
                            if (!d.wA.equals(t.path, r) || t.offset >= n.end)
                              return e;
                            if (t.offset <= n.start)
                              return {
                                diff: {
                                  start: t.text.length + n.start,
                                  end: t.text.length + n.end,
                                  text: n.text,
                                },
                                id: i,
                                path: r,
                              };
                            return {
                              diff: {
                                start: n.start,
                                end: n.end + t.text.length,
                                text: n.text,
                              },
                              id: i,
                              path: r,
                            };
                          case "remove_text":
                            if (!d.wA.equals(t.path, r) || t.offset >= n.end)
                              return e;
                            if (t.offset + t.text.length <= n.start)
                              return {
                                diff: {
                                  start: n.start - t.text.length,
                                  end: n.end - t.text.length,
                                  text: n.text,
                                },
                                id: i,
                                path: r,
                              };
                            return {
                              diff: {
                                start: n.start,
                                end: n.end - t.text.length,
                                text: n.text,
                              },
                              id: i,
                              path: r,
                            };
                          case "split_node":
                            if (!d.wA.equals(t.path, r) || t.position >= n.end)
                              return {
                                diff: n,
                                id: i,
                                path: d.wA.transform(r, t, {
                                  affinity: "backward",
                                }),
                              };
                            if (t.position > n.start)
                              return {
                                diff: {
                                  start: n.start,
                                  end: Math.min(t.position, n.end),
                                  text: n.text,
                                },
                                id: i,
                                path: r,
                              };
                            return {
                              diff: {
                                start: n.start - t.position,
                                end: n.end - t.position,
                                text: n.text,
                              },
                              id: i,
                              path: d.wA.transform(r, t, {
                                affinity: "forward",
                              }),
                            };
                          case "merge_node":
                            if (!d.wA.equals(t.path, r))
                              return {
                                diff: n,
                                id: i,
                                path: d.wA.transform(r, t),
                              };
                            return {
                              diff: {
                                start: n.start + t.position,
                                end: n.end + t.position,
                                text: n.text,
                              },
                              id: i,
                              path: d.wA.transform(r, t),
                            };
                        }
                        var u = d.wA.transform(r, t);
                        return u ? { diff: n, path: u, id: i } : null;
                      })(e, t),
                    )
                    .filter(Boolean);
                  N.set(e, a);
                }
                var o = R.get(e);
                o && R.set(e, eH(e, o, t));
                var s = $.get(e);
                if (null != s && s.at) {
                  var l = d.bR.isPoint(null == s ? void 0 : s.at)
                    ? eQ(e, s.at, t)
                    : eH(e, s.at, t);
                  $.set(e, l ? ts(ts({}, s), {}, { at: l }) : null);
                }
                switch (t.type) {
                  case "insert_text":
                  case "remove_text":
                  case "set_node":
                  case "split_node":
                    i.push(...tl(e, t.path));
                    break;
                  case "set_selection":
                    null == (n = P.get(e)) || n.unref(), P.delete(e);
                    break;
                  case "insert_node":
                  case "remove_node":
                    i.push(...tl(e, d.wA.parent(t.path)));
                    break;
                  case "merge_node":
                    var c = d.wA.previous(t.path);
                    i.push(...tl(e, c));
                    break;
                  case "move_node":
                    var f = d.wA.common(
                      d.wA.parent(t.path),
                      d.wA.parent(t.newPath),
                    );
                    i.push(...tl(e, f));
                }
                for (var [h, p] of (r(t), i)) {
                  var [g] = d.KE.node(e, h);
                  F.set(g, p);
                }
              }),
              (e.setFragmentData = (r) => {
                var { selection: n } = e;
                if (n) {
                  var [i, u] = d.Q6.edges(n),
                    a = d.KE.void(e, { at: i.path }),
                    o = d.KE.void(e, { at: u.path });
                  if (!d.Q6.isCollapsed(n) || a) {
                    var s = eg.toDOMRange(e, n),
                      l = s.cloneContents(),
                      c = l.childNodes[0];
                    if (
                      (l.childNodes.forEach((e) => {
                        e.textContent && "" !== e.textContent.trim() && (c = e);
                      }),
                      o)
                    ) {
                      var [f] = o,
                        h = s.cloneRange(),
                        p = eg.toDOMNode(e, f);
                      h.setEndAfter(p), (l = h.cloneContents());
                    }
                    if (
                      (a && (c = l.querySelector("[data-slate-spacer]")),
                      Array.from(
                        l.querySelectorAll("[data-slate-zero-width]"),
                      ).forEach((e) => {
                        var t = "n" === e.getAttribute("data-slate-zero-width");
                        e.textContent = t ? "\n" : "";
                      }),
                      J(c))
                    ) {
                      var g = c.ownerDocument.createElement("span");
                      (g.style.whiteSpace = "pre"),
                        g.appendChild(c),
                        l.appendChild(g),
                        (c = g);
                    }
                    var D = JSON.stringify(e.getFragment()),
                      v = window.btoa(encodeURIComponent(D));
                    c.setAttribute("data-slate-fragment", v),
                      r.setData("application/".concat(t), v);
                    var m = l.ownerDocument.createElement("div");
                    return (
                      m.appendChild(l),
                      m.setAttribute("hidden", "true"),
                      l.ownerDocument.body.appendChild(m),
                      r.setData("text/html", m.innerHTML),
                      r.setData("text/plain", Y(m)),
                      l.ownerDocument.body.removeChild(m),
                      r
                    );
                  }
                }
              }),
              (e.insertData = (t) => {
                e.insertFragmentData(t) || e.insertTextData(t);
              }),
              (e.insertFragmentData = (r) => {
                var n =
                  r.getData("application/".concat(t)) ||
                  ((e) => {
                    var [, t] = e.getData("text/html").match(X) || [];
                    return t;
                  })(r);
                if (n) {
                  var i = JSON.parse(decodeURIComponent(window.atob(n)));
                  return e.insertFragment(i), !0;
                }
                return !1;
              }),
              (e.insertTextData = (t) => {
                var r = t.getData("text/plain");
                if (r) {
                  var n = r.split(/\r\n|\r|\n/),
                    i = !1;
                  for (var u of n)
                    i && d.gB.splitNodes(e, { always: !0 }),
                      e.insertText(u),
                      (i = !0);
                  return !0;
                }
                return !1;
              }),
              (e.onChange = (t) => {
                p.unstable_batchedUpdates(() => {
                  var r = z.get(e);
                  r && r(), n(t);
                });
              }),
              e
            );
          },
          rL: eg,
          zL: () => (0, l.useContext)(tr),
        },
      );
    },
    719442(e, t, r) {
      "use strict";
      var n,
        i,
        u = r(694260),
        a = r(159563);
      function o(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var s = new WeakMap(),
        l = new WeakMap(),
        c = new WeakMap(),
        d = new WeakMap(),
        f = new WeakMap(),
        h = new WeakMap(),
        p = new WeakMap();
      function g(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function D(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? g(Object(r), !0).forEach(function (t) {
                o(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : g(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function v(e, t) {
        if (null == e) return {};
        var r,
          n,
          i = (function (e, t) {
            if (null == e) return {};
            var r,
              n,
              i = {},
              u = Object.keys(e);
            for (n = 0; n < u.length; n++)
              (r = u[n]), t.indexOf(r) >= 0 || (i[r] = e[r]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(e);
          for (n = 0; n < u.length; n++)
            (r = u[n]),
              !(t.indexOf(r) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(e, r) &&
                (i[r] = e[r]);
        }
        return i;
      }
      var m = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = !t,
            n = t ? b(e) : e,
            u = i.None,
            a = i.None,
            o = 0,
            s = null;
          for (var l of n) {
            var c = l.codePointAt(0);
            if (!c) break;
            var d = $(l, c);
            if (
              (([u, a] = r ? [a, d] : [d, u]),
              (u & i.ZWJ) != 0 &&
                (a & i.ExtPict) != 0 &&
                !(r ? I(e.substring(0, o)) : I(e.substring(0, e.length - o))))
            )
              break;
            if (
              ((u & i.RI) != 0 &&
                (a & i.RI) != 0 &&
                !(s =
                  null !== s ? !s : !!r || K(e.substring(0, e.length - o)))) ||
              (u !== i.None &&
                a !== i.None &&
                (function (e, t) {
                  return (
                    -1 ===
                    R.findIndex((r) => (e & r[0]) != 0 && (t & r[1]) != 0)
                  );
                })(u, a))
            )
              break;
            o += l.length;
          }
          return o || 1;
        },
        C = /\s/,
        B =
          /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
        E = /['\u2018\u2019]/,
        y = function (e) {
          for (
            var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              r = 0,
              n = !1;
            e.length > 0;

          ) {
            var i = m(e, t),
              [u, a] = w(e, i, t);
            if (A(u, a, t)) (n = !0), (r += i);
            else if (n) break;
            else r += i;
            e = a;
          }
          return r;
        },
        w = (e, t, r) => {
          if (r) {
            var n = e.length - t;
            return [e.slice(n, e.length), e.slice(0, n)];
          }
          return [e.slice(0, t), e.slice(t)];
        },
        A = function e(t, r) {
          var n =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (C.test(t)) return !1;
          if (E.test(t)) {
            var i = m(r, n),
              [u, a] = w(r, i, n);
            if (e(u, a, n)) return !0;
          }
          return !B.test(t);
        },
        b = function* (e) {
          for (var t = e.length - 1, r = 0; r < e.length; r++) {
            var n = e.charAt(t - r);
            if (_(n.charCodeAt(0))) {
              var i = e.charAt(t - r - 1);
              if (F(i.charCodeAt(0))) {
                yield i + n, r++;
                continue;
              }
            }
            yield n;
          }
        },
        F = (e) => e >= 55296 && e <= 56319,
        _ = (e) => e >= 56320 && e <= 57343;
      ((n = i || (i = {}))[(n.None = 0)] = "None"),
        (n[(n.Extend = 1)] = "Extend"),
        (n[(n.ZWJ = 2)] = "ZWJ"),
        (n[(n.RI = 4)] = "RI"),
        (n[(n.Prepend = 8)] = "Prepend"),
        (n[(n.SpacingMark = 16)] = "SpacingMark"),
        (n[(n.L = 32)] = "L"),
        (n[(n.V = 64)] = "V"),
        (n[(n.T = 128)] = "T"),
        (n[(n.LV = 256)] = "LV"),
        (n[(n.LVT = 512)] = "LVT"),
        (n[(n.ExtPict = 1024)] = "ExtPict"),
        (n[(n.Any = 2048)] = "Any");
      var k =
          /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/,
        x =
          /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/,
        O =
          /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/,
        P = /^[\u1100-\u115F\uA960-\uA97C]$/,
        z = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/,
        S = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/,
        j =
          /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/,
        T =
          /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/,
        N =
          /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/,
        $ = (e, t) => {
          var r = i.Any;
          return (
            -1 !== e.search(k) && (r |= i.Extend),
            8205 === t && (r |= i.ZWJ),
            t >= 127462 && t <= 127487 && (r |= i.RI),
            -1 !== e.search(x) && (r |= i.Prepend),
            -1 !== e.search(O) && (r |= i.SpacingMark),
            -1 !== e.search(P) && (r |= i.L),
            -1 !== e.search(z) && (r |= i.V),
            -1 !== e.search(S) && (r |= i.T),
            -1 !== e.search(j) && (r |= i.LV),
            -1 !== e.search(T) && (r |= i.LVT),
            -1 !== e.search(N) && (r |= i.ExtPict),
            r
          );
        },
        R = [
          [i.L, i.L | i.V | i.LV | i.LVT],
          [i.LV | i.V, i.V | i.T],
          [i.LVT | i.T, i.T],
          [i.Any, i.Extend | i.ZWJ],
          [i.Any, i.SpacingMark],
          [i.Prepend, i.Any],
          [i.ZWJ, i.ExtPict],
          [i.RI, i.RI],
        ],
        M =
          /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/,
        I = (e) => -1 !== e.search(M),
        Z = /(?:\uD83C[\uDDE6-\uDDFF])+$/g,
        K = (e) => {
          var t = e.match(Z);
          return null !== t && (t[0].length / 2) % 2 == 1;
        },
        L = (e) => (0, u.Q)(e) && et.isNodeList(e.children) && !H.isEditor(e),
        q = {
          isAncestor: (e) => (0, u.Q)(e) && et.isNodeList(e.children),
          isElement: L,
          isElementList: (e) =>
            Array.isArray(e) && e.every((e) => q.isElement(e)),
          isElementProps: (e) => void 0 !== e.children,
          isElementType: function (e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "type";
            return L(e) && e[r] === t;
          },
          matches(e, t) {
            for (var r in t) if ("children" !== r && e[r] !== t[r]) return !1;
            return !0;
          },
        },
        W = ["text"],
        U = ["text"];
      function V(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function J(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? V(Object(r), !0).forEach(function (t) {
                o(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : V(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      var Q = new WeakMap(),
        H = {
          above(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              {
                voids: r = !1,
                mode: n = "lowest",
                at: i = e.selection,
                match: u,
              } = t;
            if (i) {
              var a = H.path(e, i);
              for (var [o, s] of H.levels(e, {
                at: a,
                voids: r,
                match: u,
                reverse: "lowest" === n,
              }))
                if (!ey.isText(o)) {
                  if (eh.isRange(i)) {
                    if (
                      eu.isAncestor(s, i.anchor.path) &&
                      eu.isAncestor(s, i.focus.path)
                    )
                      return [o, s];
                  } else if (!eu.equals(a, s)) return [o, s];
                }
            }
          },
          addMark(e, t, r) {
            e.addMark(t, r);
          },
          after(e, t) {
            var r,
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              i = H.point(e, t, { edge: "end" }),
              u = H.end(e, []),
              { distance: a = 1 } = n,
              o = 0;
            for (var s of H.positions(
              e,
              J(J({}, n), {}, { at: { anchor: i, focus: u } }),
            )) {
              if (o > a) break;
              0 !== o && (r = s), o++;
            }
            return r;
          },
          before(e, t) {
            var r,
              n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              i = H.start(e, []),
              u = H.point(e, t, { edge: "start" }),
              { distance: a = 1 } = n,
              o = 0;
            for (var s of H.positions(
              e,
              J(J({}, n), {}, { at: { anchor: i, focus: u }, reverse: !0 }),
            )) {
              if (o > a) break;
              0 !== o && (r = s), o++;
            }
            return r;
          },
          deleteBackward(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { unit: r = "character" } = t;
            e.deleteBackward(r);
          },
          deleteForward(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { unit: r = "character" } = t;
            e.deleteForward(r);
          },
          deleteFragment(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { direction: r = "forward" } = t;
            e.deleteFragment(r);
          },
          edges: (e, t) => [H.start(e, t), H.end(e, t)],
          end: (e, t) => H.point(e, t, { edge: "end" }),
          first(e, t) {
            var r = H.path(e, t, { edge: "start" });
            return H.node(e, r);
          },
          fragment(e, t) {
            var r = H.range(e, t);
            return et.fragment(e, r);
          },
          hasBlocks: (e, t) =>
            t.children.some((t) => q.isElement(t) && H.isBlock(e, t)),
          hasInlines: (e, t) =>
            t.children.some((t) => ey.isText(t) || H.isInline(e, t)),
          hasTexts: (e, t) => t.children.every((e) => ey.isText(e)),
          insertBreak(e) {
            e.insertBreak();
          },
          insertSoftBreak(e) {
            e.insertSoftBreak();
          },
          insertFragment(e, t) {
            e.insertFragment(t);
          },
          insertNode(e, t) {
            e.insertNode(t);
          },
          insertText(e, t) {
            e.insertText(t);
          },
          isBlock: (e, t) => !e.isInline(t),
          isEditor(e) {
            var t = Q.get(e);
            if (void 0 !== t) return t;
            if (!(0, u.Q)(e)) return !1;
            var r =
              "function" == typeof e.addMark &&
              "function" == typeof e.apply &&
              "function" == typeof e.deleteBackward &&
              "function" == typeof e.deleteForward &&
              "function" == typeof e.deleteFragment &&
              "function" == typeof e.insertBreak &&
              "function" == typeof e.insertSoftBreak &&
              "function" == typeof e.insertFragment &&
              "function" == typeof e.insertNode &&
              "function" == typeof e.insertText &&
              "function" == typeof e.isInline &&
              "function" == typeof e.isVoid &&
              "function" == typeof e.normalizeNode &&
              "function" == typeof e.onChange &&
              "function" == typeof e.removeMark &&
              "function" == typeof e.getDirtyPaths &&
              (null === e.marks || (0, u.Q)(e.marks)) &&
              (null === e.selection || eh.isRange(e.selection)) &&
              et.isNodeList(e.children) &&
              ei.isOperationList(e.operations);
            return Q.set(e, r), r;
          },
          isEnd(e, t, r) {
            var n = H.end(e, r);
            return el.equals(t, n);
          },
          isEdge: (e, t, r) => H.isStart(e, t, r) || H.isEnd(e, t, r),
          isEmpty(e, t) {
            var { children: r } = t,
              [n] = r;
            return (
              0 === r.length ||
              (1 === r.length && ey.isText(n) && "" === n.text && !e.isVoid(t))
            );
          },
          isInline: (e, t) => e.isInline(t),
          isNormalizing(e) {
            var t = d.get(e);
            return void 0 === t || t;
          },
          isStart(e, t, r) {
            if (0 !== t.offset) return !1;
            var n = H.start(e, r);
            return el.equals(t, n);
          },
          isVoid: (e, t) => e.isVoid(t),
          last(e, t) {
            var r = H.path(e, t, { edge: "end" });
            return H.node(e, r);
          },
          leaf(e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              n = H.path(e, t, r);
            return [et.leaf(e, n), n];
          },
          *levels(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { at: r = e.selection, reverse: n = !1, voids: i = !1 } = t,
              { match: u } = t;
            if ((null == u && (u = () => !0), r)) {
              var a = [],
                o = H.path(e, r);
              for (var [s, l] of et.levels(e, o))
                if (
                  u(s, l) &&
                  (a.push([s, l]), !i && q.isElement(s) && H.isVoid(e, s))
                )
                  break;
              n && a.reverse(), yield* a;
            }
          },
          marks(e) {
            var { marks: t, selection: r } = e;
            if (!r) return null;
            if (t) return t;
            if (eh.isExpanded(r)) {
              var [n] = H.nodes(e, { match: ey.isText });
              if (!n) return {};
              var [i] = n;
              return v(i, W);
            }
            var { anchor: u } = r,
              { path: a } = u,
              [o] = H.leaf(e, a);
            if (0 === u.offset) {
              var s = H.previous(e, { at: a, match: ey.isText });
              if (
                !H.above(e, {
                  match: (t) =>
                    q.isElement(t) && H.isVoid(e, t) && e.markableVoid(t),
                })
              ) {
                var l = H.above(e, {
                  match: (t) => q.isElement(t) && H.isBlock(e, t),
                });
                if (s && l) {
                  var [c, d] = s,
                    [, f] = l;
                  eu.isAncestor(f, d) && (o = c);
                }
              }
            }
            return v(o, U);
          },
          next(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { mode: r = "lowest", voids: n = !1 } = t,
              { match: i, at: u = e.selection } = t;
            if (u) {
              var a = H.after(e, u, { voids: n });
              if (a) {
                var [, o] = H.last(e, []),
                  s = [a.path, o];
                if (eu.isPath(u) && 0 === u.length)
                  throw Error("Cannot get the next node from the root node!");
                if (null == i)
                  if (eu.isPath(u)) {
                    var [l] = H.parent(e, u);
                    i = (e) => l.children.includes(e);
                  } else i = () => !0;
                var [c] = H.nodes(e, { at: s, match: i, mode: r, voids: n });
                return c;
              }
            }
          },
          node(e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              n = H.path(e, t, r);
            return [et.get(e, n), n];
          },
          *nodes(e) {
            var t,
              r,
              n,
              i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              {
                at: u = e.selection,
                mode: a = "all",
                universal: o = !1,
                reverse: s = !1,
                voids: l = !1,
              } = i,
              { match: c } = i;
            if ((c || (c = () => !0), u)) {
              if (Y.isSpan(u)) (t = u[0]), (r = u[1]);
              else {
                var d = H.path(e, u, { edge: "start" }),
                  f = H.path(e, u, { edge: "end" });
                (t = s ? f : d), (r = s ? d : f);
              }
              var h = et.nodes(e, {
                  reverse: s,
                  from: t,
                  to: r,
                  pass: (t) => {
                    var [r] = t;
                    return !l && q.isElement(r) && H.isVoid(e, r);
                  },
                }),
                p = [];
              for (var [g, D] of h) {
                var v = n && 0 === eu.compare(D, n[1]);
                if ("highest" !== a || !v) {
                  if (!c(g, D))
                    if (o && !v && ey.isText(g)) return;
                    else continue;
                  if ("lowest" === a && v) {
                    n = [g, D];
                    continue;
                  }
                  var m = "lowest" === a ? n : [g, D];
                  m && (o ? p.push(m) : yield m), (n = [g, D]);
                }
              }
              "lowest" === a && n && (o ? p.push(n) : yield n), o && (yield* p);
            }
          },
          normalize(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { force: r = !1, operation: n } = t,
              i = (e) => s.get(e) || [],
              u = (e) => {
                var t = i(e).pop(),
                  r = t.join(",");
                return (l.get(e) || new Set()).delete(r), t;
              };
            if (H.isNormalizing(e)) {
              if (r) {
                var a = Array.from(et.nodes(e), (e) => {
                    var [, t] = e;
                    return t;
                  }),
                  o = new Set(a.map((e) => e.join(",")));
                s.set(e, a), l.set(e, o);
              }
              0 !== i(e).length &&
                H.withoutNormalizing(e, () => {
                  for (var t of i(e))
                    if (et.has(e, t)) {
                      var r = H.node(e, t),
                        [a, o] = r;
                      q.isElement(a) &&
                        0 === a.children.length &&
                        e.normalizeNode(r, { operation: n });
                    }
                  for (var s = i(e), l = s.length, c = 0; 0 !== s.length; ) {
                    if (
                      !e.shouldNormalize({
                        dirtyPaths: s,
                        iteration: c,
                        initialDirtyPathsLength: l,
                        operation: n,
                      })
                    )
                      return;
                    var d = u(e);
                    if (et.has(e, d)) {
                      var f = H.node(e, d);
                      e.normalizeNode(f, { operation: n });
                    }
                    c++, (s = i(e));
                  }
                });
            }
          },
          parent(e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              n = H.path(e, t, r),
              i = eu.parent(n);
            return H.node(e, i);
          },
          path(e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { depth: n, edge: i } = r;
            if (eu.isPath(t)) {
              if ("start" === i) {
                var [, u] = et.first(e, t);
                t = u;
              } else if ("end" === i) {
                var [, a] = et.last(e, t);
                t = a;
              }
            }
            return (
              eh.isRange(t) &&
                (t =
                  "start" === i
                    ? eh.start(t)
                    : "end" === i
                      ? eh.end(t)
                      : eu.common(t.anchor.path, t.focus.path)),
              el.isPoint(t) && (t = t.path),
              null != n && (t = t.slice(0, n)),
              t
            );
          },
          hasPath: (e, t) => et.has(e, t),
          pathRef(e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { affinity: n = "forward" } = r,
              i = {
                current: t,
                affinity: n,
                unref() {
                  var { current: t } = i;
                  return H.pathRefs(e).delete(i), (i.current = null), t;
                },
              };
            return H.pathRefs(e).add(i), i;
          },
          pathRefs(e) {
            var t = f.get(e);
            return t || ((t = new Set()), f.set(e, t)), t;
          },
          point(e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { edge: n = "start" } = r;
            if (eu.isPath(t)) {
              if ("end" === n) {
                var i,
                  [, u] = et.last(e, t);
                i = u;
              } else {
                var [, a] = et.first(e, t);
                i = a;
              }
              var o = et.get(e, i);
              if (!ey.isText(o))
                throw Error(
                  "Cannot get the "
                    .concat(n, " point in the node at path [")
                    .concat(t, "] because it has no ")
                    .concat(n, " text node."),
                );
              return { path: i, offset: "end" === n ? o.text.length : 0 };
            }
            if (eh.isRange(t)) {
              var [s, l] = eh.edges(t);
              return "start" === n ? s : l;
            }
            return t;
          },
          pointRef(e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { affinity: n = "forward" } = r,
              i = {
                current: t,
                affinity: n,
                unref() {
                  var { current: t } = i;
                  return H.pointRefs(e).delete(i), (i.current = null), t;
                },
              };
            return H.pointRefs(e).add(i), i;
          },
          pointRefs(e) {
            var t = h.get(e);
            return t || ((t = new Set()), h.set(e, t)), t;
          },
          *positions(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              {
                at: r = e.selection,
                unit: n = "offset",
                reverse: i = !1,
                voids: u = !1,
              } = t;
            if (r) {
              var a = H.range(e, r),
                [o, s] = eh.edges(a),
                l = i ? s : o,
                c = !1,
                d = "",
                f = 0,
                h = 0,
                p = 0;
              for (var [g, D] of H.nodes(e, { at: r, reverse: i, voids: u })) {
                if (q.isElement(g)) {
                  if (!u && e.isVoid(g)) {
                    yield H.start(e, D);
                    continue;
                  }
                  if (e.isInline(g)) continue;
                  if (H.hasInlines(e, g)) {
                    var v = eu.isAncestor(D, s.path) ? s : H.end(e, D),
                      C = eu.isAncestor(D, o.path) ? o : H.start(e, D);
                    (d = H.string(e, { anchor: C, focus: v }, { voids: u })),
                      (c = !0);
                  }
                }
                if (ey.isText(g)) {
                  var B,
                    E,
                    A,
                    b = eu.equals(D, l.path);
                  for (
                    b
                      ? ((h = i ? l.offset : g.text.length - l.offset),
                        (p = l.offset))
                      : ((h = g.text.length), (p = i ? h : 0)),
                      (b || c || "offset" === n) &&
                        (yield { path: D, offset: p }, (c = !1));
                    ;

                  ) {
                    if (0 === f) {
                      if ("" === d) break;
                      (B = d),
                        (E = n),
                        (A = i),
                        (d = w(
                          d,
                          (f =
                            "character" === E
                              ? m(B, A)
                              : "word" === E
                                ? y(B, A)
                                : "line" === E || "block" === E
                                  ? B.length
                                  : 1),
                          i,
                        )[1]);
                    }
                    if (((p = i ? p - f : p + f), (h -= f) < 0)) {
                      f = -h;
                      break;
                    }
                    (f = 0), yield { path: D, offset: p };
                  }
                }
              }
            }
          },
          previous(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { mode: r = "lowest", voids: n = !1 } = t,
              { match: i, at: u = e.selection } = t;
            if (u) {
              var a = H.before(e, u, { voids: n });
              if (a) {
                var [, o] = H.first(e, []),
                  s = [a.path, o];
                if (eu.isPath(u) && 0 === u.length)
                  throw Error(
                    "Cannot get the previous node from the root node!",
                  );
                if (null == i)
                  if (eu.isPath(u)) {
                    var [l] = H.parent(e, u);
                    i = (e) => l.children.includes(e);
                  } else i = () => !0;
                var [c] = H.nodes(e, {
                  reverse: !0,
                  at: s,
                  match: i,
                  mode: r,
                  voids: n,
                });
                return c;
              }
            }
          },
          range: (e, t, r) =>
            eh.isRange(t) && !r
              ? t
              : { anchor: H.start(e, t), focus: H.end(e, r || t) },
          rangeRef(e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { affinity: n = "forward" } = r,
              i = {
                current: t,
                affinity: n,
                unref() {
                  var { current: t } = i;
                  return H.rangeRefs(e).delete(i), (i.current = null), t;
                },
              };
            return H.rangeRefs(e).add(i), i;
          },
          rangeRefs(e) {
            var t = p.get(e);
            return t || ((t = new Set()), p.set(e, t)), t;
          },
          removeMark(e, t) {
            e.removeMark(t);
          },
          setNormalizing(e, t) {
            d.set(e, t);
          },
          start: (e, t) => H.point(e, t, { edge: "start" }),
          string(e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { voids: n = !1 } = r,
              i = H.range(e, t),
              [u, a] = eh.edges(i),
              o = "";
            for (var [s, l] of H.nodes(e, {
              at: i,
              match: ey.isText,
              voids: n,
            })) {
              var c = s.text;
              eu.equals(l, a.path) && (c = c.slice(0, a.offset)),
                eu.equals(l, u.path) && (c = c.slice(u.offset)),
                (o += c);
            }
            return o;
          },
          unhangRange(e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { voids: n = !1 } = r,
              [i, u] = eh.edges(t);
            if (
              0 !== i.offset ||
              0 !== u.offset ||
              eh.isCollapsed(t) ||
              eu.hasPrevious(u.path)
            )
              return t;
            var a = H.above(e, {
                at: u,
                match: (t) => q.isElement(t) && H.isBlock(e, t),
                voids: n,
              }),
              o = a ? a[1] : [],
              s = { anchor: H.start(e, i), focus: u },
              l = !0;
            for (var [c, d] of H.nodes(e, {
              at: s,
              match: ey.isText,
              reverse: !0,
              voids: n,
            })) {
              if (l) {
                l = !1;
                continue;
              }
              if ("" !== c.text || eu.isBefore(d, o)) {
                u = { path: d, offset: c.text.length };
                break;
              }
            }
            return { anchor: i, focus: u };
          },
          void(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return H.above(
              e,
              J(
                J({}, t),
                {},
                { match: (t) => q.isElement(t) && H.isVoid(e, t) },
              ),
            );
          },
          withoutNormalizing(e, t) {
            var r = H.isNormalizing(e);
            H.setNormalizing(e, !1);
            try {
              t();
            } finally {
              H.setNormalizing(e, r);
            }
            H.normalize(e);
          },
        },
        Y = {
          isSpan: (e) =>
            Array.isArray(e) && 2 === e.length && e.every(eu.isPath),
        },
        X = ["children"],
        G = ["text"],
        ee = new WeakMap(),
        et = {
          ancestor(e, t) {
            var r = et.get(e, t);
            if (ey.isText(r))
              throw Error(
                "Cannot get the ancestor node at path ["
                  .concat(t, "] because it refers to a text node instead: ")
                  .concat(eD.stringify(r)),
              );
            return r;
          },
          *ancestors(e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            for (var n of eu.ancestors(t, r)) {
              var i = [et.ancestor(e, n), n];
              yield i;
            }
          },
          child(e, t) {
            if (ey.isText(e))
              throw Error(
                "Cannot get the child of a text node: ".concat(eD.stringify(e)),
              );
            var r = e.children[t];
            if (null == r)
              throw Error(
                "Cannot get child at index `"
                  .concat(t, "` in node: ")
                  .concat(eD.stringify(e)),
              );
            return r;
          },
          *children(e, t) {
            for (
              var r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                { reverse: n = !1 } = r,
                i = et.ancestor(e, t),
                { children: u } = i,
                a = n ? u.length - 1 : 0;
              n ? a >= 0 : a < u.length;

            ) {
              var o = et.child(i, a),
                s = t.concat(a);
              yield [o, s], (a = n ? a - 1 : a + 1);
            }
          },
          common(e, t, r) {
            var n = eu.common(t, r);
            return [et.get(e, n), n];
          },
          descendant(e, t) {
            var r = et.get(e, t);
            if (H.isEditor(r))
              throw Error(
                "Cannot get the descendant node at path ["
                  .concat(
                    t,
                    "] because it refers to the root editor node instead: ",
                  )
                  .concat(eD.stringify(r)),
              );
            return r;
          },
          *descendants(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            for (var [r, n] of et.nodes(e, t)) 0 !== n.length && (yield [r, n]);
          },
          *elements(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            for (var [r, n] of et.nodes(e, t)) q.isElement(r) && (yield [r, n]);
          },
          extractProps(e) {
            if (q.isAncestor(e)) {
              var t = v(e, X);
              return t;
            }
            var t = v(e, G);
            return t;
          },
          first(e, t) {
            for (var r = t.slice(), n = et.get(e, r); n; )
              if (ey.isText(n) || 0 === n.children.length) break;
              else (n = n.children[0]), r.push(0);
            return [n, r];
          },
          fragment(e, t) {
            if (ey.isText(e))
              throw Error(
                "Cannot get a fragment starting from a root text node: ".concat(
                  eD.stringify(e),
                ),
              );
            return (0, a.jM)({ children: e.children }, (e) => {
              var [r, n] = eh.edges(t);
              for (var [, i] of et.nodes(e, {
                reverse: !0,
                pass: (e) => {
                  var [, r] = e;
                  return !eh.includes(t, r);
                },
              })) {
                if (!eh.includes(t, i)) {
                  var u = et.parent(e, i),
                    a = i[i.length - 1];
                  u.children.splice(a, 1);
                }
                if (eu.equals(i, n.path)) {
                  var o = et.leaf(e, i);
                  o.text = o.text.slice(0, n.offset);
                }
                if (eu.equals(i, r.path)) {
                  var s = et.leaf(e, i);
                  s.text = s.text.slice(r.offset);
                }
              }
              H.isEditor(e) && (e.selection = null);
            }).children;
          },
          get(e, t) {
            for (var r = e, n = 0; n < t.length; n++) {
              var i = t[n];
              if (ey.isText(r) || !r.children[i])
                throw Error(
                  "Cannot find a descendant at path ["
                    .concat(t, "] in node: ")
                    .concat(eD.stringify(e)),
                );
              r = r.children[i];
            }
            return r;
          },
          has(e, t) {
            for (var r = e, n = 0; n < t.length; n++) {
              var i = t[n];
              if (ey.isText(r) || !r.children[i]) return !1;
              r = r.children[i];
            }
            return !0;
          },
          isNode: (e) => ey.isText(e) || q.isElement(e) || H.isEditor(e),
          isNodeList(e) {
            if (!Array.isArray(e)) return !1;
            var t = ee.get(e);
            if (void 0 !== t) return t;
            var r = e.every((e) => et.isNode(e));
            return ee.set(e, r), r;
          },
          last(e, t) {
            for (var r = t.slice(), n = et.get(e, r); n; )
              if (ey.isText(n) || 0 === n.children.length) break;
              else {
                var i = n.children.length - 1;
                (n = n.children[i]), r.push(i);
              }
            return [n, r];
          },
          leaf(e, t) {
            var r = et.get(e, t);
            if (!ey.isText(r))
              throw Error(
                "Cannot get the leaf node at path ["
                  .concat(t, "] because it refers to a non-leaf node: ")
                  .concat(eD.stringify(r)),
              );
            return r;
          },
          *levels(e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            for (var n of eu.levels(t, r)) {
              var i = et.get(e, n);
              yield [i, n];
            }
          },
          matches: (e, t) =>
            (q.isElement(e) && q.isElementProps(t) && q.matches(e, t)) ||
            (ey.isText(e) && ey.isTextProps(t) && ey.matches(e, t)),
          *nodes(e) {
            for (
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                { pass: r, reverse: n = !1 } = t,
                { from: i = [], to: u } = t,
                a = new Set(),
                o = [],
                s = e;
              !(u && (n ? eu.isBefore(o, u) : eu.isAfter(o, u)));

            ) {
              if (
                (a.has(s) || (yield [s, o]),
                !a.has(s) &&
                  !ey.isText(s) &&
                  0 !== s.children.length &&
                  (null == r || !1 === r([s, o])))
              ) {
                a.add(s);
                var l = n ? s.children.length - 1 : 0;
                eu.isAncestor(o, i) && (l = i[o.length]),
                  (o = o.concat(l)),
                  (s = et.get(e, o));
                continue;
              }
              if (0 === o.length) break;
              if (!n) {
                var c = eu.next(o);
                if (et.has(e, c)) {
                  (o = c), (s = et.get(e, o));
                  continue;
                }
              }
              if (n && 0 !== o[o.length - 1]) {
                (o = eu.previous(o)), (s = et.get(e, o));
                continue;
              }
              (o = eu.parent(o)), (s = et.get(e, o)), a.add(s);
            }
          },
          parent(e, t) {
            var r = eu.parent(t),
              n = et.get(e, r);
            if (ey.isText(n))
              throw Error(
                "Cannot get the parent of path [".concat(
                  t,
                  "] because it does not exist in the root.",
                ),
              );
            return n;
          },
          string: (e) =>
            ey.isText(e) ? e.text : e.children.map(et.string).join(""),
          *texts(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            for (var [r, n] of et.nodes(e, t)) ey.isText(r) && (yield [r, n]);
          },
        };
      function er(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function en(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? er(Object(r), !0).forEach(function (t) {
                o(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : er(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      var ei = {
          isNodeOperation: (e) => ei.isOperation(e) && e.type.endsWith("_node"),
          isOperation(e) {
            if (!(0, u.Q)(e)) return !1;
            switch (e.type) {
              case "insert_node":
              case "remove_node":
                return eu.isPath(e.path) && et.isNode(e.node);
              case "insert_text":
              case "remove_text":
                return (
                  "number" == typeof e.offset &&
                  "string" == typeof e.text &&
                  eu.isPath(e.path)
                );
              case "merge_node":
                return (
                  "number" == typeof e.position &&
                  eu.isPath(e.path) &&
                  (0, u.Q)(e.properties)
                );
              case "move_node":
                return eu.isPath(e.path) && eu.isPath(e.newPath);
              case "set_node":
                return (
                  eu.isPath(e.path) &&
                  (0, u.Q)(e.properties) &&
                  (0, u.Q)(e.newProperties)
                );
              case "set_selection":
                return (
                  (null === e.properties && eh.isRange(e.newProperties)) ||
                  (null === e.newProperties && eh.isRange(e.properties)) ||
                  ((0, u.Q)(e.properties) && (0, u.Q)(e.newProperties))
                );
              case "split_node":
                return (
                  eu.isPath(e.path) &&
                  "number" == typeof e.position &&
                  (0, u.Q)(e.properties)
                );
              default:
                return !1;
            }
          },
          isOperationList: (e) =>
            Array.isArray(e) && e.every((e) => ei.isOperation(e)),
          isSelectionOperation: (e) =>
            ei.isOperation(e) && e.type.endsWith("_selection"),
          isTextOperation: (e) => ei.isOperation(e) && e.type.endsWith("_text"),
          inverse(e) {
            switch (e.type) {
              case "insert_node":
                return en(en({}, e), {}, { type: "remove_node" });
              case "insert_text":
                return en(en({}, e), {}, { type: "remove_text" });
              case "merge_node":
                return en(
                  en({}, e),
                  {},
                  { type: "split_node", path: eu.previous(e.path) },
                );
              case "move_node":
                var { newPath: t, path: r } = e;
                if (eu.equals(t, r)) return e;
                if (eu.isSibling(r, t))
                  return en(en({}, e), {}, { path: t, newPath: r });
                var n = eu.transform(r, e),
                  i = eu.transform(eu.next(r), e);
                return en(en({}, e), {}, { path: n, newPath: i });
              case "remove_node":
                return en(en({}, e), {}, { type: "insert_node" });
              case "remove_text":
                return en(en({}, e), {}, { type: "insert_text" });
              case "set_node":
                var { properties: u, newProperties: a } = e;
                return en(en({}, e), {}, { properties: a, newProperties: u });
              case "set_selection":
                var { properties: o, newProperties: s } = e;
                if (null == o)
                  return en(
                    en({}, e),
                    {},
                    { properties: s, newProperties: null },
                  );
                if (null == s)
                  return en(
                    en({}, e),
                    {},
                    { properties: null, newProperties: o },
                  );
                return en(en({}, e), {}, { properties: s, newProperties: o });
              case "split_node":
                return en(
                  en({}, e),
                  {},
                  { type: "merge_node", path: eu.next(e.path) },
                );
            }
          },
        },
        eu = {
          ancestors(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { reverse: r = !1 } = t,
              n = eu.levels(e, t);
            return r ? n.slice(1) : n.slice(0, -1);
          },
          common(e, t) {
            for (var r = [], n = 0; n < e.length && n < t.length; n++) {
              var i = e[n];
              if (i !== t[n]) break;
              r.push(i);
            }
            return r;
          },
          compare(e, t) {
            for (var r = Math.min(e.length, t.length), n = 0; n < r; n++) {
              if (e[n] < t[n]) return -1;
              if (e[n] > t[n]) return 1;
            }
            return 0;
          },
          endsAfter(e, t) {
            var r = e.length - 1,
              n = e.slice(0, r),
              i = t.slice(0, r),
              u = e[r],
              a = t[r];
            return eu.equals(n, i) && u > a;
          },
          endsAt(e, t) {
            var r = e.length,
              n = e.slice(0, r),
              i = t.slice(0, r);
            return eu.equals(n, i);
          },
          endsBefore(e, t) {
            var r = e.length - 1,
              n = e.slice(0, r),
              i = t.slice(0, r),
              u = e[r],
              a = t[r];
            return eu.equals(n, i) && u < a;
          },
          equals: (e, t) =>
            e.length === t.length && e.every((e, r) => e === t[r]),
          hasPrevious: (e) => e[e.length - 1] > 0,
          isAfter: (e, t) => 1 === eu.compare(e, t),
          isAncestor: (e, t) => e.length < t.length && 0 === eu.compare(e, t),
          isBefore: (e, t) => -1 === eu.compare(e, t),
          isChild: (e, t) =>
            e.length === t.length + 1 && 0 === eu.compare(e, t),
          isCommon: (e, t) => e.length <= t.length && 0 === eu.compare(e, t),
          isDescendant: (e, t) => e.length > t.length && 0 === eu.compare(e, t),
          isParent: (e, t) =>
            e.length + 1 === t.length && 0 === eu.compare(e, t),
          isPath: (e) =>
            Array.isArray(e) && (0 === e.length || "number" == typeof e[0]),
          isSibling(e, t) {
            if (e.length !== t.length) return !1;
            var r = e.slice(0, -1),
              n = t.slice(0, -1);
            return e[e.length - 1] !== t[t.length - 1] && eu.equals(r, n);
          },
          levels(e) {
            for (
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                { reverse: r = !1 } = t,
                n = [],
                i = 0;
              i <= e.length;
              i++
            )
              n.push(e.slice(0, i));
            return r && n.reverse(), n;
          },
          next(e) {
            if (0 === e.length)
              throw Error(
                "Cannot get the next path of a root path [".concat(
                  e,
                  "], because it has no next index.",
                ),
              );
            var t = e[e.length - 1];
            return e.slice(0, -1).concat(t + 1);
          },
          operationCanTransformPath(e) {
            switch (e.type) {
              case "insert_node":
              case "remove_node":
              case "merge_node":
              case "split_node":
              case "move_node":
                return !0;
              default:
                return !1;
            }
          },
          parent(e) {
            if (0 === e.length)
              throw Error(
                "Cannot get the parent path of the root path [".concat(e, "]."),
              );
            return e.slice(0, -1);
          },
          previous(e) {
            if (0 === e.length)
              throw Error(
                "Cannot get the previous path of a root path [".concat(
                  e,
                  "], because it has no previous index.",
                ),
              );
            var t = e[e.length - 1];
            if (t <= 0)
              throw Error(
                "Cannot get the previous path of a first child path [".concat(
                  e,
                  "] because it would result in a negative index.",
                ),
              );
            return e.slice(0, -1).concat(t - 1);
          },
          relative(e, t) {
            if (!eu.isAncestor(t, e) && !eu.equals(e, t))
              throw Error(
                "Cannot get the relative path of ["
                  .concat(e, "] inside ancestor [")
                  .concat(
                    t,
                    "], because it is not above or equal to the path.",
                  ),
              );
            return e.slice(t.length);
          },
          transform(e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            if (!e) return null;
            var n = [...e],
              { affinity: i = "forward" } = r;
            if (0 === e.length) return n;
            switch (t.type) {
              case "insert_node":
                var { path: u } = t;
                (eu.equals(u, n) ||
                  eu.endsBefore(u, n) ||
                  eu.isAncestor(u, n)) &&
                  (n[u.length - 1] += 1);
                break;
              case "remove_node":
                var { path: a } = t;
                if (eu.equals(a, n) || eu.isAncestor(a, n)) return null;
                eu.endsBefore(a, n) && (n[a.length - 1] -= 1);
                break;
              case "merge_node":
                var { path: o, position: s } = t;
                eu.equals(o, n) || eu.endsBefore(o, n)
                  ? (n[o.length - 1] -= 1)
                  : eu.isAncestor(o, n) &&
                    ((n[o.length - 1] -= 1), (n[o.length] += s));
                break;
              case "split_node":
                var { path: l, position: c } = t;
                if (eu.equals(l, n)) {
                  if ("forward" === i) n[n.length - 1] += 1;
                  else if ("backward" !== i) return null;
                } else
                  eu.endsBefore(l, n)
                    ? (n[l.length - 1] += 1)
                    : eu.isAncestor(l, n) &&
                      e[l.length] >= c &&
                      ((n[l.length - 1] += 1), (n[l.length] -= c));
                break;
              case "move_node":
                var { path: d, newPath: f } = t;
                if (eu.equals(d, f)) break;
                if (eu.isAncestor(d, n) || eu.equals(d, n)) {
                  var h = f.slice();
                  return (
                    eu.endsBefore(d, f) &&
                      d.length < f.length &&
                      (h[d.length - 1] -= 1),
                    h.concat(n.slice(d.length))
                  );
                }
                eu.isSibling(d, f) && (eu.isAncestor(f, n) || eu.equals(f, n))
                  ? eu.endsBefore(d, n)
                    ? (n[d.length - 1] -= 1)
                    : (n[d.length - 1] += 1)
                  : eu.endsBefore(f, n) ||
                      eu.equals(f, n) ||
                      eu.isAncestor(f, n)
                    ? (eu.endsBefore(d, n) && (n[d.length - 1] -= 1),
                      (n[f.length - 1] += 1))
                    : eu.endsBefore(d, n) &&
                      (eu.equals(f, n) && (n[f.length - 1] += 1),
                      (n[d.length - 1] -= 1));
            }
            return n;
          },
        },
        ea = {
          transform(e, t) {
            var { current: r, affinity: n } = e;
            if (null != r) {
              var i = eu.transform(r, t, { affinity: n });
              (e.current = i), null == i && e.unref();
            }
          },
        };
      function eo(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function es(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eo(Object(r), !0).forEach(function (t) {
                o(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eo(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      var el = {
          compare(e, t) {
            var r = eu.compare(e.path, t.path);
            return 0 === r
              ? e.offset < t.offset
                ? -1
                : +(e.offset > t.offset)
              : r;
          },
          isAfter: (e, t) => 1 === el.compare(e, t),
          isBefore: (e, t) => -1 === el.compare(e, t),
          equals: (e, t) => e.offset === t.offset && eu.equals(e.path, t.path),
          isPoint: (e) =>
            (0, u.Q)(e) && "number" == typeof e.offset && eu.isPath(e.path),
          transform(e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            return (0, a.jM)(e, (e) => {
              if (null === e) return null;
              var { affinity: n = "forward" } = r,
                { path: i, offset: u } = e;
              switch (t.type) {
                case "insert_node":
                case "move_node":
                  e.path = eu.transform(i, t, r);
                  break;
                case "insert_text":
                  eu.equals(t.path, i) &&
                    (t.offset < u || (t.offset === u && "forward" === n)) &&
                    (e.offset += t.text.length);
                  break;
                case "merge_node":
                  eu.equals(t.path, i) && (e.offset += t.position),
                    (e.path = eu.transform(i, t, r));
                  break;
                case "remove_text":
                  eu.equals(t.path, i) &&
                    t.offset <= u &&
                    (e.offset -= Math.min(u - t.offset, t.text.length));
                  break;
                case "remove_node":
                  if (eu.equals(t.path, i) || eu.isAncestor(t.path, i))
                    return null;
                  e.path = eu.transform(i, t, r);
                  break;
                case "split_node":
                  if (eu.equals(t.path, i))
                    if (t.position === u && null == n) return null;
                    else
                      (t.position < u ||
                        (t.position === u && "forward" === n)) &&
                        ((e.offset -= t.position),
                        (e.path = eu.transform(
                          i,
                          t,
                          es(es({}, r), {}, { affinity: "forward" }),
                        )));
                  else e.path = eu.transform(i, t, r);
              }
            });
          },
        },
        ec = {
          transform(e, t) {
            var { current: r, affinity: n } = e;
            if (null != r) {
              var i = el.transform(r, t, { affinity: n });
              (e.current = i), null == i && e.unref();
            }
          },
        },
        ed = ["anchor", "focus"];
      function ef(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      var eh = {
          edges(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { reverse: r = !1 } = t,
              { anchor: n, focus: i } = e;
            return eh.isBackward(e) === r ? [n, i] : [i, n];
          },
          end(e) {
            var [, t] = eh.edges(e);
            return t;
          },
          equals: (e, t) =>
            el.equals(e.anchor, t.anchor) && el.equals(e.focus, t.focus),
          includes(e, t) {
            if (eh.isRange(t)) {
              if (eh.includes(e, t.anchor) || eh.includes(e, t.focus))
                return !0;
              var [r, n] = eh.edges(e),
                [i, u] = eh.edges(t);
              return el.isBefore(r, i) && el.isAfter(n, u);
            }
            var [a, o] = eh.edges(e),
              s = !1,
              l = !1;
            return (
              el.isPoint(t)
                ? ((s = el.compare(t, a) >= 0), (l = 0 >= el.compare(t, o)))
                : ((s = eu.compare(t, a.path) >= 0),
                  (l = 0 >= eu.compare(t, o.path))),
              s && l
            );
          },
          intersection(e, t) {
            var r = v(e, ed),
              [n, i] = eh.edges(e),
              [u, a] = eh.edges(t),
              s = el.isBefore(n, u) ? u : n,
              l = el.isBefore(i, a) ? i : a;
            return el.isBefore(l, s)
              ? null
              : (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? ef(Object(r), !0).forEach(function (t) {
                          o(e, t, r[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(r),
                          )
                        : ef(Object(r)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(r, t),
                            );
                          });
                  }
                  return e;
                })({ anchor: s, focus: l }, r);
          },
          isBackward(e) {
            var { anchor: t, focus: r } = e;
            return el.isAfter(t, r);
          },
          isCollapsed(e) {
            var { anchor: t, focus: r } = e;
            return el.equals(t, r);
          },
          isExpanded: (e) => !eh.isCollapsed(e),
          isForward: (e) => !eh.isBackward(e),
          isRange: (e) =>
            (0, u.Q)(e) && el.isPoint(e.anchor) && el.isPoint(e.focus),
          *points(e) {
            yield [e.anchor, "anchor"], yield [e.focus, "focus"];
          },
          start(e) {
            var [t] = eh.edges(e);
            return t;
          },
          transform(e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            return (0, a.jM)(e, (e) => {
              if (null === e) return null;
              var n,
                i,
                { affinity: u = "inward" } = r;
              if ("inward" === u) {
                var a = eh.isCollapsed(e);
                eh.isForward(e)
                  ? ((n = "forward"), (i = a ? n : "backward"))
                  : ((n = "backward"), (i = a ? n : "forward"));
              } else
                "outward" === u
                  ? eh.isForward(e)
                    ? ((n = "backward"), (i = "forward"))
                    : ((n = "forward"), (i = "backward"))
                  : ((n = u), (i = u));
              var o = el.transform(e.anchor, t, { affinity: n }),
                s = el.transform(e.focus, t, { affinity: i });
              if (!o || !s) return null;
              (e.anchor = o), (e.focus = s);
            });
          },
        },
        ep = {
          transform(e, t) {
            var { current: r, affinity: n } = e;
            if (null != r) {
              var i = eh.transform(r, t, { affinity: n });
              (e.current = i), null == i && e.unref();
            }
          },
        },
        eg = void 0,
        eD = {
          setScrubber(e) {
            eg = e;
          },
          stringify: (e) => JSON.stringify(e, eg),
        },
        ev = (e, t) => {
          for (var r in e) {
            var n = e[r],
              i = t[r];
            if ((0, u.Q)(n) && (0, u.Q)(i)) {
              if (!ev(n, i)) return !1;
            } else if (Array.isArray(n) && Array.isArray(i)) {
              if (n.length !== i.length) return !1;
              for (var a = 0; a < n.length; a++) if (n[a] !== i[a]) return !1;
            } else if (n !== i) return !1;
          }
          for (var o in t) if (void 0 === e[o] && void 0 !== t[o]) return !1;
          return !0;
        },
        em = ["text"],
        eC = ["anchor", "focus"];
      function eB(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function eE(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eB(Object(r), !0).forEach(function (t) {
                o(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eB(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      var ey = {
        equals(e, t) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            { loose: n = !1 } = r;
          return ev(n ? v(e, em) : e, n ? v(t, em) : t);
        },
        isText: (e) => (0, u.Q)(e) && "string" == typeof e.text,
        isTextList: (e) => Array.isArray(e) && e.every((e) => ey.isText(e)),
        isTextProps: (e) => void 0 !== e.text,
        matches(e, t) {
          for (var r in t)
            if ("text" !== r && (!e.hasOwnProperty(r) || e[r] !== t[r]))
              return !1;
          return !0;
        },
        decorations(e, t) {
          var r = [eE({}, e)];
          for (var n of t) {
            var i = v(n, eC),
              [u, a] = eh.edges(n),
              o = [],
              s = 0,
              l = u.offset,
              c = a.offset;
            for (var d of r) {
              var { length: f } = d.text,
                h = s;
              if (((s += f), l <= h && s <= c)) {
                Object.assign(d, i), o.push(d);
                continue;
              }
              if (
                (l !== c && (l === s || c === h)) ||
                l > s ||
                c < h ||
                (c === h && 0 !== h)
              ) {
                o.push(d);
                continue;
              }
              var p = d,
                g = void 0,
                D = void 0;
              if (c < s) {
                var m = c - h;
                (D = eE(eE({}, p), {}, { text: p.text.slice(m) })),
                  (p = eE(eE({}, p), {}, { text: p.text.slice(0, m) }));
              }
              if (l > h) {
                var C = l - h;
                (g = eE(eE({}, p), {}, { text: p.text.slice(0, C) })),
                  (p = eE(eE({}, p), {}, { text: p.text.slice(C) }));
              }
              Object.assign(p, i), g && o.push(g), o.push(p), D && o.push(D);
            }
            r = o;
          }
          return r;
        },
      };
      function ew(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function eA(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ew(Object(r), !0).forEach(function (t) {
                o(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ew(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      var eb = ["text"],
        eF = ["children"];
      function e_(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ek(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? e_(Object(r), !0).forEach(function (t) {
                o(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : e_(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      var ex = (e, t) =>
          q.isElement(t)
            ? !!H.isVoid(e, t) ||
              (1 === t.children.length && ex(e, t.children[0]))
            : !H.isEditor(t) && !0,
        eO = (e, t) => {
          var [r] = H.node(e, t);
          return (e) => e === r;
        };
      function eP(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ez(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eP(Object(r), !0).forEach(function (t) {
                o(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eP(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      function eS(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          t &&
            (n = n.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, n);
        }
        return r;
      }
      function ej(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eS(Object(r), !0).forEach(function (t) {
                o(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eS(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      var eT = ej(
        ej(
          ej(
            ej(
              {},
              {
                transform(e, t) {
                  e.children = (0, a.mq)(e.children);
                  var r = e.selection && (0, a.mq)(e.selection);
                  try {
                    r = ((e, t, r) => {
                      switch (r.type) {
                        case "insert_node":
                          var { path: n, node: i } = r,
                            u = et.parent(e, n),
                            a = n[n.length - 1];
                          if (a > u.children.length)
                            throw Error(
                              'Cannot apply an "insert_node" operation at path ['.concat(
                                n,
                                "] because the destination is past the end of the node.",
                              ),
                            );
                          if ((u.children.splice(a, 0, i), t))
                            for (var [o, s] of eh.points(t))
                              t[s] = el.transform(o, r);
                          break;
                        case "insert_text":
                          var { path: l, offset: c, text: d } = r;
                          if (0 === d.length) break;
                          var f = et.leaf(e, l),
                            h = f.text.slice(0, c),
                            p = f.text.slice(c);
                          if (((f.text = h + d + p), t))
                            for (var [g, D] of eh.points(t))
                              t[D] = el.transform(g, r);
                          break;
                        case "merge_node":
                          var { path: v } = r,
                            m = et.get(e, v),
                            C = eu.previous(v),
                            B = et.get(e, C),
                            E = et.parent(e, v),
                            y = v[v.length - 1];
                          if (ey.isText(m) && ey.isText(B)) B.text += m.text;
                          else if (ey.isText(m) || ey.isText(B))
                            throw Error(
                              'Cannot apply a "merge_node" operation at path ['
                                .concat(
                                  v,
                                  "] to nodes of different interfaces: ",
                                )
                                .concat(eD.stringify(m), " ")
                                .concat(eD.stringify(B)),
                            );
                          else B.children.push(...m.children);
                          if ((E.children.splice(y, 1), t))
                            for (var [w, A] of eh.points(t))
                              t[A] = el.transform(w, r);
                          break;
                        case "move_node":
                          var { path: b, newPath: F } = r;
                          if (eu.isAncestor(b, F))
                            throw Error(
                              "Cannot move a path ["
                                .concat(b, "] to new path [")
                                .concat(
                                  F,
                                  "] because the destination is inside itself.",
                                ),
                            );
                          var _ = et.get(e, b),
                            k = et.parent(e, b),
                            x = b[b.length - 1];
                          k.children.splice(x, 1);
                          var O = eu.transform(b, r),
                            P = et.get(e, eu.parent(O)),
                            z = O[O.length - 1];
                          if ((P.children.splice(z, 0, _), t))
                            for (var [S, j] of eh.points(t))
                              t[j] = el.transform(S, r);
                          break;
                        case "remove_node":
                          var { path: T } = r,
                            N = T[T.length - 1];
                          if ((et.parent(e, T).children.splice(N, 1), t))
                            for (var [$, R] of eh.points(t)) {
                              var M = el.transform($, r);
                              if (null != t && null != M) t[R] = M;
                              else {
                                var I = void 0,
                                  Z = void 0;
                                for (var [K, L] of et.texts(e))
                                  if (-1 === eu.compare(L, T)) I = [K, L];
                                  else {
                                    Z = [K, L];
                                    break;
                                  }
                                var q = !1;
                                I &&
                                  Z &&
                                  (q = eu.equals(Z[1], T)
                                    ? !eu.hasPrevious(Z[1])
                                    : eu.common(I[1], T).length <
                                      eu.common(Z[1], T).length),
                                  I && !q
                                    ? (($.path = I[1]),
                                      ($.offset = I[0].text.length))
                                    : Z
                                      ? (($.path = Z[1]), ($.offset = 0))
                                      : (t = null);
                              }
                            }
                          break;
                        case "remove_text":
                          var { path: W, offset: U, text: V } = r;
                          if (0 === V.length) break;
                          var J = et.leaf(e, W),
                            Q = J.text.slice(0, U),
                            H = J.text.slice(U + V.length);
                          if (((J.text = Q + H), t))
                            for (var [Y, X] of eh.points(t))
                              t[X] = el.transform(Y, r);
                          break;
                        case "set_node":
                          var {
                            path: G,
                            properties: ee,
                            newProperties: er,
                          } = r;
                          if (0 === G.length)
                            throw Error(
                              "Cannot set properties on the root node!",
                            );
                          var en = et.get(e, G);
                          for (var ei in er) {
                            if ("children" === ei || "text" === ei)
                              throw Error(
                                'Cannot set the "'.concat(
                                  ei,
                                  '" property of nodes!',
                                ),
                              );
                            var ea = er[ei];
                            null == ea ? delete en[ei] : (en[ei] = ea);
                          }
                          for (var eo in ee)
                            er.hasOwnProperty(eo) || delete en[eo];
                          break;
                        case "set_selection":
                          var { newProperties: es } = r;
                          if (null == es) t = es;
                          else {
                            if (null == t) {
                              if (!eh.isRange(es))
                                throw Error(
                                  'Cannot apply an incomplete "set_selection" operation properties '.concat(
                                    eD.stringify(es),
                                    " when there is no current selection.",
                                  ),
                                );
                              t = eA({}, es);
                            }
                            for (var ec in es) {
                              var ed = es[ec];
                              if (null == ed) {
                                if ("anchor" === ec || "focus" === ec)
                                  throw Error(
                                    'Cannot remove the "'.concat(
                                      ec,
                                      '" selection property',
                                    ),
                                  );
                                delete t[ec];
                              } else t[ec] = ed;
                            }
                          }
                          break;
                        case "split_node":
                          var ef,
                            { path: ep, position: eg, properties: ev } = r;
                          if (0 === ep.length)
                            throw Error(
                              'Cannot apply a "split_node" operation at path ['.concat(
                                ep,
                                "] because the root node cannot be split.",
                              ),
                            );
                          var em = et.get(e, ep),
                            eC = et.parent(e, ep),
                            eB = ep[ep.length - 1];
                          if (ey.isText(em)) {
                            var eE = em.text.slice(0, eg),
                              ew = em.text.slice(eg);
                            (em.text = eE),
                              (ef = eA(eA({}, ev), {}, { text: ew }));
                          } else {
                            var eb = em.children.slice(0, eg),
                              eF = em.children.slice(eg);
                            (em.children = eb),
                              (ef = eA(eA({}, ev), {}, { children: eF }));
                          }
                          if ((eC.children.splice(eB + 1, 0, ef), t))
                            for (var [e_, ek] of eh.points(t))
                              t[ek] = el.transform(e_, r);
                      }
                      return t;
                    })(e, r, t);
                  } finally {
                    (e.children = (0, a.vD)(e.children)),
                      r
                        ? (e.selection = (0, a.Qx)(r) ? (0, a.vD)(r) : r)
                        : (e.selection = null);
                  }
                },
              },
            ),
            {
              insertNodes(e, t) {
                var r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                H.withoutNormalizing(e, () => {
                  var {
                      hanging: n = !1,
                      voids: i = !1,
                      mode: u = "lowest",
                    } = r,
                    { at: a, match: o, select: s } = r;
                  if ((et.isNode(t) && (t = [t]), 0 !== t.length)) {
                    var [l] = t;
                    if (
                      (a ||
                        ((a = e.selection
                          ? e.selection
                          : e.children.length > 0
                            ? H.end(e, [])
                            : [0]),
                        (s = !0)),
                      null == s && (s = !1),
                      eh.isRange(a))
                    )
                      if (
                        (n || (a = H.unhangRange(e, a, { voids: i })),
                        eh.isCollapsed(a))
                      )
                        a = a.anchor;
                      else {
                        var [, c] = eh.edges(a),
                          d = H.pointRef(e, c);
                        eT.delete(e, { at: a }), (a = d.unref());
                      }
                    if (el.isPoint(a)) {
                      null == o &&
                        (o = ey.isText(l)
                          ? (e) => ey.isText(e)
                          : e.isInline(l)
                            ? (t) => ey.isText(t) || H.isInline(e, t)
                            : (t) => q.isElement(t) && H.isBlock(e, t));
                      var [f] = H.nodes(e, {
                        at: a.path,
                        match: o,
                        mode: u,
                        voids: i,
                      });
                      if (!f) return;
                      var [, h] = f,
                        p = H.pathRef(e, h),
                        g = H.isEnd(e, a, h);
                      eT.splitNodes(e, { at: a, match: o, mode: u, voids: i });
                      var D = p.unref();
                      a = g ? eu.next(D) : D;
                    }
                    var v = eu.parent(a),
                      m = a[a.length - 1];
                    if (!(!i && H.void(e, { at: v }))) {
                      for (var C of t) {
                        var B = v.concat(m);
                        m++,
                          e.apply({ type: "insert_node", path: B, node: C }),
                          (a = eu.next(a));
                      }
                      if (((a = eu.previous(a)), s)) {
                        var E = H.end(e, a);
                        E && eT.select(e, E);
                      }
                    }
                  }
                });
              },
              liftNodes(e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                H.withoutNormalizing(e, () => {
                  var {
                      at: r = e.selection,
                      mode: n = "lowest",
                      voids: i = !1,
                    } = t,
                    { match: u } = t;
                  if (
                    (null == u &&
                      (u = eu.isPath(r)
                        ? eO(e, r)
                        : (t) => q.isElement(t) && H.isBlock(e, t)),
                    r)
                  )
                    for (var a of Array.from(
                      H.nodes(e, { at: r, match: u, mode: n, voids: i }),
                      (t) => {
                        var [, r] = t;
                        return H.pathRef(e, r);
                      },
                    )) {
                      var o = a.unref();
                      if (o.length < 2)
                        throw Error(
                          "Cannot lift node at a path [".concat(
                            o,
                            "] because it has a depth of less than `2`.",
                          ),
                        );
                      var [s, l] = H.node(e, eu.parent(o)),
                        c = o[o.length - 1],
                        { length: d } = s.children;
                      if (1 === d) {
                        var f = eu.next(l);
                        eT.moveNodes(e, { at: o, to: f, voids: i }),
                          eT.removeNodes(e, { at: l, voids: i });
                      } else if (0 === c)
                        eT.moveNodes(e, { at: o, to: l, voids: i });
                      else if (c === d - 1) {
                        var h = eu.next(l);
                        eT.moveNodes(e, { at: o, to: h, voids: i });
                      } else {
                        var p = eu.next(o),
                          g = eu.next(l);
                        eT.splitNodes(e, { at: p, voids: i }),
                          eT.moveNodes(e, { at: o, to: g, voids: i });
                      }
                    }
                });
              },
              mergeNodes(e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                H.withoutNormalizing(e, () => {
                  var r,
                    n,
                    { match: i, at: u = e.selection } = t,
                    { hanging: a = !1, voids: o = !1, mode: s = "lowest" } = t;
                  if (u) {
                    if (null == i)
                      if (eu.isPath(u)) {
                        var [l] = H.parent(e, u);
                        i = (e) => l.children.includes(e);
                      } else i = (t) => q.isElement(t) && H.isBlock(e, t);
                    if (
                      (!a &&
                        eh.isRange(u) &&
                        (u = H.unhangRange(e, u, { voids: o })),
                      eh.isRange(u))
                    )
                      if (eh.isCollapsed(u)) u = u.anchor;
                      else {
                        var [, c] = eh.edges(u),
                          d = H.pointRef(e, c);
                        eT.delete(e, { at: u }),
                          (u = d.unref()),
                          null == t.at && eT.select(e, u);
                      }
                    var [f] = H.nodes(e, {
                        at: u,
                        match: i,
                        voids: o,
                        mode: s,
                      }),
                      h = H.previous(e, { at: u, match: i, voids: o, mode: s });
                    if (f && h) {
                      var [p, g] = f,
                        [D, m] = h;
                      if (0 !== g.length && 0 !== m.length) {
                        var C = eu.next(m),
                          B = eu.common(g, m),
                          E = eu.isSibling(g, m),
                          y = Array.from(H.levels(e, { at: g }), (e) => {
                            var [t] = e;
                            return t;
                          })
                            .slice(B.length)
                            .slice(0, -1),
                          w = H.above(e, {
                            at: g,
                            mode: "highest",
                            match: (t) => y.includes(t) && ex(e, t),
                          }),
                          A = w && H.pathRef(e, w[1]);
                        if (ey.isText(p) && ey.isText(D)) {
                          var b = v(p, eb);
                          (n = D.text.length), (r = b);
                        } else if (q.isElement(p) && q.isElement(D)) {
                          var b = v(p, eF);
                          (n = D.children.length), (r = b);
                        } else
                          throw Error(
                            "Cannot merge the node at path ["
                              .concat(
                                g,
                                "] with the previous sibling because it is not the same kind: ",
                              )
                              .concat(eD.stringify(p), " ")
                              .concat(eD.stringify(D)),
                          );
                        E || eT.moveNodes(e, { at: g, to: C, voids: o }),
                          A && eT.removeNodes(e, { at: A.current, voids: o }),
                          (q.isElement(D) && H.isEmpty(e, D)) ||
                          (ey.isText(D) &&
                            "" === D.text &&
                            0 !== m[m.length - 1])
                            ? eT.removeNodes(e, { at: m, voids: o })
                            : e.apply({
                                type: "merge_node",
                                path: C,
                                position: n,
                                properties: r,
                              }),
                          A && A.unref();
                      }
                    }
                  }
                });
              },
              moveNodes(e, t) {
                H.withoutNormalizing(e, () => {
                  var {
                      to: r,
                      at: n = e.selection,
                      mode: i = "lowest",
                      voids: u = !1,
                    } = t,
                    { match: a } = t;
                  if (n) {
                    null == a &&
                      (a = eu.isPath(n)
                        ? eO(e, n)
                        : (t) => q.isElement(t) && H.isBlock(e, t));
                    var o = H.pathRef(e, r);
                    for (var s of Array.from(
                      H.nodes(e, { at: n, match: a, mode: i, voids: u }),
                      (t) => {
                        var [, r] = t;
                        return H.pathRef(e, r);
                      },
                    )) {
                      var l = s.unref(),
                        c = o.current;
                      0 !== l.length &&
                        e.apply({ type: "move_node", path: l, newPath: c }),
                        o.current &&
                          eu.isSibling(c, l) &&
                          eu.isAfter(c, l) &&
                          (o.current = eu.next(o.current));
                    }
                    o.unref();
                  }
                });
              },
              removeNodes(e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                H.withoutNormalizing(e, () => {
                  var {
                      hanging: r = !1,
                      voids: n = !1,
                      mode: i = "lowest",
                    } = t,
                    { at: u = e.selection, match: a } = t;
                  if (u)
                    for (var o of (null == a &&
                      (a = eu.isPath(u)
                        ? eO(e, u)
                        : (t) => q.isElement(t) && H.isBlock(e, t)),
                    !r &&
                      eh.isRange(u) &&
                      (u = H.unhangRange(e, u, { voids: n })),
                    Array.from(
                      H.nodes(e, { at: u, match: a, mode: i, voids: n }),
                      (t) => {
                        var [, r] = t;
                        return H.pathRef(e, r);
                      },
                    ))) {
                      var s = o.unref();
                      if (s) {
                        var [l] = H.node(e, s);
                        e.apply({ type: "remove_node", path: s, node: l });
                      }
                    }
                });
              },
              setNodes(e, t) {
                var r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                H.withoutNormalizing(e, () => {
                  var {
                      match: n,
                      at: i = e.selection,
                      compare: u,
                      merge: a,
                    } = r,
                    {
                      hanging: o = !1,
                      mode: s = "lowest",
                      split: l = !1,
                      voids: c = !1,
                    } = r;
                  if (i) {
                    if (
                      (null == n &&
                        (n = eu.isPath(i)
                          ? eO(e, i)
                          : (t) => q.isElement(t) && H.isBlock(e, t)),
                      !o &&
                        eh.isRange(i) &&
                        (i = H.unhangRange(e, i, { voids: c })),
                      l && eh.isRange(i))
                    ) {
                      if (
                        eh.isCollapsed(i) &&
                        H.leaf(e, i.anchor)[0].text.length > 0
                      )
                        return;
                      var d = H.rangeRef(e, i, { affinity: "inward" }),
                        [f, h] = eh.edges(i),
                        p = "lowest" === s ? "lowest" : "highest",
                        g = H.isEnd(e, h, h.path);
                      eT.splitNodes(e, {
                        at: h,
                        match: n,
                        mode: p,
                        voids: c,
                        always: !g,
                      });
                      var D = H.isStart(e, f, f.path);
                      eT.splitNodes(e, {
                        at: f,
                        match: n,
                        mode: p,
                        voids: c,
                        always: !D,
                      }),
                        (i = d.unref()),
                        null == r.at && eT.select(e, i);
                    }
                    for (var [v, m] of (u || (u = (e, t) => e !== t),
                    H.nodes(e, { at: i, match: n, mode: s, voids: c }))) {
                      var C = {},
                        B = {};
                      if (0 !== m.length) {
                        var E = !1;
                        for (var y in t)
                          "children" !== y &&
                            "text" !== y &&
                            u(t[y], v[y]) &&
                            ((E = !0),
                            v.hasOwnProperty(y) && (C[y] = v[y]),
                            a
                              ? null != t[y] && (B[y] = a(v[y], t[y]))
                              : null != t[y] && (B[y] = t[y]));
                        E &&
                          e.apply({
                            type: "set_node",
                            path: m,
                            properties: C,
                            newProperties: B,
                          });
                      }
                    }
                  }
                });
              },
              splitNodes(e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                H.withoutNormalizing(e, () => {
                  var r,
                    n,
                    { mode: i = "lowest", voids: u = !1 } = t,
                    {
                      match: a,
                      at: o = e.selection,
                      height: s = 0,
                      always: l = !1,
                    } = t;
                  if (
                    (null == a &&
                      (a = (t) => q.isElement(t) && H.isBlock(e, t)),
                    eh.isRange(o) &&
                      (o = ((e, t) => {
                        if (eh.isCollapsed(t)) return t.anchor;
                        var [, r] = eh.edges(t),
                          n = H.pointRef(e, r);
                        return eT.delete(e, { at: t }), n.unref();
                      })(e, o)),
                    eu.isPath(o))
                  ) {
                    var c = o,
                      d = H.point(e, c),
                      [f] = H.parent(e, c);
                    (a = (e) => e === f),
                      (s = d.path.length - c.length + 1),
                      (o = d),
                      (l = !0);
                  }
                  if (o) {
                    var h = H.pointRef(e, o, { affinity: "backward" });
                    try {
                      var [p] = H.nodes(e, {
                        at: o,
                        match: a,
                        mode: i,
                        voids: u,
                      });
                      if (!p) return;
                      var g = H.void(e, { at: o, mode: "highest" });
                      if (!u && g) {
                        var [D, v] = g;
                        if (q.isElement(D) && e.isInline(D)) {
                          var m = H.after(e, v);
                          if (!m) {
                            var C = eu.next(v);
                            eT.insertNodes(
                              e,
                              { text: "" },
                              { at: C, voids: u },
                            ),
                              (m = H.point(e, C));
                          }
                          (o = m), (l = !0);
                        }
                        (s = o.path.length - v.length + 1), (l = !0);
                      }
                      r = H.pointRef(e, o);
                      var B = o.path.length - s,
                        [, E] = p,
                        y = o.path.slice(0, B),
                        w = 0 === s ? o.offset : o.path[B] + 0;
                      for (var [A, b] of H.levels(e, {
                        at: y,
                        reverse: !0,
                        voids: u,
                      })) {
                        var F = !1;
                        if (
                          b.length < E.length ||
                          0 === b.length ||
                          (!u && q.isElement(A) && H.isVoid(e, A))
                        )
                          break;
                        var _ = h.current,
                          k = H.isEnd(e, _, b);
                        if (l || !h || !H.isEdge(e, _, b)) {
                          F = !0;
                          var x = et.extractProps(A);
                          e.apply({
                            type: "split_node",
                            path: b,
                            position: w,
                            properties: x,
                          });
                        }
                        w = b[b.length - 1] + (F || k ? 1 : 0);
                      }
                      if (null == t.at) {
                        var O = r.current || H.end(e, []);
                        eT.select(e, O);
                      }
                    } finally {
                      h.unref(), null == (n = r) || n.unref();
                    }
                  }
                });
              },
              unsetNodes(e, t) {
                var r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                Array.isArray(t) || (t = [t]);
                var n = {};
                for (var i of t) n[i] = null;
                eT.setNodes(e, n, r);
              },
              unwrapNodes(e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                H.withoutNormalizing(e, () => {
                  var { mode: r = "lowest", split: n = !1, voids: i = !1 } = t,
                    { at: u = e.selection, match: a } = t;
                  if (u) {
                    null == a &&
                      (a = eu.isPath(u)
                        ? eO(e, u)
                        : (t) => q.isElement(t) && H.isBlock(e, t)),
                      eu.isPath(u) && (u = H.range(e, u));
                    var o = eh.isRange(u) ? H.rangeRef(e, u) : null;
                    for (var s of Array.from(
                      H.nodes(e, { at: u, match: a, mode: r, voids: i }),
                      (t) => {
                        var [, r] = t;
                        return H.pathRef(e, r);
                      },
                    ).reverse())
                      !(function (t) {
                        var r = t.unref(),
                          [u] = H.node(e, r),
                          a = H.range(e, r);
                        n && o && (a = eh.intersection(o.current, a)),
                          eT.liftNodes(e, {
                            at: a,
                            match: (e) =>
                              q.isAncestor(u) && u.children.includes(e),
                            voids: i,
                          });
                      })(s);
                    o && o.unref();
                  }
                });
              },
              wrapNodes(e, t) {
                var r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                H.withoutNormalizing(e, () => {
                  var { mode: n = "lowest", split: i = !1, voids: u = !1 } = r,
                    { match: a, at: o = e.selection } = r;
                  if (o) {
                    if (
                      (null == a &&
                        (a = eu.isPath(o)
                          ? eO(e, o)
                          : e.isInline(t)
                            ? (t) =>
                                (q.isElement(t) && H.isInline(e, t)) ||
                                ey.isText(t)
                            : (t) => q.isElement(t) && H.isBlock(e, t)),
                      i && eh.isRange(o))
                    ) {
                      var [s, l] = eh.edges(o),
                        c = H.rangeRef(e, o, { affinity: "inward" });
                      eT.splitNodes(e, { at: l, match: a, voids: u }),
                        eT.splitNodes(e, { at: s, match: a, voids: u }),
                        (o = c.unref()),
                        null == r.at && eT.select(e, o);
                    }
                    for (var [, d] of Array.from(
                      H.nodes(e, {
                        at: o,
                        match: e.isInline(t)
                          ? (t) => q.isElement(t) && H.isBlock(e, t)
                          : (e) => H.isEditor(e),
                        mode: "lowest",
                        voids: u,
                      }),
                    )) {
                      var f = eh.isRange(o)
                        ? eh.intersection(o, H.range(e, d))
                        : o;
                      if (f) {
                        var h = Array.from(
                          H.nodes(e, { at: f, match: a, mode: n, voids: u }),
                        );
                        if (
                          h.length > 0 &&
                          "continue" ===
                            (function () {
                              var [r] = h,
                                n = h[h.length - 1],
                                [, i] = r,
                                [, a] = n;
                              if (0 === i.length && 0 === a.length)
                                return "continue";
                              var o = eu.equals(i, a)
                                  ? eu.parent(i)
                                  : eu.common(i, a),
                                s = H.range(e, i, a),
                                [l] = H.node(e, o),
                                c = o.length + 1,
                                d = eu.next(a.slice(0, c)),
                                f = ek(ek({}, t), {}, { children: [] });
                              eT.insertNodes(e, f, { at: d, voids: u }),
                                eT.moveNodes(e, {
                                  at: s,
                                  match: (e) =>
                                    q.isAncestor(l) && l.children.includes(e),
                                  to: d.concat(0),
                                  voids: u,
                                });
                            })()
                        )
                          continue;
                      }
                    }
                  }
                });
              },
            },
          ),
          {
            collapse(e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                { edge: r = "anchor" } = t,
                { selection: n } = e;
              if (n) {
                if ("anchor" === r) eT.select(e, n.anchor);
                else if ("focus" === r) eT.select(e, n.focus);
                else if ("start" === r) {
                  var [i] = eh.edges(n);
                  eT.select(e, i);
                } else if ("end" === r) {
                  var [, u] = eh.edges(n);
                  eT.select(e, u);
                }
              }
            },
            deselect(e) {
              var { selection: t } = e;
              t &&
                e.apply({
                  type: "set_selection",
                  properties: t,
                  newProperties: null,
                });
            },
            move(e) {
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                { selection: r } = e,
                { distance: n = 1, unit: i = "character", reverse: u = !1 } = t,
                { edge: a = null } = t;
              if (r) {
                "start" === a && (a = eh.isBackward(r) ? "focus" : "anchor"),
                  "end" === a && (a = eh.isBackward(r) ? "anchor" : "focus");
                var { anchor: o, focus: s } = r,
                  l = { distance: n, unit: i },
                  c = {};
                if (null == a || "anchor" === a) {
                  var d = u ? H.before(e, o, l) : H.after(e, o, l);
                  d && (c.anchor = d);
                }
                if (null == a || "focus" === a) {
                  var f = u ? H.before(e, s, l) : H.after(e, s, l);
                  f && (c.focus = f);
                }
                eT.setSelection(e, c);
              }
            },
            select(e, t) {
              var { selection: r } = e;
              if (((t = H.range(e, t)), r)) return void eT.setSelection(e, t);
              if (!eh.isRange(t))
                throw Error(
                  "When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(
                    eD.stringify(t),
                  ),
                );
              e.apply({
                type: "set_selection",
                properties: r,
                newProperties: t,
              });
            },
            setPoint(e, t) {
              var r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                { selection: n } = e,
                { edge: i = "both" } = r;
              if (n) {
                "start" === i && (i = eh.isBackward(n) ? "focus" : "anchor"),
                  "end" === i && (i = eh.isBackward(n) ? "anchor" : "focus");
                var { anchor: u, focus: a } = n,
                  o = "anchor" === i ? u : a;
                eT.setSelection(e, {
                  ["anchor" === i ? "anchor" : "focus"]: ez(ez({}, o), t),
                });
              }
            },
            setSelection(e, t) {
              var { selection: r } = e,
                n = {},
                i = {};
              if (r) {
                for (var u in t)
                  (("anchor" !== u ||
                    null == t.anchor ||
                    el.equals(t.anchor, r.anchor)) &&
                    ("focus" !== u ||
                      null == t.focus ||
                      el.equals(t.focus, r.focus)) &&
                    ("anchor" === u || "focus" === u || t[u] === r[u])) ||
                    ((n[u] = r[u]), (i[u] = t[u]));
                Object.keys(n).length > 0 &&
                  e.apply({
                    type: "set_selection",
                    properties: n,
                    newProperties: i,
                  });
              }
            },
          },
        ),
        {
          delete(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            H.withoutNormalizing(e, () => {
              var r,
                {
                  reverse: n = !1,
                  unit: i = "character",
                  distance: u = 1,
                  voids: a = !1,
                } = t,
                { at: o = e.selection, hanging: s = !1 } = t;
              if (o) {
                var l = !1;
                if (
                  (eh.isRange(o) &&
                    eh.isCollapsed(o) &&
                    ((l = !0), (o = o.anchor)),
                  el.isPoint(o))
                ) {
                  var c = H.void(e, { at: o, mode: "highest" });
                  if (!a && c) {
                    var [, d] = c;
                    o = d;
                  } else {
                    var f = { unit: i, distance: u },
                      h = n
                        ? H.before(e, o, f) || H.start(e, [])
                        : H.after(e, o, f) || H.end(e, []);
                    (o = { anchor: o, focus: h }), (s = !0);
                  }
                }
                if (eu.isPath(o))
                  return void eT.removeNodes(e, { at: o, voids: a });
                if (!eh.isCollapsed(o)) {
                  if (!s) {
                    var [, p] = eh.edges(o),
                      g = H.end(e, []);
                    el.equals(p, g) || (o = H.unhangRange(e, o, { voids: a }));
                  }
                  var [D, v] = eh.edges(o),
                    m = H.above(e, {
                      match: (t) => q.isElement(t) && H.isBlock(e, t),
                      at: D,
                      voids: a,
                    }),
                    C = H.above(e, {
                      match: (t) => q.isElement(t) && H.isBlock(e, t),
                      at: v,
                      voids: a,
                    }),
                    B = m && C && !eu.equals(m[1], C[1]),
                    E = eu.equals(D.path, v.path),
                    y = a ? null : H.void(e, { at: D, mode: "highest" }),
                    w = a ? null : H.void(e, { at: v, mode: "highest" });
                  if (y) {
                    var A = H.before(e, D);
                    A && m && eu.isAncestor(m[1], A.path) && (D = A);
                  }
                  if (w) {
                    var b = H.after(e, v);
                    b && C && eu.isAncestor(C[1], b.path) && (v = b);
                  }
                  var F = [];
                  for (var _ of H.nodes(e, { at: o, voids: a })) {
                    var [k, x] = _;
                    (!r || 0 !== eu.compare(x, r)) &&
                      ((!a && q.isElement(k) && H.isVoid(e, k)) ||
                        (!eu.isCommon(x, D.path) && !eu.isCommon(x, v.path))) &&
                      (F.push(_), (r = x));
                  }
                  var O = Array.from(F, (t) => {
                      var [, r] = t;
                      return H.pathRef(e, r);
                    }),
                    P = H.pointRef(e, D),
                    z = H.pointRef(e, v),
                    S = "";
                  if (!E && !y) {
                    var j = P.current,
                      [T] = H.leaf(e, j),
                      { path: N } = j,
                      { offset: $ } = D,
                      R = T.text.slice($);
                    R.length > 0 &&
                      (e.apply({
                        type: "remove_text",
                        path: N,
                        offset: $,
                        text: R,
                      }),
                      (S = R));
                  }
                  if (
                    (O.reverse()
                      .map((e) => e.unref())
                      .filter((e) => null !== e)
                      .forEach((t) => eT.removeNodes(e, { at: t, voids: a })),
                    !w)
                  ) {
                    var M = z.current,
                      [I] = H.leaf(e, M),
                      { path: Z } = M,
                      K = E ? D.offset : 0,
                      L = I.text.slice(K, v.offset);
                    L.length > 0 &&
                      (e.apply({
                        type: "remove_text",
                        path: Z,
                        offset: K,
                        text: L,
                      }),
                      (S = L));
                  }
                  !E &&
                    B &&
                    z.current &&
                    P.current &&
                    eT.mergeNodes(e, { at: z.current, hanging: !0, voids: a }),
                    l &&
                      n &&
                      "character" === i &&
                      S.length > 1 &&
                      S.match(/[\u0E00-\u0E7F]+/) &&
                      eT.insertText(e, S.slice(0, S.length - u));
                  var W = P.unref(),
                    U = z.unref(),
                    V = n ? W || U : U || W;
                  null == t.at && V && eT.select(e, V);
                }
              }
            });
          },
          insertFragment(e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            H.withoutNormalizing(e, () => {
              var n,
                { hanging: i = !1, voids: u = !1 } = r,
                { at: a = e.selection } = r;
              if (t.length) {
                if (a) {
                  if (eh.isRange(a))
                    if (
                      (i || (a = H.unhangRange(e, a, { voids: u })),
                      eh.isCollapsed(a))
                    )
                      a = a.anchor;
                    else {
                      var [, o] = eh.edges(a);
                      if (!u && H.void(e, { at: o })) return;
                      var s = H.pointRef(e, o);
                      eT.delete(e, { at: a }), (a = s.unref());
                    }
                  else eu.isPath(a) && (a = H.start(e, a));
                  if (!(!u && H.void(e, { at: a }))) {
                    var l = H.above(e, {
                      at: a,
                      match: (t) => q.isElement(t) && H.isInline(e, t),
                      mode: "highest",
                      voids: u,
                    });
                    if (l) {
                      var [, c] = l;
                      H.isEnd(e, a, c)
                        ? (a = H.after(e, c))
                        : H.isStart(e, a, c) && (a = H.before(e, c));
                    }
                    var [, d] = H.above(e, {
                        match: (t) => q.isElement(t) && H.isBlock(e, t),
                        at: a,
                        voids: u,
                      }),
                      f = H.isStart(e, a, d),
                      h = H.isEnd(e, a, d),
                      p = f && h,
                      g = !f || (f && h),
                      D = !h,
                      [, v] = et.first({ children: t }, []),
                      [, m] = et.last({ children: t }, []),
                      C = [],
                      B = (t) => {
                        var [r, n] = t;
                        return (
                          0 !== n.length &&
                          (!!p ||
                            !(
                              (g &&
                                eu.isAncestor(n, v) &&
                                q.isElement(r) &&
                                !e.isVoid(r) &&
                                !e.isInline(r)) ||
                              (D &&
                                eu.isAncestor(n, m) &&
                                q.isElement(r) &&
                                !e.isVoid(r) &&
                                !e.isInline(r))
                            ))
                        );
                      };
                    for (var E of et.nodes({ children: t }, { pass: B }))
                      B(E) && C.push(E);
                    var y = [],
                      w = [],
                      A = [],
                      b = !0,
                      F = !1;
                    for (var [_] of C)
                      q.isElement(_) && !e.isInline(_)
                        ? ((b = !1), (F = !0), w.push(_))
                        : b
                          ? y.push(_)
                          : A.push(_);
                    var [k] = H.nodes(e, {
                        at: a,
                        match: (t) => ey.isText(t) || H.isInline(e, t),
                        mode: "highest",
                        voids: u,
                      }),
                      [, x] = k,
                      O = H.isStart(e, a, x),
                      P = H.isEnd(e, a, x),
                      z = H.pathRef(e, h && !A.length ? eu.next(d) : d),
                      S = H.pathRef(e, P ? eu.next(x) : x);
                    eT.splitNodes(e, {
                      at: a,
                      match: (t) =>
                        F
                          ? q.isElement(t) && H.isBlock(e, t)
                          : ey.isText(t) || H.isInline(e, t),
                      mode: F ? "lowest" : "highest",
                      always: F && (!f || y.length > 0) && (!h || A.length > 0),
                      voids: u,
                    });
                    var j = H.pathRef(e, !O || (O && P) ? eu.next(x) : x);
                    if (
                      (eT.insertNodes(e, y, {
                        at: j.current,
                        match: (t) => ey.isText(t) || H.isInline(e, t),
                        mode: "highest",
                        voids: u,
                      }),
                      p &&
                        !y.length &&
                        w.length &&
                        !A.length &&
                        eT.delete(e, { at: d, voids: u }),
                      eT.insertNodes(e, w, {
                        at: z.current,
                        match: (t) => q.isElement(t) && H.isBlock(e, t),
                        mode: "lowest",
                        voids: u,
                      }),
                      eT.insertNodes(e, A, {
                        at: S.current,
                        match: (t) => ey.isText(t) || H.isInline(e, t),
                        mode: "highest",
                        voids: u,
                      }),
                      !r.at &&
                        (A.length > 0 && S.current
                          ? (n = eu.previous(S.current))
                          : w.length > 0 && z.current
                            ? (n = eu.previous(z.current))
                            : j.current && (n = eu.previous(j.current)),
                        n))
                    ) {
                      var T = H.end(e, n);
                      eT.select(e, T);
                    }
                    j.unref(), z.unref(), S.unref();
                  }
                }
              }
            });
          },
          insertText(e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            H.withoutNormalizing(e, () => {
              var { voids: n = !1 } = r,
                { at: i = e.selection } = r;
              if (i) {
                if ((eu.isPath(i) && (i = H.range(e, i)), eh.isRange(i)))
                  if (eh.isCollapsed(i)) i = i.anchor;
                  else {
                    var u = eh.end(i);
                    if (!n && H.void(e, { at: u })) return;
                    var a = eh.start(i),
                      o = H.pointRef(e, a),
                      s = H.pointRef(e, u);
                    eT.delete(e, { at: i, voids: n });
                    var l = o.unref(),
                      c = s.unref();
                    (i = l || c), eT.setSelection(e, { anchor: i, focus: i });
                  }
                if (!(!n && H.void(e, { at: i }))) {
                  var { path: d, offset: f } = i;
                  t.length > 0 &&
                    e.apply({
                      type: "insert_text",
                      path: d,
                      offset: f,
                      text: t,
                    });
                }
              }
            });
          },
        },
      );
      r.d(
        t,
        {},
        {
          EY: ey,
          Hg: q,
          KE: H,
          Q6: eh,
          bP: et,
          bR: el,
          gB: eT,
          h6: eD,
          ie: () => {
            var e = {
              children: [],
              operations: [],
              selection: null,
              marks: null,
              isInline: () => !1,
              isVoid: () => !1,
              markableVoid: () => !1,
              onChange: () => {},
              apply: (t) => {
                for (var r of H.pathRefs(e)) ea.transform(r, t);
                for (var n of H.pointRefs(e)) ec.transform(n, t);
                for (var i of H.rangeRefs(e)) ep.transform(i, t);
                var u,
                  a,
                  o = s.get(e) || [],
                  d = l.get(e) || new Set(),
                  f = (e) => {
                    if (e) {
                      var t = e.join(",");
                      a.has(t) || (a.add(t), u.push(e));
                    }
                  };
                if (eu.operationCanTransformPath(t))
                  for (var h of ((u = []), (a = new Set()), o))
                    f(eu.transform(h, t));
                else (u = o), (a = d);
                for (var p of e.getDirtyPaths(t)) f(p);
                s.set(e, u),
                  l.set(e, a),
                  eT.transform(e, t),
                  e.operations.push(t),
                  H.normalize(e, { operation: t }),
                  "set_selection" === t.type && (e.marks = null),
                  c.get(e) ||
                    (c.set(e, !0),
                    Promise.resolve().then(() => {
                      c.set(e, !1),
                        e.onChange({ operation: t }),
                        (e.operations = []);
                    }));
              },
              addMark: (t, r) => {
                var { selection: n, markableVoid: i } = e;
                if (n) {
                  var u = (t, r) => {
                      if (!ey.isText(t)) return !1;
                      var [n, i] = H.parent(e, r);
                      return !e.isVoid(n) || e.markableVoid(n);
                    },
                    a = eh.isExpanded(n),
                    o = !1;
                  if (!a) {
                    var [s, l] = H.node(e, n);
                    if (s && u(s, l)) {
                      var [d] = H.parent(e, l);
                      o = d && e.markableVoid(d);
                    }
                  }
                  if (a || o)
                    eT.setNodes(
                      e,
                      { [t]: r },
                      { match: u, split: !0, voids: !0 },
                    );
                  else {
                    var f = D(D({}, H.marks(e) || {}), {}, { [t]: r });
                    (e.marks = f), c.get(e) || e.onChange();
                  }
                }
              },
              deleteBackward: (t) => {
                var { selection: r } = e;
                r &&
                  eh.isCollapsed(r) &&
                  eT.delete(e, { unit: t, reverse: !0 });
              },
              deleteForward: (t) => {
                var { selection: r } = e;
                r && eh.isCollapsed(r) && eT.delete(e, { unit: t });
              },
              deleteFragment: (t) => {
                var { selection: r } = e;
                r &&
                  eh.isExpanded(r) &&
                  eT.delete(e, { reverse: "backward" === t });
              },
              getFragment: () => {
                var { selection: t } = e;
                return t ? et.fragment(e, t) : [];
              },
              insertBreak: () => {
                eT.splitNodes(e, { always: !0 });
              },
              insertSoftBreak: () => {
                eT.splitNodes(e, { always: !0 });
              },
              insertFragment: (t) => {
                eT.insertFragment(e, t);
              },
              insertNode: (t) => {
                eT.insertNodes(e, t);
              },
              insertText: (t) => {
                var { selection: r, marks: n } = e;
                if (r) {
                  if (n) {
                    var i = D({ text: t }, n);
                    eT.insertNodes(e, i);
                  } else eT.insertText(e, t);
                  e.marks = null;
                }
              },
              normalizeNode: (t) => {
                var [r, n] = t;
                if (!ey.isText(r)) {
                  if (q.isElement(r) && 0 === r.children.length)
                    return void eT.insertNodes(
                      e,
                      { text: "" },
                      { at: n.concat(0), voids: !0 },
                    );
                  for (
                    var i =
                        !H.isEditor(r) &&
                        q.isElement(r) &&
                        (e.isInline(r) ||
                          0 === r.children.length ||
                          ey.isText(r.children[0]) ||
                          e.isInline(r.children[0])),
                      u = 0,
                      a = 0;
                    a < r.children.length;
                    a++, u++
                  ) {
                    var o = et.get(e, n);
                    if (!ey.isText(o)) {
                      var s = r.children[a],
                        l = o.children[u - 1],
                        c = a === r.children.length - 1;
                      if (
                        (ey.isText(s) || (q.isElement(s) && e.isInline(s))) !==
                        i
                      )
                        eT.removeNodes(e, { at: n.concat(u), voids: !0 }), u--;
                      else if (q.isElement(s)) {
                        if (e.isInline(s))
                          if (null != l && ey.isText(l)) {
                            if (c) {
                              var d = { text: "" };
                              eT.insertNodes(e, d, {
                                at: n.concat(u + 1),
                                voids: !0,
                              }),
                                u++;
                            }
                          } else {
                            var f = { text: "" };
                            eT.insertNodes(e, f, {
                              at: n.concat(u),
                              voids: !0,
                            }),
                              u++;
                          }
                      } else
                        null != l &&
                          ey.isText(l) &&
                          (ey.equals(s, l, { loose: !0 })
                            ? (eT.mergeNodes(e, { at: n.concat(u), voids: !0 }),
                              u--)
                            : "" === l.text
                              ? (eT.removeNodes(e, {
                                  at: n.concat(u - 1),
                                  voids: !0,
                                }),
                                u--)
                              : "" === s.text &&
                                (eT.removeNodes(e, {
                                  at: n.concat(u),
                                  voids: !0,
                                }),
                                u--));
                    }
                  }
                }
              },
              removeMark: (t) => {
                var { selection: r } = e;
                if (r) {
                  var n = (t, r) => {
                      if (!ey.isText(t)) return !1;
                      var [n, i] = H.parent(e, r);
                      return !e.isVoid(n) || e.markableVoid(n);
                    },
                    i = eh.isExpanded(r),
                    u = !1;
                  if (!i) {
                    var [a, o] = H.node(e, r);
                    if (a && n(a, o)) {
                      var [s] = H.parent(e, o);
                      u = s && e.markableVoid(s);
                    }
                  }
                  if (i || u)
                    eT.unsetNodes(e, t, { match: n, split: !0, voids: !0 });
                  else {
                    var l = D({}, H.marks(e) || {});
                    delete l[t], (e.marks = l), c.get(e) || e.onChange();
                  }
                }
              },
              getDirtyPaths: (e) => {
                switch (e.type) {
                  case "insert_text":
                  case "remove_text":
                  case "set_node":
                    var { path: t } = e;
                    return eu.levels(t);
                  case "insert_node":
                    var { node: r, path: n } = e,
                      i = eu.levels(n),
                      u = ey.isText(r)
                        ? []
                        : Array.from(et.nodes(r), (e) => {
                            var [, t] = e;
                            return n.concat(t);
                          });
                    return [...i, ...u];
                  case "merge_node":
                    var { path: a } = e,
                      o = eu.ancestors(a),
                      s = eu.previous(a);
                    return [...o, s];
                  case "move_node":
                    var { path: l, newPath: c } = e;
                    if (eu.equals(l, c)) return [];
                    var d = [],
                      f = [];
                    for (var h of eu.ancestors(l)) {
                      var p = eu.transform(h, e);
                      d.push(p);
                    }
                    for (var g of eu.ancestors(c)) {
                      var D = eu.transform(g, e);
                      f.push(D);
                    }
                    var v = f[f.length - 1],
                      m = c[c.length - 1],
                      C = v.concat(m);
                    return [...d, ...f, C];
                  case "remove_node":
                    var { path: B } = e;
                    return [...eu.ancestors(B)];
                  case "split_node":
                    var { path: E } = e,
                      y = eu.levels(E),
                      w = eu.next(E);
                    return [...y, w];
                  default:
                    return [];
                }
              },
              shouldNormalize: (e) => {
                var { iteration: t, initialDirtyPathsLength: r } = e,
                  n = 42 * r;
                if (t > n)
                  throw Error(
                    "Could not completely normalize the editor after ".concat(
                      n,
                      " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state.",
                    ),
                  );
                return !0;
              },
            };
            return e;
          },
          wA: eu,
        },
      );
    },
    483606(e, t, r) {
      "use strict";
      var n = r(557939),
        i = r(410323),
        u = r(321727),
        a = r(304880),
        o = i("".charCodeAt);
      n(
        { target: "String", proto: !0 },
        {
          isWellFormed: function () {
            for (var e = a(u(this)), t = e.length, r = 0; r < t; r++) {
              var n = o(e, r);
              if (
                (63488 & n) == 55296 &&
                (n >= 56320 || ++r >= t || (64512 & o(e, r)) != 56320)
              )
                return !1;
            }
            return !0;
          },
        },
      );
    },
    162929(e, t, r) {
      "use strict";
      var n,
        i,
        u = "0123456789abcdef",
        a =
          "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
        o =
          "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
        s = {
          precision: 20,
          rounding: 4,
          modulo: 1,
          toExpNeg: -7,
          toExpPos: 21,
          minE: -9e15,
          maxE: 9e15,
          crypto: !1,
        },
        l = !0,
        c = "[DecimalError] ",
        d = c + "Invalid argument: ",
        f = c + "Precision limit exceeded",
        h = c + "crypto unavailable",
        p = "[object Decimal]",
        g = Math.floor,
        D = Math.pow,
        v = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
        m = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
        C = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
        B = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        E = a.length - 1,
        y = o.length - 1,
        w = { toStringTag: p };
      function A(e) {
        var t,
          r,
          n,
          i = e.length - 1,
          u = "",
          a = e[0];
        if (i > 0) {
          for (u += a, t = 1; t < i; t++)
            (r = 7 - (n = e[t] + "").length) && (u += T(r)), (u += n);
          (r = 7 - (n = (a = e[t]) + "").length) && (u += T(r));
        } else if (0 === a) return "0";
        for (; a % 10 == 0; ) a /= 10;
        return u + a;
      }
      function b(e, t, r) {
        if (e !== ~~e || e < t || e > r) throw Error(d + e);
      }
      function F(e, t, r, n) {
        var i, u, a, o;
        for (u = e[0]; u >= 10; u /= 10) --t;
        return (
          --t < 0
            ? ((t += 7), (i = 0))
            : ((i = Math.ceil((t + 1) / 7)), (t %= 7)),
          (u = D(10, 7 - t)),
          (o = e[i] % u | 0),
          null == n
            ? t < 3
              ? (0 == t ? (o = (o / 100) | 0) : 1 == t && (o = (o / 10) | 0),
                (a =
                  (r < 4 && 99999 == o) ||
                  (r > 3 && 49999 == o) ||
                  5e4 == o ||
                  0 == o))
              : (a =
                  (((r < 4 && o + 1 == u) || (r > 3 && o + 1 == u / 2)) &&
                    ((e[i + 1] / u / 100) | 0) == D(10, t - 2) - 1) ||
                  ((o == u / 2 || 0 == o) && ((e[i + 1] / u / 100) | 0) == 0))
            : t < 4
              ? (0 == t
                  ? (o = (o / 1e3) | 0)
                  : 1 == t
                    ? (o = (o / 100) | 0)
                    : 2 == t && (o = (o / 10) | 0),
                (a = ((n || r < 4) && 9999 == o) || (!n && r > 3 && 4999 == o)))
              : (a =
                  (((n || r < 4) && o + 1 == u) ||
                    (!n && r > 3 && o + 1 == u / 2)) &&
                  ((e[i + 1] / u / 1e3) | 0) == D(10, t - 3) - 1),
          a
        );
      }
      function _(e, t, r) {
        for (var n, i, a = [0], o = 0, s = e.length; o < s; ) {
          for (i = a.length; i--; ) a[i] *= t;
          for (a[0] += u.indexOf(e.charAt(o++)), n = 0; n < a.length; n++)
            a[n] > r - 1 &&
              (void 0 === a[n + 1] && (a[n + 1] = 0),
              (a[n + 1] += (a[n] / r) | 0),
              (a[n] %= r));
        }
        return a.reverse();
      }
      (w.absoluteValue = w.abs =
        function () {
          var e = new this.constructor(this);
          return e.s < 0 && (e.s = 1), x(e);
        }),
        (w.ceil = function () {
          return x(new this.constructor(this), this.e + 1, 2);
        }),
        (w.clampedTo = w.clamp =
          function (e, t) {
            var r = this.constructor;
            if (((e = new r(e)), (t = new r(t)), !e.s || !t.s))
              return new r(0 / 0);
            if (e.gt(t)) throw Error(d + t);
            return 0 > this.cmp(e) ? e : this.cmp(t) > 0 ? t : new r(this);
          }),
        (w.comparedTo = w.cmp =
          function (e) {
            var t,
              r,
              n,
              i,
              u = this.d,
              a = (e = new this.constructor(e)).d,
              o = this.s,
              s = e.s;
            if (!u || !a)
              return o && s
                ? o !== s
                  ? o
                  : u === a
                    ? 0
                    : !u ^ (o < 0)
                      ? 1
                      : -1
                : 0 / 0;
            if (!u[0] || !a[0]) return u[0] ? o : a[0] ? -s : 0;
            if (o !== s) return o;
            if (this.e !== e.e) return (this.e > e.e) ^ (o < 0) ? 1 : -1;
            for (
              n = u.length, t = 0, r = n < (i = a.length) ? n : i;
              t < r;
              ++t
            )
              if (u[t] !== a[t]) return (u[t] > a[t]) ^ (o < 0) ? 1 : -1;
            return n === i ? 0 : (n > i) ^ (o < 0) ? 1 : -1;
          }),
        (w.cosine = w.cos =
          function () {
            var e,
              t,
              r = this,
              n = r.constructor;
            return r.d
              ? r.d[0]
                ? ((e = n.precision),
                  (t = n.rounding),
                  (n.precision = e + Math.max(r.e, r.sd()) + 7),
                  (n.rounding = 1),
                  (r = (function (e, t) {
                    var r, n, i;
                    if (t.isZero()) return t;
                    (n = t.d.length) < 32
                      ? (i = (1 / q(4, (r = Math.ceil(n / 3)))).toString())
                      : ((r = 16), (i = "2.3283064365386962890625e-10")),
                      (e.precision += r),
                      (t = L(e, 1, t.times(i), new e(1)));
                    for (var u = r; u--; ) {
                      var a = t.times(t);
                      t = a.times(a).minus(a).times(8).plus(1);
                    }
                    return (e.precision -= r), t;
                  })(n, W(n, r))),
                  (n.precision = e),
                  (n.rounding = t),
                  x(2 == i || 3 == i ? r.neg() : r, e, t, !0))
                : new n(1)
              : new n(0 / 0);
          }),
        (w.cubeRoot = w.cbrt =
          function () {
            var e,
              t,
              r,
              n,
              i,
              u,
              a,
              o,
              s,
              c,
              d = this.constructor;
            if (!this.isFinite() || this.isZero()) return new d(this);
            for (
              l = !1,
                (u = this.s * D(this.s * this, 1 / 3)) && 1 / 0 != Math.abs(u)
                  ? (n = new d(u.toString()))
                  : ((r = A(this.d)),
                    (u = ((e = this.e) - r.length + 1) % 3) &&
                      (r += 1 == u || -2 == u ? "0" : "00"),
                    (u = D(r, 1 / 3)),
                    (e = g((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
                    ((n = new d(
                      (r =
                        1 / 0 == u
                          ? "5e" + e
                          : (r = u.toExponential()).slice(
                              0,
                              r.indexOf("e") + 1,
                            ) + e),
                    )).s = this.s)),
                a = (e = d.precision) + 3;
              ;

            )
              if (
                ((n = k(
                  (c = (s = (o = n).times(o).times(o)).plus(this))
                    .plus(this)
                    .times(o),
                  c.plus(s),
                  a + 2,
                  1,
                )),
                A(o.d).slice(0, a) === (r = A(n.d)).slice(0, a))
              ) {
                if (
                  "9999" != (r = r.slice(a - 3, a + 1)) &&
                  (i || "4999" != r)
                ) {
                  (+r && (+r.slice(1) || "5" != r.charAt(0))) ||
                    (x(n, e + 1, 1), (t = !n.times(n).times(n).eq(this)));
                  break;
                }
                if (!i && (x(o, e + 1, 0), o.times(o).times(o).eq(this))) {
                  n = o;
                  break;
                }
                (a += 4), (i = 1);
              }
            return (l = !0), x(n, e, d.rounding, t);
          }),
        (w.decimalPlaces = w.dp =
          function () {
            var e,
              t = this.d,
              r = 0 / 0;
            if (t) {
              if (((r = ((e = t.length - 1) - g(this.e / 7)) * 7), (e = t[e])))
                for (; e % 10 == 0; e /= 10) r--;
              r < 0 && (r = 0);
            }
            return r;
          }),
        (w.dividedBy = w.div =
          function (e) {
            return k(this, new this.constructor(e));
          }),
        (w.dividedToIntegerBy = w.divToInt =
          function (e) {
            var t = this.constructor;
            return x(k(this, new t(e), 0, 1, 1), t.precision, t.rounding);
          }),
        (w.equals = w.eq =
          function (e) {
            return 0 === this.cmp(e);
          }),
        (w.floor = function () {
          return x(new this.constructor(this), this.e + 1, 3);
        }),
        (w.greaterThan = w.gt =
          function (e) {
            return this.cmp(e) > 0;
          }),
        (w.greaterThanOrEqualTo = w.gte =
          function (e) {
            var t = this.cmp(e);
            return 1 == t || 0 === t;
          }),
        (w.hyperbolicCosine = w.cosh =
          function () {
            var e,
              t,
              r,
              n,
              i,
              u = this,
              a = u.constructor,
              o = new a(1);
            if (!u.isFinite()) return new a(u.s ? 1 / 0 : 0 / 0);
            if (u.isZero()) return o;
            (r = a.precision),
              (n = a.rounding),
              (a.precision = r + Math.max(u.e, u.sd()) + 4),
              (a.rounding = 1),
              (i = u.d.length) < 32
                ? (t = (1 / q(4, (e = Math.ceil(i / 3)))).toString())
                : ((e = 16), (t = "2.3283064365386962890625e-10")),
              (u = L(a, 1, u.times(t), new a(1), !0));
            for (var s, l = e, c = new a(8); l--; )
              (s = u.times(u)), (u = o.minus(s.times(c.minus(s.times(c)))));
            return x(u, (a.precision = r), (a.rounding = n), !0);
          }),
        (w.hyperbolicSine = w.sinh =
          function () {
            var e,
              t,
              r,
              n,
              i = this,
              u = i.constructor;
            if (!i.isFinite() || i.isZero()) return new u(i);
            if (
              ((t = u.precision),
              (r = u.rounding),
              (u.precision = t + Math.max(i.e, i.sd()) + 4),
              (u.rounding = 1),
              (n = i.d.length) < 3)
            )
              i = L(u, 2, i, i, !0);
            else {
              (e = (e = 1.4 * Math.sqrt(n)) > 16 ? 16 : 0 | e),
                (i = L(u, 2, (i = i.times(1 / q(5, e))), i, !0));
              for (var a, o = new u(5), s = new u(16), l = new u(20); e--; )
                (a = i.times(i)),
                  (i = i.times(o.plus(a.times(s.times(a).plus(l)))));
            }
            return (u.precision = t), (u.rounding = r), x(i, t, r, !0);
          }),
        (w.hyperbolicTangent = w.tanh =
          function () {
            var e,
              t,
              r = this.constructor;
            return this.isFinite()
              ? this.isZero()
                ? new r(this)
                : ((e = r.precision),
                  (t = r.rounding),
                  (r.precision = e + 7),
                  (r.rounding = 1),
                  k(
                    this.sinh(),
                    this.cosh(),
                    (r.precision = e),
                    (r.rounding = t),
                  ))
              : new r(this.s);
          }),
        (w.inverseCosine = w.acos =
          function () {
            var e = this,
              t = e.constructor,
              r = e.abs().cmp(1),
              n = t.precision,
              i = t.rounding;
            return -1 !== r
              ? 0 === r
                ? e.isNeg()
                  ? S(t, n, i)
                  : new t(0)
                : new t(0 / 0)
              : e.isZero()
                ? S(t, n + 4, i).times(0.5)
                : ((t.precision = n + 6),
                  (t.rounding = 1),
                  (e = new t(1).minus(e).div(e.plus(1)).sqrt().atan()),
                  (t.precision = n),
                  (t.rounding = i),
                  e.times(2));
          }),
        (w.inverseHyperbolicCosine = w.acosh =
          function () {
            var e,
              t,
              r = this,
              n = r.constructor;
            return r.lte(1)
              ? new n(r.eq(1) ? 0 : 0 / 0)
              : r.isFinite()
                ? ((e = n.precision),
                  (t = n.rounding),
                  (n.precision = e + Math.max(Math.abs(r.e), r.sd()) + 4),
                  (n.rounding = 1),
                  (l = !1),
                  (r = r.times(r).minus(1).sqrt().plus(r)),
                  (l = !0),
                  (n.precision = e),
                  (n.rounding = t),
                  r.ln())
                : new n(r);
          }),
        (w.inverseHyperbolicSine = w.asinh =
          function () {
            var e,
              t,
              r = this,
              n = r.constructor;
            return !r.isFinite() || r.isZero()
              ? new n(r)
              : ((e = n.precision),
                (t = n.rounding),
                (n.precision = e + 2 * Math.max(Math.abs(r.e), r.sd()) + 6),
                (n.rounding = 1),
                (l = !1),
                (r = r.times(r).plus(1).sqrt().plus(r)),
                (l = !0),
                (n.precision = e),
                (n.rounding = t),
                r.ln());
          }),
        (w.inverseHyperbolicTangent = w.atanh =
          function () {
            var e,
              t,
              r,
              n,
              i = this,
              u = i.constructor;
            return i.isFinite()
              ? i.e >= 0
                ? new u(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : 0 / 0)
                : ((e = u.precision),
                    (t = u.rounding),
                    Math.max((n = i.sd()), e) < -(2 * i.e) - 1)
                  ? x(new u(i), e, t, !0)
                  : ((u.precision = r = n - i.e),
                    (i = k(i.plus(1), new u(1).minus(i), r + e, 1)),
                    (u.precision = e + 4),
                    (u.rounding = 1),
                    (i = i.ln()),
                    (u.precision = e),
                    (u.rounding = t),
                    i.times(0.5))
              : new u(0 / 0);
          }),
        (w.inverseSine = w.asin =
          function () {
            var e,
              t,
              r,
              n,
              i = this,
              u = i.constructor;
            return i.isZero()
              ? new u(i)
              : ((t = i.abs().cmp(1)),
                  (r = u.precision),
                  (n = u.rounding),
                  -1 !== t)
                ? 0 === t
                  ? (((e = S(u, r + 4, n).times(0.5)).s = i.s), e)
                  : new u(0 / 0)
                : ((u.precision = r + 6),
                  (u.rounding = 1),
                  (i = i.div(new u(1).minus(i.times(i)).sqrt().plus(1)).atan()),
                  (u.precision = r),
                  (u.rounding = n),
                  i.times(2));
          }),
        (w.inverseTangent = w.atan =
          function () {
            var e,
              t,
              r,
              n,
              i,
              u,
              a,
              o,
              s,
              c = this,
              d = c.constructor,
              f = d.precision,
              h = d.rounding;
            if (c.isFinite()) {
              if (c.isZero()) return new d(c);
              else if (c.abs().eq(1) && f + 4 <= y)
                return ((a = S(d, f + 4, h).times(0.25)).s = c.s), a;
            } else {
              if (!c.s) return new d(0 / 0);
              if (f + 4 <= y)
                return ((a = S(d, f + 4, h).times(0.5)).s = c.s), a;
            }
            for (
              d.precision = o = f + 10,
                d.rounding = 1,
                e = r = Math.min(28, (o / 7 + 2) | 0);
              e;
              --e
            )
              c = c.div(c.times(c).plus(1).sqrt().plus(1));
            for (
              l = !1,
                t = Math.ceil(o / 7),
                n = 1,
                s = c.times(c),
                a = new d(c),
                i = c;
              -1 !== e;

            )
              if (
                ((i = i.times(s)),
                (u = a.minus(i.div((n += 2)))),
                (i = i.times(s)),
                void 0 !== (a = u.plus(i.div((n += 2)))).d[t])
              )
                for (e = t; a.d[e] === u.d[e] && e--; );
            return (
              r && (a = a.times(2 << (r - 1))),
              (l = !0),
              x(a, (d.precision = f), (d.rounding = h), !0)
            );
          }),
        (w.isFinite = function () {
          return !!this.d;
        }),
        (w.isInteger = w.isInt =
          function () {
            return !!this.d && g(this.e / 7) > this.d.length - 2;
          }),
        (w.isNaN = function () {
          return !this.s;
        }),
        (w.isNegative = w.isNeg =
          function () {
            return this.s < 0;
          }),
        (w.isPositive = w.isPos =
          function () {
            return this.s > 0;
          }),
        (w.isZero = function () {
          return !!this.d && 0 === this.d[0];
        }),
        (w.lessThan = w.lt =
          function (e) {
            return 0 > this.cmp(e);
          }),
        (w.lessThanOrEqualTo = w.lte =
          function (e) {
            return 1 > this.cmp(e);
          }),
        (w.logarithm = w.log =
          function (e) {
            var t,
              r,
              n,
              i,
              u,
              a,
              o,
              s = this.constructor,
              c = s.precision,
              d = s.rounding;
            if (null == e) (e = new s(10)), (t = !0);
            else {
              if (((r = (e = new s(e)).d), e.s < 0 || !r || !r[0] || e.eq(1)))
                return new s(0 / 0);
              t = e.eq(10);
            }
            if (((r = this.d), this.s < 0 || !r || !r[0] || this.eq(1)))
              return new s(
                r && !r[0] ? -1 / 0 : 1 != this.s ? 0 / 0 : r ? 0 : 1 / 0,
              );
            if (t)
              if (r.length > 1) i = !0;
              else {
                for (n = r[0]; n % 10 == 0; ) n /= 10;
                i = 1 !== n;
              }
            if (
              ((l = !1),
              F(
                (o = k(
                  (u = I(this, (a = c + 5))),
                  t ? z(s, a + 10) : I(e, a),
                  a,
                  1,
                )).d,
                (n = c),
                d,
              ))
            )
              do
                if (
                  ((a += 10),
                  (o = k((u = I(this, a)), t ? z(s, a + 10) : I(e, a), a, 1)),
                  !i)
                ) {
                  +A(o.d).slice(n + 1, n + 15) + 1 == 1e14 &&
                    (o = x(o, c + 1, 0));
                  break;
                }
              while (F(o.d, (n += 10), d));
            return (l = !0), x(o, c, d);
          }),
        (w.minus = w.sub =
          function (e) {
            var t,
              r,
              n,
              i,
              u,
              a,
              o,
              s,
              c,
              d,
              f,
              h,
              p = this.constructor;
            if (((e = new p(e)), !this.d || !e.d))
              return (
                this.s && e.s
                  ? this.d
                    ? (e.s = -e.s)
                    : (e = new p(e.d || this.s !== e.s ? this : 0 / 0))
                  : (e = new p(0 / 0)),
                e
              );
            if (this.s != e.s) return (e.s = -e.s), this.plus(e);
            if (
              ((c = this.d),
              (h = e.d),
              (o = p.precision),
              (s = p.rounding),
              !c[0] || !h[0])
            ) {
              if (h[0]) e.s = -e.s;
              else {
                if (!c[0]) return new p(3 === s ? -0 : 0);
                e = new p(this);
              }
              return l ? x(e, o, s) : e;
            }
            if (
              ((r = g(e.e / 7)),
              (d = g(this.e / 7)),
              (c = c.slice()),
              (u = d - r))
            ) {
              for (
                (f = u < 0)
                  ? ((t = c), (u = -u), (a = h.length))
                  : ((t = h), (r = d), (a = c.length)),
                  u > (n = Math.max(Math.ceil(o / 7), a) + 2) &&
                    ((u = n), (t.length = 1)),
                  t.reverse(),
                  n = u;
                n--;

              )
                t.push(0);
              t.reverse();
            } else {
              for (
                (f = (n = c.length) < (a = h.length)) && (a = n), n = 0;
                n < a;
                n++
              )
                if (c[n] != h[n]) {
                  f = c[n] < h[n];
                  break;
                }
              u = 0;
            }
            for (
              f && ((t = c), (c = h), (h = t), (e.s = -e.s)),
                a = c.length,
                n = h.length - a;
              n > 0;
              --n
            )
              c[a++] = 0;
            for (n = h.length; n > u; ) {
              if (c[--n] < h[n]) {
                for (i = n; i && 0 === c[--i]; ) c[i] = 1e7 - 1;
                --c[i], (c[n] += 1e7);
              }
              c[n] -= h[n];
            }
            for (; 0 === c[--a]; ) c.pop();
            for (; 0 === c[0]; c.shift()) --r;
            return c[0]
              ? ((e.d = c), (e.e = P(c, r)), l ? x(e, o, s) : e)
              : new p(3 === s ? -0 : 0);
          }),
        (w.modulo = w.mod =
          function (e) {
            var t,
              r = this.constructor;
            return ((e = new r(e)), this.d && e.s && (!e.d || e.d[0]))
              ? e.d && (!this.d || this.d[0])
                ? ((l = !1),
                  9 == r.modulo
                    ? ((t = k(this, e.abs(), 0, 3, 1)), (t.s *= e.s))
                    : (t = k(this, e, 0, r.modulo, 1)),
                  (t = t.times(e)),
                  (l = !0),
                  this.minus(t))
                : x(new r(this), r.precision, r.rounding)
              : new r(0 / 0);
          }),
        (w.naturalExponential = w.exp =
          function () {
            return M(this);
          }),
        (w.naturalLogarithm = w.ln =
          function () {
            return I(this);
          }),
        (w.negated = w.neg =
          function () {
            var e = new this.constructor(this);
            return (e.s = -e.s), x(e);
          }),
        (w.plus = w.add =
          function (e) {
            var t,
              r,
              n,
              i,
              u,
              a,
              o,
              s,
              c,
              d,
              f = this.constructor;
            if (((e = new f(e)), !this.d || !e.d))
              return (
                this.s && e.s
                  ? this.d || (e = new f(e.d || this.s === e.s ? this : 0 / 0))
                  : (e = new f(0 / 0)),
                e
              );
            if (this.s != e.s) return (e.s = -e.s), this.minus(e);
            if (
              ((c = this.d),
              (d = e.d),
              (o = f.precision),
              (s = f.rounding),
              !c[0] || !d[0])
            )
              return d[0] || (e = new f(this)), l ? x(e, o, s) : e;
            if (
              ((u = g(this.e / 7)),
              (n = g(e.e / 7)),
              (c = c.slice()),
              (i = u - n))
            ) {
              for (
                i < 0
                  ? ((r = c), (i = -i), (a = d.length))
                  : ((r = d), (n = u), (a = c.length)),
                  i > (a = (u = Math.ceil(o / 7)) > a ? u + 1 : a + 1) &&
                    ((i = a), (r.length = 1)),
                  r.reverse();
                i--;

              )
                r.push(0);
              r.reverse();
            }
            for (
              (a = c.length) - (i = d.length) < 0 &&
                ((i = a), (r = d), (d = c), (c = r)),
                t = 0;
              i;

            )
              (t = ((c[--i] = c[i] + d[i] + t) / 1e7) | 0), (c[i] %= 1e7);
            for (t && (c.unshift(t), ++n), a = c.length; 0 == c[--a]; ) c.pop();
            return (e.d = c), (e.e = P(c, n)), l ? x(e, o, s) : e;
          }),
        (w.precision = w.sd =
          function (e) {
            var t;
            if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e)
              throw Error(d + e);
            return (
              this.d
                ? ((t = j(this.d)), e && this.e + 1 > t && (t = this.e + 1))
                : (t = 0 / 0),
              t
            );
          }),
        (w.round = function () {
          var e = this.constructor;
          return x(new e(this), this.e + 1, e.rounding);
        }),
        (w.sine = w.sin =
          function () {
            var e,
              t,
              r = this,
              n = r.constructor;
            return r.isFinite()
              ? r.isZero()
                ? new n(r)
                : ((e = n.precision),
                  (t = n.rounding),
                  (n.precision = e + Math.max(r.e, r.sd()) + 7),
                  (n.rounding = 1),
                  (r = (function (e, t) {
                    var r,
                      n = t.d.length;
                    if (n < 3) return t.isZero() ? t : L(e, 2, t, t);
                    (r = (r = 1.4 * Math.sqrt(n)) > 16 ? 16 : 0 | r),
                      (t = L(e, 2, (t = t.times(1 / q(5, r))), t));
                    for (
                      var i, u = new e(5), a = new e(16), o = new e(20);
                      r--;

                    )
                      (i = t.times(t)),
                        (t = t.times(u.plus(i.times(a.times(i).minus(o)))));
                    return t;
                  })(n, W(n, r))),
                  (n.precision = e),
                  (n.rounding = t),
                  x(i > 2 ? r.neg() : r, e, t, !0))
              : new n(0 / 0);
          }),
        (w.squareRoot = w.sqrt =
          function () {
            var e,
              t,
              r,
              n,
              i,
              u,
              a = this.d,
              o = this.e,
              s = this.s,
              c = this.constructor;
            if (1 !== s || !a || !a[0])
              return new c(
                !s || (s < 0 && (!a || a[0])) ? 0 / 0 : a ? this : 1 / 0,
              );
            for (
              l = !1,
                0 == (s = Math.sqrt(+this)) || 1 / 0 == s
                  ? (((t = A(a)).length + o) % 2 == 0 && (t += "0"),
                    (s = Math.sqrt(t)),
                    (o = g((o + 1) / 2) - (o < 0 || o % 2)),
                    (n = new c(
                      (t =
                        1 / 0 == s
                          ? "5e" + o
                          : (t = s.toExponential()).slice(
                              0,
                              t.indexOf("e") + 1,
                            ) + o),
                    )))
                  : (n = new c(s.toString())),
                r = (o = c.precision) + 3;
              ;

            )
              if (
                ((n = (u = n).plus(k(this, u, r + 2, 1)).times(0.5)),
                A(u.d).slice(0, r) === (t = A(n.d)).slice(0, r))
              ) {
                if (
                  "9999" != (t = t.slice(r - 3, r + 1)) &&
                  (i || "4999" != t)
                ) {
                  (+t && (+t.slice(1) || "5" != t.charAt(0))) ||
                    (x(n, o + 1, 1), (e = !n.times(n).eq(this)));
                  break;
                }
                if (!i && (x(u, o + 1, 0), u.times(u).eq(this))) {
                  n = u;
                  break;
                }
                (r += 4), (i = 1);
              }
            return (l = !0), x(n, o, c.rounding, e);
          }),
        (w.tangent = w.tan =
          function () {
            var e,
              t,
              r = this,
              n = r.constructor;
            return r.isFinite()
              ? r.isZero()
                ? new n(r)
                : ((e = n.precision),
                  (t = n.rounding),
                  (n.precision = e + 10),
                  (n.rounding = 1),
                  ((r = r.sin()).s = 1),
                  (r = k(r, new n(1).minus(r.times(r)).sqrt(), e + 10, 0)),
                  (n.precision = e),
                  (n.rounding = t),
                  x(2 == i || 4 == i ? r.neg() : r, e, t, !0))
              : new n(0 / 0);
          }),
        (w.times = w.mul =
          function (e) {
            var t,
              r,
              n,
              i,
              u,
              a,
              o,
              s,
              c,
              d = this.constructor,
              f = this.d,
              h = (e = new d(e)).d;
            if (((e.s *= this.s), !f || !f[0] || !h || !h[0]))
              return new d(
                !e.s || (f && !f[0] && !h) || (h && !h[0] && !f)
                  ? 0 / 0
                  : !f || !h
                    ? e.s / 0
                    : 0 * e.s,
              );
            for (
              r = g(this.e / 7) + g(e.e / 7),
                (s = f.length) < (c = h.length) &&
                  ((u = f), (f = h), (h = u), (a = s), (s = c), (c = a)),
                u = [],
                n = a = s + c;
              n--;

            )
              u.push(0);
            for (n = c; --n >= 0; ) {
              for (t = 0, i = s + n; i > n; )
                (o = u[i] + h[n] * f[i - n - 1] + t),
                  (u[i--] = o % 1e7 | 0),
                  (t = (o / 1e7) | 0);
              u[i] = (u[i] + t) % 1e7 | 0;
            }
            for (; !u[--a]; ) u.pop();
            return (
              t ? ++r : u.shift(),
              (e.d = u),
              (e.e = P(u, r)),
              l ? x(e, d.precision, d.rounding) : e
            );
          }),
        (w.toBinary = function (e, t) {
          return U(this, 2, e, t);
        }),
        (w.toDecimalPlaces = w.toDP =
          function (e, t) {
            var r = this,
              n = r.constructor;
            return ((r = new n(r)), void 0 === e)
              ? r
              : (b(e, 0, 1e9),
                void 0 === t ? (t = n.rounding) : b(t, 0, 8),
                x(r, e + r.e + 1, t));
          }),
        (w.toExponential = function (e, t) {
          var r,
            n = this,
            i = n.constructor;
          return (
            void 0 === e
              ? (r = O(n, !0))
              : (b(e, 0, 1e9),
                void 0 === t ? (t = i.rounding) : b(t, 0, 8),
                (r = O((n = x(new i(n), e + 1, t)), !0, e + 1))),
            n.isNeg() && !n.isZero() ? "-" + r : r
          );
        }),
        (w.toFixed = function (e, t) {
          var r,
            n,
            i = this.constructor;
          return (
            void 0 === e
              ? (r = O(this))
              : (b(e, 0, 1e9),
                void 0 === t ? (t = i.rounding) : b(t, 0, 8),
                (r = O(
                  (n = x(new i(this), e + this.e + 1, t)),
                  !1,
                  e + n.e + 1,
                ))),
            this.isNeg() && !this.isZero() ? "-" + r : r
          );
        }),
        (w.toFraction = function (e) {
          var t,
            r,
            n,
            i,
            u,
            a,
            o,
            s,
            c,
            f,
            h,
            p,
            g = this.d,
            v = this.constructor;
          if (!g) return new v(this);
          if (
            ((c = r = new v(1)),
            (n = s = new v(0)),
            (a = (u = (t = new v(n)).e = j(g) - this.e - 1) % 7),
            (t.d[0] = D(10, a < 0 ? 7 + a : a)),
            null == e)
          )
            e = u > 0 ? t : c;
          else {
            if (!(o = new v(e)).isInt() || o.lt(c)) throw Error(d + o);
            e = o.gt(t) ? (u > 0 ? t : c) : o;
          }
          for (
            l = !1,
              o = new v(A(g)),
              f = v.precision,
              v.precision = u = 7 * g.length * 2;
            (h = k(o, t, 0, 1, 1)), 1 != (i = r.plus(h.times(n))).cmp(e);

          )
            (r = n),
              (n = i),
              (i = c),
              (c = s.plus(h.times(i))),
              (s = i),
              (i = t),
              (t = o.minus(h.times(i))),
              (o = i);
          return (
            (i = k(e.minus(r), n, 0, 1, 1)),
            (s = s.plus(i.times(c))),
            (r = r.plus(i.times(n))),
            (s.s = c.s = this.s),
            (p =
              1 >
              k(c, n, u, 1)
                .minus(this)
                .abs()
                .cmp(k(s, r, u, 1).minus(this).abs())
                ? [c, n]
                : [s, r]),
            (v.precision = f),
            (l = !0),
            p
          );
        }),
        (w.toHexadecimal = w.toHex =
          function (e, t) {
            return U(this, 16, e, t);
          }),
        (w.toNearest = function (e, t) {
          var r = this,
            n = r.constructor;
          if (((r = new n(r)), null == e)) {
            if (!r.d) return r;
            (e = new n(1)), (t = n.rounding);
          } else {
            if (
              ((e = new n(e)),
              void 0 === t ? (t = n.rounding) : b(t, 0, 8),
              !r.d)
            )
              return e.s ? r : e;
            if (!e.d) return e.s && (e.s = r.s), e;
          }
          return (
            e.d[0]
              ? ((l = !1), (r = k(r, e, 0, t, 1).times(e)), (l = !0), x(r))
              : ((e.s = r.s), (r = e)),
            r
          );
        }),
        (w.toNumber = function () {
          return +this;
        }),
        (w.toOctal = function (e, t) {
          return U(this, 8, e, t);
        }),
        (w.toPower = w.pow =
          function (e) {
            var t,
              r,
              n,
              i,
              u,
              a,
              o = this,
              s = o.constructor,
              c = +(e = new s(e));
            if (!o.d || !e.d || !o.d[0] || !e.d[0]) return new s(D(+o, c));
            if ((o = new s(o)).eq(1)) return o;
            if (((n = s.precision), (u = s.rounding), e.eq(1)))
              return x(o, n, u);
            if (
              (t = g(e.e / 7)) >= e.d.length - 1 &&
              (r = c < 0 ? -c : c) <= 0x1fffffffffffff
            )
              return (
                (i = N(s, o, r, n)), e.s < 0 ? new s(1).div(i) : x(i, n, u)
              );
            if ((a = o.s) < 0) {
              if (t < e.d.length - 1) return new s(0 / 0);
              if (
                ((1 & e.d[t]) == 0 && (a = 1),
                0 == o.e && 1 == o.d[0] && 1 == o.d.length)
              )
                return (o.s = a), o;
            }
            return (t =
              0 != (r = D(+o, c)) && isFinite(r)
                ? new s(r + "").e
                : g(c * (Math.log("0." + A(o.d)) / Math.LN10 + o.e + 1))) >
              s.maxE + 1 || t < s.minE - 1
              ? new s(t > 0 ? a / 0 : 0)
              : ((l = !1),
                (s.rounding = o.s = 1),
                (r = Math.min(12, (t + "").length)),
                (i = M(e.times(I(o, n + r)), n)).d &&
                  F((i = x(i, n + 5, 1)).d, n, u) &&
                  ((t = n + 10),
                  +A((i = x(M(e.times(I(o, t + r)), t), t + 5, 1)).d).slice(
                    n + 1,
                    n + 15,
                  ) +
                    1 ==
                    1e14 && (i = x(i, n + 1, 0))),
                (i.s = a),
                (l = !0),
                (s.rounding = u),
                x(i, n, u));
          }),
        (w.toPrecision = function (e, t) {
          var r,
            n = this,
            i = n.constructor;
          return (
            void 0 === e
              ? (r = O(n, n.e <= i.toExpNeg || n.e >= i.toExpPos))
              : (b(e, 1, 1e9),
                void 0 === t ? (t = i.rounding) : b(t, 0, 8),
                (r = O(
                  (n = x(new i(n), e, t)),
                  e <= n.e || n.e <= i.toExpNeg,
                  e,
                ))),
            n.isNeg() && !n.isZero() ? "-" + r : r
          );
        }),
        (w.toSignificantDigits = w.toSD =
          function (e, t) {
            var r = this.constructor;
            return (
              void 0 === e
                ? ((e = r.precision), (t = r.rounding))
                : (b(e, 1, 1e9), void 0 === t ? (t = r.rounding) : b(t, 0, 8)),
              x(new r(this), e, t)
            );
          }),
        (w.toString = function () {
          var e = this.constructor,
            t = O(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
          return this.isNeg() && !this.isZero() ? "-" + t : t;
        }),
        (w.truncated = w.trunc =
          function () {
            return x(new this.constructor(this), this.e + 1, 1);
          }),
        (w.valueOf = w.toJSON =
          function () {
            var e = this.constructor,
              t = O(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
            return this.isNeg() ? "-" + t : t;
          });
      var k = (function () {
        function e(e, t, r) {
          var n,
            i = 0,
            u = e.length;
          for (e = e.slice(); u--; )
            (n = e[u] * t + i), (e[u] = n % r | 0), (i = (n / r) | 0);
          return i && e.unshift(i), e;
        }
        function t(e, t, r, n) {
          var i, u;
          if (r != n) u = r > n ? 1 : -1;
          else
            for (i = u = 0; i < r; i++)
              if (e[i] != t[i]) {
                u = e[i] > t[i] ? 1 : -1;
                break;
              }
          return u;
        }
        function r(e, t, r, n) {
          for (var i = 0; r--; )
            (e[r] -= i), (i = +(e[r] < t[r])), (e[r] = i * n + e[r] - t[r]);
          for (; !e[0] && e.length > 1; ) e.shift();
        }
        return function (i, u, a, o, s, l) {
          var c,
            d,
            f,
            h,
            p,
            D,
            v,
            m,
            C,
            B,
            E,
            y,
            w,
            A,
            b,
            F,
            _,
            k,
            O,
            P,
            z = i.constructor,
            S = i.s == u.s ? 1 : -1,
            j = i.d,
            T = u.d;
          if (!j || !j[0] || !T || !T[0])
            return new z(
              !i.s || !u.s || (j ? T && j[0] == T[0] : !T)
                ? 0 / 0
                : (j && 0 == j[0]) || !T
                  ? 0 * S
                  : S / 0,
            );
          for (
            l
              ? ((p = 1), (d = i.e - u.e))
              : ((l = 1e7), (p = 7), (d = g(i.e / p) - g(u.e / p))),
              O = T.length,
              _ = j.length,
              B = (C = new z(S)).d = [],
              f = 0;
            T[f] == (j[f] || 0);
            f++
          );
          if (
            (T[f] > (j[f] || 0) && d--,
            null == a
              ? ((A = a = z.precision), (o = z.rounding))
              : (A = s ? a + (i.e - u.e) + 1 : a),
            A < 0)
          )
            B.push(1), (D = !0);
          else {
            if (((A = (A / p + 2) | 0), (f = 0), 1 == O)) {
              for (h = 0, T = T[0], A++; (f < _ || h) && A--; f++)
                (b = h * l + (j[f] || 0)),
                  (B[f] = (b / T) | 0),
                  (h = b % T | 0);
              D = h || f < _;
            } else {
              for (
                (h = (l / (T[0] + 1)) | 0) > 1 &&
                  ((T = e(T, h, l)),
                  (j = e(j, h, l)),
                  (O = T.length),
                  (_ = j.length)),
                  F = O,
                  y = (E = j.slice(0, O)).length;
                y < O;

              )
                E[y++] = 0;
              (P = T.slice()).unshift(0), (k = T[0]), T[1] >= l / 2 && ++k;
              do
                (h = 0),
                  (c = t(T, E, O, y)) < 0
                    ? ((w = E[0]),
                      O != y && (w = w * l + (E[1] || 0)),
                      (h = (w / k) | 0) > 1
                        ? (h >= l && (h = l - 1),
                          (m = (v = e(T, h, l)).length),
                          (y = E.length),
                          1 == (c = t(v, E, m, y)) &&
                            (h--, r(v, O < m ? P : T, m, l)))
                        : (0 == h && (c = h = 1), (v = T.slice())),
                      (m = v.length) < y && v.unshift(0),
                      r(E, v, y, l),
                      -1 == c &&
                        ((y = E.length),
                        (c = t(T, E, O, y)) < 1 &&
                          (h++, r(E, O < y ? P : T, y, l))),
                      (y = E.length))
                    : 0 === c && (h++, (E = [0])),
                  (B[f++] = h),
                  c && E[0] ? (E[y++] = j[F] || 0) : ((E = [j[F]]), (y = 1));
              while ((F++ < _ || void 0 !== E[0]) && A--);
              D = void 0 !== E[0];
            }
            B[0] || B.shift();
          }
          if (1 == p) (C.e = d), (n = D);
          else {
            for (f = 1, h = B[0]; h >= 10; h /= 10) f++;
            (C.e = f + d * p - 1), x(C, s ? a + C.e + 1 : a, o, D);
          }
          return C;
        };
      })();
      function x(e, t, r, n) {
        var i,
          u,
          a,
          o,
          s,
          c,
          d,
          f,
          h,
          p = e.constructor;
        e: if (null != t) {
          if (!(f = e.d)) return e;
          for (i = 1, o = f[0]; o >= 10; o /= 10) i++;
          if ((u = t - i) < 0)
            (u += 7),
              (a = t),
              (s = ((d = f[(h = 0)]) / D(10, i - a - 1)) % 10 | 0);
          else if ((h = Math.ceil((u + 1) / 7)) >= (o = f.length))
            if (n) {
              for (; o++ <= h; ) f.push(0);
              (d = s = 0), (i = 1), (u %= 7), (a = u - 7 + 1);
            } else break e;
          else {
            for (d = o = f[h], i = 1; o >= 10; o /= 10) i++;
            (u %= 7),
              (s = (a = u - 7 + i) < 0 ? 0 : (d / D(10, i - a - 1)) % 10 | 0);
          }
          if (
            ((n =
              n ||
              t < 0 ||
              void 0 !== f[h + 1] ||
              (a < 0 ? d : d % D(10, i - a - 1))),
            (c =
              r < 4
                ? (s || n) && (0 == r || r == (e.s < 0 ? 3 : 2))
                : s > 5 ||
                  (5 == s &&
                    (4 == r ||
                      n ||
                      (6 == r &&
                        (u > 0 ? (a > 0 ? d / D(10, i - a) : 0) : f[h - 1]) %
                          10 &
                          1) ||
                      r == (e.s < 0 ? 8 : 7)))),
            t < 1 || !f[0])
          )
            return (
              (f.length = 0),
              c
                ? ((t -= e.e + 1),
                  (f[0] = D(10, (7 - (t % 7)) % 7)),
                  (e.e = -t || 0))
                : (f[0] = e.e = 0),
              e
            );
          if (
            (0 == u
              ? ((f.length = h), (o = 1), h--)
              : ((f.length = h + 1),
                (o = D(10, 7 - u)),
                (f[h] = a > 0 ? ((d / D(10, i - a)) % D(10, a) | 0) * o : 0)),
            c)
          )
            for (;;)
              if (0 == h) {
                for (u = 1, a = f[0]; a >= 10; a /= 10) u++;
                for (a = f[0] += o, o = 1; a >= 10; a /= 10) o++;
                u != o && (e.e++, 1e7 == f[0] && (f[0] = 1));
                break;
              } else {
                if (((f[h] += o), 1e7 != f[h])) break;
                (f[h--] = 0), (o = 1);
              }
          for (u = f.length; 0 === f[--u]; ) f.pop();
        }
        return (
          l &&
            (e.e > p.maxE
              ? ((e.d = null), (e.e = 0 / 0))
              : e.e < p.minE && ((e.e = 0), (e.d = [0]))),
          e
        );
      }
      function O(e, t, r) {
        if (!e.isFinite()) return Z(e);
        var n,
          i = e.e,
          u = A(e.d),
          a = u.length;
        return (
          t
            ? (r && (n = r - a) > 0
                ? (u = u.charAt(0) + "." + u.slice(1) + T(n))
                : a > 1 && (u = u.charAt(0) + "." + u.slice(1)),
              (u = u + (e.e < 0 ? "e" : "e+") + e.e))
            : i < 0
              ? ((u = "0." + T(-i - 1) + u),
                r && (n = r - a) > 0 && (u += T(n)))
              : i >= a
                ? ((u += T(i + 1 - a)),
                  r && (n = r - i - 1) > 0 && (u = u + "." + T(n)))
                : ((n = i + 1) < a && (u = u.slice(0, n) + "." + u.slice(n)),
                  r &&
                    (n = r - a) > 0 &&
                    (i + 1 === a && (u += "."), (u += T(n)))),
          u
        );
      }
      function P(e, t) {
        var r = e[0];
        for (t *= 7; r >= 10; r /= 10) t++;
        return t;
      }
      function z(e, t, r) {
        if (t > E) throw ((l = !0), r && (e.precision = r), Error(f));
        return x(new e(a), t, 1, !0);
      }
      function S(e, t, r) {
        if (t > y) throw Error(f);
        return x(new e(o), t, r, !0);
      }
      function j(e) {
        var t = e.length - 1,
          r = 7 * t + 1;
        if ((t = e[t])) {
          for (; t % 10 == 0; t /= 10) r--;
          for (t = e[0]; t >= 10; t /= 10) r++;
        }
        return r;
      }
      function T(e) {
        for (var t = ""; e--; ) t += "0";
        return t;
      }
      function N(e, t, r, n) {
        var i,
          u = new e(1),
          a = Math.ceil(n / 7 + 4);
        for (l = !1; ; ) {
          if (
            (r % 2 && V((u = u.times(t)).d, a) && (i = !0),
            0 === (r = g(r / 2)))
          ) {
            (r = u.d.length - 1), i && 0 === u.d[r] && ++u.d[r];
            break;
          }
          V((t = t.times(t)).d, a);
        }
        return (l = !0), u;
      }
      function $(e) {
        return 1 & e.d[e.d.length - 1];
      }
      function R(e, t, r) {
        for (var n, i, u = new e(t[0]), a = 0; ++a < t.length; ) {
          if (!(i = new e(t[a])).s) {
            u = i;
            break;
          }
          ((n = u.cmp(i)) === r || (0 === n && u.s === r)) && (u = i);
        }
        return u;
      }
      function M(e, t) {
        var r,
          n,
          i,
          u,
          a,
          o,
          s,
          c = 0,
          d = 0,
          f = 0,
          h = e.constructor,
          p = h.rounding,
          g = h.precision;
        if (!e.d || !e.d[0] || e.e > 17)
          return new h(
            e.d
              ? !e.d[0]
                ? 1
                : e.s < 0
                  ? 0
                  : 1 / 0
              : e.s
                ? e.s < 0
                  ? 0
                  : e
                : 0 / 0,
          );
        for (
          null == t ? ((l = !1), (s = g)) : (s = t), o = new h(0.03125);
          e.e > -2;

        )
          (e = e.times(o)), (f += 5);
        for (
          s += n = ((Math.log(D(2, f)) / Math.LN10) * 2 + 5) | 0,
            r = u = a = new h(1),
            h.precision = s;
          ;

        ) {
          if (
            ((u = x(u.times(e), s, 1)),
            (r = r.times(++d)),
            A((o = a.plus(k(u, r, s, 1))).d).slice(0, s) === A(a.d).slice(0, s))
          ) {
            for (i = f; i--; ) a = x(a.times(a), s, 1);
            if (null != t) return (h.precision = g), a;
            if (!(c < 3 && F(a.d, s - n, p, c)))
              return x(a, (h.precision = g), p, (l = !0));
            (h.precision = s += 10), (r = u = o = new h(1)), (d = 0), c++;
          }
          a = o;
        }
      }
      function I(e, t) {
        var r,
          n,
          i,
          u,
          a,
          o,
          s,
          c,
          d,
          f,
          h,
          p = 1,
          g = e,
          D = g.d,
          v = g.constructor,
          m = v.rounding,
          C = v.precision;
        if (g.s < 0 || !D || !D[0] || (!g.e && 1 == D[0] && 1 == D.length))
          return new v(D && !D[0] ? -1 / 0 : 1 != g.s ? 0 / 0 : D ? 0 : g);
        if (
          (null == t ? ((l = !1), (d = C)) : (d = t),
          (v.precision = d += 10),
          (n = (r = A(D)).charAt(0)),
          !(15e14 > Math.abs((u = g.e))))
        )
          return (
            (c = z(v, d + 2, C).times(u + "")),
            (g = I(new v(n + "." + r.slice(1)), d - 10).plus(c)),
            (v.precision = C),
            null == t ? x(g, C, m, (l = !0)) : g
          );
        for (; (n < 7 && 1 != n) || (1 == n && r.charAt(1) > 3); )
          (n = (r = A((g = g.times(e)).d)).charAt(0)), p++;
        for (
          u = g.e,
            n > 1
              ? ((g = new v("0." + r)), u++)
              : (g = new v(n + "." + r.slice(1))),
            f = g,
            s = a = g = k(g.minus(1), g.plus(1), d, 1),
            h = x(g.times(g), d, 1),
            i = 3;
          ;

        ) {
          if (
            ((a = x(a.times(h), d, 1)),
            A((c = s.plus(k(a, new v(i), d, 1))).d).slice(0, d) ===
              A(s.d).slice(0, d))
          ) {
            if (
              ((s = s.times(2)),
              0 !== u && (s = s.plus(z(v, d + 2, C).times(u + ""))),
              (s = k(s, new v(p), d, 1)),
              null != t)
            )
              return (v.precision = C), s;
            if (!F(s.d, d - 10, m, o))
              return x(s, (v.precision = C), m, (l = !0));
            (v.precision = d += 10),
              (c = a = g = k(f.minus(1), f.plus(1), d, 1)),
              (h = x(g.times(g), d, 1)),
              (i = o = 1);
          }
          (s = c), (i += 2);
        }
      }
      function Z(e) {
        return String((e.s * e.s) / 0);
      }
      function K(e, t) {
        var r, n, i;
        for (
          (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
            (n = t.search(/e/i)) > 0
              ? (r < 0 && (r = n),
                (r += +t.slice(n + 1)),
                (t = t.substring(0, n)))
              : r < 0 && (r = t.length),
            n = 0;
          48 === t.charCodeAt(n);
          n++
        );
        for (i = t.length; 48 === t.charCodeAt(i - 1); --i);
        if ((t = t.slice(n, i))) {
          if (
            ((i -= n),
            (e.e = r = r - n - 1),
            (e.d = []),
            (n = (r + 1) % 7),
            r < 0 && (n += 7),
            n < i)
          ) {
            for (n && e.d.push(+t.slice(0, n)), i -= 7; n < i; )
              e.d.push(+t.slice(n, (n += 7)));
            n = 7 - (t = t.slice(n)).length;
          } else n -= i;
          for (; n--; ) t += "0";
          e.d.push(+t),
            l &&
              (e.e > e.constructor.maxE
                ? ((e.d = null), (e.e = 0 / 0))
                : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
        } else (e.e = 0), (e.d = [0]);
        return e;
      }
      function L(e, t, r, n, i) {
        var u,
          a,
          o,
          s,
          c = e.precision,
          d = Math.ceil(c / 7);
        for (l = !1, s = r.times(r), o = new e(n); ; ) {
          if (
            ((a = k(o.times(s), new e(t++ * t++), c, 1)),
            (o = i ? n.plus(a) : n.minus(a)),
            (n = k(a.times(s), new e(t++ * t++), c, 1)),
            void 0 !== (a = o.plus(n)).d[d])
          ) {
            for (u = d; a.d[u] === o.d[u] && u--; );
            if (-1 == u) break;
          }
          (u = o), (o = n), (n = a), (a = u);
        }
        return (l = !0), (a.d.length = d + 1), a;
      }
      function q(e, t) {
        for (var r = e; --t; ) r *= e;
        return r;
      }
      function W(e, t) {
        var r,
          n = t.s < 0,
          u = S(e, e.precision, 1),
          a = u.times(0.5);
        if ((t = t.abs()).lte(a)) return (i = n ? 4 : 1), t;
        if ((r = t.divToInt(u)).isZero()) i = n ? 3 : 2;
        else {
          if ((t = t.minus(r.times(u))).lte(a))
            return (i = $(r) ? (n ? 2 : 3) : n ? 4 : 1), t;
          i = $(r) ? (n ? 1 : 4) : n ? 3 : 2;
        }
        return t.minus(u).abs();
      }
      function U(e, t, r, i) {
        var a,
          o,
          s,
          l,
          c,
          d,
          f,
          h,
          p,
          g = e.constructor,
          D = void 0 !== r;
        if (
          (D
            ? (b(r, 1, 1e9), void 0 === i ? (i = g.rounding) : b(i, 0, 8))
            : ((r = g.precision), (i = g.rounding)),
          e.isFinite())
        ) {
          for (
            s = (f = O(e)).indexOf("."),
              D
                ? ((a = 2),
                  16 == t ? (r = 4 * r - 3) : 8 == t && (r = 3 * r - 2))
                : (a = t),
              s >= 0 &&
                ((f = f.replace(".", "")),
                ((p = new g(1)).e = f.length - s),
                (p.d = _(O(p), 10, a)),
                (p.e = p.d.length)),
              o = c = (h = _(f, 10, a)).length;
            0 == h[--c];

          )
            h.pop();
          if (h[0]) {
            if (
              (s < 0
                ? o--
                : (((e = new g(e)).d = h),
                  (e.e = o),
                  (h = (e = k(e, p, r, i, 0, a)).d),
                  (o = e.e),
                  (d = n)),
              (s = h[r]),
              (l = a / 2),
              (d = d || void 0 !== h[r + 1]),
              (d =
                i < 4
                  ? (void 0 !== s || d) && (0 === i || i === (e.s < 0 ? 3 : 2))
                  : s > l ||
                    (s === l &&
                      (4 === i ||
                        d ||
                        (6 === i && 1 & h[r - 1]) ||
                        i === (e.s < 0 ? 8 : 7)))),
              (h.length = r),
              d)
            )
              for (; ++h[--r] > a - 1; ) (h[r] = 0), r || (++o, h.unshift(1));
            for (c = h.length; !h[c - 1]; --c);
            for (s = 0, f = ""; s < c; s++) f += u.charAt(h[s]);
            if (D) {
              if (c > 1)
                if (16 == t || 8 == t) {
                  for (s = 16 == t ? 4 : 3, --c; c % s; c++) f += "0";
                  for (c = (h = _(f, a, t)).length; !h[c - 1]; --c);
                  for (s = 1, f = "1."; s < c; s++) f += u.charAt(h[s]);
                } else f = f.charAt(0) + "." + f.slice(1);
              f = f + (o < 0 ? "p" : "p+") + o;
            } else if (o < 0) {
              for (; ++o; ) f = "0" + f;
              f = "0." + f;
            } else if (++o > c) for (o -= c; o--; ) f += "0";
            else o < c && (f = f.slice(0, o) + "." + f.slice(o));
          } else f = D ? "0p+0" : "0";
          f = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + f;
        } else f = Z(e);
        return e.s < 0 ? "-" + f : f;
      }
      function V(e, t) {
        if (e.length > t) return (e.length = t), !0;
      }
      function J(e) {
        return new this(e).abs();
      }
      function Q(e) {
        return new this(e).acos();
      }
      function H(e) {
        return new this(e).acosh();
      }
      function Y(e, t) {
        return new this(e).plus(t);
      }
      function X(e) {
        return new this(e).asin();
      }
      function G(e) {
        return new this(e).asinh();
      }
      function ee(e) {
        return new this(e).atan();
      }
      function et(e) {
        return new this(e).atanh();
      }
      function er(e, t) {
        (e = new this(e)), (t = new this(t));
        var r,
          n = this.precision,
          i = this.rounding,
          u = n + 4;
        return (
          e.s && t.s
            ? e.d || t.d
              ? !t.d || e.isZero()
                ? ((r = t.s < 0 ? S(this, n, i) : new this(0)).s = e.s)
                : !e.d || t.isZero()
                  ? ((r = S(this, u, 1).times(0.5)).s = e.s)
                  : t.s < 0
                    ? ((this.precision = u),
                      (this.rounding = 1),
                      (r = this.atan(k(e, t, u, 1))),
                      (t = S(this, u, 1)),
                      (this.precision = n),
                      (this.rounding = i),
                      (r = e.s < 0 ? r.minus(t) : r.plus(t)))
                    : (r = this.atan(k(e, t, u, 1)))
              : ((r = S(this, u, 1).times(t.s > 0 ? 0.25 : 0.75)).s = e.s)
            : (r = new this(0 / 0)),
          r
        );
      }
      function en(e) {
        return new this(e).cbrt();
      }
      function ei(e) {
        return x((e = new this(e)), e.e + 1, 2);
      }
      function eu(e, t, r) {
        return new this(e).clamp(t, r);
      }
      function ea(e) {
        if (!e || "object" != typeof e) throw Error(c + "Object expected");
        var t,
          r,
          n,
          i = !0 === e.defaults,
          u = [
            "precision",
            1,
            1e9,
            "rounding",
            0,
            8,
            "toExpNeg",
            -9e15,
            0,
            "toExpPos",
            0,
            9e15,
            "maxE",
            0,
            9e15,
            "minE",
            -9e15,
            0,
            "modulo",
            0,
            9,
          ];
        for (t = 0; t < u.length; t += 3)
          if (((r = u[t]), i && (this[r] = s[r]), void 0 !== (n = e[r])))
            if (g(n) === n && n >= u[t + 1] && n <= u[t + 2]) this[r] = n;
            else throw Error(d + r + ": " + n);
        if (((r = "crypto"), i && (this[r] = s[r]), void 0 !== (n = e[r])))
          if (!0 === n || !1 === n || 0 === n || 1 === n)
            if (n)
              if (
                "u" > typeof crypto &&
                crypto &&
                (crypto.getRandomValues || crypto.randomBytes)
              )
                this[r] = !0;
              else throw Error(h);
            else this[r] = !1;
          else throw Error(d + r + ": " + n);
        return this;
      }
      function eo(e) {
        return new this(e).cos();
      }
      function es(e) {
        return new this(e).cosh();
      }
      function el(e, t) {
        return new this(e).div(t);
      }
      function ec(e) {
        return new this(e).exp();
      }
      function ed(e) {
        return x((e = new this(e)), e.e + 1, 3);
      }
      function ef() {
        var e,
          t,
          r = new this(0);
        for (e = 0, l = !1; e < arguments.length; )
          if (((t = new this(arguments[e++])), t.d))
            r.d && (r = r.plus(t.times(t)));
          else {
            if (t.s) return (l = !0), new this(1 / 0);
            r = t;
          }
        return (l = !0), r.sqrt();
      }
      function eh(e) {
        return e instanceof ej || (e && e.toStringTag === p) || !1;
      }
      function ep(e) {
        return new this(e).ln();
      }
      function eg(e, t) {
        return new this(e).log(t);
      }
      function eD(e) {
        return new this(e).log(2);
      }
      function ev(e) {
        return new this(e).log(10);
      }
      function em() {
        return R(this, arguments, -1);
      }
      function eC() {
        return R(this, arguments, 1);
      }
      function eB(e, t) {
        return new this(e).mod(t);
      }
      function eE(e, t) {
        return new this(e).mul(t);
      }
      function ey(e, t) {
        return new this(e).pow(t);
      }
      function ew(e) {
        var t,
          r,
          n,
          i,
          u = 0,
          a = new this(1),
          o = [];
        if (
          (void 0 === e ? (e = this.precision) : b(e, 1, 1e9),
          (n = Math.ceil(e / 7)),
          this.crypto)
        )
          if (crypto.getRandomValues)
            for (t = crypto.getRandomValues(new Uint32Array(n)); u < n; )
              (i = t[u]) >= 429e7
                ? (t[u] = crypto.getRandomValues(new Uint32Array(1))[0])
                : (o[u++] = i % 1e7);
          else if (crypto.randomBytes) {
            for (t = crypto.randomBytes((n *= 4)); u < n; )
              (i =
                t[u] +
                (t[u + 1] << 8) +
                (t[u + 2] << 16) +
                ((127 & t[u + 3]) << 24)) >= 214e7
                ? crypto.randomBytes(4).copy(t, u)
                : (o.push(i % 1e7), (u += 4));
            u = n / 4;
          } else throw Error(h);
        else for (; u < n; ) o[u++] = (1e7 * Math.random()) | 0;
        for (
          n = o[--u],
            e %= 7,
            n && e && ((i = D(10, 7 - e)), (o[u] = ((n / i) | 0) * i));
          0 === o[u];
          u--
        )
          o.pop();
        if (u < 0) (r = 0), (o = [0]);
        else {
          for (r = -1; 0 === o[0]; r -= 7) o.shift();
          for (n = 1, i = o[0]; i >= 10; i /= 10) n++;
          n < 7 && (r -= 7 - n);
        }
        return (a.e = r), (a.d = o), a;
      }
      function eA(e) {
        return x((e = new this(e)), e.e + 1, this.rounding);
      }
      function eb(e) {
        return (e = new this(e)).d ? (e.d[0] ? e.s : 0 * e.s) : e.s || 0 / 0;
      }
      function eF(e) {
        return new this(e).sin();
      }
      function e_(e) {
        return new this(e).sinh();
      }
      function ek(e) {
        return new this(e).sqrt();
      }
      function ex(e, t) {
        return new this(e).sub(t);
      }
      function eO() {
        var e = 0,
          t = arguments,
          r = new this(t[0]);
        for (l = !1; r.s && ++e < t.length; ) r = r.plus(t[e]);
        return (l = !0), x(r, this.precision, this.rounding);
      }
      function eP(e) {
        return new this(e).tan();
      }
      function ez(e) {
        return new this(e).tanh();
      }
      function eS(e) {
        return x((e = new this(e)), e.e + 1, 1);
      }
      (w[Symbol.for("nodejs.util.inspect.custom")] = w.toString),
        (w[Symbol.toStringTag] = "Decimal");
      var ej = (w.constructor = (function e(t) {
        var r, n, i;
        function u(e) {
          var t, r, n;
          if (!(this instanceof u)) return new u(e);
          if (((this.constructor = u), eh(e))) {
            (this.s = e.s),
              l
                ? !e.d || e.e > u.maxE
                  ? ((this.e = 0 / 0), (this.d = null))
                  : e.e < u.minE
                    ? ((this.e = 0), (this.d = [0]))
                    : ((this.e = e.e), (this.d = e.d.slice()))
                : ((this.e = e.e), (this.d = e.d ? e.d.slice() : e.d));
            return;
          }
          if ("number" == (n = typeof e)) {
            if (0 === e) {
              (this.s = 1 / e < 0 ? -1 : 1), (this.e = 0), (this.d = [0]);
              return;
            }
            if (
              (e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1),
              e === ~~e && e < 1e7)
            ) {
              for (t = 0, r = e; r >= 10; r /= 10) t++;
              l
                ? t > u.maxE
                  ? ((this.e = 0 / 0), (this.d = null))
                  : t < u.minE
                    ? ((this.e = 0), (this.d = [0]))
                    : ((this.e = t), (this.d = [e]))
                : ((this.e = t), (this.d = [e]));
              return;
            }
            if (0 * e != 0) {
              e || (this.s = 0 / 0), (this.e = 0 / 0), (this.d = null);
              return;
            }
            return K(this, e.toString());
          }
          if ("string" === n)
            return (
              45 === (r = e.charCodeAt(0))
                ? ((e = e.slice(1)), (this.s = -1))
                : (43 === r && (e = e.slice(1)), (this.s = 1)),
              B.test(e)
                ? K(this, e)
                : (function (e, t) {
                    var r, n, i, u, a, o, s, c, f;
                    if (t.indexOf("_") > -1) {
                      if (((t = t.replace(/(\d)_(?=\d)/g, "$1")), B.test(t)))
                        return K(e, t);
                    } else if ("Infinity" === t || "NaN" === t)
                      return (
                        +t || (e.s = 0 / 0), (e.e = 0 / 0), (e.d = null), e
                      );
                    if (m.test(t)) (r = 16), (t = t.toLowerCase());
                    else if (v.test(t)) r = 2;
                    else if (C.test(t)) r = 8;
                    else throw Error(d + t);
                    for (
                      (u = t.search(/p/i)) > 0
                        ? ((s = +t.slice(u + 1)), (t = t.substring(2, u)))
                        : (t = t.slice(2)),
                        a = (u = t.indexOf(".")) >= 0,
                        n = e.constructor,
                        a &&
                          ((u = (o = (t = t.replace(".", "")).length) - u),
                          (i = N(n, new n(r), u, 2 * u))),
                        u = f = (c = _(t, r, 1e7)).length - 1;
                      0 === c[u];
                      --u
                    )
                      c.pop();
                    return u < 0
                      ? new n(0 * e.s)
                      : ((e.e = P(c, f)),
                        (e.d = c),
                        (l = !1),
                        a && (e = k(e, i, 4 * o)),
                        s &&
                          (e = e.times(
                            54 > Math.abs(s) ? D(2, s) : ej.pow(2, s),
                          )),
                        (l = !0),
                        e);
                  })(this, e)
            );
          if ("bigint" === n)
            return (
              e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1),
              K(this, e.toString())
            );
          throw Error(d + e);
        }
        if (
          ((u.prototype = w),
          (u.ROUND_UP = 0),
          (u.ROUND_DOWN = 1),
          (u.ROUND_CEIL = 2),
          (u.ROUND_FLOOR = 3),
          (u.ROUND_HALF_UP = 4),
          (u.ROUND_HALF_DOWN = 5),
          (u.ROUND_HALF_EVEN = 6),
          (u.ROUND_HALF_CEIL = 7),
          (u.ROUND_HALF_FLOOR = 8),
          (u.EUCLID = 9),
          (u.config = u.set = ea),
          (u.clone = e),
          (u.isDecimal = eh),
          (u.abs = J),
          (u.acos = Q),
          (u.acosh = H),
          (u.add = Y),
          (u.asin = X),
          (u.asinh = G),
          (u.atan = ee),
          (u.atanh = et),
          (u.atan2 = er),
          (u.cbrt = en),
          (u.ceil = ei),
          (u.clamp = eu),
          (u.cos = eo),
          (u.cosh = es),
          (u.div = el),
          (u.exp = ec),
          (u.floor = ed),
          (u.hypot = ef),
          (u.ln = ep),
          (u.log = eg),
          (u.log10 = ev),
          (u.log2 = eD),
          (u.max = em),
          (u.min = eC),
          (u.mod = eB),
          (u.mul = eE),
          (u.pow = ey),
          (u.random = ew),
          (u.round = eA),
          (u.sign = eb),
          (u.sin = eF),
          (u.sinh = e_),
          (u.sqrt = ek),
          (u.sub = ex),
          (u.sum = eO),
          (u.tan = eP),
          (u.tanh = ez),
          (u.trunc = eS),
          void 0 === t && (t = {}),
          t && !0 !== t.defaults)
        )
          for (
            r = 0,
              i = [
                "precision",
                "rounding",
                "toExpNeg",
                "toExpPos",
                "maxE",
                "minE",
                "modulo",
                "crypto",
              ];
            r < i.length;

          )
            t.hasOwnProperty((n = i[r++])) || (t[n] = this[n]);
        return u.config(t), u;
      })(s));
      (a = new ej(a)), (o = new ej(o)), r.d(t, {}, { W: ej });
    },
    166295(e, t, r) {
      "use strict";
      var n, i;
      let u, a, o, s, l, c, d, f, h, p;
      function g(e) {
        let t = Object.values(e).filter((e) => "number" == typeof e);
        return Object.entries(e)
          .filter(([e, r]) => -1 === t.indexOf(+e))
          .map(([e, t]) => t);
      }
      function D(e, t = "|") {
        return e.map((e) => N(e)).join(t);
      }
      function v(e, t) {
        return "bigint" == typeof t ? t.toString() : t;
      }
      r.d(t, { k5n: () => nI, Ikc: () => nj, jgl: () => nR, YjP: () => ni });
      class m {
        constructor(e) {
          (this._getter = e), (this._value = void 0);
        }
        get value() {
          let e = this._getter;
          return (
            void 0 !== e && ((this._value = e()), (this._getter = void 0)),
            this._value
          );
        }
      }
      function C(e) {
        let t = +!!e.startsWith("^"),
          r = e.endsWith("$") ? e.length - 1 : e.length;
        return e.slice(t, r);
      }
      function B(e, t, r) {
        Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          enumerable: !0,
          configurable: !0,
        });
      }
      function E(e) {
        let t = Object.getOwnPropertyDescriptor(e, "shape");
        return t?.get ? t.get.raw : t?.value;
      }
      function y(e) {
        return E(e._zod.def) ?? e._zod.def.shape;
      }
      function w(e, t, r) {
        Object.defineProperty(e, t, {
          get() {
            let e = r();
            return B(this, t, e), e;
          },
          enumerable: !0,
          configurable: !0,
        });
      }
      function A(e, t, r) {
        t in e ? B(e, t, r) : (e[t] = r);
      }
      function b(e, t, r, n) {
        let i = y(t);
        for (let u of r) {
          let r = Object.getOwnPropertyDescriptor(i, u);
          r.enumerable &&
            (r.get
              ? w(e, u, () => {
                  let e = t._zod.def.shape[u];
                  return n ? n(e, u) : e;
                })
              : A(e, u, n ? n(r.value, u) : r.value));
        }
      }
      function F(...e) {
        let t = {};
        for (let r of e) Object.assign(t, Object.getOwnPropertyDescriptors(r));
        return Object.defineProperties({}, t);
      }
      let _ =
        "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
      function k(e) {
        return "object" == typeof e && null !== e && !Array.isArray(e);
      }
      let x = new m(() => {
        if (
          eo.jitless ||
          ("u" > typeof navigator &&
            navigator?.userAgent?.includes("Cloudflare"))
        )
          return !1;
        try {
          return Function(""), !0;
        } catch (e) {
          return !1;
        }
      });
      function O(e) {
        if (!1 === k(e)) return !1;
        let t = e.constructor;
        if (void 0 === t || "function" != typeof t) return !0;
        let r = t.prototype;
        return (
          !1 !== k(r) &&
          !1 !== Object.prototype.hasOwnProperty.call(r, "isPrototypeOf")
        );
      }
      function P(e) {
        return O(e)
          ? { ...e }
          : Array.isArray(e)
            ? [...e]
            : e instanceof Map
              ? new Map(e)
              : e instanceof Set
                ? new Set(e)
                : e;
      }
      let z = new Set(["string", "number", "symbol"]);
      function S(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function j(e, t, r) {
        let n = new e._zod.constr(t ?? e._zod.def);
        return (!t || r?.parent) && (n._zod.parent = e), n;
      }
      function T(e) {
        if (!e) return {};
        if ("string" == typeof e) return { error: () => e };
        if (e?.message !== void 0) {
          if (e?.error !== void 0)
            throw Error("Cannot specify both `message` and `error` params");
          e.error = e.message;
        }
        return (delete e.message, "string" == typeof e.error)
          ? { ...e, error: () => e.error }
          : e;
      }
      function N(e) {
        return "bigint" == typeof e
          ? e.toString() + "n"
          : "string" == typeof e
            ? `"${e}"`
            : `${e}`;
      }
      let $ = {
          safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
          int32: [-0x80000000, 0x7fffffff],
          uint32: [0, 0xffffffff],
          float32: [-34028234663852886e22, 34028234663852886e22],
          float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
        },
        R = {
          int64: [
            BigInt("-9223372036854775808"),
            BigInt("9223372036854775807"),
          ],
          uint64: [BigInt(0), BigInt("18446744073709551615")],
        };
      function M(e, t) {
        let r = y(e),
          n = [];
        for (let e of Reflect.ownKeys(t)) {
          if (!Object.getOwnPropertyDescriptor(r, e)?.enumerable)
            throw Error(`Unrecognized key: "${String(e)}"`);
          t[e] && n.push(e);
        }
        return n;
      }
      function I(e, t) {
        let r = {};
        b(r, e, Reflect.ownKeys(y(e)));
        for (let e of Reflect.ownKeys(t)) {
          let n = Object.getOwnPropertyDescriptor(t, e);
          n.enumerable && (n.get ? w(r, e, () => t[e]) : A(r, e, n.value));
        }
        return r;
      }
      function Z(e, t, r, n = "partial") {
        let i = t._zod.def.checks;
        if (i && i.length > 0)
          throw Error(
            `.${n}() cannot be used on object schemas containing refinements`,
          );
        let u = r ? new Set(M(t, r)) : void 0,
          a = {};
        return (
          b(
            a,
            t,
            Reflect.ownKeys(y(t)),
            e &&
              ((t, r) =>
                u && !u.has(r) ? t : new e({ type: "optional", innerType: t })),
          ),
          j(t, F(t._zod.def, { shape: a, checks: [] }))
        );
      }
      function K(e, t = 0) {
        if (!0 === e.aborted) return !0;
        for (let r = t; r < e.issues.length; r++)
          if (e.issues[r]?.continue !== !0) return !0;
        return !1;
      }
      function L(e, t) {
        return t.map((t) => (t.path ?? (t.path = []), t.path.unshift(e), t));
      }
      function q(e) {
        return "string" == typeof e ? e : e?.message;
      }
      function W(e) {
        let t = [];
        for (let r of e ?? []) {
          let e = r._zod.def;
          if (!/_(length|size)$|_equals$/.test(e.check)) break;
          let n = e.maximum ?? e.length ?? e.size;
          n >= 0 && t.push([n, r]);
        }
        return t;
      }
      function U(e, t, r) {
        var n;
        for (let i = t; i < e.length; i++) (n = e[i]).schema ?? (n.schema = r);
      }
      function V(e, t, r) {
        let n = e.inst?._zod?.traits;
        n?.has("$ZodType") &&
          (n.has("$ZodCheck")
            ? (e.schema ?? (e.schema = e.inst))
            : (e.schema = e.inst));
        let i = e.schema !== e.inst ? e.schema?._zod.def?.error : void 0,
          u = e.message
            ? e.message
            : (q(e.inst?._zod.def?.error?.(e)) ??
              q(i?.(e)) ??
              q(t?.error?.(e)) ??
              q(r.customError?.(e)) ??
              q(r.localeError?.(e)) ??
              "Invalid input"),
          a = {};
        for (let t of Object.keys(e))
          "inst" !== t &&
            "schema" !== t &&
            "continue" !== t &&
            "input" !== t &&
            "__proto__" !== t &&
            (a[t] = e[t]);
        return (
          a.path ?? (a.path = []),
          (a.message = u),
          t?.reportInput && (a.input = e.input),
          a
        );
      }
      let J = /[\uD800-\uDBFF]/;
      function Q(e) {
        let t = e.length;
        if (!J.test(e)) return t;
        let r = t;
        for (let n = 0; n < t - 1; n++)
          (64512 & e.charCodeAt(n)) == 55296 &&
            (64512 & e.charCodeAt(n + 1)) == 56320 &&
            (r--, n++);
        return r;
      }
      function H(e) {
        return Array.isArray(e)
          ? "array"
          : "string" == typeof e
            ? "string"
            : "unknown";
      }
      function Y(...e) {
        let [t, r, n] = e;
        return "string" == typeof t
          ? { message: t, code: "custom", input: r, inst: n }
          : { ...t };
      }
      function X(e, t, r, n = !0) {
        return (
          Object.defineProperty(e, t, {
            configurable: !0,
            writable: !0,
            enumerable: n,
            value: r,
          }),
          r
        );
      }
      let G = !1,
        ee = {
          configurable: !0,
          get() {
            G = !0;
          },
        };
      function et(e, t, r) {
        let n = Object.getPrototypeOf(e._zod);
        if (t in n && u !== e._zod) {
          u = void 0;
          return;
        }
        (u = e._zod),
          Object.defineProperty(n, t, {
            configurable: !0,
            get() {
              Object.defineProperty(this, t, ee);
              let e = G;
              G = !1;
              try {
                let n = r(this);
                return (
                  G
                    ? delete this[t]
                    : Object.defineProperty(this, t, {
                        configurable: !0,
                        writable: !0,
                        value: n,
                      }),
                  (G = G || e),
                  n
                );
              } catch (r) {
                throw (delete this[t], (G = G || e), r);
              }
            },
            set(e) {
              Object.defineProperty(this, t, {
                configurable: !0,
                writable: !0,
                value: e,
              });
            },
          });
      }
      let er = { value: void 0, enumerable: !1 },
        en = "captureStackTrace" in Error ? Error : null;
      function ei(e, t, r, n) {
        function i(e) {
          (this.def = e), (this.constr = l), (this.traits = new Set());
        }
        i.prototype = {};
        let u = r && new WeakSet();
        function a(n, a) {
          if (n._zod) {
            if (n._zod.traits.has(e)) return;
          } else {
            er.value = new i(a);
            try {
              Object.defineProperty(n, "_zod", er);
            } finally {
              er.value = void 0;
            }
          }
          if ((n._zod.traits.add(e), t(n, a), u)) {
            let e = Object.getPrototypeOf(n),
              t = n._zod.constr.prototype,
              i = e;
            for (; i && i !== t; ) i = Object.getPrototypeOf(i);
            let a = i ?? e;
            if (!u.has(a)) {
              u.add(a);
              for (let e in r) {
                let t = Object.getOwnPropertyDescriptor(r, e);
                t.get
                  ? Object.defineProperty(a, e, { ...t, enumerable: !1 })
                  : (function (e, t, r) {
                      Object.defineProperty(e, t, {
                        configurable: !0,
                        get() {
                          return this == null ? r : X(this, t, r.bind(this));
                        },
                        set(e) {
                          X(this, t, e);
                        },
                      });
                    })(a, e, t.value);
              }
            }
          }
          let o = l.prototype;
          for (let e in o)
            Object.prototype.hasOwnProperty.call(o, e) &&
              (e in n || (n[e] = o[e].bind(n)));
        }
        let o = n?.Parent ?? Object;
        class s extends o {}
        function l(e) {
          let t = n?.Parent
            ? (function (e) {
                let t = en;
                if (t) {
                  let r = t.stackTraceLimit;
                  if ("number" == typeof r) {
                    try {
                      t.stackTraceLimit = 0;
                    } catch {
                      return (en = null), new e();
                    }
                    try {
                      return new e();
                    } finally {
                      t.stackTraceLimit = r;
                    }
                  }
                }
                return new e();
              })(s)
            : this;
          a(t, e);
          let r = t._zod.deferred;
          if (r) {
            for (let e of r) e();
            t._zod.deferred = void 0;
          }
          let i = globalThis.__zod_globalConfig?.postProcessor;
          return i && i(t), t;
        }
        return (
          Object.defineProperty(s, "name", { value: e }),
          Object.defineProperty(l, "init", { value: a }),
          Object.defineProperty(l, Symbol.hasInstance, {
            value: (t) =>
              (!!n?.Parent && t instanceof n.Parent) || t?._zod?.traits?.has(e),
          }),
          Object.defineProperty(l, "name", { value: e }),
          l
        );
      }
      class eu extends Error {
        constructor() {
          super(
            "Encountered Promise during synchronous parse. Use .parseAsync() instead.",
          );
        }
      }
      class ea extends Error {
        constructor(e) {
          super(`Encountered unidirectional transform during encode: ${e}`),
            (this.name = "ZodEncodeError");
        }
      }
      (n = globalThis).__zod_globalConfig ?? (n.__zod_globalConfig = {});
      let eo = globalThis.__zod_globalConfig;
      function es(e) {
        return e && Object.assign(eo, e), eo;
      }
      class el extends Error {
        constructor() {
          super(
            "Cannot parse a reference cycle that closes through a transform",
          ),
            (this.name = "ZodCyclicError");
        }
      }
      let ec = "~memo",
        ed = [];
      function ef(e) {
        return null !== e && "object" == typeof e;
      }
      function eh(e) {
        return e.map((e) =>
          e.path ? { ...e, path: e.path.slice() } : { ...e },
        );
      }
      let ep = new WeakMap(),
        eg = [],
        eD = {
          alloc(e, t, r) {
            let n = a;
            if (!n) return r;
            a = void 0;
            let i = { value: r, issues: null };
            return n.set(t.value, i), eg.push(i), r;
          },
          guard(e) {
            var t;
            (t = e._zod).deferred ?? (t.deferred = []),
              e._zod.deferred.push(() => {
                let t = e._zod.parse,
                  r = (e, r) => {
                    var n, i;
                    let u;
                    if (
                      "backward" !== r.direction &&
                      ((n = r),
                      (i = e.value),
                      void 0 !== (u = n[ec]?.backEdges) && ef(i) && u.has(i))
                    )
                      throw new el();
                    return t(e, r);
                  };
                (e._zod.parse = r), e._zod.run === t && (e._zod.run = r);
              });
          },
          attach(e) {
            var t;
            let r,
              n,
              i,
              u = !1;
            (t = e._zod).deferred ?? (t.deferred = []),
              e._zod.deferred.push(() => {
                let t = e._zod.parse,
                  o = (s, l) => {
                    let c;
                    if (void 0 === r) {
                      let n = (function e(t, r, n) {
                        var i, u;
                        let a = ep.get(t);
                        if (void 0 !== a) return 2 * !!a;
                        if (r.has(t)) return 2;
                        r.add(t);
                        let o = 0,
                          s = (t) => {
                            if (2 !== o && t?._zod) {
                              let i = e(t, r, n);
                              i > o && (o = i);
                            }
                          },
                          l = (e) => {
                            e > o && (o = e);
                          },
                          c = t._zod.def;
                        switch (c.type) {
                          case "object": {
                            let t = E(c);
                            l(
                              t
                                ? ((t, i) => {
                                    let u = 0;
                                    for (let a of Reflect.ownKeys(t)) {
                                      let o = Object.getOwnPropertyDescriptor(
                                        t,
                                        a,
                                      );
                                      if (i && !o.enumerable) continue;
                                      let s = o.get
                                        ? 1
                                        : o.value?._zod
                                          ? e(o.value, r, n)
                                          : 0;
                                      s > u && (u = s);
                                    }
                                    return u;
                                  })(t, !0)
                                : 1,
                            ),
                              s(c.catchall);
                            break;
                          }
                          case "array":
                            s(c.element);
                            break;
                          case "tuple":
                            for (let e of c.items) s(e);
                            s(c.rest);
                            break;
                          case "record":
                          case "map":
                            s(c.keyType), s(c.valueType);
                            break;
                          case "set":
                            s(c.valueType);
                            break;
                          case "union":
                            for (let e of c.options) s(e);
                            break;
                          case "intersection":
                            s(c.left), s(c.right);
                            break;
                          case "optional":
                          case "nullable":
                          case "default":
                          case "prefault":
                          case "catch":
                          case "readonly":
                          case "nonoptional":
                          case "promise":
                          case "success":
                            s(c.innerType);
                            break;
                          case "pipe":
                            s(c.in), s(c.out);
                            break;
                          case "function":
                            s(c.input), s(c.output);
                            break;
                          case "lazy": {
                            let i =
                              c._cachedInner ?? (n ? t._zod.innerType : void 0);
                            l(i ? e(i, r, !1) : 1);
                            break;
                          }
                          case "template_literal":
                          case "string":
                          case "number":
                          case "int":
                          case "boolean":
                          case "bigint":
                          case "symbol":
                          case "undefined":
                          case "null":
                          case "void":
                          case "never":
                          case "any":
                          case "unknown":
                          case "date":
                          case "nan":
                          case "enum":
                          case "literal":
                          case "file":
                          case "transform":
                          case "custom":
                            break;
                          default:
                            for (let e in c) {
                              let t = Object.getOwnPropertyDescriptor(c, e);
                              if (!t || t.get) continue;
                              let r = t.value;
                              if (r && "object" == typeof r) {
                                if (r._zod) s(r);
                                else if (Array.isArray(r))
                                  for (let e of r) s(e);
                              }
                            }
                        }
                        return (
                          r.delete(t),
                          (i = t),
                          1 !== (u = o) && ep.set(i, 2 === u),
                          u
                        );
                      })(e, new Set(), !1);
                      if (0 === n)
                        return (
                          (e._zod.parse = t),
                          e._zod.run === o && (e._zod.run = t),
                          t(s, l)
                        );
                      2 === n || u ? (r = !0) : (u = !0);
                    }
                    let d = s.value;
                    if (!ef(d)) return t(s, l);
                    let f = l[ec];
                    if (
                      (f ||
                        ((f = { buckets: new WeakMap(), backEdges: void 0 }),
                        (l[ec] = f)),
                      n === l)
                    )
                      c = i;
                    else {
                      var h;
                      let t;
                      (t = (h = f).buckets.get(e)) ||
                        ((t = new WeakMap()), h.buckets.set(e, t)),
                        (c = t),
                        (n = l),
                        (i = c);
                    }
                    let p = c.get(d);
                    if (p)
                      return (
                        (s.value = p.value),
                        p.issues
                          ? p.issues.length && s.issues.push(...eh(p.issues))
                          : ((s.memo = !0),
                            f.backEdges ?? (f.backEdges = new WeakSet()),
                            f.backEdges.add(p.value)),
                        s
                      );
                    a = c;
                    let g = eg.length,
                      D = t(s, l);
                    a = void 0;
                    let v = eg.length > g ? eg.pop() : void 0;
                    return D instanceof Promise
                      ? D.then(
                          (e) => (
                            v &&
                              (v.issues = e.issues.length ? eh(e.issues) : ed),
                            e
                          ),
                        )
                      : (v && (v.issues = D.issues.length ? eh(D.issues) : ed),
                        D);
                  };
                (e._zod.parse = o), e._zod.run === t && (e._zod.run = o);
              });
          },
        },
        ev = /^[cC][0-9a-z]{6,}$/,
        em = /^[0-9a-z]+$/,
        eC = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/,
        eB = /^[0-9a-vA-V]{20}$/,
        eE = /^[A-Za-z0-9]{27}$/,
        ey = /^[a-zA-Z0-9_-]{21}$/,
        ew =
          /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
        eA =
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
        eb = (e) =>
          e
            ? RegExp(
                `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
              )
            : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
        eF =
          /^(?:[A-Za-z0-9_'+\-]+\.)*[A-Za-z0-9_'+\-]*[A-Za-z0-9_+-]@(?:[A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
        e_ =
          /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
        ek =
          /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
        ex =
          /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
        eO =
          /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
        eP = /^https?$/,
        ez = /^\+[1-9]\d{6,14}$/,
        eS =
          "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
        ej = RegExp(`^${eS}$`);
      function eT(e) {
        let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
        return "number" == typeof e.precision
          ? -1 === e.precision
            ? `${t}`
            : 0 === e.precision
              ? `${t}:[0-5]\\d`
              : `${t}:[0-5]\\d\\.\\d{${e.precision}}`
          : e.seconds
            ? `${t}:[0-5]\\d(?:\\.\\d+)?`
            : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
      }
      let eN = /^[\s\S]{0,}$/,
        e$ = /^-?\d+$/,
        eR = /^-?\d+(?:\.\d+)?$/,
        eM = /^[^A-Z]*$/,
        eI = /^[^a-z]*$/,
        eZ = ei("$ZodCheck", (e, t) => {
          var r;
          e._zod ?? (e._zod = {}),
            (e._zod.def = t),
            (r = e._zod).onattach ?? (r.onattach = []);
        }),
        eK = (e) => {
          let t = e.value;
          return null != t && void 0 !== t.length;
        },
        eL = ei("$ZodCheckMaxLength", (e, t) => {
          var r;
          eZ.init(e, t),
            (r = e._zod.def).when ?? (r.when = eK),
            (e._zod.check = (r) => {
              let n = r.value,
                i = n.length;
              if (
                ("string" == typeof n && i > t.maximum ? Q(n) : i) <= t.maximum
              )
                return;
              let u = H(n);
              r.issues.push({
                origin: u,
                code: "too_big",
                maximum: t.maximum,
                inclusive: !0,
                input: n,
                inst: e,
                continue: !t.abort,
              });
            });
        }),
        eq = ei("$ZodCheckMinLength", (e, t) => {
          var r;
          eZ.init(e, t),
            (r = e._zod.def).when ?? (r.when = eK),
            (e._zod.check = (r) => {
              let n = r.value,
                i = n.length;
              if (
                ("string" == typeof n && i >= t.minimum && i < 2 * t.minimum
                  ? Q(n)
                  : i) >= t.minimum
              )
                return;
              let u = H(n);
              r.issues.push({
                origin: u,
                code: "too_small",
                minimum: t.minimum,
                inclusive: !0,
                input: n,
                inst: e,
                continue: !t.abort,
              });
            });
        }),
        eW = ei("$ZodCheckLengthEquals", (e, t) => {
          var r;
          eZ.init(e, t),
            (r = e._zod.def).when ?? (r.when = eK),
            (e._zod.check = (r) => {
              let n = r.value,
                i = n.length,
                u =
                  "string" == typeof n && i >= t.length && i <= 2 * t.length
                    ? Q(n)
                    : i;
              if (u === t.length) return;
              let a = H(n),
                o = u > t.length;
              r.issues.push({
                origin: a,
                ...(o
                  ? { code: "too_big", maximum: t.length }
                  : { code: "too_small", minimum: t.length }),
                inclusive: !0,
                exact: !0,
                input: r.value,
                inst: e,
                continue: !t.abort,
              });
            });
        }),
        eU = ei("$ZodCheckStringFormat", (e, t) => {
          var r, n;
          eZ.init(e, t),
            t.pattern
              ? ((r = e._zod).check ??
                (r.check = (r) => {
                  (t.pattern.lastIndex = 0),
                    t.pattern.test(r.value) ||
                      r.issues.push({
                        origin: "string",
                        code: "invalid_format",
                        format: t.format,
                        input: r.value,
                        ...(t.pattern ? { pattern: t.pattern.toString() } : {}),
                        inst: e,
                        continue: !t.abort,
                      });
                }))
              : ((n = e._zod).check ?? (n.check = () => {}));
        }),
        eV = ei("$ZodCheckRegex", (e, t) => {
          eU.init(e, t),
            (e._zod.check = (r) => {
              (t.pattern.lastIndex = 0),
                t.pattern.test(r.value) ||
                  r.issues.push({
                    origin: "string",
                    code: "invalid_format",
                    format: "regex",
                    input: r.value,
                    pattern: t.pattern.toString(),
                    inst: e,
                    continue: !t.abort,
                  });
            });
        }),
        eJ = ei("$ZodCheckLowerCase", (e, t) => {
          t.pattern ?? (t.pattern = eM), eU.init(e, t);
        }),
        eQ = ei("$ZodCheckUpperCase", (e, t) => {
          t.pattern ?? (t.pattern = eI), eU.init(e, t);
        }),
        eH = ei("$ZodCheckIncludes", (e, t) => {
          eZ.init(e, t);
          let r = S(t.includes),
            n = new RegExp(
              "number" == typeof t.position ? `^.{${t.position},}${r}` : r,
            );
          (t.pattern = n),
            (e._zod.check = (r) => {
              r.value.includes(t.includes, t.position) ||
                r.issues.push({
                  origin: "string",
                  code: "invalid_format",
                  format: "includes",
                  includes: t.includes,
                  input: r.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        eY = ei("$ZodCheckStartsWith", (e, t) => {
          eZ.init(e, t);
          let r = RegExp(`^${S(t.prefix)}.*`);
          t.pattern ?? (t.pattern = r),
            (e._zod.check = (r) => {
              r.value.startsWith(t.prefix) ||
                r.issues.push({
                  origin: "string",
                  code: "invalid_format",
                  format: "starts_with",
                  prefix: t.prefix,
                  input: r.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        eX = ei("$ZodCheckEndsWith", (e, t) => {
          eZ.init(e, t);
          let r = RegExp(`.*${S(t.suffix)}$`);
          t.pattern ?? (t.pattern = r),
            (e._zod.check = (r) => {
              r.value.endsWith(t.suffix) ||
                r.issues.push({
                  origin: "string",
                  code: "invalid_format",
                  format: "ends_with",
                  suffix: t.suffix,
                  input: r.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        eG = ei("$ZodCheckOverwrite", (e, t) => {
          eZ.init(e, t),
            (e._zod.check = (e) => {
              e.value = t.tx(e.value);
            });
        });
      class e0 {
        constructor(e = [], t = {}) {
          (this.content = []),
            (this.indent = 0),
            (this.args = e),
            (this.closed = t);
        }
        indented(e) {
          this.indent += 1;
          try {
            e(this);
          } finally {
            this.indent -= 1;
          }
        }
        write(e) {
          if ("function" == typeof e) {
            e(this, { execution: "sync" }), e(this, { execution: "async" });
            return;
          }
          let t = e.split("\n").filter((e) => e),
            r = Math.min(...t.map((e) => e.length - e.trimStart().length));
          for (let e of t
            .map((e) => e.slice(r))
            .map((e) => " ".repeat(2 * this.indent) + e))
            this.content.push(e);
        }
        compile() {
          let e = Function,
            t = this?.content ?? [""];
          return new e(
            ...Object.keys(this.closed),
            `return function (${this.args.join(", ")}) {
${t.join("\n")}
};`,
          )(...Object.values(this.closed));
        }
      }
      let e1 = { major: 4, minor: 6, patch: 7 },
        e2 = ei(
          "$ZodType",
          (e, t) => {
            var r;
            e ?? (e = {}),
              (e._zod.def = t),
              (e._zod.bag = e._zod.bag || {}),
              (e._zod.version = e1);
            let n = e._zod.def.checks,
              i = e._zod.traits.has("$ZodCheck")
                ? [e, ...(n ?? [])]
                : n?.length
                  ? [...n]
                  : [];
            for (let t of i) for (let r of t._zod.onattach) r(e);
            if (0 === i.length)
              (r = e._zod).deferred ?? (r.deferred = []),
                e._zod.deferred?.push(() => {
                  e._zod.run = e._zod.parse;
                });
            else {
              let t = (t, r, n) => {
                  let i;
                  if (t.memo) return t;
                  let u = K(t);
                  for (let a of r) {
                    if (a._zod.def.when) {
                      if (
                        (function (e, t = 0) {
                          if (!0 === e.aborted) return !0;
                          for (let r = t; r < e.issues.length; r++)
                            if (e.issues[r]?.continue === !1) return !0;
                          return !1;
                        })(t) ||
                        !a._zod.def.when(t)
                      )
                        continue;
                    } else if (u) continue;
                    let r = t.issues.length,
                      o = a._zod.check(t);
                    if (o instanceof Promise && n?.async === !1) throw new eu();
                    if (i || o instanceof Promise)
                      i = (i ?? Promise.resolve()).then(async () => {
                        await o,
                          t.issues.length !== r &&
                            (U(t.issues, r, e), u || (u = K(t, r)));
                      });
                    else {
                      if (t.issues.length === r) continue;
                      U(t.issues, r, e), u || (u = K(t, r));
                    }
                  }
                  return i ? i.then(() => t) : t;
                },
                r = (r, n, u) => {
                  if (K(r)) return (r.aborted = !0), r;
                  let a = t(n, i, u);
                  if (a instanceof Promise) {
                    if (!1 === u.async) throw new eu();
                    return a.then((t) => e._zod.parse(t, u));
                  }
                  return e._zod.parse(a, u);
                };
              e._zod.run = (n, u) => {
                if (u.skipChecks) return e._zod.parse(n, u);
                if ("backward" === u.direction) {
                  let t = e._zod.parse(
                    { value: n.value, issues: [] },
                    { ...u, skipChecks: !0 },
                  );
                  return t instanceof Promise
                    ? t.then((e) => r(e, n, u))
                    : r(t, n, u);
                }
                let a = e._zod.parse(n, u);
                if (a instanceof Promise) {
                  if (!1 === u.async) throw new eu();
                  return a.then((e) => t(e, i, u));
                }
                return t(a, i, u);
              };
            }
          },
          {
            get "~standard"() {
              return X(this, "~standard", e4(this), !1);
            },
            set "~standard"(e) {
              X(this, "~standard", e);
            },
          },
        ),
        e3 = (e, t) =>
          e.issues.length
            ? { issues: e.issues.map((e) => V(e, t, es())) }
            : { value: e.value };
      function e4(e) {
        return {
          validate: (t) => {
            let r = { async: !1 };
            try {
              let n = e._zod.run({ value: t, issues: [] }, r);
              if (!(n instanceof Promise)) return e3(n, r);
            } catch (e) {}
            return (async function (e, t) {
              let r = { async: !0 };
              return e3(await e._zod.run({ value: t, issues: [] }, r), r);
            })(e, t);
          },
          vendor: "zod",
          version: 1,
        };
      }
      let e7 = ei("$ZodString", (e, t) => {
          e2.init(e, t),
            (e._zod.pattern = t.pattern ?? eN),
            (e._zod.parse = (r, n) => {
              if (t.coerce)
                try {
                  r.value = String(r.value);
                } catch (e) {}
              return (
                "string" == typeof r.value ||
                  r.issues.push({
                    expected: "string",
                    code: "invalid_type",
                    input: r.value,
                    inst: e,
                  }),
                r
              );
            });
        }),
        e9 = ei("$ZodStringFormat", (e, t) => {
          eU.init(e, t), e7.init(e, t);
        }),
        e8 = ei("$ZodGUID", (e, t) => {
          t.pattern ?? (t.pattern = eA), e9.init(e, t);
        }),
        e6 = ei("$ZodUUID", (e, t) => {
          if (t.version) {
            let e = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[
              t.version
            ];
            if (void 0 === e)
              throw Error(`Invalid UUID version: "${t.version}"`);
            t.pattern ?? (t.pattern = eb(e));
          } else t.pattern ?? (t.pattern = eb());
          e9.init(e, t);
        }),
        e5 = ei("$ZodEmail", (e, t) => {
          t.pattern ?? (t.pattern = eF), e9.init(e, t);
        });
      function te(e) {
        try {
          if ("u" > typeof URL && "function" == typeof URL.canParse)
            return URL.canParse(e);
          return new URL(e), !0;
        } catch {
          return !1;
        }
      }
      let tt = /[\t\n\r]/g;
      function tr(e) {
        return e.replace(tt, "");
      }
      let tn = ei("$ZodURL", (e, t) => {
          e9.init(e, t),
            (e._zod.check = (r) => {
              try {
                var n, i;
                let u = r.value.trim(),
                  a =
                    "normalize" in t || "hostname" in t || "protocol" in t
                      ? (function (e, t) {
                          if (
                            !t.normalize &&
                            t.protocol?.source === eP.source &&
                            !/^https?:\/\//i.test(e)
                          )
                            return 1;
                          try {
                            if ("u" > typeof URL) {
                              let t = URL;
                              if ("function" == typeof t.parse)
                                return t.parse(e) ?? 2;
                            }
                            return new URL(e);
                          } catch {
                            return 2;
                          }
                        })(u, t)
                      : te(u) || 2;
                if (1 === a)
                  return void r.issues.push({
                    code: "invalid_format",
                    format: "url",
                    note: "Invalid URL format",
                    input: r.value,
                    inst: e,
                    continue: !t.abort,
                  });
                if (2 === a)
                  return void r.issues.push({
                    code: "invalid_format",
                    format: "url",
                    input: r.value,
                    inst: e,
                    continue: !t.abort,
                  });
                if (!0 === a) {
                  r.value = tr(u);
                  return;
                }
                t.hostname &&
                  (((n = t.hostname).lastIndex = 0), !n.test(a.hostname)) &&
                  r.issues.push({
                    code: "invalid_format",
                    format: "url",
                    note: "Invalid hostname",
                    pattern: t.hostname.source,
                    input: r.value,
                    inst: e,
                    continue: !t.abort,
                  }),
                  t.protocol &&
                    (((i = t.protocol).lastIndex = 0),
                    !i.test(
                      a.protocol.endsWith(":")
                        ? a.protocol.slice(0, -1)
                        : a.protocol,
                    )) &&
                    r.issues.push({
                      code: "invalid_format",
                      format: "url",
                      note: "Invalid protocol",
                      pattern: t.protocol.source,
                      input: r.value,
                      inst: e,
                      continue: !t.abort,
                    }),
                  (r.value = t.normalize ? a.href : tr(u));
                return;
              } catch (n) {
                r.issues.push({
                  code: "invalid_format",
                  format: "url",
                  input: r.value,
                  inst: e,
                  continue: !t.abort,
                });
              }
            });
        }),
        ti = ei("$ZodEmoji", (e, t) => {
          t.pattern ??
            (t.pattern = RegExp(
              "^(?=[\\s\\S]*[\\p{Extended_Pictographic}\\p{Regional_Indicator}\\u20E3])[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$",
              "u",
            )),
            e9.init(e, t);
        }),
        tu = ei("$ZodNanoID", (e, t) => {
          var r;
          if (
            void 0 !== t.length &&
            (!Number.isInteger(t.length) || t.length < 1)
          )
            throw Error(`Invalid nanoid length: ${t.length}`);
          t.pattern ??
            (t.pattern =
              void 0 === t.length
                ? ey
                : ((r = t.length), RegExp(`^[a-zA-Z0-9_-]{${r}}$`))),
            e9.init(e, t);
        }),
        ta = ei("$ZodCUID", (e, t) => {
          t.pattern ?? (t.pattern = ev), e9.init(e, t);
        }),
        to = ei("$ZodCUID2", (e, t) => {
          t.pattern ?? (t.pattern = em), e9.init(e, t);
        }),
        ts = ei("$ZodULID", (e, t) => {
          t.pattern ?? (t.pattern = eC), e9.init(e, t);
        }),
        tl = ei("$ZodXID", (e, t) => {
          t.pattern ?? (t.pattern = eB), e9.init(e, t);
        }),
        tc = ei("$ZodKSUID", (e, t) => {
          t.pattern ?? (t.pattern = eE), e9.init(e, t);
        }),
        td = ei("$ZodISODateTime", (e, t) => {
          let r, n, i;
          t.pattern ??
            ((r = ["Z"]),
            t.offset && r.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)"),
            (n = `${eT({ precision: t.precision, seconds: !0 })}(?:${r.join("|")})`),
            (i = t.local ? `${n}|${eT({ precision: t.precision })}` : n),
            (t.pattern = RegExp(`^${eS}T(?:${i})$`))),
            e9.init(e, t);
        }),
        tf = ei("$ZodISODate", (e, t) => {
          t.pattern ?? (t.pattern = ej), e9.init(e, t);
        }),
        th = ei("$ZodISOTime", (e, t) => {
          t.pattern ?? (t.pattern = RegExp(`^${eT(t)}$`)), e9.init(e, t);
        }),
        tp = ei("$ZodISODuration", (e, t) => {
          t.pattern ?? (t.pattern = ew), e9.init(e, t);
        }),
        tg = ei("$ZodIPv4", (e, t) => {
          t.pattern ?? (t.pattern = e_), e9.init(e, t);
        }),
        tD = /^[0-9a-fA-F:.]+$/;
      function tv(e) {
        return !!tD.test(e) && te(`http://[${e}]`);
      }
      let tm = ei("$ZodIPv6", (e, t) => {
          t.pattern ?? (t.pattern = ek),
            e9.init(e, t),
            (e._zod.check = (r) => {
              tv(r.value) ||
                r.issues.push({
                  code: "invalid_format",
                  format: "ipv6",
                  input: r.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        tC = ei("$ZodCIDRv4", (e, t) => {
          t.pattern ?? (t.pattern = ex), e9.init(e, t);
        }),
        tB = ei("$ZodCIDRv6", (e, t) => {
          t.pattern ?? (t.pattern = eO),
            e9.init(e, t),
            (e._zod.check = (r) => {
              !(function (e) {
                let t = e.split("/");
                if (2 !== t.length) return !1;
                let [r, n] = t;
                if (!n) return !1;
                let i = Number(n);
                return `${i}` === n && !(i < 0) && !(i > 128) && tv(r);
              })(r.value) &&
                r.issues.push({
                  code: "invalid_format",
                  format: "cidrv6",
                  input: r.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        });
      function tE(e) {
        if ("" === e) return !0;
        if (/\s/.test(e) || e.length % 4 != 0) return !1;
        try {
          return atob(e), !0;
        } catch {
          return !1;
        }
      }
      let ty = /^[0-9a-zA-Z+/]*={0,2}$/,
        tw = ei("$ZodBase64", (e, t) => {
          t.pattern ?? (t.pattern = ty),
            e9.init(e, t),
            (e._zod.check = (r) => {
              tE(r.value) ||
                r.issues.push({
                  code: "invalid_format",
                  format: "base64",
                  input: r.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        tA = /^[A-Za-z0-9_-]*$/,
        tb = ei("$ZodBase64URL", (e, t) => {
          t.pattern ?? (t.pattern = tA),
            e9.init(e, t),
            (e._zod.check = (r) => {
              !(function (e) {
                if (!tA.test(e)) return !1;
                let t = e.replace(/[-_]/g, (e) => ("-" === e ? "+" : "/"));
                return tE(t.padEnd(4 * Math.ceil(t.length / 4), "="));
              })(r.value) &&
                r.issues.push({
                  code: "invalid_format",
                  format: "base64url",
                  input: r.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        tF = ei("$ZodE164", (e, t) => {
          t.pattern ?? (t.pattern = ez), e9.init(e, t);
        }),
        t_ = ei("$ZodJWT", (e, t) => {
          e9.init(e, t),
            (e._zod.check = (r) => {
              !(function (e, t = null) {
                try {
                  let r = e.split(".");
                  if (3 !== r.length) return !1;
                  let [n] = r;
                  if (!n) return !1;
                  let i = JSON.parse(atob(n));
                  if (
                    ("typ" in i && i?.typ !== "JWT") ||
                    !i.alg ||
                    (t && (!("alg" in i) || i.alg !== t))
                  )
                    return !1;
                  return !0;
                } catch {
                  return !1;
                }
              })(r.value, t.alg) &&
                r.issues.push({
                  code: "invalid_format",
                  format: "jwt",
                  input: r.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        tk = ei("$ZodUnknown", (e, t) => {
          e2.init(e, t), (e._zod.parse = (e) => e);
        }),
        tx = ei("$ZodNever", (e, t) => {
          e2.init(e, t),
            (e._zod.parse = (t, r) => (
              t.issues.push({
                expected: "never",
                code: "invalid_type",
                input: t.value,
                inst: e,
              }),
              t
            ));
        }),
        tO = (e) => (Array.isArray(e) ? e.length : -1);
      function tP(e, t, r) {
        e.issues.length && t.issues.push(...L(r, e.issues)),
          (t.value[r] = e.value);
      }
      let tz = ei("$ZodArray", (e, t) => {
        e2.init(e, t);
        let r = eo.memoizer;
        r?.attach(e),
          (e._zod.parse = (n, i) => {
            let u = n.value;
            if (!Array.isArray(u))
              return (
                n.issues.push({
                  expected: "array",
                  code: "invalid_type",
                  input: u,
                  inst: e,
                }),
                n
              );
            n.value = r ? r.alloc(e, n, Array(u.length), i) : Array(u.length);
            let a = [],
              o = i?.abortEarly;
            for (let e = 0; e < u.length; e++) {
              let r = u[e],
                s = t.element._zod.run({ value: r, issues: [] }, i);
              if (s instanceof Promise) a.push(s.then((t) => tP(t, n, e)));
              else if ((tP(s, n, e), o && 0 !== s.issues.length && K(s))) break;
            }
            return a.length ? Promise.all(a).then(() => n) : n;
          }),
          (function (e, t) {
            let r = W(e._zod.def.checks);
            if (!r.length) return;
            let n = Math.min(...r.map((e) => e[0])),
              i = e._zod.parse;
            e._zod.parse = (r, u) => {
              let a = t(r.value);
              if (a > n && !u?.skipChecks && u?.direction !== "backward") {
                for (let [t, n] of W(e._zod.def.checks))
                  if (a > t && n._zod.def.when(r)) {
                    let t = r.issues.length;
                    return (
                      n._zod.check(r),
                      (r.issues[t].continue = !1),
                      U(r.issues, t, e),
                      r
                    );
                  }
              }
              return i(r, u);
            };
          })(e, tO);
      });
      function tS(e, t, r, n, i, u) {
        let a = r in n,
          o = "optional" === u;
        if (a || !o || "optional" !== i) {
          if (e.issues.length) {
            if (void 0 !== i && o && !a) return;
            t.issues.push(...L(r, e.issues));
          }
          if (!a && void 0 === i) {
            e.issues.length ||
              t.issues.push({
                code: "invalid_type",
                expected: "nonoptional",
                input: void 0,
                path: [r],
              });
            return;
          }
          void 0 === e.value
            ? (a || ("defaulted" === i && !o)) && (t.value[r] = void 0)
            : (t.value[r] = e.value);
        }
      }
      let tj = [];
      function tT(e) {
        var t;
        let r = Object.keys(e.shape),
          n = Object.getOwnPropertySymbols(e.shape),
          i = n.length ? n : tj,
          u = i.length ? [...r, ...i] : r;
        for (let t of u)
          if (!e.shape?.[t]?._zod?.traits?.has("$ZodType"))
            throw Error(
              `Invalid element at key "${String(t)}": expected a Zod schema`,
            );
        let a = Object.keys((t = e.shape)).filter(
          (e) => void 0 !== t[e]._zod.optin && "optional" === t[e]._zod.optout,
        );
        return {
          ...e,
          allKeys: u,
          symbolKeys: i,
          keySet: new Set(r),
          numKeys: r.length,
          optionalKeys: new Set(a),
        };
      }
      function tN(e, t, r, n, i, u, a) {
        let o = [],
          s = i.keySet,
          l = i.catchall._zod,
          c = l.def.type,
          d = l.optin,
          f = l.optout,
          h = 0;
        for (let i in t) {
          if (a && r.issues.length !== h) {
            if (K(r, h)) break;
            h = r.issues.length;
          }
          if (s.has(i)) continue;
          if ("__proto__" === i) {
            "never" === c && o.push(i);
            continue;
          }
          if ("never" === c) {
            o.push(i);
            continue;
          }
          let u = l.run({ value: t[i], issues: [] }, n);
          u instanceof Promise
            ? e.push(u.then((e) => tS(e, r, i, t, d, f)))
            : tS(u, r, i, t, d, f);
        }
        return (o.length &&
          r.issues.push({
            code: "unrecognized_keys",
            keys: o,
            input: t,
            inst: u,
            continue: !0,
          }),
        e.length)
          ? Promise.all(e).then(() => r)
          : r;
      }
      let t$ = ei("$ZodObject", (e, t) => {
          let r;
          e2.init(e, t);
          let n = Object.getOwnPropertyDescriptor(t, "shape"),
            i = n?.get ? n.get.raw : (t.shape ?? {});
          if (i) {
            let e = () => {
              let r = { ...i };
              return (
                Object.defineProperty(t, "shape", { value: r }), (e.raw = r), r
              );
            };
            (e.raw = i), Object.defineProperty(t, "shape", { get: e });
          }
          let u = new m(() => tT(t));
          et(e, "propValues", (e) => {
            let t = e.def.shape,
              r = {};
            for (let e in t) {
              let n = t[e]._zod;
              if (n.values) {
                for (let t of (Object.prototype.hasOwnProperty.call(r, e) ||
                  B(r, e, new Set()),
                n.values))
                  r[e].add(t);
                void 0 !== n.optin && r[e].add(void 0);
              }
            }
            return r;
          });
          let a = t.catchall,
            o = eo.memoizer;
          o?.attach(e),
            (e._zod.parse = (t, n) => {
              r ?? (r = u.value);
              let i = t.value;
              if (!k(i))
                return (
                  t.issues.push({
                    expected: "object",
                    code: "invalid_type",
                    input: i,
                    inst: e,
                  }),
                  t
                );
              t.value = o ? o.alloc(e, t, {}, n) : {};
              let s = [],
                l = r.shape,
                c = n?.abortEarly,
                d = t.issues.length;
              for (let e of r.allKeys) {
                if (c && t.issues.length !== d) {
                  if (K(t, d)) break;
                  d = t.issues.length;
                }
                if ("__proto__" === e) continue;
                let r = l[e],
                  u = r._zod.optin,
                  a = r._zod.optout,
                  o = r._zod.run({ value: i[e], issues: [] }, n);
                o instanceof Promise
                  ? s.push(o.then((r) => tS(r, t, e, i, u, a)))
                  : tS(o, t, e, i, u, a);
              }
              return a
                ? tN(s, i, t, n, u.value, e, !0 === c)
                : s.length
                  ? Promise.all(s).then(() => t)
                  : t;
            });
        }),
        tR = ei("$ZodObjectJIT", (e, t) => {
          let r, n;
          t$.init(e, t);
          let i = e._zod.parse,
            u = new m(() => tT(t)),
            a = eo.memoizer,
            o = !eo.jitless,
            s = o && x.value,
            l = t.catchall;
          e._zod.parse = (c, d) => {
            n ?? (n = u.value);
            let f = c.value;
            return k(f)
              ? o && s && d?.async === !1 && !0 !== d.jitless
                ? (r ||
                    (r = ((t) => {
                      let r = u.value,
                        n = r.symbolKeys,
                        i = new e0(["payload", "ctx"], {
                          shape: t,
                          inst: e,
                          memo: a,
                          syms: n,
                        }),
                        o = (e) =>
                          `shape[${e}]._zod.run({ value: input[${e}], issues: [] }, ctx)`,
                        s = (e, t) => `
          let ${e}_ab = false;
          for (let i = 0; i < ${e}.issues.length; i++) {
            const iss = ${e}.issues[i];
            iss.path = iss.path ? [${t}, ...iss.path] : [${t}];
            payload.issues.push(iss);
            if (iss.continue !== true) ${e}_ab = true;
          }
          if (${e}_ab && ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }`;
                      i.write("const input = payload.value;");
                      let l = Object.create(null),
                        c = 0;
                      for (let e of r.allKeys) l[e] = `key_${c++}`;
                      for (let e of (i.write(
                        a
                          ? "const newResult = memo.alloc(inst, payload, {}, ctx);"
                          : "const newResult = {};",
                      ),
                      r.allKeys)) {
                        if ("__proto__" === e) continue;
                        let r = l[e],
                          u =
                            "symbol" == typeof e
                              ? `syms[${n.indexOf(e)}]`
                              : JSON.stringify(e),
                          a = `${u} in input`,
                          c = t[e],
                          d = c?._zod?.optin,
                          f = void 0 !== d,
                          h = c?._zod?.optout === "optional";
                        if ((i.write(`const ${r} = ${o(u)};`), f && h)) {
                          let e =
                            "optional" === d
                              ? `${r}_present`
                              : `${r}.value !== undefined || ${r}_present`;
                          i.write(`
        const ${r}_present = ${a};
        if (!${r}.issues.length || ${r}_present) {
          if (${r}.issues.length) {${s(r, u)}
          }

          if (${e}) {
            newResult[${u}] = ${r}.value;
          }
        }

      `);
                        } else
                          f
                            ? (i.write(`
        if (${r}.issues.length) {${s(r, u)}
        }
      `),
                              "defaulted" === d
                                ? i.write(`newResult[${u}] = ${r}.value;`)
                                : i.write(`
        if (${r}.value !== undefined || ${a}) {
          newResult[${u}] = ${r}.value;
        }
      `))
                            : i.write(`
        const ${r}_present = ${a};
        if (${r}.issues.length) {${s(r, u)}
        }
        if (!${r}_present && !${r}.issues.length) {
          payload.issues.push({
            code: "invalid_type",
            expected: "nonoptional",
            input: undefined,
            path: [${u}]
          });
          if (ctx && ctx.abortEarly) {
            payload.value = newResult;
            return payload;
          }
        }

        if (${r}_present) {
          newResult[${u}] = ${r}.value;
        }

      `);
                      }
                      return (
                        i.write("payload.value = newResult;"),
                        i.write("return payload;"),
                        i.compile()
                      );
                    })(t.shape)),
                  (c = r(c, d)),
                  l)
                  ? tN([], f, c, d, n, e, d?.abortEarly === !0)
                  : c
                : i(c, d)
              : (c.issues.push({
                  expected: "object",
                  code: "invalid_type",
                  input: f,
                  inst: e,
                }),
                c);
          };
        });
      function tM(e, t, r, n) {
        for (let r of e)
          if (0 === r.issues.length) return (t.value = r.value), t;
        let i = e.filter((e) => !K(e));
        return 1 === i.length
          ? ((t.value = i[0].value), i[0])
          : (t.issues.push({
              code: "invalid_union",
              input: t.value,
              inst: r,
              errors: e.map((e) => e.issues.map((e) => V(e, n, es()))),
            }),
            t);
      }
      let tI = ei("$ZodUnion", (e, t) => {
          e2.init(e, t),
            et(e, "optin", (e) =>
              e.def.options.some((e) => "defaulted" === e._zod.optin)
                ? "defaulted"
                : e.def.options.some((e) => void 0 !== e._zod.optin)
                  ? "optional"
                  : void 0,
            ),
            et(e, "optout", (e) =>
              e.def.options.some((e) => "optional" === e._zod.optout)
                ? "optional"
                : void 0,
            ),
            et(e, "values", (e) => {
              if (e.def.options.every((e) => e._zod.values))
                return new Set(
                  e.def.options.flatMap((e) => Array.from(e._zod.values)),
                );
            }),
            et(e, "pattern", (e) => {
              if (e.def.options.every((e) => e._zod.pattern)) {
                let t = e.def.options.map((e) => e._zod.pattern);
                return RegExp(`^(${t.map((e) => C(e.source)).join("|")})$`);
              }
            });
          let r = 1 === t.options.length ? t.options[0]._zod.run : null;
          e._zod.parse = (n, i) => {
            if (r) return r(n, i);
            let u = !1,
              a = [];
            for (let e of t.options) {
              let t = e._zod.run({ value: n.value, issues: [] }, i);
              if (t instanceof Promise) a.push(t), (u = !0);
              else {
                if (0 === t.issues.length) return t;
                a.push(t);
              }
            }
            return u
              ? Promise.all(a).then((t) => tM(t, n, e, i))
              : tM(a, n, e, i);
          };
        }),
        tZ = ei("$ZodIntersection", (e, t) => {
          e2.init(e, t),
            (e._zod.parse = (e, r) => {
              let n = e.value,
                i = t.left._zod.run({ value: n, issues: [] }, r),
                u = t.right._zod.run({ value: n, issues: [] }, r);
              return i instanceof Promise || u instanceof Promise
                ? Promise.all([i, u]).then(([t, r]) => tK(e, t, r))
                : tK(e, i, u);
            });
        });
      function tK(e, t, r) {
        let n,
          i = new Map(),
          u = new Map(),
          a = (e, t) => {
            let r;
            if ("unrecognized_keys" !== e.code || e.path?.length)
              if (
                "invalid_key" !== e.code ||
                "record" !== e.origin ||
                e.path?.length !== 1
              )
                return !1;
              else {
                let t = String(e.path[0]);
                u.has(t) || u.set(t, e), (r = [t]);
              }
            else n ?? (n = e), (r = e.keys);
            for (let e of r) i.has(e) || i.set(e, {}), (i.get(e)[t] = !0);
            return !0;
          };
        for (let r of t.issues) a(r, "l") || e.issues.push(r);
        for (let t of r.issues) a(t, "r") || e.issues.push(t);
        let o = [...i].filter(([, e]) => e.l && e.r).map(([e]) => e);
        if (o.length) {
          let t = n ? o.filter((e) => n.keys.includes(e)) : [];
          for (let r of (t.length && e.issues.push({ ...n, keys: t }), o))
            !t.includes(r) && u.has(r) && e.issues.push(u.get(r));
        }
        let s = (function e(t, r) {
          if (t === r || (t instanceof Date && r instanceof Date && +t == +r))
            return { valid: !0, data: t };
          if (O(t) && O(r)) {
            let n = Object.keys(r),
              i = Object.keys(t).filter((e) => -1 !== n.indexOf(e)),
              u = { ...t, ...r };
            for (let n of (Object.prototype.hasOwnProperty.call(
              u,
              "__proto__",
            ) && delete u.__proto__,
            i)) {
              if ("__proto__" === n) continue;
              let i = e(t[n], r[n]);
              if (!i.valid)
                return { valid: !1, mergeErrorPath: [n, ...i.mergeErrorPath] };
              u[n] = i.data;
            }
            return { valid: !0, data: u };
          }
          if (Array.isArray(t) && Array.isArray(r)) {
            if (t.length !== r.length) return { valid: !1, mergeErrorPath: [] };
            let n = [];
            for (let i = 0; i < t.length; i++) {
              let u = e(t[i], r[i]);
              if (!u.valid)
                return { valid: !1, mergeErrorPath: [i, ...u.mergeErrorPath] };
              n.push(u.data);
            }
            return { valid: !0, data: n };
          }
          return { valid: !1, mergeErrorPath: [] };
        })(t.value, r.value);
        if (!s.valid) {
          if (K(e)) return e;
          throw Error(
            `Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`,
          );
        }
        return (e.value = s.data), e;
      }
      let tL = ei("$ZodRecord", (e, t) => {
          e2.init(e, t);
          let r = eo.memoizer;
          r?.attach(e),
            (e._zod.parse = (n, i) => {
              let u = n.value;
              if (!O(u))
                return (
                  n.issues.push({
                    expected: "record",
                    code: "invalid_type",
                    input: u,
                    inst: e,
                  }),
                  n
                );
              let a = [],
                o = t.keyType._zod.values;
              if (o && !t.partial) {
                let s;
                n.value = r ? r.alloc(e, n, {}, i) : {};
                let l = new Set();
                for (let r of o)
                  if (
                    "string" == typeof r ||
                    "number" == typeof r ||
                    "symbol" == typeof r
                  ) {
                    if (
                      (l.add("number" == typeof r ? r.toString() : r),
                      "__proto__" === r)
                    )
                      continue;
                    let o = t.keyType._zod.run({ value: r, issues: [] }, i);
                    if (o instanceof Promise)
                      throw Error(
                        "Async schemas not supported in object keys currently",
                      );
                    if (o.issues.length) {
                      n.issues.push({
                        code: "invalid_key",
                        origin: "record",
                        issues: o.issues.map((e) => V(e, i, es())),
                        input: r,
                        path: [r],
                        inst: e,
                      });
                      continue;
                    }
                    let s = o.value;
                    if ("__proto__" === s) continue;
                    let c = t.valueType._zod.run(
                      { value: u[r], issues: [] },
                      i,
                    );
                    c instanceof Promise
                      ? a.push(
                          c.then((e) => {
                            e.issues.length && n.issues.push(...L(r, e.issues)),
                              (n.value[s] = e.value);
                          }),
                        )
                      : (c.issues.length && n.issues.push(...L(r, c.issues)),
                        (n.value[s] = c.value));
                  }
                for (let e in u)
                  if (!l.has(e))
                    if ("loose" === t.mode) {
                      if ("__proto__" === e) continue;
                      n.value[e] = u[e];
                    } else (s = s ?? []).push(e);
                s &&
                  s.length > 0 &&
                  n.issues.push({
                    code: "unrecognized_keys",
                    input: u,
                    inst: e,
                    keys: s,
                    continue: !0,
                  });
              } else {
                let s;
                for (let l of ((n.value = r ? r.alloc(e, n, {}, i) : {}),
                Reflect.ownKeys(u))) {
                  if (
                    "__proto__" === l ||
                    !Object.prototype.propertyIsEnumerable.call(u, l)
                  )
                    continue;
                  let r = t.keyType._zod.run({ value: l, issues: [] }, i);
                  if (r instanceof Promise)
                    throw Error(
                      "Async schemas not supported in object keys currently",
                    );
                  if ("string" == typeof l && eR.test(l) && r.issues.length) {
                    let e = t.keyType._zod.run(
                      { value: Number(l), issues: [] },
                      i,
                    );
                    if (e instanceof Promise)
                      throw Error(
                        "Async schemas not supported in object keys currently",
                      );
                    0 === e.issues.length && (r = e);
                  }
                  if (r.issues.length) {
                    "loose" === t.mode
                      ? (n.value[l] = u[l])
                      : o
                        ? (s = s ?? []).push(l)
                        : n.issues.push({
                            code: "invalid_key",
                            origin: "record",
                            issues: r.issues.map((e) => V(e, i, es())),
                            input: l,
                            path: [l],
                            inst: e,
                          });
                    continue;
                  }
                  let c = r.value;
                  if ("__proto__" === c) continue;
                  let d = t.valueType._zod.run({ value: u[l], issues: [] }, i);
                  d instanceof Promise
                    ? a.push(
                        d.then((e) => {
                          e.issues.length && n.issues.push(...L(l, e.issues)),
                            (n.value[c] = e.value);
                        }),
                      )
                    : (d.issues.length && n.issues.push(...L(l, d.issues)),
                      (n.value[c] = d.value));
                }
                s &&
                  s.length > 0 &&
                  n.issues.push({
                    code: "unrecognized_keys",
                    input: u,
                    inst: e,
                    keys: s,
                    continue: !0,
                  });
              }
              return a.length ? Promise.all(a).then(() => n) : n;
            });
        }),
        tq = ei("$ZodEnum", (e, t) => {
          e2.init(e, t);
          let r = g(t.entries),
            n = new Set(r);
          (e._zod.values = n),
            et(e, "pattern", (e) => {
              let t = g(e.def.entries).filter((e) => z.has(typeof e));
              return new RegExp(
                t.length
                  ? `^(${t.map((e) => S(e.toString())).join("|")})$`
                  : "^[^\\s\\S]$",
              );
            }),
            (e._zod.parse = (t, i) => {
              let u = t.value;
              return (
                n.has(u) ||
                  t.issues.push({
                    code: "invalid_value",
                    values: r,
                    input: u,
                    inst: e,
                  }),
                t
              );
            });
        }),
        tW = ei("$ZodTransform", (e, t) => {
          e2.init(e, t),
            (e._zod.optin = "optional"),
            eo.memoizer?.guard(e),
            (e._zod.parse = (r, n) => {
              if ("backward" === n.direction) throw new ea(e.constructor.name);
              let i = t.transform(r.value, r);
              if (n.async)
                return (i instanceof Promise ? i : Promise.resolve(i)).then(
                  (e) => ((r.value = e), r),
                );
              if (i instanceof Promise) throw new eu();
              return (r.value = i), r;
            });
        });
      function tU(e, t) {
        return (e.value = t.issues.length ? void 0 : t.value), e;
      }
      let tV = ei("$ZodOptional", (e, t) => {
          e2.init(e, t),
            et(e, "optin", (e) =>
              "defaulted" === e.def.innerType._zod.optin
                ? "defaulted"
                : "optional",
            ),
            (e._zod.optout = "optional"),
            et(e, "values", (e) => {
              let t = e.def.innerType._zod.values;
              return t ? new Set([...t, void 0]) : void 0;
            }),
            et(e, "pattern", (e) => {
              let t = e.def.innerType._zod.pattern;
              return t ? RegExp(`^(${C(t.source)})?$`) : void 0;
            }),
            (e._zod.parse = (e, r) => {
              if (void 0 === e.value) {
                if ("defaulted" !== t.innerType._zod.optin) return e;
                let n = t.innerType._zod.run({ value: e.value, issues: [] }, r);
                return n instanceof Promise
                  ? n.then((t) => tU(e, t))
                  : tU(e, n);
              }
              return t.innerType._zod.run(e, r);
            });
        }),
        tJ = ei("$ZodExactOptional", (e, t) => {
          tV.init(e, t),
            et(e, "values", (e) => e.def.innerType._zod.values),
            et(e, "pattern", (e) => e.def.innerType._zod.pattern),
            (e._zod.parse = (e, r) => t.innerType._zod.run(e, r));
        }),
        tQ = ei("$ZodNullable", (e, t) => {
          e2.init(e, t),
            et(e, "optin", (e) => e.def.innerType._zod.optin),
            et(e, "optout", (e) => e.def.innerType._zod.optout),
            et(e, "pattern", (e) => {
              let t = e.def.innerType._zod.pattern;
              return t ? RegExp(`^(${C(t.source)}|null)$`) : void 0;
            }),
            et(e, "values", (e) =>
              e.def.innerType._zod.values
                ? new Set([...e.def.innerType._zod.values, null])
                : void 0,
            ),
            (e._zod.parse = (e, r) =>
              null === e.value ? e : t.innerType._zod.run(e, r));
        }),
        tH = ei("$ZodDefault", (e, t) => {
          e2.init(e, t),
            (e._zod.optin = "defaulted"),
            et(e, "values", (e) => e.def.innerType._zod.values),
            (e._zod.parse = (e, r) => {
              if ("backward" === r.direction) return t.innerType._zod.run(e, r);
              if (void 0 === e.value) return (e.value = t.defaultValue), e;
              let n = t.innerType._zod.run(e, r);
              return n instanceof Promise ? n.then((e) => tY(e, t)) : tY(n, t);
            });
        });
      function tY(e, t) {
        return void 0 === e.value && (e.value = t.defaultValue), e;
      }
      let tX = ei("$ZodPrefault", (e, t) => {
          e2.init(e, t),
            (e._zod.optin = "defaulted"),
            et(e, "values", (e) => e.def.innerType._zod.values),
            (e._zod.parse = (e, r) => (
              "backward" === r.direction ||
                (void 0 === e.value && (e.value = t.defaultValue)),
              t.innerType._zod.run(e, r)
            ));
        }),
        tG = ei("$ZodNonOptional", (e, t) => {
          e2.init(e, t),
            et(e, "values", (e) => {
              let t = e.def.innerType._zod.values;
              return t ? new Set([...t].filter((e) => void 0 !== e)) : void 0;
            }),
            (e._zod.parse = (r, n) => {
              let i = t.innerType._zod.run(r, n);
              return i instanceof Promise ? i.then((t) => t0(t, e)) : t0(i, e);
            });
        });
      function t0(e, t) {
        return (
          e.issues.length ||
            void 0 !== e.value ||
            e.issues.push({
              code: "invalid_type",
              expected: "nonoptional",
              input: e.value,
              inst: t,
            }),
          e
        );
      }
      function t1(e, t, r, n) {
        return (
          t.issues.length
            ? (e.value = r.catchValue({
                ...t,
                value: e.value,
                error: { issues: t.issues.map((e) => V(e, n, es())) },
                input: e.value,
              }))
            : ((e.value = t.value), t.memo && (e.memo = !0)),
          e
        );
      }
      let t2 = ei("$ZodCatch", (e, t) => {
          e2.init(e, t),
            et(e, "optin", (e) =>
              "defaulted" === e.def.innerType._zod.optin
                ? "defaulted"
                : "optional",
            ),
            et(e, "optout", (e) => e.def.innerType._zod.optout),
            et(e, "values", (e) => e.def.innerType._zod.values),
            (e._zod.parse = (e, r) => {
              if ("backward" === r.direction) return t.innerType._zod.run(e, r);
              let n = t.innerType._zod.run({ value: e.value, issues: [] }, r);
              return n instanceof Promise
                ? n.then((n) => t1(e, n, t, r))
                : t1(e, n, t, r);
            });
        }),
        t3 = ei("$ZodPipe", (e, t) => {
          e2.init(e, t),
            et(e, "values", (e) => e.def.in._zod.values),
            et(e, "optin", (e) => e.def.in._zod.optin),
            et(e, "optout", (e) => e.def.out._zod.optout),
            et(e, "propValues", (e) => e.def.in._zod.propValues),
            (e._zod.parse = (e, r) => {
              if ("backward" === r.direction) {
                let n = t.out._zod.run(e, r);
                return n instanceof Promise
                  ? n.then((e) => t4(e, t.in, r))
                  : t4(n, t.in, r);
              }
              let n = t.in._zod.run(e, r);
              return n instanceof Promise
                ? n.then((e) => t4(e, t.out, r))
                : t4(n, t.out, r);
            });
        });
      function t4(e, t, r) {
        return e.issues.some((e) => "unrecognized_keys" !== e.code)
          ? ((e.aborted = !0), e)
          : t._zod.run({ value: e.value, issues: e.issues }, r);
      }
      let t7 = ei("$ZodReadonly", (e, t) => {
        e2.init(e, t),
          et(e, "propValues", (e) => e.def.innerType._zod.propValues),
          et(e, "values", (e) => e.def.innerType._zod.values),
          et(e, "optin", (e) => e.def.innerType?._zod?.optin),
          et(e, "optout", (e) => e.def.innerType?._zod?.optout),
          (e._zod.parse = (e, r) => {
            if ("backward" === r.direction) return t.innerType._zod.run(e, r);
            let n = t.innerType._zod.run(e, r);
            return n instanceof Promise ? n.then(t9) : t9(n);
          });
      });
      function t9(e) {
        return e.memo || (e.value = Object.freeze(e.value)), e;
      }
      let t8 = ei("$ZodCustom", (e, t) => {
        eZ.init(e, t),
          e2.init(e, t),
          (e._zod.parse = (e, t) => e),
          (e._zod.check = (r) => {
            let n = r.value,
              i = t.fn(n);
            if (i instanceof Promise) return i.then((t) => t6(t, r, n, e));
            t6(i, r, n, e);
          });
      });
      function t6(e, t, r, n) {
        if (!e) {
          let e = {
            code: "custom",
            input: r,
            inst: n,
            path: [...(n._zod.def.path ?? [])],
            continue: !n._zod.def.abort,
          };
          n._zod.def.params && (e.params = n._zod.def.params),
            t.issues.push(Y(e));
        }
      }
      (i = globalThis).__zod_globalRegistry ??
        (i.__zod_globalRegistry = new (class e {
          constructor() {
            (this._map = new WeakMap()), (this._idmap = new Map());
          }
          add(e, ...t) {
            let r = t[0];
            return (
              this._map.set(e, r),
              r &&
                "object" == typeof r &&
                "id" in r &&
                this._idmap.set(r.id, e),
              this
            );
          }
          clear() {
            return (this._map = new WeakMap()), (this._idmap = new Map()), this;
          }
          remove(e) {
            let t = this._map.get(e);
            return (
              t &&
                "object" == typeof t &&
                "id" in t &&
                this._idmap.delete(t.id),
              this._map.delete(e),
              this
            );
          }
          get(e) {
            let t = e._zod.parent;
            if (t) {
              let r = { ...(this.get(t) ?? {}) };
              delete r.id;
              let n = { ...r, ...this._map.get(e) };
              return Object.keys(n).length ? n : void 0;
            }
            return this._map.get(e);
          }
          has(e) {
            return this._map.has(e);
          }
        })());
      let t5 = globalThis.__zod_globalRegistry;
      function re(e, t) {
        return new eL({ check: "max_length", ...T(t), maximum: e });
      }
      function rt(e, t) {
        return new eq({ check: "min_length", ...T(t), minimum: e });
      }
      function rr(e, t) {
        return new eW({ check: "length_equals", ...T(t), length: e });
      }
      function rn(e) {
        return new eG({ check: "overwrite", tx: e });
      }
      function ri(e, ...t) {
        for (let r of t)
          for (let t of Reflect.ownKeys(r))
            Object.prototype.propertyIsEnumerable.call(r, t) && B(e, t, r[t]);
        return e;
      }
      function ru(e) {
        let t = e?.target ?? "draft-2020-12";
        return (
          "draft-4" === t && (t = "draft-04"),
          "draft-7" === t && (t = "draft-07"),
          {
            processors: e.processors ?? {},
            metadataRegistry: e?.metadata ?? t5,
            target: t,
            unrepresentable: e?.unrepresentable ?? "throw",
            override: e?.override ?? (() => {}),
            io: e?.io ?? "output",
            counter: 0,
            seen: new Map(),
            sharedDefsExtractedFor: void 0,
            sharedEmitDoneFor: void 0,
            cycles: e?.cycles ?? "ref",
            reused: e?.reused ?? "inline",
            intersections: [],
            deferred: [],
            external: e?.external ?? void 0,
          }
        );
      }
      function ra(e, t, r, n, i) {
        let u =
          "function" == typeof t.unrepresentable
            ? t.unrepresentable({ zodSchema: e, path: n.path, message: i })
            : t.unrepresentable;
        if ("any" === u) return !1;
        if (void 0 === u || "throw" === u) throw Error(i);
        return Object.assign(r, u), !0;
      }
      function ro(e, t, r = { path: [], schemaPath: [] }) {
        var n;
        let i = e._zod.def,
          u = t.seen.get(e);
        if (u)
          return (
            u.count++, r.schemaPath.includes(e) && (u.cycle = r.path), u.schema
          );
        let a = { schema: {}, count: 1, cycle: void 0, path: r.path };
        t.seen.set(e, a),
          (t.sharedDefsExtractedFor = void 0),
          (t.sharedEmitDoneFor = void 0);
        let o = e._zod.toJSONSchema?.();
        if (o) a.schema = o;
        else {
          let n = { ...r, schemaPath: [...r.schemaPath, e], path: r.path };
          if (e._zod.processJSONSchema)
            e._zod.processJSONSchema(t, a.schema, n);
          else {
            let r = a.schema,
              u = t.processors[i.type];
            if (!u)
              throw Error(
                `[toJSONSchema]: Non-representable type encountered: ${i.type}`,
              );
            u(e, t, r, n);
          }
          let u = e._zod.parent;
          u &&
            (a.ref || (a.ref = u), ro(u, t, n), (t.seen.get(u).isParent = !0));
        }
        let s = t.metadataRegistry.get(e);
        return (
          s && ri(a.schema, s),
          "input" === t.io &&
            (function e(t, r) {
              let n = r ?? { seen: new Set() };
              if (n.seen.has(t)) return !1;
              n.seen.add(t);
              let i = t._zod.def;
              if ("transform" === i.type) return !0;
              if ("array" === i.type) return e(i.element, n);
              if ("set" === i.type) return e(i.valueType, n);
              if ("lazy" === i.type) return e(i.getter(), n);
              if (
                "promise" === i.type ||
                "optional" === i.type ||
                "nonoptional" === i.type ||
                "nullable" === i.type ||
                "readonly" === i.type ||
                "default" === i.type ||
                "prefault" === i.type ||
                "catch" === i.type
              )
                return e(i.innerType, n);
              if ("intersection" === i.type)
                return e(i.left, n) || e(i.right, n);
              if ("record" === i.type || "map" === i.type)
                return e(i.keyType, n) || e(i.valueType, n);
              if ("pipe" === i.type)
                return (
                  !!t._zod.traits.has("$ZodCodec") || e(i.in, n) || e(i.out, n)
                );
              if ("object" === i.type) {
                for (let t in i.shape) if (e(i.shape[t], n)) return !0;
                return !1;
              }
              if ("union" === i.type) {
                for (let t of i.options) if (e(t, n)) return !0;
                return !1;
              }
              if ("tuple" === i.type) {
                for (let t of i.items) if (e(t, n)) return !0;
                if (i.rest && e(i.rest, n)) return !0;
              }
              return !1;
            })(e) &&
            (delete a.schema.examples, delete a.schema.default),
          "input" === t.io &&
            "_prefault" in a.schema &&
            ((n = a.schema).default ?? (n.default = a.schema._prefault)),
          delete a.schema._prefault,
          t.seen.get(e).schema
        );
      }
      function rs(e) {
        return e.replace(/~/g, "~0").replace(/\//g, "~1");
      }
      function rl(e, t) {
        let r = e.seen.get(t);
        if (!r) throw Error("Unprocessed schema. This is a bug in Zod.");
        if (e.external && e.sharedDefsExtractedFor === e.external) return;
        let n = new Map();
        for (let t of e.seen.entries()) {
          let r = e.metadataRegistry.get(t[0])?.id;
          if (r) {
            let e = n.get(r);
            if (e && e !== t[0])
              throw Error(
                `Duplicate schema id "${r}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`,
              );
            n.set(r, t[0]);
          }
        }
        let i = (t) => {
          if (t[1].schema.$ref) return;
          let n = t[1],
            { ref: i, defId: u } = ((t) => {
              let n = "draft-2020-12" === e.target ? "$defs" : "definitions";
              if (e.external) {
                let r = e.external.registry.get(t[0])?.id,
                  i = e.external.uri ?? ((e) => e);
                if (r) return { ref: i(r) };
                let u = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`;
                return (
                  (t[1].defId = u),
                  { defId: u, ref: `${i("__shared")}#/${n}/${rs(u)}` }
                );
              }
              let i = `#/${n}/`;
              if (t[1] === r && !t[1].schema.id) return { ref: "#" };
              let u = t[1].schema.id ?? `__schema${e.counter++}`;
              return { defId: u, ref: i + rs(u) };
            })(t);
          (n.def = { ...n.schema }), u && (n.defId = u);
          let a = n.schema;
          for (let e in a) delete a[e];
          a.$ref = i;
        };
        if ("throw" === e.cycles)
          for (let t of e.seen.entries()) {
            let e = t[1];
            if (e.cycle)
              throw Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
          }
        for (let r of e.seen.entries()) {
          let n = r[1];
          if (t === r[0]) {
            i(r);
            continue;
          }
          if (e.external) {
            let n = e.external.registry.get(r[0])?.id;
            if (t !== r[0] && n) {
              i(r);
              continue;
            }
          }
          if (e.metadataRegistry.get(r[0])?.id || n.cycle) {
            i(r);
            continue;
          }
          n.count > 1 && "ref" === e.reused && i(r);
        }
        e.external && (e.sharedDefsExtractedFor = e.external);
      }
      let rc = new Set([
          "type",
          "properties",
          "required",
          "additionalProperties",
        ]),
        rd = ["oneOf", "anyOf"];
      function rf(e) {
        let t = e.additionalProperties;
        return void 0 === t || !1 === t || "object" != typeof t || null === t
          ? null
          : Object.keys(t).length
            ? t
            : null;
      }
      function rh(e) {
        let t = [];
        for (let r of e) {
          if ("object" != typeof r || "object" !== r.type) return null;
          for (let e in r) if (!rc.has(e)) return null;
          t.push(r);
        }
        let r = {},
          n = new Set();
        for (let e of t) {
          for (let n in e.properties) {
            if (Object.prototype.hasOwnProperty.call(r, n)) continue;
            let e = [];
            for (let r of t) {
              let t = r.properties?.[n] ?? rf(r);
              null != t &&
                (e.some((e) => JSON.stringify(e) === JSON.stringify(t)) ||
                  e.push(t));
            }
            B(r, n, 1 === e.length ? e[0] : (rh(e) ?? { allOf: e }));
          }
          for (let t of e.required ?? []) n.add(t);
        }
        let i = { type: "object", properties: r };
        if (
          (n.size && (i.required = [...n]),
          t.every((e) => !1 === e.additionalProperties))
        )
          i.additionalProperties = !1;
        else {
          let e = [];
          for (let r of t) {
            let t = rf(r);
            t &&
              !e.some((e) => JSON.stringify(e) === JSON.stringify(t)) &&
              e.push(t);
          }
          1 === e.length
            ? (i.additionalProperties = e[0])
            : e.length > 1 && (i.additionalProperties = { allOf: e });
        }
        return i;
      }
      function rp(e, t) {
        let r = e.seen.get(t);
        if (!r) throw Error("Unprocessed schema. This is a bug in Zod.");
        let n = (t) => {
          let r = e.seen.get(t);
          if (null === r.ref) return;
          let i = r.def ?? r.schema,
            u = { ...i },
            a = r.ref;
          if (((r.ref = null), a)) {
            n(a);
            let r = e.seen.get(a),
              o = r.schema;
            if (
              (o.$ref &&
              ("draft-07" === e.target ||
                "draft-04" === e.target ||
                "openapi-3.0" === e.target)
                ? ((i.allOf = i.allOf ?? []), i.allOf.push(o))
                : ri(i, o),
              ri(i, u),
              t._zod.parent === a)
            )
              for (let e in i)
                "$ref" !== e && "allOf" !== e && (e in u || delete i[e]);
            if (o.$ref && r.def)
              for (let e in i)
                "$ref" !== e &&
                  "allOf" !== e &&
                  e in r.def &&
                  JSON.stringify(i[e]) === JSON.stringify(r.def[e]) &&
                  delete i[e];
          }
          let o = t._zod.parent;
          if (o && o !== a) {
            n(o);
            let t = e.seen.get(o);
            if (t?.schema.$ref && ((i.$ref = t.schema.$ref), t.def))
              for (let e in i)
                "$ref" !== e &&
                  "allOf" !== e &&
                  e in t.def &&
                  JSON.stringify(i[e]) === JSON.stringify(t.def[e]) &&
                  delete i[e];
          }
          e.override({ zodSchema: t, jsonSchema: i, path: r.path ?? [] });
        };
        if (!e.external || e.sharedEmitDoneFor !== e.external) {
          for (let t of [...e.seen.entries()].reverse()) n(t[0]);
          if ("openapi-3.0" !== e.target)
            for (let t of e.seen.entries())
              !(function e(t) {
                let r = t.anyOf;
                if (!Array.isArray(r) || 0 === r.length || void 0 !== t.type)
                  return;
                let n = [];
                for (let t of r) {
                  if (!t || "object" != typeof t) return;
                  e(t);
                  let r = Object.keys(t);
                  if (1 !== r.length || "type" !== r[0]) return;
                  let i = t.type;
                  for (let e of Array.isArray(i) ? i : [i]) {
                    if ("string" != typeof e) return;
                    n.includes(e) || n.push(e);
                  }
                }
                delete t.anyOf, (t.type = 1 === n.length ? n[0] : n);
              })(t[1].def ?? t[1].schema);
          for (let t of e.deferred) t();
          if (e.intersections.length) {
            let t = new Map();
            for (let r of e.seen.values())
              for (let e of [r.schema, r.def]) {
                let r = e?.allOf;
                if (!Array.isArray(r)) continue;
                let n = t.get(r);
                n ? n.push(e) : t.set(r, [e]);
              }
            for (let r of e.intersections)
              for (let e of t.get(r) ?? [])
                !(function (e) {
                  let t = e.allOf;
                  if (!Array.isArray(t) || t.length < 2) return;
                  for (let t of rc) if (t in e) return;
                  let r = t.filter((e) => rd.some((t) => Array.isArray(e[t]))),
                    n = null;
                  if (r.length) {
                    let e = r[0],
                      i = rd.find((t) => Array.isArray(e[t]));
                    if (1 !== Object.keys(e).length) return;
                    let u = t.filter((t) => t !== e),
                      a = e[i].map((e) => rh([...u, e]));
                    if (a.some((e) => !e)) return;
                    n = { [i]: a };
                  } else n = rh(t);
                  n && (delete e.allOf, ri(e, n));
                })(e);
          }
        }
        let i = {};
        if (
          ("draft-2020-12" === e.target
            ? (i.$schema = "https://json-schema.org/draft/2020-12/schema")
            : "draft-07" === e.target
              ? (i.$schema = "http://json-schema.org/draft-07/schema#")
              : "draft-04" === e.target
                ? (i.$schema = "http://json-schema.org/draft-04/schema#")
                : e.target,
          e.external?.uri)
        ) {
          let r = e.external.registry.get(t)?.id;
          if (!r) throw Error("Schema is missing an `id` property");
          i.$id = e.external.uri(r);
        }
        ri(i, r.defId ? r.schema : (r.def ?? r.schema));
        let u = e.metadataRegistry.get(t)?.id;
        void 0 !== u && i.id === u && delete i.id;
        let a = e.external?.defs ?? {};
        if (!e.external || e.sharedEmitDoneFor !== e.external)
          for (let t of e.seen.entries()) {
            let e = t[1];
            e.def &&
              e.defId &&
              (e.def.id === e.defId && delete e.def.id, B(a, e.defId, e.def));
          }
        e.external && (e.sharedEmitDoneFor = e.external),
          e.external ||
            (Object.keys(a).length > 0 &&
              ("draft-2020-12" === e.target
                ? (i.$defs = a)
                : (i.definitions = a)));
        try {
          let r = JSON.parse(JSON.stringify(i));
          return (
            Object.defineProperty(r, "~standard", {
              value: {
                ...t["~standard"],
                jsonSchema: {
                  input: rg(t, "input", e.processors),
                  output: rg(t, "output", e.processors),
                },
              },
              enumerable: !1,
              writable: !1,
            }),
            r
          );
        } catch (e) {
          throw Error("Error converting schema to JSON.");
        }
      }
      let rg =
          (e, t, r = {}) =>
          (n) => {
            let { libraryOptions: i, target: u } = n ?? {},
              a = ru({ ...(i ?? {}), target: u, io: t, processors: r });
            return ro(e, a), rl(a, e), rp(a, e);
          },
        rD = (e, t, r) => {
          (void 0 === e[t] || r > e[t]) && (e[t] = r);
        },
        rv = (e, t, r) => {
          (void 0 === e[t] || r < e[t]) && (e[t] = r);
        },
        rm = (e, t) => {
          rD(e, "minimum", t), rv(e, "maximum", t);
        },
        rC = (e, t) => {
          e.multipleOf ?? (e.multipleOf = []),
            e.multipleOf.includes(t) || e.multipleOf.push(t);
        },
        rB = (e, t) => {
          e.patterns ?? (e.patterns = new Set()), e.patterns.add(t);
        },
        rE = (e, t) => {
          e.mime = e.mime ? e.mime.filter((e) => t.includes(e)) : [...t];
        },
        ry = (e, t) => {
          (e.format = t), t.includes("int") && (e.isInt = !0);
        },
        rw = (e, t) => rD(e, "minimum", t.minimum),
        rA = (e, t) => rv(e, "maximum", t.maximum),
        rb = (e) => (t, r) => {
          ry(t, r.format);
          let [n, i] = e[r.format];
          rD(t, "minimum", n), rv(t, "maximum", i);
        },
        rF = {
          greater_than: (e, t) =>
            rD(e, t.inclusive ? "minimum" : "exclusiveMinimum", t.value),
          less_than: (e, t) =>
            rv(e, t.inclusive ? "maximum" : "exclusiveMaximum", t.value),
          multiple_of: (e, t) => rC(e, t.value),
          number_format: rb($),
          bigint_format: rb(R),
          min_length: rw,
          max_length: rA,
          length_equals: (e, t) => rm(e, t.length),
          min_size: rw,
          max_size: rA,
          size_equals: (e, t) => rm(e, t.size),
          string_format: (e, t) => {
            ry(e, t.format),
              t.pattern && rB(e, t.pattern),
              ("base64" === t.format || "base64url" === t.format) &&
                (e.contentEncoding = t.format),
              (t.local || -1 === t.precision) && (e.laxFormat = !0);
          },
          mime_type: (e, t) => rE(e, t.mime),
        };
      function r_(e) {
        let t = {},
          r = e._zod.def;
        for (let n of e._zod.traits.has("$ZodCheck")
          ? [e, ...(r.checks ?? [])]
          : (r.checks ?? []))
          rF[n._zod.def.check]?.(t, n._zod.def);
        let n = e._zod.bag;
        for (let e of (void 0 !== n.minimum && rD(t, "minimum", n.minimum),
        void 0 !== n.exclusiveMinimum &&
          rD(t, "exclusiveMinimum", n.exclusiveMinimum),
        void 0 !== n.maximum && rv(t, "maximum", n.maximum),
        void 0 !== n.exclusiveMaximum &&
          rv(t, "exclusiveMaximum", n.exclusiveMaximum),
        void 0 !== n.multipleOf && rC(t, n.multipleOf),
        void 0 !== n.format &&
          (t.format ?? (t.format = n.format),
          n.format.includes("int") && (t.isInt = !0)),
        n.mime && rE(t, n.mime),
        n.patterns ?? []))
          rB(t, e);
        return t;
      }
      let rk = {
          guid: "uuid",
          url: "uri",
          datetime: "date-time",
          json_string: "json-string",
          regex: "",
        },
        rx = new Map([
          [
            ty,
            /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
          ],
          [tA, /^(?:[A-Za-z0-9_-]{4})*(?:[A-Za-z0-9_-]{2,3})?$/],
        ]),
        rO = (e) => rx.get(e) ?? e;
      function rP(e) {
        let t = e._zod.def;
        return "pipe" === t.type && t.in._zod.traits.has("$ZodTransform")
          ? rP(t.out)
          : "catch" === t.type
            ? rP(t.innerType)
            : e._zod.optin;
      }
      let rz = new WeakMap(),
        rS = Symbol();
      function rj(e, t, r, n, i) {
        let u = !1,
          a = JSON.stringify(e, (e, t) =>
            "bigint" != typeof t ? t : ((u = !0), null),
          );
        return u
          ? (ra(
              t,
              r,
              n,
              i,
              "BigInt defaults cannot be represented in JSON Schema",
            ),
            rS)
          : JSON.parse(a);
      }
      let rT = (e, t, r, n) => {
          let i = e._zod.def;
          ro(i.innerType, t, n), (t.seen.get(e).ref = i.innerType);
        },
        rN = {
          get: function () {
            let e = this._zod;
            return (
              e.message ?? (e.message = JSON.stringify(e.def, v, 2)), e.message
            );
          },
          set: function (e) {
            this._zod.message = e;
          },
          enumerable: !0,
          configurable: !0,
        },
        r$ = { value: void 0, enumerable: !1 },
        rR = new WeakSet([Object.prototype, Error.prototype]),
        rM = (e, t) => {
          (e.name = "$ZodError"),
            (r$.value = t),
            Object.defineProperty(e, "issues", r$),
            (r$.value = void 0),
            Object.defineProperty(e, "message", rN);
          let r = Object.getPrototypeOf(e);
          rR.has(r) ||
            (rR.add(r),
            Object.defineProperty(r, "toString", {
              configurable: !0,
              enumerable: !1,
              get() {
                let e = () => this.message;
                return (
                  Object.defineProperty(this, "toString", {
                    value: e,
                    configurable: !0,
                    writable: !0,
                  }),
                  e
                );
              },
              set(e) {
                Object.defineProperty(this, "toString", {
                  value: e,
                  configurable: !0,
                  writable: !0,
                });
              },
            }));
        },
        rI = ei("$ZodError", rM);
      function rZ(e, t) {
        return { callee: t?.callee ?? e, Err: t?.Err };
      }
      ei("$ZodError", rM, void 0, { Parent: Error });
      let rK = (e) => {
          let t = (r, n, i, u) => {
            let a = i ? { ...i, async: !1 } : { async: !1 },
              o = r._zod.run({ value: n, issues: [] }, a);
            if (o instanceof Promise) throw new eu();
            if (o.issues.length) {
              let r = new (u?.Err ?? e)(o.issues.map((e) => V(e, a, es())));
              throw (_(r, u?.callee ?? t), r);
            }
            return o.value;
          };
          return t;
        },
        rL = (e) => {
          let t = async (r, n, i, u) => {
            let a = i ? { ...i, async: !0 } : { async: !0 },
              o = r._zod.run({ value: n, issues: [] }, a);
            if ((o instanceof Promise && (o = await o), o.issues.length)) {
              let r = new (u?.Err ?? e)(o.issues.map((e) => V(e, a, es())));
              throw (_(r, u?.callee ?? t), r);
            }
            return o.value;
          };
          return t;
        },
        rq = (e) => (t, r, n) => {
          let i = n ? { ...n, async: !1 } : { async: !1 },
            u = t._zod.run({ value: r, issues: [] }, i);
          if (u instanceof Promise) throw new eu();
          return u.issues.length
            ? rW(e, u.issues, i)
            : { success: !0, data: u.value };
        };
      function rW(e, t, r) {
        let n;
        return {
          success: !1,
          get error() {
            return (
              n ||
                ((n = new e(t.map((e) => V(e, r, es())))),
                (t = void 0),
                (r = void 0)),
              n
            );
          },
          set error(e) {
            (n = e), (t = void 0), (r = void 0);
          },
        };
      }
      let rU = (e) => async (t, r, n) => {
          let i = n ? { ...n, async: !0 } : { async: !0 },
            u = t._zod.run({ value: r, issues: [] }, i);
          return (
            u instanceof Promise && (u = await u),
            u.issues.length
              ? rW(e, u.issues, i)
              : { success: !0, data: u.value }
          );
        },
        rV = Symbol.for("zod.compile.invalid"),
        rJ = Symbol.for("zod.compile.fallback"),
        rQ = new WeakSet([Object.prototype, Error.prototype]);
      function rH(e, t, r) {
        Object.defineProperty(e, t, {
          configurable: !0,
          enumerable: !1,
          get() {
            let e = r(this);
            return (
              Object.defineProperty(this, t, {
                value: e,
                configurable: !0,
                writable: !0,
              }),
              e
            );
          },
          set(e) {
            Object.defineProperty(this, t, {
              value: e,
              configurable: !0,
              writable: !0,
            });
          },
        });
      }
      let rY = ei(
          "ZodError",
          (e, t) => {
            rI.init(e, t), (e.name = "ZodError");
            let r = Object.getPrototypeOf(e);
            rQ.has(r) ||
              (rQ.add(r),
              rH(
                r,
                "format",
                (e) => (t) =>
                  (function (e, t = (e) => e.message) {
                    let r = { _errors: [] },
                      n = (e, i = []) => {
                        for (let u of e.issues)
                          if ("invalid_union" === u.code && u.errors.length)
                            u.errors.map((e) =>
                              n({ issues: e }, [...i, ...u.path]),
                            );
                          else if ("invalid_key" === u.code)
                            n({ issues: u.issues }, [...i, ...u.path]);
                          else if ("invalid_element" === u.code)
                            n({ issues: u.issues }, [...i, ...u.path]);
                          else {
                            let e = [...i, ...u.path];
                            if (0 === e.length) r._errors.push(t(u));
                            else {
                              let n = r,
                                i = 0;
                              for (; i < e.length; ) {
                                let r = e[i],
                                  a = i === e.length - 1;
                                if ("_errors" === r) {
                                  a && n._errors.push(t(u)), i++;
                                  continue;
                                }
                                Object.prototype.hasOwnProperty.call(n, r) ||
                                  Object.defineProperty(n, r, {
                                    value: { _errors: [] },
                                    enumerable: !0,
                                    writable: !0,
                                    configurable: !0,
                                  });
                                let o = n[r];
                                a && o._errors.push(t(u)), (n = o), i++;
                              }
                            }
                          }
                      };
                    return n(e), r;
                  })(e, t),
              ),
              rH(
                r,
                "flatten",
                (e) => (t) =>
                  (function (e, t = (e) => e.message) {
                    let r = {},
                      n = [];
                    for (let a of e.issues)
                      if (a.path.length > 0) {
                        var i, u;
                        ((i = a.path[0]),
                        (u = () => []),
                        !Object.prototype.hasOwnProperty.call(r, i) &&
                          ("__proto__" === i
                            ? Object.defineProperty(r, i, {
                                value: u(),
                                writable: !0,
                                enumerable: !0,
                                configurable: !0,
                              })
                            : (r[i] = u())),
                        r[i]).push(t(a));
                      } else n.push(t(a));
                    return { formErrors: n, fieldErrors: r };
                  })(e, t),
              ),
              rH(r, "addIssue", (e) => (t) => {
                e.issues.push(t), (e.message = JSON.stringify(e.issues, v, 2));
              }),
              rH(r, "addIssues", (e) => (t) => {
                e.issues.push(...t),
                  (e.message = JSON.stringify(e.issues, v, 2));
              }),
              Object.defineProperty(r, "isEmpty", {
                configurable: !0,
                enumerable: !1,
                get() {
                  return 0 === this.issues.length;
                },
              }));
          },
          void 0,
          { Parent: Error },
        ),
        rX = rK(rY),
        rG = rL(rY),
        r0 = rq(rY),
        r1 = rU(rY),
        r2 =
          ((o = rK(rY)),
          (s = (e, t, r, n) =>
            o(
              e,
              t,
              r ? { ...r, direction: "backward" } : { direction: "backward" },
              rZ(s, n),
            ))),
        r3 = ((l = rK(rY)), (c = (e, t, r, n) => l(e, t, r, rZ(c, n)))),
        r4 =
          ((d = rL(rY)),
          (f = async (e, t, r, n) => {
            let i = r
              ? { ...r, direction: "backward" }
              : { direction: "backward" };
            return await d(e, t, i, rZ(f, n));
          })),
        r7 =
          ((h = rL(rY)),
          (p = async (e, t, r, n) => await h(e, t, r, rZ(p, n)))),
        r9 = (e, t, r) => {
          let n = r
            ? { ...r, direction: "backward" }
            : { direction: "backward" };
          return rq(rY)(e, t, n);
        },
        r8 = (e, t, r) => rq(rY)(e, t, r),
        r6 = async (e, t, r) => {
          let n = r
            ? { ...r, direction: "backward" }
            : { direction: "backward" };
          return rU(rY)(e, t, n);
        },
        r5 = async (e, t, r) => rU(rY)(e, t, r);
      function ne() {
        eo.memoizer || es({ memoizer: eD });
      }
      let nt = ei(
          "ZodType",
          (e, t) => (
            eo.localeError ||
              es({
                localeError: (() => {
                  let e = {
                      string: { unit: "characters", verb: "to have" },
                      file: { unit: "bytes", verb: "to have" },
                      array: { unit: "items", verb: "to have" },
                      set: { unit: "items", verb: "to have" },
                      map: { unit: "entries", verb: "to have" },
                    },
                    t = {
                      regex: "input",
                      email: "email address",
                      url: "URL",
                      emoji: "emoji",
                      uuid: "UUID",
                      uuidv4: "UUIDv4",
                      uuidv6: "UUIDv6",
                      nanoid: "nanoid",
                      guid: "GUID",
                      cuid: "cuid",
                      cuid2: "cuid2",
                      ulid: "ULID",
                      xid: "XID",
                      ksuid: "KSUID",
                      datetime: "ISO datetime",
                      date: "ISO date",
                      time: "ISO time",
                      duration: "ISO duration",
                      ipv4: "IPv4 address",
                      ipv6: "IPv6 address",
                      mac: "MAC address",
                      cidrv4: "IPv4 range",
                      cidrv6: "IPv6 range",
                      base64: "base64-encoded string",
                      base64url: "base64url-encoded string",
                      json_string: "JSON string",
                      e164: "E.164 number",
                      currency_code: "currency code",
                      credit_card: "credit card number",
                      iban: "IBAN",
                      jwt: "JWT",
                      template_literal: "input",
                    },
                    r = { nan: "NaN" };
                  function n(e, t) {
                    return "number" !== e ||
                      "number" != typeof t ||
                      Number.isFinite(t)
                      ? (r[e] ?? e)
                      : String(t);
                  }
                  return (r) => {
                    switch (r.code) {
                      case "invalid_type": {
                        let e = n(r.expected),
                          t = n(
                            (function (e) {
                              let t = typeof e;
                              switch (t) {
                                case "number":
                                  return Number.isNaN(e) ? "nan" : "number";
                                case "object":
                                  if (null === e) return "null";
                                  if (Array.isArray(e)) return "array";
                                  if (
                                    e &&
                                    Object.getPrototypeOf(e) !==
                                      Object.prototype &&
                                    "constructor" in e &&
                                    e.constructor
                                  )
                                    return e.constructor.name;
                              }
                              return t;
                            })(r.input),
                            r.input,
                          );
                        return `Invalid input: expected ${e}, received ${t}`;
                      }
                      case "invalid_value":
                        if (1 === r.values.length)
                          return `Invalid input: expected ${N(r.values[0])}`;
                        return `Invalid option: expected one of ${D(r.values, "|")}`;
                      case "too_big": {
                        let t = r.exact ? "exactly " : r.inclusive ? "<=" : "<",
                          n = e[r.origin] ?? null;
                        if (n)
                          return `Too big: expected ${r.origin ?? "value"} to have ${t}${r.maximum.toString()} ${n.unit ?? "elements"}`;
                        return `Too big: expected ${r.origin ?? "value"} to be ${t}${r.maximum.toString()}`;
                      }
                      case "too_small": {
                        let t = r.exact ? "exactly " : r.inclusive ? ">=" : ">",
                          n = e[r.origin] ?? null;
                        if (n)
                          return `Too small: expected ${r.origin} to have ${t}${r.minimum.toString()} ${n.unit}`;
                        return `Too small: expected ${r.origin} to be ${t}${r.minimum.toString()}`;
                      }
                      case "invalid_format":
                        if ("starts_with" === r.format)
                          return `Invalid string: must start with "${r.prefix}"`;
                        if ("ends_with" === r.format)
                          return `Invalid string: must end with "${r.suffix}"`;
                        if ("includes" === r.format)
                          return `Invalid string: must include "${r.includes}"`;
                        if ("regex" === r.format)
                          return `Invalid string: must match pattern ${r.pattern}`;
                        return `Invalid ${t[r.format] ?? r.format}`;
                      case "not_multiple_of":
                        return `Invalid number: must be a multiple of ${r.divisor}`;
                      case "unrecognized_keys":
                        return `Unrecognized key${r.keys.length > 1 ? "s" : ""}: ${D(r.keys, ", ")}`;
                      case "invalid_key":
                        return `Invalid key in ${r.origin}`;
                      case "invalid_union":
                        if (
                          r.options &&
                          Array.isArray(r.options) &&
                          r.options.length > 0
                        ) {
                          let e = r.options.map((e) => `'${e}'`).join(" | ");
                          return `Invalid discriminator value. Expected ${e}`;
                        }
                        if (!1 === r.inclusive)
                          return "Invalid input: more than one option matched";
                        return "Invalid input";
                      case "invalid_element":
                        return `Invalid value in ${r.origin}`;
                      default:
                        return "Invalid input";
                    }
                  };
                })(),
              }),
            e2.init(e, t),
            (e.def = t),
            (e.type = t.type),
            e
          ),
          {
            check(...e) {
              let t = this.def;
              return this.clone(
                F(t, {
                  checks: [
                    ...(t.checks ?? []),
                    ...e.map((e) =>
                      "function" == typeof e
                        ? {
                            _zod: {
                              check: e,
                              def: { check: "custom" },
                              onattach: [],
                            },
                          }
                        : e,
                    ),
                  ],
                }),
                { parent: !0 },
              );
            },
            with(...e) {
              return this.check(...e);
            },
            clone(e, t) {
              return j(this, e, t);
            },
            brand() {
              return this;
            },
            register(e, t) {
              return e.add(this, t), this;
            },
            refine(e, t) {
              return this.check(
                (function (e, t = {}) {
                  return new n0({
                    type: "custom",
                    check: "custom",
                    fn: e,
                    ...T(t),
                  });
                })(e, t),
              );
            },
            superRefine(e, t) {
              return this.check(
                (function (e, t) {
                  var r;
                  let n, i;
                  return (
                    (r = (t) => (
                      (t.addIssue = (e) => {
                        "string" == typeof e
                          ? t.issues.push(Y(e, t.value, n._zod.def))
                          : (e.fatal && (e.continue = !1),
                            e.code ?? (e.code = "custom"),
                            "input" in e || (e.input = t.value),
                            e.inst ?? (e.inst = n),
                            e.continue ?? (e.continue = !n._zod.def.abort),
                            t.issues.push(Y(e)));
                      }),
                      e(t.value, t)
                    )),
                    ((i = new eZ({ check: "custom", ...T(t) }))._zod.check = r),
                    (n = i)
                  );
                })(e, t),
              );
            },
            overwrite(e) {
              return this.check(rn(e));
            },
            optional() {
              return nL(this);
            },
            exactOptional() {
              var e;
              return (e = this), new nq({ type: "optional", innerType: e });
            },
            nullable() {
              return nU(this);
            },
            nullish() {
              return nL(nU(this));
            },
            nonoptional(e) {
              var t;
              return (
                (t = this),
                new nQ({ type: "nonoptional", innerType: t, ...T(e) })
              );
            },
            array() {
              return (function (e) {
                return new nz({ type: "array", element: e, ...T(void 0) });
              })(this);
            },
            or(e) {
              return new nT({
                type: "union",
                options: [this, e],
                ...T(void 0),
              });
            },
            and(e) {
              var t;
              return (
                (t = this), new nN({ type: "intersection", left: t, right: e })
              );
            },
            transform(e) {
              return nX(this, new nZ({ type: "transform", transform: e }));
            },
            default(e) {
              var t, r;
              return (
                (t = this),
                (r = e),
                new nV({
                  type: "default",
                  innerType: t,
                  get defaultValue() {
                    return "function" == typeof r ? r() : P(r);
                  },
                })
              );
            },
            prefault(e) {
              var t, r;
              return (
                (t = this),
                (r = e),
                new nJ({
                  type: "prefault",
                  innerType: t,
                  get defaultValue() {
                    return "function" == typeof r ? r() : P(r);
                  },
                })
              );
            },
            catch(e) {
              return (function (e, t) {
                let r;
                return new nH({
                  type: "catch",
                  innerType: e,
                  catchValue:
                    "function" == typeof t
                      ? t
                      : (((r = () => t)["~constantCatch"] = !0), r),
                });
              })(this, e);
            },
            pipe(e) {
              return nX(this, e);
            },
            readonly() {
              var e;
              return (e = this), new nG({ type: "readonly", innerType: e });
            },
            describe(e) {
              let t = this.clone();
              return t5.add(t, { description: e }), t;
            },
            meta(...e) {
              if (0 === e.length) return t5.get(this);
              let t = this.clone();
              return t5.add(t, e[0]), t;
            },
            isOptional() {
              return this.safeParse(void 0).success;
            },
            isNullable() {
              return this.safeParse(null).success;
            },
            apply(e, ...t) {
              return 0 === t.length ? e(this) : e(this, ...t);
            },
            get "~standard"() {
              return X(
                this,
                "~standard",
                {
                  ...e4(this),
                  jsonSchema: {
                    input: rg(this, "input"),
                    output: rg(this, "output"),
                  },
                },
                !1,
              );
            },
            set "~standard"(e) {
              X(this, "~standard", e);
            },
            parse: function e(t, r) {
              return rX(this, t, r, { callee: e });
            },
            parseAsync: async function e(t, r) {
              return await rG(this, t, r, { callee: e });
            },
            safeParse(e, t) {
              return r0(this, e, t);
            },
            async safeParseAsync(e, t) {
              return r1(this, e, t);
            },
            get spa() {
              return this?.safeParseAsync;
            },
            set spa(e) {
              X(this, "spa", e);
            },
            validate(e, t) {
              let r = this._zod.bag.validator;
              if (void 0 !== r) {
                if (r(e) !== rV) return !0;
                if (!0 === r.definite && void 0 === t) return !1;
              }
              return (function (e, t, r) {
                let n,
                  i = r
                    ? { ...r, async: !1, abortEarly: !0 }
                    : { async: !1, abortEarly: !0 },
                  u = e._zod.bag.fallbackRun;
                if (
                  (u
                    ? ((i[rJ] = !0), (n = u({ value: t, issues: [] }, i)))
                    : (n = e._zod.run({ value: t, issues: [] }, i)),
                  n instanceof Promise)
                )
                  throw new eu();
                return 0 === n.issues.length;
              })(this, e, t);
            },
            validateAsync(e, t) {
              return (async (e, t, r) => {
                let n = r
                    ? { ...r, async: !0, abortEarly: !0 }
                    : { async: !0, abortEarly: !0 },
                  i = e._zod.run({ value: t, issues: [] }, n);
                return (
                  i instanceof Promise && (i = await i), 0 === i.issues.length
                );
              })(this, e, t);
            },
            encode: function e(t, r) {
              return r2(this, t, r, { callee: e });
            },
            decode: function e(t, r) {
              return r3(this, t, r, { callee: e });
            },
            encodeAsync: async function e(t, r) {
              return await r4(this, t, r, { callee: e });
            },
            decodeAsync: async function e(t, r) {
              return await r7(this, t, r, { callee: e });
            },
            safeEncode(e, t) {
              return r9(this, e, t);
            },
            safeDecode(e, t) {
              return r8(this, e, t);
            },
            async safeEncodeAsync(e, t) {
              return r6(this, e, t);
            },
            async safeDecodeAsync(e, t) {
              return r5(this, e, t);
            },
            toJSONSchema(e) {
              return (
                (e, t = {}) =>
                (r) => {
                  let n = ru({ ...r, processors: t });
                  return ro(e, n), rl(n, e), rp(n, e);
                }
              )(
                this,
                {},
              )(e);
            },
            get description() {
              return t5.get(this)?.description;
            },
            get _def() {
              return this._zod.def;
            },
          },
        ),
        nr = ei(
          "_ZodString",
          (e, t) => {
            e7.init(e, t),
              nt.init(e, t),
              (e._zod.processJSONSchema = (t, r, n) =>
                ((e, t, r) => {
                  r.type = "string";
                  let {
                    minimum: n,
                    maximum: i,
                    format: u,
                    patterns: a,
                    contentEncoding: o,
                    laxFormat: s,
                  } = r_(e);
                  if (
                    ("number" == typeof n && (r.minLength = n),
                    "number" == typeof i && (r.maxLength = i),
                    u &&
                      ((r.format = rk[u] ?? u),
                      "" === r.format && delete r.format,
                      ("time" === u || s) && delete r.format),
                    o && (r.contentEncoding = o),
                    a && a.size > 0)
                  ) {
                    let e = [...a].map(rO);
                    1 === e.length
                      ? (r.pattern = e[0].source)
                      : e.length > 1 &&
                        (r.allOf = [
                          ...e.map((e) => ({
                            ...("draft-07" === t.target ||
                            "draft-04" === t.target ||
                            "openapi-3.0" === t.target
                              ? { type: "string" }
                              : {}),
                            pattern: e.source,
                          })),
                        ]);
                  }
                })(e, t, r));
          },
          (function (e, t) {
            for (let r in e) {
              let n = e[r];
              Object.defineProperty(t, r, {
                configurable: !0,
                enumerable: !0,
                get() {
                  return X(this, r, n(this));
                },
                set(e) {
                  X(this, r, e);
                },
              });
            }
            return t;
          })(
            {
              format: (e) => r_(e).format ?? null,
              minLength: (e) => r_(e).minimum ?? null,
              maxLength: (e) => r_(e).maximum ?? null,
            },
            {
              regex(...e) {
                return this.check(
                  (function (e, t) {
                    return new eV({
                      check: "string_format",
                      format: "regex",
                      ...T(t),
                      pattern: e,
                    });
                  })(...e),
                );
              },
              includes(...e) {
                return this.check(
                  (function (e, t) {
                    return new eH({
                      check: "string_format",
                      format: "includes",
                      ...T(t),
                      includes: e,
                    });
                  })(...e),
                );
              },
              startsWith(...e) {
                return this.check(
                  (function (e, t) {
                    return new eY({
                      check: "string_format",
                      format: "starts_with",
                      ...T(t),
                      prefix: e,
                    });
                  })(...e),
                );
              },
              endsWith(...e) {
                return this.check(
                  (function (e, t) {
                    return new eX({
                      check: "string_format",
                      format: "ends_with",
                      ...T(t),
                      suffix: e,
                    });
                  })(...e),
                );
              },
              min(...e) {
                return this.check(rt(...e));
              },
              max(...e) {
                return this.check(re(...e));
              },
              length(...e) {
                return this.check(rr(...e));
              },
              nonempty(...e) {
                return this.check(rt(1, ...e));
              },
              lowercase(e) {
                return this.check(
                  new eJ({
                    check: "string_format",
                    format: "lowercase",
                    ...T(e),
                  }),
                );
              },
              uppercase(e) {
                return this.check(
                  new eQ({
                    check: "string_format",
                    format: "uppercase",
                    ...T(e),
                  }),
                );
              },
              trim() {
                return this.check(rn((e) => e.trim()));
              },
              normalize(...e) {
                return this.check(
                  (function (e) {
                    return rn((t) => t.normalize(e));
                  })(...e),
                );
              },
              toLowerCase() {
                return this.check(rn((e) => e.toLowerCase()));
              },
              toUpperCase() {
                return this.check(rn((e) => e.toUpperCase()));
              },
              slugify() {
                return this.check(
                  rn((e) =>
                    e
                      .toLowerCase()
                      .trim()
                      .replace(/[^\w\s-]/g, "")
                      .replace(/[\s_-]+/g, "-")
                      .replace(/^-+|-+$/g, ""),
                  ),
                );
              },
            },
          ),
        ),
        nn = ei(
          "ZodString",
          (e, t) => {
            e7.init(e, t), nr.init(e, t);
          },
          {
            email(e) {
              return this.check(
                new nc({
                  type: "string",
                  format: "email",
                  check: "string_format",
                  abort: !1,
                  ...T(e),
                }),
              );
            },
            url(e) {
              return this.check(
                new nh({
                  type: "string",
                  format: "url",
                  check: "string_format",
                  abort: !1,
                  ...T(e),
                }),
              );
            },
            jwt(e) {
              return this.check(
                new nk({
                  type: "string",
                  format: "jwt",
                  check: "string_format",
                  abort: !1,
                  ...T(e),
                }),
              );
            },
            emoji(e) {
              return this.check(
                new np({
                  type: "string",
                  format: "emoji",
                  check: "string_format",
                  abort: !1,
                  ...T(e),
                }),
              );
            },
            guid(e) {
              return this.check(
                new nd({
                  type: "string",
                  format: "guid",
                  check: "string_format",
                  abort: !1,
                  ...T(e),
                }),
              );
            },
            uuid(e) {
              return this.check(
                new nf({
                  type: "string",
                  format: "uuid",
                  check: "string_format",
                  abort: !1,
                  ...T(e),
                }),
              );
            },
            uuidv4(e) {
              return this.check(
                new nf({
                  type: "string",
                  format: "uuid",
                  check: "string_format",
                  abort: !1,
                  version: "v4",
                  ...T(e),
                }),
              );
            },
            uuidv6(e) {
              return this.check(
                new nf({
                  type: "string",
                  format: "uuid",
                  check: "string_format",
                  abort: !1,
                  version: "v6",
                  ...T(e),
                }),
              );
            },
            uuidv7(e) {
              return this.check(
                new nf({
                  type: "string",
                  format: "uuid",
                  check: "string_format",
                  abort: !1,
                  version: "v7",
                  ...T(e),
                }),
              );
            },
            nanoid(e) {
              return this.check(
                new ng({
                  type: "string",
                  format: "nanoid",
                  check: "string_format",
                  abort: !1,
                  ...T(e),
                }),
              );
            },
            cuid(e) {
              return this.check(
                new nD({
                  type: "string",
                  format: "cuid",
                  check: "string_format",
                  abort: !1,
                  ...T(e),
                }),
              );
            },
            cuid2(e) {
              return this.check(
                new nv({
                  type: "string",
                  format: "cuid2",
                  check: "string_format",
                  abort: !1,
                  ...T(e),
                }),
              );
            },
            ulid(e) {
              return this.check(
                new nm({
                  type: "string",
                  format: "ulid",
                  check: "string_format",
                  abort: !1,
                  ...T(e),
                }),
              );
            },
            base64(e) {
              return this.check(
                new nb({
                  type: "string",
                  format: "base64",
                  check: "string_format",
                  abort: !1,
                  ...T(e),
                }),
              );
            },
            base64url(e) {
              return this.check(
                new nF({
                  type: "string",
                  format: "base64url",
                  check: "string_format",
                  abort: !1,
                  ...T(e),
                }),
              );
            },
            xid(e) {
              return this.check(
                new nC({
                  type: "string",
                  format: "xid",
                  check: "string_format",
                  abort: !1,
                  ...T(e),
                }),
              );
            },
            ksuid(e) {
              return this.check(
                new nB({
                  type: "string",
                  format: "ksuid",
                  check: "string_format",
                  abort: !1,
                  ...T(e),
                }),
              );
            },
            ipv4(e) {
              return this.check(
                new nE({
                  type: "string",
                  format: "ipv4",
                  check: "string_format",
                  abort: !1,
                  ...T(e),
                }),
              );
            },
            ipv6(e) {
              return this.check(
                new ny({
                  type: "string",
                  format: "ipv6",
                  check: "string_format",
                  abort: !1,
                  ...T(e),
                }),
              );
            },
            cidrv4(e) {
              return this.check(
                new nw({
                  type: "string",
                  format: "cidrv4",
                  check: "string_format",
                  abort: !1,
                  ...T(e),
                }),
              );
            },
            cidrv6(e) {
              return this.check(
                new nA({
                  type: "string",
                  format: "cidrv6",
                  check: "string_format",
                  abort: !1,
                  ...T(e),
                }),
              );
            },
            e164(e) {
              return this.check(
                new n_({
                  type: "string",
                  format: "e164",
                  check: "string_format",
                  abort: !1,
                  ...T(e),
                }),
              );
            },
            datetime(e) {
              return this.check(
                new na({
                  type: "string",
                  format: "datetime",
                  check: "string_format",
                  offset: !1,
                  local: !1,
                  precision: null,
                  ...T(e),
                }),
              );
            },
            date(e) {
              return this.check(
                new no({
                  type: "string",
                  format: "date",
                  check: "string_format",
                  ...T(e),
                }),
              );
            },
            time(e) {
              return this.check(
                new ns({
                  type: "string",
                  format: "time",
                  check: "string_format",
                  precision: null,
                  ...T(e),
                }),
              );
            },
            duration(e) {
              return this.check(
                new nl({
                  type: "string",
                  format: "duration",
                  check: "string_format",
                  ...T(e),
                }),
              );
            },
          },
        );
      function ni(e) {
        var t;
        return new nn(
          ((t = { type: "string", ...T(e) }).checks &&
            (t.checks = [...t.checks]),
          t),
        );
      }
      let nu = ei("ZodStringFormat", (e, t) => {
          e9.init(e, t), nr.init(e, t);
        }),
        na = ei("ZodISODateTime", (e, t) => {
          td.init(e, t), nu.init(e, t);
        }),
        no = ei("ZodISODate", (e, t) => {
          tf.init(e, t), nu.init(e, t);
        }),
        ns = ei("ZodISOTime", (e, t) => {
          th.init(e, t), nu.init(e, t);
        }),
        nl = ei("ZodISODuration", (e, t) => {
          tp.init(e, t), nu.init(e, t);
        }),
        nc = ei("ZodEmail", (e, t) => {
          e5.init(e, t), nu.init(e, t);
        }),
        nd = ei("ZodGUID", (e, t) => {
          e8.init(e, t), nu.init(e, t);
        }),
        nf = ei("ZodUUID", (e, t) => {
          e6.init(e, t), nu.init(e, t);
        }),
        nh = ei("ZodURL", (e, t) => {
          tn.init(e, t), nu.init(e, t);
        }),
        np = ei("ZodEmoji", (e, t) => {
          ti.init(e, t), nu.init(e, t);
        }),
        ng = ei("ZodNanoID", (e, t) => {
          tu.init(e, t), nu.init(e, t);
        }),
        nD = ei("ZodCUID", (e, t) => {
          ta.init(e, t), nu.init(e, t);
        }),
        nv = ei("ZodCUID2", (e, t) => {
          to.init(e, t), nu.init(e, t);
        }),
        nm = ei("ZodULID", (e, t) => {
          ts.init(e, t), nu.init(e, t);
        }),
        nC = ei("ZodXID", (e, t) => {
          tl.init(e, t), nu.init(e, t);
        }),
        nB = ei("ZodKSUID", (e, t) => {
          tc.init(e, t), nu.init(e, t);
        }),
        nE = ei("ZodIPv4", (e, t) => {
          tg.init(e, t), nu.init(e, t);
        }),
        ny = ei("ZodIPv6", (e, t) => {
          tm.init(e, t), nu.init(e, t);
        }),
        nw = ei("ZodCIDRv4", (e, t) => {
          tC.init(e, t), nu.init(e, t);
        }),
        nA = ei("ZodCIDRv6", (e, t) => {
          tB.init(e, t), nu.init(e, t);
        }),
        nb = ei("ZodBase64", (e, t) => {
          tw.init(e, t), nu.init(e, t);
        }),
        nF = ei("ZodBase64URL", (e, t) => {
          tb.init(e, t), nu.init(e, t);
        }),
        n_ = ei("ZodE164", (e, t) => {
          tF.init(e, t), nu.init(e, t);
        }),
        nk = ei("ZodJWT", (e, t) => {
          t_.init(e, t), nu.init(e, t);
        }),
        nx = ei("ZodUnknown", (e, t) => {
          tk.init(e, t),
            nt.init(e, t),
            (e._zod.processJSONSchema = (e, t, r) => void 0);
        });
      function nO() {
        return new nx({ type: "unknown" });
      }
      let nP = ei("ZodNever", (e, t) => {
          tx.init(e, t),
            nt.init(e, t),
            (e._zod.processJSONSchema = (e, t, r) => {
              t.not = {};
            });
        }),
        nz = ei(
          "ZodArray",
          (e, t) => {
            ne(),
              tz.init(e, t),
              nt.init(e, t),
              (e._zod.processJSONSchema = (t, r, n) =>
                ((e, t, r, n) => {
                  let i = e._zod.def,
                    { minimum: u, maximum: a } = r_(e);
                  "number" == typeof u && (r.minItems = u),
                    "number" == typeof a && (r.maxItems = a),
                    (r.type = "array"),
                    (r.items = ro(i.element, t, {
                      ...n,
                      path: [...n.path, "items"],
                    }));
                })(e, t, r, n)),
              (e.element = t.element);
          },
          {
            min(e, t) {
              return this.check(rt(e, t));
            },
            nonempty(e) {
              return this.check(rt(1, e));
            },
            max(e, t) {
              return this.check(re(e, t));
            },
            length(e, t) {
              return this.check(rr(e, t));
            },
            unwrap() {
              return this.element;
            },
          },
        ),
        nS = ei(
          "ZodObject",
          (e, t) => {
            var r;
            let n, i;
            ne(),
              tR.init(e, t),
              nt.init(e, t),
              (e._zod.processJSONSchema = (t, r, n) =>
                ((e, t, r, n) => {
                  let i = e._zod.def,
                    u = i.shape;
                  if (
                    Object.getOwnPropertySymbols(u).length &&
                    ra(
                      e,
                      t,
                      r,
                      n,
                      "Symbol keys cannot be represented in JSON Schema",
                    )
                  )
                    return;
                  for (let e in ((r.type = "object"), (r.properties = {}), u))
                    B(
                      r.properties,
                      e,
                      ro(u[e], t, { ...n, path: [...n.path, "properties", e] }),
                    );
                  let a = [];
                  for (let e of Object.keys(u)) {
                    let r = i.shape[e];
                    ("input" === t.io
                      ? void 0 === rP(r)
                      : void 0 === r._zod.optout) && a.push(e);
                  }
                  a.length > 0 && (r.required = a),
                    i.catchall?._zod.def.type === "never"
                      ? (r.additionalProperties = !1)
                      : i.catchall
                        ? i.catchall &&
                          (r.additionalProperties = ro(i.catchall, t, {
                            ...n,
                            path: [...n.path, "additionalProperties"],
                          }))
                        : "output" === t.io && (r.additionalProperties = !1);
                })(e, t, r, n)),
              (r = "shape"),
              (i = r in (n = Object.getPrototypeOf(e)) ? void 0 : n) &&
                Object.defineProperty(i, r, {
                  configurable: !0,
                  get() {
                    let e = {
                      configurable: !0,
                      writable: !0,
                      enumerable: !1,
                      value: void 0,
                    };
                    return (
                      Object.defineProperty(this, r, e),
                      (e.value = ((e) => e._zod.def.shape)(this)),
                      Object.defineProperty(this, r, e),
                      e.value
                    );
                  },
                  set(e) {
                    Object.defineProperty(this, r, {
                      configurable: !0,
                      writable: !0,
                      enumerable: !1,
                      value: e,
                    });
                  },
                });
          },
          {
            keyof() {
              return nI(Object.keys(this._zod.def.shape));
            },
            catchall(e) {
              return this.clone(F(this._zod.def, { catchall: e }));
            },
            passthrough() {
              return this.clone(F(this._zod.def, { catchall: nO() }));
            },
            loose() {
              return this.clone(F(this._zod.def, { catchall: nO() }));
            },
            strict() {
              return this.clone(
                F(this._zod.def, {
                  catchall: new nP({ type: "never", ...T(void 0) }),
                }),
              );
            },
            strip() {
              return this.clone(F(this._zod.def, { catchall: void 0 }));
            },
            extend(e) {
              if (!O(e))
                throw Error("Invalid input to extend: expected a plain object");
              let t = this._zod.def.checks;
              if (t && t.length > 0) {
                let t = y(this);
                for (let r of Reflect.ownKeys(e))
                  if (void 0 !== Object.getOwnPropertyDescriptor(t, r))
                    throw Error(
                      "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.",
                    );
              }
              return j(this, F(this._zod.def, { shape: I(this, e) }));
            },
            safeExtend(e) {
              if (!O(e))
                throw Error(
                  "Invalid input to safeExtend: expected a plain object",
                );
              return j(this, F(this._zod.def, { shape: I(this, e) }));
            },
            merge(e) {
              if (!e?._zod?.def)
                throw Error(
                  "Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.",
                );
              if (this._zod.def.checks?.length)
                throw Error(
                  ".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.",
                );
              let t = {};
              return (
                b(t, this, Reflect.ownKeys(y(this))),
                b(t, e, Reflect.ownKeys(y(e))),
                j(
                  this,
                  F(this._zod.def, {
                    shape: t,
                    get catchall() {
                      return e._zod.def.catchall;
                    },
                    checks: e._zod.def.checks ?? [],
                  }),
                )
              );
            },
            pick(e) {
              return (function (e, t) {
                let r = e._zod.def,
                  n = r.checks;
                if (n && n.length > 0)
                  throw Error(
                    ".pick() cannot be used on object schemas containing refinements",
                  );
                let i = {};
                return b(i, e, M(e, t)), j(e, F(r, { shape: i, checks: [] }));
              })(this, e);
            },
            omit(e) {
              return (function (e, t) {
                let r = e._zod.def,
                  n = r.checks;
                if (n && n.length > 0)
                  throw Error(
                    ".omit() cannot be used on object schemas containing refinements",
                  );
                let i = new Set(M(e, t)),
                  u = {};
                return (
                  b(
                    u,
                    e,
                    Reflect.ownKeys(y(e)).filter((e) => !i.has(e)),
                  ),
                  j(e, F(r, { shape: u, checks: [] }))
                );
              })(this, e);
            },
            partial(...e) {
              return Z(nK, this, e[0]);
            },
            exactPartial(...e) {
              return Z(nq, this, e[0], "exactPartial");
            },
            required(...e) {
              var t;
              let r, n;
              return (
                (r = (t = e[0]) ? new Set(M(this, t)) : void 0),
                b((n = {}), this, Reflect.ownKeys(y(this)), (e, t) =>
                  r && !r.has(t)
                    ? e
                    : new nQ({ type: "nonoptional", innerType: e }),
                ),
                j(this, F(this._zod.def, { shape: n }))
              );
            },
          },
        );
      function nj(e, t) {
        return new nS({ type: "object", shape: e ?? {}, ...T(t) });
      }
      let nT = ei("ZodUnion", (e, t) => {
          tI.init(e, t),
            nt.init(e, t),
            (e._zod.processJSONSchema = (t, r, n) => {
              let i, u, a;
              return (
                (u = !1 === (i = e._zod.def).inclusive),
                (a = i.options.map((e, r) =>
                  ro(e, t, {
                    ...n,
                    path: [...n.path, u ? "oneOf" : "anyOf", r],
                  }),
                )),
                void (u ? (r.oneOf = a) : (r.anyOf = a))
              );
            }),
            (e.options = t.options);
        }),
        nN = ei("ZodIntersection", (e, t) => {
          tZ.init(e, t),
            nt.init(e, t),
            (e._zod.processJSONSchema = (t, r, n) => {
              let i, u, a, o, s;
              return (
                (u = ro((i = e._zod.def).left, t, {
                  ...n,
                  path: [...n.path, "allOf", 0],
                })),
                (a = ro(i.right, t, { ...n, path: [...n.path, "allOf", 1] })),
                void ((r.allOf = s =
                  [
                    ...((o = (e) =>
                      "allOf" in e && 1 === Object.keys(e).length)(u)
                      ? u.allOf
                      : [u]),
                    ...(o(a) ? a.allOf : [a]),
                  ]),
                t.intersections.push(s))
              );
            });
        }),
        n$ = ei("ZodRecord", (e, t) => {
          ne(),
            tL.init(e, t),
            nt.init(e, t),
            (e._zod.processJSONSchema = (t, r, n) =>
              ((e, t, r, n) => {
                let i = e._zod.def;
                r.type = "object";
                let u = i.keyType,
                  a = r_(u).patterns;
                if ("loose" === i.mode && a && a.size > 0) {
                  let e = ro(i.valueType, t, {
                    ...n,
                    path: [...n.path, "patternProperties", "*"],
                  });
                  for (let t of ((r.patternProperties = {}), a))
                    B(r.patternProperties, rO(t).source, e);
                } else {
                  if ("draft-07" === t.target || "draft-2020-12" === t.target) {
                    r.propertyNames = ro(i.keyType, t, {
                      ...n,
                      path: [...n.path, "propertyNames"],
                    });
                    let u = rz.get(t);
                    u ||
                      ((u = []),
                      rz.set(t, u),
                      t.deferred.push(() =>
                        (function (e) {
                          let t = new Map();
                          for (let r of e.seen.values())
                            r.def && !t.has(r.schema) && t.set(r.schema, r);
                          let r = new Map();
                          for (let n of rz.get(e) ?? []) {
                            let i = e.seen.get(n),
                              u = (i?.def ?? i?.schema)?.propertyNames;
                            if (!u || !0 === u || r.has(u)) continue;
                            let a = (function e(t, r, n) {
                              if (r.$ref) {
                                if (n.has(r)) return r;
                                n.add(r);
                                let i = t.get(r)?.def;
                                if (!i) return r;
                                let u = e(t, i, n);
                                return u === i ? r : u;
                              }
                              for (let i of ["anyOf", "oneOf"]) {
                                let u = r[i];
                                if (!Array.isArray(u)) continue;
                                let a = u.map((r) => e(t, r, n));
                                a.some((e, t) => e !== u[t]) &&
                                  (r = { ...r, [i]: a });
                              }
                              let i = Array.isArray(r.type) ? r.type : [r.type],
                                u =
                                  !i.includes("string") &&
                                  i.some(
                                    (e) => "number" === e || "integer" === e,
                                  ),
                                a =
                                  r.enum ??
                                  (void 0 !== r.const ? [r.const] : void 0);
                              if (!u && !a?.some((e) => "number" == typeof e))
                                return r;
                              let {
                                minimum: o,
                                maximum: s,
                                exclusiveMinimum: l,
                                exclusiveMaximum: c,
                                multipleOf: d,
                                format: f,
                                id: h,
                                ...p
                              } = r;
                              return (
                                p.enum
                                  ? (p.enum = p.enum.map((e) =>
                                      "number" == typeof e ? String(e) : e,
                                    ))
                                  : "number" == typeof p.const &&
                                    (p.const = String(p.const)),
                                u &&
                                  ((p.type = "string"),
                                  a ||
                                    (p.pattern = (
                                      i.includes("number") ? eR : e$
                                    ).source)),
                                p
                              );
                            })(t, u, new Set());
                            a !== u && r.set(u, a);
                          }
                          if (r.size)
                            for (let t of e.seen.values())
                              for (let e of [t.schema, t.def]) {
                                let t = e && r.get(e.propertyNames);
                                t && (e.propertyNames = t);
                              }
                        })(t),
                      )),
                      u.push(e);
                  }
                  r.additionalProperties = ro(i.valueType, t, {
                    ...n,
                    path: [...n.path, "additionalProperties"],
                  });
                }
                let o = u._zod.values,
                  s = "input" === t.io && void 0 !== rP(i.valueType);
                if (o && !i.partial && !s) {
                  let e = [...o].filter(
                    (e) => "string" == typeof e || "number" == typeof e,
                  );
                  e.length > 0 && (r.required = e.map(String));
                }
              })(e, t, r, n)),
            (e.keyType = t.keyType),
            (e.valueType = t.valueType);
        });
      function nR(e, t, r) {
        return new n$({
          type: "record",
          keyType: e,
          valueType: t,
          ...T(r),
          partial: !0,
        });
      }
      let nM = ei("ZodEnum", (e, t) => {
        tq.init(e, t),
          nt.init(e, t),
          (e._zod.processJSONSchema = (t, r, n) =>
            ((e, t) => {
              let r = g(e._zod.def.entries);
              if (0 === r.length) {
                t.not = {};
                return;
              }
              r.every((e) => "number" == typeof e) && (t.type = "number"),
                r.every((e) => "string" == typeof e) && (t.type = "string"),
                (t.enum = r);
            })(e, r)),
          (e.enum = t.entries),
          (e.options = [...e._zod.values]);
        let r = new Set(Object.keys(t.entries));
        (e.extract = (e, n) => {
          let i = {};
          for (let n of e)
            if (r.has(n)) i[n] = t.entries[n];
            else throw Error(`Key ${n} not found in enum`);
          return new nM({ ...t, checks: [], ...T(n), entries: i });
        }),
          (e.exclude = (e, n) => {
            let i = { ...t.entries };
            for (let t of e)
              if (r.has(t)) delete i[t];
              else throw Error(`Key ${t} not found in enum`);
            return new nM({ ...t, checks: [], ...T(n), entries: i });
          });
      });
      function nI(e, t) {
        return new nM({
          type: "enum",
          entries: Array.isArray(e)
            ? Object.fromEntries(e.map((e) => [e, e]))
            : e,
          ...T(t),
        });
      }
      let nZ = ei("ZodTransform", (e, t) => {
          ne(),
            tW.init(e, t),
            nt.init(e, t),
            (e._zod.processJSONSchema = (t, r, n) => {
              ra(e, t, r, n, "Transforms cannot be represented in JSON Schema");
            }),
            (e._zod.parse = (r, n) => {
              if ("backward" === n.direction) throw new ea(e.constructor.name);
              r.addIssue = (n) => {
                "string" == typeof n
                  ? r.issues.push(Y(n, r.value, t))
                  : (n.fatal && (n.continue = !1),
                    n.code ?? (n.code = "custom"),
                    "input" in n || (n.input = r.value),
                    n.inst ?? (n.inst = e),
                    r.issues.push(Y(n)));
              };
              let i = t.transform(r.value, r);
              return i instanceof Promise
                ? i.then((e) => ((r.value = e), r))
                : ((r.value = i), r);
            });
        }),
        nK = ei("ZodOptional", (e, t) => {
          tV.init(e, t),
            nt.init(e, t),
            (e._zod.processJSONSchema = (t, r, n) => rT(e, t, r, n)),
            (e.unwrap = () => e._zod.def.innerType);
        });
      function nL(e) {
        return new nK({ type: "optional", innerType: e });
      }
      let nq = ei("ZodExactOptional", (e, t) => {
          tJ.init(e, t),
            nt.init(e, t),
            (e._zod.processJSONSchema = (t, r, n) => rT(e, t, r, n)),
            (e.unwrap = () => e._zod.def.innerType);
        }),
        nW = ei("ZodNullable", (e, t) => {
          tQ.init(e, t),
            nt.init(e, t),
            (e._zod.processJSONSchema = (t, r, n) => {
              let i, u, a;
              return (
                (u = ro((i = e._zod.def).innerType, t, n)),
                (a = t.seen.get(e)),
                void ("openapi-3.0" === t.target
                  ? ((a.ref = i.innerType), (r.nullable = !0))
                  : (r.anyOf = [u, { type: "null" }]))
              );
            }),
            (e.unwrap = () => e._zod.def.innerType);
        });
      function nU(e) {
        return new nW({ type: "nullable", innerType: e });
      }
      let nV = ei("ZodDefault", (e, t) => {
          tH.init(e, t),
            nt.init(e, t),
            (e._zod.processJSONSchema = (t, r, n) => {
              let i, u;
              return (
                ro((i = e._zod.def).innerType, t, n),
                (t.seen.get(e).ref = i.innerType),
                void (
                  (u = rj(i.defaultValue, e, t, r, n)) !== rS && (r.default = u)
                )
              );
            }),
            (e.unwrap = () => e._zod.def.innerType),
            (e.removeDefault = e.unwrap);
        }),
        nJ = ei("ZodPrefault", (e, t) => {
          tX.init(e, t),
            nt.init(e, t),
            (e._zod.processJSONSchema = (t, r, n) =>
              ((e, t, r, n) => {
                let i = e._zod.def;
                if (
                  (ro(i.innerType, t, n),
                  (t.seen.get(e).ref = i.innerType),
                  "input" !== t.io)
                )
                  return;
                let u = rj(i.defaultValue, e, t, r, n);
                u !== rS && (r._prefault = u);
              })(e, t, r, n)),
            (e.unwrap = () => e._zod.def.innerType);
        }),
        nQ = ei("ZodNonOptional", (e, t) => {
          tG.init(e, t),
            nt.init(e, t),
            (e._zod.processJSONSchema = (t, r, n) => {
              let i;
              ro((i = e._zod.def).innerType, t, n),
                (t.seen.get(e).ref = i.innerType);
            }),
            (e.unwrap = () => e._zod.def.innerType);
        }),
        nH = ei("ZodCatch", (e, t) => {
          t2.init(e, t),
            nt.init(e, t),
            (e._zod.processJSONSchema = (t, r, n) =>
              ((e, t, r, n) => {
                let i,
                  u = e._zod.def;
                ro(u.innerType, t, n), (t.seen.get(e).ref = u.innerType);
                try {
                  i = u.catchValue(void 0);
                } catch {
                  ra(
                    e,
                    t,
                    r,
                    n,
                    "Dynamic catch values are not supported in JSON Schema",
                  );
                  return;
                }
                r.default = i;
              })(e, t, r, n)),
            (e.unwrap = () => e._zod.def.innerType),
            (e.removeCatch = e.unwrap);
        }),
        nY = ei("ZodPipe", (e, t) => {
          t3.init(e, t),
            nt.init(e, t),
            (e._zod.processJSONSchema = (t, r, n) => {
              let i, u, a;
              return (
                (u = (i = e._zod.def).in._zod.traits.has("$ZodTransform")),
                void (ro(
                  (a = "input" === t.io ? (u ? i.out : i.in) : i.out),
                  t,
                  n,
                ),
                (t.seen.get(e).ref = a))
              );
            }),
            (e.in = t.in),
            (e.out = t.out);
        });
      function nX(e, t) {
        return new nY({ type: "pipe", in: e, out: t });
      }
      let nG = ei("ZodReadonly", (e, t) => {
          t7.init(e, t),
            nt.init(e, t),
            (e._zod.processJSONSchema = (t, r, n) => {
              let i;
              ro((i = e._zod.def).innerType, t, n),
                (t.seen.get(e).ref = i.innerType),
                (r.readOnly = !0);
            }),
            (e.unwrap = () => e._zod.def.innerType);
        }),
        n0 = ei("ZodCustom", (e, t) => {
          t8.init(e, t),
            nt.init(e, t),
            (e._zod.processJSONSchema = (t, r, n) => {
              ra(
                e,
                t,
                r,
                n,
                "Custom types cannot be represented in JSON Schema",
              );
            });
        });
    },
  },
]);
//# sourceMappingURL=187398.e745b22c0e2a3ce3.js.map
