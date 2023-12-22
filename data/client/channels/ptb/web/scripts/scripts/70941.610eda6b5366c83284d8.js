(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["70941"], {
        606863: function(e, t, n) {
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
                    return l
                }
            });
            var s = n("37983");
            n("884691");
            var i = n("669491"),
                a = n("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: l = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: r = "",
                    ...u
                } = e;
                return (0, s.jsxs)("svg", {
                    ...(0, a.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, s.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        fillRule: "evenodd",
                        d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5Zm6.3.3a1 1 0 0 1 1.4 0L12 7.58l2.3-2.3a1 1 0 1 1 1.4 1.42L13.42 9l2.3 2.3a1 1 0 0 1-1.42 1.4L12 10.42l-2.3 2.3a1 1 0 0 1-1.4-1.42L10.58 9l-2.3-2.3a1 1 0 0 1 0-1.4Z",
                        clipRule: "evenodd",
                        className: r
                    }), (0, s.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M13 19.5c0 .28.22.5.5.5H15a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1.5a.5.5 0 0 0 .5-.5v-2c0-.28.22-.5.5-.5h1c.28 0 .5.22.5.5v2Z",
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
                    return E
                }
            });
            var s = n("872717"),
                i = n("295426"),
                a = n("819689"),
                l = n("529805"),
                r = n("42203"),
                u = n("474643"),
                c = n("377253"),
                o = n("659500"),
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
                }), g(t)
            }
            async function E(e) {
                let t = await s.default.patch({
                    url: d.Endpoints.UPDATE_GAMING_STATS(e.channel_id, e.id)
                });
                if (null != t.text && "" !== t.text) {
                    let n = r.default.getChannel(e.channel_id);
                    null != n && ((0, l.createPendingReply)({
                        channel: n,
                        message: e,
                        shouldMention: !1,
                        showMentionToggle: !1
                    }), g(n.id)), i.default.saveDraft(e.channel_id, t.text, u.DraftType.ChannelMessage)
                }
            }

            function g(e) {
                let t = c.default.getMessages(e);
                t.hasMoreAfter ? a.default.jumpToPresent(e, d.MAX_MESSAGES_PER_CHANNEL) : o.ComponentDispatch.dispatch(d.ComponentActions.SCROLLTO_PRESENT)
            }
        },
        172858: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                DUCK_CONFETTI_SPRITE: function() {
                    return a
                },
                COMMON_CONFETTI_COLORS: function() {
                    return l
                },
                COMMON_CONFETTI_SPRITES: function() {
                    return r
                },
                COMMON_CONFETTI_MAX_SPRITE_SIZE: function() {
                    return u
                },
                COMMON_CONFETTI_BASE_CONFIG: function() {
                    return c
                },
                COMMON_CONFETTI_ENVIRONMENT: function() {
                    return o
                }
            });
            var s = n("516555"),
                i = n("839491");
            let a = i,
                l = ["#FF73FA", "#FFC0FF", "#FFD836", "#FF9A15", "#A5F7DE", "#51BC9D", "#AEC7FF", "#3E70DD"],
                r = [n("606863"), a, n("164654"), n("540346"), n("526094"), n("367469"), n("23933"), {
                    src: n("283397"),
                    colorize: !1
                }],
                u = 28,
                c = {
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
                o = new s.Environment
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
                a = n("162771"),
                l = n("398604"),
                r = n("322224");
            let u = {},
                c = new Set,
                o = async e => {
                    let t = l.default.getGuildScheduledEventsForGuild(e);
                    if (0 !== t.length) {
                        if (!c.has(e)) try {
                            await r.default.getGuildEventsForCurrentUser(e), c.add(e)
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
                    return o(e)
                }
                handleConnectionOpen() {
                    c.clear(), u = {};
                    let e = (0, i.isInMainTabsExperiment)(),
                        t = a.default.getLastSelectedGuildId();
                    if (e && null != t) {
                        let e = l.default.getGuildScheduledEventsForGuild(t);
                        e.forEach(e => this.getGuildEventUserCounts(t, e.id, []))
                    }
                }
                handleGuildUnavailable(e) {
                    let {
                        guildId: t
                    } = e;
                    c.delete(t), delete u[t]
                }
                handleGuildDelete(e) {
                    let {
                        guild: t
                    } = e, n = t.id;
                    c.delete(n), delete u[n]
                }
                handleInviteResolveSuccess(e) {
                    var t;
                    let {
                        invite: n
                    } = e, s = n.guild_scheduled_event, i = null === (t = n.guild) || void 0 === t ? void 0 : t.id;
                    null != s && null != i && o(i)
                }
                handleChannelSelect(e) {
                    let {
                        guildId: t
                    } = e;
                    if (null == t) return;
                    let n = l.default.getGuildScheduledEventsForGuild(t);
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
                    return c
                }
            }), n("222007"), n("424973");
            var s = n("693566"),
                i = n.n(s),
                a = n("689988"),
                l = n("599110"),
                r = n("49111");
            class u extends a.default {
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
                    for (let e of this.batchBuffer) l.default.track(r.AnalyticEvents.ANNOUNCEMENT_MESSAGE_VIEWED, {
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
            var c = new u
        },
        427302: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("222007");
            var s = n("37983"),
                i = n("884691"),
                a = n("414456"),
                l = n.n(a),
                r = n("77078"),
                u = n("145079"),
                c = n("86621"),
                o = n("506885"),
                d = n("981601"),
                h = n("145131"),
                f = n("49111"),
                p = n("123106");
            class E extends i.Component {
                render() {
                    let {
                        popoutOpen: e
                    } = this.state, {
                        user: t,
                        analyticsContext: n,
                        disablePopout: i,
                        guildId: a
                    } = this.props, l = {
                        location: {
                            ...n.location,
                            object: f.AnalyticsObjects.LIST_ITEM
                        }
                    };
                    return (0, s.jsx)(r.Popout, {
                        preload: () => (0, o.default)(t.id, t.getAvatarURL(a, 80), {
                            guildId: a
                        }),
                        renderPopout: e => (0, s.jsx)(d.default, {
                            ...e,
                            guildId: a,
                            userId: t.id,
                            analyticsParams: l
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
                            user: a,
                            status: c,
                            textClassName: o,
                            nick: d,
                            guildId: f
                        } = this.props;
                        return (0, s.jsxs)(h.default, {
                            align: h.default.Align.CENTER,
                            className: l(p.memberListItem, t, {
                                [p.popoutDisabled]: n
                            }),
                            onContextMenu: i,
                            onMouseDown: e.onMouseDown,
                            onKeyDown: e.onKeyDown,
                            onClick: this.handleClickUser,
                            children: [(0, s.jsx)(r.Avatar, {
                                src: a.getAvatarURL(f, 24),
                                className: p.avatar,
                                "aria-label": a.username,
                                size: r.AvatarSizes.SIZE_24,
                                status: c
                            }), (0, s.jsx)(r.Text, {
                                className: l(p.memberListItemTag, o),
                                variant: "text-sm/normal",
                                children: (0, s.jsx)(u.default, {
                                    user: a,
                                    nick: d,
                                    usernameClass: p.username,
                                    hideDiscriminator: !0
                                })
                            })]
                        })
                    }
                }
            }
            E.defaultProps = {
                disablePopout: !1
            };
            var g = (0, c.default)(E)
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
                a = n("671306"),
                l = n("75196"),
                r = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: a,
                        ...r
                    } = e;
                    return (0, s.jsx)("svg", {
                        ...(0, l.default)(r),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, s.jsx)("path", {
                            className: a,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M4 2.5C2.897 2.5 2 3.397 2 4.5V15.5C2 16.604 2.897 17.5 4 17.5H11V19.5H7V21.5H17V19.5H13V17.5H20C21.103 17.5 22 16.604 22 15.5V4.5C22 3.397 21.103 2.5 20 2.5H4ZM14.5483 6L16 7.45174L13.4466 9.99485L16 12.5483L14.5483 14L12.0051 11.4466L9.45174 14L8 12.5483L10.5534 9.99485L8 7.45174L9.45174 6L12.0051 8.55341L14.5483 6Z",
                            fill: i
                        })
                    })
                }, a.ScreenXIcon, void 0, {
                    size: 24
                })
        }
    }
]);
//# sourceMappingURL=70941.610eda6b5366c83284d8.js.map