(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["28750"], {
        811513: function(e, t, r) {
            "use strict";
            r.r(t);
            var s = r("430143");
            r.es(s, t)
        },
        206625: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return n
                }
            });
            var s = r("884691");

            function n(e, t) {
                let r = s.useRef(e);
                return s.useEffect(() => {
                    function e(e) {
                        null != r.current && !r.current.contains(e.target) && t()
                    }
                    return document.addEventListener("mousedown", e), () => {
                        document.removeEventListener("mousedown", e)
                    }
                }, [r, t]), r
            }
        },
        835257: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                registerFetchedSupplementals: function() {
                    return U
                },
                JoinSourceType: function() {
                    return n
                },
                getJoinSourceTypeLabel: function() {
                    return S
                },
                getIntegrationLabel: function() {
                    return N
                },
                useGetIntegrationIconString: function() {
                    return C
                },
                fetchMemberSupplemental: function() {
                    return v
                }
            }), r("424973");
            var s, n, o, u, l, a, i = r("872717"),
                c = r("819855"),
                d = r("841098"),
                E = r("376556"),
                _ = r("572943"),
                f = r("49111"),
                I = r("782340");
            let R = {};

            function p(e, t) {
                return e + t
            }

            function h(e, t) {
                return t.map(t => e + t)
            }

            function M(e) {
                return e.split("-")[1]
            }(u = s || (s = {}))[u.FAILED = 0] = "FAILED", u[u.UNFETCHED = 1] = "UNFETCHED", u[u.PENDING = 2] = "PENDING", u[u.SUCCEEDED = 3] = "SUCCEEDED", u[u.FAILED_NO_RETRY = 4] = "FAILED_NO_RETRY";

            function T(e, t) {
                e.forEach(e => {
                    R[e] = t
                })
            }

            function U(e, t) {
                t.forEach(t => (function(e, t, r) {
                    R[e + t] = 3
                })(e, t, 3))
            }(l = n || (n = {}))[l.UNSPECIFIED = 0] = "UNSPECIFIED", l[l.BOT = 1] = "BOT", l[l.INTEGRATION = 2] = "INTEGRATION", l[l.DISCOVERY = 3] = "DISCOVERY", l[l.HUB = 4] = "HUB", l[l.INVITE = 5] = "INVITE", l[l.VANITY_URL = 6] = "VANITY_URL";
            let S = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                switch (e) {
                    case 1:
                        return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT;
                    case 2:
                        return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION;
                    case 3:
                        return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY;
                    case 4:
                        return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB;
                    case 5:
                        return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INVITE;
                    case 6:
                        if (null != t) return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL_LABEL_NAME.format({
                            vanityUrl: t
                        });
                        return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL;
                    default:
                        return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN
                }
            };
            (a = o || (o = {})).DISCORD = "discord", a.TWITCH = "twitch", a.YOUTUBE = "youtube", a.GUILD_SUBSCRIPTION = "guild_subscription";
            let N = e => {
                    switch (e) {
                        case "twitch":
                            return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_TWITCH;
                        case "youtube":
                            return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_YOUTUBE;
                        default:
                            return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION
                    }
                },
                C = e => {
                    let t = E.default.get((0, _.useLegacyPlatformType)(e)),
                        r = (0, d.default)();
                    return null != t && ["twitch", "youtube"].includes(e) ? "url('".concat((0, c.isThemeDark)(r) ? t.icon.darkSVG : t.icon.lightSVG, "')") : null
                };

            function P(e) {
                return {
                    userId: e.user_id,
                    sourceInviteCode: e.source_invite_code,
                    joinSourceType: e.join_source_type,
                    inviterId: e.inviter_id,
                    integrationType: e.integration_type
                }
            }
            async function v(e, t) {
                let r = h(e, t),
                    s = r.filter(e => R[e] <= 1).map(M);
                if (0 === s.length) return [];
                T(r, 2);
                try {
                    let t = await i.default.post({
                        url: f.Endpoints.MEMBER_SAFETY_SUPPLEMENTAL(e),
                        body: {
                            user_ids: s
                        }
                    });
                    if (!Array.isArray(t.body)) return T(r, 0), [];
                    let n = t.body.map(P),
                        o = [];
                    n.forEach(e => {
                        let {
                            userId: t
                        } = e;
                        return o.push(t)
                    });
                    let u = h(e, o),
                        l = s.filter(e => !o.includes(e)),
                        a = h(e, l);
                    return T(u, 3), T(a, 0), n
                } catch (e) {
                    T(r, 0)
                }
                return []
            }
        },
        597517: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                hideHotspot: function() {
                    return u
                },
                setHotspotOverride: function() {
                    return l
                },
                clearHotspotOverride: function() {
                    return a
                }
            });
            var s = r("913144"),
                n = r("599110"),
                o = r("49111");

            function u(e) {
                n.default.track(o.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), s.default.wait(() => {
                    s.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function l(e, t) {
                s.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function a(e) {
                s.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_CLEAR",
                    location: e
                })
            }
        },
        269596: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return c
                }
            }), r("222007");
            var s = r("446674"),
                n = r("913144"),
                o = r("197881"),
                u = r("492397");
            let l = new Set,
                a = {};
            class i extends s.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (l = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (a = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = !t && a[e];
                    return !(u.CONFERENCE_MODE_ENABLED || o.ProcessArgs.isDisallowPopupsSet()) && (r || !l.has(e))
                }
                hasHiddenHotspot(e) {
                    return l.has(e)
                }
                getHotspotOverride(e) {
                    return a[e]
                }
                getState() {
                    return {
                        hiddenHotspots: l,
                        hotspotOverrides: a
                    }
                }
            }
            i.displayName = "HotspotStore", i.persistKey = "hotspots", i.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var c = new i(n.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    l = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (l.has(t)) return !1;
                    l.add(t)
                },
                HOTSPOT_OVERRIDE_SET: function(e) {
                    let {
                        location: t,
                        enabled: r
                    } = e;
                    a[t] = r
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == a[t]) return !1;
                    delete a[t]
                }
            })
        },
        139321: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                HotspotStore: function() {
                    return o.default
                }
            });
            var s = r("533613");
            r.es(s, t);
            var n = r("597517");
            r.es(n, t);
            var o = r("269596")
        },
        42507: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useFrecencySettings: function() {
                    return l
                }
            });
            var s = r("884691"),
                n = r("446674"),
                o = r("872173"),
                u = r("374363");

            function l() {
                return s.useEffect(() => {
                    o.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, n.useStateFromStores)([u.default], () => u.default.frecencyWithoutFetchingLatest)
            }
        },
        791106: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                Gradients: function() {
                    return l
                },
                GradientCssUrls: function() {
                    return a
                },
                default: function() {
                    return I
                }
            });
            var s = r("37983"),
                n = r("884691"),
                o = r("748820"),
                u = r("669491");
            let l = Object.freeze({
                    PREMIUM_TIER_0: (0, o.v4)(),
                    PREMIUM_TIER_1: (0, o.v4)(),
                    PREMIUM_TIER_2: (0, o.v4)(),
                    PREMIUM_GUILD: (0, o.v4)(),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: (0, o.v4)()
                }),
                a = {
                    PREMIUM_TIER_0: "url(#".concat(l.PREMIUM_TIER_0, ")"),
                    PREMIUM_TIER_1: "url(#".concat(l.PREMIUM_TIER_1, ")"),
                    PREMIUM_TIER_2: "url(#".concat(l.PREMIUM_TIER_2, ")"),
                    PREMIUM_GUILD: "url(#".concat(l.PREMIUM_GUILD, ")"),
                    PREMIUM_GUILD_BADGE_V2_BACKGROUND: "url(#".concat(l.PREMIUM_GUILD_BADGE_V2_BACKGROUND, ")")
                },
                i = () => (0, s.jsxs)("linearGradient", {
                    id: l.PREMIUM_TIER_0,
                    children: [(0, s.jsx)("stop", {
                        offset: ".1762",
                        stopColor: u.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS.css
                    }), (0, s.jsx)("stop", {
                        offset: "0.5351",
                        stopColor: u.default.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2.css
                    }), (0, s.jsx)("stop", {
                        offset: "1",
                        stopColor: u.default.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS.css
                    })]
                }),
                c = () => (0, s.jsxs)("linearGradient", {
                    id: l.PREMIUM_TIER_1,
                    children: [(0, s.jsx)("stop", {
                        stopColor: u.default.unsafe_rawColors.PREMIUM_TIER_1_BLUE.css
                    }), (0, s.jsx)("stop", {
                        offset: "1",
                        stopColor: u.default.unsafe_rawColors.PREMIUM_TIER_1_PURPLE.css
                    })]
                }),
                d = () => (0, s.jsxs)("linearGradient", {
                    id: l.PREMIUM_TIER_2,
                    children: [(0, s.jsx)("stop", {
                        stopColor: u.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS.css
                    }), (0, s.jsx)("stop", {
                        offset: "0.502368",
                        stopColor: u.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2.css
                    }), (0, s.jsx)("stop", {
                        offset: "1",
                        stopColor: u.default.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS.css
                    })]
                }),
                E = () => (0, s.jsxs)("linearGradient", {
                    id: l.PREMIUM_GUILD,
                    children: [(0, s.jsx)("stop", {
                        stopColor: u.default.unsafe_rawColors.GUILD_BOOSTING_BLUE.css
                    }), (0, s.jsx)("stop", {
                        offset: "1",
                        stopColor: u.default.unsafe_rawColors.GUILD_BOOSTING_PURPLE.css
                    })]
                }),
                _ = () => (0, s.jsxs)("linearGradient", {
                    id: l.PREMIUM_GUILD_BADGE_V2_BACKGROUND,
                    gradientTransform: "rotate(45)",
                    children: [(0, s.jsx)("stop", {
                        offset: "0",
                        stopColor: u.default.unsafe_rawColors.PREMIUM_TIER_2_PURPLE.css
                    }), (0, s.jsx)("stop", {
                        offset: "1",
                        stopColor: u.default.unsafe_rawColors.PREMIUM_TIER_2_PINK.css
                    })]
                }),
                f = n.memo(function() {
                    return (0, s.jsxs)("svg", {
                        viewBox: "0 0 1 1",
                        style: {
                            position: "absolute",
                            pointerEvents: "none",
                            top: -1,
                            left: -1,
                            width: 1,
                            height: 1
                        },
                        "aria-hidden": !0,
                        children: [i(), c(), d(), E(), _()]
                    })
                }, () => !0);
            var I = f
        },
        155207: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var s = r("37983");
            r("884691");
            var n = r("469563"),
                o = r("811513"),
                u = r("75196"),
                l = (0, n.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: r = 24,
                        color: n = "currentColor",
                        foreground: o,
                        ...l
                    } = e;
                    return (0, s.jsxs)("svg", {
                        ...(0, u.default)(l),
                        width: t,
                        height: r,
                        viewBox: "0 0 24 24",
                        children: [(0, s.jsx)("path", {
                            className: o,
                            fill: n,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, s.jsx)("path", {
                            className: o,
                            fill: n,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, s.jsx)("path", {
                            className: o,
                            fill: n,
                            d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                        }), (0, s.jsx)("path", {
                            className: o,
                            fill: n,
                            d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                        })]
                    })
                }, o.GroupIcon, void 0, {
                    size: 24
                })
        },
        713573: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return d
                }
            });
            var s = r("37983");
            r("884691");
            var n = r("414456"),
                o = r.n(n),
                u = r("77078"),
                l = r("254686"),
                a = r("851706");
            let i = Object.freeze({
                    SIZE_10: a.size10,
                    SIZE_12: a.size12,
                    SIZE_14: a.size14,
                    SIZE_16: a.size16,
                    SIZE_20: a.size20,
                    SIZE_24: a.size24,
                    SIZE_32: a.size32
                }),
                c = e => {
                    let {
                        id: t,
                        muted: r = !1,
                        className: n = l.wrapper,
                        size: a = i.SIZE_14,
                        selectable: c = !1,
                        children: d,
                        color: E,
                        onClick: _,
                        onContextMenu: f,
                        style: I,
                        title: R,
                        uppercase: p
                    } = e;
                    return (0, s.jsx)(u.H, {
                        role: null != _ ? "button" : void 0,
                        onClick: _,
                        onContextMenu: f,
                        id: t,
                        className: o(n, {
                            [l.base]: !0,
                            [a]: !0,
                            [l.selectable]: c,
                            [l.muted]: r,
                            [l.uppercase]: p
                        }),
                        title: R,
                        style: null != E ? {
                            ...I,
                            color: E
                        } : I,
                        children: d
                    })
                };
            c.Sizes = i;
            var d = c
        },
        811305: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                Sizes: function() {
                    return h
                },
                default: function() {
                    return U
                }
            }), r("424973"), r("222007");
            var s = r("37983"),
                n = r("884691"),
                o = r("414456"),
                u = r.n(o),
                l = r("627445"),
                a = r.n(l),
                i = r("77078"),
                c = r("506885"),
                d = r("981601"),
                E = r("766274"),
                _ = r("697218"),
                f = r("368121"),
                I = r("523096"),
                R = r("587974"),
                p = r("494101");
            let h = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function M(e, t) {
                let r = e instanceof E.default ? e : null != e ? e.user : null;
                return null != r ? r.id : "user-".concat(t)
            }
            class T extends n.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: r = this.defaultRenderUser,
                        size: n,
                        extraDetail: o
                    } = this.props, u = [], l = e.length === t ? e.length : t - 1, a = this.renderMoreUsers(l), i = 0;
                    for (; i < l && i < e.length;) {
                        var c;
                        let t = null == a && null == o && i === e.length - 1,
                            l = r(e[i], t, i);
                        u.push(t ? (0, s.jsx)("div", {
                            className: p.avatarContainer,
                            children: l
                        }, M(null !== (c = e[i]) && void 0 !== c ? c : null, i)) : (0, s.jsx)(R.default, {
                            className: p.avatarContainerMasked,
                            height: n,
                            width: n,
                            mask: R.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: l
                        }, M(e[i], i))), i++
                    }
                    return null != o ? u.push(o) : null != a && u.push(a), u
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: r,
                        hideMoreUsers: o,
                        renderMoreUsers: u,
                        users: l
                    } = this.props, a = Math.min(e, l.length);
                    if (!o) {
                        if (null != r) {
                            if (r >= t) return (0, s.jsx)(n.Fragment, {
                                children: u("".concat(t, "+"), t)
                            }, "more-users");
                            if (r > l.length) {
                                let e = r - l.length;
                                return (0, s.jsx)(n.Fragment, {
                                    children: u("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (a < l.length) {
                            let e = Math.min(l.length - a, 99);
                            return (0, s.jsx)(n.Fragment, {
                                children: u("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, s.jsx)(f.default, {
                        foreground: p.foreground,
                        className: p.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: r,
                        guildId: n,
                        showUserPopout: o,
                        useFallbackUserForPopout: l
                    } = this.props, {
                        popoutUserId: E
                    } = this.state, f = r.find(e => null != e && e.id === E), I = l && null == _.default.getUser(E);
                    return (0, s.jsx)(i.Popout, {
                        position: "right",
                        preload: null == f ? void 0 : () => (0, c.default)(f.id, f.getAvatarURL(n, 80), {
                            guildId: n
                        }),
                        shouldShow: !0 === o && null != E,
                        fixed: !0,
                        renderPopout: e => (a(null != E, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, s.jsx)(d.default, {
                            ...this.props,
                            user: I && null != f ? f : void 0,
                            ...e,
                            userId: E,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: r => (0, s.jsxs)("div", {
                            className: u(e, p.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : h.SIZE_24;
                                switch (e) {
                                    case h.SIZE_16:
                                        return p.size16;
                                    case h.SIZE_24:
                                        return p.size24;
                                    case h.SIZE_32:
                                        return p.size32;
                                    case h.SIZE_56:
                                        return p.size56;
                                    default:
                                        return p.size24
                                }
                            }(t)),
                            ref: this._ref,
                            ...r,
                            children: [this.renderIcon(), this.renderUsers()]
                        })
                    })
                }
                constructor(...e) {
                    super(...e), this.state = {
                        popoutUserId: null
                    }, this._ref = n.createRef(), this.defaultRenderUser = (e, t, r) => {
                        let {
                            showUserPopout: n,
                            guildId: o,
                            size: u
                        } = this.props;
                        if (null == e) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, s.jsx)("div", {
                                className: p.emptyUser
                            });
                            {
                                let e = (null != r ? r : 0) % I.default.DEFAULT_AVATARS.length,
                                    t = I.default.DEFAULT_AVATARS[e];
                                return (0, s.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: p.avatar
                                })
                            }
                        }
                        let l = (0, s.jsx)("img", {
                            src: e.getAvatarURL(o, u),
                            alt: e.username,
                            className: p.avatar
                        }, e.id);
                        return n ? (0, s.jsx)(i.Clickable, {
                            className: p.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != e && this.setState({
                                    popoutUserId: e.id
                                })
                            },
                            tabIndex: -1,
                            children: l
                        }, e.id) : l
                    }
                }
            }
            T.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, s.jsx)("div", {
                        className: p.moreUsers,
                        children: e
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: h.SIZE_24
            };
            var U = T
        },
        430143: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                GroupIcon: function() {
                    return u
                }
            });
            var s = r("37983");
            r("884691");
            var n = r("669491"),
                o = r("82169");
            let u = e => {
                let {
                    width: t = 24,
                    height: r = 24,
                    color: u = n.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...a
                } = e;
                return (0, s.jsx)("svg", {
                    ...(0, o.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: r,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, s.jsx)("path", {
                        fill: "string" == typeof u ? u : u.css,
                        d: "M14.5 8a3 3 0 1 0-2.7-4.3c-.2.4.06.86.44 1.12a5 5 0 0 1 2.14 3.08c.01.06.06.1.12.1ZM18.44 17.27c.15.43.54.73 1 .73h1.06c.83 0 1.5-.67 1.5-1.5a7.5 7.5 0 0 0-6.5-7.43c-.55-.08-.99.38-1.1.92-.06.3-.15.6-.26.87-.23.58-.05 1.3.47 1.63a9.53 9.53 0 0 1 3.83 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0c0 .83-.67 1.5-1.5 1.5a.2.2 0 0 1-.2-.16c-.2-.96-.56-1.87-.88-2.54-.1-.23-.42-.15-.42.1v2.1a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.32.67-.67 1.58-.88 2.54a.2.2 0 0 1-.2.16A1.5 1.5 0 0 1 2 20.5Z",
                        className: l
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=28750.3944bd72ed11e3a19335.js.map