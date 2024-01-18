(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["31421"], {
        811513: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                GroupIcon: function() {
                    return i
                }
            });
            var n = r("37983");
            r("884691");
            var s = r("669491"),
                u = r("75196");
            let i = e => {
                let {
                    width: t = 24,
                    height: r = 24,
                    color: i = s.default.colors.INTERACTIVE_NORMAL,
                    colorClass: l = "",
                    ...o
                } = e;
                return (0, n.jsx)("svg", {
                    ...(0, u.default)(o),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: r,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, n.jsx)("path", {
                        fill: "string" == typeof i ? i : i.css,
                        d: "M14.5 8a3 3 0 1 0-2.7-4.3c-.2.4.06.86.44 1.12a5 5 0 0 1 2.14 3.08c.01.06.06.1.12.1ZM18.44 17.27c.15.43.54.73 1 .73h1.06c.83 0 1.5-.67 1.5-1.5a7.5 7.5 0 0 0-6.5-7.43c-.55-.08-.99.38-1.1.92-.06.3-.15.6-.26.87-.23.58-.05 1.3.47 1.63a9.53 9.53 0 0 1 3.83 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0c0 .83-.67 1.5-1.5 1.5a.2.2 0 0 1-.2-.16c-.2-.96-.56-1.87-.88-2.54-.1-.23-.42-.15-.42.1v2.1a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.32.67-.67 1.58-.88 2.54a.2.2 0 0 1-.2.16A1.5 1.5 0 0 1 2 20.5Z",
                        className: l
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
                    return I
                },
                JoinSourceType: function() {
                    return s
                },
                IntegrationType: function() {
                    return u
                },
                fetchMemberSupplemental: function() {
                    return S
                }
            }), r("424973");
            var n, s, u, i, l, o, a = r("872717"),
                c = r("49111");
            let d = {};

            function f(e, t) {
                return e + t
            }

            function h(e, t) {
                return t.map(t => e + t)
            }

            function p(e) {
                return e.split("-")[1]
            }(i = n || (n = {}))[i.FAILED = 0] = "FAILED", i[i.UNFETCHED = 1] = "UNFETCHED", i[i.PENDING = 2] = "PENDING", i[i.SUCCEEDED = 3] = "SUCCEEDED", i[i.FAILED_NO_RETRY = 4] = "FAILED_NO_RETRY";

            function E(e, t) {
                e.forEach(e => {
                    d[e] = t
                })
            }

            function I(e, t) {
                t.forEach(t => (function(e, t, r) {
                    d[e + t] = 3
                })(e, t, 3))
            }

            function v(e) {
                return {
                    userId: e.user_id,
                    sourceInviteCode: e.source_invite_code,
                    joinSourceType: e.join_source_type,
                    inviterId: e.inviter_id,
                    integrationType: e.integration_type
                }
            }
            async function S(e, t) {
                let r = h(e, t),
                    n = r.filter(e => d[e] <= 1).map(p);
                if (0 === n.length) return [];
                E(r, 2);
                try {
                    let t = await a.default.post({
                        url: c.Endpoints.MEMBER_SAFETY_SUPPLEMENTAL(e),
                        body: {
                            user_ids: n
                        }
                    });
                    if (!Array.isArray(t.body)) return E(r, 0), [];
                    let s = t.body.map(v),
                        u = [];
                    s.forEach(e => {
                        let {
                            userId: t
                        } = e;
                        return u.push(t)
                    });
                    let i = h(e, u),
                        l = n.filter(e => !u.includes(e)),
                        o = h(e, l);
                    return E(i, 3), E(o, 0), s
                } catch (e) {
                    E(r, 0)
                }
                return []
            }(l = s || (s = {}))[l.UNSPECIFIED = 0] = "UNSPECIFIED", l[l.BOT = 1] = "BOT", l[l.INTEGRATION = 2] = "INTEGRATION", l[l.DISCOVERY = 3] = "DISCOVERY", l[l.HUB = 4] = "HUB", l[l.INVITE = 5] = "INVITE", l[l.VANITY_URL = 6] = "VANITY_URL", (o = u || (u = {})).DISCORD = "discord", o.TWITCH = "twitch", o.YOUTUBE = "youtube", o.GUILD_SUBSCRIPTION = "guild_subscription"
        },
        597517: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                hideHotspot: function() {
                    return i
                },
                setHotspotOverride: function() {
                    return l
                },
                clearHotspotOverride: function() {
                    return o
                }
            });
            var n = r("913144"),
                s = r("599110"),
                u = r("49111");

            function i(e) {
                s.default.track(u.AnalyticEvents.HOTSPOT_HIDDEN, {
                    hotspot_location: e
                }), n.default.wait(() => {
                    n.default.dispatch({
                        type: "HOTSPOT_HIDE",
                        location: e
                    })
                })
            }

            function l(e, t) {
                n.default.dispatch({
                    type: "HOTSPOT_OVERRIDE_SET",
                    location: e,
                    enabled: t
                })
            }

            function o(e) {
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
                i = r("492397");
            let l = new Set,
                o = {};
            class a extends n.default.PersistedStore {
                initialize(e) {
                    null != e && (Array.isArray(e.hiddenHotspots) && (l = new Set(e.hiddenHotspots)), null != e.hotspotOverrides && (o = e.hotspotOverrides))
                }
                hasHotspot(e) {
                    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        r = !t && o[e];
                    return !(i.CONFERENCE_MODE_ENABLED || u.ProcessArgs.isDisallowPopupsSet()) && (r || !l.has(e))
                }
                hasHiddenHotspot(e) {
                    return l.has(e)
                }
                getHotspotOverride(e) {
                    return o[e]
                }
                getState() {
                    return {
                        hiddenHotspots: l,
                        hotspotOverrides: o
                    }
                }
            }
            a.displayName = "HotspotStore", a.persistKey = "hotspots", a.migrations = [e => ({
                hiddenHotspots: null != e ? e : [],
                hotspotOverrides: {}
            })];
            var c = new a(s.default, {
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
                    o[t] = r
                },
                HOTSPOT_OVERRIDE_CLEAR: function(e) {
                    let {
                        location: t
                    } = e;
                    if (null == o[t]) return !1;
                    delete o[t]
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
                    return l
                }
            });
            var n = r("884691"),
                s = r("446674"),
                u = r("872173"),
                i = r("374363");

            function l() {
                return n.useEffect(() => {
                    u.FrecencyUserSettingsActionCreators.loadIfNecessary()
                }, []), (0, s.useStateFromStores)([i.default], () => i.default.frecencyWithoutFetchingLatest)
            }
        },
        155207: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return l
                }
            });
            var n = r("37983");
            r("884691");
            var s = r("469563"),
                u = r("811513"),
                i = r("75196"),
                l = (0, s.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: r = 24,
                        color: s = "currentColor",
                        foreground: u,
                        ...l
                    } = e;
                    return (0, n.jsxs)("svg", {
                        ...(0, i.default)(l),
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
                i = r("77078"),
                l = r("254686"),
                o = r("851706");
            let a = Object.freeze({
                    SIZE_10: o.size10,
                    SIZE_12: o.size12,
                    SIZE_14: o.size14,
                    SIZE_16: o.size16,
                    SIZE_20: o.size20,
                    SIZE_24: o.size24,
                    SIZE_32: o.size32
                }),
                c = e => {
                    let {
                        id: t,
                        muted: r = !1,
                        className: s = l.wrapper,
                        size: o = a.SIZE_14,
                        selectable: c = !1,
                        children: d,
                        color: f,
                        onClick: h,
                        onContextMenu: p,
                        style: E,
                        title: I,
                        uppercase: v
                    } = e;
                    return (0, n.jsx)(i.H, {
                        role: null != h ? "button" : void 0,
                        onClick: h,
                        onContextMenu: p,
                        id: t,
                        className: u(s, {
                            [l.base]: !0,
                            [o]: !0,
                            [l.selectable]: c,
                            [l.muted]: r,
                            [l.uppercase]: v
                        }),
                        title: I,
                        style: null != f ? {
                            ...E,
                            color: f
                        } : E,
                        children: d
                    })
                };
            c.Sizes = a;
            var d = c
        },
        811305: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                Sizes: function() {
                    return S
                },
                default: function() {
                    return C
                }
            }), r("424973"), r("222007");
            var n = r("37983"),
                s = r("884691"),
                u = r("414456"),
                i = r.n(u),
                l = r("627445"),
                o = r.n(l),
                a = r("77078"),
                c = r("506885"),
                d = r("981601"),
                f = r("766274"),
                h = r("697218"),
                p = r("368121"),
                E = r("523096"),
                I = r("587974"),
                v = r("494101");
            let S = {
                SIZE_16: 16,
                SIZE_24: 24,
                SIZE_32: 32,
                SIZE_56: 56
            };

            function _(e, t) {
                let r = e instanceof f.default ? e : null != e ? e.user : null;
                return null != r ? r.id : "user-".concat(t)
            }
            class m extends s.PureComponent {
                renderUsers() {
                    let {
                        users: e,
                        max: t,
                        renderUser: r = this.defaultRenderUser,
                        size: s,
                        extraDetail: u
                    } = this.props, i = [], l = e.length === t ? e.length : t - 1, o = this.renderMoreUsers(l), a = 0;
                    for (; a < l && a < e.length;) {
                        var c;
                        let t = null == o && null == u && a === e.length - 1,
                            l = r(e[a], t, a);
                        i.push(t ? (0, n.jsx)("div", {
                            className: v.avatarContainer,
                            children: l
                        }, _(null !== (c = e[a]) && void 0 !== c ? c : null, a)) : (0, n.jsx)(I.default, {
                            className: v.avatarContainerMasked,
                            height: s,
                            width: s,
                            mask: I.default.Masks.VOICE_USER_SUMMARY_ITEM,
                            children: l
                        }, _(e[a], a))), a++
                    }
                    return null != u ? i.push(u) : null != o && i.push(o), i
                }
                renderMoreUsers(e) {
                    let {
                        max: t,
                        count: r,
                        hideMoreUsers: u,
                        renderMoreUsers: i,
                        users: l
                    } = this.props, o = Math.min(e, l.length);
                    if (!u) {
                        if (null != r) {
                            if (r >= t) return (0, n.jsx)(s.Fragment, {
                                children: i("".concat(t, "+"), t)
                            }, "more-users");
                            if (r > l.length) {
                                let e = r - l.length;
                                return (0, n.jsx)(s.Fragment, {
                                    children: i("+".concat(e), e)
                                }, "more-users")
                            }
                        } else if (o < l.length) {
                            let e = Math.min(l.length - o, 99);
                            return (0, n.jsx)(s.Fragment, {
                                children: i("+".concat(e), e)
                            }, "more-users")
                        }
                    }
                }
                renderIcon() {
                    return this.props.renderIcon ? (0, n.jsx)(p.default, {
                        foreground: v.foreground,
                        className: v.icon
                    }) : null
                }
                render() {
                    let {
                        className: e,
                        size: t,
                        users: r,
                        guildId: s,
                        showUserPopout: u,
                        useFallbackUserForPopout: l
                    } = this.props, {
                        popoutUserId: f
                    } = this.state, p = r.find(e => null != e && e.id === f), E = l && null == h.default.getUser(f);
                    return (0, n.jsx)(a.Popout, {
                        position: "right",
                        preload: null == p ? void 0 : () => (0, c.default)(p.id, p.getAvatarURL(s, 80), {
                            guildId: s
                        }),
                        shouldShow: !0 === u && null != f,
                        fixed: !0,
                        renderPopout: e => (o(null != f, "UserSummaryItem.render - renderPopout: popoutUserId cannot be null"), (0, n.jsx)(d.default, {
                            ...this.props,
                            user: E && null != p ? p : void 0,
                            ...e,
                            userId: f,
                            guildId: this.props.guildId
                        })),
                        onRequestClose: () => this.setState({
                            popoutUserId: null
                        }),
                        children: r => (0, n.jsxs)("div", {
                            className: i(e, v.container, function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S.SIZE_24;
                                switch (e) {
                                    case S.SIZE_16:
                                        return v.size16;
                                    case S.SIZE_24:
                                        return v.size24;
                                    case S.SIZE_32:
                                        return v.size32;
                                    case S.SIZE_56:
                                        return v.size56;
                                    default:
                                        return v.size24
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
                            size: i
                        } = this.props;
                        if (null == e) {
                            if (!this.props.showDefaultAvatarsForNullUsers) return (0, n.jsx)("div", {
                                className: v.emptyUser
                            });
                            {
                                let e = (null != r ? r : 0) % E.default.DEFAULT_AVATARS.length,
                                    t = E.default.DEFAULT_AVATARS[e];
                                return (0, n.jsx)("img", {
                                    src: t,
                                    alt: "",
                                    className: v.avatar
                                })
                            }
                        }
                        let l = (0, n.jsx)("img", {
                            src: e.getAvatarURL(u, i),
                            alt: e.username,
                            className: v.avatar
                        }, e.id);
                        return s ? (0, n.jsx)(a.Clickable, {
                            className: v.clickableAvatar,
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
            m.defaultProps = {
                max: 10,
                renderMoreUsers: function(e) {
                    return (0, n.jsx)("div", {
                        className: v.moreUsers,
                        children: e
                    })
                },
                renderIcon: !1,
                showDefaultAvatarsForNullUsers: !1,
                size: S.SIZE_24
            };
            var C = m
        }
    }
]);
//# sourceMappingURL=31421.5ece9d66853685e1febe.js.map