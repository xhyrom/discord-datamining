(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["12973"], {
        658536: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return E
                }
            }), n("222007");
            var a = n("913144"),
                l = n("689988"),
                i = n("26989"),
                r = n("697218"),
                s = n("509");
            let _ = null,
                u = () => {
                    let e = i.default.getCommunicationDisabledUserMap();
                    Object.keys(e).forEach(t => {
                        let n = (0, i.getGuildIdFromCommunicationDisabledUserKey)(t),
                            a = (0, i.getUserIdFromCommunicationDisabledUserKey)(t),
                            l = e[t];
                        !(0, s.isCommunicationDisabled)(l) && o(n, a)
                    })
                },
                o = (e, t) => {
                    var n, l, _, u, o, d;
                    let E = i.default.getMember(e, t),
                        f = r.default.getUser(t);
                    if (null == E || null == f || (0, s.isMemberCommunicationDisabled)(E)) return;
                    let c = {
                        ...E,
                        guildId: e,
                        nick: null !== (n = E.nick) && void 0 !== n ? n : f.username,
                        avatar: null !== (l = E.avatar) && void 0 !== l ? l : void 0,
                        avatarDecoration: null != E.avatarDecoration ? {
                            ...E.avatarDecoration
                        } : void 0,
                        premiumSince: null !== (_ = E.premiumSince) && void 0 !== _ ? _ : void 0,
                        isPending: null !== (u = E.isPending) && void 0 !== u && u,
                        user: {
                            ...f,
                            email: null !== (o = f.email) && void 0 !== o ? o : void 0,
                            phone: null !== (d = f.phone) && void 0 !== d ? d : void 0
                        },
                        communicationDisabledUntil: null
                    };
                    a.default.dispatch({
                        type: "GUILD_MEMBER_UPDATE",
                        ...c
                    })
                };
            class d extends l.default {
                _initialize() {
                    _ = setInterval(() => u(), 1e4)
                }
                _terminate() {
                    clearInterval(_)
                }
                constructor(...e) {
                    super(...e), this.clearGuildMemberTimeout = o
                }
            }
            var E = new d
        },
        341329: function(e, t, n) {
            "use strict";
            let a;
            n.r(t), n.d(t, {
                default: function() {
                    return X
                }
            }), n("222007");
            var l = n("803182"),
                i = n("811022"),
                r = n("95410"),
                s = n("913144"),
                _ = n("404118"),
                u = n("819689"),
                o = n("115718"),
                d = n("689988"),
                E = n("408062"),
                f = n("619443"),
                c = n("582713"),
                A = n("233069"),
                S = n("982108"),
                C = n("42203"),
                T = n("305961"),
                N = n("660478"),
                p = n("18494"),
                g = n("162771"),
                O = n("718517"),
                I = n("519841"),
                m = n("787336"),
                R = n("49111"),
                L = n("724210"),
                h = n("782340");
            let v = new i.default("MessageManager");

            function y(e) {
                let {
                    guildId: t,
                    channelId: n,
                    messageId: l,
                    forceFetch: i,
                    isPreload: s,
                    jumpType: _,
                    skipLocalFetch: d,
                    logFailures: c
                } = e;
                if (null == n) {
                    c && v.log("Skipping fetch because channelId is null");
                    return
                }
                if ((0, L.isStaticChannelRoute)(n)) {
                    c && v.log("Skipping fetch because channelId is a static route");
                    return
                }
                let A = C.default.getChannel(n);
                if ((null == A ? void 0 : A.type) === R.ChannelTypes.GUILD_STORE || (null == A ? void 0 : A.type) != null && R.ChannelTypesSets.GUILD_THREADS_ONLY.has(A.type)) {
                    c && v.log("Skipping fetch because channel is a forum/store");
                    return
                }
                let S = E.default.getOrCreate(n);
                I.AttachmentLinkRefreshExperiment.getCurrentConfig({
                    location: "fetch_messages"
                }).enabled && S.some(m.messageHasExpiredAttachmentUrl) && (v.log("Found expired attachment link, clearing messages"), E.default.clear(n), S = E.default.getOrCreate(n)), null != S.jumpTargetId && null == l && (S = S.mutate({
                    jumpTargetId: null,
                    jumped: !1,
                    jumpType: o.JumpTypes.ANIMATED
                }), E.default.commit(S)), null != S.focusTargetId && null == l && (S = S.mutate({
                    focusTargetId: null
                }), E.default.commit(S));
                let p = i;
                if (!s || f.default.isConnected() || S.loadingMore ? S.loadingMore || S.ready && !S.cached ? null != l ? p = !0 : c && v.log("Skipping fetch because no other conditions matched") : null == t || null != T.default.getGuild(t) ? p = !0 : c && v.log("Skipping fetch we are connected and have loaded messages") : p = !0, p) {
                    if (E.default.commit(S.mutate({
                            loadingMore: !0
                        })), null != l) u.default.jumpToMessage({
                        channelId: n,
                        messageId: l,
                        flash: !0,
                        isPreload: s,
                        skipLocalFetch: d,
                        jumpType: _
                    });
                    else if ((null == A ? void 0 : A.isThread()) && function(e) {
                            if (N.default.hasOpenedThread(e)) return !1;
                            if (null == a) {
                                var t;
                                a = null !== (t = r.default.get(M, {})) && void 0 !== t ? t : {}
                            }
                            if (e in a) return !1;
                            a[e] = Date.now();
                            let n = Date.now() - b;
                            for (let e in a) a[e] < n && delete a[e];
                            return r.default.set(M, a), !0
                        }(n)) v.log("Jumping to start of thread ".concat(A.id)), u.default.fetchMessages({
                        channelId: n,
                        limit: R.MAX_MESSAGES_PER_CHANNEL,
                        jump: {
                            messageId: n,
                            flash: !1
                        },
                        isPreload: s,
                        skipLocalFetch: d
                    });
                    else if ((null == A ? void 0 : A.isThread()) && N.default.hasTrackedUnread(A.id) && !S.ready) {
                        let e = N.default.getTrackedAckMessageId(A.id);
                        v.log("Jumping to most recent message in thread ".concat(A.id, " - ").concat(e)), u.default.fetchMessages({
                            channelId: n,
                            limit: R.MAX_MESSAGES_PER_CHANNEL,
                            jump: {
                                messageId: e,
                                flash: !1,
                                offset: 1
                            },
                            isPreload: s,
                            skipLocalFetch: d
                        })
                    } else u.default.fetchMessages({
                        channelId: n,
                        limit: R.MAX_MESSAGES_PER_CHANNEL,
                        isPreload: s,
                        skipLocalFetch: d,
                        jump: {
                            jumpType: o.JumpTypes.ANIMATED
                        }
                    })
                }
            }
            let b = 90 * O.default.Millis.DAY,
                M = "viewedThreadIds";

            function D() {
                let e = p.default.getChannelId();
                if (null != e) {
                    let n = C.default.getChannel(e);
                    if (null != n) {
                        var t;
                        let e = (0, l.matchPath)(location.pathname, {
                            path: R.Routes.CHANNEL(":guild", ":channel", ":message"),
                            exact: !0
                        });
                        y({
                            guildId: n.getGuildId(),
                            channelId: n.id,
                            messageId: null == e ? void 0 : null === (t = e.params) || void 0 === t ? void 0 : t.message
                        }), P(n.getGuildId(), n.id)
                    }
                }
            }

            function U() {
                let {
                    isPreload: e,
                    skipLocalFetch: t,
                    logFailures: n
                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, a = p.default.getChannelId();
                if (null != a) {
                    let l = C.default.getChannel(a);
                    null != l ? ((0, A.isTextChannel)(l.type) ? y({
                        guildId: l.getGuildId(),
                        channelId: l.id,
                        isPreload: e,
                        skipLocalFetch: t,
                        logFailures: n
                    }) : n && v.log("Skipping fetch because the selected channel is not a text channel"), P(l.getGuildId(), l.id)) : n && v.log("Skipping fetch because channel is null")
                } else n && v.log("Skipping fetch because there is no selected channel")
            }

            function k(e) {
                let {
                    guildId: t,
                    channelId: n,
                    messageId: a,
                    jumpType: l
                } = e;
                y({
                    guildId: t,
                    channelId: n,
                    messageId: a,
                    jumpType: l
                }), P(t, n)
            }

            function F(e) {
                let {
                    guildId: t,
                    channelId: n
                } = e;
                y({
                    guildId: t,
                    channelId: n
                })
            }

            function P(e, t) {
                let n = S.default.getCurrentSidebarChannelId(t);
                if (null == n) return;
                let a = S.default.getCurrentSidebarMessageId(t);
                y({
                    guildId: e,
                    channelId: n,
                    messageId: a
                })
            }

            function w() {
                let e = p.default.getChannelId(),
                    t = g.default.getGuildId();
                if (null == t || null == e) return;
                let n = S.default.getSidebarState(e);
                (null == n ? void 0 : n.type) !== c.SidebarType.VIEW_CHANNEL && P(t, e)
            }

            function G(e) {
                let {
                    guildId: t,
                    channelId: n,
                    context: a
                } = e;
                a === R.CURRENT_APP_CONTEXT && (y({
                    guildId: t,
                    channelId: n
                }), P(t, n))
            }

            function Y(e) {
                let {
                    channel: t,
                    messageId: n
                } = e, a = t.guild_id;
                null != a && p.default.getChannelId(a) === t.id && y({
                    guildId: a,
                    channelId: t.id,
                    messageId: n
                })
            }

            function W(e) {
                let {
                    channelId: t
                } = e;
                u.default.fetchMessages({
                    channelId: t,
                    limit: R.MAX_MESSAGES_PER_CHANNEL
                })
            }

            function B(e) {
                let {
                    response: t
                } = e;
                if (null == t || null == t.body) return null;
                if (t.body.code === R.AbortCodes.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) {
                    let e = t.body.retry_after;
                    null != e && _.default.show({
                        title: h.default.Messages.RATE_LIMITED,
                        body: h.default.Messages.ANNOUNCEMENT_EDIT_RATE_LIMIT.format({
                            retryAfterMinutes: Math.ceil(e / 60)
                        })
                    })
                }
            }
            let H = {};

            function V(e) {
                var t;
                let {
                    channelId: n,
                    jump: a,
                    isStale: l,
                    isPreview: i = !1
                } = e;
                if (i) return;
                let r = null !== (t = H[n]) && void 0 !== t ? t : 0;
                if (Date.now() - r < 10 * O.default.Millis.SECOND) return;
                H[n] = Date.now();
                let s = p.default.getChannelId(),
                    _ = S.default.getCurrentSidebarChannelId(s),
                    o = n === s || n === _;
                l && f.default.isConnected() && o && u.default.fetchMessages({
                    channelId: n,
                    limit: R.MAX_MESSAGES_PER_CHANNEL,
                    jump: a
                })
            }

            function K(e) {
                let {
                    channelId: t,
                    messageRecord: n
                } = e;
                null != n && s.default.dispatch({
                    type: "MESSAGE_SEND_FAILED",
                    channelId: t,
                    messageId: n.id
                })
            }

            function x(e) {
                let {
                    state: t
                } = e;
                if ("active" !== t) return !1;
                let n = p.default.getChannelId();
                if (null == n) return !1;
                u.default.fetchNewLocalMessages(n, R.MAX_MESSAGES_PER_CHANNEL)
            }
            class j extends d.default {
                _initialize() {
                    s.default.subscribe("CONNECTION_OPEN", D)
                }
                _terminate() {
                    s.default.unsubscribe("CONNECTION_OPEN", D)
                }
                constructor(...e) {
                    super(...e), this.fetchMessages = y, this.loadSelectedChannelIfNecessary = U, this.stores = new Map().set(S.default, w), this.actions = {
                        APP_STATE_UPDATE: x,
                        OVERLAY_INITIALIZE: D,
                        CHANNEL_SELECT: k,
                        VOICE_CHANNEL_SELECT: F,
                        THREAD_CREATE: Y,
                        THREAD_LIST_SYNC: () => U(),
                        CHANNEL_CREATE: Y,
                        CHANNEL_PRELOAD: G,
                        THREAD_CREATE_LOCAL: W,
                        GUILD_CREATE: () => U(),
                        MESSAGE_END_EDIT: B,
                        LOAD_MESSAGES_SUCCESS: V,
                        UPLOAD_FAIL: K,
                        CHANNEL_DELETE: () => U(),
                        THREAD_DELETE: () => U()
                    }
                }
            }
            var X = new j
        },
        277734: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                dismissChannelSafetyWarnings: function() {
                    return r
                },
                setChannelSafetyWarningFeedback: function() {
                    return s
                },
                clearChannelSafetyWarnings: function() {
                    return _
                },
                acknowledgeChannelSafetyWarningTooltip: function() {
                    return u
                }
            });
            var a = n("872717"),
                l = n("913144"),
                i = n("49111");

            function r(e, t) {
                return l.default.dispatch({
                    type: "DISMISS_CHANNEL_SAFETY_WARNINGS",
                    channelId: e,
                    warningIds: t
                }), a.default.post({
                    url: i.Endpoints.CHANNEL_SAFETY_WARNINGS_ACK(e),
                    body: {
                        warning_ids: t
                    },
                    oldFormErrors: !0
                })
            }

            function s(e, t, n) {
                l.default.dispatch({
                    type: "CHANNEL_SAFETY_WARNING_FEEDBACK",
                    channelId: e,
                    warningId: t,
                    feedbackType: n
                })
            }

            function _(e) {
                l.default.dispatch({
                    type: "CLEAR_CHANNEL_SAFETY_WARNINGS",
                    channelId: e
                })
            }

            function u(e) {
                l.default.dispatch({
                    type: "ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP",
                    channelId: e
                })
            }
        },
        764828: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SafetyWarningTypes: function() {
                    return a
                },
                SafetyWarningFeedbackTypes: function() {
                    return l
                },
                default: function() {
                    return T
                }
            }), n("222007");
            var a, l, i, r, s = n("446674"),
                _ = n("913144"),
                u = n("42203"),
                o = n("718517");
            let d = 5 * o.default.Millis.SECOND;
            (i = a || (a = {}))[i.STRANGER_DANGER = 1] = "STRANGER_DANGER", i[i.INAPPROPRIATE_CONVERSATION_TIER_1 = 2] = "INAPPROPRIATE_CONVERSATION_TIER_1", i[i.INAPPROPRIATE_CONVERSATION_TIER_2 = 3] = "INAPPROPRIATE_CONVERSATION_TIER_2", (r = l || (l = {}))[r.UPVOTE = 0] = "UPVOTE", r[r.DOWNVOTE = 1] = "DOWNVOTE";
            let E = [],
                f = {},
                c = new Set;

            function A(e) {
                let {
                    safetyWarnings: t
                } = e;
                null != t && (f[e.id] = t, t.some(e => {
                    var t;
                    return (2 === (t = e).type || 3 === t.type) && null != e.dismiss_timestamp && ! function(e) {
                        return new Date(e).getTime() > Date.now() - d
                    }(e.dismiss_timestamp)
                }) ? c.add(e.id) : c.delete(e.id)), null == t && (null != f[e.id] && delete f[e.id], c.delete(e.id))
            }

            function S() {
                f = {}, Object.values(u.default.getMutablePrivateChannels()).forEach(e => {
                    A(e)
                })
            }
            class C extends s.default.Store {
                initialize() {
                    this.waitFor(u.default)
                }
                getChannelSafetyWarning(e, t) {
                    var n;
                    return null === (n = f[e]) || void 0 === n ? void 0 : n.find(e => e.id === t)
                }
                getChannelSafetyWarnings(e) {
                    var t;
                    return null !== (t = f[e]) && void 0 !== t ? t : E
                }
                hasShownInitialTooltipForChannel(e) {
                    return c.has(e)
                }
            }
            var T = new C(_.default, {
                CHANNEL_CREATE: function(e) {
                    A(e.channel)
                },
                CHANNEL_DELETE: function(e) {
                    let {
                        channel: t
                    } = e;
                    null != f[t.id] && delete f[t.id], c.delete(t.id)
                },
                CHANNEL_UPDATES: function(e) {
                    e.channels.forEach(e => {
                        A(e)
                    })
                },
                CONNECTION_OPEN: S,
                CONNECTION_OPEN_SUPPLEMENTAL: S,
                CHANNEL_SAFETY_WARNING_FEEDBACK: function(e) {
                    let {
                        channelId: t,
                        warningId: n,
                        feedbackType: a
                    } = e, l = f[t];
                    null != l && (f[t] = l.map(e => e.id === n ? {
                        ...e,
                        feedback_type: a
                    } : e))
                },
                CLEAR_CHANNEL_SAFETY_WARNINGS: function(e) {
                    let {
                        channelId: t
                    } = e, n = f[t];
                    c.delete(t), null != n && (f[t] = n.map(e => ({
                        ...e,
                        dismiss_timestamp: void 0
                    })))
                },
                DISMISS_CHANNEL_SAFETY_WARNINGS: function(e) {
                    let {
                        channelId: t,
                        warningIds: n
                    } = e, a = f[t];
                    if (null == a) return;
                    let l = new Date().toISOString();
                    f[t] = a.map(e => n.includes(e.id) ? {
                        ...e,
                        dismiss_timestamp: l
                    } : e)
                },
                ACKNOWLEDGE_CHANNEL_SAFETY_WARNING_TOOLTIP: function(e) {
                    let {
                        channelId: t
                    } = e;
                    c.add(t)
                }
            })
        },
        499799: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isStaffTeenSafetyAssistAgeBypass: function() {
                    return i
                },
                useStaffTeenSafetyAssistAgeBypass: function() {
                    return r
                }
            });
            var a = n("862205");
            let l = (0, a.createExperiment)({
                kind: "user",
                id: "2023-10_staff_teen_safety_assist_age_bypass",
                label: "Staff Teen Safety Assist Age Bypass",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable staff teen safety assist age bypass (your account will behave as a teen user)",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function i(e) {
                let {
                    enabled: t
                } = l.getCurrentConfig({
                    location: e
                }, {
                    autoTrackExposure: !0
                });
                return t
            }

            function r(e) {
                return l.useExperiment({
                    location: e
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        761771: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isEligibleForInappropriateConversationWarning: function() {
                    return r
                },
                useIsEligibleForInappropriateConversationWarning: function() {
                    return s
                }
            });
            var a = n("862205");
            let l = (0, a.createExperiment)({
                    kind: "user",
                    id: "2024-01_inappropriate_conversation_warning",
                    label: "Inappropriate Conversation Warning",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable Inappropriate Conversation Warning",
                        config: {
                            enabled: !0
                        }
                    }]
                }),
                i = (0, a.createExperiment)({
                    kind: "user",
                    id: "2024-01_inappropriate_conversation_warning_staff_bypass",
                    label: "Inappropriate Conversation Warning Staff Bypass",
                    defaultConfig: {
                        enabled: !1
                    },
                    treatments: [{
                        id: 1,
                        label: "Enable Inappropriate Conversation Warning Staff Bypass",
                        config: {
                            enabled: !0
                        }
                    }]
                });

            function r(e) {
                let {
                    location: t,
                    autoTrackExposure: n = !1
                } = e, {
                    enabled: a
                } = l.getCurrentConfig({
                    location: t
                }, {
                    autoTrackExposure: n
                }), {
                    enabled: r
                } = i.getCurrentConfig({
                    location: t
                }, {
                    autoTrackExposure: n
                });
                return a || r
            }

            function s(e) {
                let {
                    location: t,
                    autoTrackExposure: n = !1
                } = e, {
                    enabled: a
                } = l.useExperiment({
                    location: t
                }, {
                    autoTrackExposure: n
                }), {
                    enabled: r
                } = i.useExperiment({
                    location: t
                }, {
                    autoTrackExposure: n
                });
                return a || r
            }
        },
        217736: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                trackViewedEvent: function() {
                    return d
                },
                ViewNameTypes: function() {
                    return i
                },
                trackNamedViewEvent: function() {
                    return E
                },
                CtaEventTypes: function() {
                    return r
                },
                trackCtaEvent: function() {
                    return f
                },
                getUserIsTeen: function() {
                    return c
                }
            });
            var a, l, i, r, s = n("697218"),
                _ = n("599110"),
                u = n("499799"),
                o = n("49111");

            function d(e, t) {
                let {
                    channelId: n,
                    warningId: a,
                    senderId: l,
                    warningType: i
                } = t;
                _.default.track(e, {
                    channel_id: n,
                    warning_id: null != a ? parseInt(a) : void 0,
                    warning_type: i,
                    other_user_id: l
                })
            }

            function E(e) {
                let {
                    channelId: t,
                    warningId: n,
                    senderId: a,
                    warningType: l,
                    viewName: i,
                    isNudgeWarning: r
                } = e;
                _.default.track(o.AnalyticEvents.SAFETY_WARNING_VIEWED, {
                    channel_id: t,
                    warning_id: null != n ? parseInt(n) : void 0,
                    warning_type: l,
                    other_user_id: a,
                    view_name: i,
                    is_nudge_warning: r
                })
            }

            function f(e) {
                let {
                    channelId: t,
                    warningId: n,
                    senderId: a,
                    warningType: l,
                    cta: i,
                    isNudgeWarning: r
                } = e;
                _.default.track(o.AnalyticEvents.SAFETY_WARNING_CTA_CLICKED, {
                    channel_id: t,
                    warning_id: null != n ? parseInt(n) : void 0,
                    warning_type: l,
                    other_user_id: a,
                    cta: i,
                    is_nudge_warning: r
                })
            }

            function c(e) {
                var t;
                let n = null === (t = s.default.getCurrentUser()) || void 0 === t ? void 0 : t.nsfwAllowed,
                    a = (0, u.isStaffTeenSafetyAssistAgeBypass)(e);
                return !1 === n || a
            }(a = i || (i = {})).SAFETY_WARNING_BANNER = "safety_warning_banner", a.SAFETY_TAKEOVER_MODAL = "safety_takeover_modal", a.SAFETY_TOOLS_NUDGE_TOOLTIP = "safety_tools_nudge_tooltip", a.SAFETY_TOOLS_BUTTON = "safety_tools_button", (l = r || (r = {})).OPEN_MORE_TIPS = "open_more_tips", l.USER_BANNER_DISMISS = "user_banner_dismiss", l.USER_BANNER_BLOCK_CONFIRM = "user_banner_block_confirm", l.USER_BANNER_BLOCK_AND_REPORT_CONFIRM = "user_banner_block_and_report_confirm", l.USER_BANNER_BLOCK_CANCEL = "user_banner_block_cancel", l.USER_BANNER_OPEN_SAFETY_TOOLS = "user_banner_open_safety_tools", l.USER_MODAL_BLOCK_CONFIRM = "user_modal_block_confirm", l.USER_MODAL_BLOCK_CANCEL = "user_modal_block_cancel", l.USER_TAKEOVER_MODAL_DISMISS = "user_takeover_modal_dismiss", l.USER_TAKEOVER_MODAL_TAKE_ACTION = "user_takeover_modal_take_action", l.USER_TAKEOVER_MODAL_SAFETY_TIPS = "user_takeover_modal_safety_tips", l.USER_TAKEOVER_MODAL_BLOCK = "user_takeover_modal_block", l.USER_TAKEOVER_MODAL_UNBLOCK = "user_takeover_modal_unblock", l.USER_TAKEOVER_MODAL_REPORT = "user_takeover_modal_report", l.USER_TAKEOVER_MODAL_NO_FILTR = "user_takeover_modal_no_filtr", l.USER_TAKEOVER_MODAL_CTL = "user_takeover_modal_ctl", l.USER_SAFETY_TOOLS_BUTTON_CLICK = "user_safety_tools_button_click", l.USER_SAFETY_TOOLS_BLOCK_CONFIRM = "user_safety_tools_block_confirm", l.USER_SAFETY_TOOLS_BLOCK_AND_REPORT_CONFIRM = "user_safety_tools_block_and_report_confirm", l.USER_SAFETY_TOOLS_BLOCK_CANCEL = "user_safety_tools_block_cancel", l.USER_SAFETY_TOOLS_UNBLOCK = "user_safety_tools_unblock", l.USER_SAFETY_TOOLS_REPORT = "user_safety_tools_report", l.USER_SAFETY_TOOLS_NO_FILTR = "user_safety_tools_no_filtr", l.USER_SAFETY_TOOLS_CTL = "user_safety_tools_ctl", l.USER_SAFETY_TOOLS_VIBING_WUMPUS = "user_safety_tools_vibing_wumpus", l.USER_SAFETY_TOOLS_SAFETY_TIPS = "user_safety_tools_safety_tips", l.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS = "user_safety_tools_about_safety_alerts", l.USER_SAFETY_TOOLS_ABOUT_SAFETY_ALERTS_DISMISS = "user_safety_tools_about_safety_alerts_dismiss", l.USER_SAFETY_TOOLS_DISMISS = "user_safety_tools_dismiss", l.USER_MODAL_MUTE = "user_modal_mute", l.USER_MODAL_UNMUTE = "user_modal_unmute", l.FEEDBACK_UPVOTE = "feedback_upvote", l.FEEDBACK_DOWNVOTE = "feedback_downvote"
        },
        774223: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var a = n("37983");
            n("884691");
            var l = n("75196");

            function i(e) {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: i = "currentColor",
                    className: r,
                    foreground: s,
                    ..._
                } = e;
                return (0, a.jsx)("svg", {
                    ...(0, l.default)(_),
                    className: r,
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    children: (0, a.jsx)("path", {
                        className: s,
                        fill: i,
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M2 11C2 6.02944 6.02944 2 11 2H13C17.9706 2 22 6.02944 22 11V19C22 20.6569 20.6569 22 19 22H5C3.34315 22 2 20.6569 2 19V11ZM5.88 5.82497C4.71048 6.55593 4 7.83781 4 9.21697V18.7192C4 19.3698 4.61139 19.8471 5.24254 19.6893L10.9558 18.261C11.5695 18.1076 12 17.5562 12 16.9236V9.21697C12 6.07522 8.5442 4.15985 5.88 5.82497ZM10 12C10 11.4477 9.55228 11 9 11C8.44772 11 8 11.4477 8 12V14C8 14.5523 8.44772 15 9 15C9.55228 15 10 14.5523 10 14V12ZM17.6832 9.47564C17.4485 8.84145 16.5515 8.84145 16.3168 9.47564L16.1387 9.95707C15.9361 10.5045 15.5045 10.9361 14.9571 11.1387L14.4756 11.3168C13.8415 11.5515 13.8415 12.4485 14.4756 12.6832L14.9571 12.8613C15.5045 13.0639 15.9361 13.4955 16.1387 14.0429L16.3168 14.5244C16.5515 15.1585 17.4485 15.1585 17.6832 14.5244L17.8613 14.0429C18.0639 13.4955 18.4955 13.0639 19.0429 12.8613L19.5244 12.6832C20.1585 12.4485 20.1585 11.5515 19.5244 11.3168L19.0429 11.1387C18.4955 10.9361 18.0639 10.5045 17.8613 9.95707L17.6832 9.47564ZM14.1584 5.23782C14.2758 4.92073 14.7242 4.92073 14.8416 5.23782C14.9994 5.66433 15.3357 6.0006 15.7622 6.15842C16.0793 6.27576 16.0793 6.72424 15.7622 6.84158C15.3357 6.9994 14.9994 7.33567 14.8416 7.76218C14.7242 8.07927 14.2758 8.07927 14.1584 7.76218C14.0006 7.33567 13.6643 6.9994 13.2378 6.84158C12.9207 6.72424 12.9207 6.27576 13.2378 6.15842C13.6643 6.0006 14.0006 5.66433 14.1584 5.23782ZM18.8416 16.2378C18.7242 15.9207 18.2758 15.9207 18.1584 16.2378C18.0006 16.6643 17.6643 17.0006 17.2378 17.1584C16.9207 17.2758 16.9207 17.7242 17.2378 17.8416C17.6643 17.9994 18.0006 18.3357 18.1584 18.7622C18.2758 19.0793 18.7242 19.0793 18.8416 18.7622C18.9994 18.3357 19.3357 17.9994 19.7622 17.8416C20.0793 17.7242 20.0793 17.2758 19.7622 17.1584C19.3357 17.0006 18.9994 16.6643 18.8416 16.2378Z"
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=12973.003e230597c8dd661b32.js.map