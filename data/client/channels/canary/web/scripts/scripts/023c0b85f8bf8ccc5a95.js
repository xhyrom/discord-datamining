(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["80083"], {
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
                    return p
                },
                ackUserFeature: function() {
                    return m
                }
            }), n("222007"), n("424973");
            var l = n("249654"),
                r = n("913144"),
                u = n("401690"),
                i = n("233069"),
                o = n("42203"),
                a = n("245997"),
                s = n("697218"),
                d = n("49111");

            function c(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = arguments.length > 3 ? arguments[3] : void 0,
                    u = arguments.length > 4 ? arguments[4] : void 0;
                r.default.dispatch({
                    type: "CHANNEL_ACK",
                    channelId: e,
                    messageId: l,
                    immediate: t,
                    force: n,
                    context: d.CURRENT_APP_CONTEXT,
                    location: u
                })
            }

            function E(e) {
                e.isCategory() ? ! function(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        l = o.default.getChannel(e);
                    if (null == l || null == l.guild_id) return;
                    let r = a.default.getCategories(l.guild_id);
                    if (null == r[e]) return;
                    let s = r[e].filter(e => {
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
                            let t = u.default.getActiveJoinedThreadsForParent(l.guild_id, e);
                            for (let e in t) d.push(e)
                        }), d)) c(e, t, n)
                }(e.id, !0, !0) : e.isForumLikeChannel() ? c(e.id, !0, !0, l.default.fromTimestamp(Date.now())) : c(e.id, !0, !0)
            }

            function _(e) {
                r.default.dispatch({
                    type: "BULK_ACK",
                    channels: e,
                    context: d.CURRENT_APP_CONTEXT
                })
            }

            function f(e) {
                r.default.dispatch({
                    type: "CHANNEL_LOCAL_ACK",
                    channelId: e
                })
            }

            function I(e, t) {
                r.default.dispatch({
                    type: "ENABLE_AUTOMATIC_ACK",
                    channelId: e,
                    windowId: t
                })
            }

            function C(e, t) {
                r.default.dispatch({
                    type: "DISABLE_AUTOMATIC_ACK",
                    channelId: e,
                    windowId: t
                })
            }

            function p(e, t, n) {
                r.default.dispatch({
                    type: "GUILD_FEATURE_ACK",
                    id: e,
                    ackType: t,
                    ackedId: n,
                    local: !1
                })
            }

            function m(e, t) {
                var n;
                let l = null === (n = s.default.getCurrentUser()) || void 0 === n ? void 0 : n.id;
                null != l && r.default.dispatch({
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
            var l, r, u = n("37983");
            n("884691");
            var i = n("414456"),
                o = n.n(i),
                a = n("394846"),
                s = n("77078"),
                d = n("945330"),
                c = n("381546"),
                E = n("782340"),
                _ = n("955892");
            (l = r || (r = {})).DEFAULT = "", l.BOLD = "Bold", l.SOLID = "Solid";
            let f = e => {
                let {
                    closeAction: t,
                    variant: n,
                    keybind: l,
                    className: r
                } = e;
                return (0, u.jsxs)("div", {
                    className: o(_.container, r),
                    children: [(0, u.jsx)(s.Clickable, {
                        className: o(_.closeButton, {
                            [_.closeButtonBold]: "Bold" === n,
                            [_.closeButtonSolid]: "Solid" === n
                        }),
                        onClick: t,
                        "aria-label": E.default.Messages.CLOSE,
                        children: "Solid" === n ? (0, u.jsx)(c.default, {
                            width: 24,
                            height: 24,
                            "aria-hidden": !0
                        }) : (0, u.jsx)(d.default, {
                            width: 18,
                            height: 18,
                            "aria-hidden": !0
                        })
                    }), a.isMobile ? null : (0, u.jsx)("div", {
                        className: o(_.keybind),
                        "aria-hidden": !0,
                        children: l
                    })]
                })
            };
            f.defaultProps = {
                variant: ""
            }, f.Variants = r;
            var I = f
        },
        80300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                backgroundImagePreloader: function() {
                    return d
                }
            }), n("424973");
            var l = n("37983"),
                r = n("884691"),
                u = n("310013"),
                i = n.n(u),
                o = n("407063");
            let a = /url\(['"](.*)['"]\)/,
                s = e => {
                    if (null == e || "" === e || "none" === e) return null;
                    let t = e.match(a);
                    return null != t ? t[1] : e
                };

            function d(e) {
                class t extends r.Component {
                    componentDidUpdate(e, t) {
                        if (t === this.state) return;
                        let {
                            cached: n,
                            loaded: l
                        } = this.state, {
                            style: r
                        } = this.props, u = null != r ? s(r.backgroundImage) : null;
                        null == u && u !== n ? this.setState({
                            loaded: !0,
                            cached: u
                        }) : this.cachedURLs.indexOf(u) >= 0 ? this.setState({
                            loaded: !0,
                            cached: u
                        }) : null != u && u !== n && !0 === l && this.setState({
                            loaded: !1
                        }, () => this.preloadURL(u))
                    }
                    preloadURL(e) {
                        this.canceller && this.canceller(), this.canceller = (0, o.loadImage)(e, t => {
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
                            ...r
                        } = this.props, {
                            loaded: u,
                            cached: i
                        } = this.state;
                        if (!u && null != t) {
                            var o;
                            t = {
                                ...t,
                                backgroundImage: null == (o = i) || "" === o || "none" === o ? "none" : "url(".concat(o, ")")
                            }
                        }
                        return (0, l.jsx)(e, {
                            style: t,
                            ...r
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
        253980: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ChatCheckIcon: function() {
                    return i
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                u = n("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = r.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...a
                } = e;
                return (0, l.jsxs)("svg", {
                    ...(0, u.default)(a),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, l.jsx)("path", {
                        d: "M12.6572 21.9788C13.0638 21.9524 13.2243 21.4669 12.9362 21.1789L12.8787 21.1213C11.7071 19.9497 11.7071 18.0503 12.8787 16.8787C14.0503 15.7071 15.9497 15.7071 17.1213 16.8787L17.6464 17.4038C17.8417 17.5991 18.1583 17.5991 18.3536 17.4038L20.8787 14.8787C21.0751 14.6822 21.292 14.5187 21.5226 14.3882C21.6567 14.3122 21.761 14.189 21.7922 14.0381C21.9285 13.3801 22.0001 12.6984 22.0001 12C22.0001 6.47715 17.5229 2 12.0001 2C6.47722 2 2.00006 6.47715 2.00006 12C2.00006 13.9707 2.57012 15.8083 3.55434 17.3568C3.67708 17.5499 3.66399 17.8017 3.51353 17.9742L1.44664 20.3425C0.882113 20.9893 1.34151 22 2.20006 22H12.0001C12.2209 22 12.44 21.9928 12.6572 21.9788Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: o
                    }), (0, l.jsx)("path", {
                        d: "M23.7071 17.7071C24.0976 17.3166 24.0976 16.6834 23.7071 16.2929C23.3166 15.9024 22.6834 15.9024 22.2929 16.2929L18 20.5858L15.7071 18.2929C15.3166 17.9024 14.6834 17.9024 14.2929 18.2929C13.9024 18.6834 13.9024 19.3166 14.2929 19.7071L17.2929 22.7071C17.6834 23.0976 18.3166 23.0976 18.7071 22.7071L23.7071 17.7071Z",
                        fill: "string" == typeof i ? i : i.css,
                        className: o
                    })]
                })
            }
        },
        320954: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var l = n("917351"),
                r = n.n(l);

            function u(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : () => !0;
                return r(e).map(e => "null" === e.channel.id ? t[e.channel.id] : [e, t[e.channel.id]]).flattenDeep().filter(n).value()
            }
        },
        298878: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("669491"),
                u = n("956089"),
                i = n("782340");

            function o(e) {
                let {
                    className: t,
                    color: n = r.default.unsafe_rawColors.BRAND_500.css,
                    ...o
                } = e;
                return (0, l.jsx)(u.TextBadge, {
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
            var l = n("872717"),
                r = n("913144"),
                u = n("569883"),
                i = n("871336"),
                o = n("49111");
            async function a() {
                r.default.dispatch({
                    type: "INVENTORY_FETCH"
                });
                try {
                    let e = await l.default.get({
                        url: o.Endpoints.INVENTORY_GET
                    });
                    r.default.dispatch({
                        type: "INVENTORY_FETCH_SUCCESS",
                        packs: e.body.map(e => i.default.fromServer(e))
                    })
                } catch (t) {
                    var e;
                    r.default.dispatch({
                        type: "INVENTORY_FETCH_ERROR",
                        is4XXError: (null == (e = t.body) ? void 0 : e.status) >= 400 && (null == e ? void 0 : e.status) <= 499
                    })
                }
            }
            async function s(e) {
                let {
                    authorId: t,
                    packId: n,
                    expressionName: u
                } = e;
                try {
                    let e = await l.default.put({
                        url: o.Endpoints.INVENTORY_ADD_PACK,
                        body: {
                            author_id: t,
                            pack_id: n,
                            name_override: u
                        }
                    });
                    r.default.dispatch({
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
                    await l.default.put({
                        url: o.Endpoints.INVENTORY_REMOVE_PACK,
                        body: {
                            pack_id: t
                        }
                    }), r.default.dispatch({
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
                    await l.default.patch({
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
                    let e = await l.default.get({
                        url: o.Endpoints.INVENTORY_PACK_METADATA(t)
                    });
                    return u.default.createFromServer(e.body)
                } catch (e) {
                    return
                }
            }

            function _() {
                r.default.dispatch({
                    type: "INVENTORY_DISMISS_PACK_ADDED_NOTIFICATION"
                })
            }
        },
        365058: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                INVENTORY_MAX_PACKS: function() {
                    return l
                },
                INVENTORY_MAX_FREE_PACKS: function() {
                    return r
                },
                INVENTORY_PACK_ADDED_NOTIFICATION_DURATION: function() {
                    return u
                }
            });
            let l = 100,
                r = 1,
                u = 2e3
        },
        529932: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getJoinedEmojiSourceGuildData: function() {
                    return p
                },
                useEmojiAndSourceGuild: function() {
                    return m
                },
                usePackCollectionData: function() {
                    return A
                },
                useExpressionSourceGuildDataForGuildLeaveModal: function() {
                    return N
                }
            }), n("222007");
            var l = n("884691"),
                r = n("65597"),
                u = n("913144"),
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
            let p = (e, t, n) => {
                    let l = null != n ? e.getCustomEmojiById(n) : null;
                    switch (null == l ? void 0 : l.type) {
                        case o.EmojiTypes.GUILD:
                            return {
                                emoji: l, joinedEmojiSourceGuildRecord: t.getGuild(null == l ? void 0 : l.guildId)
                            };
                        case o.EmojiTypes.PACK:
                            return {
                                emoji: l, joinedEmojiSourceGuildRecord: t.getGuild(null == l ? void 0 : l.packId)
                            };
                        default:
                            return {
                                emoji: null, joinedEmojiSourceGuildRecord: null
                            }
                    }
                },
                m = e => {
                    let {
                        emojiId: t,
                        refreshPositionKey: n
                    } = e, {
                        joinedEmojiSourceGuildRecord: u,
                        emoji: o
                    } = (0, r.useStateFromStoresObject)([i.default, a.default], () => p(i.default, a.default, t)), s = null != u, d = null != u && u.hasFeature(I.GuildFeatures.DISCOVERABLE), c = (!s || d) && null != t, [E, _] = l.useState(c), C = null != u ? f.default.createFromGuildRecord(u) : null, [m, O] = l.useState(C);
                    return l.useEffect(() => {
                        null == n || n();
                        let e = async () => {
                            let e = null != t ? await f.default.getGuildFromEmojiId(t) : null;
                            O(e), _(!1), null == n || n()
                        };
                        if (c) {
                            e();
                            return
                        }
                        null == n || n()
                    }, [t, c]), {
                        expressionSourceGuild: m,
                        joinedEmojiSourceGuildRecord: u,
                        hasJoinedEmojiSourceGuild: s,
                        emoji: o,
                        isFetching: E
                    }
                },
                O = e => {
                    let {
                        expressionSourceGuild: t
                    } = e, n = (0, r.default)([E.default], () => null != t ? E.default.getPackByPackId({
                        packId: t.id
                    }) : null);
                    return null != n ? n : null
                },
                A = e => {
                    let {
                        expressionSourceGuild: t
                    } = e, n = (0, r.default)([s.default], () => s.default.getCurrentUser()), l = d.default.isPremium(n), u = (0, c.useInventoryGuildPacksUserExperiment)({
                        expressionSourceGuild: t
                    }), i = (0, r.default)([E.default], () => E.default.countPacksCollected()), o = O({
                        expressionSourceGuild: t
                    }), a = i >= (0, _.getMaxPacksForUserType)(l);
                    return {
                        ...u,
                        collectedPack: o,
                        numPacksCollected: i,
                        hasReachedMaxPacksCollected: a,
                        isPremium: l
                    }
                },
                N = e => {
                    let t = (0, c.useInventoryGuildPacksUserExperiment)({
                            expressionSourceGuild: f.default.createFromGuildRecord(e),
                            autoTrackExposure: !1
                        }),
                        n = (0, c.useInventoryGuildSettingsExperiment)({
                            guildId: e.id,
                            autoTrackExposure: !1
                        }),
                        o = t.collectEnabled && n.allowCollection,
                        a = (0, r.default)([i.default], () => {
                            let t = i.default.getGuildEmoji(e.id).filter(e => 0 === e.roles.length && e.available && !e.managed);
                            return 0 === t.length ? null : t[0].id
                        }),
                        [s, d] = l.useState(null);
                    return l.useEffect(() => {
                        let e = async e => {
                            d(await f.default.getGuildFromEmojiId(e))
                        };
                        o && null != a && e(a)
                    }, []), l.useEffect(() => {
                        u.default.dispatch({
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
                    return p
                },
                getMaxPacksForUserType: function() {
                    return m
                }
            });
            var l = n("811022"),
                r = n("412745"),
                u = n("697218"),
                i = n("599110"),
                o = n("315102"),
                a = n("252931"),
                s = n("13162"),
                d = n("166465"),
                c = n("365058"),
                E = n("49111");
            let _ = new l.default("InventoryUtils");

            function f(e) {}
            async function I() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "unknown",
                    t = "maybeGetPacks, trigger point: ".concat(e, " "),
                    n = u.default.getCurrentUser();
                if (null == n) {
                    f(t + "no current user");
                    return
                }
                let l = (0, a.getInventoryGuildPacksUserExperimentConfig)({
                    user: n
                });
                if (!l.viewAndUseEnabled) {
                    f(t + "packs experiment not enabled"), d.default.hasPersistedState() && d.default.clear();
                    return
                }
                let r = d.default.getPackEmojisTTL();
                if (null != r && Date.now() < r) {
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
            let p = e => {
                    let {
                        expressionSourceGuild: t,
                        action: n,
                        onComplete: l,
                        nonce: u,
                        expressionName: o
                    } = e;
                    return () => {
                        if (null == t) {
                            null == l || l();
                            return
                        }
                        let e = t.id,
                            a = t.isDiscoverable();
                        n === r.EmojiPopoutType.ADD_PACK ? (0, s.collectPack)({
                            packId: e,
                            expressionName: a ? void 0 : o
                        }) : n === r.EmojiPopoutType.REMOVE_PACK && (0, s.uncollectPack)({
                            packId: e
                        }), i.default.track(E.AnalyticEvents.INVENTORY_PACK_ACTION_COMPLETED, {
                            type: n,
                            inventory_pack_id: e,
                            nonce: u
                        }), null == l || l()
                    }
                },
                m = e => e ? c.INVENTORY_MAX_PACKS : c.INVENTORY_MAX_FREE_PACKS
        },
        446066: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            }), n("222007");
            var l, r, u = n("872717"),
                i = n("666038"),
                o = n("813006"),
                a = n("315102"),
                s = n("159885"),
                d = n("886167"),
                c = n("49111");
            (l || (l = {})).GUILD = "GUILD";
            let E = async e => {
                let t = null;
                try {
                    var n;
                    let l = await u.default.get({
                        url: c.Endpoints.EMOJI_SOURCE_DATA(e),
                        oldFormErrors: !0,
                        timeout: 5e3
                    });
                    (null == l ? void 0 : null === (n = l.body) || void 0 === n ? void 0 : n.guild) != null && (t = {
                        guild: r.createFromServer(l.body.guild),
                        type: l.body.type
                    })
                } catch {}
                return t
            };
            r = class e extends i.default {
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
                    return l
                }
            });
            var l, r = n("666038");
            l = class e extends r.default {
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
            var l, r, u, i, o = n("365058"),
                a = n("782340");
            (l = u || (u = {})).DEFAULT = "Custom Emoji Popout", l.CROSS_SERVER = "Custom Emoji Popout (Cross-Server)", l.UPSELL_CURRENT_SERVER_JOINED = "Custom Emoji Popout (Upsell Joined Current-Server)", l.UPSELL_CROSS_SERVER_JOINED = "Custom Emoji Popout (Upsell Joined Cross-Server)", l.UPSELL_CROSS_SERVER_JOINABLE = "Custom Emoji Popout (Upsell Not-Joined Cross-Server)", l.UPSELL_CROSS_SERVER_UNJOINABLE = "Custom Emoji Popout (Soft Upsell)", (r = i || (i = {})).GET_PREMIUM_INVENTORY_DISABLED = "GET_PREMIUM_INVENTORY_DISABLED", r.GET_PREMIUM_INVENTORY_ENABLED = "GET_PREMIUM_INVENTORY_ENABLED", r.JOIN_GUILD = "JOIN_GUILD", r.ADD_PACK = "ADD_PACK", r.REMOVE_PACK = "REMOVE_PACK", r.UNAVAILABLE = "UNAVAILABLE";
            let s = e => {
                    let {
                        isPremium: t,
                        hasJoinedEmojiSourceGuild: n,
                        isUnusableRoleSubscriptionEmoji: l,
                        emojiComesFromCurrentGuild: r,
                        isDiscoverable: u
                    } = e, i = "Custom Emoji Popout";
                    return t && !n && u ? i = "Custom Emoji Popout (Cross-Server)" : t || !n || l ? !t && !n && (i = u ? "Custom Emoji Popout (Upsell Not-Joined Cross-Server)" : "Custom Emoji Popout (Soft Upsell)") : i = r ? "Custom Emoji Popout (Upsell Joined Current-Server)" : "Custom Emoji Popout (Upsell Joined Cross-Server)", i
                },
                d = e => {
                    let {
                        isPremium: t,
                        hasJoinedEmojiSourceGuild: n,
                        isUnusableRoleSubscriptionEmoji: l,
                        isDiscoverable: r,
                        emojiComesFromCurrentGuild: u,
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
                    return E = t ? n ? o ? s && l ? a.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION : l ? i ? a.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION : a.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION : a.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_SUBSCRIBED_DESCRIPTION : u ? a.default.Messages.EMOJI_POPOUT_PREMIUM_CURRENT_GUILD_DESCRIPTION : a.default.Messages.EMOJI_POPOUT_PREMIUM_JOINED_GUILD_DESCRIPTION : r ? a.default.Messages.EMOJI_POPOUT_PREMIUM_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : a.default.Messages.EMOJI_POPOUT_PREMIUM_UNJOINED_PRIVATE_GUILD_DESCRIPTION : n ? s && l ? a.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UNAVAILABLE_DESCRIPTION : l ? i ? a.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_UPGRADE_UPSELL_DESCRIPTION : a.default.Messages.ROLE_SUBSCRIPTION_EMOJI_POPOUT_PURCHASE_UPSELL_DESCRIPTION : u ? a.default.Messages.EMOJI_POPOUT_CURRENT_GUILD_DESCRIPTION : a.default.Messages.EMOJI_POPOUT_JOINED_GUILD_DESCRIPTION : r ? a.default.Messages.EMOJI_POPOUT_UNJOINED_DISCOVERABLE_GUILD_DESCRIPTION : a.default.Messages.EMOJI_POPOUT_UNJOINED_PRIVATE_GUILD_DESCRIPTION.format({
                        openPremiumSettings: c
                    })
                },
                c = e => {
                    let {
                        isPremium: t,
                        hasJoinedEmojiSourceGuild: n,
                        isUnusableRoleSubscriptionEmoji: l,
                        isDiscoverable: r,
                        packCollectionData: u
                    } = e, i = (null == u ? void 0 : u.collectEnabled) === !0, s = (null == u ? void 0 : u.viewAndUseEnabled) === !0, d = (null == u ? void 0 : u.collectedPack) != null, c = (null == u ? void 0 : u.showTryPacksModalAndV2Copy) === !0, E = !i && !d, _ = !n && r;
                    if ((E || !s) && t && _) return {
                        type: "JOIN_GUILD",
                        text: a.default.Messages.GUILD_PROFILE_JOIN_SERVER_BUTTON,
                        description: null
                    };
                    if (!t && (n && !l || (E || !s) && _)) return {
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
                        let e = (null !== (f = null == u ? void 0 : u.numPacksCollected) && void 0 !== f ? f : 0) >= o.INVENTORY_MAX_FREE_PACKS,
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
                        l = c(e);
                    return {
                        ...l,
                        emojiDescription: t,
                        analyticsType: n
                    }
                }
        },
        245997: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("424973"), n("222007"), n("808653");
            var l = n("446674"),
                r = n("913144"),
                u = n("320954"),
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

            function p(e, t) {
                e.index = t
            }

            function m(e) {
                let t = s.default.getChannels(e),
                    n = I(),
                    l = e => {
                        var t;
                        let {
                            channel: l
                        } = e, r = null !== (t = n[null != l.parent_id ? l.parent_id : "null"]) && void 0 !== t ? t : n.null;
                        r.push({
                            channel: l,
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
                }), t[0, s.GUILD_SELECTABLE_CHANNELS_KEY].forEach(l), t[0, s.GUILD_VOCAL_CHANNELS_KEY].forEach(l), (0, u.default)(n._categories, n).forEach(p), _[e] = n, n
            }

            function O() {
                _ = {}, null != E && m(E)
            }

            function A(e) {
                let {
                    guild: {
                        id: t
                    }
                } = e;
                _[t] = void 0, E === t && m(t)
            }

            function N(e) {
                let {
                    channel: {
                        guild_id: t
                    }
                } = e;
                if (null == t) return !1;
                _[t] = void 0, E === t && m(t)
            }

            function P(e) {
                let {
                    guildId: t
                } = e;
                _[t] = void 0, t === E && m(t)
            }

            function R(e, t) {
                if (f = t, null == e || null == e.getGuildId()) return !1;
                let n = e.getGuildId();
                return null != n && (_[n] = void 0, n === E && m(n), !0)
            }

            function T() {
                m(c.FAVORITES)
            }
            class S extends l.default.Store {
                initialize() {
                    this.waitFor(s.default, d.default, o.default, a.default, i.default), this.syncWith([i.default], T)
                }
                getCategories(e) {
                    return null != e ? function(e) {
                        let t = _[e];
                        return null != t ? t : m(e)
                    }(e) : C
                }
            }
            S.displayName = "GuildCategoryStore";
            var h = new S(r.default, {
                CHANNEL_SELECT: function(e) {
                    let {
                        guildId: t
                    } = e;
                    if (E = null != t ? t : null, null == t || null != _[t]) return !1;
                    m(t)
                },
                CONNECTION_OPEN: O,
                OVERLAY_INITIALIZE: O,
                CACHE_LOADED_LAZY: O,
                GUILD_CREATE: A,
                GUILD_UPDATE: A,
                GUILD_DELETE: function(e) {
                    let {
                        guild: {
                            id: t
                        }
                    } = e;
                    delete _[t]
                },
                CHANNEL_CREATE: N,
                CHANNEL_DELETE: N,
                CHANNEL_UPDATES: function(e) {
                    let {
                        channels: t
                    } = e, n = !1;
                    for (let {
                            guild_id: e
                        }
                        of t) null != e && (_[e] = void 0, n = !0, E === e && m(e));
                    return n
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    let {
                        guildId: t,
                        user: n
                    } = e;
                    if (o.default.getId() !== n.id) return !1;
                    _[t] = void 0, t === E && m(t)
                },
                CURRENT_USER_UPDATE: function() {
                    if (null == E) return !1;
                    m(E)
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
                    return null == t && null != f ? R(a.default.getChannel(f), null) : R(a.default.getChannel(t), t)
                },
                VOICE_STATE_UPDATES: function(e) {
                    let {
                        voiceStates: t
                    } = e;
                    return t.reduce((e, t) => {
                        let {
                            channelId: n,
                            sessionId: l
                        } = t;
                        return o.default.getSessionId() !== l ? e : R(a.default.getChannel(n), n) || e
                    }, !1)
                }
            })
        },
        476263: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return R
                }
            });
            var l = n("37983"),
                r = n("884691"),
                u = n("414456"),
                i = n.n(u),
                o = n("90915"),
                a = n("446674"),
                s = n("669491"),
                d = n("77078"),
                c = n("80300"),
                E = n("471671"),
                _ = n("103603"),
                f = n("474293"),
                I = n("580357"),
                C = n("491088");
            let p = {
                    SMOL: "Smol",
                    MINI: "Mini",
                    SMALLER: "Smaller",
                    SMALL: "Small",
                    MEDIUM: "Medium",
                    LARGE: "Large",
                    LARGER: "Larger",
                    XLARGE: "XLarge"
                },
                m = {
                    [p.SMOL]: 16,
                    [p.MINI]: 20,
                    [p.SMALLER]: 24,
                    [p.SMALL]: 30,
                    [p.MEDIUM]: 40,
                    [p.LARGE]: 50,
                    [p.LARGER]: 64,
                    [p.XLARGE]: 100
                },
                O = {
                    [p.SMOL]: [10, 10, 8, 6, 6, 4],
                    [p.MINI]: [12, 12, 10, 10, 8, 6, 4],
                    [p.SMALLER]: [13, 13, 11, 11, 9, 7, 5],
                    [p.SMALL]: [14, 14, 12, 12, 10, 8, 6],
                    [p.MEDIUM]: [16, 16, 14, 14, 12, 10, 8],
                    [p.LARGE]: [18, 18, 16, 16, 14, 12, 10],
                    [p.LARGER]: [19, 19, 17, 17, 15, 13, 11],
                    [p.XLARGE]: [20, 20, 18, 18, 16, 14, 12]
                };
            class A extends r.PureComponent {
                renderAcronym() {
                    let {
                        guild: e,
                        iconSrc: t
                    } = this.props;
                    return null != e.icon || null != t ? null : (0, l.jsx)("div", {
                        className: C.acronym,
                        children: e.acronym
                    })
                }
                renderBadge() {
                    let {
                        showBadge: e,
                        guild: t,
                        badgeStrokeColor: n
                    } = this.props;
                    return e && null != t.hasFeature ? (0, l.jsx)(I.default, {
                        className: C.guildIconBadge,
                        guild: t,
                        badgeStrokeColor: n
                    }) : null
                }
                renderIcon() {
                    var e, t;
                    let {
                        guild: n,
                        className: r,
                        showBadge: u,
                        active: o,
                        size: a,
                        style: s = {},
                        textScale: c,
                        showTooltip: E,
                        tooltipPosition: _,
                        onClick: I,
                        to: p,
                        badgeStrokeColor: m,
                        animate: A,
                        tabIndex: N,
                        iconSrc: P,
                        "aria-hidden": R,
                        ...T
                    } = this.props, S = O[a], h = null != I ? d.Clickable : "div";
                    return (0, l.jsxs)(h, {
                        className: i(C.icon, r, (0, f.getClass)(C, "iconSize", a), {
                            [null !== (e = (0, f.getClass)(C, "iconActive", a)) && void 0 !== e ? e : ""]: o,
                            [C.iconInactive]: !o,
                            [C.noIcon]: null == n.icon
                        }),
                        "aria-hidden": R,
                        style: null == n.icon ? {
                            fontSize: (null !== (t = S[n.acronym.length]) && void 0 !== t ? t : S[S.length - 1]) * c,
                            ...s
                        } : s,
                        onClick: null != p || null == I ? void 0 : I,
                        tabIndex: N,
                        ...T,
                        children: [this.renderAcronym(), this.renderBadge()]
                    })
                }
                renderTooltip() {
                    let {
                        guild: e,
                        showTooltip: t,
                        tooltipPosition: n
                    } = this.props;
                    return t ? (0, l.jsx)(d.Tooltip, {
                        text: e.name,
                        position: n,
                        "aria-label": !1,
                        children: e => r.cloneElement(r.Children.only(this.renderIcon()), {
                            ...e
                        })
                    }) : this.renderIcon()
                }
                render() {
                    let {
                        to: e,
                        guild: t,
                        source: n,
                        tabIndex: r,
                        "aria-hidden": u
                    } = this.props;
                    return null != e ? (0, l.jsx)(o.Link, {
                        "aria-hidden": u,
                        to: {
                            pathname: e,
                            state: null != n ? {
                                analyticsSource: n
                            } : null
                        },
                        "aria-label": t.toString(),
                        tabIndex: r,
                        children: this.renderTooltip()
                    }) : this.renderTooltip()
                }
            }
            let N = a.default.connectStores([E.default], e => {
                let {
                    guild: t,
                    animate: n,
                    iconSrc: l,
                    style: r,
                    size: u
                } = e;
                return {
                    style: {
                        ...r,
                        backgroundImage: (0, _.makeCssUrlString)(null != l ? l : t.getIconURL(m[u], n && E.default.isFocused()))
                    }
                }
            })((0, c.backgroundImagePreloader)(e => (0, l.jsx)(A, {
                ...e
            })));
            class P extends r.PureComponent {
                render() {
                    return (0, l.jsx)(N, {
                        ...this.props
                    })
                }
            }
            P.Sizes = p, P.defaultProps = {
                size: p.LARGE,
                textScale: 1,
                showBadge: !1,
                showTooltip: !1,
                active: !1,
                tooltipPosition: "top",
                badgeStrokeColor: s.default.unsafe_rawColors.WHITE_500.css,
                animate: !1
            };
            var R = P
        },
        171710: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            });
            var l = n("37983");
            n("884691");
            var r = n("469563"),
                u = n("253980"),
                i = n("75196"),
                o = (0, r.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: r = "currentColor",
                        foreground: u,
                        ...o
                    } = e;
                    return (0, l.jsx)("svg", {
                        ...(0, i.default)(o),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, l.jsx)("path", {
                            className: u,
                            fill: r,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12.291 5.70697L15.998 9.41397L21.705 3.70697L20.291 2.29297L15.998 6.58597L13.705 4.29297L12.291 5.70697ZM1.99805 7H11.088C11.564 9.837 14.025 12 16.998 12V18C16.998 19.103 16.102 20 14.998 20H8.33205L2.99805 24V20H1.99805C0.894047 20 -0.00195312 19.103 -0.00195312 18V9C-0.00195312 7.897 0.894047 7 1.99805 7Z"
                        })
                    })
                }, u.ChatCheckIcon, void 0, {
                    size: 24
                })
        },
        474293: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                getClass: function() {
                    return r
                }
            }), n("808653");
            var l = n("159885");

            function r(e, t) {
                for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), u = 2; u < n; u++) r[u - 2] = arguments[u];
                let i = r.reduce((e, t) => e + (0, l.upperCaseFirstChar)(t), ""),
                    o = "".concat(t).concat(i),
                    a = e[o];
                if (null != a) return a
            }
        }
    }
]);
//# sourceMappingURL=023c0b85f8bf8ccc5a95.js.map