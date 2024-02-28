(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["58457"], {
        448238: function(e, t, a) {
            "use strict";
            e.exports = a.p + "b92378012a6b664c01b6.png"
        },
        80730: function(e, t, a) {
            "use strict";
            e.exports = a.p + "904091516c5e88480f47.png"
        },
        936843: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return c
                }
            });
            var n = a("735250"),
                l = a("470079"),
                s = a("974328"),
                r = a("268822"),
                c = l.memo(function(e) {
                    var t, a, c, o;
                    let {
                        user: i,
                        size: u = s.AvatarSizes.SIZE_32,
                        animate: d = !1,
                        "aria-hidden": f = !1,
                        ...T
                    } = e, E = l.useContext(r.default);
                    return (0, n.jsx)(s.Avatar, {
                        src: (t = i, a = (0, s.getAvatarSize)(u), c = d, o = E, t.getAvatarURL(o, a, c)),
                        size: u,
                        "aria-label": f ? void 0 : i.username,
                        "aria-hidden": f,
                        ...T
                    })
                })
        },
        530501: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a("587319");
            a.es(n, t)
        },
        813394: function(e, t, a) {
            "use strict";
            a.r(t);
            var n = a("189707");
            a.es(n, t)
        },
        573575: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                useLegacyPlatformType: function() {
                    return h
                },
                usePlatformAllowed: function() {
                    return N
                },
                usePlatforms: function() {
                    return I
                }
            });
            var n = a("470079"),
                l = a("392711"),
                s = a.n(l),
                r = a("661223"),
                c = a("763301"),
                o = a("514673"),
                i = a("53361"),
                u = a("871831"),
                d = a("152551"),
                f = a("467006"),
                T = a("891050");
            let E = {
                    [f.PlatformTypes.INSTAGRAM]: ["1036753656588017764"]
                },
                _ = new Map([
                    [f.PlatformTypes.INSTAGRAM, new Date(2023, 1, 18).getTime()]
                ]),
                m = 30 * d.default.Millis.DAY;

            function N(e) {
                let {
                    forUserProfile: t
                } = e, a = (0, r.useStateFromStores)([u.default], () => u.default.getCurrentUser()), n = o.PlayStationVoiceExperiment.useExperiment({
                    location: "f2f7ef_1"
                }, {
                    autoTrackExposure: !1
                }).allowPlayStationStaging;
                return e => e.type === f.PlatformTypes.PLAYSTATION_STAGING ? n : !!(void 0 !== a && E[e.type]?.includes(a.id)) || !!t || e.enabled
            }

            function I() {
                let e = (0, r.useStateFromStores)([i.default], () => i.default.getAccounts()),
                    t = N({
                        forUserProfile: !1
                    }),
                    a = n.useMemo(() => {
                        let t = new Set;
                        return e.forEach(e => t.add(e.type)), t
                    }, [e]);
                return s().sortBy(c.default.filter(t), [e => !(_.has(e.type) && Date.now() < (_.get(e.type) ?? 0) + m), e => a.has(e.type), e => e.hasMetadata, e => !f.ACTIVITY_PLATFORM_TYPES.has(e.type), e => e.name])
            }

            function h(e) {
                let [t, a] = n.useState(!1);

                function l(e) {
                    let {
                        key: t
                    } = e;
                    t === T.KeyboardKeysUpdated.SHIFT && a(!0)
                }

                function s(e) {
                    let {
                        key: t
                    } = e;
                    t === T.KeyboardKeysUpdated.SHIFT && a(!1)
                }
                return (n.useEffect(() => (window.addEventListener("keydown", l), window.addEventListener("keyup", s), () => {
                    window.removeEventListener("keydown", l), window.removeEventListener("keyup", s)
                }), []), t && e === f.PlatformTypes.TWITTER) ? f.PlatformTypes.TWITTER_LEGACY : e
            }
        },
        900438: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                generateEbayMetadataItems: function() {
                    return I
                },
                generatePaypalMetadataItems: function() {
                    return N
                },
                generateRedditMetadataItems: function() {
                    return E
                },
                generateRoleConnectionMetadataItems: function() {
                    return O
                },
                generateSteamMetadataItems: function() {
                    return m
                },
                generateTikTokMetadataItems: function() {
                    return h
                },
                generateTwitterMetadataItems: function() {
                    return _
                }
            }), a("653041");
            var n = a("735250");
            a("470079");
            var l = a("803997"),
                s = a.n(l),
                r = a("392711"),
                c = a.n(r),
                o = a("974328"),
                i = a("934439"),
                u = a("360750"),
                d = a("993241"),
                f = a("30175"),
                T = a("943153");

            function E(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    a = [],
                    l = Number(e[d.MetadataFields.REDDIT_TOTAL_KARMA] ?? -1),
                    s = "1" === e[d.MetadataFields.REDDIT_GOLD],
                    r = "1" === e[d.MetadataFields.REDDIT_MOD];
                return l > -1 && a.push((0, n.jsx)(C, {
                    className: t,
                    count: l,
                    label: f.default.Messages.CONNECTIONS_PROFILE_REDDIT_KARMA
                }, d.MetadataFields.REDDIT_TOTAL_KARMA)), s && a.push((0, n.jsx)(A, {
                    className: t,
                    label: f.default.Messages.CONNECTIONS_REDDIT_GOLD
                }, d.MetadataFields.REDDIT_GOLD)), r && a.push((0, n.jsx)(A, {
                    className: t,
                    label: f.default.Messages.CONNECTIONS_REDDIT_MOD
                }, d.MetadataFields.REDDIT_MOD)), a
            }

            function _(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    a = [],
                    l = Number(e[d.MetadataFields.TWITTER_STATUSES_COUNT] ?? -1),
                    s = Number(e[d.MetadataFields.TWITTER_FOLLOWERS_COUNT] ?? -1);
                return l > -1 && a.push((0, n.jsx)(C, {
                    className: t,
                    count: l,
                    label: f.default.Messages.CONNECTIONS_PROFILE_TWITTER_STATUSES
                }, d.MetadataFields.TWITTER_STATUSES_COUNT)), s > -1 && a.push((0, n.jsx)(C, {
                    className: t,
                    count: s,
                    label: f.default.Messages.CONNECTIONS_PROFILE_TWITTER_FOLLOWERS
                }, d.MetadataFields.TWITTER_FOLLOWERS_COUNT)), a
            }

            function m(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    l = [],
                    s = Number(e[d.MetadataFields.STEAM_GAME_COUNT] ?? -1),
                    r = Number(e[d.MetadataFields.STEAM_ITEM_COUNT_DOTA2] ?? -1),
                    c = Number(e[d.MetadataFields.STEAM_ITEM_COUNT_TF2] ?? -1);
                return s > -1 && l.push((0, n.jsx)(C, {
                    className: t,
                    count: s,
                    label: f.default.Messages.CONNECTIONS_PROFILE_STEAM_GAMES
                }, d.MetadataFields.STEAM_GAME_COUNT)), r > -1 && l.push((0, n.jsx)(p, {
                    className: t,
                    label: f.default.Messages.CONNECTIONS_STEAM_ITEMS.format({
                        count: r
                    }),
                    imageSrc: a("448238"),
                    imageAlt: f.default.Messages.CONNECTIONS_STEAM_DOTA2
                }, d.MetadataFields.STEAM_ITEM_COUNT_DOTA2)), c > -1 && l.push((0, n.jsx)(p, {
                    className: t,
                    label: f.default.Messages.CONNECTIONS_STEAM_ITEMS.format({
                        count: c
                    }),
                    imageSrc: a("80730"),
                    imageAlt: f.default.Messages.CONNECTIONS_STEAM_TF2
                }, d.MetadataFields.STEAM_ITEM_COUNT_TF2)), l
            }

            function N(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    a = [];
                return "1" === e[d.MetadataFields.PAYPAL_VERIFIED] && a.push((0, n.jsx)(A, {
                    className: s()(t, T.paypalVerifiedTag),
                    label: f.default.Messages.CONNECTIONS_PAYPAL_VERIFIED
                }, d.MetadataFields.PAYPAL_VERIFIED)), a
            }

            function I(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    a = [],
                    l = Number(e[d.MetadataFields.EBAY_POSITIVE_FEEDBACK_PERCENTAGE] ?? -1),
                    s = "1" === e[d.MetadataFields.EBAY_TOP_RATED_SELLER];
                return l > 0 && a.push((0, n.jsx)(C, {
                    className: t,
                    count: l,
                    label: f.default.Messages.CONNECTIONS_PROFILE_EBAY_POSITIVE_FEEDBACK_PERCENTAGE,
                    percent: !0
                }, d.MetadataFields.EBAY_POSITIVE_FEEDBACK_PERCENTAGE)), s && a.push((0, n.jsx)(A, {
                    className: t,
                    label: f.default.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER
                }, d.MetadataFields.EBAY_TOP_RATED_SELLER)), a
            }

            function h(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    a = [],
                    l = "1" === e[d.MetadataFields.TIKTOK_VERIFIED],
                    s = Number(e[d.MetadataFields.TIKTOK_FOLLOWER_COUNT] ?? -1),
                    r = Number(e[d.MetadataFields.TIKTOK_FOLLOWING_COUNT] ?? -1),
                    c = Number(e[d.MetadataFields.TIKTOK_LIKES_COUNT] ?? -1);
                return s > -1 && a.push((0, n.jsx)(C, {
                    className: t,
                    count: s,
                    label: f.default.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWERS
                }, d.MetadataFields.TIKTOK_FOLLOWER_COUNT)), r > -1 && a.push((0, n.jsx)(C, {
                    className: t,
                    count: r,
                    label: f.default.Messages.CONNECTIONS_PROFILE_TIKTOK_FOLLOWING
                }, d.MetadataFields.TIKTOK_FOLLOWING_COUNT)), c > -1 && a.push((0, n.jsx)(C, {
                    className: t,
                    count: c,
                    label: f.default.Messages.CONNECTIONS_PROFILE_TIKTOK_LIKES
                }, d.MetadataFields.TIKTOK_LIKES_COUNT)), l && a.push((0, n.jsx)(A, {
                    className: t,
                    label: f.default.Messages.CONNECTIONS_TIKTOK_VERIFIED
                }, d.MetadataFields.TIKTOK_VERIFIED)), a
            }

            function O(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : void 0,
                    l = [],
                    s = Object.keys(e.metadata);
                if (null == e.application_metadata || 0 === Object.keys(e.application_metadata).length || 0 === s.length) return l;
                for (let r of c().sortBy(s, t => e.application_metadata?.[t]?.name)) {
                    let s = e.application_metadata[r];
                    if (null == s) continue;
                    let c = e.metadata[r];
                    try {
                        switch (s.type) {
                            case d.MetadataItemTypes.BOOLEAN_EQUAL:
                            case d.MetadataItemTypes.BOOLEAN_NOT_EQUAL:
                                (s.type === d.MetadataItemTypes.BOOLEAN_EQUAL && "1" === c || s.type === d.MetadataItemTypes.BOOLEAN_NOT_EQUAL && "1" !== c) && l.push((0, n.jsx)(A, {
                                    className: t,
                                    label: s.name
                                }, s.key));
                                break;
                            case d.MetadataItemTypes.DATETIME_GREATER_THAN_EQUAL:
                            case d.MetadataItemTypes.DATETIME_LESS_THAN_EQUAL:
                                l.push((0, n.jsx)(M, {
                                    className: t,
                                    date: c,
                                    locale: a,
                                    label: s.name
                                }, s.key));
                                break;
                            case d.MetadataItemTypes.INTEGER_EQUAL:
                            case d.MetadataItemTypes.INTEGER_NOT_EQUAL:
                            case d.MetadataItemTypes.INTEGER_GREATER_THAN_EQUAL:
                            case d.MetadataItemTypes.INTEGER_LESS_THAN_EQUAL:
                                l.push((0, n.jsx)(C, {
                                    className: t,
                                    count: Number(c),
                                    label: s.name
                                }, s.key))
                        }
                    } catch (e) {}
                }
                return l
            }

            function C(e) {
                let t, {
                        count: a,
                        label: l,
                        className: r,
                        percent: c
                    } = e,
                    u = (0, i.shortenAndLocalizeNumber)(a) + (c ? "%" : "");
                return t = "string" == typeof l ? f.default.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
                    name: l,
                    value: u
                }) : l.format({
                    value: u
                }), (0, n.jsx)(o.Text, {
                    className: s()(T.connectedAccountVanityMetadata, r),
                    variant: "text-xs/normal",
                    color: "interactive-active",
                    children: t
                })
            }

            function M(e) {
                let {
                    date: t,
                    locale: a,
                    label: l,
                    className: r
                } = e;
                return (0, n.jsx)(o.Text, {
                    className: s()(T.connectedAccountVanityMetadata, r),
                    variant: "text-xs/normal",
                    color: "interactive-active",
                    children: f.default.Messages.CONNECTIONS_PROFILE_GENERIC_VANITY_METRIC.format({
                        value: (0, u.getCreatedAtDate)(t, a),
                        name: l
                    })
                })
            }

            function p(e) {
                let {
                    label: t,
                    imageSrc: a,
                    imageAlt: l,
                    className: r
                } = e;
                return (0, n.jsxs)("div", {
                    className: s()(T.connectedAccountVanityMetadata, T.connectedAccountVanityMetadataItem, r),
                    children: [(0, n.jsx)(o.Tooltip, {
                        text: l,
                        children: e => (0, n.jsx)("img", {
                            ...e,
                            src: a,
                            alt: l,
                            className: T.connectedAccountVanityMetadataItemIcon
                        })
                    }), (0, n.jsx)(o.Text, {
                        variant: "text-xs/normal",
                        color: "interactive-active",
                        children: t
                    })]
                })
            }

            function A(e) {
                let {
                    label: t,
                    className: a
                } = e;
                return (0, n.jsx)(o.Text, {
                    variant: "text-xs/semibold",
                    color: "interactive-active",
                    className: s()(T.connectedAccountVanityMetadata, T.connectedAccountVanityMetadataTag, a),
                    children: t
                })
            }
        },
        574722: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return T
                }
            });
            var n = a("735250");
            a("470079");
            var l = a("803997"),
                s = a.n(l),
                r = a("148817"),
                c = a("661223"),
                o = a("600186"),
                i = a("974328"),
                u = a("329420"),
                d = a("87645"),
                f = a("362015");

            function T(e) {
                let t, {
                        color: a,
                        size: l,
                        forcedIconColor: T,
                        className: E,
                        iconClassName: _
                    } = e,
                    [m, N] = (0, c.useStateFromStoresArray)([u.default], () => [u.default.desaturateUserColors, u.default.saturation]),
                    I = (0, i.useToken)(o.default.unsafe_rawColors.PRIMARY_300).hex(),
                    h = (0, r.hex2int)(a ?? I),
                    O = (0, r.int2hsl)(h, !1, m ? N : null);
                t = null != T ? T : .3 > (0, r.getDarkness)(h) ? o.default.unsafe_rawColors.PRIMARY_630.css : o.default.unsafe_rawColors.WHITE_500.css;
                let C = l / 8;
                return (0, n.jsx)("div", {
                    style: {
                        background: O,
                        width: l,
                        height: l,
                        borderRadius: l,
                        lineHeight: `${l}px`
                    },
                    className: E,
                    children: (0, n.jsx)(d.default, {
                        color: t,
                        className: s()(f.linkIcon, _),
                        width: l - 2 * C,
                        height: l - 2 * C,
                        style: {
                            margin: C
                        }
                    })
                })
            }
        },
        575598: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return f
                }
            });
            var n = a("735250");
            a("470079");
            var l = a("148817"),
                s = a("661223"),
                r = a("600186"),
                c = a("974328"),
                o = a("329420"),
                i = a("401131"),
                u = a("982699"),
                d = a("30175");

            function f(e) {
                let t, {
                        color: a,
                        size: f,
                        forcedIconColor: T,
                        className: E,
                        iconClassName: _,
                        tooltipText: m
                    } = e,
                    [N, I] = (0, s.useStateFromStoresArray)([o.default], () => [o.default.desaturateUserColors, o.default.saturation]),
                    h = (0, c.useToken)(r.default.unsafe_rawColors.PRIMARY_300).hex(),
                    O = (0, l.hex2int)(a ?? h),
                    C = (0, l.int2hsl)(O, !1, N ? I : null);
                return t = null != T ? T : .3 > (0, l.getDarkness)(O) ? r.default.unsafe_rawColors.PRIMARY_630.css : r.default.unsafe_rawColors.WHITE_500.css, (0, n.jsx)(c.Tooltip, {
                    text: null != m ? m : d.default.Messages.CONNECTIONS_ROLE_OFFICIAL_ICON_TOOLTIP,
                    children: e => (0, n.jsx)(i.default, {
                        ...e,
                        className: E,
                        color: C,
                        size: f,
                        children: (0, n.jsx)(u.default, {
                            color: t,
                            height: f,
                            width: f,
                            className: _
                        })
                    })
                })
            }
        },
        514673: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                PlayStationVoiceExperiment: function() {
                    return n
                }
            });
            let n = (0, a("516086").createExperiment)({
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
        268822: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return n
                }
            });
            var n = a("470079").createContext(void 0)
        },
        770365: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                canGuildUseRoleIcons: function() {
                    return _
                },
                getRoleIconData: function() {
                    return d
                },
                isRoleIconAssetUrl: function() {
                    return E
                },
                replaceRoleIconSourceSize: function() {
                    return f
                }
            });
            var n = a("288990"),
                l = a("500833"),
                s = a("204606"),
                r = a("501769"),
                c = a("467006");
            let o = `${location.protocol}//${window.GLOBAL_ENV.CDN_HOST}/role-icons`,
                i = `${location.protocol}${window.GLOBAL_ENV.API_ENDPOINT}`,
                u = (0, r.isAndroid)(),
                d = (e, t) => {
                    if (null == e) return null;
                    let a = null != e.unicodeEmoji ? n.default.getByName(n.default.convertSurrogateToName(e.unicodeEmoji, !1)) : void 0;
                    return {
                        customIconSrc: T(e, t),
                        unicodeEmoji: a ?? void 0
                    }
                },
                f = (e, t) => e.replace(/size=[0-9]+/g, `size=${(0,l.getBestMediaProxySize)(t*(0,l.getDevicePixelRatio)())}`),
                T = (e, t) => {
                    let {
                        id: a,
                        icon: n
                    } = e;
                    if (null == n) return;
                    if (n.startsWith("data:")) return n;
                    let r = s.SUPPORTS_WEBP ? "webp" : "png",
                        d = "",
                        f = "quality=lossless";
                    return (null != t && (d = "size=" + (0, l.getBestMediaProxySize)(t * (0, l.getDevicePixelRatio)()), f = u ? "" : "&" + f), null != window.GLOBAL_ENV.CDN_HOST) ? `${o}/${a}/${n}.${r}?${d}${f}` : `${i}${c.Endpoints.ROLE_ICON(a,n)}?${d}`
                },
                E = e => e.startsWith(o) || e.startsWith(`${i}/roles`) && e.includes("/icons/"),
                _ = (e, t) => t?.tags?.subscription_listing_id != null || e.features.has(c.GuildFeatures.ROLE_ICONS)
        },
        602721: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                getRoleIconProps: function() {
                    return c
                },
                useRoleIcon: function() {
                    return o
                },
                useRoleIconForPreview: function() {
                    return i
                }
            });
            var n = a("470079"),
                l = a("661223"),
                s = a("327271"),
                r = a("770365");

            function c(e, t) {
                let {
                    customIconSrc: a,
                    unicodeEmoji: n
                } = (0, r.getRoleIconData)(e, t) ?? {};
                if (null != a || null != n) return {
                    src: a,
                    name: e.name,
                    roleId: e.id,
                    size: t,
                    unicodeEmoji: n
                }
            }
            let o = e => {
                    let {
                        guildId: t,
                        roleId: a,
                        size: o = 20
                    } = e, i = (0, l.useStateFromStores)([s.default], () => s.default.getGuild(t));
                    return n.useMemo(() => {
                        if (null == i || null == a) return;
                        let e = i.roles[a];
                        if ((0, r.canGuildUseRoleIcons)(i, e)) return c(e, o)
                    }, [i, a, o])
                },
                i = (e, t) => {
                    let a = (0, l.useStateFromStores)([s.default], () => s.default.getGuild(e));
                    if (null != a && (0, r.canGuildUseRoleIcons)(a, t)) return c(t)
                }
        },
        552098: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                fetchMemberCounts: function() {
                    return d
                },
                requestMembersForRole: function() {
                    return T
                }
            });
            var n = a("31775"),
                l = a.n(n),
                s = a("454836"),
                r = a("312916"),
                c = a("181123"),
                o = a("904855"),
                i = a("467006");
            async function u(e) {
                try {
                    r.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_START",
                        guildId: e
                    });
                    let t = (await s.default.get({
                        url: i.Endpoints.GUILD_ROLE_MEMBER_COUNTS(e)
                    })).body;
                    r.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS",
                        guildId: e,
                        roleMemberCount: t
                    })
                } catch (t) {
                    r.default.dispatch({
                        type: "GUILD_ROLE_MEMBER_COUNT_FETCH_FAILURE",
                        guildId: e
                    })
                }
            }
            async function d(e) {
                o.default.shouldFetch(e) && await u(e)
            }
            let f = new(l())({
                maxAge: 1e4
            });

            function T(e, t) {
                let a = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                    n = `${e}-${t}`;
                if (!a || null == f.get(n)) {
                    var l, r;
                    return f.set(n, !0), l = e, r = t, s.default.get({
                        url: i.Endpoints.GUILD_ROLE_MEMBER_IDS(l, r)
                    }).then(e => (c.default.requestMembersById(l, e.body, !1), e.body.length))
                }
                return Promise.resolve(null)
            }
        },
        904855: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var n = a("661223"),
                l = a("312916");
            let s = {},
                r = {};
            class c extends n.default.Store {
                static #e = this.displayName = "GuildRoleMemberCountStore";
                getRoleMemberCount(e) {
                    return null != e ? s[e] : null
                }
                shouldFetch(e) {
                    if (null == e) return !1;
                    let t = r[e];
                    return null == t || Date.now() - t > 12e4
                }
            }
            var o = new c(l.default, {
                GUILD_ROLE_MEMBER_COUNT_FETCH_SUCCESS: function(e) {
                    let {
                        guildId: t,
                        roleMemberCount: a
                    } = e;
                    s[t] = a, r[t] = Date.now()
                },
                GUILD_ROLE_MEMBER_COUNT_UPDATE: function(e) {
                    let {
                        guildId: t,
                        roleId: a,
                        count: n
                    } = e, l = s[t];
                    if (null == l) return !1;
                    l[a] = n
                },
                GUILD_ROLE_MEMBER_BULK_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: a,
                        added: n
                    } = e, l = s[t];
                    if (null == l || null == l[a]) return !1;
                    let r = Object.keys(n).length;
                    l[a] += r
                },
                GUILD_ROLE_MEMBER_ADD: function(e) {
                    let {
                        guildId: t,
                        roleId: a
                    } = e, n = s[t];
                    if (null == n || null == n[a]) return !1;
                    n[a] = n[a] + 1
                },
                GUILD_ROLE_MEMBER_REMOVE: function(e) {
                    let {
                        guildId: t,
                        roleId: a
                    } = e, n = s[t];
                    if (null == n || null == n[a]) return !1;
                    n[a] = Math.max(n[a] - 1, 0)
                },
                GUILD_ROLE_CREATE: function(e) {
                    let {
                        guildId: t,
                        role: a
                    } = e;
                    null == s[t] && (s[t] = {}), s[t][a.id] = 0
                },
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    delete s[t.id], delete r[t.id]
                }
            })
        },
        407327: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                ConnectedApplicationUserRoleAccount: function() {
                    return R
                },
                ConnectedUserAccount: function() {
                    return x
                },
                ConnectedUserAccounts: function() {
                    return g
                }
            }), a("653041");
            var n = a("735250"),
                l = a("470079"),
                s = a("803997"),
                r = a.n(s),
                c = a("600186"),
                o = a("24135"),
                i = a("974328"),
                u = a("936843"),
                d = a("763301"),
                f = a("244180"),
                T = a("573575"),
                E = a("360750"),
                _ = a("900438"),
                m = a("575598"),
                N = a("535291"),
                I = a("242410"),
                h = a("211056"),
                O = a("600306"),
                C = a("467006"),
                M = a("993241"),
                p = a("30175"),
                A = a("253913");

            function x(e) {
                let t, a, l, {
                    connectedAccount: s,
                    theme: u,
                    locale: N,
                    userId: x,
                    className: R,
                    showMetadata: g,
                    showInvisibleIcon: v
                } = e;
                null == g && (g = !0);
                let S = s.metadata ?? {},
                    L = g ? (0, E.getCreatedAtDate)(S[M.MetadataFields.CREATED_AT], N) : null,
                    y = (0, i.useToken)(c.default.unsafe_rawColors.TWITTER).hex(),
                    D = p.default.Messages.CONNECTION_VERIFIED;
                if (g) switch (s.type) {
                    case C.PlatformTypes.REDDIT:
                        t = (0, _.generateRedditMetadataItems)(S);
                        break;
                    case C.PlatformTypes.STEAM:
                        t = (0, _.generateSteamMetadataItems)(S);
                        break;
                    case C.PlatformTypes.TWITTER:
                        t = (0, _.generateTwitterMetadataItems)(S), "1" === S[M.MetadataFields.TWITTER_VERIFIED] && (a = y, D = p.default.Messages.CONNECTION_VERIFIED_ON_TWITTER);
                        break;
                    case C.PlatformTypes.PAYPAL:
                        t = (0, _.generatePaypalMetadataItems)(S);
                        break;
                    case C.PlatformTypes.EBAY:
                        t = (0, _.generateEbayMetadataItems)(S);
                        break;
                    case C.PlatformTypes.TIKTOK:
                        t = (0, _.generateTikTokMetadataItems)(S)
                }
                let j = d.default.get((0, T.useLegacyPlatformType)(s.type)),
                    F = j?.getPlatformUserUrl?.(s);
                null != v && v ? l = (0, n.jsx)(h.default, {
                    className: r()(A.connectedAccountOpenIconContainer, A.connectedAccountHideIcon),
                    foregroundColor: "currentColor"
                }) : null != F && (l = (0, n.jsx)(i.Anchor, {
                    href: F,
                    onClick: e => {
                        var t, a;
                        t = s.type, a = x, (0, f.trackWithMetadata)(C.AnalyticEvents.CONNECTED_ACCOUNT_VIEWED, {
                            platform_type: t,
                            other_user_id: a
                        }), (0, O.handleClick)({
                            href: F,
                            trusted: j?.type !== C.PlatformTypes.DOMAIN
                        }, e)
                    },
                    children: (0, n.jsx)(I.default, {
                        className: A.connectedAccountOpenIcon,
                        direction: I.default.Directions.RIGHT
                    })
                }));
                let w = (0, i.useToken)(c.default.colors.INTERACTIVE_MUTED).hex(),
                    P = (0, i.useToken)(c.default.colors.INTERACTIVE_ACTIVE).hex(),
                    U = s.verified ? (0, n.jsx)(m.default, {
                        className: A.connectedAccountVerifiedIcon,
                        color: a ?? w,
                        forcedIconColor: P,
                        size: 16,
                        tooltipText: D
                    }) : null;
                return (0, n.jsxs)("div", {
                    className: r()(A.connectedAccountContainer, null != t && t.length > 0 || null != L ? A.connectedAccountContainerWithMetadata : null, R),
                    children: [(0, n.jsxs)("div", {
                        className: A.connectedAccount,
                        children: [(0, n.jsx)(i.Tooltip, {
                            text: j?.name,
                            children: e => (0, n.jsx)("img", {
                                ...e,
                                alt: p.default.Messages.IMG_ALT_LOGO.format({
                                    name: j?.name
                                }),
                                className: A.connectedAccountIcon,
                                src: (0, o.isThemeDark)(u) ? j?.icon.darkSVG : j?.icon.lightSVG
                            })
                        }), (0, n.jsxs)("div", {
                            className: A.connectedAccountNameContainer,
                            children: [(0, n.jsxs)("div", {
                                className: A.connectedAccountName,
                                children: [(0, n.jsxs)("div", {
                                    className: A.connectedAccountNameTextContainer,
                                    children: [(0, n.jsx)(i.Tooltip, {
                                        overflowOnly: !0,
                                        text: s.name,
                                        children: e => (0, n.jsx)(i.Text, {
                                            ...e,
                                            variant: "text-md/semibold",
                                            color: "interactive-active",
                                            className: A.connectedAccountNameText,
                                            children: s.name
                                        })
                                    }), U]
                                }), l]
                            }), null != L ? (0, n.jsx)(i.Text, {
                                variant: "text-xs/normal",
                                color: "header-secondary",
                                children: p.default.Messages.CONNECTIONS_PROFILE_MEMBER_SINCE.format({
                                    date: L
                                })
                            }) : null]
                        })]
                    }), null != t && t.length > 0 ? (0, n.jsx)("div", {
                        className: A.connectedAccountChildren,
                        children: t
                    }) : null]
                })
            }

            function R(e) {
                let {
                    applicationRoleConnection: t,
                    className: a,
                    locale: l
                } = e, s = (0, _.generateRoleConnectionMetadataItems)(t, void 0, l);
                return (0, n.jsxs)("div", {
                    className: r()(A.connectedAccountContainer, null != s && s.length > 0 ? A.connectedAccountContainerWithMetadata : null, a),
                    children: [(0, n.jsx)("div", {
                        className: A.connectedAccount,
                        children: (0, n.jsxs)("div", {
                            className: A.connectedAccountNameContainer,
                            children: [null != t.platform_name ? (0, n.jsx)(i.Text, {
                                variant: "eyebrow",
                                color: "interactive-normal",
                                children: t.platform_name
                            }) : null, null != t.platform_username ? (0, n.jsx)("div", {
                                className: A.connectedAccountName,
                                children: (0, n.jsx)("div", {
                                    className: A.connectedAccountNameTextContainer,
                                    children: (0, n.jsx)(i.Text, {
                                        variant: "text-md/semibold",
                                        color: "interactive-active",
                                        className: A.connectedAccountNameText,
                                        children: t.platform_username
                                    })
                                })
                            }) : null]
                        })
                    }), null != s && s.length > 0 ? (0, n.jsx)("div", {
                        className: r()(A.connectedAccountChildren, A.connectedAccountChildrenNoIcon),
                        children: s
                    }) : null, (0, n.jsx)("div", {
                        children: (0, n.jsx)("div", {
                            className: A.connectedAccountPoweredBy,
                            children: (0, n.jsx)(i.Text, {
                                variant: "text-xs/normal",
                                color: "text-muted",
                                children: p.default.Messages.CONNECTIONS_PROFILE_POWERED_BY.format({
                                    applicationHook: () => (0, n.jsxs)("div", {
                                        className: A.connectedAccountPoweredByText,
                                        children: [null != t.application.bot ? (0, n.jsx)(u.default, {
                                            user: new N.default(t.application.bot),
                                            size: i.AvatarSizes.SIZE_16
                                        }) : null, (0, n.jsx)(i.Text, {
                                            variant: "text-xs/normal",
                                            color: "text-normal",
                                            children: t.application.name
                                        })]
                                    })
                                })
                            })
                        })
                    })]
                })
            }
            let g = l.forwardRef(function(e, t) {
                let {
                    connectedAccounts: a,
                    theme: l,
                    locale: s,
                    className: c,
                    userId: o
                } = e;
                if (null == a || 0 === a.length) return null;
                let i = a.filter(e => d.default.isSupported(e.type)).map(e => (0, n.jsx)(x, {
                        connectedAccount: e,
                        theme: l,
                        locale: s,
                        userId: o
                    }, `${e.type}:${e.id}`)),
                    u = [],
                    f = [];
                for (let e = 0; e < i.length; e++) {
                    let t = i[e];
                    e % 2 == 0 ? u.push(t) : f.push(t)
                }
                return (0, n.jsxs)("div", {
                    ref: t,
                    className: r()(A.connectedAccounts, c),
                    children: [(0, n.jsx)("div", {
                        className: A.connectedAccountsColumn,
                        children: u
                    }), (0, n.jsx)("div", {
                        className: A.connectedAccountsColumn,
                        children: f
                    })]
                })
            })
        },
        401131: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return u
                }
            });
            var n = a("735250"),
                l = a("470079"),
                s = a("803997"),
                r = a.n(s),
                c = a("974328"),
                o = a("171699"),
                i = a("117236");

            function u(e) {
                let {
                    children: t,
                    size: a = 16,
                    className: s,
                    flowerStarClassName: u,
                    ...d
                } = e, f = l.Children.only(t), T = (0, c.useRedesignIconContext)().enabled;
                return (0, n.jsxs)("div", {
                    className: r()(i.flowerStarContainer, s),
                    style: {
                        width: a,
                        height: a
                    },
                    children: [(0, n.jsx)(o.default, {
                        ...d,
                        className: r()(u, i.flowerStar)
                    }), (0, n.jsx)("div", {
                        className: r()(i.childContainer, {
                            [i.redesignIconChildContainer]: T
                        }),
                        children: f
                    })]
                })
            }
        },
        242410: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return d
                }
            });
            var n, l, s = a("735250");
            a("470079");
            var r = a("803997"),
                c = a.n(r),
                o = a("262113"),
                i = a("302742");
            (n = l || (l = {})).LEFT = "LEFT", n.RIGHT = "RIGHT", n.UP = "UP", n.DOWN = "DOWN", n.UP_LEFT = "UP_LEFT", n.DOWN_RIGHT = "DOWN_RIGHT";
            let u = e => {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: n = "currentColor",
                    direction: l,
                    foreground: r,
                    className: u,
                    title: d,
                    ...f
                } = e;
                return (0, s.jsxs)("svg", {
                    ...(0, o.default)(f),
                    width: t,
                    height: a,
                    className: c()(u, function(e) {
                        switch (e) {
                            case "LEFT":
                                return i.left;
                            case "RIGHT":
                                return i.right;
                            case "UP":
                                return null;
                            case "DOWN":
                                return i.down;
                            case "UP_LEFT":
                                return i.upLeft;
                            case "DOWN_RIGHT":
                                return i.downRight;
                            default:
                                throw Error(`Invalid Direction ${e}`)
                        }
                    }(l)),
                    viewBox: "0 0 24 24",
                    children: [null != d ? (0, s.jsx)("title", {
                        children: d
                    }) : null, (0, s.jsx)("polygon", {
                        className: r,
                        fill: n,
                        fillRule: "nonzero",
                        points: "13 20 11 20 11 8 5.5 13.5 4.08 12.08 12 4.16 19.92 12.08 18.5 13.5 13 8"
                    })]
                })
            };
            u.Directions = l;
            var d = u
        },
        623664: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return _
                }
            });
            var n = a("735250");
            a("470079");
            var l = a("803997"),
                s = a.n(l),
                r = a("314779"),
                c = a("859401"),
                o = a("460013"),
                i = a("212177"),
                u = a("974328"),
                d = a("262113"),
                f = a("7733");
            let T = {
                    UP: f.directionUp,
                    RIGHT: f.directionRight,
                    DOWN: f.directionDown,
                    LEFT: f.directionLeft
                },
                E = e => {
                    let {
                        direction: t = T.DOWN,
                        width: a = 24,
                        height: l = 24,
                        color: E = "currentColor",
                        transition: _ = f.transition,
                        className: m,
                        foreground: N,
                        expanded: I,
                        ...h
                    } = e, {
                        enabled: O
                    } = (0, u.useRedesignIconContext)(), C = t;
                    if (!0 === I ? C = T.DOWN : !1 === I && (C = T.RIGHT), O) {
                        let e = {
                            [T.UP]: i.ChevronSmallUpIcon,
                            [T.DOWN]: r.ChevronSmallDownIcon,
                            [T.LEFT]: c.ChevronSmallLeftIcon,
                            [T.RIGHT]: o.ChevronSmallRightIcon
                        } [C];
                        return (0, n.jsx)(e, {
                            ...h,
                            className: m,
                            width: a,
                            height: l,
                            color: E,
                            colorClass: N
                        })
                    }
                    return (0, n.jsx)("svg", {
                        className: s()(m, _, C),
                        width: a,
                        height: l,
                        viewBox: "0 0 24 24",
                        ...(0, d.default)(h),
                        children: (0, n.jsx)("path", {
                            className: N,
                            fill: "none",
                            stroke: E,
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            d: "M7 10L12 15 17 10",
                            "aria-hidden": !0
                        })
                    })
                };
            E.Directions = T;
            var _ = E
        },
        211056: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return o
                }
            });
            var n = a("735250");
            a("470079");
            var l = a("600186"),
                s = a("336328"),
                r = a("813394"),
                c = a("262113"),
                o = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: a = 24,
                        color: s = "currentColor",
                        foregroundColor: r = l.default.unsafe_rawColors.RED_400.css,
                        foreground: o,
                        background: i,
                        ...u
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, c.default)(u),
                        width: t,
                        height: a,
                        viewBox: "0 0 24 24",
                        children: [(0, n.jsx)("rect", {
                            fill: r,
                            className: o,
                            x: "2",
                            y: "21.2154",
                            width: "26",
                            height: "2",
                            transform: "rotate(-45 2 21.2154)"
                        }), (0, n.jsx)("path", {
                            fill: s,
                            className: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M10.1843 18.8115C10.7713 18.9328 11.3775 19 12 19C18.352 19 23 12 23 12C23 12 21.9643 10.4402 20.2026 8.79322L15.8265 13.1693C15.4393 14.4384 14.4382 15.4393 13.1694 15.8264L10.1843 18.8115ZM12.4818 8.02871C12.3238 8.00975 12.1631 8 12 8C9.791 8 8 9.79 8 12C8 12.1631 8.00975 12.3239 8.0287 12.4818L4.59645 15.914C2.35293 14.0375 1 12 1 12C1 12 5.648 5 12 5C13.0508 5 14.055 5.19157 14.9992 5.51132L12.4818 8.02871Z"
                        })]
                    })
                }, r.EyeSlashIcon, void 0, {
                    size: 24
                })
        },
        171699: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return s
                }
            });
            var n = a("735250");
            a("470079");
            var l = a("262113"),
                s = function(e) {
                    let {
                        width: t = 16,
                        height: a = 16,
                        color: s = "currentColor",
                        foreground: r,
                        ...c
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, l.default)(c),
                        width: t,
                        height: a,
                        viewBox: "0 0 16 15.2",
                        children: (0, n.jsx)("path", {
                            className: r,
                            fill: s,
                            fillRule: "evenodd",
                            d: "m16 7.6c0 .79-1.28 1.38-1.52 2.09s.44 2 0 2.59-1.84.35-2.46.8-.79 1.84-1.54 2.09-1.67-.8-2.47-.8-1.75 1-2.47.8-.92-1.64-1.54-2.09-2-.18-2.46-.8.23-1.84 0-2.59-1.54-1.3-1.54-2.09 1.28-1.38 1.52-2.09-.44-2 0-2.59 1.85-.35 2.48-.8.78-1.84 1.53-2.12 1.67.83 2.47.83 1.75-1 2.47-.8.91 1.64 1.53 2.09 2 .18 2.46.8-.23 1.84 0 2.59 1.54 1.3 1.54 2.09z"
                        })
                    })
                }
        },
        668299: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return c
                }
            });
            var n = a("735250");
            a("470079");
            var l = a("336328"),
                s = a("530501"),
                r = a("262113"),
                c = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 16,
                        height: a = 16,
                        color: l = "currentColor",
                        foreground: s,
                        ...c
                    } = e;
                    return (0, n.jsx)("svg", {
                        ...(0, r.default)(c),
                        width: t,
                        height: a,
                        viewBox: "0 0 12 12",
                        children: (0, n.jsx)("path", {
                            fill: l,
                            className: s,
                            d: "M6 1C3.243 1 1 3.244 1 6c0 2.758 2.243 5 5 5s5-2.242 5-5c0-2.756-2.243-5-5-5zm0 2.376a.625.625 0 110 1.25.625.625 0 010-1.25zM7.5 8.5h-3v-1h1V6H5V5h1a.5.5 0 01.5.5v2h1v1z"
                        })
                    })
                }, s.CircleInformationIcon, {}, {
                    size: 16
                })
        },
        994150: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return i
                }
            });
            var n = a("735250");
            a("470079");
            var l = a("803997"),
                s = a.n(l),
                r = a("974328"),
                c = a("30175"),
                o = a("940200");

            function i(e) {
                let t, {
                    className: a,
                    src: l,
                    unicodeEmoji: i,
                    name: u,
                    size: d = 20,
                    enableTooltip: f = !0,
                    enableHeight: T = !0,
                    onClick: E
                } = e;
                if (null == l && null == i) return null;
                return (0, n.jsx)(r.TooltipContainer, {
                    text: u,
                    "aria-label": !1,
                    shouldShow: f,
                    element: "span",
                    children: (t = (0, n.jsx)("img", {
                        alt: "",
                        "aria-label": c.default.Messages.ROLE_ICON_ALT_TEXT.format({
                            name: u
                        }),
                        className: s()(o.roleIcon, a, {
                            [o.clickable]: null != E
                        }),
                        height: T ? d : void 0,
                        src: l,
                        width: d
                    }), (null != i && (t = (0, n.jsx)("img", {
                        alt: "",
                        "aria-label": i.allNamesString,
                        className: s()(o.roleIcon, a, {
                            [o.clickable]: null != E
                        }),
                        height: T ? d : void 0,
                        src: i.url,
                        width: d
                    })), null == E) ? (0, n.jsx)(r.FocusRing, {
                        offset: {
                            left: 5
                        },
                        children: t
                    }) : (0, n.jsx)(r.Clickable, {
                        onClick: E,
                        tag: "span",
                        focusProps: {
                            offset: {
                                left: 5
                            }
                        },
                        children: t
                    }))
                })
            }
        },
        587319: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                CircleInformationIcon: function() {
                    return r
                }
            });
            var n = a("735250");
            a("470079");
            var l = a("600186"),
                s = a("11768");
            let r = e => {
                let {
                    width: t = 24,
                    height: a = 24,
                    secondaryColor: r = "transparent",
                    secondaryColorClass: c = "",
                    color: o = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...u
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, s.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("circle", {
                        cx: "12",
                        cy: "12",
                        r: "10",
                        fill: "string" == typeof r ? r : r.css,
                        className: c
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        fillRule: "evenodd",
                        d: "M23 12a11 11 0 1 1-22 0 11 11 0 0 1 22 0Zm-9.5-4.75a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-.77 3.96a1 1 0 1 0-1.96-.42l-1.04 4.86a2.77 2.77 0 0 0 4.31 2.83l.24-.17a1 1 0 1 0-1.16-1.62l-.24.17a.77.77 0 0 1-1.2-.79l1.05-4.86Z",
                        clipRule: "evenodd",
                        className: i
                    })]
                })
            }
        },
        189707: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                EyeSlashIcon: function() {
                    return r
                }
            });
            var n = a("735250");
            a("470079");
            var l = a("600186"),
                s = a("11768");
            let r = e => {
                let {
                    width: t = 24,
                    height: a = 24,
                    color: r = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: c = "",
                    ...o
                } = e;
                return (0, n.jsxs)("svg", {
                    ...(0, s.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: a,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M1.3 21.3a1 1 0 1 0 1.4 1.4l20-20a1 1 0 0 0-1.4-1.4l-20 20ZM3.16 16.05c.18.24.53.26.74.05l.72-.72c.18-.18.2-.45.05-.66a15.7 15.7 0 0 1-1.43-2.52.48.48 0 0 1 0-.4c.4-.9 1.18-2.37 2.37-3.72C7.13 6.38 9.2 5 12 5c.82 0 1.58.12 2.28.33.18.05.38 0 .52-.13l.8-.8c.25-.25.18-.67-.15-.79A9.79 9.79 0 0 0 12 3C4.89 3 1.73 10.11 1.11 11.7a.83.83 0 0 0 0 .6c.25.64.9 2.15 2.05 3.75Z",
                        className: c
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M8.18 10.81c-.13.43.36.65.67.34l2.3-2.3c.31-.31.09-.8-.34-.67a4 4 0 0 0-2.63 2.63ZM12.85 15.15c-.31.31-.09.8.34.67a4.01 4.01 0 0 0 2.63-2.63c.13-.43-.36-.65-.67-.34l-2.3 2.3Z",
                        className: c
                    }), (0, n.jsx)("path", {
                        fill: "string" == typeof r ? r : r.css,
                        d: "M9.72 18.67a.52.52 0 0 0-.52.13l-.8.8c-.25.25-.18.67.15.79 1.03.38 2.18.61 3.45.61 7.11 0 10.27-7.11 10.89-8.7a.83.83 0 0 0 0-.6c-.25-.64-.9-2.15-2.05-3.75a.49.49 0 0 0-.74-.05l-.72.72a.51.51 0 0 0-.05.66 15.7 15.7 0 0 1 1.43 2.52c.06.13.06.27 0 .4-.4.9-1.18 2.37-2.37 3.72C16.87 17.62 14.8 19 12 19c-.82 0-1.58-.12-2.28-.33Z",
                        className: c
                    })]
                })
            }
        }
    }
]);
//# sourceMappingURL=58457.6b73c2502bac3281bb11.js.map