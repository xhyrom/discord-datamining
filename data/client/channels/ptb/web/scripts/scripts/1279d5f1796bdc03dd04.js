(this.webpackChunkdiscord_app = this.webpackChunkdiscord_app || []).push([
    ["70264"], {
        619340: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return N
                }
            });
            var n = a("759843"),
                r = a("382825"),
                o = a("872717"),
                l = a("913144"),
                i = a("535013"),
                E = a("605250"),
                u = a("599110"),
                s = a("840707"),
                _ = a("49111");
            let T = new E.default("ConnectedAccounts");

            function d(e, t) {
                let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                return o.default.post({
                    url: _.Endpoints.CONNECTIONS_CALLBACK(e),
                    body: {
                        ...t,
                        insecure: a,
                        friend_sync: _.FRIEND_SYNC_PLATFORM_TYPES.has(e)
                    },
                    oldFormErrors: !0
                })
            }
            var N = {
                fetch: () => o.default.get({
                    url: _.Endpoints.CONNECTIONS,
                    oldFormErrors: !0
                }).then(e => l.default.dispatch({
                    type: "USER_CONNECTIONS_UPDATE",
                    local: !0,
                    accounts: e.body
                }), () => l.default.dispatch({
                    type: "USER_CONNECTIONS_UPDATE",
                    local: !0,
                    accounts: []
                })),
                authorize(e) {
                    let t, {
                        location: a,
                        twoWayLinkType: n,
                        userCode: l
                    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return u.default.track(_.AnalyticEvents.CONNECTED_ACCOUNT_INITIATED, {
                        platform_type: e,
                        location: a
                    }), t = n === r.TwoWayLinkType.DEVICE_CODE && null != l ? _.Endpoints.CONNECTIONS_AUTHORIZE_LINK_DEVICE(e, l) : null != n ? _.Endpoints.CONNECTIONS_AUTHORIZE_LINK(e, n) : _.Endpoints.CONNECTIONS_AUTHORIZE(e), o.default.get({
                        url: t,
                        oldFormErrors: !0
                    })
                },
                callback: d,
                connect(e, t, a, r, o) {
                    var l;
                    return s.default.put({
                        url: _.Endpoints.CONNECTION(e, t),
                        body: {
                            name: a,
                            friend_sync: null !== (l = null == o ? void 0 : o.friend_sync) && void 0 !== l ? l : _.FRIEND_SYNC_PLATFORM_TYPES.has(e)
                        },
                        context: {
                            location: r
                        },
                        oldFormErrors: !0,
                        trackedActionData: {
                            event: n.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                            properties: {
                                name: a,
                                friend_sync: _.FRIEND_SYNC_PLATFORM_TYPES.has(e)
                            }
                        }
                    })
                },
                disconnect: (e, t) => o.default.delete({
                    url: _.Endpoints.CONNECTION(e, t),
                    oldFormErrors: !0
                }),
                refresh: (e, t) => o.default.post({
                    url: _.Endpoints.CONNECTION_REFRESH(e, t),
                    oldFormErrors: !0
                }),
                submitPinCode: (e, t) => o.default.get({
                    url: _.Endpoints.CONNECTIONS_CALLBACK_CONTINUATION(t, e),
                    oldFormErrors: !0
                }).then(e => {
                    let {
                        body: a
                    } = e;
                    return u.default.track(_.AnalyticEvents.ACCOUNT_LINK_STEP, {
                        previous_step: "PIN code entry",
                        current_step: "PIN success",
                        session_id: a.state,
                        platform_type: t
                    }), d(t, {
                        ...a,
                        from_continuation: !0
                    }, !0)
                }),
                setVisibility(e, t, a) {
                    return this.update(e, t, {
                        visibility: 1 === a
                    })
                },
                setMetadataVisibility(e, t, a) {
                    return this.update(e, t, {
                        metadata_visibility: 1 === a
                    })
                },
                setFriendSync(e, t, a) {
                    return this.update(e, t, {
                        friend_sync: a
                    })
                },
                setShowActivity(e, t, a) {
                    return this.update(e, t, {
                        show_activity: a
                    })
                },
                update: (e, t, a) => s.default.patch({
                    url: _.Endpoints.CONNECTION(e, t),
                    body: a,
                    oldFormErrors: !0,
                    trackedActionData: {
                        event: n.NetworkActionNames.USER_CONNECTIONS_UPDATE,
                        properties: {
                            ...a
                        }
                    }
                }),
                joinServer(e, t) {
                    l.default.dispatch({
                        type: "USER_CONNECTIONS_INTEGRATION_JOINING",
                        integrationId: e,
                        joining: !0
                    }), o.default.post({
                        url: _.Endpoints.INTEGRATION_JOIN(e),
                        oldFormErrors: !0
                    }, a => {
                        if (l.default.dispatch({
                                type: "USER_CONNECTIONS_INTEGRATION_JOINING",
                                integrationId: e,
                                joining: !1
                            }), !a.ok) null == t || t()
                    })
                },
                async refreshAccessToken(e, t) {
                    try {
                        let {
                            body: {
                                access_token: a
                            }
                        } = await o.default.get({
                            url: _.Endpoints.CONNECTION_ACCESS_TOKEN(e, t),
                            oldFormErrors: !0
                        });
                        return l.default.dispatch({
                            type: "USER_CONNECTION_UPDATE",
                            platformType: e,
                            id: t,
                            accessToken: a
                        }), a
                    } catch (a) {
                        throw a.body.code === _.AbortCodes.CONNECTION_REVOKED && l.default.dispatch({
                            type: "USER_CONNECTION_UPDATE",
                            platformType: e,
                            id: t,
                            revoked: !0
                        }), a
                    }
                },
                linkDispatchAuthCallback: (e, t) => o.default.post({
                    url: _.Endpoints.CONNECTIONS_LINK_DISPATCH_AUTH_CALLBACK(e),
                    body: {
                        ...t
                    },
                    oldFormErrors: !0
                }),
                async completeTwoWayLink(e, t, a, n, r) {
                    if (null == t) {
                        T.error("Two-way link: missing authorize location");
                        return
                    }
                    let {
                        code: o,
                        error: l,
                        errorDescription: E
                    } = (0, i.getCallbackParamsFromURL)(t);
                    if (null != l) {
                        T.error("Two-way link: missing authorize code", {
                            error: l,
                            errorDescription: E
                        });
                        return
                    }
                    return await d(e, {
                        code: a,
                        state: n,
                        two_way_link_code: o,
                        token_redirect_uri: r
                    })
                }
            }
        },
        98309: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return E
                }
            });
            var n = a("316693"),
                r = a("305961"),
                o = a("49111");
            let l = [o.ChannelTypes.GUILD_TEXT, o.ChannelTypes.GUILD_VOICE, o.ChannelTypes.GUILD_ANNOUNCEMENT, o.ChannelTypes.GUILD_FORUM, o.ChannelTypes.PUBLIC_THREAD, o.ChannelTypes.PRIVATE_THREAD],
                i = n.default.combine(o.Permissions.VIEW_CHANNEL, o.Permissions.SEND_MESSAGES);

            function E(e) {
                if (null == e || !l.includes(e.type)) return [];
                let t = r.default.getGuild(e.guild_id);
                return null == t ? [] : Object.values(e.permissionOverwrites).filter(e => {
                    var a, r;
                    return 0 === e.type && (null === (r = t.roles[e.id]) || void 0 === r ? void 0 : null === (a = r.tags) || void 0 === a ? void 0 : a.guild_connections) === null && !n.default.hasAny(e.deny, i)
                }).map(e => t.roles[e.id]).filter(e => null != e)
            }
        },
        535013: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                officialApplicationIds: function() {
                    return c
                },
                ConnectionConfigurationRuleOperator: function() {
                    return r
                },
                getCallbackParamsFromURL: function() {
                    return O
                },
                getConnectionsCheckText: function() {
                    return C
                },
                isVerifiedRolesChannelVisible: function() {
                    return A
                },
                getVisibleConnectionsRole: function() {
                    return I
                },
                getCreatedAtDate: function() {
                    return L
                }
            });
            var n, r, o = a("627445"),
                l = a.n(o),
                i = a("917351"),
                E = a.n(i),
                u = a("746379"),
                s = a("429030");
            a("151426");
            var _ = a("98309");
            a("10641");
            var T = a("305961");
            a("957255");
            var d = a("214509"),
                N = a("49111"),
                f = a("782340");
            let c = ["426537812993638400", "1042836142560645130", "296023718839451649", "979802510766268446", "1031611223235637258", "512333785338216465"];

            function O(e) {
                let {
                    query: t
                } = u.parse(e, !0), {
                    code: a,
                    state: n,
                    error: r,
                    error_description: o
                } = t;
                return l(!Array.isArray(a), "Received multiple query param values for code"), l(!Array.isArray(n), "Received multiple query param values for state"), l(!Array.isArray(r), "Received multiple query param values for error"), l(!Array.isArray(o), "Received multiple query param values for error_description"), {
                    code: a,
                    state: n,
                    error: r,
                    errorDescription: o
                }
            }

            function C(e) {
                let {
                    connectionType: t,
                    connectionMetadataField: a,
                    operator: n,
                    operatorText: r,
                    value: o
                } = e, l = null, i = Math.round(Number(o));
                switch (n) {
                    case d.OperatorTypes.EQUAL:
                        l = f.default.Messages.CONNECTIONS_ROLE_POPOUT_MUST_BE, t === N.PlatformTypes.PAYPAL && a === d.MetadataFields.PAYPAL_VERIFIED && (l = f.default.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_A);
                        break;
                    case d.OperatorTypes.NOT_EQUAL:
                        l = f.default.Messages.CONNECTIONS_ROLE_POPOUT_MUST_NOT_BE;
                        break;
                    case d.OperatorTypes.LESS_THAN:
                        l = f.default.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_AT_MOST, i = Math.max(0, i - 1);
                        break;
                    case d.OperatorTypes.GREATER_THAN:
                        l = f.default.Messages.CONNECTIONS_ROLE_POPOUT_MUST_HAVE_AT_LEAST, i = Math.max(0, i + 1);
                        break;
                    case void 0:
                    case null:
                        return null
                }
                if (null != r && (l = r), l instanceof s.FormattedMessage && null != n) switch (t) {
                    case N.PlatformTypes.REDDIT:
                        switch (a) {
                            case d.MetadataFields.CREATED_AT:
                                l = l.format({
                                    platformQuantityHook: () => f.default.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                        days: i
                                    })
                                });
                                break;
                            case d.MetadataFields.REDDIT_TOTAL_KARMA:
                                l = l.format({
                                    platformQuantityHook: () => f.default.Messages.CONNECTIONS_ROLE_RULE_REDDIT_KARMA.format({
                                        karma: i
                                    })
                                });
                                break;
                            case d.MetadataFields.REDDIT_GOLD:
                                l = l.format({
                                    platformQuantityHook: () => f.default.Messages.CONNECTIONS_ROLE_RULE_REDDIT_GOLD
                                });
                                break;
                            case d.MetadataFields.REDDIT_MOD:
                                l = l.format({
                                    platformQuantityHook: () => f.default.Messages.CONNECTIONS_ROLE_RULE_REDDIT_MODERATOR
                                });
                                break;
                            default:
                                return null
                        }
                        break;
                    case N.PlatformTypes.STEAM:
                        switch (a) {
                            case d.MetadataFields.CREATED_AT:
                                l = l.format({
                                    platformQuantityHook: () => f.default.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                        days: i
                                    })
                                });
                                break;
                            case d.MetadataFields.STEAM_GAME_COUNT:
                                l = l.format({
                                    platformQuantityHook: () => f.default.Messages.CONNECTIONS_ROLE_RULE_STEAM_GAMES.format({
                                        count: i
                                    })
                                });
                                break;
                            case d.MetadataFields.STEAM_ITEM_COUNT_TF2:
                                l = l.format({
                                    platformQuantityHook: () => f.default.Messages.CONNECTIONS_ROLE_RULE_STEAM_TF2_ITEMS.format({
                                        count: i
                                    })
                                });
                                break;
                            case d.MetadataFields.STEAM_ITEM_COUNT_DOTA2:
                                l = l.format({
                                    platformQuantityHook: () => f.default.Messages.CONNECTIONS_ROLE_RULE_STEAM_DOTA2_ITEMS.format({
                                        count: i
                                    })
                                });
                                break;
                            default:
                                return null
                        }
                        break;
                    case N.PlatformTypes.TWITTER:
                        switch (a) {
                            case d.MetadataFields.CREATED_AT:
                                l = l.format({
                                    platformQuantityHook: () => f.default.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                        days: i
                                    })
                                });
                                break;
                            case d.MetadataFields.TWITTER_VERIFIED:
                                l = l.format({
                                    platformQuantityHook: () => f.default.Messages.CONNECTIONS_ROLE_RULE_TWITTER_VERIFIED
                                });
                                break;
                            case d.MetadataFields.TWITTER_FOLLOWERS_COUNT:
                                l = l.format({
                                    platformQuantityHook: () => f.default.Messages.CONNECTIONS_ROLE_RULE_TWITTER_FOLLOWERS.format({
                                        count: i
                                    })
                                });
                                break;
                            case d.MetadataFields.TWITTER_STATUSES_COUNT:
                                l = l.format({
                                    platformQuantityHook: () => f.default.Messages.CONNECTIONS_ROLE_RULE_TWITTER_STATUSES.format({
                                        count: i
                                    })
                                });
                                break;
                            default:
                                return null
                        }
                        break;
                    case N.PlatformTypes.PAYPAL:
                        switch (a) {
                            case d.MetadataFields.CREATED_AT:
                                l = l.format({
                                    platformQuantityHook: () => f.default.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                        days: i
                                    })
                                });
                                break;
                            case d.MetadataFields.PAYPAL_VERIFIED:
                                l = l.format({
                                    platformQuantityHook: () => f.default.Messages.CONNECTIONS_ROLE_RULE_PAYPAL_VERIFIED
                                });
                                break;
                            default:
                                return null
                        }
                        break;
                    case N.PlatformTypes.EBAY:
                        switch (a) {
                            case d.MetadataFields.CREATED_AT:
                                l = l.format({
                                    platformQuantityHook: () => f.default.Messages.CONNECTIONS_ROLE_RULE_ACCOUNT_AGE.format({
                                        days: i
                                    })
                                });
                                break;
                            case d.MetadataFields.EBAY_TOP_RATED_SELLER:
                                l = l.format({
                                    platformQuantityHook: () => f.default.Messages.CONNECTIONS_EBAY_TOP_RATED_SELLER
                                });
                                break;
                            case d.MetadataFields.EBAY_POSITIVE_FEEDBACK_PERCENTAGE:
                                l = l.format({
                                    platformQuantityHook: () => f.default.Messages.CONNECTIONS_ROLE_RULE_EBAY_POSITIVE_FEEDBACK_PERCENTAGE.format({
                                        value: i
                                    })
                                });
                                break;
                            case d.MetadataFields.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT:
                                l = l.format({
                                    platformQuantityHook: () => f.default.Messages.CONNECTIONS_ROLE_RULE_EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT.format({
                                        count: i
                                    })
                                });
                                break;
                            case d.MetadataFields.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT:
                                l = l.format({
                                    platformQuantityHook: () => f.default.Messages.CONNECTIONS_ROLE_RULE_EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT.format({
                                        count: i
                                    })
                                });
                                break;
                            default:
                                return null
                        }
                        break;
                    case N.PlatformTypes.TIKTOK:
                        switch (a) {
                            case d.MetadataFields.TIKTOK_VERIFIED:
                                l = l.format({
                                    platformQuantityHook: () => f.default.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_VERIFIED
                                });
                                break;
                            case d.MetadataFields.TIKTOK_FOLLOWER_COUNT:
                                l = l.format({
                                    platformQuantityHook: () => f.default.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_FOLLOWER_COUNT.format({
                                        count: i
                                    })
                                });
                                break;
                            case d.MetadataFields.TIKTOK_FOLLOWING_COUNT:
                                l = l.format({
                                    platformQuantityHook: () => f.default.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_FOLLOWING_COUNT.format({
                                        count: i
                                    })
                                });
                                break;
                            case d.MetadataFields.TIKTOK_LIKES_COUNT:
                                l = l.format({
                                    platformQuantityHook: () => f.default.Messages.CONNECTIONS_ROLE_RULE_TIKTOK_LIKES_COUNT.format({
                                        count: i
                                    })
                                });
                                break;
                            default:
                                return null
                        }
                        break;
                    default:
                        return null
                }
                return l
            }

            function A(e) {
                return Object.values(e.roles).some(e => {
                    var t;
                    return (null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null
                })
            }

            function I(e) {
                var t, a;
                let {
                    guildMember: n,
                    guild: r,
                    channel: o,
                    onlyChannelConnectionRoles: i = !1
                } = e;
                if (null == n) return null;
                if (null == r && null != o && (r = T.default.getGuild(o.getGuildId())), null == r) return null;
                let u = n.roles.map(e => {
                        var t, a;
                        return null === (a = r) || void 0 === a ? void 0 : null === (t = a.roles) || void 0 === t ? void 0 : t[e]
                    }).filter(e => {
                        var t;
                        return (null == e ? void 0 : null === (t = e.tags) || void 0 === t ? void 0 : t.guild_connections) === null
                    }).sort((e, t) => (l(null != e && null != t, "roleA or roleB is null"), t.position - e.position)),
                    s = E.intersection(u, (0, _.default)(o));
                return s.length > 0 ? null !== (t = s[0]) && void 0 !== t ? t : null : i ? null : null !== (a = u[0]) && void 0 !== a ? a : null
            }

            function L(e, t) {
                if (null == e || "" === e) return null;
                let a = new Date(e);
                return !(a instanceof Date) || isNaN(a.getTime()) ? null : a.toLocaleDateString(t, {
                    month: "short",
                    day: "numeric",
                    year: "numeric"
                })
            }(n = r || (r = {}))[n.AND = 0] = "AND", n[n.OR = 1] = "OR"
        },
        214509: function(e, t, a) {
            "use strict";
            var n, r, o, l, i, E;
            a.r(t), a.d(t, {
                OperatorTypes: function() {
                    return n
                },
                MetadataFields: function() {
                    return r
                },
                GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE: function() {
                    return u
                },
                MetadataItemTypes: function() {
                    return o
                }
            }), (l = n || (n = {}))[l.EQUAL = 1] = "EQUAL", l[l.NOT_EQUAL = 2] = "NOT_EQUAL", l[l.LESS_THAN = 3] = "LESS_THAN", l[l.GREATER_THAN = 4] = "GREATER_THAN", (i = r || (r = {})).CREATED_AT = "created_at", i.REDDIT_TOTAL_KARMA = "total_karma", i.REDDIT_GOLD = "gold", i.REDDIT_MOD = "mod", i.STEAM_GAME_COUNT = "game_count", i.STEAM_ITEM_COUNT_TF2 = "item_count_tf2", i.STEAM_ITEM_COUNT_DOTA2 = "item_count_dota2", i.TWITTER_VERIFIED = "verified", i.TWITTER_FOLLOWERS_COUNT = "followers_count", i.TWITTER_STATUSES_COUNT = "statuses_count", i.PAYPAL_VERIFIED = "verified", i.EBAY_POSITIVE_FEEDBACK_PERCENTAGE = "positive_feedback_percentage", i.EBAY_TOP_RATED_SELLER = "top_rated_seller", i.EBAY_UNIQUE_NEGATIVE_FEEDBACK_COUNT = "unique_negative_feedback_count", i.EBAY_UNIQUE_POSITIVE_FEEDBACK_COUNT = "unique_positive_feedback_count", i.TIKTOK_VERIFIED = "verified", i.TIKTOK_FOLLOWER_COUNT = "follower_count", i.TIKTOK_FOLLOWING_COUNT = "following_count", i.TIKTOK_LIKES_COUNT = "likes_count";
            let u = "application";
            (E = o || (o = {}))[E.INTEGER_LESS_THAN_EQUAL = 1] = "INTEGER_LESS_THAN_EQUAL", E[E.INTEGER_GREATER_THAN_EQUAL = 2] = "INTEGER_GREATER_THAN_EQUAL", E[E.INTEGER_EQUAL = 3] = "INTEGER_EQUAL", E[E.INTEGER_NOT_EQUAL = 4] = "INTEGER_NOT_EQUAL", E[E.DATETIME_LESS_THAN_EQUAL = 5] = "DATETIME_LESS_THAN_EQUAL", E[E.DATETIME_GREATER_THAN_EQUAL = 6] = "DATETIME_GREATER_THAN_EQUAL", E[E.BOOLEAN_EQUAL = 7] = "BOOLEAN_EQUAL", E[E.BOOLEAN_NOT_EQUAL = 8] = "BOOLEAN_NOT_EQUAL"
        },
        926994: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                openProviderAuthorize: function() {
                    return d
                },
                default: function() {
                    return N
                }
            });
            var n = a("37983");
            a("884691");
            var r = a("77078"),
                o = a("619340"),
                l = a("455711"),
                i = a("938157"),
                E = a("448819"),
                u = a("128259"),
                s = a("773336"),
                _ = a("214509"),
                T = a("49111");
            async function d(e) {
                let {
                    location: t,
                    twoWayLinkType: a
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = arguments.length > 2 ? arguments[2] : void 0, r = Math.round(screen.width / 2 - 350), l = screen.height > 640 ? Math.round(screen.height / 2 - 320) : 0, i = null;
                !(0, s.isDesktop)() && (i = window.open("".concat(window.location.protocol, "//").concat(window.location.host).concat(T.Routes.CONNECTIONS(e), "?loading=true"), "authorize", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,top=".concat(l, ",left=").concat(r, ",width=").concat(700, ",height=").concat(640)));
                let E = n;
                if (null == E && e !== _.GUILD_ROLE_CONNECTION_APPLICATION_CONNECTION_TYPE) {
                    let {
                        body: n
                    } = await o.default.authorize(e, {
                        location: t,
                        twoWayLinkType: a
                    });
                    E = n.url
                }
                if (null != E) return null != i ? i.location.href = E : window.open(E), E
            }

            function N(e, t, o) {
                if (e === T.PlatformTypes.LEAGUE_OF_LEGENDS && (e = T.PlatformTypes.RIOT_GAMES), e === T.PlatformTypes.CRUNCHYROLL) {
                    l.showModal([null != t ? t : "unknown"]);
                    return
                }
                if (e === T.PlatformTypes.XBOX) {
                    E.showModal([null != t ? t : "unknown"]);
                    return
                }
                if (e === T.PlatformTypes.PLAYSTATION || e === T.PlatformTypes.PLAYSTATION_STAGING) {
                    i.showModal([null != t ? t : "unknown"], e);
                    return
                }
                if (e === T.PlatformTypes.DOMAIN) {
                    (0, r.openModalLazy)(async () => {
                        let {
                            default: e
                        } = await a.el("359113").then(a.bind(a, "359113"));
                        return a => (0, n.jsx)(e, {
                            analyticsLocation: [null != t ? t : "unknown"],
                            ...a
                        })
                    });
                    return
                }
                if (null != o) {
                    (0, u.handleClick)({
                        shouldConfirm: !0,
                        href: o,
                        onConfirm: () => {
                            d(e, {
                                location: t
                            }, o)
                        }
                    });
                    return
                }
                d(e, {
                    location: t
                })
            }
        },
        157186: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                shouldShowMembershipVerificationGate: function() {
                    return E
                },
                useShowMemberVerificationGate: function() {
                    return u
                }
            });
            var n = a("446674"),
                r = a("26989"),
                o = a("305961"),
                l = a("88093"),
                i = a("697218");

            function E(e) {
                var t, a;
                let [n, E, u, s] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.default, l.default, i.default, r.default];
                if (null == e) return !1;
                let _ = n.getGuild(e),
                    {
                        notClaimed: T
                    } = E.getCheck(e),
                    d = u.getCurrentUser(),
                    N = !1;
                null != d && (N = null !== (a = null === (t = s.getMember(e, d.id)) || void 0 === t ? void 0 : t.isPending) && void 0 !== a && a);
                let f = N || T;
                return f && !!(null == _ ? void 0 : _.hasVerificationGate())
            }

            function u(e) {
                return (0, n.useStateFromStores)([o.default, l.default, i.default, r.default], () => null != e && E(e, [o.default, l.default, i.default, r.default]), [e])
            }
        },
        455711: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                showModal: function() {
                    return o
                }
            });
            var n = a("37983");
            a("884691");
            var r = a("77078");

            function o(e) {
                (0, r.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await a.el("620595").then(a.bind(a, "620595"));
                    return a => (0, n.jsx)(t, {
                        analyticsLocation: e,
                        ...a
                    })
                })
            }
        },
        938157: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                showModal: function() {
                    return o
                }
            });
            var n = a("37983");
            a("884691");
            var r = a("77078");

            function o(e, t) {
                (0, r.openModalLazy)(async () => {
                    let {
                        default: r
                    } = await a.el("59833").then(a.bind(a, "59833"));
                    return a => (0, n.jsx)(r, {
                        analyticsLocation: e,
                        platformType: t,
                        ...a
                    })
                })
            }
        },
        448819: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                showModal: function() {
                    return o
                }
            });
            var n = a("37983");
            a("884691");
            var r = a("77078");

            function o(e) {
                (0, r.openModalLazy)(async () => {
                    let {
                        default: t
                    } = await a.el("194167").then(a.bind(a, "194167"));
                    return a => (0, n.jsx)(t, {
                        analyticsLocation: e,
                        ...a
                    })
                })
            }
        },
        88093: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                default: function() {
                    return C
                }
            });
            var n = a("446674"),
                r = a("913144"),
                o = a("568734"),
                l = a("26989"),
                i = a("305961"),
                E = a("697218"),
                u = a("49111"),
                s = a("657944");
            let _ = {
                    notClaimed: !1,
                    notEmailVerified: !1,
                    notPhoneVerified: !1,
                    newAccount: !1,
                    newMember: !1,
                    canChat: !0
                },
                T = new Set,
                d = {};

            function N(e) {
                let t;
                f(e), T.add(e);
                let a = i.default.getGuild(e),
                    n = E.default.getCurrentUser();
                if (null == a || a.verificationLevel === u.VerificationLevels.NONE || null == n || a.isOwner(n) || n.isPhoneVerified()) return;
                let _ = l.default.getMember(a.id, n.id);
                if (null != _) {
                    var N;
                    if ((0, o.hasFlag)(null !== (N = _.flags) && void 0 !== N ? N : 0, s.GuildMemberFlags.BYPASSES_VERIFICATION)) return;
                    let e = new Set;
                    for (let t of _.roles) {
                        let n = a.getRole(t);
                        null != n && !n.managed && e.add(t)
                    }
                    let t = new Date("2022-12-02 00:00:00"),
                        n = null == _.joinedAt || new Date(_.joinedAt) < t,
                        r = a.hasFeature(u.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED) && !n;
                    if (!r && e.size > 0) return
                }
                let c = +n.createdAt + 6e4 * u.VerificationCriteria.ACCOUNT_AGE - Date.now(),
                    O = +a.joinedAt + 6e4 * u.VerificationCriteria.MEMBER_AGE - Date.now(),
                    C = a.verificationLevel >= u.VerificationLevels.LOW && !n.isClaimed(),
                    A = !1,
                    I = !1,
                    L = !1,
                    R = !1;
                !n.isPhoneVerified() && !n.isStaff() && (A = a.verificationLevel >= u.VerificationLevels.LOW && !n.verified, I = a.verificationLevel >= u.VerificationLevels.VERY_HIGH, L = a.verificationLevel >= u.VerificationLevels.MEDIUM && c > 0, R = a.verificationLevel >= u.VerificationLevels.HIGH && O > 0);
                let p = [];
                R && p.push(O), L && p.push(c), p.length > 0 && (t = setTimeout(() => r.default.dispatch({
                    type: "GUILD_VERIFICATION_CHECK",
                    guildId: e
                }), Math.max(...p))), d[e] = {
                    notClaimed: C,
                    notEmailVerified: A,
                    notPhoneVerified: I,
                    newAccount: L,
                    newMember: R,
                    canChat: !(C || A || I || L || R),
                    accountDeadline: new Date(Date.now() + c),
                    memberDeadline: new Date(Date.now() + O),
                    timeoutRef: t
                }
            }

            function f(e) {
                let t = d[e];
                null != t && clearTimeout(t.timeoutRef), delete d[e]
            }

            function c(e) {
                T.delete(e.guild.id), N(e.guild.id)
            }
            class O extends n.default.Store {
                initialize() {
                    this.waitFor(i.default, E.default)
                }
                getCheck(e) {
                    var t;
                    return !T.has(e) && N(e), null !== (t = d[e]) && void 0 !== t ? t : _
                }
                canChatInGuild(e) {
                    return this.getCheck(e).canChat
                }
            }
            O.displayName = "GuildVerificationStore";
            var C = new O(r.default, {
                CONNECTION_OPEN: function() {
                    for (let e in T.clear(), d) f(e)
                },
                CONNECTION_CLOSED: function() {
                    Object.keys(d).forEach(f)
                },
                CURRENT_USER_UPDATE: function() {
                    T.clear()
                },
                GUILD_CREATE: c,
                GUILD_UPDATE: c,
                GUILD_DELETE: function(e) {
                    let {
                        guild: t
                    } = e;
                    f(t.id)
                },
                GUILD_MEMBER_UPDATE: function(e) {
                    var t;
                    let {
                        guildId: a,
                        user: n
                    } = e;
                    if (n.id !== (null === (t = E.default.getCurrentUser()) || void 0 === t ? void 0 : t.id)) return !1;
                    T.delete(a)
                },
                GUILD_VERIFICATION_CHECK: function(e) {
                    let {
                        guildId: t
                    } = e;
                    N(t)
                }
            })
        }
    }
]);
//# sourceMappingURL=1279d5f1796bdc03dd04.js.map