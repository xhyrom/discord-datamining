(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["66888"], {
        430568: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            });
            var r = n("37983"),
                a = n("884691"),
                i = n("414456"),
                s = n.n(i),
                o = n("817736"),
                l = n.n(o),
                u = n("118810"),
                d = n("446674"),
                c = n("407063"),
                f = n("845579"),
                h = n("901165"),
                m = n("62843"),
                p = n("315102"),
                S = n("402671"),
                E = n("866190"),
                v = n("115279");
            class T extends a.PureComponent {
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
                            animated: a,
                            shouldAnimate: i,
                            isFocused: s,
                            isInteracting: o,
                            size: l = "default"
                        } = e,
                        {
                            hover: u
                        } = this.state;
                    if (null != t) return t;
                    if (null != n) {
                        let e = v.EMOJI_SIZE_MAP[l];
                        return p.default.getEmojiURL({
                            id: n,
                            animated: s && !0 === a && (!0 === i || u || !0 === o),
                            size: e
                        })
                    }
                    if (null != r) return S.default.getURL(r)
                }
                render() {
                    var e;
                    let t;
                    let {
                        emojiName: n,
                        animated: i,
                        className: o,
                        size: l = "default",
                        alt: u,
                        shouldAnimate: d,
                        isFocused: c,
                        emojiId: f,
                        autoplay: h,
                        isInteracting: m,
                        ...p
                    } = this.props, S = this.getSrc();
                    return null == S || "" === S ? (0, r.jsx)("span", {
                        className: s("emoji", "emoji-text"),
                        children: n
                    }) : (i && (t = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }), (0, a.createElement)("img", {
                        ...p,
                        key: this.key,
                        src: S,
                        alt: null !== (e = null != u ? u : n) && void 0 !== e ? e : void 0,
                        draggable: !1,
                        ...t,
                        className: s("emoji", o, {
                            jumboable: "jumbo" === l
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
            T.defaultProps = {
                isInteracting: !1
            };
            let A = function(e) {
                if (null == window.IntersectionObserver) return function(t) {
                    return (0, r.jsx)(e, {
                        ...t,
                        shouldAnimate: t.animated
                    })
                };
                let t = [],
                    n = [],
                    i = new window.IntersectionObserver(e => {
                        e.forEach(e => {
                            let r = n.find(t => {
                                let [n] = t;
                                return n === e.target
                            });
                            if (null == r) return;
                            let a = r[1];
                            if (e.intersectionRatio >= .7) {
                                var i, s;
                                if (-1 !== t.indexOf(a)) return;
                                let n = Math.abs(e.intersectionRect.bottom - Number(null === (i = e.rootBounds) || void 0 === i ? void 0 : i.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (s = e.rootBounds) || void 0 === s ? void 0 : s.top));
                                n ? t.unshift(a) : t.push(a), a.forceUpdate(), n && t.length > 100 && t[100].forceUpdate()
                            } else {
                                let e = t.indexOf(a); - 1 !== e && (t.splice(e, 1), a.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate())
                            }
                        })
                    }, {
                        threshold: .7
                    });

                function s(e) {
                    let t = l.findDOMNode(e);
                    (0, u.isElement)(t) && (n.push([t, e]), i.observe(t))
                }

                function o(e) {
                    let r = l.findDOMNode(e);
                    i.unobserve(r);
                    let a = n.findIndex(t => {
                        let [n, r] = t;
                        return r === e
                    }); - 1 !== a && (n.splice(a, 1), -1 !== (a = t.indexOf(e)) && (t.splice(a, 1), a < 100 && t.length >= 100 && t[99].forceUpdate()))
                }
                return class extends a.Component {
                    shouldAutoplay(e) {
                        return e.animated && e.autoplay
                    }
                    componentDidMount() {
                        this.shouldAutoplay(this.props) && s(this)
                    }
                    componentDidUpdate(e) {
                        let t = this.shouldAutoplay(e),
                            n = this.shouldAutoplay(this.props);
                        n !== t && (n ? s(this) : o(this))
                    }
                    componentWillUnmount() {
                        this.shouldAutoplay(this.props) && o(this)
                    }
                    render() {
                        let n = t.indexOf(this),
                            {
                                autoplay: a,
                                allowAnimatedEmoji: i,
                                ...s
                            } = this.props;
                        return (0, r.jsx)(m.MessagesInteractionContext.Consumer, {
                            children: t => (0, r.jsx)(e, {
                                ...s,
                                autoplay: a || !1,
                                shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && i
                            })
                        })
                    }
                }
            }(T);

            function g(e) {
                let t = f.AnimateEmoji.useSetting(),
                    n = {
                        autoplay: null == e.autoplay ? t : e.autoplay,
                        allowAnimatedEmoji: t
                    },
                    a = __OVERLAY__ ? (0, d.useStateFromStores)([h.default], () => h.default.isInstanceFocused()) : (0, E.useIsWindowFocused)();
                return (0, r.jsx)(A, {
                    ...e,
                    ...n,
                    isFocused: a
                })
            }
        },
        145079: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return S
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("414456"),
                i = n.n(a),
                s = n("446674"),
                o = n("77078"),
                l = n("102985"),
                u = n("79798"),
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
            let p = e => {
                let {
                    primary: t,
                    secondary: n,
                    botType: a,
                    botVerified: s,
                    discriminatorClass: l,
                    className: d,
                    usernameClass: c,
                    color: m,
                    botClass: p,
                    showStreamerModeTooltip: S
                } = e;
                return (0, r.jsxs)("div", {
                    className: i(h.info, d),
                    children: [(0, r.jsx)(o.Tooltip, {
                        text: f.default.Messages.STREAMER_MODE_ENABLED,
                        shouldShow: S,
                        children: e => (0, r.jsx)("span", {
                            ...e,
                            className: i(h.username, c),
                            style: null != m ? {
                                color: m
                            } : void 0,
                            children: t
                        })
                    }), null != n ? (0, r.jsx)("span", {
                        className: i(h.infoSpacing, l),
                        children: n
                    }) : void 0, null != a && (0, r.jsx)(u.default, {
                        type: a,
                        className: i(h.infoSpacing, p),
                        verified: s
                    })]
                })
            };
            var S = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: a,
                    forceUsername: i,
                    showAccountIdentifier: o,
                    overrideDiscriminator: u,
                    forcePomelo: f,
                    ...h
                } = e, S = (0, s.useStateFromStores)([l.default], () => l.default.hidePersonalInformation), E = S || t || n.isNonUserBot(), v = n.toString(), T = c.default.getName(n), A = i ? v : null != a ? a : T, g = n.isPomelo() || f;
                if (g || A !== v) {
                    let e = A === v && g && i ? c.default.getUserTag(n, {
                            forcePomelo: f
                        }) : A,
                        t = o && e !== "@".concat(v) ? c.default.getUserTag(n) : void 0;
                    return (0, r.jsx)(p, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: m(n),
                        showStreamerModeTooltip: S && e !== T,
                        ...h
                    })
                }
                return (0, r.jsx)(d.default, {
                    name: A,
                    botType: m(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: E || A !== v ? null : null != u ? u : n.discriminator,
                    ...h
                })
            }
        },
        163725: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EyeSlashIcon: function() {
                    return s
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("669491"),
                i = n("75196");
            let s = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: s = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...l
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, i.default)(l),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof s ? s : s.css,
                        fillRule: "evenodd",
                        d: "M1.293 21.293a1 1 0 1 0 1.414 1.414l20-20a1 1 0 0 0-1.414-1.414l-20 20Zm1.867-5.246a.487.487 0 0 0 .74.052l.72-.72a.513.513 0 0 0 .052-.657 15.708 15.708 0 0 1-1.435-2.524.48.48 0 0 1 0-.396c.408-.905 1.182-2.374 2.377-3.719C7.126 6.383 9.191 5 12 5c.822 0 1.58.118 2.278.328a.52.52 0 0 0 .52-.125l.806-.807c.247-.247.172-.662-.155-.784A9.79 9.79 0 0 0 12 3C4.887 3 1.727 10.115 1.113 11.693a.833.833 0 0 0 0 .614c.246.631.898 2.147 2.047 3.74Zm5.02-5.236c-.133.425.359.65.674.335l2.292-2.292c.315-.315.09-.807-.335-.674a4.01 4.01 0 0 0-2.631 2.63Zm4.674 4.335c-.315.315-.09.806.335.674a4.01 4.01 0 0 0 2.631-2.63c.133-.426-.359-.651-.674-.336l-2.293 2.292Zm-3.132 3.526a.52.52 0 0 0-.52.125l-.806.808c-.247.246-.172.661.155.783A9.79 9.79 0 0 0 12 21c7.113 0 10.273-7.115 10.887-8.693a.833.833 0 0 0 0-.614 17.43 17.43 0 0 0-2.047-3.74.487.487 0 0 0-.74-.052l-.72.72a.513.513 0 0 0-.052.657 15.709 15.709 0 0 1 1.435 2.524.48.48 0 0 1 0 .396c-.408.905-1.182 2.374-2.377 3.719C16.874 17.617 14.809 19 12 19a7.88 7.88 0 0 1-2.278-.328Z",
                        clipRule: "evenodd",
                        className: o
                    })
                })
            }
        },
        889014: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return i
                }
            });
            var r = n("446674"),
                a = n("76393");

            function i() {
                return (0, r.useStateFromStores)([a.default], () => null != a.default.getRemoteSessionId() || null != a.default.getAwaitingRemoteSessionInfo())
            }
        },
        300322: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VoiceInThreadsExperiment: function() {
                    return S
                },
                useCanStartPublicThread: function() {
                    return E
                },
                computeCanStartPublicThread: function() {
                    return v
                },
                useCanStartPrivateThread: function() {
                    return T
                },
                useCanStartThread: function() {
                    return A
                },
                useCanViewThreadForMessage: function() {
                    return C
                },
                useHasActiveThreads: function() {
                    return _
                },
                useCanManageThread: function() {
                    return y
                },
                useCanUnarchiveThread: function() {
                    return I
                },
                canUnarchiveThread: function() {
                    return R
                },
                useIsActiveChannelOrUnarchivableThread: function() {
                    return M
                },
                getIsActiveChannelOrUnarchivableThread: function() {
                    return x
                },
                computeIsReadOnlyThread: function() {
                    return P
                },
                useIsThreadModerator: function() {
                    return D
                },
                useCanJoinThreadVoice: function() {
                    return L
                },
                useIsNonModInLockedThread: function() {
                    return w
                }
            });
            var r = n("917351"),
                a = n.n(r),
                i = n("316693"),
                s = n("446674"),
                o = n("296892"),
                l = n("889014"),
                u = n("913491"),
                d = n("233069"),
                c = n("271938"),
                f = n("42203"),
                h = n("957255"),
                m = n("401690"),
                p = n("49111");
            let S = (0, o.default)({
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
                let n = (0, s.useStateFromStores)([h.default], () => {
                    let t = e.isForumLikeChannel() ? p.Permissions.SEND_MESSAGES : i.default.combine(p.Permissions.CREATE_PUBLIC_THREADS, p.Permissions.READ_MESSAGE_HISTORY);
                    return h.default.can(t, e)
                }, [e]);
                return g(n, e, t)
            }

            function v(e, t) {
                let n = e.isForumLikeChannel() ? p.Permissions.SEND_MESSAGES : i.default.combine(p.Permissions.CREATE_PUBLIC_THREADS, p.Permissions.READ_MESSAGE_HISTORY),
                    r = h.default.can(n, e);
                return g(r, e, t)
            }

            function T(e) {
                let t = (0, s.useStateFromStores)([h.default], () => h.default.can(i.default.combine(p.Permissions.CREATE_PRIVATE_THREADS), e), [e]);
                return e.type === p.ChannelTypes.GUILD_TEXT && g(t, e)
            }

            function A(e) {
                let t = E(e),
                    n = T(e);
                return t || n
            }

            function g(e, t, n) {
                return !(__OVERLAY__ || !e || !d.THREADED_CHANNEL_TYPES.has(t.type) || null != n && (n.hasFlag(p.MessageFlags.HAS_THREAD) || (0, u.default)(n))) && !0
            }

            function C(e) {
                let t = (0, s.useStateFromStores)([f.default], () => f.default.getChannel(e.id), [e]),
                    n = (0, s.useStateFromStores)([h.default], () => h.default.can(p.Permissions.VIEW_CHANNEL, t), [t]);
                return function(e, t, n) {
                    return !!t.hasFlag(p.MessageFlags.HAS_THREAD) && null != n && !!e || !1
                }(n, e, t)
            }

            function _(e) {
                return (0, s.useStateFromStoresObject)([m.default, h.default], () => {
                    let t = m.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
                        n = m.default.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
                        r = m.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
                        i = a(n).some(e => h.default.can(p.Permissions.VIEW_CHANNEL, e.channel)),
                        s = a(t).some(e => !(e.channel.id in n) && h.default.can(p.Permissions.VIEW_CHANNEL, e.channel)),
                        o = a(r).some(e => h.default.can(p.Permissions.VIEW_CHANNEL, e));
                    return {
                        hasActiveThreads: i || s || o,
                        hasMoreActiveThreads: o || s
                    }
                })
            }

            function y(e) {
                let t = (0, s.useStateFromStores)([f.default], () => f.default.getChannel(null == e ? void 0 : e.parent_id)),
                    n = (0, s.useStateFromStores)([h.default], () => null != t && h.default.can(p.Permissions.MANAGE_THREADS, t), [t]),
                    r = (0, s.useStateFromStores)([c.default], () => c.default.getId());
                return !!(null != e && null != t && e.isThread()) && (!!n || !e.isLockedThread() && (e.ownerId === r || !1))
            }

            function N(e, t) {
                return null != e && t.can(p.Permissions.SEND_MESSAGES_IN_THREADS, e)
            }

            function b(e, t, n) {
                var r;
                return !!(null != e && e.isThread()) && ((null === (r = e.threadMetadata) || void 0 === r ? void 0 : r.locked) ? n : t)
            }

            function I(e) {
                let t = (0, s.useStateFromStores)([h.default], () => N(e, h.default)),
                    n = D(e);
                return b(e, t, n)
            }

            function R(e) {
                let t = N(e, h.default),
                    n = function(e) {
                        return j(e, h.default)
                    }(e);
                return b(e, t, n)
            }

            function M(e) {
                var t;
                let n = (0, s.useStateFromStores)([h.default], () => null != e && h.default.can(p.Permissions.SEND_MESSAGES_IN_THREADS, e));
                return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && n)
            }

            function x(e) {
                var t;
                return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && h.default.can(p.Permissions.SEND_MESSAGES_IN_THREADS, e))
            }

            function P(e) {
                let t = h.default.can(p.Permissions.MANAGE_THREADS, e);
                return e.isArchivedLockedThread() && !t
            }

            function j(e, t) {
                return null != e && t.can(p.Permissions.MANAGE_THREADS, e)
            }

            function D(e) {
                return (0, s.useStateFromStores)([h.default], () => j(e, h.default))
            }

            function L(e) {
                let t = (0, l.default)(),
                    n = (0, s.useStateFromStores)([h.default], () => h.default.can(p.Permissions.CONNECT, e)),
                    r = M(e),
                    a = S.useExperiment({
                        guildId: e.guild_id,
                        location: "e791ea_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled;
                return !t && e.isVocalThread() && a && n && r
            }

            function w(e) {
                let t = D(e);
                return e.isLockedThread() && !t
            }
        },
        754474: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                BotTypes: function() {
                    return o.BotTagTypes
                },
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("414456"),
                i = n.n(a),
                s = n("79798"),
                o = n("988268"),
                l = n("888770"),
                u = e => {
                    let {
                        name: t,
                        discriminator: n,
                        invertBotTagColor: a,
                        nameColor: o,
                        className: u,
                        botType: d,
                        usernameClass: c,
                        discriminatorClass: f,
                        botClass: h,
                        botVerified: m = !1,
                        style: p,
                        useRemSizes: S = !1,
                        usernameIcon: E
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: i(u, l.nameTag),
                        style: p,
                        children: [(0, r.jsxs)("span", {
                            className: i(l.username, c),
                            style: null != o ? {
                                color: o
                            } : void 0,
                            children: [E, t]
                        }), null != n ? (0, r.jsxs)("span", {
                            className: null != f ? f : void 0,
                            children: ["#", n]
                        }) : null, null != d ? (0, r.jsx)(s.default, {
                            type: d,
                            invertColor: a,
                            className: i(h, l.bot),
                            verified: m,
                            useRemSizes: S
                        }) : null]
                    })
                }
        },
        62843: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MessagesInteractionContext: function() {
                    return a
                }
            });
            var r = n("884691");
            let a = r.createContext({
                disableInteractions: !1,
                disableAnimations: !1
            })
        },
        867544: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("669491"),
                i = n("469563"),
                s = n("163725"),
                o = n("75196"),
                l = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foregroundColor: s = a.default.unsafe_rawColors.RED_400.css,
                        foreground: l,
                        background: u,
                        ...d
                    } = e;
                    return (0, r.jsxs)("svg", {
                        ...(0, o.default)(d),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, r.jsx)("rect", {
                            fill: s,
                            className: l,
                            x: "2",
                            y: "21.2154",
                            width: "26",
                            height: "2",
                            transform: "rotate(-45 2 21.2154)"
                        }), (0, r.jsx)("path", {
                            fill: i,
                            className: u,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M10.1843 18.8115C10.7713 18.9328 11.3775 19 12 19C18.352 19 23 12 23 12C23 12 21.9643 10.4402 20.2026 8.79322L15.8265 13.1693C15.4393 14.4384 14.4382 15.4393 13.1694 15.8264L10.1843 18.8115ZM12.4818 8.02871C12.3238 8.00975 12.1631 8 12 8C9.791 8 8 9.79 8 12C8 12.1631 8.00975 12.3239 8.0287 12.4818L4.59645 15.914C2.35293 14.0375 1 12 1 12C1 12 5.648 5 12 5C13.0508 5 14.055 5.19157 14.9992 5.51132L12.4818 8.02871Z"
                        })]
                    })
                }, s.EyeSlashIcon)
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return s
                },
                copy: function() {
                    return o
                }
            });
            var r = n("281071"),
                a = n("773336"),
                i = n("50885");
            let s = (() => {
                if (a.isPlatformEmbedded) return null != i.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function o(e) {
                return !!s && (a.isPlatformEmbedded ? (i.default.copy(e), !0) : r.copy(e))
            }
        },
        281071: function(e, t, n) {
            "use strict";

            function r(e) {
                let t = document.body;
                if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let n = document.createRange(),
                    r = window.getSelection(),
                    a = document.createElement("textarea");
                a.value = e, a.contentEditable = "true", a.style.visibility = "none", t.appendChild(a), n.selectNodeContents(a), null == r || r.removeAllRanges(), null == r || r.addRange(n), a.focus(), a.setSelectionRange(0, e.length);
                let i = document.execCommand("copy");
                return t.removeChild(a), i
            }
            n.r(t), n.d(t, {
                copy: function() {
                    return r
                }
            })
        }
    }
]);
//# sourceMappingURL=b6df295784aed978940e.js.map