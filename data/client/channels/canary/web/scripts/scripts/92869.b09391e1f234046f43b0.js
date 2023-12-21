(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["92869"], {
        448238: function(e, t, n) {
            "use strict";
            e.exports = n.p + "b92378012a6b664c01b6.png"
        },
        80730: function(e, t, n) {
            "use strict";
            e.exports = n.p + "904091516c5e88480f47.png"
        },
        936843: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                }
            });
            var a = n("21189"),
                r = n("261047"),
                o = n("735250"),
                l = n("470079"),
                i = n("974328"),
                c = n("268822"),
                s = l.memo(function(e) {
                    var t, n, s, u, d = e.user,
                        f = e.size,
                        v = void 0 === f ? i.AvatarSizes.SIZE_32 : f,
                        T = e.animate,
                        m = e["aria-hidden"],
                        h = void 0 !== m && m,
                        N = (0, r._)(e, ["user", "size", "animate", "aria-hidden"]),
                        _ = l.useContext(c.default);
                    return (0, o.jsx)(i.Avatar, (0, a._)({
                        src: (t = d, n = (0, i.getAvatarSize)(v), s = void 0 !== T && T, u = _, t.getAvatarURL(u, n, s)),
                        size: v,
                        "aria-label": h ? void 0 : d.username,
                        "aria-hidden": h
                    }, N))
                })
        },
        530501: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                CircleInformationIcon: function() {
                    return s
                }
            });
            var a = n("21189"),
                r = n("227094"),
                o = n("261047"),
                l = n("735250");
            n("470079");
            var i = n("600186"),
                c = n("262113"),
                s = function(e) {
                    var t = e.width,
                        n = e.height,
                        s = e.secondaryColor,
                        u = void 0 === s ? "transparent" : s,
                        d = e.secondaryColorClass,
                        f = e.color,
                        v = void 0 === f ? i.default.colors.INTERACTIVE_NORMAL : f,
                        T = e.colorClass,
                        m = (0, o._)(e, ["width", "height", "secondaryColor", "secondaryColorClass", "color", "colorClass"]);
                    return (0, l.jsxs)("svg", (0, r._)((0, a._)({}, (0, c.default)(m)), {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: void 0 === t ? 24 : t,
                        height: void 0 === n ? 24 : n,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("circle", {
                            cx: "12",
                            cy: "12",
                            r: "10",
                            fill: "string" == typeof u ? u : u.css,
                            className: void 0 === d ? "" : d
                        }), (0, l.jsx)("path", {
                            fill: "string" == typeof v ? v : v.css,
                            fillRule: "evenodd",
                            d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-9.5-4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.77 3.96a1 1 0 1 0-1.96-.42l-1.04 4.86a2.77 2.77 0 0 0 4.31 2.83l.24-.17a1 1 0 1 0-1.16-1.62l-.24.17a.77.77 0 0 1-1.2-.79l1.05-4.86Z",
                            clipRule: "evenodd",
                            className: void 0 === T ? "" : T
                        })]
                    }))
                }
        },
        813394: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EyeSlashIcon: function() {
                    return s
                }
            });
            var a = n("21189"),
                r = n("227094"),
                o = n("261047"),
                l = n("735250");
            n("470079");
            var i = n("600186"),
                c = n("262113"),
                s = function(e) {
                    var t = e.width,
                        n = e.height,
                        s = e.color,
                        u = void 0 === s ? i.default.colors.INTERACTIVE_NORMAL : s,
                        d = e.colorClass,
                        f = void 0 === d ? "" : d,
                        v = (0, o._)(e, ["width", "height", "color", "colorClass"]);
                    return (0, l.jsxs)("svg", (0, r._)((0, a._)({}, (0, c.default)(v)), {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: void 0 === t ? 24 : t,
                        height: void 0 === n ? 24 : n,
                        fill: "none",
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("path", {
                            fill: "string" == typeof u ? u : u.css,
                            d: "M1.3 21.3a1 1 0 1 0 1.4 1.4l20-20a1 1 0 0 0-1.4-1.4l-20 20ZM3.16 16.05c.18.24.53.26.74.05l.72-.72c.18-.18.2-.45.05-.66a15.7 15.7 0 0 1-1.43-2.52.48.48 0 0 1 0-.4c.4-.9 1.18-2.37 2.37-3.72C7.13 6.38 9.2 5 12 5c.82 0 1.58.12 2.28.33.18.05.38 0 .52-.13l.8-.8c.25-.25.18-.67-.15-.79A9.79 9.79 0 0 0 12 3C4.89 3 1.73 10.11 1.11 11.7a.83.83 0 0 0 0 .6c.25.64.9 2.15 2.05 3.75Z",
                            className: f
                        }), (0, l.jsx)("path", {
                            fill: "string" == typeof u ? u : u.css,
                            d: "M8.18 10.81c-.13.43.36.65.67.34l2.3-2.3c.31-.31.09-.8-.34-.67a4 4 0 0 0-2.63 2.63ZM12.85 15.15c-.31.31-.09.8.34.67a4.01 4.01 0 0 0 2.63-2.63c.13-.43-.36-.65-.67-.34l-2.3 2.3Z",
                            className: f
                        }), (0, l.jsx)("path", {
                            fill: "string" == typeof u ? u : u.css,
                            d: "M9.72 18.67a.52.52 0 0 0-.52.13l-.8.8c-.25.25-.18.67.15.79 1.03.38 2.18.61 3.45.61 7.11 0 10.27-7.11 10.89-8.7a.83.83 0 0 0 0-.6c-.25-.64-.9-2.15-2.05-3.75a.49.49 0 0 0-.74-.05l-.72.72a.51.51 0 0 0-.05.66 15.7 15.7 0 0 1 1.43 2.52c.06.13.06.27 0 .4-.4.9-1.18 2.37-2.37 3.72C16.87 17.62 14.8 19 12 19c-.82 0-1.58-.12-2.28-.33Z",
                            className: f
                        })]
                    }))
                }
        },
        69164: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ConfettiCannonContext: function() {
                    return f
                },
                ConfettiCannonContextProvider: function() {
                    return v
                }
            });
            var a = n("21189"),
                r = n("227094"),
                o = n("735250"),
                l = n("470079"),
                i = n("911765"),
                c = n("203959"),
                s = n("329420"),
                u = n("467006"),
                d = {
                    confettiCanvas: null,
                    cannon: null,
                    createConfetti: function() {},
                    createConfettiAt: function() {},
                    createMultipleConfetti: function() {
                        return []
                    },
                    createMultipleConfettiAt: function() {
                        return []
                    },
                    addClickListener: function() {
                        return u.NOOP
                    },
                    removeClickListener: u.NOOP
                },
                f = l.createContext(d);

            function v(e) {
                var t = e.children,
                    n = e.confettiCanvas,
                    u = e.spriteCanvas,
                    v = e.baseConfig,
                    T = e.addClickListener,
                    m = e.removeClickListener,
                    h = (0, i.useConfettiCannon)(n, u),
                    N = (0, c.default)([s.default], function() {
                        return s.default.useReducedMotion
                    }),
                    _ = l.useMemo(function() {
                        return N ? d : {
                            confettiCanvas: n,
                            cannon: h,
                            createConfetti: function(e, t) {
                                return h.createConfetti((0, a._)({}, v, e), t)
                            },
                            createConfettiAt: function(e, t, n, o) {
                                return h.createConfetti((0, a._)((0, r._)((0, a._)({}, v), {
                                    position: {
                                        type: "static",
                                        value: {
                                            x: e,
                                            y: t
                                        }
                                    }
                                }), n), o)
                            },
                            createMultipleConfetti: function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20,
                                    n = arguments.length > 2 ? arguments[2] : void 0;
                                return h.createMultipleConfetti((0, a._)({}, v, e), t, n)
                            },
                            createMultipleConfettiAt: function(e, t, n) {
                                var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 20,
                                    l = arguments.length > 4 ? arguments[4] : void 0;
                                return h.createMultipleConfetti((0, a._)((0, r._)((0, a._)({}, v), {
                                    position: {
                                        type: "static",
                                        value: {
                                            x: e,
                                            y: t
                                        }
                                    }
                                }), n), o, l)
                            },
                            addClickListener: T,
                            removeClickListener: m
                        }
                    }, [T, v, h, n, N, m]);
                return (0, o.jsx)(f.Provider, {
                    value: _,
                    children: t
                })
            }
        },
        573575: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useLegacyPlatformType: function() {
                    return _
                },
                usePlatformAllowed: function() {
                    return h
                },
                usePlatforms: function() {
                    return N
                }
            });
            var a = n("154005");
            n("573788"), n("996173"), n("47120"), n("357629"), n("568603"), n("128242"), n("330740"), n("462848");
            var r = n("470079"),
                o = n("392711"),
                l = n.n(o),
                i = n("661223"),
                c = n("763301"),
                s = n("514673"),
                u = n("53361"),
                d = n("871831"),
                f = n("467006"),
                v = n("891050"),
                T = {
                    [f.PlatformTypes.INSTAGRAM]: ["1036753656588017764"]
                },
                m = new Map([
                    [f.PlatformTypes.INSTAGRAM, new Date(2023, 1, 18).getTime()]
                ]);

            function h(e) {
                var t = e.forUserProfile,
                    n = (0, i.useStateFromStores)([d.default], function() {
                        return d.default.getCurrentUser()
                    }),
                    a = s.PlayStationVoiceExperiment.useExperiment({
                        location: "f2f7ef_1"
                    }, {
                        autoTrackExposure: !1
                    }).allowPlayStationStaging;
                return function(e) {
                    var r;
                    return e.type === f.PlatformTypes.PLAYSTATION_STAGING ? a : !!(void 0 !== n && (null === (r = T[e.type]) || void 0 === r ? void 0 : r.includes(n.id))) || !!t || e.enabled
                }
            }

            function N() {
                var e = (0, i.useStateFromStores)([u.default], function() {
                        return u.default.getAccounts()
                    }),
                    t = h({
                        forUserProfile: !1
                    }),
                    n = r.useMemo(function() {
                        var t = new Set;
                        return e.forEach(function(e) {
                            return t.add(e.type)
                        }), t
                    }, [e]);
                return l().sortBy(c.default.filter(t), [function(e) {
                    var t;
                    return !(m.has(e.type) && Date.now() < (null !== (t = m.get(e.type)) && void 0 !== t ? t : 0) + 2592e6)
                }, function(e) {
                    return n.has(e.type)
                }, function(e) {
                    return e.hasMetadata
                }, function(e) {
                    return !f.ACTIVITY_PLATFORM_TYPES.has(e.type)
                }, function(e) {
                    return e.name
                }])
            }

            function _(e) {
                var t = (0, a._)(r.useState(!1), 2),
                    n = t[0],
                    o = t[1];

                function l(e) {
                    e.key === v.KeyboardKeysUpdated.SHIFT && o(!0)
                }

                function i(e) {
                    e.key === v.KeyboardKeysUpdated.SHIFT && o(!1)
                }
                return (r.useEffect(function() {
                    return window.addEventListener("keydown", l), window.addEventListener("keyup", i),
                        function() {
                            window.removeEventListener("keydown", l), window.removeEventListener("keyup", i)
                        }
                }, []), n && e === f.PlatformTypes.TWITTER) ? f.PlatformTypes.TWITTER_LEGACY : e
            }
        },
        900438: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateEbayMetadataItems: function() {
                    return I
                },
                generatePaypalMetadataItems: function() {
                    return E
                },
                generateRedditMetadataItems: function() {
                    return h
                },
                generateRoleConnectionMetadataItems: function() {
                    return g
                },
                generateSteamMetadataItems: function() {
                    return _
                },
                generateTikTokMetadataItems: function() {
                    return C
                },
                generateTwitterMetadataItems: function() {
                    return N
                }
            });
            var a = n("21189"),
                r = n("227094");
            n("653041"), n("633702"), n("266796"), n("357629"), n("996173"), n("47120");
            var o = n("735250");
            n("470079");
            var l = n("803997"),
                i = n.n(l),
                c = n("392711"),
                s = n.n(c),
                u = n("974328"),
                d = n("934439"),
                f = n("360750"),
                v = n("993241"),
                T = n("30175"),
                m = n("315566");

            function h(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    a = [],
                    r = Number(null !== (t = e[v.MetadataFields.REDDIT_TOTAL_KARMA]) && void 0 !== t ? t : -1),
                    l = "1" === e[v.MetadataFields.REDDIT_GOLD],
                    i = "1" === e[v.MetadataFields.REDDIT_MOD];
                return r > -1 && a.push((0, o.jsx)(p, {
                    className: n,
                    count: r,
                    label: T.default.Messages.CONNECTIONS_PROFILE_REDDIT_KARMA
                }, v.MetadataFields.REDDIT_TOTAL_KARMA)), l && a.push((0, o.jsx)(A, {
                    className: n,
                    label: T.default.Messages.CONNECTIONS_REDDIT_GOLD
                }, v.MetadataFields.REDDIT_GOLD)), i && a.push((0, o.jsx)(A, {
                    className: n,
                    label: T.default.Messages.CONNECTIONS_REDDIT_MOD
                }, v.MetadataFields.REDDIT_MOD)), a
            }

            function N(e) {
                var t, n, a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    r = [],
                    l = Number(null !== (t = e[v.MetadataFields.TWITTER_STATUSES_COUNT]) && void 0 !== t ? t : -1),
                    i = Number(null !== (n = e[v.MetadataFields.TWITTER_FOLLOWERS_COUNT]) && void 0 !== n ? n : -1);
                return l > -1 && r.push((0, o.jsx)(p, {
                    className: a,
                    count: l,
                    label: T.default.Messages.CONNECTIONS_PROFILE_TWITTER_STATUSES
                }, v.MetadataFields.TWITTER_STATUSES_COUNT)), i > -1 && r.push((0, o.jsx)(p, {
                    className: a,
                    count: i,
                    label: T.default.Messages.CONNECTIONS_PROFILE_TWITTER_FOLLOWERS
                }, v.MetadataFields.TWITTER_FOLLOWERS_COUNT)), r
            }

            function _(e) {
                var t, a, r, l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    i = [],
                    c = Number(null !== (t = e[v.MetadataFields.STEAM_GAME_COUNT]) && void 0 !== t ? t : -1),
                    s = Number(null !== (a = e[v.MetadataFields.STEAM_ITEM_COUNT_DOTA2]) && void 0 !== a ? a : -1),
                    u = Number(null !== (r = e[v.MetadataFields.STEAM_ITEM_COUNT_TF2]) && void 0 !== r ? r : -1);
                return c > -1 && i.push((0, o.jsx)(p, {
                    className: l,
                    count: c,
                    label: T.default.Messages.CONNECTIONS_PROFILE_STEAM_GAMES
                }, v.MetadataFields.STEAM_GAME_COUNT)), s > -1 && i.push((0, o.jsx)(x, {
                    className: l,
                    label: T.default.Messages.CONNECTIONS_STEAM_ITEMS.format({
                        count: s
                    }),
                    imageSrc: n("448238"),
                    imageAlt: T.default.Messages.CONNECTIONS_STEAM_DOTA2
                }, v.MetadataFields.STEAM_ITEM_COUNT_DOTA2)), u > -1 && i.push((0, o.jsx)(x, {
                    className: l,
                    label: T.default.Messages.CONNECTIONS_STEAM_ITEMS.format({
                        count: u
                    }),
                    imageSrc: n("80730"),
                    imageAlt: T.default.Messages.CONNECTIONS_STEAM_TF2
                }, v.MetadataFields.STEAM_ITEM_COUNT_TF2)), i
            }

            function E(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    n = [];
                return "1" === e[v.MetadataFields.PAYPAL_VERIFIED] && n.push((0, o.jsx)(A, {
                    className: i()(t, m.paypalVerifiedTag),
                    label: T.default.Messages.CONNECTIONS_PAYPAL_VERIFIED
                }, v.MetadataFields.PAYPAL_VERIFIED)), n
            }

            function I(e) {
                var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    a = [],
                    r = Number(null !== (t = e[v.MetadataFields.EBAY_POSITIVE_FEEDBACK_PERCENTAGE]) && void 0 !== t ? t : -1),
                    l = "1" === e[v.MetadataFields.EBAY_TOP_RATED_SELLER];
                return r > 0 && a.push((0, o.jsx)(p, {
                    className: n,
                    count: r,
                    label: T.default.Messages.CONNECTIONS_PROFILE_EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
                    percent: !0
                }, v.MetadataFields.EBAY_POSITIVE_FEEDBACK_PERCENTAGE)), l && a.push((0, o.jsx)(A, {
                    className: n,
                    label: T.default.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER
                }, v.MetadataFields.EBAY_TOP_RATED_SELLER)), a
            }

            function C(e) {
                var t, n, a, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    l = [],
                    i = "1" === e[v.MetadataFields.TIKTOK_VERIFIED],
                    c = Number(null !== (t = e[v.MetadataFields.TIKTOK_FOLLOWER_COUNT]) && void 0 !== t ? t : -1),
                    s = Number(null !== (n = e[v.MetadataFields.TIKTOK_FOLLOWING_COUNT]) && void 0 !== n ? n : -1),
                    u = Number(null !== (a = e[v.MetadataFields.TIKTOK_LIKES_COUNT]) && void 0 !== a ? a : -1);
                return c > -1 && l.push((0, o.jsx)(p, {
                    className: r,
                    count: c,
                    label: T.default.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWERS
                }, v.MetadataFields.TIKTOK_FOLLOWER_COUNT)), s > -1 && l.push((0, o.jsx)(p, {
                    className: r,
                    count: s,
                    label: T.default.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWING
                }, v.MetadataFields.TIKTOK_FOLLOWING_COUNT)), u > -1 && l.push((0, o.jsx)(p, {
                    className: r,
                    count: u,
                    label: T.default.Messages.CONNECTIONS_PROFILE_TIKTOK_LIKES
                }, v.MetadataFields.TIKTOK_LIKES_COUNT)), i && l.push((0, o.jsx)(A, {
                    className: r,
                    label: T.default.Messages.CONNECTIONS_TIKTOK_VERIFIED
                }, v.MetadataFields.TIKTOK_VERIFIED)), l
            }

            function g(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                    a = [],
                    r = Object.keys(e.metadata);
                if (null == e.application_metadata || 0 === Object.keys(e.application_metadata).length || 0 === r.length) return a;
                var l = s().sortBy(r, function(t) {
                        var n, a;
                        return null === (a = e.application_metadata) || void 0 === a ? void 0 : null === (n = a[t]) || void 0 === n ? void 0 : n.name
                    }),
                    i = !0,
                    c = !1,
                    u = void 0;
                try {
                    for (var d, f = l[Symbol.iterator](); !(i = (d = f.next()).done); i = !0) {
                        var T = d.value,
                            m = e.application_metadata[T];
                        if (null != m) {
                            var h = e.metadata[T];
                            try {
                                switch (m.type) {
                                    case v.MetadataItemTypes.BOOLEAN_EQUAL:
                                    case v.MetadataItemTypes.BOOLEAN_NOT_EQUAL:
                                        (m.type === v.MetadataItemTypes.BOOLEAN_EQUAL && "1" === h || m.type === v.MetadataItemTypes.BOOLEAN_NOT_EQUAL && "1" !== h) && a.push((0, o.jsx)(A, {
                                            className: t,
                                            label: m.name
                                        }, m.key));
                                        break;
                                    case v.MetadataItemTypes.DATETIME_GREATER_THAN_EQUAL:
                                    case v.MetadataItemTypes.DATETIME_LESS_THAN_EQUAL:
                                        a.push((0, o.jsx)(O, {
                                            className: t,
                                            date: h,
                                            locale: n,
                                            label: m.name
                                        }, m.key));
                                        break;
                                    case v.MetadataItemTypes.INTEGER_EQUAL:
                                    case v.MetadataItemTypes.INTEGER_NOT_EQUAL:
                                    case v.MetadataItemTypes.INTEGER_GREATER_THAN_EQUAL:
                                    case v.MetadataItemTypes.INTEGER_LESS_THAN_EQUAL:
                                        a.push((0, o.jsx)(p, {
                                            className: t,
                                            count: Number(h),
                                            label: m.name
                                        }, m.key))
                                }
                            } catch (e) {}
                        }
                    }
                } catch (e) {
                    c = !0, u = e
                } finally {
                    try {
                        !i && null != f.return && f.return()
                    } finally {
                        if (c) throw u
                    }
                }
                return a
            }

            function p(e) {
                var t, n = e.count,
                    a = e.label,
                    r = e.className,
                    l = e.percent,
                    c = (0, d.shortenAndLocalizeNumber)(n) + (l ? "%" : "");
                return t = "string" == typeof a ? T.default.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
                    name: a,
                    value: c
                }) : a.format({
                    value: c
                }), (0, o.jsx)(u.Text, {
                    className: i()(m.connectedAccountVanityMetadata, r),
                    variant: "text-xs/normal",
                    color: "interactive-active",
                    children: t
                })
            }

            function O(e) {
                var t = e.date,
                    n = e.locale,
                    a = e.label,
                    r = e.className;
                return (0, o.jsx)(u.Text, {
                    className: i()(m.connectedAccountVanityMetadata, r),
                    variant: "text-xs/normal",
                    color: "interactive-active",
                    children: T.default.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
                        value: (0, f.getCreatedAtDate)(t, n),
                        name: a
                    })
                })
            }

            function x(e) {
                var t = e.label,
                    n = e.imageSrc,
                    l = e.imageAlt,
                    c = e.className;
                return (0, o.jsxs)("div", {
                    className: i()(m.connectedAccountVanityMetadata, m.connectedAccountVanityMetadataItem, c),
                    children: [(0, o.jsx)(u.Tooltip, {
                        text: l,
                        children: function(e) {
                            return (0, o.jsx)("img", (0, r._)((0, a._)({}, e), {
                                src: n,
                                alt: l,
                                className: m.connectedAccountVanityMetadataItemIcon
                            }))
                        }
                    }), (0, o.jsx)(u.Text, {
                        variant: "text-xs/normal",
                        color: "interactive-active",
                        children: t
                    })]
                })
            }

            function A(e) {
                var t = e.label,
                    n = e.className;
                return (0, o.jsx)(u.Text, {
                    variant: "text-xs/semibold",
                    color: "interactive-active",
                    className: i()(m.connectedAccountVanityMetadata, m.connectedAccountVanityMetadataTag, n),
                    children: t
                })
            }
        },
        574722: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            });
            var a = n("154005");
            n("814951");
            var r = n("735250");
            n("470079");
            var o = n("803997"),
                l = n.n(o),
                i = n("148817"),
                c = n("661223"),
                s = n("600186"),
                u = n("974328"),
                d = n("329420"),
                f = n("87645"),
                v = n("10");

            function T(e) {
                var t, n = e.color,
                    o = e.size,
                    T = e.forcedIconColor,
                    m = e.className,
                    h = e.iconClassName,
                    N = (0, a._)((0, c.useStateFromStoresArray)([d.default], function() {
                        return [d.default.desaturateUserColors, d.default.saturation]
                    }), 2),
                    _ = N[0],
                    E = N[1],
                    I = (0, u.useToken)(s.default.unsafe_rawColors.PRIMARY_300).hex(),
                    C = (0, i.hex2int)(null != n ? n : I),
                    g = (0, i.int2hsl)(C, !1, _ ? E : null);
                t = null != T ? T : .3 > (0, i.getDarkness)(C) ? s.default.unsafe_rawColors.PRIMARY_630.css : s.default.unsafe_rawColors.WHITE_500.css;
                var p = o / 8;
                return (0, r.jsx)("div", {
                    style: {
                        background: g,
                        width: o,
                        height: o,
                        borderRadius: o,
                        lineHeight: "".concat(o, "px")
                    },
                    className: m,
                    children: (0, r.jsx)(f.default, {
                        color: t,
                        className: l()(v.linkIcon, h),
                        width: o - 2 * p,
                        height: o - 2 * p,
                        style: {
                            margin: p
                        }
                    })
                })
            }
        },
        575598: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return m
                }
            });
            var a = n("21189"),
                r = n("227094"),
                o = n("154005"),
                l = n("735250");
            n("470079");
            var i = n("148817"),
                c = n("661223"),
                s = n("600186"),
                u = n("974328"),
                d = n("329420"),
                f = n("401131"),
                v = n("982699"),
                T = n("30175");

            function m(e) {
                var t, n = e.color,
                    m = e.size,
                    h = e.forcedIconColor,
                    N = e.className,
                    _ = e.iconClassName,
                    E = e.tooltipText,
                    I = (0, o._)((0, c.useStateFromStoresArray)([d.default], function() {
                        return [d.default.desaturateUserColors, d.default.saturation]
                    }), 2),
                    C = I[0],
                    g = I[1],
                    p = (0, u.useToken)(s.default.unsafe_rawColors.PRIMARY_300).hex(),
                    O = (0, i.hex2int)(null != n ? n : p),
                    x = (0, i.int2hsl)(O, !1, C ? g : null);
                return t = null != h ? h : .3 > (0, i.getDarkness)(O) ? s.default.unsafe_rawColors.PRIMARY_630.css : s.default.unsafe_rawColors.WHITE_500.css, (0, l.jsx)(u.Tooltip, {
                    text: null != E ? E : T.default.Messages.CONNECTIONS_ROLE_OFFICIAL_ICON_TOOLTIP,
                    children: function(e) {
                        return (0, l.jsx)(f.default, (0, r._)((0, a._)({}, e), {
                            className: N,
                            color: x,
                            size: m,
                            children: (0, l.jsx)(v.default, {
                                color: t,
                                height: m,
                                width: m,
                                className: _
                            })
                        }))
                    }
                })
            }
        },
        514673: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                PlayStationVoiceExperiment: function() {
                    return a
                }
            });
            var a = (0, n("516086").createExperiment)({
                kind: "user",
                id: "2022-08_churro_experiment",
                label: "PS5 Voice Experiment",
                defaultConfig: {
                    allowPlayStationStaging: !1
                },
                treatments: [{
                    id: 3,
                    label: "PS Experiment + upsells + Staging",
                    config: {
                        allowPlayStationStaging: !0
                    }
                }]
            })
        },
        268822: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var a = n("470079").createContext(void 0)
        },
        770365: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                canGuildUseRoleIcons: function() {
                    return m
                },
                getRoleIconData: function() {
                    return d
                },
                isRoleIconAssetUrl: function() {
                    return T
                },
                replaceRoleIconSourceSize: function() {
                    return f
                }
            }), n("814951"), n("757143"), n("301563"), n("723026"), n("568603"), n("128242");
            var a = n("288990"),
                r = n("500833"),
                o = n("204606"),
                l = n("501769"),
                i = n("467006"),
                c = "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.CDN_HOST, "/role-icons"),
                s = "".concat(location.protocol).concat(window.GLOBAL_ENV.API_ENDPOINT),
                u = (0, l.isAndroid)(),
                d = function(e, t) {
                    if (null == e) return null;
                    var n = null != e.unicodeEmoji ? a.default.getByName(a.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: v(e, t),
                        unicodeEmoji: null != n ? n : void 0
                    }
                },
                f = function(e, t) {
                    return e.replace(/size=[0-9]+/g, "size=".concat((0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)())))
                },
                v = function(e, t) {
                    var n = e.id,
                        a = e.icon;
                    if (null != a) {
                        if (a.startsWith("data:")) return a;
                        var l = o.SUPPORTS_WEBP ? "webp" : "png",
                            d = "",
                            f = "quality=lossless";
                        return (null != t && (d = "size=" + (0, r.getBestMediaProxySize)(t * (0, r.getDevicePixelRatio)()), f = u ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? "".concat(c, "/").concat(n, "/").concat(a, ".").concat(l, "?").concat(d).concat(f) : "".concat(s).concat(i.Endpoints.ROLE_ICON(n, a), "?").concat(d)
                    }
                },
                T = function(e) {
                    return e.startsWith(c) || e.startsWith("".concat(s, "/roles")) && e.includes("/icons/")
                },
                m = function(e, t) {
                    var n;
                    return (null == t ? void 0 : null === (n = t.tags) || void 0 === n ? void 0 : n.subscription_listing_id) != null || e.features.has(i.GuildFeatures.ROLE_ICONS)
                }
        },
        602721: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getRoleIconProps: function() {
                    return i
                },
                useRoleIcon: function() {
                    return c
                },
                useRoleIconForPreview: function() {
                    return s
                }
            });
            var a = n("470079"),
                r = n("661223"),
                o = n("327271"),
                l = n("770365");

            function i(e, t) {
                var n, a = null !== (n = (0, l.getRoleIconData)(e, t)) && void 0 !== n ? n : {},
                    r = a.customIconSrc,
                    o = a.unicodeEmoji;
                if (null != r || null != o) return {
                    src: r,
                    name: e.name,
                    roleId: e.id,
                    size: t,
                    unicodeEmoji: o
                }
            }
            var c = function(e) {
                    var t = e.guildId,
                        n = e.roleId,
                        c = e.size,
                        s = void 0 === c ? 20 : c,
                        u = (0, r.useStateFromStores)([o.default], function() {
                            return o.default.getGuild(t)
                        });
                    return a.useMemo(function() {
                        if (null != u && null != n) {
                            var e = u.roles[n];
                            if ((0, l.canGuildUseRoleIcons)(u, e)) return i(e, s)
                        }
                    }, [u, n, s])
                },
                s = function(e, t) {
                    var n = (0, r.useStateFromStores)([o.default], function() {
                        return o.default.getGuild(e)
                    });
                    if (null != n && (0, l.canGuildUseRoleIcons)(n, t)) return i(t)
                }
        },
        407327: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ConnectedApplicationUserRoleAccount: function() {
                    return R
                },
                ConnectedUserAccount: function() {
                    return M
                },
                ConnectedUserAccounts: function() {
                    return S
                }
            });
            var a = n("21189"),
                r = n("227094");
            n("462848"), n("357629"), n("363505"), n("814951"), n("653041");
            var o = n("735250"),
                l = n("470079"),
                i = n("803997"),
                c = n.n(i),
                s = n("600186"),
                u = n("24135"),
                d = n("974328"),
                f = n("936843"),
                v = n("763301"),
                T = n("244180"),
                m = n("573575"),
                h = n("360750"),
                N = n("900438"),
                _ = n("575598"),
                E = n("535291"),
                I = n("242410"),
                C = n("211056"),
                g = n("600306"),
                p = n("467006"),
                O = n("993241"),
                x = n("30175"),
                A = n("475323");

            function M(e) {
                var t, n, l, i, f, E = e.connectedAccount,
                    M = e.theme,
                    R = e.locale,
                    S = e.userId,
                    y = e.className,
                    L = e.showMetadata,
                    w = e.showInvisibleIcon;
                null == L && (L = !0);
                var j = null !== (n = E.metadata) && void 0 !== n ? n : {},
                    P = L ? (0, h.getCreatedAtDate)(j[O.MetadataFields.CREATED_AT], R) : null,
                    F = (0, d.useToken)(s.default.unsafe_rawColors.TWITTER).hex(),
                    D = x.default.Messages.CONNECTION_VERIFIED;
                if (L) switch (E.type) {
                    case p.PlatformTypes.REDDIT:
                        l = (0, N.generateRedditMetadataItems)(j);
                        break;
                    case p.PlatformTypes.STEAM:
                        l = (0, N.generateSteamMetadataItems)(j);
                        break;
                    case p.PlatformTypes.TWITTER:
                        l = (0, N.generateTwitterMetadataItems)(j), "1" === j[O.MetadataFields.TWITTER_VERIFIED] && (i = F, D = x.default.Messages.CONNECTION_VERIFIED_ON_TWITTER);
                        break;
                    case p.PlatformTypes.PAYPAL:
                        l = (0, N.generatePaypalMetadataItems)(j);
                        break;
                    case p.PlatformTypes.EBAY:
                        l = (0, N.generateEbayMetadataItems)(j);
                        break;
                    case p.PlatformTypes.TIKTOK:
                        l = (0, N.generateTikTokMetadataItems)(j)
                }
                var b = v.default.get((0, m.useLegacyPlatformType)(E.type)),
                    U = null == b ? void 0 : null === (t = b.getPlatformUserUrl) || void 0 === t ? void 0 : t.call(b, E);
                null != w && w ? f = (0, o.jsx)(C.default, {
                    className: c()(A.connectedAccountOpenIconContainer, A.connectedAccountHideIcon),
                    foregroundColor: "currentColor"
                }) : null != U && (f = (0, o.jsx)(d.Anchor, {
                    href: U,
                    onClick: function(e) {
                        var t, n;
                        t = E.type, n = S, (0, T.trackWithMetadata)(p.AnalyticEvents.CONNECTED_ACCOUNT_VIEWED, {
                            platform_type: t,
                            other_user_id: n
                        }), (0, g.handleClick)({
                            href: U,
                            trusted: (null == b ? void 0 : b.type) !== p.PlatformTypes.DOMAIN
                        }, e)
                    },
                    children: (0, o.jsx)(I.default, {
                        className: A.connectedAccountOpenIcon,
                        direction: I.default.Directions.RIGHT
                    })
                }));
                var k = (0, d.useToken)(s.default.colors.INTERACTIVE_MUTED).hex(),
                    G = (0, d.useToken)(s.default.colors.INTERACTIVE_ACTIVE).hex(),
                    W = E.verified ? (0, o.jsx)(_.default, {
                        className: A.connectedAccountVerifiedIcon,
                        color: null != i ? i : k,
                        forcedIconColor: G,
                        size: 16,
                        tooltipText: D
                    }) : null;
                return (0, o.jsxs)("div", {
                    className: c()(A.connectedAccountContainer, null != l && l.length > 0 || null != P ? A.connectedAccountContainerWithMetadata : null, y),
                    children: [(0, o.jsxs)("div", {
                        className: A.connectedAccount,
                        children: [(0, o.jsx)(d.Tooltip, {
                            text: null == b ? void 0 : b.name,
                            children: function(e) {
                                return (0, o.jsx)("img", (0, r._)((0, a._)({}, e), {
                                    alt: x.default.Messages.IMG_ALT_LOGO.format({
                                        name: null == b ? void 0 : b.name
                                    }),
                                    className: A.connectedAccountIcon,
                                    src: (0, u.isThemeDark)(M) ? null == b ? void 0 : b.icon.darkSVG : null == b ? void 0 : b.icon.lightSVG
                                }))
                            }
                        }), (0, o.jsxs)("div", {
                            className: A.connectedAccountNameContainer,
                            children: [(0, o.jsxs)("div", {
                                className: A.connectedAccountName,
                                children: [(0, o.jsxs)("div", {
                                    className: A.connectedAccountNameTextContainer,
                                    children: [(0, o.jsx)(d.Tooltip, {
                                        overflowOnly: !0,
                                        text: E.name,
                                        children: function(e) {
                                            return (0, o.jsx)(d.Text, (0, r._)((0, a._)({}, e), {
                                                variant: "text-md/semibold",
                                                color: "interactive-active",
                                                className: A.connectedAccountNameText,
                                                children: E.name
                                            }))
                                        }
                                    }), W]
                                }), f]
                            }), null != P ? (0, o.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                children: x.default.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({
                                    date: P
                                })
                            }) : null]
                        })]
                    }), null != l && l.length > 0 ? (0, o.jsx)("div", {
                        className: A.connectedAccountChildren,
                        children: l
                    }) : null]
                })
            }

            function R(e) {
                var t = e.applicationRoleConnection,
                    n = e.className,
                    a = e.locale,
                    r = (0, N.generateRoleConnectionMetadataItems)(t, void 0, a);
                return (0, o.jsxs)("div", {
                    className: c()(A.connectedAccountContainer, null != r && r.length > 0 ? A.connectedAccountContainerWithMetadata : null, n),
                    children: [(0, o.jsx)("div", {
                        className: A.connectedAccount,
                        children: (0, o.jsxs)("div", {
                            className: A.connectedAccountNameContainer,
                            children: [null != t.platform_name ? (0, o.jsx)(d.Text, {
                                variant: "eyebrow",
                                color: "interactive-normal",
                                children: t.platform_name
                            }) : null, null != t.platform_username ? (0, o.jsx)("div", {
                                className: A.connectedAccountName,
                                children: (0, o.jsx)("div", {
                                    className: A.connectedAccountNameTextContainer,
                                    children: (0, o.jsx)(d.Text, {
                                        variant: "text-md/semibold",
                                        color: "interactive-active",
                                        className: A.connectedAccountNameText,
                                        children: t.platform_username
                                    })
                                })
                            }) : null]
                        })
                    }), null != r && r.length > 0 ? (0, o.jsx)("div", {
                        className: c()(A.connectedAccountChildren, A.connectedAccountChildrenNoIcon),
                        children: r
                    }) : null, (0, o.jsx)("div", {
                        children: (0, o.jsx)("div", {
                            className: A.connectedAccountPoweredBy,
                            children: (0, o.jsx)(d.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: x.default.Messages.CONNECTIONS_PROFILE_POWERED_BY.format({
                                    applicationHook: function() {
                                        return (0, o.jsxs)("div", {
                                            className: A.connectedAccountPoweredByText,
                                            children: [null != t.application.bot ? (0, o.jsx)(f.default, {
                                                user: new E.default(t.application.bot),
                                                size: d.AvatarSizes.SIZE_16
                                            }) : null, (0, o.jsx)(d.Text, {
                                                variant: "text-xs/normal",
                                                color: "text-normal",
                                                children: t.application.name
                                            })]
                                        })
                                    }
                                })
                            })
                        })
                    })]
                })
            }
            var S = l.forwardRef(function(e, t) {
                var n = e.connectedAccounts,
                    a = e.theme,
                    r = e.locale,
                    l = e.className,
                    i = e.userId;
                if (null == n || 0 === n.length) return null;
                for (var s = n.filter(function(e) {
                        return v.default.isSupported(e.type)
                    }).map(function(e) {
                        return (0, o.jsx)(M, {
                            connectedAccount: e,
                            theme: a,
                            locale: r,
                            userId: i
                        }, "".concat(e.type, ":").concat(e.id))
                    }), u = [], d = [], f = 0; f < s.length; f++) {
                    var T = s[f];
                    f % 2 == 0 ? u.push(T) : d.push(T)
                }
                return (0, o.jsxs)("div", {
                    ref: t,
                    className: c()(A.connectedAccounts, l),
                    children: [(0, o.jsx)("div", {
                        className: A.connectedAccountsColumn,
                        children: u
                    }), (0, o.jsx)("div", {
                        className: A.connectedAccountsColumn,
                        children: d
                    })]
                })
            })
        },
        401131: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return v
                }
            });
            var a = n("21189"),
                r = n("227094"),
                o = n("261047"),
                l = n("735250"),
                i = n("470079"),
                c = n("803997"),
                s = n.n(c),
                u = n("974328"),
                d = n("171699"),
                f = n("175722");

            function v(e) {
                var t = e.children,
                    n = e.size,
                    c = void 0 === n ? 16 : n,
                    v = e.className,
                    T = e.flowerStarClassName,
                    m = (0, o._)(e, ["children", "size", "className", "flowerStarClassName"]),
                    h = i.Children.only(t),
                    N = (0, u.useRedesignIconContext)().enabled;
                return (0, l.jsxs)("div", {
                    className: s()(f.flowerStarContainer, v),
                    style: {
                        width: c,
                        height: c
                    },
                    children: [(0, l.jsx)(d.default, (0, r._)((0, a._)({}, m), {
                        className: s()(T, f.flowerStar)
                    })), (0, l.jsx)("div", {
                        className: s()(f.childContainer, {
                            [f.redesignIconChildContainer]: N
                        }),
                        children: h
                    })]
                })
            }
        },
        242410: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                Directions: function() {
                    return r
                },
                default: function() {
                    return T
                }
            });
            var a, r, o = n("21189"),
                l = n("227094"),
                i = n("261047");
            n("411104"), n("814951");
            var c = n("735250");
            n("470079");
            var s = n("803997"),
                u = n.n(s),
                d = n("262113"),
                f = n("837443");
            (a = r || (r = {})).LEFT = "LEFT", a.RIGHT = "RIGHT", a.UP = "UP", a.DOWN = "DOWN", a.UP_LEFT = "UP_LEFT", a.DOWN_RIGHT = "DOWN_RIGHT";
            var v = function(e) {
                var t = e.width,
                    n = e.height,
                    a = e.color,
                    r = e.direction,
                    s = e.foreground,
                    v = e.className,
                    T = e.title,
                    m = (0, i._)(e, ["width", "height", "color", "direction", "foreground", "className", "title"]);
                return (0, c.jsxs)("svg", (0, l._)((0, o._)({}, (0, d.default)(m)), {
                    width: void 0 === t ? 24 : t,
                    height: void 0 === n ? 24 : n,
                    className: u()(v, function(e) {
                        switch (e) {
                            case "LEFT":
                                return f.left;
                            case "RIGHT":
                                return f.right;
                            case "UP":
                                return null;
                            case "DOWN":
                                return f.down;
                            case "UP_LEFT":
                                return f.upLeft;
                            case "DOWN_RIGHT":
                                return f.downRight;
                            default:
                                throw Error("Invalid Direction ".concat(e))
                        }
                    }(r)),
                    viewBox: "0 0 24 24",
                    children: [null != T ? (0, c.jsx)("title", {
                        children: T
                    }) : null, (0, c.jsx)("polygon", {
                        className: s,
                        fill: void 0 === a ? "currentColor" : a,
                        fillRule: "nonzero",
                        points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"
                    })]
                }))
            };
            v.Directions = r;
            var T = v
        },
        623664: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var a = n("21189"),
                r = n("227094"),
                o = n("261047"),
                l = n("735250");
            n("470079");
            var i = n("803997"),
                c = n.n(i),
                s = n("314779"),
                u = n("859401"),
                d = n("460013"),
                f = n("212177"),
                v = n("974328"),
                T = n("262113"),
                m = n("282425"),
                h = {
                    UP: m.directionUp,
                    RIGHT: m.directionRight,
                    DOWN: m.directionDown,
                    LEFT: m.directionLeft
                },
                N = function(e) {
                    var t = e.direction,
                        n = void 0 === t ? h.DOWN : t,
                        i = e.width,
                        N = void 0 === i ? 24 : i,
                        _ = e.height,
                        E = void 0 === _ ? 24 : _,
                        I = e.color,
                        C = void 0 === I ? "currentColor" : I,
                        g = e.transition,
                        p = void 0 === g ? m.transition : g,
                        O = e.className,
                        x = e.foreground,
                        A = e.expanded,
                        M = (0, o._)(e, ["direction", "width", "height", "color", "transition", "className", "foreground", "expanded"]),
                        R = (0, v.useRedesignIconContext)().enabled,
                        S = n;
                    if (!0 === A ? S = h.DOWN : !1 === A && (S = h.RIGHT), R) {
                        var y = {
                            [h.UP]: f.ChevronSmallUpIcon,
                            [h.DOWN]: s.ChevronSmallDownIcon,
                            [h.LEFT]: u.ChevronSmallLeftIcon,
                            [h.RIGHT]: d.ChevronSmallRightIcon
                        } [S];
                        return (0, l.jsx)(y, (0, r._)((0, a._)({}, M), {
                            className: O,
                            width: N,
                            height: E,
                            color: C,
                            colorClass: x
                        }))
                    }
                    return (0, l.jsx)("svg", (0, r._)((0, a._)({
                        className: c()(O, p, S),
                        width: N,
                        height: E,
                        viewBox: "0 0 24 24"
                    }, (0, T.default)(M)), {
                        children: (0, l.jsx)("path", {
                            className: x,
                            fill: "none",
                            stroke: C,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    }))
                };
            N.Directions = h;
            var _ = N
        },
        211056: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var a = n("21189"),
                r = n("227094"),
                o = n("261047"),
                l = n("735250");
            n("470079");
            var i = n("600186"),
                c = n("336328"),
                s = n("813394"),
                u = n("262113"),
                d = (0, c.replaceIcon)(function(e) {
                    var t = e.width,
                        n = e.height,
                        c = e.color,
                        s = e.foregroundColor,
                        d = void 0 === s ? i.default.unsafe_rawColors.RED_400.css : s,
                        f = e.foreground,
                        v = e.background,
                        T = (0, o._)(e, ["width", "height", "color", "foregroundColor", "foreground", "background"]);
                    return (0, l.jsxs)("svg", (0, r._)((0, a._)({}, (0, u.default)(T)), {
                        width: void 0 === t ? 24 : t,
                        height: void 0 === n ? 24 : n,
                        viewBox: "0 0 24 24",
                        children: [(0, l.jsx)("rect", {
                            fill: d,
                            className: f,
                            x: "2",
                            y: "21.2154",
                            width: "26",
                            height: "2",
                            transform: "rotate(-45 2 21.2154)"
                        }), (0, l.jsx)("path", {
                            fill: void 0 === c ? "currentColor" : c,
                            className: v,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M10.1843 18.8115C10.7713 18.9328 11.3775 19 12 19C18.352 19 23 12 23 12C23 12 21.9643 10.4402 20.2026 8.79322L15.8265 13.1693C15.4393 14.4384 14.4382 15.4393 13.1694 15.8264L10.1843 18.8115ZM12.4818 8.02871C12.3238 8.00975 12.1631 8 12 8C9.791 8 8 9.79 8 12C8 12.1631 8.00975 12.3239 8.0287 12.4818L4.59645 15.914C2.35293 14.0375 1 12 1 12C1 12 5.648 5 12 5C13.0508 5 14.055 5.19157 14.9992 5.51132L12.4818 8.02871Z"
                        })]
                    }))
                }, s.EyeSlashIcon, void 0, {
                    size: 24
                })
        },
        171699: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var a = n("21189"),
                r = n("227094"),
                o = n("261047"),
                l = n("735250");
            n("470079");
            var i = n("262113"),
                c = function(e) {
                    var t = e.width,
                        n = e.height,
                        c = e.color,
                        s = e.foreground,
                        u = (0, o._)(e, ["width", "height", "color", "foreground"]);
                    return (0, l.jsx)("svg", (0, r._)((0, a._)({}, (0, i.default)(u)), {
                        width: void 0 === t ? 16 : t,
                        height: void 0 === n ? 16 : n,
                        viewBox: "0 0 16 15.2",
                        children: (0, l.jsx)("path", {
                            className: s,
                            fill: void 0 === c ? "currentColor" : c,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    }))
                }
        },
        668299: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("21189"),
                r = n("227094"),
                o = n("261047"),
                l = n("735250");
            n("470079");
            var i = n("336328"),
                c = n("530501"),
                s = n("262113"),
                u = (0, i.replaceIcon)(function(e) {
                    var t = e.width,
                        n = e.height,
                        i = e.color,
                        c = e.foreground,
                        u = (0, o._)(e, ["width", "height", "color", "foreground"]);
                    return (0, l.jsx)("svg", (0, r._)((0, a._)({}, (0, s.default)(u)), {
                        width: void 0 === t ? 16 : t,
                        height: void 0 === n ? 16 : n,
                        viewBox: "0 0 12 12",
                        children: (0, l.jsx)("path", {
                            fill: void 0 === i ? "currentColor" : i,
                            className: c,
                            d: "M6 1C3.243 1 1 3.244 1 6c0 2.758 2.243 5 5 5s5-2.242 5-5c0-2.756-2.243-5-5-5zm0 2.376a.625.625 0 110 1.25.625.625 0 010-1.25zM7.5 8.5h-3v-1h1V6H5V5h1a.5.5 0 01.5.5v2h1v1z"
                        })
                    }))
                }, c.CircleInformationIcon, {}, {
                    size: 16
                })
        },
        994150: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var a = n("21189"),
                r = n("735250");
            n("470079");
            var o = n("803997"),
                l = n.n(o),
                i = n("974328"),
                c = n("30175"),
                s = n("847022");

            function u(e) {
                var t = e.className,
                    n = e.src,
                    o = e.unicodeEmoji,
                    u = e.name,
                    d = e.size,
                    f = void 0 === d ? 20 : d,
                    v = e.enableTooltip,
                    T = e.enableHeight,
                    m = void 0 === T || T,
                    h = e.onClick;
                if (null == n && null == o) return null;
                var N = function(e) {
                    var d = (0, r.jsx)("img", (0, a._)({
                        alt: "",
                        "aria-label": c.default.Messages.ROLE_ICON_ALT_TEXT.format({
                            name: u
                        }),
                        className: l()(s.roleIcon, t, {
                            [s.clickable]: null != h
                        }),
                        height: m ? f : void 0,
                        src: n,
                        width: f
                    }, e));
                    return (null != o && (d = (0, r.jsx)("img", (0, a._)({
                        alt: "",
                        "aria-label": o.allNamesString,
                        className: l()(s.roleIcon, t, {
                            [s.clickable]: null != h
                        }),
                        height: m ? f : void 0,
                        src: o.url,
                        width: f
                    }, e))), null == h) ? (0, r.jsx)(i.FocusRing, {
                        children: d
                    }) : (0, r.jsx)(i.Clickable, {
                        onClick: h,
                        tag: "span",
                        children: d
                    })
                };
                return (0, r.jsx)(i.Tooltip, {
                    text: u,
                    "aria-label": !1,
                    shouldShow: void 0 === v || v,
                    children: function(e) {
                        return N(e)
                    }
                })
            }
        }
    }
]);
//# sourceMappingURL=92869.b09391e1f234046f43b0.js.map