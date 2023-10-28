(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["62010"], {
        255397: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r
                }
            });
            var l = n("913144"),
                i = n("716241"),
                a = n("599110"),
                u = n("659500"),
                o = n("49111"),
                r = {
                    rebuildRTCActiveChannels() {
                        l.default.dispatch({
                            type: "CHANNEL_RTC_ACTIVE_CHANNELS"
                        })
                    },
                    selectParticipant(e, t) {
                        l.default.dispatch({
                            type: "CHANNEL_RTC_SELECT_PARTICIPANT",
                            channelId: e,
                            id: t
                        })
                    },
                    updateLayout(e, t) {
                        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.AppContext.APP;
                        a.default.track(o.AnalyticEvents.VIDEO_LAYOUT_TOGGLED, {
                            video_layout: t,
                            ...(0, i.collectVoiceAnalyticsMetadata)(e)
                        }), l.default.dispatch({
                            type: "CHANNEL_RTC_UPDATE_LAYOUT",
                            channelId: e,
                            layout: t,
                            appContext: n
                        })
                    },
                    toggleParticipants(e, t) {
                        l.default.dispatch({
                            type: "CHANNEL_RTC_UPDATE_PARTICIPANTS_OPEN",
                            channelId: e,
                            participantsOpen: t
                        })
                    },
                    toggleVoiceParticipantsHidden(e, t) {
                        l.default.dispatch({
                            type: "CHANNEL_RTC_UPDATE_VOICE_PARTICIPANTS_HIDDEN",
                            channelId: e,
                            voiceParticipantsHidden: t
                        })
                    },
                    updateStageStreamSize(e, t) {
                        l.default.dispatch({
                            type: "CHANNEL_RTC_UPDATE_STAGE_STREAM_SIZE",
                            channelId: e,
                            large: t
                        })
                    },
                    updateStageVideoLimitBoostUpsellDismissed(e, t) {
                        l.default.dispatch({
                            type: "CHANNEL_RTC_UPDATE_STAGE_VIDEO_LIMIT_BOOST_UPSELL_DISMISSED",
                            channelId: e,
                            dismissed: t
                        })
                    },
                    updateChatOpen(e, t) {
                        l.default.dispatch({
                            type: "CHANNEL_RTC_UPDATE_CHAT_OPEN",
                            channelId: e,
                            chatOpen: t
                        }), t ? setTimeout(() => {
                            u.ComponentDispatch.dispatch(o.ComponentActions.FOCUS_CHANNEL_TEXT_AREA, {
                                channelId: e
                            })
                        }, 0) : u.ComponentDispatch.dispatch(o.ComponentActions.FOCUS_CHAT_BUTTON)
                    }
                }
        },
        970728: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                transitionToGuildFromEventInvite: function() {
                    return ee
                },
                default: function() {
                    return et
                }
            });
            var l = n("597755"),
                i = n.n(l),
                a = n("759843"),
                u = n("742270"),
                o = n("815157"),
                r = n("391679"),
                d = n("872717"),
                c = n("913144"),
                s = n("599417"),
                f = n("333805"),
                E = n("644223"),
                p = n("523086"),
                _ = n("263901"),
                T = n("677315"),
                I = n("233322"),
                h = n("157186"),
                v = n("290886"),
                S = n("374021"),
                A = n("398604"),
                C = n("704341"),
                g = n("9294"),
                m = n("487946"),
                N = n("258158"),
                y = n("877275"),
                O = n("393414"),
                R = n("716214"),
                P = n("233069"),
                L = n("271938"),
                D = n("42203"),
                V = n("923959"),
                w = n("26989"),
                F = n("305961"),
                U = n("88093"),
                b = n("330154"),
                M = n("957255"),
                G = n("697218"),
                x = n("599110"),
                k = n("840707"),
                H = n("65300"),
                B = n("851387"),
                W = n("990766"),
                K = n("49111"),
                j = n("724210"),
                z = n("706530"),
                Y = n("91366"),
                q = n("837979");
            let X = "invite",
                Q = null;

            function J(e) {
                var t, n, l;
                let i = {};
                switch (e.target_type) {
                    case Y.InviteTargetTypes.STREAM:
                        i.targetType = e.target_type, i.targetUserId = null === (n = e.target_user) || void 0 === n ? void 0 : n.id;
                        break;
                    case Y.InviteTargetTypes.EMBEDDED_APPLICATION:
                        i.targetType = e.target_type, i.targetApplicationId = null === (l = e.target_application) || void 0 === l ? void 0 : l.id;
                        break;
                    case Y.InviteTargetTypes.ROLE_SUBSCRIPTIONS_PURCHASE:
                        i.targetType = e.target_type
                }
                let a = null != F.default.getGuild(null === (t = e.guild) || void 0 === t ? void 0 : t.id),
                    u = !a || e.new_member;
                return u && null != e.channel && (0, P.isGuildTextChannelType)(e.channel.type) && (i.welcomeModalChannelId = e.channel.id), null != e.guild_scheduled_event && (i.guildScheduledEvent = e.guild_scheduled_event), i
            }

            function Z(e) {
                let {
                    guildId: t,
                    channel: l,
                    options: i,
                    analyticsLocations: a = []
                } = e, {
                    type: u
                } = l, o = function(e, t, n) {
                    var l, i;
                    if ((null == n ? void 0 : n.targetType) === Y.InviteTargetTypes.ROLE_SUBSCRIPTIONS_PURCHASE) return j.StaticChannelRoute.ROLE_SUBSCRIPTIONS;
                    if ((null == n ? void 0 : n.targetType) == null && !P.GUILD_VOCAL_CHANNEL_TYPES.has(t.type) && ((0, T.canSeeGuildHome)(e) || (0, v.canSeeOnboardingHome)(e))) return j.StaticChannelRoute.GUILD_HOME;
                    let a = D.default.getChannel(t.id);
                    return M.default.can(K.Permissions.VIEW_CHANNEL, a) ? t.id : null !== (i = null === (l = V.default.getDefaultChannel(e)) || void 0 === l ? void 0 : l.id) && void 0 !== i ? i : t.id
                }(t, l, i), {
                    targetUserId: r,
                    targetType: d,
                    targetApplicationId: c
                } = null != i ? i : {}, s = u === K.ChannelTypes.GUILD_STAGE_VOICE, f = K.Routes.CHANNEL(t, o);
                P.GUILD_VOCAL_CHANNEL_TYPES.has(u) && (0, _.addPostConnectionCallback)(() => {
                    n.el("987317").then(n.bind(n, "987317")).then(e => {
                        let {
                            default: n
                        } = e, u = () => {
                            if (s) {
                                (0, R.connectAndOpen)(l instanceof P.ChannelRecordBase ? l : (0, P.createChannelRecord)(l)), (0, O.transitionTo)(f);
                                return
                            }
                            if (n.selectVoiceChannel(o), d === Y.InviteTargetTypes.STREAM && null != r && W.watchStreamAndTransitionToStream({
                                    streamType: z.StreamTypes.GUILD,
                                    ownerId: r,
                                    guildId: t,
                                    channelId: o
                                }), d === Y.InviteTargetTypes.EMBEDDED_APPLICATION && null != c)(0, O.transitionTo)(K.Routes.CHANNEL(null != t ? t : K.ME, o)), (0, E.default)(o, c, a, null == i ? void 0 : i.intent)
                        };
                        (0, h.shouldShowMembershipVerificationGate)(t, [F.default, U.default, G.default, w.default]) ? (0, I.openMemberVerificationModal)(t, u) : u()
                    })
                }), (function(e, t) {
                    let {
                        type: n
                    } = e, {
                        transitionTo: l,
                        welcomeModalChannelId: i,
                        guildScheduledEvent: a
                    } = null != t ? t : {}, u = n === K.ChannelTypes.GUILD_STAGE_VOICE, o = {
                        navigationReplace: !0
                    };
                    return null != i && (o.welcomeModalChannelId = i), u && (o.state = q.STAGE_INVITE_STATE_KEY), null != a && (o.guildScheduledEventId = a.id), e => null != l ? l(e, o, y.default.INVITE_ACCEPT) : (0, O.transitionTo)(e, o, y.default.INVITE_ACCEPT)
                })(l, i)(f)
            }
            let $ = function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                    D.default.addConditionalChangeListener(() => {
                        var l;
                        let i = D.default.getChannel(e),
                            a = G.default.getCurrentUser();
                        return null == i || null == a || (!i.nsfw || !!a.nsfwAllowed) && ((null == t ? void 0 : t.guildScheduledEvent) != null ? (! function(e) {
                            let {
                                guildScheduledEvent: t,
                                welcomeModalChannelId: n
                            } = e;
                            null != t && (0, _.addPostConnectionCallback)(() => {
                                let e = {
                                    guildScheduledEventId: t.id
                                };
                                null != n && (e.welcomeModalChannelId = n), (0, S.transitionToEventDetailsFromInvite)(t, e)
                            })
                        }(t), !1) : (Z({
                            guildId: null !== (l = i.getGuildId()) && void 0 !== l ? l : K.ME,
                            channel: i,
                            options: t,
                            analyticsLocations: n
                        }), !1))
                    })
                },
                ee = async e => {
                    let {
                        guild_id: t,
                        channel_id: n
                    } = e;
                    (0, A.isGuildScheduledEventActive)(e) && null != n ? $(n) : await B.default.transitionToGuildSync(t)
                };
            var et = {
                resolveInvite: function e(t, n, l) {
                    return c.default.isDispatching() ? Promise.resolve().then(() => e(t, n, l)) : (c.default.dispatch({
                        type: "INVITE_RESOLVE",
                        code: t
                    }), (0, m.default)(t, n, l).then(e => {
                        let {
                            invite: t,
                            code: n,
                            banned: l
                        } = e;
                        return null != t ? c.default.dispatch({
                            type: "INVITE_RESOLVE_SUCCESS",
                            invite: t,
                            code: n
                        }) : c.default.dispatch({
                            type: "INVITE_RESOLVE_FAILURE",
                            code: n,
                            banned: l
                        }), {
                            invite: t,
                            code: n
                        }
                    }))
                },
                getInviteContext: (e, t) => ({
                    location: e,
                    location_guild_id: null != t.guild ? t.guild.id : void 0,
                    location_channel_id: null != t.channel ? t.channel.id : void 0,
                    location_channel_type: null != t.channel ? t.channel.type : void 0
                }),
                async createInvite(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 ? arguments[2] : void 0;
                    try {
                        let {
                            body: l
                        } = await d.default.post({
                            url: K.Endpoints.INSTANT_INVITES(e),
                            body: t,
                            context: {
                                location: n
                            }
                        });
                        return c.default.dispatch({
                            type: "INSTANT_INVITE_CREATE_SUCCESS",
                            channelId: e,
                            invite: l
                        }), l
                    } catch (t) {
                        throw c.default.dispatch({
                            type: "INSTANT_INVITE_CREATE_FAILURE",
                            channelId: e
                        }), new s.default(t)
                    }
                },
                async mobileCreateInvite(e, t) {
                    let n = b.default.getInvite(e.id);
                    if (null != n && !n.isExpired()) return n.code;
                    let l = {
                            max_age: K.Durations.DAY
                        },
                        i = await this.createInvite(e.id, l, t).catch(() => c.default.dispatch({
                            type: "NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED"
                        }));
                    return null == i ? void 0 : i.code
                },
                async getAllFriendInvites(e) {
                    await new Promise(e => c.default.wait(() => e(null)));
                    let t = b.default.getFriendInvitesFetching();
                    if (t) return null != Q ? Q.then(e => e.body) : Promise.reject(Error("Invalid friend invite fetch request"));
                    Q = d.default.get({
                        url: K.Endpoints.FRIEND_INVITES,
                        context: {
                            location: e
                        }
                    }), c.default.dispatch({
                        type: "FRIEND_INVITES_FETCH_REQUEST",
                        requestedAt: new Date
                    });
                    let {
                        body: n
                    } = await Q;
                    return Q = null, c.default.dispatch({
                        type: "FRIEND_INVITES_FETCH_RESPONSE",
                        receivedAt: new Date,
                        invites: n
                    }), n
                },
                createFriendInvite: (e, t) => (c.default.dispatch({
                    type: "FRIEND_INVITE_CREATE_REQUEST"
                }), d.default.post({
                    url: K.Endpoints.FRIEND_INVITES,
                    body: null != e ? e : {},
                    context: {
                        location: t
                    }
                }).then(e => {
                    let {
                        body: t
                    } = e;
                    return c.default.dispatch({
                        type: "FRIEND_INVITE_CREATE_SUCCESS",
                        invite: t
                    }), t
                }, e => {
                    throw c.default.dispatch({
                        type: "FRIEND_INVITE_CREATE_FAILURE",
                        error: e
                    }), e
                })),
                revokeFriendInvites: () => (c.default.dispatch({
                    type: "FRIEND_INVITE_REVOKE_REQUEST"
                }), d.default.delete({
                    url: K.Endpoints.FRIEND_INVITES,
                    context: {
                        location
                    }
                }).then(e => {
                    let {
                        body: t
                    } = e;
                    c.default.dispatch({
                        type: "FRIEND_INVITE_REVOKE_SUCCESS",
                        invites: t
                    })
                })),
                revokeFriendInvite: e => d.default.delete({
                    url: K.Endpoints.INVITE(e)
                }),
                clearInviteFromStore(e) {
                    c.default.dispatch({
                        type: "INSTANT_INVITE_CLEAR",
                        channelId: e
                    })
                },
                revokeInvite(e) {
                    let {
                        code: t,
                        channel: n
                    } = e;
                    return k.default.delete({
                        url: K.Endpoints.INVITE(t),
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: a.NetworkActionNames.INVITE_REVOKE,
                            properties: {
                                uses: e.uses,
                                max_uses: e.maxUses,
                                max_age: e.maxAge,
                                invite_type: e.type
                            }
                        }
                    }).then(() => {
                        c.default.dispatch({
                            type: "INSTANT_INVITE_REVOKE_SUCCESS",
                            code: t,
                            channelId: n.id
                        })
                    })
                },
                acceptInvite(e) {
                    var t, l, i;
                    let {
                        inviteKey: a,
                        context: u,
                        callback: o,
                        skipOnboarding: r
                    } = e, s = (0, g.parseExtraDataFromInviteKey)(a), E = s.baseCode, p = L.default.getSessionId();
                    let _ = (l = u, i = s, {
                            ...l,
                            invite_guild_scheduled_event_id: i.guildScheduledEventId
                        }),
                        T = G.default.getCurrentUser();
                    return null !== (t = null == T ? void 0 : T.hasFlag(K.UserFlags.QUARANTINED)) && void 0 !== t && t ? ((0, N.default)(), new Promise((e, t) => t(Error()))) : (c.default.dispatch({
                        type: "INVITE_ACCEPT",
                        code: E
                    }), d.default.post({
                        url: K.Endpoints.INVITE(E),
                        context: _,
                        oldFormErrors: !0,
                        body: {
                            session_id: p
                        }
                    }).then(async e => {
                        var t, l;
                        c.default.dispatch({
                            type: "INVITE_ACCEPT_SUCCESS",
                            invite: e.body,
                            code: E
                        });
                        let i = A.default.getGuildScheduledEvent(s.guildScheduledEventId),
                            a = {
                                ...e.body,
                                guild_scheduled_event: i
                            },
                            u = null !== (l = null == a ? void 0 : a.guild_id) && void 0 !== l ? l : null == a ? void 0 : null === (t = a.guild) || void 0 === t ? void 0 : t.id;
                        if (!r && null != u && a.new_member) {
                            let {
                                default: e
                            } = await n.el("937692").then(n.bind(n, "937692"));
                            await e({
                                guildId: u
                            })
                        }
                        return null == o || o(a), e.body
                    }, e => {
                        var t, n;
                        throw c.default.dispatch({
                            type: "INVITE_ACCEPT_FAILURE",
                            code: E,
                            error: {
                                message: null === (t = e.body) || void 0 === t ? void 0 : t.message,
                                code: null === (n = e.body) || void 0 === n ? void 0 : n.code
                            }
                        }), new f.default(e)
                    }))
                },
                acceptInviteAndTransitionToInviteChannel(e) {
                    let {
                        inviteKey: t,
                        context: n,
                        analyticsLocations: l,
                        callback: i,
                        skipOnboarding: a
                    } = e;
                    return this.acceptInvite({
                        inviteKey: t,
                        context: n,
                        skipOnboarding: a,
                        callback: e => {
                            if (null != e.channel) {
                                let t = J(e);
                                $(e.channel.id, t, null != l ? l : [])
                            }
                            null != i && i(e)
                        }
                    })
                },
                transitionToInvite(e, t) {
                    var n, l, i;
                    let {
                        channel: a,
                        guild: u
                    } = e;
                    if (null != u && (null === (n = u.features) || void 0 === n ? void 0 : n.includes(K.GuildFeatures.HUB))) {
                        C.default.onOpenHubInvite(e);
                        return
                    }
                    if (null != u && (null === (l = u.features) || void 0 === l ? void 0 : l.includes(K.GuildFeatures.COMMUNITY)) && (null === (i = u.features) || void 0 === i ? void 0 : i.includes(K.GuildFeatures.MEMBER_VERIFICATION_GATE_ENABLED)) && !u.features.includes(K.GuildFeatures.PREVIEW_ENABLED)) {
                        (0, O.transitionTo)(K.Routes.GUILD_MEMBER_VERIFICATION(u.id, e.code));
                        return
                    }
                    if (null == a) return;
                    let o = J(e);
                    null != t && (o.transitionTo = t);
                    let r = null != u ? u.id : K.ME;
                    Z({
                        guildId: r,
                        channel: a,
                        options: o
                    })
                },
                transitionToInviteSync(e, t, n) {
                    if (null != e.channel) {
                        let l = J(e);
                        this.transitionToInviteChannelSync(e.channel.id, {
                            ...l,
                            intent: n,
                            transitionTo: t
                        })
                    }
                },
                openNativeAppModal(e) {
                    p.default.openNativeAppModal(e, K.RPCCommands.INVITE_BROWSER)
                },
                openApp(e, t, n, l, a) {
                    var d, s;
                    let f;
                    let E = null != e ? (0, g.parseExtraDataFromInviteKey)(e) : null,
                        p = null == E ? void 0 : E.baseCode;
                    if (c.default.dispatch({
                            type: "INVITE_APP_OPENING",
                            code: e
                        }), null != i.ua && i.ua.toLowerCase().indexOf("googlebot") > -1) {
                        c.default.dispatch({
                            type: "INVITE_APP_NOT_OPENED",
                            code: e
                        });
                        return
                    }
                    if ((null === (d = i.os) || void 0 === d ? void 0 : d.family) === "Android" || (null === (s = i.os) || void 0 === s ? void 0 : s.family) === "iOS") {
                        let e = null != p ? (0, u.getInviteDynamicLinkTemplate)(p) : (0, u.getDefaultDynamicLinkTemplate)(),
                            t = (0, o.generateAttemptId)();
                        f = (0, o.default)(e, {
                            utmSource: 2 === a ? "friend_invite" : X,
                            fingerprint: n,
                            username: l,
                            attemptId: t,
                            event: null == E ? void 0 : E.guildScheduledEventId,
                            iosFallbackLink: "https://discord.com/api/download/mobile?invite_code=".concat(p)
                        }), x.default.track(K.AnalyticEvents.DEEP_LINK_CLICKED, {
                            fingerprint: (0, r.maybeExtractId)(n),
                            attempt_id: t,
                            source: X,
                            invite_code: p
                        })
                    } else "#" === (f = null != t ? K.Routes.INVITE_PROXY(t) : "")[0] && (f = f.slice(1)), f = "discord://".concat(f);
                    H.default.launch(f, t => {
                        c.default.dispatch(t ? {
                            type: "INVITE_APP_OPENED",
                            code: e
                        } : {
                            type: "INVITE_APP_NOT_OPENED",
                            code: e
                        })
                    })
                },
                transitionToInviteChannelSync: $
            }
        },
        990766: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                startStream: function() {
                    return O
                },
                setStreamPaused: function() {
                    return R
                },
                watchStream: function() {
                    return L
                },
                toggleSelfStreamHidden: function() {
                    return D
                },
                watchStreamAndTransitionToStream: function() {
                    return V
                },
                stopStream: function() {
                    return w
                },
                closeStream: function() {
                    return F
                },
                fetchStreamPreview: function() {
                    return U
                },
                notifyStreamStart: function() {
                    return b
                },
                updateStreamSettings: function() {
                    return M
                },
                changeStreamRegion: function() {
                    return G
                },
                stopOwnStream: function() {
                    return x
                },
                createBroadcastChannelOrStartStream: function() {
                    return k
                },
                joinPrivateChannelAndWatchStream: function() {
                    return H
                }
            });
            var l = n("627445"),
                i = n.n(l),
                a = n("759843"),
                u = n("872717"),
                o = n("913144"),
                r = n("76393"),
                d = n("374014"),
                c = n("709463"),
                s = n("870346"),
                f = n("373469"),
                E = n("271938"),
                p = n("42203"),
                _ = n("305961"),
                T = n("18494"),
                I = n("800762"),
                h = n("404008"),
                v = n("12307"),
                S = n("840707"),
                A = n("561288"),
                C = n("450911"),
                g = n("255397"),
                m = n("987317"),
                N = n("49111"),
                y = n("706530");

            function O(e, t, n) {
                o.default.dispatch({
                    type: "STREAM_START",
                    streamType: null != e ? y.StreamTypes.GUILD : y.StreamTypes.CALL,
                    guildId: e,
                    channelId: t,
                    appContext: __OVERLAY__ ? N.AppContext.OVERLAY : N.AppContext.APP,
                    ...n
                })
            }

            function R(e, t) {
                let n = (0, d.encodeStreamKey)(e);
                o.default.dispatch({
                    type: "STREAM_SET_PAUSED",
                    streamKey: n,
                    paused: t
                })
            }

            function P(e, t) {
                let n = p.default.getChannel(t);
                i(null != n, "Cannot join a null voice channel");
                let l = I.default.isInChannel(t);
                return !l && (0, h.isChannelFull)(n, I.default, _.default)
            }

            function L(e, t) {
                let n = null != r.default.getRemoteSessionId();
                if (n) return;
                let {
                    guildId: l,
                    channelId: i
                } = e;
                if (null != l && P(l, i)) return;
                let a = (0, d.encodeStreamKey)(e),
                    u = (null == t ? void 0 : t.forceMultiple) || f.default.getAllActiveStreamsForChannel(i).filter(e => {
                        let {
                            ownerId: t
                        } = e;
                        return t !== E.default.getId()
                    }).length >= 2;
                o.default.dispatch({
                    type: "STREAM_WATCH",
                    streamKey: a,
                    allowMultiple: u
                }), !u && (null == t || !t.noFocus) && g.default.selectParticipant(e.channelId, a)
            }

            function D(e, t) {
                o.default.dispatch({
                    type: "STREAM_UPDATE_SELF_HIDDEN",
                    channelId: e,
                    selfStreamHidden: t
                })
            }

            function V(e, t) {
                let {
                    guildId: n,
                    channelId: l
                } = e;
                if (null != n && P(n, l)) return;
                L(e, t);
                let i = s.default.getWindowOpen(N.PopoutWindowKeys.CHANNEL_CALL_POPOUT),
                    a = T.default.getVoiceChannelId();
                (!i || a !== l) && (0, c.default)(e)
            }

            function w(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                F(e, t), o.default.dispatch({
                    type: "STREAM_STOP",
                    streamKey: e,
                    appContext: __OVERLAY__ ? N.AppContext.OVERLAY : N.AppContext.APP
                })
            }

            function F(e) {
                let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                o.default.dispatch({
                    type: "STREAM_CLOSE",
                    streamKey: e,
                    canShowFeedback: t
                })
            }
            async function U(e, t, n) {
                let l = (0, d.encodeStreamKey)({
                    streamType: null != e ? y.StreamTypes.GUILD : y.StreamTypes.CALL,
                    guildId: e,
                    channelId: t,
                    ownerId: n
                });
                o.default.dispatch({
                    type: "STREAM_PREVIEW_FETCH_START",
                    streamKey: l
                });
                try {
                    let e = await u.default.get({
                        url: N.Endpoints.STREAM_PREVIEW(l),
                        query: {
                            version: Date.now()
                        },
                        oldFormErrors: !0
                    });
                    o.default.dispatch({
                        type: "STREAM_PREVIEW_FETCH_SUCCESS",
                        streamKey: l,
                        previewURL: e.body.url
                    })
                } catch (t) {
                    let e;
                    429 === t.status && (e = 1e3 * t.body.retry_after), o.default.dispatch({
                        type: "STREAM_PREVIEW_FETCH_FAIL",
                        streamKey: l,
                        retryAfter: e
                    })
                }
            }
            async function b(e) {
                try {
                    await S.default.post({
                        url: N.Endpoints.STREAM_NOTIFY(e),
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: a.NetworkActionNames.STREAM_NOTIFY
                        }
                    })
                } catch (e) {}
            }

            function M(e) {
                (0, v.trackStreamSettingsUpdate)(e.preset, e.resolution, e.frameRate), o.default.dispatch({
                    type: "STREAM_UPDATE_SETTINGS",
                    ...e
                })
            }

            function G(e, t) {
                u.default.patch({
                    url: N.Endpoints.STREAM(e),
                    body: {
                        region: t
                    },
                    oldFormErrors: !0
                })
            }

            function x() {
                let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0],
                    t = f.default.getCurrentUserActiveStream();
                null != t && w((0, d.encodeStreamKey)(t), e)
            }

            function k(e) {
                let {
                    channelId: t,
                    pid: n,
                    sourceId: l,
                    sourceName: i
                } = e;
                (null != n || null != l || null != i) && (o.default.dispatch({
                    type: "START_BROADCAST_STREAM",
                    options: {
                        pid: n,
                        sourceId: l,
                        sourceName: i
                    }
                }), null == t ? C.default.createBroadcastPrivateChannel() : O(null, t, {
                    pid: n,
                    sourceId: l,
                    sourceName: i
                }))
            }

            function H(e, t) {
                let n = E.default.getId(),
                    l = (0, d.decodeStreamKey)(t),
                    i = T.default.getVoiceChannelId();
                null != i && i !== e && m.default.disconnect(), C.default.addRecipient(e, n, void 0, () => {
                    A.default.call(e, !1, !1, null, () => {
                        V(l)
                    })
                })
            }
        },
        644223: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("913144");

            function i(e, t, n, i) {
                l.default.dispatch({
                    type: "EMBEDDED_ACTIVITY_DEFERRED_OPEN",
                    channelId: e,
                    applicationId: t,
                    intent: i,
                    analyticsLocations: n
                })
            }
        },
        792367: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                shouldShowVoiceChannelChangeConfirmation: function() {
                    return r
                }
            });
            var l = n("76393"),
                i = n("168973"),
                a = n("271938"),
                u = n("305961"),
                o = n("800762");

            function r(e) {
                let t = i.default.disableVoiceChannelChangeAlert;
                if (t) return !1;
                let n = l.default.getRemoteSessionId(),
                    r = o.default.getVoiceStateForSession(a.default.getId(), n);
                if (null != r || !o.default.isCurrentClientInVoiceChannel() || o.default.isInChannel(e.id)) return !1;
                let d = u.default.getGuild(e.getGuildId());
                return !((null == d ? void 0 : d.afkChannelId) != null && o.default.isInChannel(d.afkChannelId)) && !0
            }
        },
        523086: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("913144"),
                i = n("492397"),
                a = {
                    openNativeAppModal(e, t) {
                        !i.CONFERENCE_MODE_ENABLED && (l.default.dispatch({
                            type: "NATIVE_APP_MODAL_OPENING",
                            code: e
                        }), n.el("43982").then(n.bind(n, "43982")).then(n => {
                            let {
                                default: l
                            } = n;
                            l.request(t, {
                                code: e
                            }).then(e => {
                                let {
                                    code: t
                                } = e;
                                return this.nativeModalOpened(t)
                            }).catch(() => this.nativeModalOpenFailed(e)).then(() => l.disconnect())
                        }))
                    },
                    nativeModalOpened(e) {
                        l.default.dispatch({
                            type: "NATIVE_APP_MODAL_OPENED",
                            code: e
                        })
                    },
                    nativeModalOpenFailed(e) {
                        l.default.dispatch({
                            type: "NATIVE_APP_MODAL_OPEN_FAILED",
                            code: e
                        })
                    }
                }
        },
        565298: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return o
                },
                getGuildIdForGenericRedirect: function() {
                    return r
                }
            });
            var l = n("446674"),
                i = n("162771"),
                a = n("379881"),
                u = n("49111");

            function o(e) {
                let t = (0, l.useStateFromStores)([i.default], () => i.default.getGuildId());
                return null != t ? t : e.getGuildId()
            }

            function r(e) {
                return i.default.getGuildId() !== u.FAVORITES ? e.getGuildId() : a.default.isFavorite(e.id) || e.isThread() && a.default.isFavorite(e.parent_id) ? u.FAVORITES : e.getGuildId()
            }
        },
        263901: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                addPostConnectionCallback: function() {
                    return o
                }
            });
            var l = n("913144"),
                i = n("619443");
            let a = [];

            function u(e) {
                setImmediate(() => e())
            }

            function o(e) {
                i.default.isConnectedOrOverlay() ? u(e) : a.push(e)
            }
            l.default.subscribe("CONNECTION_OPEN", () => {
                a.forEach(e => u(e)), a = []
            })
        },
        709463: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("144491");

            function i(e) {
                (0, l.transitionToChannel)(e.channelId)
            }
        },
        374021: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openGuildEventDetails: function() {
                    return r
                },
                transitionToEventDetailsFromInvite: function() {
                    return d
                },
                openEndEventModal: function() {
                    return c
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("551042"),
                a = n("851387"),
                u = n("49111"),
                o = n("625611");

            function r(e) {
                let {
                    eventId: t,
                    parentGuildId: a,
                    recurrenceId: u
                } = e;
                (0, i.openModalLazy)(async () => {
                    let {
                        default: e
                    } = await n.el("833843").then(n.bind(n, "833843"));
                    return n => (0, l.jsx)(e, {
                        guildScheduledEventId: t,
                        parentGuildId: a,
                        recurrenceId: u,
                        ...n
                    })
                })
            }
            async function d(e, t) {
                let {
                    guild_id: n
                } = e;
                await a.default.transitionToGuildSync(n, t), r({
                    eventId: e.id,
                    event: e
                })
            }

            function c(e, t) {
                (0, i.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("203811").then(n.bind(n, "203811"));
                    return n => (0, l.jsx)(t, {
                        ...n,
                        channel: e
                    })
                }, {
                    contextKey: t === u.AppContext.POPOUT ? o.POPOUT_MODAL_CONTEXT : o.DEFAULT_MODAL_CONTEXT
                })
            }
        },
        704341: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("393414"),
                i = n("49111"),
                a = {
                    onOpenHubInvite(e) {
                        let {
                            guild: t
                        } = e;
                        null != t && (0, l.transitionTo)(i.Routes.GUILD_MEMBER_VERIFICATION_FOR_HUB(t.id, e.code))
                    }
                }
        },
        487946: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            });
            var l = n("759843"),
                i = n("627929"),
                a = n("233069"),
                u = n("271938"),
                o = n("599110"),
                r = n("840707"),
                d = n("9294"),
                c = n("91366"),
                s = n("49111");

            function f(e) {
                let t = null;
                if (null != e && null != e.channel) {
                    let n = e.channel;
                    t = e.target_type === c.InviteTargetTypes.STREAM ? s.LoggingInviteTypes.STREAM : e.target_type === c.InviteTargetTypes.EMBEDDED_APPLICATION ? s.LoggingInviteTypes.APPLICATION : (0, a.isMultiUserDM)(n.type) ? s.LoggingInviteTypes.GDM_INVITE : null == n || (0, a.isPrivate)(n.type) ? s.LoggingInviteTypes.FRIEND_INVITE : s.LoggingInviteTypes.SERVER_INVITE
                }
                return t
            }

            function E(e, t, n) {
                o.default.track(s.AnalyticEvents.INVITE_OPENED, {
                    invite_code: e
                });
                let a = (0, d.parseExtraDataFromInviteKey)(e),
                    c = {
                        ...n,
                        with_counts: !0,
                        with_expiration: !0,
                        guild_scheduled_event_id: a.guildScheduledEventId
                    };
                return r.default.get({
                    url: s.Endpoints.INVITE(a.baseCode),
                    query: c,
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: l.NetworkActionNames.INVITE_RESOLVE,
                        properties: e => {
                            var l, o, r, d, c, E;
                            let p = e.body,
                                _ = (null === (l = e.body) || void 0 === l ? void 0 : l.code) === s.AbortCodes.USER_BANNED;
                            return (0, i.exact)({
                                resolved: e.ok,
                                guild_id: null == p ? void 0 : null === (o = p.guild) || void 0 === o ? void 0 : o.id,
                                channel_id: null == p ? void 0 : null === (r = p.channel) || void 0 === r ? void 0 : r.id,
                                channel_type: null == p ? void 0 : null === (d = p.channel) || void 0 === d ? void 0 : d.type,
                                inviter_id: null == p ? void 0 : null === (c = p.inviter) || void 0 === c ? void 0 : c.id,
                                code: a.baseCode,
                                input_value: null == n ? void 0 : n.inputValue,
                                location: t,
                                authenticated: u.default.isAuthenticated(),
                                size_total: null == p ? void 0 : p.approximate_member_count,
                                size_online: null == p ? void 0 : p.approximate_presence_count,
                                destination_user_id: null == p ? void 0 : null === (E = p.target_user) || void 0 === E ? void 0 : E.id,
                                invite_type: f(p),
                                user_banned: _
                            })
                        }
                    }
                }).then(l => {
                    let i = l.body;
                    if (null != t) o.default.track(s.AnalyticEvents.INVITE_RESOLVED, {
                        resolved: !0,
                        guild_id: null != i.guild ? i.guild.id : null,
                        channel_id: null != i.channel ? i.channel.id : null,
                        channel_type: null != i.channel ? i.channel.type : null,
                        inviter_id: i.inviter ? i.inviter.id : null,
                        code: a.baseCode,
                        input_value: null == n ? void 0 : n.inputValue,
                        location: t,
                        authenticated: u.default.isAuthenticated(),
                        size_total: i.approximate_member_count,
                        size_online: i.approximate_presence_count,
                        destination_user_id: null != i.target_user ? i.target_user.id : null,
                        invite_type: f(i)
                    }, {
                        flush: !0
                    });
                    return {
                        invite: i,
                        code: e
                    }
                }, l => {
                    let i = null != l.body && l.body.code === s.AbortCodes.USER_BANNED;
                    if (null != t) {
                        var r, d;
                        o.default.track(s.AnalyticEvents.INVITE_RESOLVED, {
                            resolved: !1,
                            code: a.baseCode,
                            input_value: null == n ? void 0 : n.inputValue,
                            location: t,
                            authenticated: u.default.isAuthenticated(),
                            user_banned: i,
                            error_code: null === (r = l.body) || void 0 === r ? void 0 : r.code,
                            error_message: null === (d = l.body) || void 0 === d ? void 0 : d.message
                        }, {
                            flush: !0
                        })
                    }
                    return {
                        invite: null,
                        code: e,
                        banned: i
                    }
                })
            }
        },
        870346: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return P
                }
            });
            var l = n("627445"),
                i = n.n(l),
                a = n("917351"),
                u = n.n(a),
                o = n("288661"),
                r = n("446674"),
                d = n("913144"),
                c = n("605250"),
                s = n("773336"),
                f = n("50885"),
                E = n("563680"),
                p = n("49111");
            let _ = {},
                T = {},
                I = {},
                h = {},
                v = {},
                S = new Set,
                A = () => R.emitChange(),
                C = u.debounce(A, 150);

            function g(e) {
                let t = I[e];
                null != t && !t.closed && (_[e] = {
                    x: t.screenX,
                    y: t.screenY,
                    width: t.innerWidth,
                    height: t.innerHeight,
                    alwaysOnTop: !!s.isPlatformEmbedded && T[e]
                })
            }

            function m(e) {
                let t = I[e];
                null != t && (!t.closed && g(e), t.close(), ! function(e) {
                    let t = I[e];
                    i(null != t, "Popout window was null during unmount"), t.removeEventListener("focus", A), t.removeEventListener("blur", A), t.removeEventListener("resize", C);
                    let n = h[e];
                    i(null != n, "Window root was null while unmounting"), n.unmount(), delete I[e], delete T[e], delete v[e], delete h[e]
                }(e), R.emitChange())
            }

            function N(e) {
                let {
                    data: t
                } = e;
                if (!(t instanceof Object && t.discordPopoutEvent instanceof Object)) return;
                let n = t.discordPopoutEvent;
                if (null != n.key) switch (n.type) {
                    case p.PopoutEventTypes.LOADED:
                        var l;
                        return l = n.key, void(S.has(l) && (! function(e) {
                            let t = I[e],
                                n = v[e];
                            if (null == t) {
                                new(0, c.default)("PopoutWindowStore").warn("Failed to open window", e);
                                return
                            }
                            let l = t.document;
                            (0, E.subscribeDocumentToFullScreenChange)(l, A), t.addEventListener("focus", A), t.addEventListener("blur", A), t.addEventListener("resize", C), ! function(e, t) {
                                let n = t.document,
                                    l = document.querySelectorAll('link[rel="stylesheet"]'),
                                    a = "".concat(window.location.protocol, "//").concat(window.location.host);
                                for (let e of l) {
                                    if (!e.href.startsWith(a)) continue;
                                    let t = n.createElement("link");
                                    t.href = e.href, t.rel = e.rel, t.integrity = e.integrity, i(null != n.head, "Document head was null"), n.head.appendChild(t)
                                }
                            }(0, t);
                            let a = (0, o.createRoot)(l.getElementById("app-mount"));
                            i(null != a, "No render target for popout!"), h[e] = a, a.render(n(e))
                        }(l), S.delete(l), R.emitChange()));
                    case p.PopoutEventTypes.UNLOADED:
                        return m(n.key)
                }
            }

            function y() {
                for (let e of Object.keys(I)) {
                    let t = I[e];
                    null != t && t.close()
                }
            }
            class O extends r.default.PersistedStore {
                initialize(e) {
                    window.addEventListener("message", N), window.addEventListener("beforeunload", y), _ = null != e ? e : {}
                }
                getWindow(e) {
                    return I[e]
                }
                getWindowState(e) {
                    return _[e]
                }
                getWindowKeys() {
                    return Object.keys(I)
                }
                getWindowOpen(e) {
                    let t = I[e];
                    return null != t && !t.closed
                }
                getIsAlwaysOnTop(e) {
                    return !!T[e]
                }
                getWindowFocused(e) {
                    var t, n;
                    let l = I[e];
                    return null !== (n = null == l ? void 0 : null === (t = l.document) || void 0 === t ? void 0 : t.hasFocus()) && void 0 !== n && n
                }
                getState() {
                    return _
                }
                unmountWindow(e) {
                    return m(e)
                }
            }
            O.displayName = "PopoutWindowStore", O.persistKey = "PopoutWindowStore";
            let R = new O(d.default, {
                POPOUT_WINDOW_OPEN: function(e) {
                    let {
                        key: t,
                        features: n,
                        render: l
                    } = e;
                    if (s.isPlatformEmbedded && !f.default.supportsFeature(p.NativeFeatures.POPOUT_WINDOWS)) throw Error("Popout windows not supported on this native module version!");
                    let i = I[t];
                    if (null != i && !i.closed) return s.isPlatformEmbedded ? f.default.focus(t) : i.focus(), !1;
                    let {
                        defaultWidth: a,
                        defaultHeight: u,
                        defaultAlwaysOnTop: o = !1,
                        ...r
                    } = n, d = r, c = o, E = _[t];
                    if (null != E) {
                        let {
                            width: e,
                            height: t,
                            x: n,
                            y: l,
                            alwaysOnTop: i
                        } = E;
                        c = null != i ? i : o, d = {
                            width: null != e && 0 !== e ? e : a,
                            height: null != t && 0 !== t ? t : u,
                            left: n,
                            top: l,
                            ...d
                        }
                    }
                    let h = window.open(p.Routes.POPOUT_WINDOW, t, function(e) {
                        let t = "";
                        for (let n of Object.keys(e)) {
                            let l = e[n];
                            void 0 !== l && ("boolean" == typeof l && (l = l ? "yes" : "no"), t += "".concat(n, "=").concat(l, ","))
                        }
                        return t
                    }(d));
                    h.windowKey = t, null == h || h.focus(), I[t] = h, v[t] = l, s.isPlatformEmbedded && (f.default.setAlwaysOnTop(t, c), T[t] = c, f.default.isAlwaysOnTop(t).then(e => T[t] = e)), S.add(t)
                },
                POPOUT_WINDOW_CLOSE: function(e) {
                    let {
                        key: t
                    } = e, n = I[t];
                    null != n && !n.closed && (g(t), n.close())
                },
                POPOUT_WINDOW_SET_ALWAYS_ON_TOP: function(e) {
                    let {
                        key: t,
                        alwaysOnTop: n
                    } = e;
                    s.isPlatformEmbedded && (f.default.setAlwaysOnTop(t, n), T[t] = n, f.default.isAlwaysOnTop(t).then(e => T[t] = e))
                },
                LOGOUT: y
            });
            var P = R
        },
        144491: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                transitionToChannel: function() {
                    return c
                },
                transitionToThread: function() {
                    return s
                },
                transitionToThreadMessage: function() {
                    return f
                },
                transitionToMessage: function() {
                    return E
                }
            });
            var l = n("627445"),
                i = n.n(l),
                a = n("450911"),
                u = n("565298"),
                o = n("42203"),
                r = n("393414"),
                d = n("49111");

            function c(e, t, n) {
                let l = o.default.getChannel(e);
                if (null == l) return;
                let i = (0, u.getGuildIdForGenericRedirect)(l);
                a.default.preload(l.guild_id, l.id), (0, r.transitionTo)(d.Routes.CHANNEL(i, l.id), t, n)
            }

            function s(e, t) {
                i(null != e.parent_id, "Thread must have a parent ID.");
                let n = (0, u.getGuildIdForGenericRedirect)(e);
                (0, r.transitionTo)(d.Routes.CHANNEL(n, e.id), void 0, t)
            }

            function f(e, t, n) {
                i(null != e.parent_id, "Thread must have a parent ID.");
                let l = (0, u.getGuildIdForGenericRedirect)(e);
                (0, r.transitionTo)(d.Routes.CHANNEL(l, e.id, t), void 0, n)
            }

            function E(e, t, n, l) {
                let i = o.default.getChannel(e);
                if (null == i) return;
                let a = (0, u.getGuildIdForGenericRedirect)(i);
                (0, r.transitionTo)(d.Routes.CHANNEL(a, i.id, t), n, l)
            }
        },
        751661: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openStageChannelSettings: function() {
                    return E
                },
                openEndGuildEventConfirmationModal: function() {
                    return p
                },
                openStageChannelAudienceNoticeModal: function() {
                    return _
                },
                openStageBlockedUsersSheet: function() {
                    return T
                },
                openEndStageModal: function() {
                    return I
                },
                shouldShowBlockedUsers: function() {
                    return h
                },
                navigateToStage: function() {
                    return v
                },
                showChannelChangeConfirmationAlert: function() {
                    return S
                }
            });
            var l = n("37983");
            n("884691");
            var i = n("551042"),
                a = n("144491"),
                u = n("271938"),
                o = n("325861"),
                r = n("834052"),
                d = n("534471"),
                c = n("151642"),
                s = n("49111"),
                f = n("625611");

            function E(e, t) {
                (0, i.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("435768").then(n.bind(n, "435768"));
                    return n => (0, l.jsx)(t, {
                        ...n,
                        channel: e
                    })
                }, {
                    contextKey: t === s.AppContext.POPOUT ? f.POPOUT_MODAL_CONTEXT : f.DEFAULT_MODAL_CONTEXT
                })
            }

            function p(e, t) {
                (0, i.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("312953").then(n.bind(n, "312953"));
                    return n => (0, l.jsx)(t, {
                        ...n,
                        channel: e
                    })
                }, {
                    contextKey: t === s.AppContext.POPOUT ? f.POPOUT_MODAL_CONTEXT : f.DEFAULT_MODAL_CONTEXT
                })
            }

            function _(e) {}

            function T(e, t) {
                (0, i.openModalLazy)(async () => {
                    let {
                        default: i
                    } = await n.el("203966").then(n.bind(n, "203966"));
                    return n => (0, l.jsx)(i, {
                        ...n,
                        channel: e,
                        onAccept: t
                    })
                })
            }

            function I(e, t) {
                (0, i.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await n.el("281645").then(n.bind(n, "281645"));
                    return n => (0, l.jsx)(t, {
                        ...n,
                        channel: e
                    })
                }, {
                    contextKey: t === s.AppContext.POPOUT ? f.POPOUT_MODAL_CONTEXT : f.DEFAULT_MODAL_CONTEXT
                })
            }

            function h(e) {
                let t = u.default.getId(),
                    n = (0, c.getStageBlockedUsersCount)(e),
                    l = o.default.isModerator(t, e);
                return !l && n > 0
            }

            function v(e, t) {
                var c;
                let s = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                t !== e.id && (0, d.setIsOnStartStageScreen)(!0), c = e, (0, a.transitionToChannel)(c.id), t !== e.id && s && ! function(e) {
                    let t = u.default.getId(),
                        a = o.default.isModerator(t, e.id),
                        d = r.default.isLive(e.id);
                    a && !d ? E(e) : a && d && function(e) {
                        (0, i.openModalLazy)(async () => {
                            let {
                                default: t
                            } = await n.el("337649").then(n.bind(n, "337649"));
                            return n => (0, l.jsx)(t, {
                                ...n,
                                channel: e
                            })
                        })
                    }(e)
                }(e)
            }

            function S(e, t) {
                return (0, i.openModalLazy)(async () => {
                    let {
                        default: i
                    } = await n.el("371895").then(n.bind(n, "371895"));
                    return n => (0, l.jsx)(i, {
                        channel: e,
                        onConfirm: t,
                        ...n
                    })
                }), !0
            }
        },
        569182: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                openStageChannelAudienceNoticeModal: function() {
                    return i
                }
            });
            var l = n("751661");

            function i(e) {
                l.openStageChannelAudienceNoticeModal(e)
            }
        },
        716214: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                connectOrLurkStage: function() {
                    return I
                },
                connectToStage: function() {
                    return h
                },
                connectAndOpen: function() {
                    return v
                },
                navigateToStage: function() {
                    return S
                }
            });
            var l = n("851387"),
                i = n("987317"),
                a = n("990766"),
                u = n("792367"),
                o = n("248967"),
                r = n("373469"),
                d = n("42203"),
                c = n("305961"),
                s = n("957255"),
                f = n("18494"),
                E = n("751661"),
                p = n("27822"),
                _ = n("923510"),
                T = n("30577");

            function I(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return new Promise(async i => {
                    let a = d.default.getChannel(t);
                    if (null != a) return h(a, n), i(a);
                    await (0, o.stopLurkingAll)([e]), await l.default.joinGuild(e, {
                        lurker: !0
                    }), c.default.addConditionalChangeListener(() => {
                        let e = d.default.getChannel(t);
                        return null == e || (h(e), T.default.initialize(), i(e), !1)
                    })
                })
            }

            function h(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = f.default.getVoiceChannelId();
                if (!t && ! function(e, t) {
                        let n = s.default.can(_.JOIN_VOCAL_CHANNEL_PERMISSIONS, e);
                        return !!n && (!E.shouldShowBlockedUsers(e.id) || t === e.id || (E.openStageBlockedUsersSheet(e, () => v(e, !0)), !1))
                    }(e, n)) return !1;
                if (p.default.initialize(), i.default.selectVoiceChannel(e.id), (n = f.default.getVoiceChannelId()) !== e.id) return !1;
                let l = r.default.getAllApplicationStreamsForChannel(e.id);
                return l.length > 0 && (0, a.watchStream)(l[0], {
                    noFocus: !1
                }), !0
            }

            function v(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    l = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    i = f.default.getVoiceChannelId();
                if (!l && i !== e.id && (0, u.shouldShowVoiceChannelChangeConfirmation)(e) && E.showChannelChangeConfirmationAlert(e, () => v(e, t, n, !0))) return;
                let a = h(e, t);
                a && S(e, i, n)
            }

            function S(e, t) {
                let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                E.navigateToStage(e, t, n)
            }
        },
        27822: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return f
                }
            });
            var l = n("95410"),
                i = n("913144"),
                a = n("316272"),
                u = n("271938"),
                o = n("18494"),
                r = n("569182"),
                d = n("325861"),
                c = n("837979");
            class s extends a.default {
                _initialize() {
                    i.default.subscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
                }
                _terminate() {
                    i.default.unsubscribe("VOICE_STATE_UPDATES", this.handleVoiceStateUpdates)
                }
                constructor(...e) {
                    super(...e), this.handleVoiceStateUpdates = e => {
                        let {
                            voiceStates: t
                        } = e;
                        t.forEach(e => {
                            if (null == e.channelId || e.userId !== u.default.getId()) return;
                            if (this.terminate(), l.default.get(c.STAGE_AUDIENCE_NOTICE_SHOWN_STORAGE_KEY, !1)) return;
                            let t = o.default.getVoiceChannelId();
                            if (null != t) e.channelId === t && d.default.isAudienceMember(e.userId, t) && (l.default.set(c.STAGE_AUDIENCE_NOTICE_SHOWN_STORAGE_KEY, !0), r.openStageChannelAudienceNoticeModal(t))
                        })
                    }
                }
            }
            var f = new s
        },
        30577: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("913144"),
                i = n("316272"),
                a = n("248967"),
                u = n("42203"),
                o = n("162771"),
                r = n("449008");
            class d extends i.default {
                _initialize() {
                    l.default.subscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), l.default.subscribe("LOGOUT", this.handleLogout)
                }
                _terminate() {
                    l.default.unsubscribe("VOICE_CHANNEL_SELECT", this.handleVoiceChannelSelect), l.default.unsubscribe("LOGOUT", this.handleLogout)
                }
                constructor(...e) {
                    super(...e), this.handleVoiceChannelSelect = e => {
                        let {
                            channelId: t,
                            guildId: n
                        } = e;
                        if (null != t) {
                            let e = u.default.getChannel(t),
                                n = null == e || e.isGuildStageVoice();
                            if (n) return
                        }
                        this.terminate();
                        let l = null == t ? null : null != n ? n : null;
                        this.handleDisconnectFromStageChannel(l)
                    }, this.handleDisconnectFromStageChannel = e => {
                        let t = o.default.getGuildId();
                        (0, a.stopLurkingAll)([t, e].filter(r.isNotNullish))
                    }, this.handleLogout = () => {
                        this.terminate(), this.handleDisconnectFromStageChannel(null)
                    }
                }
            }
            var c = new d
        },
        534471: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return s
                },
                setIsOnStartStageScreen: function() {
                    return f
                },
                useUpdateIsOnStartStageScreenEffect: function() {
                    return E
                }
            });
            var l = n("884691"),
                i = n("308503"),
                a = n("446674"),
                u = n("957255"),
                o = n("18494"),
                r = n("923510"),
                d = n("58763");
            let c = (0, i.default)(e => ({
                isOnStartStageScreen: !0
            }));
            var s = c;

            function f(e) {
                c.setState({
                    isOnStartStageScreen: e
                })
            }

            function E(e) {
                let t = (0, a.useStateFromStores)([o.default], () => o.default.getVoiceChannelId() === e.id),
                    n = (0, a.useStateFromStores)([u.default], () => u.default.can(r.MODERATE_STAGE_CHANNEL_PERMISSIONS, e), [e]),
                    i = (0, d.default)(e.id),
                    c = n && !i;
                l.useEffect(() => {
                    t ? !c && f(!1) : f(c)
                }, [t, c])
            }
        },
        151642: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                useStageBlockedUsersCount: function() {
                    return u
                },
                getStageBlockedUsersCount: function() {
                    return o
                },
                useStageBlockedUsers: function() {
                    return r
                }
            });
            var l = n("446674"),
                i = n("488464"),
                a = n("998716");

            function u(e) {
                return (0, l.useStateFromStores)([i.default], () => null != e ? i.default.getParticipantCount(e, a.StageChannelParticipantNamedIndex.BLOCKED) : 0, [e])
            }

            function o(e) {
                var t;
                return null !== (t = i.default.getParticipantCount(e, a.StageChannelParticipantNamedIndex.BLOCKED)) && void 0 !== t ? t : 0
            }

            function r(e) {
                return (0, l.useStateFromStores)([i.default], () => i.default.getMutableParticipants(e, a.StageChannelParticipantNamedIndex.BLOCKED), [e])
            }
        },
        58763: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var l = n("446674"),
                i = n("834052");

            function a(e) {
                return (0, l.useStateFromStores)([i.default], () => i.default.isLive(e), [e])
            }
        },
        330154: function(e, t, n) {
            "use strict";
            let l;
            n.r(t), n.d(t, {
                default: function() {
                    return C
                }
            });
            var i = n("671725"),
                a = n.n(i),
                u = n("533865"),
                o = n.n(u),
                r = n("953406"),
                d = n.n(r),
                c = n("446674"),
                s = n("913144"),
                f = n("517763"),
                E = n("91366");
            let p = {},
                _ = {},
                T = {},
                I = {},
                h = !1,
                v = !1,
                S = !1;
            class A extends c.default.Store {
                getInvite(e) {
                    var t, n;
                    let {
                        targetType: l,
                        targetUserId: i,
                        targetApplicationId: a
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return l === E.InviteTargetTypes.STREAM && null != i ? null === (t = _[e]) || void 0 === t ? void 0 : t[i] : l === E.InviteTargetTypes.EMBEDDED_APPLICATION && null != a ? null === (n = T[e]) || void 0 === n ? void 0 : n[a] : p[e]
                }
                getFriendInvite() {
                    return l
                }
                getFriendInvitesFetching() {
                    return h
                }
                canRevokeFriendInvite() {
                    return null != l && !v && !S
                }
            }
            A.displayName = "InstantInviteStore";
            var C = new A(s.default, {
                CONNECTION_OPEN: function() {
                    p = {}, _ = {}, T = {}, I = {}, l = null, v = !1, S = !1, h = !1
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    delete p[t.id], delete _[t.id], delete T[t.id]
                },
                FRIEND_INVITE_CREATE_SUCCESS: function(e) {
                    var t;
                    I[e.invite.code] = f.default.createFromServer(e.invite), l = null !== (t = a(o(d(Object.values(I), "createdAt")))) && void 0 !== t ? t : null, S = !1
                },
                FRIEND_INVITE_CREATE_FAILURE: function() {
                    S = !1
                },
                FRIEND_INVITE_REVOKE_SUCCESS: function(e) {
                    var t;
                    null != e.invites && e.invites.forEach(e => {
                        null != I[e.code] && delete I[e.code]
                    }), l = null !== (t = a(o(d(Object.values(I), "createdAt")))) && void 0 !== t ? t : null, v = !1
                },
                INSTANT_INVITE_CREATE_SUCCESS: function(e) {
                    let {
                        channelId: t,
                        invite: n
                    } = e, l = f.default.createFromServer(n);
                    l.targetType === E.InviteTargetTypes.STREAM && null != l.targetUser ? (null == _[t] && (_[t] = {}), _[t][String(l.targetUser.id)] = l) : l.targetType === E.InviteTargetTypes.EMBEDDED_APPLICATION && null != l.targetApplication ? (null == T[t] && (T[t] = {}), T[t][l.targetApplication.id] = l) : p[t] = l
                },
                INSTANT_INVITE_CREATE_FAILURE: function(e) {
                    let {
                        channelId: t
                    } = e;
                    p[t] = null
                },
                INSTANT_INVITE_REVOKE_SUCCESS: function(e) {
                    let {
                        channelId: t
                    } = e;
                    p[t] = null
                },
                FRIEND_INVITE_REVOKE_REQUEST: function() {
                    v = !0
                },
                FRIEND_INVITE_CREATE_REQUEST: function() {
                    S = !0
                },
                FRIEND_INVITES_FETCH_REQUEST: function() {
                    h = !0
                },
                FRIEND_INVITES_FETCH_RESPONSE: function(e) {
                    var t;
                    I = {}, e.invites.forEach(e => {
                        I[e.code] = f.default.createFromServer(e)
                    }), l = null !== (t = a(o(d(Object.values(I), "createdAt")))) && void 0 !== t ? t : null, h = !1
                },
                INSTANT_INVITE_CLEAR: function(e) {
                    delete p[e.channelId]
                }
            })
        },
        12307: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isPremiumResolution: function() {
                    return f
                },
                isPremiumFPS: function() {
                    return E
                },
                getResolutionText: function() {
                    return _
                },
                getFPSText: function() {
                    return T
                },
                getMaxQuality: function() {
                    return I
                },
                trackStreamSettingsUpdate: function() {
                    return h
                }
            });
            var l = n("305961"),
                i = n("945956"),
                a = n("697218"),
                u = n("599110"),
                o = n("49111"),
                r = n("686298"),
                d = n("646718"),
                c = n("353927"),
                s = n("782340");

            function f(e) {
                if (null == e) return;
                let t = e.maxResolution.type === c.ResolutionTypes.SOURCE ? r.ApplicationStreamResolutions.RESOLUTION_SOURCE : e.maxResolution.height,
                    n = (0, r.getApplicationResolution)(t),
                    l = (0, r.getApplicationFramerate)(e.maxFrameRate);
                return l !== r.ApplicationStreamFPS.FPS_5 && null == r.ApplicationStreamSettingRequirements.find(e => e.resolution === n && e.fps !== r.ApplicationStreamFPS.FPS_5 && !p(e))
            }

            function E(e) {
                if (null == e) return;
                let t = (0, r.getApplicationFramerate)(e.maxFrameRate);
                return null == r.ApplicationStreamSettingRequirements.find(e => e.fps === t && !p(e))
            }

            function p(e) {
                return null != e.quality || null != e.guildPremiumTier
            }

            function _(e) {
                return e.type === c.ResolutionTypes.SOURCE ? s.default.Messages.SCREENSHARE_SOURCE : s.default.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
                    resolution: e.height
                })
            }

            function T(e) {
                return s.default.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
                    fps: e
                })
            }

            function I(e) {
                return null == e.maxResolution || null == e.maxFrameRate ? null : {
                    maxFrameRate: e.maxFrameRate,
                    maxResolution: e.maxResolution
                }
            }

            function h(e, t, n) {
                var c, s, f;
                let E = (c = e, s = t, f = n, r.ApplicationStreamSettingRequirements.find(e => (null == e.preset || e.preset === c) && e.resolution === s && e.fps === f)),
                    p = a.default.getCurrentUser(),
                    _ = i.default.getGuildId(),
                    T = null != _ ? l.default.getGuild(_) : null;
                u.default.track(o.AnalyticEvents.STREAM_SETTINGS_UPDATE, {
                    user_premium_tier: null == p ? void 0 : p.premiumType,
                    guild_premium_tier: null == T ? void 0 : T.premiumTier,
                    stream_quality_user_premium_tier: (null == E ? void 0 : E.quality) != null ? d.StreamQualitiesToPremiumType[E.quality] : null,
                    stream_quality_guild_premium_tier: null == E ? void 0 : E.guildPremiumTier,
                    stream_quality_preset: e,
                    stream_quality_resolution: t,
                    stream_quality_frame_rate: n
                })
            }
        },
        65300: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return c
                }
            });
            var l = n("597755"),
                i = n.n(l),
                a = n("390493");

            function u(e, t) {
                if (!e.startsWith("discord:")) return location.href = e, a.nextTick(() => t(!0));
                let {
                    body: n
                } = document;
                if (null == n) return a.nextTick(() => t(!1));
                let l = document.createElement("iframe");
                n.appendChild(l);
                try {
                    null != l.contentWindow && (l.contentWindow.location.href = e), a.nextTick(() => t(!0))
                } catch (e) {
                    "NS_ERROR_UNKNOWN_PROTOCOL" === e.name && a.nextTick(() => t(!1))
                }
                window.setTimeout(() => {
                    var e;
                    (null !== (e = null == l ? void 0 : l.parentElement) && void 0 !== e ? e : null) !== null && n.removeChild(l)
                }, 1e3)
            }

            function o(e, t) {
                let n = !1;

                function l() {
                    n = !0
                }
                window.addEventListener("blur", l), location.href = e, setTimeout(() => {
                    window.removeEventListener("blur", l), t(n)
                }, 1e3)
            }

            function r(e, t) {
                t(!1)
            }

            function d(e, t) {
                location.href = e, a.nextTick(() => t(!0))
            }
            var c = {
                launch: function() {
                    var e, t;
                    if ((null === (e = i.os) || void 0 === e ? void 0 : e.family) === "Android" || (null === (t = i.os) || void 0 === t ? void 0 : t.family) === "iOS") return d;
                    if ("Gecko" === i.layout) return u;
                    if (null != i.ua && -1 !== i.ua.indexOf("Valve Steam GameOverlay")) return r;
                    return o
                }()
            }
        },
        742270: function(e, t, n) {
            "use strict";

            function l(e) {
                return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.INVITE_HOST, "/").concat(e)
            }

            function i(e) {
                return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.GUILD_TEMPLATE_HOST, "/").concat(e)
            }

            function a() {
                return "".concat(location.protocol, "//").concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT, "/channels/@me")
            }
            n.r(t), n.d(t, {
                getInviteDynamicLinkTemplate: function() {
                    return l
                },
                getGuildTemplateDynamicLinkTemplate: function() {
                    return i
                },
                getDefaultDynamicLinkTemplate: function() {
                    return a
                }
            })
        },
        815157: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                generateAttemptId: function() {
                    return r
                },
                parseDynamicLink: function() {
                    return d
                },
                default: function() {
                    return c
                }
            });
            var l = n("383536"),
                i = n.n(l),
                a = n("748820"),
                u = n("530334");
            let o = "https://discordapp.page.link";

            function r() {
                return (0, a.v4)()
            }

            function d(e) {
                if (!e.startsWith(o)) return null;
                try {
                    var t;
                    let n = new URL(e),
                        l = n.searchParams,
                        i = l.get("link");
                    if (null == i) return null;
                    let a = decodeURIComponent(i),
                        u = new URL(a).searchParams,
                        o = {
                            utmSource: null !== (t = l.get("utm_source")) && void 0 !== t ? t : void 0
                        };
                    for (let [e, t] of u.entries()) o[e] = t;
                    return o
                } catch {
                    return null
                }
            }

            function c(e, t) {
                let {
                    utmSource: n,
                    androidFallbackLink: l,
                    iosFallbackLink: a,
                    ...r
                } = t, d = new URL(e);
                for (let e in r) {
                    let t = r[e];
                    null != t && d.searchParams.set(e, t)
                }
                let c = encodeURIComponent(d.toString()),
                    s = encodeURIComponent((0, u.default)()),
                    f = ! function() {
                        var e, t;
                        let n = RegExp("(".concat("WebView|(iPhone|iPod|iPad)(?!.*Safari/)", ")"), "ig"),
                            l = (null == i ? void 0 : null === (e = i.ua) || void 0 === e ? void 0 : e.match(n)) != null,
                            a = (null == i ? void 0 : i.name) === "Safari" && !l;
                        return (null == i ? void 0 : null === (t = i.os) || void 0 === t ? void 0 : t.family) !== "iOS" || a
                    }() ? 0 : 1,
                    E = null != l ? encodeURIComponent(l) : null,
                    p = null != a ? encodeURIComponent(a) : null,
                    _ = "".concat(o, "/?link=").concat(c, "&utm_source=").concat(n, "&apn=").concat("com.discord", "&isi=").concat(985746746, "&ibi=").concat("com.hammerandchisel.discord", "&sd=").concat(s, "&efr=").concat(f);
                return null != E && (_ += "&afl=".concat(E)), null != p && (_ += "&ifl=".concat(p)), _
            }
        },
        530334: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            let l = () => "";
            var i = l = n("466237").default
        },
        466237: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var l = n("792788");

            function i() {
                return l.default.Messages.DynamicLinks.IOS_APP_PREVIEW_DESCRIPTION
            }
        }
    }
]);
//# sourceMappingURL=c7aaed1e38be2027060d.js.map