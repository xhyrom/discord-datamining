(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["94628"], {
        735890: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return u
                }
            });
            var s = i("37983");
            i("884691");
            var n = i("77078"),
                a = i("452804"),
                l = i("135230"),
                r = i("168973"),
                o = i("782340");

            function u(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : () => {},
                    i = () => {
                        a.default.updatedUnsyncedSettings({
                            disableEmbeddedActivityPopOutAlert: !0
                        }), e()
                    },
                    u = !r.default.disableEmbeddedActivityPopOutAlert;
                u ? (0, n.openModal)(n => (0, s.jsx)(l.default, {
                    confirmText: o.default.Messages.EMBEDDED_ACTIVITIES_YEP,
                    secondaryConfirmText: o.default.Messages.DONT_ASK_AGAIN,
                    title: o.default.Messages.EMBEDDED_ACTIVITIES_CAREFUL,
                    cancelText: o.default.Messages.EMBEDDED_ACTIVITIES_NVM,
                    onConfirm: e,
                    onConfirmSecondary: i,
                    onCancel: t,
                    body: o.default.Messages.EMBEDDED_ACTIVITIES_POP_OUT_WARNING,
                    ...n
                })) : e()
            }
        },
        836087: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return O
                }
            });
            var s = i("37983"),
                n = i("884691"),
                a = i("414456"),
                l = i.n(a),
                r = i("917351"),
                o = i.n(r),
                u = i("446674"),
                d = i("862337"),
                c = i("77078"),
                h = i("272030"),
                f = i("901582"),
                p = i("373469"),
                g = i("697218"),
                m = i("427302"),
                v = i("462579"),
                P = i("449008"),
                _ = i("387111"),
                S = i("99795"),
                T = i("49111"),
                M = i("782340"),
                E = i("2081");

            function I(e, t) {
                switch (e) {
                    case S.ParticipantTypes.ACTIVITY:
                        return M.default.Messages.EMBEDDED_ACTIVITIES_NUM_PARTICIPANTS.format({
                            numUsers: t
                        });
                    case S.ParticipantTypes.STREAM:
                        return M.default.Messages.SPECTATORS.format({
                            numViewers: t
                        });
                    default:
                        throw Error("Unknown participant type.")
                }
            }

            function x(e) {
                let {
                    users: t,
                    disableInteraction: i,
                    guildId: n,
                    participantType: a,
                    channelId: r,
                    handleUserContextMenu: o
                } = e, u = I(a, t.length);
                return (0, s.jsx)(c.Dialog, {
                    "aria-label": u,
                    className: E.popoutWrapper,
                    children: (0, s.jsxs)(c.Scroller, {
                        className: E.scroller,
                        children: [(0, s.jsx)(c.Heading, {
                            variant: "heading-deprecated-12/semibold",
                            className: E.memberListHeader,
                            children: u
                        }), (0, s.jsx)("div", {
                            children: t.map(e => (0, s.jsx)(m.default, {
                                guildId: null != n ? n : void 0,
                                className: l(E.memberListItem, {
                                    [E.popoutDisabled]: i
                                }),
                                textClassName: E.memberListItemText,
                                user: e,
                                disablePopout: i,
                                nick: _.default.getNickname(n, r, e),
                                onContextMenu: t => i ? null : o(t, e)
                            }, e.id))
                        })]
                    })
                })
            }

            function C(e) {
                let {
                    users: t,
                    guildId: i,
                    channelId: n,
                    maxVisibleUsers: a = 3,
                    className: r,
                    participantType: o
                } = e, u = I(o, t.length), d = t.length < a ? t.map(e => (0, s.jsx)("div", {
                    className: E.viewersTooltipItem,
                    children: _.default.getName(i, n, e)
                }, e.id)) : u;
                return (0, s.jsx)(c.TooltipContainer, {
                    text: d,
                    "aria-label": u,
                    children: (0, s.jsxs)("div", {
                        className: l(E.viewers, r),
                        children: [(0, s.jsx)(v.default, {
                            className: E.viewersIcon
                        }), (0, s.jsx)("span", {
                            "aria-hidden": "true",
                            children: t.length
                        })]
                    })
                })
            }
            let y = [];

            function O(e) {
                let {
                    channelId: t,
                    guildId: a,
                    participant: r,
                    className: m,
                    compact: v = !1,
                    disableInteraction: _ = !1,
                    maxVisibleUsers: M = 3
                } = e, [I, O] = n.useState(!1), D = n.useRef(new d.DelayedCall(150, () => O(!1))), w = (0, u.useStateFromStoresArray)([p.default, g.default], () => {
                    if (r.type === S.ParticipantTypes.STREAM) {
                        let e = p.default.getViewerIds(r.id);
                        return e.length > 0 ? e.map(e => g.default.getUser(e)).filter(P.isNotNullish) : y
                    }
                    return r.type === S.ParticipantTypes.ACTIVITY ? r.participants.size > 0 ? Array.from(r.participants).map(e => g.default.getUser(e)).filter(P.isNotNullish) : y : y
                }, [r]), A = n.useCallback(() => {
                    D.current.cancel(), O(!0)
                }, []), b = n.useCallback(() => {
                    D.current.delay()
                }, []), N = n.useCallback((e, t) => {
                    A(), (0, h.openContextMenuLazy)(e, async () => {
                        let {
                            default: e
                        } = await i.el("406784").then(i.bind(i, "406784"));
                        return i => (0, s.jsx)(e, {
                            ...i,
                            user: t
                        })
                    }, {
                        onClose: b
                    })
                }, [b, A]);
                if (0 === w.length) return null;
                if (v) return (0, s.jsx)(C, {
                    maxVisibleUsers: M,
                    users: w,
                    guildId: a,
                    channelId: t,
                    className: m,
                    participantType: r.type
                });
                let V = o(w).take(M).map(e => (0, s.jsx)(c.Avatar, {
                    src: e.getAvatarURL(a, 24),
                    "aria-label": e.username,
                    size: c.AvatarSizes.SIZE_24,
                    className: E.viewer
                }, e.id)).value();
                return w.length > M && (V[V.length - 1] = (0, s.jsxs)("div", {
                    className: E.overflow,
                    children: ["+", w.length - M + 1]
                }, "overflow")), (0, s.jsx)(f.default, {
                    section: T.AnalyticsSections.STREAM_VIEWER_POPOUT,
                    children: (0, s.jsx)("div", {
                        onMouseEnter: A,
                        onMouseLeave: b,
                        children: (0, s.jsx)(c.Popout, {
                            renderPopout: () => (0, s.jsx)(x, {
                                participantType: r.type,
                                handleUserContextMenu: N,
                                guildId: a,
                                channelId: t,
                                users: w,
                                disableInteraction: _
                            }),
                            shouldShow: I,
                            position: "top",
                            children: () => (0, s.jsx)("div", {
                                className: l(E.viewers, m),
                                children: V
                            })
                        })
                    })
                })
            }
        },
        567469: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                useStageParticipants: function() {
                    return r
                },
                useStageParticipantsCount: function() {
                    return o
                },
                useSortedRequestToSpeakParticipants: function() {
                    return u
                },
                useActualStageSpeakerCount: function() {
                    return d
                }
            });
            var s = i("446674"),
                n = i("334572"),
                a = i("488464"),
                l = i("998716");

            function r(e, t) {
                let [i] = (0, s.useStateFromStores)([a.default], () => [a.default.getMutableParticipants(e, t), a.default.getParticipantsVersion(e)], [e, t], n.isVersionEqual);
                return i
            }

            function o(e, t) {
                return (0, s.useStateFromStores)([a.default], () => a.default.getParticipantCount(e, t), [e, t])
            }

            function u(e) {
                let [t] = (0, s.useStateFromStores)([a.default], () => {
                    let t = a.default.getMutableRequestToSpeakParticipants(e);
                    return [t, a.default.getRequestToSpeakParticipantsVersion(e)]
                }, [e], n.isVersionEqual);
                return t
            }

            function d(e) {
                return (0, s.useStateFromStores)([a.default], () => {
                    let t = a.default.getMutableParticipants(e, l.StageChannelParticipantNamedIndex.SPEAKER),
                        i = t.filter(e => e.type === l.StageChannelParticipantTypes.VOICE);
                    return i.length
                }, [e])
            }
        },
        924872: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                useShowStageMusicMuteButton: function() {
                    return _
                },
                shouldShowStageMusicMuteButton: function() {
                    return S
                },
                default: function() {
                    return M
                }
            });
            var s = i("446674"),
                n = i("689988"),
                a = i("42203"),
                l = i("42887"),
                r = i("18494"),
                o = i("800762"),
                u = i("709681"),
                d = i("488464"),
                c = i("567469"),
                h = i("998716"),
                f = i("834052"),
                p = i("274438");
            let g = e => e / 400,
                m = !1,
                v = (0, u.createSound)("stage_waiting", "stage_waiting", g(l.default.getOutputVolume()));

            function P() {
                let e = r.default.getVoiceChannelId();
                if (null == e) {
                    v.stop(), m = !1;
                    return
                }
                let t = a.default.getChannel(e);
                if (!(null == t ? void 0 : t.isGuildStageVoice())) {
                    v.stop(), m = !1;
                    return
                }
                let i = l.default.isSelfDeaf();
                if (i) {
                    v.stop(), m = !1;
                    return
                }
                let s = p.default.shouldPlay();
                if (s) {
                    v.volume = g(l.default.getOutputVolume()), v.loop(), m = !0;
                    return
                }
                let n = f.default.isLive(e);
                if (n) {
                    v.stop(), m = !1;
                    return
                }
                let u = p.default.isMuted();
                if (u) {
                    v.pause(), m = !1;
                    return
                }
                let d = null != Object.values(o.default.getVoiceStatesForChannel(e)).find(e => !e.suppress && !e.isVoiceMuted());
                d || m ? d && (v.pause(), m = !1) : (v.volume = g(l.default.getOutputVolume()), v.loop(), m = !0)
            }

            function _(e) {
                let t = (0, s.useStateFromStores)([r.default], () => r.default.getVoiceChannelId() === e),
                    i = (0, c.useStageParticipants)(e, h.StageChannelParticipantNamedIndex.SPEAKER),
                    n = null != i.find(e => !e.voiceState.isVoiceMuted()),
                    a = (0, s.useStateFromStores)([f.default], () => f.default.getStageInstanceByChannel(e));
                return t && null == a && !n
            }

            function S(e) {
                let t = r.default.getVoiceChannelId() === e,
                    i = d.default.getMutableParticipants(e, h.StageChannelParticipantNamedIndex.SPEAKER),
                    s = null != i.find(e => !e.voiceState.isVoiceMuted()),
                    n = f.default.getStageInstanceByChannel(e);
                return t && null == n && !s
            }
            class T extends n.default {
                handleVoiceChannelSelect(e) {
                    let {
                        channelId: t
                    } = e;
                    if (null != t) {
                        let e = a.default.getChannel(t);
                        (null == e ? void 0 : e.isGuildStageVoice()) ? P(): (v.stop(), m = !1)
                    } else v.stop(), m = !1
                }
                handleLogout() {
                    v.stop(), m = !1
                }
                handlePlay(e) {
                    let {
                        play: t
                    } = e;
                    t ? P() : (v.pause(), m = !1)
                }
                handleMute(e) {
                    let {
                        muted: t
                    } = e;
                    t ? (v.pause(), m = !1) : P()
                }
                handleVoiceStateUpdates() {
                    P()
                }
                handleSetOutputVolume(e) {
                    let {
                        volume: t
                    } = e;
                    v.volume = g(t)
                }
                handleToggleSelfDeaf() {
                    P()
                }
                constructor(...e) {
                    super(...e), this.actions = {
                        VOICE_CHANNEL_SELECT: this.handleVoiceChannelSelect,
                        LOGOUT: this.handleLogout,
                        STAGE_MUSIC_MUTE: this.handleMute,
                        STAGE_MUSIC_PLAY: this.handlePlay,
                        VOICE_STATE_UPDATES: this.handleVoiceStateUpdates,
                        AUDIO_SET_OUTPUT_VOLUME: this.handleSetOutputVolume,
                        AUDIO_TOGGLE_SELF_DEAF: this.handleToggleSelfDeaf
                    }
                }
            }
            var M = new T
        },
        274438: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return o
                }
            });
            var s = i("446674"),
                n = i("913144");
            let a = !1,
                l = !1;
            class r extends s.default.DeviceSettingsStore {
                initialize(e) {
                    null != e && (a = e)
                }
                isMuted() {
                    return a
                }
                shouldPlay() {
                    return l
                }
                getUserAgnosticState() {
                    return a
                }
            }
            r.displayName = "StageMusicStore", r.persistKey = "StageMusicStore";
            var o = new r(n.default, {
                STAGE_MUSIC_MUTE: function(e) {
                    let {
                        muted: t
                    } = e;
                    a = t, l = !1
                },
                STAGE_MUSIC_PLAY: function(e) {
                    let {
                        play: t
                    } = e;
                    l = t
                },
                VOICE_CHANNEL_SELECT: function() {
                    l = !1
                }
            })
        },
        109489: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return g
                }
            });
            var s = i("37983"),
                n = i("884691"),
                a = i("414456"),
                l = i.n(a),
                r = i("255397"),
                o = i("256170"),
                u = i("155207"),
                d = i("981913"),
                c = i("782340"),
                h = i("789749");

            function f(e) {
                let {
                    className: t,
                    isVertical: i
                } = e;
                return (0, s.jsxs)("div", {
                    className: h.iconContainer,
                    children: [(0, s.jsx)(o.default, {
                        className: l(i ? h.upCaret : h.leftCaret, t)
                    }), (0, s.jsx)(u.default, {
                        className: l(h.members, t)
                    })]
                })
            }

            function p(e) {
                let {
                    className: t,
                    isVertical: i
                } = e;
                return (0, s.jsxs)("div", {
                    className: h.iconContainer,
                    children: [(0, s.jsx)(o.default, {
                        className: l(i ? h.downCaret : h.rightCaret, t)
                    }), i && (0, s.jsx)(u.default, {
                        className: l(h.members, t)
                    })]
                })
            }

            function g(e) {
                let {
                    channelId: t,
                    className: i,
                    isParticipantsOpen: a,
                    isVertical: o = !1,
                    hideTooltip: u = !1
                } = e, g = n.useCallback(e => {
                    let {
                        className: t
                    } = e;
                    return a ? (0, s.jsx)(p, {
                        className: t,
                        isVertical: o
                    }) : (0, s.jsx)(f, {
                        className: t,
                        isVertical: o
                    })
                }, [a, o]);
                return (0, s.jsx)(d.default, {
                    label: a ? c.default.Messages.VIDEO_CALL_HIDE_MEMBERS : c.default.Messages.VIDEO_CALL_SHOW_MEMBERS,
                    className: l(h.participantsButton, i),
                    onClick: function() {
                        r.default.toggleParticipants(t, !a)
                    },
                    iconComponent: g,
                    shouldShowTooltip: !u
                })
            }
        },
        325753: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                default: function() {
                    return c
                }
            });
            var s = i("37983"),
                n = i("884691"),
                a = i("817736"),
                l = i("458960"),
                r = i("118810"),
                o = i("49111");
            let u = (e, t) => {
                let {
                    x: i,
                    y: s
                } = e, {
                    x: n,
                    y: a
                } = t;
                return Math.pow(i - n, 2) + Math.pow(s - a, 2)
            };
            class d extends n.PureComponent {
                componentDidMount() {
                    let {
                        initialX: e,
                        initialY: t
                    } = this.props;
                    this.setPosition(e, t)
                }
                componentWillUnmount() {
                    this._removeListeners()
                }
                animateToPosition(e, t) {
                    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        s = arguments.length > 3 ? arguments[3] : void 0,
                        n = !(arguments.length > 4) || void 0 === arguments[4] || arguments[4];
                    n && this.grabDimensions();
                    let a = this.translate(e, t);
                    l.default.spring(this.state.position, {
                        toValue: {
                            x: a.x,
                            y: a.y
                        },
                        ...i
                    }).start(s)
                }
                setPosition(e, t) {
                    let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
                    i && this.grabDimensions();
                    let s = this.translate(e, t);
                    this.state.position.setValue({
                        x: s.x,
                        y: s.y
                    })
                }
                grabDimensions() {
                    let e = (0, a.findDOMNode)(this._ref);
                    (0, r.isElement)(e) && (this._height = e.clientHeight, this._width = e.clientWidth)
                }
                translate(e, t) {
                    let {
                        maxX: i,
                        maxY: s
                    } = this.props;
                    return e < 0 ? e = 0 : e > i - this._width && (e = i - this._width), t < 0 ? t = 0 : t > s - this._height && (t = s - this._height), {
                        x: e,
                        y: t
                    }
                }
                render() {
                    let {
                        dragging: e,
                        position: t
                    } = this.state, {
                        className: i,
                        children: n
                    } = this.props, a = [0, 1], r = ["0px", "1px"], o = l.default.accelerate({
                        pointerEvents: e ? "none" : "auto",
                        transform: [{
                            translateX: t.x.interpolate({
                                inputRange: a,
                                outputRange: r
                            })
                        }, {
                            translateY: t.y.interpolate({
                                inputRange: a,
                                outputRange: r
                            })
                        }],
                        ...this.props.style
                    });
                    return (0, s.jsx)(l.default.div, {
                        ref: this.handleSetRef,
                        className: i,
                        onMouseDown: this.handleMouseDown,
                        style: o,
                        children: n
                    })
                }
                constructor(e) {
                    super(e), this._height = 0, this._width = 0, this._dragStart = {
                        x: 0,
                        y: 0
                    }, this._offsetX = 0, this._offsetY = 0, this._removeListeners = () => {}, this.handleSetRef = e => {
                        this._ref = e
                    }, this.handleMouseDown = e => {
                        let {
                            dragAnywhere: t,
                            disabled: i,
                            selector: s
                        } = this.props;
                        if (i) return;
                        let {
                            position: n
                        } = this.state, a = e.target;
                        if (e.button === o.MouseButtons.PRIMARY && (t || null != s && a.matches(s))) {
                            this.grabDimensions(), this._dragStart = {
                                x: e.clientX,
                                y: e.clientY
                            }, this._offsetX = e.clientX - n.x._value, this._offsetY = e.clientY - n.y._value;
                            let t = e.nativeEvent.view;
                            this._removeListeners(), t.addEventListener("mousemove", this.handleMouseMove), t.addEventListener("mouseup", this.handleMouseUp), this._removeListeners = () => {
                                t.removeEventListener("mousemove", this.handleMouseMove), t.removeEventListener("mouseup", this.handleMouseUp)
                            }
                        }
                    }, this.handleMouseMove = e => {
                        e.preventDefault();
                        let {
                            onDragStart: t,
                            onDrag: i,
                            disabled: s
                        } = this.props;
                        if (s) return;
                        let {
                            dragging: n,
                            dragging: a
                        } = this.state;
                        !n && u(this._dragStart, {
                            x: e.clientX,
                            y: e.clientY
                        }) > 9 && (n = !0), n && (this.animateToPosition(e.clientX - this._offsetX, e.clientY - this._offsetY, {
                            tension: 80,
                            friction: 8
                        }, null, !1), this.setState({
                            dragging: n
                        }, () => {
                            !a && (null == t || t(e.clientX, e.clientY)), null == i || i(e.clientX, e.clientY)
                        }))
                    }, this.handleMouseUp = e => {
                        this._removeListeners(), this.state.dragging && this.setState({
                            dragging: !1
                        }, () => {
                            let {
                                onDragEnd: t
                            } = this.props;
                            null == t || t(e.clientX, e.clientY)
                        })
                    };
                    let t = new l.default.Value(e.initialX),
                        i = new l.default.Value(e.initialY);
                    this.state = {
                        dragging: !1,
                        position: new l.default.ValueXY({
                            x: t,
                            y: i
                        })
                    }
                }
            }
            d.defaultProps = {
                maxX: 0,
                maxY: 0,
                initialX: 0,
                initialY: 0,
                disabled: !1,
                dragAnywhere: !1
            };
            var c = d
        },
        457112: function(e, t, i) {
            "use strict";
            i.r(t), i.d(t, {
                PictureInPictureWindow: function() {
                    return p
                },
                default: function() {
                    return g
                }
            });
            var s = i("37983"),
                n = i("884691"),
                a = i("414456"),
                l = i.n(a),
                r = i("817736"),
                o = i("773336"),
                u = i("325753"),
                d = i("49111"),
                c = i("925201"),
                h = i("212029");
            let f = {
                top: 80,
                bottom: 132,
                left: 80
            };
            class p extends n.PureComponent {
                componentDidMount() {
                    this.setPosition(this.props.position)
                }
                componentDidUpdate(e) {
                    (e.edgeOffsetTop !== this.props.edgeOffsetTop || e.edgeOffsetLeft !== this.props.edgeOffsetLeft || e.edgeOffsetBottom !== this.props.edgeOffsetBottom || e.edgeOffsetRight !== this.props.edgeOffsetRight || e.maxX !== this.props.maxX || e.maxY !== this.props.maxY || e.dockedRect !== this.props.dockedRect || e.roundCorners !== this.props.roundCorners) && this.ensureIsInPosition()
                }
                componentWillUnmount() {
                    var e;
                    null === (e = this._resizeObserver) || void 0 === e || e.disconnect()
                }
                getPosition(e) {
                    let t = (0, r.findDOMNode)(this._innerDiv);
                    if (null != t) {
                        let e = t.getBoundingClientRect();
                        this._width = e.width, this._height = e.height
                    }
                    let {
                        edgeOffsetTop: i,
                        edgeOffsetLeft: s,
                        edgeOffsetBottom: n,
                        edgeOffsetRight: a,
                        maxX: l,
                        maxY: u,
                        dockedRect: c
                    } = this.props, h = Math.round(i), f = Math.round(u - n - this._height), p = Math.round(s), g = Math.round(l - a - this._width), m = (0, o.getPlatform)(), v = m !== o.PlatformTypes.WEB && this.inPopout ? 22 : 0;
                    if (null != c) {
                        var P, _;
                        return {
                            y: (null !== (P = null == c ? void 0 : c.y) && void 0 !== P ? P : 0) - v,
                            x: null !== (_ = null == c ? void 0 : c.x) && void 0 !== _ ? _ : 0
                        }
                    }
                    switch (e) {
                        case d.PictureInPicturePositions.TOP_LEFT:
                            return {
                                y: h, x: p
                            };
                        case d.PictureInPicturePositions.BOTTOM_LEFT:
                            return {
                                y: f, x: p
                            };
                        case d.PictureInPicturePositions.TOP_RIGHT:
                            return {
                                y: h, x: g
                            };
                        default:
                            return {
                                y: f, x: g
                            }
                    }
                }
                setPosition(e) {
                    var t;
                    let {
                        x: i,
                        y: s
                    } = this.getPosition(e);
                    null === (t = this._draggable) || void 0 === t || t.setPosition(i, s)
                }
                animateToPosition(e, t) {
                    var i;
                    let {
                        x: s,
                        y: n
                    } = this.getPosition(e);
                    null === (i = this._draggable) || void 0 === i || i.animateToPosition(s, n, {}, t)
                }
                calculateDecayingPosition(e, t, i, s) {
                    return {
                        x: e + 200 * i,
                        y: t + 200 * s
                    }
                }
                getXOffset() {
                    let {
                        position: e,
                        edgeOffsetLeft: t,
                        edgeOffsetRight: i
                    } = this.props;
                    switch (e) {
                        case d.PictureInPicturePositions.TOP_LEFT:
                        case d.PictureInPicturePositions.BOTTOM_LEFT:
                            return -t;
                        default:
                            return i
                    }
                }
                getYOffset() {
                    let {
                        position: e,
                        edgeOffsetTop: t,
                        edgeOffsetBottom: i
                    } = this.props;
                    switch (e) {
                        case d.PictureInPicturePositions.TOP_LEFT:
                        case d.PictureInPicturePositions.TOP_RIGHT:
                            return -t;
                        default:
                            return i
                    }
                }
                get inPopout() {
                    return this.props.appContext === d.AppContext.POPOUT
                }
                render() {
                    let {
                        maxX: e,
                        maxY: t,
                        dockedRect: i,
                        hidden: n,
                        roundCorners: a
                    } = this.props, r = {};
                    return null != i && (r = {
                        transform: "translate3d(".concat(i.x, ", ").concat(i.y, ", 0)"),
                        width: i.width,
                        height: i.height
                    }), (0, s.jsx)(u.default, {
                        dragAnywhere: !0,
                        ref: this.handleSetDraggableRef,
                        className: l(c.pictureInPictureWindow, h.elevationHigh, {
                            [c.hidden]: n,
                            [c.borderRadius]: a
                        }),
                        maxX: e,
                        maxY: t,
                        disabled: null != i,
                        onDragStart: this.handleDragStart,
                        onDrag: this.handleDrag,
                        onDragEnd: this.handleDragEnd,
                        children: (0, s.jsx)("div", {
                            ref: this.handleSetInnerDivRef,
                            style: r,
                            children: this.props.children
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this._width = 0, this._height = 0, this._velocityX = 0, this._velocityY = 0, this._lastMoveX = 0, this._lastMoveY = 0, this.ensureIsInPosition = () => {
                        this.setPosition(this.props.position)
                    }, this.handleSetInnerDivRef = e => {
                        var t;
                        this._innerDiv = e;
                        let i = null == e ? void 0 : e.ownerDocument.defaultView;
                        null != e && null != i && (this._resizeObserver = new i.ResizeObserver(this.ensureIsInPosition), null === (t = this._resizeObserver) || void 0 === t || t.observe(e))
                    }, this.handleSetDraggableRef = e => {
                        this._draggable = e
                    }, this.handleDragStart = (e, t) => {
                        this._velocityX = 0, this._velocityY = 0, this._lastMoveX = e, this._lastMoveY = t, this._lastMoveTime = new Date
                    }, this.handleDrag = (e, t) => {
                        let i = new Date,
                            s = Number(i) - Number(this._lastMoveTime);
                        this._velocityX = (e - this._lastMoveX) / s, this._velocityY = (t - this._lastMoveY) / s, this._lastMoveX = e, this._lastMoveY = t, this._lastMoveTime = i
                    }, this.handleDragEnd = (e, t) => {
                        let i;
                        let {
                            maxX: s,
                            maxY: n
                        } = this.props, a = this.calculateDecayingPosition(e, t, this._velocityX, this._velocityY), l = !0, r = !0;
                        if (a.x > s / 2 && (r = !1), a.y > n / 2 && (l = !1), i = l && r ? d.PictureInPicturePositions.TOP_LEFT : l && !r ? d.PictureInPicturePositions.TOP_RIGHT : !l && r ? d.PictureInPicturePositions.BOTTOM_LEFT : d.PictureInPicturePositions.BOTTOM_RIGHT, this.animateToPosition(i, this.ensureIsInPosition), i !== this.props.position) {
                            let {
                                id: e,
                                onMove: t
                            } = this.props;
                            null == t || t(e, i)
                        }
                    }
                }
            }
            p.defaultProps = {
                hidden: !1,
                roundCorners: !1
            };
            var g = n.memo(e => {
                let {
                    selectedPIPWindow: t,
                    pipWindows: i,
                    maxX: n,
                    maxY: a,
                    onWindowMove: l,
                    dockedRect: r,
                    pictureInPictureComponents: o,
                    appContext: u,
                    roundCorners: h
                } = e;
                return (0, s.jsx)("div", {
                    className: c.pictureInPicture,
                    children: (() => {
                        if (null == t) return null;
                        let e = Array.from(i.values()).map(e => {
                            if (e.id !== t.id && e.component !== d.PictureInPictureComponents.EMBED_IFRAME) return null;
                            let i = "string" == typeof e.component ? o[e.component] : e.component;
                            return (0, s.jsx)(i, {
                                ...e.props
                            }, "pipWindow-".concat(e.id))
                        });
                        return (0, s.jsx)(p, {
                            appContext: u,
                            position: t.position,
                            id: t.id,
                            hidden: t.hidden,
                            onMove: l,
                            maxX: n,
                            maxY: a,
                            dockedRect: r,
                            edgeOffsetTop: f.top,
                            edgeOffsetBottom: f.bottom,
                            edgeOffsetLeft: f.left,
                            edgeOffsetRight: f.top,
                            roundCorners: h,
                            children: e
                        })
                    })()
                })
            })
        }
    }
]);
//# sourceMappingURL=fed0b45b21280f4bc95e.js.map