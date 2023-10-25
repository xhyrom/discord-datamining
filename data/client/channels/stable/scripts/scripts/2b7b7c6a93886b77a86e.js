(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["60499"], {
        340616: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var r = l("920040"),
                n = l("773670"),
                a = l("870647"),
                i = l.n(a),
                s = l("77078"),
                d = l("812204"),
                u = l("685665"),
                o = l("128259"),
                c = n.memo(function(e) {
                    let {
                        onClick: t,
                        trusted: l,
                        title: a,
                        href: c,
                        children: f,
                        messageId: v,
                        channelId: g,
                        ...R
                    } = e, {
                        analyticsLocations: E
                    } = (0, u.default)(d.default.MASKED_LINK), C = n.useCallback(t => (0, o.handleClick)(e, t, E), [E, e]), I = n.useCallback(e => {
                        1 === e.button && C(e)
                    }, [C]), h = i.sanitizeUrl(c);
                    return (0, r.jsx)(s.Anchor, {
                        ...R,
                        title: a,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        href: h,
                        onClick: C,
                        onAuxClick: I,
                        children: null != f ? f : a
                    })
                })
        },
        225389: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                CircleInformationIcon: function() {
                    return i
                }
            });
            var r = l("920040");
            l("773670");
            var n = l("912557"),
                a = l("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: l = 24,
                    color: i = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    secondaryColor: d = "transparent",
                    secondaryColorClass: u = "",
                    ...o
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, a.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: l,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        fillRule: "evenodd",
                        d: "M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11Zm-9.5-4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.772 3.96a1 1 0 1 0-1.956-.42L9.73 15.655a2.766 2.766 0 0 0 4.312 2.83l.24-.171a1 1 0 1 0-1.163-1.628l-.24.171a.766.766 0 0 1-1.194-.783l1.043-4.865Z",
                        clipRule: "evenodd",
                        className: s
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof d ? d : d.css,
                        fillRule: "evenodd",
                        d: "M12.25 8.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Zm.478 2.71a1 1 0 0 0-1.956-.42L9.73 15.655a2.766 2.766 0 0 0 4.312 2.83l.24-.171a1 1 0 1 0-1.163-1.628l-.24.171a.766.766 0 0 1-1.194-.783l1.043-4.865Z",
                        clipRule: "evenodd",
                        className: u
                    })]
                })
            }
        },
        960460: function(e, t, l) {
            "use strict";
            let r;
            l.r(t), l.d(t, {
                applyStaffBuildOverride: function() {
                    return u
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
            var n = l("990746"),
                a = l("271938"),
                i = l("922932"),
                s = l("355025");
            let d = "/__development/build_overrides";
            async function u(e) {
                try {
                    var t;
                    let l = await n.default.put({
                        url: (0, s.getAPIEndpoint)(d),
                        body: {
                            overrides: e,
                            version: s.APP_VERSION
                        },
                        headers: {
                            Authorization: null !== (t = a.default.getToken()) && void 0 !== t ? t : ""
                        },
                        oldFormErrors: !0
                    });
                    return await r(l), l
                } catch (e) {
                    return e
                }
            }
            async function o(e) {
                try {
                    let t = await n.default.put({
                        url: (0, s.getAPIEndpoint)("/__development/link"),
                        body: {
                            payload: e,
                            token: a.default.getToken(),
                            version: s.APP_VERSION
                        },
                        oldFormErrors: !0
                    });
                    return await r(t), t
                } catch (e) {
                    return e
                }
            }
            async function c() {
                let e = await n.default.delete({
                    url: (0, s.getAPIEndpoint)(d),
                    oldFormErrors: !0
                });
                return await r(e), e
            }

            function f(e) {
                var t;
                return n.default.post({
                    url: (0, s.getAPIEndpoint)("/__development/create_build_override_link"),
                    body: e,
                    headers: {
                        Authorization: null !== (t = a.default.getToken()) && void 0 !== t ? t : ""
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
            r = async e => {
                try {
                    await i.default.flushCookies()
                } catch (e) {}
            }
        },
        489740: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                State: function() {
                    return n
                },
                default: function() {
                    return f
                }
            });
            var r, n, a = l("498225"),
                i = l("913144"),
                s = l("355025");
            (r = n || (n = {}))[r.NotResolved = 0] = "NotResolved", r[r.Resolving = 1] = "Resolving", r[r.Resolved = 2] = "Resolved", r[r.Invalid = 3] = "Invalid";
            let d = n.NotResolved,
                u = null,
                o = {};
            class c extends a.default.Store {
                getCurrentBuildOverride() {
                    return d === n.NotResolved && (d = n.Resolving, (0, s.getBuildOverride)().then(e => {
                        i.default.dispatch({
                            type: "CURRENT_BUILD_OVERRIDE_RESOLVED",
                            overrides: e
                        })
                    })), {
                        state: d,
                        overrides: u
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
                                    state: n.Invalid
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
                                state: n.Resolving
                            }
                        };
                        (0, s.getBuildOverrideMeta)(t.url).then(t => {
                            i.default.dispatch({
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
            var f = new c(i.default, {
                BUILD_OVERRIDE_RESOLVED: function(e) {
                    let {
                        url: t,
                        override: l
                    } = e, r = null == l ? n.Invalid : n.Resolved;
                    o = {
                        ...o,
                        [t]: {
                            ...o[t],
                            state: r,
                            override: l
                        }
                    }
                },
                CURRENT_BUILD_OVERRIDE_RESOLVED: function(e) {
                    let {
                        overrides: t
                    } = e;
                    d = n.Resolved, u = t
                }
            })
        },
        161449: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return u
                }
            });
            var r = l("427964"),
                n = l.n(r),
                a = l("271938"),
                i = l("180855"),
                s = l("49111"),
                d = l("782340");

            function u(e, t, l) {
                if (null == e || null == t) return {
                    valid: !1,
                    reason: d.default.Messages.BUILD_OVERRIDE_INVALID
                };
                let {
                    releaseChannel: r,
                    expiresAt: u,
                    validForUserIds: o,
                    allowedVersions: c,
                    targetBuildOverride: f
                } = e, v = Object.keys(f);
                if (0 === n.intersection(v, t).length) {
                    var g;
                    return {
                        valid: !1,
                        reason: d.default.Messages.BUILD_OVERRIDE_INCOMPATIBLE_TARGETS.format({
                            requestedTargets: v.map(e => null !== (g = i.BUILD_OVERRIDE_TARGET_NAMES[e]) && void 0 !== g ? g : "unknown").join(", ")
                        })
                    }
                }
                if (null != r && r !== window.GLOBAL_ENV.RELEASE_CHANNEL) {
                    let e = r === s.PublicReleaseChannels.PTB ? r.toUpperCase() : "".concat(r.charAt(0).toUpperCase()).concat(r.slice(1));
                    return {
                        valid: !1,
                        reason: d.default.Messages.BUILD_OVERRIDE_INCOMPATIBLE_CLIENT.format({
                            releaseChannel: e
                        })
                    }
                }
                if (null != c && (null == l || !c.includes(l))) return {
                    valid: !1,
                    reason: d.default.Messages.BUILD_OVERRIDE_INCOMPATIBLE_CLIENT.format({
                        releaseChannel: c.join(", ")
                    })
                };
                let R = null != u ? new Date(u).getTime() : null;
                return null != R && R < Date.now() ? {
                    valid: !1,
                    reason: d.default.Messages.BUILD_OVERRIDE_EXPIRED
                } : o.length > 0 && !o.includes(a.default.getId()) ? {
                    valid: !1,
                    reason: d.default.Messages.BUILD_OVERRIDE_INVALID_USER
                } : {
                    valid: !0
                }
            }
        },
        451540: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return L
                }
            });
            var r = l("920040"),
                n = l("773670"),
                a = l("575482"),
                i = l.n(a),
                s = l("161179"),
                d = l.n(s),
                u = l("77078"),
                o = l("68238"),
                c = l("83900"),
                f = l("626820"),
                v = l("306160"),
                g = l("701909"),
                R = l("161449"),
                E = l("49111"),
                C = l("782340"),
                I = l("290572");

            function h(e) {
                let {
                    url: t
                } = e, [l, a] = n.useState(!1), s = n.useRef(void 0), d = n.useCallback(() => {
                    !l && ((0, v.copy)(t) && a(!0), s.current = setTimeout(() => a(!1), 2e3))
                }, [t, l]);
                return n.useEffect(() => () => clearTimeout(s.current), []), v.SUPPORTS_COPY ? (0, r.jsxs)(u.Clickable, {
                    className: i(I.copyLink, l ? I.copied : null),
                    onClick: d,
                    children: [(0, r.jsx)(c.default, {
                        className: I.copyLinkIcon
                    }), l ? C.default.Messages.BUILD_OVERRIDE_LINK_COPIED : C.default.Messages.BUILD_OVERRIDE_LINK_COPY]
                }) : null
            }

            function p(e) {
                let {
                    subHead: t,
                    buildDetails: l,
                    buttonColor: a,
                    buttonClick: s,
                    buttonText: d,
                    disabled: o = !1,
                    submitting: c = !1
                } = e;
                return (0, r.jsxs)(n.Fragment, {
                    children: [(0, r.jsxs)("div", {
                        className: I.buildInfo,
                        children: [(0, r.jsx)(u.Text, {
                            variant: "text-sm/medium",
                            className: I.subHead,
                            children: t
                        }), (0, r.jsx)("div", {
                            className: I.buildDetails,
                            children: l
                        })]
                    }), (0, r.jsx)(u.Button, {
                        submitting: c,
                        color: a,
                        onClick: s,
                        className: i(I.button, o ? I.disabledButtonOverride : null),
                        size: I.buttonSize,
                        disabled: o,
                        children: d
                    })]
                })
            }
            var L = e => {
                var t, l, a;
                let {
                    loading: s = !1,
                    currentOverrides: c,
                    linkMeta: v,
                    url: L,
                    applyBuildOverride: m,
                    clearBuildOverride: _
                } = e, [O, B] = n.useState(!1), D = n.useCallback(() => {
                    !O && (B(!0), m().catch(() => B(!1)))
                }, [m, O]), b = n.useCallback(() => {
                    !O && (B(!0), _().catch(() => B(!1)))
                }, [_, O]);
                return (0, r.jsxs)("div", {
                    className: I.wrapper,
                    children: [(t = v, l = L, a = s, (0, r.jsxs)(u.Text, {
                        variant: "text-xs/normal",
                        className: I.titleRegion,
                        children: [(0, r.jsx)("strong", {
                            className: I.title,
                            children: null != t && null != t.releaseChannel ? C.default.Messages.BUILD_OVERRIDE_FOR.format({
                                releaseChannel: t.releaseChannel
                            }) : C.default.Messages.BUILD_OVERRIDE
                        }), (0, r.jsx)(u.Anchor, {
                            className: I.infoLink,
                            href: g.default.getArticleURL(E.HelpdeskArticles.BUILD_OVERRIDE_EMBED),
                            target: "_blank",
                            children: (0, r.jsx)(o.default, {
                                className: I.infoIcon
                            })
                        }), a ? null : (0, r.jsx)(h, {
                            url: l
                        })]
                    })), (0, r.jsxs)("div", {
                        className: I.content,
                        children: [(0, r.jsx)(f.default, {
                            className: I.icon
                        }), s ? (0, r.jsxs)(n.Fragment, {
                            children: [(0, r.jsxs)("div", {
                                className: I.buildInfo,
                                children: [(0, r.jsx)("div", {
                                    className: i(I.barLoader, I.barTitle)
                                }), (0, r.jsx)("div", {
                                    className: I.barLoader
                                })]
                            }), (0, r.jsx)("div", {
                                className: I.buttonLoader
                            })]
                        }) : function(e) {
                            var t, l;
                            let r, n, a, {
                                    currentOverrides: i,
                                    linkMeta: s,
                                    applyBuildOverride: o,
                                    clearBuildOverride: c,
                                    submitting: f
                                } = e,
                                v = (0, R.default)(s, ["discord_web"]);
                            if (!v.valid) return function(e) {
                                return p({
                                    subHead: C.default.Messages.BUILD_OVERRIDE_ISNT_AVAILABLE,
                                    buttonColor: u.Button.Colors.TRANSPARENT,
                                    buttonText: "Invalid",
                                    buildDetails: e,
                                    disabled: !0
                                })
                            }(v.reason);
                            d(null != s, "BuildOverrideEmbed.renderResolved: linkMeta should never be null if resolved");
                            let {
                                discord_web: g
                            } = s.targetBuildOverride;
                            if (d(null != g, "BuildOverrideEmbed.renderResolved: linkMeta.targetBuildOverride.discord_web should never be null if resolved"), t = g, null == (l = i) || null == l.discord_web ? 1 : t.id !== l.discord_web.id || t.type !== l.discord_web.type) n = C.default.Messages.BUILD_OVERRIDE_APPLY, r = o, a = u.Button.Colors.GREEN;
                            else n = C.default.Messages.BUILD_OVERRIDE_CLEAR, r = c, a = u.Button.Colors.RED;
                            return p({
                                subHead: C.default.Messages.BUILD_OVERRIDE_ID,
                                buildDetails: g.id,
                                buttonClick: r,
                                buttonText: n,
                                buttonColor: a,
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
        198700: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return f
                }
            });
            var r = l("920040"),
                n = l("773670"),
                a = l("498225"),
                i = l("960460"),
                s = l("489740"),
                d = l("451540"),
                u = l("425916");
            async function o(e) {
                let t = await (0, i.applyPublicBuildOverride)(e);
                if (200 !== t.status) throw Error("Build override couldn't apply");
                window.location.reload(!0)
            }
            async function c() {
                await (0, i.clearBuildOverride)(), window.location.reload(!0)
            }
            var f = n.memo(function(e) {
                let {
                    url: t
                } = e, l = (0, a.useStateFromStoresObject)([s.default], () => s.default.getCurrentBuildOverride()), i = (0, a.useStateFromStores)([s.default], () => s.default.getBuildOverride(t)), {
                    payload: f,
                    validatedURL: v
                } = i, g = l.state === s.State.Resolving || i.state === s.State.Resolving, R = n.useCallback(() => null == f ? Promise.reject(Error("Invalid override payload")) : ((0, u.addRecentBuildOverride)(i.override, f), o(f)), [f, i]);
                return null != v ? (0, r.jsx)(d.default, {
                    loading: g,
                    linkMeta: i.override,
                    currentOverrides: l.overrides,
                    applyBuildOverride: R,
                    clearBuildOverride: c,
                    url: v
                }) : null
            })
        },
        425916: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                getRecentBuildOverrides: function() {
                    return a
                },
                addRecentBuildOverride: function() {
                    return i
                }
            });
            var r = l("173333");
            let n = "recentBuildOverrides";

            function a() {
                var e;
                let t = null !== (e = r.default.get(n)) && void 0 !== e ? e : [];
                return t.filter(e => null == e.exp || e.exp > Date.now())
            }

            function i(e, t) {
                if (null == t || null == e || null == e.targetBuildOverride.discord_web) return;
                let l = {
                        id: e.targetBuildOverride.discord_web.id,
                        payload: t,
                        exp: Date.parse(e.expiresAt)
                    },
                    i = a(),
                    s = [l, ...i.filter(e => l.id !== e.id)].slice(0, 5);
                r.default.set(n, s)
            }
        },
        758926: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                isLinkTrusted: function() {
                    return a
                }
            });
            var r = l("353183"),
                n = l("128259");

            function a(e) {
                return null != e.target && (0, n.isLinkTrusted)(e.target, null != e.title && "" !== e.title ? e.title : (0, r.astToString)(e.content))
            }
        },
        47677: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return c
                }
            });
            var r = l("920040"),
                n = l("773670"),
                a = l("353183"),
                i = l("340616"),
                s = l("355025"),
                d = l("198700"),
                u = l("128259"),
                o = l("758926");

            function c(e) {
                return {
                    react(t, l, c) {
                        if (e.enableBuildOverrides && (0, s.isBuildOverrideLink)(t.target)) return (0, r.jsx)(n.Fragment, {
                            children: (0, r.jsx)(d.default, {
                                url: t.target
                            }, t.target)
                        }, c.key);
                        let f = l(t.content, c),
                            v = "string" == typeof t.title && 0 !== t.title.length ? t.title : (0, a.astToString)(t.content),
                            g = (null == e ? void 0 : e.mustConfirmExternalLink) ? e => (null == e || e.stopPropagation(), null == e || e.preventDefault(), (0, u.handleClick)({
                                href: t.target,
                                shouldConfirm: !0,
                                messageId: c.messageId,
                                channelId: c.channelId
                            }), null) : void 0;
                        if (c.previewLinkTarget && !(0, o.isLinkTrusted)(t)) {
                            let e = "\n\n(".concat(t.target, ")"),
                                l = v.length + e.length;
                            l > 1024 && (e = "..." + e, v = (v = v.substr(0, 1024 - e.length)).trimEnd()), v += e
                        }
                        return c.noStyleAndInteraction ? (0, r.jsx)("span", {
                            title: v,
                            children: f
                        }, c.key) : (0, r.jsx)(i.default, {
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
        68238: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return s
                }
            });
            var r = l("920040");
            l("773670");
            var n = l("469563"),
                a = l("225389"),
                i = l("75196"),
                s = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: l = 16,
                        color: n = "currentColor",
                        foreground: a,
                        ...s
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, i.default)(s),
                        width: t,
                        height: l,
                        viewBox: "0 0 12 12",
                        children: (0, r.jsx)("path", {
                            fill: n,
                            className: a,
                            d: "M6 1C3.243 1 1 3.244 1 6c0 2.758 2.243 5 5 5s5-2.242 5-5c0-2.756-2.243-5-5-5zm0 2.376a.625.625 0 110 1.25.625.625 0 010-1.25zM7.5 8.5h-3v-1h1V6H5V5h1a.5.5 0 01.5.5v2h1v1z"
                        })
                    })
                }, a.CircleInformationIcon, {}, {
                    size: 16
                })
        },
        626820: function(e, t, l) {
            "use strict";
            l.r(t), l.d(t, {
                default: function() {
                    return i
                }
            });
            var r = l("920040"),
                n = l("773670"),
                a = l("307725"),
                i = n.memo(function(e) {
                    let {
                        className: t
                    } = e;
                    return (0, r.jsxs)("svg", {
                        width: "57",
                        height: "40",
                        viewBox: "0 0 57 40",
                        fill: "none",
                        className: t,
                        children: [(0, r.jsx)("path", {
                            d: "M49.4949 36H3.9596C1.78182 36 0 34.2486 0 32.1081V3.89189C0 1.75135 1.78182 0 3.9596 0H49.4949C51.6727 0 53.4545 1.75135 53.4545 3.89189V32.1081C53.4545 34.2486 51.6727 36 49.4949 36Z",
                            className: a.svgContentRight
                        }), (0, r.jsx)("path", {
                            d: "M44.5456 10.8889H25.7375C24.6486 10.8889 23.7577 9.99798 23.7577 8.90909C23.7577 7.8202 24.6486 6.92929 25.7375 6.92929H44.5456C45.6345 6.92929 46.5254 7.8202 46.5254 8.90909C46.5254 9.99798 45.6345 10.8889 44.5456 10.8889ZM19.7981 10.8889C18.7092 10.8889 17.8183 9.99798 17.8183 8.90909C17.8183 7.8202 18.7092 6.92929 19.7981 6.92929C20.887 6.92929 21.7779 7.8202 21.7779 8.90909C21.7779 9.99798 20.887 10.8889 19.7981 10.8889ZM44.5456 19.798H25.7375C24.6486 19.798 23.7577 18.9071 23.7577 17.8182C23.7577 16.7293 24.6486 15.8384 25.7375 15.8384H44.5456C45.6345 15.8384 46.5254 16.7293 46.5254 17.8182C46.5254 18.9071 45.6345 19.798 44.5456 19.798ZM19.7981 19.798C18.7092 19.798 17.8183 18.9071 17.8183 17.8182C17.8183 16.7293 18.7092 15.8384 19.7981 15.8384C20.887 15.8384 21.7779 16.7293 21.7779 17.8182C21.7779 18.9071 20.887 19.798 19.7981 19.798ZM31.6365 28.7071H25.7375C24.6486 28.7071 23.7577 27.8162 23.7577 26.7273C23.7577 25.6384 24.6486 24.7475 25.7375 24.7475H31.6365C32.7254 24.7475 33.6163 25.6384 33.6163 26.7273C33.6163 27.8162 32.7254 28.7071 31.6365 28.7071ZM19.7981 28.7071C18.7092 28.7071 17.8183 27.8162 17.8183 26.7273C17.8183 25.6384 18.7092 24.7475 19.7981 24.7475C20.887 24.7475 21.7779 25.6384 21.7779 26.7273C21.7779 27.8162 20.887 28.7071 19.7981 28.7071Z",
                            className: a.svgContentLines
                        }), (0, r.jsx)("path", {
                            d: "M3.9596 36H13.8586V0H3.9596C1.78182 0 0 1.78182 0 3.9596V32.0404C0 34.2182 1.78182 36 3.9596 36Z",
                            className: a.svgContentLeft
                        }), (0, r.jsx)("path", {
                            d: "M6.9293 10.8889C5.24647 10.8889 3.9596 9.60202 3.9596 7.91919C3.9596 6.23636 5.24647 4.94949 6.9293 4.94949C8.61212 4.94949 9.89899 6.23636 9.89899 7.91919C9.89899 9.60202 8.61212 10.8889 6.9293 10.8889ZM6.9293 20.7879C5.24647 20.7879 3.9596 19.501 3.9596 17.8182C3.9596 16.1354 5.24647 14.8485 6.9293 14.8485C8.61212 14.8485 9.89899 16.1354 9.89899 17.8182C9.89899 19.501 8.61212 20.7879 6.9293 20.7879ZM6.9293 30.6869C5.24647 30.6869 3.9596 29.4 3.9596 27.7172C3.9596 26.0343 5.24647 24.7475 6.9293 24.7475C8.61212 24.7475 9.89899 26.0343 9.89899 27.7172C9.89899 29.4 8.61212 30.6869 6.9293 30.6869Z",
                            className: a.svgDots
                        }), (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M41.4328 33L46 37.7129L43.7836 40L37 32.9999L39.2164 30.7128L39.2165 30.7129L43.7836 26L46 28.2871L41.4328 33Z",
                            className: a.svgTag
                        }), (0, r.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M54.7821 35.2871L54.7841 35.2892L57 33.0021L50.2159 26L48 28.2871L52.5662 33L48 37.7129L50.2159 40L54.7821 35.2871Z",
                            className: a.svgTag
                        })]
                    })
                })
        }
    }
]);
//# sourceMappingURL=2b7b7c6a93886b77a86e.js.map