(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["482"], {
        724079: function(e, t, n) {
            "use strict";
            var i = n("590484");

            function o() {
                var e = {},
                    t = 0,
                    n = 0,
                    i = 0;
                return {
                    add: function(o, r) {
                        !r && (r = o, o = 0), o > n ? n = o : o < i && (i = o), !e[o] && (e[o] = []), e[o].push(r), t++
                    },
                    process: function() {
                        for (var t = i; t <= n; t++) {
                            for (var o = e[t], r = 0; r < o.length; r++)(0, o[r])()
                        }
                    },
                    size: function() {
                        return t
                    }
                }
            }
            e.exports = function(e) {
                var t, n = (e = e || {}).reporter,
                    r = i.getOption(e, "async", !0),
                    a = i.getOption(e, "auto", !0);
                a && !r && (n && n.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true."), r = !0);
                var s = o(),
                    l = !1;

                function c() {
                    for (l = !0; s.size();) {
                        var e = s;
                        s = o(), e.process()
                    }
                    l = !1
                }

                function d() {
                    t = u(c)
                }

                function u(e) {
                    return setTimeout(e, 0)
                }
                return {
                    add: function(e, n) {
                        !l && a && r && 0 === s.size() && function() {
                            t = u(c)
                        }(), s.add(e, n)
                    },
                    force: function(e) {
                        !l && (void 0 === e && (e = r), t && (function(e) {
                            clearTimeout(e)
                        }(t), t = null), e ? function() {
                            t = u(c)
                        }() : c())
                    }
                }
            }
        },
        590484: function(e, t, n) {
            "use strict";
            (e.exports = {}).getOption = function(e, t, n) {
                var i = e[t];
                return null == i && void 0 !== n ? n : i
            }
        },
        233193: function(e, t, n) {
            "use strict";
            var i = e.exports = {};
            i.isIE = function(e) {
                var t;
                return (-1 !== (t = navigator.userAgent.toLowerCase()).indexOf("msie") || -1 !== t.indexOf("trident") || -1 !== t.indexOf(" edge/")) && (!e || e === function() {
                    var e, t = 3,
                        n = document.createElement("div"),
                        i = n.getElementsByTagName("i");
                    do n.innerHTML = "<!--[if gt IE " + ++t + "]><i></i><![endif]-->"; while (i[0]);
                    return t > 4 ? t : e
                }())
            }, i.isLegacyOpera = function() {
                return !!window.opera
            }
        },
        133331: function(e, t, n) {
            "use strict";
            (e.exports = {}).forEach = function(e, t) {
                for (var n = 0; n < e.length; n++) {
                    var i = t(e[n]);
                    if (i) return i
                }
            }
        },
        462913: function(e, t, n) {
            "use strict";
            var i = n("233193");
            e.exports = function(e) {
                var t = (e = e || {}).reporter,
                    n = e.batchProcessor,
                    o = e.stateHandler.getState;
                if (!t) throw Error("Missing required dependency: reporter.");

                function r(e) {
                    return o(e).object
                }
                return {
                    makeDetectable: function(r, a, s) {
                        !s && (s = a, a = r, r = null), (r = r || {}).debug;
                        i.isIE(8) ? s(a) : ! function(a, s) {
                            var l, c, d = (l = ["display: block", "position: absolute", "top: 0", "left: 0", "width: 100%", "height: 100%", "border: none", "padding: 0", "margin: 0", "opacity: 0", "z-index: -1000", "pointer-events: none"], c = e.important ? " !important; " : "; ", (l.join(c) + c).trim()),
                                u = !1,
                                f = window.getComputedStyle(a),
                                h = a.offsetWidth,
                                p = a.offsetHeight;

                            function m() {
                                function e() {
                                    if ("static" === f.position) {
                                        a.style.setProperty("position", "relative", r.important ? "important" : "");
                                        var e = function(e, t, n, i) {
                                            var o = n[i];
                                            if ("auto" !== o && "0" !== o.replace(/[^-\d\.]/g, "")) e.warn("An element that is positioned static has style." + i + "=" + o + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + i + " will be set to 0. Element: ", t), t.style.setProperty(i, "0", r.important ? "important" : "")
                                        };
                                        e(t, a, f, "top"), e(t, a, f, "right"), e(t, a, f, "bottom"), e(t, a, f, "left")
                                    }
                                }
                                "" !== f.position && (e(f), u = !0);
                                var n = document.createElement("object");
                                n.style.cssText = d, n.tabIndex = -1, n.type = "text/html", n.setAttribute("aria-hidden", "true"), n.onload = function() {
                                    !u && e();
                                    ! function e(t, n) {
                                        if (!t.contentDocument) {
                                            var i = o(t);
                                            i.checkForObjectDocumentTimeoutId && window.clearTimeout(i.checkForObjectDocumentTimeoutId), i.checkForObjectDocumentTimeoutId = setTimeout(function() {
                                                i.checkForObjectDocumentTimeoutId = 0, e(t, n)
                                            }, 100);
                                            return
                                        }
                                        n(t.contentDocument)
                                    }(this, function(e) {
                                        s(a)
                                    })
                                }, !i.isIE() && (n.data = "about:blank"), o(a) && (a.appendChild(n), o(a).object = n, i.isIE() && (n.data = "about:blank"))
                            }
                            o(a).startSize = {
                                width: h,
                                height: p
                            }, n ? n.add(m) : m()
                        }(a, s)
                    },
                    addListener: function(e, t) {
                        function n() {
                            t(e)
                        }
                        if (i.isIE(8)) o(e).object = {
                            proxy: n
                        }, e.attachEvent("onresize", n);
                        else {
                            var r = function(e) {
                                return o(e).object
                            }(e);
                            if (!r) throw Error("Element is not detectable by this strategy.");
                            r.contentDocument.defaultView.addEventListener("resize", n)
                        }
                    },
                    uninstall: function(e) {
                        if (!!o(e)) {
                            var t = o(e).object;
                            t && (i.isIE(8) ? e.detachEvent("onresize", t.proxy) : e.removeChild(t), o(e).checkForObjectDocumentTimeoutId && window.clearTimeout(o(e).checkForObjectDocumentTimeoutId), delete o(e).object)
                        }
                    }
                }
            }
        },
        178010: function(e, t, n) {
            "use strict";
            var i = n("133331").forEach;
            e.exports = function(e) {
                var t = (e = e || {}).reporter,
                    n = e.batchProcessor,
                    o = e.stateHandler.getState;
                e.stateHandler.hasState;
                var r = e.idHandler;
                if (!n) throw Error("Missing required dependency: batchProcessor");
                if (!t) throw Error("Missing required dependency: reporter.");
                var a = function() {
                        var e = document.createElement("div");
                        e.style.cssText = c(["position: absolute", "width: 1000px", "height: 1000px", "visibility: hidden", "margin: 0", "padding: 0"]);
                        var t = document.createElement("div");
                        t.style.cssText = c(["position: absolute", "width: 500px", "height: 500px", "overflow: scroll", "visibility: none", "top: -1500px", "left: -1500px", "visibility: hidden", "margin: 0", "padding: 0"]), t.appendChild(e), document.body.insertBefore(t, document.body.firstChild);
                        var n = 500 - t.clientWidth,
                            i = 500 - t.clientHeight;
                        return document.body.removeChild(t), {
                            width: n,
                            height: i
                        }
                    }(),
                    s = "erd_scroll_detection_container";

                function l(e) {
                    (function(e, t, n) {
                        if (!e.getElementById(t)) {
                            var i, o, r, a = n + "_animation",
                                s = "/* Created by the element-resize-detector library. */\n";
                            s += "." + n + " > div::-webkit-scrollbar { " + c(["display: none"]) + " }\n\n" + ("." + n + "_animation_active { " + c(["-webkit-animation-duration: 0.1s", "animation-duration: 0.1s", "-webkit-animation-name: " + a, "animation-name: " + a]) + " }\n") + ("@-webkit-keyframes " + a + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n") + ("@keyframes " + a + " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }"), i = s, o = o || function(t) {
                                e.head.appendChild(t)
                            }, (r = e.createElement("style")).innerHTML = i, r.id = t, o(r)
                        }
                    })(e, "erd_scroll_detection_scrollbar_style", s)
                }

                function c(t) {
                    var n = e.important ? " !important; " : "; ";
                    return (t.join(n) + n).trim()
                }
                l(window.document);

                function d(e, n, i) {
                    if (e.addEventListener) e.addEventListener(n, i);
                    else {
                        if (!e.attachEvent) return t.error("[scroll] Don't know how to add event listeners.");
                        e.attachEvent("on" + n, i)
                    }
                }

                function u(e, n, i) {
                    if (e.removeEventListener) e.removeEventListener(n, i);
                    else {
                        if (!e.detachEvent) return t.error("[scroll] Don't know how to remove event listeners.");
                        e.detachEvent("on" + n, i)
                    }
                }

                function f(e) {
                    return o(e).container.childNodes[0].childNodes[0].childNodes[0]
                }

                function h(e) {
                    return o(e).container.childNodes[0].childNodes[0].childNodes[1]
                }
                return {
                    makeDetectable: function(e, l, u) {
                        var p, m, g;

                        function v() {
                            if (e.debug) {
                                var n = Array.prototype.slice.call(arguments);
                                if (n.unshift(r.get(l), "Scroll: "), t.log.apply) t.log.apply(null, n);
                                else
                                    for (var i = 0; i < n.length; i++) t.log(n[i])
                            }
                        }!u && (u = l, l = e, e = null), e = e || {};

                        function b(e) {
                            var t = o(e).container.childNodes[0],
                                n = window.getComputedStyle(t);
                            return !n.width || -1 === n.width.indexOf("px")
                        }

                        function y() {
                            var e = window.getComputedStyle(l),
                                t = {};
                            return t.position = e.position, t.width = l.offsetWidth, t.height = l.offsetHeight, t.top = e.top, t.right = e.right, t.bottom = e.bottom, t.left = e.left, t.widthCSS = e.width, t.heightCSS = e.height, t
                        }

                        function w() {
                            if (v("storeStyle invoked."), !o(l)) {
                                v("Aborting because element has been uninstalled");
                                return
                            }
                            var e = y();
                            o(l).style = e
                        }

                        function E(e, t, n) {
                            o(e).lastWidth = t, o(e).lastHeight = n
                        }

                        function x() {
                            return 2 * a.width + 1
                        }

                        function S() {
                            return 2 * a.height + 1
                        }

                        function k(e) {
                            return e + 10 + x()
                        }

                        function z(e) {
                            return e + 10 + S()
                        }

                        function D(e, t, n) {
                            var i = f(e),
                                o = h(e),
                                r = t + 10 + x(),
                                a = n + 10 + S(),
                                s = 2 * t + x(),
                                l = 2 * n + S();
                            i.scrollLeft = r, i.scrollTop = a, o.scrollLeft = s, o.scrollTop = l
                        }

                        function A() {
                            var e = o(l).container;
                            if (!e) {
                                (e = document.createElement("div")).className = s, e.style.cssText = c(["visibility: hidden", "display: inline", "width: 0px", "height: 0px", "z-index: -1", "overflow: hidden", "margin: 0", "padding: 0"]), o(l).container = e, t = e, t.className += " " + s + "_animation_active", l.appendChild(e);
                                var t, n = function() {
                                    o(l).onRendered && o(l).onRendered()
                                };
                                d(e, "animationstart", n), o(l).onAnimationStart = n
                            }
                            return e
                        }

                        function O() {
                            if (v("Injecting elements"), !o(l)) {
                                v("Aborting because element has been uninstalled");
                                return
                            }! function() {
                                var n = o(l).style;
                                if ("static" === n.position) {
                                    l.style.setProperty("position", "relative", e.important ? "important" : "");
                                    var i = function(e, t, n, i) {
                                        var o = n[i];
                                        if ("auto" !== o && "0" !== o.replace(/[^-\d\.]/g, "")) e.warn("An element that is positioned static has style." + i + "=" + o + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + i + " will be set to 0. Element: ", t), t.style[i] = 0
                                    };
                                    i(t, l, n, "top"), i(t, l, n, "right"), i(t, l, n, "bottom"), i(t, l, n, "left")
                                }
                            }();
                            var n, i, r, u, f = o(l).container;
                            !f && (f = A());
                            var h = a.width,
                                p = a.height,
                                m = c(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%", "left: 0px", "top: 0px"]);
                            var g = c(["position: absolute", "flex: none", "overflow: hidden", "z-index: -1", "visibility: hidden"].concat((n = -(1 + h), i = -(1 + p), r = -p, ["left: " + (n = n ? n + "px" : "0"), "top: " + (i = i ? i + "px" : "0"), "right: " + (u = (u = -h) ? u + "px" : "0"), "bottom: " + (r = r ? r + "px" : "0")]))),
                                b = c(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]),
                                y = c(["position: absolute", "flex: none", "overflow: scroll", "z-index: -1", "visibility: hidden", "width: 100%", "height: 100%"]),
                                w = c(["position: absolute", "left: 0", "top: 0"]),
                                E = c(["position: absolute", "width: 200%", "height: 200%"]),
                                x = document.createElement("div"),
                                S = document.createElement("div"),
                                k = document.createElement("div"),
                                z = document.createElement("div"),
                                D = document.createElement("div"),
                                O = document.createElement("div");

                            function T() {
                                var e = o(l);
                                e && e.onExpand ? e.onExpand() : v("Aborting expand scroll handler: element has been uninstalled")
                            }

                            function C() {
                                var e = o(l);
                                e && e.onShrink ? e.onShrink() : v("Aborting shrink scroll handler: element has been uninstalled")
                            }
                            x.dir = "ltr", x.style.cssText = m, x.className = s, S.className = s, S.style.cssText = g, k.style.cssText = b, z.style.cssText = w, D.style.cssText = y, O.style.cssText = E, k.appendChild(z), D.appendChild(O), S.appendChild(k), S.appendChild(D), x.appendChild(S), f.appendChild(x), d(k, "scroll", T), d(D, "scroll", C), o(l).onExpandScroll = T, o(l).onShrinkScroll = C
                        }

                        function T() {
                            function a(t, n, i) {
                                var o = f(t).childNodes[0],
                                    r = n + 10 + x(),
                                    a = i + 10 + S();
                                o.style.setProperty("width", r + "px", e.important ? "important" : ""), o.style.setProperty("height", a + "px", e.important ? "important" : "")
                            }

                            function s(i) {
                                var s = l.offsetWidth,
                                    d = l.offsetHeight,
                                    u = s !== o(l).lastWidth || d !== o(l).lastHeight;
                                v("Storing current size", s, d), E(l, s, d), n.add(0, function() {
                                    if (u) {
                                        if (!o(l)) {
                                            v("Aborting because element has been uninstalled");
                                            return
                                        }
                                        if (!c()) {
                                            v("Aborting because element container has not been initialized");
                                            return
                                        }
                                        if (e.debug) {
                                            var n = l.offsetWidth,
                                                i = l.offsetHeight;
                                            (n !== s || i !== d) && t.warn(r.get(l), "Scroll: Size changed before updating detector elements.")
                                        }
                                        a(l, s, d)
                                    }
                                }), n.add(1, function() {
                                    if (!o(l)) {
                                        v("Aborting because element has been uninstalled");
                                        return
                                    }
                                    if (!c()) {
                                        v("Aborting because element container has not been initialized");
                                        return
                                    }
                                    D(l, s, d)
                                }), u && i && n.add(2, function() {
                                    if (!o(l)) {
                                        v("Aborting because element has been uninstalled");
                                        return
                                    }
                                    if (!c()) {
                                        v("Aborting because element container has not been initialized");
                                        return
                                    }
                                    i()
                                })
                            }

                            function c() {
                                return !!o(l).container
                            }

                            function d() {
                                v("notifyListenersIfNeeded invoked");
                                var e = o(l);
                                return void 0 === o(l).lastNotifiedWidth && e.lastWidth === e.startSize.width && e.lastHeight === e.startSize.height ? v("Not notifying: Size is the same as the start size, and there has been no notification yet.") : e.lastWidth === e.lastNotifiedWidth && e.lastHeight === e.lastNotifiedHeight ? v("Not notifying: Size already notified") : void(v("Current size not notified, notifying..."), e.lastNotifiedWidth = e.lastWidth, e.lastNotifiedHeight = e.lastHeight, i(o(l).listeners, function(e) {
                                    e(l)
                                }))
                            }

                            function u() {
                                if (v("Scroll detected."), b(l)) {
                                    v("Scroll event fired while unrendered. Ignoring...");
                                    return
                                }
                                s(d)
                            }
                            if (v("registerListenersAndPositionElements invoked."), !o(l)) {
                                v("Aborting because element has been uninstalled");
                                return
                            }
                            o(l).onRendered = function() {
                                if (v("startanimation triggered."), b(l)) {
                                    v("Ignoring since element is still unrendered...");
                                    return
                                }
                                v("Element rendered.");
                                var e = f(l),
                                    t = h(l);
                                (0 === e.scrollLeft || 0 === e.scrollTop || 0 === t.scrollLeft || 0 === t.scrollTop) && (v("Scrollbars out of sync. Updating detector elements..."), s(d))
                            }, o(l).onExpand = u, o(l).onShrink = u;
                            var p = o(l).style;
                            a(l, p.width, p.height)
                        }

                        function C() {
                            if (v("finalizeDomMutation invoked."), !o(l)) {
                                v("Aborting because element has been uninstalled");
                                return
                            }
                            var e = o(l).style;
                            E(l, e.width, e.height), D(l, e.width, e.height)
                        }

                        function N() {
                            u(l)
                        }

                        function j() {
                            var e;
                            v("Installing..."), o(l).listeners = [], e = y(), o(l).startSize = {
                                width: e.width,
                                height: e.height
                            }, v("Element start size", o(l).startSize), n.add(0, w), n.add(1, O), n.add(2, T), n.add(3, C), n.add(4, N)
                        }
                        if (v("Making detectable..."), (g = (m = p = l).getRootNode && m.getRootNode().contains(m), (m === m.ownerDocument.body || m.ownerDocument.body.contains(m) || g) && null !== window.getComputedStyle(p)) ? 1 : 0) j();
                        else v("Element is detached"), A(), v("Waiting until element is attached..."), o(l).onRendered = function() {
                            v("Element is now attached"), j()
                        }
                    },
                    addListener: function(e, t) {
                        if (!o(e).listeners.push) throw Error("Cannot add listener to an element that is not detectable.");
                        o(e).listeners.push(t)
                    },
                    uninstall: function(e) {
                        var t = o(e);
                        t && (t.onExpandScroll && u(f(e), "scroll", t.onExpandScroll), t.onShrinkScroll && u(h(e), "scroll", t.onShrinkScroll), t.onAnimationStart && u(t.container, "animationstart", t.onAnimationStart), t.container && e.removeChild(t.container))
                    },
                    initDocument: l
                }
            }
        },
        664621: function(e, t, n) {
            "use strict";
            var i = n("133331").forEach,
                o = n("241075"),
                r = n("501174"),
                a = n("528049"),
                s = n("793274"),
                l = n("705116"),
                c = n("233193"),
                d = n("724079"),
                u = n("574394"),
                f = n("462913"),
                h = n("178010");

            function p(e) {
                return Array.isArray(e) || void 0 !== e.length
            }

            function m(e) {
                if (Array.isArray(e)) return e;
                var t = [];
                return i(e, function(e) {
                    t.push(e)
                }), t
            }

            function g(e) {
                return e && 1 === e.nodeType
            }

            function v(e, t, n) {
                var i = e[t];
                return null == i && void 0 !== n ? n : i
            }
            e.exports = function(e) {
                if ((e = e || {}).idHandler) t = {
                    get: function(t) {
                        return e.idHandler.get(t, !0)
                    },
                    set: e.idHandler.set
                };
                else {
                    var t, n;
                    t = s({
                        idGenerator: a(),
                        stateHandler: u
                    })
                }
                var b = e.reporter;
                !b && (b = l(!1 === b));
                var y = v(e, "batchProcessor", d({
                        reporter: b
                    })),
                    w = {};
                w.callOnAdd = !!v(e, "callOnAdd", !0), w.debug = !!v(e, "debug", !1);
                var E = r(t),
                    x = o({
                        stateHandler: u
                    }),
                    S = v(e, "strategy", "object"),
                    k = v(e, "important", !1),
                    z = {
                        reporter: b,
                        batchProcessor: y,
                        stateHandler: u,
                        idHandler: t,
                        important: k
                    };
                if ("scroll" === S && (c.isLegacyOpera() ? (b.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy."), S = "object") : c.isIE(9) && (b.warn("Scroll strategy is not supported on IE9. Changing to object strategy."), S = "object")), "scroll" === S) n = h(z);
                else if ("object" === S) n = f(z);
                else throw Error("Invalid strategy name: " + S);
                var D = {};
                return {
                    listenTo: function(e, o, r) {
                        function a(e) {
                            i(E.get(e), function(t) {
                                t(e)
                            })
                        }

                        function s(e, t, n) {
                            E.add(t, n), e && n(t)
                        }
                        if (!r && (r = o, o = e, e = {}), !o) throw Error("At least one element required.");
                        if (!r) throw Error("Listener required.");
                        if (g(o)) o = [o];
                        else {
                            if (!p(o)) return b.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
                            o = m(o)
                        }
                        var l = 0,
                            c = v(e, "callOnAdd", w.callOnAdd),
                            d = v(e, "onReady", function() {}),
                            f = v(e, "debug", w.debug);
                        i(o, function(e) {
                            !u.getState(e) && (u.initState(e), t.set(e));
                            var h = t.get(e);
                            if (f && b.log("Attaching listener to element", h, e), !x.isDetectable(e)) {
                                if (f && b.log(h, "Not detectable."), x.isBusy(e)) {
                                    f && b.log(h, "System busy making it detectable"), s(c, e, r), D[h] = D[h] || [], D[h].push(function() {
                                        ++l === o.length && d()
                                    });
                                    return
                                }
                                return f && b.log(h, "Making detectable..."), x.markBusy(e, !0), n.makeDetectable({
                                    debug: f,
                                    important: k
                                }, e, function(e) {
                                    if (f && b.log(h, "onElementDetectable"), u.getState(e)) {
                                        x.markAsDetectable(e), x.markBusy(e, !1), n.addListener(e, a), s(c, e, r);
                                        var t = u.getState(e);
                                        if (t && t.startSize) {
                                            var p = e.offsetWidth,
                                                m = e.offsetHeight;
                                            (t.startSize.width !== p || t.startSize.height !== m) && a(e)
                                        }
                                        D[h] && i(D[h], function(e) {
                                            e()
                                        })
                                    } else f && b.log(h, "Element uninstalled before being detectable.");
                                    delete D[h], ++l === o.length && d()
                                })
                            }
                            f && b.log(h, "Already detecable, adding listener."), s(c, e, r), l++
                        }), l === o.length && d()
                    },
                    removeListener: E.removeListener,
                    removeAllListeners: E.removeAllListeners,
                    uninstall: function(e) {
                        if (!e) return b.error("At least one element is required.");
                        if (g(e)) e = [e];
                        else {
                            if (!p(e)) return b.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
                            e = m(e)
                        }
                        i(e, function(e) {
                            E.removeAllListeners(e), n.uninstall(e), u.cleanState(e)
                        })
                    },
                    initDocument: function(e) {
                        n.initDocument && n.initDocument(e)
                    }
                }
            }
        },
        241075: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t = e.stateHandler.getState;
                return {
                    isDetectable: function(e) {
                        var n = t(e);
                        return n && !!n.isDetectable
                    },
                    markAsDetectable: function(e) {
                        t(e).isDetectable = !0
                    },
                    isBusy: function(e) {
                        return !!t(e).busy
                    },
                    markBusy: function(e, n) {
                        t(e).busy = !!n
                    }
                }
            }
        },
        528049: function(e, t, n) {
            "use strict";
            e.exports = function() {
                var e = 1;
                return {
                    generate: function() {
                        return e++
                    }
                }
            }
        },
        793274: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t = e.idGenerator,
                    n = e.stateHandler.getState;
                return {
                    get: function(e) {
                        var t = n(e);
                        return t && void 0 !== t.id ? t.id : null
                    },
                    set: function(e) {
                        var i = n(e);
                        if (!i) throw Error("setId required the element to have a resize detection state.");
                        var o = t.generate();
                        return i.id = o, o
                    }
                }
            }
        },
        501174: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                var t = {};

                function n(n) {
                    var i = e.get(n);
                    return void 0 === i ? [] : t[i] || []
                }
                return {
                    get: n,
                    add: function(n, i) {
                        var o = e.get(n);
                        !t[o] && (t[o] = []), t[o].push(i)
                    },
                    removeListener: function(e, t) {
                        for (var i = n(e), o = 0, r = i.length; o < r; ++o)
                            if (i[o] === t) {
                                i.splice(o, 1);
                                break
                            }
                    },
                    removeAllListeners: function(e) {
                        var t = n(e);
                        t && (t.length = 0)
                    }
                }
            }
        },
        705116: function(e, t, n) {
            "use strict";
            e.exports = function(e) {
                function t() {}
                var n = {
                    log: t,
                    warn: t,
                    error: t
                };
                if (!e && window.console) {
                    var i = function(e, t) {
                        e[t] = function() {
                            var e = console[t];
                            if (e.apply) e.apply(console, arguments);
                            else
                                for (var n = 0; n < arguments.length; n++) e(arguments[n])
                        }
                    };
                    i(n, "log"), i(n, "warn"), i(n, "error")
                }
                return n
            }
        },
        574394: function(e, t, n) {
            "use strict";
            var i = "_erd";

            function o(e) {
                return e[i]
            }
            e.exports = {
                initState: function(e) {
                    return e[i] = {},
                        function(e) {
                            return e[i]
                        }(e)
                },
                getState: o,
                cleanState: function(e) {
                    delete e[i]
                }
            }
        },
        308723: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                    }
                    return e
                },
                o = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var i = t[n];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
                        }
                    }
                    return function(t, n, i) {
                        return n && e(t.prototype, n), i && e(t, i), t
                    }
                }(),
                r = n("884691"),
                a = u(r),
                s = u(n("416037")),
                l = u(n("817736")),
                c = u(n("664621")),
                d = u(n("627445"));

            function u(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var f = function(e) {
                function t() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                    }(this, t);
                    var e = function(e, t) {
                        if (!e) throw ReferenceError("this hasn't been initialised - super() hasn't been called");
                        return t && ("object" == typeof t || "function" == typeof t) ? t : e
                    }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
                    return e.state = {
                        initiated: !1
                    }, e.onResize = e.onResize.bind(e), e
                }
                return ! function(e, t) {
                    if ("function" != typeof t && null !== t) throw TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), o(t, null, [{
                    key: "getDomNodeDimensions",
                    value: function(e) {
                        var t = e.getBoundingClientRect();
                        return {
                            top: t.top,
                            right: t.right,
                            bottom: t.bottom,
                            left: t.left,
                            width: t.width,
                            height: t.height
                        }
                    }
                }]), o(t, [{
                    key: "componentDidMount",
                    value: function() {
                        this.parentNode = l.default.findDOMNode(this).parentNode, this.elementResizeDetector = (0, c.default)({
                            strategy: "scroll",
                            callOnAdd: !1
                        }), this.elementResizeDetector.listenTo(this.parentNode, this.onResize), this.componentIsMounted = !0, this.onResize()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.componentIsMounted = !1, this.elementResizeDetector.uninstall(this.parentNode)
                    }
                }, {
                    key: "onResize",
                    value: function() {
                        var e = t.getDomNodeDimensions(this.parentNode);
                        this.componentIsMounted && this.setState(i({
                            initiated: !0
                        }, e))
                    }
                }, {
                    key: "render",
                    value: function() {
                        if ((0, d.default)(this.props.children, "Expected children to be one of function or React.Element"), !this.state.initiated) return a.default.createElement("div", null);
                        if ("function" == typeof this.props.children) {
                            var e = this.props.children(this.state);
                            return e && r.Children.only(e)
                        }
                        return r.Children.only(a.default.cloneElement(this.props.children, this.state))
                    }
                }]), t
            }(r.Component);
            f.propTypes = {
                children: s.default.oneOfType([s.default.element, s.default.func]).isRequired
            }, t.default = f
        }
    }
]);
//# sourceMappingURL=0b013f5248a9685aab50.js.map