(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["64509"], {
        202909: function(e, t, i) {
            "use strict";
            i.r(t);
            var r = i("804830");
            i.es(r, t)
        },
        876726: function(e, t, i) {
            "use strict";
            i.r(t);
            var r = i("849638");
            i.es(r, t)
        },
        597517: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                hideHotspot: function() {
                    return s
                },
                setHotspotOverride: function() {
                    return o
                },
                clearHotspotOverride: function() {
                    return l
                }
            });
            var r = i("913144"),
                u = i("599110"),
                n = i("49111");

            function s(e) {
                u.default.track(n.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), r.default.wait(() => {
                    r.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function o(e, t) {
                r.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function l(e) {
                r.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        269596: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return c
                }
            }), i("222007");
            var r = i("446674"),
                u = i("913144"),
                n = i("197881"),
                s = i("492397");
            let o = new Set,
                l = {};
            class a extends r.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (o = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (l = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = !t && l[e];
                    return !(s.CONFERENCE_MODE_ENABLED || n.ProcessArgs.isDisallowPopupsSet()) && (i || !o.has(e))
                }
                hasHiddenHotspot(e) {
                    return o.has(e)
                }
                getHotspotOverride(e) {
                    return l[e]
                }
                getState() {
                    return {
                        hiddenHotspots: o,
                        hotspotOverrides: l
                    }
                }
            }
            a.displayName = "HotspotStore", a.persistKey = "hotspots", a.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var c = new a(u.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    o = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (o.has(t)) return !1;
                    o.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: i
                    } = e;
                    l[t] = i
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == l[t]) return !1;
                    delete l[t]
                }
            })
        },
        716849: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                NON_SUBSCRIBER_SENTINEL: function() {
                    return E
                },
                maybeFetchPremiumLikelihood: function() {
                    return S
                },
                useMaybeFetchPremiumLikelihood: function() {
                    return I
                }
            });
            var r = i("884691"),
                u = i("65597"),
                n = i("872717"),
                s = i("913144"),
                o = i("775433"),
                l = i("697218"),
                a = i("10514"),
                c = i("764364"),
                d = i("719923"),
                f = i("676572"),
                h = i("646718"),
                p = i("49111");
            let E = "nonSubscriber";
            async function m() {
                try {
                    s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH"
                    });
                    let {
                        body: e
                    } = await n.default.get({
                        url: p.Endpoints.USER_PREMIUM_LIKELIHOOD
                    });
                    s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS",
                        premiumLikelihood: function(e) {
                            return {
                                [E]: e.non_subscriber,
                                [h.PremiumSubscriptionSKUs.TIER_0]: e[h.PremiumSubscriptionSKUs.TIER_0],
                                [h.PremiumSubscriptionSKUs.TIER_2]: e[h.PremiumSubscriptionSKUs.TIER_2]
                            }
                        }(e)
                    })
                } catch (e) {
                    404 === e.status ? s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS"
                    }) : s.default.dispatch({
                        type: "BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR"
                    })
                }
            }

            function S(e) {
                let {
                    enabled: t,
                    useExpectedValue: i
                } = e.getCurrentConfig({
                    location: "443cca_1"
                }, {
                    autoTrackExposure: !1
                }), r = f.default.shouldFetchPremiumLikelihood(), u = l.default.getCurrentUser();
                L(u, r, t, i)
            }

            function I(e) {
                let {
                    enabled: t,
                    useExpectedValue: i
                } = e.useExperiment({
                    location: "443cca_2"
                }, {
                    autoTrackExposure: !1
                }), n = (0, u.default)([f.default], () => f.default.shouldFetchPremiumLikelihood()), s = (0, u.default)([l.default], () => l.default.getCurrentUser());
                r.useEffect(() => {
                    L(s, n, t, i)
                }, [s, n, t, i])
            }

            function L(e, t, i, r) {
                null != e && !(0, c.isPremium)(e) && i && (t && m(), r && (!a.default.isLoadedForSKU((0, d.castPremiumSubscriptionAsSkuId)(h.PremiumSubscriptionSKUs.TIER_0)) && !a.default.isFetchingForSKU((0, d.castPremiumSubscriptionAsSkuId)(h.PremiumSubscriptionSKUs.TIER_0)) && (0, o.fetchSubscriptionPlansForSKU)((0, d.castPremiumSubscriptionAsSkuId)(h.PremiumSubscriptionSKUs.TIER_0)), !a.default.isLoadedForSKU((0, d.castPremiumSubscriptionAsSkuId)(h.PremiumSubscriptionSKUs.TIER_2)) && !a.default.isFetchingForSKU((0, d.castPremiumSubscriptionAsSkuId)(h.PremiumSubscriptionSKUs.TIER_2)) && (0, o.fetchSubscriptionPlansForSKU)((0, d.castPremiumSubscriptionAsSkuId)(h.PremiumSubscriptionSKUs.TIER_2))))
            }
        },
        676572: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return l
                }
            });
            var r = i("446674"),
                u = i("913144");
            let n = {
                    premiumLikelihood: void 0,
                    isFetching: !1,
                    fetched: !1
                },
                s = n;
            class o extends r.default.Store {
                initialize() {
                    s = n
                }
                getState() {
                    return s
                }
                shouldFetchPremiumLikelihood() {
                    return !s.isFetching && !s.fetched
                }
            }
            o.displayName = "UserPremiumLikelihoodStore";
            var l = new o(u.default, {
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH: function() {
                    s.isFetching = !0
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_SUCCESS: function(e) {
                    let {
                        premiumLikelihood: t
                    } = e;
                    s.premiumLikelihood = t, s.fetched = !0, s.isFetching = !1
                },
                BILLING_USER_PREMIUM_LIKELIHOOD_FETCH_ERROR: function() {
                    s.isFetching = !1
                },
                LOGOUT: function() {
                    s.premiumLikelihood = void 0
                }
            })
        },
        552917: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return n
                }
            });
            var r = i("862205");
            let u = (0, r.createExperiment)({
                kind: "user",
                id: "2022-12_premium_targeted_upsells",
                label: "Premium Targeted Upsells",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Use highest expected value to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !0,
                        useLikelihood: !1
                    }
                }, {
                    id: 2,
                    label: "Use highest likelihood to determine Nitro upsells",
                    config: {
                        enabled: !0,
                        useExpectedValue: !1,
                        useLikelihood: !0
                    }
                }]
            });
            var n = u
        },
        216422: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var r = i("37983");
            i("884691");
            var u = i("469563"),
                n = i("202909"),
                s = i("75196"),
                o = (0, u.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: i = 24,
                        color: u = "currentColor",
                        viewBox: n = "0 0 24 24",
                        foreground: o,
                        ...l
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, s.default)(l),
                        width: t,
                        height: i,
                        viewBox: n,
                        children: (0, r.jsx)("path", {
                            className: o,
                            fill: u,
                            d: "M2.98966977,9.35789159 C2.98966977,9.77582472 2.63442946,10.1240466 2.20807287,10.1240466 L1.78171628,10.1240466 C1.35535969,10.1240466 0.999948837,9.77582472 0.999948837,9.35789159 C0.999948837,8.93995846 1.35535969,8.59173658 1.78171628,8.59173658 L2.20807287,8.59173658 C2.63442946,8.59173658 2.98966977,8.93995846 2.98966977,9.35789159 Z M22.2467643,9.14892503 C24.0942527,12.9800344 22.3888264,17.5772989 18.3384388,19.3882867 C14.4302837,21.1297305 9.74036124,19.457998 7.9638186,15.6268886 C7.60857829,14.8607335 7.3954,14.0248673 7.32428372,13.189001 L5.76091938,13.189001 C5.33456279,13.189001 4.97932248,12.840612 4.97932248,12.4226788 C4.97932248,12.0047457 5.33456279,11.6565238 5.76091938,11.6565238 L8.03493488,11.6565238 C8.46129147,11.6565238 8.81653178,11.3083019 8.81653178,10.8903688 C8.81653178,10.4724357 8.46129147,10.1240466 8.03493488,10.1240466 L4.41090388,10.1240466 C3.98454729,10.1240466 3.62913643,9.77582472 3.62913643,9.35789159 C3.62913643,8.93995846 3.98454729,8.59173658 4.41090388,8.59173658 L9.45606667,8.59173658 C9.88242326,8.59173658 10.2376636,8.24334752 10.2376636,7.82541439 C10.2376636,7.40748126 9.88242326,7.05925937 9.45606667,7.05925937 L7.3954,7.05925937 C6.75586512,7.05925937 6.18727597,6.57161499 6.18727597,5.87517123 C6.18727597,5.24827153 6.68474884,4.69091591 7.3954,4.69091591 L15.4250589,4.69091591 C18.267493,4.8303384 20.9676946,6.43235968 22.2467643,9.14892503 Z M13.2662961,8.38056332 C11.0193969,9.3919615 10.0341721,11.9973566 11.065955,14.1998642 C12.097738,16.4023718 14.755645,17.3681317 17.0025442,16.3567335 C19.249614,15.3453354 20.2346682,12.7399402 19.2028853,10.5374326 C18.1711023,8.33492503 15.5131953,7.36916515 13.2662961,8.38056332 Z M16.8462589,9.84548582 L18.2673907,12.2138293 C18.338507,12.3530846 18.338507,12.4227958 18.2673907,12.5620512 L16.8462589,14.9303946 C16.7751426,15.0696499 16.6330806,15.0696499 16.5619643,15.0696499 L13.7906465,15.0696499 C13.6485845,15.0696499 13.5774682,14.9999387 13.5065225,14.9303946 L12.0852202,12.5620512 C12.0142744,12.4227958 12.0142744,12.3530846 12.0852202,12.2138293 L13.5065225,9.84548582 C13.5774682,9.7062305 13.7197008,9.7062305 13.7906465,9.7062305 L16.5619643,9.7062305 C16.7041969,9.63651925 16.7751426,9.7062305 16.8462589,9.84548582 Z"
                        })
                    })
                }, n.NitroWheelIcon, void 0, {
                    size: 24
                })
        },
        132755: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var r = i("37983");
            i("884691");
            var u = i("469563"),
                n = i("876726"),
                s = i("75196"),
                o = (0, u.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: i = 16,
                        color: u = "currentColor",
                        foreground: n,
                        ...o
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, s.default)(o),
                        width: t,
                        height: i,
                        viewBox: "0 0 18 18",
                        fill: "none",
                        children: (0, r.jsx)("path", {
                            className: n,
                            d: "M6.01053 2.82974C5.01058 2.24153 3.75 2.96251 3.75 4.12264V13.8774C3.75 15.0375 5.01058 15.7585 6.01053 15.1703L14.3021 10.2929C15.288 9.71294 15.288 8.28709 14.3021 7.70711L6.01053 2.82974Z",
                            fill: u
                        })
                    })
                }, n.PlayIcon, void 0, {
                    size: 16
                })
        },
        58608: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return c
                }
            });
            var r = i("37983"),
                u = i("884691"),
                n = i("118810"),
                s = i("446674"),
                o = i("206230"),
                l = i("719347");
            let a = e => {
                let {
                    externalRef: t,
                    autoPlay: i,
                    playOnHover: a,
                    responsive: c,
                    mediaLayoutType: d,
                    ...f
                } = e, h = (0, s.useStateFromStores)([o.default], () => o.default.useReducedMotion), p = u.useRef(null);

                function E() {
                    var e;
                    a && (null == p || null === (e = p.current) || void 0 === e || e.play())
                }

                function m() {
                    var e;
                    a && (null == p || null === (e = p.current) || void 0 === e || e.pause())
                }
                return u.useLayoutEffect(() => () => {
                    let {
                        current: e
                    } = p;
                    null != e && function(e) {
                        e.removeAttribute("src"), Array.from(e.children).forEach(e => {
                            (0, n.isElement)(e, HTMLSourceElement) && (e.removeAttribute("src"), e.removeAttribute("type")), (0, n.isElement)(e, HTMLImageElement) && e.removeAttribute("src")
                        });
                        try {
                            e.load()
                        } catch (e) {}
                    }(e)
                }, []), u.useLayoutEffect(() => ("function" == typeof t ? (t(null), t(p.current)) : null != t && (t.current = p.current), () => {
                    "function" == typeof t ? t(null) : null != t && (t.current = null)
                }), [t, p]), (0, r.jsx)("video", {
                    ref: p,
                    autoPlay: !h && !a && i,
                    onMouseEnter: E,
                    onMouseLeave: m,
                    onFocus: E,
                    onBlur: m,
                    style: d === l.MediaLayoutType.MOSAIC ? {
                        width: "100%",
                        height: "100%",
                        maxHeight: "inherit",
                        objectFit: "cover"
                    } : c ? function() {
                        return {
                            maxWidth: f.width,
                            maxHeight: f.height,
                            width: "100%",
                            height: "100%"
                        }
                    }() : {},
                    ...f
                })
            };
            var c = u.forwardRef((e, t) => (0, r.jsx)(a, {
                ...e,
                externalRef: t
            }))
        },
        804830: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                NitroWheelIcon: function() {
                    return s
                }
            });
            var r = i("37983");
            i("884691");
            var u = i("669491"),
                n = i("82169");
            let s = e => {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: s = u.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...l
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, n.default)(l),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M15 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",
                        className: o
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M7 4a1 1 0 0 0 0 2h3a1 1 0 1 1 0 2H5.5a1 1 0 0 0 0 2H8a1 1 0 1 1 0 2H6a1 1 0 1 0 0 2h1.25A8 8 0 1 0 15 4H7Zm8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z",
                        clipRule: "evenodd",
                        className: o
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M2.5 10a1 1 0 0 0 0-2H2a1 1 0 0 0 0 2h.5Z",
                        className: o
                    })]
                })
            }
        },
        849638: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                PlayIcon: function() {
                    return s
                }
            });
            var r = i("37983");
            i("884691");
            var u = i("669491"),
                n = i("82169");
            let s = e => {
                let {
                    width: t = 24,
                    height: i = 24,
                    color: s = u.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...l
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, n.default)(l),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: i,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        d: "M9.25 3.35C7.87 2.45 6 3.38 6 4.96v14.08c0 1.58 1.87 2.5 3.25 1.61l10.85-7.04a1.9 1.9 0 0 0 0-3.22L9.25 3.35Z",
                        className: o
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=64509.e19e0a09a839ea816391.js.map