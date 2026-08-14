"use strict";
(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
  ["661212"],
  {
    530795(e, t, n) {
      n.d(t, {
        A: () => tl,
        Fo: () => e5,
        RV: () => eA,
        f7: () => eP,
        o$: () => th,
        rL: () => ev,
        zL: () => to,
      });
      var r = n(877413),
        i = n.n(r),
        u = n(649852),
        o = n.n(u),
        a = n(64015),
        s = n.n(a),
        l = n(582128),
        c = n(104681),
        d = n(719442),
        f = n(415171),
        p = n(294106),
        h = n(333007);
      function v(e, t, n) {
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
      function m(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              u = Object.keys(e);
            for (r = 0; r < u.length; r++)
              (n = u[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(e);
          for (r = 0; r < u.length; r++)
            (n = u[r]),
              !(t.indexOf(n) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(e, n) &&
                (i[n] = e[n]);
        }
        return i;
      }
      var g = 0;
      class D {
        constructor() {
          this.id = "".concat(g++);
        }
      }
      var C = new WeakMap(),
        B = new WeakMap(),
        E = new WeakMap(),
        y = new WeakMap(),
        w = new WeakMap(),
        b = new WeakMap(),
        A = new WeakMap(),
        F = new WeakMap(),
        _ = new WeakMap(),
        k = new WeakMap(),
        x = new WeakMap(),
        z = new WeakMap(),
        O = new WeakMap(),
        S = new WeakMap(),
        P = new WeakMap(),
        N = new WeakMap(),
        T = new WeakMap(),
        j = new WeakMap(),
        Z = new WeakMap(),
        $ = new WeakMap(),
        R = new WeakMap(),
        I = Symbol("placeholder"),
        M = Symbol("mark-placeholder"),
        L = globalThis.Text,
        K = (e) =>
          (e && e.ownerDocument && e.ownerDocument.defaultView) || null,
        q = (e) => U(e) && 8 === e.nodeType,
        W = (e) => U(e) && 1 === e.nodeType,
        U = (e) => {
          var t = K(e);
          return !!t && e instanceof t.Node;
        },
        V = (e) => {
          var t = e && e.anchorNode && K(e.anchorNode);
          return !!t && e instanceof t.Selection;
        },
        J = (e) => U(e) && 3 === e.nodeType,
        Q = (e, t, n) => {
          for (
            var { childNodes: r } = e, i = r[t], u = t, o = !1, a = !1;
            (q(i) ||
              (W(i) && 0 === i.childNodes.length) ||
              (W(i) && "false" === i.getAttribute("contenteditable"))) &&
            (!o || !a);

          ) {
            if (u >= r.length) {
              (o = !0), (u = t - 1), (n = "backward");
              continue;
            }
            if (u < 0) {
              (a = !0), (u = t + 1), (n = "forward");
              continue;
            }
            (i = r[u]), (t = u), (u += "forward" === n ? 1 : -1);
          }
          return [i, t];
        },
        H = (e, t, n) => {
          var [r] = Q(e, t, n);
          return r;
        },
        Y = (e) => {
          var t = "";
          if (J(e) && e.nodeValue) return e.nodeValue;
          if (W(e)) {
            for (var n of Array.from(e.childNodes)) t += Y(n);
            var r = getComputedStyle(e).getPropertyValue("display");
            ("block" === r || "list" === r || "BR" === e.tagName) &&
              (t += "\n");
          }
          return t;
        },
        X = /data-slate-fragment="(.+?)"/m,
        G = (e, t, n) => {
          var { target: r } = t;
          if (W(r) && r.matches('[contentEditable="false"]')) return !1;
          var { document: i } = ev.getWindow(e);
          if (i.contains(r)) return ev.hasDOMNode(e, r, { editable: !0 });
          var u = n.find((e) => {
            var { addedNodes: t, removedNodes: n } = e;
            for (var i of t) if (i === r || i.contains(r)) return !0;
            for (var u of n) if (u === r || u.contains(r)) return !0;
          });
          return !!u && u !== t && G(e, u, n);
        },
        ee = parseInt(l.version.split(".")[0], 10) >= 17,
        et =
          "u" > typeof navigator &&
          "u" > typeof window &&
          /iPad|iPhone|iPod/.test(navigator.userAgent) &&
          !window.MSStream,
        en = "u" > typeof navigator && /Mac OS X/.test(navigator.userAgent),
        er = "u" > typeof navigator && /Android/.test(navigator.userAgent),
        ei =
          "u" > typeof navigator &&
          /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
        eu =
          "u" > typeof navigator &&
          /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
        eo =
          "u" > typeof navigator &&
          /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
        ea = "u" > typeof navigator && /Chrome/i.test(navigator.userAgent),
        es =
          "u" > typeof navigator &&
          /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent),
        el =
          er &&
          "u" > typeof navigator &&
          /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent),
        ec =
          "u" > typeof navigator &&
          /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(
            navigator.userAgent,
          ),
        ed = "u" > typeof navigator && /.*UCBrowser/.test(navigator.userAgent),
        ef = "u" > typeof navigator && /.*Wechat/.test(navigator.userAgent),
        ep =
          "u" > typeof window &&
          void 0 !== window.document &&
          void 0 !== window.document.createElement,
        eh =
          (!es || !el) &&
          !eo &&
          "u" > typeof globalThis &&
          globalThis.InputEvent &&
          "function" == typeof globalThis.InputEvent.prototype.getTargetRanges,
        ev = {
          isComposing: (e) => !!z.get(e),
          getWindow(e) {
            var t = E.get(e);
            if (!t)
              throw Error(
                "Unable to find a host window element for this editor",
              );
            return t;
          },
          findKey(e, t) {
            var n = F.get(t);
            return n || ((n = new D()), F.set(t, n)), n;
          },
          findPath(e, t) {
            for (var n = [], r = t; ; ) {
              var i = B.get(r);
              if (null == i)
                if (d.KE.isEditor(r)) return n;
                else break;
              var u = C.get(r);
              if (null == u) break;
              n.unshift(u), (r = i);
            }
            throw Error(
              "Unable to find the path for Slate node: ".concat(
                d.h6.stringify(t),
              ),
            );
          },
          findDocumentOrShadowRoot(e) {
            var t = ev.toDOMNode(e, e),
              n = t.getRootNode();
            return (n instanceof Document || n instanceof ShadowRoot) &&
              null != n.getSelection
              ? n
              : t.ownerDocument;
          },
          isFocused: (e) => !!x.get(e),
          isReadOnly: (e) => !!k.get(e),
          blur(e) {
            var t = ev.toDOMNode(e, e),
              n = ev.findDocumentOrShadowRoot(e);
            x.set(e, !1), n.activeElement === t && t.blur();
          },
          focus(e) {
            var t = ev.toDOMNode(e, e),
              n = ev.findDocumentOrShadowRoot(e);
            x.set(e, !0),
              n.activeElement !== t && t.focus({ preventScroll: !0 });
          },
          deselect(e) {
            var { selection: t } = e,
              n = ev.findDocumentOrShadowRoot(e).getSelection();
            n && n.rangeCount > 0 && n.removeAllRanges(), t && d.gB.deselect(e);
          },
          hasDOMNode(e, t) {
            var n,
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { editable: i = !1 } = r,
              u = ev.toDOMNode(e, e);
            try {
              n = W(t) ? t : t.parentElement;
            } catch (e) {
              if (
                !e.message.includes(
                  'Permission denied to access property "nodeType"',
                )
              )
                throw e;
            }
            return (
              !!n &&
              n.closest("[data-slate-editor]") === u &&
              (!i ||
                !!n.isContentEditable ||
                ("boolean" == typeof n.isContentEditable &&
                  n.closest('[contenteditable="false"]') === u) ||
                !!n.getAttribute("data-slate-zero-width"))
            );
          },
          insertData(e, t) {
            e.insertData(t);
          },
          insertFragmentData: (e, t) => e.insertFragmentData(t),
          insertTextData: (e, t) => e.insertTextData(t),
          setFragmentData(e, t, n) {
            e.setFragmentData(t, n);
          },
          toDOMNode(e, t) {
            var n = _.get(e),
              r = d.KE.isEditor(t)
                ? y.get(e)
                : null == n
                  ? void 0
                  : n.get(ev.findKey(e, t));
            if (!r)
              throw Error(
                "Cannot resolve a DOM node from Slate node: ".concat(
                  d.h6.stringify(t),
                ),
              );
            return r;
          },
          toDOMPoint(e, t) {
            var [n] = d.KE.node(e, t.path),
              r = ev.toDOMNode(e, n);
            d.KE.void(e, { at: t }) && (t = { path: t.path, offset: 0 });
            for (
              var i = Array.from(
                  r.querySelectorAll(
                    "[data-slate-string], [data-slate-zero-width]",
                  ),
                ),
                u = 0,
                o = 0;
              o < i.length;
              o++
            ) {
              var a = i[o],
                s = a.childNodes[0];
              if (null != s && null != s.textContent) {
                var { length: l } = s.textContent,
                  c = a.getAttribute("data-slate-length"),
                  f = u + (null == c ? l : parseInt(c, 10)),
                  p = i[o + 1];
                if (
                  t.offset === f &&
                  null != p &&
                  p.hasAttribute("data-slate-mark-placeholder")
                ) {
                  var h,
                    v,
                    m = p.childNodes[0];
                  h = [
                    m instanceof L ? m : p,
                    null != (v = p.textContent) && v.startsWith("\uFEFF")
                      ? 1
                      : 0,
                  ];
                  break;
                }
                if (t.offset <= f) {
                  h = [s, Math.min(l, Math.max(0, t.offset - u))];
                  break;
                }
                u = f;
              }
            }
            if (!h)
              throw Error(
                "Cannot resolve a DOM point from Slate point: ".concat(
                  d.h6.stringify(t),
                ),
              );
            return h;
          },
          toDOMRange(e, t) {
            var { anchor: n, focus: r } = t,
              i = d.Q6.isBackward(t),
              u = ev.toDOMPoint(e, n),
              o = d.Q6.isCollapsed(t) ? u : ev.toDOMPoint(e, r),
              a = ev.getWindow(e).document.createRange(),
              [s, l] = i ? o : u,
              [c, f] = i ? u : o,
              p = !!(W(s) ? s : s.parentElement).getAttribute(
                "data-slate-zero-width",
              ),
              h = !!(W(c) ? c : c.parentElement).getAttribute(
                "data-slate-zero-width",
              );
            return a.setStart(s, p ? 1 : l), a.setEnd(c, h ? 1 : f), a;
          },
          toSlateNode(e, t) {
            var n = W(t) ? t : t.parentElement;
            n &&
              !n.hasAttribute("data-slate-node") &&
              (n = n.closest("[data-slate-node]"));
            var r = n ? b.get(n) : null;
            if (!r)
              throw Error(
                "Cannot resolve a Slate node from DOM node: ".concat(n),
              );
            return r;
          },
          findEventRange(e, t) {
            "nativeEvent" in t && (t = t.nativeEvent);
            var n,
              { clientX: r, clientY: i, target: u } = t;
            if (null == r || null == i)
              throw Error(
                "Cannot resolve a Slate range from a DOM event: ".concat(t),
              );
            var o = ev.toSlateNode(e, t.target),
              a = ev.findPath(e, o);
            if (d.Hg.isElement(o) && d.KE.isVoid(e, o)) {
              var s = u.getBoundingClientRect(),
                l = e.isInline(o)
                  ? r - s.left < s.left + s.width - r
                  : i - s.top < s.top + s.height - i,
                c = d.KE.point(e, a, { edge: l ? "start" : "end" }),
                f = l ? d.KE.before(e, c) : d.KE.after(e, c);
              if (f) return d.KE.range(e, f);
            }
            var { document: p } = ev.getWindow(e);
            if (p.caretRangeFromPoint) n = p.caretRangeFromPoint(r, i);
            else {
              var h = p.caretPositionFromPoint(r, i);
              h &&
                ((n = p.createRange()).setStart(h.offsetNode, h.offset),
                n.setEnd(h.offsetNode, h.offset));
            }
            if (!n)
              throw Error(
                "Cannot resolve a Slate range from a DOM event: ".concat(t),
              );
            return ev.toSlateRange(e, n, { exactMatch: !1, suppressThrow: !1 });
          },
          toSlatePoint(e, t, n) {
            var { exactMatch: r, suppressThrow: i } = n,
              [u, o] = r
                ? t
                : ((e) => {
                    var [t, n] = e;
                    if (W(t) && t.childNodes.length) {
                      var r = n === t.childNodes.length,
                        i = r ? n - 1 : n;
                      for (
                        [t, i] = Q(t, i, r ? "backward" : "forward"), r = i < n;
                        W(t) && t.childNodes.length;

                      ) {
                        var u = r ? t.childNodes.length - 1 : 0;
                        t = H(t, u, r ? "backward" : "forward");
                      }
                      n = r && null != t.textContent ? t.textContent.length : 0;
                    }
                    return [t, n];
                  })(t),
              a = u.parentNode,
              s = null,
              l = 0;
            if (a) {
              var c,
                f,
                p = ev.toDOMNode(e, e),
                h = a.closest('[data-slate-void="true"]'),
                v = h && p.contains(h) ? h : null,
                m = a.closest("[data-slate-leaf]"),
                g = null;
              if (m) {
                if ((s = m.closest('[data-slate-node="text"]'))) {
                  var D = ev.getWindow(e).document.createRange();
                  D.setStart(s, 0), D.setEnd(u, o);
                  var C = D.cloneContents();
                  [
                    ...Array.prototype.slice.call(
                      C.querySelectorAll("[data-slate-zero-width]"),
                    ),
                    ...Array.prototype.slice.call(
                      C.querySelectorAll("[contenteditable=false]"),
                    ),
                  ].forEach((e) => {
                    if (
                      er &&
                      !r &&
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
                    (g = s);
                }
              } else if (v) {
                for (
                  var B = v.querySelectorAll("[data-slate-leaf]"), E = 0;
                  E < B.length;
                  E++
                ) {
                  var y = B[E];
                  if (ev.hasDOMNode(e, y)) {
                    m = y;
                    break;
                  }
                }
                m
                  ? ((s = m.closest('[data-slate-node="text"]')),
                    (l = (g = m).textContent.length),
                    g
                      .querySelectorAll("[data-slate-zero-width]")
                      .forEach((e) => {
                        l -= e.textContent.length;
                      }))
                  : (l = 1);
              }
              g &&
                l === g.textContent.length &&
                er &&
                "z" === g.getAttribute("data-slate-zero-width") &&
                null != (c = g.textContent) &&
                c.startsWith("\uFEFF") &&
                (a.hasAttribute("data-slate-zero-width") ||
                  (ei && null != (f = g.textContent) && f.endsWith("\n\n"))) &&
                l--;
            }
            if (er && !s && !r) {
              var w = a.hasAttribute("data-slate-node")
                ? a
                : a.closest("[data-slate-node]");
              if (w && ev.hasDOMNode(e, w, { editable: !0 })) {
                var b = ev.toSlateNode(e, w),
                  { path: A, offset: F } = d.KE.start(e, ev.findPath(e, b));
                return (
                  w.querySelector("[data-slate-leaf]") || (F = o),
                  { path: A, offset: F }
                );
              }
            }
            if (!s) {
              if (i) return null;
              throw Error(
                "Cannot resolve a Slate point from DOM point: ".concat(t),
              );
            }
            var _ = ev.toSlateNode(e, s);
            return { path: ev.findPath(e, _), offset: l };
          },
          toSlateRange(e, t, n) {
            var r,
              i,
              u,
              o,
              a,
              s,
              { exactMatch: l, suppressThrow: c } = n;
            if (
              ((V(t) ? t.anchorNode : t.startContainer) &&
                (V(t)
                  ? ((r = t.anchorNode),
                    (i = t.anchorOffset),
                    (u = t.focusNode),
                    (o = t.focusOffset),
                    (a =
                      ea &&
                      ((e) => {
                        for (var t = e && e.parentNode; t; ) {
                          if ("[object ShadowRoot]" === t.toString()) return !0;
                          t = t.parentNode;
                        }
                        return !1;
                      })(r)
                        ? t.anchorNode === t.focusNode &&
                          t.anchorOffset === t.focusOffset
                        : t.isCollapsed))
                  : ((r = t.startContainer),
                    (i = t.startOffset),
                    (u = t.endContainer),
                    (o = t.endOffset),
                    (a = t.collapsed))),
              null == r || null == u || null == i || null == o)
            )
              throw Error(
                "Cannot resolve a Slate range from DOM range: ".concat(t),
              );
            "getAttribute" in u &&
              "false" === u.getAttribute("contenteditable") &&
              ((u = r),
              (o = (null == (s = r.textContent) ? void 0 : s.length) || 0));
            var f = ev.toSlatePoint(e, [r, i], {
              exactMatch: l,
              suppressThrow: c,
            });
            if (!f) return null;
            var p = a
              ? f
              : ev.toSlatePoint(e, [u, o], { exactMatch: l, suppressThrow: c });
            if (!p) return null;
            if (ei && !a && r !== u) {
              var h = d.KE.isEnd(e, f, f.path),
                v = d.KE.isStart(e, p, p.path);
              h && (f = d.KE.after(e, f) || f),
                v && (p = d.KE.before(e, p) || p);
            }
            var m = { anchor: f, focus: p };
            return (
              d.Q6.isExpanded(m) &&
                d.Q6.isForward(m) &&
                W(u) &&
                d.KE.void(e, { at: m.focus, mode: "highest" }) &&
                (m = d.KE.unhangRange(e, m, { voids: !0 })),
              m
            );
          },
          hasRange(e, t) {
            var { anchor: n, focus: r } = t;
            return d.KE.hasPath(e, n.path) && d.KE.hasPath(e, r.path);
          },
          hasTarget: (e, t) => U(t) && ev.hasDOMNode(e, t),
          hasEditableTarget: (e, t) =>
            U(t) && ev.hasDOMNode(e, t, { editable: !0 }),
          hasSelectableTarget: (e, t) =>
            ev.hasEditableTarget(e, t) ||
            ev.isTargetInsideNonReadonlyVoid(e, t),
          isTargetInsideNonReadonlyVoid(e, t) {
            if (k.get(e)) return !1;
            var n = ev.hasTarget(e, t) && ev.toSlateNode(e, t);
            return d.Hg.isElement(n) && d.KE.isVoid(e, n);
          },
          androidScheduleFlush(e) {
            var t;
            null == (t = P.get(e)) || t();
          },
          androidPendingDiffs: (e) => j.get(e),
        },
        em = ["anchor", "focus"],
        eg = ["anchor", "focus"],
        eD = (e, t) => {
          var n = m(e, em),
            r = m(t, eg);
          return (
            e[I] === t[I] &&
            Object.keys(n).length === Object.keys(r).length &&
            Object.keys(n).every((e) => r.hasOwnProperty(e) && n[e] === r[e])
          );
        },
        eC = ep ? l.useLayoutEffect : l.useEffect,
        eB = (e) => {
          var { isLast: t, leaf: n, parent: r, text: i } = e,
            u = eA(),
            o = ev.findPath(u, i),
            a = d.wA.parent(o),
            s = !0 === n[M];
          return u.isVoid(r)
            ? l.createElement(ew, { length: d.bP.string(r).length })
            : "" !== n.text ||
                r.children[r.children.length - 1] !== i ||
                u.isInline(r) ||
                "" !== d.KE.string(u, a)
              ? "" === n.text
                ? l.createElement(ew, { isMarkPlaceholder: s })
                : t && "\n" === n.text.slice(-1)
                  ? l.createElement(eE, { isTrailing: !0, text: n.text })
                  : l.createElement(eE, { text: n.text })
              : l.createElement(ew, { isLineBreak: !0, isMarkPlaceholder: s });
        },
        eE = (e) => {
          var { text: t, isTrailing: n = !1 } = e,
            r = (0, l.useRef)(null),
            i = () => "".concat(null != t ? t : "").concat(n ? "\n" : ""),
            [u] = (0, l.useState)(i);
          return (
            eC(() => {
              var e = i();
              r.current &&
                r.current.textContent !== e &&
                (r.current.textContent = e);
            }),
            l.createElement(ey, { ref: r }, u)
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
              isLineBreak: n = !1,
              isMarkPlaceholder: r = !1,
            } = e,
            i = {
              "data-slate-zero-width": n ? "n" : "z",
              "data-slate-length": t,
            };
          return (
            r && (i["data-slate-mark-placeholder"] = !0),
            l.createElement(
              "span",
              Object.assign({}, i),
              er && n ? null : "\uFEFF",
              n ? l.createElement("br", null) : null,
            )
          );
        },
        eb = (0, l.createContext)(null),
        eA = () => {
          var e = (0, l.useContext)(eb);
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
                isLast: n,
                text: r,
                parent: i,
                renderPlaceholder: u,
                renderLeaf: o = (e) =>
                  l.createElement(e_, Object.assign({}, e)),
              } = e,
              a = (0, l.useRef)(null),
              s = (0, l.useRef)(null),
              c = eA(),
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
                        var e = R.get(c);
                        null == e || e();
                      })),
                      d.current.observe(e)),
                  !e && a.current)
                ) {
                  var t = R.get(c);
                  null == t || t();
                }
                return (
                  (a.current = s.current),
                  () => {
                    w.delete(c);
                  }
                );
              }, [s, t]);
            var p = l.createElement(eB, {
              isLast: n,
              leaf: t,
              parent: i,
              text: r,
            });
            if (t[I]) {
              var h = {
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
              p = l.createElement(l.Fragment, null, u(h), p);
            }
            return o({
              attributes: { "data-slate-leaf": !0 },
              children: p,
              leaf: t,
              text: r,
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
          var { attributes: t, children: n } = e;
          return l.createElement("span", Object.assign({}, t), n);
        },
        ek = l.memo(
          (e) => {
            for (
              var {
                  decorations: t,
                  isLast: n,
                  parent: r,
                  renderPlaceholder: i,
                  renderLeaf: u,
                  text: o,
                } = e,
                a = eA(),
                s = (0, l.useRef)(null),
                c = d.EY.decorations(o, t),
                f = ev.findKey(a, o),
                p = [],
                h = 0;
              h < c.length;
              h++
            ) {
              var v = c[h];
              p.push(
                l.createElement(eF, {
                  isLast: n && h === c.length - 1,
                  key: "".concat(f.id, "-").concat(h),
                  renderPlaceholder: i,
                  leaf: v,
                  text: o,
                  parent: r,
                  renderLeaf: u,
                }),
              );
            }
            var m = (0, l.useCallback)(
              (e) => {
                var t = _.get(a);
                e
                  ? (null == t || t.set(f, e), A.set(o, e), b.set(e, o))
                  : (null == t || t.delete(f),
                    A.delete(o),
                    s.current && b.delete(s.current)),
                  (s.current = e);
              },
              [s, a, f, o],
            );
            return l.createElement(
              "span",
              { "data-slate-node": "text", ref: m },
              p,
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
              for (var n = 0; n < e.length; n++) {
                var r = e[n],
                  i = t[n];
                if (
                  r.anchor.offset !== i.anchor.offset ||
                  r.focus.offset !== i.focus.offset ||
                  !eD(r, i)
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
                element: n,
                renderElement: r = (e) =>
                  l.createElement(ez, Object.assign({}, e)),
                renderPlaceholder: u,
                renderLeaf: o,
                selection: a,
              } = e,
              s = eA(),
              c = ej(),
              f = s.isInline(n),
              p = ev.findKey(s, n),
              h = (0, l.useCallback)(
                (e) => {
                  var t = _.get(s);
                  e
                    ? (null == t || t.set(p, e), A.set(n, e), b.set(e, n))
                    : (null == t || t.delete(p), A.delete(n));
                },
                [s, p, n],
              ),
              v = eN({
                decorations: t,
                node: n,
                renderElement: r,
                renderPlaceholder: u,
                renderLeaf: o,
                selection: a,
              }),
              m = { "data-slate-node": "element", ref: h };
            if (
              (f && (m["data-slate-inline"] = !0), !f && d.KE.hasInlines(s, n))
            ) {
              var g = d.bP.string(n),
                D = i()(g);
              "rtl" === D && (m.dir = D);
            }
            if (d.KE.isVoid(s, n)) {
              (m["data-slate-void"] = !0), !c && f && (m.contentEditable = !1);
              var [[E]] = d.bP.texts(n);
              (v = l.createElement(
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
                  parent: n,
                  text: E,
                }),
              )),
                C.set(E, 0),
                B.set(E, n);
            }
            return r({
              attributes: m,
              children: v,
              element: n,
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
              for (var n = 0; n < e.length; n++) {
                var r = e[n],
                  i = t[n];
                if (!d.Q6.equals(r, i) || !eD(r, i)) return !1;
              }
              return !0;
            })(e.decorations, t.decorations) &&
            (e.selection === t.selection ||
              (!!e.selection &&
                !!t.selection &&
                d.Q6.equals(e.selection, t.selection))),
        ),
        ez = (e) => {
          var { attributes: t, children: n, element: r } = e,
            i = eA().isInline(r) ? "span" : "div";
          return l.createElement(
            i,
            Object.assign({}, t, { style: { position: "relative" } }),
            n,
          );
        },
        eO = (0, l.createContext)(() => []),
        eS = (0, l.createContext)(!1),
        eP = () => (0, l.useContext)(eS),
        eN = (e) => {
          for (
            var {
                decorations: t,
                node: n,
                renderElement: r,
                renderPlaceholder: i,
                renderLeaf: u,
                selection: o,
              } = e,
              a = (0, l.useContext)(eO),
              s = eA(),
              c = ev.findPath(s, n),
              f = [],
              p = d.Hg.isElement(n) && !s.isInline(n) && d.KE.hasInlines(s, n),
              h = 0;
            h < n.children.length;
            h++
          ) {
            var v = c.concat(h),
              m = n.children[h],
              g = ev.findKey(s, m),
              D = d.KE.range(s, v),
              E = o && d.Q6.intersection(D, o),
              y = a([m, v]);
            for (var w of t) {
              var b = d.Q6.intersection(w, D);
              b && y.push(b);
            }
            d.Hg.isElement(m)
              ? f.push(
                  l.createElement(
                    eS.Provider,
                    { key: "provider-".concat(g.id), value: !!E },
                    l.createElement(ex, {
                      decorations: y,
                      element: m,
                      key: g.id,
                      renderElement: r,
                      renderPlaceholder: i,
                      renderLeaf: u,
                      selection: E,
                    }),
                  ),
                )
              : f.push(
                  l.createElement(ek, {
                    decorations: y,
                    key: g.id,
                    isLast: p && h === n.children.length - 1,
                    parent: n,
                    renderPlaceholder: i,
                    renderLeaf: u,
                    text: m,
                  }),
                ),
              C.set(m, h),
              B.set(m, n);
          }
          return f;
        },
        eT = (0, l.createContext)(!1),
        ej = () => (0, l.useContext)(eT),
        eZ = (0, l.createContext)(null),
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
        eI = {
          deleteWordBackward: "ctrl+shift?+backspace",
          deleteWordForward: "ctrl+shift?+delete",
          redo: ["ctrl+y", "ctrl+shift+z"],
        },
        eM = (e) => {
          var t = e$[e],
            n = eR[e],
            r = eI[e],
            i = t && (0, p.isKeyHotkey)(t),
            u = n && (0, p.isKeyHotkey)(n),
            o = r && (0, p.isKeyHotkey)(r);
          return (e) =>
            !!((i && i(e)) || (en && u && u(e)) || (!en && o && o(e)));
        },
        eL = {
          isBold: eM("bold"),
          isCompose: eM("compose"),
          isMoveBackward: eM("moveBackward"),
          isMoveForward: eM("moveForward"),
          isDeleteBackward: eM("deleteBackward"),
          isDeleteForward: eM("deleteForward"),
          isDeleteLineBackward: eM("deleteLineBackward"),
          isDeleteLineForward: eM("deleteLineForward"),
          isDeleteWordBackward: eM("deleteWordBackward"),
          isDeleteWordForward: eM("deleteWordForward"),
          isExtendBackward: eM("extendBackward"),
          isExtendForward: eM("extendForward"),
          isExtendLineBackward: eM("extendLineBackward"),
          isExtendLineForward: eM("extendLineForward"),
          isItalic: eM("italic"),
          isMoveLineBackward: eM("moveLineBackward"),
          isMoveLineForward: eM("moveLineForward"),
          isMoveWordBackward: eM("moveWordBackward"),
          isMoveWordForward: eM("moveWordForward"),
          isRedo: eM("redo"),
          isSoftBreak: eM("insertSoftBreak"),
          isSplitBlock: eM("splitBlock"),
          isTransposeCharacter: eM("transposeCharacter"),
          isUndo: eM("undo"),
        },
        eK = {
          subtree: !0,
          childList: !0,
          characterData: !0,
          characterDataOldValue: !0,
        };
      class eq extends l.Component {
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
            { receivedUserInput: n } = this.props,
            r = this.context;
          (this.manager =
            ((e = []),
            {
              registerMutations: (t) => {
                if (n.current) {
                  var i = t.filter((e) => G(r, e, t));
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
            n,
            r,
            i = null == (e = this.mutationObserver) ? void 0 : e.takeRecords();
          return (
            null != i &&
              i.length &&
              (null == (r = this.manager) || r.registerMutations(i)),
            null == (t = this.mutationObserver) || t.disconnect(),
            null == (n = this.manager) || n.restoreDOM(),
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
      eq.contextType = eb;
      var eW = er
        ? eq
        : (e) => {
            var { children: t } = e;
            return l.createElement(l.Fragment, null, t);
          };
      function eU(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return n.reduce(
          (e, t) => e.slice(0, t.start) + t.text + e.slice(t.end),
          e,
        );
      }
      function eV(e, t) {
        var { start: n, end: r, text: i } = t,
          u = e.slice(n, r),
          o = (function (e, t) {
            for (var n = Math.min(e.length, t.length), r = 0; r < n; r++)
              if (e.charAt(r) !== t.charAt(r)) return r;
            return n;
          })(u, i),
          a = Math.min(u.length - o, i.length - o),
          s = (function (e, t, n) {
            for (var r = Math.min(e.length, t.length, n), i = 0; i < r; i++)
              if (e.charAt(e.length - i - 1) !== t.charAt(t.length - i - 1))
                return i;
            return r;
          })(u, i, a),
          l = { start: n + o, end: r - s, text: i.slice(o, i.length - s) };
        return l.start === l.end && 0 === l.text.length ? null : l;
      }
      function eJ(e, t) {
        var { path: n, offset: r } = t;
        if (!d.KE.hasPath(e, n)) return null;
        var i = d.bP.get(e, n);
        if (!d.EY.isText(i)) return null;
        var u = d.KE.above(e, {
          match: (t) => d.Hg.isElement(t) && d.KE.isBlock(e, t),
          at: n,
        });
        if (!u) return null;
        for (; r > i.text.length; ) {
          var o = d.KE.next(e, { at: n, match: d.EY.isText });
          if (!o || !d.wA.isDescendant(o[1], u[1])) return null;
          (r -= i.text.length), (i = o[0]), (n = o[1]);
        }
        return { path: n, offset: r };
      }
      function eQ(e, t) {
        var n = eJ(e, t.anchor);
        if (!n) return null;
        if (d.Q6.isCollapsed(t)) return { anchor: n, focus: n };
        var r = eJ(e, t.focus);
        return r ? { anchor: n, focus: r } : null;
      }
      function eH(e, t, n) {
        var r = j.get(e),
          i =
            null == r
              ? void 0
              : r.find((e) => {
                  var { path: n } = e;
                  return d.wA.equals(n, t.path);
                });
        if (!i || t.offset <= i.diff.start)
          return d.bR.transform(t, n, { affinity: "backward" });
        var { diff: u } = i;
        if (t.offset <= u.start + u.text.length) {
          var o = { path: t.path, offset: u.start },
            a = d.bR.transform(o, n, { affinity: "backward" });
          return a
            ? { path: a.path, offset: a.offset + t.offset - u.start }
            : null;
        }
        var s = {
            path: t.path,
            offset: t.offset - u.text.length + u.end - u.start,
          },
          l = d.bR.transform(s, n, { affinity: "backward" });
        return l
          ? "split_node" === n.type &&
            d.wA.equals(n.path, t.path) &&
            s.offset < n.position &&
            u.start < n.position
            ? l
            : {
                path: l.path,
                offset: l.offset + u.text.length - u.end + u.start,
              }
          : null;
      }
      function eY(e, t, n) {
        var r = eH(e, t.anchor, n);
        if (!r) return null;
        if (d.Q6.isCollapsed(t)) return { anchor: r, focus: r };
        var i = eH(e, t.focus, n);
        return i ? { anchor: r, focus: i } : null;
      }
      function eX(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function eG(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eX(Object(n), !0).forEach(function (t) {
                v(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eX(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var e0 = function () {},
        e1 = ["node"];
      function e2(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var e3 = { subtree: !0, childList: !0, characterData: !0 },
        e4 = [
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
        e9 = ["text"];
      function e7(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function e6(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? e7(Object(n), !0).forEach(function (t) {
                v(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : e7(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var e8 = (e) => l.createElement(l.Fragment, null, eN(e)),
        e5 = (e) => {
          var t,
            n,
            r,
            u,
            a,
            c,
            f = (0, l.useCallback)(
              (e) => l.createElement(te, Object.assign({}, e)),
              [],
            ),
            {
              autoFocus: p,
              decorate: h = tt,
              onDOMBeforeInput: g,
              placeholder: D,
              readOnly: C = !1,
              renderElement: B,
              renderLeaf: F,
              renderPlaceholder: _ = f,
              scrollSelectionIntoView: S = tn,
              style: L = {},
              as: q = "div",
              disableDefaultStyles: J = !1,
            } = e,
            Q = m(e, e4),
            H = (() => {
              var e = (0, l.useContext)(eZ);
              if (!e)
                throw Error(
                  "The `useSlate` hook must be used inside the <Slate> component's context.",
                );
              var { editor: t } = e;
              return t;
            })(),
            [Y, X] = (0, l.useState)(!1),
            ee = (0, l.useRef)(null),
            en = (0, l.useRef)([]),
            { onUserInput: eo, receivedUserInput: es } =
              ((t = eA()),
              (n = (0, l.useRef)(!1)),
              (r = (0, l.useRef)(0)),
              (u = (0, l.useCallback)(() => {
                if (!n.current) {
                  n.current = !0;
                  var e = ev.getWindow(t);
                  e.cancelAnimationFrame(r.current),
                    (r.current = e.requestAnimationFrame(() => {
                      n.current = !1;
                    }));
                }
              }, [])),
              (0, l.useEffect)(() => () => cancelAnimationFrame(r.current), []),
              { receivedUserInput: n, onUserInput: u }),
            [, el] = (0, l.useReducer)((e) => e + 1, 0);
          R.set(H, el), k.set(H, C);
          var em = (0, l.useMemo)(
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
              null == em ||
                (null != em.latestElement &&
                  (em.latestElement.remove(), (em.latestElement = null)));
            },
            [],
          ),
            (0, l.useEffect)(() => {
              ee.current && p && ee.current.focus();
            }, [p]);
          var eg = (0, l.useCallback)(
              s()(() => {
                if (
                  (er || !ev.isComposing(H)) &&
                  (!em.isUpdatingSelection ||
                    (null != eB && eB.isFlushing())) &&
                  !em.isDraggingInternally
                ) {
                  var e = ev.findDocumentOrShadowRoot(H),
                    { activeElement: t } = e,
                    n = ev.toDOMNode(H, H),
                    r = e.getSelection();
                  if (
                    (t === n
                      ? ((em.latestElement = t), x.set(H, !0))
                      : x.delete(H),
                    !r)
                  )
                    return d.gB.deselect(H);
                  var { anchorNode: i, focusNode: u } = r,
                    o =
                      ev.hasEditableTarget(H, i) ||
                      ev.isTargetInsideNonReadonlyVoid(H, i),
                    a =
                      ev.hasEditableTarget(H, u) ||
                      ev.isTargetInsideNonReadonlyVoid(H, u);
                  if (o && a) {
                    var s = ev.toSlateRange(H, r, {
                      exactMatch: !1,
                      suppressThrow: !0,
                    });
                    s &&
                      (ev.isComposing(H) ||
                      (null != eB && eB.hasPendingChanges()) ||
                      (null != eB && eB.isFlushing())
                        ? null == eB || eB.handleUserSelect(s)
                        : d.gB.select(H, s));
                  }
                  !C || (o && a) || d.gB.deselect(H);
                }
              }, 100),
              [C],
            ),
            eD = (0, l.useMemo)(() => o()(eg, 0), [eg]),
            eB = (function (e) {
              var t,
                { node: n } = e,
                r = m(e, e1);
              if (!er) return null;
              var i = eA(),
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
                [o] = (0, l.useState)(() =>
                  (function (e) {
                    var {
                        editor: t,
                        scheduleOnDOMSelectionChange: n,
                        onDOMSelectionChange: r,
                      } = e,
                      i = !1,
                      u = null,
                      o = null,
                      a = null,
                      s = 0,
                      l = !1,
                      c = () => {
                        var e = $.get(t);
                        if (($.delete(t), e)) {
                          var { selection: n } = t,
                            r = eQ(t, e);
                          !r || (n && d.Q6.equals(r, n)) || d.gB.select(t, r);
                        }
                      },
                      f = () => {
                        if (
                          (o && (clearTimeout(o), (o = null)),
                          a && (clearTimeout(a), (a = null)),
                          !g() && !m())
                        )
                          return void c();
                        i || ((i = !0), setTimeout(() => (i = !1))),
                          m() && (i = "action");
                        var e =
                          t.selection &&
                          d.KE.rangeRef(t, t.selection, {
                            affinity: "forward",
                          });
                        T.set(t, t.marks), e0("flush", Z.get(t), j.get(t));
                        for (
                          var u = g();
                          (s = null == (f = j.get(t)) ? void 0 : f[0]);

                        ) {
                          var s,
                            f,
                            p,
                            h = N.get(t);
                          void 0 !== h && (N.delete(t), (t.marks = h)),
                            h && !1 === l && (l = null);
                          var v = (function (e) {
                            var { path: t, diff: n } = e;
                            return {
                              anchor: { path: t, offset: n.start },
                              focus: { path: t, offset: n.end },
                            };
                          })(s);
                          (t.selection && d.Q6.equals(t.selection, v)) ||
                            d.gB.select(t, v),
                            s.diff.text
                              ? d.KE.insertText(t, s.diff.text)
                              : d.KE.deleteFragment(t),
                            j.set(
                              t,
                              null == (p = j.get(t))
                                ? void 0
                                : p.filter((e) => {
                                    var { id: t } = e;
                                    return t !== s.id;
                                  }),
                            ),
                            !(function (e, t) {
                              var { path: n, diff: r } = t;
                              if (!d.KE.hasPath(e, n)) return !1;
                              var i = d.bP.get(e, n);
                              if (!d.EY.isText(i)) return !1;
                              if (
                                r.start !== i.text.length ||
                                0 === r.text.length
                              )
                                return (
                                  i.text.slice(
                                    r.start,
                                    r.start + r.text.length,
                                  ) === r.text
                                );
                              var u = d.wA.next(n);
                              if (!d.KE.hasPath(e, u)) return !1;
                              var o = d.bP.get(e, u);
                              return (
                                d.EY.isText(o) && o.text.startsWith(r.text)
                              );
                            })(t, s) &&
                              ((u = !1),
                              Z.delete(t),
                              T.delete(t),
                              (i = "action"),
                              $.delete(t),
                              n.cancel(),
                              r.cancel(),
                              null == e || e.unref());
                        }
                        var D = null == e ? void 0 : e.unref();
                        if (
                          (!D ||
                            $.get(t) ||
                            (t.selection && d.Q6.equals(D, t.selection)) ||
                            d.gB.select(t, D),
                          m())
                        )
                          return void (() => {
                            var e = Z.get(t);
                            if ((Z.delete(t), e)) {
                              if (e.at) {
                                var n = d.bR.isPoint(e.at)
                                  ? eJ(t, e.at)
                                  : eQ(t, e.at);
                                if (!n) return;
                                var r = d.KE.range(t, n);
                                (t.selection && d.Q6.equals(t.selection, r)) ||
                                  d.gB.select(t, n);
                              }
                              e.run();
                            }
                          })();
                        u && n(), n.flush(), r.flush(), c();
                        var C = T.get(t);
                        T.delete(t),
                          void 0 !== C && ((t.marks = C), t.onChange());
                      },
                      p = function () {
                        var e =
                            arguments.length > 0 &&
                            void 0 !== arguments[0] &&
                            arguments[0],
                          n = w.get(t);
                        if (n) {
                          if (g() || e) {
                            n.style.display = "none";
                            return;
                          }
                          n.style.removeProperty("display");
                        }
                      },
                      h = (e, n) => {
                        var r,
                          i,
                          u,
                          o,
                          a,
                          l,
                          c,
                          f,
                          h = null != (f = j.get(t)) ? f : [];
                        j.set(t, h);
                        var v = d.bP.leaf(t, e),
                          m = h.findIndex((t) => d.wA.equals(t.path, e));
                        if (m < 0) {
                          eV(v.text, n) &&
                            h.push({ path: e, diff: n, id: s++ }),
                            p();
                          return;
                        }
                        var g =
                          ((r = v.text),
                          (i = h[m].diff),
                          (u = Math.min(i.start, n.start)),
                          (o = Math.max(
                            0,
                            Math.min(i.start + i.text.length, n.end) - n.start,
                          )),
                          (a = eU(r, i, n)),
                          (l = Math.max(
                            n.start + n.text.length,
                            i.start +
                              i.text.length +
                              (i.start + i.text.length > n.start
                                ? n.text.length
                                : 0) -
                              o,
                          )),
                          (c = a.slice(u, l)),
                          eV(r, {
                            start: u,
                            end: Math.max(
                              i.end,
                              n.end - i.text.length + (i.end - i.start),
                            ),
                            text: c,
                          }));
                        if (!g) {
                          h.splice(m, 1), p();
                          return;
                        }
                        h[m] = eG(eG({}, h[m]), {}, { diff: g });
                      },
                      v = function (e) {
                        var { at: i } =
                          arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : {};
                        (l = !1),
                          $.delete(t),
                          n.cancel(),
                          r.cancel(),
                          m() && f(),
                          Z.set(t, { at: i, run: e }),
                          (a = setTimeout(f));
                      },
                      m = () => !!Z.get(t),
                      g = () => {
                        var e;
                        return !!(null != (e = j.get(t)) && e.length);
                      },
                      D = (e) => {
                        $.set(t, e), o && (clearTimeout(o), (o = null));
                        var { selection: n } = t;
                        if (e) {
                          var r =
                              !n || !d.wA.equals(n.anchor.path, e.anchor.path),
                            i =
                              !n ||
                              !d.wA.equals(
                                n.anchor.path.slice(0, -1),
                                e.anchor.path.slice(0, -1),
                              );
                          ((r && l) || i) && (l = !1),
                            (r || g()) && (o = setTimeout(f, 200));
                        }
                      },
                      C = () => {
                        m() || (a = setTimeout(f));
                      };
                    return {
                      flush: f,
                      scheduleFlush: C,
                      hasPendingDiffs: g,
                      hasPendingAction: m,
                      hasPendingChanges: () => m() || g(),
                      isFlushing: () => i,
                      handleUserSelect: D,
                      handleCompositionEnd: (e) => {
                        u && clearTimeout(u),
                          (u = setTimeout(() => {
                            z.set(t, !1), f();
                          }, 25));
                      },
                      handleCompositionStart: (e) => {
                        z.set(t, !0), u && (clearTimeout(u), (u = null));
                      },
                      handleDOMBeforeInput: (e) => {
                        o && (clearTimeout(o), (o = null));
                        var { inputType: n } = e,
                          r = null,
                          i = e.dataTransfer || e.data || void 0;
                        !1 !== l &&
                          "insertText" !== n &&
                          "insertCompositionText" !== n &&
                          (l = !1);
                        var [u] = e.getTargetRanges();
                        u &&
                          (r = ev.toSlateRange(t, u, {
                            exactMatch: !1,
                            suppressThrow: !0,
                          }));
                        var a = ev.getWindow(t).getSelection();
                        if (
                          (!r &&
                            a &&
                            ((u = a),
                            (r = ev.toSlateRange(t, a, {
                              exactMatch: !1,
                              suppressThrow: !0,
                            }))),
                          (r = null != (z = r) ? z : t.selection))
                        ) {
                          var s = !0;
                          if (n.startsWith("delete")) {
                            if (d.Q6.isExpanded(r)) {
                              var [c, f] = d.Q6.edges(r);
                              if (
                                d.bP.leaf(t, c.path).text.length === c.offset &&
                                0 === f.offset
                              ) {
                                var p = d.KE.next(t, {
                                  at: c.path,
                                  match: d.EY.isText,
                                });
                                p &&
                                  d.wA.equals(p[1], f.path) &&
                                  (r = { anchor: f, focus: f });
                              }
                            }
                            var m = n.endsWith("Backward")
                                ? "backward"
                                : "forward",
                              [g, B] = d.Q6.edges(r),
                              [E, y] = d.KE.leaf(t, g.path),
                              w = { text: "", start: g.offset, end: B.offset },
                              b = j.get(t),
                              A =
                                null == b
                                  ? void 0
                                  : b.find((e) => d.wA.equals(e.path, y)),
                              F = A ? [A.diff, w] : [w];
                            if (
                              (0 === eU(E.text, ...F).length && (s = !1),
                              d.Q6.isExpanded(r))
                            ) {
                              if (
                                s &&
                                d.wA.equals(r.anchor.path, r.focus.path)
                              ) {
                                var _ = {
                                  path: r.anchor.path,
                                  offset: g.offset,
                                };
                                return (
                                  D(d.KE.range(t, _, _)),
                                  h(r.anchor.path, {
                                    text: "",
                                    end: B.offset,
                                    start: g.offset,
                                  })
                                );
                              }
                              return v(
                                () => d.KE.deleteFragment(t, { direction: m }),
                                { at: r },
                              );
                            }
                          }
                          switch (n) {
                            case "deleteByComposition":
                            case "deleteByCut":
                            case "deleteByDrag":
                              return v(() => d.KE.deleteFragment(t), { at: r });
                            case "deleteContent":
                            case "deleteContentForward":
                              var { anchor: k } = r;
                              if (s && d.Q6.isCollapsed(r)) {
                                var x = d.bP.leaf(t, k.path);
                                if (k.offset < x.text.length)
                                  return h(k.path, {
                                    text: "",
                                    start: k.offset,
                                    end: k.offset + 1,
                                  });
                              }
                              return v(() => d.KE.deleteForward(t), { at: r });
                            case "deleteContentBackward":
                              var z,
                                O,
                                { anchor: S } = r,
                                P = V(u)
                                  ? u.isCollapsed
                                  : !!(null != (O = u) && O.collapsed);
                              if (s && P && d.Q6.isCollapsed(r) && S.offset > 0)
                                return h(S.path, {
                                  text: "",
                                  start: S.offset - 1,
                                  end: S.offset,
                                });
                              return v(() => d.KE.deleteBackward(t), { at: r });
                            case "deleteEntireSoftLine":
                              return v(
                                () => {
                                  d.KE.deleteBackward(t, { unit: "line" }),
                                    d.KE.deleteForward(t, { unit: "line" });
                                },
                                { at: r },
                              );
                            case "deleteHardLineBackward":
                              return v(
                                () => d.KE.deleteBackward(t, { unit: "block" }),
                                { at: r },
                              );
                            case "deleteSoftLineBackward":
                              return v(
                                () => d.KE.deleteBackward(t, { unit: "line" }),
                                { at: r },
                              );
                            case "deleteHardLineForward":
                              return v(
                                () => d.KE.deleteForward(t, { unit: "block" }),
                                { at: r },
                              );
                            case "deleteSoftLineForward":
                              return v(
                                () => d.KE.deleteForward(t, { unit: "line" }),
                                { at: r },
                              );
                            case "deleteWordBackward":
                              return v(
                                () => d.KE.deleteBackward(t, { unit: "word" }),
                                { at: r },
                              );
                            case "deleteWordForward":
                              return v(
                                () => d.KE.deleteForward(t, { unit: "word" }),
                                { at: r },
                              );
                            case "insertLineBreak":
                              return v(() => d.KE.insertSoftBreak(t), {
                                at: r,
                              });
                            case "insertParagraph":
                              return v(() => d.KE.insertBreak(t), { at: r });
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
                                return v(() => ev.insertData(t, i), { at: r });
                              var T = null != i ? i : "";
                              if (
                                (N.get(t) && (T = T.replace("\uFEFF", "")),
                                "insertText" === n &&
                                  /.*\n.*\n$/.test(T) &&
                                  (T = T.slice(0, -1)),
                                T.includes("\n"))
                              )
                                return v(
                                  () => {
                                    var e = T.split("\n");
                                    e.forEach((n, r) => {
                                      n && d.KE.insertText(t, n),
                                        r !== e.length - 1 &&
                                          d.KE.insertSoftBreak(t);
                                    });
                                  },
                                  { at: r },
                                );
                              if (d.wA.equals(r.anchor.path, r.focus.path)) {
                                var [Z, $] = d.Q6.edges(r),
                                  R = {
                                    start: Z.offset,
                                    end: $.offset,
                                    text: T,
                                  };
                                if (T && l && "insertCompositionText" === n) {
                                  var I = l.start + l.text.search(/\S|$/);
                                  R.start + R.text.search(/\S|$/) === I + 1 &&
                                  R.end === l.start + l.text.length
                                    ? ((R.start -= 1), (l = null), C())
                                    : (l = !1);
                                } else
                                  l =
                                    "insertText" === n &&
                                    (null === l
                                      ? R
                                      : !!(l && d.Q6.isCollapsed(r)) &&
                                        l.end + l.text.length === Z.offset &&
                                        eG(
                                          eG({}, l),
                                          {},
                                          { text: l.text + T },
                                        ));
                                if (s) return void h(Z.path, R);
                              }
                              return v(() => d.KE.insertText(t, T), { at: r });
                          }
                        }
                      },
                      handleKeyDown: (e) => {
                        g() || (p(!0), setTimeout(p));
                      },
                      handleDomMutations: (e) => {
                        if (!(g() || m()) && e.some((n) => G(t, n, e))) {
                          var n;
                          null == (n = R.get(t)) || n();
                        }
                      },
                      handleInput: () => {
                        (m() || !g()) && f();
                      },
                    };
                  })(
                    (function (e) {
                      for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2
                          ? e2(Object(n), !0).forEach(function (t) {
                              v(e, t, n[t]);
                            })
                          : Object.getOwnPropertyDescriptors
                            ? Object.defineProperties(
                                e,
                                Object.getOwnPropertyDescriptors(n),
                              )
                            : e2(Object(n)).forEach(function (t) {
                                Object.defineProperty(
                                  e,
                                  t,
                                  Object.getOwnPropertyDescriptor(n, t),
                                );
                              });
                      }
                      return e;
                    })({ editor: i }, r),
                  ),
                );
              return (
                !(function (e, t, n) {
                  var [r] = (0, l.useState)(() => new MutationObserver(t));
                  eC(() => {
                    r.takeRecords();
                  }),
                    (0, l.useEffect)(() => {
                      if (!e.current)
                        throw Error(
                          "Failed to attach MutationObserver, `node` is undefined",
                        );
                      return r.observe(e.current, n), () => r.disconnect();
                    }, []);
                })(n, o.handleDomMutations, e3),
                P.set(i, o.scheduleFlush),
                u && o.flush(),
                o
              );
            })({
              node: ee,
              onDOMSelectionChange: eg,
              scheduleOnDOMSelectionChange: eD,
            });
          eC(() => {
            ee.current && (e = K(ee.current))
              ? (E.set(H, e),
                y.set(H, ee.current),
                A.set(H, ee.current),
                b.set(ee.current, H))
              : A.delete(H);
            var e,
              { selection: t } = H,
              n = ev.findDocumentOrShadowRoot(H).getSelection();
            if (
              !(!n || !ev.isFocused(H) || (null != eB && eB.hasPendingAction()))
            ) {
              var r = (e) => {
                  var r = "None" !== n.type;
                  if (t || r) {
                    var i = y.get(H),
                      u = !1;
                    if (
                      (i.contains(n.anchorNode) &&
                        i.contains(n.focusNode) &&
                        (u = !0),
                      r && u && t && !e)
                    ) {
                      var o = ev.toSlateRange(H, n, {
                        exactMatch: !0,
                        suppressThrow: !0,
                      });
                      if (o && d.Q6.equals(o, t)) {
                        if (!em.hasMarkPlaceholder) return;
                        var a,
                          { anchorNode: s } = n;
                        if (
                          null != s &&
                          null != (a = s.parentElement) &&
                          a.hasAttribute("data-slate-mark-placeholder")
                        )
                          return;
                      }
                    }
                    if (t && !ev.hasRange(H, t)) {
                      H.selection = ev.toSlateRange(H, n, {
                        exactMatch: !1,
                        suppressThrow: !0,
                      });
                      return;
                    }
                    em.isUpdatingSelection = !0;
                    var l = t && ev.toDOMRange(H, t);
                    return (
                      l
                        ? (d.Q6.isBackward(t)
                            ? n.setBaseAndExtent(
                                l.endContainer,
                                l.endOffset,
                                l.startContainer,
                                l.startOffset,
                              )
                            : n.setBaseAndExtent(
                                l.startContainer,
                                l.startOffset,
                                l.endContainer,
                                l.endOffset,
                              ),
                          S(H, l))
                        : n.removeAllRanges(),
                      l
                    );
                  }
                },
                i = r(),
                u = (null == eB ? void 0 : eB.isFlushing()) === "action";
              if (!er || !u)
                return void setTimeout(() => {
                  i && ei && ev.toDOMNode(H, H).focus(),
                    (em.isUpdatingSelection = !1);
                });
              var o = null,
                a = requestAnimationFrame(() => {
                  if (u) {
                    var e = (e) => {
                      try {
                        ev.toDOMNode(H, H).focus(), r(e);
                      } catch (e) {}
                    };
                    e(),
                      (o = setTimeout(() => {
                        e(!0), (em.isUpdatingSelection = !1);
                      }));
                  }
                });
              return () => {
                cancelAnimationFrame(a), o && clearTimeout(o);
              };
            }
          });
          var eE = (0, l.useCallback)(
              (e) => {
                if (
                  (eo(), !C && ev.hasEditableTarget(H, e.target) && !ti(e, g))
                ) {
                  if (eB) return eB.handleDOMBeforeInput(e);
                  eD.flush(), eg.flush();
                  var { selection: t } = H,
                    { inputType: n } = e,
                    r = e.dataTransfer || e.data || void 0,
                    i =
                      "insertCompositionText" === n ||
                      "deleteCompositionText" === n;
                  if (!(i && ev.isComposing(H))) {
                    var u = !1;
                    if (
                      "insertText" === n &&
                      t &&
                      d.Q6.isCollapsed(t) &&
                      e.data &&
                      1 === e.data.length &&
                      /[a-z ]/i.test(e.data) &&
                      0 !== t.anchor.offset
                    ) {
                      (u = !0), H.marks && (u = !1);
                      var { anchor: o } = t,
                        [a, s] = ev.toDOMPoint(H, o),
                        l =
                          null == (p = a.parentElement)
                            ? void 0
                            : p.closest("a"),
                        c = ev.getWindow(H);
                      if (u && l && ev.hasDOMNode(H, l)) {
                        var f,
                          p,
                          h,
                          v,
                          m =
                            null == c
                              ? void 0
                              : c.document
                                  .createTreeWalker(l, NodeFilter.SHOW_TEXT)
                                  .lastChild();
                        m === a &&
                          (null == (v = m.textContent) ? void 0 : v.length) ===
                            s &&
                          (u = !1);
                      }
                      if (
                        u &&
                        a.parentElement &&
                        (null == c ||
                        null == (h = c.getComputedStyle(a.parentElement))
                          ? void 0
                          : h.whiteSpace) === "pre"
                      ) {
                        var D = d.KE.above(H, {
                          at: o.path,
                          match: (e) => d.Hg.isElement(e) && d.KE.isBlock(H, e),
                        });
                        D && d.bP.string(D[0]).includes("	") && (u = !1);
                      }
                    }
                    if (!n.startsWith("delete") || n.startsWith("deleteBy")) {
                      var [B] = e.getTargetRanges();
                      if (B) {
                        var E = ev.toSlateRange(H, B, {
                          exactMatch: !1,
                          suppressThrow: !1,
                        });
                        if (!t || !d.Q6.equals(t, E)) {
                          u = !1;
                          var y =
                            !i && H.selection && d.KE.rangeRef(H, H.selection);
                          d.gB.select(H, E), y && O.set(H, y);
                        }
                      }
                    }
                    if (!i) {
                      if (
                        (u || e.preventDefault(),
                        t && d.Q6.isExpanded(t) && n.startsWith("delete"))
                      ) {
                        var w = n.endsWith("Backward") ? "backward" : "forward";
                        d.KE.deleteFragment(H, { direction: w });
                        return;
                      }
                      switch (n) {
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
                          "insertFromComposition" === n &&
                            ev.isComposing(H) &&
                            (X(!1), z.set(H, !1)),
                            (null == r ? void 0 : r.constructor.name) ===
                            "DataTransfer"
                              ? ev.insertData(H, r)
                              : "string" == typeof r &&
                                (u
                                  ? en.current.push(() => d.KE.insertText(H, r))
                                  : d.KE.insertText(H, r));
                      }
                      var b = null == (f = O.get(H)) ? void 0 : f.unref();
                      O.delete(H),
                        !b ||
                          (H.selection && d.Q6.equals(H.selection, b)) ||
                          d.gB.select(H, b);
                    }
                  }
                }
              },
              [C, g],
            ),
            ey = (0, l.useCallback)(
              (e) => {
                null == e
                  ? (eg.cancel(),
                    eD.cancel(),
                    y.delete(H),
                    A.delete(H),
                    ee.current &&
                      eh &&
                      ee.current.removeEventListener("beforeinput", eE))
                  : eh && e.addEventListener("beforeinput", eE),
                  (ee.current = e);
              },
              [ee, eE, eg, eD],
            );
          eC(() => {
            var e = ev.getWindow(H);
            return (
              e.document.addEventListener("selectionchange", eD),
              () => {
                e.document.removeEventListener("selectionchange", eD);
              }
            );
          }, [eD]);
          var ew = h([H, []]);
          if (
            D &&
            1 === H.children.length &&
            1 === Array.from(d.bP.texts(H)).length &&
            "" === d.bP.string(H) &&
            !Y
          ) {
            var eb = d.KE.start(H, []);
            ew.push({ [I]: !0, placeholder: D, anchor: eb, focus: eb });
          }
          var { marks: eF } = H;
          if (
            ((em.hasMarkPlaceholder = !1),
            H.selection && d.Q6.isCollapsed(H.selection) && eF)
          ) {
            var { anchor: e_ } = H.selection,
              ek = d.bP.leaf(H, e_.path),
              ex = m(ek, e9);
            if (!d.EY.equals(ek, eF, { loose: !0 })) {
              em.hasMarkPlaceholder = !0;
              var ez = Object.fromEntries(
                Object.keys(ex).map((e) => [e, null]),
              );
              ew.push(
                e6(e6(e6({ [M]: !0 }, ez), eF), {}, { anchor: e_, focus: e_ }),
              );
            }
          }
          (0, l.useEffect)(() => {
            setTimeout(() => {
              var { selection: e } = H;
              if (e) {
                var { anchor: t } = e,
                  n = d.bP.leaf(H, t.path);
                if (eF && !d.EY.equals(n, eF, { loose: !0 }))
                  return void N.set(H, eF);
              }
              N.delete(H);
            });
          });
          var eS =
            null == (a = w.get(H)) || null == (c = a.getBoundingClientRect())
              ? void 0
              : c.height;
          return l.createElement(
            eT.Provider,
            { value: C },
            l.createElement(
              eO.Provider,
              { value: h },
              l.createElement(
                eW,
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
                      spellCheck: (!!eh || !ep) && Q.spellCheck,
                      autoCorrect: eh || !ep ? Q.autoCorrect : "false",
                      autoCapitalize: eh || !ep ? Q.autoCapitalize : "false",
                      "data-slate-editor": !0,
                      "data-slate-node": "value",
                      contentEditable: !C,
                      zindex: -1,
                      suppressContentEditableWarning: !0,
                      ref: ey,
                      style: e6(
                        e6(
                          {},
                          J
                            ? {}
                            : e6(
                                {
                                  position: "relative",
                                  outline: "none",
                                  whiteSpace: "pre-wrap",
                                  wordWrap: "break-word",
                                },
                                eS ? { minHeight: eS } : {},
                              ),
                        ),
                        L,
                      ),
                      onBeforeInput: (0, l.useCallback)(
                        (e) => {
                          if (
                            !eh &&
                            !C &&
                            !tr(e, Q.onBeforeInput) &&
                            ev.hasSelectableTarget(H, e.target) &&
                            (e.preventDefault(), !ev.isComposing(H))
                          ) {
                            var t = e.data;
                            d.KE.insertText(H, t);
                          }
                        },
                        [C],
                      ),
                      onInput: (0, l.useCallback)((e) => {
                        if (!tr(e, Q.onInput)) {
                          if (eB) return void eB.handleInput();
                          for (var t of en.current) t();
                          en.current = [];
                        }
                      }, []),
                      onBlur: (0, l.useCallback)(
                        (e) => {
                          if (
                            C ||
                            em.isUpdatingSelection ||
                            !ev.hasSelectableTarget(H, e.target) ||
                            tr(e, Q.onBlur)
                          )
                            return;
                          var t = ev.findDocumentOrShadowRoot(H);
                          if (em.latestElement !== t.activeElement) {
                            var { relatedTarget: n } = e;
                            if (
                              n !== ev.toDOMNode(H, H) &&
                              !(W(n) && n.hasAttribute("data-slate-spacer"))
                            ) {
                              if (null != n && U(n) && ev.hasDOMNode(H, n)) {
                                var r = ev.toSlateNode(H, n);
                                if (d.Hg.isElement(r) && !H.isVoid(r)) return;
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
                            ev.hasTarget(H, e.target) &&
                            !tr(e, Q.onClick) &&
                            U(e.target)
                          ) {
                            var t = ev.toSlateNode(H, e.target),
                              n = ev.findPath(H, t);
                            if (d.KE.hasPath(H, n) && d.bP.get(H, n) === t) {
                              if (3 === e.detail && n.length >= 1) {
                                var r = n;
                                if (
                                  !(d.Hg.isElement(t) && d.KE.isBlock(H, t))
                                ) {
                                  var i,
                                    u = d.KE.above(H, {
                                      match: (e) =>
                                        d.Hg.isElement(e) && d.KE.isBlock(H, e),
                                      at: n,
                                    });
                                  r =
                                    null != (i = null == u ? void 0 : u[1])
                                      ? i
                                      : n.slice(0, 1);
                                }
                                var o = d.KE.range(H, r);
                                d.gB.select(H, o);
                                return;
                              }
                              if (!C) {
                                var a = d.KE.start(H, n),
                                  s = d.KE.end(H, n),
                                  l = d.KE.void(H, { at: a }),
                                  c = d.KE.void(H, { at: s });
                                if (l && c && d.wA.equals(l[1], c[1])) {
                                  var f = d.KE.range(H, a);
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
                            ev.hasSelectableTarget(H, e.target) &&
                            (ev.isComposing(H) && (X(!1), z.set(H, !1)),
                            null == eB || eB.handleCompositionEnd(e),
                            !tr(e, Q.onCompositionEnd) &&
                              !er &&
                              !eu &&
                              !ec &&
                              !et &&
                              !ef &&
                              !ed) &&
                            e.data
                          ) {
                            var t = N.get(H);
                            N.delete(H),
                              void 0 !== t &&
                                (T.set(H, H.marks), (H.marks = t)),
                              d.KE.insertText(H, e.data);
                            var n = T.get(H);
                            T.delete(H), void 0 !== n && (H.marks = n);
                          }
                        },
                        [Q.onCompositionEnd],
                      ),
                      onCompositionUpdate: (0, l.useCallback)(
                        (e) => {
                          !ev.hasSelectableTarget(H, e.target) ||
                            tr(e, Q.onCompositionUpdate) ||
                            ev.isComposing(H) ||
                            (X(!0), z.set(H, !0));
                        },
                        [Q.onCompositionUpdate],
                      ),
                      onCompositionStart: (0, l.useCallback)(
                        (e) => {
                          if (
                            ev.hasSelectableTarget(H, e.target) &&
                            (null == eB || eB.handleCompositionStart(e),
                            !tr(e, Q.onCompositionStart) && !er)
                          ) {
                            X(!0);
                            var { selection: t } = H;
                            if (t) {
                              if (d.Q6.isExpanded(t))
                                return void d.KE.deleteFragment(H);
                              var n = d.KE.above(H, {
                                match: (e) =>
                                  d.Hg.isElement(e) && d.KE.isInline(H, e),
                                mode: "highest",
                              });
                              if (n) {
                                var [, r] = n;
                                if (d.KE.isEnd(H, t.anchor, r)) {
                                  var i = d.KE.after(H, r);
                                  d.gB.setSelection(H, { anchor: i, focus: i });
                                }
                              }
                            }
                          }
                        },
                        [Q.onCompositionStart],
                      ),
                      onCopy: (0, l.useCallback)(
                        (e) => {
                          ev.hasSelectableTarget(H, e.target) &&
                            !tr(e, Q.onCopy) &&
                            (e.preventDefault(),
                            ev.setFragmentData(H, e.clipboardData, "copy"));
                        },
                        [Q.onCopy],
                      ),
                      onCut: (0, l.useCallback)(
                        (e) => {
                          if (
                            !C &&
                            ev.hasSelectableTarget(H, e.target) &&
                            !tr(e, Q.onCut)
                          ) {
                            e.preventDefault(),
                              ev.setFragmentData(H, e.clipboardData, "cut");
                            var { selection: t } = H;
                            if (t)
                              if (d.Q6.isExpanded(t)) d.KE.deleteFragment(H);
                              else {
                                var n = d.bP.parent(H, t.anchor.path);
                                d.KE.isVoid(H, n) && d.gB.delete(H);
                              }
                          }
                        },
                        [C, Q.onCut],
                      ),
                      onDragOver: (0, l.useCallback)(
                        (e) => {
                          if (
                            ev.hasTarget(H, e.target) &&
                            !tr(e, Q.onDragOver)
                          ) {
                            var t = ev.toSlateNode(H, e.target);
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
                            ev.hasTarget(H, e.target) &&
                            !tr(e, Q.onDragStart)
                          ) {
                            var t = ev.toSlateNode(H, e.target),
                              n = ev.findPath(H, t);
                            if (
                              (d.Hg.isElement(t) && d.KE.isVoid(H, t)) ||
                              d.KE.void(H, { at: n, voids: !0 })
                            ) {
                              var r = d.KE.range(H, n);
                              d.gB.select(H, r);
                            }
                            (em.isDraggingInternally = !0),
                              ev.setFragmentData(H, e.dataTransfer, "drag");
                          }
                        },
                        [C, Q.onDragStart],
                      ),
                      onDrop: (0, l.useCallback)(
                        (e) => {
                          if (
                            !C &&
                            ev.hasTarget(H, e.target) &&
                            !tr(e, Q.onDrop)
                          ) {
                            e.preventDefault();
                            var t = H.selection,
                              n = ev.findEventRange(H, e),
                              r = e.dataTransfer;
                            d.gB.select(H, n),
                              em.isDraggingInternally &&
                                t &&
                                !d.Q6.equals(t, n) &&
                                !d.KE.void(H, { at: n, voids: !0 }) &&
                                d.gB.delete(H, { at: t }),
                              ev.insertData(H, r),
                              ev.isFocused(H) || ev.focus(H);
                          }
                          em.isDraggingInternally = !1;
                        },
                        [C, Q.onDrop],
                      ),
                      onDragEnd: (0, l.useCallback)(
                        (e) => {
                          !C &&
                            em.isDraggingInternally &&
                            Q.onDragEnd &&
                            ev.hasTarget(H, e.target) &&
                            Q.onDragEnd(e),
                            (em.isDraggingInternally = !1);
                        },
                        [C, Q.onDragEnd],
                      ),
                      onFocus: (0, l.useCallback)(
                        (e) => {
                          if (
                            !C &&
                            !em.isUpdatingSelection &&
                            ev.hasEditableTarget(H, e.target) &&
                            !tr(e, Q.onFocus)
                          ) {
                            var t = ev.toDOMNode(H, H);
                            if (
                              ((em.latestElement =
                                ev.findDocumentOrShadowRoot(H).activeElement),
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
                          if (!C && ev.hasEditableTarget(H, e.target)) {
                            null == eB || eB.handleKeyDown(e);
                            var { nativeEvent: t } = e;
                            if (
                              (ev.isComposing(H) &&
                                !1 === t.isComposing &&
                                (z.set(H, !1), X(!1)),
                              !(tr(e, Q.onKeyDown) || ev.isComposing(H)))
                            ) {
                              var { selection: n } = H,
                                r =
                                  H.children[null !== n ? n.focus.path[0] : 0],
                                u = "rtl" === i()(d.bP.string(r));
                              if (eL.isRedo(t)) {
                                e.preventDefault(),
                                  "function" == typeof H.redo && H.redo();
                                return;
                              }
                              if (eL.isUndo(t)) {
                                e.preventDefault(),
                                  "function" == typeof H.undo && H.undo();
                                return;
                              }
                              if (eL.isMoveLineBackward(t)) {
                                e.preventDefault(),
                                  d.gB.move(H, { unit: "line", reverse: !0 });
                                return;
                              }
                              if (eL.isMoveLineForward(t)) {
                                e.preventDefault(),
                                  d.gB.move(H, { unit: "line" });
                                return;
                              }
                              if (eL.isExtendLineBackward(t)) {
                                e.preventDefault(),
                                  d.gB.move(H, {
                                    unit: "line",
                                    edge: "focus",
                                    reverse: !0,
                                  });
                                return;
                              }
                              if (eL.isExtendLineForward(t)) {
                                e.preventDefault(),
                                  d.gB.move(H, { unit: "line", edge: "focus" });
                                return;
                              }
                              if (eL.isMoveBackward(t)) {
                                e.preventDefault(),
                                  n && d.Q6.isCollapsed(n)
                                    ? d.gB.move(H, { reverse: !u })
                                    : d.gB.collapse(H, { edge: "start" });
                                return;
                              }
                              if (eL.isMoveForward(t)) {
                                e.preventDefault(),
                                  n && d.Q6.isCollapsed(n)
                                    ? d.gB.move(H, { reverse: u })
                                    : d.gB.collapse(H, { edge: "end" });
                                return;
                              }
                              if (eL.isMoveWordBackward(t)) {
                                e.preventDefault(),
                                  n &&
                                    d.Q6.isExpanded(n) &&
                                    d.gB.collapse(H, { edge: "focus" }),
                                  d.gB.move(H, { unit: "word", reverse: !u });
                                return;
                              }
                              if (eL.isMoveWordForward(t)) {
                                e.preventDefault(),
                                  n &&
                                    d.Q6.isExpanded(n) &&
                                    d.gB.collapse(H, { edge: "focus" }),
                                  d.gB.move(H, { unit: "word", reverse: u });
                                return;
                              }
                              if (eh) {
                                if (
                                  (ea || eu) &&
                                  n &&
                                  (eL.isDeleteBackward(t) ||
                                    eL.isDeleteForward(t)) &&
                                  d.Q6.isCollapsed(n)
                                ) {
                                  var o = d.bP.parent(H, n.anchor.path);
                                  if (
                                    d.Hg.isElement(o) &&
                                    d.KE.isVoid(H, o) &&
                                    (d.KE.isInline(H, o) || d.KE.isBlock(H, o))
                                  ) {
                                    e.preventDefault(),
                                      d.KE.deleteBackward(H, { unit: "block" });
                                    return;
                                  }
                                }
                              } else {
                                if (
                                  eL.isBold(t) ||
                                  eL.isItalic(t) ||
                                  eL.isTransposeCharacter(t)
                                )
                                  return void e.preventDefault();
                                if (eL.isSoftBreak(t)) {
                                  e.preventDefault(), d.KE.insertSoftBreak(H);
                                  return;
                                }
                                if (eL.isSplitBlock(t)) {
                                  e.preventDefault(), d.KE.insertBreak(H);
                                  return;
                                }
                                if (eL.isDeleteBackward(t)) {
                                  e.preventDefault(),
                                    n && d.Q6.isExpanded(n)
                                      ? d.KE.deleteFragment(H, {
                                          direction: "backward",
                                        })
                                      : d.KE.deleteBackward(H);
                                  return;
                                }
                                if (eL.isDeleteForward(t)) {
                                  e.preventDefault(),
                                    n && d.Q6.isExpanded(n)
                                      ? d.KE.deleteFragment(H, {
                                          direction: "forward",
                                        })
                                      : d.KE.deleteForward(H);
                                  return;
                                }
                                if (eL.isDeleteLineBackward(t)) {
                                  e.preventDefault(),
                                    n && d.Q6.isExpanded(n)
                                      ? d.KE.deleteFragment(H, {
                                          direction: "backward",
                                        })
                                      : d.KE.deleteBackward(H, {
                                          unit: "line",
                                        });
                                  return;
                                }
                                if (eL.isDeleteLineForward(t)) {
                                  e.preventDefault(),
                                    n && d.Q6.isExpanded(n)
                                      ? d.KE.deleteFragment(H, {
                                          direction: "forward",
                                        })
                                      : d.KE.deleteForward(H, { unit: "line" });
                                  return;
                                }
                                if (eL.isDeleteWordBackward(t)) {
                                  e.preventDefault(),
                                    n && d.Q6.isExpanded(n)
                                      ? d.KE.deleteFragment(H, {
                                          direction: "backward",
                                        })
                                      : d.KE.deleteBackward(H, {
                                          unit: "word",
                                        });
                                  return;
                                }
                                if (eL.isDeleteWordForward(t)) {
                                  e.preventDefault(),
                                    n && d.Q6.isExpanded(n)
                                      ? d.KE.deleteFragment(H, {
                                          direction: "forward",
                                        })
                                      : d.KE.deleteForward(H, { unit: "word" });
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
                            ev.hasEditableTarget(H, e.target) &&
                            !tr(e, Q.onPaste) &&
                            (!eh ||
                              ((t = e.nativeEvent).clipboardData &&
                                "" !== t.clipboardData.getData("text/plain") &&
                                1 === t.clipboardData.types.length) ||
                              eu) &&
                            (e.preventDefault(),
                            ev.insertData(H, e.clipboardData));
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
        te = (e) => {
          var { attributes: t, children: n } = e;
          return l.createElement(
            "span",
            Object.assign({}, t),
            n,
            er && l.createElement("br", null),
          );
        },
        tt = () => [],
        tn = (e, t) => {
          if (
            t.getBoundingClientRect &&
            (!e.selection || (e.selection && d.Q6.isCollapsed(e.selection)))
          ) {
            var n = t.startContainer.parentElement;
            (n.getBoundingClientRect = t.getBoundingClientRect.bind(t)),
              (0, c.A)(n, { scrollMode: "if-needed" }),
              delete n.getBoundingClientRect;
          }
        },
        tr = (e, t) => {
          if (!t) return !1;
          var n = t(e);
          return null != n
            ? n
            : e.isDefaultPrevented() || e.isPropagationStopped();
        },
        ti = (e, t) => {
          if (!t) return !1;
          var n = t(e);
          return null != n ? n : e.defaultPrevented;
        },
        tu = (0, l.createContext)(!1),
        to = () => (0, l.useContext)(tu),
        ta = (0, l.createContext)({}),
        ts = ["editor", "children", "onChange", "value"],
        tl = (e) => {
          var t,
            n,
            r,
            { editor: i, children: u, onChange: o, value: a } = e,
            s = m(e, ts),
            c = (0, l.useRef)(!1),
            [f, p] = l.useState(() => {
              if (!d.bP.isNodeList(a))
                throw Error(
                  "[Slate] value is invalid! Expected a list of elements but got: ".concat(
                    d.h6.stringify(a),
                  ),
                );
              if (!d.KE.isEditor(i))
                throw Error(
                  "[Slate] editor is invalid! You passed: ".concat(
                    d.h6.stringify(i),
                  ),
                );
              return (i.children = a), Object.assign(i, s), { v: 0, editor: i };
            }),
            { selectorContext: h, onChange: v } =
              ((t = (0, l.useRef)([]).current),
              (n = (0, l.useRef)({ editor: i }).current),
              (r = (0, l.useCallback)((e) => {
                (n.editor = e), t.forEach((t) => t(e));
              }, [])),
              {
                selectorContext: (0, l.useMemo)(
                  () => ({
                    getSlate: () => n.editor,
                    addEventListener: (e) => (
                      t.push(e),
                      () => {
                        t.splice(t.indexOf(e), 1);
                      }
                    ),
                  }),
                  [t, n],
                ),
                onChange: r,
              }),
            g = (0, l.useCallback)(() => {
              o && o(i.children), p((e) => ({ v: e.v + 1, editor: i })), v(i);
            }, [o]);
          (0, l.useEffect)(
            () => (
              S.set(i, g),
              () => {
                S.set(i, () => {}), (c.current = !0);
              }
            ),
            [g],
          );
          var [D, C] = (0, l.useState)(ev.isFocused(i));
          return (
            (0, l.useEffect)(() => {
              C(ev.isFocused(i));
            }),
            eC(() => {
              var e = () => C(ev.isFocused(i));
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
              ta.Provider,
              { value: h },
              l.createElement(
                eZ.Provider,
                { value: f },
                l.createElement(
                  eb.Provider,
                  { value: f.editor },
                  l.createElement(tu.Provider, { value: D }, u),
                ),
              ),
            )
          );
        },
        tc = (e, t) => {
          var n = (t.top + t.bottom) / 2;
          return e.top <= n && e.bottom >= n;
        },
        td = (e, t, n) => {
          var r = ev.toDOMRange(e, t).getBoundingClientRect(),
            i = ev.toDOMRange(e, n).getBoundingClientRect();
          return tc(r, i) && tc(i, r);
        };
      function tf(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function tp(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? tf(Object(n), !0).forEach(function (t) {
                v(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : tf(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var th = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "x-slate-fragment",
            {
              apply: n,
              onChange: r,
              deleteBackward: i,
              addMark: u,
              removeMark: o,
            } = e;
          return (
            _.set(e, new WeakMap()),
            (e.addMark = (t, n) => {
              var r, i;
              null == (r = P.get(e)) || r(),
                !N.get(e) &&
                  null != (i = j.get(e)) &&
                  i.length &&
                  N.set(e, null),
                T.delete(e),
                u(t, n);
            }),
            (e.removeMark = (t) => {
              var n;
              !N.get(e) && null != (n = j.get(e)) && n.length && N.set(e, null),
                T.delete(e),
                o(t);
            }),
            (e.deleteBackward = (t) => {
              if ("line" !== t) return i(t);
              if (e.selection && d.Q6.isCollapsed(e.selection)) {
                var n = d.KE.above(e, {
                  match: (t) => d.Hg.isElement(t) && d.KE.isBlock(e, t),
                  at: e.selection,
                });
                if (n) {
                  var [, r] = n,
                    u = d.KE.range(e, r, e.selection.anchor),
                    o = ((e, t) => {
                      var n = d.KE.range(e, d.Q6.end(t)),
                        r = Array.from(d.KE.positions(e, { at: t })),
                        i = 0,
                        u = r.length,
                        o = Math.floor(u / 2);
                      if (td(e, d.KE.range(e, r[i]), n))
                        return d.KE.range(e, r[i], n);
                      if (r.length < 2)
                        return d.KE.range(e, r[r.length - 1], n);
                      for (; o !== r.length && o !== i; )
                        td(e, d.KE.range(e, r[o]), n) ? (u = o) : (i = o),
                          (o = Math.floor((i + u) / 2));
                      return d.KE.range(e, r[u], n);
                    })(e, u);
                  d.Q6.isCollapsed(o) || d.gB.delete(e, { at: o });
                }
              }
            }),
            (e.apply = (t) => {
              var r,
                i = [],
                u = j.get(e);
              if (null != u && u.length) {
                var o = u
                  .map((e) =>
                    (function (e, t) {
                      var { path: n, diff: r, id: i } = e;
                      switch (t.type) {
                        case "insert_text":
                          if (!d.wA.equals(t.path, n) || t.offset >= r.end)
                            return e;
                          if (t.offset <= r.start)
                            return {
                              diff: {
                                start: t.text.length + r.start,
                                end: t.text.length + r.end,
                                text: r.text,
                              },
                              id: i,
                              path: n,
                            };
                          return {
                            diff: {
                              start: r.start,
                              end: r.end + t.text.length,
                              text: r.text,
                            },
                            id: i,
                            path: n,
                          };
                        case "remove_text":
                          if (!d.wA.equals(t.path, n) || t.offset >= r.end)
                            return e;
                          if (t.offset + t.text.length <= r.start)
                            return {
                              diff: {
                                start: r.start - t.text.length,
                                end: r.end - t.text.length,
                                text: r.text,
                              },
                              id: i,
                              path: n,
                            };
                          return {
                            diff: {
                              start: r.start,
                              end: r.end - t.text.length,
                              text: r.text,
                            },
                            id: i,
                            path: n,
                          };
                        case "split_node":
                          if (!d.wA.equals(t.path, n) || t.position >= r.end)
                            return {
                              diff: r,
                              id: i,
                              path: d.wA.transform(n, t, {
                                affinity: "backward",
                              }),
                            };
                          if (t.position > r.start)
                            return {
                              diff: {
                                start: r.start,
                                end: Math.min(t.position, r.end),
                                text: r.text,
                              },
                              id: i,
                              path: n,
                            };
                          return {
                            diff: {
                              start: r.start - t.position,
                              end: r.end - t.position,
                              text: r.text,
                            },
                            id: i,
                            path: d.wA.transform(n, t, { affinity: "forward" }),
                          };
                        case "merge_node":
                          if (!d.wA.equals(t.path, n))
                            return {
                              diff: r,
                              id: i,
                              path: d.wA.transform(n, t),
                            };
                          return {
                            diff: {
                              start: r.start + t.position,
                              end: r.end + t.position,
                              text: r.text,
                            },
                            id: i,
                            path: d.wA.transform(n, t),
                          };
                      }
                      var u = d.wA.transform(n, t);
                      return u ? { diff: r, path: u, id: i } : null;
                    })(e, t),
                  )
                  .filter(Boolean);
                j.set(e, o);
              }
              var a = $.get(e);
              a && $.set(e, eY(e, a, t));
              var s = Z.get(e);
              if (null != s && s.at) {
                var l = d.bR.isPoint(null == s ? void 0 : s.at)
                  ? eH(e, s.at, t)
                  : eY(e, s.at, t);
                Z.set(e, l ? tp(tp({}, s), {}, { at: l }) : null);
              }
              switch (t.type) {
                case "insert_text":
                case "remove_text":
                case "set_node":
                case "split_node":
                  i.push(...tv(e, t.path));
                  break;
                case "set_selection":
                  null == (r = O.get(e)) || r.unref(), O.delete(e);
                  break;
                case "insert_node":
                case "remove_node":
                  i.push(...tv(e, d.wA.parent(t.path)));
                  break;
                case "merge_node":
                  i.push(...tv(e, d.wA.previous(t.path)));
                  break;
                case "move_node":
                  i.push(
                    ...tv(
                      e,
                      d.wA.common(d.wA.parent(t.path), d.wA.parent(t.newPath)),
                    ),
                  );
              }
              for (var [c, f] of (n(t), i)) {
                var [p] = d.KE.node(e, c);
                F.set(p, f);
              }
            }),
            (e.setFragmentData = (n) => {
              var { selection: r } = e;
              if (r) {
                var [i, u] = d.Q6.edges(r),
                  o = d.KE.void(e, { at: i.path }),
                  a = d.KE.void(e, { at: u.path });
                if (!d.Q6.isCollapsed(r) || o) {
                  var s = ev.toDOMRange(e, r),
                    l = s.cloneContents(),
                    c = l.childNodes[0];
                  if (
                    (l.childNodes.forEach((e) => {
                      e.textContent && "" !== e.textContent.trim() && (c = e);
                    }),
                    a)
                  ) {
                    var [f] = a,
                      p = s.cloneRange(),
                      h = ev.toDOMNode(e, f);
                    p.setEndAfter(h), (l = p.cloneContents());
                  }
                  if (
                    (o && (c = l.querySelector("[data-slate-spacer]")),
                    Array.from(
                      l.querySelectorAll("[data-slate-zero-width]"),
                    ).forEach((e) => {
                      var t = "n" === e.getAttribute("data-slate-zero-width");
                      e.textContent = t ? "\n" : "";
                    }),
                    J(c))
                  ) {
                    var v = c.ownerDocument.createElement("span");
                    (v.style.whiteSpace = "pre"),
                      v.appendChild(c),
                      l.appendChild(v),
                      (c = v);
                  }
                  var m = JSON.stringify(e.getFragment()),
                    g = window.btoa(encodeURIComponent(m));
                  c.setAttribute("data-slate-fragment", g),
                    n.setData("application/".concat(t), g);
                  var D = l.ownerDocument.createElement("div");
                  return (
                    D.appendChild(l),
                    D.setAttribute("hidden", "true"),
                    l.ownerDocument.body.appendChild(D),
                    n.setData("text/html", D.innerHTML),
                    n.setData("text/plain", Y(D)),
                    l.ownerDocument.body.removeChild(D),
                    n
                  );
                }
              }
            }),
            (e.insertData = (t) => {
              e.insertFragmentData(t) || e.insertTextData(t);
            }),
            (e.insertFragmentData = (n) => {
              var r =
                n.getData("application/".concat(t)) ||
                ((e) => {
                  var [, t] = e.getData("text/html").match(X) || [];
                  return t;
                })(n);
              if (r) {
                var i = JSON.parse(decodeURIComponent(window.atob(r)));
                return e.insertFragment(i), !0;
              }
              return !1;
            }),
            (e.insertTextData = (t) => {
              var n = t.getData("text/plain");
              if (n) {
                var r = n.split(/\r\n|\r|\n/),
                  i = !1;
                for (var u of r)
                  i && d.gB.splitNodes(e, { always: !0 }),
                    e.insertText(u),
                    (i = !0);
                return !0;
              }
              return !1;
            }),
            (e.onChange = (t) => {
              h.unstable_batchedUpdates(() => {
                var n = S.get(e);
                n && n(), r(t);
              });
            }),
            e
          );
        },
        tv = (e, t) => {
          var n = [];
          for (var [r, i] of d.KE.levels(e, { at: t })) {
            var u = ev.findKey(e, r);
            n.push([i, u]);
          }
          return n;
        };
    },
    719442(e, t, n) {
      n.d(t, {
        EY: () => ew,
        Hg: () => W,
        KE: () => Y,
        Q6: () => eh,
        bP: () => en,
        bR: () => ec,
        gB: () => ej,
        h6: () => eg,
        ie: () => g,
        wA: () => eo,
      });
      var r,
        i,
        u = n(694260),
        o = n(159563);
      function a(e, t, n) {
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
      var s = new WeakMap(),
        l = new WeakMap(),
        c = new WeakMap(),
        d = new WeakMap(),
        f = new WeakMap(),
        p = new WeakMap(),
        h = new WeakMap();
      function v(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function m(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? v(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : v(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var g = () => {
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
            for (var n of Y.pathRefs(e)) ea.transform(n, t);
            for (var r of Y.pointRefs(e)) ed.transform(r, t);
            for (var i of Y.rangeRefs(e)) ev.transform(i, t);
            var u,
              o,
              a = s.get(e) || [],
              d = l.get(e) || new Set(),
              f = (e) => {
                if (e) {
                  var t = e.join(",");
                  o.has(t) || (o.add(t), u.push(e));
                }
              };
            if (eo.operationCanTransformPath(t))
              for (var p of ((u = []), (o = new Set()), a))
                f(eo.transform(p, t));
            else (u = a), (o = d);
            for (var h of e.getDirtyPaths(t)) f(h);
            s.set(e, u),
              l.set(e, o),
              ej.transform(e, t),
              e.operations.push(t),
              Y.normalize(e, { operation: t }),
              "set_selection" === t.type && (e.marks = null),
              c.get(e) ||
                (c.set(e, !0),
                Promise.resolve().then(() => {
                  c.set(e, !1),
                    e.onChange({ operation: t }),
                    (e.operations = []);
                }));
          },
          addMark: (t, n) => {
            var { selection: r, markableVoid: i } = e;
            if (r) {
              var u = (t, n) => {
                  if (!ew.isText(t)) return !1;
                  var [r, i] = Y.parent(e, n);
                  return !e.isVoid(r) || e.markableVoid(r);
                },
                o = eh.isExpanded(r),
                a = !1;
              if (!o) {
                var [s, l] = Y.node(e, r);
                if (s && u(s, l)) {
                  var [d] = Y.parent(e, l);
                  a = d && e.markableVoid(d);
                }
              }
              if (o || a)
                ej.setNodes(e, { [t]: n }, { match: u, split: !0, voids: !0 });
              else {
                var f = m(m({}, Y.marks(e) || {}), {}, { [t]: n });
                (e.marks = f), c.get(e) || e.onChange();
              }
            }
          },
          deleteBackward: (t) => {
            var { selection: n } = e;
            n && eh.isCollapsed(n) && ej.delete(e, { unit: t, reverse: !0 });
          },
          deleteForward: (t) => {
            var { selection: n } = e;
            n && eh.isCollapsed(n) && ej.delete(e, { unit: t });
          },
          deleteFragment: (t) => {
            var { selection: n } = e;
            n &&
              eh.isExpanded(n) &&
              ej.delete(e, { reverse: "backward" === t });
          },
          getFragment: () => {
            var { selection: t } = e;
            return t ? en.fragment(e, t) : [];
          },
          insertBreak: () => {
            ej.splitNodes(e, { always: !0 });
          },
          insertSoftBreak: () => {
            ej.splitNodes(e, { always: !0 });
          },
          insertFragment: (t) => {
            ej.insertFragment(e, t);
          },
          insertNode: (t) => {
            ej.insertNodes(e, t);
          },
          insertText: (t) => {
            var { selection: n, marks: r } = e;
            if (n) {
              if (r) {
                var i = m({ text: t }, r);
                ej.insertNodes(e, i);
              } else ej.insertText(e, t);
              e.marks = null;
            }
          },
          normalizeNode: (t) => {
            var [n, r] = t;
            if (!ew.isText(n)) {
              if (W.isElement(n) && 0 === n.children.length)
                return void ej.insertNodes(
                  e,
                  { text: "" },
                  { at: r.concat(0), voids: !0 },
                );
              for (
                var i =
                    !Y.isEditor(n) &&
                    W.isElement(n) &&
                    (e.isInline(n) ||
                      0 === n.children.length ||
                      ew.isText(n.children[0]) ||
                      e.isInline(n.children[0])),
                  u = 0,
                  o = 0;
                o < n.children.length;
                o++, u++
              ) {
                var a = en.get(e, r);
                if (!ew.isText(a)) {
                  var s = n.children[o],
                    l = a.children[u - 1],
                    c = o === n.children.length - 1;
                  if ((ew.isText(s) || (W.isElement(s) && e.isInline(s))) !== i)
                    ej.removeNodes(e, { at: r.concat(u), voids: !0 }), u--;
                  else if (W.isElement(s)) {
                    if (e.isInline(s))
                      if (null != l && ew.isText(l)) {
                        if (c) {
                          var d = { text: "" };
                          ej.insertNodes(e, d, {
                            at: r.concat(u + 1),
                            voids: !0,
                          }),
                            u++;
                        }
                      } else {
                        var f = { text: "" };
                        ej.insertNodes(e, f, { at: r.concat(u), voids: !0 }),
                          u++;
                      }
                  } else
                    null != l &&
                      ew.isText(l) &&
                      (ew.equals(s, l, { loose: !0 })
                        ? (ej.mergeNodes(e, { at: r.concat(u), voids: !0 }),
                          u--)
                        : "" === l.text
                          ? (ej.removeNodes(e, {
                              at: r.concat(u - 1),
                              voids: !0,
                            }),
                            u--)
                          : "" === s.text &&
                            (ej.removeNodes(e, { at: r.concat(u), voids: !0 }),
                            u--));
                }
              }
            }
          },
          removeMark: (t) => {
            var { selection: n } = e;
            if (n) {
              var r = (t, n) => {
                  if (!ew.isText(t)) return !1;
                  var [r, i] = Y.parent(e, n);
                  return !e.isVoid(r) || e.markableVoid(r);
                },
                i = eh.isExpanded(n),
                u = !1;
              if (!i) {
                var [o, a] = Y.node(e, n);
                if (o && r(o, a)) {
                  var [s] = Y.parent(e, a);
                  u = s && e.markableVoid(s);
                }
              }
              if (i || u)
                ej.unsetNodes(e, t, { match: r, split: !0, voids: !0 });
              else {
                var l = m({}, Y.marks(e) || {});
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
                return eo.levels(t);
              case "insert_node":
                var { node: n, path: r } = e;
                return [
                  ...eo.levels(r),
                  ...(ew.isText(n)
                    ? []
                    : Array.from(en.nodes(n), (e) => {
                        var [, t] = e;
                        return r.concat(t);
                      })),
                ];
              case "merge_node":
                var { path: i } = e;
                return [...eo.ancestors(i), eo.previous(i)];
              case "move_node":
                var { path: u, newPath: o } = e;
                if (eo.equals(u, o)) return [];
                var a = [],
                  s = [];
                for (var l of eo.ancestors(u)) {
                  var c = eo.transform(l, e);
                  a.push(c);
                }
                for (var d of eo.ancestors(o)) {
                  var f = eo.transform(d, e);
                  s.push(f);
                }
                var p = s[s.length - 1],
                  h = o[o.length - 1];
                return [...a, ...s, p.concat(h)];
              case "remove_node":
                var { path: v } = e;
                return [...eo.ancestors(v)];
              case "split_node":
                var { path: m } = e;
                return [...eo.levels(m), eo.next(m)];
              default:
                return [];
            }
          },
          shouldNormalize: (e) => {
            var { iteration: t, initialDirtyPathsLength: n } = e,
              r = 42 * n;
            if (t > r)
              throw Error(
                "Could not completely normalize the editor after ".concat(
                  r,
                  " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state.",
                ),
              );
            return !0;
          },
        };
        return e;
      };
      function D(e, t) {
        if (null == e) return {};
        var n,
          r,
          i = (function (e, t) {
            if (null == e) return {};
            var n,
              r,
              i = {},
              u = Object.keys(e);
            for (r = 0; r < u.length; r++)
              (n = u[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
            return i;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(e);
          for (r = 0; r < u.length; r++)
            (n = u[r]),
              !(t.indexOf(n) >= 0) &&
                Object.prototype.propertyIsEnumerable.call(e, n) &&
                (i[n] = e[n]);
        }
        return i;
      }
      var C = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = !t,
            r = t ? F(e) : e,
            u = i.None,
            o = i.None,
            a = 0,
            s = null;
          for (var l of r) {
            var c = l.codePointAt(0);
            if (!c) break;
            var d = $(l, c);
            if (
              (([u, o] = n ? [o, d] : [d, u]),
              (u & i.ZWJ) != 0 &&
                (o & i.ExtPict) != 0 &&
                !(n ? M(e.substring(0, a)) : M(e.substring(0, e.length - a))))
            )
              break;
            if (
              ((u & i.RI) != 0 &&
                (o & i.RI) != 0 &&
                !(s =
                  null !== s ? !s : !!n || K(e.substring(0, e.length - a)))) ||
              (u !== i.None &&
                o !== i.None &&
                (function (e, t) {
                  return (
                    -1 ===
                    R.findIndex((n) => (e & n[0]) != 0 && (t & n[1]) != 0)
                  );
                })(u, o))
            )
              break;
            a += l.length;
          }
          return a || 1;
        },
        B = /\s/,
        E =
          /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
        y = /['\u2018\u2019]/,
        w = function (e) {
          for (
            var t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
              n = 0,
              r = !1;
            e.length > 0;

          ) {
            var i = C(e, t),
              [u, o] = b(e, i, t);
            if (A(u, o, t)) (r = !0), (n += i);
            else if (r) break;
            else n += i;
            e = o;
          }
          return n;
        },
        b = (e, t, n) => {
          if (n) {
            var r = e.length - t;
            return [e.slice(r, e.length), e.slice(0, r)];
          }
          return [e.slice(0, t), e.slice(t)];
        },
        A = function e(t, n) {
          var r =
            arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          if (B.test(t)) return !1;
          if (y.test(t)) {
            var i = C(n, r),
              [u, o] = b(n, i, r);
            if (e(u, o, r)) return !0;
          }
          return !E.test(t);
        },
        F = function* (e) {
          for (var t = e.length - 1, n = 0; n < e.length; n++) {
            var r = e.charAt(t - n);
            if (k(r.charCodeAt(0))) {
              var i = e.charAt(t - n - 1);
              if (_(i.charCodeAt(0))) {
                yield i + r, n++;
                continue;
              }
            }
            yield r;
          }
        },
        _ = (e) => e >= 55296 && e <= 56319,
        k = (e) => e >= 56320 && e <= 57343;
      ((r = i || (i = {}))[(r.None = 0)] = "None"),
        (r[(r.Extend = 1)] = "Extend"),
        (r[(r.ZWJ = 2)] = "ZWJ"),
        (r[(r.RI = 4)] = "RI"),
        (r[(r.Prepend = 8)] = "Prepend"),
        (r[(r.SpacingMark = 16)] = "SpacingMark"),
        (r[(r.L = 32)] = "L"),
        (r[(r.V = 64)] = "V"),
        (r[(r.T = 128)] = "T"),
        (r[(r.LV = 256)] = "LV"),
        (r[(r.LVT = 512)] = "LVT"),
        (r[(r.ExtPict = 1024)] = "ExtPict"),
        (r[(r.Any = 2048)] = "Any");
      var x =
          /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/,
        z =
          /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/,
        O =
          /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/,
        S = /^[\u1100-\u115F\uA960-\uA97C]$/,
        P = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/,
        N = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/,
        T =
          /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/,
        j =
          /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/,
        Z =
          /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/,
        $ = (e, t) => {
          var n = i.Any;
          return (
            -1 !== e.search(x) && (n |= i.Extend),
            8205 === t && (n |= i.ZWJ),
            t >= 127462 && t <= 127487 && (n |= i.RI),
            -1 !== e.search(z) && (n |= i.Prepend),
            -1 !== e.search(O) && (n |= i.SpacingMark),
            -1 !== e.search(S) && (n |= i.L),
            -1 !== e.search(P) && (n |= i.V),
            -1 !== e.search(N) && (n |= i.T),
            -1 !== e.search(T) && (n |= i.LV),
            -1 !== e.search(j) && (n |= i.LVT),
            -1 !== e.search(Z) && (n |= i.ExtPict),
            n
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
        I =
          /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/,
        M = (e) => -1 !== e.search(I),
        L = /(?:\uD83C[\uDDE6-\uDDFF])+$/g,
        K = (e) => {
          var t = e.match(L);
          return null !== t && (t[0].length / 2) % 2 == 1;
        },
        q = (e) => (0, u.Q)(e) && en.isNodeList(e.children) && !Y.isEditor(e),
        W = {
          isAncestor: (e) => (0, u.Q)(e) && en.isNodeList(e.children),
          isElement: q,
          isElementList: (e) =>
            Array.isArray(e) && e.every((e) => W.isElement(e)),
          isElementProps: (e) => void 0 !== e.children,
          isElementType: function (e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "type";
            return q(e) && e[n] === t;
          },
          matches(e, t) {
            for (var n in t) if ("children" !== n && e[n] !== t[n]) return !1;
            return !0;
          },
        },
        U = ["text"],
        V = ["text"];
      function J(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function Q(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? J(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : J(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var H = new WeakMap(),
        Y = {
          above(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              {
                voids: n = !1,
                mode: r = "lowest",
                at: i = e.selection,
                match: u,
              } = t;
            if (i) {
              var o = Y.path(e, i);
              for (var [a, s] of Y.levels(e, {
                at: o,
                voids: n,
                match: u,
                reverse: "lowest" === r,
              }))
                if (!ew.isText(a)) {
                  if (eh.isRange(i)) {
                    if (
                      eo.isAncestor(s, i.anchor.path) &&
                      eo.isAncestor(s, i.focus.path)
                    )
                      return [a, s];
                  } else if (!eo.equals(o, s)) return [a, s];
                }
            }
          },
          addMark(e, t, n) {
            e.addMark(t, n);
          },
          after(e, t) {
            var n,
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              i = Y.point(e, t, { edge: "end" }),
              u = Y.end(e, []),
              { distance: o = 1 } = r,
              a = 0;
            for (var s of Y.positions(
              e,
              Q(Q({}, r), {}, { at: { anchor: i, focus: u } }),
            )) {
              if (a > o) break;
              0 !== a && (n = s), a++;
            }
            return n;
          },
          before(e, t) {
            var n,
              r =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              i = Y.start(e, []),
              u = Y.point(e, t, { edge: "start" }),
              { distance: o = 1 } = r,
              a = 0;
            for (var s of Y.positions(
              e,
              Q(Q({}, r), {}, { at: { anchor: i, focus: u }, reverse: !0 }),
            )) {
              if (a > o) break;
              0 !== a && (n = s), a++;
            }
            return n;
          },
          deleteBackward(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { unit: n = "character" } = t;
            e.deleteBackward(n);
          },
          deleteForward(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { unit: n = "character" } = t;
            e.deleteForward(n);
          },
          deleteFragment(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { direction: n = "forward" } = t;
            e.deleteFragment(n);
          },
          edges: (e, t) => [Y.start(e, t), Y.end(e, t)],
          end: (e, t) => Y.point(e, t, { edge: "end" }),
          first(e, t) {
            var n = Y.path(e, t, { edge: "start" });
            return Y.node(e, n);
          },
          fragment(e, t) {
            var n = Y.range(e, t);
            return en.fragment(e, n);
          },
          hasBlocks: (e, t) =>
            t.children.some((t) => W.isElement(t) && Y.isBlock(e, t)),
          hasInlines: (e, t) =>
            t.children.some((t) => ew.isText(t) || Y.isInline(e, t)),
          hasTexts: (e, t) => t.children.every((e) => ew.isText(e)),
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
            var t = H.get(e);
            if (void 0 !== t) return t;
            if (!(0, u.Q)(e)) return !1;
            var n =
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
              en.isNodeList(e.children) &&
              eu.isOperationList(e.operations);
            return H.set(e, n), n;
          },
          isEnd(e, t, n) {
            var r = Y.end(e, n);
            return ec.equals(t, r);
          },
          isEdge: (e, t, n) => Y.isStart(e, t, n) || Y.isEnd(e, t, n),
          isEmpty(e, t) {
            var { children: n } = t,
              [r] = n;
            return (
              0 === n.length ||
              (1 === n.length && ew.isText(r) && "" === r.text && !e.isVoid(t))
            );
          },
          isInline: (e, t) => e.isInline(t),
          isNormalizing(e) {
            var t = d.get(e);
            return void 0 === t || t;
          },
          isStart(e, t, n) {
            if (0 !== t.offset) return !1;
            var r = Y.start(e, n);
            return ec.equals(t, r);
          },
          isVoid: (e, t) => e.isVoid(t),
          last(e, t) {
            var n = Y.path(e, t, { edge: "end" });
            return Y.node(e, n);
          },
          leaf(e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              r = Y.path(e, t, n);
            return [en.leaf(e, r), r];
          },
          *levels(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { at: n = e.selection, reverse: r = !1, voids: i = !1 } = t,
              { match: u } = t;
            if ((null == u && (u = () => !0), n)) {
              var o = [],
                a = Y.path(e, n);
              for (var [s, l] of en.levels(e, a))
                if (
                  u(s, l) &&
                  (o.push([s, l]), !i && W.isElement(s) && Y.isVoid(e, s))
                )
                  break;
              r && o.reverse(), yield* o;
            }
          },
          marks(e) {
            var { marks: t, selection: n } = e;
            if (!n) return null;
            if (t) return t;
            if (eh.isExpanded(n)) {
              var [r] = Y.nodes(e, { match: ew.isText });
              if (!r) return {};
              var [i] = r;
              return D(i, U);
            }
            var { anchor: u } = n,
              { path: o } = u,
              [a] = Y.leaf(e, o);
            if (0 === u.offset) {
              var s = Y.previous(e, { at: o, match: ew.isText });
              if (
                !Y.above(e, {
                  match: (t) =>
                    W.isElement(t) && Y.isVoid(e, t) && e.markableVoid(t),
                })
              ) {
                var l = Y.above(e, {
                  match: (t) => W.isElement(t) && Y.isBlock(e, t),
                });
                if (s && l) {
                  var [c, d] = s,
                    [, f] = l;
                  eo.isAncestor(f, d) && (a = c);
                }
              }
            }
            return D(a, V);
          },
          next(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { mode: n = "lowest", voids: r = !1 } = t,
              { match: i, at: u = e.selection } = t;
            if (u) {
              var o = Y.after(e, u, { voids: r });
              if (o) {
                var [, a] = Y.last(e, []),
                  s = [o.path, a];
                if (eo.isPath(u) && 0 === u.length)
                  throw Error("Cannot get the next node from the root node!");
                if (null == i)
                  if (eo.isPath(u)) {
                    var [l] = Y.parent(e, u);
                    i = (e) => l.children.includes(e);
                  } else i = () => !0;
                var [c] = Y.nodes(e, { at: s, match: i, mode: n, voids: r });
                return c;
              }
            }
          },
          node(e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              r = Y.path(e, t, n);
            return [en.get(e, r), r];
          },
          *nodes(e) {
            var t,
              n,
              r,
              i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              {
                at: u = e.selection,
                mode: o = "all",
                universal: a = !1,
                reverse: s = !1,
                voids: l = !1,
              } = i,
              { match: c } = i;
            if ((c || (c = () => !0), u)) {
              if (X.isSpan(u)) (t = u[0]), (n = u[1]);
              else {
                var d = Y.path(e, u, { edge: "start" }),
                  f = Y.path(e, u, { edge: "end" });
                (t = s ? f : d), (n = s ? d : f);
              }
              var p = en.nodes(e, {
                  reverse: s,
                  from: t,
                  to: n,
                  pass: (t) => {
                    var [n] = t;
                    return !l && W.isElement(n) && Y.isVoid(e, n);
                  },
                }),
                h = [];
              for (var [v, m] of p) {
                var g = r && 0 === eo.compare(m, r[1]);
                if ("highest" !== o || !g) {
                  if (!c(v, m))
                    if (a && !g && ew.isText(v)) return;
                    else continue;
                  if ("lowest" === o && g) {
                    r = [v, m];
                    continue;
                  }
                  var D = "lowest" === o ? r : [v, m];
                  D && (a ? h.push(D) : yield D), (r = [v, m]);
                }
              }
              "lowest" === o && r && (a ? h.push(r) : yield r), a && (yield* h);
            }
          },
          normalize(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { force: n = !1, operation: r } = t,
              i = (e) => s.get(e) || [],
              u = (e) => {
                var t = i(e).pop(),
                  n = t.join(",");
                return (l.get(e) || new Set()).delete(n), t;
              };
            if (Y.isNormalizing(e)) {
              if (n) {
                var o = Array.from(en.nodes(e), (e) => {
                    var [, t] = e;
                    return t;
                  }),
                  a = new Set(o.map((e) => e.join(",")));
                s.set(e, o), l.set(e, a);
              }
              0 !== i(e).length &&
                Y.withoutNormalizing(e, () => {
                  for (var t of i(e))
                    if (en.has(e, t)) {
                      var n = Y.node(e, t),
                        [o, a] = n;
                      W.isElement(o) &&
                        0 === o.children.length &&
                        e.normalizeNode(n, { operation: r });
                    }
                  for (var s = i(e), l = s.length, c = 0; 0 !== s.length; ) {
                    if (
                      !e.shouldNormalize({
                        dirtyPaths: s,
                        iteration: c,
                        initialDirtyPathsLength: l,
                        operation: r,
                      })
                    )
                      return;
                    var d = u(e);
                    if (en.has(e, d)) {
                      var f = Y.node(e, d);
                      e.normalizeNode(f, { operation: r });
                    }
                    c++, (s = i(e));
                  }
                });
            }
          },
          parent(e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              r = Y.path(e, t, n),
              i = eo.parent(r);
            return Y.node(e, i);
          },
          path(e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { depth: r, edge: i } = n;
            if (eo.isPath(t)) {
              if ("start" === i) {
                var [, u] = en.first(e, t);
                t = u;
              } else if ("end" === i) {
                var [, o] = en.last(e, t);
                t = o;
              }
            }
            return (
              eh.isRange(t) &&
                (t =
                  "start" === i
                    ? eh.start(t)
                    : "end" === i
                      ? eh.end(t)
                      : eo.common(t.anchor.path, t.focus.path)),
              ec.isPoint(t) && (t = t.path),
              null != r && (t = t.slice(0, r)),
              t
            );
          },
          hasPath: (e, t) => en.has(e, t),
          pathRef(e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { affinity: r = "forward" } = n,
              i = {
                current: t,
                affinity: r,
                unref() {
                  var { current: t } = i;
                  return Y.pathRefs(e).delete(i), (i.current = null), t;
                },
              };
            return Y.pathRefs(e).add(i), i;
          },
          pathRefs(e) {
            var t = f.get(e);
            return t || ((t = new Set()), f.set(e, t)), t;
          },
          point(e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { edge: r = "start" } = n;
            if (eo.isPath(t)) {
              if ("end" === r) {
                var i,
                  [, u] = en.last(e, t);
                i = u;
              } else {
                var [, o] = en.first(e, t);
                i = o;
              }
              var a = en.get(e, i);
              if (!ew.isText(a))
                throw Error(
                  "Cannot get the "
                    .concat(r, " point in the node at path [")
                    .concat(t, "] because it has no ")
                    .concat(r, " text node."),
                );
              return { path: i, offset: "end" === r ? a.text.length : 0 };
            }
            if (eh.isRange(t)) {
              var [s, l] = eh.edges(t);
              return "start" === r ? s : l;
            }
            return t;
          },
          pointRef(e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { affinity: r = "forward" } = n,
              i = {
                current: t,
                affinity: r,
                unref() {
                  var { current: t } = i;
                  return Y.pointRefs(e).delete(i), (i.current = null), t;
                },
              };
            return Y.pointRefs(e).add(i), i;
          },
          pointRefs(e) {
            var t = p.get(e);
            return t || ((t = new Set()), p.set(e, t)), t;
          },
          *positions(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              {
                at: n = e.selection,
                unit: r = "offset",
                reverse: i = !1,
                voids: u = !1,
              } = t;
            if (n) {
              var o = Y.range(e, n),
                [a, s] = eh.edges(o),
                l = i ? s : a,
                c = !1,
                d = "",
                f = 0,
                p = 0,
                h = 0;
              for (var [v, m] of Y.nodes(e, { at: n, reverse: i, voids: u })) {
                if (W.isElement(v)) {
                  if (!u && e.isVoid(v)) {
                    yield Y.start(e, m);
                    continue;
                  }
                  if (e.isInline(v)) continue;
                  if (Y.hasInlines(e, v)) {
                    var g = eo.isAncestor(m, s.path) ? s : Y.end(e, m),
                      D = eo.isAncestor(m, a.path) ? a : Y.start(e, m);
                    (d = Y.string(e, { anchor: D, focus: g }, { voids: u })),
                      (c = !0);
                  }
                }
                if (ew.isText(v)) {
                  var B,
                    E,
                    y,
                    A = eo.equals(m, l.path);
                  for (
                    A
                      ? ((p = i ? l.offset : v.text.length - l.offset),
                        (h = l.offset))
                      : ((p = v.text.length), (h = i ? p : 0)),
                      (A || c || "offset" === r) &&
                        (yield { path: m, offset: h }, (c = !1));
                    ;

                  ) {
                    if (0 === f) {
                      if ("" === d) break;
                      (B = d),
                        (E = r),
                        (y = i),
                        (d = b(
                          d,
                          (f =
                            "character" === E
                              ? C(B, y)
                              : "word" === E
                                ? w(B, y)
                                : "line" === E || "block" === E
                                  ? B.length
                                  : 1),
                          i,
                        )[1]);
                    }
                    if (((h = i ? h - f : h + f), (p -= f) < 0)) {
                      f = -p;
                      break;
                    }
                    (f = 0), yield { path: m, offset: h };
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
              { mode: n = "lowest", voids: r = !1 } = t,
              { match: i, at: u = e.selection } = t;
            if (u) {
              var o = Y.before(e, u, { voids: r });
              if (o) {
                var [, a] = Y.first(e, []),
                  s = [o.path, a];
                if (eo.isPath(u) && 0 === u.length)
                  throw Error(
                    "Cannot get the previous node from the root node!",
                  );
                if (null == i)
                  if (eo.isPath(u)) {
                    var [l] = Y.parent(e, u);
                    i = (e) => l.children.includes(e);
                  } else i = () => !0;
                var [c] = Y.nodes(e, {
                  reverse: !0,
                  at: s,
                  match: i,
                  mode: n,
                  voids: r,
                });
                return c;
              }
            }
          },
          range: (e, t, n) =>
            eh.isRange(t) && !n
              ? t
              : { anchor: Y.start(e, t), focus: Y.end(e, n || t) },
          rangeRef(e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { affinity: r = "forward" } = n,
              i = {
                current: t,
                affinity: r,
                unref() {
                  var { current: t } = i;
                  return Y.rangeRefs(e).delete(i), (i.current = null), t;
                },
              };
            return Y.rangeRefs(e).add(i), i;
          },
          rangeRefs(e) {
            var t = h.get(e);
            return t || ((t = new Set()), h.set(e, t)), t;
          },
          removeMark(e, t) {
            e.removeMark(t);
          },
          setNormalizing(e, t) {
            d.set(e, t);
          },
          start: (e, t) => Y.point(e, t, { edge: "start" }),
          string(e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { voids: r = !1 } = n,
              i = Y.range(e, t),
              [u, o] = eh.edges(i),
              a = "";
            for (var [s, l] of Y.nodes(e, {
              at: i,
              match: ew.isText,
              voids: r,
            })) {
              var c = s.text;
              eo.equals(l, o.path) && (c = c.slice(0, o.offset)),
                eo.equals(l, u.path) && (c = c.slice(u.offset)),
                (a += c);
            }
            return a;
          },
          unhangRange(e, t) {
            var n =
                arguments.length > 2 && void 0 !== arguments[2]
                  ? arguments[2]
                  : {},
              { voids: r = !1 } = n,
              [i, u] = eh.edges(t);
            if (
              0 !== i.offset ||
              0 !== u.offset ||
              eh.isCollapsed(t) ||
              eo.hasPrevious(u.path)
            )
              return t;
            var o = Y.above(e, {
                at: u,
                match: (t) => W.isElement(t) && Y.isBlock(e, t),
                voids: r,
              }),
              a = o ? o[1] : [],
              s = { anchor: Y.start(e, i), focus: u },
              l = !0;
            for (var [c, d] of Y.nodes(e, {
              at: s,
              match: ew.isText,
              reverse: !0,
              voids: r,
            })) {
              if (l) {
                l = !1;
                continue;
              }
              if ("" !== c.text || eo.isBefore(d, a)) {
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
            return Y.above(
              e,
              Q(
                Q({}, t),
                {},
                { match: (t) => W.isElement(t) && Y.isVoid(e, t) },
              ),
            );
          },
          withoutNormalizing(e, t) {
            var n = Y.isNormalizing(e);
            Y.setNormalizing(e, !1);
            try {
              t();
            } finally {
              Y.setNormalizing(e, n);
            }
            Y.normalize(e);
          },
        },
        X = {
          isSpan: (e) =>
            Array.isArray(e) && 2 === e.length && e.every(eo.isPath),
        },
        G = ["children"],
        ee = ["text"],
        et = new WeakMap(),
        en = {
          ancestor(e, t) {
            var n = en.get(e, t);
            if (ew.isText(n))
              throw Error(
                "Cannot get the ancestor node at path ["
                  .concat(t, "] because it refers to a text node instead: ")
                  .concat(eg.stringify(n)),
              );
            return n;
          },
          *ancestors(e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            for (var r of eo.ancestors(t, n)) {
              var i = [en.ancestor(e, r), r];
              yield i;
            }
          },
          child(e, t) {
            if (ew.isText(e))
              throw Error(
                "Cannot get the child of a text node: ".concat(eg.stringify(e)),
              );
            var n = e.children[t];
            if (null == n)
              throw Error(
                "Cannot get child at index `"
                  .concat(t, "` in node: ")
                  .concat(eg.stringify(e)),
              );
            return n;
          },
          *children(e, t) {
            for (
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                { reverse: r = !1 } = n,
                i = en.ancestor(e, t),
                { children: u } = i,
                o = r ? u.length - 1 : 0;
              r ? o >= 0 : o < u.length;

            ) {
              var a = en.child(i, o),
                s = t.concat(o);
              yield [a, s], (o = r ? o - 1 : o + 1);
            }
          },
          common(e, t, n) {
            var r = eo.common(t, n);
            return [en.get(e, r), r];
          },
          descendant(e, t) {
            var n = en.get(e, t);
            if (Y.isEditor(n))
              throw Error(
                "Cannot get the descendant node at path ["
                  .concat(
                    t,
                    "] because it refers to the root editor node instead: ",
                  )
                  .concat(eg.stringify(n)),
              );
            return n;
          },
          *descendants(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            for (var [n, r] of en.nodes(e, t)) 0 !== r.length && (yield [n, r]);
          },
          *elements(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            for (var [n, r] of en.nodes(e, t)) W.isElement(n) && (yield [n, r]);
          },
          extractProps(e) {
            if (W.isAncestor(e)) {
              var t = D(e, G);
              return t;
            }
            var t = D(e, ee);
            return t;
          },
          first(e, t) {
            for (var n = t.slice(), r = en.get(e, n); r; )
              if (ew.isText(r) || 0 === r.children.length) break;
              else (r = r.children[0]), n.push(0);
            return [r, n];
          },
          fragment(e, t) {
            if (ew.isText(e))
              throw Error(
                "Cannot get a fragment starting from a root text node: ".concat(
                  eg.stringify(e),
                ),
              );
            return (0, o.jM)({ children: e.children }, (e) => {
              var [n, r] = eh.edges(t);
              for (var [, i] of en.nodes(e, {
                reverse: !0,
                pass: (e) => {
                  var [, n] = e;
                  return !eh.includes(t, n);
                },
              })) {
                if (!eh.includes(t, i)) {
                  var u = en.parent(e, i),
                    o = i[i.length - 1];
                  u.children.splice(o, 1);
                }
                if (eo.equals(i, r.path)) {
                  var a = en.leaf(e, i);
                  a.text = a.text.slice(0, r.offset);
                }
                if (eo.equals(i, n.path)) {
                  var s = en.leaf(e, i);
                  s.text = s.text.slice(n.offset);
                }
              }
              Y.isEditor(e) && (e.selection = null);
            }).children;
          },
          get(e, t) {
            for (var n = e, r = 0; r < t.length; r++) {
              var i = t[r];
              if (ew.isText(n) || !n.children[i])
                throw Error(
                  "Cannot find a descendant at path ["
                    .concat(t, "] in node: ")
                    .concat(eg.stringify(e)),
                );
              n = n.children[i];
            }
            return n;
          },
          has(e, t) {
            for (var n = e, r = 0; r < t.length; r++) {
              var i = t[r];
              if (ew.isText(n) || !n.children[i]) return !1;
              n = n.children[i];
            }
            return !0;
          },
          isNode: (e) => ew.isText(e) || W.isElement(e) || Y.isEditor(e),
          isNodeList(e) {
            if (!Array.isArray(e)) return !1;
            var t = et.get(e);
            if (void 0 !== t) return t;
            var n = e.every((e) => en.isNode(e));
            return et.set(e, n), n;
          },
          last(e, t) {
            for (var n = t.slice(), r = en.get(e, n); r; )
              if (ew.isText(r) || 0 === r.children.length) break;
              else {
                var i = r.children.length - 1;
                (r = r.children[i]), n.push(i);
              }
            return [r, n];
          },
          leaf(e, t) {
            var n = en.get(e, t);
            if (!ew.isText(n))
              throw Error(
                "Cannot get the leaf node at path ["
                  .concat(t, "] because it refers to a non-leaf node: ")
                  .concat(eg.stringify(n)),
              );
            return n;
          },
          *levels(e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            for (var r of eo.levels(t, n)) {
              var i = en.get(e, r);
              yield [i, r];
            }
          },
          matches: (e, t) =>
            (W.isElement(e) && W.isElementProps(t) && W.matches(e, t)) ||
            (ew.isText(e) && ew.isTextProps(t) && ew.matches(e, t)),
          *nodes(e) {
            for (
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                { pass: n, reverse: r = !1 } = t,
                { from: i = [], to: u } = t,
                o = new Set(),
                a = [],
                s = e;
              !(u && (r ? eo.isBefore(a, u) : eo.isAfter(a, u)));

            ) {
              if (
                (o.has(s) || (yield [s, a]),
                !o.has(s) &&
                  !ew.isText(s) &&
                  0 !== s.children.length &&
                  (null == n || !1 === n([s, a])))
              ) {
                o.add(s);
                var l = r ? s.children.length - 1 : 0;
                eo.isAncestor(a, i) && (l = i[a.length]),
                  (a = a.concat(l)),
                  (s = en.get(e, a));
                continue;
              }
              if (0 === a.length) break;
              if (!r) {
                var c = eo.next(a);
                if (en.has(e, c)) {
                  (a = c), (s = en.get(e, a));
                  continue;
                }
              }
              if (r && 0 !== a[a.length - 1]) {
                (a = eo.previous(a)), (s = en.get(e, a));
                continue;
              }
              (a = eo.parent(a)), (s = en.get(e, a)), o.add(s);
            }
          },
          parent(e, t) {
            var n = eo.parent(t),
              r = en.get(e, n);
            if (ew.isText(r))
              throw Error(
                "Cannot get the parent of path [".concat(
                  t,
                  "] because it does not exist in the root.",
                ),
              );
            return r;
          },
          string: (e) =>
            ew.isText(e) ? e.text : e.children.map(en.string).join(""),
          *texts(e) {
            var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            for (var [n, r] of en.nodes(e, t)) ew.isText(n) && (yield [n, r]);
          },
        };
      function er(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ei(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? er(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : er(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var eu = {
          isNodeOperation: (e) => eu.isOperation(e) && e.type.endsWith("_node"),
          isOperation(e) {
            if (!(0, u.Q)(e)) return !1;
            switch (e.type) {
              case "insert_node":
              case "remove_node":
                return eo.isPath(e.path) && en.isNode(e.node);
              case "insert_text":
              case "remove_text":
                return (
                  "number" == typeof e.offset &&
                  "string" == typeof e.text &&
                  eo.isPath(e.path)
                );
              case "merge_node":
                return (
                  "number" == typeof e.position &&
                  eo.isPath(e.path) &&
                  (0, u.Q)(e.properties)
                );
              case "move_node":
                return eo.isPath(e.path) && eo.isPath(e.newPath);
              case "set_node":
                return (
                  eo.isPath(e.path) &&
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
                  eo.isPath(e.path) &&
                  "number" == typeof e.position &&
                  (0, u.Q)(e.properties)
                );
              default:
                return !1;
            }
          },
          isOperationList: (e) =>
            Array.isArray(e) && e.every((e) => eu.isOperation(e)),
          isSelectionOperation: (e) =>
            eu.isOperation(e) && e.type.endsWith("_selection"),
          isTextOperation: (e) => eu.isOperation(e) && e.type.endsWith("_text"),
          inverse(e) {
            switch (e.type) {
              case "insert_node":
                return ei(ei({}, e), {}, { type: "remove_node" });
              case "insert_text":
                return ei(ei({}, e), {}, { type: "remove_text" });
              case "merge_node":
                return ei(
                  ei({}, e),
                  {},
                  { type: "split_node", path: eo.previous(e.path) },
                );
              case "move_node":
                var { newPath: t, path: n } = e;
                if (eo.equals(t, n)) return e;
                if (eo.isSibling(n, t))
                  return ei(ei({}, e), {}, { path: t, newPath: n });
                var r = eo.transform(n, e),
                  i = eo.transform(eo.next(n), e);
                return ei(ei({}, e), {}, { path: r, newPath: i });
              case "remove_node":
                return ei(ei({}, e), {}, { type: "insert_node" });
              case "remove_text":
                return ei(ei({}, e), {}, { type: "insert_text" });
              case "set_node":
                var { properties: u, newProperties: o } = e;
                return ei(ei({}, e), {}, { properties: o, newProperties: u });
              case "set_selection":
                var { properties: a, newProperties: s } = e;
                if (null == a)
                  return ei(
                    ei({}, e),
                    {},
                    { properties: s, newProperties: null },
                  );
                if (null == s)
                  return ei(
                    ei({}, e),
                    {},
                    { properties: null, newProperties: a },
                  );
                return ei(ei({}, e), {}, { properties: s, newProperties: a });
              case "split_node":
                return ei(
                  ei({}, e),
                  {},
                  { type: "merge_node", path: eo.next(e.path) },
                );
            }
          },
        },
        eo = {
          ancestors(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { reverse: n = !1 } = t,
              r = eo.levels(e, t);
            return n ? r.slice(1) : r.slice(0, -1);
          },
          common(e, t) {
            for (var n = [], r = 0; r < e.length && r < t.length; r++) {
              var i = e[r];
              if (i !== t[r]) break;
              n.push(i);
            }
            return n;
          },
          compare(e, t) {
            for (var n = Math.min(e.length, t.length), r = 0; r < n; r++) {
              if (e[r] < t[r]) return -1;
              if (e[r] > t[r]) return 1;
            }
            return 0;
          },
          endsAfter(e, t) {
            var n = e.length - 1,
              r = e.slice(0, n),
              i = t.slice(0, n),
              u = e[n],
              o = t[n];
            return eo.equals(r, i) && u > o;
          },
          endsAt(e, t) {
            var n = e.length,
              r = e.slice(0, n),
              i = t.slice(0, n);
            return eo.equals(r, i);
          },
          endsBefore(e, t) {
            var n = e.length - 1,
              r = e.slice(0, n),
              i = t.slice(0, n),
              u = e[n],
              o = t[n];
            return eo.equals(r, i) && u < o;
          },
          equals: (e, t) =>
            e.length === t.length && e.every((e, n) => e === t[n]),
          hasPrevious: (e) => e[e.length - 1] > 0,
          isAfter: (e, t) => 1 === eo.compare(e, t),
          isAncestor: (e, t) => e.length < t.length && 0 === eo.compare(e, t),
          isBefore: (e, t) => -1 === eo.compare(e, t),
          isChild: (e, t) =>
            e.length === t.length + 1 && 0 === eo.compare(e, t),
          isCommon: (e, t) => e.length <= t.length && 0 === eo.compare(e, t),
          isDescendant: (e, t) => e.length > t.length && 0 === eo.compare(e, t),
          isParent: (e, t) =>
            e.length + 1 === t.length && 0 === eo.compare(e, t),
          isPath: (e) =>
            Array.isArray(e) && (0 === e.length || "number" == typeof e[0]),
          isSibling(e, t) {
            if (e.length !== t.length) return !1;
            var n = e.slice(0, -1),
              r = t.slice(0, -1);
            return e[e.length - 1] !== t[t.length - 1] && eo.equals(n, r);
          },
          levels(e) {
            for (
              var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {},
                { reverse: n = !1 } = t,
                r = [],
                i = 0;
              i <= e.length;
              i++
            )
              r.push(e.slice(0, i));
            return n && r.reverse(), r;
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
            if (!eo.isAncestor(t, e) && !eo.equals(e, t))
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
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            if (!e) return null;
            var r = [...e],
              { affinity: i = "forward" } = n;
            if (0 === e.length) return r;
            switch (t.type) {
              case "insert_node":
                var { path: u } = t;
                (eo.equals(u, r) ||
                  eo.endsBefore(u, r) ||
                  eo.isAncestor(u, r)) &&
                  (r[u.length - 1] += 1);
                break;
              case "remove_node":
                var { path: o } = t;
                if (eo.equals(o, r) || eo.isAncestor(o, r)) return null;
                eo.endsBefore(o, r) && (r[o.length - 1] -= 1);
                break;
              case "merge_node":
                var { path: a, position: s } = t;
                eo.equals(a, r) || eo.endsBefore(a, r)
                  ? (r[a.length - 1] -= 1)
                  : eo.isAncestor(a, r) &&
                    ((r[a.length - 1] -= 1), (r[a.length] += s));
                break;
              case "split_node":
                var { path: l, position: c } = t;
                if (eo.equals(l, r)) {
                  if ("forward" === i) r[r.length - 1] += 1;
                  else if ("backward" !== i) return null;
                } else
                  eo.endsBefore(l, r)
                    ? (r[l.length - 1] += 1)
                    : eo.isAncestor(l, r) &&
                      e[l.length] >= c &&
                      ((r[l.length - 1] += 1), (r[l.length] -= c));
                break;
              case "move_node":
                var { path: d, newPath: f } = t;
                if (eo.equals(d, f)) break;
                if (eo.isAncestor(d, r) || eo.equals(d, r)) {
                  var p = f.slice();
                  return (
                    eo.endsBefore(d, f) &&
                      d.length < f.length &&
                      (p[d.length - 1] -= 1),
                    p.concat(r.slice(d.length))
                  );
                }
                eo.isSibling(d, f) && (eo.isAncestor(f, r) || eo.equals(f, r))
                  ? eo.endsBefore(d, r)
                    ? (r[d.length - 1] -= 1)
                    : (r[d.length - 1] += 1)
                  : eo.endsBefore(f, r) ||
                      eo.equals(f, r) ||
                      eo.isAncestor(f, r)
                    ? (eo.endsBefore(d, r) && (r[d.length - 1] -= 1),
                      (r[f.length - 1] += 1))
                    : eo.endsBefore(d, r) &&
                      (eo.equals(f, r) && (r[f.length - 1] += 1),
                      (r[d.length - 1] -= 1));
            }
            return r;
          },
        },
        ea = {
          transform(e, t) {
            var { current: n, affinity: r } = e;
            if (null != n) {
              var i = eo.transform(n, t, { affinity: r });
              (e.current = i), null == i && e.unref();
            }
          },
        };
      function es(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function el(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? es(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : es(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var ec = {
          compare(e, t) {
            var n = eo.compare(e.path, t.path);
            return 0 === n
              ? e.offset < t.offset
                ? -1
                : +(e.offset > t.offset)
              : n;
          },
          isAfter: (e, t) => 1 === ec.compare(e, t),
          isBefore: (e, t) => -1 === ec.compare(e, t),
          equals: (e, t) => e.offset === t.offset && eo.equals(e.path, t.path),
          isPoint: (e) =>
            (0, u.Q)(e) && "number" == typeof e.offset && eo.isPath(e.path),
          transform(e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            return (0, o.jM)(e, (e) => {
              if (null === e) return null;
              var { affinity: r = "forward" } = n,
                { path: i, offset: u } = e;
              switch (t.type) {
                case "insert_node":
                case "move_node":
                  e.path = eo.transform(i, t, n);
                  break;
                case "insert_text":
                  eo.equals(t.path, i) &&
                    (t.offset < u || (t.offset === u && "forward" === r)) &&
                    (e.offset += t.text.length);
                  break;
                case "merge_node":
                  eo.equals(t.path, i) && (e.offset += t.position),
                    (e.path = eo.transform(i, t, n));
                  break;
                case "remove_text":
                  eo.equals(t.path, i) &&
                    t.offset <= u &&
                    (e.offset -= Math.min(u - t.offset, t.text.length));
                  break;
                case "remove_node":
                  if (eo.equals(t.path, i) || eo.isAncestor(t.path, i))
                    return null;
                  e.path = eo.transform(i, t, n);
                  break;
                case "split_node":
                  if (eo.equals(t.path, i))
                    if (t.position === u && null == r) return null;
                    else
                      (t.position < u ||
                        (t.position === u && "forward" === r)) &&
                        ((e.offset -= t.position),
                        (e.path = eo.transform(
                          i,
                          t,
                          el(el({}, n), {}, { affinity: "forward" }),
                        )));
                  else e.path = eo.transform(i, t, n);
              }
            });
          },
        },
        ed = {
          transform(e, t) {
            var { current: n, affinity: r } = e;
            if (null != n) {
              var i = ec.transform(n, t, { affinity: r });
              (e.current = i), null == i && e.unref();
            }
          },
        },
        ef = ["anchor", "focus"];
      function ep(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      var eh = {
          edges(e) {
            var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              { reverse: n = !1 } = t,
              { anchor: r, focus: i } = e;
            return eh.isBackward(e) === n ? [r, i] : [i, r];
          },
          end(e) {
            var [, t] = eh.edges(e);
            return t;
          },
          equals: (e, t) =>
            ec.equals(e.anchor, t.anchor) && ec.equals(e.focus, t.focus),
          includes(e, t) {
            if (eh.isRange(t)) {
              if (eh.includes(e, t.anchor) || eh.includes(e, t.focus))
                return !0;
              var [n, r] = eh.edges(e),
                [i, u] = eh.edges(t);
              return ec.isBefore(n, i) && ec.isAfter(r, u);
            }
            var [o, a] = eh.edges(e),
              s = !1,
              l = !1;
            return (
              ec.isPoint(t)
                ? ((s = ec.compare(t, o) >= 0), (l = 0 >= ec.compare(t, a)))
                : ((s = eo.compare(t, o.path) >= 0),
                  (l = 0 >= eo.compare(t, a.path))),
              s && l
            );
          },
          intersection(e, t) {
            var n = D(e, ef),
              [r, i] = eh.edges(e),
              [u, o] = eh.edges(t),
              s = ec.isBefore(r, u) ? u : r,
              l = ec.isBefore(i, o) ? i : o;
            return ec.isBefore(l, s)
              ? null
              : (function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2
                      ? ep(Object(n), !0).forEach(function (t) {
                          a(e, t, n[t]);
                        })
                      : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(
                            e,
                            Object.getOwnPropertyDescriptors(n),
                          )
                        : ep(Object(n)).forEach(function (t) {
                            Object.defineProperty(
                              e,
                              t,
                              Object.getOwnPropertyDescriptor(n, t),
                            );
                          });
                  }
                  return e;
                })({ anchor: s, focus: l }, n);
          },
          isBackward(e) {
            var { anchor: t, focus: n } = e;
            return ec.isAfter(t, n);
          },
          isCollapsed(e) {
            var { anchor: t, focus: n } = e;
            return ec.equals(t, n);
          },
          isExpanded: (e) => !eh.isCollapsed(e),
          isForward: (e) => !eh.isBackward(e),
          isRange: (e) =>
            (0, u.Q)(e) && ec.isPoint(e.anchor) && ec.isPoint(e.focus),
          *points(e) {
            yield [e.anchor, "anchor"], yield [e.focus, "focus"];
          },
          start(e) {
            var [t] = eh.edges(e);
            return t;
          },
          transform(e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            return (0, o.jM)(e, (e) => {
              if (null === e) return null;
              var r,
                i,
                { affinity: u = "inward" } = n;
              if ("inward" === u) {
                var o = eh.isCollapsed(e);
                eh.isForward(e)
                  ? ((r = "forward"), (i = o ? r : "backward"))
                  : ((r = "backward"), (i = o ? r : "forward"));
              } else
                "outward" === u
                  ? eh.isForward(e)
                    ? ((r = "backward"), (i = "forward"))
                    : ((r = "forward"), (i = "backward"))
                  : ((r = u), (i = u));
              var a = ec.transform(e.anchor, t, { affinity: r }),
                s = ec.transform(e.focus, t, { affinity: i });
              if (!a || !s) return null;
              (e.anchor = a), (e.focus = s);
            });
          },
        },
        ev = {
          transform(e, t) {
            var { current: n, affinity: r } = e;
            if (null != n) {
              var i = eh.transform(n, t, { affinity: r });
              (e.current = i), null == i && e.unref();
            }
          },
        },
        em = void 0,
        eg = {
          setScrubber(e) {
            em = e;
          },
          stringify: (e) => JSON.stringify(e, em),
        },
        eD = (e, t) => {
          for (var n in e) {
            var r = e[n],
              i = t[n];
            if ((0, u.Q)(r) && (0, u.Q)(i)) {
              if (!eD(r, i)) return !1;
            } else if (Array.isArray(r) && Array.isArray(i)) {
              if (r.length !== i.length) return !1;
              for (var o = 0; o < r.length; o++) if (r[o] !== i[o]) return !1;
            } else if (r !== i) return !1;
          }
          for (var a in t) if (void 0 === e[a] && void 0 !== t[a]) return !1;
          return !0;
        },
        eC = ["text"],
        eB = ["anchor", "focus"];
      function eE(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ey(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eE(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eE(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var ew = {
        equals(e, t) {
          var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            { loose: r = !1 } = n;
          return eD(r ? D(e, eC) : e, r ? D(t, eC) : t);
        },
        isText: (e) => (0, u.Q)(e) && "string" == typeof e.text,
        isTextList: (e) => Array.isArray(e) && e.every((e) => ew.isText(e)),
        isTextProps: (e) => void 0 !== e.text,
        matches(e, t) {
          for (var n in t)
            if ("text" !== n && (!e.hasOwnProperty(n) || e[n] !== t[n]))
              return !1;
          return !0;
        },
        decorations(e, t) {
          var n = [ey({}, e)];
          for (var r of t) {
            var i = D(r, eB),
              [u, o] = eh.edges(r),
              a = [],
              s = 0,
              l = u.offset,
              c = o.offset;
            for (var d of n) {
              var { length: f } = d.text,
                p = s;
              if (((s += f), l <= p && s <= c)) {
                Object.assign(d, i), a.push(d);
                continue;
              }
              if (
                (l !== c && (l === s || c === p)) ||
                l > s ||
                c < p ||
                (c === p && 0 !== p)
              ) {
                a.push(d);
                continue;
              }
              var h = d,
                v = void 0,
                m = void 0;
              if (c < s) {
                var g = c - p;
                (m = ey(ey({}, h), {}, { text: h.text.slice(g) })),
                  (h = ey(ey({}, h), {}, { text: h.text.slice(0, g) }));
              }
              if (l > p) {
                var C = l - p;
                (v = ey(ey({}, h), {}, { text: h.text.slice(0, C) })),
                  (h = ey(ey({}, h), {}, { text: h.text.slice(C) }));
              }
              Object.assign(h, i), v && a.push(v), a.push(h), m && a.push(m);
            }
            n = a;
          }
          return n;
        },
      };
      function eb(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function eA(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eb(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eb(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var eF = ["text"],
        e_ = ["children"];
      function ek(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function ex(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? ek(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : ek(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var ez = (e, t) =>
          W.isElement(t)
            ? !!Y.isVoid(e, t) ||
              (1 === t.children.length && ez(e, t.children[0]))
            : !Y.isEditor(t) && !0,
        eO = (e, t) => {
          var [n] = Y.node(e, t);
          return (e) => e === n;
        };
      function eS(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function eP(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eS(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eS(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      function eN(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function eT(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? eN(Object(n), !0).forEach(function (t) {
                a(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : eN(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t),
                  );
                });
        }
        return e;
      }
      var ej = eT(
        eT(
          eT(
            eT(
              {},
              {
                transform(e, t) {
                  e.children = (0, o.mq)(e.children);
                  var n = e.selection && (0, o.mq)(e.selection);
                  try {
                    n = ((e, t, n) => {
                      switch (n.type) {
                        case "insert_node":
                          var { path: r, node: i } = n,
                            u = en.parent(e, r),
                            o = r[r.length - 1];
                          if (o > u.children.length)
                            throw Error(
                              'Cannot apply an "insert_node" operation at path ['.concat(
                                r,
                                "] because the destination is past the end of the node.",
                              ),
                            );
                          if ((u.children.splice(o, 0, i), t))
                            for (var [a, s] of eh.points(t))
                              t[s] = ec.transform(a, n);
                          break;
                        case "insert_text":
                          var { path: l, offset: c, text: d } = n;
                          if (0 === d.length) break;
                          var f = en.leaf(e, l),
                            p = f.text.slice(0, c),
                            h = f.text.slice(c);
                          if (((f.text = p + d + h), t))
                            for (var [v, m] of eh.points(t))
                              t[m] = ec.transform(v, n);
                          break;
                        case "merge_node":
                          var { path: g } = n,
                            D = en.get(e, g),
                            C = eo.previous(g),
                            B = en.get(e, C),
                            E = en.parent(e, g),
                            y = g[g.length - 1];
                          if (ew.isText(D) && ew.isText(B)) B.text += D.text;
                          else if (ew.isText(D) || ew.isText(B))
                            throw Error(
                              'Cannot apply a "merge_node" operation at path ['
                                .concat(
                                  g,
                                  "] to nodes of different interfaces: ",
                                )
                                .concat(eg.stringify(D), " ")
                                .concat(eg.stringify(B)),
                            );
                          else B.children.push(...D.children);
                          if ((E.children.splice(y, 1), t))
                            for (var [w, b] of eh.points(t))
                              t[b] = ec.transform(w, n);
                          break;
                        case "move_node":
                          var { path: A, newPath: F } = n;
                          if (eo.isAncestor(A, F))
                            throw Error(
                              "Cannot move a path ["
                                .concat(A, "] to new path [")
                                .concat(
                                  F,
                                  "] because the destination is inside itself.",
                                ),
                            );
                          var _ = en.get(e, A),
                            k = en.parent(e, A),
                            x = A[A.length - 1];
                          k.children.splice(x, 1);
                          var z = eo.transform(A, n),
                            O = en.get(e, eo.parent(z)),
                            S = z[z.length - 1];
                          if ((O.children.splice(S, 0, _), t))
                            for (var [P, N] of eh.points(t))
                              t[N] = ec.transform(P, n);
                          break;
                        case "remove_node":
                          var { path: T } = n,
                            j = T[T.length - 1];
                          if ((en.parent(e, T).children.splice(j, 1), t))
                            for (var [Z, $] of eh.points(t)) {
                              var R = ec.transform(Z, n);
                              if (null != t && null != R) t[$] = R;
                              else {
                                var I = void 0,
                                  M = void 0;
                                for (var [L, K] of en.texts(e))
                                  if (-1 === eo.compare(K, T)) I = [L, K];
                                  else {
                                    M = [L, K];
                                    break;
                                  }
                                var q = !1;
                                I &&
                                  M &&
                                  (q = eo.equals(M[1], T)
                                    ? !eo.hasPrevious(M[1])
                                    : eo.common(I[1], T).length <
                                      eo.common(M[1], T).length),
                                  I && !q
                                    ? ((Z.path = I[1]),
                                      (Z.offset = I[0].text.length))
                                    : M
                                      ? ((Z.path = M[1]), (Z.offset = 0))
                                      : (t = null);
                              }
                            }
                          break;
                        case "remove_text":
                          var { path: W, offset: U, text: V } = n;
                          if (0 === V.length) break;
                          var J = en.leaf(e, W),
                            Q = J.text.slice(0, U),
                            H = J.text.slice(U + V.length);
                          if (((J.text = Q + H), t))
                            for (var [Y, X] of eh.points(t))
                              t[X] = ec.transform(Y, n);
                          break;
                        case "set_node":
                          var {
                            path: G,
                            properties: ee,
                            newProperties: et,
                          } = n;
                          if (0 === G.length)
                            throw Error(
                              "Cannot set properties on the root node!",
                            );
                          var er = en.get(e, G);
                          for (var ei in et) {
                            if ("children" === ei || "text" === ei)
                              throw Error(
                                'Cannot set the "'.concat(
                                  ei,
                                  '" property of nodes!',
                                ),
                              );
                            var eu = et[ei];
                            null == eu ? delete er[ei] : (er[ei] = eu);
                          }
                          for (var ea in ee)
                            et.hasOwnProperty(ea) || delete er[ea];
                          break;
                        case "set_selection":
                          var { newProperties: es } = n;
                          if (null == es) t = es;
                          else {
                            if (null == t) {
                              if (!eh.isRange(es))
                                throw Error(
                                  'Cannot apply an incomplete "set_selection" operation properties '.concat(
                                    eg.stringify(es),
                                    " when there is no current selection.",
                                  ),
                                );
                              t = eA({}, es);
                            }
                            for (var el in es) {
                              var ed = es[el];
                              if (null == ed) {
                                if ("anchor" === el || "focus" === el)
                                  throw Error(
                                    'Cannot remove the "'.concat(
                                      el,
                                      '" selection property',
                                    ),
                                  );
                                delete t[el];
                              } else t[el] = ed;
                            }
                          }
                          break;
                        case "split_node":
                          var ef,
                            { path: ep, position: ev, properties: em } = n;
                          if (0 === ep.length)
                            throw Error(
                              'Cannot apply a "split_node" operation at path ['.concat(
                                ep,
                                "] because the root node cannot be split.",
                              ),
                            );
                          var eD = en.get(e, ep),
                            eC = en.parent(e, ep),
                            eB = ep[ep.length - 1];
                          if (ew.isText(eD)) {
                            var eE = eD.text.slice(0, ev),
                              ey = eD.text.slice(ev);
                            (eD.text = eE),
                              (ef = eA(eA({}, em), {}, { text: ey }));
                          } else {
                            var eb = eD.children.slice(0, ev),
                              eF = eD.children.slice(ev);
                            (eD.children = eb),
                              (ef = eA(eA({}, em), {}, { children: eF }));
                          }
                          if ((eC.children.splice(eB + 1, 0, ef), t))
                            for (var [e_, ek] of eh.points(t))
                              t[ek] = ec.transform(e_, n);
                      }
                      return t;
                    })(e, n, t);
                  } finally {
                    (e.children = (0, o.vD)(e.children)),
                      n
                        ? (e.selection = (0, o.Qx)(n) ? (0, o.vD)(n) : n)
                        : (e.selection = null);
                  }
                },
              },
            ),
            {
              insertNodes(e, t) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                Y.withoutNormalizing(e, () => {
                  var {
                      hanging: r = !1,
                      voids: i = !1,
                      mode: u = "lowest",
                    } = n,
                    { at: o, match: a, select: s } = n;
                  if ((en.isNode(t) && (t = [t]), 0 !== t.length)) {
                    var [l] = t;
                    if (
                      (o ||
                        ((o = e.selection
                          ? e.selection
                          : e.children.length > 0
                            ? Y.end(e, [])
                            : [0]),
                        (s = !0)),
                      null == s && (s = !1),
                      eh.isRange(o))
                    )
                      if (
                        (r || (o = Y.unhangRange(e, o, { voids: i })),
                        eh.isCollapsed(o))
                      )
                        o = o.anchor;
                      else {
                        var [, c] = eh.edges(o),
                          d = Y.pointRef(e, c);
                        ej.delete(e, { at: o }), (o = d.unref());
                      }
                    if (ec.isPoint(o)) {
                      null == a &&
                        (a = ew.isText(l)
                          ? (e) => ew.isText(e)
                          : e.isInline(l)
                            ? (t) => ew.isText(t) || Y.isInline(e, t)
                            : (t) => W.isElement(t) && Y.isBlock(e, t));
                      var [f] = Y.nodes(e, {
                        at: o.path,
                        match: a,
                        mode: u,
                        voids: i,
                      });
                      if (!f) return;
                      var [, p] = f,
                        h = Y.pathRef(e, p),
                        v = Y.isEnd(e, o, p);
                      ej.splitNodes(e, { at: o, match: a, mode: u, voids: i });
                      var m = h.unref();
                      o = v ? eo.next(m) : m;
                    }
                    var g = eo.parent(o),
                      D = o[o.length - 1];
                    if (!(!i && Y.void(e, { at: g }))) {
                      for (var C of t) {
                        var B = g.concat(D);
                        D++,
                          e.apply({ type: "insert_node", path: B, node: C }),
                          (o = eo.next(o));
                      }
                      if (((o = eo.previous(o)), s)) {
                        var E = Y.end(e, o);
                        E && ej.select(e, E);
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
                Y.withoutNormalizing(e, () => {
                  var {
                      at: n = e.selection,
                      mode: r = "lowest",
                      voids: i = !1,
                    } = t,
                    { match: u } = t;
                  if (
                    (null == u &&
                      (u = eo.isPath(n)
                        ? eO(e, n)
                        : (t) => W.isElement(t) && Y.isBlock(e, t)),
                    n)
                  )
                    for (var o of Array.from(
                      Y.nodes(e, { at: n, match: u, mode: r, voids: i }),
                      (t) => {
                        var [, n] = t;
                        return Y.pathRef(e, n);
                      },
                    )) {
                      var a = o.unref();
                      if (a.length < 2)
                        throw Error(
                          "Cannot lift node at a path [".concat(
                            a,
                            "] because it has a depth of less than `2`.",
                          ),
                        );
                      var [s, l] = Y.node(e, eo.parent(a)),
                        c = a[a.length - 1],
                        { length: d } = s.children;
                      if (1 === d) {
                        var f = eo.next(l);
                        ej.moveNodes(e, { at: a, to: f, voids: i }),
                          ej.removeNodes(e, { at: l, voids: i });
                      } else if (0 === c)
                        ej.moveNodes(e, { at: a, to: l, voids: i });
                      else if (c === d - 1) {
                        var p = eo.next(l);
                        ej.moveNodes(e, { at: a, to: p, voids: i });
                      } else {
                        var h = eo.next(a),
                          v = eo.next(l);
                        ej.splitNodes(e, { at: h, voids: i }),
                          ej.moveNodes(e, { at: a, to: v, voids: i });
                      }
                    }
                });
              },
              mergeNodes(e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                Y.withoutNormalizing(e, () => {
                  var n,
                    r,
                    { match: i, at: u = e.selection } = t,
                    { hanging: o = !1, voids: a = !1, mode: s = "lowest" } = t;
                  if (u) {
                    if (null == i)
                      if (eo.isPath(u)) {
                        var [l] = Y.parent(e, u);
                        i = (e) => l.children.includes(e);
                      } else i = (t) => W.isElement(t) && Y.isBlock(e, t);
                    if (
                      (!o &&
                        eh.isRange(u) &&
                        (u = Y.unhangRange(e, u, { voids: a })),
                      eh.isRange(u))
                    )
                      if (eh.isCollapsed(u)) u = u.anchor;
                      else {
                        var [, c] = eh.edges(u),
                          d = Y.pointRef(e, c);
                        ej.delete(e, { at: u }),
                          (u = d.unref()),
                          null == t.at && ej.select(e, u);
                      }
                    var [f] = Y.nodes(e, {
                        at: u,
                        match: i,
                        voids: a,
                        mode: s,
                      }),
                      p = Y.previous(e, { at: u, match: i, voids: a, mode: s });
                    if (f && p) {
                      var [h, v] = f,
                        [m, g] = p;
                      if (0 !== v.length && 0 !== g.length) {
                        var C = eo.next(g),
                          B = eo.common(v, g),
                          E = eo.isSibling(v, g),
                          y = Array.from(Y.levels(e, { at: v }), (e) => {
                            var [t] = e;
                            return t;
                          })
                            .slice(B.length)
                            .slice(0, -1),
                          w = Y.above(e, {
                            at: v,
                            mode: "highest",
                            match: (t) => y.includes(t) && ez(e, t),
                          }),
                          b = w && Y.pathRef(e, w[1]);
                        if (ew.isText(h) && ew.isText(m)) {
                          var A = D(h, eF);
                          (r = m.text.length), (n = A);
                        } else if (W.isElement(h) && W.isElement(m)) {
                          var A = D(h, e_);
                          (r = m.children.length), (n = A);
                        } else
                          throw Error(
                            "Cannot merge the node at path ["
                              .concat(
                                v,
                                "] with the previous sibling because it is not the same kind: ",
                              )
                              .concat(eg.stringify(h), " ")
                              .concat(eg.stringify(m)),
                          );
                        E || ej.moveNodes(e, { at: v, to: C, voids: a }),
                          b && ej.removeNodes(e, { at: b.current, voids: a }),
                          (W.isElement(m) && Y.isEmpty(e, m)) ||
                          (ew.isText(m) &&
                            "" === m.text &&
                            0 !== g[g.length - 1])
                            ? ej.removeNodes(e, { at: g, voids: a })
                            : e.apply({
                                type: "merge_node",
                                path: C,
                                position: r,
                                properties: n,
                              }),
                          b && b.unref();
                      }
                    }
                  }
                });
              },
              moveNodes(e, t) {
                Y.withoutNormalizing(e, () => {
                  var {
                      to: n,
                      at: r = e.selection,
                      mode: i = "lowest",
                      voids: u = !1,
                    } = t,
                    { match: o } = t;
                  if (r) {
                    null == o &&
                      (o = eo.isPath(r)
                        ? eO(e, r)
                        : (t) => W.isElement(t) && Y.isBlock(e, t));
                    var a = Y.pathRef(e, n);
                    for (var s of Array.from(
                      Y.nodes(e, { at: r, match: o, mode: i, voids: u }),
                      (t) => {
                        var [, n] = t;
                        return Y.pathRef(e, n);
                      },
                    )) {
                      var l = s.unref(),
                        c = a.current;
                      0 !== l.length &&
                        e.apply({ type: "move_node", path: l, newPath: c }),
                        a.current &&
                          eo.isSibling(c, l) &&
                          eo.isAfter(c, l) &&
                          (a.current = eo.next(a.current));
                    }
                    a.unref();
                  }
                });
              },
              removeNodes(e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                Y.withoutNormalizing(e, () => {
                  var {
                      hanging: n = !1,
                      voids: r = !1,
                      mode: i = "lowest",
                    } = t,
                    { at: u = e.selection, match: o } = t;
                  if (u)
                    for (var a of (null == o &&
                      (o = eo.isPath(u)
                        ? eO(e, u)
                        : (t) => W.isElement(t) && Y.isBlock(e, t)),
                    !n &&
                      eh.isRange(u) &&
                      (u = Y.unhangRange(e, u, { voids: r })),
                    Array.from(
                      Y.nodes(e, { at: u, match: o, mode: i, voids: r }),
                      (t) => {
                        var [, n] = t;
                        return Y.pathRef(e, n);
                      },
                    ))) {
                      var s = a.unref();
                      if (s) {
                        var [l] = Y.node(e, s);
                        e.apply({ type: "remove_node", path: s, node: l });
                      }
                    }
                });
              },
              setNodes(e, t) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                Y.withoutNormalizing(e, () => {
                  var {
                      match: r,
                      at: i = e.selection,
                      compare: u,
                      merge: o,
                    } = n,
                    {
                      hanging: a = !1,
                      mode: s = "lowest",
                      split: l = !1,
                      voids: c = !1,
                    } = n;
                  if (i) {
                    if (
                      (null == r &&
                        (r = eo.isPath(i)
                          ? eO(e, i)
                          : (t) => W.isElement(t) && Y.isBlock(e, t)),
                      !a &&
                        eh.isRange(i) &&
                        (i = Y.unhangRange(e, i, { voids: c })),
                      l && eh.isRange(i))
                    ) {
                      if (
                        eh.isCollapsed(i) &&
                        Y.leaf(e, i.anchor)[0].text.length > 0
                      )
                        return;
                      var d = Y.rangeRef(e, i, { affinity: "inward" }),
                        [f, p] = eh.edges(i),
                        h = "lowest" === s ? "lowest" : "highest",
                        v = Y.isEnd(e, p, p.path);
                      ej.splitNodes(e, {
                        at: p,
                        match: r,
                        mode: h,
                        voids: c,
                        always: !v,
                      });
                      var m = Y.isStart(e, f, f.path);
                      ej.splitNodes(e, {
                        at: f,
                        match: r,
                        mode: h,
                        voids: c,
                        always: !m,
                      }),
                        (i = d.unref()),
                        null == n.at && ej.select(e, i);
                    }
                    for (var [g, D] of (u || (u = (e, t) => e !== t),
                    Y.nodes(e, { at: i, match: r, mode: s, voids: c }))) {
                      var C = {},
                        B = {};
                      if (0 !== D.length) {
                        var E = !1;
                        for (var y in t)
                          "children" !== y &&
                            "text" !== y &&
                            u(t[y], g[y]) &&
                            ((E = !0),
                            g.hasOwnProperty(y) && (C[y] = g[y]),
                            o
                              ? null != t[y] && (B[y] = o(g[y], t[y]))
                              : null != t[y] && (B[y] = t[y]));
                        E &&
                          e.apply({
                            type: "set_node",
                            path: D,
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
                Y.withoutNormalizing(e, () => {
                  var n,
                    r,
                    { mode: i = "lowest", voids: u = !1 } = t,
                    {
                      match: o,
                      at: a = e.selection,
                      height: s = 0,
                      always: l = !1,
                    } = t;
                  if (
                    (null == o &&
                      (o = (t) => W.isElement(t) && Y.isBlock(e, t)),
                    eh.isRange(a) &&
                      (a = ((e, t) => {
                        if (eh.isCollapsed(t)) return t.anchor;
                        var [, n] = eh.edges(t),
                          r = Y.pointRef(e, n);
                        return ej.delete(e, { at: t }), r.unref();
                      })(e, a)),
                    eo.isPath(a))
                  ) {
                    var c = a,
                      d = Y.point(e, c),
                      [f] = Y.parent(e, c);
                    (o = (e) => e === f),
                      (s = d.path.length - c.length + 1),
                      (a = d),
                      (l = !0);
                  }
                  if (a) {
                    var p = Y.pointRef(e, a, { affinity: "backward" });
                    try {
                      var [h] = Y.nodes(e, {
                        at: a,
                        match: o,
                        mode: i,
                        voids: u,
                      });
                      if (!h) return;
                      var v = Y.void(e, { at: a, mode: "highest" });
                      if (!u && v) {
                        var [m, g] = v;
                        if (W.isElement(m) && e.isInline(m)) {
                          var D = Y.after(e, g);
                          if (!D) {
                            var C = eo.next(g);
                            ej.insertNodes(
                              e,
                              { text: "" },
                              { at: C, voids: u },
                            ),
                              (D = Y.point(e, C));
                          }
                          (a = D), (l = !0);
                        }
                        (s = a.path.length - g.length + 1), (l = !0);
                      }
                      n = Y.pointRef(e, a);
                      var B = a.path.length - s,
                        [, E] = h,
                        y = a.path.slice(0, B),
                        w = 0 === s ? a.offset : a.path[B] + 0;
                      for (var [b, A] of Y.levels(e, {
                        at: y,
                        reverse: !0,
                        voids: u,
                      })) {
                        var F = !1;
                        if (
                          A.length < E.length ||
                          0 === A.length ||
                          (!u && W.isElement(b) && Y.isVoid(e, b))
                        )
                          break;
                        var _ = p.current,
                          k = Y.isEnd(e, _, A);
                        if (l || !p || !Y.isEdge(e, _, A)) {
                          F = !0;
                          var x = en.extractProps(b);
                          e.apply({
                            type: "split_node",
                            path: A,
                            position: w,
                            properties: x,
                          });
                        }
                        w = A[A.length - 1] + (F || k ? 1 : 0);
                      }
                      if (null == t.at) {
                        var z = n.current || Y.end(e, []);
                        ej.select(e, z);
                      }
                    } finally {
                      p.unref(), null == (r = n) || r.unref();
                    }
                  }
                });
              },
              unsetNodes(e, t) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                Array.isArray(t) || (t = [t]);
                var r = {};
                for (var i of t) r[i] = null;
                ej.setNodes(e, r, n);
              },
              unwrapNodes(e) {
                var t =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                Y.withoutNormalizing(e, () => {
                  var { mode: n = "lowest", split: r = !1, voids: i = !1 } = t,
                    { at: u = e.selection, match: o } = t;
                  if (u) {
                    null == o &&
                      (o = eo.isPath(u)
                        ? eO(e, u)
                        : (t) => W.isElement(t) && Y.isBlock(e, t)),
                      eo.isPath(u) && (u = Y.range(e, u));
                    var a = eh.isRange(u) ? Y.rangeRef(e, u) : null;
                    for (var s of Array.from(
                      Y.nodes(e, { at: u, match: o, mode: n, voids: i }),
                      (t) => {
                        var [, n] = t;
                        return Y.pathRef(e, n);
                      },
                    ).reverse())
                      !(function (t) {
                        var n = t.unref(),
                          [u] = Y.node(e, n),
                          o = Y.range(e, n);
                        r && a && (o = eh.intersection(a.current, o)),
                          ej.liftNodes(e, {
                            at: o,
                            match: (e) =>
                              W.isAncestor(u) && u.children.includes(e),
                            voids: i,
                          });
                      })(s);
                    a && a.unref();
                  }
                });
              },
              wrapNodes(e, t) {
                var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {};
                Y.withoutNormalizing(e, () => {
                  var { mode: r = "lowest", split: i = !1, voids: u = !1 } = n,
                    { match: o, at: a = e.selection } = n;
                  if (a) {
                    if (
                      (null == o &&
                        (o = eo.isPath(a)
                          ? eO(e, a)
                          : e.isInline(t)
                            ? (t) =>
                                (W.isElement(t) && Y.isInline(e, t)) ||
                                ew.isText(t)
                            : (t) => W.isElement(t) && Y.isBlock(e, t)),
                      i && eh.isRange(a))
                    ) {
                      var [s, l] = eh.edges(a),
                        c = Y.rangeRef(e, a, { affinity: "inward" });
                      ej.splitNodes(e, { at: l, match: o, voids: u }),
                        ej.splitNodes(e, { at: s, match: o, voids: u }),
                        (a = c.unref()),
                        null == n.at && ej.select(e, a);
                    }
                    for (var [, d] of Array.from(
                      Y.nodes(e, {
                        at: a,
                        match: e.isInline(t)
                          ? (t) => W.isElement(t) && Y.isBlock(e, t)
                          : (e) => Y.isEditor(e),
                        mode: "lowest",
                        voids: u,
                      }),
                    )) {
                      var f = eh.isRange(a)
                        ? eh.intersection(a, Y.range(e, d))
                        : a;
                      if (f) {
                        var p = Array.from(
                          Y.nodes(e, { at: f, match: o, mode: r, voids: u }),
                        );
                        if (
                          p.length > 0 &&
                          "continue" ===
                            (function () {
                              var [n] = p,
                                r = p[p.length - 1],
                                [, i] = n,
                                [, o] = r;
                              if (0 === i.length && 0 === o.length)
                                return "continue";
                              var a = eo.equals(i, o)
                                  ? eo.parent(i)
                                  : eo.common(i, o),
                                s = Y.range(e, i, o),
                                [l] = Y.node(e, a),
                                c = a.length + 1,
                                d = eo.next(o.slice(0, c)),
                                f = ex(ex({}, t), {}, { children: [] });
                              ej.insertNodes(e, f, { at: d, voids: u }),
                                ej.moveNodes(e, {
                                  at: s,
                                  match: (e) =>
                                    W.isAncestor(l) && l.children.includes(e),
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
                { edge: n = "anchor" } = t,
                { selection: r } = e;
              if (r) {
                if ("anchor" === n) ej.select(e, r.anchor);
                else if ("focus" === n) ej.select(e, r.focus);
                else if ("start" === n) {
                  var [i] = eh.edges(r);
                  ej.select(e, i);
                } else if ("end" === n) {
                  var [, u] = eh.edges(r);
                  ej.select(e, u);
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
                { selection: n } = e,
                { distance: r = 1, unit: i = "character", reverse: u = !1 } = t,
                { edge: o = null } = t;
              if (n) {
                "start" === o && (o = eh.isBackward(n) ? "focus" : "anchor"),
                  "end" === o && (o = eh.isBackward(n) ? "anchor" : "focus");
                var { anchor: a, focus: s } = n,
                  l = { distance: r, unit: i },
                  c = {};
                if (null == o || "anchor" === o) {
                  var d = u ? Y.before(e, a, l) : Y.after(e, a, l);
                  d && (c.anchor = d);
                }
                if (null == o || "focus" === o) {
                  var f = u ? Y.before(e, s, l) : Y.after(e, s, l);
                  f && (c.focus = f);
                }
                ej.setSelection(e, c);
              }
            },
            select(e, t) {
              var { selection: n } = e;
              if (((t = Y.range(e, t)), n)) return void ej.setSelection(e, t);
              if (!eh.isRange(t))
                throw Error(
                  "When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(
                    eg.stringify(t),
                  ),
                );
              e.apply({
                type: "set_selection",
                properties: n,
                newProperties: t,
              });
            },
            setPoint(e, t) {
              var n =
                  arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {},
                { selection: r } = e,
                { edge: i = "both" } = n;
              if (r) {
                "start" === i && (i = eh.isBackward(r) ? "focus" : "anchor"),
                  "end" === i && (i = eh.isBackward(r) ? "anchor" : "focus");
                var { anchor: u, focus: o } = r,
                  a = "anchor" === i ? u : o;
                ej.setSelection(e, {
                  ["anchor" === i ? "anchor" : "focus"]: eP(eP({}, a), t),
                });
              }
            },
            setSelection(e, t) {
              var { selection: n } = e,
                r = {},
                i = {};
              if (n) {
                for (var u in t)
                  (("anchor" !== u ||
                    null == t.anchor ||
                    ec.equals(t.anchor, n.anchor)) &&
                    ("focus" !== u ||
                      null == t.focus ||
                      ec.equals(t.focus, n.focus)) &&
                    ("anchor" === u || "focus" === u || t[u] === n[u])) ||
                    ((r[u] = n[u]), (i[u] = t[u]));
                Object.keys(r).length > 0 &&
                  e.apply({
                    type: "set_selection",
                    properties: r,
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
            Y.withoutNormalizing(e, () => {
              var n,
                {
                  reverse: r = !1,
                  unit: i = "character",
                  distance: u = 1,
                  voids: o = !1,
                } = t,
                { at: a = e.selection, hanging: s = !1 } = t;
              if (a) {
                var l = !1;
                if (
                  (eh.isRange(a) &&
                    eh.isCollapsed(a) &&
                    ((l = !0), (a = a.anchor)),
                  ec.isPoint(a))
                ) {
                  var c = Y.void(e, { at: a, mode: "highest" });
                  if (!o && c) {
                    var [, d] = c;
                    a = d;
                  } else {
                    var f = { unit: i, distance: u },
                      p = r
                        ? Y.before(e, a, f) || Y.start(e, [])
                        : Y.after(e, a, f) || Y.end(e, []);
                    (a = { anchor: a, focus: p }), (s = !0);
                  }
                }
                if (eo.isPath(a))
                  return void ej.removeNodes(e, { at: a, voids: o });
                if (!eh.isCollapsed(a)) {
                  if (!s) {
                    var [, h] = eh.edges(a),
                      v = Y.end(e, []);
                    ec.equals(h, v) || (a = Y.unhangRange(e, a, { voids: o }));
                  }
                  var [m, g] = eh.edges(a),
                    D = Y.above(e, {
                      match: (t) => W.isElement(t) && Y.isBlock(e, t),
                      at: m,
                      voids: o,
                    }),
                    C = Y.above(e, {
                      match: (t) => W.isElement(t) && Y.isBlock(e, t),
                      at: g,
                      voids: o,
                    }),
                    B = D && C && !eo.equals(D[1], C[1]),
                    E = eo.equals(m.path, g.path),
                    y = o ? null : Y.void(e, { at: m, mode: "highest" }),
                    w = o ? null : Y.void(e, { at: g, mode: "highest" });
                  if (y) {
                    var b = Y.before(e, m);
                    b && D && eo.isAncestor(D[1], b.path) && (m = b);
                  }
                  if (w) {
                    var A = Y.after(e, g);
                    A && C && eo.isAncestor(C[1], A.path) && (g = A);
                  }
                  var F = [];
                  for (var _ of Y.nodes(e, { at: a, voids: o })) {
                    var [k, x] = _;
                    (!n || 0 !== eo.compare(x, n)) &&
                      ((!o && W.isElement(k) && Y.isVoid(e, k)) ||
                        (!eo.isCommon(x, m.path) && !eo.isCommon(x, g.path))) &&
                      (F.push(_), (n = x));
                  }
                  var z = Array.from(F, (t) => {
                      var [, n] = t;
                      return Y.pathRef(e, n);
                    }),
                    O = Y.pointRef(e, m),
                    S = Y.pointRef(e, g),
                    P = "";
                  if (!E && !y) {
                    var N = O.current,
                      [T] = Y.leaf(e, N),
                      { path: j } = N,
                      { offset: Z } = m,
                      $ = T.text.slice(Z);
                    $.length > 0 &&
                      (e.apply({
                        type: "remove_text",
                        path: j,
                        offset: Z,
                        text: $,
                      }),
                      (P = $));
                  }
                  if (
                    (z
                      .reverse()
                      .map((e) => e.unref())
                      .filter((e) => null !== e)
                      .forEach((t) => ej.removeNodes(e, { at: t, voids: o })),
                    !w)
                  ) {
                    var R = S.current,
                      [I] = Y.leaf(e, R),
                      { path: M } = R,
                      L = E ? m.offset : 0,
                      K = I.text.slice(L, g.offset);
                    K.length > 0 &&
                      (e.apply({
                        type: "remove_text",
                        path: M,
                        offset: L,
                        text: K,
                      }),
                      (P = K));
                  }
                  !E &&
                    B &&
                    S.current &&
                    O.current &&
                    ej.mergeNodes(e, { at: S.current, hanging: !0, voids: o }),
                    l &&
                      r &&
                      "character" === i &&
                      P.length > 1 &&
                      P.match(/[\u0E00-\u0E7F]+/) &&
                      ej.insertText(e, P.slice(0, P.length - u));
                  var q = O.unref(),
                    U = S.unref(),
                    V = r ? q || U : U || q;
                  null == t.at && V && ej.select(e, V);
                }
              }
            });
          },
          insertFragment(e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            Y.withoutNormalizing(e, () => {
              var r,
                { hanging: i = !1, voids: u = !1 } = n,
                { at: o = e.selection } = n;
              if (t.length) {
                if (o) {
                  if (eh.isRange(o))
                    if (
                      (i || (o = Y.unhangRange(e, o, { voids: u })),
                      eh.isCollapsed(o))
                    )
                      o = o.anchor;
                    else {
                      var [, a] = eh.edges(o);
                      if (!u && Y.void(e, { at: a })) return;
                      var s = Y.pointRef(e, a);
                      ej.delete(e, { at: o }), (o = s.unref());
                    }
                  else eo.isPath(o) && (o = Y.start(e, o));
                  if (!(!u && Y.void(e, { at: o }))) {
                    var l = Y.above(e, {
                      at: o,
                      match: (t) => W.isElement(t) && Y.isInline(e, t),
                      mode: "highest",
                      voids: u,
                    });
                    if (l) {
                      var [, c] = l;
                      Y.isEnd(e, o, c)
                        ? (o = Y.after(e, c))
                        : Y.isStart(e, o, c) && (o = Y.before(e, c));
                    }
                    var [, d] = Y.above(e, {
                        match: (t) => W.isElement(t) && Y.isBlock(e, t),
                        at: o,
                        voids: u,
                      }),
                      f = Y.isStart(e, o, d),
                      p = Y.isEnd(e, o, d),
                      h = f && p,
                      v = !f || (f && p),
                      m = !p,
                      [, g] = en.first({ children: t }, []),
                      [, D] = en.last({ children: t }, []),
                      C = [],
                      B = (t) => {
                        var [n, r] = t;
                        return (
                          0 !== r.length &&
                          (!!h ||
                            !(
                              (v &&
                                eo.isAncestor(r, g) &&
                                W.isElement(n) &&
                                !e.isVoid(n) &&
                                !e.isInline(n)) ||
                              (m &&
                                eo.isAncestor(r, D) &&
                                W.isElement(n) &&
                                !e.isVoid(n) &&
                                !e.isInline(n))
                            ))
                        );
                      };
                    for (var E of en.nodes({ children: t }, { pass: B }))
                      B(E) && C.push(E);
                    var y = [],
                      w = [],
                      b = [],
                      A = !0,
                      F = !1;
                    for (var [_] of C)
                      W.isElement(_) && !e.isInline(_)
                        ? ((A = !1), (F = !0), w.push(_))
                        : A
                          ? y.push(_)
                          : b.push(_);
                    var [k] = Y.nodes(e, {
                        at: o,
                        match: (t) => ew.isText(t) || Y.isInline(e, t),
                        mode: "highest",
                        voids: u,
                      }),
                      [, x] = k,
                      z = Y.isStart(e, o, x),
                      O = Y.isEnd(e, o, x),
                      S = Y.pathRef(e, p && !b.length ? eo.next(d) : d),
                      P = Y.pathRef(e, O ? eo.next(x) : x);
                    ej.splitNodes(e, {
                      at: o,
                      match: (t) =>
                        F
                          ? W.isElement(t) && Y.isBlock(e, t)
                          : ew.isText(t) || Y.isInline(e, t),
                      mode: F ? "lowest" : "highest",
                      always: F && (!f || y.length > 0) && (!p || b.length > 0),
                      voids: u,
                    });
                    var N = Y.pathRef(e, !z || (z && O) ? eo.next(x) : x);
                    if (
                      (ej.insertNodes(e, y, {
                        at: N.current,
                        match: (t) => ew.isText(t) || Y.isInline(e, t),
                        mode: "highest",
                        voids: u,
                      }),
                      h &&
                        !y.length &&
                        w.length &&
                        !b.length &&
                        ej.delete(e, { at: d, voids: u }),
                      ej.insertNodes(e, w, {
                        at: S.current,
                        match: (t) => W.isElement(t) && Y.isBlock(e, t),
                        mode: "lowest",
                        voids: u,
                      }),
                      ej.insertNodes(e, b, {
                        at: P.current,
                        match: (t) => ew.isText(t) || Y.isInline(e, t),
                        mode: "highest",
                        voids: u,
                      }),
                      !n.at &&
                        (b.length > 0 && P.current
                          ? (r = eo.previous(P.current))
                          : w.length > 0 && S.current
                            ? (r = eo.previous(S.current))
                            : N.current && (r = eo.previous(N.current)),
                        r))
                    ) {
                      var T = Y.end(e, r);
                      ej.select(e, T);
                    }
                    N.unref(), S.unref(), P.unref();
                  }
                }
              }
            });
          },
          insertText(e, t) {
            var n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {};
            Y.withoutNormalizing(e, () => {
              var { voids: r = !1 } = n,
                { at: i = e.selection } = n;
              if (i) {
                if ((eo.isPath(i) && (i = Y.range(e, i)), eh.isRange(i)))
                  if (eh.isCollapsed(i)) i = i.anchor;
                  else {
                    var u = eh.end(i);
                    if (!r && Y.void(e, { at: u })) return;
                    var o = eh.start(i),
                      a = Y.pointRef(e, o),
                      s = Y.pointRef(e, u);
                    ej.delete(e, { at: i, voids: r });
                    var l = a.unref(),
                      c = s.unref();
                    (i = l || c), ej.setSelection(e, { anchor: i, focus: i });
                  }
                if (!(!r && Y.void(e, { at: i }))) {
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
    },
    483606(e, t, n) {
      var r = n(557939),
        i = n(410323),
        u = n(321727),
        o = n(304880),
        a = i("".charCodeAt);
      r(
        { target: "String", proto: !0 },
        {
          isWellFormed: function () {
            for (var e = o(u(this)), t = e.length, n = 0; n < t; n++) {
              var r = a(e, n);
              if (
                (63488 & r) == 55296 &&
                (r >= 56320 || ++n >= t || (64512 & a(e, n)) != 56320)
              )
                return !1;
            }
            return !0;
          },
        },
      );
    },
    162929(e, t, n) {
      n.d(t, { W: () => eN });
      var r,
        i,
        u = "0123456789abcdef",
        o =
          "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
        a =
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
        p = c + "crypto unavailable",
        h = "[object Decimal]",
        v = Math.floor,
        m = Math.pow,
        g = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
        D = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
        C = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
        B = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
        E = o.length - 1,
        y = a.length - 1,
        w = { toStringTag: h };
      function b(e) {
        var t,
          n,
          r,
          i = e.length - 1,
          u = "",
          o = e[0];
        if (i > 0) {
          for (u += o, t = 1; t < i; t++)
            (n = 7 - (r = e[t] + "").length) && (u += T(n)), (u += r);
          (n = 7 - (r = (o = e[t]) + "").length) && (u += T(n));
        } else if (0 === o) return "0";
        for (; o % 10 == 0; ) o /= 10;
        return u + o;
      }
      function A(e, t, n) {
        if (e !== ~~e || e < t || e > n) throw Error(d + e);
      }
      function F(e, t, n, r) {
        var i, u, o, a;
        for (u = e[0]; u >= 10; u /= 10) --t;
        return (
          --t < 0
            ? ((t += 7), (i = 0))
            : ((i = Math.ceil((t + 1) / 7)), (t %= 7)),
          (u = m(10, 7 - t)),
          (a = e[i] % u | 0),
          null == r
            ? t < 3
              ? (0 == t ? (a = (a / 100) | 0) : 1 == t && (a = (a / 10) | 0),
                (o =
                  (n < 4 && 99999 == a) ||
                  (n > 3 && 49999 == a) ||
                  5e4 == a ||
                  0 == a))
              : (o =
                  (((n < 4 && a + 1 == u) || (n > 3 && a + 1 == u / 2)) &&
                    ((e[i + 1] / u / 100) | 0) == m(10, t - 2) - 1) ||
                  ((a == u / 2 || 0 == a) && ((e[i + 1] / u / 100) | 0) == 0))
            : t < 4
              ? (0 == t
                  ? (a = (a / 1e3) | 0)
                  : 1 == t
                    ? (a = (a / 100) | 0)
                    : 2 == t && (a = (a / 10) | 0),
                (o = ((r || n < 4) && 9999 == a) || (!r && n > 3 && 4999 == a)))
              : (o =
                  (((r || n < 4) && a + 1 == u) ||
                    (!r && n > 3 && a + 1 == u / 2)) &&
                  ((e[i + 1] / u / 1e3) | 0) == m(10, t - 3) - 1),
          o
        );
      }
      function _(e, t, n) {
        for (var r, i, o = [0], a = 0, s = e.length; a < s; ) {
          for (i = o.length; i--; ) o[i] *= t;
          for (o[0] += u.indexOf(e.charAt(a++)), r = 0; r < o.length; r++)
            o[r] > n - 1 &&
              (void 0 === o[r + 1] && (o[r + 1] = 0),
              (o[r + 1] += (o[r] / n) | 0),
              (o[r] %= n));
        }
        return o.reverse();
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
            var n = this.constructor;
            if (((e = new n(e)), (t = new n(t)), !e.s || !t.s))
              return new n(NaN);
            if (e.gt(t)) throw Error(d + t);
            return 0 > this.cmp(e) ? e : this.cmp(t) > 0 ? t : new n(this);
          }),
        (w.comparedTo = w.cmp =
          function (e) {
            var t,
              n,
              r,
              i,
              u = this.d,
              o = (e = new this.constructor(e)).d,
              a = this.s,
              s = e.s;
            if (!u || !o)
              return a && s
                ? a !== s
                  ? a
                  : u === o
                    ? 0
                    : !u ^ (a < 0)
                      ? 1
                      : -1
                : NaN;
            if (!u[0] || !o[0]) return u[0] ? a : o[0] ? -s : 0;
            if (a !== s) return a;
            if (this.e !== e.e) return (this.e > e.e) ^ (a < 0) ? 1 : -1;
            for (t = 0, n = (r = u.length) < (i = o.length) ? r : i; t < n; ++t)
              if (u[t] !== o[t]) return (u[t] > o[t]) ^ (a < 0) ? 1 : -1;
            return r === i ? 0 : (r > i) ^ (a < 0) ? 1 : -1;
          }),
        (w.cosine = w.cos =
          function () {
            var e,
              t,
              n = this,
              r = n.constructor;
            return n.d
              ? n.d[0]
                ? ((e = r.precision),
                  (t = r.rounding),
                  (r.precision = e + Math.max(n.e, n.sd()) + 7),
                  (r.rounding = 1),
                  (n = (function (e, t) {
                    var n, r, i;
                    if (t.isZero()) return t;
                    (r = t.d.length) < 32
                      ? (i = (1 / q(4, (n = Math.ceil(r / 3)))).toString())
                      : ((n = 16), (i = "2.3283064365386962890625e-10")),
                      (e.precision += n),
                      (t = K(e, 1, t.times(i), new e(1)));
                    for (var u = n; u--; ) {
                      var o = t.times(t);
                      t = o.times(o).minus(o).times(8).plus(1);
                    }
                    return (e.precision -= n), t;
                  })(r, W(r, n))),
                  (r.precision = e),
                  (r.rounding = t),
                  x(2 == i || 3 == i ? n.neg() : n, e, t, !0))
                : new r(1)
              : new r(NaN);
          }),
        (w.cubeRoot = w.cbrt =
          function () {
            var e,
              t,
              n,
              r,
              i,
              u,
              o,
              a,
              s,
              c,
              d = this.constructor;
            if (!this.isFinite() || this.isZero()) return new d(this);
            for (
              l = !1,
                (u = this.s * m(this.s * this, 1 / 3)) && Math.abs(u) != 1 / 0
                  ? (r = new d(u.toString()))
                  : ((n = b(this.d)),
                    (u = ((e = this.e) - n.length + 1) % 3) &&
                      (n += 1 == u || -2 == u ? "0" : "00"),
                    (u = m(n, 1 / 3)),
                    (e = v((e + 1) / 3) - (e % 3 == (e < 0 ? -1 : 2))),
                    ((r = new d(
                      (n =
                        u == 1 / 0
                          ? "5e" + e
                          : (n = u.toExponential()).slice(
                              0,
                              n.indexOf("e") + 1,
                            ) + e),
                    )).s = this.s)),
                o = (e = d.precision) + 3;
              ;

            )
              if (
                ((r = k(
                  (c = (s = (a = r).times(a).times(a)).plus(this))
                    .plus(this)
                    .times(a),
                  c.plus(s),
                  o + 2,
                  1,
                )),
                b(a.d).slice(0, o) === (n = b(r.d)).slice(0, o))
              ) {
                if (
                  "9999" != (n = n.slice(o - 3, o + 1)) &&
                  (i || "4999" != n)
                ) {
                  (+n && (+n.slice(1) || "5" != n.charAt(0))) ||
                    (x(r, e + 1, 1), (t = !r.times(r).times(r).eq(this)));
                  break;
                }
                if (!i && (x(a, e + 1, 0), a.times(a).times(a).eq(this))) {
                  r = a;
                  break;
                }
                (o += 4), (i = 1);
              }
            return (l = !0), x(r, e, d.rounding, t);
          }),
        (w.decimalPlaces = w.dp =
          function () {
            var e,
              t = this.d,
              n = NaN;
            if (t) {
              if (((n = ((e = t.length - 1) - v(this.e / 7)) * 7), (e = t[e])))
                for (; e % 10 == 0; e /= 10) n--;
              n < 0 && (n = 0);
            }
            return n;
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
              n,
              r,
              i,
              u = this,
              o = u.constructor,
              a = new o(1);
            if (!u.isFinite()) return new o(u.s ? 1 / 0 : NaN);
            if (u.isZero()) return a;
            (n = o.precision),
              (r = o.rounding),
              (o.precision = n + Math.max(u.e, u.sd()) + 4),
              (o.rounding = 1),
              (i = u.d.length) < 32
                ? (t = (1 / q(4, (e = Math.ceil(i / 3)))).toString())
                : ((e = 16), (t = "2.3283064365386962890625e-10")),
              (u = K(o, 1, u.times(t), new o(1), !0));
            for (var s, l = e, c = new o(8); l--; )
              (s = u.times(u)), (u = a.minus(s.times(c.minus(s.times(c)))));
            return x(u, (o.precision = n), (o.rounding = r), !0);
          }),
        (w.hyperbolicSine = w.sinh =
          function () {
            var e,
              t,
              n,
              r,
              i = this,
              u = i.constructor;
            if (!i.isFinite() || i.isZero()) return new u(i);
            if (
              ((t = u.precision),
              (n = u.rounding),
              (u.precision = t + Math.max(i.e, i.sd()) + 4),
              (u.rounding = 1),
              (r = i.d.length) < 3)
            )
              i = K(u, 2, i, i, !0);
            else {
              (e = (e = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | e),
                (i = K(u, 2, (i = i.times(1 / q(5, e))), i, !0));
              for (var o, a = new u(5), s = new u(16), l = new u(20); e--; )
                (o = i.times(i)),
                  (i = i.times(a.plus(o.times(s.times(o).plus(l)))));
            }
            return (u.precision = t), (u.rounding = n), x(i, t, n, !0);
          }),
        (w.hyperbolicTangent = w.tanh =
          function () {
            var e,
              t,
              n = this.constructor;
            return this.isFinite()
              ? this.isZero()
                ? new n(this)
                : ((e = n.precision),
                  (t = n.rounding),
                  (n.precision = e + 7),
                  (n.rounding = 1),
                  k(
                    this.sinh(),
                    this.cosh(),
                    (n.precision = e),
                    (n.rounding = t),
                  ))
              : new n(this.s);
          }),
        (w.inverseCosine = w.acos =
          function () {
            var e = this,
              t = e.constructor,
              n = e.abs().cmp(1),
              r = t.precision,
              i = t.rounding;
            return -1 !== n
              ? 0 === n
                ? e.isNeg()
                  ? P(t, r, i)
                  : new t(0)
                : new t(NaN)
              : e.isZero()
                ? P(t, r + 4, i).times(0.5)
                : ((t.precision = r + 6),
                  (t.rounding = 1),
                  (e = new t(1).minus(e).div(e.plus(1)).sqrt().atan()),
                  (t.precision = r),
                  (t.rounding = i),
                  e.times(2));
          }),
        (w.inverseHyperbolicCosine = w.acosh =
          function () {
            var e,
              t,
              n = this,
              r = n.constructor;
            return n.lte(1)
              ? new r(n.eq(1) ? 0 : NaN)
              : n.isFinite()
                ? ((e = r.precision),
                  (t = r.rounding),
                  (r.precision = e + Math.max(Math.abs(n.e), n.sd()) + 4),
                  (r.rounding = 1),
                  (l = !1),
                  (n = n.times(n).minus(1).sqrt().plus(n)),
                  (l = !0),
                  (r.precision = e),
                  (r.rounding = t),
                  n.ln())
                : new r(n);
          }),
        (w.inverseHyperbolicSine = w.asinh =
          function () {
            var e,
              t,
              n = this,
              r = n.constructor;
            return !n.isFinite() || n.isZero()
              ? new r(n)
              : ((e = r.precision),
                (t = r.rounding),
                (r.precision = e + 2 * Math.max(Math.abs(n.e), n.sd()) + 6),
                (r.rounding = 1),
                (l = !1),
                (n = n.times(n).plus(1).sqrt().plus(n)),
                (l = !0),
                (r.precision = e),
                (r.rounding = t),
                n.ln());
          }),
        (w.inverseHyperbolicTangent = w.atanh =
          function () {
            var e,
              t,
              n,
              r,
              i = this,
              u = i.constructor;
            return i.isFinite()
              ? i.e >= 0
                ? new u(i.abs().eq(1) ? i.s / 0 : i.isZero() ? i : NaN)
                : ((e = u.precision),
                    (t = u.rounding),
                    Math.max((r = i.sd()), e) < -(2 * i.e) - 1)
                  ? x(new u(i), e, t, !0)
                  : ((u.precision = n = r - i.e),
                    (i = k(i.plus(1), new u(1).minus(i), n + e, 1)),
                    (u.precision = e + 4),
                    (u.rounding = 1),
                    (i = i.ln()),
                    (u.precision = e),
                    (u.rounding = t),
                    i.times(0.5))
              : new u(NaN);
          }),
        (w.inverseSine = w.asin =
          function () {
            var e,
              t,
              n,
              r,
              i = this,
              u = i.constructor;
            return i.isZero()
              ? new u(i)
              : ((t = i.abs().cmp(1)),
                  (n = u.precision),
                  (r = u.rounding),
                  -1 !== t)
                ? 0 === t
                  ? (((e = P(u, n + 4, r).times(0.5)).s = i.s), e)
                  : new u(NaN)
                : ((u.precision = n + 6),
                  (u.rounding = 1),
                  (i = i.div(new u(1).minus(i.times(i)).sqrt().plus(1)).atan()),
                  (u.precision = n),
                  (u.rounding = r),
                  i.times(2));
          }),
        (w.inverseTangent = w.atan =
          function () {
            var e,
              t,
              n,
              r,
              i,
              u,
              o,
              a,
              s,
              c = this,
              d = c.constructor,
              f = d.precision,
              p = d.rounding;
            if (c.isFinite()) {
              if (c.isZero()) return new d(c);
              else if (c.abs().eq(1) && f + 4 <= y)
                return ((o = P(d, f + 4, p).times(0.25)).s = c.s), o;
            } else {
              if (!c.s) return new d(NaN);
              if (f + 4 <= y)
                return ((o = P(d, f + 4, p).times(0.5)).s = c.s), o;
            }
            for (
              d.precision = a = f + 10,
                d.rounding = 1,
                e = n = Math.min(28, (a / 7 + 2) | 0);
              e;
              --e
            )
              c = c.div(c.times(c).plus(1).sqrt().plus(1));
            for (
              l = !1,
                t = Math.ceil(a / 7),
                r = 1,
                s = c.times(c),
                o = new d(c),
                i = c;
              -1 !== e;

            )
              if (
                ((i = i.times(s)),
                (u = o.minus(i.div((r += 2)))),
                (i = i.times(s)),
                void 0 !== (o = u.plus(i.div((r += 2)))).d[t])
              )
                for (e = t; o.d[e] === u.d[e] && e--; );
            return (
              n && (o = o.times(2 << (n - 1))),
              (l = !0),
              x(o, (d.precision = f), (d.rounding = p), !0)
            );
          }),
        (w.isFinite = function () {
          return !!this.d;
        }),
        (w.isInteger = w.isInt =
          function () {
            return !!this.d && v(this.e / 7) > this.d.length - 2;
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
              n,
              r,
              i,
              u,
              o,
              a,
              s = this.constructor,
              c = s.precision,
              d = s.rounding;
            if (null == e) (e = new s(10)), (t = !0);
            else {
              if (((n = (e = new s(e)).d), e.s < 0 || !n || !n[0] || e.eq(1)))
                return new s(NaN);
              t = e.eq(10);
            }
            if (((n = this.d), this.s < 0 || !n || !n[0] || this.eq(1)))
              return new s(
                n && !n[0] ? -1 / 0 : 1 != this.s ? NaN : n ? 0 : 1 / 0,
              );
            if (t)
              if (n.length > 1) i = !0;
              else {
                for (r = n[0]; r % 10 == 0; ) r /= 10;
                i = 1 !== r;
              }
            if (
              ((l = !1),
              F(
                (a = k(
                  (u = I(this, (o = c + 5))),
                  t ? S(s, o + 10) : I(e, o),
                  o,
                  1,
                )).d,
                (r = c),
                d,
              ))
            )
              do
                if (
                  ((o += 10),
                  (a = k((u = I(this, o)), t ? S(s, o + 10) : I(e, o), o, 1)),
                  !i)
                ) {
                  +b(a.d).slice(r + 1, r + 15) + 1 == 1e14 &&
                    (a = x(a, c + 1, 0));
                  break;
                }
              while (F(a.d, (r += 10), d));
            return (l = !0), x(a, c, d);
          }),
        (w.minus = w.sub =
          function (e) {
            var t,
              n,
              r,
              i,
              u,
              o,
              a,
              s,
              c,
              d,
              f,
              p,
              h = this.constructor;
            if (((e = new h(e)), !this.d || !e.d))
              return (
                this.s && e.s
                  ? this.d
                    ? (e.s = -e.s)
                    : (e = new h(e.d || this.s !== e.s ? this : NaN))
                  : (e = new h(NaN)),
                e
              );
            if (this.s != e.s) return (e.s = -e.s), this.plus(e);
            if (
              ((c = this.d),
              (p = e.d),
              (a = h.precision),
              (s = h.rounding),
              !c[0] || !p[0])
            ) {
              if (p[0]) e.s = -e.s;
              else {
                if (!c[0]) return new h(3 === s ? -0 : 0);
                e = new h(this);
              }
              return l ? x(e, a, s) : e;
            }
            if (
              ((n = v(e.e / 7)),
              (d = v(this.e / 7)),
              (c = c.slice()),
              (u = d - n))
            ) {
              for (
                (f = u < 0)
                  ? ((t = c), (u = -u), (o = p.length))
                  : ((t = p), (n = d), (o = c.length)),
                  u > (r = Math.max(Math.ceil(a / 7), o) + 2) &&
                    ((u = r), (t.length = 1)),
                  t.reverse(),
                  r = u;
                r--;

              )
                t.push(0);
              t.reverse();
            } else {
              for (
                (f = (r = c.length) < (o = p.length)) && (o = r), r = 0;
                r < o;
                r++
              )
                if (c[r] != p[r]) {
                  f = c[r] < p[r];
                  break;
                }
              u = 0;
            }
            for (
              f && ((t = c), (c = p), (p = t), (e.s = -e.s)),
                o = c.length,
                r = p.length - o;
              r > 0;
              --r
            )
              c[o++] = 0;
            for (r = p.length; r > u; ) {
              if (c[--r] < p[r]) {
                for (i = r; i && 0 === c[--i]; ) c[i] = 1e7 - 1;
                --c[i], (c[r] += 1e7);
              }
              c[r] -= p[r];
            }
            for (; 0 === c[--o]; ) c.pop();
            for (; 0 === c[0]; c.shift()) --n;
            return c[0]
              ? ((e.d = c), (e.e = O(c, n)), l ? x(e, a, s) : e)
              : new h(3 === s ? -0 : 0);
          }),
        (w.modulo = w.mod =
          function (e) {
            var t,
              n = this.constructor;
            return ((e = new n(e)), this.d && e.s && (!e.d || e.d[0]))
              ? e.d && (!this.d || this.d[0])
                ? ((l = !1),
                  9 == n.modulo
                    ? ((t = k(this, e.abs(), 0, 3, 1)), (t.s *= e.s))
                    : (t = k(this, e, 0, n.modulo, 1)),
                  (t = t.times(e)),
                  (l = !0),
                  this.minus(t))
                : x(new n(this), n.precision, n.rounding)
              : new n(NaN);
          }),
        (w.naturalExponential = w.exp =
          function () {
            return R(this);
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
              n,
              r,
              i,
              u,
              o,
              a,
              s,
              c,
              d,
              f = this.constructor;
            if (((e = new f(e)), !this.d || !e.d))
              return (
                this.s && e.s
                  ? this.d || (e = new f(e.d || this.s === e.s ? this : NaN))
                  : (e = new f(NaN)),
                e
              );
            if (this.s != e.s) return (e.s = -e.s), this.minus(e);
            if (
              ((c = this.d),
              (d = e.d),
              (a = f.precision),
              (s = f.rounding),
              !c[0] || !d[0])
            )
              return d[0] || (e = new f(this)), l ? x(e, a, s) : e;
            if (
              ((u = v(this.e / 7)),
              (r = v(e.e / 7)),
              (c = c.slice()),
              (i = u - r))
            ) {
              for (
                i < 0
                  ? ((n = c), (i = -i), (o = d.length))
                  : ((n = d), (r = u), (o = c.length)),
                  i > (o = (u = Math.ceil(a / 7)) > o ? u + 1 : o + 1) &&
                    ((i = o), (n.length = 1)),
                  n.reverse();
                i--;

              )
                n.push(0);
              n.reverse();
            }
            for (
              (o = c.length) - (i = d.length) < 0 &&
                ((i = o), (n = d), (d = c), (c = n)),
                t = 0;
              i;

            )
              (t = ((c[--i] = c[i] + d[i] + t) / 1e7) | 0), (c[i] %= 1e7);
            for (t && (c.unshift(t), ++r), o = c.length; 0 == c[--o]; ) c.pop();
            return (e.d = c), (e.e = O(c, r)), l ? x(e, a, s) : e;
          }),
        (w.precision = w.sd =
          function (e) {
            var t;
            if (void 0 !== e && !!e !== e && 1 !== e && 0 !== e)
              throw Error(d + e);
            return (
              this.d
                ? ((t = N(this.d)), e && this.e + 1 > t && (t = this.e + 1))
                : (t = NaN),
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
              n = this,
              r = n.constructor;
            return n.isFinite()
              ? n.isZero()
                ? new r(n)
                : ((e = r.precision),
                  (t = r.rounding),
                  (r.precision = e + Math.max(n.e, n.sd()) + 7),
                  (r.rounding = 1),
                  (n = (function (e, t) {
                    var n,
                      r = t.d.length;
                    if (r < 3) return t.isZero() ? t : K(e, 2, t, t);
                    (n = (n = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | n),
                      (t = K(e, 2, (t = t.times(1 / q(5, n))), t));
                    for (
                      var i, u = new e(5), o = new e(16), a = new e(20);
                      n--;

                    )
                      (i = t.times(t)),
                        (t = t.times(u.plus(i.times(o.times(i).minus(a)))));
                    return t;
                  })(r, W(r, n))),
                  (r.precision = e),
                  (r.rounding = t),
                  x(i > 2 ? n.neg() : n, e, t, !0))
              : new r(NaN);
          }),
        (w.squareRoot = w.sqrt =
          function () {
            var e,
              t,
              n,
              r,
              i,
              u,
              o = this.d,
              a = this.e,
              s = this.s,
              c = this.constructor;
            if (1 !== s || !o || !o[0])
              return new c(
                !s || (s < 0 && (!o || o[0])) ? NaN : o ? this : 1 / 0,
              );
            for (
              l = !1,
                0 == (s = Math.sqrt(+this)) || s == 1 / 0
                  ? (((t = b(o)).length + a) % 2 == 0 && (t += "0"),
                    (s = Math.sqrt(t)),
                    (a = v((a + 1) / 2) - (a < 0 || a % 2)),
                    (r = new c(
                      (t =
                        s == 1 / 0
                          ? "5e" + a
                          : (t = s.toExponential()).slice(
                              0,
                              t.indexOf("e") + 1,
                            ) + a),
                    )))
                  : (r = new c(s.toString())),
                n = (a = c.precision) + 3;
              ;

            )
              if (
                ((r = (u = r).plus(k(this, u, n + 2, 1)).times(0.5)),
                b(u.d).slice(0, n) === (t = b(r.d)).slice(0, n))
              ) {
                if (
                  "9999" != (t = t.slice(n - 3, n + 1)) &&
                  (i || "4999" != t)
                ) {
                  (+t && (+t.slice(1) || "5" != t.charAt(0))) ||
                    (x(r, a + 1, 1), (e = !r.times(r).eq(this)));
                  break;
                }
                if (!i && (x(u, a + 1, 0), u.times(u).eq(this))) {
                  r = u;
                  break;
                }
                (n += 4), (i = 1);
              }
            return (l = !0), x(r, a, c.rounding, e);
          }),
        (w.tangent = w.tan =
          function () {
            var e,
              t,
              n = this,
              r = n.constructor;
            return n.isFinite()
              ? n.isZero()
                ? new r(n)
                : ((e = r.precision),
                  (t = r.rounding),
                  (r.precision = e + 10),
                  (r.rounding = 1),
                  ((n = n.sin()).s = 1),
                  (n = k(n, new r(1).minus(n.times(n)).sqrt(), e + 10, 0)),
                  (r.precision = e),
                  (r.rounding = t),
                  x(2 == i || 4 == i ? n.neg() : n, e, t, !0))
              : new r(NaN);
          }),
        (w.times = w.mul =
          function (e) {
            var t,
              n,
              r,
              i,
              u,
              o,
              a,
              s,
              c,
              d = this.constructor,
              f = this.d,
              p = (e = new d(e)).d;
            if (((e.s *= this.s), !f || !f[0] || !p || !p[0]))
              return new d(
                !e.s || (f && !f[0] && !p) || (p && !p[0] && !f)
                  ? NaN
                  : !f || !p
                    ? e.s / 0
                    : 0 * e.s,
              );
            for (
              n = v(this.e / 7) + v(e.e / 7),
                (s = f.length) < (c = p.length) &&
                  ((u = f), (f = p), (p = u), (o = s), (s = c), (c = o)),
                u = [],
                r = o = s + c;
              r--;

            )
              u.push(0);
            for (r = c; --r >= 0; ) {
              for (t = 0, i = s + r; i > r; )
                (a = u[i] + p[r] * f[i - r - 1] + t),
                  (u[i--] = a % 1e7 | 0),
                  (t = (a / 1e7) | 0);
              u[i] = (u[i] + t) % 1e7 | 0;
            }
            for (; !u[--o]; ) u.pop();
            return (
              t ? ++n : u.shift(),
              (e.d = u),
              (e.e = O(u, n)),
              l ? x(e, d.precision, d.rounding) : e
            );
          }),
        (w.toBinary = function (e, t) {
          return U(this, 2, e, t);
        }),
        (w.toDecimalPlaces = w.toDP =
          function (e, t) {
            var n = this,
              r = n.constructor;
            return ((n = new r(n)), void 0 === e)
              ? n
              : (A(e, 0, 1e9),
                void 0 === t ? (t = r.rounding) : A(t, 0, 8),
                x(n, e + n.e + 1, t));
          }),
        (w.toExponential = function (e, t) {
          var n,
            r = this,
            i = r.constructor;
          return (
            void 0 === e
              ? (n = z(r, !0))
              : (A(e, 0, 1e9),
                void 0 === t ? (t = i.rounding) : A(t, 0, 8),
                (n = z((r = x(new i(r), e + 1, t)), !0, e + 1))),
            r.isNeg() && !r.isZero() ? "-" + n : n
          );
        }),
        (w.toFixed = function (e, t) {
          var n,
            r,
            i = this.constructor;
          return (
            void 0 === e
              ? (n = z(this))
              : (A(e, 0, 1e9),
                void 0 === t ? (t = i.rounding) : A(t, 0, 8),
                (n = z(
                  (r = x(new i(this), e + this.e + 1, t)),
                  !1,
                  e + r.e + 1,
                ))),
            this.isNeg() && !this.isZero() ? "-" + n : n
          );
        }),
        (w.toFraction = function (e) {
          var t,
            n,
            r,
            i,
            u,
            o,
            a,
            s,
            c,
            f,
            p,
            h,
            v = this.d,
            g = this.constructor;
          if (!v) return new g(this);
          if (
            ((c = n = new g(1)),
            (r = s = new g(0)),
            (o = (u = (t = new g(r)).e = N(v) - this.e - 1) % 7),
            (t.d[0] = m(10, o < 0 ? 7 + o : o)),
            null == e)
          )
            e = u > 0 ? t : c;
          else {
            if (!(a = new g(e)).isInt() || a.lt(c)) throw Error(d + a);
            e = a.gt(t) ? (u > 0 ? t : c) : a;
          }
          for (
            l = !1,
              a = new g(b(v)),
              f = g.precision,
              g.precision = u = 7 * v.length * 2;
            (p = k(a, t, 0, 1, 1)), 1 != (i = n.plus(p.times(r))).cmp(e);

          )
            (n = r),
              (r = i),
              (i = c),
              (c = s.plus(p.times(i))),
              (s = i),
              (i = t),
              (t = a.minus(p.times(i))),
              (a = i);
          return (
            (i = k(e.minus(n), r, 0, 1, 1)),
            (s = s.plus(i.times(c))),
            (n = n.plus(i.times(r))),
            (s.s = c.s = this.s),
            (h =
              1 >
              k(c, r, u, 1)
                .minus(this)
                .abs()
                .cmp(k(s, n, u, 1).minus(this).abs())
                ? [c, r]
                : [s, n]),
            (g.precision = f),
            (l = !0),
            h
          );
        }),
        (w.toHexadecimal = w.toHex =
          function (e, t) {
            return U(this, 16, e, t);
          }),
        (w.toNearest = function (e, t) {
          var n = this,
            r = n.constructor;
          if (((n = new r(n)), null == e)) {
            if (!n.d) return n;
            (e = new r(1)), (t = r.rounding);
          } else {
            if (
              ((e = new r(e)),
              void 0 === t ? (t = r.rounding) : A(t, 0, 8),
              !n.d)
            )
              return e.s ? n : e;
            if (!e.d) return e.s && (e.s = n.s), e;
          }
          return (
            e.d[0]
              ? ((l = !1), (n = k(n, e, 0, t, 1).times(e)), (l = !0), x(n))
              : ((e.s = n.s), (n = e)),
            n
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
              n,
              r,
              i,
              u,
              o,
              a = this,
              s = a.constructor,
              c = +(e = new s(e));
            if (!a.d || !e.d || !a.d[0] || !e.d[0]) return new s(m(+a, c));
            if ((a = new s(a)).eq(1)) return a;
            if (((r = s.precision), (u = s.rounding), e.eq(1)))
              return x(a, r, u);
            if (
              (t = v(e.e / 7)) >= e.d.length - 1 &&
              (n = c < 0 ? -c : c) <= 0x1fffffffffffff
            )
              return (
                (i = j(s, a, n, r)), e.s < 0 ? new s(1).div(i) : x(i, r, u)
              );
            if ((o = a.s) < 0) {
              if (t < e.d.length - 1) return new s(NaN);
              if (
                ((1 & e.d[t]) == 0 && (o = 1),
                0 == a.e && 1 == a.d[0] && 1 == a.d.length)
              )
                return (a.s = o), a;
            }
            return (t =
              0 != (n = m(+a, c)) && isFinite(n)
                ? new s(n + "").e
                : v(c * (Math.log("0." + b(a.d)) / Math.LN10 + a.e + 1))) >
              s.maxE + 1 || t < s.minE - 1
              ? new s(t > 0 ? o / 0 : 0)
              : ((l = !1),
                (s.rounding = a.s = 1),
                (n = Math.min(12, (t + "").length)),
                (i = R(e.times(I(a, r + n)), r)).d &&
                  F((i = x(i, r + 5, 1)).d, r, u) &&
                  ((t = r + 10),
                  +b((i = x(R(e.times(I(a, t + n)), t), t + 5, 1)).d).slice(
                    r + 1,
                    r + 15,
                  ) +
                    1 ==
                    1e14 && (i = x(i, r + 1, 0))),
                (i.s = o),
                (l = !0),
                (s.rounding = u),
                x(i, r, u));
          }),
        (w.toPrecision = function (e, t) {
          var n,
            r = this,
            i = r.constructor;
          return (
            void 0 === e
              ? (n = z(r, r.e <= i.toExpNeg || r.e >= i.toExpPos))
              : (A(e, 1, 1e9),
                void 0 === t ? (t = i.rounding) : A(t, 0, 8),
                (n = z(
                  (r = x(new i(r), e, t)),
                  e <= r.e || r.e <= i.toExpNeg,
                  e,
                ))),
            r.isNeg() && !r.isZero() ? "-" + n : n
          );
        }),
        (w.toSignificantDigits = w.toSD =
          function (e, t) {
            var n = this.constructor;
            return (
              void 0 === e
                ? ((e = n.precision), (t = n.rounding))
                : (A(e, 1, 1e9), void 0 === t ? (t = n.rounding) : A(t, 0, 8)),
              x(new n(this), e, t)
            );
          }),
        (w.toString = function () {
          var e = this.constructor,
            t = z(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
          return this.isNeg() && !this.isZero() ? "-" + t : t;
        }),
        (w.truncated = w.trunc =
          function () {
            return x(new this.constructor(this), this.e + 1, 1);
          }),
        (w.valueOf = w.toJSON =
          function () {
            var e = this.constructor,
              t = z(this, this.e <= e.toExpNeg || this.e >= e.toExpPos);
            return this.isNeg() ? "-" + t : t;
          });
      var k = (function () {
        function e(e, t, n) {
          var r,
            i = 0,
            u = e.length;
          for (e = e.slice(); u--; )
            (r = e[u] * t + i), (e[u] = r % n | 0), (i = (r / n) | 0);
          return i && e.unshift(i), e;
        }
        function t(e, t, n, r) {
          var i, u;
          if (n != r) u = n > r ? 1 : -1;
          else
            for (i = u = 0; i < n; i++)
              if (e[i] != t[i]) {
                u = e[i] > t[i] ? 1 : -1;
                break;
              }
          return u;
        }
        function n(e, t, n, r) {
          for (var i = 0; n--; )
            (e[n] -= i), (i = +(e[n] < t[n])), (e[n] = i * r + e[n] - t[n]);
          for (; !e[0] && e.length > 1; ) e.shift();
        }
        return function (i, u, o, a, s, l) {
          var c,
            d,
            f,
            p,
            h,
            m,
            g,
            D,
            C,
            B,
            E,
            y,
            w,
            b,
            A,
            F,
            _,
            k,
            z,
            O,
            S = i.constructor,
            P = i.s == u.s ? 1 : -1,
            N = i.d,
            T = u.d;
          if (!N || !N[0] || !T || !T[0])
            return new S(
              !i.s || !u.s || (N ? T && N[0] == T[0] : !T)
                ? NaN
                : (N && 0 == N[0]) || !T
                  ? 0 * P
                  : P / 0,
            );
          for (
            l
              ? ((h = 1), (d = i.e - u.e))
              : ((l = 1e7), (h = 7), (d = v(i.e / h) - v(u.e / h))),
              z = T.length,
              _ = N.length,
              B = (C = new S(P)).d = [],
              f = 0;
            T[f] == (N[f] || 0);
            f++
          );
          if (
            (T[f] > (N[f] || 0) && d--,
            null == o
              ? ((b = o = S.precision), (a = S.rounding))
              : (b = s ? o + (i.e - u.e) + 1 : o),
            b < 0)
          )
            B.push(1), (m = !0);
          else {
            if (((b = (b / h + 2) | 0), (f = 0), 1 == z)) {
              for (p = 0, T = T[0], b++; (f < _ || p) && b--; f++)
                (A = p * l + (N[f] || 0)),
                  (B[f] = (A / T) | 0),
                  (p = A % T | 0);
              m = p || f < _;
            } else {
              for (
                (p = (l / (T[0] + 1)) | 0) > 1 &&
                  ((T = e(T, p, l)),
                  (N = e(N, p, l)),
                  (z = T.length),
                  (_ = N.length)),
                  F = z,
                  y = (E = N.slice(0, z)).length;
                y < z;

              )
                E[y++] = 0;
              (O = T.slice()).unshift(0), (k = T[0]), T[1] >= l / 2 && ++k;
              do
                (p = 0),
                  (c = t(T, E, z, y)) < 0
                    ? ((w = E[0]),
                      z != y && (w = w * l + (E[1] || 0)),
                      (p = (w / k) | 0) > 1
                        ? (p >= l && (p = l - 1),
                          (D = (g = e(T, p, l)).length),
                          (y = E.length),
                          1 == (c = t(g, E, D, y)) &&
                            (p--, n(g, z < D ? O : T, D, l)))
                        : (0 == p && (c = p = 1), (g = T.slice())),
                      (D = g.length) < y && g.unshift(0),
                      n(E, g, y, l),
                      -1 == c &&
                        ((y = E.length),
                        (c = t(T, E, z, y)) < 1 &&
                          (p++, n(E, z < y ? O : T, y, l))),
                      (y = E.length))
                    : 0 === c && (p++, (E = [0])),
                  (B[f++] = p),
                  c && E[0] ? (E[y++] = N[F] || 0) : ((E = [N[F]]), (y = 1));
              while ((F++ < _ || void 0 !== E[0]) && b--);
              m = void 0 !== E[0];
            }
            B[0] || B.shift();
          }
          if (1 == h) (C.e = d), (r = m);
          else {
            for (f = 1, p = B[0]; p >= 10; p /= 10) f++;
            (C.e = f + d * h - 1), x(C, s ? o + C.e + 1 : o, a, m);
          }
          return C;
        };
      })();
      function x(e, t, n, r) {
        var i,
          u,
          o,
          a,
          s,
          c,
          d,
          f,
          p,
          h = e.constructor;
        e: if (null != t) {
          if (!(f = e.d)) return e;
          for (i = 1, a = f[0]; a >= 10; a /= 10) i++;
          if ((u = t - i) < 0)
            (u += 7),
              (o = t),
              (s = ((d = f[(p = 0)]) / m(10, i - o - 1)) % 10 | 0);
          else if ((p = Math.ceil((u + 1) / 7)) >= (a = f.length))
            if (r) {
              for (; a++ <= p; ) f.push(0);
              (d = s = 0), (i = 1), (u %= 7), (o = u - 7 + 1);
            } else break e;
          else {
            for (i = 1, d = a = f[p]; a >= 10; a /= 10) i++;
            (u %= 7),
              (s = (o = u - 7 + i) < 0 ? 0 : (d / m(10, i - o - 1)) % 10 | 0);
          }
          if (
            ((r =
              r ||
              t < 0 ||
              void 0 !== f[p + 1] ||
              (o < 0 ? d : d % m(10, i - o - 1))),
            (c =
              n < 4
                ? (s || r) && (0 == n || n == (e.s < 0 ? 3 : 2))
                : s > 5 ||
                  (5 == s &&
                    (4 == n ||
                      r ||
                      (6 == n &&
                        (u > 0 ? (o > 0 ? d / m(10, i - o) : 0) : f[p - 1]) %
                          10 &
                          1) ||
                      n == (e.s < 0 ? 8 : 7)))),
            t < 1 || !f[0])
          )
            return (
              (f.length = 0),
              c
                ? ((t -= e.e + 1),
                  (f[0] = m(10, (7 - (t % 7)) % 7)),
                  (e.e = -t || 0))
                : (f[0] = e.e = 0),
              e
            );
          if (
            (0 == u
              ? ((f.length = p), (a = 1), p--)
              : ((f.length = p + 1),
                (a = m(10, 7 - u)),
                (f[p] = o > 0 ? ((d / m(10, i - o)) % m(10, o) | 0) * a : 0)),
            c)
          )
            for (;;)
              if (0 == p) {
                for (u = 1, o = f[0]; o >= 10; o /= 10) u++;
                for (o = f[0] += a, a = 1; o >= 10; o /= 10) a++;
                u != a && (e.e++, 1e7 == f[0] && (f[0] = 1));
                break;
              } else {
                if (((f[p] += a), 1e7 != f[p])) break;
                (f[p--] = 0), (a = 1);
              }
          for (u = f.length; 0 === f[--u]; ) f.pop();
        }
        return (
          l &&
            (e.e > h.maxE
              ? ((e.d = null), (e.e = NaN))
              : e.e < h.minE && ((e.e = 0), (e.d = [0]))),
          e
        );
      }
      function z(e, t, n) {
        if (!e.isFinite()) return M(e);
        var r,
          i = e.e,
          u = b(e.d),
          o = u.length;
        return (
          t
            ? (n && (r = n - o) > 0
                ? (u = u.charAt(0) + "." + u.slice(1) + T(r))
                : o > 1 && (u = u.charAt(0) + "." + u.slice(1)),
              (u = u + (e.e < 0 ? "e" : "e+") + e.e))
            : i < 0
              ? ((u = "0." + T(-i - 1) + u),
                n && (r = n - o) > 0 && (u += T(r)))
              : i >= o
                ? ((u += T(i + 1 - o)),
                  n && (r = n - i - 1) > 0 && (u = u + "." + T(r)))
                : ((r = i + 1) < o && (u = u.slice(0, r) + "." + u.slice(r)),
                  n &&
                    (r = n - o) > 0 &&
                    (i + 1 === o && (u += "."), (u += T(r)))),
          u
        );
      }
      function O(e, t) {
        var n = e[0];
        for (t *= 7; n >= 10; n /= 10) t++;
        return t;
      }
      function S(e, t, n) {
        if (t > E) throw ((l = !0), n && (e.precision = n), Error(f));
        return x(new e(o), t, 1, !0);
      }
      function P(e, t, n) {
        if (t > y) throw Error(f);
        return x(new e(a), t, n, !0);
      }
      function N(e) {
        var t = e.length - 1,
          n = 7 * t + 1;
        if ((t = e[t])) {
          for (; t % 10 == 0; t /= 10) n--;
          for (t = e[0]; t >= 10; t /= 10) n++;
        }
        return n;
      }
      function T(e) {
        for (var t = ""; e--; ) t += "0";
        return t;
      }
      function j(e, t, n, r) {
        var i,
          u = new e(1),
          o = Math.ceil(r / 7 + 4);
        for (l = !1; ; ) {
          if (
            (n % 2 && V((u = u.times(t)).d, o) && (i = !0),
            0 === (n = v(n / 2)))
          ) {
            (n = u.d.length - 1), i && 0 === u.d[n] && ++u.d[n];
            break;
          }
          V((t = t.times(t)).d, o);
        }
        return (l = !0), u;
      }
      function Z(e) {
        return 1 & e.d[e.d.length - 1];
      }
      function $(e, t, n) {
        for (var r, i, u = new e(t[0]), o = 0; ++o < t.length; ) {
          if (!(i = new e(t[o])).s) {
            u = i;
            break;
          }
          ((r = u.cmp(i)) === n || (0 === r && u.s === n)) && (u = i);
        }
        return u;
      }
      function R(e, t) {
        var n,
          r,
          i,
          u,
          o,
          a,
          s,
          c = 0,
          d = 0,
          f = 0,
          p = e.constructor,
          h = p.rounding,
          v = p.precision;
        if (!e.d || !e.d[0] || e.e > 17)
          return new p(
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
          null == t ? ((l = !1), (s = v)) : (s = t), a = new p(0.03125);
          e.e > -2;

        )
          (e = e.times(a)), (f += 5);
        for (
          s += r = ((Math.log(m(2, f)) / Math.LN10) * 2 + 5) | 0,
            n = u = o = new p(1),
            p.precision = s;
          ;

        ) {
          if (
            ((u = x(u.times(e), s, 1)),
            (n = n.times(++d)),
            b((a = o.plus(k(u, n, s, 1))).d).slice(0, s) === b(o.d).slice(0, s))
          ) {
            for (i = f; i--; ) o = x(o.times(o), s, 1);
            if (null != t) return (p.precision = v), o;
            if (!(c < 3 && F(o.d, s - r, h, c)))
              return x(o, (p.precision = v), h, (l = !0));
            (p.precision = s += 10), (n = u = a = new p(1)), (d = 0), c++;
          }
          o = a;
        }
      }
      function I(e, t) {
        var n,
          r,
          i,
          u,
          o,
          a,
          s,
          c,
          d,
          f,
          p,
          h = 1,
          v = e,
          m = v.d,
          g = v.constructor,
          D = g.rounding,
          C = g.precision;
        if (v.s < 0 || !m || !m[0] || (!v.e && 1 == m[0] && 1 == m.length))
          return new g(m && !m[0] ? -1 / 0 : 1 != v.s ? NaN : m ? 0 : v);
        if (
          (null == t ? ((l = !1), (d = C)) : (d = t),
          (g.precision = d += 10),
          (r = (n = b(m)).charAt(0)),
          !(15e14 > Math.abs((u = v.e))))
        )
          return (
            (c = S(g, d + 2, C).times(u + "")),
            (v = I(new g(r + "." + n.slice(1)), d - 10).plus(c)),
            (g.precision = C),
            null == t ? x(v, C, D, (l = !0)) : v
          );
        for (; (r < 7 && 1 != r) || (1 == r && n.charAt(1) > 3); )
          (r = (n = b((v = v.times(e)).d)).charAt(0)), h++;
        for (
          u = v.e,
            r > 1
              ? ((v = new g("0." + n)), u++)
              : (v = new g(r + "." + n.slice(1))),
            f = v,
            s = o = v = k(v.minus(1), v.plus(1), d, 1),
            p = x(v.times(v), d, 1),
            i = 3;
          ;

        ) {
          if (
            ((o = x(o.times(p), d, 1)),
            b((c = s.plus(k(o, new g(i), d, 1))).d).slice(0, d) ===
              b(s.d).slice(0, d))
          ) {
            if (
              ((s = s.times(2)),
              0 !== u && (s = s.plus(S(g, d + 2, C).times(u + ""))),
              (s = k(s, new g(h), d, 1)),
              null != t)
            )
              return (g.precision = C), s;
            if (!F(s.d, d - 10, D, a))
              return x(s, (g.precision = C), D, (l = !0));
            (g.precision = d += 10),
              (c = o = v = k(f.minus(1), f.plus(1), d, 1)),
              (p = x(v.times(v), d, 1)),
              (i = a = 1);
          }
          (s = c), (i += 2);
        }
      }
      function M(e) {
        return String((e.s * e.s) / 0);
      }
      function L(e, t) {
        var n, r, i;
        for (
          (n = t.indexOf(".")) > -1 && (t = t.replace(".", "")),
            (r = t.search(/e/i)) > 0
              ? (n < 0 && (n = r),
                (n += +t.slice(r + 1)),
                (t = t.substring(0, r)))
              : n < 0 && (n = t.length),
            r = 0;
          48 === t.charCodeAt(r);
          r++
        );
        for (i = t.length; 48 === t.charCodeAt(i - 1); --i);
        if ((t = t.slice(r, i))) {
          if (
            ((i -= r),
            (e.e = n = n - r - 1),
            (e.d = []),
            (r = (n + 1) % 7),
            n < 0 && (r += 7),
            r < i)
          ) {
            for (r && e.d.push(+t.slice(0, r)), i -= 7; r < i; )
              e.d.push(+t.slice(r, (r += 7)));
            r = 7 - (t = t.slice(r)).length;
          } else r -= i;
          for (; r--; ) t += "0";
          e.d.push(+t),
            l &&
              (e.e > e.constructor.maxE
                ? ((e.d = null), (e.e = NaN))
                : e.e < e.constructor.minE && ((e.e = 0), (e.d = [0])));
        } else (e.e = 0), (e.d = [0]);
        return e;
      }
      function K(e, t, n, r, i) {
        var u,
          o,
          a,
          s,
          c = e.precision,
          d = Math.ceil(c / 7);
        for (l = !1, s = n.times(n), a = new e(r); ; ) {
          if (
            ((o = k(a.times(s), new e(t++ * t++), c, 1)),
            (a = i ? r.plus(o) : r.minus(o)),
            (r = k(o.times(s), new e(t++ * t++), c, 1)),
            void 0 !== (o = a.plus(r)).d[d])
          ) {
            for (u = d; o.d[u] === a.d[u] && u--; );
            if (-1 == u) break;
          }
          (u = a), (a = r), (r = o), (o = u);
        }
        return (l = !0), (o.d.length = d + 1), o;
      }
      function q(e, t) {
        for (var n = e; --t; ) n *= e;
        return n;
      }
      function W(e, t) {
        var n,
          r = t.s < 0,
          u = P(e, e.precision, 1),
          o = u.times(0.5);
        if ((t = t.abs()).lte(o)) return (i = r ? 4 : 1), t;
        if ((n = t.divToInt(u)).isZero()) i = r ? 3 : 2;
        else {
          if ((t = t.minus(n.times(u))).lte(o))
            return (i = Z(n) ? (r ? 2 : 3) : r ? 4 : 1), t;
          i = Z(n) ? (r ? 1 : 4) : r ? 3 : 2;
        }
        return t.minus(u).abs();
      }
      function U(e, t, n, i) {
        var o,
          a,
          s,
          l,
          c,
          d,
          f,
          p,
          h,
          v = e.constructor,
          m = void 0 !== n;
        if (
          (m
            ? (A(n, 1, 1e9), void 0 === i ? (i = v.rounding) : A(i, 0, 8))
            : ((n = v.precision), (i = v.rounding)),
          e.isFinite())
        ) {
          for (
            s = (f = z(e)).indexOf("."),
              m
                ? ((o = 2),
                  16 == t ? (n = 4 * n - 3) : 8 == t && (n = 3 * n - 2))
                : (o = t),
              s >= 0 &&
                ((f = f.replace(".", "")),
                ((h = new v(1)).e = f.length - s),
                (h.d = _(z(h), 10, o)),
                (h.e = h.d.length)),
              a = c = (p = _(f, 10, o)).length;
            0 == p[--c];

          )
            p.pop();
          if (p[0]) {
            if (
              (s < 0
                ? a--
                : (((e = new v(e)).d = p),
                  (e.e = a),
                  (p = (e = k(e, h, n, i, 0, o)).d),
                  (a = e.e),
                  (d = r)),
              (s = p[n]),
              (l = o / 2),
              (d = d || void 0 !== p[n + 1]),
              (d =
                i < 4
                  ? (void 0 !== s || d) && (0 === i || i === (e.s < 0 ? 3 : 2))
                  : s > l ||
                    (s === l &&
                      (4 === i ||
                        d ||
                        (6 === i && 1 & p[n - 1]) ||
                        i === (e.s < 0 ? 8 : 7)))),
              (p.length = n),
              d)
            )
              for (; ++p[--n] > o - 1; ) (p[n] = 0), n || (++a, p.unshift(1));
            for (c = p.length; !p[c - 1]; --c);
            for (s = 0, f = ""; s < c; s++) f += u.charAt(p[s]);
            if (m) {
              if (c > 1)
                if (16 == t || 8 == t) {
                  for (s = 16 == t ? 4 : 3, --c; c % s; c++) f += "0";
                  for (c = (p = _(f, o, t)).length; !p[c - 1]; --c);
                  for (s = 1, f = "1."; s < c; s++) f += u.charAt(p[s]);
                } else f = f.charAt(0) + "." + f.slice(1);
              f = f + (a < 0 ? "p" : "p+") + a;
            } else if (a < 0) {
              for (; ++a; ) f = "0" + f;
              f = "0." + f;
            } else if (++a > c) for (a -= c; a--; ) f += "0";
            else a < c && (f = f.slice(0, a) + "." + f.slice(a));
          } else f = m ? "0p+0" : "0";
          f = (16 == t ? "0x" : 2 == t ? "0b" : 8 == t ? "0o" : "") + f;
        } else f = M(e);
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
      function en(e, t) {
        (e = new this(e)), (t = new this(t));
        var n,
          r = this.precision,
          i = this.rounding,
          u = r + 4;
        return (
          e.s && t.s
            ? e.d || t.d
              ? !t.d || e.isZero()
                ? ((n = t.s < 0 ? P(this, r, i) : new this(0)).s = e.s)
                : !e.d || t.isZero()
                  ? ((n = P(this, u, 1).times(0.5)).s = e.s)
                  : t.s < 0
                    ? ((this.precision = u),
                      (this.rounding = 1),
                      (n = this.atan(k(e, t, u, 1))),
                      (t = P(this, u, 1)),
                      (this.precision = r),
                      (this.rounding = i),
                      (n = e.s < 0 ? n.minus(t) : n.plus(t)))
                    : (n = this.atan(k(e, t, u, 1)))
              : ((n = P(this, u, 1).times(t.s > 0 ? 0.25 : 0.75)).s = e.s)
            : (n = new this(NaN)),
          n
        );
      }
      function er(e) {
        return new this(e).cbrt();
      }
      function ei(e) {
        return x((e = new this(e)), e.e + 1, 2);
      }
      function eu(e, t, n) {
        return new this(e).clamp(t, n);
      }
      function eo(e) {
        if (!e || "object" != typeof e) throw Error(c + "Object expected");
        var t,
          n,
          r,
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
          if (((n = u[t]), i && (this[n] = s[n]), void 0 !== (r = e[n])))
            if (v(r) === r && r >= u[t + 1] && r <= u[t + 2]) this[n] = r;
            else throw Error(d + n + ": " + r);
        if (((n = "crypto"), i && (this[n] = s[n]), void 0 !== (r = e[n])))
          if (!0 === r || !1 === r || 0 === r || 1 === r)
            if (r)
              if (
                "u" > typeof crypto &&
                crypto &&
                (crypto.getRandomValues || crypto.randomBytes)
              )
                this[n] = !0;
              else throw Error(p);
            else this[n] = !1;
          else throw Error(d + n + ": " + r);
        return this;
      }
      function ea(e) {
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
          n = new this(0);
        for (e = 0, l = !1; e < arguments.length; )
          if (((t = new this(arguments[e++])), t.d))
            n.d && (n = n.plus(t.times(t)));
          else {
            if (t.s) return (l = !0), new this(1 / 0);
            n = t;
          }
        return (l = !0), n.sqrt();
      }
      function ep(e) {
        return e instanceof eN || (e && e.toStringTag === h) || !1;
      }
      function eh(e) {
        return new this(e).ln();
      }
      function ev(e, t) {
        return new this(e).log(t);
      }
      function em(e) {
        return new this(e).log(2);
      }
      function eg(e) {
        return new this(e).log(10);
      }
      function eD() {
        return $(this, arguments, -1);
      }
      function eC() {
        return $(this, arguments, 1);
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
          n,
          r,
          i,
          u = 0,
          o = new this(1),
          a = [];
        if (
          (void 0 === e ? (e = this.precision) : A(e, 1, 1e9),
          (r = Math.ceil(e / 7)),
          this.crypto)
        )
          if (crypto.getRandomValues)
            for (t = crypto.getRandomValues(new Uint32Array(r)); u < r; )
              (i = t[u]) >= 429e7
                ? (t[u] = crypto.getRandomValues(new Uint32Array(1))[0])
                : (a[u++] = i % 1e7);
          else if (crypto.randomBytes) {
            for (t = crypto.randomBytes((r *= 4)); u < r; )
              (i =
                t[u] +
                (t[u + 1] << 8) +
                (t[u + 2] << 16) +
                ((127 & t[u + 3]) << 24)) >= 214e7
                ? crypto.randomBytes(4).copy(t, u)
                : (a.push(i % 1e7), (u += 4));
            u = r / 4;
          } else throw Error(p);
        else for (; u < r; ) a[u++] = (1e7 * Math.random()) | 0;
        for (
          r = a[--u],
            e %= 7,
            r && e && ((i = m(10, 7 - e)), (a[u] = ((r / i) | 0) * i));
          0 === a[u];
          u--
        )
          a.pop();
        if (u < 0) (n = 0), (a = [0]);
        else {
          for (n = -1; 0 === a[0]; n -= 7) a.shift();
          for (r = 1, i = a[0]; i >= 10; i /= 10) r++;
          r < 7 && (n -= 7 - r);
        }
        return (o.e = n), (o.d = a), o;
      }
      function eb(e) {
        return x((e = new this(e)), e.e + 1, this.rounding);
      }
      function eA(e) {
        return (e = new this(e)).d ? (e.d[0] ? e.s : 0 * e.s) : e.s || NaN;
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
      function ez() {
        var e = 0,
          t = arguments,
          n = new this(t[0]);
        for (l = !1; n.s && ++e < t.length; ) n = n.plus(t[e]);
        return (l = !0), x(n, this.precision, this.rounding);
      }
      function eO(e) {
        return new this(e).tan();
      }
      function eS(e) {
        return new this(e).tanh();
      }
      function eP(e) {
        return x((e = new this(e)), e.e + 1, 1);
      }
      (w[Symbol.for("nodejs.util.inspect.custom")] = w.toString),
        (w[Symbol.toStringTag] = "Decimal");
      var eN = (w.constructor = (function e(t) {
        var n, r, i;
        function u(e) {
          var t, n, r;
          if (!(this instanceof u)) return new u(e);
          if (((this.constructor = u), ep(e))) {
            (this.s = e.s),
              l
                ? !e.d || e.e > u.maxE
                  ? ((this.e = NaN), (this.d = null))
                  : e.e < u.minE
                    ? ((this.e = 0), (this.d = [0]))
                    : ((this.e = e.e), (this.d = e.d.slice()))
                : ((this.e = e.e), (this.d = e.d ? e.d.slice() : e.d));
            return;
          }
          if ("number" == (r = typeof e)) {
            if (0 === e) {
              (this.s = 1 / e < 0 ? -1 : 1), (this.e = 0), (this.d = [0]);
              return;
            }
            if (
              (e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1),
              e === ~~e && e < 1e7)
            ) {
              for (t = 0, n = e; n >= 10; n /= 10) t++;
              l
                ? t > u.maxE
                  ? ((this.e = NaN), (this.d = null))
                  : t < u.minE
                    ? ((this.e = 0), (this.d = [0]))
                    : ((this.e = t), (this.d = [e]))
                : ((this.e = t), (this.d = [e]));
              return;
            }
            if (0 * e != 0) {
              e || (this.s = NaN), (this.e = NaN), (this.d = null);
              return;
            }
            return L(this, e.toString());
          }
          if ("string" === r)
            return (
              45 === (n = e.charCodeAt(0))
                ? ((e = e.slice(1)), (this.s = -1))
                : (43 === n && (e = e.slice(1)), (this.s = 1)),
              B.test(e)
                ? L(this, e)
                : (function (e, t) {
                    var n, r, i, u, o, a, s, c, f;
                    if (t.indexOf("_") > -1) {
                      if (((t = t.replace(/(\d)_(?=\d)/g, "$1")), B.test(t)))
                        return L(e, t);
                    } else if ("Infinity" === t || "NaN" === t)
                      return +t || (e.s = NaN), (e.e = NaN), (e.d = null), e;
                    if (D.test(t)) (n = 16), (t = t.toLowerCase());
                    else if (g.test(t)) n = 2;
                    else if (C.test(t)) n = 8;
                    else throw Error(d + t);
                    for (
                      (u = t.search(/p/i)) > 0
                        ? ((s = +t.slice(u + 1)), (t = t.substring(2, u)))
                        : (t = t.slice(2)),
                        o = (u = t.indexOf(".")) >= 0,
                        r = e.constructor,
                        o &&
                          ((u = (a = (t = t.replace(".", "")).length) - u),
                          (i = j(r, new r(n), u, 2 * u))),
                        u = f = (c = _(t, n, 1e7)).length - 1;
                      0 === c[u];
                      --u
                    )
                      c.pop();
                    return u < 0
                      ? new r(0 * e.s)
                      : ((e.e = O(c, f)),
                        (e.d = c),
                        (l = !1),
                        o && (e = k(e, i, 4 * a)),
                        s &&
                          (e = e.times(
                            54 > Math.abs(s) ? m(2, s) : eN.pow(2, s),
                          )),
                        (l = !0),
                        e);
                  })(this, e)
            );
          if ("bigint" === r)
            return (
              e < 0 ? ((e = -e), (this.s = -1)) : (this.s = 1),
              L(this, e.toString())
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
          (u.config = u.set = eo),
          (u.clone = e),
          (u.isDecimal = ep),
          (u.abs = J),
          (u.acos = Q),
          (u.acosh = H),
          (u.add = Y),
          (u.asin = X),
          (u.asinh = G),
          (u.atan = ee),
          (u.atanh = et),
          (u.atan2 = en),
          (u.cbrt = er),
          (u.ceil = ei),
          (u.clamp = eu),
          (u.cos = ea),
          (u.cosh = es),
          (u.div = el),
          (u.exp = ec),
          (u.floor = ed),
          (u.hypot = ef),
          (u.ln = eh),
          (u.log = ev),
          (u.log10 = eg),
          (u.log2 = em),
          (u.max = eD),
          (u.min = eC),
          (u.mod = eB),
          (u.mul = eE),
          (u.pow = ey),
          (u.random = ew),
          (u.round = eb),
          (u.sign = eA),
          (u.sin = eF),
          (u.sinh = e_),
          (u.sqrt = ek),
          (u.sub = ex),
          (u.sum = ez),
          (u.tan = eO),
          (u.tanh = eS),
          (u.trunc = eP),
          void 0 === t && (t = {}),
          t && !0 !== t.defaults)
        )
          for (
            n = 0,
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
            n < i.length;

          )
            t.hasOwnProperty((r = i[n++])) || (t[r] = this[r]);
        return u.config(t), u;
      })(s));
      (o = new eN(o)), (a = new eN(a));
    },
    832696(e, t, n) {
      let r, i, u;
      n.d(t, { Ikc: () => uR, YjP: () => ig, jgl: () => u0, k5n: () => u6 });
      var o,
        a,
        s = {};
      n.r(s),
        n.d(s, {
          base64: () => ez,
          base64url: () => eO,
          bigint: () => eM,
          boolean: () => eq,
          browserEmail: () => ew,
          cidrv4: () => ek,
          cidrv6: () => ex,
          cuid: () => eu,
          cuid2: () => eo,
          date: () => ej,
          datetime: () => eR,
          domain: () => eP,
          duration: () => ed,
          e164: () => eN,
          email: () => eD,
          emoji: () => eb,
          extendedDuration: () => ef,
          guid: () => ep,
          hex: () => eQ,
          hostname: () => eS,
          html5Email: () => eC,
          idnEmail: () => ey,
          integer: () => eL,
          ipv4: () => eA,
          ipv6: () => eF,
          ksuid: () => el,
          lowercase: () => eV,
          mac: () => e_,
          md5_base64: () => eG,
          md5_base64url: () => e0,
          md5_hex: () => eX,
          nanoid: () => ec,
          null: () => eW,
          number: () => eK,
          rfc5322Email: () => eB,
          sha1_base64: () => e2,
          sha1_base64url: () => e3,
          sha1_hex: () => e1,
          sha256_base64: () => e9,
          sha256_base64url: () => e7,
          sha256_hex: () => e4,
          sha384_base64: () => e8,
          sha384_base64url: () => e5,
          sha384_hex: () => e6,
          sha512_base64: () => tt,
          sha512_base64url: () => tn,
          sha512_hex: () => te,
          string: () => eI,
          time: () => e$,
          ulid: () => ea,
          undefined: () => eU,
          unicodeEmail: () => eE,
          uppercase: () => eJ,
          uuid: () => eh,
          uuid4: () => ev,
          uuid6: () => em,
          uuid7: () => eg,
          xid: () => es,
        });
      var l = {};
      n.r(l),
        n.d(l, {
          endsWith: () => rj,
          gt: () => rD,
          gte: () => rC,
          includes: () => rN,
          length: () => rz,
          lowercase: () => rS,
          lt: () => rm,
          lte: () => rg,
          maxLength: () => rk,
          maxSize: () => rA,
          mime: () => r$,
          minLength: () => rx,
          minSize: () => rF,
          multipleOf: () => rb,
          negative: () => rE,
          nonnegative: () => rw,
          nonpositive: () => ry,
          normalize: () => rI,
          overwrite: () => rR,
          positive: () => rB,
          property: () => rZ,
          regex: () => rO,
          size: () => r_,
          slugify: () => rq,
          startsWith: () => rT,
          toLowerCase: () => rL,
          toUpperCase: () => rK,
          trim: () => rM,
          uppercase: () => rP,
        });
      var c = {};
      n.r(c),
        n.d(c, {
          ZodISODate: () => r2,
          ZodISODateTime: () => r0,
          ZodISODuration: () => r7,
          ZodISOTime: () => r4,
          date: () => r3,
          datetime: () => r1,
          duration: () => r6,
          time: () => r9,
        });
      var d = {};
      function f(e, t, n) {
        function r(n, r) {
          if (
            (n._zod ||
              Object.defineProperty(n, "_zod", {
                value: { def: r, constr: o, traits: new Set() },
                enumerable: !1,
              }),
            n._zod.traits.has(e))
          )
            return;
          n._zod.traits.add(e), t(n, r);
          let i = o.prototype,
            u = Object.keys(i);
          for (let e = 0; e < u.length; e++) {
            let t = u[e];
            t in n || (n[t] = i[t].bind(n));
          }
        }
        let i = n?.Parent ?? Object;
        class u extends i {}
        function o(e) {
          var t;
          let i = n?.Parent ? new u() : this;
          for (let n of (r(i, e),
          (t = i._zod).deferred ?? (t.deferred = []),
          i._zod.deferred))
            n();
          return i;
        }
        return (
          Object.defineProperty(u, "name", { value: e }),
          Object.defineProperty(o, "init", { value: r }),
          Object.defineProperty(o, Symbol.hasInstance, {
            value: (t) =>
              (!!n?.Parent && t instanceof n.Parent) || t?._zod?.traits?.has(e),
          }),
          Object.defineProperty(o, "name", { value: e }),
          o
        );
      }
      n.r(d),
        n.d(d, {
          ZodAny: () => uA,
          ZodArray: () => uT,
          ZodBase64: () => i1,
          ZodBase64URL: () => i3,
          ZodBigInt: () => uh,
          ZodBigIntFormat: () => um,
          ZodBoolean: () => uf,
          ZodCIDRv4: () => iY,
          ZodCIDRv6: () => iG,
          ZodCUID: () => iT,
          ZodCUID2: () => iZ,
          ZodCatch: () => oB,
          ZodCodec: () => oF,
          ZodCustom: () => o$,
          ZodCustomStringFormat: () => i5,
          ZodDate: () => uP,
          ZodDefault: () => of,
          ZodDiscriminatedUnion: () => uU,
          ZodE164: () => i9,
          ZodEmail: () => iC,
          ZodEmoji: () => iO,
          ZodEnum: () => u7,
          ZodExactOptional: () => oa,
          ZodFile: () => ot,
          ZodFunction: () => oj,
          ZodGUID: () => iE,
          ZodIPv4: () => iW,
          ZodIPv6: () => iQ,
          ZodIntersection: () => uJ,
          ZodJWT: () => i6,
          ZodKSUID: () => iK,
          ZodLazy: () => oS,
          ZodLiteral: () => u5,
          ZodMAC: () => iV,
          ZodMap: () => u2,
          ZodNaN: () => oy,
          ZodNanoID: () => iP,
          ZodNever: () => ux,
          ZodNonOptional: () => om,
          ZodNull: () => uw,
          ZodNullable: () => ol,
          ZodNumber: () => ui,
          ZodNumberFormat: () => uo,
          ZodObject: () => u$,
          ZodOptional: () => ou,
          ZodPipe: () => ob,
          ZodPrefault: () => oh,
          ZodPromise: () => oN,
          ZodReadonly: () => ok,
          ZodRecord: () => uX,
          ZodSet: () => u4,
          ZodString: () => im,
          ZodStringFormat: () => iD,
          ZodSuccess: () => oD,
          ZodSymbol: () => uC,
          ZodTemplateLiteral: () => oz,
          ZodTransform: () => or,
          ZodTuple: () => uH,
          ZodType: () => ih,
          ZodULID: () => iR,
          ZodURL: () => ik,
          ZodUUID: () => iw,
          ZodUndefined: () => uE,
          ZodUnion: () => uL,
          ZodUnknown: () => u_,
          ZodVoid: () => uO,
          ZodXID: () => iM,
          ZodXor: () => uq,
          _ZodString: () => iv,
          _default: () => op,
          _function: () => oZ,
          any: () => uF,
          array: () => uj,
          base64: () => i2,
          base64url: () => i4,
          bigint: () => uv,
          boolean: () => up,
          catch: () => oE,
          check: () => oR,
          cidrv4: () => iX,
          cidrv6: () => i0,
          codec: () => o_,
          cuid: () => ij,
          cuid2: () => i$,
          custom: () => oI,
          date: () => uN,
          describe: () => oK,
          discriminatedUnion: () => uV,
          e164: () => i7,
          email: () => iB,
          emoji: () => iS,
          enum: () => u6,
          exactOptional: () => os,
          file: () => on,
          float32: () => us,
          float64: () => ul,
          function: () => oZ,
          guid: () => iy,
          hash: () => ur,
          hex: () => un,
          hostname: () => ut,
          httpUrl: () => iz,
          instanceof: () => oW,
          int: () => ua,
          int32: () => uc,
          int64: () => ug,
          intersection: () => uQ,
          ipv4: () => iU,
          ipv6: () => iH,
          json: () => oV,
          jwt: () => i8,
          keyof: () => uZ,
          ksuid: () => iq,
          lazy: () => oP,
          literal: () => oe,
          looseObject: () => uM,
          looseRecord: () => u1,
          mac: () => iJ,
          map: () => u3,
          meta: () => oq,
          nan: () => ow,
          nanoid: () => iN,
          nativeEnum: () => u8,
          never: () => uz,
          nonoptional: () => og,
          null: () => ub,
          nullable: () => oc,
          nullish: () => od,
          number: () => uu,
          object: () => uR,
          optional: () => oo,
          partialRecord: () => u0,
          pipe: () => oA,
          prefault: () => ov,
          preprocess: () => oJ,
          promise: () => oT,
          readonly: () => ox,
          record: () => uG,
          refine: () => oM,
          set: () => u9,
          strictObject: () => uI,
          string: () => ig,
          stringFormat: () => ue,
          stringbool: () => oU,
          success: () => oC,
          superRefine: () => oL,
          symbol: () => uB,
          templateLiteral: () => oO,
          transform: () => oi,
          tuple: () => uY,
          uint32: () => ud,
          uint64: () => uD,
          ulid: () => iI,
          undefined: () => uy,
          union: () => uK,
          unknown: () => uk,
          url: () => ix,
          uuid: () => ib,
          uuidv4: () => iA,
          uuidv6: () => iF,
          uuidv7: () => i_,
          void: () => uS,
          xid: () => iL,
          xor: () => uW,
        }),
        Object.freeze({ status: "aborted" }),
        Symbol("zod_brand");
      class p extends Error {
        constructor() {
          super(
            "Encountered Promise during synchronous parse. Use .parseAsync() instead.",
          );
        }
      }
      class h extends Error {
        constructor(e) {
          super(`Encountered unidirectional transform during encode: ${e}`),
            (this.name = "ZodEncodeError");
        }
      }
      let v = {};
      function m(e) {
        return e && Object.assign(v, e), v;
      }
      function g(e) {
        let t = Object.values(e).filter((e) => "number" == typeof e);
        return Object.entries(e)
          .filter(([e, n]) => -1 === t.indexOf(+e))
          .map(([e, t]) => t);
      }
      function D(e, t = "|") {
        return e.map((e) => $(e)).join(t);
      }
      function C(e, t) {
        return "bigint" == typeof t ? t.toString() : t;
      }
      function B(e) {
        return {
          get value() {
            {
              let t = e();
              return Object.defineProperty(this, "value", { value: t }), t;
            }
          },
        };
      }
      function E(e) {
        return null == e;
      }
      function y(e) {
        let t = +!!e.startsWith("^"),
          n = e.endsWith("$") ? e.length - 1 : e.length;
        return e.slice(t, n);
      }
      let w = Symbol("evaluating");
      function b(e, t, n) {
        let r;
        Object.defineProperty(e, t, {
          get() {
            if (r !== w) return void 0 === r && ((r = w), (r = n())), r;
          },
          set(n) {
            Object.defineProperty(e, t, { value: n });
          },
          configurable: !0,
        });
      }
      function A(e, t, n) {
        Object.defineProperty(e, t, {
          value: n,
          writable: !0,
          enumerable: !0,
          configurable: !0,
        });
      }
      function F(...e) {
        let t = {};
        for (let n of e) Object.assign(t, Object.getOwnPropertyDescriptors(n));
        return Object.defineProperties({}, t);
      }
      function _(e) {
        return JSON.stringify(e);
      }
      let k =
        "captureStackTrace" in Error ? Error.captureStackTrace : (...e) => {};
      function x(e) {
        return "object" == typeof e && null !== e && !Array.isArray(e);
      }
      let z = B(() => {
        if (
          "u" > typeof navigator &&
          navigator?.userAgent?.includes("Cloudflare")
        )
          return !1;
        try {
          return Function(""), !0;
        } catch (e) {
          return !1;
        }
      });
      function O(e) {
        if (!1 === x(e)) return !1;
        let t = e.constructor;
        if (void 0 === t || "function" != typeof t) return !0;
        let n = t.prototype;
        return (
          !1 !== x(n) &&
          !1 !== Object.prototype.hasOwnProperty.call(n, "isPrototypeOf")
        );
      }
      function S(e) {
        return O(e) ? { ...e } : Array.isArray(e) ? [...e] : e;
      }
      let P = new Set(["string", "number", "symbol"]),
        N = new Set([
          "string",
          "number",
          "bigint",
          "boolean",
          "symbol",
          "undefined",
        ]);
      function T(e) {
        return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      function j(e, t, n) {
        let r = new e._zod.constr(t ?? e._zod.def);
        return (!t || n?.parent) && (r._zod.parent = e), r;
      }
      function Z(e) {
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
      function $(e) {
        return "bigint" == typeof e
          ? e.toString() + "n"
          : "string" == typeof e
            ? `"${e}"`
            : `${e}`;
      }
      let R = {
          safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
          int32: [-0x80000000, 0x7fffffff],
          uint32: [0, 0xffffffff],
          float32: [-34028234663852886e22, 34028234663852886e22],
          float64: [-Number.MAX_VALUE, Number.MAX_VALUE],
        },
        I = {
          int64: [
            BigInt("-9223372036854775808"),
            BigInt("9223372036854775807"),
          ],
          uint64: [BigInt(0), BigInt("18446744073709551615")],
        };
      function M(e, t = 0) {
        if (!0 === e.aborted) return !0;
        for (let n = t; n < e.issues.length; n++)
          if (e.issues[n]?.continue !== !0) return !0;
        return !1;
      }
      function L(e, t) {
        return t.map((t) => (t.path ?? (t.path = []), t.path.unshift(e), t));
      }
      function K(e) {
        return "string" == typeof e ? e : e?.message;
      }
      function q(e, t, n) {
        let r = { ...e, path: e.path ?? [] };
        return (
          e.message ||
            (r.message =
              K(e.inst?._zod.def?.error?.(e)) ??
              K(t?.error?.(e)) ??
              K(n.customError?.(e)) ??
              K(n.localeError?.(e)) ??
              "Invalid input"),
          delete r.inst,
          delete r.continue,
          t?.reportInput || delete r.input,
          r
        );
      }
      function W(e) {
        return e instanceof Set
          ? "set"
          : e instanceof Map
            ? "map"
            : e instanceof File
              ? "file"
              : "unknown";
      }
      function U(e) {
        return Array.isArray(e)
          ? "array"
          : "string" == typeof e
            ? "string"
            : "unknown";
      }
      function V(...e) {
        let [t, n, r] = e;
        return "string" == typeof t
          ? { message: t, code: "custom", input: n, inst: r }
          : { ...t };
      }
      let J = (e, t) => {
          (e.name = "$ZodError"),
            Object.defineProperty(e, "_zod", { value: e._zod, enumerable: !1 }),
            Object.defineProperty(e, "issues", { value: t, enumerable: !1 }),
            (e.message = JSON.stringify(t, C, 2)),
            Object.defineProperty(e, "toString", {
              value: () => e.message,
              enumerable: !1,
            });
        },
        Q = f("$ZodError", J),
        H = f("$ZodError", J, { Parent: Error }),
        Y = (e) => (t, n, r, i) => {
          let u = r ? Object.assign(r, { async: !1 }) : { async: !1 },
            o = t._zod.run({ value: n, issues: [] }, u);
          if (o instanceof Promise) throw new p();
          if (o.issues.length) {
            let t = new (i?.Err ?? e)(o.issues.map((e) => q(e, u, m())));
            throw (k(t, i?.callee), t);
          }
          return o.value;
        },
        X = Y(H),
        G = (e) => async (t, n, r, i) => {
          let u = r ? Object.assign(r, { async: !0 }) : { async: !0 },
            o = t._zod.run({ value: n, issues: [] }, u);
          if ((o instanceof Promise && (o = await o), o.issues.length)) {
            let t = new (i?.Err ?? e)(o.issues.map((e) => q(e, u, m())));
            throw (k(t, i?.callee), t);
          }
          return o.value;
        },
        ee = G(H),
        et = (e) => (t, n, r) => {
          let i = r ? { ...r, async: !1 } : { async: !1 },
            u = t._zod.run({ value: n, issues: [] }, i);
          if (u instanceof Promise) throw new p();
          return u.issues.length
            ? {
                success: !1,
                error: new (e ?? Q)(u.issues.map((e) => q(e, i, m()))),
              }
            : { success: !0, data: u.value };
        },
        en = et(H),
        er = (e) => async (t, n, r) => {
          let i = r ? Object.assign(r, { async: !0 }) : { async: !0 },
            u = t._zod.run({ value: n, issues: [] }, i);
          return (
            u instanceof Promise && (u = await u),
            u.issues.length
              ? { success: !1, error: new e(u.issues.map((e) => q(e, i, m()))) }
              : { success: !0, data: u.value }
          );
        },
        ei = er(H),
        eu = /^[cC][^\s-]{8,}$/,
        eo = /^[0-9a-z]+$/,
        ea = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/,
        es = /^[0-9a-vA-V]{20}$/,
        el = /^[A-Za-z0-9]{27}$/,
        ec = /^[a-zA-Z0-9_-]{21}$/,
        ed =
          /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/,
        ef =
          /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
        ep =
          /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/,
        eh = (e) =>
          e
            ? RegExp(
                `^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${e}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`,
              )
            : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/,
        ev = eh(4),
        em = eh(6),
        eg = eh(7),
        eD =
          /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/,
        eC =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
        eB =
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        eE = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u,
        ey = eE,
        ew =
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      function eb() {
        return RegExp(
          "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$",
          "u",
        );
      }
      let eA =
          /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
        eF =
          /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/,
        e_ = (e) => {
          let t = T(e ?? ":");
          return RegExp(
            `^(?:[0-9A-F]{2}${t}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${t}){5}[0-9a-f]{2}$`,
          );
        },
        ek =
          /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/,
        ex =
          /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
        ez =
          /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/,
        eO = /^[A-Za-z0-9_-]*$/,
        eS =
          /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/,
        eP = /^([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}$/,
        eN = /^\+[1-9]\d{6,14}$/,
        eT =
          "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))",
        ej = RegExp(`^${eT}$`);
      function eZ(e) {
        let t = "(?:[01]\\d|2[0-3]):[0-5]\\d";
        return "number" == typeof e.precision
          ? -1 === e.precision
            ? `${t}`
            : 0 === e.precision
              ? `${t}:[0-5]\\d`
              : `${t}:[0-5]\\d\\.\\d{${e.precision}}`
          : `${t}(?::[0-5]\\d(?:\\.\\d+)?)?`;
      }
      function e$(e) {
        return RegExp(`^${eZ(e)}$`);
      }
      function eR(e) {
        let t = eZ({ precision: e.precision }),
          n = ["Z"];
        e.local && n.push(""),
          e.offset && n.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
        let r = `${t}(?:${n.join("|")})`;
        return RegExp(`^${eT}T(?:${r})$`);
      }
      let eI = (e) => {
          let t = e
            ? `[\\s\\S]{${e?.minimum ?? 0},${e?.maximum ?? ""}}`
            : "[\\s\\S]*";
          return RegExp(`^${t}$`);
        },
        eM = /^-?\d+n?$/,
        eL = /^-?\d+$/,
        eK = /^-?\d+(?:\.\d+)?$/,
        eq = /^(?:true|false)$/i,
        eW = /^null$/i,
        eU = /^undefined$/i,
        eV = /^[^A-Z]*$/,
        eJ = /^[^a-z]*$/,
        eQ = /^[0-9a-fA-F]*$/;
      function eH(e, t) {
        return RegExp(`^[A-Za-z0-9+/]{${e}}${t}$`);
      }
      function eY(e) {
        return RegExp(`^[A-Za-z0-9_-]{${e}}$`);
      }
      let eX = /^[0-9a-fA-F]{32}$/,
        eG = eH(22, "=="),
        e0 = eY(22),
        e1 = /^[0-9a-fA-F]{40}$/,
        e2 = eH(27, "="),
        e3 = eY(27),
        e4 = /^[0-9a-fA-F]{64}$/,
        e9 = eH(43, "="),
        e7 = eY(43),
        e6 = /^[0-9a-fA-F]{96}$/,
        e8 = eH(64, ""),
        e5 = eY(64),
        te = /^[0-9a-fA-F]{128}$/,
        tt = eH(86, "=="),
        tn = eY(86),
        tr = f("$ZodCheck", (e, t) => {
          var n;
          e._zod ?? (e._zod = {}),
            (e._zod.def = t),
            (n = e._zod).onattach ?? (n.onattach = []);
        }),
        ti = { number: "number", bigint: "bigint", object: "date" },
        tu = f("$ZodCheckLessThan", (e, t) => {
          tr.init(e, t);
          let n = ti[typeof t.value];
          e._zod.onattach.push((e) => {
            let n = e._zod.bag,
              r = (t.inclusive ? n.maximum : n.exclusiveMaximum) ?? 1 / 0;
            t.value < r &&
              (t.inclusive
                ? (n.maximum = t.value)
                : (n.exclusiveMaximum = t.value));
          }),
            (e._zod.check = (r) => {
              (t.inclusive ? r.value <= t.value : r.value < t.value) ||
                r.issues.push({
                  origin: n,
                  code: "too_big",
                  maximum:
                    "object" == typeof t.value ? t.value.getTime() : t.value,
                  input: r.value,
                  inclusive: t.inclusive,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        to = f("$ZodCheckGreaterThan", (e, t) => {
          tr.init(e, t);
          let n = ti[typeof t.value];
          e._zod.onattach.push((e) => {
            let n = e._zod.bag,
              r = (t.inclusive ? n.minimum : n.exclusiveMinimum) ?? -1 / 0;
            t.value > r &&
              (t.inclusive
                ? (n.minimum = t.value)
                : (n.exclusiveMinimum = t.value));
          }),
            (e._zod.check = (r) => {
              (t.inclusive ? r.value >= t.value : r.value > t.value) ||
                r.issues.push({
                  origin: n,
                  code: "too_small",
                  minimum:
                    "object" == typeof t.value ? t.value.getTime() : t.value,
                  input: r.value,
                  inclusive: t.inclusive,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        ta = f("$ZodCheckMultipleOf", (e, t) => {
          tr.init(e, t),
            e._zod.onattach.push((e) => {
              var n;
              (n = e._zod.bag).multipleOf ?? (n.multipleOf = t.value);
            }),
            (e._zod.check = (n) => {
              if (typeof n.value != typeof t.value)
                throw Error(
                  "Cannot mix number and bigint in multiple_of check.",
                );
              ("bigint" == typeof n.value
                ? n.value % t.value === BigInt(0)
                : 0 ===
                  (function (e, t) {
                    let n = (e.toString().split(".")[1] || "").length,
                      r = t.toString(),
                      i = (r.split(".")[1] || "").length;
                    if (0 === i && /\d?e-\d?/.test(r)) {
                      let e = r.match(/\d?e-(\d?)/);
                      e?.[1] && (i = Number.parseInt(e[1]));
                    }
                    let u = n > i ? n : i;
                    return (
                      (Number.parseInt(e.toFixed(u).replace(".", "")) %
                        Number.parseInt(t.toFixed(u).replace(".", ""))) /
                      10 ** u
                    );
                  })(n.value, t.value)) ||
                n.issues.push({
                  origin: typeof n.value,
                  code: "not_multiple_of",
                  divisor: t.value,
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        ts = f("$ZodCheckNumberFormat", (e, t) => {
          tr.init(e, t), (t.format = t.format || "float64");
          let n = t.format?.includes("int"),
            r = n ? "int" : "number",
            [i, u] = R[t.format];
          e._zod.onattach.push((e) => {
            let r = e._zod.bag;
            (r.format = t.format),
              (r.minimum = i),
              (r.maximum = u),
              n && (r.pattern = eL);
          }),
            (e._zod.check = (o) => {
              let a = o.value;
              if (n) {
                if (!Number.isInteger(a))
                  return void o.issues.push({
                    expected: r,
                    format: t.format,
                    code: "invalid_type",
                    continue: !1,
                    input: a,
                    inst: e,
                  });
                if (!Number.isSafeInteger(a))
                  return void (a > 0
                    ? o.issues.push({
                        input: a,
                        code: "too_big",
                        maximum: Number.MAX_SAFE_INTEGER,
                        note: "Integers must be within the safe integer range.",
                        inst: e,
                        origin: r,
                        inclusive: !0,
                        continue: !t.abort,
                      })
                    : o.issues.push({
                        input: a,
                        code: "too_small",
                        minimum: Number.MIN_SAFE_INTEGER,
                        note: "Integers must be within the safe integer range.",
                        inst: e,
                        origin: r,
                        inclusive: !0,
                        continue: !t.abort,
                      }));
              }
              a < i &&
                o.issues.push({
                  origin: "number",
                  input: a,
                  code: "too_small",
                  minimum: i,
                  inclusive: !0,
                  inst: e,
                  continue: !t.abort,
                }),
                a > u &&
                  o.issues.push({
                    origin: "number",
                    input: a,
                    code: "too_big",
                    maximum: u,
                    inclusive: !0,
                    inst: e,
                    continue: !t.abort,
                  });
            });
        }),
        tl = f("$ZodCheckBigIntFormat", (e, t) => {
          tr.init(e, t);
          let [n, r] = I[t.format];
          e._zod.onattach.push((e) => {
            let i = e._zod.bag;
            (i.format = t.format), (i.minimum = n), (i.maximum = r);
          }),
            (e._zod.check = (i) => {
              let u = i.value;
              u < n &&
                i.issues.push({
                  origin: "bigint",
                  input: u,
                  code: "too_small",
                  minimum: n,
                  inclusive: !0,
                  inst: e,
                  continue: !t.abort,
                }),
                u > r &&
                  i.issues.push({
                    origin: "bigint",
                    input: u,
                    code: "too_big",
                    maximum: r,
                    inclusive: !0,
                    inst: e,
                    continue: !t.abort,
                  });
            });
        }),
        tc = f("$ZodCheckMaxSize", (e, t) => {
          var n;
          tr.init(e, t),
            (n = e._zod.def).when ??
              (n.when = (e) => {
                let t = e.value;
                return !E(t) && void 0 !== t.size;
              }),
            e._zod.onattach.push((e) => {
              let n = e._zod.bag.maximum ?? 1 / 0;
              t.maximum < n && (e._zod.bag.maximum = t.maximum);
            }),
            (e._zod.check = (n) => {
              let r = n.value;
              r.size <= t.maximum ||
                n.issues.push({
                  origin: W(r),
                  code: "too_big",
                  maximum: t.maximum,
                  inclusive: !0,
                  input: r,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        td = f("$ZodCheckMinSize", (e, t) => {
          var n;
          tr.init(e, t),
            (n = e._zod.def).when ??
              (n.when = (e) => {
                let t = e.value;
                return !E(t) && void 0 !== t.size;
              }),
            e._zod.onattach.push((e) => {
              let n = e._zod.bag.minimum ?? -1 / 0;
              t.minimum > n && (e._zod.bag.minimum = t.minimum);
            }),
            (e._zod.check = (n) => {
              let r = n.value;
              r.size >= t.minimum ||
                n.issues.push({
                  origin: W(r),
                  code: "too_small",
                  minimum: t.minimum,
                  inclusive: !0,
                  input: r,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        tf = f("$ZodCheckSizeEquals", (e, t) => {
          var n;
          tr.init(e, t),
            (n = e._zod.def).when ??
              (n.when = (e) => {
                let t = e.value;
                return !E(t) && void 0 !== t.size;
              }),
            e._zod.onattach.push((e) => {
              let n = e._zod.bag;
              (n.minimum = t.size), (n.maximum = t.size), (n.size = t.size);
            }),
            (e._zod.check = (n) => {
              let r = n.value,
                i = r.size;
              if (i === t.size) return;
              let u = i > t.size;
              n.issues.push({
                origin: W(r),
                ...(u
                  ? { code: "too_big", maximum: t.size }
                  : { code: "too_small", minimum: t.size }),
                inclusive: !0,
                exact: !0,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
            });
        }),
        tp = f("$ZodCheckMaxLength", (e, t) => {
          var n;
          tr.init(e, t),
            (n = e._zod.def).when ??
              (n.when = (e) => {
                let t = e.value;
                return !E(t) && void 0 !== t.length;
              }),
            e._zod.onattach.push((e) => {
              let n = e._zod.bag.maximum ?? 1 / 0;
              t.maximum < n && (e._zod.bag.maximum = t.maximum);
            }),
            (e._zod.check = (n) => {
              let r = n.value;
              if (r.length <= t.maximum) return;
              let i = U(r);
              n.issues.push({
                origin: i,
                code: "too_big",
                maximum: t.maximum,
                inclusive: !0,
                input: r,
                inst: e,
                continue: !t.abort,
              });
            });
        }),
        th = f("$ZodCheckMinLength", (e, t) => {
          var n;
          tr.init(e, t),
            (n = e._zod.def).when ??
              (n.when = (e) => {
                let t = e.value;
                return !E(t) && void 0 !== t.length;
              }),
            e._zod.onattach.push((e) => {
              let n = e._zod.bag.minimum ?? -1 / 0;
              t.minimum > n && (e._zod.bag.minimum = t.minimum);
            }),
            (e._zod.check = (n) => {
              let r = n.value;
              if (r.length >= t.minimum) return;
              let i = U(r);
              n.issues.push({
                origin: i,
                code: "too_small",
                minimum: t.minimum,
                inclusive: !0,
                input: r,
                inst: e,
                continue: !t.abort,
              });
            });
        }),
        tv = f("$ZodCheckLengthEquals", (e, t) => {
          var n;
          tr.init(e, t),
            (n = e._zod.def).when ??
              (n.when = (e) => {
                let t = e.value;
                return !E(t) && void 0 !== t.length;
              }),
            e._zod.onattach.push((e) => {
              let n = e._zod.bag;
              (n.minimum = t.length),
                (n.maximum = t.length),
                (n.length = t.length);
            }),
            (e._zod.check = (n) => {
              let r = n.value,
                i = r.length;
              if (i === t.length) return;
              let u = U(r),
                o = i > t.length;
              n.issues.push({
                origin: u,
                ...(o
                  ? { code: "too_big", maximum: t.length }
                  : { code: "too_small", minimum: t.length }),
                inclusive: !0,
                exact: !0,
                input: n.value,
                inst: e,
                continue: !t.abort,
              });
            });
        }),
        tm = f("$ZodCheckStringFormat", (e, t) => {
          var n, r;
          tr.init(e, t),
            e._zod.onattach.push((e) => {
              let n = e._zod.bag;
              (n.format = t.format),
                t.pattern &&
                  (n.patterns ?? (n.patterns = new Set()),
                  n.patterns.add(t.pattern));
            }),
            t.pattern
              ? ((n = e._zod).check ??
                (n.check = (n) => {
                  (t.pattern.lastIndex = 0),
                    t.pattern.test(n.value) ||
                      n.issues.push({
                        origin: "string",
                        code: "invalid_format",
                        format: t.format,
                        input: n.value,
                        ...(t.pattern ? { pattern: t.pattern.toString() } : {}),
                        inst: e,
                        continue: !t.abort,
                      });
                }))
              : ((r = e._zod).check ?? (r.check = () => {}));
        }),
        tg = f("$ZodCheckRegex", (e, t) => {
          tm.init(e, t),
            (e._zod.check = (n) => {
              (t.pattern.lastIndex = 0),
                t.pattern.test(n.value) ||
                  n.issues.push({
                    origin: "string",
                    code: "invalid_format",
                    format: "regex",
                    input: n.value,
                    pattern: t.pattern.toString(),
                    inst: e,
                    continue: !t.abort,
                  });
            });
        }),
        tD = f("$ZodCheckLowerCase", (e, t) => {
          t.pattern ?? (t.pattern = eV), tm.init(e, t);
        }),
        tC = f("$ZodCheckUpperCase", (e, t) => {
          t.pattern ?? (t.pattern = eJ), tm.init(e, t);
        }),
        tB = f("$ZodCheckIncludes", (e, t) => {
          tr.init(e, t);
          let n = T(t.includes),
            r = new RegExp(
              "number" == typeof t.position ? `^.{${t.position}}${n}` : n,
            );
          (t.pattern = r),
            e._zod.onattach.push((e) => {
              let t = e._zod.bag;
              t.patterns ?? (t.patterns = new Set()), t.patterns.add(r);
            }),
            (e._zod.check = (n) => {
              n.value.includes(t.includes, t.position) ||
                n.issues.push({
                  origin: "string",
                  code: "invalid_format",
                  format: "includes",
                  includes: t.includes,
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        tE = f("$ZodCheckStartsWith", (e, t) => {
          tr.init(e, t);
          let n = RegExp(`^${T(t.prefix)}.*`);
          t.pattern ?? (t.pattern = n),
            e._zod.onattach.push((e) => {
              let t = e._zod.bag;
              t.patterns ?? (t.patterns = new Set()), t.patterns.add(n);
            }),
            (e._zod.check = (n) => {
              n.value.startsWith(t.prefix) ||
                n.issues.push({
                  origin: "string",
                  code: "invalid_format",
                  format: "starts_with",
                  prefix: t.prefix,
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        ty = f("$ZodCheckEndsWith", (e, t) => {
          tr.init(e, t);
          let n = RegExp(`.*${T(t.suffix)}$`);
          t.pattern ?? (t.pattern = n),
            e._zod.onattach.push((e) => {
              let t = e._zod.bag;
              t.patterns ?? (t.patterns = new Set()), t.patterns.add(n);
            }),
            (e._zod.check = (n) => {
              n.value.endsWith(t.suffix) ||
                n.issues.push({
                  origin: "string",
                  code: "invalid_format",
                  format: "ends_with",
                  suffix: t.suffix,
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        });
      function tw(e, t, n) {
        e.issues.length && t.issues.push(...L(n, e.issues));
      }
      let tb = f("$ZodCheckProperty", (e, t) => {
          tr.init(e, t),
            (e._zod.check = (e) => {
              let n = t.schema._zod.run(
                { value: e.value[t.property], issues: [] },
                {},
              );
              if (n instanceof Promise)
                return n.then((n) => tw(n, e, t.property));
              tw(n, e, t.property);
            });
        }),
        tA = f("$ZodCheckMimeType", (e, t) => {
          tr.init(e, t);
          let n = new Set(t.mime);
          e._zod.onattach.push((e) => {
            e._zod.bag.mime = t.mime;
          }),
            (e._zod.check = (r) => {
              n.has(r.value.type) ||
                r.issues.push({
                  code: "invalid_value",
                  values: t.mime,
                  input: r.value.type,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        tF = f("$ZodCheckOverwrite", (e, t) => {
          tr.init(e, t),
            (e._zod.check = (e) => {
              e.value = t.tx(e.value);
            });
        });
      class t_ {
        constructor(e = []) {
          (this.content = []), (this.indent = 0), this && (this.args = e);
        }
        indented(e) {
          (this.indent += 1), e(this), (this.indent -= 1);
        }
        write(e) {
          if ("function" == typeof e) {
            e(this, { execution: "sync" }), e(this, { execution: "async" });
            return;
          }
          let t = e.split("\n").filter((e) => e),
            n = Math.min(...t.map((e) => e.length - e.trimStart().length));
          for (let e of t
            .map((e) => e.slice(n))
            .map((e) => " ".repeat(2 * this.indent) + e))
            this.content.push(e);
        }
        compile() {
          return Function(
            ...this?.args,
            [...(this?.content ?? [""]).map((e) => `  ${e}`)].join("\n"),
          );
        }
      }
      let tk = { major: 4, minor: 3, patch: 6 },
        tx = f("$ZodType", (e, t) => {
          var n;
          e ?? (e = {}),
            (e._zod.def = t),
            (e._zod.bag = e._zod.bag || {}),
            (e._zod.version = tk);
          let r = [...(e._zod.def.checks ?? [])];
          for (let t of (e._zod.traits.has("$ZodCheck") && r.unshift(e), r))
            for (let n of t._zod.onattach) n(e);
          if (0 === r.length)
            (n = e._zod).deferred ?? (n.deferred = []),
              e._zod.deferred?.push(() => {
                e._zod.run = e._zod.parse;
              });
          else {
            let t = (e, t, n) => {
                let r,
                  i = M(e);
                for (let u of t) {
                  if (u._zod.def.when) {
                    if (!u._zod.def.when(e)) continue;
                  } else if (i) continue;
                  let t = e.issues.length,
                    o = u._zod.check(e);
                  if (o instanceof Promise && n?.async === !1) throw new p();
                  if (r || o instanceof Promise)
                    r = (r ?? Promise.resolve()).then(async () => {
                      await o, e.issues.length !== t && (i || (i = M(e, t)));
                    });
                  else {
                    if (e.issues.length === t) continue;
                    i || (i = M(e, t));
                  }
                }
                return r ? r.then(() => e) : e;
              },
              n = (n, i, u) => {
                if (M(n)) return (n.aborted = !0), n;
                let o = t(i, r, u);
                if (o instanceof Promise) {
                  if (!1 === u.async) throw new p();
                  return o.then((t) => e._zod.parse(t, u));
                }
                return e._zod.parse(o, u);
              };
            e._zod.run = (i, u) => {
              if (u.skipChecks) return e._zod.parse(i, u);
              if ("backward" === u.direction) {
                let t = e._zod.parse(
                  { value: i.value, issues: [] },
                  { ...u, skipChecks: !0 },
                );
                return t instanceof Promise
                  ? t.then((e) => n(e, i, u))
                  : n(t, i, u);
              }
              let o = e._zod.parse(i, u);
              if (o instanceof Promise) {
                if (!1 === u.async) throw new p();
                return o.then((e) => t(e, r, u));
              }
              return t(o, r, u);
            };
          }
          b(e, "~standard", () => ({
            validate: (t) => {
              try {
                let n = en(e, t);
                return n.success
                  ? { value: n.data }
                  : { issues: n.error?.issues };
              } catch (n) {
                return ei(e, t).then((e) =>
                  e.success ? { value: e.data } : { issues: e.error?.issues },
                );
              }
            },
            vendor: "zod",
            version: 1,
          }));
        }),
        tz = f("$ZodString", (e, t) => {
          tx.init(e, t),
            (e._zod.pattern =
              [...(e?._zod.bag?.patterns ?? [])].pop() ?? eI(e._zod.bag)),
            (e._zod.parse = (n, r) => {
              if (t.coerce)
                try {
                  n.value = String(n.value);
                } catch (e) {}
              return (
                "string" == typeof n.value ||
                  n.issues.push({
                    expected: "string",
                    code: "invalid_type",
                    input: n.value,
                    inst: e,
                  }),
                n
              );
            });
        }),
        tO = f("$ZodStringFormat", (e, t) => {
          tm.init(e, t), tz.init(e, t);
        }),
        tS = f("$ZodGUID", (e, t) => {
          t.pattern ?? (t.pattern = ep), tO.init(e, t);
        }),
        tP = f("$ZodUUID", (e, t) => {
          if (t.version) {
            let e = { v1: 1, v2: 2, v3: 3, v4: 4, v5: 5, v6: 6, v7: 7, v8: 8 }[
              t.version
            ];
            if (void 0 === e)
              throw Error(`Invalid UUID version: "${t.version}"`);
            t.pattern ?? (t.pattern = eh(e));
          } else t.pattern ?? (t.pattern = eh());
          tO.init(e, t);
        }),
        tN = f("$ZodEmail", (e, t) => {
          t.pattern ?? (t.pattern = eD), tO.init(e, t);
        }),
        tT = f("$ZodURL", (e, t) => {
          tO.init(e, t),
            (e._zod.check = (n) => {
              try {
                let r = n.value.trim(),
                  i = new URL(r);
                t.hostname &&
                  ((t.hostname.lastIndex = 0),
                  t.hostname.test(i.hostname) ||
                    n.issues.push({
                      code: "invalid_format",
                      format: "url",
                      note: "Invalid hostname",
                      pattern: t.hostname.source,
                      input: n.value,
                      inst: e,
                      continue: !t.abort,
                    })),
                  t.protocol &&
                    ((t.protocol.lastIndex = 0),
                    t.protocol.test(
                      i.protocol.endsWith(":")
                        ? i.protocol.slice(0, -1)
                        : i.protocol,
                    ) ||
                      n.issues.push({
                        code: "invalid_format",
                        format: "url",
                        note: "Invalid protocol",
                        pattern: t.protocol.source,
                        input: n.value,
                        inst: e,
                        continue: !t.abort,
                      })),
                  t.normalize ? (n.value = i.href) : (n.value = r);
                return;
              } catch (r) {
                n.issues.push({
                  code: "invalid_format",
                  format: "url",
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
              }
            });
        }),
        tj = f("$ZodEmoji", (e, t) => {
          t.pattern ?? (t.pattern = eb()), tO.init(e, t);
        }),
        tZ = f("$ZodNanoID", (e, t) => {
          t.pattern ?? (t.pattern = ec), tO.init(e, t);
        }),
        t$ = f("$ZodCUID", (e, t) => {
          t.pattern ?? (t.pattern = eu), tO.init(e, t);
        }),
        tR = f("$ZodCUID2", (e, t) => {
          t.pattern ?? (t.pattern = eo), tO.init(e, t);
        }),
        tI = f("$ZodULID", (e, t) => {
          t.pattern ?? (t.pattern = ea), tO.init(e, t);
        }),
        tM = f("$ZodXID", (e, t) => {
          t.pattern ?? (t.pattern = es), tO.init(e, t);
        }),
        tL = f("$ZodKSUID", (e, t) => {
          t.pattern ?? (t.pattern = el), tO.init(e, t);
        }),
        tK = f("$ZodISODateTime", (e, t) => {
          t.pattern ?? (t.pattern = eR(t)), tO.init(e, t);
        }),
        tq = f("$ZodISODate", (e, t) => {
          t.pattern ?? (t.pattern = ej), tO.init(e, t);
        }),
        tW = f("$ZodISOTime", (e, t) => {
          t.pattern ?? (t.pattern = e$(t)), tO.init(e, t);
        }),
        tU = f("$ZodISODuration", (e, t) => {
          t.pattern ?? (t.pattern = ed), tO.init(e, t);
        }),
        tV = f("$ZodIPv4", (e, t) => {
          t.pattern ?? (t.pattern = eA),
            tO.init(e, t),
            (e._zod.bag.format = "ipv4");
        }),
        tJ = f("$ZodIPv6", (e, t) => {
          t.pattern ?? (t.pattern = eF),
            tO.init(e, t),
            (e._zod.bag.format = "ipv6"),
            (e._zod.check = (n) => {
              try {
                new URL(`http://[${n.value}]`);
              } catch {
                n.issues.push({
                  code: "invalid_format",
                  format: "ipv6",
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
              }
            });
        }),
        tQ = f("$ZodMAC", (e, t) => {
          t.pattern ?? (t.pattern = e_(t.delimiter)),
            tO.init(e, t),
            (e._zod.bag.format = "mac");
        }),
        tH = f("$ZodCIDRv4", (e, t) => {
          t.pattern ?? (t.pattern = ek), tO.init(e, t);
        }),
        tY = f("$ZodCIDRv6", (e, t) => {
          t.pattern ?? (t.pattern = ex),
            tO.init(e, t),
            (e._zod.check = (n) => {
              let r = n.value.split("/");
              try {
                if (2 !== r.length) throw Error();
                let [e, t] = r;
                if (!t) throw Error();
                let n = Number(t);
                if (`${n}` !== t || n < 0 || n > 128) throw Error();
                new URL(`http://[${e}]`);
              } catch {
                n.issues.push({
                  code: "invalid_format",
                  format: "cidrv6",
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
              }
            });
        });
      function tX(e) {
        if ("" === e) return !0;
        if (e.length % 4 != 0) return !1;
        try {
          return atob(e), !0;
        } catch {
          return !1;
        }
      }
      let tG = f("$ZodBase64", (e, t) => {
          t.pattern ?? (t.pattern = ez),
            tO.init(e, t),
            (e._zod.bag.contentEncoding = "base64"),
            (e._zod.check = (n) => {
              tX(n.value) ||
                n.issues.push({
                  code: "invalid_format",
                  format: "base64",
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        t0 = f("$ZodBase64URL", (e, t) => {
          t.pattern ?? (t.pattern = eO),
            tO.init(e, t),
            (e._zod.bag.contentEncoding = "base64url"),
            (e._zod.check = (n) => {
              !(function (e) {
                if (!eO.test(e)) return !1;
                let t = e.replace(/[-_]/g, (e) => ("-" === e ? "+" : "/"));
                return tX(t.padEnd(4 * Math.ceil(t.length / 4), "="));
              })(n.value) &&
                n.issues.push({
                  code: "invalid_format",
                  format: "base64url",
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        t1 = f("$ZodE164", (e, t) => {
          t.pattern ?? (t.pattern = eN), tO.init(e, t);
        }),
        t2 = f("$ZodJWT", (e, t) => {
          tO.init(e, t),
            (e._zod.check = (n) => {
              !(function (e, t = null) {
                try {
                  let n = e.split(".");
                  if (3 !== n.length) return !1;
                  let [r] = n;
                  if (!r) return !1;
                  let i = JSON.parse(atob(r));
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
              })(n.value, t.alg) &&
                n.issues.push({
                  code: "invalid_format",
                  format: "jwt",
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        t3 = f("$ZodCustomStringFormat", (e, t) => {
          tO.init(e, t),
            (e._zod.check = (n) => {
              t.fn(n.value) ||
                n.issues.push({
                  code: "invalid_format",
                  format: t.format,
                  input: n.value,
                  inst: e,
                  continue: !t.abort,
                });
            });
        }),
        t4 = f("$ZodNumber", (e, t) => {
          tx.init(e, t),
            (e._zod.pattern = e._zod.bag.pattern ?? eK),
            (e._zod.parse = (n, r) => {
              if (t.coerce)
                try {
                  n.value = Number(n.value);
                } catch (e) {}
              let i = n.value;
              if (
                "number" == typeof i &&
                !Number.isNaN(i) &&
                Number.isFinite(i)
              )
                return n;
              let u =
                "number" == typeof i
                  ? Number.isNaN(i)
                    ? "NaN"
                    : Number.isFinite(i)
                      ? void 0
                      : "Infinity"
                  : void 0;
              return (
                n.issues.push({
                  expected: "number",
                  code: "invalid_type",
                  input: i,
                  inst: e,
                  ...(u ? { received: u } : {}),
                }),
                n
              );
            });
        }),
        t9 = f("$ZodNumberFormat", (e, t) => {
          ts.init(e, t), t4.init(e, t);
        }),
        t7 = f("$ZodBoolean", (e, t) => {
          tx.init(e, t),
            (e._zod.pattern = eq),
            (e._zod.parse = (n, r) => {
              if (t.coerce)
                try {
                  n.value = !!n.value;
                } catch (e) {}
              let i = n.value;
              return (
                "boolean" == typeof i ||
                  n.issues.push({
                    expected: "boolean",
                    code: "invalid_type",
                    input: i,
                    inst: e,
                  }),
                n
              );
            });
        }),
        t6 = f("$ZodBigInt", (e, t) => {
          tx.init(e, t),
            (e._zod.pattern = eM),
            (e._zod.parse = (n, r) => {
              if (t.coerce)
                try {
                  n.value = BigInt(n.value);
                } catch (e) {}
              return (
                "bigint" == typeof n.value ||
                  n.issues.push({
                    expected: "bigint",
                    code: "invalid_type",
                    input: n.value,
                    inst: e,
                  }),
                n
              );
            });
        }),
        t8 = f("$ZodBigIntFormat", (e, t) => {
          tl.init(e, t), t6.init(e, t);
        }),
        t5 = f("$ZodSymbol", (e, t) => {
          tx.init(e, t),
            (e._zod.parse = (t, n) => {
              let r = t.value;
              return (
                "symbol" == typeof r ||
                  t.issues.push({
                    expected: "symbol",
                    code: "invalid_type",
                    input: r,
                    inst: e,
                  }),
                t
              );
            });
        }),
        ne = f("$ZodUndefined", (e, t) => {
          tx.init(e, t),
            (e._zod.pattern = eU),
            (e._zod.values = new Set([void 0])),
            (e._zod.optin = "optional"),
            (e._zod.optout = "optional"),
            (e._zod.parse = (t, n) => {
              let r = t.value;
              return (
                void 0 === r ||
                  t.issues.push({
                    expected: "undefined",
                    code: "invalid_type",
                    input: r,
                    inst: e,
                  }),
                t
              );
            });
        }),
        nt = f("$ZodNull", (e, t) => {
          tx.init(e, t),
            (e._zod.pattern = eW),
            (e._zod.values = new Set([null])),
            (e._zod.parse = (t, n) => {
              let r = t.value;
              return (
                null === r ||
                  t.issues.push({
                    expected: "null",
                    code: "invalid_type",
                    input: r,
                    inst: e,
                  }),
                t
              );
            });
        }),
        nn = f("$ZodAny", (e, t) => {
          tx.init(e, t), (e._zod.parse = (e) => e);
        }),
        nr = f("$ZodUnknown", (e, t) => {
          tx.init(e, t), (e._zod.parse = (e) => e);
        }),
        ni = f("$ZodNever", (e, t) => {
          tx.init(e, t),
            (e._zod.parse = (t, n) => (
              t.issues.push({
                expected: "never",
                code: "invalid_type",
                input: t.value,
                inst: e,
              }),
              t
            ));
        }),
        nu = f("$ZodVoid", (e, t) => {
          tx.init(e, t),
            (e._zod.parse = (t, n) => {
              let r = t.value;
              return (
                void 0 === r ||
                  t.issues.push({
                    expected: "void",
                    code: "invalid_type",
                    input: r,
                    inst: e,
                  }),
                t
              );
            });
        }),
        no = f("$ZodDate", (e, t) => {
          tx.init(e, t),
            (e._zod.parse = (n, r) => {
              if (t.coerce)
                try {
                  n.value = new Date(n.value);
                } catch (e) {}
              let i = n.value,
                u = i instanceof Date;
              return (
                (u && !Number.isNaN(i.getTime())) ||
                  n.issues.push({
                    expected: "date",
                    code: "invalid_type",
                    input: i,
                    ...(u ? { received: "Invalid Date" } : {}),
                    inst: e,
                  }),
                n
              );
            });
        });
      function na(e, t, n) {
        e.issues.length && t.issues.push(...L(n, e.issues)),
          (t.value[n] = e.value);
      }
      let ns = f("$ZodArray", (e, t) => {
        tx.init(e, t),
          (e._zod.parse = (n, r) => {
            let i = n.value;
            if (!Array.isArray(i))
              return (
                n.issues.push({
                  expected: "array",
                  code: "invalid_type",
                  input: i,
                  inst: e,
                }),
                n
              );
            n.value = Array(i.length);
            let u = [];
            for (let e = 0; e < i.length; e++) {
              let o = i[e],
                a = t.element._zod.run({ value: o, issues: [] }, r);
              a instanceof Promise
                ? u.push(a.then((t) => na(t, n, e)))
                : na(a, n, e);
            }
            return u.length ? Promise.all(u).then(() => n) : n;
          });
      });
      function nl(e, t, n, r, i) {
        if (e.issues.length) {
          if (i && !(n in r)) return;
          t.issues.push(...L(n, e.issues));
        }
        void 0 === e.value
          ? n in r && (t.value[n] = void 0)
          : (t.value[n] = e.value);
      }
      function nc(e) {
        var t;
        let n = Object.keys(e.shape);
        for (let t of n)
          if (!e.shape?.[t]?._zod?.traits?.has("$ZodType"))
            throw Error(`Invalid element at key "${t}": expected a Zod schema`);
        let r = Object.keys((t = e.shape)).filter(
          (e) =>
            "optional" === t[e]._zod.optin && "optional" === t[e]._zod.optout,
        );
        return {
          ...e,
          keys: n,
          keySet: new Set(n),
          numKeys: n.length,
          optionalKeys: new Set(r),
        };
      }
      function nd(e, t, n, r, i, u) {
        let o = [],
          a = i.keySet,
          s = i.catchall._zod,
          l = s.def.type,
          c = "optional" === s.optout;
        for (let i in t) {
          if (a.has(i)) continue;
          if ("never" === l) {
            o.push(i);
            continue;
          }
          let u = s.run({ value: t[i], issues: [] }, r);
          u instanceof Promise
            ? e.push(u.then((e) => nl(e, n, i, t, c)))
            : nl(u, n, i, t, c);
        }
        return (o.length &&
          n.issues.push({
            code: "unrecognized_keys",
            keys: o,
            input: t,
            inst: u,
          }),
        e.length)
          ? Promise.all(e).then(() => n)
          : n;
      }
      let nf = f("$ZodObject", (e, t) => {
          let n;
          tx.init(e, t);
          let r = Object.getOwnPropertyDescriptor(t, "shape");
          if (!r?.get) {
            let e = t.shape;
            Object.defineProperty(t, "shape", {
              get: () => {
                let n = { ...e };
                return Object.defineProperty(t, "shape", { value: n }), n;
              },
            });
          }
          let i = B(() => nc(t));
          b(e._zod, "propValues", () => {
            let e = t.shape,
              n = {};
            for (let t in e) {
              let r = e[t]._zod;
              if (r.values)
                for (let e of (n[t] ?? (n[t] = new Set()), r.values))
                  n[t].add(e);
            }
            return n;
          });
          let u = t.catchall;
          e._zod.parse = (t, r) => {
            n ?? (n = i.value);
            let o = t.value;
            if (!x(o))
              return (
                t.issues.push({
                  expected: "object",
                  code: "invalid_type",
                  input: o,
                  inst: e,
                }),
                t
              );
            t.value = {};
            let a = [],
              s = n.shape;
            for (let e of n.keys) {
              let n = s[e],
                i = "optional" === n._zod.optout,
                u = n._zod.run({ value: o[e], issues: [] }, r);
              u instanceof Promise
                ? a.push(u.then((n) => nl(n, t, e, o, i)))
                : nl(u, t, e, o, i);
            }
            return u
              ? nd(a, o, t, r, i.value, e)
              : a.length
                ? Promise.all(a).then(() => t)
                : t;
          };
        }),
        np = f("$ZodObjectJIT", (e, t) => {
          let n, r;
          nf.init(e, t);
          let i = e._zod.parse,
            u = B(() => nc(t)),
            o = !v.jitless,
            a = o && z.value,
            s = t.catchall;
          e._zod.parse = (l, c) => {
            r ?? (r = u.value);
            let d = l.value;
            return x(d)
              ? o && a && c?.async === !1 && !0 !== c.jitless
                ? (n ||
                    (n = ((e) => {
                      let t = new t_(["shape", "payload", "ctx"]),
                        n = u.value,
                        r = (e) => {
                          let t = _(e);
                          return `shape[${t}]._zod.run({ value: input[${t}], issues: [] }, ctx)`;
                        };
                      t.write("const input = payload.value;");
                      let i = Object.create(null),
                        o = 0;
                      for (let e of n.keys) i[e] = `key_${o++}`;
                      for (let u of (t.write("const newResult = {};"),
                      n.keys)) {
                        let n = i[u],
                          o = _(u),
                          a = e[u],
                          s = a?._zod?.optout === "optional";
                        t.write(`const ${n} = ${r(u)};`),
                          s
                            ? t.write(`
        if (${n}.issues.length) {
          if (${o} in input) {
            payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
              ...iss,
              path: iss.path ? [${o}, ...iss.path] : [${o}]
            })));
          }
        }
        
        if (${n}.value === undefined) {
          if (${o} in input) {
            newResult[${o}] = undefined;
          }
        } else {
          newResult[${o}] = ${n}.value;
        }
        
      `)
                            : t.write(`
        if (${n}.issues.length) {
          payload.issues = payload.issues.concat(${n}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${o}, ...iss.path] : [${o}]
          })));
        }
        
        if (${n}.value === undefined) {
          if (${o} in input) {
            newResult[${o}] = undefined;
          }
        } else {
          newResult[${o}] = ${n}.value;
        }
        
      `);
                      }
                      t.write("payload.value = newResult;"),
                        t.write("return payload;");
                      let a = t.compile();
                      return (t, n) => a(e, t, n);
                    })(t.shape)),
                  (l = n(l, c)),
                  s)
                  ? nd([], d, l, c, r, e)
                  : l
                : i(l, c)
              : (l.issues.push({
                  expected: "object",
                  code: "invalid_type",
                  input: d,
                  inst: e,
                }),
                l);
          };
        });
      function nh(e, t, n, r) {
        for (let n of e)
          if (0 === n.issues.length) return (t.value = n.value), t;
        let i = e.filter((e) => !M(e));
        return 1 === i.length
          ? ((t.value = i[0].value), i[0])
          : (t.issues.push({
              code: "invalid_union",
              input: t.value,
              inst: n,
              errors: e.map((e) => e.issues.map((e) => q(e, r, m()))),
            }),
            t);
      }
      let nv = f("$ZodUnion", (e, t) => {
        tx.init(e, t),
          b(e._zod, "optin", () =>
            t.options.some((e) => "optional" === e._zod.optin)
              ? "optional"
              : void 0,
          ),
          b(e._zod, "optout", () =>
            t.options.some((e) => "optional" === e._zod.optout)
              ? "optional"
              : void 0,
          ),
          b(e._zod, "values", () => {
            if (t.options.every((e) => e._zod.values))
              return new Set(
                t.options.flatMap((e) => Array.from(e._zod.values)),
              );
          }),
          b(e._zod, "pattern", () => {
            if (t.options.every((e) => e._zod.pattern)) {
              let e = t.options.map((e) => e._zod.pattern);
              return RegExp(`^(${e.map((e) => y(e.source)).join("|")})$`);
            }
          });
        let n = 1 === t.options.length,
          r = t.options[0]._zod.run;
        e._zod.parse = (i, u) => {
          if (n) return r(i, u);
          let o = !1,
            a = [];
          for (let e of t.options) {
            let t = e._zod.run({ value: i.value, issues: [] }, u);
            if (t instanceof Promise) a.push(t), (o = !0);
            else {
              if (0 === t.issues.length) return t;
              a.push(t);
            }
          }
          return o
            ? Promise.all(a).then((t) => nh(t, i, e, u))
            : nh(a, i, e, u);
        };
      });
      function nm(e, t, n, r) {
        let i = e.filter((e) => 0 === e.issues.length);
        return (
          1 === i.length
            ? (t.value = i[0].value)
            : 0 === i.length
              ? t.issues.push({
                  code: "invalid_union",
                  input: t.value,
                  inst: n,
                  errors: e.map((e) => e.issues.map((e) => q(e, r, m()))),
                })
              : t.issues.push({
                  code: "invalid_union",
                  input: t.value,
                  inst: n,
                  errors: [],
                  inclusive: !1,
                }),
          t
        );
      }
      let ng = f("$ZodXor", (e, t) => {
          nv.init(e, t), (t.inclusive = !1);
          let n = 1 === t.options.length,
            r = t.options[0]._zod.run;
          e._zod.parse = (i, u) => {
            if (n) return r(i, u);
            let o = !1,
              a = [];
            for (let e of t.options) {
              let t = e._zod.run({ value: i.value, issues: [] }, u);
              t instanceof Promise ? (a.push(t), (o = !0)) : a.push(t);
            }
            return o
              ? Promise.all(a).then((t) => nm(t, i, e, u))
              : nm(a, i, e, u);
          };
        }),
        nD = f("$ZodDiscriminatedUnion", (e, t) => {
          (t.inclusive = !1), nv.init(e, t);
          let n = e._zod.parse;
          b(e._zod, "propValues", () => {
            let e = {};
            for (let n of t.options) {
              let r = n._zod.propValues;
              if (!r || 0 === Object.keys(r).length)
                throw Error(
                  `Invalid discriminated union option at index "${t.options.indexOf(n)}"`,
                );
              for (let [t, n] of Object.entries(r))
                for (let r of (e[t] || (e[t] = new Set()), n)) e[t].add(r);
            }
            return e;
          });
          let r = B(() => {
            let e = t.options,
              n = new Map();
            for (let r of e) {
              let e = r._zod.propValues?.[t.discriminator];
              if (!e || 0 === e.size)
                throw Error(
                  `Invalid discriminated union option at index "${t.options.indexOf(r)}"`,
                );
              for (let t of e) {
                if (n.has(t))
                  throw Error(`Duplicate discriminator value "${String(t)}"`);
                n.set(t, r);
              }
            }
            return n;
          });
          e._zod.parse = (i, u) => {
            let o = i.value;
            if (!x(o))
              return (
                i.issues.push({
                  code: "invalid_type",
                  expected: "object",
                  input: o,
                  inst: e,
                }),
                i
              );
            let a = r.value.get(o?.[t.discriminator]);
            return a
              ? a._zod.run(i, u)
              : t.unionFallback
                ? n(i, u)
                : (i.issues.push({
                    code: "invalid_union",
                    errors: [],
                    note: "No matching discriminator",
                    discriminator: t.discriminator,
                    input: o,
                    path: [t.discriminator],
                    inst: e,
                  }),
                  i);
          };
        }),
        nC = f("$ZodIntersection", (e, t) => {
          tx.init(e, t),
            (e._zod.parse = (e, n) => {
              let r = e.value,
                i = t.left._zod.run({ value: r, issues: [] }, n),
                u = t.right._zod.run({ value: r, issues: [] }, n);
              return i instanceof Promise || u instanceof Promise
                ? Promise.all([i, u]).then(([t, n]) => nB(e, t, n))
                : nB(e, i, u);
            });
        });
      function nB(e, t, n) {
        let r,
          i = new Map();
        for (let n of t.issues)
          if ("unrecognized_keys" === n.code)
            for (let e of (r ?? (r = n), n.keys))
              i.has(e) || i.set(e, {}), (i.get(e).l = !0);
          else e.issues.push(n);
        for (let t of n.issues)
          if ("unrecognized_keys" === t.code)
            for (let e of t.keys) i.has(e) || i.set(e, {}), (i.get(e).r = !0);
          else e.issues.push(t);
        let u = [...i].filter(([, e]) => e.l && e.r).map(([e]) => e);
        if ((u.length && r && e.issues.push({ ...r, keys: u }), M(e))) return e;
        let o = (function e(t, n) {
          if (t === n || (t instanceof Date && n instanceof Date && +t == +n))
            return { valid: !0, data: t };
          if (O(t) && O(n)) {
            let r = Object.keys(n),
              i = Object.keys(t).filter((e) => -1 !== r.indexOf(e)),
              u = { ...t, ...n };
            for (let r of i) {
              let i = e(t[r], n[r]);
              if (!i.valid)
                return { valid: !1, mergeErrorPath: [r, ...i.mergeErrorPath] };
              u[r] = i.data;
            }
            return { valid: !0, data: u };
          }
          if (Array.isArray(t) && Array.isArray(n)) {
            if (t.length !== n.length) return { valid: !1, mergeErrorPath: [] };
            let r = [];
            for (let i = 0; i < t.length; i++) {
              let u = e(t[i], n[i]);
              if (!u.valid)
                return { valid: !1, mergeErrorPath: [i, ...u.mergeErrorPath] };
              r.push(u.data);
            }
            return { valid: !0, data: r };
          }
          return { valid: !1, mergeErrorPath: [] };
        })(t.value, n.value);
        if (!o.valid)
          throw Error(
            `Unmergable intersection. Error path: ${JSON.stringify(o.mergeErrorPath)}`,
          );
        return (e.value = o.data), e;
      }
      let nE = f("$ZodTuple", (e, t) => {
        tx.init(e, t);
        let n = t.items;
        e._zod.parse = (r, i) => {
          let u = r.value;
          if (!Array.isArray(u))
            return (
              r.issues.push({
                input: u,
                inst: e,
                expected: "tuple",
                code: "invalid_type",
              }),
              r
            );
          r.value = [];
          let o = [],
            a = [...n].reverse().findIndex((e) => "optional" !== e._zod.optin),
            s = -1 === a ? 0 : n.length - a;
          if (!t.rest) {
            let t = u.length > n.length,
              i = u.length < s - 1;
            if (t || i)
              return (
                r.issues.push({
                  ...(t
                    ? { code: "too_big", maximum: n.length, inclusive: !0 }
                    : { code: "too_small", minimum: n.length }),
                  input: u,
                  inst: e,
                  origin: "array",
                }),
                r
              );
          }
          let l = -1;
          for (let e of n) {
            if (++l >= u.length && l >= s) continue;
            let t = e._zod.run({ value: u[l], issues: [] }, i);
            t instanceof Promise
              ? o.push(t.then((e) => ny(e, r, l)))
              : ny(t, r, l);
          }
          if (t.rest)
            for (let e of u.slice(n.length)) {
              l++;
              let n = t.rest._zod.run({ value: e, issues: [] }, i);
              n instanceof Promise
                ? o.push(n.then((e) => ny(e, r, l)))
                : ny(n, r, l);
            }
          return o.length ? Promise.all(o).then(() => r) : r;
        };
      });
      function ny(e, t, n) {
        e.issues.length && t.issues.push(...L(n, e.issues)),
          (t.value[n] = e.value);
      }
      let nw = f("$ZodRecord", (e, t) => {
          tx.init(e, t),
            (e._zod.parse = (n, r) => {
              let i = n.value;
              if (!O(i))
                return (
                  n.issues.push({
                    expected: "record",
                    code: "invalid_type",
                    input: i,
                    inst: e,
                  }),
                  n
                );
              let u = [],
                o = t.keyType._zod.values;
              if (o) {
                let a;
                n.value = {};
                let s = new Set();
                for (let e of o)
                  if (
                    "string" == typeof e ||
                    "number" == typeof e ||
                    "symbol" == typeof e
                  ) {
                    s.add("number" == typeof e ? e.toString() : e);
                    let o = t.valueType._zod.run(
                      { value: i[e], issues: [] },
                      r,
                    );
                    o instanceof Promise
                      ? u.push(
                          o.then((t) => {
                            t.issues.length && n.issues.push(...L(e, t.issues)),
                              (n.value[e] = t.value);
                          }),
                        )
                      : (o.issues.length && n.issues.push(...L(e, o.issues)),
                        (n.value[e] = o.value));
                  }
                for (let e in i) s.has(e) || (a = a ?? []).push(e);
                a &&
                  a.length > 0 &&
                  n.issues.push({
                    code: "unrecognized_keys",
                    input: i,
                    inst: e,
                    keys: a,
                  });
              } else
                for (let o of ((n.value = {}), Reflect.ownKeys(i))) {
                  if ("__proto__" === o) continue;
                  let a = t.keyType._zod.run({ value: o, issues: [] }, r);
                  if (a instanceof Promise)
                    throw Error(
                      "Async schemas not supported in object keys currently",
                    );
                  if ("string" == typeof o && eK.test(o) && a.issues.length) {
                    let e = t.keyType._zod.run(
                      { value: Number(o), issues: [] },
                      r,
                    );
                    if (e instanceof Promise)
                      throw Error(
                        "Async schemas not supported in object keys currently",
                      );
                    0 === e.issues.length && (a = e);
                  }
                  if (a.issues.length) {
                    "loose" === t.mode
                      ? (n.value[o] = i[o])
                      : n.issues.push({
                          code: "invalid_key",
                          origin: "record",
                          issues: a.issues.map((e) => q(e, r, m())),
                          input: o,
                          path: [o],
                          inst: e,
                        });
                    continue;
                  }
                  let s = t.valueType._zod.run({ value: i[o], issues: [] }, r);
                  s instanceof Promise
                    ? u.push(
                        s.then((e) => {
                          e.issues.length && n.issues.push(...L(o, e.issues)),
                            (n.value[a.value] = e.value);
                        }),
                      )
                    : (s.issues.length && n.issues.push(...L(o, s.issues)),
                      (n.value[a.value] = s.value));
                }
              return u.length ? Promise.all(u).then(() => n) : n;
            });
        }),
        nb = f("$ZodMap", (e, t) => {
          tx.init(e, t),
            (e._zod.parse = (n, r) => {
              let i = n.value;
              if (!(i instanceof Map))
                return (
                  n.issues.push({
                    expected: "map",
                    code: "invalid_type",
                    input: i,
                    inst: e,
                  }),
                  n
                );
              let u = [];
              for (let [o, a] of ((n.value = new Map()), i)) {
                let s = t.keyType._zod.run({ value: o, issues: [] }, r),
                  l = t.valueType._zod.run({ value: a, issues: [] }, r);
                s instanceof Promise || l instanceof Promise
                  ? u.push(
                      Promise.all([s, l]).then(([t, u]) => {
                        nA(t, u, n, o, i, e, r);
                      }),
                    )
                  : nA(s, l, n, o, i, e, r);
              }
              return u.length ? Promise.all(u).then(() => n) : n;
            });
        });
      function nA(e, t, n, r, i, u, o) {
        e.issues.length &&
          (P.has(typeof r)
            ? n.issues.push(...L(r, e.issues))
            : n.issues.push({
                code: "invalid_key",
                origin: "map",
                input: i,
                inst: u,
                issues: e.issues.map((e) => q(e, o, m())),
              })),
          t.issues.length &&
            (P.has(typeof r)
              ? n.issues.push(...L(r, t.issues))
              : n.issues.push({
                  origin: "map",
                  code: "invalid_element",
                  input: i,
                  inst: u,
                  key: r,
                  issues: t.issues.map((e) => q(e, o, m())),
                })),
          n.value.set(e.value, t.value);
      }
      let nF = f("$ZodSet", (e, t) => {
        tx.init(e, t),
          (e._zod.parse = (n, r) => {
            let i = n.value;
            if (!(i instanceof Set))
              return (
                n.issues.push({
                  input: i,
                  inst: e,
                  expected: "set",
                  code: "invalid_type",
                }),
                n
              );
            let u = [];
            for (let e of ((n.value = new Set()), i)) {
              let i = t.valueType._zod.run({ value: e, issues: [] }, r);
              i instanceof Promise ? u.push(i.then((e) => n_(e, n))) : n_(i, n);
            }
            return u.length ? Promise.all(u).then(() => n) : n;
          });
      });
      function n_(e, t) {
        e.issues.length && t.issues.push(...e.issues), t.value.add(e.value);
      }
      let nk = f("$ZodEnum", (e, t) => {
          tx.init(e, t);
          let n = g(t.entries),
            r = new Set(n);
          (e._zod.values = r),
            (e._zod.pattern = RegExp(
              `^(${n
                .filter((e) => P.has(typeof e))
                .map((e) => ("string" == typeof e ? T(e) : e.toString()))
                .join("|")})$`,
            )),
            (e._zod.parse = (t, i) => {
              let u = t.value;
              return (
                r.has(u) ||
                  t.issues.push({
                    code: "invalid_value",
                    values: n,
                    input: u,
                    inst: e,
                  }),
                t
              );
            });
        }),
        nx = f("$ZodLiteral", (e, t) => {
          if ((tx.init(e, t), 0 === t.values.length))
            throw Error("Cannot create literal schema with no valid values");
          let n = new Set(t.values);
          (e._zod.values = n),
            (e._zod.pattern = RegExp(
              `^(${t.values.map((e) => ("string" == typeof e ? T(e) : e ? T(e.toString()) : String(e))).join("|")})$`,
            )),
            (e._zod.parse = (r, i) => {
              let u = r.value;
              return (
                n.has(u) ||
                  r.issues.push({
                    code: "invalid_value",
                    values: t.values,
                    input: u,
                    inst: e,
                  }),
                r
              );
            });
        }),
        nz = f("$ZodFile", (e, t) => {
          tx.init(e, t),
            (e._zod.parse = (t, n) => {
              let r = t.value;
              return (
                r instanceof File ||
                  t.issues.push({
                    expected: "file",
                    code: "invalid_type",
                    input: r,
                    inst: e,
                  }),
                t
              );
            });
        }),
        nO = f("$ZodTransform", (e, t) => {
          tx.init(e, t),
            (e._zod.parse = (n, r) => {
              if ("backward" === r.direction) throw new h(e.constructor.name);
              let i = t.transform(n.value, n);
              if (r.async)
                return (i instanceof Promise ? i : Promise.resolve(i)).then(
                  (e) => ((n.value = e), n),
                );
              if (i instanceof Promise) throw new p();
              return (n.value = i), n;
            });
        });
      function nS(e, t) {
        return e.issues.length && void 0 === t
          ? { issues: [], value: void 0 }
          : e;
      }
      let nP = f("$ZodOptional", (e, t) => {
          tx.init(e, t),
            (e._zod.optin = "optional"),
            (e._zod.optout = "optional"),
            b(e._zod, "values", () =>
              t.innerType._zod.values
                ? new Set([...t.innerType._zod.values, void 0])
                : void 0,
            ),
            b(e._zod, "pattern", () => {
              let e = t.innerType._zod.pattern;
              return e ? RegExp(`^(${y(e.source)})?$`) : void 0;
            }),
            (e._zod.parse = (e, n) => {
              if ("optional" === t.innerType._zod.optin) {
                let r = t.innerType._zod.run(e, n);
                return r instanceof Promise
                  ? r.then((t) => nS(t, e.value))
                  : nS(r, e.value);
              }
              return void 0 === e.value ? e : t.innerType._zod.run(e, n);
            });
        }),
        nN = f("$ZodExactOptional", (e, t) => {
          nP.init(e, t),
            b(e._zod, "values", () => t.innerType._zod.values),
            b(e._zod, "pattern", () => t.innerType._zod.pattern),
            (e._zod.parse = (e, n) => t.innerType._zod.run(e, n));
        }),
        nT = f("$ZodNullable", (e, t) => {
          tx.init(e, t),
            b(e._zod, "optin", () => t.innerType._zod.optin),
            b(e._zod, "optout", () => t.innerType._zod.optout),
            b(e._zod, "pattern", () => {
              let e = t.innerType._zod.pattern;
              return e ? RegExp(`^(${y(e.source)}|null)$`) : void 0;
            }),
            b(e._zod, "values", () =>
              t.innerType._zod.values
                ? new Set([...t.innerType._zod.values, null])
                : void 0,
            ),
            (e._zod.parse = (e, n) =>
              null === e.value ? e : t.innerType._zod.run(e, n));
        }),
        nj = f("$ZodDefault", (e, t) => {
          tx.init(e, t),
            (e._zod.optin = "optional"),
            b(e._zod, "values", () => t.innerType._zod.values),
            (e._zod.parse = (e, n) => {
              if ("backward" === n.direction) return t.innerType._zod.run(e, n);
              if (void 0 === e.value) return (e.value = t.defaultValue), e;
              let r = t.innerType._zod.run(e, n);
              return r instanceof Promise ? r.then((e) => nZ(e, t)) : nZ(r, t);
            });
        });
      function nZ(e, t) {
        return void 0 === e.value && (e.value = t.defaultValue), e;
      }
      let n$ = f("$ZodPrefault", (e, t) => {
          tx.init(e, t),
            (e._zod.optin = "optional"),
            b(e._zod, "values", () => t.innerType._zod.values),
            (e._zod.parse = (e, n) => (
              "backward" === n.direction ||
                (void 0 === e.value && (e.value = t.defaultValue)),
              t.innerType._zod.run(e, n)
            ));
        }),
        nR = f("$ZodNonOptional", (e, t) => {
          tx.init(e, t),
            b(e._zod, "values", () => {
              let e = t.innerType._zod.values;
              return e ? new Set([...e].filter((e) => void 0 !== e)) : void 0;
            }),
            (e._zod.parse = (n, r) => {
              let i = t.innerType._zod.run(n, r);
              return i instanceof Promise ? i.then((t) => nI(t, e)) : nI(i, e);
            });
        });
      function nI(e, t) {
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
      let nM = f("$ZodSuccess", (e, t) => {
          tx.init(e, t),
            (e._zod.parse = (e, n) => {
              if ("backward" === n.direction) throw new h("ZodSuccess");
              let r = t.innerType._zod.run(e, n);
              return r instanceof Promise
                ? r.then((t) => ((e.value = 0 === t.issues.length), e))
                : ((e.value = 0 === r.issues.length), e);
            });
        }),
        nL = f("$ZodCatch", (e, t) => {
          tx.init(e, t),
            b(e._zod, "optin", () => t.innerType._zod.optin),
            b(e._zod, "optout", () => t.innerType._zod.optout),
            b(e._zod, "values", () => t.innerType._zod.values),
            (e._zod.parse = (e, n) => {
              if ("backward" === n.direction) return t.innerType._zod.run(e, n);
              let r = t.innerType._zod.run(e, n);
              return r instanceof Promise
                ? r.then(
                    (r) => (
                      (e.value = r.value),
                      r.issues.length &&
                        ((e.value = t.catchValue({
                          ...e,
                          error: { issues: r.issues.map((e) => q(e, n, m())) },
                          input: e.value,
                        })),
                        (e.issues = [])),
                      e
                    ),
                  )
                : ((e.value = r.value),
                  r.issues.length &&
                    ((e.value = t.catchValue({
                      ...e,
                      error: { issues: r.issues.map((e) => q(e, n, m())) },
                      input: e.value,
                    })),
                    (e.issues = [])),
                  e);
            });
        }),
        nK = f("$ZodNaN", (e, t) => {
          tx.init(e, t),
            (e._zod.parse = (t, n) => (
              ("number" == typeof t.value && Number.isNaN(t.value)) ||
                t.issues.push({
                  input: t.value,
                  inst: e,
                  expected: "nan",
                  code: "invalid_type",
                }),
              t
            ));
        }),
        nq = f("$ZodPipe", (e, t) => {
          tx.init(e, t),
            b(e._zod, "values", () => t.in._zod.values),
            b(e._zod, "optin", () => t.in._zod.optin),
            b(e._zod, "optout", () => t.out._zod.optout),
            b(e._zod, "propValues", () => t.in._zod.propValues),
            (e._zod.parse = (e, n) => {
              if ("backward" === n.direction) {
                let r = t.out._zod.run(e, n);
                return r instanceof Promise
                  ? r.then((e) => nW(e, t.in, n))
                  : nW(r, t.in, n);
              }
              let r = t.in._zod.run(e, n);
              return r instanceof Promise
                ? r.then((e) => nW(e, t.out, n))
                : nW(r, t.out, n);
            });
        });
      function nW(e, t, n) {
        return e.issues.length
          ? ((e.aborted = !0), e)
          : t._zod.run({ value: e.value, issues: e.issues }, n);
      }
      let nU = f("$ZodCodec", (e, t) => {
        tx.init(e, t),
          b(e._zod, "values", () => t.in._zod.values),
          b(e._zod, "optin", () => t.in._zod.optin),
          b(e._zod, "optout", () => t.out._zod.optout),
          b(e._zod, "propValues", () => t.in._zod.propValues),
          (e._zod.parse = (e, n) => {
            if ("forward" === (n.direction || "forward")) {
              let r = t.in._zod.run(e, n);
              return r instanceof Promise
                ? r.then((e) => nV(e, t, n))
                : nV(r, t, n);
            }
            {
              let r = t.out._zod.run(e, n);
              return r instanceof Promise
                ? r.then((e) => nV(e, t, n))
                : nV(r, t, n);
            }
          });
      });
      function nV(e, t, n) {
        if (e.issues.length) return (e.aborted = !0), e;
        if ("forward" === (n.direction || "forward")) {
          let r = t.transform(e.value, e);
          return r instanceof Promise
            ? r.then((r) => nJ(e, r, t.out, n))
            : nJ(e, r, t.out, n);
        }
        {
          let r = t.reverseTransform(e.value, e);
          return r instanceof Promise
            ? r.then((r) => nJ(e, r, t.in, n))
            : nJ(e, r, t.in, n);
        }
      }
      function nJ(e, t, n, r) {
        return e.issues.length
          ? ((e.aborted = !0), e)
          : n._zod.run({ value: t, issues: e.issues }, r);
      }
      let nQ = f("$ZodReadonly", (e, t) => {
        tx.init(e, t),
          b(e._zod, "propValues", () => t.innerType._zod.propValues),
          b(e._zod, "values", () => t.innerType._zod.values),
          b(e._zod, "optin", () => t.innerType?._zod?.optin),
          b(e._zod, "optout", () => t.innerType?._zod?.optout),
          (e._zod.parse = (e, n) => {
            if ("backward" === n.direction) return t.innerType._zod.run(e, n);
            let r = t.innerType._zod.run(e, n);
            return r instanceof Promise ? r.then(nH) : nH(r);
          });
      });
      function nH(e) {
        return (e.value = Object.freeze(e.value)), e;
      }
      let nY = f("$ZodTemplateLiteral", (e, t) => {
          tx.init(e, t);
          let n = [];
          for (let e of t.parts)
            if ("object" == typeof e && null !== e) {
              if (!e._zod.pattern)
                throw Error(
                  `Invalid template literal part, no pattern found: ${[...e._zod.traits].shift()}`,
                );
              let t =
                e._zod.pattern instanceof RegExp
                  ? e._zod.pattern.source
                  : e._zod.pattern;
              if (!t)
                throw Error(`Invalid template literal part: ${e._zod.traits}`);
              let r = +!!t.startsWith("^"),
                i = t.endsWith("$") ? t.length - 1 : t.length;
              n.push(t.slice(r, i));
            } else if (null === e || N.has(typeof e)) n.push(T(`${e}`));
            else throw Error(`Invalid template literal part: ${e}`);
          (e._zod.pattern = RegExp(`^${n.join("")}$`)),
            (e._zod.parse = (n, r) => (
              "string" != typeof n.value
                ? n.issues.push({
                    input: n.value,
                    inst: e,
                    expected: "string",
                    code: "invalid_type",
                  })
                : ((e._zod.pattern.lastIndex = 0),
                  e._zod.pattern.test(n.value) ||
                    n.issues.push({
                      input: n.value,
                      inst: e,
                      code: "invalid_format",
                      format: t.format ?? "template_literal",
                      pattern: e._zod.pattern.source,
                    })),
              n
            ));
        }),
        nX = f(
          "$ZodFunction",
          (e, t) => (
            tx.init(e, t),
            (e._def = t),
            (e._zod.def = t),
            (e.implement = (t) => {
              if ("function" != typeof t)
                throw Error("implement() must be called with a function");
              return function (...n) {
                let r = Reflect.apply(
                  t,
                  this,
                  e._def.input ? X(e._def.input, n) : n,
                );
                return e._def.output ? X(e._def.output, r) : r;
              };
            }),
            (e.implementAsync = (t) => {
              if ("function" != typeof t)
                throw Error("implementAsync() must be called with a function");
              return async function (...n) {
                let r = e._def.input ? await ee(e._def.input, n) : n,
                  i = await Reflect.apply(t, this, r);
                return e._def.output ? await ee(e._def.output, i) : i;
              };
            }),
            (e._zod.parse = (t, n) => (
              "function" != typeof t.value
                ? t.issues.push({
                    code: "invalid_type",
                    expected: "function",
                    input: t.value,
                    inst: e,
                  })
                : e._def.output && "promise" === e._def.output._zod.def.type
                  ? (t.value = e.implementAsync(t.value))
                  : (t.value = e.implement(t.value)),
              t
            )),
            (e.input = (...t) => {
              let n = e.constructor;
              return new n(
                Array.isArray(t[0])
                  ? {
                      type: "function",
                      input: new nE({ type: "tuple", items: t[0], rest: t[1] }),
                      output: e._def.output,
                    }
                  : { type: "function", input: t[0], output: e._def.output },
              );
            }),
            (e.output = (t) =>
              new e.constructor({
                type: "function",
                input: e._def.input,
                output: t,
              })),
            e
          ),
        ),
        nG = f("$ZodPromise", (e, t) => {
          tx.init(e, t),
            (e._zod.parse = (e, n) =>
              Promise.resolve(e.value).then((e) =>
                t.innerType._zod.run({ value: e, issues: [] }, n),
              ));
        }),
        n0 = f("$ZodLazy", (e, t) => {
          tx.init(e, t),
            b(e._zod, "innerType", () => t.getter()),
            b(e._zod, "pattern", () => e._zod.innerType?._zod?.pattern),
            b(e._zod, "propValues", () => e._zod.innerType?._zod?.propValues),
            b(e._zod, "optin", () => e._zod.innerType?._zod?.optin ?? void 0),
            b(e._zod, "optout", () => e._zod.innerType?._zod?.optout ?? void 0),
            (e._zod.parse = (t, n) => e._zod.innerType._zod.run(t, n));
        }),
        n1 = f("$ZodCustom", (e, t) => {
          tr.init(e, t),
            tx.init(e, t),
            (e._zod.parse = (e, t) => e),
            (e._zod.check = (n) => {
              let r = n.value,
                i = t.fn(r);
              if (i instanceof Promise) return i.then((t) => n2(t, n, r, e));
              n2(i, n, r, e);
            });
        });
      function n2(e, t, n, r) {
        if (!e) {
          let e = {
            code: "custom",
            input: n,
            inst: r,
            path: [...(r._zod.def.path ?? [])],
            continue: !r._zod.def.abort,
          };
          r._zod.def.params && (e.params = r._zod.def.params),
            t.issues.push(V(e));
        }
      }
      Symbol("ZodOutput"), Symbol("ZodInput");
      (o = globalThis).__zod_globalRegistry ??
        (o.__zod_globalRegistry = new (class e {
          constructor() {
            (this._map = new WeakMap()), (this._idmap = new Map());
          }
          add(e, ...t) {
            let n = t[0];
            return (
              this._map.set(e, n),
              n &&
                "object" == typeof n &&
                "id" in n &&
                this._idmap.set(n.id, e),
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
              let n = { ...(this.get(t) ?? {}) };
              delete n.id;
              let r = { ...n, ...this._map.get(e) };
              return Object.keys(r).length ? r : void 0;
            }
            return this._map.get(e);
          }
          has(e) {
            return this._map.has(e);
          }
        })());
      let n3 = globalThis.__zod_globalRegistry;
      function n4(e, t) {
        return new e({
          type: "string",
          format: "email",
          check: "string_format",
          abort: !1,
          ...Z(t),
        });
      }
      function n9(e, t) {
        return new e({
          type: "string",
          format: "guid",
          check: "string_format",
          abort: !1,
          ...Z(t),
        });
      }
      function n7(e, t) {
        return new e({
          type: "string",
          format: "uuid",
          check: "string_format",
          abort: !1,
          ...Z(t),
        });
      }
      function n6(e, t) {
        return new e({
          type: "string",
          format: "uuid",
          check: "string_format",
          abort: !1,
          version: "v4",
          ...Z(t),
        });
      }
      function n8(e, t) {
        return new e({
          type: "string",
          format: "uuid",
          check: "string_format",
          abort: !1,
          version: "v6",
          ...Z(t),
        });
      }
      function n5(e, t) {
        return new e({
          type: "string",
          format: "uuid",
          check: "string_format",
          abort: !1,
          version: "v7",
          ...Z(t),
        });
      }
      function re(e, t) {
        return new e({
          type: "string",
          format: "url",
          check: "string_format",
          abort: !1,
          ...Z(t),
        });
      }
      function rt(e, t) {
        return new e({
          type: "string",
          format: "emoji",
          check: "string_format",
          abort: !1,
          ...Z(t),
        });
      }
      function rn(e, t) {
        return new e({
          type: "string",
          format: "nanoid",
          check: "string_format",
          abort: !1,
          ...Z(t),
        });
      }
      function rr(e, t) {
        return new e({
          type: "string",
          format: "cuid",
          check: "string_format",
          abort: !1,
          ...Z(t),
        });
      }
      function ri(e, t) {
        return new e({
          type: "string",
          format: "cuid2",
          check: "string_format",
          abort: !1,
          ...Z(t),
        });
      }
      function ru(e, t) {
        return new e({
          type: "string",
          format: "ulid",
          check: "string_format",
          abort: !1,
          ...Z(t),
        });
      }
      function ro(e, t) {
        return new e({
          type: "string",
          format: "xid",
          check: "string_format",
          abort: !1,
          ...Z(t),
        });
      }
      function ra(e, t) {
        return new e({
          type: "string",
          format: "ksuid",
          check: "string_format",
          abort: !1,
          ...Z(t),
        });
      }
      function rs(e, t) {
        return new e({
          type: "string",
          format: "ipv4",
          check: "string_format",
          abort: !1,
          ...Z(t),
        });
      }
      function rl(e, t) {
        return new e({
          type: "string",
          format: "ipv6",
          check: "string_format",
          abort: !1,
          ...Z(t),
        });
      }
      function rc(e, t) {
        return new e({
          type: "string",
          format: "cidrv4",
          check: "string_format",
          abort: !1,
          ...Z(t),
        });
      }
      function rd(e, t) {
        return new e({
          type: "string",
          format: "cidrv6",
          check: "string_format",
          abort: !1,
          ...Z(t),
        });
      }
      function rf(e, t) {
        return new e({
          type: "string",
          format: "base64",
          check: "string_format",
          abort: !1,
          ...Z(t),
        });
      }
      function rp(e, t) {
        return new e({
          type: "string",
          format: "base64url",
          check: "string_format",
          abort: !1,
          ...Z(t),
        });
      }
      function rh(e, t) {
        return new e({
          type: "string",
          format: "e164",
          check: "string_format",
          abort: !1,
          ...Z(t),
        });
      }
      function rv(e, t) {
        return new e({
          type: "string",
          format: "jwt",
          check: "string_format",
          abort: !1,
          ...Z(t),
        });
      }
      function rm(e, t) {
        return new tu({ check: "less_than", ...Z(t), value: e, inclusive: !1 });
      }
      function rg(e, t) {
        return new tu({ check: "less_than", ...Z(t), value: e, inclusive: !0 });
      }
      function rD(e, t) {
        return new to({
          check: "greater_than",
          ...Z(t),
          value: e,
          inclusive: !1,
        });
      }
      function rC(e, t) {
        return new to({
          check: "greater_than",
          ...Z(t),
          value: e,
          inclusive: !0,
        });
      }
      function rB(e) {
        return rD(0, e);
      }
      function rE(e) {
        return rm(0, e);
      }
      function ry(e) {
        return rg(0, e);
      }
      function rw(e) {
        return rC(0, e);
      }
      function rb(e, t) {
        return new ta({ check: "multiple_of", ...Z(t), value: e });
      }
      function rA(e, t) {
        return new tc({ check: "max_size", ...Z(t), maximum: e });
      }
      function rF(e, t) {
        return new td({ check: "min_size", ...Z(t), minimum: e });
      }
      function r_(e, t) {
        return new tf({ check: "size_equals", ...Z(t), size: e });
      }
      function rk(e, t) {
        return new tp({ check: "max_length", ...Z(t), maximum: e });
      }
      function rx(e, t) {
        return new th({ check: "min_length", ...Z(t), minimum: e });
      }
      function rz(e, t) {
        return new tv({ check: "length_equals", ...Z(t), length: e });
      }
      function rO(e, t) {
        return new tg({
          check: "string_format",
          format: "regex",
          ...Z(t),
          pattern: e,
        });
      }
      function rS(e) {
        return new tD({ check: "string_format", format: "lowercase", ...Z(e) });
      }
      function rP(e) {
        return new tC({ check: "string_format", format: "uppercase", ...Z(e) });
      }
      function rN(e, t) {
        return new tB({
          check: "string_format",
          format: "includes",
          ...Z(t),
          includes: e,
        });
      }
      function rT(e, t) {
        return new tE({
          check: "string_format",
          format: "starts_with",
          ...Z(t),
          prefix: e,
        });
      }
      function rj(e, t) {
        return new ty({
          check: "string_format",
          format: "ends_with",
          ...Z(t),
          suffix: e,
        });
      }
      function rZ(e, t, n) {
        return new tb({ check: "property", property: e, schema: t, ...Z(n) });
      }
      function r$(e, t) {
        return new tA({ check: "mime_type", mime: e, ...Z(t) });
      }
      function rR(e) {
        return new tF({ check: "overwrite", tx: e });
      }
      function rI(e) {
        return rR((t) => t.normalize(e));
      }
      function rM() {
        return rR((e) => e.trim());
      }
      function rL() {
        return rR((e) => e.toLowerCase());
      }
      function rK() {
        return rR((e) => e.toUpperCase());
      }
      function rq() {
        return rR((e) =>
          e
            .toLowerCase()
            .trim()
            .replace(/[^\w\s-]/g, "")
            .replace(/[\s_-]+/g, "-")
            .replace(/^-+|-+$/g, ""),
        );
      }
      function rW(e, t, n, r = {}) {
        let i = Z(r),
          u = {
            ...Z(r),
            check: "string_format",
            type: "string",
            format: t,
            fn: "function" == typeof n ? n : (e) => n.test(e),
            ...i,
          };
        return n instanceof RegExp && (u.pattern = n), new e(u);
      }
      function rU(e) {
        let t = e?.target ?? "draft-2020-12";
        return (
          "draft-4" === t && (t = "draft-04"),
          "draft-7" === t && (t = "draft-07"),
          {
            processors: e.processors ?? {},
            metadataRegistry: e?.metadata ?? n3,
            target: t,
            unrepresentable: e?.unrepresentable ?? "throw",
            override: e?.override ?? (() => {}),
            io: e?.io ?? "output",
            counter: 0,
            seen: new Map(),
            cycles: e?.cycles ?? "ref",
            reused: e?.reused ?? "inline",
            external: e?.external ?? void 0,
          }
        );
      }
      function rV(e, t, n = { path: [], schemaPath: [] }) {
        var r;
        let i = e._zod.def,
          u = t.seen.get(e);
        if (u)
          return (
            u.count++, n.schemaPath.includes(e) && (u.cycle = n.path), u.schema
          );
        let o = { schema: {}, count: 1, cycle: void 0, path: n.path };
        t.seen.set(e, o);
        let a = e._zod.toJSONSchema?.();
        if (a) o.schema = a;
        else {
          let r = { ...n, schemaPath: [...n.schemaPath, e], path: n.path };
          if (e._zod.processJSONSchema)
            e._zod.processJSONSchema(t, o.schema, r);
          else {
            let n = o.schema,
              u = t.processors[i.type];
            if (!u)
              throw Error(
                `[toJSONSchema]: Non-representable type encountered: ${i.type}`,
              );
            u(e, t, n, r);
          }
          let u = e._zod.parent;
          u &&
            (o.ref || (o.ref = u), rV(u, t, r), (t.seen.get(u).isParent = !0));
        }
        let s = t.metadataRegistry.get(e);
        return (
          s && Object.assign(o.schema, s),
          "input" === t.io &&
            (function e(t, n) {
              let r = n ?? { seen: new Set() };
              if (r.seen.has(t)) return !1;
              r.seen.add(t);
              let i = t._zod.def;
              if ("transform" === i.type) return !0;
              if ("array" === i.type) return e(i.element, r);
              if ("set" === i.type) return e(i.valueType, r);
              if ("lazy" === i.type) return e(i.getter(), r);
              if (
                "promise" === i.type ||
                "optional" === i.type ||
                "nonoptional" === i.type ||
                "nullable" === i.type ||
                "readonly" === i.type ||
                "default" === i.type ||
                "prefault" === i.type
              )
                return e(i.innerType, r);
              if ("intersection" === i.type)
                return e(i.left, r) || e(i.right, r);
              if ("record" === i.type || "map" === i.type)
                return e(i.keyType, r) || e(i.valueType, r);
              if ("pipe" === i.type) return e(i.in, r) || e(i.out, r);
              if ("object" === i.type) {
                for (let t in i.shape) if (e(i.shape[t], r)) return !0;
                return !1;
              }
              if ("union" === i.type) {
                for (let t of i.options) if (e(t, r)) return !0;
                return !1;
              }
              if ("tuple" === i.type) {
                for (let t of i.items) if (e(t, r)) return !0;
                if (i.rest && e(i.rest, r)) return !0;
              }
              return !1;
            })(e) &&
            (delete o.schema.examples, delete o.schema.default),
          "input" === t.io &&
            o.schema._prefault &&
            ((r = o.schema).default ?? (r.default = o.schema._prefault)),
          delete o.schema._prefault,
          t.seen.get(e).schema
        );
      }
      function rJ(e, t) {
        let n = e.seen.get(t);
        if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
        let r = new Map();
        for (let t of e.seen.entries()) {
          let n = e.metadataRegistry.get(t[0])?.id;
          if (n) {
            let e = r.get(n);
            if (e && e !== t[0])
              throw Error(
                `Duplicate schema id "${n}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`,
              );
            r.set(n, t[0]);
          }
        }
        let i = (t) => {
          if (t[1].schema.$ref) return;
          let r = t[1],
            { ref: i, defId: u } = ((t) => {
              let r = "draft-2020-12" === e.target ? "$defs" : "definitions";
              if (e.external) {
                let n = e.external.registry.get(t[0])?.id,
                  i = e.external.uri ?? ((e) => e);
                if (n) return { ref: i(n) };
                let u = t[1].defId ?? t[1].schema.id ?? `schema${e.counter++}`;
                return (
                  (t[1].defId = u),
                  { defId: u, ref: `${i("__shared")}#/${r}/${u}` }
                );
              }
              if (t[1] === n) return { ref: "#" };
              let i = `#/${r}/`,
                u = t[1].schema.id ?? `__schema${e.counter++}`;
              return { defId: u, ref: i + u };
            })(t);
          (r.def = { ...r.schema }), u && (r.defId = u);
          let o = r.schema;
          for (let e in o) delete o[e];
          o.$ref = i;
        };
        if ("throw" === e.cycles)
          for (let t of e.seen.entries()) {
            let e = t[1];
            if (e.cycle)
              throw Error(`Cycle detected: #/${e.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
          }
        for (let n of e.seen.entries()) {
          let r = n[1];
          if (t === n[0]) {
            i(n);
            continue;
          }
          if (e.external) {
            let r = e.external.registry.get(n[0])?.id;
            if (t !== n[0] && r) {
              i(n);
              continue;
            }
          }
          if (
            e.metadataRegistry.get(n[0])?.id ||
            r.cycle ||
            (r.count > 1 && "ref" === e.reused)
          ) {
            i(n);
            continue;
          }
        }
      }
      function rQ(e, t) {
        let n = e.seen.get(t);
        if (!n) throw Error("Unprocessed schema. This is a bug in Zod.");
        let r = (t) => {
          let n = e.seen.get(t);
          if (null === n.ref) return;
          let i = n.def ?? n.schema,
            u = { ...i },
            o = n.ref;
          if (((n.ref = null), o)) {
            r(o);
            let n = e.seen.get(o),
              a = n.schema;
            if (
              (a.$ref &&
              ("draft-07" === e.target ||
                "draft-04" === e.target ||
                "openapi-3.0" === e.target)
                ? ((i.allOf = i.allOf ?? []), i.allOf.push(a))
                : Object.assign(i, a),
              Object.assign(i, u),
              t._zod.parent === o)
            )
              for (let e in i)
                "$ref" !== e && "allOf" !== e && (e in u || delete i[e]);
            if (a.$ref && n.def)
              for (let e in i)
                "$ref" !== e &&
                  "allOf" !== e &&
                  e in n.def &&
                  JSON.stringify(i[e]) === JSON.stringify(n.def[e]) &&
                  delete i[e];
          }
          let a = t._zod.parent;
          if (a && a !== o) {
            r(a);
            let t = e.seen.get(a);
            if (t?.schema.$ref && ((i.$ref = t.schema.$ref), t.def))
              for (let e in i)
                "$ref" !== e &&
                  "allOf" !== e &&
                  e in t.def &&
                  JSON.stringify(i[e]) === JSON.stringify(t.def[e]) &&
                  delete i[e];
          }
          e.override({ zodSchema: t, jsonSchema: i, path: n.path ?? [] });
        };
        for (let t of [...e.seen.entries()].reverse()) r(t[0]);
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
          let n = e.external.registry.get(t)?.id;
          if (!n) throw Error("Schema is missing an `id` property");
          i.$id = e.external.uri(n);
        }
        Object.assign(i, n.def ?? n.schema);
        let u = e.external?.defs ?? {};
        for (let t of e.seen.entries()) {
          let e = t[1];
          e.def && e.defId && (u[e.defId] = e.def);
        }
        e.external ||
          (Object.keys(u).length > 0 &&
            ("draft-2020-12" === e.target
              ? (i.$defs = u)
              : (i.definitions = u)));
        try {
          let n = JSON.parse(JSON.stringify(i));
          return (
            Object.defineProperty(n, "~standard", {
              value: {
                ...t["~standard"],
                jsonSchema: {
                  input: rH(t, "input", e.processors),
                  output: rH(t, "output", e.processors),
                },
              },
              enumerable: !1,
              writable: !1,
            }),
            n
          );
        } catch (e) {
          throw Error("Error converting schema to JSON.");
        }
      }
      let rH =
          (e, t, n = {}) =>
          (r) => {
            let { libraryOptions: i, target: u } = r ?? {},
              o = rU({ ...(i ?? {}), target: u, io: t, processors: n });
            return rV(e, o), rJ(o, e), rQ(o, e);
          },
        rY = {
          guid: "uuid",
          url: "uri",
          datetime: "date-time",
          json_string: "json-string",
          regex: "",
        },
        rX = (e, t, n, r) => {
          let i = e._zod.def,
            u = !1 === i.inclusive,
            o = i.options.map((e, n) =>
              rV(e, t, { ...r, path: [...r.path, u ? "oneOf" : "anyOf", n] }),
            );
          u ? (n.oneOf = o) : (n.anyOf = o);
        },
        rG = (e, t, n, r) => {
          let i = e._zod.def;
          rV(i.innerType, t, r), (t.seen.get(e).ref = i.innerType);
        },
        r0 = f("ZodISODateTime", (e, t) => {
          tK.init(e, t), iD.init(e, t);
        });
      function r1(e) {
        return new r0({
          type: "string",
          format: "datetime",
          check: "string_format",
          offset: !1,
          local: !1,
          precision: null,
          ...Z(e),
        });
      }
      let r2 = f("ZodISODate", (e, t) => {
        tq.init(e, t), iD.init(e, t);
      });
      function r3(e) {
        return new r2({
          type: "string",
          format: "date",
          check: "string_format",
          ...Z(e),
        });
      }
      let r4 = f("ZodISOTime", (e, t) => {
        tW.init(e, t), iD.init(e, t);
      });
      function r9(e) {
        return new r4({
          type: "string",
          format: "time",
          check: "string_format",
          precision: null,
          ...Z(e),
        });
      }
      let r7 = f("ZodISODuration", (e, t) => {
        tU.init(e, t), iD.init(e, t);
      });
      function r6(e) {
        return new r7({
          type: "string",
          format: "duration",
          check: "string_format",
          ...Z(e),
        });
      }
      let r8 = (e, t) => {
        Q.init(e, t),
          (e.name = "ZodError"),
          Object.defineProperties(e, {
            format: {
              value: (t) =>
                (function (e, t = (e) => e.message) {
                  let n = { _errors: [] },
                    r = (e) => {
                      for (let i of e.issues)
                        if ("invalid_union" === i.code && i.errors.length)
                          i.errors.map((e) => r({ issues: e }));
                        else if ("invalid_key" === i.code)
                          r({ issues: i.issues });
                        else if ("invalid_element" === i.code)
                          r({ issues: i.issues });
                        else if (0 === i.path.length) n._errors.push(t(i));
                        else {
                          let e = n,
                            r = 0;
                          for (; r < i.path.length; ) {
                            let n = i.path[r];
                            r === i.path.length - 1
                              ? ((e[n] = e[n] || { _errors: [] }),
                                e[n]._errors.push(t(i)))
                              : (e[n] = e[n] || { _errors: [] }),
                              (e = e[n]),
                              r++;
                          }
                        }
                    };
                  return r(e), n;
                })(e, t),
            },
            flatten: {
              value: (t) =>
                (function (e, t = (e) => e.message) {
                  let n = {},
                    r = [];
                  for (let i of e.issues)
                    i.path.length > 0
                      ? ((n[i.path[0]] = n[i.path[0]] || []),
                        n[i.path[0]].push(t(i)))
                      : r.push(t(i));
                  return { formErrors: r, fieldErrors: n };
                })(e, t),
            },
            addIssue: {
              value: (t) => {
                e.issues.push(t), (e.message = JSON.stringify(e.issues, C, 2));
              },
            },
            addIssues: {
              value: (t) => {
                e.issues.push(...t),
                  (e.message = JSON.stringify(e.issues, C, 2));
              },
            },
            isEmpty: { get: () => 0 === e.issues.length },
          });
      };
      f("ZodError", r8);
      let r5 = f("ZodError", r8, { Parent: Error }),
        ie = Y(r5),
        it = G(r5),
        ir = et(r5),
        ii = er(r5),
        iu = (e, t, n) => {
          let r = n
            ? Object.assign(n, { direction: "backward" })
            : { direction: "backward" };
          return Y(r5)(e, t, r);
        },
        io = (e, t, n) => Y(r5)(e, t, n),
        ia = async (e, t, n) => {
          let r = n
            ? Object.assign(n, { direction: "backward" })
            : { direction: "backward" };
          return G(r5)(e, t, r);
        },
        is = async (e, t, n) => G(r5)(e, t, n),
        il = (e, t, n) => {
          let r = n
            ? Object.assign(n, { direction: "backward" })
            : { direction: "backward" };
          return et(r5)(e, t, r);
        },
        ic = (e, t, n) => et(r5)(e, t, n),
        id = async (e, t, n) => {
          let r = n
            ? Object.assign(n, { direction: "backward" })
            : { direction: "backward" };
          return er(r5)(e, t, r);
        },
        ip = async (e, t, n) => er(r5)(e, t, n),
        ih = f(
          "ZodType",
          (e, t) => (
            tx.init(e, t),
            Object.assign(e["~standard"], {
              jsonSchema: { input: rH(e, "input"), output: rH(e, "output") },
            }),
            (e.toJSONSchema = (
              (e, t = {}) =>
              (n) => {
                let r = rU({ ...n, processors: t });
                return rV(e, r), rJ(r, e), rQ(r, e);
              }
            )(e, {})),
            (e.def = t),
            (e.type = t.type),
            Object.defineProperty(e, "_def", { value: t }),
            (e.check = (...n) =>
              e.clone(
                F(t, {
                  checks: [
                    ...(t.checks ?? []),
                    ...n.map((e) =>
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
              )),
            (e.with = e.check),
            (e.clone = (t, n) => j(e, t, n)),
            (e.brand = () => e),
            (e.register = (t, n) => (t.add(e, n), e)),
            (e.parse = (t, n) => ie(e, t, n, { callee: e.parse })),
            (e.safeParse = (t, n) => ir(e, t, n)),
            (e.parseAsync = async (t, n) =>
              it(e, t, n, { callee: e.parseAsync })),
            (e.safeParseAsync = async (t, n) => ii(e, t, n)),
            (e.spa = e.safeParseAsync),
            (e.encode = (t, n) => iu(e, t, n)),
            (e.decode = (t, n) => io(e, t, n)),
            (e.encodeAsync = async (t, n) => ia(e, t, n)),
            (e.decodeAsync = async (t, n) => is(e, t, n)),
            (e.safeEncode = (t, n) => il(e, t, n)),
            (e.safeDecode = (t, n) => ic(e, t, n)),
            (e.safeEncodeAsync = async (t, n) => id(e, t, n)),
            (e.safeDecodeAsync = async (t, n) => ip(e, t, n)),
            (e.refine = (t, n) => e.check(oM(t, n))),
            (e.superRefine = (t) => e.check(oL(t))),
            (e.overwrite = (t) => e.check(rR(t))),
            (e.optional = () => oo(e)),
            (e.exactOptional = () => os(e)),
            (e.nullable = () => oc(e)),
            (e.nullish = () => oo(oc(e))),
            (e.nonoptional = (t) => og(e, t)),
            (e.array = () => uj(e)),
            (e.or = (t) => uK([e, t])),
            (e.and = (t) => uQ(e, t)),
            (e.transform = (t) => oA(e, oi(t))),
            (e.default = (t) => op(e, t)),
            (e.prefault = (t) => ov(e, t)),
            (e.catch = (t) => oE(e, t)),
            (e.pipe = (t) => oA(e, t)),
            (e.readonly = () => ox(e)),
            (e.describe = (t) => {
              let n = e.clone();
              return n3.add(n, { description: t }), n;
            }),
            Object.defineProperty(e, "description", {
              get: () => n3.get(e)?.description,
              configurable: !0,
            }),
            (e.meta = (...t) => {
              if (0 === t.length) return n3.get(e);
              let n = e.clone();
              return n3.add(n, t[0]), n;
            }),
            (e.isOptional = () => e.safeParse(void 0).success),
            (e.isNullable = () => e.safeParse(null).success),
            (e.apply = (t) => t(e)),
            e
          ),
        ),
        iv = f("_ZodString", (e, t) => {
          tz.init(e, t),
            ih.init(e, t),
            (e._zod.processJSONSchema = (t, n, r) =>
              ((e, t, n, r) => {
                n.type = "string";
                let {
                  minimum: i,
                  maximum: u,
                  format: o,
                  patterns: a,
                  contentEncoding: s,
                } = e._zod.bag;
                if (
                  ("number" == typeof i && (n.minLength = i),
                  "number" == typeof u && (n.maxLength = u),
                  o &&
                    ((n.format = rY[o] ?? o),
                    "" === n.format && delete n.format,
                    "time" === o && delete n.format),
                  s && (n.contentEncoding = s),
                  a && a.size > 0)
                ) {
                  let e = [...a];
                  1 === e.length
                    ? (n.pattern = e[0].source)
                    : e.length > 1 &&
                      (n.allOf = [
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
              })(e, t, n, 0));
          let n = e._zod.bag;
          (e.format = n.format ?? null),
            (e.minLength = n.minimum ?? null),
            (e.maxLength = n.maximum ?? null),
            (e.regex = (...t) => e.check(rO(...t))),
            (e.includes = (...t) => e.check(rN(...t))),
            (e.startsWith = (...t) => e.check(rT(...t))),
            (e.endsWith = (...t) => e.check(rj(...t))),
            (e.min = (...t) => e.check(rx(...t))),
            (e.max = (...t) => e.check(rk(...t))),
            (e.length = (...t) => e.check(rz(...t))),
            (e.nonempty = (...t) => e.check(rx(1, ...t))),
            (e.lowercase = (t) => e.check(rS(t))),
            (e.uppercase = (t) => e.check(rP(t))),
            (e.trim = () => e.check(rM())),
            (e.normalize = (...t) => e.check(rI(...t))),
            (e.toLowerCase = () => e.check(rL())),
            (e.toUpperCase = () => e.check(rK())),
            (e.slugify = () => e.check(rq()));
        }),
        im = f("ZodString", (e, t) => {
          tz.init(e, t),
            iv.init(e, t),
            (e.email = (t) => e.check(n4(iC, t))),
            (e.url = (t) => e.check(re(ik, t))),
            (e.jwt = (t) => e.check(rv(i6, t))),
            (e.emoji = (t) => e.check(rt(iO, t))),
            (e.guid = (t) => e.check(n9(iE, t))),
            (e.uuid = (t) => e.check(n7(iw, t))),
            (e.uuidv4 = (t) => e.check(n6(iw, t))),
            (e.uuidv6 = (t) => e.check(n8(iw, t))),
            (e.uuidv7 = (t) => e.check(n5(iw, t))),
            (e.nanoid = (t) => e.check(rn(iP, t))),
            (e.guid = (t) => e.check(n9(iE, t))),
            (e.cuid = (t) => e.check(rr(iT, t))),
            (e.cuid2 = (t) => e.check(ri(iZ, t))),
            (e.ulid = (t) => e.check(ru(iR, t))),
            (e.base64 = (t) => e.check(rf(i1, t))),
            (e.base64url = (t) => e.check(rp(i3, t))),
            (e.xid = (t) => e.check(ro(iM, t))),
            (e.ksuid = (t) => e.check(ra(iK, t))),
            (e.ipv4 = (t) => e.check(rs(iW, t))),
            (e.ipv6 = (t) => e.check(rl(iQ, t))),
            (e.cidrv4 = (t) => e.check(rc(iY, t))),
            (e.cidrv6 = (t) => e.check(rd(iG, t))),
            (e.e164 = (t) => e.check(rh(i9, t))),
            (e.datetime = (t) => e.check(r1(t))),
            (e.date = (t) => e.check(r3(t))),
            (e.time = (t) => e.check(r9(t))),
            (e.duration = (t) => e.check(r6(t)));
        });
      function ig(e) {
        return new im({ type: "string", ...Z(e) });
      }
      let iD = f("ZodStringFormat", (e, t) => {
          tO.init(e, t), iv.init(e, t);
        }),
        iC = f("ZodEmail", (e, t) => {
          tN.init(e, t), iD.init(e, t);
        });
      function iB(e) {
        return n4(iC, e);
      }
      let iE = f("ZodGUID", (e, t) => {
        tS.init(e, t), iD.init(e, t);
      });
      function iy(e) {
        return n9(iE, e);
      }
      let iw = f("ZodUUID", (e, t) => {
        tP.init(e, t), iD.init(e, t);
      });
      function ib(e) {
        return n7(iw, e);
      }
      function iA(e) {
        return n6(iw, e);
      }
      function iF(e) {
        return n8(iw, e);
      }
      function i_(e) {
        return n5(iw, e);
      }
      let ik = f("ZodURL", (e, t) => {
        tT.init(e, t), iD.init(e, t);
      });
      function ix(e) {
        return re(ik, e);
      }
      function iz(e) {
        return re(ik, { protocol: /^https?$/, hostname: eP, ...Z(e) });
      }
      let iO = f("ZodEmoji", (e, t) => {
        tj.init(e, t), iD.init(e, t);
      });
      function iS(e) {
        return rt(iO, e);
      }
      let iP = f("ZodNanoID", (e, t) => {
        tZ.init(e, t), iD.init(e, t);
      });
      function iN(e) {
        return rn(iP, e);
      }
      let iT = f("ZodCUID", (e, t) => {
        t$.init(e, t), iD.init(e, t);
      });
      function ij(e) {
        return rr(iT, e);
      }
      let iZ = f("ZodCUID2", (e, t) => {
        tR.init(e, t), iD.init(e, t);
      });
      function i$(e) {
        return ri(iZ, e);
      }
      let iR = f("ZodULID", (e, t) => {
        tI.init(e, t), iD.init(e, t);
      });
      function iI(e) {
        return ru(iR, e);
      }
      let iM = f("ZodXID", (e, t) => {
        tM.init(e, t), iD.init(e, t);
      });
      function iL(e) {
        return ro(iM, e);
      }
      let iK = f("ZodKSUID", (e, t) => {
        tL.init(e, t), iD.init(e, t);
      });
      function iq(e) {
        return ra(iK, e);
      }
      let iW = f("ZodIPv4", (e, t) => {
        tV.init(e, t), iD.init(e, t);
      });
      function iU(e) {
        return rs(iW, e);
      }
      let iV = f("ZodMAC", (e, t) => {
        tQ.init(e, t), iD.init(e, t);
      });
      function iJ(e) {
        return new iV({
          type: "string",
          format: "mac",
          check: "string_format",
          abort: !1,
          ...Z(e),
        });
      }
      let iQ = f("ZodIPv6", (e, t) => {
        tJ.init(e, t), iD.init(e, t);
      });
      function iH(e) {
        return rl(iQ, e);
      }
      let iY = f("ZodCIDRv4", (e, t) => {
        tH.init(e, t), iD.init(e, t);
      });
      function iX(e) {
        return rc(iY, e);
      }
      let iG = f("ZodCIDRv6", (e, t) => {
        tY.init(e, t), iD.init(e, t);
      });
      function i0(e) {
        return rd(iG, e);
      }
      let i1 = f("ZodBase64", (e, t) => {
        tG.init(e, t), iD.init(e, t);
      });
      function i2(e) {
        return rf(i1, e);
      }
      let i3 = f("ZodBase64URL", (e, t) => {
        t0.init(e, t), iD.init(e, t);
      });
      function i4(e) {
        return rp(i3, e);
      }
      let i9 = f("ZodE164", (e, t) => {
        t1.init(e, t), iD.init(e, t);
      });
      function i7(e) {
        return rh(i9, e);
      }
      let i6 = f("ZodJWT", (e, t) => {
        t2.init(e, t), iD.init(e, t);
      });
      function i8(e) {
        return rv(i6, e);
      }
      let i5 = f("ZodCustomStringFormat", (e, t) => {
        t3.init(e, t), iD.init(e, t);
      });
      function ue(e, t, n = {}) {
        return rW(i5, e, t, n);
      }
      function ut(e) {
        return rW(i5, "hostname", eS, e);
      }
      function un(e) {
        return rW(i5, "hex", eQ, e);
      }
      function ur(e, t) {
        let n = t?.enc ?? "hex",
          r = `${e}_${n}`,
          i = s[r];
        if (!i) throw Error(`Unrecognized hash format: ${r}`);
        return rW(i5, r, i, t);
      }
      let ui = f("ZodNumber", (e, t) => {
        t4.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) =>
            ((e, t, n, r) => {
              let {
                minimum: i,
                maximum: u,
                format: o,
                multipleOf: a,
                exclusiveMaximum: s,
                exclusiveMinimum: l,
              } = e._zod.bag;
              "string" == typeof o && o.includes("int")
                ? (n.type = "integer")
                : (n.type = "number"),
                "number" == typeof l &&
                  ("draft-04" === t.target || "openapi-3.0" === t.target
                    ? ((n.minimum = l), (n.exclusiveMinimum = !0))
                    : (n.exclusiveMinimum = l)),
                "number" == typeof i &&
                  ((n.minimum = i),
                  "number" == typeof l &&
                    "draft-04" !== t.target &&
                    (l >= i ? delete n.minimum : delete n.exclusiveMinimum)),
                "number" == typeof s &&
                  ("draft-04" === t.target || "openapi-3.0" === t.target
                    ? ((n.maximum = s), (n.exclusiveMaximum = !0))
                    : (n.exclusiveMaximum = s)),
                "number" == typeof u &&
                  ((n.maximum = u),
                  "number" == typeof s &&
                    "draft-04" !== t.target &&
                    (s <= u ? delete n.maximum : delete n.exclusiveMaximum)),
                "number" == typeof a && (n.multipleOf = a);
            })(e, t, n, 0)),
          (e.gt = (t, n) => e.check(rD(t, n))),
          (e.gte = (t, n) => e.check(rC(t, n))),
          (e.min = (t, n) => e.check(rC(t, n))),
          (e.lt = (t, n) => e.check(rm(t, n))),
          (e.lte = (t, n) => e.check(rg(t, n))),
          (e.max = (t, n) => e.check(rg(t, n))),
          (e.int = (t) => e.check(ua(t))),
          (e.safe = (t) => e.check(ua(t))),
          (e.positive = (t) => e.check(rD(0, t))),
          (e.nonnegative = (t) => e.check(rC(0, t))),
          (e.negative = (t) => e.check(rm(0, t))),
          (e.nonpositive = (t) => e.check(rg(0, t))),
          (e.multipleOf = (t, n) => e.check(rb(t, n))),
          (e.step = (t, n) => e.check(rb(t, n))),
          (e.finite = () => e);
        let n = e._zod.bag;
        (e.minValue =
          Math.max(n.minimum ?? -1 / 0, n.exclusiveMinimum ?? -1 / 0) ?? null),
          (e.maxValue =
            Math.min(n.maximum ?? 1 / 0, n.exclusiveMaximum ?? 1 / 0) ?? null),
          (e.isInt =
            (n.format ?? "").includes("int") ||
            Number.isSafeInteger(n.multipleOf ?? 0.5)),
          (e.isFinite = !0),
          (e.format = n.format ?? null);
      });
      function uu(e) {
        return new ui({ type: "number", checks: [], ...Z(e) });
      }
      let uo = f("ZodNumberFormat", (e, t) => {
        t9.init(e, t), ui.init(e, t);
      });
      function ua(e) {
        return new uo({
          type: "number",
          check: "number_format",
          abort: !1,
          format: "safeint",
          ...Z(e),
        });
      }
      function us(e) {
        return new uo({
          type: "number",
          check: "number_format",
          abort: !1,
          format: "float32",
          ...Z(e),
        });
      }
      function ul(e) {
        return new uo({
          type: "number",
          check: "number_format",
          abort: !1,
          format: "float64",
          ...Z(e),
        });
      }
      function uc(e) {
        return new uo({
          type: "number",
          check: "number_format",
          abort: !1,
          format: "int32",
          ...Z(e),
        });
      }
      function ud(e) {
        return new uo({
          type: "number",
          check: "number_format",
          abort: !1,
          format: "uint32",
          ...Z(e),
        });
      }
      let uf = f("ZodBoolean", (e, t) => {
        t7.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (e, t, n) => {
            t.type = "boolean";
          });
      });
      function up(e) {
        return new uf({ type: "boolean", ...Z(e) });
      }
      let uh = f("ZodBigInt", (e, t) => {
        t6.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, r) => {
              if ("throw" === t.unrepresentable)
                throw Error("BigInt cannot be represented in JSON Schema");
            })(0, e, 0, 0)),
          (e.gte = (t, n) => e.check(rC(t, n))),
          (e.min = (t, n) => e.check(rC(t, n))),
          (e.gt = (t, n) => e.check(rD(t, n))),
          (e.gte = (t, n) => e.check(rC(t, n))),
          (e.min = (t, n) => e.check(rC(t, n))),
          (e.lt = (t, n) => e.check(rm(t, n))),
          (e.lte = (t, n) => e.check(rg(t, n))),
          (e.max = (t, n) => e.check(rg(t, n))),
          (e.positive = (t) => e.check(rD(BigInt(0), t))),
          (e.negative = (t) => e.check(rm(BigInt(0), t))),
          (e.nonpositive = (t) => e.check(rg(BigInt(0), t))),
          (e.nonnegative = (t) => e.check(rC(BigInt(0), t))),
          (e.multipleOf = (t, n) => e.check(rb(t, n)));
        let n = e._zod.bag;
        (e.minValue = n.minimum ?? null),
          (e.maxValue = n.maximum ?? null),
          (e.format = n.format ?? null);
      });
      function uv(e) {
        return new uh({ type: "bigint", ...Z(e) });
      }
      let um = f("ZodBigIntFormat", (e, t) => {
        t8.init(e, t), uh.init(e, t);
      });
      function ug(e) {
        return new um({
          type: "bigint",
          check: "bigint_format",
          abort: !1,
          format: "int64",
          ...Z(e),
        });
      }
      function uD(e) {
        return new um({
          type: "bigint",
          check: "bigint_format",
          abort: !1,
          format: "uint64",
          ...Z(e),
        });
      }
      let uC = f("ZodSymbol", (e, t) => {
        t5.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, r) => {
              if ("throw" === t.unrepresentable)
                throw Error("Symbols cannot be represented in JSON Schema");
            })(0, e, 0, 0));
      });
      function uB(e) {
        return new uC({ type: "symbol", ...Z(e) });
      }
      let uE = f("ZodUndefined", (e, t) => {
        ne.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, r) => {
              if ("throw" === t.unrepresentable)
                throw Error("Undefined cannot be represented in JSON Schema");
            })(0, e, 0, 0));
      });
      function uy(e) {
        return new uE({ type: "undefined", ...Z(e) });
      }
      let uw = f("ZodNull", (e, t) => {
        nt.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (e, t, n) => {
            "openapi-3.0" === e.target
              ? ((t.type = "string"), (t.nullable = !0), (t.enum = [null]))
              : (t.type = "null");
          });
      });
      function ub(e) {
        return new uw({ type: "null", ...Z(e) });
      }
      let uA = f("ZodAny", (e, t) => {
        nn.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (e, t, n) => {});
      });
      function uF() {
        return new uA({ type: "any" });
      }
      let u_ = f("ZodUnknown", (e, t) => {
        nr.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (e, t, n) => {});
      });
      function uk() {
        return new u_({ type: "unknown" });
      }
      let ux = f("ZodNever", (e, t) => {
        ni.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (e, t, n) => {
            t.not = {};
          });
      });
      function uz(e) {
        return new ux({ type: "never", ...Z(e) });
      }
      let uO = f("ZodVoid", (e, t) => {
        nu.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, r) => {
              if ("throw" === t.unrepresentable)
                throw Error("Void cannot be represented in JSON Schema");
            })(0, e, 0, 0));
      });
      function uS(e) {
        return new uO({ type: "void", ...Z(e) });
      }
      let uP = f("ZodDate", (e, t) => {
        no.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, r) => {
              if ("throw" === t.unrepresentable)
                throw Error("Date cannot be represented in JSON Schema");
            })(0, e, 0, 0)),
          (e.min = (t, n) => e.check(rC(t, n))),
          (e.max = (t, n) => e.check(rg(t, n)));
        let n = e._zod.bag;
        (e.minDate = n.minimum ? new Date(n.minimum) : null),
          (e.maxDate = n.maximum ? new Date(n.maximum) : null);
      });
      function uN(e) {
        return new uP({ type: "date", ...Z(e) });
      }
      let uT = f("ZodArray", (e, t) => {
        ns.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) =>
            ((e, t, n, r) => {
              let i = e._zod.def,
                { minimum: u, maximum: o } = e._zod.bag;
              "number" == typeof u && (n.minItems = u),
                "number" == typeof o && (n.maxItems = o),
                (n.type = "array"),
                (n.items = rV(i.element, t, {
                  ...r,
                  path: [...r.path, "items"],
                }));
            })(e, t, n, r)),
          (e.element = t.element),
          (e.min = (t, n) => e.check(rx(t, n))),
          (e.nonempty = (t) => e.check(rx(1, t))),
          (e.max = (t, n) => e.check(rk(t, n))),
          (e.length = (t, n) => e.check(rz(t, n))),
          (e.unwrap = () => e.element);
      });
      function uj(e, t) {
        return new uT({ type: "array", element: e, ...Z(t) });
      }
      function uZ(e) {
        return u6(Object.keys(e._zod.def.shape));
      }
      let u$ = f("ZodObject", (e, t) => {
        np.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) =>
            ((e, t, n, r) => {
              let i = e._zod.def;
              (n.type = "object"), (n.properties = {});
              let u = i.shape;
              for (let e in u)
                n.properties[e] = rV(u[e], t, {
                  ...r,
                  path: [...r.path, "properties", e],
                });
              let o = new Set(
                [...new Set(Object.keys(u))].filter((e) => {
                  let n = i.shape[e]._zod;
                  return "input" === t.io
                    ? void 0 === n.optin
                    : void 0 === n.optout;
                }),
              );
              o.size > 0 && (n.required = Array.from(o)),
                i.catchall?._zod.def.type === "never"
                  ? (n.additionalProperties = !1)
                  : i.catchall
                    ? i.catchall &&
                      (n.additionalProperties = rV(i.catchall, t, {
                        ...r,
                        path: [...r.path, "additionalProperties"],
                      }))
                    : "output" === t.io && (n.additionalProperties = !1);
            })(e, t, n, r)),
          b(e, "shape", () => t.shape),
          (e.keyof = () => u6(Object.keys(e._zod.def.shape))),
          (e.catchall = (t) => e.clone({ ...e._zod.def, catchall: t })),
          (e.passthrough = () => e.clone({ ...e._zod.def, catchall: uk() })),
          (e.loose = () => e.clone({ ...e._zod.def, catchall: uk() })),
          (e.strict = () => e.clone({ ...e._zod.def, catchall: uz() })),
          (e.strip = () => e.clone({ ...e._zod.def, catchall: void 0 })),
          (e.extend = (t) =>
            (function (e, t) {
              if (!O(t))
                throw Error("Invalid input to extend: expected a plain object");
              let n = e._zod.def.checks;
              if (n && n.length > 0) {
                let n = e._zod.def.shape;
                for (let e in t)
                  if (void 0 !== Object.getOwnPropertyDescriptor(n, e))
                    throw Error(
                      "Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.",
                    );
              }
              let r = F(e._zod.def, {
                get shape() {
                  let n = { ...e._zod.def.shape, ...t };
                  return A(this, "shape", n), n;
                },
              });
              return j(e, r);
            })(e, t)),
          (e.safeExtend = (t) =>
            (function (e, t) {
              if (!O(t))
                throw Error(
                  "Invalid input to safeExtend: expected a plain object",
                );
              let n = F(e._zod.def, {
                get shape() {
                  let n = { ...e._zod.def.shape, ...t };
                  return A(this, "shape", n), n;
                },
              });
              return j(e, n);
            })(e, t)),
          (e.merge = (t) => {
            let n;
            return (
              (n = F(e._zod.def, {
                get shape() {
                  let n = { ...e._zod.def.shape, ...t._zod.def.shape };
                  return A(this, "shape", n), n;
                },
                get catchall() {
                  return t._zod.def.catchall;
                },
                checks: [],
              })),
              j(e, n)
            );
          }),
          (e.pick = (t) =>
            (function (e, t) {
              let n = e._zod.def,
                r = n.checks;
              if (r && r.length > 0)
                throw Error(
                  ".pick() cannot be used on object schemas containing refinements",
                );
              let i = F(e._zod.def, {
                get shape() {
                  let e = {};
                  for (let r in t) {
                    if (!(r in n.shape))
                      throw Error(`Unrecognized key: "${r}"`);
                    t[r] && (e[r] = n.shape[r]);
                  }
                  return A(this, "shape", e), e;
                },
                checks: [],
              });
              return j(e, i);
            })(e, t)),
          (e.omit = (t) =>
            (function (e, t) {
              let n = e._zod.def,
                r = n.checks;
              if (r && r.length > 0)
                throw Error(
                  ".omit() cannot be used on object schemas containing refinements",
                );
              let i = F(e._zod.def, {
                get shape() {
                  let r = { ...e._zod.def.shape };
                  for (let e in t) {
                    if (!(e in n.shape))
                      throw Error(`Unrecognized key: "${e}"`);
                    t[e] && delete r[e];
                  }
                  return A(this, "shape", r), r;
                },
                checks: [],
              });
              return j(e, i);
            })(e, t)),
          (e.partial = (...t) =>
            (function (e, t, n) {
              let r = t._zod.def.checks;
              if (r && r.length > 0)
                throw Error(
                  ".partial() cannot be used on object schemas containing refinements",
                );
              let i = F(t._zod.def, {
                get shape() {
                  let r = t._zod.def.shape,
                    i = { ...r };
                  if (n)
                    for (let t in n) {
                      if (!(t in r)) throw Error(`Unrecognized key: "${t}"`);
                      n[t] &&
                        (i[t] = e
                          ? new e({ type: "optional", innerType: r[t] })
                          : r[t]);
                    }
                  else
                    for (let t in r)
                      i[t] = e
                        ? new e({ type: "optional", innerType: r[t] })
                        : r[t];
                  return A(this, "shape", i), i;
                },
                checks: [],
              });
              return j(t, i);
            })(ou, e, t[0])),
          (e.required = (...t) => {
            var n;
            let r;
            return (
              (n = t[0]),
              (r = F(e._zod.def, {
                get shape() {
                  let t = e._zod.def.shape,
                    r = { ...t };
                  if (n)
                    for (let e in n) {
                      if (!(e in r)) throw Error(`Unrecognized key: "${e}"`);
                      n[e] &&
                        (r[e] = new om({
                          type: "nonoptional",
                          innerType: t[e],
                        }));
                    }
                  else
                    for (let e in t)
                      r[e] = new om({ type: "nonoptional", innerType: t[e] });
                  return A(this, "shape", r), r;
                },
              })),
              j(e, r)
            );
          });
      });
      function uR(e, t) {
        return new u$({ type: "object", shape: e ?? {}, ...Z(t) });
      }
      function uI(e, t) {
        return new u$({ type: "object", shape: e, catchall: uz(), ...Z(t) });
      }
      function uM(e, t) {
        return new u$({ type: "object", shape: e, catchall: uk(), ...Z(t) });
      }
      let uL = f("ZodUnion", (e, t) => {
        nv.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => rX(e, t, n, r)),
          (e.options = t.options);
      });
      function uK(e, t) {
        return new uL({ type: "union", options: e, ...Z(t) });
      }
      let uq = f("ZodXor", (e, t) => {
        uL.init(e, t),
          ng.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => rX(e, t, n, r)),
          (e.options = t.options);
      });
      function uW(e, t) {
        return new uq({ type: "union", options: e, inclusive: !1, ...Z(t) });
      }
      let uU = f("ZodDiscriminatedUnion", (e, t) => {
        uL.init(e, t), nD.init(e, t);
      });
      function uV(e, t, n) {
        return new uU({ type: "union", options: t, discriminator: e, ...Z(n) });
      }
      let uJ = f("ZodIntersection", (e, t) => {
        nC.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => {
            let i, u, o, a;
            return (
              (u = rV((i = e._zod.def).left, t, {
                ...r,
                path: [...r.path, "allOf", 0],
              })),
              (o = rV(i.right, t, { ...r, path: [...r.path, "allOf", 1] })),
              void (n.allOf = [
                ...((a = (e) => "allOf" in e && 1 === Object.keys(e).length)(u)
                  ? u.allOf
                  : [u]),
                ...(a(o) ? o.allOf : [o]),
              ])
            );
          });
      });
      function uQ(e, t) {
        return new uJ({ type: "intersection", left: e, right: t });
      }
      let uH = f("ZodTuple", (e, t) => {
        nE.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) =>
            ((e, t, n, r) => {
              let i = e._zod.def;
              n.type = "array";
              let u = "draft-2020-12" === t.target ? "prefixItems" : "items",
                o =
                  "draft-2020-12" === t.target || "openapi-3.0" === t.target
                    ? "items"
                    : "additionalItems",
                a = i.items.map((e, n) =>
                  rV(e, t, { ...r, path: [...r.path, u, n] }),
                ),
                s = i.rest
                  ? rV(i.rest, t, {
                      ...r,
                      path: [
                        ...r.path,
                        o,
                        ...("openapi-3.0" === t.target ? [i.items.length] : []),
                      ],
                    })
                  : null;
              "draft-2020-12" === t.target
                ? ((n.prefixItems = a), s && (n.items = s))
                : "openapi-3.0" === t.target
                  ? ((n.items = { anyOf: a }),
                    s && n.items.anyOf.push(s),
                    (n.minItems = a.length),
                    s || (n.maxItems = a.length))
                  : ((n.items = a), s && (n.additionalItems = s));
              let { minimum: l, maximum: c } = e._zod.bag;
              "number" == typeof l && (n.minItems = l),
                "number" == typeof c && (n.maxItems = c);
            })(e, t, n, r)),
          (e.rest = (t) => e.clone({ ...e._zod.def, rest: t }));
      });
      function uY(e, t, n) {
        let r = t instanceof tx,
          i = r ? n : t;
        return new uH({ type: "tuple", items: e, rest: r ? t : null, ...Z(i) });
      }
      let uX = f("ZodRecord", (e, t) => {
        nw.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) =>
            ((e, t, n, r) => {
              let i = e._zod.def;
              n.type = "object";
              let u = i.keyType,
                o = u._zod.bag,
                a = o?.patterns;
              if ("loose" === i.mode && a && a.size > 0) {
                let e = rV(i.valueType, t, {
                  ...r,
                  path: [...r.path, "patternProperties", "*"],
                });
                for (let t of ((n.patternProperties = {}), a))
                  n.patternProperties[t.source] = e;
              } else
                ("draft-07" === t.target || "draft-2020-12" === t.target) &&
                  (n.propertyNames = rV(i.keyType, t, {
                    ...r,
                    path: [...r.path, "propertyNames"],
                  })),
                  (n.additionalProperties = rV(i.valueType, t, {
                    ...r,
                    path: [...r.path, "additionalProperties"],
                  }));
              let s = u._zod.values;
              if (s) {
                let e = [...s].filter(
                  (e) => "string" == typeof e || "number" == typeof e,
                );
                e.length > 0 && (n.required = e);
              }
            })(e, t, n, r)),
          (e.keyType = t.keyType),
          (e.valueType = t.valueType);
      });
      function uG(e, t, n) {
        return new uX({ type: "record", keyType: e, valueType: t, ...Z(n) });
      }
      function u0(e, t, n) {
        let r = j(e);
        return (
          (r._zod.values = void 0),
          new uX({ type: "record", keyType: r, valueType: t, ...Z(n) })
        );
      }
      function u1(e, t, n) {
        return new uX({
          type: "record",
          keyType: e,
          valueType: t,
          mode: "loose",
          ...Z(n),
        });
      }
      let u2 = f("ZodMap", (e, t) => {
        nb.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, r) => {
              if ("throw" === t.unrepresentable)
                throw Error("Map cannot be represented in JSON Schema");
            })(0, e, 0, 0)),
          (e.keyType = t.keyType),
          (e.valueType = t.valueType),
          (e.min = (...t) => e.check(rF(...t))),
          (e.nonempty = (t) => e.check(rF(1, t))),
          (e.max = (...t) => e.check(rA(...t))),
          (e.size = (...t) => e.check(r_(...t)));
      });
      function u3(e, t, n) {
        return new u2({ type: "map", keyType: e, valueType: t, ...Z(n) });
      }
      let u4 = f("ZodSet", (e, t) => {
        nF.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, r) => {
              if ("throw" === t.unrepresentable)
                throw Error("Set cannot be represented in JSON Schema");
            })(0, e, 0, 0)),
          (e.min = (...t) => e.check(rF(...t))),
          (e.nonempty = (t) => e.check(rF(1, t))),
          (e.max = (...t) => e.check(rA(...t))),
          (e.size = (...t) => e.check(r_(...t)));
      });
      function u9(e, t) {
        return new u4({ type: "set", valueType: e, ...Z(t) });
      }
      let u7 = f("ZodEnum", (e, t) => {
        nk.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => {
            let i;
            (i = g(e._zod.def.entries)).every((e) => "number" == typeof e) &&
              (n.type = "number"),
              i.every((e) => "string" == typeof e) && (n.type = "string"),
              (n.enum = i);
          }),
          (e.enum = t.entries),
          (e.options = Object.values(t.entries));
        let n = new Set(Object.keys(t.entries));
        (e.extract = (e, r) => {
          let i = {};
          for (let r of e)
            if (n.has(r)) i[r] = t.entries[r];
            else throw Error(`Key ${r} not found in enum`);
          return new u7({ ...t, checks: [], ...Z(r), entries: i });
        }),
          (e.exclude = (e, r) => {
            let i = { ...t.entries };
            for (let t of e)
              if (n.has(t)) delete i[t];
              else throw Error(`Key ${t} not found in enum`);
            return new u7({ ...t, checks: [], ...Z(r), entries: i });
          });
      });
      function u6(e, t) {
        return new u7({
          type: "enum",
          entries: Array.isArray(e)
            ? Object.fromEntries(e.map((e) => [e, e]))
            : e,
          ...Z(t),
        });
      }
      function u8(e, t) {
        return new u7({ type: "enum", entries: e, ...Z(t) });
      }
      let u5 = f("ZodLiteral", (e, t) => {
        nx.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) =>
            ((e, t, n, r) => {
              let i = e._zod.def,
                u = [];
              for (let e of i.values)
                if (void 0 === e) {
                  if ("throw" === t.unrepresentable)
                    throw Error(
                      "Literal `undefined` cannot be represented in JSON Schema",
                    );
                } else if ("bigint" == typeof e)
                  if ("throw" === t.unrepresentable)
                    throw Error(
                      "BigInt literals cannot be represented in JSON Schema",
                    );
                  else u.push(Number(e));
                else u.push(e);
              if (0 === u.length);
              else if (1 === u.length) {
                let e = u[0];
                (n.type = null === e ? "null" : typeof e),
                  "draft-04" === t.target || "openapi-3.0" === t.target
                    ? (n.enum = [e])
                    : (n.const = e);
              } else
                u.every((e) => "number" == typeof e) && (n.type = "number"),
                  u.every((e) => "string" == typeof e) && (n.type = "string"),
                  u.every((e) => "boolean" == typeof e) && (n.type = "boolean"),
                  u.every((e) => null === e) && (n.type = "null"),
                  (n.enum = u);
            })(e, t, n, 0)),
          (e.values = new Set(t.values)),
          Object.defineProperty(e, "value", {
            get() {
              if (t.values.length > 1)
                throw Error(
                  "This schema contains multiple valid literal values. Use `.values` instead.",
                );
              return t.values[0];
            },
          });
      });
      function oe(e, t) {
        return new u5({
          type: "literal",
          values: Array.isArray(e) ? e : [e],
          ...Z(t),
        });
      }
      let ot = f("ZodFile", (e, t) => {
        nz.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) =>
            ((e, t, n, r) => {
              let i = {
                  type: "string",
                  format: "binary",
                  contentEncoding: "binary",
                },
                { minimum: u, maximum: o, mime: a } = e._zod.bag;
              void 0 !== u && (i.minLength = u),
                void 0 !== o && (i.maxLength = o),
                a
                  ? 1 === a.length
                    ? ((i.contentMediaType = a[0]), Object.assign(n, i))
                    : (Object.assign(n, i),
                      (n.anyOf = a.map((e) => ({ contentMediaType: e }))))
                  : Object.assign(n, i);
            })(e, 0, n, 0)),
          (e.min = (t, n) => e.check(rF(t, n))),
          (e.max = (t, n) => e.check(rA(t, n))),
          (e.mime = (t, n) => e.check(r$(Array.isArray(t) ? t : [t], n)));
      });
      function on(e) {
        return new ot({ type: "file", ...Z(e) });
      }
      let or = f("ZodTransform", (e, t) => {
        nO.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, r) => {
              if ("throw" === t.unrepresentable)
                throw Error("Transforms cannot be represented in JSON Schema");
            })(0, e, 0, 0)),
          (e._zod.parse = (n, r) => {
            if ("backward" === r.direction) throw new h(e.constructor.name);
            n.addIssue = (r) => {
              "string" == typeof r
                ? n.issues.push(V(r, n.value, t))
                : (r.fatal && (r.continue = !1),
                  r.code ?? (r.code = "custom"),
                  r.input ?? (r.input = n.value),
                  r.inst ?? (r.inst = e),
                  n.issues.push(V(r)));
            };
            let i = t.transform(n.value, n);
            return i instanceof Promise
              ? i.then((e) => ((n.value = e), n))
              : ((n.value = i), n);
          });
      });
      function oi(e) {
        return new or({ type: "transform", transform: e });
      }
      let ou = f("ZodOptional", (e, t) => {
        nP.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => rG(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType);
      });
      function oo(e) {
        return new ou({ type: "optional", innerType: e });
      }
      let oa = f("ZodExactOptional", (e, t) => {
        nN.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => rG(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType);
      });
      function os(e) {
        return new oa({ type: "optional", innerType: e });
      }
      let ol = f("ZodNullable", (e, t) => {
        nT.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => {
            let i, u, o;
            return (
              (u = rV((i = e._zod.def).innerType, t, r)),
              (o = t.seen.get(e)),
              void ("openapi-3.0" === t.target
                ? ((o.ref = i.innerType), (n.nullable = !0))
                : (n.anyOf = [u, { type: "null" }]))
            );
          }),
          (e.unwrap = () => e._zod.def.innerType);
      });
      function oc(e) {
        return new ol({ type: "nullable", innerType: e });
      }
      function od(e) {
        return oo(oc(e));
      }
      let of = f("ZodDefault", (e, t) => {
        nj.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => {
            let i;
            rV((i = e._zod.def).innerType, t, r),
              (t.seen.get(e).ref = i.innerType),
              (n.default = JSON.parse(JSON.stringify(i.defaultValue)));
          }),
          (e.unwrap = () => e._zod.def.innerType),
          (e.removeDefault = e.unwrap);
      });
      function op(e, t) {
        return new of({
          type: "default",
          innerType: e,
          get defaultValue() {
            return "function" == typeof t ? t() : S(t);
          },
        });
      }
      let oh = f("ZodPrefault", (e, t) => {
        n$.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => {
            let i;
            rV((i = e._zod.def).innerType, t, r),
              (t.seen.get(e).ref = i.innerType),
              "input" === t.io &&
                (n._prefault = JSON.parse(JSON.stringify(i.defaultValue)));
          }),
          (e.unwrap = () => e._zod.def.innerType);
      });
      function ov(e, t) {
        return new oh({
          type: "prefault",
          innerType: e,
          get defaultValue() {
            return "function" == typeof t ? t() : S(t);
          },
        });
      }
      let om = f("ZodNonOptional", (e, t) => {
        nR.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => {
            let i;
            rV((i = e._zod.def).innerType, t, r),
              (t.seen.get(e).ref = i.innerType);
          }),
          (e.unwrap = () => e._zod.def.innerType);
      });
      function og(e, t) {
        return new om({ type: "nonoptional", innerType: e, ...Z(t) });
      }
      let oD = f("ZodSuccess", (e, t) => {
        nM.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (e, t, n) => {
            t.type = "boolean";
          }),
          (e.unwrap = () => e._zod.def.innerType);
      });
      function oC(e) {
        return new oD({ type: "success", innerType: e });
      }
      let oB = f("ZodCatch", (e, t) => {
        nL.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) =>
            ((e, t, n, r) => {
              let i,
                u = e._zod.def;
              rV(u.innerType, t, r), (t.seen.get(e).ref = u.innerType);
              try {
                i = u.catchValue(void 0);
              } catch {
                throw Error(
                  "Dynamic catch values are not supported in JSON Schema",
                );
              }
              n.default = i;
            })(e, t, n, r)),
          (e.unwrap = () => e._zod.def.innerType),
          (e.removeCatch = e.unwrap);
      });
      function oE(e, t) {
        return new oB({
          type: "catch",
          innerType: e,
          catchValue: "function" == typeof t ? t : () => t,
        });
      }
      let oy = f("ZodNaN", (e, t) => {
        nK.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, r) => {
              if ("throw" === t.unrepresentable)
                throw Error("NaN cannot be represented in JSON Schema");
            })(0, e, 0, 0));
      });
      function ow(e) {
        return new oy({ type: "nan", ...Z(e) });
      }
      let ob = f("ZodPipe", (e, t) => {
        nq.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => {
            let i, u;
            return (
              (i = e._zod.def),
              void (rV(
                (u =
                  "input" === t.io
                    ? "transform" === i.in._zod.def.type
                      ? i.out
                      : i.in
                    : i.out),
                t,
                r,
              ),
              (t.seen.get(e).ref = u))
            );
          }),
          (e.in = t.in),
          (e.out = t.out);
      });
      function oA(e, t) {
        return new ob({ type: "pipe", in: e, out: t });
      }
      let oF = f("ZodCodec", (e, t) => {
        ob.init(e, t), nU.init(e, t);
      });
      function o_(e, t, n) {
        return new oF({
          type: "pipe",
          in: e,
          out: t,
          transform: n.decode,
          reverseTransform: n.encode,
        });
      }
      let ok = f("ZodReadonly", (e, t) => {
        nQ.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => {
            let i;
            rV((i = e._zod.def).innerType, t, r),
              (t.seen.get(e).ref = i.innerType),
              (n.readOnly = !0);
          }),
          (e.unwrap = () => e._zod.def.innerType);
      });
      function ox(e) {
        return new ok({ type: "readonly", innerType: e });
      }
      let oz = f("ZodTemplateLiteral", (e, t) => {
        nY.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) =>
            ((e, t, n, r) => {
              let i = e._zod.pattern;
              if (!i) throw Error("Pattern not found in template literal");
              (n.type = "string"), (n.pattern = i.source);
            })(e, 0, n, 0));
      });
      function oO(e, t) {
        return new oz({ type: "template_literal", parts: e, ...Z(t) });
      }
      let oS = f("ZodLazy", (e, t) => {
        n0.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => {
            let i;
            rV((i = e._zod.innerType), t, r), (t.seen.get(e).ref = i);
          }),
          (e.unwrap = () => e._zod.def.getter());
      });
      function oP(e) {
        return new oS({ type: "lazy", getter: e });
      }
      let oN = f("ZodPromise", (e, t) => {
        nG.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (t, n, r) => {
            let i;
            rV((i = e._zod.def).innerType, t, r),
              (t.seen.get(e).ref = i.innerType);
          }),
          (e.unwrap = () => e._zod.def.innerType);
      });
      function oT(e) {
        return new oN({ type: "promise", innerType: e });
      }
      let oj = f("ZodFunction", (e, t) => {
        nX.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, r) => {
              if ("throw" === t.unrepresentable)
                throw Error(
                  "Function types cannot be represented in JSON Schema",
                );
            })(0, e, 0, 0));
      });
      function oZ(e) {
        return new oj({
          type: "function",
          input: Array.isArray(e?.input)
            ? uY(e?.input)
            : (e?.input ?? uj(uk())),
          output: e?.output ?? uk(),
        });
      }
      let o$ = f("ZodCustom", (e, t) => {
        n1.init(e, t),
          ih.init(e, t),
          (e._zod.processJSONSchema = (e, t, n) =>
            ((e, t, n, r) => {
              if ("throw" === t.unrepresentable)
                throw Error(
                  "Custom types cannot be represented in JSON Schema",
                );
            })(0, e, 0, 0));
      });
      function oR(e) {
        let t = new tr({ check: "custom" });
        return (t._zod.check = e), t;
      }
      function oI(e, t) {
        var n;
        let r;
        return (
          (n = e ?? (() => !0)),
          (r = Z(t)).abort ?? (r.abort = !0),
          new o$({ type: "custom", check: "custom", fn: n, ...r })
        );
      }
      function oM(e, t = {}) {
        return new o$({ type: "custom", check: "custom", fn: e, ...Z(t) });
      }
      function oL(e) {
        var t;
        let n, r;
        return (
          (t = (t) => (
            (t.addIssue = (e) => {
              "string" == typeof e
                ? t.issues.push(V(e, t.value, n._zod.def))
                : (e.fatal && (e.continue = !1),
                  e.code ?? (e.code = "custom"),
                  e.input ?? (e.input = t.value),
                  e.inst ?? (e.inst = n),
                  e.continue ?? (e.continue = !n._zod.def.abort),
                  t.issues.push(V(e)));
            }),
            e(t.value, t)
          )),
          ((r = new tr({ check: "custom", ...Z(void 0) }))._zod.check = t),
          (n = r)
        );
      }
      let oK = function (e) {
          let t = new tr({ check: "describe" });
          return (
            (t._zod.onattach = [
              (t) => {
                let n = n3.get(t) ?? {};
                n3.add(t, { ...n, description: e });
              },
            ]),
            (t._zod.check = () => {}),
            t
          );
        },
        oq = function (e) {
          let t = new tr({ check: "meta" });
          return (
            (t._zod.onattach = [
              (t) => {
                let n = n3.get(t) ?? {};
                n3.add(t, { ...n, ...e });
              },
            ]),
            (t._zod.check = () => {}),
            t
          );
        };
      function oW(e, t = {}) {
        let n = new o$({
          type: "custom",
          check: "custom",
          fn: (t) => t instanceof e,
          abort: !0,
          ...Z(t),
        });
        return (
          (n._zod.bag.Class = e),
          (n._zod.check = (t) => {
            t.value instanceof e ||
              t.issues.push({
                code: "invalid_type",
                expected: e.name,
                input: t.value,
                inst: n,
                path: [...(n._zod.def.path ?? [])],
              });
          }),
          n
        );
      }
      let oU = (...e) =>
        (function (e, t) {
          let n = Z(t),
            r = n.truthy ?? ["true", "1", "yes", "on", "y", "enabled"],
            i = n.falsy ?? ["false", "0", "no", "off", "n", "disabled"];
          "sensitive" !== n.case &&
            ((r = r.map((e) => ("string" == typeof e ? e.toLowerCase() : e))),
            (i = i.map((e) => ("string" == typeof e ? e.toLowerCase() : e))));
          let u = new Set(r),
            o = new Set(i),
            a = e.Codec ?? nU,
            s = e.Boolean ?? t7,
            l = new a({
              type: "pipe",
              in: new (e.String ?? tz)({ type: "string", error: n.error }),
              out: new s({ type: "boolean", error: n.error }),
              transform: (e, t) => {
                let r = e;
                return (
                  "sensitive" !== n.case && (r = r.toLowerCase()),
                  !!u.has(r) ||
                    (!o.has(r) &&
                      (t.issues.push({
                        code: "invalid_value",
                        expected: "stringbool",
                        values: [...u, ...o],
                        input: t.value,
                        inst: l,
                        continue: !1,
                      }),
                      {}))
                );
              },
              reverseTransform: (e, t) =>
                !0 === e ? r[0] || "true" : i[0] || "false",
              error: n.error,
            });
          return l;
        })({ Codec: oF, Boolean: uf, String: im }, ...e);
      function oV(e) {
        let t = oP(() => uK([ig(e), uu(), up(), ub(), uj(t), uG(ig(), t)]));
        return t;
      }
      function oJ(e, t) {
        return oA(oi(e), t);
      }
      a || (a = {}),
        m({
          localeError:
            ((r = {
              string: { unit: "characters", verb: "to have" },
              file: { unit: "bytes", verb: "to have" },
              array: { unit: "items", verb: "to have" },
              set: { unit: "items", verb: "to have" },
              map: { unit: "entries", verb: "to have" },
            }),
            (i = {
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
              jwt: "JWT",
              template_literal: "input",
            }),
            (u = { nan: "NaN" }),
            (e) => {
              switch (e.code) {
                case "invalid_type": {
                  let t = u[e.expected] ?? e.expected,
                    n = (function (e) {
                      let t = typeof e;
                      switch (t) {
                        case "number":
                          return Number.isNaN(e) ? "nan" : "number";
                        case "object":
                          if (null === e) return "null";
                          if (Array.isArray(e)) return "array";
                          if (
                            e &&
                            Object.getPrototypeOf(e) !== Object.prototype &&
                            "constructor" in e &&
                            e.constructor
                          )
                            return e.constructor.name;
                      }
                      return t;
                    })(e.input),
                    r = u[n] ?? n;
                  return `Invalid input: expected ${t}, received ${r}`;
                }
                case "invalid_value":
                  if (1 === e.values.length)
                    return `Invalid input: expected ${$(e.values[0])}`;
                  return `Invalid option: expected one of ${D(e.values, "|")}`;
                case "too_big": {
                  let t = e.inclusive ? "<=" : "<",
                    n = r[e.origin] ?? null;
                  if (n)
                    return `Too big: expected ${e.origin ?? "value"} to have ${t}${e.maximum.toString()} ${n.unit ?? "elements"}`;
                  return `Too big: expected ${e.origin ?? "value"} to be ${t}${e.maximum.toString()}`;
                }
                case "too_small": {
                  let t = e.inclusive ? ">=" : ">",
                    n = r[e.origin] ?? null;
                  if (n)
                    return `Too small: expected ${e.origin} to have ${t}${e.minimum.toString()} ${n.unit}`;
                  return `Too small: expected ${e.origin} to be ${t}${e.minimum.toString()}`;
                }
                case "invalid_format":
                  if ("starts_with" === e.format)
                    return `Invalid string: must start with "${e.prefix}"`;
                  if ("ends_with" === e.format)
                    return `Invalid string: must end with "${e.suffix}"`;
                  if ("includes" === e.format)
                    return `Invalid string: must include "${e.includes}"`;
                  if ("regex" === e.format)
                    return `Invalid string: must match pattern ${e.pattern}`;
                  return `Invalid ${i[e.format] ?? e.format}`;
                case "not_multiple_of":
                  return `Invalid number: must be a multiple of ${e.divisor}`;
                case "unrecognized_keys":
                  return `Unrecognized key${e.keys.length > 1 ? "s" : ""}: ${D(e.keys, ", ")}`;
                case "invalid_key":
                  return `Invalid key in ${e.origin}`;
                case "invalid_union":
                default:
                  return "Invalid input";
                case "invalid_element":
                  return `Invalid value in ${e.origin}`;
              }
            }),
        });
    },
  },
]);
//# sourceMappingURL=661212.f8156c4d7fe71722.js.map
