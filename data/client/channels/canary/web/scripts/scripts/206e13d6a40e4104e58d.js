(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["73810"], {
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
                    return N
                }
            }), n("222007"), n("424973");
            var u = n("249654"),
                l = n("913144"),
                r = n("401690"),
                i = n("233069"),
                o = n("42203"),
                a = n("245997"),
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
                        u = o.default.getChannel(e);
                    if (null == u || null == u.guild_id) return;
                    let l = a.default.getCategories(u.guild_id);
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

            function N(e, t) {
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
                o = n.n(i),
                a = n("394846"),
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
                    className: l
                } = e;
                return (0, r.jsxs)("div", {
                    className: o(_.container, l),
                    children: [(0, r.jsx)(s.Clickable, {
                        className: o(_.closeButton, {
                            [_.closeButtonBold]: "Bold" === n,
                            [_.closeButtonSolid]: "Solid" === n
                        }),
                        onClick: t,
                        "aria-label": E.default.Messages.CLOSE,
                        children: "Solid" === n ? (0, r.jsx)(c.default, {
                            width: 24,
                            height: 24,
                            "aria-hidden": !0
                        }) : (0, r.jsx)(d.default, {
                            width: 18,
                            height: 18,
                            "aria-hidden": !0
                        })
                    }), a.isMobile ? null : (0, r.jsx)("div", {
                        className: o(_.keybind),
                        "aria-hidden": !0,
                        children: u
                    })]
                })
            };
            f.defaultProps = {
                variant: ""
            }, f.Variants = l;
            var I = f
        },
        253980: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatCheckIcon: function() {
                    return i
                }
            });
            var u = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = l.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, u.jsxs)("svg", {
                    ...(0, r.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, u.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M12.657 21.979c.407-.027.567-.512.28-.8l-.058-.058a3 3 0 1 1 4.242-4.242l.525.525a.5.5 0 0 0 .708 0l2.525-2.525c.196-.197.413-.36.644-.49a.535.535 0 0 0 .27-.35c.136-.659.207-1.34.207-2.039 0-5.523-4.477-10-10-10S2 6.477 2 12c0 1.97.57 3.808 1.554 5.357a.517.517 0 0 1-.04.617l-2.067 2.369C.882 20.989 1.342 22 2.2 22H12c.22 0 .44-.007.657-.021Z",
                        className: o
                    }), (0, u.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M23.707 17.707a1 1 0 0 0-1.414-1.414L18 20.586l-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l5-5Z",
                        className: o
                    })]
                })
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
        298878: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var u = n("37983");
            n("884691");
            var l = n("669491"),
                r = n("956089"),
                i = n("782340");

            function o(e) {
                let {
                    className: t,
                    color: n = l.default.unsafe_rawColors.BRAND_500.css,
                    ...o
                } = e;
                return (0, u.jsx)(r.TextBadge, {
                    ...o,
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
                    return a
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
                o = n("49111");
            async function a() {
                l.default.dispatch({
                    type: "INVENTORY_FETCH"
                });
                try {
                    let e = await u.default.get({
                        url: o.Endpoints.INVENTORY_GET
                    });
                    l.default.dispatch({
                        type: "INVENTORY_FETCH_SUCCESS",
                        packs: e.body.map(e => i.default.fromServer(e))
                    })
                } catch (t) {
                    var e;
                    l.default.dispatch({
                        type: "INVENTORY_FETCH_ERROR",
                        is4XXError: (null == (e = t.body) ? void 0 : e.status) >= 400 && (null == e ? void 0 : e.status) <= 499
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
                        url: o.Endpoints.INVENTORY_ADD_PACK,
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
                        url: o.Endpoints.INVENTORY_REMOVE_PACK,
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
                        url: o.Endpoints.INVENTORY_UPDATE_SETTINGS(t),
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
                        url: o.Endpoints.INVENTORY_PACK_METADATA(t)
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
                    return O
                },
                useEmojiAndSourceGuild: function() {
                    return N
                },
                usePackCollectionData: function() {
                    return T
                },
                useExpressionSourceGuildDataForGuildLeaveModal: function() {
                    return A
                }
            }), n("222007");
            var u = n("884691"),
                l = n("65597"),
                r = n("913144"),
                i = n("385976"),
                o = n("858619"),
                a = n("305961"),
                s = n("697218"),
                d = n("719923"),
                c = n("252931"),
                E = n("166465"),
                _ = n("557562"),
                f = n("446066"),
                I = n("49111"),
                C = n("958706");
            let O = (e, t, n) => {
                    let u = null != n ? e.getCustomEmojiById(n) : null;
                    switch (null == u ? void 0 : u.type) {
                        case o.EmojiTypes.GUILD:
                            return {
                                emoji: u, joinedEmojiSourceGuildRecord: t.getGuild(null == u ? void 0 : u.guildId)
                            };
                        case o.EmojiTypes.PACK:
                            return {
                                emoji: u, joinedEmojiSourceGuildRecord: t.getGuild(null == u ? void 0 : u.packId)
                            };
                        default:
                            return {
                                emoji: null, joinedEmojiSourceGuildRecord: null
                            }
                    }
                },
                N = e => {
                    let {
                        emojiId: t,
                        refreshPositionKey: n
                    } = e, {
                        joinedEmojiSourceGuildRecord: r,
                        emoji: o
                    } = (0, l.useStateFromStoresObject)([i.default, a.default], () => O(i.default, a.default, t)), s = null != r, d = null != r && r.hasFeature(I.GuildFeatures.DISCOVERABLE), c = (!s || d) && null != t, [E, _] = u.useState(c), C = null != r ? f.default.createFromGuildRecord(r) : null, [N, P] = u.useState(C);
                    return u.useEffect(() => {
                        null == n || n();
                        let e = async () => {
                            let e = null != t ? await f.default.getGuildFromEmojiId(t) : null;
                            P(e), _(!1), null == n || n()
                        };
                        if (c) {
                            e();
                            return
                        }
                        null == n || n()
                    }, [t, c]), {
                        expressionSourceGuild: N,
                        joinedEmojiSourceGuildRecord: r,
                        hasJoinedEmojiSourceGuild: s,
                        emoji: o,
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
                T = e => {
                    let {
                        expressionSourceGuild: t
                    } = e, n = (0, l.default)([s.default], () => s.default.getCurrentUser()), u = d.default.isPremium(n), r = (0, c.useInventoryGuildPacksUserExperiment)({
                        expressionSourceGuild: t
                    }), i = (0, l.default)([E.default], () => E.default.countPacksCollected()), o = P({
                        expressionSourceGuild: t
                    }), a = i >= (0, _.getMaxPacksForUserType)(u);
                    return {
                        ...r,
                        collectedPack: o,
                        numPacksCollected: i,
                        hasReachedMaxPacksCollected: a,
                        isPremium: u
                    }
                },
                A = e => {
                    let t = (0, c.useInventoryGuildPacksUserExperiment)({
                            expressionSourceGuild: f.default.createFromGuildRecord(e),
                            autoTrackExposure: !1
                        }),
                        n = (0, c.useInventoryGuildSettingsExperiment)({
                            guildId: e.id,
                            autoTrackExposure: !1
                        }),
                        o = t.collectEnabled && n.allowCollection,
                        a = (0, l.default)([i.default], () => {
                            let t = i.default.getGuildEmoji(e.id).filter(e => 0 === e.roles.length && e.available && !e.managed);
                            return 0 === t.length ? null : t[0].id
                        }),
                        [s, d] = u.useState(null);
                    return u.useEffect(() => {
                        let e = async e => {
                            d(await f.default.getGuildFromEmojiId(e))
                        };
                        o && null != a && e(a)
                    }, []), u.useEffect(() => {
                        r.default.dispatch({
                            type: "EMOJI_INTERACTION_INITIATED",
                            interaction: C.EmojiInteractionPoint.GuildLeaveModalShown
                        })
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
                    return N
                }
            });
            var u = n("811022"),
                l = n("412745"),
                r = n("697218"),
                i = n("599110"),
                o = n("315102"),
                a = n("252931"),
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
                let u = (0, a.getInventoryGuildPacksUserExperimentConfig)({
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
                return o.default.getGuildIconURL({
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
                        expressionName: o
                    } = e;
                    return () => {
                        if (null == t) {
                            null == u || u();
                            return
                        }
                        let e = t.id,
                            a = t.isDiscoverable();
                        n === l.EmojiPopoutType.ADD_PACK ? (0, s.collectPack)({
                            packId: e,
                            expressionName: a ? void 0 : o
                        }) : n === l.EmojiPopoutType.REMOVE_PACK && (0, s.uncollectPack)({
                            packId: e
                        }), i.default.track(E.AnalyticEvents.INVENTORY_PACK_ACTION_COMPLETED, {
                            type: n,
                            inventory_pack_id: e,
                            nonce: r
                        }), null == u || u()
                    }
                },
                N = e => e ? c.INVENTORY_MAX_PACKS : c.INVENTORY_MAX_FREE_PACKS
        },
        446066: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            }), n("222007");
            var u, l, r = n("872717"),
                i = n("666038"),
                o = n("813006"),
                a = n("315102"),
                s = n("159885"),
                d = n("886167"),
                c = n("49111");
            (u || (u = {})).GUILD = "GUILD";
            let E = async e => {
                let t = null;
                try {
                    var n;
                    let u = await r.default.get({
                        url: c.Endpoints.EMOJI_SOURCE_DATA(e),
                        oldFormErrors: !0,
                        timeout: 5e3
                    });
                    (null == u ? void 0 : null === (n = u.body) || void 0 === n ? void 0 : n.guild) != null && (t = {
                        guild: l.createFromServer(u.body.guild),
                        type: u.body.type
                    })
                } catch {}
                return t
            };
            l = class e extends i.default {
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
                    return (0, s.getAcronym)(this.name)
                }
                static async getGuildFromEmojiId(e) {
                    let t = await E(e),
                        n = null != t && (null == t ? void 0 : t.type) === "GUILD";
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
                static createFromGuildRecord(t) {
                    return new e({
                        ...e._mapCommon(t),
                        premiumTier: t.premiumTier,
                        premiumSubscriberCount: t.premiumSubscriberCount,
                        presenceCount: null,
                        memberCount: null,
                        emojis: null,
                        inventorySettings: t.inventorySettings
                    })
                }
                static createFromDiscoverableGuild(t) {
                    return new e({
                        ...e._mapCommon(t),
                        premiumTier: null,
                        premiumSubscriberCount: t.premiumSubscriptionCount,
                        presenceCount: t.presenceCount,
                        memberCount: t.memberCount,
                        emojis: t.emojis,
                        inventorySettings: void 0
                    })
                }
                static createFromServer(t) {
                    return new e({
                        ...e._mapCommon(t),
                        premiumTier: t.premium_tier,
                        premiumSubscriberCount: t.premium_subscription_count,
                        presenceCount: t.approximate_presence_count,
                        memberCount: t.approximate_member_count,
                        emojis: t.emojis,
                        inventorySettings: (0, d.guildInventorySettingsFromServer)(t.inventory_settings)
                    })
                }
                static createFromGuildType(t) {
                    return t instanceof e ? t : t instanceof o.default ? e.createFromGuildRecord(t) : e.createFromDiscoverableGuild(t)
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
                    return u
                }
            });
            var u, l = n("666038");
            u = class e extends l.default {
                static createFromServer(t) {
                    return new e({
                        collectedCount: t.collected_count
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
            var u, l, r, i, o = n("365058"),
                a = n("782340");
            (u = r || (r = {})).DEFAULT = "Custom Emoji Popout", u.CROSS_SERVER = "Custom Emoji Popout (Cross-Server)", u.UPSELL_CURRENT_SERVER_JOINED = "Custom Emoji Popout (Upsell Joined Current-Server)", u.UPSELL_CROSS_SERVER_JOINED = "Custom Emoji Popout (Upsell Joined Cross-Server)", u.UPSELL_CROSS_SERVER_JOINABLE = "Custom Emoji Popout (Upsell Not-Joined Cross-Server)", u.UPSELL_CROSS_SERVER_UNJOINABLE = "Custom Emoji Popout (Soft Upsell)", (l = i || (i = {})).GET_PREMIUM_INVENTORY_DISABLED = "GET_PREMIUM_INVENTORY_DISABLED", l.GET_PREMIUM_INVENTORY_ENABLED = "GET_PREMIUM_INVENTORY_ENABLED", l.JOIN_GUILD = "JOIN_GUILD", l.ADD_PACK = "ADD_PACK", l.REMOVE_PACK = "REMOVE_PACK", l.UNAVAILABLE = "UNAVAILABLE";
            let s = e => {
                    let {
                        isPremium: t,
                        hasJoinedEmojiSourceGuild: n,
                        isUnusableRoleSubscriptionEmoji: u,
                        emojiComesFromCurrentGuild: l,
                        isDiscoverable: r
                    } = e, i = "Custom Emoji Popout";
                    return t && !n && r ? i = "Custom Emoji Popout (Cross-Server)" : t || !n || u ? !t && !n && (i = r ? "Custom Emoji Popout (Upsell Not-Joined Cross-Server)" : "Custom Emoji Popout (Soft Upsell)") : i = l ? "Custom Emoji Popout (Upsell Joined Current-Server)" : "Custom Emoji Popout (Upsell Joined Cross-Server)", i
                },
                d = e => {
                    let {
                        isPremium: t,
                        hasJoinedEmojiSourceGuild: n,
                        isUnusableRoleSubscriptionEmoji: u,
                        isDiscoverable: l,
                        emojiComesFromCurrentGuild: r,
                        userIsRoleSubscriber: i,
                        isRoleSubscriptionEmoji: o,
                        shouldHideRoleSubscriptionCTA: s,
                        packCollectionData: d,
                        onOpenPremiumSettings: c
                    } = e, E = null, _ = (null == d ? void 0 : d.collectEnabled) === !0, f = (null == d ? void 0 : d.viewAndUseEnabled) === !0, I = (null == d ? void 0 : d.collectedPack) != null;
                    if ((_ || f && I) && !n) {
                        let e = _ && (null == d ? void 0 : d.showTryPacksModalAndV2Copy) === !0;
                        return e ? I ? a.default.Messages.EMOJI_POPOUT_ADDED_PACK_DESCRIPTION : a.default.Messages.INVENTORY_EMOJI_FROM_ADDABLE_PACK : null
                    }
                    return E = t ? n ? o ? s && u ? a.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION : u ? i ? a.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION : a.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION : a.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_SUBSCRIBED_DESCRIPTION : r ? a.default.Messages.EMOJI_POPOUT_PREMIUM_CURRENT_GUILD_DESCRIPTION : a.default.Messages.EMOJI_POPOUT_PREMIUM_JOINED_GUILD_DESCRIPTION : l ? a.default.Messages.EMOJI_POPOUT_PREMIUM_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : a.default.Messages.EMOJI_POPOUT_PREMIUM_UNJOINED_PRIVATE_GUILD_DESCRIPTION : n ? s && u ? a.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION : u ? i ? a.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION : a.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION : r ? a.default.Messages.EMOJI_POPOUT_CURRENT_GUILD_DESCRIPTION : a.default.Messages.EMOJI_POPOUT_JOINED_GUILD_DESCRIPTION : l ? a.default.Messages.EMOJI_POPOUT_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : a.default.Messages.EMOJI_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
                        openPremiumSettings: c
                    })
                },
                c = e => {
                    let {
                        isPremium: t,
                        hasJoinedEmojiSourceGuild: n,
                        isUnusableRoleSubscriptionEmoji: u,
                        isDiscoverable: l,
                        packCollectionData: r
                    } = e, i = (null == r ? void 0 : r.collectEnabled) === !0, s = (null == r ? void 0 : r.viewAndUseEnabled) === !0, d = (null == r ? void 0 : r.collectedPack) != null, c = (null == r ? void 0 : r.showTryPacksModalAndV2Copy) === !0, E = !i && !d, _ = !n && l;
                    if ((E || !s) && t && _) return {
                        type: "JOIN_GUILD",
                        text: a.default.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON,
                        description: null
                    };
                    if (!t && (n && !u || (E || !s) && _)) return {
                        type: "GET_PREMIUM_INVENTORY_DISABLED",
                        text: a.default.Messages.EMOJI_POPOUT_PREMIUM_CTA,
                        description: null
                    };
                    if (i && !n && !d && t) return {
                        type: "ADD_PACK",
                        text: a.default.Messages.INVENTORY_ADD_PACK,
                        description: c ? a.default.Messages.INVENTORY_ADD_PACK_WITHOUT_JOINING_V2.format({
                            maxPacks: o.INVENTORY_MAX_PACKS
                        }) : a.default.Messages.INVENTORY_ADD_PACK_WITHOUT_JOINING
                    };
                    else if (!i || n || d || t) {
                        if (i && !n && d) return {
                            type: "REMOVE_PACK",
                            text: a.default.Messages.INVENTORY_REMOVE_PACK,
                            description: c ? null : a.default.Messages.INVENTORY_REMOVE_PACK_DESCRIPTION
                        }
                    } else {
                        var f;
                        let e = (null !== (f = null == r ? void 0 : r.numPacksCollected) && void 0 !== f ? f : 0) >= o.INVENTORY_MAX_FREE_PACKS,
                            t = e ? a.default.Messages.INVENTORY_ADD_NITRO_DESCRIPTION_WITH_PLURAL.format({
                                maxFreePacks: o.INVENTORY_MAX_FREE_PACKS,
                                maxPacks: o.INVENTORY_MAX_PACKS
                            }) : a.default.Messages.INVENTORY_ADD_PACK_NON_NITRO.format({
                                maxFreePacks: o.INVENTORY_MAX_FREE_PACKS,
                                maxPacks: o.INVENTORY_MAX_PACKS
                            });
                        return {
                            type: e ? "GET_PREMIUM_INVENTORY_ENABLED" : "ADD_PACK",
                            text: e ? a.default.Messages.EMOJI_POPOUT_PREMIUM_CTA : a.default.Messages.INVENTORY_ADD_PACK,
                            description: t
                        }
                    }
                    return {
                        type: "UNAVAILABLE",
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
            }), n("424973"), n("222007"), n("808653");
            var u = n("446674"),
                l = n("913144"),
                r = n("320954"),
                i = n("379881"),
                o = n("271938"),
                a = n("42203"),
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

            function N(e) {
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

            function P() {
                _ = {}, null != E && N(E)
            }

            function T(e) {
                let {
                    guild: {
                        id: t
                    }
                } = e;
                _[t] = void 0, E === t && N(t)
            }

            function A(e) {
                let {
                    channel: {
                        guild_id: t
                    }
                } = e;
                if (null == t) return !1;
                _[t] = void 0, E === t && N(t)
            }

            function m(e) {
                let {
                    guildId: t
                } = e;
                _[t] = void 0, t === E && N(t)
            }

            function R(e, t) {
                if (f = t, null == e || null == e.getGuildId()) return !1;
                let n = e.getGuildId();
                return null != n && (_[n] = void 0, n === E && N(n), !0)
            }

            function p() {
                N(c.FAVORITES)
            }
            class S extends u.default.Store {
                initialize() {
                    this.waitFor(s.default, d.default, o.default, a.default, i.default), this.syncWith([i.default], p)
                }
                getCategories(e) {
                    return null != e ? function(e) {
                        let t = _[e];
                        return null != t ? t : N(e)
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
                    N(t)
                },
                CONNECTION_OPEN: P,
                OVERLAY_INITIALIZE: P,
                CACHE_LOADED_LAZY: P,
                GUILD_CREATE: T,
                GUILD_UPDATE: T,
                GUILD_DELETE: function(e) {
                    let {
                        guild: {
                            id: t
                        }
                    } = e;
                    delete _[t]
                },
                CHANNEL_CREATE: A,
                CHANNEL_DELETE: A,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e, n = !1;
                    for (let {
                            guild_id: e
                        }
                        of t) null != e && (_[e] = void 0, n = !0, E === e && N(e));
                    return n
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    let {
                        guildId: t,
                        user: n
                    } = e;
                    if (o.default.getId() !== n.id) return !1;
                    _[t] = void 0, t === E && N(t)
                },
                CURRENT_USER_UPDATE: function() {
                    if (null == E) return !1;
                    N(E)
                },
                GUILD_ROLE_CREATE: m,
                GUILD_ROLE_UPDATE: m,
                GUILD_ROLE_DELETE: m,
                IMPERSONATE_UPDATE: m,
                IMPERSONATE_STOP: m,
                VOICE_CHANNEL_SELECT: function(e) {
                    let {
                        channelId: t
                    } = e;
                    return null == t && null != f ? R(a.default.getChannel(f), null) : R(a.default.getChannel(t), t)
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
                        return o.default.getSessionId() !== u ? e : R(a.default.getChannel(n), n) || e
                    }, !1)
                }
            })
        },
        171710: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var u = n("37983");
            n("884691");
            var l = n("469563"),
                r = n("253980"),
                i = n("75196"),
                o = (0, l.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: l = "currentColor",
                        foreground: r,
                        ...o
                    } = e;
                    return (0, u.jsx)("svg", {
                        ...(0, i.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, u.jsx)("path", {
                            className: r,
                            fill: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12.291 5.70697L15.998 9.41397L21.705 3.70697L20.291 2.29297L15.998 6.58597L13.705 4.29297L12.291 5.70697ZM1.99805 7H11.088C11.564 9.837 14.025 12 16.998 12V18C16.998 19.103 16.102 20 14.998 20H8.33205L2.99805 24V20H1.99805C0.894047 20 -0.00195312 19.103 -0.00195312 18V9C-0.00195312 7.897 0.894047 7 1.99805 7Z"
                        })
                    })
                }, r.ChatCheckIcon)
        }
    }
]);
//# sourceMappingURL=206e13d6a40e4104e58d.js.map