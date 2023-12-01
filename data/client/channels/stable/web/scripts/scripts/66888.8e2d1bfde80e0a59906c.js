(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["66888"], {
        430568: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return g
                }
            }), n("222007"), n("70102"), n("843762"), n("424973");
            var r = n("37983"),
                s = n("884691"),
                i = n("414456"),
                a = n.n(i),
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
                C = n("866190"),
                E = n("115279");
            class v extends s.PureComponent {
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
                            animated: s,
                            shouldAnimate: i,
                            isFocused: a,
                            isInteracting: o,
                            size: l = "default"
                        } = e,
                        {
                            hover: u
                        } = this.state;
                    if (null != t) return t;
                    if (null != n) {
                        let e = E.EMOJI_SIZE_MAP[l];
                        return p.default.getEmojiURL({
                            id: n,
                            animated: a && !0 === s && (!0 === i || u || !0 === o),
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
                        className: a("emoji", "emoji-text"),
                        children: n
                    }) : (i && (t = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }), (0, s.createElement)("img", {
                        ...p,
                        key: this.key,
                        src: S,
                        alt: null !== (e = null != u ? u : n) && void 0 !== e ? e : void 0,
                        draggable: !1,
                        ...t,
                        className: a("emoji", o, {
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
            v.defaultProps = {
                isInteracting: !1
            };
            let T = function(e) {
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
                            let s = r[1];
                            if (e.intersectionRatio >= .7) {
                                var i, a;
                                if (-1 !== t.indexOf(s)) return;
                                let n = Math.abs(e.intersectionRect.bottom - Number(null === (i = e.rootBounds) || void 0 === i ? void 0 : i.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (a = e.rootBounds) || void 0 === a ? void 0 : a.top));
                                n ? t.unshift(s) : t.push(s), s.forceUpdate(), n && t.length > 100 && t[100].forceUpdate()
                            } else {
                                let e = t.indexOf(s); - 1 !== e && (t.splice(e, 1), s.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate())
                            }
                        })
                    }, {
                        threshold: .7
                    });

                function a(e) {
                    let t = l.findDOMNode(e);
                    (0, u.isElement)(t) && (n.push([t, e]), i.observe(t))
                }

                function o(e) {
                    let r = l.findDOMNode(e);
                    i.unobserve(r);
                    let s = n.findIndex(t => {
                        let [n, r] = t;
                        return r === e
                    }); - 1 !== s && (n.splice(s, 1), -1 !== (s = t.indexOf(e)) && (t.splice(s, 1), s < 100 && t.length >= 100 && t[99].forceUpdate()))
                }
                return class extends s.Component {
                    shouldAutoplay(e) {
                        return e.animated && e.autoplay
                    }
                    componentDidMount() {
                        this.shouldAutoplay(this.props) && a(this)
                    }
                    componentDidUpdate(e) {
                        let t = this.shouldAutoplay(e),
                            n = this.shouldAutoplay(this.props);
                        n !== t && (n ? a(this) : o(this))
                    }
                    componentWillUnmount() {
                        this.shouldAutoplay(this.props) && o(this)
                    }
                    render() {
                        let n = t.indexOf(this),
                            {
                                autoplay: s,
                                allowAnimatedEmoji: i,
                                ...a
                            } = this.props;
                        return (0, r.jsx)(m.MessagesInteractionContext.Consumer, {
                            children: t => (0, r.jsx)(e, {
                                ...a,
                                autoplay: s || !1,
                                shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && i
                            })
                        })
                    }
                }
            }(v);

            function g(e) {
                let t = f.AnimateEmoji.useSetting(),
                    n = {
                        autoplay: null == e.autoplay ? t : e.autoplay,
                        allowAnimatedEmoji: t
                    },
                    s = __OVERLAY__ ? (0, d.useStateFromStores)([h.default], () => h.default.isInstanceFocused()) : (0, C.useIsWindowFocused)();
                return (0, r.jsx)(T, {
                    ...e,
                    ...n,
                    isFocused: s
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
            var s = n("414456"),
                i = n.n(s),
                a = n("446674"),
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
                    botType: s,
                    botVerified: a,
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
                    }) : void 0, null != s && (0, r.jsx)(u.default, {
                        type: s,
                        className: i(h.infoSpacing, p),
                        verified: a
                    })]
                })
            };
            var S = e => {
                let {
                    hideDiscriminator: t = !1,
                    user: n,
                    nick: s,
                    forceUsername: i,
                    showAccountIdentifier: o,
                    overrideDiscriminator: u,
                    forcePomelo: f,
                    ...h
                } = e, S = (0, a.useStateFromStores)([l.default], () => l.default.hidePersonalInformation), C = S || t || n.isNonUserBot(), E = n.toString(), v = c.default.getName(n), T = i ? E : null != s ? s : v, g = n.isPomelo() || f;
                if (g || T !== E) {
                    let e = T === E && g && i ? c.default.getUserTag(n, {
                            forcePomelo: f
                        }) : T,
                        t = o && e !== "@".concat(E) ? c.default.getUserTag(n) : void 0;
                    return (0, r.jsx)(p, {
                        primary: e,
                        secondary: t,
                        botVerified: n.isVerifiedBot(),
                        botType: m(n),
                        showStreamerModeTooltip: S && e !== v,
                        ...h
                    })
                }
                return (0, r.jsx)(d.default, {
                    name: T,
                    botType: m(n),
                    botVerified: n.isVerifiedBot(),
                    discriminator: C || T !== E ? null : null != u ? u : n.discriminator,
                    ...h
                })
            }
        },
        163725: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EyeSlashIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var s = n("669491"),
                i = n("75196");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: o = "",
                    ...l
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, i.default)(l),
                    width: t,
                    height: n,
                    viewBox: "0 0 24 24",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0, r.jsx)("path", {
                        d: "M1.29289 21.2929C0.902369 21.6834 0.902369 22.3166 1.29289 22.7071C1.68342 23.0976 2.31658 23.0976 2.70711 22.7071L22.7071 2.70711C23.0976 2.31658 23.0976 1.68342 22.7071 1.29289C22.3166 0.902369 21.6834 0.902369 21.2929 1.29289L1.29289 21.2929Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: o
                    }), (0, r.jsx)("path", {
                        d: "M3.16029 16.0466C3.3363 16.2904 3.68784 16.3122 3.9005 16.0995L4.62043 15.3796C4.79627 15.2037 4.81533 14.9258 4.67247 14.7223C3.99776 13.761 3.52594 12.8385 3.23686 12.1978C3.18003 12.0719 3.17994 11.9283 3.23676 11.8024C3.64531 10.897 4.41889 9.42841 5.61441 8.08307C7.12569 6.38242 9.19073 5 12 5C12.8215 5 13.5794 5.11821 14.2783 5.32803C14.4616 5.38304 14.6618 5.33819 14.7971 5.2029L15.6045 4.39555C15.8507 4.14933 15.7756 3.73364 15.4493 3.61191C14.4209 3.2282 13.2739 3 12 3C4.88713 3 1.72683 10.1146 1.1134 11.6925C1.035 11.8942 1.035 12.1058 1.1134 12.3075C1.35865 12.9383 2.01101 14.4542 3.16029 16.0466Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: o
                    }), (0, r.jsx)("path", {
                        d: "M8.17973 10.8108C8.04747 11.2362 8.53857 11.4614 8.85355 11.1464L11.1464 8.85355C11.4614 8.53857 11.2362 8.04747 10.8108 8.17973C9.55806 8.56927 8.56927 9.55807 8.17973 10.8108Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: o
                    }), (0, r.jsx)("path", {
                        d: "M12.8535 15.1464C12.5386 15.4614 12.7638 15.9525 13.1891 15.8203C14.4419 15.4307 15.4307 14.4419 15.8203 13.1892C15.9525 12.7638 15.4614 12.5386 15.1464 12.8536L12.8535 15.1464Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: o
                    }), (0, r.jsx)("path", {
                        d: "M9.72168 18.672C9.53843 18.617 9.3382 18.6618 9.20291 18.7971L8.39555 19.6045C8.14933 19.8507 8.22444 20.2664 8.55069 20.3881C9.57907 20.7718 10.7261 21 12 21C19.1129 21 22.2732 13.8854 22.8866 12.3075C22.965 12.1058 22.965 11.8942 22.8866 11.6925C22.6413 11.0617 21.989 9.54582 20.8397 7.95346C20.6637 7.70959 20.3122 7.68785 20.0995 7.90051L19.3796 8.62044C19.2037 8.79628 19.1847 9.07417 19.3275 9.27772C20.0022 10.239 20.474 11.1615 20.7631 11.8022C20.82 11.9281 20.82 12.0717 20.7632 12.1976C20.3547 13.103 19.5811 14.5716 18.3856 15.9169C16.8743 17.6176 14.8093 19 12 19C11.1785 19 10.4207 18.8818 9.72168 18.672Z",
                        fill: "string" == typeof a ? a : a.css,
                        className: o
                    })]
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
                s = n("76393");

            function i() {
                return (0, r.useStateFromStores)([s.default], () => null != s.default.getRemoteSessionId() || null != s.default.getAwaitingRemoteSessionInfo())
            }
        },
        300322: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                VoiceInThreadsExperiment: function() {
                    return S
                },
                useCanStartPublicThread: function() {
                    return C
                },
                computeCanStartPublicThread: function() {
                    return E
                },
                useCanStartPrivateThread: function() {
                    return v
                },
                useCanStartThread: function() {
                    return T
                },
                useCanViewThreadForMessage: function() {
                    return A
                },
                useHasActiveThreads: function() {
                    return _
                },
                useCanManageThread: function() {
                    return y
                },
                useCanUnarchiveThread: function() {
                    return b
                },
                canUnarchiveThread: function() {
                    return x
                },
                useIsActiveChannelOrUnarchivableThread: function() {
                    return I
                },
                getIsActiveChannelOrUnarchivableThread: function() {
                    return R
                },
                computeIsReadOnlyThread: function() {
                    return P
                },
                useIsThreadModerator: function() {
                    return j
                },
                useCanJoinThreadVoice: function() {
                    return D
                },
                useIsNonModInLockedThread: function() {
                    return w
                }
            });
            var r = n("917351"),
                s = n.n(r),
                i = n("316693"),
                a = n("446674"),
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

            function C(e, t) {
                let n = (0, a.useStateFromStores)([h.default], () => {
                    let t = e.isForumLikeChannel() ? p.Permissions.SEND_MESSAGES : i.default.combine(p.Permissions.CREATE_PUBLIC_THREADS, p.Permissions.READ_MESSAGE_HISTORY);
                    return h.default.can(t, e)
                }, [e]);
                return g(n, e, t)
            }

            function E(e, t) {
                let n = e.isForumLikeChannel() ? p.Permissions.SEND_MESSAGES : i.default.combine(p.Permissions.CREATE_PUBLIC_THREADS, p.Permissions.READ_MESSAGE_HISTORY),
                    r = h.default.can(n, e);
                return g(r, e, t)
            }

            function v(e) {
                let t = (0, a.useStateFromStores)([h.default], () => h.default.can(i.default.combine(p.Permissions.CREATE_PRIVATE_THREADS), e), [e]);
                return e.type === p.ChannelTypes.GUILD_TEXT && g(t, e)
            }

            function T(e) {
                let t = C(e),
                    n = v(e);
                return t || n
            }

            function g(e, t, n) {
                return !(__OVERLAY__ || !e || !d.THREADED_CHANNEL_TYPES.has(t.type) || null != n && (n.hasFlag(p.MessageFlags.HAS_THREAD) || (0, u.default)(n))) && !0
            }

            function A(e) {
                let t = (0, a.useStateFromStores)([f.default], () => f.default.getChannel(e.id), [e]),
                    n = (0, a.useStateFromStores)([h.default], () => h.default.can(p.Permissions.VIEW_CHANNEL, t), [t]);
                return function(e, t, n) {
                    return !!t.hasFlag(p.MessageFlags.HAS_THREAD) && null != n && !!e || !1
                }(n, e, t)
            }

            function _(e) {
                return (0, a.useStateFromStoresObject)([m.default, h.default], () => {
                    let t = m.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
                        n = m.default.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
                        r = m.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
                        i = s(n).some(e => h.default.can(p.Permissions.VIEW_CHANNEL, e.channel)),
                        a = s(t).some(e => !(e.channel.id in n) && h.default.can(p.Permissions.VIEW_CHANNEL, e.channel)),
                        o = s(r).some(e => h.default.can(p.Permissions.VIEW_CHANNEL, e));
                    return {
                        hasActiveThreads: i || a || o,
                        hasMoreActiveThreads: o || a
                    }
                })
            }

            function y(e) {
                let t = (0, a.useStateFromStores)([f.default], () => f.default.getChannel(null == e ? void 0 : e.parent_id)),
                    n = (0, a.useStateFromStores)([h.default], () => null != t && h.default.can(p.Permissions.MANAGE_THREADS, t), [t]),
                    r = (0, a.useStateFromStores)([c.default], () => c.default.getId());
                return !!(null != e && null != t && e.isThread()) && (!!n || !e.isLockedThread() && (e.ownerId === r || !1))
            }

            function N(e, t) {
                return null != e && t.can(p.Permissions.SEND_MESSAGES_IN_THREADS, e)
            }

            function M(e, t, n) {
                var r;
                return !!(null != e && e.isThread()) && ((null === (r = e.threadMetadata) || void 0 === r ? void 0 : r.locked) ? n : t)
            }

            function b(e) {
                let t = (0, a.useStateFromStores)([h.default], () => N(e, h.default)),
                    n = j(e);
                return M(e, t, n)
            }

            function x(e) {
                let t = N(e, h.default),
                    n = function(e) {
                        return L(e, h.default)
                    }(e);
                return M(e, t, n)
            }

            function I(e) {
                var t;
                let n = (0, a.useStateFromStores)([h.default], () => null != e && h.default.can(p.Permissions.SEND_MESSAGES_IN_THREADS, e));
                return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && n)
            }

            function R(e) {
                var t;
                return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && h.default.can(p.Permissions.SEND_MESSAGES_IN_THREADS, e))
            }

            function P(e) {
                let t = h.default.can(p.Permissions.MANAGE_THREADS, e);
                return e.isArchivedLockedThread() && !t
            }

            function L(e, t) {
                return null != e && t.can(p.Permissions.MANAGE_THREADS, e)
            }

            function j(e) {
                return (0, a.useStateFromStores)([h.default], () => L(e, h.default))
            }

            function D(e) {
                let t = (0, l.default)(),
                    n = (0, a.useStateFromStores)([h.default], () => h.default.can(p.Permissions.CONNECT, e)),
                    r = I(e),
                    s = S.useExperiment({
                        guildId: e.guild_id,
                        location: "e791ea_1"
                    }, {
                        autoTrackExposure: !1
                    }).enabled;
                return !t && e.isVocalThread() && s && n && r
            }

            function w(e) {
                let t = j(e);
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
            var s = n("414456"),
                i = n.n(s),
                a = n("79798"),
                o = n("988268"),
                l = n("888770"),
                u = e => {
                    let {
                        name: t,
                        discriminator: n,
                        invertBotTagColor: s,
                        nameColor: o,
                        className: u,
                        botType: d,
                        usernameClass: c,
                        discriminatorClass: f,
                        botClass: h,
                        botVerified: m = !1,
                        style: p,
                        useRemSizes: S = !1,
                        usernameIcon: C
                    } = e;
                    return (0, r.jsxs)("div", {
                        className: i(u, l.nameTag),
                        style: p,
                        children: [(0, r.jsxs)("span", {
                            className: i(l.username, c),
                            style: null != o ? {
                                color: o
                            } : void 0,
                            children: [C, t]
                        }), null != n ? (0, r.jsxs)("span", {
                            className: null != f ? f : void 0,
                            children: ["#", n]
                        }) : null, null != d ? (0, r.jsx)(a.default, {
                            type: d,
                            invertColor: s,
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
                    return s
                }
            });
            var r = n("884691");
            let s = r.createContext({
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
            var s = n("669491"),
                i = n("469563"),
                a = n("163725"),
                o = n("75196"),
                l = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foregroundColor: a = s.default.unsafe_rawColors.RED_400.css,
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
                            fill: a,
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
                }, a.EyeSlashIcon, void 0, {
                    size: 24
                })
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return a
                },
                copy: function() {
                    return o
                }
            }), n("70102");
            var r = n("281071"),
                s = n("773336"),
                i = n("50885");
            let a = (() => {
                if (s.isPlatformEmbedded) return null != i.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function o(e) {
                return !!a && (s.isPlatformEmbedded ? (i.default.copy(e), !0) : r.copy(e))
            }
        },
        281071: function(e, t, n) {
            "use strict";

            function r(e) {
                let t = document.body;
                if (null == t) throw Error("[Utils] ClipboardUtils.copy(): assert failed: document.body != null");
                let n = document.createRange(),
                    r = window.getSelection(),
                    s = document.createElement("textarea");
                s.value = e, s.contentEditable = "true", s.style.visibility = "none", t.appendChild(s), n.selectNodeContents(s), null == r || r.removeAllRanges(), null == r || r.addRange(n), s.focus(), s.setSelectionRange(0, e.length);
                let i = document.execCommand("copy");
                return t.removeChild(s), i
            }
            n.r(t), n.d(t, {
                copy: function() {
                    return r
                }
            }), n("70102")
        }
    }
]);
//# sourceMappingURL=66888.8e2d1bfde80e0a59906c.js.map