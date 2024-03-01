(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["15318"], {
        371621: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                Editable: function() {
                    return td
                },
                ReactEditor: function() {
                    return eE
                },
                Slate: function() {
                    return tE
                },
                useFocused: function() {
                    return tC
                },
                useSelected: function() {
                    return eq
                },
                useSlateStatic: function() {
                    return eT
                },
                withReact: function() {
                    return t_
                }
            }), r("222007"), r("70102"), r("843762"), r("424973"), r("808653"), r("106442"), r("175143"), r("781738"), r("101997");
            var n = r("717837"),
                i = r.n(n),
                o = r("478098"),
                a = r.n(o),
                u = r("229042"),
                s = r.n(u),
                l = r("884691"),
                c = r.n(l),
                d = r("390266"),
                f = r("987295"),
                h = r("871477"),
                p = r("165826"),
                v = r("817736"),
                D = r.n(v);

            function g(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }

            function C(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && (i[r] = e[r]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) {
                        if (r = o[n], !(t.indexOf(r) >= 0)) Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                }
                return i
            }
            var m = 0;
            class y {
                constructor() {
                    this.id = "".concat(m++)
                }
            }
            var E = new WeakMap,
                B = new WeakMap,
                b = new WeakMap,
                A = new WeakMap,
                w = new WeakMap,
                F = new WeakMap,
                _ = new WeakMap,
                O = new WeakMap,
                x = new WeakMap,
                k = new WeakMap,
                P = new WeakMap,
                S = new WeakMap,
                T = new WeakMap,
                j = new WeakMap,
                M = new WeakMap,
                R = new WeakMap,
                I = new WeakMap,
                L = new WeakMap,
                N = new WeakMap,
                z = new WeakMap,
                W = new WeakMap,
                q = Symbol("placeholder"),
                V = Symbol("mark-placeholder"),
                U = globalThis.Text,
                H = e => e && e.ownerDocument && e.ownerDocument.defaultView || null,
                J = e => $(e) && 8 === e.nodeType,
                K = e => $(e) && 1 === e.nodeType,
                $ = e => {
                    var t = H(e);
                    return !!t && e instanceof t.Node
                },
                X = e => {
                    var t = e && e.anchorNode && H(e.anchorNode);
                    return !!t && e instanceof t.Selection
                },
                Q = e => $(e) && 3 === e.nodeType,
                G = e => e.clipboardData && "" !== e.clipboardData.getData("text/plain") && 1 === e.clipboardData.types.length,
                Y = e => {
                    var [t, r] = e;
                    if (K(t) && t.childNodes.length) {
                        var n = r === t.childNodes.length,
                            i = n ? r - 1 : r;
                        for ([t, i] = ee(t, i, n ? "backward" : "forward"), n = i < r; K(t) && t.childNodes.length;) {
                            var o = n ? t.childNodes.length - 1 : 0;
                            t = et(t, o, n ? "backward" : "forward")
                        }
                        r = n && null != t.textContent ? t.textContent.length : 0
                    }
                    return [t, r]
                },
                Z = e => {
                    for (var t = e && e.parentNode; t;) {
                        if ("[object ShadowRoot]" === t.toString()) return !0;
                        t = t.parentNode
                    }
                    return !1
                },
                ee = (e, t, r) => {
                    for (var {
                            childNodes: n
                        } = e, i = n[t], o = t, a = !1, u = !1;
                        (J(i) || K(i) && 0 === i.childNodes.length || K(i) && "false" === i.getAttribute("contenteditable")) && (!a || !u);) {
                        ;
                        if (o >= n.length) {
                            a = !0, o = t - 1, r = "backward";
                            continue
                        }
                        if (o < 0) {
                            u = !0, o = t + 1, r = "forward";
                            continue
                        }
                        i = n[o], t = o, o += "forward" === r ? 1 : -1
                    }
                    return [i, t]
                },
                et = (e, t, r) => {
                    var [n] = ee(e, t, r);
                    return n
                },
                er = e => {
                    var t = "";
                    if (Q(e) && e.nodeValue) return e.nodeValue;
                    if (K(e)) {
                        for (var r of Array.from(e.childNodes)) t += er(r);
                        var n = getComputedStyle(e).getPropertyValue("display");
                        ("block" === n || "list" === n || "BR" === e.tagName) && (t += "\n")
                    }
                    return t
                },
                en = /data-slate-fragment="(.+?)"/m,
                ei = e => {
                    var [, t] = e.getData("text/html").match(en) || [];
                    return t
                },
                eo = (e, t, r) => {
                    var {
                        target: n
                    } = t;
                    if (K(n) && n.matches('[contentEditable="false"]')) return !1;
                    var {
                        document: i
                    } = eE.getWindow(e);
                    if (i.contains(n)) return eE.hasDOMNode(e, n, {
                        editable: !0
                    });
                    var o = r.find(e => {
                        var {
                            addedNodes: t,
                            removedNodes: r
                        } = e;
                        for (var i of t)
                            if (i === n || i.contains(n)) return !0;
                        for (var o of r)
                            if (o === n || o.contains(n)) return !0
                    });
                    return !!o && o !== t && eo(e, o, r)
                },
                ea = parseInt(c.version.split(".")[0], 10) >= 17,
                eu = "undefined" != typeof navigator && "undefined" != typeof window && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream,
                es = "undefined" != typeof navigator && /Mac OS X/.test(navigator.userAgent),
                el = "undefined" != typeof navigator && /Android/.test(navigator.userAgent),
                ec = "undefined" != typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent),
                ed = "undefined" != typeof navigator && /Version\/[\d\.]+.*Safari/.test(navigator.userAgent),
                ef = "undefined" != typeof navigator && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent),
                eh = "undefined" != typeof navigator && /Chrome/i.test(navigator.userAgent),
                ep = "undefined" != typeof navigator && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent),
                ev = el && "undefined" != typeof navigator && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent),
                eD = "undefined" != typeof navigator && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent),
                eg = "undefined" != typeof navigator && /.*UCBrowser/.test(navigator.userAgent),
                eC = "undefined" != typeof navigator && /.*Wechat/.test(navigator.userAgent),
                em = !!("undefined" != typeof window && void 0 !== window.document && void 0 !== window.document.createElement),
                ey = (!ep || !ev) && !ef && "undefined" != typeof globalThis && globalThis.InputEvent && "function" == typeof globalThis.InputEvent.prototype.getTargetRanges,
                eE = {
                    isComposing: e => !!S.get(e),
                    getWindow(e) {
                        var t = b.get(e);
                        if (!t) throw Error("Unable to find a host window element for this editor");
                        return t
                    },
                    findKey(e, t) {
                        var r = O.get(t);
                        return !r && (r = new y, O.set(t, r)), r
                    },
                    findPath(e, t) {
                        for (var r = [], n = t;;) {
                            var i = B.get(n);
                            if (null == i) {
                                if (f.Editor.isEditor(n)) return r;
                                break
                            }
                            var o = E.get(n);
                            if (null == o) break;
                            r.unshift(o), n = i
                        }
                        throw Error("Unable to find the path for Slate node: ".concat(f.Scrubber.stringify(t)))
                    },
                    findDocumentOrShadowRoot(e) {
                        var t = eE.toDOMNode(e, e),
                            r = t.getRootNode();
                        return (r instanceof Document || r instanceof ShadowRoot) && null != r.getSelection ? r : t.ownerDocument
                    },
                    isFocused: e => !!P.get(e),
                    isReadOnly: e => !!k.get(e),
                    blur(e) {
                        var t = eE.toDOMNode(e, e),
                            r = eE.findDocumentOrShadowRoot(e);
                        P.set(e, !1), r.activeElement === t && t.blur()
                    },
                    focus(e) {
                        var t = eE.toDOMNode(e, e),
                            r = eE.findDocumentOrShadowRoot(e);
                        P.set(e, !0), r.activeElement !== t && t.focus({
                            preventScroll: !0
                        })
                    },
                    deselect(e) {
                        var {
                            selection: t
                        } = e, r = eE.findDocumentOrShadowRoot(e).getSelection();
                        r && r.rangeCount > 0 && r.removeAllRanges(), t && f.Transforms.deselect(e)
                    },
                    hasDOMNode(e, t) {
                        var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                editable: i = !1
                            } = n,
                            o = eE.toDOMNode(e, e);
                        try {
                            r = K(t) ? t : t.parentElement
                        } catch (e) {
                            if (!e.message.includes('Permission denied to access property "nodeType"')) throw e
                        }
                        return !!r && r.closest("[data-slate-editor]") === o && (!i || !!r.isContentEditable || "boolean" == typeof r.isContentEditable && r.closest('[contenteditable="false"]') === o || !!r.getAttribute("data-slate-zero-width"))
                    },
                    insertData(e, t) {
                        e.insertData(t)
                    },
                    insertFragmentData: (e, t) => e.insertFragmentData(t),
                    insertTextData: (e, t) => e.insertTextData(t),
                    setFragmentData(e, t, r) {
                        e.setFragmentData(t, r)
                    },
                    toDOMNode(e, t) {
                        var r = x.get(e),
                            n = f.Editor.isEditor(t) ? A.get(e) : null == r ? void 0 : r.get(eE.findKey(e, t));
                        if (!n) throw Error("Cannot resolve a DOM node from Slate node: ".concat(f.Scrubber.stringify(t)));
                        return n
                    },
                    toDOMPoint(e, t) {
                        var [r] = f.Editor.node(e, t.path), n = eE.toDOMNode(e, r);
                        f.Editor.void(e, {
                            at: t
                        }) && (t = {
                            path: t.path,
                            offset: 0
                        });
                        for (var i = Array.from(n.querySelectorAll("[data-slate-string], [data-slate-zero-width]")), o = 0, a = 0; a < i.length; a++) {
                            var u = i[a],
                                s = u.childNodes[0];
                            if (null != s && null != s.textContent) {
                                var {
                                    length: l
                                } = s.textContent, c = u.getAttribute("data-slate-length"), d = o + (null == c ? l : parseInt(c, 10)), h = i[a + 1];
                                if (t.offset === d && null != h && h.hasAttribute("data-slate-mark-placeholder")) {
                                    var p, v, D = h.childNodes[0];
                                    p = [D instanceof U ? D : h, null !== (v = h.textContent) && void 0 !== v && v.startsWith("\uFEFF") ? 1 : 0];
                                    break
                                }
                                if (t.offset <= d) {
                                    p = [s, Math.min(l, Math.max(0, t.offset - o))];
                                    break
                                }
                                o = d
                            }
                        }
                        if (!p) throw Error("Cannot resolve a DOM point from Slate point: ".concat(f.Scrubber.stringify(t)));
                        return p
                    },
                    toDOMRange(e, t) {
                        var {
                            anchor: r,
                            focus: n
                        } = t, i = f.Range.isBackward(t), o = eE.toDOMPoint(e, r), a = f.Range.isCollapsed(t) ? o : eE.toDOMPoint(e, n), u = eE.getWindow(e).document.createRange(), [s, l] = i ? a : o, [c, d] = i ? o : a, h = !!(K(s) ? s : s.parentElement).getAttribute("data-slate-zero-width"), p = !!(K(c) ? c : c.parentElement).getAttribute("data-slate-zero-width");
                        return u.setStart(s, h ? 1 : l), u.setEnd(c, p ? 1 : d), u
                    },
                    toSlateNode(e, t) {
                        var r = K(t) ? t : t.parentElement;
                        r && !r.hasAttribute("data-slate-node") && (r = r.closest("[data-slate-node]"));
                        var n = r ? F.get(r) : null;
                        if (!n) throw Error("Cannot resolve a Slate node from DOM node: ".concat(r));
                        return n
                    },
                    findEventRange(e, t) {
                        "nativeEvent" in t && (t = t.nativeEvent);
                        var r, {
                            clientX: n,
                            clientY: i,
                            target: o
                        } = t;
                        if (null == n || null == i) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
                        var a = eE.toSlateNode(e, t.target),
                            u = eE.findPath(e, a);
                        if (f.Element.isElement(a) && f.Editor.isVoid(e, a)) {
                            var s = o.getBoundingClientRect(),
                                l = e.isInline(a) ? n - s.left < s.left + s.width - n : i - s.top < s.top + s.height - i,
                                c = f.Editor.point(e, u, {
                                    edge: l ? "start" : "end"
                                }),
                                d = l ? f.Editor.before(e, c) : f.Editor.after(e, c);
                            if (d) return f.Editor.range(e, d)
                        }
                        var {
                            document: h
                        } = eE.getWindow(e);
                        if (h.caretRangeFromPoint) r = h.caretRangeFromPoint(n, i);
                        else {
                            var p = h.caretPositionFromPoint(n, i);
                            p && ((r = h.createRange()).setStart(p.offsetNode, p.offset), r.setEnd(p.offsetNode, p.offset))
                        }
                        if (!r) throw Error("Cannot resolve a Slate range from a DOM event: ".concat(t));
                        return eE.toSlateRange(e, r, {
                            exactMatch: !1,
                            suppressThrow: !1
                        })
                    },
                    toSlatePoint(e, t, r) {
                        var {
                            exactMatch: n,
                            suppressThrow: i
                        } = r, [o, a] = n ? t : Y(t), u = o.parentNode, s = null, l = 0;
                        if (u) {
                            var c, d, h = eE.toDOMNode(e, e),
                                p = u.closest('[data-slate-void="true"]'),
                                v = p && h.contains(p) ? p : null,
                                D = u.closest("[data-slate-leaf]"),
                                g = null;
                            if (D) {
                                if (s = D.closest('[data-slate-node="text"]')) {
                                    var C = eE.getWindow(e).document.createRange();
                                    C.setStart(s, 0), C.setEnd(o, a);
                                    var m = C.cloneContents();
                                    [...Array.prototype.slice.call(m.querySelectorAll("[data-slate-zero-width]")), ...Array.prototype.slice.call(m.querySelectorAll("[contenteditable=false]"))].forEach(e => {
                                        if (el && !n && e.hasAttribute("data-slate-zero-width") && e.textContent.length > 0 && "\uFEFF" !== e.textContext) {
                                            e.textContent.startsWith("\uFEFF") && (e.textContent = e.textContent.slice(1));
                                            return
                                        }
                                        e.parentNode.removeChild(e)
                                    }), l = m.textContent.length, g = s
                                }
                            } else if (v) {
                                for (var y = v.querySelectorAll("[data-slate-leaf]"), E = 0; E < y.length; E++) {
                                    var B = y[E];
                                    if (eE.hasDOMNode(e, B)) {
                                        D = B;
                                        break
                                    }
                                }
                                D ? (s = D.closest('[data-slate-node="text"]'), l = (g = D).textContent.length, g.querySelectorAll("[data-slate-zero-width]").forEach(e => {
                                    l -= e.textContent.length
                                })) : l = 1
                            }
                            g && l === g.textContent.length && el && "z" === g.getAttribute("data-slate-zero-width") && null !== (c = g.textContent) && void 0 !== c && c.startsWith("\uFEFF") && (u.hasAttribute("data-slate-zero-width") || ec && null !== (d = g.textContent) && void 0 !== d && d.endsWith("\n\n")) && l--
                        }
                        if (el && !s && !n) {
                            var b = u.hasAttribute("data-slate-node") ? u : u.closest("[data-slate-node]");
                            if (b && eE.hasDOMNode(e, b, {
                                    editable: !0
                                })) {
                                var A = eE.toSlateNode(e, b),
                                    {
                                        path: w,
                                        offset: F
                                    } = f.Editor.start(e, eE.findPath(e, A));
                                return !b.querySelector("[data-slate-leaf]") && (F = a), {
                                    path: w,
                                    offset: F
                                }
                            }
                        }
                        if (!s) {
                            if (i) return null;
                            throw Error("Cannot resolve a Slate point from DOM point: ".concat(t))
                        }
                        var _ = eE.toSlateNode(e, s);
                        return {
                            path: eE.findPath(e, _),
                            offset: l
                        }
                    },
                    toSlateRange(e, t, r) {
                        var n, i, o, a, u, s, {
                            exactMatch: l,
                            suppressThrow: c
                        } = r;
                        if ((X(t) ? t.anchorNode : t.startContainer) && (X(t) ? (n = t.anchorNode, i = t.anchorOffset, o = t.focusNode, a = t.focusOffset, u = eh && Z(n) ? t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset : t.isCollapsed) : (n = t.startContainer, i = t.startOffset, o = t.endContainer, a = t.endOffset, u = t.collapsed)), null == n || null == o || null == i || null == a) throw Error("Cannot resolve a Slate range from DOM range: ".concat(t));
                        "getAttribute" in o && "false" === o.getAttribute("contenteditable") && (o = n, a = (null === (s = n.textContent) || void 0 === s ? void 0 : s.length) || 0);
                        var d = eE.toSlatePoint(e, [n, i], {
                            exactMatch: l,
                            suppressThrow: c
                        });
                        if (!d) return null;
                        var h = u ? d : eE.toSlatePoint(e, [o, a], {
                            exactMatch: l,
                            suppressThrow: c
                        });
                        if (!h) return null;
                        if (ec && !u && n !== o) {
                            var p = f.Editor.isEnd(e, d, d.path),
                                v = f.Editor.isStart(e, h, h.path);
                            p && (d = f.Editor.after(e, d) || d), v && (h = f.Editor.before(e, h) || h)
                        }
                        var D = {
                            anchor: d,
                            focus: h
                        };
                        return f.Range.isExpanded(D) && f.Range.isForward(D) && K(o) && f.Editor.void(e, {
                            at: D.focus,
                            mode: "highest"
                        }) && (D = f.Editor.unhangRange(e, D, {
                            voids: !0
                        })), D
                    },
                    hasRange(e, t) {
                        var {
                            anchor: r,
                            focus: n
                        } = t;
                        return f.Editor.hasPath(e, r.path) && f.Editor.hasPath(e, n.path)
                    },
                    hasTarget: (e, t) => $(t) && eE.hasDOMNode(e, t),
                    hasEditableTarget: (e, t) => $(t) && eE.hasDOMNode(e, t, {
                        editable: !0
                    }),
                    hasSelectableTarget: (e, t) => eE.hasEditableTarget(e, t) || eE.isTargetInsideNonReadonlyVoid(e, t),
                    isTargetInsideNonReadonlyVoid(e, t) {
                        if (k.get(e)) return !1;
                        var r = eE.hasTarget(e, t) && eE.toSlateNode(e, t);
                        return f.Element.isElement(r) && f.Editor.isVoid(e, r)
                    },
                    androidScheduleFlush(e) {
                        var t;
                        null === (t = M.get(e)) || void 0 === t || t()
                    },
                    androidPendingDiffs: e => L.get(e)
                },
                eB = ["anchor", "focus"],
                eb = ["anchor", "focus"],
                eA = (e, t) => Object.keys(e).length === Object.keys(t).length && Object.keys(e).every(r => t.hasOwnProperty(r) && e[r] === t[r]),
                ew = (e, t) => {
                    var r = C(e, eB),
                        n = C(t, eb);
                    return e[q] === t[q] && eA(r, n)
                },
                eF = (e, t) => {
                    if (e.length !== t.length) return !1;
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r],
                            i = t[r];
                        if (!f.Range.equals(n, i) || !ew(n, i)) return !1
                    }
                    return !0
                },
                e_ = (e, t) => {
                    if (e.length !== t.length) return !1;
                    for (var r = 0; r < e.length; r++) {
                        var n = e[r],
                            i = t[r];
                        if (n.anchor.offset !== i.anchor.offset || n.focus.offset !== i.focus.offset || !ew(n, i)) return !1
                    }
                    return !0
                },
                eO = em ? l.useLayoutEffect : l.useEffect,
                String = e => {
                    var {
                        isLast: t,
                        leaf: r,
                        parent: n,
                        text: i
                    } = e, o = eT(), a = eE.findPath(o, i), u = f.Path.parent(a), s = !0 === r[V];
                    return o.isVoid(n) ? c.createElement(eP, {
                        length: f.Node.string(n).length
                    }) : "" !== r.text || n.children[n.children.length - 1] !== i || o.isInline(n) || "" !== f.Editor.string(o, u) ? "" === r.text ? c.createElement(eP, {
                        isMarkPlaceholder: s
                    }) : t && "\n" === r.text.slice(-1) ? c.createElement(ex, {
                        isTrailing: !0,
                        text: r.text
                    }) : c.createElement(ex, {
                        text: r.text
                    }) : c.createElement(eP, {
                        isLineBreak: !0,
                        isMarkPlaceholder: s
                    })
                },
                ex = e => {
                    var {
                        text: t,
                        isTrailing: r = !1
                    } = e, n = (0, l.useRef)(null), i = () => "".concat(null != t ? t : "").concat(r ? "\n" : ""), [o] = (0, l.useState)(i);
                    return eO(() => {
                        var e = i();
                        n.current && n.current.textContent !== e && (n.current.textContent = e)
                    }), c.createElement(ek, {
                        ref: n
                    }, o)
                },
                ek = (0, l.memo)((0, l.forwardRef)((e, t) => c.createElement("span", {
                    "data-slate-string": !0,
                    ref: t
                }, e.children))),
                eP = e => {
                    var {
                        length: t = 0,
                        isLineBreak: r = !1,
                        isMarkPlaceholder: n = !1
                    } = e, i = {
                        "data-slate-zero-width": r ? "n" : "z",
                        "data-slate-length": t
                    };
                    return n && (i["data-slate-mark-placeholder"] = !0), c.createElement("span", Object.assign({}, i), el && r ? null : "\uFEFF", r ? c.createElement("br", null) : null)
                },
                eS = (0, l.createContext)(null),
                eT = () => {
                    var e = (0, l.useContext)(eS);
                    if (!e) throw Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
                    return e
                },
                ej = c.memo(e => {
                    var {
                        leaf: t,
                        isLast: r,
                        text: n,
                        parent: i,
                        renderPlaceholder: o,
                        renderLeaf: a = e => c.createElement(eM, Object.assign({}, e))
                    } = e, u = (0, l.useRef)(null), s = (0, l.useRef)(null), d = eT(), f = (0, l.useRef)(null);
                    (0, l.useEffect)(() => () => {
                        f.current && f.current.disconnect()
                    }, []), (0, l.useEffect)(() => {
                        var e = null == s ? void 0 : s.current;
                        if (e ? w.set(d, e) : w.delete(d), f.current) f.current.disconnect(), e && f.current.observe(e);
                        else if (e) {
                            var t = window.ResizeObserver || h.ResizeObserver;
                            f.current = new t(() => {
                                var e = W.get(d);
                                null == e || e()
                            }), f.current.observe(e)
                        }
                        if (!e && u.current) {
                            var r = W.get(d);
                            null == r || r()
                        }
                        return u.current = s.current, () => {
                            w.delete(d)
                        }
                    }, [s, t]);
                    var p = c.createElement(String, {
                        isLast: r,
                        leaf: t,
                        parent: i,
                        text: n
                    });
                    if (t[q]) {
                        var v = {
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
                                    textDecoration: "none"
                                },
                                contentEditable: !1,
                                ref: s
                            }
                        };
                        p = c.createElement(c.Fragment, null, o(v), p)
                    }
                    return a({
                        attributes: {
                            "data-slate-leaf": !0
                        },
                        children: p,
                        leaf: t,
                        text: n
                    })
                }, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && f.Text.equals(t.leaf, e.leaf) && t.leaf[q] === e.leaf[q]),
                eM = e => {
                    var {
                        attributes: t,
                        children: r
                    } = e;
                    return c.createElement("span", Object.assign({}, t), r)
                },
                eR = c.memo(e => {
                    for (var {
                            decorations: t,
                            isLast: r,
                            parent: n,
                            renderPlaceholder: i,
                            renderLeaf: o,
                            text: a
                        } = e, u = eT(), s = (0, l.useRef)(null), d = f.Text.decorations(a, t), h = eE.findKey(u, a), p = [], v = 0; v < d.length; v++) {
                        var D = d[v];
                        p.push(c.createElement(ej, {
                            isLast: r && v === d.length - 1,
                            key: "".concat(h.id, "-").concat(v),
                            renderPlaceholder: i,
                            leaf: D,
                            text: a,
                            parent: n,
                            renderLeaf: o
                        }))
                    }
                    var g = (0, l.useCallback)(e => {
                        var t = x.get(u);
                        e ? (null == t || t.set(h, e), _.set(a, e), F.set(e, a)) : (null == t || t.delete(h), _.delete(a), s.current && F.delete(s.current)), s.current = e
                    }, [s, u, h, a]);
                    return c.createElement("span", {
                        "data-slate-node": "text",
                        ref: g
                    }, p)
                }, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && e_(t.decorations, e.decorations)),
                eI = c.memo(e => {
                    var {
                        decorations: t,
                        element: r,
                        renderElement: n = e => c.createElement(eL, Object.assign({}, e)),
                        renderPlaceholder: o,
                        renderLeaf: a,
                        selection: u
                    } = e, s = eT(), d = eH(), h = s.isInline(r), p = eE.findKey(s, r), v = (0, l.useCallback)(e => {
                        var t = x.get(s);
                        e ? (null == t || t.set(p, e), _.set(r, e), F.set(e, r)) : (null == t || t.delete(p), _.delete(r))
                    }, [s, p, r]), D = eV({
                        decorations: t,
                        node: r,
                        renderElement: n,
                        renderPlaceholder: o,
                        renderLeaf: a,
                        selection: u
                    }), g = {
                        "data-slate-node": "element",
                        ref: v
                    };
                    if (h && (g["data-slate-inline"] = !0), !h && f.Editor.hasInlines(s, r)) {
                        var C = i(f.Node.string(r));
                        "rtl" === C && (g.dir = C)
                    }
                    if (f.Editor.isVoid(s, r)) {
                        g["data-slate-void"] = !0, !d && h && (g.contentEditable = !1);
                        var [
                            [m]
                        ] = f.Node.texts(r);
                        D = c.createElement(h ? "span" : "div", {
                            "data-slate-spacer": !0,
                            style: {
                                height: "0",
                                color: "transparent",
                                outline: "none",
                                position: "absolute"
                            }
                        }, c.createElement(eR, {
                            renderPlaceholder: o,
                            decorations: [],
                            isLast: !1,
                            parent: r,
                            text: m
                        })), E.set(m, 0), B.set(m, r)
                    }
                    return n({
                        attributes: g,
                        children: D,
                        element: r
                    })
                }, (e, t) => e.element === t.element && e.renderElement === t.renderElement && e.renderLeaf === t.renderLeaf && e.renderPlaceholder === t.renderPlaceholder && eF(e.decorations, t.decorations) && (e.selection === t.selection || !!e.selection && !!t.selection && f.Range.equals(e.selection, t.selection))),
                eL = e => {
                    var {
                        attributes: t,
                        children: r,
                        element: n
                    } = e, i = eT().isInline(n) ? "span" : "div";
                    return c.createElement(i, Object.assign({}, t, {
                        style: {
                            position: "relative"
                        }
                    }), r)
                },
                eN = (0, l.createContext)(() => []),
                ez = () => (0, l.useContext)(eN),
                eW = (0, l.createContext)(!1),
                eq = () => (0, l.useContext)(eW),
                eV = e => {
                    for (var {
                            decorations: t,
                            node: r,
                            renderElement: n,
                            renderPlaceholder: i,
                            renderLeaf: o,
                            selection: a
                        } = e, u = ez(), s = eT(), l = eE.findPath(s, r), d = [], h = f.Element.isElement(r) && !s.isInline(r) && f.Editor.hasInlines(s, r), p = 0; p < r.children.length; p++) {
                        var v = l.concat(p),
                            D = r.children[p],
                            g = eE.findKey(s, D),
                            C = f.Editor.range(s, v),
                            m = a && f.Range.intersection(C, a),
                            y = u([D, v]);
                        for (var b of t) {
                            var A = f.Range.intersection(b, C);
                            A && y.push(A)
                        }
                        f.Element.isElement(D) ? d.push(c.createElement(eW.Provider, {
                            key: "provider-".concat(g.id),
                            value: !!m
                        }, c.createElement(eI, {
                            decorations: y,
                            element: D,
                            key: g.id,
                            renderElement: n,
                            renderPlaceholder: i,
                            renderLeaf: o,
                            selection: m
                        }))) : d.push(c.createElement(eR, {
                            decorations: y,
                            key: g.id,
                            isLast: h && p === r.children.length - 1,
                            parent: r,
                            renderPlaceholder: i,
                            renderLeaf: o,
                            text: D
                        })), E.set(D, p), B.set(D, r)
                    }
                    return d
                },
                eU = (0, l.createContext)(!1),
                eH = () => (0, l.useContext)(eU),
                eJ = (0, l.createContext)(null),
                eK = () => {
                    var e = (0, l.useContext)(eJ);
                    if (!e) throw Error("The `useSlate` hook must be used inside the <Slate> component's context.");
                    var {
                        editor: t
                    } = e;
                    return t
                },
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
                    undo: "mod+z"
                },
                eX = {
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
                    transposeCharacter: "ctrl+t"
                },
                eQ = {
                    deleteWordBackward: "ctrl+shift?+backspace",
                    deleteWordForward: "ctrl+shift?+delete",
                    redo: ["ctrl+y", "ctrl+shift+z"]
                },
                eG = e => {
                    var t = e$[e],
                        r = eX[e],
                        n = eQ[e],
                        i = t && (0, p.isKeyHotkey)(t),
                        o = r && (0, p.isKeyHotkey)(r),
                        a = n && (0, p.isKeyHotkey)(n);
                    return e => !!(i && i(e) || es && o && o(e) || !es && a && a(e)) || !1
                },
                eY = {
                    isBold: eG("bold"),
                    isCompose: eG("compose"),
                    isMoveBackward: eG("moveBackward"),
                    isMoveForward: eG("moveForward"),
                    isDeleteBackward: eG("deleteBackward"),
                    isDeleteForward: eG("deleteForward"),
                    isDeleteLineBackward: eG("deleteLineBackward"),
                    isDeleteLineForward: eG("deleteLineForward"),
                    isDeleteWordBackward: eG("deleteWordBackward"),
                    isDeleteWordForward: eG("deleteWordForward"),
                    isExtendBackward: eG("extendBackward"),
                    isExtendForward: eG("extendForward"),
                    isExtendLineBackward: eG("extendLineBackward"),
                    isExtendLineForward: eG("extendLineForward"),
                    isItalic: eG("italic"),
                    isMoveLineBackward: eG("moveLineBackward"),
                    isMoveLineForward: eG("moveLineForward"),
                    isMoveWordBackward: eG("moveWordBackward"),
                    isMoveWordForward: eG("moveWordForward"),
                    isRedo: eG("redo"),
                    isSoftBreak: eG("insertSoftBreak"),
                    isSplitBlock: eG("splitBlock"),
                    isTransposeCharacter: eG("transposeCharacter"),
                    isUndo: eG("undo")
                },
                eZ = (e, t) => {
                    var r = [],
                        n = () => {
                            r = []
                        };
                    return {
                        registerMutations: n => {
                            if (t.current) {
                                var i = n.filter(t => eo(e, t, n));
                                r.push(...i)
                            }
                        },
                        restoreDOM: function() {
                            r.length > 0 && (r.reverse().forEach(e => {
                                "characterData" !== e.type && (e.removedNodes.forEach(t => {
                                    e.target.insertBefore(t, e.nextSibling)
                                }), e.addedNodes.forEach(t => {
                                    e.target.removeChild(t)
                                }))
                            }), n())
                        },
                        clear: n
                    }
                },
                e0 = {
                    subtree: !0,
                    childList: !0,
                    characterData: !0,
                    characterDataOldValue: !0
                };
            class e1 extends l.Component {
                observe() {
                    var e, {
                        node: t
                    } = this.props;
                    if (!t.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
                    null === (e = this.mutationObserver) || void 0 === e || e.observe(t.current, e0)
                }
                componentDidMount() {
                    var {
                        receivedUserInput: e
                    } = this.props, t = this.context;
                    this.manager = eZ(t, e), this.mutationObserver = new MutationObserver(this.manager.registerMutations), this.observe()
                }
                getSnapshotBeforeUpdate() {
                    var e, t, r, n, i = null === (e = this.mutationObserver) || void 0 === e ? void 0 : e.takeRecords();
                    return null != i && i.length && (null === (n = this.manager) || void 0 === n || n.registerMutations(i)), null === (t = this.mutationObserver) || void 0 === t || t.disconnect(), null === (r = this.manager) || void 0 === r || r.restoreDOM(), null
                }
                componentDidUpdate() {
                    var e;
                    null === (e = this.manager) || void 0 === e || e.clear(), this.observe()
                }
                componentWillUnmount() {
                    var e;
                    null === (e = this.mutationObserver) || void 0 === e || e.disconnect()
                }
                render() {
                    return this.props.children
                }
                constructor() {
                    super(...arguments), this.context = null, this.manager = null, this.mutationObserver = null
                }
            }
            e1.contextType = eS;
            var e2 = el ? e1 : e => {
                var {
                    children: t
                } = e;
                return c.createElement(c.Fragment, null, t)
            };

            function e3(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                return r.reduce((e, t) => e.slice(0, t.start) + t.text + e.slice(t.end), e)
            }

            function e7(e, t) {
                var {
                    start: r,
                    end: n,
                    text: i
                } = t, o = e.slice(r, n), a = function(e, t) {
                    for (var r = Math.min(e.length, t.length), n = 0; n < r; n++)
                        if (e.charAt(n) !== t.charAt(n)) return n;
                    return r
                }(o, i), u = Math.min(o.length - a, i.length - a), s = function(e, t, r) {
                    for (var n = Math.min(e.length, t.length, r), i = 0; i < n; i++)
                        if (e.charAt(e.length - i - 1) !== t.charAt(t.length - i - 1)) return i;
                    return n
                }(o, i, u), l = {
                    start: r + a,
                    end: n - s,
                    text: i.slice(a, i.length - s)
                };
                return l.start === l.end && 0 === l.text.length ? null : l
            }

            function e4(e, t) {
                var {
                    path: r,
                    offset: n
                } = t;
                if (!f.Editor.hasPath(e, r)) return null;
                var i = f.Node.get(e, r);
                if (!f.Text.isText(i)) return null;
                var o = f.Editor.above(e, {
                    match: t => f.Element.isElement(t) && f.Editor.isBlock(e, t),
                    at: r
                });
                if (!o) return null;
                for (; n > i.text.length;) {
                    var a = f.Editor.next(e, {
                        at: r,
                        match: f.Text.isText
                    });
                    if (!a || !f.Path.isDescendant(a[1], o[1])) return null;
                    n -= i.text.length, i = a[0], r = a[1]
                }
                return {
                    path: r,
                    offset: n
                }
            }

            function e5(e, t) {
                var r = e4(e, t.anchor);
                if (!r) return null;
                if (f.Range.isCollapsed(t)) return {
                    anchor: r,
                    focus: r
                };
                var n = e4(e, t.focus);
                return n ? {
                    anchor: r,
                    focus: n
                } : null
            }

            function e8(e, t, r) {
                var n = L.get(e),
                    i = null == n ? void 0 : n.find(e => {
                        var {
                            path: r
                        } = e;
                        return f.Path.equals(r, t.path)
                    });
                if (!i || t.offset <= i.diff.start) return f.Point.transform(t, r, {
                    affinity: "backward"
                });
                var {
                    diff: o
                } = i;
                if (t.offset <= o.start + o.text.length) {
                    var a = {
                            path: t.path,
                            offset: o.start
                        },
                        u = f.Point.transform(a, r, {
                            affinity: "backward"
                        });
                    return u ? {
                        path: u.path,
                        offset: u.offset + t.offset - o.start
                    } : null
                }
                var s = {
                        path: t.path,
                        offset: t.offset - o.text.length + o.end - o.start
                    },
                    l = f.Point.transform(s, r, {
                        affinity: "backward"
                    });
                return l ? "split_node" === r.type && f.Path.equals(r.path, t.path) && s.offset < r.position && o.start < r.position ? l : {
                    path: l.path,
                    offset: l.offset + o.text.length - o.end + o.start
                } : null
            }

            function e9(e, t, r) {
                var n = e8(e, t.anchor, r);
                if (!n) return null;
                if (f.Range.isCollapsed(t)) return {
                    anchor: n,
                    focus: n
                };
                var i = e8(e, t.focus, r);
                return i ? {
                    anchor: n,
                    focus: i
                } : null
            }

            function e6(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function te(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? e6(Object(r), !0).forEach(function(t) {
                        g(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : e6(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var tt = function() {},
                tr = e => (null == e ? void 0 : e.constructor.name) === "DataTransfer",
                tn = ["node"];

            function ti(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }
            var to = {
                    subtree: !0,
                    childList: !0,
                    characterData: !0
                },
                ta = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "scrollSelectionIntoView", "style", "as", "disableDefaultStyles"],
                tu = ["text"];

            function ts(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function tl(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ts(Object(r), !0).forEach(function(t) {
                        g(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ts(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var tc = e => c.createElement(c.Fragment, null, eV(e)),
                td = e => {
                    var t, r, n, o, u, d, h = (0, l.useCallback)(e => c.createElement(tf, Object.assign({}, e)), []),
                        {
                            autoFocus: p,
                            decorate: v = th,
                            onDOMBeforeInput: D,
                            placeholder: m,
                            readOnly: y = !1,
                            renderElement: E,
                            renderLeaf: B,
                            renderPlaceholder: O = h,
                            scrollSelectionIntoView: x = tp,
                            style: j = {},
                            as: U = "div",
                            disableDefaultStyles: J = !1
                        } = e,
                        Q = C(e, ta),
                        Y = eK(),
                        [Z, ee] = (0, l.useState)(!1),
                        et = (0, l.useRef)(null),
                        er = (0, l.useRef)([]);
                    var {
                        onUserInput: en,
                        receivedUserInput: ei
                    } = (t = eT(), r = (0, l.useRef)(!1), n = (0, l.useRef)(0), o = (0, l.useCallback)(() => {
                        if (!r.current) {
                            r.current = !0;
                            var e = eE.getWindow(t);
                            e.cancelAnimationFrame(n.current), n.current = e.requestAnimationFrame(() => {
                                r.current = !1
                            })
                        }
                    }, []), (0, l.useEffect)(() => () => cancelAnimationFrame(n.current), []), {
                        receivedUserInput: r,
                        onUserInput: o
                    }), [, ea] = (0, l.useReducer)(e => e + 1, 0);
                    W.set(Y, ea), k.set(Y, y);
                    var es = (0, l.useMemo)(() => ({
                        isDraggingInternally: !1,
                        isUpdatingSelection: !1,
                        latestElement: null,
                        hasMarkPlaceholder: !1
                    }), []);
                    (0, l.useLayoutEffect)(() => () => {
                        if (null != es) null != es.latestElement && (es.latestElement.remove(), es.latestElement = null)
                    }, []), (0, l.useEffect)(() => {
                        et.current && p && et.current.focus()
                    }, [p]);
                    var ef = (0, l.useCallback)(s(() => {
                            if ((el || !eE.isComposing(Y)) && (!es.isUpdatingSelection || null != ev && ev.isFlushing()) && !es.isDraggingInternally) {
                                var e = eE.findDocumentOrShadowRoot(Y),
                                    {
                                        activeElement: t
                                    } = e,
                                    r = eE.toDOMNode(Y, Y),
                                    n = e.getSelection();
                                if (t === r ? (es.latestElement = t, P.set(Y, !0)) : P.delete(Y), !n) return f.Transforms.deselect(Y);
                                var {
                                    anchorNode: i,
                                    focusNode: o
                                } = n, a = eE.hasEditableTarget(Y, i) || eE.isTargetInsideNonReadonlyVoid(Y, i), u = eE.hasEditableTarget(Y, o) || eE.isTargetInsideNonReadonlyVoid(Y, o);
                                if (a && u) {
                                    var s = eE.toSlateRange(Y, n, {
                                        exactMatch: !1,
                                        suppressThrow: !0
                                    });
                                    s && (eE.isComposing(Y) || null != ev && ev.hasPendingChanges() || null != ev && ev.isFlushing() ? null == ev || ev.handleUserSelect(s) : f.Transforms.select(Y, s))
                                }
                                y && (!a || !u) && f.Transforms.deselect(Y)
                            }
                        }, 100), [y]),
                        ep = (0, l.useMemo)(() => a(ef, 0), [ef]),
                        ev = function(e) {
                            var t, {
                                    node: r
                                } = e,
                                n = C(e, tn);
                            if (!el) return null;
                            var i = eT();
                            var o = (t = (0, l.useRef)(!1), (0, l.useEffect)(() => (t.current = !0, () => {
                                    t.current = !1
                                }), []), t.current),
                                [a] = (0, l.useState)(() => (function(e) {
                                    var {
                                        editor: t,
                                        scheduleOnDOMSelectionChange: r,
                                        onDOMSelectionChange: n
                                    } = e, i = !1, o = null, a = null, u = null, s = 0, l = !1, c = () => {
                                        var e = z.get(t);
                                        if (z.delete(t), e) {
                                            var {
                                                selection: r
                                            } = t, n = e5(t, e);
                                            n && (!r || !f.Range.equals(n, r)) && f.Transforms.select(t, n)
                                        }
                                    }, d = () => {
                                        var e = N.get(t);
                                        if (N.delete(t), e) {
                                            if (e.at) {
                                                var r = f.Point.isPoint(e.at) ? e4(t, e.at) : e5(t, e.at);
                                                if (!r) return;
                                                var n = f.Editor.range(t, r);
                                                (!t.selection || !f.Range.equals(t.selection, n)) && f.Transforms.select(t, r)
                                            }
                                            e.run()
                                        }
                                    }, h = () => {
                                        if (a && (clearTimeout(a), a = null), u && (clearTimeout(u), u = null), !C() && !g()) {
                                            c();
                                            return
                                        }!i && (i = !0, setTimeout(() => i = !1)), g() && (i = "action");
                                        var e = t.selection && f.Editor.rangeRef(t, t.selection, {
                                            affinity: "forward"
                                        });
                                        I.set(t, t.marks), tt("flush", N.get(t), L.get(t));
                                        for (var o = C(); s = null === (h = L.get(t)) || void 0 === h ? void 0 : h[0];) {
                                            var s, h, p, v = R.get(t);
                                            void 0 !== v && (R.delete(t), t.marks = v), v && !1 === l && (l = null);
                                            var D = function(e) {
                                                var {
                                                    path: t,
                                                    diff: r
                                                } = e;
                                                return {
                                                    anchor: {
                                                        path: t,
                                                        offset: r.start
                                                    },
                                                    focus: {
                                                        path: t,
                                                        offset: r.end
                                                    }
                                                }
                                            }(s);
                                            (!t.selection || !f.Range.equals(t.selection, D)) && f.Transforms.select(t, D), s.diff.text ? f.Editor.insertText(t, s.diff.text) : f.Editor.deleteFragment(t), L.set(t, null === (p = L.get(t)) || void 0 === p ? void 0 : p.filter(e => {
                                                var {
                                                    id: t
                                                } = e;
                                                return t !== s.id
                                            })), ! function(e, t) {
                                                var {
                                                    path: r,
                                                    diff: n
                                                } = t;
                                                if (!f.Editor.hasPath(e, r)) return !1;
                                                var i = f.Node.get(e, r);
                                                if (!f.Text.isText(i)) return !1;
                                                if (n.start !== i.text.length || 0 === n.text.length) return i.text.slice(n.start, n.start + n.text.length) === n.text;
                                                var o = f.Path.next(r);
                                                if (!f.Editor.hasPath(e, o)) return !1;
                                                var a = f.Node.get(e, o);
                                                return f.Text.isText(a) && a.text.startsWith(n.text)
                                            }(t, s) && (o = !1, N.delete(t), I.delete(t), i = "action", z.delete(t), r.cancel(), n.cancel(), null == e || e.unref())
                                        }
                                        var m = null == e ? void 0 : e.unref();
                                        if (m && !z.get(t) && (!t.selection || !f.Range.equals(m, t.selection)) && f.Transforms.select(t, m), g()) {
                                            d();
                                            return
                                        }
                                        o && r(), r.flush(), n.flush(), c();
                                        var y = I.get(t);
                                        I.delete(t), void 0 !== y && (t.marks = y, t.onChange())
                                    }, p = function() {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                                            r = w.get(t);
                                        if (r) {
                                            if (C() || e) {
                                                r.style.display = "none";
                                                return
                                            }
                                            r.style.removeProperty("display")
                                        }
                                    }, v = (e, r) => {
                                        var n, i, o, a, u, l, c, d, h, v = null !== (h = L.get(t)) && void 0 !== h ? h : [];
                                        L.set(t, v);
                                        var D = f.Node.leaf(t, e),
                                            g = v.findIndex(t => f.Path.equals(t.path, e));
                                        if (g < 0) {
                                            e7(D.text, r) && v.push({
                                                path: e,
                                                diff: r,
                                                id: s++
                                            }), p();
                                            return
                                        }
                                        var C = (n = D.text, i = v[g].diff, o = r, a = Math.min(i.start, o.start), u = Math.max(0, Math.min(i.start + i.text.length, o.end) - o.start), l = e3(n, i, o), c = Math.max(o.start + o.text.length, i.start + i.text.length + (i.start + i.text.length > o.start ? o.text.length : 0) - u), d = l.slice(a, c), e7(n, {
                                            start: a,
                                            end: Math.max(i.end, o.end - i.text.length + (i.end - i.start)),
                                            text: d
                                        }));
                                        if (!C) {
                                            v.splice(g, 1), p();
                                            return
                                        }
                                        v[g] = te(te({}, v[g]), {}, {
                                            diff: C
                                        })
                                    }, D = function(e) {
                                        var {
                                            at: i
                                        } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                        l = !1, z.delete(t), r.cancel(), n.cancel(), g() && h(), N.set(t, {
                                            at: i,
                                            run: e
                                        }), u = setTimeout(h)
                                    }, g = () => !!N.get(t), C = () => {
                                        var e;
                                        return !!(null !== (e = L.get(t)) && void 0 !== e && e.length)
                                    }, m = e => {
                                        z.set(t, e), a && (clearTimeout(a), a = null);
                                        var {
                                            selection: r
                                        } = t;
                                        if (e) {
                                            var n = !r || !f.Path.equals(r.anchor.path, e.anchor.path),
                                                i = !r || !f.Path.equals(r.anchor.path.slice(0, -1), e.anchor.path.slice(0, -1));
                                            (n && l || i) && (l = !1), (n || C()) && (a = setTimeout(h, 200))
                                        }
                                    }, y = () => {
                                        !g() && (u = setTimeout(h))
                                    };
                                    return {
                                        flush: h,
                                        scheduleFlush: y,
                                        hasPendingDiffs: C,
                                        hasPendingAction: g,
                                        hasPendingChanges: () => g() || C(),
                                        isFlushing: () => i,
                                        handleUserSelect: m,
                                        handleCompositionEnd: e => {
                                            o && clearTimeout(o), o = setTimeout(() => {
                                                S.set(t, !1), h()
                                            }, 25)
                                        },
                                        handleCompositionStart: e => {
                                            S.set(t, !0), o && (clearTimeout(o), o = null)
                                        },
                                        handleDOMBeforeInput: e => {
                                            a && (clearTimeout(a), a = null);
                                            var {
                                                inputType: r
                                            } = e, n = null, i = e.dataTransfer || e.data || void 0;
                                            !1 !== l && "insertText" !== r && "insertCompositionText" !== r && (l = !1);
                                            var [o] = e.getTargetRanges();
                                            o && (n = eE.toSlateRange(t, o, {
                                                exactMatch: !1,
                                                suppressThrow: !0
                                            }));
                                            var u = eE.getWindow(t).getSelection();
                                            if (!n && u && (o = u, n = eE.toSlateRange(t, u, {
                                                    exactMatch: !1,
                                                    suppressThrow: !0
                                                })), n = null !== (k = n) && void 0 !== k ? k : t.selection) {
                                                var s = !0;
                                                if (r.startsWith("delete")) {
                                                    if (f.Range.isExpanded(n)) {
                                                        var [c, d] = f.Range.edges(n);
                                                        if (f.Node.leaf(t, c.path).text.length === c.offset && 0 === d.offset) {
                                                            var h = f.Editor.next(t, {
                                                                at: c.path,
                                                                match: f.Text.isText
                                                            });
                                                            h && f.Path.equals(h[1], d.path) && (n = {
                                                                anchor: d,
                                                                focus: d
                                                            })
                                                        }
                                                    }
                                                    var p = r.endsWith("Backward") ? "backward" : "forward",
                                                        [g, C] = f.Range.edges(n),
                                                        [E, B] = f.Editor.leaf(t, g.path),
                                                        b = {
                                                            text: "",
                                                            start: g.offset,
                                                            end: C.offset
                                                        },
                                                        A = L.get(t),
                                                        w = null == A ? void 0 : A.find(e => f.Path.equals(e.path, B)),
                                                        F = w ? [w.diff, b] : [b];
                                                    if (0 === e3(E.text, ...F).length && (s = !1), f.Range.isExpanded(n)) {
                                                        if (s && f.Path.equals(n.anchor.path, n.focus.path)) {
                                                            var _ = {
                                                                path: n.anchor.path,
                                                                offset: g.offset
                                                            };
                                                            return m(f.Editor.range(t, _, _)), v(n.anchor.path, {
                                                                text: "",
                                                                end: C.offset,
                                                                start: g.offset
                                                            })
                                                        }
                                                        return D(() => f.Editor.deleteFragment(t, {
                                                            direction: p
                                                        }), {
                                                            at: n
                                                        })
                                                    }
                                                }
                                                switch (r) {
                                                    case "deleteByComposition":
                                                    case "deleteByCut":
                                                    case "deleteByDrag":
                                                        return D(() => f.Editor.deleteFragment(t), {
                                                            at: n
                                                        });
                                                    case "deleteContent":
                                                    case "deleteContentForward":
                                                        var {
                                                            anchor: O
                                                        } = n;
                                                        if (s && f.Range.isCollapsed(n)) {
                                                            var x = f.Node.leaf(t, O.path);
                                                            if (O.offset < x.text.length) return v(O.path, {
                                                                text: "",
                                                                start: O.offset,
                                                                end: O.offset + 1
                                                            })
                                                        }
                                                        return D(() => f.Editor.deleteForward(t), {
                                                            at: n
                                                        });
                                                    case "deleteContentBackward":
                                                        var k, P, {
                                                                anchor: S
                                                            } = n,
                                                            T = X(o) ? o.isCollapsed : !!(null !== (P = o) && void 0 !== P && P.collapsed);
                                                        if (s && T && f.Range.isCollapsed(n) && S.offset > 0) return v(S.path, {
                                                            text: "",
                                                            start: S.offset - 1,
                                                            end: S.offset
                                                        });
                                                        return D(() => f.Editor.deleteBackward(t), {
                                                            at: n
                                                        });
                                                    case "deleteEntireSoftLine":
                                                        return D(() => {
                                                            f.Editor.deleteBackward(t, {
                                                                unit: "line"
                                                            }), f.Editor.deleteForward(t, {
                                                                unit: "line"
                                                            })
                                                        }, {
                                                            at: n
                                                        });
                                                    case "deleteHardLineBackward":
                                                        return D(() => f.Editor.deleteBackward(t, {
                                                            unit: "block"
                                                        }), {
                                                            at: n
                                                        });
                                                    case "deleteSoftLineBackward":
                                                        return D(() => f.Editor.deleteBackward(t, {
                                                            unit: "line"
                                                        }), {
                                                            at: n
                                                        });
                                                    case "deleteHardLineForward":
                                                        return D(() => f.Editor.deleteForward(t, {
                                                            unit: "block"
                                                        }), {
                                                            at: n
                                                        });
                                                    case "deleteSoftLineForward":
                                                        return D(() => f.Editor.deleteForward(t, {
                                                            unit: "line"
                                                        }), {
                                                            at: n
                                                        });
                                                    case "deleteWordBackward":
                                                        return D(() => f.Editor.deleteBackward(t, {
                                                            unit: "word"
                                                        }), {
                                                            at: n
                                                        });
                                                    case "deleteWordForward":
                                                        return D(() => f.Editor.deleteForward(t, {
                                                            unit: "word"
                                                        }), {
                                                            at: n
                                                        });
                                                    case "insertLineBreak":
                                                        return D(() => f.Editor.insertSoftBreak(t), {
                                                            at: n
                                                        });
                                                    case "insertParagraph":
                                                        return D(() => f.Editor.insertBreak(t), {
                                                            at: n
                                                        });
                                                    case "insertCompositionText":
                                                    case "deleteCompositionText":
                                                    case "insertFromComposition":
                                                    case "insertFromDrop":
                                                    case "insertFromPaste":
                                                    case "insertFromYank":
                                                    case "insertReplacementText":
                                                    case "insertText":
                                                        if (tr(i)) return D(() => eE.insertData(t, i), {
                                                            at: n
                                                        });
                                                        var j = null != i ? i : "";
                                                        if (R.get(t) && (j = j.replace("\uFEFF", "")), "insertText" === r && /.*\n.*\n$/.test(j) && (j = j.slice(0, -1)), j.includes("\n")) return D(() => {
                                                            var e = j.split("\n");
                                                            e.forEach((r, n) => {
                                                                r && f.Editor.insertText(t, r), n !== e.length - 1 && f.Editor.insertSoftBreak(t)
                                                            })
                                                        }, {
                                                            at: n
                                                        });
                                                        if (f.Path.equals(n.anchor.path, n.focus.path)) {
                                                            var [M, I] = f.Range.edges(n), N = {
                                                                start: M.offset,
                                                                end: I.offset,
                                                                text: j
                                                            };
                                                            if (j && l && "insertCompositionText" === r) {
                                                                var z = l.start + l.text.search(/\S|$/);
                                                                N.start + N.text.search(/\S|$/) === z + 1 && N.end === l.start + l.text.length ? (N.start -= 1, l = null, y()) : l = !1
                                                            } else l = "insertText" === r && (null === l ? N : !!(l && f.Range.isCollapsed(n)) && l.end + l.text.length === M.offset && te(te({}, l), {}, {
                                                                text: l.text + j
                                                            }));
                                                            if (s) {
                                                                v(M.path, N);
                                                                return
                                                            }
                                                        }
                                                        return D(() => f.Editor.insertText(t, j), {
                                                            at: n
                                                        })
                                                }
                                            }
                                        },
                                        handleKeyDown: e => {
                                            !C() && (p(!0), setTimeout(p))
                                        },
                                        handleDomMutations: e => {
                                            if (!(C() || g()) && e.some(r => eo(t, r, e))) {
                                                var r;
                                                null === (r = W.get(t)) || void 0 === r || r()
                                            }
                                        },
                                        handleInput: () => {
                                            (g() || !C()) && h()
                                        }
                                    }
                                })(function(e) {
                                    for (var t = 1; t < arguments.length; t++) {
                                        var r = null != arguments[t] ? arguments[t] : {};
                                        t % 2 ? ti(Object(r), !0).forEach(function(t) {
                                            g(e, t, r[t])
                                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ti(Object(r)).forEach(function(t) {
                                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                        })
                                    }
                                    return e
                                }({
                                    editor: i
                                }, n)));
                            return ! function(e, t, r) {
                                var [n] = (0, l.useState)(() => new MutationObserver(t));
                                eO(() => {
                                    n.takeRecords()
                                }), (0, l.useEffect)(() => {
                                    if (!e.current) throw Error("Failed to attach MutationObserver, `node` is undefined");
                                    return n.observe(e.current, r), () => n.disconnect()
                                }, [])
                            }(r, a.handleDomMutations, to), M.set(i, a.scheduleFlush), o && a.flush(), a
                        }({
                            node: et,
                            onDOMSelectionChange: ef,
                            scheduleOnDOMSelectionChange: ep
                        });
                    eO(() => {
                        et.current && (e = H(et.current)) ? (b.set(Y, e), A.set(Y, et.current), _.set(Y, et.current), F.set(et.current, Y)) : _.delete(Y);
                        var e, {
                                selection: t
                            } = Y,
                            r = eE.findDocumentOrShadowRoot(Y).getSelection();
                        if (!(!r || !eE.isFocused(Y) || null != ev && ev.hasPendingAction())) {
                            var n = e => {
                                    var n = "None" !== r.type;
                                    if (t || n) {
                                        var i = A.get(Y),
                                            o = !1;
                                        if (i.contains(r.anchorNode) && i.contains(r.focusNode) && (o = !0), n && o && t && !e) {
                                            var a = eE.toSlateRange(Y, r, {
                                                exactMatch: !0,
                                                suppressThrow: !0
                                            });
                                            if (a && f.Range.equals(a, t)) {
                                                if (!es.hasMarkPlaceholder) return;
                                                var u, {
                                                    anchorNode: s
                                                } = r;
                                                if (null != s && null !== (u = s.parentElement) && void 0 !== u && u.hasAttribute("data-slate-mark-placeholder")) return
                                            }
                                        }
                                        if (t && !eE.hasRange(Y, t)) {
                                            Y.selection = eE.toSlateRange(Y, r, {
                                                exactMatch: !1,
                                                suppressThrow: !0
                                            });
                                            return
                                        }
                                        es.isUpdatingSelection = !0;
                                        var l = t && eE.toDOMRange(Y, t);
                                        return l ? (f.Range.isBackward(t) ? r.setBaseAndExtent(l.endContainer, l.endOffset, l.startContainer, l.startOffset) : r.setBaseAndExtent(l.startContainer, l.startOffset, l.endContainer, l.endOffset), x(Y, l)) : r.removeAllRanges(), l
                                    }
                                },
                                i = n(),
                                o = (null == ev ? void 0 : ev.isFlushing()) === "action";
                            if (!el || !o) {
                                setTimeout(() => {
                                    i && ec && eE.toDOMNode(Y, Y).focus(), es.isUpdatingSelection = !1
                                });
                                return
                            }
                            var a = null,
                                u = requestAnimationFrame(() => {
                                    if (o) {
                                        var e = e => {
                                            try {
                                                eE.toDOMNode(Y, Y).focus(), n(e)
                                            } catch (e) {}
                                        };
                                        e(), a = setTimeout(() => {
                                            e(!0), es.isUpdatingSelection = !1
                                        })
                                    }
                                });
                            return () => {
                                cancelAnimationFrame(u), a && clearTimeout(a)
                            }
                        }
                    });
                    var eB = (0, l.useCallback)(e => {
                            if (en(), !y && eE.hasEditableTarget(Y, e.target) && !tD(e, D)) {
                                if (ev) return ev.handleDOMBeforeInput(e);
                                ep.flush(), ef.flush();
                                var {
                                    selection: t
                                } = Y, {
                                    inputType: r
                                } = e, n = e.dataTransfer || e.data || void 0, i = "insertCompositionText" === r || "deleteCompositionText" === r;
                                if (i && eE.isComposing(Y)) return;
                                var o = !1;
                                if ("insertText" === r && t && f.Range.isCollapsed(t) && e.data && 1 === e.data.length && /[a-z ]/i.test(e.data) && 0 !== t.anchor.offset) {
                                    o = !0, Y.marks && (o = !1);
                                    var {
                                        anchor: a
                                    } = t, [u, s] = eE.toDOMPoint(Y, a), l = null === (h = u.parentElement) || void 0 === h ? void 0 : h.closest("a"), c = eE.getWindow(Y);
                                    if (o && l && eE.hasDOMNode(Y, l)) {
                                        var d, h, p, v, g = null == c ? void 0 : c.document.createTreeWalker(l, NodeFilter.SHOW_TEXT).lastChild();
                                        g === u && (null === (v = g.textContent) || void 0 === v ? void 0 : v.length) === s && (o = !1)
                                    }
                                    if (o && u.parentElement && (null == c ? void 0 : null === (p = c.getComputedStyle(u.parentElement)) || void 0 === p ? void 0 : p.whiteSpace) === "pre") {
                                        var C = f.Editor.above(Y, {
                                            at: a.path,
                                            match: e => f.Element.isElement(e) && f.Editor.isBlock(Y, e)
                                        });
                                        C && f.Node.string(C[0]).includes("	") && (o = !1)
                                    }
                                }
                                if (!r.startsWith("delete") || r.startsWith("deleteBy")) {
                                    var [m] = e.getTargetRanges();
                                    if (m) {
                                        var E = eE.toSlateRange(Y, m, {
                                            exactMatch: !1,
                                            suppressThrow: !1
                                        });
                                        if (!t || !f.Range.equals(t, E)) {
                                            o = !1;
                                            var B = !i && Y.selection && f.Editor.rangeRef(Y, Y.selection);
                                            f.Transforms.select(Y, E), B && T.set(Y, B)
                                        }
                                    }
                                }
                                if (!i) {
                                    if (!o && e.preventDefault(), t && f.Range.isExpanded(t) && r.startsWith("delete")) {
                                        var b = r.endsWith("Backward") ? "backward" : "forward";
                                        f.Editor.deleteFragment(Y, {
                                            direction: b
                                        });
                                        return
                                    }
                                    switch (r) {
                                        case "deleteByComposition":
                                        case "deleteByCut":
                                        case "deleteByDrag":
                                            f.Editor.deleteFragment(Y);
                                            break;
                                        case "deleteContent":
                                        case "deleteContentForward":
                                            f.Editor.deleteForward(Y);
                                            break;
                                        case "deleteContentBackward":
                                            f.Editor.deleteBackward(Y);
                                            break;
                                        case "deleteEntireSoftLine":
                                            f.Editor.deleteBackward(Y, {
                                                unit: "line"
                                            }), f.Editor.deleteForward(Y, {
                                                unit: "line"
                                            });
                                            break;
                                        case "deleteHardLineBackward":
                                            f.Editor.deleteBackward(Y, {
                                                unit: "block"
                                            });
                                            break;
                                        case "deleteSoftLineBackward":
                                            f.Editor.deleteBackward(Y, {
                                                unit: "line"
                                            });
                                            break;
                                        case "deleteHardLineForward":
                                            f.Editor.deleteForward(Y, {
                                                unit: "block"
                                            });
                                            break;
                                        case "deleteSoftLineForward":
                                            f.Editor.deleteForward(Y, {
                                                unit: "line"
                                            });
                                            break;
                                        case "deleteWordBackward":
                                            f.Editor.deleteBackward(Y, {
                                                unit: "word"
                                            });
                                            break;
                                        case "deleteWordForward":
                                            f.Editor.deleteForward(Y, {
                                                unit: "word"
                                            });
                                            break;
                                        case "insertLineBreak":
                                            f.Editor.insertSoftBreak(Y);
                                            break;
                                        case "insertParagraph":
                                            f.Editor.insertBreak(Y);
                                            break;
                                        case "insertFromComposition":
                                        case "insertFromDrop":
                                        case "insertFromPaste":
                                        case "insertFromYank":
                                        case "insertReplacementText":
                                        case "insertText":
                                            "insertFromComposition" === r && eE.isComposing(Y) && (ee(!1), S.set(Y, !1)), (null == n ? void 0 : n.constructor.name) === "DataTransfer" ? eE.insertData(Y, n) : "string" == typeof n && (o ? er.current.push(() => f.Editor.insertText(Y, n)) : f.Editor.insertText(Y, n))
                                    }
                                    var A = null === (d = T.get(Y)) || void 0 === d ? void 0 : d.unref();
                                    T.delete(Y), A && (!Y.selection || !f.Range.equals(Y.selection, A)) && f.Transforms.select(Y, A)
                                }
                            }
                        }, [y, D]),
                        eb = (0, l.useCallback)(e => {
                            null == e ? (ef.cancel(), ep.cancel(), A.delete(Y), _.delete(Y), et.current && ey && et.current.removeEventListener("beforeinput", eB)) : ey && e.addEventListener("beforeinput", eB), et.current = e
                        }, [et, eB, ef, ep]);
                    eO(() => {
                        var e = eE.getWindow(Y);
                        return e.document.addEventListener("selectionchange", ep), () => {
                            e.document.removeEventListener("selectionchange", ep)
                        }
                    }, [ep]);
                    var eA = v([Y, []]);
                    if (m && 1 === Y.children.length && 1 === Array.from(f.Node.texts(Y)).length && "" === f.Node.string(Y) && !Z) {
                        var ew = f.Editor.start(Y, []);
                        eA.push({
                            [q]: !0,
                            placeholder: m,
                            anchor: ew,
                            focus: ew
                        })
                    }
                    var {
                        marks: eF
                    } = Y;
                    if (es.hasMarkPlaceholder = !1, Y.selection && f.Range.isCollapsed(Y.selection) && eF) {
                        var {
                            anchor: e_
                        } = Y.selection, ex = f.Node.leaf(Y, e_.path), ek = C(ex, tu);
                        if (!f.Text.equals(ex, eF, {
                                loose: !0
                            })) {
                            es.hasMarkPlaceholder = !0;
                            var eP = Object.fromEntries(Object.keys(ek).map(e => [e, null]));
                            eA.push(tl(tl(tl({
                                [V]: !0
                            }, eP), eF), {}, {
                                anchor: e_,
                                focus: e_
                            }))
                        }
                    }(0, l.useEffect)(() => {
                        setTimeout(() => {
                            var {
                                selection: e
                            } = Y;
                            if (e) {
                                var {
                                    anchor: t
                                } = e, r = f.Node.leaf(Y, t.path);
                                if (eF && !f.Text.equals(r, eF, {
                                        loose: !0
                                    })) {
                                    R.set(Y, eF);
                                    return
                                }
                            }
                            R.delete(Y)
                        })
                    });
                    var eS = null === (u = w.get(Y)) || void 0 === u ? void 0 : null === (d = u.getBoundingClientRect()) || void 0 === d ? void 0 : d.height;
                    return c.createElement(eU.Provider, {
                        value: y
                    }, c.createElement(eN.Provider, {
                        value: v
                    }, c.createElement(e2, {
                        node: et,
                        receivedUserInput: ei
                    }, c.createElement(U, Object.assign({
                        role: y ? void 0 : "textbox",
                        "aria-multiline": !y || void 0
                    }, Q, {
                        spellCheck: (!!ey || !em) && Q.spellCheck,
                        autoCorrect: ey || !em ? Q.autoCorrect : "false",
                        autoCapitalize: ey || !em ? Q.autoCapitalize : "false",
                        "data-slate-editor": !0,
                        "data-slate-node": "value",
                        contentEditable: !y,
                        zindex: -1,
                        suppressContentEditableWarning: !0,
                        ref: eb,
                        style: tl(tl({}, J ? {} : tl({
                            position: "relative",
                            outline: "none",
                            whiteSpace: "pre-wrap",
                            wordWrap: "break-word"
                        }, eS ? {
                            minHeight: eS
                        } : {})), j),
                        onBeforeInput: (0, l.useCallback)(e => {
                            if (!ey && !y && !tv(e, Q.onBeforeInput) && eE.hasSelectableTarget(Y, e.target) && (e.preventDefault(), !eE.isComposing(Y))) {
                                var t = e.data;
                                f.Editor.insertText(Y, t)
                            }
                        }, [y]),
                        onInput: (0, l.useCallback)(e => {
                            if (!tv(e, Q.onInput)) {
                                if (ev) {
                                    ev.handleInput();
                                    return
                                }
                                for (var t of er.current) t();
                                er.current = []
                            }
                        }, []),
                        onBlur: (0, l.useCallback)(e => {
                            if (y || es.isUpdatingSelection || !eE.hasSelectableTarget(Y, e.target) || tv(e, Q.onBlur)) return;
                            var t = eE.findDocumentOrShadowRoot(Y);
                            if (es.latestElement === t.activeElement) return;
                            var {
                                relatedTarget: r
                            } = e;
                            if (r !== eE.toDOMNode(Y, Y)) {
                                if (!(K(r) && r.hasAttribute("data-slate-spacer"))) {
                                    if (null != r && $(r) && eE.hasDOMNode(Y, r)) {
                                        var n = eE.toSlateNode(Y, r);
                                        if (f.Element.isElement(n) && !Y.isVoid(n)) return
                                    }
                                    if (ed) {
                                        var i = t.getSelection();
                                        null == i || i.removeAllRanges()
                                    }
                                    P.delete(Y)
                                }
                            }
                        }, [y, Q.onBlur]),
                        onClick: (0, l.useCallback)(e => {
                            if (eE.hasTarget(Y, e.target) && !tv(e, Q.onClick) && $(e.target)) {
                                var t = eE.toSlateNode(Y, e.target),
                                    r = eE.findPath(Y, t);
                                if (!!f.Editor.hasPath(Y, r) && f.Node.get(Y, r) === t) {
                                    if (3 === e.detail && r.length >= 1) {
                                        var n = r;
                                        if (!(f.Element.isElement(t) && f.Editor.isBlock(Y, t))) {
                                            var i, o = f.Editor.above(Y, {
                                                match: e => f.Element.isElement(e) && f.Editor.isBlock(Y, e),
                                                at: r
                                            });
                                            n = null !== (i = null == o ? void 0 : o[1]) && void 0 !== i ? i : r.slice(0, 1)
                                        }
                                        var a = f.Editor.range(Y, n);
                                        f.Transforms.select(Y, a);
                                        return
                                    }
                                    if (!y) {
                                        var u = f.Editor.start(Y, r),
                                            s = f.Editor.end(Y, r),
                                            l = f.Editor.void(Y, {
                                                at: u
                                            }),
                                            c = f.Editor.void(Y, {
                                                at: s
                                            });
                                        if (l && c && f.Path.equals(l[1], c[1])) {
                                            var d = f.Editor.range(Y, u);
                                            f.Transforms.select(Y, d)
                                        }
                                    }
                                }
                            }
                        }, [y, Q.onClick]),
                        onCompositionEnd: (0, l.useCallback)(e => {
                            if (eE.hasSelectableTarget(Y, e.target) && (eE.isComposing(Y) && (ee(!1), S.set(Y, !1)), null == ev || ev.handleCompositionEnd(e), !tv(e, Q.onCompositionEnd) && !el && !ed && !eD && !eu && !eC && !eg && e.data)) {
                                var t = R.get(Y);
                                R.delete(Y), void 0 !== t && (I.set(Y, Y.marks), Y.marks = t), f.Editor.insertText(Y, e.data);
                                var r = I.get(Y);
                                I.delete(Y), void 0 !== r && (Y.marks = r)
                            }
                        }, [Q.onCompositionEnd]),
                        onCompositionUpdate: (0, l.useCallback)(e => {
                            eE.hasSelectableTarget(Y, e.target) && !tv(e, Q.onCompositionUpdate) && !eE.isComposing(Y) && (ee(!0), S.set(Y, !0))
                        }, [Q.onCompositionUpdate]),
                        onCompositionStart: (0, l.useCallback)(e => {
                            if (eE.hasSelectableTarget(Y, e.target) && (null == ev || ev.handleCompositionStart(e), !tv(e, Q.onCompositionStart) && !el)) {
                                ee(!0);
                                var {
                                    selection: t
                                } = Y;
                                if (t) {
                                    if (f.Range.isExpanded(t)) {
                                        f.Editor.deleteFragment(Y);
                                        return
                                    }
                                    var r = f.Editor.above(Y, {
                                        match: e => f.Element.isElement(e) && f.Editor.isInline(Y, e),
                                        mode: "highest"
                                    });
                                    if (r) {
                                        var [, n] = r;
                                        if (f.Editor.isEnd(Y, t.anchor, n)) {
                                            var i = f.Editor.after(Y, n);
                                            f.Transforms.setSelection(Y, {
                                                anchor: i,
                                                focus: i
                                            })
                                        }
                                    }
                                }
                            }
                        }, [Q.onCompositionStart]),
                        onCopy: (0, l.useCallback)(e => {
                            eE.hasSelectableTarget(Y, e.target) && !tv(e, Q.onCopy) && (e.preventDefault(), eE.setFragmentData(Y, e.clipboardData, "copy"))
                        }, [Q.onCopy]),
                        onCut: (0, l.useCallback)(e => {
                            if (!y && eE.hasSelectableTarget(Y, e.target) && !tv(e, Q.onCut)) {
                                e.preventDefault(), eE.setFragmentData(Y, e.clipboardData, "cut");
                                var {
                                    selection: t
                                } = Y;
                                if (t) {
                                    if (f.Range.isExpanded(t)) f.Editor.deleteFragment(Y);
                                    else {
                                        var r = f.Node.parent(Y, t.anchor.path);
                                        f.Editor.isVoid(Y, r) && f.Transforms.delete(Y)
                                    }
                                }
                            }
                        }, [y, Q.onCut]),
                        onDragOver: (0, l.useCallback)(e => {
                            if (eE.hasTarget(Y, e.target) && !tv(e, Q.onDragOver)) {
                                var t = eE.toSlateNode(Y, e.target);
                                f.Element.isElement(t) && f.Editor.isVoid(Y, t) && e.preventDefault()
                            }
                        }, [Q.onDragOver]),
                        onDragStart: (0, l.useCallback)(e => {
                            if (!y && eE.hasTarget(Y, e.target) && !tv(e, Q.onDragStart)) {
                                var t = eE.toSlateNode(Y, e.target),
                                    r = eE.findPath(Y, t);
                                if (f.Element.isElement(t) && f.Editor.isVoid(Y, t) || f.Editor.void(Y, {
                                        at: r,
                                        voids: !0
                                    })) {
                                    var n = f.Editor.range(Y, r);
                                    f.Transforms.select(Y, n)
                                }
                                es.isDraggingInternally = !0, eE.setFragmentData(Y, e.dataTransfer, "drag")
                            }
                        }, [y, Q.onDragStart]),
                        onDrop: (0, l.useCallback)(e => {
                            if (!y && eE.hasTarget(Y, e.target) && !tv(e, Q.onDrop)) {
                                e.preventDefault();
                                var t = Y.selection,
                                    r = eE.findEventRange(Y, e),
                                    n = e.dataTransfer;
                                f.Transforms.select(Y, r), es.isDraggingInternally && t && !f.Range.equals(t, r) && !f.Editor.void(Y, {
                                    at: r,
                                    voids: !0
                                }) && f.Transforms.delete(Y, {
                                    at: t
                                }), eE.insertData(Y, n), !eE.isFocused(Y) && eE.focus(Y)
                            }
                            es.isDraggingInternally = !1
                        }, [y, Q.onDrop]),
                        onDragEnd: (0, l.useCallback)(e => {
                            !y && es.isDraggingInternally && Q.onDragEnd && eE.hasTarget(Y, e.target) && Q.onDragEnd(e), es.isDraggingInternally = !1
                        }, [y, Q.onDragEnd]),
                        onFocus: (0, l.useCallback)(e => {
                            if (!y && !es.isUpdatingSelection && eE.hasEditableTarget(Y, e.target) && !tv(e, Q.onFocus)) {
                                var t = eE.toDOMNode(Y, Y),
                                    r = eE.findDocumentOrShadowRoot(Y);
                                if (es.latestElement = r.activeElement, ec && e.target !== t) {
                                    t.focus();
                                    return
                                }
                                P.set(Y, !0)
                            }
                        }, [y, Q.onFocus]),
                        onKeyDown: (0, l.useCallback)(e => {
                            if (!y && eE.hasEditableTarget(Y, e.target)) {
                                null == ev || ev.handleKeyDown(e);
                                var {
                                    nativeEvent: t
                                } = e;
                                if (eE.isComposing(Y) && !1 === t.isComposing && (S.set(Y, !1), ee(!1)), !(tv(e, Q.onKeyDown) || eE.isComposing(Y))) {
                                    var {
                                        selection: r
                                    } = Y, n = Y.children[null !== r ? r.focus.path[0] : 0], o = "rtl" === i(f.Node.string(n));
                                    if (eY.isRedo(t)) {
                                        e.preventDefault();
                                        "function" == typeof Y.redo && Y.redo();
                                        return
                                    }
                                    if (eY.isUndo(t)) {
                                        e.preventDefault();
                                        "function" == typeof Y.undo && Y.undo();
                                        return
                                    }
                                    if (eY.isMoveLineBackward(t)) {
                                        e.preventDefault(), f.Transforms.move(Y, {
                                            unit: "line",
                                            reverse: !0
                                        });
                                        return
                                    }
                                    if (eY.isMoveLineForward(t)) {
                                        e.preventDefault(), f.Transforms.move(Y, {
                                            unit: "line"
                                        });
                                        return
                                    }
                                    if (eY.isExtendLineBackward(t)) {
                                        e.preventDefault(), f.Transforms.move(Y, {
                                            unit: "line",
                                            edge: "focus",
                                            reverse: !0
                                        });
                                        return
                                    }
                                    if (eY.isExtendLineForward(t)) {
                                        e.preventDefault(), f.Transforms.move(Y, {
                                            unit: "line",
                                            edge: "focus"
                                        });
                                        return
                                    }
                                    if (eY.isMoveBackward(t)) {
                                        e.preventDefault(), r && f.Range.isCollapsed(r) ? f.Transforms.move(Y, {
                                            reverse: !o
                                        }) : f.Transforms.collapse(Y, {
                                            edge: "start"
                                        });
                                        return
                                    }
                                    if (eY.isMoveForward(t)) {
                                        e.preventDefault(), r && f.Range.isCollapsed(r) ? f.Transforms.move(Y, {
                                            reverse: o
                                        }) : f.Transforms.collapse(Y, {
                                            edge: "end"
                                        });
                                        return
                                    }
                                    if (eY.isMoveWordBackward(t)) {
                                        e.preventDefault(), r && f.Range.isExpanded(r) && f.Transforms.collapse(Y, {
                                            edge: "focus"
                                        }), f.Transforms.move(Y, {
                                            unit: "word",
                                            reverse: !o
                                        });
                                        return
                                    }
                                    if (eY.isMoveWordForward(t)) {
                                        e.preventDefault(), r && f.Range.isExpanded(r) && f.Transforms.collapse(Y, {
                                            edge: "focus"
                                        }), f.Transforms.move(Y, {
                                            unit: "word",
                                            reverse: o
                                        });
                                        return
                                    }
                                    if (ey) {
                                        if ((eh || ed) && r && (eY.isDeleteBackward(t) || eY.isDeleteForward(t)) && f.Range.isCollapsed(r)) {
                                            var a = f.Node.parent(Y, r.anchor.path);
                                            if (f.Element.isElement(a) && f.Editor.isVoid(Y, a) && (f.Editor.isInline(Y, a) || f.Editor.isBlock(Y, a))) {
                                                e.preventDefault(), f.Editor.deleteBackward(Y, {
                                                    unit: "block"
                                                });
                                                return
                                            }
                                        }
                                    } else {
                                        if (eY.isBold(t) || eY.isItalic(t) || eY.isTransposeCharacter(t)) {
                                            e.preventDefault();
                                            return
                                        }
                                        if (eY.isSoftBreak(t)) {
                                            e.preventDefault(), f.Editor.insertSoftBreak(Y);
                                            return
                                        }
                                        if (eY.isSplitBlock(t)) {
                                            e.preventDefault(), f.Editor.insertBreak(Y);
                                            return
                                        }
                                        if (eY.isDeleteBackward(t)) {
                                            e.preventDefault(), r && f.Range.isExpanded(r) ? f.Editor.deleteFragment(Y, {
                                                direction: "backward"
                                            }) : f.Editor.deleteBackward(Y);
                                            return
                                        }
                                        if (eY.isDeleteForward(t)) {
                                            e.preventDefault(), r && f.Range.isExpanded(r) ? f.Editor.deleteFragment(Y, {
                                                direction: "forward"
                                            }) : f.Editor.deleteForward(Y);
                                            return
                                        }
                                        if (eY.isDeleteLineBackward(t)) {
                                            e.preventDefault(), r && f.Range.isExpanded(r) ? f.Editor.deleteFragment(Y, {
                                                direction: "backward"
                                            }) : f.Editor.deleteBackward(Y, {
                                                unit: "line"
                                            });
                                            return
                                        }
                                        if (eY.isDeleteLineForward(t)) {
                                            e.preventDefault(), r && f.Range.isExpanded(r) ? f.Editor.deleteFragment(Y, {
                                                direction: "forward"
                                            }) : f.Editor.deleteForward(Y, {
                                                unit: "line"
                                            });
                                            return
                                        }
                                        if (eY.isDeleteWordBackward(t)) {
                                            e.preventDefault(), r && f.Range.isExpanded(r) ? f.Editor.deleteFragment(Y, {
                                                direction: "backward"
                                            }) : f.Editor.deleteBackward(Y, {
                                                unit: "word"
                                            });
                                            return
                                        }
                                        if (eY.isDeleteWordForward(t)) {
                                            e.preventDefault(), r && f.Range.isExpanded(r) ? f.Editor.deleteFragment(Y, {
                                                direction: "forward"
                                            }) : f.Editor.deleteForward(Y, {
                                                unit: "word"
                                            });
                                            return
                                        }
                                    }
                                }
                            }
                        }, [y, Q.onKeyDown]),
                        onPaste: (0, l.useCallback)(e => {
                            !y && eE.hasEditableTarget(Y, e.target) && !tv(e, Q.onPaste) && (!ey || G(e.nativeEvent) || ed) && (e.preventDefault(), eE.insertData(Y, e.clipboardData))
                        }, [y, Q.onPaste])
                    }), c.createElement(tc, {
                        decorations: eA,
                        node: Y,
                        renderElement: E,
                        renderPlaceholder: O,
                        renderLeaf: B,
                        selection: Y.selection
                    })))))
                },
                tf = e => {
                    var {
                        attributes: t,
                        children: r
                    } = e;
                    return c.createElement("span", Object.assign({}, t), r, el && c.createElement("br", null))
                },
                th = () => [],
                tp = (e, t) => {
                    if (t.getBoundingClientRect && (!e.selection || e.selection && f.Range.isCollapsed(e.selection))) {
                        var r = t.startContainer.parentElement;
                        r.getBoundingClientRect = t.getBoundingClientRect.bind(t), (0, d.default)(r, {
                            scrollMode: "if-needed"
                        }), delete r.getBoundingClientRect
                    }
                },
                tv = (e, t) => {
                    if (!t) return !1;
                    var r = t(e);
                    return null != r ? r : e.isDefaultPrevented() || e.isPropagationStopped()
                },
                tD = (e, t) => {
                    if (!t) return !1;
                    var r = t(e);
                    return null != r ? r : e.defaultPrevented
                },
                tg = (0, l.createContext)(!1),
                tC = () => (0, l.useContext)(tg),
                tm = (0, l.createContext)({}),
                ty = ["editor", "children", "onChange", "value"],
                tE = e => {
                    var t, r, n, i, {
                            editor: o,
                            children: a,
                            onChange: u,
                            value: s
                        } = e,
                        d = C(e, ty),
                        h = (0, l.useRef)(!1),
                        [p, v] = c.useState(() => {
                            if (!f.Node.isNodeList(s)) throw Error("[Slate] value is invalid! Expected a list of elements but got: ".concat(f.Scrubber.stringify(s)));
                            if (!f.Editor.isEditor(o)) throw Error("[Slate] editor is invalid! You passed: ".concat(f.Scrubber.stringify(o)));
                            return o.children = s, Object.assign(o, d), {
                                v: 0,
                                editor: o
                            }
                        });
                    var {
                        selectorContext: D,
                        onChange: g
                    } = (t = o, r = (0, l.useRef)([]).current, n = (0, l.useRef)({
                        editor: t
                    }).current, i = (0, l.useCallback)(e => {
                        n.editor = e, r.forEach(t => t(e))
                    }, []), {
                        selectorContext: (0, l.useMemo)(() => ({
                            getSlate: () => n.editor,
                            addEventListener: e => (r.push(e), () => {
                                r.splice(r.indexOf(e), 1)
                            })
                        }), [r, n]),
                        onChange: i
                    }), m = (0, l.useCallback)(() => {
                        u && u(o.children), v(e => ({
                            v: e.v + 1,
                            editor: o
                        })), g(o)
                    }, [u]);
                    (0, l.useEffect)(() => (j.set(o, m), () => {
                        j.set(o, () => {}), h.current = !0
                    }), [m]);
                    var [y, E] = (0, l.useState)(eE.isFocused(o));
                    return (0, l.useEffect)(() => {
                        E(eE.isFocused(o))
                    }), eO(() => {
                        var e = () => E(eE.isFocused(o));
                        return ea ? (document.addEventListener("focusin", e), document.addEventListener("focusout", e), () => {
                            document.removeEventListener("focusin", e), document.removeEventListener("focusout", e)
                        }) : (document.addEventListener("focus", e, !0), document.addEventListener("blur", e, !0), () => {
                            document.removeEventListener("focus", e, !0), document.removeEventListener("blur", e, !0)
                        })
                    }, []), c.createElement(tm.Provider, {
                        value: D
                    }, c.createElement(eJ.Provider, {
                        value: p
                    }, c.createElement(eS.Provider, {
                        value: p.editor
                    }, c.createElement(tg.Provider, {
                        value: y
                    }, a))))
                },
                tB = (e, t) => {
                    var r = (t.top + t.bottom) / 2;
                    return e.top <= r && e.bottom >= r
                },
                tb = (e, t, r) => {
                    var n = eE.toDOMRange(e, t).getBoundingClientRect(),
                        i = eE.toDOMRange(e, r).getBoundingClientRect();
                    return tB(n, i) && tB(i, n)
                },
                tA = (e, t) => {
                    var r = f.Editor.range(e, f.Range.end(t)),
                        n = Array.from(f.Editor.positions(e, {
                            at: t
                        })),
                        i = 0,
                        o = n.length,
                        a = Math.floor(o / 2);
                    if (tb(e, f.Editor.range(e, n[i]), r)) return f.Editor.range(e, n[i], r);
                    if (n.length < 2) return f.Editor.range(e, n[n.length - 1], r);
                    for (; a !== n.length && a !== i;) tb(e, f.Editor.range(e, n[a]), r) ? o = a : i = a, a = Math.floor((i + o) / 2);
                    return f.Editor.range(e, n[o], r)
                };

            function tw(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function tF(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? tw(Object(r), !0).forEach(function(t) {
                        g(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : tw(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var t_ = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "x-slate-fragment",
                        {
                            apply: r,
                            onChange: n,
                            deleteBackward: i,
                            addMark: o,
                            removeMark: a
                        } = e;
                    return x.set(e, new WeakMap), e.addMark = (t, r) => {
                        var n, i;
                        null === (n = M.get(e)) || void 0 === n || n(), !R.get(e) && null !== (i = L.get(e)) && void 0 !== i && i.length && R.set(e, null), I.delete(e), o(t, r)
                    }, e.removeMark = t => {
                        var r;
                        !R.get(e) && null !== (r = L.get(e)) && void 0 !== r && r.length && R.set(e, null), I.delete(e), a(t)
                    }, e.deleteBackward = t => {
                        if ("line" !== t) return i(t);
                        if (e.selection && f.Range.isCollapsed(e.selection)) {
                            var r = f.Editor.above(e, {
                                match: t => f.Element.isElement(t) && f.Editor.isBlock(e, t),
                                at: e.selection
                            });
                            if (r) {
                                var [, n] = r, o = f.Editor.range(e, n, e.selection.anchor), a = tA(e, o);
                                !f.Range.isCollapsed(a) && f.Transforms.delete(e, {
                                    at: a
                                })
                            }
                        }
                    }, e.apply = t => {
                        var n, i = [],
                            o = L.get(e);
                        if (null != o && o.length) {
                            var a = o.map(e => (function(e, t) {
                                var {
                                    path: r,
                                    diff: n,
                                    id: i
                                } = e;
                                switch (t.type) {
                                    case "insert_text":
                                        if (!f.Path.equals(t.path, r) || t.offset >= n.end) return e;
                                        if (t.offset <= n.start) return {
                                            diff: {
                                                start: t.text.length + n.start,
                                                end: t.text.length + n.end,
                                                text: n.text
                                            },
                                            id: i,
                                            path: r
                                        };
                                        return {
                                            diff: {
                                                start: n.start,
                                                end: n.end + t.text.length,
                                                text: n.text
                                            }, id: i, path: r
                                        };
                                    case "remove_text":
                                        if (!f.Path.equals(t.path, r) || t.offset >= n.end) return e;
                                        if (t.offset + t.text.length <= n.start) return {
                                            diff: {
                                                start: n.start - t.text.length,
                                                end: n.end - t.text.length,
                                                text: n.text
                                            },
                                            id: i,
                                            path: r
                                        };
                                        return {
                                            diff: {
                                                start: n.start,
                                                end: n.end - t.text.length,
                                                text: n.text
                                            }, id: i, path: r
                                        };
                                    case "split_node":
                                        if (!f.Path.equals(t.path, r) || t.position >= n.end) return {
                                            diff: n,
                                            id: i,
                                            path: f.Path.transform(r, t, {
                                                affinity: "backward"
                                            })
                                        };
                                        if (t.position > n.start) return {
                                            diff: {
                                                start: n.start,
                                                end: Math.min(t.position, n.end),
                                                text: n.text
                                            },
                                            id: i,
                                            path: r
                                        };
                                        return {
                                            diff: {
                                                start: n.start - t.position,
                                                end: n.end - t.position,
                                                text: n.text
                                            }, id: i, path: f.Path.transform(r, t, {
                                                affinity: "forward"
                                            })
                                        };
                                    case "merge_node":
                                        if (!f.Path.equals(t.path, r)) return {
                                            diff: n,
                                            id: i,
                                            path: f.Path.transform(r, t)
                                        };
                                        return {
                                            diff: {
                                                start: n.start + t.position,
                                                end: n.end + t.position,
                                                text: n.text
                                            }, id: i, path: f.Path.transform(r, t)
                                        }
                                }
                                var o = f.Path.transform(r, t);
                                return o ? {
                                    diff: n,
                                    path: o,
                                    id: i
                                } : null
                            })(e, t)).filter(Boolean);
                            L.set(e, a)
                        }
                        var u = z.get(e);
                        u && z.set(e, e9(e, u, t));
                        var s = N.get(e);
                        if (null != s && s.at) {
                            var l = f.Point.isPoint(null == s ? void 0 : s.at) ? e8(e, s.at, t) : e9(e, s.at, t);
                            N.set(e, l ? tF(tF({}, s), {}, {
                                at: l
                            }) : null)
                        }
                        switch (t.type) {
                            case "insert_text":
                            case "remove_text":
                            case "set_node":
                            case "split_node":
                                i.push(...tO(e, t.path));
                                break;
                            case "set_selection":
                                null === (n = T.get(e)) || void 0 === n || n.unref(), T.delete(e);
                                break;
                            case "insert_node":
                            case "remove_node":
                                i.push(...tO(e, f.Path.parent(t.path)));
                                break;
                            case "merge_node":
                                i.push(...tO(e, f.Path.previous(t.path)));
                                break;
                            case "move_node":
                                i.push(...tO(e, f.Path.common(f.Path.parent(t.path), f.Path.parent(t.newPath))))
                        }
                        for (var [c, d] of(r(t), i)) {
                            var [h] = f.Editor.node(e, c);
                            O.set(h, d)
                        }
                    }, e.setFragmentData = r => {
                        var {
                            selection: n
                        } = e;
                        if (!!n) {
                            var [i, o] = f.Range.edges(n), a = f.Editor.void(e, {
                                at: i.path
                            }), u = f.Editor.void(e, {
                                at: o.path
                            });
                            if (!f.Range.isCollapsed(n) || a) {
                                var s = eE.toDOMRange(e, n),
                                    l = s.cloneContents(),
                                    c = l.childNodes[0];
                                if (l.childNodes.forEach(e => {
                                        e.textContent && "" !== e.textContent.trim() && (c = e)
                                    }), u) {
                                    var [d] = u, h = s.cloneRange(), p = eE.toDOMNode(e, d);
                                    h.setEndAfter(p), l = h.cloneContents()
                                }
                                if (a && (c = l.querySelector("[data-slate-spacer]")), Array.from(l.querySelectorAll("[data-slate-zero-width]")).forEach(e => {
                                        var t = "n" === e.getAttribute("data-slate-zero-width");
                                        e.textContent = t ? "\n" : ""
                                    }), Q(c)) {
                                    var v = c.ownerDocument.createElement("span");
                                    v.style.whiteSpace = "pre", v.appendChild(c), l.appendChild(v), c = v
                                }
                                var D = JSON.stringify(e.getFragment()),
                                    g = window.btoa(encodeURIComponent(D));
                                c.setAttribute("data-slate-fragment", g), r.setData("application/".concat(t), g);
                                var C = l.ownerDocument.createElement("div");
                                return C.appendChild(l), C.setAttribute("hidden", "true"), l.ownerDocument.body.appendChild(C), r.setData("text/html", C.innerHTML), r.setData("text/plain", er(C)), l.ownerDocument.body.removeChild(C), r
                            }
                        }
                    }, e.insertData = t => {
                        !e.insertFragmentData(t) && e.insertTextData(t)
                    }, e.insertFragmentData = r => {
                        var n = r.getData("application/".concat(t)) || ei(r);
                        if (n) {
                            var i = JSON.parse(decodeURIComponent(window.atob(n)));
                            return e.insertFragment(i), !0
                        }
                        return !1
                    }, e.insertTextData = t => {
                        var r = t.getData("text/plain");
                        if (r) {
                            var n = r.split(/\r\n|\r|\n/),
                                i = !1;
                            for (var o of n) i && f.Transforms.splitNodes(e, {
                                always: !0
                            }), e.insertText(o), i = !0;
                            return !0
                        }
                        return !1
                    }, e.onChange = t => {
                        D.unstable_batchedUpdates(() => {
                            var r = j.get(e);
                            r && r(), n(t)
                        })
                    }, e
                },
                tO = (e, t) => {
                    var r = [];
                    for (var [n, i] of f.Editor.levels(e, {
                            at: t
                        })) {
                        var o = eE.findKey(e, n);
                        r.push([i, o])
                    }
                    return r
                }
        },
        358806: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                DOMRectReadOnly: function() {
                    return DOMRectReadOnly
                }
            }), r("274635");
            var n = r("26098"),
                DOMRectReadOnly = function() {
                    function DOMRectReadOnly(e, t, r, i) {
                        return this.x = e, this.y = t, this.width = r, this.height = i, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, (0, n.freeze)(this)
                    }
                    return DOMRectReadOnly.prototype.toJSON = function() {
                        return {
                            x: this.x,
                            y: this.y,
                            top: this.top,
                            right: this.right,
                            bottom: this.bottom,
                            left: this.left,
                            width: this.width,
                            height: this.height
                        }
                    }, DOMRectReadOnly.fromRect = function(e) {
                        return new DOMRectReadOnly(e.x, e.y, e.width, e.height)
                    }, DOMRectReadOnly
                }()
        },
        654269: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                ResizeObservation: function() {
                    return a
                }
            });
            var n = r("252089"),
                i = r("334935"),
                o = r("467980"),
                a = function() {
                    function e(e, t) {
                        this.target = e, this.observedBox = t || n.ResizeObserverBoxOptions.CONTENT_BOX, this.lastReportedSize = {
                            inlineSize: 0,
                            blockSize: 0
                        }
                    }
                    return e.prototype.isActive = function() {
                        var e, t = (0, i.calculateBoxSize)(this.target, this.observedBox, !0);
                        if (e = this.target, !(0, o.isSVG)(e) && !(0, o.isReplacedElement)(e) && "inline" === getComputedStyle(e).display) this.lastReportedSize = t;
                        return this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize || !1
                    }, e
                }()
        },
        693935: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                ResizeObserver: function() {
                    return ResizeObserver
                }
            }), r("70102");
            var n = r("994853"),
                i = r("467980"),
                ResizeObserver = function() {
                    function ResizeObserver(e) {
                        if (0 == arguments.length) throw TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
                        if ("function" != typeof e) throw TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
                        n.ResizeObserverController.connect(this, e)
                    }
                    return ResizeObserver.prototype.observe = function(e, t) {
                        if (0 == arguments.length) throw TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
                        if (!(0, i.isElement)(e)) throw TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
                        n.ResizeObserverController.observe(this, e, t)
                    }, ResizeObserver.prototype.unobserve = function(e) {
                        if (0 == arguments.length) throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
                        if (!(0, i.isElement)(e)) throw TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
                        n.ResizeObserverController.unobserve(this, e)
                    }, ResizeObserver.prototype.disconnect = function() {
                        n.ResizeObserverController.disconnect(this)
                    }, ResizeObserver.toString = function() {
                        return "function ResizeObserver () { [polyfill code] }"
                    }, ResizeObserver
                }()
        },
        252089: function(e, t, r) {
            "use strict";
            var n, i;
            r.r(t), r.d(t, {
                ResizeObserverBoxOptions: function() {
                    return n
                }
            }), (i = n || (n = {})).BORDER_BOX = "border-box", i.CONTENT_BOX = "content-box", i.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box"
        },
        994853: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                ResizeObserverController: function() {
                    return l
                }
            }), r("222007"), r("424973");
            var n = r("917712"),
                i = r("654269"),
                o = r("170489"),
                a = r("243546"),
                u = new WeakMap,
                s = function(e, t) {
                    for (var r = 0; r < e.length; r += 1)
                        if (e[r].target === t) return r;
                    return -1
                },
                l = function() {
                    function e() {}
                    return e.connect = function(e, t) {
                        var r = new o.ResizeObserverDetail(e, t);
                        u.set(e, r)
                    }, e.observe = function(e, t, r) {
                        var o = u.get(e),
                            l = 0 === o.observationTargets.length;
                        0 > s(o.observationTargets, t) && (l && a.resizeObservers.push(o), o.observationTargets.push(new i.ResizeObservation(t, r && r.box)), (0, n.updateCount)(1), n.scheduler.schedule())
                    }, e.unobserve = function(e, t) {
                        var r = u.get(e),
                            i = s(r.observationTargets, t),
                            o = 1 === r.observationTargets.length;
                        i >= 0 && (o && a.resizeObservers.splice(a.resizeObservers.indexOf(r), 1), r.observationTargets.splice(i, 1), (0, n.updateCount)(-1))
                    }, e.disconnect = function(e) {
                        var t = this,
                            r = u.get(e);
                        r.observationTargets.slice().forEach(function(r) {
                            return t.unobserve(e, r.target)
                        }), r.activeTargets.splice(0, r.activeTargets.length)
                    }, e
                }()
        },
        170489: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                ResizeObserverDetail: function() {
                    return n
                }
            });
            var n = function(e, t) {
                this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = e, this.callback = t
            }
        },
        987291: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                ResizeObserverEntry: function() {
                    return ResizeObserverEntry
                }
            });
            var n = r("334935"),
                i = r("26098"),
                ResizeObserverEntry = function(e) {
                    var t = (0, n.calculateBoxSizes)(e);
                    this.target = e, this.contentRect = t.contentRect, this.borderBoxSize = (0, i.freeze)([t.borderBoxSize]), this.contentBoxSize = (0, i.freeze)([t.contentBoxSize]), this.devicePixelContentBoxSize = (0, i.freeze)([t.devicePixelContentBoxSize])
                }
        },
        235583: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                ResizeObserverSize: function() {
                    return i
                }
            });
            var n = r("26098"),
                i = function(e, t) {
                    this.inlineSize = e, this.blockSize = t, (0, n.freeze)(this)
                }
        },
        211974: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                broadcastActiveObservations: function() {
                    return u
                }
            }), r("424973");
            var n = r("243546"),
                i = r("987291"),
                o = r("909639"),
                a = r("334935"),
                u = function() {
                    var e = 1 / 0,
                        t = [];
                    n.resizeObservers.forEach(function(r) {
                        if (0 !== r.activeTargets.length) {
                            var n = [];
                            r.activeTargets.forEach(function(t) {
                                var r = new i.ResizeObserverEntry(t.target),
                                    u = (0, o.calculateDepthForNode)(t.target);
                                n.push(r), t.lastReportedSize = (0, a.calculateBoxSize)(t.target, t.observedBox), u < e && (e = u)
                            }), t.push(function() {
                                r.callback.call(r.observer, n, r.observer)
                            }), r.activeTargets.splice(0, r.activeTargets.length)
                        }
                    });
                    for (var r = 0; r < t.length; r++)(0, t[r])();
                    return e
                }
        },
        334935: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                calculateBoxSize: function() {
                    return g
                },
                calculateBoxSizes: function() {
                    return D
                }
            }), r("222007");
            var n = r("252089"),
                i = r("235583"),
                o = r("358806"),
                a = r("467980"),
                u = r("26098"),
                s = r("344502"),
                l = new WeakMap,
                c = /auto|scroll/,
                d = /^tb|vertical/,
                f = /msie|trident/i.test(s.global.navigator && s.global.navigator.userAgent),
                h = function(e) {
                    return parseFloat(e || "0")
                },
                p = function(e, t, r) {
                    return void 0 === e && (e = 0), void 0 === t && (t = 0), void 0 === r && (r = !1), new i.ResizeObserverSize((r ? t : e) || 0, (r ? e : t) || 0)
                },
                v = (0, u.freeze)({
                    devicePixelContentBoxSize: p(),
                    borderBoxSize: p(),
                    contentBoxSize: p(),
                    contentRect: new o.DOMRectReadOnly(0, 0, 0, 0)
                }),
                D = function(e, t) {
                    if (void 0 === t && (t = !1), l.has(e) && !t) return l.get(e);
                    if ((0, a.isHidden)(e)) return l.set(e, v), v;
                    var r = getComputedStyle(e),
                        n = (0, a.isSVG)(e) && e.ownerSVGElement && e.getBBox(),
                        i = !f && "border-box" === r.boxSizing,
                        s = d.test(r.writingMode || ""),
                        D = !n && c.test(r.overflowY || ""),
                        g = !n && c.test(r.overflowX || ""),
                        C = n ? 0 : h(r.paddingTop),
                        m = n ? 0 : h(r.paddingRight),
                        y = n ? 0 : h(r.paddingBottom),
                        E = n ? 0 : h(r.paddingLeft),
                        B = n ? 0 : h(r.borderTopWidth),
                        b = n ? 0 : h(r.borderRightWidth),
                        A = n ? 0 : h(r.borderBottomWidth),
                        w = n ? 0 : h(r.borderLeftWidth),
                        F = E + m,
                        _ = C + y,
                        O = w + b,
                        x = B + A,
                        k = g ? e.offsetHeight - x - e.clientHeight : 0,
                        P = D ? e.offsetWidth - O - e.clientWidth : 0,
                        S = n ? n.width : h(r.width) - (i ? F + O : 0) - P,
                        T = n ? n.height : h(r.height) - (i ? _ + x : 0) - k,
                        j = S + F + P + O,
                        M = T + _ + k + x,
                        R = (0, u.freeze)({
                            devicePixelContentBoxSize: p(Math.round(S * devicePixelRatio), Math.round(T * devicePixelRatio), s),
                            borderBoxSize: p(j, M, s),
                            contentBoxSize: p(S, T, s),
                            contentRect: new o.DOMRectReadOnly(E, C, S, T)
                        });
                    return l.set(e, R), R
                },
                g = function(e, t, r) {
                    var i = D(e, r),
                        o = i.borderBoxSize,
                        a = i.contentBoxSize,
                        u = i.devicePixelContentBoxSize;
                    switch (t) {
                        case n.ResizeObserverBoxOptions.DEVICE_PIXEL_CONTENT_BOX:
                            return u;
                        case n.ResizeObserverBoxOptions.BORDER_BOX:
                            return o;
                        default:
                            return a
                    }
                }
        },
        909639: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                calculateDepthForNode: function() {
                    return i
                }
            });
            var n = r("467980"),
                i = function(e) {
                    if ((0, n.isHidden)(e)) return 1 / 0;
                    for (var t = 0, r = e.parentNode; r;) t += 1, r = r.parentNode;
                    return t
                }
        },
        196134: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                deliverResizeLoopError: function() {
                    return i
                }
            });
            var n = "ResizeObserver loop completed with undelivered notifications.",
                i = function() {
                    var e;
                    "function" == typeof ErrorEvent ? e = new ErrorEvent("error", {
                        message: n
                    }) : ((e = document.createEvent("Event")).initEvent("error", !1, !1), e.message = n), window.dispatchEvent(e)
                }
        },
        650536: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                gatherActiveObservationsAtDepth: function() {
                    return o
                }
            }), r("424973");
            var n = r("243546"),
                i = r("909639"),
                o = function(e) {
                    n.resizeObservers.forEach(function(t) {
                        t.activeTargets.splice(0, t.activeTargets.length), t.skippedTargets.splice(0, t.skippedTargets.length), t.observationTargets.forEach(function(r) {
                            r.isActive() && ((0, i.calculateDepthForNode)(r.target) > e ? t.activeTargets.push(r) : t.skippedTargets.push(r))
                        })
                    })
                }
        },
        763985: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                hasActiveObservations: function() {
                    return i
                }
            });
            var n = r("243546"),
                i = function() {
                    return n.resizeObservers.some(function(e) {
                        return e.activeTargets.length > 0
                    })
                }
        },
        360668: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                hasSkippedObservations: function() {
                    return i
                }
            });
            var n = r("243546"),
                i = function() {
                    return n.resizeObservers.some(function(e) {
                        return e.skippedTargets.length > 0
                    })
                }
        },
        871477: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                ResizeObserver: function() {
                    return n.ResizeObserver
                }
            });
            var n = r("693935");
            r("987291"), r("235583")
        },
        467980: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                isSVG: function() {
                    return n
                },
                isHidden: function() {
                    return i
                },
                isElement: function() {
                    return o
                },
                isReplacedElement: function() {
                    return a
                }
            });
            var n = function(e) {
                    return e instanceof SVGElement && "getBBox" in e
                },
                i = function(e) {
                    if (n(e)) {
                        var t = e.getBBox(),
                            r = t.width,
                            i = t.height;
                        return !r && !i
                    }
                    var o = e.offsetWidth,
                        a = e.offsetHeight;
                    return !(o || a || e.getClientRects().length)
                },
                o = function(e) {
                    if (e instanceof Element) return !0;
                    var t, r = null === (t = null == e ? void 0 : e.ownerDocument) || void 0 === t ? void 0 : t.defaultView;
                    return !!(r && e instanceof r.Element)
                },
                a = function(e) {
                    switch (e.tagName) {
                        case "INPUT":
                            if ("image" !== e.type) break;
                        case "VIDEO":
                        case "AUDIO":
                        case "EMBED":
                        case "OBJECT":
                        case "CANVAS":
                        case "IFRAME":
                        case "IMG":
                            return !0
                    }
                    return !1
                }
        },
        26098: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                freeze: function() {
                    return n
                }
            });
            var n = function(e) {
                return Object.freeze(e)
            }
        },
        344502: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                global: function() {
                    return n
                }
            });
            var n = "undefined" != typeof window ? window : {}
        },
        812587: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                process: function() {
                    return s
                }
            });
            var n = r("763985"),
                i = r("360668"),
                o = r("196134"),
                a = r("211974"),
                u = r("650536"),
                s = function() {
                    var e = 0;
                    for ((0, u.gatherActiveObservationsAtDepth)(e);
                        (0, n.hasActiveObservations)();) e = (0, a.broadcastActiveObservations)(), (0, u.gatherActiveObservationsAtDepth)(e);
                    return (0, i.hasSkippedObservations)() && (0, o.deliverResizeLoopError)(), e > 0
                }
        },
        194530: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                queueMicroTask: function() {
                    return o
                }
            }), r("424973");
            var n, i = [],
                o = function(e) {
                    if (!n) {
                        var t = 0,
                            r = document.createTextNode("");
                        new MutationObserver(function() {
                            return i.splice(0).forEach(function(e) {
                                return e()
                            })
                        }).observe(r, {
                            characterData: !0
                        }), n = function() {
                            r.textContent = "".concat(t ? t-- : t++)
                        }
                    }
                    i.push(e), n()
                }
        },
        118141: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                queueResizeObserver: function() {
                    return i
                }
            });
            var n = r("194530"),
                i = function(e) {
                    (0, n.queueMicroTask)(function() {
                        requestAnimationFrame(e)
                    })
                }
        },
        243546: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                resizeObservers: function() {
                    return n
                }
            });
            var n = []
        },
        917712: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                scheduler: function() {
                    return d
                },
                updateCount: function() {
                    return f
                }
            });
            var n = r("812587"),
                i = r("344502"),
                o = r("118141"),
                a = 0,
                u = {
                    attributes: !0,
                    characterData: !0,
                    childList: !0,
                    subtree: !0
                },
                s = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"],
                l = function(e) {
                    return void 0 === e && (e = 0), Date.now() + e
                },
                c = !1,
                d = new(function() {
                    function e() {
                        var e = this;
                        this.stopped = !0, this.listener = function() {
                            return e.schedule()
                        }
                    }
                    return e.prototype.run = function(e) {
                        var t = this;
                        if (void 0 === e && (e = 250), !c) {
                            c = !0;
                            var r = l(e);
                            (0, o.queueResizeObserver)(function() {
                                var i = !1;
                                try {
                                    i = (0, n.process)()
                                } finally {
                                    if (c = !1, e = r - l(), !a) return;
                                    i ? t.run(1e3) : e > 0 ? t.run(e) : t.start()
                                }
                            })
                        }
                    }, e.prototype.schedule = function() {
                        this.stop(), this.run()
                    }, e.prototype.observe = function() {
                        var e = this,
                            t = function() {
                                return e.observer && e.observer.observe(document.body, u)
                            };
                        document.body ? t() : i.global.addEventListener("DOMContentLoaded", t)
                    }, e.prototype.start = function() {
                        var e = this;
                        this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), s.forEach(function(t) {
                            return i.global.addEventListener(t, e.listener, !0)
                        }))
                    }, e.prototype.stop = function() {
                        var e = this;
                        !this.stopped && (this.observer && this.observer.disconnect(), s.forEach(function(t) {
                            return i.global.removeEventListener(t, e.listener, !0)
                        }), this.stopped = !0)
                    }, e
                }()),
                f = function(e) {
                    !a && e > 0 && d.start(), (a += e) || d.stop()
                }
        },
        717837: function(e, t, r) {
            "use strict";
            e.exports = function(e) {
                return (e = String(e || ""), o.test(e)) ? "rtl" : a.test(e) ? "ltr" : "neutral"
            };
            var n = "֑-߿יִ-﷽ﹰ-ﻼ",
                i = "A-Za-z\xc0-\xd6\xd8-\xf6\xf8-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿",
                o = RegExp("^[^" + i + "]*[" + n + "]"),
                a = RegExp("^[^" + n + "]*[" + i + "]")
        },
        165826: function(e, t, r) {
            "use strict";
            r("781738"), r("222007"), Object.defineProperty(t, "__esModule", {
                value: !0
            });
            for (var n = "undefined" != typeof window && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), i = {
                    alt: "altKey",
                    control: "ctrlKey",
                    meta: "metaKey",
                    shift: "shiftKey"
                }, o = {
                    add: "+",
                    break: "pause",
                    cmd: "meta",
                    command: "meta",
                    ctl: "control",
                    ctrl: "control",
                    del: "delete",
                    down: "arrowdown",
                    esc: "escape",
                    ins: "insert",
                    left: "arrowleft",
                    mod: n ? "meta" : "control",
                    opt: "alt",
                    option: "alt",
                    return: "enter",
                    right: "arrowright",
                    space: " ",
                    spacebar: " ",
                    up: "arrowup",
                    win: "meta",
                    windows: "meta"
                }, a = {
                    backspace: 8,
                    tab: 9,
                    enter: 13,
                    shift: 16,
                    control: 17,
                    alt: 18,
                    pause: 19,
                    capslock: 20,
                    escape: 27,
                    " ": 32,
                    pageup: 33,
                    pagedown: 34,
                    end: 35,
                    home: 36,
                    arrowleft: 37,
                    arrowup: 38,
                    arrowright: 39,
                    arrowdown: 40,
                    insert: 45,
                    delete: 46,
                    meta: 91,
                    numlock: 144,
                    scrolllock: 145,
                    ";": 186,
                    "=": 187,
                    ",": 188,
                    "-": 189,
                    ".": 190,
                    "/": 191,
                    "`": 192,
                    "[": 219,
                    "\\": 220,
                    "]": 221,
                    "'": 222
                }, u = 1; u < 20; u++) a["f" + u] = 111 + u;

            function s(e, t, r) {
                t && !("byKey" in t) && (r = t, t = null), !Array.isArray(e) && (e = [e]);
                var n = e.map(function(e) {
                        return l(e, t)
                    }),
                    i = function(e) {
                        return n.some(function(t) {
                            return c(t, e)
                        })
                    };
                return null == r ? i : i(r)
            }

            function l(e, t) {
                var r = t && t.byKey,
                    n = {},
                    o = (e = e.replace("++", "+add")).split("+"),
                    a = o.length;
                for (var u in i) n[i[u]] = !1;
                var s = !0,
                    l = !1,
                    c = void 0;
                try {
                    for (var h, p = o[Symbol.iterator](); !(s = (h = p.next()).done); s = !0) {
                        var v = h.value,
                            D = v.endsWith("?") && v.length > 1;
                        D && (v = v.slice(0, -1));
                        var g = f(v),
                            C = i[g];
                        (1 === a || !C) && (r ? n.key = g : n.which = d(v)), C && (n[C] = !D || null)
                    }
                } catch (e) {
                    l = !0, c = e
                } finally {
                    try {
                        !s && p.return && p.return()
                    } finally {
                        if (l) throw c
                    }
                }
                return n
            }

            function c(e, t) {
                for (var r in e) {
                    var n = e[r],
                        i = void 0;
                    if (null != n) {
                        if ((null != (i = "key" === r && null != t.key ? t.key.toLowerCase() : "which" === r ? 91 === n && 93 === t.which ? 91 : t.which : t[r]) || !1 !== n) && i !== n) return !1
                    }
                }
                return !0
            }

            function d(e) {
                return a[e = f(e)] || e.toUpperCase().charCodeAt(0)
            }

            function f(e) {
                return e = o[e = e.toLowerCase()] || e
            }
            t.default = s, t.isHotkey = s, t.isCodeHotkey = function(e, t) {
                return s(e, t)
            }, t.isKeyHotkey = function(e, t) {
                return s(e, {
                    byKey: !0
                }, t)
            }, t.parseHotkey = l, t.compareHotkey = c, t.toKeyCode = d, t.toKeyName = f
        },
        334782: function(e, t, r) {
            e.exports = function(e, t) {
                for (var r = -1, n = null == e ? 0 : e.length; ++r < n && !1 !== t(e[r], r, e););
                return e
            }
        },
        253792: function(e, t, r) {
            var n = r("766665"),
                i = r("561662"),
                o = Object.prototype.hasOwnProperty;
            e.exports = function(e, t, r) {
                var a = e[t];
                (!(o.call(e, t) && i(a, r)) || void 0 === r && !(t in e)) && n(e, t, r)
            }
        },
        366726: function(e, t, r) {
            var n = r("330124"),
                i = r("466731");
            e.exports = function(e, t) {
                return e && n(t, i(t), e)
            }
        },
        855023: function(e, t, r) {
            var n = r("330124"),
                i = r("39417");
            e.exports = function(e, t) {
                return e && n(t, i(t), e)
            }
        },
        809408: function(e, t, r) {
            var n = r("146007"),
                i = r("334782"),
                o = r("253792"),
                a = r("366726"),
                u = r("855023"),
                s = r("552500"),
                l = r("561449"),
                c = r("619754"),
                d = r("310524"),
                f = r("904526"),
                h = r("552647"),
                p = r("540956"),
                v = r("925400"),
                D = r("493118"),
                g = r("789078"),
                C = r("725502"),
                m = r("591350"),
                y = r("751279"),
                E = r("285162"),
                B = r("154948"),
                b = r("466731"),
                A = "[object Arguments]",
                w = "[object Function]",
                F = "[object Object]",
                _ = {};
            _[A] = _["[object Array]"] = _["[object ArrayBuffer]"] = _["[object DataView]"] = _["[object Boolean]"] = _["[object Date]"] = _["[object Float32Array]"] = _["[object Float64Array]"] = _["[object Int8Array]"] = _["[object Int16Array]"] = _["[object Int32Array]"] = _["[object Map]"] = _["[object Number]"] = _[F] = _["[object RegExp]"] = _["[object Set]"] = _["[object String]"] = _["[object Symbol]"] = _["[object Uint8Array]"] = _["[object Uint8ClampedArray]"] = _["[object Uint16Array]"] = _["[object Uint32Array]"] = !0, _["[object Error]"] = _[w] = _["[object WeakMap]"] = !1;
            e.exports = function e(t, r, O, x, k, P) {
                var S, T = 1 & r,
                    j = 2 & r,
                    M = 4 & r;
                if (O && (S = k ? O(t, x, k, P) : O(t)), void 0 !== S) return S;
                if (!E(t)) return t;
                var R = C(t);
                if (R) {
                    if (S = v(t), !T) return l(t, S)
                } else {
                    var I = p(t),
                        L = I == w || "[object GeneratorFunction]" == I;
                    if (m(t)) return s(t, T);
                    if (I == F || I == A || L && !k) {
                        if (S = j || L ? {} : g(t), !T) return j ? d(t, u(S, t)) : c(t, a(S, t))
                    } else {
                        if (!_[I]) return k ? t : {};
                        S = D(t, I, T)
                    }
                }
                P || (P = new n);
                var N = P.get(t);
                if (N) return N;
                P.set(t, S), B(t) ? t.forEach(function(n) {
                    S.add(e(n, r, O, n, t, P))
                }) : y(t) && t.forEach(function(n, i) {
                    S.set(i, e(n, r, O, i, t, P))
                });
                var z = M ? j ? h : f : j ? keysIn : b,
                    W = R ? void 0 : z(t);
                return i(W || t, function(n, i) {
                    W && (n = t[i = n]), o(S, i, e(n, r, O, i, t, P))
                }), S
            }
        },
        717855: function(e, t, r) {
            var n = r("285162"),
                i = Object.create,
                o = function() {
                    function e() {}
                    return function(t) {
                        if (!n(t)) return {};
                        if (i) return i(t);
                        e.prototype = t;
                        var r = new e;
                        return e.prototype = void 0, r
                    }
                }();
            e.exports = o
        },
        391066: function(e, t, r) {
            var n = r("540956"),
                i = r("270879");
            e.exports = function(e) {
                return i(e) && "[object Map]" == n(e)
            }
        },
        129673: function(e, t, r) {
            var n = r("540956"),
                i = r("270879");
            e.exports = function(e) {
                return i(e) && "[object Set]" == n(e)
            }
        },
        366114: function(e, t, r) {
            r("424973");
            var n = r("285162"),
                i = r("733228"),
                o = r("383633"),
                a = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!n(e)) return o(e);
                var t = i(e),
                    r = [];
                for (var u in e) !("constructor" == u && (t || !a.call(e, u))) && r.push(u);
                return r
            }
        },
        890022: function(e, t, r) {
            e.exports = function(e, t, r) {
                var n = -1,
                    i = e.length;
                t < 0 && (t = -t > i ? 0 : i + t), (r = r > i ? i : r) < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
                for (var o = Array(i); ++n < i;) o[n] = e[n + t];
                return o
            }
        },
        168850: function(e, t, r) {
            var n = r("446288"),
                i = r("775730"),
                o = r("625301"),
                a = r("754076");
            e.exports = function(e, t) {
                return t = n(t, e), null == (e = o(e, t)) || delete e[a(i(t))]
            }
        },
        954873: function(e, t, r) {
            r("311790"), r("477657"), r("811875"), r("90301"), r("652153"), r("28797"), r("817884"), r("597349"), r("667536"), r("690341");
            var Uint8Array = r("474211");
            e.exports = function(e) {
                var t = new e.constructor(e.byteLength);
                return new Uint8Array(t).set(new Uint8Array(e)), t
            }
        },
        552500: function(e, t, r) {
            e = r.nmd(e);
            var n = r("690516"),
                i = "object" == typeof t && t && !t.nodeType && t,
                o = i && "object" == typeof e && e && !e.nodeType && e,
                a = o && o.exports === i ? n.Buffer : void 0,
                u = a ? a.allocUnsafe : void 0;
            e.exports = function(e, t) {
                if (t) return e.slice();
                var r = e.length,
                    n = u ? u(r) : new e.constructor(r);
                return e.copy(n), n
            }
        },
        203080: function(e, t, r) {
            var n = r("954873");
            e.exports = function(e, t) {
                var r = t ? n(e.buffer) : e.buffer;
                return new e.constructor(r, e.byteOffset, e.byteLength)
            }
        },
        738279: function(e, t, r) {
            var n = /\w*$/;
            e.exports = function(e) {
                var t = new e.constructor(e.source, n.exec(e));
                return t.lastIndex = e.lastIndex, t
            }
        },
        840132: function(e, t, r) {
            var Symbol = r("330206"),
                n = Symbol ? Symbol.prototype : void 0,
                i = n ? n.valueOf : void 0;
            e.exports = function(e) {
                return i ? Object(i.call(e)) : {}
            }
        },
        569787: function(e, t, r) {
            var n = r("954873");
            e.exports = function(e, t) {
                var r = t ? n(e.buffer) : e.buffer;
                return new e.constructor(r, e.byteOffset, e.length)
            }
        },
        561449: function(e, t, r) {
            e.exports = function(e, t) {
                var r = -1,
                    n = e.length;
                for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
                return t
            }
        },
        330124: function(e, t, r) {
            var n = r("253792"),
                i = r("766665");
            e.exports = function(e, t, r, o) {
                var a = !r;
                r || (r = {});
                for (var u = -1, s = t.length; ++u < s;) {
                    var l = t[u],
                        c = o ? o(r[l], e[l], l, r, e) : void 0;
                    void 0 === c && (c = e[l]), a ? i(r, l, c) : n(r, l, c)
                }
                return r
            }
        },
        619754: function(e, t, r) {
            var n = r("330124"),
                i = r("114359");
            e.exports = function(e, t) {
                return n(e, i(e), t)
            }
        },
        310524: function(e, t, r) {
            var n = r("330124"),
                i = r("35999");
            e.exports = function(e, t) {
                return n(e, i(e), t)
            }
        },
        701389: function(e, t, r) {
            var n = r("519110");
            e.exports = function(e) {
                return n(e) ? void 0 : e
            }
        },
        702820: function(e, t, r) {
            var n = r("345570"),
                i = r("21567"),
                o = r("970371");
            e.exports = function(e) {
                return o(i(e, void 0, n), e + "")
            }
        },
        552647: function(e, t, r) {
            var n = r("139438"),
                i = r("35999"),
                o = r("39417");
            e.exports = function(e) {
                return n(e, o, i)
            }
        },
        226741: function(e, t, r) {
            var n = r("761197")(Object.getPrototypeOf, Object);
            e.exports = n
        },
        35999: function(e, t, r) {
            var n = r("413256"),
                i = r("226741"),
                o = r("114359"),
                a = r("726281"),
                u = Object.getOwnPropertySymbols ? function(e) {
                    for (var t = []; e;) n(t, o(e)), e = i(e);
                    return t
                } : a;
            e.exports = u
        },
        925400: function(e, t, r) {
            var n = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                var t = e.length,
                    r = new e.constructor(t);
                return t && "string" == typeof e[0] && n.call(e, "index") && (r.index = e.index, r.input = e.input), r
            }
        },
        493118: function(e, t, r) {
            var n = r("954873"),
                i = r("203080"),
                o = r("738279"),
                a = r("840132"),
                u = r("569787");
            e.exports = function(e, t, r) {
                var s = e.constructor;
                switch (t) {
                    case "[object ArrayBuffer]":
                        return n(e);
                    case "[object Boolean]":
                    case "[object Date]":
                        return new s(+e);
                    case "[object DataView]":
                        return i(e, r);
                    case "[object Float32Array]":
                    case "[object Float64Array]":
                    case "[object Int8Array]":
                    case "[object Int16Array]":
                    case "[object Int32Array]":
                    case "[object Uint8Array]":
                    case "[object Uint8ClampedArray]":
                    case "[object Uint16Array]":
                    case "[object Uint32Array]":
                        return u(e, r);
                    case "[object Map]":
                    case "[object Set]":
                        return new s;
                    case "[object Number]":
                    case "[object String]":
                        return new s(e);
                    case "[object RegExp]":
                        return o(e);
                    case "[object Symbol]":
                        return a(e)
                }
            }
        },
        789078: function(e, t, r) {
            var n = r("717855"),
                i = r("226741"),
                o = r("733228");
            e.exports = function(e) {
                return "function" != typeof e.constructor || o(e) ? {} : n(i(e))
            }
        },
        383633: function(e, t, r) {
            r("424973");
            e.exports = function(e) {
                var t = [];
                if (null != e)
                    for (var r in Object(e)) t.push(r);
                return t
            }
        },
        625301: function(e, t, r) {
            var n = r("905577"),
                i = r("890022");
            e.exports = function(e, t) {
                return t.length < 2 ? e : n(e, i(t, 0, -1))
            }
        },
        751279: function(e, t, r) {
            var n = r("391066"),
                i = r("492692"),
                o = r("276440"),
                a = o && o.isMap,
                u = a ? i(a) : n;
            e.exports = u
        },
        519110: function(e, t, r) {
            var n = r("33426"),
                i = r("226741"),
                o = r("270879"),
                a = Object.prototype,
                u = Function.prototype.toString,
                s = a.hasOwnProperty,
                l = u.call(Object);
            e.exports = function(e) {
                if (!o(e) || "[object Object]" != n(e)) return !1;
                var t = i(e);
                if (null === t) return !0;
                var r = s.call(t, "constructor") && t.constructor;
                return "function" == typeof r && r instanceof r && u.call(r) == l
            }
        },
        154948: function(e, t, r) {
            var n = r("129673"),
                i = r("492692"),
                o = r("276440"),
                a = o && o.isSet,
                u = a ? i(a) : n;
            e.exports = u
        },
        39417: function(e, t, r) {
            var n = r("458389"),
                i = r("366114"),
                o = r("603108");
            e.exports = function(e) {
                return o(e) ? n(e, !0) : i(e)
            }
        },
        775730: function(e, t, r) {
            e.exports = function(e) {
                var t = null == e ? 0 : e.length;
                return t ? e[t - 1] : void 0
            }
        },
        376341: function(e, t, r) {
            var n = r("626785"),
                i = r("809408"),
                o = r("168850"),
                a = r("446288"),
                u = r("330124"),
                s = r("701389"),
                l = r("702820"),
                c = r("552647"),
                d = l(function(e, t) {
                    var r = {};
                    if (null == e) return r;
                    var l = !1;
                    t = n(t, function(t) {
                        return t = a(t, e), l || (l = t.length > 1), t
                    }), u(e, c(e), r), l && (r = i(r, 7, s));
                    for (var d = t.length; d--;) o(r, t[d]);
                    return r
                });
            e.exports = d
        },
        506264: function(e, t, r) {
            var Symbol = r("626849").Symbol;
            e.exports = Symbol
        },
        60297: function(e, t, r) {
            var Symbol = r("506264"),
                n = r("754892"),
                i = r("19797"),
                o = Symbol ? Symbol.toStringTag : void 0;
            e.exports = function(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : o && o in Object(e) ? n(e) : i(e)
            }
        },
        306551: function(e, t, r) {
            r("781738");
            var n = r("84927"),
                i = /^\s+/;
            e.exports = function(e) {
                return e ? e.slice(0, n(e) + 1).replace(i, "") : e
            }
        },
        571255: function(e, t, r) {
            var n = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
            e.exports = n
        },
        754892: function(e, t, r) {
            var Symbol = r("506264"),
                n = Object.prototype,
                i = n.hasOwnProperty,
                o = n.toString,
                a = Symbol ? Symbol.toStringTag : void 0;
            e.exports = function(e) {
                var t = i.call(e, a),
                    r = e[a];
                try {
                    e[a] = void 0;
                    var n = !0
                } catch (e) {}
                var u = o.call(e);
                return n && (t ? e[a] = r : delete e[a]), u
            }
        },
        19797: function(e, t, r) {
            var n = Object.prototype.toString;
            e.exports = function(e) {
                return n.call(e)
            }
        },
        626849: function(e, t, r) {
            r("854508");
            var n = r("571255"),
                i = "object" == typeof self && self && self.Object === Object && self,
                o = n || i || Function("return this")();
            e.exports = o
        },
        84927: function(e, t, r) {
            var n = /\s/;
            e.exports = function(e) {
                for (var t = e.length; t-- && n.test(e.charAt(t)););
                return t
            }
        },
        478098: function(e, t, r) {
            r("70102");
            var n = r("952133"),
                i = r("645942"),
                o = r("261497"),
                a = Math.max,
                u = Math.min;
            e.exports = function(e, t, r) {
                var s, l, c, d, f, h, p = 0,
                    v = !1,
                    D = !1,
                    g = !0;
                if ("function" != typeof e) throw TypeError("Expected a function");

                function C(t) {
                    var r = s,
                        n = l;
                    return s = l = void 0, p = t, d = e.apply(n, r)
                }
                t = o(t) || 0, n(r) && (v = !!r.leading, c = (D = "maxWait" in r) ? a(o(r.maxWait) || 0, t) : c, g = "trailing" in r ? !!r.trailing : g);

                function m(e) {
                    var r = e - h,
                        n = e - p;
                    return void 0 === h || r >= t || r < 0 || D && n >= c
                }

                function y() {
                    var e, r, n, o, a = i();
                    if (m(a)) return E(a);
                    f = setTimeout(y, (r = (e = a) - h, n = e - p, o = t - r, D ? u(o, c - n) : o))
                }

                function E(e) {
                    return (f = void 0, g && s) ? C(e) : (s = l = void 0, d)
                }

                function B() {
                    var e, r = i(),
                        n = m(r);
                    if (s = arguments, l = this, h = r, n) {
                        if (void 0 === f) {
                            ;
                            return p = e = h, f = setTimeout(y, t), v ? C(e) : d
                        }
                        if (D) return clearTimeout(f), f = setTimeout(y, t), C(h)
                    }
                    return void 0 === f && (f = setTimeout(y, t)), d
                }
                return B.cancel = function() {
                    void 0 !== f && clearTimeout(f), p = 0, s = h = l = f = void 0
                }, B.flush = function() {
                    return void 0 === f ? d : E(i())
                }, B
            }
        },
        952133: function(e, t, r) {
            e.exports = function(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }
        },
        346173: function(e, t, r) {
            e.exports = function(e) {
                return null != e && "object" == typeof e
            }
        },
        543066: function(e, t, r) {
            var n = r("60297"),
                i = r("346173");
            e.exports = function(e) {
                return "symbol" == typeof e || i(e) && "[object Symbol]" == n(e)
            }
        },
        645942: function(e, t, r) {
            var n = r("626849");
            e.exports = function() {
                return n.Date.now()
            }
        },
        229042: function(e, t, r) {
            r("70102");
            var n = r("478098"),
                i = r("952133");
            e.exports = function(e, t, r) {
                var o = !0,
                    a = !0;
                if ("function" != typeof e) throw TypeError("Expected a function");
                return i(r) && (o = "leading" in r ? !!r.leading : o, a = "trailing" in r ? !!r.trailing : a), n(e, t, {
                    leading: o,
                    maxWait: t,
                    trailing: a
                })
            }
        },
        261497: function(e, t, r) {
            var n = r("306551"),
                i = r("952133"),
                o = r("543066"),
                a = 0 / 0,
                u = /^[-+]0x[0-9a-f]+$/i,
                s = /^0b[01]+$/i,
                l = /^0o[0-7]+$/i,
                c = parseInt;
            e.exports = function(e) {
                if ("number" == typeof e) return e;
                if (o(e)) return a;
                if (i(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = i(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = n(e);
                var r = s.test(e);
                return r || l.test(e) ? c(e.slice(2), r ? 2 : 8) : u.test(e) ? a : +e
            }
        },
        87682: function(e, t, r) {
            var n = r("390493");
            "use strict";

            function i(e) {
                if ("string" != typeof e) throw TypeError("Path must be a string. Received " + JSON.stringify(e))
            }

            function o(e, t) {
                for (var r, n = "", i = 0, o = -1, a = 0, u = 0; u <= e.length; ++u) {
                    if (u < e.length) r = e.charCodeAt(u);
                    else if (47 === r) break;
                    else r = 47;
                    if (47 === r) {
                        if (o === u - 1 || 1 === a);
                        else if (o !== u - 1 && 2 === a) {
                            if (n.length < 2 || 2 !== i || 46 !== n.charCodeAt(n.length - 1) || 46 !== n.charCodeAt(n.length - 2)) {
                                if (n.length > 2) {
                                    var s = n.lastIndexOf("/");
                                    if (s !== n.length - 1) {
                                        -1 === s ? (n = "", i = 0) : i = (n = n.slice(0, s)).length - 1 - n.lastIndexOf("/"), o = u, a = 0;
                                        continue
                                    }
                                } else if (2 === n.length || 1 === n.length) {
                                    n = "", i = 0, o = u, a = 0;
                                    continue
                                }
                            }
                            t && (n.length > 0 ? n += "/.." : n = "..", i = 2)
                        } else n.length > 0 ? n += "/" + e.slice(o + 1, u) : n = e.slice(o + 1, u), i = u - o - 1;
                        o = u, a = 0
                    } else 46 === r && -1 !== a ? ++a : a = -1
                }
                return n
            }
            r("70102");
            var a = {
                resolve: function() {
                    for (var e, t, r = "", a = !1, u = arguments.length - 1; u >= -1 && !a; u--) u >= 0 ? t = arguments[u] : (void 0 === e && (e = n.cwd()), t = e), i(t), 0 !== t.length && (r = t + "/" + r, a = 47 === t.charCodeAt(0));
                    if (r = o(r, !a), a) return r.length > 0 ? "/" + r : "/";
                    if (r.length > 0) return r;
                    return "."
                },
                normalize: function(e) {
                    if (i(e), 0 === e.length) return ".";
                    var t = 47 === e.charCodeAt(0),
                        r = 47 === e.charCodeAt(e.length - 1);
                    return (0 === (e = o(e, !t)).length && !t && (e = "."), e.length > 0 && r && (e += "/"), t) ? "/" + e : e
                },
                isAbsolute: function(e) {
                    return i(e), e.length > 0 && 47 === e.charCodeAt(0)
                },
                join: function() {
                    if (0 == arguments.length) return ".";
                    for (var e, t = 0; t < arguments.length; ++t) {
                        var r = arguments[t];
                        i(r), r.length > 0 && (void 0 === e ? e = r : e += "/" + r)
                    }
                    return void 0 === e ? "." : a.normalize(e)
                },
                relative: function(e, t) {
                    if (i(e), i(t), e === t) return "";
                    if (e = a.resolve(e), e === (t = a.resolve(t))) return "";
                    for (var r = 1; r < e.length && 47 === e.charCodeAt(r); ++r);
                    for (var n = e.length, o = n - r, u = 1; u < t.length && 47 === t.charCodeAt(u); ++u);
                    for (var s = t.length - u, l = o < s ? o : s, c = -1, d = 0; d <= l; ++d) {
                        if (d === l) {
                            if (s > l) {
                                if (47 === t.charCodeAt(u + d)) return t.slice(u + d + 1);
                                if (0 === d) return t.slice(u + d)
                            } else o > l && (47 === e.charCodeAt(r + d) ? c = d : 0 === d && (c = 0));
                            break
                        }
                        var f = e.charCodeAt(r + d);
                        if (f !== t.charCodeAt(u + d)) break;
                        47 === f && (c = d)
                    }
                    var h = "";
                    for (d = r + c + 1; d <= n; ++d)(d === n || 47 === e.charCodeAt(d)) && (0 === h.length ? h += ".." : h += "/..");
                    return h.length > 0 ? h + t.slice(u + c) : (u += c, 47 === t.charCodeAt(u) && ++u, t.slice(u))
                },
                _makeLong: function(e) {
                    return e
                },
                dirname: function(e) {
                    if (i(e), 0 === e.length) return ".";
                    for (var t = e.charCodeAt(0), r = 47 === t, n = -1, o = !0, a = e.length - 1; a >= 1; --a)
                        if (47 === (t = e.charCodeAt(a))) {
                            if (!o) {
                                n = a;
                                break
                            }
                        } else o = !1;
                    return -1 === n ? r ? "/" : "." : r && 1 === n ? "//" : e.slice(0, n)
                },
                basename: function(e, t) {
                    if (void 0 !== t && "string" != typeof t) throw TypeError('"ext" argument must be a string');
                    i(e);
                    var r, n = 0,
                        o = -1,
                        a = !0;
                    if (void 0 !== t && t.length > 0 && t.length <= e.length) {
                        if (t.length === e.length && t === e) return "";
                        var u = t.length - 1,
                            s = -1;
                        for (r = e.length - 1; r >= 0; --r) {
                            var l = e.charCodeAt(r);
                            if (47 === l) {
                                if (!a) {
                                    n = r + 1;
                                    break
                                }
                            } else - 1 === s && (a = !1, s = r + 1), u >= 0 && (l === t.charCodeAt(u) ? -1 == --u && (o = r) : (u = -1, o = s))
                        }
                        return n === o ? o = s : -1 === o && (o = e.length), e.slice(n, o)
                    }
                    for (r = e.length - 1; r >= 0; --r)
                        if (47 === e.charCodeAt(r)) {
                            if (!a) {
                                n = r + 1;
                                break
                            }
                        } else - 1 === o && (a = !1, o = r + 1);
                    return -1 === o ? "" : e.slice(n, o)
                },
                extname: function(e) {
                    i(e);
                    for (var t = -1, r = 0, n = -1, o = !0, a = 0, u = e.length - 1; u >= 0; --u) {
                        var s = e.charCodeAt(u);
                        if (47 === s) {
                            if (!o) {
                                r = u + 1;
                                break
                            }
                            continue
                        } - 1 === n && (o = !1, n = u + 1), 46 === s ? -1 === t ? t = u : 1 !== a && (a = 1) : -1 !== t && (a = -1)
                    }
                    return -1 === t || -1 === n || 0 === a || 1 === a && t === n - 1 && t === r + 1 ? "" : e.slice(t, n)
                },
                format: function(e) {
                    var t, r, n;
                    if (null === e || "object" != typeof e) throw TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
                    return r = (t = e).dir || t.root, n = t.base || (t.name || "") + (t.ext || ""), r ? r === t.root ? r + n : r + "/" + n : n
                },
                parse: function(e) {
                    i(e);
                    var t, r = {
                        root: "",
                        dir: "",
                        base: "",
                        ext: "",
                        name: ""
                    };
                    if (0 === e.length) return r;
                    var n = e.charCodeAt(0),
                        o = 47 === n;
                    o ? (r.root = "/", t = 1) : t = 0;
                    for (var a = -1, u = 0, s = -1, l = !0, c = e.length - 1, d = 0; c >= t; --c) {
                        if (47 === (n = e.charCodeAt(c))) {
                            if (!l) {
                                u = c + 1;
                                break
                            }
                            continue
                        } - 1 === s && (l = !1, s = c + 1), 46 === n ? -1 === a ? a = c : 1 !== d && (d = 1) : -1 !== a && (d = -1)
                    }
                    return -1 === a || -1 === s || 0 === d || 1 === d && a === s - 1 && a === u + 1 ? -1 !== s && (0 === u && o ? r.base = r.name = e.slice(1, s) : r.base = r.name = e.slice(u, s)) : (0 === u && o ? (r.name = e.slice(1, a), r.base = e.slice(1, s)) : (r.name = e.slice(u, a), r.base = e.slice(u, s)), r.ext = e.slice(a, s)), u > 0 ? r.dir = e.slice(0, u - 1) : o && (r.dir = "/"), r
                },
                sep: "/",
                delimiter: ":",
                win32: null,
                posix: null
            };
            a.posix = a, e.exports = a
        },
        390266: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return o
                }
            });
            var n = r("604676");

            function i(e) {
                return e === Object(e) && 0 !== Object.keys(e).length
            }
            var o = function(e, t) {
                var r = e.isConnected || e.ownerDocument.documentElement.contains(e);
                if (i(t) && "function" == typeof t.behavior) return t.behavior(r ? (0, n.default)(e, t) : []);
                if (r) {
                    var o, a = !1 === (o = t) ? {
                        block: "end",
                        inline: "nearest"
                    } : i(o) ? o : {
                        block: "start",
                        inline: "nearest"
                    };
                    return function(e, t) {
                        void 0 === t && (t = "auto");
                        var r = "scrollBehavior" in document.body.style;
                        e.forEach(function(e) {
                            var n = e.el,
                                i = e.top,
                                o = e.left;
                            n.scroll && r ? n.scroll({
                                top: i,
                                left: o,
                                behavior: t
                            }) : (n.scrollTop = i, n.scrollLeft = o)
                        })
                    }((0, n.default)(e, a), a.behavior)
                }
            }
        },
        987295: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                Editor: function() {
                    return G
                },
                Element: function() {
                    return Element
                },
                Node: function() {
                    return Node
                },
                Path: function() {
                    return eo
                },
                Point: function() {
                    return el
                },
                Range: function() {
                    return Range
                },
                Scrubber: function() {
                    return ev
                },
                Text: function() {
                    return Text
                },
                Transforms: function() {
                    return eM
                },
                createEditor: function() {
                    return g
                }
            }), r("222007"), r("424973"), r("70102"), r("106442"), r("175143");
            var n, i, o = r("156336"),
                a = r("746140");

            function u(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r, e
            }
            var s = new WeakMap,
                l = new WeakMap,
                c = new WeakMap,
                d = new WeakMap,
                f = new WeakMap,
                h = new WeakMap,
                p = new WeakMap;

            function v(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function D(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(r), !0).forEach(function(t) {
                        u(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
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
                    apply: t => {
                        for (var r of G.pathRefs(e)) ea.transform(r, t);
                        for (var n of G.pointRefs(e)) ec.transform(n, t);
                        for (var i of G.rangeRefs(e)) eh.transform(i, t);
                        var o, a, u = s.get(e) || [],
                            d = l.get(e) || new Set,
                            f = e => {
                                if (e) {
                                    var t = e.join(",");
                                    !a.has(t) && (a.add(t), o.push(e))
                                }
                            };
                        if (eo.operationCanTransformPath(t))
                            for (var h of (o = [], a = new Set, u)) f(eo.transform(h, t));
                        else o = u, a = d;
                        for (var p of e.getDirtyPaths(t)) f(p);
                        s.set(e, o), l.set(e, a), eM.transform(e, t), e.operations.push(t), G.normalize(e, {
                            operation: t
                        }), "set_selection" === t.type && (e.marks = null), !c.get(e) && (c.set(e, !0), Promise.resolve().then(() => {
                            c.set(e, !1), e.onChange({
                                operation: t
                            }), e.operations = []
                        }))
                    },
                    addMark: (t, r) => {
                        var {
                            selection: n,
                            markableVoid: i
                        } = e;
                        if (n) {
                            var o = (t, r) => {
                                    if (!Text.isText(t)) return !1;
                                    var [n, i] = G.parent(e, r);
                                    return !e.isVoid(n) || e.markableVoid(n)
                                },
                                a = Range.isExpanded(n),
                                u = !1;
                            if (!a) {
                                var [s, l] = G.node(e, n);
                                if (s && o(s, l)) {
                                    var [d] = G.parent(e, l);
                                    u = d && e.markableVoid(d)
                                }
                            }
                            if (a || u) eM.setNodes(e, {
                                [t]: r
                            }, {
                                match: o,
                                split: !0,
                                voids: !0
                            });
                            else {
                                var f = D(D({}, G.marks(e) || {}), {}, {
                                    [t]: r
                                });
                                e.marks = f, !c.get(e) && e.onChange()
                            }
                        }
                    },
                    deleteBackward: t => {
                        var {
                            selection: r
                        } = e;
                        r && Range.isCollapsed(r) && eM.delete(e, {
                            unit: t,
                            reverse: !0
                        })
                    },
                    deleteForward: t => {
                        var {
                            selection: r
                        } = e;
                        r && Range.isCollapsed(r) && eM.delete(e, {
                            unit: t
                        })
                    },
                    deleteFragment: t => {
                        var {
                            selection: r
                        } = e;
                        r && Range.isExpanded(r) && eM.delete(e, {
                            reverse: "backward" === t
                        })
                    },
                    getFragment: () => {
                        var {
                            selection: t
                        } = e;
                        return t ? Node.fragment(e, t) : []
                    },
                    insertBreak: () => {
                        eM.splitNodes(e, {
                            always: !0
                        })
                    },
                    insertSoftBreak: () => {
                        eM.splitNodes(e, {
                            always: !0
                        })
                    },
                    insertFragment: t => {
                        eM.insertFragment(e, t)
                    },
                    insertNode: t => {
                        eM.insertNodes(e, t)
                    },
                    insertText: t => {
                        var {
                            selection: r,
                            marks: n
                        } = e;
                        if (r) {
                            if (n) {
                                var i = D({
                                    text: t
                                }, n);
                                eM.insertNodes(e, i)
                            } else eM.insertText(e, t);
                            e.marks = null
                        }
                    },
                    normalizeNode: t => {
                        var [r, n] = t;
                        if (!Text.isText(r)) {
                            if (Element.isElement(r) && 0 === r.children.length) {
                                eM.insertNodes(e, {
                                    text: ""
                                }, {
                                    at: n.concat(0),
                                    voids: !0
                                });
                                return
                            }
                            for (var i = !G.isEditor(r) && Element.isElement(r) && (e.isInline(r) || 0 === r.children.length || Text.isText(r.children[0]) || e.isInline(r.children[0])), o = 0, a = 0; a < r.children.length; a++, o++) {
                                var u = Node.get(e, n);
                                if (!Text.isText(u)) {
                                    var s = r.children[a],
                                        l = u.children[o - 1],
                                        c = a === r.children.length - 1;
                                    if ((Text.isText(s) || Element.isElement(s) && e.isInline(s)) !== i) eM.removeNodes(e, {
                                        at: n.concat(o),
                                        voids: !0
                                    }), o--;
                                    else if (Element.isElement(s)) {
                                        if (e.isInline(s)) {
                                            if (null != l && Text.isText(l)) {
                                                if (c) {
                                                    var d = {
                                                        text: ""
                                                    };
                                                    eM.insertNodes(e, d, {
                                                        at: n.concat(o + 1),
                                                        voids: !0
                                                    }), o++
                                                }
                                            } else {
                                                var f = {
                                                    text: ""
                                                };
                                                eM.insertNodes(e, f, {
                                                    at: n.concat(o),
                                                    voids: !0
                                                }), o++
                                            }
                                        }
                                    } else null != l && Text.isText(l) && (Text.equals(s, l, {
                                        loose: !0
                                    }) ? (eM.mergeNodes(e, {
                                        at: n.concat(o),
                                        voids: !0
                                    }), o--) : "" === l.text ? (eM.removeNodes(e, {
                                        at: n.concat(o - 1),
                                        voids: !0
                                    }), o--) : "" === s.text && (eM.removeNodes(e, {
                                        at: n.concat(o),
                                        voids: !0
                                    }), o--))
                                }
                            }
                        }
                    },
                    removeMark: t => {
                        var {
                            selection: r
                        } = e;
                        if (r) {
                            var n = (t, r) => {
                                    if (!Text.isText(t)) return !1;
                                    var [n, i] = G.parent(e, r);
                                    return !e.isVoid(n) || e.markableVoid(n)
                                },
                                i = Range.isExpanded(r),
                                o = !1;
                            if (!i) {
                                var [a, u] = G.node(e, r);
                                if (a && n(a, u)) {
                                    var [s] = G.parent(e, u);
                                    o = s && e.markableVoid(s)
                                }
                            }
                            if (i || o) eM.unsetNodes(e, t, {
                                match: n,
                                split: !0,
                                voids: !0
                            });
                            else {
                                var l = D({}, G.marks(e) || {});
                                delete l[t], e.marks = l, !c.get(e) && e.onChange()
                            }
                        }
                    },
                    getDirtyPaths: e => {
                        switch (e.type) {
                            case "insert_text":
                            case "remove_text":
                            case "set_node":
                                var {
                                    path: t
                                } = e;
                                return eo.levels(t);
                            case "insert_node":
                                var {
                                    node: r, path: n
                                } = e;
                                return [...eo.levels(n), ...Text.isText(r) ? [] : Array.from(Node.nodes(r), e => {
                                    var [, t] = e;
                                    return n.concat(t)
                                })];
                            case "merge_node":
                                var {
                                    path: i
                                } = e;
                                return [...eo.ancestors(i), eo.previous(i)];
                            case "move_node":
                                var {
                                    path: o, newPath: a
                                } = e;
                                if (eo.equals(o, a)) return [];
                                var u = [],
                                    s = [];
                                for (var l of eo.ancestors(o)) {
                                    var c = eo.transform(l, e);
                                    u.push(c)
                                }
                                for (var d of eo.ancestors(a)) {
                                    var f = eo.transform(d, e);
                                    s.push(f)
                                }
                                var h = s[s.length - 1],
                                    p = a[a.length - 1];
                                return [...u, ...s, h.concat(p)];
                            case "remove_node":
                                var {
                                    path: v
                                } = e;
                                return [...eo.ancestors(v)];
                            case "split_node":
                                var {
                                    path: D
                                } = e;
                                return [...eo.levels(D), eo.next(D)];
                            default:
                                return []
                        }
                    },
                    shouldNormalize: e => {
                        var {
                            iteration: t,
                            initialDirtyPathsLength: r
                        } = e, n = 42 * r;
                        if (t > n) throw Error("Could not completely normalize the editor after ".concat(n, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state."));
                        return !0
                    }
                };
                return e
            };

            function C(e, t) {
                if (null == e) return {};
                var r, n, i = function(e, t) {
                    if (null == e) return {};
                    var r, n, i = {},
                        o = Object.keys(e);
                    for (n = 0; n < o.length; n++) r = o[n], !(t.indexOf(r) >= 0) && (i[r] = e[r]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < o.length; n++) {
                        if (r = o[n], !(t.indexOf(r) >= 0)) Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
                    }
                }
                return i
            }
            var m = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = !t,
                        i = t ? F(e) : e,
                        o = n.None,
                        a = n.None,
                        u = 0,
                        s = null,
                        l = null;
                    for (var c of i) {
                        var d = c.codePointAt(0);
                        if (!d) break;
                        var f = L(c, d);
                        if ([o, a] = r ? [a, f] : [f, o], function(e, t) {
                                return (e & t) != 0
                            }(o, n.ZWJ) && function(e, t) {
                                return (e & t) != 0
                            }(a, n.ExtPict) && !(s = r ? q(e.substring(0, u)) : q(e.substring(0, e.length - u))) || function(e, t) {
                                return (e & t) != 0
                            }(o, n.RI) && function(e, t) {
                                return (e & t) != 0
                            }(a, n.RI) && !(l = null !== l ? !l : !!r || U(e.substring(0, e.length - u))) || o !== n.None && a !== n.None && function(e, t) {
                                return -1 === z.findIndex(r => (e & r[0]) != 0 && (t & r[1]) != 0)
                            }(o, a)) break;
                        u += c.length
                    }
                    return u || 1
                },
                y = /\s/,
                E = /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/,
                B = /['\u2018\u2019]/,
                b = function(e) {
                    for (var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], r = 0, n = !1; e.length > 0;) {
                        var i = m(e, t),
                            [o, a] = A(e, i, t);
                        if (w(o, a, t)) n = !0, r += i;
                        else if (n) break;
                        else r += i;
                        e = a
                    }
                    return r
                },
                A = (e, t, r) => {
                    if (r) {
                        var n = e.length - t;
                        return [e.slice(n, e.length), e.slice(0, n)]
                    }
                    return [e.slice(0, t), e.slice(t)]
                },
                w = function e(t, r) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (y.test(t)) return !1;
                    if (B.test(t)) {
                        var i = m(r, n),
                            [o, a] = A(r, i, n);
                        if (e(o, a, n)) return !0
                    }
                    return !E.test(t) && !0
                },
                F = function*(e) {
                    for (var t = e.length - 1, r = 0; r < e.length; r++) {
                        var n = e.charAt(t - r);
                        if (O(n.charCodeAt(0))) {
                            var i = e.charAt(t - r - 1);
                            if (_(i.charCodeAt(0))) {
                                yield i + n, r++;
                                continue
                            }
                        }
                        yield n
                    }
                },
                _ = e => e >= 55296 && e <= 56319,
                O = e => e >= 56320 && e <= 57343;
            (i = n || (n = {}))[i.None = 0] = "None", i[i.Extend = 1] = "Extend", i[i.ZWJ = 2] = "ZWJ", i[i.RI = 4] = "RI", i[i.Prepend = 8] = "Prepend", i[i.SpacingMark = 16] = "SpacingMark", i[i.L = 32] = "L", i[i.V = 64] = "V", i[i.T = 128] = "T", i[i.LV = 256] = "LV", i[i.LVT = 512] = "LVT", i[i.ExtPict = 1024] = "ExtPict", i[i.Any = 2048] = "Any";
            var x = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/,
                k = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/,
                P = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/,
                S = /^[\u1100-\u115F\uA960-\uA97C]$/,
                T = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/,
                j = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/,
                M = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/,
                R = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/,
                I = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/,
                L = (e, t) => {
                    var r = n.Any;
                    return -1 !== e.search(x) && (r |= n.Extend), 8205 === t && (r |= n.ZWJ), t >= 127462 && t <= 127487 && (r |= n.RI), -1 !== e.search(k) && (r |= n.Prepend), -1 !== e.search(P) && (r |= n.SpacingMark), -1 !== e.search(S) && (r |= n.L), -1 !== e.search(T) && (r |= n.V), -1 !== e.search(j) && (r |= n.T), -1 !== e.search(M) && (r |= n.LV), -1 !== e.search(R) && (r |= n.LVT), -1 !== e.search(I) && (r |= n.ExtPict), r
                };

            function N(e, t) {
                return (e & t) != 0
            }
            var z = [
                    [n.L, n.L | n.V | n.LV | n.LVT],
                    [n.LV | n.V, n.V | n.T],
                    [n.LVT | n.T, n.T],
                    [n.Any, n.Extend | n.ZWJ],
                    [n.Any, n.SpacingMark],
                    [n.Prepend, n.Any],
                    [n.ZWJ, n.ExtPict],
                    [n.RI, n.RI]
                ],
                W = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/,
                q = e => -1 !== e.search(W),
                V = /(?:\uD83C[\uDDE6-\uDDFF])+$/g,
                U = e => {
                    var t = e.match(V);
                    return null !== t && t[0].length / 2 % 2 == 1
                },
                H = e => (0, o.isPlainObject)(e) && Node.isNodeList(e.children) && !G.isEditor(e),
                Element = {
                    isAncestor: e => (0, o.isPlainObject)(e) && Node.isNodeList(e.children),
                    isElement: H,
                    isElementList: e => Array.isArray(e) && e.every(e => Element.isElement(e)),
                    isElementProps: e => void 0 !== e.children,
                    isElementType: function(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "type";
                        return H(e) && e[r] === t
                    },
                    matches(e, t) {
                        for (var r in t)
                            if ("children" !== r && e[r] !== t[r]) return !1;
                        return !0
                    }
                },
                J = ["text"],
                K = ["text"];

            function $(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function X(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? $(Object(r), !0).forEach(function(t) {
                        u(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : $(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var Q = new WeakMap,
                G = {
                    above(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                voids: r = !1,
                                mode: n = "lowest",
                                at: i = e.selection,
                                match: o
                            } = t;
                        if (i) {
                            var a = G.path(e, i);
                            for (var [u, s] of G.levels(e, {
                                    at: a,
                                    voids: r,
                                    match: o,
                                    reverse: "lowest" === n
                                }))
                                if (!Text.isText(u)) {
                                    if (Range.isRange(i)) {
                                        if (eo.isAncestor(s, i.anchor.path) && eo.isAncestor(s, i.focus.path)) return [u, s]
                                    } else if (!eo.equals(a, s)) return [u, s]
                                }
                        }
                    },
                    addMark(e, t, r) {
                        e.addMark(t, r)
                    },
                    after(e, t) {
                        var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = G.point(e, t, {
                                edge: "end"
                            }),
                            o = G.end(e, []),
                            {
                                distance: a = 1
                            } = n,
                            u = 0;
                        for (var s of G.positions(e, X(X({}, n), {}, {
                                at: {
                                    anchor: i,
                                    focus: o
                                }
                            }))) {
                            if (u > a) break;
                            0 !== u && (r = s), u++
                        }
                        return r
                    },
                    before(e, t) {
                        var r, n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = G.start(e, []),
                            o = G.point(e, t, {
                                edge: "start"
                            }),
                            {
                                distance: a = 1
                            } = n,
                            u = 0;
                        for (var s of G.positions(e, X(X({}, n), {}, {
                                at: {
                                    anchor: i,
                                    focus: o
                                },
                                reverse: !0
                            }))) {
                            if (u > a) break;
                            0 !== u && (r = s), u++
                        }
                        return r
                    },
                    deleteBackward(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                unit: r = "character"
                            } = t;
                        e.deleteBackward(r)
                    },
                    deleteForward(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                unit: r = "character"
                            } = t;
                        e.deleteForward(r)
                    },
                    deleteFragment(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                direction: r = "forward"
                            } = t;
                        e.deleteFragment(r)
                    },
                    edges: (e, t) => [G.start(e, t), G.end(e, t)],
                    end: (e, t) => G.point(e, t, {
                        edge: "end"
                    }),
                    first(e, t) {
                        var r = G.path(e, t, {
                            edge: "start"
                        });
                        return G.node(e, r)
                    },
                    fragment(e, t) {
                        var r = G.range(e, t);
                        return Node.fragment(e, r)
                    },
                    hasBlocks: (e, t) => t.children.some(t => Element.isElement(t) && G.isBlock(e, t)),
                    hasInlines: (e, t) => t.children.some(t => Text.isText(t) || G.isInline(e, t)),
                    hasTexts: (e, t) => t.children.every(e => Text.isText(e)),
                    insertBreak(e) {
                        e.insertBreak()
                    },
                    insertSoftBreak(e) {
                        e.insertSoftBreak()
                    },
                    insertFragment(e, t) {
                        e.insertFragment(t)
                    },
                    insertNode(e, t) {
                        e.insertNode(t)
                    },
                    insertText(e, t) {
                        e.insertText(t)
                    },
                    isBlock: (e, t) => !e.isInline(t),
                    isEditor(e) {
                        var t = Q.get(e);
                        if (void 0 !== t) return t;
                        if (!(0, o.isPlainObject)(e)) return !1;
                        var r = "function" == typeof e.addMark && "function" == typeof e.apply && "function" == typeof e.deleteBackward && "function" == typeof e.deleteForward && "function" == typeof e.deleteFragment && "function" == typeof e.insertBreak && "function" == typeof e.insertSoftBreak && "function" == typeof e.insertFragment && "function" == typeof e.insertNode && "function" == typeof e.insertText && "function" == typeof e.isInline && "function" == typeof e.isVoid && "function" == typeof e.normalizeNode && "function" == typeof e.onChange && "function" == typeof e.removeMark && "function" == typeof e.getDirtyPaths && (null === e.marks || (0, o.isPlainObject)(e.marks)) && (null === e.selection || Range.isRange(e.selection)) && Node.isNodeList(e.children) && ei.isOperationList(e.operations);
                        return Q.set(e, r), r
                    },
                    isEnd(e, t, r) {
                        var n = G.end(e, r);
                        return el.equals(t, n)
                    },
                    isEdge: (e, t, r) => G.isStart(e, t, r) || G.isEnd(e, t, r),
                    isEmpty(e, t) {
                        var {
                            children: r
                        } = t, [n] = r;
                        return 0 === r.length || 1 === r.length && Text.isText(n) && "" === n.text && !e.isVoid(t)
                    },
                    isInline: (e, t) => e.isInline(t),
                    isNormalizing(e) {
                        var t = d.get(e);
                        return void 0 === t || t
                    },
                    isStart(e, t, r) {
                        if (0 !== t.offset) return !1;
                        var n = G.start(e, r);
                        return el.equals(t, n)
                    },
                    isVoid: (e, t) => e.isVoid(t),
                    last(e, t) {
                        var r = G.path(e, t, {
                            edge: "end"
                        });
                        return G.node(e, r)
                    },
                    leaf(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            n = G.path(e, t, r);
                        return [Node.leaf(e, n), n]
                    },
                    * levels(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                at: r = e.selection,
                                reverse: n = !1,
                                voids: i = !1
                            } = t,
                            {
                                match: o
                            } = t;
                        if (null == o && (o = () => !0), r) {
                            var a = [],
                                u = G.path(e, r);
                            for (var [s, l] of Node.levels(e, u))
                                if (o(s, l) && (a.push([s, l]), !i && Element.isElement(s) && G.isVoid(e, s))) break;
                            n && a.reverse(), yield* a
                        }
                    },
                    marks(e) {
                        var {
                            marks: t,
                            selection: r
                        } = e;
                        if (!r) return null;
                        if (t) return t;
                        if (Range.isExpanded(r)) {
                            var [n] = G.nodes(e, {
                                match: Text.isText
                            });
                            if (!n) return {};
                            var [i] = n;
                            return C(i, J)
                        }
                        var {
                            anchor: o
                        } = r, {
                            path: a
                        } = o, [u] = G.leaf(e, a);
                        if (0 === o.offset) {
                            var s = G.previous(e, {
                                at: a,
                                match: Text.isText
                            });
                            if (!G.above(e, {
                                    match: t => Element.isElement(t) && G.isVoid(e, t) && e.markableVoid(t)
                                })) {
                                var l = G.above(e, {
                                    match: t => Element.isElement(t) && G.isBlock(e, t)
                                });
                                if (s && l) {
                                    var [c, d] = s, [, f] = l;
                                    eo.isAncestor(f, d) && (u = c)
                                }
                            }
                        }
                        return C(u, K)
                    },
                    next(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                mode: r = "lowest",
                                voids: n = !1
                            } = t,
                            {
                                match: i,
                                at: o = e.selection
                            } = t;
                        if (!!o) {
                            var a = G.after(e, o, {
                                voids: n
                            });
                            if (a) {
                                var [, u] = G.last(e, []), s = [a.path, u];
                                if (eo.isPath(o) && 0 === o.length) throw Error("Cannot get the next node from the root node!");
                                if (null == i) {
                                    if (eo.isPath(o)) {
                                        var [l] = G.parent(e, o);
                                        i = e => l.children.includes(e)
                                    } else i = () => !0
                                }
                                var [c] = G.nodes(e, {
                                    at: s,
                                    match: i,
                                    mode: r,
                                    voids: n
                                });
                                return c
                            }
                        }
                    },
                    node(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            n = G.path(e, t, r);
                        return [Node.get(e, n), n]
                    },
                    * nodes(e) {
                        var t, r, n, i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                at: o = e.selection,
                                mode: a = "all",
                                universal: u = !1,
                                reverse: s = !1,
                                voids: l = !1
                            } = i,
                            {
                                match: c
                            } = i;
                        if (!c && (c = () => !0), o) {
                            if (Y.isSpan(o)) t = o[0], r = o[1];
                            else {
                                var d = G.path(e, o, {
                                        edge: "start"
                                    }),
                                    f = G.path(e, o, {
                                        edge: "end"
                                    });
                                t = s ? f : d, r = s ? d : f
                            }
                            var h = Node.nodes(e, {
                                    reverse: s,
                                    from: t,
                                    to: r,
                                    pass: t => {
                                        var [r] = t;
                                        return !l && Element.isElement(r) && G.isVoid(e, r)
                                    }
                                }),
                                p = [];
                            for (var [v, D] of h) {
                                var g = n && 0 === eo.compare(D, n[1]);
                                if ("highest" !== a || !g) {
                                    if (!c(v, D)) {
                                        if (u && !g && Text.isText(v)) return;
                                        continue
                                    }
                                    if ("lowest" === a && g) {
                                        n = [v, D];
                                        continue
                                    }
                                    var C = "lowest" === a ? n : [v, D];
                                    C && (u ? p.push(C) : yield C), n = [v, D]
                                }
                            }
                            "lowest" === a && n && (u ? p.push(n) : yield n), u && (yield* p)
                        }
                    },
                    normalize(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                force: r = !1,
                                operation: n
                            } = t,
                            i = e => s.get(e) || [],
                            o = e => l.get(e) || new Set,
                            a = e => {
                                var t = i(e).pop(),
                                    r = t.join(",");
                                return o(e).delete(r), t
                            };
                        if (!!G.isNormalizing(e)) {
                            if (r) {
                                var u = Array.from(Node.nodes(e), e => {
                                        var [, t] = e;
                                        return t
                                    }),
                                    c = new Set(u.map(e => e.join(",")));
                                s.set(e, u), l.set(e, c)
                            }
                            0 !== i(e).length && G.withoutNormalizing(e, () => {
                                for (var t of i(e))
                                    if (Node.has(e, t)) {
                                        var r = G.node(e, t),
                                            [o, u] = r;
                                        Element.isElement(o) && 0 === o.children.length && e.normalizeNode(r, {
                                            operation: n
                                        })
                                    } for (var s = i(e), l = s.length, c = 0; 0 !== s.length;) {
                                    if (!e.shouldNormalize({
                                            dirtyPaths: s,
                                            iteration: c,
                                            initialDirtyPathsLength: l,
                                            operation: n
                                        })) return;
                                    var d = a(e);
                                    if (Node.has(e, d)) {
                                        var f = G.node(e, d);
                                        e.normalizeNode(f, {
                                            operation: n
                                        })
                                    }
                                    c++, s = i(e)
                                }
                            })
                        }
                    },
                    parent(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            n = G.path(e, t, r),
                            i = eo.parent(n);
                        return G.node(e, i)
                    },
                    path(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                depth: n,
                                edge: i
                            } = r;
                        if (eo.isPath(t)) {
                            if ("start" === i) {
                                var [, o] = Node.first(e, t);
                                t = o
                            } else if ("end" === i) {
                                var [, a] = Node.last(e, t);
                                t = a
                            }
                        }
                        return Range.isRange(t) && (t = "start" === i ? Range.start(t) : "end" === i ? Range.end(t) : eo.common(t.anchor.path, t.focus.path)), el.isPoint(t) && (t = t.path), null != n && (t = t.slice(0, n)), t
                    },
                    hasPath: (e, t) => Node.has(e, t),
                    pathRef(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                affinity: n = "forward"
                            } = r,
                            i = {
                                current: t,
                                affinity: n,
                                unref() {
                                    var {
                                        current: t
                                    } = i;
                                    return G.pathRefs(e).delete(i), i.current = null, t
                                }
                            };
                        return G.pathRefs(e).add(i), i
                    },
                    pathRefs(e) {
                        var t = f.get(e);
                        return !t && (t = new Set, f.set(e, t)), t
                    },
                    point(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                edge: n = "start"
                            } = r;
                        if (eo.isPath(t)) {
                            if ("end" === n) {
                                var i, [, o] = Node.last(e, t);
                                i = o
                            } else {
                                var [, a] = Node.first(e, t);
                                i = a
                            }
                            var u = Node.get(e, i);
                            if (!Text.isText(u)) throw Error("Cannot get the ".concat(n, " point in the node at path [").concat(t, "] because it has no ").concat(n, " text node."));
                            return {
                                path: i,
                                offset: "end" === n ? u.text.length : 0
                            }
                        }
                        if (Range.isRange(t)) {
                            var [s, l] = Range.edges(t);
                            return "start" === n ? s : l
                        }
                        return t
                    },
                    pointRef(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                affinity: n = "forward"
                            } = r,
                            i = {
                                current: t,
                                affinity: n,
                                unref() {
                                    var {
                                        current: t
                                    } = i;
                                    return G.pointRefs(e).delete(i), i.current = null, t
                                }
                            };
                        return G.pointRefs(e).add(i), i
                    },
                    pointRefs(e) {
                        var t = h.get(e);
                        return !t && (t = new Set, h.set(e, t)), t
                    },
                    * positions(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                at: r = e.selection,
                                unit: n = "offset",
                                reverse: i = !1,
                                voids: o = !1
                            } = t;
                        if (r) {
                            var a = G.range(e, r),
                                [u, s] = Range.edges(a),
                                l = i ? s : u,
                                c = !1,
                                d = "",
                                f = 0,
                                h = 0,
                                p = 0;
                            for (var [v, D] of G.nodes(e, {
                                    at: r,
                                    reverse: i,
                                    voids: o
                                })) {
                                if (Element.isElement(v)) {
                                    if (!o && e.isVoid(v)) {
                                        yield G.start(e, D);
                                        continue
                                    }
                                    if (e.isInline(v)) continue;
                                    if (G.hasInlines(e, v)) {
                                        var g = eo.isAncestor(D, s.path) ? s : G.end(e, D),
                                            C = eo.isAncestor(D, u.path) ? u : G.start(e, D);
                                        d = G.string(e, {
                                            anchor: C,
                                            focus: g
                                        }, {
                                            voids: o
                                        }), c = !0
                                    }
                                }
                                if (Text.isText(v)) {
                                    var y = eo.equals(D, l.path);
                                    for (y ? (h = i ? l.offset : v.text.length - l.offset, p = l.offset) : (h = v.text.length, p = i ? h : 0), (y || c || "offset" === n) && (yield {
                                            path: D,
                                            offset: p
                                        }, c = !1);;) {
                                        if (0 === f) {
                                            if ("" === d) break;
                                            f = function(e, t, r) {
                                                if ("character" === t) return m(e, r);
                                                if ("word" === t) return b(e, r);
                                                if ("line" === t || "block" === t) return e.length;
                                                return 1
                                            }(d, n, i), d = A(d, f, i)[1]
                                        }
                                        if (p = i ? p - f : p + f, (h -= f) < 0) {
                                            f = -h;
                                            break
                                        }
                                        f = 0, yield {
                                            path: D,
                                            offset: p
                                        }
                                    }
                                }
                            }
                        }
                    },
                    previous(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                mode: r = "lowest",
                                voids: n = !1
                            } = t,
                            {
                                match: i,
                                at: o = e.selection
                            } = t;
                        if (!!o) {
                            var a = G.before(e, o, {
                                voids: n
                            });
                            if (a) {
                                var [, u] = G.first(e, []), s = [a.path, u];
                                if (eo.isPath(o) && 0 === o.length) throw Error("Cannot get the previous node from the root node!");
                                if (null == i) {
                                    if (eo.isPath(o)) {
                                        var [l] = G.parent(e, o);
                                        i = e => l.children.includes(e)
                                    } else i = () => !0
                                }
                                var [c] = G.nodes(e, {
                                    reverse: !0,
                                    at: s,
                                    match: i,
                                    mode: r,
                                    voids: n
                                });
                                return c
                            }
                        }
                    },
                    range: (e, t, r) => Range.isRange(t) && !r ? t : {
                        anchor: G.start(e, t),
                        focus: G.end(e, r || t)
                    },
                    rangeRef(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                affinity: n = "forward"
                            } = r,
                            i = {
                                current: t,
                                affinity: n,
                                unref() {
                                    var {
                                        current: t
                                    } = i;
                                    return G.rangeRefs(e).delete(i), i.current = null, t
                                }
                            };
                        return G.rangeRefs(e).add(i), i
                    },
                    rangeRefs(e) {
                        var t = p.get(e);
                        return !t && (t = new Set, p.set(e, t)), t
                    },
                    removeMark(e, t) {
                        e.removeMark(t)
                    },
                    setNormalizing(e, t) {
                        d.set(e, t)
                    },
                    start: (e, t) => G.point(e, t, {
                        edge: "start"
                    }),
                    string(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                voids: n = !1
                            } = r,
                            i = G.range(e, t),
                            [o, a] = Range.edges(i),
                            u = "";
                        for (var [s, l] of G.nodes(e, {
                                at: i,
                                match: Text.isText,
                                voids: n
                            })) {
                            var c = s.text;
                            eo.equals(l, a.path) && (c = c.slice(0, a.offset)), eo.equals(l, o.path) && (c = c.slice(o.offset)), u += c
                        }
                        return u
                    },
                    unhangRange(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            {
                                voids: n = !1
                            } = r,
                            [i, o] = Range.edges(t);
                        if (0 !== i.offset || 0 !== o.offset || Range.isCollapsed(t) || eo.hasPrevious(o.path)) return t;
                        var a = G.above(e, {
                                at: o,
                                match: t => Element.isElement(t) && G.isBlock(e, t),
                                voids: n
                            }),
                            u = a ? a[1] : [],
                            s = {
                                anchor: G.start(e, i),
                                focus: o
                            },
                            l = !0;
                        for (var [c, d] of G.nodes(e, {
                                at: s,
                                match: Text.isText,
                                reverse: !0,
                                voids: n
                            })) {
                            if (l) {
                                l = !1;
                                continue
                            }
                            if ("" !== c.text || eo.isBefore(d, u)) {
                                o = {
                                    path: d,
                                    offset: c.text.length
                                };
                                break
                            }
                        }
                        return {
                            anchor: i,
                            focus: o
                        }
                    },
                    void(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return G.above(e, X(X({}, t), {}, {
                            match: t => Element.isElement(t) && G.isVoid(e, t)
                        }))
                    },
                    withoutNormalizing(e, t) {
                        var r = G.isNormalizing(e);
                        G.setNormalizing(e, !1);
                        try {
                            t()
                        } finally {
                            G.setNormalizing(e, r)
                        }
                        G.normalize(e)
                    }
                },
                Y = {
                    isSpan: e => Array.isArray(e) && 2 === e.length && e.every(eo.isPath)
                },
                Z = ["children"],
                ee = ["text"],
                et = new WeakMap,
                Node = {
                    ancestor(e, t) {
                        var r = Node.get(e, t);
                        if (Text.isText(r)) throw Error("Cannot get the ancestor node at path [".concat(t, "] because it refers to a text node instead: ").concat(ev.stringify(r)));
                        return r
                    },
                    * ancestors(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        for (var n of eo.ancestors(t, r)) {
                            var i = [Node.ancestor(e, n), n];
                            yield i
                        }
                    },
                    child(e, t) {
                        if (Text.isText(e)) throw Error("Cannot get the child of a text node: ".concat(ev.stringify(e)));
                        var r = e.children[t];
                        if (null == r) throw Error("Cannot get child at index `".concat(t, "` in node: ").concat(ev.stringify(e)));
                        return r
                    },
                    * children(e, t) {
                        for (var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, {
                                reverse: n = !1
                            } = r, i = Node.ancestor(e, t), {
                                children: o
                            } = i, a = n ? o.length - 1 : 0; n ? a >= 0 : a < o.length;) {
                            var u = Node.child(i, a),
                                s = t.concat(a);
                            yield [u, s], a = n ? a - 1 : a + 1
                        }
                    },
                    common(e, t, r) {
                        var n = eo.common(t, r);
                        return [Node.get(e, n), n]
                    },
                    descendant(e, t) {
                        var r = Node.get(e, t);
                        if (G.isEditor(r)) throw Error("Cannot get the descendant node at path [".concat(t, "] because it refers to the root editor node instead: ").concat(ev.stringify(r)));
                        return r
                    },
                    * descendants(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        for (var [r, n] of Node.nodes(e, t)) 0 !== n.length && (yield [r, n])
                    },
                    * elements(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        for (var [r, n] of Node.nodes(e, t)) Element.isElement(r) && (yield [r, n])
                    },
                    extractProps(e) {
                        if (Element.isAncestor(e)) {
                            var t = C(e, Z);
                            return t
                        }
                        var t = C(e, ee);
                        return t
                    },
                    first(e, t) {
                        for (var r = t.slice(), n = Node.get(e, r); n && !Text.isText(n) && 0 !== n.children.length;) {
                            ;
                            n = n.children[0], r.push(0)
                        }
                        return [n, r]
                    },
                    fragment(e, t) {
                        if (Text.isText(e)) throw Error("Cannot get a fragment starting from a root text node: ".concat(ev.stringify(e)));
                        return (0, a.produce)({
                            children: e.children
                        }, e => {
                            var [r, n] = Range.edges(t);
                            for (var [, i] of Node.nodes(e, {
                                    reverse: !0,
                                    pass: e => {
                                        var [, r] = e;
                                        return !Range.includes(t, r)
                                    }
                                })) {
                                if (!Range.includes(t, i)) {
                                    var o = Node.parent(e, i),
                                        a = i[i.length - 1];
                                    o.children.splice(a, 1)
                                }
                                if (eo.equals(i, n.path)) {
                                    var u = Node.leaf(e, i);
                                    u.text = u.text.slice(0, n.offset)
                                }
                                if (eo.equals(i, r.path)) {
                                    var s = Node.leaf(e, i);
                                    s.text = s.text.slice(r.offset)
                                }
                            }
                            G.isEditor(e) && (e.selection = null)
                        }).children
                    },
                    get(e, t) {
                        for (var r = e, n = 0; n < t.length; n++) {
                            var i = t[n];
                            if (Text.isText(r) || !r.children[i]) throw Error("Cannot find a descendant at path [".concat(t, "] in node: ").concat(ev.stringify(e)));
                            r = r.children[i]
                        }
                        return r
                    },
                    has(e, t) {
                        for (var r = e, n = 0; n < t.length; n++) {
                            var i = t[n];
                            if (Text.isText(r) || !r.children[i]) return !1;
                            r = r.children[i]
                        }
                        return !0
                    },
                    isNode: e => Text.isText(e) || Element.isElement(e) || G.isEditor(e),
                    isNodeList(e) {
                        if (!Array.isArray(e)) return !1;
                        var t = et.get(e);
                        if (void 0 !== t) return t;
                        var r = e.every(e => Node.isNode(e));
                        return et.set(e, r), r
                    },
                    last(e, t) {
                        for (var r = t.slice(), n = Node.get(e, r); n && !Text.isText(n) && 0 !== n.children.length;) {
                            ;
                            var i = n.children.length - 1;
                            n = n.children[i], r.push(i)
                        }
                        return [n, r]
                    },
                    leaf(e, t) {
                        var r = Node.get(e, t);
                        if (!Text.isText(r)) throw Error("Cannot get the leaf node at path [".concat(t, "] because it refers to a non-leaf node: ").concat(ev.stringify(r)));
                        return r
                    },
                    * levels(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        for (var n of eo.levels(t, r)) {
                            var i = Node.get(e, n);
                            yield [i, n]
                        }
                    },
                    matches: (e, t) => Element.isElement(e) && Element.isElementProps(t) && Element.matches(e, t) || Text.isText(e) && Text.isTextProps(t) && Text.matches(e, t),
                    * nodes(e) {
                        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                                pass: r,
                                reverse: n = !1
                            } = t, {
                                from: i = [],
                                to: o
                            } = t, a = new Set, u = [], s = e; !(o && (n ? eo.isBefore(u, o) : eo.isAfter(u, o)));) {
                            ;
                            if (!a.has(s) && (yield [s, u]), !a.has(s) && !Text.isText(s) && 0 !== s.children.length && (null == r || !1 === r([s, u]))) {
                                a.add(s);
                                var l = n ? s.children.length - 1 : 0;
                                eo.isAncestor(u, i) && (l = i[u.length]), u = u.concat(l), s = Node.get(e, u);
                                continue
                            }
                            if (0 === u.length) break;
                            if (!n) {
                                var c = eo.next(u);
                                if (Node.has(e, c)) {
                                    u = c, s = Node.get(e, u);
                                    continue
                                }
                            }
                            if (n && 0 !== u[u.length - 1]) {
                                u = eo.previous(u), s = Node.get(e, u);
                                continue
                            }
                            u = eo.parent(u), s = Node.get(e, u), a.add(s)
                        }
                    },
                    parent(e, t) {
                        var r = eo.parent(t),
                            n = Node.get(e, r);
                        if (Text.isText(n)) throw Error("Cannot get the parent of path [".concat(t, "] because it does not exist in the root."));
                        return n
                    },
                    string: e => Text.isText(e) ? e.text : e.children.map(Node.string).join(""),
                    * texts(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        for (var [r, n] of Node.nodes(e, t)) Text.isText(r) && (yield [r, n])
                    }
                };

            function er(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function en(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? er(Object(r), !0).forEach(function(t) {
                        u(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : er(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var ei = {
                    isNodeOperation: e => ei.isOperation(e) && e.type.endsWith("_node"),
                    isOperation(e) {
                        if (!(0, o.isPlainObject)(e)) return !1;
                        switch (e.type) {
                            case "insert_node":
                            case "remove_node":
                                return eo.isPath(e.path) && Node.isNode(e.node);
                            case "insert_text":
                            case "remove_text":
                                return "number" == typeof e.offset && "string" == typeof e.text && eo.isPath(e.path);
                            case "merge_node":
                                return "number" == typeof e.position && eo.isPath(e.path) && (0, o.isPlainObject)(e.properties);
                            case "move_node":
                                return eo.isPath(e.path) && eo.isPath(e.newPath);
                            case "set_node":
                                return eo.isPath(e.path) && (0, o.isPlainObject)(e.properties) && (0, o.isPlainObject)(e.newProperties);
                            case "set_selection":
                                return null === e.properties && Range.isRange(e.newProperties) || null === e.newProperties && Range.isRange(e.properties) || (0, o.isPlainObject)(e.properties) && (0, o.isPlainObject)(e.newProperties);
                            case "split_node":
                                return eo.isPath(e.path) && "number" == typeof e.position && (0, o.isPlainObject)(e.properties);
                            default:
                                return !1
                        }
                    },
                    isOperationList: e => Array.isArray(e) && e.every(e => ei.isOperation(e)),
                    isSelectionOperation: e => ei.isOperation(e) && e.type.endsWith("_selection"),
                    isTextOperation: e => ei.isOperation(e) && e.type.endsWith("_text"),
                    inverse(e) {
                        switch (e.type) {
                            case "insert_node":
                                return en(en({}, e), {}, {
                                    type: "remove_node"
                                });
                            case "insert_text":
                                return en(en({}, e), {}, {
                                    type: "remove_text"
                                });
                            case "merge_node":
                                return en(en({}, e), {}, {
                                    type: "split_node",
                                    path: eo.previous(e.path)
                                });
                            case "move_node":
                                var {
                                    newPath: t, path: r
                                } = e;
                                if (eo.equals(t, r)) return e;
                                if (eo.isSibling(r, t)) return en(en({}, e), {}, {
                                    path: t,
                                    newPath: r
                                });
                                var n = eo.transform(r, e),
                                    i = eo.transform(eo.next(r), e);
                                return en(en({}, e), {}, {
                                    path: n,
                                    newPath: i
                                });
                            case "remove_node":
                                return en(en({}, e), {}, {
                                    type: "insert_node"
                                });
                            case "remove_text":
                                return en(en({}, e), {}, {
                                    type: "insert_text"
                                });
                            case "set_node":
                                var {
                                    properties: o, newProperties: a
                                } = e;
                                return en(en({}, e), {}, {
                                    properties: a,
                                    newProperties: o
                                });
                            case "set_selection":
                                var {
                                    properties: u, newProperties: s
                                } = e;
                                if (null == u) return en(en({}, e), {}, {
                                    properties: s,
                                    newProperties: null
                                });
                                if (null == s) return en(en({}, e), {}, {
                                    properties: null,
                                    newProperties: u
                                });
                                else return en(en({}, e), {}, {
                                    properties: s,
                                    newProperties: u
                                });
                            case "split_node":
                                return en(en({}, e), {}, {
                                    type: "merge_node",
                                    path: eo.next(e.path)
                                })
                        }
                    }
                },
                eo = {
                    ancestors(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                reverse: r = !1
                            } = t,
                            n = eo.levels(e, t);
                        return n = r ? n.slice(1) : n.slice(0, -1)
                    },
                    common(e, t) {
                        for (var r = [], n = 0; n < e.length && n < t.length; n++) {
                            var i = e[n];
                            if (i !== t[n]) break;
                            r.push(i)
                        }
                        return r
                    },
                    compare(e, t) {
                        for (var r = Math.min(e.length, t.length), n = 0; n < r; n++) {
                            if (e[n] < t[n]) return -1;
                            if (e[n] > t[n]) return 1
                        }
                        return 0
                    },
                    endsAfter(e, t) {
                        var r = e.length - 1,
                            n = e.slice(0, r),
                            i = t.slice(0, r),
                            o = e[r],
                            a = t[r];
                        return eo.equals(n, i) && o > a
                    },
                    endsAt(e, t) {
                        var r = e.length,
                            n = e.slice(0, r),
                            i = t.slice(0, r);
                        return eo.equals(n, i)
                    },
                    endsBefore(e, t) {
                        var r = e.length - 1,
                            n = e.slice(0, r),
                            i = t.slice(0, r),
                            o = e[r],
                            a = t[r];
                        return eo.equals(n, i) && o < a
                    },
                    equals: (e, t) => e.length === t.length && e.every((e, r) => e === t[r]),
                    hasPrevious: e => e[e.length - 1] > 0,
                    isAfter: (e, t) => 1 === eo.compare(e, t),
                    isAncestor: (e, t) => e.length < t.length && 0 === eo.compare(e, t),
                    isBefore: (e, t) => -1 === eo.compare(e, t),
                    isChild: (e, t) => e.length === t.length + 1 && 0 === eo.compare(e, t),
                    isCommon: (e, t) => e.length <= t.length && 0 === eo.compare(e, t),
                    isDescendant: (e, t) => e.length > t.length && 0 === eo.compare(e, t),
                    isParent: (e, t) => e.length + 1 === t.length && 0 === eo.compare(e, t),
                    isPath: e => Array.isArray(e) && (0 === e.length || "number" == typeof e[0]),
                    isSibling(e, t) {
                        if (e.length !== t.length) return !1;
                        var r = e.slice(0, -1),
                            n = t.slice(0, -1);
                        return e[e.length - 1] !== t[t.length - 1] && eo.equals(r, n)
                    },
                    levels(e) {
                        for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, {
                                reverse: r = !1
                            } = t, n = [], i = 0; i <= e.length; i++) n.push(e.slice(0, i));
                        return r && n.reverse(), n
                    },
                    next(e) {
                        if (0 === e.length) throw Error("Cannot get the next path of a root path [".concat(e, "], because it has no next index."));
                        var t = e[e.length - 1];
                        return e.slice(0, -1).concat(t + 1)
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
                                return !1
                        }
                    },
                    parent(e) {
                        if (0 === e.length) throw Error("Cannot get the parent path of the root path [".concat(e, "]."));
                        return e.slice(0, -1)
                    },
                    previous(e) {
                        if (0 === e.length) throw Error("Cannot get the previous path of a root path [".concat(e, "], because it has no previous index."));
                        var t = e[e.length - 1];
                        if (t <= 0) throw Error("Cannot get the previous path of a first child path [".concat(e, "] because it would result in a negative index."));
                        return e.slice(0, -1).concat(t - 1)
                    },
                    relative(e, t) {
                        if (!eo.isAncestor(t, e) && !eo.equals(e, t)) throw Error("Cannot get the relative path of [".concat(e, "] inside ancestor [").concat(t, "], because it is not above or equal to the path."));
                        return e.slice(t.length)
                    },
                    transform(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        if (!e) return null;
                        var n = [...e],
                            {
                                affinity: i = "forward"
                            } = r;
                        if (0 === e.length) return n;
                        switch (t.type) {
                            case "insert_node":
                                var {
                                    path: o
                                } = t;
                                (eo.equals(o, n) || eo.endsBefore(o, n) || eo.isAncestor(o, n)) && (n[o.length - 1] += 1);
                                break;
                            case "remove_node":
                                var {
                                    path: a
                                } = t;
                                if (eo.equals(a, n) || eo.isAncestor(a, n)) return null;
                                eo.endsBefore(a, n) && (n[a.length - 1] -= 1);
                                break;
                            case "merge_node":
                                var {
                                    path: u, position: s
                                } = t;
                                eo.equals(u, n) || eo.endsBefore(u, n) ? n[u.length - 1] -= 1 : eo.isAncestor(u, n) && (n[u.length - 1] -= 1, n[u.length] += s);
                                break;
                            case "split_node":
                                var {
                                    path: l, position: c
                                } = t;
                                if (eo.equals(l, n)) {
                                    if ("forward" === i) n[n.length - 1] += 1;
                                    else if ("backward" !== i) return null
                                } else eo.endsBefore(l, n) ? n[l.length - 1] += 1 : eo.isAncestor(l, n) && e[l.length] >= c && (n[l.length - 1] += 1, n[l.length] -= c);
                                break;
                            case "move_node":
                                var {
                                    path: d, newPath: f
                                } = t;
                                if (eo.equals(d, f)) break;
                                if (eo.isAncestor(d, n) || eo.equals(d, n)) {
                                    var h = f.slice();
                                    return eo.endsBefore(d, f) && d.length < f.length && (h[d.length - 1] -= 1), h.concat(n.slice(d.length))
                                }
                                eo.isSibling(d, f) && (eo.isAncestor(f, n) || eo.equals(f, n)) ? eo.endsBefore(d, n) ? n[d.length - 1] -= 1 : n[d.length - 1] += 1 : eo.endsBefore(f, n) || eo.equals(f, n) || eo.isAncestor(f, n) ? (eo.endsBefore(d, n) && (n[d.length - 1] -= 1), n[f.length - 1] += 1) : eo.endsBefore(d, n) && (eo.equals(f, n) && (n[f.length - 1] += 1), n[d.length - 1] -= 1)
                        }
                        return n
                    }
                },
                ea = {
                    transform(e, t) {
                        var {
                            current: r,
                            affinity: n
                        } = e;
                        if (null != r) {
                            var i = eo.transform(r, t, {
                                affinity: n
                            });
                            e.current = i, null == i && e.unref()
                        }
                    }
                };

            function eu(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function es(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eu(Object(r), !0).forEach(function(t) {
                        u(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eu(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var el = {
                    compare(e, t) {
                        var r = eo.compare(e.path, t.path);
                        if (0 === r) return e.offset < t.offset ? -1 : e.offset > t.offset ? 1 : 0;
                        return r
                    },
                    isAfter: (e, t) => 1 === el.compare(e, t),
                    isBefore: (e, t) => -1 === el.compare(e, t),
                    equals: (e, t) => e.offset === t.offset && eo.equals(e.path, t.path),
                    isPoint: e => (0, o.isPlainObject)(e) && "number" == typeof e.offset && eo.isPath(e.path),
                    transform(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return (0, a.produce)(e, e => {
                            if (null === e) return null;
                            var {
                                affinity: n = "forward"
                            } = r, {
                                path: i,
                                offset: o
                            } = e;
                            switch (t.type) {
                                case "insert_node":
                                case "move_node":
                                    e.path = eo.transform(i, t, r);
                                    break;
                                case "insert_text":
                                    eo.equals(t.path, i) && (t.offset < o || t.offset === o && "forward" === n) && (e.offset += t.text.length);
                                    break;
                                case "merge_node":
                                    eo.equals(t.path, i) && (e.offset += t.position), e.path = eo.transform(i, t, r);
                                    break;
                                case "remove_text":
                                    eo.equals(t.path, i) && t.offset <= o && (e.offset -= Math.min(o - t.offset, t.text.length));
                                    break;
                                case "remove_node":
                                    if (eo.equals(t.path, i) || eo.isAncestor(t.path, i)) return null;
                                    e.path = eo.transform(i, t, r);
                                    break;
                                case "split_node":
                                    if (eo.equals(t.path, i)) {
                                        if (t.position === o && null == n) return null;
                                        (t.position < o || t.position === o && "forward" === n) && (e.offset -= t.position, e.path = eo.transform(i, t, es(es({}, r), {}, {
                                            affinity: "forward"
                                        })))
                                    } else e.path = eo.transform(i, t, r)
                            }
                        })
                    }
                },
                ec = {
                    transform(e, t) {
                        var {
                            current: r,
                            affinity: n
                        } = e;
                        if (null != r) {
                            var i = el.transform(r, t, {
                                affinity: n
                            });
                            e.current = i, null == i && e.unref()
                        }
                    }
                },
                ed = ["anchor", "focus"];

            function ef(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }
            var Range = {
                    edges(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            {
                                reverse: r = !1
                            } = t,
                            {
                                anchor: n,
                                focus: i
                            } = e;
                        return Range.isBackward(e) === r ? [n, i] : [i, n]
                    },
                    end(e) {
                        var [, t] = Range.edges(e);
                        return t
                    },
                    equals: (e, t) => el.equals(e.anchor, t.anchor) && el.equals(e.focus, t.focus),
                    includes(e, t) {
                        if (Range.isRange(t)) {
                            if (Range.includes(e, t.anchor) || Range.includes(e, t.focus)) return !0;
                            var [r, n] = Range.edges(e), [i, o] = Range.edges(t);
                            return el.isBefore(r, i) && el.isAfter(n, o)
                        }
                        var [a, u] = Range.edges(e), s = !1, l = !1;
                        return el.isPoint(t) ? (s = el.compare(t, a) >= 0, l = 0 >= el.compare(t, u)) : (s = eo.compare(t, a.path) >= 0, l = 0 >= eo.compare(t, u.path)), s && l
                    },
                    intersection(e, t) {
                        var r = C(e, ed),
                            [n, i] = Range.edges(e),
                            [o, a] = Range.edges(t),
                            s = el.isBefore(n, o) ? o : n,
                            l = el.isBefore(i, a) ? i : a;
                        return el.isBefore(l, s) ? null : function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var r = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? ef(Object(r), !0).forEach(function(t) {
                                    u(e, t, r[t])
                                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ef(Object(r)).forEach(function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                                })
                            }
                            return e
                        }({
                            anchor: s,
                            focus: l
                        }, r)
                    },
                    isBackward(e) {
                        var {
                            anchor: t,
                            focus: r
                        } = e;
                        return el.isAfter(t, r)
                    },
                    isCollapsed(e) {
                        var {
                            anchor: t,
                            focus: r
                        } = e;
                        return el.equals(t, r)
                    },
                    isExpanded: e => !Range.isCollapsed(e),
                    isForward: e => !Range.isBackward(e),
                    isRange: e => (0, o.isPlainObject)(e) && el.isPoint(e.anchor) && el.isPoint(e.focus),
                    * points(e) {
                        yield [e.anchor, "anchor"], yield [e.focus, "focus"]
                    },
                    start(e) {
                        var [t] = Range.edges(e);
                        return t
                    },
                    transform(e, t) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return (0, a.produce)(e, e => {
                            if (null === e) return null;
                            var n, i, {
                                affinity: o = "inward"
                            } = r;
                            if ("inward" === o) {
                                var a = Range.isCollapsed(e);
                                Range.isForward(e) ? (n = "forward", i = a ? n : "backward") : (n = "backward", i = a ? n : "forward")
                            } else "outward" === o ? Range.isForward(e) ? (n = "backward", i = "forward") : (n = "forward", i = "backward") : (n = o, i = o);
                            var u = el.transform(e.anchor, t, {
                                    affinity: n
                                }),
                                s = el.transform(e.focus, t, {
                                    affinity: i
                                });
                            if (!u || !s) return null;
                            e.anchor = u, e.focus = s
                        })
                    }
                },
                eh = {
                    transform(e, t) {
                        var {
                            current: r,
                            affinity: n
                        } = e;
                        if (null != r) {
                            var i = Range.transform(r, t, {
                                affinity: n
                            });
                            e.current = i, null == i && e.unref()
                        }
                    }
                },
                ep = void 0,
                ev = {
                    setScrubber(e) {
                        ep = e
                    },
                    stringify: e => JSON.stringify(e, ep)
                },
                eD = (e, t) => {
                    for (var r in e) {
                        var n = e[r],
                            i = t[r];
                        if ((0, o.isPlainObject)(n) && (0, o.isPlainObject)(i)) {
                            if (!eD(n, i)) return !1
                        } else if (Array.isArray(n) && Array.isArray(i)) {
                            if (n.length !== i.length) return !1;
                            for (var a = 0; a < n.length; a++)
                                if (n[a] !== i[a]) return !1
                        } else if (n !== i) return !1
                    }
                    for (var u in t)
                        if (void 0 === e[u] && void 0 !== t[u]) return !1;
                    return !0
                },
                eg = ["text"],
                eC = ["anchor", "focus"];

            function em(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function ey(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? em(Object(r), !0).forEach(function(t) {
                        u(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : em(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var Text = {
                equals(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        {
                            loose: n = !1
                        } = r;

                    function i(e) {
                        return C(e, eg)
                    }
                    return eD(n ? C(e, eg) : e, n ? C(t, eg) : t)
                },
                isText: e => (0, o.isPlainObject)(e) && "string" == typeof e.text,
                isTextList: e => Array.isArray(e) && e.every(e => Text.isText(e)),
                isTextProps: e => void 0 !== e.text,
                matches(e, t) {
                    for (var r in t)
                        if ("text" !== r && (!e.hasOwnProperty(r) || e[r] !== t[r])) return !1;
                    return !0
                },
                decorations(e, t) {
                    var r = [ey({}, e)];
                    for (var n of t) {
                        var i = C(n, eC),
                            [o, a] = Range.edges(n),
                            u = [],
                            s = 0,
                            l = o.offset,
                            c = a.offset;
                        for (var d of r) {
                            var {
                                length: f
                            } = d.text, h = s;
                            if (s += f, l <= h && s <= c) {
                                Object.assign(d, i), u.push(d);
                                continue
                            }
                            if (l !== c && (l === s || c === h) || l > s || c < h || c === h && 0 !== h) {
                                u.push(d);
                                continue
                            }
                            var p = d,
                                v = void 0,
                                D = void 0;
                            if (c < s) {
                                var g = c - h;
                                D = ey(ey({}, p), {}, {
                                    text: p.text.slice(g)
                                }), p = ey(ey({}, p), {}, {
                                    text: p.text.slice(0, g)
                                })
                            }
                            if (l > h) {
                                var m = l - h;
                                v = ey(ey({}, p), {}, {
                                    text: p.text.slice(0, m)
                                }), p = ey(ey({}, p), {}, {
                                    text: p.text.slice(m)
                                })
                            }
                            Object.assign(p, i), v && u.push(v), u.push(p), D && u.push(D)
                        }
                        r = u
                    }
                    return r
                }
            };

            function eE(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function eB(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eE(Object(r), !0).forEach(function(t) {
                        u(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eE(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var eb = (e, t, r) => {
                    switch (r.type) {
                        case "insert_node":
                            var {
                                path: n, node: i
                            } = r, o = Node.parent(e, n), a = n[n.length - 1];
                            if (a > o.children.length) throw Error('Cannot apply an "insert_node" operation at path ['.concat(n, "] because the destination is past the end of the node."));
                            if (o.children.splice(a, 0, i), t)
                                for (var [u, s] of Range.points(t)) t[s] = el.transform(u, r);
                            break;
                        case "insert_text":
                            var {
                                path: l, offset: c, text: d
                            } = r;
                            if (0 === d.length) break;
                            var f = Node.leaf(e, l),
                                h = f.text.slice(0, c),
                                p = f.text.slice(c);
                            if (f.text = h + d + p, t)
                                for (var [v, D] of Range.points(t)) t[D] = el.transform(v, r);
                            break;
                        case "merge_node":
                            var {
                                path: g
                            } = r, C = Node.get(e, g), m = eo.previous(g), y = Node.get(e, m), E = Node.parent(e, g), B = g[g.length - 1];
                            if (Text.isText(C) && Text.isText(y)) y.text += C.text;
                            else if (Text.isText(C) || Text.isText(y)) throw Error('Cannot apply a "merge_node" operation at path ['.concat(g, "] to nodes of different interfaces: ").concat(ev.stringify(C), " ").concat(ev.stringify(y)));
                            else y.children.push(...C.children);
                            if (E.children.splice(B, 1), t)
                                for (var [b, A] of Range.points(t)) t[A] = el.transform(b, r);
                            break;
                        case "move_node":
                            var {
                                path: w, newPath: F
                            } = r;
                            if (eo.isAncestor(w, F)) throw Error("Cannot move a path [".concat(w, "] to new path [").concat(F, "] because the destination is inside itself."));
                            var _ = Node.get(e, w),
                                O = Node.parent(e, w),
                                x = w[w.length - 1];
                            O.children.splice(x, 1);
                            var k = eo.transform(w, r),
                                P = Node.get(e, eo.parent(k)),
                                S = k[k.length - 1];
                            if (P.children.splice(S, 0, _), t)
                                for (var [T, j] of Range.points(t)) t[j] = el.transform(T, r);
                            break;
                        case "remove_node":
                            var {
                                path: M
                            } = r, R = M[M.length - 1];
                            if (Node.parent(e, M).children.splice(R, 1), t)
                                for (var [I, L] of Range.points(t)) {
                                    var N = el.transform(I, r);
                                    if (null != t && null != N) t[L] = N;
                                    else {
                                        var z = void 0,
                                            W = void 0;
                                        for (var [q, V] of Node.texts(e))
                                            if (-1 === eo.compare(V, M)) z = [q, V];
                                            else {
                                                W = [q, V];
                                                break
                                            } var U = !1;
                                        z && W && (U = eo.equals(W[1], M) ? !eo.hasPrevious(W[1]) : eo.common(z[1], M).length < eo.common(W[1], M).length), z && !U ? (I.path = z[1], I.offset = z[0].text.length) : W ? (I.path = W[1], I.offset = 0) : t = null
                                    }
                                }
                            break;
                        case "remove_text":
                            var {
                                path: H, offset: J, text: K
                            } = r;
                            if (0 === K.length) break;
                            var $ = Node.leaf(e, H),
                                X = $.text.slice(0, J),
                                Q = $.text.slice(J + K.length);
                            if ($.text = X + Q, t)
                                for (var [G, Y] of Range.points(t)) t[Y] = el.transform(G, r);
                            break;
                        case "set_node":
                            var {
                                path: Z, properties: ee, newProperties: et
                            } = r;
                            if (0 === Z.length) throw Error("Cannot set properties on the root node!");
                            var er = Node.get(e, Z);
                            for (var en in et) {
                                if ("children" === en || "text" === en) throw Error('Cannot set the "'.concat(en, '" property of nodes!'));
                                var ei = et[en];
                                null == ei ? delete er[en] : er[en] = ei
                            }
                            for (var ea in ee) !et.hasOwnProperty(ea) && delete er[ea];
                            break;
                        case "set_selection":
                            var {
                                newProperties: eu
                            } = r;
                            if (null == eu) t = eu;
                            else {
                                if (null == t) {
                                    if (!Range.isRange(eu)) throw Error('Cannot apply an incomplete "set_selection" operation properties '.concat(ev.stringify(eu), " when there is no current selection."));
                                    t = eB({}, eu)
                                }
                                for (var es in eu) {
                                    var ec = eu[es];
                                    if (null == ec) {
                                        if ("anchor" === es || "focus" === es) throw Error('Cannot remove the "'.concat(es, '" selection property'));
                                        delete t[es]
                                    } else t[es] = ec
                                }
                            }
                            break;
                        case "split_node":
                            var ed, {
                                path: ef,
                                position: eh,
                                properties: ep
                            } = r;
                            if (0 === ef.length) throw Error('Cannot apply a "split_node" operation at path ['.concat(ef, "] because the root node cannot be split."));
                            var eD = Node.get(e, ef),
                                eg = Node.parent(e, ef),
                                eC = ef[ef.length - 1];
                            if (Text.isText(eD)) {
                                var em = eD.text.slice(0, eh),
                                    ey = eD.text.slice(eh);
                                eD.text = em, ed = eB(eB({}, ep), {}, {
                                    text: ey
                                })
                            } else {
                                var eE = eD.children.slice(0, eh),
                                    eb = eD.children.slice(eh);
                                eD.children = eE, ed = eB(eB({}, ep), {}, {
                                    children: eb
                                })
                            }
                            if (eg.children.splice(eC + 1, 0, ed), t)
                                for (var [eA, ew] of Range.points(t)) t[ew] = el.transform(eA, r)
                    }
                    return t
                },
                eA = ["text"],
                ew = ["children"];

            function eF(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function e_(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eF(Object(r), !0).forEach(function(t) {
                        u(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eF(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var eO = (e, t) => {
                    if (Element.isElement(t)) return !!G.isVoid(e, t) || 1 === t.children.length && eO(e, t.children[0]);
                    if (G.isEditor(t)) return !1;
                    return !0
                },
                ex = (e, t) => {
                    if (Range.isCollapsed(t)) return t.anchor;
                    var [, r] = Range.edges(t), n = G.pointRef(e, r);
                    return eM.delete(e, {
                        at: t
                    }), n.unref()
                },
                ek = (e, t) => {
                    var [r] = G.node(e, t);
                    return e => e === r
                };

            function eP(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function eS(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eP(Object(r), !0).forEach(function(t) {
                        u(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eP(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }

            function eT(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter(function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    })), r.push.apply(r, n)
                }
                return r
            }

            function ej(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? eT(Object(r), !0).forEach(function(t) {
                        u(e, t, r[t])
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : eT(Object(r)).forEach(function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    })
                }
                return e
            }
            var eM = ej(ej(ej(ej({}, {
                transform(e, t) {
                    e.children = (0, a.createDraft)(e.children);
                    var r = e.selection && (0, a.createDraft)(e.selection);
                    try {
                        r = eb(e, r, t)
                    } finally {
                        e.children = (0, a.finishDraft)(e.children), r ? e.selection = (0, a.isDraft)(r) ? (0, a.finishDraft)(r) : r : e.selection = null
                    }
                }
            }), {
                insertNodes(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    G.withoutNormalizing(e, () => {
                        var {
                            hanging: n = !1,
                            voids: i = !1,
                            mode: o = "lowest"
                        } = r, {
                            at: a,
                            match: u,
                            select: s
                        } = r;
                        if (Node.isNode(t) && (t = [t]), 0 !== t.length) {
                            var [l] = t;
                            if (!a && (a = e.selection ? e.selection : e.children.length > 0 ? G.end(e, []) : [0], s = !0), null == s && (s = !1), Range.isRange(a)) {
                                if (!n && (a = G.unhangRange(e, a, {
                                        voids: i
                                    })), Range.isCollapsed(a)) a = a.anchor;
                                else {
                                    var [, c] = Range.edges(a), d = G.pointRef(e, c);
                                    eM.delete(e, {
                                        at: a
                                    }), a = d.unref()
                                }
                            }
                            if (el.isPoint(a)) {
                                null == u && (u = Text.isText(l) ? e => Text.isText(e) : e.isInline(l) ? t => Text.isText(t) || G.isInline(e, t) : t => Element.isElement(t) && G.isBlock(e, t));
                                var [f] = G.nodes(e, {
                                    at: a.path,
                                    match: u,
                                    mode: o,
                                    voids: i
                                });
                                if (!f) return;
                                var [, h] = f, p = G.pathRef(e, h), v = G.isEnd(e, a, h);
                                eM.splitNodes(e, {
                                    at: a,
                                    match: u,
                                    mode: o,
                                    voids: i
                                });
                                var D = p.unref();
                                a = v ? eo.next(D) : D
                            }
                            var g = eo.parent(a),
                                C = a[a.length - 1];
                            if (!(!i && G.void(e, {
                                    at: g
                                }))) {
                                for (var m of t) {
                                    var y = g.concat(C);
                                    C++, e.apply({
                                        type: "insert_node",
                                        path: y,
                                        node: m
                                    }), a = eo.next(a)
                                }
                                if (a = eo.previous(a), s) {
                                    var E = G.end(e, a);
                                    E && eM.select(e, E)
                                }
                            }
                        }
                    })
                },
                liftNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    G.withoutNormalizing(e, () => {
                        var {
                            at: r = e.selection,
                            mode: n = "lowest",
                            voids: i = !1
                        } = t, {
                            match: o
                        } = t;
                        if (null == o && (o = eo.isPath(r) ? ek(e, r) : t => Element.isElement(t) && G.isBlock(e, t)), r)
                            for (var a of Array.from(G.nodes(e, {
                                    at: r,
                                    match: o,
                                    mode: n,
                                    voids: i
                                }), t => {
                                    var [, r] = t;
                                    return G.pathRef(e, r)
                                })) {
                                var u = a.unref();
                                if (u.length < 2) throw Error("Cannot lift node at a path [".concat(u, "] because it has a depth of less than `2`."));
                                var [s, l] = G.node(e, eo.parent(u)), c = u[u.length - 1], {
                                    length: d
                                } = s.children;
                                if (1 === d) {
                                    var f = eo.next(l);
                                    eM.moveNodes(e, {
                                        at: u,
                                        to: f,
                                        voids: i
                                    }), eM.removeNodes(e, {
                                        at: l,
                                        voids: i
                                    })
                                } else if (0 === c) eM.moveNodes(e, {
                                    at: u,
                                    to: l,
                                    voids: i
                                });
                                else if (c === d - 1) {
                                    var h = eo.next(l);
                                    eM.moveNodes(e, {
                                        at: u,
                                        to: h,
                                        voids: i
                                    })
                                } else {
                                    var p = eo.next(u),
                                        v = eo.next(l);
                                    eM.splitNodes(e, {
                                        at: p,
                                        voids: i
                                    }), eM.moveNodes(e, {
                                        at: u,
                                        to: v,
                                        voids: i
                                    })
                                }
                            }
                    })
                },
                mergeNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    G.withoutNormalizing(e, () => {
                        var r, n, {
                                match: i,
                                at: o = e.selection
                            } = t,
                            {
                                hanging: a = !1,
                                voids: u = !1,
                                mode: s = "lowest"
                            } = t;
                        if (!o) return;
                        if (null == i) {
                            if (eo.isPath(o)) {
                                var [l] = G.parent(e, o);
                                i = e => l.children.includes(e)
                            } else i = t => Element.isElement(t) && G.isBlock(e, t)
                        }
                        if (!a && Range.isRange(o) && (o = G.unhangRange(e, o, {
                                voids: u
                            })), Range.isRange(o)) {
                            if (Range.isCollapsed(o)) o = o.anchor;
                            else {
                                var [, c] = Range.edges(o), d = G.pointRef(e, c);
                                eM.delete(e, {
                                    at: o
                                }), o = d.unref(), null == t.at && eM.select(e, o)
                            }
                        }
                        var [f] = G.nodes(e, {
                            at: o,
                            match: i,
                            voids: u,
                            mode: s
                        }), h = G.previous(e, {
                            at: o,
                            match: i,
                            voids: u,
                            mode: s
                        });
                        if (!!f && !!h) {
                            var [p, v] = f, [D, g] = h;
                            if (0 !== v.length && 0 !== g.length) {
                                var m = eo.next(g),
                                    y = eo.common(v, g),
                                    E = eo.isSibling(v, g),
                                    B = Array.from(G.levels(e, {
                                        at: v
                                    }), e => {
                                        var [t] = e;
                                        return t
                                    }).slice(y.length).slice(0, -1),
                                    b = G.above(e, {
                                        at: v,
                                        mode: "highest",
                                        match: t => B.includes(t) && eO(e, t)
                                    }),
                                    A = b && G.pathRef(e, b[1]);
                                if (Text.isText(p) && Text.isText(D)) {
                                    var w = C(p, eA);
                                    n = D.text.length, r = w
                                } else if (Element.isElement(p) && Element.isElement(D)) {
                                    var w = C(p, ew);
                                    n = D.children.length, r = w
                                } else throw Error("Cannot merge the node at path [".concat(v, "] with the previous sibling because it is not the same kind: ").concat(ev.stringify(p), " ").concat(ev.stringify(D)));
                                !E && eM.moveNodes(e, {
                                    at: v,
                                    to: m,
                                    voids: u
                                }), A && eM.removeNodes(e, {
                                    at: A.current,
                                    voids: u
                                }), Element.isElement(D) && G.isEmpty(e, D) || Text.isText(D) && "" === D.text && 0 !== g[g.length - 1] ? eM.removeNodes(e, {
                                    at: g,
                                    voids: u
                                }) : e.apply({
                                    type: "merge_node",
                                    path: m,
                                    position: n,
                                    properties: r
                                }), A && A.unref()
                            }
                        }
                    })
                },
                moveNodes(e, t) {
                    G.withoutNormalizing(e, () => {
                        var {
                            to: r,
                            at: n = e.selection,
                            mode: i = "lowest",
                            voids: o = !1
                        } = t, {
                            match: a
                        } = t;
                        if (n) {
                            null == a && (a = eo.isPath(n) ? ek(e, n) : t => Element.isElement(t) && G.isBlock(e, t));
                            var u = G.pathRef(e, r);
                            for (var s of Array.from(G.nodes(e, {
                                    at: n,
                                    match: a,
                                    mode: i,
                                    voids: o
                                }), t => {
                                    var [, r] = t;
                                    return G.pathRef(e, r)
                                })) {
                                var l = s.unref(),
                                    c = u.current;
                                0 !== l.length && e.apply({
                                    type: "move_node",
                                    path: l,
                                    newPath: c
                                }), u.current && eo.isSibling(c, l) && eo.isAfter(c, l) && (u.current = eo.next(u.current))
                            }
                            u.unref()
                        }
                    })
                },
                removeNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    G.withoutNormalizing(e, () => {
                        var {
                            hanging: r = !1,
                            voids: n = !1,
                            mode: i = "lowest"
                        } = t, {
                            at: o = e.selection,
                            match: a
                        } = t;
                        if (o)
                            for (var u of (null == a && (a = eo.isPath(o) ? ek(e, o) : t => Element.isElement(t) && G.isBlock(e, t)), !r && Range.isRange(o) && (o = G.unhangRange(e, o, {
                                    voids: n
                                })), Array.from(G.nodes(e, {
                                    at: o,
                                    match: a,
                                    mode: i,
                                    voids: n
                                }), t => {
                                    var [, r] = t;
                                    return G.pathRef(e, r)
                                }))) {
                                var s = u.unref();
                                if (s) {
                                    var [l] = G.node(e, s);
                                    e.apply({
                                        type: "remove_node",
                                        path: s,
                                        node: l
                                    })
                                }
                            }
                    })
                },
                setNodes(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    G.withoutNormalizing(e, () => {
                        var {
                            match: n,
                            at: i = e.selection,
                            compare: o,
                            merge: a
                        } = r, {
                            hanging: u = !1,
                            mode: s = "lowest",
                            split: l = !1,
                            voids: c = !1
                        } = r;
                        if (i) {
                            if (null == n && (n = eo.isPath(i) ? ek(e, i) : t => Element.isElement(t) && G.isBlock(e, t)), !u && Range.isRange(i) && (i = G.unhangRange(e, i, {
                                    voids: c
                                })), l && Range.isRange(i)) {
                                if (Range.isCollapsed(i) && G.leaf(e, i.anchor)[0].text.length > 0) return;
                                var d = G.rangeRef(e, i, {
                                        affinity: "inward"
                                    }),
                                    [f, h] = Range.edges(i),
                                    p = "lowest" === s ? "lowest" : "highest",
                                    v = G.isEnd(e, h, h.path);
                                eM.splitNodes(e, {
                                    at: h,
                                    match: n,
                                    mode: p,
                                    voids: c,
                                    always: !v
                                });
                                var D = G.isStart(e, f, f.path);
                                eM.splitNodes(e, {
                                    at: f,
                                    match: n,
                                    mode: p,
                                    voids: c,
                                    always: !D
                                }), i = d.unref(), null == r.at && eM.select(e, i)
                            }
                            for (var [g, C] of(!o && (o = (e, t) => e !== t), G.nodes(e, {
                                    at: i,
                                    match: n,
                                    mode: s,
                                    voids: c
                                }))) {
                                var m = {},
                                    y = {};
                                if (0 !== C.length) {
                                    var E = !1;
                                    for (var B in t) "children" !== B && "text" !== B && o(t[B], g[B]) && (E = !0, g.hasOwnProperty(B) && (m[B] = g[B]), a ? null != t[B] && (y[B] = a(g[B], t[B])) : null != t[B] && (y[B] = t[B]));
                                    E && e.apply({
                                        type: "set_node",
                                        path: C,
                                        properties: m,
                                        newProperties: y
                                    })
                                }
                            }
                        }
                    })
                },
                splitNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    G.withoutNormalizing(e, () => {
                        var r, n, {
                                mode: i = "lowest",
                                voids: o = !1
                            } = t,
                            {
                                match: a,
                                at: u = e.selection,
                                height: s = 0,
                                always: l = !1
                            } = t;
                        if (null == a && (a = t => Element.isElement(t) && G.isBlock(e, t)), Range.isRange(u) && (u = ex(e, u)), eo.isPath(u)) {
                            var c = u,
                                d = G.point(e, c),
                                [f] = G.parent(e, c);
                            a = e => e === f, s = d.path.length - c.length + 1, u = d, l = !0
                        }
                        if (u) {
                            var h = G.pointRef(e, u, {
                                affinity: "backward"
                            });
                            try {
                                var [p] = G.nodes(e, {
                                    at: u,
                                    match: a,
                                    mode: i,
                                    voids: o
                                });
                                if (!p) return;
                                var v = G.void(e, {
                                    at: u,
                                    mode: "highest"
                                });
                                if (!o && v) {
                                    var [D, g] = v;
                                    if (Element.isElement(D) && e.isInline(D)) {
                                        var C = G.after(e, g);
                                        if (!C) {
                                            var m = eo.next(g);
                                            eM.insertNodes(e, {
                                                text: ""
                                            }, {
                                                at: m,
                                                voids: o
                                            }), C = G.point(e, m)
                                        }
                                        u = C, l = !0
                                    }
                                    s = u.path.length - g.length + 1, l = !0
                                }
                                r = G.pointRef(e, u);
                                var y = u.path.length - s,
                                    [, E] = p,
                                    B = u.path.slice(0, y),
                                    b = 0 === s ? u.offset : u.path[y] + 0;
                                for (var [A, w] of G.levels(e, {
                                        at: B,
                                        reverse: !0,
                                        voids: o
                                    })) {
                                    var F = !1;
                                    if (w.length < E.length || 0 === w.length || !o && Element.isElement(A) && G.isVoid(e, A)) break;
                                    var _ = h.current,
                                        O = G.isEnd(e, _, w);
                                    if (l || !h || !G.isEdge(e, _, w)) {
                                        F = !0;
                                        var x = Node.extractProps(A);
                                        e.apply({
                                            type: "split_node",
                                            path: w,
                                            position: b,
                                            properties: x
                                        })
                                    }
                                    b = w[w.length - 1] + (F || O ? 1 : 0)
                                }
                                if (null == t.at) {
                                    var k = r.current || G.end(e, []);
                                    eM.select(e, k)
                                }
                            } finally {
                                h.unref(), null === (n = r) || void 0 === n || n.unref()
                            }
                        }
                    })
                },
                unsetNodes(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    !Array.isArray(t) && (t = [t]);
                    var n = {};
                    for (var i of t) n[i] = null;
                    eM.setNodes(e, n, r)
                },
                unwrapNodes(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    G.withoutNormalizing(e, () => {
                        var {
                            mode: r = "lowest",
                            split: n = !1,
                            voids: i = !1
                        } = t, {
                            at: o = e.selection,
                            match: a
                        } = t;
                        if (o) {
                            null == a && (a = eo.isPath(o) ? ek(e, o) : t => Element.isElement(t) && G.isBlock(e, t)), eo.isPath(o) && (o = G.range(e, o));
                            var u = Range.isRange(o) ? G.rangeRef(e, o) : null,
                                s = Array.from(G.nodes(e, {
                                    at: o,
                                    match: a,
                                    mode: r,
                                    voids: i
                                }), t => {
                                    var [, r] = t;
                                    return G.pathRef(e, r)
                                }).reverse();
                            for (var l of s) ! function(t) {
                                var r = t.unref(),
                                    [o] = G.node(e, r),
                                    a = G.range(e, r);
                                n && u && (a = Range.intersection(u.current, a)), eM.liftNodes(e, {
                                    at: a,
                                    match: e => Element.isAncestor(o) && o.children.includes(e),
                                    voids: i
                                })
                            }(l);
                            u && u.unref()
                        }
                    })
                },
                wrapNodes(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    G.withoutNormalizing(e, () => {
                        var {
                            mode: n = "lowest",
                            split: i = !1,
                            voids: o = !1
                        } = r, {
                            match: a,
                            at: u = e.selection
                        } = r;
                        if (u) {
                            if (null == a && (a = eo.isPath(u) ? ek(e, u) : e.isInline(t) ? t => Element.isElement(t) && G.isInline(e, t) || Text.isText(t) : t => Element.isElement(t) && G.isBlock(e, t)), i && Range.isRange(u)) {
                                var [s, l] = Range.edges(u), c = G.rangeRef(e, u, {
                                    affinity: "inward"
                                });
                                eM.splitNodes(e, {
                                    at: l,
                                    match: a,
                                    voids: o
                                }), eM.splitNodes(e, {
                                    at: s,
                                    match: a,
                                    voids: o
                                }), u = c.unref(), null == r.at && eM.select(e, u)
                            }
                            for (var [, d] of Array.from(G.nodes(e, {
                                    at: u,
                                    match: e.isInline(t) ? t => Element.isElement(t) && G.isBlock(e, t) : e => G.isEditor(e),
                                    mode: "lowest",
                                    voids: o
                                }))) {
                                var f = Range.isRange(u) ? Range.intersection(u, G.range(e, d)) : u;
                                if (f) {
                                    var h = Array.from(G.nodes(e, {
                                        at: f,
                                        match: a,
                                        mode: n,
                                        voids: o
                                    }));
                                    if (h.length > 0 && "continue" === function() {
                                            var [r] = h, n = h[h.length - 1], [, i] = r, [, a] = n;
                                            if (0 === i.length && 0 === a.length) return "continue";
                                            var u = eo.equals(i, a) ? eo.parent(i) : eo.common(i, a),
                                                s = G.range(e, i, a),
                                                [l] = G.node(e, u),
                                                c = u.length + 1,
                                                d = eo.next(a.slice(0, c)),
                                                f = e_(e_({}, t), {}, {
                                                    children: []
                                                });
                                            eM.insertNodes(e, f, {
                                                at: d,
                                                voids: o
                                            }), eM.moveNodes(e, {
                                                at: s,
                                                match: e => Element.isAncestor(l) && l.children.includes(e),
                                                to: d.concat(0),
                                                voids: o
                                            })
                                        }()) continue
                                }
                            }
                        }
                    })
                }
            }), {
                collapse(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        {
                            edge: r = "anchor"
                        } = t,
                        {
                            selection: n
                        } = e;
                    if (!!n) {
                        if ("anchor" === r) eM.select(e, n.anchor);
                        else if ("focus" === r) eM.select(e, n.focus);
                        else if ("start" === r) {
                            var [i] = Range.edges(n);
                            eM.select(e, i)
                        } else if ("end" === r) {
                            var [, o] = Range.edges(n);
                            eM.select(e, o)
                        }
                    }
                },
                deselect(e) {
                    var {
                        selection: t
                    } = e;
                    t && e.apply({
                        type: "set_selection",
                        properties: t,
                        newProperties: null
                    })
                },
                move(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        {
                            selection: r
                        } = e,
                        {
                            distance: n = 1,
                            unit: i = "character",
                            reverse: o = !1
                        } = t,
                        {
                            edge: a = null
                        } = t;
                    if (r) {
                        "start" === a && (a = Range.isBackward(r) ? "focus" : "anchor"), "end" === a && (a = Range.isBackward(r) ? "anchor" : "focus");
                        var {
                            anchor: u,
                            focus: s
                        } = r, l = {
                            distance: n,
                            unit: i
                        }, c = {};
                        if (null == a || "anchor" === a) {
                            var d = o ? G.before(e, u, l) : G.after(e, u, l);
                            d && (c.anchor = d)
                        }
                        if (null == a || "focus" === a) {
                            var f = o ? G.before(e, s, l) : G.after(e, s, l);
                            f && (c.focus = f)
                        }
                        eM.setSelection(e, c)
                    }
                },
                select(e, t) {
                    var {
                        selection: r
                    } = e;
                    if (t = G.range(e, t), r) {
                        eM.setSelection(e, t);
                        return
                    }
                    if (!Range.isRange(t)) throw Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(ev.stringify(t)));
                    e.apply({
                        type: "set_selection",
                        properties: r,
                        newProperties: t
                    })
                },
                setPoint(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        {
                            selection: n
                        } = e,
                        {
                            edge: i = "both"
                        } = r;
                    if (n) {
                        "start" === i && (i = Range.isBackward(n) ? "focus" : "anchor"), "end" === i && (i = Range.isBackward(n) ? "anchor" : "focus");
                        var {
                            anchor: o,
                            focus: a
                        } = n, u = "anchor" === i ? o : a;
                        eM.setSelection(e, {
                            ["anchor" === i ? "anchor" : "focus"]: eS(eS({}, u), t)
                        })
                    }
                },
                setSelection(e, t) {
                    var {
                        selection: r
                    } = e, n = {}, i = {};
                    if (r) {
                        for (var o in t)("anchor" === o && null != t.anchor && !el.equals(t.anchor, r.anchor) || "focus" === o && null != t.focus && !el.equals(t.focus, r.focus) || "anchor" !== o && "focus" !== o && t[o] !== r[o]) && (n[o] = r[o], i[o] = t[o]);
                        Object.keys(n).length > 0 && e.apply({
                            type: "set_selection",
                            properties: n,
                            newProperties: i
                        })
                    }
                }
            }), {
                delete(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    G.withoutNormalizing(e, () => {
                        var r, {
                                reverse: n = !1,
                                unit: i = "character",
                                distance: o = 1,
                                voids: a = !1
                            } = t,
                            {
                                at: u = e.selection,
                                hanging: s = !1
                            } = t;
                        if (!!u) {
                            var l = !1;
                            if (Range.isRange(u) && Range.isCollapsed(u) && (l = !0, u = u.anchor), el.isPoint(u)) {
                                var c = G.void(e, {
                                    at: u,
                                    mode: "highest"
                                });
                                if (!a && c) {
                                    var [, d] = c;
                                    u = d
                                } else {
                                    var f = {
                                            unit: i,
                                            distance: o
                                        },
                                        h = n ? G.before(e, u, f) || G.start(e, []) : G.after(e, u, f) || G.end(e, []);
                                    u = {
                                        anchor: u,
                                        focus: h
                                    }, s = !0
                                }
                            }
                            if (eo.isPath(u)) {
                                eM.removeNodes(e, {
                                    at: u,
                                    voids: a
                                });
                                return
                            }
                            if (!Range.isCollapsed(u)) {
                                if (!s) {
                                    var [, p] = Range.edges(u), v = G.end(e, []);
                                    !el.equals(p, v) && (u = G.unhangRange(e, u, {
                                        voids: a
                                    }))
                                }
                                var [D, g] = Range.edges(u), C = G.above(e, {
                                    match: t => Element.isElement(t) && G.isBlock(e, t),
                                    at: D,
                                    voids: a
                                }), m = G.above(e, {
                                    match: t => Element.isElement(t) && G.isBlock(e, t),
                                    at: g,
                                    voids: a
                                }), y = C && m && !eo.equals(C[1], m[1]), E = eo.equals(D.path, g.path), B = a ? null : G.void(e, {
                                    at: D,
                                    mode: "highest"
                                }), b = a ? null : G.void(e, {
                                    at: g,
                                    mode: "highest"
                                });
                                if (B) {
                                    var A = G.before(e, D);
                                    A && C && eo.isAncestor(C[1], A.path) && (D = A)
                                }
                                if (b) {
                                    var w = G.after(e, g);
                                    w && m && eo.isAncestor(m[1], w.path) && (g = w)
                                }
                                var F = [];
                                for (var _ of G.nodes(e, {
                                        at: u,
                                        voids: a
                                    })) {
                                    var [O, x] = _;
                                    (!r || 0 !== eo.compare(x, r)) && (!a && Element.isElement(O) && G.isVoid(e, O) || !eo.isCommon(x, D.path) && !eo.isCommon(x, g.path)) && (F.push(_), r = x)
                                }
                                var k = Array.from(F, t => {
                                        var [, r] = t;
                                        return G.pathRef(e, r)
                                    }),
                                    P = G.pointRef(e, D),
                                    S = G.pointRef(e, g),
                                    T = "";
                                if (!E && !B) {
                                    var j = P.current,
                                        [M] = G.leaf(e, j),
                                        {
                                            path: R
                                        } = j,
                                        {
                                            offset: I
                                        } = D,
                                        L = M.text.slice(I);
                                    L.length > 0 && (e.apply({
                                        type: "remove_text",
                                        path: R,
                                        offset: I,
                                        text: L
                                    }), T = L)
                                }
                                if (k.reverse().map(e => e.unref()).filter(e => null !== e).forEach(t => eM.removeNodes(e, {
                                        at: t,
                                        voids: a
                                    })), !b) {
                                    var N = S.current,
                                        [z] = G.leaf(e, N),
                                        {
                                            path: W
                                        } = N,
                                        q = E ? D.offset : 0,
                                        V = z.text.slice(q, g.offset);
                                    V.length > 0 && (e.apply({
                                        type: "remove_text",
                                        path: W,
                                        offset: q,
                                        text: V
                                    }), T = V)
                                }!E && y && S.current && P.current && eM.mergeNodes(e, {
                                    at: S.current,
                                    hanging: !0,
                                    voids: a
                                }), l && n && "character" === i && T.length > 1 && T.match(/[\u0E00-\u0E7F]+/) && eM.insertText(e, T.slice(0, T.length - o));
                                var U = P.unref(),
                                    H = S.unref(),
                                    J = n ? U || H : H || U;
                                null == t.at && J && eM.select(e, J)
                            }
                        }
                    })
                },
                insertFragment(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    G.withoutNormalizing(e, () => {
                        var n, {
                                hanging: i = !1,
                                voids: o = !1
                            } = r,
                            {
                                at: a = e.selection
                            } = r;
                        if (!t.length) return;
                        if (!!a) {
                            if (Range.isRange(a)) {
                                if (!i && (a = G.unhangRange(e, a, {
                                        voids: o
                                    })), Range.isCollapsed(a)) a = a.anchor;
                                else {
                                    var [, u] = Range.edges(a);
                                    if (!o && G.void(e, {
                                            at: u
                                        })) return;
                                    var s = G.pointRef(e, u);
                                    eM.delete(e, {
                                        at: a
                                    }), a = s.unref()
                                }
                            } else eo.isPath(a) && (a = G.start(e, a));
                            if (!(!o && G.void(e, {
                                    at: a
                                }))) {
                                var l = G.above(e, {
                                    at: a,
                                    match: t => Element.isElement(t) && G.isInline(e, t),
                                    mode: "highest",
                                    voids: o
                                });
                                if (l) {
                                    var [, c] = l;
                                    G.isEnd(e, a, c) ? a = G.after(e, c) : G.isStart(e, a, c) && (a = G.before(e, c))
                                }
                                var [, d] = G.above(e, {
                                    match: t => Element.isElement(t) && G.isBlock(e, t),
                                    at: a,
                                    voids: o
                                }), f = G.isStart(e, a, d), h = G.isEnd(e, a, d), p = f && h, v = !f || f && h, D = !h, [, g] = Node.first({
                                    children: t
                                }, []), [, C] = Node.last({
                                    children: t
                                }, []), m = [], y = t => {
                                    var [r, n] = t;
                                    return 0 !== n.length && (!!p || !(v && eo.isAncestor(n, g) && Element.isElement(r) && !e.isVoid(r) && !e.isInline(r) || D && eo.isAncestor(n, C) && Element.isElement(r) && !e.isVoid(r) && !e.isInline(r)) && !0)
                                };
                                for (var E of Node.nodes({
                                        children: t
                                    }, {
                                        pass: y
                                    })) y(E) && m.push(E);
                                var B = [],
                                    b = [],
                                    A = [],
                                    w = !0,
                                    F = !1;
                                for (var [_] of m) Element.isElement(_) && !e.isInline(_) ? (w = !1, F = !0, b.push(_)) : w ? B.push(_) : A.push(_);
                                var [O] = G.nodes(e, {
                                    at: a,
                                    match: t => Text.isText(t) || G.isInline(e, t),
                                    mode: "highest",
                                    voids: o
                                }), [, x] = O, k = G.isStart(e, a, x), P = G.isEnd(e, a, x), S = G.pathRef(e, h && !A.length ? eo.next(d) : d), T = G.pathRef(e, P ? eo.next(x) : x);
                                eM.splitNodes(e, {
                                    at: a,
                                    match: t => F ? Element.isElement(t) && G.isBlock(e, t) : Text.isText(t) || G.isInline(e, t),
                                    mode: F ? "lowest" : "highest",
                                    always: F && (!f || B.length > 0) && (!h || A.length > 0),
                                    voids: o
                                });
                                var j = G.pathRef(e, !k || k && P ? eo.next(x) : x);
                                if (eM.insertNodes(e, B, {
                                        at: j.current,
                                        match: t => Text.isText(t) || G.isInline(e, t),
                                        mode: "highest",
                                        voids: o
                                    }), p && !B.length && b.length && !A.length && eM.delete(e, {
                                        at: d,
                                        voids: o
                                    }), eM.insertNodes(e, b, {
                                        at: S.current,
                                        match: t => Element.isElement(t) && G.isBlock(e, t),
                                        mode: "lowest",
                                        voids: o
                                    }), eM.insertNodes(e, A, {
                                        at: T.current,
                                        match: t => Text.isText(t) || G.isInline(e, t),
                                        mode: "highest",
                                        voids: o
                                    }), !r.at && (A.length > 0 && T.current ? n = eo.previous(T.current) : b.length > 0 && S.current ? n = eo.previous(S.current) : j.current && (n = eo.previous(j.current)), n)) {
                                    var M = G.end(e, n);
                                    eM.select(e, M)
                                }
                                j.unref(), S.unref(), T.unref()
                            }
                        }
                    })
                },
                insertText(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    G.withoutNormalizing(e, () => {
                        var {
                            voids: n = !1
                        } = r, {
                            at: i = e.selection
                        } = r;
                        if (!!i) {
                            if (eo.isPath(i) && (i = G.range(e, i)), Range.isRange(i)) {
                                if (Range.isCollapsed(i)) i = i.anchor;
                                else {
                                    var o = Range.end(i);
                                    if (!n && G.void(e, {
                                            at: o
                                        })) return;
                                    var a = Range.start(i),
                                        u = G.pointRef(e, a),
                                        s = G.pointRef(e, o);
                                    eM.delete(e, {
                                        at: i,
                                        voids: n
                                    });
                                    var l = u.unref(),
                                        c = s.unref();
                                    i = l || c, eM.setSelection(e, {
                                        anchor: i,
                                        focus: i
                                    })
                                }
                            }
                            if (!(!n && G.void(e, {
                                    at: i
                                }))) {
                                var {
                                    path: d,
                                    offset: f
                                } = i;
                                t.length > 0 && e.apply({
                                    type: "insert_text",
                                    path: d,
                                    offset: f,
                                    text: t
                                })
                            }
                        }
                    })
                }
            })
        },
        188904: function(e, t, r) {
            "use strict";
            var n = {
                linear: function(e, t, r, n) {
                    return (r - t) * e / n + t
                },
                easeInQuad: function(e, t, r, n) {
                    return (r - t) * (e /= n) * e + t
                },
                easeOutQuad: function(e, t, r, n) {
                    return -(r - t) * (e /= n) * (e - 2) + t
                },
                easeInOutQuad: function(e, t, r, n) {
                    var i = r - t;
                    return (e /= n / 2) < 1 ? i / 2 * e * e + t : -i / 2 * (--e * (e - 2) - 1) + t
                },
                easeInCubic: function(e, t, r, n) {
                    return (r - t) * (e /= n) * e * e + t
                },
                easeOutCubic: function(e, t, r, n) {
                    return (r - t) * ((e = e / n - 1) * e * e + 1) + t
                },
                easeInOutCubic: function(e, t, r, n) {
                    var i = r - t;
                    return (e /= n / 2) < 1 ? i / 2 * e * e * e + t : i / 2 * ((e -= 2) * e * e + 2) + t
                },
                easeInQuart: function(e, t, r, n) {
                    return (r - t) * (e /= n) * e * e * e + t
                },
                easeOutQuart: function(e, t, r, n) {
                    return -(r - t) * ((e = e / n - 1) * e * e * e - 1) + t
                },
                easeInOutQuart: function(e, t, r, n) {
                    var i = r - t;
                    return (e /= n / 2) < 1 ? i / 2 * e * e * e * e + t : -i / 2 * ((e -= 2) * e * e * e - 2) + t
                },
                easeInQuint: function(e, t, r, n) {
                    return (r - t) * (e /= n) * e * e * e * e + t
                },
                easeOutQuint: function(e, t, r, n) {
                    return (r - t) * ((e = e / n - 1) * e * e * e * e + 1) + t
                },
                easeInOutQuint: function(e, t, r, n) {
                    var i = r - t;
                    return (e /= n / 2) < 1 ? i / 2 * e * e * e * e * e + t : i / 2 * ((e -= 2) * e * e * e * e + 2) + t
                },
                easeInSine: function(e, t, r, n) {
                    var i = r - t;
                    return -i * Math.cos(e / n * (Math.PI / 2)) + i + t
                },
                easeOutSine: function(e, t, r, n) {
                    return (r - t) * Math.sin(e / n * (Math.PI / 2)) + t
                },
                easeInOutSine: function(e, t, r, n) {
                    return -(r - t) / 2 * (Math.cos(Math.PI * e / n) - 1) + t
                },
                easeInExpo: function(e, t, r, n) {
                    return 0 == e ? t : (r - t) * Math.pow(2, 10 * (e / n - 1)) + t
                },
                easeOutExpo: function(e, t, r, n) {
                    var i = r - t;
                    return e == n ? t + i : i * (-Math.pow(2, -10 * e / n) + 1) + t
                },
                easeInOutExpo: function(e, t, r, n) {
                    var i = r - t;
                    return 0 === e ? t : e === n ? t + i : (e /= n / 2) < 1 ? i / 2 * Math.pow(2, 10 * (e - 1)) + t : i / 2 * (-Math.pow(2, -10 * --e) + 2) + t
                },
                easeInCirc: function(e, t, r, n) {
                    return -(r - t) * (Math.sqrt(1 - (e /= n) * e) - 1) + t
                },
                easeOutCirc: function(e, t, r, n) {
                    return (r - t) * Math.sqrt(1 - (e = e / n - 1) * e) + t
                },
                easeInOutCirc: function(e, t, r, n) {
                    var i = r - t;
                    return (e /= n / 2) < 1 ? -i / 2 * (Math.sqrt(1 - e * e) - 1) + t : i / 2 * (Math.sqrt(1 - (e -= 2) * e) + 1) + t
                },
                easeInElastic: function(e, t, r, n) {
                    var i, o, a, u = r - t;
                    return (a = 1.70158, o = 0, i = u, 0 === e) ? t : 1 == (e /= n) ? t + u : (!o && (o = .3 * n), i < Math.abs(u) ? (i = u, a = o / 4) : a = o / (2 * Math.PI) * Math.asin(u / i), -(i * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - a) * (2 * Math.PI) / o)) + t)
                },
                easeOutElastic: function(e, t, r, n) {
                    var i, o, a, u = r - t;
                    return (a = 1.70158, o = 0, i = u, 0 === e) ? t : 1 == (e /= n) ? t + u : (!o && (o = .3 * n), i < Math.abs(u) ? (i = u, a = o / 4) : a = o / (2 * Math.PI) * Math.asin(u / i), i * Math.pow(2, -10 * e) * Math.sin((e * n - a) * (2 * Math.PI) / o) + u + t)
                },
                easeInOutElastic: function(e, t, r, n) {
                    var i, o, a, u = r - t;
                    return (a = 1.70158, o = 0, i = u, 0 === e) ? t : 2 == (e /= n / 2) ? t + u : (!o && (o = n * (.3 * 1.5)), i < Math.abs(u) ? (i = u, a = o / 4) : a = o / (2 * Math.PI) * Math.asin(u / i), e < 1) ? -.5 * (i * Math.pow(2, 10 * (e -= 1)) * Math.sin((e * n - a) * (2 * Math.PI) / o)) + t : i * Math.pow(2, -10 * (e -= 1)) * Math.sin((e * n - a) * (2 * Math.PI) / o) * .5 + u + t
                },
                easeInBack: function(e, t, r, n, i) {
                    return void 0 === i && (i = 1.70158), (r - t) * (e /= n) * e * ((i + 1) * e - i) + t
                },
                easeOutBack: function(e, t, r, n, i) {
                    return void 0 === i && (i = 1.70158), (r - t) * ((e = e / n - 1) * e * ((i + 1) * e + i) + 1) + t
                },
                easeInOutBack: function(e, t, r, n, i) {
                    var o = r - t;
                    return (void 0 === i && (i = 1.70158), (e /= n / 2) < 1) ? o / 2 * (e * e * (((i *= 1.525) + 1) * e - i)) + t : o / 2 * ((e -= 2) * e * (((i *= 1.525) + 1) * e + i) + 2) + t
                },
                easeInBounce: function(e, t, r, i) {
                    var o, a = r - t;
                    return o = n.easeOutBounce(i - e, 0, a, i), a - o + t
                },
                easeOutBounce: function(e, t, r, n) {
                    var i = r - t;
                    if ((e /= n) < 1 / 2.75) return i * (7.5625 * e * e) + t;
                    if (e < 2 / 2.75) return i * (7.5625 * (e -= 1.5 / 2.75) * e + .75) + t;
                    if (e < 2.5 / 2.75) return i * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) + t;
                    else return i * (7.5625 * (e -= 2.625 / 2.75) * e + .984375) + t
                },
                easeInOutBounce: function(e, t, r, i) {
                    var o, a = r - t;
                    return e < i / 2 ? .5 * (o = n.easeInBounce(2 * e, 0, a, i)) + t : .5 * (o = n.easeOutBounce(2 * e - i, 0, a, i)) + .5 * a + t
                }
            };
            e.exports = n
        },
        86441: function(e, t, r) {
            "use strict";
            async function n(e, t) {
                let [{
                    relottie: n
                }, {
                    default: i
                }] = await Promise.all([r.el("37216").then(r.bind(r, "37216")), r.el("745191").then(r.bind(r, "745191"))]);
                return JSON.parse((await n().use(i, {
                    lss: t
                }).process(JSON.stringify(e))).value)
            }
            r.r(t), r.d(t, {
                a: function() {
                    return n
                }
            }), r("222007")
        },
        184339: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                a: function() {
                    return l
                },
                b: function() {
                    return d
                }
            }), r("222007");
            var n = Object.create,
                i = Object.defineProperty,
                o = Object.getOwnPropertyDescriptor,
                a = Object.getOwnPropertyNames,
                u = Object.getPrototypeOf,
                s = Object.prototype.hasOwnProperty,
                l = (e, t) => () => (t || e((t = {
                    exports: {}
                }).exports, t), t.exports),
                c = (e, t, r, n) => {
                    if (t && "object" == typeof t || "function" == typeof t)
                        for (let u of a(t)) s.call(e, u) || u === r || i(e, u, {
                            get: () => t[u],
                            enumerable: !(n = o(t, u)) || n.enumerable
                        });
                    return e
                },
                d = (e, t, r) => (r = null != e ? n(u(e)) : {}, c(!t && e && e.__esModule ? r : i(r, "default", {
                    value: e,
                    enumerable: !0
                }), e))
        },
        601801: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                a: function() {
                    return E
                }
            });
            var n = r("193809");

            function i() {
                throw Error("Cycle detected")
            }

            function o() {
                if (s > 1) s--;
                else {
                    for (var e, t = !1; void 0 !== u;) {
                        var r = u;
                        for (u = void 0, l++; void 0 !== r;) {
                            var n = r.o;
                            if (r.o = void 0, r.f &= -3, !(8 & r.f) && h(r)) try {
                                r.c()
                            } catch (r) {
                                t || (e = r, t = !0)
                            }
                            r = n
                        }
                    }
                    if (l = 0, s--, t) throw e
                }
            }
            r("70102"), r("274635");
            var a = void 0,
                u = void 0,
                s = 0,
                l = 0,
                c = 0;

            function d(e) {
                if (void 0 !== a) {
                    var t = e.n;
                    if (void 0 === t || t.t !== a) return t = {
                        i: 0,
                        S: e,
                        p: a.s,
                        n: void 0,
                        t: a,
                        e: void 0,
                        x: void 0,
                        r: t
                    }, void 0 !== a.s && (a.s.n = t), a.s = t, e.n = t, 32 & a.f && e.S(t), t;
                    if (-1 === t.i) return t.i = 0, void 0 !== t.n && (t.n.p = t.p, void 0 !== t.p && (t.p.n = t.n), t.p = a.s, t.n = void 0, a.s.n = t, a.s = t), t
                }
            }

            function f(e) {
                this.v = e, this.i = 0, this.n = void 0, this.t = void 0
            }
            f.prototype.h = function() {
                return !0
            }, f.prototype.S = function(e) {
                this.t !== e && void 0 === e.e && (e.x = this.t, void 0 !== this.t && (this.t.e = e), this.t = e)
            }, f.prototype.U = function(e) {
                if (void 0 !== this.t) {
                    var t = e.e,
                        r = e.x;
                    void 0 !== t && (t.x = r, e.e = void 0), void 0 !== r && (r.e = t, e.x = void 0), e === this.t && (this.t = r)
                }
            }, f.prototype.subscribe = function(e) {
                var t = this;
                return function(e) {
                    var t = new y(e);
                    try {
                        t.c()
                    } catch (e) {
                        throw t.d(), e
                    }
                    return t.d.bind(t)
                }(function() {
                    var r = t.value,
                        n = 32 & this.f;
                    this.f &= -33;
                    try {
                        e(r)
                    } finally {
                        this.f |= n
                    }
                })
            }, f.prototype.valueOf = function() {
                return this.value
            }, f.prototype.toString = function() {
                return this.value + ""
            }, f.prototype.toJSON = function() {
                return this.value
            }, f.prototype.peek = function() {
                return this.v
            }, Object.defineProperty(f.prototype, "value", {
                get: function() {
                    var e = d(this);
                    return void 0 !== e && (e.i = this.i), this.v
                },
                set: function(e) {
                    if (a instanceof D && function() {
                            throw Error("Computed cannot have side-effects")
                        }(), e !== this.v) {
                        l > 100 && i(), this.v = e, this.i++, c++, s++;
                        try {
                            for (var t = this.t; void 0 !== t; t = t.x) t.t.N()
                        } finally {
                            o()
                        }
                    }
                }
            });

            function h(e) {
                for (var t = e.s; void 0 !== t; t = t.n)
                    if (t.S.i !== t.i || !t.S.h() || t.S.i !== t.i) return !0;
                return !1
            }

            function p(e) {
                for (var t = e.s; void 0 !== t; t = t.n) {
                    var r = t.S.n;
                    if (void 0 !== r && (t.r = r), t.S.n = t, t.i = -1, void 0 === t.n) {
                        e.s = t;
                        break
                    }
                }
            }

            function v(e) {
                for (var t = e.s, r = void 0; void 0 !== t;) {
                    var n = t.p; - 1 === t.i ? (t.S.U(t), void 0 !== n && (n.n = t.n), void 0 !== t.n && (t.n.p = n)) : r = t, t.S.n = t.r, void 0 !== t.r && (t.r = void 0), t = n
                }
                e.s = r
            }

            function D(e) {
                f.call(this, void 0), this.x = e, this.s = void 0, this.g = c - 1, this.f = 4
            }

            function g(e) {
                var t = e.u;
                if (e.u = void 0, "function" == typeof t) {
                    s++;
                    var r = a;
                    a = void 0;
                    try {
                        t()
                    } catch (t) {
                        throw e.f &= -2, e.f |= 8, C(e), t
                    } finally {
                        a = r, o()
                    }
                }
            }

            function C(e) {
                for (var t = e.s; void 0 !== t; t = t.n) t.S.U(t);
                e.x = void 0, e.s = void 0, g(e)
            }

            function m(e) {
                if (a !== this) throw Error("Out-of-order effect");
                v(this), a = e, this.f &= -2, 8 & this.f && C(this), o()
            }

            function y(e) {
                this.x = e, this.u = void 0, this.s = void 0, this.o = void 0, this.f = 32
            }(D.prototype = new f).h = function() {
                if (this.f &= -3, 1 & this.f) return !1;
                if ((36 & this.f) == 32 || (this.f &= -5, this.g === c)) return !0;
                if (this.g = c, this.f |= 1, this.i > 0 && !h(this)) return this.f &= -2, !0;
                var e = a;
                try {
                    p(this), a = this;
                    var t = this.x();
                    (16 & this.f || this.v !== t || 0 === this.i) && (this.v = t, this.f &= -17, this.i++)
                } catch (e) {
                    this.v = e, this.f |= 16, this.i++
                }
                return a = e, v(this), this.f &= -2, !0
            }, D.prototype.S = function(e) {
                if (void 0 === this.t) {
                    this.f |= 36;
                    for (var t = this.s; void 0 !== t; t = t.n) t.S.S(t)
                }
                f.prototype.S.call(this, e)
            }, D.prototype.U = function(e) {
                if (void 0 !== this.t && (f.prototype.U.call(this, e), void 0 === this.t)) {
                    this.f &= -33;
                    for (var t = this.s; void 0 !== t; t = t.n) t.S.U(t)
                }
            }, D.prototype.N = function() {
                if (!(2 & this.f)) {
                    this.f |= 6;
                    for (var e = this.t; void 0 !== e; e = e.x) e.t.N()
                }
            }, D.prototype.peek = function() {
                if (this.h() || i(), 16 & this.f) throw this.v;
                return this.v
            }, Object.defineProperty(D.prototype, "value", {
                get: function() {
                    1 & this.f && i();
                    var e = d(this);
                    if (this.h(), void 0 !== e && (e.i = this.i), 16 & this.f) throw this.v;
                    return this.v
                }
            }), y.prototype.c = function() {
                var e = this.S();
                try {
                    if (8 & this.f || void 0 === this.x) return;
                    var t = this.x();
                    "function" == typeof t && (this.u = t)
                } finally {
                    e()
                }
            }, y.prototype.S = function() {
                1 & this.f && i(), this.f |= 1, this.f &= -9, g(this), p(this), s++;
                var e = a;
                return a = this, m.bind(this, e)
            }, y.prototype.N = function() {
                2 & this.f || (this.f |= 2, this.o = u, u = this)
            }, y.prototype.d = function() {
                this.f |= 8, 1 & this.f || C(this)
            };
            var E = class {
                setState(e) {
                    this._prevState = this._state.value, this._state.value = e
                }
                subscribe(e) {
                    return this._state.subscribe(t => e(t, this._prevState))
                }
                constructor(e) {
                    (0, n._)(this, "_state", void 0), (0, n._)(this, "_prevState", void 0), this._prevState = e, this._state = new f(e)
                }
            }
        },
        968839: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                a: function() {
                    return o
                }
            });
            var n = r("193809");
            r("70102"), r("222007");
            var i = r("846033"),
                o = class {
                    get dotLottie() {
                        return this._dotLottie
                    }
                    get animationsMap() {
                        return this._animationsMap
                    }
                    get themeMap() {
                        return this._themeMap
                    }
                    get stateMachinesMap() {
                        return this._stateMachinesMap
                    }
                    get manifest() {
                        return this._manifest
                    }
                    async loadFromUrl(e) {
                        let t = await fetch(e, {
                            method: "GET",
                            mode: "cors"
                        });
                        if (!t.ok) throw Error("Failed to load dotLottie from ".concat(e, " with status ").concat(t.status));
                        let r = t.headers.get("content-type");
                        if (null != r && r.includes("application/json")) {
                            let r = await t.json();
                            if (!(0, i.l)(r)) throw Error("Invalid lottie JSON at ".concat(e));
                            let n = (0, i.k)(e);
                            this._animationsMap.set(n, r);
                            this._manifest = {
                                activeAnimationId: n,
                                animations: [{
                                    id: n
                                }]
                            }
                        } else {
                            this._dotLottie = await (0, i.c)(await t.arrayBuffer());
                            let e = await (0, i.b)(this._dotLottie);
                            if (!e) throw Error("Manifest not found");
                            this._manifest = e
                        }
                    }
                    loadFromLottieJSON(e) {
                        if (!(0, i.l)(e)) throw Error("Invalid lottie JSON");
                        let t = "my-animation";
                        this._animationsMap.set(t, e);
                        this._manifest = {
                            activeAnimationId: t,
                            animations: [{
                                id: t
                            }]
                        }
                    }
                    async loadFromArrayBuffer(e) {
                        this._dotLottie = await (0, i.c)(e);
                        let t = await (0, i.b)(this._dotLottie);
                        if (!t) throw Error("Manifest not found");
                        this._manifest = t
                    }
                    async getAnimation(e) {
                        if (this._animationsMap.get(e)) return this._animationsMap.get(e);
                        if (!this._dotLottie) return;
                        let t = await (0, i.d)(this._dotLottie, e, {
                            inlineAssets: !0
                        });
                        return t && this._animationsMap.set(e, t), t
                    }
                    async getTheme(e) {
                        if (this._themeMap.get(e)) return this._themeMap.get(e);
                        if (!this._dotLottie) return;
                        let t = await (0, i.e)(this._dotLottie, e);
                        return t && this._themeMap.set(e, t), t
                    }
                    async getStateMachines() {
                        if (!this._dotLottie) return;
                        let e = await (0, i.f)(this._dotLottie);
                        for (let t in e)
                            if (t) {
                                let r = e[t];
                                if (r) {
                                    let e = JSON.parse(r);
                                    if (e) {
                                        let t = e.descriptor.id;
                                        this._stateMachinesMap.get(t) || this._stateMachinesMap.set(t, e)
                                    }
                                }
                            } return Array.from(this._stateMachinesMap.values())
                    }
                    async getStateMachine(e) {
                        if (this._stateMachinesMap.get(e)) return this._stateMachinesMap.get(e);
                        if (!this._dotLottie) return;
                        let t = await (0, i.g)(this._dotLottie, e);
                        return t && this._stateMachinesMap.set(t.descriptor.id, t), t
                    }
                    constructor() {
                        (0, n._)(this, "_dotLottie", void 0), (0, n._)(this, "_animationsMap", new Map), (0, n._)(this, "_themeMap", new Map), (0, n._)(this, "_stateMachinesMap", new Map), (0, n._)(this, "_manifest", void 0)
                    }
                }
        },
        846033: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                a: function() {
                    return eU
                },
                b: function() {
                    return e5
                },
                c: function() {
                    return e9
                },
                d: function() {
                    return tn
                },
                e: function() {
                    return ti
                },
                f: function() {
                    return to
                },
                g: function() {
                    return ta
                },
                h: function() {
                    return tu
                },
                i: function() {
                    return ts
                },
                j: function() {
                    return tl
                },
                k: function() {
                    return tc
                },
                l: function() {
                    return td
                },
                m: function() {
                    return tf
                },
                n: function() {
                    return th
                },
                o: function() {
                    return tp
                }
            });
            var n, i, o, a, u, s, l, c = r("193809");
            r("511434"), r("313619"), r("654714"), r("287168"), r("956660"), r("222007"), r("70102"), r("311790"), r("477657"), r("811875"), r("90301"), r("652153"), r("28797"), r("817884"), r("597349"), r("667536"), r("690341"), r("659510"), r("527135"), r("781738"), r("424973"), r("808653"), r("843762"), r("990131"), r("332822"), r("477315"), r("370692"), r("101997");
            var d = r("446825").Buffer,
                f = {},
                h = function(e, t, r, n, i) {
                    var o = new Worker(f[t] || (f[t] = URL.createObjectURL(new Blob([e + ';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'], {
                        type: "text/javascript"
                    }))));
                    return o.onmessage = function(e) {
                        var t = e.data,
                            r = t.$e$;
                        if (r) {
                            var n = Error(r[0]);
                            n.code = r[1], n.stack = r[2], i(n, null)
                        } else i(null, t)
                    }, o.postMessage(r, n), o
                },
                p = Uint8Array,
                v = Uint16Array,
                D = Int32Array,
                g = new p([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
                C = new p([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
                m = new p([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
                y = function(e, t) {
                    for (var r = new v(31), n = 0; n < 31; ++n) r[n] = t += 1 << e[n - 1];
                    for (var i = new D(r[30]), n = 1; n < 30; ++n)
                        for (var o = r[n]; o < r[n + 1]; ++o) i[o] = o - r[n] << 5 | n;
                    return {
                        b: r,
                        r: i
                    }
                },
                E = y(g, 2),
                B = E.b,
                b = E.r;
            B[28] = 258, b[258] = 28;
            var A = y(C, 0).b,
                w = new v(32768);
            for (l = 0; l < 32768; ++l) F = (61680 & (F = (52428 & (F = (43690 & l) >> 1 | (21845 & l) << 1)) >> 2 | (13107 & F) << 2)) >> 4 | (3855 & F) << 4, w[l] = ((65280 & F) >> 8 | (255 & F) << 8) >> 1;
            var F, l, _ = function(e, t, r) {
                    for (var n, i = e.length, o = 0, a = new v(t); o < i; ++o) e[o] && ++a[e[o] - 1];
                    var u = new v(t);
                    for (o = 1; o < t; ++o) u[o] = u[o - 1] + a[o - 1] << 1;
                    if (r) {
                        n = new v(1 << t);
                        var s = 15 - t;
                        for (o = 0; o < i; ++o)
                            if (e[o])
                                for (var l = o << 4 | e[o], c = t - e[o], d = u[e[o] - 1]++ << c, f = d | (1 << c) - 1; d <= f; ++d) n[w[d] >> s] = l
                    } else
                        for (n = new v(i), o = 0; o < i; ++o) e[o] && (n[o] = w[u[e[o] - 1]++] >> 15 - e[o]);
                    return n
                },
                O = new p(288);
            for (l = 0; l < 144; ++l) O[l] = 8;
            for (l = 144; l < 256; ++l) O[l] = 9;
            for (l = 256; l < 280; ++l) O[l] = 7;
            for (l = 280; l < 288; ++l) O[l] = 8;
            var l, x = new p(32);
            for (l = 0; l < 32; ++l) x[l] = 5;
            var k = _(O, 9, 1),
                P = _(x, 5, 1),
                S = function(e) {
                    for (var t = e[0], r = 1; r < e.length; ++r) e[r] > t && (t = e[r]);
                    return t
                },
                T = function(e, t, r) {
                    var n = t / 8 | 0;
                    return (e[n] | e[n + 1] << 8) >> (7 & t) & r
                },
                j = function(e, t) {
                    var r = t / 8 | 0;
                    return (e[r] | e[r + 1] << 8 | e[r + 2] << 16) >> (7 & t)
                },
                M = function(e) {
                    return (e + 7) / 8 | 0
                },
                R = function(e, t, r) {
                    (null == t || t < 0) && (t = 0), (null == r || r > e.length) && (r = e.length);
                    var n = new p(r - t);
                    return n.set(e.subarray(t, r)), n
                },
                I = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"],
                L = function(e, t, r) {
                    var n = Error(t || I[e]);
                    if (n.code = e, Error.captureStackTrace && Error.captureStackTrace(n, L), !r) throw n;
                    return n
                },
                N = function(e, t, r, n) {
                    var i = e.length,
                        o = n ? n.length : 0;
                    if (!i || t.f && !t.l) return r || new p(0);
                    var a = !r || 2 != t.i,
                        u = t.i;
                    r || (r = new p(3 * i));
                    var s = function(e) {
                            var t = r.length;
                            if (e > t) {
                                var n = new p(Math.max(2 * t, e));
                                n.set(r), r = n
                            }
                        },
                        l = t.f || 0,
                        c = t.p || 0,
                        d = t.b || 0,
                        f = t.l,
                        h = t.d,
                        v = t.m,
                        D = t.n,
                        y = 8 * i;
                    do {
                        if (!f) {
                            l = T(e, c, 1);
                            var E = T(e, c + 1, 3);
                            if (c += 3, E) {
                                if (1 == E) f = k, h = P, v = 9, D = 5;
                                else if (2 == E) {
                                    var b = T(e, c, 31) + 257,
                                        w = T(e, c + 10, 15) + 4,
                                        F = b + T(e, c + 5, 31) + 1;
                                    c += 14;
                                    for (var O = new p(F), x = new p(19), I = 0; I < w; ++I) x[m[I]] = T(e, c + 3 * I, 7);
                                    c += 3 * w;
                                    for (var N = S(x), z = (1 << N) - 1, W = _(x, N, 1), I = 0; I < F;) {
                                        var q = W[T(e, c, z)];
                                        c += 15 & q;
                                        var V = q >> 4;
                                        if (V < 16) O[I++] = V;
                                        else {
                                            var U = 0,
                                                H = 0;
                                            for (16 == V ? (H = 3 + T(e, c, 3), c += 2, U = O[I - 1]) : 17 == V ? (H = 3 + T(e, c, 7), c += 3) : 18 == V && (H = 11 + T(e, c, 127), c += 7); H--;) O[I++] = U
                                        }
                                    }
                                    var J = O.subarray(0, b),
                                        K = O.subarray(b);
                                    v = S(J), D = S(K), f = _(J, v, 1), h = _(K, D, 1)
                                } else L(1)
                            } else {
                                var V = M(c) + 4,
                                    $ = e[V - 4] | e[V - 3] << 8,
                                    X = V + $;
                                if (X > i) {
                                    u && L(0);
                                    break
                                }
                                a && s(d + $), r.set(e.subarray(V, X), d), t.b = d += $, t.p = c = 8 * X, t.f = l;
                                continue
                            }
                            if (c > y) {
                                u && L(0);
                                break
                            }
                        }
                        a && s(d + 131072);
                        for (var Q = (1 << v) - 1, G = (1 << D) - 1, Y = c;; Y = c) {
                            var U = f[j(e, c) & Q],
                                Z = U >> 4;
                            if ((c += 15 & U) > y) {
                                u && L(0);
                                break
                            }
                            if (U || L(2), Z < 256) r[d++] = Z;
                            else if (256 == Z) {
                                Y = c, f = null;
                                break
                            } else {
                                var ee = Z - 254;
                                if (Z > 264) {
                                    var I = Z - 257,
                                        et = g[I];
                                    ee = T(e, c, (1 << et) - 1) + B[I], c += et
                                }
                                var er = h[j(e, c) & G],
                                    en = er >> 4;
                                er || L(3), c += 15 & er;
                                var K = A[en];
                                if (en > 3) {
                                    var et = C[en];
                                    K += j(e, c) & (1 << et) - 1, c += et
                                }
                                if (c > y) {
                                    u && L(0);
                                    break
                                }
                                a && s(d + 131072);
                                var ei = d + ee;
                                if (d < K) {
                                    var eo = o - K,
                                        ea = Math.min(K, ei);
                                    for (eo + d < 0 && L(3); d < ea; ++d) r[d] = n[eo + d]
                                }
                                for (; d < ei; d += 4) r[d] = r[d - K], r[d + 1] = r[d + 1 - K], r[d + 2] = r[d + 2 - K], r[d + 3] = r[d + 3 - K];
                                d = ei
                            }
                        }
                        t.l = f, t.p = Y, t.b = d, t.f = l, f && (l = 1, t.m = v, t.d = h, t.n = D)
                    } while (!l);
                    return d == r.length ? r : R(r, 0, d)
                },
                z = new p(0),
                W = function(e, t) {
                    var r = {};
                    for (var n in e) r[n] = e[n];
                    for (var n in t) r[n] = t[n];
                    return r
                },
                q = function(e, t, r) {
                    for (var n = e(), i = e.toString(), o = i.slice(i.indexOf("[") + 1, i.lastIndexOf("]")).replace(/\s+/g, "").split(","), a = 0; a < n.length; ++a) {
                        var u = n[a],
                            s = o[a];
                        if ("function" == typeof u) {
                            t += ";" + s + "=";
                            var l = u.toString();
                            if (u.prototype) {
                                if (-1 != l.indexOf("[native code]")) {
                                    var c = l.indexOf(" ", 8) + 1;
                                    t += l.slice(c, l.indexOf("(", c))
                                } else
                                    for (var d in t += l, u.prototype) t += ";" + s + ".prototype." + d + "=" + u.prototype[d].toString()
                            } else t += l
                        } else r[s] = u
                    }
                    return t
                },
                V = [],
                U = function(e) {
                    var t = [];
                    for (var r in e) e[r].buffer && t.push((e[r] = new e[r].constructor(e[r])).buffer);
                    return t
                },
                H = function(e, t, r, n) {
                    if (!V[r]) {
                        for (var i = "", o = {}, a = e.length - 1, u = 0; u < a; ++u) i = q(e[u], i, o);
                        V[r] = {
                            c: q(e[a], i, o),
                            e: o
                        }
                    }
                    var s = W({}, V[r].e);
                    return h(V[r].c + ";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage=" + t.toString() + "}", r, s, U(s), n)
                },
                J = function() {
                    return [p, v, D, g, C, m, B, A, k, P, w, I, _, S, T, j, M, R, L, N, Z, K, $]
                },
                K = function(e) {
                    return postMessage(e, [e.buffer])
                },
                $ = function(e) {
                    return e && {
                        out: e.size && new p(e.size),
                        dictionary: e.dictionary
                    }
                },
                X = function(e, t, r, n, i, o) {
                    var a = H(r, n, i, function(e, t) {
                        a.terminate(), o(e, t)
                    });
                    return a.postMessage([e, t], t.consume ? [e.buffer] : []),
                        function() {
                            a.terminate()
                        }
                },
                Q = function(e, t) {
                    return e[t] | e[t + 1] << 8
                },
                G = function(e, t) {
                    return (e[t] | e[t + 1] << 8 | e[t + 2] << 16 | e[t + 3] << 24) >>> 0
                },
                Y = function(e, t) {
                    return G(e, t) + 4294967296 * G(e, t + 4)
                };

            function Z(e, t) {
                return N(e, {
                    i: 2
                }, t && t.out, t && t.dictionary)
            }
            var ee = "u" > typeof TextDecoder && new TextDecoder,
                et = 0;
            try {
                ee.decode(z, {
                    stream: !0
                })
            } catch {}
            var er = function(e) {
                for (var t = "", r = 0;;) {
                    var n = e[r++],
                        i = (n > 127) + (n > 223) + (n > 239);
                    if (r + i > e.length) return {
                        s: t,
                        r: R(e, r - 1)
                    };
                    i ? 3 == i ? t += String.fromCharCode(55296 | (n = ((15 & n) << 18 | (63 & e[r++]) << 12 | (63 & e[r++]) << 6 | 63 & e[r++]) - 65536) >> 10, 56320 | 1023 & n) : 1 & i ? t += String.fromCharCode((31 & n) << 6 | 63 & e[r++]) : t += String.fromCharCode((15 & n) << 12 | (63 & e[r++]) << 6 | 63 & e[r++]) : t += String.fromCharCode(n)
                }
            };

            function en(e, t) {
                if (t) {
                    for (var r = "", n = 0; n < e.length; n += 16384) r += String.fromCharCode.apply(null, e.subarray(n, n + 16384));
                    return r
                }
                if (ee) return ee.decode(e);
                var i = er(e),
                    o = i.s,
                    r = i.r;
                return r.length && L(8), o
            }
            var ei = function(e, t, r) {
                    var n = Q(e, t + 28),
                        i = en(e.subarray(t + 46, t + 46 + n), !(2048 & Q(e, t + 8))),
                        o = t + 46 + n,
                        a = G(e, t + 20),
                        u = r && 4294967295 == a ? eo(e, o) : [a, G(e, t + 24), G(e, t + 42)],
                        s = u[0],
                        l = u[1],
                        c = u[2];
                    return [Q(e, t + 10), s, l, i, o + Q(e, t + 30) + Q(e, t + 32), c]
                },
                eo = function(e, t) {
                    for (; 1 != Q(e, t); t += 4 + Q(e, t + 2));
                    return [Y(e, t + 12), Y(e, t + 4), Y(e, t + 20)]
                },
                ea = "function" == typeof queueMicrotask ? queueMicrotask : "function" == typeof setTimeout ? setTimeout : function(e) {
                    e()
                },
                eu = class extends Error {
                    constructor(e) {
                        var t;
                        super(e[0].message), (0, c._)(this, "issues", void 0), this.name = "ValiError", this.issues = e
                    }
                };

            function es(e, t, r, n) {
                if (!t || !t.length) return {
                    output: e
                };
                let i, o, a = e;
                for (let e of t) {
                    let t = e(a);
                    if (t.issue) {
                        var u, s, l;
                        let e = (s = i = i || {
                            reason: n,
                            origin: null == (u = r) ? void 0 : u.origin,
                            abortEarly: null == u ? void 0 : u.abortEarly,
                            abortPipeEarly: null == u ? void 0 : u.abortPipeEarly
                        }, l = t.issue, {
                            reason: null == s ? void 0 : s.reason,
                            validation: l.validation,
                            origin: (null == s ? void 0 : s.origin) || "value",
                            message: l.message,
                            input: l.input,
                            abortEarly: null == s ? void 0 : s.abortEarly,
                            abortPipeEarly: null == s ? void 0 : s.abortPipeEarly
                        });
                        if (o ? o.push(e) : o = [e], i.abortEarly || i.abortPipeEarly) break
                    } else a = t.output
                }
                return o ? {
                    issues: o
                } : {
                    output: a
                }
            }

            function el(e, t) {
                return e && "string" != typeof e ? [void 0, e] : [e, t]
            }

            function ec(e, t, r, n, i, o) {
                return {
                    issues: [{
                        reason: t,
                        validation: r,
                        origin: (null == e ? void 0 : e.origin) || "value",
                        message: n,
                        input: i,
                        issues: o,
                        abortEarly: null == e ? void 0 : e.abortEarly,
                        abortPipeEarly: null == e ? void 0 : e.abortPipeEarly
                    }]
                }
            }

            function ed(e, t, r) {
                let [n, i] = el(t, r);
                return {
                    schema: "array",
                    array: {
                        item: e
                    },
                    async: !1,
                    _parse(t, r) {
                        if (!Array.isArray(t)) return ec(r, "type", "array", n || "Invalid type", t);
                        let o, a = [];
                        for (let n = 0; n < t.length; n++) {
                            let i = t[n],
                                u = e._parse(i, r);
                            if (u.issues) {
                                let e = {
                                    schema: "array",
                                    input: t,
                                    key: n,
                                    value: i
                                };
                                for (let t of u.issues) t.path ? t.path.unshift(e) : t.path = [e], null == o || o.push(t);
                                if (o || (o = u.issues), null != r && r.abortEarly) break
                            } else a.push(u.output)
                        }
                        return o ? {
                            issues: o
                        } : es(a, i, r, "array")
                    }
                }
            }

            function ef(e, t) {
                let [r, n] = el(e, t);
                return {
                    schema: "boolean",
                    async: !1,
                    _parse: (e, t) => "boolean" != typeof e ? ec(t, "type", "boolean", r || "Invalid type", e) : es(e, n, t, "boolean")
                }
            }

            function eh(e, t) {
                return {
                    schema: "literal",
                    literal: e,
                    async: !1,
                    _parse: (r, n) => r !== e ? ec(n, "type", "literal", t || "Invalid type", r) : {
                        output: r
                    }
                }
            }

            function ep(e, t) {
                let [r, n] = el(e, t);
                return {
                    schema: "number",
                    async: !1,
                    _parse: (e, t) => "number" != typeof e ? ec(t, "type", "number", r || "Invalid type", e) : es(e, n, t, "number")
                }
            }

            function ev(e, t, r) {
                let [n, i] = el(t, r), o;
                return {
                    schema: "object",
                    object: e,
                    async: !1,
                    _parse(t, r) {
                        if (!t || "object" != typeof t) return ec(r, "type", "object", n || "Invalid type", t);
                        o = o || Object.entries(e);
                        let a, u = {};
                        for (let [e, n] of o) {
                            let i = t[e],
                                o = n._parse(i, r);
                            if (o.issues) {
                                let n = {
                                    schema: "object",
                                    input: t,
                                    key: e,
                                    value: i
                                };
                                for (let e of o.issues) e.path ? e.path.unshift(n) : e.path = [n], null == a || a.push(e);
                                if (a || (a = o.issues), null != r && r.abortEarly) break
                            } else u[e] = o.output
                        }
                        return a ? {
                            issues: a
                        } : es(u, i, r, "object")
                    }
                }
            }

            function eD(e) {
                return {
                    schema: "optional",
                    wrapped: e,
                    async: !1,
                    _parse: (t, r) => void 0 === t ? {
                        output: t
                    } : e._parse(t, r)
                }
            }

            function eg(e, t) {
                let [r, n] = el(e, t);
                return {
                    schema: "string",
                    async: !1,
                    _parse: (e, t) => "string" != typeof e ? ec(t, "type", "string", r || "Invalid type", e) : es(e, n, t, "string")
                }
            }
            var eC = ["__proto__", "prototype", "constructor"];

            function em(e, t, r, n) {
                let [i, o, a] = function(e, t, r) {
                    if ("object" == typeof e && !Array.isArray(e)) {
                        let [n, i] = el(t, r);
                        return [e, n, i]
                    }
                    let [n, i] = el(e, t);
                    return [void 0, n, i]
                }(t, r, n);
                return {
                    schema: "tuple",
                    tuple: {
                        items: e,
                        rest: i
                    },
                    async: !1,
                    _parse(t, r) {
                        if (!Array.isArray(t) || !i && e.length !== t.length || i && e.length > t.length) return ec(r, "type", "tuple", o || "Invalid type", t);
                        let n, u = [];
                        for (let i = 0; i < e.length; i++) {
                            let o = t[i],
                                a = e[i]._parse(o, r);
                            if (a.issues) {
                                let e = {
                                    schema: "tuple",
                                    input: t,
                                    key: i,
                                    value: o
                                };
                                for (let t of a.issues) t.path ? t.path.unshift(e) : t.path = [e], null == n || n.push(t);
                                if (n || (n = a.issues), null != r && r.abortEarly) break
                            } else u[i] = a.output
                        }
                        if (i)
                            for (let o = e.length; o < t.length; o++) {
                                let e = t[o],
                                    a = i._parse(e, r);
                                if (a.issues) {
                                    let i = {
                                        schema: "tuple",
                                        input: t,
                                        key: o,
                                        value: e
                                    };
                                    for (let e of a.issues) e.path ? e.path.unshift(i) : e.path = [i], null == n || n.push(e);
                                    if (n || (n = a.issues), null != r && r.abortEarly) break
                                } else u[o] = a.output
                            }
                        return n ? {
                            issues: n
                        } : es(u, a, r, "tuple")
                    }
                }
            }

            function ey(e, t) {
                return {
                    schema: "union",
                    union: e,
                    async: !1,
                    _parse(r, n) {
                        let i, o;
                        for (let t of e) {
                            let e = t._parse(r, n);
                            if (e.issues) {
                                if (i)
                                    for (let t of e.issues) i.push(t);
                                else i = e.issues
                            } else {
                                o = [e.output];
                                break
                            }
                        }
                        return o ? {
                            output: o[0]
                        } : ec(n, "type", "union", t || "Invalid type", r, i)
                    }
                }
            }

            function eE(e, t, r) {
                let [n, i] = el(t, r);
                return ev(e.reduce((e, t) => ({
                    ...e,
                    ...t.object
                }), {}), n, i)
            }

            function eB(e, t) {
                return r => r > e ? {
                    issue: {
                        validation: "max_value",
                        message: t || "Invalid value",
                        input: r
                    }
                } : {
                    output: r
                }
            }

            function eb(e, t) {
                return r => r < e ? {
                    issue: {
                        validation: "min_value",
                        message: t || "Invalid value",
                        input: r
                    }
                } : {
                    output: r
                }
            }
            var eA = Object.create,
                ew = Object.defineProperty,
                eF = Object.getOwnPropertyDescriptor,
                e_ = Object.getOwnPropertyNames,
                eO = Object.getPrototypeOf,
                ex = Object.prototype.hasOwnProperty,
                ek = (e, t, r) => t in e ? ew(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                eP = (e, t) => function() {
                    return t || (0, e[e_(e)[0]])((t = {
                        exports: {}
                    }).exports, t), t.exports
                },
                eS = (e, t, r, n) => {
                    if (t && "object" == typeof t || "function" == typeof t)
                        for (let i of e_(t)) ex.call(e, i) || i === r || ew(e, i, {
                            get: () => t[i],
                            enumerable: !(n = eF(t, i)) || n.enumerable
                        });
                    return e
                },
                eT = (e, t, r) => (ek(e, "symbol" != typeof t ? t + "" : t, r), r),
                ej = eP({
                    "../../node_modules/.pnpm/@rgba-image+copy@0.1.3/node_modules/@rgba-image/copy/dist/index.js"(e) {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.copy = void 0;
                        e.copy = function(e, t) {
                            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : e.width - r,
                                o = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e.height - n,
                                a = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
                                u = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0;
                            if (r |= 0, n |= 0, o |= 0, a |= 0, u |= 0, (i |= 0) <= 0 || o <= 0) return;
                            let s = new Uint32Array(e.data.buffer),
                                l = new Uint32Array(t.data.buffer);
                            for (let c = 0; c < o; c++) {
                                let o = n + c;
                                if (o < 0 || o >= e.height) continue;
                                let d = u + c;
                                if (!(d < 0 || d >= t.height))
                                    for (let n = 0; n < i; n++) {
                                        let i = r + n;
                                        if (i < 0 || i >= e.width) continue;
                                        let u = a + n;
                                        if (u < 0 || u >= t.width) continue;
                                        let c = o * e.width + i;
                                        l[d * t.width + u] = s[c]
                                    }
                            }
                        }
                    }
                }),
                eM = eP({
                    "../../node_modules/.pnpm/@rgba-image+create-image@0.1.1/node_modules/@rgba-image/create-image/dist/index.js"(e) {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.CreateImageFactory = function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [0, 0, 0, 0],
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4;
                            if (isNaN(t = Math.floor(t)) || t < 1) throw TypeError("channels should be a positive non-zero number");
                            if (!("length" in e) || e.length < t) throw TypeError("fill should be iterable with at least ".concat(t, " members"));
                            let r = (e = new Uint8ClampedArray(e).slice(0, t)).every(e => 0 === e);
                            return (n, i, o) => {
                                if (void 0 === n || void 0 === i) throw TypeError("Not enough arguments");
                                if (n = Math.floor(n), i = Math.floor(i), isNaN(n) || n < 1 || isNaN(i) || i < 1) throw TypeError("Index or size is negative or greater than the allowed amount");
                                let a = n * i * t;
                                if (void 0 === o && (o = new Uint8ClampedArray(a)), o instanceof Uint8ClampedArray) {
                                    if (o.length !== a) throw TypeError("Index or size is negative or greater than the allowed amount");
                                    if (!r)
                                        for (let r = 0; r < i; r++)
                                            for (let i = 0; i < n; i++) {
                                                let a = (r * n + i) * t;
                                                for (let r = 0; r < t; r++) o[a + r] = e[r]
                                            }
                                    return {
                                        get width() {
                                            return n
                                        },
                                        get height() {
                                            return i
                                        },
                                        get data() {
                                            return o
                                        }
                                    }
                                }
                                throw TypeError("Expected data to be Uint8ClampedArray or undefined")
                            }
                        }, e.createImage = e.CreateImageFactory()
                    }
                }),
                eR = eP({
                    "../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/filters.js"(e) {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.filters = void 0;
                        var t = (e, t) => {
                                if (e <= -t || e >= t || 0 == e) return 0;
                                let r = e * Math.PI;
                                return Math.sin(r) / r * Math.sin(r / t) / (r / t)
                            },
                            r = e => Math.round(16383 * e);
                        e.filters = (e, n, i, o, a) => {
                            let u = a ? 2 : 3,
                                s = 1 / i,
                                l = Math.min(1, i),
                                c = u / l,
                                d = new Int16Array((Math.floor((c + 1) * 2) + 2) * n),
                                f = 0;
                            for (let i = 0; i < n; i++) {
                                let a = (i + .5) * s + o,
                                    h = Math.max(0, Math.floor(a - c)),
                                    p = Math.min(e - 1, Math.ceil(a + c)),
                                    v = p - h + 1,
                                    D = new Float32Array(v),
                                    g = new Int16Array(v),
                                    C = 0,
                                    m = 0;
                                for (let e = h; e <= p; e++) {
                                    let r = t((e + .5 - a) * l, u);
                                    C += r, D[m] = r, m++
                                }
                                let y = 0;
                                for (let e = 0; e < D.length; e++) {
                                    let t = D[e] / C;
                                    y += t, g[e] = r(t)
                                }
                                g[n >> 1] += r(1 - y);
                                let E = 0;
                                for (; E < g.length && 0 === g[E];) E++;
                                let B = g.length - 1;
                                for (; B > 0 && 0 === g[B];) B--;
                                let b = h + E,
                                    A = B - E + 1;
                                d[f++] = b, d[f++] = A, d.set(g.subarray(E, B + 1), f), f += A
                            }
                            return d
                        }
                    }
                }),
                eI = eP({
                    "../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/convolve.js"(e) {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.convolve = void 0;
                        e.convolve = (e, t, r, n, i, o) => {
                            let a = 0,
                                u = 0;
                            for (let s = 0; s < n; s++) {
                                let l = 0;
                                for (let r = 0; r < i; r++) {
                                    let r = a + 4 * o[l++] | 0,
                                        i = 0,
                                        s = 0,
                                        c = 0,
                                        d = 0;
                                    for (let t = o[l++]; t > 0; t--) {
                                        let t = o[l++];
                                        i = i + t * e[r] | 0, s = s + t * e[r + 1] | 0, c = c + t * e[r + 2] | 0, d = d + t * e[r + 3] | 0, r = r + 4 | 0
                                    }
                                    t[u] = i + 8192 >> 14, t[u + 1] = s + 8192 >> 14, t[u + 2] = c + 8192 >> 14, t[u + 3] = d + 8192 >> 14, u = u + 4 * n | 0
                                }
                                u = (s + 1) * 4 | 0, a = (s + 1) * r * 4 | 0
                            }
                        }
                    }
                }),
                eL = eP({
                    "../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/index.js"(e) {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        }), e.lanczos2 = e.lanczos = void 0;
                        var t = ej(),
                            r = eM(),
                            n = eR(),
                            i = eI(),
                            o = function(e, t) {
                                let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                    o = t.width / e.width,
                                    a = t.height / e.height,
                                    u = n.filters(e.width, t.width, o, 0, r),
                                    s = n.filters(e.height, t.height, a, 0, r),
                                    l = new Uint8ClampedArray(t.width * e.height * 4);
                                i.convolve(e.data, l, e.width, e.height, t.width, u), i.convolve(l, t.data, e.height, t.width, t.height, s)
                            };
                        e.lanczos = function(e, n) {
                            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : e.width - i,
                                s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e.height - a,
                                l = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
                                c = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
                                d = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : n.width - l,
                                f = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : n.height - c;
                            if (i |= 0, a |= 0, s |= 0, l |= 0, c |= 0, d |= 0, f |= 0, (u |= 0) <= 0 || s <= 0 || d <= 0 || f <= 0) return;
                            if (0 === i && 0 === a && u === e.width && s === e.height && 0 === l && 0 === c && d === n.width && f === n.height) {
                                o(e, n);
                                return
                            }
                            let h = r.createImage(u, s),
                                p = r.createImage(d, f);
                            t.copy(e, h, i, a), o(h, p), t.copy(p, n, 0, 0, p.width, p.height, l, c)
                        };
                        e.lanczos2 = function(e, n) {
                            let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                                a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                                u = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : e.width - i,
                                s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : e.height - a,
                                l = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : 0,
                                c = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : 0,
                                d = arguments.length > 8 && void 0 !== arguments[8] ? arguments[8] : n.width - l,
                                f = arguments.length > 9 && void 0 !== arguments[9] ? arguments[9] : n.height - c;
                            if (i |= 0, a |= 0, s |= 0, l |= 0, c |= 0, d |= 0, f |= 0, (u |= 0) <= 0 || s <= 0 || d <= 0 || f <= 0) return;
                            if (0 === i && 0 === a && u === e.width && s === e.height && 0 === l && 0 === c && d === n.width && f === n.height) {
                                o(e, n, !0);
                                return
                            }
                            let h = r.createImage(u, s),
                                p = r.createImage(d, f);
                            t.copy(e, h, i, a), o(h, p, !0), t.copy(p, n, 0, 0, p.width, p.height, l, c)
                        }
                    }
                });
            var eN = (n = eN || {}, n.Bounce = "bounce", n.Normal = "normal", n),
                ez = {
                    schema: "native_enum",
                    nativeEnum: i = eN,
                    async: !1,
                    _parse: (e, t) => Object.values(i).includes(e) ? {
                        output: e
                    } : ec(t, "type", "native_enum", "Invalid type", e)
                },
                eW = ev({
                    autoplay: eD(ef()),
                    defaultTheme: eD(eg()),
                    direction: eD(ey([eh(1), eh(-1)])),
                    hover: eD(ef()),
                    id: eg(),
                    intermission: eD(ep()),
                    loop: eD(ey([ef(), ep()])),
                    playMode: eD(ez),
                    speed: eD(ep()),
                    themeColor: eD(eg())
                }),
                eq = ev({
                    animations: ed(eg()),
                    id: eg()
                }),
                eV = ev({
                    activeAnimationId: eD(eg()),
                    animations: ed(eW),
                    author: eD(eg()),
                    custom: eD(function(e, t, r, n) {
                        let [i, o, a, u] = function(e, t, r, n) {
                            if ("object" == typeof t && !Array.isArray(t)) {
                                let [i, o] = el(r, n);
                                return [e, t, i, o]
                            }
                            let [i, o] = el(t, r);
                            return [eg(), e, i, o]
                        }(e, t, void 0, void 0);
                        return {
                            schema: "record",
                            record: {
                                key: i,
                                value: o
                            },
                            async: !1,
                            _parse(e, t) {
                                if (!e || "object" != typeof e) return ec(t, "type", "record", a || "Invalid type", e);
                                let r, n = {};
                                for (let [a, u] of Object.entries(e))
                                    if (!eC.includes(a)) {
                                        let s, l = i._parse(a, {
                                            origin: "key",
                                            abortEarly: null == t ? void 0 : t.abortEarly,
                                            abortPipeEarly: null == t ? void 0 : t.abortPipeEarly
                                        });
                                        if (l.issues) {
                                            for (let t of (s = {
                                                    schema: "record",
                                                    input: e,
                                                    key: a,
                                                    value: u
                                                }, l.issues)) t.path = [s], null == r || r.push(t);
                                            if (r || (r = l.issues), null != t && t.abortEarly) break
                                        }
                                        let c = o._parse(u, t);
                                        if (c.issues) {
                                            for (let t of (s = s || {
                                                    schema: "record",
                                                    input: e,
                                                    key: a,
                                                    value: u
                                                }, c.issues)) t.path ? t.path.unshift(s) : t.path = [s], null == r || r.push(t);
                                            if (r || (r = c.issues), null != t && t.abortEarly) break
                                        }
                                        l.issues || c.issues || (n[l.output] = c.output)
                                    } return r ? {
                                    issues: r
                                } : es(n, u, t, "record")
                            }
                        }
                    }(eg(), function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        return {
                            schema: "any",
                            async: !1,
                            _parse: (t, r) => es(t, e, r, "any")
                        }
                    }())),
                    description: eD(eg()),
                    generator: eD(eg()),
                    keywords: eD(eg()),
                    revision: eD(ep()),
                    themes: eD(ed(eq)),
                    states: eD(ed(eg())),
                    version: eD(eg())
                }),
                eU = function(e, t, r, n) {
                    let [i, o] = el(void 0, void 0);
                    return ev(Object.entries(e.object).reduce((e, r) => {
                        let [n, i] = r;
                        return t.includes(n) ? e : {
                            ...e,
                            [n]: i
                        }
                    }, {}), i, o)
                }(eW, ["id"]),
                eH = ev({
                    state: eg()
                }),
                eJ = eE([eH, ev({
                    ms: ep()
                })]),
                eK = eE([eH, ev({
                    count: ep()
                })]),
                e$ = eE([eH, ev({
                    threshold: eD(ed(ep([eb(0), eB(1)])))
                })]),
                eX = ev({
                    onAfter: eD(eJ),
                    onClick: eD(eH),
                    onComplete: eD(eH),
                    onEnter: eD(eK),
                    onMouseEnter: eD(eH),
                    onMouseLeave: eD(eH),
                    onShow: eD(e$)
                }),
                eQ = eE([eU, ev({
                    playOnScroll: eD(em([ep([eb(0), eB(1)]), ep([eb(0), eB(1)])])),
                    segments: eD(ey([em([ep(), ep()]), eg()]))
                })]);
            eE([eX, ev({
                animationId: eD(eg()),
                playbackSettings: eQ
            })]);
            var eG = {
                    jpeg: "image/jpeg",
                    png: "image/png",
                    gif: "image/gif",
                    bmp: "image/bmp",
                    svg: "image/svg+xml",
                    webp: "image/webp",
                    mpeg: "audio/mpeg",
                    mp3: "audio/mp3"
                },
                eY = {
                    jpeg: [255, 216, 255],
                    png: [137, 80, 78, 71, 13, 10, 26, 10],
                    gif: [71, 73, 70],
                    bmp: [66, 77],
                    webp: [82, 73, 70, 70, 87, 69, 66, 80],
                    svg: [60, 63, 120],
                    mp3: [73, 68, 51, 3, 0, 0, 0, 0],
                    mpeg: [73, 68, 51, 3, 0, 0, 0, 0]
                },
                eZ = e => {
                    let t = null,
                        r = [];
                    if (!e) return null;
                    let n = e.substring(e.indexOf(",") + 1);
                    t = typeof window > "u" ? d.from(n, "base64").toString("binary") : atob(n);
                    let i = new Uint8Array(t.length);
                    for (let e = 0; e < t.length; e += 1) i[e] = t.charCodeAt(e);
                    for (let e in r = Array.from(i.subarray(0, 8)), eY) {
                        let t = eY[e];
                        if (t && r.every((e, r) => e === t[r])) return eG[e]
                    }
                    return null
                },
                e0 = class extends Error {
                    constructor(e, t) {
                        super(e), eT(this, "code"), this.name = "[dotlottie-js]", this.code = t
                    }
                };

            function e1(e) {
                let t;
                if (typeof window > "u") t = d.from(e).toString("base64");
                else {
                    let r = Array.prototype.map.call(e, e => String.fromCharCode(e)).join("");
                    t = window.btoa(r)
                }
                return "data:".concat(eZ(t), ";base64,").concat(t)
            }

            function e2(e) {
                return "w" in e && "h" in e && !("xt" in e) && "p" in e
            }

            function e3(e) {
                return !("h" in e) && !("w" in e) && "p" in e && "e" in e && "u" in e && "id" in e
            }
            async function e7(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => !0;
                if (!(e instanceof Uint8Array)) throw new e0("DotLottie not found", "INVALID_DOTLOTTIE");
                return await new Promise((r, n) => {
                    ! function(e, t, r) {
                        r || (r = t, t = {}), "function" != typeof r && L(7);
                        var n = [],
                            i = function() {
                                for (var e = 0; e < n.length; ++e) n[e]()
                            },
                            o = {},
                            a = function(e, t) {
                                ea(function() {
                                    r(e, t)
                                })
                            };
                        ea(function() {
                            a = r
                        });
                        for (var u = e.length - 22; 101010256 != G(e, u); --u)
                            if (!u || e.length - u > 65558) return a(L(13, 0, 1), null), i;
                        var s = Q(e, u + 8);
                        if (s) {
                            var l = s,
                                c = G(e, u + 16),
                                d = 4294967295 == c || 65535 == l;
                            if (d) {
                                var f = G(e, u - 12);
                                (d = 101075792 == G(e, f)) && (l = s = G(e, f + 32), c = G(e, f + 48))
                            }
                            for (var h = t && t.filter, v = 0; v < l; ++v) ! function(t) {
                                var r = ei(e, c, d),
                                    u = r[0],
                                    l = r[1],
                                    f = r[2],
                                    v = r[3],
                                    D = r[4],
                                    g = r[5],
                                    C = (y = e, (E = g) + 30 + Q(y, E + 26) + Q(y, E + 28));
                                c = D;
                                var m = function(e, t) {
                                    e ? (i(), a(e, null)) : (t && (o[v] = t), --s || a(null, o))
                                };
                                if (!h || h({
                                        name: v,
                                        size: l,
                                        originalSize: f,
                                        compression: u
                                    })) {
                                    if (u) {
                                        if (8 == u) {
                                            var y, E, B, b, A, w = e.subarray(C, C + l);
                                            if (l < 32e4) try {
                                                m(null, Z(w, {
                                                    out: new p(f)
                                                }))
                                            } catch (e) {
                                                m(e, null)
                                            } else {
                                                ;
                                                n.push((B = w, b = {
                                                    size: f
                                                }, (A = m) || (A = b, b = {}), "function" != typeof A && L(7), X(B, b, [J], function(e) {
                                                    return K(Z(e.data[0], $(e.data[1])))
                                                }, 1, A)))
                                            }
                                        } else m(L(14, "unknown compression type " + u, 1), null)
                                    } else m(null, R(e, C, C + l))
                                } else m(null, null)
                            }(0)
                        } else a(null, {});
                    }(e, {
                        filter: t
                    }, (e, t) => {
                        e && n(e), r(t)
                    })
                })
            }
            async function e4(e, t, r) {
                if (!(e instanceof Uint8Array)) throw new e0("DotLottie not found", "INVALID_DOTLOTTIE");
                return (await e7(e, e => e.name === t && (!r || r(e))))[t]
            }
            async function e5(e) {
                let t = "manifest.json",
                    r = (await e7(e, e => e.name === t))[t];
                if (!(typeof r > "u")) return JSON.parse(en(r, !1))
            }
            async function e8(e) {
                var t, r, n, i;
                let o;
                if (!(e instanceof Uint8Array)) return {
                    success: !1,
                    error: "DotLottie not found"
                };
                let a = await e5(e);
                if (typeof a > "u") return {
                    success: !1,
                    error: "Invalid .lottie file, manifest.json is missing"
                };
                let u = (t = eV, r = a, (o = t._parse(r, void 0)).issues ? {
                    success: !1,
                    error: new eu(o.issues),
                    issues: o.issues
                } : {
                    success: !0,
                    data: o.output,
                    output: o.output
                });
                return u.success ? {
                    success: !0
                } : {
                    success: !1,
                    error: "Invalid .lottie file, manifest.json structure is invalid, ".concat(JSON.stringify((Array.isArray(i = u.error) ? i : i.issues).reduce((e, t) => {
                        if (t.path) {
                            let r = t.path.map(e => {
                                let {
                                    key: t
                                } = e;
                                return t
                            }).join(".");
                            e.nested[r] = [...e.nested[r] || [], t.message]
                        } else e.root = [...e.root || [], t.message];
                        return e
                    }, {
                        nested: {}
                    }).nested, null, 2))
                }
            }
            async function e9(e) {
                let t = new Uint8Array(e),
                    r = await e8(t);
                if (r.error) throw new e0(r.error, "INVALID_DOTLOTTIE");
                return t
            }
            async function e6(e, t) {
                let r = await e7(e, e => {
                        let r = e.name.replace("audio/", "");
                        return e.name.startsWith("audio/") && (!t || t({
                            ...e,
                            name: r
                        }))
                    }),
                    n = {};
                for (let e in r) {
                    let t = r[e];
                    t instanceof Uint8Array && (n[e.replace("audio/", "")] = e1(t))
                }
                return n
            }
            async function te(e, t) {
                var r;
                let n = new Map;
                for (let [e, i] of Object.entries(t))
                    for (let t of i.assets || [])
                        if (e3(t)) {
                            let i = t.p;
                            n.has(i) || n.set(i, new Set), null == (r = n.get(i)) || r.add(e)
                        } let i = await e6(e, e => n.has(e.name));
                for (let [e, r] of n) {
                    let n = i[e];
                    if (n)
                        for (let i of r) {
                            let r = t[i];
                            for (let t of (null == r ? void 0 : r.assets) || []) e3(t) && t.p === e && (t.p = n, t.u = "", t.e = 1)
                        }
                }
            }
            async function tt(e, t) {
                let r = await e7(e, e => {
                        let r = e.name.replace("images/", "");
                        return e.name.startsWith("images/") && (!t || t({
                            ...e,
                            name: r
                        }))
                    }),
                    n = {};
                for (let e in r) {
                    let t = r[e];
                    t instanceof Uint8Array && (n[e.replace("images/", "")] = e1(t))
                }
                return n
            }
            async function tr(e, t) {
                var r;
                let n = new Map;
                for (let [e, i] of Object.entries(t))
                    for (let t of i.assets || [])
                        if (e2(t)) {
                            let i = t.p;
                            n.has(i) || n.set(i, new Set), null == (r = n.get(i)) || r.add(e)
                        } let i = await tt(e, e => n.has(e.name));
                for (let [e, r] of n) {
                    let n = i[e];
                    if (n)
                        for (let i of r) {
                            let r = t[i];
                            for (let t of (null == r ? void 0 : r.assets) || []) e2(t) && t.p === e && (t.p = n, t.u = "", t.e = 1)
                        }
                }
            }
            async function tn(e, t) {
                let {
                    inlineAssets: r
                } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, n = arguments.length > 3 ? arguments[3] : void 0, i = await e4(e, "animations/".concat(t, ".json"), n);
                if (typeof i > "u") return;
                let o = JSON.parse(en(i, !1));
                if (!r) return o;
                let a = {
                    [t]: o
                };
                return await tr(e, a), await te(e, a), o
            }
            async function ti(e, t, r) {
                let n = await e4(e, "themes/".concat(t, ".lss"), r);
                if (!(typeof n > "u")) return en(n, !1)
            }
            async function to(e, t) {
                let r = {},
                    n = await e7(e, e => {
                        let r = e.name.replace("states/", "").replace(".json", "");
                        return e.name.startsWith("states/") && (!t || t({
                            ...e,
                            name: r
                        }))
                    });
                for (let e in n) {
                    let t = n[e];
                    t instanceof Uint8Array && (r[e.replace("states/", "").replace(".json", "")] = en(t, !1))
                }
                return r
            }
            async function ta(e, t, r) {
                let n = await e4(e, "states/".concat(t, ".json"), r);
                return typeof n > "u" ? void 0 : JSON.parse(en(n, !1))
            }

            function tu(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "dotLottie-common";
                return Error("[".concat(t, "]: ").concat(e))
            }

            function ts(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "dotLottie-common";
                for (var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) n[i - 2] = arguments[i];
                console.error("[".concat(t, "]:"), e, ...n)
            }

            function tl(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "dotLottie-common";
                for (var r = arguments.length, n = Array(r > 2 ? r - 2 : 0), i = 2; i < r; i++) n[i - 2] = arguments[i];
                console.warn("[".concat(t, "]:"), e, ...n)
            }

            function tc() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = e.trim(),
                    r = t.lastIndexOf("/"),
                    n = t.substring(r + 1),
                    i = n.indexOf(".");
                return -1 !== i ? n.substring(0, i) : n
            }

            function td(e) {
                return ["v", "ip", "op", "layers", "fr", "w", "h"].every(t => Object.prototype.hasOwnProperty.call(e, t))
            }

            function tf(e) {
                let t = e.assets;
                return !!t && t.some(e => e3(e))
            }

            function th(e) {
                try {
                    let t = JSON.parse(e);
                    return td(t)
                } catch {
                    return !1
                }
            }

            function tp(e, t) {
                let r = Object.keys(e).find(r => e[r] === t);
                if (void 0 === r) throw Error("Value not found in the object.");
                return r
            }
            a = eL(), s = null != a ? eA(eO(a)) : {}, eS(a && a.__esModule ? s : ew(s, "default", {
                value: a,
                enumerable: !0
            }), a)
        },
        454872: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                a: function() {
                    return h
                },
                b: function() {
                    return p
                },
                d: function() {
                    return D
                },
                e: function() {
                    return g
                },
                f: function() {
                    return C
                }
            });
            var n, i, o, a = r("193809");
            r("222007"), r("424973"), r("70102"), r("511434"), r("313619"), r("654714"), r("287168"), r("956660");
            var u = r("968839"),
                s = r("790703"),
                l = r("86441"),
                c = r("601801"),
                d = r("846033"),
                f = {
                    dependencies: {
                        "@dotlottie/dotlottie-js": "0.6.0",
                        "@lottiefiles/relottie": "1.0.0",
                        "@lottiefiles/relottie-style": "0.4.1",
                        "@preact/signals-core": "^1.2.3",
                        howler: "^2.2.3",
                        "lottie-web": "^5.12.2",
                        xstate: "^4.38.1"
                    }
                };
            var h = (n = h || {}, n.Complete = "complete", n.DataFail = "data_fail", n.DataReady = "data_ready", n.Error = "error", n.Frame = "frame", n.Freeze = "freeze", n.LoopComplete = "loopComplete", n.Pause = "pause", n.Play = "play", n.Ready = "ready", n.Stop = "stop", n.VisibilityChange = "visibilityChange", n),
                p = (i = p || {}, i.Completed = "completed", i.Error = "error", i.Fetching = "fetching", i.Frozen = "frozen", i.Initial = "initial", i.Loading = "loading", i.Paused = "paused", i.Playing = "playing", i.Ready = "ready", i.Stopped = "stopped", i),
                v = (o = v || {}, o.Bounce = "bounce", o.Normal = "normal", o),
                D = {
                    autoplay: !1,
                    direction: 1,
                    hover: !1,
                    intermission: 0,
                    loop: !1,
                    playMode: "normal",
                    speed: 1,
                    defaultTheme: ""
                },
                g = {
                    activeStateId: "",
                    autoplay: !1,
                    currentState: "initial",
                    frame: 0,
                    seeker: 0,
                    direction: 1,
                    hover: !1,
                    loop: !1,
                    playMode: "normal",
                    speed: 1,
                    background: "transparent",
                    intermission: 0,
                    currentAnimationId: void 0,
                    visibilityPercentage: 0
                },
                C = class {
                    _listenToHover() {
                        var e, t, r, n;
                        let i = () => {
                                this._hover && "playing" !== this.currentState && this.play()
                            },
                            o = () => {
                                this._hover && "playing" === this.currentState && this.stop()
                            };
                        null == (e = this._container) || e.removeEventListener("mouseenter", i), null == (t = this._container) || t.removeEventListener("mouseleave", o), null == (r = this._container) || r.addEventListener("mouseleave", o), null == (n = this._container) || n.addEventListener("mouseenter", i)
                    }
                    _onVisibilityChange() {
                        !this._lottie || typeof document > "u" || (document.hidden && "playing" === this.currentState ? this.freeze() : "frozen" === this.currentState && this.unfreeze())
                    }
                    _listenToVisibilityChange() {
                        "u" > typeof document && "u" > typeof document.hidden && document.addEventListener("visibilitychange", () => this._onVisibilityChange())
                    }
                    _getOption(e) {
                        var t;
                        if ("u" > typeof this._userPlaybackOptions[e]) return this._userPlaybackOptions[e];
                        let r = null == (t = this._dotLottieLoader.manifest) ? void 0 : t.animations.find(e => e.id === this._currentAnimationId);
                        return r && "u" > typeof r[e] ? r[e] : D[e]
                    }
                    _getPlaybackOptions() {
                        let e = {};
                        for (let t in D) "u" > typeof D[t] && (e[t] = this._getOption(t));
                        return e
                    }
                    _setPlayerState(e) {
                        var t, r, n;
                        let i = e(this._getPlaybackOptions());
                        try {
                            d.a._parse(i)
                        } catch {
                            (0, d.j)("Invalid PlaybackOptions, ".concat(JSON.stringify(i, null, 2)));
                            return
                        }
                        "u" > typeof i.defaultTheme && (this._defaultTheme = i.defaultTheme), "u" > typeof i.playMode && (this._mode = i.playMode), "u" > typeof i.intermission && (this._intermission = i.intermission), "u" > typeof i.hover && (this._hover = i.hover), "u" > typeof i.loop && (this.clearCountTimer(), this._loop = i.loop, this._counter = 0, null == (t = this._lottie) || t.setLoop("number" == typeof i.loop || i.loop)), "u" > typeof i.speed && (null == (r = this._lottie) || r.setSpeed(i.speed)), "u" > typeof i.autoplay && this._lottie && (this._lottie.autoplay = i.autoplay), "u" > typeof i.direction && (null == (n = this._lottie) || n.setDirection(i.direction))
                    }
                    _getOptionsFromAnimation(e) {
                        let {
                            id: t,
                            ...r
                        } = e;
                        return {
                            ...D,
                            ...r
                        }
                    }
                    _updateTestData() {
                        this._testId && this._lottie && (window.dotLottiePlayer || (window.dotLottiePlayer = {
                            [this._testId]: {}
                        }), window.dotLottiePlayer[this._testId] = {
                            direction: this._lottie.playDirection,
                            currentState: this._currentState,
                            loop: this.loop,
                            mode: this._mode,
                            speed: this._lottie.playSpeed
                        })
                    }
                    setContainer(e) {
                        e !== this._container && (this._container = e, this.setBackground(this._background), this._listenToHover())
                    }
                    get currentState() {
                        return this._currentState
                    }
                    clearCountTimer() {
                        this._counterInterval && clearInterval(this._counterInterval)
                    }
                    setCurrentState(e) {
                        this._currentState = e, this._notify(), this._updateTestData()
                    }
                    static isPathJSON(e) {
                        var t;
                        return (null == (t = e.split(".").pop()) ? void 0 : t.toLowerCase()) === "json"
                    }
                    get src() {
                        return this._src
                    }
                    updateSrc(e) {
                        this._src !== e && ("string" == typeof e ? this._src = e : this._src = Object.assign({}, e), this._activeAnimationId = void 0, this._currentAnimationId = void 0, this.load())
                    }
                    get intermission() {
                        return this._intermission
                    }
                    get hover() {
                        return this._hover
                    }
                    setHover(e) {
                        "boolean" == typeof e && (this._hover = e, this._userPlaybackOptions.hover = e, this._notify())
                    }
                    setIntermission(e) {
                        this._intermission = e, this._userPlaybackOptions.intermission = e, this._notify()
                    }
                    get mode() {
                        return this._mode
                    }
                    get animations() {
                        return this._dotLottieLoader.animationsMap
                    }
                    get themes() {
                        return this._dotLottieLoader.themeMap
                    }
                    setMode(e) {
                        "string" == typeof e && (this._mode = e, this._userPlaybackOptions.playMode = e, this._setPlayerState(() => ({
                            playMode: e
                        })), this._notify(), this._updateTestData())
                    }
                    get container() {
                        if (this._container) return this._container
                    }
                    goToAndPlay(e, t, r) {
                        if (!this._lottie || ["loading"].includes(this._currentState)) {
                            (0, d.j)("goToAndPlay() Can't use whilst loading.");
                            return
                        }
                        this._lottie.goToAndPlay(e, t, r), this.setCurrentState("playing")
                    }
                    goToAndStop(e, t, r) {
                        if (!this._lottie || ["loading"].includes(this._currentState)) {
                            (0, d.j)("goToAndStop() Can't use whilst loading.");
                            return
                        }
                        this._lottie.goToAndStop(e, t, r), this.setCurrentState("stopped")
                    }
                    seek(e) {
                        if (!this._lottie || ["loading"].includes(this._currentState)) {
                            (0, d.j)("seek() Can't use whilst loading.");
                            return
                        }
                        let t = e;
                        "number" == typeof t && (t = Math.round(t));
                        let r = /^(\d+)(%?)$/u.exec(t.toString());
                        if (!r) return;
                        let n = "%" === r[2] ? this.totalFrames * Number(r[1]) / 100 : r[1];
                        void 0 !== n && (this._lottie.goToAndPlay(n, !0), "playing" === this.currentState ? this.play() : "frozen" === this.currentState ? this.freeze() : this.pause())
                    }
                    _areNumbersInRange(e, t) {
                        return e >= 0 && e <= 1 && t >= 0 && t <= 1
                    }
                    _updatePosition(e, t, r) {
                        let [n, i] = null != e ? e : [0, this.totalFrames - 1], [o, a] = null != t ? t : [0, 1];
                        if (!this._areNumbersInRange(o, a)) {
                            (0, d.i)("threshold values must be between 0 and 1");
                            return
                        }
                        if (this.container) {
                            let {
                                height: e,
                                top: t
                            } = this.container.getBoundingClientRect(), u = (window.innerHeight - t) / (window.innerHeight + e), s = n + Math.round((u - o) / (a - o) * (i - n));
                            r && r(u), this.goToAndStop(s, !0), (s >= i || u >= a) && this._handleAnimationComplete()
                        }
                        this._scrollTicking = !1
                    }
                    _requestTick(e, t, r) {
                        this._scrollTicking || (requestAnimationFrame(() => this._updatePosition(e, t, r)), this._scrollTicking = !0)
                    }
                    playOnScroll(e) {
                        this.stop(), this._scrollCallback && this.stopPlayOnScroll(), this._scrollCallback = () => this._requestTick(null == e ? void 0 : e.segments, null == e ? void 0 : e.threshold, null == e ? void 0 : e.positionCallback), window.addEventListener("scroll", this._scrollCallback)
                    }
                    stopPlayOnScroll() {
                        this._scrollCallback && (window.removeEventListener("scroll", this._scrollCallback), this._scrollCallback = void 0)
                    }
                    stopPlayOnShow() {
                        this._onShowIntersectionObserver && (this._onShowIntersectionObserver.disconnect(), this._onShowIntersectionObserver = void 0)
                    }
                    addIntersectionObserver(e) {
                        if (!this.container) throw (0, d.h)("Can't play on show, player container element not available.");
                        let t = {
                            root: null,
                            rootMargin: "0px",
                            threshold: null != e && e.threshold ? e.threshold : [0, 1]
                        };
                        this._onShowIntersectionObserver = new IntersectionObserver(t => {
                            t.forEach(t => {
                                var r, n;
                                this._visibilityPercentage = 100 * t.intersectionRatio, t.isIntersecting ? (null != e && e.callbackOnIntersect && e.callbackOnIntersect(this._visibilityPercentage), null == (r = this._container) || r.dispatchEvent(new Event("visibilityChange"))) : null != e && e.callbackOnIntersect && (e.callbackOnIntersect(0), null == (n = this._container) || n.dispatchEvent(new Event("visibilityChange")))
                            })
                        }, t), this._onShowIntersectionObserver.observe(this.container)
                    }
                    playOnShow(e) {
                        var t;
                        if (this.stop(), !this.container) throw (0, d.h)("Can't play on show, player container element not available.");
                        this._onShowIntersectionObserver && this.stopPlayOnShow(), this.addIntersectionObserver({
                            threshold: null != (t = null == e ? void 0 : e.threshold) ? t : [],
                            callbackOnIntersect: e => {
                                0 === e ? this.pause() : this.play()
                            }
                        })
                    }
                    _validatePlaybackOptions(e) {
                        if (!e) return {};
                        let t = {};
                        for (let [r, n] of Object.entries(e)) switch (r) {
                            case "autoplay":
                                "boolean" == typeof n && (t.autoplay = n);
                                break;
                            case "direction":
                                "number" == typeof n && [1, -1].includes(n) && (t.direction = n);
                                break;
                            case "loop":
                                ("boolean" == typeof n || "number" == typeof n) && (t.loop = n);
                                break;
                            case "playMode":
                                "string" == typeof n && ["normal", "bounce"].includes(n) && (t.playMode = n);
                                break;
                            case "speed":
                                "number" == typeof n && (t.speed = n);
                                break;
                            case "themeColor":
                                "string" == typeof n && (t.themeColor = n);
                                break;
                            case "hover":
                                "boolean" == typeof n && (t.hover = n);
                                break;
                            case "intermission":
                                "number" == typeof n && (t.intermission = n);
                                break;
                            case "defaultTheme":
                                "string" == typeof n && (t.defaultTheme = n)
                        }
                        return this._requireValidPlaybackOptions(t), t
                    }
                    _requireAnimationsInTheManifest() {
                        var e;
                        if (!(null != (e = this._dotLottieLoader.manifest) && e.animations.length)) throw (0, d.h)("No animations found in manifest.")
                    }
                    _requireAnimationsToBeLoaded() {
                        if (0 === this._dotLottieLoader.animationsMap.size) throw (0, d.h)("No animations have been loaded.")
                    }
                    async play(e, t) {
                        var r, n;
                        if (["initial", "loading"].includes(this._currentState)) {
                            (0, d.j)("Player unable to play whilst loading.");
                            return
                        }
                        if (this._requireAnimationsInTheManifest(), this._requireAnimationsToBeLoaded(), this._lottie && !e) {
                            -1 === this._lottie.playDirection && 0 === this._lottie.currentFrame ? this._lottie.goToAndPlay(this._lottie.totalFrames, !0) : this._lottie.play(), this.setCurrentState("playing");
                            return
                        }
                        if ("number" == typeof e) {
                            let n = null == (r = this._dotLottieLoader.manifest) ? void 0 : r.animations[e];
                            if (!n) throw (0, d.h)("animation not found.");
                            "function" == typeof t ? await this.render({
                                id: n.id,
                                ...t(this._getPlaybackOptions(), this._getOptionsFromAnimation(n))
                            }) : await this.render({
                                id: n.id
                            })
                        }
                        if ("string" == typeof e) {
                            let r = null == (n = this._dotLottieLoader.manifest) ? void 0 : n.animations.find(t => t.id === e);
                            if (!r) throw (0, d.h)("animation not found.");
                            "function" == typeof t ? await this.render({
                                id: r.id,
                                ...t(this._getPlaybackOptions(), this._getOptionsFromAnimation(r))
                            }) : await this.render({
                                id: r.id
                            })
                        }
                    }
                    playSegments(e, t) {
                        if (!this._lottie || ["loading"].includes(this._currentState)) {
                            (0, d.j)("playSegments() Can't use whilst loading.");
                            return
                        }
                        this._lottie.playSegments(e, t), this.setCurrentState("playing")
                    }
                    resetSegments(e) {
                        if (!this._lottie || ["loading"].includes(this._currentState)) {
                            (0, d.j)("resetSegments() Can't use whilst loading.");
                            return
                        }
                        this._lottie.resetSegments(e)
                    }
                    togglePlay() {
                        "playing" === this.currentState ? this.pause() : this.play()
                    }
                    _getAnimationByIdOrIndex(e) {
                        var t, r;
                        if (this._requireAnimationsInTheManifest(), this._requireAnimationsToBeLoaded(), "number" == typeof e) {
                            let r = null == (t = this._dotLottieLoader.manifest) ? void 0 : t.animations[e];
                            if (!r) throw (0, d.h)("animation not found.");
                            return r
                        }
                        if ("string" == typeof e) {
                            let t = null == (r = this._dotLottieLoader.manifest) ? void 0 : r.animations.find(t => t.id === e);
                            if (!t) throw (0, d.h)("animation not found.");
                            return t
                        }
                        throw (0, d.h)("first param must be a number or string")
                    }
                    get activeAnimationId() {
                        return this._getActiveAnimationId()
                    }
                    get currentAnimationId() {
                        return this._currentAnimationId
                    }
                    get activeStateId() {
                        return this._activeStateId
                    }
                    async _startInteractivity(e) {
                        if (!this._inInteractiveMode) {
                            (0, d.i)("Can't start interactivity. Not in interactive mode. Call enterInteractiveMode(stateId: string) to start.");
                            return
                        }
                        if (0 === this._dotLottieLoader.stateMachinesMap.size && await this._dotLottieLoader.getStateMachines(), 0 === this._dotLottieLoader.stateMachinesMap.size) throw (0, d.h)("No interactivity states are available.");
                        if ("undefined" === e) throw (0, d.h)("stateId is not specified.");
                        this._stateMachineManager || (this._stateMachineManager = await (0, s.a)(Array.from(this._dotLottieLoader.stateMachinesMap.values()), this)), this._stateMachineManager.start(e)
                    }
                    enterInteractiveMode(e) {
                        var t;
                        if (e) this._inInteractiveMode || (this._prevUserPlaybackOptions = {
                            ...this._userPlaybackOptions
                        }), this._inInteractiveMode && (null == (t = this._stateMachineManager) || t.stop()), this._activeStateId = e, this._inInteractiveMode = !0, this._startInteractivity(e);
                        else throw (0, d.h)("stateId must be a non-empty string.")
                    }
                    exitInteractiveMode() {
                        var e;
                        this._inInteractiveMode && (this._inInteractiveMode = !1, this._activeStateId = "", null == (e = this._stateMachineManager) || e.stop(), this._userPlaybackOptions = {}, this._userPlaybackOptions = {
                            ...this._prevUserPlaybackOptions
                        }, this._prevUserPlaybackOptions = {}, this.reset())
                    }
                    reset() {
                        var e;
                        let t = this._getActiveAnimationId(),
                            r = null == (e = this._dotLottieLoader.manifest) ? void 0 : e.animations.find(e => e.id === t);
                        if (this._inInteractiveMode && this.exitInteractiveMode(), !r) throw (0, d.h)("animation not found.");
                        this.play(t)
                    }
                    previous(e) {
                        if (!this._dotLottieLoader.manifest || !this._dotLottieLoader.manifest.animations.length) throw (0, d.h)("manifest not found.");
                        if (this._inInteractiveMode) {
                            (0, d.j)("previous() is not supported in interactive mode.");
                            return
                        }
                        let t = this._dotLottieLoader.manifest.animations.findIndex(e => e.id === this._currentAnimationId);
                        if (-1 === t) throw (0, d.h)("animation not found.");
                        let r = this._dotLottieLoader.manifest.animations[(t - 1 + this._dotLottieLoader.manifest.animations.length) % this._dotLottieLoader.manifest.animations.length];
                        if (!r || !r.id) throw (0, d.h)("animation not found.");
                        "function" == typeof e ? this.render({
                            id: r.id,
                            ...e(this._getPlaybackOptions(), this._getOptionsFromAnimation(r))
                        }) : this.render({
                            id: r.id
                        })
                    }
                    next(e) {
                        if (!this._dotLottieLoader.manifest || !this._dotLottieLoader.manifest.animations.length) throw (0, d.h)("manifest not found.");
                        if (this._inInteractiveMode) {
                            (0, d.j)("next() is not supported in interactive mode.");
                            return
                        }
                        let t = this._dotLottieLoader.manifest.animations.findIndex(e => e.id === this._currentAnimationId);
                        if (-1 === t) throw (0, d.h)("animation not found.");
                        let r = this._dotLottieLoader.manifest.animations[(t + 1) % this._dotLottieLoader.manifest.animations.length];
                        if (!r || !r.id) throw (0, d.h)("animation not found.");
                        "function" == typeof e ? this.render({
                            id: r.id,
                            ...e(this._getPlaybackOptions(), this._getOptionsFromAnimation(r))
                        }) : this.render({
                            id: r.id
                        })
                    }
                    getManifest() {
                        return this._dotLottieLoader.manifest
                    }
                    resize() {
                        if (!this._lottie || ["loading"].includes(this._currentState)) {
                            (0, d.j)("resize() Can't use whilst loading.");
                            return
                        }
                        this._lottie.resize()
                    }
                    stop() {
                        if (!this._lottie || ["loading"].includes(this._currentState)) {
                            (0, d.j)("stop() Can't use whilst loading.");
                            return
                        }
                        this.clearCountTimer(), this._counter = 0, this._setPlayerState(() => ({
                            direction: this._getOption("direction")
                        })), this._lottie.stop(), this.setCurrentState("stopped")
                    }
                    pause() {
                        if (!this._lottie || ["loading"].includes(this._currentState)) {
                            (0, d.j)("pause() Can't use whilst loading.");
                            return
                        }
                        this.clearCountTimer(), this._lottie.pause(), this.setCurrentState("paused")
                    }
                    freeze() {
                        if (!this._lottie || ["loading"].includes(this._currentState)) {
                            (0, d.j)("freeze() Can't use whilst loading.");
                            return
                        }
                        "frozen" !== this.currentState && (this._stateBeforeFreeze = this.currentState), this._lottie.pause(), this.setCurrentState("frozen")
                    }
                    unfreeze() {
                        if (!this._lottie || ["loading"].includes(this._currentState)) {
                            (0, d.j)("unfreeze() Can't use whilst loading.");
                            return
                        }
                        "playing" === this._stateBeforeFreeze ? this.play() : this.pause()
                    }
                    destroy() {
                        var e, t;
                        null != (e = this._container) && e.__lottie && (this._container.__lottie.destroy(), this._container.__lottie = null), this._audios.length && (this._audios.forEach(e => {
                            e.unload()
                        }), this._audios = []), this.clearCountTimer(), "u" > typeof document && document.removeEventListener("visibilitychange", () => this._onVisibilityChange()), this._counter = 0, null == (t = this._lottie) || t.destroy(), this._lottie = void 0
                    }
                    getAnimationInstance() {
                        return this._lottie
                    }
                    static getLottieWebVersion() {
                        return "".concat(f.dependencies["lottie-web"])
                    }
                    addEventListener(e, t) {
                        var r, n, i;
                        this._listeners.has(e) || this._listeners.set(e, new Set), null == (r = this._listeners.get(e)) || r.add(t);
                        try {
                            "complete" === e ? null == (n = this._container) || n.addEventListener(e, t) : null == (i = this._lottie) || i.addEventListener(e, t)
                        } catch (e) {
                            (0, d.i)("addEventListener ".concat(e))
                        }
                    }
                    getState() {
                        var e, t, r, n, i, o, a;
                        return {
                            autoplay: null != (t = null == (e = this._lottie) ? void 0 : e.autoplay) && t,
                            currentState: this._currentState,
                            frame: this._frame,
                            visibilityPercentage: this._visibilityPercentage,
                            seeker: this._seeker,
                            direction: null != (n = null == (r = this._lottie) ? void 0 : r.playDirection) ? n : 1,
                            hover: this._hover,
                            loop: this._loop || !1,
                            playMode: this._mode,
                            speed: null != (o = null == (i = this._lottie) ? void 0 : i.playSpeed) ? o : 1,
                            background: this._background,
                            intermission: this._intermission,
                            defaultTheme: this._defaultTheme,
                            currentAnimationId: this._currentAnimationId,
                            activeStateId: null != (a = this._activeStateId) ? a : ""
                        }
                    }
                    _notify() {
                        this.state.setState(this.getState())
                    }
                    get totalFrames() {
                        var e;
                        return (null == (e = this._lottie) ? void 0 : e.totalFrames) || 0
                    }
                    get direction() {
                        return this._lottie ? this._lottie.playDirection : 1
                    }
                    setDirection(e) {
                        this._requireValidDirection(e), this._setPlayerState(() => ({
                            direction: e
                        })), this._userPlaybackOptions.direction = e
                    }
                    get speed() {
                        var e;
                        return (null == (e = this._lottie) ? void 0 : e.playSpeed) || 1
                    }
                    setSpeed(e) {
                        this._requireValidSpeed(e), this._setPlayerState(() => ({
                            speed: e
                        })), this._userPlaybackOptions.speed = e
                    }
                    get autoplay() {
                        var e, t;
                        return null != (t = null == (e = this._lottie) ? void 0 : e.autoplay) && t
                    }
                    setAutoplay(e) {
                        if (this._requireValidAutoplay(e), !this._lottie || ["loading"].includes(this._currentState)) {
                            (0, d.j)("setAutoplay() Can't use whilst loading.");
                            return
                        }
                        this._setPlayerState(() => ({
                            autoplay: e
                        })), this._userPlaybackOptions.autoplay = e
                    }
                    toggleAutoplay() {
                        if (!this._lottie || ["loading"].includes(this._currentState)) {
                            (0, d.j)("toggleAutoplay() Can't use whilst loading.");
                            return
                        }
                        this.setAutoplay(!this._lottie.autoplay)
                    }
                    get defaultTheme() {
                        return this._defaultTheme
                    }
                    setDefaultTheme(e) {
                        this._setPlayerState(() => ({
                            defaultTheme: e
                        })), this._userPlaybackOptions.defaultTheme = e, this._animation && this.render()
                    }
                    get loop() {
                        return this._loop
                    }
                    setLoop(e) {
                        this._requireValidLoop(e), this._setPlayerState(() => ({
                            loop: e
                        })), this._userPlaybackOptions.loop = e
                    }
                    toggleLoop() {
                        if (!this._lottie || ["loading"].includes(this._currentState)) {
                            (0, d.j)("toggleLoop() Can't use whilst loading.");
                            return
                        }
                        this.setLoop(!this._loop)
                    }
                    get background() {
                        return this._background
                    }
                    setBackground(e) {
                        this._requireValidBackground(e), this._background = e, this._container && (this._container.style.backgroundColor = e)
                    }
                    get _frame() {
                        return this._lottie ? "completed" === this.currentState ? -1 === this.direction ? 0 : this._lottie.totalFrames : this._lottie.currentFrame : 0
                    }
                    get _seeker() {
                        return this._lottie ? this._frame / this._lottie.totalFrames * 100 : 0
                    }
                    async revertToManifestValues(e) {
                        var t;
                        let r;
                        r = Array.isArray(e) && 0 !== e.length ? e : ["autoplay", "defaultTheme", "direction", "hover", "intermission", "loop", "playMode", "speed", "activeAnimationId"];
                        let n = !1;
                        if (r.includes("activeAnimationId")) {
                            let e = null == (t = this._dotLottieLoader.manifest) ? void 0 : t.activeAnimationId,
                                r = this._getAnimationByIdOrIndex(e || 0);
                            this._activeAnimationId = e, await this._setCurrentAnimation(r.id), n = !0
                        }
                        r.forEach(e => {
                            switch (e) {
                                case "autoplay":
                                    delete this._userPlaybackOptions.autoplay, this.setAutoplay(this._getOption("autoplay"));
                                    break;
                                case "defaultTheme":
                                    delete this._userPlaybackOptions.defaultTheme, this.setDefaultTheme(this._getOption("defaultTheme"));
                                    break;
                                case "direction":
                                    delete this._userPlaybackOptions.direction, this.setDirection(this._getOption("direction"));
                                    break;
                                case "hover":
                                    delete this._userPlaybackOptions.hover, this.setHover(this._getOption("hover"));
                                    break;
                                case "intermission":
                                    delete this._userPlaybackOptions.intermission, this.setIntermission(this._getOption("intermission"));
                                    break;
                                case "loop":
                                    delete this._userPlaybackOptions.loop, this.setLoop(this._getOption("loop"));
                                    break;
                                case "playMode":
                                    delete this._userPlaybackOptions.playMode, this.setMode(this._getOption("playMode")), this.setDirection(this._getOption("direction"));
                                    break;
                                case "speed":
                                    delete this._userPlaybackOptions.speed, this.setSpeed(this._getOption("speed"))
                            }
                        }), n && this.render()
                    }
                    removeEventListener(e, t) {
                        var r, n, i;
                        try {
                            "complete" === e ? null == (r = this._container) || r.removeEventListener(e, t) : null == (n = this._lottie) || n.removeEventListener(e, t), null == (i = this._listeners.get(e)) || i.delete(t)
                        } catch (e) {
                            (0, d.i)("removeEventListener", e)
                        }
                    }
                    _handleAnimationComplete() {
                        var e;
                        "number" == typeof this._loop && this.stop();
                        let t = -1 === this.direction ? 0 : this.totalFrames;
                        this.goToAndStop(t, !0), this._counter = 0, this.clearCountTimer(), this.setCurrentState("completed"), null == (e = this._container) || e.dispatchEvent(new Event("complete"))
                    }
                    addEventListeners() {
                        var e;
                        if (!this._lottie || ["loading"].includes(this._currentState)) {
                            (0, d.j)("addEventListeners() Can't use whilst loading.");
                            return
                        }
                        for (let [t, r] of(this._lottie.addEventListener("enterFrame", () => {
                                var e;
                                if (!this._lottie) {
                                    (0, d.j)("enterFrame event : Lottie is undefined.");
                                    return
                                }
                                0 === Math.floor(this._lottie.currentFrame) && -1 === this.direction && (null == (e = this._container) || e.dispatchEvent(new Event("complete")), this.loop || this.setCurrentState("completed")), this._notify()
                            }), this._lottie.addEventListener("loopComplete", () => {
                                var e;
                                if (!this._lottie) {
                                    (0, d.j)("loopComplete event : Lottie is undefined.");
                                    return
                                }
                                null == (e = this._container) || e.dispatchEvent(new Event("loopComplete")), this.intermission > 0 && this.pause();
                                let t = this._lottie.playDirection;
                                if ("number" == typeof this._loop && this._loop > 0 && (this._counter += "bounce" === this._mode ? .5 : 1, this._counter >= this._loop)) {
                                    this._handleAnimationComplete();
                                    return
                                }
                                "bounce" === this._mode && "number" == typeof t && (t = -1 * Number(t));
                                let r = -1 === t ? this._lottie.totalFrames - 1 : 0;
                                this.intermission ? (this.goToAndPlay(r, !0), this.pause(), this._counterInterval = window.setTimeout(() => {
                                    this._lottie && (this._setPlayerState(() => ({
                                        direction: t
                                    })), this.goToAndPlay(r, !0))
                                }, this._intermission)) : (this._setPlayerState(() => ({
                                    direction: t
                                })), this.goToAndPlay(-1 === t ? this.totalFrames - 1 : 0, !0))
                            }), this._lottie.addEventListener("complete", () => {
                                if (this._lottie && !1 === this._loop && "bounce" === this._mode) {
                                    if (this._counter += .5, this._counter >= 1) {
                                        this._handleAnimationComplete();
                                        return
                                    }
                                    this._counterInterval = window.setTimeout(() => {
                                        if (!this._lottie) return;
                                        let e = this._lottie.playDirection;
                                        "bounce" === this._mode && "number" == typeof e && (e = -1 * Number(e));
                                        let t = -1 === e ? this.totalFrames - 1 : 0;
                                        this._setPlayerState(() => ({
                                            direction: e
                                        })), this.goToAndPlay(t, !0)
                                    }, this._intermission)
                                } else this._handleAnimationComplete()
                            }), this._listeners))
                            if ("complete" === t)
                                for (let n of r) null == (e = this._container) || e.addEventListener(t, n);
                            else
                                for (let e of r) this._lottie.addEventListener(t, e)
                    }
                    async _setCurrentAnimation(e) {
                        this._currentState = "loading";
                        let t = await this._dotLottieLoader.getAnimation(e);
                        this._currentAnimationId = e, this._animation = t, this._currentState = "ready"
                    }
                    async _getAudioFactory() {
                        if (this._animation && (0, d.m)(this._animation)) {
                            let {
                                DotLottieAudio: e
                            } = await r.el("930400").then(r.bind(r, "930400"));
                            return t => {
                                let r = new e({
                                    src: [t]
                                });
                                return this._audios.push(r), r
                            }
                        }
                        return null
                    }
                    async render(e) {
                        var t, r, n, i, o, a, u, s, c, f, h, p, v, g, C, m, y, E;
                        if (null != e && e.id) await this._setCurrentAnimation(e.id);
                        else if (!this._animation) throw (0, d.h)("no animation selected");
                        let B = null != (t = D.loop) && t,
                            b = null != (r = D.autoplay) && r,
                            A = null != (n = D.playMode) ? n : "normal",
                            w = null != (i = D.intermission) ? i : 0,
                            F = null != (o = D.hover) && o,
                            _ = null != (a = D.direction) ? a : 1,
                            O = null != (u = D.speed) ? u : 1,
                            x = null != (s = D.defaultTheme) ? s : "";
                        B = null != (c = null == e ? void 0 : e.loop) ? c : this._getOption("loop"), b = null != (f = null == e ? void 0 : e.autoplay) ? f : this._getOption("autoplay"), A = null != (h = null == e ? void 0 : e.playMode) ? h : this._getOption("playMode"), w = null != (p = null == e ? void 0 : e.intermission) ? p : this._getOption("intermission"), F = null != (v = null == e ? void 0 : e.hover) ? v : this._getOption("hover"), _ = null != (g = null == e ? void 0 : e.direction) ? g : this._getOption("direction"), O = null != (C = null == e ? void 0 : e.speed) ? C : this._getOption("speed"), x = null != (m = null == e ? void 0 : e.defaultTheme) ? m : this._getOption("defaultTheme");
                        let k = {
                                ...this._animationConfig,
                                autoplay: !F && b,
                                loop: "number" == typeof B || B,
                                renderer: this._worker ? "svg" : null != (y = this._animationConfig.renderer) ? y : "svg"
                            },
                            [P, S, T] = await Promise.all([this._dotLottieLoader.getTheme(x), this._getLottiePlayerInstance(), this._getAudioFactory()]);
                        if (P && this._animation ? this._animation = await (0, l.a)(this._animation, P) : this._animation = await this._dotLottieLoader.getAnimation(null != (E = this._currentAnimationId) ? E : ""), this._activeStateId && !this._inInteractiveMode) {
                            this.enterInteractiveMode(this._activeStateId);
                            return
                        }
                        this.destroy(), this._setPlayerState(() => ({
                            defaultTheme: x,
                            playMode: A,
                            intermission: w,
                            hover: F,
                            loop: B
                        })), T ? this._lottie = S.loadAnimation({
                            ...k,
                            container: this._container,
                            animationData: this._animation,
                            audioFactory: T
                        }) : this._lottie = S.loadAnimation({
                            ...k,
                            container: this._container,
                            animationData: this._animation
                        }), typeof this._lottie.resetSegments > "u" && (this._lottie.resetSegments = () => {
                            var e;
                            null == (e = this._lottie) || e.playSegments([0, this._lottie.totalFrames], !0)
                        }), this.addEventListeners(), this._container && (this._container.__lottie = this._lottie), this._setPlayerState(() => ({
                            direction: _,
                            speed: O
                        })), b && !F && this.play(), this._updateTestData()
                    }
                    async _getLottiePlayerInstance() {
                        var e;
                        let t = null != (e = this._animationConfig.renderer) ? e : "svg",
                            n;
                        if (this._worker) return "svg" !== t && (0, d.j)("Worker is only supported with svg renderer. Change or remove renderer prop to get rid of this warning."), (n = await r.el("394266").then(r.bind(r, "394266"))).default;
                        switch (t) {
                            case "svg":
                                n = this._light ? await r.el("566128").then(r.bind(r, "566128")) : await r.el("452454").then(r.bind(r, "452454"));
                                break;
                            case "canvas":
                                n = this._light ? await r.el("722650").then(r.bind(r, "722650")) : await r.el("859346").then(r.bind(r, "859346"));
                                break;
                            case "html":
                                n = this._light ? await r.el("445247").then(r.bind(r, "445247")) : await r.el("292885").then(r.bind(r, "292885"));
                                break;
                            default:
                                throw Error("Invalid renderer: ".concat(t))
                        }
                        return n.default
                    }
                    _getActiveAnimationId() {
                        var e, t, r, n;
                        let i = this._dotLottieLoader.manifest;
                        return null != (n = null != (r = null != (e = this._activeAnimationId) ? e : null == i ? void 0 : i.activeAnimationId) ? r : null == (t = null == i ? void 0 : i.animations[0]) ? void 0 : t.id) ? n : void 0
                    }
                    async load(e) {
                        if ("loading" === this._currentState) {
                            (0, d.j)("Loading in progress..");
                            return
                        }
                        try {
                            if (this.setCurrentState("loading"), "string" == typeof this._src) {
                                if ((0, d.n)(this._src)) {
                                    let e = JSON.parse(this._src);
                                    this._dotLottieLoader.loadFromLottieJSON(e)
                                } else {
                                    let e = new URL(this._src, window.location.href);
                                    await this._dotLottieLoader.loadFromUrl(e.toString())
                                }
                            } else if ("object" == typeof this._src && (0, d.l)(this._src)) this._dotLottieLoader.loadFromLottieJSON(this._src);
                            else throw (0, d.h)("Invalid src provided");
                            if (!this._dotLottieLoader.manifest) throw (0, d.h)("No manifest found");
                            let t = this._getActiveAnimationId();
                            if (!t) throw (0, d.h)("No active animation found");
                            await this._setCurrentAnimation(t), await this.render(e)
                        } catch (e) {
                            this.setCurrentState("error"), e instanceof Error && (0, d.i)("Error loading animation: ".concat(e.message))
                        }
                    }
                    setErrorState(e) {
                        this.setCurrentState("error"), (0, d.i)(e)
                    }
                    _requireValidDirection(e) {
                        if (-1 !== e && 1 !== e) throw (0, d.h)("Direction can only be -1 (backwards) or 1 (forwards)")
                    }
                    _requireValidIntermission(e) {
                        if (e < 0 || !Number.isInteger(e)) throw (0, d.h)("intermission must be a positive number")
                    }
                    _requireValidLoop(e) {
                        if ("number" == typeof e && (!Number.isInteger(e) || e < 0)) throw (0, d.h)("loop must be a positive number or boolean")
                    }
                    _requireValidSpeed(e) {
                        if ("number" != typeof e) throw (0, d.h)("speed must be a number")
                    }
                    _requireValidBackground(e) {
                        if ("string" != typeof e) throw (0, d.h)("background must be a string")
                    }
                    _requireValidAutoplay(e) {
                        if ("boolean" != typeof e) throw (0, d.h)("autoplay must be a boolean")
                    }
                    _requireValidPlaybackOptions(e) {
                        e.direction && this._requireValidDirection(e.direction), e.intermission && this._requireValidIntermission(e.intermission), e.loop && this._requireValidLoop(e.loop), e.speed && this._requireValidSpeed(e.speed)
                    }
                    constructor(e, t, r) {
                        (0, a._)(this, "_lottie", void 0), (0, a._)(this, "_src", void 0), (0, a._)(this, "_animationConfig", void 0), (0, a._)(this, "_prevUserPlaybackOptions", {}), (0, a._)(this, "_userPlaybackOptions", void 0), (0, a._)(this, "_hover", !1), (0, a._)(this, "_loop", !1), (0, a._)(this, "_counter", 0), (0, a._)(this, "_intermission", 0), (0, a._)(this, "_counterInterval", null), (0, a._)(this, "_container", null), (0, a._)(this, "_name", void 0), (0, a._)(this, "_mode", "normal"), (0, a._)(this, "_background", "transparent"), (0, a._)(this, "_animation", void 0), (0, a._)(this, "_defaultTheme", void 0), (0, a._)(this, "_activeAnimationId", void 0), (0, a._)(this, "_currentAnimationId", void 0), (0, a._)(this, "_testId", void 0), (0, a._)(this, "_listeners", new Map), (0, a._)(this, "_currentState", "initial"), (0, a._)(this, "_stateBeforeFreeze", "initial"), (0, a._)(this, "state", new c.a(g)), (0, a._)(this, "_light", !1), (0, a._)(this, "_worker", !1), (0, a._)(this, "_dotLottieLoader", new u.a), (0, a._)(this, "_activeStateId", void 0), (0, a._)(this, "_inInteractiveMode", !1), (0, a._)(this, "_scrollTicking", !1), (0, a._)(this, "_scrollCallback", void 0), (0, a._)(this, "_onShowIntersectionObserver", void 0), (0, a._)(this, "_visibilityPercentage", 0), (0, a._)(this, "_audios", []), (0, a._)(this, "_stateMachineManager", void 0), "string" == typeof e ? this._src = e : this._src = Object.assign({}, e), null != r && r.testId && (this._testId = r.testId), this._defaultTheme = (null == r ? void 0 : r.defaultTheme) || "", this._userPlaybackOptions = this._validatePlaybackOptions(r || {}), "string" == typeof(null == r ? void 0 : r.activeAnimationId) && (this._activeAnimationId = r.activeAnimationId), this._container = t || null, "string" == typeof(null == r ? void 0 : r.background) && this.setBackground(r.background), "u" > typeof(null == r ? void 0 : r.activeStateId) && (this._activeStateId = r.activeStateId);
                        let {
                            rendererSettings: n,
                            ...i
                        } = r || {};
                        this._animationConfig = {
                            loop: !1,
                            autoplay: !1,
                            renderer: "svg",
                            rendererSettings: {
                                clearCanvas: !0,
                                progressiveLoad: !0,
                                hideOnTransparent: !0,
                                filterSize: {
                                    width: "200%",
                                    height: "200%",
                                    x: "-50%",
                                    y: "-50%"
                                },
                                ...n
                            },
                            ...i
                        }, null != r && r.light && (this._light = r.light), null != r && r.worker && (this._worker = r.worker), this._listenToHover(), this._listenToVisibilityChange()
                    }
                }
        },
        790703: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                a: function() {
                    return i
                }
            }), r("222007");
            var n = r("846033");
            async function i(e, t) {
                let [{
                    DotLottieStateMachineManager: i
                }] = await Promise.all([r.el("329972").then(r.bind(r, "329972"))]);
                if (!e.length) throw (0, n.h)("No state machines available inside this .lottie!");
                return new i(e, t)
            }
        },
        144734: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                DEFAULT_STATE: function() {
                    return n.e
                },
                DotLottieCommonPlayer: function() {
                    return n.f
                },
                PlayerEvents: function() {
                    return n.a
                },
                PlayerState: function() {
                    return n.b
                }
            });
            var n = r("454872");
            r("968839"), r("790703"), r("86441"), r("601801"), r("846033"), r("184339")
        },
        516085: function(e, t, r) {
            "use strict";
            r.r(t), r("222007"), r("424973"), r("454607"), r("144734"), r("884691"), r("37983")
        },
        907428: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                a: function() {
                    return l
                }
            }), r("222007");
            var n = r("454607"),
                i = r("144734"),
                o = r("884691"),
                a = r("37983"),
                u = (e, t, r) => {
                    let [n] = (0, o.useState)(() => new i.DotLottieCommonPlayer(e, t.current, r)), a = (0, o.useRef)(!1);
                    return (0, o.useLayoutEffect)(() => ((async function e() {
                        !a.current && t.current && (a.current = !0, n.setContainer(t.current), await n.load())
                    })(), () => {
                        a.current && n.destroy()
                    }), [n]), n
                };

            function s(e, t) {
                let r = (0, o.useCallback)(() => t(e.getState()), [t, e]),
                    a = (0, o.useCallback)(t => e.state.subscribe(t), [e]);
                return (0, n.d)(a, r, () => t(i.DEFAULT_STATE))
            }
            var l = o.forwardRef((e, t) => {
                let {
                    onEvent: r,
                    activeAnimationId: l,
                    autoplay: c,
                    background: d = "transparent",
                    direction: f,
                    intermission: h,
                    loop: p,
                    playMode: v,
                    hover: D,
                    speed: g,
                    renderer: C = "svg",
                    rendererSettings: m = {},
                    src: y,
                    className: E = "",
                    testId: B,
                    children: b,
                    defaultTheme: A,
                    light: w = !1,
                    worker: F = !1,
                    activeStateId: _,
                    lottieRef: O,
                    ...x
                } = e, k = (0, o.useRef)(null), P = u(y, k, {
                    renderer: C,
                    activeAnimationId: l,
                    rendererSettings: {
                        clearCanvas: !0,
                        progressiveLoad: !1,
                        hideOnTransparent: !0,
                        ...m
                    },
                    hover: D,
                    loop: p,
                    direction: f,
                    speed: g,
                    intermission: h,
                    background: d,
                    playMode: v,
                    autoplay: !D && c,
                    testId: B,
                    defaultTheme: A,
                    light: w,
                    worker: F,
                    activeStateId: _
                }), S = (0, o.useRef)(P);
                S.current = P, o.useImperativeHandle(t, () => P, [P]), o.useImperativeHandle(O, () => P, [P]);
                let T = s(P, e => e.currentState),
                    j = s(P, e => e.frame),
                    M = s(P, e => e.seeker),
                    R = s(P, e => e.currentAnimationId);
                return (0, n.a)(() => {
                    typeof p > "u" ? S.current.revertToManifestValues(["loop"]) : S.current.setLoop(p)
                }, [p]), (0, n.a)(() => {
                    typeof c > "u" ? S.current.revertToManifestValues(["autoplay"]) : S.current.setAutoplay(c)
                }, [c]), (0, n.a)(() => {
                    typeof f > "u" ? S.current.revertToManifestValues(["direction"]) : S.current.setDirection(f)
                }, [f]), (0, n.a)(() => {
                    typeof g > "u" ? S.current.revertToManifestValues(["speed"]) : S.current.setSpeed(g)
                }, [g]), (0, n.a)(() => {
                    typeof v > "u" ? S.current.revertToManifestValues(["playMode"]) : S.current.setMode(v)
                }, [v]), (0, n.a)(() => {
                    typeof D > "u" ? S.current.revertToManifestValues(["hover"]) : S.current.setHover(D)
                }, [D]), (0, n.a)(() => {
                    typeof d > "u" ? S.current.setBackground("transparent") : S.current.setBackground(d)
                }, [d]), (0, n.a)(() => {
                    typeof h > "u" ? S.current.revertToManifestValues(["intermission"]) : S.current.setIntermission(h)
                }, [h]), (0, n.a)(() => {
                    typeof A > "u" || !A ? S.current.revertToManifestValues(["defaultTheme"]) : S.current.setDefaultTheme(A)
                }, [A]), (0, n.a)(() => {
                    l && S.current.play(l)
                }, [l]), (0, n.a)(() => ("u" > typeof _ && S.current.enterInteractiveMode(_), () => {
                    S.current.exitInteractiveMode()
                }), [_]), (0, n.a)(() => {
                    "u" > typeof y && S.current.updateSrc(y)
                }, [y]), (0, o.useEffect)(() => {
                    let e = () => {
                            null == r || r(i.PlayerEvents.Ready)
                        },
                        t = () => {
                            null == r || r(i.PlayerEvents.DataReady)
                        },
                        n = () => {
                            null == r || r(i.PlayerEvents.DataFail)
                        },
                        o = () => {
                            S.current.currentState !== i.PlayerState.Playing && (null == r || r(i.PlayerEvents.Complete))
                        },
                        a = () => {
                            null == r || r(i.PlayerEvents.LoopComplete)
                        };
                    return S.current.addEventListener("DOMLoaded", e), S.current.addEventListener("data_ready", t), S.current.addEventListener("data_failed", n), S.current.addEventListener("complete", o), S.current.addEventListener("loopComplete", a), () => {
                        S.current.removeEventListener("DOMLoaded", e), S.current.removeEventListener("data_ready", t), S.current.removeEventListener("data_failed", n), S.current.removeEventListener("complete", o), S.current.removeEventListener("loopComplete", a)
                    }
                }, []), (0, o.useEffect)(() => {
                    switch (T) {
                        case i.PlayerState.Stopped:
                            null == r || r(i.PlayerEvents.Stop);
                            break;
                        case i.PlayerState.Paused:
                            null == r || r(i.PlayerEvents.Pause);
                            break;
                        case i.PlayerState.Playing:
                            null == r || r(i.PlayerEvents.Play);
                            break;
                        case i.PlayerState.Frozen:
                            null == r || r(i.PlayerEvents.Freeze);
                            break;
                        case i.PlayerState.Error:
                            null == r || r(i.PlayerEvents.Error)
                    }
                }, [T]), (0, o.useEffect)(() => {
                    null == r || r(i.PlayerEvents.Frame, {
                        frame: j,
                        seeker: M
                    })
                }, [j]), (0, a.jsx)(n.e, {
                    value: P,
                    children: (0, a.jsxs)("div", {
                        className: "dotlottie-container main ".concat(b ? "controls" : "", " ").concat(E),
                        lang: "en",
                        ...B && {
                            "data-testid": B
                        },
                        ...x,
                        children: [(0, a.jsx)("div", {
                            ref: k,
                            "data-name": "".concat(R),
                            role: "figure",
                            className: "animation ".concat(b ? "controls" : ""),
                            style: {
                                position: "relative"
                            },
                            ...B && {
                                "data-testid": "animation"
                            },
                            children: T === i.PlayerState.Error && (0, a.jsx)("div", {
                                ...B && {
                                    "data-testid": "error"
                                },
                                className: "error",
                                children: "⚠️"
                            })
                        }), b]
                    })
                })
            })
        },
        454607: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                a: function() {
                    return i
                },
                d: function() {
                    return a
                },
                e: function() {
                    return o
                }
            }), r("222007");
            var n = r("884691");
            r("144734");
            var i = function(e, t) {
                var r, i = (r = (0, n.useRef)(!0)).current ? (r.current = !1, !0) : r.current;
                (0, n.useEffect)(function() {
                    if (!i) return e()
                }, t)
            };
            "u" > typeof window && window;
            var o = (0, n.createContext)(null).Provider,
                a = (e, t, r) => {
                    let [i, o] = (0, n.useState)(() => r());
                    return (0, n.useEffect)(() => {
                        let r = e(() => {
                            o(t())
                        });
                        return () => {
                            r()
                        }
                    }, [e]), i
                }
        },
        946147: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                DotLottiePlayer: function() {
                    return n.a
                }
            }), r("516085");
            var n = r("907428");
            r("454607");
            var i = r("144734");
            r.es(i, t)
        },
        604676: function(e, t, r) {
            "use strict";

            function n(e) {
                return "object" == typeof e && null != e && 1 === e.nodeType
            }

            function i(e, t) {
                return (!t || "hidden" !== e) && "visible" !== e && "clip" !== e
            }

            function o(e, t) {
                if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
                    var r, n, o = getComputedStyle(e, null);
                    return i(o.overflowY, t) || i(o.overflowX, t) || !!(n = function(e) {
                        if (!e.ownerDocument || !e.ownerDocument.defaultView) return null;
                        try {
                            return e.ownerDocument.defaultView.frameElement
                        } catch (e) {
                            return null
                        }
                    }(r = e)) && (n.clientHeight < r.scrollHeight || n.clientWidth < r.scrollWidth)
                }
                return !1
            }

            function a(e, t, r, n, i, o, a, u) {
                return o < e && a > t || o > e && a < t ? 0 : o <= e && u <= r || a >= t && u >= r ? o - e - n : a > t && u < r || o < e && u > r ? a - t + i : 0
            }
            r.r(t), r.d(t, {
                default: function() {
                    return u
                }
            }), r("70102"), r("424973");
            var u = function(e, t) {
                var r = window,
                    i = t.scrollMode,
                    u = t.block,
                    s = t.inline,
                    l = t.boundary,
                    c = t.skipOverflowHiddenElements,
                    d = "function" == typeof l ? l : function(e) {
                        return e !== l
                    };
                if (!n(e)) throw TypeError("Invalid target");
                for (var f, h, p = document.scrollingElement || document.documentElement, v = [], D = e; n(D) && d(D);) {
                    if ((D = null == (h = (f = D).parentElement) ? f.getRootNode().host || null : h) === p) {
                        v.push(D);
                        break
                    }
                    null != D && D === document.body && o(D) && !o(document.documentElement) || null != D && o(D, c) && v.push(D)
                }
                for (var g = r.visualViewport ? r.visualViewport.width : innerWidth, C = r.visualViewport ? r.visualViewport.height : innerHeight, m = window.scrollX || pageXOffset, y = window.scrollY || pageYOffset, E = e.getBoundingClientRect(), B = E.height, b = E.width, A = E.top, w = E.right, F = E.bottom, _ = E.left, O = "start" === u || "nearest" === u ? A : "end" === u ? F : A + B / 2, x = "center" === s ? _ + b / 2 : "end" === s ? w : _, k = [], P = 0; P < v.length; P++) {
                    var S = v[P],
                        T = S.getBoundingClientRect(),
                        j = T.height,
                        M = T.width,
                        R = T.top,
                        I = T.right,
                        L = T.bottom,
                        N = T.left;
                    if ("if-needed" === i && A >= 0 && _ >= 0 && F <= C && w <= g && A >= R && F <= L && _ >= N && w <= I) break;
                    var z = getComputedStyle(S),
                        W = parseInt(z.borderLeftWidth, 10),
                        q = parseInt(z.borderTopWidth, 10),
                        V = parseInt(z.borderRightWidth, 10),
                        U = parseInt(z.borderBottomWidth, 10),
                        H = 0,
                        J = 0,
                        K = "offsetWidth" in S ? S.offsetWidth - S.clientWidth - W - V : 0,
                        $ = "offsetHeight" in S ? S.offsetHeight - S.clientHeight - q - U : 0,
                        X = "offsetWidth" in S ? 0 === S.offsetWidth ? 0 : M / S.offsetWidth : 0,
                        Q = "offsetHeight" in S ? 0 === S.offsetHeight ? 0 : j / S.offsetHeight : 0;
                    if (p === S) H = "start" === u ? O : "end" === u ? O - C : "nearest" === u ? a(y, y + C, C, q, U, y + O, y + O + B, B) : O - C / 2, J = "start" === s ? x : "center" === s ? x - g / 2 : "end" === s ? x - g : a(m, m + g, g, W, V, m + x, m + x + b, b), H = Math.max(0, H + y), J = Math.max(0, J + m);
                    else {
                        H = "start" === u ? O - R - q : "end" === u ? O - L + U + $ : "nearest" === u ? a(R, L, j, q, U + $, O, O + B, B) : O - (R + j / 2) + $ / 2, J = "start" === s ? x - N - W : "center" === s ? x - (N + M / 2) + K / 2 : "end" === s ? x - I + V + K : a(N, I, M, W, V + K, x, x + b, b);
                        var G = S.scrollLeft,
                            Y = S.scrollTop;
                        O += Y - (H = Math.max(0, Math.min(Y + H / Q, S.scrollHeight - j / Q + $))), x += G - (J = Math.max(0, Math.min(G + J / X, S.scrollWidth - M / X + K)))
                    }
                    k.push({
                        el: S,
                        top: H,
                        left: J
                    })
                }
                return k
            }
        },
        746140: function(e, t, r) {
            "use strict";

            function n(e) {
                for (var t = arguments.length, r = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
                throw Error("[Immer] minified error nr: " + e + (r.length ? " " + r.map(function(e) {
                    return "'" + e + "'"
                }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf")
            }

            function i(e) {
                return !!e && !!e[q]
            }

            function o(e) {
                var t;
                return !!e && (function(e) {
                    if (!e || "object" != typeof e) return !1;
                    var t = Object.getPrototypeOf(e);
                    if (null === t) return !0;
                    var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
                    return r === Object || "function" == typeof r && Function.toString.call(r) === V
                }(e) || Array.isArray(e) || !!e[W] || !!(null === (t = e.constructor) || void 0 === t ? void 0 : t[W]) || c(e) || d(e))
            }

            function a(e, t, r) {
                void 0 === r && (r = !1), 0 === u(e) ? (r ? Object.keys : U)(e).forEach(function(n) {
                    r && "symbol" == typeof n || t(n, e[n], e)
                }) : e.forEach(function(r, n) {
                    return t(n, r, e)
                })
            }

            function u(e) {
                var t = e[q];
                return t ? t.i > 3 ? t.i - 4 : t.i : Array.isArray(e) ? 1 : c(e) ? 2 : d(e) ? 3 : 0
            }

            function s(e, t) {
                return 2 === u(e) ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
            }
            r.r(t), r.d(t, {
                createDraft: function() {
                    return G
                },
                finishDraft: function() {
                    return Y
                },
                isDraft: function() {
                    return i
                },
                produce: function() {
                    return Q
                }
            }), r("70102"), r("222007"), r("424973"), r("843762"), r("426094");

            function l(e, t, r) {
                var n = u(e);
                2 === n ? e.set(t, r) : 3 === n ? e.add(r) : e[t] = r
            }

            function c(e) {
                return I && e instanceof Map
            }

            function d(e) {
                return L && e instanceof Set
            }

            function f(e) {
                return e.o || e.t
            }

            function h(e) {
                if (Array.isArray(e)) return Array.prototype.slice.call(e);
                var t = H(e);
                delete t[q];
                for (var r = U(t), n = 0; n < r.length; n++) {
                    var i = r[n],
                        o = t[i];
                    !1 === o.writable && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (t[i] = {
                        configurable: !0,
                        writable: !0,
                        enumerable: o.enumerable,
                        value: e[i]
                    })
                }
                return Object.create(Object.getPrototypeOf(e), t)
            }

            function p(e, t) {
                return void 0 === t && (t = !1), D(e) || i(e) || !o(e) || (u(e) > 1 && (e.set = e.add = e.clear = e.delete = v), Object.freeze(e), t && a(e, function(e, t) {
                    return p(t, !0)
                }, !0)), e
            }

            function v() {
                n(2)
            }

            function D(e) {
                return null == e || "object" != typeof e || Object.isFrozen(e)
            }

            function g(e) {
                var t = J[e];
                return t || n(18, e), t
            }

            function C() {
                return M
            }

            function m(e, t) {
                t && (g("Patches"), e.u = [], e.s = [], e.v = t)
            }

            function y(e) {
                E(e), e.p.forEach(b), e.p = null
            }

            function E(e) {
                e === M && (M = e.l)
            }

            function B(e) {
                return M = {
                    p: [],
                    l: M,
                    h: e,
                    m: !0,
                    _: 0
                }
            }

            function b(e) {
                var t = e[q];
                0 === t.i || 1 === t.i ? t.j() : t.g = !0
            }

            function A(e, t) {
                t._ = t.p.length;
                var r = t.p[0],
                    i = void 0 !== e && e !== r;
                return t.h.O || g("ES5").S(t, e, i), i ? (r[q].P && (y(t), n(4)), o(e) && (e = w(t, e), t.l || _(t, e)), t.u && g("Patches").M(r[q].t, e, t.u, t.s)) : e = w(t, r, []), y(t), t.u && t.v(t.u, t.s), e !== z ? e : void 0
            }

            function w(e, t, r) {
                if (D(t)) return t;
                var n = t[q];
                if (!n) return a(t, function(i, o) {
                    return F(e, n, t, i, o, r)
                }, !0), t;
                if (n.A !== e) return t;
                if (!n.P) return _(e, n.t, !0), n.t;
                if (!n.I) {
                    n.I = !0, n.A._--;
                    var i = 4 === n.i || 5 === n.i ? n.o = h(n.k) : n.o,
                        o = i,
                        u = !1;
                    3 === n.i && (o = new Set(i), i.clear(), u = !0), a(o, function(t, o) {
                        return F(e, n, i, t, o, r, u)
                    }), _(e, i, !1), r && e.u && g("Patches").N(n, r, e.u, e.s)
                }
                return n.o
            }

            function F(e, t, r, n, a, u, c) {
                if (i(a)) {
                    var d = w(e, a, u && t && 3 !== t.i && !s(t.R, n) ? u.concat(n) : void 0);
                    if (l(r, n, d), !i(d)) return;
                    e.m = !1
                } else c && r.add(a);
                if (o(a) && !D(a)) {
                    if (!e.h.D && e._ < 1) return;
                    w(e, a), t && t.A.l || _(e, a)
                }
            }

            function _(e, t, r) {
                void 0 === r && (r = !1), !e.l && e.h.D && e.m && p(t, r)
            }

            function O(e, t) {
                var r = e[q];
                return (r ? f(r) : e)[t]
            }

            function x(e, t) {
                if (t in e)
                    for (var r = Object.getPrototypeOf(e); r;) {
                        var n = Object.getOwnPropertyDescriptor(r, t);
                        if (n) return n;
                        r = Object.getPrototypeOf(r)
                    }
            }

            function k(e) {
                e.P || (e.P = !0, e.l && k(e.l))
            }

            function P(e) {
                e.o || (e.o = h(e.t))
            }

            function S(e, t, r) {
                var n, i, o, a, u, s, l, f, h, p = c(t) ? g("MapSet").F(t, r) : d(t) ? g("MapSet").T(t, r) : e.O ? (n = t, i = r, u = a = {
                    i: (o = Array.isArray(n)) ? 1 : 0,
                    A: i ? i.A : M,
                    P: !1,
                    I: !1,
                    R: {},
                    l: i,
                    t: n,
                    k: null,
                    o: null,
                    j: null,
                    C: !1
                }, s = K, o && (u = [a], s = $), f = (l = Proxy.revocable(u, s)).revoke, h = l.proxy, a.k = h, a.j = f, h) : g("ES5").J(t, r);
                return (r ? r.A : M).p.push(p), p
            }

            function T(e, t) {
                switch (t) {
                    case 2:
                        return new Map(e);
                    case 3:
                        return Array.from(e)
                }
                return h(e)
            }
            var j, M, R = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"),
                I = "undefined" != typeof Map,
                L = "undefined" != typeof Set,
                N = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect,
                z = R ? Symbol.for("immer-nothing") : ((j = {})["immer-nothing"] = !0, j),
                W = R ? Symbol.for("immer-draftable") : "__$immer_draftable",
                q = R ? Symbol.for("immer-state") : "__$immer_state",
                V = "" + Object.prototype.constructor,
                U = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(e) {
                    return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
                } : Object.getOwnPropertyNames,
                H = Object.getOwnPropertyDescriptors || function(e) {
                    var t = {};
                    return U(e).forEach(function(r) {
                        t[r] = Object.getOwnPropertyDescriptor(e, r)
                    }), t
                },
                J = {},
                K = {
                    get: function(e, t) {
                        if (t === q) return e;
                        var r, n, i, a = f(e);
                        if (!s(a, t)) {
                            ;
                            return r = e, (i = x(a, t)) ? "value" in i ? i.value : null === (n = i.get) || void 0 === n ? void 0 : n.call(r.k) : void 0
                        }
                        var u = a[t];
                        return e.I || !o(u) ? u : u === O(e.t, t) ? (P(e), e.o[t] = S(e.A.h, u, e)) : u
                    },
                    has: function(e, t) {
                        return t in f(e)
                    },
                    ownKeys: function(e) {
                        return Reflect.ownKeys(f(e))
                    },
                    set: function(e, t, r) {
                        var n = x(f(e), t);
                        if (null == n ? void 0 : n.set) return n.set.call(e.k, r), !0;
                        if (!e.P) {
                            var i, o, a = O(f(e), t),
                                u = null == a ? void 0 : a[q];
                            if (u && u.t === r) return e.o[t] = r, e.R[t] = !1, !0;
                            if (((i = r) === (o = a) ? 0 !== i || 1 / i == 1 / o : i != i && o != o) && (void 0 !== r || s(e.t, t))) return !0;
                            P(e), k(e)
                        }
                        return e.o[t] === r && (void 0 !== r || t in e.o) || Number.isNaN(r) && Number.isNaN(e.o[t]) || (e.o[t] = r, e.R[t] = !0), !0
                    },
                    deleteProperty: function(e, t) {
                        return void 0 !== O(e.t, t) || t in e.t ? (e.R[t] = !1, P(e), k(e)) : delete e.R[t], e.o && delete e.o[t], !0
                    },
                    getOwnPropertyDescriptor: function(e, t) {
                        var r = f(e),
                            n = Reflect.getOwnPropertyDescriptor(r, t);
                        return n ? {
                            writable: !0,
                            configurable: 1 !== e.i || "length" !== t,
                            enumerable: n.enumerable,
                            value: r[t]
                        } : n
                    },
                    defineProperty: function() {
                        n(11)
                    },
                    getPrototypeOf: function(e) {
                        return Object.getPrototypeOf(e.t)
                    },
                    setPrototypeOf: function() {
                        n(12)
                    }
                },
                $ = {};
            a(K, function(e, t) {
                $[e] = function() {
                    return arguments[0] = arguments[0][0], t.apply(this, arguments)
                }
            }), $.deleteProperty = function(e, t) {
                return $.set.call(this, e, t, void 0)
            }, $.set = function(e, t, r) {
                return K.set.call(this, e[0], t, r, e[0])
            };
            var X = new(function() {
                    function e(e) {
                        var t = this;
                        this.O = N, this.D = !0, this.produce = function(e, r, i) {
                            if ("function" == typeof e && "function" != typeof r) {
                                var a, u = r;
                                return r = e,
                                    function(e) {
                                        var n = this;
                                        void 0 === e && (e = u);
                                        for (var i = arguments.length, o = Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) o[a - 1] = arguments[a];
                                        return t.produce(e, function(e) {
                                            var t;
                                            return (t = r).call.apply(t, [n, e].concat(o))
                                        })
                                    }
                            }
                            if ("function" != typeof r && n(6), void 0 !== i && "function" != typeof i && n(7), o(e)) {
                                var s = B(t),
                                    l = S(t, e, void 0),
                                    c = !0;
                                try {
                                    a = r(l), c = !1
                                } finally {
                                    c ? y(s) : E(s)
                                }
                                return "undefined" != typeof Promise && a instanceof Promise ? a.then(function(e) {
                                    return m(s, i), A(e, s)
                                }, function(e) {
                                    throw y(s), e
                                }) : (m(s, i), A(a, s))
                            }
                            if (!e || "object" != typeof e) {
                                if (void 0 === (a = r(e)) && (a = e), a === z && (a = void 0), t.D && p(a, !0), i) {
                                    var d = [],
                                        f = [];
                                    g("Patches").M(e, a, d, f), i(d, f)
                                }
                                return a
                            }
                            n(21, e)
                        }, this.produceWithPatches = function(e, r) {
                            if ("function" == typeof e) return function(r) {
                                for (var n = arguments.length, i = Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
                                return t.produceWithPatches(r, function(t) {
                                    return e.apply(void 0, [t].concat(i))
                                })
                            };
                            var n, i, o = t.produce(e, r, function(e, t) {
                                n = e, i = t
                            });
                            return "undefined" != typeof Promise && o instanceof Promise ? o.then(function(e) {
                                return [e, n, i]
                            }) : [o, n, i]
                        }, "boolean" == typeof(null == e ? void 0 : e.useProxies) && this.setUseProxies(e.useProxies), "boolean" == typeof(null == e ? void 0 : e.autoFreeze) && this.setAutoFreeze(e.autoFreeze)
                    }
                    var t = e.prototype;
                    return t.createDraft = function(e) {
                        o(e) || n(8), i(e) && (i(t = e) || n(22, t), e = function e(t) {
                            if (!o(t)) return t;
                            var r, n = t[q],
                                i = u(t);
                            if (n) {
                                if (!n.P && (n.i < 4 || !g("ES5").K(n))) return n.t;
                                n.I = !0, r = T(t, i), n.I = !1
                            } else r = T(t, i);
                            return a(r, function(t, i) {
                                var o, a;
                                n && (o = n.t, a = t, (2 === u(o) ? o.get(a) : o[a]) === i) || l(r, t, e(i))
                            }), 3 === i ? new Set(r) : r
                        }(t));
                        var t, r = B(this),
                            s = S(this, e, void 0);
                        return s[q].C = !0, E(r), s
                    }, t.finishDraft = function(e, t) {
                        var r = (e && e[q]).A;
                        return m(r, t), A(void 0, r)
                    }, t.setAutoFreeze = function(e) {
                        this.D = e
                    }, t.setUseProxies = function(e) {
                        e && !N && n(20), this.O = e
                    }, t.applyPatches = function(e, t) {
                        for (r = t.length - 1; r >= 0; r--) {
                            var r, n = t[r];
                            if (0 === n.path.length && "replace" === n.op) {
                                e = n.value;
                                break
                            }
                        }
                        r > -1 && (t = t.slice(r + 1));
                        var o = g("Patches").$;
                        return i(e) ? o(e, t) : this.produce(e, function(e) {
                            return o(e, t)
                        })
                    }, e
                }()),
                Q = X.produce,
                G = (X.produceWithPatches.bind(X), X.setAutoFreeze.bind(X), X.setUseProxies.bind(X), X.applyPatches.bind(X), X.createDraft.bind(X)),
                Y = X.finishDraft.bind(X)
        },
        156336: function(e, t, r) {
            "use strict";

            function n(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }

            function i(e) {
                var t, r;
                return !1 !== n(e) && (void 0 === (t = e.constructor) || !1 !== n(r = t.prototype) && !1 !== r.hasOwnProperty("isPrototypeOf") && !0)
            }
            r.r(t), r.d(t, {
                isPlainObject: function() {
                    return i
                }
            })
        },
        723251: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                thumbHashToApproximateAspectRatio: function() {
                    return n
                },
                rgbaToDataURL: function() {
                    return i
                },
                thumbHashToDataURL: function() {
                    return o
                }
            }), r("70102"), r("424973"), r("222007"), r("311790"), r("477657"), r("811875"), r("90301"), r("652153"), r("28797"), r("817884"), r("597349"), r("667536"), r("690341"), r("101997");

            function n(e) {
                let t = e[3],
                    r = 128 & e[2],
                    n = 128 & e[4];
                return (n ? r ? 5 : 7 : 7 & t) / (n ? 7 & t : r ? 5 : 7)
            }

            function i(e, t, r) {
                let n = 4 * e + 1,
                    i = 6 + t * (5 + n),
                    o = [137, 80, 78, 71, 13, 10, 26, 10, 0, 0, 0, 13, 73, 72, 68, 82, 0, 0, e >> 8, 255 & e, 0, 0, t >> 8, 255 & t, 8, 6, 0, 0, 0, 0, 0, 0, 0, i >>> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, 73, 68, 65, 84, 120, 1],
                    a = [0, 498536548, 997073096, 651767980, 1994146192, 1802195444, 1303535960, 1342533948, -306674912, -267414716, -690576408, -882789492, -1687895376, -2032938284, -1609899400, -1111625188],
                    u = 1,
                    s = 0;
                for (let e = 0, i = 0, a = n - 1; e < t; e++, a += n - 1)
                    for (o.push(e + 1 < t ? 0 : 1, 255 & n, n >> 8, 255 & ~n, n >> 8 ^ 255, 0), s = (s + u) % 65521; i < a; i++) {
                        let e = 255 & r[i];
                        o.push(e), s = (s + (u = (u + e) % 65521)) % 65521
                    }
                for (let [e, t] of(o.push(s >> 8, 255 & s, u >> 8, 255 & u, 0, 0, 0, 0, 0, 0, 0, 0, 73, 69, 78, 68, 174, 66, 96, 130), [
                        [12, 29],
                        [37, 41 + i]
                    ])) {
                    let r = -1;
                    for (let n = e; n < t; n++) r ^= o[n], r = (r = r >>> 4 ^ a[15 & r]) >>> 4 ^ a[15 & r];
                    r = ~r, o[t++] = r >>> 24, o[t++] = r >> 16 & 255, o[t++] = r >> 8 & 255, o[t++] = 255 & r
                }
                return "data:image/png;base64," + btoa(String.fromCharCode(...o))
            }

            function o(e) {
                let t = function(e) {
                    let {
                        PI: t,
                        min: r,
                        max: i,
                        cos: o,
                        round: a
                    } = Math, u = e[0] | e[1] << 8 | e[2] << 16, s = e[3] | e[4] << 8, l = (63 & u) / 63, c = (u >> 6 & 63) / 31.5 - 1, d = (u >> 12 & 63) / 31.5 - 1, f = u >> 23, h = s >> 15, p = i(3, h ? f ? 5 : 7 : 7 & s), v = i(3, h ? 7 & s : f ? 5 : 7), D = f ? (15 & e[5]) / 15 : 1, g = (e[5] >> 4) / 15, C = f ? 6 : 5, m = 0, y = (t, r, n) => {
                        let i = [];
                        for (let o = 0; o < r; o++)
                            for (let a = o ? 0 : 1; a * r < t * (r - o); a++) i.push(((e[C + (m >> 1)] >> ((1 & m++) << 2) & 15) / 7.5 - 1) * n);
                        return i
                    }, E = y(p, v, (u >> 18 & 31) / 31), B = y(3, 3, 1.25 * ((s >> 3 & 63) / 63)), b = y(3, 3, 1.25 * ((s >> 9 & 63) / 63)), A = f && y(5, 5, g), w = n(e), F = a(w > 1 ? 32 : 32 * w), _ = a(w > 1 ? 32 / w : 32), O = new Uint8Array(F * _ * 4), x = [], k = [];
                    for (let e = 0, n = 0; e < _; e++)
                        for (let a = 0; a < F; a++, n += 4) {
                            let u = l,
                                s = c,
                                h = d,
                                g = D;
                            for (let e = 0, r = i(p, f ? 5 : 3); e < r; e++) x[e] = o(t / F * (a + .5) * e);
                            for (let r = 0, n = i(v, f ? 5 : 3); r < n; r++) k[r] = o(t / _ * (e + .5) * r);
                            for (let e = 0, t = 0; e < v; e++)
                                for (let r = e ? 0 : 1, n = 2 * k[e]; r * v < p * (v - e); r++, t++) u += E[t] * x[r] * n;
                            for (let e = 0, t = 0; e < 3; e++)
                                for (let r = e ? 0 : 1, n = 2 * k[e]; r < 3 - e; r++, t++) {
                                    let e = x[r] * n;
                                    s += B[t] * e, h += b[t] * e
                                }
                            if (f)
                                for (let e = 0, t = 0; e < 5; e++)
                                    for (let r = e ? 0 : 1, n = 2 * k[e]; r < 5 - e; r++, t++) g += A[t] * x[r] * n;
                            let C = u - 2 / 3 * s,
                                m = (3 * u - C + h) / 2,
                                y = m - h;
                            O[n] = i(0, 255 * r(1, m)), O[n + 1] = i(0, 255 * r(1, y)), O[n + 2] = i(0, 255 * r(1, C)), O[n + 3] = i(0, 255 * r(1, g))
                        }
                    return {
                        w: F,
                        h: _,
                        rgba: O
                    }
                }(e);
                return i(t.w, t.h, t.rgba)
            }
        }
    }
]);
//# sourceMappingURL=15318.29a18ca13f96a0e7f9ed.js.map