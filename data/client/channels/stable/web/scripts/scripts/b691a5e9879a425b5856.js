(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["3397"], {
        430568: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return _
                }
            });
            var r = n("37983"),
                i = n("884691"),
                a = n("414456"),
                o = n.n(a),
                u = n("817736"),
                s = n.n(u),
                l = n("118810"),
                d = n("446674"),
                c = n("407063"),
                f = n("845579"),
                h = n("901165"),
                m = n("62843"),
                S = n("315102"),
                p = n("402671"),
                E = n("866190"),
                T = n("115279");
            class A extends i.PureComponent {
                componentWillUnmount() {
                    var e;
                    null === (e = this.cancelLoadImage) || void 0 === e || e.call(this)
                }
                getSrc() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props,
                        {
                            src: t,
                            emojiId: n,
                            emojiName: r,
                            animated: i,
                            shouldAnimate: a,
                            isFocused: o,
                            isInteracting: u,
                            size: s = "default"
                        } = e,
                        {
                            hover: l
                        } = this.state;
                    if (null != t) return t;
                    if (null != n) {
                        let e = T.EMOJI_SIZE_MAP[s];
                        return S.default.getEmojiURL({
                            id: n,
                            animated: o && !0 === i && (!0 === a || l || !0 === u),
                            size: e
                        })
                    }
                    if (null != r) return p.default.getURL(r)
                }
                render() {
                    var e;
                    let t;
                    let {
                        emojiName: n,
                        animated: a,
                        className: u,
                        size: s = "default",
                        alt: l,
                        shouldAnimate: d,
                        isFocused: c,
                        emojiId: f,
                        autoplay: h,
                        isInteracting: m,
                        ...S
                    } = this.props, p = this.getSrc();
                    return null == p || "" === p ? (0, r.jsx)("span", {
                        className: o("emoji", "emoji-text"),
                        children: n
                    }) : (a && (t = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }), (0, i.createElement)("img", {
                        ...S,
                        key: this.key,
                        src: p,
                        alt: null !== (e = null != l ? l : n) && void 0 !== e ? e : void 0,
                        draggable: !1,
                        ...t,
                        className: o("emoji", u, {
                            jumboable: "jumbo" === s
                        }),
                        onError: this.onError,
                        "data-type": "emoji",
                        ...null != f && "" !== f ? {
                            "data-id": f
                        } : {
                            "data-name": n
                        }
                    }))
                }
                constructor(...e) {
                    super(...e), this.state = {
                        hover: !1
                    }, this.key = void 0, this.onError = () => {
                        let e = this.getSrc();
                        null != e && (this.cancelLoadImage = (0, c.loadImage)(e, e => {
                            !e && (this.key = Date.now(), this.forceUpdate())
                        }))
                    }, this.onMouseEnter = e => {
                        this.setState({
                            hover: !0
                        });
                        let {
                            onMouseEnter: t
                        } = this.props;
                        null != t && t(e)
                    }, this.onMouseLeave = e => {
                        this.setState({
                            hover: !1
                        });
                        let {
                            onMouseLeave: t
                        } = this.props;
                        null != t && t(e)
                    }
                }
            }
            A.defaultProps = {
                isInteracting: !1
            };
            let v = function(e) {
                if (null == window.IntersectionObserver) return function(t) {
                    return (0, r.jsx)(e, {
                        ...t,
                        shouldAnimate: t.animated
                    })
                };
                let t = [],
                    n = [],
                    a = new window.IntersectionObserver(e => {
                        e.forEach(e => {
                            let r = n.find(t => {
                                let [n] = t;
                                return n === e.target
                            });
                            if (null == r) return;
                            let i = r[1];
                            if (e.intersectionRatio >= .7) {
                                var a, o;
                                if (-1 !== t.indexOf(i)) return;
                                let n = Math.abs(e.intersectionRect.bottom - Number(null === (a = e.rootBounds) || void 0 === a ? void 0 : a.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (o = e.rootBounds) || void 0 === o ? void 0 : o.top));
                                n ? t.unshift(i) : t.push(i), i.forceUpdate(), n && t.length > 100 && t[100].forceUpdate()
                            } else {
                                let e = t.indexOf(i); - 1 !== e && (t.splice(e, 1), i.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate())
                            }
                        })
                    }, {
                        threshold: .7
                    });

                function o(e) {
                    let t = s.findDOMNode(e);
                    (0, l.isElement)(t) && (n.push([t, e]), a.observe(t))
                }

                function u(e) {
                    let r = s.findDOMNode(e);
                    a.unobserve(r);
                    let i = n.findIndex(t => {
                        let [n, r] = t;
                        return r === e
                    }); - 1 !== i && (n.splice(i, 1), -1 !== (i = t.indexOf(e)) && (t.splice(i, 1), i < 100 && t.length >= 100 && t[99].forceUpdate()))
                }
                return class extends i.Component {
                    shouldAutoplay(e) {
                        return e.animated && e.autoplay
                    }
                    componentDidMount() {
                        this.shouldAutoplay(this.props) && o(this)
                    }
                    componentDidUpdate(e) {
                        let t = this.shouldAutoplay(e),
                            n = this.shouldAutoplay(this.props);
                        n !== t && (n ? o(this) : u(this))
                    }
                    componentWillUnmount() {
                        this.shouldAutoplay(this.props) && u(this)
                    }
                    render() {
                        let n = t.indexOf(this),
                            {
                                autoplay: i,
                                allowAnimatedEmoji: a,
                                ...o
                            } = this.props;
                        return (0, r.jsx)(m.MessagesInteractionContext.Consumer, {
                            children: t => (0, r.jsx)(e, {
                                ...o,
                                autoplay: i || !1,
                                shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && a
                            })
                        })
                    }
                }
            }(A);

            function _(e) {
                let t = f.AnimateEmoji.useSetting(),
                    n = {
                        autoplay: null == e.autoplay ? t : e.autoplay,
                        allowAnimatedEmoji: t
                    },
                    i = __OVERLAY__ ? (0, d.useStateFromStores)([h.default], () => h.default.isInstanceFocused()) : (0, E.useIsWindowFocused)();
                return (0, r.jsx)(v, {
                    ...e,
                    ...n,
                    isFocused: i
                })
            }
        },
        145079: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return p
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                a = n.n(i),
                o = n("446674"),
                u = n("77078"),
                s = n("102985"),
                l = n("79798"),
                d = n("754474"),
                c = n("158998"),
                f = n("782340"),
                h = n("892802");

            function m(e) {
                if (e.isSystemUser()) return d.BotTypes.SYSTEM_DM;
                if (e.isClyde()) return d.BotTypes.AI;
                if (e.bot) return d.BotTypes.BOT;
                return null
            }
            let S = e => {
                let {
                    primary: t,
                    secondary: n,
                    botType: i,
                    botVerified: o,
                    discriminatorClass: s,
                    className: d,
                    usernameClass: c,
                    color: m,
                    botClass: S,
                    showStreamerModeTooltip: p
                } = e;
                return (0, r.jsxs)("div", {
                    className: a(h.info, d),
                    children: [(0, r.jsx)(u.Tooltip, {
                        text: f.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: p,
                        children: e => (0, r.jsx)("span", {
                            ...e,
                            className: a(h.username, c),
                            style: null != m ? {
                                color: m
                            } : void 0,
                            children: t
                        })
                    }), null != n ? (0, r.jsx)("span", {
                        className: a(h.infoSpacing, s),
                        children: n
                    }) : void 0, null != i && (0, r.jsx)(l.default, {
                        type: i,
                        className: a(h.infoSpacing, S),
                        verified: o
                    })]
                })
            };
            var p = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: i,
                    forceUsername: a,
                    showAccountIdentifier: u,
                    overrideDiscriminator: l,
                    forcePomelo: f,
                    ...h
                } = e, p = (0, o.useStateFromStores)([s.default], () => s.default.hidePersonalInformation), E = p || t || n.isNonUserBot(), T = n.toString(), A = c.default.getName(n), v = a ? T : null != i ? i : A, _ = n.isPomelo() || f;
                if (_ || v !== T) {
                    let e = v === T && _ && a ? c.default.getUserTag(n, {
                            forcePomelo: f
                        }) : v,
                        t = u && e !== "@".concat(T) ? c.default.getUserTag(n) : void 0;
                    return (0, r.jsx)(S, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: m(n),
                        showStreamerModeTooltip: p && e !== A,
                        ...h
                    })
                }
                return (0, r.jsx)(d.default, {
                    name: v,
                    botType: m(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: E || v !== T ? null : null != l ? l : n.discriminator,
                    ...h
                })
            }
        },
        889014: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return a
                }
            });
            var r = n("446674"),
                i = n("76393");

            function a() {
                return (0, r.useStateFromStores)([i.default], () => null != i.default.getRemoteSessionId() || null != i.default.getAwaitingRemoteSessionInfo())
            }
        },
        300322: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VoiceInThreadsExperiment: function() {
                    return p
                },
                useCanStartPublicThread: function() {
                    return E
                },
                computeCanStartPublicThread: function() {
                    return T
                },
                useCanStartPrivateThread: function() {
                    return A
                },
                useCanStartThread: function() {
                    return v
                },
                useCanViewThreadForMessage: function() {
                    return g
                },
                useHasActiveThreads: function() {
                    return M
                },
                useCanManageThread: function() {
                    return y
                },
                useCanUnarchiveThread: function() {
                    return C
                },
                canUnarchiveThread: function() {
                    return P
                },
                useIsActiveChannelOrUnarchivableThread: function() {
                    return N
                },
                getIsActiveChannelOrUnarchivableThread: function() {
                    return R
                },
                computeIsReadOnlyThread: function() {
                    return D
                },
                useIsThreadModerator: function() {
                    return x
                },
                useCanJoinThreadVoice: function() {
                    return L
                },
                useIsNonModInLockedThread: function() {
                    return U
                }
            });
            var r = n("917351"),
                i = n.n(r),
                a = n("316693"),
                o = n("446674"),
                u = n("296892"),
                s = n("889014"),
                l = n("913491"),
                d = n("233069"),
                c = n("271938"),
                f = n("42203"),
                h = n("957255"),
                m = n("401690"),
                S = n("49111");
            let p = (0, u.default)({
                id: "2022-07_voice_in_threads",
                label: "Voice in Threads",
                kind: "guild",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "On",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function E(e, t) {
                let n = (0, o.useStateFromStores)([h.default], () => {
                    let t = e.isForumLikeChannel() ? S.Permissions.SEND_MESSAGES : a.default.combine(S.Permissions.CREATE_PUBLIC_THREADS, S.Permissions.READ_MESSAGE_HISTORY);
                    return h.default.can(t, e)
                }, [e]);
                return _(n, e, t)
            }

            function T(e, t) {
                let n = e.isForumLikeChannel() ? S.Permissions.SEND_MESSAGES : a.default.combine(S.Permissions.CREATE_PUBLIC_THREADS, S.Permissions.READ_MESSAGE_HISTORY),
                    r = h.default.can(n, e);
                return _(r, e, t)
            }

            function A(e) {
                let t = (0, o.useStateFromStores)([h.default], () => h.default.can(a.default.combine(S.Permissions.CREATE_PRIVATE_THREADS), e), [e]);
                return e.type === S.ChannelTypes.GUILD_TEXT && _(t, e)
            }

            function v(e) {
                let t = E(e),
                    n = A(e);
                return t || n
            }

            function _(e, t, n) {
                return !(__OVERLAY__ || !e || !d.THREADED_CHANNEL_TYPES.has(t.type) || null != n && (n.hasFlag(S.MessageFlags.HAS_THREAD) || (0, l.default)(n))) && !0
            }

            function g(e) {
                let t = (0, o.useStateFromStores)([f.default], () => f.default.getChannel(e.id), [e]),
                    n = (0, o.useStateFromStores)([h.default], () => h.default.can(S.Permissions.VIEW_CHANNEL, t), [t]);
                return function(e, t, n) {
                    return !!t.hasFlag(S.MessageFlags.HAS_THREAD) && null != n && !!e || !1
                }(n, e, t)
            }

            function M(e) {
                return (0, o.useStateFromStoresObject)([m.default, h.default], () => {
                    let t = m.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
                        n = m.default.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
                        r = m.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
                        a = i(n).some(e => h.default.can(S.Permissions.VIEW_CHANNEL, e.channel)),
                        o = i(t).some(e => !(e.channel.id in n) && h.default.can(S.Permissions.VIEW_CHANNEL, e.channel)),
                        u = i(r).some(e => h.default.can(S.Permissions.VIEW_CHANNEL, e));
                    return {
                        hasActiveThreads: a || o || u,
                        hasMoreActiveThreads: u || o
                    }
                })
            }

            function y(e) {
                let t = (0, o.useStateFromStores)([f.default], () => f.default.getChannel(null == e ? void 0 : e.parent_id)),
                    n = (0, o.useStateFromStores)([h.default], () => null != t && h.default.can(S.Permissions.MANAGE_THREADS, t), [t]),
                    r = (0, o.useStateFromStores)([c.default], () => c.default.getId());
                return !!(null != e && null != t && e.isThread()) && (!!n || !e.isLockedThread() && (e.ownerId === r || !1))
            }

            function I(e, t) {
                return null != e && t.can(S.Permissions.SEND_MESSAGES_IN_THREADS, e)
            }

            function b(e, t, n) {
                var r;
                return !!(null != e && e.isThread()) && ((null === (r = e.threadMetadata) || void 0 === r ? void 0 : r.locked) ? n : t)
            }

            function C(e) {
                let t = (0, o.useStateFromStores)([h.default], () => I(e, h.default)),
                    n = x(e);
                return b(e, t, n)
            }

            function P(e) {
                let t = I(e, h.default),
                    n = function(e) {
                        return F(e, h.default)
                    }(e);
                return b(e, t, n)
            }

            function N(e) {
                var t;
                let n = (0, o.useStateFromStores)([h.default], () => null != e && h.default.can(S.Permissions.SEND_MESSAGES_IN_THREADS, e));
                return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && n)
            }

            function R(e) {
                var t;
                return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && h.default.can(S.Permissions.SEND_MESSAGES_IN_THREADS, e))
            }

            function D(e) {
                let t = h.default.can(S.Permissions.MANAGE_THREADS, e);
                return e.isArchivedLockedThread() && !t
            }

            function F(e, t) {
                return null != e && t.can(S.Permissions.MANAGE_THREADS, e)
            }

            function x(e) {
                return (0, o.useStateFromStores)([h.default], () => F(e, h.default))
            }

            function L(e) {
                let t = (0, s.default)(),
                    n = (0, o.useStateFromStores)([h.default], () => h.default.can(S.Permissions.CONNECT, e)),
                    r = N(e),
                    i = p.useExperiment({
                        guildId: e.guild_id,
                        location: "e791ea_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled;
                return !t && e.isVocalThread() && i && n && r
            }

            function U(e) {
                let t = x(e);
                return e.isLockedThread() && !t
            }
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return o
                },
                copy: function() {
                    return u
                }
            });
            var r = n("281071"),
                i = n("773336"),
                a = n("50885");
            let o = (() => {
                if (i.isPlatformEmbedded) return null != a.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function u(e) {
                return !!o && (i.isPlatformEmbedded ? (a.default.copy(e), !0) : r.copy(e))
            }
        }
    }
]);
//# sourceMappingURL=b691a5e9879a425b5856.js.map