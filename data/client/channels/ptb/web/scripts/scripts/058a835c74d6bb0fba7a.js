(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["89735"], {
        267363: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ack: function() {
                    return d
                },
                ackChannel: function() {
                    return E
                },
                bulkAck: function() {
                    return _
                },
                localAck: function() {
                    return f
                },
                enableAutomaticAck: function() {
                    return I
                },
                disableAutomaticAck: function() {
                    return C
                },
                ackGuildFeature: function() {
                    return O
                },
                ackUserFeature: function() {
                    return p
                }
            });
            var u = n("249654"),
                l = n("913144"),
                i = n("401690"),
                r = n("233069"),
                a = n("42203"),
                o = n("245997"),
                s = n("697218"),
                c = n("49111");

            function d(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    u = arguments.length > 3 ? arguments[3] : void 0,
                    i = arguments.length > 4 ? arguments[4] : void 0;
                l.default.dispatch({
                    type: "CHANNEL_ACK",
                    channelId: e,
                    messageId: u,
                    immediate: t,
                    force: n,
                    context: c.CURRENT_APP_CONTEXT,
                    location: i
                })
            }

            function E(e) {
                e.isCategory() ? ! function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        u = a.default.getChannel(e);
                    if (null == u || null == u.guild_id) return;
                    let l = o.default.getCategories(u.guild_id);
                    if (null == l[e]) return;
                    let s = l[e].filter(e => {
                            let {
                                channel: t
                            } = e;
                            return (0, r.isGuildReadableType)(t.type)
                        }).map(e => {
                            let {
                                channel: t
                            } = e;
                            return t.id
                        }),
                        c = [...s];
                    for (let e of (s.forEach(e => {
                            let t = i.default.getActiveJoinedThreadsForParent(u.guild_id, e);
                            for (let e in t) c.push(e)
                        }), c)) d(e, t, n)
                }(e.id, !0, !0) : e.isForumLikeChannel() ? d(e.id, !0, !0, u.default.fromTimestamp(Date.now())) : d(e.id, !0, !0)
            }

            function _(e) {
                l.default.dispatch({
                    type: "BULK_ACK",
                    channels: e,
                    context: c.CURRENT_APP_CONTEXT
                })
            }

            function f(e) {
                l.default.dispatch({
                    type: "CHANNEL_LOCAL_ACK",
                    channelId: e
                })
            }

            function I(e, t) {
                l.default.dispatch({
                    type: "ENABLE_AUTOMATIC_ACK",
                    channelId: e,
                    windowId: t
                })
            }

            function C(e, t) {
                l.default.dispatch({
                    type: "DISABLE_AUTOMATIC_ACK",
                    channelId: e,
                    windowId: t
                })
            }

            function O(e, t, n) {
                l.default.dispatch({
                    type: "GUILD_FEATURE_ACK",
                    id: e,
                    ackType: t,
                    ackedId: n,
                    local: !1
                })
            }

            function p(e, t) {
                var n;
                let u = null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                null != u && l.default.dispatch({
                    type: "USER_NON_CHANNEL_ACK",
                    ackType: e,
                    ackedId: t,
                    local: !1
                })
            }
        },
        304580: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return I
                }
            });
            var u, l, i = n("37983");
            n("884691");
            var r = n("414456"),
                a = n.n(r),
                o = n("394846"),
                s = n("77078"),
                c = n("945330"),
                d = n("381546"),
                E = n("782340"),
                _ = n("955892");
            (u = l || (l = {})).DEFAULT = "", u.BOLD = "Bold", u.SOLID = "Solid";
            let f = e => {
                let {
                    closeAction: t,
                    variant: n,
                    keybind: u,
                    className: r
                } = e;
                return (0, i.jsxs)("div", {
                    className: a(_.container, r),
                    children: [(0, i.jsx)(s.Clickable, {
                        className: a(_.closeButton, {
                            [_.closeButtonBold]: n === l.BOLD,
                            [_.closeButtonSolid]: n === l.SOLID
                        }),
                        onClick: t,
                        "aria-label": E.default.Messages.CLOSE,
                        children: n === l.SOLID ? (0, i.jsx)(d.default, {
                            width: 24,
                            height: 24,
                            "aria-hidden": !0
                        }) : (0, i.jsx)(c.default, {
                            width: 18,
                            height: 18,
                            "aria-hidden": !0
                        })
                    }), o.isMobile ? null : (0, i.jsx)("div", {
                        className: a(_.keybind),
                        "aria-hidden": !0,
                        children: u
                    })]
                })
            };
            f.defaultProps = {
                variant: l.DEFAULT
            }, f.Variants = l;
            var I = f
        },
        80300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                backgroundImagePreloader: function() {
                    return c
                }
            });
            var u = n("37983"),
                l = n("884691"),
                i = n("310013"),
                r = n.n(i),
                a = n("407063");
            let o = /url\(['"](.*)['"]\)/,
                s = e => {
                    if (null == e || "" === e || "none" === e) return null;
                    let t = e.match(o);
                    return null != t ? t[1] : e
                };

            function c(e) {
                class t extends l.Component {
                    componentDidUpdate(e, t) {
                        if (t === this.state) return;
                        let {
                            cached: n,
                            loaded: u
                        } = this.state, {
                            style: l
                        } = this.props, i = null != l ? s(l.backgroundImage) : null;
                        null == i && i !== n ? this.setState({
                            loaded: !0,
                            cached: i
                        }) : this.cachedURLs.indexOf(i) >= 0 ? this.setState({
                            loaded: !0,
                            cached: i
                        }) : null != i && i !== n && !0 === u && this.setState({
                            loaded: !1
                        }, () => this.preloadURL(i))
                    }
                    preloadURL(e) {
                        this.canceller && this.canceller(), this.canceller = (0, a.loadImage)(e, t => {
                            this.canceller && (this.canceller = null), !t && (this.cachedURLs.push(e), this.setState({
                                cached: e,
                                loaded: !0
                            }));
                            let {
                                onBackgroundImageLoad: n
                            } = this.props;
                            n && n(t, e)
                        })
                    }
                    componentWillUnmount() {
                        this.canceller && this.canceller(), this.cachedURLs.length = 0
                    }
                    render() {
                        let {
                            style: t,
                            onBackgroundImageLoad: n,
                            ...l
                        } = this.props, {
                            loaded: i,
                            cached: r
                        } = this.state;
                        if (!i && null != t) {
                            var a;
                            t = {
                                ...t,
                                backgroundImage: null == (a = r) || "" === a || "none" === a ? "none" : "url(".concat(a, ")")
                            }
                        }
                        return (0, u.jsx)(e, {
                            style: t,
                            ...l
                        })
                    }
                    constructor(e) {
                        super(e), this.cachedURLs = [], this.canceller = null;
                        let {
                            style: t
                        } = e, n = null != t ? s(t.backgroundImage) : null;
                        this.cachedURLs = [n], this.state = {
                            cached: n,
                            loaded: !0
                        }
                    }
                }
                return r(t, e), t
            }
        },
        349503: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                FetchState: function() {
                    return l
                },
                default: function() {
                    return E
                }
            });
            var u, l, i = n("446674"),
                r = n("913144");
            (u = l || (l = {}))[u.FETCHING = 0] = "FETCHING", u[u.FETCHED = 1] = "FETCHED", u[u.ERROR = 2] = "ERROR";
            let a = {},
                o = {},
                s = new Set,
                c = {};
            class d extends i.default.Store {
                getApplication(e) {
                    if (null != e) return a[e]
                }
                getApplications() {
                    return a
                }
                getApplicationFetchState(e) {
                    if (null != e) return o[e]
                }
                getApplicationFetchStates() {
                    return o
                }
                isInvalidApplication(e) {
                    return null != e && s.has(e)
                }
                getInvalidApplicationIds() {
                    return s
                }
                isFetching(e) {
                    return this.getApplicationFetchState(e) === l.FETCHING
                }
                getApplicationLastFetchTime(e) {
                    if (null != e) return c[e]
                }
            }
            d.displayName = "ApplicationDirectoryApplicationsStore";
            var E = new d(r.default, {
                APPLICATION_DIRECTORY_FETCH_APPLICATION: function(e) {
                    let {
                        applicationId: t
                    } = e;
                    o = {
                        ...o,
                        [t]: l.FETCHING
                    }
                },
                APPLICATION_DIRECTORY_FETCH_APPLICATION_SUCCESS: function(e) {
                    let {
                        application: t
                    } = e;
                    a = {
                        ...a,
                        [t.id]: t
                    }, o = {
                        ...o,
                        [t.id]: l.FETCHED
                    };
                    let n = Date.now();
                    c = {
                        ...c,
                        [t.id]: n
                    }, s.has(t.id) && (s.delete(t.id), s = new Set(s))
                },
                APPLICATION_DIRECTORY_FETCH_APPLICATION_FAILURE: function(e) {
                    let {
                        applicationId: t,
                        isInvalidApplication: n
                    } = e;
                    o = {
                        ...o,
                        [t]: l.ERROR
                    }, n && (s.add(t), s = new Set(s))
                }
            })
        },
        412707: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ApplicationDirectoryViews: function() {
                    return i
                },
                ApplicationDirectoryEntrypointNames: function() {
                    return r
                },
                useApplicationDirectoryHistory: function() {
                    return _
                },
                getPreviousView: function() {
                    return f
                },
                getCurrentView: function() {
                    return I
                },
                setEntrypoint: function() {
                    return C
                },
                setGuildId: function() {
                    return O
                },
                resetApplicationDirectoryHistory: function() {
                    return p
                },
                setTrackedOpenedFromExternalEntrypoint: function() {
                    return A
                }
            });
            var u, l, i, r, a = n("803182"),
                o = n("308503"),
                s = n("393414"),
                c = n("349503"),
                d = n("49111");
            (u = i || (i = {})).HOME = "home", u.SEARCH = "search", u.APPLICATION = "application", (l = r || (r = {})).EXTERNAL = "External", l.KEYBOARD_SHORTCUT = "Keyboard Shortcut", l.APPLICATION_DIRECTORY_URL = "Application Directory URL", l.APPLICATION_DIRECTORY_PROFILE_EMBED = "Application Directory Profile Embed", l.APPLICATION_DIRECTORY_UPSELL_MODAL = "Application Directory Upsell Modal", l.GUILD_HEADER_POPOUT = "Guild Header Popout", l.GUILD_SETTINGS = "Guild Settings", l.GUILD_INTEGRATION_SETTINGS = "Guild Integration Settings", l.GUILD_CONTEXT_MENU = "Guild Context Menu";
            let E = (0, o.default)(() => ({
                    guildId: null,
                    entrypoint: null,
                    trackedOpenedFromExternalEntrypoint: !1
                })),
                _ = E;

            function f() {
                let {
                    location: {
                        state: e
                    }
                } = (0, s.getHistory)();
                return null == e ? void 0 : e.previousView
            }

            function I() {
                var e, t;
                let {
                    location: {
                        pathname: n
                    }
                } = (0, s.getHistory)(), u = (0, a.matchPath)(n, {
                    path: d.Routes.APPLICATION_DIRECTORY,
                    exact: !0
                }), l = (0, a.matchPath)(n, {
                    path: d.Routes.APPLICATION_DIRECTORY_SEARCH,
                    exact: !0
                }), r = (0, a.matchPath)(n, {
                    path: [d.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId"), d.Routes.APPLICATION_DIRECTORY_PROFILE(":applicationId", ":section")],
                    exact: !0
                }), {
                    applicationId: o,
                    section: E
                } = null !== (e = null == r ? void 0 : r.params) && void 0 !== e ? e : {};
                if (null != u) return {
                    type: i.HOME
                };
                if (null != l) return {
                    type: i.SEARCH
                };
                if (null != r && null != o) {
                    let e = null === (t = c.default.getApplication(o)) || void 0 === t ? void 0 : t.name;
                    return {
                        type: i.APPLICATION,
                        applicationId: o,
                        applicationName: e,
                        section: E
                    }
                }
            }

            function C(e) {
                E.setState({
                    entrypoint: e
                })
            }

            function O(e) {
                E.setState({
                    guildId: e
                })
            }

            function p() {
                E.setState({
                    entrypoint: null,
                    guildId: null
                })
            }

            function A(e) {
                E.setState({
                    trackedOpenedFromExternalEntrypoint: e
                })
            }
        },
        320954: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var u = n("917351"),
                l = n.n(u);

            function i(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
                return l(e).map(e => "null" === e.channel.id ? t[e.channel.id] : [e, t[e.channel.id]]).flattenDeep().filter(n).value()
            }
        },
        558986: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getEmojiCaptionsForUser: function() {
                    return r
                }
            });
            var u = n("872717"),
                l = n("913144"),
                i = n("49111");
            async function r() {
                l.default.dispatch({
                    type: "EMOJI_CAPTIONS_FETCH"
                });
                try {
                    let {
                        body: e
                    } = await u.default.get({
                        url: i.Endpoints.EMOJI_CAPTIONS_GET
                    }), t = e.items.reduce((e, t) => ({
                        ...e,
                        [t.emoji_id]: t.emoji_captions
                    }), {});
                    l.default.dispatch({
                        type: "EMOJI_CAPTIONS_FETCH_SUCCESS",
                        emojiCaptions: t
                    })
                } catch (e) {
                    l.default.dispatch({
                        type: "EMOJI_CAPTIONS_FETCH_ERROR",
                        is4XXError: function(e) {
                            return (null == e ? void 0 : e.status) >= 400 && (null == e ? void 0 : e.status) <= 499
                        }(e.body)
                    })
                }
            }
        },
        236266: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getEmojiCaptionsExperimentConfig: function() {
                    return i
                }
            });
            var u = n("862205");
            let l = (0, u.createExperiment)({
                kind: "user",
                id: "2023-10_emoji_captions",
                label: "Emoji Captions Experiment",
                defaultConfig: {
                    isEnabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enabled",
                    config: {
                        isEnabled: !0
                    }
                }]
            });

            function i(e) {
                let {
                    location: t,
                    trackExposureOptions: n = {},
                    autoTrackExposure: u = !0
                } = e, i = l.getCurrentConfig({
                    location: t
                }, {
                    autoTrackExposure: u,
                    trackExposureOptions: n
                });
                return i
            }
        },
        765969: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                maybeGetEmojiCaptionsForUser: function() {
                    return a
                }
            });
            var u = n("697218"),
                l = n("558986"),
                i = n("236266"),
                r = n("802461");
            async function a() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown",
                    t = u.default.getCurrentUser();
                if (null == t) return;
                let n = (0, i.getEmojiCaptionsExperimentConfig)({
                    location: e
                });
                if (!n.isEnabled || r.default.getIsFetching()) return;
                let a = r.default.getEmojiCaptionsTTL();
                !(null != a && Date.now() < a) && await (0, l.getEmojiCaptionsForUser)()
            }
        },
        298878: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var u = n("37983");
            n("884691");
            var l = n("669491"),
                i = n("956089"),
                r = n("782340");

            function a(e) {
                let {
                    className: t,
                    color: n = l.default.unsafe_rawColors.BRAND_500.css,
                    ...a
                } = e;
                return (0, u.jsx)(i.TextBadge, {
                    ...a,
                    text: r.default.Messages.BETA,
                    color: n,
                    className: t
                })
            }
        },
        13162: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getPacksForUser: function() {
                    return o
                },
                collectPack: function() {
                    return s
                },
                uncollectPack: function() {
                    return c
                },
                updateInventorySettings: function() {
                    return d
                },
                getPackMetadata: function() {
                    return E
                },
                dismissPackAddedNotification: function() {
                    return _
                }
            });
            var u = n("872717"),
                l = n("913144"),
                i = n("569883"),
                r = n("871336"),
                a = n("49111");
            async function o() {
                l.default.dispatch({
                    type: "INVENTORY_FETCH"
                });
                try {
                    let e = await u.default.get({
                        url: a.Endpoints.INVENTORY_GET
                    });
                    l.default.dispatch({
                        type: "INVENTORY_FETCH_SUCCESS",
                        packs: e.body.map(e => r.default.fromServer(e))
                    })
                } catch (e) {
                    l.default.dispatch({
                        type: "INVENTORY_FETCH_ERROR",
                        is4XXError: function(e) {
                            return (null == e ? void 0 : e.status) >= 400 && (null == e ? void 0 : e.status) <= 499
                        }(e.body)
                    })
                }
            }
            async function s(e) {
                let {
                    authorId: t,
                    packId: n,
                    expressionName: i
                } = e;
                try {
                    let e = await u.default.put({
                        url: a.Endpoints.INVENTORY_ADD_PACK,
                        body: {
                            author_id: t,
                            pack_id: n,
                            name_override: i
                        }
                    });
                    l.default.dispatch({
                        type: "INVENTORY_COLLECT_PACK_SUCCESS",
                        pack: r.default.fromServer(e.body)
                    })
                } catch (e) {
                    return
                }
            }
            async function c(e) {
                let {
                    packId: t
                } = e;
                try {
                    await u.default.put({
                        url: a.Endpoints.INVENTORY_REMOVE_PACK,
                        body: {
                            pack_id: t
                        }
                    }), l.default.dispatch({
                        type: "INVENTORY_REMOVE_PACK_SUCCESS",
                        packId: t
                    })
                } catch (e) {
                    return
                }
            }
            async function d(e) {
                let {
                    guildId: t,
                    settings: n
                } = e;
                try {
                    await u.default.patch({
                        url: a.Endpoints.INVENTORY_UPDATE_SETTINGS(t),
                        body: {
                            is_emoji_pack_collectible: n.isEmojiPackCollectible
                        }
                    })
                } catch (e) {
                    return
                }
            }
            async function E(e) {
                let {
                    packId: t
                } = e;
                try {
                    let e = await u.default.get({
                        url: a.Endpoints.INVENTORY_PACK_METADATA(t)
                    });
                    return i.default.createFromServer(e.body)
                } catch (e) {
                    return
                }
            }

            function _() {
                l.default.dispatch({
                    type: "INVENTORY_DISMISS_PACK_ADDED_NOTIFICATION"
                })
            }
        },
        365058: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                INVENTORY_MAX_PACKS: function() {
                    return u
                },
                INVENTORY_MAX_FREE_PACKS: function() {
                    return l
                },
                INVENTORY_PACK_ADDED_NOTIFICATION_DURATION: function() {
                    return i
                }
            });
            let u = 100,
                l = 1,
                i = 2e3
        },
        529932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getJoinedEmojiSourceGuildData: function() {
                    return C
                },
                useEmojiAndSourceGuild: function() {
                    return O
                },
                usePackCollectionData: function() {
                    return A
                },
                useExpressionSourceGuildDataForGuildLeaveModal: function() {
                    return R
                }
            });
            var u = n("884691"),
                l = n("65597"),
                i = n("385976"),
                r = n("858619"),
                a = n("765969"),
                o = n("305961"),
                s = n("697218"),
                c = n("719923"),
                d = n("252931"),
                E = n("166465"),
                _ = n("557562"),
                f = n("446066"),
                I = n("49111");
            let C = (e, t, n) => {
                    let u = null != n ? e.getCustomEmojiById(n) : null;
                    switch (null == u ? void 0 : u.type) {
                        case r.EmojiTypes.GUILD:
                            return {
                                emoji: u, joinedEmojiSourceGuildRecord: t.getGuild(null == u ? void 0 : u.guildId)
                            };
                        case r.EmojiTypes.PACK:
                            return {
                                emoji: u, joinedEmojiSourceGuildRecord: t.getGuild(null == u ? void 0 : u.packId)
                            };
                        default:
                            return {
                                emoji: null, joinedEmojiSourceGuildRecord: null
                            }
                    }
                },
                O = e => {
                    let {
                        emojiId: t,
                        refreshPositionKey: n
                    } = e, {
                        joinedEmojiSourceGuildRecord: r,
                        emoji: a
                    } = (0, l.useStateFromStoresObject)([i.default, o.default], () => C(i.default, o.default, t)), s = null != r, c = null != r && r.hasFeature(I.GuildFeatures.DISCOVERABLE), d = (!s || c) && null != t, [E, _] = u.useState(d), O = null != r ? f.default.createFromGuildRecord(r) : null, [p, A] = u.useState(O);
                    return u.useEffect(() => {
                        null == n || n();
                        let e = async () => {
                            let e = null != t ? await f.default.getGuildFromEmojiId(t) : null;
                            A(e), _(!1), null == n || n()
                        };
                        if (d) {
                            e();
                            return
                        }
                        null == n || n()
                    }, [t, d]), {
                        expressionSourceGuild: p,
                        joinedEmojiSourceGuildRecord: r,
                        hasJoinedEmojiSourceGuild: s,
                        emoji: a,
                        isFetching: E
                    }
                },
                p = e => {
                    let {
                        expressionSourceGuild: t
                    } = e, n = (0, l.default)([E.default], () => null != t ? E.default.getPackByPackId({
                        packId: t.id
                    }) : null);
                    return null != n ? n : null
                },
                A = e => {
                    let {
                        expressionSourceGuild: t
                    } = e, n = (0, l.default)([s.default], () => s.default.getCurrentUser()), u = c.default.isPremium(n), i = (0, d.useInventoryGuildPacksUserExperiment)({
                        expressionSourceGuild: t
                    }), r = (0, l.default)([E.default], () => E.default.countPacksCollected()), a = p({
                        expressionSourceGuild: t
                    }), o = r >= (0, _.getMaxPacksForUserType)(u);
                    return {
                        ...i,
                        collectedPack: a,
                        numPacksCollected: r,
                        hasReachedMaxPacksCollected: o,
                        isPremium: u
                    }
                },
                R = e => {
                    let t = (0, d.useInventoryGuildPacksUserExperiment)({
                            expressionSourceGuild: f.default.createFromGuildRecord(e),
                            autoTrackExposure: !1
                        }),
                        n = (0, d.useInventoryGuildSettingsExperiment)({
                            guildId: e.id,
                            autoTrackExposure: !1
                        }),
                        r = t.collectEnabled && n.allowCollection,
                        o = (0, l.default)([i.default], () => {
                            let t = i.default.getGuildEmoji(e.id).filter(e => 0 === e.roles.length && e.available && !e.managed);
                            return 0 === t.length ? null : t[0].id
                        }),
                        [s, c] = u.useState(null);
                    return u.useEffect(() => {
                        let e = async e => {
                            c(await f.default.getGuildFromEmojiId(e))
                        };
                        r && null != o && e(o)
                    }, []), u.useEffect(() => {
                        (0, _.maybeGetPacksForUser)("guild leave modal"), (0, a.maybeGetEmojiCaptionsForUser)("guild leave modal")
                    }, []), s
                }
        },
        557562: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                maybeGetPacksForUser: function() {
                    return I
                },
                getPackIconURL: function() {
                    return C
                },
                getAddOrRemovePackHandler: function() {
                    return O
                },
                getMaxPacksForUserType: function() {
                    return p
                }
            });
            var u = n("811022"),
                l = n("412745"),
                i = n("697218"),
                r = n("599110"),
                a = n("315102"),
                o = n("252931"),
                s = n("13162"),
                c = n("166465"),
                d = n("365058"),
                E = n("49111");
            let _ = new u.default("InventoryUtils");

            function f(e) {}
            async function I() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown",
                    t = "maybeGetPacks, trigger point: ".concat(e, " "),
                    n = i.default.getCurrentUser();
                if (null == n) {
                    f(t + "no current user");
                    return
                }
                let u = (0, o.getInventoryGuildPacksUserExperimentConfig)({
                    user: n
                });
                if (!u.viewAndUseEnabled) {
                    f(t + "packs experiment not enabled"), c.default.hasPersistedState() && c.default.clear();
                    return
                }
                let l = c.default.getPackEmojisTTL();
                if (null != l && Date.now() < l) {
                    f(t + "ttl has not passed");
                    return
                }
                if (c.default.getIsFetching()) {
                    f(t + "currently fetching, so not going to fetch again");
                    return
                }
                f(t + "fetching"), await (0, s.getPacksForUser)()
            }

            function C(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return a.default.getGuildIconURL({
                    id: e.id,
                    size: t,
                    icon: e.icon,
                    canAnimate: n
                })
            }
            let O = e => {
                    let {
                        expressionSourceGuild: t,
                        action: n,
                        onComplete: u,
                        nonce: i,
                        expressionName: a
                    } = e;
                    return () => {
                        if (null == t) {
                            null == u || u();
                            return
                        }
                        let e = t.id,
                            o = t.isDiscoverable();
                        n === l.EmojiPopoutType.ADD_PACK ? (0, s.collectPack)({
                            packId: e,
                            expressionName: o ? void 0 : a
                        }) : n === l.EmojiPopoutType.REMOVE_PACK && (0, s.uncollectPack)({
                            packId: e
                        }), r.default.track(E.AnalyticEvents.INVENTORY_PACK_ACTION_COMPLETED, {
                            type: n,
                            inventory_pack_id: e,
                            nonce: i
                        }), null == u || u()
                    }
                },
                p = e => e ? d.INVENTORY_MAX_PACKS : d.INVENTORY_MAX_FREE_PACKS
        },
        446066: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var u, l = n("872717"),
                i = n("666038"),
                r = n("813006"),
                a = n("315102"),
                o = n("159885"),
                s = n("886167"),
                c = n("49111");
            (u || (u = {})).GUILD = "GUILD";
            let d = async e => {
                let t = null;
                try {
                    var n;
                    let u = await l.default.get({
                        url: c.Endpoints.EMOJI_SOURCE_DATA(e),
                        oldFormErrors: !0,
                        timeout: 5e3
                    });
                    (null == u ? void 0 : null === (n = u.body) || void 0 === n ? void 0 : n.guild) != null && (t = {
                        guild: E.createFromServer(u.body.guild),
                        type: u.body.type
                    })
                } catch {}
                return t
            };
            class E extends i.default {
                getIconURL(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return a.default.getGuildIconURL({
                        id: this.id,
                        size: e,
                        icon: this.icon,
                        canAnimate: t
                    })
                }
                getIconSource(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return a.default.getAnimatableSourceWithFallback(t, t => a.default.getGuildIconSource({
                        id: this.id,
                        size: e,
                        icon: this.icon,
                        canAnimate: t
                    }))
                }
                hasFeature(e) {
                    return this.features.has(e)
                }
                isDiscoverable() {
                    return this.hasFeature(c.GuildFeatures.DISCOVERABLE)
                }
                get acronym() {
                    return (0, o.getAcronym)(this.name)
                }
                static async getGuildFromEmojiId(e) {
                    let t = await d(e),
                        n = null != t && (null == t ? void 0 : t.type) === u.GUILD;
                    return n ? t.guild : null
                }
                static _mapCommon(e) {
                    var t;
                    return {
                        id: e.id,
                        name: e.name,
                        icon: e.icon,
                        description: e.description,
                        features: new Set(null !== (t = e.features) && void 0 !== t ? t : new Set)
                    }
                }
                static createFromGuildRecord(e) {
                    return new E({
                        ...E._mapCommon(e),
                        premiumTier: e.premiumTier,
                        premiumSubscriberCount: e.premiumSubscriberCount,
                        presenceCount: null,
                        memberCount: null,
                        emojis: null,
                        inventorySettings: e.inventorySettings
                    })
                }
                static createFromDiscoverableGuild(e) {
                    return new E({
                        ...E._mapCommon(e),
                        premiumTier: null,
                        premiumSubscriberCount: e.premiumSubscriptionCount,
                        presenceCount: e.presenceCount,
                        memberCount: e.memberCount,
                        emojis: e.emojis,
                        inventorySettings: void 0
                    })
                }
                static createFromServer(e) {
                    return new E({
                        ...E._mapCommon(e),
                        premiumTier: e.premium_tier,
                        premiumSubscriberCount: e.premium_subscription_count,
                        presenceCount: e.approximate_presence_count,
                        memberCount: e.approximate_member_count,
                        emojis: e.emojis,
                        inventorySettings: (0, s.guildInventorySettingsFromServer)(e.inventory_settings)
                    })
                }
                static createFromGuildType(e) {
                    return e instanceof E ? e : e instanceof r.default ? E.createFromGuildRecord(e) : E.createFromDiscoverableGuild(e)
                }
                constructor(e) {
                    super(), this.id = e.id, this.name = e.name, this.icon = e.icon, this.description = e.description, this.features = e.features, this.premiumTier = e.premiumTier, this.premiumSubscriberCount = e.premiumSubscriberCount, this.presenceCount = e.presenceCount, this.memberCount = e.memberCount, this.emojis = e.emojis, this.inventorySettings = e.inventorySettings
                }
            }
        },
        569883: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var u = n("666038");
            class l extends u.default {
                static createFromServer(e) {
                    return new l({
                        collectedCount: e.collected_count
                    })
                }
                constructor(e) {
                    super(), this.collectedCount = e.collectedCount
                }
            }
        },
        412745: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EmojiPopoutType: function() {
                    return r
                },
                getEmojiPopoutData: function() {
                    return E
                }
            });
            var u, l, i, r, a = n("365058"),
                o = n("782340");
            (u = i || (i = {})).DEFAULT = "Custom Emoji Popout", u.CROSS_SERVER = "Custom Emoji Popout (Cross-Server)", u.UPSELL_CURRENT_SERVER_JOINED = "Custom Emoji Popout (Upsell Joined Current-Server)", u.UPSELL_CROSS_SERVER_JOINED = "Custom Emoji Popout (Upsell Joined Cross-Server)", u.UPSELL_CROSS_SERVER_JOINABLE = "Custom Emoji Popout (Upsell Not-Joined Cross-Server)", u.UPSELL_CROSS_SERVER_UNJOINABLE = "Custom Emoji Popout (Soft Upsell)", (l = r || (r = {})).GET_PREMIUM_INVENTORY_DISABLED = "GET_PREMIUM_INVENTORY_DISABLED", l.GET_PREMIUM_INVENTORY_ENABLED = "GET_PREMIUM_INVENTORY_ENABLED", l.JOIN_GUILD = "JOIN_GUILD", l.ADD_PACK = "ADD_PACK", l.REMOVE_PACK = "REMOVE_PACK", l.UNAVAILABLE = "UNAVAILABLE";
            let s = e => {
                    let {
                        isPremium: t,
                        hasJoinedEmojiSourceGuild: n,
                        isUnusableRoleSubscriptionEmoji: u,
                        emojiComesFromCurrentGuild: l,
                        isDiscoverable: r
                    } = e, a = i.DEFAULT;
                    return t && !n && r ? a = i.CROSS_SERVER : t || !n || u ? !t && !n && (a = r ? i.UPSELL_CROSS_SERVER_JOINABLE : i.UPSELL_CROSS_SERVER_UNJOINABLE) : a = l ? i.UPSELL_CURRENT_SERVER_JOINED : i.UPSELL_CROSS_SERVER_JOINED, a
                },
                c = e => {
                    let {
                        isPremium: t,
                        hasJoinedEmojiSourceGuild: n,
                        isUnusableRoleSubscriptionEmoji: u,
                        isDiscoverable: l,
                        emojiComesFromCurrentGuild: i,
                        userIsRoleSubscriber: r,
                        isRoleSubscriptionEmoji: a,
                        shouldHideRoleSubscriptionCTA: s,
                        packCollectionData: c,
                        onOpenPremiumSettings: d
                    } = e, E = null, _ = (null == c ? void 0 : c.collectEnabled) === !0, f = (null == c ? void 0 : c.viewAndUseEnabled) === !0, I = (null == c ? void 0 : c.collectedPack) != null;
                    if ((_ || f && I) && !n) {
                        let e = _ && (null == c ? void 0 : c.showTryPacksModalAndV2Copy) === !0;
                        return e ? I ? o.default.Messages.EMOJI_POPOUT_ADDED_PACK_DESCRIPTION : o.default.Messages.INVENTORY_EMOJI_FROM_ADDABLE_PACK : null
                    }
                    return E = t ? n ? a ? s && u ? o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION : u ? r ? o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION : o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION : o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_SUBSCRIBED_DESCRIPTION : i ? o.default.Messages.EMOJI_POPOUT_PREMIUM_CURRENT_GUILD_DESCRIPTION : o.default.Messages.EMOJI_POPOUT_PREMIUM_JOINED_GUILD_DESCRIPTION : l ? o.default.Messages.EMOJI_POPOUT_PREMIUM_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : o.default.Messages.EMOJI_POPOUT_PREMIUM_UNJOINED_PRIVATE_GUILD_DESCRIPTION : n ? s && u ? o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION : u ? r ? o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION : o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION : i ? o.default.Messages.EMOJI_POPOUT_CURRENT_GUILD_DESCRIPTION : o.default.Messages.EMOJI_POPOUT_JOINED_GUILD_DESCRIPTION : l ? o.default.Messages.EMOJI_POPOUT_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : o.default.Messages.EMOJI_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
                        openPremiumSettings: d
                    })
                },
                d = e => {
                    var t;
                    let {
                        isPremium: n,
                        hasJoinedEmojiSourceGuild: u,
                        isUnusableRoleSubscriptionEmoji: l,
                        isDiscoverable: i,
                        packCollectionData: s
                    } = e, c = (null == s ? void 0 : s.collectEnabled) === !0, d = (null == s ? void 0 : s.viewAndUseEnabled) === !0, E = (null == s ? void 0 : s.collectedPack) != null, _ = (null == s ? void 0 : s.showTryPacksModalAndV2Copy) === !0, f = !c && !E, I = !u && i;
                    if ((f || !d) && n && I) return {
                        type: r.JOIN_GUILD,
                        text: o.default.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON,
                        description: null
                    };
                    if (!n && (u && !l || (f || !d) && I)) return {
                        type: r.GET_PREMIUM_INVENTORY_DISABLED,
                        text: o.default.Messages.EMOJI_POPOUT_PREMIUM_CTA,
                        description: null
                    };
                    if (c && !u && !E && n) return {
                        type: r.ADD_PACK,
                        text: o.default.Messages.INVENTORY_ADD_PACK,
                        description: _ ? o.default.Messages.INVENTORY_ADD_PACK_WITHOUT_JOINING_V2.format({
                            maxPacks: a.INVENTORY_MAX_PACKS
                        }) : o.default.Messages.INVENTORY_ADD_PACK_WITHOUT_JOINING
                    };
                    else if (!c || u || E || n) {
                        if (c && !u && E) return {
                            type: r.REMOVE_PACK,
                            text: o.default.Messages.INVENTORY_REMOVE_PACK,
                            description: _ ? null : o.default.Messages.INVENTORY_REMOVE_PACK_DESCRIPTION
                        }
                    } else {
                        let e = (null !== (t = null == s ? void 0 : s.numPacksCollected) && void 0 !== t ? t : 0) >= a.INVENTORY_MAX_FREE_PACKS,
                            n = e ? o.default.Messages.INVENTORY_ADD_NITRO_DESCRIPTION_WITH_PLURAL.format({
                                maxFreePacks: a.INVENTORY_MAX_FREE_PACKS,
                                maxPacks: a.INVENTORY_MAX_PACKS
                            }) : o.default.Messages.INVENTORY_ADD_PACK_NON_NITRO.format({
                                maxFreePacks: a.INVENTORY_MAX_FREE_PACKS,
                                maxPacks: a.INVENTORY_MAX_PACKS
                            });
                        return {
                            type: e ? r.GET_PREMIUM_INVENTORY_ENABLED : r.ADD_PACK,
                            text: e ? o.default.Messages.EMOJI_POPOUT_PREMIUM_CTA : o.default.Messages.INVENTORY_ADD_PACK,
                            description: n
                        }
                    }
                    return {
                        type: r.UNAVAILABLE,
                        text: null,
                        description: null
                    }
                },
                E = e => {
                    let t = c(e),
                        n = s(e),
                        u = d(e);
                    return {
                        ...u,
                        emojiDescription: t,
                        analyticsType: n
                    }
                }
        },
        245997: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var u = n("446674"),
                l = n("913144"),
                i = n("320954"),
                r = n("379881"),
                a = n("271938"),
                o = n("42203"),
                s = n("923959"),
                c = n("305961"),
                d = n("49111");
            let E = null,
                _ = {},
                f = null;

            function I() {
                return {
                    _categories: [],
                    null: []
                }
            }
            let C = I();

            function O(e, t) {
                e.index = t
            }

            function p(e) {
                let t = s.default.getChannels(e),
                    n = I(),
                    u = e => {
                        var t;
                        let {
                            channel: u
                        } = e, l = null !== (t = n[null != u.parent_id ? u.parent_id : "null"]) && void 0 !== t ? t : n.null;
                        l.push({
                            channel: u,
                            index: -1
                        })
                    };
                return t[d.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                    let {
                        channel: t
                    } = e;
                    n._categories.push({
                        channel: t,
                        index: -1
                    }), n[t.id] = []
                }), t[0, s.GUILD_SELECTABLE_CHANNELS_KEY].forEach(u), t[0, s.GUILD_VOCAL_CHANNELS_KEY].forEach(u), (0, i.default)(n._categories, n).forEach(O), _[e] = n, n
            }

            function A() {
                _ = {}, null != E && p(E)
            }

            function R(e) {
                let {
                    guild: {
                        id: t
                    }
                } = e;
                _[t] = void 0, E === t && p(t)
            }

            function T(e) {
                let {
                    channel: {
                        guild_id: t
                    }
                } = e;
                if (null == t) return !1;
                _[t] = void 0, E === t && p(t)
            }

            function P(e) {
                let {
                    guildId: t
                } = e;
                _[t] = void 0, t === E && p(t)
            }

            function N(e, t) {
                if (f = t, null == e || null == e.getGuildId()) return !1;
                let n = e.getGuildId();
                return null != n && (_[n] = void 0, n === E && p(n), !0)
            }

            function S() {
                p(d.FAVORITES)
            }
            class m extends u.default.Store {
                initialize() {
                    this.waitFor(s.default, c.default, a.default, o.default, r.default), this.syncWith([r.default], S)
                }
                getCategories(e) {
                    return null != e ? function(e) {
                        let t = _[e];
                        return null != t ? t : p(e)
                    }(e) : C
                }
            }
            m.displayName = "GuildCategoryStore";
            var g = new m(l.default, {
                CHANNEL_SELECT: function(e) {
                    let {
                        guildId: t
                    } = e;
                    if (E = null != t ? t : null, null == t || null != _[t]) return !1;
                    p(t)
                },
                CONNECTION_OPEN: A,
                OVERLAY_INITIALIZE: A,
                CACHE_LOADED_LAZY: A,
                GUILD_CREATE: R,
                GUILD_UPDATE: R,
                GUILD_DELETE: function(e) {
                    let {
                        guild: {
                            id: t
                        }
                    } = e;
                    delete _[t]
                },
                CHANNEL_CREATE: T,
                CHANNEL_DELETE: T,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e, n = !1;
                    for (let {
                            guild_id: e
                        }
                        of t) null != e && (_[e] = void 0, n = !0, E === e && p(e));
                    return n
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    let {
                        guildId: t,
                        user: n
                    } = e;
                    if (a.default.getId() !== n.id) return !1;
                    _[t] = void 0, t === E && p(t)
                },
                CURRENT_USER_UPDATE: function() {
                    if (null == E) return !1;
                    p(E)
                },
                GUILD_ROLE_CREATE: P,
                GUILD_ROLE_UPDATE: P,
                GUILD_ROLE_DELETE: P,
                IMPERSONATE_UPDATE: P,
                IMPERSONATE_STOP: P,
                VOICE_CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return null == t && null != f ? N(o.default.getChannel(f), null) : N(o.default.getChannel(t), t)
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return t.reduce((e, t) => {
                        let {
                            channelId: n,
                            sessionId: u
                        } = t;
                        return a.default.getSessionId() !== u ? e : N(o.default.getChannel(n), n) || e
                    }, !1)
                }
            })
        },
        474293: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getClass: function() {
                    return l
                }
            });
            var u = n("159885");

            function l(e, t) {
                for (var n = arguments.length, l = Array(n > 2 ? n - 2 : 0), i = 2; i < n; i++) l[i - 2] = arguments[i];
                let r = l.reduce((e, t) => e + (0, u.upperCaseFirstChar)(t), ""),
                    a = "".concat(t).concat(r),
                    o = e[a];
                if (null != o) return o
            }
        }
    }
]);
//# sourceMappingURL=058a835c74d6bb0fba7a.js.map