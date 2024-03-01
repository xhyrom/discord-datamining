(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["77434"], {
        811513: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("430143");
            n.es(r, t)
        },
        304983: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("541742");
            n.es(r, t)
        },
        738707: function(e, t, n) {
            "use strict";
            n.r(t);
            var r = n("670627");
            n.es(r, t)
        },
        835257: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                registerFetchedSupplementals: function() {
                    return v
                },
                JoinSourceType: function() {
                    return i
                },
                getJoinSourceTypeLabel: function() {
                    return p
                },
                getIntegrationLabel: function() {
                    return g
                },
                useGetIntegrationIconString: function() {
                    return R
                },
                fetchMemberSupplemental: function() {
                    return S
                }
            }), n("424973");
            var r, i, l, a, u, s, o = n("872717"),
                c = n("819855"),
                d = n("841098"),
                f = n("376556"),
                E = n("572943"),
                _ = n("49111"),
                I = n("782340");
            let T = {};

            function M(e, t) {
                return e + t
            }

            function N(e, t) {
                return t.map(t => e + t)
            }

            function h(e) {
                return e.split("-")[1]
            }(a = r || (r = {}))[a.FAILED = 0] = "FAILED", a[a.UNFETCHED = 1] = "UNFETCHED", a[a.PENDING = 2] = "PENDING", a[a.SUCCEEDED = 3] = "SUCCEEDED", a[a.FAILED_NO_RETRY = 4] = "FAILED_NO_RETRY";

            function C(e, t) {
                e.forEach(e => {
                    T[e] = t
                })
            }

            function v(e, t) {
                t.forEach(t => (function(e, t, n) {
                    T[e + t] = 3
                })(e, t, 3))
            }(u = i || (i = {}))[u.UNSPECIFIED = 0] = "UNSPECIFIED", u[u.BOT = 1] = "BOT", u[u.INTEGRATION = 2] = "INTEGRATION", u[u.DISCOVERY = 3] = "DISCOVERY", u[u.HUB = 4] = "HUB", u[u.INVITE = 5] = "INVITE", u[u.VANITY_URL = 6] = "VANITY_URL";
            let p = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
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
                        if (null != t && !n) return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL_LABEL_NAME.format({
                            vanityUrl: t
                        });
                        return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_VANITY_URL;
                    default:
                        return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_UNKNOWN
                }
            };
            (s = l || (l = {})).DISCORD = "discord", s.TWITCH = "twitch", s.YOUTUBE = "youtube", s.GUILD_SUBSCRIPTION = "guild_subscription";
            let g = e => {
                    switch (e) {
                        case "twitch":
                            return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_TWITCH;
                        case "youtube":
                            return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION_YOUTUBE;
                        default:
                            return I.default.Messages.MEMBER_SAFETY_JOIN_TYPE_INTEGRATION
                    }
                },
                R = e => {
                    let t = f.default.get((0, E.useLegacyPlatformType)(e)),
                        n = (0, d.default)();
                    return null != t && ["twitch", "youtube"].includes(e) ? "url('".concat((0, c.isThemeDark)(n) ? t.icon.darkSVG : t.icon.lightSVG, "')") : null
                };

            function m(e) {
                return {
                    userId: e.user_id,
                    sourceInviteCode: e.source_invite_code,
                    joinSourceType: e.join_source_type,
                    inviterId: e.inviter_id,
                    integrationType: e.integration_type
                }
            }
            async function S(e, t) {
                let n = N(e, t),
                    r = n.filter(e => T[e] <= 1).map(h);
                if (0 === r.length) return [];
                C(n, 2);
                try {
                    let t = await o.default.post({
                        url: _.Endpoints.MEMBER_SAFETY_SUPPLEMENTAL(e),
                        body: {
                            user_ids: r
                        }
                    });
                    if (!Array.isArray(t.body)) return C(n, 0), [];
                    let i = t.body.map(m),
                        l = [];
                    i.forEach(e => {
                        let {
                            userId: t
                        } = e;
                        return l.push(t)
                    });
                    let a = N(e, l),
                        u = r.filter(e => !l.includes(e)),
                        s = N(e, u);
                    return C(a, 3), C(s, 0), i
                } catch (e) {
                    C(n, 0)
                }
                return []
            }
        },
        217145: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isIFrameModalUserEnabled: function() {
                    return l
                }
            });
            var r = n("862205");
            let i = (0, r.createExperiment)({
                kind: "user",
                id: "2023-07_iframe_modal",
                label: "iFrame Modal",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable iFrameModal",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function l() {
                return i.getCurrentConfig({
                    location: "5c0a70_1"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        429682: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                isIFrameModalForGuildEnabled: function() {
                    return a
                }
            });
            var r = n("862205"),
                i = n("49111");
            let l = (0, r.createExperiment)({
                kind: "guild",
                id: "2023-08_iframe_modal_guild",
                label: "iFrame Modal guild experiment",
                defaultConfig: {
                    enabled: !1
                },
                treatments: [{
                    id: 1,
                    label: "Enable iFrame Modal Guild",
                    config: {
                        enabled: !0
                    }
                }]
            });

            function a(e) {
                return l.getCurrentConfig({
                    guildId: null != e ? e : i.EMPTY_STRING_SNOWFLAKE_ID,
                    location: "2d360b_1"
                }, {
                    autoTrackExposure: !0
                }).enabled
            }
        },
        988878: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return l
                }
            });
            var r = n("217145"),
                i = n("429682");

            function l(e) {
                return (0, r.isIFrameModalUserEnabled)() || (0, i.isIFrameModalForGuildEnabled)(e)
            }
        },
        663745: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("738707"),
                a = n("75196"),
                u = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...u
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsxs)("g", {
                            fill: "none",
                            fillRule: "evenodd",
                            children: [(0, r.jsx)("path", {
                                d: "M24 0v24H0V0z"
                            }), (0, r.jsx)("path", {
                                className: l,
                                fill: i,
                                d: "M12 16c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2z"
                            })]
                        })
                    })
                }, l.MoreVerticalIcon, void 0, {
                    size: 24
                })
        },
        433487: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("304983"),
                a = n("75196"),
                u = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...u
                    } = e;
                    return (0, r.jsx)("svg", {
                        ...(0, a.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: (0, r.jsx)("path", {
                            fill: i,
                            className: l,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M7 12.001C7 10.8964 6.10457 10.001 5 10.001C3.89543 10.001 3 10.8964 3 12.001C3 13.1055 3.89543 14.001 5 14.001C6.10457 14.001 7 13.1055 7 12.001ZM14 12.001C14 10.8964 13.1046 10.001 12 10.001C10.8954 10.001 10 10.8964 10 12.001C10 13.1055 10.8954 14.001 12 14.001C13.1046 14.001 14 13.1055 14 12.001ZM19 10.001C20.1046 10.001 21 10.8964 21 12.001C21 13.1055 20.1046 14.001 19 14.001C17.8954 14.001 17 13.1055 17 12.001C17 10.8964 17.8954 10.001 19 10.001Z"
                        })
                    })
                }, l.MoreHorizontalIcon, void 0, {
                    size: 24
                })
        },
        155207: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return u
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("469563"),
                l = n("811513"),
                a = n("75196"),
                u = (0, i.replaceIcon)(function(e) {
                    let {
                        width: t = 24,
                        height: n = 24,
                        color: i = "currentColor",
                        foreground: l,
                        ...u
                    } = e;
                    return (0, r.jsxs)("svg", {
                        ...(0, a.default)(u),
                        width: t,
                        height: n,
                        viewBox: "0 0 24 24",
                        children: [(0, r.jsx)("path", {
                            className: l,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, r.jsx)("path", {
                            className: l,
                            fill: i,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M14 8.00598C14 10.211 12.206 12.006 10 12.006C7.795 12.006 6 10.211 6 8.00598C6 5.80098 7.794 4.00598 10 4.00598C12.206 4.00598 14 5.80098 14 8.00598ZM2 19.006C2 15.473 5.29 13.006 10 13.006C14.711 13.006 18 15.473 18 19.006V20.006H2V19.006Z"
                        }), (0, r.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M20.0001 20.006H22.0001V19.006C22.0001 16.4433 20.2697 14.4415 17.5213 13.5352C19.0621 14.9127 20.0001 16.8059 20.0001 19.006V20.006Z"
                        }), (0, r.jsx)("path", {
                            className: l,
                            fill: i,
                            d: "M14.8834 11.9077C16.6657 11.5044 18.0001 9.9077 18.0001 8.00598C18.0001 5.96916 16.4693 4.28218 14.4971 4.0367C15.4322 5.09511 16.0001 6.48524 16.0001 8.00598C16.0001 9.44888 15.4889 10.7742 14.6378 11.8102C14.7203 11.8418 14.8022 11.8743 14.8834 11.9077Z"
                        })]
                    })
                }, l.GroupIcon, void 0, {
                    size: 24
                })
        },
        713573: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return d
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("414456"),
                l = n.n(i),
                a = n("77078"),
                u = n("451914"),
                s = n("548122");
            let o = Object.freeze({
                    SIZE_10: s.size10,
                    SIZE_12: s.size12,
                    SIZE_14: s.size14,
                    SIZE_16: s.size16,
                    SIZE_20: s.size20,
                    SIZE_24: s.size24,
                    SIZE_32: s.size32
                }),
                c = e => {
                    let {
                        id: t,
                        muted: n = !1,
                        className: i = u.wrapper,
                        size: s = o.SIZE_14,
                        selectable: c = !1,
                        children: d,
                        color: f,
                        onClick: E,
                        onContextMenu: _,
                        style: I,
                        title: T,
                        uppercase: M
                    } = e;
                    return (0, r.jsx)(a.H, {
                        role: null != E ? "button" : void 0,
                        onClick: E,
                        onContextMenu: _,
                        id: t,
                        className: l(i, {
                            [u.base]: !0,
                            [s]: !0,
                            [u.selectable]: c,
                            [u.muted]: n,
                            [u.uppercase]: M
                        }),
                        title: T,
                        style: null != f ? {
                            ...I,
                            color: f
                        } : I,
                        children: d
                    })
                };
            c.Sizes = o;
            var d = c
        },
        430143: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                GroupIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("82169");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        d: "M14.5 8a3 3 0 1 0-2.7-4.3c-.2.4.06.86.44 1.12a5 5 0 0 1 2.14 3.08c.01.06.06.1.12.1ZM18.44 17.27c.15.43.54.73 1 .73h1.06c.83 0 1.5-.67 1.5-1.5a7.5 7.5 0 0 0-6.5-7.43c-.55-.08-.99.38-1.1.92-.06.3-.15.6-.26.87-.23.58-.05 1.3.47 1.63a9.53 9.53 0 0 1 3.83 4.78ZM12.5 9a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM2 20.5a7.5 7.5 0 0 1 15 0c0 .83-.67 1.5-1.5 1.5a.2.2 0 0 1-.2-.16c-.2-.96-.56-1.87-.88-2.54-.1-.23-.42-.15-.42.1v2.1a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2.1c0-.25-.31-.33-.42-.1-.32.67-.67 1.58-.88 2.54a.2.2 0 0 1-.2.16A1.5 1.5 0 0 1 2 20.5Z",
                        className: u
                    })
                })
            }
        },
        541742: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MoreHorizontalIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("82169");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm10-2a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm8 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        },
        670627: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                MoreVerticalIcon: function() {
                    return a
                }
            });
            var r = n("37983");
            n("884691");
            var i = n("669491"),
                l = n("82169");
            let a = e => {
                let {
                    width: t = 24,
                    height: n = 24,
                    color: a = i.default.colors.INTERACTIVE_NORMAL,
                    colorClass: u = "",
                    ...s
                } = e;
                return (0, r.jsx)("svg", {
                    ...(0, l.default)(s),
                    xmlns: "http://www.w3.org/2000/svg",
                    width: t,
                    height: n,
                    fill: "none",
                    viewBox: "0 0 24 24",
                    children: (0, r.jsx)("path", {
                        fill: "string" == typeof a ? a : a.css,
                        fillRule: "evenodd",
                        d: "M10 4a2 2 0 1 0 4 0 2 2 0 0 0-4 0Zm2 10a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z",
                        clipRule: "evenodd",
                        className: u
                    })
                })
            }
        }
    }
]);
//# sourceMappingURL=77434.08d2278e6605343f3df8.js.map