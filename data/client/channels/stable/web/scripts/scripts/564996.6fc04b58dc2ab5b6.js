(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  [564996],
  {
    588234(e) {
      e.exports = function (e) {
        for (
          var t = -1, r = null == e ? 0 : e.length, u = 0, n = [];
          ++t < r;

        ) {
          var a = e[t];
          a && (n[u++] = a);
        }
        return n;
      };
    },
    235599(e, t, r) {
      "use strict";
      var u = r(877413),
        n = r.n(u),
        a = r(649852),
        o = r.n(a),
        i = r(64015),
        s = r.n(i),
        l = r(582128),
        c = r(79962),
        D = r(719442),
        d = r(41875),
        f = r(294106),
        C = r(333007);
      function h(e, t, r) {
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
      function B(e, t) {
        if (null == e) return {};
        var r,
          u,
          n = (function (e, t) {
            if (null == e) return {};
            var r,
              u,
              n = {},
              a = Object.keys(e);
            for (u = 0; u < a.length; u++)
              (r = a[u]), t.indexOf(r) >= 0 || (n[r] = e[r]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (u = 0; u < a.length; u++)
            (r = a[u]),
              !(t.indexOf(r) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(e, r) &&
                (n[r] = e[r]);
        }
        return n;
      }
      var v = 0;
      class p {
        constructor() {
          this.id = "".concat(v++);
        }
      }
      var g = new WeakMap(),
        E = new WeakMap(),
        A = new WeakMap(),
        F = new WeakMap(),
        m = new WeakMap(),
        w = new WeakMap(),
        b = new WeakMap(),
        y = new WeakMap(),
        x = new WeakMap(),
        O = new WeakMap(),
        k = new WeakMap(),
        P = new WeakMap(),
        S = new WeakMap(),
        T = new WeakMap(),
        j = new WeakMap(),
        N = new WeakMap(),
        R = new WeakMap(),
        M = new WeakMap(),
        K = new WeakMap(),
        L = new WeakMap(),
        _ = new WeakMap(),
        W = Symbol("placeholder"),
        q = Symbol("mark-placeholder"),
        I = globalThis.Text,
        Q = (e) =>
          (e && e.ownerDocument && e.ownerDocument.defaultView) || null,
        V = (e) => H(e) && 8 === e.nodeType,
        z = (e) => H(e) && 1 === e.nodeType,
        H = (e) => {
          var t = Q(e);
          return !!t && e instanceof t.Node;
        },
        U = (e) => {
          var t = e && e.anchorNode && Q(e.anchorNode);
          return !!t && e instanceof t.Selection;
        },
        $ = (e) => H(e) && 3 === e.nodeType,
        Y = (e, t, r) => {
          for (
            var { childNodes: u } = e, n = u[t], a = t, o = !1, i = !1;
            (V(n) ||
              (z(n) && 0 === n.childNodes.length) ||
              (z(n) && "false" === n.getAttribute("contenteditable"))) &&
            (!o || !i);

          ) {
            if (a >= u.length) {
              (o = !0), (a = t - 1), (r = "backward");
              continue;
            }
            if (a < 0) {
              (i = !0), (a = t + 1), (r = "forward");
              continue;
            }
            (n = u[a]), (t = a), (a += "forward" === r ? 1 : -1);
          }
          return [n, t];
        },
        J = (e, t, r) => {
          var [u] = Y(e, t, r);
          return u;
        },
        Z = (e) => {
          var t = "";
          if ($(e) && e.nodeValue) return e.nodeValue;
          if (z(e)) {
            for (var r of Array.from(e.childNodes)) t += Z(r);
            var u = getComputedStyle(e).getPropertyValue("display");
            ("block" === u || "list" === u || "BR" === e.tagName) &&
              (t += "\n");
          }
          return t;
        },
        X = /data-slate-fragment="(.+?)"/m,
        G = (e, t, r) => {
          var { target: u } = t;
          if (z(u) && u.matches('[contentEditable="false"]')) return !1;
          var { document: n } = eh.getWindow(e);
          if (n.contains(u)) return eh.hasDOMNode(e, u, { editable: !0 });
          var a = r.find((e) => {
            var { addedNodes: t, removedNodes: r } = e;
            for (var n of t) if (n === u || n.contains(u)) return !0;
            for (var a of r) if (a === u || a.contains(u)) return !0;
          });
          return !!a && a !== t && G(e, a, r);
        },
        ee = parseInt(l.version.split(".")[0], 10) >= 17,
        et =
          "u" > typeof navigator &&
          "u" > typeof window &&
          /iPad|iPhone|iPod/.test(navigator.userAgent) &&
          !window.MSStream,
        er = "u" > typeof navigator && /Mac OS X/.test(navigator.userAgent),
        eu = "u" > typeof navigator && /Android/.test(navigator.userAgent),
        en =
          "u" > typeof navigator &&
          /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
        ea =
          "u" > typeof navigator &&
          /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
        eo =
          "u" > typeof navigator &&
          /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
        ei = "u" > typeof navigator && /Chrome/i.test(navigator.userAgent),
        es =
          "u" > typeof navigator &&
          /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent),
        el =
          eu &&
          "u" > typeof navigator &&
          /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent),
        ec =
          "u" > typeof navigator &&
          /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(
            navigator.userAgent,
          ),
        eD = "u" > typeof navigator && /.*UCBrowser/.test(navigator.userAgent),
        ed = "u" > typeof navigator && /.*Wechat/.test(navigator.userAgent),
        ef =
          "u" > typeof window &&
          void 0 !== window.document &&
          void 0 !== window.document.createElement,
        eC =
          (!es || !el) &&
          !eo &&
          "u" > typeof globalThis &&
          globalThis.InputEvent &&
          "function" == typeof globalThis.InputEvent.prototype.getTargetRanges,
        eh = {
          isComposing: (e) => !!P.get(e),
          getWindow(e) {
            var t = A.get(e);
            if (!t)
              throw Error(
                "Unable to find a host window element for this editor",
              );
            return t;
          },
          findKey(e, t) {
            var r = y.get(t);
            return r || ((r = new p()), y.set(t, r)), r;
          },
          findPath(e, t) {
            for (var r = [], u = t; ; ) {
              var n = E.get(u);
              if (null == n)
                if (D.KE.isEditor(u)) return r;
                else break;
              var a = g.get(u);
              if (null == a) break;
              r.unshift(a), (u = n);
            }
            throw Error(
              "Unable to find the path for Slate node: ".concat(
                D.h6.stringify(t),
              ),
            );
          },
          findDocumentOrShadowRoot(e) {
            var t = eh.toDOMNode(e, e),
              r = t.getRootNode();
            return (r instanceof Document || r instanceof ShadowRoot) &&
              null != r.getSelection
              ? r
              : t.ownerDocument;
          },
          isFocused: (e) => !!k.get(e),
          isReadOnly: (e) => !!O.get(e),
          blur(e) {
            var t = eh.toDOMNode(e, e),
              r = eh.findDocumentOrShadowRoot(e);
            k.set(e, !1), r.activeElement === t && t.blur();
          },
          focus(e) {
            var t = eh.toDOMNode(e, e),
              r = eh.findDocumentOrShadowRoot(e);
            k.set(e, !0),
              r.activeElement !== t && t.focus({ preventScroll: !0 });
          },
          deselect(e) {
            var { selection: t } = e,
              r = eh.findDocumentOrShadowRoot(e).getSelection();
            r && r.rangeCount > 0 && r.removeAllRanges(), t && D.gB.deselect(e);
          },
          hasDOMNode(e, t) {
            var r,
              u =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { editable: n = !1 } = u,
              a = eh.toDOMNode(e, e);
            try {
              r = z(t) ? t : t.parentElement;
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
              r.closest("[data-slate-editor]") === a &&
              (!n ||
                !!r.isContentEditable ||
                ("boolean" == typeof r.isContentEditable &&
                  r.closest('[contenteditable="false"]') === a) ||
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
            var r = x.get(e),
              u = D.KE.isEditor(t)
                ? F.get(e)
                : null == r
                  ? void 0
                  : r.get(eh.findKey(e, t));
            if (!u)
              throw Error(
                "Cannot resolve a DOM node from Slate node: ".concat(
                  D.h6.stringify(t),
                ),
              );
            return u;
          },
          toDOMPoint(e, t) {
            var [r] = D.KE.node(e, t.path),
              u = eh.toDOMNode(e, r);
            D.KE.void(e, { at: t }) && (t = { path: t.path, offset: 0 });
            for (
              var n = Array.from(
                  u.querySelectorAll(
                    "[data-slate-string], [data-slate-zero-width]",
                  ),
                ),
                a = 0,
                o = 0;
              o < n.length;
              o++
            ) {
              var i = n[o],
                s = i.childNodes[0];
              if (null != s && null != s.textContent) {
                var { length: l } = s.textContent,
                  c = i.getAttribute("data-slate-length"),
                  d = a + (null == c ? l : parseInt(c, 10)),
                  f = n[o + 1];
                if (
                  t.offset === d &&
                  null != f &&
                  f.hasAttribute("data-slate-mark-placeholder")
                ) {
                  var C,
                    h,
                    B = f.childNodes[0];
                  C = [
                    B instanceof I ? B : f,
                    null != (h = f.textContent) && h.startsWith("\uFEFF")
                      ? 1
                      : 0,
                  ];
                  break;
                }
                if (t.offset <= d) {
                  C = [s, Math.min(l, Math.max(0, t.offset - a))];
                  break;
                }
                a = d;
              }
            }
            if (!C)
              throw Error(
                "Cannot resolve a DOM point from Slate point: ".concat(
                  D.h6.stringify(t),
                ),
              );
            return C;
          },
          toDOMRange(e, t) {
            var { anchor: r, focus: u } = t,
              n = D.Q6.isBackward(t),
              a = eh.toDOMPoint(e, r),
              o = D.Q6.isCollapsed(t) ? a : eh.toDOMPoint(e, u),
              i = eh.getWindow(e).document.createRange(),
              [s, l] = n ? o : a,
              [c, d] = n ? a : o,
              f = !!(z(s) ? s : s.parentElement).getAttribute(
                "data-slate-zero-width",
              ),
              C = !!(z(c) ? c : c.parentElement).getAttribute(
                "data-slate-zero-width",
              );
            return i.setStart(s, f ? 1 : l), i.setEnd(c, C ? 1 : d), i;
          },
          toSlateNode(e, t) {
            var r = z(t) ? t : t.parentElement;
            r &&
              !r.hasAttribute("data-slate-node") &&
              (r = r.closest("[data-slate-node]"));
            var u = r ? w.get(r) : null;
            if (!u)
              throw Error(
                "Cannot resolve a Slate node from DOM node: ".concat(r),
              );
            return u;
          },
          findEventRange(e, t) {
            "nativeEvent" in t && (t = t.nativeEvent);
            var r,
              { clientX: u, clientY: n, target: a } = t;
            if (null == u || null == n)
              throw Error(
                "Cannot resolve a Slate range from a DOM event: ".concat(t),
              );
            var o = eh.toSlateNode(e, t.target),
              i = eh.findPath(e, o);
            if (D.Hg.isElement(o) && D.KE.isVoid(e, o)) {
              var s = a.getBoundingClientRect(),
                l = e.isInline(o)
                  ? u - s.left < s.left + s.width - u
                  : n - s.top < s.top + s.height - n,
                c = D.KE.point(e, i, { edge: l ? "start" : "end" }),
                d = l ? D.KE.before(e, c) : D.KE.after(e, c);
              if (d) return D.KE.range(e, d);
            }
            var { document: f } = eh.getWindow(e);
            if (f.caretRangeFromPoint) r = f.caretRangeFromPoint(u, n);
            else {
              var C = f.caretPositionFromPoint(u, n);
              C &&
                ((r = f.createRange()).setStart(C.offsetNode, C.offset),
                r.setEnd(C.offsetNode, C.offset));
            }
            if (!r)
              throw Error(
                "Cannot resolve a Slate range from a DOM event: ".concat(t),
              );
            return eh.toSlateRange(e, r, { exactMatch: !1, suppressThrow: !1 });
          },
          toSlatePoint(e, t, r) {
            var { exactMatch: u, suppressThrow: n } = r,
              [a, o] = u
                ? t
                : ((e) => {
                    var [t, r] = e;
                    if (z(t) && t.childNodes.length) {
                      var u = r === t.childNodes.length,
                        n = u ? r - 1 : r;
                      for (
                        [t, n] = Y(t, n, u ? "backward" : "forward"), u = n < r;
                        z(t) && t.childNodes.length;

                      ) {
                        var a = u ? t.childNodes.length - 1 : 0;
                        t = J(t, a, u ? "backward" : "forward");
                      }
                      r = u && null != t.textContent ? t.textContent.length : 0;
                    }
                    return [t, r];
                  })(t),
              i = a.parentNode,
              s = null,
              l = 0;
            if (i) {
              var c,
                d,
                f = eh.toDOMNode(e, e),
                C = i.closest('[data-slate-void="true"]'),
                h = C && f.contains(C) ? C : null,
                B = i.closest("[data-slate-leaf]"),
                v = null;
              if (B) {
                if ((s = B.closest('[data-slate-node="text"]'))) {
                  var p = eh.getWindow(e).document.createRange();
                  p.setStart(s, 0), p.setEnd(a, o);
                  var g = p.cloneContents();
                  [
                    ...Array.prototype.slice.call(
                      g.querySelectorAll("[data-slate-zero-width]"),
                    ),
                    ...Array.prototype.slice.call(
                      g.querySelectorAll("[contenteditable=false]"),
                    ),
                  ].forEach((e) => {
                    if (
                      eu &&
                      !u &&
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
                    (l = g.textContent.length),
                    (v = s);
                }
              } else if (h) {
                for (
                  var E = h.querySelectorAll("[data-slate-leaf]"), A = 0;
                  A < E.length;
                  A++
                ) {
                  var F = E[A];
                  if (eh.hasDOMNode(e, F)) {
                    B = F;
                    break;
                  }
                }
                B
                  ? ((s = B.closest('[data-slate-node="text"]')),
                    (l = (v = B).textContent.length),
                    v
                      .querySelectorAll("[data-slate-zero-width]")
                      .forEach((e) => {
                        l -= e.textContent.length;
                      }))
                  : (l = 1);
              }
              v &&
                l === v.textContent.length &&
                eu &&
                "z" === v.getAttribute("data-slate-zero-width") &&
                null != (c = v.textContent) &&
                c.startsWith("\uFEFF") &&
                (i.hasAttribute("data-slate-zero-width") ||
                  (en && null != (d = v.textContent) && d.endsWith("\n\n"))) &&
                l--;
            }
            if (eu && !s && !u) {
              var m = i.hasAttribute("data-slate-node")
                ? i
                : i.closest("[data-slate-node]");
              if (m && eh.hasDOMNode(e, m, { editable: !0 })) {
                var w = eh.toSlateNode(e, m),
                  { path: b, offset: y } = D.KE.start(e, eh.findPath(e, w));
                return (
                  m.querySelector("[data-slate-leaf]") || (y = o),
                  { path: b, offset: y }
                );
              }
            }
            if (!s) {
              if (n) return null;
              throw Error(
                "Cannot resolve a Slate point from DOM point: ".concat(t),
              );
            }
            var x = eh.toSlateNode(e, s);
            return { path: eh.findPath(e, x), offset: l };
          },
          toSlateRange(e, t, r) {
            var u,
              n,
              a,
              o,
              i,
              s,
              { exactMatch: l, suppressThrow: c } = r;
            if (
              ((U(t) ? t.anchorNode : t.startContainer) &&
                (U(t)
                  ? ((u = t.anchorNode),
                    (n = t.anchorOffset),
                    (a = t.focusNode),
                    (o = t.focusOffset),
                    (i =
                      ei &&
                      ((e) => {
                        for (var t = e && e.parentNode; t; ) {
                          if ("[object ShadowRoot]" === t.toString()) return !0;
                          t = t.parentNode;
                        }
                        return !1;
                      })(u)
                        ? t.anchorNode === t.focusNode &&
                          t.anchorOffset === t.focusOffset
                        : t.isCollapsed))
                  : ((u = t.startContainer),
                    (n = t.startOffset),
                    (a = t.endContainer),
                    (o = t.endOffset),
                    (i = t.collapsed))),
              null == u || null == a || null == n || null == o)
            )
              throw Error(
                "Cannot resolve a Slate range from DOM range: ".concat(t),
              );
            "getAttribute" in a &&
              "false" === a.getAttribute("contenteditable") &&
              ((a = u),
              (o = (null == (s = u.textContent) ? void 0 : s.length) || 0));
            var d = eh.toSlatePoint(e, [u, n], {
              exactMatch: l,
              suppressThrow: c,
            });
            if (!d) return null;
            var f = i
              ? d
              : eh.toSlatePoint(e, [a, o], { exactMatch: l, suppressThrow: c });
            if (!f) return null;
            if (en && !i && u !== a) {
              var C = D.KE.isEnd(e, d, d.path),
                h = D.KE.isStart(e, f, f.path);
              C && (d = D.KE.after(e, d) || d),
                h && (f = D.KE.before(e, f) || f);
            }
            var B = { anchor: d, focus: f };
            return (
              D.Q6.isExpanded(B) &&
                D.Q6.isForward(B) &&
                z(a) &&
                D.KE.void(e, { at: B.focus, mode: "highest" }) &&
                (B = D.KE.unhangRange(e, B, { voids: !0 })),
              B
            );
          },
          hasRange(e, t) {
            var { anchor: r, focus: u } = t;
            return D.KE.hasPath(e, r.path) && D.KE.hasPath(e, u.path);
          },
          hasTarget: (e, t) => H(t) && eh.hasDOMNode(e, t),
          hasEditableTarget: (e, t) =>
            H(t) && eh.hasDOMNode(e, t, { editable: !0 }),
          hasSelectableTarget: (e, t) =>
            eh.hasEditableTarget(e, t) ||
            eh.isTargetInsideNonReadonlyVoid(e, t),
          isTargetInsideNonReadonlyVoid(e, t) {
            if (O.get(e)) return !1;
            var r = eh.hasTarget(e, t) && eh.toSlateNode(e, t);
            return D.Hg.isElement(r) && D.KE.isVoid(e, r);
          },
          androidScheduleFlush(e) {
            var t;
            null == (t = j.get(e)) || t();
          },
          androidPendingDiffs: (e) => M.get(e),
        },
        eB = ["anchor", "focus"],
        ev = ["anchor", "focus"],
        ep = (e, t) => {
          var r = B(e, eB),
            u = B(t, ev);
          return (
            e[W] === t[W] &&
            Object.keys(r).length === Object.keys(u).length &&
            Object.keys(r).every((e) => u.hasOwnProperty(e) && r[e] === u[e])
          );
        },
        eg = ef ? l.useLayoutEffect : l.useEffect,
        eE = (e) => {
          var { isLast: t, leaf: r, parent: u, text: n } = e,
            a = eb(),
            o = eh.findPath(a, n),
            i = D.wA.parent(o),
            s = !0 === r[q];
          return a.isVoid(u)
            ? l.createElement(em, { length: D.bP.string(u).length })
            : "" !== r.text ||
                u.children[u.children.length - 1] !== n ||
                a.isInline(u) ||
                "" !== D.KE.string(a, i)
              ? "" === r.text
                ? l.createElement(em, { isMarkPlaceholder: s })
                : t && "\n" === r.text.slice(-1)
                  ? l.createElement(eA, { isTrailing: !0, text: r.text })
                  : l.createElement(eA, { text: r.text })
              : l.createElement(em, { isLineBreak: !0, isMarkPlaceholder: s });
        },
        eA = (e) => {
          var { text: t, isTrailing: r = !1 } = e,
            u = (0, l.useRef)(null),
            n = () => "".concat(null != t ? t : "").concat(r ? "\n" : ""),
            [a] = (0, l.useState)(n);
          return (
            eg(() => {
              var e = n();
              if (u.current && u.current.textContent !== e) {
                var t = u.current.firstChild;
                if (
                  t &&
                  t === u.current.lastChild &&
                  3 === t.nodeType &&
                  (t.data.startsWith(e) || e.startsWith(t.data))
                ) {
                  var r = Math.min(t.length, e.length);
                  t.replaceData(r, t.length - r, e.slice(r));
                } else u.current.textContent = e;
              }
            }),
            l.createElement(eF, { ref: u }, a)
          );
        },
        eF = (0, l.memo)(
          (0, l.forwardRef)((e, t) =>
            l.createElement(
              "span",
              { "data-slate-string": !0, ref: t },
              e.children,
            ),
          ),
        ),
        em = (e) => {
          var {
              length: t = 0,
              isLineBreak: r = !1,
              isMarkPlaceholder: u = !1,
            } = e,
            n = {
              "data-slate-zero-width": r ? "n" : "z",
              "data-slate-length": t,
            };
          return (
            u && (n["data-slate-mark-placeholder"] = !0),
            l.createElement(
              "span",
              Object.assign({}, n),
              eu && r ? null : "\uFEFF",
              r ? l.createElement("br", null) : null,
            )
          );
        },
        ew = (0, l.createContext)(null),
        eb = () => {
          var e = (0, l.useContext)(ew);
          if (!e)
            throw Error(
              "The `useSlateStatic` hook must be used inside the <Slate> component's context.",
            );
          return e;
        },
        ey = l.memo(
          (e) => {
            var {
                leaf: t,
                isLast: r,
                text: u,
                parent: n,
                renderPlaceholder: a,
                renderLeaf: o = (e) =>
                  l.createElement(ex, Object.assign({}, e)),
              } = e,
              i = (0, l.useRef)(null),
              s = (0, l.useRef)(null),
              c = eb(),
              D = (0, l.useRef)(null);
            (0, l.useEffect)(
              () => () => {
                D.current && D.current.disconnect();
              },
              [],
            ),
              (0, l.useEffect)(() => {
                var e = null == s ? void 0 : s.current;
                if (
                  (e ? m.set(c, e) : m.delete(c),
                  D.current
                    ? (D.current.disconnect(), e && D.current.observe(e))
                    : e &&
                      ((D.current = new (window.ResizeObserver || d.tb)(() => {
                        var e = _.get(c);
                        null == e || e();
                      })),
                      D.current.observe(e)),
                  !e && i.current)
                ) {
                  var t = _.get(c);
                  null == t || t();
                }
                return (
                  (i.current = s.current),
                  () => {
                    m.delete(c);
                  }
                );
              }, [s, t]);
            var f = l.createElement(eE, {
              isLast: r,
              leaf: t,
              parent: n,
              text: u,
            });
            if (t[W]) {
              var C = {
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
              f = l.createElement(l.Fragment, null, a(C), f);
            }
            return o({
              attributes: { "data-slate-leaf": !0 },
              children: f,
              leaf: t,
              text: u,
            });
          },
          (e, t) =>
            t.parent === e.parent &&
            t.isLast === e.isLast &&
            t.renderLeaf === e.renderLeaf &&
            t.renderPlaceholder === e.renderPlaceholder &&
            t.text === e.text &&
            D.EY.equals(t.leaf, e.leaf) &&
            t.leaf[W] === e.leaf[W],
        ),
        ex = (e) => {
          var { attributes: t, children: r } = e;
          return l.createElement("span", Object.assign({}, t), r);
        },
        eO = l.memo(
          (e) => {
            for (
              var {
                  decorations: t,
                  isLast: r,
                  parent: u,
                  renderPlaceholder: n,
                  renderLeaf: a,
                  text: o,
                } = e,
                i = eb(),
                s = (0, l.useRef)(null),
                c = D.EY.decorations(o, t),
                d = eh.findKey(i, o),
                f = [],
                C = 0;
              C < c.length;
              C++
            ) {
              var h = c[C];
              f.push(
                l.createElement(ey, {
                  isLast: r && C === c.length - 1,
                  key: "".concat(d.id, "-").concat(C),
                  renderPlaceholder: n,
                  leaf: h,
                  text: o,
                  parent: u,
                  renderLeaf: a,
                }),
              );
            }
            var B = (0, l.useCallback)(
              (e) => {
                var t = x.get(i);
                e
                  ? (null == t || t.set(d, e), b.set(o, e), w.set(e, o))
                  : (null == t || t.delete(d),
                    b.delete(o),
                    s.current && w.delete(s.current)),
                  (s.current = e);
              },
              [s, i, d, o],
            );
            return l.createElement(
              "span",
              { "data-slate-node": "text", ref: B },
              f,
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
                var u = e[r],
                  n = t[r];
                if (
                  u.anchor.offset !== n.anchor.offset ||
                  u.focus.offset !== n.focus.offset ||
                  !ep(u, n)
                )
                  return !1;
              }
              return !0;
            })(t.decorations, e.decorations),
        ),
        ek = l.memo(
          (e) => {
            var {
                decorations: t,
                element: r,
                renderElement: u = (e) =>
                  l.createElement(eP, Object.assign({}, e)),
                renderPlaceholder: a,
                renderLeaf: o,
                selection: i,
              } = e,
              s = eb(),
              c = eR(),
              d = s.isInline(r),
              f = eh.findKey(s, r),
              C = (0, l.useCallback)(
                (e) => {
                  var t = x.get(s);
                  e
                    ? (null == t || t.set(f, e), b.set(r, e), w.set(e, r))
                    : (null == t || t.delete(f), b.delete(r));
                },
                [s, f, r],
              ),
              h = ej({
                decorations: t,
                node: r,
                renderElement: u,
                renderPlaceholder: a,
                renderLeaf: o,
                selection: i,
              }),
              B = { "data-slate-node": "element", ref: C };
            if (
              (d && (B["data-slate-inline"] = !0), !d && D.KE.hasInlines(s, r))
            ) {
              var v = D.bP.string(r),
                p = n()(v);
              "rtl" === p && (B.dir = p);
            }
            if (D.KE.isVoid(s, r)) {
              (B["data-slate-void"] = !0), !c && d && (B.contentEditable = !1);
              var [[A]] = D.bP.texts(r);
              (h = l.createElement(
                d ? "span" : "div",
                {
                  "data-slate-spacer": !0,
                  style: {
                    height: "0",
                    color: "transparent",
                    outline: "none",
                    position: "absolute",
                  },
                },
                l.createElement(eO, {
                  renderPlaceholder: a,
                  decorations: [],
                  isLast: !1,
                  parent: r,
                  text: A,
                }),
              )),
                g.set(A, 0),
                E.set(A, r);
            }
            return u({
              attributes: B,
              children: h,
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
                var u = e[r],
                  n = t[r];
                if (!D.Q6.equals(u, n) || !ep(u, n)) return !1;
              }
              return !0;
            })(e.decorations, t.decorations) &&
            (e.selection === t.selection ||
              (!!e.selection &&
                !!t.selection &&
                D.Q6.equals(e.selection, t.selection))),
        ),
        eP = (e) => {
          var { attributes: t, children: r, element: u } = e,
            n = eb().isInline(u) ? "span" : "div";
          return l.createElement(
            n,
            Object.assign({}, t, { style: { position: "relative" } }),
            r,
          );
        },
        eS = (0, l.createContext)(() => []),
        eT = (0, l.createContext)(!1),
        ej = (e) => {
          for (
            var {
                decorations: t,
                node: r,
                renderElement: u,
                renderPlaceholder: n,
                renderLeaf: a,
                selection: o,
              } = e,
              i = (0, l.useContext)(eS),
              s = eb(),
              c = eh.findPath(s, r),
              d = [],
              f = D.Hg.isElement(r) && !s.isInline(r) && D.KE.hasInlines(s, r),
              C =
                D.Hg.isElement(r) &&
                null != s.rendersTrailingNewline &&
                s.rendersTrailingNewline(r),
              h = 0;
            h < r.children.length;
            h++
          ) {
            var B = c.concat(h),
              v = r.children[h],
              p = eh.findKey(s, v),
              A = D.KE.range(s, B),
              F = o && D.Q6.intersection(A, o),
              m = i([v, B]);
            for (var w of t) {
              var b = D.Q6.intersection(w, A);
              b && m.push(b);
            }
            D.Hg.isElement(v)
              ? d.push(
                  l.createElement(
                    eT.Provider,
                    { key: "provider-".concat(p.id), value: !!F },
                    l.createElement(ek, {
                      decorations: m,
                      element: v,
                      key: p.id,
                      renderElement: u,
                      renderPlaceholder: n,
                      renderLeaf: a,
                      selection: F,
                    }),
                  ),
                )
              : d.push(
                  l.createElement(eO, {
                    decorations: m,
                    key: p.id,
                    isLast: (f || C) && h === r.children.length - 1,
                    parent: r,
                    renderPlaceholder: n,
                    renderLeaf: a,
                    text: v,
                  }),
                ),
              g.set(v, h),
              E.set(v, r);
          }
          return d;
        },
        eN = (0, l.createContext)(!1),
        eR = () => (0, l.useContext)(eN),
        eM = (0, l.createContext)(null),
        eK = {
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
        eL = {
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
        e_ = {
          deleteWordBackward: "ctrl+shift?+backspace",
          deleteWordForward: "ctrl+shift?+delete",
          redo: ["ctrl+y", "ctrl+shift+z"],
        },
        eW = (e) => {
          var t = eK[e],
            r = eL[e],
            u = e_[e],
            n = t && (0, f.Sn)(t),
            a = r && (0, f.Sn)(r),
            o = u && (0, f.Sn)(u);
          return (e) =>
            !!((n && n(e)) || (er && a && a(e)) || (!er && o && o(e)));
        },
        eq = {
          isBold: eW("bold"),
          isCompose: eW("compose"),
          isMoveBackward: eW("moveBackward"),
          isMoveForward: eW("moveForward"),
          isDeleteBackward: eW("deleteBackward"),
          isDeleteForward: eW("deleteForward"),
          isDeleteLineBackward: eW("deleteLineBackward"),
          isDeleteLineForward: eW("deleteLineForward"),
          isDeleteWordBackward: eW("deleteWordBackward"),
          isDeleteWordForward: eW("deleteWordForward"),
          isExtendBackward: eW("extendBackward"),
          isExtendForward: eW("extendForward"),
          isExtendLineBackward: eW("extendLineBackward"),
          isExtendLineForward: eW("extendLineForward"),
          isItalic: eW("italic"),
          isMoveLineBackward: eW("moveLineBackward"),
          isMoveLineForward: eW("moveLineForward"),
          isMoveWordBackward: eW("moveWordBackward"),
          isMoveWordForward: eW("moveWordForward"),
          isRedo: eW("redo"),
          isSoftBreak: eW("insertSoftBreak"),
          isSplitBlock: eW("splitBlock"),
          isTransposeCharacter: eW("transposeCharacter"),
          isUndo: eW("undo"),
        },
        eI = {
          subtree: !0,
          childList: !0,
          characterData: !0,
          characterDataOldValue: !0,
        };
      class eQ extends l.Component {
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
          null == (e = this.mutationObserver) || e.observe(t.current, eI);
        }
        componentDidMount() {
          var e,
            t,
            { receivedUserInput: r } = this.props,
            u = this.context;
          (this.manager =
            ((e = []),
            {
              registerMutations: (t) => {
                if (r.current) {
                  var n = t.filter((e) => G(u, e, t));
                  e.push(...n);
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
            u,
            n = null == (e = this.mutationObserver) ? void 0 : e.takeRecords();
          return (
            null != n &&
              n.length &&
              (null == (u = this.manager) || u.registerMutations(n)),
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
      eQ.contextType = ew;
      var eV = eu
        ? eQ
        : (e) => {
            var { children: t } = e;
            return l.createElement(l.Fragment, null, t);
          };
      function ez(e) {
        for (
          var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), u = 1;
          u < t;
          u++
        )
          r[u - 1] = arguments[u];
        return r.reduce(
          (e, t) => e.slice(0, t.start) + t.text + e.slice(t.end),
          e,
        );
      }
      function eH(e, t) {
        var { start: r, end: u, text: n } = t,
          a = e.slice(r, u),
          o = (function (e, t) {
            for (var r = Math.min(e.length, t.length), u = 0; u < r; u++)
              if (e.charAt(u) !== t.charAt(u)) return u;
            return r;
          })(a, n),
          i = Math.min(a.length - o, n.length - o),
          s = (function (e, t, r) {
            for (var u = Math.min(e.length, t.length, r), n = 0; n < u; n++)
              if (e.charAt(e.length - n - 1) !== t.charAt(t.length - n - 1))
                return n;
            return u;
          })(a, n, i),
          l = { start: r + o, end: u - s, text: n.slice(o, n.length - s) };
        return l.start === l.end && 0 === l.text.length ? null : l;
      }
      function eU(e, t) {
        var { path: r, offset: u } = t;
        if (!D.KE.hasPath(e, r)) return null;
        var n = D.bP.get(e, r);
        if (!D.EY.isText(n)) return null;
        var a = D.KE.above(e, {
          match: (t) => D.Hg.isElement(t) && D.KE.isBlock(e, t),
          at: r,
        });
        if (!a) return null;
        for (; u > n.text.length; ) {
          var o = D.KE.next(e, { at: r, match: D.EY.isText });
          if (!o || !D.wA.isDescendant(o[1], a[1])) return null;
          (u -= n.text.length), (n = o[0]), (r = o[1]);
        }
        return { path: r, offset: u };
      }
      function e$(e, t) {
        var r = eU(e, t.anchor);
        if (!r) return null;
        if (D.Q6.isCollapsed(t)) return { anchor: r, focus: r };
        var u = eU(e, t.focus);
        return u ? { anchor: r, focus: u } : null;
      }
      function eY(e, t, r) {
        var u = M.get(e),
          n =
            null == u
              ? void 0
              : u.find((e) => {
                  var { path: r } = e;
                  return D.wA.equals(r, t.path);
                });
        if (!n || t.offset <= n.diff.start)
          return D.bR.transform(t, r, { affinity: "backward" });
        var { diff: a } = n;
        if (t.offset <= a.start + a.text.length) {
          var o = { path: t.path, offset: a.start },
            i = D.bR.transform(o, r, { affinity: "backward" });
          return i
            ? { path: i.path, offset: i.offset + t.offset - a.start }
            : null;
        }
        var s = {
            path: t.path,
            offset: t.offset - a.text.length + a.end - a.start,
          },
          l = D.bR.transform(s, r, { affinity: "backward" });
        return l
          ? "split_node" === r.type &&
            D.wA.equals(r.path, t.path) &&
            s.offset < r.position &&
            a.start < r.position
            ? l
            : {
                path: l.path,
                offset: l.offset + a.text.length - a.end + a.start,
              }
          : null;
      }
      function eJ(e, t, r) {
        var u = eY(e, t.anchor, r);
        if (!u) return null;
        if (D.Q6.isCollapsed(t)) return { anchor: u, focus: u };
        var n = eY(e, t.focus, r);
        return n ? { anchor: u, focus: n } : null;
      }
      function eZ(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(e);
          t &&
            (u = u.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, u);
        }
        return r;
      }
      function eX(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eZ(Object(r), !0).forEach(function (t) {
                h(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eZ(Object(r)).forEach(function (t) {
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
          var u = Object.getOwnPropertySymbols(e);
          t &&
            (u = u.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, u);
        }
        return r;
      }
      var e3 = { subtree: !0, childList: !0, characterData: !0 },
        e2 = [
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
        e7 = ["text"];
      function e8(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(e);
          t &&
            (u = u.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, u);
        }
        return r;
      }
      function e4(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? e8(Object(r), !0).forEach(function (t) {
                h(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : e8(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      var e9 = (e) => l.createElement(l.Fragment, null, ej(e)),
        e5 = (e) => {
          var { attributes: t, children: r } = e;
          return l.createElement(
            "span",
            Object.assign({}, t),
            r,
            eu && l.createElement("br", null),
          );
        },
        e6 = () => [],
        te = (e, t) => {
          if (
            t.getBoundingClientRect &&
            (!e.selection || (e.selection && D.Q6.isCollapsed(e.selection)))
          ) {
            var r = t.startContainer.parentElement,
              u = function (e) {
                var r = t.startContainer,
                  u = t.startOffset + e;
                if (3 !== r.nodeType || u < 0 || u + 1 > r.length) return null;
                var n = r.ownerDocument.createRange();
                return (
                  n.setStart(r, u),
                  n.setEnd(r, u + 1),
                  n.getClientRects().length > 0 ? n : null
                );
              },
              n = t;
            if (0 === t.getClientRects().length) {
              var a = u(0) || u(-1);
              if (null === a) return;
              n = a;
            }
            (r.getBoundingClientRect = n.getBoundingClientRect.bind(n)),
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
        tu = (0, l.createContext)({}),
        tn = ["editor", "children", "onChange", "value"],
        ta = (e, t) => {
          var r = (t.top + t.bottom) / 2;
          return e.top <= r && e.bottom >= r;
        },
        to = (e, t, r) => {
          var u = eh.toDOMRange(e, t).getBoundingClientRect(),
            n = eh.toDOMRange(e, r).getBoundingClientRect();
          return ta(u, n) && ta(n, u);
        };
      function ti(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(e);
          t &&
            (u = u.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, u);
        }
        return r;
      }
      function ts(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ti(Object(r), !0).forEach(function (t) {
                h(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ti(Object(r)).forEach(function (t) {
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
        for (var [u, n] of D.KE.levels(e, { at: t })) {
          var a = eh.findKey(e, u);
          r.push([n, a]);
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
              u,
              { editor: n, children: a, onChange: o, value: i } = e,
              s = B(e, tn),
              c = (0, l.useRef)(!1),
              [d, f] = l.useState(() => {
                if (!D.bP.isNodeList(i))
                  throw Error(
                    "[Slate] value is invalid! Expected a list of elements but got: ".concat(
                      D.h6.stringify(i),
                    ),
                  );
                if (!D.KE.isEditor(n))
                  throw Error(
                    "[Slate] editor is invalid! You passed: ".concat(
                      D.h6.stringify(n),
                    ),
                  );
                return (
                  (n.children = i), Object.assign(n, s), { v: 0, editor: n }
                );
              }),
              { selectorContext: C, onChange: h } =
                ((t = (0, l.useRef)([]).current),
                (r = (0, l.useRef)({ editor: n }).current),
                (u = (0, l.useCallback)((e) => {
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
                  onChange: u,
                }),
              v = (0, l.useCallback)(() => {
                o && o(n.children), f((e) => ({ v: e.v + 1, editor: n })), h(n);
              }, [o]);
            (0, l.useEffect)(
              () => (
                T.set(n, v),
                () => {
                  T.set(n, () => {}), (c.current = !0);
                }
              ),
              [v],
            );
            var [p, g] = (0, l.useState)(eh.isFocused(n));
            return (
              (0, l.useEffect)(() => {
                g(eh.isFocused(n));
              }),
              eg(() => {
                var e = () => g(eh.isFocused(n));
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
                tu.Provider,
                { value: C },
                l.createElement(
                  eM.Provider,
                  { value: d },
                  l.createElement(
                    ew.Provider,
                    { value: d.editor },
                    l.createElement(tr.Provider, { value: p }, a),
                  ),
                ),
              )
            );
          },
          Fo: (e) => {
            var t,
              r,
              u,
              a,
              i,
              c,
              d = (0, l.useCallback)(
                (e) => l.createElement(e5, Object.assign({}, e)),
                [],
              ),
              {
                autoFocus: f,
                decorate: C = e6,
                onDOMBeforeInput: v,
                placeholder: p,
                readOnly: g = !1,
                renderElement: E,
                renderLeaf: y,
                renderPlaceholder: x = d,
                scrollSelectionIntoView: T = te,
                style: I = {},
                as: V = "div",
                disableDefaultStyles: $ = !1,
              } = e,
              Y = B(e, e2),
              J = (() => {
                var e = (0, l.useContext)(eM);
                if (!e)
                  throw Error(
                    "The `useSlate` hook must be used inside the <Slate> component's context.",
                  );
                var { editor: t } = e;
                return t;
              })(),
              [Z, X] = (0, l.useState)(!1),
              ee = (0, l.useRef)(null),
              er = (0, l.useRef)([]),
              { onUserInput: eo, receivedUserInput: es } =
                ((t = eb()),
                (r = (0, l.useRef)(!1)),
                (u = (0, l.useRef)(0)),
                (a = (0, l.useCallback)(() => {
                  if (!r.current) {
                    r.current = !0;
                    var e = eh.getWindow(t);
                    e.cancelAnimationFrame(u.current),
                      (u.current = e.requestAnimationFrame(() => {
                        r.current = !1;
                      }));
                  }
                }, [])),
                (0, l.useEffect)(
                  () => () => cancelAnimationFrame(u.current),
                  [],
                ),
                { receivedUserInput: r, onUserInput: a }),
              [, el] = (0, l.useReducer)((e) => e + 1, 0);
            _.set(J, el), O.set(J, g);
            var eB = (0, l.useMemo)(
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
                null == eB ||
                  (null != eB.latestElement &&
                    (eB.latestElement.remove(), (eB.latestElement = null)));
              },
              [],
            ),
              (0, l.useEffect)(() => {
                ee.current && f && ee.current.focus();
              }, [f]);
            var ev = (0, l.useCallback)(
                s()(() => {
                  if (
                    (eu || !eh.isComposing(J)) &&
                    (!eB.isUpdatingSelection ||
                      (null != eE && eE.isFlushing())) &&
                    !eB.isDraggingInternally
                  ) {
                    var e = eh.findDocumentOrShadowRoot(J),
                      { activeElement: t } = e,
                      r = eh.toDOMNode(J, J),
                      u = e.getSelection();
                    if (
                      (t === r
                        ? ((eB.latestElement = t), k.set(J, !0))
                        : k.delete(J),
                      !u)
                    )
                      return D.gB.deselect(J);
                    var { anchorNode: n, focusNode: a } = u,
                      o =
                        eh.hasEditableTarget(J, n) ||
                        eh.isTargetInsideNonReadonlyVoid(J, n),
                      i =
                        eh.hasEditableTarget(J, a) ||
                        eh.isTargetInsideNonReadonlyVoid(J, a);
                    if (o && i) {
                      var s = eh.toSlateRange(J, u, {
                        exactMatch: !1,
                        suppressThrow: !0,
                      });
                      s &&
                        (eh.isComposing(J) ||
                        (null != eE && eE.hasPendingChanges()) ||
                        (null != eE && eE.isFlushing())
                          ? null == eE || eE.handleUserSelect(s)
                          : D.gB.select(J, s));
                    }
                    !g || (o && i) || D.gB.deselect(J);
                  }
                }, 100),
                [g],
              ),
              ep = (0, l.useMemo)(() => o()(ev, 0), [ev]),
              eE = (function (e) {
                var t,
                  { node: r } = e,
                  u = B(e, e0);
                if (!eu) return null;
                var n = eb(),
                  a =
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
                  [o] = (0, l.useState)(() =>
                    (function (e) {
                      var {
                          editor: t,
                          scheduleOnDOMSelectionChange: r,
                          onDOMSelectionChange: u,
                        } = e,
                        n = !1,
                        a = null,
                        o = null,
                        i = null,
                        s = 0,
                        l = !1,
                        c = () => {
                          var e = L.get(t);
                          if ((L.delete(t), e)) {
                            var { selection: r } = t,
                              u = e$(t, e);
                            !u || (r && D.Q6.equals(u, r)) || D.gB.select(t, u);
                          }
                        },
                        d = () => {
                          if (
                            (o && (clearTimeout(o), (o = null)),
                            i && (clearTimeout(i), (i = null)),
                            !v() && !B())
                          )
                            return void c();
                          n || ((n = !0), setTimeout(() => (n = !1))),
                            B() && (n = "action");
                          var e =
                            t.selection &&
                            D.KE.rangeRef(t, t.selection, {
                              affinity: "forward",
                            });
                          R.set(t, t.marks), eG(K.get(t), M.get(t));
                          for (
                            var a = v();
                            (s = null == (d = M.get(t)) ? void 0 : d[0]);

                          ) {
                            var s,
                              d,
                              f,
                              C = N.get(t);
                            void 0 !== C && (N.delete(t), (t.marks = C)),
                              C && !1 === l && (l = null);
                            var h = (function (e) {
                              var { path: t, diff: r } = e;
                              return {
                                anchor: { path: t, offset: r.start },
                                focus: { path: t, offset: r.end },
                              };
                            })(s);
                            (t.selection && D.Q6.equals(t.selection, h)) ||
                              D.gB.select(t, h),
                              s.diff.text
                                ? D.KE.insertText(t, s.diff.text)
                                : D.KE.deleteFragment(t),
                              M.set(
                                t,
                                null == (f = M.get(t))
                                  ? void 0
                                  : f.filter((e) => {
                                      var { id: t } = e;
                                      return t !== s.id;
                                    }),
                              ),
                              !(function (e, t) {
                                var { path: r, diff: u } = t;
                                if (!D.KE.hasPath(e, r)) return !1;
                                var n = D.bP.get(e, r);
                                if (!D.EY.isText(n)) return !1;
                                if (
                                  u.start !== n.text.length ||
                                  0 === u.text.length
                                )
                                  return (
                                    n.text.slice(
                                      u.start,
                                      u.start + u.text.length,
                                    ) === u.text
                                  );
                                var a = D.wA.next(r);
                                if (!D.KE.hasPath(e, a)) return !1;
                                var o = D.bP.get(e, a);
                                return (
                                  D.EY.isText(o) && o.text.startsWith(u.text)
                                );
                              })(t, s) &&
                                ((a = !1),
                                K.delete(t),
                                R.delete(t),
                                (n = "action"),
                                L.delete(t),
                                r.cancel(),
                                u.cancel(),
                                null == e || e.unref());
                          }
                          var p = null == e ? void 0 : e.unref();
                          if (
                            (!p ||
                              L.get(t) ||
                              (t.selection && D.Q6.equals(p, t.selection)) ||
                              D.gB.select(t, p),
                            B())
                          )
                            return void (() => {
                              var e = K.get(t);
                              if ((K.delete(t), e)) {
                                if (e.at) {
                                  var r = D.bR.isPoint(e.at)
                                    ? eU(t, e.at)
                                    : e$(t, e.at);
                                  if (!r) return;
                                  var u = D.KE.range(t, r);
                                  (t.selection &&
                                    D.Q6.equals(t.selection, u)) ||
                                    D.gB.select(t, r);
                                }
                                e.run();
                              }
                            })();
                          a && r(), r.flush(), u.flush(), c();
                          var g = R.get(t);
                          R.delete(t),
                            void 0 !== g && ((t.marks = g), t.onChange());
                        },
                        f = function () {
                          var e =
                              arguments.length > 0 &&
                              void 0 !== arguments[0] &&
                              arguments[0],
                            r = m.get(t);
                          if (r) {
                            if (v() || e) {
                              r.style.display = "none";
                              return;
                            }
                            r.style.removeProperty("display");
                          }
                        },
                        C = (e, r) => {
                          var u,
                            n,
                            a,
                            o,
                            i,
                            l,
                            c,
                            d,
                            C = null != (d = M.get(t)) ? d : [];
                          M.set(t, C);
                          var h = D.bP.leaf(t, e),
                            B = C.findIndex((t) => D.wA.equals(t.path, e));
                          if (B < 0) {
                            eH(h.text, r) &&
                              C.push({ path: e, diff: r, id: s++ }),
                              f();
                            return;
                          }
                          var v =
                            ((u = h.text),
                            (n = C[B].diff),
                            (a = Math.min(n.start, r.start)),
                            (o = Math.max(
                              0,
                              Math.min(n.start + n.text.length, r.end) -
                                r.start,
                            )),
                            (i = ez(u, n, r)),
                            (l = Math.max(
                              r.start + r.text.length,
                              n.start +
                                n.text.length +
                                (n.start + n.text.length > r.start
                                  ? r.text.length
                                  : 0) -
                                o,
                            )),
                            (c = i.slice(a, l)),
                            eH(u, {
                              start: a,
                              end: Math.max(
                                n.end,
                                r.end - n.text.length + (n.end - n.start),
                              ),
                              text: c,
                            }));
                          if (!v) {
                            C.splice(B, 1), f();
                            return;
                          }
                          C[B] = eX(eX({}, C[B]), {}, { diff: v });
                        },
                        h = function (e) {
                          var { at: n } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {};
                          (l = !1),
                            L.delete(t),
                            r.cancel(),
                            u.cancel(),
                            B() && d(),
                            K.set(t, { at: n, run: e }),
                            (i = setTimeout(d));
                        },
                        B = () => !!K.get(t),
                        v = () => {
                          var e;
                          return !!(null != (e = M.get(t)) && e.length);
                        },
                        p = (e) => {
                          L.set(t, e), o && (clearTimeout(o), (o = null));
                          var { selection: r } = t;
                          if (e) {
                            var u =
                                !r ||
                                !D.wA.equals(r.anchor.path, e.anchor.path),
                              n =
                                !r ||
                                !D.wA.equals(
                                  r.anchor.path.slice(0, -1),
                                  e.anchor.path.slice(0, -1),
                                );
                            ((u && l) || n) && (l = !1),
                              (u || v()) && (o = setTimeout(d, 200));
                          }
                        },
                        g = () => {
                          B() || (i = setTimeout(d));
                        };
                      return {
                        flush: d,
                        scheduleFlush: g,
                        hasPendingDiffs: v,
                        hasPendingAction: B,
                        hasPendingChanges: () => B() || v(),
                        isFlushing: () => n,
                        handleUserSelect: p,
                        handleCompositionEnd: (e) => {
                          a && clearTimeout(a),
                            (a = setTimeout(() => {
                              P.set(t, !1), d();
                            }, 25));
                        },
                        handleCompositionStart: (e) => {
                          P.set(t, !0), a && (clearTimeout(a), (a = null));
                        },
                        handleDOMBeforeInput: (e) => {
                          o && (clearTimeout(o), (o = null));
                          var { inputType: r } = e,
                            u = null,
                            n = e.dataTransfer || e.data || void 0;
                          !1 !== l &&
                            "insertText" !== r &&
                            "insertCompositionText" !== r &&
                            (l = !1);
                          var [a] = e.getTargetRanges();
                          a &&
                            (u = eh.toSlateRange(t, a, {
                              exactMatch: !1,
                              suppressThrow: !0,
                            }));
                          var i = eh.getWindow(t).getSelection();
                          if (
                            (!u &&
                              i &&
                              ((a = i),
                              (u = eh.toSlateRange(t, i, {
                                exactMatch: !1,
                                suppressThrow: !0,
                              }))),
                            (u = null != (P = u) ? P : t.selection))
                          ) {
                            var s = !0;
                            if (r.startsWith("delete")) {
                              if (D.Q6.isExpanded(u)) {
                                var [c, d] = D.Q6.edges(u);
                                if (
                                  D.bP.leaf(t, c.path).text.length ===
                                    c.offset &&
                                  0 === d.offset
                                ) {
                                  var f = D.KE.next(t, {
                                    at: c.path,
                                    match: D.EY.isText,
                                  });
                                  f &&
                                    D.wA.equals(f[1], d.path) &&
                                    (u = { anchor: d, focus: d });
                                }
                              }
                              var B = r.endsWith("Backward")
                                  ? "backward"
                                  : "forward",
                                [v, E] = D.Q6.edges(u),
                                [A, F] = D.KE.leaf(t, v.path),
                                m = {
                                  text: "",
                                  start: v.offset,
                                  end: E.offset,
                                },
                                w = M.get(t),
                                b =
                                  null == w
                                    ? void 0
                                    : w.find((e) => D.wA.equals(e.path, F)),
                                y = b ? [b.diff, m] : [m];
                              if (
                                (0 === ez(A.text, ...y).length && (s = !1),
                                D.Q6.isExpanded(u))
                              ) {
                                if (
                                  s &&
                                  D.wA.equals(u.anchor.path, u.focus.path)
                                ) {
                                  var x = {
                                    path: u.anchor.path,
                                    offset: v.offset,
                                  };
                                  return (
                                    p(D.KE.range(t, x, x)),
                                    C(u.anchor.path, {
                                      text: "",
                                      end: E.offset,
                                      start: v.offset,
                                    })
                                  );
                                }
                                return h(
                                  () =>
                                    D.KE.deleteFragment(t, { direction: B }),
                                  { at: u },
                                );
                              }
                            }
                            switch (r) {
                              case "deleteByComposition":
                              case "deleteByCut":
                              case "deleteByDrag":
                                return h(() => D.KE.deleteFragment(t), {
                                  at: u,
                                });
                              case "deleteContent":
                              case "deleteContentForward":
                                var { anchor: O } = u;
                                if (s && D.Q6.isCollapsed(u)) {
                                  var k = D.bP.leaf(t, O.path);
                                  if (O.offset < k.text.length)
                                    return C(O.path, {
                                      text: "",
                                      start: O.offset,
                                      end: O.offset + 1,
                                    });
                                }
                                return h(() => D.KE.deleteForward(t), {
                                  at: u,
                                });
                              case "deleteContentBackward":
                                var P,
                                  S,
                                  { anchor: T } = u,
                                  j = U(a)
                                    ? a.isCollapsed
                                    : !!(null != (S = a) && S.collapsed);
                                if (
                                  s &&
                                  j &&
                                  D.Q6.isCollapsed(u) &&
                                  T.offset > 0
                                )
                                  return C(T.path, {
                                    text: "",
                                    start: T.offset - 1,
                                    end: T.offset,
                                  });
                                return h(() => D.KE.deleteBackward(t), {
                                  at: u,
                                });
                              case "deleteEntireSoftLine":
                                return h(
                                  () => {
                                    D.KE.deleteBackward(t, { unit: "line" }),
                                      D.KE.deleteForward(t, { unit: "line" });
                                  },
                                  { at: u },
                                );
                              case "deleteHardLineBackward":
                                return h(
                                  () =>
                                    D.KE.deleteBackward(t, { unit: "block" }),
                                  { at: u },
                                );
                              case "deleteSoftLineBackward":
                                return h(
                                  () =>
                                    D.KE.deleteBackward(t, { unit: "line" }),
                                  { at: u },
                                );
                              case "deleteHardLineForward":
                                return h(
                                  () =>
                                    D.KE.deleteForward(t, { unit: "block" }),
                                  { at: u },
                                );
                              case "deleteSoftLineForward":
                                return h(
                                  () => D.KE.deleteForward(t, { unit: "line" }),
                                  { at: u },
                                );
                              case "deleteWordBackward":
                                return h(
                                  () =>
                                    D.KE.deleteBackward(t, { unit: "word" }),
                                  { at: u },
                                );
                              case "deleteWordForward":
                                return h(
                                  () => D.KE.deleteForward(t, { unit: "word" }),
                                  { at: u },
                                );
                              case "insertLineBreak":
                                return h(() => D.KE.insertSoftBreak(t), {
                                  at: u,
                                });
                              case "insertParagraph":
                                return h(() => D.KE.insertBreak(t), { at: u });
                              case "insertCompositionText":
                              case "deleteCompositionText":
                              case "insertFromComposition":
                              case "insertFromDrop":
                              case "insertFromPaste":
                              case "insertFromYank":
                              case "insertReplacementText":
                              case "insertText":
                                if (
                                  (null == n ? void 0 : n.constructor.name) ===
                                  "DataTransfer"
                                )
                                  return h(() => eh.insertData(t, n), {
                                    at: u,
                                  });
                                var R = null != n ? n : "";
                                if (
                                  (N.get(t) && (R = R.replace("\uFEFF", "")),
                                  "insertText" === r &&
                                    /.*\n.*\n$/.test(R) &&
                                    (R = R.slice(0, -1)),
                                  R.includes("\n"))
                                )
                                  return h(
                                    () => {
                                      var e = R.split("\n");
                                      e.forEach((r, u) => {
                                        r && D.KE.insertText(t, r),
                                          u !== e.length - 1 &&
                                            D.KE.insertSoftBreak(t);
                                      });
                                    },
                                    { at: u },
                                  );
                                if (D.wA.equals(u.anchor.path, u.focus.path)) {
                                  var [K, L] = D.Q6.edges(u),
                                    _ = {
                                      start: K.offset,
                                      end: L.offset,
                                      text: R,
                                    };
                                  if (R && l && "insertCompositionText" === r) {
                                    var W = l.start + l.text.search(/\S|$/);
                                    _.start + _.text.search(/\S|$/) === W + 1 &&
                                    _.end === l.start + l.text.length
                                      ? ((_.start -= 1), (l = null), g())
                                      : (l = !1);
                                  } else
                                    l =
                                      "insertText" === r &&
                                      (null === l
                                        ? _
                                        : !!(l && D.Q6.isCollapsed(u)) &&
                                          l.end + l.text.length === K.offset &&
                                          eX(
                                            eX({}, l),
                                            {},
                                            { text: l.text + R },
                                          ));
                                  if (s) return void C(K.path, _);
                                }
                                return h(() => D.KE.insertText(t, R), {
                                  at: u,
                                });
                            }
                          }
                        },
                        handleKeyDown: (e) => {
                          v() || (f(!0), setTimeout(f));
                        },
                        handleDomMutations: (e) => {
                          if (!(v() || B()) && e.some((r) => G(t, r, e))) {
                            var r;
                            null == (r = _.get(t)) || r();
                          }
                        },
                        handleInput: () => {
                          (B() || !v()) && d();
                        },
                      };
                    })(
                      (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var r = null != arguments[t] ? arguments[t] : {};
                          t % 2
                            ? e1(Object(r), !0).forEach(function (t) {
                                h(e, t, r[t]);
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
                      })({ editor: n }, u),
                    ),
                  );
                return (
                  !(function (e, t, r) {
                    var [u] = (0, l.useState)(() => new MutationObserver(t));
                    eg(() => {
                      u.takeRecords();
                    }),
                      (0, l.useEffect)(() => {
                        if (!e.current)
                          throw Error(
                            "Failed to attach MutationObserver, `node` is undefined",
                          );
                        return u.observe(e.current, r), () => u.disconnect();
                      }, []);
                  })(r, o.handleDomMutations, e3),
                  j.set(n, o.scheduleFlush),
                  a && o.flush(),
                  o
                );
              })({
                node: ee,
                onDOMSelectionChange: ev,
                scheduleOnDOMSelectionChange: ep,
              });
            eg(() => {
              ee.current && (e = Q(ee.current))
                ? (A.set(J, e),
                  F.set(J, ee.current),
                  b.set(J, ee.current),
                  w.set(ee.current, J))
                : b.delete(J);
              var e,
                { selection: t } = J,
                r = eh.findDocumentOrShadowRoot(J).getSelection();
              if (
                !(
                  !r ||
                  !eh.isFocused(J) ||
                  (null != eE && eE.hasPendingAction())
                )
              ) {
                var u = (e) => {
                    var u = "None" !== r.type;
                    if (t || u) {
                      var n = F.get(J),
                        a = !1;
                      if (
                        (n.contains(r.anchorNode) &&
                          n.contains(r.focusNode) &&
                          (a = !0),
                        u && a && t && !e)
                      ) {
                        var o = eh.toSlateRange(J, r, {
                            exactMatch: !0,
                            suppressThrow: !0,
                          }),
                          i =
                            (null == r.anchorNode ||
                              3 !== r.anchorNode.nodeType ||
                              null == r.focusNode ||
                              3 !== r.focusNode.nodeType) &&
                            !eh.isComposing(J);
                        if (o && D.Q6.equals(o, t) && !i) {
                          if (!eB.hasMarkPlaceholder) return;
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
                      if (t && !eh.hasRange(J, t)) {
                        J.selection = eh.toSlateRange(J, r, {
                          exactMatch: !1,
                          suppressThrow: !0,
                        });
                        return;
                      }
                      eB.isUpdatingSelection = !0;
                      var c = t && eh.toDOMRange(J, t);
                      return (
                        c
                          ? (D.Q6.isBackward(t)
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
                            T(J, c))
                          : r.removeAllRanges(),
                        c
                      );
                    }
                  },
                  n = u(),
                  a = (null == eE ? void 0 : eE.isFlushing()) === "action";
                if (!eu || !a)
                  return void setTimeout(() => {
                    n && en && eh.toDOMNode(J, J).focus(),
                      (eB.isUpdatingSelection = !1);
                  });
                var o = null,
                  i = requestAnimationFrame(() => {
                    if (a) {
                      var e = (e) => {
                        try {
                          eh.toDOMNode(J, J).focus(), u(e);
                        } catch (e) {}
                      };
                      e(),
                        (o = setTimeout(() => {
                          e(!0), (eB.isUpdatingSelection = !1);
                        }));
                    }
                  });
                return () => {
                  cancelAnimationFrame(i), o && clearTimeout(o);
                };
              }
            });
            var eA = (0, l.useCallback)(
                (e) => {
                  if (
                    (eo(),
                    !g &&
                      eh.hasEditableTarget(J, e.target) &&
                      !((e, t) => {
                        if (!t) return !1;
                        var r = t(e);
                        return null != r ? r : e.defaultPrevented;
                      })(e, v))
                  ) {
                    if (eE) return eE.handleDOMBeforeInput(e);
                    ep.flush(), ev.flush();
                    var { selection: t } = J,
                      { inputType: r } = e,
                      u = e.dataTransfer || e.data || void 0,
                      n =
                        "insertCompositionText" === r ||
                        "deleteCompositionText" === r;
                    if (!(n && eh.isComposing(J))) {
                      var a = !1;
                      if (
                        "insertText" === r &&
                        t &&
                        D.Q6.isCollapsed(t) &&
                        e.data &&
                        1 === e.data.length &&
                        /[a-z ]/i.test(e.data) &&
                        0 !== t.anchor.offset
                      ) {
                        (a = !0), J.marks && (a = !1);
                        var { anchor: o } = t,
                          [i, s] = eh.toDOMPoint(J, o),
                          l =
                            null == (f = i.parentElement)
                              ? void 0
                              : f.closest("a"),
                          c = eh.getWindow(J);
                        if (a && l && eh.hasDOMNode(J, l)) {
                          var d,
                            f,
                            C,
                            h,
                            B =
                              null == c
                                ? void 0
                                : c.document
                                    .createTreeWalker(l, NodeFilter.SHOW_TEXT)
                                    .lastChild();
                          B === i &&
                            (null == (h = B.textContent)
                              ? void 0
                              : h.length) === s &&
                            (a = !1);
                        }
                        if (
                          a &&
                          i.parentElement &&
                          (null == c ||
                          null == (C = c.getComputedStyle(i.parentElement))
                            ? void 0
                            : C.whiteSpace) === "pre"
                        ) {
                          var p = D.KE.above(J, {
                            at: o.path,
                            match: (e) =>
                              D.Hg.isElement(e) && D.KE.isBlock(J, e),
                          });
                          p && D.bP.string(p[0]).includes("	") && (a = !1);
                        }
                      }
                      if (!r.startsWith("delete") || r.startsWith("deleteBy")) {
                        var [E] = e.getTargetRanges();
                        if (E) {
                          var A = eh.toSlateRange(J, E, {
                            exactMatch: !1,
                            suppressThrow: !1,
                          });
                          if (!t || !D.Q6.equals(t, A)) {
                            a = !1;
                            var F =
                              !n &&
                              J.selection &&
                              D.KE.rangeRef(J, J.selection);
                            D.gB.select(J, A), F && S.set(J, F);
                          }
                        }
                      }
                      if (!n) {
                        if (
                          (a || e.preventDefault(),
                          t && D.Q6.isExpanded(t) && r.startsWith("delete"))
                        ) {
                          var m = r.endsWith("Backward")
                            ? "backward"
                            : "forward";
                          D.KE.deleteFragment(J, { direction: m });
                          return;
                        }
                        switch (r) {
                          case "deleteByComposition":
                          case "deleteByCut":
                          case "deleteByDrag":
                            D.KE.deleteFragment(J);
                            break;
                          case "deleteContent":
                          case "deleteContentForward":
                            D.KE.deleteForward(J);
                            break;
                          case "deleteContentBackward":
                            D.KE.deleteBackward(J);
                            break;
                          case "deleteEntireSoftLine":
                            D.KE.deleteBackward(J, { unit: "line" }),
                              D.KE.deleteForward(J, { unit: "line" });
                            break;
                          case "deleteHardLineBackward":
                            D.KE.deleteBackward(J, { unit: "block" });
                            break;
                          case "deleteSoftLineBackward":
                            D.KE.deleteBackward(J, { unit: "line" });
                            break;
                          case "deleteHardLineForward":
                            D.KE.deleteForward(J, { unit: "block" });
                            break;
                          case "deleteSoftLineForward":
                            D.KE.deleteForward(J, { unit: "line" });
                            break;
                          case "deleteWordBackward":
                            D.KE.deleteBackward(J, { unit: "word" });
                            break;
                          case "deleteWordForward":
                            D.KE.deleteForward(J, { unit: "word" });
                            break;
                          case "insertLineBreak":
                            D.KE.insertSoftBreak(J);
                            break;
                          case "insertParagraph":
                            D.KE.insertBreak(J);
                            break;
                          case "insertFromComposition":
                          case "insertFromDrop":
                          case "insertFromPaste":
                          case "insertFromYank":
                          case "insertReplacementText":
                          case "insertText":
                            "insertFromComposition" === r &&
                              eh.isComposing(J) &&
                              (X(!1), P.set(J, !1)),
                              (null == u ? void 0 : u.constructor.name) ===
                              "DataTransfer"
                                ? eh.insertData(J, u)
                                : "string" == typeof u &&
                                  (a
                                    ? er.current.push(() =>
                                        D.KE.insertText(J, u),
                                      )
                                    : D.KE.insertText(J, u));
                        }
                        var w = null == (d = S.get(J)) ? void 0 : d.unref();
                        S.delete(J),
                          !w ||
                            (J.selection && D.Q6.equals(J.selection, w)) ||
                            D.gB.select(J, w);
                      }
                    }
                  }
                },
                [g, v],
              ),
              eF = (0, l.useCallback)(
                (e) => {
                  null == e
                    ? (ev.cancel(),
                      ep.cancel(),
                      F.delete(J),
                      b.delete(J),
                      ee.current &&
                        eC &&
                        ee.current.removeEventListener("beforeinput", eA))
                    : eC && e.addEventListener("beforeinput", eA),
                    (ee.current = e);
                },
                [ee, eA, ev, ep],
              );
            eg(() => {
              var e = eh.getWindow(J);
              return (
                e.document.addEventListener("selectionchange", ep),
                () => {
                  e.document.removeEventListener("selectionchange", ep);
                }
              );
            }, [ep]);
            var em = C([J, []]);
            if (
              p &&
              1 === J.children.length &&
              1 === Array.from(D.bP.texts(J)).length &&
              "" === D.bP.string(J) &&
              !Z
            ) {
              var ew = D.KE.start(J, []);
              em.push({ [W]: !0, placeholder: p, anchor: ew, focus: ew });
            }
            var { marks: ey } = J;
            if (
              ((eB.hasMarkPlaceholder = !1),
              J.selection && D.Q6.isCollapsed(J.selection) && ey)
            ) {
              var { anchor: ex } = J.selection,
                eO = D.bP.leaf(J, ex.path),
                ek = B(eO, e7);
              if (!D.EY.equals(eO, ey, { loose: !0 })) {
                eB.hasMarkPlaceholder = !0;
                var eP = Object.fromEntries(
                  Object.keys(ek).map((e) => [e, null]),
                );
                em.push(
                  e4(
                    e4(e4({ [q]: !0 }, eP), ey),
                    {},
                    { anchor: ex, focus: ex },
                  ),
                );
              }
            }
            (0, l.useEffect)(() => {
              setTimeout(() => {
                var { selection: e } = J;
                if (e) {
                  var { anchor: t } = e,
                    r = D.bP.leaf(J, t.path);
                  if (ey && !D.EY.equals(r, ey, { loose: !0 }))
                    return void N.set(J, ey);
                }
                N.delete(J);
              });
            });
            var eT =
              null == (i = m.get(J)) || null == (c = i.getBoundingClientRect())
                ? void 0
                : c.height;
            return l.createElement(
              eN.Provider,
              { value: g },
              l.createElement(
                eS.Provider,
                { value: C },
                l.createElement(
                  eV,
                  { node: ee, receivedUserInput: es },
                  l.createElement(
                    V,
                    Object.assign(
                      {
                        role: g ? void 0 : "textbox",
                        "aria-multiline": !g || void 0,
                      },
                      Y,
                      {
                        spellCheck: (!!eC || !ef) && Y.spellCheck,
                        autoCorrect: eC || !ef ? Y.autoCorrect : "false",
                        autoCapitalize: eC || !ef ? Y.autoCapitalize : "false",
                        "data-slate-editor": !0,
                        "data-slate-node": "value",
                        contentEditable: !g,
                        zindex: -1,
                        suppressContentEditableWarning: !0,
                        ref: eF,
                        style: e4(
                          e4(
                            {},
                            $
                              ? {}
                              : e4(
                                  {
                                    position: "relative",
                                    outline: "none",
                                    whiteSpace: "pre-wrap",
                                    wordWrap: "break-word",
                                  },
                                  eT ? { minHeight: eT } : {},
                                ),
                          ),
                          I,
                        ),
                        onBeforeInput: (0, l.useCallback)(
                          (e) => {
                            if (
                              !eC &&
                              !g &&
                              !tt(e, Y.onBeforeInput) &&
                              eh.hasSelectableTarget(J, e.target) &&
                              (e.preventDefault(), !eh.isComposing(J))
                            ) {
                              var t = e.data;
                              D.KE.insertText(J, t);
                            }
                          },
                          [g],
                        ),
                        onInput: (0, l.useCallback)((e) => {
                          if (!tt(e, Y.onInput)) {
                            if (eE) return void eE.handleInput();
                            for (var t of er.current) t();
                            er.current = [];
                          }
                        }, []),
                        onBlur: (0, l.useCallback)(
                          (e) => {
                            if (
                              g ||
                              eB.isUpdatingSelection ||
                              !eh.hasSelectableTarget(J, e.target) ||
                              tt(e, Y.onBlur)
                            )
                              return;
                            var t = eh.findDocumentOrShadowRoot(J);
                            if (eB.latestElement !== t.activeElement) {
                              var { relatedTarget: r } = e;
                              if (
                                r !== eh.toDOMNode(J, J) &&
                                !(z(r) && r.hasAttribute("data-slate-spacer"))
                              ) {
                                if (null != r && H(r) && eh.hasDOMNode(J, r)) {
                                  var u = eh.toSlateNode(J, r);
                                  if (D.Hg.isElement(u) && !J.isVoid(u)) return;
                                }
                                if (ea) {
                                  var n = t.getSelection();
                                  null == n || n.removeAllRanges();
                                }
                                k.delete(J);
                              }
                            }
                          },
                          [g, Y.onBlur],
                        ),
                        onClick: (0, l.useCallback)(
                          (e) => {
                            if (
                              eh.hasTarget(J, e.target) &&
                              !tt(e, Y.onClick) &&
                              H(e.target)
                            ) {
                              var t = eh.toSlateNode(J, e.target),
                                r = eh.findPath(J, t);
                              if (D.KE.hasPath(J, r) && D.bP.get(J, r) === t) {
                                if (3 === e.detail && r.length >= 1) {
                                  var u = r;
                                  if (
                                    !(D.Hg.isElement(t) && D.KE.isBlock(J, t))
                                  ) {
                                    var n,
                                      a = D.KE.above(J, {
                                        match: (e) =>
                                          D.Hg.isElement(e) &&
                                          D.KE.isBlock(J, e),
                                        at: r,
                                      });
                                    u =
                                      null != (n = null == a ? void 0 : a[1])
                                        ? n
                                        : r.slice(0, 1);
                                  }
                                  var o = D.KE.range(J, u);
                                  D.gB.select(J, o);
                                  return;
                                }
                                if (!g) {
                                  var i = D.KE.start(J, r),
                                    s = D.KE.end(J, r),
                                    l = D.KE.void(J, { at: i }),
                                    c = D.KE.void(J, { at: s });
                                  if (l && c && D.wA.equals(l[1], c[1])) {
                                    var d = D.KE.range(J, i);
                                    D.gB.select(J, d);
                                  }
                                }
                              }
                            }
                          },
                          [g, Y.onClick],
                        ),
                        onCompositionEnd: (0, l.useCallback)(
                          (e) => {
                            if (
                              eh.hasSelectableTarget(J, e.target) &&
                              (eh.isComposing(J) && (X(!1), P.set(J, !1)),
                              null == eE || eE.handleCompositionEnd(e),
                              !tt(e, Y.onCompositionEnd) &&
                                !eu &&
                                !ea &&
                                !ec &&
                                !et &&
                                !ed &&
                                !eD) &&
                              e.data
                            ) {
                              var t = N.get(J);
                              N.delete(J),
                                void 0 !== t &&
                                  (R.set(J, J.marks), (J.marks = t)),
                                D.KE.insertText(J, e.data);
                              var r = R.get(J);
                              R.delete(J), void 0 !== r && (J.marks = r);
                            }
                          },
                          [Y.onCompositionEnd],
                        ),
                        onCompositionUpdate: (0, l.useCallback)(
                          (e) => {
                            !eh.hasSelectableTarget(J, e.target) ||
                              tt(e, Y.onCompositionUpdate) ||
                              eh.isComposing(J) ||
                              (X(!0), P.set(J, !0));
                          },
                          [Y.onCompositionUpdate],
                        ),
                        onCompositionStart: (0, l.useCallback)(
                          (e) => {
                            if (
                              eh.hasSelectableTarget(J, e.target) &&
                              (null == eE || eE.handleCompositionStart(e),
                              !tt(e, Y.onCompositionStart) && !eu)
                            ) {
                              X(!0);
                              var { selection: t } = J;
                              if (t) {
                                if (D.Q6.isExpanded(t))
                                  return void D.KE.deleteFragment(J);
                                var r = D.KE.above(J, {
                                  match: (e) =>
                                    D.Hg.isElement(e) && D.KE.isInline(J, e),
                                  mode: "highest",
                                });
                                if (r) {
                                  var [, u] = r;
                                  if (D.KE.isEnd(J, t.anchor, u)) {
                                    var n = D.KE.after(J, u);
                                    D.gB.setSelection(J, {
                                      anchor: n,
                                      focus: n,
                                    });
                                  }
                                }
                              }
                            }
                          },
                          [Y.onCompositionStart],
                        ),
                        onCopy: (0, l.useCallback)(
                          (e) => {
                            eh.hasSelectableTarget(J, e.target) &&
                              !tt(e, Y.onCopy) &&
                              (e.preventDefault(),
                              eh.setFragmentData(J, e.clipboardData, "copy"));
                          },
                          [Y.onCopy],
                        ),
                        onCut: (0, l.useCallback)(
                          (e) => {
                            if (
                              !g &&
                              eh.hasSelectableTarget(J, e.target) &&
                              !tt(e, Y.onCut)
                            ) {
                              e.preventDefault(),
                                eh.setFragmentData(J, e.clipboardData, "cut");
                              var { selection: t } = J;
                              if (t)
                                if (D.Q6.isExpanded(t)) D.KE.deleteFragment(J);
                                else {
                                  var r = D.bP.parent(J, t.anchor.path);
                                  D.KE.isVoid(J, r) && D.gB.delete(J);
                                }
                            }
                          },
                          [g, Y.onCut],
                        ),
                        onDragOver: (0, l.useCallback)(
                          (e) => {
                            if (
                              eh.hasTarget(J, e.target) &&
                              !tt(e, Y.onDragOver)
                            ) {
                              var t = eh.toSlateNode(J, e.target);
                              D.Hg.isElement(t) &&
                                D.KE.isVoid(J, t) &&
                                e.preventDefault();
                            }
                          },
                          [Y.onDragOver],
                        ),
                        onDragStart: (0, l.useCallback)(
                          (e) => {
                            if (
                              !g &&
                              eh.hasTarget(J, e.target) &&
                              !tt(e, Y.onDragStart)
                            ) {
                              var t = eh.toSlateNode(J, e.target),
                                r = eh.findPath(J, t);
                              if (
                                (D.Hg.isElement(t) && D.KE.isVoid(J, t)) ||
                                D.KE.void(J, { at: r, voids: !0 })
                              ) {
                                var u = D.KE.range(J, r);
                                D.gB.select(J, u);
                              }
                              (eB.isDraggingInternally = !0),
                                eh.setFragmentData(J, e.dataTransfer, "drag");
                            }
                          },
                          [g, Y.onDragStart],
                        ),
                        onDrop: (0, l.useCallback)(
                          (e) => {
                            if (
                              !g &&
                              eh.hasTarget(J, e.target) &&
                              !tt(e, Y.onDrop)
                            ) {
                              e.preventDefault();
                              var t = J.selection,
                                r = eh.findEventRange(J, e),
                                u = e.dataTransfer;
                              D.gB.select(J, r),
                                eB.isDraggingInternally &&
                                  t &&
                                  !D.Q6.equals(t, r) &&
                                  !D.KE.void(J, { at: r, voids: !0 }) &&
                                  D.gB.delete(J, { at: t }),
                                eh.insertData(J, u),
                                eh.isFocused(J) || eh.focus(J);
                            }
                            eB.isDraggingInternally = !1;
                          },
                          [g, Y.onDrop],
                        ),
                        onDragEnd: (0, l.useCallback)(
                          (e) => {
                            !g &&
                              eB.isDraggingInternally &&
                              Y.onDragEnd &&
                              eh.hasTarget(J, e.target) &&
                              Y.onDragEnd(e),
                              (eB.isDraggingInternally = !1);
                          },
                          [g, Y.onDragEnd],
                        ),
                        onFocus: (0, l.useCallback)(
                          (e) => {
                            if (
                              !g &&
                              !eB.isUpdatingSelection &&
                              eh.hasEditableTarget(J, e.target) &&
                              !tt(e, Y.onFocus)
                            ) {
                              var t = eh.toDOMNode(J, J);
                              if (
                                ((eB.latestElement =
                                  eh.findDocumentOrShadowRoot(J).activeElement),
                                en && e.target !== t)
                              )
                                return void t.focus();
                              k.set(J, !0);
                            }
                          },
                          [g, Y.onFocus],
                        ),
                        onKeyDown: (0, l.useCallback)(
                          (e) => {
                            if (!g && eh.hasEditableTarget(J, e.target)) {
                              null == eE || eE.handleKeyDown(e);
                              var { nativeEvent: t } = e;
                              if (
                                (eh.isComposing(J) &&
                                  !1 === t.isComposing &&
                                  (P.set(J, !1), X(!1)),
                                !(tt(e, Y.onKeyDown) || eh.isComposing(J)))
                              ) {
                                var { selection: r } = J,
                                  u =
                                    J.children[
                                      null !== r ? r.focus.path[0] : 0
                                    ],
                                  a = "rtl" === n()(D.bP.string(u));
                                if (eq.isRedo(t)) {
                                  e.preventDefault(),
                                    "function" == typeof J.redo && J.redo();
                                  return;
                                }
                                if (eq.isUndo(t)) {
                                  e.preventDefault(),
                                    "function" == typeof J.undo && J.undo();
                                  return;
                                }
                                if (eq.isMoveLineBackward(t)) {
                                  e.preventDefault(),
                                    D.gB.move(J, { unit: "line", reverse: !0 });
                                  return;
                                }
                                if (eq.isMoveLineForward(t)) {
                                  e.preventDefault(),
                                    D.gB.move(J, { unit: "line" });
                                  return;
                                }
                                if (eq.isExtendLineBackward(t)) {
                                  e.preventDefault(),
                                    D.gB.move(J, {
                                      unit: "line",
                                      edge: "focus",
                                      reverse: !0,
                                    });
                                  return;
                                }
                                if (eq.isExtendLineForward(t)) {
                                  e.preventDefault(),
                                    D.gB.move(J, {
                                      unit: "line",
                                      edge: "focus",
                                    });
                                  return;
                                }
                                if (eq.isMoveBackward(t)) {
                                  e.preventDefault(),
                                    r && D.Q6.isCollapsed(r)
                                      ? D.gB.move(J, { reverse: !a })
                                      : D.gB.collapse(J, { edge: "start" });
                                  return;
                                }
                                if (eq.isMoveForward(t)) {
                                  e.preventDefault(),
                                    r && D.Q6.isCollapsed(r)
                                      ? D.gB.move(J, { reverse: a })
                                      : D.gB.collapse(J, { edge: "end" });
                                  return;
                                }
                                if (eq.isMoveWordBackward(t)) {
                                  e.preventDefault(),
                                    r &&
                                      D.Q6.isExpanded(r) &&
                                      D.gB.collapse(J, { edge: "focus" }),
                                    D.gB.move(J, { unit: "word", reverse: !a });
                                  return;
                                }
                                if (eq.isMoveWordForward(t)) {
                                  e.preventDefault(),
                                    r &&
                                      D.Q6.isExpanded(r) &&
                                      D.gB.collapse(J, { edge: "focus" }),
                                    D.gB.move(J, { unit: "word", reverse: a });
                                  return;
                                }
                                if (eC) {
                                  if (
                                    (ei || ea) &&
                                    r &&
                                    (eq.isDeleteBackward(t) ||
                                      eq.isDeleteForward(t)) &&
                                    D.Q6.isCollapsed(r)
                                  ) {
                                    var o = D.bP.parent(J, r.anchor.path);
                                    if (
                                      D.Hg.isElement(o) &&
                                      D.KE.isVoid(J, o) &&
                                      (D.KE.isInline(J, o) ||
                                        D.KE.isBlock(J, o))
                                    ) {
                                      e.preventDefault(),
                                        D.KE.deleteBackward(J, {
                                          unit: "block",
                                        });
                                      return;
                                    }
                                  }
                                } else {
                                  if (
                                    eq.isBold(t) ||
                                    eq.isItalic(t) ||
                                    eq.isTransposeCharacter(t)
                                  )
                                    return void e.preventDefault();
                                  if (eq.isSoftBreak(t)) {
                                    e.preventDefault(), D.KE.insertSoftBreak(J);
                                    return;
                                  }
                                  if (eq.isSplitBlock(t)) {
                                    e.preventDefault(), D.KE.insertBreak(J);
                                    return;
                                  }
                                  if (eq.isDeleteBackward(t)) {
                                    e.preventDefault(),
                                      r && D.Q6.isExpanded(r)
                                        ? D.KE.deleteFragment(J, {
                                            direction: "backward",
                                          })
                                        : D.KE.deleteBackward(J);
                                    return;
                                  }
                                  if (eq.isDeleteForward(t)) {
                                    e.preventDefault(),
                                      r && D.Q6.isExpanded(r)
                                        ? D.KE.deleteFragment(J, {
                                            direction: "forward",
                                          })
                                        : D.KE.deleteForward(J);
                                    return;
                                  }
                                  if (eq.isDeleteLineBackward(t)) {
                                    e.preventDefault(),
                                      r && D.Q6.isExpanded(r)
                                        ? D.KE.deleteFragment(J, {
                                            direction: "backward",
                                          })
                                        : D.KE.deleteBackward(J, {
                                            unit: "line",
                                          });
                                    return;
                                  }
                                  if (eq.isDeleteLineForward(t)) {
                                    e.preventDefault(),
                                      r && D.Q6.isExpanded(r)
                                        ? D.KE.deleteFragment(J, {
                                            direction: "forward",
                                          })
                                        : D.KE.deleteForward(J, {
                                            unit: "line",
                                          });
                                    return;
                                  }
                                  if (eq.isDeleteWordBackward(t)) {
                                    e.preventDefault(),
                                      r && D.Q6.isExpanded(r)
                                        ? D.KE.deleteFragment(J, {
                                            direction: "backward",
                                          })
                                        : D.KE.deleteBackward(J, {
                                            unit: "word",
                                          });
                                    return;
                                  }
                                  if (eq.isDeleteWordForward(t)) {
                                    e.preventDefault(),
                                      r && D.Q6.isExpanded(r)
                                        ? D.KE.deleteFragment(J, {
                                            direction: "forward",
                                          })
                                        : D.KE.deleteForward(J, {
                                            unit: "word",
                                          });
                                    return;
                                  }
                                }
                              }
                            }
                          },
                          [g, Y.onKeyDown],
                        ),
                        onPaste: (0, l.useCallback)(
                          (e) => {
                            let t;
                            !g &&
                              eh.hasEditableTarget(J, e.target) &&
                              !tt(e, Y.onPaste) &&
                              (!eC ||
                                ((t = e.nativeEvent).clipboardData &&
                                  "" !==
                                    t.clipboardData.getData("text/plain") &&
                                  1 === t.clipboardData.types.length) ||
                                ea) &&
                              (e.preventDefault(),
                              eh.insertData(J, e.clipboardData));
                          },
                          [g, Y.onPaste],
                        ),
                      },
                    ),
                    l.createElement(e9, {
                      decorations: em,
                      node: J,
                      renderElement: E,
                      renderPlaceholder: x,
                      renderLeaf: y,
                      selection: J.selection,
                    }),
                  ),
                ),
              ),
            );
          },
          RV: eb,
          f7: () => (0, l.useContext)(eT),
          o$: function (e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "x-slate-fragment",
              {
                apply: r,
                onChange: u,
                deleteBackward: n,
                addMark: a,
                removeMark: o,
              } = e;
            return (
              x.set(e, new WeakMap()),
              (e.addMark = (t, r) => {
                var u, n;
                null == (u = j.get(e)) || u(),
                  !N.get(e) &&
                    null != (n = M.get(e)) &&
                    n.length &&
                    N.set(e, null),
                  R.delete(e),
                  a(t, r);
              }),
              (e.removeMark = (t) => {
                var r;
                !N.get(e) &&
                  null != (r = M.get(e)) &&
                  r.length &&
                  N.set(e, null),
                  R.delete(e),
                  o(t);
              }),
              (e.deleteBackward = (t) => {
                if ("line" !== t) return n(t);
                if (e.selection && D.Q6.isCollapsed(e.selection)) {
                  var r = D.KE.above(e, {
                    match: (t) => D.Hg.isElement(t) && D.KE.isBlock(e, t),
                    at: e.selection,
                  });
                  if (r) {
                    var [, u] = r,
                      a = D.KE.range(e, u, e.selection.anchor),
                      o = ((e, t) => {
                        var r = D.KE.range(e, D.Q6.end(t)),
                          u = Array.from(D.KE.positions(e, { at: t })),
                          n = 0,
                          a = u.length,
                          o = Math.floor(a / 2);
                        if (to(e, D.KE.range(e, u[n]), r))
                          return D.KE.range(e, u[n], r);
                        if (u.length < 2)
                          return D.KE.range(e, u[u.length - 1], r);
                        for (; o !== u.length && o !== n; )
                          to(e, D.KE.range(e, u[o]), r) ? (a = o) : (n = o),
                            (o = Math.floor((n + a) / 2));
                        return D.KE.range(e, u[a], r);
                      })(e, a);
                    D.Q6.isCollapsed(o) || D.gB.delete(e, { at: o });
                  }
                }
              }),
              (e.apply = (t) => {
                var u,
                  n = [],
                  a = M.get(e);
                if (null != a && a.length) {
                  var o = a
                    .map((e) =>
                      (function (e, t) {
                        var { path: r, diff: u, id: n } = e;
                        switch (t.type) {
                          case "insert_text":
                            if (!D.wA.equals(t.path, r) || t.offset >= u.end)
                              return e;
                            if (t.offset <= u.start)
                              return {
                                diff: {
                                  start: t.text.length + u.start,
                                  end: t.text.length + u.end,
                                  text: u.text,
                                },
                                id: n,
                                path: r,
                              };
                            return {
                              diff: {
                                start: u.start,
                                end: u.end + t.text.length,
                                text: u.text,
                              },
                              id: n,
                              path: r,
                            };
                          case "remove_text":
                            if (!D.wA.equals(t.path, r) || t.offset >= u.end)
                              return e;
                            if (t.offset + t.text.length <= u.start)
                              return {
                                diff: {
                                  start: u.start - t.text.length,
                                  end: u.end - t.text.length,
                                  text: u.text,
                                },
                                id: n,
                                path: r,
                              };
                            return {
                              diff: {
                                start: u.start,
                                end: u.end - t.text.length,
                                text: u.text,
                              },
                              id: n,
                              path: r,
                            };
                          case "split_node":
                            if (!D.wA.equals(t.path, r) || t.position >= u.end)
                              return {
                                diff: u,
                                id: n,
                                path: D.wA.transform(r, t, {
                                  affinity: "backward",
                                }),
                              };
                            if (t.position > u.start)
                              return {
                                diff: {
                                  start: u.start,
                                  end: Math.min(t.position, u.end),
                                  text: u.text,
                                },
                                id: n,
                                path: r,
                              };
                            return {
                              diff: {
                                start: u.start - t.position,
                                end: u.end - t.position,
                                text: u.text,
                              },
                              id: n,
                              path: D.wA.transform(r, t, {
                                affinity: "forward",
                              }),
                            };
                          case "merge_node":
                            if (!D.wA.equals(t.path, r))
                              return {
                                diff: u,
                                id: n,
                                path: D.wA.transform(r, t),
                              };
                            return {
                              diff: {
                                start: u.start + t.position,
                                end: u.end + t.position,
                                text: u.text,
                              },
                              id: n,
                              path: D.wA.transform(r, t),
                            };
                        }
                        var a = D.wA.transform(r, t);
                        return a ? { diff: u, path: a, id: n } : null;
                      })(e, t),
                    )
                    .filter(Boolean);
                  M.set(e, o);
                }
                var i = L.get(e);
                i && L.set(e, eJ(e, i, t));
                var s = K.get(e);
                if (null != s && s.at) {
                  var l = D.bR.isPoint(null == s ? void 0 : s.at)
                    ? eY(e, s.at, t)
                    : eJ(e, s.at, t);
                  K.set(e, l ? ts(ts({}, s), {}, { at: l }) : null);
                }
                switch (t.type) {
                  case "insert_text":
                  case "remove_text":
                  case "set_node":
                  case "split_node":
                    n.push(...tl(e, t.path));
                    break;
                  case "set_selection":
                    null == (u = S.get(e)) || u.unref(), S.delete(e);
                    break;
                  case "insert_node":
                  case "remove_node":
                    n.push(...tl(e, D.wA.parent(t.path)));
                    break;
                  case "merge_node":
                    var c = D.wA.previous(t.path);
                    n.push(...tl(e, c));
                    break;
                  case "move_node":
                    var d = D.wA.common(
                      D.wA.parent(t.path),
                      D.wA.parent(t.newPath),
                    );
                    n.push(...tl(e, d));
                }
                for (var [f, C] of (r(t), n)) {
                  var [h] = D.KE.node(e, f);
                  y.set(h, C);
                }
              }),
              (e.setFragmentData = (r) => {
                var { selection: u } = e;
                if (u) {
                  var [n, a] = D.Q6.edges(u),
                    o = D.KE.void(e, { at: n.path }),
                    i = D.KE.void(e, { at: a.path });
                  if (!D.Q6.isCollapsed(u) || o) {
                    var s = eh.toDOMRange(e, u),
                      l = s.cloneContents(),
                      c = l.childNodes[0];
                    if (
                      (l.childNodes.forEach((e) => {
                        e.textContent && "" !== e.textContent.trim() && (c = e);
                      }),
                      i)
                    ) {
                      var [d] = i,
                        f = s.cloneRange(),
                        C = eh.toDOMNode(e, d);
                      f.setEndAfter(C), (l = f.cloneContents());
                    }
                    if (
                      (o && (c = l.querySelector("[data-slate-spacer]")),
                      Array.from(
                        l.querySelectorAll("[data-slate-zero-width]"),
                      ).forEach((e) => {
                        var t = "n" === e.getAttribute("data-slate-zero-width");
                        e.textContent = t ? "\n" : "";
                      }),
                      $(c))
                    ) {
                      var h = c.ownerDocument.createElement("span");
                      (h.style.whiteSpace = "pre"),
                        h.appendChild(c),
                        l.appendChild(h),
                        (c = h);
                    }
                    var B = JSON.stringify(e.getFragment()),
                      v = window.btoa(encodeURIComponent(B));
                    c.setAttribute("data-slate-fragment", v),
                      r.setData("application/".concat(t), v);
                    var p = l.ownerDocument.createElement("div");
                    return (
                      p.appendChild(l),
                      p.setAttribute("hidden", "true"),
                      l.ownerDocument.body.appendChild(p),
                      r.setData("text/html", p.innerHTML),
                      r.setData("text/plain", Z(p)),
                      l.ownerDocument.body.removeChild(p),
                      r
                    );
                  }
                }
              }),
              (e.insertData = (t) => {
                e.insertFragmentData(t) || e.insertTextData(t);
              }),
              (e.insertFragmentData = (r) => {
                var u =
                  r.getData("application/".concat(t)) ||
                  ((e) => {
                    var [, t] = e.getData("text/html").match(X) || [];
                    return t;
                  })(r);
                if (u) {
                  var n = JSON.parse(decodeURIComponent(window.atob(u)));
                  return e.insertFragment(n), !0;
                }
                return !1;
              }),
              (e.insertTextData = (t) => {
                var r = t.getData("text/plain");
                if (r) {
                  var u = r.split(/\r\n|\r|\n/),
                    n = !1;
                  for (var a of u)
                    n && D.gB.splitNodes(e, { always: !0 }),
                      e.insertText(a),
                      (n = !0);
                  return !0;
                }
                return !1;
              }),
              (e.onChange = (t) => {
                C.unstable_batchedUpdates(() => {
                  var r = T.get(e);
                  r && r(), u(t);
                });
              }),
              e
            );
          },
          rL: eh,
          zL: () => (0, l.useContext)(tr),
        },
      );
    },
    719442(e, t, r) {
      "use strict";
      var u,
        n,
        a = r(694260),
        o = r(159563);
      function i(e, t, r) {
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
        D = new WeakMap(),
        d = new WeakMap(),
        f = new WeakMap(),
        C = new WeakMap();
      function h(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(e);
          t &&
            (u = u.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, u);
        }
        return r;
      }
      function B(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? h(Object(r), !0).forEach(function (t) {
                i(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : h(Object(r)).forEach(function (t) {
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
          u,
          n = (function (e, t) {
            if (null == e) return {};
            var r,
              u,
              n = {},
              a = Object.keys(e);
            for (u = 0; u < a.length; u++)
              (r = a[u]), t.indexOf(r) >= 0 || (n[r] = e[r]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          for (u = 0; u < a.length; u++)
            (r = a[u]),
              !(t.indexOf(r) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(e, r) &&
                (n[r] = e[r]);
        }
        return n;
      }
      var p = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            r = !t,
            u = t ? b(e) : e,
            a = n.None,
            o = n.None,
            i = 0,
            s = null;
          for (var l of u) {
            var c = l.codePointAt(0);
            if (!c) break;
            var D = K(l, c);
            if (
              (([a, o] = r ? [o, D] : [D, a]),
              (a & n.ZWJ) != 0 &&
                (o & n.ExtPict) != 0 &&
                !(r ? W(e.substring(0, i)) : W(e.substring(0, e.length - i))))
            )
              break;
            if (
              ((a & n.RI) != 0 &&
                (o & n.RI) != 0 &&
                !(s =
                  null !== s ? !s : !!r || I(e.substring(0, e.length - i)))) ||
              (a !== n.None &&
                o !== n.None &&
                (function (e, t) {
                  return (
                    -1 ===
                    L.findIndex((r) => (e & r[0]) != 0 && (t & r[1]) != 0)
                  );
                })(a, o))
            )
              break;
            i += l.length;
          }
          return i || 1;
        },
        g = /\s/,
        E =
          /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
        A = /['\u2018\u2019]/,
        F = function (e) {
          for (
            var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              r = 0,
              u = !1;
            e.length > 0;

          ) {
            var n = p(e, t),
              [a, o] = m(e, n, t);
            if (w(a, o, t)) (u = !0), (r += n);
            else if (u) break;
            else r += n;
            e = o;
          }
          return r;
        },
        m = (e, t, r) => {
          if (r) {
            var u = e.length - t;
            return [e.slice(u, e.length), e.slice(0, u)];
          }
          return [e.slice(0, t), e.slice(t)];
        },
        w = function e(t, r) {
          var u =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (g.test(t)) return !1;
          if (A.test(t)) {
            var n = p(r, u),
              [a, o] = m(r, n, u);
            if (e(a, o, u)) return !0;
          }
          return !E.test(t);
        },
        b = function* (e) {
          for (var t = e.length - 1, r = 0; r < e.length; r++) {
            var u = e.charAt(t - r);
            if (x(u.charCodeAt(0))) {
              var n = e.charAt(t - r - 1);
              if (y(n.charCodeAt(0))) {
                yield n + u, r++;
                continue;
              }
            }
            yield u;
          }
        },
        y = (e) => e >= 55296 && e <= 56319,
        x = (e) => e >= 56320 && e <= 57343;
      ((u = n || (n = {}))[(u.None = 0)] = "None"),
        (u[(u.Extend = 1)] = "Extend"),
        (u[(u.ZWJ = 2)] = "ZWJ"),
        (u[(u.RI = 4)] = "RI"),
        (u[(u.Prepend = 8)] = "Prepend"),
        (u[(u.SpacingMark = 16)] = "SpacingMark"),
        (u[(u.L = 32)] = "L"),
        (u[(u.V = 64)] = "V"),
        (u[(u.T = 128)] = "T"),
        (u[(u.LV = 256)] = "LV"),
        (u[(u.LVT = 512)] = "LVT"),
        (u[(u.ExtPict = 1024)] = "ExtPict"),
        (u[(u.Any = 2048)] = "Any");
      var O =
          /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/,
        k =
          /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/,
        P =
          /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/,
        S = /^[\u1100-\u115F\uA960-\uA97C]$/,
        T = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/,
        j = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/,
        N =
          /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/,
        R =
          /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/,
        M =
          /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/,
        K = (e, t) => {
          var r = n.Any;
          return (
            -1 !== e.search(O) && (r |= n.Extend),
            8205 === t && (r |= n.ZWJ),
            t >= 127462 && t <= 127487 && (r |= n.RI),
            -1 !== e.search(k) && (r |= n.Prepend),
            -1 !== e.search(P) && (r |= n.SpacingMark),
            -1 !== e.search(S) && (r |= n.L),
            -1 !== e.search(T) && (r |= n.V),
            -1 !== e.search(j) && (r |= n.T),
            -1 !== e.search(N) && (r |= n.LV),
            -1 !== e.search(R) && (r |= n.LVT),
            -1 !== e.search(M) && (r |= n.ExtPict),
            r
          );
        },
        L = [
          [n.L, n.L | n.V | n.LV | n.LVT],
          [n.LV | n.V, n.V | n.T],
          [n.LVT | n.T, n.T],
          [n.Any, n.Extend | n.ZWJ],
          [n.Any, n.SpacingMark],
          [n.Prepend, n.Any],
          [n.ZWJ, n.ExtPict],
          [n.RI, n.RI],
        ],
        _ =
          /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/,
        W = (e) => -1 !== e.search(_),
        q = /(?:\uD83C[\uDDE6-\uDDFF])+$/g,
        I = (e) => {
          var t = e.match(q);
          return null !== t && (t[0].length / 2) % 2 == 1;
        },
        Q = (e) => (0, a.Q)(e) && et.isNodeList(e.children) && !J.isEditor(e),
        V = {
          isAncestor: (e) => (0, a.Q)(e) && et.isNodeList(e.children),
          isElement: Q,
          isElementList: (e) =>
            Array.isArray(e) && e.every((e) => V.isElement(e)),
          isElementProps: (e) => void 0 !== e.children,
          isElementType: function (e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "type";
            return Q(e) && e[r] === t;
          },
          matches(e, t) {
            for (var r in t) if ("children" !== r && e[r] !== t[r]) return !1;
            return !0;
          },
        },
        z = ["text"],
        H = ["text"];
      function U(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(e);
          t &&
            (u = u.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, u);
        }
        return r;
      }
      function $(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? U(Object(r), !0).forEach(function (t) {
                i(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : U(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      var Y = new WeakMap(),
        J = {
          above(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              {
                voids: r = !1,
                mode: u = "lowest",
                at: n = e.selection,
                match: a,
              } = t;
            if (n) {
              var o = J.path(e, n);
              for (var [i, s] of J.levels(e, {
                at: o,
                voids: r,
                match: a,
                reverse: "lowest" === u,
              }))
                if (!eF.isText(i)) {
                  if (ef.isRange(n)) {
                    if (
                      ea.isAncestor(s, n.anchor.path) &&
                      ea.isAncestor(s, n.focus.path)
                    )
                      return [i, s];
                  } else if (!ea.equals(o, s)) return [i, s];
                }
            }
          },
          addMark(e, t, r) {
            e.addMark(t, r);
          },
          after(e, t) {
            var r,
              u =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              n = J.point(e, t, { edge: "end" }),
              a = J.end(e, []),
              { distance: o = 1 } = u,
              i = 0;
            for (var s of J.positions(
              e,
              $($({}, u), {}, { at: { anchor: n, focus: a } }),
            )) {
              if (i > o) break;
              0 !== i && (r = s), i++;
            }
            return r;
          },
          before(e, t) {
            var r,
              u =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              n = J.start(e, []),
              a = J.point(e, t, { edge: "start" }),
              { distance: o = 1 } = u,
              i = 0;
            for (var s of J.positions(
              e,
              $($({}, u), {}, { at: { anchor: n, focus: a }, reverse: !0 }),
            )) {
              if (i > o) break;
              0 !== i && (r = s), i++;
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
          edges: (e, t) => [J.start(e, t), J.end(e, t)],
          end: (e, t) => J.point(e, t, { edge: "end" }),
          first(e, t) {
            var r = J.path(e, t, { edge: "start" });
            return J.node(e, r);
          },
          fragment(e, t) {
            var r = J.range(e, t);
            return et.fragment(e, r);
          },
          hasBlocks: (e, t) =>
            t.children.some((t) => V.isElement(t) && J.isBlock(e, t)),
          hasInlines: (e, t) =>
            t.children.some((t) => eF.isText(t) || J.isInline(e, t)),
          hasTexts: (e, t) => t.children.every((e) => eF.isText(e)),
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
            var t = Y.get(e);
            if (void 0 !== t) return t;
            if (!(0, a.Q)(e)) return !1;
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
              (null === e.marks || (0, a.Q)(e.marks)) &&
              (null === e.selection || ef.isRange(e.selection)) &&
              et.isNodeList(e.children) &&
              en.isOperationList(e.operations);
            return Y.set(e, r), r;
          },
          isEnd(e, t, r) {
            var u = J.end(e, r);
            return el.equals(t, u);
          },
          isEdge: (e, t, r) => J.isStart(e, t, r) || J.isEnd(e, t, r),
          isEmpty(e, t) {
            var { children: r } = t,
              [u] = r;
            return (
              0 === r.length ||
              (1 === r.length && eF.isText(u) && "" === u.text && !e.isVoid(t))
            );
          },
          isInline: (e, t) => e.isInline(t),
          isNormalizing(e) {
            var t = D.get(e);
            return void 0 === t || t;
          },
          isStart(e, t, r) {
            if (0 !== t.offset) return !1;
            var u = J.start(e, r);
            return el.equals(t, u);
          },
          isVoid: (e, t) => e.isVoid(t),
          last(e, t) {
            var r = J.path(e, t, { edge: "end" });
            return J.node(e, r);
          },
          leaf(e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              u = J.path(e, t, r);
            return [et.leaf(e, u), u];
          },
          *levels(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { at: r = e.selection, reverse: u = !1, voids: n = !1 } = t,
              { match: a } = t;
            if ((null == a && (a = () => !0), r)) {
              var o = [],
                i = J.path(e, r);
              for (var [s, l] of et.levels(e, i))
                if (
                  a(s, l) &&
                  (o.push([s, l]), !n && V.isElement(s) && J.isVoid(e, s))
                )
                  break;
              u && o.reverse(), yield* o;
            }
          },
          marks(e) {
            var { marks: t, selection: r } = e;
            if (!r) return null;
            if (t) return t;
            if (ef.isExpanded(r)) {
              var [u] = J.nodes(e, { match: eF.isText });
              if (!u) return {};
              var [n] = u;
              return v(n, z);
            }
            var { anchor: a } = r,
              { path: o } = a,
              [i] = J.leaf(e, o);
            if (0 === a.offset) {
              var s = J.previous(e, { at: o, match: eF.isText });
              if (
                !J.above(e, {
                  match: (t) =>
                    V.isElement(t) && J.isVoid(e, t) && e.markableVoid(t),
                })
              ) {
                var l = J.above(e, {
                  match: (t) => V.isElement(t) && J.isBlock(e, t),
                });
                if (s && l) {
                  var [c, D] = s,
                    [, d] = l;
                  ea.isAncestor(d, D) && (i = c);
                }
              }
            }
            return v(i, H);
          },
          next(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { mode: r = "lowest", voids: u = !1 } = t,
              { match: n, at: a = e.selection } = t;
            if (a) {
              var o = J.after(e, a, { voids: u });
              if (o) {
                var [, i] = J.last(e, []),
                  s = [o.path, i];
                if (ea.isPath(a) && 0 === a.length)
                  throw Error("Cannot get the next node from the root node!");
                if (null == n)
                  if (ea.isPath(a)) {
                    var [l] = J.parent(e, a);
                    n = (e) => l.children.includes(e);
                  } else n = () => !0;
                var [c] = J.nodes(e, { at: s, match: n, mode: r, voids: u });
                return c;
              }
            }
          },
          node(e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              u = J.path(e, t, r);
            return [et.get(e, u), u];
          },
          *nodes(e) {
            var t,
              r,
              u,
              n =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              {
                at: a = e.selection,
                mode: o = "all",
                universal: i = !1,
                reverse: s = !1,
                voids: l = !1,
              } = n,
              { match: c } = n;
            if ((c || (c = () => !0), a)) {
              if (Z.isSpan(a)) (t = a[0]), (r = a[1]);
              else {
                var D = J.path(e, a, { edge: "start" }),
                  d = J.path(e, a, { edge: "end" });
                (t = s ? d : D), (r = s ? D : d);
              }
              var f = et.nodes(e, {
                  reverse: s,
                  from: t,
                  to: r,
                  pass: (t) => {
                    var [r] = t;
                    return !l && V.isElement(r) && J.isVoid(e, r);
                  },
                }),
                C = [];
              for (var [h, B] of f) {
                var v = u && 0 === ea.compare(B, u[1]);
                if ("highest" !== o || !v) {
                  if (!c(h, B))
                    if (i && !v && eF.isText(h)) return;
                    else continue;
                  if ("lowest" === o && v) {
                    u = [h, B];
                    continue;
                  }
                  var p = "lowest" === o ? u : [h, B];
                  p && (i ? C.push(p) : yield p), (u = [h, B]);
                }
              }
              "lowest" === o && u && (i ? C.push(u) : yield u), i && (yield* C);
            }
          },
          normalize(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { force: r = !1, operation: u } = t,
              n = (e) => s.get(e) || [],
              a = (e) => {
                var t = n(e).pop(),
                  r = t.join(",");
                return (l.get(e) || new Set()).delete(r), t;
              };
            if (J.isNormalizing(e)) {
              if (r) {
                var o = Array.from(et.nodes(e), (e) => {
                    var [, t] = e;
                    return t;
                  }),
                  i = new Set(o.map((e) => e.join(",")));
                s.set(e, o), l.set(e, i);
              }
              0 !== n(e).length &&
                J.withoutNormalizing(e, () => {
                  for (var t of n(e))
                    if (et.has(e, t)) {
                      var r = J.node(e, t),
                        [o, i] = r;
                      V.isElement(o) &&
                        0 === o.children.length &&
                        e.normalizeNode(r, { operation: u });
                    }
                  for (var s = n(e), l = s.length, c = 0; 0 !== s.length; ) {
                    if (
                      !e.shouldNormalize({
                        dirtyPaths: s,
                        iteration: c,
                        initialDirtyPathsLength: l,
                        operation: u,
                      })
                    )
                      return;
                    var D = a(e);
                    if (et.has(e, D)) {
                      var d = J.node(e, D);
                      e.normalizeNode(d, { operation: u });
                    }
                    c++, (s = n(e));
                  }
                });
            }
          },
          parent(e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              u = J.path(e, t, r),
              n = ea.parent(u);
            return J.node(e, n);
          },
          path(e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { depth: u, edge: n } = r;
            if (ea.isPath(t)) {
              if ("start" === n) {
                var [, a] = et.first(e, t);
                t = a;
              } else if ("end" === n) {
                var [, o] = et.last(e, t);
                t = o;
              }
            }
            return (
              ef.isRange(t) &&
                (t =
                  "start" === n
                    ? ef.start(t)
                    : "end" === n
                      ? ef.end(t)
                      : ea.common(t.anchor.path, t.focus.path)),
              el.isPoint(t) && (t = t.path),
              null != u && (t = t.slice(0, u)),
              t
            );
          },
          hasPath: (e, t) => et.has(e, t),
          pathRef(e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { affinity: u = "forward" } = r,
              n = {
                current: t,
                affinity: u,
                unref() {
                  var { current: t } = n;
                  return J.pathRefs(e).delete(n), (n.current = null), t;
                },
              };
            return J.pathRefs(e).add(n), n;
          },
          pathRefs(e) {
            var t = d.get(e);
            return t || ((t = new Set()), d.set(e, t)), t;
          },
          point(e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { edge: u = "start" } = r;
            if (ea.isPath(t)) {
              if ("end" === u) {
                var n,
                  [, a] = et.last(e, t);
                n = a;
              } else {
                var [, o] = et.first(e, t);
                n = o;
              }
              var i = et.get(e, n);
              if (!eF.isText(i))
                throw Error(
                  "Cannot get the "
                    .concat(u, " point in the node at path [")
                    .concat(t, "] because it has no ")
                    .concat(u, " text node."),
                );
              return { path: n, offset: "end" === u ? i.text.length : 0 };
            }
            if (ef.isRange(t)) {
              var [s, l] = ef.edges(t);
              return "start" === u ? s : l;
            }
            return t;
          },
          pointRef(e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { affinity: u = "forward" } = r,
              n = {
                current: t,
                affinity: u,
                unref() {
                  var { current: t } = n;
                  return J.pointRefs(e).delete(n), (n.current = null), t;
                },
              };
            return J.pointRefs(e).add(n), n;
          },
          pointRefs(e) {
            var t = f.get(e);
            return t || ((t = new Set()), f.set(e, t)), t;
          },
          *positions(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              {
                at: r = e.selection,
                unit: u = "offset",
                reverse: n = !1,
                voids: a = !1,
              } = t;
            if (r) {
              var o = J.range(e, r),
                [i, s] = ef.edges(o),
                l = n ? s : i,
                c = !1,
                D = "",
                d = 0,
                f = 0,
                C = 0;
              for (var [h, B] of J.nodes(e, { at: r, reverse: n, voids: a })) {
                if (V.isElement(h)) {
                  if (!a && e.isVoid(h)) {
                    yield J.start(e, B);
                    continue;
                  }
                  if (e.isInline(h)) continue;
                  if (J.hasInlines(e, h)) {
                    var v = ea.isAncestor(B, s.path) ? s : J.end(e, B),
                      g = ea.isAncestor(B, i.path) ? i : J.start(e, B);
                    (D = J.string(e, { anchor: g, focus: v }, { voids: a })),
                      (c = !0);
                  }
                }
                if (eF.isText(h)) {
                  var E,
                    A,
                    w,
                    b = ea.equals(B, l.path);
                  for (
                    b
                      ? ((f = n ? l.offset : h.text.length - l.offset),
                        (C = l.offset))
                      : ((f = h.text.length), (C = n ? f : 0)),
                      (b || c || "offset" === u) &&
                        (yield { path: B, offset: C }, (c = !1));
                    ;

                  ) {
                    if (0 === d) {
                      if ("" === D) break;
                      (E = D),
                        (A = u),
                        (w = n),
                        (D = m(
                          D,
                          (d =
                            "character" === A
                              ? p(E, w)
                              : "word" === A
                                ? F(E, w)
                                : "line" === A || "block" === A
                                  ? E.length
                                  : 1),
                          n,
                        )[1]);
                    }
                    if (((C = n ? C - d : C + d), (f -= d) < 0)) {
                      d = -f;
                      break;
                    }
                    (d = 0), yield { path: B, offset: C };
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
              { mode: r = "lowest", voids: u = !1 } = t,
              { match: n, at: a = e.selection } = t;
            if (a) {
              var o = J.before(e, a, { voids: u });
              if (o) {
                var [, i] = J.first(e, []),
                  s = [o.path, i];
                if (ea.isPath(a) && 0 === a.length)
                  throw Error(
                    "Cannot get the previous node from the root node!",
                  );
                if (null == n)
                  if (ea.isPath(a)) {
                    var [l] = J.parent(e, a);
                    n = (e) => l.children.includes(e);
                  } else n = () => !0;
                var [c] = J.nodes(e, {
                  reverse: !0,
                  at: s,
                  match: n,
                  mode: r,
                  voids: u,
                });
                return c;
              }
            }
          },
          range: (e, t, r) =>
            ef.isRange(t) && !r
              ? t
              : { anchor: J.start(e, t), focus: J.end(e, r || t) },
          rangeRef(e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { affinity: u = "forward" } = r,
              n = {
                current: t,
                affinity: u,
                unref() {
                  var { current: t } = n;
                  return J.rangeRefs(e).delete(n), (n.current = null), t;
                },
              };
            return J.rangeRefs(e).add(n), n;
          },
          rangeRefs(e) {
            var t = C.get(e);
            return t || ((t = new Set()), C.set(e, t)), t;
          },
          removeMark(e, t) {
            e.removeMark(t);
          },
          setNormalizing(e, t) {
            D.set(e, t);
          },
          start: (e, t) => J.point(e, t, { edge: "start" }),
          string(e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { voids: u = !1 } = r,
              n = J.range(e, t),
              [a, o] = ef.edges(n),
              i = "";
            for (var [s, l] of J.nodes(e, {
              at: n,
              match: eF.isText,
              voids: u,
            })) {
              var c = s.text;
              ea.equals(l, o.path) && (c = c.slice(0, o.offset)),
                ea.equals(l, a.path) && (c = c.slice(a.offset)),
                (i += c);
            }
            return i;
          },
          unhangRange(e, t) {
            var r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { voids: u = !1 } = r,
              [n, a] = ef.edges(t);
            if (
              0 !== n.offset ||
              0 !== a.offset ||
              ef.isCollapsed(t) ||
              ea.hasPrevious(a.path)
            )
              return t;
            var o = J.above(e, {
                at: a,
                match: (t) => V.isElement(t) && J.isBlock(e, t),
                voids: u,
              }),
              i = o ? o[1] : [],
              s = { anchor: J.start(e, n), focus: a },
              l = !0;
            for (var [c, D] of J.nodes(e, {
              at: s,
              match: eF.isText,
              reverse: !0,
              voids: u,
            })) {
              if (l) {
                l = !1;
                continue;
              }
              if ("" !== c.text || ea.isBefore(D, i)) {
                a = { path: D, offset: c.text.length };
                break;
              }
            }
            return { anchor: n, focus: a };
          },
          void(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            return J.above(
              e,
              $(
                $({}, t),
                {},
                { match: (t) => V.isElement(t) && J.isVoid(e, t) },
              ),
            );
          },
          withoutNormalizing(e, t) {
            var r = J.isNormalizing(e);
            J.setNormalizing(e, !1);
            try {
              t();
            } finally {
              J.setNormalizing(e, r);
            }
            J.normalize(e);
          },
        },
        Z = {
          isSpan: (e) =>
            Array.isArray(e) && 2 === e.length && e.every(ea.isPath),
        },
        X = ["children"],
        G = ["text"],
        ee = new WeakMap(),
        et = {
          ancestor(e, t) {
            var r = et.get(e, t);
            if (eF.isText(r))
              throw Error(
                "Cannot get the ancestor node at path ["
                  .concat(t, "] because it refers to a text node instead: ")
                  .concat(eB.stringify(r)),
              );
            return r;
          },
          *ancestors(e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            for (var u of ea.ancestors(t, r)) {
              var n = [et.ancestor(e, u), u];
              yield n;
            }
          },
          child(e, t) {
            if (eF.isText(e))
              throw Error(
                "Cannot get the child of a text node: ".concat(eB.stringify(e)),
              );
            var r = e.children[t];
            if (null == r)
              throw Error(
                "Cannot get child at index `"
                  .concat(t, "` in node: ")
                  .concat(eB.stringify(e)),
              );
            return r;
          },
          *children(e, t) {
            for (
              var r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                { reverse: u = !1 } = r,
                n = et.ancestor(e, t),
                { children: a } = n,
                o = u ? a.length - 1 : 0;
              u ? o >= 0 : o < a.length;

            ) {
              var i = et.child(n, o),
                s = t.concat(o);
              yield [i, s], (o = u ? o - 1 : o + 1);
            }
          },
          common(e, t, r) {
            var u = ea.common(t, r);
            return [et.get(e, u), u];
          },
          descendant(e, t) {
            var r = et.get(e, t);
            if (J.isEditor(r))
              throw Error(
                "Cannot get the descendant node at path ["
                  .concat(
                    t,
                    "] because it refers to the root editor node instead: ",
                  )
                  .concat(eB.stringify(r)),
              );
            return r;
          },
          *descendants(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            for (var [r, u] of et.nodes(e, t)) 0 !== u.length && (yield [r, u]);
          },
          *elements(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            for (var [r, u] of et.nodes(e, t)) V.isElement(r) && (yield [r, u]);
          },
          extractProps(e) {
            if (V.isAncestor(e)) {
              var t = v(e, X);
              return t;
            }
            var t = v(e, G);
            return t;
          },
          first(e, t) {
            for (var r = t.slice(), u = et.get(e, r); u; )
              if (eF.isText(u) || 0 === u.children.length) break;
              else (u = u.children[0]), r.push(0);
            return [u, r];
          },
          fragment(e, t) {
            if (eF.isText(e))
              throw Error(
                "Cannot get a fragment starting from a root text node: ".concat(
                  eB.stringify(e),
                ),
              );
            return (0, o.jM)({ children: e.children }, (e) => {
              var [r, u] = ef.edges(t);
              for (var [, n] of et.nodes(e, {
                reverse: !0,
                pass: (e) => {
                  var [, r] = e;
                  return !ef.includes(t, r);
                },
              })) {
                if (!ef.includes(t, n)) {
                  var a = et.parent(e, n),
                    o = n[n.length - 1];
                  a.children.splice(o, 1);
                }
                if (ea.equals(n, u.path)) {
                  var i = et.leaf(e, n);
                  i.text = i.text.slice(0, u.offset);
                }
                if (ea.equals(n, r.path)) {
                  var s = et.leaf(e, n);
                  s.text = s.text.slice(r.offset);
                }
              }
              J.isEditor(e) && (e.selection = null);
            }).children;
          },
          get(e, t) {
            for (var r = e, u = 0; u < t.length; u++) {
              var n = t[u];
              if (eF.isText(r) || !r.children[n])
                throw Error(
                  "Cannot find a descendant at path ["
                    .concat(t, "] in node: ")
                    .concat(eB.stringify(e)),
                );
              r = r.children[n];
            }
            return r;
          },
          has(e, t) {
            for (var r = e, u = 0; u < t.length; u++) {
              var n = t[u];
              if (eF.isText(r) || !r.children[n]) return !1;
              r = r.children[n];
            }
            return !0;
          },
          isNode: (e) => eF.isText(e) || V.isElement(e) || J.isEditor(e),
          isNodeList(e) {
            if (!Array.isArray(e)) return !1;
            var t = ee.get(e);
            if (void 0 !== t) return t;
            var r = e.every((e) => et.isNode(e));
            return ee.set(e, r), r;
          },
          last(e, t) {
            for (var r = t.slice(), u = et.get(e, r); u; )
              if (eF.isText(u) || 0 === u.children.length) break;
              else {
                var n = u.children.length - 1;
                (u = u.children[n]), r.push(n);
              }
            return [u, r];
          },
          leaf(e, t) {
            var r = et.get(e, t);
            if (!eF.isText(r))
              throw Error(
                "Cannot get the leaf node at path ["
                  .concat(t, "] because it refers to a non-leaf node: ")
                  .concat(eB.stringify(r)),
              );
            return r;
          },
          *levels(e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            for (var u of ea.levels(t, r)) {
              var n = et.get(e, u);
              yield [n, u];
            }
          },
          matches: (e, t) =>
            (V.isElement(e) && V.isElementProps(t) && V.matches(e, t)) ||
            (eF.isText(e) && eF.isTextProps(t) && eF.matches(e, t)),
          *nodes(e) {
            for (
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                { pass: r, reverse: u = !1 } = t,
                { from: n = [], to: a } = t,
                o = new Set(),
                i = [],
                s = e;
              !(a && (u ? ea.isBefore(i, a) : ea.isAfter(i, a)));

            ) {
              if (
                (o.has(s) || (yield [s, i]),
                !o.has(s) &&
                  !eF.isText(s) &&
                  0 !== s.children.length &&
                  (null == r || !1 === r([s, i])))
              ) {
                o.add(s);
                var l = u ? s.children.length - 1 : 0;
                ea.isAncestor(i, n) && (l = n[i.length]),
                  (i = i.concat(l)),
                  (s = et.get(e, i));
                continue;
              }
              if (0 === i.length) break;
              if (!u) {
                var c = ea.next(i);
                if (et.has(e, c)) {
                  (i = c), (s = et.get(e, i));
                  continue;
                }
              }
              if (u && 0 !== i[i.length - 1]) {
                (i = ea.previous(i)), (s = et.get(e, i));
                continue;
              }
              (i = ea.parent(i)), (s = et.get(e, i)), o.add(s);
            }
          },
          parent(e, t) {
            var r = ea.parent(t),
              u = et.get(e, r);
            if (eF.isText(u))
              throw Error(
                "Cannot get the parent of path [".concat(
                  t,
                  "] because it does not exist in the root.",
                ),
              );
            return u;
          },
          string: (e) =>
            eF.isText(e) ? e.text : e.children.map(et.string).join(""),
          *texts(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            for (var [r, u] of et.nodes(e, t)) eF.isText(r) && (yield [r, u]);
          },
        };
      function er(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(e);
          t &&
            (u = u.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, u);
        }
        return r;
      }
      function eu(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? er(Object(r), !0).forEach(function (t) {
                i(e, t, r[t]);
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
      var en = {
          isNodeOperation: (e) => en.isOperation(e) && e.type.endsWith("_node"),
          isOperation(e) {
            if (!(0, a.Q)(e)) return !1;
            switch (e.type) {
              case "insert_node":
              case "remove_node":
                return ea.isPath(e.path) && et.isNode(e.node);
              case "insert_text":
              case "remove_text":
                return (
                  "number" == typeof e.offset &&
                  "string" == typeof e.text &&
                  ea.isPath(e.path)
                );
              case "merge_node":
                return (
                  "number" == typeof e.position &&
                  ea.isPath(e.path) &&
                  (0, a.Q)(e.properties)
                );
              case "move_node":
                return ea.isPath(e.path) && ea.isPath(e.newPath);
              case "set_node":
                return (
                  ea.isPath(e.path) &&
                  (0, a.Q)(e.properties) &&
                  (0, a.Q)(e.newProperties)
                );
              case "set_selection":
                return (
                  (null === e.properties && ef.isRange(e.newProperties)) ||
                  (null === e.newProperties && ef.isRange(e.properties)) ||
                  ((0, a.Q)(e.properties) && (0, a.Q)(e.newProperties))
                );
              case "split_node":
                return (
                  ea.isPath(e.path) &&
                  "number" == typeof e.position &&
                  (0, a.Q)(e.properties)
                );
              default:
                return !1;
            }
          },
          isOperationList: (e) =>
            Array.isArray(e) && e.every((e) => en.isOperation(e)),
          isSelectionOperation: (e) =>
            en.isOperation(e) && e.type.endsWith("_selection"),
          isTextOperation: (e) => en.isOperation(e) && e.type.endsWith("_text"),
          inverse(e) {
            switch (e.type) {
              case "insert_node":
                return eu(eu({}, e), {}, { type: "remove_node" });
              case "insert_text":
                return eu(eu({}, e), {}, { type: "remove_text" });
              case "merge_node":
                return eu(
                  eu({}, e),
                  {},
                  { type: "split_node", path: ea.previous(e.path) },
                );
              case "move_node":
                var { newPath: t, path: r } = e;
                if (ea.equals(t, r)) return e;
                if (ea.isSibling(r, t))
                  return eu(eu({}, e), {}, { path: t, newPath: r });
                var u = ea.transform(r, e),
                  n = ea.transform(ea.next(r), e);
                return eu(eu({}, e), {}, { path: u, newPath: n });
              case "remove_node":
                return eu(eu({}, e), {}, { type: "insert_node" });
              case "remove_text":
                return eu(eu({}, e), {}, { type: "insert_text" });
              case "set_node":
                var { properties: a, newProperties: o } = e;
                return eu(eu({}, e), {}, { properties: o, newProperties: a });
              case "set_selection":
                var { properties: i, newProperties: s } = e;
                if (null == i)
                  return eu(
                    eu({}, e),
                    {},
                    { properties: s, newProperties: null },
                  );
                if (null == s)
                  return eu(
                    eu({}, e),
                    {},
                    { properties: null, newProperties: i },
                  );
                return eu(eu({}, e), {}, { properties: s, newProperties: i });
              case "split_node":
                return eu(
                  eu({}, e),
                  {},
                  { type: "merge_node", path: ea.next(e.path) },
                );
            }
          },
        },
        ea = {
          ancestors(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { reverse: r = !1 } = t,
              u = ea.levels(e, t);
            return r ? u.slice(1) : u.slice(0, -1);
          },
          common(e, t) {
            for (var r = [], u = 0; u < e.length && u < t.length; u++) {
              var n = e[u];
              if (n !== t[u]) break;
              r.push(n);
            }
            return r;
          },
          compare(e, t) {
            for (var r = Math.min(e.length, t.length), u = 0; u < r; u++) {
              if (e[u] < t[u]) return -1;
              if (e[u] > t[u]) return 1;
            }
            return 0;
          },
          endsAfter(e, t) {
            var r = e.length - 1,
              u = e.slice(0, r),
              n = t.slice(0, r),
              a = e[r],
              o = t[r];
            return ea.equals(u, n) && a > o;
          },
          endsAt(e, t) {
            var r = e.length,
              u = e.slice(0, r),
              n = t.slice(0, r);
            return ea.equals(u, n);
          },
          endsBefore(e, t) {
            var r = e.length - 1,
              u = e.slice(0, r),
              n = t.slice(0, r),
              a = e[r],
              o = t[r];
            return ea.equals(u, n) && a < o;
          },
          equals: (e, t) =>
            e.length === t.length && e.every((e, r) => e === t[r]),
          hasPrevious: (e) => e[e.length - 1] > 0,
          isAfter: (e, t) => 1 === ea.compare(e, t),
          isAncestor: (e, t) => e.length < t.length && 0 === ea.compare(e, t),
          isBefore: (e, t) => -1 === ea.compare(e, t),
          isChild: (e, t) =>
            e.length === t.length + 1 && 0 === ea.compare(e, t),
          isCommon: (e, t) => e.length <= t.length && 0 === ea.compare(e, t),
          isDescendant: (e, t) => e.length > t.length && 0 === ea.compare(e, t),
          isParent: (e, t) =>
            e.length + 1 === t.length && 0 === ea.compare(e, t),
          isPath: (e) =>
            Array.isArray(e) && (0 === e.length || "number" == typeof e[0]),
          isSibling(e, t) {
            if (e.length !== t.length) return !1;
            var r = e.slice(0, -1),
              u = t.slice(0, -1);
            return e[e.length - 1] !== t[t.length - 1] && ea.equals(r, u);
          },
          levels(e) {
            for (
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                { reverse: r = !1 } = t,
                u = [],
                n = 0;
              n <= e.length;
              n++
            )
              u.push(e.slice(0, n));
            return r && u.reverse(), u;
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
            if (!ea.isAncestor(t, e) && !ea.equals(e, t))
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
            var u = [...e],
              { affinity: n = "forward" } = r;
            if (0 === e.length) return u;
            switch (t.type) {
              case "insert_node":
                var { path: a } = t;
                (ea.equals(a, u) ||
                  ea.endsBefore(a, u) ||
                  ea.isAncestor(a, u)) &&
                  (u[a.length - 1] += 1);
                break;
              case "remove_node":
                var { path: o } = t;
                if (ea.equals(o, u) || ea.isAncestor(o, u)) return null;
                ea.endsBefore(o, u) && (u[o.length - 1] -= 1);
                break;
              case "merge_node":
                var { path: i, position: s } = t;
                ea.equals(i, u) || ea.endsBefore(i, u)
                  ? (u[i.length - 1] -= 1)
                  : ea.isAncestor(i, u) &&
                    ((u[i.length - 1] -= 1), (u[i.length] += s));
                break;
              case "split_node":
                var { path: l, position: c } = t;
                if (ea.equals(l, u)) {
                  if ("forward" === n) u[u.length - 1] += 1;
                  else if ("backward" !== n) return null;
                } else
                  ea.endsBefore(l, u)
                    ? (u[l.length - 1] += 1)
                    : ea.isAncestor(l, u) &&
                      e[l.length] >= c &&
                      ((u[l.length - 1] += 1), (u[l.length] -= c));
                break;
              case "move_node":
                var { path: D, newPath: d } = t;
                if (ea.equals(D, d)) break;
                if (ea.isAncestor(D, u) || ea.equals(D, u)) {
                  var f = d.slice();
                  return (
                    ea.endsBefore(D, d) &&
                      D.length < d.length &&
                      (f[D.length - 1] -= 1),
                    f.concat(u.slice(D.length))
                  );
                }
                ea.isSibling(D, d) && (ea.isAncestor(d, u) || ea.equals(d, u))
                  ? ea.endsBefore(D, u)
                    ? (u[D.length - 1] -= 1)
                    : (u[D.length - 1] += 1)
                  : ea.endsBefore(d, u) ||
                      ea.equals(d, u) ||
                      ea.isAncestor(d, u)
                    ? (ea.endsBefore(D, u) && (u[D.length - 1] -= 1),
                      (u[d.length - 1] += 1))
                    : ea.endsBefore(D, u) &&
                      (ea.equals(d, u) && (u[d.length - 1] += 1),
                      (u[D.length - 1] -= 1));
            }
            return u;
          },
        },
        eo = {
          transform(e, t) {
            var { current: r, affinity: u } = e;
            if (null != r) {
              var n = ea.transform(r, t, { affinity: u });
              (e.current = n), null == n && e.unref();
            }
          },
        };
      function ei(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(e);
          t &&
            (u = u.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, u);
        }
        return r;
      }
      function es(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ei(Object(r), !0).forEach(function (t) {
                i(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ei(Object(r)).forEach(function (t) {
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
            var r = ea.compare(e.path, t.path);
            return 0 === r
              ? e.offset < t.offset
                ? -1
                : +(e.offset > t.offset)
              : r;
          },
          isAfter: (e, t) => 1 === el.compare(e, t),
          isBefore: (e, t) => -1 === el.compare(e, t),
          equals: (e, t) => e.offset === t.offset && ea.equals(e.path, t.path),
          isPoint: (e) =>
            (0, a.Q)(e) && "number" == typeof e.offset && ea.isPath(e.path),
          transform(e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            return (0, o.jM)(e, (e) => {
              if (null === e) return null;
              var { affinity: u = "forward" } = r,
                { path: n, offset: a } = e;
              switch (t.type) {
                case "insert_node":
                case "move_node":
                  e.path = ea.transform(n, t, r);
                  break;
                case "insert_text":
                  ea.equals(t.path, n) &&
                    (t.offset < a || (t.offset === a && "forward" === u)) &&
                    (e.offset += t.text.length);
                  break;
                case "merge_node":
                  ea.equals(t.path, n) && (e.offset += t.position),
                    (e.path = ea.transform(n, t, r));
                  break;
                case "remove_text":
                  ea.equals(t.path, n) &&
                    t.offset <= a &&
                    (e.offset -= Math.min(a - t.offset, t.text.length));
                  break;
                case "remove_node":
                  if (ea.equals(t.path, n) || ea.isAncestor(t.path, n))
                    return null;
                  e.path = ea.transform(n, t, r);
                  break;
                case "split_node":
                  if (ea.equals(t.path, n))
                    if (t.position === a && null == u) return null;
                    else
                      (t.position < a ||
                        (t.position === a && "forward" === u)) &&
                        ((e.offset -= t.position),
                        (e.path = ea.transform(
                          n,
                          t,
                          es(es({}, r), {}, { affinity: "forward" }),
                        )));
                  else e.path = ea.transform(n, t, r);
              }
            });
          },
        },
        ec = {
          transform(e, t) {
            var { current: r, affinity: u } = e;
            if (null != r) {
              var n = el.transform(r, t, { affinity: u });
              (e.current = n), null == n && e.unref();
            }
          },
        },
        eD = ["anchor", "focus"];
      function ed(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(e);
          t &&
            (u = u.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, u);
        }
        return r;
      }
      var ef = {
          edges(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { reverse: r = !1 } = t,
              { anchor: u, focus: n } = e;
            return ef.isBackward(e) === r ? [u, n] : [n, u];
          },
          end(e) {
            var [, t] = ef.edges(e);
            return t;
          },
          equals: (e, t) =>
            el.equals(e.anchor, t.anchor) && el.equals(e.focus, t.focus),
          includes(e, t) {
            if (ef.isRange(t)) {
              if (ef.includes(e, t.anchor) || ef.includes(e, t.focus))
                return !0;
              var [r, u] = ef.edges(e),
                [n, a] = ef.edges(t);
              return el.isBefore(r, n) && el.isAfter(u, a);
            }
            var [o, i] = ef.edges(e),
              s = !1,
              l = !1;
            return (
              el.isPoint(t)
                ? ((s = el.compare(t, o) >= 0), (l = 0 >= el.compare(t, i)))
                : ((s = ea.compare(t, o.path) >= 0),
                  (l = 0 >= ea.compare(t, i.path))),
              s && l
            );
          },
          intersection(e, t) {
            var r = v(e, eD),
              [u, n] = ef.edges(e),
              [a, o] = ef.edges(t),
              s = el.isBefore(u, a) ? a : u,
              l = el.isBefore(n, o) ? n : o;
            return el.isBefore(l, s)
              ? null
              : (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? ed(Object(r), !0).forEach(function (t) {
                          i(e, t, r[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(r),
                          )
                        : ed(Object(r)).forEach(function (t) {
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
          isExpanded: (e) => !ef.isCollapsed(e),
          isForward: (e) => !ef.isBackward(e),
          isRange: (e) =>
            (0, a.Q)(e) && el.isPoint(e.anchor) && el.isPoint(e.focus),
          *points(e) {
            yield [e.anchor, "anchor"], yield [e.focus, "focus"];
          },
          start(e) {
            var [t] = ef.edges(e);
            return t;
          },
          transform(e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            return (0, o.jM)(e, (e) => {
              if (null === e) return null;
              var u,
                n,
                { affinity: a = "inward" } = r;
              if ("inward" === a) {
                var o = ef.isCollapsed(e);
                ef.isForward(e)
                  ? ((u = "forward"), (n = o ? u : "backward"))
                  : ((u = "backward"), (n = o ? u : "forward"));
              } else
                "outward" === a
                  ? ef.isForward(e)
                    ? ((u = "backward"), (n = "forward"))
                    : ((u = "forward"), (n = "backward"))
                  : ((u = a), (n = a));
              var i = el.transform(e.anchor, t, { affinity: u }),
                s = el.transform(e.focus, t, { affinity: n });
              if (!i || !s) return null;
              (e.anchor = i), (e.focus = s);
            });
          },
        },
        eC = {
          transform(e, t) {
            var { current: r, affinity: u } = e;
            if (null != r) {
              var n = ef.transform(r, t, { affinity: u });
              (e.current = n), null == n && e.unref();
            }
          },
        },
        eh = void 0,
        eB = {
          setScrubber(e) {
            eh = e;
          },
          stringify: (e) => JSON.stringify(e, eh),
        },
        ev = (e, t) => {
          for (var r in e) {
            var u = e[r],
              n = t[r];
            if ((0, a.Q)(u) && (0, a.Q)(n)) {
              if (!ev(u, n)) return !1;
            } else if (Array.isArray(u) && Array.isArray(n)) {
              if (u.length !== n.length) return !1;
              for (var o = 0; o < u.length; o++) if (u[o] !== n[o]) return !1;
            } else if (u !== n) return !1;
          }
          for (var i in t) if (void 0 === e[i] && void 0 !== t[i]) return !1;
          return !0;
        },
        ep = ["text"],
        eg = ["anchor", "focus"];
      function eE(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(e);
          t &&
            (u = u.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, u);
        }
        return r;
      }
      function eA(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eE(Object(r), !0).forEach(function (t) {
                i(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : eE(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      var eF = {
        equals(e, t) {
          var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            { loose: u = !1 } = r;
          return ev(u ? v(e, ep) : e, u ? v(t, ep) : t);
        },
        isText: (e) => (0, a.Q)(e) && "string" == typeof e.text,
        isTextList: (e) => Array.isArray(e) && e.every((e) => eF.isText(e)),
        isTextProps: (e) => void 0 !== e.text,
        matches(e, t) {
          for (var r in t)
            if ("text" !== r && (!e.hasOwnProperty(r) || e[r] !== t[r]))
              return !1;
          return !0;
        },
        decorations(e, t) {
          var r = [eA({}, e)];
          for (var u of t) {
            var n = v(u, eg),
              [a, o] = ef.edges(u),
              i = [],
              s = 0,
              l = a.offset,
              c = o.offset;
            for (var D of r) {
              var { length: d } = D.text,
                f = s;
              if (((s += d), l <= f && s <= c)) {
                Object.assign(D, n), i.push(D);
                continue;
              }
              if (
                (l !== c && (l === s || c === f)) ||
                l > s ||
                c < f ||
                (c === f && 0 !== f)
              ) {
                i.push(D);
                continue;
              }
              var C = D,
                h = void 0,
                B = void 0;
              if (c < s) {
                var p = c - f;
                (B = eA(eA({}, C), {}, { text: C.text.slice(p) })),
                  (C = eA(eA({}, C), {}, { text: C.text.slice(0, p) }));
              }
              if (l > f) {
                var g = l - f;
                (h = eA(eA({}, C), {}, { text: C.text.slice(0, g) })),
                  (C = eA(eA({}, C), {}, { text: C.text.slice(g) }));
              }
              Object.assign(C, n), h && i.push(h), i.push(C), B && i.push(B);
            }
            r = i;
          }
          return r;
        },
      };
      function em(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(e);
          t &&
            (u = u.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, u);
        }
        return r;
      }
      function ew(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? em(Object(r), !0).forEach(function (t) {
                i(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : em(Object(r)).forEach(function (t) {
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
        ey = ["children"];
      function ex(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(e);
          t &&
            (u = u.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, u);
        }
        return r;
      }
      function eO(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ex(Object(r), !0).forEach(function (t) {
                i(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ex(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      var ek = (e, t) =>
          V.isElement(t)
            ? !!J.isVoid(e, t) ||
              (1 === t.children.length && ek(e, t.children[0]))
            : !J.isEditor(t) && !0,
        eP = (e, t) => {
          var [r] = J.node(e, t);
          return (e) => e === r;
        };
      function eS(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(e);
          t &&
            (u = u.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, u);
        }
        return r;
      }
      function eT(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eS(Object(r), !0).forEach(function (t) {
                i(e, t, r[t]);
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
      function ej(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(e);
          t &&
            (u = u.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            r.push.apply(r, u);
        }
        return r;
      }
      function eN(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ej(Object(r), !0).forEach(function (t) {
                i(e, t, r[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
              : ej(Object(r)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(r, t),
                  );
                });
        }
        return e;
      }
      var eR = eN(
        eN(
          eN(
            eN(
              {},
              {
                transform(e, t) {
                  e.children = (0, o.mq)(e.children);
                  var r = e.selection && (0, o.mq)(e.selection);
                  try {
                    r = ((e, t, r) => {
                      switch (r.type) {
                        case "insert_node":
                          var { path: u, node: n } = r,
                            a = et.parent(e, u),
                            o = u[u.length - 1];
                          if (o > a.children.length)
                            throw Error(
                              'Cannot apply an "insert_node" operation at path ['.concat(
                                u,
                                "] because the destination is past the end of the node.",
                              ),
                            );
                          if ((a.children.splice(o, 0, n), t))
                            for (var [i, s] of ef.points(t))
                              t[s] = el.transform(i, r);
                          break;
                        case "insert_text":
                          var { path: l, offset: c, text: D } = r;
                          if (0 === D.length) break;
                          var d = et.leaf(e, l),
                            f = d.text.slice(0, c),
                            C = d.text.slice(c);
                          if (((d.text = f + D + C), t))
                            for (var [h, B] of ef.points(t))
                              t[B] = el.transform(h, r);
                          break;
                        case "merge_node":
                          var { path: v } = r,
                            p = et.get(e, v),
                            g = ea.previous(v),
                            E = et.get(e, g),
                            A = et.parent(e, v),
                            F = v[v.length - 1];
                          if (eF.isText(p) && eF.isText(E)) E.text += p.text;
                          else if (eF.isText(p) || eF.isText(E))
                            throw Error(
                              'Cannot apply a "merge_node" operation at path ['
                                .concat(
                                  v,
                                  "] to nodes of different interfaces: ",
                                )
                                .concat(eB.stringify(p), " ")
                                .concat(eB.stringify(E)),
                            );
                          else E.children.push(...p.children);
                          if ((A.children.splice(F, 1), t))
                            for (var [m, w] of ef.points(t))
                              t[w] = el.transform(m, r);
                          break;
                        case "move_node":
                          var { path: b, newPath: y } = r;
                          if (ea.isAncestor(b, y))
                            throw Error(
                              "Cannot move a path ["
                                .concat(b, "] to new path [")
                                .concat(
                                  y,
                                  "] because the destination is inside itself.",
                                ),
                            );
                          var x = et.get(e, b),
                            O = et.parent(e, b),
                            k = b[b.length - 1];
                          O.children.splice(k, 1);
                          var P = ea.transform(b, r),
                            S = et.get(e, ea.parent(P)),
                            T = P[P.length - 1];
                          if ((S.children.splice(T, 0, x), t))
                            for (var [j, N] of ef.points(t))
                              t[N] = el.transform(j, r);
                          break;
                        case "remove_node":
                          var { path: R } = r,
                            M = R[R.length - 1];
                          if ((et.parent(e, R).children.splice(M, 1), t))
                            for (var [K, L] of ef.points(t)) {
                              var _ = el.transform(K, r);
                              if (null != t && null != _) t[L] = _;
                              else {
                                var W = void 0,
                                  q = void 0;
                                for (var [I, Q] of et.texts(e))
                                  if (-1 === ea.compare(Q, R)) W = [I, Q];
                                  else {
                                    q = [I, Q];
                                    break;
                                  }
                                var V = !1;
                                W &&
                                  q &&
                                  (V = ea.equals(q[1], R)
                                    ? !ea.hasPrevious(q[1])
                                    : ea.common(W[1], R).length <
                                      ea.common(q[1], R).length),
                                  W && !V
                                    ? ((K.path = W[1]),
                                      (K.offset = W[0].text.length))
                                    : q
                                      ? ((K.path = q[1]), (K.offset = 0))
                                      : (t = null);
                              }
                            }
                          break;
                        case "remove_text":
                          var { path: z, offset: H, text: U } = r;
                          if (0 === U.length) break;
                          var $ = et.leaf(e, z),
                            Y = $.text.slice(0, H),
                            J = $.text.slice(H + U.length);
                          if ((($.text = Y + J), t))
                            for (var [Z, X] of ef.points(t))
                              t[X] = el.transform(Z, r);
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
                          var eu = et.get(e, G);
                          for (var en in er) {
                            if ("children" === en || "text" === en)
                              throw Error(
                                'Cannot set the "'.concat(
                                  en,
                                  '" property of nodes!',
                                ),
                              );
                            var eo = er[en];
                            null == eo ? delete eu[en] : (eu[en] = eo);
                          }
                          for (var ei in ee)
                            er.hasOwnProperty(ei) || delete eu[ei];
                          break;
                        case "set_selection":
                          var { newProperties: es } = r;
                          if (null == es) t = es;
                          else {
                            if (null == t) {
                              if (!ef.isRange(es))
                                throw Error(
                                  'Cannot apply an incomplete "set_selection" operation properties '.concat(
                                    eB.stringify(es),
                                    " when there is no current selection.",
                                  ),
                                );
                              t = ew({}, es);
                            }
                            for (var ec in es) {
                              var eD = es[ec];
                              if (null == eD) {
                                if ("anchor" === ec || "focus" === ec)
                                  throw Error(
                                    'Cannot remove the "'.concat(
                                      ec,
                                      '" selection property',
                                    ),
                                  );
                                delete t[ec];
                              } else t[ec] = eD;
                            }
                          }
                          break;
                        case "split_node":
                          var ed,
                            { path: eC, position: eh, properties: ev } = r;
                          if (0 === eC.length)
                            throw Error(
                              'Cannot apply a "split_node" operation at path ['.concat(
                                eC,
                                "] because the root node cannot be split.",
                              ),
                            );
                          var ep = et.get(e, eC),
                            eg = et.parent(e, eC),
                            eE = eC[eC.length - 1];
                          if (eF.isText(ep)) {
                            var eA = ep.text.slice(0, eh),
                              em = ep.text.slice(eh);
                            (ep.text = eA),
                              (ed = ew(ew({}, ev), {}, { text: em }));
                          } else {
                            var eb = ep.children.slice(0, eh),
                              ey = ep.children.slice(eh);
                            (ep.children = eb),
                              (ed = ew(ew({}, ev), {}, { children: ey }));
                          }
                          if ((eg.children.splice(eE + 1, 0, ed), t))
                            for (var [ex, eO] of ef.points(t))
                              t[eO] = el.transform(ex, r);
                      }
                      return t;
                    })(e, r, t);
                  } finally {
                    (e.children = (0, o.vD)(e.children)),
                      r
                        ? (e.selection = (0, o.Qx)(r) ? (0, o.vD)(r) : r)
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
                J.withoutNormalizing(e, () => {
                  var {
                      hanging: u = !1,
                      voids: n = !1,
                      mode: a = "lowest",
                    } = r,
                    { at: o, match: i, select: s } = r;
                  if ((et.isNode(t) && (t = [t]), 0 !== t.length)) {
                    var [l] = t;
                    if (
                      (o ||
                        ((o = e.selection
                          ? e.selection
                          : e.children.length > 0
                            ? J.end(e, [])
                            : [0]),
                        (s = !0)),
                      null == s && (s = !1),
                      ef.isRange(o))
                    )
                      if (
                        (u || (o = J.unhangRange(e, o, { voids: n })),
                        ef.isCollapsed(o))
                      )
                        o = o.anchor;
                      else {
                        var [, c] = ef.edges(o),
                          D = J.pointRef(e, c);
                        eR.delete(e, { at: o }), (o = D.unref());
                      }
                    if (el.isPoint(o)) {
                      null == i &&
                        (i = eF.isText(l)
                          ? (e) => eF.isText(e)
                          : e.isInline(l)
                            ? (t) => eF.isText(t) || J.isInline(e, t)
                            : (t) => V.isElement(t) && J.isBlock(e, t));
                      var [d] = J.nodes(e, {
                        at: o.path,
                        match: i,
                        mode: a,
                        voids: n,
                      });
                      if (!d) return;
                      var [, f] = d,
                        C = J.pathRef(e, f),
                        h = J.isEnd(e, o, f);
                      eR.splitNodes(e, { at: o, match: i, mode: a, voids: n });
                      var B = C.unref();
                      o = h ? ea.next(B) : B;
                    }
                    var v = ea.parent(o),
                      p = o[o.length - 1];
                    if (!(!n && J.void(e, { at: v }))) {
                      for (var g of t) {
                        var E = v.concat(p);
                        p++,
                          e.apply({ type: "insert_node", path: E, node: g }),
                          (o = ea.next(o));
                      }
                      if (((o = ea.previous(o)), s)) {
                        var A = J.end(e, o);
                        A && eR.select(e, A);
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
                J.withoutNormalizing(e, () => {
                  var {
                      at: r = e.selection,
                      mode: u = "lowest",
                      voids: n = !1,
                    } = t,
                    { match: a } = t;
                  if (
                    (null == a &&
                      (a = ea.isPath(r)
                        ? eP(e, r)
                        : (t) => V.isElement(t) && J.isBlock(e, t)),
                    r)
                  )
                    for (var o of Array.from(
                      J.nodes(e, { at: r, match: a, mode: u, voids: n }),
                      (t) => {
                        var [, r] = t;
                        return J.pathRef(e, r);
                      },
                    )) {
                      var i = o.unref();
                      if (i.length < 2)
                        throw Error(
                          "Cannot lift node at a path [".concat(
                            i,
                            "] because it has a depth of less than `2`.",
                          ),
                        );
                      var [s, l] = J.node(e, ea.parent(i)),
                        c = i[i.length - 1],
                        { length: D } = s.children;
                      if (1 === D) {
                        var d = ea.next(l);
                        eR.moveNodes(e, { at: i, to: d, voids: n }),
                          eR.removeNodes(e, { at: l, voids: n });
                      } else if (0 === c)
                        eR.moveNodes(e, { at: i, to: l, voids: n });
                      else if (c === D - 1) {
                        var f = ea.next(l);
                        eR.moveNodes(e, { at: i, to: f, voids: n });
                      } else {
                        var C = ea.next(i),
                          h = ea.next(l);
                        eR.splitNodes(e, { at: C, voids: n }),
                          eR.moveNodes(e, { at: i, to: h, voids: n });
                      }
                    }
                });
              },
              mergeNodes(e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                J.withoutNormalizing(e, () => {
                  var r,
                    u,
                    { match: n, at: a = e.selection } = t,
                    { hanging: o = !1, voids: i = !1, mode: s = "lowest" } = t;
                  if (a) {
                    if (null == n)
                      if (ea.isPath(a)) {
                        var [l] = J.parent(e, a);
                        n = (e) => l.children.includes(e);
                      } else n = (t) => V.isElement(t) && J.isBlock(e, t);
                    if (
                      (!o &&
                        ef.isRange(a) &&
                        (a = J.unhangRange(e, a, { voids: i })),
                      ef.isRange(a))
                    )
                      if (ef.isCollapsed(a)) a = a.anchor;
                      else {
                        var [, c] = ef.edges(a),
                          D = J.pointRef(e, c);
                        eR.delete(e, { at: a }),
                          (a = D.unref()),
                          null == t.at && eR.select(e, a);
                      }
                    var [d] = J.nodes(e, {
                        at: a,
                        match: n,
                        voids: i,
                        mode: s,
                      }),
                      f = J.previous(e, { at: a, match: n, voids: i, mode: s });
                    if (d && f) {
                      var [C, h] = d,
                        [B, p] = f;
                      if (0 !== h.length && 0 !== p.length) {
                        var g = ea.next(p),
                          E = ea.common(h, p),
                          A = ea.isSibling(h, p),
                          F = Array.from(J.levels(e, { at: h }), (e) => {
                            var [t] = e;
                            return t;
                          })
                            .slice(E.length)
                            .slice(0, -1),
                          m = J.above(e, {
                            at: h,
                            mode: "highest",
                            match: (t) => F.includes(t) && ek(e, t),
                          }),
                          w = m && J.pathRef(e, m[1]);
                        if (eF.isText(C) && eF.isText(B)) {
                          var b = v(C, eb);
                          (u = B.text.length), (r = b);
                        } else if (V.isElement(C) && V.isElement(B)) {
                          var b = v(C, ey);
                          (u = B.children.length), (r = b);
                        } else
                          throw Error(
                            "Cannot merge the node at path ["
                              .concat(
                                h,
                                "] with the previous sibling because it is not the same kind: ",
                              )
                              .concat(eB.stringify(C), " ")
                              .concat(eB.stringify(B)),
                          );
                        A || eR.moveNodes(e, { at: h, to: g, voids: i }),
                          w && eR.removeNodes(e, { at: w.current, voids: i }),
                          (V.isElement(B) && J.isEmpty(e, B)) ||
                          (eF.isText(B) &&
                            "" === B.text &&
                            0 !== p[p.length - 1])
                            ? eR.removeNodes(e, { at: p, voids: i })
                            : e.apply({
                                type: "merge_node",
                                path: g,
                                position: u,
                                properties: r,
                              }),
                          w && w.unref();
                      }
                    }
                  }
                });
              },
              moveNodes(e, t) {
                J.withoutNormalizing(e, () => {
                  var {
                      to: r,
                      at: u = e.selection,
                      mode: n = "lowest",
                      voids: a = !1,
                    } = t,
                    { match: o } = t;
                  if (u) {
                    null == o &&
                      (o = ea.isPath(u)
                        ? eP(e, u)
                        : (t) => V.isElement(t) && J.isBlock(e, t));
                    var i = J.pathRef(e, r);
                    for (var s of Array.from(
                      J.nodes(e, { at: u, match: o, mode: n, voids: a }),
                      (t) => {
                        var [, r] = t;
                        return J.pathRef(e, r);
                      },
                    )) {
                      var l = s.unref(),
                        c = i.current;
                      0 !== l.length &&
                        e.apply({ type: "move_node", path: l, newPath: c }),
                        i.current &&
                          ea.isSibling(c, l) &&
                          ea.isAfter(c, l) &&
                          (i.current = ea.next(i.current));
                    }
                    i.unref();
                  }
                });
              },
              removeNodes(e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                J.withoutNormalizing(e, () => {
                  var {
                      hanging: r = !1,
                      voids: u = !1,
                      mode: n = "lowest",
                    } = t,
                    { at: a = e.selection, match: o } = t;
                  if (a)
                    for (var i of (null == o &&
                      (o = ea.isPath(a)
                        ? eP(e, a)
                        : (t) => V.isElement(t) && J.isBlock(e, t)),
                    !r &&
                      ef.isRange(a) &&
                      (a = J.unhangRange(e, a, { voids: u })),
                    Array.from(
                      J.nodes(e, { at: a, match: o, mode: n, voids: u }),
                      (t) => {
                        var [, r] = t;
                        return J.pathRef(e, r);
                      },
                    ))) {
                      var s = i.unref();
                      if (s) {
                        var [l] = J.node(e, s);
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
                J.withoutNormalizing(e, () => {
                  var {
                      match: u,
                      at: n = e.selection,
                      compare: a,
                      merge: o,
                    } = r,
                    {
                      hanging: i = !1,
                      mode: s = "lowest",
                      split: l = !1,
                      voids: c = !1,
                    } = r;
                  if (n) {
                    if (
                      (null == u &&
                        (u = ea.isPath(n)
                          ? eP(e, n)
                          : (t) => V.isElement(t) && J.isBlock(e, t)),
                      !i &&
                        ef.isRange(n) &&
                        (n = J.unhangRange(e, n, { voids: c })),
                      l && ef.isRange(n))
                    ) {
                      if (
                        ef.isCollapsed(n) &&
                        J.leaf(e, n.anchor)[0].text.length > 0
                      )
                        return;
                      var D = J.rangeRef(e, n, { affinity: "inward" }),
                        [d, f] = ef.edges(n),
                        C = "lowest" === s ? "lowest" : "highest",
                        h = J.isEnd(e, f, f.path);
                      eR.splitNodes(e, {
                        at: f,
                        match: u,
                        mode: C,
                        voids: c,
                        always: !h,
                      });
                      var B = J.isStart(e, d, d.path);
                      eR.splitNodes(e, {
                        at: d,
                        match: u,
                        mode: C,
                        voids: c,
                        always: !B,
                      }),
                        (n = D.unref()),
                        null == r.at && eR.select(e, n);
                    }
                    for (var [v, p] of (a || (a = (e, t) => e !== t),
                    J.nodes(e, { at: n, match: u, mode: s, voids: c }))) {
                      var g = {},
                        E = {};
                      if (0 !== p.length) {
                        var A = !1;
                        for (var F in t)
                          "children" !== F &&
                            "text" !== F &&
                            a(t[F], v[F]) &&
                            ((A = !0),
                            v.hasOwnProperty(F) && (g[F] = v[F]),
                            o
                              ? null != t[F] && (E[F] = o(v[F], t[F]))
                              : null != t[F] && (E[F] = t[F]));
                        A &&
                          e.apply({
                            type: "set_node",
                            path: p,
                            properties: g,
                            newProperties: E,
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
                J.withoutNormalizing(e, () => {
                  var r,
                    u,
                    { mode: n = "lowest", voids: a = !1 } = t,
                    {
                      match: o,
                      at: i = e.selection,
                      height: s = 0,
                      always: l = !1,
                    } = t;
                  if (
                    (null == o &&
                      (o = (t) => V.isElement(t) && J.isBlock(e, t)),
                    ef.isRange(i) &&
                      (i = ((e, t) => {
                        if (ef.isCollapsed(t)) return t.anchor;
                        var [, r] = ef.edges(t),
                          u = J.pointRef(e, r);
                        return eR.delete(e, { at: t }), u.unref();
                      })(e, i)),
                    ea.isPath(i))
                  ) {
                    var c = i,
                      D = J.point(e, c),
                      [d] = J.parent(e, c);
                    (o = (e) => e === d),
                      (s = D.path.length - c.length + 1),
                      (i = D),
                      (l = !0);
                  }
                  if (i) {
                    var f = J.pointRef(e, i, { affinity: "backward" });
                    try {
                      var [C] = J.nodes(e, {
                        at: i,
                        match: o,
                        mode: n,
                        voids: a,
                      });
                      if (!C) return;
                      var h = J.void(e, { at: i, mode: "highest" });
                      if (!a && h) {
                        var [B, v] = h;
                        if (V.isElement(B) && e.isInline(B)) {
                          var p = J.after(e, v);
                          if (!p) {
                            var g = ea.next(v);
                            eR.insertNodes(
                              e,
                              { text: "" },
                              { at: g, voids: a },
                            ),
                              (p = J.point(e, g));
                          }
                          (i = p), (l = !0);
                        }
                        (s = i.path.length - v.length + 1), (l = !0);
                      }
                      r = J.pointRef(e, i);
                      var E = i.path.length - s,
                        [, A] = C,
                        F = i.path.slice(0, E),
                        m = 0 === s ? i.offset : i.path[E] + 0;
                      for (var [w, b] of J.levels(e, {
                        at: F,
                        reverse: !0,
                        voids: a,
                      })) {
                        var y = !1;
                        if (
                          b.length < A.length ||
                          0 === b.length ||
                          (!a && V.isElement(w) && J.isVoid(e, w))
                        )
                          break;
                        var x = f.current,
                          O = J.isEnd(e, x, b);
                        if (l || !f || !J.isEdge(e, x, b)) {
                          y = !0;
                          var k = et.extractProps(w);
                          e.apply({
                            type: "split_node",
                            path: b,
                            position: m,
                            properties: k,
                          });
                        }
                        m = b[b.length - 1] + (y || O ? 1 : 0);
                      }
                      if (null == t.at) {
                        var P = r.current || J.end(e, []);
                        eR.select(e, P);
                      }
                    } finally {
                      f.unref(), null == (u = r) || u.unref();
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
                var u = {};
                for (var n of t) u[n] = null;
                eR.setNodes(e, u, r);
              },
              unwrapNodes(e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                J.withoutNormalizing(e, () => {
                  var { mode: r = "lowest", split: u = !1, voids: n = !1 } = t,
                    { at: a = e.selection, match: o } = t;
                  if (a) {
                    null == o &&
                      (o = ea.isPath(a)
                        ? eP(e, a)
                        : (t) => V.isElement(t) && J.isBlock(e, t)),
                      ea.isPath(a) && (a = J.range(e, a));
                    var i = ef.isRange(a) ? J.rangeRef(e, a) : null;
                    for (var s of Array.from(
                      J.nodes(e, { at: a, match: o, mode: r, voids: n }),
                      (t) => {
                        var [, r] = t;
                        return J.pathRef(e, r);
                      },
                    ).reverse())
                      !(function (t) {
                        var r = t.unref(),
                          [a] = J.node(e, r),
                          o = J.range(e, r);
                        u && i && (o = ef.intersection(i.current, o)),
                          eR.liftNodes(e, {
                            at: o,
                            match: (e) =>
                              V.isAncestor(a) && a.children.includes(e),
                            voids: n,
                          });
                      })(s);
                    i && i.unref();
                  }
                });
              },
              wrapNodes(e, t) {
                var r =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                J.withoutNormalizing(e, () => {
                  var { mode: u = "lowest", split: n = !1, voids: a = !1 } = r,
                    { match: o, at: i = e.selection } = r;
                  if (i) {
                    if (
                      (null == o &&
                        (o = ea.isPath(i)
                          ? eP(e, i)
                          : e.isInline(t)
                            ? (t) =>
                                (V.isElement(t) && J.isInline(e, t)) ||
                                eF.isText(t)
                            : (t) => V.isElement(t) && J.isBlock(e, t)),
                      n && ef.isRange(i))
                    ) {
                      var [s, l] = ef.edges(i),
                        c = J.rangeRef(e, i, { affinity: "inward" });
                      eR.splitNodes(e, { at: l, match: o, voids: a }),
                        eR.splitNodes(e, { at: s, match: o, voids: a }),
                        (i = c.unref()),
                        null == r.at && eR.select(e, i);
                    }
                    for (var [, D] of Array.from(
                      J.nodes(e, {
                        at: i,
                        match: e.isInline(t)
                          ? (t) => V.isElement(t) && J.isBlock(e, t)
                          : (e) => J.isEditor(e),
                        mode: "lowest",
                        voids: a,
                      }),
                    )) {
                      var d = ef.isRange(i)
                        ? ef.intersection(i, J.range(e, D))
                        : i;
                      if (d) {
                        var f = Array.from(
                          J.nodes(e, { at: d, match: o, mode: u, voids: a }),
                        );
                        if (
                          f.length > 0 &&
                          "continue" ===
                            (function () {
                              var [r] = f,
                                u = f[f.length - 1],
                                [, n] = r,
                                [, o] = u;
                              if (0 === n.length && 0 === o.length)
                                return "continue";
                              var i = ea.equals(n, o)
                                  ? ea.parent(n)
                                  : ea.common(n, o),
                                s = J.range(e, n, o),
                                [l] = J.node(e, i),
                                c = i.length + 1,
                                D = ea.next(o.slice(0, c)),
                                d = eO(eO({}, t), {}, { children: [] });
                              eR.insertNodes(e, d, { at: D, voids: a }),
                                eR.moveNodes(e, {
                                  at: s,
                                  match: (e) =>
                                    V.isAncestor(l) && l.children.includes(e),
                                  to: D.concat(0),
                                  voids: a,
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
                { selection: u } = e;
              if (u) {
                if ("anchor" === r) eR.select(e, u.anchor);
                else if ("focus" === r) eR.select(e, u.focus);
                else if ("start" === r) {
                  var [n] = ef.edges(u);
                  eR.select(e, n);
                } else if ("end" === r) {
                  var [, a] = ef.edges(u);
                  eR.select(e, a);
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
                { distance: u = 1, unit: n = "character", reverse: a = !1 } = t,
                { edge: o = null } = t;
              if (r) {
                "start" === o && (o = ef.isBackward(r) ? "focus" : "anchor"),
                  "end" === o && (o = ef.isBackward(r) ? "anchor" : "focus");
                var { anchor: i, focus: s } = r,
                  l = { distance: u, unit: n },
                  c = {};
                if (null == o || "anchor" === o) {
                  var D = a ? J.before(e, i, l) : J.after(e, i, l);
                  D && (c.anchor = D);
                }
                if (null == o || "focus" === o) {
                  var d = a ? J.before(e, s, l) : J.after(e, s, l);
                  d && (c.focus = d);
                }
                eR.setSelection(e, c);
              }
            },
            select(e, t) {
              var { selection: r } = e;
              if (((t = J.range(e, t)), r)) return void eR.setSelection(e, t);
              if (!ef.isRange(t))
                throw Error(
                  "When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(
                    eB.stringify(t),
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
                { selection: u } = e,
                { edge: n = "both" } = r;
              if (u) {
                "start" === n && (n = ef.isBackward(u) ? "focus" : "anchor"),
                  "end" === n && (n = ef.isBackward(u) ? "anchor" : "focus");
                var { anchor: a, focus: o } = u,
                  i = "anchor" === n ? a : o;
                eR.setSelection(e, {
                  ["anchor" === n ? "anchor" : "focus"]: eT(eT({}, i), t),
                });
              }
            },
            setSelection(e, t) {
              var { selection: r } = e,
                u = {},
                n = {};
              if (r) {
                for (var a in t)
                  (("anchor" !== a ||
                    null == t.anchor ||
                    el.equals(t.anchor, r.anchor)) &&
                    ("focus" !== a ||
                      null == t.focus ||
                      el.equals(t.focus, r.focus)) &&
                    ("anchor" === a || "focus" === a || t[a] === r[a])) ||
                    ((u[a] = r[a]), (n[a] = t[a]));
                Object.keys(u).length > 0 &&
                  e.apply({
                    type: "set_selection",
                    properties: u,
                    newProperties: n,
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
            J.withoutNormalizing(e, () => {
              var r,
                {
                  reverse: u = !1,
                  unit: n = "character",
                  distance: a = 1,
                  voids: o = !1,
                } = t,
                { at: i = e.selection, hanging: s = !1 } = t;
              if (i) {
                var l = !1;
                if (
                  (ef.isRange(i) &&
                    ef.isCollapsed(i) &&
                    ((l = !0), (i = i.anchor)),
                  el.isPoint(i))
                ) {
                  var c = J.void(e, { at: i, mode: "highest" });
                  if (!o && c) {
                    var [, D] = c;
                    i = D;
                  } else {
                    var d = { unit: n, distance: a },
                      f = u
                        ? J.before(e, i, d) || J.start(e, [])
                        : J.after(e, i, d) || J.end(e, []);
                    (i = { anchor: i, focus: f }), (s = !0);
                  }
                }
                if (ea.isPath(i))
                  return void eR.removeNodes(e, { at: i, voids: o });
                if (!ef.isCollapsed(i)) {
                  if (!s) {
                    var [, C] = ef.edges(i),
                      h = J.end(e, []);
                    el.equals(C, h) || (i = J.unhangRange(e, i, { voids: o }));
                  }
                  var [B, v] = ef.edges(i),
                    p = J.above(e, {
                      match: (t) => V.isElement(t) && J.isBlock(e, t),
                      at: B,
                      voids: o,
                    }),
                    g = J.above(e, {
                      match: (t) => V.isElement(t) && J.isBlock(e, t),
                      at: v,
                      voids: o,
                    }),
                    E = p && g && !ea.equals(p[1], g[1]),
                    A = ea.equals(B.path, v.path),
                    F = o ? null : J.void(e, { at: B, mode: "highest" }),
                    m = o ? null : J.void(e, { at: v, mode: "highest" });
                  if (F) {
                    var w = J.before(e, B);
                    w && p && ea.isAncestor(p[1], w.path) && (B = w);
                  }
                  if (m) {
                    var b = J.after(e, v);
                    b && g && ea.isAncestor(g[1], b.path) && (v = b);
                  }
                  var y = [];
                  for (var x of J.nodes(e, { at: i, voids: o })) {
                    var [O, k] = x;
                    (!r || 0 !== ea.compare(k, r)) &&
                      ((!o && V.isElement(O) && J.isVoid(e, O)) ||
                        (!ea.isCommon(k, B.path) && !ea.isCommon(k, v.path))) &&
                      (y.push(x), (r = k));
                  }
                  var P = Array.from(y, (t) => {
                      var [, r] = t;
                      return J.pathRef(e, r);
                    }),
                    S = J.pointRef(e, B),
                    T = J.pointRef(e, v),
                    j = "";
                  if (!A && !F) {
                    var N = S.current,
                      [R] = J.leaf(e, N),
                      { path: M } = N,
                      { offset: K } = B,
                      L = R.text.slice(K);
                    L.length > 0 &&
                      (e.apply({
                        type: "remove_text",
                        path: M,
                        offset: K,
                        text: L,
                      }),
                      (j = L));
                  }
                  if (
                    (P.reverse()
                      .map((e) => e.unref())
                      .filter((e) => null !== e)
                      .forEach((t) => eR.removeNodes(e, { at: t, voids: o })),
                    !m)
                  ) {
                    var _ = T.current,
                      [W] = J.leaf(e, _),
                      { path: q } = _,
                      I = A ? B.offset : 0,
                      Q = W.text.slice(I, v.offset);
                    Q.length > 0 &&
                      (e.apply({
                        type: "remove_text",
                        path: q,
                        offset: I,
                        text: Q,
                      }),
                      (j = Q));
                  }
                  !A &&
                    E &&
                    T.current &&
                    S.current &&
                    eR.mergeNodes(e, { at: T.current, hanging: !0, voids: o }),
                    l &&
                      u &&
                      "character" === n &&
                      j.length > 1 &&
                      j.match(/[\u0E00-\u0E7F]+/) &&
                      eR.insertText(e, j.slice(0, j.length - a));
                  var z = S.unref(),
                    H = T.unref(),
                    U = u ? z || H : H || z;
                  null == t.at && U && eR.select(e, U);
                }
              }
            });
          },
          insertFragment(e, t) {
            var r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            J.withoutNormalizing(e, () => {
              var u,
                { hanging: n = !1, voids: a = !1 } = r,
                { at: o = e.selection } = r;
              if (t.length) {
                if (o) {
                  if (ef.isRange(o))
                    if (
                      (n || (o = J.unhangRange(e, o, { voids: a })),
                      ef.isCollapsed(o))
                    )
                      o = o.anchor;
                    else {
                      var [, i] = ef.edges(o);
                      if (!a && J.void(e, { at: i })) return;
                      var s = J.pointRef(e, i);
                      eR.delete(e, { at: o }), (o = s.unref());
                    }
                  else ea.isPath(o) && (o = J.start(e, o));
                  if (!(!a && J.void(e, { at: o }))) {
                    var l = J.above(e, {
                      at: o,
                      match: (t) => V.isElement(t) && J.isInline(e, t),
                      mode: "highest",
                      voids: a,
                    });
                    if (l) {
                      var [, c] = l;
                      J.isEnd(e, o, c)
                        ? (o = J.after(e, c))
                        : J.isStart(e, o, c) && (o = J.before(e, c));
                    }
                    var [, D] = J.above(e, {
                        match: (t) => V.isElement(t) && J.isBlock(e, t),
                        at: o,
                        voids: a,
                      }),
                      d = J.isStart(e, o, D),
                      f = J.isEnd(e, o, D),
                      C = d && f,
                      h = !d || (d && f),
                      B = !f,
                      [, v] = et.first({ children: t }, []),
                      [, p] = et.last({ children: t }, []),
                      g = [],
                      E = (t) => {
                        var [r, u] = t;
                        return (
                          0 !== u.length &&
                          (!!C ||
                            !(
                              (h &&
                                ea.isAncestor(u, v) &&
                                V.isElement(r) &&
                                !e.isVoid(r) &&
                                !e.isInline(r)) ||
                              (B &&
                                ea.isAncestor(u, p) &&
                                V.isElement(r) &&
                                !e.isVoid(r) &&
                                !e.isInline(r))
                            ))
                        );
                      };
                    for (var A of et.nodes({ children: t }, { pass: E }))
                      E(A) && g.push(A);
                    var F = [],
                      m = [],
                      w = [],
                      b = !0,
                      y = !1;
                    for (var [x] of g)
                      V.isElement(x) && !e.isInline(x)
                        ? ((b = !1), (y = !0), m.push(x))
                        : b
                          ? F.push(x)
                          : w.push(x);
                    var [O] = J.nodes(e, {
                        at: o,
                        match: (t) => eF.isText(t) || J.isInline(e, t),
                        mode: "highest",
                        voids: a,
                      }),
                      [, k] = O,
                      P = J.isStart(e, o, k),
                      S = J.isEnd(e, o, k),
                      T = J.pathRef(e, f && !w.length ? ea.next(D) : D),
                      j = J.pathRef(e, S ? ea.next(k) : k);
                    eR.splitNodes(e, {
                      at: o,
                      match: (t) =>
                        y
                          ? V.isElement(t) && J.isBlock(e, t)
                          : eF.isText(t) || J.isInline(e, t),
                      mode: y ? "lowest" : "highest",
                      always: y && (!d || F.length > 0) && (!f || w.length > 0),
                      voids: a,
                    });
                    var N = J.pathRef(e, !P || (P && S) ? ea.next(k) : k);
                    if (
                      (eR.insertNodes(e, F, {
                        at: N.current,
                        match: (t) => eF.isText(t) || J.isInline(e, t),
                        mode: "highest",
                        voids: a,
                      }),
                      C &&
                        !F.length &&
                        m.length &&
                        !w.length &&
                        eR.delete(e, { at: D, voids: a }),
                      eR.insertNodes(e, m, {
                        at: T.current,
                        match: (t) => V.isElement(t) && J.isBlock(e, t),
                        mode: "lowest",
                        voids: a,
                      }),
                      eR.insertNodes(e, w, {
                        at: j.current,
                        match: (t) => eF.isText(t) || J.isInline(e, t),
                        mode: "highest",
                        voids: a,
                      }),
                      !r.at &&
                        (w.length > 0 && j.current
                          ? (u = ea.previous(j.current))
                          : m.length > 0 && T.current
                            ? (u = ea.previous(T.current))
                            : N.current && (u = ea.previous(N.current)),
                        u))
                    ) {
                      var R = J.end(e, u);
                      eR.select(e, R);
                    }
                    N.unref(), T.unref(), j.unref();
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
            J.withoutNormalizing(e, () => {
              var { voids: u = !1 } = r,
                { at: n = e.selection } = r;
              if (n) {
                if ((ea.isPath(n) && (n = J.range(e, n)), ef.isRange(n)))
                  if (ef.isCollapsed(n)) n = n.anchor;
                  else {
                    var a = ef.end(n);
                    if (!u && J.void(e, { at: a })) return;
                    var o = ef.start(n),
                      i = J.pointRef(e, o),
                      s = J.pointRef(e, a);
                    eR.delete(e, { at: n, voids: u });
                    var l = i.unref(),
                      c = s.unref();
                    (n = l || c), eR.setSelection(e, { anchor: n, focus: n });
                  }
                if (!(!u && J.void(e, { at: n }))) {
                  var { path: D, offset: d } = n;
                  t.length > 0 &&
                    e.apply({
                      type: "insert_text",
                      path: D,
                      offset: d,
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
          EY: eF,
          Hg: V,
          KE: J,
          Q6: ef,
          bP: et,
          bR: el,
          gB: eR,
          h6: eB,
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
                for (var r of J.pathRefs(e)) eo.transform(r, t);
                for (var u of J.pointRefs(e)) ec.transform(u, t);
                for (var n of J.rangeRefs(e)) eC.transform(n, t);
                var a,
                  o,
                  i = s.get(e) || [],
                  D = l.get(e) || new Set(),
                  d = (e) => {
                    if (e) {
                      var t = e.join(",");
                      o.has(t) || (o.add(t), a.push(e));
                    }
                  };
                if (ea.operationCanTransformPath(t))
                  for (var f of ((a = []), (o = new Set()), i))
                    d(ea.transform(f, t));
                else (a = i), (o = D);
                for (var C of e.getDirtyPaths(t)) d(C);
                s.set(e, a),
                  l.set(e, o),
                  eR.transform(e, t),
                  e.operations.push(t),
                  J.normalize(e, { operation: t }),
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
                var { selection: u, markableVoid: n } = e;
                if (u) {
                  var a = (t, r) => {
                      if (!eF.isText(t)) return !1;
                      var [u, n] = J.parent(e, r);
                      return !e.isVoid(u) || e.markableVoid(u);
                    },
                    o = ef.isExpanded(u),
                    i = !1;
                  if (!o) {
                    var [s, l] = J.node(e, u);
                    if (s && a(s, l)) {
                      var [D] = J.parent(e, l);
                      i = D && e.markableVoid(D);
                    }
                  }
                  if (o || i)
                    eR.setNodes(
                      e,
                      { [t]: r },
                      { match: a, split: !0, voids: !0 },
                    );
                  else {
                    var d = B(B({}, J.marks(e) || {}), {}, { [t]: r });
                    (e.marks = d), c.get(e) || e.onChange();
                  }
                }
              },
              deleteBackward: (t) => {
                var { selection: r } = e;
                r &&
                  ef.isCollapsed(r) &&
                  eR.delete(e, { unit: t, reverse: !0 });
              },
              deleteForward: (t) => {
                var { selection: r } = e;
                r && ef.isCollapsed(r) && eR.delete(e, { unit: t });
              },
              deleteFragment: (t) => {
                var { selection: r } = e;
                r &&
                  ef.isExpanded(r) &&
                  eR.delete(e, { reverse: "backward" === t });
              },
              getFragment: () => {
                var { selection: t } = e;
                return t ? et.fragment(e, t) : [];
              },
              insertBreak: () => {
                eR.splitNodes(e, { always: !0 });
              },
              insertSoftBreak: () => {
                eR.splitNodes(e, { always: !0 });
              },
              insertFragment: (t) => {
                eR.insertFragment(e, t);
              },
              insertNode: (t) => {
                eR.insertNodes(e, t);
              },
              insertText: (t) => {
                var { selection: r, marks: u } = e;
                if (r) {
                  if (u) {
                    var n = B({ text: t }, u);
                    eR.insertNodes(e, n);
                  } else eR.insertText(e, t);
                  e.marks = null;
                }
              },
              normalizeNode: (t) => {
                var [r, u] = t;
                if (!eF.isText(r)) {
                  if (V.isElement(r) && 0 === r.children.length)
                    return void eR.insertNodes(
                      e,
                      { text: "" },
                      { at: u.concat(0), voids: !0 },
                    );
                  for (
                    var n =
                        !J.isEditor(r) &&
                        V.isElement(r) &&
                        (e.isInline(r) ||
                          0 === r.children.length ||
                          eF.isText(r.children[0]) ||
                          e.isInline(r.children[0])),
                      a = 0,
                      o = 0;
                    o < r.children.length;
                    o++, a++
                  ) {
                    var i = et.get(e, u);
                    if (!eF.isText(i)) {
                      var s = r.children[o],
                        l = i.children[a - 1],
                        c = o === r.children.length - 1;
                      if (
                        (eF.isText(s) || (V.isElement(s) && e.isInline(s))) !==
                        n
                      )
                        eR.removeNodes(e, { at: u.concat(a), voids: !0 }), a--;
                      else if (V.isElement(s)) {
                        if (e.isInline(s))
                          if (null != l && eF.isText(l)) {
                            if (c) {
                              var D = { text: "" };
                              eR.insertNodes(e, D, {
                                at: u.concat(a + 1),
                                voids: !0,
                              }),
                                a++;
                            }
                          } else {
                            var d = { text: "" };
                            eR.insertNodes(e, d, {
                              at: u.concat(a),
                              voids: !0,
                            }),
                              a++;
                          }
                      } else
                        null != l &&
                          eF.isText(l) &&
                          (eF.equals(s, l, { loose: !0 })
                            ? (eR.mergeNodes(e, { at: u.concat(a), voids: !0 }),
                              a--)
                            : "" === l.text
                              ? (eR.removeNodes(e, {
                                  at: u.concat(a - 1),
                                  voids: !0,
                                }),
                                a--)
                              : "" === s.text &&
                                (eR.removeNodes(e, {
                                  at: u.concat(a),
                                  voids: !0,
                                }),
                                a--));
                    }
                  }
                }
              },
              removeMark: (t) => {
                var { selection: r } = e;
                if (r) {
                  var u = (t, r) => {
                      if (!eF.isText(t)) return !1;
                      var [u, n] = J.parent(e, r);
                      return !e.isVoid(u) || e.markableVoid(u);
                    },
                    n = ef.isExpanded(r),
                    a = !1;
                  if (!n) {
                    var [o, i] = J.node(e, r);
                    if (o && u(o, i)) {
                      var [s] = J.parent(e, i);
                      a = s && e.markableVoid(s);
                    }
                  }
                  if (n || a)
                    eR.unsetNodes(e, t, { match: u, split: !0, voids: !0 });
                  else {
                    var l = B({}, J.marks(e) || {});
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
                    return ea.levels(t);
                  case "insert_node":
                    var { node: r, path: u } = e,
                      n = ea.levels(u),
                      a = eF.isText(r)
                        ? []
                        : Array.from(et.nodes(r), (e) => {
                            var [, t] = e;
                            return u.concat(t);
                          });
                    return [...n, ...a];
                  case "merge_node":
                    var { path: o } = e,
                      i = ea.ancestors(o),
                      s = ea.previous(o);
                    return [...i, s];
                  case "move_node":
                    var { path: l, newPath: c } = e;
                    if (ea.equals(l, c)) return [];
                    var D = [],
                      d = [];
                    for (var f of ea.ancestors(l)) {
                      var C = ea.transform(f, e);
                      D.push(C);
                    }
                    for (var h of ea.ancestors(c)) {
                      var B = ea.transform(h, e);
                      d.push(B);
                    }
                    var v = d[d.length - 1],
                      p = c[c.length - 1],
                      g = v.concat(p);
                    return [...D, ...d, g];
                  case "remove_node":
                    var { path: E } = e;
                    return [...ea.ancestors(E)];
                  case "split_node":
                    var { path: A } = e,
                      F = ea.levels(A),
                      m = ea.next(A);
                    return [...F, m];
                  default:
                    return [];
                }
              },
              shouldNormalize: (e) => {
                var { iteration: t, initialDirtyPathsLength: r } = e,
                  u = 42 * r;
                if (t > u)
                  throw Error(
                    "Could not completely normalize the editor after ".concat(
                      u,
                      " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state.",
                    ),
                  );
                return !0;
              },
            };
            return e;
          },
          wA: ea,
        },
      );
    },
    483606(e, t, r) {
      "use strict";
      var u = r(557939),
        n = r(410323),
        a = r(321727),
        o = r(304880),
        i = n("".charCodeAt);
      u(
        { target: "String", proto: !0 },
        {
          isWellFormed: function () {
            for (var e = o(a(this)), t = e.length, r = 0; r < t; r++) {
              var u = i(e, r);
              if (
                (63488 & u) == 55296 &&
                (u >= 56320 || ++r >= t || (64512 & i(e, r)) != 56320)
              )
                return !1;
            }
            return !0;
          },
        },
      );
    },
  },
]);
//# sourceMappingURL=564996.6fc04b58dc2ab5b6.js.map
