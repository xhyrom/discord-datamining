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
                s = r("77078"),
                u = r("812204"),
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
                        ...C
                    } = e, {
                        analyticsLocations: h
                    } = (0, d.default)(u.default.MASKED_LINK), E = l.useCallback(t => (0, o.handleClick)(e, t, h), [h, e]), I = l.useCallback(e => {
                        1 === e.button && E(e)
                    }, [E]), R = a.sanitizeUrl(c);
                    return (0, n.jsx)(s.Anchor, {
                        ...C,
                        title: i,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        href: R,
                        onClick: E,
                        onAuxClick: I,
                        children: null != f ? f : i
                    })
                })
        },
        225389: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                CircleInformationIcon: function() {
                    return a
                }
            });
            var n = r("37983");
            r("884691");
            var l = r("669491"),
                i = r("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: r = 24,
                    secondaryColor: a = "transparent",
                    secondaryColorClass: s = "",
                    color: u = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: d = "",
                    ...o
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, i.default)(o),
                    width: t,
                    height: r,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, n.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof a ? a : a.css,
                        className: s
                    }), (0, n.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM13.5 7.25C13.5 7.94036 12.9404 8.5 12.25 8.5C11.5596 8.5 11 7.94036 11 7.25C11 6.55964 11.5596 6 12.25 6C12.9404 6 13.5 6.55964 13.5 7.25ZM12.7278 11.2095C12.8435 10.6695 12.4996 10.1379 11.9595 10.0222C11.4195 9.90648 10.8879 10.2504 10.7722 10.7905L9.72984 15.6548C9.36091 17.3765 10.6734 19 12.4342 19C13.0106 19 13.5726 18.8199 14.0417 18.4848L14.2812 18.3137C14.7307 17.9927 14.8347 17.3682 14.5137 16.9188C14.1927 16.4693 13.5682 16.3653 13.1188 16.6863L12.8792 16.8574C12.7493 16.9501 12.5937 17 12.4342 17C11.9467 17 11.5833 16.5505 11.6854 16.0739L12.7278 11.2095Z",
                        fill: "string" == typeof u ? u : u.css,
                        className: d
                    })]
                })
            }
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
                s = r("355025");
            let u = "/__development/build_overrides";
            async function d(e) {
                try {
                    var t;
                    let r = await l.default.put({
                        url: (0, s.getAPIEndpoint)(u),
                        body: {
                            overrides: e,
                            version: s.APP_VERSION
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
                        url: (0, s.getAPIEndpoint)("/__development/link"),
                        body: {
                            payload: e,
                            token: i.default.getToken(),
                            version: s.APP_VERSION
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
                    url: (0, s.getAPIEndpoint)(u),
                    oldFormErrors: !0
                });
                return await n(e), e
            }

            function f(e) {
                var t;
                return l.default.post({
                    url: (0, s.getAPIEndpoint)("/__development/create_build_override_link"),
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
                s = r("355025");
            (n = l || (l = {}))[n.NotResolved = 0] = "NotResolved", n[n.Resolving = 1] = "Resolving", n[n.Resolved = 2] = "Resolved", n[n.Invalid = 3] = "Invalid";
            let u = 0,
                d = null,
                o = {};
            class c extends i.default.Store {
                getCurrentBuildOverride() {
                    return 0 === u && (u = 1, (0, s.getBuildOverride)().then(e => {
                        a.default.dispatch({
                            type: "CURRENT_BUILD_OVERRIDE_RESOLVED",
                            overrides: e
                        })
                    })), {
                        state: u,
                        overrides: d
                    }
                }
                getBuildOverride(e) {
                    return ! function(e) {
                        if (e in o) return;
                        let t = (0, s.validateURL)(e);
                        if (null == t) {
                            o = {
                                ...o,
                                [e]: {
                                    url: e,
                                    state: 3
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
                                state: 1
                            }
                        };
                        (0, s.getBuildOverrideMeta)(t.url).then(t => {
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
                    } = e;
                    o = {
                        ...o,
                        [t]: {
                            ...o[t],
                            state: null == r ? 3 : 2,
                            override: r
                        }
                    }
                },
                CURRENT_BUILD_OVERRIDE_RESOLVED: function(e) {
                    let {
                        overrides: t
                    } = e;
                    u = 2, d = t
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
                s = r("49111"),
                u = r("782340");

            function d(e, t, r) {
                if (null == e || null == t) return {
                    valid: !1,
                    reason: u.default.Messages.BUILD_OVERRIDE_INVALID
                };
                let {
                    releaseChannel: n,
                    expiresAt: d,
                    validForUserIds: o,
                    allowedVersions: c,
                    targetBuildOverride: f
                } = e, v = Object.keys(f);
                if (0 === l.intersection(v, t).length) return {
                    valid: !1,
                    reason: u.default.Messages.BUILD_OVERRIDE_INCOMPATIBLE_TARGETS.format({
                        requestedTargets: v.map(e => {
                            var t;
                            return null !== (t = a.BUILD_OVERRIDE_TARGET_NAMES[e]) && void 0 !== t ? t : "unknown"
                        }).join(", ")
                    })
                };
                if (null != n && n !== window.GLOBAL_ENV.RELEASE_CHANNEL) {
                    let e = n === s.PublicReleaseChannels.PTB ? n.toUpperCase() : "".concat(n.charAt(0).toUpperCase()).concat(n.slice(1));
                    return {
                        valid: !1,
                        reason: u.default.Messages.BUILD_OVERRIDE_INCOMPATIBLE_CLIENT.format({
                            releaseChannel: e
                        })
                    }
                }
                if (null != c && (null == r || !c.includes(r))) return {
                    valid: !1,
                    reason: u.default.Messages.BUILD_OVERRIDE_INCOMPATIBLE_CLIENT.format({
                        releaseChannel: c.join(", ")
                    })
                };
                let g = null != d ? new Date(d).getTime() : null;
                return null != g && g < Date.now() ? {
                    valid: !1,
                    reason: u.default.Messages.BUILD_OVERRIDE_EXPIRED
                } : o.length > 0 && !o.includes(i.default.getId()) ? {
                    valid: !1,
                    reason: u.default.Messages.BUILD_OVERRIDE_INVALID_USER
                } : {
                    valid: !0
                }
            }
        },
        451540: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return L
                }
            }), r("222007");
            var n = r("37983"),
                l = r("884691"),
                i = r("414456"),
                a = r.n(i),
                s = r("627445"),
                u = r.n(s),
                d = r("77078"),
                o = r("68238"),
                c = r("83900"),
                f = r("626820"),
                v = r("306160"),
                g = r("701909"),
                C = r("161449"),
                h = r("49111"),
                E = r("782340"),
                I = r("939848");

            function R(e) {
                let {
                    url: t
                } = e, [r, i] = l.useState(!1), s = l.useRef(void 0), u = l.useCallback(() => {
                    !r && ((0, v.copy)(t) && i(!0), s.current = setTimeout(() => i(!1), 2e3))
                }, [t, r]);
                return l.useEffect(() => () => clearTimeout(s.current), []), v.SUPPORTS_COPY ? (0, n.jsxs)(d.Clickable, {
                    className: a(I.copyLink, r ? I.copied : null),
                    onClick: u,
                    children: [(0, n.jsx)(c.default, {
                        className: I.copyLinkIcon
                    }), r ? E.default.Messages.BUILD_OVERRIDE_LINK_COPIED : E.default.Messages.BUILD_OVERRIDE_LINK_COPY]
                }) : null
            }

            function p(e) {
                let {
                    subHead: t,
                    buildDetails: r,
                    buttonColor: i,
                    buttonClick: s,
                    buttonText: u,
                    disabled: o = !1,
                    submitting: c = !1
                } = e;
                return (0, n.jsxs)(l.Fragment, {
                    children: [(0, n.jsxs)("div", {
                        className: I.buildInfo,
                        children: [(0, n.jsx)(d.Text, {
                            variant: "text-sm/medium",
                            className: I.subHead,
                            children: t
                        }), (0, n.jsx)("div", {
                            className: I.buildDetails,
                            children: r
                        })]
                    }), (0, n.jsx)(d.Button, {
                        submitting: c,
                        color: i,
                        onClick: s,
                        className: a(I.button, o ? I.disabledButtonOverride : null),
                        size: I.buttonSize,
                        disabled: o,
                        children: u
                    })]
                })
            }
            var L = e => {
                var t, r, i;
                let {
                    loading: s = !1,
                    currentOverrides: c,
                    linkMeta: v,
                    url: L,
                    applyBuildOverride: m,
                    clearBuildOverride: _
                } = e, [O, B] = l.useState(!1), D = l.useCallback(() => {
                    !O && (B(!0), m().catch(() => B(!1)))
                }, [m, O]), b = l.useCallback(() => {
                    !O && (B(!0), _().catch(() => B(!1)))
                }, [_, O]);
                return (0, n.jsxs)("div", {
                    className: I.wrapper,
                    children: [(t = v, r = L, i = s, (0, n.jsxs)(d.Text, {
                        variant: "text-xs/normal",
                        className: I.titleRegion,
                        children: [(0, n.jsx)("strong", {
                            className: I.title,
                            children: null != t && null != t.releaseChannel ? E.default.Messages.BUILD_OVERRIDE_FOR.format({
                                releaseChannel: t.releaseChannel
                            }) : E.default.Messages.BUILD_OVERRIDE
                        }), (0, n.jsx)(d.Anchor, {
                            className: I.infoLink,
                            href: g.default.getArticleURL(h.HelpdeskArticles.BUILD_OVERRIDE_EMBED),
                            target: "_blank",
                            children: (0, n.jsx)(o.default, {
                                className: I.infoIcon
                            })
                        }), i ? null : (0, n.jsx)(R, {
                            url: r
                        })]
                    })), (0, n.jsxs)("div", {
                        className: I.content,
                        children: [(0, n.jsx)(f.default, {
                            className: I.icon
                        }), s ? (0, n.jsxs)(l.Fragment, {
                            children: [(0, n.jsxs)("div", {
                                className: I.buildInfo,
                                children: [(0, n.jsx)("div", {
                                    className: a(I.barLoader, I.barTitle)
                                }), (0, n.jsx)("div", {
                                    className: I.barLoader
                                })]
                            }), (0, n.jsx)("div", {
                                className: I.buttonLoader
                            })]
                        }) : function(e) {
                            var t, r;
                            let n, l, i, {
                                    currentOverrides: a,
                                    linkMeta: s,
                                    applyBuildOverride: o,
                                    clearBuildOverride: c,
                                    submitting: f
                                } = e,
                                v = (0, C.default)(s, ["discord_web"]);
                            if (!v.valid) return function(e) {
                                return p({
                                    subHead: E.default.Messages.BUILD_OVERRIDE_ISNT_AVAILABLE,
                                    buttonColor: d.Button.Colors.TRANSPARENT,
                                    buttonText: "Invalid",
                                    buildDetails: e,
                                    disabled: !0
                                })
                            }(v.reason);
                            u(null != s, "BuildOverrideEmbed.renderResolved: linkMeta should never be null if resolved");
                            let {
                                discord_web: g
                            } = s.targetBuildOverride;
                            if (u(null != g, "BuildOverrideEmbed.renderResolved: linkMeta.targetBuildOverride.discord_web should never be null if resolved"), t = g, null == (r = a) || null == r.discord_web ? 1 : t.id !== r.discord_web.id || t.type !== r.discord_web.type) l = E.default.Messages.BUILD_OVERRIDE_APPLY, n = o, i = d.Button.Colors.GREEN;
                            else l = E.default.Messages.BUILD_OVERRIDE_CLEAR, n = c, i = d.Button.Colors.RED;
                            return p({
                                subHead: E.default.Messages.BUILD_OVERRIDE_ID,
                                buildDetails: g.id,
                                buttonClick: n,
                                buttonText: l,
                                buttonColor: i,
                                submitting: f
                            })
                        }({
                            currentOverrides: c,
                            linkMeta: v,
                            applyBuildOverride: D,
                            clearBuildOverride: b,
                            submitting: O
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
            }), r("70102");
            var n = r("37983"),
                l = r("884691"),
                i = r("446674"),
                a = r("960460"),
                s = r("489740"),
                u = r("451540"),
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
                } = e, r = (0, i.useStateFromStoresObject)([s.default], () => s.default.getCurrentBuildOverride()), a = (0, i.useStateFromStores)([s.default], () => s.default.getBuildOverride(t)), {
                    payload: f,
                    validatedURL: v
                } = a, g = r.state === s.State.Resolving || a.state === s.State.Resolving, C = l.useCallback(() => null == f ? Promise.reject(Error("Invalid override payload")) : ((0, d.addRecentBuildOverride)(a.override, f), o(f)), [f, a]);
                return null != v ? (0, n.jsx)(u.default, {
                    loading: g,
                    linkMeta: a.override,
                    currentOverrides: r.overrides,
                    applyBuildOverride: C,
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
            }), r("222007");
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
                    s = [r, ...a.filter(e => r.id !== e.id)].slice(0, 5);
                n.default.set(l, s)
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
                s = r("355025"),
                u = r("198700"),
                d = r("128259"),
                o = r("758926");

            function c(e) {
                return {
                    react(t, r, c) {
                        if (e.enableBuildOverrides && (0, s.isBuildOverrideLink)(t.target)) return (0, n.jsx)(l.Fragment, {
                            children: (0, n.jsx)(u.default, {
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
        68238: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return s
                }
            });
            var n = r("37983");
            r("884691");
            var l = r("469563"),
                i = r("225389"),
                a = r("75196"),
                s = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: r = 16,
                        color: l = "currentColor",
                        foreground: i,
                        ...s
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, a.default)(s),
                        width: t,
                        height: r,
                        viewBox: "0 0 12 12",
                        children: (0, n.jsx)("path", {
                            fill: l,
                            className: i,
                            d: "M6 1C3.243 1 1 3.244 1 6c0 2.758 2.243 5 5 5s5-2.242 5-5c0-2.756-2.243-5-5-5zm0 2.376a.625.625 0 110 1.25.625.625 0 010-1.25zM7.5 8.5h-3v-1h1V6H5V5h1a.5.5 0 01.5.5v2h1v1z"
                        })
                    })
                }, i.CircleInformationIcon, {}, {
                    size: 16
                })
        },
        626820: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return a
                }
            });
            var n = r("37983"),
                l = r("884691"),
                i = r("354214"),
                a = l.memo(function(e) {
                    let {
                        className: t
                    } = e;
                    return (0, n.jsxs)("svg", {
                        width: "57",
                        height: "40",
                        viewBox: "0 0 57 40",
                        fill: "none",
                        className: t,
                        children: [(0, n.jsx)("path", {
                            d: "M49.4949 36H3.9596C1.78182 36 0 34.2486 0 32.1081V3.89189C0 1.75135 1.78182 0 3.9596 0H49.4949C51.6727 0 53.4545 1.75135 53.4545 3.89189V32.1081C53.4545 34.2486 51.6727 36 49.4949 36Z",
                            className: i.svgContentRight
                        }), (0, n.jsx)("path", {
                            d: "M44.5456 10.8889H25.7375C24.6486 10.8889 23.7577 9.99798 23.7577 8.90909C23.7577 7.8202 24.6486 6.92929 25.7375 6.92929H44.5456C45.6345 6.92929 46.5254 7.8202 46.5254 8.90909C46.5254 9.99798 45.6345 10.8889 44.5456 10.8889ZM19.7981 10.8889C18.7092 10.8889 17.8183 9.99798 17.8183 8.90909C17.8183 7.8202 18.7092 6.92929 19.7981 6.92929C20.887 6.92929 21.7779 7.8202 21.7779 8.90909C21.7779 9.99798 20.887 10.8889 19.7981 10.8889ZM44.5456 19.798H25.7375C24.6486 19.798 23.7577 18.9071 23.7577 17.8182C23.7577 16.7293 24.6486 15.8384 25.7375 15.8384H44.5456C45.6345 15.8384 46.5254 16.7293 46.5254 17.8182C46.5254 18.9071 45.6345 19.798 44.5456 19.798ZM19.7981 19.798C18.7092 19.798 17.8183 18.9071 17.8183 17.8182C17.8183 16.7293 18.7092 15.8384 19.7981 15.8384C20.887 15.8384 21.7779 16.7293 21.7779 17.8182C21.7779 18.9071 20.887 19.798 19.7981 19.798ZM31.6365 28.7071H25.7375C24.6486 28.7071 23.7577 27.8162 23.7577 26.7273C23.7577 25.6384 24.6486 24.7475 25.7375 24.7475H31.6365C32.7254 24.7475 33.6163 25.6384 33.6163 26.7273C33.6163 27.8162 32.7254 28.7071 31.6365 28.7071ZM19.7981 28.7071C18.7092 28.7071 17.8183 27.8162 17.8183 26.7273C17.8183 25.6384 18.7092 24.7475 19.7981 24.7475C20.887 24.7475 21.7779 25.6384 21.7779 26.7273C21.7779 27.8162 20.887 28.7071 19.7981 28.7071Z",
                            className: i.svgContentLines
                        }), (0, n.jsx)("path", {
                            d: "M3.9596 36H13.8586V0H3.9596C1.78182 0 0 1.78182 0 3.9596V32.0404C0 34.2182 1.78182 36 3.9596 36Z",
                            className: i.svgContentLeft
                        }), (0, n.jsx)("path", {
                            d: "M6.9293 10.8889C5.24647 10.8889 3.9596 9.60202 3.9596 7.91919C3.9596 6.23636 5.24647 4.94949 6.9293 4.94949C8.61212 4.94949 9.89899 6.23636 9.89899 7.91919C9.89899 9.60202 8.61212 10.8889 6.9293 10.8889ZM6.9293 20.7879C5.24647 20.7879 3.9596 19.501 3.9596 17.8182C3.9596 16.1354 5.24647 14.8485 6.9293 14.8485C8.61212 14.8485 9.89899 16.1354 9.89899 17.8182C9.89899 19.501 8.61212 20.7879 6.9293 20.7879ZM6.9293 30.6869C5.24647 30.6869 3.9596 29.4 3.9596 27.7172C3.9596 26.0343 5.24647 24.7475 6.9293 24.7475C8.61212 24.7475 9.89899 26.0343 9.89899 27.7172C9.89899 29.4 8.61212 30.6869 6.9293 30.6869Z",
                            className: i.svgDots
                        }), (0, n.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M41.4328 33L46 37.7129L43.7836 40L37 32.9999L39.2164 30.7128L39.2165 30.7129L43.7836 26L46 28.2871L41.4328 33Z",
                            className: i.svgTag
                        }), (0, n.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M54.7821 35.2871L54.7841 35.2892L57 33.0021L50.2159 26L48 28.2871L52.5662 33L48 37.7129L50.2159 40L54.7821 35.2871Z",
                            className: i.svgTag
                        })]
                    })
                })
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
            }), r("424973");
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
                    return s
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
            var s = {
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
//# sourceMappingURL=60499.9be9ce6effddbb435838.js.map