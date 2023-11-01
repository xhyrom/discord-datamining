(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["60499"], {
        340616: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return c
                }
            });
            var n = r("37983"),
                l = r("884691"),
                i = r("132710"),
                a = r.n(i),
                u = r("77078"),
                s = r("812204"),
                d = r("685665"),
                o = r("128259"),
                c = l.memo(function(e) {
                    let {
                        onClick: t,
                        trusted: r,
                        title: i,
                        href: c,
                        children: f,
                        messageId: v,
                        channelId: g,
                        ...E
                    } = e, {
                        analyticsLocations: I
                    } = (0, d.default)(s.default.MASKED_LINK), R = l.useCallback(t => (0, o.handleClick)(e, t, I), [I, e]), h = l.useCallback(e => {
                        1 === e.button && R(e)
                    }, [R]), _ = a.sanitizeUrl(c);
                    return (0, n.jsx)(u.Anchor, {
                        ...E,
                        title: i,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        href: _,
                        onClick: R,
                        onAuxClick: h,
                        children: null != f ? f : i
                    })
                })
        },
        960460: function(e, t, r) {
            "use strict";
            let n;
            r.r(t), r.d(t, {
                applyStaffBuildOverride: function() {
                    return d
                },
                applyPublicBuildOverride: function() {
                    return o
                },
                clearBuildOverride: function() {
                    return c
                },
                getPublicBuildOverrideLink: function() {
                    return f
                }
            });
            var l = r("872717"),
                i = r("271938"),
                a = r("922932"),
                u = r("355025");
            let s = "/__development/build_overrides";
            async function d(e) {
                try {
                    var t;
                    let r = await l.default.put({
                        url: (0, u.getAPIEndpoint)(s),
                        body: {
                            overrides: e,
                            version: u.APP_VERSION
                        },
                        headers: {
                            Authorization: null !== (t = i.default.getToken()) && void 0 !== t ? t : ""
                        },
                        oldFormErrors: !0
                    });
                    return await n(r), r
                } catch (e) {
                    return e
                }
            }
            async function o(e) {
                try {
                    let t = await l.default.put({
                        url: (0, u.getAPIEndpoint)("/__development/link"),
                        body: {
                            payload: e,
                            token: i.default.getToken(),
                            version: u.APP_VERSION
                        },
                        oldFormErrors: !0
                    });
                    return await n(t), t
                } catch (e) {
                    return e
                }
            }
            async function c() {
                let e = await l.default.delete({
                    url: (0, u.getAPIEndpoint)(s),
                    oldFormErrors: !0
                });
                return await n(e), e
            }

            function f(e) {
                var t;
                return l.default.post({
                    url: (0, u.getAPIEndpoint)("/__development/create_build_override_link"),
                    body: e,
                    headers: {
                        Authorization: null !== (t = i.default.getToken()) && void 0 !== t ? t : ""
                    },
                    oldFormErrors: !0
                }).then(e => ({
                    url: e.body.url,
                    error: !1
                }), e => 400 === e.status ? {
                    url: !1,
                    error: e.body
                } : {
                    url: !1,
                    error: "Error making API request (".concat(e.status, ")")
                })
            }
            n = async e => {
                try {
                    await a.default.flushCookies()
                } catch (e) {}
            }
        },
        489740: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                State: function() {
                    return l
                },
                default: function() {
                    return f
                }
            });
            var n, l, i = r("446674"),
                a = r("913144"),
                u = r("355025");
            (n = l || (l = {}))[n.NotResolved = 0] = "NotResolved", n[n.Resolving = 1] = "Resolving", n[n.Resolved = 2] = "Resolved", n[n.Invalid = 3] = "Invalid";
            let s = l.NotResolved,
                d = null,
                o = {};
            class c extends i.default.Store {
                getCurrentBuildOverride() {
                    return s === l.NotResolved && (s = l.Resolving, (0, u.getBuildOverride)().then(e => {
                        a.default.dispatch({
                            type: "CURRENT_BUILD_OVERRIDE_RESOLVED",
                            overrides: e
                        })
                    })), {
                        state: s,
                        overrides: d
                    }
                }
                getBuildOverride(e) {
                    return ! function(e) {
                        if (e in o) return;
                        let t = (0, u.validateURL)(e);
                        if (null == t) {
                            o = {
                                ...o,
                                [e]: {
                                    url: e,
                                    state: l.Invalid
                                }
                            };
                            return
                        }
                        o = {
                            ...o,
                            [e]: {
                                url: e,
                                validatedURL: t.url,
                                payload: String(t.payload),
                                state: l.Resolving
                            }
                        };
                        (0, u.getBuildOverrideMeta)(t.url).then(t => {
                            a.default.dispatch({
                                type: "BUILD_OVERRIDE_RESOLVED",
                                url: e,
                                override: t
                            })
                        })
                    }(e), o[e]
                }
                getBuildOverrides() {
                    return o
                }
            }
            c.displayName = "BuildOverrideStore";
            var f = new c(a.default, {
                BUILD_OVERRIDE_RESOLVED: function(e) {
                    let {
                        url: t,
                        override: r
                    } = e, n = null == r ? l.Invalid : l.Resolved;
                    o = {
                        ...o,
                        [t]: {
                            ...o[t],
                            state: n,
                            override: r
                        }
                    }
                },
                CURRENT_BUILD_OVERRIDE_RESOLVED: function(e) {
                    let {
                        overrides: t
                    } = e;
                    s = l.Resolved, d = t
                }
            })
        },
        161449: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return d
                }
            });
            var n = r("917351"),
                l = r.n(n),
                i = r("271938"),
                a = r("180855"),
                u = r("49111"),
                s = r("782340");

            function d(e, t, r) {
                if (null == e || null == t) return {
                    valid: !1,
                    reason: s.default.Messages.BUILD_OVERRIDE_INVALID
                };
                let {
                    releaseChannel: n,
                    expiresAt: d,
                    validForUserIds: o,
                    allowedVersions: c,
                    targetBuildOverride: f
                } = e, v = Object.keys(f);
                if (0 === l.intersection(v, t).length) {
                    var g;
                    return {
                        valid: !1,
                        reason: s.default.Messages.BUILD_OVERRIDE_INCOMPATIBLE_TARGETS.format({
                            requestedTargets: v.map(e => null !== (g = a.BUILD_OVERRIDE_TARGET_NAMES[e]) && void 0 !== g ? g : "unknown").join(", ")
                        })
                    }
                }
                if (null != n && n !== window.GLOBAL_ENV.RELEASE_CHANNEL) {
                    let e = n === u.PublicReleaseChannels.PTB ? n.toUpperCase() : "".concat(n.charAt(0).toUpperCase()).concat(n.slice(1));
                    return {
                        valid: !1,
                        reason: s.default.Messages.BUILD_OVERRIDE_INCOMPATIBLE_CLIENT.format({
                            releaseChannel: e
                        })
                    }
                }
                if (null != c && (null == r || !c.includes(r))) return {
                    valid: !1,
                    reason: s.default.Messages.BUILD_OVERRIDE_INCOMPATIBLE_CLIENT.format({
                        releaseChannel: c.join(", ")
                    })
                };
                let E = null != d ? new Date(d).getTime() : null;
                return null != E && E < Date.now() ? {
                    valid: !1,
                    reason: s.default.Messages.BUILD_OVERRIDE_EXPIRED
                } : o.length > 0 && !o.includes(i.default.getId()) ? {
                    valid: !1,
                    reason: s.default.Messages.BUILD_OVERRIDE_INVALID_USER
                } : {
                    valid: !0
                }
            }
        },
        451540: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return O
                }
            });
            var n = r("37983"),
                l = r("884691"),
                i = r("414456"),
                a = r.n(i),
                u = r("627445"),
                s = r.n(u),
                d = r("77078"),
                o = r("68238"),
                c = r("83900"),
                f = r("626820"),
                v = r("306160"),
                g = r("701909"),
                E = r("161449"),
                I = r("49111"),
                R = r("782340"),
                h = r("939848");

            function _(e) {
                let {
                    url: t
                } = e, [r, i] = l.useState(!1), u = l.useRef(void 0), s = l.useCallback(() => {
                    !r && ((0, v.copy)(t) && i(!0), u.current = setTimeout(() => i(!1), 2e3))
                }, [t, r]);
                return l.useEffect(() => () => clearTimeout(u.current), []), v.SUPPORTS_COPY ? (0, n.jsxs)(d.Clickable, {
                    className: a(h.copyLink, r ? h.copied : null),
                    onClick: s,
                    children: [(0, n.jsx)(c.default, {
                        className: h.copyLinkIcon
                    }), r ? R.default.Messages.BUILD_OVERRIDE_LINK_COPIED : R.default.Messages.BUILD_OVERRIDE_LINK_COPY]
                }) : null
            }

            function p(e) {
                let {
                    subHead: t,
                    buildDetails: r,
                    buttonColor: i,
                    buttonClick: u,
                    buttonText: s,
                    disabled: o = !1,
                    submitting: c = !1
                } = e;
                return (0, n.jsxs)(l.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        className: h.buildInfo,
                        children: [(0, n.jsx)(d.Text, {
                            variant: "text-sm/medium",
                            className: h.subHead,
                            children: t
                        }), (0, n.jsx)("div", {
                            className: h.buildDetails,
                            children: r
                        })]
                    }), (0, n.jsx)(d.Button, {
                        submitting: c,
                        color: i,
                        onClick: u,
                        className: a(h.button, o ? h.disabledButtonOverride : null),
                        size: h.buttonSize,
                        disabled: o,
                        children: s
                    })]
                })
            }
            var O = e => {
                var t, r, i;
                let {
                    loading: u = !1,
                    currentOverrides: c,
                    linkMeta: v,
                    url: O,
                    applyBuildOverride: B,
                    clearBuildOverride: m
                } = e, [b, D] = l.useState(!1), L = l.useCallback(() => {
                    !b && (D(!0), B().catch(() => D(!1)))
                }, [B, b]), y = l.useCallback(() => {
                    !b && (D(!0), m().catch(() => D(!1)))
                }, [m, b]);
                return (0, n.jsxs)("div", {
                    className: h.wrapper,
                    children: [(t = v, r = O, i = u, (0, n.jsxs)(d.Text, {
                        variant: "text-xs/normal",
                        className: h.titleRegion,
                        children: [(0, n.jsx)("strong", {
                            className: h.title,
                            children: null != t && null != t.releaseChannel ? R.default.Messages.BUILD_OVERRIDE_FOR.format({
                                releaseChannel: t.releaseChannel
                            }) : R.default.Messages.BUILD_OVERRIDE
                        }), (0, n.jsx)(d.Anchor, {
                            className: h.infoLink,
                            href: g.default.getArticleURL(I.HelpdeskArticles.BUILD_OVERRIDE_EMBED),
                            target: "_blank",
                            children: (0, n.jsx)(o.default, {
                                className: h.infoIcon
                            })
                        }), i ? null : (0, n.jsx)(_, {
                            url: r
                        })]
                    })), (0, n.jsxs)("div", {
                        className: h.content,
                        children: [(0, n.jsx)(f.default, {
                            className: h.icon
                        }), u ? (0, n.jsxs)(l.Fragment, {
                            children: [(0, n.jsxs)("div", {
                                className: h.buildInfo,
                                children: [(0, n.jsx)("div", {
                                    className: a(h.barLoader, h.barTitle)
                                }), (0, n.jsx)("div", {
                                    className: h.barLoader
                                })]
                            }), (0, n.jsx)("div", {
                                className: h.buttonLoader
                            })]
                        }) : function(e) {
                            var t, r;
                            let n, l, i, {
                                    currentOverrides: a,
                                    linkMeta: u,
                                    applyBuildOverride: o,
                                    clearBuildOverride: c,
                                    submitting: f
                                } = e,
                                v = (0, E.default)(u, ["discord_web"]);
                            if (!v.valid) return function(e) {
                                return p({
                                    subHead: R.default.Messages.BUILD_OVERRIDE_ISNT_AVAILABLE,
                                    buttonColor: d.Button.Colors.TRANSPARENT,
                                    buttonText: "Invalid",
                                    buildDetails: e,
                                    disabled: !0
                                })
                            }(v.reason);
                            s(null != u, "BuildOverrideEmbed.renderResolved: linkMeta should never be null if resolved");
                            let {
                                discord_web: g
                            } = u.targetBuildOverride;
                            if (s(null != g, "BuildOverrideEmbed.renderResolved: linkMeta.targetBuildOverride.discord_web should never be null if resolved"), t = g, null == (r = a) || null == r.discord_web ? 1 : t.id !== r.discord_web.id || t.type !== r.discord_web.type) l = R.default.Messages.BUILD_OVERRIDE_APPLY, n = o, i = d.Button.Colors.GREEN;
                            else l = R.default.Messages.BUILD_OVERRIDE_CLEAR, n = c, i = d.Button.Colors.RED;
                            return p({
                                subHead: R.default.Messages.BUILD_OVERRIDE_ID,
                                buildDetails: g.id,
                                buttonClick: n,
                                buttonText: l,
                                buttonColor: i,
                                submitting: f
                            })
                        }({
                            currentOverrides: c,
                            linkMeta: v,
                            applyBuildOverride: L,
                            clearBuildOverride: y,
                            submitting: b
                        })]
                    })]
                })
            }
        },
        198700: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return f
                }
            });
            var n = r("37983"),
                l = r("884691"),
                i = r("446674"),
                a = r("960460"),
                u = r("489740"),
                s = r("451540"),
                d = r("425916");
            async function o(e) {
                let t = await (0, a.applyPublicBuildOverride)(e);
                if (200 !== t.status) throw Error("Build override couldn't apply");
                window.location.reload(!0)
            }
            async function c() {
                await (0, a.clearBuildOverride)(), window.location.reload(!0)
            }
            var f = l.memo(function(e) {
                let {
                    url: t
                } = e, r = (0, i.useStateFromStoresObject)([u.default], () => u.default.getCurrentBuildOverride()), a = (0, i.useStateFromStores)([u.default], () => u.default.getBuildOverride(t)), {
                    payload: f,
                    validatedURL: v
                } = a, g = r.state === u.State.Resolving || a.state === u.State.Resolving, E = l.useCallback(() => null == f ? Promise.reject(Error("Invalid override payload")) : ((0, d.addRecentBuildOverride)(a.override, f), o(f)), [f, a]);
                return null != v ? (0, n.jsx)(s.default, {
                    loading: g,
                    linkMeta: a.override,
                    currentOverrides: r.overrides,
                    applyBuildOverride: E,
                    clearBuildOverride: c,
                    url: v
                }) : null
            })
        },
        425916: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                getRecentBuildOverrides: function() {
                    return i
                },
                addRecentBuildOverride: function() {
                    return a
                }
            });
            var n = r("95410");
            let l = "recentBuildOverrides";

            function i() {
                var e;
                let t = null !== (e = n.default.get(l)) && void 0 !== e ? e : [];
                return t.filter(e => null == e.exp || e.exp > Date.now())
            }

            function a(e, t) {
                if (null == t || null == e || null == e.targetBuildOverride.discord_web) return;
                let r = {
                        id: e.targetBuildOverride.discord_web.id,
                        payload: t,
                        exp: Date.parse(e.expiresAt)
                    },
                    a = i(),
                    u = [r, ...a.filter(e => r.id !== e.id)].slice(0, 5);
                n.default.set(l, u)
            }
        },
        758926: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                isLinkTrusted: function() {
                    return i
                }
            });
            var n = r("176309"),
                l = r("128259");

            function i(e) {
                return null != e.target && (0, l.isLinkTrusted)(e.target, null != e.title && "" !== e.title ? e.title : (0, n.astToString)(e.content))
            }
        },
        47677: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return c
                }
            });
            var n = r("37983"),
                l = r("884691"),
                i = r("176309"),
                a = r("340616"),
                u = r("355025"),
                s = r("198700"),
                d = r("128259"),
                o = r("758926");

            function c(e) {
                return {
                    react(t, r, c) {
                        if (e.enableBuildOverrides && (0, u.isBuildOverrideLink)(t.target)) return (0, n.jsx)(l.Fragment, {
                            children: (0, n.jsx)(s.default, {
                                url: t.target
                            }, t.target)
                        }, c.key);
                        let f = r(t.content, c),
                            v = "string" == typeof t.title && 0 !== t.title.length ? t.title : (0, i.astToString)(t.content),
                            g = (null == e ? void 0 : e.mustConfirmExternalLink) ? e => (null == e || e.stopPropagation(), null == e || e.preventDefault(), (0, d.handleClick)({
                                href: t.target,
                                shouldConfirm: !0,
                                messageId: c.messageId,
                                channelId: c.channelId
                            }), null) : void 0;
                        if (c.previewLinkTarget && !(0, o.isLinkTrusted)(t)) {
                            let e = "\n\n(".concat(t.target, ")"),
                                r = v.length + e.length;
                            r > 1024 && (e = "..." + e, v = (v = v.substr(0, 1024 - e.length)).trimEnd()), v += e
                        }
                        return c.noStyleAndInteraction ? (0, n.jsx)("span", {
                            title: v,
                            children: f
                        }, c.key) : (0, n.jsx)(a.default, {
                            title: v,
                            href: t.target,
                            trusted: () => (0, o.isLinkTrusted)(t),
                            onClick: g,
                            messageId: c.messageId,
                            channelId: c.channelId,
                            children: f
                        }, c.key)
                    }
                }
            }
        },
        515557: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                astToString: function() {
                    return l
                },
                flattenAst: function() {
                    return function e(t) {
                        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        if (Array.isArray(t)) {
                            let n = t.length,
                                l = [];
                            for (let i = 0; i < n; i++) ! function(e, t) {
                                if (Array.isArray(t)) {
                                    let {
                                        length: r
                                    } = t;
                                    for (let n = 0; n < r; n++) e.push(t[n]);
                                    return
                                }
                                e.push(t)
                            }(l, e(t[i], r));
                            return l
                        }
                        return (null != t.content && (t.content = e(t.content, t)), null != r && t.type === r.type) ? t.content : t
                    }
                },
                constrainAst: function() {
                    return function e(t) {
                        let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            limit: 200
                        };
                        if (Array.isArray(t)) {
                            let l = t.length;
                            for (let i = 0; i < l; i++) {
                                let l = e(t[i], r);
                                if (l === n) {
                                    t.length = i;
                                    break
                                }
                                t[i] = l
                            }
                        } else if ("text" !== t.type) {
                            if (r.limit -= 1, r.limit <= 0) return n;
                            Array.isArray(t.content) && (t.content = e(t.content, r))
                        }
                        return t
                    }
                }
            });
            let n = {};

            function l(e) {
                return (function e(t) {
                    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                    return Array.isArray(t) ? t.forEach(t => e(t, r)) : "string" == typeof t.content ? r.push(t.content) : null != t.content && e(t.content, r), r
                })(e).join("")
            }
        },
        176309: function(e, t, r) {
            "use strict";
            let n;
            r.r(t), r.d(t, {
                reactParserFor: function() {
                    return i
                },
                astParserFor: function() {
                    return a
                }
            });
            var l = r("515557");
            r.es(l, t), n = r("214434").default;
            let i = n.reactParserFor,
                a = n.astParserFor
        },
        214434: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return u
                }
            });
            var n = r("132710"),
                l = r.n(n),
                i = r("515557");

            function a(e, t, r, n, l) {
                let a;
                return !r && (t += "\n\n"), a = e(t, {
                    inline: r,
                    ...n
                }), a = (0, i.flattenAst)(a), a = (0, i.constrainAst)(a), null != l && (a = l(a, r)), a
            }
            var u = {
                reactParserFor(e) {
                    let t = l.parserFor(e),
                        r = l.reactFor(l.ruleOutput(e, "react"));
                    return function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        return r(a(t, e, n, l, i), l)
                    }
                },
                astParserFor(e) {
                    let t = l.parserFor(e);
                    return function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                            r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
                        return a(t, e, r, n, l)
                    }
                }
            }
        }
    }
]);
//# sourceMappingURL=053dba7559cb20c5c203.js.map