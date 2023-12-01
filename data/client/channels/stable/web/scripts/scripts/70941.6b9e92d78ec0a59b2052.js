(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["70941"], {
        890450: function(e, t, n) {
            "use strict";
            e.exports = n.p + "321a07cbc6f5919dbce9.svg"
        },
        839491: function(e, t, n) {
            "use strict";
            e.exports = n.p + "a826e445dff97cf15335.svg"
        },
        164654: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1f3e315f020ed5635dc1.svg"
        },
        540346: function(e, t, n) {
            "use strict";
            e.exports = n.p + "1af9bdf041e000508e41.svg"
        },
        526094: function(e, t, n) {
            "use strict";
            e.exports = n.p + "7442b576347c1d02886f.svg"
        },
        367469: function(e, t, n) {
            "use strict";
            e.exports = n.p + "3205da2e8f78633583d0.svg"
        },
        23933: function(e, t, n) {
            "use strict";
            e.exports = n.p + "8f581f91e7e650ac87a2.svg"
        },
        283397: function(e, t, n) {
            "use strict";
            e.exports = n.p + "44d5e1639bc492dc8d62.svg"
        },
        671306: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                ScreenXIcon: function() {
                    return a
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, s.jsxs)("svg", {
                    ...(0, l.default)(u),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, s.jsx)("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2 5C2 3.34315 3.34315 2 5 2H19C20.6569 2 22 3.34315 22 5V13C22 14.6569 20.6569 16 19 16H5C3.34315 16 2 14.6569 2 13V5ZM8.29289 5.29289C8.68342 4.90237 9.31658 4.90237 9.70711 5.29289L12 7.58579L14.2929 5.29289C14.6834 4.90237 15.3166 4.90237 15.7071 5.29289C16.0976 5.68342 16.0976 6.31658 15.7071 6.70711L13.4142 9L15.7071 11.2929C16.0976 11.6834 16.0976 12.3166 15.7071 12.7071C15.3166 13.0976 14.6834 13.0976 14.2929 12.7071L12 10.4142L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L10.5858 9L8.29289 6.70711C7.90237 6.31658 7.90237 5.68342 8.29289 5.29289Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: r
                    }), (0, s.jsx)("path", {
                        d: "M13 19.5C13 19.7761 13.2239 20 13.5 20H15C15.5523 20 16 20.4477 16 21C16 21.5523 15.5523 22 15 22H9C8.44772 22 8 21.5523 8 21C8 20.4477 8.44772 20 9 20H10.5C10.7761 20 11 19.7761 11 19.5V17.5C11 17.2239 11.2239 17 11.5 17H12.5C12.7761 17 13 17.2239 13 17.5V19.5Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: r
                    })]
                })
            }
        },
        388142: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                initiateChannelPrompts: function() {
                    return h
                },
                forcePrompt: function() {
                    return f
                },
                sendGamingStatsMessage: function() {
                    return p
                },
                updateGamingStats: function() {
                    return C
                }
            });
            var s = n("872717"),
                i = n("295426"),
                l = n("819689"),
                a = n("529805"),
                r = n("42203"),
                u = n("474643"),
                o = n("377253"),
                c = n("659500"),
                d = n("49111");

            function h(e) {
                s.default.post({
                    url: d.Endpoints.INITIATE_CHANNEL_PROMPTS,
                    body: {
                        guild_ids: e
                    }
                })
            }

            function f(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : d.MessageTypes.GUILD_DEADCHAT_REVIVE_PROMPT;
                s.default.post({
                    url: d.Endpoints.FORCE_SEND_PROMPT(e),
                    body: {
                        prompt_type: t
                    }
                })
            }
            async function p(e, t, n) {
                await s.default.post({
                    url: d.Endpoints.SEND_GAMING_STATS(t),
                    body: {
                        message_reference: {
                            guild_id: e,
                            channel_id: t,
                            message_id: n
                        }
                    }
                }), E(t)
            }
            async function C(e) {
                let t = await s.default.patch({
                    url: d.Endpoints.UPDATE_GAMING_STATS(e.channel_id, e.id)
                });
                if (null != t.text && "" !== t.text) {
                    let n = r.default.getChannel(e.channel_id);
                    null != n && ((0, a.createPendingReply)({
                        channel: n,
                        message: e,
                        shouldMention: !1,
                        showMentionToggle: !1
                    }), E(n.id)), i.default.saveDraft(e.channel_id, t.text, u.DraftType.ChannelMessage)
                }
            }

            function E(e) {
                let t = o.default.getMessages(e);
                t.hasMoreAfter ? l.default.jumpToPresent(e, d.MAX_MESSAGES_PER_CHANNEL) : c.ComponentDispatch.dispatch(d.ComponentActions.SCROLLTO_PRESENT)
            }
        },
        172858: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DUCK_CONFETTI_SPRITE: function() {
                    return l
                },
                COMMON_CONFETTI_COLORS: function() {
                    return a
                },
                COMMON_CONFETTI_SPRITES: function() {
                    return r
                },
                COMMON_CONFETTI_MAX_SPRITE_SIZE: function() {
                    return u
                },
                COMMON_CONFETTI_BASE_CONFIG: function() {
                    return o
                },
                COMMON_CONFETTI_ENVIRONMENT: function() {
                    return c
                }
            });
            var s = n("516555"),
                i = n("839491");
            let l = i,
                a = ["#FF73FA", "#FFC0FF", "#FFD836", "#FF9A15", "#A5F7DE", "#51BC9D", "#AEC7FF", "#3E70DD"],
                r = [n("890450"), l, n("164654"), n("540346"), n("526094"), n("367469"), n("23933"), {
                    src: n("283397"),
                    colorize: !1
                }],
                u = 28,
                o = {
                    velocity: {
                        type: "static-random",
                        minValue: {
                            x: 30,
                            y: -80
                        },
                        maxValue: {
                            x: -30,
                            y: -180
                        }
                    },
                    rotation: {
                        type: "linear-random",
                        minValue: 0,
                        maxValue: 360,
                        minAddValue: -25,
                        maxAddValue: 25
                    },
                    size: {
                        type: "static-random",
                        minValue: 14,
                        maxValue: u
                    }
                },
                c = new s.Environment
        },
        933326: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return h
                }
            }), n("222007");
            var s = n("689988"),
                i = n("21121"),
                l = n("162771"),
                a = n("398604"),
                r = n("322224");
            let u = {},
                o = new Set,
                c = async e => {
                    let t = a.default.getGuildScheduledEventsForGuild(e);
                    if (0 !== t.length) {
                        if (!o.has(e)) try {
                            await r.default.getGuildEventsForCurrentUser(e), o.add(e)
                        } catch (e) {}
                    }
                };
            class d extends s.default {
                async getGuildEventUserCounts(e, t, n) {
                    let s = n.filter(n => null == u["".concat(e, "-").concat(t, "-").concat(n)] || Date.now() - u["".concat(e, "-").concat(t, "-").concat(n)] > 18e5);
                    if (!(Date.now() - u["".concat(e, "-").concat(t)] < 18e5) || 0 !== s.length) {
                        u["".concat(e, "-").concat(t)] = Date.now(), s.forEach(n => u["".concat(e, "-").concat(t, "-").concat(n)] = Date.now());
                        try {
                            await r.default.fetchGuildEventUserCounts(e, t, s)
                        } catch (e) {}
                    }
                }
                getGuildEventUsers(e, t, n) {
                    return r.default.fetchUsersForGuildEvent(e, t, n)
                }
                getGuildEventsForCurrentUser(e) {
                    return c(e)
                }
                handleConnectionOpen() {
                    o.clear(), u = {};
                    let e = (0, i.isInMainTabsExperiment)(),
                        t = l.default.getLastSelectedGuildId();
                    if (e && null != t) {
                        let e = a.default.getGuildScheduledEventsForGuild(t);
                        e.forEach(e => this.getGuildEventUserCounts(t, e.id, []))
                    }
                }
                handleGuildUnavailable(e) {
                    let {
                        guildId: t
                    } = e;
                    o.delete(t), delete u[t]
                }
                handleGuildDelete(e) {
                    let {
                        guild: t
                    } = e, n = t.id;
                    o.delete(n), delete u[n]
                }
                handleInviteResolveSuccess(e) {
                    var t;
                    let {
                        invite: n
                    } = e, s = n.guild_scheduled_event, i = null === (t = n.guild) || void 0 === t ? void 0 : t.id;
                    null != s && null != i && c(i)
                }
                handleChannelSelect(e) {
                    let {
                        guildId: t
                    } = e;
                    if (null == t) return;
                    let n = a.default.getGuildScheduledEventsForGuild(t);
                    n.forEach(e => this.getGuildEventUserCounts(t, e.id, []))
                }
                constructor(...e) {
                    super(...e), this.actions = {
                        POST_CONNECTION_OPEN: () => this.handleConnectionOpen(),
                        GUILD_DELETE: e => this.handleGuildDelete(e),
                        GUILD_UNAVAILABLE: e => this.handleGuildUnavailable(e),
                        INVITE_RESOLVE_SUCCESS: e => this.handleInviteResolveSuccess(e),
                        CHANNEL_SELECT: e => this.handleChannelSelect(e)
                    }
                }
            }
            var h = new d
        },
        596512: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                }
            }), n("222007"), n("424973");
            var s = n("693566"),
                i = n.n(s),
                l = n("689988"),
                a = n("599110"),
                r = n("49111");
            class u extends l.default {
                handleMessageBecameVisible(e) {
                    let {
                        messageId: t
                    } = e;
                    if (null != this.currentlyVisibleMessageTimers[t] || this.viewsInCurrentChannel.has(t)) return;
                    let n = this.recentViewTimes.get(t);
                    if (null != n && Date.now() - n < 6e4) return;
                    let s = setTimeout(() => {
                        delete this.currentlyVisibleMessageTimers[t], this.viewsInCurrentChannel.add(t), this.recentViewTimes.set(t, Date.now()), this.bufferViewTrack(e)
                    }, 1e3);
                    this.currentlyVisibleMessageTimers[t] = s
                }
                handleMessageLostVisibility(e) {
                    let t = this.currentlyVisibleMessageTimers[e];
                    null != t && (clearTimeout(t), delete this.currentlyVisibleMessageTimers[e])
                }
                handleMessageListVisibilityChange(e) {
                    for (let t of e) this.handleMessageBecameVisible(t);
                    let t = new Set(e.map(e => e.messageId));
                    for (let e of Object.keys(this.currentlyVisibleMessageTimers)) !t.has(e) && this.handleMessageLostVisibility(e)
                }
                handleChannelSelect() {
                    for (let e of Object.values(this.currentlyVisibleMessageTimers)) clearTimeout(e);
                    this.currentlyVisibleMessageTimers = {}, this.viewsInCurrentChannel.clear(), this.drainBuffer()
                }
                drainBuffer() {
                    for (let e of this.batchBuffer) a.default.track(r.AnalyticEvents.ANNOUNCEMENT_MESSAGE_VIEWED, {
                        message_id: e.messageId,
                        channel_id: e.channelId,
                        guild_id: e.guildId,
                        source_channel_id: e.sourceChannelId,
                        source_guild_id: e.sourceGuildId
                    });
                    this.batchBuffer = [], null != this.batchTimerId && (clearTimeout(this.batchTimerId), this.batchTimerId = null)
                }
                bufferViewTrack(e) {
                    this.batchBuffer.length >= 10 && this.drainBuffer(), this.batchBuffer.push(e), null == this.batchTimerId && (this.batchTimerId = setTimeout(() => this.drainBuffer(), 2e3))
                }
                constructor(...e) {
                    super(...e), this.currentlyVisibleMessageTimers = {}, this.viewsInCurrentChannel = new Set, this.recentViewTimes = new i({
                        max: 500,
                        maxAge: 6e4
                    }), this.batchBuffer = [], this.batchTimerId = null, this.actions = {
                        CHANNEL_SELECT: () => this.handleChannelSelect()
                    }
                }
            }
            var o = new u
        },
        427302: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var s = n("37983"),
                i = n("884691"),
                l = n("414456"),
                a = n.n(l),
                r = n("77078"),
                u = n("145079"),
                o = n("86621"),
                c = n("506885"),
                d = n("981601"),
                h = n("145131"),
                f = n("49111"),
                p = n("123106");
            class C extends i.Component {
                render() {
                    let {
                        popoutOpen: e
                    } = this.state, {
                        user: t,
                        analyticsContext: n,
                        disablePopout: i,
                        guildId: l
                    } = this.props, a = {
                        location: {
                            ...n.location,
                            object: f.AnalyticsObjects.LIST_ITEM
                        }
                    };
                    return (0, s.jsx)(r.Popout, {
                        preload: () => (0, c.default)(t.id, t.getAvatarURL(l, 80), {
                            guildId: l
                        }),
                        renderPopout: e => (0, s.jsx)(d.default, {
                            ...e,
                            guildId: l,
                            userId: t.id,
                            analyticsParams: a
                        }),
                        position: "left",
                        onRequestClose: this.handleUserPopoutClose,
                        shouldShow: !i && e,
                        children: e => this.renderUserPopout(e)
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        popoutOpen: !1
                    }, this.handleClickUser = () => {
                        let {
                            onPopoutOpen: e
                        } = this.props;
                        this.setState({
                            popoutOpen: !this.state.popoutOpen
                        }), null == e || e()
                    }, this.handleUserPopoutClose = () => {
                        let {
                            onPopoutClose: e
                        } = this.props;
                        this.setState({
                            popoutOpen: !1
                        }), null == e || e()
                    }, this.renderUserPopout = e => {
                        let {
                            className: t,
                            disablePopout: n,
                            onContextMenu: i,
                            user: l,
                            status: o,
                            textClassName: c,
                            nick: d,
                            guildId: f
                        } = this.props;
                        return (0, s.jsxs)(h.default, {
                            align: h.default.Align.CENTER,
                            className: a(p.memberListItem, t, {
                                [p.popoutDisabled]: n
                            }),
                            onContextMenu: i,
                            onMouseDown: e.onMouseDown,
                            onKeyDown: e.onKeyDown,
                            onClick: this.handleClickUser,
                            children: [(0, s.jsx)(r.Avatar, {
                                src: l.getAvatarURL(f, 24),
                                className: p.avatar,
                                "aria-label": l.username,
                                size: r.AvatarSizes.SIZE_24,
                                status: o
                            }), (0, s.jsx)(r.Text, {
                                className: a(p.memberListItemTag, c),
                                variant: "text-sm/normal",
                                children: (0, s.jsx)(u.default, {
                                    user: l,
                                    nick: d,
                                    usernameClass: p.username,
                                    hideDiscriminator: !0
                                })
                            })]
                        })
                    }
                }
            }
            C.defaultProps = {
                disablePopout: !1
            };
            var E = (0, o.default)(C)
        },
        985622: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("671306"),
                a = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...r
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, a.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M4 2.5C2.897 2.5 2 3.397 2 4.5V15.5C2 16.604 2.897 17.5 4 17.5H11V19.5H7V21.5H17V19.5H13V17.5H20C21.103 17.5 22 16.604 22 15.5V4.5C22 3.397 21.103 2.5 20 2.5H4ZM14.5483 6L16 7.45174L13.4466 9.99485L16 12.5483L14.5483 14L12.0051 11.4466L9.45174 14L8 12.5483L10.5534 9.99485L8 7.45174L9.45174 6L12.0051 8.55341L14.5483 6Z",
                            fill: i
                        })
                    })
                }, l.ScreenXIcon, void 0, {
                    size: 24
                })
        }
    }
]);
//# sourceMappingURL=70941.6b9e92d78ec0a59b2052.js.map