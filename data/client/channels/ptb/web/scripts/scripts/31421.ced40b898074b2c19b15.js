(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["31421"], {
        811513: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                GroupIcon: function() {
                    return l
                }
            });
            var n = r("37983");
            r("884691");
            var s = r("669491"),
                u = r("75196");
            let l = e => {
                let {
                    width: t = 24,
                    height: r = 24,
                    color: l = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: i = "",
                    ...a
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, u.default)(a),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: r,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof l ? l : l.css,
                        d: "M14.5 8a3 3 0 1 0-2.7-4.3c-.2.4.06.86.44 1.12a5 5 0 0 1 2.14 3.08c.01.06.06.1.12.1ZM18.44 17.27c.15.43.54.73 1 .73h1.06c.83 0 1.5-.67 1.5-1.5a7.5 7.5 0 0 0-6.5-7.43c-.55-.08-.99.38-1.1.92-.06.3-.15.6-.26.87-.23.58-.05 1.3.47 1.63a9.53 9.53 0 0 1 3.83 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0c0 .83-.67 1.5-1.5 1.5a.2.2 0 0 1-.2-.16c-.2-.96-.56-1.87-.88-2.54-.1-.23-.42-.15-.42.1v2.1a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.32.67-.67 1.58-.88 2.54a.2.2 0 0 1-.2.16A1.5 1.5 0 0 1 2 20.5Z",
                        className: i
                    })
                })
            }
        },
        206625: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return s
                }
            });
            var n = r("884691");

            function s(e, t) {
                let r = n.useRef(e);
                return n.useEffect(() => {
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
                    return g
                },
                JoinSourceType: function() {
                    return s
                },
                getJoinSourceTypeLabel: function() {
                    return v
                },
                getIntegrationLabel: function() {
                    return M
                },
                useGetIntegrationIconString: function() {
                    return O
                },
                fetchMemberSupplemental: function() {
                    return A
                }
            }), r("424973");
            var n, s, u, l, i, a, o = r("872717"),
                c = r("819855"),
                d = r("841098"),
                f = r("376556"),
                E = r("572943"),
                h = r("49111"),
                _ = r("782340");
            let I = {};

            function p(e, t) {
                return e + t
            }

            function T(e, t) {
                return t.map(t => e + t)
            }

            function S(e) {
                return e.split("-")[1]
            }(l = n || (n = {}))[l.FAILED = 0] = "FAILED", l[l.UNFETCHED = 1] = "UNFETCHED", l[l.PENDING = 2] = "PENDING", l[l.SUCCEEDED = 3] = "SUCCEEDED", l[l.FAILED_NO_RETRY = 4] = "FAILED_NO_RETRY";

            function N(e, t) {
                e.forEach(e => {
                    I[e] = t
                })
            }

            function g(e, t) {
                t.forEach(t => (function(e, t, r) {
                    I[e + t] = 3
                })(e, t, 3))
            }(i = s || (s = {}))[i.UNSPECIFIED = 0] = "UNSPECIFIED", i[i.BOT = 1] = "BOT", i[i.INTEGRATION = 2] = "INTEGRATION", i[i.DISCOVERY = 3] = "DISCOVERY", i[i.HUB = 4] = "HUB", i[i.INVITE = 5] = "INVITE", i[i.VANITY_URL = 6] = "VANITY_URL";
            let v = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                switch (e) {
                    case 1:
                        return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_BOT;
                    case 2:
                        return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION;
                    case 3:
                        return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_DISCOVERY;
                    case 4:
                        return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_HUB;
                    case 5:
                        return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INVITE;
                    case 6:
                        if (null != t) return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL_LABEL_NAME.format({
                            vanityUrl: t
                        });
                        return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL;
                    default:
                        return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN
                }
            };
            (a = u || (u = {})).DISCORD = "discord", a.TWITCH = "twitch", a.YOUTUBE = "youtube", a.GUILD_SUBSCRIPTION = "guild_subscription";
            let M = e => {
                    switch (e) {
                        case "twitch":
                            return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_TWITCH;
                        case "youtube":
                            return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_YOUTUBE;
                        default:
                            return _.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION
                    }
                },
                O = e => {
                    let t = f.default.get((0, E.useLegacyPlatformType)(e)),
                        r = (0, d.default)();
                    return null != t && ["twitch", "youtube"].includes(e) ? "url('".concat((0, c.isThemeDark)(r) ? t.icon.darkSVG : t.icon.lightSVG, "')") : null
                };

            function R(e) {
                return {
                    userId: e.user_id,
                    sourceInviteCode: e.source_invite_code,
                    joinSourceType: e.join_source_type,
                    inviterId: e.inviter_id,
                    integrationType: e.integration_type
                }
            }
            async function A(e, t) {
                let r = T(e, t),
                    n = r.filter(e => I[e] <= 1).map(S);
                if (0 === n.length) return [];
                N(r, 2);
                try {
                    let t = await o.default.post({
                        url: h.Endpoints.MEMBER_SAFETY_SUPPLEMENTAL(e),
                        body: {
                            user_ids: n
                        }
                    });
                    if (!Array.isArray(t.body)) return N(r, 0), [];
                    let s = t.body.map(R),
                        u = [];
                    s.forEach(e => {
                        let {
                            userId: t
                        } = e;
                        return u.push(t)
                    });
                    let l = T(e, u),
                        i = n.filter(e => !u.includes(e)),
                        a = T(e, i);
                    return N(l, 3), N(a, 0), s
                } catch (e) {
                    N(r, 0)
                }
                return []
            }
        },
        597517: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                hideHotspot: function() {
                    return l
                },
                setHotspotOverride: function() {
                    return i
                },
                clearHotspotOverride: function() {
                    return a
                }
            });
            var n = r("913144"),
                s = r("599110"),
                u = r("49111");

            function l(e) {
                s.default.track(u.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), n.default.wait(() => {
                    n.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function i(e, t) {
                n.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function a(e) {
                n.default.dispatch({
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
            var n = r("446674"),
                s = r("913144"),
                u = r("197881"),
                l = r("492397");
            let i = new Set,
                a = {};
            class o extends n.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (i = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (a = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = !t && a[e];
                    return !(l.CONFERENCE_MODE_ENABLED || u.ProcessArgs.isDisallowPopupsSet()) && (r || !i.has(e))
                }
                hasHiddenHotspot(e) {
                    return i.has(e)
                }
                getHotspotOverride(e) {
                    return a[e]
                }
                getState() {
                    return {
                        hiddenHotspots: i,
                        hotspotOverrides: a
                    }
                }
            }
            o.displayName = "HotspotStore", o.persistKey = "hotspots", o.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var c = new o(s.default, {
                OVERLAY_INITIALIZE: function(e) {
                    let {
                        hiddenHotspots: t
                    } = e;
                    i = new Set(t)
                },
                HOTSPOT_HIDE: function(e) {
                    let {
                        location: t
                    } = e;
                    if (i.has(t)) return !1;
                    i.add(t)
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
                    return u.default
                }
            });
            var n = r("533613");
            r.es(n, t);
            var s = r("597517");
            r.es(s, t);
            var u = r("269596")
        },
        42507: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                useFrecencySettings: function() {
                    return i
                }
            });
            var n = r("884691"),
                s = r("446674"),
                u = r("872173"),
                l = r("374363");

            function i() {
                return n.useEffect(() => {
                    u.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, s.useStateFromStores)([l.default], () => l.default.frecencyWithoutFetchingLatest)
            }
        },
        155207: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return i
                }
            });
            var n = r("37983");
            r("884691");
            var s = r("469563"),
                u = r("811513"),
                l = r("75196"),
                i = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: r = 24,
                        color: s = "currentColor",
                        foreground: u,
                        ...i
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, l.default)(i),
                        width: t,
                        height: r,
                        viewBox: "0 0 24 24",
                        children: [(0, n.jsx)("path", {
                            className: u,
                            fill: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, n.jsx)("path", {
                            className: u,
                            fill: s,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, n.jsx)("path", {
                            className: u,
                            fill: s,
                            d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                        }), (0, n.jsx)("path", {
                            className: u,
                            fill: s,
                            d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                        })]
                    })
                }, u.GroupIcon, void 0, {
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
            var n = r("37983");
            r("884691");
            var s = r("414456"),
                u = r.n(s),
                l = r("77078"),
                i = r("254686"),
                a = r("851706");
            let o = Object.freeze({
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
                        className: s = i.wrapper,
                        size: a = o.SIZE_14,
                        selectable: c = !1,
                        children: d,
                        color: f,
                        onClick: E,
                        onContextMenu: h,
                        style: _,
                        title: I,
                        uppercase: p
                    } = e;
                    return (0, n.jsx)(l.H, {
                        role: null != E ? "button" : void 0,
                        onClick: E,
                        onContextMenu: h,
                        id: t,
                        className: u(s, {
                            [i.base]: !0,
                            [a]: !0,
                            [i.selectable]: c,
                            [i.muted]: r,
                            [i.uppercase]: p
                        }),
                        title: I,
                        style: null != f ? {
                            ..._,
                            color: f
                        } : _,
                        children: d
                    })
                };
            c.Sizes = o;
            var d = c
        },
        811305: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                Sizes: function() {
                    return T
                },
                default: function() {
                    return g
                }
            }), r("424973"), r("222007");
            var n = r("37983"),
                s = r("884691"),
                u = r("414456"),
                l = r.n(u),
                i = r("627445"),
                a = r.n(i),
                o = r("77078"),
                c = r("506885"),
                d = r("981601"),
                f = r("766274"),
                E = r("697218"),
                h = r("368121"),
                _ = r("523096"),
                I = r("587974"),
                p = r("494101");
            let T = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function S(e, t) {
                let r = e instanceof f.default ? e : null != e ? e.user : null;
                return null != r ? r.id : "user-".concat(t)
            }
            class N extends s.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: r = this.defaultRenderUser,
                        size: s,
                        extraDetail: u
                    } = this.props, l = [], i = e.length === t ? e.length : t - 1, a = this.renderMoreUsers(i), o = 0;
                    for (; o < i && o < e.length;) {
                        var c;
                        let t = null == a && null == u && o === e.length - 1,
                            i = r(e[o], t, o);
                        l.push(t ? (0, n.jsx)("div", {
                            className: p.avatarContainer,
                            children: i
                        }, S(null !== (c = e[o]) && void 0 !== c ? c : null, o)) : (0, n.jsx)(I.default, {
                            className: p.avatarContainerMasked,
                            height: s,
                            width: s,
                            mask: I.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: i
                        }, S(e[o], o))), o++
                    }
                    return null != u ? l.push(u) : null != a && l.push(a), l
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: r,
                        hideMoreUsers: u,
                        renderMoreUsers: l,
                        users: i
                    } = this.props, a = Math.min(e, i.length);
                    if (!u) {
                        if (null != r) {
                            if (r >= t) return (0, n.jsx)(s.Fragment, {
                                children: l("".concat(t, "+"), t)
                            }, "more-users");
                            if (r > i.length) {
                                let e = r - i.length;
                                return (0, n.jsx)(s.Fragment, {
                                    children: l("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (a < i.length) {
                            let e = Math.min(i.length - a, 99);
                            return (0, n.jsx)(s.Fragment, {
                                children: l("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, n.jsx)(h.default, {
                        foreground: p.foreground,
                        className: p.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: r,
                        guildId: s,
                        showUserPopout: u,
                        useFallbackUserForPopout: i
                    } = this.props, {
                        popoutUserId: f
                    } = this.state, h = r.find(e => null != e && e.id === f), _ = i && null == E.default.getUser(f);
                    return (0, n.jsx)(o.Popout, {
                        position: "right",
                        preload: null == h ? void 0 : () => (0, c.default)(h.id, h.getAvatarURL(s, 80), {
                            guildId: s
                        }),
                        shouldShow: !0 === u && null != f,
                        fixed: !0,
                        renderPopout: e => (a(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, n.jsx)(d.default, {
                            ...this.props,
                            user: _ && null != h ? h : void 0,
                            ...e,
                            userId: f,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: r => (0, n.jsxs)("div", {
                            className: l(e, p.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : T.SIZE_24;
                                switch (e) {
                                    case T.SIZE_16:
                                        return p.size16;
                                    case T.SIZE_24:
                                        return p.size24;
                                    case T.SIZE_32:
                                        return p.size32;
                                    case T.SIZE_56:
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
                    }, this._ref = s.createRef(), this.defaultRenderUser = (e, t, r) => {
                        let {
                            showUserPopout: s,
                            guildId: u,
                            size: l
                        } = this.props;
                        if (null == e) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, n.jsx)("div", {
                                className: p.emptyUser
                            });
                            {
                                let e = (null != r ? r : 0) % _.default.DEFAULT_AVATARS.length,
                                    t = _.default.DEFAULT_AVATARS[e];
                                return (0, n.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: p.avatar
                                })
                            }
                        }
                        let i = (0, n.jsx)("img", {
                            src: e.getAvatarURL(u, l),
                            alt: e.username,
                            className: p.avatar
                        }, e.id);
                        return s ? (0, n.jsx)(o.Clickable, {
                            className: p.clickableAvatar,
                            onClick: () => {
                                null != this._ref.current && null != e && this.setState({
                                    popoutUserId: e.id
                                })
                            },
                            tabIndex: -1,
                            children: i
                        }, e.id) : i
                    }
                }
            }
            N.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, n.jsx)("div", {
                        className: p.moreUsers,
                        children: e
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: T.SIZE_24
            };
            var g = N
        }
    }
]);
//# sourceMappingURL=31421.ced40b898074b2c19b15.js.map