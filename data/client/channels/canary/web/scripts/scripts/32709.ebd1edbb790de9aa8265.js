(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["32709"], {
        430568: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return T
                }
            }), n("222007"), n("70102"), n("843762"), n("424973");
            var r = n("37983"),
                a = n("884691"),
                i = n("414456"),
                o = n.n(i),
                s = n("817736"),
                u = n.n(s),
                l = n("118810"),
                d = n("446674"),
                c = n("407063"),
                f = n("845579"),
                h = n("901165"),
                m = n("62843"),
                p = n("315102"),
                E = n("402671"),
                S = n("866190"),
                v = n("115279");
            class A extends a.PureComponent {
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
                            isFocused: o,
                            isInteracting: s,
                            size: u = "default"
                        } = e,
                        {
                            hover: l
                        } = this.state;
                    if (null != t) return t;
                    if (null != n) {
                        let e = v.EMOJI_SIZE_MAP[u];
                        return p.default.getEmojiURL({
                            id: n,
                            animated: o && !0 === a && (!0 === i || l || !0 === s),
                            size: e
                        })
                    }
                    if (null != r) return E.default.getURL(r)
                }
                render() {
                    var e;
                    let t;
                    let {
                        emojiName: n,
                        animated: i,
                        className: s,
                        size: u = "default",
                        alt: l,
                        shouldAnimate: d,
                        isFocused: c,
                        emojiId: f,
                        autoplay: h,
                        isInteracting: m,
                        ...p
                    } = this.props, E = this.getSrc();
                    return null == E || "" === E ? (0, r.jsx)("span", {
                        className: o("emoji", "emoji-text"),
                        children: n
                    }) : (i && (t = {
                        onMouseEnter: this.onMouseEnter,
                        onMouseLeave: this.onMouseLeave
                    }), (0, a.createElement)("img", {
                        ...p,
                        key: this.key,
                        src: E,
                        alt: null !== (e = null != l ? l : n) && void 0 !== e ? e : void 0,
                        draggable: !1,
                        ...t,
                        className: o("emoji", s, {
                            jumboable: "jumbo" === u
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
            let g = function(e) {
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
                                var i, o;
                                if (-1 !== t.indexOf(a)) return;
                                let n = Math.abs(e.intersectionRect.bottom - Number(null === (i = e.rootBounds) || void 0 === i ? void 0 : i.bottom)) < Math.abs(e.intersectionRect.top - Number(null === (o = e.rootBounds) || void 0 === o ? void 0 : o.top));
                                n ? t.unshift(a) : t.push(a), a.forceUpdate(), n && t.length > 100 && t[100].forceUpdate()
                            } else {
                                let e = t.indexOf(a); - 1 !== e && (t.splice(e, 1), a.forceUpdate(), e < 100 && t.length >= 100 && t[99].forceUpdate())
                            }
                        })
                    }, {
                        threshold: .7
                    });

                function o(e) {
                    let t = u.findDOMNode(e);
                    (0, l.isElement)(t) && (n.push([t, e]), i.observe(t))
                }

                function s(e) {
                    let r = u.findDOMNode(e);
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
                        this.shouldAutoplay(this.props) && o(this)
                    }
                    componentDidUpdate(e) {
                        let t = this.shouldAutoplay(e),
                            n = this.shouldAutoplay(this.props);
                        n !== t && (n ? o(this) : s(this))
                    }
                    componentWillUnmount() {
                        this.shouldAutoplay(this.props) && s(this)
                    }
                    render() {
                        let n = t.indexOf(this),
                            {
                                autoplay: a,
                                allowAnimatedEmoji: i,
                                ...o
                            } = this.props;
                        return (0, r.jsx)(m.MessagesInteractionContext.Consumer, {
                            children: t => (0, r.jsx)(e, {
                                ...o,
                                autoplay: a || !1,
                                shouldAnimate: -1 !== n && n < 100 && !t.disableAnimations && i
                            })
                        })
                    }
                }
            }(A);

            function T(e) {
                let t = f.AnimateEmoji.useSetting(),
                    n = {
                        autoplay: null == e.autoplay ? t : e.autoplay,
                        allowAnimatedEmoji: t
                    },
                    a = __OVERLAY__ ? (0, d.useStateFromStores)([h.default], () => h.default.isInstanceFocused()) : (0, S.useIsWindowFocused)();
                return (0, r.jsx)(g, {
                    ...e,
                    ...n,
                    isFocused: a
                })
            }
        },
        163725: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("962821");
            n.es(r, t)
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
                    return E
                },
                useCanStartPublicThread: function() {
                    return S
                },
                computeCanStartPublicThread: function() {
                    return v
                },
                useCanStartPrivateThread: function() {
                    return A
                },
                useCanStartThread: function() {
                    return g
                },
                useCanViewThreadForMessage: function() {
                    return C
                },
                useHasActiveThreads: function() {
                    return _
                },
                useCanManageThread: function() {
                    return I
                },
                useCanUnarchiveThread: function() {
                    return R
                },
                canUnarchiveThread: function() {
                    return b
                },
                useIsActiveChannelOrUnarchivableThread: function() {
                    return N
                },
                getIsActiveChannelOrUnarchivableThread: function() {
                    return P
                },
                computeIsReadOnlyThread: function() {
                    return x
                },
                useIsThreadModerator: function() {
                    return D
                },
                useCanJoinThreadVoice: function() {
                    return F
                },
                useIsNonModInLockedThread: function() {
                    return w
                }
            });
            var r = n("917351"),
                a = n.n(r),
                i = n("316693"),
                o = n("446674"),
                s = n("296892"),
                u = n("889014"),
                l = n("913491"),
                d = n("233069"),
                c = n("271938"),
                f = n("42203"),
                h = n("957255"),
                m = n("401690"),
                p = n("49111");
            let E = (0, s.default)({
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

            function S(e, t) {
                let n = (0, o.useStateFromStores)([h.default], () => {
                    let t = e.isForumLikeChannel() ? p.Permissions.SEND_MESSAGES : i.default.combine(p.Permissions.CREATE_PUBLIC_THREADS, p.Permissions.READ_MESSAGE_HISTORY);
                    return h.default.can(t, e)
                }, [e]);
                return T(n, e, t)
            }

            function v(e, t) {
                let n = e.isForumLikeChannel() ? p.Permissions.SEND_MESSAGES : i.default.combine(p.Permissions.CREATE_PUBLIC_THREADS, p.Permissions.READ_MESSAGE_HISTORY),
                    r = h.default.can(n, e);
                return T(r, e, t)
            }

            function A(e) {
                let t = (0, o.useStateFromStores)([h.default], () => h.default.can(i.default.combine(p.Permissions.CREATE_PRIVATE_THREADS), e), [e]);
                return e.type === p.ChannelTypes.GUILD_TEXT && T(t, e)
            }

            function g(e) {
                let t = S(e),
                    n = A(e);
                return t || n
            }

            function T(e, t, n) {
                return !(__OVERLAY__ || !e || !d.THREADED_CHANNEL_TYPES.has(t.type) || null != n && (n.hasFlag(p.MessageFlags.HAS_THREAD) || (0, l.default)(n))) && !0
            }

            function C(e) {
                let t = (0, o.useStateFromStores)([f.default], () => f.default.getChannel(e.id), [e]),
                    n = (0, o.useStateFromStores)([h.default], () => h.default.can(p.Permissions.VIEW_CHANNEL, t), [t]);
                return function(e, t, n) {
                    return !!t.hasFlag(p.MessageFlags.HAS_THREAD) && null != n && !!e || !1
                }(n, e, t)
            }

            function _(e) {
                return (0, o.useStateFromStoresObject)([m.default, h.default], () => {
                    let t = m.default.getActiveJoinedThreadsForParent(e.guild_id, e.id),
                        n = m.default.getActiveJoinedRelevantThreadsForParent(e.guild_id, e.id),
                        r = m.default.getActiveUnjoinedThreadsForParent(e.guild_id, e.id),
                        i = a(n).some(e => h.default.can(p.Permissions.VIEW_CHANNEL, e.channel)),
                        o = a(t).some(e => !(e.channel.id in n) && h.default.can(p.Permissions.VIEW_CHANNEL, e.channel)),
                        s = a(r).some(e => h.default.can(p.Permissions.VIEW_CHANNEL, e));
                    return {
                        hasActiveThreads: i || o || s,
                        hasMoreActiveThreads: s || o
                    }
                })
            }

            function I(e) {
                let t = (0, o.useStateFromStores)([f.default], () => f.default.getChannel(null == e ? void 0 : e.parent_id)),
                    n = (0, o.useStateFromStores)([h.default], () => null != t && h.default.can(p.Permissions.MANAGE_THREADS, t), [t]),
                    r = (0, o.useStateFromStores)([c.default], () => c.default.getId());
                return !!(null != e && null != t && e.isThread()) && (!!n || !e.isLockedThread() && (e.ownerId === r || !1))
            }

            function M(e, t) {
                return null != e && t.can(p.Permissions.SEND_MESSAGES_IN_THREADS, e)
            }

            function y(e, t, n) {
                var r;
                return !!(null != e && e.isThread()) && ((null === (r = e.threadMetadata) || void 0 === r ? void 0 : r.locked) ? n : t)
            }

            function R(e) {
                let t = (0, o.useStateFromStores)([h.default], () => M(e, h.default)),
                    n = D(e);
                return y(e, t, n)
            }

            function b(e) {
                let t = M(e, h.default),
                    n = function(e) {
                        return L(e, h.default)
                    }(e);
                return y(e, t, n)
            }

            function N(e) {
                var t;
                let n = (0, o.useStateFromStores)([h.default], () => null != e && h.default.can(p.Permissions.SEND_MESSAGES_IN_THREADS, e));
                return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && n)
            }

            function P(e) {
                var t;
                return null != e && (!e.isThread() || e.isActiveThread() || e.isArchivedThread() && (null === (t = e.threadMetadata) || void 0 === t ? void 0 : t.locked) !== !0 && h.default.can(p.Permissions.SEND_MESSAGES_IN_THREADS, e))
            }

            function x(e) {
                let t = h.default.can(p.Permissions.MANAGE_THREADS, e);
                return e.isArchivedLockedThread() && !t
            }

            function L(e, t) {
                return null != e && t.can(p.Permissions.MANAGE_THREADS, e)
            }

            function D(e) {
                return (0, o.useStateFromStores)([h.default], () => L(e, h.default))
            }

            function F(e) {
                let t = (0, u.default)(),
                    n = (0, o.useStateFromStores)([h.default], () => h.default.can(p.Permissions.CONNECT, e)),
                    r = N(e),
                    a = E.useExperiment({
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
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("669491"),
                i = n("469563"),
                o = n("163725"),
                s = n("75196"),
                u = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foregroundColor: o = a.default.unsafe_rawColors.RED_400.css,
                        foreground: u,
                        background: l,
                        ...d
                    } = e;
                    return (0, r.jsxs)("svg", {
                        ...(0, s.default)(d),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, r.jsx)("rect", {
                            fill: o,
                            className: u,
                            x: "2",
                            y: "21.2154",
                            width: "26",
                            height: "2",
                            transform: "rotate(-45 2 21.2154)"
                        }), (0, r.jsx)("path", {
                            fill: i,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M10.1843 18.8115C10.7713 18.9328 11.3775 19 12 19C18.352 19 23 12 23 12C23 12 21.9643 10.4402 20.2026 8.79322L15.8265 13.1693C15.4393 14.4384 14.4382 15.4393 13.1694 15.8264L10.1843 18.8115ZM12.4818 8.02871C12.3238 8.00975 12.1631 8 12 8C9.791 8 8 9.79 8 12C8 12.1631 8.00975 12.3239 8.0287 12.4818L4.59645 15.914C2.35293 14.0375 1 12 1 12C1 12 5.648 5 12 5C13.0508 5 14.055 5.19157 14.9992 5.51132L12.4818 8.02871Z"
                        })]
                    })
                }, o.EyeSlashIcon, void 0, {
                    size: 24
                })
        },
        306160: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                SUPPORTS_COPY: function() {
                    return o
                },
                copy: function() {
                    return s
                }
            }), n("70102");
            var r = n("281071"),
                a = n("773336"),
                i = n("50885");
            let o = (() => {
                if (a.isPlatformEmbedded) return null != i.default.copy;
                try {
                    return document.queryCommandEnabled("copy") || document.queryCommandSupported("copy")
                } catch (e) {
                    return !1
                }
            })();

            function s(e) {
                return !!o && (a.isPlatformEmbedded ? (i.default.copy(e), !0) : r.copy(e))
            }
        },
        962821: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                EyeSlashIcon: function() {
                    return o
                }
            });
            var r = n("37983");
            n("884691");
            var a = n("669491"),
                i = n("82169");
            let o = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: o = a.default.colors.INTERACTIVE_NORMAL,
                    colorClass: s = "",
                    ...u
                } = e;
                return (0, r.jsxs)("svg", {
                    ...(0, i.default)(u),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: [(0, r.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M1.3 21.3a1 1 0 1 0 1.4 1.4l20-20a1 1 0 0 0-1.4-1.4l-20 20ZM3.16 16.05c.18.24.53.26.74.05l.72-.72c.18-.18.2-.45.05-.66a15.7 15.7 0 0 1-1.43-2.52.48.48 0 0 1 0-.4c.4-.9 1.18-2.37 2.37-3.72C7.13 6.38 9.2 5 12 5c.82 0 1.58.12 2.28.33.18.05.38 0 .52-.13l.8-.8c.25-.25.18-.67-.15-.79A9.79 9.79 0 0 0 12 3C4.89 3 1.73 10.11 1.11 11.7a.83.83 0 0 0 0 .6c.25.64.9 2.15 2.05 3.75Z",
                        className: s
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M8.18 10.81c-.13.43.36.65.67.34l2.3-2.3c.31-.31.09-.8-.34-.67a4 4 0 0 0-2.63 2.63ZM12.85 15.15c-.31.31-.09.8.34.67a4.01 4.01 0 0 0 2.63-2.63c.13-.43-.36-.65-.67-.34l-2.3 2.3Z",
                        className: s
                    }), (0, r.jsx)("path", {
                        fill: "string" == typeof o ? o : o.css,
                        d: "M9.72 18.67a.52.52 0 0 0-.52.13l-.8.8c-.25.25-.18.67.15.79 1.03.38 2.18.61 3.45.61 7.11 0 10.27-7.11 10.89-8.7a.83.83 0 0 0 0-.6c-.25-.64-.9-2.15-2.05-3.75a.49.49 0 0 0-.74-.05l-.72.72a.51.51 0 0 0-.05.66 15.7 15.7 0 0 1 1.43 2.52c.06.13.06.27 0 .4-.4.9-1.18 2.37-2.37 3.72C16.87 17.62 14.8 19 12 19c-.82 0-1.58-.12-2.28-.33Z",
                        className: s
                    })]
                })
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
            }), n("70102")
        }
    }
]);
//# sourceMappingURL=32709.ebd1edbb790de9aa8265.js.map