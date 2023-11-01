(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["81785"], {
        267363: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ack: function() {
                    return c
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
                    return P
                }
            });
            var u = n("249654"),
                l = n("913144"),
                r = n("401690"),
                i = n("233069"),
                a = n("42203"),
                o = n("245997"),
                s = n("697218"),
                d = n("49111");

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    u = arguments.length > 3 ? arguments[3] : void 0,
                    r = arguments.length > 4 ? arguments[4] : void 0;
                l.default.dispatch({
                    type: "CHANNEL_ACK",
                    channelId: e,
                    messageId: u,
                    immediate: t,
                    force: n,
                    context: d.CURRENT_APP_CONTEXT,
                    location: r
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
                            return (0, i.isGuildReadableType)(t.type)
                        }).map(e => {
                            let {
                                channel: t
                            } = e;
                            return t.id
                        }),
                        d = [...s];
                    for (let e of (s.forEach(e => {
                            let t = r.default.getActiveJoinedThreadsForParent(u.guild_id, e);
                            for (let e in t) d.push(e)
                        }), d)) c(e, t, n)
                }(e.id, !0, !0) : e.isForumLikeChannel() ? c(e.id, !0, !0, u.default.fromTimestamp(Date.now())) : c(e.id, !0, !0)
            }

            function _(e) {
                l.default.dispatch({
                    type: "BULK_ACK",
                    channels: e,
                    context: d.CURRENT_APP_CONTEXT
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

            function P(e, t) {
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
            var u, l, r = n("37983");
            n("884691");
            var i = n("414456"),
                a = n.n(i),
                o = n("394846"),
                s = n("77078"),
                d = n("945330"),
                c = n("381546"),
                E = n("782340"),
                _ = n("955892");
            (u = l || (l = {})).DEFAULT = "", u.BOLD = "Bold", u.SOLID = "Solid";
            let f = e => {
                let {
                    closeAction: t,
                    variant: n,
                    keybind: u,
                    className: i
                } = e;
                return (0, r.jsxs)("div", {
                    className: a(_.container, i),
                    children: [(0, r.jsx)(s.Clickable, {
                        className: a(_.closeButton, {
                            [_.closeButtonBold]: n === l.BOLD,
                            [_.closeButtonSolid]: n === l.SOLID
                        }),
                        onClick: t,
                        "aria-label": E.default.Messages.CLOSE,
                        children: n === l.SOLID ? (0, r.jsx)(c.default, {
                            width: 24,
                            height: 24,
                            "aria-hidden": !0
                        }) : (0, r.jsx)(d.default, {
                            width: 18,
                            height: 18,
                            "aria-hidden": !0
                        })
                    }), o.isMobile ? null : (0, r.jsx)("div", {
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
                    return d
                }
            });
            var u = n("37983"),
                l = n("884691"),
                r = n("310013"),
                i = n.n(r),
                a = n("407063");
            let o = /url\(['"](.*)['"]\)/,
                s = e => {
                    if (null == e || "" === e || "none" === e) return null;
                    let t = e.match(o);
                    return null != t ? t[1] : e
                };

            function d(e) {
                class t extends l.Component {
                    componentDidUpdate(e, t) {
                        if (t === this.state) return;
                        let {
                            cached: n,
                            loaded: u
                        } = this.state, {
                            style: l
                        } = this.props, r = null != l ? s(l.backgroundImage) : null;
                        null == r && r !== n ? this.setState({
                            loaded: !0,
                            cached: r
                        }) : this.cachedURLs.indexOf(r) >= 0 ? this.setState({
                            loaded: !0,
                            cached: r
                        }) : null != r && r !== n && !0 === u && this.setState({
                            loaded: !1
                        }, () => this.preloadURL(r))
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
                            loaded: r,
                            cached: i
                        } = this.state;
                        if (!r && null != t) {
                            var a;
                            t = {
                                ...t,
                                backgroundImage: null == (a = i) || "" === a || "none" === a ? "none" : "url(".concat(a, ")")
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
                return i(t, e), t
            }
        },
        320954: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var u = n("917351"),
                l = n.n(u);

            function r(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
                return l(e).map(e => "null" === e.channel.id ? t[e.channel.id] : [e, t[e.channel.id]]).flattenDeep().filter(n).value()
            }
        },
        558986: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getEmojiCaptionsForUser: function() {
                    return i
                }
            });
            var u = n("872717"),
                l = n("913144"),
                r = n("49111");
            async function i() {
                l.default.dispatch({
                    type: "EMOJI_CAPTIONS_FETCH"
                });
                try {
                    let {
                        body: e
                    } = await u.default.get({
                        url: r.Endpoints.EMOJI_CAPTIONS_GET
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
                    return r
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

            function r(e) {
                let {
                    location: t,
                    trackExposureOptions: n = {},
                    autoTrackExposure: u = !0
                } = e, r = l.getCurrentConfig({
                    location: t
                }, {
                    autoTrackExposure: u,
                    trackExposureOptions: n
                });
                return r
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
                r = n("236266"),
                i = n("802461");
            async function a() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown",
                    t = u.default.getCurrentUser();
                if (null == t) return;
                let n = (0, r.getEmojiCaptionsExperimentConfig)({
                    location: e
                });
                if (!n.isEnabled || i.default.getIsFetching()) return;
                let a = i.default.getEmojiCaptionsTTL();
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
                r = n("956089"),
                i = n("782340");

            function a(e) {
                let {
                    className: t,
                    color: n = l.default.unsafe_rawColors.BRAND_500.css,
                    ...a
                } = e;
                return (0, u.jsx)(r.TextBadge, {
                    ...a,
                    text: i.default.Messages.BETA,
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
                    return d
                },
                updateInventorySettings: function() {
                    return c
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
                r = n("569883"),
                i = n("871336"),
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
                        packs: e.body.map(e => i.default.fromServer(e))
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
                    expressionName: r
                } = e;
                try {
                    let e = await u.default.put({
                        url: a.Endpoints.INVENTORY_ADD_PACK,
                        body: {
                            author_id: t,
                            pack_id: n,
                            name_override: r
                        }
                    });
                    l.default.dispatch({
                        type: "INVENTORY_COLLECT_PACK_SUCCESS",
                        pack: i.default.fromServer(e.body)
                    })
                } catch (e) {
                    return
                }
            }
            async function d(e) {
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
            async function c(e) {
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
                    return r.default.createFromServer(e.body)
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
                    return r
                }
            });
            let u = 100,
                l = 1,
                r = 2e3
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
                    return N
                },
                useExpressionSourceGuildDataForGuildLeaveModal: function() {
                    return R
                }
            });
            var u = n("884691"),
                l = n("65597"),
                r = n("385976"),
                i = n("858619"),
                a = n("765969"),
                o = n("305961"),
                s = n("697218"),
                d = n("719923"),
                c = n("252931"),
                E = n("166465"),
                _ = n("557562"),
                f = n("446066"),
                I = n("49111");
            let C = (e, t, n) => {
                    let u = null != n ? e.getCustomEmojiById(n) : null;
                    switch (null == u ? void 0 : u.type) {
                        case i.EmojiTypes.GUILD:
                            return {
                                emoji: u, joinedEmojiSourceGuildRecord: t.getGuild(null == u ? void 0 : u.guildId)
                            };
                        case i.EmojiTypes.PACK:
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
                        joinedEmojiSourceGuildRecord: i,
                        emoji: a
                    } = (0, l.useStateFromStoresObject)([r.default, o.default], () => C(r.default, o.default, t)), s = null != i, d = null != i && i.hasFeature(I.GuildFeatures.DISCOVERABLE), c = (!s || d) && null != t, [E, _] = u.useState(c), O = null != i ? f.default.createFromGuildRecord(i) : null, [P, N] = u.useState(O);
                    return u.useEffect(() => {
                        null == n || n();
                        let e = async () => {
                            let e = null != t ? await f.default.getGuildFromEmojiId(t) : null;
                            N(e), _(!1), null == n || n()
                        };
                        if (c) {
                            e();
                            return
                        }
                        null == n || n()
                    }, [t, c]), {
                        expressionSourceGuild: P,
                        joinedEmojiSourceGuildRecord: i,
                        hasJoinedEmojiSourceGuild: s,
                        emoji: a,
                        isFetching: E
                    }
                },
                P = e => {
                    let {
                        expressionSourceGuild: t
                    } = e, n = (0, l.default)([E.default], () => null != t ? E.default.getPackByPackId({
                        packId: t.id
                    }) : null);
                    return null != n ? n : null
                },
                N = e => {
                    let {
                        expressionSourceGuild: t
                    } = e, n = (0, l.default)([s.default], () => s.default.getCurrentUser()), u = d.default.isPremium(n), r = (0, c.useInventoryGuildPacksUserExperiment)({
                        expressionSourceGuild: t
                    }), i = (0, l.default)([E.default], () => E.default.countPacksCollected()), a = P({
                        expressionSourceGuild: t
                    }), o = i >= (0, _.getMaxPacksForUserType)(u);
                    return {
                        ...r,
                        collectedPack: a,
                        numPacksCollected: i,
                        hasReachedMaxPacksCollected: o,
                        isPremium: u
                    }
                },
                R = e => {
                    let t = (0, c.useInventoryGuildPacksUserExperiment)({
                            expressionSourceGuild: f.default.createFromGuildRecord(e),
                            autoTrackExposure: !1
                        }),
                        n = (0, c.useInventoryGuildSettingsExperiment)({
                            guildId: e.id,
                            autoTrackExposure: !1
                        }),
                        i = t.collectEnabled && n.allowCollection,
                        o = (0, l.default)([r.default], () => {
                            let t = r.default.getGuildEmoji(e.id).filter(e => 0 === e.roles.length && e.available && !e.managed);
                            return 0 === t.length ? null : t[0].id
                        }),
                        [s, d] = u.useState(null);
                    return u.useEffect(() => {
                        let e = async e => {
                            d(await f.default.getGuildFromEmojiId(e))
                        };
                        i && null != o && e(o)
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
                    return P
                }
            });
            var u = n("811022"),
                l = n("412745"),
                r = n("697218"),
                i = n("599110"),
                a = n("315102"),
                o = n("252931"),
                s = n("13162"),
                d = n("166465"),
                c = n("365058"),
                E = n("49111");
            let _ = new u.default("InventoryUtils");

            function f(e) {}
            async function I() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown",
                    t = "maybeGetPacks, trigger point: ".concat(e, " "),
                    n = r.default.getCurrentUser();
                if (null == n) {
                    f(t + "no current user");
                    return
                }
                let u = (0, o.getInventoryGuildPacksUserExperimentConfig)({
                    user: n
                });
                if (!u.viewAndUseEnabled) {
                    f(t + "packs experiment not enabled"), d.default.hasPersistedState() && d.default.clear();
                    return
                }
                let l = d.default.getPackEmojisTTL();
                if (null != l && Date.now() < l) {
                    f(t + "ttl has not passed");
                    return
                }
                if (d.default.getIsFetching()) {
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
                        nonce: r,
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
                        }), i.default.track(E.AnalyticEvents.INVENTORY_PACK_ACTION_COMPLETED, {
                            type: n,
                            inventory_pack_id: e,
                            nonce: r
                        }), null == u || u()
                    }
                },
                P = e => e ? c.INVENTORY_MAX_PACKS : c.INVENTORY_MAX_FREE_PACKS
        },
        446066: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var u, l = n("872717"),
                r = n("666038"),
                i = n("813006"),
                a = n("315102"),
                o = n("159885"),
                s = n("886167"),
                d = n("49111");
            (u || (u = {})).GUILD = "GUILD";
            let c = async e => {
                let t = null;
                try {
                    var n;
                    let u = await l.default.get({
                        url: d.Endpoints.EMOJI_SOURCE_DATA(e),
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
            class E extends r.default {
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
                    return this.hasFeature(d.GuildFeatures.DISCOVERABLE)
                }
                get acronym() {
                    return (0, o.getAcronym)(this.name)
                }
                static async getGuildFromEmojiId(e) {
                    let t = await c(e),
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
                    return e instanceof E ? e : e instanceof i.default ? E.createFromGuildRecord(e) : E.createFromDiscoverableGuild(e)
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
                    return i
                },
                getEmojiPopoutData: function() {
                    return E
                }
            });
            var u, l, r, i, a = n("365058"),
                o = n("782340");
            (u = r || (r = {})).DEFAULT = "Custom Emoji Popout", u.CROSS_SERVER = "Custom Emoji Popout (Cross-Server)", u.UPSELL_CURRENT_SERVER_JOINED = "Custom Emoji Popout (Upsell Joined Current-Server)", u.UPSELL_CROSS_SERVER_JOINED = "Custom Emoji Popout (Upsell Joined Cross-Server)", u.UPSELL_CROSS_SERVER_JOINABLE = "Custom Emoji Popout (Upsell Not-Joined Cross-Server)", u.UPSELL_CROSS_SERVER_UNJOINABLE = "Custom Emoji Popout (Soft Upsell)", (l = i || (i = {})).GET_PREMIUM_INVENTORY_DISABLED = "GET_PREMIUM_INVENTORY_DISABLED", l.GET_PREMIUM_INVENTORY_ENABLED = "GET_PREMIUM_INVENTORY_ENABLED", l.JOIN_GUILD = "JOIN_GUILD", l.ADD_PACK = "ADD_PACK", l.REMOVE_PACK = "REMOVE_PACK", l.UNAVAILABLE = "UNAVAILABLE";
            let s = e => {
                    let {
                        isPremium: t,
                        hasJoinedEmojiSourceGuild: n,
                        isUnusableRoleSubscriptionEmoji: u,
                        emojiComesFromCurrentGuild: l,
                        isDiscoverable: i
                    } = e, a = r.DEFAULT;
                    return t && !n && i ? a = r.CROSS_SERVER : t || !n || u ? !t && !n && (a = i ? r.UPSELL_CROSS_SERVER_JOINABLE : r.UPSELL_CROSS_SERVER_UNJOINABLE) : a = l ? r.UPSELL_CURRENT_SERVER_JOINED : r.UPSELL_CROSS_SERVER_JOINED, a
                },
                d = e => {
                    let {
                        isPremium: t,
                        hasJoinedEmojiSourceGuild: n,
                        isUnusableRoleSubscriptionEmoji: u,
                        isDiscoverable: l,
                        emojiComesFromCurrentGuild: r,
                        userIsRoleSubscriber: i,
                        isRoleSubscriptionEmoji: a,
                        shouldHideRoleSubscriptionCTA: s,
                        packCollectionData: d,
                        onOpenPremiumSettings: c
                    } = e, E = null, _ = (null == d ? void 0 : d.collectEnabled) === !0, f = (null == d ? void 0 : d.viewAndUseEnabled) === !0, I = (null == d ? void 0 : d.collectedPack) != null;
                    if ((_ || f && I) && !n) {
                        let e = _ && (null == d ? void 0 : d.showTryPacksModalAndV2Copy) === !0;
                        return e ? I ? o.default.Messages.EMOJI_POPOUT_ADDED_PACK_DESCRIPTION : o.default.Messages.INVENTORY_EMOJI_FROM_ADDABLE_PACK : null
                    }
                    return E = t ? n ? a ? s && u ? o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION : u ? i ? o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION : o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION : o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_SUBSCRIBED_DESCRIPTION : r ? o.default.Messages.EMOJI_POPOUT_PREMIUM_CURRENT_GUILD_DESCRIPTION : o.default.Messages.EMOJI_POPOUT_PREMIUM_JOINED_GUILD_DESCRIPTION : l ? o.default.Messages.EMOJI_POPOUT_PREMIUM_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : o.default.Messages.EMOJI_POPOUT_PREMIUM_UNJOINED_PRIVATE_GUILD_DESCRIPTION : n ? s && u ? o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION : u ? i ? o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION : o.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION : r ? o.default.Messages.EMOJI_POPOUT_CURRENT_GUILD_DESCRIPTION : o.default.Messages.EMOJI_POPOUT_JOINED_GUILD_DESCRIPTION : l ? o.default.Messages.EMOJI_POPOUT_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : o.default.Messages.EMOJI_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
                        openPremiumSettings: c
                    })
                },
                c = e => {
                    var t;
                    let {
                        isPremium: n,
                        hasJoinedEmojiSourceGuild: u,
                        isUnusableRoleSubscriptionEmoji: l,
                        isDiscoverable: r,
                        packCollectionData: s
                    } = e, d = (null == s ? void 0 : s.collectEnabled) === !0, c = (null == s ? void 0 : s.viewAndUseEnabled) === !0, E = (null == s ? void 0 : s.collectedPack) != null, _ = (null == s ? void 0 : s.showTryPacksModalAndV2Copy) === !0, f = !d && !E, I = !u && r;
                    if ((f || !c) && n && I) return {
                        type: i.JOIN_GUILD,
                        text: o.default.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON,
                        description: null
                    };
                    if (!n && (u && !l || (f || !c) && I)) return {
                        type: i.GET_PREMIUM_INVENTORY_DISABLED,
                        text: o.default.Messages.EMOJI_POPOUT_PREMIUM_CTA,
                        description: null
                    };
                    if (d && !u && !E && n) return {
                        type: i.ADD_PACK,
                        text: o.default.Messages.INVENTORY_ADD_PACK,
                        description: _ ? o.default.Messages.INVENTORY_ADD_PACK_WITHOUT_JOINING_V2.format({
                            maxPacks: a.INVENTORY_MAX_PACKS
                        }) : o.default.Messages.INVENTORY_ADD_PACK_WITHOUT_JOINING
                    };
                    else if (!d || u || E || n) {
                        if (d && !u && E) return {
                            type: i.REMOVE_PACK,
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
                            type: e ? i.GET_PREMIUM_INVENTORY_ENABLED : i.ADD_PACK,
                            text: e ? o.default.Messages.EMOJI_POPOUT_PREMIUM_CTA : o.default.Messages.INVENTORY_ADD_PACK,
                            description: n
                        }
                    }
                    return {
                        type: i.UNAVAILABLE,
                        text: null,
                        description: null
                    }
                },
                E = e => {
                    let t = d(e),
                        n = s(e),
                        u = c(e);
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
                    return U
                }
            });
            var u = n("446674"),
                l = n("913144"),
                r = n("320954"),
                i = n("379881"),
                a = n("271938"),
                o = n("42203"),
                s = n("923959"),
                d = n("305961"),
                c = n("49111");
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

            function P(e) {
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
                return t[c.ChannelTypes.GUILD_CATEGORY].forEach(e => {
                    let {
                        channel: t
                    } = e;
                    n._categories.push({
                        channel: t,
                        index: -1
                    }), n[t.id] = []
                }), t[0, s.GUILD_SELECTABLE_CHANNELS_KEY].forEach(u), t[0, s.GUILD_VOCAL_CHANNELS_KEY].forEach(u), (0, r.default)(n._categories, n).forEach(O), _[e] = n, n
            }

            function N() {
                _ = {}, null != E && P(E)
            }

            function R(e) {
                let {
                    guild: {
                        id: t
                    }
                } = e;
                _[t] = void 0, E === t && P(t)
            }

            function m(e) {
                let {
                    channel: {
                        guild_id: t
                    }
                } = e;
                if (null == t) return !1;
                _[t] = void 0, E === t && P(t)
            }

            function T(e) {
                let {
                    guildId: t
                } = e;
                _[t] = void 0, t === E && P(t)
            }

            function p(e, t) {
                if (f = t, null == e || null == e.getGuildId()) return !1;
                let n = e.getGuildId();
                return null != n && (_[n] = void 0, n === E && P(n), !0)
            }

            function A() {
                P(c.FAVORITES)
            }
            class S extends u.default.Store {
                initialize() {
                    this.waitFor(s.default, d.default, a.default, o.default, i.default), this.syncWith([i.default], A)
                }
                getCategories(e) {
                    return null != e ? function(e) {
                        let t = _[e];
                        return null != t ? t : P(e)
                    }(e) : C
                }
            }
            S.displayName = "GuildCategoryStore";
            var U = new S(l.default, {
                CHANNEL_SELECT: function(e) {
                    let {
                        guildId: t
                    } = e;
                    if (E = null != t ? t : null, null == t || null != _[t]) return !1;
                    P(t)
                },
                CONNECTION_OPEN: N,
                OVERLAY_INITIALIZE: N,
                CACHE_LOADED_LAZY: N,
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
                CHANNEL_CREATE: m,
                CHANNEL_DELETE: m,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e, n = !1;
                    for (let {
                            guild_id: e
                        }
                        of t) null != e && (_[e] = void 0, n = !0, E === e && P(e));
                    return n
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    let {
                        guildId: t,
                        user: n
                    } = e;
                    if (a.default.getId() !== n.id) return !1;
                    _[t] = void 0, t === E && P(t)
                },
                CURRENT_USER_UPDATE: function() {
                    if (null == E) return !1;
                    P(E)
                },
                GUILD_ROLE_CREATE: T,
                GUILD_ROLE_UPDATE: T,
                GUILD_ROLE_DELETE: T,
                IMPERSONATE_UPDATE: T,
                IMPERSONATE_STOP: T,
                VOICE_CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return null == t && null != f ? p(o.default.getChannel(f), null) : p(o.default.getChannel(t), t)
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
                        return a.default.getSessionId() !== u ? e : p(o.default.getChannel(n), n) || e
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
                for (var n = arguments.length, l = Array(n > 2 ? n - 2 : 0), r = 2; r < n; r++) l[r - 2] = arguments[r];
                let i = l.reduce((e, t) => e + (0, u.upperCaseFirstChar)(t), ""),
                    a = "".concat(t).concat(i),
                    o = e[a];
                if (null != o) return o
            }
        }
    }
]);
//# sourceMappingURL=55320ad3c8cf7a9c155e.js.map